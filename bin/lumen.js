_G = this;
_G._G = _G;
environment = _G.environment || [{}];
_G.environment = environment;
target = _G.traget || "js";
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
  var __e;
  if (nil63(from) || from < 0) {
    __e = 0;
  } else {
    __e = from;
  }
  var __i = __e;
  var __n = _35(x);
  var __e1;
  if (nil63(upto) || upto > __n) {
    __e1 = __n;
  } else {
    __e1 = upto;
  }
  var __upto = __e1;
  while (__i < __upto) {
    __l[__j] = x[__i];
    __i = __i + 1;
    __j = __j + 1;
  }
  var ____o351 = x;
  var __k = undefined;
  for (__k in ____o351) {
    var __v = ____o351[__k];
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
_G.cut = cut;
keys = function (x) {
  var __t = [];
  var ____o3511 = x;
  var __k2 = undefined;
  for (__k2 in ____o3511) {
    var __v1 = ____o3511[__k2];
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
scoped_id63 = function (x) {
  return string63(x) && _35(x) > 1 && char(x, edge(x)) === "#";
};
_G.scoped_id63 = scoped_id63;
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
  var __i1 = edge(l);
  while (__i1 >= 0) {
    add(__l1, l[__i1]);
    __i1 = __i1 - 1;
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
  var __r38 = [];
  var ____x358 = __ls;
  var ____i353 = 0;
  while (____i353 < _35(____x358)) {
    var __l11 = ____x358[____i353];
    if (__l11) {
      var __n1 = _35(__r38);
      var ____o3512 = __l11;
      var __k4 = undefined;
      for (__k4 in ____o3512) {
        var __v2 = ____o3512[__k4];
        var __e4;
        if (numeric63(__k4)) {
          __e4 = parseInt(__k4);
        } else {
          __e4 = __k4;
        }
        var __k5 = __e4;
        if (number63(__k5)) {
          __k5 = __k5 + __n1;
        }
        __r38[__k5] = __v2;
      }
    }
    ____i353 = ____i353 + 1;
  }
  return __r38;
};
_G.join = join;
find = function (f, t) {
  var ____o3513 = t;
  var ____i351 = undefined;
  for (____i351 in ____o3513) {
    var __x1 = ____o3513[____i351];
    var __e5;
    if (numeric63(____i351)) {
      __e5 = parseInt(____i351);
    } else {
      __e5 = ____i351;
    }
    var ____i3511 = __e5;
    var __y = f(__x1);
    if (__y) {
      return __y;
    }
  }
};
_G.find = find;
first = function (f, l) {
  var ____x3581 = l;
  var ____i3531 = 0;
  while (____i3531 < _35(____x3581)) {
    var __x2 = ____x3581[____i3531];
    var __y1 = f(__x2);
    if (__y1) {
      return __y1;
    }
    ____i3531 = ____i3531 + 1;
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
  var __i2 = 0;
  while (__i2 < _35(l)) {
    add(__l12, [l[__i2], l[__i2 + 1]]);
    __i2 = __i2 + 1;
    __i2 = __i2 + 1;
  }
  return __l12;
};
_G.pair = pair;
sort = function (l, f) {
  var __e6;
  if (f) {
    __e6 = function (a, b) {
      if (f(a, b)) {
        return -1;
      } else {
        return 1;
      }
    };
  }
  return l.sort(__e6);
};
_G.sort = sort;
map = function (f, x) {
  var __t1 = [];
  var ____x3582 = x;
  var ____i3532 = 0;
  while (____i3532 < _35(____x3582)) {
    var __v3 = ____x3582[____i3532];
    var __y2 = f(__v3);
    if (is63(__y2)) {
      add(__t1, __y2);
    }
    ____i3532 = ____i3532 + 1;
  }
  var ____o3514 = x;
  var __k6 = undefined;
  for (__k6 in ____o3514) {
    var __v4 = ____o3514[__k6];
    var __e7;
    if (numeric63(__k6)) {
      __e7 = parseInt(__k6);
    } else {
      __e7 = __k6;
    }
    var __k7 = __e7;
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
  var ____o3515 = t;
  var __k8 = undefined;
  for (__k8 in ____o3515) {
    var __v5 = ____o3515[__k8];
    var __e8;
    if (numeric63(__k8)) {
      __e8 = parseInt(__k8);
    } else {
      __e8 = __k8;
    }
    var __k9 = __e8;
    if (! number63(__k9)) {
      return true;
    }
  }
  return false;
};
_G.keys63 = keys63;
empty63 = function (t) {
  var ____o3516 = t;
  var ____i3512 = undefined;
  for (____i3512 in ____o3516) {
    var __x4 = ____o3516[____i3512];
    var __e9;
    if (numeric63(____i3512)) {
      __e9 = parseInt(____i3512);
    } else {
      __e9 = ____i3512;
    }
    var ____i3513 = __e9;
    return false;
  }
  return true;
};
_G.empty63 = empty63;
stash = function (args) {
  if (keys63(args)) {
    var __p = [];
    var ____o3517 = args;
    var __k10 = undefined;
    for (__k10 in ____o3517) {
      var __v6 = ____o3517[__k10];
      var __e10;
      if (numeric63(__k10)) {
        __e10 = parseInt(__k10);
      } else {
        __e10 = __k10;
      }
      var __k11 = __e10;
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
      var ____o3518 = __l2;
      var __k12 = undefined;
      for (__k12 in ____o3518) {
        var __v7 = ____o3518[__k12];
        var __e11;
        if (numeric63(__k12)) {
          __e11 = parseInt(__k12);
        } else {
          __e11 = __k12;
        }
        var __k13 = __e11;
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
    var ____o3519 = l;
    var __k14 = undefined;
    for (__k14 in ____o3519) {
      var __v8 = ____o3519[__k14];
      var __e12;
      if (numeric63(__k14)) {
        __e12 = parseInt(__k14);
      } else {
        __e12 = __k14;
      }
      var __k15 = __e12;
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
  var __i3 = s.indexOf(pattern, start);
  if (__i3 >= 0) {
    return __i3;
  }
};
_G.search = search;
split = function (s, sep) {
  if (s === "" || sep === "") {
    return [];
  } else {
    var __l3 = [];
    var __n2 = _35(sep);
    while (true) {
      var __i4 = search(s, sep);
      if (nil63(__i4)) {
        break;
      } else {
        add(__l3, clip(s, 0, __i4));
        s = clip(s, __i4 + __n2);
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
pairwise = function (f, xs) {
  var __i5 = 0;
  while (__i5 < edge(xs)) {
    var __a = xs[__i5];
    var __b = xs[__i5 + 1];
    if (! f(__a, __b)) {
      return false;
    }
    __i5 = __i5 + 1;
  }
  return true;
};
_G.pairwise = pairwise;
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
  var __n3 = parseFloat(s);
  if (! isNaN(__n3)) {
    return __n3;
  }
};
_G.number = number;
number_code63 = function (n) {
  return n > 47 && n < 58;
};
_G.number_code63 = number_code63;
numeric63 = function (s) {
  var __n4 = _35(s);
  var __i6 = 0;
  while (__i6 < __n4) {
    if (! number_code63(code(s, __i6))) {
      return false;
    }
    __i6 = __i6 + 1;
  }
  return some63(s);
};
_G.numeric63 = numeric63;
tostring = function (x) {
  return x.toString();
};
_G.tostring = tostring;
escape = function (s) {
  var __s1 = "\"";
  var __i7 = 0;
  while (__i7 < _35(s)) {
    var __c = char(s, __i7);
    var __e13;
    if (__c === "\n") {
      __e13 = "\\n";
    } else {
      var __e14;
      if (__c === "\r") {
        __e14 = "\\r";
      } else {
        var __e15;
        if (__c === "\"") {
          __e15 = "\\\"";
        } else {
          var __e16;
          if (__c === "\\") {
            __e16 = "\\\\";
          } else {
            __e16 = __c;
          }
          __e15 = __e16;
        }
        __e14 = __e15;
      }
      __e13 = __e14;
    }
    var __c1 = __e13;
    __s1 = __s1 + __c1;
    __i7 = __i7 + 1;
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
                        var ____o35110 = x;
                        var __k16 = undefined;
                        for (__k16 in ____o35110) {
                          var __v9 = ____o35110[__k16];
                          var __e17;
                          if (numeric63(__k16)) {
                            __e17 = parseInt(__k16);
                          } else {
                            __e17 = __k16;
                          }
                          var __k17 = __e17;
                          if (number63(__k17)) {
                            __xs11[__k17] = str(__v9, __l4);
                          } else {
                            add(__ks, __k17 + ":");
                            add(__ks, str(__v9, __l4));
                          }
                        }
                        drop(__l4);
                        var ____o35111 = join(__xs11, __ks);
                        var ____i3514 = undefined;
                        for (____i3514 in ____o35111) {
                          var __v10 = ____o35111[____i3514];
                          var __e18;
                          if (numeric63(____i3514)) {
                            __e18 = parseInt(____i3514);
                          } else {
                            __e18 = ____i3514;
                          }
                          var ____i3515 = __e18;
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
  var ____r75 = unstash(Array.prototype.slice.call(arguments, 1));
  var __f = destash33(f, ____r75);
  var ____id = ____r75;
  var __args11 = cut(____id, 0);
  return apply(__f, __args11);
};
_G.call = call;
setenv = function (k) {
  var ____r76 = unstash(Array.prototype.slice.call(arguments, 1));
  var __k18 = destash33(k, ____r76);
  var ____id1 = ____r76;
  var __keys = cut(____id1, 0);
  if (string63(__k18)) {
    var __env = __keys.environment || environment;
    var __e19;
    if (__keys.toplevel) {
      __e19 = hd(__env);
    } else {
      __e19 = last(__env);
    }
    var __frame = __e19;
    var __entry = __frame[__k18] || {};
    var ____o35112 = __keys;
    var __k19 = undefined;
    for (__k19 in ____o35112) {
      var __v11 = ____o35112[__k19];
      var __e20;
      if (numeric63(__k19)) {
        __e20 = parseInt(__k19);
      } else {
        __e20 = __k19;
      }
      var __k20 = __e20;
      if (!( __k20 === "environment")) {
        __entry[__k20] = __v11;
      }
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
math = Math;
_G.math = math;
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
  var __prev1 = environment;
  environment = quasiquote_environment;
  add(quasiquote_environment || environment, {});
  var __x1 = quasiexpand(form, 1);
  environment = __prev1;
  var ____x3521 = __x1;
  drop(quasiquote_environment || environment);
  return ____x3521;
}});
setenv("set", {_stash: true, macro: function () {
  var __args1 = unstash(Array.prototype.slice.call(arguments, 0));
  return join(["do"], map(function (__x6) {
    var ____id1 = __x6;
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
  var __x24 = unique("x");
  var __l1 = [];
  var __forms1 = [];
  var ____o3511 = __body1;
  var __k2 = undefined;
  for (__k2 in ____o3511) {
    var __v1 = ____o3511[__k2];
    var __e11;
    if (numeric63(__k2)) {
      __e11 = parseInt(__k2);
    } else {
      __e11 = __k2;
    }
    var __k3 = __e11;
    if (number63(__k3)) {
      __l1[__k3] = __v1;
    } else {
      add(__forms1, ["set", ["get", __x24, ["quote", __k3]], __v1]);
    }
  }
  if (some63(__forms1)) {
    return join(["let", __x24, join(["%array"], __l1)], __forms1, [__x24]);
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
  return ["let", "__y351", __v5, ["when", ["yes", "__y351"], join(["let", [__x96, "__y351"]], __body13)]];
}});
setenv("define-macro", {_stash: true, macro: function (name, args) {
  var ____r29 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name1 = destash33(name, ____r29);
  var __args3 = destash33(args, ____r29);
  var ____id23 = ____r29;
  var __body15 = cut(____id23, 0);
  var ____x105 = ["setenv", ["quote", __name1]];
  ____x105.macro = join(["fn", __args3], __body15);
  var __form1 = join(____x105, keys(__body15));
  _eval(__form1);
  return __form1;
}});
setenv("define-special", {_stash: true, macro: function (name, args) {
  var ____r31 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name3 = destash33(name, ____r31);
  var __args5 = destash33(args, ____r31);
  var ____id25 = ____r31;
  var __body17 = cut(____id25, 0);
  var ____x111 = ["setenv", ["quote", __name3]];
  ____x111.special = join(["fn", __args5], __body17);
  var __form3 = join(____x111, keys(__body17));
  _eval(__form3);
  return __form3;
}});
setenv("define-symbol", {_stash: true, macro: function (name, expansion) {
  var ____r33 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name5 = destash33(name, ____r33);
  var __expansion1 = destash33(expansion, ____r33);
  var ____id27 = ____r33;
  var __env1 = ____id27.environment;
  var __e12;
  if (__env1) {
    __e12 = _eval(__env1);
  }
  setenv(__name5, {_stash: true, symbol: __expansion1, environment: __e12});
  var ____x117 = ["setenv", ["quote", __name5]];
  ____x117.symbol = ["quote", __expansion1];
  ____x117.environment = __env1;
  return ____x117;
}});
setenv("define-reader", {_stash: true, macro: function (__x125) {
  var ____id30 = __x125;
  var __char1 = ____id30[0];
  var __s1 = ____id30[1];
  var ____r35 = unstash(Array.prototype.slice.call(arguments, 1));
  var ____x125 = destash33(__x125, ____r35);
  var ____id31 = ____r35;
  var __body19 = cut(____id31, 0);
  return ["set", ["get", "read-table", __char1], join(["fn", [__s1]], __body19)];
}});
setenv("define", {_stash: true, macro: function (name, x) {
  var ____r37 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name7 = destash33(name, ____r37);
  var __x133 = destash33(x, ____r37);
  var ____id33 = ____r37;
  var __env3 = ____id33.environment;
  var __body21 = cut(____id33, 0);
  var __e13;
  if (__env3) {
    __e13 = _eval(__env3);
  }
  setenv(__name7, {_stash: true, variable: true, environment: __e13});
  if (some63(__body21)) {
    return join(["%local-function", __name7], bind42(__x133, __body21));
  } else {
    return ["%local", __name7, __x133];
  }
}});
setenv("define-global", {_stash: true, macro: function (name, x) {
  var ____r39 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name9 = destash33(name, ____r39);
  var __x147 = destash33(x, ____r39);
  var ____id35 = ____r39;
  var __env5 = ____id35.environment;
  var __body23 = cut(____id35, 0);
  setenv(__name9, {_stash: true, toplevel: true, variable: true});
  if (some63(__body23)) {
    return ["do", join(["%global-function", __name9], bind42(__x147, __body23)), ["%set", ["get", "_G", ["quote", compile(__name9)]], __name9]];
  } else {
    return ["do", ["%set", __name9, __x147], ["%set", ["get", "_G", ["quote", compile(__name9)]], __name9]];
  }
}});
setenv("with-frame", {_stash: true, macro: function () {
  var __body25 = unstash(Array.prototype.slice.call(arguments, 0));
  var __env7 = __body25.environment || "environment";
  delete __body25.environment;
  var __i1 = __body25.frame;
  var __e14;
  if (is63(__i1)) {
    __e14 = ["at", __env7, __i1];
  } else {
    __e14 = join(["obj"], keys(__body25));
  }
  var __frame1 = __e14;
  return ["do", ["add", ["or", __env7, "environment"], __frame1], ["with", "__x352", join(["do"], __body25), ["drop", ["or", __env7, "environment"]]]];
}});
setenv("without-frame", {_stash: true, macro: function () {
  var __body27 = unstash(Array.prototype.slice.call(arguments, 0));
  var __env9 = __body27.environment || "environment";
  return ["let", "__e351", ["drop", ["or", __env9, "environment"]], ["with", "__x354", join(["do"], __body27), ["add", ["or", __env9, "environment"], "__e351"]]];
}});
setenv("with-bindings", {_stash: true, macro: function (__x196) {
  var ____id38 = __x196;
  var __names1 = ____id38[0];
  var ____r41 = unstash(Array.prototype.slice.call(arguments, 1));
  var ____x196 = destash33(__x196, ____r41);
  var ____id39 = ____r41;
  var __env12 = ____id39.environment;
  var __body29 = cut(____id39, 0);
  var __env13 = __env12 || "environment";
  var ____x199 = ["setenv", "__x356"];
  ____x199.variable = true;
  ____x199.environment = ["or", __env13, "environment"];
  var ____x197 = ["with-frame", ["each", "__x356", __names1, ____x199]];
  ____x197._scope = true;
  ____x197.environment = ["or", __env13, "environment"];
  return join(____x197, __body29);
}});
setenv("let-macro", {_stash: true, macro: function (definitions) {
  var ____r44 = unstash(Array.prototype.slice.call(arguments, 1));
  var __definitions1 = destash33(definitions, ____r44);
  var ____id41 = ____r44;
  var __body31 = cut(____id41, 0);
  add(environment || environment, {});
  map(function (m) {
    return macroexpand(join(["define-macro"], m));
  }, __definitions1);
  var ____x3511 = join(["do"], macroexpand(__body31));
  drop(environment || environment);
  return ____x3511;
}});
setenv("let-symbol", {_stash: true, macro: function (expansions) {
  var ____r48 = unstash(Array.prototype.slice.call(arguments, 1));
  var __expansions1 = destash33(expansions, ____r48);
  var ____id44 = ____r48;
  var __body33 = cut(____id44, 0);
  add(environment || environment, {});
  map(function (__x209) {
    var ____id45 = __x209;
    var __name11 = ____id45[0];
    var __exp1 = ____id45[1];
    return macroexpand(["define-symbol", __name11, __exp1]);
  }, pair(__expansions1));
  var ____x3513 = join(["do"], macroexpand(__body33));
  drop(environment || environment);
  return ____x3513;
}});
setenv("let-unique", {_stash: true, macro: function (names) {
  var ____r52 = unstash(Array.prototype.slice.call(arguments, 1));
  var __names3 = destash33(names, ____r52);
  var ____id47 = ____r52;
  var __body35 = cut(____id47, 0);
  var __bs3 = map(function (n) {
    return [n, ["unique", ["quote", n]]];
  }, __names3);
  return join(["let", apply(join, __bs3)], __body35);
}});
setenv("fn", {_stash: true, macro: function (args) {
  var ____r55 = unstash(Array.prototype.slice.call(arguments, 1));
  var __args7 = destash33(args, ____r55);
  var ____id49 = ____r55;
  var __body37 = cut(____id49, 0);
  return join(["%function"], bind42(__args7, __body37));
}});
setenv("apply", {_stash: true, macro: function (f) {
  var ____r57 = unstash(Array.prototype.slice.call(arguments, 1));
  var __f1 = destash33(f, ____r57);
  var ____id51 = ____r57;
  var __args9 = cut(____id51, 0);
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
    var ____x263 = ["obj"];
    ____x263.stack = [["get", "debug", ["quote", "traceback"]]];
    ____x263.message = ["if", ["string?", "m"], ["clip", "m", ["+", ["search", "m", "\": \""], 2]], ["nil?", "m"], "\"\"", ["str", "m"]];
    return ["list", ["xpcall", ["fn", join(), expr], ["fn", ["m"], ["if", ["obj?", "m"], "m", ____x263]]]];
  }
}});
setenv("each", {_stash: true, macro: function (x, t) {
  var ____r61 = unstash(Array.prototype.slice.call(arguments, 2));
  var __x288 = destash33(x, ____r61);
  var __t1 = destash33(t, ____r61);
  var ____id54 = ____r61;
  var __body39 = cut(____id54, 0);
  var __i3 = "__i351";
  var __e15;
  if (atom63(__x288)) {
    __e15 = [__i3, __x288];
  } else {
    var __e16;
    if (_35(__x288) > 1) {
      __e16 = __x288;
    } else {
      __e16 = [__i3, hd(__x288)];
    }
    __e15 = __e16;
  }
  var ____id55 = __e15;
  var __k5 = ____id55[0];
  var __v7 = ____id55[1];
  var __e17;
  if (target === "lua") {
    __e17 = __body39;
  } else {
    __e17 = [join(["let", __k5, ["if", ["numeric?", __k5], ["parseInt", __k5], __k5]], __body39)];
  }
  return ["let", ["__o351", __t1, __k5, "nil"], ["%for", "__o351", __k5, join(["let", [__v7, ["get", "__o351", __k5]]], __e17)]];
}});
setenv("for", {_stash: true, macro: function (i, to) {
  var ____r63 = unstash(Array.prototype.slice.call(arguments, 2));
  var __i5 = destash33(i, ____r63);
  var __to1 = destash33(to, ____r63);
  var ____id57 = ____r63;
  var __body41 = cut(____id57, 0);
  return ["let", __i5, 0, join(["while", ["<", __i5, __to1]], __body41, [["inc", __i5]])];
}});
setenv("step", {_stash: true, macro: function (v, t) {
  var ____r65 = unstash(Array.prototype.slice.call(arguments, 2));
  var __v9 = destash33(v, ____r65);
  var __t3 = destash33(t, ____r65);
  var ____id59 = ____r65;
  var __body43 = cut(____id59, 0);
  return ["let", ["__x358", __t3], ["for", "__i353", ["#", "__x358"], join(["let", [__v9, ["at", "__x358", "__i353"]]], __body43)]];
}});
setenv("set-of", {_stash: true, macro: function () {
  var __xs1 = unstash(Array.prototype.slice.call(arguments, 0));
  var __l3 = [];
  var ____o3512 = __xs1;
  var ____i352 = undefined;
  for (____i352 in ____o3512) {
    var __x328 = ____o3512[____i352];
    var __e18;
    if (numeric63(____i352)) {
      __e18 = parseInt(____i352);
    } else {
      __e18 = ____i352;
    }
    var ____i353 = __e18;
    __l3[__x328] = true;
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
  var ____id61 = ____r69;
  var __bs5 = cut(____id61, 0);
  return ["set", __a3, join(["join", __a3], __bs5)];
}});
setenv("cat!", {_stash: true, macro: function (a) {
  var ____r71 = unstash(Array.prototype.slice.call(arguments, 1));
  var __a5 = destash33(a, ____r71);
  var ____id63 = ____r71;
  var __bs7 = cut(____id63, 0);
  return ["set", __a5, join(["cat", __a5], __bs7)];
}});
setenv("inc", {_stash: true, macro: function (n, by) {
  var __e19;
  if (nil63(by)) {
    __e19 = 1;
  } else {
    __e19 = by;
  }
  return ["set", n, ["+", n, __e19]];
}});
setenv("dec", {_stash: true, macro: function (n, by) {
  var __e20;
  if (nil63(by)) {
    __e20 = 1;
  } else {
    __e20 = by;
  }
  return ["set", n, ["-", n, __e20]];
}});
setenv("with-indent", {_stash: true, macro: function (form) {
  return ["do", ["inc", "indent-level"], ["with", "__x3510", form, ["dec", "indent-level"]]];
}});
setenv("export", {_stash: true, macro: function () {
  var __names5 = unstash(Array.prototype.slice.call(arguments, 0));
  if (target === "js") {
    return join(["do"], map(function (k) {
      return ["set", ["get", "exports", ["quote", k]], k];
    }, __names5));
  } else {
    var __x367 = {};
    var ____o353 = __names5;
    var ____i356 = undefined;
    for (____i356 in ____o353) {
      var __k7 = ____o353[____i356];
      var __e21;
      if (numeric63(____i356)) {
        __e21 = parseInt(____i356);
      } else {
        __e21 = ____i356;
      }
      var ____i357 = __e21;
      __x367[__k7] = __k7;
    }
    return ["return", join(["%object"], mapo(function (x) {
      return x;
    }, __x367))];
  }
}});
setenv("when-compiling", {_stash: true, macro: function () {
  var __body45 = unstash(Array.prototype.slice.call(arguments, 0));
  return _eval(join(["do"], __body45));
}});
reader = require("reader");
_G.reader = reader;
compiler = require("compiler");
_G.compiler = compiler;
system = require("system");
_G.system = system;
eval_print = function (form) {
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
_G.eval_print = eval_print;
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
script_file63 = function (path) {
  return !( "-" === char(path, 0) || ".js" === clip(path, _35(path) - 3) || ".lua" === clip(path, _35(path) - 4));
};
_G.script_file63 = script_file63;
run_file = function (path) {
  if (script_file63(path)) {
    return _load(path);
  } else {
    return compiler.run(system["read-file"](path));
  }
};
_G.run_file = run_file;
usage = function () {
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
_G.usage = usage;
main = function () {
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
      var ____x358 = __pre;
      var ____i353 = 0;
      while (____i353 < _35(____x358)) {
        var __file = ____x358[____i353];
        run_file(__file);
        ____i353 = ____i353 + 1;
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
_G.main = main;
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
