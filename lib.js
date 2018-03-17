var create = function (_G) {
  _G._G = _G;
  _G.environment = [{}];
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
    }  };
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
    }    var __i = __e;
    var __n = _35(x);
    var __e1;
    if (nil63(upto) || upto > __n) {
      __e1 = __n;
    } else {
      __e1 = upto;
    }    var __upto = __e1;
    while (__i < __upto) {
      __l[__j] = x[__i];
      __i = __i + 1;
      __j = __j + 1;
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
      }      var __k1 = __e2;
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
      var __e3;
      if (numeric63(__k2)) {
        __e3 = parseInt(__k2);
      } else {
        __e3 = __k2;
      }      var __k3 = __e3;
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
      }    }  };
  _G.reduce = reduce;
  join = function () {
    var __ls = unstash(Array.prototype.slice.call(arguments, 0));
    var __r38 = [];
    var ____x17 = __ls;
    var ____i4 = 0;
    while (____i4 < _35(____x17)) {
      var __l11 = ____x17[____i4];
      if (__l11) {
        var __n3 = _35(__r38);
        var ____o2 = __l11;
        var __k4 = undefined;
        for (__k4 in ____o2) {
          var __v2 = ____o2[__k4];
          var __e4;
          if (numeric63(__k4)) {
            __e4 = parseInt(__k4);
          } else {
            __e4 = __k4;
          }          var __k5 = __e4;
          if (number63(__k5)) {
            __k5 = __k5 + __n3;
          }
          __r38[__k5] = __v2;
        }
      }
      ____i4 = ____i4 + 1;
    }
    return __r38;
  };
  _G.join = join;
  find = function (f, t) {
    var ____o3 = t;
    var ____i6 = undefined;
    for (____i6 in ____o3) {
      var __x18 = ____o3[____i6];
      var __e5;
      if (numeric63(____i6)) {
        __e5 = parseInt(____i6);
      } else {
        __e5 = ____i6;
      }      var ____i61 = __e5;
      var __y = f(__x18);
      if (__y) {
        return __y;
      }
    }
  };
  _G.find = find;
  first = function (f, l) {
    var ____x19 = l;
    var ____i7 = 0;
    while (____i7 < _35(____x19)) {
      var __x20 = ____x19[____i7];
      var __y1 = f(__x20);
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
    var __e6;
    if (f) {
      __e6 = function (a, b) {
        if (f(a, b)) {
          return -1;
        } else {
          return 1;
        }      };
    }
    return l.sort(__e6);
  };
  _G.sort = sort;
  map = function (f, x) {
    var __t1 = [];
    var ____x22 = x;
    var ____i9 = 0;
    while (____i9 < _35(____x22)) {
      var __v3 = ____x22[____i9];
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
      var __e7;
      if (numeric63(__k6)) {
        __e7 = parseInt(__k6);
      } else {
        __e7 = __k6;
      }      var __k7 = __e7;
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
      var __e8;
      if (numeric63(__k8)) {
        __e8 = parseInt(__k8);
      } else {
        __e8 = __k8;
      }      var __k9 = __e8;
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
      var __x23 = ____o6[____i12];
      var __e9;
      if (numeric63(____i12)) {
        __e9 = parseInt(____i12);
      } else {
        __e9 = ____i12;
      }      var ____i121 = __e9;
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
        var __e10;
        if (numeric63(__k10)) {
          __e10 = parseInt(__k10);
        } else {
          __e10 = __k10;
        }        var __k11 = __e10;
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
          var __e11;
          if (numeric63(__k12)) {
            __e11 = parseInt(__k12);
          } else {
            __e11 = __k12;
          }          var __k13 = __e11;
          if (!( __k13 === "_stash")) {
            __args1[__k13] = __v7;
          }
        }
        return __args1;
      } else {
        return args;
      }    }  };
  _G.unstash = unstash;
  destash33 = function (l, args1) {
    if (obj63(l) && l._stash) {
      var ____o9 = l;
      var __k14 = undefined;
      for (__k14 in ____o9) {
        var __v8 = ____o9[__k14];
        var __e12;
        if (numeric63(__k14)) {
          __e12 = parseInt(__k14);
        } else {
          __e12 = __k14;
        }        var __k15 = __e12;
        if (!( __k15 === "_stash")) {
          args1[__k15] = __v8;
        }
      }
    } else {
      return l;
    }  };
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
        }      }
      add(__l3, s);
      return __l3;
    }  };
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
            }            __e15 = __e16;
          }          __e14 = __e15;
        }        __e13 = __e14;
      }      var __c1 = __e13;
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
              }            } else {
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
                          var __e17;
                          if (numeric63(__k16)) {
                            __e17 = parseInt(__k16);
                          } else {
                            __e17 = __k16;
                          }                          var __k17 = __e17;
                          if (number63(__k17)) {
                            __xs11[__k17] = str(__v9, __l4);
                          } else {
                            add(__ks, __k17 + ":");
                            add(__ks, str(__v9, __l4));
                          }                        }
                        drop(__l4);
                        var ____o11 = join(__xs11, __ks);
                        var ____i22 = undefined;
                        for (____i22 in ____o11) {
                          var __v10 = ____o11[____i22];
                          var __e18;
                          if (numeric63(____i22)) {
                            __e18 = parseInt(____i22);
                          } else {
                            __e18 = ____i22;
                          }                          var ____i221 = __e18;
                          __s = __s + __sp + __v10;
                          __sp = " ";
                        }
                        return __s + ")";
                      }                    }                  }                }              }            }          }        }      }    }  };
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
      var __e19;
      if (__keys.toplevel) {
        __e19 = hd(_G.environment);
      } else {
        __e19 = last(_G.environment);
      }      var __frame = __e19;
      var __entry = __frame[__k18] || {};
      var ____o12 = __keys;
      var __k19 = undefined;
      for (__k19 in ____o12) {
        var __v11 = ____o12[__k19];
        var __e20;
        if (numeric63(__k19)) {
          __e20 = parseInt(__k19);
        } else {
          __e20 = __k19;
        }        var __k20 = __e20;
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
  setenv("quote", {"_stash": true, "macro": function (form) {
    return quoted(form);
  }});
  setenv("quasiquote", {"_stash": true, "macro": function (form) {
    return quasiexpand(form, 1);
  }});
  setenv("set", {"_stash": true, "macro": function () {
    var __args3 = unstash(Array.prototype.slice.call(arguments, 0));
    return join(["do"], map(function (__x28) {
      var ____id3 = __x28;
      var __lh1 = ____id3[0];
      var __rh1 = ____id3[1];
      return ["%set", __lh1, __rh1];
    }, pair(__args3)));
  }});
  setenv("at", {"_stash": true, "macro": function (l, i) {
    return ["get", l, i];
  }});
  setenv("wipe", {"_stash": true, "macro": function (place) {
    return ["%delete", place];
  }});
  setenv("list", {"_stash": true, "macro": function () {
    var __body1 = unstash(Array.prototype.slice.call(arguments, 0));
    var __x42 = unique("x");
    var __l6 = [];
    var __forms1 = [];
    var ____o14 = __body1;
    var __k23 = undefined;
    for (__k23 in ____o14) {
      var __v13 = ____o14[__k23];
      var __e27;
      if (numeric63(__k23)) {
        __e27 = parseInt(__k23);
      } else {
        __e27 = __k23;
      }      var __k24 = __e27;
      if (number63(__k24)) {
        __l6[__k24] = __v13;
      } else {
        add(__forms1, ["set", ["get", __x42, ["quote", __k24]], __v13]);
      }    }
    if (some63(__forms1)) {
      return join(["let", __x42, join(["%array"], __l6)], __forms1, [__x42]);
    } else {
      return join(["%array"], __l6);
    }  }});
  setenv("if", {"_stash": true, "macro": function () {
    var __branches1 = unstash(Array.prototype.slice.call(arguments, 0));
    return hd(expand_if(__branches1));
  }});
  setenv("case", {"_stash": true, "macro": function (expr) {
    var ____r91 = unstash(Array.prototype.slice.call(arguments, 1));
    var __expr1 = destash33(expr, ____r91);
    var ____id6 = ____r91;
    var __clauses1 = cut(____id6, 0);
    var __x61 = unique("x");
    var __eq1 = function (_) {
      return ["=", ["quote", _], __x61];
    };
    var __cl1 = function (__x64) {
      var ____id7 = __x64;
      var __a2 = ____id7[0];
      var __b2 = ____id7[1];
      if (nil63(__b2)) {
        return [__a2];
      } else {
        if (string63(__a2) || number63(__a2)) {
          return [__eq1(__a2), __b2];
        } else {
          if (one63(__a2)) {
            return [__eq1(hd(__a2)), __b2];
          } else {
            if (_35(__a2) > 1) {
              return [join(["or"], map(__eq1, __a2)), __b2];
            }
          }        }      }    };
    return ["let", __x61, __expr1, join(["if"], apply(join, map(__cl1, pair(__clauses1))))];
  }});
  setenv("when", {"_stash": true, "macro": function (cond) {
    var ____r95 = unstash(Array.prototype.slice.call(arguments, 1));
    var __cond1 = destash33(cond, ____r95);
    var ____id9 = ____r95;
    var __body3 = cut(____id9, 0);
    return ["if", __cond1, join(["do"], __body3)];
  }});
  setenv("unless", {"_stash": true, "macro": function (cond) {
    var ____r97 = unstash(Array.prototype.slice.call(arguments, 1));
    var __cond3 = destash33(cond, ____r97);
    var ____id11 = ____r97;
    var __body5 = cut(____id11, 0);
    return ["if", ["not", __cond3], join(["do"], __body5)];
  }});
  setenv("obj", {"_stash": true, "macro": function () {
    var __body7 = unstash(Array.prototype.slice.call(arguments, 0));
    return join(["%object"], mapo(function (x) {
      return x;
    }, __body7));
  }});
  setenv("let", {"_stash": true, "macro": function (bs) {
    var ____r101 = unstash(Array.prototype.slice.call(arguments, 1));
    var __bs11 = destash33(bs, ____r101);
    var ____id16 = ____r101;
    var __body9 = cut(____id16, 0);
    if (atom63(__bs11)) {
      return join(["let", [__bs11, hd(__body9)]], tl(__body9));
    } else {
      if (none63(__bs11)) {
        return join(["do"], __body9);
      } else {
        var ____id17 = __bs11;
        var __lh3 = ____id17[0];
        var __rh3 = ____id17[1];
        var __bs21 = cut(____id17, 2);
        var ____id18 = bind(__lh3, __rh3);
        var __id19 = ____id18[0];
        var __val1 = ____id18[1];
        var __bs12 = cut(____id18, 2);
        var __renames1 = [];
        if (! id_literal63(__id19)) {
          var __id121 = unique(__id19);
          __renames1 = [__id19, __id121];
          __id19 = __id121;
        }
        return ["do", ["%local", __id19, __val1], ["let-symbol", __renames1, join(["let", join(__bs12, __bs21)], __body9)]];
      }    }  }});
  setenv("with", {"_stash": true, "macro": function (x, v) {
    var ____r103 = unstash(Array.prototype.slice.call(arguments, 2));
    var __x104 = destash33(x, ____r103);
    var __v15 = destash33(v, ____r103);
    var ____id21 = ____r103;
    var __body11 = cut(____id21, 0);
    return join(["let", [__x104, __v15]], __body11, [__x104]);
  }});
  setenv("let-when", {"_stash": true, "macro": function (x, v) {
    var ____r105 = unstash(Array.prototype.slice.call(arguments, 2));
    var __x114 = destash33(x, ____r105);
    var __v17 = destash33(v, ____r105);
    var ____id23 = ____r105;
    var __body13 = cut(____id23, 0);
    var __y5 = unique("y");
    return ["let", __y5, __v17, ["when", ["yes", __y5], join(["let", [__x114, __y5]], __body13)]];
  }});
  setenv("define-macro", {"_stash": true, "macro": function (name, args) {
    var ____r107 = unstash(Array.prototype.slice.call(arguments, 2));
    var __name1 = destash33(name, ____r107);
    var __args5 = destash33(args, ____r107);
    var ____id25 = ____r107;
    var __body15 = cut(____id25, 0);
    var ____x123 = ["setenv", ["quote", __name1]];
    ____x123.macro = join(["fn", __args5], __body15);
    var __form1 = ____x123;
    _eval(__form1);
    return __form1;
  }});
  setenv("define-special", {"_stash": true, "macro": function (name, args) {
    var ____r109 = unstash(Array.prototype.slice.call(arguments, 2));
    var __name3 = destash33(name, ____r109);
    var __args7 = destash33(args, ____r109);
    var ____id27 = ____r109;
    var __body17 = cut(____id27, 0);
    var ____x129 = ["setenv", ["quote", __name3]];
    ____x129.special = join(["fn", __args7], __body17);
    var __form3 = join(____x129, keys(__body17));
    _eval(__form3);
    return __form3;
  }});
  setenv("define-symbol", {"_stash": true, "macro": function (name, expansion) {
    setenv(name, {"_stash": true, "symbol": expansion});
    var ____x135 = ["setenv", ["quote", name]];
    ____x135.symbol = ["quote", expansion];
    return ____x135;
  }});
  setenv("define-reader", {"_stash": true, "macro": function (__x143) {
    var ____id30 = __x143;
    var __char1 = ____id30[0];
    var __s2 = ____id30[1];
    var ____r113 = unstash(Array.prototype.slice.call(arguments, 1));
    var ____x143 = destash33(__x143, ____r113);
    var ____id31 = ____r113;
    var __body19 = cut(____id31, 0);
    return ["set", ["get", "read-table", __char1], join(["fn", [__s2]], __body19)];
  }});
  setenv("define", {"_stash": true, "macro": function (name, x) {
    var ____r115 = unstash(Array.prototype.slice.call(arguments, 2));
    var __name5 = destash33(name, ____r115);
    var __x151 = destash33(x, ____r115);
    var ____id33 = ____r115;
    var __body21 = cut(____id33, 0);
    setenv(__name5, {"_stash": true, "variable": true});
    if (some63(__body21)) {
      return join(["%local-function", __name5], bind42(__x151, __body21));
    } else {
      return ["%local", __name5, __x151];
    }  }});
  setenv("define-global", {"_stash": true, "macro": function (name, x) {
    var ____r117 = unstash(Array.prototype.slice.call(arguments, 2));
    var __name7 = destash33(name, ____r117);
    var __x165 = destash33(x, ____r117);
    var ____id35 = ____r117;
    var __body23 = cut(____id35, 0);
    setenv(__name7, {"_stash": true, "toplevel": true, "variable": true});
    if (some63(__body23)) {
      return ["do", join(["%global-function", __name7], bind42(__x165, __body23)), ["%set", ["get", "_G", ["quote", compile(__name7)]], __name7]];
    } else {
      return ["do", ["%set", __name7, __x165], ["%set", ["get", "_G", ["quote", compile(__name7)]], __name7]];
    }  }});
  setenv("with-frame", {"_stash": true, "macro": function () {
    var __body25 = unstash(Array.prototype.slice.call(arguments, 0));
    var __x183 = unique("x");
    return ["do", ["add", "environment", ["obj"]], ["with", __x183, join(["do"], __body25), ["drop", "environment"]]];
  }});
  setenv("with-bindings", {"_stash": true, "macro": function (__x195) {
    var ____id38 = __x195;
    var __names1 = ____id38[0];
    var ____r119 = unstash(Array.prototype.slice.call(arguments, 1));
    var ____x195 = destash33(__x195, ____r119);
    var ____id39 = ____r119;
    var __body27 = cut(____id39, 0);
    var __x196 = unique("x");
    var ____x199 = ["setenv", __x196];
    ____x199.variable = true;
    return join(["with-frame", ["each", __x196, __names1, ____x199]], __body27);
  }});
  setenv("let-macro", {"_stash": true, "macro": function (definitions) {
    var ____r122 = unstash(Array.prototype.slice.call(arguments, 1));
    var __definitions1 = destash33(definitions, ____r122);
    var ____id41 = ____r122;
    var __body29 = cut(____id41, 0);
    add(environment, {});
    map(function (m) {
      return macroexpand(join(["define-macro"], m));
    }, __definitions1);
    var ____x203 = join(["do"], macroexpand(__body29));
    drop(environment);
    return ____x203;
  }});
  setenv("let-symbol", {"_stash": true, "macro": function (expansions) {
    var ____r126 = unstash(Array.prototype.slice.call(arguments, 1));
    var __expansions1 = destash33(expansions, ____r126);
    var ____id44 = ____r126;
    var __body31 = cut(____id44, 0);
    add(environment, {});
    map(function (__x211) {
      var ____id45 = __x211;
      var __name9 = ____id45[0];
      var __exp1 = ____id45[1];
      return macroexpand(["define-symbol", __name9, __exp1]);
    }, pair(__expansions1));
    var ____x210 = join(["do"], macroexpand(__body31));
    drop(environment);
    return ____x210;
  }});
  setenv("let-unique", {"_stash": true, "macro": function (names) {
    var ____r130 = unstash(Array.prototype.slice.call(arguments, 1));
    var __names3 = destash33(names, ____r130);
    var ____id47 = ____r130;
    var __body33 = cut(____id47, 0);
    var __bs3 = map(function (n) {
      return [n, ["unique", ["quote", n]]];
    }, __names3);
    return join(["let", apply(join, __bs3)], __body33);
  }});
  setenv("fn", {"_stash": true, "macro": function (args) {
    var ____r133 = unstash(Array.prototype.slice.call(arguments, 1));
    var __args9 = destash33(args, ____r133);
    var ____id49 = ____r133;
    var __body35 = cut(____id49, 0);
    return join(["%function"], bind42(__args9, __body35));
  }});
  setenv("apply", {"_stash": true, "macro": function (f) {
    var ____r135 = unstash(Array.prototype.slice.call(arguments, 1));
    var __f2 = destash33(f, ____r135);
    var ____id51 = ____r135;
    var __args111 = cut(____id51, 0);
    if (_35(__args111) > 1) {
      return ["%call", "apply", __f2, ["join", join(["list"], almost(__args111)), last(__args111)]];
    } else {
      return join(["%call", "apply", __f2], __args111);
    }  }});
  setenv("guard", {"_stash": true, "macro": function (expr) {
    return [["fn", join(), ["%try", ["list", true, expr]]]];
  }});
  setenv("each", {"_stash": true, "macro": function (x, t) {
    var ____r139 = unstash(Array.prototype.slice.call(arguments, 2));
    var __x253 = destash33(x, ____r139);
    var __t3 = destash33(t, ____r139);
    var ____id54 = ____r139;
    var __body37 = cut(____id54, 0);
    var __o16 = unique("o");
    var __n21 = unique("n");
    var __i27 = unique("i");
    var __e28;
    if (atom63(__x253)) {
      __e28 = [__i27, __x253];
    } else {
      var __e29;
      if (_35(__x253) > 1) {
        __e29 = __x253;
      } else {
        __e29 = [__i27, hd(__x253)];
      }      __e28 = __e29;
    }    var ____id55 = __e28;
    var __k26 = ____id55[0];
    var __v19 = ____id55[1];
    return ["let", [__o16, __t3, __k26, "nil"], ["%for", __o16, __k26, ["let", [__v19, ["get", __o16, __k26]], join(["let", __k26, ["if", ["numeric?", __k26], ["parseInt", __k26], __k26]], __body37)]]];
  }});
  setenv("for", {"_stash": true, "macro": function (i, to) {
    var ____r141 = unstash(Array.prototype.slice.call(arguments, 2));
    var __i29 = destash33(i, ____r141);
    var __to1 = destash33(to, ____r141);
    var ____id57 = ____r141;
    var __body39 = cut(____id57, 0);
    return ["let", __i29, 0, join(["while", ["<", __i29, __to1]], __body39, [["inc", __i29]])];
  }});
  setenv("step", {"_stash": true, "macro": function (v, t) {
    var ____r143 = unstash(Array.prototype.slice.call(arguments, 2));
    var __v21 = destash33(v, ____r143);
    var __t5 = destash33(t, ____r143);
    var ____id59 = ____r143;
    var __body41 = cut(____id59, 0);
    var __x284 = unique("x");
    var __i31 = unique("i");
    return ["let", [__x284, __t5], ["for", __i31, ["#", __x284], join(["let", [__v21, ["at", __x284, __i31]]], __body41)]];
  }});
  setenv("set-of", {"_stash": true, "macro": function () {
    var __xs13 = unstash(Array.prototype.slice.call(arguments, 0));
    var __l8 = [];
    var ____o18 = __xs13;
    var ____i33 = undefined;
    for (____i33 in ____o18) {
      var __x294 = ____o18[____i33];
      var __e30;
      if (numeric63(____i33)) {
        __e30 = parseInt(____i33);
      } else {
        __e30 = ____i33;
      }      var ____i331 = __e30;
      __l8[__x294] = true;
    }
    return join(["obj"], __l8);
  }});
  setenv("join!", {"_stash": true, "macro": function (a) {
    var ____r145 = unstash(Array.prototype.slice.call(arguments, 1));
    var __a4 = destash33(a, ____r145);
    var ____id61 = ____r145;
    var __bs5 = cut(____id61, 0);
    return ["set", __a4, join(["join", __a4], __bs5)];
  }});
  setenv("cat!", {"_stash": true, "macro": function (a) {
    var ____r147 = unstash(Array.prototype.slice.call(arguments, 1));
    var __a6 = destash33(a, ____r147);
    var ____id63 = ____r147;
    var __bs7 = cut(____id63, 0);
    return ["set", __a6, join(["cat", __a6], __bs7)];
  }});
  setenv("inc", {"_stash": true, "macro": function (n, by) {
    var __e31;
    if (nil63(by)) {
      __e31 = 1;
    } else {
      __e31 = by;
    }    return ["set", n, ["+", n, __e31]];
  }});
  setenv("dec", {"_stash": true, "macro": function (n, by) {
    var __e32;
    if (nil63(by)) {
      __e32 = 1;
    } else {
      __e32 = by;
    }    return ["set", n, ["-", n, __e32]];
  }});
  setenv("with-indent", {"_stash": true, "macro": function (form) {
    var __x317 = unique("x");
    return ["do", ["inc", "indent-level"], ["with", __x317, form, ["dec", "indent-level"]]];
  }});
  setenv("export", {"_stash": true, "macro": function () {
    var __names5 = unstash(Array.prototype.slice.call(arguments, 0));
    return join(["do"], map(function (k) {
      return ["set", ["get", "exports", ["quote", k]], k];
    }, __names5));
  }});
  setenv("when-compiling", {"_stash": true, "macro": function () {
    var __body43 = unstash(Array.prototype.slice.call(arguments, 0));
    return _eval(join(["do"], __body43));
  }});
  var __exports = {};
  getenv = function (k, p) {
    if (string63(k)) {
      var __i34 = edge(_G.environment);
      while (__i34 >= 0) {
        var __b3 = _G.environment[__i34][k];
        if (is63(__b3)) {
          var __e48;
          if (p) {
            __e48 = __b3[p];
          } else {
            __e48 = __b3;
          }          return __e48;
        } else {
          __i34 = __i34 - 1;
        }      }
    }
  };
  _G.getenv = getenv;
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
      }    }  };
  _G.quoted = quoted;
  var literal = function (s) {
    if (string_literal63(s)) {
      return s;
    } else {
      return quoted(s);
    }  };
  var stash42 = function (args) {
    if (keys63(args)) {
      var __l9 = ["%object", "\"_stash\"", true];
      var ____o19 = args;
      var __k27 = undefined;
      for (__k27 in ____o19) {
        var __v22 = ____o19[__k27];
        var __e49;
        if (numeric63(__k27)) {
          __e49 = parseInt(__k27);
        } else {
          __e49 = __k27;
        }        var __k28 = __e49;
        if (! number63(__k28)) {
          add(__l9, literal(__k28));
          add(__l9, __v22);
        }
      }
      return join(args, [__l9]);
    } else {
      return args;
    }  };
  var bias = function (k) {
    return k;
  };
  bind = function (lh, rh) {
    if (atom63(lh)) {
      return [lh, rh];
    } else {
      var __id64 = unique("id");
      var __bs8 = [__id64, rh];
      var ____o20 = lh;
      var __k29 = undefined;
      for (__k29 in ____o20) {
        var __v23 = ____o20[__k29];
        var __e50;
        if (numeric63(__k29)) {
          __e50 = parseInt(__k29);
        } else {
          __e50 = __k29;
        }        var __k30 = __e50;
        var __e51;
        if (__k30 === "rest") {
          __e51 = ["cut", __id64, _35(lh)];
        } else {
          __e51 = ["get", __id64, ["quote", bias(__k30)]];
        }        var __x337 = __e51;
        if (is63(__k30)) {
          var __e52;
          if (__v23 === true) {
            __e52 = __k30;
          } else {
            __e52 = __v23;
          }          var __k31 = __e52;
          __bs8 = join(__bs8, bind(__k31, __x337));
        }
      }
      return __bs8;
    }  };
  _G.bind = bind;
  setenv("arguments%", {"_stash": true, "macro": function (from) {
    return [["get", ["get", ["get", "Array", ["quote", "prototype"]], ["quote", "slice"]], ["quote", "call"]], "arguments", from];
  }});
  bind42 = function (args, body) {
    var __args12 = [];
    var rest = function () {
      __args12.rest = true;
      return ["unstash", ["arguments%", _35(__args12)]];
    };
    if (atom63(args)) {
      return [__args12, join(["let", [args, rest()]], body)];
    } else {
      var __bs9 = [];
      var __r175 = unique("r");
      var ____o21 = args;
      var __k32 = undefined;
      for (__k32 in ____o21) {
        var __v24 = ____o21[__k32];
        var __e53;
        if (numeric63(__k32)) {
          __e53 = parseInt(__k32);
        } else {
          __e53 = __k32;
        }        var __k33 = __e53;
        if (number63(__k33)) {
          if (atom63(__v24)) {
            add(__args12, __v24);
          } else {
            var __x360 = unique("x");
            add(__args12, __x360);
            __bs9 = join(__bs9, [__v24, __x360]);
          }        }
      }
      if (keys63(args)) {
        __bs9 = join(__bs9, [__r175, rest()]);
        var __n27 = _35(__args12);
        var __i38 = 0;
        while (__i38 < __n27) {
          var __v25 = __args12[__i38];
          __bs9 = join(__bs9, [__v25, ["destash!", __v25, __r175]]);
          __i38 = __i38 + 1;
        }
        __bs9 = join(__bs9, [keys(args), __r175]);
      }
      return [__args12, join(["let", __bs9], body)];
    }  };
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
  var expand_local = function (__x368) {
    var ____id65 = __x368;
    var __x369 = ____id65[0];
    var __name10 = ____id65[1];
    var __value = ____id65[2];
    setenv(__name10, {"_stash": true, "variable": true});
    return ["%local", __name10, macroexpand(__value)];
  };
  var expand_function = function (__x371) {
    var ____id66 = __x371;
    var __x372 = ____id66[0];
    var __args121 = ____id66[1];
    var __body44 = cut(____id66, 2);
    add(environment, {});
    var ____o22 = __args121;
    var ____i39 = undefined;
    for (____i39 in ____o22) {
      var ____x373 = ____o22[____i39];
      var __e54;
      if (numeric63(____i39)) {
        __e54 = parseInt(____i39);
      } else {
        __e54 = ____i39;
      }      var ____i391 = __e54;
      setenv(____x373, {"_stash": true, "variable": true});
    }
    var ____x374 = join(["%function", __args121], macroexpand(__body44));
    drop(environment);
    return ____x374;
  };
  var expand_definition = function (__x376) {
    var ____id67 = __x376;
    var __x377 = ____id67[0];
    var __name11 = ____id67[1];
    var __args13 = ____id67[2];
    var __body45 = cut(____id67, 3);
    add(environment, {});
    var ____o23 = __args13;
    var ____i40 = undefined;
    for (____i40 in ____o23) {
      var ____x378 = ____o23[____i40];
      var __e55;
      if (numeric63(____i40)) {
        __e55 = parseInt(____i40);
      } else {
        __e55 = ____i40;
      }      var ____i401 = __e55;
      setenv(____x378, {"_stash": true, "variable": true});
    }
    var ____x379 = join([__x377, __name11, __args13], macroexpand(__body45));
    drop(environment);
    return ____x379;
  };
  var expand_macro = function (form) {
    return macroexpand(expand1(form));
  };
  expand1 = function (__x381) {
    var ____id68 = __x381;
    var __name12 = ____id68[0];
    var __body46 = cut(____id68, 1);
    return apply(macro_function(__name12), __body46);
  };
  _G.expand1 = expand1;
  macroexpand = function (form) {
    if (symbol63(form)) {
      return macroexpand(symbol_expansion(form));
    } else {
      if (atom63(form)) {
        return form;
      } else {
        var __x382 = hd(form);
        if (__x382 === "%local") {
          return expand_local(form);
        } else {
          if (__x382 === "%function") {
            return expand_function(form);
          } else {
            if (__x382 === "%global-function") {
              return expand_definition(form);
            } else {
              if (__x382 === "%local-function") {
                return expand_definition(form);
              } else {
                if (macro63(__x382)) {
                  return expand_macro(form);
                } else {
                  return map(macroexpand, form);
                }              }            }          }        }      }    }  };
  _G.macroexpand = macroexpand;
  var quasiquote_list = function (form, depth) {
    var __xs14 = [["list"]];
    var ____o24 = form;
    var __k34 = undefined;
    for (__k34 in ____o24) {
      var __v26 = ____o24[__k34];
      var __e56;
      if (numeric63(__k34)) {
        __e56 = parseInt(__k34);
      } else {
        __e56 = __k34;
      }      var __k35 = __e56;
      if (! number63(__k35)) {
        var __e57;
        if (quasisplice63(__v26, depth)) {
          __e57 = quasiexpand(__v26[1]);
        } else {
          __e57 = quasiexpand(__v26, depth);
        }        var __v27 = __e57;
        last(__xs14)[__k35] = __v27;
      }
    }
    var ____x385 = form;
    var ____i42 = 0;
    while (____i42 < _35(____x385)) {
      var __x386 = ____x385[____i42];
      if (quasisplice63(__x386, depth)) {
        var __x387 = quasiexpand(__x386[1]);
        add(__xs14, __x387);
        add(__xs14, ["list"]);
      } else {
        add(last(__xs14), quasiexpand(__x386, depth));
      }      ____i42 = ____i42 + 1;
    }
    var __pruned = keep(function (x) {
      return _35(x) > 1 || !( hd(x) === "list") || keys63(x);
    }, __xs14);
    if (one63(__pruned)) {
      return hd(__pruned);
    } else {
      return join(["join"], __pruned);
    }  };
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
            }          }        }      }    } else {
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
          }        }      }    }  };
  _G.quasiexpand = quasiexpand;
  expand_if = function (__x391) {
    var ____id69 = __x391;
    var __a7 = ____id69[0];
    var __b4 = ____id69[1];
    var __c11 = cut(____id69, 2);
    if (is63(__b4)) {
      return [join(["%if", __a7, __b4], expand_if(__c11))];
    } else {
      if (is63(__a7)) {
        return [__a7];
      }
    }  };
  _G.expand_if = expand_if;
  indent_level = 0;
  _G.indent_level = indent_level;
  indentation = function () {
    var __s3 = "";
    var __i43 = 0;
    while (__i43 < indent_level) {
      __s3 = __s3 + "  ";
      __i43 = __i43 + 1;
    }
    return __s3;
  };
  _G.indentation = indentation;
  var reserved = {"=": true, "==": true, "+": true, "-": true, "%": true, "*": true, "/": true, "<": true, ">": true, "<=": true, ">=": true, "break": true, "case": true, "catch": true, "class": true, "const": true, "continue": true, "debugger": true, "default": true, "delete": true, "do": true, "else": true, "eval": true, "finally": true, "for": true, "function": true, "if": true, "import": true, "in": true, "instanceof": true, "let": true, "new": true, "return": true, "switch": true, "throw": true, "try": true, "typeof": true, "var": true, "void": true, "with": true};
  reserved63 = function (x) {
    return has63(reserved, x);
  };
  _G.reserved63 = reserved63;
  var valid_code63 = function (n) {
    return number_code63(n) || n > 64 && n < 91 || n > 96 && n < 123 || n === 95;
  };
  var id = function (id) {
    var __e58;
    if (number_code63(code(id, 0))) {
      __e58 = "_";
    } else {
      __e58 = "";
    }    var __id131 = __e58;
    var __i44 = 0;
    while (__i44 < _35(id)) {
      var __c2 = char(id, __i44);
      var __n31 = code(__c2);
      var __e59;
      if (__c2 === "-" && !( id === "-")) {
        __e59 = "_";
      } else {
        var __e60;
        if (valid_code63(__n31)) {
          __e60 = __c2;
        } else {
          var __e61;
          if (__i44 === 0) {
            __e61 = "_" + __n31;
          } else {
            __e61 = __n31;
          }          __e60 = __e61;
        }        __e59 = __e60;
      }      var __c12 = __e59;
      __id131 = __id131 + __c12;
      __i44 = __i44 + 1;
    }
    if (reserved63(__id131)) {
      return "_" + __id131;
    } else {
      return __id131;
    }  };
  valid_id63 = function (x) {
    return some63(x) && x === id(x);
  };
  _G.valid_id63 = valid_id63;
  var __names6 = {};
  unique = function (x) {
    var __x395 = id(x);
    if (__names6[__x395]) {
      var __i45 = __names6[__x395];
      __names6[__x395] = __names6[__x395] + 1;
      return unique(__x395 + __i45);
    } else {
      __names6[__x395] = 1;
      return "__" + __x395;
    }  };
  _G.unique = unique;
  key = function (k) {
    if (string_literal63(k)) {
      return k;
    } else {
      return "[" + k + "]";
    }  };
  _G.key = key;
  mapo = function (f, t) {
    var __o25 = [];
    var ____o26 = t;
    var __k36 = undefined;
    for (__k36 in ____o26) {
      var __v28 = ____o26[__k36];
      var __e62;
      if (numeric63(__k36)) {
        __e62 = parseInt(__k36);
      } else {
        __e62 = __k36;
      }      var __k37 = __e62;
      var __x396 = f(__v28);
      if (is63(__x396)) {
        add(__o25, literal(__k37));
        add(__o25, __x396);
      }
    }
    return __o25;
  };
  _G.mapo = mapo;
  var ____x398 = [];
  var ____x399 = [];
  ____x399.js = "!";
  ____x398.not = ____x399;
  var ____x400 = [];
  ____x400["*"] = true;
  ____x400["/"] = true;
  ____x400["%"] = true;
  var ____x401 = [];
  var ____x402 = [];
  ____x402.js = "+";
  ____x401.cat = ____x402;
  var ____x403 = [];
  ____x403["+"] = true;
  ____x403["-"] = true;
  var ____x404 = [];
  ____x404["<"] = true;
  ____x404[">"] = true;
  ____x404["<="] = true;
  ____x404[">="] = true;
  var ____x405 = [];
  var ____x406 = [];
  ____x406.js = "===";
  ____x405["="] = ____x406;
  var ____x407 = [];
  var ____x408 = [];
  ____x408.js = "&&";
  ____x407.and = ____x408;
  var ____x409 = [];
  var ____x410 = [];
  ____x410.js = "||";
  ____x409.or = ____x410;
  var infix = [____x398, ____x400, ____x401, ____x403, ____x404, ____x405, ____x407, ____x409];
  var unary63 = function (form) {
    return two63(form) && in63(hd(form), ["not", "-"]);
  };
  var index = function (k) {
    return k;
  };
  var precedence = function (form) {
    if (!( atom63(form) || unary63(form))) {
      var ____o27 = infix;
      var __k38 = undefined;
      for (__k38 in ____o27) {
        var __v29 = ____o27[__k38];
        var __e63;
        if (numeric63(__k38)) {
          __e63 = parseInt(__k38);
        } else {
          __e63 = __k38;
        }        var __k39 = __e63;
        if (__v29[hd(form)]) {
          return index(__k39);
        }
      }
    }
    return 0;
  };
  var getop = function (op) {
    return find(function (level) {
      var __x412 = level[op];
      if (__x412 === true) {
        return op;
      } else {
        if (is63(__x412)) {
          return __x412.js;
        }
      }    }, infix);
  };
  var infix63 = function (x) {
    return is63(getop(x));
  };
  infix_operator63 = function (x) {
    return obj63(x) && infix63(hd(x));
  };
  _G.infix_operator63 = infix_operator63;
  var compile_args = function (args) {
    var __s4 = "(";
    var __c3 = "";
    var ____x413 = args;
    var ____i48 = 0;
    while (____i48 < _35(____x413)) {
      var __x414 = ____x413[____i48];
      __s4 = __s4 + __c3 + compile(__x414);
      __c3 = ", ";
      ____i48 = ____i48 + 1;
    }
    return __s4 + ")";
  };
  var escape_newlines = function (s) {
    var __s12 = "";
    var __i49 = 0;
    while (__i49 < _35(s)) {
      var __c4 = char(s, __i49);
      var __e64;
      if (__c4 === "\n") {
        __e64 = "\\n";
      } else {
        var __e65;
        if (__c4 === "\r") {
          __e65 = "\\r";
        } else {
          __e65 = __c4;
        }        __e64 = __e65;
      }      __s12 = __s12 + __e64;
      __i49 = __i49 + 1;
    }
    return __s12;
  };
  var compile_atom = function (x) {
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
              }            } else {
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
                    }                  }                }              }            }          }        }      }    }  };
  var terminator = function (stmt63) {
    if (! stmt63) {
      return "";
    } else {
      return ";\n";
    }  };
  var compile_special = function (form, stmt63) {
    var ____id70 = form;
    var __x415 = ____id70[0];
    var __args14 = cut(____id70, 1);
    var ____id71 = getenv(__x415);
    var __special = ____id71.special;
    var __stmt = ____id71.stmt;
    var __self_tr63 = ____id71.tr;
    var __tr = terminator(stmt63 && ! __self_tr63);
    return apply(__special, __args14) + __tr;
  };
  var parenthesize_call63 = function (x) {
    return ! atom63(x) && hd(x) === "%function" || precedence(x) > 0;
  };
  compile_call = function (form) {
    var __f3 = hd(form);
    var __f11 = compile(__f3);
    var __args15 = compile_args(stash42(tl(form)));
    if (parenthesize_call63(__f3)) {
      return "(" + __f11 + ")" + __args15;
    } else {
      return __f11 + __args15;
    }  };
  _G.compile_call = compile_call;
  var op_delims = function (parent, child) {
    var ____r213 = unstash(Array.prototype.slice.call(arguments, 2));
    var __parent = destash33(parent, ____r213);
    var __child = destash33(child, ____r213);
    var ____id72 = ____r213;
    var __right = ____id72.right;
    var __e66;
    if (__right) {
      __e66 = _6261;
    } else {
      __e66 = _62;
    }    if (__e66(precedence(__child), precedence(__parent))) {
      return ["(", ")"];
    } else {
      return ["", ""];
    }  };
  var compile_infix = function (form) {
    var ____id73 = form;
    var __op = ____id73[0];
    var ____id74 = cut(____id73, 1);
    var __a8 = ____id74[0];
    var __b5 = ____id74[1];
    var ____id75 = op_delims(form, __a8);
    var __ao = ____id75[0];
    var __ac = ____id75[1];
    var ____id76 = op_delims(form, __b5, {"_stash": true, "right": true});
    var __bo = ____id76[0];
    var __bc = ____id76[1];
    var __a9 = compile(__a8);
    var __b6 = compile(__b5);
    var __op1 = getop(__op);
    if (unary63(form)) {
      return __op1 + __ao + " " + __a9 + __ac;
    } else {
      return __ao + __a9 + __ac + " " + __op1 + " " + __bo + __b6 + __bc;
    }  };
  compile_function = function (args, body) {
    var ____r215 = unstash(Array.prototype.slice.call(arguments, 2));
    var __args16 = destash33(args, ____r215);
    var __body47 = destash33(body, ____r215);
    var ____id77 = ____r215;
    var __name13 = ____id77.name;
    var __prefix = ____id77.prefix;
    var __e67;
    if (__name13) {
      __e67 = compile(__name13);
    } else {
      __e67 = "";
    }    var __id78 = __e67;
    var __args17 = compile_args(__args16);
    indent_level = indent_level + 1;
    var ____x418 = compile(__body47, {"_stash": true, "stmt": true});
    indent_level = indent_level - 1;
    var __body48 = ____x418;
    var __ind = indentation();
    var __e68;
    if (__prefix) {
      __e68 = __prefix + " ";
    } else {
      __e68 = "";
    }    var __p1 = __e68;
    var __tr1 = "";
    if (__name13) {
      __tr1 = __tr1 + "\n";
    }
    return "function " + __id78 + __args17 + " {\n" + __body48 + __ind + "}" + __tr1;
  };
  _G.compile_function = compile_function;
  var can_return63 = function (form) {
    return is63(form) && (atom63(form) || !( hd(form) === "return") && ! statement63(hd(form)));
  };
  compile = function (form) {
    var ____r217 = unstash(Array.prototype.slice.call(arguments, 1));
    var __form4 = destash33(form, ____r217);
    var ____id79 = ____r217;
    var __stmt1 = ____id79.stmt;
    if (nil63(__form4)) {
      return "";
    } else {
      if (special_form63(__form4)) {
        return compile_special(__form4, __stmt1);
      } else {
        var __tr2 = terminator(__stmt1);
        var __e69;
        if (__stmt1) {
          __e69 = indentation();
        } else {
          __e69 = "";
        }        var __ind1 = __e69;
        var __e70;
        if (atom63(__form4)) {
          __e70 = compile_atom(__form4);
        } else {
          var __e71;
          if (infix63(hd(__form4))) {
            __e71 = compile_infix(__form4);
          } else {
            __e71 = compile_call(__form4);
          }          __e70 = __e71;
        }        var __form5 = __e70;
        return __ind1 + __form5 + __tr2;
      }    }  };
  _G.compile = compile;
  var lower_statement = function (form, tail63) {
    var __hoist = [];
    var __e33 = lower(form, __hoist, true, tail63);
    var __e72;
    if (some63(__hoist) && is63(__e33)) {
      __e72 = join(["do"], __hoist, [__e33]);
    } else {
      var __e73;
      if (is63(__e33)) {
        __e73 = __e33;
      } else {
        var __e74;
        if (_35(__hoist) > 1) {
          __e74 = join(["do"], __hoist);
        } else {
          __e74 = hd(__hoist);
        }        __e73 = __e74;
      }      __e72 = __e73;
    }    return either(__e72, ["do"]);
  };
  var lower_body = function (body, tail63) {
    return lower_statement(join(["do"], body), tail63);
  };
  var literal63 = function (form) {
    return atom63(form) || hd(form) === "%array" || hd(form) === "%object";
  };
  var standalone63 = function (form) {
    return ! atom63(form) && ! infix63(hd(form)) && ! literal63(form) && !( "get" === hd(form)) && !( "%statement" === hd(form)) || id_literal63(form);
  };
  var lower_do = function (args, hoist, stmt63, tail63) {
    var ____x424 = almost(args);
    var ____i50 = 0;
    while (____i50 < _35(____x424)) {
      var __x425 = ____x424[____i50];
      var ____y6 = lower(__x425, hoist, stmt63);
      if (yes(____y6)) {
        var __e34 = ____y6;
        if (standalone63(__e34)) {
          add(hoist, __e34);
        }
      }
      ____i50 = ____i50 + 1;
    }
    var __e35 = lower(last(args), hoist, stmt63, tail63);
    if (tail63 && can_return63(__e35)) {
      return ["return", __e35];
    } else {
      return __e35;
    }  };
  var lower_set = function (args, hoist, stmt63, tail63) {
    var ____id80 = args;
    var __lh4 = ____id80[0];
    var __rh4 = ____id80[1];
    add(hoist, ["%set", lower(__lh4, hoist), lower(__rh4, hoist)]);
    if (!( stmt63 && ! tail63)) {
      return __lh4;
    }
  };
  var lower_if = function (args, hoist, stmt63, tail63) {
    var ____id81 = args;
    var __cond4 = ____id81[0];
    var __then = ____id81[1];
    var ___else = ____id81[2];
    if (stmt63) {
      var __e76;
      if (is63(___else)) {
        __e76 = [lower_body([___else], tail63)];
      }
      return add(hoist, join(["%if", lower(__cond4, hoist), lower_body([__then], tail63)], __e76));
    } else {
      var __e36 = unique("e");
      add(hoist, ["%local", __e36]);
      var __e75;
      if (is63(___else)) {
        __e75 = [lower(["%set", __e36, ___else])];
      }
      add(hoist, join(["%if", lower(__cond4, hoist), lower(["%set", __e36, __then])], __e75));
      return __e36;
    }  };
  var lower_short = function (x, args, hoist) {
    var ____id82 = args;
    var __a10 = ____id82[0];
    var __b7 = ____id82[1];
    var __hoist1 = [];
    var __b11 = lower(__b7, __hoist1);
    if (some63(__hoist1)) {
      var __id83 = unique("id");
      var __e77;
      if (x === "and") {
        __e77 = ["%if", __id83, __b7, __id83];
      } else {
        __e77 = ["%if", __id83, __id83, __b7];
      }      return lower(["do", ["%local", __id83, __a10], __e77], hoist);
    } else {
      return [x, lower(__a10, hoist), __b11];
    }  };
  var lower_try = function (args, hoist, tail63) {
    return add(hoist, ["%try", lower_body(args, tail63)]);
  };
  var lower_while = function (args, hoist) {
    var ____id84 = args;
    var __c5 = ____id84[0];
    var __body49 = cut(____id84, 1);
    var __pre = [];
    var __c6 = lower(__c5, __pre);
    var __e78;
    if (none63(__pre)) {
      __e78 = ["while", __c6, lower_body(__body49)];
    } else {
      __e78 = ["while", true, join(["do"], __pre, [["%if", ["not", __c6], ["break"]], lower_body(__body49)])];
    }    return add(hoist, __e78);
  };
  var lower_for = function (args, hoist) {
    var ____id85 = args;
    var __t6 = ____id85[0];
    var __k40 = ____id85[1];
    var __body50 = cut(____id85, 2);
    return add(hoist, ["%for", lower(__t6, hoist), __k40, lower_body(__body50)]);
  };
  var lower_function = function (args) {
    var ____id86 = args;
    var __a11 = ____id86[0];
    var __body51 = cut(____id86, 1);
    return ["%function", __a11, lower_body(__body51, true)];
  };
  var lower_definition = function (kind, args, hoist) {
    var ____id87 = args;
    var __name14 = ____id87[0];
    var __args18 = ____id87[1];
    var __body52 = cut(____id87, 2);
    return add(hoist, [kind, __name14, __args18, lower_body(__body52, true)]);
  };
  var lower_call = function (form, hoist) {
    var __form6 = map(function (x) {
      return lower(x, hoist);
    }, form);
    if (some63(__form6)) {
      return __form6;
    }
  };
  var pairwise63 = function (form) {
    return in63(hd(form), ["<", "<=", "=", ">=", ">"]);
  };
  var lower_pairwise = function (form) {
    if (pairwise63(form)) {
      var __e37 = [];
      var ____id88 = form;
      var __x454 = ____id88[0];
      var __args19 = cut(____id88, 1);
      reduce(function (a, b) {
        add(__e37, [__x454, a, b]);
        return a;
      }, __args19);
      return join(["and"], reverse(__e37));
    } else {
      return form;
    }  };
  var lower_infix63 = function (form) {
    return infix63(hd(form)) && _35(form) > 3;
  };
  var lower_infix = function (form, hoist) {
    var __form7 = lower_pairwise(form);
    var ____id89 = __form7;
    var __x457 = ____id89[0];
    var __args20 = cut(____id89, 1);
    return lower(reduce(function (a, b) {
      return [__x457, b, a];
    }, reverse(__args20)), hoist);
  };
  var lower_special = function (form, hoist) {
    var __e38 = lower_call(form, hoist);
    if (__e38) {
      return add(hoist, __e38);
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
            var ____id90 = form;
            var __x460 = ____id90[0];
            var __args21 = cut(____id90, 1);
            if (__x460 === "do") {
              return lower_do(__args21, hoist, stmt63, tail63);
            } else {
              if (__x460 === "%call") {
                return lower(__args21, hoist, stmt63, tail63);
              } else {
                if (__x460 === "%set") {
                  return lower_set(__args21, hoist, stmt63, tail63);
                } else {
                  if (__x460 === "%if") {
                    return lower_if(__args21, hoist, stmt63, tail63);
                  } else {
                    if (__x460 === "%try") {
                      return lower_try(__args21, hoist, tail63);
                    } else {
                      if (__x460 === "while") {
                        return lower_while(__args21, hoist);
                      } else {
                        if (__x460 === "%for") {
                          return lower_for(__args21, hoist);
                        } else {
                          if (__x460 === "%function") {
                            return lower_function(__args21);
                          } else {
                            if (__x460 === "%local-function" || __x460 === "%global-function") {
                              return lower_definition(__x460, __args21, hoist);
                            } else {
                              if (in63(__x460, ["and", "or"])) {
                                return lower_short(__x460, __args21, hoist);
                              } else {
                                if (statement63(__x460)) {
                                  return lower_special(form, hoist);
                                } else {
                                  return lower_call(form, hoist);
                                }                              }                            }                          }                        }                      }                    }                  }                }              }            }          }        }      }    }  };
  _G.lower = lower;
  expand = function (form) {
    return lower(macroexpand(form));
  };
  _G.expand = expand;
  var vm = require("vm");
  var context = function (ctx) {
    var __sandbox = vm.createContext(ctx);
    __sandbox._G = __sandbox;
    return __sandbox;
  };
  context(_G);
  var run = function (code, sandbox) {
    return vm.runInContext(code, sandbox || _G);
  };
  _eval = function (form) {
    var __code = compile(expand(["set", "%result", form]));
    return run(__code);
  };
  _G._eval = _eval;
  immediate_call63 = function (x) {
    return obj63(x) && obj63(hd(x)) && hd(hd(x)) === "%function";
  };
  _G.immediate_call63 = immediate_call63;
  setenv("%call", {"_stash": true, "special": function () {
    var __form9 = unstash(Array.prototype.slice.call(arguments, 0));
    return compile_call(__form9);
  }});
  setenv("do", {"_stash": true, "special": function () {
    var __forms3 = unstash(Array.prototype.slice.call(arguments, 0));
    var __s6 = "";
    var ____x465 = __forms3;
    var ____i52 = 0;
    while (____i52 < _35(____x465)) {
      var __x466 = ____x465[____i52];
      __s6 = __s6 + compile(__x466, {"_stash": true, "stmt": true});
      if (! atom63(__x466)) {
        if (hd(__x466) === "return" || hd(__x466) === "break") {
          break;
        }
      }
      ____i52 = ____i52 + 1;
    }
    return __s6;
  }, "stmt": true, "tr": true});
  setenv("%if", {"_stash": true, "special": function (cond, cons, alt) {
    var __cond6 = compile(cond);
    indent_level = indent_level + 1;
    var ____x469 = compile(cons, {"_stash": true, "stmt": true});
    indent_level = indent_level - 1;
    var __cons1 = ____x469;
    var __e79;
    if (alt) {
      indent_level = indent_level + 1;
      var ____x470 = compile(alt, {"_stash": true, "stmt": true});
      indent_level = indent_level - 1;
      __e79 = ____x470;
    }
    var __alt1 = __e79;
    var __ind3 = indentation();
    var __s8 = "";
    __s8 = __s8 + __ind3 + "if (" + __cond6 + ") {\n" + __cons1 + __ind3 + "}";
    if (__alt1) {
      __s8 = __s8 + " else {\n" + __alt1 + __ind3 + "}";
      return __s8;
    } else {
      return __s8 + "\n";
    }  }, "stmt": true, "tr": true});
  setenv("while", {"_stash": true, "special": function (cond, form) {
    var __cond8 = compile(cond);
    indent_level = indent_level + 1;
    var ____x472 = compile(form, {"_stash": true, "stmt": true});
    indent_level = indent_level - 1;
    var __body54 = ____x472;
    var __ind5 = indentation();
    return __ind5 + "while (" + __cond8 + ") {\n" + __body54 + __ind5 + "}\n";
  }, "stmt": true, "tr": true});
  setenv("%for", {"_stash": true, "special": function (t, k, form) {
    var __t8 = compile(t);
    var __ind7 = indentation();
    indent_level = indent_level + 1;
    var ____x474 = compile(form, {"_stash": true, "stmt": true});
    indent_level = indent_level - 1;
    var __body56 = ____x474;
    return __ind7 + "for (" + k + " in " + __t8 + ") {\n" + __body56 + __ind7 + "}\n";
  }, "stmt": true, "tr": true});
  setenv("%try", {"_stash": true, "special": function (form) {
    var __e41 = unique("e");
    var __ind9 = indentation();
    indent_level = indent_level + 1;
    var ____x479 = compile(form, {"_stash": true, "stmt": true});
    indent_level = indent_level - 1;
    var __body58 = ____x479;
    var __hf1 = ["return", ["%array", false, __e41]];
    indent_level = indent_level + 1;
    var ____x482 = compile(__hf1, {"_stash": true, "stmt": true});
    indent_level = indent_level - 1;
    var __h1 = ____x482;
    return __ind9 + "try {\n" + __body58 + __ind9 + "}\n" + __ind9 + "catch (" + __e41 + ") {\n" + __h1 + __ind9 + "}\n";
  }, "stmt": true, "tr": true});
  setenv("%delete", {"_stash": true, "special": function (place) {
    return indentation() + "delete " + compile(place);
  }, "stmt": true});
  setenv("break", {"_stash": true, "special": function () {
    return indentation() + "break";
  }, "stmt": true});
  setenv("%function", {"_stash": true, "special": function (args, body) {
    return compile_function(args, body);
  }});
  setenv("%global-function", {"_stash": true, "special": function (name, args, body) {
    return compile(["%set", name, ["%function", args, body]], {"_stash": true, "stmt": true});
  }, "stmt": true, "tr": true});
  setenv("%local-function", {"_stash": true, "special": function (name, args, body) {
    return compile(["%local", name, ["%function", args, body]], {"_stash": true, "stmt": true});
  }, "stmt": true, "tr": true});
  setenv("return", {"_stash": true, "special": function (x) {
    var __e80;
    if (nil63(x)) {
      __e80 = "return";
    } else {
      __e80 = "return " + compile(x);
    }    var __x492 = __e80;
    return indentation() + __x492;
  }, "stmt": true});
  setenv("new", {"_stash": true, "special": function (x) {
    return "new " + compile(x);
  }});
  setenv("typeof", {"_stash": true, "special": function (x) {
    return "typeof(" + compile(x) + ")";
  }});
  setenv("error", {"_stash": true, "special": function (x) {
    var __e44 = "throw " + compile(["new", ["Error", x]]);
    return indentation() + __e44;
  }, "stmt": true});
  setenv("%local", {"_stash": true, "special": function (name, value) {
    var __id92 = compile(name);
    var __value11 = compile(value);
    var __e81;
    if (is63(value)) {
      __e81 = " = " + __value11;
    } else {
      __e81 = "";
    }    var __rh6 = __e81;
    var __keyword1 = "var ";
    var __ind11 = indentation();
    return __ind11 + __keyword1 + __id92 + __rh6;
  }, "stmt": true});
  setenv("%set", {"_stash": true, "special": function (lh, rh) {
    var __lh6 = compile(lh);
    var __e82;
    if (nil63(rh)) {
      __e82 = "nil";
    } else {
      __e82 = rh;
    }    var __rh8 = compile(__e82);
    return indentation() + __lh6 + " = " + __rh8;
  }, "stmt": true});
  setenv("get", {"_stash": true, "special": function (t, k) {
    var __t12 = compile(t);
    var __k121 = compile(k);
    if (infix_operator63(t)) {
      __t12 = "(" + __t12 + ")";
    }
    if (string_literal63(k) && valid_id63(inner(k))) {
      return __t12 + "." + inner(k);
    } else {
      return __t12 + "[" + __k121 + "]";
    }  }});
  setenv("%array", {"_stash": true, "special": function () {
    var __forms5 = unstash(Array.prototype.slice.call(arguments, 0));
    var __open1 = "[";
    var __close1 = "]";
    var __s10 = "";
    var __c8 = "";
    var ____o29 = __forms5;
    var __k43 = undefined;
    for (__k43 in ____o29) {
      var __v31 = ____o29[__k43];
      var __e83;
      if (numeric63(__k43)) {
        __e83 = parseInt(__k43);
      } else {
        __e83 = __k43;
      }      var __k44 = __e83;
      if (number63(__k44)) {
        __s10 = __s10 + __c8 + compile(__v31);
        __c8 = ", ";
      }
    }
    return __open1 + __s10 + __close1;
  }});
  setenv("%object", {"_stash": true, "special": function () {
    var __forms7 = unstash(Array.prototype.slice.call(arguments, 0));
    var __s121 = "{";
    var __c10 = "";
    var __sep1 = ": ";
    var ____x498 = pair(__forms7);
    var ____i56 = 0;
    while (____i56 < _35(____x498)) {
      var ____id94 = ____x498[____i56];
      var __k46 = ____id94[0];
      var __v33 = ____id94[1];
      __s121 = __s121 + __c10 + key(compile(__k46)) + __sep1 + compile(__v33);
      __c10 = ", ";
      ____i56 = ____i56 + 1;
    }
    return __s121 + "}";
  }});
  setenv("%literal", {"_stash": true, "special": function () {
    var __args23 = unstash(Array.prototype.slice.call(arguments, 0));
    var __s14 = "";
    var ____x501 = __args23;
    var ____i58 = 0;
    while (____i58 < _35(____x501)) {
      var __x502 = ____x501[____i58];
      if (string_literal63(__x502)) {
        __s14 = __s14 + _eval(__x502);
      } else {
        __s14 = __s14 + compile(__x502);
      }      ____i58 = ____i58 + 1;
    }
    return __s14;
  }});
  setenv("%statement", {"_stash": true, "special": function () {
    var __args25 = unstash(Array.prototype.slice.call(arguments, 0));
    var __s16 = indentation();
    var ____x505 = __args25;
    var ____i60 = 0;
    while (____i60 < _35(____x505)) {
      var __x506 = ____x505[____i60];
      if (string_literal63(__x506)) {
        __s16 = __s16 + _eval(__x506);
      } else {
        __s16 = __s16 + compile(__x506);
      }      ____i60 = ____i60 + 1;
    }
    __s16 = __s16 + "\n";
    return __s16;
  }, "stmt": true, "tr": true});
  setenv("%indentation", {"_stash": true, "special": function () {
    return indentation();
  }});
  __exports.context = context;
  __exports.run = run;
  __exports["eval"] = _eval;
  __exports.expand = expand;
  __exports.compile = compile;
  _G.compiler = __exports;
  var __exports1 = {};
  var delimiters = {"(": true, ")": true, ";": true, "\r": true, "\n": true};
  var whitespace = {" ": true, "\t": true, "\r": true, "\n": true};
  var stream = function (str, more) {
    return {"pos": 0, "string": str, "len": _35(str), "more": more};
  };
  var peek_char = function (s) {
    var ____id95 = s;
    var __pos = ____id95.pos;
    var __len = ____id95.len;
    var __string = ____id95.string;
    if (__pos < __len) {
      return char(__string, __pos);
    }
  };
  var read_char = function (s) {
    var __c111 = peek_char(s);
    if (__c111) {
      s.pos = s.pos + 1;
      return __c111;
    }
  };
  var skip_non_code = function (s) {
    while (true) {
      var __c121 = peek_char(s);
      if (nil63(__c121)) {
        break;
      } else {
        if (whitespace[__c121]) {
          read_char(s);
        } else {
          if (__c121 === ";") {
            while (__c121 && !( __c121 === "\n")) {
              __c121 = read_char(s);
            }
            skip_non_code(s);
          } else {
            break;
          }        }      }    }
  };
  var read_table = {};
  var eof = {};
  var read = function (s) {
    skip_non_code(s);
    var __c13 = peek_char(s);
    if (is63(__c13)) {
      return (read_table[__c13] || read_table[""])(s);
    } else {
      return eof;
    }  };
  var read_all = function (s) {
    var __l10 = [];
    while (true) {
      var __form10 = read(s);
      if (__form10 === eof) {
        break;
      }
      add(__l10, __form10);
    }
    return __l10;
  };
  read_string = function (str, more) {
    var __x507 = read(stream(str, more));
    if (!( __x507 === eof)) {
      return __x507;
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
    var ____id96 = s;
    var __more = ____id96.more;
    var __pos1 = ____id96.pos;
    var __id97 = __more;
    var __e84;
    if (__id97) {
      __e84 = __id97;
    } else {
      throw new Error("Expected " + c + " at " + __pos1);
      __e84 = undefined;
    }    return __e84;
  };
  var wrap = function (s, x) {
    var __y7 = read(s);
    if (__y7 === s.more) {
      return __y7;
    } else {
      return [x, __y7];
    }  };
  var hex_prefix63 = function (str) {
    var __e85;
    if (code(str, 0) === 45) {
      __e85 = 1;
    } else {
      __e85 = 0;
    }    var __i61 = __e85;
    var __id98 = code(str, __i61) === 48;
    var __e86;
    if (__id98) {
      __i61 = __i61 + 1;
      var __n36 = code(str, __i61);
      __e86 = __n36 === 120 || __n36 === 88;
    } else {
      __e86 = __id98;
    }    return __e86;
  };
  var maybe_number = function (str) {
    if (hex_prefix63(str)) {
      return parseInt(str, 16);
    } else {
      if (number_code63(code(str, edge(str)))) {
        return number(str);
      }
    }  };
  var real63 = function (x) {
    return number63(x) && ! nan63(x) && ! inf63(x);
  };
  read_table[""] = function (s) {
    var __str = "";
    while (true) {
      var __c14 = peek_char(s);
      if (__c14 && (! whitespace[__c14] && ! delimiters[__c14])) {
        __str = __str + read_char(s);
      } else {
        break;
      }    }
    if (__str === "true") {
      return true;
    } else {
      if (__str === "false") {
        return false;
      } else {
        var __n37 = maybe_number(__str);
        if (real63(__n37)) {
          return __n37;
        } else {
          return __str;
        }      }    }  };
  read_table["("] = function (s) {
    read_char(s);
    var __r296 = undefined;
    var __l111 = [];
    while (nil63(__r296)) {
      skip_non_code(s);
      var __c15 = peek_char(s);
      if (__c15 === ")") {
        read_char(s);
        __r296 = __l111;
      } else {
        if (nil63(__c15)) {
          __r296 = expected(s, ")");
        } else {
          var __x509 = read(s);
          if (key63(__x509)) {
            var __k47 = clip(__x509, 0, edge(__x509));
            var __v34 = read(s);
            __l111[__k47] = __v34;
          } else {
            if (flag63(__x509)) {
              __l111[clip(__x509, 1)] = true;
            } else {
              add(__l111, __x509);
            }          }        }      }    }
    return __r296;
  };
  read_table[")"] = function (s) {
    throw new Error("Unexpected ) at " + s.pos);
  };
  read_table["\""] = function (s) {
    read_char(s);
    var __r299 = undefined;
    var __str1 = "\"";
    while (nil63(__r299)) {
      var __c16 = peek_char(s);
      if (__c16 === "\"") {
        __r299 = __str1 + read_char(s);
      } else {
        if (nil63(__c16)) {
          __r299 = expected(s, "\"");
        } else {
          if (__c16 === "\\") {
            __str1 = __str1 + read_char(s);
          }
          __str1 = __str1 + read_char(s);
        }      }    }
    return __r299;
  };
  read_table["|"] = function (s) {
    read_char(s);
    var __r301 = undefined;
    var __str2 = "|";
    while (nil63(__r301)) {
      var __c17 = peek_char(s);
      if (__c17 === "|") {
        __r301 = __str2 + read_char(s);
      } else {
        if (nil63(__c17)) {
          __r301 = expected(s, "|");
        } else {
          __str2 = __str2 + read_char(s);
        }      }    }
    return __r301;
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
    }  };
  __exports1.stream = stream;
  __exports1.read = read;
  __exports1["read-all"] = read_all;
  __exports1["read-string"] = read_string;
  __exports1["read-table"] = read_table;
  _G.reader = __exports1;
  var __exports2 = {};
  var fs = require("fs");
  var child_process = require("child_process");
  var read_file = function (path) {
    return fs.readFileSync(path, "utf8");
  };
  var write_file = function (path, data) {
    return fs.writeFileSync(path, data, "utf8");
  };
  var file_exists63 = function (path) {
    return fs.existsSync(path, "utf8") && fs.statSync(path).isFile();
  };
  var directory_exists63 = function (path) {
    return fs.existsSync(path, "utf8") && fs.statSync(path).isDirectory();
  };
  var path_separator = require("path").sep;
  var path_join = function () {
    var __parts = unstash(Array.prototype.slice.call(arguments, 0));
    return reduce(function (x, y) {
      return x + path_separator + y;
    }, __parts) || "";
  };
  var get_environment_variable = function (name) {
    return process.env[name];
  };
  var set_environment_variable = function (name, value) {
    process.env[name] = value;
    return process.env[name];
  };
  var write = function (x) {
    var __out = process.stdout;
    return __out.write(x);
  };
  var exit = function (code) {
    return process.exit(code);
  };
  var argv = cut(process.argv, 2);
  var reload = function (module) {
    delete require.cache[require.resolve(module)];
    return require(module);
  };
  var shell = function (command) {
    return child_process.execSync(command).toString();
  };
  __exports2["read-file"] = read_file;
  __exports2["write-file"] = write_file;
  __exports2["file-exists?"] = file_exists63;
  __exports2["directory-exists?"] = directory_exists63;
  __exports2["path-separator"] = path_separator;
  __exports2["path-join"] = path_join;
  __exports2["get-environment-variable"] = get_environment_variable;
  __exports2.write = write;
  __exports2.exit = exit;
  __exports2.argv = argv;
  __exports2.reload = reload;
  __exports2.shell = shell;
  _G.system = __exports2;
  var __exports3 = _G;
  var reader = _G.reader;
  var compiler = _G.compiler;
  var system = _G.system;
  var eval_print = function (form) {
    var ____id99 = (function () {
      try {
        return [true, compiler["eval"](form)];
      }
      catch (__e87) {
        return [false, __e87];
      }
    })();
    var __ok = ____id99[0];
    var __v35 = ____id99[1];
    if (! __ok) {
      return print(__v35.stack);
    } else {
      if (is63(__v35)) {
        return print(str(__v35));
      }
    }  };
  var rep = function (s) {
    return eval_print(reader["read-string"](s));
  };
  var repl = function () {
    var __buf = "";
    var rep1 = function (s) {
      __buf = __buf + s;
      var __more1 = [];
      var __form11 = reader["read-string"](__buf, __more1);
      if (!( __form11 === __more1)) {
        eval_print(__form11);
        __buf = "";
        return system.write("> ");
      }
    };
    system.write("> ");
    var ___in = process.stdin;
    ___in.removeAllListeners();
    return ___in.on("data", rep1);
  };
  expand_file = function (path) {
    var __s17 = reader.stream(system["read-file"](path));
    var __body59 = reader["read-all"](__s17);
    return compiler.expand(join(["do"], __body59));
  };
  _G.expand_file = expand_file;
  compile_file = function (path) {
    var __body60 = expand_file(path);
    var __form12 = compiler.expand(join(["do"], __body60));
    return compiler.compile(__form12, {"_stash": true, "stmt": true});
  };
  _G.compile_file = compile_file;
  load = function (path) {
    var __code1 = compile_file(path);
    return compiler.run(__code1);
  };
  _G.load = load;
  var script_file63 = function (path) {
    return !( "-" === char(path, 0) || ".js" === clip(path, _35(path) - 3));
  };
  var run_file = function (path) {
    if (script_file63(path)) {
      return load(path);
    } else {
      return compiler.run(system["read-file"](path));
    }  };
  var usage = function () {
    print("usage: dax [<file> <arguments> | options <object files>]");
    print(" <file>\t\tProgram read from script file");
    print(" <arguments>\tPassed to program in system.argv");
    print(" <object files>\tLoaded before compiling <input>");
    print("options:");
    print(" -c <input>\tCompile input file");
    print(" -o <output>\tOutput file");
    return print(" -e <expr>\tExpression to evaluate");
  };
  var main = function () {
    var __arg = hd(system.argv);
    if (__arg && script_file63(__arg)) {
      return load(__arg);
    } else {
      if (__arg === "-h" || __arg === "--help") {
        return usage();
      } else {
        var __pre1 = [];
        var __input = undefined;
        var __output = undefined;
        var __expr2 = undefined;
        var __argv = system.argv;
        var __i62 = 0;
        while (__i62 < _35(__argv)) {
          var __a12 = __argv[__i62];
          if (__a12 === "-c" || __a12 === "-o" || __a12 === "-t" || __a12 === "-e") {
            if (__i62 === edge(__argv)) {
              print("missing argument for " + __a12);
            } else {
              __i62 = __i62 + 1;
              var __val2 = __argv[__i62];
              if (__a12 === "-c") {
                __input = __val2;
              } else {
                if (__a12 === "-o") {
                  __output = __val2;
                } else {
                  if (__a12 === "-e") {
                    __expr2 = __val2;
                  }
                }              }            }          } else {
            if (!( "-" === char(__a12, 0))) {
              add(__pre1, __a12);
            }
          }          __i62 = __i62 + 1;
        }
        var ____x513 = __pre1;
        var ____i63 = 0;
        while (____i63 < _35(____x513)) {
          var __file = ____x513[____i63];
          run_file(__file);
          ____i63 = ____i63 + 1;
        }
        if (nil63(__input)) {
          if (__expr2) {
            return rep(__expr2);
          } else {
            return repl();
          }        } else {
          var __code2 = compile_file(__input);
          if (nil63(__output) || __output === "-") {
            return print(__code2);
          } else {
            return system["write-file"](__output, __code2);
          }        }      }    }  };
  __exports3.reader = reader;
  __exports3.compiler = compiler;
  __exports3.system = system;
  __exports3["eval-print"] = eval_print;
  __exports3.rep = rep;
  __exports3.repl = repl;
  __exports3["compile-file"] = compile_file;
  __exports3.load = load;
  __exports3["script-file?"] = script_file63;
  __exports3["run-file"] = run_file;
  __exports3.usage = usage;
  __exports3.main = main;
  return _G;
};
module.exports.create = create;
