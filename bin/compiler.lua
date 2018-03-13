local function getenv(k, p)
  if string63(k) then
    local __i = edge(environment)
    while __i >= 0 do
      local __b = environment[__i + 1][k]
      if is63(__b) then
        local __e22
        if p then
          __e22 = __b[p]
        else
          __e22 = __b
        end
        return __e22
      else
        __i = __i - 1
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
    local __l = {"%object", "\"_stash\"", true}
    local ____o = args
    local __k = nil
    for __k in next, ____o do
      local __v = ____o[__k]
      if not number63(__k) then
        add(__l, literal(__k))
        add(__l, __v)
      end
    end
    return join(args, {__l})
  else
    return args
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
  return k
end
function bind(lh, rh)
  if atom63(lh) then
    return {lh, rh}
  else
    local __id = unique("id")
    local __bs = {__id, rh}
    local ____o1 = lh
    local __k1 = nil
    for __k1 in next, ____o1 do
      local __v1 = ____o1[__k1]
      local __e23
      if __k1 == "rest" then
        __e23 = {"cut", __id, _35(lh)}
      else
        local __e24
        if number63(__k1) then
          __e24 = {"get", __id, bias(__k1)}
        else
          __e24 = {"get", __id, {"quote", __k1}}
        end
        __e23 = __e24
      end
      local __x5 = __e23
      if is63(__k1) then
        local __e25
        if __v1 == true then
          __e25 = __k1
        else
          __e25 = __v1
        end
        local __k2 = __e25
        __bs = join(__bs, bind(__k2, __x5))
      end
    end
    return __bs
  end
end
_G.bind = bind
setenv("arguments%", {_stash = true, macro = function (from)
  return {".", "Array", {"quote", "prototype"}, {"quote", "slice"}, {"call", "arguments", from}}
end})
function bind42(args, body)
  local __args1 = {}
  local function rest()
    __args1.rest = true
    if target == "js" then
      return {"unstash", {"arguments%", _35(__args1)}}
    else
      return {"unstash", {"list", "|...|"}}
    end
  end
  if atom63(args) then
    return {__args1, join({"let", {args, rest()}}, body)}
  else
    local __bs1 = {}
    local __r19 = unique("r")
    local ____o2 = args
    local __k3 = nil
    for __k3 in next, ____o2 do
      local __v2 = ____o2[__k3]
      if number63(__k3) then
        if atom63(__v2) then
          add(__args1, __v2)
        else
          local __x25 = unique("x")
          add(__args1, __x25)
          __bs1 = join(__bs1, {__v2, __x25})
        end
      end
    end
    if keys63(args) then
      __bs1 = join(__bs1, {__r19, rest()})
      local __n3 = _35(__args1)
      local __i4 = 0
      while __i4 < __n3 do
        local __v3 = __args1[__i4 + 1]
        __bs1 = join(__bs1, {__v3, {"destash!", __v3, __r19}})
        __i4 = __i4 + 1
      end
      __bs1 = join(__bs1, {keys(args), __r19})
    end
    return {__args1, join({"let", __bs1}, body)}
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
local function expand_local(__x33)
  local ____id1 = __x33
  local __x34 = ____id1[1]
  local __name = ____id1[2]
  local __value = ____id1[3]
  setenv(__name, {_stash = true, variable = true})
  return {"%local", __name, macroexpand(__value)}
end
local function expand_function(__x36)
  local ____id2 = __x36
  local __x37 = ____id2[1]
  local __args = ____id2[2]
  local __body = cut(____id2, 2)
  add(environment, {})
  local ____o3 = __args
  local ____i5 = nil
  for ____i5 in next, ____o3 do
    local ____x38 = ____o3[____i5]
    setenv(____x38, {_stash = true, variable = true})
  end
  local ____x39 = join({"%function", __args}, macroexpand(__body))
  drop(environment)
  return ____x39
end
local function expand_definition(__x41)
  local ____id3 = __x41
  local __x42 = ____id3[1]
  local __name1 = ____id3[2]
  local __args11 = ____id3[3]
  local __body1 = cut(____id3, 3)
  add(environment, {})
  local ____o4 = __args11
  local ____i6 = nil
  for ____i6 in next, ____o4 do
    local ____x43 = ____o4[____i6]
    setenv(____x43, {_stash = true, variable = true})
  end
  local ____x44 = join({__x42, __name1, __args11}, macroexpand(__body1))
  drop(environment)
  return ____x44
