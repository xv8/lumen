(define reader (get _G 'reader))
(define compiler (get _G 'compiler))
(define system (get _G 'system))

(define eval-print (form)
  (let ((ok v) (guard ((get compiler 'eval) form)))
    (if (not ok)
        (print (get v 'stack))
        (is? v) (print (str v)))))

(define rep (s)
  (eval-print ((get reader 'read-string) s)))

(define repl ()
  (let buf ""
    (define rep1 (s)
      (cat! buf s)
      (let (more ()
            form ((get reader 'read-string) buf more))
          (unless (= form more)
            (eval-print form)
            (set buf "")
            ((get system 'write) "> ")))))
  ((get system 'write) "> ")
  (let in (get process 'stdin)
    ((get in 'removeAllListeners))
    ((get in 'setEncoding) 'utf8)
    ((get in 'on) 'data rep1)))

(define-global pp-to-string (body)
  (if (atom? body) (str body)
      (empty? body) (str body)
    (let s "("
      (step x body
        (cat! s (str x) "\n\n"))
      (cat s ")"))))

(define-global pp (body)
  (print (pp-to-string body))
  body)

(define-global read-from-file (path)
  (let s ((get reader 'stream) ((get system 'read-file) path))
    ((get reader 'read-all) s)))

(define-global expand-file (path)
  (let body `(do ,@(read-from-file path))
    ((get compiler 'expand) body)))

(define-global compile-file (path)
  (let form (expand-file path)
    ((get compiler 'compile) form stmt: true)))

(define-global load (path)
  (let code (compile-file path)
    (let prev (or (get _G 'exports) (obj))
      (with x (set (get _G 'exports) (obj))
        ((get compiler 'run) code)
        (set (get _G 'exports) prev)))))

(define script-file? (path)
  (not (or (= "-" (char path 0))
           (= ".js" (clip path (- (# path) 3))))))

(define run-file (path)
  (if (script-file? path)
      (load path)
    ((get compiler 'run) ((get system 'read-file) path))))

(define usage ()
  (print "usage: dax [<file> <arguments> | options <object files>]")
  (print " <file>\t\tProgram read from script file")
  (print " <arguments>\tPassed to program in system.argv")
  (print " <object files>\tLoaded before compiling <input>")
  (print "options:")
  (print " -c <input>\tCompile input file")
  (print " -x <input>\tExpand input file")
  (print " -a <input>\tRead input file")
  (print " -o <output>\tOutput file")
  (print " -e <expr>\tExpression to evaluate"))

(define main ()
  (let arg (hd (get system 'argv))
    (if (and arg (script-file? arg))
        (load arg)
        (or (= arg "-h")
            (= arg "--help"))
        (usage)
      (let (pre ()
            op nil
            input nil
            output nil
            expr nil
            argv (get system 'argv))
        (for i (# argv)
          (let a (at argv i)
            (if (or (= a "-c") (= a "-x") (= a "-a") (= a "-o") (= a "-t") (= a "-e"))
                (if (= i (edge argv))
                    (print (cat "missing argument for " a))
                  (do (inc i)
                      (let val (at argv i)
                        (if (= a "-c") (set input val op 'compile)
                            (= a "-x") (set input val op 'expand)
                            (= a "-a") (set input val op 'read)
                            (= a "-o") (set output val)
                            (= a "-e") (set expr val)))))
                (not (= "-" (char a 0))) (add pre a))))
        (step file pre
          (run-file file))
        (if (nil? input) (if expr (rep expr) (repl))
          (do (let code (if (= op 'expand) (pp-to-string (expand-file input))
                            (= op 'read) (pp-to-string (read-from-file input))
                          (compile-file input))
                (if (or (nil? output) (= output "-"))
                    (print code)
                  ((get system 'write-file) output code)))))))))

(export reader
        compiler
        system
        eval-print
        rep
        repl
        compile-file
        load
        script-file?
        run-file
        usage
        main)
