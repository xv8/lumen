_G = _G or _ENV
_G._G = _G
environment = _G.environment or {{}}
_G.environment = environment
target = _G.traget or "lua"
_G.target = target
function nil63(x)
  return x == nil
end
_G.nil63 = nil63
function is63(x)
  return not nil63(x)
end
_G.is63 = is63
function no(x)
  return nil63(x) or x == false
end
_G.no = no
function yes(x)
  return not no(x)
end
_G.yes = yes
function either(x, y)
  if is63(x) then
    return x
  else
    return y
  end
end
_G.either = either
function has63(l, k)
  return is63(l[k])
end
_G.has63 = has63
function _35(x)
  return #x
end
_G._35 = _35
function none63(x)
  return _35(x) == 0
end
_G.none63 = none63
function some63(x)
  return _35(x) > 0
end
_G.some63 = some63
function one63(x)
  return _35(x) == 1
end
_G.one63 = one63
function two63(x)
  return _35(x) == 2
end
_G.two63 = two63
function hd(l)
  return l[1]
end
_G.hd = hd
function string63(x)
  return type(x) == "string"
end
_G.string63 = string63
function number63(x)
  return type(x) == "number"
end
_G.number63 = number63
function boolean63(x)
  return type(x) == "boolean"
end
_G.boolean63 = boolean63
function function63(x)
  return type(x) == "function"
end
_G.function63 = function63
function obj63(x)
  return is63(x) and type(x) == "table"
end
_G.obj63 = obj63
function atom63(x)
  return nil63(x) or string63(x) or number63(x) or boolean63(x)
end
_G.atom63 = atom63
nan = 0 / 0
_G.nan = nan
inf = 1 / 0
_G.inf = inf
_inf = - inf
_G._inf = _inf
function nan63(n)
  return not( n == n)
end
_G.nan63 = nan63
function inf63(n)
  return n == inf or n == _inf
end
_G.inf63 = inf63
function clip(s, from, upto)
  return string.sub(s, from + 1, upto)
end
_G.clip = clip
function cut(x, from, upto)
  local __l = {}
  local __j = 0
  local __e
  if nil63(from) or from < 0 then
    __e = 0
  else
    __e = from
  end
  local __i = __e
  local __n = _35(x)
  local __e1
  if nil63(upto) or upto > __n then
    __e1 = __n
  else
    __e1 = upto
  end
  local __upto = __e1
  while __i < __upto do
    __l[__j + 1] = x[__i + 1]
    __i = __i + 1
    __j = __j + 1
  end
  local ____o351 = x
  local __k = nil
  for __k in next, ____o351 do
    local __v = ____o351[__k]
    if not number63(__k) then
      __l[__k] = __v
    end
  end
  return __l
end
_G.cut = cut
function keys(x)
  local __t = {}
  local ____o3511 = x
  local __k1 = nil
  for __k1 in next, ____o3511 do
    local __v1 = ____o3511[__k1]
    if not number63(__k1) then
      __t[__k1] = __v1
    end
  end
  return __t
end
_G.keys = keys
function edge(x)
  return _35(x) - 1
end
_G.edge = edge
function inner(x)
  return clip(x, 1, edge(x))
end
_G.inner = inner
function tl(l)
  return cut(l, 1)
end
_G.tl = tl
function char(s, n)
  return clip(s, n, n + 1)
end
_G.char = char
function code(s, n)
  local __e2
  if n then
    __e2 = n + 1
  end
  return string.byte(s, __e2)
end
_G.code = code
function string_literal63(x)
  return string63(x) and char(x, 0) == "\""
end
_G.string_literal63 = string_literal63
function id_literal63(x)
  return string63(x) and char(x, 0) == "|"
end
_G.id_literal63 = id_literal63
function scoped_id63(x)
  return string63(x) and _35(x) > 1 and char(x, edge(x)) == "#"
end
_G.scoped_id63 = scoped_id63
function add(l, x)
  return table.insert(l, x)
end
_G.add = add
function drop(l)
  return table.remove(l)
end
_G.drop = drop
function last(l)
  return l[edge(l) + 1]
end
_G.last = last
function almost(l)
  return cut(l, 0, edge(l))
end
_G.almost = almost
function reverse(l)
  local __l1 = keys(l)
  local __i1 = edge(l)
  while __i1 >= 0 do
    add(__l1, l[__i1 + 1])
    __i1 = __i1 - 1
  end
  return __l1
end
_G.reverse = reverse
function reduce(f, x)
  if none63(x) then
    return nil
  else
    if one63(x) then
      return hd(x)
    else
      return f(hd(x), reduce(f, tl(x)))
    end
  end
