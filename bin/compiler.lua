local reader = require("reader")
local function getenv(k, p)
  if string63(k) then
    local i = edge(environment)
    while i >= 0 do
      local b = environment[i + 1][k]
      if is63(b) then
        local _e
        if p then
          _e = b[p]
        else
          _e = b
        end
        return(_e)
      else
        i = i - 1
      end
    end
  end
end
local function macro_function(k)
  return(getenv(k, "macro"))
end
local function macro63(k)
  return(is63(macro_function(k)))
end
local function special63(k)
  return(is63(getenv(k, "special")))
end
local function special_form63(form)
  return(not atom63(form) and special63(hd(form)))
end
local function statement63(k)
  return(special63(k) and getenv(k, "stmt"))
end
local function symbol_expansion(k)
  return(getenv(k, "symbol"))
end
local function symbol63(k)
  return(is63(symbol_expansion(k)))
end
local function variable63(k)
  local b = first(function (frame)
    return(frame[k])
  end, reverse(environment))
  return(not atom63(b) and is63(b.variable))
end
function bound63(x)
  return(macro63(x) or special63(x) or symbol63(x) or variable63(x))
end
function quoted(form)
  if string63(form) then
    return(escape(form))
  else
    if atom63(form) then
      return(form)
    else
      return(join({"list"}, map(quoted, form)))
    end
  end
end
local function literal(s)
  if string_literal63(s) then
    return(s)
  else
    return(quoted(s))
  end
end
local function unique33(x, names)
  if names[x] then
    local i = names[x]
    names[x] = names[x] + 1
    return(unique33(x .. i, names))
  else
    names[x] = 1
    return("_" .. x)
  end
end
local _names1 = {}
function unique(x, names)
  local ns = names or getenv("%scope", "unique") or _names1
  return(unique33(x, ns))
end
local function stash42(args)
  if keys63(args) then
    local l = {"%object", "\"_stash\"", true}
    local _o = args
    local k = nil
    for k in next, _o do
      local v = _o[k]
      if not number63(k) then
        add(l, literal(k))
        add(l, v)
      end
    end
    return(join(args, {l}))
  else
    return(args)
  end
end
local function bias(k)
  if number63(k) and not( target == "lua") then
    if target == "js" then
      k = k - 1
    else
      k = k + 1
    end
  end
  return(k)
end
local function map42(f, x)
  local ks = {}
  local from = inf
  local upto = -inf
  local _o = x
  local k = nil
  for k in next, _o do
    local v = _o[k]
    if string63(k) then
      add(ks, k)
    else
      from = min(from, k)
      upto = max(upto, k)
    end
  end
  local i = from
  while i <= upto do
    local v = x[i]
    f(i, v)
    i = i + 1
  end
  local _x = sort(ks)
  local _i1 = 0
  while _i1 < _35(_x) do
    local k = _x[_i1 + 1]
    local v = x[k]
    f(k, v)
    _i1 = _i1 + 1
  end
end
function bind(lh, rh)
  if atom63(lh) then
    return({lh, rh})
  else
    local id = unique("id")
    local bs = {id, rh}
    map42(function (k, v)
      local _e
      if k == "rest" then
        _e = {"cut", id, _35(lh)}
      else
        _e = {"get", id, {"quote", bias(k)}}
      end
      local x = _e
      if is63(k) then
        local _e1
        if v == true then
          _e1 = k
        else
          _e1 = v
        end
        local _k = _e1
        bs = join(bs, bind(_k, x))
        return(bs)
      end
    end, lh)
    return(bs)
  end
end
setenv("arguments%", {_stash = true, macro = function (from)
  return({{"get", {"get", {"get", "Array", {"quote", "prototype"}}, {"quote", "slice"}}, {"quote", "call"}}, "arguments", from})
end})
function bind42(args, body)
  local args1 = {}
  local function rest()
    if target == "js" then
      return({"unstash", {"arguments%", _35(args1)}})
    else
      add(args1, "|...|")
      return({"unstash", {"list", "|...|"}})
    end
  end
  if atom63(args) then
    return({args1, join({"let", {args, rest()}}, body)})
  else
    local bs = {}
    local names = {}
    local r = "_rest"
    local _o = args
    local k = nil
    for k in next, _o do
      local v = _o[k]
      if number63(k) then
        if atom63(v) then
          add(args1, v)
        else
          local x = unique("x", names)
          add(args1, x)
          bs = join(bs, {v, x})
        end
      end
    end
    if keys63(args) then
      bs = join(bs, {r, rest()})
      local _e
      if target == "lua" then
        _e = edge(args1)
      else
        _e = _35(args1)
      end
      local n = _e
      local i = 0
      while i < n do
        local v = args1[i + 1]
        bs = join(bs, {v, {"destash!", v, r}})
        i = i + 1
      end
      bs = join(bs, {keys(args), r})
    end
    return({args1, join({"let", bs}, body)})
  end
