environment = {{}}
target = "lua"
function nil63(x)
  return(x == nil)
end
function is63(x)
  return(not nil63(x))
end
function no(x)
  return(nil63(x) or x == false)
end
function yes(x)
  return(not no(x))
end
function _35(x)
  return(#x)
end
function none63(x)
  return(_35(x) == 0)
end
function some63(x)
  return(_35(x) > 0)
end
function one63(x)
  return(_35(x) == 1)
end
function two63(x)
  return(_35(x) == 2)
end
function hd(l)
  return(l[1])
end
function string63(x)
  return(type(x) == "string")
end
function number63(x)
  return(type(x) == "number")
end
function boolean63(x)
  return(type(x) == "boolean")
end
function function63(x)
  return(type(x) == "function")
end
function obj63(x)
  return(is63(x) and type(x) == "table")
end
function atom63(x)
  return(nil63(x) or string63(x) or number63(x) or boolean63(x))
end
nan = 0 / 0
inf = 1 / 0
function nan63(n)
  return(not( n == n))
end
function inf63(n)
  return(n == inf or n == -inf)
end
function clip(s, from, upto)
  return(string.sub(s, from + 1, upto))
end
function has63(l, k)
  return(is63(l[k]))
end
function cut(x, from, upto, exclude)
  local l = {}
  local j = 0
  local _e
  if nil63(from) or from < 0 then
    _e = 0
  else
    _e = from
  end
  local i = _e
  local n = _35(x)
  local _e1
  if nil63(upto) or upto > n then
    _e1 = n
  else
    _e1 = upto
  end
  local _upto = _e1
  while i < _upto do
    l[j + 1] = x[i + 1]
    i = i + 1
    j = j + 1
  end
  if exclude then
    local _o = x
    local k = nil
    for k in next, _o do
      local v = _o[k]
      if not( number63(k) or has63(exclude, k)) then
        l[k] = v
      end
    end
  else
    local _o1 = x
    local k = nil
    for k in next, _o1 do
      local v = _o1[k]
      if not number63(k) then
        l[k] = v
      end
    end
  end
  return(l)
end
function keys(x)
  local t = {}
  local _o = x
  local k = nil
  for k in next, _o do
    local v = _o[k]
    if not number63(k) then
      t[k] = v
    end
  end
  return(t)
end
function edge(x)
  return(_35(x) - 1)
end
function inner(x)
  return(clip(x, 1, edge(x)))
end
function tl(l)
  return(cut(l, 1))
end
function char(s, n)
  return(clip(s, n, n + 1))
end
function code(s, n)
  local _e
  if n then
    _e = n + 1
  end
  return(string.byte(s, _e))
end
function string_literal63(x)
  return(string63(x) and char(x, 0) == "\"")
end
function id_literal63(x)
  return(string63(x) and char(x, 0) == "|")
end
function add(l, x)
  return(table.insert(l, x))
end
function drop(l)
  return(table.remove(l))
end
function last(l)
  return(l[edge(l) + 1])
end
function almost(l)
  return(cut(l, 0, edge(l)))
end
function reverse(l)
  local l1 = keys(l)
  local i = edge(l)
  while i >= 0 do
    add(l1, l[i + 1])
    i = i - 1
  end
  return(l1)
end
function reduce(f, x)
  if none63(x) then
    return(nil)
  else
    if one63(x) then
      return(hd(x))
    else
      return(f(hd(x), reduce(f, tl(x))))
    end
  end
end
function join(...)
  local ls = unstash({...})
  local r = {}
  local _x1 = ls
  local _i = 0
  while _i < _35(_x1) do
    local l = _x1[_i + 1]
    if l then
      local n = _35(r)
      local _o = l
      local k = nil
      for k in next, _o do
        local v = _o[k]
        if number63(k) then
          k = k + n
        end
        r[k] = v
      end
    end
    _i = _i + 1
  end
  return(r)
end
function find(f, t)
  local _o = t
  local _i = nil
  for _i in next, _o do
    local x = _o[_i]
    local y = f(x)
    if y then
      return(y)
    end
  end
end
function first(f, l)
  local _x = l
  local _i = 0
  while _i < _35(_x) do
    local x = _x[_i + 1]
    local y = f(x)
    if y then
      return(y)
    end
    _i = _i + 1
  end
end
function in63(x, t)
  return(find(function (y)
    return(x == y)
  end, t))
end
function pair(l)
  local l1 = {}
  local i = 0
  while i < _35(l) do
    add(l1, {l[i + 1], l[i + 1 + 1]})
    i = i + 1
    i = i + 1
  end
  return(l1)
end
function sort(l, f)
  table.sort(l, f)
  return(l)
end
function map(f, x)
  local t = {}
  local _x = x
  local _i = 0
  while _i < _35(_x) do
    local v = _x[_i + 1]
    local y = f(v)
    if is63(y) then
      add(t, y)
    end
    _i = _i + 1
  end
  local _o = x
  local k = nil
  for k in next, _o do
    local v = _o[k]
    if not number63(k) then
      local y = f(v)
      if is63(y) then
        t[k] = y
      end
    end
  end
  return(t)
end
function keep(f, x)
  return(map(function (v)
    if yes(f(v)) then
      return(v)
    end
  end, x))
end
function keys63(t)
  local _o = t
  local k = nil
  for k in next, _o do
    local v = _o[k]
    if not number63(k) then
      return(true)
    end
  end
  return(false)
end
function empty63(t)
  local _o = t
  local _i = nil
  for _i in next, _o do
    local x = _o[_i]
    return(false)
  end
  return(true)
end
function stash(args)
  if keys63(args) then
    local p = {}
    local _o = args
    local k = nil
    for k in next, _o do
      local v = _o[k]
      if not number63(k) then
        p[k] = v
      end
    end
    p._stash = true
    add(args, p)
  end
  return(args)
end
function unstash(args)
  if none63(args) then
    return({})
  else
    local l = last(args)
    if obj63(l) and l._stash then
      local args1 = almost(args)
      local _o = l
      local k = nil
      for k in next, _o do
        local v = _o[k]
        if not( k == "_stash") then
          args1[k] = v
        end
      end
      return(args1)
    else
      return(args)
    end
  end
end
function destash33(l, args1)
  if obj63(l) and l._stash then
    local _o = l
    local k = nil
    for k in next, _o do
      local v = _o[k]
      if not( k == "_stash") then
        args1[k] = v
      end
    end
  else
    return(l)
  end
end
function search(s, pattern, start)
  local _e
  if start then
    _e = start + 1
  end
  local _start = _e
  local i = string.find(s, pattern, _start, true)
  return(i and i - 1)
end
function split(s, sep)
  if s == "" or sep == "" then
    return({})
  else
    local l = {}
    local n = _35(sep)
    while true do
      local i = search(s, sep)
      if nil63(i) then
        break
      else
        add(l, clip(s, 0, i))
        s = clip(s, i + n)
      end
    end
    add(l, s)
    return(l)
  end
end
function cat(...)
  local xs = unstash({...})
  return(reduce(function (a, b)
    return(a .. b)
  end, xs) or "")
end
function _43(...)
  local xs = unstash({...})
  return(reduce(function (a, b)
    return(a + b)
  end, xs) or 0)
end
function _(...)
  local xs = unstash({...})
  return(reduce(function (b, a)
    return(a - b)
  end, reverse(xs)) or 0)
end
function _42(...)
  local xs = unstash({...})
  return(reduce(function (a, b)
    return(a * b)
  end, xs) or 1)
end
function _47(...)
  local xs = unstash({...})
  return(reduce(function (b, a)
    return(a / b)
  end, reverse(xs)) or 1)
end
function _37(...)
  local xs = unstash({...})
  return(reduce(function (b, a)
    return(a % b)
  end, reverse(xs)) or 0)
end
function _62(a, b)
  return(a > b)
end
function _60(a, b)
  return(a < b)
end
function _61(a, b)
  return(a == b)
end
function _6261(a, b)
  return(a >= b)
end
function _6061(a, b)
  return(a <= b)
end
function number(s)
  return(tonumber(s))
end
function number_code63(n)
  return(n > 47 and n < 58)
end
function numeric63(s)
  local n = _35(s)
  local i = 0
  while i < n do
    if not number_code63(code(s, i)) then
      return(false)
    end
    i = i + 1
  end
  return(true)
end
function escape(s)
  local s1 = "\""
  local i = 0
  while i < _35(s) do
    local c = char(s, i)
    local _e
    if c == "\n" then
      _e = "\\n"
    else
      local _e1
      if c == "\"" then
        _e1 = "\\\""
      else
        local _e2
        if c == "\\" then
          _e2 = "\\\\"
        else
          _e2 = c
        end
        _e1 = _e2
      end
      _e = _e1
    end
    local c1 = _e
    s1 = s1 .. c1
    i = i + 1
  end
  return(s1 .. "\"")
end
function str(x, stack)
  if nil63(x) then
    return("nil")
  else
    if nan63(x) then
      return("nan")
    else
      if x == inf then
        return("inf")
      else
        if x == -inf then
          return("-inf")
        else
          if boolean63(x) then
            if x then
              return("true")
            else
              return("false")
            end
          else
            if string63(x) then
              return(escape(x))
            else
              if atom63(x) then
                return(tostring(x))
              else
                if function63(x) then
                  return("function")
                else
                  if stack and in63(x, stack) then
                    return("circular")
                  else
                    if not( type(x) == "table") then
                      return(escape(tostring(x)))
                    else
                      local s = "("
                      local sp = ""
                      local xs = {}
                      local ks = {}
                      local l = stack or {}
                      add(l, x)
                      local _o = x
                      local k = nil
                      for k in next, _o do
                        local v = _o[k]
                        if number63(k) then
                          xs[k] = str(v, l)
                        else
                          add(ks, k .. ":")
                          add(ks, str(v, l))
                        end
                      end
                      drop(l)
                      local _o1 = join(xs, ks)
                      local _i1 = nil
                      for _i1 in next, _o1 do
                        local v = _o1[_i1]
                        s = s .. sp .. v
                        sp = " "
                      end
                      return(s .. ")")
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
local values = unpack or table.unpack
function apply(f, args)
  local _args = stash(args)
  return(f(values(_args)))
end
function call(f)
  return(f())
end
function toplevel63()
  return(one63(environment))
end
function setenv(k, ...)
  local _rest = unstash({...})
  local _k = destash33(k, _rest)
  local _id = _rest
  local _keys = cut(_id, 0)
  if string63(_k) then
    local _e
    if _keys.toplevel then
      _e = hd(environment)
    else
      _e = last(environment)
    end
    local frame = _e
    local entry = frame[_k] or {}
    local _o = _keys
    local _k1 = nil
    for _k1 in next, _o do
      local v = _o[_k1]
      entry[_k1] = v
    end
    frame[_k] = entry
    return(frame[_k])
  end
end
local math = math
abs = math.abs
acos = math.acos
asin = math.asin
atan = math.atan
atan2 = math.atan2
ceil = math.ceil
cos = math.cos
floor = math.floor
log = math.log
log10 = math.log10
max = math.max
min = math.min
pow = math.pow
random = math.random
sin = math.sin
sinh = math.sinh
sqrt = math.sqrt
tan = math.tan
tanh = math.tanh
trunc = math.floor
setenv("quote", {_stash = true, macro = function (form)
  return(quoted(form))
end})
setenv("quasiquote", {_stash = true, macro = function (form)
  return(quasiexpand(form, 1))
end})
setenv("set", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"do"}, map(function (_x)
    local _id = _x
    local lh = _id[1]
    local rh = _id[2]
    return({"%set", lh, rh})
  end, pair(args))))
