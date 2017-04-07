var reader = require("reader");
var getenv = function (k, p) {
  if (string63(k)) {
    var i = edge(environment);
    while (i >= 0) {
      var b = environment[i][k];
      if (is63(b)) {
        return((p ? b[p] : b));
      } else {
        i = i - 1;
      }
    }
  }
};
var macro_function = function (k) {
  return(getenv(k, "macro"));
};
var macro63 = function (k) {
  return(is63(macro_function(k)));
};
var special63 = function (k) {
  return(is63(getenv(k, "special")));
};
var special_form63 = function (form) {
  return(! atom63(form) && special63(hd(form)));
};
var statement63 = function (k) {
  return(special63(k) && getenv(k, "stmt"));
};
var symbol_expansion = function (k) {
  return(getenv(k, "symbol"));
};
var symbol63 = function (k) {
  return(is63(symbol_expansion(k)));
};
var variable63 = function (k) {
  var b = first(function (frame) {
    return(frame[k]);
  }, reverse(environment));
  return(! atom63(b) && is63(b.variable));
};
bound63 = function (x) {
  return(macro63(x) || special63(x) || symbol63(x) || variable63(x));
};
quoted = function (form) {
  if (string63(form)) {
    return(escape(form));
  } else if (atom63(form)) {
    return(form);
  } else {
    return(join(["list"], map(quoted, form)));
  }
};
var literal = function (s) {
  if (string_literal63(s)) {
    return(s);
  } else {
    return(quoted(s));
  }
};
var unique33 = function (x, names) {
  if (names[x]) {
    var i = names[x];
    names[x] = names[x] + 1;
    return(unique33(x + i, names));
  } else {
    names[x] = 1;
    return("_" + x);
  }
};
var _names1 = {};
unique = function (x, names) {
  var ns = names || getenv("%scope", "unique") || _names1;
  return(unique33(x, ns));
};
var stash42 = function (args) {
  if (keys63(args)) {
    var l = ["%object", "\"_stash\"", true];
    var _o = args;
    var k = undefined;
    for (k in _o) {
      var v = _o[k];
      var _k = (numeric63(k) ? parseInt(k) : k);
      if (! number63(_k)) {
        add(l, literal(_k));
        add(l, v);
      }
    }
    return(join(args, [l]));
  } else {
    return(args);
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
  return(k);
};
var map42 = function (f, x) {
  var ks = [];
  var from = inf;
  var upto = -inf;
  var _o = x;
  var k = undefined;
  for (k in _o) {
    var v = _o[k];
    var _k = (numeric63(k) ? parseInt(k) : k);
    if (string63(_k)) {
      add(ks, _k);
    } else {
      from = min(from, _k);
      upto = max(upto, _k);
    }
  }
  var i = from;
  while (i <= upto) {
    var _v = x[i];
    f(i, _v);
    i = i + 1;
  }
  var _x = sort(ks);
  var _i1 = 0;
  while (_i1 < _35(_x)) {
    var _k1 = _x[_i1];
    var _v1 = x[_k1];
    f(_k1, _v1);
    _i1 = _i1 + 1;
  }
};
var ontree = function (f, l) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 2));
  var _f = destash33(f, _rest);
  var _l = destash33(l, _rest);
  var skip = _rest.skip;
  delete _rest.skip;
  if (!( skip && skip(_l))) {
    var y = _f(_l);
    if (y) {
      return(y);
    }
    if (! atom63(_l)) {
      var _o = _l;
      var _i = undefined;
      for (_i in _o) {
        var x = _o[_i];
        var __i = (numeric63(_i) ? parseInt(_i) : _i);
        var _y = ontree(_f, x, {_stash: true, skip: skip});
        if (_y) {
          return(_y);
        }
      }
    }
  }
};
var simple63 = function (lh, rh) {
  return(atom63(rh) && ! ontree(function (x) {
    return(x === rh);
  }, lh));
};
var get37 = function (id, lh, k) {
  if (k === "rest") {
    var ks = keys(lh);
    delete ks.rest;
    return(join(["cut", id, _35(lh)], (! empty63(ks) ? ["nil", ["quote", ks]] : undefined)));
  } else {
    return(["get", id, ["quote", bias(k)]]);
  }
};
bind = function (lh, rh) {
  if (atom63(lh)) {
    return([lh, rh]);
  } else {
    var id = unique("id");
    var r = macroexpand(rh);
    var bs = [id, r];
    if (simple63(lh, r)) {
      bs = [];
      id = r;
    }
    map42(function (k, v) {
      var x = get37(id, lh, k);
      if (is63(k)) {
        var _k = (v === true ? k : v);
        bs = join(bs, bind(_k, x));
        return(bs);
      }
    }, lh);
    return(bs);
  }
};
setenv("arguments%", {_stash: true, macro: function (from) {
  return([["get", ["get", ["get", "Array", ["quote", "prototype"]], ["quote", "slice"]], ["quote", "call"]], "arguments", from]);
}});
bind42 = function (args, body) {
  var args1 = [];
  var rest = function () {
    if (target === "js") {
      return(["unstash", ["arguments%", _35(args1)]]);
    } else {
      add(args1, "|...|");
      return(["unstash", ["list", "|...|"]]);
    }
  };
  if (atom63(args)) {
    return([args1, join(["let", [args, rest()]], body)]);
  } else {
    var bs = [];
    var exprs = [];
    var names = {};
    var r = "_rest";
    var _o = args;
    var k = undefined;
    for (k in _o) {
      var v = _o[k];
      var _k = (numeric63(k) ? parseInt(k) : k);
      if (number63(_k)) {
        if (atom63(v)) {
          add(args1, v);
        } else {
          var x = unique("x", names);
          add(args1, x);
          bs = join(bs, [v, x]);
        }
      }
    }
    if (keys63(args)) {
      bs = join(bs, [r, rest()]);
      var n = (target === "lua" ? edge(args1) : _35(args1));
      var i = 0;
      while (i < n) {
        var _v = args1[i];
        bs = join(bs, [_v, ["destash!", _v, r]]);
        i = i + 1;
      }
      var ks = keys(args);
      bs = join(bs, [ks, r]);
      map42(function (k, v) {
        if (!( k === "rest")) {
          return(add(exprs, ["wipe", ["get", r, ["quote", k]]]));
        }
      }, ks);
    }
    return([args1, join(["let", bs], exprs, body)]);
  }
};
var quoting63 = function (depth) {
  return(number63(depth));
};
var quasiquoting63 = function (depth) {
  return(quoting63(depth) && depth > 0);
};
var can_unquote63 = function (depth) {
  return(quoting63(depth) && depth === 1);
};
var quasisplice63 = function (x, depth) {
  return(can_unquote63(depth) && ! atom63(x) && hd(x) === "unquote-splicing");
};
var expand_local = function (_x) {
  var x = _x[0];
  var name = _x[1];
  var value = _x[2];
  setenv(name, {_stash: true, variable: true});
  return(["%local", name, macroexpand(value)]);
};
var expand_function = function (_x) {
  var x = _x[0];
  var args = _x[1];
  var body = cut(_x, 2);
  add(environment, {});
  var _o = args;
  var _i = undefined;
  for (_i in _o) {
    var __x = _o[_i];
    var __i = (numeric63(_i) ? parseInt(_i) : _i);
    setenv(__x, {_stash: true, variable: true});
  }
  setenv("%scope", {_stash: true, args: args, id: "#<function>", unique: {}, variable: true});
  var _x1 = join(["%function", args], macroexpand(body));
  drop(environment);
  return(_x1);
};
var expand_definition = function (_x) {
  var x = _x[0];
  var name = _x[1];
  var args = _x[2];
  var body = cut(_x, 3);
  add(environment, {});
  var _o = args;
  var _i = undefined;
  for (_i in _o) {
    var __x = _o[_i];
    var __i = (numeric63(_i) ? parseInt(_i) : _i);
    setenv(__x, {_stash: true, variable: true});
  }
  setenv("%scope", {_stash: true, args: args, id: name, unique: {}, variable: true});
  var _x1 = join([x, name, args], macroexpand(body));
  drop(environment);
  return(_x1);
};
var expand_form = function (form) {
  var x = macroexpand(hd(form));
  if (macro63(x)) {
    return(macroexpand(apply(macro_function(x), tl(form))));
  } else {
    var l = [x];
    var i = 0;
    while (i < _35(form)) {
      if (!( i === 0)) {
        add(l, macroexpand(form[i]));
      }
      i = i + 1;
    }
    var _o = form;
    var k = undefined;
    for (k in _o) {
      var v = _o[k];
      var _k = (numeric63(k) ? parseInt(k) : k);
      if (! number63(_k)) {
        l[_k] = macroexpand(v);
      }
    }
    return(l);
  }
};
expand1 = function (_x) {
  var name = _x[0];
  var body = cut(_x, 1);
  return(apply(macro_function(name), body));
};
macroexpand = function (form) {
  if (symbol63(form)) {
    return(macroexpand(symbol_expansion(form)));
  } else if (atom63(form)) {
    return(form);
  } else if (none63(form)) {
    return(form);
  } else {
    var x = hd(form);
    if (x === "%local") {
      return(expand_local(form));
    } else if (x === "%function") {
      return(expand_function(form));
    } else if (x === "%global-function") {
      return(expand_definition(form));
    } else if (x === "%local-function") {
      return(expand_definition(form));
    } else {
      return(expand_form(form));
    }
  }
};
var quasiquote_list = function (form, depth) {
  var xs = [["list"]];
  var _o = form;
  var k = undefined;
  for (k in _o) {
    var v = _o[k];
    var _k = (numeric63(k) ? parseInt(k) : k);
    if (! number63(_k)) {
      var _v = (quasisplice63(v, depth) ? quasiexpand(v[1]) : quasiexpand(v, depth));
      last(xs)[_k] = _v;
    }
  }
  var _x2 = form;
  var _i1 = 0;
  while (_i1 < _35(_x2)) {
    var x = _x2[_i1];
    if (quasisplice63(x, depth)) {
      var _x3 = quasiexpand(x[1]);
      add(xs, _x3);
      add(xs, ["list"]);
    } else {
      add(last(xs), quasiexpand(x, depth));
    }
    _i1 = _i1 + 1;
  }
  var pruned = keep(function (x) {
    return(_35(x) > 1 || !( hd(x) === "list") || keys63(x));
  }, xs);
  if (one63(pruned)) {
    return(hd(pruned));
  } else {
    return(join(["join"], pruned));
  }
};
quasiexpand = function (form, depth) {
  if (quasiquoting63(depth)) {
    if (atom63(form)) {
      return(["quote", form]);
    } else if (can_unquote63(depth) && hd(form) === "unquote") {
      return(quasiexpand(form[1]));
    } else if (hd(form) === "unquote" || hd(form) === "unquote-splicing") {
      return(quasiquote_list(form, depth - 1));
    } else if (hd(form) === "quasiquote") {
      return(quasiquote_list(form, depth + 1));
    } else {
      return(quasiquote_list(form, depth));
    }
  } else if (atom63(form)) {
    return(form);
  } else if (hd(form) === "quote") {
    return(form);
  } else if (hd(form) === "quasiquote") {
    return(quasiexpand(form[1], 1));
  } else {
    return(map(function (x) {
      return(quasiexpand(x, depth));
    }, form));
  }
};
expand_if = function (_x) {
  var a = _x[0];
  var b = _x[1];
  var c = cut(_x, 2);
  if (is63(b)) {
    return([join(["%if", a, b], expand_if(c))]);
  } else if (is63(a)) {
    return([a]);
  }
};
if (typeof(indent_level) === "undefined") {
  indent_level = 0;
}
indentation = function () {
  var s = "";
  var i = 0;
  while (i < indent_level) {
    s = s + "  ";
    i = i + 1;
  }
  return(s);
};
var reserved = {"%": true, "*": true, "+": true, "-": true, "/": true, "<": true, "<=": true, "=": true, "==": true, ">": true, ">=": true, "and": true, "break": true, "case": true, "catch": true, "continue": true, "debugger": true, "default": true, "delete": true, "do": true, "else": true, "elseif": true, "end": true, "false": true, "finally": true, "for": true, "function": true, "if": true, "in": true, "instanceof": true, "local": true, "new": true, "nil": true, "not": true, "or": true, "repeat": true, "return": true, "switch": true, "then": true, "throw": true, "true": true, "try": true, "typeof": true, "until": true, "var": true, "void": true, "while": true, "with": true};
reserved63 = function (x) {
  return(has63(reserved, x));
};
var valid_code63 = function (n) {
  return(number_code63(n) || n > 64 && n < 91 || n > 96 && n < 123 || n === 95);
};
valid_id63 = function (id) {
  if (none63(id) || reserved63(id)) {
    return(false);
  } else {
    var i = 0;
    while (i < _35(id)) {
      if (! valid_code63(code(id, i))) {
        return(false);
      }
      i = i + 1;
    }
    return(true);
  }
};
key = function (k) {
  var i = inner(k);
  if (valid_id63(i)) {
    return(i);
  } else if (target === "js") {
    return(k);
  } else {
    return("[" + k + "]");
  }
};
mapo = function (f, t) {
  var o = [];
  var _o = t;
  var k = undefined;
  for (k in _o) {
    var v = _o[k];
    var _k = (numeric63(k) ? parseInt(k) : k);
    var x = f(v);
    if (is63(x)) {
      add(o, literal(_k));
      add(o, x);
    }
  }
  return(o);
};
var __x1 = [];
__x1["%neg"] = "-";
var _x2 = [];
_x2.js = "!";
_x2.lua = "not";
__x1["%not"] = _x2;
var __x3 = [];
__x3["%div"] = "/";
__x3["%mod"] = "%";
__x3["%mul"] = "*";
var __x4 = [];
__x4["%add"] = "+";
__x4["%sub"] = "-";
var __x5 = [];
var _x6 = [];
_x6.js = "+";
_x6.lua = "..";
__x5["%cat"] = _x6;
var __x7 = [];
__x7["%ge"] = ">=";
__x7["%gt"] = ">";
__x7["%le"] = "<=";
__x7["%lt"] = "<";
var __x8 = [];
var _x9 = [];
_x9.js = "===";
_x9.lua = "==";
__x8["%eq"] = _x9;
var __x10 = [];
var _x11 = [];
_x11.js = "&&";
_x11.lua = "and";
__x10["%and"] = _x11;
var __x12 = [];
var _x13 = [];
_x13.js = "||";
_x13.lua = "or";
__x12["%or"] = _x13;
var infix = [__x1, __x3, __x4, __x5, __x7, __x8, __x10, __x12];
var unary63 = function (form) {
  return(two63(form) && in63(hd(form), ["%not", "%neg"]));
};
var index = function (k) {
  return(k);
};
var precedence = function (form) {
  if (!( atom63(form) || unary63(form))) {
    var _o = infix;
    var k = undefined;
    for (k in _o) {
      var v = _o[k];
      var _k = (numeric63(k) ? parseInt(k) : k);
      if (v[hd(form)]) {
        return(index(_k));
      }
    }
  }
  return(0);
};
var getop = function (op) {
  return(find(function (level) {
    var x = level[op];
    if (x === true) {
      return(op);
    } else if (string63(x)) {
      return(x);
    } else if (is63(x)) {
      return(x[target]);
    }
  }, infix));
};
var infix63 = function (x) {
  return(is63(getop(x)));
};
var compile_args = function (args) {
  var s = "(";
  var c = "";
  var _x = args;
  var _i = 0;
  while (_i < _35(_x)) {
    var x = _x[_i];
    s = s + c + compile(x);
    c = ", ";
    _i = _i + 1;
  }
  return(s + ")");
};
var escape_newlines = function (s) {
  var s1 = "";
  var i = 0;
  while (i < _35(s)) {
    var c = char(s, i);
    s1 = s1 + (c === "\n" ? "\\n" : c);
    i = i + 1;
  }
  return(s1);
};
var id = function (id) {
  var id1 = (number_code63(code(id, 0)) ? "_" : "");
  var i = 0;
  while (i < _35(id)) {
    var c = char(id, i);
    var n = code(c);
    var c1 = (c === "-" && !( id === "-") ? "_" : (valid_code63(n) ? c : (i === 0 ? "_" + n : n)));
    id1 = id1 + c1;
    i = i + 1;
  }
  if (reserved63(id1)) {
    return("_" + id1);
  } else {
    return(id1);
  }
};
var compile_atom = function (x) {
  if (x === "nil" && target === "lua") {
    return(x);
  } else if (x === "nil") {
    return("undefined");
  } else if (id_literal63(x)) {
    return(inner(x));
  } else if (string_literal63(x)) {
    return(escape_newlines(x));
  } else if (string63(x)) {
    return(id(x));
  } else if (boolean63(x)) {
    if (x) {
      return("true");
    } else {
      return("false");
    }
  } else if (nan63(x)) {
    return("nan");
  } else if (x === inf) {
    return("inf");
  } else if (x === -inf) {
    return("-inf");
  } else if (number63(x)) {
    return(x + "");
  } else {
    throw new Error("Cannot compile atom: " + str(x));
  }
};
var terminator = function (stmt63) {
  if (! stmt63) {
    return("");
  } else if (target === "js") {
    return(";\n");
  } else {
    return("\n");
  }
};
var compile_special = function (form, stmt63) {
  var x = form[0];
  var args = cut(form, 1);
  var _id1 = getenv(x);
  var special = _id1.special;
  var stmt = _id1.stmt;
  var self_tr63 = _id1.tr;
  var tr = terminator(stmt63 && ! self_tr63);
  return(apply(special, args) + tr);
};
var parenthesize_call63 = function (x) {
  return(! atom63(x) && hd(x) === "%function" || precedence(x) > 0);
};
var compile_call = function (form) {
  var f = hd(form);
  var f1 = compile(f);
  var args = compile_args(stash42(tl(form)));
  if (parenthesize_call63(f)) {
    return("(" + f1 + ")" + args);
  } else {
    return(f1 + args);
  }
};
var op_delims = function (parent, child) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 2));
  var _parent = destash33(parent, _rest);
  var _child = destash33(child, _rest);
  var right = _rest.right;
  delete _rest.right;
  if ((right ? _6261 : _62)(precedence(_child), precedence(_parent))) {
    return(["(", ")"]);
  } else {
    return(["", ""]);
  }
};
var compile_infix = function (form) {
  var op = form[0];
  var _id1 = cut(form, 1);
  var a = _id1[0];
  var b = _id1[1];
  var _id2 = op_delims(form, a);
  var ao = _id2[0];
  var ac = _id2[1];
  var _id3 = op_delims(form, b, {_stash: true, right: true});
  var bo = _id3[0];
  var bc = _id3[1];
  var _a = compile(a);
  var _b = compile(b);
  var _op = getop(op);
  if (unary63(form)) {
    return(_op + ao + " " + _a + ac);
  } else {
    return(ao + _a + ac + " " + _op + " " + bo + _b + bc);
  }
};
compile_function = function (args, body) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 2));
  var _args = destash33(args, _rest);
  var _body = destash33(body, _rest);
  var name = _rest.name;
  var prefix = _rest.prefix;
  delete _rest.name;
  delete _rest.prefix;
  var _id1 = (name ? compile(name) : "");
  var _args1 = compile_args(_args);
  indent_level = indent_level + 1;
  var _x = compile(_body, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var _body1 = _x;
  var ind = indentation();
  var p = (prefix ? prefix + " " : "");
  var tr = (target === "js" ? "" : "end");
  if (name) {
    tr = tr + "\n";
  }
  if (target === "js") {
    return("function " + _id1 + _args1 + " {\n" + _body1 + ind + "}" + tr);
  } else {
    return(p + "function " + _id1 + _args1 + "\n" + _body1 + ind + tr);
  }
};
var can_return63 = function (form) {
  return(is63(form) && (atom63(form) || !( hd(form) === "%return") && ! statement63(hd(form))));
};
compile = function (form) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 1));
  var _form = destash33(form, _rest);
  var stmt = _rest.stmt;
  delete _rest.stmt;
  if (nil63(_form)) {
    return("");
  } else if (special_form63(_form)) {
    return(compile_special(_form, stmt));
  } else {
    var tr = terminator(stmt);
    var ind = (stmt ? indentation() : "");
    var _form1 = (atom63(_form) ? compile_atom(_form) : (infix63(hd(_form)) ? compile_infix(_form) : compile_call(_form)));
    return(ind + _form1 + tr);
  }
};
var lower_statement = function (form, tail63) {
  var hoist = [];
  var e = lower(form, hoist, true, tail63);
  if (some63(hoist) && is63(e)) {
    return(join(["%do"], hoist, [e]));
  } else if (is63(e)) {
    return(e);
  } else if (_35(hoist) > 1) {
    return(join(["%do"], hoist));
  } else {
    return(hd(hoist));
  }
};
var lower_body = function (body, tail63) {
  return(lower_statement(join(["%do"], body), tail63));
};
var literal63 = function (form) {
  return(atom63(form) || hd(form) === "%array" || hd(form) === "%object");
};
var standalone63 = function (form) {
  return(! atom63(form) && ! infix63(hd(form)) && ! literal63(form) && !( "%get" === hd(form)) || id_literal63(form));
};
var lower_do = function (args, hoist, stmt63, tail63) {
  var _x = almost(args);
  var _i = 0;
  while (_i < _35(_x)) {
    var x = _x[_i];
    var _y = lower(x, hoist, stmt63);
    if (yes(_y)) {
      var e = _y;
      if (standalone63(e)) {
        add(hoist, e);
      }
    }
    _i = _i + 1;
  }
  var _e = lower(last(args), hoist, stmt63, tail63);
  if (tail63 && can_return63(_e)) {
    return(["%return", _e]);
  } else {
    return(_e);
  }
};
var lower_set = function (args, hoist, stmt63, tail63) {
  var lh = args[0];
  var rh = args[1];
  add(hoist, ["%set", lh, lower(rh, hoist)]);
  if (!( stmt63 && ! tail63)) {
    return(lh);
  }
};
var can_ternary63 = function (x) {
  return(atom63(x) || ! standalone63(x) || "%function" === hd(x) || "%ternary" === hd(x) || ! special_form63(x));
};
var lower_ternary63 = function (expr) {
  return(nil63(expr) || hd(expr) === "%set" && can_ternary63(last(expr)));
};
var lower_if = function (args, hoist, stmt63, tail63) {
  var cond = args[0];
  var _then = args[1];
  var _else = args[2];
  if (stmt63) {
    return(add(hoist, join(["%if", lower(cond, hoist), lower_body([_then], tail63)], (is63(_else) ? [lower_body([_else], tail63)] : undefined))));
  } else {
    var e = unique("e");
    var n = _35(hoist);
    var cond1 = lower(cond, hoist);
    var then1 = lower(["%set", e, _then]);
    var else1 = (is63(_else) ? lower(["%set", e, _else]) : undefined);
    if (target === "js" && lower_ternary63(then1) && lower_ternary63(else1)) {
      return(["%ternary", cond1, (is63(_then) ? last(then1) : undefined), (is63(_else) ? last(else1) : undefined)]);
    } else {
      insert(hoist, n, ["%local", e]);
      add(hoist, join(["%if", cond1, then1], (is63(_else) ? [else1] : undefined)));
      return(e);
    }
  }
};
var lower_short = function (x, args, hoist) {
  var a = args[0];
  var b = args[1];
  var hoist1 = [];
  var b1 = lower(b, hoist1);
  if (some63(hoist1)) {
    var _id1 = unique("id");
    return(lower(["%do", ["%local", _id1, a], (x === "%and" ? ["%if", _id1, b, _id1] : ["%if", _id1, _id1, b])], hoist));
  } else {
    return([x, lower(a, hoist), b1]);
  }
};
var lower_try = function (args, hoist, tail63) {
  return(add(hoist, ["%try", lower_body(args, tail63)]));
};
var lower_while = function (args, hoist) {
  var c = args[0];
  var body = cut(args, 1);
  var pre = [];
  var _c = lower(c, pre);
  return(add(hoist, (none63(pre) ? ["%while", _c, lower_body(body)] : ["%while", true, join(["%do"], pre, [["%if", ["%not", _c], ["%break"]], lower_body(body)])])));
};
var lower_for = function (args, hoist) {
  var t = args[0];
  var k = args[1];
  var body = cut(args, 2);
  return(add(hoist, ["%for", lower(t, hoist), k, lower_body(body)]));
};
var lower_function = function (args) {
  var a = args[0];
  var body = cut(args, 1);
  add(environment, {});
  var _o = a;
  var _i = undefined;
  for (_i in _o) {
    var _x = _o[_i];
    var __i = (numeric63(_i) ? parseInt(_i) : _i);
    setenv(_x, {_stash: true, variable: true});
  }
  setenv("%scope", {_stash: true, args: a, id: "#<function>", unique: {}, variable: true});
  var _x1 = ["%function", a, lower_body(body, true)];
  drop(environment);
  return(_x1);
};
var lower_definition = function (kind, args, hoist) {
  var _id = args;
  var name = _id[0];
  var _args = _id[1];
  var body = cut(_id, 2);
  add(environment, {});
  var _o = _args;
  var _i = undefined;
  for (_i in _o) {
    var _x = _o[_i];
    var __i = (numeric63(_i) ? parseInt(_i) : _i);
    setenv(_x, {_stash: true, variable: true});
  }
  setenv("%scope", {_stash: true, args: _args, id: name, unique: {}, variable: true});
  var _x1 = add(hoist, [kind, name, _args, lower_body(body, true)]);
  drop(environment);
  return(_x1);
};
var lower_call = function (form, hoist) {
  var _form = map(function (x) {
    return(lower(x, hoist));
  }, form);
  if (some63(_form)) {
    return(_form);
  }
};
var lower_infix63 = function (form) {
  return(infix63(hd(form)) && _35(form) > 3);
};
var lower_infix = function (form, hoist) {
  var x = form[0];
  var args = cut(form, 1);
  return(lower(reduce(function (a, b) {
    return([x, b, a]);
  }, reverse(args)), hoist));
};
var lower_special = function (form, hoist) {
  var e = lower_call(form, hoist);
  if (e) {
    return(add(hoist, e));
  }
};
lower = function (form, hoist, stmt63, tail63) {
  if (atom63(form)) {
    return(form);
  } else if (empty63(form)) {
    return(["%array"]);
  } else if (nil63(hoist)) {
    return(lower_statement(form));
  } else if (lower_infix63(form)) {
    return(lower_infix(form, hoist));
  } else {
    var x = form[0];
    var args = cut(form, 1);
    if (x === "%do") {
      return(lower_do(args, hoist, stmt63, tail63));
    } else if (x === "%set") {
      return(lower_set(args, hoist, stmt63, tail63));
    } else if (x === "%if") {
      return(lower_if(args, hoist, stmt63, tail63));
    } else if (x === "%try") {
      return(lower_try(args, hoist, tail63));
    } else if (x === "%while") {
      return(lower_while(args, hoist));
    } else if (x === "%for") {
      return(lower_for(args, hoist));
    } else if (x === "%function") {
      return(lower_function(args));
    } else if (x === "%local-function" || x === "%global-function") {
      return(lower_definition(x, args, hoist));
    } else if (in63(x, ["%and", "%or"])) {
      return(lower_short(x, args, hoist));
    } else if (statement63(x)) {
      return(lower_special(form, hoist));
    } else {
      return(lower_call(form, hoist));
    }
  }
};
expand = function (form) {
  return(lower(macroexpand(form)));
};
global.require = require;
var run = eval;
_37result = undefined;
eval = function (form) {
  var previous = target;
  target = "js";
  var code = compile(expand(["set", "%result", form]));
  target = previous;
  run(code);
  return(_37result);
};
setenv("%do", {_stash: true, special: function () {
  var forms = unstash(Array.prototype.slice.call(arguments, 0));
  var s = "";
  var _x = forms;
  var _i = 0;
  while (_i < _35(_x)) {
    var x = _x[_i];
    s = s + compile(x, {_stash: true, stmt: true});
    if (! atom63(x)) {
      if (hd(x) === "%return" || hd(x) === "%break") {
        break;
      }
    }
    _i = _i + 1;
  }
  return(s);
}, stmt: true, tr: true});
setenv("%ternary", {_stash: true, special: function (cond, _then, _else) {
  var a = compile(cond);
  var b = compile(_then);
  var c = compile((nil63(_else) ? "nil" : _else));
  if (target === "js") {
    return("(" + a + " ? " + b + " : " + c + ")");
  } else {
    return("((" + a + ") and {" + b + "} or {" + c + "})[1]");
  }
}});
setenv("%if", {_stash: true, special: function (cond, cons, alt) {
  var ind = indentation();
  var _cond = compile(cond);
  indent_level = indent_level + 1;
  var _x = compile(cons, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var _cons = _x;
  var elif = obj63(alt) && hd(alt) === "%if";
  var _e;
  if (elif) {
    _e = clip(compile(alt, {_stash: true, stmt: true}), _35(ind));
  } else {
    var _e1;
    if (alt) {
      indent_level = indent_level + 1;
      var _x1 = compile(alt, {_stash: true, stmt: true});
      indent_level = indent_level - 1;
      _e1 = _x1;
    }
    _e = _e1;
  }
  var _alt = _e;
  var s = "";
  if (target === "js") {
    s = s + ind + "if (" + _cond + ") {\n" + _cons + ind + "}";
  } else {
    s = s + ind + "if " + _cond + " then\n" + _cons;
  }
  if (elif) {
    if (target === "js") {
      s = s + " else " + _alt;
    } else {
      s = s + ind + "else" + _alt;
    }
  } else if (_alt) {
    if (target === "js") {
      s = s + " else {\n" + _alt + ind + "}";
    } else {
      s = s + ind + "else\n" + _alt;
    }
  }
  if (elif) {
    return(s);
  } else if (target === "lua") {
    return(s + ind + "end\n");
  } else {
    return(s + "\n");
  }
}, stmt: true, tr: true});
setenv("%while", {_stash: true, special: function (cond, form) {
  var _cond = compile(cond);
  indent_level = indent_level + 1;
  var _x = compile(form, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var body = _x;
  var ind = indentation();
  if (target === "js") {
    return(ind + "while (" + _cond + ") {\n" + body + ind + "}\n");
  } else {
    return(ind + "while " + _cond + " do\n" + body + ind + "end\n");
  }
}, stmt: true, tr: true});
setenv("%for", {_stash: true, special: function (t, k, form) {
  var _t = compile(t);
  var ind = indentation();
  indent_level = indent_level + 1;
  var _x = compile(form, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var body = _x;
  if (target === "lua") {
    return(ind + "for " + k + " in next, " + _t + " do\n" + body + ind + "end\n");
  } else {
    return(ind + "for (" + k + " in " + _t + ") {\n" + body + ind + "}\n");
  }
}, stmt: true, tr: true});
setenv("%try", {_stash: true, special: function (form) {
  var e = unique("e");
  var ind = indentation();
  indent_level = indent_level + 1;
  var _x = compile(form, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var body = _x;
  var hf = ["%return", ["%array", false, e]];
  indent_level = indent_level + 1;
  var _x3 = compile(hf, {_stash: true, stmt: true});
  indent_level = indent_level - 1;
  var h = _x3;
  return(ind + "try {\n" + body + ind + "}\n" + ind + "catch (" + e + ") {\n" + h + ind + "}\n");
}, stmt: true, tr: true});
setenv("%delete", {_stash: true, special: function (place) {
  return(indentation() + "delete " + compile(place));
}, stmt: true});
setenv("%break", {_stash: true, special: function () {
  return(indentation() + "break");
}, stmt: true});
setenv("%function", {_stash: true, special: function (args, body) {
  return(compile_function(args, body));
}});
setenv("%global-function", {_stash: true, special: function (name, args, body) {
  if (target === "lua") {
    var x = compile_function(args, body, {_stash: true, name: name});
    return(indentation() + x);
  } else {
    return(compile(["%set", name, ["%function", args, body]], {_stash: true, stmt: true}));
  }
}, stmt: true, tr: true});
setenv("%local-function", {_stash: true, special: function (name, args, body) {
  if (target === "lua") {
    var x = compile_function(args, body, {_stash: true, name: name, prefix: "local"});
    return(indentation() + x);
  } else {
    return(compile(["%local", name, ["%function", args, body]], {_stash: true, stmt: true}));
  }
}, stmt: true, tr: true});
setenv("%return", {_stash: true, special: function (x) {
  var _x = (nil63(x) ? "return" : "return(" + compile(x) + ")");
  return(indentation() + _x);
}, stmt: true});
setenv("%new", {_stash: true, special: function (x) {
  return("new " + compile(x));
}});
setenv("%type", {_stash: true, special: function (x) {
  return("typeof(" + compile(x) + ")");
}});
setenv("%error", {_stash: true, special: function (x) {
  var e = (target === "js" ? "throw " + compile(["%new", ["Error", x]]) : "error(" + compile(x) + ")");
  return(indentation() + e);
}, stmt: true});
setenv("%local", {_stash: true, special: function (name, value) {
  var _id = compile(name);
  var value1 = compile(value);
  var rh = (is63(value) ? " = " + value1 : "");
  var keyword = (target === "js" ? "var " : "local ");
  var ind = indentation();
  return(ind + keyword + _id + rh);
}, stmt: true});
setenv("%set", {_stash: true, special: function (lh, rh) {
  var _lh = compile(lh);
  var _rh = compile((nil63(rh) ? "nil" : rh));
  return(indentation() + _lh + " = " + _rh);
}, stmt: true});
setenv("%get", {_stash: true, special: function (t, k) {
  var _t = compile(t);
  var k1 = compile(k);
  if (target === "lua" && char(_t, 0) === "{") {
    _t = "(" + _t + ")";
  }
  if (string_literal63(k) && valid_id63(inner(k))) {
    return(_t + "." + inner(k));
  } else {
    return(_t + "[" + k1 + "]");
  }
}});
setenv("%array", {_stash: true, special: function () {
  var forms = unstash(Array.prototype.slice.call(arguments, 0));
  var open = (target === "lua" ? "{" : "[");
  var close = (target === "lua" ? "}" : "]");
  var s = "";
  var c = "";
  var _o = forms;
  var k = undefined;
  for (k in _o) {
    var v = _o[k];
    var _k = (numeric63(k) ? parseInt(k) : k);
    if (number63(_k)) {
      s = s + c + compile(v);
      c = ", ";
    }
  }
  return(open + s + close);
}});
setenv("%object", {_stash: true, special: function () {
  var forms = unstash(Array.prototype.slice.call(arguments, 0));
  var s = "{";
  var c = "";
  var sep = (target === "lua" ? " = " : ": ");
  var _o = sort(pair(forms), function (_x, _x1) {
    var a = _x[0];
    var b = _x1[0];
    return(a < b);
  });
  var k = undefined;
  for (k in _o) {
    var v = _o[k];
    var _k = (numeric63(k) ? parseInt(k) : k);
    if (number63(_k)) {
      var _id = v;
      var _k1 = _id[0];
      var _v = _id[1];
      if (! string63(_k1)) {
        throw new Error("Illegal key: " + str(_k1));
      }
      s = s + c + key(_k1) + sep + compile(_v);
      c = ", ";
    }
  }
  return(s + "}");
}});
exports.run = run;
exports.eval = eval;
exports.expand = expand;
exports.compile = compile;