end
local function quoting63(depth)
  return(number63(depth))
end
local function quasiquoting63(depth)
  return(quoting63(depth) and depth > 0)
end
local function can_unquote63(depth)
  return(quoting63(depth) and depth == 1)
end
local function quasisplice63(x, depth)
  return(can_unquote63(depth) and not atom63(x) and hd(x) == "unquote-splicing")
end
local function expand_local(_x)
  local _id = _x
  local x = _id[1]
  local name = _id[2]
  local value = _id[3]
  return({"%local", name, macroexpand(value)})
end
local function expand_function(_x)
  local _id = _x
  local x = _id[1]
  local args = _id[2]
  local body = cut(_id, 2)
  add(environment, {})
  local _o = args
  local _i = nil
  for _i in next, _o do
    local __x = _o[_i]
    setenv(__x, {_stash = true, variable = true})
  end
  setenv("%scope", {_stash = true, args = args, id = "#<function>", unique = {}, variable = true})
  local _x1 = join({"%function", args}, macroexpand(body))
  drop(environment)
  return(_x1)
end
local function expand_definition(_x)
  local _id = _x
  local x = _id[1]
  local name = _id[2]
  local args = _id[3]
  local body = cut(_id, 3)
  add(environment, {})
  local _o = args
  local _i = nil
  for _i in next, _o do
    local __x = _o[_i]
    setenv(__x, {_stash = true, variable = true})
  end
  setenv("%scope", {_stash = true, args = args, id = name, unique = {}, variable = true})
  local _x1 = join({x, name, args}, macroexpand(body))
  drop(environment)
  return(_x1)
end
local function expand_form(form)
  local x = macroexpand(hd(form))
  if macro63(x) then
    return(macroexpand(apply(macro_function(x), tl(form))))
  else
    local l = {x}
    local i = 0
    while i < _35(form) do
      if not( i == 0) then
        add(l, macroexpand(form[i + 1]))
      end
      i = i + 1
    end
    local _o = form
    local k = nil
    for k in next, _o do
      local v = _o[k]
      if not number63(k) then
        l[k] = macroexpand(v)
      end
    end
    return(l)
  end
end
function expand1(_x)
  local _id = _x
  local name = _id[1]
  local body = cut(_id, 1)
  return(apply(macro_function(name), body))
end
function macroexpand(form)
  if symbol63(form) then
    return(macroexpand(symbol_expansion(form)))
  else
    if atom63(form) then
      return(form)
    else
      if none63(form) then
        return(form)
      else
        local x = hd(form)
        if x == "%local" then
          return(expand_local(form))
        else
          if x == "%function" then
            return(expand_function(form))
          else
            if x == "%global-function" then
              return(expand_definition(form))
            else
              if x == "%local-function" then
                return(expand_definition(form))
              else
                return(expand_form(form))
              end
            end
          end
        end
      end
    end
  end
end
local function quasiquote_list(form, depth)
  local xs = {{"list"}}
  local _o = form
  local k = nil
  for k in next, _o do
    local v = _o[k]
    if not number63(k) then
      local _e
      if quasisplice63(v, depth) then
        _e = quasiexpand(v[2])
      else
        _e = quasiexpand(v, depth)
      end
      local _v = _e
      last(xs)[k] = _v
    end
  end
  local _x2 = form
  local _i1 = 0
  while _i1 < _35(_x2) do
    local x = _x2[_i1 + 1]
    if quasisplice63(x, depth) then
      local _x3 = quasiexpand(x[2])
      add(xs, _x3)
      add(xs, {"list"})
    else
      add(last(xs), quasiexpand(x, depth))
    end
    _i1 = _i1 + 1
  end
  local pruned = keep(function (x)
    return(_35(x) > 1 or not( hd(x) == "list") or keys63(x))
  end, xs)
  if one63(pruned) then
    return(hd(pruned))
  else
    return(join({"join"}, pruned))
  end
