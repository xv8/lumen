(define delimiters (set-of "(" ")" "[" "]" "{" "}" ";" "\r" "\n"))
(define whitespace (set-of " " "\t" "\r" "\n"))

(define stream (str more)
  (obj pos: 0 string: str len: (# str) more: more))

(define peek-char (s)
  (let ((pos: pos len: len string: string) s)
    (when (< pos len)
      (char string pos))))

(define read-char (s)
  (let c (peek-char s)
    (if c (do (inc (. s 'pos)) c))))

(define skip-non-code (s)
  (while true
    (let c (peek-char s)
      (if (nil? c) (break)
          (. whitespace c) (read-char s)
          (= c ";")
          (do (while (and c (not (= c "\n")))
                (set c (read-char s)))
              (skip-non-code s))
        (break)))))

(define read-table (obj))
(define eof (obj))

(define read (s)
  (skip-non-code s)
  (let c (peek-char s)
    (if (is? c)
        ((or (. read-table c)
             (. read-table '""))
         s)
      eof)))

(define read-all (s)
  (with l ()
    (while true
      (let form (read s)
        (if (= form eof) (break))
        (add l form)))))

(define-global read-string (str more)
  (let x (read (stream str more))
    (unless (= x eof) x)))

(define key? (atom)
  (and (string? atom)
       (> (# atom) 1)
       (= (char atom (edge atom)) ":")))

(define flag? (atom)
  (and (string? atom)
       (> (# atom) 1)
       (= (char atom 0) ":")))

(define expected (s c)
  (let ((more: more pos: pos) s)
    (or more (error (cat "Expected " c " at " pos)))))

(define wrap (s x)
  (let y (read s)
    (if (= y (. s 'more)) y
      (list x y))))

(define hex-prefix? (str)
  (let i (if (= (code str 0) 45) 1 0)  ; "-"
    (and (= (code str i) 48)           ; "0"
         (let n (code str (inc i))
           (or (= n 120) (= n 88)))))) ; "x" or "X"

(define maybe-number (str)
  (if (hex-prefix? str)
      (target js: (parseInt str 16) lua: (tonumber str))
      (number-code? (code str (edge str)))
    (number str)))

(define real? (x)
  (and (number? x) (not (nan? x)) (not (inf? x))))

(define-global obarray (obj))

(define-global make-symbol (name)
  (if (= name "nil") nil
    (target js: (Symbol name)
            lua: (annotate 'symbol name))))

(define-global intern (name ob)
  (if (= name "nil") nil
    (let (ob (or ob obarray)
          str (untag! name 'string))
      (if (has? ob str)
          (get ob str)
        (with s (make-symbol name)
          (set (get ob str) s))))))

(define-global intern-soft (name ob)
  (if (= name "nil") nil
    (let (ob (or ob obarray)
          str (untag! name 'string))
      (if (has? ob name)
          (get ob name)
        false))))

(define-global symbol-name (x)
  (if (nil? x) "nil"
    (let s (untag! x 'symbol)
      (target
        lua: s
        js: (let s1 (. s (toString))
              (clip s1 7 (edge s1)))))))

(define-global keyword? (x)
  (and (is-a? x 'symbol)
       (= (char (symbol-name x) 0) ":")))

(define-global string->symbol (x)
  (intern x))

(define-global symbol->string (x)
  (symbol-name x))

(define-global coerce (x y)
  (if (is-a? x y) x
    (let f (get _G (compile (cat (kind x) "->" y)))
      (if f (f x) (error (cat "Canot coerce " (str (list x y))))))))

(define-reader ("" s) ; atom
  (let (str "")
    (while true
      (let c (peek-char s)
        (if (and c (and (not (. whitespace c))
                        (not (. delimiters c))))
            (cat! str (read-char s))
          (break))))
  (if (= str "true") true
      (= str "false") false
      (flag? str) (intern str)
    (let n (maybe-number str)
      (if (real? n) n str)))))

(define-reader ("(" s)
  (read-char s)
  (with r nil
    (let l ()
      (while (nil? r)
        (skip-non-code s)
        (let c (peek-char s)
          (if (= c ")") (do (read-char s) (set r l))
              (nil? c) (set r (expected s ")"))
            (let x (read s)
              (if (key? x)
                  (let (k (clip x 0 (edge x))
                        v (read s))
                    (set (. l k) v))
                (add l x)))))))))

(define-reader (")" s)
  (error (cat "Unexpected ) at " (. s 'pos))))

(define-reader ("[" s)
  (read-char s)
  (with r nil
    (let l `(#%brackets)
      (while (nil? r)
        (skip-non-code s)
        (let c (peek-char s)
          (if (= c "]") (do (read-char s) (set r l))
              (nil? c) (set r (expected s "]"))
            (add l (read s))))))))

(define-reader ("]" s)
  (error (cat "Unexpected ] at " (. s 'pos))))

(define-macro #%braces args
  `(%object ,@args))

(define-reader ("{" s)
  (read-char s)
  (with r nil
    (let l `(#%braces)
      (while (nil? r)
        (skip-non-code s)
        (let c (peek-char s)
          (if (= c "}") (do (read-char s) (set r l))
              (nil? c) (set r (expected s "}"))
            (add l (read s))))))))

(define-reader ("}" s)
  (error (cat "Unexpected } at " (. s 'pos))))

(define-reader ("\"" s)
  (read-char s)
  (with r nil
    (let str "\""
      (while (nil? r)
        (let c (peek-char s)
          (if (= c "\"") (set r (cat str (read-char s)))
              (nil? c) (set r (expected s "\""))
            (do (when (= c "\\")
                  (cat! str (read-char s)))
                (cat! str (read-char s)))))))))

(define-reader ("|" s)
  (read-char s)
  (with r nil
    (let str "|"
      (while (nil? r)
        (let c (peek-char s)
          (if (= c "|") (set r (cat str (read-char s)))
              (nil? c) (set r (expected s "|"))
            (cat! str (read-char s))))))))

(define-reader ("'" s)
  (read-char s)
  (wrap s 'quote))

(define-reader ("`" s)
  (read-char s)
  (wrap s 'quasiquote))

(define-reader ("," s)
  (read-char s)
  (if (= (peek-char s) "@")
      (do (read-char s)
          (wrap s 'unquote-splicing))
    (wrap s 'unquote)))

(export stream
        read
        read-all
        read-string
        read-table)
