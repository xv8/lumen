setenv("quote", {"_stash": true, "macro": function (form) {
  return quoted(form);
}});
setenv("quasiquote", {"_stash": true, "macro": function (form) {
  return quasiexpand(form, 1);
}});
setenv("set", {"_stash": true, "macro": function () {
  var __args1 = unstash(Array.prototype.slice.call(arguments, 0));
  return join(["do"], map(function (__x4) {
    var ____id1 = __x4;
    var __lh1 = ____id1[0];
    var __rh1 = ____id1[1];
    return ["%set", __lh1, __rh1];
  }, pair(__args1)));
}});
setenv("at", {"_stash": true, "macro": function (l, i) {
  return ["get", l, i];
}});
setenv("wipe", {"_stash": true, "macro": function (place) {
  return ["%delete", place];
}});
setenv("list", {"_stash": true, "macro": function () {
  var __body1 = unstash(Array.prototype.slice.call(arguments, 0));
  var __x18 = unique("x");
  var __l1 = [];
  var __forms1 = [];
  var ____o1 = __body1;
  var __k2 = undefined;
  for (__k2 in ____o1) {
    var __v1 = ____o1[__k2];
    var __e6;
    if (numeric63(__k2)) {
      __e6 = parseInt(__k2);
    } else {
      __e6 = __k2;
    }    var __k3 = __e6;
    if (number63(__k3)) {
      __l1[__k3] = __v1;
    } else {
      add(__forms1, ["set", ["get", __x18, ["quote", __k3]], __v1]);
    }  }
  if (some63(__forms1)) {
    return join(["let", __x18, join(["%array"], __l1)], __forms1, [__x18]);
  } else {
    return join(["%array"], __l1);
  }}});
setenv("if", {"_stash": true, "macro": function () {
  var __branches1 = unstash(Array.prototype.slice.call(arguments, 0));
  return hd(expand_if(__branches1));
}});
setenv("case", {"_stash": true, "macro": function (expr) {
  var ____r13 = unstash(Array.prototype.slice.call(arguments, 1));
  var __expr1 = destash33(expr, ____r13);
  var ____id4 = ____r13;
  var __clauses1 = cut(____id4, 0);
  var __x37 = unique("x");
  var __eq1 = function (_) {
    return ["=", ["quote", _], __x37];
  };
  var __cl1 = function (__x40) {
    var ____id5 = __x40;
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
        }      }    }  };
  return ["let", __x37, __expr1, join(["if"], apply(join, map(__cl1, pair(__clauses1))))];
}});
setenv("when", {"_stash": true, "macro": function (cond) {
  var ____r17 = unstash(Array.prototype.slice.call(arguments, 1));
  var __cond1 = destash33(cond, ____r17);
  var ____id7 = ____r17;
  var __body3 = cut(____id7, 0);
  return ["if", __cond1, join(["do"], __body3)];
}});
setenv("unless", {"_stash": true, "macro": function (cond) {
  var ____r19 = unstash(Array.prototype.slice.call(arguments, 1));
  var __cond3 = destash33(cond, ____r19);
  var ____id9 = ____r19;
  var __body5 = cut(____id9, 0);
  return ["if", ["not", __cond3], join(["do"], __body5)];
}});
setenv("obj", {"_stash": true, "macro": function () {
  var __body7 = unstash(Array.prototype.slice.call(arguments, 0));
  return join(["%object"], mapo(function (x) {
    return x;
  }, __body7));
}});
setenv("let", {"_stash": true, "macro": function (bs) {
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
    }  }}});
