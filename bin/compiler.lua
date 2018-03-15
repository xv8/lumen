function getenv(k, p, scoped63, ...)
  local ____r = unstash({...})
  local __k = destash33(k, ____r)
  local __p = destash33(p, ____r)
  local __scoped63 = destash33(scoped63, ____r)
  local ____id = ____r
  local __env = ____id.environment
  if string63(__k) then
    local __env1 = __env or environment
    local __i = edge(__env1)
    while __i >= 0 do
      local __b = __env1[__i + 1][__k]
      if __scoped63 and __b._scope then
        break
      else
        if is63(__b) then
          local __e20
          if __p then
            __e20 = __b[__p]
          else
            __e20 = __b
          end
          return __e20
        else
          __i = __i - 1
        end
      end
    end
  end
end
_G.getenv = getenv
function macro_function(k, env)
  return getenv(k, "macro", {_stash = true, environment = env})
end
_G.macro_function = macro_function
function macro63(k, env)
  return is63(macro_function(k, env))
end
_G.macro63 = macro63
function special63(k, env)
  return is63(getenv(k, "special", {_stash = true, environment = env}))
end
_G.special63 = special63
function special_form63(form, env)
  return not atom63(form) and special63(hd(form), env)
end
_G.special_form63 = special_form63
function statement63(k, env)
  return special63(k) and getenv(k, "stmt", {_stash = true, environment = env})
end
_G.statement63 = statement63
function symbol_expansion(k, env)
  return getenv(k, "symbol", {_stash = true, environment = env})
end
_G.symbol_expansion = symbol_expansion
function symbol63(k, env)
  return is63(symbol_expansion(k, env))
end
_G.symbol63 = symbol63
function variable63(k, env)
  return is63(getenv(k, "variable", {_stash = true, environment = env}))
end
_G.variable63 = variable63
function bound63(x, env)
  return macro63(x, env) or special63(x, env) or symbol63(x, env) or variable63(x, env)
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
function literal(s)
  if string_literal63(s) then
    return s
  else
    return quoted(s)
  end
end
_G.literal = literal
function stash42(args)
  if keys63(args) then
    local __l = {"%object", "\"_stash\"", true}
    local ____o351 = args
    local __k1 = nil
    for __k1 in next, ____o351 do
      local __v = ____o351[__k1]
      if not number63(__k1) then
        add(__l, literal(__k1))
        add(__l, __v)
      end
    end
    return join(args, {__l})
  else
    return args
  end
end
_G.stash42 = stash42
function bias(k)
  if number63(k) and not( target == "lua") then
    if target == "js" then
      k = k - 1
    else
      k = k + 1
    end
  end
  return k
end
_G.bias = bias
function bind(lh, rh)
  if atom63(lh) then
    return {lh, rh}
  else
    local __id1 = unique("id")
    local __bs = {__id1, rh}
    local ____o3511 = lh
    local __k2 = nil
    for __k2 in next, ____o3511 do
      local __v1 = ____o3511[__k2]
      local __e21
      if __k2 == "rest" then
        __e21 = {"cut", __id1, _35(lh)}
      else
        __e21 = {"get", __id1, {"quote", bias(__k2)}}
      end
      local __x6 = __e21
      if is63(__k2) then
        local __e22
        if __v1 == true then
          __e22 = __k2
        else
          __e22 = __v1
        end
        local __k3 = __e22
        __bs = join(__bs, bind(__k3, __x6))
      end
    end
    return __bs
  end
