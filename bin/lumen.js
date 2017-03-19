if (typeof(environment) === "undefined" || environment === null) {
  environment = [{}];
}
if (typeof(target) === "undefined" || target === null) {
  target = "js";
}
nil63 = function (x) {
  return(x === undefined || x === null);
};
is63 = function (x) {
  return(! nil63(x));
};
no = function (x) {
  return(nil63(x) || x === false);
};
yes = function (x) {
  return(! no(x));
};
_35 = function (x) {
  return(x.length || 0);
};
none63 = function (x) {
  return(_35(x) === 0);
};
some63 = function (x) {
  return(_35(x) > 0);
};
one63 = function (x) {
  return(_35(x) === 1);
};
two63 = function (x) {
  return(_35(x) === 2);
};
hd = function (l) {
  return(l[0]);
};
type = function (x) {
  return(typeof(x));
};
string63 = function (x) {
  return(type(x) === "string");
};
number63 = function (x) {
  return(type(x) === "number");
};
boolean63 = function (x) {
  return(type(x) === "boolean");
};
function63 = function (x) {
  return(type(x) === "function");
};
obj63 = function (x) {
  return(is63(x) && type(x) === "object");
};
atom63 = function (x) {
  return(nil63(x) || string63(x) || number63(x) || boolean63(x));
};
nan = 0 / 0;
inf = 1 / 0;
nan63 = function (n) {
  return(!( n === n));
};
inf63 = function (n) {
  return(n === inf || n === -inf);
};
clip = function (s, from, upto) {
  return(s.substring(from, upto));
};
has63 = function (l, k) {
  return(l.hasOwnProperty(k));
};
cut = function (x, from, upto, exclude) {
  var l = [];
  var j = 0;
  var _e;
  if (nil63(from) || from < 0) {
    _e = 0;
  } else {
    _e = from;
  }
  var i = _e;
  var n = _35(x);
  var _e1;
  if (nil63(upto) || upto > n) {
    _e1 = n;
  } else {
    _e1 = upto;
  }
  var _upto = _e1;
  while (i < _upto) {
    l[j] = x[i];
    i = i + 1;
    j = j + 1;
  }
  if (exclude) {
    var _o = x;
    var k = undefined;
    for (k in _o) {
      var v = _o[k];
      var _e3;
      if (numeric63(k)) {
        _e3 = parseInt(k);
      } else {
        _e3 = k;
      }
      var _k = _e3;
      if (!( number63(_k) || has63(exclude, _k))) {
        l[_k] = v;
      }
    }
  } else {
    var _o1 = x;
    var k = undefined;
    for (k in _o1) {
      var v = _o1[k];
      var _e2;
      if (numeric63(k)) {
        _e2 = parseInt(k);
      } else {
        _e2 = k;
      }
      var _k1 = _e2;
      if (! number63(_k1)) {
        l[_k1] = v;
      }
    }
  }
  return(l);
};
keys = function (x) {
  var t = [];
  var _o = x;
  var k = undefined;
  for (k in _o) {
    var v = _o[k];
    var _e;
    if (numeric63(k)) {
      _e = parseInt(k);
    } else {
      _e = k;
    }
    var _k = _e;
    if (! number63(_k)) {
      t[_k] = v;
    }
  }
  return(t);
};
edge = function (x) {
  return(_35(x) - 1);
};
inner = function (x) {
  return(clip(x, 1, edge(x)));
};
tl = function (l) {
  return(cut(l, 1));
};
char = function (s, n) {
  return(s.charAt(n));
};
code = function (s, n) {
  return(s.charCodeAt(n));
};
string_literal63 = function (x) {
  return(string63(x) && char(x, 0) === "\"");
};
id_literal63 = function (x) {
  return(string63(x) && char(x, 0) === "|");
};
add = function (l, x) {
  l.push(x);
  return(undefined);
};
drop = function (l) {
  return(l.pop());
};
last = function (l) {
  return(l[edge(l)]);
};
almost = function (l) {
  return(cut(l, 0, edge(l)));
};
reverse = function (l) {
  var l1 = keys(l);
  var i = edge(l);
  while (i >= 0) {
    add(l1, l[i]);
    i = i - 1;
  }
  return(l1);
};
reduce = function (f, x) {
  if (none63(x)) {
    return(undefined);
  } else {
    if (one63(x)) {
      return(hd(x));
    } else {
      return(f(hd(x), reduce(f, tl(x))));
    }
  }
};
join = function () {
  var ls = unstash(Array.prototype.slice.call(arguments, 0));
  var r = [];
  var _x = ls;
  var _i = 0;
  while (_i < _35(_x)) {
    var l = _x[_i];
    if (l) {
      var n = _35(r);
      var _o = l;
      var k = undefined;
      for (k in _o) {
        var v = _o[k];
        var _e;
        if (numeric63(k)) {
          _e = parseInt(k);
        } else {
          _e = k;
        }
        var _k = _e;
        if (number63(_k)) {
          _k = _k + n;
        }
        r[_k] = v;
      }
    }
    _i = _i + 1;
  }
  return(r);
};
find = function (f, t) {
  var _o = t;
  var _i = undefined;
  for (_i in _o) {
    var x = _o[_i];
    var _e;
    if (numeric63(_i)) {
      _e = parseInt(_i);
    } else {
      _e = _i;
    }
    var __i = _e;
    var y = f(x);
    if (y) {
      return(y);
    }
  }
};
first = function (f, l) {
  var _x = l;
  var _i = 0;
  while (_i < _35(_x)) {
    var x = _x[_i];
    var y = f(x);
    if (y) {
      return(y);
    }
    _i = _i + 1;
  }
};
in63 = function (x, t) {
  return(find(function (y) {
    return(x === y);
  }, t));
};
pair = function (l) {
  var l1 = [];
  var i = 0;
  while (i < _35(l)) {
    add(l1, [l[i], l[i + 1]]);
    i = i + 1;
    i = i + 1;
  }
  return(l1);
};
sort = function (l, f) {
  var _e;
  if (f) {
    _e = function (a, b) {
      if (f(a, b)) {
        return(-1);
      } else {
        return(1);
      }
    };
  }
  return(l.sort(_e));
};
map = function (f, x) {
  var t = [];
  var _x = x;
  var _i = 0;
  while (_i < _35(_x)) {
    var v = _x[_i];
    var y = f(v);
    if (is63(y)) {
      add(t, y);
    }
    _i = _i + 1;
  }
  var _o = x;
  var k = undefined;
  for (k in _o) {
    var v = _o[k];
    var _e;
    if (numeric63(k)) {
      _e = parseInt(k);
    } else {
      _e = k;
    }
    var _k = _e;
    if (! number63(_k)) {
      var y = f(v);
      if (is63(y)) {
        t[_k] = y;
      }
    }
  }
  return(t);
};
keep = function (f, x) {
  return(map(function (v) {
    if (yes(f(v))) {
      return(v);
    }
  }, x));
};
keys63 = function (t) {
  var _o = t;
  var k = undefined;
  for (k in _o) {
    var v = _o[k];
    var _e;
    if (numeric63(k)) {
      _e = parseInt(k);
    } else {
      _e = k;
    }
    var _k = _e;
    if (! number63(_k)) {
      return(true);
    }
  }
  return(false);
};
empty63 = function (t) {
  var _o = t;
  var _i = undefined;
  for (_i in _o) {
    var x = _o[_i];
    var _e;
    if (numeric63(_i)) {
      _e = parseInt(_i);
    } else {
      _e = _i;
    }
    var __i = _e;
    return(false);
  }
  return(true);
};
stash = function (args) {
  if (keys63(args)) {
    var p = [];
    var _o = args;
    var k = undefined;
    for (k in _o) {
      var v = _o[k];
      var _e;
      if (numeric63(k)) {
        _e = parseInt(k);
      } else {
        _e = k;
      }
      var _k = _e;
      if (! number63(_k)) {
        p[_k] = v;
      }
    }
    p._stash = true;
    add(args, p);
  }
  return(args);
};
unstash = function (args) {
  if (none63(args)) {
    return([]);
  } else {
    var l = last(args);
    if (obj63(l) && l._stash) {
      var args1 = almost(args);
      var _o = l;
      var k = undefined;
      for (k in _o) {
        var v = _o[k];
        var _e;
        if (numeric63(k)) {
          _e = parseInt(k);
        } else {
          _e = k;
        }
        var _k = _e;
        if (!( _k === "_stash")) {
          args1[_k] = v;
        }
      }
      return(args1);
    } else {
      return(args);
    }
  }
};
destash33 = function (l, args1) {
  if (obj63(l) && l._stash) {
    var _o = l;
    var k = undefined;
    for (k in _o) {
      var v = _o[k];
      var _e;
      if (numeric63(k)) {
        _e = parseInt(k);
      } else {
        _e = k;
      }
      var _k = _e;
      if (!( _k === "_stash")) {
        args1[_k] = v;
      }
    }
  } else {
    return(l);
  }
};
search = function (s, pattern, start) {
  var i = s.indexOf(pattern, start);
  if (i >= 0) {
    return(i);
  }
};
split = function (s, sep) {
  if (s === "" || sep === "") {
    return([]);
  } else {
    var l = [];
    var n = _35(sep);
    while (true) {
      var i = search(s, sep);
      if (nil63(i)) {
        break;
      } else {
        add(l, clip(s, 0, i));
        s = clip(s, i + n);
      }
    }
    add(l, s);
    return(l);
  }
};
cat = function () {
  var xs = unstash(Array.prototype.slice.call(arguments, 0));
  return(reduce(function (a, b) {
    return(a + b);
  }, xs) || "");
};
_43 = function () {
  var xs = unstash(Array.prototype.slice.call(arguments, 0));
  return(reduce(function (a, b) {
    return(a + b);
  }, xs) || 0);
};
_45 = function () {
  var xs = unstash(Array.prototype.slice.call(arguments, 0));
  return(reduce(function (b, a) {
    return(a - b);
  }, reverse(xs)) || 0);
};
_42 = function () {
  var xs = unstash(Array.prototype.slice.call(arguments, 0));
  return(reduce(function (a, b) {
    return(a * b);
  }, xs) || 1);
};
_47 = function () {
  var xs = unstash(Array.prototype.slice.call(arguments, 0));
  return(reduce(function (b, a) {
    return(a / b);
  }, reverse(xs)) || 1);
};
_37 = function () {
  var xs = unstash(Array.prototype.slice.call(arguments, 0));
  return(reduce(function (b, a) {
    return(a % b);
  }, reverse(xs)) || 0);
};
_62 = function (a, b) {
  return(a > b);
};
_60 = function (a, b) {
  return(a < b);
};
_61 = function (a, b) {
  return(a === b);
};
_6261 = function (a, b) {
  return(a >= b);
};
_6061 = function (a, b) {
  return(a <= b);
};
number = function (s) {
  var n = parseFloat(s);
  if (! isNaN(n)) {
    return(n);
  }
};
number_code63 = function (n) {
  return(n > 47 && n < 58);
};
numeric63 = function (s) {
  var n = _35(s);
  var i = 0;
  while (i < n) {
    if (! number_code63(code(s, i))) {
      return(false);
    }
    i = i + 1;
  }
  return(true);
};
var tostring = function (x) {
  return(x.toString());
};
escape = function (s) {
  var s1 = "\"";
  var i = 0;
  while (i < _35(s)) {
    var c = char(s, i);
    var _e;
    if (c === "\n") {
      _e = "\\n";
    } else {
      var _e1;
      if (c === "\"") {
        _e1 = "\\\"";
      } else {
        var _e2;
        if (c === "\\") {
          _e2 = "\\\\";
        } else {
          _e2 = c;
        }
        _e1 = _e2;
      }
      _e = _e1;
    }
    var c1 = _e;
    s1 = s1 + c1;
    i = i + 1;
  }
  return(s1 + "\"");
};
str = function (x, stack) {
  if (nil63(x)) {
    return("nil");
  } else {
    if (nan63(x)) {
      return("nan");
    } else {
      if (x === inf) {
        return("inf");
      } else {
        if (x === -inf) {
          return("-inf");
        } else {
          if (boolean63(x)) {
            if (x) {
              return("true");
            } else {
              return("false");
            }
          } else {
            if (string63(x)) {
              return(escape(x));
            } else {
              if (atom63(x)) {
                return(tostring(x));
              } else {
                if (function63(x)) {
                  return("function");
                } else {
                  if (stack && in63(x, stack)) {
                    return("circular");
                  } else {
                    if (false) {
                      return(escape(tostring(x)));
                    } else {
                      var s = "(";
                      var sp = "";
                      var xs = [];
                      var ks = [];
                      var l = stack || [];
                      add(l, x);
                      var _o = x;
                      var k = undefined;
                      for (k in _o) {
                        var v = _o[k];
                        var _e;
                        if (numeric63(k)) {
                          _e = parseInt(k);
                        } else {
                          _e = k;
                        }
                        var _k = _e;
                        if (number63(_k)) {
                          xs[_k] = str(v, l);
                        } else {
                          add(ks, _k + ":");
                          add(ks, str(v, l));
                        }
                      }
                      drop(l);
                      var _o1 = join(xs, ks);
                      var _i1 = undefined;
                      for (_i1 in _o1) {
                        var v = _o1[_i1];
                        var _e1;
                        if (numeric63(_i1)) {
                          _e1 = parseInt(_i1);
                        } else {
                          _e1 = _i1;
                        }
                        var __i1 = _e1;
                        s = s + sp + v;
                        sp = " ";
                      }
                      return(s + ")");
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
apply = function (f, args) {
  var _args = stash(args);
  return(f.apply(f, _args));
};
call = function (f) {
  return(f());
};
toplevel63 = function () {
  return(one63(environment));
};
setenv = function (k) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 1));
  var _k = destash33(k, _rest);
  var _keys = cut(_rest, 0);
  if (string63(_k)) {
    var _e;
    if (_keys.toplevel) {
      _e = hd(environment);
    } else {
      _e = last(environment);
    }
    var frame = _e;
    var entry = frame[_k] || {};
    var _o = _keys;
    var _k1 = undefined;
    for (_k1 in _o) {
      var v = _o[_k1];
      var _e1;
      if (numeric63(_k1)) {
        _e1 = parseInt(_k1);
      } else {
        _e1 = _k1;
      }
      var _k2 = _e1;
      entry[_k2] = v;
    }
    frame[_k] = entry;
    return(frame[_k]);
  }
};
print = function (x) {
  return(console.log(x));
};
var math = Math;
abs = math.abs;
acos = math.acos;
asin = math.asin;
atan = math.atan;
atan2 = math.atan2;
ceil = math.ceil;
cos = math.cos;
floor = math.floor;
log = math.log;
log10 = math.log10;
max = math.max;
min = math.min;
pow = math.pow;
random = math.random;
sin = math.sin;
sinh = math.sinh;
sqrt = math.sqrt;
tan = math.tan;
tanh = math.tanh;
trunc = math.floor;
setenv("quote", {_stash: true, macro: function (form) {
  return(quoted(form));
}});
setenv("quasiquote", {_stash: true, macro: function (form) {
  return(quasiexpand(form, 1));
}});
setenv("set", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["do"], map(function (_x) {
    var lh = _x[0];
    var rh = _x[1];
    return(["%set", lh, rh]);
  }, pair(args))));
}});
setenv("get", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%get"], args));
}});
setenv("at", {_stash: true, macro: function (l, i) {
  if (target === "lua" && number63(i)) {
    i = i + 1;
  } else {
    if (target === "lua") {
      i = ["+", i, 1];
    }
  }
  return(["get", l, i]);
}});
setenv("wipe", {_stash: true, macro: function (place) {
  if (target === "lua") {
    return(["set", place, "nil"]);
  } else {
    return(["%delete", place]);
  }
}});
setenv("list", {_stash: true, macro: function () {
  var body = unstash(Array.prototype.slice.call(arguments, 0));
  var x = unique("x");
  var l = [];
  var forms = [];
  var ks = [];
  var _o = body;
  var k = undefined;
  for (k in _o) {
    var v = _o[k];
    var _e;
    if (numeric63(k)) {
      _e = parseInt(k);
    } else {
      _e = k;
    }
    var _k = _e;
    if (string63(_k)) {
      add(ks, _k);
    } else {
      l[_k] = v;
    }
  }
  var _x = sort(ks);
  var _i1 = 0;
  while (_i1 < _35(_x)) {
    var k = _x[_i1];
    var v = body[k];
    add(forms, ["set", ["get", x, ["quote", k]], v]);
    _i1 = _i1 + 1;
  }
  if (some63(forms)) {
    return(join(["let", x, join(["%array"], l)], forms, [x]));
  } else {
    return(join(["%array"], l));
  }
}});
setenv("if", {_stash: true, macro: function () {
  var branches = unstash(Array.prototype.slice.call(arguments, 0));
  return(hd(expand_if(branches)));
}});
setenv("case", {_stash: true, macro: function (expr) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 1));
  var _expr = destash33(expr, _rest);
  var clauses = cut(_rest, 0);
  var x = unique("x");
  var eq = function (_) {
    return(["=", ["quote", _], x]);
  };
  var cl = function (_x) {
    var a = _x[0];
    var b = _x[1];
    if (nil63(b)) {
      return([a]);
    } else {
      if (string63(a) || number63(a)) {
        return([eq(a), b]);
      } else {
        if (one63(a)) {
          return([eq(hd(a)), b]);
        } else {
          if (_35(a) > 1) {
            return([join(["or"], map(eq, a)), b]);
          }
        }
      }
    }
  };
  return(["let", x, _expr, join(["if"], apply(join, map(cl, pair(clauses))))]);
}});
setenv("when", {_stash: true, macro: function (cond) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 1));
  var _cond = destash33(cond, _rest);
  var body = cut(_rest, 0);
  return(["if", _cond, join(["do"], body)]);
}});
setenv("unless", {_stash: true, macro: function (cond) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 1));
  var _cond = destash33(cond, _rest);
  var body = cut(_rest, 0);
  return(["if", ["not", _cond], join(["do"], body)]);
}});
setenv("obj", {_stash: true, macro: function () {
  var body = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%object"], mapo(function (x) {
    return(x);
  }, body)));
}});
setenv("let", {_stash: true, macro: function (bs) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 1));
  var _bs = destash33(bs, _rest);
  var body = cut(_rest, 0);
  if (atom63(_bs)) {
    return(join(["let", [_bs, hd(body)]], tl(body)));
  } else {
    if (none63(_bs)) {
      return(join(["do"], body));
    } else {
      var lh = _bs[0];
      var rh = _bs[1];
      var bs2 = cut(_bs, 2);
      var _id2 = bind(lh, rh);
      var id = _id2[0];
      var val = _id2[1];
      var bs1 = cut(_id2, 2);
      var renames = [];
      if (bound63(id) || toplevel63()) {
        var id1 = unique(id);
        renames = [id, id1];
        id = id1;
      } else {
        setenv(id, {_stash: true, variable: true});
      }
      return(["do", ["%local", id, val], ["let-symbol", renames, join(["let", join(bs1, bs2)], body)]]);
    }
  }
}});
setenv("with", {_stash: true, macro: function (x, v) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 2));
  var _x = destash33(x, _rest);
  var _v = destash33(v, _rest);
  var body = cut(_rest, 0);
  return(join(["let", [_x, _v]], body, [_x]));
}});
setenv("let-when", {_stash: true, macro: function (x, v) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 2));
  var _x = destash33(x, _rest);
  var _v = destash33(v, _rest);
  var body = cut(_rest, 0);
  var y = unique("y");
  return(["let", y, _v, ["when", ["yes", y], join(["let", [_x, y]], body)]]);
}});
setenv("define-macro", {_stash: true, macro: function (name, args) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 2));
  var _name = destash33(name, _rest);
  var _args = destash33(args, _rest);
  var body = cut(_rest, 0);
  var _x = ["setenv", ["quote", _name]];
  _x.macro = join(["fn", _args], body);
  var form = _x;
  eval(form);
  return(form);
}});
setenv("define-special", {_stash: true, macro: function (name, args) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 2));
  var _name = destash33(name, _rest);
  var _args = destash33(args, _rest);
  var body = cut(_rest, 0);
  var _x = ["setenv", ["quote", _name]];
  _x.special = join(["fn", _args], body);
  var form = join(_x, keys(body));
  eval(form);
  return(form);
}});
setenv("define-symbol", {_stash: true, macro: function (name, expansion) {
  setenv(name, {_stash: true, symbol: expansion});
  var _x = ["setenv", ["quote", name]];
  _x.symbol = ["quote", expansion];
  return(_x);
}});
setenv("define-reader", {_stash: true, macro: function (_x) {
  var char = _x[0];
  var s = _x[1];
  var _rest = unstash(Array.prototype.slice.call(arguments, 1));
  var __x = destash33(_x, _rest);
  var body = cut(_rest, 0);
  return(["set", ["get", "read-table", char], join(["fn", [s]], body)]);
}});
setenv("define", {_stash: true, macro: function (name, x) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 2));
  var _name = destash33(name, _rest);
  var _x = destash33(x, _rest);
  var body = cut(_rest, 0);
  setenv(_name, {_stash: true, variable: true});
  if (some63(body)) {
    return(join(["%local-function", _name], bind42(_x, body)));
  } else {
    return(["%local", _name, _x]);
  }
}});
setenv("define-global", {_stash: true, macro: function (name, x) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 2));
  var _name = destash33(name, _rest);
  var _x = destash33(x, _rest);
  var body = cut(_rest, 0);
  setenv(_name, {_stash: true, toplevel: true, variable: true});
  if (some63(body)) {
    return(join(["%global-function", _name], bind42(_x, body)));
  } else {
    return(["set", _name, _x]);
  }
}});
setenv("define-variable", {_stash: true, macro: function (name, x) {
  return(["init!", name, x]);
}});
setenv("with-frame", {_stash: true, macro: function () {
  var body = unstash(Array.prototype.slice.call(arguments, 0));
  var x = unique("x");
  return(["do", ["add", "environment", ["obj"]], ["with", x, join(["do"], body), ["drop", "environment"]]]);
}});
setenv("with-bindings", {_stash: true, macro: function (_x) {
  var names = _x[0];
  var id = _x[1];
  var _rest = unstash(Array.prototype.slice.call(arguments, 1));
  var __x = destash33(_x, _rest);
  var body = cut(_rest, 0);
  var x = unique("x");
  var _x2 = ["setenv", x];
  _x2.variable = true;
  var _x3 = ["setenv", ["quote", "%scope"]];
  _x3.args = names;
  _x3.id = id;
  _x3.unique = ["obj"];
  _x3.variable = true;
  return(join(["with-frame", ["each", x, names, _x2], _x3], body));
}});
setenv("let-macro", {_stash: true, macro: function (definitions) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 1));
  var _definitions = destash33(definitions, _rest);
  var body = cut(_rest, 0);
  add(environment, {});
  map(function (m) {
    return(macroexpand(join(["define-macro"], m)));
  }, _definitions);
  var _x = join(["do"], macroexpand(body));
  drop(environment);
  return(_x);
}});
setenv("let-symbol", {_stash: true, macro: function (expansions) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 1));
  var _expansions = destash33(expansions, _rest);
  var body = cut(_rest, 0);
  add(environment, {});
  map(function (_x) {
    var name = _x[0];
    var exp = _x[1];
    return(macroexpand(["define-symbol", name, exp]));
  }, pair(_expansions));
  var _x = join(["do"], macroexpand(body));
  drop(environment);
  return(_x);
}});
setenv("let-unique", {_stash: true, macro: function (names) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 1));
  var _names = destash33(names, _rest);
  var body = cut(_rest, 0);
  var bs = map(function (n) {
    return([n, ["unique", ["quote", n]]]);
  }, _names);
  return(join(["let", apply(join, bs)], body));
}});
setenv("fn", {_stash: true, macro: function (args) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 1));
  var _args = destash33(args, _rest);
  var body = cut(_rest, 0);
  return(join(["%function"], bind42(_args, body)));
}});
setenv("apply", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  var f = hd(args);
  var ks = keys(args);
  var x1 = cut(args, 1, edge(args), ks);
  var _e;
  if (_35(args) > 1) {
    _e = last(args);
  }
  var x2 = _e;
  var e = [];
  if (! empty63(x1)) {
    add(e, join(["list"], x1));
  }
  if (has63(ks, "rest")) {
    if (is63(x2)) {
      add(e, x2);
    }
    add(e, ks.rest);
    delete ks.rest;
  } else {
    if (is63(x2)) {
      add(e, x2);
    }
  }
  if (! empty63(ks)) {
    add(e, join(["list"], ks));
  }
  var _e1;
  if (_35(e) > 1) {
    _e1 = join(["join"], e);
  } else {
    _e1 = hd(e);
  }
  var args1 = _e1;
  return([["do", "apply"], f, args1]);
}});
setenv("guard", {_stash: true, macro: function (expr) {
  if (target === "js") {
    return([["fn", join(), ["%try", ["list", true, expr]]]]);
  } else {
    var x = unique("x");
    var msg = unique("msg");
    var trace = unique("trace");
    var _x25 = ["obj"];
    _x25.message = msg;
    _x25.stack = trace;
    return(["let", [x, "nil", msg, "nil", trace, "nil"], ["if", ["xpcall", ["fn", join(), ["set", x, expr]], ["fn", ["m"], ["set", trace, [["get", "debug", ["quote", "traceback"]]], msg, ["if", ["string?", "m"], ["clip", "m", ["+", ["search", "m", "\": \""], 2]], ["nil?", "m"], "\"\"", ["str", "m"]]]]], ["list", true, x], ["list", false, _x25]]]);
  }
}});
setenv("each", {_stash: true, macro: function (x, t) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 2));
  var _x = destash33(x, _rest);
  var _t = destash33(t, _rest);
  var body = cut(_rest, 0);
  var o = unique("o");
  var n = unique("n");
  var i = unique("i");
  var _e;
  if (atom63(_x)) {
    _e = [i, _x];
  } else {
    var _e1;
    if (_35(_x) > 1) {
      _e1 = _x;
    } else {
      _e1 = [i, hd(_x)];
    }
    _e = _e1;
  }
  var _id1 = _e;
  var k = _id1[0];
  var v = _id1[1];
  var _e2;
  if (target === "lua") {
    _e2 = body;
  } else {
    _e2 = [join(["let", k, ["if", ["numeric?", k], ["parseInt", k], k]], body)];
  }
  return(["let", [o, _t, k, "nil"], ["%for", o, k, join(["let", [v, ["get", o, k]]], _e2)]]);
}});
setenv("for", {_stash: true, macro: function (i, to) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 2));
  var _i = destash33(i, _rest);
  var _to = destash33(to, _rest);
  var body = cut(_rest, 0);
  return(["let", _i, 0, join(["while", ["<", _i, _to]], body, [["inc", _i]])]);
}});
setenv("step", {_stash: true, macro: function (v, t) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 2));
  var _v = destash33(v, _rest);
  var _t = destash33(t, _rest);
  var body = cut(_rest, 0);
  var x = unique("x");
  var i = unique("i");
  return(["let", [x, _t], ["for", i, ["#", x], join(["let", [_v, ["at", x, i]]], body)]]);
}});
setenv("set-of", {_stash: true, macro: function () {
  var xs = unstash(Array.prototype.slice.call(arguments, 0));
  var l = [];
  var _o = xs;
  var _i = undefined;
  for (_i in _o) {
    var x = _o[_i];
    var _e;
    if (numeric63(_i)) {
      _e = parseInt(_i);
    } else {
      _e = _i;
    }
    var __i = _e;
    l[x] = true;
  }
  return(join(["obj"], l));
}});
setenv("language", {_stash: true, macro: function () {
  return(["quote", target]);
}});
setenv("target", {_stash: true, macro: function () {
  var clauses = unstash(Array.prototype.slice.call(arguments, 0));
  return(clauses[target]);
}});
setenv("join!", {_stash: true, macro: function (a) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 1));
  var _a = destash33(a, _rest);
  var bs = cut(_rest, 0);
  return(["set", _a, join(["join", _a], bs)]);
}});
setenv("cat!", {_stash: true, macro: function (a) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 1));
  var _a = destash33(a, _rest);
  var bs = cut(_rest, 0);
  return(["set", _a, join(["cat", _a], bs)]);
}});
setenv("inc", {_stash: true, macro: function (n, by) {
  var _e;
  if (nil63(by)) {
    _e = 1;
  } else {
    _e = by;
  }
  return(["set", n, ["+", n, _e]]);
}});
setenv("dec", {_stash: true, macro: function (n, by) {
  var _e;
  if (nil63(by)) {
    _e = 1;
  } else {
    _e = by;
  }
  return(["set", n, ["-", n, _e]]);
}});
setenv("with-indent", {_stash: true, macro: function (form) {
  var x = unique("x");
  return(["do", ["inc", "indent-level"], ["with", x, form, ["dec", "indent-level"]]]);
}});
setenv("export", {_stash: true, macro: function () {
  var names = unstash(Array.prototype.slice.call(arguments, 0));
  if (target === "js") {
    return(join(["do"], map(function (k) {
      return(["set", ["get", "exports", ["quote", k]], k]);
    }, names)));
  } else {
    var x = {};
    var _o = names;
    var _i = undefined;
    for (_i in _o) {
      var k = _o[_i];
      var _e;
      if (numeric63(_i)) {
        _e = parseInt(_i);
      } else {
        _e = _i;
      }
      var __i = _e;
      x[k] = k;
    }
    return(["return", join(["obj"], x)]);
  }
}});
setenv("when-compiling", {_stash: true, macro: function () {
  var body = unstash(Array.prototype.slice.call(arguments, 0));
  return(eval(join(["do"], body)));
}});
setenv("undefined?", {_stash: true, macro: function (_var) {
  if (target === "js") {
    return(["%or", ["%eq", ["%type", _var], "\"undefined\""], ["%eq", _var, "null"]]);
  } else {
    return(["%eq", _var, "nil"]);
  }
}});
setenv("init!", {_stash: true, macro: function (_var, val) {
  return(["%if", ["undefined?", _var], ["%set", _var, val]]);
}});
setenv("do", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%do"], args));
}});
setenv("while", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%while"], args));
}});
setenv("break", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%break"], args));
}});
setenv("return", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%return"], args));
}});
setenv("new", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%new"], args));
}});
setenv("typeof", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%type"], args));
}});
setenv("error", {_stash: true, macro: function (msg) {
  var _rest = unstash(Array.prototype.slice.call(arguments, 1));
  var _msg = destash33(msg, _rest);
  var args = cut(_rest, 0);
  if (none63(args)) {
    return(["%error", _msg]);
  } else {
    return(["%error", ["cat", _msg, "\" \"", ["str", join(["list"], args)]]]);
  }
}});
setenv("not", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%not"], args));
}});
setenv("*", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%mul"], args));
}});
setenv("/", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%div"], args));
}});
setenv("%", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%mod"], args));
}});
setenv("+", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%add"], args));
}});
setenv("-", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  if (_35(args) < 2) {
    return(join(["%neg"], args));
  } else {
    return(join(["%sub"], args));
  }
}});
setenv("cat", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%cat"], args));
}});
setenv("<", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%lt"], args));
}});
setenv(">", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%gt"], args));
}});
setenv("<=", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%le"], args));
}});
setenv(">=", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%ge"], args));
}});
setenv("=", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%eq"], args));
}});
setenv("and", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%and"], args));
}});
setenv("or", {_stash: true, macro: function () {
  var args = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%or"], args));
}});
var reader = require("reader");
var compiler = require("compiler");
var system = require("system");
var eval_print = function (form) {
  var _id = (function () {
    try {
      return([true, compiler.eval(form)]);
    }
    catch (_e) {
      return([false, _e]);
    }
  })();
  var ok = _id[0];
  var v = _id[1];
  if (! ok) {
    return(print(v.stack));
  } else {
    if (is63(v)) {
      return(print(str(v)));
    }
  }
};
var rep = function (s) {
  return(eval_print(reader["read-string"](s)));
};
var repl = function () {
  var buf = "";
  var rep1 = function (s) {
    buf = buf + s;
    var more = [];
    var form = reader["read-string"](buf, more);
    if (!( form === more)) {
      eval_print(form);
      buf = "";
      return(system.write("> "));
    }
  };
  system.write("> ");
  var _in = process.stdin;
  _in.setEncoding("utf8");
  return(_in.on("data", rep1));
};
compile_file = function (path) {
  var s = reader.stream(system["read-file"](path));
  var body = reader["read-all"](s);
  var form = compiler.expand(join(["do"], body));
  return(compiler.compile(form, {_stash: true, stmt: true}));
};
load = function (path) {
  var previous = target;
  target = "js";
  var code = compile_file(path);
  target = previous;
  return(compiler.run(code));
};
var run_file = function (path) {
  return(compiler.run(system["read-file"](path)));
};
var script_file63 = function (path) {
  return(!( "-" === char(path, 0) || ".js" === clip(path, _35(path) - 3) || ".lua" === clip(path, _35(path) - 4)));
};
var usage = function () {
  print("usage: lumen [<file> <arguments> | options <object files>]");
  print(" <file>\t\tProgram read from script file");
  print(" <arguments>\tPassed to program in system.argv");
  print(" <object files>\tLoaded before compiling <input>");
  print("options:");
  print(" -c <input>\tCompile input file");
  print(" -o <output>\tOutput file");
  print(" -t <target>\tTarget language (default: lua)");
  return(print(" -e <expr>\tExpression to evaluate"));
};
var main = function () {
  var arg = hd(system.argv);
  if (arg && script_file63(arg)) {
    return(load(arg));
  } else {
    if (arg === "-h" || arg === "--help") {
      return(usage());
    } else {
      var pre = [];
      var input = undefined;
      var output = undefined;
      var target1 = undefined;
      var expr = undefined;
      var argv = system.argv;
      var i = 0;
      while (i < _35(argv)) {
        var a = argv[i];
        if (a === "-c" || a === "-o" || a === "-t" || a === "-e") {
          if (i === edge(argv)) {
            print("missing argument for " + a);
          } else {
            i = i + 1;
            var val = argv[i];
            if (a === "-c") {
              input = val;
            } else {
              if (a === "-o") {
                output = val;
              } else {
                if (a === "-t") {
                  target1 = val;
                } else {
                  if (a === "-e") {
                    expr = val;
                  }
                }
              }
            }
          }
        } else {
          if (!( "-" === char(a, 0))) {
            add(pre, a);
          }
        }
        i = i + 1;
      }
      var _x = pre;
      var _i = 0;
      while (_i < _35(_x)) {
        var file = _x[_i];
        run_file(file);
        _i = _i + 1;
      }
      if (nil63(input)) {
        if (expr) {
          return(rep(expr));
        } else {
          return(repl());
        }
      } else {
        if (target1) {
          target = target1;
        }
        var code = compile_file(input);
        if (nil63(output) || output === "-") {
          return(print(code));
        } else {
          return(system["write-file"](output, code));
        }
      }
    }
  }
};
main();
