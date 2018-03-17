(define fs (require 'fs))
(define child_process (require 'child_process))

(define read-file (path)
  ((get fs 'readFileSync) path 'utf8))

(define write-file (path data)
  ((get fs 'writeFileSync) path data 'utf8))

(define file-exists? (path)
  (and ((get fs 'existsSync) path 'utf8)
       ((get ((get fs 'statSync) path) 'isFile))))


(define directory-exists? (path)
  (and ((get fs 'existsSync) path 'utf8)
       ((get ((get fs 'statSync) path) 'isDirectory))))

(define path-separator
  (get (require 'path) 'sep))

(define path-join parts
  (or (reduce (fn (x y) (cat x path-separator y)) parts) ""))

(define get-environment-variable (name)
  (get (get process 'env) name))

(define set-environment-variable (name value)
  (set (get (get process 'env) name) value))

(define write (x)
  (let out (get process 'stdout)
    ((get out 'write) x)))

(define exit (code)
  ((get process 'exit) code))

(define argv
  (cut (get process 'argv) 2))

(define reload (module)
  (wipe (get (get require 'cache) ((get require 'resolve) module)))
  (require module))

(define shell (command)
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
