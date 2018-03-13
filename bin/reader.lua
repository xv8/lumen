local delimiters = {["("] = true, [")"] = true, ["["] = true, ["]"] = true, ["{"] = true, ["}"] = true, [";"] = true, ["\r"] = true, ["\n"] = true}
local whitespace = {[" "] = true, ["\t"] = true, ["\r"] = true, ["\n"] = true}
local function stream(str, more)
  return {pos = 0, string = str, len = _35(str), more = more}
end
local function peek_char(s)
  local ____id = s
  local __pos = ____id.pos
  local __len = ____id.len
  local __string = ____id.string
  if __pos < __len then
    return char(__string, __pos)
  end
end
local function read_char(s)
  local __c = peek_char(s)
  if __c then
    s.pos = s.pos + 1
    return __c
  end
end
local function skip_non_code(s)
  while true do
    local __c1 = peek_char(s)
    if nil63(__c1) then
      break
    else
      if whitespace[__c1] then
        read_char(s)
      else
        if __c1 == ";" then
          while __c1 and not( __c1 == "\n") do
            __c1 = read_char(s)
          end
          skip_non_code(s)
        else
          break
        end
      end
    end
  end
end
local read_table = {}
local eof = {}
local function read(s)
  skip_non_code(s)
  local __c2 = peek_char(s)
  if is63(__c2) then
    return (read_table[__c2] or read_table[""])(s)
  else
    return eof
  end
end
local function read_all(s)
  local __l = {}
  while true do
    local __form = read(s)
    if __form == eof then
      break
    end
    add(__l, __form)
  end
  return __l
end
function read_string(str, more)
  local __x = read(stream(str, more))
  if not( __x == eof) then
    return __x
  end
end
_G.read_string = read_string
local function key63(atom)
  return string63(atom) and _35(atom) > 1 and char(atom, edge(atom)) == ":"
end
local function flag63(atom)
  return string63(atom) and _35(atom) > 1 and char(atom, 0) == ":"
end
local function expected(s, c)
  local ____id1 = s
  local __more = ____id1.more
  local __pos1 = ____id1.pos
  local __id2 = __more
  local __e
  if __id2 then
    __e = __id2
  else
    error("Expected " .. c .. " at " .. __pos1)
    __e = nil
  end
  return __e
end
local function wrap(s, x)
  local __y = read(s)
  if __y == s.more then
    return __y
  else
    return {x, __y}
  end
end
local function hex_prefix63(str)
  local __e1
  if code(str, 0) == 45 then
    __e1 = 1
  else
    __e1 = 0
  end
  local __i = __e1
  local __id3 = code(str, __i) == 48
  local __e2
  if __id3 then
    __i = __i + 1
    local __n = code(str, __i)
    __e2 = __n == 120 or __n == 88
  else
    __e2 = __id3
  end
  return __e2
end
local function maybe_number(str)
  if hex_prefix63(str) then
    return tonumber(str)
  else
    if number_code63(code(str, edge(str))) then
      return number(str)
    end
  end
end
local function real63(x)
  return number63(x) and not nan63(x) and not inf63(x)
end
obarray = {}
_G.obarray = obarray
function make_symbol(name)
  if name == "nil" then
    return nil
  else
    return annotate("symbol", name)
  end
end
_G.make_symbol = make_symbol
function intern(name, ob)
  if name == "nil" then
    return nil
  else
    local __ob = ob or obarray
    local __str = untag33(name, "string")
    if has63(__ob, __str) then
      return __ob[__str]
    else
      local __s = make_symbol(name)
      __ob[__str] = __s
      return __s
    end
  end
end
_G.intern = intern
function intern_soft(name, ob)
  if name == "nil" then
    return nil
  else
    local __ob1 = ob or obarray
    local __str1 = untag33(name, "string")
    if has63(__ob1, name) then
      return __ob1[name]
    else
      return false
    end
  end
end
_G.intern_soft = intern_soft
function symbol_name(x)
  if nil63(x) then
    return "nil"
  else
    local __s1 = untag33(x, "symbol")
    return __s1
  end
end
_G.symbol_name = symbol_name
function keyword63(x)
  return is_a63(x, "symbol") and char(symbol_name(x), 0) == ":"
end
_G.keyword63 = keyword63
function string_62symbol(x)
  return intern(x)
end
_G.string_62symbol = string_62symbol
function symbol_62string(x)
  return symbol_name(x)
