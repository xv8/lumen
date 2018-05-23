(define fs (require 'fs))
(define child_process (require 'child_process))

(define-global read-file (path)
  ((get fs 'readFileSync) path 'utf8))

(define-global write-file (path data)
  ((get fs 'writeFileSync) path data 'utf8))

(define-global file-exists? (path)
  (and ((get fs 'existsSync) path 'utf8)
       ((get ((get fs 'statSync) path) 'isFile))))


(define-global directory-exists? (path)
  (and ((get fs 'existsSync) path 'utf8)
       ((get ((get fs 'statSync) path) 'isDirectory))))

(define path-separator
  (get (require 'path) 'sep))

(define path-join parts
  (or (reduce (fn (x y) (cat x path-separator y)) parts) ""))

(define-global get-environment-variable (name)
  (get (get process 'env) name))

(define-global set-environment-variable (name value)
  (set (get (get process 'env) name) value))

(define-global write (x)
  (let out (get process 'stdout)
    ((get out 'write) x)))

(define-global exit (code)
  ((get process 'exit) code))

(define-global argv
  (cut (get process 'argv) 2))

(define-global reload (module)
  (wipe (get (get require 'cache) ((get require 'resolve) module)))
  (require module))

(define-global shell (command)
  ((get ((get child_process 'execSync) command) 'toString)))

(export read-file
        write-file
        file-exists?
        directory-exists?
        path-separator
        path-join
        get-environment-variable
        write
        exit
        argv
        reload
        shell)