end
function quasiexpand(form, depth)
  if quasiquoting63(depth) then
    if atom63(form) then
      return({"quote", form})
    else
      if can_unquote63(depth) and hd(form) == "unquote" then
        return(quasiexpand(form[2]))
      else
        if hd(form) == "unquote" or hd(form) == "unquote-splicing" then
          return(quasiquote_list(form, depth - 1))
        else
          if hd(form) == "quasiquote" then
            return(quasiquote_list(form, depth + 1))
          else
            return(quasiquote_list(form, depth))
          end
        end
      end
    end
  else
    if atom63(form) then
      return(form)
    else
      if hd(form) == "quote" then
        return(form)
      else
        if hd(form) == "quasiquote" then
          return(quasiexpand(form[2], 1))
        else
          return(map(function (x)
            return(quasiexpand(x, depth))
          end, form))
        end
      end
    end
  end
end
function expand_if(_x)
  local _id = _x
  local a = _id[1]
  local b = _id[2]
  local c = cut(_id, 2)
  if is63(b) then
    return({join({"%if", a, b}, expand_if(c))})
  else
    if is63(a) then
      return({a})
    end
  end
end
indent_level = 0
function indentation()
  local s = ""
  local i = 0
  while i < indent_level do
    s = s .. "  "
    i = i + 1
  end
  return(s)
end
local reserved = {["%"] = true, ["*"] = true, ["+"] = true, ["-"] = true, ["/"] = true, ["<"] = true, ["<="] = true, ["="] = true, ["=="] = true, [">"] = true, [">="] = true, ["and"] = true, ["break"] = true, ["case"] = true, ["catch"] = true, ["continue"] = true, ["debugger"] = true, ["default"] = true, ["delete"] = true, ["do"] = true, ["else"] = true, ["elseif"] = true, ["end"] = true, ["false"] = true, ["finally"] = true, ["for"] = true, ["function"] = true, ["if"] = true, ["in"] = true, ["instanceof"] = true, ["local"] = true, ["new"] = true, ["nil"] = true, ["not"] = true, ["or"] = true, ["repeat"] = true, ["return"] = true, ["switch"] = true, ["then"] = true, ["throw"] = true, ["true"] = true, ["try"] = true, ["typeof"] = true, ["until"] = true, ["var"] = true, ["void"] = true, ["while"] = true, ["with"] = true}
function reserved63(x)
  return(reserved[x])
end
local function valid_code63(n)
  return(number_code63(n) or n > 64 and n < 91 or n > 96 and n < 123 or n == 95)
end
function valid_id63(id)
  if none63(id) or reserved63(id) then
    return(false)
  else
    local i = 0
    while i < _35(id) do
      if not valid_code63(code(id, i)) then
        return(false)
      end
      i = i + 1
    end
    return(true)
  end
end
function key(k)
  local i = inner(k)
  if valid_id63(i) then
    return(i)
  else
    if target == "js" then
      return(k)
    else
      return("[" .. k .. "]")
    end
  end
end
function mapo(f, t)
  local o = {}
  local _o = t
  local k = nil
  for k in next, _o do
    local v = _o[k]
    local x = f(v)
    if is63(x) then
      add(o, literal(k))
      add(o, x)
    end
  end
  return(o)
end
local __x1 = {}
__x1["%neg"] = "-"
local _x2 = {}
_x2.js = "!"
_x2.lua = "not"
__x1["%not"] = _x2
local __x3 = {}
__x3["%div"] = "/"
__x3["%mod"] = "%"
__x3["%mul"] = "*"
local __x4 = {}
__x4["%add"] = "+"
__x4["%sub"] = "-"
local __x5 = {}
local _x6 = {}
_x6.js = "+"
_x6.lua = ".."
__x5["%cat"] = _x6
local __x7 = {}
__x7["%ge"] = ">="
__x7["%gt"] = ">"
__x7["%le"] = "<="
__x7["%lt"] = "<"
local __x8 = {}
local _x9 = {}
_x9.js = "==="
_x9.lua = "=="
__x8["%eq"] = _x9
local __x10 = {}
local _x11 = {}
_x11.js = "&&"
_x11.lua = "and"
__x10["%and"] = _x11
local __x12 = {}
local _x13 = {}
_x13.js = "||"
_x13.lua = "or"
__x12["%or"] = _x13
local infix = {__x1, __x3, __x4, __x5, __x7, __x8, __x10, __x12}
local function unary63(form)
  return(two63(form) and in63(hd(form), {"%not", "%neg"}))
