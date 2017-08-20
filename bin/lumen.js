environment = [{}];
target = "js";
nil63 = function (x) {
  return x === undefined || x === null;
};
is63 = function (x) {
  return ! nil63(x);
};
no = function (x) {
  return nil63(x) || x === false;
};
yes = function (x) {
  return ! no(x);
};
either = function (x, y) {
  if (is63(x)) {
    return x;
  } else {
    return y;
  }
};
has63 = function (l, k) {
  return l.hasOwnProperty(k);
};
_35 = function (x) {
  return x.length || 0;
};
none63 = function (x) {
  return _35(x) === 0;
};
some63 = function (x) {
  return _35(x) > 0;
};
one63 = function (x) {
  return _35(x) === 1;
};
two63 = function (x) {
  return _35(x) === 2;
};
hd = function (l) {
  return l[0];
};
type = function (x) {
  return typeof(x);
};
string63 = function (x) {
  return type(x) === "string";
};
number63 = function (x) {
  return type(x) === "number";
};
boolean63 = function (x) {
  return type(x) === "boolean";
};
function63 = function (x) {
  return type(x) === "function";
};
obj63 = function (x) {
  return is63(x) && type(x) === "object";
};
atom63 = function (x) {
  return nil63(x) || string63(x) || number63(x) || boolean63(x);
};
nan = 0 / 0;
inf = 1 / 0;
_inf = - inf;
nan63 = function (n) {
  return n !== n;
};
inf63 = function (n) {
  return n === inf || n === _inf;
};
clip = function (s, from, upto) {
  return s.substring(from, upto);
};
cut = function (x, from, upto) {
  var __l = [];
  var j = 0;
  var __e;
  if (nil63(from) || from < 0) {
    __e = 0;
  } else {
    __e = from;
  }
  var i = __e;
  var n = _35(x);
  var __e1;
  if (nil63(upto) || upto > n) {
    __e1 = n;
  } else {
    __e1 = upto;
  }
  upto = __e1;
  while (i < upto) {
    __l[j] = x[i];
    i = i + 1;
    j = j + 1;
  }
  var ____o = x;
  var __k = undefined;
  for (__k in ____o) {
    var __v = ____o[__k];
    var __e2;
    if (numeric63(__k)) {
      __e2 = parseInt(__k);
    } else {
      __e2 = __k;
    }
    var __k1 = __e2;
    if (! number63(__k1)) {
      __l[__k1] = __v;
    }
  }
  return __l;
};
keys = function (x) {
  var __t = [];
  var ____o1 = x;
  var __k2 = undefined;
  for (__k2 in ____o1) {
    var __v1 = ____o1[__k2];
    var __e3;
    if (numeric63(__k2)) {
      __e3 = parseInt(__k2);
    } else {
      __e3 = __k2;
    }
    var __k3 = __e3;
    if (! number63(__k3)) {
      __t[__k3] = __v1;
    }
  }
  return __t;
};
edge = function (x) {
  return _35(x) - 1;
};
inner = function (x) {
  return clip(x, 1, edge(x));
};
tl = function (l) {
  return cut(l, 1);
};
char = function (s, n) {
  return s.charAt(n);
};
code = function (s, n) {
  return s.charCodeAt(n);
};
string_literal63 = function (x) {
  return string63(x) && char(x, 0) === "\"";
};
id_literal63 = function (x) {
  return string63(x) && char(x, 0) === "|";
};
add = function (l, x) {
  l.push(x);
  return undefined;
};
drop = function (l) {
  return l.pop();
};
last = function (l) {
  return l[edge(l)];
};
almost = function (l) {
  return cut(l, 0, edge(l));
};
reverse = function (l) {
  var __l1 = keys(l);
  var i = edge(l);
  while (i >= 0) {
    add(__l1, l[i]);
    i = i - 1;
  }
  return __l1;
};
reduce = function (f, x) {
  if (none63(x)) {
    return undefined;
  } else {
    if (one63(x)) {
      return hd(x);
    } else {
      return f(hd(x), reduce(f, tl(x)));
    }
  }
};
join = function () {
  var __ls = unstash(Array.prototype.slice.call(arguments, 0));
  var __r37 = [];
  var ____x1 = __ls;
  var ____i2 = 0;
  while (____i2 < _35(____x1)) {
    var __l11 = ____x1[____i2];
    if (__l11) {
      var n = _35(__r37);
      var ____o2 = __l11;
      var __k4 = undefined;
      for (__k4 in ____o2) {
        var __v2 = ____o2[__k4];
        var __e4;
        if (numeric63(__k4)) {
          __e4 = parseInt(__k4);
        } else {
          __e4 = __k4;
        }
        var __k5 = __e4;
        if (number63(__k5)) {
          __k5 = __k5 + n;
        }
        __r37[__k5] = __v2;
      }
    }
    ____i2 = ____i2 + 1;
  }
  return __r37;
};
find = function (f, t) {
  var ____o3 = t;
  var ____i4 = undefined;
  for (____i4 in ____o3) {
    var __x2 = ____o3[____i4];
    var __e5;
    if (numeric63(____i4)) {
      __e5 = parseInt(____i4);
    } else {
      __e5 = ____i4;
    }
    var ____i41 = __e5;
    var y = f(__x2);
    if (y) {
      return y;
    }
  }
};
first = function (f, l) {
  var ____x3 = l;
  var ____i5 = 0;
  while (____i5 < _35(____x3)) {
    var __x4 = ____x3[____i5];
    var y = f(__x4);
    if (y) {
      return y;
    }
    ____i5 = ____i5 + 1;
  }
};
in63 = function (x, t) {
  return find(function (y) {
    return x === y;
  }, t);
};
pair = function (l) {
  var __l12 = [];
  var __i6 = 0;
  while (__i6 < _35(l)) {
    add(__l12, [l[__i6], l[__i6 + 1]]);
    __i6 = __i6 + 1;
    __i6 = __i6 + 1;
  }
  return __l12;
};
pair = function (l, n) {
  var __e6;
  if (nil63(n)) {
    __e6 = 2;
  } else {
    var __e7;
    if (n < 1) {
      __e7 = 1;
    } else {
      __e7 = n;
    }
    __e6 = __e7;
  }
  n = __e6;
  var l1 = [];
  var i = 0;
  var j = _35(l);
  while (i < j) {
    var l2 = [];
    var __k6 = 0;
    while (__k6 < n) {
      if (i < j) {
        add(l2, l[i]);
      }
      i = i + 1;
      __k6 = __k6 + 1;
    }
    add(l1, l2);
  }
  return l1;
};
sort = function (l, f) {
  var __e8;
  if (f) {
    __e8 = function (a, b) {
      if (f(a, b)) {
        return -1;
      } else {
        return 1;
      }
    };
  }
  return l.sort(__e8);
};
map = function (f, x) {
  var __t1 = [];
  var ____x6 = x;
  var ____i7 = 0;
  while (____i7 < _35(____x6)) {
    var __v3 = ____x6[____i7];
    var y = f(__v3);
    if (is63(y)) {
      add(__t1, y);
    }
    ____i7 = ____i7 + 1;
  }
  var ____o4 = x;
  var __k7 = undefined;
  for (__k7 in ____o4) {
    var __v4 = ____o4[__k7];
    var __e9;
    if (numeric63(__k7)) {
      __e9 = parseInt(__k7);
    } else {
      __e9 = __k7;
    }
    var __k8 = __e9;
    if (! number63(__k8)) {
      y = f(__v4);
      if (is63(y)) {
        __t1[__k8] = y;
      }
    }
  }
  return __t1;
};
keep = function (f, x) {
  return map(function (v) {
    if (yes(f(v))) {
      return v;
    }
  }, x);
};
keys63 = function (t) {
  var ____o5 = t;
  var __k9 = undefined;
  for (__k9 in ____o5) {
    var __v5 = ____o5[__k9];
    var __e10;
    if (numeric63(__k9)) {
      __e10 = parseInt(__k9);
    } else {
      __e10 = __k9;
    }
    var __k10 = __e10;
    if (! number63(__k10)) {
      return true;
    }
  }
  return false;
};
empty63 = function (t) {
  var ____o6 = t;
  var ____i10 = undefined;
  for (____i10 in ____o6) {
    var __x7 = ____o6[____i10];
    var __e11;
    if (numeric63(____i10)) {
      __e11 = parseInt(____i10);
    } else {
      __e11 = ____i10;
    }
    var ____i101 = __e11;
    return false;
  }
  return true;
};
stash = function (args) {
  if (keys63(args)) {
    var p = [];
    var ____o7 = args;
    var __k11 = undefined;
    for (__k11 in ____o7) {
      var __v6 = ____o7[__k11];
      var __e12;
      if (numeric63(__k11)) {
        __e12 = parseInt(__k11);
      } else {
        __e12 = __k11;
      }
      var __k12 = __e12;
      if (! number63(__k12)) {
        p[__k12] = __v6;
      }
    }
    p._stash = true;
    add(args, p);
  }
  return args;
};
unstash = function (args) {
  if (none63(args)) {
    return [];
  }
  var l = last(args);
  if (obj63(l) && l._stash) {
    var __args1 = almost(args);
    var ____o8 = l;
    var __k13 = undefined;
    for (__k13 in ____o8) {
      var __v7 = ____o8[__k13];
      var __e13;
      if (numeric63(__k13)) {
        __e13 = parseInt(__k13);
      } else {
        __e13 = __k13;
      }
      var __k14 = __e13;
      if (!( __k14 === "_stash")) {
        __args1[__k14] = __v7;
      }
    }
    return __args1;
  } else {
    return args;
  }
};
destash33 = function (l, args1) {
  if (obj63(l) && l._stash) {
    var ____o9 = l;
    var __k15 = undefined;
    for (__k15 in ____o9) {
      var __v8 = ____o9[__k15];
      var __e14;
      if (numeric63(__k15)) {
        __e14 = parseInt(__k15);
      } else {
        __e14 = __k15;
      }
      var __k16 = __e14;
      if (!( __k16 === "_stash")) {
        args1[__k16] = __v8;
      }
    }
  } else {
    return l;
  }
};
search = function (s, pattern, start) {
  var i = s.indexOf(pattern, start);
  if (i >= 0) {
    return i;
  }
};
split = function (s, sep) {
  if (s === "" || sep === "") {
    return [];
  }
  var l = [];
  var n = _35(sep);
  while (true) {
    var i = search(s, sep);
    if (nil63(i)) {
      break;
    }
    add(l, clip(s, 0, i));
    s = clip(s, i + n);
  }
  add(l, s);
  return l;
};
cat = function () {
  var __xs = unstash(Array.prototype.slice.call(arguments, 0));
  return either(reduce(function (a, b) {
    return a + b;
  }, __xs), "");
};
_43 = function () {
  var __xs1 = unstash(Array.prototype.slice.call(arguments, 0));
  return either(reduce(function (a, b) {
    return a + b;
  }, __xs1), 0);
};
_45 = function () {
  var __xs2 = unstash(Array.prototype.slice.call(arguments, 0));
  return either(reduce(function (b, a) {
    return a - b;
  }, reverse(__xs2)), 0);
};
_42 = function () {
  var __xs3 = unstash(Array.prototype.slice.call(arguments, 0));
  return either(reduce(function (a, b) {
    return a * b;
  }, __xs3), 1);
};
_47 = function () {
  var __xs4 = unstash(Array.prototype.slice.call(arguments, 0));
  return either(reduce(function (b, a) {
    return a / b;
  }, reverse(__xs4)), 1);
};
_37 = function () {
  var __xs5 = unstash(Array.prototype.slice.call(arguments, 0));
  return either(reduce(function (b, a) {
    return a % b;
  }, reverse(__xs5)), 0);
};
var pairwise = function (f, xs) {
  var __i14 = 0;
  while (__i14 < edge(xs)) {
    var a = xs[__i14];
    var b = xs[__i14 + 1];
    if (! f(a, b)) {
      return false;
    }
    __i14 = __i14 + 1;
  }
  return true;
};
_60 = function () {
  var __xs6 = unstash(Array.prototype.slice.call(arguments, 0));
  return pairwise(function (a, b) {
    return a < b;
  }, __xs6);
};
_62 = function () {
  var __xs7 = unstash(Array.prototype.slice.call(arguments, 0));
  return pairwise(function (a, b) {
    return a > b;
  }, __xs7);
};
_6161 = function () {
  var __xs8 = unstash(Array.prototype.slice.call(arguments, 0));
  return pairwise(function (a, b) {
    return a === b;
  }, __xs8);
};
_6061 = function () {
  var __xs9 = unstash(Array.prototype.slice.call(arguments, 0));
  return pairwise(function (a, b) {
    return a <= b;
  }, __xs9);
};
_6261 = function () {
  var __xs10 = unstash(Array.prototype.slice.call(arguments, 0));
  return pairwise(function (a, b) {
    return a >= b;
  }, __xs10);
};
number = function (s) {
  var n = parseFloat(s);
  if (! isNaN(n)) {
    return n;
  }
};
number_code63 = function (n) {
  return n > 47 && n < 58;
};
numeric63 = function (s) {
  var n = _35(s);
  var __i15 = 0;
  while (__i15 < n) {
    if (! number_code63(code(s, __i15))) {
      return false;
    }
    __i15 = __i15 + 1;
  }
  return some63(s);
};
var tostring = function (x) {
  return x.toString();
};
escape = function (s) {
  var s1 = "\"";
  var __i16 = 0;
  while (__i16 < _35(s)) {
    var c = char(s, __i16);
    var __e15;
    if (c === "\n") {
      __e15 = "\\n";
    } else {
      var __e16;
      if (c === "\r") {
        __e16 = "\\r";
      } else {
        var __e17;
        if (c === "\"") {
          __e17 = "\\\"";
        } else {
          var __e18;
          if (c === "\\") {
            __e18 = "\\\\";
          } else {
            __e18 = c;
          }
          __e17 = __e18;
        }
        __e16 = __e17;
      }
      __e15 = __e16;
    }
    var c1 = __e15;
    s1 = s1 + c1;
    __i16 = __i16 + 1;
  }
  return s1 + "\"";
};
str = function (x, stack) {
  if (nil63(x)) {
    return "nil";
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
          if (boolean63(x)) {
            if (x) {
              return "true";
            } else {
              return "false";
            }
          } else {
            if (string63(x)) {
              return escape(x);
            } else {
              if (atom63(x)) {
                return tostring(x);
              } else {
                if (function63(x)) {
                  return "function";
                } else {
                  if (stack && in63(x, stack)) {
                    return "circular";
                  } else {
                    if (false) {
                      return escape(tostring(x));
                    } else {
                      var s = "(";
                      var sp = "";
                      var xs = [];
                      var ks = [];
                      var l = stack || [];
                      add(l, x);
                      var ____o10 = x;
                      var __k17 = undefined;
                      for (__k17 in ____o10) {
                        var __v9 = ____o10[__k17];
                        var __e19;
                        if (numeric63(__k17)) {
                          __e19 = parseInt(__k17);
                        } else {
                          __e19 = __k17;
                        }
                        var __k18 = __e19;
                        if (number63(__k18)) {
                          xs[__k18] = str(__v9, l);
                        } else {
                          add(ks, __k18 + ":");
                          add(ks, str(__v9, l));
                        }
                      }
                      drop(l);
                      var ____o11 = join(xs, ks);
                      var ____i18 = undefined;
                      for (____i18 in ____o11) {
                        var __v10 = ____o11[____i18];
                        var __e20;
                        if (numeric63(____i18)) {
                          __e20 = parseInt(____i18);
                        } else {
                          __e20 = ____i18;
                        }
                        var ____i181 = __e20;
                        s = s + sp + __v10;
                        sp = " ";
                      }
                      return s + ")";
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
  args = stash(args);
  return f.apply(f, args);
};
call = function (f) {
  var ____r75 = unstash(Array.prototype.slice.call(arguments, 1));
  var __f = destash33(f, ____r75);
  var ____id = ____r75;
  var __args = cut(____id, 0);
  return apply(__f, __args);
};
setenv = function (k) {
  var ____r76 = unstash(Array.prototype.slice.call(arguments, 1));
  var __k19 = destash33(k, ____r76);
  var ____id1 = ____r76;
  var __keys = cut(____id1, 0);
  if (string63(__k19)) {
    var __e21;
    if (__keys.toplevel) {
      __e21 = hd(environment);
    } else {
      __e21 = last(environment);
    }
    var frame = __e21;
    var entry = frame[__k19] || {};
    var ____o12 = __keys;
    var __k20 = undefined;
    for (__k20 in ____o12) {
      var __v11 = ____o12[__k20];
      var __e22;
      if (numeric63(__k20)) {
        __e22 = parseInt(__k20);
      } else {
        __e22 = __k20;
      }
      var __k21 = __e22;
      entry[__k21] = __v11;
    }
    frame[__k19] = entry;
    return frame[__k19];
  }
};
print = function (x) {
  return console.log(x);
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
  return quoted(form);
}});
setenv("quasiquote", {_stash: true, macro: function (form) {
  return quasiexpand(form, 1);
}});
setenv("set", {_stash: true, macro: function () {
  var __args1 = unstash(Array.prototype.slice.call(arguments, 0));
  return join(["do"], map(function (__x4) {
    var ____id1 = __x4;
    var __lh1 = ____id1[0];
    var __rh1 = ____id1[1];
    return ["%set", __lh1, __rh1];
  }, pair(__args1)));
}});
setenv("at", {_stash: true, macro: function (l, i) {
  if (target === "lua" && number63(i)) {
    i = i + 1;
  } else {
    if (target === "lua") {
      i = ["+", i, 1];
    }
  }
  return ["get", l, i];
}});
setenv("wipe", {_stash: true, macro: function (place) {
  if (target === "lua") {
    return ["set", place, "nil"];
  } else {
    return ["%delete", place];
  }
}});
setenv("list", {_stash: true, macro: function () {
  var __body1 = unstash(Array.prototype.slice.call(arguments, 0));
  var __x22 = unique("x");
  var __l1 = [];
  var __forms1 = [];
  var ____o1 = __body1;
  var __k2 = undefined;
  for (__k2 in ____o1) {
    var __v1 = ____o1[__k2];
    var __e8;
    if (numeric63(__k2)) {
      __e8 = parseInt(__k2);
    } else {
      __e8 = __k2;
    }
    var __k3 = __e8;
    if (number63(__k3)) {
      __l1[__k3] = __v1;
    } else {
      add(__forms1, ["set", ["get", __x22, ["quote", __k3]], __v1]);
    }
  }
  if (some63(__forms1)) {
    return join(["let", __x22, join(["%array"], __l1)], __forms1, [__x22]);
  } else {
    return join(["%array"], __l1);
  }
}});
setenv("if", {_stash: true, macro: function () {
  var __branches1 = unstash(Array.prototype.slice.call(arguments, 0));
  return hd(expand_if(__branches1));
}});
setenv("case", {_stash: true, macro: function (expr) {
  var ____r13 = unstash(Array.prototype.slice.call(arguments, 1));
  var __expr1 = destash33(expr, ____r13);
  var ____id4 = ____r13;
  var __clauses1 = cut(____id4, 0);
  var __x41 = unique("x");
  var __eq1 = function (_) {
    return ["=", ["quote", _], __x41];
  };
  var __cl1 = function (__x44) {
    var ____id5 = __x44;
    var __a1 = ____id5[0];
    var __b1 = ____id5[1];
    if (nil63(__b1)) {
      return [__a1];
    } else {
      if (string63(__a1) || number63(__a1)) {
        return [__eq1(__a1), __b1];
      } else {
        if (one63(__a1)) {
          return [__eq1(hd(__a1)), __b1];
        } else {
          if (_35(__a1) > 1) {
            return [join(["or"], map(__eq1, __a1)), __b1];
          }
        }
      }
    }
  };
  return ["let", __x41, __expr1, join(["if"], apply(join, map(__cl1, pair(__clauses1))))];
}});
setenv("when", {_stash: true, macro: function (cond) {
  var ____r17 = unstash(Array.prototype.slice.call(arguments, 1));
  var __cond1 = destash33(cond, ____r17);
  var ____id7 = ____r17;
  var __body3 = cut(____id7, 0);
  return ["if", __cond1, join(["do"], __body3)];
}});
setenv("unless", {_stash: true, macro: function (cond) {
  var ____r19 = unstash(Array.prototype.slice.call(arguments, 1));
  var __cond3 = destash33(cond, ____r19);
  var ____id9 = ____r19;
  var __body5 = cut(____id9, 0);
  return ["if", ["not", __cond3], join(["do"], __body5)];
}});
setenv("obj", {_stash: true, macro: function () {
  var __body7 = unstash(Array.prototype.slice.call(arguments, 0));
  return join(["%object"], mapo(function (x) {
    return x;
  }, __body7));
}});
setenv("let", {_stash: true, macro: function (bs) {
  var ____r23 = unstash(Array.prototype.slice.call(arguments, 1));
  var __bs11 = destash33(bs, ____r23);
  var ____id14 = ____r23;
  var __body9 = cut(____id14, 0);
  if (atom63(__bs11)) {
    return join(["let", [__bs11, hd(__body9)]], tl(__body9));
  } else {
    if (none63(__bs11)) {
      return join(["do"], __body9);
    } else {
      var ____id15 = __bs11;
      var __lh3 = ____id15[0];
      var __rh3 = ____id15[1];
      var __bs21 = cut(____id15, 2);
      var ____id16 = bind(__lh3, __rh3);
      var __id17 = ____id16[0];
      var __val1 = ____id16[1];
      var __bs12 = cut(____id16, 2);
      var __renames1 = [];
      if (! id_literal63(__id17)) {
        var __id121 = unique(__id17);
        __renames1 = [__id17, __id121];
        __id17 = __id121;
      }
      return ["do", ["%local", __id17, __val1], ["let-symbol", __renames1, join(["let", join(__bs12, __bs21)], __body9)]];
    }
  }
}});
setenv("with", {_stash: true, macro: function (x, v) {
  var ____r25 = unstash(Array.prototype.slice.call(arguments, 2));
  var __x84 = destash33(x, ____r25);
  var __v3 = destash33(v, ____r25);
  var ____id19 = ____r25;
  var __body11 = cut(____id19, 0);
  return join(["let", [__x84, __v3]], __body11, [__x84]);
}});
setenv("let-when", {_stash: true, macro: function (x, v) {
  var ____r27 = unstash(Array.prototype.slice.call(arguments, 2));
  var __x94 = destash33(x, ____r27);
  var __v5 = destash33(v, ____r27);
  var ____id21 = ____r27;
  var __body13 = cut(____id21, 0);
  var __y1 = unique("y");
  return ["let", __y1, __v5, ["when", ["yes", __y1], join(["let", [__x94, __y1]], __body13)]];
}});
setenv("define-macro", {_stash: true, macro: function (name, args) {
  var ____r29 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name1 = destash33(name, ____r29);
  var __args3 = destash33(args, ____r29);
  var ____id23 = ____r29;
  var __body15 = cut(____id23, 0);
  var ____x103 = ["setenv", ["quote", __name1]];
  ____x103.macro = join(["fn", __args3], __body15);
  var __form1 = ____x103;
  _eval(__form1);
  return __form1;
}});
setenv("define-special", {_stash: true, macro: function (name, args) {
  var ____r31 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name3 = destash33(name, ____r31);
  var __args5 = destash33(args, ____r31);
  var ____id25 = ____r31;
  var __body17 = cut(____id25, 0);
  var ____x109 = ["setenv", ["quote", __name3]];
  ____x109.special = join(["fn", __args5], __body17);
  var __form3 = join(____x109, keys(__body17));
  _eval(__form3);
  return __form3;
}});
setenv("define-symbol", {_stash: true, macro: function (name, expansion) {
  setenv(name, {_stash: true, symbol: expansion});
  var ____x115 = ["setenv", ["quote", name]];
  ____x115.symbol = ["quote", expansion];
  return ____x115;
}});
setenv("define-reader", {_stash: true, macro: function (__x123) {
  var ____id28 = __x123;
  var __char1 = ____id28[0];
  var __s1 = ____id28[1];
  var ____r35 = unstash(Array.prototype.slice.call(arguments, 1));
  var ____x123 = destash33(__x123, ____r35);
  var ____id29 = ____r35;
  var __body19 = cut(____id29, 0);
  return ["set", ["get", "read-table", __char1], join(["fn", [__s1]], __body19)];
}});
setenv("define", {_stash: true, macro: function (name, x) {
  var ____r37 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name6 = destash33(name, ____r37);
  var __x131 = destash33(x, ____r37);
  var ____id31 = ____r37;
  var __body21 = cut(____id31, 0);
  var __name7 = unquoted(__name6);
  setenv(__name7, {_stash: true, variable: true});
  if (some63(__body21)) {
    return join(["%local-function", __name7], bind42(__x131, __body21));
  } else {
    return ["%local", __name7, __x131];
  }
}});
setenv("define-global", {_stash: true, macro: function (name, x) {
  var ____r39 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name10 = destash33(name, ____r39);
  var __x137 = destash33(x, ____r39);
  var ____id33 = ____r39;
  var __body23 = cut(____id33, 0);
  var __name11 = unquoted(__name10);
  setenv(__name11, {_stash: true, toplevel: true, variable: true});
  if (some63(__body23)) {
    return join(["%global-function", __name11], bind42(__x137, __body23));
  } else {
    return ["set", __name11, __x137];
  }
}});
setenv("with-frame", {_stash: true, macro: function () {
  var __body25 = unstash(Array.prototype.slice.call(arguments, 0));
  var __x147 = unique("x");
  return ["do", ["add", "environment", ["obj"]], ["with", __x147, join(["do"], __body25), ["drop", "environment"]]];
}});
setenv("with-bindings", {_stash: true, macro: function (__x159) {
  var ____id36 = __x159;
  var __names1 = ____id36[0];
  var ____r41 = unstash(Array.prototype.slice.call(arguments, 1));
  var ____x159 = destash33(__x159, ____r41);
  var ____id37 = ____r41;
  var __body27 = cut(____id37, 0);
  var __x160 = unique("x");
  var ____x163 = ["setenv", __x160];
  ____x163.variable = true;
  return join(["with-frame", ["each", __x160, __names1, ____x163]], __body27);
}});
setenv("let-macro", {_stash: true, macro: function (definitions) {
  var ____r44 = unstash(Array.prototype.slice.call(arguments, 1));
  var __definitions1 = destash33(definitions, ____r44);
  var ____id39 = ____r44;
  var __body29 = cut(____id39, 0);
  add(environment, {});
  map(function (m) {
    return macroexpand(join(["define-macro"], m));
  }, __definitions1);
  var ____x167 = join(["do"], macroexpand(__body29));
  drop(environment);
  return ____x167;
}});
setenv("let-symbol", {_stash: true, macro: function (expansions) {
  var ____r48 = unstash(Array.prototype.slice.call(arguments, 1));
  var __expansions1 = destash33(expansions, ____r48);
  var ____id42 = ____r48;
  var __body31 = cut(____id42, 0);
  add(environment, {});
  map(function (__x175) {
    var ____id43 = __x175;
    var __name13 = ____id43[0];
    var __exp1 = ____id43[1];
    return macroexpand(["define-symbol", __name13, __exp1]);
  }, pair(__expansions1));
  var ____x174 = join(["do"], macroexpand(__body31));
  drop(environment);
  return ____x174;
}});
setenv("let-unique", {_stash: true, macro: function (names) {
  var ____r52 = unstash(Array.prototype.slice.call(arguments, 1));
  var __names3 = destash33(names, ____r52);
  var ____id45 = ____r52;
  var __body33 = cut(____id45, 0);
  var __bs3 = map(function (n) {
    return [n, ["unique", ["quote", n]]];
  }, __names3);
  return join(["let", apply(join, __bs3)], __body33);
}});
setenv("fn", {_stash: true, macro: function (args) {
  var ____r55 = unstash(Array.prototype.slice.call(arguments, 1));
  var __args7 = destash33(args, ____r55);
  var ____id47 = ____r55;
  var __body35 = cut(____id47, 0);
  return join(["%function"], bind42(__args7, __body35));
}});
setenv("apply", {_stash: true, macro: function (f) {
  var ____r57 = unstash(Array.prototype.slice.call(arguments, 1));
  var __f1 = destash33(f, ____r57);
  var ____id49 = ____r57;
  var __args9 = cut(____id49, 0);
  if (_35(__args9) > 1) {
    return ["%call", "apply", __f1, ["join", join(["list"], almost(__args9)), last(__args9)]];
  } else {
    return join(["%call", "apply", __f1], __args9);
  }
}});
setenv("guard", {_stash: true, macro: function (expr) {
  if (target === "js") {
    return [["fn", join(), ["%try", ["list", true, expr]]]];
  } else {
    var ____x229 = ["obj"];
    ____x229.stack = [["get", "debug", ["quote", "traceback"]]];
    ____x229.message = ["if", ["string?", "m"], ["clip", "m", ["+", ["search", "m", "\": \""], 2]], ["nil?", "m"], "\"\"", ["str", "m"]];
    return ["list", ["xpcall", ["fn", join(), expr], ["fn", ["m"], ["if", ["obj?", "m"], "m", ____x229]]]];
  }
}});
setenv("each", {_stash: true, macro: function (x, t) {
  var ____r61 = unstash(Array.prototype.slice.call(arguments, 2));
  var __x255 = destash33(x, ____r61);
  var __t1 = destash33(t, ____r61);
  var ____id52 = ____r61;
  var __body37 = cut(____id52, 0);
  var __o3 = unique("o");
  var __n3 = unique("n");
  var __i3 = unique("i");
  var __e9;
  if (atom63(__x255)) {
    __e9 = [__i3, __x255];
  } else {
    var __e10;
    if (_35(__x255) > 1) {
      __e10 = __x255;
    } else {
      __e10 = [__i3, hd(__x255)];
    }
    __e9 = __e10;
  }
  var ____id53 = __e9;
  var __k5 = ____id53[0];
  var __v7 = ____id53[1];
  var __e11;
  if (target === "lua") {
    __e11 = __body37;
  } else {
    __e11 = [join(["let", __k5, ["if", ["numeric?", __k5], ["parseInt", __k5], __k5]], __body37)];
  }
  return ["let", [__o3, __t1, __k5, "nil"], ["%for", __o3, __k5, ["let", [__v7, ["get", __o3, __k5]], join(["do"], __e11)]]];
}});
setenv("while", {_stash: true, macro: function (cond) {
  var ____r63 = unstash(Array.prototype.slice.call(arguments, 1));
  var __cond5 = destash33(cond, ____r63);
  var ____id55 = ____r63;
  var __body39 = cut(____id55, 0);
  return ["%while", __cond5, join(["do"], __body39)];
}});
setenv("for", {_stash: true, macro: function (i, to) {
  var ____r65 = unstash(Array.prototype.slice.call(arguments, 2));
  var __i5 = destash33(i, ____r65);
  var __to1 = destash33(to, ____r65);
  var ____id57 = ____r65;
  var __body41 = cut(____id57, 0);
  return ["let", __i5, 0, join(["while", ["<", __i5, __to1]], __body41, [["inc", __i5]])];
}});
setenv("step", {_stash: true, macro: function (v, t) {
  var ____r67 = unstash(Array.prototype.slice.call(arguments, 2));
  var __v9 = destash33(v, ____r67);
  var __t3 = destash33(t, ____r67);
  var ____id59 = ____r67;
  var __body43 = cut(____id59, 0);
  var __x292 = unique("x");
  var __i7 = unique("i");
  return ["let", [__x292, __t3], ["for", __i7, ["#", __x292], join(["let", [__v9, ["at", __x292, __i7]]], __body43)]];
}});
setenv("set-of", {_stash: true, macro: function () {
  var __xs1 = unstash(Array.prototype.slice.call(arguments, 0));
  var __l3 = [];
  var ____o5 = __xs1;
  var ____i9 = undefined;
  for (____i9 in ____o5) {
    var __x302 = ____o5[____i9];
    var __e12;
    if (numeric63(____i9)) {
      __e12 = parseInt(____i9);
    } else {
      __e12 = ____i9;
    }
    var ____i91 = __e12;
    __l3[__x302] = true;
  }
  return join(["obj"], __l3);
}});
setenv("language", {_stash: true, macro: function () {
  return ["quote", target];
}});
setenv("target", {_stash: true, macro: function () {
  var __clauses3 = unstash(Array.prototype.slice.call(arguments, 0));
  return __clauses3[target];
}});
setenv("join!", {_stash: true, macro: function (a) {
  var ____r71 = unstash(Array.prototype.slice.call(arguments, 1));
  var __a3 = destash33(a, ____r71);
  var ____id61 = ____r71;
  var __bs5 = cut(____id61, 0);
  return ["set", __a3, join(["join", __a3], __bs5)];
}});
setenv("cat!", {_stash: true, macro: function (a) {
  var ____r73 = unstash(Array.prototype.slice.call(arguments, 1));
  var __a5 = destash33(a, ____r73);
  var ____id63 = ____r73;
  var __bs7 = cut(____id63, 0);
  return ["set", __a5, join(["cat", __a5], __bs7)];
}});
setenv("inc", {_stash: true, macro: function (n, by) {
  var __e13;
  if (nil63(by)) {
    __e13 = 1;
  } else {
    __e13 = by;
  }
  return ["set", n, ["+", n, __e13]];
}});
setenv("dec", {_stash: true, macro: function (n, by) {
  var __e14;
  if (nil63(by)) {
    __e14 = 1;
  } else {
    __e14 = by;
  }
  return ["set", n, ["-", n, __e14]];
}});
setenv("with-indent", {_stash: true, macro: function (form) {
  var __x327 = unique("x");
  return ["do", ["inc", "indent-level"], ["with", __x327, form, ["dec", "indent-level"]]];
}});
setenv("export", {_stash: true, macro: function () {
  var __names5 = unstash(Array.prototype.slice.call(arguments, 0));
  if (target === "js") {
    return join(["do"], map(function (k) {
      return ["set", ["get", "exports", ["quote", k]], k];
    }, __names5));
  } else {
    var __x343 = {};
    var ____o7 = __names5;
    var ____i11 = undefined;
    for (____i11 in ____o7) {
      var __k7 = ____o7[____i11];
      var __e15;
      if (numeric63(____i11)) {
        __e15 = parseInt(____i11);
      } else {
        __e15 = ____i11;
      }
      var ____i111 = __e15;
      __x343[__k7] = __k7;
    }
    return ["return", join(["%object"], mapo(function (x) {
      return x;
    }, __x343))];
  }
}});
setenv("when-compiling", {_stash: true, macro: function () {
  var __body45 = unstash(Array.prototype.slice.call(arguments, 0));
  return _eval(join(["do"], __body45));
}});
var reader = require("reader");
var compiler = require("compiler");
var system = require("system");
var eval_print = function (form) {
  var ____id = (function () {
    try {
      return [true, compiler["eval"](form)];
    }
    catch (__e) {
      return [false, __e];
    }
  })();
  var __ok = ____id[0];
  var __v = ____id[1];
  if (! __ok) {
    return print(__v.stack);
  } else {
    if (is63(__v)) {
      return print(str(__v));
    }
  }
};
var rep = function (s) {
  return eval_print(reader["read-string"](s));
};
var repl = function () {
  var buf = "";
  var rep1 = function (s) {
    buf = buf + s;
    var more = [];
    var buf1 = "(do " + buf + ")";
    var form = reader["read-string"](buf1, more);
    if (!( form === more)) {
      eval_print(form);
      buf = "";
      return system.write("> ");
    }
  };
  system.write("> ");
  var _in = process.stdin;
  _in.setEncoding("utf8");
  return _in.on("data", rep1);
};
compile_file = function (path) {
  var s = reader.stream(system["read-file"](path));
  var body = reader["read-all"](s);
  var form = compiler.expand(join(["do"], body));
  return compiler.compile(form, {_stash: true, stmt: true});
};
_load = function (path) {
  var previous = target;
  var target = "js";
  var code = compile_file(path);
  target = previous;
  return compiler.run(code);
};
var script_file63 = function (path) {
  return !( "-" === char(path, 0) || ".js" === clip(path, _35(path) - 3) || ".lua" === clip(path, _35(path) - 4));
};
var run_file = function (path) {
  if (script_file63(path)) {
    return _load(path);
  } else {
    return compiler.run(system["read-file"](path));
  }
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
  return print(" -e <expr>\tExpression to evaluate");
};
var main = function () {
  var arg = hd(system.argv);
  if (arg && script_file63(arg)) {
    return _load(arg);
  }
  if (arg === "-h" || arg === "--help") {
    return usage();
  }
  var pre = [];
  var input = undefined;
  var output = undefined;
  var target1 = undefined;
  var expr = undefined;
  var argv = system.argv;
  var __i = 0;
  while (__i < _35(argv)) {
    var a = argv[__i];
    var arg63 = a === "-c" || a === "-o" || a === "-t" || a === "-e";
    if (arg63) {
      if (__i === edge(argv)) {
        print("missing argument for " + a);
        break;
      }
      __i = __i + 1;
      var val = argv[__i];
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
    if (! arg63) {
      if (char(a, 0) !== "-") {
        add(pre, a);
      }
    }
    __i = __i + 1;
  }
  var ____x2 = pre;
  var ____i1 = 0;
  while (____i1 < _35(____x2)) {
    var __file = ____x2[____i1];
    run_file(__file);
    ____i1 = ____i1 + 1;
  }
  if (nil63(input)) {
    if (expr) {
      rep(expr);
    } else {
      repl();
    }
    return;
  }
  if (target1) {
    target = target1;
  }
  var code = compile_file(input);
  if (nil63(output) || output === "-") {
    return print(code);
  } else {
    return system["write-file"](output, code);
  }
};
main();
