_G = _G or _ENV
_G._G = _G
environment = {{}}
_G.environment = environment
target = "lua"
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
  local ____o = x
  local __k = nil
  for __k in next, ____o do
    local __v = ____o[__k]
    if not number63(__k) then
      __l[__k] = __v
    end
  end
  return __l
end
_G.cut = cut
function keys(x)
  local __t = {}
  local ____o1 = x
  local __k1 = nil
  for __k1 in next, ____o1 do
    local __v1 = ____o1[__k1]
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
  local __i3 = edge(l)
  while __i3 >= 0 do
    add(__l1, l[__i3 + 1])
    __i3 = __i3 - 1
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
  local __r36 = {}
  local ____x2 = __ls
  local ____i4 = 0
  while ____i4 < _35(____x2) do
    local __l11 = ____x2[____i4 + 1]
    if __l11 then
      local __n3 = _35(__r36)
      local ____o2 = __l11
      local __k2 = nil
      for __k2 in next, ____o2 do
        local __v2 = ____o2[__k2]
        if number63(__k2) then
          __k2 = __k2 + __n3
        end
        __r36[__k2] = __v2
      end
    end
    ____i4 = ____i4 + 1
  end
  return __r36
end
_G.join = join
function find(f, t)
  local ____o3 = t
  local ____i6 = nil
  for ____i6 in next, ____o3 do
    local __x3 = ____o3[____i6]
    local __y = f(__x3)
    if __y then
      return __y
    end
  end
end
_G.find = find
function first(f, l)
  local ____x4 = l
  local ____i7 = 0
  while ____i7 < _35(____x4) do
    local __x5 = ____x4[____i7 + 1]
    local __y1 = f(__x5)
    if __y1 then
      return __y1
    end
    ____i7 = ____i7 + 1
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
  local __i8 = 0
  while __i8 < _35(l) do
    add(__l12, {l[__i8 + 1], l[__i8 + 1 + 1]})
    __i8 = __i8 + 1
    __i8 = __i8 + 1
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
  local ____x7 = x
  local ____i9 = 0
  while ____i9 < _35(____x7) do
    local __v3 = ____x7[____i9 + 1]
    local __y2 = f(__v3)
    if is63(__y2) then
      add(__t1, __y2)
    end
    ____i9 = ____i9 + 1
  end
  local ____o4 = x
  local __k3 = nil
  for __k3 in next, ____o4 do
    local __v4 = ____o4[__k3]
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
  local ____o5 = t
  local __k4 = nil
  for __k4 in next, ____o5 do
    local __v5 = ____o5[__k4]
    if not number63(__k4) then
      return true
    end
  end
  return false
end
_G.keys63 = keys63
function empty63(t)
  local ____o6 = t
  local ____i12 = nil
  for ____i12 in next, ____o6 do
    local __x8 = ____o6[____i12]
    return false
  end
  return true
end
_G.empty63 = empty63
function stash(args)
  if keys63(args) then
    local __p = {}
    local ____o7 = args
    local __k5 = nil
    for __k5 in next, ____o7 do
      local __v6 = ____o7[__k5]
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
      local ____o8 = __l2
      local __k6 = nil
      for __k6 in next, ____o8 do
        local __v7 = ____o8[__k6]
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
    local ____o9 = l
    local __k7 = nil
    for __k7 in next, ____o9 do
      local __v8 = ____o9[__k7]
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
  local __i16 = string.find(s, pattern, __start, true)
  return __i16 and __i16 - 1
end
_G.search = search
function split(s, sep)
  if s == "" or sep == "" then
    return {}
  else
    local __l3 = {}
    local __n12 = _35(sep)
    while true do
      local __i17 = search(s, sep)
      if nil63(__i17) then
        break
      else
        add(__l3, clip(s, 0, __i17))
        s = clip(s, __i17 + __n12)
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
local function pairwise(f, xs)
  local __i18 = 0
  while __i18 < edge(xs) do
    local __a = xs[__i18 + 1]
    local __b = xs[__i18 + 1 + 1]
    if not f(__a, __b) then
      return false
    end
    __i18 = __i18 + 1
  end
  return true
end
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
  local __n13 = _35(s)
  local __i19 = 0
  while __i19 < __n13 do
    if not number_code63(code(s, __i19)) then
      return false
    end
    __i19 = __i19 + 1
  end
  return some63(s)
