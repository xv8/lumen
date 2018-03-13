(target js: (define fs (require 'fs)))
(target js: (define child_process (require 'child_process)))
(target lua: (define uv (and (pcall (fn () (require 'uv))) (require 'uv))))

(target lua:
  (define call-with-file (f path mode)
    (let |h,e| (. io (open path mode))
      (unless h
        (error e))
      (with x (f h)
        (: h (close))))))

(define read-file (path)
  (target
    js: (. fs (readFileSync path 'utf8))
    lua: (call-with-file (fn (f) (: f (read '*a))) path)))

(define write-file (path data)
  (target
    js: (. fs (writeFileSync path data 'utf8))
    lua: (call-with-file (fn (f) (: f (write data))) path 'w)))

(define file-exists? (path)
  (target
    js: (and (. fs (existsSync path 'utf8))
             (. fs (statSync path) (isFile)))
    lua: (let f (. io (open path))
           (and (is? f)
                (with r (or (is? (: f (read 0)))
                            (= 0 (: f (seek 'end))))
                  (: f (close)))))))

(define directory-exists? (path)
  (target
    js: (and (. fs (existsSync path 'utf8))
             (. fs (statSync path) (isDirectory)))
    lua: (let f (. io (open path))
           (and (is? f)
                (with r (and (not (: f (read 0)))
                             (not (= 0 (: f (seek 'end)))))
                  (: f (close)))))))

(define path-separator
  (target
    js: (. (require 'path) 'sep)
    lua: (char (. _G 'package 'config) 0)))

(define path-join parts
  (or (reduce (fn (x y) (cat x path-separator y)) parts) ""))

(define get-environment-variable (name)
  (target
    js: (. process 'env name)
    lua: (. os (getenv name))))

(define write (x)
  (target js: (. process 'stdout (write x))
          lua: (if uv
                   (. uv (write (. process 'stdout 'handle) x))
                 (. io (write x)))))

(define exit (code)
  (target js: (. process (exit code))
          lua: (. os (exit code))))

(define argv
  (target js: (cut (. process 'argv) 2) lua: (or arg (if args (cut args 1)))))

(define reload (module)
  (wipe (target
          lua: (. package 'loaded module)
          js: (get (. require 'cache)
                   (. require (resolve module)))))
  (require module))

(define run (command)
  (target
    js: (. child_process (execSync command) (toString))
    lua: (let f (. io (popen command))
           (with x (: f (read '*all))
             (: f (close))))))

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
        run)
