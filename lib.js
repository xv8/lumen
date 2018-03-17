var vm = require("vm");
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
        catch (__e81) {
          return [false, __e81];
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
  setenv("void", {["_stash"]: true, ["macro"]: function (...body) {
    var __body = unstash(body);
    return join(["do"], __body, [["do"]]);
  }});
  setenv("class", {["_stash"]: true, ["macro"]: function (x, ...__r80) {
    var ____r80 = unstash(__r80);
    var __x28 = destash33(x, ____r80);
    var ____id4 = ____r80;
    var __body1 = cut(____id4, 0);
    if (atom63(__x28)) {
      return join(["%class", [__x28]], __body1);
    } else {
      return join(["%class", __x28], __body1);
    }  }});
  setenv("quote", {["_stash"]: true, ["macro"]: function (form) {
    return quoted(form);
  }});
  setenv("quasiquote", {["_stash"]: true, ["macro"]: function (form) {
    return quasiexpand(form, 1);
  }});
  setenv("set", {["_stash"]: true, ["macro"]: function (...args) {
    var __args2 = unstash(args);
    return join(["do"], map(function (__x33) {
      var ____id5 = __x33;
      var __lh = ____id5[0];
      var __rh = ____id5[1];
      return ["%set", __lh, __rh];
    }, pair(__args2)));
  }});
  setenv("at", {["_stash"]: true, ["macro"]: function (l, i) {
    return ["get", l, i];
  }});
  setenv("wipe", {["_stash"]: true, ["macro"]: function (place) {
    return ["%delete", place];
  }});
  setenv("list", {["_stash"]: true, ["macro"]: function (...body) {
    var __body2 = unstash(body);
    var __x37 = unique("x");
    var __l5 = [];
    var __forms = [];
    var ____o13 = __body2;
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
        add(__forms, ["set", ["get", __x37, ["quote", __k22]], __v13]);
      }    }
    if (some63(__forms)) {
      return join(["let", __x37, join(["%array"], __l5)], __forms, [__x37]);
    } else {
      return join(["%array"], __l5);
    }  }});
  setenv("if", {["_stash"]: true, ["macro"]: function (...branches) {
    var __branches = unstash(branches);
    return hd(expand_if(__branches));
  }});
  setenv("case", {["_stash"]: true, ["macro"]: function (expr, ...__r86) {
    var ____r86 = unstash(__r86);
    var __expr = destash33(expr, ____r86);
    var ____id6 = ____r86;
    var __clauses = cut(____id6, 0);
    var __x45 = unique("x");
    var __eq = function (_) {
      return ["=", ["quote", _], __x45];
    };
    var __cl = function (__x48) {
      var ____id7 = __x48;
      var __a1 = ____id7[0];
      var __b1 = ____id7[1];
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
    return ["let", __x45, __expr, join(["if"], apply(join, map(__cl, pair(__clauses))))];
  }});
  setenv("when", {["_stash"]: true, ["macro"]: function (cond, ...__r89) {
    var ____r89 = unstash(__r89);
    var __cond = destash33(cond, ____r89);
    var ____id8 = ____r89;
    var __body3 = cut(____id8, 0);
    return ["if", __cond, join(["do"], __body3)];
  }});
  setenv("unless", {["_stash"]: true, ["macro"]: function (cond, ...__r90) {
    var ____r90 = unstash(__r90);
    var __cond1 = destash33(cond, ____r90);
    var ____id9 = ____r90;
    var __body4 = cut(____id9, 0);
    return ["if", ["not", __cond1], join(["do"], __body4)];
  }});
  setenv("obj", {["_stash"]: true, ["macro"]: function (...body) {
    var __body5 = unstash(body);
    return join(["%object"], mapo(function (x) {
      return x;
    }, __body5));
  }});
  setenv("let", {["_stash"]: true, ["macro"]: function (bs, ...__r92) {
    var ____r92 = unstash(__r92);
    var __bs = destash33(bs, ____r92);
    var ____id10 = ____r92;
    var __body6 = cut(____id10, 0);
    if (atom63(__bs)) {
      return join(["let", [__bs, hd(__body6)]], tl(__body6));
    } else {
      if (none63(__bs)) {
        return join(["do"], __body6);
      } else {
        var ____id11 = __bs;
        var __lh1 = ____id11[0];
        var __rh1 = ____id11[1];
        var __bs2 = cut(____id11, 2);
        var ____id12 = bind(__lh1, __rh1);
        var __id13 = ____id12[0];
        var __val = ____id12[1];
        var __bs1 = cut(____id12, 2);
        var __renames = [];
        if (! id_literal63(__id13)) {
          var __id111 = unique(__id13);
          __renames = [__id13, __id111];
          __id13 = __id111;
        }
        return ["do", ["%local", __id13, __val], ["let-symbol", __renames, join(["let", join(__bs1, __bs2)], __body6)]];
      }    }  }});
  setenv("with", {["_stash"]: true, ["macro"]: function (x, v, ...__r93) {
    var ____r93 = unstash(__r93);
    var __x70 = destash33(x, ____r93);
    var __v14 = destash33(v, ____r93);
    var ____id14 = ____r93;
    var __body7 = cut(____id14, 0);
    return join(["let", [__x70, __v14]], __body7, [__x70]);
  }});
  setenv("let-when", {["_stash"]: true, ["macro"]: function (x, v, ...__r94) {
    var ____r94 = unstash(__r94);
    var __x74 = destash33(x, ____r94);
    var __v15 = destash33(v, ____r94);
    var ____id15 = ____r94;
    var __body8 = cut(____id15, 0);
    var __y4 = unique("y");
    return ["let", __y4, __v15, ["when", ["yes", __y4], join(["let", [__x74, __y4]], __body8)]];
  }});
  setenv("%setenv", {["_stash"]: true, ["macro"]: function (name, ...__r95) {
    var ____r95 = unstash(__r95);
    var __name = destash33(name, ____r95);
    var ____id16 = ____r95;
    var __keys1 = cut(____id16, 0);
    return ["void", join(["setenv", ["quote", __name]], __keys1)];
  }});
  setenv("define-macro", {["_stash"]: true, ["macro"]: function (name, args, ...__r96) {
    var ____r96 = unstash(__r96);
    var __name1 = destash33(name, ____r96);
    var __args3 = destash33(args, ____r96);
    var ____id17 = ____r96;
    var __body9 = cut(____id17, 0);
    var ____x83 = ["%setenv", __name1];
    ____x83.macro = join(["fn", __args3], __body9);
    return ____x83;
  }});
  setenv("define-special", {["_stash"]: true, ["macro"]: function (name, args, ...__r97) {
    var ____r97 = unstash(__r97);
    var __name2 = destash33(name, ____r97);
    var __args4 = destash33(args, ____r97);
    var ____id18 = ____r97;
    var __body10 = cut(____id18, 0);
    var ____x85 = ["%setenv", __name2];
    ____x85.special = join(["fn", __args4], __body10);
    return join(____x85, keys(__body10));
  }});
  setenv("define-symbol-macro", {["_stash"]: true, ["macro"]: function (name, expansion) {
    var ____x87 = ["%setenv", name];
    ____x87.symbol = ["quote", expansion];
    return ____x87;
  }});
  setenv("define-reader", {["_stash"]: true, ["macro"]: function (__x89, ...__r99) {
    var ____id19 = __x89;
    var __char = ____id19[0];
    var __s11 = ____id19[1];
    var ____r99 = unstash(__r99);
    var ____x89 = destash33(__x89, ____r99);
    var ____id20 = ____r99;
    var __body11 = cut(____id20, 0);
    return ["set", ["get", "read-table", __char], join(["fn", [__s11]], __body11)];
  }});
  setenv("define", {["_stash"]: true, ["macro"]: function (name, x, ...__r100) {
    var ____r100 = unstash(__r100);
    var __name3 = destash33(name, ____r100);
    var __x94 = destash33(x, ____r100);
    var ____id21 = ____r100;
    var __body12 = cut(____id21, 0);
    setenv(__name3, {["_stash"]: true, ["variable"]: true});
    if (some63(__body12)) {
      return join(["%local-function", __name3], bind42(__x94, __body12));
    } else {
      return ["%local", __name3, __x94];
    }  }});
  setenv("define-global", {["_stash"]: true, ["macro"]: function (name, x, ...__r101) {
    var ____r101 = unstash(__r101);
    var __name4 = destash33(name, ____r101);
    var __x97 = destash33(x, ____r101);
    var ____id22 = ____r101;
    var __body13 = cut(____id22, 0);
    setenv(__name4, {["_stash"]: true, ["toplevel"]: true, ["variable"]: true});
    if (some63(__body13)) {
      return ["do", join(["%global-function", __name4], bind42(__x97, __body13)), ["%set", ["get", "_G", ["quote", compile(__name4)]], __name4]];
    } else {
      return ["do", ["%set", __name4, __x97], ["%set", ["get", "_G", ["quote", compile(__name4)]], __name4]];
    }  }});
  setenv("with-frame", {["_stash"]: true, ["macro"]: function (...body) {
    var __body14 = unstash(body);
    var __x108 = unique("x");
    return ["do", ["add", "environment", ["obj"]], ["with", __x108, join(["do"], __body14), ["drop", "environment"]]];
  }});
  setenv("with-bindings", {["_stash"]: true, ["macro"]: function (__x115, ...__r102) {
    var ____id23 = __x115;
    var __names = ____id23[0];
    var ____r102 = unstash(__r102);
    var ____x115 = destash33(__x115, ____r102);
    var ____id24 = ____r102;
    var __body15 = cut(____id24, 0);
    var __x116 = unique("x");
    var ____x119 = ["setenv", __x116];
    ____x119.variable = true;
    return join(["with-frame", ["each", __x116, __names, ____x119]], __body15);
  }});
  setenv("let-macro", {["_stash"]: true, ["macro"]: function (definitions, ...__r103) {
    var ____r103 = unstash(__r103);
    var __definitions = destash33(definitions, ____r103);
    var ____id25 = ____r103;
    var __body16 = cut(____id25, 0);
    add(environment, {});
    map(function (m) {
      return _eval(join(["define-macro"], m));
    }, __definitions);
    var ____x120 = join(["do"], macroexpand(__body16));
    drop(environment);
    return ____x120;
  }});
  setenv("let-symbol", {["_stash"]: true, ["macro"]: function (expansions, ...__r105) {
    var ____r105 = unstash(__r105);
    var __expansions = destash33(expansions, ____r105);
    var ____id26 = ____r105;
    var __body17 = cut(____id26, 0);
    add(environment, {});
    map(function (__x124) {
      var ____id27 = __x124;
      var __name5 = ____id27[0];
      var __exp = ____id27[1];
      return _eval(["define-symbol-macro", __name5, __exp]);
    }, pair(__expansions));
    var ____x123 = join(["do"], macroexpand(__body17));
    drop(environment);
    return ____x123;
  }});
  setenv("let-unique", {["_stash"]: true, ["macro"]: function (names, ...__r107) {
    var ____r107 = unstash(__r107);
    var __names1 = destash33(names, ____r107);
    var ____id28 = ____r107;
    var __body18 = cut(____id28, 0);
    var __bs11 = map(function (n) {
      return [n, ["unique", ["quote", n]]];
    }, __names1);
    return join(["let", apply(join, __bs11)], __body18);
  }});
  setenv("fn", {["_stash"]: true, ["macro"]: function (args, ...__r109) {
    var ____r109 = unstash(__r109);
    var __args5 = destash33(args, ____r109);
    var ____id29 = ____r109;
    var __body19 = cut(____id29, 0);
    return join(["%function"], bind42(__args5, __body19));
  }});
  setenv("apply", {["_stash"]: true, ["macro"]: function (f, ...__r110) {
    var ____r110 = unstash(__r110);
    var __f1 = destash33(f, ____r110);
    var ____id30 = ____r110;
    var __args6 = cut(____id30, 0);
    if (_35(__args6) > 1) {
      return ["%call", "apply", __f1, ["join", join(["list"], almost(__args6)), last(__args6)]];
    } else {
      return join(["%call", "apply", __f1], __args6);
    }  }});
  setenv("guard", {["_stash"]: true, ["macro"]: function (expr) {
    return [["fn", join(), ["%try", ["list", true, expr]]]];
  }});
  setenv("each", {["_stash"]: true, ["macro"]: function (x, t, ...__r112) {
    var ____r112 = unstash(__r112);
    var __x140 = destash33(x, ____r112);
    var __t2 = destash33(t, ____r112);
    var ____id31 = ____r112;
    var __body20 = cut(____id31, 0);
    var __o14 = unique("o");
    var __n19 = unique("n");
    var __i25 = unique("i");
    var __e23;
    if (atom63(__x140)) {
      __e23 = [__i25, __x140];
    } else {
      var __e24;
      if (_35(__x140) > 1) {
        __e24 = __x140;
      } else {
        __e24 = [__i25, hd(__x140)];
      }      __e23 = __e24;
    }    var ____id32 = __e23;
    var __k23 = ____id32[0];
    var __v16 = ____id32[1];
    return ["let", [__o14, __t2, __k23, "nil"], ["%for", __o14, __k23, ["let", [__v16, ["get", __o14, __k23]], join(["let", __k23, ["if", ["numeric?", __k23], ["parseInt", __k23], __k23]], __body20)]]];
  }});
  setenv("for", {["_stash"]: true, ["macro"]: function (i, to, ...__r113) {
    var ____r113 = unstash(__r113);
    var __i26 = destash33(i, ____r113);
    var __to = destash33(to, ____r113);
    var ____id33 = ____r113;
    var __body21 = cut(____id33, 0);
    return ["let", __i26, 0, join(["while", ["<", __i26, __to]], __body21, [["inc", __i26]])];
  }});
  setenv("step", {["_stash"]: true, ["macro"]: function (v, t, ...__r114) {
    var ____r114 = unstash(__r114);
    var __v17 = destash33(v, ____r114);
    var __t3 = destash33(t, ____r114);
    var ____id34 = ____r114;
    var __body22 = cut(____id34, 0);
    var __x158 = unique("x");
    var __i27 = unique("i");
    return ["let", [__x158, __t3], ["for", __i27, ["#", __x158], join(["let", [__v17, ["at", __x158, __i27]]], __body22)]];
  }});
  setenv("set-of", {["_stash"]: true, ["macro"]: function (...xs) {
    var __xs12 = unstash(xs);
    var __l6 = [];
    var ____o15 = __xs12;
    var ____i28 = undefined;
    for (____i28 in ____o15) {
      var __x166 = ____o15[____i28];
      var __e25;
      if (numeric63(____i28)) {
        __e25 = parseInt(____i28);
      } else {
        __e25 = ____i28;
      }      var ____i281 = __e25;
      __l6[__x166] = true;
    }
    return join(["obj"], __l6);
  }});
  setenv("join!", {["_stash"]: true, ["macro"]: function (a, ...__r115) {
    var ____r115 = unstash(__r115);
    var __a2 = destash33(a, ____r115);
    var ____id35 = ____r115;
    var __bs21 = cut(____id35, 0);
    return ["set", __a2, join(["join", __a2], __bs21)];
  }});
  setenv("cat!", {["_stash"]: true, ["macro"]: function (a, ...__r116) {
    var ____r116 = unstash(__r116);
    var __a3 = destash33(a, ____r116);
    var ____id36 = ____r116;
    var __bs3 = cut(____id36, 0);
    return ["set", __a3, join(["cat", __a3], __bs3)];
  }});
  setenv("inc", {["_stash"]: true, ["macro"]: function (n, by) {
    var __e26;
    if (nil63(by)) {
      __e26 = 1;
    } else {
      __e26 = by;
    }    return ["set", n, ["+", n, __e26]];
  }});
  setenv("dec", {["_stash"]: true, ["macro"]: function (n, by) {
    var __e27;
    if (nil63(by)) {
      __e27 = 1;
    } else {
      __e27 = by;
    }    return ["set", n, ["-", n, __e27]];
  }});
  setenv("with-indent", {["_stash"]: true, ["macro"]: function (form) {
    var __x176 = unique("x");
    return ["do", ["inc", "indent-level"], ["with", __x176, form, ["dec", "indent-level"]]];
  }});
  setenv("export", {["_stash"]: true, ["macro"]: function (...names) {
    var __names2 = unstash(names);
    return join(["do"], map(function (k) {
      return ["set", ["get", "exports", ["quote", k]], k];
    }, __names2));
  }});
  setenv("when-compiling", {["_stash"]: true, ["macro"]: function (...body) {
    var __body23 = unstash(body);
    return _eval(join(["do"], __body23));
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
      var __id37 = unique("id");
      var __bs4 = [__id37, rh];
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
          __e39 = ["cut", __id37, _35(lh)];
        } else {
          __e39 = ["get", __id37, ["quote", bias(__k27)]];
        }        var __x191 = __e39;
        if (is63(__k27)) {
          var __e40;
          if (__v19 === true) {
            __e40 = __k27;
          } else {
            __e40 = __v19;
          }          var __k28 = __e40;
          __bs4 = join(__bs4, bind(__k28, __x191));
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
      var __r138 = unique("r");
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
            var __x199 = unique("x");
            add(__args12, __x199);
            __bs5 = join(__bs5, [__v20, __x199]);
          }        }
      }
      if (keys63(args)) {
        __bs5 = join(__bs5, [__r138, rest(__r138)]);
        var __n24 = _35(__args12);
        var __i33 = 0;
        while (__i33 < __n24) {
          var __v21 = __args12[__i33];
          __bs5 = join(__bs5, [__v21, ["destash!", __v21, __r138]]);
          __i33 = __i33 + 1;
        }
        __bs5 = join(__bs5, [keys(args), __r138]);
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
  var expand_local = function (__x207) {
    var ____id38 = __x207;
    var __x208 = ____id38[0];
    var __name6 = ____id38[1];
    var __value = ____id38[2];
    setenv(__name6, {["_stash"]: true, ["variable"]: true});
    return ["%local", __name6, macroexpand(__value)];
  };
  var expand_function = function (__x210) {
    var ____id39 = __x210;
    var __x211 = ____id39[0];
    var __args7 = ____id39[1];
    var __body24 = cut(____id39, 2);
    add(environment, {});
    var ____o19 = __args7;
    var ____i34 = undefined;
    for (____i34 in ____o19) {
      var ____x212 = ____o19[____i34];
      var __e42;
      if (numeric63(____i34)) {
        __e42 = parseInt(____i34);
      } else {
        __e42 = ____i34;
      }      var ____i341 = __e42;
      setenv(____x212, {["_stash"]: true, ["variable"]: true});
    }
    var ____x213 = join(["%function", __args7], macroexpand(__body24));
    drop(environment);
    return ____x213;
  };
  var expand_table = function (__x215) {
    var ____id40 = __x215;
    var __x216 = ____id40[0];
    var __args8 = cut(____id40, 1);
    var __expr1 = join([__x216], keys(__args8));
    var ____x218 = __args8;
    var ____i35 = 0;
    while (____i35 < _35(____x218)) {
      var __x219 = ____x218[____i35];
      if (atom63(__x219)) {
        add(__expr1, [__x219, macroexpand(__x219)]);
      } else {
        if (_35(__x219) <= 2) {
          var ____id41 = __x219;
          var __name7 = ____id41[0];
          var __v22 = ____id41[1];
          add(__expr1, [macroexpand(__name7), macroexpand(__v22)]);
        } else {
          if (_35(__x219) <= 3) {
            var ____id42 = __x219;
            var __name8 = ____id42[0];
            var __args9 = ____id42[1];
            var __body25 = cut(____id42, 2);
            add(environment, {});
            var ____o20 = __args9;
            var ____i36 = undefined;
            for (____i36 in ____o20) {
              var ____x222 = ____o20[____i36];
              var __e44;
              if (numeric63(____i36)) {
                __e44 = parseInt(____i36);
              } else {
                __e44 = ____i36;
              }              var ____i361 = __e44;
              setenv(____x222, {["_stash"]: true, ["variable"]: true});
            }
            var ____x223 = add(__expr1, join([macroexpand(__name8), __args9], macroexpand(__body25)));
            drop(environment);
            ____x223;
          } else {
            var ____id43 = __x219;
            var __prefix = ____id43[0];
            var __name9 = ____id43[1];
            var __args10 = ____id43[2];
            var __body26 = cut(____id43, 3);
            add(environment, {});
            var ____o21 = __args10;
            var ____i37 = undefined;
            for (____i37 in ____o21) {
              var ____x225 = ____o21[____i37];
              var __e43;
              if (numeric63(____i37)) {
                __e43 = parseInt(____i37);
              } else {
                __e43 = ____i37;
              }              var ____i371 = __e43;
              setenv(____x225, {["_stash"]: true, ["variable"]: true});
            }
            var ____x226 = add(__expr1, join([__prefix, macroexpand(__name9), __args10], macroexpand(__body26)));
            drop(environment);
            ____x226;
          }        }      }      ____i35 = ____i35 + 1;
    }
    return __expr1;
  };
  var expand_class = function (__x228) {
    var ____id44 = __x228;
    var __x229 = ____id44[0];
    var __name10 = ____id44[1];
    var __body27 = cut(____id44, 2);
    return join([__x229, __name10], tl(expand_table(join(["%table"], __body27))));
  };
  var expand_definition = function (__x232) {
    var ____id45 = __x232;
    var __x233 = ____id45[0];
    var __name11 = ____id45[1];
    var __args111 = ____id45[2];
    var __body28 = cut(____id45, 3);
    add(environment, {});
    var ____o22 = __args111;
    var ____i38 = undefined;
    for (____i38 in ____o22) {
      var ____x234 = ____o22[____i38];
      var __e45;
      if (numeric63(____i38)) {
        __e45 = parseInt(____i38);
      } else {
        __e45 = ____i38;
      }      var ____i381 = __e45;
      setenv(____x234, {["_stash"]: true, ["variable"]: true});
    }
    var ____x235 = join([__x233, __name11, __args111], macroexpand(__body28));
    drop(environment);
    return ____x235;
  };
  var expand_macro = function (form) {
    return macroexpand(expand1(form));
  };
  expand1 = function (__x237) {
    var ____id46 = __x237;
    var __name12 = ____id46[0];
    var __body29 = cut(____id46, 1);
    return apply(macro_function(__name12), __body29);
  };
  _G.expand1 = expand1;
  macroexpand = function (form) {
    if (symbol_macro63(form)) {
      return macroexpand(symbol_expansion(form));
    } else {
      if (atom63(form)) {
        return form;
      } else {
        var __x238 = hd(form);
        if (__x238 === "%local") {
          return expand_local(form);
        } else {
          if (__x238 === "%function") {
            return expand_function(form);
          } else {
            if (__x238 === "%table") {
              return expand_table(form);
            } else {
              if (__x238 === "%class") {
                return expand_class(form);
              } else {
                if (__x238 === "%global-function") {
                  return expand_definition(form);
                } else {
                  if (__x238 === "%local-function") {
                    return expand_definition(form);
                  } else {
                    if (macro63(__x238)) {
                      return expand_macro(form);
                    } else {
                      return map(macroexpand, form);
                    }                  }                }              }            }          }        }      }    }  };
  _G.macroexpand = macroexpand;
  var quasiquote_list = function (form, depth) {
    var __xs13 = [["list"]];
    var ____o23 = form;
    var __k31 = undefined;
    for (__k31 in ____o23) {
      var __v23 = ____o23[__k31];
      var __e46;
      if (numeric63(__k31)) {
        __e46 = parseInt(__k31);
      } else {
        __e46 = __k31;
      }      var __k32 = __e46;
      if (! number63(__k32)) {
        var __e47;
        if (quasisplice63(__v23, depth)) {
          __e47 = quasiexpand(__v23[1]);
        } else {
          __e47 = quasiexpand(__v23, depth);
        }        var __v24 = __e47;
        last(__xs13)[__k32] = __v24;
      }
    }
    var ____x241 = form;
    var ____i40 = 0;
    while (____i40 < _35(____x241)) {
      var __x242 = ____x241[____i40];
      if (quasisplice63(__x242, depth)) {
        var __x243 = quasiexpand(__x242[1]);
        add(__xs13, __x243);
        add(__xs13, ["list"]);
      } else {
        add(last(__xs13), quasiexpand(__x242, depth));
      }      ____i40 = ____i40 + 1;
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
  expand_if = function (__x247) {
    var ____id47 = __x247;
    var __a4 = ____id47[0];
    var __b3 = ____id47[1];
    var __c11 = cut(____id47, 2);
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
    var __i41 = 0;
    while (__i41 < indent_level) {
      __s2 = __s2 + "  ";
      __i41 = __i41 + 1;
    }
    return __s2;
  };
  _G.indentation = indentation;
  var reserved = {["="]: true, ["=="]: true, ["+"]: true, ["-"]: true, ["%"]: true, ["*"]: true, ["/"]: true, ["<"]: true, [">"]: true, ["<="]: true, [">="]: true, ["break"]: true, ["case"]: true, ["catch"]: true, ["class"]: true, ["const"]: true, ["continue"]: true, ["debugger"]: true, ["default"]: true, ["delete"]: true, ["do"]: true, ["else"]: true, ["eval"]: true, ["finally"]: true, ["for"]: true, ["function"]: true, ["if"]: true, ["import"]: true, ["in"]: true, ["instanceof"]: true, ["let"]: true, ["new"]: true, ["return"]: true, ["switch"]: true, ["throw"]: true, ["try"]: true, ["typeof"]: true, ["var"]: true, ["void"]: true, ["with"]: true};
  reserved63 = function (x) {
    return has63(reserved, x);
  };
  _G.reserved63 = reserved63;
  var valid_code63 = function (n) {
    return number_code63(n) || n > 64 && n < 91 || n > 96 && n < 123 || n === 95;
  };
  var id = function (id) {
    var __e48;
    if (number_code63(code(id, 0))) {
      __e48 = "_";
    } else {
      __e48 = "";
    }    var __id121 = __e48;
    var __i42 = 0;
    while (__i42 < _35(id)) {
      var __c2 = char(id, __i42);
      var __n30 = code(__c2);
      var __e49;
      if (__c2 === "-" && !( id === "-")) {
        __e49 = "_";
      } else {
        var __e50;
        if (valid_code63(__n30)) {
          __e50 = __c2;
        } else {
          var __e51;
          if (__i42 === 0) {
            __e51 = "_" + __n30;
          } else {
            __e51 = __n30;
          }          __e50 = __e51;
        }        __e49 = __e50;
      }      var __c12 = __e49;
      __id121 = __id121 + __c12;
      __i42 = __i42 + 1;
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
    var __x251 = id(x);
    if (__names3[__x251]) {
      var __i43 = __names3[__x251];
      __names3[__x251] = __names3[__x251] + 1;
      return unique(__x251 + __i43);
    } else {
      __names3[__x251] = 1;
      return "__" + __x251;
    }  };
  _G.unique = unique;
  key = function (k) {
    if (string63(k) && valid_id63(k)) {
      return k;
    } else {
      return "[" + compile(k) + "]";
    }  };
  _G.key = key;
  mapo = function (f, t) {
    var __o24 = [];
    var ____o25 = t;
    var __k33 = undefined;
    for (__k33 in ____o25) {
      var __v25 = ____o25[__k33];
      var __e52;
      if (numeric63(__k33)) {
        __e52 = parseInt(__k33);
      } else {
        __e52 = __k33;
      }      var __k34 = __e52;
      var __x252 = f(__v25);
      if (is63(__x252)) {
        add(__o24, literal(__k34));
        add(__o24, __x252);
      }
    }
    return __o24;
  };
  _G.mapo = mapo;
  var ____x254 = [];
  var ____x255 = [];
  ____x255.js = "!";
  ____x254.not = ____x255;
  var ____x256 = [];
  ____x256["*"] = true;
  ____x256["/"] = true;
  ____x256["%"] = true;
  var ____x257 = [];
  var ____x258 = [];
  ____x258.js = "+";
  ____x257.cat = ____x258;
  var ____x259 = [];
  ____x259["+"] = true;
  ____x259["-"] = true;
  var ____x260 = [];
  ____x260["<"] = true;
  ____x260[">"] = true;
  ____x260["<="] = true;
  ____x260[">="] = true;
  var ____x261 = [];
  var ____x262 = [];
  ____x262.js = "===";
  ____x261["="] = ____x262;
  var ____x263 = [];
  var ____x264 = [];
  ____x264.js = "&&";
  ____x263.and = ____x264;
  var ____x265 = [];
  var ____x266 = [];
  ____x266.js = "||";
  ____x265.or = ____x266;
  var infix = [____x254, ____x256, ____x257, ____x259, ____x260, ____x261, ____x263, ____x265];
  var unary63 = function (form) {
    return two63(form) && in63(hd(form), ["not", "-"]);
  };
  var index = function (k) {
    return k;
  };
  var precedence = function (form) {
    if (!( atom63(form) || unary63(form))) {
      var ____o26 = infix;
      var __k35 = undefined;
      for (__k35 in ____o26) {
        var __v26 = ____o26[__k35];
        var __e53;
        if (numeric63(__k35)) {
          __e53 = parseInt(__k35);
        } else {
          __e53 = __k35;
        }        var __k36 = __e53;
        if (__v26[hd(form)]) {
          return index(__k36);
        }
      }
    }
    return 0;
  };
  var getop = function (op) {
    return find(function (level) {
      var __x268 = level[op];
      if (__x268 === true) {
        return op;
      } else {
        if (is63(__x268)) {
          return __x268.js;
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
    var ____x269 = args;
    var ____i46 = 0;
    while (____i46 < _35(____x269)) {
      var __x270 = ____x269[____i46];
      __s3 = __s3 + __c3 + compile(__x270);
      __c3 = ", ";
      ____i46 = ____i46 + 1;
    }
    if (args.rest) {
      __s3 = __s3 + __c3 + "..." + compile(args.rest);
    }
    return __s3 + ")";
  };
  var escape_newlines = function (s) {
    var __s12 = "";
    var __i47 = 0;
    while (__i47 < _35(s)) {
      var __c4 = char(s, __i47);
      var __e54;
      if (__c4 === "\n") {
        __e54 = "\\n";
      } else {
        var __e55;
        if (__c4 === "\r") {
          __e55 = "\\r";
        } else {
          __e55 = __c4;
        }        __e54 = __e55;
      }      __s12 = __s12 + __e54;
      __i47 = __i47 + 1;
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
                      throw new (Error)("Cannot compile atom: " + str(x));
                    }                  }                }              }            }          }        }      }    }  };
  var terminator = function (stmt63) {
    if (! stmt63) {
      return "";
    } else {
      return ";\n";
    }  };
  var compile_special = function (form, stmt63) {
    var ____id48 = form;
    var __x271 = ____id48[0];
    var __args121 = cut(____id48, 1);
    var ____id49 = getenv(__x271);
    var __special = ____id49.special;
    var __stmt = ____id49.stmt;
    var __self_tr63 = ____id49.tr;
    var __tr = terminator(stmt63 && ! __self_tr63);
    return apply(__special, __args121) + __tr;
  };
  var parenthesize_call63 = function (x) {
    return ! atom63(x) && hd(x) === "%function" || precedence(x) > 0;
  };
  compile_call = function (f, args, parens63) {
    var __f11 = compile(f);
    var __args13 = compile_args(stash42(args));
    if (parens63 || parenthesize_call63(f)) {
      return "(" + __f11 + ")" + __args13;
    } else {
      return __f11 + __args13;
    }  };
  _G.compile_call = compile_call;
  var op_delims = function (parent, child, ...__r178) {
    var ____r178 = unstash(__r178);
    var __parent = destash33(parent, ____r178);
    var __child = destash33(child, ____r178);
    var ____id50 = ____r178;
    var __right = ____id50.right;
    var __e56;
    if (__right) {
      __e56 = _6261;
    } else {
      __e56 = _62;
    }    if (__e56(precedence(__child), precedence(__parent))) {
      return ["(", ")"];
    } else {
      return ["", ""];
    }  };
  var compile_infix = function (form) {
    var ____id51 = form;
    var __op = ____id51[0];
    var ____id52 = cut(____id51, 1);
    var __a5 = ____id52[0];
    var __b4 = ____id52[1];
    var ____id53 = op_delims(form, __a5);
    var __ao = ____id53[0];
    var __ac = ____id53[1];
    var ____id54 = op_delims(form, __b4, {["_stash"]: true, ["right"]: true});
    var __bo = ____id54[0];
    var __bc = ____id54[1];
    var __a6 = compile(__a5);
    var __b5 = compile(__b4);
    var __op1 = getop(__op);
    if (unary63(form)) {
      return __op1 + __ao + " " + __a6 + __ac;
    } else {
      return __ao + __a6 + __ac + " " + __op1 + " " + __bo + __b5 + __bc;
    }  };
  compile_function = function (args, body, ...__r180) {
    var ____r180 = unstash(__r180);
    var __args131 = destash33(args, ____r180);
    var __body30 = destash33(body, ____r180);
    var ____id55 = ____r180;
    var __name13 = ____id55.name;
    var __prefix1 = ____id55.prefix;
    var __tr1 = ____id55.tr;
    var __id56 = either(__name13, "");
    var __args14 = compile_args(__args131);
    indent_level = indent_level + 1;
    var ____x274 = compile(__body30, {["_stash"]: true, ["stmt"]: true});
    indent_level = indent_level - 1;
    var __body31 = ____x274;
    var __ind = indentation();
    var __e57;
    if (__prefix1) {
      __e57 = __prefix1 + " ";
    } else {
      __e57 = "";
    }    var __p1 = __e57;
    var __tr2 = either(__tr1, "");
    return __p1 + __id56 + __args14 + " {\n" + __body31 + __ind + "}" + __tr2;
  };
  _G.compile_function = compile_function;
  var can_return63 = function (form) {
    return is63(form) && (atom63(form) || !( hd(form) === "return") && ! statement63(hd(form)));
  };
  compile = function (form, ...__r182) {
    var ____r182 = unstash(__r182);
    var __form = destash33(form, ____r182);
    var ____id57 = ____r182;
    var __stmt1 = ____id57.stmt;
    if (nil63(__form)) {
      return "";
    } else {
      if (special_form63(__form)) {
        return compile_special(__form, __stmt1);
      } else {
        var __tr3 = terminator(__stmt1);
        var __e58;
        if (__stmt1) {
          __e58 = indentation();
        } else {
          __e58 = "";
        }        var __ind1 = __e58;
        var __e59;
        if (atom63(__form)) {
          __e59 = compile_atom(__form);
        } else {
          var __e60;
          if (infix63(hd(__form))) {
            __e60 = compile_infix(__form);
          } else {
            __e60 = compile_call(hd(__form), tl(__form));
          }          __e59 = __e60;
        }        var __form1 = __e59;
        return __ind1 + __form1 + __tr3;
      }    }  };
  _G.compile = compile;
  var lower_statement = function (form, tail63) {
    var __hoist = [];
    var __e28 = lower(form, __hoist, true, tail63);
    var __e61;
    if (some63(__hoist) && is63(__e28)) {
      __e61 = join(["do"], __hoist, [__e28]);
    } else {
      var __e62;
      if (is63(__e28)) {
        __e62 = __e28;
      } else {
        var __e63;
        if (_35(__hoist) > 1) {
          __e63 = join(["do"], __hoist);
        } else {
          __e63 = hd(__hoist);
        }        __e62 = __e63;
      }      __e61 = __e62;
    }    return either(__e61, ["do"]);
  };
  var lower_body = function (body, tail63) {
    return lower_statement(join(["do"], body), tail63);
  };
  var literal63 = function (form) {
    return atom63(form) || hd(form) === "%array" || hd(form) === "%object" || hd(form) === "%table";
  };
  var standalone63 = function (form) {
    return ! atom63(form) && ! infix63(hd(form)) && ! literal63(form) && !( "get" === hd(form)) && !( "%statement" === hd(form)) || id_literal63(form);
  };
  var lower_do = function (args, hoist, stmt63, tail63) {
    var ____x280 = almost(args);
    var ____i48 = 0;
    while (____i48 < _35(____x280)) {
      var __x281 = ____x280[____i48];
      var ____y5 = lower(__x281, hoist, stmt63);
      if (yes(____y5)) {
        var __e29 = ____y5;
        if (standalone63(__e29)) {
          add(hoist, __e29);
        }
      }
      ____i48 = ____i48 + 1;
    }
    var __e30 = lower(last(args), hoist, stmt63, tail63);
    if (tail63 && can_return63(__e30)) {
      return ["return", __e30];
    } else {
      return __e30;
    }  };
  var lower_set = function (args, hoist, stmt63, tail63) {
    var ____id58 = args;
    var __lh2 = ____id58[0];
    var __rh2 = ____id58[1];
    add(hoist, ["%set", lower(__lh2, hoist), lower(__rh2, hoist)]);
    if (!( stmt63 && ! tail63)) {
      return __lh2;
    }
  };
  var lower_if = function (args, hoist, stmt63, tail63) {
    var ____id59 = args;
    var __cond2 = ____id59[0];
    var __then = ____id59[1];
    var ___else = ____id59[2];
    if (stmt63) {
      var __e65;
      if (is63(___else)) {
        __e65 = [lower_body([___else], tail63)];
      }
      return add(hoist, join(["%if", lower(__cond2, hoist), lower_body([__then], tail63)], __e65));
    } else {
      var __e31 = unique("e");
      add(hoist, ["%local", __e31]);
      var __e64;
      if (is63(___else)) {
        __e64 = [lower(["%set", __e31, ___else])];
      }
      add(hoist, join(["%if", lower(__cond2, hoist), lower(["%set", __e31, __then])], __e64));
      return __e31;
    }  };
  var lower_short = function (x, args, hoist) {
    var ____id60 = args;
    var __a7 = ____id60[0];
    var __b6 = ____id60[1];
    var __hoist1 = [];
    var __b11 = lower(__b6, __hoist1);
    if (some63(__hoist1)) {
      var __id61 = unique("id");
      var __e66;
      if (x === "and") {
        __e66 = ["%if", __id61, __b6, __id61];
      } else {
        __e66 = ["%if", __id61, __id61, __b6];
      }      return lower(["do", ["%local", __id61, __a7], __e66], hoist);
    } else {
      return [x, lower(__a7, hoist), __b11];
    }  };
  var lower_try = function (args, hoist, tail63) {
    return add(hoist, ["%try", lower_body(args, tail63)]);
  };
  var lower_while = function (args, hoist) {
    var ____id62 = args;
    var __c5 = ____id62[0];
    var __body32 = cut(____id62, 1);
    var __pre = [];
    var __c6 = lower(__c5, __pre);
    var __e67;
    if (none63(__pre)) {
      __e67 = ["while", __c6, lower_body(__body32)];
    } else {
      __e67 = ["while", true, join(["do"], __pre, [["%if", ["not", __c6], ["break"]], lower_body(__body32)])];
    }    return add(hoist, __e67);
  };
  var lower_for = function (args, hoist) {
    var ____id63 = args;
    var __t4 = ____id63[0];
    var __k37 = ____id63[1];
    var __body33 = cut(____id63, 2);
    return add(hoist, ["%for", lower(__t4, hoist), __k37, lower_body(__body33)]);
  };
  lower_table = function (args, hoist, stmt63, tail63) {
    var __expr2 = join(["%table"], keys(args));
    var ____x308 = args;
    var ____i49 = 0;
    while (____i49 < _35(____x308)) {
      var __x309 = ____x308[____i49];
      if (atom63(__x309)) {
        add(__expr2, __x309);
      } else {
        if (_35(__x309) <= 2) {
          var ____id64 = __x309;
          var __name14 = ____id64[0];
          var __v27 = ____id64[1];
          add(__expr2, [lower(__name14, hoist), lower(__v27, hoist)]);
        } else {
          var ____id65 = __x309;
          var __prefix2 = ____id65[0];
          var __name15 = ____id65[1];
          var __args15 = ____id65[2];
          var __body34 = cut(____id65, 3);
          if (some63(__body34)) {
            add(__expr2, [__prefix2, lower(__name15, hoist), __args15, lower_body(__body34, true)]);
          } else {
            add(__expr2, [__prefix2, lower(__name15, hoist), lower(__args15, hoist)]);
          }        }      }      ____i49 = ____i49 + 1;
    }
    return __expr2;
  };
  _G.lower_table = lower_table;
  lower_class = function (__x313, hoist, stmt63, tail63) {
    var ____id66 = __x313;
    var __x314 = ____id66[0];
    var __body35 = cut(____id66, 1);
    var __body36 = tl(lower_table(__body35, hoist));
    var ____id67 = __x314;
    var __name16 = ____id67[0];
    var __parent1 = ____id67[1];
    var __parent11 = lower(__parent1, hoist);
    var __expr3 = join(["%class", [__name16, __parent11]], __body36);
    return __expr3;
  };
  _G.lower_class = lower_class;
  var lower_function = function (args) {
    var ____id68 = args;
    var __a8 = ____id68[0];
    var __body37 = cut(____id68, 1);
    return ["%function", __a8, lower_body(__body37, true)];
  };
  var lower_definition = function (kind, args, hoist) {
    var ____id69 = args;
    var __name17 = ____id69[0];
    var __args16 = ____id69[1];
    var __body38 = cut(____id69, 2);
    return add(hoist, [kind, __name17, __args16, lower_body(__body38, true)]);
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
      var ____id70 = form;
      var __x320 = ____id70[0];
      var __args17 = cut(____id70, 1);
      reduce(function (a, b) {
        add(__e32, [__x320, a, b]);
        return a;
      }, __args17);
      return join(["and"], reverse(__e32));
    } else {
      return form;
    }  };
  var lower_infix63 = function (form) {
    return infix63(hd(form)) && _35(form) > 3;
  };
  var lower_infix = function (form, hoist) {
    var __form3 = lower_pairwise(form);
    var ____id71 = __form3;
    var __x323 = ____id71[0];
    var __args18 = cut(____id71, 1);
    return lower(reduce(function (a, b) {
      return [__x323, b, a];
    }, reverse(__args18)), hoist);
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
            var ____id72 = form;
            var __x326 = ____id72[0];
            var __args19 = cut(____id72, 1);
            if (__x326 === "do") {
              return lower_do(__args19, hoist, stmt63, tail63);
            } else {
              if (__x326 === "%call") {
                return lower(__args19, hoist, stmt63, tail63);
              } else {
                if (__x326 === "%set") {
                  return lower_set(__args19, hoist, stmt63, tail63);
                } else {
                  if (__x326 === "%if") {
                    return lower_if(__args19, hoist, stmt63, tail63);
                  } else {
                    if (__x326 === "%try") {
                      return lower_try(__args19, hoist, tail63);
                    } else {
                      if (__x326 === "while") {
                        return lower_while(__args19, hoist);
                      } else {
                        if (__x326 === "%for") {
                          return lower_for(__args19, hoist);
                        } else {
                          if (__x326 === "%table") {
                            return lower_table(__args19, hoist, stmt63, tail63);
                          } else {
                            if (__x326 === "%class") {
                              return lower_class(__args19, hoist, stmt63, tail63);
                            } else {
                              if (__x326 === "%function") {
                                return lower_function(__args19);
                              } else {
                                if (__x326 === "%local-function" || __x326 === "%global-function") {
                                  return lower_definition(__x326, __args19, hoist);
                                } else {
                                  if (in63(__x326, ["and", "or"])) {
                                    return lower_short(__x326, __args19, hoist);
                                  } else {
                                    if (statement63(__x326)) {
                                      return lower_special(form, hoist);
                                    } else {
                                      return lower_call(form, hoist);
                                    }                                  }                                }                              }                            }                          }                        }                      }                    }                  }                }              }            }          }        }      }    }  };
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
    var __code = compile(expand(form));
    return run(__code);
  };
  _G._eval = _eval;
  immediate_call63 = function (x) {
    return obj63(x) && obj63(hd(x)) && hd(hd(x)) === "%function";
  };
  _G.immediate_call63 = immediate_call63;
  setenv("%call", {["_stash"]: true, ["special"]: function (f, ...__r213) {
    var ____r213 = unstash(__r213);
    var __f2 = destash33(f, ____r213);
    var ____id73 = ____r213;
    var __args20 = cut(____id73, 0);
    return compile_call(__f2, __args20);
  }});
  setenv("do", {["_stash"]: true, ["special"]: function (...forms) {
    var __forms1 = unstash(forms);
    var __s4 = "";
    var ____x328 = __forms1;
    var ____i50 = 0;
    while (____i50 < _35(____x328)) {
      var __x329 = ____x328[____i50];
      __s4 = __s4 + compile(__x329, {["_stash"]: true, ["stmt"]: true});
      if (! atom63(__x329)) {
        if (hd(__x329) === "return" || hd(__x329) === "break") {
          break;
        }
      }
      ____i50 = ____i50 + 1;
    }
    return __s4;
  }, ["stmt"]: true, ["tr"]: true});
  setenv("%if", {["_stash"]: true, ["special"]: function (cond, cons, alt) {
    var __cond3 = compile(cond);
    indent_level = indent_level + 1;
    var ____x330 = compile(cons, {["_stash"]: true, ["stmt"]: true});
    indent_level = indent_level - 1;
    var __cons = ____x330;
    var __e68;
    if (alt) {
      indent_level = indent_level + 1;
      var ____x331 = compile(alt, {["_stash"]: true, ["stmt"]: true});
      indent_level = indent_level - 1;
      __e68 = ____x331;
    }
    var __alt = __e68;
    var __ind2 = indentation();
    var __s5 = "";
    __s5 = __s5 + __ind2 + "if (" + __cond3 + ") {\n" + __cons + __ind2 + "}";
    if (__alt) {
      __s5 = __s5 + " else {\n" + __alt + __ind2 + "}";
      return __s5;
    } else {
      return __s5 + "\n";
    }  }, ["stmt"]: true, ["tr"]: true});
  setenv("while", {["_stash"]: true, ["special"]: function (cond, form) {
    var __cond4 = compile(cond);
    indent_level = indent_level + 1;
    var ____x332 = compile(form, {["_stash"]: true, ["stmt"]: true});
    indent_level = indent_level - 1;
    var __body39 = ____x332;
    var __ind3 = indentation();
    return __ind3 + "while (" + __cond4 + ") {\n" + __body39 + __ind3 + "}\n";
  }, ["stmt"]: true, ["tr"]: true});
  setenv("%for", {["_stash"]: true, ["special"]: function (t, k, form) {
    var __t5 = compile(t);
    var __ind4 = indentation();
    indent_level = indent_level + 1;
    var ____x333 = compile(form, {["_stash"]: true, ["stmt"]: true});
    indent_level = indent_level - 1;
    var __body40 = ____x333;
    return __ind4 + "for (" + k + " in " + __t5 + ") {\n" + __body40 + __ind4 + "}\n";
  }, ["stmt"]: true, ["tr"]: true});
  setenv("%try", {["_stash"]: true, ["special"]: function (form) {
    var __e34 = unique("e");
    var __ind5 = indentation();
    indent_level = indent_level + 1;
    var ____x334 = compile(form, {["_stash"]: true, ["stmt"]: true});
    indent_level = indent_level - 1;
    var __body41 = ____x334;
    var __hf = ["return", ["%array", false, __e34]];
    indent_level = indent_level + 1;
    var ____x337 = compile(__hf, {["_stash"]: true, ["stmt"]: true});
    indent_level = indent_level - 1;
    var __h = ____x337;
    return __ind5 + "try {\n" + __body41 + __ind5 + "}\n" + __ind5 + "catch (" + __e34 + ") {\n" + __h + __ind5 + "}\n";
  }, ["stmt"]: true, ["tr"]: true});
  setenv("%delete", {["_stash"]: true, ["special"]: function (place) {
    return indentation() + "delete " + compile(place);
  }, ["stmt"]: true});
  setenv("break", {["_stash"]: true, ["special"]: function () {
    return indentation() + "break";
  }, ["stmt"]: true});
  setenv("%function", {["_stash"]: true, ["special"]: function (args, body) {
    return compile_function(args, body, {["_stash"]: true, ["prefix"]: "function"});
  }});
  setenv("%global-function", {["_stash"]: true, ["special"]: function (name, args, body) {
    return compile(["%set", name, ["%function", args, body]], {["_stash"]: true, ["stmt"]: true});
  }, ["stmt"]: true, ["tr"]: true});
  setenv("%local-function", {["_stash"]: true, ["special"]: function (name, args, body) {
    return compile(["%local", name, ["%function", args, body]], {["_stash"]: true, ["stmt"]: true});
  }, ["stmt"]: true, ["tr"]: true});
  setenv("return", {["_stash"]: true, ["special"]: function (x) {
    var __e69;
    if (nil63(x)) {
      __e69 = "return";
    } else {
      __e69 = "return " + compile(x);
    }    var __x342 = __e69;
    return indentation() + __x342;
  }, ["stmt"]: true});
  setenv("new", {["_stash"]: true, ["special"]: function (__x343) {
    var ____id74 = __x343;
    var __name18 = ____id74[0];
    var __args21 = cut(____id74, 1);
    return "new " + compile_call(__name18, __args21, true);
  }});
  setenv("instanceof", {["_stash"]: true, ["special"]: function (a, b) {
    return "(" + compile(a) + " instanceof " + compile(b) + ")";
  }});
  setenv("typeof", {["_stash"]: true, ["special"]: function (x) {
    return "typeof(" + compile(x) + ")";
  }});
  setenv("error", {["_stash"]: true, ["special"]: function (x) {
    var __e35 = "throw " + compile(["new", ["Error", x]]);
    return indentation() + __e35;
  }, ["stmt"]: true});
  setenv("%local", {["_stash"]: true, ["special"]: function (name, value) {
    var __id75 = compile(name);
    var __value1 = compile(value);
    var __e70;
    if (is63(value)) {
      __e70 = " = " + __value1;
    } else {
      __e70 = "";
    }    var __rh3 = __e70;
    var __keyword = "var ";
    var __ind6 = indentation();
    return __ind6 + __keyword + __id75 + __rh3;
  }, ["stmt"]: true});
  setenv("%set", {["_stash"]: true, ["special"]: function (lh, rh) {
    var __lh3 = compile(lh);
    var __e71;
    if (nil63(rh)) {
      __e71 = "nil";
    } else {
      __e71 = rh;
    }    var __rh4 = compile(__e71);
    return indentation() + __lh3 + " = " + __rh4;
  }, ["stmt"]: true});
  setenv("get", {["_stash"]: true, ["special"]: function (t, k) {
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
  setenv("%array", {["_stash"]: true, ["special"]: function (...forms) {
    var __forms2 = unstash(forms);
    var __open = "[";
    var __close = "]";
    var __s6 = "";
    var __c7 = "";
    var ____o27 = __forms2;
    var __k38 = undefined;
    for (__k38 in ____o27) {
      var __v28 = ____o27[__k38];
      var __e72;
      if (numeric63(__k38)) {
        __e72 = parseInt(__k38);
      } else {
        __e72 = __k38;
      }      var __k39 = __e72;
      if (number63(__k39)) {
        __s6 = __s6 + __c7 + compile(__v28);
        __c7 = ", ";
      }
    }
    return __open + __s6 + __close;
  }});
  setenv("%object", {["_stash"]: true, ["special"]: function (...forms) {
    var __forms3 = unstash(forms);
    var __s7 = "{";
    var __c8 = "";
    var __sep = ": ";
    var ____x346 = pair(__forms3);
    var ____i52 = 0;
    while (____i52 < _35(____x346)) {
      var ____id76 = ____x346[____i52];
      var __k40 = ____id76[0];
      var __v29 = ____id76[1];
      __s7 = __s7 + __c8 + key(__k40) + __sep + compile(__v29);
      __c8 = ", ";
      ____i52 = ____i52 + 1;
    }
    return __s7 + "}";
  }});
  setenv("%table", {["_stash"]: true, ["special"]: function (...forms) {
    var __forms4 = unstash(forms);
    var __s8 = "{\n";
    var __c9 = "";
    var __sep1 = ": ";
    var __comma = either(__forms4.comma, ", ");
    indent_level = indent_level + 1;
    var __ind7 = indentation();
    var ____x348 = __forms4;
    var ____i53 = 0;
    while (____i53 < _35(____x348)) {
      var __x349 = ____x348[____i53];
      if (atom63(__x349)) {
        __s8 = __s8 + __c9 + __ind7 + key(__x349) + __sep1 + compile(__x349);
      } else {
        if (_35(__x349) <= 2) {
          var ____id77 = __x349;
          var __name19 = ____id77[0];
          var __v30 = ____id77[1];
          __s8 = __s8 + __c9 + __ind7 + key(__name19) + __sep1 + compile(__v30);
        } else {
          var ____id78 = __x349;
          var __prefix3 = ____id78[0];
          var __name20 = ____id78[1];
          var __args22 = ____id78[2];
          var __body42 = cut(____id78, 3);
          var __e73;
          if (__prefix3 === "define") {
            __e73 = "";
          } else {
            __e73 = __prefix3;
          }          var __prefix4 = __e73;
          var __e74;
          if (some63(__body42)) {
            __e74 = compile_function(__args22, join(["do"], __body42), {["_stash"]: true, ["name"]: key(__name20), ["prefix"]: __prefix4});
          } else {
            __e74 = key(__name20) + __sep1 + compile(__args22);
          }          var __h1 = __e74;
          __s8 = __s8 + __c9 + __ind7 + __h1;
        }      }      __c9 = inner(__comma) + "\n";
      ____i53 = ____i53 + 1;
    }
    var ____x347;
    indent_level = indent_level - 1;
    return __s8 + "\n" + indentation() + "}";
  }});
  setenv("%class", {["_stash"]: true, ["special"]: function (name, ...__r231) {
    var ____r231 = unstash(__r231);
    var __name21 = destash33(name, ____r231);
    var ____id79 = ____r231;
    var __body43 = cut(____id79, 0);
    var __e75;
    if (atom63(__name21)) {
      __e75 = [__name21];
    } else {
      __e75 = __name21;
    }    var ____id80 = __e75;
    var __name22 = ____id80[0];
    var __parent2 = ____id80[1];
    var __e76;
    if (__name22) {
      __e76 = [__name22, "\" \""];
    } else {
      __e76 = [];
    }    var __name23 = __e76;
    var __e77;
    if (__parent2) {
      __e77 = ["\"extends \"", __parent2, "\" \""];
    } else {
      __e77 = [];
    }    var __ext = __e77;
    var ____x358 = ["%table"];
    ____x358.comma = "\"\"";
    return compile(join(["%literal", "\"class \""], __name23, __ext, [join(____x358, __body43)]));
  }});
  setenv("%literal", {["_stash"]: true, ["special"]: function (...args) {
    var __args23 = unstash(args);
    var __s9 = "";
    var ____x359 = __args23;
    var ____i54 = 0;
    while (____i54 < _35(____x359)) {
      var __x360 = ____x359[____i54];
      if (string_literal63(__x360)) {
        __s9 = __s9 + _eval(__x360);
      } else {
        __s9 = __s9 + compile(__x360);
      }      ____i54 = ____i54 + 1;
    }
    return __s9;
  }});
  setenv("%statement", {["_stash"]: true, ["special"]: function (...args) {
    var __args24 = unstash(args);
    var __s10 = indentation();
    var ____x361 = __args24;
    var ____i55 = 0;
    while (____i55 < _35(____x361)) {
      var __x362 = ____x361[____i55];
      if (string_literal63(__x362)) {
        __s10 = __s10 + _eval(__x362);
      } else {
        __s10 = __s10 + compile(__x362);
      }      ____i55 = ____i55 + 1;
    }
    __s10 = __s10 + "\n";
    return __s10;
  }, ["stmt"]: true, ["tr"]: true});
  setenv("%indentation", {["_stash"]: true, ["special"]: function () {
    return indentation();
  }});
  setenv("%spread", {["_stash"]: true, ["special"]: function (x) {
    return "..." + compile(x);
  }});
  __exports.context = context;
  __exports.run = run;
  __exports["eval"] = _eval;
  __exports.expand = expand;
  __exports.compile = compile;
  _G.compiler = __exports;
  var __exports1 = {};
  var delimiters = {["("]: true, [")"]: true, [";"]: true, ["\r"]: true, ["\n"]: true};
  var whitespace = {[" "]: true, ["\t"]: true, ["\r"]: true, ["\n"]: true};
  var stream = function (str, more) {
    return {["pos"]: 0, ["string"]: str, ["len"]: _35(str), ["more"]: more};
  };
  var peek_char = function (s) {
    var ____id81 = s;
    var __pos = ____id81.pos;
    var __len = ____id81.len;
    var __string = ____id81.string;
    if (__pos < __len) {
      return char(__string, __pos);
    }
  };
  var read_char = function (s) {
    var __c10 = peek_char(s);
    if (__c10) {
      s.pos = s.pos + 1;
      return __c10;
    }
  };
  var skip_non_code = function (s) {
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
          }        }      }    }
  };
  var read_table = {};
  var eof = {};
  var read = function (s) {
    skip_non_code(s);
    var __c121 = peek_char(s);
    if (is63(__c121)) {
      return (read_table[__c121] || read_table[""])(s);
    } else {
      return eof;
    }  };
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
    var __x363 = read(stream(str, more));
    if (!( __x363 === eof)) {
      return __x363;
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
    var ____id82 = s;
    var __more = ____id82.more;
    var __pos1 = ____id82.pos;
    var __id83 = __more;
    var __e78;
    if (__id83) {
      __e78 = __id83;
    } else {
      throw new (Error)("Expected " + c + " at " + __pos1);
      __e78 = undefined;
    }    return __e78;
  };
  var wrap = function (s, x) {
    var __y6 = read(s);
    if (__y6 === s.more) {
      return __y6;
    } else {
      return [x, __y6];
    }  };
  var hex_prefix63 = function (str) {
    var __e79;
    if (code(str, 0) === 45) {
      __e79 = 1;
    } else {
      __e79 = 0;
    }    var __i56 = __e79;
    var __id84 = code(str, __i56) === 48;
    var __e80;
    if (__id84) {
      __i56 = __i56 + 1;
      var __n34 = code(str, __i56);
      __e80 = __n34 === 120 || __n34 === 88;
    } else {
      __e80 = __id84;
    }    return __e80;
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
      var __c13 = peek_char(s);
      if (__c13 && (! whitespace[__c13] && ! delimiters[__c13])) {
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
        var __n35 = maybe_number(__str);
        if (real63(__n35)) {
          return __n35;
        } else {
          return __str;
        }      }    }  };
  read_table["("] = function (s) {
    read_char(s);
    var __r250 = undefined;
    var __l9 = [];
    while (nil63(__r250)) {
      skip_non_code(s);
      var __c14 = peek_char(s);
      if (__c14 === ")") {
        read_char(s);
        __r250 = __l9;
      } else {
        if (nil63(__c14)) {
          __r250 = expected(s, ")");
        } else {
          var __x365 = read(s);
          if (key63(__x365)) {
            var __k41 = clip(__x365, 0, edge(__x365));
            var __v31 = read(s);
            __l9[__k41] = __v31;
          } else {
            if (flag63(__x365)) {
              __l9[clip(__x365, 1)] = true;
            } else {
              add(__l9, __x365);
            }          }        }      }    }
    return __r250;
  };
  read_table[")"] = function (s) {
    throw new (Error)("Unexpected ) at " + s.pos);
  };
  read_table["\""] = function (s) {
    read_char(s);
    var __r253 = undefined;
    var __str1 = "\"";
    while (nil63(__r253)) {
      var __c15 = peek_char(s);
      if (__c15 === "\"") {
        __r253 = __str1 + read_char(s);
      } else {
        if (nil63(__c15)) {
          __r253 = expected(s, "\"");
        } else {
          if (__c15 === "\\") {
            __str1 = __str1 + read_char(s);
          }
          __str1 = __str1 + read_char(s);
        }      }    }
    return __r253;
  };
  read_table["|"] = function (s) {
    read_char(s);
    var __r255 = undefined;
    var __str2 = "|";
    while (nil63(__r255)) {
      var __c16 = peek_char(s);
      if (__c16 === "|") {
        __r255 = __str2 + read_char(s);
      } else {
        if (nil63(__c16)) {
          __r255 = expected(s, "|");
        } else {
          __str2 = __str2 + read_char(s);
        }      }    }
    return __r255;
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
    var ____id85 = (function () {
      try {
        return [true, compiler["eval"](form)];
      }
      catch (__e82) {
        return [false, __e82];
      }
    })();
    var __ok1 = ____id85[0];
    var __v32 = ____id85[1];
    if (! __ok1) {
      return print(__v32.stack);
    } else {
      if (is63(__v32)) {
        return print(str(__v32));
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
      var __form5 = reader["read-string"](__buf, __more1);
      if (!( __form5 === __more1)) {
        eval_print(__form5);
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
    var __s111 = reader.stream(system["read-file"](path));
    var __body44 = reader["read-all"](__s111);
    return compiler.expand(join(["do"], __body44));
  };
  _G.expand_file = expand_file;
  compile_file = function (path) {
    var __body45 = expand_file(path);
    var __form6 = compiler.expand(join(["do"], __body45));
    return compiler.compile(__form6, {["_stash"]: true, ["stmt"]: true});
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
        var __expr4 = undefined;
        var __argv = system.argv;
        var __i57 = 0;
        while (__i57 < _35(__argv)) {
          var __a9 = __argv[__i57];
          if (__a9 === "-c" || __a9 === "-o" || __a9 === "-t" || __a9 === "-e") {
            if (__i57 === edge(__argv)) {
              print("missing argument for " + __a9);
            } else {
              __i57 = __i57 + 1;
              var __val1 = __argv[__i57];
              if (__a9 === "-c") {
                __input = __val1;
              } else {
                if (__a9 === "-o") {
                  __output = __val1;
                } else {
                  if (__a9 === "-e") {
                    __expr4 = __val1;
                  }
                }              }            }          } else {
            if (!( "-" === char(__a9, 0))) {
              add(__pre1, __a9);
            }
          }          __i57 = __i57 + 1;
        }
        var ____x369 = __pre1;
        var ____i58 = 0;
        while (____i58 < _35(____x369)) {
          var __file = ____x369[____i58];
          run_file(__file);
          ____i58 = ____i58 + 1;
        }
        if (nil63(__input)) {
          if (__expr4) {
            return rep(__expr4);
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
