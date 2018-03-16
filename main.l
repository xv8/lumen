
(define eval-print (form)
  (let ((ok v) (guard ((get (get _G 'compiler) 'eval) form)))
    (if (not ok)
        (target
          js: (print (get v 'stack))
          lua: (print (cat "error: " (get v 'message) "\n" (get v 'stack))))
        (is? v) (print (str v)))))

(define rep (s)
  (eval-print ((get (get _G 'reader) 'read-string) s)))

(define repl ()
  (let buf ""
    (define rep1 (s)
      (cat! buf s)
      (let (more ()
            form ((get (get _G 'reader) 'read-string) buf more))
          (unless (= form more)
            (eval-print form)
            (set buf "")
            ((get (get _G 'system) 'write) "> ")))))
  ((get (get _G 'system) 'write) "> ")
  (target
    js: (let in (get process 'stdin)
          ((get in 'setEncoding) 'utf8)
          ((get in 'on) 'data rep1))
    lua: (if process
             ((get (get process 'stdin) 'on) (get process 'stdin) 'data rep1)
           (while true
             (let s ((get io 'read))
               (if s (rep1 (cat s "\n")) (break)))))))

(define-global expand-file (path)
  (let (s ((get (get _G 'reader) 'stream) ((get (get _G 'system) 'read-file) path))
        body ((get (get _G 'reader) 'read-all) s))
    ((get (get _G 'compiler) 'expand) `(do ,@body))))

(define-global compile-file (path)
  (let (body (expand-file path)
        form ((get (get _G 'compiler) 'expand) `(do ,@body)))
    ((get (get _G 'compiler) 'compile) form :stmt)))

(define-global load (path)
  (let previous (get _G 'target)
    (set (get _G 'target) (language))
    (let code (compile-file path)
      (set (get _G 'target) previous)
      ((get (get _G 'compiler) 'run) code))))

(define script-file? (path)
  (not (or (= "-" (char path 0))
           (= ".js" (clip path (- (# path) 3)))
           (= ".lua" (clip path (- (# path) 4))))))

(define run-file (path)
  (if (script-file? path)
      (load path)
    ((get (get _G 'compiler) 'run) ((get (get _G 'system) 'read-file) path))))

(define usage ()
  (print "usage: lumen [<file> <arguments> | options <object files>]")
  (print " <file>\t\tProgram read from script file")
  (print " <arguments>\tPassed to program in system.argv")
  (print " <object files>\tLoaded before compiling <input>")
  (print "options:")
  (print " -c <input>\tCompile input file")
  (print " -o <output>\tOutput file")
  (print " -t <target>\tTarget language (default: lua)")
  (print " -e <expr>\tExpression to evaluate"))

(define main ()
  (let arg (hd (get (get _G 'system) 'argv))
    (if (and arg (script-file? arg))
        (load arg)
        (or (= arg "-h")
            (= arg "--help"))
        (usage)
      (let (pre ()
            input nil
            output nil
            target1 nil
            expr nil
            argv (get (get _G 'system) 'argv))
        (for i (# argv)
          (let a (at argv i)
            (if (or (= a "-c") (= a "-o") (= a "-t") (= a "-e"))
                (if (= i (edge argv))
                    (print (cat "missing argument for " a))
                  (do (inc i)
                      (let val (at argv i)
                        (if (= a "-c") (set input val)
                            (= a "-o") (set output val)
                            (= a "-t") (set target1 val)
                            (= a "-e") (set expr val)))))
                (not (= "-" (char a 0))) (add pre a))))
        (step file pre
          (run-file file))
        (if (nil? input) (if expr (rep expr) (repl))
          (do (if target1 (set (get _G 'target) target1))
              (let code (compile-file input)
                (if (or (nil? output) (= output "-"))
                    (print code)
                  ((get (get _G 'system) 'write-file) output code)))))))))

(export eval-print
        rep
        repl
        compile-file
        load
        script-file?
        run-file
        usage
        main)
