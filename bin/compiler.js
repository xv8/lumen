var getenv = function (k, p) {
  if (string63(k)) {
    var __i = edge(environment);
    while (__i >= 0) {
      var __b = environment[__i][k];
      if (is63(__b)) {
        var __e23;
        if (p) {
          __e23 = __b[p];
        } else {
          __e23 = __b;
        }
        return __e23;
      } else {
        __i = __i - 1;
      }
    }
  }
};
var macro_function = function (k) {
  return getenv(k, "macro");
};
var macro63 = function (k) {
  return is63(macro_function(k));
};
var special63 = function (k) {
  return is63(getenv(k, "special"));
};
var special_form63 = function (form) {
  return ! atom63(form) && special63(hd(form));
};
var statement63 = function (k) {
  return special63(k) && getenv(k, "stmt");
};
var symbol_expansion = function (k) {
  return getenv(k, "symbol");
};
var symbol63 = function (k) {
  return is63(symbol_expansion(k));
};
var variable63 = function (k) {
  return is63(getenv(k, "variable"));
};
bound63 = function (x) {
  return macro63(x) || special63(x) || symbol63(x) || variable63(x);
};
_G.bound63 = bound63;
quoted = function (form) {
  if (string63(form)) {
    return escape(form);
  } else {
    if (atom63(form)) {
      return form;
    } else {
      return join(["list"], map(quoted, form));
    }
  }
};
_G.quoted = quoted;
var literal = function (s) {
  if (string_literal63(s)) {
    return s;
  } else {
    return quoted(s);
  }
};
var stash42 = function (args) {
  if (keys63(args)) {
    var __l = ["%object", "\"_stash\"", true];
    var ____o = args;
    var __k = undefined;
    for (__k in ____o) {
      var __v = ____o[__k];
      var __e24;
      if (numeric63(__k)) {
        __e24 = parseInt(__k);
      } else {
        __e24 = __k;
      }
      var __k1 = __e24;
      if (! number63(__k1)) {
        add(__l, literal(__k1));
        add(__l, __v);
      }
    }
    return join(args, [__l]);
  } else {
    return args;
  }
};
var bias = function (k) {
  if (number63(k) && !( target === "js")) {
    if (target === "js") {
      k = k - 1;
    } else {
      k = k + 1;
    }
  }
  return k;
};
bind = function (lh, rh) {
  if (atom63(lh)) {
    return [lh, rh];
  } else {
    var __id = unique("id");
    var __bs = [__id, rh];
    var ____o1 = lh;
    var __k2 = undefined;
    for (__k2 in ____o1) {
      var __v1 = ____o1[__k2];
      var __e25;
      if (numeric63(__k2)) {
        __e25 = parseInt(__k2);
      } else {
        __e25 = __k2;
      }
      var __k3 = __e25;
      var __e26;
      if (__k3 === "rest") {
        __e26 = ["cut", __id, _35(lh)];
      } else {
        var __e27;
        if (number63(__k3)) {
          __e27 = ["get", __id, bias(__k3)];
        } else {
          __e27 = [".", __id, ["quote", __k3]];
        }
        __e26 = __e27;
      }
      var __x5 = __e26;
      if (is63(__k3)) {
        var __e28;
        if (__v1 === true) {
          __e28 = __k3;
        } else {
          __e28 = __v1;
        }
        var __k4 = __e28;
        __bs = join(__bs, bind(__k4, __x5));
      }
    }
    return __bs;
  }
};
_G.bind = bind;
setenv("arguments%", {_stash: true, macro: function (from) {
  return [".", "Array", ["quote", "prototype"], ["quote", "slice"], ["call", "arguments", from]];
}});
bind42 = function (args, body) {
  var __args1 = [];
  var rest = function () {
    __args1.rest = true;
    if (target === "js") {
      return ["unstash", ["arguments%", _35(__args1)]];
    } else {
      return ["unstash", ["list", "|...|"]];
    }
  };
  if (atom63(args)) {
    return [__args1, join(["let", [args, rest()]], body)];
  } else {
    var __bs1 = [];
    var __r19 = unique("r");
    var ____o2 = args;
    var __k5 = undefined;
    for (__k5 in ____o2) {
      var __v2 = ____o2[__k5];
      var __e29;
      if (numeric63(__k5)) {
        __e29 = parseInt(__k5);
      } else {
        __e29 = __k5;
      }
      var __k6 = __e29;
      if (number63(__k6)) {
        if (atom63(__v2)) {
          add(__args1, __v2);
        } else {
          var __x25 = unique("x");
          add(__args1, __x25);
          __bs1 = join(__bs1, [__v2, __x25]);
        }
      }
    }
    if (keys63(args)) {
      __bs1 = join(__bs1, [__r19, rest()]);
      var __n3 = _35(__args1);
      var __i4 = 0;
      while (__i4 < __n3) {
        var __v3 = __args1[__i4];
        __bs1 = join(__bs1, [__v3, ["destash!", __v3, __r19]]);
        __i4 = __i4 + 1;
      }
      __bs1 = join(__bs1, [keys(args), __r19]);
    }
    return [__args1, join(["let", __bs1], body)];
  }
};
_G.bind42 = bind42;
var quoting63 = function (depth) {
  return number63(depth);
};
var quasiquoting63 = function (depth) {
  return quoting63(depth) && depth > 0;
};
var can_unquote63 = function (depth) {
  return quoting63(depth) && depth === 1;
};
var quasisplice63 = function (x, depth) {
  return can_unquote63(depth) && ! atom63(x) && hd(x) === "unquote-splicing";
};
var expand_local = function (__x33) {
  var ____id1 = __x33;
  var __x34 = ____id1[0];
  var __name = ____id1[1];
  var __value = ____id1[2];
  setenv(__name, {_stash: true, variable: true});
  return ["%local", __name, macroexpand(__value)];
};
var expand_function = function (__x36) {
  var ____id2 = __x36;
  var __x37 = ____id2[0];
  var __args = ____id2[1];
  var __body = cut(____id2, 2);
  add(environment, {});
  var ____o3 = __args;
  var ____i5 = undefined;
  for (____i5 in ____o3) {
    var ____x38 = ____o3[____i5];
    var __e30;
    if (numeric63(____i5)) {
      __e30 = parseInt(____i5);
    } else {
      __e30 = ____i5;
    }
    var ____i51 = __e30;
    setenv(____x38, {_stash: true, variable: true});
  }
  var ____x39 = join(["%function", __args], macroexpand(__body));
  drop(environment);
  return ____x39;
};
var expand_definition = function (__x41) {
  var ____id3 = __x41;
  var __x42 = ____id3[0];
  var __name1 = ____id3[1];
  var __args11 = ____id3[2];
  var __body1 = cut(____id3, 3);
  add(environment, {});
  var ____o4 = __args11;
  var ____i6 = undefined;
  for (____i6 in ____o4) {
    var ____x43 = ____o4[____i6];
    var __e31;
    if (numeric63(____i6)) {
      __e31 = parseInt(____i6);
    } else {
      __e31 = ____i6;
    }
    var ____i61 = __e31;
    setenv(____x43, {_stash: true, variable: true});
  }
  var ____x44 = join([__x42, __name1, __args11], macroexpand(__body1));
  drop(environment);
  return ____x44;
};
var expand_macro = function (form) {
  return macroexpand(expand1(form));
};
expand1 = function (__x46) {
  var ____id4 = __x46;
  var __name2 = ____id4[0];
  var __body2 = cut(____id4, 1);
  return apply(macro_function(__name2), __body2);
};
_G.expand1 = expand1;
macroexpand = function (form) {
  if (symbol63(form)) {
    return macroexpand(symbol_expansion(form));
  } else {
    if (atom63(form)) {
      return form;
    } else {
      var __x47 = hd(form);
      if (__x47 === "%local") {
        return expand_local(form);
      } else {
        if (__x47 === "%function") {
          return expand_function(form);
        } else {
          if (__x47 === "%global-function") {
            return expand_definition(form);
          } else {
            if (__x47 === "%local-function") {
              return expand_definition(form);
            } else {
              if (macro63(__x47)) {
                return expand_macro(form);
              } else {
                return map(macroexpand, form);
              }
            }
          }
        }
      }
    }
  }
};
_G.macroexpand = macroexpand;
var quasiquote_list = function (form, depth) {
  var __xs = [["list"]];
  var ____o5 = form;
  var __k7 = undefined;
  for (__k7 in ____o5) {
    var __v4 = ____o5[__k7];
    var __e32;
    if (numeric63(__k7)) {
      __e32 = parseInt(__k7);
    } else {
      __e32 = __k7;
    }
    var __k8 = __e32;
    if (! number63(__k8)) {
      var __e33;
      if (quasisplice63(__v4, depth)) {
        __e33 = quasiexpand(__v4[1]);
      } else {
        __e33 = quasiexpand(__v4, depth);
      }
      var __v5 = __e33;
      last(__xs)[__k8] = __v5;
    }
  }
  var ____x50 = form;
  var ____i8 = 0;
  while (____i8 < _35(____x50)) {
    var __x51 = ____x50[____i8];
    if (quasisplice63(__x51, depth)) {
      var __x52 = quasiexpand(__x51[1]);
      add(__xs, __x52);
      add(__xs, ["list"]);
    } else {
      add(last(__xs), quasiexpand(__x51, depth));
    }
    ____i8 = ____i8 + 1;
  }
  var __pruned = keep(function (x) {
    return _35(x) > 1 || !( hd(x) === "list") || keys63(x);
  }, __xs);
  if (one63(__pruned)) {
    return hd(__pruned);
  } else {
    return join(["join"], __pruned);
  }
};
quasiexpand = function (form, depth) {
  if (quasiquoting63(depth)) {
    if (atom63(form)) {
      return ["quote", form];
    } else {
      if (can_unquote63(depth) && hd(form) === "unquote") {
        return quasiexpand(form[1]);
      } else {
        if (hd(form) === "unquote" || hd(form) === "unquote-splicing") {
          return quasiquote_list(form, depth - 1);
        } else {
          if (hd(form) === "quasiquote") {
            return quasiquote_list(form, depth + 1);
          } else {
            return quasiquote_list(form, depth);
          }
        }
      }
    }
  } else {
    if (atom63(form)) {
      return form;
    } else {
      if (hd(form) === "quote") {
        return form;
      } else {
        if (hd(form) === "quasiquote") {
          return quasiexpand(form[1], 1);
        } else {
          return map(function (x) {
            return quasiexpand(x, depth);
          }, form);
        }
      }
    }
  }
};
_G.quasiexpand = quasiexpand;
expand_if = function (__x56) {
  var ____id5 = __x56;
  var __a = ____id5[0];
  var __b1 = ____id5[1];
  var __c = cut(____id5, 2);
  if (is63(__b1)) {
    return [join(["%if", __a, __b1], expand_if(__c))];
  } else {
    if (is63(__a)) {
      return [__a];
    }
  }
};
_G.expand_if = expand_if;
indent_level = 0;
_G.indent_level = indent_level;
indentation = function () {
  var __s = "";
  var __i9 = 0;
  while (__i9 < indent_level) {
    __s = __s + "  ";
    __i9 = __i9 + 1;
  }
  return __s;
};
_G.indentation = indentation;
var reserved = {"=": true, "==": true, "+": true, "-": true, "%": true, "*": true, "/": true, "<": true, ">": true, "<=": true, ">=": true, "break": true, "case": true, "catch": true, "class": true, "const": true, "continue": true, "debugger": true, "default": true, "delete": true, "do": true, "else": true, "eval": true, "finally": true, "for": true, "function": true, "if": true, "import": true, "in": true, "instanceof": true, "let": true, "new": true, "return": true, "switch": true, "throw": true, "try": true, "typeof": true, "var": true, "void": true, "with": true, "and": true, "end": true, "load": true, "repeat": true, "while": true, "false": true, "local": true, "nil": true, "then": true, "not": true, "true": true, "elseif": true, "or": true, "until": true};
reserved63 = function (x) {
  return has63(reserved, x);
};
_G.reserved63 = reserved63;
var valid_code63 = function (n) {
  return number_code63(n) || n > 64 && n < 91 || n > 96 && n < 123 || n === 95;
};
var id = function (id) {
  var __e34;
  if (number_code63(code(id, 0))) {
    __e34 = "_";
  } else {
    __e34 = "";
  }
  var __id11 = __e34;
  var __i10 = 0;
  while (__i10 < _35(id)) {
    var __c1 = char(id, __i10);
    var __n7 = code(__c1);
    var __e35;
    if (__c1 === "-" && !( id === "-")) {
      __e35 = "_";
    } else {
      var __e36;
      if (valid_code63(__n7)) {
        __e36 = __c1;
      } else {
        var __e37;
        if (__i10 === 0) {
          __e37 = "_" + __n7;
        } else {
          __e37 = __n7;
        }
        __e36 = __e37;
      }
      __e35 = __e36;
    }
    var __c11 = __e35;
    __id11 = __id11 + __c11;
    __i10 = __i10 + 1;
  }
  if (reserved63(__id11)) {
    return "_" + __id11;
  } else {
    return __id11;
  }
};
valid_id63 = function (x) {
  return some63(x) && x === id(x);
};
_G.valid_id63 = valid_id63;
var __names = {};
unique = function (x) {
  var __x60 = id(x);
  if (__names[__x60]) {
    var __i11 = __names[__x60];
    __names[__x60] = __names[__x60] + 1;
    return unique(__x60 + __i11);
  } else {
    __names[__x60] = 1;
    return "__" + __x60;
  }
};
_G.unique = unique;
key = function (k) {
  if (string_literal63(k)) {
    var __i12 = inner(k);
    if (valid_id63(__i12)) {
      return __i12;
    } else {
      if (target === "js") {
        return k;
      } else {
        return "[" + k + "]";
      }
    }
  } else {
    return "[" + k + "]";
  }
};
_G.key = key;
mapo = function (f, t) {
  var __o6 = [];
  var ____o7 = t;
  var __k9 = undefined;
  for (__k9 in ____o7) {
    var __v6 = ____o7[__k9];
    var __e38;
    if (numeric63(__k9)) {
      __e38 = parseInt(__k9);
    } else {
      __e38 = __k9;
    }
    var __k10 = __e38;
    var __x61 = f(__v6);
    if (is63(__x61)) {
      add(__o6, literal(__k10));
      add(__o6, __x61);
    }
  }
  return __o6;
};
_G.mapo = mapo;
var ____x63 = [];
var ____x64 = [];
____x64.js = "!";
____x64.lua = "not";
____x63["not"] = ____x64;
var ____x65 = [];
____x65["*"] = true;
____x65["/"] = true;
____x65["%"] = true;
var ____x66 = [];
var ____x67 = [];
____x67.js = "+";
____x67.lua = "..";
____x66.cat = ____x67;
var ____x68 = [];
____x68["+"] = true;
____x68["-"] = true;
var ____x69 = [];
____x69["<"] = true;
____x69[">"] = true;
____x69["<="] = true;
____x69[">="] = true;
var ____x70 = [];
var ____x71 = [];
____x71.js = "===";
____x71.lua = "==";
____x70["="] = ____x71;
var ____x72 = [];
var ____x73 = [];
____x73.js = "&&";
____x73.lua = "and";
____x72["and"] = ____x73;
var ____x74 = [];
var ____x75 = [];
____x75.js = "||";
____x75.lua = "or";
____x74["or"] = ____x75;
var infix = [____x63, ____x65, ____x66, ____x68, ____x69, ____x70, ____x72, ____x74];
var unary63 = function (form) {
  return two63(form) && in63(hd(form), ["not", "-"]);
};
var index = function (k) {
  return k;
};
var precedence = function (form) {
  if (!( atom63(form) || unary63(form))) {
    var ____o8 = infix;
    var __k11 = undefined;
    for (__k11 in ____o8) {
      var __v7 = ____o8[__k11];
      var __e39;
      if (numeric63(__k11)) {
        __e39 = parseInt(__k11);
      } else {
        __e39 = __k11;
      }
      var __k12 = __e39;
      if (__v7[hd(form)]) {
        return index(__k12);
      }
    }
  }
  return 0;
};
var getop = function (op) {
  return find(function (level) {
    var __x77 = level[op];
    if (__x77 === true) {
      return op;
    } else {
      if (is63(__x77)) {
        return __x77[target];
      }
    }
  }, infix);
};
var infix63 = function (x) {
  return is63(getop(x));
};
infix_operator63 = function (x) {
  return obj63(x) && infix63(hd(x));
};
_G.infix_operator63 = infix_operator63;
var compile_args = function (args) {
  var __s1 = "(";
  var __c2 = "";
  var ____x78 = args;
  var ____i15 = 0;
  while (____i15 < _35(____x78)) {
    var __x79 = ____x78[____i15];
    __s1 = __s1 + __c2 + compile(__x79);
    __c2 = ", ";
    ____i15 = ____i15 + 1;
  }
  return __s1 + ")";
};
var escape_newlines = function (s) {
  var __s11 = "";
  var __i16 = 0;
  while (__i16 < _35(s)) {
    var __c3 = char(s, __i16);
    var __e40;
    if (__c3 === "\n") {
      __e40 = "\\n";
    } else {
      var __e41;
      if (__c3 === "\r") {
        __e41 = "\\r";
      } else {
        __e41 = __c3;
      }
      __e40 = __e41;
    }
    __s11 = __s11 + __e40;
    __i16 = __i16 + 1;
  }
  return __s11;
};
var compile_atom = function (x) {
  if (x === "nil" && target === "lua") {
    return x;
  } else {
    if (x === "nil") {
      return "undefined";
    } else {
      if (id_literal63(x)) {
        return inner(x);
      } else {
        if (string_literal63(x)) {
          return escape_newlines(x);
        } else {
          if (string63(x)) {
            return id(x);
          } else {
            if (boolean63(x)) {
              if (x) {
                return "true";
              } else {
                return "false";
              }
            } else {
              if (nan63(x)) {
                return "nan";
              } else {
                if (x === inf) {
                  return "inf";
                } else {
                  if (x === _inf) {
                    return "-inf";
                  } else {
                    if (number63(x)) {
                      return x + "";
                    } else {
                      throw new Error("Cannot compile atom: " + str(x));
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
var terminator = function (stmt63) {
  if (! stmt63) {
    return "";
  } else {
    if (target === "js") {
      return ";\n";
    } else {
      return "\n";
    }
  }
};
var compile_special = function (form, stmt63) {
  var ____id6 = form;
  var __x80 = ____id6[0];
  var __args2 = cut(____id6, 1);
  var ____id7 = getenv(__x80);
  var __special = ____id7.special;
  var __stmt = ____id7.stmt;
  var __self_tr63 = ____id7.tr;
  var __tr = terminator(stmt63 && ! __self_tr63);
  return apply(__special, __args2) + __tr;
};
var parenthesize_call63 = function (x) {
  return ! atom63(x) && hd(x) === "%function" || target === "lua" && (string_literal63(x) || literal63(x)) || precedence(x) > 0;
};
var unescape = function (str) {
  if (string_literal63(str)) {
    return _eval(str);
  } else {
    if (atom63(str)) {
      return ["%get", str];
    } else {
      return str;
    }
  }
};
var access = function (x, sep, y) {
  if (char(y, 0) === "[") {
    return x + y;
  } else {
    if (string_literal63(y)) {
      return x + "[" + y + "]";
    } else {
      return x + (sep || "") + y;
    }
  }
};
var parse_access = function (sep, f1, args) {
  var __e42;
  if (sep) {
    __e42 = reduce(function (x, y) {
      return access(x, sep, y);
    }, map(compile, map(unescape, args)));
  } else {
    __e42 = compile_args(stash42(args));
  }
  var __args12 = __e42;
  if (sep) {
    return access(f1, sep, __args12);
  } else {
    return f1 + __args12;
  }
};
var dispatch = function (form) {
  if (hd(form) === ":") {
    if (target === "lua") {
      return ":";
    } else {
      return ".";
    }
  } else {
    if (hd(form) === ".") {
      return ".";
    }
  }
};
var compile_call = function (form) {
  var __sep = dispatch(form);
  var __e43;
  if (__sep) {
    __e43 = tl(form);
  } else {
    __e43 = form;
  }
  var ____id8 = __e43;
  var __f = ____id8[0];
  var __args3 = cut(____id8, 1);
  var __e44;
  if (parenthesize_call63(__f)) {
    __e44 = "(" + compile(__f) + ")";
  } else {
    __e44 = compile(__f);
  }
  var __f1 = __e44;
  return parse_access(__sep, __f1, __args3);
};
var op_delims = function (parent, child) {
  var ____r62 = unstash(Array.prototype.slice.call(arguments, 2));
  var __parent = destash33(parent, ____r62);
  var __child = destash33(child, ____r62);
  var ____id9 = ____r62;
  var __right = ____id9.right;
  var __e45;
  if (__right) {
    __e45 = _6261;
  } else {
    __e45 = _62;
  }
  if (__e45(precedence(__child), precedence(__parent))) {
    return ["(", ")"];
  } else {
    return ["", ""];
  }
};
var compile_infix = function (form) {
  var ____id10 = form;
  var __op = ____id10[0];
  var ____id111 = cut(____id10, 1);
  var __a1 = ____id111[0];
  var __b2 = ____id111[1];
  var ____id12 = op_delims(form, __a1);
  var __ao = ____id12[0];
  var __ac = ____id12[1];
  var ____id13 = op_delims(form, __b2, {_stash: true, right: true});
  var __bo = ____id13[0];
  var __bc = ____id13[1];
  var __a2 = compile(__a1);
  var __b3 = compile(__b2);
  var __op1 = getop(__op);
  if (unary63(form)) {
    return __op1 + __ao + " " + __a2 + __ac;
  } else {
    return __ao + __a2 + __ac + " " + __op1 + " " + __bo + __b3 + __bc;
  }
};
compile_function = function (args, body) {
  var ____r64 = unstash(Array.prototype.slice.call(arguments, 2));
  var __args4 = destash33(args, ____r64);
  var __body3 = destash33(body, ____r64);
  var ____id14 = ____r64;
  var __name3 = ____id14.name;
  var __prefix = ____id14.prefix;
  var __e46;
  if (__name3) {
    __e46 = compile(__name3);
  } else {
    __e46 = "";
  }
  var __id15 = __e46;
  var __e47;
  if (target === "lua" && __args4.rest) {
    __e47 = join(__args4, ["|...|"]);
  } else {
    __e47 = __args4;
  }
  var __args13 = __e47;
  var __args5 = compile_args(__args13);
  indent_level = indent_level + 1;
  var ____x85 = compile(__body3, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var __body4 = ____x85;
  var __ind = indentation();
  var __e48;
  if (__prefix) {
    __e48 = __prefix + " ";
  } else {
    __e48 = "";
  }
  var __p = __e48;
  var __e49;
  if (target === "js") {
    __e49 = "";
  } else {
    __e49 = "end";
  }
  var __tr1 = __e49;
  if (__name3) {
    __tr1 = __tr1 + "\n";
  }
  if (target === "js") {
    return "function " + __id15 + __args5 + " {\n" + __body4 + __ind + "}" + __tr1;
  } else {
    return __p + "function " + __id15 + __args5 + "\n" + __body4 + __ind + __tr1;
  }
};
_G.compile_function = compile_function;
var can_return63 = function (form) {
  return is63(form) && (atom63(form) || !( hd(form) === "return") && ! statement63(hd(form)));
};
compile = function (form) {
  var ____r66 = unstash(Array.prototype.slice.call(arguments, 1));
  var __form = destash33(form, ____r66);
  var ____id16 = ____r66;
  var __stmt1 = ____id16.stmt;
  if (nil63(__form)) {
    return "";
  } else {
    if (special_form63(__form)) {
      return compile_special(__form, __stmt1);
    } else {
      var __tr2 = terminator(__stmt1);
      var __e50;
      if (__stmt1) {
        __e50 = indentation();
      } else {
        __e50 = "";
      }
      var __ind1 = __e50;
      var __e51;
      if (atom63(__form)) {
        __e51 = compile_atom(__form);
      } else {
        var __e52;
        if (infix63(hd(__form))) {
          __e52 = compile_infix(__form);
        } else {
          __e52 = compile_call(__form);
        }
        __e51 = __e52;
      }
      var __form1 = __e51;
      return __ind1 + __form1 + __tr2;
    }
  }
};
_G.compile = compile;
var lower_statement = function (form, tail63) {
  var __hoist = [];
  var __e = lower(form, __hoist, true, tail63);
  var __e53;
  if (some63(__hoist) && is63(__e)) {
    __e53 = join(["do"], __hoist, [__e]);
  } else {
    var __e54;
    if (is63(__e)) {
      __e54 = __e;
    } else {
      var __e55;
      if (_35(__hoist) > 1) {
        __e55 = join(["do"], __hoist);
      } else {
        __e55 = hd(__hoist);
      }
      __e54 = __e55;
    }
    __e53 = __e54;
  }
  return either(__e53, ["do"]);
};
var lower_body = function (body, tail63) {
  return lower_statement(join(["do"], body), tail63);
};
literal63 = function (form) {
  return ! atom63(form) && (hd(form) === "%array" || hd(form) === "%object");
};
_G.literal63 = literal63;
var standalone63 = function (form) {
  return ! atom63(form) && ! infix63(hd(form)) && ! literal63(form) && !( "get" === hd(form)) && !( "%statement" === hd(form)) || id_literal63(form);
};
var lower_do = function (args, hoist, stmt63, tail63) {
  var ____x91 = almost(args);
  var ____i17 = 0;
  while (____i17 < _35(____x91)) {
    var __x92 = ____x91[____i17];
    var ____y = lower(__x92, hoist, stmt63);
    if (yes(____y)) {
      var __e1 = ____y;
      if (standalone63(__e1)) {
        add(hoist, __e1);
      }
    }
    ____i17 = ____i17 + 1;
  }
  var __e2 = lower(last(args), hoist, stmt63, tail63);
  if (tail63 && can_return63(__e2)) {
    return ["return", __e2];
  } else {
    return __e2;
  }
};
var lower_set = function (args, hoist, stmt63, tail63) {
  var ____id17 = args;
  var __lh = ____id17[0];
  var __rh = ____id17[1];
  add(hoist, ["%set", lower(__lh, hoist), lower(__rh, hoist)]);
  if (!( stmt63 && ! tail63)) {
    return __lh;
  }
};
var lower_if = function (args, hoist, stmt63, tail63) {
  var ____id18 = args;
  var __cond = ____id18[0];
  var ___then = ____id18[1];
  var ___else = ____id18[2];
  if (stmt63) {
    var __e57;
    if (is63(___else)) {
      __e57 = [lower_body([___else], tail63)];
    }
    return add(hoist, join(["%if", lower(__cond, hoist), lower_body([___then], tail63)], __e57));
  } else {
    var __e3 = unique("e");
    add(hoist, ["%local", __e3]);
    var __e56;
    if (is63(___else)) {
      __e56 = [lower(["%set", __e3, ___else])];
    }
    add(hoist, join(["%if", lower(__cond, hoist), lower(["%set", __e3, ___then])], __e56));
    return __e3;
  }
};
var lower_short = function (x, args, hoist) {
  var ____id19 = args;
  var __a3 = ____id19[0];
  var __b4 = ____id19[1];
  var __hoist1 = [];
  var __b11 = lower(__b4, __hoist1);
  if (some63(__hoist1)) {
    var __id20 = unique("id");
    var __e58;
    if (x === "and") {
      __e58 = ["%if", __id20, __b4, __id20];
    } else {
      __e58 = ["%if", __id20, __id20, __b4];
    }
    return lower(["do", ["%local", __id20, __a3], __e58], hoist);
  } else {
    return [x, lower(__a3, hoist), __b11];
  }
};
var lower_try = function (args, hoist, tail63) {
  return add(hoist, ["%try", lower_body(args, tail63)]);
};
var lower_while = function (args, hoist) {
  var ____id21 = args;
  var __c4 = ____id21[0];
  var __body5 = cut(____id21, 1);
  var __pre = [];
  var __c5 = lower(__c4, __pre);
  var __e59;
  if (none63(__pre)) {
    __e59 = ["while", __c5, lower_body(__body5)];
  } else {
    __e59 = ["while", true, join(["do"], __pre, [["%if", ["not", __c5], ["break"]], lower_body(__body5)])];
  }
  return add(hoist, __e59);
};
var lower_for = function (args, hoist) {
  var ____id22 = args;
  var __t = ____id22[0];
  var __k13 = ____id22[1];
  var __body6 = cut(____id22, 2);
  return add(hoist, ["%for", lower(__t, hoist), __k13, lower_body(__body6)]);
};
var lower_function = function (args) {
  var ____id23 = args;
  var __a4 = ____id23[0];
  var __body7 = cut(____id23, 1);
  return ["%function", __a4, lower_body(__body7, true)];
};
var lower_definition = function (kind, args, hoist) {
  var ____id24 = args;
  var __name4 = ____id24[0];
  var __args6 = ____id24[1];
  var __body8 = cut(____id24, 2);
  return add(hoist, [kind, __name4, __args6, lower_body(__body8, true)]);
};
var lower_call = function (form, hoist) {
  var __form2 = map(function (x) {
    return lower(x, hoist);
  }, form);
  if (some63(__form2)) {
    return __form2;
  }
};
var pairwise63 = function (form) {
  return in63(hd(form), ["<", "<=", "=", ">=", ">"]);
};
var lower_pairwise = function (form) {
  if (pairwise63(form)) {
    var __e4 = [];
    var ____id25 = form;
    var __x121 = ____id25[0];
    var __args7 = cut(____id25, 1);
    reduce(function (a, b) {
      add(__e4, [__x121, a, b]);
      return a;
    }, __args7);
    return join(["and"], reverse(__e4));
  } else {
    return form;
  }
};
var lower_infix63 = function (form) {
  return infix63(hd(form)) && _35(form) > 3;
};
var lower_infix = function (form, hoist) {
  var __form3 = lower_pairwise(form);
  var ____id26 = __form3;
  var __x124 = ____id26[0];
  var __args8 = cut(____id26, 1);
  return lower(reduce(function (a, b) {
    return [__x124, b, a];
  }, reverse(__args8)), hoist);
};
var lower_special = function (form, hoist) {
  var __e5 = lower_call(form, hoist);
  if (__e5) {
    return add(hoist, __e5);
  }
};
lower = function (form, hoist, stmt63, tail63) {
  if (atom63(form)) {
    return form;
  } else {
    if (empty63(form)) {
      return ["%array"];
    } else {
      if (nil63(hoist)) {
        return lower_statement(form);
      } else {
        if (lower_infix63(form)) {
          return lower_infix(form, hoist);
        } else {
          var ____id27 = form;
          var __x127 = ____id27[0];
          var __args9 = cut(____id27, 1);
          if (__x127 === "do") {
            return lower_do(__args9, hoist, stmt63, tail63);
          } else {
            if (__x127 === "%call") {
              return lower(__args9, hoist, stmt63, tail63);
            } else {
              if (__x127 === "%set") {
                return lower_set(__args9, hoist, stmt63, tail63);
              } else {
                if (__x127 === "%if") {
                  return lower_if(__args9, hoist, stmt63, tail63);
                } else {
                  if (__x127 === "%try") {
                    return lower_try(__args9, hoist, tail63);
                  } else {
                    if (__x127 === "while") {
                      return lower_while(__args9, hoist);
                    } else {
                      if (__x127 === "%for") {
                        return lower_for(__args9, hoist);
                      } else {
                        if (__x127 === "%function") {
                          return lower_function(__args9);
                        } else {
                          if (__x127 === "%local-function" || __x127 === "%global-function") {
                            return lower_definition(__x127, __args9, hoist);
                          } else {
                            if (in63(__x127, ["and", "or"])) {
                              return lower_short(__x127, __args9, hoist);
                            } else {
                              if (statement63(__x127)) {
                                return lower_special(form, hoist);
                              } else {
                                return lower_call(form, hoist);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
_G.lower = lower;
expand = function (form) {
  return lower(macroexpand(form));
};
_G.expand = expand;
var run = function (code) {
  return (0 || eval)(code);
};
_37result = undefined;
_G._37result = _37result;
_eval = function (form) {
  var __previous = target;
  target = "js";
  var __code = compile(expand(["set", "%result", form]));
  target = __previous;
  run(__code);
  return _37result;
};
_G._eval = _eval;
immediate_call63 = function (x) {
  return obj63(x) && obj63(hd(x)) && hd(hd(x)) === "%function";
};
_G.immediate_call63 = immediate_call63;
setenv("do", {_stash: true, special: function () {
  var __forms1 = unstash(Array.prototype.slice.call(arguments, 0));
  var __s3 = "";
  var ____x132 = __forms1;
  var ____i19 = 0;
  while (____i19 < _35(____x132)) {
    var __x133 = ____x132[____i19];
    if (target === "lua" && immediate_call63(__x133) && "\n" === char(__s3, edge(__s3))) {
      __s3 = clip(__s3, 0, edge(__s3)) + ";\n";
    }
    __s3 = __s3 + compile(__x133, {_stash: true, stmt: true});
    if (! atom63(__x133)) {
      if (hd(__x133) === "return" || hd(__x133) === "break") {
        break;
      }
    }
    ____i19 = ____i19 + 1;
  }
  return __s3;
}, stmt: true, tr: true});
setenv("%if", {_stash: true, special: function (cond, cons, alt) {
  var __cond2 = compile(cond);
  indent_level = indent_level + 1;
  var ____x136 = compile(cons, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var __cons1 = ____x136;
  var __e60;
  if (alt) {
    indent_level = indent_level + 1;
    var ____x137 = compile(alt, {_stash: true, stmt: true});
    indent_level = indent_level - 1;
    __e60 = ____x137;
  }
  var __alt1 = __e60;
  var __ind3 = indentation();
  var __s5 = "";
  if (target === "js") {
    __s5 = __s5 + __ind3 + "if (" + __cond2 + ") {\n" + __cons1 + __ind3 + "}";
  } else {
    __s5 = __s5 + __ind3 + "if " + __cond2 + " then\n" + __cons1;
  }
  if (__alt1 && target === "js") {
    __s5 = __s5 + " else {\n" + __alt1 + __ind3 + "}";
  } else {
    if (__alt1) {
      __s5 = __s5 + __ind3 + "else\n" + __alt1;
    }
  }
  if (target === "lua") {
    return __s5 + __ind3 + "end\n";
  } else {
    return __s5 + "\n";
  }
}, stmt: true, tr: true});
setenv("while", {_stash: true, special: function (cond, form) {
  var __cond4 = compile(cond);
  indent_level = indent_level + 1;
  var ____x139 = compile(form, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var __body10 = ____x139;
  var __ind5 = indentation();
  if (target === "js") {
    return __ind5 + "while (" + __cond4 + ") {\n" + __body10 + __ind5 + "}\n";
  } else {
    return __ind5 + "while " + __cond4 + " do\n" + __body10 + __ind5 + "end\n";
  }
}, stmt: true, tr: true});
setenv("%for", {_stash: true, special: function (t, k, form) {
  var __t2 = compile(t);
  var __ind7 = indentation();
  indent_level = indent_level + 1;
  var ____x141 = compile(form, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var __body12 = ____x141;
  if (target === "lua") {
    return __ind7 + "for " + k + " in next, " + __t2 + " do\n" + __body12 + __ind7 + "end\n";
  } else {
    return __ind7 + "for (" + k + " in " + __t2 + ") {\n" + __body12 + __ind7 + "}\n";
  }
}, stmt: true, tr: true});
setenv("%try", {_stash: true, special: function (form) {
  var __e8 = unique("e");
  var __ind9 = indentation();
  indent_level = indent_level + 1;
  var ____x146 = compile(form, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var __body14 = ____x146;
  var __hf1 = ["return", ["%array", false, __e8]];
  indent_level = indent_level + 1;
  var ____x149 = compile(__hf1, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var __h1 = ____x149;
  return __ind9 + "try {\n" + __body14 + __ind9 + "}\n" + __ind9 + "catch (" + __e8 + ") {\n" + __h1 + __ind9 + "}\n";
}, stmt: true, tr: true});
setenv("%delete", {_stash: true, special: function (place) {
  return indentation() + "delete " + compile(place);
}, stmt: true});
setenv("break", {_stash: true, special: function () {
  return indentation() + "break";
}, stmt: true});
setenv("%function", {_stash: true, special: function (args, body) {
  return compile_function(args, body);
}});
setenv("%global-function", {_stash: true, special: function (name, args, body) {
  if (target === "lua") {
    var __x153 = compile_function(args, body, {_stash: true, name: name});
    return indentation() + __x153;
  } else {
    return compile(["%set", name, ["%function", args, body]], {_stash: true, stmt: true});
  }
}, stmt: true, tr: true});
setenv("%local-function", {_stash: true, special: function (name, args, body) {
  if (target === "lua") {
    var __x159 = compile_function(args, body, {_stash: true, name: name, prefix: "local"});
    return indentation() + __x159;
  } else {
    return compile(["%local", name, ["%function", args, body]], {_stash: true, stmt: true});
  }
}, stmt: true, tr: true});
setenv("return", {_stash: true, special: function (x) {
  var __e61;
  if (nil63(x)) {
    __e61 = "return";
  } else {
    __e61 = "return " + compile(x);
  }
  var __x163 = __e61;
  return indentation() + __x163;
}, stmt: true});
setenv("new", {_stash: true, special: function (x) {
  return "new " + compile(x);
}});
setenv("typeof", {_stash: true, special: function (x) {
  return "typeof(" + compile(x) + ")";
}});
setenv("error", {_stash: true, special: function (x) {
  var __e62;
  if (target === "js") {
    __e62 = "throw " + compile(["new", ["Error", x]]);
  } else {
    __e62 = "error(" + compile(x) + ")";
  }
  var __e12 = __e62;
  return indentation() + __e12;
}, stmt: true});
setenv("%local", {_stash: true, special: function (name, value) {
  var __id29 = compile(name);
  var __value11 = compile(value);
  var __e63;
  if (is63(value)) {
    __e63 = " = " + __value11;
  } else {
    __e63 = "";
  }
  var __rh2 = __e63;
  var __e64;
  if (target === "js") {
    __e64 = "var ";
  } else {
    __e64 = "local ";
  }
  var __keyword1 = __e64;
  var __ind11 = indentation();
  return __ind11 + __keyword1 + __id29 + __rh2;
}, stmt: true});
setenv("%set", {_stash: true, special: function (lh, rh) {
  var __lh2 = compile(lh);
  var __e65;
  if (nil63(rh)) {
    __e65 = "nil";
  } else {
    __e65 = rh;
  }
  var __rh4 = compile(__e65);
  return indentation() + __lh2 + " = " + __rh4;
}, stmt: true});
setenv("get", {_stash: true, special: function (t, k) {
  var __t12 = compile(t);
  var __k121 = compile(k);
  if (target === "lua" && char(__t12, 0) === "{" || infix_operator63(t)) {
    __t12 = "(" + __t12 + ")";
  }
  if (string_literal63(k) && valid_id63(inner(k))) {
    return __t12 + "." + inner(k);
  } else {
    return __t12 + "[" + __k121 + "]";
  }
}});
setenv("%get", {_stash: true, special: function (t) {
  return "[" + compile(t) + "]";
}});
setenv("%at", {_stash: true, special: function (t) {
  var __e66;
  if (target === "lua" && number63(t)) {
    t = t + 1;
    __e66 = t;
  } else {
    var __e67;
    if (target === "lua") {
      __e67 = ["+", t, 1];
    } else {
      __e67 = t;
    }
    __e66 = __e67;
  }
  var __t14 = __e66;
  return compile(["%get", __t14]);
}});
setenv("%array", {_stash: true, special: function () {
  var __forms3 = unstash(Array.prototype.slice.call(arguments, 0));
  var __e68;
  if (target === "lua") {
    __e68 = "{";
  } else {
    __e68 = "[";
  }
  var __open1 = __e68;
  var __e69;
  if (target === "lua") {
    __e69 = "}";
  } else {
    __e69 = "]";
  }
  var __close1 = __e69;
  var __s7 = "";
  var __c7 = "";
  var ____o10 = __forms3;
  var __k16 = undefined;
  for (__k16 in ____o10) {
    var __v9 = ____o10[__k16];
    var __e70;
    if (numeric63(__k16)) {
      __e70 = parseInt(__k16);
    } else {
      __e70 = __k16;
    }
    var __k17 = __e70;
    if (number63(__k17)) {
      __s7 = __s7 + __c7 + compile(__v9);
      __c7 = ", ";
    }
  }
  return __open1 + __s7 + __close1;
}});
setenv("%object", {_stash: true, special: function () {
  var __forms5 = unstash(Array.prototype.slice.call(arguments, 0));
  var __s9 = "{";
  var __c9 = "";
  var __e71;
  if (target === "lua") {
    __e71 = " = ";
  } else {
    __e71 = ": ";
  }
  var __sep2 = __e71;
  var ____o12 = pair(__forms5);
  var __k21 = undefined;
  for (__k21 in ____o12) {
    var __v12 = ____o12[__k21];
    var __e72;
    if (numeric63(__k21)) {
      __e72 = parseInt(__k21);
    } else {
      __e72 = __k21;
    }
    var __k22 = __e72;
    if (number63(__k22)) {
      var ____id31 = __v12;
      var __k23 = ____id31[0];
      var __v13 = ____id31[1];
      if (! string63(__k23)) {
        throw new Error("Illegal key: " + str(__k23));
      }
      __s9 = __s9 + __c9 + key(__k23) + __sep2 + compile(__v13);
      __c9 = ", ";
    }
  }
  return __s9 + "}";
}});
setenv("%literal", {_stash: true, special: function () {
  var __args111 = unstash(Array.prototype.slice.call(arguments, 0));
  var __s111 = "";
  var ____x174 = __args111;
  var ____i25 = 0;
  while (____i25 < _35(____x174)) {
    var __x175 = ____x174[____i25];
    if (string_literal63(__x175)) {
      __s111 = __s111 + _eval(__x175);
    } else {
      __s111 = __s111 + compile(__x175);
    }
    ____i25 = ____i25 + 1;
  }
  return __s111;
}});
setenv("%statement", {_stash: true, special: function () {
  var __args131 = unstash(Array.prototype.slice.call(arguments, 0));
  var __s13 = indentation();
  var ____x178 = __args131;
  var ____i27 = 0;
  while (____i27 < _35(____x178)) {
    var __x179 = ____x178[____i27];
    if (string_literal63(__x179)) {
      __s13 = __s13 + _eval(__x179);
    } else {
      __s13 = __s13 + compile(__x179);
    }
    ____i27 = ____i27 + 1;
  }
  __s13 = __s13 + "\n";
  return __s13;
}, stmt: true, tr: true});
setenv("%indentation", {_stash: true, special: function () {
  return indentation();
}});
exports.run = run;
exports._eval = _eval;
exports.expand = expand;
exports.compile = compile;