end
local function expand_macro(form)
  return macroexpand(expand1(form))
end
function expand1(__x46)
  local ____id4 = __x46
  local __name2 = ____id4[1]
  local __body2 = cut(____id4, 1)
  return apply(macro_function(__name2), __body2)
end
_G.expand1 = expand1
function macroexpand(form)
  if symbol63(form) then
    return macroexpand(symbol_expansion(form))
  else
    if atom63(form) then
      return form
    else
      local __x47 = hd(form)
      if __x47 == "%local" then
        return expand_local(form)
      else
        if __x47 == "%function" then
          return expand_function(form)
        else
          if __x47 == "%global-function" then
            return expand_definition(form)
          else
            if __x47 == "%local-function" then
              return expand_definition(form)
            else
              if macro63(__x47) then
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
  local __xs = {{"list"}}
  local ____o5 = form
  local __k4 = nil
  for __k4 in next, ____o5 do
    local __v4 = ____o5[__k4]
    if not number63(__k4) then
      local __e26
      if quasisplice63(__v4, depth) then
        __e26 = quasiexpand(__v4[2])
      else
        __e26 = quasiexpand(__v4, depth)
      end
      local __v5 = __e26
      last(__xs)[__k4] = __v5
    end
  end
  local ____x50 = form
  local ____i8 = 0
  while ____i8 < _35(____x50) do
    local __x51 = ____x50[____i8 + 1]
    if quasisplice63(__x51, depth) then
      local __x52 = quasiexpand(__x51[2])
      add(__xs, __x52)
      add(__xs, {"list"})
    else
      add(last(__xs), quasiexpand(__x51, depth))
    end
    ____i8 = ____i8 + 1
  end
  local __pruned = keep(function (x)
    return _35(x) > 1 or not( hd(x) == "list") or keys63(x)
  end, __xs)
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
function expand_if(__x56)
  local ____id5 = __x56
  local __a = ____id5[1]
  local __b1 = ____id5[2]
  local __c = cut(____id5, 2)
  if is63(__b1) then
    return {join({"%if", __a, __b1}, expand_if(__c))}
  else
    if is63(__a) then
      return {__a}
    end
  end
end
_G.expand_if = expand_if
indent_level = 0
_G.indent_level = indent_level
function indentation()
  local __s = ""
  local __i9 = 0
  while __i9 < indent_level do
    __s = __s .. "  "
    __i9 = __i9 + 1
  end
  return __s
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
  local __e27
  if number_code63(code(id, 0)) then
    __e27 = "_"
  else
    __e27 = ""
  end
  local __id11 = __e27
  local __i10 = 0
  while __i10 < _35(id) do
    local __c1 = char(id, __i10)
    local __n7 = code(__c1)
    local __e28
    if __c1 == "-" and not( id == "-") then
      __e28 = "_"
    else
      local __e29
      if valid_code63(__n7) then
        __e29 = __c1
      else
        local __e30
        if __i10 == 0 then
          __e30 = "_" .. __n7
        else
          __e30 = __n7
        end
        __e29 = __e30
      end
      __e28 = __e29
    end
    local __c11 = __e28
    __id11 = __id11 .. __c11
    __i10 = __i10 + 1
  end
  if reserved63(__id11) then
    return "_" .. __id11
  else
    return __id11
  end
end
function valid_id63(x)
  return some63(x) and x == id(x)
end
_G.valid_id63 = valid_id63
local __names = {}
function unique(x)
  local __x60 = id(x)
  if __names[__x60] then
    local __i11 = __names[__x60]
    __names[__x60] = __names[__x60] + 1
    return unique(__x60 .. __i11)
  else
    __names[__x60] = 1
    return "__" .. __x60
  end
end
_G.unique = unique
function key(k)
  if string_literal63(k) then
    local __i12 = inner(k)
    if valid_id63(__i12) then
      return __i12
    else
      if target == "js" then
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
  local __o6 = {}
  local ____o7 = t
  local __k5 = nil
  for __k5 in next, ____o7 do
    local __v6 = ____o7[__k5]
    local __x61 = f(__v6)
    if is63(__x61) then
      add(__o6, literal(__k5))
      add(__o6, __x61)
    end
  end
  return __o6
