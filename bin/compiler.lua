local reader = require("reader")
local infix63
local function getenv(k, p)
  if string63(k) then
    local __i = edge(environment)
    while __i >= 0 do
      local __b = environment[__i + 1][k]
      if is63(__b) then
        local __e19
        if p then
          __e19 = __b[p]
        else
          __e19 = __b
        end
        return __e19
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
function unquoted(x)
  if obj63(x) and hd(x) == "sharp-quote" then
    return x[2]
  else
    return x
  end
end
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
  if number63(k) and target ~= "lua" then
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
      local __e20
      if __k1 == "rest" then
        __e20 = {"cut", __id, _35(lh)}
      else
        __e20 = {"get", __id, {"quote", bias(__k1)}}
      end
      local __x5 = __e20
      if is63(__k1) then
        local __e21
        if __v1 == true then
          __e21 = __k1
        else
          __e21 = __v1
        end
        local __k2 = __e21
        __bs = join(__bs, bind(__k2, __x5))
      end
    end
    return __bs
  end
end
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
    local __r20 = unique("r")
    local ____o2 = args
    local __k3 = nil
    for __k3 in next, ____o2 do
      local __v2 = ____o2[__k3]
      if number63(__k3) then
        if atom63(__v2) then
          add(__args1, __v2)
        else
          local __x30 = unique("x")
          add(__args1, __x30)
          __bs1 = join(__bs1, {__v2, __x30})
        end
      end
    end
    if keys63(args) then
      __bs1 = join(__bs1, {__r20, rest()})
      local __n3 = _35(__args1)
      local __i4 = 0
      while __i4 < __n3 do
        local __v3 = __args1[__i4 + 1]
        __bs1 = join(__bs1, {__v3, {"destash!", __v3, __r20}})
        __i4 = __i4 + 1
      end
      __bs1 = join(__bs1, {keys(args), __r20})
    end
    return {__args1, join({"let", __bs1}, body)}
  end
end
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
local function expand_local(__x38)
  local ____id1 = __x38
  local __x39 = ____id1[1]
  local __name = ____id1[2]
  local __value = ____id1[3]
  setenv(__name, {_stash = true, variable = true})
  return {"%local", __name, macroexpand(__value)}
end
local function expand_function(__x41)
  local ____id2 = __x41
  local __x42 = ____id2[1]
  local __args = ____id2[2]
  local __body = cut(____id2, 2)
  add(environment, {})
  local ____o3 = __args
  local ____i5 = nil
  for ____i5 in next, ____o3 do
    local ____x43 = ____o3[____i5]
    setenv(____x43, {_stash = true, variable = true})
  end
  local ____x44 = join({"%function", __args}, macroexpand(__body))
  drop(environment)
  return ____x44
end
local function expand_definition(__x46)
  local ____id3 = __x46
  local __x47 = ____id3[1]
  local __name1 = ____id3[2]
  local __args11 = ____id3[3]
  local __body1 = cut(____id3, 3)
  add(environment, {})
  local ____o4 = __args11
  local ____i6 = nil
  for ____i6 in next, ____o4 do
    local ____x48 = ____o4[____i6]
    setenv(____x48, {_stash = true, variable = true})
  end
  local ____x49 = join({__x47, __name1, __args11}, macroexpand(__body1))
  drop(environment)
  return ____x49
end
local function expand_macro(form)
  return macroexpand(expand1(form))
end
function expand1(__x51)
  local ____id4 = __x51
  local __name2 = ____id4[1]
  local __body2 = cut(____id4, 1)
  return apply(macro_function(__name2), __body2)
end
function infix_syntax63(form)
  return infix63(form[2]) and _35(form) > 2
end
function expand_infix_syntax(form)
  local __form = join({form[2]}, map(hd, pair(form)))
  return macroexpand(__form)
end
function body_syntax63(form)
  return hd(form) == "do" and _35(form) >= 4
end
function expand_body_syntax(__x53)
  local ____id5 = __x53
  local __x54 = ____id5[1]
  local __body3 = cut(____id5, 1)
  local __l1 = {"do"}
  while some63(__body3) do
    local ____id6 = __body3
    local __a = ____id6[1]
    local __op = ____id6[2]
    local __b1 = ____id6[3]
    if not infix63(__op) or _35(__body3) < 3 then
      add(__l1, macroexpand(__a))
      __body3 = tl(__body3)
    else
      if __op == "=" then
        local __e22
        if not atom63(__a) or variable63(__a) or symbol63(__a) then
          __e22 = "set"
        else
          __e22 = "%local"
        end
        __op = __e22
      end
      add(__l1, macroexpand({__op, __a, __b1}))
      __body3 = cut(__body3, 3)
    end
  end
  return join(__l1, map(macroexpand, __body3))