end
_G.reduce = reduce
function join(...)
  local __ls = unstash({...})
  local __r37 = {}
  local ____x358 = __ls
  local ____i353 = 0
  while ____i353 < _35(____x358) do
    local __l11 = ____x358[____i353 + 1]
    if __l11 then
      local __n1 = _35(__r37)
      local ____o3512 = __l11
      local __k2 = nil
      for __k2 in next, ____o3512 do
        local __v2 = ____o3512[__k2]
        if number63(__k2) then
          __k2 = __k2 + __n1
        end
        __r37[__k2] = __v2
      end
    end
    ____i353 = ____i353 + 1
  end
  return __r37
end
_G.join = join
function find(f, t)
  local ____o3513 = t
  local ____i351 = nil
  for ____i351 in next, ____o3513 do
    local __x2 = ____o3513[____i351]
    local __y = f(__x2)
    if __y then
      return __y
    end
  end
end
_G.find = find
function first(f, l)
  local ____x3581 = l
  local ____i3531 = 0
  while ____i3531 < _35(____x3581) do
    local __x3 = ____x3581[____i3531 + 1]
    local __y1 = f(__x3)
    if __y1 then
      return __y1
    end
    ____i3531 = ____i3531 + 1
  end
end
_G.first = first
function in63(x, t)
  return find(function (y)
    return x == y
  end, t)
end
_G.in63 = in63
function pair(l)
  local __l12 = {}
  local __i2 = 0
  while __i2 < _35(l) do
    add(__l12, {l[__i2 + 1], l[__i2 + 1 + 1]})
    __i2 = __i2 + 1
    __i2 = __i2 + 1
  end
  return __l12
end
_G.pair = pair
function sort(l, f)
  table.sort(l, f)
  return l
end
_G.sort = sort
function map(f, x)
  local __t1 = {}
  local ____x3582 = x
  local ____i3532 = 0
  while ____i3532 < _35(____x3582) do
    local __v3 = ____x3582[____i3532 + 1]
    local __y2 = f(__v3)
    if is63(__y2) then
      add(__t1, __y2)
    end
    ____i3532 = ____i3532 + 1
  end
  local ____o3514 = x
  local __k3 = nil
  for __k3 in next, ____o3514 do
    local __v4 = ____o3514[__k3]
    if not number63(__k3) then
      local __y3 = f(__v4)
      if is63(__y3) then
        __t1[__k3] = __y3
      end
    end
  end
  return __t1
end
_G.map = map
function keep(f, x)
  return map(function (v)
    if yes(f(v)) then
      return v
    end
  end, x)
end
_G.keep = keep
function keys63(t)
  local ____o3515 = t
  local __k4 = nil
  for __k4 in next, ____o3515 do
    local __v5 = ____o3515[__k4]
    if not number63(__k4) then
      return true
    end
  end
  return false
end
_G.keys63 = keys63
function empty63(t)
  local ____o3516 = t
  local ____i3511 = nil
  for ____i3511 in next, ____o3516 do
    local __x5 = ____o3516[____i3511]
    return false
  end
  return true
end
_G.empty63 = empty63
function stash(args)
  if keys63(args) then
    local __p = {}
    local ____o3517 = args
    local __k5 = nil
    for __k5 in next, ____o3517 do
      local __v6 = ____o3517[__k5]
      if not number63(__k5) then
        __p[__k5] = __v6
      end
    end
    __p._stash = true
    add(args, __p)
  end
  return args
end
_G.stash = stash
function unstash(args)
  if none63(args) then
    return {}
  else
    local __l2 = last(args)
    if obj63(__l2) and __l2._stash then
      local __args1 = almost(args)
      local ____o3518 = __l2
      local __k6 = nil
      for __k6 in next, ____o3518 do
        local __v7 = ____o3518[__k6]
        if not( __k6 == "_stash") then
          __args1[__k6] = __v7
        end
      end
      return __args1
    else
      return args
    end
  end
end
_G.unstash = unstash
function destash33(l, args1)
  if obj63(l) and l._stash then
    local ____o3519 = l
    local __k7 = nil
    for __k7 in next, ____o3519 do
      local __v8 = ____o3519[__k7]
      if not( __k7 == "_stash") then
        args1[__k7] = __v8
      end
    end
  else
    return l
  end
end
_G.destash33 = destash33
function search(s, pattern, start)
  local __e3
  if start then
    __e3 = start + 1
  end
  local __start = __e3
  local __i3 = string.find(s, pattern, __start, true)
  return __i3 and __i3 - 1
end
_G.search = search
function split(s, sep)
  if s == "" or sep == "" then
    return {}
  else
    local __l3 = {}
    local __n2 = _35(sep)
    while true do
      local __i4 = search(s, sep)
      if nil63(__i4) then
        break
      else
        add(__l3, clip(s, 0, __i4))
        s = clip(s, __i4 + __n2)
      end
    end
    add(__l3, s)
    return __l3
  end
end
_G.split = split
function cat(...)
  local __xs = unstash({...})
  return either(reduce(function (a, b)
    return a .. b
  end, __xs), "")
end
_G.cat = cat
function _43(...)
  local __xs1 = unstash({...})
  return either(reduce(function (a, b)
    return a + b
  end, __xs1), 0)
