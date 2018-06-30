var create = (function (globals) {
  var _G = Object.assign({}, globals || {});
  _G._G = _G;
  _G.environment = [{}];
  nil63 = (function (x) {
    return x === undefined || x === null;
  });
  _G.nil63 = nil63;
  _G.nil63 = nil63;
  is63 = (function (x) {
    return ! nil63(x);
  });
  _G.is63 = is63;
  _G.is63 = is63;
  no = (function (x) {
    return nil63(x) || x === false;
  });
  _G.no = no;
  _G.no = no;
  yes = (function (x) {
    return ! no(x);
  });
  _G.yes = yes;
  _G.yes = yes;
  either = (function (x, y) {
    if (is63(x)) {
      return x;
    } else {
      return y;
    }
  });
  _G.either = either;
  _G.either = either;
  has63 = (function (l, k) {
    return l.hasOwnProperty(k);
  });
  _G.has63 = has63;
  _G.has63 = has63;
  _35 = (function (x) {
    return x.length || 0;
  });
  _G._35 = _35;
  _G._35 = _35;
  none63 = (function (x) {
    return _35(x) === 0;
  });
  _G.none63 = none63;
  _G.none63 = none63;
  some63 = (function (x) {
    return _35(x) > 0;
  });
  _G.some63 = some63;
  _G.some63 = some63;
  one63 = (function (x) {
    return _35(x) === 1;
  });
  _G.one63 = one63;
  _G.one63 = one63;
  two63 = (function (x) {
    return _35(x) === 2;
  });
  _G.two63 = two63;
  _G.two63 = two63;
  hd = (function (l) {
    return l[0];
  });
  _G.hd = hd;
  _G.hd = hd;
  type = (function (x) {
    return typeof(x);
  });
  _G.type = type;
  _G.type = type;
  type63 = (function (x, y) {
    return type(x) === y;
  });
  _G.type63 = type63;
  _G.type63 = type63;
  string63 = (function (x) {
    return type63(x, "string");
  });
  _G.string63 = string63;
  _G.string63 = string63;
  number63 = (function (x) {
    return type63(x, "number");
  });
  _G.number63 = number63;
  _G.number63 = number63;
  boolean63 = (function (x) {
    return type63(x, "boolean");
  });
  _G.boolean63 = boolean63;
  _G.boolean63 = boolean63;
  function63 = (function (x) {
    return type63(x, "function");
  });
  _G.function63 = function63;
  _G.function63 = function63;
  function63 = (function (x) {
    return type63(x, "function");
  });
  _G.function63 = function63;
  _G.function63 = function63;
  symbol63 = (function (x) {
    return type63(x, "symbol");
  });
  _G.symbol63 = symbol63;
  _G.symbol63 = symbol63;
  obj63 = (function (x) {
    return is63(x) && type63(x, "object");
  });
  _G.obj63 = obj63;
  _G.obj63 = obj63;
  atom63 = (function (x) {
    return nil63(x) || string63(x) || number63(x) || boolean63(x) || symbol63(x);
  });
  _G.atom63 = atom63;
  _G.atom63 = atom63;
  nan = 0 / 0;
  _G.nan = nan;
  _G.nan = nan;
  inf = 1 / 0;
  _G.inf = inf;
  _G.inf = inf;
  _inf = - inf;
  _G.Inf = _inf;
  _G._inf = _inf;
  nan63 = (function (n) {
    return !( n === n);
  });
  _G.nan63 = nan63;
  _G.nan63 = nan63;
  inf63 = (function (n) {
    return n === inf || n === _inf;
  });
  _G.inf63 = inf63;
  _G.inf63 = inf63;
  clip = (function (s, from, upto) {
    return s.substring(from, upto);
  });
  _G.clip = clip;
  _G.clip = clip;
  cut = (function (x, from, upto) {
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
  });
  _G.cut = cut;
  _G.cut = cut;
  keys = (function (x) {
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
  });
  _G.keys = keys;
  _G.keys = keys;
  edge = (function (x) {
    return _35(x) - 1;
  });
  _G.edge = edge;
  _G.edge = edge;
  inner = (function (x) {
    return clip(x, 1, edge(x));
  });
  _G.inner = inner;
  _G.inner = inner;
  tl = (function (l) {
    return cut(l, 1);
  });
  _G.tl = tl;
  _G.tl = tl;
  char = (function (s, n) {
    return s.charAt(n);
  });
  _G.char = char;
  _G.char = char;
  code = (function (s, n) {
    return s.charCodeAt(n);
  });
  _G.code = code;
  _G.code = code;
  string_literal63 = (function (x) {
    return string63(x) && char(x, 0) === "\"";
  });
  _G.stringLiteral63 = string_literal63;
  _G.string_literal63 = string_literal63;
  id_literal63 = (function (x) {
    return string63(x) && char(x, 0) === "|";
  });
  _G.idLiteral63 = id_literal63;
  _G.id_literal63 = id_literal63;
  add = (function (l, x) {
    l.push(x);
    return undefined;
  });
  _G.add = add;
  _G.add = add;
  drop = (function (l) {
    return l.pop();
  });
  _G.drop = drop;
  _G.drop = drop;
  last = (function (l) {
    return l[edge(l)];
  });
  _G.last = last;
  _G.last = last;
  almost = (function (l) {
    return cut(l, 0, edge(l));
  });
  _G.almost = almost;
  _G.almost = almost;
  reverse = (function (l) {
    var __l1 = keys(l);
    var __i3 = edge(l);
    while (__i3 >= 0) {
      add(__l1, l[__i3]);
      __i3 = __i3 - 1;
    }
    return __l1;
  });
  _G.reverse = reverse;
  _G.reverse = reverse;
  reduce = (function (f, x) {
    if (none63(x)) {
      return undefined;
    } else {
      if (one63(x)) {
        return hd(x);
      } else {
        return f(hd(x), reduce(f, tl(x)));
      }
    }
  });
  _G.reduce = reduce;
  _G.reduce = reduce;
  join = (function (...ls) {
    var __ls = unstash(ls);
    var __r41 = [];
    var ____x30 = __ls;
    var ____i4 = 0;
    while (____i4 < _35(____x30)) {
      var __l11 = ____x30[____i4];
      if (__l11) {
        var __n3 = _35(__r41);
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
          __r41[__k5] = __v2;
        }
      }
      ____i4 = ____i4 + 1;
    }
    return __r41;
  });
  _G.join = join;
  _G.join = join;
  find = (function (f, t) {
    var ____o3 = t;
    var ____i6 = undefined;
    for (____i6 in ____o3) {
      var __x31 = ____o3[____i6];
      var __e5;
      if (numeric63(____i6)) {
        __e5 = parseInt(____i6);
      } else {
        __e5 = ____i6;
      }
      var ____i61 = __e5;
      var __y = f(__x31);
      if (__y) {
        return __y;
      }
    }
  });
  _G.find = find;
  _G.find = find;
  first = (function (f, l) {
    var ____x32 = l;
    var ____i7 = 0;
    while (____i7 < _35(____x32)) {
      var __x33 = ____x32[____i7];
      var __y1 = f(__x33);
      if (__y1) {
        return __y1;
      }
      ____i7 = ____i7 + 1;
    }
  });
  _G.first = first;
  _G.first = first;
  in63 = (function (x, t) {
    return find((function (y) {
      return x === y;
    }), t);
  });
  _G.in63 = in63;
  _G.in63 = in63;
  pair = (function (l) {
    var __l12 = [];
    var __i8 = 0;
    while (__i8 < _35(l)) {
      add(__l12, [l[__i8], l[__i8 + 1]]);
      __i8 = __i8 + 1;
      __i8 = __i8 + 1;
    }
    return __l12;
  });
  _G.pair = pair;
  _G.pair = pair;
  sort = (function (l, f) {
    var __e6;
    if (f) {
      __e6 = (function (a, b) {
        if (f(a, b)) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    return l.sort(__e6);
  });
  _G.sort = sort;
  _G.sort = sort;
  map = (function (f, x) {
    var __t1 = [];
    var ____x35 = x;
    var ____i9 = 0;
    while (____i9 < _35(____x35)) {
      var __v3 = ____x35[____i9];
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
  });
  _G.map = map;
  _G.map = map;
  keep = (function (f, x) {
    return map((function (v) {
      if (yes(f(v))) {
        return v;
      }
    }), x);
  });
  _G.keep = keep;
  _G.keep = keep;
  keys63 = (function (t) {
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
  });
  _G.keys63 = keys63;
  _G.keys63 = keys63;
  empty63 = (function (t) {
    var ____o6 = t;
    var ____i12 = undefined;
    for (____i12 in ____o6) {
      var __x36 = ____o6[____i12];
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
  });
  _G.empty63 = empty63;
  _G.empty63 = empty63;
  stash = (function (args) {
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
  });
  _G.stash = stash;
  _G.stash = stash;
  unstash = (function (args) {
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
  });
  _G.unstash = unstash;
  _G.unstash = unstash;
  destash33 = (function (l, args1) {
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
  });
  _G.destash33 = destash33;
  _G.destash33 = destash33;
  search = (function (s, pattern, start) {
    var __i16 = s.indexOf(pattern, start);
    if (__i16 >= 0) {
      return __i16;
    }
  });
  _G.search = search;
  _G.search = search;
  split = (function (s, sep) {
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
  });
  _G.split = split;
  _G.split = split;
  cat = (function (...xs) {
    var __xs = unstash(xs);
    return either(reduce((function (a, b) {
      return a + b;
    }), __xs), "");
  });
  _G.cat = cat;
  _G.cat = cat;
  _43 = (function (...xs) {
    var __xs1 = unstash(xs);
    return either(reduce((function (a, b) {
      return a + b;
    }), __xs1), 0);
  });
  _G._43 = _43;
  _G._43 = _43;
  _45 = (function (...xs) {
    var __xs2 = unstash(xs);
    return either(reduce((function (b, a) {
      return a - b;
    }), reverse(__xs2)), 0);
  });
  _G_46 = _45;
  _G._45 = _45;
  _42 = (function (...xs) {
    var __xs3 = unstash(xs);
    return either(reduce((function (a, b) {
      return a * b;
    }), __xs3), 1);
  });
  _G._42 = _42;
  _G._42 = _42;
  _47 = (function (...xs) {
    var __xs4 = unstash(xs);
    return either(reduce((function (b, a) {
      return a / b;
    }), reverse(__xs4)), 1);
  });
  _G._47 = _47;
  _G._47 = _47;
  _37 = (function (...xs) {
    var __xs5 = unstash(xs);
    return either(reduce((function (b, a) {
      return a % b;
    }), reverse(__xs5)), 0);
  });
  _G._37 = _37;
  _G._37 = _37;
  var pairwise = (function (f, xs) {
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
  });
  _60 = (function (...xs) {
    var __xs6 = unstash(xs);
    return pairwise((function (a, b) {
      return a < b;
    }), __xs6);
  });
  _G._60 = _60;
  _G._60 = _60;
  _62 = (function (...xs) {
    var __xs7 = unstash(xs);
    return pairwise((function (a, b) {
      return a > b;
    }), __xs7);
  });
  _G._62 = _62;
  _G._62 = _62;
  _61 = (function (...xs) {
    var __xs8 = unstash(xs);
    return pairwise((function (a, b) {
      return a === b;
    }), __xs8);
  });
  _G._61 = _61;
  _G._61 = _61;
  _6061 = (function (...xs) {
    var __xs9 = unstash(xs);
    return pairwise((function (a, b) {
      return a <= b;
    }), __xs9);
  });
  _G._6061 = _6061;
  _G._6061 = _6061;
  _6261 = (function (...xs) {
    var __xs10 = unstash(xs);
    return pairwise((function (a, b) {
      return a >= b;
    }), __xs10);
  });
  _G._6261 = _6261;
  _G._6261 = _6261;
  number = (function (s) {
    var __n13 = parseFloat(s);
    if (! isNaN(__n13)) {
      return __n13;
    }
  });
  _G.number = number;
  _G.number = number;
  number_code63 = (function (n) {
    return n > 47 && n < 58;
  });
  _G.numberCode63 = number_code63;
  _G.number_code63 = number_code63;
  numeric63 = (function (s) {
    var __n14 = _35(s);
    var __i19 = 0;
    while (__i19 < __n14) {
      if (! number_code63(code(s, __i19))) {
        return false;
      }
      __i19 = __i19 + 1;
    }
    return some63(s);
  });
  _G.numeric63 = numeric63;
  _G.numeric63 = numeric63;
  tostring = (function (x) {
    return x.toString();
  });
  _G.tostring = tostring;
  _G.tostring = tostring;
  escape = (function (s) {
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
  });
  _G.escape = escape;
  _G.escape = escape;
  simple_id63 = (function (x) {
    var __id3 = string63(x);
    var __e17;
    if (__id3) {
      var ____id = ((function () {
        try {
          return [true, read_string(x)];
        }
        catch (__e89) {
          return [false, __e89];
        }
      }))();
      var __ok = ____id[0];
      var __v9 = ____id[1];
      __e17 = __ok && __v9 === x;
    } else {
      __e17 = __id3;
    }
    return __e17;
  });
  _G.simpleId63 = simple_id63;
  _G.simple_id63 = simple_id63;
  str = (function (x, stack) {
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
              if (string_literal63(x)) {
                return x;
              } else {
                if (simple_id63(x)) {
                  return x;
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
                          var __s = "(";
                          var __sp = "";
                          var __xs11 = [];
                          var __ks = [];
                          var __l4 = stack || [];
                          add(__l4, x);
                          var ____o10 = x;
                          var __k16 = undefined;
                          for (__k16 in ____o10) {
                            var __v10 = ____o10[__k16];
                            var __e18;
                            if (numeric63(__k16)) {
                              __e18 = parseInt(__k16);
                            } else {
                              __e18 = __k16;
                            }
                            var __k17 = __e18;
                            if (number63(__k17)) {
                              __xs11[__k17] = str(__v10, __l4);
                            } else {
                              add(__ks, str(__k17, __l4) + ":");
                              add(__ks, str(__v10, __l4));
                            }
                          }
                          drop(__l4);
                          var ____o11 = join(__xs11, __ks);
                          var ____i22 = undefined;
                          for (____i22 in ____o11) {
                            var __v11 = ____o11[____i22];
                            var __e19;
                            if (numeric63(____i22)) {
                              __e19 = parseInt(____i22);
                            } else {
                              __e19 = ____i22;
                            }
                            var ____i221 = __e19;
                            __s = __s + __sp + __v11;
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
  });
  _G.str = str;
  _G.str = str;
  apply = (function (f, args) {
    var __args = stash(args);
    return f.apply(f, __args);
  });
  _G.apply = apply;
  _G.apply = apply;
  call = (function (f, ...__r80) {
    var ____r80 = unstash(__r80);
    var __f = destash33(f, ____r80);
    var ____id1 = ____r80;
    var __args11 = cut(____id1, 0);
    return apply(__f, __args11);
  });
  _G.call = call;
  _G.call = call;
  setenv = (function (k, ...__r81) {
    var ____r81 = unstash(__r81);
    var __k18 = destash33(k, ____r81);
    var ____id2 = ____r81;
    var __keys = cut(____id2, 0);
    if (string63(__k18)) {
      var __e20;
      if (__keys.toplevel) {
        __e20 = hd(_G.environment);
      } else {
        __e20 = last(_G.environment);
      }
      var __frame = __e20;
      var __entry = __frame[__k18] || {};
      var ____o12 = __keys;
      var __k19 = undefined;
      for (__k19 in ____o12) {
        var __v12 = ____o12[__k19];
        var __e21;
        if (numeric63(__k19)) {
          __e21 = parseInt(__k19);
        } else {
          __e21 = __k19;
        }
        var __k20 = __e21;
        __entry[__k20] = __v12;
      }
      __frame[__k18] = __entry;
      return __frame[__k18];
    }
  });
  _G.setenv = setenv;
  _G.setenv = setenv;
  print = (function (x) {
    return console.log(x);
  });
  _G.print = print;
  _G.print = print;
  abs = Math.abs;
  _G.abs = abs;
  _G.abs = abs;
  acos = Math.acos;
  _G.acos = acos;
  _G.acos = acos;
  asin = Math.asin;
  _G.asin = asin;
  _G.asin = asin;
  atan = Math.atan;
  _G.atan = atan;
  _G.atan = atan;
  atan2 = Math.atan2;
  _G.atan2 = atan2;
  _G.atan2 = atan2;
  ceil = Math.ceil;
  _G.ceil = ceil;
  _G.ceil = ceil;
  cos = Math.cos;
  _G.cos = cos;
  _G.cos = cos;
  floor = Math.floor;
  _G.floor = floor;
  _G.floor = floor;
  log = Math.log;
  _G.log = log;
  _G.log = log;
  log10 = Math.log10;
  _G.log10 = log10;
  _G.log10 = log10;
  max = Math.max;
  _G.max = max;
  _G.max = max;
  min = Math.min;
  _G.min = min;
  _G.min = min;
  pow = Math.pow;
  _G.pow = pow;
  _G.pow = pow;
  random = Math.random;
  _G.random = random;
  _G.random = random;
  sin = Math.sin;
  _G.sin = sin;
  _G.sin = sin;
  sinh = Math.sinh;
  _G.sinh = sinh;
  _G.sinh = sinh;
  sqrt = Math.sqrt;
  _G.sqrt = sqrt;
  _G.sqrt = sqrt;
  tan = Math.tan;
  _G.tan = tan;
  _G.tan = tan;
  tanh = Math.tanh;
  _G.tanh = tanh;
  _G.tanh = tanh;
  trunc = Math.floor;
  _G.trunc = trunc;
  _G.trunc = trunc;
  setenv("quote", {["_stash"]: true, ["macro"]: (function (form) {
    return quoted(form);
  })});
  setenv("quasiquote", {["_stash"]: true, ["macro"]: (function (form) {
    return quasiexpand(form, 1);
  })});
  setenv("set", {["_stash"]: true, ["macro"]: (function (...args) {
    var __args2 = unstash(args);
    return join(["do"], map((function (__x39) {
      var ____id4 = __x39;
      var __lh = ____id4[0];
      var __rh = ____id4[1];
      return ["%set", __lh, __rh];
    }), pair(__args2)));
  })});
  setenv("at", {["_stash"]: true, ["macro"]: (function (l, i) {
    return ["get", l, i];
  })});
  setenv("wipe", {["_stash"]: true, ["macro"]: (function (place) {
    return ["%delete", place];
  })});
  setenv("list", {["_stash"]: true, ["macro"]: (function (...body) {
    var __body = unstash(body);
    var __x43 = unique("x");
    var __l5 = [];
    var __forms = [];
    var ____o13 = __body;
    var __k21 = undefined;
    for (__k21 in ____o13) {
      var __v13 = ____o13[__k21];
      var __e23;
      if (numeric63(__k21)) {
        __e23 = parseInt(__k21);
      } else {
        __e23 = __k21;
      }
      var __k22 = __e23;
      if (number63(__k22)) {
        __l5[__k22] = __v13;
      } else {
        add(__forms, ["set", ["get", __x43, ["quote", __k22]], __v13]);
      }
    }
    if (some63(__forms)) {
      return join(["let", __x43, join(["%array"], __l5)], __forms, [__x43]);
    } else {
      return join(["%array"], __l5);
    }
  })});
  setenv("if", {["_stash"]: true, ["macro"]: (function (...branches) {
    var __branches = unstash(branches);
    return hd(expand_if(__branches));
  })});
  setenv("case", {["_stash"]: true, ["macro"]: (function (expr, ...__r88) {
    var ____r88 = unstash(__r88);
    var __expr = destash33(expr, ____r88);
    var ____id5 = ____r88;
    var __clauses = cut(____id5, 0);
    var __x51 = unique("x");
    var __eq = (function (_) {
      return ["=", ["quote", _], __x51];
    });
    var __cl = (function (__x54) {
      var ____id6 = __x54;
      var __a1 = ____id6[0];
      var __b1 = ____id6[1];
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
    });
    return ["let", __x51, __expr, join(["if"], apply(join, map(__cl, pair(__clauses))))];
  })});
  setenv("when", {["_stash"]: true, ["macro"]: (function (cond, ...__r91) {
    var ____r91 = unstash(__r91);
    var __cond = destash33(cond, ____r91);
    var ____id7 = ____r91;
    var __body1 = cut(____id7, 0);
    return ["if", __cond, join(["do"], __body1)];
  })});
  setenv("unless", {["_stash"]: true, ["macro"]: (function (cond, ...__r92) {
    var ____r92 = unstash(__r92);
    var __cond1 = destash33(cond, ____r92);
    var ____id8 = ____r92;
    var __body2 = cut(____id8, 0);
    return ["if", ["not", __cond1], join(["do"], __body2)];
  })});
  setenv("obj", {["_stash"]: true, ["macro"]: (function (...body) {
    var __body3 = unstash(body);
    return join(["%object"], mapo((function (x) {
      return x;
    }), __body3));
  })});
  setenv("let", {["_stash"]: true, ["macro"]: (function (bs, ...__r94) {
    var ____r94 = unstash(__r94);
    var __bs = destash33(bs, ____r94);
    var ____id9 = ____r94;
    var __body4 = cut(____id9, 0);
    if (atom63(__bs)) {
      return join(["let", [__bs, hd(__body4)]], tl(__body4));
    } else {
      if (none63(__bs)) {
        return join(["do"], __body4);
      } else {
        var ____id10 = __bs;
        var __lh1 = ____id10[0];
        var __rh1 = ____id10[1];
        var __bs2 = cut(____id10, 2);
        var ____id11 = bind(__lh1, either(__rh1, "nil"));
        var __id12 = ____id11[0];
        var __val = ____id11[1];
        var __bs1 = cut(____id11, 2);
        var __renames = [];
        if (! id_literal63(__id12)) {
          var __id111 = unique(__id12);
          __renames = [__id12, __id111];
          __id12 = __id111;
        }
        return ["do", ["%local", __id12, __val], ["let-symbol", __renames, join(["let", join(__bs1, __bs2)], __body4)]];
      }
    }
  })});
  setenv("with", {["_stash"]: true, ["macro"]: (function (x, v, ...__r95) {
    var ____r95 = unstash(__r95);
    var __x76 = destash33(x, ____r95);
    var __v14 = destash33(v, ____r95);
    var ____id13 = ____r95;
    var __body5 = cut(____id13, 0);
    return join(["let", [__x76, __v14]], __body5, [__x76]);
  })});
  setenv("let-when", {["_stash"]: true, ["macro"]: (function (x, v, ...__r96) {
    var ____r96 = unstash(__r96);
    var __x80 = destash33(x, ____r96);
    var __v15 = destash33(v, ____r96);
    var ____id14 = ____r96;
    var __body6 = cut(____id14, 0);
    var __y4 = unique("y");
    return ["let", __y4, __v15, ["when", ["yes", __y4], join(["let", [__x80, __y4]], __body6)]];
  })});
  setenv("void", {["_stash"]: true, ["macro"]: (function (...body) {
    var __body7 = unstash(body);
    return join(["do"], __body7, [["do"]]);
  })});
  setenv("%setenv", {["_stash"]: true, ["macro"]: (function (name, ...__r97) {
    var ____r97 = unstash(__r97);
    var __name = destash33(name, ____r97);
    var ____id15 = ____r97;
    var __keys1 = cut(____id15, 0);
    return ["void", join(["setenv", ["quote", __name]], __keys1)];
  })});
  setenv("define-macro", {["_stash"]: true, ["macro"]: (function (name, args, ...__r98) {
    var ____r98 = unstash(__r98);
    var __name1 = destash33(name, ____r98);
    var __args3 = destash33(args, ____r98);
    var ____id16 = ____r98;
    var __body8 = cut(____id16, 0);
    var ____x92 = ["%setenv", __name1];
    ____x92.macro = join(["fn", __args3], __body8);
    return ____x92;
  })});
  setenv("define-special", {["_stash"]: true, ["macro"]: (function (name, args, ...__r99) {
    var ____r99 = unstash(__r99);
    var __name2 = destash33(name, ____r99);
    var __args4 = destash33(args, ____r99);
    var ____id17 = ____r99;
    var __body9 = cut(____id17, 0);
    var ____x94 = ["%setenv", __name2];
    ____x94.special = join(["fn", __args4], __body9);
    return join(____x94, keys(__body9));
  })});
  setenv("define-symbol-macro", {["_stash"]: true, ["macro"]: (function (name, expansion) {
    var ____x96 = ["%setenv", name];
    ____x96.symbol = ["quote", expansion];
    return ____x96;
  })});
  setenv("define-reader", {["_stash"]: true, ["macro"]: (function (__x98, ...__r101) {
    var ____id18 = __x98;
    var __char = ____id18[0];
    var __s11 = ____id18[1];
    var ____r101 = unstash(__r101);
    var ____x98 = destash33(__x98, ____r101);
    var ____id19 = ____r101;
    var __body10 = cut(____id19, 0);
    return ["set", ["get", "read-table", __char], join(["fn", [__s11]], __body10)];
  })});
  setenv("define", {["_stash"]: true, ["macro"]: (function (name, x, ...__r102) {
    var ____r102 = unstash(__r102);
    var __name3 = destash33(name, ____r102);
    var __x103 = destash33(x, ____r102);
    var ____id20 = ____r102;
    var __body11 = cut(____id20, 0);
    setenv(__name3, {["_stash"]: true, ["variable"]: true});
    if (some63(__body11)) {
      return join(["%local-function", __name3], bind42(__x103, __body11));
    } else {
      return ["%local", __name3, __x103];
    }
  })});
  setenv("define-global", {["_stash"]: true, ["macro"]: (function (name, x, ...__r103) {
    var ____r103 = unstash(__r103);
    var __name4 = destash33(name, ____r103);
    var __x106 = destash33(x, ____r103);
    var ____id21 = ____r103;
    var __body12 = cut(____id21, 0);
    setenv(__name4, {["_stash"]: true, ["toplevel"]: true, ["variable"]: true});
    if (some63(__body12)) {
      return ["do", join(["%global-function", __name4], bind42(__x106, __body12)), ["%set", ["_G", "." + __name4], __name4], ["%set", ["get", "_G", ["quote", compile(__name4)]], __name4]];
    } else {
      return ["do", ["%set", __name4, __x106], ["%set", ["_G", "." + __name4], __name4], ["%set", ["get", "_G", ["quote", compile(__name4)]], __name4]];
    }
  })});
  setenv("with-frame", {["_stash"]: true, ["macro"]: (function (...body) {
    var __body13 = unstash(body);
    var __x121 = unique("x");
    return ["do", ["add", ["get", "_G", ["quote", "environment"]], ["obj"]], ["with", __x121, join(["do"], __body13), ["drop", ["get", "_G", ["quote", "environment"]]]]];
  })});
  setenv("with-bindings", {["_stash"]: true, ["macro"]: (function (__x132, ...__r104) {
    var ____id22 = __x132;
    var __names = ____id22[0];
    var ____r104 = unstash(__r104);
    var ____x132 = destash33(__x132, ____r104);
    var ____id23 = ____r104;
    var __body14 = cut(____id23, 0);
    var __x133 = unique("x");
    var ____x138 = ["setenv", ["at", __x133, 1]];
    ____x138.variable = true;
    var ____x140 = ["setenv", __x133];
    ____x140.variable = true;
    return join(["with-frame", ["each", __x133, __names, ["if", ["default-assignment?", __x133], ____x138, ____x140]]], __body14);
  })});
  setenv("let-macro", {["_stash"]: true, ["macro"]: (function (definitions, ...__r105) {
    var ____r105 = unstash(__r105);
    var __definitions = destash33(definitions, ____r105);
    var ____id24 = ____r105;
    var __body15 = cut(____id24, 0);
    add(_G.environment, {});
    map((function (m) {
      return _eval(join(["define-macro"], m));
    }), __definitions);
    var ____x141 = join(["do"], macroexpand(__body15));
    drop(_G.environment);
    return ____x141;
  })});
  setenv("let-symbol", {["_stash"]: true, ["macro"]: (function (expansions, ...__r107) {
    var ____r107 = unstash(__r107);
    var __expansions = destash33(expansions, ____r107);
    var ____id25 = ____r107;
    var __body16 = cut(____id25, 0);
    add(_G.environment, {});
    map((function (__x145) {
      var ____id26 = __x145;
      var __name5 = ____id26[0];
      var __exp = ____id26[1];
      return _eval(["define-symbol-macro", __name5, __exp]);
    }), pair(__expansions));
    var ____x144 = join(["do"], macroexpand(__body16));
    drop(_G.environment);
    return ____x144;
  })});
  setenv("let-unique", {["_stash"]: true, ["macro"]: (function (names, ...__r109) {
    var ____r109 = unstash(__r109);
    var __names1 = destash33(names, ____r109);
    var ____id27 = ____r109;
    var __body17 = cut(____id27, 0);
    var __bs11 = map((function (n) {
      return [n, ["unique", ["quote", n]]];
    }), __names1);
    return join(["let", apply(join, __bs11)], __body17);
  })});
  setenv("fn", {["_stash"]: true, ["macro"]: (function (args, ...__r111) {
    var ____r111 = unstash(__r111);
    var __args5 = destash33(args, ____r111);
    var ____id28 = ____r111;
    var __body18 = cut(____id28, 0);
    return join(["%function"], bind42(__args5, __body18));
  })});
  setenv("apply", {["_stash"]: true, ["macro"]: (function (f, ...__r112) {
    var ____r112 = unstash(__r112);
    var __f1 = destash33(f, ____r112);
    var ____id29 = ____r112;
    var __args6 = cut(____id29, 0);
    if (_35(__args6) > 1) {
      return ["%call", "apply", __f1, ["join", join(["list"], almost(__args6)), last(__args6)]];
    } else {
      return join(["%call", "apply", __f1], __args6);
    }
  })});
  setenv("guard", {["_stash"]: true, ["macro"]: (function (expr) {
    return [["fn", join(), ["%try", ["list", true, expr]]]];
  })});
  setenv("each", {["_stash"]: true, ["macro"]: (function (x, t, ...__r114) {
    var ____r114 = unstash(__r114);
    var __x161 = destash33(x, ____r114);
    var __t2 = destash33(t, ____r114);
    var ____id30 = ____r114;
    var __body19 = cut(____id30, 0);
    var __o14 = unique("o");
    var __n19 = unique("n");
    var __i25 = unique("i");
    var __e24;
    if (atom63(__x161)) {
      __e24 = [__i25, __x161];
    } else {
      var __e25;
      if (_35(__x161) > 1) {
        __e25 = __x161;
      } else {
        __e25 = [__i25, hd(__x161)];
      }
      __e24 = __e25;
    }
    var ____id31 = __e24;
    var __k23 = ____id31[0];
    var __v16 = ____id31[1];
    return ["let", [__o14, __t2, __k23, "nil"], ["%for", __o14, __k23, ["let", [__v16, ["get", __o14, __k23]], join(["let", __k23, ["if", ["numeric?", __k23], ["parseInt", __k23], __k23]], __body19)]]];
  })});
  setenv("for", {["_stash"]: true, ["macro"]: (function (i, to, ...__r115) {
    var ____r115 = unstash(__r115);
    var __i26 = destash33(i, ____r115);
    var __to = destash33(to, ____r115);
    var ____id32 = ____r115;
    var __body20 = cut(____id32, 0);
    return ["let", __i26, 0, join(["while", ["<", __i26, __to]], __body20, [["inc", __i26]])];
  })});
  setenv("step", {["_stash"]: true, ["macro"]: (function (v, t, ...__r116) {
    var ____r116 = unstash(__r116);
    var __v17 = destash33(v, ____r116);
    var __t3 = destash33(t, ____r116);
    var ____id33 = ____r116;
    var __body21 = cut(____id33, 0);
    var __x179 = unique("x");
    var __i27 = unique("i");
    return ["let", [__x179, __t3], ["for", __i27, ["#", __x179], join(["let", [__v17, ["at", __x179, __i27]]], __body21)]];
  })});
  setenv("set-of", {["_stash"]: true, ["macro"]: (function (...xs) {
    var __xs12 = unstash(xs);
    var __l6 = [];
    var ____o15 = __xs12;
    var ____i28 = undefined;
    for (____i28 in ____o15) {
      var __x187 = ____o15[____i28];
      var __e26;
      if (numeric63(____i28)) {
        __e26 = parseInt(____i28);
      } else {
        __e26 = ____i28;
      }
      var ____i281 = __e26;
      __l6[__x187] = true;
    }
    return join(["obj"], __l6);
  })});
  setenv("join!", {["_stash"]: true, ["macro"]: (function (a, ...__r117) {
    var ____r117 = unstash(__r117);
    var __a2 = destash33(a, ____r117);
    var ____id34 = ____r117;
    var __bs21 = cut(____id34, 0);
    return ["set", __a2, join(["join", __a2], __bs21)];
  })});
  setenv("cat!", {["_stash"]: true, ["macro"]: (function (a, ...__r118) {
    var ____r118 = unstash(__r118);
    var __a3 = destash33(a, ____r118);
    var ____id35 = ____r118;
    var __bs3 = cut(____id35, 0);
    return ["set", __a3, join(["cat", __a3], __bs3)];
  })});
  setenv("inc", {["_stash"]: true, ["macro"]: (function (n, by) {
    var __e27;
    if (nil63(by)) {
      __e27 = 1;
    } else {
      __e27 = by;
    }
    return ["set", n, ["+", n, __e27]];
  })});
  setenv("dec", {["_stash"]: true, ["macro"]: (function (n, by) {
    var __e28;
    if (nil63(by)) {
      __e28 = 1;
    } else {
      __e28 = by;
    }
    return ["set", n, ["-", n, __e28]];
  })});
  setenv("with-indent", {["_stash"]: true, ["macro"]: (function (form) {
    var __x197 = unique("x");
    return ["do", ["inc", "indent-level"], ["with", __x197, form, ["dec", "indent-level"]]];
  })});
  setenv("export", {["_stash"]: true, ["macro"]: (function (...names) {
    var __names2 = unstash(names);
    return join(["do"], map((function (k) {
      return ["set", ["get", "exports", ["quote", k]], k, ["exports", "." + camel_case(k)], ["get", "exports", ["quote", k]]];
    }), __names2));
  })});
  setenv("when-compiling", {["_stash"]: true, ["macro"]: (function (...body) {
    var __body22 = unstash(body);
    return _eval(join(["do"], __body22));
  })});
  setenv("during-compilation", {["_stash"]: true, ["macro"]: (function (...body) {
    var __body23 = unstash(body);
    var __x210 = expand(join(["do"], __body23));
    _eval(__x210);
    return __x210;
  })});
  setenv("class", {["_stash"]: true, ["macro"]: (function (x, ...__r123) {
    var ____r123 = unstash(__r123);
    var __x212 = destash33(x, ____r123);
    var ____id36 = ____r123;
    var __body24 = cut(____id36, 0);
    if (atom63(__x212)) {
      return join(["%class", [__x212]], __body24);
    } else {
      return join(["%class", __x212], __body24);
    }
  })});
  setenv(".", {["_stash"]: true, ["macro"]: (function (...args) {
    var __args7 = unstash(args);
    if (none63(__args7)) {
      return ["get", "this", ["quote", "constructor"]];
    } else {
      if (one63(__args7)) {
        return join([".", "this", hd(__args7)], tl(__args7));
      } else {
        var ____id37 = __args7;
        var __name6 = ____id37[0];
        var __a4 = ____id37[1];
        var __bs4 = cut(____id37, 2);
        var __e29;
        if (atom63(__a4)) {
          __e29 = ["quote", compile(__a4)];
        } else {
          var __e30;
          if ("quote" === hd(__a4)) {
            __e30 = ["quote", compile(__a4[1])];
          } else {
            __e30 = __a4;
          }
          __e29 = __e30;
        }
        var __prop = __e29;
        var __expr1 = ["get", __name6, __prop];
        if (! atom63(__a4) && "quote" === hd(__a4) || string_literal63(__a4) || none63(__bs4)) {
          return __expr1;
        } else {
          return join([__expr1], __bs4);
        }
      }
    }
  })});
  setenv("try", {["_stash"]: true, ["macro"]: (function (...body) {
    var __body25 = unstash(body);
    var __e22 = unique("e");
    return join(["%condition-case", __e22, join(["do"], map((function (x) {
      if (!( obj63(x) && in63(hd(x), ["catch", "finally"]))) {
        return x;
      }
    }), __body25))], map((function (x) {
      if (obj63(x)) {
        if (hd(x) === "finally") {
          return x;
        } else {
          if (hd(x) === "catch") {
            var ____id38 = x;
            var ___ = ____id38[0];
            var __type = ____id38[1];
            var ___var = ____id38[2];
            var __body26 = cut(____id38, 3);
            return ["catch", __type, join(["let", [___var, __e22]], __body26)];
          }
        }
      }
    }), __body25));
  })});
  setenv("throw", {["_stash"]: true, ["macro"]: (function (x) {
    return ["%throw", x];
  })});
  var __exports = {};
  var __self = __exports;
  var __module = {["exports"]: __exports};
  getenv = (function (k, p) {
    if (string63(k)) {
      var __i29 = edge(_G.environment);
      while (__i29 >= 0) {
        var __b2 = _G.environment[__i29][k];
        if (is63(__b2)) {
          var __e40;
          if (p) {
            __e40 = __b2[p];
          } else {
            __e40 = __b2;
          }
          return __e40;
        } else {
          __i29 = __i29 - 1;
        }
      }
    }
  });
  _G.getenv = getenv;
  _G.getenv;
  _G.getenv = getenv;
  var macro_function = (function (k) {
    return getenv(k, "macro");
  });
  var macro63 = (function (k) {
    return is63(macro_function(k));
  });
  var special63 = (function (k) {
    return is63(getenv(k, "special"));
  });
  var special_form63 = (function (form) {
    return ! atom63(form) && special63(hd(form));
  });
  var statement63 = (function (k) {
    return special63(k) && getenv(k, "stmt");
  });
  var symbol_expansion = (function (k) {
    return getenv(k, "symbol");
  });
  var symbol_macro63 = (function (k) {
    return is63(symbol_expansion(k));
  });
  var variable63 = (function (k) {
    return is63(getenv(k, "variable"));
  });
  bound63 = (function (x) {
    return macro63(x) || special63(x) || symbol_macro63(x) || variable63(x);
  });
  _G.bound63 = bound63;
  _G.bound63;
  _G.bound63 = bound63;
  quoted = (function (form) {
    if (string63(form)) {
      return escape(form);
    } else {
      if (atom63(form)) {
        return form;
      } else {
        return join(["list"], map(quoted, form));
      }
    }
  });
  _G.quoted = quoted;
  _G.quoted;
  _G.quoted = quoted;
  var literal = (function (s) {
    if (string_literal63(s)) {
      return s;
    } else {
      return quoted(s);
    }
  });
  var stash42 = (function (args) {
    if (keys63(args)) {
      var __l7 = ["%object", "\"_stash\"", true];
      var ____o16 = args;
      var __k24 = undefined;
      for (__k24 in ____o16) {
        var __v18 = ____o16[__k24];
        var __e41;
        if (numeric63(__k24)) {
          __e41 = parseInt(__k24);
        } else {
          __e41 = __k24;
        }
        var __k25 = __e41;
        if (! number63(__k25)) {
          add(__l7, literal(__k25));
          add(__l7, __v18);
        }
      }
      return join(args, [__l7]);
    } else {
      return args;
    }
  });
  var bias = (function (k) {
    return k;
  });
  var default_assignment_op = "o";
  default_assignment63 = (function (x) {
    return ! atom63(x) && hd(x) === default_assignment_op;
  });
  _G.defaultAssignment63 = default_assignment63;
  _G.defaultAssignment63;
  _G.default_assignment63 = default_assignment63;
  bind = (function (lh, rh) {
    if (atom63(lh)) {
      return [lh, rh];
    } else {
      if (default_assignment63(lh)) {
        return bind(lh[1], ["if", ["is?", rh], rh, lh[2]]);
      } else {
        var __id39 = unique("id");
        var __bs5 = [__id39, rh];
        var ____o17 = lh;
        var __k26 = undefined;
        for (__k26 in ____o17) {
          var __v19 = ____o17[__k26];
          var __e42;
          if (numeric63(__k26)) {
            __e42 = parseInt(__k26);
          } else {
            __e42 = __k26;
          }
          var __k27 = __e42;
          var __e43;
          if (__k27 === "rest") {
            __e43 = ["cut", __id39, _35(lh)];
          } else {
            __e43 = ["get", __id39, ["quote", bias(__k27)]];
          }
          var __x237 = __e43;
          if (is63(__k27)) {
            var __e44;
            if (__v19 === true) {
              __e44 = __k27;
            } else {
              __e44 = __v19;
            }
            var __k28 = __e44;
            __bs5 = join(__bs5, bind(__k28, __x237));
          }
        }
        return __bs5;
      }
    }
  });
  _G.bind = bind;
  _G.bind;
  _G.bind = bind;
  bind42 = (function (args, body) {
    var __args12 = [];
    var rest = (function (r) {
      __args12.rest = r;
      return ["unstash", r];
    });
    if (atom63(args)) {
      return [__args12, join(["let", [args, rest(args)]], body)];
    } else {
      var __bs6 = [];
      var __r145 = unique("r");
      var ____o18 = args;
      var __k29 = undefined;
      for (__k29 in ____o18) {
        var __v20 = ____o18[__k29];
        var __e45;
        if (numeric63(__k29)) {
          __e45 = parseInt(__k29);
        } else {
          __e45 = __k29;
        }
        var __k30 = __e45;
        if (number63(__k30)) {
          if (atom63(__v20)) {
            add(__args12, __v20);
          } else {
            var __x245 = unique("x");
            add(__args12, __x245);
            __bs6 = join(__bs6, [__v20, __x245]);
          }
        }
      }
      if (keys63(args)) {
        __bs6 = join(__bs6, [__r145, rest(__r145)]);
        var __n24 = _35(__args12);
        var __i33 = 0;
        while (__i33 < __n24) {
          var __v21 = __args12[__i33];
          __bs6 = join(__bs6, [__v21, ["destash!", __v21, __r145]]);
          __i33 = __i33 + 1;
        }
        __bs6 = join(__bs6, [keys(args), __r145]);
      }
      return [__args12, join(["let", __bs6], body)];
    }
  });
  _G.bind42 = bind42;
  _G.bind42;
  _G.bind42 = bind42;
  var quoting63 = (function (depth) {
    return number63(depth);
  });
  var quasiquoting63 = (function (depth) {
    return quoting63(depth) && depth > 0;
  });
  var can_unquote63 = (function (depth) {
    return quoting63(depth) && depth === 1;
  });
  var quasisplice63 = (function (x, depth) {
    return can_unquote63(depth) && ! atom63(x) && hd(x) === "unquote-splicing";
  });
  var expand_local = (function (__x253) {
    var ____id40 = __x253;
    var __x254 = ____id40[0];
    var __name7 = ____id40[1];
    var __value = ____id40[2];
    setenv(__name7, {["_stash"]: true, ["variable"]: true});
    return ["%local", __name7, macroexpand(__value)];
  });
  var expand_function = (function (__x256) {
    var ____id41 = __x256;
    var __x257 = ____id41[0];
    var __args8 = ____id41[1];
    var __body27 = cut(____id41, 2);
    add(_G.environment, {});
    var ____o19 = __args8;
    var ____i34 = undefined;
    for (____i34 in ____o19) {
      var ____x258 = ____o19[____i34];
      var __e46;
      if (numeric63(____i34)) {
        __e46 = parseInt(____i34);
      } else {
        __e46 = ____i34;
      }
      var ____i341 = __e46;
      if (default_assignment63(____x258)) {
        setenv(____x258[1], {["_stash"]: true, ["variable"]: true});
      } else {
        setenv(____x258, {["_stash"]: true, ["variable"]: true});
      }
    }
    var ____x259 = join(["%function", __args8], macroexpand(__body27));
    drop(_G.environment);
    return ____x259;
  });
  var expand_table = (function (__x261) {
    var ____id42 = __x261;
    var __x262 = ____id42[0];
    var __args9 = cut(____id42, 1);
    var __expr2 = join([__x262], keys(__args9));
    var ____x264 = __args9;
    var ____i35 = 0;
    while (____i35 < _35(____x264)) {
      var __x265 = ____x264[____i35];
      if (atom63(__x265)) {
        add(__expr2, [__x265, macroexpand(__x265)]);
      } else {
        if (_35(__x265) <= 2) {
          var ____id43 = __x265;
          var __name8 = ____id43[0];
          var __v22 = ____id43[1];
          add(__expr2, [macroexpand(__name8), macroexpand(__v22)]);
        } else {
          var ____id44 = __x265;
          var __prefix = ____id44[0];
          var __name9 = ____id44[1];
          var __args10 = ____id44[2];
          var __body28 = cut(____id44, 3);
          if (some63(__body28)) {
            add(_G.environment, {});
            var ____o20 = __args10;
            var ____i36 = undefined;
            for (____i36 in ____o20) {
              var ____x268 = ____o20[____i36];
              var __e47;
              if (numeric63(____i36)) {
                __e47 = parseInt(____i36);
              } else {
                __e47 = ____i36;
              }
              var ____i361 = __e47;
              if (default_assignment63(____x268)) {
                setenv(____x268[1], {["_stash"]: true, ["variable"]: true});
              } else {
                setenv(____x268, {["_stash"]: true, ["variable"]: true});
              }
            }
            var ____x269 = add(__expr2, join([__prefix, macroexpand(__name9), __args10], macroexpand(__body28)));
            drop(_G.environment);
            ____x269;
          } else {
            add(__expr2, [__prefix, macroexpand(__name9), macroexpand(__args10)]);
          }
        }
      }
      ____i35 = ____i35 + 1;
    }
    return __expr2;
  });
  var expand_class = (function (__x272) {
    var ____id45 = __x272;
    var __x273 = ____id45[0];
    var __name10 = ____id45[1];
    var __body29 = cut(____id45, 2);
    return join([__x273, __name10], tl(expand_table(join(["%table"], __body29))));
  });
  expand_condition_case = (function (__x276) {
    var ____id46 = __x276;
    var __x277 = ____id46[0];
    var ___var1 = ____id46[1];
    var __form = ____id46[2];
    var __clauses1 = cut(____id46, 3);
    return join(["%condition-case", ___var1, macroexpand(__form)], map((function (__x279) {
      var ____id47 = __x279;
      var __which = ____id47[0];
      var __body30 = cut(____id47, 1);
      if (__which === "finally") {
        return join([__which], map(macroexpand, __body30));
      } else {
        add(_G.environment, {});
        var ____o21 = [___var1];
        var ____i37 = undefined;
        for (____i37 in ____o21) {
          var ____x281 = ____o21[____i37];
          var __e48;
          if (numeric63(____i37)) {
            __e48 = parseInt(____i37);
          } else {
            __e48 = ____i37;
          }
          var ____i371 = __e48;
          if (default_assignment63(____x281)) {
            setenv(____x281[1], {["_stash"]: true, ["variable"]: true});
          } else {
            setenv(____x281, {["_stash"]: true, ["variable"]: true});
          }
        }
        var ____x282 = join([__which], map(macroexpand, __body30));
        drop(_G.environment);
        return ____x282;
      }
    }), __clauses1));
  });
  _G.expandConditionCase = expand_condition_case;
  _G.expandConditionCase;
  _G.expand_condition_case = expand_condition_case;
  var expand_definition = (function (__x285) {
    var ____id48 = __x285;
    var __x286 = ____id48[0];
    var __name11 = ____id48[1];
    var __args111 = ____id48[2];
    var __body31 = cut(____id48, 3);
    add(_G.environment, {});
    var ____o22 = __args111;
    var ____i38 = undefined;
    for (____i38 in ____o22) {
      var ____x287 = ____o22[____i38];
      var __e49;
      if (numeric63(____i38)) {
        __e49 = parseInt(____i38);
      } else {
        __e49 = ____i38;
      }
      var ____i381 = __e49;
      if (default_assignment63(____x287)) {
        setenv(____x287[1], {["_stash"]: true, ["variable"]: true});
      } else {
        setenv(____x287, {["_stash"]: true, ["variable"]: true});
      }
    }
    var ____x288 = join([__x286, __name11, __args111], macroexpand(__body31));
    drop(_G.environment);
    return ____x288;
  });
  var expand_macro = (function (form) {
    return macroexpand(expand1(form));
  });
  expand1 = (function (__x290) {
    var ____id49 = __x290;
    var __name12 = ____id49[0];
    var __body32 = cut(____id49, 1);
    return apply(macro_function(__name12), __body32);
  });
  _G.expand1 = expand1;
  _G.expand1;
  _G.expand1 = expand1;
  macroexpand = (function (form) {
    if (symbol_macro63(form)) {
      return macroexpand(symbol_expansion(form));
    } else {
      if (atom63(form)) {
        return form;
      } else {
        var __x291 = hd(form);
        if (__x291 === "%local") {
          return expand_local(form);
        } else {
          if (__x291 === "%function") {
            return expand_function(form);
          } else {
            if (__x291 === "%table") {
              return expand_table(form);
            } else {
              if (__x291 === "%class") {
                return expand_class(form);
              } else {
                if (__x291 === "%condition-case") {
                  return expand_condition_case(form);
                } else {
                  if (__x291 === "%global-function") {
                    return expand_definition(form);
                  } else {
                    if (__x291 === "%local-function") {
                      return expand_definition(form);
                    } else {
                      if (macro63(__x291)) {
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
        }
      }
    }
  });
  _G.macroexpand = macroexpand;
  _G.macroexpand;
  _G.macroexpand = macroexpand;
  var quasiquote_list = (function (form, depth) {
    var __xs13 = [["list"]];
    var ____o23 = form;
    var __k31 = undefined;
    for (__k31 in ____o23) {
      var __v23 = ____o23[__k31];
      var __e50;
      if (numeric63(__k31)) {
        __e50 = parseInt(__k31);
      } else {
        __e50 = __k31;
      }
      var __k32 = __e50;
      if (! number63(__k32)) {
        var __e51;
        if (quasisplice63(__v23, depth)) {
          __e51 = quasiexpand(__v23[1]);
        } else {
          __e51 = quasiexpand(__v23, depth);
        }
        var __v24 = __e51;
        last(__xs13)[__k32] = __v24;
      }
    }
    var ____x294 = form;
    var ____i40 = 0;
    while (____i40 < _35(____x294)) {
      var __x295 = ____x294[____i40];
      if (quasisplice63(__x295, depth)) {
        var __x296 = quasiexpand(__x295[1]);
        add(__xs13, __x296);
        add(__xs13, ["list"]);
      } else {
        add(last(__xs13), quasiexpand(__x295, depth));
      }
      ____i40 = ____i40 + 1;
    }
    var __pruned = keep((function (x) {
      return _35(x) > 1 || !( hd(x) === "list") || keys63(x);
    }), __xs13);
    if (one63(__pruned)) {
      return hd(__pruned);
    } else {
      return join(["join"], __pruned);
    }
  });
  quasiexpand = (function (form, depth) {
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
            return map((function (x) {
              return quasiexpand(x, depth);
            }), form);
          }
        }
      }
    }
  });
  _G.quasiexpand = quasiexpand;
  _G.quasiexpand;
  _G.quasiexpand = quasiexpand;
  expand_if = (function (__x300) {
    var ____id50 = __x300;
    var __a5 = ____id50[0];
    var __b3 = ____id50[1];
    var __c11 = cut(____id50, 2);
    if (is63(__b3)) {
      return [join(["%if", __a5, __b3], expand_if(__c11))];
    } else {
      if (is63(__a5)) {
        return [__a5];
      }
    }
  });
  _G.expandIf = expand_if;
  _G.expandIf;
  _G.expand_if = expand_if;
  indent_level = 0;
  _G.indentLevel = indent_level;
  _G.indentLevel;
  _G.indent_level = indent_level;
  indentation = (function () {
    var __s2 = "";
    var __i41 = 0;
    while (__i41 < indent_level) {
      __s2 = __s2 + "  ";
      __i41 = __i41 + 1;
    }
    return __s2;
  });
  _G.indentation = indentation;
  _G.indentation;
  _G.indentation = indentation;
  var reserved = {["="]: true, ["=="]: true, ["+"]: true, ["-"]: true, ["%"]: true, ["*"]: true, ["/"]: true, ["<"]: true, [">"]: true, ["<="]: true, [">="]: true, ["break"]: true, ["case"]: true, ["catch"]: true, ["class"]: true, ["const"]: true, ["continue"]: true, ["debugger"]: true, ["default"]: true, ["delete"]: true, ["do"]: true, ["else"]: true, ["eval"]: true, ["export"]: true, ["extends"]: true, ["finally"]: true, ["for"]: true, ["function"]: true, ["if"]: true, ["import"]: true, ["in"]: true, ["instanceof"]: true, ["new"]: true, ["return"]: true, ["switch"]: true, ["throw"]: true, ["try"]: true, ["typeof"]: true, ["var"]: true, ["void"]: true, ["while"]: true, ["with"]: true};
  reserved63 = (function (x) {
    return has63(reserved, x);
  });
  _G.reserved63 = reserved63;
  _G.reserved63;
  _G.reserved63 = reserved63;
  var valid_code63 = (function (n) {
    return number_code63(n) || n > 64 && n < 91 || n > 96 && n < 123 || n === 95;
  });
  accessor63 = (function (x) {
    return string63(x) && _35(x) > 1 && code(x, 0) === 46 && !( code(x, 1) === 46) || obj63(x) && hd(x) === "%brackets";
  });
  _G.accessor63 = accessor63;
  _G.accessor63;
  _G.accessor63 = accessor63;
  camel_case_regex = new RegExp("[-](\\w|$)", "g");
  _G.camelCaseRegex = camel_case_regex;
  _G.camelCaseRegex;
  _G.camel_case_regex = camel_case_regex;
  camel_case = (function (name) {
    if (string63(name)) {
      return name.replace(camel_case_regex, (function (_, x) {
        return x.toUpperCase();
      }));
    } else {
      return name;
    }
  });
  _G.camelCase = camel_case;
  _G.camelCase;
  _G.camel_case = camel_case;
  var id = (function (id, raw63) {
    var __e52;
    if (! raw63 && number_code63(code(id, 0))) {
      __e52 = "_";
    } else {
      __e52 = "";
    }
    var __id121 = __e52;
    var __i42 = 0;
    while (__i42 < _35(id)) {
      var __c2 = char(id, __i42);
      var __n30 = code(__c2);
      var __e53;
      if (__c2 === "-" && !( id === "-")) {
        __e53 = "_";
      } else {
        var __e54;
        if (valid_code63(__n30)) {
          __e54 = __c2;
        } else {
          var __e55;
          if (__i42 === 0) {
            __e55 = "_" + __n30;
          } else {
            __e55 = __n30;
          }
          __e54 = __e55;
        }
        __e53 = __e54;
      }
      var __c12 = __e53;
      __id121 = __id121 + __c12;
      __i42 = __i42 + 1;
    }
    if (! raw63 && reserved63(__id121)) {
      return "_" + __id121;
    } else {
      return __id121;
    }
  });
  valid_id63 = (function (x) {
    return some63(x) && x === id(x);
  });
  _G.validId63 = valid_id63;
  _G.validId63;
  _G.valid_id63 = valid_id63;
  var __names3 = {};
  unique = (function (x) {
    var __x304 = id(x);
    if (__names3[__x304]) {
      var __i43 = __names3[__x304];
      __names3[__x304] = __names3[__x304] + 1;
      return unique(__x304 + __i43);
    } else {
      __names3[__x304] = 1;
      return "__" + __x304;
    }
  });
  _G.unique = unique;
  _G.unique;
  _G.unique = unique;
  key = (function (k) {
    if (string63(k) && valid_id63(k)) {
      return k;
    } else {
      if (string_literal63(k) || ! string63(k)) {
        return "[" + compile(k) + "]";
      } else {
        return compile(k);
      }
    }
  });
  _G.key = key;
  _G.key;
  _G.key = key;
  mapo = (function (f, t) {
    var __o24 = [];
    var ____o25 = t;
    var __k33 = undefined;
    for (__k33 in ____o25) {
      var __v25 = ____o25[__k33];
      var __e56;
      if (numeric63(__k33)) {
        __e56 = parseInt(__k33);
      } else {
        __e56 = __k33;
      }
      var __k34 = __e56;
      var __x305 = f(__v25);
      if (is63(__x305)) {
        add(__o24, literal(__k34));
        add(__o24, __x305);
      }
    }
    return __o24;
  });
  _G.mapo = mapo;
  _G.mapo;
  _G.mapo = mapo;
  var ____x307 = [];
  var ____x308 = [];
  ____x308.js = "!";
  ____x307.not = ____x308;
  var ____x309 = [];
  ____x309["*"] = true;
  ____x309["/"] = true;
  ____x309["%"] = true;
  var ____x310 = [];
  var ____x311 = [];
  ____x311.js = "+";
  ____x310.cat = ____x311;
  var ____x312 = [];
  ____x312["+"] = true;
  ____x312["-"] = true;
  var ____x313 = [];
  ____x313["<"] = true;
  ____x313[">"] = true;
  ____x313["<="] = true;
  ____x313[">="] = true;
  var ____x314 = [];
  var ____x315 = [];
  ____x315.js = "===";
  ____x314["="] = ____x315;
  var ____x316 = [];
  ____x316.js = "==";
  ____x314["=="] = ____x316;
  var ____x317 = [];
  var ____x318 = [];
  ____x318.js = "&&";
  ____x317.and = ____x318;
  var ____x319 = [];
  var ____x320 = [];
  ____x320.js = "||";
  ____x319.or = ____x320;
  var infix = [____x307, ____x309, ____x310, ____x312, ____x313, ____x314, ____x317, ____x319];
  var unary63 = (function (form) {
    return two63(form) && in63(hd(form), ["not", "-"]);
  });
  var index = (function (k) {
    return k;
  });
  var precedence = (function (form) {
    if (!( atom63(form) || unary63(form))) {
      var ____o26 = infix;
      var __k35 = undefined;
      for (__k35 in ____o26) {
        var __v26 = ____o26[__k35];
        var __e57;
        if (numeric63(__k35)) {
          __e57 = parseInt(__k35);
        } else {
          __e57 = __k35;
        }
        var __k36 = __e57;
        if (__v26[hd(form)]) {
          return index(__k36);
        }
      }
    }
    return 0;
  });
  var getop = (function (op) {
    return find((function (level) {
      var __x322 = level[op];
      if (__x322 === true) {
        return op;
      } else {
        if (is63(__x322)) {
          return __x322.js;
        }
      }
    }), infix);
  });
  var infix63 = (function (x) {
    return is63(getop(x));
  });
  infix_operator63 = (function (x) {
    return obj63(x) && infix63(hd(x));
  });
  _G.infixOperator63 = infix_operator63;
  _G.infixOperator63;
  _G.infix_operator63 = infix_operator63;
  compile_next = (function (x, args, call63) {
    if (none63(args)) {
      if (call63) {
        return x + "()";
      } else {
        return x;
      }
    } else {
      return x + compile_args(args, call63);
    }
  });
  _G.compileNext = compile_next;
  _G.compileNext;
  _G.compile_next = compile_next;
  compile_args = (function (args, call63) {
    var __a6 = hd(args);
    if (accessor63(__a6)) {
      return compile_next(compile(camel_case(__a6)), tl(args), call63);
    } else {
      if (obj63(__a6) && accessor63(hd(__a6))) {
        var ____id51 = __a6;
        var __x323 = ____id51[0];
        var __ys = cut(____id51, 1);
        var __s3 = compile_next(compile(camel_case(__x323)), __ys, true);
        return compile_next(__s3, tl(args), call63);
      } else {
        var __s4 = "";
        var __c3 = "";
        var __i46 = 0;
        while (__i46 < _35(args)) {
          var __x324 = args[__i46];
          if (default_assignment63(__x324)) {
            var ____id52 = __x324;
            var ___1 = ____id52[0];
            var __x1111 = ____id52[1];
            var __val1 = ____id52[2];
            __s4 = __s4 + __c3 + compile(__x1111) + " = " + compile(__val1);
          } else {
            if (accessor63(__x324) || obj63(__x324) && accessor63(hd(__x324))) {
              return compile_next("(" + __s4 + ")", cut(args, __i46), call63);
            } else {
              __s4 = __s4 + __c3 + compile(__x324);
            }
          }
          __c3 = ", ";
          __i46 = __i46 + 1;
        }
        if (args.rest) {
          __s4 = __s4 + __c3 + "..." + compile(args.rest);
        }
        return "(" + __s4 + ")";
      }
    }
  });
  _G.compileArgs = compile_args;
  _G.compileArgs;
  _G.compile_args = compile_args;
  var escape_newlines = (function (s) {
    var __s12 = "";
    var __i47 = 0;
    while (__i47 < _35(s)) {
      var __c4 = char(s, __i47);
      var __e58;
      if (__c4 === "\n") {
        __e58 = "\\n";
      } else {
        var __e59;
        if (__c4 === "\r") {
          __e59 = "";
        } else {
          __e59 = __c4;
        }
        __e58 = __e59;
      }
      __s12 = __s12 + __e58;
      __i47 = __i47 + 1;
    }
    return __s12;
  });
  accessor = (function (x) {
    var __prop1 = compile_atom(clip(x, 1), true);
    if (valid_id63(__prop1)) {
      return "." + __prop1;
    } else {
      return "[" + escape(__prop1) + "]";
    }
  });
  _G.accessor = accessor;
  _G.accessor;
  _G.accessor = accessor;
  var compile_atom = (function (x, raw63) {
    if (! raw63 && x === "nil") {
      return "undefined";
    } else {
      if (accessor63(x)) {
        return accessor(x);
      } else {
        if (id_literal63(x)) {
          return inner(x);
        } else {
          if (string_literal63(x)) {
            return escape_newlines(x);
          } else {
            if (string63(x)) {
              return id(x, raw63);
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
  });
  var terminator = (function (stmt63) {
    if (! stmt63) {
      return "";
    } else {
      return ";\n";
    }
  });
  var compile_special = (function (form, stmt63) {
    var ____id53 = form;
    var __x325 = ____id53[0];
    var __args121 = cut(____id53, 1);
    var ____id54 = getenv(__x325);
    var __special = ____id54.special;
    var __stmt = ____id54.stmt;
    var __self_tr63 = ____id54.tr;
    var __tr = terminator(stmt63 && ! __self_tr63);
    return apply(__special, __args121) + __tr;
  });
  var parenthesize_call63 = (function (x) {
    return ! atom63(x) && hd(x) === "%function" || precedence(x) > 0;
  });
  compile_call = (function (f, args, parens63) {
    var __f11 = compile(f);
    var __args13 = compile_args(stash42(args));
    if (parens63 || parenthesize_call63(f)) {
      return "(" + __f11 + ")" + __args13;
    } else {
      return __f11 + __args13;
    }
  });
  _G.compileCall = compile_call;
  _G.compileCall;
  _G.compile_call = compile_call;
  var op_delims = (function (parent, child, ...__r192) {
    var ____r192 = unstash(__r192);
    var __parent = destash33(parent, ____r192);
    var __child = destash33(child, ____r192);
    var ____id55 = ____r192;
    var __right = ____id55.right;
    var __e60;
    if (__right) {
      __e60 = _6261;
    } else {
      __e60 = _62;
    }
    if (__e60(precedence(__child), precedence(__parent))) {
      return ["(", ")"];
    } else {
      return ["", ""];
    }
  });
  var compile_infix = (function (form) {
    var ____id56 = form;
    var __op = ____id56[0];
    var ____id57 = cut(____id56, 1);
    var __a7 = ____id57[0];
    var __b4 = ____id57[1];
    var ____id58 = op_delims(form, __a7);
    var __ao = ____id58[0];
    var __ac = ____id58[1];
    var ____id59 = op_delims(form, __b4, {["_stash"]: true, ["right"]: true});
    var __bo = ____id59[0];
    var __bc = ____id59[1];
    var __a8 = compile(__a7);
    var __b5 = compile(__b4);
    var __op1 = getop(__op);
    if (unary63(form)) {
      return __op1 + __ao + " " + __a8 + __ac;
    } else {
      return __ao + __a8 + __ac + " " + __op1 + " " + __bo + __b5 + __bc;
    }
  });
  compile_function = (function (args, body, ...__r194) {
    var ____r194 = unstash(__r194);
    var __args131 = destash33(args, ____r194);
    var __body33 = destash33(body, ____r194);
    var ____id60 = ____r194;
    var __name13 = ____id60.name;
    var __prefix1 = ____id60.prefix;
    var __tr1 = ____id60.tr;
    var __id61 = either(__name13, "");
    var __args14 = compile_args(__args131);
    indent_level = indent_level + 1;
    var ____x328 = compile(__body33, {["_stash"]: true, ["stmt"]: true});
    indent_level = indent_level - 1;
    var __body34 = ____x328;
    var __ind = indentation();
    var __e61;
    if (__prefix1) {
      __e61 = __prefix1 + " ";
    } else {
      __e61 = "";
    }
    var __p1 = __e61;
    var __tr2 = either(__tr1, "");
    return __p1 + __id61 + __args14 + " {\n" + __body34 + __ind + "}" + __tr2;
  });
  _G.compileFunction = compile_function;
  _G.compileFunction;
  _G.compile_function = compile_function;
  var can_return63 = (function (form) {
    return is63(form) && (atom63(form) || !( hd(form) === "return") && ! statement63(hd(form)));
  });
  compile = (function (form, ...__r196) {
    var ____r196 = unstash(__r196);
    var __form1 = destash33(form, ____r196);
    var ____id62 = ____r196;
    var __stmt1 = ____id62.stmt;
    if (nil63(__form1)) {
      return "";
    } else {
      if (special_form63(__form1)) {
        return compile_special(__form1, __stmt1);
      } else {
        var __tr3 = terminator(__stmt1);
        var __e62;
        if (__stmt1) {
          __e62 = indentation();
        } else {
          __e62 = "";
        }
        var __ind1 = __e62;
        var __e63;
        if (atom63(__form1)) {
          __e63 = compile_atom(__form1);
        } else {
          var __e64;
          if (infix63(hd(__form1))) {
            __e64 = compile_infix(__form1);
          } else {
            __e64 = compile_call(hd(__form1), tl(__form1));
          }
          __e63 = __e64;
        }
        var __form2 = __e63;
        return __ind1 + __form2 + __tr3;
      }
    }
  });
  _G.compile = compile;
  _G.compile;
  _G.compile = compile;
  var lower_statement = (function (form, tail63) {
    var __hoist = [];
    var __e31 = lower(form, __hoist, true, tail63);
    var __e65;
    if (some63(__hoist) && is63(__e31)) {
      __e65 = join(["do"], __hoist, [__e31]);
    } else {
      var __e66;
      if (is63(__e31)) {
        __e66 = __e31;
      } else {
        var __e67;
        if (_35(__hoist) > 1) {
          __e67 = join(["do"], __hoist);
        } else {
          __e67 = hd(__hoist);
        }
        __e66 = __e67;
      }
      __e65 = __e66;
    }
    return either(__e65, ["do"]);
  });
  var lower_body = (function (body, tail63) {
    return lower_statement(join(["do"], body), tail63);
  });
  var literal63 = (function (form) {
    return atom63(form) || hd(form) === "%array" || hd(form) === "%object" || hd(form) === "%table";
  });
  var standalone63 = (function (form) {
    return ! atom63(form) && ! infix63(hd(form)) && ! literal63(form) && !( "get" === hd(form)) && !( "%statement" === hd(form)) || id_literal63(form);
  });
  var lower_do = (function (args, hoist, stmt63, tail63) {
    var ____x334 = almost(args);
    var ____i48 = 0;
    while (____i48 < _35(____x334)) {
      var __x335 = ____x334[____i48];
      var ____y5 = lower(__x335, hoist, stmt63);
      if (yes(____y5)) {
        var __e32 = ____y5;
        if (standalone63(__e32)) {
          add(hoist, __e32);
        }
      }
      ____i48 = ____i48 + 1;
    }
    var __e33 = lower(last(args), hoist, stmt63, tail63);
    if (tail63 && can_return63(__e33)) {
      return ["return", __e33];
    } else {
      return __e33;
    }
  });
  var lower_set = (function (args, hoist, stmt63, tail63) {
    var ____id63 = args;
    var __lh2 = ____id63[0];
    var __rh2 = ____id63[1];
    add(hoist, ["%set", lower(__lh2, hoist), lower(__rh2, hoist)]);
    if (!( stmt63 && ! tail63)) {
      return __lh2;
    }
  });
  var lower_if = (function (args, hoist, stmt63, tail63) {
    var ____id64 = args;
    var __cond2 = ____id64[0];
    var __then = ____id64[1];
    var ___else = ____id64[2];
    if (stmt63) {
      var __e69;
      if (is63(___else)) {
        __e69 = [lower_body([___else], tail63)];
      }
      return add(hoist, join(["%if", lower(__cond2, hoist), lower_body([__then], tail63)], __e69));
    } else {
      var __e34 = unique("e");
      add(hoist, ["%local", __e34]);
      var __e68;
      if (is63(___else)) {
        __e68 = [lower(["%set", __e34, ___else])];
      }
      add(hoist, join(["%if", lower(__cond2, hoist), lower(["%set", __e34, __then])], __e68));
      return __e34;
    }
  });
  var lower_short = (function (x, args, hoist) {
    var ____id65 = args;
    var __a9 = ____id65[0];
    var __b6 = ____id65[1];
    var __hoist1 = [];
    var __b11 = lower(__b6, __hoist1);
    if (some63(__hoist1)) {
      var __id66 = unique("id");
      var __e70;
      if (x === "and") {
        __e70 = ["%if", __id66, __b6, __id66];
      } else {
        __e70 = ["%if", __id66, __id66, __b6];
      }
      return lower(["do", ["%local", __id66, __a9], __e70], hoist);
    } else {
      return [x, lower(__a9, hoist), __b11];
    }
  });
  var lower_try = (function (args, hoist, tail63) {
    return add(hoist, ["%try", lower_body(args, tail63)]);
  });
  lower_condition_case = (function (__x353, hoist, stmt63, tail63) {
    var ____id67 = __x353;
    var ___var2 = ____id67[0];
    var __form3 = ____id67[1];
    var __clauses2 = cut(____id67, 2);
    if (stmt63) {
      return add(hoist, join(["%condition-case", ___var2, lower_body(["do", __form3], tail63)], map((function (__x356) {
        var ____id68 = __x356;
        var __which1 = ____id68[0];
        var __body35 = cut(____id68, 1);
        if (__which1 === "finally") {
          return [__which1, lower_body(__body35)];
        } else {
          var ____id69 = __body35;
          var __x358 = ____id69[0];
          var __args15 = cut(____id69, 1);
          return [__which1, lower(__x358), lower_body(__args15, tail63)];
        }
      }), __clauses2)));
    } else {
      var __e35 = unique("e");
      add(hoist, ["%local", __e35]);
      add(hoist, join(["%condition-case", ___var2, lower(["%set", __e35, __form3])], map((function (__x363) {
        var ____id70 = __x363;
        var __which2 = ____id70[0];
        var __body36 = cut(____id70, 1);
        if (__which2 === "finally") {
          return [__which2, lower_body(__body36)];
        } else {
          var ____id71 = __body36;
          var __x365 = ____id71[0];
          var __args16 = cut(____id71, 1);
          return [__which2, lower(__x365), lower(["%set", __e35, join(["do"], __args16)])];
        }
      }), __clauses2)));
      return __e35;
    }
  });
  _G.lowerConditionCase = lower_condition_case;
  _G.lowerConditionCase;
  _G.lower_condition_case = lower_condition_case;
  var lower_while = (function (args, hoist) {
    var ____id72 = args;
    var __c5 = ____id72[0];
    var __body37 = cut(____id72, 1);
    var __pre = [];
    var __c6 = lower(__c5, __pre);
    var __e71;
    if (none63(__pre)) {
      __e71 = ["while", __c6, lower_body(__body37)];
    } else {
      __e71 = ["while", true, join(["do"], __pre, [["%if", ["not", __c6], ["break"]], lower_body(__body37)])];
    }
    return add(hoist, __e71);
  });
  var lower_for = (function (args, hoist) {
    var ____id73 = args;
    var __t4 = ____id73[0];
    var __k37 = ____id73[1];
    var __body38 = cut(____id73, 2);
    return add(hoist, ["%for", lower(__t4, hoist), __k37, lower_body(__body38)]);
  });
  lower_table = (function (args, hoist, stmt63, tail63) {
    var __expr3 = join(["%table"], keys(args));
    var ____x378 = args;
    var ____i49 = 0;
    while (____i49 < _35(____x378)) {
      var __x379 = ____x378[____i49];
      if (atom63(__x379)) {
        add(__expr3, __x379);
      } else {
        if (_35(__x379) <= 2) {
          var ____id74 = __x379;
          var __name14 = ____id74[0];
          var __v27 = ____id74[1];
          add(__expr3, [lower(__name14, hoist), lower(__v27, hoist)]);
        } else {
          var ____id75 = __x379;
          var __prefix2 = ____id75[0];
          var __name15 = ____id75[1];
          var __args17 = ____id75[2];
          var __body39 = cut(____id75, 3);
          if (some63(__body39)) {
            add(__expr3, [__prefix2, lower(__name15, hoist), __args17, lower_body(__body39, true)]);
          } else {
            add(__expr3, [__prefix2, lower(__name15, hoist), lower(__args17, hoist)]);
          }
        }
      }
      ____i49 = ____i49 + 1;
    }
    return __expr3;
  });
  _G.lowerTable = lower_table;
  _G.lowerTable;
  _G.lower_table = lower_table;
  lower_class = (function (__x383, hoist, stmt63, tail63) {
    var ____id76 = __x383;
    var __x384 = ____id76[0];
    var __body40 = cut(____id76, 1);
    var __body41 = tl(lower_table(__body40, hoist));
    var ____id77 = __x384;
    var __name16 = ____id77[0];
    var __parent1 = ____id77[1];
    var __parent11 = lower(__parent1, hoist);
    var __expr4 = join(["%class", [__name16, __parent11]], __body41);
    if (stmt63 && ! tail63) {
      return add(hoist, ["%local", __name16, __expr4]);
    } else {
      return __expr4;
    }
  });
  _G.lowerClass = lower_class;
  _G.lowerClass;
  _G.lower_class = lower_class;
  var lower_function = (function (args) {
    var ____id78 = args;
    var __a10 = ____id78[0];
    var __body42 = cut(____id78, 1);
    return ["%function", __a10, lower_body(__body42, true)];
  });
  var lower_definition = (function (kind, args, hoist) {
    var ____id79 = args;
    var __name17 = ____id79[0];
    var __args18 = ____id79[1];
    var __body43 = cut(____id79, 2);
    return add(hoist, [kind, __name17, __args18, lower_body(__body43, true)]);
  });
  var lower_call = (function (form, hoist) {
    var __form4 = map((function (x) {
      return lower(x, hoist);
    }), form);
    if (some63(__form4)) {
      return __form4;
    }
  });
  var pairwise63 = (function (form) {
    return in63(hd(form), ["<", "<=", "=", ">=", ">"]);
  });
  var lower_pairwise = (function (form) {
    if (pairwise63(form)) {
      var __e36 = [];
      var ____id80 = form;
      var __x391 = ____id80[0];
      var __args19 = cut(____id80, 1);
      reduce((function (a, b) {
        add(__e36, [__x391, a, b]);
        return a;
      }), __args19);
      return join(["and"], reverse(__e36));
    } else {
      return form;
    }
  });
  var lower_infix63 = (function (form) {
    return infix63(hd(form)) && _35(form) > 3;
  });
  var lower_infix = (function (form, hoist) {
    var __form5 = lower_pairwise(form);
    var ____id81 = __form5;
    var __x394 = ____id81[0];
    var __args20 = cut(____id81, 1);
    return lower(reduce((function (a, b) {
      return [__x394, b, a];
    }), reverse(__args20)), hoist);
  });
  var lower_special = (function (__x396, hoist) {
    var ____id82 = __x396;
    var __name18 = ____id82[0];
    var __args21 = cut(____id82, 1);
    var __args141 = map((function (x) {
      return lower(x, hoist);
    }), __args21);
    var __form6 = join([__name18], __args141);
    return add(hoist, __form6);
  });
  lower = (function (form, hoist, stmt63, tail63) {
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
            var ____id83 = form;
            var __x399 = ____id83[0];
            var __args22 = cut(____id83, 1);
            if (__x399 === "do") {
              return lower_do(__args22, hoist, stmt63, tail63);
            } else {
              if (__x399 === "%call") {
                return lower(__args22, hoist, stmt63, tail63);
              } else {
                if (__x399 === "%set") {
                  return lower_set(__args22, hoist, stmt63, tail63);
                } else {
                  if (__x399 === "%if") {
                    return lower_if(__args22, hoist, stmt63, tail63);
                  } else {
                    if (__x399 === "%try") {
                      return lower_try(__args22, hoist, tail63);
                    } else {
                      if (__x399 === "%condition-case") {
                        return lower_condition_case(__args22, hoist, stmt63, tail63);
                      } else {
                        if (__x399 === "while") {
                          return lower_while(__args22, hoist);
                        } else {
                          if (__x399 === "%for") {
                            return lower_for(__args22, hoist);
                          } else {
                            if (__x399 === "%table") {
                              return lower_table(__args22, hoist, stmt63, tail63);
                            } else {
                              if (__x399 === "%class") {
                                return lower_class(__args22, hoist, stmt63, tail63);
                              } else {
                                if (__x399 === "%function") {
                                  return lower_function(__args22);
                                } else {
                                  if (__x399 === "%local-function" || __x399 === "%global-function") {
                                    return lower_definition(__x399, __args22, hoist);
                                  } else {
                                    if (in63(__x399, ["and", "or"])) {
                                      return lower_short(__x399, __args22, hoist);
                                    } else {
                                      if (statement63(__x399)) {
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
        }
      }
    }
  });
  _G.lower = lower;
  _G.lower;
  _G.lower = lower;
  expand = (function (form) {
    return lower(macroexpand(form));
  });
  _G.expand = expand;
  _G.expand;
  _G.expand = expand;
  var vm = require("vm");
  var context = (function (ctx) {
    var __sandbox = vm.createContext(ctx);
    __sandbox._G = __sandbox;
    return __sandbox;
  });
  context(_G);
  var run = (function (code, sandbox) {
    return vm.runInContext(code, sandbox || _G);
  });
  _eval = (function (form) {
    var __code = compile(expand(["%set", "%result", form]));
    return run(__code);
  });
  _G["eval"] = _eval;
  _G["eval"];
  _G._eval = _eval;
  immediate_call63 = (function (x) {
    return obj63(x) && obj63(hd(x)) && hd(hd(x)) === "%function";
  });
  _G.immediateCall63 = immediate_call63;
  _G.immediateCall63;
  _G.immediate_call63 = immediate_call63;
  setenv("%call", {["_stash"]: true, ["special"]: (function (f, ...__r231) {
    var ____r231 = unstash(__r231);
    var __f2 = destash33(f, ____r231);
    var ____id84 = ____r231;
    var __args23 = cut(____id84, 0);
    return compile_call(__f2, __args23);
  })});
  setenv("%brackets", {["_stash"]: true, ["special"]: (function (x) {
    return "[" + compile(x) + "]";
  })});
  setenv("do", {["_stash"]: true, ["special"]: (function (...forms) {
    var __forms1 = unstash(forms);
    var __s5 = "";
    var ____x402 = __forms1;
    var ____i50 = 0;
    while (____i50 < _35(____x402)) {
      var __x403 = ____x402[____i50];
      __s5 = __s5 + compile(__x403, {["_stash"]: true, ["stmt"]: true});
      if (! atom63(__x403)) {
        if (hd(__x403) === "return" || hd(__x403) === "break") {
          break;
        }
      }
      ____i50 = ____i50 + 1;
    }
    return __s5;
  }), ["stmt"]: true, ["tr"]: true});
  setenv("%if", {["_stash"]: true, ["special"]: (function (cond, cons, alt) {
    var __cond3 = compile(cond);
    indent_level = indent_level + 1;
    var ____x404 = compile(cons, {["_stash"]: true, ["stmt"]: true});
    indent_level = indent_level - 1;
    var __cons = ____x404;
    var __e72;
    if (alt) {
      indent_level = indent_level + 1;
      var ____x405 = compile(alt, {["_stash"]: true, ["stmt"]: true});
      indent_level = indent_level - 1;
      __e72 = ____x405;
    }
    var __alt = __e72;
    var __ind2 = indentation();
    var __s6 = "";
    __s6 = __s6 + __ind2 + "if (" + __cond3 + ") {\n" + __cons + __ind2 + "}";
    if (__alt) {
      __s6 = __s6 + " else {\n" + __alt + __ind2 + "}";
    }
    return __s6 + "\n";
  }), ["stmt"]: true, ["tr"]: true});
  setenv("while", {["_stash"]: true, ["special"]: (function (cond, form) {
    var __cond4 = compile(cond);
    indent_level = indent_level + 1;
    var ____x406 = compile(form, {["_stash"]: true, ["stmt"]: true});
    indent_level = indent_level - 1;
    var __body44 = ____x406;
    var __ind3 = indentation();
    return __ind3 + "while (" + __cond4 + ") {\n" + __body44 + __ind3 + "}\n";
  }), ["stmt"]: true, ["tr"]: true});
  setenv("%for", {["_stash"]: true, ["special"]: (function (t, k, form) {
    var __t5 = compile(t);
    var __ind4 = indentation();
    indent_level = indent_level + 1;
    var ____x407 = compile(form, {["_stash"]: true, ["stmt"]: true});
    indent_level = indent_level - 1;
    var __body45 = ____x407;
    return __ind4 + "for (" + k + " in " + __t5 + ") {\n" + __body45 + __ind4 + "}\n";
  }), ["stmt"]: true, ["tr"]: true});
  setenv("%try", {["_stash"]: true, ["special"]: (function (form) {
    var __e37 = unique("e");
    var __ind5 = indentation();
    indent_level = indent_level + 1;
    var ____x408 = compile(form, {["_stash"]: true, ["stmt"]: true});
    indent_level = indent_level - 1;
    var __body46 = ____x408;
    var __hf = ["return", ["%array", false, __e37]];
    indent_level = indent_level + 1;
    var ____x411 = compile(__hf, {["_stash"]: true, ["stmt"]: true});
    indent_level = indent_level - 1;
    var __h = ____x411;
    return __ind5 + "try {\n" + __body46 + __ind5 + "}\n" + __ind5 + "catch (" + __e37 + ") {\n" + __h + __ind5 + "}\n";
  }), ["stmt"]: true, ["tr"]: true});
  setenv("%condition-case", {["_stash"]: true, ["special"]: (function (e, form, ...__r237) {
    var ____r237 = unstash(__r237);
    var __e38 = destash33(e, ____r237);
    var __form7 = destash33(form, ____r237);
    var ____id85 = ____r237;
    var __clauses3 = cut(____id85, 0);
    var __ind6 = indentation();
    indent_level = indent_level + 1;
    var ____x412 = compile(__form7, {["_stash"]: true, ["stmt"]: true});
    indent_level = indent_level - 1;
    var __body47 = ____x412;
    var __str = __ind6 + "try {\n" + __body47 + __ind6 + "}";
    var __form8 = [];
    var ____x414 = __clauses3;
    var ____i51 = 0;
    while (____i51 < _35(____x414)) {
      var __x415 = ____x414[____i51];
      if (hd(__x415) === "catch") {
        var ____id86 = __x415;
        var ___2 = ____id86[0];
        var __type1 = ____id86[1];
        var __body48 = ____id86[2];
        var __e73;
        if (boolean63(__type1)) {
          __e73 = __type1;
        } else {
          __e73 = ["instanceof", __e38, __type1];
        }
        add(__form8, __e73);
        add(__form8, __body48);
      }
      ____i51 = ____i51 + 1;
    }
    if (! none63(__form8)) {
      add(__form8, ["%throw", __e38]);
      var __expr5 = hd(expand_if(__form8));
      indent_level = indent_level + 1;
      var ____x418 = compile(__expr5, {["_stash"]: true, ["stmt"]: true});
      indent_level = indent_level - 1;
      var __h1 = ____x418;
      __str = __str + " catch (" + __e38 + ") {\n" + __h1 + __ind6 + "}";
    }
    var __clause = first((function (x) {
      if (hd(x) === "finally") {
        return x;
      }
    }), __clauses3);
    if (__clause) {
      var __body49 = tl(__clause);
      indent_level = indent_level + 1;
      var ____x419 = compile(join(["do"], __body49), {["_stash"]: true, ["stmt"]: true});
      indent_level = indent_level - 1;
      var __h2 = ____x419;
      __str = __str + " finally {\n" + __h2 + __ind6 + "}";
    }
    __str = __str + "\n";
    return __str;
  }), ["stmt"]: true, ["tr"]: true});
  setenv("%delete", {["_stash"]: true, ["special"]: (function (place) {
    return indentation() + "delete " + compile(place);
  }), ["stmt"]: true});
  setenv("break", {["_stash"]: true, ["special"]: (function () {
    return indentation() + "break";
  }), ["stmt"]: true});
  setenv("%function", {["_stash"]: true, ["special"]: (function (args, body) {
    return "(" + compile_function(args, body, {["_stash"]: true, ["prefix"]: "function"}) + ")";
  })});
  setenv("%global-function", {["_stash"]: true, ["special"]: (function (name, args, body) {
    return compile(["%set", name, ["%function", args, body]], {["_stash"]: true, ["stmt"]: true});
  }), ["stmt"]: true, ["tr"]: true});
  setenv("%local-function", {["_stash"]: true, ["special"]: (function (name, args, body) {
    return compile(["%local", name, ["%function", args, body]], {["_stash"]: true, ["stmt"]: true});
  }), ["stmt"]: true, ["tr"]: true});
  setenv("return", {["_stash"]: true, ["special"]: (function (x) {
    var __e74;
    if (nil63(x)) {
      __e74 = "return";
    } else {
      __e74 = "return " + compile(x);
    }
    var __x425 = __e74;
    return indentation() + __x425;
  }), ["stmt"]: true});
  setenv("async", {["_stash"]: true, ["special"]: (function (...x) {
    var __x426 = unstash(x);
    if (_35(__x426) > 1) {
      return compile(join([["async", hd(__x426)]], tl(__x426)));
    } else {
      return "async " + inner(compile(hd(__x426)));
    }
  })});
  setenv("await", {["_stash"]: true, ["special"]: (function (...x) {
    var __x429 = unstash(x);
    if (_35(__x429) > 1) {
      return compile(join([["await", hd(__x429)]], tl(__x429)));
    } else {
      return "await " + compile(hd(__x429));
    }
  })});
  setenv("new", {["_stash"]: true, ["special"]: (function (...x) {
    var __x432 = unstash(x);
    if (_35(__x432) > 1) {
      return compile(join([["new", hd(__x432)]], tl(__x432)));
    } else {
      return "new " + compile(hd(__x432));
    }
  })});
  setenv("instanceof", {["_stash"]: true, ["special"]: (function (a, b) {
    return "(" + compile(a) + " instanceof " + compile(b) + ")";
  })});
  setenv("typeof", {["_stash"]: true, ["special"]: (function (x) {
    return "typeof(" + compile(x) + ")";
  })});
  setenv("%throw", {["_stash"]: true, ["special"]: (function (x) {
    return indentation() + "throw " + compile(x);
  }), ["stmt"]: true});
  setenv("error", {["_stash"]: true, ["special"]: (function (x) {
    var __e39 = "throw " + compile(["new", ["Error", x]]);
    return indentation() + __e39;
  }), ["stmt"]: true});
  setenv("%local", {["_stash"]: true, ["special"]: (function (name, value) {
    var __id87 = compile(name);
    var __value1 = compile(value);
    var __e75;
    if (is63(value)) {
      __e75 = " = " + __value1;
    } else {
      __e75 = "";
    }
    var __rh3 = __e75;
    var __keyword = "var ";
    var __ind7 = indentation();
    return __ind7 + __keyword + __id87 + __rh3;
  }), ["stmt"]: true});
  setenv("%set", {["_stash"]: true, ["special"]: (function (lh, rh) {
    var __lh3 = compile(lh);
    var __e76;
    if (nil63(rh)) {
      __e76 = "nil";
    } else {
      __e76 = rh;
    }
    var __rh4 = compile(__e76);
    return indentation() + __lh3 + " = " + __rh4;
  }), ["stmt"]: true});
  setenv("get", {["_stash"]: true, ["special"]: (function (t, k) {
    var __t11 = compile(t);
    var __k111 = compile(k);
    if (infix_operator63(t)) {
      __t11 = "(" + __t11 + ")";
    }
    if (string_literal63(k) && valid_id63(inner(k))) {
      return __t11 + "." + inner(k);
    } else {
      return __t11 + "[" + __k111 + "]";
    }
  })});
  setenv("%array", {["_stash"]: true, ["special"]: (function (...forms) {
    var __forms2 = unstash(forms);
    var __open = "[";
    var __close = "]";
    var __s7 = "";
    var __c7 = "";
    var ____o27 = __forms2;
    var __k38 = undefined;
    for (__k38 in ____o27) {
      var __v28 = ____o27[__k38];
      var __e77;
      if (numeric63(__k38)) {
        __e77 = parseInt(__k38);
      } else {
        __e77 = __k38;
      }
      var __k39 = __e77;
      if (number63(__k39)) {
        __s7 = __s7 + __c7 + compile(__v28);
        __c7 = ", ";
      }
    }
    return __open + __s7 + __close;
  })});
  setenv("%object", {["_stash"]: true, ["special"]: (function (...forms) {
    var __forms3 = unstash(forms);
    var __s8 = "{";
    var __c8 = "";
    var __sep = ": ";
    var ____x437 = pair(__forms3);
    var ____i53 = 0;
    while (____i53 < _35(____x437)) {
      var ____id88 = ____x437[____i53];
      var __k40 = ____id88[0];
      var __v29 = ____id88[1];
      __s8 = __s8 + __c8 + key(__k40) + __sep + compile(__v29);
      __c8 = ", ";
      ____i53 = ____i53 + 1;
    }
    return __s8 + "}";
  })});
  setenv("%table", {["_stash"]: true, ["special"]: (function (...forms) {
    var __forms4 = unstash(forms);
    var __s9 = "{\n";
    var __c9 = "";
    var __sep1 = ": ";
    var __comma = either(__forms4.comma, ", ");
    indent_level = indent_level + 1;
    var __ind8 = indentation();
    var ____x439 = __forms4;
    var ____i54 = 0;
    while (____i54 < _35(____x439)) {
      var __x440 = ____x439[____i54];
      if (atom63(__x440)) {
        __s9 = __s9 + __c9 + __ind8 + key(__x440) + __sep1 + compile(__x440);
      } else {
        if (_35(__x440) <= 2) {
          var ____id89 = __x440;
          var __name19 = ____id89[0];
          var __v30 = ____id89[1];
          __s9 = __s9 + __c9 + __ind8 + key(__name19) + __sep1 + compile(__v30);
        } else {
          var ____id90 = __x440;
          var __prefix3 = ____id90[0];
          var __name20 = ____id90[1];
          var __args24 = ____id90[2];
          var __body50 = cut(____id90, 3);
          var __e78;
          if (in63(__prefix3, ["define", "def"])) {
            __e78 = "";
          } else {
            __e78 = __prefix3;
          }
          var __prefix4 = __e78;
          var __e79;
          if (some63(__body50)) {
            __e79 = compile_function(__args24, join(["do"], __body50), {["_stash"]: true, ["name"]: key(__name20), ["prefix"]: __prefix4});
          } else {
            __e79 = key(__name20) + __sep1 + compile(__args24);
          }
          var __h3 = __e79;
          __s9 = __s9 + __c9 + __ind8 + __h3;
        }
      }
      __c9 = inner(__comma) + "\n";
      ____i54 = ____i54 + 1;
    }
    var ____x438;
    indent_level = indent_level - 1;
    return __s9 + "\n" + indentation() + "}";
  })});
  setenv("%class", {["_stash"]: true, ["special"]: (function (name, ...__r252) {
    var ____r252 = unstash(__r252);
    var __name21 = destash33(name, ____r252);
    var ____id91 = ____r252;
    var __body51 = cut(____id91, 0);
    var __e80;
    if (atom63(__name21)) {
      __e80 = [__name21];
    } else {
      __e80 = __name21;
    }
    var ____id92 = __e80;
    var __name22 = ____id92[0];
    var __parent2 = ____id92[1];
    var __e81;
    if (__name22) {
      __e81 = [__name22, "\" \""];
    } else {
      __e81 = [];
    }
    var __name23 = __e81;
    var __e82;
    if (__parent2) {
      __e82 = ["\"extends \"", __parent2, "\" \""];
    } else {
      __e82 = [];
    }
    var __ext = __e82;
    var ____x450 = ["%table"];
    ____x450.comma = "\"\"";
    return compile(join(["%literal", "\"class \""], __name23, __ext, [join(____x450, __body51)]));
  })});
  setenv("%literal", {["_stash"]: true, ["special"]: (function (...args) {
    var __args25 = unstash(args);
    var __s10 = "";
    var ____x451 = __args25;
    var ____i55 = 0;
    while (____i55 < _35(____x451)) {
      var __x452 = ____x451[____i55];
      if (string_literal63(__x452)) {
        __s10 = __s10 + _eval(__x452);
      } else {
        __s10 = __s10 + compile(__x452);
      }
      ____i55 = ____i55 + 1;
    }
    return __s10;
  })});
  setenv("%statement", {["_stash"]: true, ["special"]: (function (...args) {
    var __args26 = unstash(args);
    var __s111 = indentation();
    var ____x453 = __args26;
    var ____i56 = 0;
    while (____i56 < _35(____x453)) {
      var __x454 = ____x453[____i56];
      if (string_literal63(__x454)) {
        __s111 = __s111 + _eval(__x454);
      } else {
        __s111 = __s111 + compile(__x454);
      }
      ____i56 = ____i56 + 1;
    }
    __s111 = __s111 + "\n";
    return __s111;
  }), ["stmt"]: true, ["tr"]: true});
  setenv("%indentation", {["_stash"]: true, ["special"]: (function () {
    return indentation();
  })});
  setenv("%spread", {["_stash"]: true, ["special"]: (function (x) {
    return "..." + compile(x);
  })});
  __exports.context = context;
  __exports.context = __exports.context;
  __exports.context;
  __exports.run = run;
  __exports.run = __exports.run;
  __exports.run;
  __exports["eval"] = _eval;
  __exports["eval"] = __exports["eval"];
  __exports["eval"];
  __exports.expand = expand;
  __exports.expand = __exports.expand;
  __exports.expand;
  __exports.compile = compile;
  __exports.compile = __exports.compile;
  __exports.compile;
  _G.compiler = __exports;
  var __exports1 = {};
  var __self1 = __exports1;
  var __module1 = {["exports"]: __exports1};
  delimiters = {["{"]: true, ["}"]: true, ["["]: true, ["]"]: true, ["("]: true, [")"]: true, [";"]: true, ["\r"]: true, ["\n"]: true};
  _G.delimiters = delimiters;
  _G.delimiters;
  _G.delimiters = delimiters;
  whitespace = {[" "]: true, ["\t"]: true, ["\r"]: true, ["\n"]: true};
  _G.whitespace = whitespace;
  _G.whitespace;
  _G.whitespace = whitespace;
  stream = (function (str, more) {
    var __s121 = {["pos"]: 0, ["string"]: str, ["len"]: _35(str)};
    if (is63(more)) {
      __s121.more = more;
    }
    return __s121;
  });
  _G.stream = stream;
  _G.stream;
  _G.stream = stream;
  peek_char = (function (s) {
    if (s.pos < s.len) {
      return char(s.string, s.pos);
    }
  });
  _G.peekChar = peek_char;
  _G.peekChar;
  _G.peek_char = peek_char;
  read_char = (function (s) {
    var __c10 = peek_char(s);
    if (__c10) {
      s.pos = s.pos + 1;
      return __c10;
    }
  });
  _G.readChar = read_char;
  _G.readChar;
  _G.read_char = read_char;
  skip_non_code = (function (s) {
    while (true) {
      var __c111 = peek_char(s);
      if (nil63(__c111)) {
        break;
      } else {
        if (whitespace[__c111]) {
          read_char(s);
        } else {
          if (__c111 === ";") {
            while (__c111 && !( __c111 === "\n")) {
              __c111 = read_char(s);
            }
            skip_non_code(s);
          } else {
            break;
          }
        }
      }
    }
  });
  _G.skipNonCode = skip_non_code;
  _G.skipNonCode;
  _G.skip_non_code = skip_non_code;
  read_table = {};
  _G.readTable = read_table;
  _G.readTable;
  _G.read_table = read_table;
  eof = {};
  _G.eof = eof;
  _G.eof;
  _G.eof = eof;
  read = (function (s) {
    skip_non_code(s);
    var __c121 = peek_char(s);
    if (is63(__c121)) {
      return (read_table[__c121] || read_table[""])(s);
    } else {
      return eof;
    }
  });
  _G.read = read;
  _G.read;
  _G.read = read;
  read_all = (function (s) {
    var __l8 = [];
    while (true) {
      var __form9 = read(s);
      if (__form9 === eof) {
        break;
      }
      add(__l8, __form9);
    }
    return __l8;
  });
  _G.readAll = read_all;
  _G.readAll;
  _G.read_all = read_all;
  read_string = (function (str, more) {
    var __x455 = read(stream(str, more));
    if (!( __x455 === eof)) {
      return __x455;
    }
  });
  _G.readString = read_string;
  _G.readString;
  _G.read_string = read_string;
  var key63 = (function (atom) {
    return string63(atom) && _35(atom) > 1 && char(atom, edge(atom)) === ":";
  });
  expected = (function (s, c) {
    var ____id93 = s;
    var __more = ____id93.more;
    var __pos = ____id93.pos;
    var __id94 = __more;
    var __e83;
    if (__id94) {
      __e83 = __id94;
    } else {
      throw new Error("Expected " + c + " at " + __pos);
      __e83 = undefined;
    }
    return __e83;
  });
  _G.expected = expected;
  _G.expected;
  _G.expected = expected;
  wrap = (function (s, x) {
    var __y6 = read(s);
    if (__y6 === s.more) {
      return __y6;
    } else {
      return [x, __y6];
    }
  });
  _G.wrap = wrap;
  _G.wrap;
  _G.wrap = wrap;
  hex_prefix63 = (function (str) {
    var __e84;
    if (code(str, 0) === 45) {
      __e84 = 1;
    } else {
      __e84 = 0;
    }
    var __i57 = __e84;
    var __id95 = code(str, __i57) === 48;
    var __e85;
    if (__id95) {
      __i57 = __i57 + 1;
      var __n34 = code(str, __i57);
      __e85 = __n34 === 120 || __n34 === 88;
    } else {
      __e85 = __id95;
    }
    return __e85;
  });
  _G.hexPrefix63 = hex_prefix63;
  _G.hexPrefix63;
  _G.hex_prefix63 = hex_prefix63;
  maybe_number = (function (str) {
    if (hex_prefix63(str)) {
      return parseInt(str, 16);
    } else {
      if (number_code63(code(str, edge(str))) && !( code(str, 0) === 46)) {
        return number(str);
      }
    }
  });
  _G.maybeNumber = maybe_number;
  _G.maybeNumber;
  _G.maybe_number = maybe_number;
  real63 = (function (x) {
    return number63(x) && ! nan63(x) && ! inf63(x);
  });
  _G.real63 = real63;
  _G.real63;
  _G.real63 = real63;
  read_table[""] = (function (s) {
    var __str1 = "";
    while (true) {
      var __c13 = peek_char(s);
      if (__c13 && (! whitespace[__c13] && ! delimiters[__c13])) {
        if (__c13 === "\\") {
          __str1 = __str1 + read_char(s);
        }
        __str1 = __str1 + read_char(s);
      } else {
        break;
      }
    }
    if (__str1 === "true") {
      return true;
    } else {
      if (__str1 === "false") {
        return false;
      } else {
        var __n35 = maybe_number(__str1);
        if (real63(__n35)) {
          return __n35;
        } else {
          return __str1;
        }
      }
    }
  });
  read_table["("] = (function (s) {
    read_char(s);
    var __r270 = undefined;
    var __l9 = [];
    while (nil63(__r270)) {
      skip_non_code(s);
      var __c14 = peek_char(s);
      if (__c14 === ")") {
        read_char(s);
        __r270 = __l9;
      } else {
        if (nil63(__c14)) {
          __r270 = expected(s, ")");
        } else {
          var __x457 = read(s);
          if (key63(__x457)) {
            var __k41 = clip(__x457, 0, edge(__x457));
            var __v31 = read(s);
            __l9[__k41] = __v31;
          } else {
            add(__l9, __x457);
          }
        }
      }
    }
    return __r270;
  });
  read_table[")"] = (function (s) {
    throw new Error("Unexpected ) at " + s.pos);
  });
  read_table["["] = (function (s) {
    read_char(s);
    var __r273 = undefined;
    var __l10 = [];
    while (nil63(__r273)) {
      skip_non_code(s);
      var __c15 = peek_char(s);
      if (__c15 === "]") {
        read_char(s);
        __r273 = join(["%brackets"], __l10);
      } else {
        if (nil63(__c15)) {
          __r273 = expected(s, "]");
        } else {
          var __x459 = read(s);
          add(__l10, __x459);
        }
      }
    }
    return __r273;
  });
  read_table["]"] = (function (s) {
    throw new Error("Unexpected ] at " + s.pos);
  });
  read_table["{"] = (function (s) {
    read_char(s);
    var __r276 = undefined;
    var __l111 = [];
    while (nil63(__r276)) {
      skip_non_code(s);
      var __c16 = peek_char(s);
      if (__c16 === "}") {
        read_char(s);
        __r276 = join(["%braces"], __l111);
      } else {
        if (nil63(__c16)) {
          __r276 = expected(s, "}");
        } else {
          var __x461 = read(s);
          add(__l111, __x461);
        }
      }
    }
    return __r276;
  });
  read_table["}"] = (function (s) {
    throw new Error("Unexpected } at " + s.pos);
  });
  read_table["\""] = (function (s) {
    read_char(s);
    var __r279 = undefined;
    var __str2 = "\"";
    while (nil63(__r279)) {
      var __c17 = peek_char(s);
      if (__c17 === "\"") {
        __r279 = __str2 + read_char(s);
      } else {
        if (nil63(__c17)) {
          __r279 = expected(s, "\"");
        } else {
          if (__c17 === "\\") {
            __str2 = __str2 + read_char(s);
          }
          __str2 = __str2 + read_char(s);
        }
      }
    }
    return __r279;
  });
  read_table["|"] = (function (s) {
    read_char(s);
    var __r281 = undefined;
    var __str3 = "|";
    while (nil63(__r281)) {
      var __c18 = peek_char(s);
      if (__c18 === "|") {
        __r281 = __str3 + read_char(s);
      } else {
        if (nil63(__c18)) {
          __r281 = expected(s, "|");
        } else {
          __str3 = __str3 + read_char(s);
        }
      }
    }
    return __r281;
  });
  read_table["'"] = (function (s) {
    read_char(s);
    return wrap(s, "quote");
  });
  read_table["`"] = (function (s) {
    read_char(s);
    return wrap(s, "quasiquote");
  });
  read_table[","] = (function (s) {
    read_char(s);
    if (peek_char(s) === "@") {
      read_char(s);
      return wrap(s, "unquote-splicing");
    } else {
      return wrap(s, "unquote");
    }
  });
  read_table["?"] = (function (s) {
    read_char(s);
    var __c19 = read_char(s);
    var __e86;
    if (__c19 === "\\") {
      __e86 = read_char(s);
    } else {
      __e86 = __c19;
    }
    var __c131 = __e86;
    return code(__c131);
  });
  read_table["#"] = (function (s) {
    read_char(s);
    var __c20 = peek_char(s);
    if (__c20 === "'") {
      read_char(s);
      return wrap(s, "function");
    } else {
      s.pos = s.pos - 1;
      return read_table[""](s);
    }
  });
  __exports1.stream = stream;
  __exports1.stream = __exports1.stream;
  __exports1.stream;
  __exports1.read = read;
  __exports1.read = __exports1.read;
  __exports1.read;
  __exports1["read-all"] = read_all;
  __exports1.readAll = __exports1["read-all"];
  __exports1.readAll;
  __exports1["read-string"] = read_string;
  __exports1.readString = __exports1["read-string"];
  __exports1.readString;
  __exports1["read-table"] = read_table;
  __exports1.readTable = __exports1["read-table"];
  __exports1.readTable;
  _G.reader = __exports1;
  var __exports2 = {};
  var __self2 = __exports2;
  var __module2 = {["exports"]: __exports2};
  var fs = require("fs");
  var child_process = require("child_process");
  var path = require("path");
  var read_file = (function (path) {
    return fs.readFileSync(path, "utf8");
  });
  var write_file = (function (path, data) {
    return fs.writeFileSync(path, data, "utf8");
  });
  var file_exists63 = (function (path) {
    return fs.existsSync(path, "utf8") && fs.statSync(path).isFile();
  });
  var directory_exists63 = (function (path) {
    return fs.existsSync(path, "utf8") && fs.statSync(path).isDirectory();
  });
  var path_separator = path.sep;
  var path_join = (function (...parts) {
    var __parts = unstash(parts);
    return reduce((function (x, y) {
      return x + path_separator + y;
    }), __parts) || "";
  });
  var get_environment_variable = (function (name) {
    return process.env[name];
  });
  var set_environment_variable = (function (name, value) {
    process.env[name] = value;
    return process.env[name];
  });
  var write = (function (x, cb) {
    var __out = process.stdout;
    return __out.write(x, cb);
  });
  var exit = (function (code) {
    return process.exit(code);
  });
  var argv = cut(process.argv, 2);
  var reload = (function (module) {
    delete require.cache[require.resolve(module)];
    return require(module);
  });
  var shell = (function (command) {
    return child_process.execSync(command).toString();
  });
  __exports2["read-file"] = read_file;
  __exports2.readFile = __exports2["read-file"];
  __exports2.readFile;
  __exports2["write-file"] = write_file;
  __exports2.writeFile = __exports2["write-file"];
  __exports2.writeFile;
  __exports2["file-exists?"] = file_exists63;
  __exports2.fileExists63 = __exports2["file-exists?"];
  __exports2.fileExists63;
  __exports2["directory-exists?"] = directory_exists63;
  __exports2.directoryExists63 = __exports2["directory-exists?"];
  __exports2.directoryExists63;
  __exports2["path-separator"] = path_separator;
  __exports2.pathSeparator = __exports2["path-separator"];
  __exports2.pathSeparator;
  __exports2["path-join"] = path_join;
  __exports2.pathJoin = __exports2["path-join"];
  __exports2.pathJoin;
  __exports2["get-environment-variable"] = get_environment_variable;
  __exports2.getEnvironmentVariable = __exports2["get-environment-variable"];
  __exports2.getEnvironmentVariable;
  __exports2["set-environment-variable"] = set_environment_variable;
  __exports2.setEnvironmentVariable = __exports2["set-environment-variable"];
  __exports2.setEnvironmentVariable;
  __exports2.write = write;
  __exports2.write = __exports2.write;
  __exports2.write;
  __exports2.exit = exit;
  __exports2.exit = __exports2.exit;
  __exports2.exit;
  __exports2.argv = argv;
  __exports2.argv = __exports2.argv;
  __exports2.argv;
  __exports2.reload = reload;
  __exports2.reload = __exports2.reload;
  __exports2.reload;
  __exports2.shell = shell;
  __exports2.shell = __exports2.shell;
  __exports2.shell;
  _G.system = __exports2;
  var __exports3 = {};
  var __self3 = __exports3;
  var __module3 = {["exports"]: __exports3};
  var reader = _G.reader;
  var compiler = _G.compiler;
  var system = _G.system;
  var eval_print = (function (form) {
    var ____id96 = ((function () {
      try {
        return [true, compiler["eval"](form)];
      }
      catch (__e90) {
        return [false, __e90];
      }
    }))();
    var __ok1 = ____id96[0];
    var __v32 = ____id96[1];
    if (! __ok1) {
      return print(__v32.stack);
    } else {
      if (is63(__v32)) {
        return print(str(__v32));
      }
    }
  });
  var rep = (function (s) {
    return eval_print(reader.readString(s));
  });
  var repl = (function () {
    var __buf = "";
    var rep1 = (function (s) {
      __buf = __buf + s;
      var __more1 = [];
      var __form10 = reader.readString(__buf, __more1);
      if (!( __form10 === __more1)) {
        eval_print(__form10);
        __buf = "";
        return system.write("> ");
      }
    });
    system.write("> ");
    var ___in = process.stdin;
    ___in.removeAllListeners();
    ___in.setEncoding("utf8");
    return ___in.on("data", rep1);
  });
  pp_to_string = (function (body) {
    if (atom63(body)) {
      return str(body);
    } else {
      if (empty63(body)) {
        return str(body);
      } else {
        var __s13 = "(";
        var ____x463 = body;
        var ____i58 = 0;
        while (____i58 < _35(____x463)) {
          var __x464 = ____x463[____i58];
          __s13 = __s13 + str(__x464) + "\n\n";
          ____i58 = ____i58 + 1;
        }
        return __s13 + ")";
      }
    }
  });
  _G.ppToString = pp_to_string;
  _G.ppToString;
  _G.pp_to_string = pp_to_string;
  pp = (function (body) {
    print(pp_to_string(body));
    return body;
  });
  _G.pp = pp;
  _G.pp;
  _G.pp = pp;
  read_file = (function (path) {
    var __s14 = reader.stream(system.readFile(path));
    var __body52 = reader.readAll(__s14);
    if (one63(__body52)) {
      return hd(__body52);
    } else {
      return join(["do"], __body52);
    }
  });
  _G.readFile = read_file;
  _G.readFile;
  _G.read_file = read_file;
  expand_file = (function (path) {
    var __body53 = read_file(path);
    return compiler.expand(__body53);
  });
  _G.expandFile = expand_file;
  _G.expandFile;
  _G.expand_file = expand_file;
  compile_file = (function (path) {
    var __body54 = expand_file(path);
    var __form11 = compiler.expand(join(["do"], __body54));
    return compiler.compile(__form11, {["_stash"]: true, ["stmt"]: true});
  });
  _G.compileFile = compile_file;
  _G.compileFile;
  _G.compile_file = compile_file;
  load = (function (path) {
    var __code1 = compile_file(path);
    var __prev = _G.exports || {};
    _G.exports = {};
    var __x467 = _G.exports;
    compiler.run(__code1);
    _G.exports = __prev;
    return __x467;
  });
  _G.load = load;
  _G.load;
  _G.load = load;
  var script_file63 = (function (path) {
    return !( "-" === char(path, 0) || ".js" === clip(path, _35(path) - 3));
  });
  var run_file = (function (path) {
    if (script_file63(path)) {
      return load(path);
    } else {
      return compiler.run(system.readFile(path));
    }
  });
  var usage = (function () {
    print("usage: dax [<file> <arguments> | options <object files>]");
    print(" <file>\t\tProgram read from script file");
    print(" <arguments>\tPassed to program in system.argv");
    print(" <object files>\tLoaded before compiling <input>");
    print("options:");
    print(" -c <input>\tCompile input file");
    print(" -x <input>\tExpand input file");
    print(" -a <input>\tRead input file");
    print(" -o <output>\tOutput file");
    return print(" -e <expr>\tExpression to evaluate");
  });
  var main = (function () {
    var __arg = hd(system.argv);
    if (__arg && script_file63(__arg)) {
      return load(__arg);
    } else {
      if (__arg === "-h" || __arg === "--help") {
        return usage();
      } else {
        var __pre1 = [];
        var __op2 = undefined;
        var __input = undefined;
        var __output = undefined;
        var __expr6 = undefined;
        var __argv = system.argv;
        var __i59 = 0;
        while (__i59 < _35(__argv)) {
          var __a11 = __argv[__i59];
          if (__a11 === "-c" || __a11 === "-x" || __a11 === "-a" || __a11 === "-o" || __a11 === "-t" || __a11 === "-e") {
            if (__i59 === edge(__argv)) {
              print("missing argument for " + __a11);
            } else {
              __i59 = __i59 + 1;
              var __val2 = __argv[__i59];
              if (__a11 === "-c") {
                __input = __val2;
                __op2 = "compile";
              } else {
                if (__a11 === "-x") {
                  __input = __val2;
                  __op2 = "expand";
                } else {
                  if (__a11 === "-a") {
                    __input = __val2;
                    __op2 = "read";
                  } else {
                    if (__a11 === "-o") {
                      __output = __val2;
                    } else {
                      if (__a11 === "-e") {
                        __expr6 = __val2;
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (!( "-" === char(__a11, 0))) {
              add(__pre1, __a11);
            }
          }
          __i59 = __i59 + 1;
        }
        var ____x468 = __pre1;
        var ____i60 = 0;
        while (____i60 < _35(____x468)) {
          var __file = ____x468[____i60];
          run_file(__file);
          ____i60 = ____i60 + 1;
        }
        if (nil63(__input)) {
          if (__expr6) {
            return rep(__expr6);
          } else {
            return repl();
          }
        } else {
          var __e87;
          if (__op2 === "expand") {
            __e87 = pp_to_string(expand_file(__input));
          } else {
            var __e88;
            if (__op2 === "read") {
              __e88 = pp_to_string(read_file(__input));
            } else {
              __e88 = compile_file(__input);
            }
            __e87 = __e88;
          }
          var __code2 = __e87;
          if (nil63(__output) || __output === "-") {
            return print(__code2);
          } else {
            return system.writeFile(__output, __code2);
          }
        }
      }
    }
  });
  __exports3.reader = reader;
  __exports3.reader = __exports3.reader;
  __exports3.reader;
  __exports3.compiler = compiler;
  __exports3.compiler = __exports3.compiler;
  __exports3.compiler;
  __exports3.system = system;
  __exports3.system = __exports3.system;
  __exports3.system;
  __exports3["eval-print"] = eval_print;
  __exports3.evalPrint = __exports3["eval-print"];
  __exports3.evalPrint;
  __exports3.rep = rep;
  __exports3.rep = __exports3.rep;
  __exports3.rep;
  __exports3.repl = repl;
  __exports3.repl = __exports3.repl;
  __exports3.repl;
  __exports3["compile-file"] = compile_file;
  __exports3.compileFile = __exports3["compile-file"];
  __exports3.compileFile;
  __exports3.load = load;
  __exports3.load = __exports3.load;
  __exports3.load;
  __exports3["script-file?"] = script_file63;
  __exports3.scriptFile63 = __exports3["script-file?"];
  __exports3.scriptFile63;
  __exports3["run-file"] = run_file;
  __exports3.runFile = __exports3["run-file"];
  __exports3.runFile;
  __exports3.usage = usage;
  __exports3.usage = __exports3.usage;
  __exports3.usage;
  __exports3.main = main;
  __exports3.main = __exports3.main;
  __exports3.main;
  _G.main = __exports3;
  Object.assign(_G, _G.main);
  return _G;
});
module.exports.create = create;