setenv("with", {"_stash": true, "macro": function (x, v) {
  var ____r25 = unstash(Array.prototype.slice.call(arguments, 2));
  var __x80 = destash33(x, ____r25);
  var __v3 = destash33(v, ____r25);
  var ____id19 = ____r25;
  var __body11 = cut(____id19, 0);
  return join(["let", [__x80, __v3]], __body11, [__x80]);
}});
setenv("let-when", {"_stash": true, "macro": function (x, v) {
  var ____r27 = unstash(Array.prototype.slice.call(arguments, 2));
  var __x90 = destash33(x, ____r27);
  var __v5 = destash33(v, ____r27);
  var ____id21 = ____r27;
  var __body13 = cut(____id21, 0);
  var __y1 = unique("y");
  return ["let", __y1, __v5, ["when", ["yes", __y1], join(["let", [__x90, __y1]], __body13)]];
}});
setenv("define-macro", {"_stash": true, "macro": function (name, args) {
  var ____r29 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name1 = destash33(name, ____r29);
  var __args3 = destash33(args, ____r29);
  var ____id23 = ____r29;
  var __body15 = cut(____id23, 0);
  var ____x99 = ["setenv", ["quote", __name1]];
  ____x99.macro = join(["fn", __args3], __body15);
  var __form1 = ____x99;
  _eval(__form1);
  return __form1;
}});
setenv("define-special", {"_stash": true, "macro": function (name, args) {
  var ____r31 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name3 = destash33(name, ____r31);
  var __args5 = destash33(args, ____r31);
  var ____id25 = ____r31;
  var __body17 = cut(____id25, 0);
  var ____x105 = ["setenv", ["quote", __name3]];
  ____x105.special = join(["fn", __args5], __body17);
  var __form3 = join(____x105, keys(__body17));
  _eval(__form3);
  return __form3;
}});
setenv("define-symbol", {"_stash": true, "macro": function (name, expansion) {
  setenv(name, {"_stash": true, "symbol": expansion});
  var ____x111 = ["setenv", ["quote", name]];
  ____x111.symbol = ["quote", expansion];
  return ____x111;
}});
setenv("define-reader", {"_stash": true, "macro": function (__x119) {
  var ____id28 = __x119;
  var __char1 = ____id28[0];
  var __s1 = ____id28[1];
  var ____r35 = unstash(Array.prototype.slice.call(arguments, 1));
  var ____x119 = destash33(__x119, ____r35);
  var ____id29 = ____r35;
  var __body19 = cut(____id29, 0);
  return ["set", ["get", "read-table", __char1], join(["fn", [__s1]], __body19)];
}});
setenv("define", {"_stash": true, "macro": function (name, x) {
  var ____r37 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name5 = destash33(name, ____r37);
  var __x127 = destash33(x, ____r37);
  var ____id31 = ____r37;
  var __body21 = cut(____id31, 0);
  setenv(__name5, {"_stash": true, "variable": true});
  if (some63(__body21)) {
    return join(["%local-function", __name5], bind42(__x127, __body21));
  } else {
    return ["%local", __name5, __x127];
  }}});
setenv("define-global", {"_stash": true, "macro": function (name, x) {
  var ____r39 = unstash(Array.prototype.slice.call(arguments, 2));
  var __name7 = destash33(name, ____r39);
  var __x141 = destash33(x, ____r39);
  var ____id33 = ____r39;
  var __body23 = cut(____id33, 0);
  setenv(__name7, {"_stash": true, "toplevel": true, "variable": true});
  if (some63(__body23)) {
    return ["do", join(["%global-function", __name7], bind42(__x141, __body23)), ["%set", ["get", "_G", ["quote", compile(__name7)]], __name7]];
  } else {
    return ["do", ["%set", __name7, __x141], ["%set", ["get", "_G", ["quote", compile(__name7)]], __name7]];
  }}});
setenv("with-frame", {"_stash": true, "macro": function () {
  var __body25 = unstash(Array.prototype.slice.call(arguments, 0));
  var __x159 = unique("x");
  return ["do", ["add", "environment", ["obj"]], ["with", __x159, join(["do"], __body25), ["drop", "environment"]]];
}});
setenv("with-bindings", {"_stash": true, "macro": function (__x171) {
  var ____id36 = __x171;
  var __names1 = ____id36[0];
  var ____r41 = unstash(Array.prototype.slice.call(arguments, 1));
  var ____x171 = destash33(__x171, ____r41);
  var ____id37 = ____r41;
  var __body27 = cut(____id37, 0);
  var __x172 = unique("x");
  var ____x175 = ["setenv", __x172];
  ____x175.variable = true;
  return join(["with-frame", ["each", __x172, __names1, ____x175]], __body27);
}});
setenv("let-macro", {"_stash": true, "macro": function (definitions) {
  var ____r44 = unstash(Array.prototype.slice.call(arguments, 1));
  var __definitions1 = destash33(definitions, ____r44);
  var ____id39 = ____r44;
  var __body29 = cut(____id39, 0);
  add(environment, {});
  map(function (m) {
    return macroexpand(join(["define-macro"], m));
  }, __definitions1);
  var ____x179 = join(["do"], macroexpand(__body29));
  drop(environment);
  return ____x179;
}});
setenv("let-symbol", {"_stash": true, "macro": function (expansions) {
  var ____r48 = unstash(Array.prototype.slice.call(arguments, 1));
  var __expansions1 = destash33(expansions, ____r48);
  var ____id42 = ____r48;
  var __body31 = cut(____id42, 0);
  add(environment, {});
  map(function (__x187) {
    var ____id43 = __x187;
    var __name9 = ____id43[0];
    var __exp1 = ____id43[1];
    return macroexpand(["define-symbol", __name9, __exp1]);
  }, pair(__expansions1));
  var ____x186 = join(["do"], macroexpand(__body31));
  drop(environment);
  return ____x186;
}});
setenv("let-unique", {"_stash": true, "macro": function (names) {
  var ____r52 = unstash(Array.prototype.slice.call(arguments, 1));
  var __names3 = destash33(names, ____r52);
  var ____id45 = ____r52;
  var __body33 = cut(____id45, 0);
  var __bs3 = map(function (n) {
    return [n, ["unique", ["quote", n]]];
  }, __names3);
  return join(["let", apply(join, __bs3)], __body33);
}});
setenv("fn", {"_stash": true, "macro": function (args) {
  var ____r55 = unstash(Array.prototype.slice.call(arguments, 1));
  var __args7 = destash33(args, ____r55);
  var ____id47 = ____r55;
  var __body35 = cut(____id47, 0);
  return join(["%function"], bind42(__args7, __body35));
}});
setenv("apply", {"_stash": true, "macro": function (f) {
  var ____r57 = unstash(Array.prototype.slice.call(arguments, 1));
  var __f1 = destash33(f, ____r57);
  var ____id49 = ____r57;
  var __args9 = cut(____id49, 0);
  if (_35(__args9) > 1) {
    return ["%call", "apply", __f1, ["join", join(["list"], almost(__args9)), last(__args9)]];
  } else {
    return join(["%call", "apply", __f1], __args9);
  }}});