end})
setenv("get", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%get"}, args))
end})
setenv("at", {_stash = true, macro = function (l, i)
  if target == "lua" and number63(i) then
    i = i + 1
  else
    if target == "lua" then
      i = {"+", i, 1}
    end
  end
  return({"get", l, i})
end})
setenv("wipe", {_stash = true, macro = function (place)
  if target == "lua" then
    return({"set", place, "nil"})
  else
    return({"%delete", place})
  end
end})
setenv("list", {_stash = true, macro = function (...)
  local body = unstash({...})
  local x = unique("x")
  local l = {}
  local forms = {}
  local ks = {}
  local _o = body
  local k = nil
  for k in next, _o do
    local v = _o[k]
    if string63(k) then
      add(ks, k)
    else
      l[k] = v
    end
  end
  local _x1 = sort(ks)
  local _i1 = 0
  while _i1 < _35(_x1) do
    local k = _x1[_i1 + 1]
    local v = body[k]
    add(forms, {"set", {"get", x, {"quote", k}}, v})
    _i1 = _i1 + 1
  end
  if some63(forms) then
    return(join({"let", x, join({"%array"}, l)}, forms, {x}))
  else
    return(join({"%array"}, l))
  end
end})
setenv("if", {_stash = true, macro = function (...)
  local branches = unstash({...})
  return(hd(expand_if(branches)))
end})
setenv("case", {_stash = true, macro = function (expr, ...)
  local _rest = unstash({...})
  local _expr = destash33(expr, _rest)
  local _id = _rest
  local clauses = cut(_id, 0)
  local x = unique("x")
  local eq = function (_)
    return({"=", {"quote", _}, x})
  end
  local cl = function (_x)
    local __id = _x
    local a = __id[1]
    local b = __id[2]
    if nil63(b) then
      return({a})
    else
      if string63(a) or number63(a) then
        return({eq(a), b})
      else
        if one63(a) then
          return({eq(hd(a)), b})
        else
          if _35(a) > 1 then
            return({join({"or"}, map(eq, a)), b})
          end
        end
      end
    end
  end
  return({"let", x, _expr, join({"if"}, apply(join, map(cl, pair(clauses))))})
end})
setenv("when", {_stash = true, macro = function (cond, ...)
  local _rest = unstash({...})
  local _cond = destash33(cond, _rest)
  local _id = _rest
  local body = cut(_id, 0)
  return({"if", _cond, join({"do"}, body)})
end})
setenv("unless", {_stash = true, macro = function (cond, ...)
  local _rest = unstash({...})
  local _cond = destash33(cond, _rest)
  local _id = _rest
  local body = cut(_id, 0)
  return({"if", {"not", _cond}, join({"do"}, body)})
end})
setenv("obj", {_stash = true, macro = function (...)
  local body = unstash({...})
  return(join({"%object"}, mapo(function (x)
    return(x)
  end, body)))
end})
setenv("let", {_stash = true, macro = function (bs, ...)
  local _rest = unstash({...})
  local _bs = destash33(bs, _rest)
  local _id = _rest
  local body = cut(_id, 0)
  if atom63(_bs) then
    return(join({"let", {_bs, hd(body)}}, tl(body)))
  else
    if none63(_bs) then
      return(join({"do"}, body))
    else
      local _id1 = _bs
      local lh = _id1[1]
      local rh = _id1[2]
      local bs2 = cut(_id1, 2)
      local _id2 = bind(lh, rh)
      local id = _id2[1]
      local val = _id2[2]
      local bs1 = cut(_id2, 2)
      local renames = {}
      if bound63(id) or toplevel63() then
        local id1 = unique(id)
        renames = {id, id1}
        id = id1
      else
        setenv(id, {_stash = true, variable = true})
      end
      return({"do", {"%local", id, val}, {"let-symbol", renames, join({"let", join(bs1, bs2)}, body)}})
    end
  end
end})
setenv("with", {_stash = true, macro = function (x, v, ...)
  local _rest = unstash({...})
  local _x1 = destash33(x, _rest)
  local _v = destash33(v, _rest)
  local _id = _rest
  local body = cut(_id, 0)
  return(join({"let", {_x1, _v}}, body, {_x1}))
end})
setenv("let-when", {_stash = true, macro = function (x, v, ...)
  local _rest = unstash({...})
  local _x1 = destash33(x, _rest)
  local _v = destash33(v, _rest)
  local _id = _rest
  local body = cut(_id, 0)
  local y = unique("y")
  return({"let", y, _v, {"when", {"yes", y}, join({"let", {_x1, y}}, body)}})
end})
setenv("define-macro", {_stash = true, macro = function (name, args, ...)
  local _rest = unstash({...})
  local _name = destash33(name, _rest)
  local _args = destash33(args, _rest)
  local _id = _rest
  local body = cut(_id, 0)
  local _x1 = {"setenv", {"quote", _name}}
  _x1.macro = join({"fn", _args}, body)
  local form = _x1
  eval(form)
  return(form)
end})
setenv("define-special", {_stash = true, macro = function (name, args, ...)
  local _rest = unstash({...})
  local _name = destash33(name, _rest)
  local _args = destash33(args, _rest)
  local _id = _rest
  local body = cut(_id, 0)
  local _x1 = {"setenv", {"quote", _name}}
  _x1.special = join({"fn", _args}, body)
  local form = join(_x1, keys(body))
  eval(form)
  return(form)
end})
setenv("define-symbol", {_stash = true, macro = function (name, expansion)
  setenv(name, {_stash = true, symbol = expansion})
  local _x = {"setenv", {"quote", name}}
  _x.symbol = {"quote", expansion}
  return(_x)
end})
setenv("define-reader", {_stash = true, macro = function (_x, ...)
  local _id = _x
  local char = _id[1]
  local s = _id[2]
  local _rest = unstash({...})
  local __x = destash33(_x, _rest)
  local _id1 = _rest
  local body = cut(_id1, 0)
  return({"set", {"get", "read-table", char}, join({"fn", {s}}, body)})
end})
setenv("define", {_stash = true, macro = function (name, x, ...)
  local _rest = unstash({...})
  local _name = destash33(name, _rest)
  local _x1 = destash33(x, _rest)
  local _id = _rest
  local body = cut(_id, 0)
  setenv(_name, {_stash = true, variable = true})
  if some63(body) then
    return(join({"%local-function", _name}, bind42(_x1, body)))
  else
    return({"%local", _name, _x1})
  end
end})
setenv("define-global", {_stash = true, macro = function (name, x, ...)
  local _rest = unstash({...})
  local _name = destash33(name, _rest)
  local _x1 = destash33(x, _rest)
  local _id = _rest
  local body = cut(_id, 0)
  setenv(_name, {_stash = true, toplevel = true, variable = true})
  if some63(body) then
    return(join({"%global-function", _name}, bind42(_x1, body)))
  else
    return({"set", _name, _x1})
  end
end})
setenv("with-frame", {_stash = true, macro = function (...)
  local body = unstash({...})
  local x = unique("x")
  return({"do", {"add", "environment", {"obj"}}, {"with", x, join({"do"}, body), {"drop", "environment"}}})
end})
setenv("with-bindings", {_stash = true, macro = function (_x, ...)
  local _id = _x
  local names = _id[1]
  local id = _id[2]
  local _rest = unstash({...})
  local __x = destash33(_x, _rest)
  local _id1 = _rest
  local body = cut(_id1, 0)
  local x = unique("x")
  local _x3 = {"setenv", x}
  _x3.variable = true
  local _x4 = {"setenv", {"quote", "%scope"}}
  _x4.args = names
  _x4.id = id
  _x4.unique = {"obj"}
  _x4.variable = true
  return(join({"with-frame", {"each", x, names, _x3}, _x4}, body))
end})
setenv("let-macro", {_stash = true, macro = function (definitions, ...)
  local _rest = unstash({...})
  local _definitions = destash33(definitions, _rest)
  local _id = _rest
  local body = cut(_id, 0)
  add(environment, {})
  map(function (m)
    return(macroexpand(join({"define-macro"}, m)))
  end, _definitions)
  local _x1 = join({"do"}, macroexpand(body))
  drop(environment)
  return(_x1)
end})
setenv("let-symbol", {_stash = true, macro = function (expansions, ...)
  local _rest = unstash({...})
  local _expansions = destash33(expansions, _rest)
  local _id = _rest
  local body = cut(_id, 0)
  add(environment, {})
  map(function (_x)
    local __id = _x
    local name = __id[1]
    local exp = __id[2]
    return(macroexpand({"define-symbol", name, exp}))
  end, pair(_expansions))
  local _x1 = join({"do"}, macroexpand(body))
  drop(environment)
  return(_x1)
end})
setenv("let-unique", {_stash = true, macro = function (names, ...)
  local _rest = unstash({...})
  local _names = destash33(names, _rest)
  local _id = _rest
  local body = cut(_id, 0)
  local bs = map(function (n)
    return({n, {"unique", {"quote", n}}})
  end, _names)
  return(join({"let", apply(join, bs)}, body))
end})
setenv("fn", {_stash = true, macro = function (args, ...)
  local _rest = unstash({...})
  local _args = destash33(args, _rest)
  local _id = _rest
  local body = cut(_id, 0)
  return(join({"%function"}, bind42(_args, body)))
end})
setenv("apply", {_stash = true, macro = function (f, ...)
  local _rest = unstash({...})
  local _f = destash33(f, _rest)
  local _id = _rest
  local args = cut(_id, 0)
  if _35(args) > 1 then
    return({{"do", "apply"}, _f, {"join", join({"list"}, almost(args)), last(args)}})
  else
    return(join({{"do", "apply"}, _f}, args))
  end
end})
setenv("guard", {_stash = true, macro = function (expr)
  if target == "js" then
    return({{"fn", join(), {"%try", {"list", true, expr}}}})
  else
    local x = unique("x")
    local msg = unique("msg")
    local trace = unique("trace")
    local _x25 = {"obj"}
    _x25.message = msg
    _x25.stack = trace
    return({"let", {x, "nil", msg, "nil", trace, "nil"}, {"if", {"xpcall", {"fn", join(), {"set", x, expr}}, {"fn", {"m"}, {"set", trace, {{"get", "debug", {"quote", "traceback"}}}, msg, {"if", {"string?", "m"}, {"clip", "m", {"+", {"search", "m", "\": \""}, 2}}, {"nil?", "m"}, "\"\"", {"str", "m"}}}}}, {"list", true, x}, {"list", false, _x25}}})
  end
end})
setenv("each", {_stash = true, macro = function (x, t, ...)
  local _rest = unstash({...})
  local _x1 = destash33(x, _rest)
  local _t = destash33(t, _rest)
  local _id = _rest
  local body = cut(_id, 0)
  local o = unique("o")
  local n = unique("n")
  local i = unique("i")
  local _e
  if atom63(_x1) then
    _e = {i, _x1}
  else
    local _e1
    if _35(_x1) > 1 then
      _e1 = _x1
    else
      _e1 = {i, hd(_x1)}
    end
    _e = _e1
  end
  local _id1 = _e
  local k = _id1[1]
  local v = _id1[2]
  local _e2
  if target == "lua" then
    _e2 = body
  else
    _e2 = {join({"let", k, {"if", {"numeric?", k}, {"parseInt", k}, k}}, body)}
  end
  return({"let", {o, _t, k, "nil"}, {"%for", o, k, join({"let", {v, {"get", o, k}}}, _e2)}})
end})
setenv("for", {_stash = true, macro = function (i, to, ...)
  local _rest = unstash({...})
  local _i = destash33(i, _rest)
  local _to = destash33(to, _rest)
  local _id = _rest
  local body = cut(_id, 0)
  return({"let", _i, 0, join({"while", {"<", _i, _to}}, body, {{"inc", _i}})})
end})
setenv("step", {_stash = true, macro = function (v, t, ...)
  local _rest = unstash({...})
  local _v = destash33(v, _rest)
  local _t = destash33(t, _rest)
  local _id = _rest
  local body = cut(_id, 0)
  local x = unique("x")
  local i = unique("i")
  return({"let", {x, _t}, {"for", i, {"#", x}, join({"let", {_v, {"at", x, i}}}, body)}})
end})
setenv("set-of", {_stash = true, macro = function (...)
  local xs = unstash({...})
  local l = {}
  local _o = xs
  local _i = nil
  for _i in next, _o do
    local x = _o[_i]
    l[x] = true
  end
  return(join({"obj"}, l))
end})
setenv("language", {_stash = true, macro = function ()
  return({"quote", target})
end})
setenv("target", {_stash = true, macro = function (...)
  local clauses = unstash({...})
  return(clauses[target])
end})
setenv("join!", {_stash = true, macro = function (a, ...)
  local _rest = unstash({...})
  local _a = destash33(a, _rest)
  local _id = _rest
  local bs = cut(_id, 0)
  return({"set", _a, join({"join", _a}, bs)})
end})
setenv("cat!", {_stash = true, macro = function (a, ...)
  local _rest = unstash({...})
  local _a = destash33(a, _rest)
  local _id = _rest
  local bs = cut(_id, 0)
  return({"set", _a, join({"cat", _a}, bs)})
end})
setenv("inc", {_stash = true, macro = function (n, by)
  local _e
  if nil63(by) then
    _e = 1
  else
    _e = by
  end
  return({"set", n, {"+", n, _e}})
end})
setenv("dec", {_stash = true, macro = function (n, by)
  local _e
  if nil63(by) then
    _e = 1
  else
    _e = by
  end
  return({"set", n, {"-", n, _e}})
end})
setenv("with-indent", {_stash = true, macro = function (form)
  local x = unique("x")
  return({"do", {"inc", "indent-level"}, {"with", x, form, {"dec", "indent-level"}}})
end})
setenv("export", {_stash = true, macro = function (...)
  local names = unstash({...})
  if target == "js" then
    return(join({"do"}, map(function (k)
      return({"set", {"get", "exports", {"quote", k}}, k})
    end, names)))
  else
    local x = {}
    local _o = names
    local _i = nil
    for _i in next, _o do
      local k = _o[_i]
      x[k] = k
    end
    return({"return", join({"obj"}, x)})
  end
end})
setenv("when-compiling", {_stash = true, macro = function (...)
  local body = unstash({...})
  return(eval(join({"do"}, body)))
end})
setenv("do", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%do"}, args))
end})
setenv("while", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%while"}, args))
end})
setenv("break", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%break"}, args))
end})
setenv("return", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%return"}, args))
end})
setenv("new", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%new"}, args))
end})
setenv("typeof", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%type"}, args))
end})
setenv("error", {_stash = true, macro = function (msg, ...)
  local _rest = unstash({...})
  local _msg = destash33(msg, _rest)
  local _id = _rest
  local args = cut(_id, 0)
  if none63(args) then
    return({"%error", _msg})
  else
    return({"%error", {"cat", _msg, "\" \"", {"str", join({"list"}, args)}}})
  end
end})
setenv("not", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%not"}, args))
end})
setenv("*", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%mul"}, args))
end})
setenv("/", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%div"}, args))
end})
setenv("%", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%mod"}, args))
end})
setenv("+", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%add"}, args))
end})
setenv("-", {_stash = true, macro = function (...)
  local args = unstash({...})
  if _35(args) < 2 then
    return(join({"%neg"}, args))
  else
    return(join({"%sub"}, args))
  end
end})
setenv("cat", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%cat"}, args))
end})
setenv("<", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%lt"}, args))
end})
setenv(">", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%gt"}, args))
end})
setenv("<=", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%le"}, args))
end})
setenv(">=", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%ge"}, args))
end})
setenv("=", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%eq"}, args))
end})
setenv("and", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%and"}, args))
end})
setenv("or", {_stash = true, macro = function (...)
  local args = unstash({...})
  return(join({"%or"}, args))
end})
local reader = require("reader")
local compiler = require("compiler")
local system = require("system")
local function eval_print(form)
  local _x = nil
  local _msg = nil
  local _trace = nil
  local _e
  if xpcall(function ()
    _x = compiler.eval(form)
    return(_x)
  end, function (m)
    _trace = debug.traceback()
    local _e
    if string63(m) then
      _e = clip(m, search(m, ": ") + 2)
    else
      local _e1
      if nil63(m) then
        _e1 = ""
      else
        _e1 = str(m)
      end
      _e = _e1
    end
    _msg = _e
    return(_msg)
  end) then
    _e = {true, _x}
  else
    _e = {false, {message = _msg, stack = _trace}}
  end
  local _id = _e
  local ok = _id[1]
  local v = _id[2]
  if not ok then
    return(print("error: " .. (v.message or "") .. "\n" .. v.stack))
  else
    if is63(v) then
      return(print(str(v)))
    end
  end
