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
array63 = function (x) {
  return Array.isArray(x);
};
array = function (x) {
  if (array63(x)) {
    return x;
  } else {
    var __l = [];
    var ____o = x;
    var __k = undefined;
    for (__k in ____o) {
      var __v = ____o[__k];
      var __e;
      if (numeric63(__k)) {
        __e = parseInt(__k);
      } else {
        __e = __k;
      }
      var __k1 = __e;
      if (number63(__k1)) {
        __l[__k1] = __v;
      }
    }
    return __l;
  }
};
object = function (x) {
  if (array63(x)) {
    var __l1 = {};
    var ____o1 = x;
    var __k2 = undefined;
    for (__k2 in ____o1) {
      var __v1 = ____o1[__k2];
      var __e1;
      if (numeric63(__k2)) {
        __e1 = parseInt(__k2);
      } else {
        __e1 = __k2;
      }
      var __k3 = __e1;
      __l1[__k3] = __v1;
    }
    return __l1;
  } else {
    return x;
  }
};
length = function (x) {
  var __n2 = -1;
  var ____o2 = x;
  var __k4 = undefined;
  for (__k4 in ____o2) {
    var __v2 = ____o2[__k4];
    var __e2;
    if (numeric63(__k4)) {
      __e2 = parseInt(__k4);
    } else {
      __e2 = __k4;
    }
    var __k5 = __e2;
    if (number63(__k5)) {
      if (__k5 > __n2) {
        __n2 = __k5;
      }
    }
  }
  __n2 = __n2 + 1;
  return __n2;
};
_35 = function (x) {
  if (string63(x) || array63(x)) {
    return x.length;
  } else {
    return length(x);
  }
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
  return !( n === n);
};
inf63 = function (n) {
  return n === inf || n === _inf;
};
clip = function (s, _from, upto) {
  return s.substring(_from, upto);
};
dupe = function (x) {
  if (array63(x)) {
    return [];
  } else {
    return {};
  }
};
cut = function (x, _from, upto) {
  var __l2 = dupe(x);
  var __j = 0;
  var __e3;
  if (nil63(_from) || _from < 0) {
    __e3 = 0;
  } else {
    __e3 = _from;
  }
  var __i3 = __e3;
  var __n4 = _35(x);
  var __e4;
  if (nil63(upto) || upto > __n4) {
    __e4 = __n4;
  } else {
    __e4 = upto;
  }
  var __upto = __e4;
  while (__i3 < __upto) {
    __l2[__j] = x[__i3];
    __i3 = __i3 + 1;
    __j = __j + 1;
  }
  var ____o3 = x;
  var __k6 = undefined;
  for (__k6 in ____o3) {
    var __v3 = ____o3[__k6];
    var __e5;
    if (numeric63(__k6)) {
      __e5 = parseInt(__k6);
    } else {
      __e5 = __k6;
    }
    var __k7 = __e5;
    if (! number63(__k7)) {
      __l2[__k7] = __v3;
    }
  }
  return __l2;
};
keys = function (x) {
  var __t = dupe(x);
  var ____o4 = x;
  var __k8 = undefined;
  for (__k8 in ____o4) {
    var __v4 = ____o4[__k8];
    var __e6;
    if (numeric63(__k8)) {
      __e6 = parseInt(__k8);
    } else {
      __e6 = __k8;
    }
    var __k9 = __e6;
    if (! number63(__k9)) {
      __t[__k9] = __v4;
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
  if (array63(l)) {
    l.push(x);
  } else {
    l[_35(l)] = x;
  }
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
  var __l11 = keys(l);
  var __i6 = edge(l);
  while (__i6 >= 0) {
    add(__l11, l[__i6]);
    __i6 = __i6 - 1;
  }
  return __l11;
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
  var __r42 = [];
  var ____x1 = __ls;
  var ____i7 = 0;
  while (____i7 < _35(____x1)) {
    var __l3 = ____x1[____i7];
    if (__l3) {
      var __n7 = _35(__r42);
      var ____o5 = __l3;
      var __k10 = undefined;
      for (__k10 in ____o5) {
        var __v5 = ____o5[__k10];
        var __e7;
        if (numeric63(__k10)) {
          __e7 = parseInt(__k10);
        } else {
          __e7 = __k10;
        }
        var __k11 = __e7;
        if (number63(__k11)) {
          __k11 = __k11 + __n7;
        } else {
          __l3 = object(__l3);
        }
        __r42[__k11] = __v5;
      }
    }
    ____i7 = ____i7 + 1;
  }
  return __r42;
};
find = function (f, t) {
  var ____o6 = t;
  var ____i9 = undefined;
  for (____i9 in ____o6) {
    var __x2 = ____o6[____i9];
    var __e8;
    if (numeric63(____i9)) {
      __e8 = parseInt(____i9);
    } else {
      __e8 = ____i9;
    }
    var ____i91 = __e8;
    var __y = f(__x2);
    if (__y) {
      return __y;
    }
  }
};
first = function (f, l) {
  var ____x3 = l;
  var ____i10 = 0;
  while (____i10 < _35(____x3)) {
    var __x4 = ____x3[____i10];
    var __y1 = f(__x4);
    if (__y1) {
      return __y1;
    }
    ____i10 = ____i10 + 1;
  }
};
in63 = function (x, t) {
  return find(function (y) {
    return x === y;
  }, t);
};
pair = function (l) {
  var __l12 = dupe(l);
  var __i11 = 0;
  while (__i11 < _35(l)) {
    add(__l12, [l[__i11], l[__i11 + 1]]);
    __i11 = __i11 + 1;
    __i11 = __i11 + 1;
  }
  return __l12;
};
sort = function (l, f) {
  var __e9;
  if (f) {
    __e9 = function (a, b) {
      if (f(a, b)) {
        return -1;
      } else {
        return 1;
      }
    };
  }
  return l.sort(__e9);
};
map = function (f, x) {
  var __t1 = dupe(x);
  var ____x6 = x;
  var ____i12 = 0;
  while (____i12 < _35(____x6)) {
    var __v6 = ____x6[____i12];
    var __y2 = f(__v6);
    if (is63(__y2)) {
      add(__t1, __y2);
    }
    ____i12 = ____i12 + 1;
  }
  var ____o7 = x;
  var __k12 = undefined;
  for (__k12 in ____o7) {
    var __v7 = ____o7[__k12];
    var __e10;
    if (numeric63(__k12)) {
      __e10 = parseInt(__k12);
    } else {
      __e10 = __k12;
    }
    var __k13 = __e10;
    if (! number63(__k13)) {
      var __y3 = f(__v7);
      if (is63(__y3)) {
        __t1[__k13] = __y3;
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
  var ____o8 = t;
  var __k14 = undefined;
  for (__k14 in ____o8) {
    var __v8 = ____o8[__k14];
    var __e11;
    if (numeric63(__k14)) {
      __e11 = parseInt(__k14);
    } else {
      __e11 = __k14;
    }
    var __k15 = __e11;
    if (! number63(__k15)) {
      return true;
    }
  }
  return false;
};
empty63 = function (t) {
  var ____o9 = t;
  var ____i15 = undefined;
  for (____i15 in ____o9) {
    var __x7 = ____o9[____i15];
    var __e12;
    if (numeric63(____i15)) {
      __e12 = parseInt(____i15);
    } else {
      __e12 = ____i15;
    }
    var ____i151 = __e12;
    return false;
  }
  return true;
};
stash = function (args) {
  if (keys63(args)) {
    var __p = {};
    var ____o10 = args;
    var __k16 = undefined;
    for (__k16 in ____o10) {
      var __v9 = ____o10[__k16];
      var __e13;
      if (numeric63(__k16)) {
        __e13 = parseInt(__k16);
      } else {
        __e13 = __k16;
      }
      var __k17 = __e13;
      if (! number63(__k17)) {
        __p[__k17] = __v9;
      }
    }
    __p._stash = true;
    add(args, __p);
  }
  if (array63(args)) {
    return args;
  } else {
    return array(args);
  }
};
unstash = function (args) {
  if (none63(args)) {
    return {};
  } else {
    var __l4 = last(args);
    if (obj63(__l4) && __l4._stash) {
      var __args1 = object(almost(args));
      var ____o11 = __l4;
      var __k18 = undefined;
      for (__k18 in ____o11) {
        var __v10 = ____o11[__k18];
        var __e14;
        if (numeric63(__k18)) {
          __e14 = parseInt(__k18);
        } else {
          __e14 = __k18;
        }
        var __k19 = __e14;
        if (!( __k19 === "_stash")) {
          __args1[__k19] = __v10;
        }
      }
      return __args1;
    } else {
      return args;
    }
  }
};
destash33 = function (l, args1) {
  if (obj63(l) && l._stash) {
    var ____o12 = l;
    var __k20 = undefined;
    for (__k20 in ____o12) {
      var __v11 = ____o12[__k20];
      var __e15;
      if (numeric63(__k20)) {
        __e15 = parseInt(__k20);
      } else {
        __e15 = __k20;
      }
      var __k21 = __e15;
      if (!( __k21 === "_stash")) {
        args1[__k21] = __v11;
      }
    }
  } else {
    return l;
  }
};
search = function (s, pattern, start) {
  var __i19 = s.indexOf(pattern, start);
  if (__i19 >= 0) {
    return __i19;
  }
};
split = function (s, sep) {
  if (s === "" || sep === "") {
    return [];
  } else {
    var __l5 = [];
    var __n16 = _35(sep);
    while (true) {
      var __i20 = search(s, sep);
      if (nil63(__i20)) {
        break;
      } else {
        add(__l5, clip(s, 0, __i20));
        s = clip(s, __i20 + __n16);
      }
    }
    add(__l5, s);
    return __l5;
  }
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
  var __i21 = 0;
  while (__i21 < edge(xs)) {
    var __a = xs[__i21];
    var __b = xs[__i21 + 1];
    if (! f(__a, __b)) {
      return false;
    }
    __i21 = __i21 + 1;
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
_61 = function () {
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
  var __n17 = parseFloat(s);
  if (! isNaN(__n17)) {
    return __n17;
  }
};
number_code63 = function (n) {
  return n > 47 && n < 58;
};
numeric63 = function (s) {
  var __n18 = _35(s);
  var __i22 = 0;
  while (__i22 < __n18) {
    if (! number_code63(code(s, __i22))) {
      return false;
    }
    __i22 = __i22 + 1;
  }
  return some63(s);
};
var tostring = function (x) {
  return x.toString();
};
escape = function (s) {
  var __s1 = "\"";
  var __i23 = 0;
  while (__i23 < _35(s)) {
    var __c = char(s, __i23);
    var __e16;
    if (__c === "\n") {
      __e16 = "\\n";
    } else {
      var __e17;
      if (__c === "\r") {
        __e17 = "\\r";
      } else {
        var __e18;
        if (__c === "\"") {
          __e18 = "\\\"";
        } else {
          var __e19;
          if (__c === "\\") {
            __e19 = "\\\\";
          } else {
            __e19 = __c;
          }
          __e18 = __e19;
        }
        __e17 = __e18;
      }
      __e16 = __e17;
    }
    var __c1 = __e16;
    __s1 = __s1 + __c1;
    __i23 = __i23 + 1;
  }
  return __s1 + "\"";
};
_str = function (x, stack) {
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
                      var __s = "(";
                      var __sp = "";
                      var __xs11 = [];
                      var __ks = [];
                      var __l6 = stack || [];
                      add(__l6, x);
                      var ____o13 = x;
                      var __k22 = undefined;
                      for (__k22 in ____o13) {
                        var __v12 = ____o13[__k22];
                        var __e20;
                        if (numeric63(__k22)) {
                          __e20 = parseInt(__k22);
                        } else {
                          __e20 = __k22;
                        }
                        var __k23 = __e20;
                        if (number63(__k23)) {
                          __xs11[__k23] = _str(__v12, __l6);
                        } else {
                          add(__ks, __k23 + ":");
                          add(__ks, _str(__v12, __l6));
                        }
                      }
                      drop(__l6);
                      var ____o14 = join(__xs11, __ks);
                      var ____i25 = undefined;
                      for (____i25 in ____o14) {
                        var __v13 = ____o14[____i25];
                        var __e21;
                        if (numeric63(____i25)) {
                          __e21 = parseInt(____i25);
                        } else {
                          __e21 = ____i25;
                        }
                        var ____i251 = __e21;
                        __s = __s + __sp + __v13;
                        __sp = " ";
                      }
                      return __s + ")";
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
  var __args = stash(args);
  return f.apply(f, __args);
};
call = function (f) {
  var ____r79 = unstash(Array.prototype.slice.call(arguments, 1));
  var __f = destash33(f, ____r79);
  var ____id = ____r79;
  var __args11 = cut(____id, 0);
  return apply(__f, __args11);
};
setenv = function (k) {
  var ____r80 = unstash(Array.prototype.slice.call(arguments, 1));
  var __k24 = destash33(k, ____r80);
  var ____id1 = ____r80;
  var __keys = cut(____id1, 0);
  if (string63(__k24)) {
    var __e22;
    if (__keys.toplevel) {
      __e22 = hd(environment);
    } else {
      __e22 = last(environment);
    }
    var __frame = __e22;
    var __entry = __frame[__k24] || {};
    var ____o15 = __keys;
    var __k25 = undefined;
    for (__k25 in ____o15) {
      var __v14 = ____o15[__k25];
      var __e23;
      if (numeric63(__k25)) {
        __e23 = parseInt(__k25);
      } else {
        __e23 = __k25;
      }
      var __k26 = __e23;
      __entry[__k26] = __v14;
    }
    __frame[__k24] = __entry;
    return __frame[__k24];
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
  var __x23 = unique("x");
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
      add(__forms1, ["set", ["get", __x23, ["quote", __k3]], __v1]);
    }
  }
  if (some63(__forms1)) {
    return join(["let", __x23, ["object", join(["%array"], __l1)]], __forms1, [__x23]);
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
  var __x43 = unique("x");
  var __eq1 = function (_) {
    return ["=", ["quote", _], __x43];
  };
  var __cl1 = function (__x46) {
    var ____id5 = __x46;
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
  return ["let", __x43, __expr1, join(["if"], apply(join, map(__cl1, pair(__clauses1))))];
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
  var __x86 = destash33(x, ____r25);
  var __v3 = destash33(v, ____r25);
  var ____id19 = ____r25;
  var __body11 = cut(____id19, 0);
  return join(["let", [__x86, __v3]], __body11, [__x86]);
}});
setenv("let-when", {_stash: true, macro: function (x, v) {
  var ____r27 = unstash(Array.prototype.slice.call(arguments, 2));
  var __x96 = destash33(x, ____r27);
  var __v5 = destash33(v, ____r27);
  var ____id21 = ____r27;
  var __body13 = cut(____id21, 0);
  var __y1 = unique("y");
  return ["let", __y1, __v5, ["when", ["yes", __y1], join(["let", [__x96, __y1]], __body13)]];
}});
setenv("define-macro", {_stash: true, macro: function (name, args) {
  var ____r29 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name1 = destash33(name, ____r29);
  var __args3 = destash33(args, ____r29);
  var ____id23 = ____r29;
  var __body15 = cut(____id23, 0);
  var ____x105 = object(["setenv", ["quote", __name1]]);
  ____x105.macro = join(["fn", __args3], __body15);
  var __form1 = ____x105;
  _eval(__form1);
  return __form1;
}});
setenv("define-special", {_stash: true, macro: function (name, args) {
  var ____r31 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name3 = destash33(name, ____r31);
  var __args5 = destash33(args, ____r31);
  var ____id25 = ____r31;
  var __body17 = cut(____id25, 0);
  var ____x111 = object(["setenv", ["quote", __name3]]);
  ____x111.special = join(["fn", __args5], __body17);
  var __form3 = join(____x111, keys(__body17));
  _eval(__form3);
  return __form3;
}});
setenv("define-symbol", {_stash: true, macro: function (name, expansion) {
  setenv(name, {_stash: true, symbol: expansion});
  var ____x117 = object(["setenv", ["quote", name]]);
  ____x117.symbol = ["quote", expansion];
  return ____x117;
}});
setenv("define-reader", {_stash: true, macro: function (__x125) {
  var ____id28 = __x125;
  var __char1 = ____id28[0];
  var __s1 = ____id28[1];
  var ____r35 = unstash(Array.prototype.slice.call(arguments, 1));
  var ____x125 = destash33(__x125, ____r35);
  var ____id29 = ____r35;
  var __body19 = cut(____id29, 0);
  return ["set", ["get", "read-table", __char1], join(["fn", [__s1]], __body19)];
}});
setenv("define", {_stash: true, macro: function (name, x) {
  var ____r37 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name5 = destash33(name, ____r37);
  var __x133 = destash33(x, ____r37);
  var ____id31 = ____r37;
  var __body21 = cut(____id31, 0);
  setenv(__name5, {_stash: true, variable: true});
  if (some63(__body21)) {
    return join(["%local-function", __name5], bind42(__x133, __body21));
  } else {
    return ["%local", __name5, __x133];
  }
}});
setenv("define-global", {_stash: true, macro: function (name, x) {
  var ____r39 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name7 = destash33(name, ____r39);
  var __x139 = destash33(x, ____r39);
  var ____id33 = ____r39;
  var __body23 = cut(____id33, 0);
  setenv(__name7, {_stash: true, toplevel: true, variable: true});
  if (some63(__body23)) {
    return join(["%global-function", __name7], bind42(__x139, __body23));
  } else {
    return ["set", __name7, __x139];
  }
}});
setenv("with-frame", {_stash: true, macro: function () {
  var __body25 = unstash(Array.prototype.slice.call(arguments, 0));
  var __x149 = unique("x");
  return ["do", ["add", "environment", ["obj"]], ["with", __x149, join(["do"], __body25), ["drop", "environment"]]];
}});
setenv("with-bindings", {_stash: true, macro: function (__x161) {
  var ____id36 = __x161;
  var __names1 = ____id36[0];
  var ____r41 = unstash(Array.prototype.slice.call(arguments, 1));
  var ____x161 = destash33(__x161, ____r41);
  var ____id37 = ____r41;
  var __body27 = cut(____id37, 0);
  var __x162 = unique("x");
  var ____x165 = object(["setenv", __x162]);
  ____x165.variable = true;
  return join(["with-frame", ["each", __x162, __names1, ____x165]], __body27);
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
  var ____x169 = join(["do"], macroexpand(__body29));
  drop(environment);
  return ____x169;
}});
setenv("let-symbol", {_stash: true, macro: function (expansions) {
  var ____r48 = unstash(Array.prototype.slice.call(arguments, 1));
  var __expansions1 = destash33(expansions, ____r48);
  var ____id42 = ____r48;
  var __body31 = cut(____id42, 0);
  add(environment, {});
  map(function (__x177) {
    var ____id43 = __x177;
    var __name9 = ____id43[0];
    var __exp1 = ____id43[1];
    return macroexpand(["define-symbol", __name9, __exp1]);
  }, pair(__expansions1));
  var ____x176 = join(["do"], macroexpand(__body31));
  drop(environment);
  return ____x176;
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
    return [["do", "apply"], __f1, ["join", join(["list"], almost(__args9)), last(__args9)]];
  } else {
    return join([["do", "apply"], __f1], __args9);
  }
}});
setenv("guard", {_stash: true, macro: function (expr) {
  if (target === "js") {
    return [["fn", join(), ["%try", ["list", true, expr]]]];
  } else {
    var ____x235 = object(["obj"]);
    ____x235.stack = [["get", "debug", ["quote", "traceback"]]];
    ____x235.message = ["if", ["string?", "m"], ["clip", "m", ["+", ["search", "m", "\": \""], 2]], ["nil?", "m"], "\"\"", ["str", "m"]];
    return ["list", ["xpcall", ["fn", join(), expr], ["fn", ["m"], ["if", ["obj?", "m"], "m", ____x235]]]];
  }
}});
setenv("each", {_stash: true, macro: function (x, t) {
  var ____r61 = unstash(Array.prototype.slice.call(arguments, 2));
  var __x260 = destash33(x, ____r61);
  var __t1 = destash33(t, ____r61);
  var ____id52 = ____r61;
  var __body37 = cut(____id52, 0);
  var __o3 = unique("o");
  var __n3 = unique("n");
  var __i3 = unique("i");
  var __e9;
  if (atom63(__x260)) {
    __e9 = [__i3, __x260];
  } else {
    var __e10;
    if (_35(__x260) > 1) {
      __e10 = __x260;
    } else {
      __e10 = [__i3, hd(__x260)];
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
  return ["let", [__o3, __t1, __k5, "nil"], ["%for", __o3, __k5, join(["let", [__v7, ["get", __o3, __k5]]], __e11)]];
}});
setenv("for", {_stash: true, macro: function (i, to) {
  var ____r63 = unstash(Array.prototype.slice.call(arguments, 2));
  var __i5 = destash33(i, ____r63);
  var __to1 = destash33(to, ____r63);
  var ____id55 = ____r63;
  var __body39 = cut(____id55, 0);
  return ["let", __i5, 0, join(["while", ["<", __i5, __to1]], __body39, [["inc", __i5]])];
}});
setenv("step", {_stash: true, macro: function (v, t) {
  var ____r65 = unstash(Array.prototype.slice.call(arguments, 2));
  var __v9 = destash33(v, ____r65);
  var __t3 = destash33(t, ____r65);
  var ____id57 = ____r65;
  var __body41 = cut(____id57, 0);
  var __x292 = unique("x");
  var __i7 = unique("i");
  return ["let", [__x292, __t3], ["for", __i7, ["#", __x292], join(["let", [__v9, ["at", __x292, __i7]]], __body41)]];
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
  if (has63(__clauses3, target)) {
    return __clauses3[target];
  } else {
    return hd(__clauses3);
  }
}});
setenv("join!", {_stash: true, macro: function (a) {
  var ____r69 = unstash(Array.prototype.slice.call(arguments, 1));
  var __a3 = destash33(a, ____r69);
  var ____id59 = ____r69;
  var __bs5 = cut(____id59, 0);
  return ["set", __a3, join(["join", __a3], __bs5)];
}});
setenv("cat!", {_stash: true, macro: function (a) {
  var ____r71 = unstash(Array.prototype.slice.call(arguments, 1));
  var __a5 = destash33(a, ____r71);
  var ____id61 = ____r71;
  var __bs7 = cut(____id61, 0);
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
    if (target === "lua") {
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
  }
}});
setenv("when-compiling", {_stash: true, macro: function () {
  var __body43 = unstash(Array.prototype.slice.call(arguments, 0));
  return _eval(join(["do"], __body43));
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
      return print(_str(__v));
    }
  }
};
var rep = function (s) {
  return eval_print(reader["read-string"](s));
};
var repl = function () {
  var __buf = "";
  var rep1 = function (s) {
    __buf = __buf + s;
    var __more = [];
    var __form = reader["read-string"](__buf, __more);
    if (!( __form === __more)) {
      eval_print(__form);
      __buf = "";
      return system.write("> ");
    }
  };
  system.write("> ");
  var ___in = process.stdin;
  ___in.setEncoding("utf8");
  return ___in.on("data", rep1);
};
compile_file = function (path) {
  var __s = reader.stream(system["read-file"](path));
  var __body = reader["read-all"](__s);
  var __form1 = compiler.expand(join(["do"], __body));
  return compiler.compile(__form1, {_stash: true, stmt: true});
};
_load = function (path) {
  var __previous = target;
  target = "js";
  var __code = compile_file(path);
  target = __previous;
  return compiler.run(__code);
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
  var __arg = hd(system.argv);
  if (__arg && script_file63(__arg)) {
    return _load(__arg);
  } else {
    if (__arg === "-h" || __arg === "--help") {
      return usage();
    } else {
      var __pre = [];
      var __input = undefined;
      var __output = undefined;
      var __target1 = undefined;
      var __expr = undefined;
      var __argv = system.argv;
      var __i = 0;
      while (__i < _35(__argv)) {
        var __a = __argv[__i];
        if (__a === "-c" || __a === "-o" || __a === "-t" || __a === "-e") {
          if (__i === edge(__argv)) {
            print("missing argument for " + __a);
          } else {
            __i = __i + 1;
            var __val = __argv[__i];
            if (__a === "-c") {
              __input = __val;
            } else {
              if (__a === "-o") {
                __output = __val;
              } else {
                if (__a === "-t") {
                  __target1 = __val;
                } else {
                  if (__a === "-e") {
                    __expr = __val;
                  }
                }
              }
            }
          }
        } else {
          if (!( "-" === char(__a, 0))) {
            add(__pre, __a);
          }
        }
        __i = __i + 1;
      }
      var ____x2 = __pre;
      var ____i1 = 0;
      while (____i1 < _35(____x2)) {
        var __file = ____x2[____i1];
        run_file(__file);
        ____i1 = ____i1 + 1;
      }
      if (nil63(__input)) {
        if (__expr) {
          return rep(__expr);
        } else {
          return repl();
        }
      } else {
        if (__target1) {
          target = __target1;
        }
        var __code1 = compile_file(__input);
        if (nil63(__output) || __output === "-") {
          return print(__code1);
        } else {
          return system["write-file"](__output, __code1);
        }
      }
    }
  }
};
main();
