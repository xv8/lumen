local function create(_G)
  _G._G = _G
  _G.environment = {{}}
  _G.target = "lua"
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
    local __r37 = {}
    local ____x18 = __ls
    local ____i4 = 0
    while ____i4 < _35(____x18) do
      local __l11 = ____x18[____i4 + 1]
      if __l11 then
        local __n3 = _35(__r37)
        local ____o2 = __l11
        local __k2 = nil
        for __k2 in next, ____o2 do
          local __v2 = ____o2[__k2]
          if number63(__k2) then
            __k2 = __k2 + __n3
          end
          __r37[__k2] = __v2
        end
      end
      ____i4 = ____i4 + 1
    end
    return __r37
  end
  _G.join = join
  function find(f, t)
    local ____o3 = t
    local ____i6 = nil
    for ____i6 in next, ____o3 do
      local __x19 = ____o3[____i6]
      local __y = f(__x19)
      if __y then
        return __y
      end
    end
  end
  _G.find = find
  function first(f, l)
    local ____x20 = l
    local ____i7 = 0
    while ____i7 < _35(____x20) do
      local __x21 = ____x20[____i7 + 1]
      local __y1 = f(__x21)
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
    local ____x23 = x
    local ____i9 = 0
    while ____i9 < _35(____x23) do
      local __v3 = ____x23[____i9 + 1]
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
      local __x24 = ____o6[____i12]
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
      local __e8
      if __keys.toplevel then
        __e8 = hd(_G.environment)
      else
        __e8 = last(_G.environment)
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
    local __args2 = unstash({...})
    return join({"do"}, map(function (__x40)
      local ____id2 = __x40
      local __lh = ____id2[1]
      local __rh = ____id2[2]
      return {"%set", __lh, __rh}
    end, pair(__args2)))
  end})
  setenv("at", {_stash = true, macro = function (l, i)
    if _G.target == "lua" and number63(i) then
      i = i + 1
    else
      if _G.target == "lua" then
        i = {"+", i, 1}
      end
    end
    return {"get", l, i}
  end})
  setenv("wipe", {_stash = true, macro = function (place)
    if _G.target == "lua" then
      return {"set", place, "nil"}
    else
      return {"%delete", place}
    end
  end})
  setenv("list", {_stash = true, macro = function (...)
    local __body = unstash({...})
    local __x47 = unique("x")
    local __l5 = {}
    local __forms = {}
    local ____o13 = __body
    local __k11 = nil
    for __k11 in next, ____o13 do
      local __v12 = ____o13[__k11]
      if number63(__k11) then
        __l5[__k11] = __v12
      else
        add(__forms, {"set", {"get", __x47, {"quote", __k11}}, __v12})
      end
    end
    if some63(__forms) then
      return join({"let", __x47, join({"%array"}, __l5)}, __forms, {__x47})
    else
      return join({"%array"}, __l5)
    end
  end})
  setenv("if", {_stash = true, macro = function (...)
    local __branches = unstash({...})
    return hd(expand_if(__branches))
  end})
  setenv("case", {_stash = true, macro = function (expr, ...)
    local ____r79 = unstash({...})
    local __expr = destash33(expr, ____r79)
    local ____id3 = ____r79
    local __clauses = cut(____id3, 0)
    local __x57 = unique("x")
    local __eq = function (_)
      return {"=", {"quote", _}, __x57}
    end
    local __cl = function (__x60)
      local ____id4 = __x60
      local __a1 = ____id4[1]
      local __b1 = ____id4[2]
      if nil63(__b1) then
        return {__a1}
      else
        if string63(__a1) or number63(__a1) then
          return {__eq(__a1), __b1}
        else
          if one63(__a1) then
            return {__eq(hd(__a1)), __b1}
          else
            if _35(__a1) > 1 then
              return {join({"or"}, map(__eq, __a1)), __b1}
            end
          end
        end
      end
    end
    return {"let", __x57, __expr, join({"if"}, apply(join, map(__cl, pair(__clauses))))}
  end})
  setenv("when", {_stash = true, macro = function (cond, ...)
    local ____r82 = unstash({...})
    local __cond = destash33(cond, ____r82)
    local ____id5 = ____r82
    local __body1 = cut(____id5, 0)
    return {"if", __cond, join({"do"}, __body1)}
  end})
  setenv("unless", {_stash = true, macro = function (cond, ...)
    local ____r83 = unstash({...})
    local __cond1 = destash33(cond, ____r83)
    local ____id6 = ____r83
    local __body2 = cut(____id6, 0)
    return {"if", {"not", __cond1}, join({"do"}, __body2)}
  end})
  setenv("obj", {_stash = true, macro = function (...)
    local __body3 = unstash({...})
    return join({"%object"}, mapo(function (x)
      return x
    end, __body3))
  end})
  setenv("let", {_stash = true, macro = function (bs, ...)
    local ____r85 = unstash({...})
    local __bs = destash33(bs, ____r85)
    local ____id7 = ____r85
    local __body4 = cut(____id7, 0)
    if atom63(__bs) then
      return join({"let", {__bs, hd(__body4)}}, tl(__body4))
    else
      if none63(__bs) then
        return join({"do"}, __body4)
      else
        local ____id8 = __bs
        local __lh1 = ____id8[1]
        local __rh1 = ____id8[2]
        local __bs2 = cut(____id8, 2)
        local ____id9 = bind(__lh1, __rh1)
        local __id10 = ____id9[1]
        local __val = ____id9[2]
        local __bs1 = cut(____id9, 2)
        local __renames = {}
        if not id_literal63(__id10) then
          local __id11 = unique(__id10)
          __renames = {__id10, __id11}
          __id10 = __id11
        end
        return {"do", {"%local", __id10, __val}, {"let-symbol", __renames, join({"let", join(__bs1, __bs2)}, __body4)}}
      end
    end
  end})
  setenv("with", {_stash = true, macro = function (x, v, ...)
    local ____r86 = unstash({...})
    local __x87 = destash33(x, ____r86)
    local __v13 = destash33(v, ____r86)
    local ____id111 = ____r86
    local __body5 = cut(____id111, 0)
    return join({"let", {__x87, __v13}}, __body5, {__x87})
  end})
  setenv("let-when", {_stash = true, macro = function (x, v, ...)
    local ____r87 = unstash({...})
    local __x92 = destash33(x, ____r87)
    local __v14 = destash33(v, ____r87)
    local ____id12 = ____r87
    local __body6 = cut(____id12, 0)
    local __y4 = unique("y")
    return {"let", __y4, __v14, {"when", {"yes", __y4}, join({"let", {__x92, __y4}}, __body6)}}
  end})
  setenv("define-macro", {_stash = true, macro = function (name, args, ...)
    local ____r88 = unstash({...})
    local __name = destash33(name, ____r88)
    local __args3 = destash33(args, ____r88)
    local ____id13 = ____r88
    local __body7 = cut(____id13, 0)
    local ____x100 = {"setenv", {"quote", __name}}
    ____x100.macro = join({"fn", __args3}, __body7)
    return {"do", ____x100, {"do"}}
  end})
  setenv("define-special", {_stash = true, macro = function (name, args, ...)
    local ____r89 = unstash({...})
    local __name1 = destash33(name, ____r89)
    local __args4 = destash33(args, ____r89)
    local ____id14 = ____r89
    local __body8 = cut(____id14, 0)
    local ____x106 = {"setenv", {"quote", __name1}}
    ____x106.special = join({"fn", __args4}, __body8)
    return {"do", join(____x106, keys(__body8)), {"do"}}
  end})
  setenv("define-symbol", {_stash = true, macro = function (name, expansion)
    local ____x111 = {"setenv", {"quote", name}}
    ____x111.symbol = {"quote", expansion}
    return {"do", ____x111, {"do"}}
  end})
  setenv("define-reader", {_stash = true, macro = function (__x115, ...)
    local ____id15 = __x115
    local __char = ____id15[1]
    local __s11 = ____id15[2]
    local ____r91 = unstash({...})
    local ____x115 = destash33(__x115, ____r91)
    local ____id16 = ____r91
    local __body9 = cut(____id16, 0)
    return {"set", {"get", "read-table", __char}, join({"fn", {__s11}}, __body9)}
  end})
  setenv("define", {_stash = true, macro = function (name, x, ...)
    local ____r92 = unstash({...})
    local __name2 = destash33(name, ____r92)
    local __x122 = destash33(x, ____r92)
    local ____id17 = ____r92
    local __body10 = cut(____id17, 0)
    setenv(__name2, {_stash = true, variable = true})
    if some63(__body10) then
      return join({"%local-function", __name2}, bind42(__x122, __body10))
    else
      return {"%local", __name2, __x122}
    end
  end})
  setenv("define-global", {_stash = true, macro = function (name, x, ...)
    local ____r93 = unstash({...})
    local __name3 = destash33(name, ____r93)
    local __x126 = destash33(x, ____r93)
    local ____id18 = ____r93
    local __body11 = cut(____id18, 0)
    setenv(__name3, {_stash = true, toplevel = true, variable = true})
    if some63(__body11) then
      return {"do", join({"%global-function", __name3}, bind42(__x126, __body11)), {"%set", {"get", "_G", {"quote", compile(__name3)}}, __name3}, {"do"}}
    else
      return {"do", {"%set", __name3, __x126}, {"%set", {"get", "_G", {"quote", compile(__name3)}}, __name3}, {"do"}}
    end
  end})
  setenv("with-frame", {_stash = true, macro = function (...)
    local __body12 = unstash({...})
    local __x140 = unique("x")
    return {"do", {"add", {"get", "_G", {"quote", "environment"}}, {"obj"}}, {"with", __x140, join({"do"}, __body12), {"drop", {"get", "_G", {"quote", "environment"}}}}}
  end})
  setenv("with-bindings", {_stash = true, macro = function (__x151, ...)
    local ____id19 = __x151
    local __names = ____id19[1]
    local ____r94 = unstash({...})
    local ____x151 = destash33(__x151, ____r94)
    local ____id20 = ____r94
    local __body13 = cut(____id20, 0)
    local __x153 = unique("x")
    local ____x156 = {"setenv", __x153}
    ____x156.variable = true
    return join({"with-frame", {"each", __x153, __names, ____x156}}, __body13)
  end})
  setenv("let-macro", {_stash = true, macro = function (definitions, ...)
    local ____r95 = unstash({...})
    local __definitions = destash33(definitions, ____r95)
    local ____id21 = ____r95
    local __body14 = cut(____id21, 0)
    add(_G.environment, {})
    map(function (m)
      return _eval(join({"define-macro"}, m))
    end, __definitions)
    local ____x158 = join({"do"}, macroexpand(__body14))
    drop(_G.environment)
    return ____x158
  end})
  setenv("let-symbol", {_stash = true, macro = function (expansions, ...)
    local ____r97 = unstash({...})
    local __expansions = destash33(expansions, ____r97)
    local ____id22 = ____r97
    local __body15 = cut(____id22, 0)
    add(_G.environment, {})
    map(function (__x163)
      local ____id23 = __x163
      local __name4 = ____id23[1]
      local __exp = ____id23[2]
      return _eval({"define-symbol", __name4, __exp})
    end, pair(__expansions))
    local ____x162 = join({"do"}, macroexpand(__body15))
    drop(_G.environment)
    return ____x162
  end})
  setenv("let-unique", {_stash = true, macro = function (names, ...)
    local ____r99 = unstash({...})
    local __names1 = destash33(names, ____r99)
    local ____id24 = ____r99
    local __body16 = cut(____id24, 0)
    local __bs11 = map(function (n)
      return {n, {"unique", {"quote", n}}}
    end, __names1)
    return join({"let", apply(join, __bs11)}, __body16)
  end})
  setenv("fn", {_stash = true, macro = function (args, ...)
    local ____r101 = unstash({...})
    local __args5 = destash33(args, ____r101)
    local ____id25 = ____r101
    local __body17 = cut(____id25, 0)
    return join({"%function"}, bind42(__args5, __body17))
  end})
  setenv("apply", {_stash = true, macro = function (f, ...)
    local ____r102 = unstash({...})
    local __f1 = destash33(f, ____r102)
    local ____id26 = ____r102
    local __args6 = cut(____id26, 0)
    if _35(__args6) > 1 then
      return {"%call", "apply", __f1, {"join", join({"list"}, almost(__args6)), last(__args6)}}
    else
      return join({"%call", "apply", __f1}, __args6)
    end
  end})
  setenv("guard", {_stash = true, macro = function (expr)
    if _G.target == "js" then
      return {{"fn", join(), {"%try", {"list", true, expr}}}}
    else
      local ____x189 = {"obj"}
      ____x189.stack = {{"get", "debug", {"quote", "traceback"}}}
      ____x189.message = {"if", {"string?", "m"}, {"clip", "m", {"+", {"search", "m", "\": \""}, 2}}, {"nil?", "m"}, "\"\"", {"str", "m"}}
      return {"list", {"xpcall", {"fn", join(), expr}, {"fn", {"m"}, {"if", {"obj?", "m"}, "m", ____x189}}}}
    end
  end})
  setenv("each", {_stash = true, macro = function (x, t, ...)
    local ____r104 = unstash({...})
    local __x201 = destash33(x, ____r104)
    local __t2 = destash33(t, ____r104)
    local ____id27 = ____r104
    local __body18 = cut(____id27, 0)
    local __o14 = unique("o")
    local __n18 = unique("n")
    local __i25 = unique("i")
    local __e9
    if atom63(__x201) then
      __e9 = {__i25, __x201}
    else
      local __e10
      if _35(__x201) > 1 then
        __e10 = __x201
      else
        __e10 = {__i25, hd(__x201)}
      end
      __e9 = __e10
    end
    local ____id28 = __e9
    local __k12 = ____id28[1]
    local __v15 = ____id28[2]
    local __e11
    if _G.target == "lua" then
      __e11 = __body18
    else
      __e11 = {join({"let", __k12, {"if", {"numeric?", __k12}, {"parseInt", __k12}, __k12}}, __body18)}
    end
    return {"let", {__o14, __t2, __k12, "nil"}, {"%for", __o14, __k12, join({"let", {__v15, {"get", __o14, __k12}}}, __e11)}}
  end})
  setenv("for", {_stash = true, macro = function (i, to, ...)
    local ____r105 = unstash({...})
    local __i26 = destash33(i, ____r105)
    local __to = destash33(to, ____r105)
    local ____id29 = ____r105
    local __body19 = cut(____id29, 0)
    return {"let", __i26, 0, join({"while", {"<", __i26, __to}}, __body19, {{"inc", __i26}})}
  end})
  setenv("step", {_stash = true, macro = function (v, t, ...)
    local ____r106 = unstash({...})
    local __v16 = destash33(v, ____r106)
    local __t3 = destash33(t, ____r106)
    local ____id30 = ____r106
    local __body20 = cut(____id30, 0)
    local __x222 = unique("x")
    local __i27 = unique("i")
    return {"let", {__x222, __t3}, {"for", __i27, {"#", __x222}, join({"let", {__v16, {"at", __x222, __i27}}}, __body20)}}
  end})
  setenv("set-of", {_stash = true, macro = function (...)
    local __xs12 = unstash({...})
    local __l6 = {}
    local ____o15 = __xs12
    local ____i28 = nil
    for ____i28 in next, ____o15 do
      local __x231 = ____o15[____i28]
      __l6[__x231] = true
    end
    return join({"obj"}, __l6)
  end})
  setenv("language", {_stash = true, macro = function ()
    return {"quote", _G.target}
  end})
  setenv("target", {_stash = true, macro = function (...)
    local __clauses1 = unstash({...})
    return __clauses1[_G.target]
  end})
  setenv("join!", {_stash = true, macro = function (a, ...)
    local ____r108 = unstash({...})
    local __a2 = destash33(a, ____r108)
    local ____id31 = ____r108
    local __bs21 = cut(____id31, 0)
    return {"set", __a2, join({"join", __a2}, __bs21)}
  end})
  setenv("cat!", {_stash = true, macro = function (a, ...)
    local ____r109 = unstash({...})
    local __a3 = destash33(a, ____r109)
    local ____id32 = ____r109
    local __bs3 = cut(____id32, 0)
    return {"set", __a3, join({"cat", __a3}, __bs3)}
  end})
  setenv("inc", {_stash = true, macro = function (n, by)
    local __e12
    if nil63(by) then
      __e12 = 1
    else
      __e12 = by
    end
    return {"set", n, {"+", n, __e12}}
  end})
  setenv("dec", {_stash = true, macro = function (n, by)
    local __e13
    if nil63(by) then
      __e13 = 1
    else
      __e13 = by
    end
    return {"set", n, {"-", n, __e13}}
  end})
  setenv("with-indent", {_stash = true, macro = function (form)
    local __x245 = unique("x")
    return {"do", {"inc", "indent-level"}, {"with", __x245, form, {"dec", "indent-level"}}}
  end})
  setenv("export", {_stash = true, macro = function (...)
    local __names2 = unstash({...})
    if _G.target == "js" then
      return join({"do"}, map(function (k)
        return {"set", {"get", "exports", {"quote", k}}, k, {"get", "exports", {"quote", compile(k)}}, k}
      end, __names2))
    else
      local __x257 = {}
      local ____o16 = __names2
      local ____i29 = nil
      for ____i29 in next, ____o16 do
        local __k13 = ____o16[____i29]
        __x257[__k13] = __k13
      end
      return {"return", join({"%object"}, mapo(function (x)
        return x
      end, __x257))}
    end
  end})
  setenv("when-compiling", {_stash = true, macro = function (...)
    local __body21 = unstash({...})
    return _eval(join({"do"}, __body21))
  end})
  local __exports = {}
  local function getenv(k, p)
    if string63(k) then
      local __i30 = edge(_G.environment)
      while __i30 >= 0 do
        local __b2 = _G.environment[__i30 + 1][k]
        if is63(__b2) then
          local __e22
          if p then
            __e22 = __b2[p]
          else
            __e22 = __b2
          end
          return __e22
        else
          __i30 = __i30 - 1
        end
      end
    end
  end
  local function macro_function(k)
    return getenv(k, "macro")
  end
  local function macro63(k)
    return is63(macro_function(k))
  end
  local function special63(k)
    return is63(getenv(k, "special"))
  end
  local function special_form63(form)
    return not atom63(form) and special63(hd(form))
  end
  local function statement63(k)
    return special63(k) and getenv(k, "stmt")
  end
  local function symbol_expansion(k)
    return getenv(k, "symbol")
  end
  local function symbol63(k)
    return is63(symbol_expansion(k))
  end
  local function variable63(k)
    return is63(getenv(k, "variable"))
  end
  function bound63(x)
    return macro63(x) or special63(x) or symbol63(x) or variable63(x)
  end
  _G.bound63 = bound63
  function quoted(form)
    if string63(form) then
      return escape(form)
    else
      if atom63(form) then
        return form
      else
        return join({"list"}, map(quoted, form))
      end
    end
  end
  _G.quoted = quoted
  local function literal(s)
    if string_literal63(s) then
      return s
    else
      return quoted(s)
    end
  end
  local function stash42(args)
    if keys63(args) then
      local __l7 = {"%object", "\"_stash\"", true}
      local ____o17 = args
      local __k14 = nil
      for __k14 in next, ____o17 do
        local __v17 = ____o17[__k14]
        if not number63(__k14) then
          add(__l7, literal(__k14))
          add(__l7, __v17)
        end
      end
      return join(args, {__l7})
    else
      return args
    end
  end
  local function bias(k)
    if number63(k) and not( _G.target == "lua") then
      if _G.target == "js" then
        k = k - 1
      else
        k = k + 1
      end
    end
    return k
  end
  function bind(lh, rh)
    if atom63(lh) then
      return {lh, rh}
    else
      local __id33 = unique("id")
      local __bs4 = {__id33, rh}
      local ____o18 = lh
      local __k15 = nil
      for __k15 in next, ____o18 do
        local __v18 = ____o18[__k15]
        local __e23
        if __k15 == "rest" then
          __e23 = {"cut", __id33, _35(lh)}
        else
          __e23 = {"get", __id33, {"quote", bias(__k15)}}
        end
        local __x267 = __e23
        if is63(__k15) then
          local __e24
          if __v18 == true then
            __e24 = __k15
          else
            __e24 = __v18
          end
          local __k16 = __e24
          __bs4 = join(__bs4, bind(__k16, __x267))
        end
      end
      return __bs4
    end
  end
  _G.bind = bind
  setenv("arguments%", {_stash = true, macro = function (from)
    return {{"get", {"get", {"get", "Array", {"quote", "prototype"}}, {"quote", "slice"}}, {"quote", "call"}}, "arguments", from}
  end})
  function bind42(args, body)
    local __args12 = {}
    local function rest()
      __args12.rest = true
      if _G.target == "js" then
        return {"unstash", {"arguments%", _35(__args12)}}
      else
        return {"unstash", {"list", "|...|"}}
      end
    end
    if atom63(args) then
      return {__args12, join({"let", {args, rest()}}, body)}
    else
      local __bs5 = {}
      local __r133 = unique("r")
      local ____o19 = args
      local __k17 = nil
      for __k17 in next, ____o19 do
        local __v19 = ____o19[__k17]
        if number63(__k17) then
          if atom63(__v19) then
            add(__args12, __v19)
          else
            local __x285 = unique("x")
            add(__args12, __x285)
            __bs5 = join(__bs5, {__v19, __x285})
          end
        end
      end
      if keys63(args) then
        __bs5 = join(__bs5, {__r133, rest()})
        local __n24 = _35(__args12)
        local __i34 = 0
        while __i34 < __n24 do
          local __v20 = __args12[__i34 + 1]
          __bs5 = join(__bs5, {__v20, {"destash!", __v20, __r133}})
          __i34 = __i34 + 1
        end
        __bs5 = join(__bs5, {keys(args), __r133})
      end
      return {__args12, join({"let", __bs5}, body)}
    end
  end
  _G.bind42 = bind42
  local function quoting63(depth)
    return number63(depth)
  end
  local function quasiquoting63(depth)
    return quoting63(depth) and depth > 0
  end
  local function can_unquote63(depth)
    return quoting63(depth) and depth == 1
  end
  local function quasisplice63(x, depth)
    return can_unquote63(depth) and not atom63(x) and hd(x) == "unquote-splicing"
  end
  local function expand_local(__x293)
    local ____id34 = __x293
    local __x294 = ____id34[1]
    local __name5 = ____id34[2]
    local __value = ____id34[3]
    setenv(__name5, {_stash = true, variable = true})
    return {"%local", __name5, macroexpand(__value)}
  end
  local function expand_function(__x296)
    local ____id35 = __x296
    local __x297 = ____id35[1]
    local __args7 = ____id35[2]
    local __body22 = cut(____id35, 2)
    add(_G.environment, {})
    local ____o20 = __args7
    local ____i35 = nil
    for ____i35 in next, ____o20 do
      local ____x298 = ____o20[____i35]
      setenv(____x298, {_stash = true, variable = true})
    end
    local ____x299 = join({"%function", __args7}, macroexpand(__body22))
    drop(_G.environment)
    return ____x299
  end
  local function expand_definition(__x301)
    local ____id36 = __x301
    local __x302 = ____id36[1]
    local __name6 = ____id36[2]
    local __args8 = ____id36[3]
    local __body23 = cut(____id36, 3)
    add(_G.environment, {})
    local ____o21 = __args8
    local ____i36 = nil
    for ____i36 in next, ____o21 do
      local ____x303 = ____o21[____i36]
      setenv(____x303, {_stash = true, variable = true})
    end
    local ____x304 = join({__x302, __name6, __args8}, macroexpand(__body23))
    drop(_G.environment)
    return ____x304
  end
  local function expand_macro(form)
    return macroexpand(expand1(form))
  end
  function expand1(__x306)
    local ____id37 = __x306
    local __name7 = ____id37[1]
    local __body24 = cut(____id37, 1)
    return apply(macro_function(__name7), __body24)
  end
  _G.expand1 = expand1
  function macroexpand(form)
    if symbol63(form) then
      return macroexpand(symbol_expansion(form))
    else
      if atom63(form) then
        return form
      else
        local __x307 = hd(form)
        if __x307 == "%local" then
          return expand_local(form)
        else
          if __x307 == "%function" then
            return expand_function(form)
          else
            if __x307 == "%global-function" then
              return expand_definition(form)
            else
              if __x307 == "%local-function" then
                return expand_definition(form)
              else
                if macro63(__x307) then
                  return expand_macro(form)
                else
                  return map(macroexpand, form)
                end
              end
            end
          end
        end
      end
    end
  end
  _G.macroexpand = macroexpand
  local function quasiquote_list(form, depth)
    local __xs13 = {{"list"}}
    local ____o22 = form
    local __k18 = nil
    for __k18 in next, ____o22 do
      local __v21 = ____o22[__k18]
      if not number63(__k18) then
        local __e25
        if quasisplice63(__v21, depth) then
          __e25 = quasiexpand(__v21[2])
        else
          __e25 = quasiexpand(__v21, depth)
        end
        local __v22 = __e25
        last(__xs13)[__k18] = __v22
      end
    end
    local ____x310 = form
    local ____i38 = 0
    while ____i38 < _35(____x310) do
      local __x311 = ____x310[____i38 + 1]
      if quasisplice63(__x311, depth) then
        local __x312 = quasiexpand(__x311[2])
        add(__xs13, __x312)
        add(__xs13, {"list"})
      else
        add(last(__xs13), quasiexpand(__x311, depth))
      end
      ____i38 = ____i38 + 1
    end
    local __pruned = keep(function (x)
      return _35(x) > 1 or not( hd(x) == "list") or keys63(x)
    end, __xs13)
    if one63(__pruned) then
      return hd(__pruned)
    else
      return join({"join"}, __pruned)
    end
  end
  function quasiexpand(form, depth)
    if quasiquoting63(depth) then
      if atom63(form) then
        return {"quote", form}
      else
        if can_unquote63(depth) and hd(form) == "unquote" then
          return quasiexpand(form[2])
        else
          if hd(form) == "unquote" or hd(form) == "unquote-splicing" then
            return quasiquote_list(form, depth - 1)
          else
            if hd(form) == "quasiquote" then
              return quasiquote_list(form, depth + 1)
            else
              return quasiquote_list(form, depth)
            end
          end
        end
      end
    else
      if atom63(form) then
        return form
      else
        if hd(form) == "quote" then
          return form
        else
          if hd(form) == "quasiquote" then
            return quasiexpand(form[2], 1)
          else
            return map(function (x)
              return quasiexpand(x, depth)
            end, form)
          end
        end
      end
    end
  end
  _G.quasiexpand = quasiexpand
  function expand_if(__x316)
    local ____id38 = __x316
    local __a4 = ____id38[1]
    local __b3 = ____id38[2]
    local __c11 = cut(____id38, 2)
    if is63(__b3) then
      return {join({"%if", __a4, __b3}, expand_if(__c11))}
    else
      if is63(__a4) then
        return {__a4}
      end
    end
  end
  _G.expand_if = expand_if
  indent_level = 0
  _G.indent_level = indent_level
  function indentation()
    local __s2 = ""
    local __i39 = 0
    while __i39 < indent_level do
      __s2 = __s2 .. "  "
      __i39 = __i39 + 1
    end
    return __s2
  end
  _G.indentation = indentation
  local reserved = {["="] = true, ["=="] = true, ["+"] = true, ["-"] = true, ["%"] = true, ["*"] = true, ["/"] = true, ["<"] = true, [">"] = true, ["<="] = true, [">="] = true, ["break"] = true, ["case"] = true, ["catch"] = true, ["class"] = true, ["const"] = true, ["continue"] = true, ["debugger"] = true, ["default"] = true, ["delete"] = true, ["do"] = true, ["else"] = true, ["eval"] = true, ["finally"] = true, ["for"] = true, ["function"] = true, ["if"] = true, ["import"] = true, ["in"] = true, ["instanceof"] = true, ["let"] = true, ["new"] = true, ["return"] = true, ["switch"] = true, ["throw"] = true, ["try"] = true, ["typeof"] = true, ["var"] = true, ["void"] = true, ["with"] = true, ["and"] = true, ["end"] = true, ["load"] = true, ["repeat"] = true, ["while"] = true, ["false"] = true, ["local"] = true, ["nil"] = true, ["then"] = true, ["not"] = true, ["true"] = true, ["elseif"] = true, ["or"] = true, ["until"] = true}
  function reserved63(x)
    return has63(reserved, x)
  end
  _G.reserved63 = reserved63
  local function valid_code63(n)
    return number_code63(n) or n > 64 and n < 91 or n > 96 and n < 123 or n == 95
  end
  local function id(id)
    local __e26
    if number_code63(code(id, 0)) then
      __e26 = "_"
    else
      __e26 = ""
    end
    local __id121 = __e26
    local __i40 = 0
    while __i40 < _35(id) do
      local __c2 = char(id, __i40)
      local __n28 = code(__c2)
      local __e27
      if __c2 == "-" and not( id == "-") then
        __e27 = "_"
      else
        local __e28
        if valid_code63(__n28) then
          __e28 = __c2
        else
          local __e29
          if __i40 == 0 then
            __e29 = "_" .. __n28
          else
            __e29 = __n28
          end
          __e28 = __e29
        end
        __e27 = __e28
      end
      local __c12 = __e27
      __id121 = __id121 .. __c12
      __i40 = __i40 + 1
    end
    if reserved63(__id121) then
      return "_" .. __id121
    else
      return __id121
    end
  end
  function valid_id63(x)
    return some63(x) and x == id(x)
  end
  _G.valid_id63 = valid_id63
  local __names3 = {}
  function unique(x)
    local __x320 = id(x)
    if __names3[__x320] then
      local __i41 = __names3[__x320]
      __names3[__x320] = __names3[__x320] + 1
      return unique(__x320 .. __i41)
    else
      __names3[__x320] = 1
      return "__" .. __x320
    end
  end
  _G.unique = unique
  function key(k)
    if string_literal63(k) then
      local __i42 = inner(k)
      if valid_id63(__i42) then
        return __i42
      else
        if _G.target == "js" then
          return k
        else
          return "[" .. k .. "]"
        end
      end
    else
      return "[" .. k .. "]"
    end
  end
  _G.key = key
  function mapo(f, t)
    local __o23 = {}
    local ____o24 = t
    local __k19 = nil
    for __k19 in next, ____o24 do
      local __v23 = ____o24[__k19]
      local __x321 = f(__v23)
      if is63(__x321) then
        add(__o23, literal(__k19))
        add(__o23, __x321)
      end
    end
    return __o23
  end
  _G.mapo = mapo
  local ____x323 = {}
  local ____x324 = {}
  ____x324.js = "!"
  ____x324.lua = "not"
  ____x323["not"] = ____x324
  local ____x325 = {}
  ____x325["*"] = true
  ____x325["/"] = true
  ____x325["%"] = true
  local ____x326 = {}
  local ____x327 = {}
  ____x327.js = "+"
  ____x327.lua = ".."
  ____x326.cat = ____x327
  local ____x328 = {}
  ____x328["+"] = true
  ____x328["-"] = true
  local ____x329 = {}
  ____x329["<"] = true
  ____x329[">"] = true
  ____x329["<="] = true
  ____x329[">="] = true
  local ____x330 = {}
  local ____x331 = {}
  ____x331.js = "==="
  ____x331.lua = "=="
  ____x330["="] = ____x331
  local ____x332 = {}
  local ____x333 = {}
  ____x333.js = "&&"
  ____x333.lua = "and"
  ____x332["and"] = ____x333
  local ____x334 = {}
  local ____x335 = {}
  ____x335.js = "||"
  ____x335.lua = "or"
  ____x334["or"] = ____x335
  local infix = {____x323, ____x325, ____x326, ____x328, ____x329, ____x330, ____x332, ____x334}
  local function unary63(form)
    return two63(form) and in63(hd(form), {"not", "-"})
  end
  local function index(k)
    if number63(k) then
      return k - 1
    end
  end
  local function precedence(form)
    if not( atom63(form) or unary63(form)) then
      local ____o25 = infix
      local __k20 = nil
      for __k20 in next, ____o25 do
        local __v24 = ____o25[__k20]
        if __v24[hd(form)] then
          return index(__k20)
        end
      end
    end
    return 0
  end
  local function getop(op)
    return find(function (level)
      local __x337 = level[op]
      if __x337 == true then
        return op
      else
        if is63(__x337) then
          return __x337[_G.target]
        end
      end
    end, infix)
  end
  local function infix63(x)
    return is63(getop(x))
  end
  function infix_operator63(x)
    return obj63(x) and infix63(hd(x))
  end
  _G.infix_operator63 = infix_operator63
  local function compile_args(args)
    local __s3 = "("
    local __c3 = ""
    local ____x338 = args
    local ____i45 = 0
    while ____i45 < _35(____x338) do
      local __x339 = ____x338[____i45 + 1]
      __s3 = __s3 .. __c3 .. compile(__x339)
      __c3 = ", "
      ____i45 = ____i45 + 1
    end
    return __s3 .. ")"
  end
  local function escape_newlines(s)
    local __s12 = ""
    local __i46 = 0
    while __i46 < _35(s) do
      local __c4 = char(s, __i46)
      local __e30
      if __c4 == "\n" then
        __e30 = "\\n"
      else
        local __e31
        if __c4 == "\r" then
          __e31 = "\\r"
        else
          __e31 = __c4
        end
        __e30 = __e31
      end
      __s12 = __s12 .. __e30
      __i46 = __i46 + 1
    end
    return __s12
  end
  local function compile_atom(x)
    if x == "nil" and _G.target == "lua" then
      return x
    else
      if x == "nil" then
        return "undefined"
      else
        if id_literal63(x) then
          return inner(x)
        else
          if string_literal63(x) then
            return escape_newlines(x)
          else
            if string63(x) then
              return id(x)
            else
              if boolean63(x) then
                if x then
                  return "true"
                else
                  return "false"
                end
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
                      if number63(x) then
                        return x .. ""
                      else
                        error("Cannot compile atom: " .. str(x))
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
  local function terminator(stmt63)
    if not stmt63 then
      return ""
    else
      if _G.target == "js" then
        return ";\n"
      else
        return "\n"
      end
    end
  end
  local function compile_special(form, stmt63)
    local ____id39 = form
    local __x340 = ____id39[1]
    local __args9 = cut(____id39, 1)
    local ____id40 = getenv(__x340)
    local __special = ____id40.special
    local __stmt = ____id40.stmt
    local __self_tr63 = ____id40.tr
    local __tr = terminator(stmt63 and not __self_tr63)
    return apply(__special, __args9) .. __tr
  end
  local function parenthesize_call63(x)
    return not atom63(x) and hd(x) == "%function" or precedence(x) > 0
  end
  local function compile_call(form)
    local __f2 = hd(form)
    local __f11 = compile(__f2)
    local __args10 = compile_args(stash42(tl(form)))
    if parenthesize_call63(__f2) then
      return "(" .. __f11 .. ")" .. __args10
    else
      return __f11 .. __args10
    end
  end
  local function op_delims(parent, child, ...)
    local ____r171 = unstash({...})
    local __parent = destash33(parent, ____r171)
    local __child = destash33(child, ____r171)
    local ____id41 = ____r171
    local __right = ____id41.right
    local __e32
    if __right then
      __e32 = _6261
    else
      __e32 = _62
    end
    if __e32(precedence(__child), precedence(__parent)) then
      return {"(", ")"}
    else
      return {"", ""}
    end
  end
  local function compile_infix(form)
    local ____id42 = form
    local __op = ____id42[1]
    local ____id43 = cut(____id42, 1)
    local __a5 = ____id43[1]
    local __b4 = ____id43[2]
    local ____id44 = op_delims(form, __a5)
    local __ao = ____id44[1]
    local __ac = ____id44[2]
    local ____id45 = op_delims(form, __b4, {_stash = true, right = true})
    local __bo = ____id45[1]
    local __bc = ____id45[2]
    local __a6 = compile(__a5)
    local __b5 = compile(__b4)
    local __op1 = getop(__op)
    if unary63(form) then
      return __op1 .. __ao .. " " .. __a6 .. __ac
    else
      return __ao .. __a6 .. __ac .. " " .. __op1 .. " " .. __bo .. __b5 .. __bc
    end
  end
  function compile_function(args, body, ...)
    local ____r173 = unstash({...})
    local __args111 = destash33(args, ____r173)
    local __body25 = destash33(body, ____r173)
    local ____id46 = ____r173
    local __name8 = ____id46.name
    local __prefix = ____id46.prefix
    local __e33
    if __name8 then
      __e33 = compile(__name8)
    else
      __e33 = ""
    end
    local __id47 = __e33
    local __e34
    if _G.target == "lua" and __args111.rest then
      __e34 = join(__args111, {"|...|"})
    else
      __e34 = __args111
    end
    local __args13 = __e34
    local __args121 = compile_args(__args13)
    indent_level = indent_level + 1
    local ____x346 = compile(__body25, {_stash = true, stmt = true})
    indent_level = indent_level - 1
    local __body26 = ____x346
    local __ind = indentation()
    local __e35
    if __prefix then
      __e35 = __prefix .. " "
    else
      __e35 = ""
    end
    local __p1 = __e35
    local __e36
    if _G.target == "js" then
      __e36 = ""
    else
      __e36 = "end"
    end
    local __tr1 = __e36
    if __name8 then
      __tr1 = __tr1 .. "\n"
    end
    if _G.target == "js" then
      return "function " .. __id47 .. __args121 .. " {\n" .. __body26 .. __ind .. "}" .. __tr1
    else
      return __p1 .. "function " .. __id47 .. __args121 .. "\n" .. __body26 .. __ind .. __tr1
    end
  end
  _G.compile_function = compile_function
  local function can_return63(form)
    return is63(form) and (atom63(form) or not( hd(form) == "return") and not statement63(hd(form)))
  end
  function compile(form, ...)
    local ____r175 = unstash({...})
    local __form = destash33(form, ____r175)
    local ____id48 = ____r175
    local __stmt1 = ____id48.stmt
    if nil63(__form) then
      return ""
    else
      if special_form63(__form) then
        return compile_special(__form, __stmt1)
      else
        local __tr2 = terminator(__stmt1)
        local __e37
        if __stmt1 then
          __e37 = indentation()
        else
          __e37 = ""
        end
        local __ind1 = __e37
        local __e38
        if atom63(__form) then
          __e38 = compile_atom(__form)
        else
          local __e39
          if infix63(hd(__form)) then
            __e39 = compile_infix(__form)
          else
            __e39 = compile_call(__form)
          end
          __e38 = __e39
        end
        local __form1 = __e38
        return __ind1 .. __form1 .. __tr2
      end
    end
  end
  _G.compile = compile
  local function lower_statement(form, tail63)
    local __hoist = {}
    local __e14 = lower(form, __hoist, true, tail63)
    local __e40
    if some63(__hoist) and is63(__e14) then
      __e40 = join({"do"}, __hoist, {__e14})
    else
      local __e41
      if is63(__e14) then
        __e41 = __e14
      else
        local __e42
        if _35(__hoist) > 1 then
          __e42 = join({"do"}, __hoist)
        else
          __e42 = hd(__hoist)
        end
        __e41 = __e42
      end
      __e40 = __e41
    end
    return either(__e40, {"do"})
  end
  local function lower_body(body, tail63)
    return lower_statement(join({"do"}, body), tail63)
  end
  local function literal63(form)
    return atom63(form) or hd(form) == "%array" or hd(form) == "%object"
  end
  local function standalone63(form)
    return not atom63(form) and not infix63(hd(form)) and not literal63(form) and not( "get" == hd(form)) and not( "%statement" == hd(form)) or id_literal63(form)
  end
  local function lower_do(args, hoist, stmt63, tail63)
    local ____x353 = almost(args)
    local ____i47 = 0
    while ____i47 < _35(____x353) do
      local __x354 = ____x353[____i47 + 1]
      local ____y5 = lower(__x354, hoist, stmt63)
      if yes(____y5) then
        local __e15 = ____y5
        if standalone63(__e15) then
          add(hoist, __e15)
        end
      end
      ____i47 = ____i47 + 1
    end
    local __e16 = lower(last(args), hoist, stmt63, tail63)
    if tail63 and can_return63(__e16) then
      return {"return", __e16}
    else
      return __e16
    end
  end
  local function lower_set(args, hoist, stmt63, tail63)
    local ____id49 = args
    local __lh2 = ____id49[1]
    local __rh2 = ____id49[2]
    add(hoist, {"%set", lower(__lh2, hoist), lower(__rh2, hoist)})
    if not( stmt63 and not tail63) then
      return __lh2
    end
  end
  local function lower_if(args, hoist, stmt63, tail63)
    local ____id50 = args
    local __cond2 = ____id50[1]
    local ___then = ____id50[2]
    local ___else = ____id50[3]
    if stmt63 then
      local __e44
      if is63(___else) then
        __e44 = {lower_body({___else}, tail63)}
      end
      return add(hoist, join({"%if", lower(__cond2, hoist), lower_body({___then}, tail63)}, __e44))
    else
      local __e17 = unique("e")
      add(hoist, {"%local", __e17})
      local __e43
      if is63(___else) then
        __e43 = {lower({"%set", __e17, ___else})}
      end
      add(hoist, join({"%if", lower(__cond2, hoist), lower({"%set", __e17, ___then})}, __e43))
      return __e17
    end
  end
  local function lower_short(x, args, hoist)
    local ____id51 = args
    local __a7 = ____id51[1]
    local __b6 = ____id51[2]
    local __hoist1 = {}
    local __b11 = lower(__b6, __hoist1)
    if some63(__hoist1) then
      local __id52 = unique("id")
      local __e45
      if x == "and" then
        __e45 = {"%if", __id52, __b6, __id52}
      else
        __e45 = {"%if", __id52, __id52, __b6}
      end
      return lower({"do", {"%local", __id52, __a7}, __e45}, hoist)
    else
      return {x, lower(__a7, hoist), __b11}
    end
  end
  local function lower_try(args, hoist, tail63)
    return add(hoist, {"%try", lower_body(args, tail63)})
  end
  local function lower_while(args, hoist)
    local ____id53 = args
    local __c5 = ____id53[1]
    local __body27 = cut(____id53, 1)
    local __pre = {}
    local __c6 = lower(__c5, __pre)
    local __e46
    if none63(__pre) then
      __e46 = {"while", __c6, lower_body(__body27)}
    else
      __e46 = {"while", true, join({"do"}, __pre, {{"%if", {"not", __c6}, {"break"}}, lower_body(__body27)})}
    end
    return add(hoist, __e46)
  end
  local function lower_for(args, hoist)
    local ____id54 = args
    local __t4 = ____id54[1]
    local __k21 = ____id54[2]
    local __body28 = cut(____id54, 2)
    return add(hoist, {"%for", lower(__t4, hoist), __k21, lower_body(__body28)})
  end
  local function lower_function(args)
    local ____id55 = args
    local __a8 = ____id55[1]
    local __body29 = cut(____id55, 1)
    return {"%function", __a8, lower_body(__body29, true)}
  end
  local function lower_definition(kind, args, hoist)
    local ____id56 = args
    local __name9 = ____id56[1]
    local __args131 = ____id56[2]
    local __body30 = cut(____id56, 2)
    return add(hoist, {kind, __name9, __args131, lower_body(__body30, true)})
  end
  local function lower_call(form, hoist)
    local __form2 = map(function (x)
      return lower(x, hoist)
    end, form)
    if some63(__form2) then
      return __form2
    end
  end
  local function pairwise63(form)
    return in63(hd(form), {"<", "<=", "=", ">=", ">"})
  end
  local function lower_pairwise(form)
    if pairwise63(form) then
      local __e18 = {}
      local ____id57 = form
      local __x383 = ____id57[1]
      local __args14 = cut(____id57, 1)
      reduce(function (a, b)
        add(__e18, {__x383, a, b})
        return a
      end, __args14)
      return join({"and"}, reverse(__e18))
    else
      return form
    end
  end
  local function lower_infix63(form)
    return infix63(hd(form)) and _35(form) > 3
  end
  local function lower_infix(form, hoist)
    local __form3 = lower_pairwise(form)
    local ____id58 = __form3
    local __x386 = ____id58[1]
    local __args15 = cut(____id58, 1)
    return lower(reduce(function (a, b)
      return {__x386, b, a}
    end, reverse(__args15)), hoist)
  end
  local function lower_special(form, hoist)
    local __e19 = lower_call(form, hoist)
    if __e19 then
      return add(hoist, __e19)
    end
  end
  function lower(form, hoist, stmt63, tail63)
    if atom63(form) then
      return form
    else
      if empty63(form) then
        return {"%array"}
      else
        if nil63(hoist) then
          return lower_statement(form)
        else
          if lower_infix63(form) then
            return lower_infix(form, hoist)
          else
            local ____id59 = form
            local __x389 = ____id59[1]
            local __args16 = cut(____id59, 1)
            if __x389 == "do" then
              return lower_do(__args16, hoist, stmt63, tail63)
            else
              if __x389 == "%call" then
                return lower(__args16, hoist, stmt63, tail63)
              else
                if __x389 == "%set" then
                  return lower_set(__args16, hoist, stmt63, tail63)
                else
                  if __x389 == "%if" then
                    return lower_if(__args16, hoist, stmt63, tail63)
                  else
                    if __x389 == "%try" then
                      return lower_try(__args16, hoist, tail63)
                    else
                      if __x389 == "while" then
                        return lower_while(__args16, hoist)
                      else
                        if __x389 == "%for" then
                          return lower_for(__args16, hoist)
                        else
                          if __x389 == "%function" then
                            return lower_function(__args16)
                          else
                            if __x389 == "%local-function" or __x389 == "%global-function" then
                              return lower_definition(__x389, __args16, hoist)
                            else
                              if in63(__x389, {"and", "or"}) then
                                return lower_short(__x389, __args16, hoist)
                              else
                                if statement63(__x389) then
                                  return lower_special(form, hoist)
                                else
                                  return lower_call(form, hoist)
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
        end
      end
    end
  end
  _G.lower = lower
  function expand(form)
    return lower(macroexpand(form))
  end
  _G.expand = expand
  local load1 = loadstring or load
  local function run(code)
    local f,e = load1(code)
    if f then
      return f()
    else
      error(e .. " in " .. code)
    end
  end
  function _eval(form)
    local __previous = _G.target
    _G.target = "lua"
    local __code = compile(expand({"set", {"get", "_G", {"quote", "%result"}}, form}))
    _G.target = __previous
    run(__code)
    return _G["%result"]
  end
  _G._eval = _eval
  function immediate_call63(x)
    return obj63(x) and obj63(hd(x)) and hd(hd(x)) == "%function"
  end
  _G.immediate_call63 = immediate_call63
  setenv("do", {_stash = true, special = function (...)
    local __forms1 = unstash({...})
    local __s4 = ""
    local ____x395 = __forms1
    local ____i48 = 0
    while ____i48 < _35(____x395) do
      local __x396 = ____x395[____i48 + 1]
      if _G.target == "lua" and immediate_call63(__x396) and "\n" == char(__s4, edge(__s4)) then
        __s4 = clip(__s4, 0, edge(__s4)) .. ";\n"
      end
      __s4 = __s4 .. compile(__x396, {_stash = true, stmt = true})
      if not atom63(__x396) then
        if hd(__x396) == "return" or hd(__x396) == "break" then
          break
        end
      end
      ____i48 = ____i48 + 1
    end
    return __s4
  end, stmt = true, tr = true})
  setenv("%if", {_stash = true, special = function (cond, cons, alt)
    local __cond3 = compile(cond)
    indent_level = indent_level + 1
    local ____x397 = compile(cons, {_stash = true, stmt = true})
    indent_level = indent_level - 1
    local __cons = ____x397
    local __e47
    if alt then
      indent_level = indent_level + 1
      local ____x398 = compile(alt, {_stash = true, stmt = true})
      indent_level = indent_level - 1
      __e47 = ____x398
    end
    local __alt = __e47
    local __ind2 = indentation()
    local __s5 = ""
    if _G.target == "js" then
      __s5 = __s5 .. __ind2 .. "if (" .. __cond3 .. ") {\n" .. __cons .. __ind2 .. "}"
    else
      __s5 = __s5 .. __ind2 .. "if " .. __cond3 .. " then\n" .. __cons
    end
    if __alt and _G.target == "js" then
      __s5 = __s5 .. " else {\n" .. __alt .. __ind2 .. "}"
    else
      if __alt then
        __s5 = __s5 .. __ind2 .. "else\n" .. __alt
      end
    end
    if _G.target == "lua" then
      return __s5 .. __ind2 .. "end\n"
    else
      return __s5 .. "\n"
    end
  end, stmt = true, tr = true})
  setenv("while", {_stash = true, special = function (cond, form)
    local __cond4 = compile(cond)
    indent_level = indent_level + 1
    local ____x399 = compile(form, {_stash = true, stmt = true})
    indent_level = indent_level - 1
    local __body31 = ____x399
    local __ind3 = indentation()
    if _G.target == "js" then
      return __ind3 .. "while (" .. __cond4 .. ") {\n" .. __body31 .. __ind3 .. "}\n"
    else
      return __ind3 .. "while " .. __cond4 .. " do\n" .. __body31 .. __ind3 .. "end\n"
    end
  end, stmt = true, tr = true})
  setenv("%for", {_stash = true, special = function (t, k, form)
    local __t5 = compile(t)
    local __ind4 = indentation()
    indent_level = indent_level + 1
    local ____x400 = compile(form, {_stash = true, stmt = true})
    indent_level = indent_level - 1
    local __body32 = ____x400
    if _G.target == "lua" then
      return __ind4 .. "for " .. k .. " in next, " .. __t5 .. " do\n" .. __body32 .. __ind4 .. "end\n"
    else
      return __ind4 .. "for (" .. k .. " in " .. __t5 .. ") {\n" .. __body32 .. __ind4 .. "}\n"
    end
  end, stmt = true, tr = true})
  setenv("%try", {_stash = true, special = function (form)
    local __e20 = unique("e")
    local __ind5 = indentation()
    indent_level = indent_level + 1
    local ____x401 = compile(form, {_stash = true, stmt = true})
    indent_level = indent_level - 1
    local __body33 = ____x401
    local __hf = {"return", {"%array", false, __e20}}
    indent_level = indent_level + 1
    local ____x404 = compile(__hf, {_stash = true, stmt = true})
    indent_level = indent_level - 1
    local __h = ____x404
    return __ind5 .. "try {\n" .. __body33 .. __ind5 .. "}\n" .. __ind5 .. "catch (" .. __e20 .. ") {\n" .. __h .. __ind5 .. "}\n"
  end, stmt = true, tr = true})
  setenv("%delete", {_stash = true, special = function (place)
    return indentation() .. "delete " .. compile(place)
  end, stmt = true})
  setenv("break", {_stash = true, special = function ()
    return indentation() .. "break"
  end, stmt = true})
  setenv("%function", {_stash = true, special = function (args, body)
    return compile_function(args, body)
  end})
  setenv("%global-function", {_stash = true, special = function (name, args, body)
    if _G.target == "lua" then
      local __x405 = compile_function(args, body, {_stash = true, name = name})
      return indentation() .. __x405
    else
      return compile({"%set", name, {"%function", args, body}}, {_stash = true, stmt = true})
    end
  end, stmt = true, tr = true})
  setenv("%local-function", {_stash = true, special = function (name, args, body)
    if _G.target == "lua" then
      local __x408 = compile_function(args, body, {_stash = true, name = name, prefix = "local"})
      return indentation() .. __x408
    else
      return compile({"%local", name, {"%function", args, body}}, {_stash = true, stmt = true})
    end
  end, stmt = true, tr = true})
  setenv("return", {_stash = true, special = function (x)
    local __e48
    if nil63(x) then
      __e48 = "return"
    else
      __e48 = "return " .. compile(x)
    end
    local __x411 = __e48
    return indentation() .. __x411
  end, stmt = true})
  setenv("new", {_stash = true, special = function (x)
    return "new " .. compile(x)
  end})
  setenv("typeof", {_stash = true, special = function (x)
    return "typeof(" .. compile(x) .. ")"
  end})
  setenv("error", {_stash = true, special = function (x)
    local __e49
    if _G.target == "js" then
      __e49 = "throw " .. compile({"new", {"Error", x}})
    else
      __e49 = "error(" .. compile(x) .. ")"
    end
    local __e21 = __e49
    return indentation() .. __e21
  end, stmt = true})
  setenv("%local", {_stash = true, special = function (name, value)
    local __id60 = compile(name)
    local __value1 = compile(value)
    local __e50
    if is63(value) then
      __e50 = " = " .. __value1
    else
      __e50 = ""
    end
    local __rh3 = __e50
    local __e51
    if _G.target == "js" then
      __e51 = "var "
    else
      __e51 = "local "
    end
    local __keyword = __e51
    local __ind6 = indentation()
    return __ind6 .. __keyword .. __id60 .. __rh3
  end, stmt = true})
  setenv("%set", {_stash = true, special = function (lh, rh)
    local __lh3 = compile(lh)
    local __e52
    if nil63(rh) then
      __e52 = "nil"
    else
      __e52 = rh
    end
    local __rh4 = compile(__e52)
    return indentation() .. __lh3 .. " = " .. __rh4
  end, stmt = true})
  setenv("get", {_stash = true, special = function (t, k)
    local __t11 = compile(t)
    local __k111 = compile(k)
    if _G.target == "lua" and char(__t11, 0) == "{" or infix_operator63(t) then
      __t11 = "(" .. __t11 .. ")"
    end
    if string_literal63(k) and valid_id63(inner(k)) then
      return __t11 .. "." .. inner(k)
    else
      return __t11 .. "[" .. __k111 .. "]"
    end
  end})
  setenv("%array", {_stash = true, special = function (...)
    local __forms2 = unstash({...})
    local __e53
    if _G.target == "lua" then
      __e53 = "{"
    else
      __e53 = "["
    end
    local __open = __e53
    local __e54
    if _G.target == "lua" then
      __e54 = "}"
    else
      __e54 = "]"
    end
    local __close = __e54
    local __s6 = ""
    local __c7 = ""
    local ____o26 = __forms2
    local __k22 = nil
    for __k22 in next, ____o26 do
      local __v25 = ____o26[__k22]
      if number63(__k22) then
        __s6 = __s6 .. __c7 .. compile(__v25)
        __c7 = ", "
      end
    end
    return __open .. __s6 .. __close
  end})
  setenv("%object", {_stash = true, special = function (...)
    local __forms3 = unstash({...})
    local __s7 = "{"
    local __c8 = ""
    local __e55
    if _G.target == "lua" then
      __e55 = " = "
    else
      __e55 = ": "
    end
    local __sep = __e55
    local ____x416 = pair(__forms3)
    local ____i50 = 0
    while ____i50 < _35(____x416) do
      local ____id61 = ____x416[____i50 + 1]
      local __k23 = ____id61[1]
      local __v26 = ____id61[2]
      __s7 = __s7 .. __c8 .. key(compile(__k23)) .. __sep .. compile(__v26)
      __c8 = ", "
      ____i50 = ____i50 + 1
    end
    return __s7 .. "}"
  end})
  setenv("%literal", {_stash = true, special = function (...)
    local __args17 = unstash({...})
    local __s8 = ""
    local ____x418 = __args17
    local ____i51 = 0
    while ____i51 < _35(____x418) do
      local __x419 = ____x418[____i51 + 1]
      if string_literal63(__x419) then
        __s8 = __s8 .. _eval(__x419)
      else
        __s8 = __s8 .. compile(__x419)
      end
      ____i51 = ____i51 + 1
    end
    return __s8
  end})
  setenv("%statement", {_stash = true, special = function (...)
    local __args18 = unstash({...})
    local __s9 = indentation()
    local ____x421 = __args18
    local ____i52 = 0
    while ____i52 < _35(____x421) do
      local __x422 = ____x421[____i52 + 1]
      if string_literal63(__x422) then
        __s9 = __s9 .. _eval(__x422)
      else
        __s9 = __s9 .. compile(__x422)
      end
      ____i52 = ____i52 + 1
    end
    __s9 = __s9 .. "\n"
    return __s9
  end, stmt = true, tr = true})
  setenv("%indentation", {_stash = true, special = function ()
    return indentation()
  end})
  return {run = run, ["eval"] = _eval, expand = expand, compile = compile}
end
return {create = create}
