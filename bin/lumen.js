var __e;
if (!( typeof("global") === "undefined")) {
  __e = global;
} else {
  __e = window;
}
_G = __e;
_G._G = _G;
environment = [{}];
_G.environment = environment;
target = "js";
_G.target = target;
nil63 = function (x) {
  return x === undefined || x === null;
};
_G.nil63 = nil63;
is63 = function (x) {
  return ! nil63(x);
};
_G.is63 = is63;
no = function (x) {
  return nil63(x) || x === false;
};
_G.no = no;
yes = function (x) {
  return ! no(x);
};
_G.yes = yes;
either = function (x, y) {
  if (is63(x)) {
    return x;
  } else {
    return y;
  }
};
_G.either = either;
has63 = function (l, k) {
  return l.hasOwnProperty(k);
};
_G.has63 = has63;
_35 = function (x) {
  return x.length || 0;
};
_G._35 = _35;
none63 = function (x) {
  return _35(x) === 0;
};
_G.none63 = none63;
some63 = function (x) {
  return _35(x) > 0;
};
_G.some63 = some63;
one63 = function (x) {
  return _35(x) === 1;
};
_G.one63 = one63;
two63 = function (x) {
  return _35(x) === 2;
};
_G.two63 = two63;
hd = function (l) {
  return l[0];
};
_G.hd = hd;
type = function (x) {
  return typeof(x);
};
_G.type = type;
string63 = function (x) {
  return type(x) === "string";
};
_G.string63 = string63;
number63 = function (x) {
  return type(x) === "number";
};
_G.number63 = number63;
boolean63 = function (x) {
  return type(x) === "boolean";
};
_G.boolean63 = boolean63;
function63 = function (x) {
  return type(x) === "function";
};
_G.function63 = function63;
obj63 = function (x) {
  return is63(x) && type(x) === "object";
};
_G.obj63 = obj63;
atom63 = function (x) {
  return nil63(x) || string63(x) || number63(x) || boolean63(x);
};
_G.atom63 = atom63;
nan = 0 / 0;
_G.nan = nan;
inf = 1 / 0;
_G.inf = inf;
_inf = - inf;
_G._inf = _inf;
nan63 = function (n) {
  return !( n === n);
};
_G.nan63 = nan63;
inf63 = function (n) {
  return n === inf || n === _inf;
};
_G.inf63 = inf63;
clip = function (s, from, upto) {
  return s.substring(from, upto);
};
_G.clip = clip;
cut = function (x, from, upto) {
  var __l = [];
  var __j = 0;
  var __e1;
  if (nil63(from) || from < 0) {
    __e1 = 0;
  } else {
    __e1 = from;
  }
  var __i = __e1;
  var __n = _35(x);
  var __e2;
  if (nil63(upto) || upto > __n) {
    __e2 = __n;
  } else {
    __e2 = upto;
  }
  var __upto = __e2;
  while (__i < __upto) {
    __l[__j] = x[__i];
    __i = __i + 1;
    __j = __j + 1;
  }
  var ____o = x;
  var __k = undefined;
  for (__k in ____o) {
    var __v = ____o[__k];
    var __e3;
    if (numeric63(__k)) {
      __e3 = parseInt(__k);
    } else {
      __e3 = __k;
    }
    var __k1 = __e3;
    if (! number63(__k1)) {
      __l[__k1] = __v;
    }
  }
  return __l;
};
_G.cut = cut;
keys = function (x) {
  var __t = [];
  var ____o1 = x;
  var __k2 = undefined;
  for (__k2 in ____o1) {
    var __v1 = ____o1[__k2];
    var __e4;
    if (numeric63(__k2)) {
      __e4 = parseInt(__k2);
    } else {
      __e4 = __k2;
    }
    var __k3 = __e4;
    if (! number63(__k3)) {
      __t[__k3] = __v1;
    }
  }
  return __t;
};
_G.keys = keys;
edge = function (x) {
  return _35(x) - 1;
};
_G.edge = edge;
inner = function (x) {
  return clip(x, 1, edge(x));
};
_G.inner = inner;
tl = function (l) {
  return cut(l, 1);
};
_G.tl = tl;
char = function (s, n) {
  return s.charAt(n);
};
_G.char = char;
code = function (s, n) {
  return s.charCodeAt(n);
};
_G.code = code;
string_literal63 = function (x) {
  return string63(x) && char(x, 0) === "\"";
};
_G.string_literal63 = string_literal63;
id_literal63 = function (x) {
  return string63(x) && char(x, 0) === "|";
};
_G.id_literal63 = id_literal63;
add = function (l, x) {
  l.push(x);
  return undefined;
};
_G.add = add;
drop = function (l) {
  return l.pop();
};
_G.drop = drop;
last = function (l) {
  return l[edge(l)];
};
_G.last = last;
almost = function (l) {
  return cut(l, 0, edge(l));
};
_G.almost = almost;
reverse = function (l) {
  var __l1 = keys(l);
  var __i3 = edge(l);
  while (__i3 >= 0) {
    add(__l1, l[__i3]);
    __i3 = __i3 - 1;
  }
  return __l1;
};
_G.reverse = reverse;
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
_G.reduce = reduce;
join = function () {
  var __ls = unstash(Array.prototype.slice.call(arguments, 0));
  var __r37 = [];
  var ____x1 = __ls;
  var ____i4 = 0;
  while (____i4 < _35(____x1)) {
    var __l11 = ____x1[____i4];
    if (__l11) {
      var __n3 = _35(__r37);
      var ____o2 = __l11;
      var __k4 = undefined;
      for (__k4 in ____o2) {
        var __v2 = ____o2[__k4];
        var __e5;
        if (numeric63(__k4)) {
          __e5 = parseInt(__k4);
        } else {
          __e5 = __k4;
        }
        var __k5 = __e5;
        if (number63(__k5)) {
          __k5 = __k5 + __n3;
        }
        __r37[__k5] = __v2;
      }
    }
    ____i4 = ____i4 + 1;
  }
  return __r37;
};
_G.join = join;
find = function (f, t) {
  var ____o3 = t;
  var ____i6 = undefined;
  for (____i6 in ____o3) {
    var __x2 = ____o3[____i6];
    var __e6;
    if (numeric63(____i6)) {
      __e6 = parseInt(____i6);
    } else {
      __e6 = ____i6;
    }
    var ____i61 = __e6;
    var __y = f(__x2);
    if (__y) {
      return __y;
    }
  }
};
_G.find = find;
first = function (f, l) {
  var ____x3 = l;
  var ____i7 = 0;
  while (____i7 < _35(____x3)) {
    var __x4 = ____x3[____i7];
    var __y1 = f(__x4);
    if (__y1) {
      return __y1;
    }
    ____i7 = ____i7 + 1;
  }
};
_G.first = first;
in63 = function (x, t) {
  return find(function (y) {
    return x === y;
  }, t);
};
_G.in63 = in63;
pair = function (l) {
  var __l12 = [];
  var __i8 = 0;
  while (__i8 < _35(l)) {
    add(__l12, [l[__i8], l[__i8 + 1]]);
    __i8 = __i8 + 1;
    __i8 = __i8 + 1;
  }
  return __l12;
};
_G.pair = pair;
sort = function (l, f) {
  var __e7;
  if (f) {
    __e7 = function (a, b) {
      if (f(a, b)) {
        return -1;
      } else {
        return 1;
      }
    };
  }
  return l.sort(__e7);
};
_G.sort = sort;
map = function (f, x) {
  var __t1 = [];
  var ____x6 = x;
  var ____i9 = 0;
  while (____i9 < _35(____x6)) {
    var __v3 = ____x6[____i9];
    var __y2 = f(__v3);
    if (is63(__y2)) {
      add(__t1, __y2);
    }
    ____i9 = ____i9 + 1;
  }
  var ____o4 = x;
  var __k6 = undefined;
  for (__k6 in ____o4) {
    var __v4 = ____o4[__k6];
    var __e8;
    if (numeric63(__k6)) {
      __e8 = parseInt(__k6);
    } else {
      __e8 = __k6;
    }
    var __k7 = __e8;
    if (! number63(__k7)) {
      var __y3 = f(__v4);
      if (is63(__y3)) {
        __t1[__k7] = __y3;
      }
    }
  }
  return __t1;
};
_G.map = map;
keep = function (f, x) {
  return map(function (v) {
    if (yes(f(v))) {
      return v;
    }
  }, x);
};
_G.keep = keep;
keys63 = function (t) {
  var ____o5 = t;
  var __k8 = undefined;
  for (__k8 in ____o5) {
    var __v5 = ____o5[__k8];
    var __e9;
    if (numeric63(__k8)) {
      __e9 = parseInt(__k8);
    } else {
      __e9 = __k8;
    }
    var __k9 = __e9;
    if (! number63(__k9)) {
      return true;
    }
  }
  return false;
};
_G.keys63 = keys63;
empty63 = function (t) {
  var ____o6 = t;
  var ____i12 = undefined;
  for (____i12 in ____o6) {
    var __x7 = ____o6[____i12];
    var __e10;
    if (numeric63(____i12)) {
      __e10 = parseInt(____i12);
    } else {
      __e10 = ____i12;
    }
    var ____i121 = __e10;
    return false;
  }
  return true;
};
_G.empty63 = empty63;
stash = function (args) {
  if (keys63(args)) {
    var __p = [];
    var ____o7 = args;
    var __k10 = undefined;
    for (__k10 in ____o7) {
      var __v6 = ____o7[__k10];
      var __e11;
      if (numeric63(__k10)) {
        __e11 = parseInt(__k10);
      } else {
        __e11 = __k10;
      }
      var __k11 = __e11;
      if (! number63(__k11)) {
        __p[__k11] = __v6;
      }
    }
    __p._stash = true;
    add(args, __p);
  }
  return args;
};
_G.stash = stash;
unstash = function (args) {
  if (none63(args)) {
    return [];
  } else {
    var __l2 = last(args);
    if (obj63(__l2) && __l2._stash) {
      var __args1 = almost(args);
      var ____o8 = __l2;
      var __k12 = undefined;
      for (__k12 in ____o8) {
        var __v7 = ____o8[__k12];
        var __e12;
        if (numeric63(__k12)) {
          __e12 = parseInt(__k12);
        } else {
          __e12 = __k12;
        }
        var __k13 = __e12;
        if (!( __k13 === "_stash")) {
          __args1[__k13] = __v7;
        }
      }
      return __args1;
    } else {
      return args;
    }
  }
};
_G.unstash = unstash;
destash33 = function (l, args1) {
  if (obj63(l) && l._stash) {
    var ____o9 = l;
    var __k14 = undefined;
    for (__k14 in ____o9) {
      var __v8 = ____o9[__k14];
      var __e13;
      if (numeric63(__k14)) {
        __e13 = parseInt(__k14);
      } else {
        __e13 = __k14;
      }
      var __k15 = __e13;
      if (!( __k15 === "_stash")) {
        args1[__k15] = __v8;
      }
    }
  } else {
    return l;
  }
};
_G.destash33 = destash33;
search = function (s, pattern, start) {
  var __i16 = s.indexOf(pattern, start);
  if (__i16 >= 0) {
    return __i16;
  }
};
_G.search = search;
split = function (s, sep) {
  if (s === "" || sep === "") {
    return [];
  } else {
    var __l3 = [];
    var __n12 = _35(sep);
    while (true) {
      var __i17 = search(s, sep);
      if (nil63(__i17)) {
        break;
      } else {
        add(__l3, clip(s, 0, __i17));
        s = clip(s, __i17 + __n12);
      }
    }
    add(__l3, s);
    return __l3;
  }
};
_G.split = split;
cat = function () {
  var __xs = unstash(Array.prototype.slice.call(arguments, 0));
  return either(reduce(function (a, b) {
    return a + b;
  }, __xs), "");
};
_G.cat = cat;
_43 = function () {
  var __xs1 = unstash(Array.prototype.slice.call(arguments, 0));
  return either(reduce(function (a, b) {
    return a + b;
  }, __xs1), 0);
};
_G._43 = _43;
_45 = function () {
  var __xs2 = unstash(Array.prototype.slice.call(arguments, 0));
  return either(reduce(function (b, a) {
    return a - b;
  }, reverse(__xs2)), 0);
};
_G._45 = _45;
_42 = function () {
  var __xs3 = unstash(Array.prototype.slice.call(arguments, 0));
  return either(reduce(function (a, b) {
    return a * b;
  }, __xs3), 1);
};
_G._42 = _42;
_47 = function () {
  var __xs4 = unstash(Array.prototype.slice.call(arguments, 0));
  return either(reduce(function (b, a) {
    return a / b;
  }, reverse(__xs4)), 1);
};
_G._47 = _47;
_37 = function () {
  var __xs5 = unstash(Array.prototype.slice.call(arguments, 0));
  return either(reduce(function (b, a) {
    return a % b;
  }, reverse(__xs5)), 0);
};
_G._37 = _37;
var pairwise = function (f, xs) {
  var __i18 = 0;
  while (__i18 < edge(xs)) {
    var __a = xs[__i18];
    var __b = xs[__i18 + 1];
    if (! f(__a, __b)) {
      return false;
    }
    __i18 = __i18 + 1;
  }
  return true;
};
_60 = function () {
  var __xs6 = unstash(Array.prototype.slice.call(arguments, 0));
  return pairwise(function (a, b) {
    return a < b;
  }, __xs6);
};
_G._60 = _60;
_62 = function () {
  var __xs7 = unstash(Array.prototype.slice.call(arguments, 0));
  return pairwise(function (a, b) {
    return a > b;
  }, __xs7);
};
_G._62 = _62;
_61 = function () {
  var __xs8 = unstash(Array.prototype.slice.call(arguments, 0));
  return pairwise(function (a, b) {
    return a === b;
  }, __xs8);
};
_G._61 = _61;
_6061 = function () {
  var __xs9 = unstash(Array.prototype.slice.call(arguments, 0));
  return pairwise(function (a, b) {
    return a <= b;
  }, __xs9);
};
_G._6061 = _6061;
_6261 = function () {
  var __xs10 = unstash(Array.prototype.slice.call(arguments, 0));
  return pairwise(function (a, b) {
    return a >= b;
  }, __xs10);
};
_G._6261 = _6261;
number = function (s) {
  var __n13 = parseFloat(s);
  if (! isNaN(__n13)) {
    return __n13;
  }
};
_G.number = number;
number_code63 = function (n) {
  return n > 47 && n < 58;
};
_G.number_code63 = number_code63;
numeric63 = function (s) {
  var __n14 = _35(s);
  var __i19 = 0;
  while (__i19 < __n14) {
    if (! number_code63(code(s, __i19))) {
      return false;
    }
    __i19 = __i19 + 1;
  }
  return some63(s);
};
_G.numeric63 = numeric63;
var tostring = function (x) {
  return x.toString();
};
escape = function (s) {
  var __s1 = "\"";
  var __i20 = 0;
  while (__i20 < _35(s)) {
    var __c = char(s, __i20);
    var __e14;
    if (__c === "\n") {
      __e14 = "\\n";
    } else {
      var __e15;
      if (__c === "\r") {
        __e15 = "\\r";
      } else {
        var __e16;
        if (__c === "\"") {
          __e16 = "\\\"";
        } else {
          var __e17;
          if (__c === "\\") {
            __e17 = "\\\\";
          } else {
            __e17 = __c;
          }
          __e16 = __e17;
        }
        __e15 = __e16;
      }
      __e14 = __e15;
    }
    var __c1 = __e14;
    __s1 = __s1 + __c1;
    __i20 = __i20 + 1;
  }
  return __s1 + "\"";
};
_G.escape = escape;
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
                    if (type(x) === "symbol") {
                      return tostring(x);
                    } else {
                      if (false) {
                        return escape(tostring(x));
                      } else {
                        var __s = "(";
                        var __sp = "";
                        var __xs11 = [];
                        var __ks = [];
                        var __l4 = stack || [];
                        add(__l4, x);
                        var ____o10 = x;
                        var __k16 = undefined;
                        for (__k16 in ____o10) {
                          var __v9 = ____o10[__k16];
                          var __e18;
                          if (numeric63(__k16)) {
                            __e18 = parseInt(__k16);
                          } else {
                            __e18 = __k16;
                          }
                          var __k17 = __e18;
                          if (number63(__k17)) {
                            __xs11[__k17] = str(__v9, __l4);
                          } else {
                            add(__ks, __k17 + ":");
                            add(__ks, str(__v9, __l4));
                          }
                        }
                        drop(__l4);
                        var ____o11 = join(__xs11, __ks);
                        var ____i22 = undefined;
                        for (____i22 in ____o11) {
                          var __v10 = ____o11[____i22];
                          var __e19;
                          if (numeric63(____i22)) {
                            __e19 = parseInt(____i22);
                          } else {
                            __e19 = ____i22;
                          }
                          var ____i221 = __e19;
                          __s = __s + __sp + __v10;
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
  }
};
_G.str = str;
apply = function (f, args) {
  var __args = stash(args);
  return f.apply(f, __args);
};
_G.apply = apply;
call = function (f) {
  var ____r74 = unstash(Array.prototype.slice.call(arguments, 1));
  var __f = destash33(f, ____r74);
  var ____id = ____r74;
  var __args11 = cut(____id, 0);
  return apply(__f, __args11);
};
_G.call = call;
setenv = function (k) {
  var ____r75 = unstash(Array.prototype.slice.call(arguments, 1));
  var __k18 = destash33(k, ____r75);
  var ____id1 = ____r75;
  var __keys = cut(____id1, 0);
  if (string63(__k18)) {
    var __e20;
    if (__keys.toplevel) {
      __e20 = hd(environment);
    } else {
      __e20 = last(environment);
    }
    var __frame = __e20;
    var __entry = __frame[__k18] || {};
    var ____o12 = __keys;
    var __k19 = undefined;
    for (__k19 in ____o12) {
      var __v11 = ____o12[__k19];
      var __e21;
      if (numeric63(__k19)) {
        __e21 = parseInt(__k19);
      } else {
        __e21 = __k19;
      }
      var __k20 = __e21;
      __entry[__k20] = __v11;
    }
    __frame[__k18] = __entry;
    return __frame[__k18];
  }
};
_G.setenv = setenv;
print = function (x) {
  return console.log(x);
};
_G.print = print;
var math = Math;
abs = math.abs;
_G.abs = abs;
acos = math.acos;
_G.acos = acos;
asin = math.asin;
_G.asin = asin;
atan = math.atan;
_G.atan = atan;
atan2 = math.atan2;
_G.atan2 = atan2;
ceil = math.ceil;
_G.ceil = ceil;
cos = math.cos;
_G.cos = cos;
floor = math.floor;
_G.floor = floor;
log = math.log;
_G.log = log;
log10 = math.log10;
_G.log10 = log10;
max = math.max;
_G.max = max;
min = math.min;
_G.min = min;
pow = math.pow;
_G.pow = pow;
random = math.random;
_G.random = random;
sin = math.sin;
_G.sin = sin;
sinh = math.sinh;
_G.sinh = sinh;
sqrt = math.sqrt;
_G.sqrt = sqrt;
tan = math.tan;
_G.tan = tan;
tanh = math.tanh;
_G.tanh = tanh;
trunc = math.floor;
_G.trunc = trunc;
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
  var __name5 = destash33(name, ____r37);
  var __x131 = destash33(x, ____r37);
  var ____id31 = ____r37;
  var __body21 = cut(____id31, 0);
  setenv(__name5, {_stash: true, variable: true});
  if (some63(__body21)) {
    return join(["%local-function", __name5], bind42(__x131, __body21));
  } else {
    return ["%local", __name5, __x131];
  }
}});
setenv("define-global", {_stash: true, macro: function (name, x) {
  var ____r39 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name7 = destash33(name, ____r39);
  var __x145 = destash33(x, ____r39);
  var ____id33 = ____r39;
  var __body23 = cut(____id33, 0);
  setenv(__name7, {_stash: true, toplevel: true, variable: true});
  if (some63(__body23)) {
    return ["do", join(["%global-function", __name7], bind42(__x145, __body23)), ["%set", ["get", "_G", ["quote", compile(__name7)]], __name7]];
  } else {
    return ["do", ["%set", __name7, __x145], ["%set", ["get", "_G", ["quote", compile(__name7)]], __name7]];
  }
}});
setenv("with-frame", {_stash: true, macro: function () {
  var __body25 = unstash(Array.prototype.slice.call(arguments, 0));
  var __x163 = unique("x");
  return ["do", ["add", "environment", ["obj"]], ["with", __x163, join(["do"], __body25), ["drop", "environment"]]];
}});
setenv("with-bindings", {_stash: true, macro: function (__x175) {
  var ____id36 = __x175;
  var __names1 = ____id36[0];
  var ____r41 = unstash(Array.prototype.slice.call(arguments, 1));
  var ____x175 = destash33(__x175, ____r41);
  var ____id37 = ____r41;
  var __body27 = cut(____id37, 0);
  var __x176 = unique("x");
  var ____x179 = ["setenv", __x176];
  ____x179.variable = true;
  return join(["with-frame", ["each", __x176, __names1, ____x179]], __body27);
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
  var ____x183 = join(["do"], macroexpand(__body29));
  drop(environment);
  return ____x183;
}});
setenv("let-symbol", {_stash: true, macro: function (expansions) {
  var ____r48 = unstash(Array.prototype.slice.call(arguments, 1));
  var __expansions1 = destash33(expansions, ____r48);
  var ____id42 = ____r48;
  var __body31 = cut(____id42, 0);
  add(environment, {});
  map(function (__x191) {
    var ____id43 = __x191;
    var __name9 = ____id43[0];
    var __exp1 = ____id43[1];
    return macroexpand(["define-symbol", __name9, __exp1]);
  }, pair(__expansions1));
  var ____x190 = join(["do"], macroexpand(__body31));
  drop(environment);
  return ____x190;
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
    var ____x245 = ["obj"];
    ____x245.stack = [["get", "debug", ["quote", "traceback"]]];
    ____x245.message = ["if", ["string?", "m"], ["clip", "m", ["+", ["search", "m", "\": \""], 2]], ["nil?", "m"], "\"\"", ["str", "m"]];
    return ["list", ["xpcall", ["fn", join(), expr], ["fn", ["m"], ["if", ["obj?", "m"], "m", ____x245]]]];
  }
}});
setenv("each", {_stash: true, macro: function (x, t) {
  var ____r61 = unstash(Array.prototype.slice.call(arguments, 2));
  var __x270 = destash33(x, ____r61);
  var __t1 = destash33(t, ____r61);
  var ____id52 = ____r61;
  var __body37 = cut(____id52, 0);
  var __o3 = unique("o");
  var __n3 = unique("n");
  var __i3 = unique("i");
  var __e9;
  if (atom63(__x270)) {
    __e9 = [__i3, __x270];
  } else {
    var __e10;
    if (_35(__x270) > 1) {
      __e10 = __x270;
    } else {
      __e10 = [__i3, hd(__x270)];
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
  var __x302 = unique("x");
  var __i7 = unique("i");
  return ["let", [__x302, __t3], ["for", __i7, ["#", __x302], join(["let", [__v9, ["at", __x302, __i7]]], __body41)]];
}});
setenv("set-of", {_stash: true, macro: function () {
  var __xs1 = unstash(Array.prototype.slice.call(arguments, 0));
  var __l3 = [];
  var ____o5 = __xs1;
  var ____i9 = undefined;
  for (____i9 in ____o5) {
    var __x312 = ____o5[____i9];
    var __e12;
    if (numeric63(____i9)) {
      __e12 = parseInt(____i9);
    } else {
      __e12 = ____i9;
    }
    var ____i91 = __e12;
    __l3[__x312] = true;
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
  var __x337 = unique("x");
  return ["do", ["inc", "indent-level"], ["with", __x337, form, ["dec", "indent-level"]]];
}});
setenv("export", {_stash: true, macro: function () {
  var __names5 = unstash(Array.prototype.slice.call(arguments, 0));
  if (target === "js") {
    return join(["do"], map(function (k) {
      return ["set", ["get", "exports", ["quote", k]], k];
    }, __names5));
  } else {
    var __x353 = {};
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
      __x353[__k7] = __k7;
    }
    return ["return", join(["%object"], mapo(function (x) {
      return x;
    }, __x353))];
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
      return print(str(__v));
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
_G.compile_file = compile_file;
_load = function (path) {
  var __previous = target;
  target = "js";
  var __code = compile_file(path);
  target = __previous;
  return compiler.run(__code);
};
_G._load = _load;
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
exports.reader = reader;
exports.compiler = compiler;
exports.system = system;
exports["eval-print"] = eval_print;
exports.rep = rep;
exports.repl = repl;
exports["compile-file"] = compile_file;
exports["load"] = _load;
exports["script-file?"] = script_file63;
exports["run-file"] = run_file;
exports.usage = usage;
exports.main = main;
