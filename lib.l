(define vm (require 'vm))

(define create (_G)
  (set (get _G '_G) _G)
  (set (get _G 'environment) (list (obj)))
  (when-compiling
    `(do 
       ,@(expand-file "runtime.l")
       ,@(expand-file "macros.l")
       (set (get _G 'compiler)
              (with exports (obj)
                ,@(expand-file "compiler.l"))
              (get _G 'reader)
              (with exports (obj)
                ,@(expand-file "reader.l"))
              (get _G 'system)
              (with exports (obj)
                ,@(expand-file "system.l")))
         (with exports _G
           ,@(expand-file "main.l"))))
  _G)

(set (get (get |module| 'exports) 'create) create)