end
function macroexpand(form)
  if symbol63(form) then
    return macroexpand(symbol_expansion(form))
  else
    if atom63(form) then
      return form
    else
      local __x57 = hd(form)
      if __x57 == "%local" then
        return expand_local(form)
      else
        if __x57 == "sharp-quote" then
          return form
        else
          if __x57 == "%function" then
            return expand_function(form)
          else
            if __x57 == "%global-function" then
              return expand_definition(form)
            else
              if __x57 == "%local-function" then
                return expand_definition(form)
              else
                if infix_syntax63(form) then
                  return expand_infix_syntax(form)
                else
                  if body_syntax63(form) then
                    return expand_body_syntax(form)
                  else
                    if macro63(__x57) then
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
    end
  end
end
local function quasiquote_list(form, depth)
  local __xs = {{"list"}}
  local ____o5 = form
  local __k4 = nil
  for __k4 in next, ____o5 do
    local __v4 = ____o5[__k4]
    if not number63(__k4) then
      local __e23
      if quasisplice63(__v4, depth) then
        __e23 = quasiexpand(__v4[2])
      else
        __e23 = quasiexpand(__v4, depth)
      end
      local __v5 = __e23
      last(__xs)[__k4] = __v5
    end
  end
  local ____x60 = form
  local ____i8 = 0
  while ____i8 < _35(____x60) do
    local __x61 = ____x60[____i8 + 1]
    if quasisplice63(__x61, depth) then
      local __x62 = quasiexpand(__x61[2])
      add(__xs, __x62)
      add(__xs, {"list"})
    else
      add(last(__xs), quasiexpand(__x61, depth))
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
function expand_if(__x66)
  local ____id7 = __x66
  local __a1 = ____id7[1]
  local __b2 = ____id7[2]
  local __c = cut(____id7, 2)
  if is63(__b2) then
    return {join({"%if", __a1, __b2}, expand_if(__c))}
  else
    if is63(__a1) then
      return {__a1}
    end
  end
end
indent_level = 0
function indentation()
  local __s = ""
  local __i9 = 0
  while __i9 < indent_level do
    __s = __s .. "  "
    __i9 = __i9 + 1
  end
  return __s
end
local reserved = {["not"] = true, ["do"] = true, ["return"] = true, ["<"] = true, ["+"] = true, ["and"] = true, ["until"] = true, ["finally"] = true, ["elseif"] = true, [">"] = true, ["<="] = true, ["class"] = true, [">="] = true, ["debugger"] = true, ["void"] = true, ["end"] = true, ["load"] = true, ["in"] = true, ["try"] = true, ["if"] = true, ["false"] = true, ["repeat"] = true, ["with"] = true, ["continue"] = true, ["import"] = true, ["-"] = true, ["true"] = true, ["eval"] = true, ["="] = true, ["nil"] = true, ["case"] = true, ["*"] = true, ["const"] = true, ["throw"] = true, ["else"] = true, ["typeof"] = true, ["var"] = true, ["break"] = true, ["while"] = true, ["let"] = true, ["local"] = true, ["catch"] = true, ["/"] = true, ["switch"] = true, ["then"] = true, ["=="] = true, ["new"] = true, ["for"] = true, ["instanceof"] = true, ["delete"] = true, ["%"] = true, ["function"] = true, ["or"] = true, ["default"] = true}
function reserved63(x)
  return has63(reserved, x)
end
local function valid_code63(n)
  return number_code63(n) or n > 64 and n < 91 or n > 96 and n < 123 or n == 95