end
_G._43 = _43
function _45(...)
  local __xs2 = unstash({...})
  return either(reduce(function (b, a)
    return a - b
  end, reverse(__xs2)), 0)
end
_G._45 = _45
function _42(...)
  local __xs3 = unstash({...})
  return either(reduce(function (a, b)
    return a * b
  end, __xs3), 1)
end
_G._42 = _42
function _47(...)
  local __xs4 = unstash({...})
  return either(reduce(function (b, a)
    return a / b
  end, reverse(__xs4)), 1)
end
_G._47 = _47
function _37(...)
  local __xs5 = unstash({...})
  return either(reduce(function (b, a)
    return a % b
  end, reverse(__xs5)), 0)
end
_G._37 = _37
function pairwise(f, xs)
  local __i5 = 0
  while __i5 < edge(xs) do
    local __a = xs[__i5 + 1]
    local __b = xs[__i5 + 1 + 1]
    if not f(__a, __b) then
      return false
    end
    __i5 = __i5 + 1
  end
  return true
end
_G.pairwise = pairwise
function _60(...)
  local __xs6 = unstash({...})
  return pairwise(function (a, b)
    return a < b
  end, __xs6)
end
_G._60 = _60
function _62(...)
  local __xs7 = unstash({...})
  return pairwise(function (a, b)
    return a > b
  end, __xs7)
end
_G._62 = _62
function _61(...)
  local __xs8 = unstash({...})
  return pairwise(function (a, b)
    return a == b
  end, __xs8)
end
_G._61 = _61
function _6061(...)
  local __xs9 = unstash({...})
  return pairwise(function (a, b)
    return a <= b
  end, __xs9)
end
_G._6061 = _6061
function _6261(...)
  local __xs10 = unstash({...})
  return pairwise(function (a, b)
    return a >= b
  end, __xs10)
end
_G._6261 = _6261
function number(s)
  return tonumber(s)
end
_G.number = number
function number_code63(n)
  return n > 47 and n < 58
end
_G.number_code63 = number_code63
function numeric63(s)
  local __n3 = _35(s)
  local __i6 = 0
  while __i6 < __n3 do
    if not number_code63(code(s, __i6)) then
      return false
    end
    __i6 = __i6 + 1
  end
  return some63(s)
end
_G.numeric63 = numeric63
function escape(s)
  local __s1 = "\""
  local __i7 = 0
  while __i7 < _35(s) do
    local __c = char(s, __i7)
    local __e4
    if __c == "\n" then
      __e4 = "\\n"
    else
      local __e5
      if __c == "\r" then
        __e5 = "\\r"
      else
        local __e6
        if __c == "\"" then
          __e6 = "\\\""
        else
          local __e7
          if __c == "\\" then
            __e7 = "\\\\"
          else
            __e7 = __c
          end
          __e6 = __e7
        end
        __e5 = __e6
      end
      __e4 = __e5
    end
    local __c1 = __e4
    __s1 = __s1 .. __c1
    __i7 = __i7 + 1
  end
  return __s1 .. "\""
end
_G.escape = escape
function str(x, stack)
  if nil63(x) then
    return "nil"
  else
    if nan63(x) then
      return "nan"
    else
      if x == inf then
        return "inf"
      else
        if x == _inf then
          return "-inf"
        else
          if boolean63(x) then
            if x then
              return "true"
            else
              return "false"
            end
          else
            if string63(x) then
              return escape(x)
            else
              if atom63(x) then
                return tostring(x)
              else
                if function63(x) then
                  return "function"
                else
                  if stack and in63(x, stack) then
                    return "circular"
                  else
                    if false then
                      return tostring(x)
                    else
                      if not( type(x) == "table") then
                        return escape(tostring(x))
                      else
                        local __s = "("
                        local __sp = ""
                        local __xs11 = {}
                        local __ks = {}
                        local __l4 = stack or {}
                        add(__l4, x)
                        local ____o35110 = x
                        local __k8 = nil
                        for __k8 in next, ____o35110 do
                          local __v9 = ____o35110[__k8]
                          if number63(__k8) then
                            __xs11[__k8] = str(__v9, __l4)
                          else
                            if not string63(__k8) then
                              __k8 = str(__k8, __l4)
                            end
                            add(__ks, __k8 .. ":")
                            add(__ks, str(__v9, __l4))
                          end
                        end
                        drop(__l4)
                        local ____o35111 = join(__xs11, __ks)
                        local ____i3512 = nil
                        for ____i3512 in next, ____o35111 do
                          local __v10 = ____o35111[____i3512]
                          __s = __s .. __sp .. __v10
                          __sp = " "
                        end
                        return __s .. ")"
                      end
                    end
                  end
                end
              end
            end
          end
        end
      end
    end
  end
end
_G.str = str
values = unpack or table.unpack
_G.values = values
function apply(f, args)
  local __args = stash(args)
  return f(values(__args))