end
_G.mapo = mapo
local ____x63 = {}
local ____x64 = {}
____x64.js = "!"
____x64.lua = "not"
____x63["not"] = ____x64
local ____x65 = {}
____x65["*"] = true
____x65["/"] = true
____x65["%"] = true
local ____x66 = {}
local ____x67 = {}
____x67.js = "+"
____x67.lua = ".."
____x66.cat = ____x67
local ____x68 = {}
____x68["+"] = true
____x68["-"] = true
local ____x69 = {}
____x69["<"] = true
____x69[">"] = true
____x69["<="] = true
____x69[">="] = true
local ____x70 = {}
local ____x71 = {}
____x71.js = "==="
____x71.lua = "=="
____x70["="] = ____x71
local ____x72 = {}
local ____x73 = {}
____x73.js = "&&"
____x73.lua = "and"
____x72["and"] = ____x73
local ____x74 = {}
local ____x75 = {}
____x75.js = "||"
____x75.lua = "or"
____x74["or"] = ____x75
local infix = {____x63, ____x65, ____x66, ____x68, ____x69, ____x70, ____x72, ____x74}
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
    local ____o8 = infix
    local __k6 = nil
    for __k6 in next, ____o8 do
      local __v7 = ____o8[__k6]
      if __v7[hd(form)] then
        return index(__k6)
      end
    end
  end
  return 0
