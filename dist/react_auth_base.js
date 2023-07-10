import Ki, { useCallback as Ot, useEffect as Ne, useMemo as _e, useDebugValue as Hn, useState as Vn, useRef as et, useLayoutEffect as As } from "react";
import { useSignal as tt, batch as Cs } from "@preact/signals-react";
import { nanoid as Ps, isPlainObject as st, createAction as bt, createAsyncThunk as zn, SHOULD_AUTOBATCH as Gt, createSlice as Ye, prepareAutoBatched as Nr, isAnyOf as Gi, isFulfilled as _t, isRejectedWithValue as fn, combineReducers as Ji, createSelector as At, isAllOf as Mr, isPending as Yi, isRejected as Xi, createNextState as hn, isAsyncThunkAction as Wn, configureStore as Ds } from "@reduxjs/toolkit";
import { shallowEqual as or, batch as Ns, useDispatch as Ms, useSelector as xs, useStore as Ls, Provider as Fs } from "react-redux";
var Jr = { exports: {} }, wt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qn;
function Us() {
  if (Qn)
    return wt;
  Qn = 1;
  var t = Ki, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, o, l) {
    var f, p = {}, m = null, d = null;
    l !== void 0 && (m = "" + l), o.key !== void 0 && (m = "" + o.key), o.ref !== void 0 && (d = o.ref);
    for (f in o)
      n.call(o, f) && !a.hasOwnProperty(f) && (p[f] = o[f]);
    if (u && u.defaultProps)
      for (f in o = u.defaultProps, o)
        p[f] === void 0 && (p[f] = o[f]);
    return { $$typeof: e, type: u, key: m, ref: d, props: p, _owner: i.current };
  }
  return wt.Fragment = r, wt.jsx = s, wt.jsxs = s, wt;
}
var St = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function js() {
  return Kn || (Kn = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Ki, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), E = Symbol.iterator, b = "@@iterator";
    function y(c) {
      if (c === null || typeof c != "object")
        return null;
      var P = E && c[E] || c[b];
      return typeof P == "function" ? P : null;
    }
    var O = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(c) {
      {
        for (var P = arguments.length, N = new Array(P > 1 ? P - 1 : 0), j = 1; j < P; j++)
          N[j - 1] = arguments[j];
        v("error", c, N);
      }
    }
    function v(c, P, N) {
      {
        var j = O.ReactDebugCurrentFrame, Y = j.getStackAddendum();
        Y !== "" && (P += "%s", N = N.concat([Y]));
        var Z = N.map(function(Q) {
          return String(Q);
        });
        Z.unshift("Warning: " + P), Function.prototype.apply.call(console[c], console, Z);
      }
    }
    var _ = !1, g = !1, h = !1, I = !1, w = !1, S;
    S = Symbol.for("react.module.reference");
    function T(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === n || c === a || w || c === i || c === l || c === f || I || c === d || _ || g || h || typeof c == "object" && c !== null && (c.$$typeof === m || c.$$typeof === p || c.$$typeof === s || c.$$typeof === u || c.$$typeof === o || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === S || c.getModuleId !== void 0));
    }
    function k(c, P, N) {
      var j = c.displayName;
      if (j)
        return j;
      var Y = P.displayName || P.name || "";
      return Y !== "" ? N + "(" + Y + ")" : N;
    }
    function A(c) {
      return c.displayName || "Context";
    }
    function C(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case l:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case u:
            var P = c;
            return A(P) + ".Consumer";
          case s:
            var N = c;
            return A(N._context) + ".Provider";
          case o:
            return k(c, c.render, "ForwardRef");
          case p:
            var j = c.displayName || null;
            return j !== null ? j : C(c.type) || "Memo";
          case m: {
            var Y = c, Z = Y._payload, Q = Y._init;
            try {
              return C(Q(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, M = 0, U, L, F, $, W, H, K;
    function B() {
    }
    B.__reactDisabledLog = !0;
    function G() {
      {
        if (M === 0) {
          U = console.log, L = console.info, F = console.warn, $ = console.error, W = console.group, H = console.groupCollapsed, K = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: B,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        M++;
      }
    }
    function V() {
      {
        if (M--, M === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, c, {
              value: U
            }),
            info: D({}, c, {
              value: L
            }),
            warn: D({}, c, {
              value: F
            }),
            error: D({}, c, {
              value: $
            }),
            group: D({}, c, {
              value: W
            }),
            groupCollapsed: D({}, c, {
              value: H
            }),
            groupEnd: D({}, c, {
              value: K
            })
          });
        }
        M < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = O.ReactCurrentDispatcher, te;
    function de(c, P, N) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (Y) {
            var j = Y.stack.trim().match(/\n( *(at )?)/);
            te = j && j[1] || "";
          }
        return `
` + te + c;
      }
    }
    var ge = !1, fe;
    {
      var me = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new me();
    }
    function X(c, P) {
      if (!c || ge)
        return "";
      {
        var N = fe.get(c);
        if (N !== void 0)
          return N;
      }
      var j;
      ge = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = J.current, J.current = null, G();
      try {
        if (P) {
          var Q = function() {
            throw Error();
          };
          if (Object.defineProperty(Q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Q, []);
            } catch (Pe) {
              j = Pe;
            }
            Reflect.construct(c, [], Q);
          } else {
            try {
              Q.call();
            } catch (Pe) {
              j = Pe;
            }
            c.call(Q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pe) {
            j = Pe;
          }
          c();
        }
      } catch (Pe) {
        if (Pe && j && typeof Pe.stack == "string") {
          for (var z = Pe.stack.split(`
`), le = j.stack.split(`
`), ae = z.length - 1, oe = le.length - 1; ae >= 1 && oe >= 0 && z[ae] !== le[oe]; )
            oe--;
          for (; ae >= 1 && oe >= 0; ae--, oe--)
            if (z[ae] !== le[oe]) {
              if (ae !== 1 || oe !== 1)
                do
                  if (ae--, oe--, oe < 0 || z[ae] !== le[oe]) {
                    var be = `
` + z[ae].replace(" at new ", " at ");
                    return c.displayName && be.includes("<anonymous>") && (be = be.replace("<anonymous>", c.displayName)), typeof c == "function" && fe.set(c, be), be;
                  }
                while (ae >= 1 && oe >= 0);
              break;
            }
        }
      } finally {
        ge = !1, J.current = Z, V(), Error.prepareStackTrace = Y;
      }
      var lt = c ? c.displayName || c.name : "", $n = lt ? de(lt) : "";
      return typeof c == "function" && fe.set(c, $n), $n;
    }
    function ce(c, P, N) {
      return X(c, !1);
    }
    function qe(c) {
      var P = c.prototype;
      return !!(P && P.isReactComponent);
    }
    function Ge(c, P, N) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return X(c, qe(c));
      if (typeof c == "string")
        return de(c);
      switch (c) {
        case l:
          return de("Suspense");
        case f:
          return de("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case o:
            return ce(c.render);
          case p:
            return Ge(c.type, P, N);
          case m: {
            var j = c, Y = j._payload, Z = j._init;
            try {
              return Ge(Z(Y), P, N);
            } catch {
            }
          }
        }
      return "";
    }
    var Be = Object.prototype.hasOwnProperty, Je = {}, ut = O.ReactDebugCurrentFrame;
    function $e(c) {
      if (c) {
        var P = c._owner, N = Ge(c.type, c._source, P ? P.type : null);
        ut.setExtraStackFrame(N);
      } else
        ut.setExtraStackFrame(null);
    }
    function Kt(c, P, N, j, Y) {
      {
        var Z = Function.call.bind(Be);
        for (var Q in c)
          if (Z(c, Q)) {
            var z = void 0;
            try {
              if (typeof c[Q] != "function") {
                var le = Error((j || "React class") + ": " + N + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw le.name = "Invariant Violation", le;
              }
              z = c[Q](P, Q, j, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ae) {
              z = ae;
            }
            z && !(z instanceof Error) && ($e(Y), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", N, Q, typeof z), $e(null)), z instanceof Error && !(z.message in Je) && (Je[z.message] = !0, $e(Y), R("Failed %s type: %s", N, z.message), $e(null));
          }
      }
    }
    var ye = Array.isArray;
    function he(c) {
      return ye(c);
    }
    function ds(c) {
      {
        var P = typeof Symbol == "function" && Symbol.toStringTag, N = P && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return N;
      }
    }
    function fs(c) {
      try {
        return Dn(c), !1;
      } catch {
        return !0;
      }
    }
    function Dn(c) {
      return "" + c;
    }
    function Nn(c) {
      if (fs(c))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ds(c)), Dn(c);
    }
    var Tt = O.ReactCurrentOwner, hs = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Mn, xn, Ar;
    Ar = {};
    function ps(c) {
      if (Be.call(c, "ref")) {
        var P = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function vs(c) {
      if (Be.call(c, "key")) {
        var P = Object.getOwnPropertyDescriptor(c, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function gs(c, P) {
      if (typeof c.ref == "string" && Tt.current && P && Tt.current.stateNode !== P) {
        var N = C(Tt.current.type);
        Ar[N] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(Tt.current.type), c.ref), Ar[N] = !0);
      }
    }
    function ms(c, P) {
      {
        var N = function() {
          Mn || (Mn = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        N.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: N,
          configurable: !0
        });
      }
    }
    function ys(c, P) {
      {
        var N = function() {
          xn || (xn = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        N.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: N,
          configurable: !0
        });
      }
    }
    var bs = function(c, P, N, j, Y, Z, Q) {
      var z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: c,
        key: P,
        ref: N,
        props: Q,
        // Record the component responsible for creating this element.
        _owner: Z
      };
      return z._store = {}, Object.defineProperty(z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    };
    function _s(c, P, N, j, Y) {
      {
        var Z, Q = {}, z = null, le = null;
        N !== void 0 && (Nn(N), z = "" + N), vs(P) && (Nn(P.key), z = "" + P.key), ps(P) && (le = P.ref, gs(P, Y));
        for (Z in P)
          Be.call(P, Z) && !hs.hasOwnProperty(Z) && (Q[Z] = P[Z]);
        if (c && c.defaultProps) {
          var ae = c.defaultProps;
          for (Z in ae)
            Q[Z] === void 0 && (Q[Z] = ae[Z]);
        }
        if (z || le) {
          var oe = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          z && ms(Q, oe), le && ys(Q, oe);
        }
        return bs(c, z, le, Y, j, Tt.current, Q);
      }
    }
    var Cr = O.ReactCurrentOwner, Ln = O.ReactDebugCurrentFrame;
    function ct(c) {
      if (c) {
        var P = c._owner, N = Ge(c.type, c._source, P ? P.type : null);
        Ln.setExtraStackFrame(N);
      } else
        Ln.setExtraStackFrame(null);
    }
    var Pr;
    Pr = !1;
    function Dr(c) {
      return typeof c == "object" && c !== null && c.$$typeof === e;
    }
    function Fn() {
      {
        if (Cr.current) {
          var c = C(Cr.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Is(c) {
      {
        if (c !== void 0) {
          var P = c.fileName.replace(/^.*[\\\/]/, ""), N = c.lineNumber;
          return `

Check your code at ` + P + ":" + N + ".";
        }
        return "";
      }
    }
    var Un = {};
    function Es(c) {
      {
        var P = Fn();
        if (!P) {
          var N = typeof c == "string" ? c : c.displayName || c.name;
          N && (P = `

Check the top-level render call using <` + N + ">.");
        }
        return P;
      }
    }
    function jn(c, P) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var N = Es(P);
        if (Un[N])
          return;
        Un[N] = !0;
        var j = "";
        c && c._owner && c._owner !== Cr.current && (j = " It was passed a child from " + C(c._owner.type) + "."), ct(c), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, j), ct(null);
      }
    }
    function qn(c, P) {
      {
        if (typeof c != "object")
          return;
        if (he(c))
          for (var N = 0; N < c.length; N++) {
            var j = c[N];
            Dr(j) && jn(j, P);
          }
        else if (Dr(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var Y = y(c);
          if (typeof Y == "function" && Y !== c.entries)
            for (var Z = Y.call(c), Q; !(Q = Z.next()).done; )
              Dr(Q.value) && jn(Q.value, P);
        }
      }
    }
    function Ts(c) {
      {
        var P = c.type;
        if (P == null || typeof P == "string")
          return;
        var N;
        if (typeof P == "function")
          N = P.propTypes;
        else if (typeof P == "object" && (P.$$typeof === o || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        P.$$typeof === p))
          N = P.propTypes;
        else
          return;
        if (N) {
          var j = C(P);
          Kt(N, c.props, "prop", j, c);
        } else if (P.PropTypes !== void 0 && !Pr) {
          Pr = !0;
          var Y = C(P);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ws(c) {
      {
        for (var P = Object.keys(c.props), N = 0; N < P.length; N++) {
          var j = P[N];
          if (j !== "children" && j !== "key") {
            ct(c), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), ct(null);
            break;
          }
        }
        c.ref !== null && (ct(c), R("Invalid attribute `ref` supplied to `React.Fragment`."), ct(null));
      }
    }
    function Bn(c, P, N, j, Y, Z) {
      {
        var Q = T(c);
        if (!Q) {
          var z = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var le = Is(Y);
          le ? z += le : z += Fn();
          var ae;
          c === null ? ae = "null" : he(c) ? ae = "array" : c !== void 0 && c.$$typeof === e ? (ae = "<" + (C(c.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof c, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, z);
        }
        var oe = _s(c, P, N, Y, Z);
        if (oe == null)
          return oe;
        if (Q) {
          var be = P.children;
          if (be !== void 0)
            if (j)
              if (he(be)) {
                for (var lt = 0; lt < be.length; lt++)
                  qn(be[lt], c);
                Object.freeze && Object.freeze(be);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qn(be, c);
        }
        return c === n ? ws(oe) : Ts(oe), oe;
      }
    }
    function Ss(c, P, N) {
      return Bn(c, P, N, !0);
    }
    function Rs(c, P, N) {
      return Bn(c, P, N, !1);
    }
    var Os = Rs, ks = Ss;
    St.Fragment = n, St.jsx = Os, St.jsxs = ks;
  }()), St;
}
process.env.NODE_ENV === "production" ? Jr.exports = Us() : Jr.exports = js();
var x = Jr.exports;
const qs = ({ children: t, closeAction: e, title: r, message: n }) => /* @__PURE__ */ x.jsx("div", { className: "modal-container", children: /* @__PURE__ */ x.jsxs("div", { className: "modal-data", children: [
  e && /* @__PURE__ */ x.jsx("button", { onClick: () => typeof e == "function" ? e((i) => !i) : e.value = !e.value, className: "modal-close", children: "X" }),
  /* @__PURE__ */ x.jsx("div", { className: "space modal-title", children: /* @__PURE__ */ x.jsx("label", { children: r }) }),
  /* @__PURE__ */ x.jsx("div", { className: "space modal-message", children: typeof n == "string" ? /* @__PURE__ */ x.jsx("label", { children: n }) : n }),
  /* @__PURE__ */ x.jsx("div", { className: "space modal-footer", children: t })
] }) });
const Bs = () => /* @__PURE__ */ x.jsx("div", { className: "loader-container", children: /* @__PURE__ */ x.jsxs("div", { className: "loader-box", children: [
  /* @__PURE__ */ x.jsx("div", { className: "load blue" }),
  /* @__PURE__ */ x.jsx("div", { className: "load red" }),
  /* @__PURE__ */ x.jsx("div", { className: "load orange" }),
  /* @__PURE__ */ x.jsx("div", { className: "load yellow" }),
  /* @__PURE__ */ x.jsx("div", { className: "load green" })
] }) });
const $s = (t, e) => {
  var r;
  return ((r = t.find((n) => n.code === "*" ? !0 : n.code === e.code)) == null ? void 0 : r.message) ?? e.message;
}, Zi = "IS_GOOGLE", ea = "IS_FACEBOOK", ta = "IS_TWITTER", ra = "IS_GITHUB", na = "IS_MICROSOFT", Hs = () => /* @__PURE__ */ x.jsx("svg", { width: "98", height: "96", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 98 96", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z", fill: "#fff" }) }), Vs = () => /* @__PURE__ */ x.jsx("svg", { version: "1.1", id: "Logo", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 248 204", xmlSpace: "preserve", children: /* @__PURE__ */ x.jsx("g", { id: "Logo_1_", children: /* @__PURE__ */ x.jsx("path", { id: "white_background", fill: "#FFFFFF", d: `M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
                    C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
                    c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
                    c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
                    c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
                    c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z` }) }) }), zs = () => /* @__PURE__ */ x.jsxs(
  "svg",
  {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 40 40",
    xmlSpace: "preserve",
    children: [
      /* @__PURE__ */ x.jsx(
        "path",
        {
          fill: "#1877F2",
          d: "M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z"
        }
      ),
      /* @__PURE__ */ x.jsx("path", { fill: "#FFFFFF", d: `M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20
            h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z` })
    ]
  }
), Ws = [
  {
    method: "google",
    constName: Zi,
    name: "Google",
    className: "google-btn"
  },
  {
    method: "facebook",
    constName: ea,
    name: "Facebook",
    className: "facebook-btn",
    icon: /* @__PURE__ */ x.jsx(zs, {})
  },
  {
    method: "twitter",
    constName: ta,
    name: "Twitter",
    className: "twitter-btn",
    icon: /* @__PURE__ */ x.jsx(Vs, {})
  },
  {
    method: "github",
    constName: ra,
    name: "GitHub",
    className: "github-btn",
    icon: /* @__PURE__ */ x.jsx(Hs, {})
  },
  {
    method: "microsoft",
    constName: na,
    name: "Microsoft",
    className: "microsoft-btn"
  }
], Qs = (t) => Ws.filter((e) => t.find((r) => e.method === r)), ia = {
  firebaseConfig: {},
  endpoint: "http://127.0.0.1:8000/api/auth/",
  keywoard: "TSESSION",
  refreshTokenHeader: "Authorization",
  acceptUsername: !1,
  bodyAsBase64: !1,
  signInMethods: [
    "google"
  ]
};
let ie = { ...ia };
const nf = (t) => {
  ie = { ...ia, ...t };
}, af = () => {
  const t = tt(void 0), e = tt(void 0);
  let r;
  const n = Ot((i) => i(t, r, e), []);
  return Ne(() => {
  }, [r]), {
    user: t.value,
    updateError: e.value,
    authManager: n
  };
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const aa = function(t) {
  const e = [];
  let r = 0;
  for (let n = 0; n < t.length; n++) {
    let i = t.charCodeAt(n);
    i < 128 ? e[r++] = i : i < 2048 ? (e[r++] = i >> 6 | 192, e[r++] = i & 63 | 128) : (i & 64512) === 55296 && n + 1 < t.length && (t.charCodeAt(n + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++n) & 1023), e[r++] = i >> 18 | 240, e[r++] = i >> 12 & 63 | 128, e[r++] = i >> 6 & 63 | 128, e[r++] = i & 63 | 128) : (e[r++] = i >> 12 | 224, e[r++] = i >> 6 & 63 | 128, e[r++] = i & 63 | 128);
  }
  return e;
}, Ks = function(t) {
  const e = [];
  let r = 0, n = 0;
  for (; r < t.length; ) {
    const i = t[r++];
    if (i < 128)
      e[n++] = String.fromCharCode(i);
    else if (i > 191 && i < 224) {
      const a = t[r++];
      e[n++] = String.fromCharCode((i & 31) << 6 | a & 63);
    } else if (i > 239 && i < 365) {
      const a = t[r++], s = t[r++], u = t[r++], o = ((i & 7) << 18 | (a & 63) << 12 | (s & 63) << 6 | u & 63) - 65536;
      e[n++] = String.fromCharCode(55296 + (o >> 10)), e[n++] = String.fromCharCode(56320 + (o & 1023));
    } else {
      const a = t[r++], s = t[r++];
      e[n++] = String.fromCharCode((i & 15) << 12 | (a & 63) << 6 | s & 63);
    }
  }
  return e.join("");
}, sa = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,
  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,
  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,
  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,
  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob == "function",
  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray(t, e) {
    if (!Array.isArray(t))
      throw Error("encodeByteArray takes an array as a parameter");
    this.init_();
    const r = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, n = [];
    for (let i = 0; i < t.length; i += 3) {
      const a = t[i], s = i + 1 < t.length, u = s ? t[i + 1] : 0, o = i + 2 < t.length, l = o ? t[i + 2] : 0, f = a >> 2, p = (a & 3) << 4 | u >> 4;
      let m = (u & 15) << 2 | l >> 6, d = l & 63;
      o || (d = 64, s || (m = 64)), n.push(r[f], r[p], r[m], r[d]);
    }
    return n.join("");
  },
  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString(t, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(aa(t), e);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(t, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : Ks(this.decodeStringToByteArray(t, e));
  },
  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray(t, e) {
    this.init_();
    const r = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, n = [];
    for (let i = 0; i < t.length; ) {
      const a = r[t.charAt(i++)], u = i < t.length ? r[t.charAt(i)] : 0;
      ++i;
      const l = i < t.length ? r[t.charAt(i)] : 64;
      ++i;
      const p = i < t.length ? r[t.charAt(i)] : 64;
      if (++i, a == null || u == null || l == null || p == null)
        throw new Gs();
      const m = a << 2 | u >> 4;
      if (n.push(m), l !== 64) {
        const d = u << 4 & 240 | l >> 2;
        if (n.push(d), p !== 64) {
          const E = l << 6 & 192 | p;
          n.push(E);
        }
      }
    }
    return n;
  },
  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
      for (let t = 0; t < this.ENCODED_VALS.length; t++)
        this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t, t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t);
    }
  }
};
class Gs extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const Js = function(t) {
  const e = aa(t);
  return sa.encodeByteArray(e, !0);
}, oa = function(t) {
  return Js(t).replace(/\./g, "");
}, ua = function(t) {
  try {
    return sa.decodeString(t, !0);
  } catch (e) {
    console.error("base64Decode failed: ", e);
  }
  return null;
};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ys() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xs = () => Ys().__FIREBASE_DEFAULTS__, Zs = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const t = process.env.__FIREBASE_DEFAULTS__;
  if (t)
    return JSON.parse(t);
}, eo = () => {
  if (typeof document > "u")
    return;
  let t;
  try {
    t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const e = t && ua(t[1]);
  return e && JSON.parse(e);
}, pn = () => {
  try {
    return Xs() || Zs() || eo();
  } catch (t) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
    return;
  }
}, to = (t) => {
  var e, r;
  return (r = (e = pn()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || r === void 0 ? void 0 : r[t];
}, ca = () => {
  var t;
  return (t = pn()) === null || t === void 0 ? void 0 : t.config;
}, la = (t) => {
  var e;
  return (e = pn()) === null || e === void 0 ? void 0 : e[`_${t}`];
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ro {
  constructor() {
    this.reject = () => {
    }, this.resolve = () => {
    }, this.promise = new Promise((e, r) => {
      this.resolve = e, this.reject = r;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  wrapCallback(e) {
    return (r, n) => {
      r ? this.reject(r) : this.resolve(n), typeof e == "function" && (this.promise.catch(() => {
      }), e.length === 1 ? e(r) : e(r, n));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ue() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function no() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue());
}
function io() {
  const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function ao() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function so() {
  const t = ue();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function oo() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function uo() {
  return new Promise((t, e) => {
    try {
      let r = !0;
      const n = "validate-browser-context-for-indexeddb-analytics-module", i = self.indexedDB.open(n);
      i.onsuccess = () => {
        i.result.close(), r || self.indexedDB.deleteDatabase(n), t(!0);
      }, i.onupgradeneeded = () => {
        r = !1;
      }, i.onerror = () => {
        var a;
        e(((a = i.error) === null || a === void 0 ? void 0 : a.message) || "");
      };
    } catch (r) {
      e(r);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const co = "FirebaseError";
class Ke extends Error {
  constructor(e, r, n) {
    super(r), this.code = e, this.customData = n, this.name = co, Object.setPrototypeOf(this, Ke.prototype), Error.captureStackTrace && Error.captureStackTrace(this, jt.prototype.create);
  }
}
class jt {
  constructor(e, r, n) {
    this.service = e, this.serviceName = r, this.errors = n;
  }
  create(e, ...r) {
    const n = r[0] || {}, i = `${this.service}/${e}`, a = this.errors[e], s = a ? lo(a, n) : "Error", u = `${this.serviceName}: ${s} (${i}).`;
    return new Ke(i, u, n);
  }
}
function lo(t, e) {
  return t.replace(fo, (r, n) => {
    const i = e[n];
    return i != null ? String(i) : `<${n}?>`;
  });
}
const fo = /\{\$([^}]+)}/g;
function ho(t) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e))
      return !1;
  return !0;
}
function ur(t, e) {
  if (t === e)
    return !0;
  const r = Object.keys(t), n = Object.keys(e);
  for (const i of r) {
    if (!n.includes(i))
      return !1;
    const a = t[i], s = e[i];
    if (Gn(a) && Gn(s)) {
      if (!ur(a, s))
        return !1;
    } else if (a !== s)
      return !1;
  }
  for (const i of n)
    if (!r.includes(i))
      return !1;
  return !0;
}
function Gn(t) {
  return t !== null && typeof t == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qt(t) {
  const e = [];
  for (const [r, n] of Object.entries(t))
    Array.isArray(n) ? n.forEach((i) => {
      e.push(encodeURIComponent(r) + "=" + encodeURIComponent(i));
    }) : e.push(encodeURIComponent(r) + "=" + encodeURIComponent(n));
  return e.length ? "&" + e.join("&") : "";
}
function po(t, e) {
  const r = new vo(t, e);
  return r.subscribe.bind(r);
}
class vo {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  constructor(e, r) {
    this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = r, this.task.then(() => {
      e(this);
    }).catch((n) => {
      this.error(n);
    });
  }
  next(e) {
    this.forEachObserver((r) => {
      r.next(e);
    });
  }
  error(e) {
    this.forEachObserver((r) => {
      r.error(e);
    }), this.close(e);
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete();
    }), this.close();
  }
  /**
   * Subscribe function that can be used to add an Observer to the fan-out list.
   *
   * - We require that no event is sent to a subscriber sychronously to their
   *   call to subscribe().
   */
  subscribe(e, r, n) {
    let i;
    if (e === void 0 && r === void 0 && n === void 0)
      throw new Error("Missing Observer.");
    go(e, [
      "next",
      "error",
      "complete"
    ]) ? i = e : i = {
      next: e,
      error: r,
      complete: n
    }, i.next === void 0 && (i.next = xr), i.error === void 0 && (i.error = xr), i.complete === void 0 && (i.complete = xr);
    const a = this.unsubscribeOne.bind(this, this.observers.length);
    return this.finalized && this.task.then(() => {
      try {
        this.finalError ? i.error(this.finalError) : i.complete();
      } catch {
      }
    }), this.observers.push(i), a;
  }
  // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.
  unsubscribeOne(e) {
    this.observers === void 0 || this.observers[e] === void 0 || (delete this.observers[e], this.observerCount -= 1, this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let r = 0; r < this.observers.length; r++)
        this.sendOne(r, e);
  }
  // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.
  sendOne(e, r) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          r(this.observers[e]);
        } catch (n) {
          typeof console < "u" && console.error && console.error(n);
        }
    });
  }
  close(e) {
    this.finalized || (this.finalized = !0, e !== void 0 && (this.finalError = e), this.task.then(() => {
      this.observers = void 0, this.onNoObservers = void 0;
    }));
  }
}
function go(t, e) {
  if (typeof t != "object" || t === null)
    return !1;
  for (const r of e)
    if (r in t && typeof t[r] == "function")
      return !0;
  return !1;
}
function xr() {
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function It(t) {
  return t && t._delegate ? t._delegate : t;
}
class vt {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(e, r, n) {
    this.name = e, this.instanceFactory = r, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
  }
  setInstantiationMode(e) {
    return this.instantiationMode = e, this;
  }
  setMultipleInstances(e) {
    return this.multipleInstances = e, this;
  }
  setServiceProps(e) {
    return this.serviceProps = e, this;
  }
  setInstanceCreatedCallback(e) {
    return this.onInstanceCreated = e, this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xe = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mo {
  constructor(e, r) {
    this.name = e, this.container = r, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(e) {
    const r = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(r)) {
      const n = new ro();
      if (this.instancesDeferred.set(r, n), this.isInitialized(r) || this.shouldAutoInitialize())
        try {
          const i = this.getOrInitializeService({
            instanceIdentifier: r
          });
          i && n.resolve(i);
        } catch {
        }
    }
    return this.instancesDeferred.get(r).promise;
  }
  getImmediate(e) {
    var r;
    const n = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier), i = (r = e == null ? void 0 : e.optional) !== null && r !== void 0 ? r : !1;
    if (this.isInitialized(n) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({
          instanceIdentifier: n
        });
      } catch (a) {
        if (i)
          return null;
        throw a;
      }
    else {
      if (i)
        return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (this.component = e, !!this.shouldAutoInitialize()) {
      if (bo(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Xe });
        } catch {
        }
      for (const [r, n] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(r);
        try {
          const a = this.getOrInitializeService({
            instanceIdentifier: i
          });
          n.resolve(a);
        } catch {
        }
      }
    }
  }
  clearInstance(e = Xe) {
    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((r) => "INTERNAL" in r).map((r) => r.INTERNAL.delete()),
      ...e.filter((r) => "_delete" in r).map((r) => r._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = Xe) {
    return this.instances.has(e);
  }
  getOptions(e = Xe) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: r = {} } = e, n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(n))
      throw Error(`${this.name}(${n}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: n,
      options: r
    });
    for (const [a, s] of this.instancesDeferred.entries()) {
      const u = this.normalizeInstanceIdentifier(a);
      n === u && s.resolve(i);
    }
    return i;
  }
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */
  onInit(e, r) {
    var n;
    const i = this.normalizeInstanceIdentifier(r), a = (n = this.onInitCallbacks.get(i)) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set();
    a.add(e), this.onInitCallbacks.set(i, a);
    const s = this.instances.get(i);
    return s && e(s, i), () => {
      a.delete(e);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(e, r) {
    const n = this.onInitCallbacks.get(r);
    if (n)
      for (const i of n)
        try {
          i(e, r);
        } catch {
        }
  }
  getOrInitializeService({ instanceIdentifier: e, options: r = {} }) {
    let n = this.instances.get(e);
    if (!n && this.component && (n = this.component.instanceFactory(this.container, {
      instanceIdentifier: yo(e),
      options: r
    }), this.instances.set(e, n), this.instancesOptions.set(e, r), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, n);
      } catch {
      }
    return n || null;
  }
  normalizeInstanceIdentifier(e = Xe) {
    return this.component ? this.component.multipleInstances ? e : Xe : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function yo(t) {
  return t === Xe ? void 0 : t;
}
function bo(t) {
  return t.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _o {
  constructor(e) {
    this.name = e, this.providers = /* @__PURE__ */ new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  addComponent(e) {
    const r = this.getProvider(e.name);
    if (r.isComponentSet())
      throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
    r.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e);
  }
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  getProvider(e) {
    if (this.providers.has(e))
      return this.providers.get(e);
    const r = new mo(e, this);
    return this.providers.set(e, r), r;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ee;
(function(t) {
  t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT";
})(ee || (ee = {}));
const Io = {
  debug: ee.DEBUG,
  verbose: ee.VERBOSE,
  info: ee.INFO,
  warn: ee.WARN,
  error: ee.ERROR,
  silent: ee.SILENT
}, Eo = ee.INFO, To = {
  [ee.DEBUG]: "log",
  [ee.VERBOSE]: "log",
  [ee.INFO]: "info",
  [ee.WARN]: "warn",
  [ee.ERROR]: "error"
}, wo = (t, e, ...r) => {
  if (e < t.logLevel)
    return;
  const n = (/* @__PURE__ */ new Date()).toISOString(), i = To[e];
  if (i)
    console[i](`[${n}]  ${t.name}:`, ...r);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class da {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = Eo, this._logHandler = wo, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in ee))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? Io[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  /**
   * The functions below are all based on the `console` interface
   */
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, ee.DEBUG, ...e), this._logHandler(this, ee.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, ee.VERBOSE, ...e), this._logHandler(this, ee.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, ee.INFO, ...e), this._logHandler(this, ee.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, ee.WARN, ...e), this._logHandler(this, ee.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, ee.ERROR, ...e), this._logHandler(this, ee.ERROR, ...e);
  }
}
const So = (t, e) => e.some((r) => t instanceof r);
let Jn, Yn;
function Ro() {
  return Jn || (Jn = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Oo() {
  return Yn || (Yn = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const fa = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), ha = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap();
function ko(t) {
  const e = new Promise((r, n) => {
    const i = () => {
      t.removeEventListener("success", a), t.removeEventListener("error", s);
    }, a = () => {
      r(ze(t.result)), i();
    }, s = () => {
      n(t.error), i();
    };
    t.addEventListener("success", a), t.addEventListener("error", s);
  });
  return e.then((r) => {
    r instanceof IDBCursor && fa.set(r, t);
  }).catch(() => {
  }), vn.set(e, t), e;
}
function Ao(t) {
  if (Yr.has(t))
    return;
  const e = new Promise((r, n) => {
    const i = () => {
      t.removeEventListener("complete", a), t.removeEventListener("error", s), t.removeEventListener("abort", s);
    }, a = () => {
      r(), i();
    }, s = () => {
      n(t.error || new DOMException("AbortError", "AbortError")), i();
    };
    t.addEventListener("complete", a), t.addEventListener("error", s), t.addEventListener("abort", s);
  });
  Yr.set(t, e);
}
let Xr = {
  get(t, e, r) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return Yr.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || ha.get(t);
      if (e === "store")
        return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0]);
    }
    return ze(t[e]);
  },
  set(t, e, r) {
    return t[e] = r, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function Co(t) {
  Xr = t(Xr);
}
function Po(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...r) {
    const n = t.call(Fr(this), e, ...r);
    return ha.set(n, e.sort ? e.sort() : [e]), ze(n);
  } : Oo().includes(t) ? function(...e) {
    return t.apply(Fr(this), e), ze(fa.get(this));
  } : function(...e) {
    return ze(t.apply(Fr(this), e));
  };
}
function Do(t) {
  return typeof t == "function" ? Po(t) : (t instanceof IDBTransaction && Ao(t), So(t, Ro()) ? new Proxy(t, Xr) : t);
}
function ze(t) {
  if (t instanceof IDBRequest)
    return ko(t);
  if (Lr.has(t))
    return Lr.get(t);
  const e = Do(t);
  return e !== t && (Lr.set(t, e), vn.set(e, t)), e;
}
const Fr = (t) => vn.get(t);
function No(t, e, { blocked: r, upgrade: n, blocking: i, terminated: a } = {}) {
  const s = indexedDB.open(t, e), u = ze(s);
  return n && s.addEventListener("upgradeneeded", (o) => {
    n(ze(s.result), o.oldVersion, o.newVersion, ze(s.transaction), o);
  }), r && s.addEventListener("blocked", (o) => r(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    o.oldVersion,
    o.newVersion,
    o
  )), u.then((o) => {
    a && o.addEventListener("close", () => a()), i && o.addEventListener("versionchange", (l) => i(l.oldVersion, l.newVersion, l));
  }).catch(() => {
  }), u;
}
const Mo = ["get", "getKey", "getAll", "getAllKeys", "count"], xo = ["put", "add", "delete", "clear"], Ur = /* @__PURE__ */ new Map();
function Xn(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (Ur.get(e))
    return Ur.get(e);
  const r = e.replace(/FromIndex$/, ""), n = e !== r, i = xo.includes(r);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(r in (n ? IDBIndex : IDBObjectStore).prototype) || !(i || Mo.includes(r))
  )
    return;
  const a = async function(s, ...u) {
    const o = this.transaction(s, i ? "readwrite" : "readonly");
    let l = o.store;
    return n && (l = l.index(u.shift())), (await Promise.all([
      l[r](...u),
      i && o.done
    ]))[0];
  };
  return Ur.set(e, a), a;
}
Co((t) => ({
  ...t,
  get: (e, r, n) => Xn(e, r) || t.get(e, r, n),
  has: (e, r) => !!Xn(e, r) || t.has(e, r)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lo {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((r) => {
      if (Fo(r)) {
        const n = r.getImmediate();
        return `${n.library}/${n.version}`;
      } else
        return null;
    }).filter((r) => r).join(" ");
  }
}
function Fo(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const Zr = "@firebase/app", Zn = "0.9.13";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ot = new da("@firebase/app"), Uo = "@firebase/app-compat", jo = "@firebase/analytics-compat", qo = "@firebase/analytics", Bo = "@firebase/app-check-compat", $o = "@firebase/app-check", Ho = "@firebase/auth", Vo = "@firebase/auth-compat", zo = "@firebase/database", Wo = "@firebase/database-compat", Qo = "@firebase/functions", Ko = "@firebase/functions-compat", Go = "@firebase/installations", Jo = "@firebase/installations-compat", Yo = "@firebase/messaging", Xo = "@firebase/messaging-compat", Zo = "@firebase/performance", eu = "@firebase/performance-compat", tu = "@firebase/remote-config", ru = "@firebase/remote-config-compat", nu = "@firebase/storage", iu = "@firebase/storage-compat", au = "@firebase/firestore", su = "@firebase/firestore-compat", ou = "firebase", uu = "9.23.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const en = "[DEFAULT]", cu = {
  [Zr]: "fire-core",
  [Uo]: "fire-core-compat",
  [qo]: "fire-analytics",
  [jo]: "fire-analytics-compat",
  [$o]: "fire-app-check",
  [Bo]: "fire-app-check-compat",
  [Ho]: "fire-auth",
  [Vo]: "fire-auth-compat",
  [zo]: "fire-rtdb",
  [Wo]: "fire-rtdb-compat",
  [Qo]: "fire-fn",
  [Ko]: "fire-fn-compat",
  [Go]: "fire-iid",
  [Jo]: "fire-iid-compat",
  [Yo]: "fire-fcm",
  [Xo]: "fire-fcm-compat",
  [Zo]: "fire-perf",
  [eu]: "fire-perf-compat",
  [tu]: "fire-rc",
  [ru]: "fire-rc-compat",
  [nu]: "fire-gcs",
  [iu]: "fire-gcs-compat",
  [au]: "fire-fst",
  [su]: "fire-fst-compat",
  "fire-js": "fire-js",
  [ou]: "fire-js-all"
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cr = /* @__PURE__ */ new Map(), tn = /* @__PURE__ */ new Map();
function lu(t, e) {
  try {
    t.container.addComponent(e);
  } catch (r) {
    ot.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, r);
  }
}
function Dt(t) {
  const e = t.name;
  if (tn.has(e))
    return ot.debug(`There were multiple attempts to register component ${e}.`), !1;
  tn.set(e, t);
  for (const r of cr.values())
    lu(r, t);
  return !0;
}
function pa(t, e) {
  const r = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return r && r.triggerHeartbeat(), t.container.getProvider(e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const du = {
  "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
  "bad-app-name": "Illegal App name: '{$appName}",
  "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
  "app-deleted": "Firebase App named '{$appName}' already deleted",
  "no-options": "Need to provide options, when not being deployed to hosting via source.",
  "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  "invalid-log-argument": "First argument to `onLog` must be null or a function.",
  "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
}, We = new jt("app", "Firebase", du);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fu {
  constructor(e, r, n) {
    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, r), this._name = r.name, this._automaticDataCollectionEnabled = r.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new vt(
      "app",
      () => this,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), this._automaticDataCollectionEnabled = e;
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  checkDestroyed() {
    if (this.isDeleted)
      throw We.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bt = uu;
function va(t, e = {}) {
  let r = t;
  typeof e != "object" && (e = { name: e });
  const n = Object.assign({ name: en, automaticDataCollectionEnabled: !1 }, e), i = n.name;
  if (typeof i != "string" || !i)
    throw We.create("bad-app-name", {
      appName: String(i)
    });
  if (r || (r = ca()), !r)
    throw We.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const a = cr.get(i);
  if (a) {
    if (ur(r, a.options) && ur(n, a.config))
      return a;
    throw We.create("duplicate-app", { appName: i });
  }
  const s = new _o(i);
  for (const o of tn.values())
    s.addComponent(o);
  const u = new fu(r, n, s);
  return cr.set(i, u), u;
}
function hu(t = en) {
  const e = cr.get(t);
  if (!e && t === en && ca())
    return va();
  if (!e)
    throw We.create("no-app", { appName: t });
  return e;
}
function dt(t, e, r) {
  var n;
  let i = (n = cu[t]) !== null && n !== void 0 ? n : t;
  r && (i += `-${r}`);
  const a = i.match(/\s|\//), s = e.match(/\s|\//);
  if (a || s) {
    const u = [
      `Unable to register library "${i}" with version "${e}":`
    ];
    a && u.push(`library name "${i}" contains illegal characters (whitespace or "/")`), a && s && u.push("and"), s && u.push(`version name "${e}" contains illegal characters (whitespace or "/")`), ot.warn(u.join(" "));
    return;
  }
  Dt(new vt(
    `${i}-version`,
    () => ({ library: i, version: e }),
    "VERSION"
    /* ComponentType.VERSION */
  ));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pu = "firebase-heartbeat-database", vu = 1, Nt = "firebase-heartbeat-store";
let jr = null;
function ga() {
  return jr || (jr = No(pu, vu, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          t.createObjectStore(Nt);
      }
    }
  }).catch((t) => {
    throw We.create("idb-open", {
      originalErrorMessage: t.message
    });
  })), jr;
}
async function gu(t) {
  try {
    return await (await ga()).transaction(Nt).objectStore(Nt).get(ma(t));
  } catch (e) {
    if (e instanceof Ke)
      ot.warn(e.message);
    else {
      const r = We.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message
      });
      ot.warn(r.message);
    }
  }
}
async function ei(t, e) {
  try {
    const n = (await ga()).transaction(Nt, "readwrite");
    await n.objectStore(Nt).put(e, ma(t)), await n.done;
  } catch (r) {
    if (r instanceof Ke)
      ot.warn(r.message);
    else {
      const n = We.create("idb-set", {
        originalErrorMessage: r == null ? void 0 : r.message
      });
      ot.warn(n.message);
    }
  }
}
function ma(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mu = 1024, yu = 30 * 24 * 60 * 60 * 1e3;
class bu {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const r = this.container.getProvider("app").getImmediate();
    this._storage = new Iu(r), this._heartbeatsCachePromise = this._storage.read().then((n) => (this._heartbeatsCache = n, n));
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    const r = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), n = ti();
    if (this._heartbeatsCache === null && (this._heartbeatsCache = await this._heartbeatsCachePromise), !(this._heartbeatsCache.lastSentHeartbeatDate === n || this._heartbeatsCache.heartbeats.some((i) => i.date === n)))
      return this._heartbeatsCache.heartbeats.push({ date: n, agent: r }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((i) => {
        const a = new Date(i.date).valueOf();
        return Date.now() - a <= yu;
      }), this._storage.overwrite(this._heartbeatsCache);
  }
  /**
   * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
   * It also clears all heartbeats from memory as well as in IndexedDB.
   *
   * NOTE: Consuming product SDKs should not send the header if this method
   * returns an empty string.
   */
  async getHeartbeatsHeader() {
    if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0)
      return "";
    const e = ti(), { heartbeatsToSend: r, unsentEntries: n } = _u(this._heartbeatsCache.heartbeats), i = oa(JSON.stringify({ version: 2, heartbeats: r }));
    return this._heartbeatsCache.lastSentHeartbeatDate = e, n.length > 0 ? (this._heartbeatsCache.heartbeats = n, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i;
  }
}
function ti() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function _u(t, e = mu) {
  const r = [];
  let n = t.slice();
  for (const i of t) {
    const a = r.find((s) => s.agent === i.agent);
    if (a) {
      if (a.dates.push(i.date), ri(r) > e) {
        a.dates.pop();
        break;
      }
    } else if (r.push({
      agent: i.agent,
      dates: [i.date]
    }), ri(r) > e) {
      r.pop();
      break;
    }
    n = n.slice(1);
  }
  return {
    heartbeatsToSend: r,
    unsentEntries: n
  };
}
class Iu {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return oo() ? uo().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    return await this._canUseIndexedDBPromise ? await gu(this.app) || { heartbeats: [] } : { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    var r;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return ei(this.app, {
        lastSentHeartbeatDate: (r = e.lastSentHeartbeatDate) !== null && r !== void 0 ? r : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats
      });
    } else
      return;
  }
  // add heartbeats
  async add(e) {
    var r;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return ei(this.app, {
        lastSentHeartbeatDate: (r = e.lastSentHeartbeatDate) !== null && r !== void 0 ? r : i.lastSentHeartbeatDate,
        heartbeats: [
          ...i.heartbeats,
          ...e.heartbeats
        ]
      });
    } else
      return;
  }
}
function ri(t) {
  return oa(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: t })
  ).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Eu(t) {
  Dt(new vt(
    "platform-logger",
    (e) => new Lo(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), Dt(new vt(
    "heartbeat",
    (e) => new bu(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), dt(Zr, Zn, t), dt(Zr, Zn, "esm2017"), dt("fire-js", "");
}
Eu("");
function gn(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function ya() {
  return {
    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const Tu = ya, ba = new jt("auth", "Firebase", ya());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lr = new da("@firebase/auth");
function wu(t, ...e) {
  lr.logLevel <= ee.WARN && lr.warn(`Auth (${Bt}): ${t}`, ...e);
}
function tr(t, ...e) {
  lr.logLevel <= ee.ERROR && lr.error(`Auth (${Bt}): ${t}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ae(t, ...e) {
  throw mn(t, ...e);
}
function Re(t, ...e) {
  return mn(t, ...e);
}
function _a(t, e, r) {
  const n = Object.assign(Object.assign({}, Tu()), { [e]: r });
  return new jt("auth", "Firebase", n).create(e, {
    appName: t.name
  });
}
function Su(t, e, r) {
  const n = r;
  if (!(e instanceof n))
    throw n.name !== e.constructor.name && Ae(
      t,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), _a(t, "argument-error", `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
}
function mn(t, ...e) {
  if (typeof t != "string") {
    const r = e[0], n = [...e.slice(1)];
    return n[0] && (n[0].appName = t.name), t._errorFactory.create(r, ...n);
  }
  return ba.create(t, ...e);
}
function q(t, e, ...r) {
  if (!t)
    throw mn(e, ...r);
}
function Me(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw tr(e), new Error(e);
}
function Le(t, e) {
  t || Me(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rn() {
  var t;
  return typeof self < "u" && ((t = self.location) === null || t === void 0 ? void 0 : t.href) || "";
}
function Ru() {
  return ni() === "http:" || ni() === "https:";
}
function ni() {
  var t;
  return typeof self < "u" && ((t = self.location) === null || t === void 0 ? void 0 : t.protocol) || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ou() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (Ru() || io() || "connection" in navigator) ? navigator.onLine : !0;
}
function ku() {
  if (typeof navigator > "u")
    return null;
  const t = navigator;
  return (
    // Most reliable, but only supported in Chrome/Firefox.
    t.languages && t.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    t.language || // Couldn't determine language.
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t {
  constructor(e, r) {
    this.shortDelay = e, this.longDelay = r, Le(r > e, "Short delay should be less than long delay!"), this.isMobile = no() || ao();
  }
  get() {
    return Ou() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yn(t, e) {
  Le(t.emulator, "Emulator should always be set here");
  const { url: r } = t.emulator;
  return e ? `${r}${e.startsWith("/") ? e.slice(1) : e}` : r;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ia {
  static initialize(e, r, n) {
    this.fetchImpl = e, r && (this.headersImpl = r), n && (this.responseImpl = n);
  }
  static fetch() {
    if (this.fetchImpl)
      return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self)
      return self.fetch;
    Me("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl)
      return this.headersImpl;
    if (typeof self < "u" && "Headers" in self)
      return self.Headers;
    Me("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl)
      return this.responseImpl;
    if (typeof self < "u" && "Response" in self)
      return self.Response;
    Me("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Au = {
  // Custom token errors.
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  // This can only happen if the SDK sends a bad request.
  MISSING_CUSTOM_TOKEN: "internal-error",
  // Create Auth URI errors.
  INVALID_IDENTIFIER: "invalid-email",
  // This can only happen if the SDK sends a bad request.
  MISSING_CONTINUE_URI: "internal-error",
  // Sign in with email and password errors (some apply to sign up too).
  INVALID_PASSWORD: "wrong-password",
  // This can only happen if the SDK sends a bad request.
  MISSING_PASSWORD: "missing-password",
  // Sign up with email and password errors.
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  // Verify assertion for sign in with credential errors:
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  // This can only happen if the SDK sends a bad request.
  MISSING_REQ_TYPE: "internal-error",
  // Send Password reset email errors:
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  // This can only happen if the SDK sends a bad request.
  MISSING_OOB_CODE: "internal-error",
  // Operations that require ID token in request:
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  // Other errors.
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  // Phone Auth related errors.
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  // Other action code errors when additional settings passed.
  // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
  // This is OK as this error will be caught by client side validation.
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  // getProjectConfig errors when clientId is passed.
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  // User actions (sign-up or deletion) disabled errors.
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  // Multi factor related errors.
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  // Blocking functions related errors.
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  // Recaptcha related errors.
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type"
  /* AuthErrorCode.INVALID_REQ_TYPE */
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cu = new $t(3e4, 6e4);
function Ea(t, e) {
  return t.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId }) : e;
}
async function Ht(t, e, r, n, i = {}) {
  return Ta(t, i, async () => {
    let a = {}, s = {};
    n && (e === "GET" ? s = n : a = {
      body: JSON.stringify(n)
    });
    const u = qt(Object.assign({ key: t.config.apiKey }, s)).slice(1), o = await t._getAdditionalHeaders();
    return o[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/json", t.languageCode && (o[
      "X-Firebase-Locale"
      /* HttpHeader.X_FIREBASE_LOCALE */
    ] = t.languageCode), Ia.fetch()(wa(t, t.config.apiHost, r, u), Object.assign({
      method: e,
      headers: o,
      referrerPolicy: "no-referrer"
    }, a));
  });
}
async function Ta(t, e, r) {
  t._canInitEmulator = !1;
  const n = Object.assign(Object.assign({}, Au), e);
  try {
    const i = new Du(t), a = await Promise.race([
      r(),
      i.promise
    ]);
    i.clearNetworkTimeout();
    const s = await a.json();
    if ("needConfirmation" in s)
      throw Jt(t, "account-exists-with-different-credential", s);
    if (a.ok && !("errorMessage" in s))
      return s;
    {
      const u = a.ok ? s.errorMessage : s.error.message, [o, l] = u.split(" : ");
      if (o === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Jt(t, "credential-already-in-use", s);
      if (o === "EMAIL_EXISTS")
        throw Jt(t, "email-already-in-use", s);
      if (o === "USER_DISABLED")
        throw Jt(t, "user-disabled", s);
      const f = n[o] || o.toLowerCase().replace(/[_\s]+/g, "-");
      if (l)
        throw _a(t, f, l);
      Ae(t, f);
    }
  } catch (i) {
    if (i instanceof Ke)
      throw i;
    Ae(t, "network-request-failed", { message: String(i) });
  }
}
async function Pu(t, e, r, n, i = {}) {
  const a = await Ht(t, e, r, n, i);
  return "mfaPendingCredential" in a && Ae(t, "multi-factor-auth-required", {
    _serverResponse: a
  }), a;
}
function wa(t, e, r, n) {
  const i = `${e}${r}?${n}`;
  return t.config.emulator ? yn(t.config, i) : `${t.config.apiScheme}://${i}`;
}
class Du {
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((r, n) => {
      this.timer = setTimeout(() => n(Re(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), Cu.get());
    });
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function Jt(t, e, r) {
  const n = {
    appName: t.name
  };
  r.email && (n.email = r.email), r.phoneNumber && (n.phoneNumber = r.phoneNumber);
  const i = Re(t, e, n);
  return i.customData._tokenResponse = r, i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Nu(t, e) {
  return Ht(t, "POST", "/v1/accounts:delete", e);
}
async function Mu(t, e) {
  return Ht(t, "POST", "/v1/accounts:lookup", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ct(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function xu(t, e = !1) {
  const r = It(t), n = await r.getIdToken(e), i = bn(n);
  q(
    i && i.exp && i.auth_time && i.iat,
    r.auth,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const a = typeof i.firebase == "object" ? i.firebase : void 0, s = a == null ? void 0 : a.sign_in_provider;
  return {
    claims: i,
    token: n,
    authTime: Ct(qr(i.auth_time)),
    issuedAtTime: Ct(qr(i.iat)),
    expirationTime: Ct(qr(i.exp)),
    signInProvider: s || null,
    signInSecondFactor: (a == null ? void 0 : a.sign_in_second_factor) || null
  };
}
function qr(t) {
  return Number(t) * 1e3;
}
function bn(t) {
  const [e, r, n] = t.split(".");
  if (e === void 0 || r === void 0 || n === void 0)
    return tr("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = ua(r);
    return i ? JSON.parse(i) : (tr("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return tr("Caught error parsing JWT payload as JSON", i == null ? void 0 : i.toString()), null;
  }
}
function Lu(t) {
  const e = bn(t);
  return q(
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), q(
    typeof e.exp < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), q(
    typeof e.iat < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Number(e.exp) - Number(e.iat);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mt(t, e, r = !1) {
  if (r)
    return e;
  try {
    return await e;
  } catch (n) {
    throw n instanceof Ke && Fu(n) && t.auth.currentUser === t && await t.auth.signOut(), n;
  }
}
function Fu({ code: t }) {
  return t === "auth/user-disabled" || t === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uu {
  constructor(e) {
    this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4;
  }
  _start() {
    this.isRunning || (this.isRunning = !0, this.schedule());
  }
  _stop() {
    this.isRunning && (this.isRunning = !1, this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    var r;
    if (e) {
      const n = this.errorBackoff;
      return this.errorBackoff = Math.min(
        this.errorBackoff * 2,
        96e4
        /* Duration.RETRY_BACKOFF_MAX */
      ), n;
    } else {
      this.errorBackoff = 3e4;
      const i = ((r = this.user.stsTokenManager.expirationTime) !== null && r !== void 0 ? r : 0) - Date.now() - 3e5;
      return Math.max(0, i);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning)
      return;
    const r = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, r);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (e) {
      (e == null ? void 0 : e.code) === "auth/network-request-failed" && this.schedule(
        /* wasError */
        !0
      );
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sa {
  constructor(e, r) {
    this.createdAt = e, this.lastLoginAt = r, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = Ct(this.lastLoginAt), this.creationTime = Ct(this.createdAt);
  }
  _copy(e) {
    this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function dr(t) {
  var e;
  const r = t.auth, n = await t.getIdToken(), i = await Mt(t, Mu(r, { idToken: n }));
  q(
    i == null ? void 0 : i.users.length,
    r,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const a = i.users[0];
  t._notifyReloadListener(a);
  const s = !((e = a.providerUserInfo) === null || e === void 0) && e.length ? Bu(a.providerUserInfo) : [], u = qu(t.providerData, s), o = t.isAnonymous, l = !(t.email && a.passwordHash) && !(u != null && u.length), f = o ? l : !1, p = {
    uid: a.localId,
    displayName: a.displayName || null,
    photoURL: a.photoUrl || null,
    email: a.email || null,
    emailVerified: a.emailVerified || !1,
    phoneNumber: a.phoneNumber || null,
    tenantId: a.tenantId || null,
    providerData: u,
    metadata: new Sa(a.createdAt, a.lastLoginAt),
    isAnonymous: f
  };
  Object.assign(t, p);
}
async function ju(t) {
  const e = It(t);
  await dr(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function qu(t, e) {
  return [...t.filter((n) => !e.some((i) => i.providerId === n.providerId)), ...e];
}
function Bu(t) {
  return t.map((e) => {
    var { providerId: r } = e, n = gn(e, ["providerId"]);
    return {
      providerId: r,
      uid: n.rawId || "",
      displayName: n.displayName || null,
      email: n.email || null,
      phoneNumber: n.phoneNumber || null,
      photoURL: n.photoUrl || null
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $u(t, e) {
  const r = await Ta(t, {}, async () => {
    const n = qt({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: i, apiKey: a } = t.config, s = wa(t, i, "/v1/token", `key=${a}`), u = await t._getAdditionalHeaders();
    return u[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded", Ia.fetch()(s, {
      method: "POST",
      headers: u,
      body: n
    });
  });
  return {
    accessToken: r.access_token,
    expiresIn: r.expires_in,
    refreshToken: r.refresh_token
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt {
  constructor() {
    this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    q(
      e.idToken,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), q(
      typeof e.idToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), q(
      typeof e.refreshToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const r = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : Lu(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, r);
  }
  async getToken(e, r = !1) {
    return q(
      !this.accessToken || this.refreshToken,
      e,
      "user-token-expired"
      /* AuthErrorCode.TOKEN_EXPIRED */
    ), !r && this.accessToken && !this.isExpired ? this.accessToken : this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null;
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, r) {
    const { accessToken: n, refreshToken: i, expiresIn: a } = await $u(e, r);
    this.updateTokensAndExpiration(n, i, Number(a));
  }
  updateTokensAndExpiration(e, r, n) {
    this.refreshToken = r || null, this.accessToken = e || null, this.expirationTime = Date.now() + n * 1e3;
  }
  static fromJSON(e, r) {
    const { refreshToken: n, accessToken: i, expirationTime: a } = r, s = new xt();
    return n && (q(typeof n == "string", "internal-error", {
      appName: e
    }), s.refreshToken = n), i && (q(typeof i == "string", "internal-error", {
      appName: e
    }), s.accessToken = i), a && (q(typeof a == "number", "internal-error", {
      appName: e
    }), s.expirationTime = a), s;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(e) {
    this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime;
  }
  _clone() {
    return Object.assign(new xt(), this.toJSON());
  }
  _performRefresh() {
    return Me("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function He(t, e) {
  q(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class it {
  constructor(e) {
    var { uid: r, auth: n, stsTokenManager: i } = e, a = gn(e, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase", this.proactiveRefresh = new Uu(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = r, this.auth = n, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = a.displayName || null, this.email = a.email || null, this.emailVerified = a.emailVerified || !1, this.phoneNumber = a.phoneNumber || null, this.photoURL = a.photoURL || null, this.isAnonymous = a.isAnonymous || !1, this.tenantId = a.tenantId || null, this.providerData = a.providerData ? [...a.providerData] : [], this.metadata = new Sa(a.createdAt || void 0, a.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const r = await Mt(this, this.stsTokenManager.getToken(this.auth, e));
    return q(
      r,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== r && (this.accessToken = r, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), r;
  }
  getIdTokenResult(e) {
    return xu(this, e);
  }
  reload() {
    return ju(this);
  }
  _assign(e) {
    this !== e && (q(
      this.uid === e.uid,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((r) => Object.assign({}, r)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const r = new it(Object.assign(Object.assign({}, this), { auth: e, stsTokenManager: this.stsTokenManager._clone() }));
    return r.metadata._copy(this.metadata), r;
  }
  _onReload(e) {
    q(
      !this.reloadListener,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null);
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e;
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, r = !1) {
    let n = !1;
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), n = !0), r && await dr(this), await this.auth._persistUserIfCurrent(this), n && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const e = await this.getIdToken();
    return await Mt(this, Nu(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
  }
  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map((e) => Object.assign({}, e)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      // Redirect event ID must be maintained in case there is a pending
      // redirect event.
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(e, r) {
    var n, i, a, s, u, o, l, f;
    const p = (n = r.displayName) !== null && n !== void 0 ? n : void 0, m = (i = r.email) !== null && i !== void 0 ? i : void 0, d = (a = r.phoneNumber) !== null && a !== void 0 ? a : void 0, E = (s = r.photoURL) !== null && s !== void 0 ? s : void 0, b = (u = r.tenantId) !== null && u !== void 0 ? u : void 0, y = (o = r._redirectEventId) !== null && o !== void 0 ? o : void 0, O = (l = r.createdAt) !== null && l !== void 0 ? l : void 0, R = (f = r.lastLoginAt) !== null && f !== void 0 ? f : void 0, { uid: v, emailVerified: _, isAnonymous: g, providerData: h, stsTokenManager: I } = r;
    q(
      v && I,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const w = xt.fromJSON(this.name, I);
    q(
      typeof v == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), He(p, e.name), He(m, e.name), q(
      typeof _ == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), q(
      typeof g == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), He(d, e.name), He(E, e.name), He(b, e.name), He(y, e.name), He(O, e.name), He(R, e.name);
    const S = new it({
      uid: v,
      auth: e,
      email: m,
      emailVerified: _,
      displayName: p,
      isAnonymous: g,
      photoURL: E,
      phoneNumber: d,
      tenantId: b,
      stsTokenManager: w,
      createdAt: O,
      lastLoginAt: R
    });
    return h && Array.isArray(h) && (S.providerData = h.map((T) => Object.assign({}, T))), y && (S._redirectEventId = y), S;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, r, n = !1) {
    const i = new xt();
    i.updateFromServerResponse(r);
    const a = new it({
      uid: r.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: n
    });
    return await dr(a), a;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ii = /* @__PURE__ */ new Map();
function xe(t) {
  Le(t instanceof Function, "Expected a class definition");
  let e = ii.get(t);
  return e ? (Le(e instanceof t, "Instance stored in cache mismatched with class"), e) : (e = new t(), ii.set(t, e), e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ra {
  constructor() {
    this.type = "NONE", this.storage = {};
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, r) {
    this.storage[e] = r;
  }
  async _get(e) {
    const r = this.storage[e];
    return r === void 0 ? null : r;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, r) {
  }
  _removeListener(e, r) {
  }
}
Ra.type = "NONE";
const ai = Ra;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rr(t, e, r) {
  return `firebase:${t}:${e}:${r}`;
}
class ft {
  constructor(e, r, n) {
    this.persistence = e, this.auth = r, this.userKey = n;
    const { config: i, name: a } = this.auth;
    this.fullUserKey = rr(this.userKey, i.apiKey, a), this.fullPersistenceKey = rr("persistence", i.apiKey, a), this.boundEventHandler = r._onStorageEvent.bind(r), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? it._fromJSON(this.auth, e) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(e) {
    if (this.persistence === e)
      return;
    const r = await this.getCurrentUser();
    if (await this.removeCurrentUser(), this.persistence = e, r)
      return this.setCurrentUser(r);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, r, n = "authUser") {
    if (!r.length)
      return new ft(xe(ai), e, n);
    const i = (await Promise.all(r.map(async (l) => {
      if (await l._isAvailable())
        return l;
    }))).filter((l) => l);
    let a = i[0] || xe(ai);
    const s = rr(n, e.config.apiKey, e.name);
    let u = null;
    for (const l of r)
      try {
        const f = await l._get(s);
        if (f) {
          const p = it._fromJSON(e, f);
          l !== a && (u = p), a = l;
          break;
        }
      } catch {
      }
    const o = i.filter((l) => l._shouldAllowMigration);
    return !a._shouldAllowMigration || !o.length ? new ft(a, e, n) : (a = o[0], u && await a._set(s, u.toJSON()), await Promise.all(r.map(async (l) => {
      if (l !== a)
        try {
          await l._remove(s);
        } catch {
        }
    })), new ft(a, e, n));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function si(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (Aa(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (Oa(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (Pa(e))
    return "Blackberry";
  if (Da(e))
    return "Webos";
  if (_n(e))
    return "Safari";
  if ((e.includes("chrome/") || ka(e)) && !e.includes("edge/"))
    return "Chrome";
  if (Ca(e))
    return "Android";
  {
    const r = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, n = t.match(r);
    if ((n == null ? void 0 : n.length) === 2)
      return n[1];
  }
  return "Other";
}
function Oa(t = ue()) {
  return /firefox\//i.test(t);
}
function _n(t = ue()) {
  const e = t.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function ka(t = ue()) {
  return /crios\//i.test(t);
}
function Aa(t = ue()) {
  return /iemobile/i.test(t);
}
function Ca(t = ue()) {
  return /android/i.test(t);
}
function Pa(t = ue()) {
  return /blackberry/i.test(t);
}
function Da(t = ue()) {
  return /webos/i.test(t);
}
function wr(t = ue()) {
  return /iphone|ipad|ipod/i.test(t) || /macintosh/i.test(t) && /mobile/i.test(t);
}
function Hu(t = ue()) {
  var e;
  return wr(t) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function Vu() {
  return so() && document.documentMode === 10;
}
function Na(t = ue()) {
  return wr(t) || Ca(t) || Da(t) || Pa(t) || /windows phone/i.test(t) || Aa(t);
}
function zu() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ma(t, e = []) {
  let r;
  switch (t) {
    case "Browser":
      r = si(ue());
      break;
    case "Worker":
      r = `${si(ue())}-${t}`;
      break;
    default:
      r = t;
  }
  const n = e.length ? e.join(",") : "FirebaseCore-web";
  return `${r}/JsCore/${Bt}/${n}`;
}
async function xa(t, e) {
  return Ht(t, "GET", "/v2/recaptchaConfig", Ea(t, e));
}
function oi(t) {
  return t !== void 0 && t.enterprise !== void 0;
}
class La {
  constructor(e) {
    if (this.siteKey = "", this.emailPasswordEnabled = !1, e.recaptchaKey === void 0)
      throw new Error("recaptchaKey undefined");
    this.siteKey = e.recaptchaKey.split("/")[3], this.emailPasswordEnabled = e.recaptchaEnforcementState.some((r) => r.provider === "EMAIL_PASSWORD_PROVIDER" && r.enforcementState !== "OFF");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wu() {
  var t, e;
  return (e = (t = document.getElementsByTagName("head")) === null || t === void 0 ? void 0 : t[0]) !== null && e !== void 0 ? e : document;
}
function Fa(t) {
  return new Promise((e, r) => {
    const n = document.createElement("script");
    n.setAttribute("src", t), n.onload = e, n.onerror = (i) => {
      const a = Re(
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      a.customData = i, r(a);
    }, n.type = "text/javascript", n.charset = "UTF-8", Wu().appendChild(n);
  });
}
function Qu(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
const Ku = "https://www.google.com/recaptcha/enterprise.js?render=", Gu = "recaptcha-enterprise", Ju = "NO_RECAPTCHA";
class Yu {
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(e) {
    this.type = Gu, this.auth = Vt(e);
  }
  /**
   * Executes the verification process.
   *
   * @returns A Promise for a token that can be used to assert the validity of a request.
   */
  async verify(e = "verify", r = !1) {
    async function n(a) {
      if (!r) {
        if (a.tenantId == null && a._agentRecaptchaConfig != null)
          return a._agentRecaptchaConfig.siteKey;
        if (a.tenantId != null && a._tenantRecaptchaConfigs[a.tenantId] !== void 0)
          return a._tenantRecaptchaConfigs[a.tenantId].siteKey;
      }
      return new Promise(async (s, u) => {
        xa(a, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }).then((o) => {
          if (o.recaptchaKey === void 0)
            u(new Error("recaptcha Enterprise site key undefined"));
          else {
            const l = new La(o);
            return a.tenantId == null ? a._agentRecaptchaConfig = l : a._tenantRecaptchaConfigs[a.tenantId] = l, s(l.siteKey);
          }
        }).catch((o) => {
          u(o);
        });
      });
    }
    function i(a, s, u) {
      const o = window.grecaptcha;
      oi(o) ? o.enterprise.ready(() => {
        o.enterprise.execute(a, { action: e }).then((l) => {
          s(l);
        }).catch(() => {
          s(Ju);
        });
      }) : u(Error("No reCAPTCHA enterprise script loaded."));
    }
    return new Promise((a, s) => {
      n(this.auth).then((u) => {
        if (!r && oi(window.grecaptcha))
          i(u, a, s);
        else {
          if (typeof window > "u") {
            s(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          Fa(Ku + u).then(() => {
            i(u, a, s);
          }).catch((o) => {
            s(o);
          });
        }
      }).catch((u) => {
        s(u);
      });
    });
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xu {
  constructor(e) {
    this.auth = e, this.queue = [];
  }
  pushCallback(e, r) {
    const n = (a) => new Promise((s, u) => {
      try {
        const o = e(a);
        s(o);
      } catch (o) {
        u(o);
      }
    });
    n.onAbort = r, this.queue.push(n);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e)
      return;
    const r = [];
    try {
      for (const n of this.queue)
        await n(e), n.onAbort && r.push(n.onAbort);
    } catch (n) {
      r.reverse();
      for (const i of r)
        try {
          i();
        } catch {
        }
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: n == null ? void 0 : n.message
      });
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zu {
  constructor(e, r, n, i) {
    this.app = e, this.heartbeatServiceProvider = r, this.appCheckServiceProvider = n, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new ui(this), this.idTokenSubscription = new ui(this), this.beforeStateQueue = new Xu(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = ba, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion;
  }
  _initializeWithPersistence(e, r) {
    return r && (this._popupRedirectResolver = xe(r)), this._initializationPromise = this.queue(async () => {
      var n, i;
      if (!this._deleted && (this.persistenceManager = await ft.create(this, e), !this._deleted)) {
        if (!((n = this._popupRedirectResolver) === null || n === void 0) && n._shouldInitProactively)
          try {
            await this._popupRedirectResolver._initialize(this);
          } catch {
          }
        await this.initializeCurrentUser(r), this.lastNotifiedUid = ((i = this.currentUser) === null || i === void 0 ? void 0 : i.uid) || null, !this._deleted && (this._isInitialized = !0);
      }
    }), this._initializationPromise;
  }
  /**
   * If the persistence is changed in another window, the user manager will let us know
   */
  async _onStorageEvent() {
    if (this._deleted)
      return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        this._currentUser._assign(e), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(
        e,
        /* skipBeforeStateCallbacks */
        !0
      );
    }
  }
  async initializeCurrentUser(e) {
    var r;
    const n = await this.assertedPersistence.getCurrentUser();
    let i = n, a = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const s = (r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId, u = i == null ? void 0 : i._redirectEventId, o = await this.tryRedirectSignIn(e);
      (!s || s === u) && (o != null && o.user) && (i = o.user, a = !0);
    }
    if (!i)
      return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (a)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (s) {
          i = n, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(s));
        }
      return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null);
    }
    return q(
      this._popupRedirectResolver,
      this,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i);
  }
  async tryRedirectSignIn(e) {
    let r = null;
    try {
      r = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return r;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await dr(e);
    } catch (r) {
      if ((r == null ? void 0 : r.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = ku();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    const r = e ? It(e) : null;
    return r && q(
      r.auth.config.apiKey === this.config.apiKey,
      this,
      "invalid-user-token"
      /* AuthErrorCode.INVALID_AUTH */
    ), this._updateCurrentUser(r && r._clone(this));
  }
  async _updateCurrentUser(e, r = !1) {
    if (!this._deleted)
      return e && q(
        this.tenantId === e.tenantId,
        this,
        "tenant-id-mismatch"
        /* AuthErrorCode.TENANT_ID_MISMATCH */
      ), r || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
        await this.directlySetCurrentUser(e), this.notifyAuthListeners();
      });
  }
  async signOut() {
    return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(
      null,
      /* skipBeforeStateCallbacks */
      !0
    );
  }
  setPersistence(e) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(xe(e));
    });
  }
  async initializeRecaptchaConfig() {
    const e = await xa(this, {
      clientType: "CLIENT_TYPE_WEB",
      version: "RECAPTCHA_ENTERPRISE"
      /* RecaptchaVersion.ENTERPRISE */
    }), r = new La(e);
    this.tenantId == null ? this._agentRecaptchaConfig = r : this._tenantRecaptchaConfigs[this.tenantId] = r, r.emailPasswordEnabled && new Yu(this).verify();
  }
  _getRecaptchaConfig() {
    return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new jt("auth", "Firebase", e());
  }
  onAuthStateChanged(e, r, n) {
    return this.registerStateListener(this.authStateSubscription, e, r, n);
  }
  beforeAuthStateChanged(e, r) {
    return this.beforeStateQueue.pushCallback(e, r);
  }
  onIdTokenChanged(e, r, n) {
    return this.registerStateListener(this.idTokenSubscription, e, r, n);
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON()
    };
  }
  async _setRedirectUser(e, r) {
    const n = await this.getOrInitRedirectPersistenceManager(r);
    return e === null ? n.removeCurrentUser() : n.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const r = e && xe(e) || this._popupRedirectResolver;
      q(
        r,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await ft.create(
        this,
        [xe(r._redirectPersistence)],
        "redirectUser"
        /* KeyName.REDIRECT_USER */
      ), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var r, n;
    return this._isInitialized && await this.queue(async () => {
    }), ((r = this._currentUser) === null || r === void 0 ? void 0 : r._redirectEventId) === e ? this._currentUser : ((n = this.redirectUser) === null || n === void 0 ? void 0 : n._redirectEventId) === e ? this.redirectUser : null;
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  /** Notifies listeners only if the user is current */
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  /** Returns the current user cast as the internal type */
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var e, r;
    if (!this._isInitialized)
      return;
    this.idTokenSubscription.next(this.currentUser);
    const n = (r = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null && r !== void 0 ? r : null;
    this.lastNotifiedUid !== n && (this.lastNotifiedUid = n, this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, r, n, i) {
    if (this._deleted)
      return () => {
      };
    const a = typeof r == "function" ? r : r.next.bind(r), s = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    return q(
      s,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), s.then(() => a(this.currentUser)), typeof r == "function" ? e.addObserver(r, n, i) : e.addObserver(r);
  }
  /**
   * Unprotected (from race conditions) method to set the current user. This
   * should only be called from within a queued callback. This is necessary
   * because the queue shouldn't rely on another queued callback.
   */
  async directlySetCurrentUser(e) {
    this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser();
  }
  queue(e) {
    return this.operations = this.operations.then(e, e), this.operations;
  }
  get assertedPersistence() {
    return q(
      this.persistenceManager,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.persistenceManager;
  }
  _logFramework(e) {
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = Ma(this.config.clientPlatform, this._getFrameworks()));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const r = {
      "X-Client-Version": this.clientVersion
    };
    this.app.options.appId && (r[
      "X-Firebase-gmpid"
      /* HttpHeader.X_FIREBASE_GMPID */
    ] = this.app.options.appId);
    const n = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0
    })) === null || e === void 0 ? void 0 : e.getHeartbeatsHeader());
    n && (r[
      "X-Firebase-Client"
      /* HttpHeader.X_FIREBASE_CLIENT */
    ] = n);
    const i = await this._getAppCheckToken();
    return i && (r[
      "X-Firebase-AppCheck"
      /* HttpHeader.X_FIREBASE_APP_CHECK */
    ] = i), r;
  }
  async _getAppCheckToken() {
    var e;
    const r = await ((e = this.appCheckServiceProvider.getImmediate({ optional: !0 })) === null || e === void 0 ? void 0 : e.getToken());
    return r != null && r.error && wu(`Error while retrieving App Check token: ${r.error}`), r == null ? void 0 : r.token;
  }
}
function Vt(t) {
  return It(t);
}
class ui {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = po((r) => this.observer = r);
  }
  get next() {
    return q(
      this.observer,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.observer.next.bind(this.observer);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ec(t, e) {
  const r = pa(t, "auth");
  if (r.isInitialized()) {
    const i = r.getImmediate(), a = r.getOptions();
    if (ur(a, e ?? {}))
      return i;
    Ae(
      i,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return r.initialize({ options: e });
}
function tc(t, e) {
  const r = (e == null ? void 0 : e.persistence) || [], n = (Array.isArray(r) ? r : [r]).map(xe);
  e != null && e.errorMap && t._updateErrorMap(e.errorMap), t._initializeWithPersistence(n, e == null ? void 0 : e.popupRedirectResolver);
}
function rc(t, e, r) {
  const n = Vt(t);
  q(
    n._canInitEmulator,
    n,
    "emulator-config-failed"
    /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
  ), q(
    /^https?:\/\//.test(e),
    n,
    "invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
  );
  const i = !!(r != null && r.disableWarnings), a = Ua(e), { host: s, port: u } = nc(e), o = u === null ? "" : `:${u}`;
  n.config.emulator = { url: `${a}//${s}${o}/` }, n.settings.appVerificationDisabledForTesting = !0, n.emulatorConfig = Object.freeze({
    host: s,
    port: u,
    protocol: a.replace(":", ""),
    options: Object.freeze({ disableWarnings: i })
  }), i || ic();
}
function Ua(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function nc(t) {
  const e = Ua(t), r = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!r)
    return { host: "", port: null };
  const n = r[2].split("@").pop() || "", i = /^(\[[^\]]+\])(:|$)/.exec(n);
  if (i) {
    const a = i[1];
    return { host: a, port: ci(n.substr(a.length + 1)) };
  } else {
    const [a, s] = n.split(":");
    return { host: a, port: ci(s) };
  }
}
function ci(t) {
  if (!t)
    return null;
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function ic() {
  function t() {
    const e = document.createElement("p"), r = e.style;
    e.innerText = "Running in emulator mode. Do not use with production credentials.", r.position = "fixed", r.width = "100%", r.backgroundColor = "#ffffff", r.border = ".1em solid #000000", r.color = "#b50000", r.bottom = "0px", r.left = "0px", r.margin = "0px", r.zIndex = "10000", r.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e);
  }
  typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", t) : t());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja {
  /** @internal */
  constructor(e, r) {
    this.providerId = e, this.signInMethod = r;
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns a JSON-serializable representation of this object.
   */
  toJSON() {
    return Me("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return Me("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, r) {
    return Me("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return Me("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ht(t, e) {
  return Pu(t, "POST", "/v1/accounts:signInWithIdp", Ea(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ac = "http://localhost";
class Fe extends ja {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const r = new Fe(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (r.idToken = e.idToken), e.accessToken && (r.accessToken = e.accessToken), e.nonce && !e.pendingToken && (r.nonce = e.nonce), e.pendingToken && (r.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (r.accessToken = e.oauthToken, r.secret = e.oauthTokenSecret) : Ae(
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), r;
  }
  /** {@inheritdoc AuthCredential.toJSON}  */
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */
  static fromJSON(e) {
    const r = typeof e == "string" ? JSON.parse(e) : e, { providerId: n, signInMethod: i } = r, a = gn(r, ["providerId", "signInMethod"]);
    if (!n || !i)
      return null;
    const s = new Fe(n, i);
    return s.idToken = a.idToken || void 0, s.accessToken = a.accessToken || void 0, s.secret = a.secret, s.nonce = a.nonce, s.pendingToken = a.pendingToken || null, s;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const r = this.buildRequest();
    return ht(e, r);
  }
  /** @internal */
  _linkToIdToken(e, r) {
    const n = this.buildRequest();
    return n.idToken = r, ht(e, n);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const r = this.buildRequest();
    return r.autoCreate = !1, ht(e, r);
  }
  buildRequest() {
    const e = {
      requestUri: ac,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const r = {};
      this.idToken && (r.id_token = this.idToken), this.accessToken && (r.access_token = this.accessToken), this.secret && (r.oauth_token_secret = this.secret), r.providerId = this.providerId, this.nonce && !this.pendingToken && (r.nonce = this.nonce), e.postBody = qt(r);
    }
    return e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class In {
  /**
   * Constructor for generic OAuth providers.
   *
   * @param providerId - Provider for which credentials should be generated.
   */
  constructor(e) {
    this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {};
  }
  /**
   * Set the language gode.
   *
   * @param languageCode - language code
   */
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  /**
   * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
   * operations.
   *
   * @remarks
   * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
   * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
   *
   * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
   */
  setCustomParameters(e) {
    return this.customParameters = e, this;
  }
  /**
   * Retrieve the current list of {@link CustomParameters}.
   */
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends In {
  constructor() {
    super(...arguments), this.scopes = [];
  }
  /**
   * Add an OAuth scope to the credential.
   *
   * @param scope - Provider OAuth scope to add.
   */
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this;
  }
  /**
   * Retrieve the current list of OAuth scopes.
   */
  getScopes() {
    return [...this.scopes];
  }
}
class pt extends Et {
  /**
   * Creates an {@link OAuthCredential} from a JSON string or a plain object.
   * @param json - A plain object or a JSON string
   */
  static credentialFromJSON(e) {
    const r = typeof e == "string" ? JSON.parse(e) : e;
    return q(
      "providerId" in r && "signInMethod" in r,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), Fe._fromParams(r);
  }
  /**
   * Creates a {@link OAuthCredential} from a generic OAuth provider's access token or ID token.
   *
   * @remarks
   * The raw nonce is required when an ID token with a nonce field is provided. The SHA-256 hash of
   * the raw nonce must match the nonce field in the ID token.
   *
   * @example
   * ```javascript
   * // `googleUser` from the onsuccess Google Sign In callback.
   * // Initialize a generate OAuth provider with a `google.com` providerId.
   * const provider = new OAuthProvider('google.com');
   * const credential = provider.credential({
   *   idToken: googleUser.getAuthResponse().id_token,
   * });
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param params - Either the options object containing the ID token, access token and raw nonce
   * or the ID token string.
   */
  credential(e) {
    return this._credential(Object.assign(Object.assign({}, e), { nonce: e.rawNonce }));
  }
  /** An internal credential method that accepts more permissive options */
  _credential(e) {
    return q(
      e.idToken || e.accessToken,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), Fe._fromParams(Object.assign(Object.assign({}, e), { providerId: this.providerId, signInMethod: this.providerId }));
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return pt.oauthCredentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return pt.oauthCredentialFromTaggedObject(e.customData || {});
  }
  static oauthCredentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: r, oauthAccessToken: n, oauthTokenSecret: i, pendingToken: a, nonce: s, providerId: u } = e;
    if (!n && !i && !r && !a || !u)
      return null;
    try {
      return new pt(u)._credential({
        idToken: r,
        accessToken: n,
        nonce: s,
        pendingToken: a
      });
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie extends Et {
  constructor() {
    super(
      "facebook.com"
      /* ProviderId.FACEBOOK */
    );
  }
  /**
   * Creates a credential for Facebook.
   *
   * @example
   * ```javascript
   * // `event` from the Facebook auth.authResponseChange callback.
   * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param accessToken - Facebook access token.
   */
  static credential(e) {
    return Fe._fromParams({
      providerId: Ie.PROVIDER_ID,
      signInMethod: Ie.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Ie.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Ie.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return Ie.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Ie.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Ie.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee extends Et {
  constructor() {
    super(
      "google.com"
      /* ProviderId.GOOGLE */
    ), this.addScope("profile");
  }
  /**
   * Creates a credential for Google. At least one of ID token and access token is required.
   *
   * @example
   * ```javascript
   * // \`googleUser\` from the onsuccess Google Sign In callback.
   * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param idToken - Google ID token.
   * @param accessToken - Google access token.
   */
  static credential(e, r) {
    return Fe._fromParams({
      providerId: Ee.PROVIDER_ID,
      signInMethod: Ee.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: r
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Ee.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Ee.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: r, oauthAccessToken: n } = e;
    if (!r && !n)
      return null;
    try {
      return Ee.credential(r, n);
    } catch {
      return null;
    }
  }
}
Ee.GOOGLE_SIGN_IN_METHOD = "google.com";
Ee.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te extends Et {
  constructor() {
    super(
      "github.com"
      /* ProviderId.GITHUB */
    );
  }
  /**
   * Creates a credential for Github.
   *
   * @param accessToken - Github access token.
   */
  static credential(e) {
    return Fe._fromParams({
      providerId: Te.PROVIDER_ID,
      signInMethod: Te.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Te.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Te.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return Te.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Te.GITHUB_SIGN_IN_METHOD = "github.com";
Te.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we extends Et {
  constructor() {
    super(
      "twitter.com"
      /* ProviderId.TWITTER */
    );
  }
  /**
   * Creates a credential for Twitter.
   *
   * @param token - Twitter access token.
   * @param secret - Twitter secret.
   */
  static credential(e, r) {
    return Fe._fromParams({
      providerId: we.PROVIDER_ID,
      signInMethod: we.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: r
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return we.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return we.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: r, oauthTokenSecret: n } = e;
    if (!r || !n)
      return null;
    try {
      return we.credential(r, n);
    } catch {
      return null;
    }
  }
}
we.TWITTER_SIGN_IN_METHOD = "twitter.com";
we.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static async _fromIdTokenResponse(e, r, n, i = !1) {
    const a = await it._fromIdTokenResponse(e, n, i), s = li(n);
    return new gt({
      user: a,
      providerId: s,
      _tokenResponse: n,
      operationType: r
    });
  }
  static async _forOperation(e, r, n) {
    await e._updateTokensIfNecessary(
      n,
      /* reload */
      !0
    );
    const i = li(n);
    return new gt({
      user: e,
      providerId: i,
      _tokenResponse: n,
      operationType: r
    });
  }
}
function li(t) {
  return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr extends Ke {
  constructor(e, r, n, i) {
    var a;
    super(r.code, r.message), this.operationType = n, this.user = i, Object.setPrototypeOf(this, fr.prototype), this.customData = {
      appName: e.name,
      tenantId: (a = e.tenantId) !== null && a !== void 0 ? a : void 0,
      _serverResponse: r.customData._serverResponse,
      operationType: n
    };
  }
  static _fromErrorAndOperation(e, r, n, i) {
    return new fr(e, r, n, i);
  }
}
function qa(t, e, r, n) {
  return (e === "reauthenticate" ? r._getReauthenticationResolver(t) : r._getIdTokenResponse(t)).catch((a) => {
    throw a.code === "auth/multi-factor-auth-required" ? fr._fromErrorAndOperation(t, a, e, n) : a;
  });
}
async function sc(t, e, r = !1) {
  const n = await Mt(t, e._linkToIdToken(t.auth, await t.getIdToken()), r);
  return gt._forOperation(t, "link", n);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function oc(t, e, r = !1) {
  const { auth: n } = t, i = "reauthenticate";
  try {
    const a = await Mt(t, qa(n, i, e, t), r);
    q(
      a.idToken,
      n,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const s = bn(a.idToken);
    q(
      s,
      n,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const { sub: u } = s;
    return q(
      t.uid === u,
      n,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), gt._forOperation(t, i, a);
  } catch (a) {
    throw (a == null ? void 0 : a.code) === "auth/user-not-found" && Ae(
      n,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), a;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function uc(t, e, r = !1) {
  const n = "signIn", i = await qa(t, n, e), a = await gt._fromIdTokenResponse(t, n, i);
  return r || await t._updateCurrentUser(a.user), a;
}
function cc(t, e, r, n) {
  return It(t).onIdTokenChanged(e, r, n);
}
function lc(t, e, r) {
  return It(t).beforeAuthStateChanged(e, r);
}
const hr = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba {
  constructor(e, r) {
    this.storageRetriever = e, this.type = r;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(hr, "1"), this.storage.removeItem(hr), Promise.resolve(!0)) : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, r) {
    return this.storage.setItem(e, JSON.stringify(r)), Promise.resolve();
  }
  _get(e) {
    const r = this.storage.getItem(e);
    return Promise.resolve(r ? JSON.parse(r) : null);
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dc() {
  const t = ue();
  return _n(t) || wr(t);
}
const fc = 1e3, hc = 10;
class $a extends Ba {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, r) => this.onStorageEvent(e, r), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = dc() && zu(), this.fallbackToPolling = Na(), this._shouldAllowMigration = !0;
  }
  forAllChangedKeys(e) {
    for (const r of Object.keys(this.listeners)) {
      const n = this.storage.getItem(r), i = this.localCache[r];
      n !== i && e(r, i, n);
    }
  }
  onStorageEvent(e, r = !1) {
    if (!e.key) {
      this.forAllChangedKeys((s, u, o) => {
        this.notifyListeners(s, o);
      });
      return;
    }
    const n = e.key;
    if (r ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
      const s = this.storage.getItem(n);
      if (e.newValue !== s)
        e.newValue !== null ? this.storage.setItem(n, e.newValue) : this.storage.removeItem(n);
      else if (this.localCache[n] === e.newValue && !r)
        return;
    }
    const i = () => {
      const s = this.storage.getItem(n);
      !r && this.localCache[n] === s || this.notifyListeners(n, s);
    }, a = this.storage.getItem(n);
    Vu() && a !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, hc) : i();
  }
  notifyListeners(e, r) {
    this.localCache[e] = r;
    const n = this.listeners[e];
    if (n)
      for (const i of Array.from(n))
        i(r && JSON.parse(r));
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((e, r, n) => {
        this.onStorageEvent(
          new StorageEvent("storage", {
            key: e,
            oldValue: r,
            newValue: n
          }),
          /* poll */
          !0
        );
      });
    }, fc);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(e, r) {
    Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(r);
  }
  _removeListener(e, r) {
    this.listeners[e] && (this.listeners[e].delete(r), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling());
  }
  // Update local cache on base operations:
  async _set(e, r) {
    await super._set(e, r), this.localCache[e] = JSON.stringify(r);
  }
  async _get(e) {
    const r = await super._get(e);
    return this.localCache[e] = JSON.stringify(r), r;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
$a.type = "LOCAL";
const pc = $a;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ha extends Ba {
  constructor() {
    super(
      () => window.sessionStorage,
      "SESSION"
      /* PersistenceType.SESSION */
    );
  }
  _addListener(e, r) {
  }
  _removeListener(e, r) {
  }
}
Ha.type = "SESSION";
const Va = Ha;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vc(t) {
  return Promise.all(t.map(async (e) => {
    try {
      return {
        fulfilled: !0,
        value: await e
      };
    } catch (r) {
      return {
        fulfilled: !1,
        reason: r
      };
    }
  }));
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sr {
  constructor(e) {
    this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this);
  }
  /**
   * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
   *
   * @param eventTarget - An event target (such as window or self) through which the underlying
   * messages will be received.
   */
  static _getInstance(e) {
    const r = this.receivers.find((i) => i.isListeningto(e));
    if (r)
      return r;
    const n = new Sr(e);
    return this.receivers.push(n), n;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  /**
   * Fans out a MessageEvent to the appropriate listeners.
   *
   * @remarks
   * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
   * finished processing.
   *
   * @param event - The MessageEvent.
   *
   */
  async handleEvent(e) {
    const r = e, { eventId: n, eventType: i, data: a } = r.data, s = this.handlersMap[i];
    if (!(s != null && s.size))
      return;
    r.ports[0].postMessage({
      status: "ack",
      eventId: n,
      eventType: i
    });
    const u = Array.from(s).map(async (l) => l(r.origin, a)), o = await vc(u);
    r.ports[0].postMessage({
      status: "done",
      eventId: n,
      eventType: i,
      response: o
    });
  }
  /**
   * Subscribe an event handler for a particular event.
   *
   * @param eventType - Event name to subscribe to.
   * @param eventHandler - The event handler which should receive the events.
   *
   */
  _subscribe(e, r) {
    Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = /* @__PURE__ */ new Set()), this.handlersMap[e].add(r);
  }
  /**
   * Unsubscribe an event handler from a particular event.
   *
   * @param eventType - Event name to unsubscribe from.
   * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
   *
   */
  _unsubscribe(e, r) {
    this.handlersMap[e] && r && this.handlersMap[e].delete(r), (!r || this.handlersMap[e].size === 0) && delete this.handlersMap[e], Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
Sr.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function En(t = "", e = 10) {
  let r = "";
  for (let n = 0; n < e; n++)
    r += Math.floor(Math.random() * 10);
  return t + r;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gc {
  constructor(e) {
    this.target = e, this.handlers = /* @__PURE__ */ new Set();
  }
  /**
   * Unsubscribe the handler and remove it from our tracking Set.
   *
   * @param handler - The handler to unsubscribe.
   */
  removeMessageHandler(e) {
    e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e);
  }
  /**
   * Send a message to the Receiver located at {@link target}.
   *
   * @remarks
   * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
   * receiver has had a chance to fully process the event.
   *
   * @param eventType - Type of event to send.
   * @param data - The payload of the event.
   * @param timeout - Timeout for waiting on an ACK from the receiver.
   *
   * @returns An array of settled promises from all the handlers that were listening on the receiver.
   */
  async _send(e, r, n = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i)
      throw new Error(
        "connection_unavailable"
        /* _MessageError.CONNECTION_UNAVAILABLE */
      );
    let a, s;
    return new Promise((u, o) => {
      const l = En("", 20);
      i.port1.start();
      const f = setTimeout(() => {
        o(new Error(
          "unsupported_event"
          /* _MessageError.UNSUPPORTED_EVENT */
        ));
      }, n);
      s = {
        messageChannel: i,
        onMessage(p) {
          const m = p;
          if (m.data.eventId === l)
            switch (m.data.status) {
              case "ack":
                clearTimeout(f), a = setTimeout(
                  () => {
                    o(new Error(
                      "timeout"
                      /* _MessageError.TIMEOUT */
                    ));
                  },
                  3e3
                  /* _TimeoutDuration.COMPLETION */
                );
                break;
              case "done":
                clearTimeout(a), u(m.data.response);
                break;
              default:
                clearTimeout(f), clearTimeout(a), o(new Error(
                  "invalid_response"
                  /* _MessageError.INVALID_RESPONSE */
                ));
                break;
            }
        }
      }, this.handlers.add(s), i.port1.addEventListener("message", s.onMessage), this.target.postMessage({
        eventType: e,
        eventId: l,
        data: r
      }, [i.port2]);
    }).finally(() => {
      s && this.removeMessageHandler(s);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oe() {
  return window;
}
function mc(t) {
  Oe().location.href = t;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function za() {
  return typeof Oe().WorkerGlobalScope < "u" && typeof Oe().importScripts == "function";
}
async function yc() {
  if (!(navigator != null && navigator.serviceWorker))
    return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function bc() {
  var t;
  return ((t = navigator == null ? void 0 : navigator.serviceWorker) === null || t === void 0 ? void 0 : t.controller) || null;
}
function _c() {
  return za() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wa = "firebaseLocalStorageDb", Ic = 1, pr = "firebaseLocalStorage", Qa = "fbase_key";
class zt {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, r) => {
      this.request.addEventListener("success", () => {
        e(this.request.result);
      }), this.request.addEventListener("error", () => {
        r(this.request.error);
      });
    });
  }
}
function Rr(t, e) {
  return t.transaction([pr], e ? "readwrite" : "readonly").objectStore(pr);
}
function Ec() {
  const t = indexedDB.deleteDatabase(Wa);
  return new zt(t).toPromise();
}
function nn() {
  const t = indexedDB.open(Wa, Ic);
  return new Promise((e, r) => {
    t.addEventListener("error", () => {
      r(t.error);
    }), t.addEventListener("upgradeneeded", () => {
      const n = t.result;
      try {
        n.createObjectStore(pr, { keyPath: Qa });
      } catch (i) {
        r(i);
      }
    }), t.addEventListener("success", async () => {
      const n = t.result;
      n.objectStoreNames.contains(pr) ? e(n) : (n.close(), await Ec(), e(await nn()));
    });
  });
}
async function di(t, e, r) {
  const n = Rr(t, !0).put({
    [Qa]: e,
    value: r
  });
  return new zt(n).toPromise();
}
async function Tc(t, e) {
  const r = Rr(t, !1).get(e), n = await new zt(r).toPromise();
  return n === void 0 ? null : n.value;
}
function fi(t, e) {
  const r = Rr(t, !0).delete(e);
  return new zt(r).toPromise();
}
const wc = 800, Sc = 3;
class Ka {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await nn(), this.db);
  }
  async _withRetries(e) {
    let r = 0;
    for (; ; )
      try {
        const n = await this._openDb();
        return await e(n);
      } catch (n) {
        if (r++ > Sc)
          throw n;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return za() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = Sr._getInstance(_c()), this.receiver._subscribe("keyChanged", async (e, r) => ({
      keyProcessed: (await this._poll()).includes(r.key)
    })), this.receiver._subscribe("ping", async (e, r) => [
      "keyChanged"
      /* _EventType.KEY_CHANGED */
    ]);
  }
  /**
   * As the main window, we should let the worker know when keys change (set and remove).
   *
   * @remarks
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
   * may not resolve.
   */
  async initializeSender() {
    var e, r;
    if (this.activeServiceWorker = await yc(), !this.activeServiceWorker)
      return;
    this.sender = new gc(this.activeServiceWorker);
    const n = await this.sender._send(
      "ping",
      {},
      800
      /* _TimeoutDuration.LONG_ACK */
    );
    n && !((e = n[0]) === null || e === void 0) && e.fulfilled && !((r = n[0]) === null || r === void 0) && r.value.includes(
      "keyChanged"
      /* _EventType.KEY_CHANGED */
    ) && (this.serviceWorkerReceiverAvailable = !0);
  }
  /**
   * Let the worker know about a changed key, the exact key doesn't technically matter since the
   * worker will just trigger a full sync anyway.
   *
   * @remarks
   * For now, we only support one service worker per page.
   *
   * @param key - Storage key which changed.
   */
  async notifyServiceWorker(e) {
    if (!(!this.sender || !this.activeServiceWorker || bc() !== this.activeServiceWorker))
      try {
        await this.sender._send(
          "keyChanged",
          { key: e },
          // Use long timeout if receiver has previously responded to a ping from us.
          this.serviceWorkerReceiverAvailable ? 800 : 50
          /* _TimeoutDuration.ACK */
        );
      } catch {
      }
  }
  async _isAvailable() {
    try {
      if (!indexedDB)
        return !1;
      const e = await nn();
      return await di(e, hr, "1"), await fi(e, hr), !0;
    } catch {
    }
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, r) {
    return this._withPendingWrite(async () => (await this._withRetries((n) => di(n, e, r)), this.localCache[e] = r, this.notifyServiceWorker(e)));
  }
  async _get(e) {
    const r = await this._withRetries((n) => Tc(n, e));
    return this.localCache[e] = r, r;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((r) => fi(r, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const a = Rr(i, !1).getAll();
      return new zt(a).toPromise();
    });
    if (!e)
      return [];
    if (this.pendingWrites !== 0)
      return [];
    const r = [], n = /* @__PURE__ */ new Set();
    for (const { fbase_key: i, value: a } of e)
      n.add(i), JSON.stringify(this.localCache[i]) !== JSON.stringify(a) && (this.notifyListeners(i, a), r.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] && !n.has(i) && (this.notifyListeners(i, null), r.push(i));
    return r;
  }
  notifyListeners(e, r) {
    this.localCache[e] = r;
    const n = this.listeners[e];
    if (n)
      for (const i of Array.from(n))
        i(r);
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), wc);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  _addListener(e, r) {
    Object.keys(this.listeners).length === 0 && this.startPolling(), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this._get(e)), this.listeners[e].add(r);
  }
  _removeListener(e, r) {
    this.listeners[e] && (this.listeners[e].delete(r), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Ka.type = "LOCAL";
const Rc = Ka;
new $t(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ga(t, e) {
  return e ? xe(e) : (q(
    t._popupRedirectResolver,
    t,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  ), t._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tn extends ja {
  constructor(e) {
    super(
      "custom",
      "custom"
      /* ProviderId.CUSTOM */
    ), this.params = e;
  }
  _getIdTokenResponse(e) {
    return ht(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, r) {
    return ht(e, this._buildIdpRequest(r));
  }
  _getReauthenticationResolver(e) {
    return ht(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const r = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0
    };
    return e && (r.idToken = e), r;
  }
}
function Oc(t) {
  return uc(t.auth, new Tn(t), t.bypassAuthState);
}
function kc(t) {
  const { auth: e, user: r } = t;
  return q(
    r,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), oc(r, new Tn(t), t.bypassAuthState);
}
async function Ac(t) {
  const { auth: e, user: r } = t;
  return q(
    r,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), sc(r, new Tn(t), t.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja {
  constructor(e, r, n, i, a = !1) {
    this.auth = e, this.resolver = n, this.user = i, this.bypassAuthState = a, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(r) ? r : [r];
  }
  execute() {
    return new Promise(async (e, r) => {
      this.pendingPromise = { resolve: e, reject: r };
      try {
        this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this);
      } catch (n) {
        this.reject(n);
      }
    });
  }
  async onAuthEvent(e) {
    const { urlResponse: r, sessionId: n, postBody: i, tenantId: a, error: s, type: u } = e;
    if (s) {
      this.reject(s);
      return;
    }
    const o = {
      auth: this.auth,
      requestUri: r,
      sessionId: n,
      tenantId: a || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(u)(o));
    } catch (l) {
      this.reject(l);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return Oc;
      case "linkViaPopup":
      case "linkViaRedirect":
        return Ac;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return kc;
      default:
        Ae(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    Le(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    Le(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cc = new $t(2e3, 1e4);
async function Wt(t, e, r) {
  const n = Vt(t);
  Su(t, e, In);
  const i = Ga(n, r);
  return new rt(n, "signInViaPopup", e, i).executeNotNull();
}
class rt extends Ja {
  constructor(e, r, n, i, a) {
    super(e, r, i, a), this.provider = n, this.authWindow = null, this.pollId = null, rt.currentPopupAction && rt.currentPopupAction.cancel(), rt.currentPopupAction = this;
  }
  async executeNotNull() {
    const e = await this.execute();
    return q(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), e;
  }
  async onExecution() {
    Le(this.filter.length === 1, "Popup operations only handle one event");
    const e = En();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      e
    ), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((r) => {
      this.reject(r);
    }), this.resolver._isIframeWebStorageSupported(this.auth, (r) => {
      r || this.reject(Re(
        this.auth,
        "web-storage-unsupported"
        /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
      ));
    }), this.pollUserCancellation();
  }
  get eventId() {
    var e;
    return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null;
  }
  cancel() {
    this.reject(Re(
      this.auth,
      "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, rt.currentPopupAction = null;
  }
  pollUserCancellation() {
    const e = () => {
      var r, n;
      if (!((n = (r = this.authWindow) === null || r === void 0 ? void 0 : r.window) === null || n === void 0) && n.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(Re(
              this.auth,
              "popup-closed-by-user"
              /* AuthErrorCode.POPUP_CLOSED_BY_USER */
            ));
          },
          8e3
          /* _Timeout.AUTH_EVENT */
        );
        return;
      }
      this.pollId = window.setTimeout(e, Cc.get());
    };
    e();
  }
}
rt.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pc = "pendingRedirect", nr = /* @__PURE__ */ new Map();
class Dc extends Ja {
  constructor(e, r, n = !1) {
    super(e, [
      "signInViaRedirect",
      "linkViaRedirect",
      "reauthViaRedirect",
      "unknown"
      /* AuthEventType.UNKNOWN */
    ], r, void 0, n), this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */
  async execute() {
    let e = nr.get(this.auth._key());
    if (!e) {
      try {
        const n = await Nc(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(n);
      } catch (r) {
        e = () => Promise.reject(r);
      }
      nr.set(this.auth._key(), e);
    }
    return this.bypassAuthState || nr.set(this.auth._key(), () => Promise.resolve(null)), e();
  }
  async onAuthEvent(e) {
    if (e.type === "signInViaRedirect")
      return super.onAuthEvent(e);
    if (e.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const r = await this.auth._redirectUserForId(e.eventId);
      if (r)
        return this.user = r, super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {
  }
  cleanUp() {
  }
}
async function Nc(t, e) {
  const r = Lc(e), n = xc(t);
  if (!await n._isAvailable())
    return !1;
  const i = await n._get(r) === "true";
  return await n._remove(r), i;
}
function Mc(t, e) {
  nr.set(t._key(), e);
}
function xc(t) {
  return xe(t._redirectPersistence);
}
function Lc(t) {
  return rr(Pc, t.config.apiKey, t.name);
}
async function Fc(t, e, r = !1) {
  const n = Vt(t), i = Ga(n, e), s = await new Dc(n, i, r).execute();
  return s && !r && (delete s.user._redirectEventId, await n._persistUserIfCurrent(s.user), await n._setRedirectUser(null, e)), s;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Uc = 10 * 60 * 1e3;
class jc {
  constructor(e) {
    this.auth = e, this.cachedEventUids = /* @__PURE__ */ new Set(), this.consumers = /* @__PURE__ */ new Set(), this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(e) {
    this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null);
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e))
      return !1;
    let r = !1;
    return this.consumers.forEach((n) => {
      this.isEventForConsumer(e, n) && (r = !0, this.sendToConsumer(e, n), this.saveEventToCache(e));
    }), this.hasHandledPotentialRedirect || !qc(e) || (this.hasHandledPotentialRedirect = !0, r || (this.queuedRedirectEvent = e, r = !0)), r;
  }
  sendToConsumer(e, r) {
    var n;
    if (e.error && !Ya(e)) {
      const i = ((n = e.error.code) === null || n === void 0 ? void 0 : n.split("auth/")[1]) || "internal-error";
      r.onError(Re(this.auth, i));
    } else
      r.onAuthEvent(e);
  }
  isEventForConsumer(e, r) {
    const n = r.eventId === null || !!e.eventId && e.eventId === r.eventId;
    return r.filter.includes(e.type) && n;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= Uc && this.cachedEventUids.clear(), this.cachedEventUids.has(hi(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(hi(e)), this.lastProcessedEventTime = Date.now();
  }
}
function hi(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join("-");
}
function Ya({ type: t, error: e }) {
  return t === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event";
}
function qc(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Ya(t);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Bc(t, e = {}) {
  return Ht(t, "GET", "/v1/projects", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $c = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, Hc = /^https?/;
async function Vc(t) {
  if (t.config.emulator)
    return;
  const { authorizedDomains: e } = await Bc(t);
  for (const r of e)
    try {
      if (zc(r))
        return;
    } catch {
    }
  Ae(
    t,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function zc(t) {
  const e = rn(), { protocol: r, hostname: n } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const s = new URL(t);
    return s.hostname === "" && n === "" ? r === "chrome-extension:" && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : r === "chrome-extension:" && s.hostname === n;
  }
  if (!Hc.test(r))
    return !1;
  if ($c.test(t))
    return n === t;
  const i = t.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(n);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wc = new $t(3e4, 6e4);
function pi() {
  const t = Oe().___jsl;
  if (t != null && t.H) {
    for (const e of Object.keys(t.H))
      if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = [...t.H[e].L], t.CP)
        for (let r = 0; r < t.CP.length; r++)
          t.CP[r] = null;
  }
}
function Qc(t) {
  return new Promise((e, r) => {
    var n, i, a;
    function s() {
      pi(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          pi(), r(Re(
            t,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: Wc.get()
      });
    }
    if (!((i = (n = Oe().gapi) === null || n === void 0 ? void 0 : n.iframes) === null || i === void 0) && i.Iframe)
      e(gapi.iframes.getContext());
    else if (!((a = Oe().gapi) === null || a === void 0) && a.load)
      s();
    else {
      const u = Qu("iframefcb");
      return Oe()[u] = () => {
        gapi.load ? s() : r(Re(
          t,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, Fa(`https://apis.google.com/js/api.js?onload=${u}`).catch((o) => r(o));
    }
  }).catch((e) => {
    throw ir = null, e;
  });
}
let ir = null;
function Kc(t) {
  return ir = ir || Qc(t), ir;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gc = new $t(5e3, 15e3), Jc = "__/auth/iframe", Yc = "emulator/auth/iframe", Xc = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, Zc = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function el(t) {
  const e = t.config;
  q(
    e.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const r = e.emulator ? yn(e, Yc) : `https://${t.config.authDomain}/${Jc}`, n = {
    apiKey: e.apiKey,
    appName: t.name,
    v: Bt
  }, i = Zc.get(t.config.apiHost);
  i && (n.eid = i);
  const a = t._getFrameworks();
  return a.length && (n.fw = a.join(",")), `${r}?${qt(n).slice(1)}`;
}
async function tl(t) {
  const e = await Kc(t), r = Oe().gapi;
  return q(
    r,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: el(t),
    messageHandlersFilter: r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: Xc,
    dontclear: !0
  }, (n) => new Promise(async (i, a) => {
    await n.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const s = Re(
      t,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), u = Oe().setTimeout(() => {
      a(s);
    }, Gc.get());
    function o() {
      Oe().clearTimeout(u), i(n);
    }
    n.ping(o).then(o, () => {
      a(s);
    });
  }));
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rl = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, nl = 500, il = 600, al = "_blank", sl = "http://localhost";
class vi {
  constructor(e) {
    this.window = e, this.associatedEvent = null;
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {
      }
  }
}
function ol(t, e, r, n = nl, i = il) {
  const a = Math.max((window.screen.availHeight - i) / 2, 0).toString(), s = Math.max((window.screen.availWidth - n) / 2, 0).toString();
  let u = "";
  const o = Object.assign(Object.assign({}, rl), {
    width: n.toString(),
    height: i.toString(),
    top: a,
    left: s
  }), l = ue().toLowerCase();
  r && (u = ka(l) ? al : r), Oa(l) && (e = e || sl, o.scrollbars = "yes");
  const f = Object.entries(o).reduce((m, [d, E]) => `${m}${d}=${E},`, "");
  if (Hu(l) && u !== "_self")
    return ul(e || "", u), new vi(null);
  const p = window.open(e || "", u, f);
  q(
    p,
    t,
    "popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
  );
  try {
    p.focus();
  } catch {
  }
  return new vi(p);
}
function ul(t, e) {
  const r = document.createElement("a");
  r.href = t, r.target = e;
  const n = document.createEvent("MouseEvent");
  n.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), r.dispatchEvent(n);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cl = "__/auth/handler", ll = "emulator/auth/handler", dl = encodeURIComponent("fac");
async function gi(t, e, r, n, i, a) {
  q(
    t.config.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  ), q(
    t.config.apiKey,
    t,
    "invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */
  );
  const s = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: r,
    redirectUrl: n,
    v: Bt,
    eventId: i
  };
  if (e instanceof In) {
    e.setDefaultLanguage(t.languageCode), s.providerId = e.providerId || "", ho(e.getCustomParameters()) || (s.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [f, p] of Object.entries(a || {}))
      s[f] = p;
  }
  if (e instanceof Et) {
    const f = e.getScopes().filter((p) => p !== "");
    f.length > 0 && (s.scopes = f.join(","));
  }
  t.tenantId && (s.tid = t.tenantId);
  const u = s;
  for (const f of Object.keys(u))
    u[f] === void 0 && delete u[f];
  const o = await t._getAppCheckToken(), l = o ? `#${dl}=${encodeURIComponent(o)}` : "";
  return `${fl(t)}?${qt(u).slice(1)}${l}`;
}
function fl({ config: t }) {
  return t.emulator ? yn(t, ll) : `https://${t.authDomain}/${cl}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Br = "webStorageSupport";
class hl {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = Va, this._completeRedirectFn = Fc, this._overrideRedirectResult = Mc;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, r, n, i) {
    var a;
    Le((a = this.eventManagers[e._key()]) === null || a === void 0 ? void 0 : a.manager, "_initialize() not called before _openPopup()");
    const s = await gi(e, r, n, rn(), i);
    return ol(e, s, En());
  }
  async _openRedirect(e, r, n, i) {
    await this._originValidation(e);
    const a = await gi(e, r, n, rn(), i);
    return mc(a), new Promise(() => {
    });
  }
  _initialize(e) {
    const r = e._key();
    if (this.eventManagers[r]) {
      const { manager: i, promise: a } = this.eventManagers[r];
      return i ? Promise.resolve(i) : (Le(a, "If manager is not set, promise should be"), a);
    }
    const n = this.initAndGetManager(e);
    return this.eventManagers[r] = { promise: n }, n.catch(() => {
      delete this.eventManagers[r];
    }), n;
  }
  async initAndGetManager(e) {
    const r = await tl(e), n = new jc(e);
    return r.register("authEvent", (i) => (q(
      i == null ? void 0 : i.authEvent,
      e,
      "invalid-auth-event"
      /* AuthErrorCode.INVALID_AUTH_EVENT */
    ), {
      status: n.onEvent(i.authEvent) ? "ACK" : "ERROR"
      /* GapiOutcome.ERROR */
    }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = { manager: n }, this.iframes[e._key()] = r, n;
  }
  _isIframeWebStorageSupported(e, r) {
    this.iframes[e._key()].send(Br, { type: Br }, (i) => {
      var a;
      const s = (a = i == null ? void 0 : i[0]) === null || a === void 0 ? void 0 : a[Br];
      s !== void 0 && r(!!s), Ae(
        e,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const r = e._key();
    return this.originValidationPromises[r] || (this.originValidationPromises[r] = Vc(e)), this.originValidationPromises[r];
  }
  get _shouldInitProactively() {
    return Na() || _n() || wr();
  }
}
const pl = hl;
var mi = "@firebase/auth", yi = "0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vl {
  constructor(e) {
    this.auth = e, this.internalListeners = /* @__PURE__ */ new Map();
  }
  getUid() {
    var e;
    return this.assertAuthConfigured(), ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) || null;
  }
  async getToken(e) {
    return this.assertAuthConfigured(), await this.auth._initializationPromise, this.auth.currentUser ? { accessToken: await this.auth.currentUser.getIdToken(e) } : null;
  }
  addAuthTokenListener(e) {
    if (this.assertAuthConfigured(), this.internalListeners.has(e))
      return;
    const r = this.auth.onIdTokenChanged((n) => {
      e((n == null ? void 0 : n.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(e, r), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const r = this.internalListeners.get(e);
    r && (this.internalListeners.delete(e), r(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    q(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
      /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gl(t) {
  switch (t) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return;
  }
}
function ml(t) {
  Dt(new vt(
    "auth",
    (e, { options: r }) => {
      const n = e.getProvider("app").getImmediate(), i = e.getProvider("heartbeat"), a = e.getProvider("app-check-internal"), { apiKey: s, authDomain: u } = n.options;
      q(s && !s.includes(":"), "invalid-api-key", { appName: n.name });
      const o = {
        apiKey: s,
        authDomain: u,
        clientPlatform: t,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: Ma(t)
      }, l = new Zu(n, i, a, o);
      return tc(l, r), l;
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  ).setInstanceCreatedCallback((e, r, n) => {
    e.getProvider(
      "auth-internal"
      /* _ComponentName.AUTH_INTERNAL */
    ).initialize();
  })), Dt(new vt(
    "auth-internal",
    (e) => {
      const r = Vt(e.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((n) => new vl(n))(r);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), dt(mi, yi, gl(t)), dt(mi, yi, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yl = 5 * 60, bl = la("authIdTokenMaxAge") || yl;
let bi = null;
const _l = (t) => async (e) => {
  const r = e && await e.getIdTokenResult(), n = r && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(r.issuedAtTime)) / 1e3;
  if (n && n > bl)
    return;
  const i = r == null ? void 0 : r.token;
  bi !== i && (bi = i, await fetch(t, {
    method: i ? "POST" : "DELETE",
    headers: i ? {
      Authorization: `Bearer ${i}`
    } : {}
  }));
};
function Il(t = hu()) {
  const e = pa(t, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const r = ec(t, {
    popupRedirectResolver: pl,
    persistence: [
      Rc,
      pc,
      Va
    ]
  }), n = la("authTokenSyncURL");
  if (n) {
    const a = _l(n);
    lc(r, a, () => a(r.currentUser)), cc(r, (s) => a(s));
  }
  const i = to("auth");
  return i && rc(r, `http://${i}`), r;
}
ml(
  "Browser"
  /* ClientPlatform.BROWSER */
);
var El = "firebase", Tl = "9.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
dt(El, Tl, "app");
const wl = () => Object.keys(ie.firebaseConfig).length !== 0, Qt = () => {
  const t = va(ie.firebaseConfig);
  return Il(t);
}, Xa = new Ee();
Xa.setCustomParameters({ prompt: "select_account" });
const Za = new Ie();
Za.addScope("public_profile");
const Sl = new we(), Rl = new Te(), Ol = new pt("microsoft.com").setCustomParameters({
  // Force re-consent.
  prompt: "consent",
  // Target specific email with login hint.
  login_hint: "user@firstadd.onmicrosoft.com",
  tenant: "1bd1e0fb-f970-45f0-a49d-e80107b0e6f3"
});
function ne(t) {
  for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  if (process.env.NODE_ENV !== "production") {
    var i = Fl[t], a = i ? typeof i == "function" ? i.apply(null, r) : i : "unknown error nr: " + t;
    throw Error("[Immer] " + a);
  }
  throw Error("[Immer] minified error nr: " + t + (r.length ? " " + r.map(function(s) {
    return "'" + s + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function Ue(t) {
  return !!t && !!t[pe];
}
function je(t) {
  var e;
  return !!t && (function(r) {
    if (!r || typeof r != "object")
      return !1;
    var n = Object.getPrototypeOf(r);
    if (n === null)
      return !0;
    var i = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
    return i === Object || typeof i == "function" && Function.toString.call(i) === Ul;
  }(t) || Array.isArray(t) || !!t[Pt] || !!(!((e = t.constructor) === null || e === void 0) && e[Pt]) || Or(t) || kr(t));
}
function kl(t) {
  return Ue(t) || ne(23, t), t[pe].t;
}
function mt(t, e, r) {
  r === void 0 && (r = !1), Qe(t) === 0 ? (r ? Object.keys : An)(t).forEach(function(n) {
    r && typeof n == "symbol" || e(n, t[n], t);
  }) : t.forEach(function(n, i) {
    return e(i, n, t);
  });
}
function Qe(t) {
  var e = t[pe];
  return e ? e.i > 3 ? e.i - 4 : e.i : Array.isArray(t) ? 1 : Or(t) ? 2 : kr(t) ? 3 : 0;
}
function Lt(t, e) {
  return Qe(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function ar(t, e) {
  return Qe(t) === 2 ? t.get(e) : t[e];
}
function es(t, e, r) {
  var n = Qe(t);
  n === 2 ? t.set(e, r) : n === 3 ? t.add(r) : t[e] = r;
}
function Al(t, e) {
  return t === e ? t !== 0 || 1 / t == 1 / e : t != t && e != e;
}
function Or(t) {
  return xl && t instanceof Map;
}
function kr(t) {
  return Ll && t instanceof Set;
}
function Ze(t) {
  return t.o || t.t;
}
function wn(t) {
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  var e = jl(t);
  delete e[pe];
  for (var r = An(e), n = 0; n < r.length; n++) {
    var i = r[n], a = e[i];
    a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (e[i] = { configurable: !0, writable: !0, enumerable: a.enumerable, value: t[i] });
  }
  return Object.create(Object.getPrototypeOf(t), e);
}
function Sn(t, e) {
  return e === void 0 && (e = !1), Rn(t) || Ue(t) || !je(t) || (Qe(t) > 1 && (t.set = t.add = t.clear = t.delete = Cl), Object.freeze(t), e && mt(t, function(r, n) {
    return Sn(n, !0);
  }, !0)), t;
}
function Cl() {
  ne(2);
}
function Rn(t) {
  return t == null || typeof t != "object" || Object.isFrozen(t);
}
function ke(t) {
  var e = un[t];
  return e || ne(18, t), e;
}
function Pl(t, e) {
  un[t] || (un[t] = e);
}
function _i() {
  return process.env.NODE_ENV === "production" || yt || ne(0), yt;
}
function $r(t, e) {
  e && (ke("Patches"), t.u = [], t.s = [], t.v = e);
}
function vr(t) {
  an(t), t.p.forEach(Dl), t.p = null;
}
function an(t) {
  t === yt && (yt = t.l);
}
function Ii(t) {
  return yt = { p: [], l: yt, h: t, m: !0, _: 0 };
}
function Dl(t) {
  var e = t[pe];
  e.i === 0 || e.i === 1 ? e.j() : e.g = !0;
}
function Hr(t, e) {
  e._ = e.p.length;
  var r = e.p[0], n = t !== void 0 && t !== r;
  return e.h.O || ke("ES5").S(e, t, n), n ? (r[pe].P && (vr(e), ne(4)), je(t) && (t = gr(e, t), e.l || mr(e, t)), e.u && ke("Patches").M(r[pe].t, t, e.u, e.s)) : t = gr(e, r, []), vr(e), e.u && e.v(e.u, e.s), t !== kn ? t : void 0;
}
function gr(t, e, r) {
  if (Rn(e))
    return e;
  var n = e[pe];
  if (!n)
    return mt(e, function(u, o) {
      return Ei(t, n, e, u, o, r);
    }, !0), e;
  if (n.A !== t)
    return e;
  if (!n.P)
    return mr(t, n.t, !0), n.t;
  if (!n.I) {
    n.I = !0, n.A._--;
    var i = n.i === 4 || n.i === 5 ? n.o = wn(n.k) : n.o, a = i, s = !1;
    n.i === 3 && (a = new Set(i), i.clear(), s = !0), mt(a, function(u, o) {
      return Ei(t, n, i, u, o, r, s);
    }), mr(t, i, !1), r && t.u && ke("Patches").N(n, r, t.u, t.s);
  }
  return n.o;
}
function Ei(t, e, r, n, i, a, s) {
  if (process.env.NODE_ENV !== "production" && i === r && ne(5), Ue(i)) {
    var u = gr(t, i, a && e && e.i !== 3 && !Lt(e.R, n) ? a.concat(n) : void 0);
    if (es(r, n, u), !Ue(u))
      return;
    t.m = !1;
  } else
    s && r.add(i);
  if (je(i) && !Rn(i)) {
    if (!t.h.D && t._ < 1)
      return;
    gr(t, i), e && e.A.l || mr(t, i);
  }
}
function mr(t, e, r) {
  r === void 0 && (r = !1), !t.l && t.h.D && t.m && Sn(e, r);
}
function Vr(t, e) {
  var r = t[pe];
  return (r ? Ze(r) : t)[e];
}
function Ti(t, e) {
  if (e in t)
    for (var r = Object.getPrototypeOf(t); r; ) {
      var n = Object.getOwnPropertyDescriptor(r, e);
      if (n)
        return n;
      r = Object.getPrototypeOf(r);
    }
}
function sn(t) {
  t.P || (t.P = !0, t.l && sn(t.l));
}
function zr(t) {
  t.o || (t.o = wn(t.t));
}
function on(t, e, r) {
  var n = Or(e) ? ke("MapSet").F(e, r) : kr(e) ? ke("MapSet").T(e, r) : t.O ? function(i, a) {
    var s = Array.isArray(i), u = { i: s ? 1 : 0, A: a ? a.A : _i(), P: !1, I: !1, R: {}, l: a, t: i, k: null, o: null, j: null, C: !1 }, o = u, l = cn;
    s && (o = [u], l = kt);
    var f = Proxy.revocable(o, l), p = f.revoke, m = f.proxy;
    return u.k = m, u.j = p, m;
  }(e, r) : ke("ES5").J(e, r);
  return (r ? r.A : _i()).p.push(n), n;
}
function Nl(t) {
  return Ue(t) || ne(22, t), function e(r) {
    if (!je(r))
      return r;
    var n, i = r[pe], a = Qe(r);
    if (i) {
      if (!i.P && (i.i < 4 || !ke("ES5").K(i)))
        return i.t;
      i.I = !0, n = wi(r, a), i.I = !1;
    } else
      n = wi(r, a);
    return mt(n, function(s, u) {
      i && ar(i.t, s) === u || es(n, s, e(u));
    }), a === 3 ? new Set(n) : n;
  }(t);
}
function wi(t, e) {
  switch (e) {
    case 2:
      return new Map(t);
    case 3:
      return Array.from(t);
  }
  return wn(t);
}
function Ml() {
  function t(n) {
    if (!je(n))
      return n;
    if (Array.isArray(n))
      return n.map(t);
    if (Or(n))
      return new Map(Array.from(n.entries()).map(function(s) {
        return [s[0], t(s[1])];
      }));
    if (kr(n))
      return new Set(Array.from(n).map(t));
    var i = Object.create(Object.getPrototypeOf(n));
    for (var a in n)
      i[a] = t(n[a]);
    return Lt(n, Pt) && (i[Pt] = n[Pt]), i;
  }
  function e(n) {
    return Ue(n) ? t(n) : n;
  }
  var r = "add";
  Pl("Patches", { $: function(n, i) {
    return i.forEach(function(a) {
      for (var s = a.path, u = a.op, o = n, l = 0; l < s.length - 1; l++) {
        var f = Qe(o), p = s[l];
        typeof p != "string" && typeof p != "number" && (p = "" + p), f !== 0 && f !== 1 || p !== "__proto__" && p !== "constructor" || ne(24), typeof o == "function" && p === "prototype" && ne(24), typeof (o = ar(o, p)) != "object" && ne(15, s.join("/"));
      }
      var m = Qe(o), d = t(a.value), E = s[s.length - 1];
      switch (u) {
        case "replace":
          switch (m) {
            case 2:
              return o.set(E, d);
            case 3:
              ne(16);
            default:
              return o[E] = d;
          }
        case r:
          switch (m) {
            case 1:
              return E === "-" ? o.push(d) : o.splice(E, 0, d);
            case 2:
              return o.set(E, d);
            case 3:
              return o.add(d);
            default:
              return o[E] = d;
          }
        case "remove":
          switch (m) {
            case 1:
              return o.splice(E, 1);
            case 2:
              return o.delete(E);
            case 3:
              return o.delete(a.value);
            default:
              return delete o[E];
          }
        default:
          ne(17, u);
      }
    }), n;
  }, N: function(n, i, a, s) {
    switch (n.i) {
      case 0:
      case 4:
      case 2:
        return function(u, o, l, f) {
          var p = u.t, m = u.o;
          mt(u.R, function(d, E) {
            var b = ar(p, d), y = ar(m, d), O = E ? Lt(p, d) ? "replace" : r : "remove";
            if (b !== y || O !== "replace") {
              var R = o.concat(d);
              l.push(O === "remove" ? { op: O, path: R } : { op: O, path: R, value: y }), f.push(O === r ? { op: "remove", path: R } : O === "remove" ? { op: r, path: R, value: e(b) } : { op: "replace", path: R, value: e(b) });
            }
          });
        }(n, i, a, s);
      case 5:
      case 1:
        return function(u, o, l, f) {
          var p = u.t, m = u.R, d = u.o;
          if (d.length < p.length) {
            var E = [d, p];
            p = E[0], d = E[1];
            var b = [f, l];
            l = b[0], f = b[1];
          }
          for (var y = 0; y < p.length; y++)
            if (m[y] && d[y] !== p[y]) {
              var O = o.concat([y]);
              l.push({ op: "replace", path: O, value: e(d[y]) }), f.push({ op: "replace", path: O, value: e(p[y]) });
            }
          for (var R = p.length; R < d.length; R++) {
            var v = o.concat([R]);
            l.push({ op: r, path: v, value: e(d[R]) });
          }
          p.length < d.length && f.push({ op: "replace", path: o.concat(["length"]), value: p.length });
        }(n, i, a, s);
      case 3:
        return function(u, o, l, f) {
          var p = u.t, m = u.o, d = 0;
          p.forEach(function(E) {
            if (!m.has(E)) {
              var b = o.concat([d]);
              l.push({ op: "remove", path: b, value: E }), f.unshift({ op: r, path: b, value: E });
            }
            d++;
          }), d = 0, m.forEach(function(E) {
            if (!p.has(E)) {
              var b = o.concat([d]);
              l.push({ op: r, path: b, value: E }), f.unshift({ op: "remove", path: b, value: E });
            }
            d++;
          });
        }(n, i, a, s);
    }
  }, M: function(n, i, a, s) {
    a.push({ op: "replace", path: [], value: i === kn ? void 0 : i }), s.push({ op: "replace", path: [], value: n });
  } });
}
var Si, yt, On = typeof Symbol < "u" && typeof Symbol("x") == "symbol", xl = typeof Map < "u", Ll = typeof Set < "u", Ri = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", kn = On ? Symbol.for("immer-nothing") : ((Si = {})["immer-nothing"] = !0, Si), Pt = On ? Symbol.for("immer-draftable") : "__$immer_draftable", pe = On ? Symbol.for("immer-state") : "__$immer_state", Fl = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(t) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + t;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(t) {
  return "Cannot apply patch, path doesn't resolve: " + t;
}, 16: 'Sets cannot have "replace" patches.', 17: function(t) {
  return "Unsupported patch operation: " + t;
}, 18: function(t) {
  return "The plugin for '" + t + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + t + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(t) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + t + "'";
}, 22: function(t) {
  return "'current' expects a draft, got: " + t;
}, 23: function(t) {
  return "'original' expects a draft, got: " + t;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, Ul = "" + Object.prototype.constructor, An = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Object.getOwnPropertyNames, jl = Object.getOwnPropertyDescriptors || function(t) {
  var e = {};
  return An(t).forEach(function(r) {
    e[r] = Object.getOwnPropertyDescriptor(t, r);
  }), e;
}, un = {}, cn = { get: function(t, e) {
  if (e === pe)
    return t;
  var r = Ze(t);
  if (!Lt(r, e))
    return function(i, a, s) {
      var u, o = Ti(a, s);
      return o ? "value" in o ? o.value : (u = o.get) === null || u === void 0 ? void 0 : u.call(i.k) : void 0;
    }(t, r, e);
  var n = r[e];
  return t.I || !je(n) ? n : n === Vr(t.t, e) ? (zr(t), t.o[e] = on(t.A.h, n, t)) : n;
}, has: function(t, e) {
  return e in Ze(t);
}, ownKeys: function(t) {
  return Reflect.ownKeys(Ze(t));
}, set: function(t, e, r) {
  var n = Ti(Ze(t), e);
  if (n != null && n.set)
    return n.set.call(t.k, r), !0;
  if (!t.P) {
    var i = Vr(Ze(t), e), a = i == null ? void 0 : i[pe];
    if (a && a.t === r)
      return t.o[e] = r, t.R[e] = !1, !0;
    if (Al(r, i) && (r !== void 0 || Lt(t.t, e)))
      return !0;
    zr(t), sn(t);
  }
  return t.o[e] === r && (r !== void 0 || e in t.o) || Number.isNaN(r) && Number.isNaN(t.o[e]) || (t.o[e] = r, t.R[e] = !0), !0;
}, deleteProperty: function(t, e) {
  return Vr(t.t, e) !== void 0 || e in t.t ? (t.R[e] = !1, zr(t), sn(t)) : delete t.R[e], t.o && delete t.o[e], !0;
}, getOwnPropertyDescriptor: function(t, e) {
  var r = Ze(t), n = Reflect.getOwnPropertyDescriptor(r, e);
  return n && { writable: !0, configurable: t.i !== 1 || e !== "length", enumerable: n.enumerable, value: r[e] };
}, defineProperty: function() {
  ne(11);
}, getPrototypeOf: function(t) {
  return Object.getPrototypeOf(t.t);
}, setPrototypeOf: function() {
  ne(12);
} }, kt = {};
mt(cn, function(t, e) {
  kt[t] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
}), kt.deleteProperty = function(t, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && ne(13), kt.set.call(this, t, e, void 0);
}, kt.set = function(t, e, r) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && ne(14), cn.set.call(this, t[0], e, r, t[0]);
};
var ql = function() {
  function t(r) {
    var n = this;
    this.O = Ri, this.D = !0, this.produce = function(i, a, s) {
      if (typeof i == "function" && typeof a != "function") {
        var u = a;
        a = i;
        var o = n;
        return function(b) {
          var y = this;
          b === void 0 && (b = u);
          for (var O = arguments.length, R = Array(O > 1 ? O - 1 : 0), v = 1; v < O; v++)
            R[v - 1] = arguments[v];
          return o.produce(b, function(_) {
            var g;
            return (g = a).call.apply(g, [y, _].concat(R));
          });
        };
      }
      var l;
      if (typeof a != "function" && ne(6), s !== void 0 && typeof s != "function" && ne(7), je(i)) {
        var f = Ii(n), p = on(n, i, void 0), m = !0;
        try {
          l = a(p), m = !1;
        } finally {
          m ? vr(f) : an(f);
        }
        return typeof Promise < "u" && l instanceof Promise ? l.then(function(b) {
          return $r(f, s), Hr(b, f);
        }, function(b) {
          throw vr(f), b;
        }) : ($r(f, s), Hr(l, f));
      }
      if (!i || typeof i != "object") {
        if ((l = a(i)) === void 0 && (l = i), l === kn && (l = void 0), n.D && Sn(l, !0), s) {
          var d = [], E = [];
          ke("Patches").M(i, l, d, E), s(d, E);
        }
        return l;
      }
      ne(21, i);
    }, this.produceWithPatches = function(i, a) {
      if (typeof i == "function")
        return function(l) {
          for (var f = arguments.length, p = Array(f > 1 ? f - 1 : 0), m = 1; m < f; m++)
            p[m - 1] = arguments[m];
          return n.produceWithPatches(l, function(d) {
            return i.apply(void 0, [d].concat(p));
          });
        };
      var s, u, o = n.produce(i, a, function(l, f) {
        s = l, u = f;
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then(function(l) {
        return [l, s, u];
      }) : [o, s, u];
    }, typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies), typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var e = t.prototype;
  return e.createDraft = function(r) {
    je(r) || ne(8), Ue(r) && (r = Nl(r));
    var n = Ii(this), i = on(this, r, void 0);
    return i[pe].C = !0, an(n), i;
  }, e.finishDraft = function(r, n) {
    var i = r && r[pe];
    process.env.NODE_ENV !== "production" && (i && i.C || ne(9), i.I && ne(10));
    var a = i.A;
    return $r(a, n), Hr(void 0, a);
  }, e.setAutoFreeze = function(r) {
    this.D = r;
  }, e.setUseProxies = function(r) {
    r && !Ri && ne(20), this.O = r;
  }, e.applyPatches = function(r, n) {
    var i;
    for (i = n.length - 1; i >= 0; i--) {
      var a = n[i];
      if (a.path.length === 0 && a.op === "replace") {
        r = a.value;
        break;
      }
    }
    i > -1 && (n = n.slice(i + 1));
    var s = ke("Patches").$;
    return Ue(r) ? s(r, n) : this.produce(r, function(u) {
      return s(u, n);
    });
  }, t;
}(), ve = new ql();
ve.produce;
var ts = ve.produceWithPatches.bind(ve);
ve.setAutoFreeze.bind(ve);
ve.setUseProxies.bind(ve);
var Oi = ve.applyPatches.bind(ve);
ve.createDraft.bind(ve);
ve.finishDraft.bind(ve);
var yr = "NOT_FOUND";
function Bl(t) {
  var e;
  return {
    get: function(n) {
      return e && t(e.key, n) ? e.value : yr;
    },
    put: function(n, i) {
      e = {
        key: n,
        value: i
      };
    },
    getEntries: function() {
      return e ? [e] : [];
    },
    clear: function() {
      e = void 0;
    }
  };
}
function $l(t, e) {
  var r = [];
  function n(u) {
    var o = r.findIndex(function(f) {
      return e(u, f.key);
    });
    if (o > -1) {
      var l = r[o];
      return o > 0 && (r.splice(o, 1), r.unshift(l)), l.value;
    }
    return yr;
  }
  function i(u, o) {
    n(u) === yr && (r.unshift({
      key: u,
      value: o
    }), r.length > t && r.pop());
  }
  function a() {
    return r;
  }
  function s() {
    r = [];
  }
  return {
    get: n,
    put: i,
    getEntries: a,
    clear: s
  };
}
var Hl = function(e, r) {
  return e === r;
};
function Vl(t) {
  return function(r, n) {
    if (r === null || n === null || r.length !== n.length)
      return !1;
    for (var i = r.length, a = 0; a < i; a++)
      if (!t(r[a], n[a]))
        return !1;
    return !0;
  };
}
function ki(t, e) {
  var r = typeof e == "object" ? e : {
    equalityCheck: e
  }, n = r.equalityCheck, i = n === void 0 ? Hl : n, a = r.maxSize, s = a === void 0 ? 1 : a, u = r.resultEqualityCheck, o = Vl(i), l = s === 1 ? Bl(o) : $l(s, o);
  function f() {
    var p = l.get(arguments);
    if (p === yr) {
      if (p = t.apply(null, arguments), u) {
        var m = l.getEntries(), d = m.find(function(E) {
          return u(E.value, p);
        });
        d && (p = d.value);
      }
      l.put(arguments, p);
    }
    return p;
  }
  return f.clearCache = function() {
    return l.clear();
  }, f;
}
var br = globalThis && globalThis.__generator || function(t, e) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, s;
  return s = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function u(l) {
    return function(f) {
      return o([l, f]);
    };
  }
  function o(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (a = l[0] & 2 ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, l[1])).done)
          return a;
        switch (i = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
          case 0:
          case 1:
            a = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = l;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(l);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = e.call(t, r);
      } catch (f) {
        l = [6, f], i = 0;
      } finally {
        n = a = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}, _r = globalThis && globalThis.__spreadArray || function(t, e) {
  for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
    t[i] = e[r];
  return t;
}, zl = Object.defineProperty, Wl = Object.defineProperties, Ql = Object.getOwnPropertyDescriptors, Ir = Object.getOwnPropertySymbols, rs = Object.prototype.hasOwnProperty, ns = Object.prototype.propertyIsEnumerable, Ai = function(t, e, r) {
  return e in t ? zl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
}, se = function(t, e) {
  for (var r in e || (e = {}))
    rs.call(e, r) && Ai(t, r, e[r]);
  if (Ir)
    for (var n = 0, i = Ir(e); n < i.length; n++) {
      var r = i[n];
      ns.call(e, r) && Ai(t, r, e[r]);
    }
  return t;
}, Se = function(t, e) {
  return Wl(t, Ql(e));
}, Ci = function(t, e) {
  var r = {};
  for (var n in t)
    rs.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && Ir)
    for (var i = 0, a = Ir(t); i < a.length; i++) {
      var n = a[i];
      e.indexOf(n) < 0 && ns.call(t, n) && (r[n] = t[n]);
    }
  return r;
}, Er = function(t, e, r) {
  return new Promise(function(n, i) {
    var a = function(o) {
      try {
        u(r.next(o));
      } catch (l) {
        i(l);
      }
    }, s = function(o) {
      try {
        u(r.throw(o));
      } catch (l) {
        i(l);
      }
    }, u = function(o) {
      return o.done ? n(o.value) : Promise.resolve(o.value).then(a, s);
    };
    u((r = r.apply(t, e)).next());
  });
}, re;
(function(t) {
  t.uninitialized = "uninitialized", t.pending = "pending", t.fulfilled = "fulfilled", t.rejected = "rejected";
})(re || (re = {}));
function Kl(t) {
  return {
    status: t,
    isUninitialized: t === re.uninitialized,
    isLoading: t === re.pending,
    isSuccess: t === re.fulfilled,
    isError: t === re.rejected
  };
}
function Gl(t) {
  return new RegExp("(^|:)//").test(t);
}
var Jl = function(t) {
  return t.replace(/\/$/, "");
}, Yl = function(t) {
  return t.replace(/^\//, "");
};
function Xl(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  if (Gl(e))
    return e;
  var r = t.endsWith("/") || !e.startsWith("?") ? "/" : "";
  return t = Jl(t), e = Yl(e), "" + t + r + e;
}
var Pi = function(t) {
  return [].concat.apply([], t);
};
function Zl() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function ed() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var Di = st;
function is(t, e) {
  if (t === e || !(Di(t) && Di(e) || Array.isArray(t) && Array.isArray(e)))
    return e;
  for (var r = Object.keys(e), n = Object.keys(t), i = r.length === n.length, a = Array.isArray(e) ? [] : {}, s = 0, u = r; s < u.length; s++) {
    var o = u[s];
    a[o] = is(t[o], e[o]), i && (i = t[o] === a[o]);
  }
  return i ? t : a;
}
var Ni = function() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return fetch.apply(void 0, t);
}, td = function(t) {
  return t.status >= 200 && t.status <= 299;
}, rd = function(t) {
  return /ion\/(vnd\.api\+)?json/.test(t.get("content-type") || "");
};
function Mi(t) {
  if (!st(t))
    return t;
  for (var e = se({}, t), r = 0, n = Object.entries(e); r < n.length; r++) {
    var i = n[r], a = i[0], s = i[1];
    s === void 0 && delete e[a];
  }
  return e;
}
function nd(t) {
  var e = this;
  t === void 0 && (t = {});
  var r = t, n = r.baseUrl, i = r.prepareHeaders, a = i === void 0 ? function(v) {
    return v;
  } : i, s = r.fetchFn, u = s === void 0 ? Ni : s, o = r.paramsSerializer, l = r.isJsonContentType, f = l === void 0 ? rd : l, p = r.jsonContentType, m = p === void 0 ? "application/json" : p, d = r.jsonReplacer, E = r.timeout, b = r.responseHandler, y = r.validateStatus, O = Ci(r, [
    "baseUrl",
    "prepareHeaders",
    "fetchFn",
    "paramsSerializer",
    "isJsonContentType",
    "jsonContentType",
    "jsonReplacer",
    "timeout",
    "responseHandler",
    "validateStatus"
  ]);
  return typeof fetch > "u" && u === Ni && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), function(v, _) {
    return Er(e, null, function() {
      var g, h, I, w, S, T, k, A, C, D, M, U, L, F, $, W, H, K, B, G, V, J, te, de, ge, fe, me, X, ce, qe, Ge, Be, Je, ut, $e, Kt;
      return br(this, function(ye) {
        switch (ye.label) {
          case 0:
            return g = _.signal, h = _.getState, I = _.extra, w = _.endpoint, S = _.forced, T = _.type, A = typeof v == "string" ? { url: v } : v, C = A.url, D = A.headers, M = D === void 0 ? new Headers(O.headers) : D, U = A.params, L = U === void 0 ? void 0 : U, F = A.responseHandler, $ = F === void 0 ? b ?? "json" : F, W = A.validateStatus, H = W === void 0 ? y ?? td : W, K = A.timeout, B = K === void 0 ? E : K, G = Ci(A, [
              "url",
              "headers",
              "params",
              "responseHandler",
              "validateStatus",
              "timeout"
            ]), V = se(Se(se({}, O), {
              signal: g
            }), G), M = new Headers(Mi(M)), J = V, [4, a(M, {
              getState: h,
              extra: I,
              endpoint: w,
              forced: S,
              type: T
            })];
          case 1:
            J.headers = ye.sent() || M, te = function(he) {
              return typeof he == "object" && (st(he) || Array.isArray(he) || typeof he.toJSON == "function");
            }, !V.headers.has("content-type") && te(V.body) && V.headers.set("content-type", m), te(V.body) && f(V.headers) && (V.body = JSON.stringify(V.body, d)), L && (de = ~C.indexOf("?") ? "&" : "?", ge = o ? o(L) : new URLSearchParams(Mi(L)), C += de + ge), C = Xl(n, C), fe = new Request(C, V), me = fe.clone(), k = { request: me }, ce = !1, qe = B && setTimeout(function() {
              ce = !0, _.abort();
            }, B), ye.label = 2;
          case 2:
            return ye.trys.push([2, 4, 5, 6]), [4, u(fe)];
          case 3:
            return X = ye.sent(), [3, 6];
          case 4:
            return Ge = ye.sent(), [2, {
              error: {
                status: ce ? "TIMEOUT_ERROR" : "FETCH_ERROR",
                error: String(Ge)
              },
              meta: k
            }];
          case 5:
            return qe && clearTimeout(qe), [
              7
              /*endfinally*/
            ];
          case 6:
            Be = X.clone(), k.response = Be, ut = "", ye.label = 7;
          case 7:
            return ye.trys.push([7, 9, , 10]), [4, Promise.all([
              R(X, $).then(function(he) {
                return Je = he;
              }, function(he) {
                return $e = he;
              }),
              Be.text().then(function(he) {
                return ut = he;
              }, function() {
              })
            ])];
          case 8:
            if (ye.sent(), $e)
              throw $e;
            return [3, 10];
          case 9:
            return Kt = ye.sent(), [2, {
              error: {
                status: "PARSING_ERROR",
                originalStatus: X.status,
                data: ut,
                error: String(Kt)
              },
              meta: k
            }];
          case 10:
            return [2, H(X, Je) ? {
              data: Je,
              meta: k
            } : {
              error: {
                status: X.status,
                data: Je
              },
              meta: k
            }];
        }
      });
    });
  };
  function R(v, _) {
    return Er(this, null, function() {
      var g;
      return br(this, function(h) {
        switch (h.label) {
          case 0:
            return typeof _ == "function" ? [2, _(v)] : (_ === "content-type" && (_ = f(v.headers) ? "json" : "text"), _ !== "json" ? [3, 2] : [4, v.text()]);
          case 1:
            return g = h.sent(), [2, g.length ? JSON.parse(g) : null];
          case 2:
            return [2, v.text()];
        }
      });
    });
  }
}
var xi = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = void 0), this.value = e, this.meta = r;
    }
    return t;
  }()
), Cn = /* @__PURE__ */ bt("__rtkq/focused"), as = /* @__PURE__ */ bt("__rtkq/unfocused"), Pn = /* @__PURE__ */ bt("__rtkq/online"), ss = /* @__PURE__ */ bt("__rtkq/offline"), Ce;
(function(t) {
  t.query = "query", t.mutation = "mutation";
})(Ce || (Ce = {}));
function os(t) {
  return t.type === Ce.query;
}
function id(t) {
  return t.type === Ce.mutation;
}
function us(t, e, r, n, i, a) {
  return ad(t) ? t(e, r, n, i).map(ln).map(a) : Array.isArray(t) ? t.map(ln).map(a) : [];
}
function ad(t) {
  return typeof t == "function";
}
function ln(t) {
  return typeof t == "string" ? { type: t } : t;
}
function Wr(t) {
  return t != null;
}
var Ft = Symbol("forceQueryFn"), dn = function(t) {
  return typeof t[Ft] == "function";
};
function sd(t) {
  var e = t.serializeQueryArgs, r = t.queryThunk, n = t.mutationThunk, i = t.api, a = t.context, s = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), o = i.internalActions, l = o.unsubscribeQueryResult, f = o.removeMutationResult, p = o.updateSubscriptionOptions;
  return {
    buildInitiateQuery: v,
    buildInitiateMutation: _,
    getRunningQueryThunk: E,
    getRunningMutationThunk: b,
    getRunningQueriesThunk: y,
    getRunningMutationsThunk: O,
    getRunningOperationPromises: d,
    removalWarning: m
  };
  function m() {
    throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`);
  }
  function d() {
    if (typeof process < "u" && process.env.NODE_ENV === "development")
      m();
    else {
      var g = function(h) {
        return Array.from(h.values()).flatMap(function(I) {
          return I ? Object.values(I) : [];
        });
      };
      return _r(_r([], g(s)), g(u)).filter(Wr);
    }
  }
  function E(g, h) {
    return function(I) {
      var w, S = a.endpointDefinitions[g], T = e({
        queryArgs: h,
        endpointDefinition: S,
        endpointName: g
      });
      return (w = s.get(I)) == null ? void 0 : w[T];
    };
  }
  function b(g, h) {
    return function(I) {
      var w;
      return (w = u.get(I)) == null ? void 0 : w[h];
    };
  }
  function y() {
    return function(g) {
      return Object.values(s.get(g) || {}).filter(Wr);
    };
  }
  function O() {
    return function(g) {
      return Object.values(u.get(g) || {}).filter(Wr);
    };
  }
  function R(g) {
    if (process.env.NODE_ENV !== "production") {
      if (R.triggered)
        return;
      var h = g(i.internalActions.internal_probeSubscription({
        queryCacheKey: "DOES_NOT_EXIST",
        requestId: "DUMMY_REQUEST_ID"
      }));
      if (R.triggered = !0, typeof h != "boolean")
        throw new Error('Warning: Middleware for RTK-Query API at reducerPath "' + i.reducerPath + `" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function v(g, h) {
    var I = function(w, S) {
      var T = S === void 0 ? {} : S, k = T.subscribe, A = k === void 0 ? !0 : k, C = T.forceRefetch, D = T.subscriptionOptions, M = Ft, U = T[M];
      return function(L, F) {
        var $, W, H = e({
          queryArgs: w,
          endpointDefinition: h,
          endpointName: g
        }), K = r(($ = {
          type: "query",
          subscribe: A,
          forceRefetch: C,
          subscriptionOptions: D,
          endpointName: g,
          originalArgs: w,
          queryCacheKey: H
        }, $[Ft] = U, $)), B = i.endpoints[g].select(w), G = L(K), V = B(F());
        R(L);
        var J = G.requestId, te = G.abort, de = V.requestId !== J, ge = (W = s.get(L)) == null ? void 0 : W[H], fe = function() {
          return B(F());
        }, me = Object.assign(U ? G.then(fe) : de && !ge ? Promise.resolve(V) : Promise.all([ge, G]).then(fe), {
          arg: w,
          requestId: J,
          subscriptionOptions: D,
          queryCacheKey: H,
          abort: te,
          unwrap: function() {
            return Er(this, null, function() {
              var ce;
              return br(this, function(qe) {
                switch (qe.label) {
                  case 0:
                    return [4, me];
                  case 1:
                    if (ce = qe.sent(), ce.isError)
                      throw ce.error;
                    return [2, ce.data];
                }
              });
            });
          },
          refetch: function() {
            return L(I(w, { subscribe: !1, forceRefetch: !0 }));
          },
          unsubscribe: function() {
            A && L(l({
              queryCacheKey: H,
              requestId: J
            }));
          },
          updateSubscriptionOptions: function(ce) {
            me.subscriptionOptions = ce, L(p({
              endpointName: g,
              requestId: J,
              queryCacheKey: H,
              options: ce
            }));
          }
        });
        if (!ge && !de && !U) {
          var X = s.get(L) || {};
          X[H] = me, s.set(L, X), me.then(function() {
            delete X[H], Object.keys(X).length || s.delete(L);
          });
        }
        return me;
      };
    };
    return I;
  }
  function _(g) {
    return function(h, I) {
      var w = I === void 0 ? {} : I, S = w.track, T = S === void 0 ? !0 : S, k = w.fixedCacheKey;
      return function(A, C) {
        var D = n({
          type: "mutation",
          endpointName: g,
          originalArgs: h,
          track: T,
          fixedCacheKey: k
        }), M = A(D);
        R(A);
        var U = M.requestId, L = M.abort, F = M.unwrap, $ = M.unwrap().then(function(B) {
          return { data: B };
        }).catch(function(B) {
          return { error: B };
        }), W = function() {
          A(f({ requestId: U, fixedCacheKey: k }));
        }, H = Object.assign($, {
          arg: M.arg,
          requestId: U,
          abort: L,
          unwrap: F,
          unsubscribe: W,
          reset: W
        }), K = u.get(A) || {};
        return u.set(A, K), K[U] = H, H.then(function() {
          delete K[U], Object.keys(K).length || u.delete(A);
        }), k && (K[k] = H, H.then(function() {
          K[k] === H && (delete K[k], Object.keys(K).length || u.delete(A));
        })), H;
      };
    };
  }
}
function Li(t) {
  return t;
}
function od(t) {
  var e = this, r = t.reducerPath, n = t.baseQuery, i = t.context.endpointDefinitions, a = t.serializeQueryArgs, s = t.api, u = function(v, _, g) {
    return function(h) {
      var I = i[v];
      h(s.internalActions.queryResultPatched({
        queryCacheKey: a({
          queryArgs: _,
          endpointDefinition: I,
          endpointName: v
        }),
        patches: g
      }));
    };
  }, o = function(v, _, g) {
    return function(h, I) {
      var w, S, T = s.endpoints[v].select(_)(I()), k = {
        patches: [],
        inversePatches: [],
        undo: function() {
          return h(s.util.patchQueryData(v, _, k.inversePatches));
        }
      };
      if (T.status === re.uninitialized)
        return k;
      if ("data" in T)
        if (je(T.data)) {
          var A = ts(T.data, g), C = A[1], D = A[2];
          (w = k.patches).push.apply(w, C), (S = k.inversePatches).push.apply(S, D);
        } else {
          var M = g(T.data);
          k.patches.push({ op: "replace", path: [], value: M }), k.inversePatches.push({
            op: "replace",
            path: [],
            value: T.data
          });
        }
      return h(s.util.patchQueryData(v, _, k.patches)), k;
    };
  }, l = function(v, _, g) {
    return function(h) {
      var I;
      return h(s.endpoints[v].initiate(_, (I = {
        subscribe: !1,
        forceRefetch: !0
      }, I[Ft] = function() {
        return {
          data: g
        };
      }, I)));
    };
  }, f = function(v, _) {
    return Er(e, [v, _], function(g, h) {
      var I, w, S, T, k, A, C, D, M, U, L, F, $, W, H, K, B, G, V = h.signal, J = h.abort, te = h.rejectWithValue, de = h.fulfillWithValue, ge = h.dispatch, fe = h.getState, me = h.extra;
      return br(this, function(X) {
        switch (X.label) {
          case 0:
            I = i[g.endpointName], X.label = 1;
          case 1:
            return X.trys.push([1, 8, , 13]), w = Li, S = void 0, T = {
              signal: V,
              abort: J,
              dispatch: ge,
              getState: fe,
              extra: me,
              endpoint: g.endpointName,
              type: g.type,
              forced: g.type === "query" ? p(g, fe()) : void 0
            }, k = g.type === "query" ? g[Ft] : void 0, k ? (S = k(), [3, 6]) : [3, 2];
          case 2:
            return I.query ? [4, n(I.query(g.originalArgs), T, I.extraOptions)] : [3, 4];
          case 3:
            return S = X.sent(), I.transformResponse && (w = I.transformResponse), [3, 6];
          case 4:
            return [4, I.queryFn(g.originalArgs, T, I.extraOptions, function(ce) {
              return n(ce, T, I.extraOptions);
            })];
          case 5:
            S = X.sent(), X.label = 6;
          case 6:
            if (typeof process < "u" && process.env.NODE_ENV === "development") {
              if (A = I.query ? "`baseQuery`" : "`queryFn`", C = void 0, !S)
                C = A + " did not return anything.";
              else if (typeof S != "object")
                C = A + " did not return an object.";
              else if (S.error && S.data)
                C = A + " returned an object containing both `error` and `result`.";
              else if (S.error === void 0 && S.data === void 0)
                C = A + " returned an object containing neither a valid `error` and `result`. At least one of them should not be `undefined`";
              else
                for (D = 0, M = Object.keys(S); D < M.length; D++)
                  if (U = M[D], U !== "error" && U !== "data" && U !== "meta") {
                    C = "The object returned by " + A + " has the unknown property " + U + ".";
                    break;
                  }
              C && console.error("Error encountered handling the endpoint " + g.endpointName + `.
              ` + C + "\n              It needs to return an object with either the shape `{ data: <value> }` or `{ error: <value> }` that may contain an optional `meta` property.\n              Object returned was:", S);
            }
            if (S.error)
              throw new xi(S.error, S.meta);
            return L = de, [4, w(S.data, S.meta, g.originalArgs)];
          case 7:
            return [2, L.apply(void 0, [X.sent(), (B = {
              fulfilledTimeStamp: Date.now(),
              baseQueryMeta: S.meta
            }, B[Gt] = !0, B)])];
          case 8:
            if (F = X.sent(), $ = F, !($ instanceof xi))
              return [3, 12];
            W = Li, I.query && I.transformErrorResponse && (W = I.transformErrorResponse), X.label = 9;
          case 9:
            return X.trys.push([9, 11, , 12]), H = te, [4, W($.value, $.meta, g.originalArgs)];
          case 10:
            return [2, H.apply(void 0, [X.sent(), (G = { baseQueryMeta: $.meta }, G[Gt] = !0, G)])];
          case 11:
            return K = X.sent(), $ = K, [3, 12];
          case 12:
            throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error('An unhandled error occurred processing a request for the endpoint "' + g.endpointName + `".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, $) : console.error($), $;
          case 13:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  };
  function p(v, _) {
    var g, h, I, w, S = (h = (g = _[r]) == null ? void 0 : g.queries) == null ? void 0 : h[v.queryCacheKey], T = (I = _[r]) == null ? void 0 : I.config.refetchOnMountOrArgChange, k = S == null ? void 0 : S.fulfilledTimeStamp, A = (w = v.forceRefetch) != null ? w : v.subscribe && T;
    return A ? A === !0 || (Number(/* @__PURE__ */ new Date()) - Number(k)) / 1e3 >= A : !1;
  }
  var m = zn(r + "/executeQuery", f, {
    getPendingMeta: function() {
      var v;
      return v = { startedTimeStamp: Date.now() }, v[Gt] = !0, v;
    },
    condition: function(v, _) {
      var g = _.getState, h, I, w, S = g(), T = (I = (h = S[r]) == null ? void 0 : h.queries) == null ? void 0 : I[v.queryCacheKey], k = T == null ? void 0 : T.fulfilledTimeStamp, A = v.originalArgs, C = T == null ? void 0 : T.originalArgs, D = i[v.endpointName];
      return dn(v) ? !0 : (T == null ? void 0 : T.status) === "pending" ? !1 : p(v, S) || os(D) && ((w = D == null ? void 0 : D.forceRefetch) != null && w.call(D, {
        currentArg: A,
        previousArg: C,
        endpointState: T,
        state: S
      })) ? !0 : !k;
    },
    dispatchConditionRejection: !0
  }), d = zn(r + "/executeMutation", f, {
    getPendingMeta: function() {
      var v;
      return v = { startedTimeStamp: Date.now() }, v[Gt] = !0, v;
    }
  }), E = function(v) {
    return "force" in v;
  }, b = function(v) {
    return "ifOlderThan" in v;
  }, y = function(v, _, g) {
    return function(h, I) {
      var w = E(g) && g.force, S = b(g) && g.ifOlderThan, T = function(D) {
        return D === void 0 && (D = !0), s.endpoints[v].initiate(_, { forceRefetch: D });
      }, k = s.endpoints[v].select(_)(I());
      if (w)
        h(T());
      else if (S) {
        var A = k == null ? void 0 : k.fulfilledTimeStamp;
        if (!A) {
          h(T());
          return;
        }
        var C = (Number(/* @__PURE__ */ new Date()) - Number(new Date(A))) / 1e3 >= S;
        C && h(T());
      } else
        h(T(!1));
    };
  };
  function O(v) {
    return function(_) {
      var g, h;
      return ((h = (g = _ == null ? void 0 : _.meta) == null ? void 0 : g.arg) == null ? void 0 : h.endpointName) === v;
    };
  }
  function R(v, _) {
    return {
      matchPending: Mr(Yi(v), O(_)),
      matchFulfilled: Mr(_t(v), O(_)),
      matchRejected: Mr(Xi(v), O(_))
    };
  }
  return {
    queryThunk: m,
    mutationThunk: d,
    prefetch: y,
    updateQueryData: o,
    upsertQueryData: l,
    patchQueryData: u,
    buildMatchThunkActions: R
  };
}
function cs(t, e, r, n) {
  return us(r[t.meta.arg.endpointName][e], _t(t) ? t.payload : void 0, fn(t) ? t.payload : void 0, t.meta.arg.originalArgs, "baseQueryMeta" in t.meta ? t.meta.baseQueryMeta : void 0, n);
}
function Yt(t, e, r) {
  var n = t[e];
  n && r(n);
}
function Ut(t) {
  var e;
  return (e = "arg" in t ? t.arg.fixedCacheKey : t.fixedCacheKey) != null ? e : t.requestId;
}
function Fi(t, e, r) {
  var n = t[Ut(e)];
  n && r(n);
}
var Rt = {};
function ud(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.mutationThunk, i = t.context, a = i.endpointDefinitions, s = i.apiUid, u = i.extractRehydrationInfo, o = i.hasRehydrationInfo, l = t.assertTagType, f = t.config, p = bt(e + "/resetApiState"), m = Ye({
    name: e + "/queries",
    initialState: Rt,
    reducers: {
      removeQueryResult: {
        reducer: function(g, h) {
          var I = h.payload.queryCacheKey;
          delete g[I];
        },
        prepare: Nr()
      },
      queryResultPatched: function(g, h) {
        var I = h.payload, w = I.queryCacheKey, S = I.patches;
        Yt(g, w, function(T) {
          T.data = Oi(T.data, S.concat());
        });
      }
    },
    extraReducers: function(g) {
      g.addCase(r.pending, function(h, I) {
        var w = I.meta, S = I.meta.arg, T, k, A = dn(S);
        (S.subscribe || A) && ((k = h[T = S.queryCacheKey]) != null || (h[T] = {
          status: re.uninitialized,
          endpointName: S.endpointName
        })), Yt(h, S.queryCacheKey, function(C) {
          C.status = re.pending, C.requestId = A && C.requestId ? C.requestId : w.requestId, S.originalArgs !== void 0 && (C.originalArgs = S.originalArgs), C.startedTimeStamp = w.startedTimeStamp;
        });
      }).addCase(r.fulfilled, function(h, I) {
        var w = I.meta, S = I.payload;
        Yt(h, w.arg.queryCacheKey, function(T) {
          var k;
          if (!(T.requestId !== w.requestId && !dn(w.arg))) {
            var A = a[w.arg.endpointName].merge;
            if (T.status = re.fulfilled, A)
              if (T.data !== void 0) {
                var C = w.fulfilledTimeStamp, D = w.arg, M = w.baseQueryMeta, U = w.requestId, L = hn(T.data, function(F) {
                  return A(F, S, {
                    arg: D.originalArgs,
                    baseQueryMeta: M,
                    fulfilledTimeStamp: C,
                    requestId: U
                  });
                });
                T.data = L;
              } else
                T.data = S;
            else
              T.data = (k = a[w.arg.endpointName].structuralSharing) == null || k ? is(Ue(T.data) ? kl(T.data) : T.data, S) : S;
            delete T.error, T.fulfilledTimeStamp = w.fulfilledTimeStamp;
          }
        });
      }).addCase(r.rejected, function(h, I) {
        var w = I.meta, S = w.condition, T = w.arg, k = w.requestId, A = I.error, C = I.payload;
        Yt(h, T.queryCacheKey, function(D) {
          if (!S) {
            if (D.requestId !== k)
              return;
            D.status = re.rejected, D.error = C ?? A;
          }
        });
      }).addMatcher(o, function(h, I) {
        for (var w = u(I).queries, S = 0, T = Object.entries(w); S < T.length; S++) {
          var k = T[S], A = k[0], C = k[1];
          ((C == null ? void 0 : C.status) === re.fulfilled || (C == null ? void 0 : C.status) === re.rejected) && (h[A] = C);
        }
      });
    }
  }), d = Ye({
    name: e + "/mutations",
    initialState: Rt,
    reducers: {
      removeMutationResult: {
        reducer: function(g, h) {
          var I = h.payload, w = Ut(I);
          w in g && delete g[w];
        },
        prepare: Nr()
      }
    },
    extraReducers: function(g) {
      g.addCase(n.pending, function(h, I) {
        var w = I.meta, S = I.meta, T = S.requestId, k = S.arg, A = S.startedTimeStamp;
        k.track && (h[Ut(w)] = {
          requestId: T,
          status: re.pending,
          endpointName: k.endpointName,
          startedTimeStamp: A
        });
      }).addCase(n.fulfilled, function(h, I) {
        var w = I.payload, S = I.meta;
        S.arg.track && Fi(h, S, function(T) {
          T.requestId === S.requestId && (T.status = re.fulfilled, T.data = w, T.fulfilledTimeStamp = S.fulfilledTimeStamp);
        });
      }).addCase(n.rejected, function(h, I) {
        var w = I.payload, S = I.error, T = I.meta;
        T.arg.track && Fi(h, T, function(k) {
          k.requestId === T.requestId && (k.status = re.rejected, k.error = w ?? S);
        });
      }).addMatcher(o, function(h, I) {
        for (var w = u(I).mutations, S = 0, T = Object.entries(w); S < T.length; S++) {
          var k = T[S], A = k[0], C = k[1];
          ((C == null ? void 0 : C.status) === re.fulfilled || (C == null ? void 0 : C.status) === re.rejected) && A !== (C == null ? void 0 : C.requestId) && (h[A] = C);
        }
      });
    }
  }), E = Ye({
    name: e + "/invalidation",
    initialState: Rt,
    reducers: {},
    extraReducers: function(g) {
      g.addCase(m.actions.removeQueryResult, function(h, I) {
        for (var w = I.payload.queryCacheKey, S = 0, T = Object.values(h); S < T.length; S++)
          for (var k = T[S], A = 0, C = Object.values(k); A < C.length; A++) {
            var D = C[A], M = D.indexOf(w);
            M !== -1 && D.splice(M, 1);
          }
      }).addMatcher(o, function(h, I) {
        for (var w, S, T, k, A = u(I).provided, C = 0, D = Object.entries(A); C < D.length; C++)
          for (var M = D[C], U = M[0], L = M[1], F = 0, $ = Object.entries(L); F < $.length; F++)
            for (var W = $[F], H = W[0], K = W[1], B = (k = (S = (w = h[U]) != null ? w : h[U] = {})[T = H || "__internal_without_id"]) != null ? k : S[T] = [], G = 0, V = K; G < V.length; G++) {
              var J = V[G], te = B.includes(J);
              te || B.push(J);
            }
      }).addMatcher(Gi(_t(r), fn(r)), function(h, I) {
        for (var w, S, T, k, A = cs(I, "providesTags", a, l), C = I.meta.arg.queryCacheKey, D = 0, M = Object.values(h); D < M.length; D++)
          for (var U = M[D], L = 0, F = Object.values(U); L < F.length; L++) {
            var $ = F[L], W = $.indexOf(C);
            W !== -1 && $.splice(W, 1);
          }
        for (var H = 0, K = A; H < K.length; H++) {
          var B = K[H], G = B.type, V = B.id, J = (k = (S = (w = h[G]) != null ? w : h[G] = {})[T = V || "__internal_without_id"]) != null ? k : S[T] = [], te = J.includes(C);
          te || J.push(C);
        }
      });
    }
  }), b = Ye({
    name: e + "/subscriptions",
    initialState: Rt,
    reducers: {
      updateSubscriptionOptions: function(g, h) {
      },
      unsubscribeQueryResult: function(g, h) {
      },
      internal_probeSubscription: function(g, h) {
      }
    }
  }), y = Ye({
    name: e + "/internalSubscriptions",
    initialState: Rt,
    reducers: {
      subscriptionsUpdated: {
        reducer: function(g, h) {
          return Oi(g, h.payload);
        },
        prepare: Nr()
      }
    }
  }), O = Ye({
    name: e + "/config",
    initialState: se({
      online: Zl(),
      focused: ed(),
      middlewareRegistered: !1
    }, f),
    reducers: {
      middlewareRegistered: function(g, h) {
        var I = h.payload;
        g.middlewareRegistered = g.middlewareRegistered === "conflict" || s !== I ? "conflict" : !0;
      }
    },
    extraReducers: function(g) {
      g.addCase(Pn, function(h) {
        h.online = !0;
      }).addCase(ss, function(h) {
        h.online = !1;
      }).addCase(Cn, function(h) {
        h.focused = !0;
      }).addCase(as, function(h) {
        h.focused = !1;
      }).addMatcher(o, function(h) {
        return se({}, h);
      });
    }
  }), R = Ji({
    queries: m.reducer,
    mutations: d.reducer,
    provided: E.reducer,
    subscriptions: y.reducer,
    config: O.reducer
  }), v = function(g, h) {
    return R(p.match(h) ? void 0 : g, h);
  }, _ = Se(se(se(se(se(se({}, O.actions), m.actions), b.actions), y.actions), d.actions), {
    unsubscribeMutationResult: d.actions.removeMutationResult,
    resetApiState: p
  });
  return { reducer: v, actions: _ };
}
var nt = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), ls = {
  status: re.uninitialized
}, Ui = /* @__PURE__ */ hn(ls, function() {
}), ji = /* @__PURE__ */ hn(ls, function() {
});
function cd(t) {
  var e = t.serializeQueryArgs, r = t.reducerPath, n = function(f) {
    return Ui;
  }, i = function(f) {
    return ji;
  };
  return { buildQuerySelector: u, buildMutationSelector: o, selectInvalidatedBy: l };
  function a(f) {
    return se(se({}, f), Kl(f.status));
  }
  function s(f) {
    var p = f[r];
    if (process.env.NODE_ENV !== "production" && !p) {
      if (s.triggered)
        return p;
      s.triggered = !0, console.error("Error: No data found at `state." + r + "`. Did you forget to add the reducer to the store?");
    }
    return p;
  }
  function u(f, p) {
    return function(m) {
      var d = e({
        queryArgs: m,
        endpointDefinition: p,
        endpointName: f
      }), E = function(y) {
        var O, R, v;
        return (v = (R = (O = s(y)) == null ? void 0 : O.queries) == null ? void 0 : R[d]) != null ? v : Ui;
      }, b = m === nt ? n : E;
      return At(b, a);
    };
  }
  function o() {
    return function(f) {
      var p, m;
      typeof f == "object" ? m = (p = Ut(f)) != null ? p : nt : m = f;
      var d = function(b) {
        var y, O, R;
        return (R = (O = (y = s(b)) == null ? void 0 : y.mutations) == null ? void 0 : O[m]) != null ? R : ji;
      }, E = m === nt ? i : d;
      return At(E, a);
    };
  }
  function l(f, p) {
    for (var m, d = f[r], E = /* @__PURE__ */ new Set(), b = 0, y = p.map(ln); b < y.length; b++) {
      var O = y[b], R = d.provided[O.type];
      if (R)
        for (var v = (m = O.id !== void 0 ? R[O.id] : Pi(Object.values(R))) != null ? m : [], _ = 0, g = v; _ < g.length; _++) {
          var h = g[_];
          E.add(h);
        }
    }
    return Pi(Array.from(E.values()).map(function(I) {
      var w = d.queries[I];
      return w ? [
        {
          queryCacheKey: I,
          endpointName: w.endpointName,
          originalArgs: w.originalArgs
        }
      ] : [];
    }));
  }
}
var Xt = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, qi = function(t) {
  var e = t.endpointName, r = t.queryArgs, n = "", i = Xt == null ? void 0 : Xt.get(r);
  if (typeof i == "string")
    n = i;
  else {
    var a = JSON.stringify(r, function(s, u) {
      return st(u) ? Object.keys(u).sort().reduce(function(o, l) {
        return o[l] = u[l], o;
      }, {}) : u;
    });
    st(r) && (Xt == null || Xt.set(r, a)), n = a;
  }
  return e + "(" + n + ")";
};
function ld() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(n) {
    var i = ki(function(f) {
      var p, m;
      return (m = n.extractRehydrationInfo) == null ? void 0 : m.call(n, f, {
        reducerPath: (p = n.reducerPath) != null ? p : "api"
      });
    }), a = Se(se({
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1
    }, n), {
      extractRehydrationInfo: i,
      serializeQueryArgs: function(f) {
        var p = qi;
        if ("serializeQueryArgs" in f.endpointDefinition) {
          var m = f.endpointDefinition.serializeQueryArgs;
          p = function(d) {
            var E = m(d);
            return typeof E == "string" ? E : qi(Se(se({}, d), {
              queryArgs: E
            }));
          };
        } else
          n.serializeQueryArgs && (p = n.serializeQueryArgs);
        return p(f);
      },
      tagTypes: _r([], n.tagTypes || [])
    }), s = {
      endpointDefinitions: {},
      batch: function(f) {
        f();
      },
      apiUid: Ps(),
      extractRehydrationInfo: i,
      hasRehydrationInfo: ki(function(f) {
        return i(f) != null;
      })
    }, u = {
      injectEndpoints: l,
      enhanceEndpoints: function(f) {
        var p = f.addTagTypes, m = f.endpoints;
        if (p)
          for (var d = 0, E = p; d < E.length; d++) {
            var b = E[d];
            a.tagTypes.includes(b) || a.tagTypes.push(b);
          }
        if (m)
          for (var y = 0, O = Object.entries(m); y < O.length; y++) {
            var R = O[y], v = R[0], _ = R[1];
            typeof _ == "function" ? _(s.endpointDefinitions[v]) : Object.assign(s.endpointDefinitions[v] || {}, _);
          }
        return u;
      }
    }, o = t.map(function(f) {
      return f.init(u, a, s);
    });
    function l(f) {
      for (var p = f.endpoints({
        query: function(_) {
          return Se(se({}, _), { type: Ce.query });
        },
        mutation: function(_) {
          return Se(se({}, _), { type: Ce.mutation });
        }
      }), m = 0, d = Object.entries(p); m < d.length; m++) {
        var E = d[m], b = E[0], y = E[1];
        if (!f.overrideExisting && b in s.endpointDefinitions) {
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error("called `injectEndpoints` to override already-existing endpointName " + b + " without specifying `overrideExisting: true`");
          continue;
        }
        s.endpointDefinitions[b] = y;
        for (var O = 0, R = o; O < R.length; O++) {
          var v = R[O];
          v.injectEndpoint(b, y);
        }
      }
      return u;
    }
    return u.injectEndpoints({ endpoints: n.endpoints });
  };
}
function dd(t) {
  for (var e in t)
    return !1;
  return !0;
}
var fd = 2147483647 / 1e3 - 1, hd = function(t) {
  var e = t.reducerPath, r = t.api, n = t.context, i = t.internalState, a = r.internalActions, s = a.removeQueryResult, u = a.unsubscribeQueryResult;
  function o(m) {
    var d = i.currentSubscriptions[m];
    return !!d && !dd(d);
  }
  var l = {}, f = function(m, d, E) {
    var b;
    if (u.match(m)) {
      var y = d.getState()[e], O = m.payload.queryCacheKey;
      p(O, (b = y.queries[O]) == null ? void 0 : b.endpointName, d, y.config);
    }
    if (r.util.resetApiState.match(m))
      for (var R = 0, v = Object.entries(l); R < v.length; R++) {
        var _ = v[R], g = _[0], h = _[1];
        h && clearTimeout(h), delete l[g];
      }
    if (n.hasRehydrationInfo(m))
      for (var y = d.getState()[e], I = n.extractRehydrationInfo(m).queries, w = 0, S = Object.entries(I); w < S.length; w++) {
        var T = S[w], O = T[0], k = T[1];
        p(O, k == null ? void 0 : k.endpointName, d, y.config);
      }
  };
  function p(m, d, E, b) {
    var y, O = n.endpointDefinitions[d], R = (y = O == null ? void 0 : O.keepUnusedDataFor) != null ? y : b.keepUnusedDataFor;
    if (R !== 1 / 0) {
      var v = Math.max(0, Math.min(R, fd));
      if (!o(m)) {
        var _ = l[m];
        _ && clearTimeout(_), l[m] = setTimeout(function() {
          o(m) || E.dispatch(s({ queryCacheKey: m })), delete l[m];
        }, v * 1e3);
      }
    }
  }
  return f;
}, pd = function(t) {
  var e = t.reducerPath, r = t.context, n = t.context.endpointDefinitions, i = t.mutationThunk, a = t.api, s = t.assertTagType, u = t.refetchQuery, o = a.internalActions.removeQueryResult, l = Gi(_t(i), fn(i)), f = function(m, d) {
    l(m) && p(cs(m, "invalidatesTags", n, s), d), a.util.invalidateTags.match(m) && p(us(m.payload, void 0, void 0, void 0, void 0, s), d);
  };
  function p(m, d) {
    var E = d.getState(), b = E[e], y = a.util.selectInvalidatedBy(E, m);
    r.batch(function() {
      for (var O, R = Array.from(y.values()), v = 0, _ = R; v < _.length; v++) {
        var g = _[v].queryCacheKey, h = b.queries[g], I = (O = b.subscriptions[g]) != null ? O : {};
        h && (Object.keys(I).length === 0 ? d.dispatch(o({
          queryCacheKey: g
        })) : h.status !== re.uninitialized && d.dispatch(u(h, g)));
      }
    });
  }
  return f;
}, vd = function(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.api, i = t.refetchQuery, a = t.internalState, s = {}, u = function(d, E) {
    (n.internalActions.updateSubscriptionOptions.match(d) || n.internalActions.unsubscribeQueryResult.match(d)) && l(d.payload, E), (r.pending.match(d) || r.rejected.match(d) && d.meta.condition) && l(d.meta.arg, E), (r.fulfilled.match(d) || r.rejected.match(d) && !d.meta.condition) && o(d.meta.arg, E), n.util.resetApiState.match(d) && p();
  };
  function o(d, E) {
    var b = d.queryCacheKey, y = E.getState()[e], O = y.queries[b], R = a.currentSubscriptions[b];
    if (!(!O || O.status === re.uninitialized)) {
      var v = m(R);
      if (Number.isFinite(v)) {
        var _ = s[b];
        _ != null && _.timeout && (clearTimeout(_.timeout), _.timeout = void 0);
        var g = Date.now() + v, h = s[b] = {
          nextPollTimestamp: g,
          pollingInterval: v,
          timeout: setTimeout(function() {
            h.timeout = void 0, E.dispatch(i(O, b));
          }, v)
        };
      }
    }
  }
  function l(d, E) {
    var b = d.queryCacheKey, y = E.getState()[e], O = y.queries[b], R = a.currentSubscriptions[b];
    if (!(!O || O.status === re.uninitialized)) {
      var v = m(R);
      if (!Number.isFinite(v)) {
        f(b);
        return;
      }
      var _ = s[b], g = Date.now() + v;
      (!_ || g < _.nextPollTimestamp) && o({ queryCacheKey: b }, E);
    }
  }
  function f(d) {
    var E = s[d];
    E != null && E.timeout && clearTimeout(E.timeout), delete s[d];
  }
  function p() {
    for (var d = 0, E = Object.keys(s); d < E.length; d++) {
      var b = E[d];
      f(b);
    }
  }
  function m(d) {
    d === void 0 && (d = {});
    var E = Number.POSITIVE_INFINITY;
    for (var b in d)
      d[b].pollingInterval && (E = Math.min(d[b].pollingInterval, E));
    return E;
  }
  return u;
}, gd = function(t) {
  var e = t.reducerPath, r = t.context, n = t.api, i = t.refetchQuery, a = t.internalState, s = n.internalActions.removeQueryResult, u = function(l, f) {
    Cn.match(l) && o(f, "refetchOnFocus"), Pn.match(l) && o(f, "refetchOnReconnect");
  };
  function o(l, f) {
    var p = l.getState()[e], m = p.queries, d = a.currentSubscriptions;
    r.batch(function() {
      for (var E = 0, b = Object.keys(d); E < b.length; E++) {
        var y = b[E], O = m[y], R = d[y];
        if (!(!R || !O)) {
          var v = Object.values(R).some(function(_) {
            return _[f] === !0;
          }) || Object.values(R).every(function(_) {
            return _[f] === void 0;
          }) && p.config[f];
          v && (Object.keys(R).length === 0 ? l.dispatch(s({
            queryCacheKey: y
          })) : O.status !== re.uninitialized && l.dispatch(i(O, y)));
        }
      }
    });
  }
  return u;
}, Bi = new Error("Promise never resolved before cacheEntryRemoved."), md = function(t) {
  var e = t.api, r = t.reducerPath, n = t.context, i = t.queryThunk, a = t.mutationThunk;
  t.internalState;
  var s = Wn(i), u = Wn(a), o = _t(i, a), l = {}, f = function(d, E, b) {
    var y = p(d);
    if (i.pending.match(d)) {
      var O = b[r].queries[y], R = E.getState()[r].queries[y];
      !O && R && m(d.meta.arg.endpointName, d.meta.arg.originalArgs, y, E, d.meta.requestId);
    } else if (a.pending.match(d)) {
      var R = E.getState()[r].mutations[y];
      R && m(d.meta.arg.endpointName, d.meta.arg.originalArgs, y, E, d.meta.requestId);
    } else if (o(d)) {
      var v = l[y];
      v != null && v.valueResolved && (v.valueResolved({
        data: d.payload,
        meta: d.meta.baseQueryMeta
      }), delete v.valueResolved);
    } else if (e.internalActions.removeQueryResult.match(d) || e.internalActions.removeMutationResult.match(d)) {
      var v = l[y];
      v && (delete l[y], v.cacheEntryRemoved());
    } else if (e.util.resetApiState.match(d))
      for (var _ = 0, g = Object.entries(l); _ < g.length; _++) {
        var h = g[_], I = h[0], v = h[1];
        delete l[I], v.cacheEntryRemoved();
      }
  };
  function p(d) {
    return s(d) ? d.meta.arg.queryCacheKey : u(d) ? d.meta.requestId : e.internalActions.removeQueryResult.match(d) ? d.payload.queryCacheKey : e.internalActions.removeMutationResult.match(d) ? Ut(d.payload) : "";
  }
  function m(d, E, b, y, O) {
    var R = n.endpointDefinitions[d], v = R == null ? void 0 : R.onCacheEntryAdded;
    if (v) {
      var _ = {}, g = new Promise(function(k) {
        _.cacheEntryRemoved = k;
      }), h = Promise.race([
        new Promise(function(k) {
          _.valueResolved = k;
        }),
        g.then(function() {
          throw Bi;
        })
      ]);
      h.catch(function() {
      }), l[b] = _;
      var I = e.endpoints[d].select(R.type === Ce.query ? E : b), w = y.dispatch(function(k, A, C) {
        return C;
      }), S = Se(se({}, y), {
        getCacheEntry: function() {
          return I(y.getState());
        },
        requestId: O,
        extra: w,
        updateCachedData: R.type === Ce.query ? function(k) {
          return y.dispatch(e.util.updateQueryData(d, E, k));
        } : void 0,
        cacheDataLoaded: h,
        cacheEntryRemoved: g
      }), T = v(E, S);
      Promise.resolve(T).catch(function(k) {
        if (k !== Bi)
          throw k;
      });
    }
  }
  return f;
}, yd = function(t) {
  var e = t.api, r = t.context, n = t.queryThunk, i = t.mutationThunk, a = Yi(n, i), s = Xi(n, i), u = _t(n, i), o = {}, l = function(f, p) {
    var m, d, E;
    if (a(f)) {
      var b = f.meta, y = b.requestId, O = b.arg, R = O.endpointName, v = O.originalArgs, _ = r.endpointDefinitions[R], g = _ == null ? void 0 : _.onQueryStarted;
      if (g) {
        var h = {}, I = new Promise(function(M, U) {
          h.resolve = M, h.reject = U;
        });
        I.catch(function() {
        }), o[y] = h;
        var w = e.endpoints[R].select(_.type === Ce.query ? v : y), S = p.dispatch(function(M, U, L) {
          return L;
        }), T = Se(se({}, p), {
          getCacheEntry: function() {
            return w(p.getState());
          },
          requestId: y,
          extra: S,
          updateCachedData: _.type === Ce.query ? function(M) {
            return p.dispatch(e.util.updateQueryData(R, v, M));
          } : void 0,
          queryFulfilled: I
        });
        g(v, T);
      }
    } else if (u(f)) {
      var k = f.meta, y = k.requestId, A = k.baseQueryMeta;
      (m = o[y]) == null || m.resolve({
        data: f.payload,
        meta: A
      }), delete o[y];
    } else if (s(f)) {
      var C = f.meta, y = C.requestId, D = C.rejectedWithValue, A = C.baseQueryMeta;
      (E = o[y]) == null || E.reject({
        error: (d = f.payload) != null ? d : f.error,
        isUnhandledError: !D,
        meta: A
      }), delete o[y];
    }
  };
  return l;
}, bd = function(t) {
  var e = t.api, r = t.context.apiUid, n = t.reducerPath;
  return function(i, a) {
    var s, u;
    e.util.resetApiState.match(i) && a.dispatch(e.internalActions.middlewareRegistered(r)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(i) && i.payload === r && ((u = (s = a.getState()[n]) == null ? void 0 : s.config) == null ? void 0 : u.middlewareRegistered) === "conflict" && console.warn('There is a mismatch between slice and middleware for the reducerPath "' + n + `".
You can only have one api per reducer path, this will lead to crashes in various situations!` + (n === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""));
  };
}, $i, _d = typeof queueMicrotask == "function" ? queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis) : function(t) {
  return ($i || ($i = Promise.resolve())).then(t).catch(function(e) {
    return setTimeout(function() {
      throw e;
    }, 0);
  });
}, Id = function(t) {
  var e = t.api, r = t.queryThunk, n = t.internalState, i = e.reducerPath + "/subscriptions", a = null, s = !1, u = e.internalActions, o = u.updateSubscriptionOptions, l = u.unsubscribeQueryResult, f = function(p, m) {
    var d, E, b, y, O, R, v, _, g;
    if (o.match(m)) {
      var h = m.payload, I = h.queryCacheKey, w = h.requestId, S = h.options;
      return (d = p == null ? void 0 : p[I]) != null && d[w] && (p[I][w] = S), !0;
    }
    if (l.match(m)) {
      var T = m.payload, I = T.queryCacheKey, w = T.requestId;
      return p[I] && delete p[I][w], !0;
    }
    if (e.internalActions.removeQueryResult.match(m))
      return delete p[m.payload.queryCacheKey], !0;
    if (r.pending.match(m)) {
      var k = m.meta, A = k.arg, w = k.requestId;
      if (A.subscribe) {
        var C = (b = p[E = A.queryCacheKey]) != null ? b : p[E] = {};
        return C[w] = (O = (y = A.subscriptionOptions) != null ? y : C[w]) != null ? O : {}, !0;
      }
    }
    if (r.rejected.match(m)) {
      var D = m.meta, M = D.condition, A = D.arg, w = D.requestId;
      if (M && A.subscribe) {
        var C = (v = p[R = A.queryCacheKey]) != null ? v : p[R] = {};
        return C[w] = (g = (_ = A.subscriptionOptions) != null ? _ : C[w]) != null ? g : {}, !0;
      }
    }
    return !1;
  };
  return function(p, m) {
    var d, E;
    if (a || (a = JSON.parse(JSON.stringify(n.currentSubscriptions))), e.util.resetApiState.match(p))
      return a = n.currentSubscriptions = {}, [!0, !1];
    if (e.internalActions.internal_probeSubscription.match(p)) {
      var b = p.payload, y = b.queryCacheKey, O = b.requestId, R = !!((d = n.currentSubscriptions[y]) != null && d[O]);
      return [!1, R];
    }
    var v = f(n.currentSubscriptions, p);
    if (v) {
      s || (_d(function() {
        var I = JSON.parse(JSON.stringify(n.currentSubscriptions)), w = ts(a, function() {
          return I;
        }), S = w[1];
        m.next(e.internalActions.subscriptionsUpdated(S)), a = I, s = !1;
      }), s = !0);
      var _ = !!((E = p.type) != null && E.startsWith(i)), g = r.rejected.match(p) && p.meta.condition && !!p.meta.arg.subscribe, h = !_ && !g;
      return [h, !1];
    }
    return [!0, !1];
  };
};
function Ed(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.api, i = t.context, a = i.apiUid, s = {
    invalidateTags: bt(e + "/invalidateTags")
  }, u = function(p) {
    return !!p && typeof p.type == "string" && p.type.startsWith(e + "/");
  }, o = [
    bd,
    hd,
    pd,
    vd,
    md,
    yd
  ], l = function(p) {
    var m = !1, d = {
      currentSubscriptions: {}
    }, E = Se(se({}, t), {
      internalState: d,
      refetchQuery: f
    }), b = o.map(function(R) {
      return R(E);
    }), y = Id(E), O = gd(E);
    return function(R) {
      return function(v) {
        m || (m = !0, p.dispatch(n.internalActions.middlewareRegistered(a)));
        var _ = Se(se({}, p), { next: R }), g = p.getState(), h = y(v, _, g), I = h[0], w = h[1], S;
        if (I ? S = R(v) : S = w, p.getState()[e] && (O(v, _, g), u(v) || i.hasRehydrationInfo(v)))
          for (var T = 0, k = b; T < k.length; T++) {
            var A = k[T];
            A(v, _, g);
          }
        return S;
      };
    };
  };
  return { middleware: l, actions: s };
  function f(p, m, d) {
    return d === void 0 && (d = {}), r(se({
      type: "query",
      endpointName: p.endpointName,
      originalArgs: p.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: m
    }, d));
  }
}
function Ve(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  Object.assign.apply(Object, _r([t], e));
}
var Hi = /* @__PURE__ */ Symbol(), Td = function() {
  return {
    name: Hi,
    init: function(t, e, r) {
      var n = e.baseQuery, i = e.tagTypes, a = e.reducerPath, s = e.serializeQueryArgs, u = e.keepUnusedDataFor, o = e.refetchOnMountOrArgChange, l = e.refetchOnFocus, f = e.refetchOnReconnect;
      Ml();
      var p = function(B) {
        return typeof process < "u" && process.env.NODE_ENV === "development" && (i.includes(B.type) || console.error("Tag type '" + B.type + "' was used, but not specified in `tagTypes`!")), B;
      };
      Object.assign(t, {
        reducerPath: a,
        endpoints: {},
        internalActions: {
          onOnline: Pn,
          onOffline: ss,
          onFocus: Cn,
          onFocusLost: as
        },
        util: {}
      });
      var m = od({
        baseQuery: n,
        reducerPath: a,
        context: r,
        api: t,
        serializeQueryArgs: s
      }), d = m.queryThunk, E = m.mutationThunk, b = m.patchQueryData, y = m.updateQueryData, O = m.upsertQueryData, R = m.prefetch, v = m.buildMatchThunkActions, _ = ud({
        context: r,
        queryThunk: d,
        mutationThunk: E,
        reducerPath: a,
        assertTagType: p,
        config: {
          refetchOnFocus: l,
          refetchOnReconnect: f,
          refetchOnMountOrArgChange: o,
          keepUnusedDataFor: u,
          reducerPath: a
        }
      }), g = _.reducer, h = _.actions;
      Ve(t.util, {
        patchQueryData: b,
        updateQueryData: y,
        upsertQueryData: O,
        prefetch: R,
        resetApiState: h.resetApiState
      }), Ve(t.internalActions, h);
      var I = Ed({
        reducerPath: a,
        context: r,
        queryThunk: d,
        mutationThunk: E,
        api: t,
        assertTagType: p
      }), w = I.middleware, S = I.actions;
      Ve(t.util, S), Ve(t, { reducer: g, middleware: w });
      var T = cd({
        serializeQueryArgs: s,
        reducerPath: a
      }), k = T.buildQuerySelector, A = T.buildMutationSelector, C = T.selectInvalidatedBy;
      Ve(t.util, { selectInvalidatedBy: C });
      var D = sd({
        queryThunk: d,
        mutationThunk: E,
        api: t,
        serializeQueryArgs: s,
        context: r
      }), M = D.buildInitiateQuery, U = D.buildInitiateMutation, L = D.getRunningMutationThunk, F = D.getRunningMutationsThunk, $ = D.getRunningQueriesThunk, W = D.getRunningQueryThunk, H = D.getRunningOperationPromises, K = D.removalWarning;
      return Ve(t.util, {
        getRunningOperationPromises: H,
        getRunningOperationPromise: K,
        getRunningMutationThunk: L,
        getRunningMutationsThunk: F,
        getRunningQueryThunk: W,
        getRunningQueriesThunk: $
      }), {
        name: Hi,
        injectEndpoint: function(B, G) {
          var V, J, te = t;
          (J = (V = te.endpoints)[B]) != null || (V[B] = {}), os(G) ? Ve(te.endpoints[B], {
            name: B,
            select: k(B, G),
            initiate: M(B, G)
          }, v(d, B)) : id(G) && Ve(te.endpoints[B], {
            name: B,
            select: A(),
            initiate: U(B)
          }, v(E, B));
        }
      };
    }
  };
}, wd = globalThis && globalThis.__spreadArray || function(t, e) {
  for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
    t[i] = e[r];
  return t;
}, Sd = Object.defineProperty, Rd = Object.defineProperties, Od = Object.getOwnPropertyDescriptors, Vi = Object.getOwnPropertySymbols, kd = Object.prototype.hasOwnProperty, Ad = Object.prototype.propertyIsEnumerable, zi = function(t, e, r) {
  return e in t ? Sd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
}, De = function(t, e) {
  for (var r in e || (e = {}))
    kd.call(e, r) && zi(t, r, e[r]);
  if (Vi)
    for (var n = 0, i = Vi(e); n < i.length; n++) {
      var r = i[n];
      Ad.call(e, r) && zi(t, r, e[r]);
    }
  return t;
}, sr = function(t, e) {
  return Rd(t, Od(e));
};
function Wi(t, e, r, n) {
  var i = _e(function() {
    return {
      queryArgs: t,
      serialized: typeof t == "object" ? e({ queryArgs: t, endpointDefinition: r, endpointName: n }) : t
    };
  }, [t, e, r, n]), a = et(i);
  return Ne(function() {
    a.current.serialized !== i.serialized && (a.current = i);
  }, [i]), a.current.serialized === i.serialized ? a.current.queryArgs : t;
}
var Qr = Symbol();
function Kr(t) {
  var e = et(t);
  return Ne(function() {
    or(e.current, t) || (e.current = t);
  }, [t]), or(e.current, t) ? e.current : t;
}
var Zt = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Cd = function(t) {
  var e = t.endpointName, r = t.queryArgs, n = "", i = Zt == null ? void 0 : Zt.get(r);
  if (typeof i == "string")
    n = i;
  else {
    var a = JSON.stringify(r, function(s, u) {
      return st(u) ? Object.keys(u).sort().reduce(function(o, l) {
        return o[l] = u[l], o;
      }, {}) : u;
    });
    st(r) && (Zt == null || Zt.set(r, a)), n = a;
  }
  return e + "(" + n + ")";
}, Pd = typeof window < "u" && window.document && window.document.createElement ? As : Ne, Dd = function(t) {
  return t;
}, Nd = function(t) {
  return t.isUninitialized ? sr(De({}, t), {
    isUninitialized: !1,
    isFetching: !0,
    isLoading: t.data === void 0,
    status: re.pending
  }) : t;
};
function Md(t) {
  var e = t.api, r = t.moduleOptions, n = r.batch, i = r.useDispatch, a = r.useSelector, s = r.useStore, u = r.unstable__sideEffectsInRender, o = t.serializeQueryArgs, l = t.context, f = u ? function(b) {
    return b();
  } : Ne;
  return { buildQueryHooks: d, buildMutationHook: E, usePrefetch: m };
  function p(b, y, O) {
    if (y != null && y.endpointName && b.isUninitialized) {
      var R = y.endpointName, v = l.endpointDefinitions[R];
      o({
        queryArgs: y.originalArgs,
        endpointDefinition: v,
        endpointName: R
      }) === o({
        queryArgs: O,
        endpointDefinition: v,
        endpointName: R
      }) && (y = void 0);
    }
    var _ = b.isSuccess ? b.data : y == null ? void 0 : y.data;
    _ === void 0 && (_ = b.data);
    var g = _ !== void 0, h = b.isLoading, I = !g && h, w = b.isSuccess || h && g;
    return sr(De({}, b), {
      data: _,
      currentData: b.data,
      isFetching: h,
      isLoading: I,
      isSuccess: w
    });
  }
  function m(b, y) {
    var O = i(), R = Kr(y);
    return Ot(function(v, _) {
      return O(e.util.prefetch(b, v, De(De({}, R), _)));
    }, [b, O, R]);
  }
  function d(b) {
    var y = function(v, _) {
      var g = _ === void 0 ? {} : _, h = g.refetchOnReconnect, I = g.refetchOnFocus, w = g.refetchOnMountOrArgChange, S = g.skip, T = S === void 0 ? !1 : S, k = g.pollingInterval, A = k === void 0 ? 0 : k, C = e.endpoints[b].initiate, D = i(), M = Wi(T ? nt : v, Cd, l.endpointDefinitions[b], b), U = Kr({
        refetchOnReconnect: h,
        refetchOnFocus: I,
        pollingInterval: A
      }), L = et(!1), F = et(), $ = F.current || {}, W = $.queryCacheKey, H = $.requestId, K = !1;
      if (W && H) {
        var B = D(e.internalActions.internal_probeSubscription({
          queryCacheKey: W,
          requestId: H
        }));
        if (process.env.NODE_ENV !== "production" && typeof B != "boolean")
          throw new Error('Warning: Middleware for RTK-Query API at reducerPath "' + e.reducerPath + `" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
        K = !!B;
      }
      var G = !K && L.current;
      return f(function() {
        L.current = K;
      }), f(function() {
        G && (F.current = void 0);
      }, [G]), f(function() {
        var V, J = F.current;
        if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(G), M === nt) {
          J == null || J.unsubscribe(), F.current = void 0;
          return;
        }
        var te = (V = F.current) == null ? void 0 : V.subscriptionOptions;
        if (!J || J.arg !== M) {
          J == null || J.unsubscribe();
          var de = D(C(M, {
            subscriptionOptions: U,
            forceRefetch: w
          }));
          F.current = de;
        } else
          U !== te && J.updateSubscriptionOptions(U);
      }, [
        D,
        C,
        w,
        M,
        U,
        G
      ]), Ne(function() {
        return function() {
          var V;
          (V = F.current) == null || V.unsubscribe(), F.current = void 0;
        };
      }, []), _e(function() {
        return {
          refetch: function() {
            var V;
            if (!F.current)
              throw new Error("Cannot refetch a query that has not been started yet.");
            return (V = F.current) == null ? void 0 : V.refetch();
          }
        };
      }, []);
    }, O = function(v) {
      var _ = v === void 0 ? {} : v, g = _.refetchOnReconnect, h = _.refetchOnFocus, I = _.pollingInterval, w = I === void 0 ? 0 : I, S = e.endpoints[b].initiate, T = i(), k = Vn(Qr), A = k[0], C = k[1], D = et(), M = Kr({
        refetchOnReconnect: g,
        refetchOnFocus: h,
        pollingInterval: w
      });
      f(function() {
        var F, $, W = (F = D.current) == null ? void 0 : F.subscriptionOptions;
        M !== W && (($ = D.current) == null || $.updateSubscriptionOptions(M));
      }, [M]);
      var U = et(M);
      f(function() {
        U.current = M;
      }, [M]);
      var L = Ot(function(F, $) {
        $ === void 0 && ($ = !1);
        var W;
        return n(function() {
          var H;
          (H = D.current) == null || H.unsubscribe(), D.current = W = T(S(F, {
            subscriptionOptions: U.current,
            forceRefetch: !$
          })), C(F);
        }), W;
      }, [T, S]);
      return Ne(function() {
        return function() {
          var F;
          (F = D == null ? void 0 : D.current) == null || F.unsubscribe();
        };
      }, []), Ne(function() {
        A !== Qr && !D.current && L(A, !0);
      }, [A, L]), _e(function() {
        return [L, A];
      }, [L, A]);
    }, R = function(v, _) {
      var g = _ === void 0 ? {} : _, h = g.skip, I = h === void 0 ? !1 : h, w = g.selectFromResult, S = e.endpoints[b].select, T = Wi(I ? nt : v, o, l.endpointDefinitions[b], b), k = et(), A = _e(function() {
        return At([
          S(T),
          function(L, F) {
            return F;
          },
          function(L) {
            return T;
          }
        ], p);
      }, [S, T]), C = _e(function() {
        return w ? At([A], w) : A;
      }, [A, w]), D = a(function(L) {
        return C(L, k.current);
      }, or), M = s(), U = A(M.getState(), k.current);
      return Pd(function() {
        k.current = U;
      }, [U]), D;
    };
    return {
      useQueryState: R,
      useQuerySubscription: y,
      useLazyQuerySubscription: O,
      useLazyQuery: function(v) {
        var _ = O(v), g = _[0], h = _[1], I = R(h, sr(De({}, v), {
          skip: h === Qr
        })), w = _e(function() {
          return { lastArg: h };
        }, [h]);
        return _e(function() {
          return [g, I, w];
        }, [g, I, w]);
      },
      useQuery: function(v, _) {
        var g = y(v, _), h = R(v, De({
          selectFromResult: v === nt || _ != null && _.skip ? void 0 : Nd
        }, _)), I = h.data, w = h.status, S = h.isLoading, T = h.isSuccess, k = h.isError, A = h.error;
        return Hn({ data: I, status: w, isLoading: S, isSuccess: T, isError: k, error: A }), _e(function() {
          return De(De({}, h), g);
        }, [h, g]);
      }
    };
  }
  function E(b) {
    return function(y) {
      var O = y === void 0 ? {} : y, R = O.selectFromResult, v = R === void 0 ? Dd : R, _ = O.fixedCacheKey, g = e.endpoints[b], h = g.select, I = g.initiate, w = i(), S = Vn(), T = S[0], k = S[1];
      Ne(function() {
        return function() {
          T != null && T.arg.fixedCacheKey || T == null || T.reset();
        };
      }, [T]);
      var A = Ot(function(J) {
        var te = w(I(J, { fixedCacheKey: _ }));
        return k(te), te;
      }, [w, I, _]), C = (T || {}).requestId, D = _e(function() {
        return At([h({ fixedCacheKey: _, requestId: T == null ? void 0 : T.requestId })], v);
      }, [h, T, v, _]), M = a(D, or), U = _ == null ? T == null ? void 0 : T.arg.originalArgs : void 0, L = Ot(function() {
        n(function() {
          T && k(void 0), _ && w(e.internalActions.removeMutationResult({
            requestId: C,
            fixedCacheKey: _
          }));
        });
      }, [w, _, T, C]), F = M.endpointName, $ = M.data, W = M.status, H = M.isLoading, K = M.isSuccess, B = M.isError, G = M.error;
      Hn({
        endpointName: F,
        data: $,
        status: W,
        isLoading: H,
        isSuccess: K,
        isError: B,
        error: G
      });
      var V = _e(function() {
        return sr(De({}, M), { originalArgs: U, reset: L });
      }, [M, U, L]);
      return _e(function() {
        return [A, V];
      }, [A, V]);
    };
  }
}
var Tr;
(function(t) {
  t.query = "query", t.mutation = "mutation";
})(Tr || (Tr = {}));
function xd(t) {
  return t.type === Tr.query;
}
function Ld(t) {
  return t.type === Tr.mutation;
}
function Gr(t) {
  return t.replace(t[0], t[0].toUpperCase());
}
function er(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  Object.assign.apply(Object, wd([t], e));
}
var Fd = /* @__PURE__ */ Symbol(), Ud = function(t) {
  var e = t === void 0 ? {} : t, r = e.batch, n = r === void 0 ? Ns : r, i = e.useDispatch, a = i === void 0 ? Ms : i, s = e.useSelector, u = s === void 0 ? xs : s, o = e.useStore, l = o === void 0 ? Ls : o, f = e.unstable__sideEffectsInRender, p = f === void 0 ? !1 : f;
  return {
    name: Fd,
    init: function(m, d, E) {
      var b = d.serializeQueryArgs, y = m, O = Md({
        api: m,
        moduleOptions: {
          batch: n,
          useDispatch: a,
          useSelector: u,
          useStore: l,
          unstable__sideEffectsInRender: p
        },
        serializeQueryArgs: b,
        context: E
      }), R = O.buildQueryHooks, v = O.buildMutationHook, _ = O.usePrefetch;
      return er(y, { usePrefetch: _ }), er(E, { batch: n }), {
        injectEndpoint: function(g, h) {
          if (xd(h)) {
            var I = R(g), w = I.useQuery, S = I.useLazyQuery, T = I.useLazyQuerySubscription, k = I.useQueryState, A = I.useQuerySubscription;
            er(y.endpoints[g], {
              useQuery: w,
              useLazyQuery: S,
              useLazyQuerySubscription: T,
              useQueryState: k,
              useQuerySubscription: A
            }), m["use" + Gr(g) + "Query"] = w, m["useLazy" + Gr(g) + "Query"] = S;
          } else if (Ld(h)) {
            var C = v(g);
            er(y.endpoints[g], {
              useMutation: C
            }), m["use" + Gr(g) + "Mutation"] = C;
          }
        }
      };
    }
  };
}, jd = /* @__PURE__ */ ld(Td(), Ud());
const at = jd({
  baseQuery: nd({
    baseUrl: ie.endpoint,
    prepareHeaders: (t, { getState: e, endpoint: r }) => {
      const { isAuthenticated: n, refresh_token: i } = e().userReducer;
      return n && i && r === "updateLogin" && t.set(
        ie.refreshTokenHeader,
        ie.keywoardRefreshTokenHeader ? `${ie.keywoardRefreshTokenHeader} ${i}` : i
      ), t.set("Content-Type", "application/json");
    }
  }),
  endpoints: (t) => ({
    login: t.mutation({
      query({ email: e, encodedBody: r, password: n, username: i, token: a }) {
        if (a)
          return {
            url: "",
            method: "POST",
            headers: {
              Authorization: `${ie.keywoard} ${a}`
            }
          };
        if (r)
          return {
            url: ie.urlForBase64 ?? "",
            method: "POST",
            headers: {
              authorization: "Basic " + r
            }
          };
        let s = {};
        return n && (s = { ...s, password: n }), e && (s = { ...s, email: e }), i && (s = { ...s, username: i }), {
          url: ie.urlForEmailOrUser ?? "",
          method: "POST",
          body: s
        };
      }
    }),
    updateLogin: t.mutation({
      query() {
        return {
          url: ie.urlForRefreshToken ?? "login/update",
          method: "PUT"
        };
      }
    })
  })
}), { useLoginMutation: qd, useUpdateLoginMutation: Bd } = at, $d = (t) => Wt(Qt(), Za).catch((e) => {
  console.log(e);
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), Hd = (t) => Wt(Qt(), Xa).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), Vd = (t) => Wt(Qt(), Sl).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), zd = (t) => Wt(Qt(), Rl).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), Wd = (t) => Wt(Qt(), Ol).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), Qd = (t, e) => {
  const [r] = qd(), [n] = Bd(), i = tt({
    email: "",
    username: "",
    password: ""
  }), a = tt(!1), s = tt(!1), u = tt(!1), o = tt({}), l = () => {
    Cs(() => {
      a.value = !a.value, s.value && (s.value = !s.value);
    });
  }, f = (E) => {
    const { name: b, value: y } = E.target;
    i.value = {
      ...i.value,
      [b]: y
    };
  }, p = (E) => {
    if (E.preventDefault(), ie.hasToS && !a.value) {
      s.value = !0;
      return;
    }
    if (u.value)
      return;
    u.value = !0;
    let b = {};
    if (ie.acceptUsername ? b = {
      username: i.value.username,
      password: i.value.password
    } : b = {
      email: i.value.email,
      password: i.value.password
    }, ie.bodyAsBase64) {
      const y = Object.entries(b).map(([R, v]) => `${R}=${v}`).join("&");
      b = {
        encodedBody: btoa(y)
      };
    }
    r(b), u.value = !1;
  }, m = async (E) => {
    r({ token: E }).unwrap().then((b) => {
      t(async (y, O, R) => {
        O && (clearInterval(O), O = void 0), O = setInterval(() => {
          n().unwrap().then((v) => y.value = v).catch((v) => {
            clearInterval(O), "data" in v ? R.value = {
              code: "auth/firebase-credential-not-provided",
              message: v.data && (Object.values(v.data).find((_) => typeof _ == "string") ?? v.data)
            } : "status" in v && (R.value = {
              code: "auth/fetch-failed",
              message: "error" in v ? v.error : "Unexpected Error"
            });
          });
        }, b.expiry * 1e3 - 200), y.value = b;
      }), typeof e == "function" ? e((y) => !y) : e.value = !e.value;
    }).catch((b) => {
      "data" in b ? o.value = {
        code: "auth/firebase-credential-not-provided",
        message: b.data && (Object.values(b.data).find((y) => typeof y == "string") ?? b.data)
      } : "status" in b && (o.value = {
        code: "auth/fetch-failed",
        message: "error" in b ? b.error : "Unexpected Error"
      });
    });
  };
  return {
    form: i,
    radio: a,
    isLoading: u,
    handleError: o,
    confirmTp: s,
    handleChange: f,
    handlerRadio: l,
    handleSocialLogin: async (E, b) => {
      if (E.preventDefault(), ie.hasToS && !a.value) {
        s.value = !0;
        return;
      }
      if (!u.value) {
        switch (u.value = !0, b) {
          case Zi:
            await Hd(o).then(
              async (y) => {
                y && (Ee.credentialFromResult(y) === null && (o.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), y.user.getIdToken().then(m));
              }
            );
            break;
          case ea:
            await $d(o).then(
              async (y) => {
                y && (Ie.credentialFromResult(y) === null && (o.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), y.user.getIdToken().then(m));
              }
            );
            break;
          case ta:
            await Vd(o).then(
              async (y) => {
                y && (we.credentialFromResult(y) === null && (o.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), y.user.getIdToken().then(m));
              }
            );
            break;
          case ra:
            await zd(o).then(
              async (y) => {
                y && (Te.credentialFromResult(y) === null && (o.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), y.user.getIdToken().then(m));
              }
            );
            break;
          case na:
            await Wd(o).then(
              async (y) => {
                y && (pt.credentialFromResult(y) === null && (o.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), y.user.getIdToken().then(m));
              }
            );
            break;
        }
        u.value = !1;
      }
    },
    handleSubmit: p
  };
}, Kd = ({ isOpen: t, message: e, authManager: r }) => {
  const {
    form: n,
    radio: i,
    confirmTp: a,
    isLoading: s,
    handleError: u,
    handleSubmit: o,
    handleChange: l,
    handlerRadio: f,
    handleSocialLogin: p
  } = Qd(r, t);
  return /* @__PURE__ */ x.jsx(
    qs,
    {
      title: "Log In",
      closeAction: t,
      message: s.value ? /* @__PURE__ */ x.jsx(Bs, {}) : e,
      children: /* @__PURE__ */ x.jsxs("div", { className: "login-container", children: [
        /* @__PURE__ */ x.jsxs("div", { className: "login", children: [
          /* @__PURE__ */ x.jsxs("div", { children: [
            Qs(ie.signInMethods).map(
              ({ className: m, name: d, constName: E, icon: b }, y) => /* @__PURE__ */ x.jsxs("button", { onClick: (O) => p(O, E), className: m, children: [
                b && b,
                d
              ] }, y)
            ),
            u.value.message && /* @__PURE__ */ x.jsx("span", { className: "notify error", children: ie.firebaseErrorMessages ? $s(ie.firebaseErrorMessages, u.value) : u.value.message })
          ] }),
          /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsxs("form", { className: "email", onSubmit: o, children: [
            ie.acceptUsername ? /* @__PURE__ */ x.jsx(x.Fragment, { children: /* @__PURE__ */ x.jsx("input", { placeholder: "Email | Username", required: !0, name: "username", onChange: l, value: n.value.username, type: "text" }) }) : /* @__PURE__ */ x.jsx(x.Fragment, { children: /* @__PURE__ */ x.jsx("input", { placeholder: "Email", required: !0, name: "email", onChange: l, value: n.value.email, type: "email" }) }),
            /* @__PURE__ */ x.jsx("input", { placeholder: "Password", required: !0, name: "password", onChange: l, value: n.value.password, type: "password" }),
            /* @__PURE__ */ x.jsx("button", { type: "submit", className: "email-login", children: "Continuar" })
          ] }) })
        ] }),
        ie.hasToS && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
          /* @__PURE__ */ x.jsxs("label", { className: "login-accept", children: [
            /* @__PURE__ */ x.jsx("input", { onChange: f, type: "checkbox", checked: i.value }),
            ie.hasToS.label
          ] }),
          a.value && /* @__PURE__ */ x.jsx("span", { autoFocus: !0, className: "notify error", children: ie.hasToS.errorLabel })
        ] })
      ] })
    }
  );
}, Qi = {
  user: null,
  isAuthenticated: !1,
  expiry: void 0,
  refresh_token: void 0,
  token: void 0
}, Gd = Ye({
  name: "UserSlice",
  initialState: Qi,
  reducers: {},
  extraReducers(t) {
    t.addMatcher(at.endpoints.login.matchFulfilled, (e, r) => (e = {
      ...r.payload,
      isAuthenticated: !0
    }, e)).addMatcher(at.endpoints.updateLogin.matchFulfilled, (e, r) => (e = {
      ...r.payload,
      isAuthenticated: !0
    }, e)).addMatcher(at.endpoints.updateLogin.matchRejected, (e) => (e = Qi, e));
  }
}), { reducer: Jd } = Gd, Yd = Ji({
  userReducer: Jd,
  [at.reducerPath]: at.reducer
}), Xd = Ds({
  reducer: Yd,
  middleware: (t) => t().concat(at.middleware)
}), sf = ({ isOpen: t, message: e, authManager: r }) => wl() ? /* @__PURE__ */ x.jsx(Fs, { store: Xd, children: /* @__PURE__ */ x.jsx(Kd, { isOpen: t, authManager: r, message: e }) }) : /* @__PURE__ */ x.jsx("div", { children: "Error: Missing firebaseConfig in setConfig" });
export {
  sf as Auth,
  nf as setConfig,
  af as useAuth
};