end
_G.apply = apply
function call(f, ...)
  local ____r72 = unstash({...})
  local __f = destash33(f, ____r72)
  local ____id = ____r72
  local __args11 = cut(____id, 0)
  return apply(__f, __args11)
end
_G.call = call
function setenv(k, ...)
  local ____r73 = unstash({...})
  local __k9 = destash33(k, ____r73)
  local ____id1 = ____r73
  local __keys = cut(____id1, 0)
  if string63(__k9) then
    local __env = __keys.environment or environment
    local __e8
    if __keys.toplevel then
      __e8 = hd(__env)
    else
      __e8 = last(__env)
    end
    local __frame = __e8
    local __entry = __frame[__k9] or {}
    local ____o35112 = __keys
    local __k10 = nil
    for __k10 in next, ____o35112 do
      local __v11 = ____o35112[__k10]
      if not( __k10 == "environment") then
        __entry[__k10] = __v11
      end
    end
    __frame[__k9] = __entry
    return __frame[__k9]
  end
end
_G.setenv = setenv
math = math
_G.math = math
abs = math.abs
_G.abs = abs
acos = math.acos
_G.acos = acos
asin = math.asin
_G.asin = asin
atan = math.atan
_G.atan = atan
atan2 = math.atan2
_G.atan2 = atan2
ceil = math.ceil
_G.ceil = ceil
cos = math.cos
_G.cos = cos
floor = math.floor
_G.floor = floor
log = math.log
_G.log = log
log10 = math.log10
_G.log10 = log10
max = math.max
_G.max = max
min = math.min
_G.min = min
pow = math.pow
_G.pow = pow
random = math.random
_G.random = random
sin = math.sin
_G.sin = sin
sinh = math.sinh
_G.sinh = sinh
sqrt = math.sqrt
_G.sqrt = sqrt
tan = math.tan
_G.tan = tan
tanh = math.tanh
_G.tanh = tanh
trunc = math.floor
_G.trunc = trunc
setenv("quote", {_stash = true, macro = function (form)
  return quoted(form)
end})
setenv("quasiquote", {_stash = true, macro = function (form)
  local __prev1 = environment
  environment = quasiquote_environment
  add(quasiquote_environment or environment, {})
  local __x1 = quasiexpand(form, 1)
  environment = __prev1
  local ____x3521 = __x1
  drop(quasiquote_environment or environment)
  return ____x3521
end})
setenv("set", {_stash = true, macro = function (...)
  local __args1 = unstash({...})
  return join({"do"}, map(function (__x7)
    local ____id1 = __x7
    local __lh1 = ____id1[1]
    local __rh1 = ____id1[2]
    return {"%set", __lh1, __rh1}
  end, pair(__args1)))
end})
setenv("at", {_stash = true, macro = function (l, i)
  if target == "lua" and number63(i) then
    i = i + 1
  else
    if target == "lua" then
      i = {"+", i, 1}
    end
  end
  return {"get", l, i}
end})
setenv("wipe", {_stash = true, macro = function (place)
  if target == "lua" then
    return {"set", place, "nil"}
  else
    return {"%delete", place}
  end
end})
setenv("list", {_stash = true, macro = function (...)
  local __body1 = unstash({...})
  local __x26 = unique("x")
  local __l1 = {}
  local __forms1 = {}
  local ____o3511 = __body1
  local __k2 = nil
  for __k2 in next, ____o3511 do
    local __v1 = ____o3511[__k2]
    if number63(__k2) then
      __l1[__k2] = __v1
    else
      add(__forms1, {"set", {"get", __x26, {"quote", __k2}}, __v1})
    end
  end
  if some63(__forms1) then
    return join({"let", __x26, join({"%array"}, __l1)}, __forms1, {__x26})
  else
    return join({"%array"}, __l1)
  end
end})
setenv("if", {_stash = true, macro = function (...)
  local __branches1 = unstash({...})
  return hd(expand_if(__branches1))
end})
setenv("case", {_stash = true, macro = function (expr, ...)
  local ____r13 = unstash({...})
  local __expr1 = destash33(expr, ____r13)
  local ____id4 = ____r13
  local __clauses1 = cut(____id4, 0)
  local __x47 = unique("x")
  local __eq1 = function (_)
    return {"=", {"quote", _}, __x47}
  end
  local __cl1 = function (__x50)
    local ____id5 = __x50
    local __a1 = ____id5[1]
    local __b1 = ____id5[2]
    if nil63(__b1) then
      return {__a1}
    else
      if string63(__a1) or number63(__a1) then
        return {__eq1(__a1), __b1}
      else
        if one63(__a1) then
          return {__eq1(hd(__a1)), __b1}
        else
          if _35(__a1) > 1 then
            return {join({"or"}, map(__eq1, __a1)), __b1}
          end
        end
      end
    end
  end
  return {"let", __x47, __expr1, join({"if"}, apply(join, map(__cl1, pair(__clauses1))))}
end})
setenv("when", {_stash = true, macro = function (cond, ...)
  local ____r17 = unstash({...})
  local __cond1 = destash33(cond, ____r17)
  local ____id7 = ____r17
  local __body3 = cut(____id7, 0)
  return {"if", __cond1, join({"do"}, __body3)}
end})
setenv("unless", {_stash = true, macro = function (cond, ...)
  local ____r19 = unstash({...})
  local __cond3 = destash33(cond, ____r19)
  local ____id9 = ____r19
  local __body5 = cut(____id9, 0)
  return {"if", {"not", __cond3}, join({"do"}, __body5)}
end})
setenv("obj", {_stash = true, macro = function (...)
  local __body7 = unstash({...})
  return join({"%object"}, mapo(function (x)
    return x
  end, __body7))
end})
setenv("let", {_stash = true, macro = function (bs, ...)
  local ____r23 = unstash({...})
  local __bs11 = destash33(bs, ____r23)
  local ____id14 = ____r23
  local __body9 = cut(____id14, 0)
  if atom63(__bs11) then
    return join({"let", {__bs11, hd(__body9)}}, tl(__body9))
  else
    if none63(__bs11) then
      return join({"do"}, __body9)
    else
      local ____id15 = __bs11
      local __lh3 = ____id15[1]
      local __rh3 = ____id15[2]
      local __bs21 = cut(____id15, 2)
      local ____id16 = bind(__lh3, __rh3)
      local __id17 = ____id16[1]
      local __val1 = ____id16[2]
      local __bs12 = cut(____id16, 2)
      local __renames1 = {}
      if not id_literal63(__id17) then
        local __id121 = unique(__id17)
        __renames1 = {__id17, __id121}
        __id17 = __id121
      end
      return {"do", {"%local", __id17, __val1}, {"let-symbol", __renames1, join({"let", join(__bs12, __bs21)}, __body9)}}
    end
  end
end})
setenv("with", {_stash = true, macro = function (x, v, ...)
  local ____r25 = unstash({...})
  local __x95 = destash33(x, ____r25)
  local __v3 = destash33(v, ____r25)
  local ____id19 = ____r25
  local __body11 = cut(____id19, 0)
  return join({"let", {__x95, __v3}}, __body11, {__x95})
end})
setenv("let-when", {_stash = true, macro = function (x, v, ...)
  local ____r27 = unstash({...})
  local __x106 = destash33(x, ____r27)
  local __v5 = destash33(v, ____r27)
  local ____id21 = ____r27
  local __body13 = cut(____id21, 0)
  return {"let", "__y351", __v5, {"when", {"yes", "__y351"}, join({"let", {__x106, "__y351"}}, __body13)}}
end})
setenv("define-macro", {_stash = true, macro = function (name, args, ...)
  local ____r29 = unstash({...})
  local __name1 = destash33(name, ____r29)
  local __args3 = destash33(args, ____r29)
  local ____id23 = ____r29
  local __body15 = cut(____id23, 0)
  local ____x116 = {"setenv", {"quote", __name1}}
  ____x116.macro = join({"fn", __args3}, __body15)
  local __form1 = join(____x116, keys(__body15))
  _eval(__form1)
  return __form1
end})
setenv("define-special", {_stash = true, macro = function (name, args, ...)
  local ____r31 = unstash({...})
  local __name3 = destash33(name, ____r31)
  local __args5 = destash33(args, ____r31)
  local ____id25 = ____r31
  local __body17 = cut(____id25, 0)
  local ____x123 = {"setenv", {"quote", __name3}}
  ____x123.special = join({"fn", __args5}, __body17)
  local __form3 = join(____x123, keys(__body17))
  _eval(__form3)
  return __form3
end})
setenv("define-symbol", {_stash = true, macro = function (name, expansion, ...)
  local ____r33 = unstash({...})
  local __name5 = destash33(name, ____r33)
  local __expansion1 = destash33(expansion, ____r33)
  local ____id27 = ____r33
  local __env1 = ____id27.environment
  local __e11
  if __env1 then
    __e11 = _eval(__env1)
  end
  setenv(__name5, {_stash = true, symbol = __expansion1, environment = __e11})
  local ____x130 = {"setenv", {"quote", __name5}}
  ____x130.symbol = {"quote", __expansion1}
  ____x130.environment = __env1
  return ____x130
end})
setenv("define-reader", {_stash = true, macro = function (__x138, ...)
  local ____id30 = __x138
  local __char1 = ____id30[1]
  local __s1 = ____id30[2]
  local ____r35 = unstash({...})
  local ____x138 = destash33(__x138, ____r35)
  local ____id31 = ____r35
  local __body19 = cut(____id31, 0)
  return {"set", {"get", "read-table", __char1}, join({"fn", {__s1}}, __body19)}
end})
setenv("define", {_stash = true, macro = function (name, x, ...)
  local ____r37 = unstash({...})
  local __name7 = destash33(name, ____r37)
  local __x148 = destash33(x, ____r37)
  local ____id33 = ____r37
  local __env3 = ____id33.environment
  local __body21 = cut(____id33, 0)
  local __e12
  if __env3 then
    __e12 = _eval(__env3)
  end
  setenv(__name7, {_stash = true, variable = true, environment = __e12})
  if some63(__body21) then
    return join({"%local-function", __name7}, bind42(__x148, __body21))
  else
    return {"%local", __name7, __x148}
  end
end})
setenv("define-global", {_stash = true, macro = function (name, x, ...)
  local ____r39 = unstash({...})
  local __name9 = destash33(name, ____r39)
  local __x163 = destash33(x, ____r39)
  local ____id35 = ____r39
  local __env5 = ____id35.environment
  local __body23 = cut(____id35, 0)
  setenv(__name9, {_stash = true, toplevel = true, variable = true})
  if some63(__body23) then
    return {"do", join({"%global-function", __name9}, bind42(__x163, __body23)), {"%set", {"get", "_G", {"quote", compile(__name9)}}, __name9}}
  else
    return {"do", {"%set", __name9, __x163}, {"%set", {"get", "_G", {"quote", compile(__name9)}}, __name9}}
  end
end})
setenv("with-frame", {_stash = true, macro = function (...)
  local __body25 = unstash({...})
  local __env7 = __body25.environment or "environment"
  __body25.environment = nil
  local __i1 = __body25.frame
  local __e13
  if is63(__i1) then
    __e13 = {"at", __env7, __i1}
  else
    __e13 = join({"obj"}, keys(__body25))
  end
  local __frame1 = __e13
  return {"do", {"add", {"or", __env7, "environment"}, __frame1}, {"with", "__x352", join({"do"}, __body25), {"drop", {"or", __env7, "environment"}}}}
end})
setenv("without-frame", {_stash = true, macro = function (...)
  local __body27 = unstash({...})
  local __env9 = __body27.environment or "environment"
  return {"let", "__e351", {"drop", {"or", __env9, "environment"}}, {"with", "__x354", join({"do"}, __body27), {"add", {"or", __env9, "environment"}, "__e351"}}}
end})
setenv("with-bindings", {_stash = true, macro = function (__x214, ...)
  local ____id38 = __x214
  local __names1 = ____id38[1]
  local ____r41 = unstash({...})
  local ____x214 = destash33(__x214, ____r41)
  local ____id39 = ____r41
  local __env12 = ____id39.environment
  local __body29 = cut(____id39, 0)
  local __env13 = __env12 or "environment"
  local ____x218 = {"setenv", "__x356"}
  ____x218.variable = true
  ____x218.environment = {"or", __env13, "environment"}
  local ____x216 = {"with-frame", {"each", "__x356", __names1, ____x218}}
  ____x216._scope = true
  ____x216.environment = {"or", __env13, "environment"}
  return join(____x216, __body29)
end})
setenv("let-macro", {_stash = true, macro = function (definitions, ...)
  local ____r44 = unstash({...})
  local __definitions1 = destash33(definitions, ____r44)
  local ____id41 = ____r44
  local __body31 = cut(____id41, 0)
  add(environment or environment, {})
  map(function (m)
    return macroexpand(join({"define-macro"}, m))
  end, __definitions1)
  local ____x3511 = join({"do"}, macroexpand(__body31))
  drop(environment or environment)
  return ____x3511
end})
setenv("let-symbol", {_stash = true, macro = function (expansions, ...)
  local ____r48 = unstash({...})
  local __expansions1 = destash33(expansions, ____r48)
  local ____id44 = ____r48
  local __body33 = cut(____id44, 0)
  add(environment or environment, {})
  map(function (__x230)
    local ____id45 = __x230
    local __name11 = ____id45[1]
    local __exp1 = ____id45[2]
    return macroexpand({"define-symbol", __name11, __exp1})
  end, pair(__expansions1))
  local ____x3513 = join({"do"}, macroexpand(__body33))
  drop(environment or environment)
  return ____x3513
end})
setenv("let-unique", {_stash = true, macro = function (names, ...)
  local ____r52 = unstash({...})
  local __names3 = destash33(names, ____r52)
  local ____id47 = ____r52
  local __body35 = cut(____id47, 0)
  local __bs3 = map(function (n)
    return {n, {"unique", {"quote", n}}}
  end, __names3)
  return join({"let", apply(join, __bs3)}, __body35)
end})
setenv("fn", {_stash = true, macro = function (args, ...)
  local ____r55 = unstash({...})
  local __args7 = destash33(args, ____r55)
  local ____id49 = ____r55
  local __body37 = cut(____id49, 0)
  return join({"%function"}, bind42(__args7, __body37))
end})
setenv("apply", {_stash = true, macro = function (f, ...)
  local ____r57 = unstash({...})
  local __f1 = destash33(f, ____r57)
  local ____id51 = ____r57
  local __args9 = cut(____id51, 0)
  if _35(__args9) > 1 then
    return {"%call", "apply", __f1, {"join", join({"list"}, almost(__args9)), last(__args9)}}
  else
    return join({"%call", "apply", __f1}, __args9)
  end
end})
setenv("guard", {_stash = true, macro = function (expr)
  if target == "js" then
    return {{"fn", join(), {"%try", {"list", true, expr}}}}
  else
    local ____x287 = {"obj"}
    ____x287.stack = {{"get", "debug", {"quote", "traceback"}}}
    ____x287.message = {"if", {"string?", "m"}, {"clip", "m", {"+", {"search", "m", "\": \""}, 2}}, {"nil?", "m"}, "\"\"", {"str", "m"}}
    return {"list", {"xpcall", {"fn", join(), expr}, {"fn", {"m"}, {"if", {"obj?", "m"}, "m", ____x287}}}}
  end
end})
setenv("each", {_stash = true, macro = function (x, t, ...)
  local ____r61 = unstash({...})
  local __x313 = destash33(x, ____r61)
  local __t1 = destash33(t, ____r61)
  local ____id54 = ____r61
  local __body39 = cut(____id54, 0)
  local __i3 = "__i351"
  local __e14
  if atom63(__x313) then
    __e14 = {__i3, __x313}
  else
    local __e15
    if _35(__x313) > 1 then
      __e15 = __x313
    else
      __e15 = {__i3, hd(__x313)}
    end
    __e14 = __e15
  end
  local ____id55 = __e14
  local __k4 = ____id55[1]
  local __v7 = ____id55[2]
  local __e16
  if target == "lua" then
    __e16 = __body39
  else
    __e16 = {join({"let", __k4, {"if", {"numeric?", __k4}, {"parseInt", __k4}, __k4}}, __body39)}
  end
  return {"let", {"__o351", __t1, __k4, "nil"}, {"%for", "__o351", __k4, join({"let", {__v7, {"get", "__o351", __k4}}}, __e16)}}
end})
setenv("for", {_stash = true, macro = function (i, to, ...)
  local ____r63 = unstash({...})
  local __i5 = destash33(i, ____r63)
  local __to1 = destash33(to, ____r63)
  local ____id57 = ____r63
  local __body41 = cut(____id57, 0)
  return {"let", __i5, 0, join({"while", {"<", __i5, __to1}}, __body41, {{"inc", __i5}})}
end})
setenv("step", {_stash = true, macro = function (v, t, ...)
  local ____r65 = unstash({...})
  local __v9 = destash33(v, ____r65)
  local __t3 = destash33(t, ____r65)
  local ____id59 = ____r65
  local __body43 = cut(____id59, 0)
  return {"let", {"__x358", __t3}, {"for", "__i353", {"#", "__x358"}, join({"let", {__v9, {"at", "__x358", "__i353"}}}, __body43)}}
end})
setenv("set-of", {_stash = true, macro = function (...)
  local __xs1 = unstash({...})
  local __l3 = {}
  local ____o3512 = __xs1
  local ____i352 = nil
  for ____i352 in next, ____o3512 do
    local __x3561 = ____o3512[____i352]
    __l3[__x3561] = true
  end
  return join({"obj"}, __l3)
end})
setenv("language", {_stash = true, macro = function ()
  return {"quote", target}
end})
setenv("target", {_stash = true, macro = function (...)
  local __clauses3 = unstash({...})
  return __clauses3[target]
end})
setenv("join!", {_stash = true, macro = function (a, ...)
  local ____r69 = unstash({...})
  local __a3 = destash33(a, ____r69)
  local ____id61 = ____r69
  local __bs5 = cut(____id61, 0)
  return {"set", __a3, join({"join", __a3}, __bs5)}
end})
setenv("cat!", {_stash = true, macro = function (a, ...)
  local ____r71 = unstash({...})
  local __a5 = destash33(a, ____r71)
  local ____id63 = ____r71
  local __bs7 = cut(____id63, 0)
  return {"set", __a5, join({"cat", __a5}, __bs7)}
end})
setenv("inc", {_stash = true, macro = function (n, by)
  local __e17
  if nil63(by) then
    __e17 = 1
  else
    __e17 = by
  end
  return {"set", n, {"+", n, __e17}}
end})
setenv("dec", {_stash = true, macro = function (n, by)
  local __e18
  if nil63(by) then
    __e18 = 1
  else
    __e18 = by
  end
  return {"set", n, {"-", n, __e18}}
end})
setenv("with-indent", {_stash = true, macro = function (form)
  return {"do", {"inc", "indent-level"}, {"with", "__x3510", form, {"dec", "indent-level"}}}
end})
setenv("export", {_stash = true, macro = function (...)
  local __names5 = unstash({...})
  if target == "js" then
    return join({"do"}, map(function (k)
      return {"set", {"get", "exports", {"quote", k}}, k}
    end, __names5))
  else
    local __x399 = {}
    local ____o353 = __names5
    local ____i355 = nil
    for ____i355 in next, ____o353 do
      local __k6 = ____o353[____i355]
      __x399[__k6] = __k6
    end
    return {"return", join({"%object"}, mapo(function (x)
      return x
    end, __x399))}
  end
end})
setenv("when-compiling", {_stash = true, macro = function (...)
  local __body45 = unstash({...})
  return _eval(join({"do"}, __body45))
end})
reader = require("reader")
_G.reader = reader
compiler = require("compiler")
_G.compiler = compiler
system = require("system")
_G.system = system
function eval_print(form)
  local ____id = {xpcall(function ()
    return compiler["eval"](form)
  end, function (m)
    if obj63(m) then
      return m
    else
      local __e
      if string63(m) then
        __e = clip(m, search(m, ": ") + 2)
      else
        local __e1
        if nil63(m) then
          __e1 = ""
        else
          __e1 = str(m)
        end
        __e = __e1
      end
      return {stack = debug.traceback(), message = __e}
    end
  end)}
  local __ok = ____id[1]
  local __v = ____id[2]
  if not __ok then
    return print("error: " .. __v.message .. "\n" .. __v.stack)
  else
    if is63(__v) then
      return print(str(__v))
    end
  end