end
local function index(k)
  if number63(k) then
    return(k - 1)
  end
end
local function precedence(form)
  if not( atom63(form) or unary63(form)) then
    local _o = infix
    local k = nil
    for k in next, _o do
      local v = _o[k]
      if v[hd(form)] then
        return(index(k))
      end
    end
  end
  return(0)
end
local function getop(op)
  return(find(function (level)
    local x = level[op]
    if x == true then
      return(op)
    else
      if string63(x) then
        return(x)
      else
        if is63(x) then
          return(x[target])
        end
      end
    end
  end, infix))
end
local function infix63(x)
  return(is63(getop(x)))
end
local function compile_args(args)
  local s = "("
  local c = ""
  local _x = args
  local _i = 0
  while _i < _35(_x) do
    local x = _x[_i + 1]
    s = s .. c .. compile(x)
    c = ", "
    _i = _i + 1
  end
  return(s .. ")")
end
local function escape_newlines(s)
  local s1 = ""
  local i = 0
  while i < _35(s) do
    local c = char(s, i)
    local _e
    if c == "\n" then
      _e = "\\n"
    else
      _e = c
    end
    s1 = s1 .. _e
    i = i + 1
  end
  return(s1)
end
local function id(id)
  local _e
  if number_code63(code(id, 0)) then
    _e = "_"
  else
    _e = ""
  end
  local id1 = _e
  local i = 0
  while i < _35(id) do
    local c = char(id, i)
    local n = code(c)
    local _e1
    if c == "-" then
      _e1 = "_"
    else
      local _e2
      if valid_code63(n) then
        _e2 = c
      else
        local _e3
        if i == 0 then
          _e3 = "_" .. n
        else
          _e3 = n
        end
        _e2 = _e3
      end
      _e1 = _e2
    end
    local c1 = _e1
    id1 = id1 .. c1
    i = i + 1
  end
  if reserved63(id1) then
    return("_" .. id1)
  else
    return(id1)
  end
end
local function compile_atom(x)
  if x == "nil" and target == "lua" then
    return(x)
  else
    if x == "nil" then
      return("undefined")
    else
      if id_literal63(x) then
        return(inner(x))
      else
        if string_literal63(x) then
          return(escape_newlines(x))
        else
          if string63(x) then
            return(id(x))
          else
            if boolean63(x) then
              if x then
                return("true")
              else
                return("false")
              end
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
                    if number63(x) then
                      return(x .. "")
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
    return("")
  else
    if target == "js" then
      return(";\n")
    else
      return("\n")
    end
  end
end
local function compile_special(form, stmt63)
  local _id = form
  local x = _id[1]
  local args = cut(_id, 1)
  local _id1 = getenv(x)
  local special = _id1.special
  local stmt = _id1.stmt
  local self_tr63 = _id1.tr
  local tr = terminator(stmt63 and not self_tr63)
  return(apply(special, args) .. tr)
end
local function parenthesize_call63(x)
  return(not atom63(x) and hd(x) == "%function" or precedence(x) > 0)
end
local function compile_call(form)
  local f = hd(form)
  local f1 = compile(f)
  local args = compile_args(stash42(tl(form)))
  if parenthesize_call63(f) then
    return("(" .. f1 .. ")" .. args)
  else
    return(f1 .. args)
  end
end
local function op_delims(parent, child, ...)
  local _rest = unstash({...})
  local _parent = destash33(parent, _rest)
  local _child = destash33(child, _rest)
  local _id = _rest
  local right = _id.right
  local _e
  if right then
    _e = _6261
  else
    _e = _62
  end
  if _e(precedence(_child), precedence(_parent)) then
    return({"(", ")"})
  else
    return({"", ""})
  end
