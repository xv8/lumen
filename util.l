(define-global format (string rest: objects)
  (let (s (stream string)
        xs (reverse objects)
        msg "")
    (with r nil
      (while (nil? r)
        (let c (read-char s)
          (if (= c "%")
              (cat! msg (case (set c (read-char s))
                          ("%" "%")
                          (("s" "S") (str (drop objects)))
                          (("o" "d" "x" "X")
                           (parse-int (drop objects) (case c ("o" 8) ("d" 10) (("x" "X") 16))))
                          (("f" "g")
                           (parse-float (drop objects)))
                          (else
                            (error (cat "Unknown format specifier: " c)))))
              (nil? c) (set r msg)
            (cat! msg c)))))))

(define-global inhibit-message false)

(define-global current-message nil)

(define-global message (string rest: objects)
  (unless (_G .inhibit-message)
    (print (set (_G .current-message) (apply format string objects)))))