end
local function rep(s)
  return(eval_print(reader["read-string"](s)))
end
local function repl()
  local buf = ""
  local function rep1(s)
    buf = buf .. s
    local more = {}
    local form = reader["read-string"](buf, more)
    if not( form == more) then
      eval_print(form)
      buf = ""
      return(system.write("> "))
    end
  end
  system.write("> ")
  while true do
    local s = io.read()
    if s then
      rep1(s .. "\n")
    else
      break
    end
  end
end
function compile_file(path)
  local s = reader.stream(system["read-file"](path))
  local body = reader["read-all"](s)
  local form = compiler.expand(join({"do"}, body))
  return(compiler.compile(form, {_stash = true, stmt = true}))
end
function load(path)
  return(compiler.run(compile_file(path)))
end
local function run_file(path)
  return(compiler.run(system["read-file"](path)))
end
local function script_file63(path)
  return(not( "-" == char(path, 0) or ".js" == clip(path, _35(path) - 3) or ".lua" == clip(path, _35(path) - 4)))
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
  return(print(" -e <expr>\tExpression to evaluate"))
end
local function main()
  local arg = hd(system.argv)
  if arg and script_file63(arg) then
    return(load(arg))
  else
    if arg == "-h" or arg == "--help" then
      return(usage())
    else
      local pre = {}
      local input = nil
      local output = nil
      local target1 = nil
      local expr = nil
      local argv = system.argv
      local i = 0
      while i < _35(argv) do
        local a = argv[i + 1]
        if a == "-c" or a == "-o" or a == "-t" or a == "-e" then
          if i == edge(argv) then
            print("missing argument for " .. a)
          else
            i = i + 1
            local val = argv[i + 1]
            if a == "-c" then
              input = val
            else
              if a == "-o" then
                output = val
              else
                if a == "-t" then
                  target1 = val
                else
                  if a == "-e" then
                    expr = val
                  end
                end
              end
            end
          end
        else
          if not( "-" == char(a, 0)) then
            add(pre, a)
          end
        end
        i = i + 1
      end
      local _x = pre
      local _i = 0
      while _i < _35(_x) do
        local file = _x[_i + 1]
        run_file(file)
        _i = _i + 1
      end
      if nil63(input) then
        if expr then
          return(rep(expr))
        else
          return(repl())
        end
      else
        if target1 then
          target = target1
        end
        local code = compile_file(input)
        if nil63(output) or output == "-" then
          return(print(code))
        else
          return(system["write-file"](output, code))
        end
      end
    end
  end
end
main()
