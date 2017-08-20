reader = (require 'reader)
compiler = (require 'compiler)
system = (require 'system)

(define eval-print (form)
  (let ((ok v) (guard ((get compiler 'eval) form)))
    (if (not ok)
        (target
          js: (print (get v 'stack))
          lua: (print (cat "error: " (get v 'message) "\n" (get v 'stack))))
        (is? v) (print (str v)))))

(define rep (s)
  (eval-print ((get reader 'read-string) s)))

(define repl ()
  buf = ""
  (define rep1 (s)
    (cat! buf s)
    more = ()
    buf1 = (cat "(do " buf ")")
    form = ((get reader 'read-string) buf1 more)
    (unless (form == more)
      (eval-print form)
      buf = ""
      ((get system 'write) "> ")))
  ((get system 'write) "> ")
  (target
    js: (do
          in = (get process 'stdin)
          ((get in 'setEncoding) 'utf8)
          ((get in 'on) 'data rep1))
    lua: (while true
           s = ((get io 'read))
           (if s (rep1 (cat s "\n")) (break)))))

(define-global compile-file (path)
  s = ((get reader 'stream) ((get system 'read-file) path))
  body = ((get reader 'read-all) s)
  form = ((get compiler 'expand) `(do ,@body))
  ((get compiler 'compile) form :stmt))

(define-global load (path)
  previous = target
  target = (language)
  code = (compile-file path)
  target = previous
  ((get compiler 'run) code))

(define script-file? (path)
  (not (or ("-" == (char path 0))
           (".js" == (clip path ((# path) - 3)))
           (".lua" == (clip path ((# path) - 4))))))

(define run-file (path)
  (if (script-file? path)
      (load path)
    ((get compiler 'run) ((get system 'read-file) path))))

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
  arg = (hd (get system 'argv))

  (when (arg and (script-file? arg))
    (return (load arg)))

  (when ((arg == "-h") or
         (arg == "--help"))
    (return (usage)))

  pre = ()
  input = nil
  output = nil
  target1 = nil
  expr = nil
  argv = (get system 'argv)

  (for i (# argv)
    a = (at argv i)
    arg? = ((a == "-c") or (a == "-o") or (a == "-t") or (a == "-e"))
    (when arg?
      (when (i == (edge argv))
        (print (cat "missing argument for " a))
        (break))
      (inc i)
      val = (at argv i)
      (if (a == "-c") (set input val)
          (a == "-o") (set output val)
          (a == "-t") (set target1 val)
          (a == "-e") (set expr val)))
    (unless arg?
      (when ((char a 0) != "-")
        (add pre a))))

  (step file pre
    (run-file file))

  (when (nil? input)
    (if expr (rep expr) (repl))
    (return))

  (when target1
    (set target target1))

  code = (compile-file input)
  (if ((nil? output) or (output == "-"))
      (print code)
    ((get system 'write-file) output code)))

(main)