end
_G.numeric63 = numeric63
function escape(s)
  local __s1 = "\""
  local __i20 = 0
  while __i20 < _35(s) do
    local __c = char(s, __i20)
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
    __i20 = __i20 + 1
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
                        local ____o10 = x
                        local __k8 = nil
                        for __k8 in next, ____o10 do
                          local __v9 = ____o10[__k8]
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
                        local ____o11 = join(__xs11, __ks)
                        local ____i22 = nil
                        for ____i22 in next, ____o11 do
                          local __v10 = ____o11[____i22]
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
local values = unpack or table.unpack
function apply(f, args)
  local __args = stash(args)
  return f(values(__args))
end
_G.apply = apply
function call(f, ...)
  local ____r71 = unstash({...})
  local __f = destash33(f, ____r71)
  local ____id = ____r71
  local __args11 = cut(____id, 0)
  return apply(__f, __args11)
end
_G.call = call
function setenv(k, ...)
  local ____r72 = unstash({...})
  local __k9 = destash33(k, ____r72)
  local ____id1 = ____r72
  local __keys = cut(____id1, 0)
  if string63(__k9) then
    local __e8
    if __keys.toplevel then
      __e8 = hd(environment)
    else
      __e8 = last(environment)
    end
    local __frame = __e8
    local __entry = __frame[__k9] or {}
    local ____o12 = __keys
    local __k10 = nil
    for __k10 in next, ____o12 do
      local __v11 = ____o12[__k10]
      __entry[__k10] = __v11
    end
    __frame[__k9] = __entry
    return __frame[__k9]
  end
end
_G.setenv = setenv
local math = math
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
  return quasiexpand(form, 1)
