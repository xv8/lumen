var __e;
if (!( typeof("global") === "undefined")) {
  __e = global;
} else {
  __e = window;
}_G = __e;
_G._G = _G;
environment = [{}];
_G.environment = environment;
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
  }};
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
  }  var __i = __e1;
  var __n = _35(x);
  var __e2;
  if (nil63(upto) || upto > __n) {
    __e2 = __n;
  } else {
    __e2 = upto;
  }  var __upto = __e2;
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
    }    var __k1 = __e3;
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
    }    var __k3 = __e4;
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
    }  }};
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
        }        var __k5 = __e5;
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
    }    var ____i61 = __e6;
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
      }    };
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
    }    var __k7 = __e8;
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
    }    var __k9 = __e9;
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
    }    var ____i121 = __e10;
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
      }      var __k11 = __e11;
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
        }        var __k13 = __e12;
        if (!( __k13 === "_stash")) {
          __args1[__k13] = __v7;
        }
      }
      return __args1;
    } else {
      return args;
    }  }};
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
      }      var __k15 = __e13;
      if (!( __k15 === "_stash")) {
        args1[__k15] = __v8;
      }
    }
  } else {
    return l;
  }};
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
      }    }
    add(__l3, s);
    return __l3;
  }};
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
          }          __e16 = __e17;
        }        __e15 = __e16;
      }      __e14 = __e15;
    }    var __c1 = __e14;
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
            }          } else {
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
                        }                        var __k17 = __e18;
                        if (number63(__k17)) {
                          __xs11[__k17] = str(__v9, __l4);
                        } else {
                          add(__ks, __k17 + ":");
                          add(__ks, str(__v9, __l4));
                        }                      }
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
                        }                        var ____i221 = __e19;
                        __s = __s + __sp + __v10;
                        __sp = " ";
                      }
                      return __s + ")";
                    }                  }                }              }            }          }        }      }    }  }};
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
    }    var __frame = __e20;
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
      }      var __k20 = __e21;
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
abs = Math.abs;
_G.abs = abs;
acos = Math.acos;
_G.acos = acos;
asin = Math.asin;
_G.asin = asin;
atan = Math.atan;
_G.atan = atan;
atan2 = Math.atan2;
_G.atan2 = atan2;
ceil = Math.ceil;
_G.ceil = ceil;
cos = Math.cos;
_G.cos = cos;
floor = Math.floor;
_G.floor = floor;
log = Math.log;
_G.log = log;
log10 = Math.log10;
_G.log10 = log10;
max = Math.max;
_G.max = max;
min = Math.min;
_G.min = min;
pow = Math.pow;
_G.pow = pow;
random = Math.random;
_G.random = random;
sin = Math.sin;
_G.sin = sin;
sinh = Math.sinh;
_G.sinh = sinh;
sqrt = Math.sqrt;
_G.sqrt = sqrt;
tan = Math.tan;
_G.tan = tan;
tanh = Math.tanh;
_G.tanh = tanh;
trunc = Math.floor;
_G.trunc = trunc;
