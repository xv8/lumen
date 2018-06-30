
(define create (globals)
  (define _G (Object .assign (obj) (or globals (obj))))
  (set (_G ._G) _G)
  (set (_G .environment) (list (obj)))
  (when-compiling
    (let expand-file (_G .expand-file)
      `(do
         ,@(expand-file "runtime.l")
         ,@(expand-file "macros.l")
         (set (_G .compiler)
              (with exports (obj)
                (let (self exports module (obj exports: exports))
                  ,@(expand-file "compiler.l")))
              (_G .reader)
              (with exports (obj)
                (let (self exports module (obj exports: exports))
                  ,@(expand-file "reader.l")))
              (_G .system)
              (with exports (obj)
                (let (self exports module (obj exports: exports))
                  ,@(expand-file "system.l")))
              (_G .main)
              (with exports (obj)
                (let (self exports module (obj exports: exports))
                  ,@(expand-file "main.l"))))
         (Object .assign _G (_G .main)))))
  _G)

(set (module .exports .create) create)