end
_G.bind = bind
setenv("arguments%", {_stash = true, macro = function (from)
  return {{"get", {"get", {"get", "Array", {"quote", "prototype"}}, {"quote", "slice"}}, {"quote", "call"}}, "arguments", from}
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
    local ____o3512 = args
    local __k4 = nil
    for __k4 in next, ____o3512 do
      local __v2 = ____o3512[__k4]
      if number63(__k4) then
        if atom63(__v2) then
          add(__args1, __v2)
        else
          local __x31 = unique("x")
          add(__args1, __x31)
          __bs1 = join(__bs1, {__v2, __x31})
        end
      end
    end
    if keys63(args) then
      __bs1 = join(__bs1, {__r19, rest()})
      local __n = _35(__args1)
      local __i1 = 0
      while __i1 < __n do
        local __v3 = __args1[__i1 + 1]
        __bs1 = join(__bs1, {__v3, {"destash!", __v3, __r19}})
        __i1 = __i1 + 1
      end
      __bs1 = join(__bs1, {keys(args), __r19})
    end
    return {__args1, join({"let", __bs1}, body)}
  end
end
_G.bind42 = bind42
function quoting63(depth)
  return number63(depth)
end
_G.quoting63 = quoting63
function quasiquoting63(depth)
  return quoting63(depth) and depth > 0
end
_G.quasiquoting63 = quasiquoting63
function can_unquote63(depth)
  return quoting63(depth) and depth == 1
end
_G.can_unquote63 = can_unquote63
function quasisplice63(x, depth)
  return can_unquote63(depth) and not atom63(x) and hd(x) == "unquote-splicing"
end
_G.quasisplice63 = quasisplice63
function expand_local(__x39, env)
  local ____id2 = __x39
  local __x40 = ____id2[1]
  local __name = ____id2[2]
  local __value = ____id2[3]
  setenv(__name, {_stash = true, variable = true, environment = env})
  return {"%local", __name, macroexpand(__value, env)}
end
_G.expand_local = expand_local
function expand_function(__x42, env)
  local ____id3 = __x42
  local __x43 = ____id3[1]
  local __args = ____id3[2]
  local __body = cut(____id3, 2)
  add(env or environment, {_scope = true})
  local ____o3513 = __args
  local ____i351 = nil
  for ____i351 in next, ____o3513 do
    local ____x356 = ____o3513[____i351]
    setenv(____x356, {_stash = true, variable = true, environment = env or environment})
  end
  local ____x352 = join({"%function", __args}, macroexpand(__body, env))
  drop(env or environment)
  return ____x352
end
_G.expand_function = expand_function
function expand_definition(__x45, env)
  local ____id4 = __x45
  local __x46 = ____id4[1]
  local __name1 = ____id4[2]
  local __args11 = ____id4[3]
  local __body1 = cut(____id4, 3)
  add(env or environment, {_scope = true})
  local ____o3514 = __args11
  local ____i3511 = nil
  for ____i3511 in next, ____o3514 do
    local ____x3561 = ____o3514[____i3511]
    setenv(____x3561, {_stash = true, variable = true, environment = env or environment})
  end
  local ____x3521 = join({__x46, __name1, __args11}, macroexpand(__body1, env))
  drop(env or environment)
  return ____x3521
end
_G.expand_definition = expand_definition
function expand_macro(form, env)
  return macroexpand(expand1(form, env), env)
end
_G.expand_macro = expand_macro
function expand1(__x48, env)
  local ____id5 = __x48
  local __name2 = ____id5[1]
  local __body2 = cut(____id5, 1)
  return apply(macro_function(__name2, env), __body2)
end
_G.expand1 = expand1
function macroexpand(form, env)
  if symbol63(form, env) then
    return macroexpand(symbol_expansion(form, env), env)
  else
    if atom63(form) then
      return form
    else
      local __x49 = hd(form)
      if __x49 == "%local" then
        return expand_local(form, env)
      else
        if __x49 == "%function" then
          return expand_function(form, env)
        else
          if __x49 == "%global-function" then
            return expand_definition(form, env)
          else
            if __x49 == "%local-function" then
              return expand_definition(form, env)
            else
              if macro63(__x49, env) then
                return expand_macro(form, env)
              else
                return map(function (x)
                  return macroexpand(x, env)
                end, form)
              end
            end
          end
        end
      end
    end
  end
end
_G.macroexpand = macroexpand
quasiquote_environment = {{}}
_G.quasiquote_environment = quasiquote_environment
function quasiquote_list(form, depth, env)
  local __xs = {{"list"}}
  local ____o3515 = form
  local __k5 = nil
  for __k5 in next, ____o3515 do
    local __v4 = ____o3515[__k5]
    if not number63(__k5) then
      local __e23
      if quasisplice63(__v4, depth) then
        __e23 = quasiexpand(__v4[2], 0, env)
      else
        __e23 = quasiexpand(__v4, depth, env)
      end
      local __v5 = __e23
      last(__xs)[__k5] = __v5
    end
  end
  local ____x358 = form
  local ____i353 = 0
  while ____i353 < _35(____x358) do
    local __x53 = ____x358[____i353 + 1]
    if quasisplice63(__x53, depth) then
      local __x54 = quasiexpand(__x53[2], 0, env)
      add(__xs, __x54)
      add(__xs, {"list"})
    else
      add(last(__xs), quasiexpand(__x53, depth, env))
    end
    ____i353 = ____i353 + 1
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
_G.quasiquote_list = quasiquote_list
function resolve_id(form, depth, env)
  if scoped_id63(form) then
    local __id6 = form .. "_" .. (depth or 0)
    if not (last(env or environment)[form] or {}).symbol then
      setenv(form, {_stash = true, symbol = unique(form), environment = env})
    end
    return symbol_expansion(form, env)
  else
    return form
  end
end
_G.resolve_id = resolve_id
function quasiexpand(form, depth, env)
  if quasiquoting63(depth) then
    if atom63(form) then
      return {"quote", resolve_id(form, depth, env)}
    else
      if can_unquote63(depth) and hd(form) == "unquote" then
        return quasiexpand(form[2], 0, env)
      else
        if hd(form) == "unquote" or hd(form) == "unquote-splicing" then
          local ____e351 = drop(quasiquote_environment or environment)
          local ____x354 = quasiquote_list(form, depth - 1, env)
          add(quasiquote_environment or environment, ____e351)
          return ____x354
        else
          if hd(form) == "quasiquote" then
            add(quasiquote_environment or environment, {_scope = true})
            local ____x3522 = quasiquote_list(form, depth + 1, env)
            drop(quasiquote_environment or environment)
            return ____x3522
          else
            return quasiquote_list(form, depth, env)
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
          return quasiexpand(form[2], 1, env)
        else
          return map(function (x)
            return quasiexpand(x, depth, env)
          end, form)
        end
      end
    end
  end
end
_G.quasiexpand = quasiexpand
function expand_if(__x58)
  local ____id7 = __x58
  local __a = ____id7[1]
  local __b1 = ____id7[2]
  local __c = cut(____id7, 2)
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
  local __i2 = 0
  while __i2 < indent_level do
    __s = __s .. "  "
    __i2 = __i2 + 1
  end
  return __s
end
_G.indentation = indentation
reserved = {["="] = true, ["=="] = true, ["+"] = true, ["-"] = true, ["%"] = true, ["*"] = true, ["/"] = true, ["<"] = true, [">"] = true, ["<="] = true, [">="] = true, ["break"] = true, ["case"] = true, ["catch"] = true, ["class"] = true, ["const"] = true, ["continue"] = true, ["debugger"] = true, ["default"] = true, ["delete"] = true, ["do"] = true, ["else"] = true, ["eval"] = true, ["finally"] = true, ["for"] = true, ["function"] = true, ["if"] = true, ["import"] = true, ["in"] = true, ["instanceof"] = true, ["let"] = true, ["new"] = true, ["return"] = true, ["switch"] = true, ["throw"] = true, ["try"] = true, ["typeof"] = true, ["var"] = true, ["void"] = true, ["with"] = true, ["and"] = true, ["end"] = true, ["load"] = true, ["repeat"] = true, ["while"] = true, ["false"] = true, ["local"] = true, ["nil"] = true, ["then"] = true, ["not"] = true, ["true"] = true, ["elseif"] = true, ["or"] = true, ["until"] = true}
_G.reserved = reserved
function reserved63(x)
  return has63(reserved, x)
end
_G.reserved63 = reserved63
function valid_code63(n)
  return number_code63(n) or n > 64 and n < 91 or n > 96 and n < 123 or n == 95
end
_G.valid_code63 = valid_code63
function id(id)
  local __e24
  if number_code63(code(id, 0)) then
    __e24 = "_"
  else
    __e24 = ""
  end
  local __id11 = __e24
  local __i3 = 0
  while __i3 < _35(id) do
    local __c1 = char(id, __i3)
    local __n1 = code(__c1)
    local __e25
    if __c1 == "-" and not( id == "-") then
      __e25 = "_"
    else
      local __e26
      if valid_code63(__n1) then
        __e26 = __c1
      else
        local __e27
        if __i3 == 0 then
          __e27 = "_" .. __n1
        else
          __e27 = __n1
        end
        __e26 = __e27
      end
      __e25 = __e26
    end
    local __c11 = __e25
    __id11 = __id11 .. __c11
    __i3 = __i3 + 1
  end
  if reserved63(__id11) then
    return "_" .. __id11
  else
    return __id11
  end
end
_G.id = id
function valid_id63(x)
  return some63(x) and x == id(x)
end
_G.valid_id63 = valid_id63
local __names = {}
function unique(x)
  local __x62 = id(x)
  if __names[__x62] then
    local __i4 = __names[__x62]
    __names[__x62] = __names[__x62] + 1
    return unique(__x62 .. __i4)
  else
    __names[__x62] = 1
    return "__" .. __x62
  end
end
_G.unique = unique
function key(k)
  if string_literal63(k) then
    local __i5 = inner(k)
    if valid_id63(__i5) then
      return __i5
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
  local __o = {}
  local ____o3516 = t
  local __k6 = nil
  for __k6 in next, ____o3516 do
    local __v6 = ____o3516[__k6]
    local __x63 = f(__v6)
    if is63(__x63) then
      add(__o, literal(__k6))
      add(__o, __x63)
    end
  end
  return __o
end
_G.mapo = mapo
local ____x65 = {}
local ____x66 = {}
____x66.js = "!"
____x66.lua = "not"
____x65["not"] = ____x66
local ____x67 = {}
____x67["*"] = true
____x67["/"] = true
____x67["%"] = true
local ____x68 = {}
local ____x69 = {}
____x69.js = "+"
____x69.lua = ".."
____x68.cat = ____x69
local ____x70 = {}
____x70["+"] = true
____x70["-"] = true
local ____x71 = {}
____x71["<"] = true
____x71[">"] = true
____x71["<="] = true
____x71[">="] = true
local ____x72 = {}
local ____x73 = {}
____x73.js = "==="
____x73.lua = "=="
____x72["="] = ____x73
local ____x74 = {}
local ____x75 = {}
____x75.js = "&&"
____x75.lua = "and"
____x74["and"] = ____x75
local ____x76 = {}
local ____x77 = {}
____x77.js = "||"
____x77.lua = "or"
____x76["or"] = ____x77
infix = {____x65, ____x67, ____x68, ____x70, ____x71, ____x72, ____x74, ____x76}
_G.infix = infix
function unary63(form)
  return two63(form) and in63(hd(form), {"not", "-"})
end
_G.unary63 = unary63
function index(k)
  if number63(k) then
    return k - 1
  end
end
_G.index = index
function precedence(form)
  if not( atom63(form) or unary63(form)) then
    local ____o3517 = infix
    local __k7 = nil
    for __k7 in next, ____o3517 do
      local __v7 = ____o3517[__k7]
      if __v7[hd(form)] then
        return index(__k7)
      end
    end
  end
  return 0
end
_G.precedence = precedence
function getop(op)
  return find(function (level)
    local __x79 = level[op]
    if __x79 == true then
      return op
    else
      if is63(__x79) then
        return __x79[target]
      end
    end
  end, infix)
end
_G.getop = getop
function infix63(x)
  return is63(getop(x))
end
_G.infix63 = infix63
function infix_operator63(x)
  return obj63(x) and infix63(hd(x))
end
_G.infix_operator63 = infix_operator63
function compile_args(args)
  local __s1 = "("
  local __c2 = ""
  local ____x3581 = args
  local ____i3531 = 0
  while ____i3531 < _35(____x3581) do
    local __x80 = ____x3581[____i3531 + 1]
    __s1 = __s1 .. __c2 .. compile(__x80)
    __c2 = ", "
    ____i3531 = ____i3531 + 1
  end
  return __s1 .. ")"
end
_G.compile_args = compile_args
function escape_newlines(s)
  local __s11 = ""
  local __i6 = 0
  while __i6 < _35(s) do
    local __c3 = char(s, __i6)
    local __e28
    if __c3 == "\n" then
      __e28 = "\\n"
    else
      local __e29
      if __c3 == "\r" then
        __e29 = "\\r"
      else
        __e29 = __c3
      end
      __e28 = __e29
    end
    __s11 = __s11 .. __e28
    __i6 = __i6 + 1
  end
  return __s11
end
_G.escape_newlines = escape_newlines
function compile_atom(x)
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
_G.compile_atom = compile_atom
function terminator(stmt63)
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
_G.terminator = terminator
function compile_special(form, stmt63)
  local ____id8 = form
  local __x81 = ____id8[1]
  local __args2 = cut(____id8, 1)
  local ____id9 = getenv(__x81)
  local __special = ____id9.special
  local __stmt = ____id9.stmt
  local __self_tr63 = ____id9.tr
  local __tr = terminator(stmt63 and not __self_tr63)
  return apply(__special, __args2) .. __tr
end
_G.compile_special = compile_special
function parenthesize_call63(x)
  return not atom63(x) and hd(x) == "%function" or precedence(x) > 0
end
_G.parenthesize_call63 = parenthesize_call63
function compile_call(form)
  local __f = hd(form)
  local __f1 = compile(__f)
  local __args3 = compile_args(stash42(tl(form)))
  if parenthesize_call63(__f) then
    return "(" .. __f1 .. ")" .. __args3
  else
    return __f1 .. __args3
  end
end
_G.compile_call = compile_call
function op_delims(parent, child, ...)
  local ____r59 = unstash({...})
  local __parent = destash33(parent, ____r59)
  local __child = destash33(child, ____r59)
  local ____id10 = ____r59
  local __right = ____id10.right
  local __e30
  if __right then
    __e30 = _6261
  else
    __e30 = _62
  end
  if __e30(precedence(__child), precedence(__parent)) then
    return {"(", ")"}
  else
    return {"", ""}
  end
end
_G.op_delims = op_delims
function compile_infix(form)
  local ____id111 = form
  local __op = ____id111[1]
  local ____id12 = cut(____id111, 1)
  local __a1 = ____id12[1]
  local __b2 = ____id12[2]
  local ____id13 = op_delims(form, __a1)
  local __ao = ____id13[1]
  local __ac = ____id13[2]
  local ____id14 = op_delims(form, __b2, {_stash = true, right = true})
  local __bo = ____id14[1]
  local __bc = ____id14[2]
  local __a2 = compile(__a1)
  local __b3 = compile(__b2)
  local __op1 = getop(__op)
  if unary63(form) then
    return __op1 .. __ao .. " " .. __a2 .. __ac
  else
    return __ao .. __a2 .. __ac .. " " .. __op1 .. " " .. __bo .. __b3 .. __bc
  end
end
_G.compile_infix = compile_infix
function compile_function(args, body, ...)
  local ____r61 = unstash({...})
  local __args4 = destash33(args, ____r61)
  local __body3 = destash33(body, ____r61)
  local ____id15 = ____r61
  local __name3 = ____id15.name
  local __prefix = ____id15.prefix
  local __e31
  if __name3 then
    __e31 = compile(__name3)
  else
    __e31 = ""
  end
  local __id16 = __e31
  local __e32
  if target == "lua" and __args4.rest then
    __e32 = join(__args4, {"|...|"})
  else
    __e32 = __args4
  end
  local __args12 = __e32
  local __args5 = compile_args(__args12)
  indent_level = indent_level + 1
  local ____x3510 = compile(__body3, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __body4 = ____x3510
  local __ind = indentation()
  local __e33
  if __prefix then
    __e33 = __prefix .. " "
  else
    __e33 = ""
  end
  local __p1 = __e33
  local __e34
  if target == "js" then
    __e34 = ""
  else
    __e34 = "end"
  end
  local __tr1 = __e34
  if __name3 then
    __tr1 = __tr1 .. "\n"
  end
  if target == "js" then
    return "function " .. __id16 .. __args5 .. " {\n" .. __body4 .. __ind .. "}" .. __tr1
  else
    return __p1 .. "function " .. __id16 .. __args5 .. "\n" .. __body4 .. __ind .. __tr1
  end
end
_G.compile_function = compile_function
function can_return63(form)
  return is63(form) and (atom63(form) or not( hd(form) == "return") and not statement63(hd(form)))
end
_G.can_return63 = can_return63
function compile(form, ...)
  local ____r63 = unstash({...})
  local __form = destash33(form, ____r63)
  local ____id17 = ____r63
  local __stmt1 = ____id17.stmt
  if nil63(__form) then
    return ""
  else
    if special_form63(__form) then
      return compile_special(__form, __stmt1)
    else
      local __tr2 = terminator(__stmt1)
      local __e35
      if __stmt1 then
        __e35 = indentation()
      else
        __e35 = ""
      end
      local __ind1 = __e35
      local __e36
      if atom63(__form) then
        __e36 = compile_atom(__form)
      else
        local __e37
        if infix63(hd(__form)) then
          __e37 = compile_infix(__form)
        else
          __e37 = compile_call(__form)
        end
        __e36 = __e37
      end
      local __form1 = __e36
      return __ind1 .. __form1 .. __tr2
    end
  end
end
_G.compile = compile
function lower_statement(form, tail63)
  local __hoist = {}
  local __e = lower(form, __hoist, true, tail63)
  local __e38
  if some63(__hoist) and is63(__e) then
    __e38 = join({"do"}, __hoist, {__e})
  else
    local __e39
    if is63(__e) then
      __e39 = __e
    else
      local __e40
      if _35(__hoist) > 1 then
        __e40 = join({"do"}, __hoist)
      else
        __e40 = hd(__hoist)
      end
      __e39 = __e40
    end
    __e38 = __e39
  end
  return either(__e38, {"do"})
end
_G.lower_statement = lower_statement
function lower_body(body, tail63)
  return lower_statement(join({"do"}, body), tail63)
end
_G.lower_body = lower_body
function literal63(form)
  return atom63(form) or hd(form) == "%array" or hd(form) == "%object"
end
_G.literal63 = literal63
function standalone63(form)
  return not atom63(form) and not infix63(hd(form)) and not literal63(form) and not( "get" == hd(form)) and not( "%statement" == hd(form)) or id_literal63(form)
end
_G.standalone63 = standalone63
function lower_do(args, hoist, stmt63, tail63)
  local ____x3582 = almost(args)
  local ____i3532 = 0
  while ____i3532 < _35(____x3582) do
    local __x93 = ____x3582[____i3532 + 1]
    local ____y351 = lower(__x93, hoist, stmt63)
    if yes(____y351) then
      local __e1 = ____y351
      if standalone63(__e1) then
        add(hoist, __e1)
      end
    end
    ____i3532 = ____i3532 + 1
  end
  local __e2 = lower(last(args), hoist, stmt63, tail63)
  if tail63 and can_return63(__e2) then
    return {"return", __e2}
  else
    return __e2
  end
end
_G.lower_do = lower_do
function lower_set(args, hoist, stmt63, tail63)
  local ____id18 = args
  local __lh = ____id18[1]
  local __rh = ____id18[2]
  add(hoist, {"%set", lower(__lh, hoist), lower(__rh, hoist)})
  if not( stmt63 and not tail63) then
    return __lh
  end
end
_G.lower_set = lower_set
function lower_if(args, hoist, stmt63, tail63)
  local ____id19 = args
  local __cond = ____id19[1]
  local ___then = ____id19[2]
  local ___else = ____id19[3]
  if stmt63 then
    local __e42
    if is63(___else) then
      __e42 = {lower_body({___else}, tail63)}
    end
    return add(hoist, join({"%if", lower(__cond, hoist), lower_body({___then}, tail63)}, __e42))
  else
    local __e3 = unique("e")
    add(hoist, {"%local", __e3})
    local __e41
    if is63(___else) then
      __e41 = {lower({"%set", __e3, ___else})}
    end
    add(hoist, join({"%if", lower(__cond, hoist), lower({"%set", __e3, ___then})}, __e41))
    return __e3
  end
end
_G.lower_if = lower_if
function lower_short(x, args, hoist)
  local ____id20 = args
  local __a3 = ____id20[1]
  local __b4 = ____id20[2]
  local __hoist1 = {}
  local __b11 = lower(__b4, __hoist1)
  if some63(__hoist1) then
    local __id21 = unique("id")
    local __e43
    if x == "and" then
      __e43 = {"%if", __id21, __b4, __id21}
    else
      __e43 = {"%if", __id21, __id21, __b4}
    end
    return lower({"do", {"%local", __id21, __a3}, __e43}, hoist)
  else
    return {x, lower(__a3, hoist), __b11}
  end
end
_G.lower_short = lower_short
function lower_try(args, hoist, tail63)
  return add(hoist, {"%try", lower_body(args, tail63)})
end
_G.lower_try = lower_try
function lower_while(args, hoist)
  local ____id22 = args
  local __c4 = ____id22[1]
  local __body5 = cut(____id22, 1)
  local __pre = {}
  local __c5 = lower(__c4, __pre)
  local __e44
  if none63(__pre) then
    __e44 = {"while", __c5, lower_body(__body5)}
  else
    __e44 = {"while", true, join({"do"}, __pre, {{"%if", {"not", __c5}, {"break"}}, lower_body(__body5)})}
  end
  return add(hoist, __e44)
end
_G.lower_while = lower_while
function lower_for(args, hoist)
  local ____id23 = args
  local __t = ____id23[1]
  local __k8 = ____id23[2]
  local __body6 = cut(____id23, 2)
  return add(hoist, {"%for", lower(__t, hoist), __k8, lower_body(__body6)})
end
_G.lower_for = lower_for
function lower_function(args)
  local ____id24 = args
  local __a4 = ____id24[1]
  local __body7 = cut(____id24, 1)
  return {"%function", __a4, lower_body(__body7, true)}
end
_G.lower_function = lower_function
function lower_definition(kind, args, hoist)
  local ____id25 = args
  local __name4 = ____id25[1]
  local __args6 = ____id25[2]
  local __body8 = cut(____id25, 2)
  return add(hoist, {kind, __name4, __args6, lower_body(__body8, true)})
end
_G.lower_definition = lower_definition
function lower_call(form, hoist)
  local __form2 = map(function (x)
    return lower(x, hoist)
  end, form)
  if some63(__form2) then
    return __form2
  end
end
_G.lower_call = lower_call
function pairwise63(form)
  return in63(hd(form), {"<", "<=", "=", ">=", ">"})
end
_G.pairwise63 = pairwise63
function lower_pairwise(form)
  if pairwise63(form) then
    local __e4 = {}
    local ____id26 = form
    local __x122 = ____id26[1]
    local __args7 = cut(____id26, 1)
    reduce(function (a, b)
      add(__e4, {__x122, a, b})
      return a
    end, __args7)
    return join({"and"}, reverse(__e4))
  else
    return form
  end
end
_G.lower_pairwise = lower_pairwise
function lower_infix63(form)
  return infix63(hd(form)) and _35(form) > 3
end
_G.lower_infix63 = lower_infix63
function lower_infix(form, hoist)
  local __form3 = lower_pairwise(form)
  local ____id27 = __form3
  local __x125 = ____id27[1]
  local __args8 = cut(____id27, 1)
  return lower(reduce(function (a, b)
    return {__x125, b, a}
  end, reverse(__args8)), hoist)
end
_G.lower_infix = lower_infix
function lower_special(form, hoist)
  local __e5 = lower_call(form, hoist)
  if __e5 then
    return add(hoist, __e5)
  end
end
_G.lower_special = lower_special
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
          local ____id28 = form
          local __x128 = ____id28[1]
          local __args9 = cut(____id28, 1)
          if __x128 == "do" then
            return lower_do(__args9, hoist, stmt63, tail63)
          else
            if __x128 == "%call" then
              return lower(__args9, hoist, stmt63, tail63)
            else
              if __x128 == "%set" then
                return lower_set(__args9, hoist, stmt63, tail63)
              else
                if __x128 == "%if" then
                  return lower_if(__args9, hoist, stmt63, tail63)
                else
                  if __x128 == "%try" then
                    return lower_try(__args9, hoist, tail63)
                  else
                    if __x128 == "while" then
                      return lower_while(__args9, hoist)
                    else
                      if __x128 == "%for" then
                        return lower_for(__args9, hoist)
                      else
                        if __x128 == "%function" then
                          return lower_function(__args9)
                        else
                          if __x128 == "%local-function" or __x128 == "%global-function" then
                            return lower_definition(__x128, __args9, hoist)
                          else
                            if in63(__x128, {"and", "or"}) then
                              return lower_short(__x128, __args9, hoist)
                            else
                              if statement63(__x128) then
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
function expand(form, env)
  if env then
    local __prev = environment
    environment = env
    local __x130 = expand(form, env)
    environment = __prev
    return __x130
  else
    return lower(macroexpand(form, env))
  end
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
function _eval(form, env)
  local __previous = target
  target = "lua"
  local __code = compile(expand({"set", "%result", form}, env))
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
  local ____x3584 = __forms1
  local ____i3534 = 0
  while ____i3534 < _35(____x3584) do
    local __x134 = ____x3584[____i3534 + 1]
    if target == "lua" and immediate_call63(__x134) and "\n" == char(__s3, edge(__s3)) then
      __s3 = clip(__s3, 0, edge(__s3)) .. ";\n"
    end
    __s3 = __s3 .. compile(__x134, {_stash = true, stmt = true})
    if not atom63(__x134) then
      if hd(__x134) == "return" or hd(__x134) == "break" then
        break
      end
    end
    ____i3534 = ____i3534 + 1
  end
  return __s3
end, stmt = true, tr = true})
setenv("%if", {_stash = true, special = function (cond, cons, alt)
  local __cond2 = compile(cond)
  indent_level = indent_level + 1
  local ____x35103 = compile(cons, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __cons1 = ____x35103
  local __e45
  if alt then
    indent_level = indent_level + 1
    local ____x35104 = compile(alt, {_stash = true, stmt = true})
    indent_level = indent_level - 1
    __e45 = ____x35104
  end
  local __alt1 = __e45
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
  local ____x35106 = compile(form, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __body10 = ____x35106
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
  local ____x35108 = compile(form, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __body12 = ____x35108
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
  local ____x351011 = compile(form, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __body14 = ____x351011
  local __hf1 = {"return", {"%array", false, __e8}}
  indent_level = indent_level + 1
  local ____x351012 = compile(__hf1, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __h1 = ____x351012
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
    local __x142 = compile_function(args, body, {_stash = true, name = name})
    return indentation() .. __x142
  else
    return compile({"%set", name, {"%function", args, body}}, {_stash = true, stmt = true})
  end
end, stmt = true, tr = true})
setenv("%local-function", {_stash = true, special = function (name, args, body)
  if target == "lua" then
    local __x148 = compile_function(args, body, {_stash = true, name = name, prefix = "local"})
    return indentation() .. __x148
  else
    return compile({"%local", name, {"%function", args, body}}, {_stash = true, stmt = true})
  end
end, stmt = true, tr = true})
setenv("return", {_stash = true, special = function (x)
  local __e46
  if nil63(x) then
    __e46 = "return"
  else
    __e46 = "return " .. compile(x)
  end
  local __x152 = __e46
  return indentation() .. __x152
end, stmt = true})
setenv("new", {_stash = true, special = function (x)
  return "new " .. compile(x)
end})
setenv("typeof", {_stash = true, special = function (x)
  return "typeof(" .. compile(x) .. ")"
end})
setenv("error", {_stash = true, special = function (x)
  local __e47
  if target == "js" then
    __e47 = "throw " .. compile({"new", {"Error", x}})
  else
    __e47 = "error(" .. compile(x) .. ")"
  end
  local __e12 = __e47
  return indentation() .. __e12
end, stmt = true})
setenv("%local", {_stash = true, special = function (name, value)
  local __id30 = compile(name)
  local __value11 = compile(value)
  local __e48
  if is63(value) then
    __e48 = " = " .. __value11
  else
    __e48 = ""
  end
  local __rh2 = __e48
  local __e49
  if target == "js" then
    __e49 = "var "
  else
    __e49 = "local "
  end
  local __keyword1 = __e49
  local __ind11 = indentation()
  return __ind11 .. __keyword1 .. __id30 .. __rh2
end, stmt = true})
setenv("%set", {_stash = true, special = function (lh, rh)
  local __lh2 = compile(lh)
  local __e50
  if nil63(rh) then
    __e50 = "nil"
  else
    __e50 = rh
  end
  local __rh4 = compile(__e50)
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
setenv("%array", {_stash = true, special = function (...)
  local __forms3 = unstash({...})
  local __e51
  if target == "lua" then
    __e51 = "{"
  else
    __e51 = "["
  end
  local __open1 = __e51
  local __e52
  if target == "lua" then
    __e52 = "}"
  else
    __e52 = "]"
  end
  local __close1 = __e52
  local __s7 = ""
  local __c7 = ""
  local ____o3519 = __forms3
  local __k111 = nil
  for __k111 in next, ____o3519 do
    local __v9 = ____o3519[__k111]
    if number63(__k111) then
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
  local __e53
  if target == "lua" then
    __e53 = " = "
  else
    __e53 = ": "
  end
  local __sep1 = __e53
  local ____x3586 = pair(__forms5)
  local ____i3536 = 0
  while ____i3536 < _35(____x3586) do
    local ____id32 = ____x3586[____i3536 + 1]
    local __k13 = ____id32[1]
    local __v11 = ____id32[2]
    __s9 = __s9 .. __c9 .. key(compile(__k13)) .. __sep1 .. compile(__v11)
    __c9 = ", "
    ____i3536 = ____i3536 + 1
  end
  return __s9 .. "}"
end})
setenv("%literal", {_stash = true, special = function (...)
  local __args111 = unstash({...})
  local __s111 = ""
  local ____x3588 = __args111
  local ____i3538 = 0
  while ____i3538 < _35(____x3588) do
    local __x161 = ____x3588[____i3538 + 1]
    if string_literal63(__x161) then
      __s111 = __s111 .. _eval(__x161)
    else
      __s111 = __s111 .. compile(__x161)
    end
    ____i3538 = ____i3538 + 1
  end
  return __s111
end})
setenv("%statement", {_stash = true, special = function (...)
  local __args13 = unstash({...})
  local __s13 = indentation()
  local ____x35810 = __args13
  local ____i35310 = 0
  while ____i35310 < _35(____x35810) do
    local __x164 = ____x35810[____i35310 + 1]
    if string_literal63(__x164) then
      __s13 = __s13 .. _eval(__x164)
    else
      __s13 = __s13 .. compile(__x164)
    end
    ____i35310 = ____i35310 + 1
  end
  __s13 = __s13 .. "\n"
  return __s13
end, stmt = true, tr = true})
setenv("%indentation", {_stash = true, special = function ()
  return indentation()
end})
return {run = run, ["eval"] = _eval, expand = expand, compile = compile}