end
local function id(id)
  local __e24
  if number_code63(code(id, 0)) then
    __e24 = "_"
  else
    __e24 = ""
  end
  local __id11 = __e24
  local __i10 = 0
  while __i10 < _35(id) do
    local __c1 = char(id, __i10)
    local __n7 = code(__c1)
    local __e25
    if __c1 == "-" and not( id == "-") then
      __e25 = "_"
    else
      local __e26
      if valid_code63(__n7) then
        __e26 = __c1
      else
        local __e27
        if __i10 == 0 then
          __e27 = "_" .. __n7
        else
          __e27 = __n7
        end
        __e26 = __e27
      end
      __e25 = __e26
    end
    local __c11 = __e25
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
local __names = {}
function unique(x)
  local __x70 = id(x)
  if __names[__x70] then
    local __i11 = __names[__x70]
    __names[__x70] = __names[__x70] + 1
    return unique(__x70 .. __i11)
  else
    __names[__x70] = 1
    return "__" .. __x70
  end
end
function key(k)
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
end
function mapo(f, t)
  local __o6 = {}
  local ____o7 = t
  local __k5 = nil
  for __k5 in next, ____o7 do
    local __v6 = ____o7[__k5]
    local __x71 = f(__v6)
    if is63(__x71) then
      add(__o6, literal(__k5))
      add(__o6, __x71)
    end
  end
  return __o6
end
local ____x73 = {}
local ____x74 = {}
____x74.js = "!"
____x74.lua = "not"
____x73["not"] = ____x74
local ____x75 = {}
____x75["*"] = true
____x75["/"] = true
____x75["%"] = true
local ____x76 = {}
local ____x77 = {}
____x77.js = "+"
____x77.lua = ".."
____x76.cat = ____x77
local ____x78 = {}
____x78["-"] = true
____x78["+"] = true
local ____x79 = {}
____x79[">"] = true
____x79["<="] = true
____x79["<"] = true
____x79[">="] = true
local ____x80 = {}
local ____x81 = {}
____x81.js = "==="
____x81.lua = "=="
____x80["="] = ____x81
local ____x82 = {}
local ____x83 = {}
____x83.js = "==="
____x83.lua = "=="
____x82["=="] = ____x83
local ____x84 = {}
local ____x85 = {}
____x85.js = "!=="
____x85.lua = "~="
____x84["!="] = ____x85
local ____x86 = {}
local ____x87 = {}
____x87.js = "&&"
____x87.lua = "and"
____x86["and"] = ____x87
local ____x88 = {}
local ____x89 = {}
____x89.js = "||"
____x89.lua = "or"
____x88["or"] = ____x89
local infix = {____x73, ____x75, ____x76, ____x78, ____x79, ____x80, ____x82, ____x84, ____x86, ____x88}
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
    local __x91 = level[op]
    if __x91 == true then
      return op
    else
      if is63(__x91) then
        return __x91[target]
      end
    end
  end, infix)
end
function infix63(x)
  return is63(getop(x))
end
function infix_operator63(x)
  return obj63(x) and infix63(hd(x))
end
local function compile_args(args)
  local __s1 = "("
  local __c2 = ""
  local ____x92 = args
  local ____i15 = 0
  while ____i15 < _35(____x92) do
    local __x93 = ____x92[____i15 + 1]
    __s1 = __s1 .. __c2 .. compile(__x93)
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
  local ____id8 = form
  local __x94 = ____id8[1]
  local __args2 = cut(____id8, 1)
  local ____id9 = getenv(__x94)
  local __special = ____id9.special
  local __self_tr63 = ____id9.tr
  local __stmt = ____id9.stmt
  local __tr = terminator(stmt63 and not __self_tr63)
  return apply(__special, __args2) .. __tr
end
local function parenthesize_call63(x)
  return not atom63(x) and hd(x) == "%function" or precedence(x) > 0
end
local function compile_call(form)
  local __f = hd(form)
  local __f1 = compile(__f)
  local __args3 = compile_args(stash42(tl(form)))
  if parenthesize_call63(__f) then
    return "(" .. __f1 .. ")" .. __args3
  else
    return __f1 .. __args3
  end
end
local function op_delims(parent, child, ...)
  local ____r62 = unstash({...})
  local __parent = destash33(parent, ____r62)
  local __child = destash33(child, ____r62)
  local ____id10 = ____r62
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
local function compile_infix(form)
  local ____id111 = form
  local __op1 = ____id111[1]
  local ____id12 = cut(____id111, 1)
  local __a2 = ____id12[1]
  local __b3 = ____id12[2]
  local ____id13 = op_delims(form, __a2)
  local __ao = ____id13[1]
  local __ac = ____id13[2]
  local ____id14 = op_delims(form, __b3, {_stash = true, right = true})
  local __bo = ____id14[1]
  local __bc = ____id14[2]
  local __a3 = compile(__a2)
  local __b4 = compile(__b3)
  local __op2 = getop(__op1)
  if unary63(form) then
    return __op2 .. __ao .. " " .. __a3 .. __ac
  else
    return __ao .. __a3 .. __ac .. " " .. __op2 .. " " .. __bo .. __b4 .. __bc
  end
