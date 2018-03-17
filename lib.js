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
    return nil63(x) || string63(x) || number63(x) || boolean63(x) || type(x) === "symbol";
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
  join = function (...ls) {
    var __ls = unstash(ls);
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
  cat = function (...xs) {
    var __xs = unstash(xs);
    return either(reduce(function (a, b) {
      return a + b;
    }, __xs), "");
  };
  _G.cat = cat;
  _43 = function (...xs) {
    var __xs1 = unstash(xs);
    return either(reduce(function (a, b) {
      return a + b;
    }, __xs1), 0);
  };
  _G._43 = _43;
  _45 = function (...xs) {
    var __xs2 = unstash(xs);
    return either(reduce(function (b, a) {
      return a - b;
    }, reverse(__xs2)), 0);
  };
  _G._45 = _45;
  _42 = function (...xs) {
    var __xs3 = unstash(xs);
    return either(reduce(function (a, b) {
      return a * b;
    }, __xs3), 1);
  };
  _G._42 = _42;
  _47 = function (...xs) {
    var __xs4 = unstash(xs);
    return either(reduce(function (b, a) {
      return a / b;
    }, reverse(__xs4)), 1);
  };
  _G._47 = _47;
  _37 = function (...xs) {
    var __xs5 = unstash(xs);
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
  _60 = function (...xs) {
    var __xs6 = unstash(xs);
    return pairwise(function (a, b) {
      return a < b;
    }, __xs6);
  };
  _G._60 = _60;
  _62 = function (...xs) {
    var __xs7 = unstash(xs);
    return pairwise(function (a, b) {
      return a > b;
    }, __xs7);
  };
  _G._62 = _62;
  _61 = function (...xs) {
    var __xs8 = unstash(xs);
    return pairwise(function (a, b) {
      return a === b;
    }, __xs8);
  };
  _G._61 = _61;
  _6061 = function (...xs) {
    var __xs9 = unstash(xs);
    return pairwise(function (a, b) {
      return a <= b;
    }, __xs9);
  };
  _G._6061 = _6061;
  _6261 = function (...xs) {
    var __xs10 = unstash(xs);
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
  tostring = function (x) {
    return x.toString();
  };
  _G.tostring = tostring;
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
  simple_id63 = function (x) {
    var __id3 = string63(x);
    var __e17;
    if (__id3) {
      var ____id = (function () {
        try {
          return [true, read_string(x)];
        }
        catch (__e75) {
          return [false, __e75];
        }
      })();
      var __ok = ____id[0];
      var __v9 = ____id[1];
      __e17 = __ok && __v9 === x;
    } else {
      __e17 = __id3;
    }    return __e17;
  };
  _G.simple_id63 = simple_id63;
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
                            }                            var __k17 = __e18;
                            if (number63(__k17)) {
                              __xs11[__k17] = str(__v10, __l4);
                            } else {
                              add(__ks, str(__k17, __l4) + ":");
                              add(__ks, str(__v10, __l4));
                            }                          }
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
                            }                            var ____i221 = __e19;
                            __s = __s + __sp + __v11;
                            __sp = " ";
                          }
                          return __s + ")";
                        }                      }                    }                  }                }              }            }          }        }      }    }  };
  _G.str = str;
  apply = function (f, args) {
    var __args = stash(args);
    return f.apply(f, __args);
  };
  _G.apply = apply;
  call = function (f, ...__r77) {
    var ____r77 = unstash(__r77);
    var __f = destash33(f, ____r77);
    var ____id1 = ____r77;
    var __args11 = cut(____id1, 0);
    return apply(__f, __args11);
  };
  _G.call = call;
  setenv = function (k, ...__r78) {
    var ____r78 = unstash(__r78);
    var __k18 = destash33(k, ____r78);
    var ____id2 = ____r78;
    var __keys = cut(____id2, 0);
    if (string63(__k18)) {
      var __e20;
      if (__keys.toplevel) {
        __e20 = hd(_G.environment);
      } else {
        __e20 = last(_G.environment);
      }      var __frame = __e20;
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
        }        var __k20 = __e21;
        __entry[__k20] = __v12;
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
  setenv("set", {"_stash": true, "macro": function (...args) {
    var __args2 = unstash(args);
    return join(["do"], map(function (__x26) {
      var ____id4 = __x26;
      var __lh = ____id4[0];
      var __rh = ____id4[1];
      return ["%set", __lh, __rh];
    }, pair(__args2)));
  }});
  setenv("at", {"_stash": true, "macro": function (l, i) {
    return ["get", l, i];
  }});
  setenv("wipe", {"_stash": true, "macro": function (place) {
    return ["%delete", place];
  }});
  setenv("list", {"_stash": true, "macro": function (...body) {
    var __body = unstash(body);
    var __x30 = unique("x");
    var __l5 = [];
    var __forms = [];
    var ____o13 = __body;
    var __k21 = undefined;
    for (__k21 in ____o13) {
      var __v13 = ____o13[__k21];
      var __e22;
      if (numeric63(__k21)) {
        __e22 = parseInt(__k21);
      } else {
        __e22 = __k21;
      }      var __k22 = __e22;
      if (number63(__k22)) {
        __l5[__k22] = __v13;
      } else {
        add(__forms, ["set", ["get", __x30, ["quote", __k22]], __v13]);
      }    }
    if (some63(__forms)) {
      return join(["let", __x30, join(["%array"], __l5)], __forms, [__x30]);
    } else {
      return join(["%array"], __l5);
    }  }});
  setenv("if", {"_stash": true, "macro": function (...branches) {
    var __branches = unstash(branches);
    return hd(expand_if(__branches));
  }});
  setenv("case", {"_stash": true, "macro": function (expr, ...__r85) {
    var ____r85 = unstash(__r85);
    var __expr = destash33(expr, ____r85);
    var ____id5 = ____r85;
    var __clauses = cut(____id5, 0);
    var __x38 = unique("x");
    var __eq = function (_) {
      return ["=", ["quote", _], __x38];
    };
    var __cl = function (__x41) {
      var ____id6 = __x41;
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
          }        }      }    };
    return ["let", __x38, __expr, join(["if"], apply(join, map(__cl, pair(__clauses))))];
  }});
  setenv("when", {"_stash": true, "macro": function (cond, ...__r88) {
    var ____r88 = unstash(__r88);
    var __cond = destash33(cond, ____r88);
    var ____id7 = ____r88;
    var __body1 = cut(____id7, 0);
    return ["if", __cond, join(["do"], __body1)];
  }});
  setenv("unless", {"_stash": true, "macro": function (cond, ...__r89) {
    var ____r89 = unstash(__r89);
    var __cond1 = destash33(cond, ____r89);
    var ____id8 = ____r89;
    var __body2 = cut(____id8, 0);
    return ["if", ["not", __cond1], join(["do"], __body2)];
  }});
  setenv("obj", {"_stash": true, "macro": function (...body) {
    var __body3 = unstash(body);
    return join(["%object"], mapo(function (x) {
      return x;
    }, __body3));
  }});
  setenv("let", {"_stash": true, "macro": function (bs, ...__r91) {
    var ____r91 = unstash(__r91);
    var __bs = destash33(bs, ____r91);
    var ____id9 = ____r91;
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
        var ____id11 = bind(__lh1, __rh1);
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
      }    }  }});
  setenv("with", {"_stash": true, "macro": function (x, v, ...__r92) {
    var ____r92 = unstash(__r92);
    var __x63 = destash33(x, ____r92);
    var __v14 = destash33(v, ____r92);
    var ____id13 = ____r92;
    var __body5 = cut(____id13, 0);
    return join(["let", [__x63, __v14]], __body5, [__x63]);
  }});
  setenv("let-when", {"_stash": true, "macro": function (x, v, ...__r93) {
    var ____r93 = unstash(__r93);
    var __x67 = destash33(x, ____r93);
    var __v15 = destash33(v, ____r93);
    var ____id14 = ____r93;
    var __body6 = cut(____id14, 0);
    var __y4 = unique("y");
    return ["let", __y4, __v15, ["when", ["yes", __y4], join(["let", [__x67, __y4]], __body6)]];
  }});
  setenv("%setenv", {"_stash": true, "macro": function (name, ...__r94) {
    var ____r94 = unstash(__r94);
    var __name = destash33(name, ____r94);
    var ____id15 = ____r94;
    var __keys1 = cut(____id15, 0);
    return ["do", join(["setenv", ["quote", __name]], __keys1), ["do"]];
  }});
  setenv("define-macro", {"_stash": true, "macro": function (name, args, ...__r95) {
    var ____r95 = unstash(__r95);
    var __name1 = destash33(name, ____r95);
    var __args3 = destash33(args, ____r95);
    var ____id16 = ____r95;
    var __body7 = cut(____id16, 0);
    var ____x77 = ["%setenv", __name1];
    ____x77.macro = join(["fn", __args3], __body7);
    return ____x77;
  }});
  setenv("define-special", {"_stash": true, "macro": function (name, args, ...__r96) {
    var ____r96 = unstash(__r96);
    var __name2 = destash33(name, ____r96);
    var __args4 = destash33(args, ____r96);
    var ____id17 = ____r96;
    var __body8 = cut(____id17, 0);
    var ____x79 = ["%setenv", __name2];
    ____x79.special = join(["fn", __args4], __body8);
    return join(____x79, keys(__body8));
  }});
  setenv("define-symbol-macro", {"_stash": true, "macro": function (name, expansion) {
    var ____x81 = ["%setenv", name];
    ____x81.symbol = ["quote", expansion];
    return ____x81;
  }});
  setenv("define-reader", {"_stash": true, "macro": function (__x83, ...__r98) {
    var ____id18 = __x83;
    var __char = ____id18[0];
    var __s11 = ____id18[1];
    var ____r98 = unstash(__r98);
    var ____x83 = destash33(__x83, ____r98);
    var ____id19 = ____r98;
    var __body9 = cut(____id19, 0);
    return ["set", ["get", "read-table", __char], join(["fn", [__s11]], __body9)];
  }});
  setenv("define", {"_stash": true, "macro": function (name, x, ...__r99) {
    var ____r99 = unstash(__r99);
    var __name3 = destash33(name, ____r99);
    var __x88 = destash33(x, ____r99);
    var ____id20 = ____r99;
    var __body10 = cut(____id20, 0);
    setenv(__name3, {"_stash": true, "variable": true});
    if (some63(__body10)) {
      return join(["%local-function", __name3], bind42(__x88, __body10));
    } else {
      return ["%local", __name3, __x88];
    }  }});
  setenv("define-global", {"_stash": true, "macro": function (name, x, ...__r100) {
    var ____r100 = unstash(__r100);
    var __name4 = destash33(name, ____r100);
    var __x91 = destash33(x, ____r100);
    var ____id21 = ____r100;
    var __body11 = cut(____id21, 0);
    setenv(__name4, {"_stash": true, "toplevel": true, "variable": true});
    if (some63(__body11)) {
      return ["do", join(["%global-function", __name4], bind42(__x91, __body11)), ["%set", ["get", "_G", ["quote", compile(__name4)]], __name4]];
    } else {
      return ["do", ["%set", __name4, __x91], ["%set", ["get", "_G", ["quote", compile(__name4)]], __name4]];
    }  }});
  setenv("with-frame", {"_stash": true, "macro": function (...body) {
    var __body12 = unstash(body);
    var __x102 = unique("x");
    return ["do", ["add", "environment", ["obj"]], ["with", __x102, join(["do"], __body12), ["drop", "environment"]]];
  }});
  setenv("with-bindings", {"_stash": true, "macro": function (__x109, ...__r101) {
    var ____id22 = __x109;
    var __names = ____id22[0];
    var ____r101 = unstash(__r101);
    var ____x109 = destash33(__x109, ____r101);
    var ____id23 = ____r101;
    var __body13 = cut(____id23, 0);
    var __x110 = unique("x");
    var ____x113 = ["setenv", __x110];
    ____x113.variable = true;
    return join(["with-frame", ["each", __x110, __names, ____x113]], __body13);
  }});
  setenv("let-macro", {"_stash": true, "macro": function (definitions, ...__r102) {
    var ____r102 = unstash(__r102);
    var __definitions = destash33(definitions, ____r102);
    var ____id24 = ____r102;
    var __body14 = cut(____id24, 0);
    add(environment, {});
    map(function (m) {
      return _eval(join(["define-macro"], m));
    }, __definitions);
    var ____x114 = join(["do"], macroexpand(__body14));
    drop(environment);
    return ____x114;
  }});
  setenv("let-symbol", {"_stash": true, "macro": function (expansions, ...__r104) {
    var ____r104 = unstash(__r104);
    var __expansions = destash33(expansions, ____r104);
    var ____id25 = ____r104;
    var __body15 = cut(____id25, 0);
    add(environment, {});
    map(function (__x118) {
      var ____id26 = __x118;
      var __name5 = ____id26[0];
      var __exp = ____id26[1];
      return _eval(["define-symbol-macro", __name5, __exp]);
    }, pair(__expansions));
    var ____x117 = join(["do"], macroexpand(__body15));
    drop(environment);
    return ____x117;
  }});
  setenv("let-unique", {"_stash": true, "macro": function (names, ...__r106) {
    var ____r106 = unstash(__r106);
    var __names1 = destash33(names, ____r106);
    var ____id27 = ____r106;
    var __body16 = cut(____id27, 0);
    var __bs11 = map(function (n) {
      return [n, ["unique", ["quote", n]]];
    }, __names1);
    return join(["let", apply(join, __bs11)], __body16);
  }});
  setenv("fn", {"_stash": true, "macro": function (args, ...__r108) {
    var ____r108 = unstash(__r108);
    var __args5 = destash33(args, ____r108);
    var ____id28 = ____r108;
    var __body17 = cut(____id28, 0);
    return join(["%function"], bind42(__args5, __body17));
  }});
  setenv("apply", {"_stash": true, "macro": function (f, ...__r109) {
    var ____r109 = unstash(__r109);
    var __f1 = destash33(f, ____r109);
    var ____id29 = ____r109;
    var __args6 = cut(____id29, 0);
    if (_35(__args6) > 1) {
      return ["%call", "apply", __f1, ["join", join(["list"], almost(__args6)), last(__args6)]];
    } else {
      return join(["%call", "apply", __f1], __args6);
    }  }});
  setenv("guard", {"_stash": true, "macro": function (expr) {
    return [["fn", join(), ["%try", ["list", true, expr]]]];
  }});
  setenv("each", {"_stash": true, "macro": function (x, t, ...__r111) {
    var ____r111 = unstash(__r111);
    var __x134 = destash33(x, ____r111);
    var __t2 = destash33(t, ____r111);
    var ____id30 = ____r111;
    var __body18 = cut(____id30, 0);
    var __o14 = unique("o");
    var __n19 = unique("n");
    var __i25 = unique("i");
    var __e23;
    if (atom63(__x134)) {
      __e23 = [__i25, __x134];
    } else {
      var __e24;
      if (_35(__x134) > 1) {
        __e24 = __x134;
      } else {
        __e24 = [__i25, hd(__x134)];
      }      __e23 = __e24;
    }    var ____id31 = __e23;
    var __k23 = ____id31[0];
    var __v16 = ____id31[1];
    return ["let", [__o14, __t2, __k23, "nil"], ["%for", __o14, __k23, ["let", [__v16, ["get", __o14, __k23]], join(["let", __k23, ["if", ["numeric?", __k23], ["parseInt", __k23], __k23]], __body18)]]];
  }});
  setenv("for", {"_stash": true, "macro": function (i, to, ...__r112) {
    var ____r112 = unstash(__r112);
    var __i26 = destash33(i, ____r112);
    var __to = destash33(to, ____r112);
    var ____id32 = ____r112;
    var __body19 = cut(____id32, 0);
    return ["let", __i26, 0, join(["while", ["<", __i26, __to]], __body19, [["inc", __i26]])];
  }});
  setenv("step", {"_stash": true, "macro": function (v, t, ...__r113) {
    var ____r113 = unstash(__r113);
    var __v17 = destash33(v, ____r113);
    var __t3 = destash33(t, ____r113);
    var ____id33 = ____r113;
    var __body20 = cut(____id33, 0);
    var __x152 = unique("x");
    var __i27 = unique("i");
    return ["let", [__x152, __t3], ["for", __i27, ["#", __x152], join(["let", [__v17, ["at", __x152, __i27]]], __body20)]];
  }});
  setenv("set-of", {"_stash": true, "macro": function (...xs) {
    var __xs12 = unstash(xs);
    var __l6 = [];
    var ____o15 = __xs12;
    var ____i28 = undefined;
    for (____i28 in ____o15) {
      var __x160 = ____o15[____i28];
      var __e25;
      if (numeric63(____i28)) {
        __e25 = parseInt(____i28);
      } else {
        __e25 = ____i28;
      }      var ____i281 = __e25;
      __l6[__x160] = true;
    }
    return join(["obj"], __l6);
  }});
  setenv("join!", {"_stash": true, "macro": function (a, ...__r114) {
    var ____r114 = unstash(__r114);
    var __a2 = destash33(a, ____r114);
    var ____id34 = ____r114;
    var __bs21 = cut(____id34, 0);
    return ["set", __a2, join(["join", __a2], __bs21)];
  }});
  setenv("cat!", {"_stash": true, "macro": function (a, ...__r115) {
    var ____r115 = unstash(__r115);
    var __a3 = destash33(a, ____r115);
    var ____id35 = ____r115;
    var __bs3 = cut(____id35, 0);
    return ["set", __a3, join(["cat", __a3], __bs3)];
  }});
  setenv("inc", {"_stash": true, "macro": function (n, by) {
    var __e26;
    if (nil63(by)) {
      __e26 = 1;
    } else {
      __e26 = by;
    }    return ["set", n, ["+", n, __e26]];
  }});
  setenv("dec", {"_stash": true, "macro": function (n, by) {
    var __e27;
    if (nil63(by)) {
      __e27 = 1;
    } else {
      __e27 = by;
    }    return ["set", n, ["-", n, __e27]];
  }});
  setenv("with-indent", {"_stash": true, "macro": function (form) {
    var __x170 = unique("x");
    return ["do", ["inc", "indent-level"], ["with", __x170, form, ["dec", "indent-level"]]];
  }});
  setenv("export", {"_stash": true, "macro": function (...names) {
    var __names2 = unstash(names);
    return join(["do"], map(function (k) {
      return ["set", ["get", "exports", ["quote", k]], k];
    }, __names2));
  }});
  setenv("when-compiling", {"_stash": true, "macro": function (...body) {
    var __body21 = unstash(body);
    return _eval(join(["do"], __body21));
  }});
  var __exports = {};
  getenv = function (k, p) {
    if (string63(k)) {
      var __i29 = edge(_G.environment);
      while (__i29 >= 0) {
        var __b2 = _G.environment[__i29][k];
        if (is63(__b2)) {
          var __e36;
          if (p) {
            __e36 = __b2[p];
          } else {
            __e36 = __b2;
          }          return __e36;
        } else {
          __i29 = __i29 - 1;
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
  var symbol_macro63 = function (k) {
    return is63(symbol_expansion(k));
  };
  var variable63 = function (k) {
    return is63(getenv(k, "variable"));
  };
  bound63 = function (x) {
    return macro63(x) || special63(x) || symbol_macro63(x) || variable63(x);
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
      var __l7 = ["%object", "\"_stash\"", true];
      var ____o16 = args;
      var __k24 = undefined;
      for (__k24 in ____o16) {
        var __v18 = ____o16[__k24];
        var __e37;
        if (numeric63(__k24)) {
          __e37 = parseInt(__k24);
        } else {
          __e37 = __k24;
        }        var __k25 = __e37;
        if (! number63(__k25)) {
          add(__l7, literal(__k25));
          add(__l7, __v18);
        }
      }
      return join(args, [__l7]);
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
      var __id36 = unique("id");
      var __bs4 = [__id36, rh];
      var ____o17 = lh;
      var __k26 = undefined;
      for (__k26 in ____o17) {
        var __v19 = ____o17[__k26];
        var __e38;
        if (numeric63(__k26)) {
          __e38 = parseInt(__k26);
        } else {
          __e38 = __k26;
        }        var __k27 = __e38;
        var __e39;
        if (__k27 === "rest") {
          __e39 = ["cut", __id36, _35(lh)];
        } else {
          __e39 = ["get", __id36, ["quote", bias(__k27)]];
        }        var __x185 = __e39;
        if (is63(__k27)) {
          var __e40;
          if (__v19 === true) {
            __e40 = __k27;
          } else {
            __e40 = __v19;
          }          var __k28 = __e40;
          __bs4 = join(__bs4, bind(__k28, __x185));
        }
      }
      return __bs4;
    }  };
  _G.bind = bind;
  bind42 = function (args, body) {
    var __args12 = [];
    var rest = function (r) {
      __args12.rest = r;
      return ["unstash", r];
    };
    if (atom63(args)) {
      return [__args12, join(["let", [args, rest(args)]], body)];
    } else {
      var __bs5 = [];
      var __r137 = unique("r");
      var ____o18 = args;
      var __k29 = undefined;
      for (__k29 in ____o18) {
        var __v20 = ____o18[__k29];
        var __e41;
        if (numeric63(__k29)) {
          __e41 = parseInt(__k29);
        } else {
          __e41 = __k29;
        }        var __k30 = __e41;
        if (number63(__k30)) {
          if (atom63(__v20)) {
            add(__args12, __v20);
          } else {
            var __x193 = unique("x");
            add(__args12, __x193);
            __bs5 = join(__bs5, [__v20, __x193]);
          }        }
      }
      if (keys63(args)) {
        __bs5 = join(__bs5, [__r137, rest(__r137)]);
        var __n24 = _35(__args12);
        var __i33 = 0;
        while (__i33 < __n24) {
          var __v21 = __args12[__i33];
          __bs5 = join(__bs5, [__v21, ["destash!", __v21, __r137]]);
          __i33 = __i33 + 1;
        }
        __bs5 = join(__bs5, [keys(args), __r137]);
      }
      return [__args12, join(["let", __bs5], body)];
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
  var expand_local = function (__x201) {
    var ____id37 = __x201;
    var __x202 = ____id37[0];
    var __name6 = ____id37[1];
    var __value = ____id37[2];
    setenv(__name6, {"_stash": true, "variable": true});
    return ["%local", __name6, macroexpand(__value)];
  };
  var expand_function = function (__x204) {
    var ____id38 = __x204;
    var __x205 = ____id38[0];
    var __args7 = ____id38[1];
    var __body22 = cut(____id38, 2);
    add(environment, {});
    var ____o19 = __args7;
    var ____i34 = undefined;
    for (____i34 in ____o19) {
      var ____x206 = ____o19[____i34];
      var __e42;
      if (numeric63(____i34)) {
        __e42 = parseInt(____i34);
      } else {
        __e42 = ____i34;
      }      var ____i341 = __e42;
      setenv(____x206, {"_stash": true, "variable": true});
    }
    var ____x207 = join(["%function", __args7], macroexpand(__body22));
    drop(environment);
    return ____x207;
  };
  var expand_definition = function (__x209) {
    var ____id39 = __x209;
    var __x210 = ____id39[0];
    var __name7 = ____id39[1];
    var __args8 = ____id39[2];
    var __body23 = cut(____id39, 3);
    add(environment, {});
    var ____o20 = __args8;
    var ____i35 = undefined;
    for (____i35 in ____o20) {
      var ____x211 = ____o20[____i35];
      var __e43;
      if (numeric63(____i35)) {
        __e43 = parseInt(____i35);
      } else {
        __e43 = ____i35;
      }      var ____i351 = __e43;
      setenv(____x211, {"_stash": true, "variable": true});
    }
    var ____x212 = join([__x210, __name7, __args8], macroexpand(__body23));
    drop(environment);
    return ____x212;
  };
  var expand_macro = function (form) {
    return macroexpand(expand1(form));
  };
  expand1 = function (__x214) {
    var ____id40 = __x214;
    var __name8 = ____id40[0];
    var __body24 = cut(____id40, 1);
    return apply(macro_function(__name8), __body24);
  };
  _G.expand1 = expand1;
  macroexpand = function (form) {
    if (symbol_macro63(form)) {
      return macroexpand(symbol_expansion(form));
    } else {
      if (atom63(form)) {
        return form;
      } else {
        var __x215 = hd(form);
        if (__x215 === "%local") {
          return expand_local(form);
        } else {
          if (__x215 === "%function") {
            return expand_function(form);
          } else {
            if (__x215 === "%global-function") {
              return expand_definition(form);
            } else {
              if (__x215 === "%local-function") {
                return expand_definition(form);
              } else {
                if (macro63(__x215)) {
                  return expand_macro(form);
                } else {
                  return map(macroexpand, form);
                }              }            }          }        }      }    }  };
  _G.macroexpand = macroexpand;
  var quasiquote_list = function (form, depth) {
    var __xs13 = [["list"]];
    var ____o21 = form;
    var __k31 = undefined;
    for (__k31 in ____o21) {
      var __v22 = ____o21[__k31];
      var __e44;
      if (numeric63(__k31)) {
        __e44 = parseInt(__k31);
      } else {
        __e44 = __k31;
      }      var __k32 = __e44;
      if (! number63(__k32)) {
        var __e45;
        if (quasisplice63(__v22, depth)) {
          __e45 = quasiexpand(__v22[1]);
        } else {
          __e45 = quasiexpand(__v22, depth);
        }        var __v23 = __e45;
        last(__xs13)[__k32] = __v23;
      }
    }
    var ____x218 = form;
    var ____i37 = 0;
    while (____i37 < _35(____x218)) {
      var __x219 = ____x218[____i37];
      if (quasisplice63(__x219, depth)) {
        var __x220 = quasiexpand(__x219[1]);
        add(__xs13, __x220);
        add(__xs13, ["list"]);
      } else {
        add(last(__xs13), quasiexpand(__x219, depth));
      }      ____i37 = ____i37 + 1;
    }
    var __pruned = keep(function (x) {
      return _35(x) > 1 || !( hd(x) === "list") || keys63(x);
    }, __xs13);
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
  expand_if = function (__x224) {
    var ____id41 = __x224;
    var __a4 = ____id41[0];
    var __b3 = ____id41[1];
    var __c11 = cut(____id41, 2);
    if (is63(__b3)) {
      return [join(["%if", __a4, __b3], expand_if(__c11))];
    } else {
      if (is63(__a4)) {
        return [__a4];
      }
    }  };
  _G.expand_if = expand_if;
  indent_level = 0;
  _G.indent_level = indent_level;
  indentation = function () {
    var __s2 = "";
    var __i38 = 0;
    while (__i38 < indent_level) {
      __s2 = __s2 + "  ";
      __i38 = __i38 + 1;
    }
    return __s2;
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
    var __e46;
    if (number_code63(code(id, 0))) {
      __e46 = "_";
    } else {
      __e46 = "";
    }    var __id121 = __e46;
    var __i39 = 0;
    while (__i39 < _35(id)) {
      var __c2 = char(id, __i39);
      var __n28 = code(__c2);
      var __e47;
      if (__c2 === "-" && !( id === "-")) {
        __e47 = "_";
      } else {
        var __e48;
        if (valid_code63(__n28)) {
          __e48 = __c2;
        } else {
          var __e49;
          if (__i39 === 0) {
            __e49 = "_" + __n28;
          } else {
            __e49 = __n28;
          }          __e48 = __e49;
        }        __e47 = __e48;
      }      var __c12 = __e47;
      __id121 = __id121 + __c12;
      __i39 = __i39 + 1;
    }
    if (reserved63(__id121)) {
      return "_" + __id121;
    } else {
      return __id121;
    }  };
  valid_id63 = function (x) {
    return some63(x) && x === id(x);
  };
  _G.valid_id63 = valid_id63;
  var __names3 = {};
  unique = function (x) {
    var __x228 = id(x);
    if (__names3[__x228]) {
      var __i40 = __names3[__x228];
      __names3[__x228] = __names3[__x228] + 1;
      return unique(__x228 + __i40);
    } else {
      __names3[__x228] = 1;
      return "__" + __x228;
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
    var __o22 = [];
    var ____o23 = t;
    var __k33 = undefined;
    for (__k33 in ____o23) {
      var __v24 = ____o23[__k33];
      var __e50;
      if (numeric63(__k33)) {
        __e50 = parseInt(__k33);
      } else {
        __e50 = __k33;
      }      var __k34 = __e50;
      var __x229 = f(__v24);
      if (is63(__x229)) {
        add(__o22, literal(__k34));
        add(__o22, __x229);
      }
    }
    return __o22;
  };
  _G.mapo = mapo;
  var ____x231 = [];
  var ____x232 = [];
  ____x232.js = "!";
  ____x231.not = ____x232;
  var ____x233 = [];
  ____x233["*"] = true;
  ____x233["/"] = true;
  ____x233["%"] = true;
  var ____x234 = [];
  var ____x235 = [];
  ____x235.js = "+";
  ____x234.cat = ____x235;
  var ____x236 = [];
  ____x236["+"] = true;
  ____x236["-"] = true;
  var ____x237 = [];
  ____x237["<"] = true;
  ____x237[">"] = true;
  ____x237["<="] = true;
  ____x237[">="] = true;
  var ____x238 = [];
  var ____x239 = [];
  ____x239.js = "===";
  ____x238["="] = ____x239;
  var ____x240 = [];
  var ____x241 = [];
  ____x241.js = "&&";
  ____x240.and = ____x241;
  var ____x242 = [];
  var ____x243 = [];
  ____x243.js = "||";
  ____x242.or = ____x243;
  var infix = [____x231, ____x233, ____x234, ____x236, ____x237, ____x238, ____x240, ____x242];
  var unary63 = function (form) {
    return two63(form) && in63(hd(form), ["not", "-"]);
  };
  var index = function (k) {
    return k;
  };
  var precedence = function (form) {
    if (!( atom63(form) || unary63(form))) {
      var ____o24 = infix;
      var __k35 = undefined;
      for (__k35 in ____o24) {
        var __v25 = ____o24[__k35];
        var __e51;
        if (numeric63(__k35)) {
          __e51 = parseInt(__k35);
        } else {
          __e51 = __k35;
        }        var __k36 = __e51;
        if (__v25[hd(form)]) {
          return index(__k36);
        }
      }
    }
    return 0;
  };
  var getop = function (op) {
    return find(function (level) {
      var __x245 = level[op];
      if (__x245 === true) {
        return op;
      } else {
        if (is63(__x245)) {
          return __x245.js;
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
    var __s3 = "(";
    var __c3 = "";
    var ____x246 = args;
    var ____i43 = 0;
    while (____i43 < _35(____x246)) {
      var __x247 = ____x246[____i43];
      __s3 = __s3 + __c3 + compile(__x247);
      __c3 = ", ";
      ____i43 = ____i43 + 1;
    }
    if (args.rest) {
      __s3 = __s3 + __c3 + "..." + compile(args.rest);
    }
    return __s3 + ")";
  };
  var escape_newlines = function (s) {
    var __s12 = "";
    var __i44 = 0;
    while (__i44 < _35(s)) {
      var __c4 = char(s, __i44);
      var __e52;
      if (__c4 === "\n") {
        __e52 = "\\n";
      } else {
        var __e53;
        if (__c4 === "\r") {
          __e53 = "\\r";
        } else {
          __e53 = __c4;
        }        __e52 = __e53;
      }      __s12 = __s12 + __e52;
      __i44 = __i44 + 1;
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
    var ____id42 = form;
    var __x248 = ____id42[0];
    var __args9 = cut(____id42, 1);
    var ____id43 = getenv(__x248);
    var __special = ____id43.special;
    var __stmt = ____id43.stmt;
    var __self_tr63 = ____id43.tr;
    var __tr = terminator(stmt63 && ! __self_tr63);
    return apply(__special, __args9) + __tr;
  };
  var parenthesize_call63 = function (x) {
    return ! atom63(x) && hd(x) === "%function" || precedence(x) > 0;
  };
  compile_call = function (form) {
    var __f2 = hd(form);
    var __f11 = compile(__f2);
    var __args10 = compile_args(stash42(tl(form)));
    if (parenthesize_call63(__f2)) {
      return "(" + __f11 + ")" + __args10;
    } else {
      return __f11 + __args10;
    }  };
  _G.compile_call = compile_call;
  var op_delims = function (parent, child, ...__r175) {
    var ____r175 = unstash(__r175);
    var __parent = destash33(parent, ____r175);
    var __child = destash33(child, ____r175);
    var ____id44 = ____r175;
    var __right = ____id44.right;
    var __e54;
    if (__right) {
      __e54 = _6261;
    } else {
      __e54 = _62;
    }    if (__e54(precedence(__child), precedence(__parent))) {
      return ["(", ")"];
    } else {
      return ["", ""];
    }  };
  var compile_infix = function (form) {
    var ____id45 = form;
    var __op = ____id45[0];
    var ____id46 = cut(____id45, 1);
    var __a5 = ____id46[0];
    var __b4 = ____id46[1];
    var ____id47 = op_delims(form, __a5);
    var __ao = ____id47[0];
    var __ac = ____id47[1];
    var ____id48 = op_delims(form, __b4, {"_stash": true, "right": true});
    var __bo = ____id48[0];
    var __bc = ____id48[1];
    var __a6 = compile(__a5);
    var __b5 = compile(__b4);
    var __op1 = getop(__op);
    if (unary63(form)) {
      return __op1 + __ao + " " + __a6 + __ac;
    } else {
      return __ao + __a6 + __ac + " " + __op1 + " " + __bo + __b5 + __bc;
    }  };
  compile_function = function (args, body, ...__r177) {
    var ____r177 = unstash(__r177);
    var __args111 = destash33(args, ____r177);
    var __body25 = destash33(body, ____r177);
    var ____id49 = ____r177;
    var __name9 = ____id49.name;
    var __prefix = ____id49.prefix;
    var __e55;
    if (__name9) {
      __e55 = compile(__name9);
    } else {
      __e55 = "";
    }    var __id50 = __e55;
    var __args121 = compile_args(__args111);
    indent_level = indent_level + 1;
    var ____x251 = compile(__body25, {"_stash": true, "stmt": true});
    indent_level = indent_level - 1;
    var __body26 = ____x251;
    var __ind = indentation();
    var __e56;
    if (__prefix) {
      __e56 = __prefix + " ";
    } else {
      __e56 = "";
    }    var __p1 = __e56;
    var __tr1 = "";
    if (__name9) {
      __tr1 = __tr1 + "\n";
    }
    return "function " + __id50 + __args121 + " {\n" + __body26 + __ind + "}" + __tr1;
  };
  _G.compile_function = compile_function;
  var can_return63 = function (form) {
    return is63(form) && (atom63(form) || !( hd(form) === "return") && ! statement63(hd(form)));
  };
  compile = function (form, ...__r179) {
    var ____r179 = unstash(__r179);
    var __form = destash33(form, ____r179);
    var ____id51 = ____r179;
    var __stmt1 = ____id51.stmt;
    if (nil63(__form)) {
      return "";
    } else {
      if (special_form63(__form)) {
        return compile_special(__form, __stmt1);
      } else {
        var __tr2 = terminator(__stmt1);
        var __e57;
        if (__stmt1) {
          __e57 = indentation();
        } else {
          __e57 = "";
        }        var __ind1 = __e57;
        var __e58;
        if (atom63(__form)) {
          __e58 = compile_atom(__form);
        } else {
          var __e59;
          if (infix63(hd(__form))) {
            __e59 = compile_infix(__form);
          } else {
            __e59 = compile_call(__form);
          }          __e58 = __e59;
        }        var __form1 = __e58;
        return __ind1 + __form1 + __tr2;
      }    }  };
  _G.compile = compile;
  var lower_statement = function (form, tail63) {
    var __hoist = [];
    var __e28 = lower(form, __hoist, true, tail63);
    var __e60;
    if (some63(__hoist) && is63(__e28)) {
      __e60 = join(["do"], __hoist, [__e28]);
    } else {
      var __e61;
      if (is63(__e28)) {
        __e61 = __e28;
      } else {
        var __e62;
        if (_35(__hoist) > 1) {
          __e62 = join(["do"], __hoist);
        } else {
          __e62 = hd(__hoist);
        }        __e61 = __e62;
      }      __e60 = __e61;
    }    return either(__e60, ["do"]);
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
    var ____x257 = almost(args);
    var ____i45 = 0;
    while (____i45 < _35(____x257)) {
      var __x258 = ____x257[____i45];
      var ____y5 = lower(__x258, hoist, stmt63);
      if (yes(____y5)) {
        var __e29 = ____y5;
        if (standalone63(__e29)) {
          add(hoist, __e29);
        }
      }
      ____i45 = ____i45 + 1;
    }
    var __e30 = lower(last(args), hoist, stmt63, tail63);
    if (tail63 && can_return63(__e30)) {
      return ["return", __e30];
    } else {
      return __e30;
    }  };
  var lower_set = function (args, hoist, stmt63, tail63) {
    var ____id52 = args;
    var __lh2 = ____id52[0];
    var __rh2 = ____id52[1];
    add(hoist, ["%set", lower(__lh2, hoist), lower(__rh2, hoist)]);
    if (!( stmt63 && ! tail63)) {
      return __lh2;
    }
  };
  var lower_if = function (args, hoist, stmt63, tail63) {
    var ____id53 = args;
    var __cond2 = ____id53[0];
    var __then = ____id53[1];
    var ___else = ____id53[2];
    if (stmt63) {
      var __e64;
      if (is63(___else)) {
        __e64 = [lower_body([___else], tail63)];
      }
      return add(hoist, join(["%if", lower(__cond2, hoist), lower_body([__then], tail63)], __e64));
    } else {
      var __e31 = unique("e");
      add(hoist, ["%local", __e31]);
      var __e63;
      if (is63(___else)) {
        __e63 = [lower(["%set", __e31, ___else])];
      }
      add(hoist, join(["%if", lower(__cond2, hoist), lower(["%set", __e31, __then])], __e63));
      return __e31;
    }  };
  var lower_short = function (x, args, hoist) {
    var ____id54 = args;
    var __a7 = ____id54[0];
    var __b6 = ____id54[1];
    var __hoist1 = [];
    var __b11 = lower(__b6, __hoist1);
    if (some63(__hoist1)) {
      var __id55 = unique("id");
      var __e65;
      if (x === "and") {
        __e65 = ["%if", __id55, __b6, __id55];
      } else {
        __e65 = ["%if", __id55, __id55, __b6];
      }      return lower(["do", ["%local", __id55, __a7], __e65], hoist);
    } else {
      return [x, lower(__a7, hoist), __b11];
    }  };
  var lower_try = function (args, hoist, tail63) {
    return add(hoist, ["%try", lower_body(args, tail63)]);
  };
  var lower_while = function (args, hoist) {
    var ____id56 = args;
    var __c5 = ____id56[0];
    var __body27 = cut(____id56, 1);
    var __pre = [];
    var __c6 = lower(__c5, __pre);
    var __e66;
    if (none63(__pre)) {
      __e66 = ["while", __c6, lower_body(__body27)];
    } else {
      __e66 = ["while", true, join(["do"], __pre, [["%if", ["not", __c6], ["break"]], lower_body(__body27)])];
    }    return add(hoist, __e66);
  };
  var lower_for = function (args, hoist) {
    var ____id57 = args;
    var __t4 = ____id57[0];
    var __k37 = ____id57[1];
    var __body28 = cut(____id57, 2);
    return add(hoist, ["%for", lower(__t4, hoist), __k37, lower_body(__body28)]);
  };
  var lower_function = function (args) {
    var ____id58 = args;
    var __a8 = ____id58[0];
    var __body29 = cut(____id58, 1);
    return ["%function", __a8, lower_body(__body29, true)];
  };
  var lower_definition = function (kind, args, hoist) {
    var ____id59 = args;
    var __name10 = ____id59[0];
    var __args13 = ____id59[1];
    var __body30 = cut(____id59, 2);
    return add(hoist, [kind, __name10, __args13, lower_body(__body30, true)]);
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
      var __e32 = [];
      var ____id60 = form;
      var __x287 = ____id60[0];
      var __args14 = cut(____id60, 1);
      reduce(function (a, b) {
        add(__e32, [__x287, a, b]);
        return a;
      }, __args14);
      return join(["and"], reverse(__e32));
    } else {
      return form;
    }  };
  var lower_infix63 = function (form) {
    return infix63(hd(form)) && _35(form) > 3;
  };
  var lower_infix = function (form, hoist) {
    var __form3 = lower_pairwise(form);
    var ____id61 = __form3;
    var __x290 = ____id61[0];
    var __args15 = cut(____id61, 1);
    return lower(reduce(function (a, b) {
      return [__x290, b, a];
    }, reverse(__args15)), hoist);
  };
  var lower_special = function (form, hoist) {
    var __e33 = lower_call(form, hoist);
    if (__e33) {
      return add(hoist, __e33);
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
            var ____id62 = form;
            var __x293 = ____id62[0];
            var __args16 = cut(____id62, 1);
            if (__x293 === "do") {
              return lower_do(__args16, hoist, stmt63, tail63);
            } else {
              if (__x293 === "%call") {
                return lower(__args16, hoist, stmt63, tail63);
              } else {
                if (__x293 === "%set") {
                  return lower_set(__args16, hoist, stmt63, tail63);
                } else {
                  if (__x293 === "%if") {
                    return lower_if(__args16, hoist, stmt63, tail63);
                  } else {
                    if (__x293 === "%try") {
                      return lower_try(__args16, hoist, tail63);
                    } else {
                      if (__x293 === "while") {
                        return lower_while(__args16, hoist);
                      } else {
                        if (__x293 === "%for") {
                          return lower_for(__args16, hoist);
                        } else {
                          if (__x293 === "%function") {
                            return lower_function(__args16);
                          } else {
                            if (__x293 === "%local-function" || __x293 === "%global-function") {
                              return lower_definition(__x293, __args16, hoist);
                            } else {
                              if (in63(__x293, ["and", "or"])) {
                                return lower_short(__x293, __args16, hoist);
                              } else {
                                if (statement63(__x293)) {
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
    var __code = compile(expand(["%statement", form]));
    return run(__code);
  };
  _G._eval = _eval;
  immediate_call63 = function (x) {
    return obj63(x) && obj63(hd(x)) && hd(hd(x)) === "%function";
  };
  _G.immediate_call63 = immediate_call63;
  setenv("%call", {"_stash": true, "special": function (...form) {
    var __form4 = unstash(form);
    return compile_call(__form4);
  }});
  setenv("do", {"_stash": true, "special": function (...forms) {
    var __forms1 = unstash(forms);
    var __s4 = "";
    var ____x296 = __forms1;
    var ____i46 = 0;
    while (____i46 < _35(____x296)) {
      var __x297 = ____x296[____i46];
      __s4 = __s4 + compile(__x297, {"_stash": true, "stmt": true});
      if (! atom63(__x297)) {
        if (hd(__x297) === "return" || hd(__x297) === "break") {
          break;
        }
      }
      ____i46 = ____i46 + 1;
    }
    return __s4;
  }, "stmt": true, "tr": true});
  setenv("%if", {"_stash": true, "special": function (cond, cons, alt) {
    var __cond3 = compile(cond);
    indent_level = indent_level + 1;
    var ____x298 = compile(cons, {"_stash": true, "stmt": true});
    indent_level = indent_level - 1;
    var __cons = ____x298;
    var __e67;
    if (alt) {
      indent_level = indent_level + 1;
      var ____x299 = compile(alt, {"_stash": true, "stmt": true});
      indent_level = indent_level - 1;
      __e67 = ____x299;
    }
    var __alt = __e67;
    var __ind2 = indentation();
    var __s5 = "";
    __s5 = __s5 + __ind2 + "if (" + __cond3 + ") {\n" + __cons + __ind2 + "}";
    if (__alt) {
      __s5 = __s5 + " else {\n" + __alt + __ind2 + "}";
      return __s5;
    } else {
      return __s5 + "\n";
    }  }, "stmt": true, "tr": true});
  setenv("while", {"_stash": true, "special": function (cond, form) {
    var __cond4 = compile(cond);
    indent_level = indent_level + 1;
    var ____x300 = compile(form, {"_stash": true, "stmt": true});
    indent_level = indent_level - 1;
    var __body31 = ____x300;
    var __ind3 = indentation();
    return __ind3 + "while (" + __cond4 + ") {\n" + __body31 + __ind3 + "}\n";
  }, "stmt": true, "tr": true});
  setenv("%for", {"_stash": true, "special": function (t, k, form) {
    var __t5 = compile(t);
    var __ind4 = indentation();
    indent_level = indent_level + 1;
    var ____x301 = compile(form, {"_stash": true, "stmt": true});
    indent_level = indent_level - 1;
    var __body32 = ____x301;
    return __ind4 + "for (" + k + " in " + __t5 + ") {\n" + __body32 + __ind4 + "}\n";
  }, "stmt": true, "tr": true});
  setenv("%try", {"_stash": true, "special": function (form) {
    var __e34 = unique("e");
    var __ind5 = indentation();
    indent_level = indent_level + 1;
    var ____x302 = compile(form, {"_stash": true, "stmt": true});
    indent_level = indent_level - 1;
    var __body33 = ____x302;
    var __hf = ["return", ["%array", false, __e34]];
    indent_level = indent_level + 1;
    var ____x305 = compile(__hf, {"_stash": true, "stmt": true});
    indent_level = indent_level - 1;
    var __h = ____x305;
    return __ind5 + "try {\n" + __body33 + __ind5 + "}\n" + __ind5 + "catch (" + __e34 + ") {\n" + __h + __ind5 + "}\n";
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
    var __e68;
    if (nil63(x)) {
      __e68 = "return";
    } else {
      __e68 = "return " + compile(x);
    }    var __x310 = __e68;
    return indentation() + __x310;
  }, "stmt": true});
  setenv("new", {"_stash": true, "special": function (x) {
    return "new " + compile(x);
  }});
  setenv("typeof", {"_stash": true, "special": function (x) {
    return "typeof(" + compile(x) + ")";
  }});
  setenv("error", {"_stash": true, "special": function (x) {
    var __e35 = "throw " + compile(["new", ["Error", x]]);
    return indentation() + __e35;
  }, "stmt": true});
  setenv("%local", {"_stash": true, "special": function (name, value) {
    var __id63 = compile(name);
    var __value1 = compile(value);
    var __e69;
    if (is63(value)) {
      __e69 = " = " + __value1;
    } else {
      __e69 = "";
    }    var __rh3 = __e69;
    var __keyword = "var ";
    var __ind6 = indentation();
    return __ind6 + __keyword + __id63 + __rh3;
  }, "stmt": true});
  setenv("%set", {"_stash": true, "special": function (lh, rh) {
    var __lh3 = compile(lh);
    var __e70;
    if (nil63(rh)) {
      __e70 = "nil";
    } else {
      __e70 = rh;
    }    var __rh4 = compile(__e70);
    return indentation() + __lh3 + " = " + __rh4;
  }, "stmt": true});
  setenv("get", {"_stash": true, "special": function (t, k) {
    var __t11 = compile(t);
    var __k111 = compile(k);
    if (infix_operator63(t)) {
      __t11 = "(" + __t11 + ")";
    }
    if (string_literal63(k) && valid_id63(inner(k))) {
      return __t11 + "." + inner(k);
    } else {
      return __t11 + "[" + __k111 + "]";
    }  }});
  setenv("%array", {"_stash": true, "special": function (...forms) {
    var __forms2 = unstash(forms);
    var __open = "[";
    var __close = "]";
    var __s6 = "";
    var __c7 = "";
    var ____o25 = __forms2;
    var __k38 = undefined;
    for (__k38 in ____o25) {
      var __v26 = ____o25[__k38];
      var __e71;
      if (numeric63(__k38)) {
        __e71 = parseInt(__k38);
      } else {
        __e71 = __k38;
      }      var __k39 = __e71;
      if (number63(__k39)) {
        __s6 = __s6 + __c7 + compile(__v26);
        __c7 = ", ";
      }
    }
    return __open + __s6 + __close;
  }});
  setenv("%object", {"_stash": true, "special": function (...forms) {
    var __forms3 = unstash(forms);
    var __s7 = "{";
    var __c8 = "";
    var __sep = ": ";
    var ____x313 = pair(__forms3);
    var ____i48 = 0;
    while (____i48 < _35(____x313)) {
      var ____id64 = ____x313[____i48];
      var __k40 = ____id64[0];
      var __v27 = ____id64[1];
      __s7 = __s7 + __c8 + key(compile(__k40)) + __sep + compile(__v27);
      __c8 = ", ";
      ____i48 = ____i48 + 1;
    }
    return __s7 + "}";
  }});
  setenv("%literal", {"_stash": true, "special": function (...args) {
    var __args17 = unstash(args);
    var __s8 = "";
    var ____x314 = __args17;
    var ____i49 = 0;
    while (____i49 < _35(____x314)) {
      var __x315 = ____x314[____i49];
      if (string_literal63(__x315)) {
        __s8 = __s8 + _eval(__x315);
      } else {
        __s8 = __s8 + compile(__x315);
      }      ____i49 = ____i49 + 1;
    }
    return __s8;
  }});
  setenv("%statement", {"_stash": true, "special": function (...args) {
    var __args18 = unstash(args);
    var __s9 = indentation();
    var ____x316 = __args18;
    var ____i50 = 0;
    while (____i50 < _35(____x316)) {
      var __x317 = ____x316[____i50];
      if (string_literal63(__x317)) {
        __s9 = __s9 + _eval(__x317);
      } else {
        __s9 = __s9 + compile(__x317);
      }      ____i50 = ____i50 + 1;
    }
    __s9 = __s9 + "\n";
    return __s9;
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
    var ____id65 = s;
    var __pos = ____id65.pos;
    var __len = ____id65.len;
    var __string = ____id65.string;
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
          }        }      }    }
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
    }  };
  var read_all = function (s) {
    var __l8 = [];
    while (true) {
      var __form5 = read(s);
      if (__form5 === eof) {
        break;
      }
      add(__l8, __form5);
    }
    return __l8;
  };
  read_string = function (str, more) {
    var __x318 = read(stream(str, more));
    if (!( __x318 === eof)) {
      return __x318;
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
    var ____id66 = s;
    var __more = ____id66.more;
    var __pos1 = ____id66.pos;
    var __id67 = __more;
    var __e72;
    if (__id67) {
      __e72 = __id67;
    } else {
      throw new Error("Expected " + c + " at " + __pos1);
      __e72 = undefined;
    }    return __e72;
  };
  var wrap = function (s, x) {
    var __y6 = read(s);
    if (__y6 === s.more) {
      return __y6;
    } else {
      return [x, __y6];
    }  };
  var hex_prefix63 = function (str) {
    var __e73;
    if (code(str, 0) === 45) {
      __e73 = 1;
    } else {
      __e73 = 0;
    }    var __i51 = __e73;
    var __id68 = code(str, __i51) === 48;
    var __e74;
    if (__id68) {
      __i51 = __i51 + 1;
      var __n32 = code(str, __i51);
      __e74 = __n32 === 120 || __n32 === 88;
    } else {
      __e74 = __id68;
    }    return __e74;
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
      var __c121 = peek_char(s);
      if (__c121 && (! whitespace[__c121] && ! delimiters[__c121])) {
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
        var __n33 = maybe_number(__str);
        if (real63(__n33)) {
          return __n33;
        } else {
          return __str;
        }      }    }  };
  read_table["("] = function (s) {
    read_char(s);
    var __r241 = undefined;
    var __l9 = [];
    while (nil63(__r241)) {
      skip_non_code(s);
      var __c13 = peek_char(s);
      if (__c13 === ")") {
        read_char(s);
        __r241 = __l9;
      } else {
        if (nil63(__c13)) {
          __r241 = expected(s, ")");
        } else {
          var __x320 = read(s);
          if (key63(__x320)) {
            var __k41 = clip(__x320, 0, edge(__x320));
            var __v28 = read(s);
            __l9[__k41] = __v28;
          } else {
            if (flag63(__x320)) {
              __l9[clip(__x320, 1)] = true;
            } else {
              add(__l9, __x320);
            }          }        }      }    }
    return __r241;
  };
  read_table[")"] = function (s) {
    throw new Error("Unexpected ) at " + s.pos);
  };
  read_table["\""] = function (s) {
    read_char(s);
    var __r244 = undefined;
    var __str1 = "\"";
    while (nil63(__r244)) {
      var __c14 = peek_char(s);
      if (__c14 === "\"") {
        __r244 = __str1 + read_char(s);
      } else {
        if (nil63(__c14)) {
          __r244 = expected(s, "\"");
        } else {
          if (__c14 === "\\") {
            __str1 = __str1 + read_char(s);
          }
          __str1 = __str1 + read_char(s);
        }      }    }
    return __r244;
  };
  read_table["|"] = function (s) {
    read_char(s);
    var __r246 = undefined;
    var __str2 = "|";
    while (nil63(__r246)) {
      var __c15 = peek_char(s);
      if (__c15 === "|") {
        __r246 = __str2 + read_char(s);
      } else {
        if (nil63(__c15)) {
          __r246 = expected(s, "|");
        } else {
          __str2 = __str2 + read_char(s);
        }      }    }
    return __r246;
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
  var path_join = function (...parts) {
    var __parts = unstash(parts);
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
    var ____id69 = (function () {
      try {
        return [true, compiler["eval"](form)];
      }
      catch (__e76) {
        return [false, __e76];
      }
    })();
    var __ok1 = ____id69[0];
    var __v29 = ____id69[1];
    if (! __ok1) {
      return print(__v29.stack);
    } else {
      if (is63(__v29)) {
        return print(str(__v29));
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
      var __form6 = reader["read-string"](__buf, __more1);
      if (!( __form6 === __more1)) {
        eval_print(__form6);
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
    var __s10 = reader.stream(system["read-file"](path));
    var __body34 = reader["read-all"](__s10);
    return compiler.expand(join(["do"], __body34));
  };
  _G.expand_file = expand_file;
  compile_file = function (path) {
    var __body35 = expand_file(path);
    var __form7 = compiler.expand(join(["do"], __body35));
    return compiler.compile(__form7, {"_stash": true, "stmt": true});
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
        var __expr1 = undefined;
        var __argv = system.argv;
        var __i52 = 0;
        while (__i52 < _35(__argv)) {
          var __a9 = __argv[__i52];
          if (__a9 === "-c" || __a9 === "-o" || __a9 === "-t" || __a9 === "-e") {
            if (__i52 === edge(__argv)) {
              print("missing argument for " + __a9);
            } else {
              __i52 = __i52 + 1;
              var __val1 = __argv[__i52];
              if (__a9 === "-c") {
                __input = __val1;
              } else {
                if (__a9 === "-o") {
                  __output = __val1;
                } else {
                  if (__a9 === "-e") {
                    __expr1 = __val1;
                  }
                }              }            }          } else {
            if (!( "-" === char(__a9, 0))) {
              add(__pre1, __a9);
            }
          }          __i52 = __i52 + 1;
        }
        var ____x324 = __pre1;
        var ____i53 = 0;
        while (____i53 < _35(____x324)) {
          var __file = ____x324[____i53];
          run_file(__file);
          ____i53 = ____i53 + 1;
        }
        if (nil63(__input)) {
          if (__expr1) {
            return rep(__expr1);
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
