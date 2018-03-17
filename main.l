(define reader (require 'reader))
(define compiler (require 'compiler))
(define system (require 'system))

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
    ((get in 'setEncoding) 'utf8)
    ((get in 'on) 'data rep1)))

(define-global compile-file (path)
  (let (s ((get reader 'stream) ((get system 'read-file) path))
        body ((get reader 'read-all) s)
        form ((get compiler 'expand) `(do ,@body)))
    ((get compiler 'compile) form :stmt)))

(define-global load (path)
  (let code (compile-file path)
    ((get compiler 'run) code)))

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
            input nil
            output nil
            expr nil
            argv (get system 'argv))
        (for i (# argv)
          (let a (at argv i)
            (if (or (= a "-c") (= a "-o") (= a "-t") (= a "-e"))
                (if (= i (edge argv))
                    (print (cat "missing argument for " a))
                  (do (inc i)
                      (let val (at argv i)
                        (if (= a "-c") (set input val)
                            (= a "-o") (set output val)
                            (= a "-e") (set expr val)))))
                (not (= "-" (char a 0))) (add pre a))))
        (step file pre
          (run-file file))
        (if (nil? input) (if expr (rep expr) (repl))
          (do (let code (compile-file input)
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