end})
setenv("set", {_stash = true, macro = function (...)
  local __args = unstash({...})
  return join({"do"}, map(function (__x2)
    local ____id = __x2
    local __lh = ____id[1]
    local __rh = ____id[2]
    return {"%set", __lh, __rh}
  end, pair(__args)))
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
  local __body = unstash({...})
  local __x9 = unique("x")
  local __l = {}
  local __forms = {}
  local ____o = __body
  local __k = nil
  for __k in next, ____o do
    local __v = ____o[__k]
    if number63(__k) then
      __l[__k] = __v
    else
      add(__forms, {"set", {"get", __x9, {"quote", __k}}, __v})
    end
  end
  if some63(__forms) then
    return join({"let", __x9, join({"%array"}, __l)}, __forms, {__x9})
  else
    return join({"%array"}, __l)
  end
end})
setenv("if", {_stash = true, macro = function (...)
  local __branches = unstash({...})
  return hd(expand_if(__branches))
end})
setenv("case", {_stash = true, macro = function (expr, ...)
  local ____r5 = unstash({...})
  local __expr = destash33(expr, ____r5)
  local ____id1 = ____r5
  local __clauses = cut(____id1, 0)
  local __x19 = unique("x")
  local __eq = function (_)
    return {"=", {"quote", _}, __x19}
  end
  local __cl = function (__x22)
    local ____id2 = __x22
    local __a = ____id2[1]
    local __b = ____id2[2]
    if nil63(__b) then
      return {__a}
    else
      if string63(__a) or number63(__a) then
        return {__eq(__a), __b}
      else
        if one63(__a) then
          return {__eq(hd(__a)), __b}
        else
          if _35(__a) > 1 then
            return {join({"or"}, map(__eq, __a)), __b}
          end
        end
      end
    end
  end
  return {"let", __x19, __expr, join({"if"}, apply(join, map(__cl, pair(__clauses))))}
end})
setenv("when", {_stash = true, macro = function (cond, ...)
  local ____r8 = unstash({...})
  local __cond = destash33(cond, ____r8)
  local ____id3 = ____r8
  local __body1 = cut(____id3, 0)
  return {"if", __cond, join({"do"}, __body1)}
end})
setenv("unless", {_stash = true, macro = function (cond, ...)
  local ____r9 = unstash({...})
  local __cond1 = destash33(cond, ____r9)
  local ____id4 = ____r9
  local __body2 = cut(____id4, 0)
  return {"if", {"not", __cond1}, join({"do"}, __body2)}
end})
setenv("obj", {_stash = true, macro = function (...)
  local __body3 = unstash({...})
  return join({"%object"}, mapo(function (x)
    return x
  end, __body3))
end})
setenv("let", {_stash = true, macro = function (bs, ...)
  local ____r11 = unstash({...})
  local __bs = destash33(bs, ____r11)
  local ____id5 = ____r11
  local __body4 = cut(____id5, 0)
  if atom63(__bs) then
    return join({"let", {__bs, hd(__body4)}}, tl(__body4))
  else
    if none63(__bs) then
      return join({"do"}, __body4)
    else
      local ____id6 = __bs
      local __lh1 = ____id6[1]
      local __rh1 = ____id6[2]
      local __bs2 = cut(____id6, 2)
      local ____id7 = bind(__lh1, __rh1)
      local __id8 = ____id7[1]
      local __val = ____id7[2]
      local __bs1 = cut(____id7, 2)
      local __renames = {}
      if not id_literal63(__id8) then
        local __id11 = unique(__id8)
        __renames = {__id8, __id11}
        __id8 = __id11
      end
      return {"do", {"%local", __id8, __val}, {"let-symbol", __renames, join({"let", join(__bs1, __bs2)}, __body4)}}
    end
  end
end})
setenv("with", {_stash = true, macro = function (x, v, ...)
  local ____r12 = unstash({...})
  local __x49 = destash33(x, ____r12)
  local __v1 = destash33(v, ____r12)
  local ____id9 = ____r12
  local __body5 = cut(____id9, 0)
  return join({"let", {__x49, __v1}}, __body5, {__x49})
end})
setenv("let-when", {_stash = true, macro = function (x, v, ...)
  local ____r13 = unstash({...})
  local __x54 = destash33(x, ____r13)
  local __v2 = destash33(v, ____r13)
  local ____id10 = ____r13
  local __body6 = cut(____id10, 0)
  local __y = unique("y")
  return {"let", __y, __v2, {"when", {"yes", __y}, join({"let", {__x54, __y}}, __body6)}}
end})
setenv("define-macro", {_stash = true, macro = function (name, args, ...)
  local ____r14 = unstash({...})
  local __name = destash33(name, ____r14)
  local __args1 = destash33(args, ____r14)
  local ____id111 = ____r14
  local __body7 = cut(____id111, 0)
  local ____x62 = {"setenv", {"quote", __name}}
  ____x62.macro = join({"fn", __args1}, __body7)
  return {"do", ____x62, {"do"}}
end})
setenv("define-special", {_stash = true, macro = function (name, args, ...)
  local ____r15 = unstash({...})
  local __name1 = destash33(name, ____r15)
  local __args2 = destash33(args, ____r15)
  local ____id12 = ____r15
  local __body8 = cut(____id12, 0)
  local ____x68 = {"setenv", {"quote", __name1}}
  ____x68.special = join({"fn", __args2}, __body8)
  return {"do", join(____x68, keys(__body8)), {"do"}}
end})
setenv("define-symbol", {_stash = true, macro = function (name, expansion)
  local ____x73 = {"setenv", {"quote", name}}
  ____x73.symbol = {"quote", expansion}
  return {"do", ____x73, {"do"}}
end})
setenv("define-reader", {_stash = true, macro = function (__x77, ...)
  local ____id13 = __x77
  local __char = ____id13[1]
  local __s = ____id13[2]
  local ____r17 = unstash({...})
  local ____x77 = destash33(__x77, ____r17)
  local ____id14 = ____r17
  local __body9 = cut(____id14, 0)
  return {"set", {"get", "read-table", __char}, join({"fn", {__s}}, __body9)}
end})
setenv("define", {_stash = true, macro = function (name, x, ...)
  local ____r18 = unstash({...})
  local __name2 = destash33(name, ____r18)
  local __x84 = destash33(x, ____r18)
  local ____id15 = ____r18
  local __body10 = cut(____id15, 0)
  setenv(__name2, {_stash = true, variable = true})
  if some63(__body10) then
    return join({"%local-function", __name2}, bind42(__x84, __body10))
  else
    return {"%local", __name2, __x84}
  end
end})
setenv("define-global", {_stash = true, macro = function (name, x, ...)
  local ____r19 = unstash({...})
  local __name3 = destash33(name, ____r19)
  local __x88 = destash33(x, ____r19)
  local ____id16 = ____r19
  local __body11 = cut(____id16, 0)
  setenv(__name3, {_stash = true, toplevel = true, variable = true})
  if some63(__body11) then
    return {"do", join({"%global-function", __name3}, bind42(__x88, __body11)), {"%set", {"get", "_G", {"quote", compile(__name3)}}, __name3}, {"do"}}
  else
    return {"do", {"%set", __name3, __x88}, {"%set", {"get", "_G", {"quote", compile(__name3)}}, __name3}, {"do"}}
  end
end})
setenv("with-frame", {_stash = true, macro = function (...)
  local __body12 = unstash({...})
  local __x102 = unique("x")
  return {"do", {"add", "environment", {"obj"}}, {"with", __x102, join({"do"}, __body12), {"drop", "environment"}}}
end})
setenv("with-bindings", {_stash = true, macro = function (__x109, ...)
  local ____id17 = __x109
  local __names = ____id17[1]
  local ____r20 = unstash({...})
  local ____x109 = destash33(__x109, ____r20)
  local ____id18 = ____r20
  local __body13 = cut(____id18, 0)
  local __x111 = unique("x")
  local ____x114 = {"setenv", __x111}
  ____x114.variable = true
  return join({"with-frame", {"each", __x111, __names, ____x114}}, __body13)
end})
setenv("let-macro", {_stash = true, macro = function (definitions, ...)
  local ____r21 = unstash({...})
  local __definitions = destash33(definitions, ____r21)
  local ____id19 = ____r21
  local __body14 = cut(____id19, 0)
  add(environment, {})
  map(function (m)
    return _eval(join({"define-macro"}, m))
  end, __definitions)
  local ____x116 = join({"do"}, macroexpand(__body14))
  drop(environment)
  return ____x116
end})
setenv("let-symbol", {_stash = true, macro = function (expansions, ...)
  local ____r23 = unstash({...})
  local __expansions = destash33(expansions, ____r23)
  local ____id20 = ____r23
  local __body15 = cut(____id20, 0)
  add(environment, {})
  map(function (__x121)
    local ____id21 = __x121
    local __name4 = ____id21[1]
    local __exp = ____id21[2]
    return _eval({"define-symbol", __name4, __exp})
  end, pair(__expansions))
  local ____x120 = join({"do"}, macroexpand(__body15))
  drop(environment)
  return ____x120
end})
setenv("let-unique", {_stash = true, macro = function (names, ...)
  local ____r25 = unstash({...})
  local __names1 = destash33(names, ____r25)
  local ____id22 = ____r25
  local __body16 = cut(____id22, 0)
  local __bs11 = map(function (n)
    return {n, {"unique", {"quote", n}}}
  end, __names1)
  return join({"let", apply(join, __bs11)}, __body16)
end})
setenv("fn", {_stash = true, macro = function (args, ...)
  local ____r27 = unstash({...})
  local __args3 = destash33(args, ____r27)
  local ____id23 = ____r27
  local __body17 = cut(____id23, 0)
  return join({"%function"}, bind42(__args3, __body17))
end})
setenv("apply", {_stash = true, macro = function (f, ...)
  local ____r28 = unstash({...})
  local __f = destash33(f, ____r28)
  local ____id24 = ____r28
  local __args4 = cut(____id24, 0)
  if _35(__args4) > 1 then
    return {"%call", "apply", __f, {"join", join({"list"}, almost(__args4)), last(__args4)}}
  else
    return join({"%call", "apply", __f}, __args4)
  end
end})
setenv("guard", {_stash = true, macro = function (expr)
  if target == "js" then
    return {{"fn", join(), {"%try", {"list", true, expr}}}}
  else
    local ____x147 = {"obj"}
    ____x147.stack = {{"get", "debug", {"quote", "traceback"}}}
    ____x147.message = {"if", {"string?", "m"}, {"clip", "m", {"+", {"search", "m", "\": \""}, 2}}, {"nil?", "m"}, "\"\"", {"str", "m"}}
    return {"list", {"xpcall", {"fn", join(), expr}, {"fn", {"m"}, {"if", {"obj?", "m"}, "m", ____x147}}}}
  end
end})
setenv("each", {_stash = true, macro = function (x, t, ...)
  local ____r30 = unstash({...})
  local __x159 = destash33(x, ____r30)
  local __t = destash33(t, ____r30)
  local ____id25 = ____r30
  local __body18 = cut(____id25, 0)
  local __o1 = unique("o")
  local __n1 = unique("n")
  local __i1 = unique("i")
  local __e
  if atom63(__x159) then
    __e = {__i1, __x159}
  else
    local __e1
    if _35(__x159) > 1 then
      __e1 = __x159
    else
      __e1 = {__i1, hd(__x159)}
    end
    __e = __e1
  end
  local ____id26 = __e
  local __k1 = ____id26[1]
  local __v3 = ____id26[2]
  local __e2
  if target == "lua" then
    __e2 = __body18
  else
    __e2 = {join({"let", __k1, {"if", {"numeric?", __k1}, {"parseInt", __k1}, __k1}}, __body18)}
  end
  return {"let", {__o1, __t, __k1, "nil"}, {"%for", __o1, __k1, join({"let", {__v3, {"get", __o1, __k1}}}, __e2)}}
end})
setenv("for", {_stash = true, macro = function (i, to, ...)
  local ____r31 = unstash({...})
  local __i2 = destash33(i, ____r31)
  local __to = destash33(to, ____r31)
  local ____id27 = ____r31
  local __body19 = cut(____id27, 0)
  return {"let", __i2, 0, join({"while", {"<", __i2, __to}}, __body19, {{"inc", __i2}})}
end})
setenv("step", {_stash = true, macro = function (v, t, ...)
  local ____r32 = unstash({...})
  local __v4 = destash33(v, ____r32)
  local __t1 = destash33(t, ____r32)
  local ____id28 = ____r32
  local __body20 = cut(____id28, 0)
  local __x180 = unique("x")
  local __i3 = unique("i")
  return {"let", {__x180, __t1}, {"for", __i3, {"#", __x180}, join({"let", {__v4, {"at", __x180, __i3}}}, __body20)}}
end})
setenv("set-of", {_stash = true, macro = function (...)
  local __xs = unstash({...})
  local __l1 = {}
  local ____o2 = __xs
  local ____i4 = nil
  for ____i4 in next, ____o2 do
    local __x189 = ____o2[____i4]
    __l1[__x189] = true
  end
  return join({"obj"}, __l1)
end})
setenv("language", {_stash = true, macro = function ()
  return {"quote", target}
end})
setenv("target", {_stash = true, macro = function (...)
  local __clauses1 = unstash({...})
  return __clauses1[target]
end})
setenv("join!", {_stash = true, macro = function (a, ...)
  local ____r34 = unstash({...})
  local __a1 = destash33(a, ____r34)
  local ____id29 = ____r34
  local __bs21 = cut(____id29, 0)
  return {"set", __a1, join({"join", __a1}, __bs21)}
end})
setenv("cat!", {_stash = true, macro = function (a, ...)
  local ____r35 = unstash({...})
  local __a2 = destash33(a, ____r35)
  local ____id30 = ____r35
  local __bs3 = cut(____id30, 0)
  return {"set", __a2, join({"cat", __a2}, __bs3)}
end})
setenv("inc", {_stash = true, macro = function (n, by)
  local __e3
  if nil63(by) then
    __e3 = 1
  else
    __e3 = by
  end
  return {"set", n, {"+", n, __e3}}
end})
setenv("dec", {_stash = true, macro = function (n, by)
  local __e4
  if nil63(by) then
    __e4 = 1
  else
    __e4 = by
  end
  return {"set", n, {"-", n, __e4}}
end})
setenv("with-indent", {_stash = true, macro = function (form)
  local __x203 = unique("x")
  return {"do", {"inc", "indent-level"}, {"with", __x203, form, {"dec", "indent-level"}}}
end})
setenv("export", {_stash = true, macro = function (...)
  local __names2 = unstash({...})
  if target == "js" then
    return join({"do"}, map(function (k)
      return {"set", {"get", "exports", {"quote", k}}, k}
    end, __names2))
  else
    local __x213 = {}
    local ____o3 = __names2
    local ____i5 = nil
    for ____i5 in next, ____o3 do
      local __k2 = ____o3[____i5]
      __x213[__k2] = __k2
    end
    return {"return", join({"%object"}, mapo(function (x)
      return x
    end, __x213))}
  end
end})
setenv("when-compiling", {_stash = true, macro = function (...)
  local __body21 = unstash({...})
  return _eval(join({"do"}, __body21))
end})
local reader = require("reader")
local compiler = require("compiler")
local system = require("system")
local function eval_print(form)
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
local function script_file63(path)
  return not( "-" == char(path, 0) or ".js" == clip(path, _35(path) - 3) or ".lua" == clip(path, _35(path) - 4))
end
local function run_file(path)
  if script_file63(path) then
    return _load(path)
  else
    return compiler.run(system["read-file"](path))
  end
end
local function usage()
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
local function main()
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
      local ____x2 = __pre
      local ____i1 = 0
      while ____i1 < _35(____x2) do
        local __file = ____x2[____i1 + 1]
        run_file(__file)
        ____i1 = ____i1 + 1
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
return {reader = reader, compiler = compiler, system = system, ["eval-print"] = eval_print, rep = rep, repl = repl, ["compile-file"] = compile_file, ["load"] = _load, ["script-file?"] = script_file63, ["run-file"] = run_file, usage = usage, main = main}
