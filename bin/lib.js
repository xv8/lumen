var create = function (_G) {
  _G._G = _G;
  _G.environment = [{}];
  _G.target = "js";
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
          }
          var __k5 = __e4;
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
      }
      var ____i61 = __e5;
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
        }
      };
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
    var ____o5 = t;
    var __k8 = undefined;
    for (__k8 in ____o5) {
      var __v5 = ____o5[__k8];
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
    var ____o6 = t;
    var ____i12 = undefined;
    for (____i12 in ____o6) {
      var __x23 = ____o6[____i12];
      var __e9;
      if (numeric63(____i12)) {
        __e9 = parseInt(____i12);
      } else {
        __e9 = ____i12;
      }
      var ____i121 = __e9;
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
        var ____o8 = __l2;
        var __k12 = undefined;
        for (__k12 in ____o8) {
          var __v7 = ____o8[__k12];
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
      var ____o9 = l;
      var __k14 = undefined;
      for (__k14 in ____o9) {
        var __v8 = ____o9[__k14];
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
                          var ____o11 = join(__xs11, __ks);
                          var ____i22 = undefined;
                          for (____i22 in ____o11) {
                            var __v10 = ____o11[____i22];
                            var __e18;
                            if (numeric63(____i22)) {
                              __e18 = parseInt(____i22);
                            } else {
                              __e18 = ____i22;
                            }
                            var ____i221 = __e18;
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
      var __e19;
      if (__keys.toplevel) {
        __e19 = hd(_G.environment);
      } else {
        __e19 = last(_G.environment);
      }
      var __frame = __e19;
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
        }
        var __k20 = __e20;
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
    var __args2 = unstash(Array.prototype.slice.call(arguments, 0));
    return join(["do"], map(function (__x25) {
      var ____id2 = __x25;
      var __lh = ____id2[0];
      var __rh = ____id2[1];
      return ["%set", __lh, __rh];
    }, pair(__args2)));
  }});
  setenv("at", {_stash: true, macro: function (l, i) {
    if (_G.target === "lua" && number63(i)) {
      i = i + 1;
    } else {
      if (_G.target === "lua") {
        i = ["+", i, 1];
      }
    }
    return ["get", l, i];
  }});
  setenv("wipe", {_stash: true, macro: function (place) {
    if (_G.target === "lua") {
      return ["set", place, "nil"];
    } else {
      return ["%delete", place];
    }
  }});
  setenv("list", {_stash: true, macro: function () {
    var __body = unstash(Array.prototype.slice.call(arguments, 0));
    var __x31 = unique("x");
    var __l5 = [];
    var __forms = [];
    var ____o13 = __body;
    var __k21 = undefined;
    for (__k21 in ____o13) {
      var __v12 = ____o13[__k21];
      var __e21;
      if (numeric63(__k21)) {
        __e21 = parseInt(__k21);
      } else {
        __e21 = __k21;
      }
      var __k22 = __e21;
      if (number63(__k22)) {
        __l5[__k22] = __v12;
      } else {
        add(__forms, ["set", ["get", __x31, ["quote", __k22]], __v12]);
      }
    }
    if (some63(__forms)) {
      return join(["let", __x31, join(["%array"], __l5)], __forms, [__x31]);
    } else {
      return join(["%array"], __l5);
    }
  }});
  setenv("if", {_stash: true, macro: function () {
    var __branches = unstash(Array.prototype.slice.call(arguments, 0));
    return hd(expand_if(__branches));
  }});
  setenv("case", {_stash: true, macro: function (expr) {
    var ____r83 = unstash(Array.prototype.slice.call(arguments, 1));
    var __expr = destash33(expr, ____r83);
    var ____id3 = ____r83;
    var __clauses = cut(____id3, 0);
    var __x39 = unique("x");
    var __eq = function (_) {
      return ["=", ["quote", _], __x39];
    };
    var __cl = function (__x42) {
      var ____id4 = __x42;
      var __a1 = ____id4[0];
      var __b1 = ____id4[1];
      if (nil63(__b1)) {
        return [__a1];
      } else {
        if (string63(__a1) || number63(__a1)) {
          return [__eq(__a1), __b1];
        } else {
          if (one63(__a1)) {
            return [__eq(hd(__a1)), __b1];
          } else {
            if (_35(__a1) > 1) {
              return [join(["or"], map(__eq, __a1)), __b1];
            }
          }
        }
      }
    };
    return ["let", __x39, __expr, join(["if"], apply(join, map(__cl, pair(__clauses))))];
  }});
  setenv("when", {_stash: true, macro: function (cond) {
    var ____r86 = unstash(Array.prototype.slice.call(arguments, 1));
    var __cond = destash33(cond, ____r86);
    var ____id5 = ____r86;
    var __body1 = cut(____id5, 0);
    return ["if", __cond, join(["do"], __body1)];
  }});
  setenv("unless", {_stash: true, macro: function (cond) {
    var ____r87 = unstash(Array.prototype.slice.call(arguments, 1));
    var __cond1 = destash33(cond, ____r87);
    var ____id6 = ____r87;
    var __body2 = cut(____id6, 0);
    return ["if", ["not", __cond1], join(["do"], __body2)];
  }});
  setenv("obj", {_stash: true, macro: function () {
    var __body3 = unstash(Array.prototype.slice.call(arguments, 0));
    return join(["%object"], mapo(function (x) {
      return x;
    }, __body3));
  }});
  setenv("let", {_stash: true, macro: function (bs) {
    var ____r89 = unstash(Array.prototype.slice.call(arguments, 1));
    var __bs = destash33(bs, ____r89);
    var ____id7 = ____r89;
    var __body4 = cut(____id7, 0);
    if (atom63(__bs)) {
      return join(["let", [__bs, hd(__body4)]], tl(__body4));
    } else {
      if (none63(__bs)) {
        return join(["do"], __body4);
      } else {
        var ____id8 = __bs;
        var __lh1 = ____id8[0];
        var __rh1 = ____id8[1];
        var __bs2 = cut(____id8, 2);
        var ____id9 = bind(__lh1, __rh1);
        var __id10 = ____id9[0];
        var __val = ____id9[1];
        var __bs1 = cut(____id9, 2);
        var __renames = [];
        if (! id_literal63(__id10)) {
          var __id11 = unique(__id10);
          __renames = [__id10, __id11];
          __id10 = __id11;
        }
        return ["do", ["%local", __id10, __val], ["let-symbol", __renames, join(["let", join(__bs1, __bs2)], __body4)]];
      }
    }
  }});
  setenv("with", {_stash: true, macro: function (x, v) {
    var ____r90 = unstash(Array.prototype.slice.call(arguments, 2));
    var __x64 = destash33(x, ____r90);
    var __v13 = destash33(v, ____r90);
    var ____id111 = ____r90;
    var __body5 = cut(____id111, 0);
    return join(["let", [__x64, __v13]], __body5, [__x64]);
  }});
  setenv("let-when", {_stash: true, macro: function (x, v) {
    var ____r91 = unstash(Array.prototype.slice.call(arguments, 2));
    var __x68 = destash33(x, ____r91);
    var __v14 = destash33(v, ____r91);
    var ____id12 = ____r91;
    var __body6 = cut(____id12, 0);
    var __y4 = unique("y");
    return ["let", __y4, __v14, ["when", ["yes", __y4], join(["let", [__x68, __y4]], __body6)]];
  }});
  setenv("define-macro", {_stash: true, macro: function (name, args) {
    var ____r92 = unstash(Array.prototype.slice.call(arguments, 2));
    var __name = destash33(name, ____r92);
    var __args3 = destash33(args, ____r92);
    var ____id13 = ____r92;
    var __body7 = cut(____id13, 0);
    var ____x75 = ["setenv", ["quote", __name]];
    ____x75.macro = join(["fn", __args3], __body7);
    return ["do", ____x75, ["do"]];
  }});
  setenv("define-special", {_stash: true, macro: function (name, args) {
    var ____r93 = unstash(Array.prototype.slice.call(arguments, 2));
    var __name1 = destash33(name, ____r93);
    var __args4 = destash33(args, ____r93);
    var ____id14 = ____r93;
    var __body8 = cut(____id14, 0);
    var ____x80 = ["setenv", ["quote", __name1]];
    ____x80.special = join(["fn", __args4], __body8);
    return ["do", join(____x80, keys(__body8)), ["do"]];
  }});
  setenv("define-symbol", {_stash: true, macro: function (name, expansion) {
    var ____x85 = ["setenv", ["quote", name]];
    ____x85.symbol = ["quote", expansion];
    return ["do", ____x85, ["do"]];
  }});
  setenv("define-reader", {_stash: true, macro: function (__x89) {
    var ____id15 = __x89;
    var __char = ____id15[0];
    var __s11 = ____id15[1];
    var ____r95 = unstash(Array.prototype.slice.call(arguments, 1));
    var ____x89 = destash33(__x89, ____r95);
    var ____id16 = ____r95;
    var __body9 = cut(____id16, 0);
    return ["set", ["get", "read-table", __char], join(["fn", [__s11]], __body9)];
  }});
  setenv("define", {_stash: true, macro: function (name, x) {
    var ____r96 = unstash(Array.prototype.slice.call(arguments, 2));
    var __name2 = destash33(name, ____r96);
    var __x94 = destash33(x, ____r96);
    var ____id17 = ____r96;
    var __body10 = cut(____id17, 0);
    setenv(__name2, {_stash: true, variable: true});
    if (some63(__body10)) {
      return join(["%local-function", __name2], bind42(__x94, __body10));
    } else {
      return ["%local", __name2, __x94];
    }
  }});
  setenv("define-global", {_stash: true, macro: function (name, x) {
    var ____r97 = unstash(Array.prototype.slice.call(arguments, 2));
    var __name3 = destash33(name, ____r97);
    var __x97 = destash33(x, ____r97);
    var ____id18 = ____r97;
    var __body11 = cut(____id18, 0);
    setenv(__name3, {_stash: true, toplevel: true, variable: true});
    if (some63(__body11)) {
      return ["do", join(["%global-function", __name3], bind42(__x97, __body11)), ["%set", ["get", "_G", ["quote", compile(__name3)]], __name3], ["do"]];
    } else {
      return ["do", ["%set", __name3, __x97], ["%set", ["get", "_G", ["quote", compile(__name3)]], __name3], ["do"]];
    }
  }});
  setenv("with-frame", {_stash: true, macro: function () {
    var __body12 = unstash(Array.prototype.slice.call(arguments, 0));
    var __x110 = unique("x");
    return ["do", ["add", ["get", "_G", ["quote", "environment"]], ["obj"]], ["with", __x110, join(["do"], __body12), ["drop", ["get", "_G", ["quote", "environment"]]]]];
  }});
  setenv("with-bindings", {_stash: true, macro: function (__x121) {
    var ____id19 = __x121;
    var __names = ____id19[0];
    var ____r98 = unstash(Array.prototype.slice.call(arguments, 1));
    var ____x121 = destash33(__x121, ____r98);
    var ____id20 = ____r98;
    var __body13 = cut(____id20, 0);
    var __x122 = unique("x");
    var ____x125 = ["setenv", __x122];
    ____x125.variable = true;
    return join(["with-frame", ["each", __x122, __names, ____x125]], __body13);
  }});
  setenv("let-macro", {_stash: true, macro: function (definitions) {
    var ____r99 = unstash(Array.prototype.slice.call(arguments, 1));
    var __definitions = destash33(definitions, ____r99);
    var ____id21 = ____r99;
    var __body14 = cut(____id21, 0);
    add(_G.environment, {});
    map(function (m) {
      return _eval(join(["define-macro"], m));
    }, __definitions);
    var ____x126 = join(["do"], macroexpand(__body14));
    drop(_G.environment);
    return ____x126;
  }});
  setenv("let-symbol", {_stash: true, macro: function (expansions) {
    var ____r101 = unstash(Array.prototype.slice.call(arguments, 1));
    var __expansions = destash33(expansions, ____r101);
    var ____id22 = ____r101;
    var __body15 = cut(____id22, 0);
    add(_G.environment, {});
    map(function (__x130) {
      var ____id23 = __x130;
      var __name4 = ____id23[0];
      var __exp = ____id23[1];
      return _eval(["define-symbol", __name4, __exp]);
    }, pair(__expansions));
    var ____x129 = join(["do"], macroexpand(__body15));
    drop(_G.environment);
    return ____x129;
  }});
  setenv("let-unique", {_stash: true, macro: function (names) {
    var ____r103 = unstash(Array.prototype.slice.call(arguments, 1));
    var __names1 = destash33(names, ____r103);
    var ____id24 = ____r103;
    var __body16 = cut(____id24, 0);
    var __bs11 = map(function (n) {
      return [n, ["unique", ["quote", n]]];
    }, __names1);
    return join(["let", apply(join, __bs11)], __body16);
  }});
  setenv("fn", {_stash: true, macro: function (args) {
    var ____r105 = unstash(Array.prototype.slice.call(arguments, 1));
    var __args5 = destash33(args, ____r105);
    var ____id25 = ____r105;
    var __body17 = cut(____id25, 0);
    return join(["%function"], bind42(__args5, __body17));
  }});
  setenv("apply", {_stash: true, macro: function (f) {
    var ____r106 = unstash(Array.prototype.slice.call(arguments, 1));
    var __f1 = destash33(f, ____r106);
    var ____id26 = ____r106;
    var __args6 = cut(____id26, 0);
    if (_35(__args6) > 1) {
      return ["%call", "apply", __f1, ["join", join(["list"], almost(__args6)), last(__args6)]];
    } else {
      return join(["%call", "apply", __f1], __args6);
    }
  }});
  setenv("guard", {_stash: true, macro: function (expr) {
    if (_G.target === "js") {
      return [["fn", join(), ["%try", ["list", true, expr]]]];
    } else {
      var ____x153 = ["obj"];
      ____x153.stack = [["get", "debug", ["quote", "traceback"]]];
      ____x153.message = ["if", ["string?", "m"], ["clip", "m", ["+", ["search", "m", "\": \""], 2]], ["nil?", "m"], "\"\"", ["str", "m"]];
      return ["list", ["xpcall", ["fn", join(), expr], ["fn", ["m"], ["if", ["obj?", "m"], "m", ____x153]]]];
    }
  }});
  setenv("each", {_stash: true, macro: function (x, t) {
    var ____r108 = unstash(Array.prototype.slice.call(arguments, 2));
    var __x164 = destash33(x, ____r108);
    var __t2 = destash33(t, ____r108);
    var ____id27 = ____r108;
    var __body18 = cut(____id27, 0);
    var __o14 = unique("o");
    var __n19 = unique("n");
    var __i25 = unique("i");
    var __e22;
    if (atom63(__x164)) {
      __e22 = [__i25, __x164];
    } else {
      var __e23;
      if (_35(__x164) > 1) {
        __e23 = __x164;
      } else {
        __e23 = [__i25, hd(__x164)];
      }
      __e22 = __e23;
    }
    var ____id28 = __e22;
    var __k23 = ____id28[0];
    var __v15 = ____id28[1];
    var __e24;
    if (_G.target === "lua") {
      __e24 = __body18;
    } else {
      __e24 = [join(["let", __k23, ["if", ["numeric?", __k23], ["parseInt", __k23], __k23]], __body18)];
    }
    return ["let", [__o14, __t2, __k23, "nil"], ["%for", __o14, __k23, join(["let", [__v15, ["get", __o14, __k23]]], __e24)]];
  }});
  setenv("for", {_stash: true, macro: function (i, to) {
    var ____r109 = unstash(Array.prototype.slice.call(arguments, 2));
    var __i26 = destash33(i, ____r109);
    var __to = destash33(to, ____r109);
    var ____id29 = ____r109;
    var __body19 = cut(____id29, 0);
    return ["let", __i26, 0, join(["while", ["<", __i26, __to]], __body19, [["inc", __i26]])];
  }});
  setenv("step", {_stash: true, macro: function (v, t) {
    var ____r110 = unstash(Array.prototype.slice.call(arguments, 2));
    var __v16 = destash33(v, ____r110);
    var __t3 = destash33(t, ____r110);
    var ____id30 = ____r110;
    var __body20 = cut(____id30, 0);
    var __x183 = unique("x");
    var __i27 = unique("i");
    return ["let", [__x183, __t3], ["for", __i27, ["#", __x183], join(["let", [__v16, ["at", __x183, __i27]]], __body20)]];
  }});
  setenv("set-of", {_stash: true, macro: function () {
    var __xs12 = unstash(Array.prototype.slice.call(arguments, 0));
    var __l6 = [];
    var ____o15 = __xs12;
    var ____i28 = undefined;
    for (____i28 in ____o15) {
      var __x191 = ____o15[____i28];
      var __e25;
      if (numeric63(____i28)) {
        __e25 = parseInt(____i28);
      } else {
        __e25 = ____i28;
      }
      var ____i281 = __e25;
      __l6[__x191] = true;
    }
    return join(["obj"], __l6);
  }});
  setenv("language", {_stash: true, macro: function () {
    return ["quote", _G.target];
  }});
  setenv("target", {_stash: true, macro: function () {
    var __clauses1 = unstash(Array.prototype.slice.call(arguments, 0));
    return __clauses1[_G.target];
  }});
  setenv("join!", {_stash: true, macro: function (a) {
    var ____r112 = unstash(Array.prototype.slice.call(arguments, 1));
    var __a2 = destash33(a, ____r112);
    var ____id31 = ____r112;
    var __bs21 = cut(____id31, 0);
    return ["set", __a2, join(["join", __a2], __bs21)];
  }});
  setenv("cat!", {_stash: true, macro: function (a) {
    var ____r113 = unstash(Array.prototype.slice.call(arguments, 1));
    var __a3 = destash33(a, ____r113);
    var ____id32 = ____r113;
    var __bs3 = cut(____id32, 0);
    return ["set", __a3, join(["cat", __a3], __bs3)];
  }});
  setenv("inc", {_stash: true, macro: function (n, by) {
    var __e26;
    if (nil63(by)) {
      __e26 = 1;
    } else {
      __e26 = by;
    }
    return ["set", n, ["+", n, __e26]];
  }});
  setenv("dec", {_stash: true, macro: function (n, by) {
    var __e27;
    if (nil63(by)) {
      __e27 = 1;
    } else {
      __e27 = by;
    }
    return ["set", n, ["-", n, __e27]];
  }});
  setenv("with-indent", {_stash: true, macro: function (form) {
    var __x202 = unique("x");
    return ["do", ["inc", "indent-level"], ["with", __x202, form, ["dec", "indent-level"]]];
  }});
  setenv("export", {_stash: true, macro: function () {
    var __names2 = unstash(Array.prototype.slice.call(arguments, 0));
    if (_G.target === "js") {
      return join(["do"], map(function (k) {
        return ["set", ["get", "exports", ["quote", k]], k, ["get", "exports", ["quote", compile(k)]], k];
      }, __names2));
    } else {
      var __x213 = {};
      var ____o16 = __names2;
      var ____i29 = undefined;
      for (____i29 in ____o16) {
        var __k24 = ____o16[____i29];
        var __e28;
        if (numeric63(____i29)) {
          __e28 = parseInt(____i29);
        } else {
          __e28 = ____i29;
        }
        var ____i291 = __e28;
        __x213[__k24] = __k24;
      }
      return ["return", join(["%object"], mapo(function (x) {
        return x;
      }, __x213))];
    }
  }});
  setenv("when-compiling", {_stash: true, macro: function () {
    var __body21 = unstash(Array.prototype.slice.call(arguments, 0));
    return _eval(join(["do"], __body21));
  }});
  var __exports = {};
  var getenv = function (k, p) {
    if (string63(k)) {
      var __i30 = edge(_G.environment);
      while (__i30 >= 0) {
        var __b2 = _G.environment[__i30][k];
        if (is63(__b2)) {
          var __e37;
          if (p) {
            __e37 = __b2[p];
          } else {
            __e37 = __b2;
          }
          return __e37;
        } else {
          __i30 = __i30 - 1;
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
      var __l7 = ["%object", "\"_stash\"", true];
      var ____o17 = args;
      var __k25 = undefined;
      for (__k25 in ____o17) {
        var __v17 = ____o17[__k25];
        var __e38;
        if (numeric63(__k25)) {
          __e38 = parseInt(__k25);
        } else {
          __e38 = __k25;
        }
        var __k26 = __e38;
        if (! number63(__k26)) {
          add(__l7, literal(__k26));
          add(__l7, __v17);
        }
      }
      return join(args, [__l7]);
    } else {
      return args;
    }
  };
  var bias = function (k) {
    if (number63(k) && !( _G.target === "js")) {
      if (_G.target === "js") {
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
      var __id33 = unique("id");
      var __bs4 = [__id33, rh];
      var ____o18 = lh;
      var __k27 = undefined;
      for (__k27 in ____o18) {
        var __v18 = ____o18[__k27];
        var __e39;
        if (numeric63(__k27)) {
          __e39 = parseInt(__k27);
        } else {
          __e39 = __k27;
        }
        var __k28 = __e39;
        var __e40;
        if (__k28 === "rest") {
          __e40 = ["cut", __id33, _35(lh)];
        } else {
          __e40 = ["get", __id33, ["quote", bias(__k28)]];
        }
        var __x222 = __e40;
        if (is63(__k28)) {
          var __e41;
          if (__v18 === true) {
            __e41 = __k28;
          } else {
            __e41 = __v18;
          }
          var __k29 = __e41;
          __bs4 = join(__bs4, bind(__k29, __x222));
        }
      }
      return __bs4;
    }
  };
  _G.bind = bind;
  setenv("arguments%", {_stash: true, macro: function (from) {
    return [["get", ["get", ["get", "Array", ["quote", "prototype"]], ["quote", "slice"]], ["quote", "call"]], "arguments", from];
  }});
  bind42 = function (args, body) {
    var __args12 = [];
    var rest = function () {
      __args12.rest = true;
      if (_G.target === "js") {
        return ["unstash", ["arguments%", _35(__args12)]];
      } else {
        return ["unstash", ["list", "|...|"]];
      }
    };
    if (atom63(args)) {
      return [__args12, join(["let", [args, rest()]], body)];
    } else {
      var __bs5 = [];
      var __r137 = unique("r");
      var ____o19 = args;
      var __k30 = undefined;
      for (__k30 in ____o19) {
        var __v19 = ____o19[__k30];
        var __e42;
        if (numeric63(__k30)) {
          __e42 = parseInt(__k30);
        } else {
          __e42 = __k30;
        }
        var __k31 = __e42;
        if (number63(__k31)) {
          if (atom63(__v19)) {
            add(__args12, __v19);
          } else {
            var __x240 = unique("x");
            add(__args12, __x240);
            __bs5 = join(__bs5, [__v19, __x240]);
          }
        }
      }
      if (keys63(args)) {
        __bs5 = join(__bs5, [__r137, rest()]);
        var __n25 = _35(__args12);
        var __i34 = 0;
        while (__i34 < __n25) {
          var __v20 = __args12[__i34];
          __bs5 = join(__bs5, [__v20, ["destash!", __v20, __r137]]);
          __i34 = __i34 + 1;
        }
        __bs5 = join(__bs5, [keys(args), __r137]);
      }
      return [__args12, join(["let", __bs5], body)];
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
  var expand_local = function (__x248) {
    var ____id34 = __x248;
    var __x249 = ____id34[0];
    var __name5 = ____id34[1];
    var __value = ____id34[2];
    setenv(__name5, {_stash: true, variable: true});
    return ["%local", __name5, macroexpand(__value)];
  };
  var expand_function = function (__x251) {
    var ____id35 = __x251;
    var __x252 = ____id35[0];
    var __args7 = ____id35[1];
    var __body22 = cut(____id35, 2);
    add(_G.environment, {});
    var ____o20 = __args7;
    var ____i35 = undefined;
    for (____i35 in ____o20) {
      var ____x253 = ____o20[____i35];
      var __e43;
      if (numeric63(____i35)) {
        __e43 = parseInt(____i35);
      } else {
        __e43 = ____i35;
      }
      var ____i351 = __e43;
      setenv(____x253, {_stash: true, variable: true});
    }
    var ____x254 = join(["%function", __args7], macroexpand(__body22));
    drop(_G.environment);
    return ____x254;
  };
  var expand_definition = function (__x256) {
    var ____id36 = __x256;
    var __x257 = ____id36[0];
    var __name6 = ____id36[1];
    var __args8 = ____id36[2];
    var __body23 = cut(____id36, 3);
    add(_G.environment, {});
    var ____o21 = __args8;
    var ____i36 = undefined;
    for (____i36 in ____o21) {
      var ____x258 = ____o21[____i36];
      var __e44;
      if (numeric63(____i36)) {
        __e44 = parseInt(____i36);
      } else {
        __e44 = ____i36;
      }
      var ____i361 = __e44;
      setenv(____x258, {_stash: true, variable: true});
    }
    var ____x259 = join([__x257, __name6, __args8], macroexpand(__body23));
    drop(_G.environment);
    return ____x259;
  };
  var expand_macro = function (form) {
    return macroexpand(expand1(form));
  };
  expand1 = function (__x261) {
    var ____id37 = __x261;
    var __name7 = ____id37[0];
    var __body24 = cut(____id37, 1);
    return apply(macro_function(__name7), __body24);
  };
  _G.expand1 = expand1;
  macroexpand = function (form) {
    if (symbol63(form)) {
      return macroexpand(symbol_expansion(form));
    } else {
      if (atom63(form)) {
        return form;
      } else {
        var __x262 = hd(form);
        if (__x262 === "%local") {
          return expand_local(form);
        } else {
          if (__x262 === "%function") {
            return expand_function(form);
          } else {
            if (__x262 === "%global-function") {
              return expand_definition(form);
            } else {
              if (__x262 === "%local-function") {
                return expand_definition(form);
              } else {
                if (macro63(__x262)) {
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
    var __xs13 = [["list"]];
    var ____o22 = form;
    var __k32 = undefined;
    for (__k32 in ____o22) {
      var __v21 = ____o22[__k32];
      var __e45;
      if (numeric63(__k32)) {
        __e45 = parseInt(__k32);
      } else {
        __e45 = __k32;
      }
      var __k33 = __e45;
      if (! number63(__k33)) {
        var __e46;
        if (quasisplice63(__v21, depth)) {
          __e46 = quasiexpand(__v21[1]);
        } else {
          __e46 = quasiexpand(__v21, depth);
        }
        var __v22 = __e46;
        last(__xs13)[__k33] = __v22;
      }
    }
    var ____x265 = form;
    var ____i38 = 0;
    while (____i38 < _35(____x265)) {
      var __x266 = ____x265[____i38];
      if (quasisplice63(__x266, depth)) {
        var __x267 = quasiexpand(__x266[1]);
        add(__xs13, __x267);
        add(__xs13, ["list"]);
      } else {
        add(last(__xs13), quasiexpand(__x266, depth));
      }
      ____i38 = ____i38 + 1;
    }
    var __pruned = keep(function (x) {
      return _35(x) > 1 || !( hd(x) === "list") || keys63(x);
    }, __xs13);
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
  expand_if = function (__x271) {
    var ____id38 = __x271;
    var __a4 = ____id38[0];
    var __b3 = ____id38[1];
    var __c11 = cut(____id38, 2);
    if (is63(__b3)) {
      return [join(["%if", __a4, __b3], expand_if(__c11))];
    } else {
      if (is63(__a4)) {
        return [__a4];
      }
    }
  };
  _G.expand_if = expand_if;
  indent_level = 0;
  _G.indent_level = indent_level;
  indentation = function () {
    var __s2 = "";
    var __i39 = 0;
    while (__i39 < indent_level) {
      __s2 = __s2 + "  ";
      __i39 = __i39 + 1;
    }
    return __s2;
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
    var __e47;
    if (number_code63(code(id, 0))) {
      __e47 = "_";
    } else {
      __e47 = "";
    }
    var __id121 = __e47;
    var __i40 = 0;
    while (__i40 < _35(id)) {
      var __c2 = char(id, __i40);
      var __n29 = code(__c2);
      var __e48;
      if (__c2 === "-" && !( id === "-")) {
        __e48 = "_";
      } else {
        var __e49;
        if (valid_code63(__n29)) {
          __e49 = __c2;
        } else {
          var __e50;
          if (__i40 === 0) {
            __e50 = "_" + __n29;
          } else {
            __e50 = __n29;
          }
          __e49 = __e50;
        }
        __e48 = __e49;
      }
      var __c12 = __e48;
      __id121 = __id121 + __c12;
      __i40 = __i40 + 1;
    }
    if (reserved63(__id121)) {
      return "_" + __id121;
    } else {
      return __id121;
    }
  };
  valid_id63 = function (x) {
    return some63(x) && x === id(x);
  };
  _G.valid_id63 = valid_id63;
  var __names3 = {};
  unique = function (x) {
    var __x275 = id(x);
    if (__names3[__x275]) {
      var __i41 = __names3[__x275];
      __names3[__x275] = __names3[__x275] + 1;
      return unique(__x275 + __i41);
    } else {
      __names3[__x275] = 1;
      return "__" + __x275;
    }
  };
  _G.unique = unique;
  key = function (k) {
    if (string_literal63(k)) {
      var __i42 = inner(k);
      if (valid_id63(__i42)) {
        return __i42;
      } else {
        if (_G.target === "js") {
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
    var __o23 = [];
    var ____o24 = t;
    var __k34 = undefined;
    for (__k34 in ____o24) {
      var __v23 = ____o24[__k34];
      var __e51;
      if (numeric63(__k34)) {
        __e51 = parseInt(__k34);
      } else {
        __e51 = __k34;
      }
      var __k35 = __e51;
      var __x276 = f(__v23);
      if (is63(__x276)) {
        add(__o23, literal(__k35));
        add(__o23, __x276);
      }
    }
    return __o23;
  };
  _G.mapo = mapo;
  var ____x278 = [];
  var ____x279 = [];
  ____x279.js = "!";
  ____x279.lua = "not";
  ____x278["not"] = ____x279;
  var ____x280 = [];
  ____x280["*"] = true;
  ____x280["/"] = true;
  ____x280["%"] = true;
  var ____x281 = [];
  var ____x282 = [];
  ____x282.js = "+";
  ____x282.lua = "..";
  ____x281.cat = ____x282;
  var ____x283 = [];
  ____x283["+"] = true;
  ____x283["-"] = true;
  var ____x284 = [];
  ____x284["<"] = true;
  ____x284[">"] = true;
  ____x284["<="] = true;
  ____x284[">="] = true;
  var ____x285 = [];
  var ____x286 = [];
  ____x286.js = "===";
  ____x286.lua = "==";
  ____x285["="] = ____x286;
  var ____x287 = [];
  var ____x288 = [];
  ____x288.js = "&&";
  ____x288.lua = "and";
  ____x287["and"] = ____x288;
  var ____x289 = [];
  var ____x290 = [];
  ____x290.js = "||";
  ____x290.lua = "or";
  ____x289["or"] = ____x290;
  var infix = [____x278, ____x280, ____x281, ____x283, ____x284, ____x285, ____x287, ____x289];
  var unary63 = function (form) {
    return two63(form) && in63(hd(form), ["not", "-"]);
  };
  var index = function (k) {
    return k;
  };
  var precedence = function (form) {
    if (!( atom63(form) || unary63(form))) {
      var ____o25 = infix;
      var __k36 = undefined;
      for (__k36 in ____o25) {
        var __v24 = ____o25[__k36];
        var __e52;
        if (numeric63(__k36)) {
          __e52 = parseInt(__k36);
        } else {
          __e52 = __k36;
        }
        var __k37 = __e52;
        if (__v24[hd(form)]) {
          return index(__k37);
        }
      }
    }
    return 0;
  };
  var getop = function (op) {
    return find(function (level) {
      var __x292 = level[op];
      if (__x292 === true) {
        return op;
      } else {
        if (is63(__x292)) {
          return __x292[_G.target];
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
    var __s3 = "(";
    var __c3 = "";
    var ____x293 = args;
    var ____i45 = 0;
    while (____i45 < _35(____x293)) {
      var __x294 = ____x293[____i45];
      __s3 = __s3 + __c3 + compile(__x294);
      __c3 = ", ";
      ____i45 = ____i45 + 1;
    }
    return __s3 + ")";
  };
  var escape_newlines = function (s) {
    var __s12 = "";
    var __i46 = 0;
    while (__i46 < _35(s)) {
      var __c4 = char(s, __i46);
      var __e53;
      if (__c4 === "\n") {
        __e53 = "\\n";
      } else {
        var __e54;
        if (__c4 === "\r") {
          __e54 = "\\r";
        } else {
          __e54 = __c4;
        }
        __e53 = __e54;
      }
      __s12 = __s12 + __e53;
      __i46 = __i46 + 1;
    }
    return __s12;
  };
  var compile_atom = function (x) {
    if (x === "nil" && _G.target === "lua") {
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
      if (_G.target === "js") {
        return ";\n";
      } else {
        return "\n";
      }
    }
  };
  var compile_special = function (form, stmt63) {
    var ____id39 = form;
    var __x295 = ____id39[0];
    var __args9 = cut(____id39, 1);
    var ____id40 = getenv(__x295);
    var __special = ____id40.special;
    var __stmt = ____id40.stmt;
    var __self_tr63 = ____id40.tr;
    var __tr = terminator(stmt63 && ! __self_tr63);
    return apply(__special, __args9) + __tr;
  };
  var parenthesize_call63 = function (x) {
    return ! atom63(x) && hd(x) === "%function" || precedence(x) > 0;
  };
  var compile_call = function (form) {
    var __f2 = hd(form);
    var __f11 = compile(__f2);
    var __args10 = compile_args(stash42(tl(form)));
    if (parenthesize_call63(__f2)) {
      return "(" + __f11 + ")" + __args10;
    } else {
      return __f11 + __args10;
    }
  };
  var op_delims = function (parent, child) {
    var ____r175 = unstash(Array.prototype.slice.call(arguments, 2));
    var __parent = destash33(parent, ____r175);
    var __child = destash33(child, ____r175);
    var ____id41 = ____r175;
    var __right = ____id41.right;
    var __e55;
    if (__right) {
      __e55 = _6261;
    } else {
      __e55 = _62;
    }
    if (__e55(precedence(__child), precedence(__parent))) {
      return ["(", ")"];
    } else {
      return ["", ""];
    }
  };
  var compile_infix = function (form) {
    var ____id42 = form;
    var __op = ____id42[0];
    var ____id43 = cut(____id42, 1);
    var __a5 = ____id43[0];
    var __b4 = ____id43[1];
    var ____id44 = op_delims(form, __a5);
    var __ao = ____id44[0];
    var __ac = ____id44[1];
    var ____id45 = op_delims(form, __b4, {_stash: true, right: true});
    var __bo = ____id45[0];
    var __bc = ____id45[1];
    var __a6 = compile(__a5);
    var __b5 = compile(__b4);
    var __op1 = getop(__op);
    if (unary63(form)) {
      return __op1 + __ao + " " + __a6 + __ac;
    } else {
      return __ao + __a6 + __ac + " " + __op1 + " " + __bo + __b5 + __bc;
    }
  };
  compile_function = function (args, body) {
    var ____r177 = unstash(Array.prototype.slice.call(arguments, 2));
    var __args111 = destash33(args, ____r177);
    var __body25 = destash33(body, ____r177);
    var ____id46 = ____r177;
    var __name8 = ____id46.name;
    var __prefix = ____id46.prefix;
    var __e56;
    if (__name8) {
      __e56 = compile(__name8);
    } else {
      __e56 = "";
    }
    var __id47 = __e56;
    var __e57;
    if (_G.target === "lua" && __args111.rest) {
      __e57 = join(__args111, ["|...|"]);
    } else {
      __e57 = __args111;
    }
    var __args13 = __e57;
    var __args121 = compile_args(__args13);
    indent_level = indent_level + 1;
    var ____x299 = compile(__body25, {_stash: true, stmt: true});
    indent_level = indent_level - 1;
    var __body26 = ____x299;
    var __ind = indentation();
    var __e58;
    if (__prefix) {
      __e58 = __prefix + " ";
    } else {
      __e58 = "";
    }
    var __p1 = __e58;
    var __e59;
    if (_G.target === "js") {
      __e59 = "";
    } else {
      __e59 = "end";
    }
    var __tr1 = __e59;
    if (__name8) {
      __tr1 = __tr1 + "\n";
    }
    if (_G.target === "js") {
      return "function " + __id47 + __args121 + " {\n" + __body26 + __ind + "}" + __tr1;
    } else {
      return __p1 + "function " + __id47 + __args121 + "\n" + __body26 + __ind + __tr1;
    }
  };
  _G.compile_function = compile_function;
  var can_return63 = function (form) {
    return is63(form) && (atom63(form) || !( hd(form) === "return") && ! statement63(hd(form)));
  };
  compile = function (form) {
    var ____r179 = unstash(Array.prototype.slice.call(arguments, 1));
    var __form = destash33(form, ____r179);
    var ____id48 = ____r179;
    var __stmt1 = ____id48.stmt;
    if (nil63(__form)) {
      return "";
    } else {
      if (special_form63(__form)) {
        return compile_special(__form, __stmt1);
      } else {
        var __tr2 = terminator(__stmt1);
        var __e60;
        if (__stmt1) {
          __e60 = indentation();
        } else {
          __e60 = "";
        }
        var __ind1 = __e60;
        var __e61;
        if (atom63(__form)) {
          __e61 = compile_atom(__form);
        } else {
          var __e62;
          if (infix63(hd(__form))) {
            __e62 = compile_infix(__form);
          } else {
            __e62 = compile_call(__form);
          }
          __e61 = __e62;
        }
        var __form1 = __e61;
        return __ind1 + __form1 + __tr2;
      }
    }
  };
  _G.compile = compile;
  var lower_statement = function (form, tail63) {
    var __hoist = [];
    var __e29 = lower(form, __hoist, true, tail63);
    var __e63;
    if (some63(__hoist) && is63(__e29)) {
      __e63 = join(["do"], __hoist, [__e29]);
    } else {
      var __e64;
      if (is63(__e29)) {
        __e64 = __e29;
      } else {
        var __e65;
        if (_35(__hoist) > 1) {
          __e65 = join(["do"], __hoist);
        } else {
          __e65 = hd(__hoist);
        }
        __e64 = __e65;
      }
      __e63 = __e64;
    }
    return either(__e63, ["do"]);
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
    var ____x305 = almost(args);
    var ____i47 = 0;
    while (____i47 < _35(____x305)) {
      var __x306 = ____x305[____i47];
      var ____y5 = lower(__x306, hoist, stmt63);
      if (yes(____y5)) {
        var __e30 = ____y5;
        if (standalone63(__e30)) {
          add(hoist, __e30);
        }
      }
      ____i47 = ____i47 + 1;
    }
    var __e31 = lower(last(args), hoist, stmt63, tail63);
    if (tail63 && can_return63(__e31)) {
      return ["return", __e31];
    } else {
      return __e31;
    }
  };
  var lower_set = function (args, hoist, stmt63, tail63) {
    var ____id49 = args;
    var __lh2 = ____id49[0];
    var __rh2 = ____id49[1];
    add(hoist, ["%set", lower(__lh2, hoist), lower(__rh2, hoist)]);
    if (!( stmt63 && ! tail63)) {
      return __lh2;
    }
  };
  var lower_if = function (args, hoist, stmt63, tail63) {
    var ____id50 = args;
    var __cond2 = ____id50[0];
    var ___then = ____id50[1];
    var ___else = ____id50[2];
    if (stmt63) {
      var __e67;
      if (is63(___else)) {
        __e67 = [lower_body([___else], tail63)];
      }
      return add(hoist, join(["%if", lower(__cond2, hoist), lower_body([___then], tail63)], __e67));
    } else {
      var __e32 = unique("e");
      add(hoist, ["%local", __e32]);
      var __e66;
      if (is63(___else)) {
        __e66 = [lower(["%set", __e32, ___else])];
      }
      add(hoist, join(["%if", lower(__cond2, hoist), lower(["%set", __e32, ___then])], __e66));
      return __e32;
    }
  };
  var lower_short = function (x, args, hoist) {
    var ____id51 = args;
    var __a7 = ____id51[0];
    var __b6 = ____id51[1];
    var __hoist1 = [];
    var __b11 = lower(__b6, __hoist1);
    if (some63(__hoist1)) {
      var __id52 = unique("id");
      var __e68;
      if (x === "and") {
        __e68 = ["%if", __id52, __b6, __id52];
      } else {
        __e68 = ["%if", __id52, __id52, __b6];
      }
      return lower(["do", ["%local", __id52, __a7], __e68], hoist);
    } else {
      return [x, lower(__a7, hoist), __b11];
    }
  };
  var lower_try = function (args, hoist, tail63) {
    return add(hoist, ["%try", lower_body(args, tail63)]);
  };
  var lower_while = function (args, hoist) {
    var ____id53 = args;
    var __c5 = ____id53[0];
    var __body27 = cut(____id53, 1);
    var __pre = [];
    var __c6 = lower(__c5, __pre);
    var __e69;
    if (none63(__pre)) {
      __e69 = ["while", __c6, lower_body(__body27)];
    } else {
      __e69 = ["while", true, join(["do"], __pre, [["%if", ["not", __c6], ["break"]], lower_body(__body27)])];
    }
    return add(hoist, __e69);
  };
  var lower_for = function (args, hoist) {
    var ____id54 = args;
    var __t4 = ____id54[0];
    var __k38 = ____id54[1];
    var __body28 = cut(____id54, 2);
    return add(hoist, ["%for", lower(__t4, hoist), __k38, lower_body(__body28)]);
  };
  var lower_function = function (args) {
    var ____id55 = args;
    var __a8 = ____id55[0];
    var __body29 = cut(____id55, 1);
    return ["%function", __a8, lower_body(__body29, true)];
  };
  var lower_definition = function (kind, args, hoist) {
    var ____id56 = args;
    var __name9 = ____id56[0];
    var __args131 = ____id56[1];
    var __body30 = cut(____id56, 2);
    return add(hoist, [kind, __name9, __args131, lower_body(__body30, true)]);
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
      var __e33 = [];
      var ____id57 = form;
      var __x335 = ____id57[0];
      var __args14 = cut(____id57, 1);
      reduce(function (a, b) {
        add(__e33, [__x335, a, b]);
        return a;
      }, __args14);
      return join(["and"], reverse(__e33));
    } else {
      return form;
    }
  };
  var lower_infix63 = function (form) {
    return infix63(hd(form)) && _35(form) > 3;
  };
  var lower_infix = function (form, hoist) {
    var __form3 = lower_pairwise(form);
    var ____id58 = __form3;
    var __x338 = ____id58[0];
    var __args15 = cut(____id58, 1);
    return lower(reduce(function (a, b) {
      return [__x338, b, a];
    }, reverse(__args15)), hoist);
  };
  var lower_special = function (form, hoist) {
    var __e34 = lower_call(form, hoist);
    if (__e34) {
      return add(hoist, __e34);
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
            var ____id59 = form;
            var __x341 = ____id59[0];
            var __args16 = cut(____id59, 1);
            if (__x341 === "do") {
              return lower_do(__args16, hoist, stmt63, tail63);
            } else {
              if (__x341 === "%call") {
                return lower(__args16, hoist, stmt63, tail63);
              } else {
                if (__x341 === "%set") {
                  return lower_set(__args16, hoist, stmt63, tail63);
                } else {
                  if (__x341 === "%if") {
                    return lower_if(__args16, hoist, stmt63, tail63);
                  } else {
                    if (__x341 === "%try") {
                      return lower_try(__args16, hoist, tail63);
                    } else {
                      if (__x341 === "while") {
                        return lower_while(__args16, hoist);
                      } else {
                        if (__x341 === "%for") {
                          return lower_for(__args16, hoist);
                        } else {
                          if (__x341 === "%function") {
                            return lower_function(__args16);
                          } else {
                            if (__x341 === "%local-function" || __x341 === "%global-function") {
                              return lower_definition(__x341, __args16, hoist);
                            } else {
                              if (in63(__x341, ["and", "or"])) {
                                return lower_short(__x341, __args16, hoist);
                              } else {
                                if (statement63(__x341)) {
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
  var vm = require("vm");
  var sandbox = vm.createContext(_G);
  var run = function (code) {
    return vm.runInContext(code, sandbox);
  };
  _eval = function (form) {
    var __previous = _G.target;
    _G.target = "js";
    var __code = compile(expand(["set", ["get", "_G", ["quote", "%result"]], form]));
    _G.target = __previous;
    run(__code);
    return _G["%result"];
  };
  _G._eval = _eval;
  immediate_call63 = function (x) {
    return obj63(x) && obj63(hd(x)) && hd(hd(x)) === "%function";
  };
  _G.immediate_call63 = immediate_call63;
  setenv("do", {_stash: true, special: function () {
    var __forms1 = unstash(Array.prototype.slice.call(arguments, 0));
    var __s4 = "";
    var ____x346 = __forms1;
    var ____i48 = 0;
    while (____i48 < _35(____x346)) {
      var __x347 = ____x346[____i48];
      if (_G.target === "lua" && immediate_call63(__x347) && "\n" === char(__s4, edge(__s4))) {
        __s4 = clip(__s4, 0, edge(__s4)) + ";\n";
      }
      __s4 = __s4 + compile(__x347, {_stash: true, stmt: true});
      if (! atom63(__x347)) {
        if (hd(__x347) === "return" || hd(__x347) === "break") {
          break;
        }
      }
      ____i48 = ____i48 + 1;
    }
    return __s4;
  }, stmt: true, tr: true});
  setenv("%if", {_stash: true, special: function (cond, cons, alt) {
    var __cond3 = compile(cond);
    indent_level = indent_level + 1;
    var ____x348 = compile(cons, {_stash: true, stmt: true});
    indent_level = indent_level - 1;
    var __cons = ____x348;
    var __e70;
    if (alt) {
      indent_level = indent_level + 1;
      var ____x349 = compile(alt, {_stash: true, stmt: true});
      indent_level = indent_level - 1;
      __e70 = ____x349;
    }
    var __alt = __e70;
    var __ind2 = indentation();
    var __s5 = "";
    if (_G.target === "js") {
      __s5 = __s5 + __ind2 + "if (" + __cond3 + ") {\n" + __cons + __ind2 + "}";
    } else {
      __s5 = __s5 + __ind2 + "if " + __cond3 + " then\n" + __cons;
    }
    if (__alt && _G.target === "js") {
      __s5 = __s5 + " else {\n" + __alt + __ind2 + "}";
    } else {
      if (__alt) {
        __s5 = __s5 + __ind2 + "else\n" + __alt;
      }
    }
    if (_G.target === "lua") {
      return __s5 + __ind2 + "end\n";
    } else {
      return __s5 + "\n";
    }
  }, stmt: true, tr: true});
  setenv("while", {_stash: true, special: function (cond, form) {
    var __cond4 = compile(cond);
    indent_level = indent_level + 1;
    var ____x350 = compile(form, {_stash: true, stmt: true});
    indent_level = indent_level - 1;
    var __body31 = ____x350;
    var __ind3 = indentation();
    if (_G.target === "js") {
      return __ind3 + "while (" + __cond4 + ") {\n" + __body31 + __ind3 + "}\n";
    } else {
      return __ind3 + "while " + __cond4 + " do\n" + __body31 + __ind3 + "end\n";
    }
  }, stmt: true, tr: true});
  setenv("%for", {_stash: true, special: function (t, k, form) {
    var __t5 = compile(t);
    var __ind4 = indentation();
    indent_level = indent_level + 1;
    var ____x351 = compile(form, {_stash: true, stmt: true});
    indent_level = indent_level - 1;
    var __body32 = ____x351;
    if (_G.target === "lua") {
      return __ind4 + "for " + k + " in next, " + __t5 + " do\n" + __body32 + __ind4 + "end\n";
    } else {
      return __ind4 + "for (" + k + " in " + __t5 + ") {\n" + __body32 + __ind4 + "}\n";
    }
  }, stmt: true, tr: true});
  setenv("%try", {_stash: true, special: function (form) {
    var __e35 = unique("e");
    var __ind5 = indentation();
    indent_level = indent_level + 1;
    var ____x352 = compile(form, {_stash: true, stmt: true});
    indent_level = indent_level - 1;
    var __body33 = ____x352;
    var __hf = ["return", ["%array", false, __e35]];
    indent_level = indent_level + 1;
    var ____x355 = compile(__hf, {_stash: true, stmt: true});
    indent_level = indent_level - 1;
    var __h = ____x355;
    return __ind5 + "try {\n" + __body33 + __ind5 + "}\n" + __ind5 + "catch (" + __e35 + ") {\n" + __h + __ind5 + "}\n";
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
    if (_G.target === "lua") {
      var __x356 = compile_function(args, body, {_stash: true, name: name});
      return indentation() + __x356;
    } else {
      return compile(["%set", name, ["%function", args, body]], {_stash: true, stmt: true});
    }
  }, stmt: true, tr: true});
  setenv("%local-function", {_stash: true, special: function (name, args, body) {
    if (_G.target === "lua") {
      var __x359 = compile_function(args, body, {_stash: true, name: name, prefix: "local"});
      return indentation() + __x359;
    } else {
      return compile(["%local", name, ["%function", args, body]], {_stash: true, stmt: true});
    }
  }, stmt: true, tr: true});
  setenv("return", {_stash: true, special: function (x) {
    var __e71;
    if (nil63(x)) {
      __e71 = "return";
    } else {
      __e71 = "return " + compile(x);
    }
    var __x362 = __e71;
    return indentation() + __x362;
  }, stmt: true});
  setenv("new", {_stash: true, special: function (x) {
    return "new " + compile(x);
  }});
  setenv("typeof", {_stash: true, special: function (x) {
    return "typeof(" + compile(x) + ")";
  }});
  setenv("error", {_stash: true, special: function (x) {
    var __e72;
    if (_G.target === "js") {
      __e72 = "throw " + compile(["new", ["Error", x]]);
    } else {
      __e72 = "error(" + compile(x) + ")";
    }
    var __e36 = __e72;
    return indentation() + __e36;
  }, stmt: true});
  setenv("%local", {_stash: true, special: function (name, value) {
    var __id60 = compile(name);
    var __value1 = compile(value);
    var __e73;
    if (is63(value)) {
      __e73 = " = " + __value1;
    } else {
      __e73 = "";
    }
    var __rh3 = __e73;
    var __e74;
    if (_G.target === "js") {
      __e74 = "var ";
    } else {
      __e74 = "local ";
    }
    var __keyword = __e74;
    var __ind6 = indentation();
    return __ind6 + __keyword + __id60 + __rh3;
  }, stmt: true});
  setenv("%set", {_stash: true, special: function (lh, rh) {
    var __lh3 = compile(lh);
    var __e75;
    if (nil63(rh)) {
      __e75 = "nil";
    } else {
      __e75 = rh;
    }
    var __rh4 = compile(__e75);
    return indentation() + __lh3 + " = " + __rh4;
  }, stmt: true});
  setenv("get", {_stash: true, special: function (t, k) {
    var __t11 = compile(t);
    var __k111 = compile(k);
    if (_G.target === "lua" && char(__t11, 0) === "{" || infix_operator63(t)) {
      __t11 = "(" + __t11 + ")";
    }
    if (string_literal63(k) && valid_id63(inner(k))) {
      return __t11 + "." + inner(k);
    } else {
      return __t11 + "[" + __k111 + "]";
    }
  }});
  setenv("%array", {_stash: true, special: function () {
    var __forms2 = unstash(Array.prototype.slice.call(arguments, 0));
    var __e76;
    if (_G.target === "lua") {
      __e76 = "{";
    } else {
      __e76 = "[";
    }
    var __open = __e76;
    var __e77;
    if (_G.target === "lua") {
      __e77 = "}";
    } else {
      __e77 = "]";
    }
    var __close = __e77;
    var __s6 = "";
    var __c7 = "";
    var ____o26 = __forms2;
    var __k39 = undefined;
    for (__k39 in ____o26) {
      var __v25 = ____o26[__k39];
      var __e78;
      if (numeric63(__k39)) {
        __e78 = parseInt(__k39);
      } else {
        __e78 = __k39;
      }
      var __k40 = __e78;
      if (number63(__k40)) {
        __s6 = __s6 + __c7 + compile(__v25);
        __c7 = ", ";
      }
    }
    return __open + __s6 + __close;
  }});
  setenv("%object", {_stash: true, special: function () {
    var __forms3 = unstash(Array.prototype.slice.call(arguments, 0));
    var __s7 = "{";
    var __c8 = "";
    var __e79;
    if (_G.target === "lua") {
      __e79 = " = ";
    } else {
      __e79 = ": ";
    }
    var __sep = __e79;
    var ____x365 = pair(__forms3);
    var ____i50 = 0;
    while (____i50 < _35(____x365)) {
      var ____id61 = ____x365[____i50];
      var __k41 = ____id61[0];
      var __v26 = ____id61[1];
      __s7 = __s7 + __c8 + key(compile(__k41)) + __sep + compile(__v26);
      __c8 = ", ";
      ____i50 = ____i50 + 1;
    }
    return __s7 + "}";
  }});
  setenv("%literal", {_stash: true, special: function () {
    var __args17 = unstash(Array.prototype.slice.call(arguments, 0));
    var __s8 = "";
    var ____x366 = __args17;
    var ____i51 = 0;
    while (____i51 < _35(____x366)) {
      var __x367 = ____x366[____i51];
      if (string_literal63(__x367)) {
        __s8 = __s8 + _eval(__x367);
      } else {
        __s8 = __s8 + compile(__x367);
      }
      ____i51 = ____i51 + 1;
    }
    return __s8;
  }});
  setenv("%statement", {_stash: true, special: function () {
    var __args18 = unstash(Array.prototype.slice.call(arguments, 0));
    var __s9 = indentation();
    var ____x368 = __args18;
    var ____i52 = 0;
    while (____i52 < _35(____x368)) {
      var __x369 = ____x368[____i52];
      if (string_literal63(__x369)) {
        __s9 = __s9 + _eval(__x369);
      } else {
        __s9 = __s9 + compile(__x369);
      }
      ____i52 = ____i52 + 1;
    }
    __s9 = __s9 + "\n";
    return __s9;
  }, stmt: true, tr: true});
  setenv("%indentation", {_stash: true, special: function () {
    return indentation();
  }});
  __exports.run = run;
  __exports.run = run;
  __exports["eval"] = _eval;
  __exports._eval = _eval;
  __exports.expand = expand;
  __exports.expand = expand;
  __exports.compile = compile;
  __exports.compile = compile;
  _G.compiler = __exports;
  var __exports1 = {};
  var delimiters = {"(": true, ")": true, ";": true, "\r": true, "\n": true};
  var whitespace = {" ": true, "\t": true, "\r": true, "\n": true};
  var stream = function (str, more) {
    return {pos: 0, string: str, len: _35(str), more: more};
  };
  var peek_char = function (s) {
    var ____id62 = s;
    var __pos = ____id62.pos;
    var __len = ____id62.len;
    var __string = ____id62.string;
    if (__pos < __len) {
      return char(__string, __pos);
    }
  };
  var read_char = function (s) {
    var __c9 = peek_char(s);
    if (__c9) {
      s.pos = s.pos + 1;
      return __c9;
    }
  };
  var skip_non_code = function (s) {
    while (true) {
      var __c10 = peek_char(s);
      if (nil63(__c10)) {
        break;
      } else {
        if (whitespace[__c10]) {
          read_char(s);
        } else {
          if (__c10 === ";") {
            while (__c10 && !( __c10 === "\n")) {
              __c10 = read_char(s);
            }
            skip_non_code(s);
          } else {
            break;
          }
        }
      }
    }
  };
  var read_table = {};
  var eof = {};
  var read = function (s) {
    skip_non_code(s);
    var __c111 = peek_char(s);
    if (is63(__c111)) {
      return (read_table[__c111] || read_table[""])(s);
    } else {
      return eof;
    }
  };
  var read_all = function (s) {
    var __l8 = [];
    while (true) {
      var __form4 = read(s);
      if (__form4 === eof) {
        break;
      }
      add(__l8, __form4);
    }
    return __l8;
  };
  read_string = function (str, more) {
    var __x370 = read(stream(str, more));
    if (!( __x370 === eof)) {
      return __x370;
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
    var ____id63 = s;
    var __more = ____id63.more;
    var __pos1 = ____id63.pos;
    var __id64 = __more;
    var __e80;
    if (__id64) {
      __e80 = __id64;
    } else {
      throw new Error("Expected " + c + " at " + __pos1);
      __e80 = undefined;
    }
    return __e80;
  };
  var wrap = function (s, x) {
    var __y6 = read(s);
    if (__y6 === s.more) {
      return __y6;
    } else {
      return [x, __y6];
    }
  };
  var hex_prefix63 = function (str) {
    var __e81;
    if (code(str, 0) === 45) {
      __e81 = 1;
    } else {
      __e81 = 0;
    }
    var __i53 = __e81;
    var __id65 = code(str, __i53) === 48;
    var __e82;
    if (__id65) {
      __i53 = __i53 + 1;
      var __n33 = code(str, __i53);
      __e82 = __n33 === 120 || __n33 === 88;
    } else {
      __e82 = __id65;
    }
    return __e82;
  };
  var maybe_number = function (str) {
    if (hex_prefix63(str)) {
      return parseInt(str, 16);
    } else {
      if (number_code63(code(str, edge(str)))) {
        return number(str);
      }
    }
  };
  var real63 = function (x) {
    return number63(x) && ! nan63(x) && ! inf63(x);
  };
  read_table[""] = function (s) {
    var __str = "";
    while (true) {
      var __c121 = peek_char(s);
      if (__c121 && (! whitespace[__c121] && ! delimiters[__c121])) {
        __str = __str + read_char(s);
      } else {
        break;
      }
    }
    if (__str === "true") {
      return true;
    } else {
      if (__str === "false") {
        return false;
      } else {
        var __n34 = maybe_number(__str);
        if (real63(__n34)) {
          return __n34;
        } else {
          return __str;
        }
      }
    }
  };
  read_table["("] = function (s) {
    read_char(s);
    var __r240 = undefined;
    var __l9 = [];
    while (nil63(__r240)) {
      skip_non_code(s);
      var __c13 = peek_char(s);
      if (__c13 === ")") {
        read_char(s);
        __r240 = __l9;
      } else {
        if (nil63(__c13)) {
          __r240 = expected(s, ")");
        } else {
          var __x372 = read(s);
          if (key63(__x372)) {
            var __k42 = clip(__x372, 0, edge(__x372));
            var __v27 = read(s);
            __l9[__k42] = __v27;
          } else {
            if (flag63(__x372)) {
              __l9[clip(__x372, 1)] = true;
            } else {
              add(__l9, __x372);
            }
          }
        }
      }
    }
    return __r240;
  };
  read_table[")"] = function (s) {
    throw new Error("Unexpected ) at " + s.pos);
  };
  read_table["\""] = function (s) {
    read_char(s);
    var __r243 = undefined;
    var __str1 = "\"";
    while (nil63(__r243)) {
      var __c14 = peek_char(s);
      if (__c14 === "\"") {
        __r243 = __str1 + read_char(s);
      } else {
        if (nil63(__c14)) {
          __r243 = expected(s, "\"");
        } else {
          if (__c14 === "\\") {
            __str1 = __str1 + read_char(s);
          }
          __str1 = __str1 + read_char(s);
        }
      }
    }
    return __r243;
  };
  read_table["|"] = function (s) {
    read_char(s);
    var __r245 = undefined;
    var __str2 = "|";
    while (nil63(__r245)) {
      var __c15 = peek_char(s);
      if (__c15 === "|") {
        __r245 = __str2 + read_char(s);
      } else {
        if (nil63(__c15)) {
          __r245 = expected(s, "|");
        } else {
          __str2 = __str2 + read_char(s);
        }
      }
    }
    return __r245;
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
    }
  };
  __exports1.stream = stream;
  __exports1.stream = stream;
  __exports1.read = read;
  __exports1.read = read;
  __exports1["read-all"] = read_all;
  __exports1.read_all = read_all;
  __exports1["read-string"] = read_string;
  __exports1.read_string = read_string;
  __exports1["read-table"] = read_table;
  __exports1.read_table = read_table;
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
  __exports2.read_file = read_file;
  __exports2["write-file"] = write_file;
  __exports2.write_file = write_file;
  __exports2["file-exists?"] = file_exists63;
  __exports2.file_exists63 = file_exists63;
  __exports2["directory-exists?"] = directory_exists63;
  __exports2.directory_exists63 = directory_exists63;
  __exports2["path-separator"] = path_separator;
  __exports2.path_separator = path_separator;
  __exports2["path-join"] = path_join;
  __exports2.path_join = path_join;
  __exports2["get-environment-variable"] = get_environment_variable;
  __exports2.get_environment_variable = get_environment_variable;
  __exports2.write = write;
  __exports2.write = write;
  __exports2.exit = exit;
  __exports2.exit = exit;
  __exports2.argv = argv;
  __exports2.argv = argv;
  __exports2.reload = reload;
  __exports2.reload = reload;
  __exports2.shell = shell;
  __exports2.shell = shell;
  _G.system = __exports2;
  var __exports3 = _G;
  var eval_print = function (form) {
    var ____id66 = (function () {
      try {
        return [true, _G.compiler["eval"](form)];
      }
      catch (__e83) {
        return [false, __e83];
      }
    })();
    var __ok = ____id66[0];
    var __v28 = ____id66[1];
    if (! __ok) {
      return print(__v28.stack);
    } else {
      if (is63(__v28)) {
        return print(str(__v28));
      }
    }
  };
  var rep = function (s) {
    return eval_print(_G.reader["read-string"](s));
  };
  var repl = function () {
    var __buf = "";
    var rep1 = function (s) {
      __buf = __buf + s;
      var __more1 = [];
      var __form5 = _G.reader["read-string"](__buf, __more1);
      if (!( __form5 === __more1)) {
        eval_print(__form5);
        __buf = "";
        return _G.system.write("> ");
      }
    };
    _G.system.write("> ");
    var ___in = process.stdin;
    ___in.setEncoding("utf8");
    return ___in.on("data", rep1);
  };
  expand_file = function (path) {
    var __s10 = _G.reader.stream(_G.system["read-file"](path));
    var __body34 = _G.reader["read-all"](__s10);
    return _G.compiler.expand(join(["do"], __body34));
  };
  _G.expand_file = expand_file;
  compile_file = function (path) {
    var __body35 = expand_file(path);
    var __form6 = _G.compiler.expand(join(["do"], __body35));
    return _G.compiler.compile(__form6, {_stash: true, stmt: true});
  };
  _G.compile_file = compile_file;
  _load = function (path) {
    var __previous1 = _G.target;
    _G.target = "js";
    var __code1 = compile_file(path);
    _G.target = __previous1;
    return _G.compiler.run(__code1);
  };
  _G._load = _load;
  var script_file63 = function (path) {
    return !( "-" === char(path, 0) || ".js" === clip(path, _35(path) - 3) || ".lua" === clip(path, _35(path) - 4));
  };
  var run_file = function (path) {
    if (script_file63(path)) {
      return _load(path);
    } else {
      return _G.compiler.run(_G.system["read-file"](path));
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
    var __arg = hd(_G.system.argv);
    if (__arg && script_file63(__arg)) {
      return _load(__arg);
    } else {
      if (__arg === "-h" || __arg === "--help") {
        return usage();
      } else {
        var __pre1 = [];
        var __input = undefined;
        var __output = undefined;
        var __target1 = undefined;
        var __expr1 = undefined;
        var __argv = _G.system.argv;
        var __i54 = 0;
        while (__i54 < _35(__argv)) {
          var __a9 = __argv[__i54];
          if (__a9 === "-c" || __a9 === "-o" || __a9 === "-t" || __a9 === "-e") {
            if (__i54 === edge(__argv)) {
              print("missing argument for " + __a9);
            } else {
              __i54 = __i54 + 1;
              var __val1 = __argv[__i54];
              if (__a9 === "-c") {
                __input = __val1;
              } else {
                if (__a9 === "-o") {
                  __output = __val1;
                } else {
                  if (__a9 === "-t") {
                    __target1 = __val1;
                  } else {
                    if (__a9 === "-e") {
                      __expr1 = __val1;
                    }
                  }
                }
              }
            }
          } else {
            if (!( "-" === char(__a9, 0))) {
              add(__pre1, __a9);
            }
          }
          __i54 = __i54 + 1;
        }
        var ____x376 = __pre1;
        var ____i55 = 0;
        while (____i55 < _35(____x376)) {
          var __file = ____x376[____i55];
          run_file(__file);
          ____i55 = ____i55 + 1;
        }
        if (nil63(__input)) {
          if (__expr1) {
            return rep(__expr1);
          } else {
            return repl();
          }
        } else {
          if (__target1) {
            _G.target = __target1;
          }
          var __code2 = compile_file(__input);
          if (nil63(__output) || __output === "-") {
            return print(__code2);
          } else {
            return _G.system["write-file"](__output, __code2);
          }
        }
      }
    }
  };
  __exports3["eval-print"] = eval_print;
  __exports3.eval_print = eval_print;
  __exports3.rep = rep;
  __exports3.rep = rep;
  __exports3.repl = repl;
  __exports3.repl = repl;
  __exports3["compile-file"] = compile_file;
  __exports3.compile_file = compile_file;
  __exports3["load"] = _load;
  __exports3._load = _load;
  __exports3["script-file?"] = script_file63;
  __exports3.script_file63 = script_file63;
  __exports3["run-file"] = run_file;
  __exports3.run_file = run_file;
  __exports3.usage = usage;
  __exports3.usage = usage;
  __exports3.main = main;
  __exports3.main = main;
  return _G;
};
exports.create = create;
exports.create = create;