end
_G.eval_print = eval_print
local function rep(s)
  return eval_print(reader["read-string"](s))
end
local function repl()
  local __buf = ""
  local function rep1(s)
    __buf = __buf .. s
    local __more = {}
    local __form = reader["read-string"](__buf, __more)
    if not( __form == __more) then
      eval_print(__form)
      __buf = ""
      return system.write("> ")
    end
  end
  system.write("> ")
  if process then
    return process.stdin.on(process.stdin, "data", rep1)
  else
    while true do
      local __s = io.read()
      if __s then
        rep1(__s .. "\n")
      else
        break
      end
    end
  end
end
function compile_file(path)
  local __s1 = reader.stream(system["read-file"](path))
  local __body = reader["read-all"](__s1)
  local __form1 = compiler.expand(join({"do"}, __body))
  return compiler.compile(__form1, {_stash = true, stmt = true})
end
_G.compile_file = compile_file
function _load(path)
  local __previous = target
  target = "lua"
  local __code = compile_file(path)
  target = __previous
  return compiler.run(__code)
end
_G._load = _load
function script_file63(path)
  return not( "-" == char(path, 0) or ".js" == clip(path, _35(path) - 3) or ".lua" == clip(path, _35(path) - 4))
end
_G.script_file63 = script_file63
function run_file(path)
  if script_file63(path) then
    return _load(path)
  else
    return compiler.run(system["read-file"](path))
  end