setenv("guard", {"_stash": true, "macro": function (expr) {
  return [["fn", join(), ["%try", ["list", true, expr]]]];
}});
setenv("each", {"_stash": true, "macro": function (x, t) {
  var ____r61 = unstash(Array.prototype.slice.call(arguments, 2));
  var __x229 = destash33(x, ____r61);
  var __t1 = destash33(t, ____r61);
  var ____id52 = ____r61;
  var __body37 = cut(____id52, 0);
  var __o3 = unique("o");
  var __n3 = unique("n");
  var __i3 = unique("i");
  var __e7;
  if (atom63(__x229)) {
    __e7 = [__i3, __x229];
  } else {
    var __e8;
    if (_35(__x229) > 1) {
      __e8 = __x229;
    } else {
      __e8 = [__i3, hd(__x229)];
    }    __e7 = __e8;
  }  var ____id53 = __e7;
  var __k5 = ____id53[0];
  var __v7 = ____id53[1];
  return ["let", [__o3, __t1, __k5, "nil"], ["%for", __o3, __k5, ["let", [__v7, ["get", __o3, __k5]], join(["let", __k5, ["if", ["numeric?", __k5], ["parseInt", __k5], __k5]], __body37)]]];
}});
setenv("for", {"_stash": true, "macro": function (i, to) {
  var ____r63 = unstash(Array.prototype.slice.call(arguments, 2));
  var __i5 = destash33(i, ____r63);
  var __to1 = destash33(to, ____r63);
  var ____id55 = ____r63;
  var __body39 = cut(____id55, 0);
  return ["let", __i5, 0, join(["while", ["<", __i5, __to1]], __body39, [["inc", __i5]])];
}});
setenv("step", {"_stash": true, "macro": function (v, t) {
  var ____r65 = unstash(Array.prototype.slice.call(arguments, 2));
  var __v9 = destash33(v, ____r65);
  var __t3 = destash33(t, ____r65);
  var ____id57 = ____r65;
  var __body41 = cut(____id57, 0);
  var __x260 = unique("x");
  var __i7 = unique("i");
  return ["let", [__x260, __t3], ["for", __i7, ["#", __x260], join(["let", [__v9, ["at", __x260, __i7]]], __body41)]];
}});
setenv("set-of", {"_stash": true, "macro": function () {
  var __xs1 = unstash(Array.prototype.slice.call(arguments, 0));
  var __l3 = [];
  var ____o5 = __xs1;
  var ____i9 = undefined;
  for (____i9 in ____o5) {
    var __x270 = ____o5[____i9];
    var __e9;
    if (numeric63(____i9)) {
      __e9 = parseInt(____i9);
    } else {
      __e9 = ____i9;
    }    var ____i91 = __e9;
    __l3[__x270] = true;
  }
  return join(["obj"], __l3);
}});
setenv("join!", {"_stash": true, "macro": function (a) {
  var ____r67 = unstash(Array.prototype.slice.call(arguments, 1));
  var __a3 = destash33(a, ____r67);
  var ____id59 = ____r67;
  var __bs5 = cut(____id59, 0);
  return ["set", __a3, join(["join", __a3], __bs5)];
}});
setenv("cat!", {"_stash": true, "macro": function (a) {
  var ____r69 = unstash(Array.prototype.slice.call(arguments, 1));
  var __a5 = destash33(a, ____r69);
  var ____id61 = ____r69;
  var __bs7 = cut(____id61, 0);
  return ["set", __a5, join(["cat", __a5], __bs7)];
}});
setenv("inc", {"_stash": true, "macro": function (n, by) {
  var __e10;
  if (nil63(by)) {
    __e10 = 1;
  } else {
    __e10 = by;
  }  return ["set", n, ["+", n, __e10]];
}});
setenv("dec", {"_stash": true, "macro": function (n, by) {
  var __e11;
  if (nil63(by)) {
    __e11 = 1;
  } else {
    __e11 = by;
  }  return ["set", n, ["-", n, __e11]];
}});
setenv("with-indent", {"_stash": true, "macro": function (form) {
  var __x293 = unique("x");
  return ["do", ["inc", "indent-level"], ["with", __x293, form, ["dec", "indent-level"]]];
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