end
local function getop(op)
  return find(function (level)
    local __x77 = level[op]
    if __x77 == true then
      return op
    else
      if is63(__x77) then
        return __x77[target]
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
  local __s1 = "("
  local __c2 = ""
  local ____x78 = args
  local ____i15 = 0
  while ____i15 < _35(____x78) do
    local __x79 = ____x78[____i15 + 1]
    __s1 = __s1 .. __c2 .. compile(__x79)
    __c2 = ", "
    ____i15 = ____i15 + 1
  end
  return __s1 .. ")"
end
local function escape_newlines(s)
  local __s11 = ""
  local __i16 = 0
  while __i16 < _35(s) do
    local __c3 = char(s, __i16)
    local __e31
    if __c3 == "\n" then
      __e31 = "\\n"
    else
      local __e32
      if __c3 == "\r" then
        __e32 = "\\r"
      else
        __e32 = __c3
      end
      __e31 = __e32
    end
    __s11 = __s11 .. __e31
    __i16 = __i16 + 1
  end
  return __s11
end
local function compile_atom(x)
  if x == "nil" and target == "lua" then
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
    if target == "js" then
      return ";\n"
    else
      return "\n"
    end
  end
end
local function compile_special(form, stmt63)
  local ____id6 = form
  local __x80 = ____id6[1]
  local __args2 = cut(____id6, 1)
  local ____id7 = getenv(__x80)
  local __special = ____id7.special
  local __stmt = ____id7.stmt
  local __self_tr63 = ____id7.tr
  local __tr = terminator(stmt63 and not __self_tr63)
  return apply(__special, __args2) .. __tr
end
local function parenthesize_call63(x)
  return not atom63(x) and hd(x) == "%function" or target == "lua" and (string_literal63(x) or literal63(x)) or precedence(x) > 0
end
local function unescape(str)
  if string_literal63(str) then
    return _eval(str)
  else
    if atom63(str) then
      return {"%get", str}
    else
      return str
    end
  end
end
local function access(x, sep, y)
  if char(y, 0) == "[" then
    return x .. y
  else
    if string_literal63(y) then
      return x .. "[" .. y .. "]"
    else
      return x .. (sep or "") .. y
    end
  end
end
local function parse_access(sep, f1, args)
  local __e33
  if sep then
    __e33 = reduce(function (x, y)
      return access(x, sep, y)
    end, map(compile, map(unescape, args)))
  else
    __e33 = compile_args(stash42(args))
  end
  local __args12 = __e33
  if sep then
    return access(f1, sep, __args12)
  else
    return f1 .. __args12
  end
end
local function dispatch(form)
  if hd(form) == ":" then
    if target == "lua" then
      return ":"
    else
      return "."
    end
  else
    if hd(form) == "." then
      return "."
    end
  end
end
local function compile_call(form)
  local __sep = dispatch(form)
  local __e34
  if __sep then
    __e34 = tl(form)
  else
    __e34 = form
  end
  local ____id8 = __e34
  local __f = ____id8[1]
  local __args3 = cut(____id8, 1)
  local __e35
  if parenthesize_call63(__f) then
    __e35 = "(" .. compile(__f) .. ")"
  else
    __e35 = compile(__f)
  end
  local __f1 = __e35
  return parse_access(__sep, __f1, __args3)
end
local function op_delims(parent, child, ...)
  local ____r62 = unstash({...})
  local __parent = destash33(parent, ____r62)
  local __child = destash33(child, ____r62)
  local ____id9 = ____r62
  local __right = ____id9.right
  local __e36
  if __right then
    __e36 = _6261
  else
    __e36 = _62
  end
  if __e36(precedence(__child), precedence(__parent)) then
    return {"(", ")"}
  else
    return {"", ""}
  end
end
local function compile_infix(form)
  local ____id10 = form
  local __op = ____id10[1]
  local ____id111 = cut(____id10, 1)
  local __a1 = ____id111[1]
  local __b2 = ____id111[2]
  local ____id12 = op_delims(form, __a1)
  local __ao = ____id12[1]
  local __ac = ____id12[2]
  local ____id13 = op_delims(form, __b2, {_stash = true, right = true})
  local __bo = ____id13[1]
  local __bc = ____id13[2]
  local __a2 = compile(__a1)
  local __b3 = compile(__b2)
  local __op1 = getop(__op)
  if unary63(form) then
    return __op1 .. __ao .. " " .. __a2 .. __ac
  else
    return __ao .. __a2 .. __ac .. " " .. __op1 .. " " .. __bo .. __b3 .. __bc
  end
end
function compile_function(args, body, ...)
  local ____r64 = unstash({...})
  local __args4 = destash33(args, ____r64)
  local __body3 = destash33(body, ____r64)
  local ____id14 = ____r64
  local __name3 = ____id14.name
  local __prefix = ____id14.prefix
  local __e37
  if __name3 then
    __e37 = compile(__name3)
  else
    __e37 = ""
  end
  local __id15 = __e37
  local __e38
  if target == "lua" and __args4.rest then
    __e38 = join(__args4, {"|...|"})
  else
    __e38 = __args4
  end
  local __args13 = __e38
  local __args5 = compile_args(__args13)
  indent_level = indent_level + 1
  local ____x87 = compile(__body3, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __body4 = ____x87
  local __ind = indentation()
  local __e39
  if __prefix then
    __e39 = __prefix .. " "
  else
    __e39 = ""
  end
  local __p = __e39
  local __e40
  if target == "js" then
    __e40 = ""
  else
    __e40 = "end"
  end
  local __tr1 = __e40
  if __name3 then
    __tr1 = __tr1 .. "\n"
  end
  if target == "js" then
    return "function " .. __id15 .. __args5 .. " {\n" .. __body4 .. __ind .. "}" .. __tr1
  else
    return __p .. "function " .. __id15 .. __args5 .. "\n" .. __body4 .. __ind .. __tr1
  end
end
_G.compile_function = compile_function
local function can_return63(form)
  return is63(form) and (atom63(form) or not( hd(form) == "return") and not statement63(hd(form)))
end
function compile(form, ...)
  local ____r66 = unstash({...})
  local __form = destash33(form, ____r66)
  local ____id16 = ____r66
  local __stmt1 = ____id16.stmt
  if nil63(__form) then
    return ""
  else
    if special_form63(__form) then
      return compile_special(__form, __stmt1)
    else
      local __tr2 = terminator(__stmt1)
      local __e41
      if __stmt1 then
        __e41 = indentation()
      else
        __e41 = ""
      end
      local __ind1 = __e41
      local __e42
      if atom63(__form) then
        __e42 = compile_atom(__form)
      else
        local __e43
        if infix63(hd(__form)) then
          __e43 = compile_infix(__form)
        else
          __e43 = compile_call(__form)
        end
        __e42 = __e43
      end
      local __form1 = __e42
      return __ind1 .. __form1 .. __tr2
    end
  end
end
_G.compile = compile
local function lower_statement(form, tail63)
  local __hoist = {}
  local __e = lower(form, __hoist, true, tail63)
  local __e44
  if some63(__hoist) and is63(__e) then
    __e44 = join({"do"}, __hoist, {__e})
  else
    local __e45
    if is63(__e) then
      __e45 = __e
    else
      local __e46
      if _35(__hoist) > 1 then
        __e46 = join({"do"}, __hoist)
      else
        __e46 = hd(__hoist)
      end
      __e45 = __e46
    end
    __e44 = __e45
  end
  return either(__e44, {"do"})
end
local function lower_body(body, tail63)
  return lower_statement(join({"do"}, body), tail63)
end
function literal63(form)
  return not atom63(form) and (hd(form) == "%array" or hd(form) == "%object")
end
_G.literal63 = literal63
local function standalone63(form)
  return not atom63(form) and not infix63(hd(form)) and not literal63(form) and not( "get" == hd(form)) and not( "%statement" == hd(form)) or id_literal63(form)
end
local function lower_do(args, hoist, stmt63, tail63)
  local ____x94 = almost(args)
  local ____i17 = 0
  while ____i17 < _35(____x94) do
    local __x95 = ____x94[____i17 + 1]
    local ____y = lower(__x95, hoist, stmt63)
    if yes(____y) then
      local __e1 = ____y
      if standalone63(__e1) then
        add(hoist, __e1)
      end
    end
    ____i17 = ____i17 + 1
  end
  local __e2 = lower(last(args), hoist, stmt63, tail63)
  if tail63 and can_return63(__e2) then
    return {"return", __e2}
  else
    return __e2
  end
end
local function lower_set(args, hoist, stmt63, tail63)
  local ____id17 = args
  local __lh = ____id17[1]
  local __rh = ____id17[2]
  add(hoist, {"%set", lower(__lh, hoist), lower(__rh, hoist)})
  if not( stmt63 and not tail63) then
    return __lh
  end
end
local function lower_if(args, hoist, stmt63, tail63)
  local ____id18 = args
  local __cond = ____id18[1]
  local ___then = ____id18[2]
  local ___else = ____id18[3]
  if stmt63 then
    local __e48
    if is63(___else) then
      __e48 = {lower_body({___else}, tail63)}
    end
    return add(hoist, join({"%if", lower(__cond, hoist), lower_body({___then}, tail63)}, __e48))
  else
    local __e3 = unique("e")
    add(hoist, {"%local", __e3})
    local __e47
    if is63(___else) then
      __e47 = {lower({"%set", __e3, ___else})}
    end
    add(hoist, join({"%if", lower(__cond, hoist), lower({"%set", __e3, ___then})}, __e47))
    return __e3
  end
end
local function lower_short(x, args, hoist)
  local ____id19 = args
  local __a3 = ____id19[1]
  local __b4 = ____id19[2]
  local __hoist1 = {}
  local __b11 = lower(__b4, __hoist1)
  if some63(__hoist1) then
    local __id20 = unique("id")
    local __e49
    if x == "and" then
      __e49 = {"%if", __id20, __b4, __id20}
    else
      __e49 = {"%if", __id20, __id20, __b4}
    end
    return lower({"do", {"%local", __id20, __a3}, __e49}, hoist)
  else
    return {x, lower(__a3, hoist), __b11}
  end
end
local function lower_try(args, hoist, tail63)
  return add(hoist, {"%try", lower_body(args, tail63)})
end
local function lower_while(args, hoist)
  local ____id21 = args
  local __c4 = ____id21[1]
  local __body5 = cut(____id21, 1)
  local __pre = {}
  local __c5 = lower(__c4, __pre)
  local __e50
  if none63(__pre) then
    __e50 = {"while", __c5, lower_body(__body5)}
  else
    __e50 = {"while", true, join({"do"}, __pre, {{"%if", {"not", __c5}, {"break"}}, lower_body(__body5)})}
  end
  return add(hoist, __e50)
end
local function lower_for(args, hoist)
  local ____id22 = args
  local __t = ____id22[1]
  local __k7 = ____id22[2]
  local __body6 = cut(____id22, 2)
  return add(hoist, {"%for", lower(__t, hoist), __k7, lower_body(__body6)})
end
local function lower_function(args)
  local ____id23 = args
  local __a4 = ____id23[1]
  local __body7 = cut(____id23, 1)
  return {"%function", __a4, lower_body(__body7, true)}
end
local function lower_definition(kind, args, hoist)
  local ____id24 = args
  local __name4 = ____id24[1]
  local __args6 = ____id24[2]
  local __body8 = cut(____id24, 2)
  return add(hoist, {kind, __name4, __args6, lower_body(__body8, true)})
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
    local __e4 = {}
    local ____id25 = form
    local __x124 = ____id25[1]
    local __args7 = cut(____id25, 1)
    reduce(function (a, b)
      add(__e4, {__x124, a, b})
      return a
    end, __args7)
    return join({"and"}, reverse(__e4))
  else
    return form
  end
end
local function lower_infix63(form)
  return infix63(hd(form)) and _35(form) > 3
end
local function lower_infix(form, hoist)
  local __form3 = lower_pairwise(form)
  local ____id26 = __form3
  local __x127 = ____id26[1]
  local __args8 = cut(____id26, 1)
  return lower(reduce(function (a, b)
    return {__x127, b, a}
  end, reverse(__args8)), hoist)
end
local function lower_special(form, hoist)
  local __e5 = lower_call(form, hoist)
  if __e5 then
    return add(hoist, __e5)
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
          local ____id27 = form
          local __x130 = ____id27[1]
          local __args9 = cut(____id27, 1)
          if __x130 == "do" then
            return lower_do(__args9, hoist, stmt63, tail63)
          else
            if __x130 == "%call" then
              return lower(__args9, hoist, stmt63, tail63)
            else
              if __x130 == "%set" then
                return lower_set(__args9, hoist, stmt63, tail63)
              else
                if __x130 == "%if" then
                  return lower_if(__args9, hoist, stmt63, tail63)
                else
                  if __x130 == "%try" then
                    return lower_try(__args9, hoist, tail63)
                  else
                    if __x130 == "while" then
                      return lower_while(__args9, hoist)
                    else
                      if __x130 == "%for" then
                        return lower_for(__args9, hoist)
                      else
                        if __x130 == "%function" then
                          return lower_function(__args9)
                        else
                          if __x130 == "%local-function" or __x130 == "%global-function" then
                            return lower_definition(__x130, __args9, hoist)
                          else
                            if in63(__x130, {"and", "or"}) then
                              return lower_short(__x130, __args9, hoist)
                            else
                              if statement63(__x130) then
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
_37result = nil
_G._37result = _37result
function _eval(form)
  local __previous = target
  target = "lua"
  local __code = compile(expand({"set", "%result", form}))
  target = __previous
  run(__code)
  return _37result
end
_G._eval = _eval
function immediate_call63(x)
  return obj63(x) and obj63(hd(x)) and hd(hd(x)) == "%function"
end
_G.immediate_call63 = immediate_call63
setenv("do", {_stash = true, special = function (...)
  local __forms1 = unstash({...})
  local __s3 = ""
  local ____x136 = __forms1
  local ____i19 = 0
  while ____i19 < _35(____x136) do
    local __x137 = ____x136[____i19 + 1]
    if target == "lua" and immediate_call63(__x137) and "\n" == char(__s3, edge(__s3)) then
      __s3 = clip(__s3, 0, edge(__s3)) .. ";\n"
    end
    __s3 = __s3 .. compile(__x137, {_stash = true, stmt = true})
    if not atom63(__x137) then
      if hd(__x137) == "return" or hd(__x137) == "break" then
        break
      end
    end
    ____i19 = ____i19 + 1
  end
  return __s3
end, stmt = true, tr = true})
setenv("%if", {_stash = true, special = function (cond, cons, alt)
  local __cond2 = compile(cond)
  indent_level = indent_level + 1
  local ____x140 = compile(cons, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __cons1 = ____x140
  local __e51
  if alt then
    indent_level = indent_level + 1
    local ____x141 = compile(alt, {_stash = true, stmt = true})
    indent_level = indent_level - 1
    __e51 = ____x141
  end
  local __alt1 = __e51
  local __ind3 = indentation()
  local __s5 = ""
  if target == "js" then
    __s5 = __s5 .. __ind3 .. "if (" .. __cond2 .. ") {\n" .. __cons1 .. __ind3 .. "}"
  else
    __s5 = __s5 .. __ind3 .. "if " .. __cond2 .. " then\n" .. __cons1
  end
  if __alt1 and target == "js" then
    __s5 = __s5 .. " else {\n" .. __alt1 .. __ind3 .. "}"
  else
    if __alt1 then
      __s5 = __s5 .. __ind3 .. "else\n" .. __alt1
    end
  end
  if target == "lua" then
    return __s5 .. __ind3 .. "end\n"
  else
    return __s5 .. "\n"
  end
end, stmt = true, tr = true})
setenv("while", {_stash = true, special = function (cond, form)
  local __cond4 = compile(cond)
  indent_level = indent_level + 1
  local ____x143 = compile(form, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __body10 = ____x143
  local __ind5 = indentation()
  if target == "js" then
    return __ind5 .. "while (" .. __cond4 .. ") {\n" .. __body10 .. __ind5 .. "}\n"
  else
    return __ind5 .. "while " .. __cond4 .. " do\n" .. __body10 .. __ind5 .. "end\n"
  end
end, stmt = true, tr = true})
setenv("%for", {_stash = true, special = function (t, k, form)
  local __t2 = compile(t)
  local __ind7 = indentation()
  indent_level = indent_level + 1
  local ____x145 = compile(form, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __body12 = ____x145
  if target == "lua" then
    return __ind7 .. "for " .. k .. " in next, " .. __t2 .. " do\n" .. __body12 .. __ind7 .. "end\n"
  else
    return __ind7 .. "for (" .. k .. " in " .. __t2 .. ") {\n" .. __body12 .. __ind7 .. "}\n"
  end
end, stmt = true, tr = true})
setenv("%try", {_stash = true, special = function (form)
  local __e8 = unique("e")
  local __ind9 = indentation()
  indent_level = indent_level + 1
  local ____x150 = compile(form, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __body14 = ____x150
  local __hf1 = {"return", {"%array", false, __e8}}
  indent_level = indent_level + 1
  local ____x153 = compile(__hf1, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __h1 = ____x153
  return __ind9 .. "try {\n" .. __body14 .. __ind9 .. "}\n" .. __ind9 .. "catch (" .. __e8 .. ") {\n" .. __h1 .. __ind9 .. "}\n"
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
  if target == "lua" then
    local __x157 = compile_function(args, body, {_stash = true, name = name})
    return indentation() .. __x157
  else
    return compile({"%set", name, {"%function", args, body}}, {_stash = true, stmt = true})
  end
end, stmt = true, tr = true})
setenv("%local-function", {_stash = true, special = function (name, args, body)
  if target == "lua" then
    local __x163 = compile_function(args, body, {_stash = true, name = name, prefix = "local"})
    return indentation() .. __x163
  else
    return compile({"%local", name, {"%function", args, body}}, {_stash = true, stmt = true})
  end
end, stmt = true, tr = true})
setenv("return", {_stash = true, special = function (x)
  local __e52
  if nil63(x) then
    __e52 = "return"
  else
    __e52 = "return " .. compile(x)
  end
  local __x167 = __e52
  return indentation() .. __x167
end, stmt = true})
setenv("new", {_stash = true, special = function (x)
  return "new " .. compile(x)
end})
setenv("typeof", {_stash = true, special = function (x)
  return "typeof(" .. compile(x) .. ")"
end})
setenv("error", {_stash = true, special = function (x)
  local __e53
  if target == "js" then
    __e53 = "throw " .. compile({"new", {"Error", x}})
  else
    __e53 = "error(" .. compile(x) .. ")"
  end
  local __e12 = __e53
  return indentation() .. __e12
end, stmt = true})
setenv("%local", {_stash = true, special = function (name, value)
  local __id29 = compile(name)
  local __value11 = compile(value)
  local __e54
  if is63(value) then
    __e54 = " = " .. __value11
  else
    __e54 = ""
  end
  local __rh2 = __e54
  local __e55
  if target == "js" then
    __e55 = "var "
  else
    __e55 = "local "
  end
  local __keyword1 = __e55
  local __ind11 = indentation()
  return __ind11 .. __keyword1 .. __id29 .. __rh2
end, stmt = true})
setenv("%set", {_stash = true, special = function (lh, rh)
  local __lh2 = compile(lh)
  local __e56
  if nil63(rh) then
    __e56 = "nil"
  else
    __e56 = rh
  end
  local __rh4 = compile(__e56)
  return indentation() .. __lh2 .. " = " .. __rh4
end, stmt = true})
setenv("get", {_stash = true, special = function (t, k)
  local __t12 = compile(t)
  local __k12 = compile(k)
  if target == "lua" and char(__t12, 0) == "{" or infix_operator63(t) then
    __t12 = "(" .. __t12 .. ")"
  end
  if string_literal63(k) and valid_id63(inner(k)) then
    return __t12 .. "." .. inner(k)
  else
    return __t12 .. "[" .. __k12 .. "]"
  end
end})
setenv("%get", {_stash = true, special = function (t)
  return "[" .. compile(t) .. "]"
end})
setenv("%at", {_stash = true, special = function (t)
  local __e57
  if target == "lua" and number63(t) then
    t = t + 1
    __e57 = t
  else
    local __e58
    if target == "lua" then
      __e58 = {"+", t, 1}
    else
      __e58 = t
    end
    __e57 = __e58
  end
  local __t14 = __e57
  return compile({"%get", __t14})
end})
setenv("%array", {_stash = true, special = function (...)
  local __forms3 = unstash({...})
  local __e59
  if target == "lua" then
    __e59 = "{"
  else
    __e59 = "["
  end
  local __open1 = __e59
  local __e60
  if target == "lua" then
    __e60 = "}"
  else
    __e60 = "]"
  end
  local __close1 = __e60
  local __s7 = ""
  local __c7 = ""
  local ____o10 = __forms3
  local __k10 = nil
  for __k10 in next, ____o10 do
    local __v9 = ____o10[__k10]
    if number63(__k10) then
      __s7 = __s7 .. __c7 .. compile(__v9)
      __c7 = ", "
    end
  end
  return __open1 .. __s7 .. __close1
end})
setenv("%object", {_stash = true, special = function (...)
  local __forms5 = unstash({...})
  local __s9 = "{"
  local __c9 = ""
  local __e61
  if target == "lua" then
    __e61 = " = "
  else
    __e61 = ": "
  end
  local __sep2 = __e61
  local ____x179 = pair(__forms5)
  local ____i23 = 0
  while ____i23 < _35(____x179) do
    local ____id31 = ____x179[____i23 + 1]
    local __k121 = ____id31[1]
    local __v11 = ____id31[2]
    __s9 = __s9 .. __c9 .. key(compile(__k121)) .. __sep2 .. compile(__v11)
    __c9 = ", "
    ____i23 = ____i23 + 1
  end
  return __s9 .. "}"
end})
setenv("%literal", {_stash = true, special = function (...)
  local __args111 = unstash({...})
  local __s111 = ""
  local ____x183 = __args111
  local ____i25 = 0
  while ____i25 < _35(____x183) do
    local __x184 = ____x183[____i25 + 1]
    if string_literal63(__x184) then
      __s111 = __s111 .. _eval(__x184)
    else
      __s111 = __s111 .. compile(__x184)
    end
    ____i25 = ____i25 + 1
  end
  return __s111
end})
setenv("%statement", {_stash = true, special = function (...)
  local __args131 = unstash({...})
  local __s13 = indentation()
  local ____x188 = __args131
  local ____i27 = 0
  while ____i27 < _35(____x188) do
    local __x189 = ____x188[____i27 + 1]
    if string_literal63(__x189) then
      __s13 = __s13 .. _eval(__x189)
    else
      __s13 = __s13 .. compile(__x189)
    end
    ____i27 = ____i27 + 1
  end
  __s13 = __s13 .. "\n"
  return __s13
end, stmt = true, tr = true})
setenv("%indentation", {_stash = true, special = function ()
  return indentation()
end})
local exports = exports or {}
exports.run = run
exports._eval = _eval
exports.expand = expand
exports.compile = compile
return exports