end
_G.run_file = run_file
function usage()
  print("usage: lumen [<file> <arguments> | options <object files>]")
  print(" <file>\t\tProgram read from script file")
  print(" <arguments>\tPassed to program in system.argv")
  print(" <object files>\tLoaded before compiling <input>")
  print("options:")
  print(" -c <input>\tCompile input file")
  print(" -o <output>\tOutput file")
  print(" -t <target>\tTarget language (default: lua)")
  return print(" -e <expr>\tExpression to evaluate")
end
_G.usage = usage
function main()
  local __arg = hd(system.argv)
  if __arg and script_file63(__arg) then
    return _load(__arg)
  else
    if __arg == "-h" or __arg == "--help" then
      return usage()
    else
      local __pre = {}
      local __input = nil
      local __output = nil
      local __target1 = nil
      local __expr = nil
      local __argv = system.argv
      local __i = 0
      while __i < _35(__argv) do
        local __a = __argv[__i + 1]
        if __a == "-c" or __a == "-o" or __a == "-t" or __a == "-e" then
          if __i == edge(__argv) then
            print("missing argument for " .. __a)
          else
            __i = __i + 1
            local __val = __argv[__i + 1]
            if __a == "-c" then
              __input = __val
            else
              if __a == "-o" then
                __output = __val
              else
                if __a == "-t" then
                  __target1 = __val
                else
                  if __a == "-e" then
                    __expr = __val
                  end
                end
              end
            end
          end
        else
          if not( "-" == char(__a, 0)) then
            add(__pre, __a)
          end
        end
        __i = __i + 1
      end
      local ____x358 = __pre
      local ____i353 = 0
      while ____i353 < _35(____x358) do
        local __file = ____x358[____i353 + 1]
        run_file(__file)
        ____i353 = ____i353 + 1
      end
      if nil63(__input) then
        if __expr then
          return rep(__expr)
        else
          return repl()
        end
      else
        if __target1 then
          target = __target1
        end
        local __code1 = compile_file(__input)
        if nil63(__output) or __output == "-" then
          return print(__code1)
        else
          return system["write-file"](__output, __code1)
        end
      end
    end
  end
end
_G.main = main
return {reader = reader, compiler = compiler, system = system, ["eval-print"] = eval_print, rep = rep, repl = repl, ["compile-file"] = compile_file, ["load"] = _load, ["script-file?"] = script_file63, ["run-file"] = run_file, usage = usage, main = main}
