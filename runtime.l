(define-global environment (list (obj)))
(define-global target (language))

(define-global nil? (x)
  (target
    js: ((x == nil) or (x == null))
    lua: (x == nil)))

(define-global is? (x) (not (nil? x)))

(define-global no (x) ((nil? x) or (x == false)))
(define-global yes (x) (not (no x)))
(define-global either (x y) (if (is? x) x y))

(define-global has? (l k)
  (target js: ((get l 'hasOwnProperty) k)
          lua: (is? (get l k))))

(define-global # (x)
  (target js: ((get x 'length) or 0) lua: |#x|))

(define-global none? (x) ((# x) == 0))
(define-global some? (x) ((# x) > 0))
(define-global one? (x) ((# x) == 1))
(define-global two? (x) ((# x) == 2))

(define-global hd (l) (at l 0))

(target js: (define-global type (x) (typeof x)))

(define-global string? (x) ((type x) == 'string))
(define-global number? (x) ((type x) == 'number))
(define-global boolean? (x) ((type x) == 'boolean))
(define-global function? (x) ((type x) == 'function))

(define-global obj? (x)
  (is? x) and ((type x) == (target lua: 'table js: 'object)))

(define-global atom? (x)
  ((nil? x) or (string? x) or (number? x) or (boolean? x)))

(define-global nan (0 / 0))
(define-global inf (1 / 0))
(define-global -inf (- inf))

(define-global nan? (n)
  (n != n))

(define-global inf? (n)
  (n == inf) or (n == -inf))

(define-global clip (s from upto)
  (target js: ((get s 'substring) from upto)
          lua: ((get string 'sub) s (from + 1) upto)))

(define-global cut (x from upto)
  (with l ()
    j = 0
    i = (if ((nil? from) or (from < 0)) 0 from)
    n = (# x)
    upto = (if ((nil? upto) or (upto > n)) n upto)
    (while (i < upto)
      (at l j) = (at x i)
      (inc i)
      (inc j))
    (each (k v) x
      (unless (number? k)
        (get l k) = v))))

(define-global keys (x)
  (with t ()
    (each (k v) x
      (unless (number? k)
        (get t k) = v))))

(define-global edge (x)
  (# x) - 1)

(define-global inner (x)
  (clip x 1 (edge x)))

(define-global tl (l) (cut l 1))

(define-global char (s n)
  (target js: ((get s 'charAt) n)
          lua: (clip s n (n + 1))))

(define-global code (s n)
  (target
    js: ((get s 'charCodeAt) n)
    lua: ((get string 'byte) s (if n (n + 1)))))

(define-global string-literal? (x)
  (string? x) and ((char x 0) == "\""))

(define-global id-literal? (x)
  (string? x) and ((char x 0) == "|"))

(define-global add (l x)
  (target js: (do ((get l 'push) x) nil)
          lua: ((get table 'insert) l x)))

(define-global drop (l)
  (target js: ((get l 'pop))
          lua: ((get table 'remove) l)))

(define-global last (l)
  (at l (edge l)))

(define-global almost (l)
  (cut l 0 (edge l)))

(define-global reverse (l)
  (with l1 (keys l)
    i = (edge l)
    (while (i >= 0)
      (add l1 (at l i))
      (dec i))))

(define-global reduce (f x)
  (if (none? x) nil
      (one? x) (hd x)
    (f (hd x) (reduce f (tl x)))))

(define-global join ls
  (with r ()
    (step l ls
      (when l
        n = (# r)
        (each (k v) l
          (if (number? k) (inc k n))
          (get r k) = v)))))

(define-global find (f t)
  (each x t
     y = (f x)
     (if y (return y))))

(define-global first (f l)
  (step x l
    y = (f x)
    (if y (return y))))

(define-global in? (x t)
  (find (fn (y) (x == y)) t))

(define-global pair (l)
  (with l1 ()
    (for i (# l)
      (add l1 (list (at l i) (at l (+ i 1))))
      (inc i))))

(define-global pair (l n)
  n = (if (nil? n) 2
          (n < 1) 1
        n)
  l1 = ()
  i = 0
  j = (# l)
  (while (i < j)
    l2 = ()
    (for k n
      (if (i < j) (add l2 (at l i)))
      (inc i))
    (add l1 l2))
  l1)

(define-global sort (l f)
  (target
    lua: (do ((get table 'sort) l f) l)
    js: ((get l 'sort) (when f (fn (a b) (if (f a b) -1 1))))))

(define-global map (f x)
  (with t ()
    (step v x
      y = (f v)
      (if (is? y)
        (add t y)))
    (each (k v) x
      (unless (number? k)
        y = (f v)
        (when (is? y)
          (get t k) = y)))))

(define-global keep (f x)
  (map (fn (v) (when (yes (f v)) v)) x))

(define-global keys? (t)
  (each (k v) t
    (unless (number? k)
      (return true)))
  false)

(define-global empty? (t)
  (each x t
    (return false))
  true)

(define-global stash (args)
  (when (keys? args)
    p = ()
    (each (k v) args
      (unless (number? k)
        (get p k) = v))
    (get p '_stash) = true
    (add args p))
  args)

(define-global unstash (args)
  (if (none? args) (return ()))
  l = (last args)
  (if ((obj? l) and (get l '_stash))
      (with args1 (almost args)
        (each (k v) l
          (unless (k == '_stash)
            (get args1 k) = v)))
    args))

(define-global destash! (l args1)
  (if (and (obj? l) (get l '_stash))
      (each (k v) l
        (unless (k == '_stash)
          (get args1 k) = v))
    l))

(define-global search (s pattern start)
  (target
    js: (do i = ((get s 'indexOf) pattern start)
          (if (i >= 0) i))
    lua: (do start = (if start (start + 1))
             i = ((get string 'find) s pattern start true)
             (i and (i - 1)))))

(define-global split (s sep)
  (when ((s == "") or (sep == ""))
    (return ()))
  l = ()
  n = (# sep)
  (while true
    i = (search s sep)
    (if (nil? i) (break))
    (add l (clip s 0 i))
    s = (clip s (+ i n)))
  (add l s)
  l)

(define-global #'cat xs
  (either (reduce (fn (a b) (cat a b)) xs) ""))

(define-global #'+ xs
  (either (reduce (fn (a b) (a + b)) xs) 0))

(define-global #'- xs
  (either (reduce (fn (b a) (a - b)) (reverse xs)) 0))

(define-global #'* xs
  (either (reduce (fn (a b) (a * b)) xs) 1))

(define-global #'/ xs
  (either (reduce (fn (b a) (a / b)) (reverse xs)) 1))

(define-global #'% xs
  (either (reduce (fn (b a) (a % b)) (reverse xs)) 0))

(define pairwise (f xs)
  (for i (edge xs)
    a = (at xs i)
    b = (at xs (i + 1))
    (unless (f a b)
      (return false)))
  (return true))

(define-global #'< xs (pairwise (fn (a b) (a < b)) xs))
(define-global #'> xs (pairwise (fn (a b) (a > b)) xs))
(define-global #'== xs (pairwise (fn (a b) (a == b)) xs))
(define-global #'<= xs (pairwise (fn (a b) (a <= b)) xs))
(define-global #'>= xs (pairwise (fn (a b) (a >= b)) xs))

(define-global number (s)
  (target
    js: (do
          n = (parseFloat s)
          (unless (isNaN n) n))
    lua: (tonumber s)))

(define-global number-code? (n)
  (n > 47) and (n < 58))

(define-global numeric? (s)
  n = (# s)
  (for i n
    (unless (number-code? (code s i))
      (return false)))
  (some? s))

(target js: (define tostring (x) ((get x 'toString))))

(define-global escape (s)
  s1 = "\""
  (for i (# s)
    c = (char s i)
    c1 = (if (c == "\n") "\\n"
             (c == "\r") "\\r"
             (c == "\"") "\\\""
             (c == "\\") "\\\\"
           c)
    (cat! s1 c1))
  (cat s1 "\""))

(define-global str (x stack)
  (if (nil? x) "nil"
      (nan? x) "nan"
      (x == inf) "inf"
      (x == -inf) "-inf"
      (boolean? x) (if x "true" "false")
      (string? x) (escape x)
      (atom? x) (tostring x)
      (function? x) "function"
      (and stack (in? x stack)) "circular"
      (target js: false lua: ((type x) != 'table))
      (escape (tostring x))
    (do s = "("
        sp = ""
        xs = ()
        ks = ()
        l = (stack or ())
        (add l x)
        (each (k v) x
          (if (number? k)
              (do (get xs k) = (str v l))
            (do (target lua:
                  (unless (string? k)
                    k = (str k l)))
                (add ks (cat k ":"))
                (add ks (str v l)))))
        (drop l)
        (each v (join xs ks)
          (cat! s sp v)
          sp = " ")
        (cat s ")"))))

(target lua:
  (define values (unpack or (get table 'unpack))))

(define-global apply (f args)
  args = (stash args)
  (target js: ((get f 'apply) f args)
          lua: (f (values args))))

(define-global call (f rest: args)
  (apply f args))

(define-global setenv (k rest: keys)
  (when (string? k)
    frame = (if (get keys 'toplevel)
                    (hd environment)
                  (last environment))
    entry = ((get frame k) or (obj))
    (each (k v) keys
      (get entry k) = v)
    (get frame k) = entry))

(target js:
  (define-global print (x)
    ((get console 'log) x)))

(define math (target js: Math lua: math))

(define-global abs (get math 'abs))
(define-global acos (get math 'acos))
(define-global asin (get math 'asin))
(define-global atan (get math 'atan))
(define-global atan2 (get math 'atan2))
(define-global ceil (get math 'ceil))
(define-global cos (get math 'cos))
(define-global floor (get math 'floor))
(define-global log (get math 'log))
(define-global log10 (get math 'log10))
(define-global max (get math 'max))
(define-global min (get math 'min))
(define-global pow (get math 'pow))
(define-global random (get math 'random))
(define-global sin (get math 'sin))
(define-global sinh (get math 'sinh))
(define-global sqrt (get math 'sqrt))
(define-global tan (get math 'tan))
(define-global tanh (get math 'tanh))
(define-global trunc (get math 'floor))