end
_G.symbol_62string = symbol_62string
function coerce(x, y)
  if is_a63(x, y) then
    return x
  else
    local __f = _G[compile(kind(x) .. "->" .. y)]
    if __f then
      return __f(x)
    else
      error("Canot coerce " .. str({x, y}))
    end
  end
end
_G.coerce = coerce
read_table[""] = function (s)
  local __str2 = ""
  while true do
    local __c3 = peek_char(s)
    if __c3 and (not whitespace[__c3] and not delimiters[__c3]) then
      __str2 = __str2 .. read_char(s)
    else
      break
    end
  end
  if __str2 == "true" then
    return true
  else
    if __str2 == "false" then
      return false
    else
      if flag63(__str2) then
        return intern(__str2)
      else
        local __n1 = maybe_number(__str2)
        if real63(__n1) then
          return __n1
        else
          return __str2
        end
      end
    end
  end
end
read_table["("] = function (s)
  read_char(s)
  local __r24 = nil
  local __l1 = {}
  while nil63(__r24) do
    skip_non_code(s)
    local __c4 = peek_char(s)
    if __c4 == ")" then
      read_char(s)
      __r24 = __l1
    else
      if nil63(__c4) then
        __r24 = expected(s, ")")
      else
        local __x3 = read(s)
        if key63(__x3) then
          local __k = clip(__x3, 0, edge(__x3))
          local __v = read(s)
          __l1[__k] = __v
        else
          add(__l1, __x3)
        end
      end
    end
  end
  return __r24
end
read_table[")"] = function (s)
  error("Unexpected ) at " .. s.pos)
end
read_table["["] = function (s)
  read_char(s)
  local __r27 = nil
  local __l2 = {"#%brackets"}
  while nil63(__r27) do
    skip_non_code(s)
    local __c5 = peek_char(s)
    if __c5 == "]" then
      read_char(s)
      __r27 = __l2
    else
      if nil63(__c5) then
        __r27 = expected(s, "]")
      else
        add(__l2, read(s))
      end
    end
  end
  return __r27
end
read_table["]"] = function (s)
  error("Unexpected ] at " .. s.pos)
end
setenv("#%braces", {_stash = true, macro = function (...)
  local __args1 = unstash({...})
  return join({"%object"}, __args1)
end})
read_table["{"] = function (s)
  read_char(s)
  local __r30 = nil
  local __l3 = {"#%braces"}
  while nil63(__r30) do
    skip_non_code(s)
    local __c6 = peek_char(s)
    if __c6 == "}" then
      read_char(s)
      __r30 = __l3
    else
      if nil63(__c6) then
        __r30 = expected(s, "}")
      else
        add(__l3, read(s))
      end
    end
  end
  return __r30
end
read_table["}"] = function (s)
  error("Unexpected } at " .. s.pos)
end
read_table["\""] = function (s)
  read_char(s)
  local __r33 = nil
  local __str3 = "\""
  while nil63(__r33) do
    local __c7 = peek_char(s)
    if __c7 == "\"" then
      __r33 = __str3 .. read_char(s)
    else
      if nil63(__c7) then
        __r33 = expected(s, "\"")
      else
        if __c7 == "\\" then
          __str3 = __str3 .. read_char(s)
        end
        __str3 = __str3 .. read_char(s)
      end
    end
  end
  return __r33
end
read_table["|"] = function (s)
  read_char(s)
  local __r35 = nil
  local __str4 = "|"
  while nil63(__r35) do
    local __c8 = peek_char(s)
    if __c8 == "|" then
      __r35 = __str4 .. read_char(s)
    else
      if nil63(__c8) then
        __r35 = expected(s, "|")
      else
        __str4 = __str4 .. read_char(s)
      end
    end
  end
  return __r35
end
read_table["'"] = function (s)
  read_char(s)
  return wrap(s, "quote")
end
read_table["`"] = function (s)
  read_char(s)
  return wrap(s, "quasiquote")
end
read_table[","] = function (s)
  read_char(s)
  if peek_char(s) == "@" then
    read_char(s)
    return wrap(s, "unquote-splicing")
  else
    return wrap(s, "unquote")
  end
end
local exports = exports or {}
exports.stream = stream
exports.read = read
exports.read_all = read_all
exports.read_string = read_string
exports.read_table = read_table
return exports
