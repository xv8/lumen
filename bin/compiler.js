getenv = function (k, p, scoped63) {
  var ____r = unstash(Array.prototype.slice.call(arguments, 3));
  var __k = destash33(k, ____r);
  var __p = destash33(p, ____r);
  var __scoped63 = destash33(scoped63, ____r);
  var ____id = ____r;
  var __env = ____id.environment;
  if (string63(__k)) {
    var __env1 = __env || environment;
    var __i = edge(__env1);
    while (__i >= 0) {
      var __b = __env1[__i][__k];
      if (__scoped63 && __b._scope) {
        break;
      } else {
        if (is63(__b)) {
          var __e20;
          if (__p) {
            __e20 = __b[__p];
          } else {
            __e20 = __b;
          }
          return __e20;
        } else {
          __i = __i - 1;
        }
      }
    }
  }
};
_G.getenv = getenv;
macro_function = function (k, env) {
  return getenv(k, "macro", {_stash: true, environment: env});
};
_G.macro_function = macro_function;
macro63 = function (k, env) {
  return is63(macro_function(k, env));
};
_G.macro63 = macro63;
special63 = function (k, env) {
  return is63(getenv(k, "special", {_stash: true, environment: env}));
};
_G.special63 = special63;
special_form63 = function (form, env) {
  return ! atom63(form) && special63(hd(form), env);
};
_G.special_form63 = special_form63;
statement63 = function (k, env) {
  return special63(k) && getenv(k, "stmt", {_stash: true, environment: env});
};
_G.statement63 = statement63;
symbol_expansion = function (k, env) {
  return getenv(k, "symbol", {_stash: true, environment: env});
};
_G.symbol_expansion = symbol_expansion;
symbol63 = function (k, env) {
  return is63(symbol_expansion(k, env));
};
_G.symbol63 = symbol63;
variable63 = function (k, env) {
  return is63(getenv(k, "variable", {_stash: true, environment: env}));
};
_G.variable63 = variable63;
bound63 = function (x, env) {
  return macro63(x, env) || special63(x, env) || symbol63(x, env) || variable63(x, env);
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
literal = function (s) {
  if (string_literal63(s)) {
    return s;
  } else {
    return quoted(s);
  }
};
_G.literal = literal;
stash42 = function (args) {
  if (keys63(args)) {
    var __l = ["%object", "\"_stash\"", true];
    var ____o351 = args;
    var __k1 = undefined;
    for (__k1 in ____o351) {
      var __v = ____o351[__k1];
      var __e21;
      if (numeric63(__k1)) {
        __e21 = parseInt(__k1);
      } else {
        __e21 = __k1;
      }
      var __k2 = __e21;
      if (! number63(__k2)) {
        add(__l, literal(__k2));
        add(__l, __v);
      }
    }
    return join(args, [__l]);
  } else {
    return args;
  }
};
_G.stash42 = stash42;
bias = function (k) {
  if (number63(k) && !( target === "js")) {
    if (target === "js") {
      k = k - 1;
    } else {
      k = k + 1;
    }
  }
  return k;
};
_G.bias = bias;
bind = function (lh, rh) {
  if (atom63(lh)) {
    return [lh, rh];
  } else {
    var __id1 = unique("id");
    var __bs = [__id1, rh];
    var ____o3511 = lh;
    var __k3 = undefined;
    for (__k3 in ____o3511) {
      var __v1 = ____o3511[__k3];
      var __e22;
      if (numeric63(__k3)) {
        __e22 = parseInt(__k3);
      } else {
        __e22 = __k3;
      }
      var __k4 = __e22;
      var __e23;
      if (__k4 === "rest") {
        __e23 = ["cut", __id1, _35(lh)];
      } else {
        __e23 = ["get", __id1, ["quote", bias(__k4)]];
      }
      var __x5 = __e23;
      if (is63(__k4)) {
        var __e24;
        if (__v1 === true) {
          __e24 = __k4;
        } else {
          __e24 = __v1;
        }
        var __k5 = __e24;
        __bs = join(__bs, bind(__k5, __x5));
      }
    }
    return __bs;
  }
};
_G.bind = bind;
setenv("arguments%", {_stash: true, macro: function (from) {
  return [["get", ["get", ["get", "Array", ["quote", "prototype"]], ["quote", "slice"]], ["quote", "call"]], "arguments", from];
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
    var ____o3512 = args;
    var __k6 = undefined;
    for (__k6 in ____o3512) {
      var __v2 = ____o3512[__k6];
      var __e25;
      if (numeric63(__k6)) {
        __e25 = parseInt(__k6);
      } else {
        __e25 = __k6;
      }
      var __k7 = __e25;
      if (number63(__k7)) {
        if (atom63(__v2)) {
          add(__args1, __v2);
        } else {
          var __x30 = unique("x");
          add(__args1, __x30);
          __bs1 = join(__bs1, [__v2, __x30]);
        }
      }
    }
    if (keys63(args)) {
      __bs1 = join(__bs1, [__r19, rest()]);
      var __n = _35(__args1);
      var __i1 = 0;
      while (__i1 < __n) {
        var __v3 = __args1[__i1];
        __bs1 = join(__bs1, [__v3, ["destash!", __v3, __r19]]);
        __i1 = __i1 + 1;
      }
      __bs1 = join(__bs1, [keys(args), __r19]);
    }
    return [__args1, join(["let", __bs1], body)];
  }
};
_G.bind42 = bind42;
quoting63 = function (depth) {
  return number63(depth);
};
_G.quoting63 = quoting63;
quasiquoting63 = function (depth) {
  return quoting63(depth) && depth > 0;
};
_G.quasiquoting63 = quasiquoting63;
can_unquote63 = function (depth) {
  return quoting63(depth) && depth === 1;
};
_G.can_unquote63 = can_unquote63;
quasisplice63 = function (x, depth) {
  return can_unquote63(depth) && ! atom63(x) && hd(x) === "unquote-splicing";
};
_G.quasisplice63 = quasisplice63;
expand_local = function (__x38, env) {
  var ____id2 = __x38;
  var __x39 = ____id2[0];
  var __name = ____id2[1];
  var __value = ____id2[2];
  setenv(__name, {_stash: true, variable: true, environment: env});
  return ["%local", __name, macroexpand(__value, env)];
};
_G.expand_local = expand_local;
expand_function = function (__x41, env) {
  var ____id3 = __x41;
  var __x42 = ____id3[0];
  var __args = ____id3[1];
  var __body = cut(____id3, 2);
  add(env || environment, {_scope: true});
  var ____o3513 = __args;
  var ____i351 = undefined;
  for (____i351 in ____o3513) {
    var ____x356 = ____o3513[____i351];
    var __e26;
    if (numeric63(____i351)) {
      __e26 = parseInt(____i351);
    } else {
      __e26 = ____i351;
    }
    var ____i3511 = __e26;
    setenv(____x356, {_stash: true, variable: true, environment: env || environment});
  }
  var ____x352 = join(["%function", __args], macroexpand(__body, env));
  drop(env || environment);
  return ____x352;
};
_G.expand_function = expand_function;
expand_definition = function (__x44, env) {
  var ____id4 = __x44;
  var __x45 = ____id4[0];
  var __name1 = ____id4[1];
  var __args11 = ____id4[2];
  var __body1 = cut(____id4, 3);
  add(env || environment, {_scope: true});
  var ____o3514 = __args11;
  var ____i3512 = undefined;
  for (____i3512 in ____o3514) {
    var ____x3561 = ____o3514[____i3512];
    var __e27;
    if (numeric63(____i3512)) {
      __e27 = parseInt(____i3512);
    } else {
      __e27 = ____i3512;
    }
    var ____i3513 = __e27;
    setenv(____x3561, {_stash: true, variable: true, environment: env || environment});
  }
  var ____x3521 = join([__x45, __name1, __args11], macroexpand(__body1, env));
  drop(env || environment);
  return ____x3521;
};
_G.expand_definition = expand_definition;
expand_macro = function (form, env) {
  return macroexpand(expand1(form, env), env);
};
_G.expand_macro = expand_macro;
expand1 = function (__x47, env) {
  var ____id5 = __x47;
  var __name2 = ____id5[0];
  var __body2 = cut(____id5, 1);
  return apply(macro_function(__name2, env), __body2);
};
_G.expand1 = expand1;
macroexpand = function (form, env) {
  if (symbol63(form, env)) {
    return macroexpand(symbol_expansion(form, env), env);
  } else {
    if (atom63(form)) {
      return form;
    } else {
      var __x48 = hd(form);
      if (__x48 === "%local") {
        return expand_local(form, env);
      } else {
        if (__x48 === "%function") {
          return expand_function(form, env);
        } else {
          if (__x48 === "%global-function") {
            return expand_definition(form, env);
          } else {
            if (__x48 === "%local-function") {
              return expand_definition(form, env);
            } else {
              if (macro63(__x48, env)) {
                return expand_macro(form, env);
              } else {
                return map(function (x) {
                  return macroexpand(x, env);
                }, form);
              }
            }
          }
        }
      }
    }
  }
};
_G.macroexpand = macroexpand;
quasiquote_environment = [{}];
_G.quasiquote_environment = quasiquote_environment;
quasiquote_list = function (form, depth, env) {
  var __xs = [["list"]];
  var ____o3515 = form;
  var __k8 = undefined;
  for (__k8 in ____o3515) {
    var __v4 = ____o3515[__k8];
    var __e28;
    if (numeric63(__k8)) {
      __e28 = parseInt(__k8);
    } else {
      __e28 = __k8;
    }
    var __k9 = __e28;
    if (! number63(__k9)) {
      var __e29;
      if (quasisplice63(__v4, depth)) {
        __e29 = quasiexpand(__v4[1], 0, env);
      } else {
        __e29 = quasiexpand(__v4, depth, env);
      }
      var __v5 = __e29;
      last(__xs)[__k9] = __v5;
    }
  }
  var ____x358 = form;
  var ____i353 = 0;
  while (____i353 < _35(____x358)) {
    var __x52 = ____x358[____i353];
    if (quasisplice63(__x52, depth)) {
      var __x53 = quasiexpand(__x52[1], 0, env);
      add(__xs, __x53);
      add(__xs, ["list"]);
    } else {
      add(last(__xs), quasiexpand(__x52, depth, env));
    }
    ____i353 = ____i353 + 1;
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
_G.quasiquote_list = quasiquote_list;
resolve_id = function (form, depth, env) {
  if (scoped_id63(form)) {
    var __id6 = form + "_" + (depth || 0);
    if (! (last(env || environment)[form] || {}).symbol) {
      setenv(form, {_stash: true, symbol: unique(form), environment: env});
    }
    return symbol_expansion(form, env);
  } else {
    return form;
  }
};
_G.resolve_id = resolve_id;
quasiexpand = function (form, depth, env) {
  if (quasiquoting63(depth)) {
    if (atom63(form)) {
      return ["quote", resolve_id(form, depth, env)];
    } else {
      if (can_unquote63(depth) && hd(form) === "unquote") {
        return quasiexpand(form[1], 0, env);
      } else {
        if (hd(form) === "unquote" || hd(form) === "unquote-splicing") {
          var ____e351 = drop(quasiquote_environment || environment);
          var ____x354 = quasiquote_list(form, depth - 1, env);
          add(quasiquote_environment || environment, ____e351);
          return ____x354;
        } else {
          if (hd(form) === "quasiquote") {
            add(quasiquote_environment || environment, {_scope: true});
            var ____x3522 = quasiquote_list(form, depth + 1, env);
            drop(quasiquote_environment || environment);
            return ____x3522;
          } else {
            return quasiquote_list(form, depth, env);
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
          return quasiexpand(form[1], 1, env);
        } else {
          return map(function (x) {
            return quasiexpand(x, depth, env);
          }, form);
        }
      }
    }
  }
};
_G.quasiexpand = quasiexpand;
expand_if = function (__x57) {
  var ____id7 = __x57;
  var __a = ____id7[0];
  var __b1 = ____id7[1];
  var __c = cut(____id7, 2);
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
  var __i2 = 0;
  while (__i2 < indent_level) {
    __s = __s + "  ";
    __i2 = __i2 + 1;
  }
  return __s;
};
_G.indentation = indentation;
reserved = {"=": true, "==": true, "+": true, "-": true, "%": true, "*": true, "/": true, "<": true, ">": true, "<=": true, ">=": true, "break": true, "case": true, "catch": true, "class": true, "const": true, "continue": true, "debugger": true, "default": true, "delete": true, "do": true, "else": true, "eval": true, "finally": true, "for": true, "function": true, "if": true, "import": true, "in": true, "instanceof": true, "let": true, "new": true, "return": true, "switch": true, "throw": true, "try": true, "typeof": true, "var": true, "void": true, "with": true, "and": true, "end": true, "load": true, "repeat": true, "while": true, "false": true, "local": true, "nil": true, "then": true, "not": true, "true": true, "elseif": true, "or": true, "until": true};
_G.reserved = reserved;
reserved63 = function (x) {
  return has63(reserved, x);
};
_G.reserved63 = reserved63;
valid_code63 = function (n) {
  return number_code63(n) || n > 64 && n < 91 || n > 96 && n < 123 || n === 95;
};
_G.valid_code63 = valid_code63;
id = function (id) {
  var __e30;
  if (number_code63(code(id, 0))) {
    __e30 = "_";
  } else {
    __e30 = "";
  }
  var __id11 = __e30;
  var __i3 = 0;
  while (__i3 < _35(id)) {
    var __c1 = char(id, __i3);
    var __n1 = code(__c1);
    var __e31;
    if (__c1 === "-" && !( id === "-")) {
      __e31 = "_";
    } else {
      var __e32;
      if (valid_code63(__n1)) {
        __e32 = __c1;
      } else {
        var __e33;
        if (__i3 === 0) {
          __e33 = "_" + __n1;
        } else {
          __e33 = __n1;
        }
        __e32 = __e33;
      }
      __e31 = __e32;
    }
    var __c11 = __e31;
    __id11 = __id11 + __c11;
    __i3 = __i3 + 1;
  }
  if (reserved63(__id11)) {
    return "_" + __id11;
  } else {
    return __id11;
  }
};
_G.id = id;
valid_id63 = function (x) {
  return some63(x) && x === id(x);
};
_G.valid_id63 = valid_id63;
var __names = {};
unique = function (x) {
  var __x61 = id(x);
  if (__names[__x61]) {
    var __i4 = __names[__x61];
    __names[__x61] = __names[__x61] + 1;
    return unique(__x61 + __i4);
  } else {
    __names[__x61] = 1;
    return "__" + __x61;
  }
};
_G.unique = unique;
key = function (k) {
  if (string_literal63(k)) {
    var __i5 = inner(k);
    if (valid_id63(__i5)) {
      return __i5;
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
  var __o = [];
  var ____o3516 = t;
  var __k10 = undefined;
  for (__k10 in ____o3516) {
    var __v6 = ____o3516[__k10];
    var __e34;
    if (numeric63(__k10)) {
      __e34 = parseInt(__k10);
    } else {
      __e34 = __k10;
    }
    var __k11 = __e34;
    var __x62 = f(__v6);
    if (is63(__x62)) {
      add(__o, literal(__k11));
      add(__o, __x62);
    }
  }
  return __o;
};
_G.mapo = mapo;
var ____x64 = [];
var ____x65 = [];
____x65.js = "!";
____x65.lua = "not";
____x64["not"] = ____x65;
var ____x66 = [];
____x66["*"] = true;
____x66["/"] = true;
____x66["%"] = true;
var ____x67 = [];
var ____x68 = [];
____x68.js = "+";
____x68.lua = "..";
____x67.cat = ____x68;
var ____x69 = [];
____x69["+"] = true;
____x69["-"] = true;
var ____x70 = [];
____x70["<"] = true;
____x70[">"] = true;
____x70["<="] = true;
____x70[">="] = true;
var ____x71 = [];
var ____x72 = [];
____x72.js = "===";
____x72.lua = "==";
____x71["="] = ____x72;
var ____x73 = [];
var ____x74 = [];
____x74.js = "&&";
____x74.lua = "and";
____x73["and"] = ____x74;
var ____x75 = [];
var ____x76 = [];
____x76.js = "||";
____x76.lua = "or";
____x75["or"] = ____x76;
infix = [____x64, ____x66, ____x67, ____x69, ____x70, ____x71, ____x73, ____x75];
_G.infix = infix;
unary63 = function (form) {
  return two63(form) && in63(hd(form), ["not", "-"]);
};
_G.unary63 = unary63;
index = function (k) {
  return k;
};
_G.index = index;
precedence = function (form) {
  if (!( atom63(form) || unary63(form))) {
    var ____o3517 = infix;
    var __k12 = undefined;
    for (__k12 in ____o3517) {
      var __v7 = ____o3517[__k12];
      var __e35;
      if (numeric63(__k12)) {
        __e35 = parseInt(__k12);
      } else {
        __e35 = __k12;
      }
      var __k13 = __e35;
      if (__v7[hd(form)]) {
        return index(__k13);
      }
    }
  }
  return 0;
};
_G.precedence = precedence;
getop = function (op) {
  return find(function (level) {
    var __x78 = level[op];
    if (__x78 === true) {
      return op;
    } else {
      if (is63(__x78)) {
        return __x78[target];
      }
    }
  }, infix);
};
_G.getop = getop;
infix63 = function (x) {
  return is63(getop(x));
};
_G.infix63 = infix63;
infix_operator63 = function (x) {
  return obj63(x) && infix63(hd(x));
};
_G.infix_operator63 = infix_operator63;
compile_args = function (args) {
  var __s1 = "(";
  var __c2 = "";
  var ____x3581 = args;
  var ____i3531 = 0;
  while (____i3531 < _35(____x3581)) {
    var __x79 = ____x3581[____i3531];
    __s1 = __s1 + __c2 + compile(__x79);
    __c2 = ", ";
    ____i3531 = ____i3531 + 1;
  }
  return __s1 + ")";
};
_G.compile_args = compile_args;
escape_newlines = function (s) {
  var __s11 = "";
  var __i6 = 0;
  while (__i6 < _35(s)) {
    var __c3 = char(s, __i6);
    var __e36;
    if (__c3 === "\n") {
      __e36 = "\\n";
    } else {
      var __e37;
      if (__c3 === "\r") {
        __e37 = "\\r";
      } else {
        __e37 = __c3;
      }
      __e36 = __e37;
    }
    __s11 = __s11 + __e36;
    __i6 = __i6 + 1;
  }
  return __s11;
};
_G.escape_newlines = escape_newlines;
compile_atom = function (x) {
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
_G.compile_atom = compile_atom;
terminator = function (stmt63) {
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
_G.terminator = terminator;
compile_special = function (form, stmt63) {
  var ____id8 = form;
  var __x80 = ____id8[0];
  var __args2 = cut(____id8, 1);
  var ____id9 = getenv(__x80);
  var __special = ____id9.special;
  var __stmt = ____id9.stmt;
  var __self_tr63 = ____id9.tr;
  var __tr = terminator(stmt63 && ! __self_tr63);
  return apply(__special, __args2) + __tr;
};
_G.compile_special = compile_special;
parenthesize_call63 = function (x) {
  return ! atom63(x) && hd(x) === "%function" || precedence(x) > 0;
};
_G.parenthesize_call63 = parenthesize_call63;
compile_call = function (form) {
  var __f = hd(form);
  var __f1 = compile(__f);
  var __args3 = compile_args(stash42(tl(form)));
  if (parenthesize_call63(__f)) {
    return "(" + __f1 + ")" + __args3;
  } else {
    return __f1 + __args3;
  }
};
_G.compile_call = compile_call;
op_delims = function (parent, child) {
  var ____r59 = unstash(Array.prototype.slice.call(arguments, 2));
  var __parent = destash33(parent, ____r59);
  var __child = destash33(child, ____r59);
  var ____id10 = ____r59;
  var __right = ____id10.right;
  var __e38;
  if (__right) {
    __e38 = _6261;
  } else {
    __e38 = _62;
  }
  if (__e38(precedence(__child), precedence(__parent))) {
    return ["(", ")"];
  } else {
    return ["", ""];
  }
};
_G.op_delims = op_delims;
compile_infix = function (form) {
  var ____id111 = form;
  var __op = ____id111[0];
  var ____id12 = cut(____id111, 1);
  var __a1 = ____id12[0];
  var __b2 = ____id12[1];
  var ____id13 = op_delims(form, __a1);
  var __ao = ____id13[0];
  var __ac = ____id13[1];
  var ____id14 = op_delims(form, __b2, {_stash: true, right: true});
  var __bo = ____id14[0];
  var __bc = ____id14[1];
  var __a2 = compile(__a1);
  var __b3 = compile(__b2);
  var __op1 = getop(__op);
  if (unary63(form)) {
    return __op1 + __ao + " " + __a2 + __ac;
  } else {
    return __ao + __a2 + __ac + " " + __op1 + " " + __bo + __b3 + __bc;
  }
};
_G.compile_infix = compile_infix;
compile_function = function (args, body) {
  var ____r61 = unstash(Array.prototype.slice.call(arguments, 2));
  var __args4 = destash33(args, ____r61);
  var __body3 = destash33(body, ____r61);
  var ____id15 = ____r61;
  var __name3 = ____id15.name;
  var __prefix = ____id15.prefix;
  var __e39;
  if (__name3) {
    __e39 = compile(__name3);
  } else {
    __e39 = "";
  }
  var __id16 = __e39;
  var __e40;
  if (target === "lua" && __args4.rest) {
    __e40 = join(__args4, ["|...|"]);
  } else {
    __e40 = __args4;
  }
  var __args12 = __e40;
  var __args5 = compile_args(__args12);
  indent_level = indent_level + 1;
  var ____x3510 = compile(__body3, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var __body4 = ____x3510;
  var __ind = indentation();
  var __e41;
  if (__prefix) {
    __e41 = __prefix + " ";
  } else {
    __e41 = "";
  }
  var __p1 = __e41;
  var __e42;
  if (target === "js") {
    __e42 = "";
  } else {
    __e42 = "end";
  }
  var __tr1 = __e42;
  if (__name3) {
    __tr1 = __tr1 + "\n";
  }
  if (target === "js") {
    return "function " + __id16 + __args5 + " {\n" + __body4 + __ind + "}" + __tr1;
  } else {
    return __p1 + "function " + __id16 + __args5 + "\n" + __body4 + __ind + __tr1;
  }
};
_G.compile_function = compile_function;
can_return63 = function (form) {
  return is63(form) && (atom63(form) || !( hd(form) === "return") && ! statement63(hd(form)));
};
_G.can_return63 = can_return63;
compile = function (form) {
  var ____r63 = unstash(Array.prototype.slice.call(arguments, 1));
  var __form = destash33(form, ____r63);
  var ____id17 = ____r63;
  var __stmt1 = ____id17.stmt;
  if (nil63(__form)) {
    return "";
  } else {
    if (special_form63(__form)) {
      return compile_special(__form, __stmt1);
    } else {
      var __tr2 = terminator(__stmt1);
      var __e43;
      if (__stmt1) {
        __e43 = indentation();
      } else {
        __e43 = "";
      }
      var __ind1 = __e43;
      var __e44;
      if (atom63(__form)) {
        __e44 = compile_atom(__form);
      } else {
        var __e45;
        if (infix63(hd(__form))) {
          __e45 = compile_infix(__form);
        } else {
          __e45 = compile_call(__form);
        }
        __e44 = __e45;
      }
      var __form1 = __e44;
      return __ind1 + __form1 + __tr2;
    }
  }
};
_G.compile = compile;
lower_statement = function (form, tail63) {
  var __hoist = [];
  var __e = lower(form, __hoist, true, tail63);
  var __e46;
  if (some63(__hoist) && is63(__e)) {
    __e46 = join(["do"], __hoist, [__e]);
  } else {
    var __e47;
    if (is63(__e)) {
      __e47 = __e;
    } else {
      var __e48;
      if (_35(__hoist) > 1) {
        __e48 = join(["do"], __hoist);
      } else {
        __e48 = hd(__hoist);
      }
      __e47 = __e48;
    }
    __e46 = __e47;
  }
  return either(__e46, ["do"]);
};
_G.lower_statement = lower_statement;
lower_body = function (body, tail63) {
  return lower_statement(join(["do"], body), tail63);
};
_G.lower_body = lower_body;
literal63 = function (form) {
  return atom63(form) || hd(form) === "%array" || hd(form) === "%object";
};
_G.literal63 = literal63;
standalone63 = function (form) {
  return ! atom63(form) && ! infix63(hd(form)) && ! literal63(form) && !( "get" === hd(form)) && !( "%statement" === hd(form)) || id_literal63(form);
};
_G.standalone63 = standalone63;
lower_do = function (args, hoist, stmt63, tail63) {
  var ____x3582 = almost(args);
  var ____i3532 = 0;
  while (____i3532 < _35(____x3582)) {
    var __x89 = ____x3582[____i3532];
    var ____y351 = lower(__x89, hoist, stmt63);
    if (yes(____y351)) {
      var __e1 = ____y351;
      if (standalone63(__e1)) {
        add(hoist, __e1);
      }
    }
    ____i3532 = ____i3532 + 1;
  }
  var __e2 = lower(last(args), hoist, stmt63, tail63);
  if (tail63 && can_return63(__e2)) {
    return ["return", __e2];
  } else {
    return __e2;
  }
};
_G.lower_do = lower_do;
lower_set = function (args, hoist, stmt63, tail63) {
  var ____id18 = args;
  var __lh = ____id18[0];
  var __rh = ____id18[1];
  add(hoist, ["%set", lower(__lh, hoist), lower(__rh, hoist)]);
  if (!( stmt63 && ! tail63)) {
    return __lh;
  }
};
_G.lower_set = lower_set;
lower_if = function (args, hoist, stmt63, tail63) {
  var ____id19 = args;
  var __cond = ____id19[0];
  var ___then = ____id19[1];
  var ___else = ____id19[2];
  if (stmt63) {
    var __e50;
    if (is63(___else)) {
      __e50 = [lower_body([___else], tail63)];
    }
    return add(hoist, join(["%if", lower(__cond, hoist), lower_body([___then], tail63)], __e50));
  } else {
    var __e3 = unique("e");
    add(hoist, ["%local", __e3]);
    var __e49;
    if (is63(___else)) {
      __e49 = [lower(["%set", __e3, ___else])];
    }
    add(hoist, join(["%if", lower(__cond, hoist), lower(["%set", __e3, ___then])], __e49));
    return __e3;
  }
};
_G.lower_if = lower_if;
lower_short = function (x, args, hoist) {
  var ____id20 = args;
  var __a3 = ____id20[0];
  var __b4 = ____id20[1];
  var __hoist1 = [];
  var __b11 = lower(__b4, __hoist1);
  if (some63(__hoist1)) {
    var __id21 = unique("id");
    var __e51;
    if (x === "and") {
      __e51 = ["%if", __id21, __b4, __id21];
    } else {
      __e51 = ["%if", __id21, __id21, __b4];
    }
    return lower(["do", ["%local", __id21, __a3], __e51], hoist);
  } else {
    return [x, lower(__a3, hoist), __b11];
  }
};
_G.lower_short = lower_short;
lower_try = function (args, hoist, tail63) {
  return add(hoist, ["%try", lower_body(args, tail63)]);
};
_G.lower_try = lower_try;
lower_while = function (args, hoist) {
  var ____id22 = args;
  var __c4 = ____id22[0];
  var __body5 = cut(____id22, 1);
  var __pre = [];
  var __c5 = lower(__c4, __pre);
  var __e52;
  if (none63(__pre)) {
    __e52 = ["while", __c5, lower_body(__body5)];
  } else {
    __e52 = ["while", true, join(["do"], __pre, [["%if", ["not", __c5], ["break"]], lower_body(__body5)])];
  }
  return add(hoist, __e52);
};
_G.lower_while = lower_while;
lower_for = function (args, hoist) {
  var ____id23 = args;
  var __t = ____id23[0];
  var __k14 = ____id23[1];
  var __body6 = cut(____id23, 2);
  return add(hoist, ["%for", lower(__t, hoist), __k14, lower_body(__body6)]);
};
_G.lower_for = lower_for;
lower_function = function (args) {
  var ____id24 = args;
  var __a4 = ____id24[0];
  var __body7 = cut(____id24, 1);
  return ["%function", __a4, lower_body(__body7, true)];
};
_G.lower_function = lower_function;
lower_definition = function (kind, args, hoist) {
  var ____id25 = args;
  var __name4 = ____id25[0];
  var __args6 = ____id25[1];
  var __body8 = cut(____id25, 2);
  return add(hoist, [kind, __name4, __args6, lower_body(__body8, true)]);
};
_G.lower_definition = lower_definition;
lower_call = function (form, hoist) {
  var __form2 = map(function (x) {
    return lower(x, hoist);
  }, form);
  if (some63(__form2)) {
    return __form2;
  }
};
_G.lower_call = lower_call;
pairwise63 = function (form) {
  return in63(hd(form), ["<", "<=", "=", ">=", ">"]);
};
_G.pairwise63 = pairwise63;
lower_pairwise = function (form) {
  if (pairwise63(form)) {
    var __e4 = [];
    var ____id26 = form;
    var __x118 = ____id26[0];
    var __args7 = cut(____id26, 1);
    reduce(function (a, b) {
      add(__e4, [__x118, a, b]);
      return a;
    }, __args7);
    return join(["and"], reverse(__e4));
  } else {
    return form;
  }
};
_G.lower_pairwise = lower_pairwise;
lower_infix63 = function (form) {
  return infix63(hd(form)) && _35(form) > 3;
};
_G.lower_infix63 = lower_infix63;
lower_infix = function (form, hoist) {
  var __form3 = lower_pairwise(form);
  var ____id27 = __form3;
  var __x121 = ____id27[0];
  var __args8 = cut(____id27, 1);
  return lower(reduce(function (a, b) {
    return [__x121, b, a];
  }, reverse(__args8)), hoist);
};
_G.lower_infix = lower_infix;
lower_special = function (form, hoist) {
  var __e5 = lower_call(form, hoist);
  if (__e5) {
    return add(hoist, __e5);
  }
};
_G.lower_special = lower_special;
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
          var ____id28 = form;
          var __x124 = ____id28[0];
          var __args9 = cut(____id28, 1);
          if (__x124 === "do") {
            return lower_do(__args9, hoist, stmt63, tail63);
          } else {
            if (__x124 === "%call") {
              return lower(__args9, hoist, stmt63, tail63);
            } else {
              if (__x124 === "%set") {
                return lower_set(__args9, hoist, stmt63, tail63);
              } else {
                if (__x124 === "%if") {
                  return lower_if(__args9, hoist, stmt63, tail63);
                } else {
                  if (__x124 === "%try") {
                    return lower_try(__args9, hoist, tail63);
                  } else {
                    if (__x124 === "while") {
                      return lower_while(__args9, hoist);
                    } else {
                      if (__x124 === "%for") {
                        return lower_for(__args9, hoist);
                      } else {
                        if (__x124 === "%function") {
                          return lower_function(__args9);
                        } else {
                          if (__x124 === "%local-function" || __x124 === "%global-function") {
                            return lower_definition(__x124, __args9, hoist);
                          } else {
                            if (in63(__x124, ["and", "or"])) {
                              return lower_short(__x124, __args9, hoist);
                            } else {
                              if (statement63(__x124)) {
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
expand = function (form, env) {
  if (env) {
    var __prev = environment;
    environment = env;
    var __x126 = expand(form, env);
    environment = __prev;
    return __x126;
  } else {
    return lower(macroexpand(form, env));
  }
};
_G.expand = expand;
var run = function (code) {
  return (0 || eval)(code);
};
_37result = undefined;
_G._37result = _37result;
_eval = function (form, env) {
  var __previous = target;
  target = "js";
  var __code = compile(expand(["set", "%result", form], env));
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
  var ____x3584 = __forms1;
  var ____i3534 = 0;
  while (____i3534 < _35(____x3584)) {
    var __x129 = ____x3584[____i3534];
    if (target === "lua" && immediate_call63(__x129) && "\n" === char(__s3, edge(__s3))) {
      __s3 = clip(__s3, 0, edge(__s3)) + ";\n";
    }
    __s3 = __s3 + compile(__x129, {_stash: true, stmt: true});
    if (! atom63(__x129)) {
      if (hd(__x129) === "return" || hd(__x129) === "break") {
        break;
      }
    }
    ____i3534 = ____i3534 + 1;
  }
  return __s3;
}, stmt: true, tr: true});
setenv("%if", {_stash: true, special: function (cond, cons, alt) {
  var __cond2 = compile(cond);
  indent_level = indent_level + 1;
  var ____x35103 = compile(cons, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var __cons1 = ____x35103;
  var __e53;
  if (alt) {
    indent_level = indent_level + 1;
    var ____x35104 = compile(alt, {_stash: true, stmt: true});
    indent_level = indent_level - 1;
    __e53 = ____x35104;
  }
  var __alt1 = __e53;
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
  var ____x35106 = compile(form, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var __body10 = ____x35106;
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
  var ____x35108 = compile(form, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var __body12 = ____x35108;
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
  var ____x351011 = compile(form, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var __body14 = ____x351011;
  var __hf1 = ["return", ["%array", false, __e8]];
  indent_level = indent_level + 1;
  var ____x351012 = compile(__hf1, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var __h1 = ____x351012;
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
    var __x137 = compile_function(args, body, {_stash: true, name: name});
    return indentation() + __x137;
  } else {
    return compile(["%set", name, ["%function", args, body]], {_stash: true, stmt: true});
  }
}, stmt: true, tr: true});
setenv("%local-function", {_stash: true, special: function (name, args, body) {
  if (target === "lua") {
    var __x143 = compile_function(args, body, {_stash: true, name: name, prefix: "local"});
    return indentation() + __x143;
  } else {
    return compile(["%local", name, ["%function", args, body]], {_stash: true, stmt: true});
  }
}, stmt: true, tr: true});
setenv("return", {_stash: true, special: function (x) {
  var __e54;
  if (nil63(x)) {
    __e54 = "return";
  } else {
    __e54 = "return " + compile(x);
  }
  var __x147 = __e54;
  return indentation() + __x147;
}, stmt: true});
setenv("new", {_stash: true, special: function (x) {
  return "new " + compile(x);
}});
setenv("typeof", {_stash: true, special: function (x) {
  return "typeof(" + compile(x) + ")";
}});
setenv("error", {_stash: true, special: function (x) {
  var __e55;
  if (target === "js") {
    __e55 = "throw " + compile(["new", ["Error", x]]);
  } else {
    __e55 = "error(" + compile(x) + ")";
  }
  var __e12 = __e55;
  return indentation() + __e12;
}, stmt: true});
setenv("%local", {_stash: true, special: function (name, value) {
  var __id30 = compile(name);
  var __value11 = compile(value);
  var __e56;
  if (is63(value)) {
    __e56 = " = " + __value11;
  } else {
    __e56 = "";
  }
  var __rh2 = __e56;
  var __e57;
  if (target === "js") {
    __e57 = "var ";
  } else {
    __e57 = "local ";
  }
  var __keyword1 = __e57;
  var __ind11 = indentation();
  return __ind11 + __keyword1 + __id30 + __rh2;
}, stmt: true});
setenv("%set", {_stash: true, special: function (lh, rh) {
  var __lh2 = compile(lh);
  var __e58;
  if (nil63(rh)) {
    __e58 = "nil";
  } else {
    __e58 = rh;
  }
  var __rh4 = compile(__e58);
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
setenv("%array", {_stash: true, special: function () {
  var __forms3 = unstash(Array.prototype.slice.call(arguments, 0));
  var __e59;
  if (target === "lua") {
    __e59 = "{";
  } else {
    __e59 = "[";
  }
  var __open1 = __e59;
  var __e60;
  if (target === "lua") {
    __e60 = "}";
  } else {
    __e60 = "]";
  }
  var __close1 = __e60;
  var __s7 = "";
  var __c7 = "";
  var ____o3519 = __forms3;
  var __k17 = undefined;
  for (__k17 in ____o3519) {
    var __v9 = ____o3519[__k17];
    var __e61;
    if (numeric63(__k17)) {
      __e61 = parseInt(__k17);
    } else {
      __e61 = __k17;
    }
    var __k18 = __e61;
    if (number63(__k18)) {
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
  var __e62;
  if (target === "lua") {
    __e62 = " = ";
  } else {
    __e62 = ": ";
  }
  var __sep1 = __e62;
  var ____x3586 = pair(__forms5);
  var ____i3536 = 0;
  while (____i3536 < _35(____x3586)) {
    var ____id32 = ____x3586[____i3536];
    var __k20 = ____id32[0];
    var __v11 = ____id32[1];
    __s9 = __s9 + __c9 + key(compile(__k20)) + __sep1 + compile(__v11);
    __c9 = ", ";
    ____i3536 = ____i3536 + 1;
  }
  return __s9 + "}";
}});
setenv("%literal", {_stash: true, special: function () {
  var __args111 = unstash(Array.prototype.slice.call(arguments, 0));
  var __s111 = "";
  var ____x3588 = __args111;
  var ____i3538 = 0;
  while (____i3538 < _35(____x3588)) {
    var __x153 = ____x3588[____i3538];
    if (string_literal63(__x153)) {
      __s111 = __s111 + _eval(__x153);
    } else {
      __s111 = __s111 + compile(__x153);
    }
    ____i3538 = ____i3538 + 1;
  }
  return __s111;
}});
setenv("%statement", {_stash: true, special: function () {
  var __args13 = unstash(Array.prototype.slice.call(arguments, 0));
  var __s13 = indentation();
  var ____x35810 = __args13;
  var ____i35310 = 0;
  while (____i35310 < _35(____x35810)) {
    var __x155 = ____x35810[____i35310];
    if (string_literal63(__x155)) {
      __s13 = __s13 + _eval(__x155);
    } else {
      __s13 = __s13 + compile(__x155);
    }
    ____i35310 = ____i35310 + 1;
  }
  __s13 = __s13 + "\n";
  return __s13;
}, stmt: true, tr: true});
setenv("%indentation", {_stash: true, special: function () {
  return indentation();
}});
exports.run = run;
exports["eval"] = _eval;
exports.expand = expand;
exports.compile = compile;
