var delimiters = {"(": true, ")": true, "[": true, "]": true, "{": true, "}": true, ";": true, "\r": true, "\n": true};
var whitespace = {" ": true, "\t": true, "\r": true, "\n": true};
var stream = function (str, more) {
  return {pos: 0, string: str, len: _35(str), more: more};
};
var peek_char = function (s) {
  var ____id = s;
  var __pos = ____id.pos;
  var __len = ____id.len;
  var __string = ____id.string;
  if (__pos < __len) {
    return char(__string, __pos);
  }
};
var read_char = function (s) {
  var __c = peek_char(s);
  if (__c) {
    s.pos = s.pos + 1;
    return __c;
  }
};
var skip_non_code = function (s) {
  while (true) {
    var __c1 = peek_char(s);
    if (nil63(__c1)) {
      break;
    } else {
      if (whitespace[__c1]) {
        read_char(s);
      } else {
        if (__c1 === ";") {
          while (__c1 && !( __c1 === "\n")) {
            __c1 = read_char(s);
          }
          skip_non_code(s);
        } else {
          break;
        }
      }
    }
  }
};
var read_table = {};
var eof = {};
var read = function (s) {
  skip_non_code(s);
  var __c2 = peek_char(s);
  if (is63(__c2)) {
    return (read_table[__c2] || read_table[""])(s);
  } else {
    return eof;
  }
};
var read_all = function (s) {
  var __l = [];
  while (true) {
    var __form = read(s);
    if (__form === eof) {
      break;
    }
    add(__l, __form);
  }
  return __l;
};
read_string = function (str, more) {
  var __x = read(stream(str, more));
  if (!( __x === eof)) {
    return __x;
  }
};
_G.read_string = read_string;
var key63 = function (atom) {
  return string63(atom) && _35(atom) > 1 && char(atom, edge(atom)) === ":";
};
var flag63 = function (atom) {
  return string63(atom) && _35(atom) > 1 && char(atom, 0) === ":";
};
var expected = function (s, c) {
  var ____id1 = s;
  var __more = ____id1.more;
  var __pos1 = ____id1.pos;
  var __id2 = __more;
  var __e;
  if (__id2) {
    __e = __id2;
  } else {
    throw new Error("Expected " + c + " at " + __pos1);
    __e = undefined;
  }
  return __e;
};
var wrap = function (s, x) {
  var __y = read(s);
  if (__y === s.more) {
    return __y;
  } else {
    return [x, __y];
  }
};
var hex_prefix63 = function (str) {
  var __e1;
  if (code(str, 0) === 45) {
    __e1 = 1;
  } else {
    __e1 = 0;
  }
  var __i = __e1;
  var __id3 = code(str, __i) === 48;
  var __e2;
  if (__id3) {
    __i = __i + 1;
    var __n = code(str, __i);
    __e2 = __n === 120 || __n === 88;
  } else {
    __e2 = __id3;
  }
  return __e2;
};
var maybe_number = function (str) {
  if (hex_prefix63(str)) {
    return parseInt(str, 16);
  } else {
    if (number_code63(code(str, edge(str)))) {
      return number(str);
    }
  }
};
var real63 = function (x) {
  return number63(x) && ! nan63(x) && ! inf63(x);
};
obarray = {};
_G.obarray = obarray;
make_symbol = function (name) {
  if (name === "nil") {
    return undefined;
  } else {
    return Symbol(name);
  }
};
_G.make_symbol = make_symbol;
intern = function (name, ob) {
  if (name === "nil") {
    return undefined;
  } else {
    var __ob = ob || obarray;
    var __str = untag33(name, "string");
    if (has63(__ob, __str)) {
      return __ob[__str];
    } else {
      var __s = make_symbol(name);
      __ob[__str] = __s;
      return __s;
    }
  }
};
_G.intern = intern;
intern_soft = function (name, ob) {
  if (name === "nil") {
    return undefined;
  } else {
    var __ob1 = ob || obarray;
    var __str1 = untag33(name, "string");
    if (has63(__ob1, name)) {
      return __ob1[name];
    } else {
      return false;
    }
  }
};
_G.intern_soft = intern_soft;
symbol_name = function (x) {
  if (nil63(x)) {
    return "nil";
  } else {
    var __s1 = untag33(x, "symbol");
    var __s11 = __s1.toString();
    return clip(__s11, 7, edge(__s11));
  }
};
_G.symbol_name = symbol_name;
keyword63 = function (x) {
  return is_a63(x, "symbol") && char(symbol_name(x), 0) === ":";
};
_G.keyword63 = keyword63;
string_62symbol = function (x) {
  return intern(x);
};
_G.string_62symbol = string_62symbol;
symbol_62string = function (x) {
  return symbol_name(x);
};
_G.symbol_62string = symbol_62string;
coerce = function (x, y) {
  if (is_a63(x, y)) {
    return x;
  } else {
    var __f = _G[compile(kind(x) + "->" + y)];
    if (__f) {
      return __f(x);
    } else {
      throw new Error("Canot coerce " + str([x, y]));
    }
  }
};
_G.coerce = coerce;
read_table[""] = function (s) {
  var __str2 = "";
  while (true) {
    var __c3 = peek_char(s);
    if (__c3 && (! whitespace[__c3] && ! delimiters[__c3])) {
      __str2 = __str2 + read_char(s);
    } else {
      break;
    }
  }
  if (__str2 === "true") {
    return true;
  } else {
    if (__str2 === "false") {
      return false;
    } else {
      if (flag63(__str2)) {
        return intern(__str2);
      } else {
        var __n1 = maybe_number(__str2);
        if (real63(__n1)) {
          return __n1;
        } else {
          return __str2;
        }
      }
    }
  }
};
read_table["("] = function (s) {
  read_char(s);
  var __r24 = undefined;
  var __l1 = [];
  while (nil63(__r24)) {
    skip_non_code(s);
    var __c4 = peek_char(s);
    if (__c4 === ")") {
      read_char(s);
      __r24 = __l1;
    } else {
      if (nil63(__c4)) {
        __r24 = expected(s, ")");
      } else {
        var __x3 = read(s);
        if (key63(__x3)) {
          var __k = clip(__x3, 0, edge(__x3));
          var __v = read(s);
          __l1[__k] = __v;
        } else {
          add(__l1, __x3);
        }
      }
    }
  }
  return __r24;
};
read_table[")"] = function (s) {
  throw new Error("Unexpected ) at " + s.pos);
};
read_table["["] = function (s) {
  read_char(s);
  var __r27 = undefined;
  var __l2 = ["#%brackets"];
  while (nil63(__r27)) {
    skip_non_code(s);
    var __c5 = peek_char(s);
    if (__c5 === "]") {
      read_char(s);
      __r27 = __l2;
    } else {
      if (nil63(__c5)) {
        __r27 = expected(s, "]");
      } else {
        add(__l2, read(s));
      }
    }
  }
  return __r27;
};
read_table["]"] = function (s) {
  throw new Error("Unexpected ] at " + s.pos);
};
setenv("#%braces", {_stash: true, macro: function () {
  var __args1 = unstash(Array.prototype.slice.call(arguments, 0));
  return join(["%object"], __args1);
}});
read_table["{"] = function (s) {
  read_char(s);
  var __r30 = undefined;
  var __l3 = ["#%braces"];
  while (nil63(__r30)) {
    skip_non_code(s);
    var __c6 = peek_char(s);
    if (__c6 === "}") {
      read_char(s);
      __r30 = __l3;
    } else {
      if (nil63(__c6)) {
        __r30 = expected(s, "}");
      } else {
        add(__l3, read(s));
      }
    }
  }
  return __r30;
};
read_table["}"] = function (s) {
  throw new Error("Unexpected } at " + s.pos);
};
read_table["\""] = function (s) {
  read_char(s);
  var __r33 = undefined;
  var __str3 = "\"";
  while (nil63(__r33)) {
    var __c7 = peek_char(s);
    if (__c7 === "\"") {
      __r33 = __str3 + read_char(s);
    } else {
      if (nil63(__c7)) {
        __r33 = expected(s, "\"");
      } else {
        if (__c7 === "\\") {
          __str3 = __str3 + read_char(s);
        }
        __str3 = __str3 + read_char(s);
      }
    }
  }
  return __r33;
};
read_table["|"] = function (s) {
  read_char(s);
  var __r35 = undefined;
  var __str4 = "|";
  while (nil63(__r35)) {
    var __c8 = peek_char(s);
    if (__c8 === "|") {
      __r35 = __str4 + read_char(s);
    } else {
      if (nil63(__c8)) {
        __r35 = expected(s, "|");
      } else {
        __str4 = __str4 + read_char(s);
      }
    }
  }
  return __r35;
};
read_table["'"] = function (s) {
  read_char(s);
  return wrap(s, "quote");
};
read_table["`"] = function (s) {
  read_char(s);
  return wrap(s, "quasiquote");
};
read_table[","] = function (s) {
  read_char(s);
  if (peek_char(s) === "@") {
    read_char(s);
    return wrap(s, "unquote-splicing");
  } else {
    return wrap(s, "unquote");
  }
};
exports.stream = stream;
exports.read = read;
exports.read_all = read_all;
exports.read_string = read_string;
exports.read_table = read_table;
