import Ki, { useRef as We, useCallback as kt, useEffect as Ie, useMemo as _e, useDebugValue as Hn, useState as Vn, useLayoutEffect as Cs } from "react";
import { useSignal as Me, batch as Ps } from "@preact/signals-react";
import { nanoid as Ds, isPlainObject as ut, createAction as It, createAsyncThunk as zn, SHOULD_AUTOBATCH as Gt, createSlice as tt, prepareAutoBatched as Nr, isAnyOf as Gi, isFulfilled as Et, isRejectedWithValue as fn, combineReducers as Ji, createSelector as Ct, isAllOf as Mr, isPending as Yi, isRejected as Xi, createNextState as hn, isAsyncThunkAction as Wn, configureStore as Ns } from "@reduxjs/toolkit";
import { shallowEqual as or, batch as Ms, useDispatch as xs, useSelector as Ls, useStore as Fs, Provider as Us } from "react-redux";
var Jr = { exports: {} }, St = {};
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
function js() {
  if (Qn)
    return St;
  Qn = 1;
  var t = Ki, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, o, l) {
    var f, p = {}, y = null, d = null;
    l !== void 0 && (y = "" + l), o.key !== void 0 && (y = "" + o.key), o.ref !== void 0 && (d = o.ref);
    for (f in o)
      n.call(o, f) && !a.hasOwnProperty(f) && (p[f] = o[f]);
    if (u && u.defaultProps)
      for (f in o = u.defaultProps, o)
        p[f] === void 0 && (p[f] = o[f]);
    return { $$typeof: e, type: u, key: y, ref: d, props: p, _owner: i.current };
  }
  return St.Fragment = r, St.jsx = s, St.jsxs = s, St;
}
var Rt = {};
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
function qs() {
  return Kn || (Kn = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Ki, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), E = Symbol.iterator, T = "@@iterator";
    function _(c) {
      if (c === null || typeof c != "object")
        return null;
      var P = E && c[E] || c[T];
      return typeof P == "function" ? P : null;
    }
    var b = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(c) {
      {
        for (var P = arguments.length, N = new Array(P > 1 ? P - 1 : 0), j = 1; j < P; j++)
          N[j - 1] = arguments[j];
        v("error", c, N);
      }
    }
    function v(c, P, N) {
      {
        var j = b.ReactDebugCurrentFrame, Y = j.getStackAddendum();
        Y !== "" && (P += "%s", N = N.concat([Y]));
        var Z = N.map(function(Q) {
          return String(Q);
        });
        Z.unshift("Warning: " + P), Function.prototype.apply.call(console[c], console, Z);
      }
    }
    var m = !1, g = !1, h = !1, I = !1, R = !1, O;
    O = Symbol.for("react.module.reference");
    function S(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === n || c === a || R || c === i || c === l || c === f || I || c === d || m || g || h || typeof c == "object" && c !== null && (c.$$typeof === y || c.$$typeof === p || c.$$typeof === s || c.$$typeof === u || c.$$typeof === o || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === O || c.getModuleId !== void 0));
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
      if (typeof c.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
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
          case y: {
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
        M < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = b.ReactCurrentDispatcher, te;
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
            } catch (De) {
              j = De;
            }
            Reflect.construct(c, [], Q);
          } else {
            try {
              Q.call();
            } catch (De) {
              j = De;
            }
            c.call(Q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (De) {
            j = De;
          }
          c();
        }
      } catch (De) {
        if (De && j && typeof De.stack == "string") {
          for (var z = De.stack.split(`
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
      var ft = c ? c.displayName || c.name : "", $n = ft ? de(ft) : "";
      return typeof c == "function" && fe.set(c, $n), $n;
    }
    function ce(c, P, N) {
      return X(c, !1);
    }
    function Be(c) {
      var P = c.prototype;
      return !!(P && P.isReactComponent);
    }
    function Ze(c, P, N) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return X(c, Be(c));
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
            return Ze(c.type, P, N);
          case y: {
            var j = c, Y = j._payload, Z = j._init;
            try {
              return Ze(Z(Y), P, N);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, et = {}, lt = b.ReactDebugCurrentFrame;
    function He(c) {
      if (c) {
        var P = c._owner, N = Ze(c.type, c._source, P ? P.type : null);
        lt.setExtraStackFrame(N);
      } else
        lt.setExtraStackFrame(null);
    }
    function Kt(c, P, N, j, Y) {
      {
        var Z = Function.call.bind($e);
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
            z && !(z instanceof Error) && (He(Y), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", N, Q, typeof z), He(null)), z instanceof Error && !(z.message in et) && (et[z.message] = !0, He(Y), w("Failed %s type: %s", N, z.message), He(null));
          }
      }
    }
    var ye = Array.isArray;
    function he(c) {
      return ye(c);
    }
    function fs(c) {
      {
        var P = typeof Symbol == "function" && Symbol.toStringTag, N = P && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return N;
      }
    }
    function hs(c) {
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
      if (hs(c))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fs(c)), Dn(c);
    }
    var wt = b.ReactCurrentOwner, ps = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Mn, xn, Ar;
    Ar = {};
    function vs(c) {
      if ($e.call(c, "ref")) {
        var P = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function gs(c) {
      if ($e.call(c, "key")) {
        var P = Object.getOwnPropertyDescriptor(c, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function ms(c, P) {
      if (typeof c.ref == "string" && wt.current && P && wt.current.stateNode !== P) {
        var N = C(wt.current.type);
        Ar[N] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(wt.current.type), c.ref), Ar[N] = !0);
      }
    }
    function ys(c, P) {
      {
        var N = function() {
          Mn || (Mn = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        N.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: N,
          configurable: !0
        });
      }
    }
    function bs(c, P) {
      {
        var N = function() {
          xn || (xn = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        N.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: N,
          configurable: !0
        });
      }
    }
    var _s = function(c, P, N, j, Y, Z, Q) {
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
    function Is(c, P, N, j, Y) {
      {
        var Z, Q = {}, z = null, le = null;
        N !== void 0 && (Nn(N), z = "" + N), gs(P) && (Nn(P.key), z = "" + P.key), vs(P) && (le = P.ref, ms(P, Y));
        for (Z in P)
          $e.call(P, Z) && !ps.hasOwnProperty(Z) && (Q[Z] = P[Z]);
        if (c && c.defaultProps) {
          var ae = c.defaultProps;
          for (Z in ae)
            Q[Z] === void 0 && (Q[Z] = ae[Z]);
        }
        if (z || le) {
          var oe = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          z && ys(Q, oe), le && bs(Q, oe);
        }
        return _s(c, z, le, Y, j, wt.current, Q);
      }
    }
    var Cr = b.ReactCurrentOwner, Ln = b.ReactDebugCurrentFrame;
    function dt(c) {
      if (c) {
        var P = c._owner, N = Ze(c.type, c._source, P ? P.type : null);
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
    function Es(c) {
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
    function Ts(c) {
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
        var N = Ts(P);
        if (Un[N])
          return;
        Un[N] = !0;
        var j = "";
        c && c._owner && c._owner !== Cr.current && (j = " It was passed a child from " + C(c._owner.type) + "."), dt(c), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, j), dt(null);
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
          var Y = _(c);
          if (typeof Y == "function" && Y !== c.entries)
            for (var Z = Y.call(c), Q; !(Q = Z.next()).done; )
              Dr(Q.value) && jn(Q.value, P);
        }
      }
    }
    function ws(c) {
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
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ss(c) {
      {
        for (var P = Object.keys(c.props), N = 0; N < P.length; N++) {
          var j = P[N];
          if (j !== "children" && j !== "key") {
            dt(c), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), dt(null);
            break;
          }
        }
        c.ref !== null && (dt(c), w("Invalid attribute `ref` supplied to `React.Fragment`."), dt(null));
      }
    }
    function Bn(c, P, N, j, Y, Z) {
      {
        var Q = S(c);
        if (!Q) {
          var z = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var le = Es(Y);
          le ? z += le : z += Fn();
          var ae;
          c === null ? ae = "null" : he(c) ? ae = "array" : c !== void 0 && c.$$typeof === e ? (ae = "<" + (C(c.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof c, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, z);
        }
        var oe = Is(c, P, N, Y, Z);
        if (oe == null)
          return oe;
        if (Q) {
          var be = P.children;
          if (be !== void 0)
            if (j)
              if (he(be)) {
                for (var ft = 0; ft < be.length; ft++)
                  qn(be[ft], c);
                Object.freeze && Object.freeze(be);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qn(be, c);
        }
        return c === n ? Ss(oe) : ws(oe), oe;
      }
    }
    function Rs(c, P, N) {
      return Bn(c, P, N, !0);
    }
    function Os(c, P, N) {
      return Bn(c, P, N, !1);
    }
    var ks = Os, As = Rs;
    Rt.Fragment = n, Rt.jsx = ks, Rt.jsxs = As;
  }()), Rt;
}
process.env.NODE_ENV === "production" ? Jr.exports = js() : Jr.exports = qs();
var x = Jr.exports;
const Bs = ({ children: t, closeAction: e, title: r, message: n }) => /* @__PURE__ */ x.jsx("div", { className: "modal-container", children: /* @__PURE__ */ x.jsxs("div", { className: "modal-data", children: [
  e && /* @__PURE__ */ x.jsx("button", { onClick: () => typeof e == "function" ? e((i) => !i) : e.value = !e.value, className: "modal-close", children: "X" }),
  /* @__PURE__ */ x.jsx("div", { className: "space modal-title", children: /* @__PURE__ */ x.jsx("label", { children: r }) }),
  /* @__PURE__ */ x.jsx("div", { className: "space modal-message", children: typeof n == "string" ? /* @__PURE__ */ x.jsx("label", { children: n }) : n }),
  /* @__PURE__ */ x.jsx("div", { className: "space modal-footer", children: t })
] }) });
const $s = () => /* @__PURE__ */ x.jsx("div", { className: "loader-container", children: /* @__PURE__ */ x.jsxs("div", { className: "loader-box", children: [
  /* @__PURE__ */ x.jsx("div", { className: "load blue" }),
  /* @__PURE__ */ x.jsx("div", { className: "load red" }),
  /* @__PURE__ */ x.jsx("div", { className: "load orange" }),
  /* @__PURE__ */ x.jsx("div", { className: "load yellow" }),
  /* @__PURE__ */ x.jsx("div", { className: "load green" })
] }) });
const Hs = (t, e) => {
  var r;
  return ((r = t.find((n) => n.code === "*" ? !0 : n.code === e.code)) == null ? void 0 : r.message) ?? e.message;
}, Zi = "IS_GOOGLE", ea = "IS_FACEBOOK", ta = "IS_TWITTER", ra = "IS_GITHUB", na = "IS_MICROSOFT", Vs = () => /* @__PURE__ */ x.jsx("svg", { width: "98", height: "96", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 98 96", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z", fill: "#fff" }) }), zs = () => /* @__PURE__ */ x.jsx("svg", { version: "1.1", id: "Logo", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 248 204", xmlSpace: "preserve", children: /* @__PURE__ */ x.jsx("g", { id: "Logo_1_", children: /* @__PURE__ */ x.jsx("path", { id: "white_background", fill: "#FFFFFF", d: `M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
                    C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
                    c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
                    c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
                    c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
                    c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z` }) }) }), Ws = () => /* @__PURE__ */ x.jsxs(
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
), Qs = [
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
    icon: /* @__PURE__ */ x.jsx(Ws, {})
  },
  {
    method: "twitter",
    constName: ta,
    name: "Twitter",
    className: "twitter-btn",
    icon: /* @__PURE__ */ x.jsx(zs, {})
  },
  {
    method: "github",
    constName: ra,
    name: "GitHub",
    className: "github-btn",
    icon: /* @__PURE__ */ x.jsx(Vs, {})
  },
  {
    method: "microsoft",
    constName: na,
    name: "Microsoft",
    className: "microsoft-btn"
  }
], Ks = (t) => Qs.filter((e) => t.find((r) => e.method === r)), Gs = {
  es: {
    logIn: "Iniciar sesion",
    username: "Usuario",
    password: "Contraseña",
    continue: "Continuar",
    continueAs: "Continuar como:",
    logguedWith: "Logueado con",
    logOut: "Desloguearse"
  },
  en: {
    logIn: "Log In",
    username: "Username",
    password: "Password",
    continue: "Continue",
    continueAs: "Continue as:",
    logguedWith: "Loggued with",
    logOut: "Log Out"
  }
}, Js = (t) => Gs[t], ia = {
  languaje: "en",
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
let ne = { ...ia };
const lf = (t) => {
  ne = { ...ia, ...t };
}, df = () => {
  const t = Me(void 0), e = Me(void 0), r = Me(void 0);
  let n = We(void 0);
  const i = kt((a) => a(t, n, e, r), []);
  return Ie(() => () => {
    n.current && clearInterval(n.current);
  }, []), {
    user: t.value,
    updateError: e.value,
    logOut: r.value,
    authManager: i
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
}, Ys = function(t) {
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
      let y = (u & 15) << 2 | l >> 6, d = l & 63;
      o || (d = 64, s || (y = 64)), n.push(r[f], r[p], r[y], r[d]);
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
    return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : Ys(this.decodeStringToByteArray(t, e));
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
        throw new Xs();
      const y = a << 2 | u >> 4;
      if (n.push(y), l !== 64) {
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
class Xs extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const Zs = function(t) {
  const e = aa(t);
  return sa.encodeByteArray(e, !0);
}, oa = function(t) {
  return Zs(t).replace(/\./g, "");
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
function eo() {
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
const to = () => eo().__FIREBASE_DEFAULTS__, ro = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const t = process.env.__FIREBASE_DEFAULTS__;
  if (t)
    return JSON.parse(t);
}, no = () => {
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
    return to() || ro() || no();
  } catch (t) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
    return;
  }
}, io = (t) => {
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
class ao {
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
function so() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue());
}
function oo() {
  const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function uo() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function co() {
  const t = ue();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function lo() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function fo() {
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
const ho = "FirebaseError";
class Ye extends Error {
  constructor(e, r, n) {
    super(r), this.code = e, this.customData = n, this.name = ho, Object.setPrototypeOf(this, Ye.prototype), Error.captureStackTrace && Error.captureStackTrace(this, qt.prototype.create);
  }
}
class qt {
  constructor(e, r, n) {
    this.service = e, this.serviceName = r, this.errors = n;
  }
  create(e, ...r) {
    const n = r[0] || {}, i = `${this.service}/${e}`, a = this.errors[e], s = a ? po(a, n) : "Error", u = `${this.serviceName}: ${s} (${i}).`;
    return new Ye(i, u, n);
  }
}
function po(t, e) {
  return t.replace(vo, (r, n) => {
    const i = e[n];
    return i != null ? String(i) : `<${n}?>`;
  });
}
const vo = /\{\$([^}]+)}/g;
function go(t) {
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
function Bt(t) {
  const e = [];
  for (const [r, n] of Object.entries(t))
    Array.isArray(n) ? n.forEach((i) => {
      e.push(encodeURIComponent(r) + "=" + encodeURIComponent(i));
    }) : e.push(encodeURIComponent(r) + "=" + encodeURIComponent(n));
  return e.length ? "&" + e.join("&") : "";
}
function mo(t, e) {
  const r = new yo(t, e);
  return r.subscribe.bind(r);
}
class yo {
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
    bo(e, [
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
function bo(t, e) {
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
function Xe(t) {
  return t && t._delegate ? t._delegate : t;
}
class mt {
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
const rt = "[DEFAULT]";
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
      const n = new ao();
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
      if (Eo(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: rt });
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
  clearInstance(e = rt) {
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
  isInitialized(e = rt) {
    return this.instances.has(e);
  }
  getOptions(e = rt) {
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
      instanceIdentifier: Io(e),
      options: r
    }), this.instances.set(e, n), this.instancesOptions.set(e, r), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, n);
      } catch {
      }
    return n || null;
  }
  normalizeInstanceIdentifier(e = rt) {
    return this.component ? this.component.multipleInstances ? e : rt : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function Io(t) {
  return t === rt ? void 0 : t;
}
function Eo(t) {
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
class To {
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
    const r = new _o(e, this);
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
const wo = {
  debug: ee.DEBUG,
  verbose: ee.VERBOSE,
  info: ee.INFO,
  warn: ee.WARN,
  error: ee.ERROR,
  silent: ee.SILENT
}, So = ee.INFO, Ro = {
  [ee.DEBUG]: "log",
  [ee.VERBOSE]: "log",
  [ee.INFO]: "info",
  [ee.WARN]: "warn",
  [ee.ERROR]: "error"
}, Oo = (t, e, ...r) => {
  if (e < t.logLevel)
    return;
  const n = (/* @__PURE__ */ new Date()).toISOString(), i = Ro[e];
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
    this.name = e, this._logLevel = So, this._logHandler = Oo, this._userLogHandler = null;
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
    this._logLevel = typeof e == "string" ? wo[e] : e;
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
const ko = (t, e) => e.some((r) => t instanceof r);
let Jn, Yn;
function Ao() {
  return Jn || (Jn = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Co() {
  return Yn || (Yn = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const fa = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), ha = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap();
function Po(t) {
  const e = new Promise((r, n) => {
    const i = () => {
      t.removeEventListener("success", a), t.removeEventListener("error", s);
    }, a = () => {
      r(Qe(t.result)), i();
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
function Do(t) {
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
    return Qe(t[e]);
  },
  set(t, e, r) {
    return t[e] = r, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function No(t) {
  Xr = t(Xr);
}
function Mo(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...r) {
    const n = t.call(Fr(this), e, ...r);
    return ha.set(n, e.sort ? e.sort() : [e]), Qe(n);
  } : Co().includes(t) ? function(...e) {
    return t.apply(Fr(this), e), Qe(fa.get(this));
  } : function(...e) {
    return Qe(t.apply(Fr(this), e));
  };
}
function xo(t) {
  return typeof t == "function" ? Mo(t) : (t instanceof IDBTransaction && Do(t), ko(t, Ao()) ? new Proxy(t, Xr) : t);
}
function Qe(t) {
  if (t instanceof IDBRequest)
    return Po(t);
  if (Lr.has(t))
    return Lr.get(t);
  const e = xo(t);
  return e !== t && (Lr.set(t, e), vn.set(e, t)), e;
}
const Fr = (t) => vn.get(t);
function Lo(t, e, { blocked: r, upgrade: n, blocking: i, terminated: a } = {}) {
  const s = indexedDB.open(t, e), u = Qe(s);
  return n && s.addEventListener("upgradeneeded", (o) => {
    n(Qe(s.result), o.oldVersion, o.newVersion, Qe(s.transaction), o);
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
const Fo = ["get", "getKey", "getAll", "getAllKeys", "count"], Uo = ["put", "add", "delete", "clear"], Ur = /* @__PURE__ */ new Map();
function Xn(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (Ur.get(e))
    return Ur.get(e);
  const r = e.replace(/FromIndex$/, ""), n = e !== r, i = Uo.includes(r);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(r in (n ? IDBIndex : IDBObjectStore).prototype) || !(i || Fo.includes(r))
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
No((t) => ({
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
class jo {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((r) => {
      if (qo(r)) {
        const n = r.getImmediate();
        return `${n.library}/${n.version}`;
      } else
        return null;
    }).filter((r) => r).join(" ");
  }
}
function qo(t) {
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
const ct = new da("@firebase/app"), Bo = "@firebase/app-compat", $o = "@firebase/analytics-compat", Ho = "@firebase/analytics", Vo = "@firebase/app-check-compat", zo = "@firebase/app-check", Wo = "@firebase/auth", Qo = "@firebase/auth-compat", Ko = "@firebase/database", Go = "@firebase/database-compat", Jo = "@firebase/functions", Yo = "@firebase/functions-compat", Xo = "@firebase/installations", Zo = "@firebase/installations-compat", eu = "@firebase/messaging", tu = "@firebase/messaging-compat", ru = "@firebase/performance", nu = "@firebase/performance-compat", iu = "@firebase/remote-config", au = "@firebase/remote-config-compat", su = "@firebase/storage", ou = "@firebase/storage-compat", uu = "@firebase/firestore", cu = "@firebase/firestore-compat", lu = "firebase", du = "9.23.0";
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
const en = "[DEFAULT]", fu = {
  [Zr]: "fire-core",
  [Bo]: "fire-core-compat",
  [Ho]: "fire-analytics",
  [$o]: "fire-analytics-compat",
  [zo]: "fire-app-check",
  [Vo]: "fire-app-check-compat",
  [Wo]: "fire-auth",
  [Qo]: "fire-auth-compat",
  [Ko]: "fire-rtdb",
  [Go]: "fire-rtdb-compat",
  [Jo]: "fire-fn",
  [Yo]: "fire-fn-compat",
  [Xo]: "fire-iid",
  [Zo]: "fire-iid-compat",
  [eu]: "fire-fcm",
  [tu]: "fire-fcm-compat",
  [ru]: "fire-perf",
  [nu]: "fire-perf-compat",
  [iu]: "fire-rc",
  [au]: "fire-rc-compat",
  [su]: "fire-gcs",
  [ou]: "fire-gcs-compat",
  [uu]: "fire-fst",
  [cu]: "fire-fst-compat",
  "fire-js": "fire-js",
  [lu]: "fire-js-all"
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
function hu(t, e) {
  try {
    t.container.addComponent(e);
  } catch (r) {
    ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, r);
  }
}
function Nt(t) {
  const e = t.name;
  if (tn.has(e))
    return ct.debug(`There were multiple attempts to register component ${e}.`), !1;
  tn.set(e, t);
  for (const r of cr.values())
    hu(r, t);
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
const pu = {
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
}, Ke = new qt("app", "Firebase", pu);
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
class vu {
  constructor(e, r, n) {
    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, r), this._name = r.name, this._automaticDataCollectionEnabled = r.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new mt(
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
      throw Ke.create("app-deleted", { appName: this._name });
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
const $t = du;
function va(t, e = {}) {
  let r = t;
  typeof e != "object" && (e = { name: e });
  const n = Object.assign({ name: en, automaticDataCollectionEnabled: !1 }, e), i = n.name;
  if (typeof i != "string" || !i)
    throw Ke.create("bad-app-name", {
      appName: String(i)
    });
  if (r || (r = ca()), !r)
    throw Ke.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const a = cr.get(i);
  if (a) {
    if (ur(r, a.options) && ur(n, a.config))
      return a;
    throw Ke.create("duplicate-app", { appName: i });
  }
  const s = new To(i);
  for (const o of tn.values())
    s.addComponent(o);
  const u = new vu(r, n, s);
  return cr.set(i, u), u;
}
function gu(t = en) {
  const e = cr.get(t);
  if (!e && t === en && ca())
    return va();
  if (!e)
    throw Ke.create("no-app", { appName: t });
  return e;
}
function ht(t, e, r) {
  var n;
  let i = (n = fu[t]) !== null && n !== void 0 ? n : t;
  r && (i += `-${r}`);
  const a = i.match(/\s|\//), s = e.match(/\s|\//);
  if (a || s) {
    const u = [
      `Unable to register library "${i}" with version "${e}":`
    ];
    a && u.push(`library name "${i}" contains illegal characters (whitespace or "/")`), a && s && u.push("and"), s && u.push(`version name "${e}" contains illegal characters (whitespace or "/")`), ct.warn(u.join(" "));
    return;
  }
  Nt(new mt(
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
const mu = "firebase-heartbeat-database", yu = 1, Mt = "firebase-heartbeat-store";
let jr = null;
function ga() {
  return jr || (jr = Lo(mu, yu, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          t.createObjectStore(Mt);
      }
    }
  }).catch((t) => {
    throw Ke.create("idb-open", {
      originalErrorMessage: t.message
    });
  })), jr;
}
async function bu(t) {
  try {
    return await (await ga()).transaction(Mt).objectStore(Mt).get(ma(t));
  } catch (e) {
    if (e instanceof Ye)
      ct.warn(e.message);
    else {
      const r = Ke.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message
      });
      ct.warn(r.message);
    }
  }
}
async function ei(t, e) {
  try {
    const n = (await ga()).transaction(Mt, "readwrite");
    await n.objectStore(Mt).put(e, ma(t)), await n.done;
  } catch (r) {
    if (r instanceof Ye)
      ct.warn(r.message);
    else {
      const n = Ke.create("idb-set", {
        originalErrorMessage: r == null ? void 0 : r.message
      });
      ct.warn(n.message);
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
const _u = 1024, Iu = 30 * 24 * 60 * 60 * 1e3;
class Eu {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const r = this.container.getProvider("app").getImmediate();
    this._storage = new wu(r), this._heartbeatsCachePromise = this._storage.read().then((n) => (this._heartbeatsCache = n, n));
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
        return Date.now() - a <= Iu;
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
    const e = ti(), { heartbeatsToSend: r, unsentEntries: n } = Tu(this._heartbeatsCache.heartbeats), i = oa(JSON.stringify({ version: 2, heartbeats: r }));
    return this._heartbeatsCache.lastSentHeartbeatDate = e, n.length > 0 ? (this._heartbeatsCache.heartbeats = n, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i;
  }
}
function ti() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function Tu(t, e = _u) {
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
class wu {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return lo() ? fo().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    return await this._canUseIndexedDBPromise ? await bu(this.app) || { heartbeats: [] } : { heartbeats: [] };
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
function Su(t) {
  Nt(new mt(
    "platform-logger",
    (e) => new jo(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), Nt(new mt(
    "heartbeat",
    (e) => new Eu(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), ht(Zr, Zn, t), ht(Zr, Zn, "esm2017"), ht("fire-js", "");
}
Su("");
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
const Ru = ya, ba = new qt("auth", "Firebase", ya());
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
function Ou(t, ...e) {
  lr.logLevel <= ee.WARN && lr.warn(`Auth (${$t}): ${t}`, ...e);
}
function tr(t, ...e) {
  lr.logLevel <= ee.ERROR && lr.error(`Auth (${$t}): ${t}`, ...e);
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
function Ce(t, ...e) {
  throw mn(t, ...e);
}
function Oe(t, ...e) {
  return mn(t, ...e);
}
function _a(t, e, r) {
  const n = Object.assign(Object.assign({}, Ru()), { [e]: r });
  return new qt("auth", "Firebase", n).create(e, {
    appName: t.name
  });
}
function ku(t, e, r) {
  const n = r;
  if (!(e instanceof n))
    throw n.name !== e.constructor.name && Ce(
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
function xe(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw tr(e), new Error(e);
}
function Fe(t, e) {
  t || xe(e);
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
function Au() {
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
function Cu() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (Au() || oo() || "connection" in navigator) ? navigator.onLine : !0;
}
function Pu() {
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
class Ht {
  constructor(e, r) {
    this.shortDelay = e, this.longDelay = r, Fe(r > e, "Short delay should be less than long delay!"), this.isMobile = so() || uo();
  }
  get() {
    return Cu() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
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
  Fe(t.emulator, "Emulator should always be set here");
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
    xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl)
      return this.headersImpl;
    if (typeof self < "u" && "Headers" in self)
      return self.Headers;
    xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl)
      return this.responseImpl;
    if (typeof self < "u" && "Response" in self)
      return self.Response;
    xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
const Du = {
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
const Nu = new Ht(3e4, 6e4);
function Ea(t, e) {
  return t.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId }) : e;
}
async function Vt(t, e, r, n, i = {}) {
  return Ta(t, i, async () => {
    let a = {}, s = {};
    n && (e === "GET" ? s = n : a = {
      body: JSON.stringify(n)
    });
    const u = Bt(Object.assign({ key: t.config.apiKey }, s)).slice(1), o = await t._getAdditionalHeaders();
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
  const n = Object.assign(Object.assign({}, Du), e);
  try {
    const i = new xu(t), a = await Promise.race([
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
      Ce(t, f);
    }
  } catch (i) {
    if (i instanceof Ye)
      throw i;
    Ce(t, "network-request-failed", { message: String(i) });
  }
}
async function Mu(t, e, r, n, i = {}) {
  const a = await Vt(t, e, r, n, i);
  return "mfaPendingCredential" in a && Ce(t, "multi-factor-auth-required", {
    _serverResponse: a
  }), a;
}
function wa(t, e, r, n) {
  const i = `${e}${r}?${n}`;
  return t.config.emulator ? yn(t.config, i) : `${t.config.apiScheme}://${i}`;
}
class xu {
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((r, n) => {
      this.timer = setTimeout(() => n(Oe(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), Nu.get());
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
  const i = Oe(t, e, n);
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
async function Lu(t, e) {
  return Vt(t, "POST", "/v1/accounts:delete", e);
}
async function Fu(t, e) {
  return Vt(t, "POST", "/v1/accounts:lookup", e);
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
function Pt(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function Uu(t, e = !1) {
  const r = Xe(t), n = await r.getIdToken(e), i = bn(n);
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
    authTime: Pt(qr(i.auth_time)),
    issuedAtTime: Pt(qr(i.iat)),
    expirationTime: Pt(qr(i.exp)),
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
function ju(t) {
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
async function xt(t, e, r = !1) {
  if (r)
    return e;
  try {
    return await e;
  } catch (n) {
    throw n instanceof Ye && qu(n) && t.auth.currentUser === t && await t.auth.signOut(), n;
  }
}
function qu({ code: t }) {
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
class Bu {
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
    this.lastSignInTime = Pt(this.lastLoginAt), this.creationTime = Pt(this.createdAt);
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
  const r = t.auth, n = await t.getIdToken(), i = await xt(t, Fu(r, { idToken: n }));
  q(
    i == null ? void 0 : i.users.length,
    r,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const a = i.users[0];
  t._notifyReloadListener(a);
  const s = !((e = a.providerUserInfo) === null || e === void 0) && e.length ? Vu(a.providerUserInfo) : [], u = Hu(t.providerData, s), o = t.isAnonymous, l = !(t.email && a.passwordHash) && !(u != null && u.length), f = o ? l : !1, p = {
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
async function $u(t) {
  const e = Xe(t);
  await dr(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function Hu(t, e) {
  return [...t.filter((n) => !e.some((i) => i.providerId === n.providerId)), ...e];
}
function Vu(t) {
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
async function zu(t, e) {
  const r = await Ta(t, {}, async () => {
    const n = Bt({
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
class Lt {
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
    const r = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : ju(e.idToken);
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
    const { accessToken: n, refreshToken: i, expiresIn: a } = await zu(e, r);
    this.updateTokensAndExpiration(n, i, Number(a));
  }
  updateTokensAndExpiration(e, r, n) {
    this.refreshToken = r || null, this.accessToken = e || null, this.expirationTime = Date.now() + n * 1e3;
  }
  static fromJSON(e, r) {
    const { refreshToken: n, accessToken: i, expirationTime: a } = r, s = new Lt();
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
    return Object.assign(new Lt(), this.toJSON());
  }
  _performRefresh() {
    return xe("not implemented");
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
function Ve(t, e) {
  q(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class st {
  constructor(e) {
    var { uid: r, auth: n, stsTokenManager: i } = e, a = gn(e, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase", this.proactiveRefresh = new Bu(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = r, this.auth = n, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = a.displayName || null, this.email = a.email || null, this.emailVerified = a.emailVerified || !1, this.phoneNumber = a.phoneNumber || null, this.photoURL = a.photoURL || null, this.isAnonymous = a.isAnonymous || !1, this.tenantId = a.tenantId || null, this.providerData = a.providerData ? [...a.providerData] : [], this.metadata = new Sa(a.createdAt || void 0, a.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const r = await xt(this, this.stsTokenManager.getToken(this.auth, e));
    return q(
      r,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== r && (this.accessToken = r, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), r;
  }
  getIdTokenResult(e) {
    return Uu(this, e);
  }
  reload() {
    return $u(this);
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
    const r = new st(Object.assign(Object.assign({}, this), { auth: e, stsTokenManager: this.stsTokenManager._clone() }));
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
    return await xt(this, Lu(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
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
    const p = (n = r.displayName) !== null && n !== void 0 ? n : void 0, y = (i = r.email) !== null && i !== void 0 ? i : void 0, d = (a = r.phoneNumber) !== null && a !== void 0 ? a : void 0, E = (s = r.photoURL) !== null && s !== void 0 ? s : void 0, T = (u = r.tenantId) !== null && u !== void 0 ? u : void 0, _ = (o = r._redirectEventId) !== null && o !== void 0 ? o : void 0, b = (l = r.createdAt) !== null && l !== void 0 ? l : void 0, w = (f = r.lastLoginAt) !== null && f !== void 0 ? f : void 0, { uid: v, emailVerified: m, isAnonymous: g, providerData: h, stsTokenManager: I } = r;
    q(
      v && I,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const R = Lt.fromJSON(this.name, I);
    q(
      typeof v == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), Ve(p, e.name), Ve(y, e.name), q(
      typeof m == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), q(
      typeof g == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), Ve(d, e.name), Ve(E, e.name), Ve(T, e.name), Ve(_, e.name), Ve(b, e.name), Ve(w, e.name);
    const O = new st({
      uid: v,
      auth: e,
      email: y,
      emailVerified: m,
      displayName: p,
      isAnonymous: g,
      photoURL: E,
      phoneNumber: d,
      tenantId: T,
      stsTokenManager: R,
      createdAt: b,
      lastLoginAt: w
    });
    return h && Array.isArray(h) && (O.providerData = h.map((S) => Object.assign({}, S))), _ && (O._redirectEventId = _), O;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, r, n = !1) {
    const i = new Lt();
    i.updateFromServerResponse(r);
    const a = new st({
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
function Le(t) {
  Fe(t instanceof Function, "Expected a class definition");
  let e = ii.get(t);
  return e ? (Fe(e instanceof t, "Instance stored in cache mismatched with class"), e) : (e = new t(), ii.set(t, e), e);
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
class pt {
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
    return e ? st._fromJSON(this.auth, e) : null;
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
      return new pt(Le(ai), e, n);
    const i = (await Promise.all(r.map(async (l) => {
      if (await l._isAvailable())
        return l;
    }))).filter((l) => l);
    let a = i[0] || Le(ai);
    const s = rr(n, e.config.apiKey, e.name);
    let u = null;
    for (const l of r)
      try {
        const f = await l._get(s);
        if (f) {
          const p = st._fromJSON(e, f);
          l !== a && (u = p), a = l;
          break;
        }
      } catch {
      }
    const o = i.filter((l) => l._shouldAllowMigration);
    return !a._shouldAllowMigration || !o.length ? new pt(a, e, n) : (a = o[0], u && await a._set(s, u.toJSON()), await Promise.all(r.map(async (l) => {
      if (l !== a)
        try {
          await l._remove(s);
        } catch {
        }
    })), new pt(a, e, n));
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
function Wu(t = ue()) {
  var e;
  return wr(t) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function Qu() {
  return co() && document.documentMode === 10;
}
function Na(t = ue()) {
  return wr(t) || Ca(t) || Da(t) || Pa(t) || /windows phone/i.test(t) || Aa(t);
}
function Ku() {
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
  return `${r}/JsCore/${$t}/${n}`;
}
async function xa(t, e) {
  return Vt(t, "GET", "/v2/recaptchaConfig", Ea(t, e));
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
function Gu() {
  var t, e;
  return (e = (t = document.getElementsByTagName("head")) === null || t === void 0 ? void 0 : t[0]) !== null && e !== void 0 ? e : document;
}
function Fa(t) {
  return new Promise((e, r) => {
    const n = document.createElement("script");
    n.setAttribute("src", t), n.onload = e, n.onerror = (i) => {
      const a = Oe(
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      a.customData = i, r(a);
    }, n.type = "text/javascript", n.charset = "UTF-8", Gu().appendChild(n);
  });
}
function Ju(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
const Yu = "https://www.google.com/recaptcha/enterprise.js?render=", Xu = "recaptcha-enterprise", Zu = "NO_RECAPTCHA";
class ec {
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(e) {
    this.type = Xu, this.auth = zt(e);
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
          s(Zu);
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
          Fa(Yu + u).then(() => {
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
class tc {
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
class rc {
  constructor(e, r, n, i) {
    this.app = e, this.heartbeatServiceProvider = r, this.appCheckServiceProvider = n, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new ui(this), this.idTokenSubscription = new ui(this), this.beforeStateQueue = new tc(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = ba, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion;
  }
  _initializeWithPersistence(e, r) {
    return r && (this._popupRedirectResolver = Le(r)), this._initializationPromise = this.queue(async () => {
      var n, i;
      if (!this._deleted && (this.persistenceManager = await pt.create(this, e), !this._deleted)) {
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
    this.languageCode = Pu();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    const r = e ? Xe(e) : null;
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
      await this.assertedPersistence.setPersistence(Le(e));
    });
  }
  async initializeRecaptchaConfig() {
    const e = await xa(this, {
      clientType: "CLIENT_TYPE_WEB",
      version: "RECAPTCHA_ENTERPRISE"
      /* RecaptchaVersion.ENTERPRISE */
    }), r = new La(e);
    this.tenantId == null ? this._agentRecaptchaConfig = r : this._tenantRecaptchaConfigs[this.tenantId] = r, r.emailPasswordEnabled && new ec(this).verify();
  }
  _getRecaptchaConfig() {
    return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new qt("auth", "Firebase", e());
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
      const r = e && Le(e) || this._popupRedirectResolver;
      q(
        r,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await pt.create(
        this,
        [Le(r._redirectPersistence)],
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
    return r != null && r.error && Ou(`Error while retrieving App Check token: ${r.error}`), r == null ? void 0 : r.token;
  }
}
function zt(t) {
  return Xe(t);
}
class ui {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = mo((r) => this.observer = r);
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
function nc(t, e) {
  const r = pa(t, "auth");
  if (r.isInitialized()) {
    const i = r.getImmediate(), a = r.getOptions();
    if (ur(a, e ?? {}))
      return i;
    Ce(
      i,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return r.initialize({ options: e });
}
function ic(t, e) {
  const r = (e == null ? void 0 : e.persistence) || [], n = (Array.isArray(r) ? r : [r]).map(Le);
  e != null && e.errorMap && t._updateErrorMap(e.errorMap), t._initializeWithPersistence(n, e == null ? void 0 : e.popupRedirectResolver);
}
function ac(t, e, r) {
  const n = zt(t);
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
  const i = !!(r != null && r.disableWarnings), a = Ua(e), { host: s, port: u } = sc(e), o = u === null ? "" : `:${u}`;
  n.config.emulator = { url: `${a}//${s}${o}/` }, n.settings.appVerificationDisabledForTesting = !0, n.emulatorConfig = Object.freeze({
    host: s,
    port: u,
    protocol: a.replace(":", ""),
    options: Object.freeze({ disableWarnings: i })
  }), i || oc();
}
function Ua(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function sc(t) {
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
function oc() {
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
    return xe("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return xe("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, r) {
    return xe("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return xe("not implemented");
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
async function vt(t, e) {
  return Mu(t, "POST", "/v1/accounts:signInWithIdp", Ea(t, e));
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
const uc = "http://localhost";
class Ue extends ja {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const r = new Ue(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (r.idToken = e.idToken), e.accessToken && (r.accessToken = e.accessToken), e.nonce && !e.pendingToken && (r.nonce = e.nonce), e.pendingToken && (r.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (r.accessToken = e.oauthToken, r.secret = e.oauthTokenSecret) : Ce(
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
    const s = new Ue(n, i);
    return s.idToken = a.idToken || void 0, s.accessToken = a.accessToken || void 0, s.secret = a.secret, s.nonce = a.nonce, s.pendingToken = a.pendingToken || null, s;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const r = this.buildRequest();
    return vt(e, r);
  }
  /** @internal */
  _linkToIdToken(e, r) {
    const n = this.buildRequest();
    return n.idToken = r, vt(e, n);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const r = this.buildRequest();
    return r.autoCreate = !1, vt(e, r);
  }
  buildRequest() {
    const e = {
      requestUri: uc,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const r = {};
      this.idToken && (r.id_token = this.idToken), this.accessToken && (r.access_token = this.accessToken), this.secret && (r.oauth_token_secret = this.secret), r.providerId = this.providerId, this.nonce && !this.pendingToken && (r.nonce = this.nonce), e.postBody = Bt(r);
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
class Tt extends In {
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
class gt extends Tt {
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
    ), Ue._fromParams(r);
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
    ), Ue._fromParams(Object.assign(Object.assign({}, e), { providerId: this.providerId, signInMethod: this.providerId }));
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return gt.oauthCredentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return gt.oauthCredentialFromTaggedObject(e.customData || {});
  }
  static oauthCredentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: r, oauthAccessToken: n, oauthTokenSecret: i, pendingToken: a, nonce: s, providerId: u } = e;
    if (!n && !i && !r && !a || !u)
      return null;
    try {
      return new gt(u)._credential({
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
class Ee extends Tt {
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
    return Ue._fromParams({
      providerId: Ee.PROVIDER_ID,
      signInMethod: Ee.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
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
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return Ee.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Ee.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Ee.PROVIDER_ID = "facebook.com";
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
class Te extends Tt {
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
    return Ue._fromParams({
      providerId: Te.PROVIDER_ID,
      signInMethod: Te.GOOGLE_SIGN_IN_METHOD,
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
    if (!e)
      return null;
    const { oauthIdToken: r, oauthAccessToken: n } = e;
    if (!r && !n)
      return null;
    try {
      return Te.credential(r, n);
    } catch {
      return null;
    }
  }
}
Te.GOOGLE_SIGN_IN_METHOD = "google.com";
Te.PROVIDER_ID = "google.com";
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
class we extends Tt {
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
    return Ue._fromParams({
      providerId: we.PROVIDER_ID,
      signInMethod: we.GITHUB_SIGN_IN_METHOD,
      accessToken: e
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
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return we.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
we.GITHUB_SIGN_IN_METHOD = "github.com";
we.PROVIDER_ID = "github.com";
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
class Se extends Tt {
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
    return Ue._fromParams({
      providerId: Se.PROVIDER_ID,
      signInMethod: Se.TWITTER_SIGN_IN_METHOD,
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
    return Se.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Se.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: r, oauthTokenSecret: n } = e;
    if (!r || !n)
      return null;
    try {
      return Se.credential(r, n);
    } catch {
      return null;
    }
  }
}
Se.TWITTER_SIGN_IN_METHOD = "twitter.com";
Se.PROVIDER_ID = "twitter.com";
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
class yt {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static async _fromIdTokenResponse(e, r, n, i = !1) {
    const a = await st._fromIdTokenResponse(e, n, i), s = li(n);
    return new yt({
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
    return new yt({
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
class fr extends Ye {
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
async function cc(t, e, r = !1) {
  const n = await xt(t, e._linkToIdToken(t.auth, await t.getIdToken()), r);
  return yt._forOperation(t, "link", n);
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
async function lc(t, e, r = !1) {
  const { auth: n } = t, i = "reauthenticate";
  try {
    const a = await xt(t, qa(n, i, e, t), r);
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
    ), yt._forOperation(t, i, a);
  } catch (a) {
    throw (a == null ? void 0 : a.code) === "auth/user-not-found" && Ce(
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
async function dc(t, e, r = !1) {
  const n = "signIn", i = await qa(t, n, e), a = await yt._fromIdTokenResponse(t, n, i);
  return r || await t._updateCurrentUser(a.user), a;
}
function fc(t, e, r, n) {
  return Xe(t).onIdTokenChanged(e, r, n);
}
function hc(t, e, r) {
  return Xe(t).beforeAuthStateChanged(e, r);
}
function pc(t, e, r, n) {
  return Xe(t).onAuthStateChanged(e, r, n);
}
function Ba(t) {
  return Xe(t).signOut();
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
class $a {
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
function vc() {
  const t = ue();
  return _n(t) || wr(t);
}
const gc = 1e3, mc = 10;
class Ha extends $a {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, r) => this.onStorageEvent(e, r), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = vc() && Ku(), this.fallbackToPolling = Na(), this._shouldAllowMigration = !0;
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
    Qu() && a !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, mc) : i();
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
    }, gc);
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
Ha.type = "LOCAL";
const yc = Ha;
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
class Va extends $a {
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
Va.type = "SESSION";
const za = Va;
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
function bc(t) {
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
    const u = Array.from(s).map(async (l) => l(r.origin, a)), o = await bc(u);
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
class _c {
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
          const y = p;
          if (y.data.eventId === l)
            switch (y.data.status) {
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
                clearTimeout(a), u(y.data.response);
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
function ke() {
  return window;
}
function Ic(t) {
  ke().location.href = t;
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
function Wa() {
  return typeof ke().WorkerGlobalScope < "u" && typeof ke().importScripts == "function";
}
async function Ec() {
  if (!(navigator != null && navigator.serviceWorker))
    return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function Tc() {
  var t;
  return ((t = navigator == null ? void 0 : navigator.serviceWorker) === null || t === void 0 ? void 0 : t.controller) || null;
}
function wc() {
  return Wa() ? self : null;
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
const Qa = "firebaseLocalStorageDb", Sc = 1, pr = "firebaseLocalStorage", Ka = "fbase_key";
class Wt {
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
function Rc() {
  const t = indexedDB.deleteDatabase(Qa);
  return new Wt(t).toPromise();
}
function nn() {
  const t = indexedDB.open(Qa, Sc);
  return new Promise((e, r) => {
    t.addEventListener("error", () => {
      r(t.error);
    }), t.addEventListener("upgradeneeded", () => {
      const n = t.result;
      try {
        n.createObjectStore(pr, { keyPath: Ka });
      } catch (i) {
        r(i);
      }
    }), t.addEventListener("success", async () => {
      const n = t.result;
      n.objectStoreNames.contains(pr) ? e(n) : (n.close(), await Rc(), e(await nn()));
    });
  });
}
async function di(t, e, r) {
  const n = Rr(t, !0).put({
    [Ka]: e,
    value: r
  });
  return new Wt(n).toPromise();
}
async function Oc(t, e) {
  const r = Rr(t, !1).get(e), n = await new Wt(r).toPromise();
  return n === void 0 ? null : n.value;
}
function fi(t, e) {
  const r = Rr(t, !0).delete(e);
  return new Wt(r).toPromise();
}
const kc = 800, Ac = 3;
class Ga {
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
        if (r++ > Ac)
          throw n;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return Wa() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = Sr._getInstance(wc()), this.receiver._subscribe("keyChanged", async (e, r) => ({
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
    if (this.activeServiceWorker = await Ec(), !this.activeServiceWorker)
      return;
    this.sender = new _c(this.activeServiceWorker);
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
    if (!(!this.sender || !this.activeServiceWorker || Tc() !== this.activeServiceWorker))
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
    const r = await this._withRetries((n) => Oc(n, e));
    return this.localCache[e] = r, r;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((r) => fi(r, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const a = Rr(i, !1).getAll();
      return new Wt(a).toPromise();
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
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), kc);
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
Ga.type = "LOCAL";
const Cc = Ga;
new Ht(3e4, 6e4);
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
function Ja(t, e) {
  return e ? Le(e) : (q(
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
    return vt(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, r) {
    return vt(e, this._buildIdpRequest(r));
  }
  _getReauthenticationResolver(e) {
    return vt(e, this._buildIdpRequest());
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
function Pc(t) {
  return dc(t.auth, new Tn(t), t.bypassAuthState);
}
function Dc(t) {
  const { auth: e, user: r } = t;
  return q(
    r,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), lc(r, new Tn(t), t.bypassAuthState);
}
async function Nc(t) {
  const { auth: e, user: r } = t;
  return q(
    r,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), cc(r, new Tn(t), t.bypassAuthState);
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
class Ya {
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
        return Pc;
      case "linkViaPopup":
      case "linkViaRedirect":
        return Nc;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return Dc;
      default:
        Ce(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    Fe(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    Fe(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
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
const Mc = new Ht(2e3, 1e4);
async function Qt(t, e, r) {
  const n = zt(t);
  ku(t, e, In);
  const i = Ja(n, r);
  return new it(n, "signInViaPopup", e, i).executeNotNull();
}
class it extends Ya {
  constructor(e, r, n, i, a) {
    super(e, r, i, a), this.provider = n, this.authWindow = null, this.pollId = null, it.currentPopupAction && it.currentPopupAction.cancel(), it.currentPopupAction = this;
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
    Fe(this.filter.length === 1, "Popup operations only handle one event");
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
      r || this.reject(Oe(
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
    this.reject(Oe(
      this.auth,
      "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, it.currentPopupAction = null;
  }
  pollUserCancellation() {
    const e = () => {
      var r, n;
      if (!((n = (r = this.authWindow) === null || r === void 0 ? void 0 : r.window) === null || n === void 0) && n.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(Oe(
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
      this.pollId = window.setTimeout(e, Mc.get());
    };
    e();
  }
}
it.currentPopupAction = null;
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
const xc = "pendingRedirect", nr = /* @__PURE__ */ new Map();
class Lc extends Ya {
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
        const n = await Fc(this.resolver, this.auth) ? await super.execute() : null;
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
async function Fc(t, e) {
  const r = qc(e), n = jc(t);
  if (!await n._isAvailable())
    return !1;
  const i = await n._get(r) === "true";
  return await n._remove(r), i;
}
function Uc(t, e) {
  nr.set(t._key(), e);
}
function jc(t) {
  return Le(t._redirectPersistence);
}
function qc(t) {
  return rr(xc, t.config.apiKey, t.name);
}
async function Bc(t, e, r = !1) {
  const n = zt(t), i = Ja(n, e), s = await new Lc(n, i, r).execute();
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
const $c = 10 * 60 * 1e3;
class Hc {
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
    }), this.hasHandledPotentialRedirect || !Vc(e) || (this.hasHandledPotentialRedirect = !0, r || (this.queuedRedirectEvent = e, r = !0)), r;
  }
  sendToConsumer(e, r) {
    var n;
    if (e.error && !Xa(e)) {
      const i = ((n = e.error.code) === null || n === void 0 ? void 0 : n.split("auth/")[1]) || "internal-error";
      r.onError(Oe(this.auth, i));
    } else
      r.onAuthEvent(e);
  }
  isEventForConsumer(e, r) {
    const n = r.eventId === null || !!e.eventId && e.eventId === r.eventId;
    return r.filter.includes(e.type) && n;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= $c && this.cachedEventUids.clear(), this.cachedEventUids.has(hi(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(hi(e)), this.lastProcessedEventTime = Date.now();
  }
}
function hi(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join("-");
}
function Xa({ type: t, error: e }) {
  return t === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event";
}
function Vc(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Xa(t);
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
async function zc(t, e = {}) {
  return Vt(t, "GET", "/v1/projects", e);
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
const Wc = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, Qc = /^https?/;
async function Kc(t) {
  if (t.config.emulator)
    return;
  const { authorizedDomains: e } = await zc(t);
  for (const r of e)
    try {
      if (Gc(r))
        return;
    } catch {
    }
  Ce(
    t,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function Gc(t) {
  const e = rn(), { protocol: r, hostname: n } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const s = new URL(t);
    return s.hostname === "" && n === "" ? r === "chrome-extension:" && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : r === "chrome-extension:" && s.hostname === n;
  }
  if (!Qc.test(r))
    return !1;
  if (Wc.test(t))
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
const Jc = new Ht(3e4, 6e4);
function pi() {
  const t = ke().___jsl;
  if (t != null && t.H) {
    for (const e of Object.keys(t.H))
      if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = [...t.H[e].L], t.CP)
        for (let r = 0; r < t.CP.length; r++)
          t.CP[r] = null;
  }
}
function Yc(t) {
  return new Promise((e, r) => {
    var n, i, a;
    function s() {
      pi(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          pi(), r(Oe(
            t,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: Jc.get()
      });
    }
    if (!((i = (n = ke().gapi) === null || n === void 0 ? void 0 : n.iframes) === null || i === void 0) && i.Iframe)
      e(gapi.iframes.getContext());
    else if (!((a = ke().gapi) === null || a === void 0) && a.load)
      s();
    else {
      const u = Ju("iframefcb");
      return ke()[u] = () => {
        gapi.load ? s() : r(Oe(
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
function Xc(t) {
  return ir = ir || Yc(t), ir;
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
const Zc = new Ht(5e3, 15e3), el = "__/auth/iframe", tl = "emulator/auth/iframe", rl = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, nl = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function il(t) {
  const e = t.config;
  q(
    e.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const r = e.emulator ? yn(e, tl) : `https://${t.config.authDomain}/${el}`, n = {
    apiKey: e.apiKey,
    appName: t.name,
    v: $t
  }, i = nl.get(t.config.apiHost);
  i && (n.eid = i);
  const a = t._getFrameworks();
  return a.length && (n.fw = a.join(",")), `${r}?${Bt(n).slice(1)}`;
}
async function al(t) {
  const e = await Xc(t), r = ke().gapi;
  return q(
    r,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: il(t),
    messageHandlersFilter: r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: rl,
    dontclear: !0
  }, (n) => new Promise(async (i, a) => {
    await n.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const s = Oe(
      t,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), u = ke().setTimeout(() => {
      a(s);
    }, Zc.get());
    function o() {
      ke().clearTimeout(u), i(n);
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
const sl = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, ol = 500, ul = 600, cl = "_blank", ll = "http://localhost";
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
function dl(t, e, r, n = ol, i = ul) {
  const a = Math.max((window.screen.availHeight - i) / 2, 0).toString(), s = Math.max((window.screen.availWidth - n) / 2, 0).toString();
  let u = "";
  const o = Object.assign(Object.assign({}, sl), {
    width: n.toString(),
    height: i.toString(),
    top: a,
    left: s
  }), l = ue().toLowerCase();
  r && (u = ka(l) ? cl : r), Oa(l) && (e = e || ll, o.scrollbars = "yes");
  const f = Object.entries(o).reduce((y, [d, E]) => `${y}${d}=${E},`, "");
  if (Wu(l) && u !== "_self")
    return fl(e || "", u), new vi(null);
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
function fl(t, e) {
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
const hl = "__/auth/handler", pl = "emulator/auth/handler", vl = encodeURIComponent("fac");
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
    v: $t,
    eventId: i
  };
  if (e instanceof In) {
    e.setDefaultLanguage(t.languageCode), s.providerId = e.providerId || "", go(e.getCustomParameters()) || (s.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [f, p] of Object.entries(a || {}))
      s[f] = p;
  }
  if (e instanceof Tt) {
    const f = e.getScopes().filter((p) => p !== "");
    f.length > 0 && (s.scopes = f.join(","));
  }
  t.tenantId && (s.tid = t.tenantId);
  const u = s;
  for (const f of Object.keys(u))
    u[f] === void 0 && delete u[f];
  const o = await t._getAppCheckToken(), l = o ? `#${vl}=${encodeURIComponent(o)}` : "";
  return `${gl(t)}?${Bt(u).slice(1)}${l}`;
}
function gl({ config: t }) {
  return t.emulator ? yn(t, pl) : `https://${t.authDomain}/${hl}`;
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
class ml {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = za, this._completeRedirectFn = Bc, this._overrideRedirectResult = Uc;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, r, n, i) {
    var a;
    Fe((a = this.eventManagers[e._key()]) === null || a === void 0 ? void 0 : a.manager, "_initialize() not called before _openPopup()");
    const s = await gi(e, r, n, rn(), i);
    return dl(e, s, En());
  }
  async _openRedirect(e, r, n, i) {
    await this._originValidation(e);
    const a = await gi(e, r, n, rn(), i);
    return Ic(a), new Promise(() => {
    });
  }
  _initialize(e) {
    const r = e._key();
    if (this.eventManagers[r]) {
      const { manager: i, promise: a } = this.eventManagers[r];
      return i ? Promise.resolve(i) : (Fe(a, "If manager is not set, promise should be"), a);
    }
    const n = this.initAndGetManager(e);
    return this.eventManagers[r] = { promise: n }, n.catch(() => {
      delete this.eventManagers[r];
    }), n;
  }
  async initAndGetManager(e) {
    const r = await al(e), n = new Hc(e);
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
      s !== void 0 && r(!!s), Ce(
        e,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const r = e._key();
    return this.originValidationPromises[r] || (this.originValidationPromises[r] = Kc(e)), this.originValidationPromises[r];
  }
  get _shouldInitProactively() {
    return Na() || _n() || wr();
  }
}
const yl = ml;
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
class bl {
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
function _l(t) {
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
function Il(t) {
  Nt(new mt(
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
      }, l = new rc(n, i, a, o);
      return ic(l, r), l;
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
  })), Nt(new mt(
    "auth-internal",
    (e) => {
      const r = zt(e.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((n) => new bl(n))(r);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), ht(mi, yi, _l(t)), ht(mi, yi, "esm2017");
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
const El = 5 * 60, Tl = la("authIdTokenMaxAge") || El;
let bi = null;
const wl = (t) => async (e) => {
  const r = e && await e.getIdTokenResult(), n = r && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(r.issuedAtTime)) / 1e3;
  if (n && n > Tl)
    return;
  const i = r == null ? void 0 : r.token;
  bi !== i && (bi = i, await fetch(t, {
    method: i ? "POST" : "DELETE",
    headers: i ? {
      Authorization: `Bearer ${i}`
    } : {}
  }));
};
function Sl(t = gu()) {
  const e = pa(t, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const r = nc(t, {
    popupRedirectResolver: yl,
    persistence: [
      Cc,
      yc,
      za
    ]
  }), n = la("authTokenSyncURL");
  if (n) {
    const a = wl(n);
    hc(r, a, () => a(r.currentUser)), fc(r, (s) => a(s));
  }
  const i = io("auth");
  return i && ac(r, `http://${i}`), r;
}
Il(
  "Browser"
  /* ClientPlatform.BROWSER */
);
var Rl = "firebase", Ol = "9.23.0";
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
ht(Rl, Ol, "app");
const kl = () => Object.keys(ne.firebaseConfig).length !== 0, Ge = () => {
  const t = va(ne.firebaseConfig);
  return Sl(t);
}, Za = new Te();
Za.setCustomParameters({ prompt: "select_account" });
const es = new Ee();
es.addScope("public_profile");
const Al = new Se(), Cl = new we(), Pl = new gt("microsoft.com").setCustomParameters({
  // Force re-consent.
  prompt: "consent",
  // Target specific email with login hint.
  login_hint: "user@firstadd.onmicrosoft.com",
  tenant: "1bd1e0fb-f970-45f0-a49d-e80107b0e6f3"
});
function ie(t) {
  for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  if (process.env.NODE_ENV !== "production") {
    var i = Bl[t], a = i ? typeof i == "function" ? i.apply(null, r) : i : "unknown error nr: " + t;
    throw Error("[Immer] " + a);
  }
  throw Error("[Immer] minified error nr: " + t + (r.length ? " " + r.map(function(s) {
    return "'" + s + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function je(t) {
  return !!t && !!t[pe];
}
function qe(t) {
  var e;
  return !!t && (function(r) {
    if (!r || typeof r != "object")
      return !1;
    var n = Object.getPrototypeOf(r);
    if (n === null)
      return !0;
    var i = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
    return i === Object || typeof i == "function" && Function.toString.call(i) === $l;
  }(t) || Array.isArray(t) || !!t[Dt] || !!(!((e = t.constructor) === null || e === void 0) && e[Dt]) || Or(t) || kr(t));
}
function Dl(t) {
  return je(t) || ie(23, t), t[pe].t;
}
function bt(t, e, r) {
  r === void 0 && (r = !1), Je(t) === 0 ? (r ? Object.keys : An)(t).forEach(function(n) {
    r && typeof n == "symbol" || e(n, t[n], t);
  }) : t.forEach(function(n, i) {
    return e(i, n, t);
  });
}
function Je(t) {
  var e = t[pe];
  return e ? e.i > 3 ? e.i - 4 : e.i : Array.isArray(t) ? 1 : Or(t) ? 2 : kr(t) ? 3 : 0;
}
function Ft(t, e) {
  return Je(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function ar(t, e) {
  return Je(t) === 2 ? t.get(e) : t[e];
}
function ts(t, e, r) {
  var n = Je(t);
  n === 2 ? t.set(e, r) : n === 3 ? t.add(r) : t[e] = r;
}
function Nl(t, e) {
  return t === e ? t !== 0 || 1 / t == 1 / e : t != t && e != e;
}
function Or(t) {
  return jl && t instanceof Map;
}
function kr(t) {
  return ql && t instanceof Set;
}
function nt(t) {
  return t.o || t.t;
}
function wn(t) {
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  var e = Hl(t);
  delete e[pe];
  for (var r = An(e), n = 0; n < r.length; n++) {
    var i = r[n], a = e[i];
    a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (e[i] = { configurable: !0, writable: !0, enumerable: a.enumerable, value: t[i] });
  }
  return Object.create(Object.getPrototypeOf(t), e);
}
function Sn(t, e) {
  return e === void 0 && (e = !1), Rn(t) || je(t) || !qe(t) || (Je(t) > 1 && (t.set = t.add = t.clear = t.delete = Ml), Object.freeze(t), e && bt(t, function(r, n) {
    return Sn(n, !0);
  }, !0)), t;
}
function Ml() {
  ie(2);
}
function Rn(t) {
  return t == null || typeof t != "object" || Object.isFrozen(t);
}
function Ae(t) {
  var e = un[t];
  return e || ie(18, t), e;
}
function xl(t, e) {
  un[t] || (un[t] = e);
}
function _i() {
  return process.env.NODE_ENV === "production" || _t || ie(0), _t;
}
function $r(t, e) {
  e && (Ae("Patches"), t.u = [], t.s = [], t.v = e);
}
function vr(t) {
  an(t), t.p.forEach(Ll), t.p = null;
}
function an(t) {
  t === _t && (_t = t.l);
}
function Ii(t) {
  return _t = { p: [], l: _t, h: t, m: !0, _: 0 };
}
function Ll(t) {
  var e = t[pe];
  e.i === 0 || e.i === 1 ? e.j() : e.g = !0;
}
function Hr(t, e) {
  e._ = e.p.length;
  var r = e.p[0], n = t !== void 0 && t !== r;
  return e.h.O || Ae("ES5").S(e, t, n), n ? (r[pe].P && (vr(e), ie(4)), qe(t) && (t = gr(e, t), e.l || mr(e, t)), e.u && Ae("Patches").M(r[pe].t, t, e.u, e.s)) : t = gr(e, r, []), vr(e), e.u && e.v(e.u, e.s), t !== kn ? t : void 0;
}
function gr(t, e, r) {
  if (Rn(e))
    return e;
  var n = e[pe];
  if (!n)
    return bt(e, function(u, o) {
      return Ei(t, n, e, u, o, r);
    }, !0), e;
  if (n.A !== t)
    return e;
  if (!n.P)
    return mr(t, n.t, !0), n.t;
  if (!n.I) {
    n.I = !0, n.A._--;
    var i = n.i === 4 || n.i === 5 ? n.o = wn(n.k) : n.o, a = i, s = !1;
    n.i === 3 && (a = new Set(i), i.clear(), s = !0), bt(a, function(u, o) {
      return Ei(t, n, i, u, o, r, s);
    }), mr(t, i, !1), r && t.u && Ae("Patches").N(n, r, t.u, t.s);
  }
  return n.o;
}
function Ei(t, e, r, n, i, a, s) {
  if (process.env.NODE_ENV !== "production" && i === r && ie(5), je(i)) {
    var u = gr(t, i, a && e && e.i !== 3 && !Ft(e.R, n) ? a.concat(n) : void 0);
    if (ts(r, n, u), !je(u))
      return;
    t.m = !1;
  } else
    s && r.add(i);
  if (qe(i) && !Rn(i)) {
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
  return (r ? nt(r) : t)[e];
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
  var n = Or(e) ? Ae("MapSet").F(e, r) : kr(e) ? Ae("MapSet").T(e, r) : t.O ? function(i, a) {
    var s = Array.isArray(i), u = { i: s ? 1 : 0, A: a ? a.A : _i(), P: !1, I: !1, R: {}, l: a, t: i, k: null, o: null, j: null, C: !1 }, o = u, l = cn;
    s && (o = [u], l = At);
    var f = Proxy.revocable(o, l), p = f.revoke, y = f.proxy;
    return u.k = y, u.j = p, y;
  }(e, r) : Ae("ES5").J(e, r);
  return (r ? r.A : _i()).p.push(n), n;
}
function Fl(t) {
  return je(t) || ie(22, t), function e(r) {
    if (!qe(r))
      return r;
    var n, i = r[pe], a = Je(r);
    if (i) {
      if (!i.P && (i.i < 4 || !Ae("ES5").K(i)))
        return i.t;
      i.I = !0, n = wi(r, a), i.I = !1;
    } else
      n = wi(r, a);
    return bt(n, function(s, u) {
      i && ar(i.t, s) === u || ts(n, s, e(u));
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
function Ul() {
  function t(n) {
    if (!qe(n))
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
    return Ft(n, Dt) && (i[Dt] = n[Dt]), i;
  }
  function e(n) {
    return je(n) ? t(n) : n;
  }
  var r = "add";
  xl("Patches", { $: function(n, i) {
    return i.forEach(function(a) {
      for (var s = a.path, u = a.op, o = n, l = 0; l < s.length - 1; l++) {
        var f = Je(o), p = s[l];
        typeof p != "string" && typeof p != "number" && (p = "" + p), f !== 0 && f !== 1 || p !== "__proto__" && p !== "constructor" || ie(24), typeof o == "function" && p === "prototype" && ie(24), typeof (o = ar(o, p)) != "object" && ie(15, s.join("/"));
      }
      var y = Je(o), d = t(a.value), E = s[s.length - 1];
      switch (u) {
        case "replace":
          switch (y) {
            case 2:
              return o.set(E, d);
            case 3:
              ie(16);
            default:
              return o[E] = d;
          }
        case r:
          switch (y) {
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
          switch (y) {
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
          ie(17, u);
      }
    }), n;
  }, N: function(n, i, a, s) {
    switch (n.i) {
      case 0:
      case 4:
      case 2:
        return function(u, o, l, f) {
          var p = u.t, y = u.o;
          bt(u.R, function(d, E) {
            var T = ar(p, d), _ = ar(y, d), b = E ? Ft(p, d) ? "replace" : r : "remove";
            if (T !== _ || b !== "replace") {
              var w = o.concat(d);
              l.push(b === "remove" ? { op: b, path: w } : { op: b, path: w, value: _ }), f.push(b === r ? { op: "remove", path: w } : b === "remove" ? { op: r, path: w, value: e(T) } : { op: "replace", path: w, value: e(T) });
            }
          });
        }(n, i, a, s);
      case 5:
      case 1:
        return function(u, o, l, f) {
          var p = u.t, y = u.R, d = u.o;
          if (d.length < p.length) {
            var E = [d, p];
            p = E[0], d = E[1];
            var T = [f, l];
            l = T[0], f = T[1];
          }
          for (var _ = 0; _ < p.length; _++)
            if (y[_] && d[_] !== p[_]) {
              var b = o.concat([_]);
              l.push({ op: "replace", path: b, value: e(d[_]) }), f.push({ op: "replace", path: b, value: e(p[_]) });
            }
          for (var w = p.length; w < d.length; w++) {
            var v = o.concat([w]);
            l.push({ op: r, path: v, value: e(d[w]) });
          }
          p.length < d.length && f.push({ op: "replace", path: o.concat(["length"]), value: p.length });
        }(n, i, a, s);
      case 3:
        return function(u, o, l, f) {
          var p = u.t, y = u.o, d = 0;
          p.forEach(function(E) {
            if (!y.has(E)) {
              var T = o.concat([d]);
              l.push({ op: "remove", path: T, value: E }), f.unshift({ op: r, path: T, value: E });
            }
            d++;
          }), d = 0, y.forEach(function(E) {
            if (!p.has(E)) {
              var T = o.concat([d]);
              l.push({ op: r, path: T, value: E }), f.unshift({ op: "remove", path: T, value: E });
            }
            d++;
          });
        }(n, i, a, s);
    }
  }, M: function(n, i, a, s) {
    a.push({ op: "replace", path: [], value: i === kn ? void 0 : i }), s.push({ op: "replace", path: [], value: n });
  } });
}
var Si, _t, On = typeof Symbol < "u" && typeof Symbol("x") == "symbol", jl = typeof Map < "u", ql = typeof Set < "u", Ri = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", kn = On ? Symbol.for("immer-nothing") : ((Si = {})["immer-nothing"] = !0, Si), Dt = On ? Symbol.for("immer-draftable") : "__$immer_draftable", pe = On ? Symbol.for("immer-state") : "__$immer_state", Bl = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(t) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, $l = "" + Object.prototype.constructor, An = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Object.getOwnPropertyNames, Hl = Object.getOwnPropertyDescriptors || function(t) {
  var e = {};
  return An(t).forEach(function(r) {
    e[r] = Object.getOwnPropertyDescriptor(t, r);
  }), e;
}, un = {}, cn = { get: function(t, e) {
  if (e === pe)
    return t;
  var r = nt(t);
  if (!Ft(r, e))
    return function(i, a, s) {
      var u, o = Ti(a, s);
      return o ? "value" in o ? o.value : (u = o.get) === null || u === void 0 ? void 0 : u.call(i.k) : void 0;
    }(t, r, e);
  var n = r[e];
  return t.I || !qe(n) ? n : n === Vr(t.t, e) ? (zr(t), t.o[e] = on(t.A.h, n, t)) : n;
}, has: function(t, e) {
  return e in nt(t);
}, ownKeys: function(t) {
  return Reflect.ownKeys(nt(t));
}, set: function(t, e, r) {
  var n = Ti(nt(t), e);
  if (n != null && n.set)
    return n.set.call(t.k, r), !0;
  if (!t.P) {
    var i = Vr(nt(t), e), a = i == null ? void 0 : i[pe];
    if (a && a.t === r)
      return t.o[e] = r, t.R[e] = !1, !0;
    if (Nl(r, i) && (r !== void 0 || Ft(t.t, e)))
      return !0;
    zr(t), sn(t);
  }
  return t.o[e] === r && (r !== void 0 || e in t.o) || Number.isNaN(r) && Number.isNaN(t.o[e]) || (t.o[e] = r, t.R[e] = !0), !0;
}, deleteProperty: function(t, e) {
  return Vr(t.t, e) !== void 0 || e in t.t ? (t.R[e] = !1, zr(t), sn(t)) : delete t.R[e], t.o && delete t.o[e], !0;
}, getOwnPropertyDescriptor: function(t, e) {
  var r = nt(t), n = Reflect.getOwnPropertyDescriptor(r, e);
  return n && { writable: !0, configurable: t.i !== 1 || e !== "length", enumerable: n.enumerable, value: r[e] };
}, defineProperty: function() {
  ie(11);
}, getPrototypeOf: function(t) {
  return Object.getPrototypeOf(t.t);
}, setPrototypeOf: function() {
  ie(12);
} }, At = {};
bt(cn, function(t, e) {
  At[t] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
}), At.deleteProperty = function(t, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && ie(13), At.set.call(this, t, e, void 0);
}, At.set = function(t, e, r) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && ie(14), cn.set.call(this, t[0], e, r, t[0]);
};
var Vl = function() {
  function t(r) {
    var n = this;
    this.O = Ri, this.D = !0, this.produce = function(i, a, s) {
      if (typeof i == "function" && typeof a != "function") {
        var u = a;
        a = i;
        var o = n;
        return function(T) {
          var _ = this;
          T === void 0 && (T = u);
          for (var b = arguments.length, w = Array(b > 1 ? b - 1 : 0), v = 1; v < b; v++)
            w[v - 1] = arguments[v];
          return o.produce(T, function(m) {
            var g;
            return (g = a).call.apply(g, [_, m].concat(w));
          });
        };
      }
      var l;
      if (typeof a != "function" && ie(6), s !== void 0 && typeof s != "function" && ie(7), qe(i)) {
        var f = Ii(n), p = on(n, i, void 0), y = !0;
        try {
          l = a(p), y = !1;
        } finally {
          y ? vr(f) : an(f);
        }
        return typeof Promise < "u" && l instanceof Promise ? l.then(function(T) {
          return $r(f, s), Hr(T, f);
        }, function(T) {
          throw vr(f), T;
        }) : ($r(f, s), Hr(l, f));
      }
      if (!i || typeof i != "object") {
        if ((l = a(i)) === void 0 && (l = i), l === kn && (l = void 0), n.D && Sn(l, !0), s) {
          var d = [], E = [];
          Ae("Patches").M(i, l, d, E), s(d, E);
        }
        return l;
      }
      ie(21, i);
    }, this.produceWithPatches = function(i, a) {
      if (typeof i == "function")
        return function(l) {
          for (var f = arguments.length, p = Array(f > 1 ? f - 1 : 0), y = 1; y < f; y++)
            p[y - 1] = arguments[y];
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
    qe(r) || ie(8), je(r) && (r = Fl(r));
    var n = Ii(this), i = on(this, r, void 0);
    return i[pe].C = !0, an(n), i;
  }, e.finishDraft = function(r, n) {
    var i = r && r[pe];
    process.env.NODE_ENV !== "production" && (i && i.C || ie(9), i.I && ie(10));
    var a = i.A;
    return $r(a, n), Hr(void 0, a);
  }, e.setAutoFreeze = function(r) {
    this.D = r;
  }, e.setUseProxies = function(r) {
    r && !Ri && ie(20), this.O = r;
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
    var s = Ae("Patches").$;
    return je(r) ? s(r, n) : this.produce(r, function(u) {
      return s(u, n);
    });
  }, t;
}(), ve = new Vl();
ve.produce;
var rs = ve.produceWithPatches.bind(ve);
ve.setAutoFreeze.bind(ve);
ve.setUseProxies.bind(ve);
var Oi = ve.applyPatches.bind(ve);
ve.createDraft.bind(ve);
ve.finishDraft.bind(ve);
var yr = "NOT_FOUND";
function zl(t) {
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
function Wl(t, e) {
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
var Ql = function(e, r) {
  return e === r;
};
function Kl(t) {
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
  }, n = r.equalityCheck, i = n === void 0 ? Ql : n, a = r.maxSize, s = a === void 0 ? 1 : a, u = r.resultEqualityCheck, o = Kl(i), l = s === 1 ? zl(o) : Wl(s, o);
  function f() {
    var p = l.get(arguments);
    if (p === yr) {
      if (p = t.apply(null, arguments), u) {
        var y = l.getEntries(), d = y.find(function(E) {
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
}, Gl = Object.defineProperty, Jl = Object.defineProperties, Yl = Object.getOwnPropertyDescriptors, Ir = Object.getOwnPropertySymbols, ns = Object.prototype.hasOwnProperty, is = Object.prototype.propertyIsEnumerable, Ai = function(t, e, r) {
  return e in t ? Gl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
}, se = function(t, e) {
  for (var r in e || (e = {}))
    ns.call(e, r) && Ai(t, r, e[r]);
  if (Ir)
    for (var n = 0, i = Ir(e); n < i.length; n++) {
      var r = i[n];
      is.call(e, r) && Ai(t, r, e[r]);
    }
  return t;
}, Re = function(t, e) {
  return Jl(t, Yl(e));
}, Ci = function(t, e) {
  var r = {};
  for (var n in t)
    ns.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && Ir)
    for (var i = 0, a = Ir(t); i < a.length; i++) {
      var n = a[i];
      e.indexOf(n) < 0 && is.call(t, n) && (r[n] = t[n]);
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
function Xl(t) {
  return {
    status: t,
    isUninitialized: t === re.uninitialized,
    isLoading: t === re.pending,
    isSuccess: t === re.fulfilled,
    isError: t === re.rejected
  };
}
function Zl(t) {
  return new RegExp("(^|:)//").test(t);
}
var ed = function(t) {
  return t.replace(/\/$/, "");
}, td = function(t) {
  return t.replace(/^\//, "");
};
function rd(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  if (Zl(e))
    return e;
  var r = t.endsWith("/") || !e.startsWith("?") ? "/" : "";
  return t = ed(t), e = td(e), "" + t + r + e;
}
var Pi = function(t) {
  return [].concat.apply([], t);
};
function nd() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function id() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var Di = ut;
function as(t, e) {
  if (t === e || !(Di(t) && Di(e) || Array.isArray(t) && Array.isArray(e)))
    return e;
  for (var r = Object.keys(e), n = Object.keys(t), i = r.length === n.length, a = Array.isArray(e) ? [] : {}, s = 0, u = r; s < u.length; s++) {
    var o = u[s];
    a[o] = as(t[o], e[o]), i && (i = t[o] === a[o]);
  }
  return i ? t : a;
}
var Ni = function() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return fetch.apply(void 0, t);
}, ad = function(t) {
  return t.status >= 200 && t.status <= 299;
}, sd = function(t) {
  return /ion\/(vnd\.api\+)?json/.test(t.get("content-type") || "");
};
function Mi(t) {
  if (!ut(t))
    return t;
  for (var e = se({}, t), r = 0, n = Object.entries(e); r < n.length; r++) {
    var i = n[r], a = i[0], s = i[1];
    s === void 0 && delete e[a];
  }
  return e;
}
function od(t) {
  var e = this;
  t === void 0 && (t = {});
  var r = t, n = r.baseUrl, i = r.prepareHeaders, a = i === void 0 ? function(v) {
    return v;
  } : i, s = r.fetchFn, u = s === void 0 ? Ni : s, o = r.paramsSerializer, l = r.isJsonContentType, f = l === void 0 ? sd : l, p = r.jsonContentType, y = p === void 0 ? "application/json" : p, d = r.jsonReplacer, E = r.timeout, T = r.responseHandler, _ = r.validateStatus, b = Ci(r, [
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
  return typeof fetch > "u" && u === Ni && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), function(v, m) {
    return Er(e, null, function() {
      var g, h, I, R, O, S, k, A, C, D, M, U, L, F, $, W, H, K, B, G, V, J, te, de, ge, fe, me, X, ce, Be, Ze, $e, et, lt, He, Kt;
      return br(this, function(ye) {
        switch (ye.label) {
          case 0:
            return g = m.signal, h = m.getState, I = m.extra, R = m.endpoint, O = m.forced, S = m.type, A = typeof v == "string" ? { url: v } : v, C = A.url, D = A.headers, M = D === void 0 ? new Headers(b.headers) : D, U = A.params, L = U === void 0 ? void 0 : U, F = A.responseHandler, $ = F === void 0 ? T ?? "json" : F, W = A.validateStatus, H = W === void 0 ? _ ?? ad : W, K = A.timeout, B = K === void 0 ? E : K, G = Ci(A, [
              "url",
              "headers",
              "params",
              "responseHandler",
              "validateStatus",
              "timeout"
            ]), V = se(Re(se({}, b), {
              signal: g
            }), G), M = new Headers(Mi(M)), J = V, [4, a(M, {
              getState: h,
              extra: I,
              endpoint: R,
              forced: O,
              type: S
            })];
          case 1:
            J.headers = ye.sent() || M, te = function(he) {
              return typeof he == "object" && (ut(he) || Array.isArray(he) || typeof he.toJSON == "function");
            }, !V.headers.has("content-type") && te(V.body) && V.headers.set("content-type", y), te(V.body) && f(V.headers) && (V.body = JSON.stringify(V.body, d)), L && (de = ~C.indexOf("?") ? "&" : "?", ge = o ? o(L) : new URLSearchParams(Mi(L)), C += de + ge), C = rd(n, C), fe = new Request(C, V), me = fe.clone(), k = { request: me }, ce = !1, Be = B && setTimeout(function() {
              ce = !0, m.abort();
            }, B), ye.label = 2;
          case 2:
            return ye.trys.push([2, 4, 5, 6]), [4, u(fe)];
          case 3:
            return X = ye.sent(), [3, 6];
          case 4:
            return Ze = ye.sent(), [2, {
              error: {
                status: ce ? "TIMEOUT_ERROR" : "FETCH_ERROR",
                error: String(Ze)
              },
              meta: k
            }];
          case 5:
            return Be && clearTimeout(Be), [
              7
              /*endfinally*/
            ];
          case 6:
            $e = X.clone(), k.response = $e, lt = "", ye.label = 7;
          case 7:
            return ye.trys.push([7, 9, , 10]), [4, Promise.all([
              w(X, $).then(function(he) {
                return et = he;
              }, function(he) {
                return He = he;
              }),
              $e.text().then(function(he) {
                return lt = he;
              }, function() {
              })
            ])];
          case 8:
            if (ye.sent(), He)
              throw He;
            return [3, 10];
          case 9:
            return Kt = ye.sent(), [2, {
              error: {
                status: "PARSING_ERROR",
                originalStatus: X.status,
                data: lt,
                error: String(Kt)
              },
              meta: k
            }];
          case 10:
            return [2, H(X, et) ? {
              data: et,
              meta: k
            } : {
              error: {
                status: X.status,
                data: et
              },
              meta: k
            }];
        }
      });
    });
  };
  function w(v, m) {
    return Er(this, null, function() {
      var g;
      return br(this, function(h) {
        switch (h.label) {
          case 0:
            return typeof m == "function" ? [2, m(v)] : (m === "content-type" && (m = f(v.headers) ? "json" : "text"), m !== "json" ? [3, 2] : [4, v.text()]);
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
), Cn = /* @__PURE__ */ It("__rtkq/focused"), ss = /* @__PURE__ */ It("__rtkq/unfocused"), Pn = /* @__PURE__ */ It("__rtkq/online"), os = /* @__PURE__ */ It("__rtkq/offline"), Pe;
(function(t) {
  t.query = "query", t.mutation = "mutation";
})(Pe || (Pe = {}));
function us(t) {
  return t.type === Pe.query;
}
function ud(t) {
  return t.type === Pe.mutation;
}
function cs(t, e, r, n, i, a) {
  return cd(t) ? t(e, r, n, i).map(ln).map(a) : Array.isArray(t) ? t.map(ln).map(a) : [];
}
function cd(t) {
  return typeof t == "function";
}
function ln(t) {
  return typeof t == "string" ? { type: t } : t;
}
function Wr(t) {
  return t != null;
}
var Ut = Symbol("forceQueryFn"), dn = function(t) {
  return typeof t[Ut] == "function";
};
function ld(t) {
  var e = t.serializeQueryArgs, r = t.queryThunk, n = t.mutationThunk, i = t.api, a = t.context, s = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), o = i.internalActions, l = o.unsubscribeQueryResult, f = o.removeMutationResult, p = o.updateSubscriptionOptions;
  return {
    buildInitiateQuery: v,
    buildInitiateMutation: m,
    getRunningQueryThunk: E,
    getRunningMutationThunk: T,
    getRunningQueriesThunk: _,
    getRunningMutationsThunk: b,
    getRunningOperationPromises: d,
    removalWarning: y
  };
  function y() {
    throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`);
  }
  function d() {
    if (typeof process < "u" && process.env.NODE_ENV === "development")
      y();
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
      var R, O = a.endpointDefinitions[g], S = e({
        queryArgs: h,
        endpointDefinition: O,
        endpointName: g
      });
      return (R = s.get(I)) == null ? void 0 : R[S];
    };
  }
  function T(g, h) {
    return function(I) {
      var R;
      return (R = u.get(I)) == null ? void 0 : R[h];
    };
  }
  function _() {
    return function(g) {
      return Object.values(s.get(g) || {}).filter(Wr);
    };
  }
  function b() {
    return function(g) {
      return Object.values(u.get(g) || {}).filter(Wr);
    };
  }
  function w(g) {
    if (process.env.NODE_ENV !== "production") {
      if (w.triggered)
        return;
      var h = g(i.internalActions.internal_probeSubscription({
        queryCacheKey: "DOES_NOT_EXIST",
        requestId: "DUMMY_REQUEST_ID"
      }));
      if (w.triggered = !0, typeof h != "boolean")
        throw new Error('Warning: Middleware for RTK-Query API at reducerPath "' + i.reducerPath + `" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function v(g, h) {
    var I = function(R, O) {
      var S = O === void 0 ? {} : O, k = S.subscribe, A = k === void 0 ? !0 : k, C = S.forceRefetch, D = S.subscriptionOptions, M = Ut, U = S[M];
      return function(L, F) {
        var $, W, H = e({
          queryArgs: R,
          endpointDefinition: h,
          endpointName: g
        }), K = r(($ = {
          type: "query",
          subscribe: A,
          forceRefetch: C,
          subscriptionOptions: D,
          endpointName: g,
          originalArgs: R,
          queryCacheKey: H
        }, $[Ut] = U, $)), B = i.endpoints[g].select(R), G = L(K), V = B(F());
        w(L);
        var J = G.requestId, te = G.abort, de = V.requestId !== J, ge = (W = s.get(L)) == null ? void 0 : W[H], fe = function() {
          return B(F());
        }, me = Object.assign(U ? G.then(fe) : de && !ge ? Promise.resolve(V) : Promise.all([ge, G]).then(fe), {
          arg: R,
          requestId: J,
          subscriptionOptions: D,
          queryCacheKey: H,
          abort: te,
          unwrap: function() {
            return Er(this, null, function() {
              var ce;
              return br(this, function(Be) {
                switch (Be.label) {
                  case 0:
                    return [4, me];
                  case 1:
                    if (ce = Be.sent(), ce.isError)
                      throw ce.error;
                    return [2, ce.data];
                }
              });
            });
          },
          refetch: function() {
            return L(I(R, { subscribe: !1, forceRefetch: !0 }));
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
  function m(g) {
    return function(h, I) {
      var R = I === void 0 ? {} : I, O = R.track, S = O === void 0 ? !0 : O, k = R.fixedCacheKey;
      return function(A, C) {
        var D = n({
          type: "mutation",
          endpointName: g,
          originalArgs: h,
          track: S,
          fixedCacheKey: k
        }), M = A(D);
        w(A);
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
function dd(t) {
  var e = this, r = t.reducerPath, n = t.baseQuery, i = t.context.endpointDefinitions, a = t.serializeQueryArgs, s = t.api, u = function(v, m, g) {
    return function(h) {
      var I = i[v];
      h(s.internalActions.queryResultPatched({
        queryCacheKey: a({
          queryArgs: m,
          endpointDefinition: I,
          endpointName: v
        }),
        patches: g
      }));
    };
  }, o = function(v, m, g) {
    return function(h, I) {
      var R, O, S = s.endpoints[v].select(m)(I()), k = {
        patches: [],
        inversePatches: [],
        undo: function() {
          return h(s.util.patchQueryData(v, m, k.inversePatches));
        }
      };
      if (S.status === re.uninitialized)
        return k;
      if ("data" in S)
        if (qe(S.data)) {
          var A = rs(S.data, g), C = A[1], D = A[2];
          (R = k.patches).push.apply(R, C), (O = k.inversePatches).push.apply(O, D);
        } else {
          var M = g(S.data);
          k.patches.push({ op: "replace", path: [], value: M }), k.inversePatches.push({
            op: "replace",
            path: [],
            value: S.data
          });
        }
      return h(s.util.patchQueryData(v, m, k.patches)), k;
    };
  }, l = function(v, m, g) {
    return function(h) {
      var I;
      return h(s.endpoints[v].initiate(m, (I = {
        subscribe: !1,
        forceRefetch: !0
      }, I[Ut] = function() {
        return {
          data: g
        };
      }, I)));
    };
  }, f = function(v, m) {
    return Er(e, [v, m], function(g, h) {
      var I, R, O, S, k, A, C, D, M, U, L, F, $, W, H, K, B, G, V = h.signal, J = h.abort, te = h.rejectWithValue, de = h.fulfillWithValue, ge = h.dispatch, fe = h.getState, me = h.extra;
      return br(this, function(X) {
        switch (X.label) {
          case 0:
            I = i[g.endpointName], X.label = 1;
          case 1:
            return X.trys.push([1, 8, , 13]), R = Li, O = void 0, S = {
              signal: V,
              abort: J,
              dispatch: ge,
              getState: fe,
              extra: me,
              endpoint: g.endpointName,
              type: g.type,
              forced: g.type === "query" ? p(g, fe()) : void 0
            }, k = g.type === "query" ? g[Ut] : void 0, k ? (O = k(), [3, 6]) : [3, 2];
          case 2:
            return I.query ? [4, n(I.query(g.originalArgs), S, I.extraOptions)] : [3, 4];
          case 3:
            return O = X.sent(), I.transformResponse && (R = I.transformResponse), [3, 6];
          case 4:
            return [4, I.queryFn(g.originalArgs, S, I.extraOptions, function(ce) {
              return n(ce, S, I.extraOptions);
            })];
          case 5:
            O = X.sent(), X.label = 6;
          case 6:
            if (typeof process < "u" && process.env.NODE_ENV === "development") {
              if (A = I.query ? "`baseQuery`" : "`queryFn`", C = void 0, !O)
                C = A + " did not return anything.";
              else if (typeof O != "object")
                C = A + " did not return an object.";
              else if (O.error && O.data)
                C = A + " returned an object containing both `error` and `result`.";
              else if (O.error === void 0 && O.data === void 0)
                C = A + " returned an object containing neither a valid `error` and `result`. At least one of them should not be `undefined`";
              else
                for (D = 0, M = Object.keys(O); D < M.length; D++)
                  if (U = M[D], U !== "error" && U !== "data" && U !== "meta") {
                    C = "The object returned by " + A + " has the unknown property " + U + ".";
                    break;
                  }
              C && console.error("Error encountered handling the endpoint " + g.endpointName + `.
              ` + C + "\n              It needs to return an object with either the shape `{ data: <value> }` or `{ error: <value> }` that may contain an optional `meta` property.\n              Object returned was:", O);
            }
            if (O.error)
              throw new xi(O.error, O.meta);
            return L = de, [4, R(O.data, O.meta, g.originalArgs)];
          case 7:
            return [2, L.apply(void 0, [X.sent(), (B = {
              fulfilledTimeStamp: Date.now(),
              baseQueryMeta: O.meta
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
  function p(v, m) {
    var g, h, I, R, O = (h = (g = m[r]) == null ? void 0 : g.queries) == null ? void 0 : h[v.queryCacheKey], S = (I = m[r]) == null ? void 0 : I.config.refetchOnMountOrArgChange, k = O == null ? void 0 : O.fulfilledTimeStamp, A = (R = v.forceRefetch) != null ? R : v.subscribe && S;
    return A ? A === !0 || (Number(/* @__PURE__ */ new Date()) - Number(k)) / 1e3 >= A : !1;
  }
  var y = zn(r + "/executeQuery", f, {
    getPendingMeta: function() {
      var v;
      return v = { startedTimeStamp: Date.now() }, v[Gt] = !0, v;
    },
    condition: function(v, m) {
      var g = m.getState, h, I, R, O = g(), S = (I = (h = O[r]) == null ? void 0 : h.queries) == null ? void 0 : I[v.queryCacheKey], k = S == null ? void 0 : S.fulfilledTimeStamp, A = v.originalArgs, C = S == null ? void 0 : S.originalArgs, D = i[v.endpointName];
      return dn(v) ? !0 : (S == null ? void 0 : S.status) === "pending" ? !1 : p(v, O) || us(D) && ((R = D == null ? void 0 : D.forceRefetch) != null && R.call(D, {
        currentArg: A,
        previousArg: C,
        endpointState: S,
        state: O
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
  }, T = function(v) {
    return "ifOlderThan" in v;
  }, _ = function(v, m, g) {
    return function(h, I) {
      var R = E(g) && g.force, O = T(g) && g.ifOlderThan, S = function(D) {
        return D === void 0 && (D = !0), s.endpoints[v].initiate(m, { forceRefetch: D });
      }, k = s.endpoints[v].select(m)(I());
      if (R)
        h(S());
      else if (O) {
        var A = k == null ? void 0 : k.fulfilledTimeStamp;
        if (!A) {
          h(S());
          return;
        }
        var C = (Number(/* @__PURE__ */ new Date()) - Number(new Date(A))) / 1e3 >= O;
        C && h(S());
      } else
        h(S(!1));
    };
  };
  function b(v) {
    return function(m) {
      var g, h;
      return ((h = (g = m == null ? void 0 : m.meta) == null ? void 0 : g.arg) == null ? void 0 : h.endpointName) === v;
    };
  }
  function w(v, m) {
    return {
      matchPending: Mr(Yi(v), b(m)),
      matchFulfilled: Mr(Et(v), b(m)),
      matchRejected: Mr(Xi(v), b(m))
    };
  }
  return {
    queryThunk: y,
    mutationThunk: d,
    prefetch: _,
    updateQueryData: o,
    upsertQueryData: l,
    patchQueryData: u,
    buildMatchThunkActions: w
  };
}
function ls(t, e, r, n) {
  return cs(r[t.meta.arg.endpointName][e], Et(t) ? t.payload : void 0, fn(t) ? t.payload : void 0, t.meta.arg.originalArgs, "baseQueryMeta" in t.meta ? t.meta.baseQueryMeta : void 0, n);
}
function Yt(t, e, r) {
  var n = t[e];
  n && r(n);
}
function jt(t) {
  var e;
  return (e = "arg" in t ? t.arg.fixedCacheKey : t.fixedCacheKey) != null ? e : t.requestId;
}
function Fi(t, e, r) {
  var n = t[jt(e)];
  n && r(n);
}
var Ot = {};
function fd(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.mutationThunk, i = t.context, a = i.endpointDefinitions, s = i.apiUid, u = i.extractRehydrationInfo, o = i.hasRehydrationInfo, l = t.assertTagType, f = t.config, p = It(e + "/resetApiState"), y = tt({
    name: e + "/queries",
    initialState: Ot,
    reducers: {
      removeQueryResult: {
        reducer: function(g, h) {
          var I = h.payload.queryCacheKey;
          delete g[I];
        },
        prepare: Nr()
      },
      queryResultPatched: function(g, h) {
        var I = h.payload, R = I.queryCacheKey, O = I.patches;
        Yt(g, R, function(S) {
          S.data = Oi(S.data, O.concat());
        });
      }
    },
    extraReducers: function(g) {
      g.addCase(r.pending, function(h, I) {
        var R = I.meta, O = I.meta.arg, S, k, A = dn(O);
        (O.subscribe || A) && ((k = h[S = O.queryCacheKey]) != null || (h[S] = {
          status: re.uninitialized,
          endpointName: O.endpointName
        })), Yt(h, O.queryCacheKey, function(C) {
          C.status = re.pending, C.requestId = A && C.requestId ? C.requestId : R.requestId, O.originalArgs !== void 0 && (C.originalArgs = O.originalArgs), C.startedTimeStamp = R.startedTimeStamp;
        });
      }).addCase(r.fulfilled, function(h, I) {
        var R = I.meta, O = I.payload;
        Yt(h, R.arg.queryCacheKey, function(S) {
          var k;
          if (!(S.requestId !== R.requestId && !dn(R.arg))) {
            var A = a[R.arg.endpointName].merge;
            if (S.status = re.fulfilled, A)
              if (S.data !== void 0) {
                var C = R.fulfilledTimeStamp, D = R.arg, M = R.baseQueryMeta, U = R.requestId, L = hn(S.data, function(F) {
                  return A(F, O, {
                    arg: D.originalArgs,
                    baseQueryMeta: M,
                    fulfilledTimeStamp: C,
                    requestId: U
                  });
                });
                S.data = L;
              } else
                S.data = O;
            else
              S.data = (k = a[R.arg.endpointName].structuralSharing) == null || k ? as(je(S.data) ? Dl(S.data) : S.data, O) : O;
            delete S.error, S.fulfilledTimeStamp = R.fulfilledTimeStamp;
          }
        });
      }).addCase(r.rejected, function(h, I) {
        var R = I.meta, O = R.condition, S = R.arg, k = R.requestId, A = I.error, C = I.payload;
        Yt(h, S.queryCacheKey, function(D) {
          if (!O) {
            if (D.requestId !== k)
              return;
            D.status = re.rejected, D.error = C ?? A;
          }
        });
      }).addMatcher(o, function(h, I) {
        for (var R = u(I).queries, O = 0, S = Object.entries(R); O < S.length; O++) {
          var k = S[O], A = k[0], C = k[1];
          ((C == null ? void 0 : C.status) === re.fulfilled || (C == null ? void 0 : C.status) === re.rejected) && (h[A] = C);
        }
      });
    }
  }), d = tt({
    name: e + "/mutations",
    initialState: Ot,
    reducers: {
      removeMutationResult: {
        reducer: function(g, h) {
          var I = h.payload, R = jt(I);
          R in g && delete g[R];
        },
        prepare: Nr()
      }
    },
    extraReducers: function(g) {
      g.addCase(n.pending, function(h, I) {
        var R = I.meta, O = I.meta, S = O.requestId, k = O.arg, A = O.startedTimeStamp;
        k.track && (h[jt(R)] = {
          requestId: S,
          status: re.pending,
          endpointName: k.endpointName,
          startedTimeStamp: A
        });
      }).addCase(n.fulfilled, function(h, I) {
        var R = I.payload, O = I.meta;
        O.arg.track && Fi(h, O, function(S) {
          S.requestId === O.requestId && (S.status = re.fulfilled, S.data = R, S.fulfilledTimeStamp = O.fulfilledTimeStamp);
        });
      }).addCase(n.rejected, function(h, I) {
        var R = I.payload, O = I.error, S = I.meta;
        S.arg.track && Fi(h, S, function(k) {
          k.requestId === S.requestId && (k.status = re.rejected, k.error = R ?? O);
        });
      }).addMatcher(o, function(h, I) {
        for (var R = u(I).mutations, O = 0, S = Object.entries(R); O < S.length; O++) {
          var k = S[O], A = k[0], C = k[1];
          ((C == null ? void 0 : C.status) === re.fulfilled || (C == null ? void 0 : C.status) === re.rejected) && A !== (C == null ? void 0 : C.requestId) && (h[A] = C);
        }
      });
    }
  }), E = tt({
    name: e + "/invalidation",
    initialState: Ot,
    reducers: {},
    extraReducers: function(g) {
      g.addCase(y.actions.removeQueryResult, function(h, I) {
        for (var R = I.payload.queryCacheKey, O = 0, S = Object.values(h); O < S.length; O++)
          for (var k = S[O], A = 0, C = Object.values(k); A < C.length; A++) {
            var D = C[A], M = D.indexOf(R);
            M !== -1 && D.splice(M, 1);
          }
      }).addMatcher(o, function(h, I) {
        for (var R, O, S, k, A = u(I).provided, C = 0, D = Object.entries(A); C < D.length; C++)
          for (var M = D[C], U = M[0], L = M[1], F = 0, $ = Object.entries(L); F < $.length; F++)
            for (var W = $[F], H = W[0], K = W[1], B = (k = (O = (R = h[U]) != null ? R : h[U] = {})[S = H || "__internal_without_id"]) != null ? k : O[S] = [], G = 0, V = K; G < V.length; G++) {
              var J = V[G], te = B.includes(J);
              te || B.push(J);
            }
      }).addMatcher(Gi(Et(r), fn(r)), function(h, I) {
        for (var R, O, S, k, A = ls(I, "providesTags", a, l), C = I.meta.arg.queryCacheKey, D = 0, M = Object.values(h); D < M.length; D++)
          for (var U = M[D], L = 0, F = Object.values(U); L < F.length; L++) {
            var $ = F[L], W = $.indexOf(C);
            W !== -1 && $.splice(W, 1);
          }
        for (var H = 0, K = A; H < K.length; H++) {
          var B = K[H], G = B.type, V = B.id, J = (k = (O = (R = h[G]) != null ? R : h[G] = {})[S = V || "__internal_without_id"]) != null ? k : O[S] = [], te = J.includes(C);
          te || J.push(C);
        }
      });
    }
  }), T = tt({
    name: e + "/subscriptions",
    initialState: Ot,
    reducers: {
      updateSubscriptionOptions: function(g, h) {
      },
      unsubscribeQueryResult: function(g, h) {
      },
      internal_probeSubscription: function(g, h) {
      }
    }
  }), _ = tt({
    name: e + "/internalSubscriptions",
    initialState: Ot,
    reducers: {
      subscriptionsUpdated: {
        reducer: function(g, h) {
          return Oi(g, h.payload);
        },
        prepare: Nr()
      }
    }
  }), b = tt({
    name: e + "/config",
    initialState: se({
      online: nd(),
      focused: id(),
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
      }).addCase(os, function(h) {
        h.online = !1;
      }).addCase(Cn, function(h) {
        h.focused = !0;
      }).addCase(ss, function(h) {
        h.focused = !1;
      }).addMatcher(o, function(h) {
        return se({}, h);
      });
    }
  }), w = Ji({
    queries: y.reducer,
    mutations: d.reducer,
    provided: E.reducer,
    subscriptions: _.reducer,
    config: b.reducer
  }), v = function(g, h) {
    return w(p.match(h) ? void 0 : g, h);
  }, m = Re(se(se(se(se(se({}, b.actions), y.actions), T.actions), _.actions), d.actions), {
    unsubscribeMutationResult: d.actions.removeMutationResult,
    resetApiState: p
  });
  return { reducer: v, actions: m };
}
var at = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), ds = {
  status: re.uninitialized
}, Ui = /* @__PURE__ */ hn(ds, function() {
}), ji = /* @__PURE__ */ hn(ds, function() {
});
function hd(t) {
  var e = t.serializeQueryArgs, r = t.reducerPath, n = function(f) {
    return Ui;
  }, i = function(f) {
    return ji;
  };
  return { buildQuerySelector: u, buildMutationSelector: o, selectInvalidatedBy: l };
  function a(f) {
    return se(se({}, f), Xl(f.status));
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
    return function(y) {
      var d = e({
        queryArgs: y,
        endpointDefinition: p,
        endpointName: f
      }), E = function(_) {
        var b, w, v;
        return (v = (w = (b = s(_)) == null ? void 0 : b.queries) == null ? void 0 : w[d]) != null ? v : Ui;
      }, T = y === at ? n : E;
      return Ct(T, a);
    };
  }
  function o() {
    return function(f) {
      var p, y;
      typeof f == "object" ? y = (p = jt(f)) != null ? p : at : y = f;
      var d = function(T) {
        var _, b, w;
        return (w = (b = (_ = s(T)) == null ? void 0 : _.mutations) == null ? void 0 : b[y]) != null ? w : ji;
      }, E = y === at ? i : d;
      return Ct(E, a);
    };
  }
  function l(f, p) {
    for (var y, d = f[r], E = /* @__PURE__ */ new Set(), T = 0, _ = p.map(ln); T < _.length; T++) {
      var b = _[T], w = d.provided[b.type];
      if (w)
        for (var v = (y = b.id !== void 0 ? w[b.id] : Pi(Object.values(w))) != null ? y : [], m = 0, g = v; m < g.length; m++) {
          var h = g[m];
          E.add(h);
        }
    }
    return Pi(Array.from(E.values()).map(function(I) {
      var R = d.queries[I];
      return R ? [
        {
          queryCacheKey: I,
          endpointName: R.endpointName,
          originalArgs: R.originalArgs
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
      return ut(u) ? Object.keys(u).sort().reduce(function(o, l) {
        return o[l] = u[l], o;
      }, {}) : u;
    });
    ut(r) && (Xt == null || Xt.set(r, a)), n = a;
  }
  return e + "(" + n + ")";
};
function pd() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(n) {
    var i = ki(function(f) {
      var p, y;
      return (y = n.extractRehydrationInfo) == null ? void 0 : y.call(n, f, {
        reducerPath: (p = n.reducerPath) != null ? p : "api"
      });
    }), a = Re(se({
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
          var y = f.endpointDefinition.serializeQueryArgs;
          p = function(d) {
            var E = y(d);
            return typeof E == "string" ? E : qi(Re(se({}, d), {
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
      apiUid: Ds(),
      extractRehydrationInfo: i,
      hasRehydrationInfo: ki(function(f) {
        return i(f) != null;
      })
    }, u = {
      injectEndpoints: l,
      enhanceEndpoints: function(f) {
        var p = f.addTagTypes, y = f.endpoints;
        if (p)
          for (var d = 0, E = p; d < E.length; d++) {
            var T = E[d];
            a.tagTypes.includes(T) || a.tagTypes.push(T);
          }
        if (y)
          for (var _ = 0, b = Object.entries(y); _ < b.length; _++) {
            var w = b[_], v = w[0], m = w[1];
            typeof m == "function" ? m(s.endpointDefinitions[v]) : Object.assign(s.endpointDefinitions[v] || {}, m);
          }
        return u;
      }
    }, o = t.map(function(f) {
      return f.init(u, a, s);
    });
    function l(f) {
      for (var p = f.endpoints({
        query: function(m) {
          return Re(se({}, m), { type: Pe.query });
        },
        mutation: function(m) {
          return Re(se({}, m), { type: Pe.mutation });
        }
      }), y = 0, d = Object.entries(p); y < d.length; y++) {
        var E = d[y], T = E[0], _ = E[1];
        if (!f.overrideExisting && T in s.endpointDefinitions) {
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error("called `injectEndpoints` to override already-existing endpointName " + T + " without specifying `overrideExisting: true`");
          continue;
        }
        s.endpointDefinitions[T] = _;
        for (var b = 0, w = o; b < w.length; b++) {
          var v = w[b];
          v.injectEndpoint(T, _);
        }
      }
      return u;
    }
    return u.injectEndpoints({ endpoints: n.endpoints });
  };
}
function vd(t) {
  for (var e in t)
    return !1;
  return !0;
}
var gd = 2147483647 / 1e3 - 1, md = function(t) {
  var e = t.reducerPath, r = t.api, n = t.context, i = t.internalState, a = r.internalActions, s = a.removeQueryResult, u = a.unsubscribeQueryResult;
  function o(y) {
    var d = i.currentSubscriptions[y];
    return !!d && !vd(d);
  }
  var l = {}, f = function(y, d, E) {
    var T;
    if (u.match(y)) {
      var _ = d.getState()[e], b = y.payload.queryCacheKey;
      p(b, (T = _.queries[b]) == null ? void 0 : T.endpointName, d, _.config);
    }
    if (r.util.resetApiState.match(y))
      for (var w = 0, v = Object.entries(l); w < v.length; w++) {
        var m = v[w], g = m[0], h = m[1];
        h && clearTimeout(h), delete l[g];
      }
    if (n.hasRehydrationInfo(y))
      for (var _ = d.getState()[e], I = n.extractRehydrationInfo(y).queries, R = 0, O = Object.entries(I); R < O.length; R++) {
        var S = O[R], b = S[0], k = S[1];
        p(b, k == null ? void 0 : k.endpointName, d, _.config);
      }
  };
  function p(y, d, E, T) {
    var _, b = n.endpointDefinitions[d], w = (_ = b == null ? void 0 : b.keepUnusedDataFor) != null ? _ : T.keepUnusedDataFor;
    if (w !== 1 / 0) {
      var v = Math.max(0, Math.min(w, gd));
      if (!o(y)) {
        var m = l[y];
        m && clearTimeout(m), l[y] = setTimeout(function() {
          o(y) || E.dispatch(s({ queryCacheKey: y })), delete l[y];
        }, v * 1e3);
      }
    }
  }
  return f;
}, yd = function(t) {
  var e = t.reducerPath, r = t.context, n = t.context.endpointDefinitions, i = t.mutationThunk, a = t.api, s = t.assertTagType, u = t.refetchQuery, o = a.internalActions.removeQueryResult, l = Gi(Et(i), fn(i)), f = function(y, d) {
    l(y) && p(ls(y, "invalidatesTags", n, s), d), a.util.invalidateTags.match(y) && p(cs(y.payload, void 0, void 0, void 0, void 0, s), d);
  };
  function p(y, d) {
    var E = d.getState(), T = E[e], _ = a.util.selectInvalidatedBy(E, y);
    r.batch(function() {
      for (var b, w = Array.from(_.values()), v = 0, m = w; v < m.length; v++) {
        var g = m[v].queryCacheKey, h = T.queries[g], I = (b = T.subscriptions[g]) != null ? b : {};
        h && (Object.keys(I).length === 0 ? d.dispatch(o({
          queryCacheKey: g
        })) : h.status !== re.uninitialized && d.dispatch(u(h, g)));
      }
    });
  }
  return f;
}, bd = function(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.api, i = t.refetchQuery, a = t.internalState, s = {}, u = function(d, E) {
    (n.internalActions.updateSubscriptionOptions.match(d) || n.internalActions.unsubscribeQueryResult.match(d)) && l(d.payload, E), (r.pending.match(d) || r.rejected.match(d) && d.meta.condition) && l(d.meta.arg, E), (r.fulfilled.match(d) || r.rejected.match(d) && !d.meta.condition) && o(d.meta.arg, E), n.util.resetApiState.match(d) && p();
  };
  function o(d, E) {
    var T = d.queryCacheKey, _ = E.getState()[e], b = _.queries[T], w = a.currentSubscriptions[T];
    if (!(!b || b.status === re.uninitialized)) {
      var v = y(w);
      if (Number.isFinite(v)) {
        var m = s[T];
        m != null && m.timeout && (clearTimeout(m.timeout), m.timeout = void 0);
        var g = Date.now() + v, h = s[T] = {
          nextPollTimestamp: g,
          pollingInterval: v,
          timeout: setTimeout(function() {
            h.timeout = void 0, E.dispatch(i(b, T));
          }, v)
        };
      }
    }
  }
  function l(d, E) {
    var T = d.queryCacheKey, _ = E.getState()[e], b = _.queries[T], w = a.currentSubscriptions[T];
    if (!(!b || b.status === re.uninitialized)) {
      var v = y(w);
      if (!Number.isFinite(v)) {
        f(T);
        return;
      }
      var m = s[T], g = Date.now() + v;
      (!m || g < m.nextPollTimestamp) && o({ queryCacheKey: T }, E);
    }
  }
  function f(d) {
    var E = s[d];
    E != null && E.timeout && clearTimeout(E.timeout), delete s[d];
  }
  function p() {
    for (var d = 0, E = Object.keys(s); d < E.length; d++) {
      var T = E[d];
      f(T);
    }
  }
  function y(d) {
    d === void 0 && (d = {});
    var E = Number.POSITIVE_INFINITY;
    for (var T in d)
      d[T].pollingInterval && (E = Math.min(d[T].pollingInterval, E));
    return E;
  }
  return u;
}, _d = function(t) {
  var e = t.reducerPath, r = t.context, n = t.api, i = t.refetchQuery, a = t.internalState, s = n.internalActions.removeQueryResult, u = function(l, f) {
    Cn.match(l) && o(f, "refetchOnFocus"), Pn.match(l) && o(f, "refetchOnReconnect");
  };
  function o(l, f) {
    var p = l.getState()[e], y = p.queries, d = a.currentSubscriptions;
    r.batch(function() {
      for (var E = 0, T = Object.keys(d); E < T.length; E++) {
        var _ = T[E], b = y[_], w = d[_];
        if (!(!w || !b)) {
          var v = Object.values(w).some(function(m) {
            return m[f] === !0;
          }) || Object.values(w).every(function(m) {
            return m[f] === void 0;
          }) && p.config[f];
          v && (Object.keys(w).length === 0 ? l.dispatch(s({
            queryCacheKey: _
          })) : b.status !== re.uninitialized && l.dispatch(i(b, _)));
        }
      }
    });
  }
  return u;
}, Bi = new Error("Promise never resolved before cacheEntryRemoved."), Id = function(t) {
  var e = t.api, r = t.reducerPath, n = t.context, i = t.queryThunk, a = t.mutationThunk;
  t.internalState;
  var s = Wn(i), u = Wn(a), o = Et(i, a), l = {}, f = function(d, E, T) {
    var _ = p(d);
    if (i.pending.match(d)) {
      var b = T[r].queries[_], w = E.getState()[r].queries[_];
      !b && w && y(d.meta.arg.endpointName, d.meta.arg.originalArgs, _, E, d.meta.requestId);
    } else if (a.pending.match(d)) {
      var w = E.getState()[r].mutations[_];
      w && y(d.meta.arg.endpointName, d.meta.arg.originalArgs, _, E, d.meta.requestId);
    } else if (o(d)) {
      var v = l[_];
      v != null && v.valueResolved && (v.valueResolved({
        data: d.payload,
        meta: d.meta.baseQueryMeta
      }), delete v.valueResolved);
    } else if (e.internalActions.removeQueryResult.match(d) || e.internalActions.removeMutationResult.match(d)) {
      var v = l[_];
      v && (delete l[_], v.cacheEntryRemoved());
    } else if (e.util.resetApiState.match(d))
      for (var m = 0, g = Object.entries(l); m < g.length; m++) {
        var h = g[m], I = h[0], v = h[1];
        delete l[I], v.cacheEntryRemoved();
      }
  };
  function p(d) {
    return s(d) ? d.meta.arg.queryCacheKey : u(d) ? d.meta.requestId : e.internalActions.removeQueryResult.match(d) ? d.payload.queryCacheKey : e.internalActions.removeMutationResult.match(d) ? jt(d.payload) : "";
  }
  function y(d, E, T, _, b) {
    var w = n.endpointDefinitions[d], v = w == null ? void 0 : w.onCacheEntryAdded;
    if (v) {
      var m = {}, g = new Promise(function(k) {
        m.cacheEntryRemoved = k;
      }), h = Promise.race([
        new Promise(function(k) {
          m.valueResolved = k;
        }),
        g.then(function() {
          throw Bi;
        })
      ]);
      h.catch(function() {
      }), l[T] = m;
      var I = e.endpoints[d].select(w.type === Pe.query ? E : T), R = _.dispatch(function(k, A, C) {
        return C;
      }), O = Re(se({}, _), {
        getCacheEntry: function() {
          return I(_.getState());
        },
        requestId: b,
        extra: R,
        updateCachedData: w.type === Pe.query ? function(k) {
          return _.dispatch(e.util.updateQueryData(d, E, k));
        } : void 0,
        cacheDataLoaded: h,
        cacheEntryRemoved: g
      }), S = v(E, O);
      Promise.resolve(S).catch(function(k) {
        if (k !== Bi)
          throw k;
      });
    }
  }
  return f;
}, Ed = function(t) {
  var e = t.api, r = t.context, n = t.queryThunk, i = t.mutationThunk, a = Yi(n, i), s = Xi(n, i), u = Et(n, i), o = {}, l = function(f, p) {
    var y, d, E;
    if (a(f)) {
      var T = f.meta, _ = T.requestId, b = T.arg, w = b.endpointName, v = b.originalArgs, m = r.endpointDefinitions[w], g = m == null ? void 0 : m.onQueryStarted;
      if (g) {
        var h = {}, I = new Promise(function(M, U) {
          h.resolve = M, h.reject = U;
        });
        I.catch(function() {
        }), o[_] = h;
        var R = e.endpoints[w].select(m.type === Pe.query ? v : _), O = p.dispatch(function(M, U, L) {
          return L;
        }), S = Re(se({}, p), {
          getCacheEntry: function() {
            return R(p.getState());
          },
          requestId: _,
          extra: O,
          updateCachedData: m.type === Pe.query ? function(M) {
            return p.dispatch(e.util.updateQueryData(w, v, M));
          } : void 0,
          queryFulfilled: I
        });
        g(v, S);
      }
    } else if (u(f)) {
      var k = f.meta, _ = k.requestId, A = k.baseQueryMeta;
      (y = o[_]) == null || y.resolve({
        data: f.payload,
        meta: A
      }), delete o[_];
    } else if (s(f)) {
      var C = f.meta, _ = C.requestId, D = C.rejectedWithValue, A = C.baseQueryMeta;
      (E = o[_]) == null || E.reject({
        error: (d = f.payload) != null ? d : f.error,
        isUnhandledError: !D,
        meta: A
      }), delete o[_];
    }
  };
  return l;
}, Td = function(t) {
  var e = t.api, r = t.context.apiUid, n = t.reducerPath;
  return function(i, a) {
    var s, u;
    e.util.resetApiState.match(i) && a.dispatch(e.internalActions.middlewareRegistered(r)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(i) && i.payload === r && ((u = (s = a.getState()[n]) == null ? void 0 : s.config) == null ? void 0 : u.middlewareRegistered) === "conflict" && console.warn('There is a mismatch between slice and middleware for the reducerPath "' + n + `".
You can only have one api per reducer path, this will lead to crashes in various situations!` + (n === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""));
  };
}, $i, wd = typeof queueMicrotask == "function" ? queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis) : function(t) {
  return ($i || ($i = Promise.resolve())).then(t).catch(function(e) {
    return setTimeout(function() {
      throw e;
    }, 0);
  });
}, Sd = function(t) {
  var e = t.api, r = t.queryThunk, n = t.internalState, i = e.reducerPath + "/subscriptions", a = null, s = !1, u = e.internalActions, o = u.updateSubscriptionOptions, l = u.unsubscribeQueryResult, f = function(p, y) {
    var d, E, T, _, b, w, v, m, g;
    if (o.match(y)) {
      var h = y.payload, I = h.queryCacheKey, R = h.requestId, O = h.options;
      return (d = p == null ? void 0 : p[I]) != null && d[R] && (p[I][R] = O), !0;
    }
    if (l.match(y)) {
      var S = y.payload, I = S.queryCacheKey, R = S.requestId;
      return p[I] && delete p[I][R], !0;
    }
    if (e.internalActions.removeQueryResult.match(y))
      return delete p[y.payload.queryCacheKey], !0;
    if (r.pending.match(y)) {
      var k = y.meta, A = k.arg, R = k.requestId;
      if (A.subscribe) {
        var C = (T = p[E = A.queryCacheKey]) != null ? T : p[E] = {};
        return C[R] = (b = (_ = A.subscriptionOptions) != null ? _ : C[R]) != null ? b : {}, !0;
      }
    }
    if (r.rejected.match(y)) {
      var D = y.meta, M = D.condition, A = D.arg, R = D.requestId;
      if (M && A.subscribe) {
        var C = (v = p[w = A.queryCacheKey]) != null ? v : p[w] = {};
        return C[R] = (g = (m = A.subscriptionOptions) != null ? m : C[R]) != null ? g : {}, !0;
      }
    }
    return !1;
  };
  return function(p, y) {
    var d, E;
    if (a || (a = JSON.parse(JSON.stringify(n.currentSubscriptions))), e.util.resetApiState.match(p))
      return a = n.currentSubscriptions = {}, [!0, !1];
    if (e.internalActions.internal_probeSubscription.match(p)) {
      var T = p.payload, _ = T.queryCacheKey, b = T.requestId, w = !!((d = n.currentSubscriptions[_]) != null && d[b]);
      return [!1, w];
    }
    var v = f(n.currentSubscriptions, p);
    if (v) {
      s || (wd(function() {
        var I = JSON.parse(JSON.stringify(n.currentSubscriptions)), R = rs(a, function() {
          return I;
        }), O = R[1];
        y.next(e.internalActions.subscriptionsUpdated(O)), a = I, s = !1;
      }), s = !0);
      var m = !!((E = p.type) != null && E.startsWith(i)), g = r.rejected.match(p) && p.meta.condition && !!p.meta.arg.subscribe, h = !m && !g;
      return [h, !1];
    }
    return [!0, !1];
  };
};
function Rd(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.api, i = t.context, a = i.apiUid, s = {
    invalidateTags: It(e + "/invalidateTags")
  }, u = function(p) {
    return !!p && typeof p.type == "string" && p.type.startsWith(e + "/");
  }, o = [
    Td,
    md,
    yd,
    bd,
    Id,
    Ed
  ], l = function(p) {
    var y = !1, d = {
      currentSubscriptions: {}
    }, E = Re(se({}, t), {
      internalState: d,
      refetchQuery: f
    }), T = o.map(function(w) {
      return w(E);
    }), _ = Sd(E), b = _d(E);
    return function(w) {
      return function(v) {
        y || (y = !0, p.dispatch(n.internalActions.middlewareRegistered(a)));
        var m = Re(se({}, p), { next: w }), g = p.getState(), h = _(v, m, g), I = h[0], R = h[1], O;
        if (I ? O = w(v) : O = R, p.getState()[e] && (b(v, m, g), u(v) || i.hasRehydrationInfo(v)))
          for (var S = 0, k = T; S < k.length; S++) {
            var A = k[S];
            A(v, m, g);
          }
        return O;
      };
    };
  };
  return { middleware: l, actions: s };
  function f(p, y, d) {
    return d === void 0 && (d = {}), r(se({
      type: "query",
      endpointName: p.endpointName,
      originalArgs: p.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: y
    }, d));
  }
}
function ze(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  Object.assign.apply(Object, _r([t], e));
}
var Hi = /* @__PURE__ */ Symbol(), Od = function() {
  return {
    name: Hi,
    init: function(t, e, r) {
      var n = e.baseQuery, i = e.tagTypes, a = e.reducerPath, s = e.serializeQueryArgs, u = e.keepUnusedDataFor, o = e.refetchOnMountOrArgChange, l = e.refetchOnFocus, f = e.refetchOnReconnect;
      Ul();
      var p = function(B) {
        return typeof process < "u" && process.env.NODE_ENV === "development" && (i.includes(B.type) || console.error("Tag type '" + B.type + "' was used, but not specified in `tagTypes`!")), B;
      };
      Object.assign(t, {
        reducerPath: a,
        endpoints: {},
        internalActions: {
          onOnline: Pn,
          onOffline: os,
          onFocus: Cn,
          onFocusLost: ss
        },
        util: {}
      });
      var y = dd({
        baseQuery: n,
        reducerPath: a,
        context: r,
        api: t,
        serializeQueryArgs: s
      }), d = y.queryThunk, E = y.mutationThunk, T = y.patchQueryData, _ = y.updateQueryData, b = y.upsertQueryData, w = y.prefetch, v = y.buildMatchThunkActions, m = fd({
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
      }), g = m.reducer, h = m.actions;
      ze(t.util, {
        patchQueryData: T,
        updateQueryData: _,
        upsertQueryData: b,
        prefetch: w,
        resetApiState: h.resetApiState
      }), ze(t.internalActions, h);
      var I = Rd({
        reducerPath: a,
        context: r,
        queryThunk: d,
        mutationThunk: E,
        api: t,
        assertTagType: p
      }), R = I.middleware, O = I.actions;
      ze(t.util, O), ze(t, { reducer: g, middleware: R });
      var S = hd({
        serializeQueryArgs: s,
        reducerPath: a
      }), k = S.buildQuerySelector, A = S.buildMutationSelector, C = S.selectInvalidatedBy;
      ze(t.util, { selectInvalidatedBy: C });
      var D = ld({
        queryThunk: d,
        mutationThunk: E,
        api: t,
        serializeQueryArgs: s,
        context: r
      }), M = D.buildInitiateQuery, U = D.buildInitiateMutation, L = D.getRunningMutationThunk, F = D.getRunningMutationsThunk, $ = D.getRunningQueriesThunk, W = D.getRunningQueryThunk, H = D.getRunningOperationPromises, K = D.removalWarning;
      return ze(t.util, {
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
          (J = (V = te.endpoints)[B]) != null || (V[B] = {}), us(G) ? ze(te.endpoints[B], {
            name: B,
            select: k(B, G),
            initiate: M(B, G)
          }, v(d, B)) : ud(G) && ze(te.endpoints[B], {
            name: B,
            select: A(),
            initiate: U(B)
          }, v(E, B));
        }
      };
    }
  };
}, kd = globalThis && globalThis.__spreadArray || function(t, e) {
  for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
    t[i] = e[r];
  return t;
}, Ad = Object.defineProperty, Cd = Object.defineProperties, Pd = Object.getOwnPropertyDescriptors, Vi = Object.getOwnPropertySymbols, Dd = Object.prototype.hasOwnProperty, Nd = Object.prototype.propertyIsEnumerable, zi = function(t, e, r) {
  return e in t ? Ad(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
}, Ne = function(t, e) {
  for (var r in e || (e = {}))
    Dd.call(e, r) && zi(t, r, e[r]);
  if (Vi)
    for (var n = 0, i = Vi(e); n < i.length; n++) {
      var r = i[n];
      Nd.call(e, r) && zi(t, r, e[r]);
    }
  return t;
}, sr = function(t, e) {
  return Cd(t, Pd(e));
};
function Wi(t, e, r, n) {
  var i = _e(function() {
    return {
      queryArgs: t,
      serialized: typeof t == "object" ? e({ queryArgs: t, endpointDefinition: r, endpointName: n }) : t
    };
  }, [t, e, r, n]), a = We(i);
  return Ie(function() {
    a.current.serialized !== i.serialized && (a.current = i);
  }, [i]), a.current.serialized === i.serialized ? a.current.queryArgs : t;
}
var Qr = Symbol();
function Kr(t) {
  var e = We(t);
  return Ie(function() {
    or(e.current, t) || (e.current = t);
  }, [t]), or(e.current, t) ? e.current : t;
}
var Zt = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Md = function(t) {
  var e = t.endpointName, r = t.queryArgs, n = "", i = Zt == null ? void 0 : Zt.get(r);
  if (typeof i == "string")
    n = i;
  else {
    var a = JSON.stringify(r, function(s, u) {
      return ut(u) ? Object.keys(u).sort().reduce(function(o, l) {
        return o[l] = u[l], o;
      }, {}) : u;
    });
    ut(r) && (Zt == null || Zt.set(r, a)), n = a;
  }
  return e + "(" + n + ")";
}, xd = typeof window < "u" && window.document && window.document.createElement ? Cs : Ie, Ld = function(t) {
  return t;
}, Fd = function(t) {
  return t.isUninitialized ? sr(Ne({}, t), {
    isUninitialized: !1,
    isFetching: !0,
    isLoading: t.data === void 0,
    status: re.pending
  }) : t;
};
function Ud(t) {
  var e = t.api, r = t.moduleOptions, n = r.batch, i = r.useDispatch, a = r.useSelector, s = r.useStore, u = r.unstable__sideEffectsInRender, o = t.serializeQueryArgs, l = t.context, f = u ? function(T) {
    return T();
  } : Ie;
  return { buildQueryHooks: d, buildMutationHook: E, usePrefetch: y };
  function p(T, _, b) {
    if (_ != null && _.endpointName && T.isUninitialized) {
      var w = _.endpointName, v = l.endpointDefinitions[w];
      o({
        queryArgs: _.originalArgs,
        endpointDefinition: v,
        endpointName: w
      }) === o({
        queryArgs: b,
        endpointDefinition: v,
        endpointName: w
      }) && (_ = void 0);
    }
    var m = T.isSuccess ? T.data : _ == null ? void 0 : _.data;
    m === void 0 && (m = T.data);
    var g = m !== void 0, h = T.isLoading, I = !g && h, R = T.isSuccess || h && g;
    return sr(Ne({}, T), {
      data: m,
      currentData: T.data,
      isFetching: h,
      isLoading: I,
      isSuccess: R
    });
  }
  function y(T, _) {
    var b = i(), w = Kr(_);
    return kt(function(v, m) {
      return b(e.util.prefetch(T, v, Ne(Ne({}, w), m)));
    }, [T, b, w]);
  }
  function d(T) {
    var _ = function(v, m) {
      var g = m === void 0 ? {} : m, h = g.refetchOnReconnect, I = g.refetchOnFocus, R = g.refetchOnMountOrArgChange, O = g.skip, S = O === void 0 ? !1 : O, k = g.pollingInterval, A = k === void 0 ? 0 : k, C = e.endpoints[T].initiate, D = i(), M = Wi(S ? at : v, Md, l.endpointDefinitions[T], T), U = Kr({
        refetchOnReconnect: h,
        refetchOnFocus: I,
        pollingInterval: A
      }), L = We(!1), F = We(), $ = F.current || {}, W = $.queryCacheKey, H = $.requestId, K = !1;
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
        if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(G), M === at) {
          J == null || J.unsubscribe(), F.current = void 0;
          return;
        }
        var te = (V = F.current) == null ? void 0 : V.subscriptionOptions;
        if (!J || J.arg !== M) {
          J == null || J.unsubscribe();
          var de = D(C(M, {
            subscriptionOptions: U,
            forceRefetch: R
          }));
          F.current = de;
        } else
          U !== te && J.updateSubscriptionOptions(U);
      }, [
        D,
        C,
        R,
        M,
        U,
        G
      ]), Ie(function() {
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
    }, b = function(v) {
      var m = v === void 0 ? {} : v, g = m.refetchOnReconnect, h = m.refetchOnFocus, I = m.pollingInterval, R = I === void 0 ? 0 : I, O = e.endpoints[T].initiate, S = i(), k = Vn(Qr), A = k[0], C = k[1], D = We(), M = Kr({
        refetchOnReconnect: g,
        refetchOnFocus: h,
        pollingInterval: R
      });
      f(function() {
        var F, $, W = (F = D.current) == null ? void 0 : F.subscriptionOptions;
        M !== W && (($ = D.current) == null || $.updateSubscriptionOptions(M));
      }, [M]);
      var U = We(M);
      f(function() {
        U.current = M;
      }, [M]);
      var L = kt(function(F, $) {
        $ === void 0 && ($ = !1);
        var W;
        return n(function() {
          var H;
          (H = D.current) == null || H.unsubscribe(), D.current = W = S(O(F, {
            subscriptionOptions: U.current,
            forceRefetch: !$
          })), C(F);
        }), W;
      }, [S, O]);
      return Ie(function() {
        return function() {
          var F;
          (F = D == null ? void 0 : D.current) == null || F.unsubscribe();
        };
      }, []), Ie(function() {
        A !== Qr && !D.current && L(A, !0);
      }, [A, L]), _e(function() {
        return [L, A];
      }, [L, A]);
    }, w = function(v, m) {
      var g = m === void 0 ? {} : m, h = g.skip, I = h === void 0 ? !1 : h, R = g.selectFromResult, O = e.endpoints[T].select, S = Wi(I ? at : v, o, l.endpointDefinitions[T], T), k = We(), A = _e(function() {
        return Ct([
          O(S),
          function(L, F) {
            return F;
          },
          function(L) {
            return S;
          }
        ], p);
      }, [O, S]), C = _e(function() {
        return R ? Ct([A], R) : A;
      }, [A, R]), D = a(function(L) {
        return C(L, k.current);
      }, or), M = s(), U = A(M.getState(), k.current);
      return xd(function() {
        k.current = U;
      }, [U]), D;
    };
    return {
      useQueryState: w,
      useQuerySubscription: _,
      useLazyQuerySubscription: b,
      useLazyQuery: function(v) {
        var m = b(v), g = m[0], h = m[1], I = w(h, sr(Ne({}, v), {
          skip: h === Qr
        })), R = _e(function() {
          return { lastArg: h };
        }, [h]);
        return _e(function() {
          return [g, I, R];
        }, [g, I, R]);
      },
      useQuery: function(v, m) {
        var g = _(v, m), h = w(v, Ne({
          selectFromResult: v === at || m != null && m.skip ? void 0 : Fd
        }, m)), I = h.data, R = h.status, O = h.isLoading, S = h.isSuccess, k = h.isError, A = h.error;
        return Hn({ data: I, status: R, isLoading: O, isSuccess: S, isError: k, error: A }), _e(function() {
          return Ne(Ne({}, h), g);
        }, [h, g]);
      }
    };
  }
  function E(T) {
    return function(_) {
      var b = _ === void 0 ? {} : _, w = b.selectFromResult, v = w === void 0 ? Ld : w, m = b.fixedCacheKey, g = e.endpoints[T], h = g.select, I = g.initiate, R = i(), O = Vn(), S = O[0], k = O[1];
      Ie(function() {
        return function() {
          S != null && S.arg.fixedCacheKey || S == null || S.reset();
        };
      }, [S]);
      var A = kt(function(J) {
        var te = R(I(J, { fixedCacheKey: m }));
        return k(te), te;
      }, [R, I, m]), C = (S || {}).requestId, D = _e(function() {
        return Ct([h({ fixedCacheKey: m, requestId: S == null ? void 0 : S.requestId })], v);
      }, [h, S, v, m]), M = a(D, or), U = m == null ? S == null ? void 0 : S.arg.originalArgs : void 0, L = kt(function() {
        n(function() {
          S && k(void 0), m && R(e.internalActions.removeMutationResult({
            requestId: C,
            fixedCacheKey: m
          }));
        });
      }, [R, m, S, C]), F = M.endpointName, $ = M.data, W = M.status, H = M.isLoading, K = M.isSuccess, B = M.isError, G = M.error;
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
        return sr(Ne({}, M), { originalArgs: U, reset: L });
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
function jd(t) {
  return t.type === Tr.query;
}
function qd(t) {
  return t.type === Tr.mutation;
}
function Gr(t) {
  return t.replace(t[0], t[0].toUpperCase());
}
function er(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  Object.assign.apply(Object, kd([t], e));
}
var Bd = /* @__PURE__ */ Symbol(), $d = function(t) {
  var e = t === void 0 ? {} : t, r = e.batch, n = r === void 0 ? Ms : r, i = e.useDispatch, a = i === void 0 ? xs : i, s = e.useSelector, u = s === void 0 ? Ls : s, o = e.useStore, l = o === void 0 ? Fs : o, f = e.unstable__sideEffectsInRender, p = f === void 0 ? !1 : f;
  return {
    name: Bd,
    init: function(y, d, E) {
      var T = d.serializeQueryArgs, _ = y, b = Ud({
        api: y,
        moduleOptions: {
          batch: n,
          useDispatch: a,
          useSelector: u,
          useStore: l,
          unstable__sideEffectsInRender: p
        },
        serializeQueryArgs: T,
        context: E
      }), w = b.buildQueryHooks, v = b.buildMutationHook, m = b.usePrefetch;
      return er(_, { usePrefetch: m }), er(E, { batch: n }), {
        injectEndpoint: function(g, h) {
          if (jd(h)) {
            var I = w(g), R = I.useQuery, O = I.useLazyQuery, S = I.useLazyQuerySubscription, k = I.useQueryState, A = I.useQuerySubscription;
            er(_.endpoints[g], {
              useQuery: R,
              useLazyQuery: O,
              useLazyQuerySubscription: S,
              useQueryState: k,
              useQuerySubscription: A
            }), y["use" + Gr(g) + "Query"] = R, y["useLazy" + Gr(g) + "Query"] = O;
          } else if (qd(h)) {
            var C = v(g);
            er(_.endpoints[g], {
              useMutation: C
            }), y["use" + Gr(g) + "Mutation"] = C;
          }
        }
      };
    }
  };
}, Hd = /* @__PURE__ */ pd(Od(), $d());
const ot = Hd({
  baseQuery: od({
    baseUrl: ne.endpoint,
    prepareHeaders: (t, { getState: e, endpoint: r }) => {
      const { isAuthenticated: n, refresh_token: i } = e().userReducer;
      return n && i && r === "updateLogin" && t.set(
        ne.refreshTokenHeader,
        ne.keywoardRefreshTokenHeader ? `${ne.keywoardRefreshTokenHeader} ${i}` : i
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
              Authorization: `${ne.keywoard} ${a}`
            }
          };
        if (r)
          return {
            url: ne.urlForBase64 ?? "",
            method: "POST",
            headers: {
              authorization: "Basic " + r
            }
          };
        let s = {};
        return n && (s = { ...s, password: n }), e && (s = { ...s, email: e }), i && (s = { ...s, username: i }), {
          url: ne.urlForEmailOrUser ?? "",
          method: "POST",
          body: s
        };
      }
    }),
    updateLogin: t.mutation({
      query() {
        return {
          url: ne.urlForRefreshToken ?? "login/update",
          method: "PUT"
        };
      }
    })
  })
}), { useLoginMutation: Vd, useUpdateLoginMutation: zd } = ot, Wd = (t) => Qt(Ge(), es).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), Qd = (t) => Qt(Ge(), Za).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), Kd = (t) => Qt(Ge(), Al).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), Gd = (t) => Qt(Ge(), Cl).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), Jd = (t) => Qt(Ge(), Pl).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), Yd = 1e3, Xd = 5e3, Zd = (t, e) => {
  const [r] = Vd(), [n] = zd(), i = Me({
    email: "",
    username: "",
    password: ""
  }), a = Me(!1), s = Me(!1), u = Me(!1), o = Me({}), l = () => {
    Ps(() => {
      a.value = !a.value, s.value && (s.value = !s.value);
    });
  }, f = (T) => {
    const { name: _, value: b } = T.target;
    i.value = {
      ...i.value,
      [_]: b
    };
  }, p = (T) => {
    if (T.preventDefault(), ne.hasToS && !a.value) {
      s.value = !0;
      return;
    }
    if (u.value)
      return;
    u.value = !0;
    let _ = {};
    if (ne.acceptUsername ? _ = {
      username: i.value.username,
      password: i.value.password
    } : _ = {
      email: i.value.email,
      password: i.value.password
    }, ne.bodyAsBase64) {
      const b = Object.entries(_).map(([v, m]) => `${v}=${m}`).join("&");
      _ = {
        encodedBody: btoa(b)
      };
    }
    r(_).unwrap().then(y).catch((b) => {
      "data" in b ? o.value = {
        code: "auth/firebase-credential-not-provided",
        message: b.data && (Object.values(b.data).find((w) => typeof w == "string") ?? b.data)
      } : "status" in b && (o.value = {
        code: "auth/fetch-failed",
        message: "error" in b ? b.error : "Unexpected Error"
      });
    }), u.value = !1;
  }, y = (T) => {
    t(async (_, b, w, v) => {
      clearInterval(b.current), b.current = void 0, b.current = setInterval(() => {
        n().unwrap().then((m) => _.value = m).catch((m) => {
          clearInterval(b.current), "data" in m ? w.value = {
            code: "auth/firebase-credential-not-provided",
            message: m.data && (Object.values(m.data).find((g) => typeof g == "string") ?? m.data)
          } : "status" in m && (w.value = {
            code: "auth/fetch-failed",
            message: "error" in m ? m.error : "Unexpected Error"
          });
        });
      }, T.expiry * Yd - Xd), _.value = T, v.value = async () => {
        await Ba(Ge()).finally(() => clearInterval(b.current)), v.value = void 0;
      };
    }), typeof e == "function" ? e((_) => !_) : e.value = !e.value;
  }, d = async (T) => {
    r({ token: T }).unwrap().then(y).catch((_) => {
      "data" in _ ? o.value = {
        code: "auth/firebase-credential-not-provided",
        message: _.data && (Object.values(_.data).find((b) => typeof b == "string") ?? _.data)
      } : "status" in _ && (o.value = {
        code: "auth/fetch-failed",
        message: "error" in _ ? _.error : "Unexpected Error"
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
    handleSocialLogin: async (T, _) => {
      if (T.preventDefault(), ne.hasToS && !a.value) {
        s.value = !0;
        return;
      }
      if (!u.value) {
        switch (u.value = !0, _) {
          case Zi:
            await Qd(o).then(
              async (b) => {
                b && (Te.credentialFromResult(b) === null && (o.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), b.user.getIdToken().then(d));
              }
            );
            break;
          case ea:
            await Wd(o).then(
              async (b) => {
                b && (Ee.credentialFromResult(b) === null && (o.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), b.user.getIdToken().then(d));
              }
            );
            break;
          case ta:
            await Kd(o).then(
              async (b) => {
                b && (Se.credentialFromResult(b) === null && (o.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), b.user.getIdToken().then(d));
              }
            );
            break;
          case ra:
            await Gd(o).then(
              async (b) => {
                b && (we.credentialFromResult(b) === null && (o.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), b.user.getIdToken().then(d));
              }
            );
            break;
          case na:
            await Jd(o).then(
              async (b) => {
                b && (gt.credentialFromResult(b) === null && (o.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), b.user.getIdToken().then(d));
              }
            );
            break;
        }
        u.value = !1;
      }
    },
    handleSubmit: p,
    handleToken: d
  };
}, ef = ({ isOpen: t, message: e, authManager: r }) => {
  const {
    form: n,
    radio: i,
    confirmTp: a,
    isLoading: s,
    handleError: u,
    handleSubmit: o,
    handleChange: l,
    handlerRadio: f,
    handleSocialLogin: p,
    handleToken: y
  } = Zd(r, t), d = Js(ne.languaje), E = Me(void 0);
  Ie(() => {
    (async () => {
      s.value = !0;
      let b = pc(Ge(), async (w) => {
        w && await w.getIdToken().then((v) => {
          const m = w.providerData[0];
          E.value = {
            ...m,
            providerId: m.providerId.split(".")[0],
            tokenId: v
          };
        }).finally(() => s.value = !1), s.value = !1, b();
      });
    })();
  }, []);
  const T = () => {
    Ba(Ge()).finally(() => E.value = void 0);
  };
  return /* @__PURE__ */ x.jsx(
    Bs,
    {
      title: d.logIn,
      closeAction: t,
      message: s.value ? /* @__PURE__ */ x.jsx($s, {}) : e,
      children: /* @__PURE__ */ x.jsxs("div", { className: "login-container", children: [
        /* @__PURE__ */ x.jsxs("div", { className: "login", children: [
          /* @__PURE__ */ x.jsxs("div", { children: [
            Ks(ne.signInMethods).map(
              ({ className: _, name: b, constName: w, icon: v }, m) => /* @__PURE__ */ x.jsxs("button", { onClick: (g) => p(g, w), className: _, children: [
                v && v,
                b
              ] }, m)
            ),
            u.value.message && /* @__PURE__ */ x.jsx("span", { className: "notify error", children: ne.firebaseErrorMessages ? Hs(ne.firebaseErrorMessages, u.value) : u.value.message })
          ] }),
          /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsxs("form", { className: "email", onSubmit: o, children: [
            ne.acceptUsername ? /* @__PURE__ */ x.jsx(x.Fragment, { children: /* @__PURE__ */ x.jsx("input", { placeholder: `Email | ${d.username}`, required: !0, name: "username", onChange: l, value: n.value.username, type: "text" }) }) : /* @__PURE__ */ x.jsx(x.Fragment, { children: /* @__PURE__ */ x.jsx("input", { placeholder: "Email", required: !0, name: "email", onChange: l, value: n.value.email, type: "email" }) }),
            /* @__PURE__ */ x.jsx("input", { placeholder: d.password, required: !0, name: "password", onChange: l, value: n.value.password, type: "password" }),
            /* @__PURE__ */ x.jsx("button", { type: "submit", className: "email-login", children: d.continue })
          ] }) })
        ] }),
        E.value && /* @__PURE__ */ x.jsxs("div", { className: "user-already-loggued", children: [
          /* @__PURE__ */ x.jsxs("label", { htmlFor: "", children: [
            d.continueAs,
            " ",
            E.value.displayName,
            E.value.photoURL && /* @__PURE__ */ x.jsx("img", { src: E.value.photoURL, alt: "user image" }),
            /* @__PURE__ */ x.jsxs("span", { children: [
              d.logguedWith,
              " ",
              E.value.providerId
            ] })
          ] }),
          /* @__PURE__ */ x.jsxs("div", { className: "user-loggued-choice", children: [
            /* @__PURE__ */ x.jsx("button", { onClick: () => {
              var _;
              return y(((_ = E.value) == null ? void 0 : _.tokenId) ?? "");
            }, className: "choice-ok", children: "Ok" }),
            /* @__PURE__ */ x.jsx("button", { onClick: T, className: "choice-not", children: d.logOut })
          ] })
        ] }),
        ne.hasToS && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
          /* @__PURE__ */ x.jsxs("label", { className: "login-accept", children: [
            /* @__PURE__ */ x.jsx("input", { onChange: f, type: "checkbox", checked: i.value }),
            ne.hasToS.label
          ] }),
          a.value && /* @__PURE__ */ x.jsx("span", { autoFocus: !0, className: "notify error", children: ne.hasToS.errorLabel })
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
}, tf = tt({
  name: "UserSlice",
  initialState: Qi,
  reducers: {},
  extraReducers(t) {
    t.addMatcher(ot.endpoints.login.matchFulfilled, (e, r) => (e = {
      ...r.payload,
      isAuthenticated: !0
    }, e)).addMatcher(ot.endpoints.updateLogin.matchFulfilled, (e, r) => (e = {
      ...r.payload,
      isAuthenticated: !0
    }, e)).addMatcher(ot.endpoints.updateLogin.matchRejected, (e) => (e = Qi, e));
  }
}), { reducer: rf } = tf, nf = Ji({
  userReducer: rf,
  [ot.reducerPath]: ot.reducer
}), af = Ns({
  reducer: nf,
  middleware: (t) => t().concat(ot.middleware)
}), ff = ({ isOpen: t, message: e, authManager: r }) => kl() ? /* @__PURE__ */ x.jsx(Us, { store: af, children: /* @__PURE__ */ x.jsx(ef, { isOpen: t, authManager: r, message: e }) }) : /* @__PURE__ */ x.jsx("div", { children: "Error: Missing firebaseConfig in setConfig" });
export {
  ff as Auth,
  lf as setConfig,
  df as useAuth
};