end
function compile_function(args, body, ...)
  local ____r64 = unstash({...})
  local __args4 = destash33(args, ____r64)
  local __body4 = destash33(body, ____r64)
  local ____id15 = ____r64
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
  local ____x100 = compile(__body4, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __body5 = ____x100
  local __ind = indentation()
  local __e33
  if __prefix then
    __e33 = __prefix .. " "
  else
    __e33 = ""
  end
  local __p = __e33
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
    return "function " .. __id16 .. __args5 .. " {\n" .. __body5 .. __ind .. "}" .. __tr1
  else
    return __p .. "function " .. __id16 .. __args5 .. "\n" .. __body5 .. __ind .. __tr1
  end
end
local function can_return63(form)
  return is63(form) and (atom63(form) or not( hd(form) == "return") and not statement63(hd(form)))
end
function compile(form, ...)
  local ____r66 = unstash({...})
  local __form1 = destash33(form, ____r66)
  local ____id17 = ____r66
  local __stmt1 = ____id17.stmt
  if nil63(__form1) then
    return ""
  else
    if special_form63(__form1) then
      return compile_special(__form1, __stmt1)
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
      if atom63(__form1) then
        __e36 = compile_atom(__form1)
      else
        local __e37
        if infix63(hd(__form1)) then
          __e37 = compile_infix(__form1)
        else
          __e37 = compile_call(__form1)
        end
        __e36 = __e37
      end
      local __form2 = __e36
      return __ind1 .. __form2 .. __tr2
    end
  end
end
local function lower_statement(form, tail63)
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
local function lower_body(body, tail63)
  return lower_statement(join({"do"}, body), tail63)
end
local function literal63(form)
  return atom63(form) or hd(form) == "%array" or hd(form) == "%object"
end
local function standalone63(form)
  return not atom63(form) and not infix63(hd(form)) and not literal63(form) and not( "get" == hd(form)) or id_literal63(form)
end
local function lower_do(args, hoist, stmt63, tail63)
  local ____x107 = almost(args)
  local ____i17 = 0
  while ____i17 < _35(____x107) do
    local __x108 = ____x107[____i17 + 1]
    local ____y = lower(__x108, hoist, stmt63)
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
  local ____id18 = args
  local __lh = ____id18[1]
  local __rh = ____id18[2]
  add(hoist, {"%set", lower(__lh, hoist), lower(__rh, hoist)})
  if not( stmt63 and not tail63) then
    return __lh
  end
end
local function lower_if(args, hoist, stmt63, tail63)
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
local function lower_short(x, args, hoist)
  local ____id20 = args
  local __a4 = ____id20[1]
  local __b5 = ____id20[2]
  local __hoist1 = {}
  local __b11 = lower(__b5, __hoist1)
  if some63(__hoist1) then
    local __id21 = unique("id")
    local __e43
    if x == "and" then
      __e43 = {"%if", __id21, __b5, __id21}
    else
      __e43 = {"%if", __id21, __id21, __b5}
    end
    return lower({"do", {"%local", __id21, __a4}, __e43}, hoist)
  else
    return {x, lower(__a4, hoist), __b11}
  end
end
local function lower_try(args, hoist, tail63)
  return add(hoist, {"%try", lower_body(args, tail63)})
end
local function lower_while(args, hoist)
  local ____id22 = args
  local __c4 = ____id22[1]
  local __body6 = cut(____id22, 1)
  local __pre = {}
  local __c5 = lower(__c4, __pre)
  local __e44
  if none63(__pre) then
    __e44 = {"%while", __c5, lower_body(__body6)}
  else
    __e44 = {"%while", true, join({"do"}, __pre, {{"%if", {"not", __c5}, {"break"}}, lower_body(__body6)})}
  end
  return add(hoist, __e44)
end
local function lower_for(args, hoist)
  local ____id23 = args
  local __t = ____id23[1]
  local __k7 = ____id23[2]
  local __body7 = cut(____id23, 2)
  return add(hoist, {"%for", lower(__t, hoist), __k7, lower_body(__body7)})
end
local function lower_function(args)
  local ____id24 = args
  local __a5 = ____id24[1]
  local __body8 = cut(____id24, 1)
  return {"%function", __a5, lower_body(__body8, true)}
end
local function lower_definition(kind, args, hoist)
  local ____id25 = args
  local __name4 = ____id25[1]
  local __args6 = ____id25[2]
  local __body9 = cut(____id25, 2)
  return add(hoist, {kind, __name4, __args6, lower_body(__body9, true)})
end
local function lower_call(form, hoist)
  local __form3 = map(function (x)
    return lower(x, hoist)
  end, form)
  if some63(__form3) then
    return __form3
  end
end
local function pairwise63(form)
  return in63(hd(form), {"<", "<=", "=", ">=", ">"})
end
local function lower_pairwise(form)
  if pairwise63(form) then
    local __e4 = {}
    local ____id26 = form
    local __x137 = ____id26[1]
    local __args7 = cut(____id26, 1)
    reduce(function (a, b)
      add(__e4, {__x137, a, b})
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
  local __form4 = lower_pairwise(form)
  local ____id27 = __form4
  local __x140 = ____id27[1]
  local __args8 = cut(____id27, 1)
  return lower(reduce(function (a, b)
    return {__x140, b, a}
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
          local ____id28 = form
          local __x143 = ____id28[1]
          local __args9 = cut(____id28, 1)
          if __x143 == "do" then
            return lower_do(__args9, hoist, stmt63, tail63)
          else
            if __x143 == "%call" then
              return lower(__args9, hoist, stmt63, tail63)
            else
              if __x143 == "%set" then
                return lower_set(__args9, hoist, stmt63, tail63)
              else
                if __x143 == "%if" then
                  return lower_if(__args9, hoist, stmt63, tail63)
                else
                  if __x143 == "%try" then
                    return lower_try(__args9, hoist, tail63)
                  else
                    if __x143 == "while" then
                      return lower_while(__args9, hoist)
                    else
                      if __x143 == "%while" then
                        return lower_while(__args9, hoist)
                      else
                        if __x143 == "%for" then
                          return lower_for(__args9, hoist)
                        else
                          if __x143 == "%function" then
                            return lower_function(__args9)
                          else
                            if __x143 == "%local-function" or __x143 == "%global-function" then
                              return lower_definition(__x143, __args9, hoist)
                            else
                              if in63(__x143, {"and", "or"}) then
                                return lower_short(__x143, __args9, hoist)
                              else
                                if statement63(__x143) then
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
end
function expand(form)
  return lower(macroexpand(form))
end
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
function _eval(form)
  local __previous = target
  target = "lua"
  local __code = compile(expand({"set", "%result", form}))
  target = __previous
  run(__code)
  return _37result
end
function immediate_call63(x)
  return obj63(x) and obj63(hd(x)) and hd(hd(x)) == "%function"
end
setenv("do", {_stash = true, special = function (...)
  local __forms1 = unstash({...})
  local __s3 = ""
  local ____x150 = __forms1
  local ____i19 = 0
  while ____i19 < _35(____x150) do
    local __x151 = ____x150[____i19 + 1]
    if target == "lua" and immediate_call63(__x151) and "\n" == char(__s3, edge(__s3)) then
      __s3 = clip(__s3, 0, edge(__s3)) .. ";\n"
    end
    __s3 = __s3 .. compile(__x151, {_stash = true, stmt = true})
    if not atom63(__x151) then
      if hd(__x151) == "return" or hd(__x151) == "break" then
        break
      end
    end
    ____i19 = ____i19 + 1
  end
  return __s3
end, tr = true, stmt = true})
setenv("%if", {_stash = true, special = function (cond, cons, alt)
  local __cond2 = compile(cond)
  indent_level = indent_level + 1
  local ____x154 = compile(cons, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __cons1 = ____x154
  local __e45
  if alt then
    indent_level = indent_level + 1
    local ____x155 = compile(alt, {_stash = true, stmt = true})
    indent_level = indent_level - 1
    __e45 = ____x155
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
end, tr = true, stmt = true})
setenv("while", {_stash = true, special = function (cond, form)
  local __cond4 = compile(cond)
  indent_level = indent_level + 1
  local ____x157 = compile(form, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __body11 = ____x157
  local __ind5 = indentation()
  if target == "js" then
    return __ind5 .. "while (" .. __cond4 .. ") {\n" .. __body11 .. __ind5 .. "}\n"
  else
    return __ind5 .. "while " .. __cond4 .. " do\n" .. __body11 .. __ind5 .. "end\n"
  end
end, tr = true, stmt = true})
setenv("%while", {_stash = true, special = function (cond, form)
  local __cond6 = compile(cond)
  indent_level = indent_level + 1
  local ____x159 = compile(form, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __body13 = ____x159
  local __ind7 = indentation()
  if target == "js" then
    return __ind7 .. "while (" .. __cond6 .. ") {\n" .. __body13 .. __ind7 .. "}\n"
  else
    return __ind7 .. "while " .. __cond6 .. " do\n" .. __body13 .. __ind7 .. "end\n"
  end
end, tr = true, stmt = true})
setenv("%for", {_stash = true, special = function (t, k, form)
  local __t2 = compile(t)
  local __ind9 = indentation()
  indent_level = indent_level + 1
  local ____x161 = compile(form, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __body15 = ____x161
  if target == "lua" then
    return __ind9 .. "for " .. k .. " in next, " .. __t2 .. " do\n" .. __body15 .. __ind9 .. "end\n"
  else
    return __ind9 .. "for (" .. k .. " in " .. __t2 .. ") {\n" .. __body15 .. __ind9 .. "}\n"
  end
end, tr = true, stmt = true})
setenv("%try", {_stash = true, special = function (form)
  local __e8 = unique("e")
  local __ind11 = indentation()
  indent_level = indent_level + 1
  local ____x166 = compile(form, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __body17 = ____x166
  local __hf1 = {"return", {"%array", false, __e8}}
  indent_level = indent_level + 1
  local ____x169 = compile(__hf1, {_stash = true, stmt = true})
  indent_level = indent_level - 1
  local __h1 = ____x169
  return __ind11 .. "try {\n" .. __body17 .. __ind11 .. "}\n" .. __ind11 .. "catch (" .. __e8 .. ") {\n" .. __h1 .. __ind11 .. "}\n"
end, tr = true, stmt = true})
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
    local __x173 = compile_function(args, body, {_stash = true, name = name})
    return indentation() .. __x173
  else
    return compile({"%set", name, {"%function", args, body}}, {_stash = true, stmt = true})
  end
end, tr = true, stmt = true})
setenv("%local-function", {_stash = true, special = function (name, args, body)
  if target == "lua" then
    local __x179 = compile_function(args, body, {_stash = true, name = name, prefix = "local"})
    return indentation() .. __x179
  else
    return compile({"%local", name, {"%function", args, body}}, {_stash = true, stmt = true})
  end
end, tr = true, stmt = true})
setenv("return", {_stash = true, special = function (x)
  local __e46
  if nil63(x) then
    __e46 = "return"
  else
    __e46 = "return " .. compile(x)
  end
  local __x183 = __e46
  return indentation() .. __x183
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
  local __ind13 = indentation()
  return __ind13 .. __keyword1 .. __id30 .. __rh2
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
  local ____o10 = __forms3
  local __k9 = nil
  for __k9 in next, ____o10 do
    local __v9 = ____o10[__k9]
    if number63(__k9) then
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
  local ____o12 = pair(__forms5)
  local __k121 = nil
  for __k121 in next, ____o12 do
    local __v12 = ____o12[__k121]
    if number63(__k121) then
      local ____id32 = __v12
      local __k13 = ____id32[1]
      local __v13 = ____id32[2]
      if not string63(__k13) then
        error("Illegal key: " .. str(__k13))
      end
      __s9 = __s9 .. __c9 .. key(__k13) .. __sep1 .. compile(__v13)
      __c9 = ", "
    end
  end
  return __s9 .. "}"
end})
setenv("%literal", {_stash = true, special = function (...)
  local __args111 = unstash({...})
  return apply(cat, map(compile, __args111))
end})
setenv("sharp-quote", {_stash = true, special = function (x)
  return compile(x)
end})
return {compile = compile, run = run, expand = expand, ["eval"] = _eval}