end
local function compile_infix(form)
  local _id = form
  local op = _id[1]
  local _id1 = cut(_id, 1)
  local a = _id1[1]
  local b = _id1[2]
  local _id2 = op_delims(form, a)
  local ao = _id2[1]
  local ac = _id2[2]
  local _id3 = op_delims(form, b, {_stash = true, right = true})
  local bo = _id3[1]
  local bc = _id3[2]
  local _a = compile(a)
  local _b = compile(b)
  local _op = getop(op)
  if unary63(form) then
    return(_op .. ao .. " " .. _a .. ac)
  else
    return(ao .. _a .. ac .. " " .. _op .. " " .. bo .. _b .. bc)
  end
end
function compile_function(args, body, ...)
  local _rest = unstash({...})
  local _args = destash33(args, _rest)
  local _body = destash33(body, _rest)
  local _id = _rest
  local name = _id.name
  local prefix = _id.prefix
  local _e
  if name then
    _e = compile(name)
  else
    _e = ""
  end
  local _id1 = _e
  local _args1 = compile_args(_args)
  indent_level = indent_level + 1
  local _x1 = compile(_body, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local _body1 = _x1
  local ind = indentation()
  local _e1
  if prefix then
    _e1 = prefix .. " "
  else
    _e1 = ""
  end
  local p = _e1
  local _e2
  if target == "js" then
    _e2 = ""
  else
    _e2 = "end"
  end
  local tr = _e2
  if name then
    tr = tr .. "\n"
  end
  if target == "js" then
    return("function " .. _id1 .. _args1 .. " {\n" .. _body1 .. ind .. "}" .. tr)
  else
    return(p .. "function " .. _id1 .. _args1 .. "\n" .. _body1 .. ind .. tr)
  end
end
local function can_return63(form)
  return(is63(form) and (atom63(form) or not( hd(form) == "%return") and not statement63(hd(form))))
end
function compile(form, ...)
  local _rest = unstash({...})
  local _form = destash33(form, _rest)
  local _id = _rest
  local stmt = _id.stmt
  if nil63(_form) then
    return("")
  else
    if special_form63(_form) then
      return(compile_special(_form, stmt))
    else
      local tr = terminator(stmt)
      local _e
      if stmt then
        _e = indentation()
      else
        _e = ""
      end
      local ind = _e
      local _e1
      if atom63(_form) then
        _e1 = compile_atom(_form)
      else
        local _e2
        if infix63(hd(_form)) then
          _e2 = compile_infix(_form)
        else
          _e2 = compile_call(_form)
        end
        _e1 = _e2
      end
      local _form1 = _e1
      return(ind .. _form1 .. tr)
    end
  end
end
local function lower_statement(form, tail63)
  local hoist = {}
  local e = lower(form, hoist, true, tail63)
  if some63(hoist) and is63(e) then
    return(join({"%do"}, hoist, {e}))
  else
    if is63(e) then
      return(e)
    else
      if _35(hoist) > 1 then
        return(join({"%do"}, hoist))
      else
        return(hd(hoist))
      end
    end
  end
end
local function lower_body(body, tail63)
  return(lower_statement(join({"%do"}, body), tail63))
end
local function literal63(form)
  return(atom63(form) or hd(form) == "%array" or hd(form) == "%object")
end
local function standalone63(form)
  return(not atom63(form) and not infix63(hd(form)) and not literal63(form) and not( "%get" == hd(form)) or id_literal63(form))
end
local function lower_do(args, hoist, stmt63, tail63)
  local _x = almost(args)
  local _i = 0
  while _i < _35(_x) do
    local x = _x[_i + 1]
    local _y = lower(x, hoist, stmt63)
    if yes(_y) then
      local e = _y
      if standalone63(e) then
        add(hoist, e)
      end
    end
    _i = _i + 1
  end
  local e = lower(last(args), hoist, stmt63, tail63)
  if tail63 and can_return63(e) then
    return({"%return", e})
  else
    return(e)
  end
end
local function lower_set(args, hoist, stmt63, tail63)
  local _id = args
  local lh = _id[1]
  local rh = _id[2]
  add(hoist, {"%set", lh, lower(rh, hoist)})
  if not( stmt63 and not tail63) then
    return(lh)
  end
end
local function lower_if(args, hoist, stmt63, tail63)
  local _id = args
  local cond = _id[1]
  local _then = _id[2]
  local _else = _id[3]
  if stmt63 then
    local _e1
    if is63(_else) then
      _e1 = {lower_body({_else}, tail63)}
    end
    return(add(hoist, join({"%if", lower(cond, hoist), lower_body({_then}, tail63)}, _e1)))
  else
    local e = unique("e")
    add(hoist, {"%local", e})
    local _e
    if is63(_else) then
      _e = {lower({"%set", e, _else})}
    end
    add(hoist, join({"%if", lower(cond, hoist), lower({"%set", e, _then})}, _e))
    return(e)
  end
end
local function lower_short(x, args, hoist)
  local _id = args
  local a = _id[1]
  local b = _id[2]
  local hoist1 = {}
  local b1 = lower(b, hoist1)
  if some63(hoist1) then
    local _id1 = unique("id")
    local _e
    if x == "%and" then
      _e = {"%if", _id1, b, _id1}
    else
      _e = {"%if", _id1, _id1, b}
    end
    return(lower({"%do", {"%local", _id1, a}, _e}, hoist))
  else
    return({x, lower(a, hoist), b1})
  end
end
local function lower_try(args, hoist, tail63)
  return(add(hoist, {"%try", lower_body(args, tail63)}))
end
local function lower_while(args, hoist)
  local _id = args
  local c = _id[1]
  local body = cut(_id, 1)
  local pre = {}
  local _c = lower(c, pre)
  local _e
  if none63(pre) then
    _e = {"%while", _c, lower_body(body)}
  else
    _e = {"%while", true, join({"%do"}, pre, {{"%if", {"not", _c}, {"break"}}, lower_body(body)})}
  end
  return(add(hoist, _e))
end
local function lower_for(args, hoist)
  local _id = args
  local t = _id[1]
  local k = _id[2]
  local body = cut(_id, 2)
  return(add(hoist, {"%for", lower(t, hoist), k, lower_body(body)}))
end
local function lower_function(args)
  local _id = args
  local a = _id[1]
  local body = cut(_id, 1)
  add(environment, {})
  local _o = a
  local _i = nil
  for _i in next, _o do
    local _x = _o[_i]
    setenv(_x, {_stash = true, variable = true})
  end
  setenv("%scope", {_stash = true, args = a, id = "#<function>", unique = {}, variable = true})
  local _x1 = {"%function", a, lower_body(body, true)}
  drop(environment)
  return(_x1)
end
local function lower_definition(kind, args, hoist)
  local _id = args
  local name = _id[1]
  local _args = _id[2]
  local body = cut(_id, 2)
  add(environment, {})
  local _o = _args
  local _i = nil
  for _i in next, _o do
    local _x = _o[_i]
    setenv(_x, {_stash = true, variable = true})
  end
  setenv("%scope", {_stash = true, args = _args, id = name, unique = {}, variable = true})
  local _x1 = add(hoist, {kind, name, _args, lower_body(body, true)})
  drop(environment)
  return(_x1)
end
local function lower_call(form, hoist)
  local _form = map(function (x)
    return(lower(x, hoist))
  end, form)
  if some63(_form) then
    return(_form)
  end
end
local function lower_infix63(form)
  return(infix63(hd(form)) and _35(form) > 3)
end
local function lower_infix(form, hoist)
  local _id = form
  local x = _id[1]
  local args = cut(_id, 1)
  return(lower(reduce(function (a, b)
    return({x, b, a})
  end, reverse(args)), hoist))
end
local function lower_special(form, hoist)
  local e = lower_call(form, hoist)
  if e then
    return(add(hoist, e))
  end
end
function lower(form, hoist, stmt63, tail63)
  if atom63(form) then
    return(form)
  else
    if empty63(form) then
      return({"%array"})
    else
      if nil63(hoist) then
        return(lower_statement(form))
      else
        if lower_infix63(form) then
          return(lower_infix(form, hoist))
        else
          local _id = form
          local x = _id[1]
          local args = cut(_id, 1)
          if x == "%do" then
            return(lower_do(args, hoist, stmt63, tail63))
          else
            if x == "%set" then
              return(lower_set(args, hoist, stmt63, tail63))
            else
              if x == "%if" then
                return(lower_if(args, hoist, stmt63, tail63))
              else
                if x == "%try" then
                  return(lower_try(args, hoist, tail63))
                else
                  if x == "%while" then
                    return(lower_while(args, hoist))
                  else
                    if x == "%for" then
                      return(lower_for(args, hoist))
                    else
                      if x == "%function" then
                        return(lower_function(args))
                      else
                        if x == "%local-function" or x == "%global-function" then
                          return(lower_definition(x, args, hoist))
                        else
                          if in63(x, {"%and", "%or"}) then
                            return(lower_short(x, args, hoist))
                          else
                            if statement63(x) then
                              return(lower_special(form, hoist))
                            else
                              return(lower_call(form, hoist))
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
function expand(form)
  return(lower(macroexpand(form)))
end
local load1 = load
local function run(code)
  local f,e = load1(code)
  if f then
    return(f())
  else
    error(e .. " in " .. code)
  end
end
_37result = nil
function eval(form)
  local previous = target
  target = "lua"
  local code = compile(expand({"set", "%result", form}))
  target = previous
  run(code)
  return(_37result)
end
setenv("%do", {_stash = true, special = function (...)
  local forms = unstash({...})
  local s = ""
  local _x1 = forms
  local _i = 0
  while _i < _35(_x1) do
    local x = _x1[_i + 1]
    s = s .. compile(x, {_stash = true, stmt = true})
    if not atom63(x) then
      if hd(x) == "%return" or hd(x) == "%break" then
        break
      end
    end
    _i = _i + 1
  end
  return(s)
end, stmt = true, tr = true})
setenv("%if", {_stash = true, special = function (cond, cons, alt)
  local _cond = compile(cond)
  indent_level = indent_level + 1
  local _x = compile(cons, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local _cons = _x
  local _e
  if alt then
    indent_level = indent_level + 1
    local _x1 = compile(alt, {_stash = true, stmt = true})
    indent_level = indent_level - 1
    _e = _x1
  end
  local _alt = _e
  local ind = indentation()
  local s = ""
  if target == "js" then
    s = s .. ind .. "if (" .. _cond .. ") {\n" .. _cons .. ind .. "}"
  else
    s = s .. ind .. "if " .. _cond .. " then\n" .. _cons
  end
  if _alt and target == "js" then
    s = s .. " else {\n" .. _alt .. ind .. "}"
  else
    if _alt then
      s = s .. ind .. "else\n" .. _alt
    end
  end
  if target == "lua" then
    return(s .. ind .. "end\n")
  else
    return(s .. "\n")
  end
end, stmt = true, tr = true})
setenv("%while", {_stash = true, special = function (cond, form)
  local _cond = compile(cond)
  indent_level = indent_level + 1
  local _x = compile(form, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local body = _x
  local ind = indentation()
  if target == "js" then
    return(ind .. "while (" .. _cond .. ") {\n" .. body .. ind .. "}\n")
  else
    return(ind .. "while " .. _cond .. " do\n" .. body .. ind .. "end\n")
  end
end, stmt = true, tr = true})
setenv("%for", {_stash = true, special = function (t, k, form)
  local _t = compile(t)
  local ind = indentation()
  indent_level = indent_level + 1
  local _x = compile(form, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local body = _x
  if target == "lua" then
    return(ind .. "for " .. k .. " in next, " .. _t .. " do\n" .. body .. ind .. "end\n")
  else
    return(ind .. "for (" .. k .. " in " .. _t .. ") {\n" .. body .. ind .. "}\n")
  end
end, stmt = true, tr = true})
setenv("%try", {_stash = true, special = function (form)
  local e = unique("e")
  local ind = indentation()
  indent_level = indent_level + 1
  local _x = compile(form, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local body = _x
  local hf = {"%return", {"%array", false, e}}
  indent_level = indent_level + 1
  local _x3 = compile(hf, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local h = _x3
  return(ind .. "try {\n" .. body .. ind .. "}\n" .. ind .. "catch (" .. e .. ") {\n" .. h .. ind .. "}\n")
end, stmt = true, tr = true})
setenv("%delete", {_stash = true, special = function (place)
  return(indentation() .. "delete " .. compile(place))
end, stmt = true})
setenv("%break", {_stash = true, special = function ()
  return(indentation() .. "break")
end, stmt = true})
setenv("%function", {_stash = true, special = function (args, body)
  return(compile_function(args, body))
end})
setenv("%global-function", {_stash = true, special = function (name, args, body)
  if target == "lua" then
    local x = compile_function(args, body, {_stash = true, name = name})
    return(indentation() .. x)
  else
    return(compile({"%set", name, {"%function", args, body}}, {_stash = true, stmt = true}))
  end
end, stmt = true, tr = true})
setenv("%local-function", {_stash = true, special = function (name, args, body)
  if target == "lua" then
    local x = compile_function(args, body, {_stash = true, name = name, prefix = "local"})
    return(indentation() .. x)
  else
    return(compile({"%local", name, {"%function", args, body}}, {_stash = true, stmt = true}))
  end
end, stmt = true, tr = true})
setenv("%return", {_stash = true, special = function (x)
  local _e
  if nil63(x) then
    _e = "return"
  else
    _e = "return(" .. compile(x) .. ")"
  end
  local _x = _e
  return(indentation() .. _x)
end, stmt = true})
setenv("new", {_stash = true, special = function (x)
  return("new " .. compile(x))
end})
setenv("typeof", {_stash = true, special = function (x)
  return("typeof(" .. compile(x) .. ")")
end})
setenv("error", {_stash = true, special = function (x)
  local _e
  if target == "js" then
    _e = "throw " .. compile({"new", {"Error", x}})
  else
    _e = "error(" .. compile(x) .. ")"
  end
  local e = _e
  return(indentation() .. e)
end, stmt = true})
setenv("%local", {_stash = true, special = function (name, value)
  local _id = compile(name)
  local value1 = compile(value)
  local _e
  if is63(value) then
    _e = " = " .. value1
  else
    _e = ""
  end
  local rh = _e
  local _e1
  if target == "js" then
    _e1 = "var "
  else
    _e1 = "local "
  end
  local keyword = _e1
  local ind = indentation()
  return(ind .. keyword .. _id .. rh)
end, stmt = true})
setenv("%set", {_stash = true, special = function (lh, rh)
  local _lh = compile(lh)
  local _e
  if nil63(rh) then
    _e = "nil"
  else
    _e = rh
  end
  local _rh = compile(_e)
  return(indentation() .. _lh .. " = " .. _rh)
end, stmt = true})
setenv("%get", {_stash = true, special = function (t, k)
  local _t = compile(t)
  local k1 = compile(k)
  if target == "lua" and char(_t, 0) == "{" then
    _t = "(" .. _t .. ")"
  end
  if string_literal63(k) and valid_id63(inner(k)) then
    return(_t .. "." .. inner(k))
  else
    return(_t .. "[" .. k1 .. "]")
  end
end})
setenv("%array", {_stash = true, special = function (...)
  local forms = unstash({...})
  local _e
  if target == "lua" then
    _e = "{"
  else
    _e = "["
  end
  local open = _e
  local _e1
  if target == "lua" then
    _e1 = "}"
  else
    _e1 = "]"
  end
  local close = _e1
  local s = ""
  local c = ""
  local _o = forms
  local k = nil
  for k in next, _o do
    local v = _o[k]
    if number63(k) then
      s = s .. c .. compile(v)
      c = ", "
    end
  end
  return(open .. s .. close)
end})
setenv("%object", {_stash = true, special = function (...)
  local forms = unstash({...})
  local s = "{"
  local c = ""
  local _e
  if target == "lua" then
    _e = " = "
  else
    _e = ": "
  end
  local sep = _e
  local _o = sort(pair(forms), function (_x, _x1)
    local _id = _x
    local a = _id[1]
    local _id1 = _x1
    local b = _id1[1]
    return(a < b)
  end)
  local k = nil
  for k in next, _o do
    local v = _o[k]
    if number63(k) then
      local _id = v
      local _k = _id[1]
      local _v = _id[2]
      if not string63(_k) then
        error("Illegal key: " .. str(_k))
      end
      s = s .. c .. key(_k) .. sep .. compile(_v)
      c = ", "
    end
  end
  return(s .. "}")
end})
return({compile = compile, eval = eval, expand = expand, run = run})
