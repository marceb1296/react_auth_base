import Yi, { createContext as xs, useCallback as Jt, useMemo as we, useDebugValue as zn, useState as Qn, useEffect as ce, useRef as Se, useLayoutEffect as Ls, useContext as Xi } from "react";
import { useSignal as pe, batch as Us } from "@preact/signals-react";
import { nanoid as Fs, isPlainObject as ot, createAction as It, createAsyncThunk as Kn, SHOULD_AUTOBATCH as Yt, createSlice as tt, prepareAutoBatched as Tt, isAnyOf as Zi, isFulfilled as wt, isRejectedWithValue as hn, combineReducers as ea, createSelector as kt, isAllOf as xr, isPending as ta, isRejected as ra, createNextState as pn, isAsyncThunkAction as Gn, configureStore as js } from "@reduxjs/toolkit";
import { shallowEqual as cr, batch as qs, useDispatch as Bs, useSelector as $s, useStore as Vs, Provider as Hs } from "react-redux";
var Yr = { exports: {} }, Ot = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function Ws() {
  if (Jn)
    return Ot;
  Jn = 1;
  var t = Yi, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, o, c) {
    var d, p = {}, m = null, h = null;
    c !== void 0 && (m = "" + c), o.key !== void 0 && (m = "" + o.key), o.ref !== void 0 && (h = o.ref);
    for (d in o)
      n.call(o, d) && !a.hasOwnProperty(d) && (p[d] = o[d]);
    if (u && u.defaultProps)
      for (d in o = u.defaultProps, o)
        p[d] === void 0 && (p[d] = o[d]);
    return { $$typeof: e, type: u, key: m, ref: h, props: p, _owner: i.current };
  }
  return Ot.Fragment = r, Ot.jsx = s, Ot.jsxs = s, Ot;
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
var Yn;
function zs() {
  return Yn || (Yn = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Yi, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), I = Symbol.iterator, S = "@@iterator";
    function T(l) {
      if (l === null || typeof l != "object")
        return null;
      var C = I && l[I] || l[S];
      return typeof C == "function" ? C : null;
    }
    var P = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(l) {
      {
        for (var C = arguments.length, x = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
          x[j - 1] = arguments[j];
        E("error", l, x);
      }
    }
    function E(l, C, x) {
      {
        var j = P.ReactDebugCurrentFrame, Y = j.getStackAddendum();
        Y !== "" && (C += "%s", x = x.concat([Y]));
        var Z = x.map(function(Q) {
          return String(Q);
        });
        Z.unshift("Warning: " + C), Function.prototype.apply.call(console[l], console, Z);
      }
    }
    var g = !1, v = !1, f = !1, b = !1, y = !1, O;
    O = Symbol.for("react.module.reference");
    function _(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === n || l === a || y || l === i || l === c || l === d || b || l === h || g || v || f || typeof l == "object" && l !== null && (l.$$typeof === m || l.$$typeof === p || l.$$typeof === s || l.$$typeof === u || l.$$typeof === o || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === O || l.getModuleId !== void 0));
    }
    function R(l, C, x) {
      var j = l.displayName;
      if (j)
        return j;
      var Y = C.displayName || C.name || "";
      return Y !== "" ? x + "(" + Y + ")" : x;
    }
    function k(l) {
      return l.displayName || "Context";
    }
    function A(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case u:
            var C = l;
            return k(C) + ".Consumer";
          case s:
            var x = l;
            return k(x._context) + ".Provider";
          case o:
            return R(l, l.render, "ForwardRef");
          case p:
            var j = l.displayName || null;
            return j !== null ? j : A(l.type) || "Memo";
          case m: {
            var Y = l, Z = Y._payload, Q = Y._init;
            try {
              return A(Q(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, M = 0, F, L, U, W, $, V, K;
    function B() {
    }
    B.__reactDisabledLog = !0;
    function G() {
      {
        if (M === 0) {
          F = console.log, L = console.info, U = console.warn, W = console.error, $ = console.group, V = console.groupCollapsed, K = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: B,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        M++;
      }
    }
    function H() {
      {
        if (M--, M === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, l, {
              value: F
            }),
            info: D({}, l, {
              value: L
            }),
            warn: D({}, l, {
              value: U
            }),
            error: D({}, l, {
              value: W
            }),
            group: D({}, l, {
              value: $
            }),
            groupCollapsed: D({}, l, {
              value: V
            }),
            groupEnd: D({}, l, {
              value: K
            })
          });
        }
        M < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = P.ReactCurrentDispatcher, re;
    function fe(l, C, x) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (Y) {
            var j = Y.stack.trim().match(/\n( *(at )?)/);
            re = j && j[1] || "";
          }
        return `
` + re + l;
      }
    }
    var ye = !1, be;
    {
      var ge = typeof WeakMap == "function" ? WeakMap : Map;
      be = new ge();
    }
    function ue(l, C) {
      if (!l || ye)
        return "";
      {
        var x = be.get(l);
        if (x !== void 0)
          return x;
      }
      var j;
      ye = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = J.current, J.current = null, G();
      try {
        if (C) {
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
            } catch (Ce) {
              j = Ce;
            }
            Reflect.construct(l, [], Q);
          } else {
            try {
              Q.call();
            } catch (Ce) {
              j = Ce;
            }
            l.call(Q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ce) {
            j = Ce;
          }
          l();
        }
      } catch (Ce) {
        if (Ce && j && typeof Ce.stack == "string") {
          for (var z = Ce.stack.split(`
`), de = j.stack.split(`
`), se = z.length - 1, oe = de.length - 1; se >= 1 && oe >= 0 && z[se] !== de[oe]; )
            oe--;
          for (; se >= 1 && oe >= 0; se--, oe--)
            if (z[se] !== de[oe]) {
              if (se !== 1 || oe !== 1)
                do
                  if (se--, oe--, oe < 0 || z[se] !== de[oe]) {
                    var Ie = `
` + z[se].replace(" at new ", " at ");
                    return l.displayName && Ie.includes("<anonymous>") && (Ie = Ie.replace("<anonymous>", l.displayName)), typeof l == "function" && be.set(l, Ie), Ie;
                  }
                while (se >= 1 && oe >= 0);
              break;
            }
        }
      } finally {
        ye = !1, J.current = Z, H(), Error.prepareStackTrace = Y;
      }
      var dt = l ? l.displayName || l.name : "", Wn = dt ? fe(dt) : "";
      return typeof l == "function" && be.set(l, Wn), Wn;
    }
    function te(l, C, x) {
      return ue(l, !1);
    }
    function Ee(l) {
      var C = l.prototype;
      return !!(C && C.isReactComponent);
    }
    function Ze(l, C, x) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return ue(l, Ee(l));
      if (typeof l == "string")
        return fe(l);
      switch (l) {
        case c:
          return fe("Suspense");
        case d:
          return fe("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case o:
            return te(l.render);
          case p:
            return Ze(l.type, C, x);
          case m: {
            var j = l, Y = j._payload, Z = j._init;
            try {
              return Ze(Z(Y), C, x);
            } catch {
            }
          }
        }
      return "";
    }
    var He = Object.prototype.hasOwnProperty, et = {}, ct = P.ReactDebugCurrentFrame;
    function We(l) {
      if (l) {
        var C = l._owner, x = Ze(l.type, l._source, C ? C.type : null);
        ct.setExtraStackFrame(x);
      } else
        ct.setExtraStackFrame(null);
    }
    function Gt(l, C, x, j, Y) {
      {
        var Z = Function.call.bind(He);
        for (var Q in l)
          if (Z(l, Q)) {
            var z = void 0;
            try {
              if (typeof l[Q] != "function") {
                var de = Error((j || "React class") + ": " + x + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              z = l[Q](C, Q, j, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (se) {
              z = se;
            }
            z && !(z instanceof Error) && (We(Y), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", x, Q, typeof z), We(null)), z instanceof Error && !(z.message in et) && (et[z.message] = !0, We(Y), w("Failed %s type: %s", x, z.message), We(null));
          }
      }
    }
    var _e = Array.isArray;
    function he(l) {
      return _e(l);
    }
    function ms(l) {
      {
        var C = typeof Symbol == "function" && Symbol.toStringTag, x = C && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return x;
      }
    }
    function ys(l) {
      try {
        return xn(l), !1;
      } catch {
        return !0;
      }
    }
    function xn(l) {
      return "" + l;
    }
    function Ln(l) {
      if (ys(l))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ms(l)), xn(l);
    }
    var Et = P.ReactCurrentOwner, bs = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Un, Fn, Cr;
    Cr = {};
    function _s(l) {
      if (He.call(l, "ref")) {
        var C = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function Is(l) {
      if (He.call(l, "key")) {
        var C = Object.getOwnPropertyDescriptor(l, "key").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function ws(l, C) {
      if (typeof l.ref == "string" && Et.current && C && Et.current.stateNode !== C) {
        var x = A(Et.current.type);
        Cr[x] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(Et.current.type), l.ref), Cr[x] = !0);
      }
    }
    function Ss(l, C) {
      {
        var x = function() {
          Un || (Un = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        x.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function Es(l, C) {
      {
        var x = function() {
          Fn || (Fn = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        x.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Ts = function(l, C, x, j, Y, Z, Q) {
      var z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: l,
        key: C,
        ref: x,
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
    function Os(l, C, x, j, Y) {
      {
        var Z, Q = {}, z = null, de = null;
        x !== void 0 && (Ln(x), z = "" + x), Is(C) && (Ln(C.key), z = "" + C.key), _s(C) && (de = C.ref, ws(C, Y));
        for (Z in C)
          He.call(C, Z) && !bs.hasOwnProperty(Z) && (Q[Z] = C[Z]);
        if (l && l.defaultProps) {
          var se = l.defaultProps;
          for (Z in se)
            Q[Z] === void 0 && (Q[Z] = se[Z]);
        }
        if (z || de) {
          var oe = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          z && Ss(Q, oe), de && Es(Q, oe);
        }
        return Ts(l, z, de, Y, j, Et.current, Q);
      }
    }
    var Dr = P.ReactCurrentOwner, jn = P.ReactDebugCurrentFrame;
    function lt(l) {
      if (l) {
        var C = l._owner, x = Ze(l.type, l._source, C ? C.type : null);
        jn.setExtraStackFrame(x);
      } else
        jn.setExtraStackFrame(null);
    }
    var Nr;
    Nr = !1;
    function Mr(l) {
      return typeof l == "object" && l !== null && l.$$typeof === e;
    }
    function qn() {
      {
        if (Dr.current) {
          var l = A(Dr.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function Rs(l) {
      {
        if (l !== void 0) {
          var C = l.fileName.replace(/^.*[\\\/]/, ""), x = l.lineNumber;
          return `

Check your code at ` + C + ":" + x + ".";
        }
        return "";
      }
    }
    var Bn = {};
    function Ps(l) {
      {
        var C = qn();
        if (!C) {
          var x = typeof l == "string" ? l : l.displayName || l.name;
          x && (C = `

Check the top-level render call using <` + x + ">.");
        }
        return C;
      }
    }
    function $n(l, C) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var x = Ps(C);
        if (Bn[x])
          return;
        Bn[x] = !0;
        var j = "";
        l && l._owner && l._owner !== Dr.current && (j = " It was passed a child from " + A(l._owner.type) + "."), lt(l), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, j), lt(null);
      }
    }
    function Vn(l, C) {
      {
        if (typeof l != "object")
          return;
        if (he(l))
          for (var x = 0; x < l.length; x++) {
            var j = l[x];
            Mr(j) && $n(j, C);
          }
        else if (Mr(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var Y = T(l);
          if (typeof Y == "function" && Y !== l.entries)
            for (var Z = Y.call(l), Q; !(Q = Z.next()).done; )
              Mr(Q.value) && $n(Q.value, C);
        }
      }
    }
    function As(l) {
      {
        var C = l.type;
        if (C == null || typeof C == "string")
          return;
        var x;
        if (typeof C == "function")
          x = C.propTypes;
        else if (typeof C == "object" && (C.$$typeof === o || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        C.$$typeof === p))
          x = C.propTypes;
        else
          return;
        if (x) {
          var j = A(C);
          Gt(x, l.props, "prop", j, l);
        } else if (C.PropTypes !== void 0 && !Nr) {
          Nr = !0;
          var Y = A(C);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ks(l) {
      {
        for (var C = Object.keys(l.props), x = 0; x < C.length; x++) {
          var j = C[x];
          if (j !== "children" && j !== "key") {
            lt(l), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), lt(null);
            break;
          }
        }
        l.ref !== null && (lt(l), w("Invalid attribute `ref` supplied to `React.Fragment`."), lt(null));
      }
    }
    function Hn(l, C, x, j, Y, Z) {
      {
        var Q = _(l);
        if (!Q) {
          var z = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = Rs(Y);
          de ? z += de : z += qn();
          var se;
          l === null ? se = "null" : he(l) ? se = "array" : l !== void 0 && l.$$typeof === e ? (se = "<" + (A(l.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : se = typeof l, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", se, z);
        }
        var oe = Os(l, C, x, Y, Z);
        if (oe == null)
          return oe;
        if (Q) {
          var Ie = C.children;
          if (Ie !== void 0)
            if (j)
              if (he(Ie)) {
                for (var dt = 0; dt < Ie.length; dt++)
                  Vn(Ie[dt], l);
                Object.freeze && Object.freeze(Ie);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Vn(Ie, l);
        }
        return l === n ? ks(oe) : As(oe), oe;
      }
    }
    function Cs(l, C, x) {
      return Hn(l, C, x, !0);
    }
    function Ds(l, C, x) {
      return Hn(l, C, x, !1);
    }
    var Ns = Ds, Ms = Cs;
    Rt.Fragment = n, Rt.jsx = Ns, Rt.jsxs = Ms;
  }()), Rt;
}
process.env.NODE_ENV === "production" ? Yr.exports = Ws() : Yr.exports = zs();
var N = Yr.exports;
const vn = xs({});
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
const na = function(t) {
  const e = [];
  let r = 0;
  for (let n = 0; n < t.length; n++) {
    let i = t.charCodeAt(n);
    i < 128 ? e[r++] = i : i < 2048 ? (e[r++] = i >> 6 | 192, e[r++] = i & 63 | 128) : (i & 64512) === 55296 && n + 1 < t.length && (t.charCodeAt(n + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++n) & 1023), e[r++] = i >> 18 | 240, e[r++] = i >> 12 & 63 | 128, e[r++] = i >> 6 & 63 | 128, e[r++] = i & 63 | 128) : (e[r++] = i >> 12 | 224, e[r++] = i >> 6 & 63 | 128, e[r++] = i & 63 | 128);
  }
  return e;
}, Qs = function(t) {
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
}, ia = {
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
      const a = t[i], s = i + 1 < t.length, u = s ? t[i + 1] : 0, o = i + 2 < t.length, c = o ? t[i + 2] : 0, d = a >> 2, p = (a & 3) << 4 | u >> 4;
      let m = (u & 15) << 2 | c >> 6, h = c & 63;
      o || (h = 64, s || (m = 64)), n.push(r[d], r[p], r[m], r[h]);
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
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(na(t), e);
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
    return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : Qs(this.decodeStringToByteArray(t, e));
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
      const c = i < t.length ? r[t.charAt(i)] : 64;
      ++i;
      const p = i < t.length ? r[t.charAt(i)] : 64;
      if (++i, a == null || u == null || c == null || p == null)
        throw new Ks();
      const m = a << 2 | u >> 4;
      if (n.push(m), c !== 64) {
        const h = u << 4 & 240 | c >> 2;
        if (n.push(h), p !== 64) {
          const I = c << 6 & 192 | p;
          n.push(I);
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
class Ks extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const Gs = function(t) {
  const e = na(t);
  return ia.encodeByteArray(e, !0);
}, aa = function(t) {
  return Gs(t).replace(/\./g, "");
}, sa = function(t) {
  try {
    return ia.decodeString(t, !0);
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
function Js() {
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
const Ys = () => Js().__FIREBASE_DEFAULTS__, Xs = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const t = process.env.__FIREBASE_DEFAULTS__;
  if (t)
    return JSON.parse(t);
}, Zs = () => {
  if (typeof document > "u")
    return;
  let t;
  try {
    t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const e = t && sa(t[1]);
  return e && JSON.parse(e);
}, gn = () => {
  try {
    return Ys() || Xs() || Zs();
  } catch (t) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
    return;
  }
}, eo = (t) => {
  var e, r;
  return (r = (e = gn()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || r === void 0 ? void 0 : r[t];
}, oa = () => {
  var t;
  return (t = gn()) === null || t === void 0 ? void 0 : t.config;
}, ua = (t) => {
  var e;
  return (e = gn()) === null || e === void 0 ? void 0 : e[`_${t}`];
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
class to {
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
function le() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function ro() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le());
}
function no() {
  const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function io() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function ao() {
  const t = le();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function so() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function oo() {
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
const uo = "FirebaseError";
class Ye extends Error {
  constructor(e, r, n) {
    super(r), this.code = e, this.customData = n, this.name = uo, Object.setPrototypeOf(this, Ye.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Bt.prototype.create);
  }
}
class Bt {
  constructor(e, r, n) {
    this.service = e, this.serviceName = r, this.errors = n;
  }
  create(e, ...r) {
    const n = r[0] || {}, i = `${this.service}/${e}`, a = this.errors[e], s = a ? co(a, n) : "Error", u = `${this.serviceName}: ${s} (${i}).`;
    return new Ye(i, u, n);
  }
}
function co(t, e) {
  return t.replace(lo, (r, n) => {
    const i = e[n];
    return i != null ? String(i) : `<${n}?>`;
  });
}
const lo = /\{\$([^}]+)}/g;
function fo(t) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e))
      return !1;
  return !0;
}
function lr(t, e) {
  if (t === e)
    return !0;
  const r = Object.keys(t), n = Object.keys(e);
  for (const i of r) {
    if (!n.includes(i))
      return !1;
    const a = t[i], s = e[i];
    if (Xn(a) && Xn(s)) {
      if (!lr(a, s))
        return !1;
    } else if (a !== s)
      return !1;
  }
  for (const i of n)
    if (!r.includes(i))
      return !1;
  return !0;
}
function Xn(t) {
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
function $t(t) {
  const e = [];
  for (const [r, n] of Object.entries(t))
    Array.isArray(n) ? n.forEach((i) => {
      e.push(encodeURIComponent(r) + "=" + encodeURIComponent(i));
    }) : e.push(encodeURIComponent(r) + "=" + encodeURIComponent(n));
  return e.length ? "&" + e.join("&") : "";
}
function ho(t, e) {
  const r = new po(t, e);
  return r.subscribe.bind(r);
}
class po {
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
    vo(e, [
      "next",
      "error",
      "complete"
    ]) ? i = e : i = {
      next: e,
      error: r,
      complete: n
    }, i.next === void 0 && (i.next = Lr), i.error === void 0 && (i.error = Lr), i.complete === void 0 && (i.complete = Lr);
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
function vo(t, e) {
  if (typeof t != "object" || t === null)
    return !1;
  for (const r of e)
    if (r in t && typeof t[r] == "function")
      return !0;
  return !1;
}
function Lr() {
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
class go {
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
      const n = new to();
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
      if (yo(e))
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
      instanceIdentifier: mo(e),
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
function mo(t) {
  return t === rt ? void 0 : t;
}
function yo(t) {
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
class bo {
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
    const r = new go(e, this);
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
const _o = {
  debug: ee.DEBUG,
  verbose: ee.VERBOSE,
  info: ee.INFO,
  warn: ee.WARN,
  error: ee.ERROR,
  silent: ee.SILENT
}, Io = ee.INFO, wo = {
  [ee.DEBUG]: "log",
  [ee.VERBOSE]: "log",
  [ee.INFO]: "info",
  [ee.WARN]: "warn",
  [ee.ERROR]: "error"
}, So = (t, e, ...r) => {
  if (e < t.logLevel)
    return;
  const n = (/* @__PURE__ */ new Date()).toISOString(), i = wo[e];
  if (i)
    console[i](`[${n}]  ${t.name}:`, ...r);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class ca {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = Io, this._logHandler = So, this._userLogHandler = null;
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
    this._logLevel = typeof e == "string" ? _o[e] : e;
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
const Eo = (t, e) => e.some((r) => t instanceof r);
let Zn, ei;
function To() {
  return Zn || (Zn = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Oo() {
  return ei || (ei = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const la = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap();
function Ro(t) {
  const e = new Promise((r, n) => {
    const i = () => {
      t.removeEventListener("success", a), t.removeEventListener("error", s);
    }, a = () => {
      r(Ke(t.result)), i();
    }, s = () => {
      n(t.error), i();
    };
    t.addEventListener("success", a), t.addEventListener("error", s);
  });
  return e.then((r) => {
    r instanceof IDBCursor && la.set(r, t);
  }).catch(() => {
  }), mn.set(e, t), e;
}
function Po(t) {
  if (Xr.has(t))
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
  Xr.set(t, e);
}
let Zr = {
  get(t, e, r) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return Xr.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || da.get(t);
      if (e === "store")
        return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0]);
    }
    return Ke(t[e]);
  },
  set(t, e, r) {
    return t[e] = r, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function Ao(t) {
  Zr = t(Zr);
}
function ko(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...r) {
    const n = t.call(Fr(this), e, ...r);
    return da.set(n, e.sort ? e.sort() : [e]), Ke(n);
  } : Oo().includes(t) ? function(...e) {
    return t.apply(Fr(this), e), Ke(la.get(this));
  } : function(...e) {
    return Ke(t.apply(Fr(this), e));
  };
}
function Co(t) {
  return typeof t == "function" ? ko(t) : (t instanceof IDBTransaction && Po(t), Eo(t, To()) ? new Proxy(t, Zr) : t);
}
function Ke(t) {
  if (t instanceof IDBRequest)
    return Ro(t);
  if (Ur.has(t))
    return Ur.get(t);
  const e = Co(t);
  return e !== t && (Ur.set(t, e), mn.set(e, t)), e;
}
const Fr = (t) => mn.get(t);
function Do(t, e, { blocked: r, upgrade: n, blocking: i, terminated: a } = {}) {
  const s = indexedDB.open(t, e), u = Ke(s);
  return n && s.addEventListener("upgradeneeded", (o) => {
    n(Ke(s.result), o.oldVersion, o.newVersion, Ke(s.transaction), o);
  }), r && s.addEventListener("blocked", (o) => r(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    o.oldVersion,
    o.newVersion,
    o
  )), u.then((o) => {
    a && o.addEventListener("close", () => a()), i && o.addEventListener("versionchange", (c) => i(c.oldVersion, c.newVersion, c));
  }).catch(() => {
  }), u;
}
const No = ["get", "getKey", "getAll", "getAllKeys", "count"], Mo = ["put", "add", "delete", "clear"], jr = /* @__PURE__ */ new Map();
function ti(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (jr.get(e))
    return jr.get(e);
  const r = e.replace(/FromIndex$/, ""), n = e !== r, i = Mo.includes(r);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(r in (n ? IDBIndex : IDBObjectStore).prototype) || !(i || No.includes(r))
  )
    return;
  const a = async function(s, ...u) {
    const o = this.transaction(s, i ? "readwrite" : "readonly");
    let c = o.store;
    return n && (c = c.index(u.shift())), (await Promise.all([
      c[r](...u),
      i && o.done
    ]))[0];
  };
  return jr.set(e, a), a;
}
Ao((t) => ({
  ...t,
  get: (e, r, n) => ti(e, r) || t.get(e, r, n),
  has: (e, r) => !!ti(e, r) || t.has(e, r)
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
class xo {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((r) => {
      if (Lo(r)) {
        const n = r.getImmediate();
        return `${n.library}/${n.version}`;
      } else
        return null;
    }).filter((r) => r).join(" ");
  }
}
function Lo(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const en = "@firebase/app", ri = "0.9.19";
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
const ut = new ca("@firebase/app"), Uo = "@firebase/app-compat", Fo = "@firebase/analytics-compat", jo = "@firebase/analytics", qo = "@firebase/app-check-compat", Bo = "@firebase/app-check", $o = "@firebase/auth", Vo = "@firebase/auth-compat", Ho = "@firebase/database", Wo = "@firebase/database-compat", zo = "@firebase/functions", Qo = "@firebase/functions-compat", Ko = "@firebase/installations", Go = "@firebase/installations-compat", Jo = "@firebase/messaging", Yo = "@firebase/messaging-compat", Xo = "@firebase/performance", Zo = "@firebase/performance-compat", eu = "@firebase/remote-config", tu = "@firebase/remote-config-compat", ru = "@firebase/storage", nu = "@firebase/storage-compat", iu = "@firebase/firestore", au = "@firebase/firestore-compat", su = "firebase", ou = "10.4.0";
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
const tn = "[DEFAULT]", uu = {
  [en]: "fire-core",
  [Uo]: "fire-core-compat",
  [jo]: "fire-analytics",
  [Fo]: "fire-analytics-compat",
  [Bo]: "fire-app-check",
  [qo]: "fire-app-check-compat",
  [$o]: "fire-auth",
  [Vo]: "fire-auth-compat",
  [Ho]: "fire-rtdb",
  [Wo]: "fire-rtdb-compat",
  [zo]: "fire-fn",
  [Qo]: "fire-fn-compat",
  [Ko]: "fire-iid",
  [Go]: "fire-iid-compat",
  [Jo]: "fire-fcm",
  [Yo]: "fire-fcm-compat",
  [Xo]: "fire-perf",
  [Zo]: "fire-perf-compat",
  [eu]: "fire-rc",
  [tu]: "fire-rc-compat",
  [ru]: "fire-gcs",
  [nu]: "fire-gcs-compat",
  [iu]: "fire-fst",
  [au]: "fire-fst-compat",
  "fire-js": "fire-js",
  [su]: "fire-js-all"
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
const dr = /* @__PURE__ */ new Map(), rn = /* @__PURE__ */ new Map();
function cu(t, e) {
  try {
    t.container.addComponent(e);
  } catch (r) {
    ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, r);
  }
}
function Mt(t) {
  const e = t.name;
  if (rn.has(e))
    return ut.debug(`There were multiple attempts to register component ${e}.`), !1;
  rn.set(e, t);
  for (const r of dr.values())
    cu(r, t);
  return !0;
}
function fa(t, e) {
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
const lu = {
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
}, Ge = new Bt("app", "Firebase", lu);
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
class du {
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
      throw Ge.create("app-deleted", { appName: this._name });
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
const Vt = ou;
function ha(t, e = {}) {
  let r = t;
  typeof e != "object" && (e = { name: e });
  const n = Object.assign({ name: tn, automaticDataCollectionEnabled: !1 }, e), i = n.name;
  if (typeof i != "string" || !i)
    throw Ge.create("bad-app-name", {
      appName: String(i)
    });
  if (r || (r = oa()), !r)
    throw Ge.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const a = dr.get(i);
  if (a) {
    if (lr(r, a.options) && lr(n, a.config))
      return a;
    throw Ge.create("duplicate-app", { appName: i });
  }
  const s = new bo(i);
  for (const o of rn.values())
    s.addComponent(o);
  const u = new du(r, n, s);
  return dr.set(i, u), u;
}
function fu(t = tn) {
  const e = dr.get(t);
  if (!e && t === tn && oa())
    return ha();
  if (!e)
    throw Ge.create("no-app", { appName: t });
  return e;
}
function pt(t, e, r) {
  var n;
  let i = (n = uu[t]) !== null && n !== void 0 ? n : t;
  r && (i += `-${r}`);
  const a = i.match(/\s|\//), s = e.match(/\s|\//);
  if (a || s) {
    const u = [
      `Unable to register library "${i}" with version "${e}":`
    ];
    a && u.push(`library name "${i}" contains illegal characters (whitespace or "/")`), a && s && u.push("and"), s && u.push(`version name "${e}" contains illegal characters (whitespace or "/")`), ut.warn(u.join(" "));
    return;
  }
  Mt(new mt(
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
const hu = "firebase-heartbeat-database", pu = 1, xt = "firebase-heartbeat-store";
let qr = null;
function pa() {
  return qr || (qr = Do(hu, pu, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          t.createObjectStore(xt);
      }
    }
  }).catch((t) => {
    throw Ge.create("idb-open", {
      originalErrorMessage: t.message
    });
  })), qr;
}
async function vu(t) {
  try {
    return await (await pa()).transaction(xt).objectStore(xt).get(va(t));
  } catch (e) {
    if (e instanceof Ye)
      ut.warn(e.message);
    else {
      const r = Ge.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message
      });
      ut.warn(r.message);
    }
  }
}
async function ni(t, e) {
  try {
    const n = (await pa()).transaction(xt, "readwrite");
    await n.objectStore(xt).put(e, va(t)), await n.done;
  } catch (r) {
    if (r instanceof Ye)
      ut.warn(r.message);
    else {
      const n = Ge.create("idb-set", {
        originalErrorMessage: r == null ? void 0 : r.message
      });
      ut.warn(n.message);
    }
  }
}
function va(t) {
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
const gu = 1024, mu = 30 * 24 * 60 * 60 * 1e3;
class yu {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const r = this.container.getProvider("app").getImmediate();
    this._storage = new _u(r), this._heartbeatsCachePromise = this._storage.read().then((n) => (this._heartbeatsCache = n, n));
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    const r = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), n = ii();
    if (this._heartbeatsCache === null && (this._heartbeatsCache = await this._heartbeatsCachePromise), !(this._heartbeatsCache.lastSentHeartbeatDate === n || this._heartbeatsCache.heartbeats.some((i) => i.date === n)))
      return this._heartbeatsCache.heartbeats.push({ date: n, agent: r }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((i) => {
        const a = new Date(i.date).valueOf();
        return Date.now() - a <= mu;
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
    const e = ii(), { heartbeatsToSend: r, unsentEntries: n } = bu(this._heartbeatsCache.heartbeats), i = aa(JSON.stringify({ version: 2, heartbeats: r }));
    return this._heartbeatsCache.lastSentHeartbeatDate = e, n.length > 0 ? (this._heartbeatsCache.heartbeats = n, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i;
  }
}
function ii() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function bu(t, e = gu) {
  const r = [];
  let n = t.slice();
  for (const i of t) {
    const a = r.find((s) => s.agent === i.agent);
    if (a) {
      if (a.dates.push(i.date), ai(r) > e) {
        a.dates.pop();
        break;
      }
    } else if (r.push({
      agent: i.agent,
      dates: [i.date]
    }), ai(r) > e) {
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
class _u {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return so() ? oo().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    return await this._canUseIndexedDBPromise ? await vu(this.app) || { heartbeats: [] } : { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    var r;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return ni(this.app, {
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
      return ni(this.app, {
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
function ai(t) {
  return aa(
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
function Iu(t) {
  Mt(new mt(
    "platform-logger",
    (e) => new xo(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), Mt(new mt(
    "heartbeat",
    (e) => new yu(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), pt(en, ri, t), pt(en, ri, "esm2017"), pt("fire-js", "");
}
Iu("");
function yn(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function ga() {
  return {
    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const wu = ga, ma = new Bt("auth", "Firebase", ga());
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
const fr = new ca("@firebase/auth");
function Su(t, ...e) {
  fr.logLevel <= ee.WARN && fr.warn(`Auth (${Vt}): ${t}`, ...e);
}
function nr(t, ...e) {
  fr.logLevel <= ee.ERROR && fr.error(`Auth (${Vt}): ${t}`, ...e);
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
  throw bn(t, ...e);
}
function Oe(t, ...e) {
  return bn(t, ...e);
}
function ya(t, e, r) {
  const n = Object.assign(Object.assign({}, wu()), { [e]: r });
  return new Bt("auth", "Firebase", n).create(e, {
    appName: t.name
  });
}
function Eu(t, e, r) {
  const n = r;
  if (!(e instanceof n))
    throw n.name !== e.constructor.name && Ae(
      t,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), ya(t, "argument-error", `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
}
function bn(t, ...e) {
  if (typeof t != "string") {
    const r = e[0], n = [...e.slice(1)];
    return n[0] && (n[0].appName = t.name), t._errorFactory.create(r, ...n);
  }
  return ma.create(t, ...e);
}
function q(t, e, ...r) {
  if (!t)
    throw bn(e, ...r);
}
function Ue(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw nr(e), new Error(e);
}
function je(t, e) {
  t || Ue(e);
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
function nn() {
  var t;
  return typeof self < "u" && ((t = self.location) === null || t === void 0 ? void 0 : t.href) || "";
}
function Tu() {
  return si() === "http:" || si() === "https:";
}
function si() {
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
  (Tu() || no() || "connection" in navigator) ? navigator.onLine : !0;
}
function Ru() {
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
    this.shortDelay = e, this.longDelay = r, je(r > e, "Short delay should be less than long delay!"), this.isMobile = ro() || io();
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
function _n(t, e) {
  je(t.emulator, "Emulator should always be set here");
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
class ba {
  static initialize(e, r, n) {
    this.fetchImpl = e, r && (this.headersImpl = r), n && (this.responseImpl = n);
  }
  static fetch() {
    if (this.fetchImpl)
      return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self)
      return self.fetch;
    Ue("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl)
      return this.headersImpl;
    if (typeof self < "u" && "Headers" in self)
      return self.Headers;
    Ue("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl)
      return this.responseImpl;
    if (typeof self < "u" && "Response" in self)
      return self.Response;
    Ue("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
const Pu = {
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
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
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
const Au = new Ht(3e4, 6e4);
function _a(t, e) {
  return t.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId }) : e;
}
async function Wt(t, e, r, n, i = {}) {
  return Ia(t, i, async () => {
    let a = {}, s = {};
    n && (e === "GET" ? s = n : a = {
      body: JSON.stringify(n)
    });
    const u = $t(Object.assign({ key: t.config.apiKey }, s)).slice(1), o = await t._getAdditionalHeaders();
    return o[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/json", t.languageCode && (o[
      "X-Firebase-Locale"
      /* HttpHeader.X_FIREBASE_LOCALE */
    ] = t.languageCode), ba.fetch()(wa(t, t.config.apiHost, r, u), Object.assign({
      method: e,
      headers: o,
      referrerPolicy: "no-referrer"
    }, a));
  });
}
async function Ia(t, e, r) {
  t._canInitEmulator = !1;
  const n = Object.assign(Object.assign({}, Pu), e);
  try {
    const i = new Cu(t), a = await Promise.race([
      r(),
      i.promise
    ]);
    i.clearNetworkTimeout();
    const s = await a.json();
    if ("needConfirmation" in s)
      throw Xt(t, "account-exists-with-different-credential", s);
    if (a.ok && !("errorMessage" in s))
      return s;
    {
      const u = a.ok ? s.errorMessage : s.error.message, [o, c] = u.split(" : ");
      if (o === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Xt(t, "credential-already-in-use", s);
      if (o === "EMAIL_EXISTS")
        throw Xt(t, "email-already-in-use", s);
      if (o === "USER_DISABLED")
        throw Xt(t, "user-disabled", s);
      const d = n[o] || o.toLowerCase().replace(/[_\s]+/g, "-");
      if (c)
        throw ya(t, d, c);
      Ae(t, d);
    }
  } catch (i) {
    if (i instanceof Ye)
      throw i;
    Ae(t, "network-request-failed", { message: String(i) });
  }
}
async function ku(t, e, r, n, i = {}) {
  const a = await Wt(t, e, r, n, i);
  return "mfaPendingCredential" in a && Ae(t, "multi-factor-auth-required", {
    _serverResponse: a
  }), a;
}
function wa(t, e, r, n) {
  const i = `${e}${r}?${n}`;
  return t.config.emulator ? _n(t.config, i) : `${t.config.apiScheme}://${i}`;
}
class Cu {
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((r, n) => {
      this.timer = setTimeout(() => n(Oe(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), Au.get());
    });
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function Xt(t, e, r) {
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
async function Du(t, e) {
  return Wt(t, "POST", "/v1/accounts:delete", e);
}
async function Nu(t, e) {
  return Wt(t, "POST", "/v1/accounts:lookup", e);
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
async function Mu(t, e = !1) {
  const r = Xe(t), n = await r.getIdToken(e), i = In(n);
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
    authTime: Ct(Br(i.auth_time)),
    issuedAtTime: Ct(Br(i.iat)),
    expirationTime: Ct(Br(i.exp)),
    signInProvider: s || null,
    signInSecondFactor: (a == null ? void 0 : a.sign_in_second_factor) || null
  };
}
function Br(t) {
  return Number(t) * 1e3;
}
function In(t) {
  const [e, r, n] = t.split(".");
  if (e === void 0 || r === void 0 || n === void 0)
    return nr("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = sa(r);
    return i ? JSON.parse(i) : (nr("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return nr("Caught error parsing JWT payload as JSON", i == null ? void 0 : i.toString()), null;
  }
}
function xu(t) {
  const e = In(t);
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
async function Lt(t, e, r = !1) {
  if (r)
    return e;
  try {
    return await e;
  } catch (n) {
    throw n instanceof Ye && Lu(n) && t.auth.currentUser === t && await t.auth.signOut(), n;
  }
}
function Lu({ code: t }) {
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
async function hr(t) {
  var e;
  const r = t.auth, n = await t.getIdToken(), i = await Lt(t, Nu(r, { idToken: n }));
  q(
    i == null ? void 0 : i.users.length,
    r,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const a = i.users[0];
  t._notifyReloadListener(a);
  const s = !((e = a.providerUserInfo) === null || e === void 0) && e.length ? qu(a.providerUserInfo) : [], u = ju(t.providerData, s), o = t.isAnonymous, c = !(t.email && a.passwordHash) && !(u != null && u.length), d = o ? c : !1, p = {
    uid: a.localId,
    displayName: a.displayName || null,
    photoURL: a.photoUrl || null,
    email: a.email || null,
    emailVerified: a.emailVerified || !1,
    phoneNumber: a.phoneNumber || null,
    tenantId: a.tenantId || null,
    providerData: u,
    metadata: new Sa(a.createdAt, a.lastLoginAt),
    isAnonymous: d
  };
  Object.assign(t, p);
}
async function Fu(t) {
  const e = Xe(t);
  await hr(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function ju(t, e) {
  return [...t.filter((n) => !e.some((i) => i.providerId === n.providerId)), ...e];
}
function qu(t) {
  return t.map((e) => {
    var { providerId: r } = e, n = yn(e, ["providerId"]);
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
async function Bu(t, e) {
  const r = await Ia(t, {}, async () => {
    const n = $t({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: i, apiKey: a } = t.config, s = wa(t, i, "/v1/token", `key=${a}`), u = await t._getAdditionalHeaders();
    return u[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded", ba.fetch()(s, {
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
class Ut {
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
    const r = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : xu(e.idToken);
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
    const { accessToken: n, refreshToken: i, expiresIn: a } = await Bu(e, r);
    this.updateTokensAndExpiration(n, i, Number(a));
  }
  updateTokensAndExpiration(e, r, n) {
    this.refreshToken = r || null, this.accessToken = e || null, this.expirationTime = Date.now() + n * 1e3;
  }
  static fromJSON(e, r) {
    const { refreshToken: n, accessToken: i, expirationTime: a } = r, s = new Ut();
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
    return Object.assign(new Ut(), this.toJSON());
  }
  _performRefresh() {
    return Ue("not implemented");
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
function ze(t, e) {
  q(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class at {
  constructor(e) {
    var { uid: r, auth: n, stsTokenManager: i } = e, a = yn(e, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase", this.proactiveRefresh = new Uu(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = r, this.auth = n, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = a.displayName || null, this.email = a.email || null, this.emailVerified = a.emailVerified || !1, this.phoneNumber = a.phoneNumber || null, this.photoURL = a.photoURL || null, this.isAnonymous = a.isAnonymous || !1, this.tenantId = a.tenantId || null, this.providerData = a.providerData ? [...a.providerData] : [], this.metadata = new Sa(a.createdAt || void 0, a.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const r = await Lt(this, this.stsTokenManager.getToken(this.auth, e));
    return q(
      r,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== r && (this.accessToken = r, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), r;
  }
  getIdTokenResult(e) {
    return Mu(this, e);
  }
  reload() {
    return Fu(this);
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
    const r = new at(Object.assign(Object.assign({}, this), { auth: e, stsTokenManager: this.stsTokenManager._clone() }));
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
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), n = !0), r && await hr(this), await this.auth._persistUserIfCurrent(this), n && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const e = await this.getIdToken();
    return await Lt(this, Du(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
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
    var n, i, a, s, u, o, c, d;
    const p = (n = r.displayName) !== null && n !== void 0 ? n : void 0, m = (i = r.email) !== null && i !== void 0 ? i : void 0, h = (a = r.phoneNumber) !== null && a !== void 0 ? a : void 0, I = (s = r.photoURL) !== null && s !== void 0 ? s : void 0, S = (u = r.tenantId) !== null && u !== void 0 ? u : void 0, T = (o = r._redirectEventId) !== null && o !== void 0 ? o : void 0, P = (c = r.createdAt) !== null && c !== void 0 ? c : void 0, w = (d = r.lastLoginAt) !== null && d !== void 0 ? d : void 0, { uid: E, emailVerified: g, isAnonymous: v, providerData: f, stsTokenManager: b } = r;
    q(
      E && b,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const y = Ut.fromJSON(this.name, b);
    q(
      typeof E == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), ze(p, e.name), ze(m, e.name), q(
      typeof g == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), q(
      typeof v == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), ze(h, e.name), ze(I, e.name), ze(S, e.name), ze(T, e.name), ze(P, e.name), ze(w, e.name);
    const O = new at({
      uid: E,
      auth: e,
      email: m,
      emailVerified: g,
      displayName: p,
      isAnonymous: v,
      photoURL: I,
      phoneNumber: h,
      tenantId: S,
      stsTokenManager: y,
      createdAt: P,
      lastLoginAt: w
    });
    return f && Array.isArray(f) && (O.providerData = f.map((_) => Object.assign({}, _))), T && (O._redirectEventId = T), O;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, r, n = !1) {
    const i = new Ut();
    i.updateFromServerResponse(r);
    const a = new at({
      uid: r.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: n
    });
    return await hr(a), a;
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
const oi = /* @__PURE__ */ new Map();
function Fe(t) {
  je(t instanceof Function, "Expected a class definition");
  let e = oi.get(t);
  return e ? (je(e instanceof t, "Instance stored in cache mismatched with class"), e) : (e = new t(), oi.set(t, e), e);
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
class Ea {
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
Ea.type = "NONE";
const ui = Ea;
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
function ir(t, e, r) {
  return `firebase:${t}:${e}:${r}`;
}
class vt {
  constructor(e, r, n) {
    this.persistence = e, this.auth = r, this.userKey = n;
    const { config: i, name: a } = this.auth;
    this.fullUserKey = ir(this.userKey, i.apiKey, a), this.fullPersistenceKey = ir("persistence", i.apiKey, a), this.boundEventHandler = r._onStorageEvent.bind(r), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? at._fromJSON(this.auth, e) : null;
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
      return new vt(Fe(ui), e, n);
    const i = (await Promise.all(r.map(async (c) => {
      if (await c._isAvailable())
        return c;
    }))).filter((c) => c);
    let a = i[0] || Fe(ui);
    const s = ir(n, e.config.apiKey, e.name);
    let u = null;
    for (const c of r)
      try {
        const d = await c._get(s);
        if (d) {
          const p = at._fromJSON(e, d);
          c !== a && (u = p), a = c;
          break;
        }
      } catch {
      }
    const o = i.filter((c) => c._shouldAllowMigration);
    return !a._shouldAllowMigration || !o.length ? new vt(a, e, n) : (a = o[0], u && await a._set(s, u.toJSON()), await Promise.all(r.map(async (c) => {
      if (c !== a)
        try {
          await c._remove(s);
        } catch {
        }
    })), new vt(a, e, n));
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
function ci(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (Ra(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (Ta(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (Aa(e))
    return "Blackberry";
  if (ka(e))
    return "Webos";
  if (wn(e))
    return "Safari";
  if ((e.includes("chrome/") || Oa(e)) && !e.includes("edge/"))
    return "Chrome";
  if (Pa(e))
    return "Android";
  {
    const r = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, n = t.match(r);
    if ((n == null ? void 0 : n.length) === 2)
      return n[1];
  }
  return "Other";
}
function Ta(t = le()) {
  return /firefox\//i.test(t);
}
function wn(t = le()) {
  const e = t.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function Oa(t = le()) {
  return /crios\//i.test(t);
}
function Ra(t = le()) {
  return /iemobile/i.test(t);
}
function Pa(t = le()) {
  return /android/i.test(t);
}
function Aa(t = le()) {
  return /blackberry/i.test(t);
}
function ka(t = le()) {
  return /webos/i.test(t);
}
function Or(t = le()) {
  return /iphone|ipad|ipod/i.test(t) || /macintosh/i.test(t) && /mobile/i.test(t);
}
function $u(t = le()) {
  var e;
  return Or(t) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function Vu() {
  return ao() && document.documentMode === 10;
}
function Ca(t = le()) {
  return Or(t) || Pa(t) || ka(t) || Aa(t) || /windows phone/i.test(t) || Ra(t);
}
function Hu() {
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
function Da(t, e = []) {
  let r;
  switch (t) {
    case "Browser":
      r = ci(le());
      break;
    case "Worker":
      r = `${ci(le())}-${t}`;
      break;
    default:
      r = t;
  }
  const n = e.length ? e.join(",") : "FirebaseCore-web";
  return `${r}/JsCore/${Vt}/${n}`;
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
class Wu {
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
 * Copyright 2023 Google LLC
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
async function zu(t, e = {}) {
  return Wt(t, "GET", "/v2/passwordPolicy", _a(t, e));
}
/**
 * @license
 * Copyright 2023 Google LLC
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
const Qu = 6;
class Ku {
  constructor(e) {
    var r, n, i, a;
    const s = e.customStrengthOptions;
    this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = (r = s.minPasswordLength) !== null && r !== void 0 ? r : Qu, s.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = s.maxPasswordLength), s.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = s.containsLowercaseCharacter), s.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = s.containsUppercaseCharacter), s.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = s.containsNumericCharacter), s.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = s.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = (i = (n = e.allowedNonAlphanumericCharacters) === null || n === void 0 ? void 0 : n.join("")) !== null && i !== void 0 ? i : "", this.forceUpgradeOnSignin = (a = e.forceUpgradeOnSignin) !== null && a !== void 0 ? a : !1, this.schemaVersion = e.schemaVersion;
  }
  validatePassword(e) {
    var r, n, i, a, s, u;
    const o = {
      isValid: !0,
      passwordPolicy: this
    };
    return this.validatePasswordLengthOptions(e, o), this.validatePasswordCharacterOptions(e, o), o.isValid && (o.isValid = (r = o.meetsMinPasswordLength) !== null && r !== void 0 ? r : !0), o.isValid && (o.isValid = (n = o.meetsMaxPasswordLength) !== null && n !== void 0 ? n : !0), o.isValid && (o.isValid = (i = o.containsLowercaseLetter) !== null && i !== void 0 ? i : !0), o.isValid && (o.isValid = (a = o.containsUppercaseLetter) !== null && a !== void 0 ? a : !0), o.isValid && (o.isValid = (s = o.containsNumericCharacter) !== null && s !== void 0 ? s : !0), o.isValid && (o.isValid = (u = o.containsNonAlphanumericCharacter) !== null && u !== void 0 ? u : !0), o;
  }
  /**
   * Validates that the password meets the length options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordLengthOptions(e, r) {
    const n = this.customStrengthOptions.minPasswordLength, i = this.customStrengthOptions.maxPasswordLength;
    n && (r.meetsMinPasswordLength = e.length >= n), i && (r.meetsMaxPasswordLength = e.length <= i);
  }
  /**
   * Validates that the password meets the character options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordCharacterOptions(e, r) {
    this.updatePasswordCharacterOptionsStatuses(
      r,
      /* containsLowercaseCharacter= */
      !1,
      /* containsUppercaseCharacter= */
      !1,
      /* containsNumericCharacter= */
      !1,
      /* containsNonAlphanumericCharacter= */
      !1
    );
    let n;
    for (let i = 0; i < e.length; i++)
      n = e.charAt(i), this.updatePasswordCharacterOptionsStatuses(
        r,
        /* containsLowercaseCharacter= */
        n >= "a" && n <= "z",
        /* containsUppercaseCharacter= */
        n >= "A" && n <= "Z",
        /* containsNumericCharacter= */
        n >= "0" && n <= "9",
        /* containsNonAlphanumericCharacter= */
        this.allowedNonAlphanumericCharacters.includes(n)
      );
  }
  /**
   * Updates the running validation status with the statuses for the character options.
   * Expected to be called each time a character is processed to update each option status
   * based on the current character.
   *
   * @param status Validation status.
   * @param containsLowercaseCharacter Whether the character is a lowercase letter.
   * @param containsUppercaseCharacter Whether the character is an uppercase letter.
   * @param containsNumericCharacter Whether the character is a numeric character.
   * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
   */
  updatePasswordCharacterOptionsStatuses(e, r, n, i, a) {
    this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = r)), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = n)), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = i)), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = a));
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
class Gu {
  constructor(e, r, n, i) {
    this.app = e, this.heartbeatServiceProvider = r, this.appCheckServiceProvider = n, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new li(this), this.idTokenSubscription = new li(this), this.beforeStateQueue = new Wu(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = ma, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion;
  }
  _initializeWithPersistence(e, r) {
    return r && (this._popupRedirectResolver = Fe(r)), this._initializationPromise = this.queue(async () => {
      var n, i;
      if (!this._deleted && (this.persistenceManager = await vt.create(this, e), !this._deleted)) {
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
      await hr(e);
    } catch (r) {
      if ((r == null ? void 0 : r.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = Ru();
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
      await this.assertedPersistence.setPersistence(Fe(e));
    });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(e) {
    this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
    const r = this._getPasswordPolicyInternal();
    return r.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : r.validatePassword(e);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const e = await zu(this), r = new Ku(e);
    this.tenantId === null ? this._projectPasswordPolicy = r : this._tenantPasswordPolicies[this.tenantId] = r;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new Bt("auth", "Firebase", e());
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
  authStateReady() {
    return new Promise((e, r) => {
      if (this.currentUser)
        e();
      else {
        const n = this.onAuthStateChanged(() => {
          n(), e();
        }, r);
      }
    });
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
      const r = e && Fe(e) || this._popupRedirectResolver;
      q(
        r,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await vt.create(
        this,
        [Fe(r._redirectPersistence)],
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
    const a = typeof r == "function" ? r : r.next.bind(r);
    let s = !1;
    const u = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    if (q(
      u,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), u.then(() => {
      s || a(this.currentUser);
    }), typeof r == "function") {
      const o = e.addObserver(r, n, i);
      return () => {
        s = !0, o();
      };
    } else {
      const o = e.addObserver(r);
      return () => {
        s = !0, o();
      };
    }
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
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = Da(this.config.clientPlatform, this._getFrameworks()));
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
    return r != null && r.error && Su(`Error while retrieving App Check token: ${r.error}`), r == null ? void 0 : r.token;
  }
}
function zt(t) {
  return Xe(t);
}
class li {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = ho((r) => this.observer = r);
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
function Ju() {
  var t, e;
  return (e = (t = document.getElementsByTagName("head")) === null || t === void 0 ? void 0 : t[0]) !== null && e !== void 0 ? e : document;
}
function Yu(t) {
  return new Promise((e, r) => {
    const n = document.createElement("script");
    n.setAttribute("src", t), n.onload = e, n.onerror = (i) => {
      const a = Oe(
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      a.customData = i, r(a);
    }, n.type = "text/javascript", n.charset = "UTF-8", Ju().appendChild(n);
  });
}
function Xu(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
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
function Zu(t, e) {
  const r = fa(t, "auth");
  if (r.isInitialized()) {
    const i = r.getImmediate(), a = r.getOptions();
    if (lr(a, e ?? {}))
      return i;
    Ae(
      i,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return r.initialize({ options: e });
}
function ec(t, e) {
  const r = (e == null ? void 0 : e.persistence) || [], n = (Array.isArray(r) ? r : [r]).map(Fe);
  e != null && e.errorMap && t._updateErrorMap(e.errorMap), t._initializeWithPersistence(n, e == null ? void 0 : e.popupRedirectResolver);
}
function tc(t, e, r) {
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
  const i = !!(r != null && r.disableWarnings), a = Na(e), { host: s, port: u } = rc(e), o = u === null ? "" : `:${u}`;
  n.config.emulator = { url: `${a}//${s}${o}/` }, n.settings.appVerificationDisabledForTesting = !0, n.emulatorConfig = Object.freeze({
    host: s,
    port: u,
    protocol: a.replace(":", ""),
    options: Object.freeze({ disableWarnings: i })
  }), i || nc();
}
function Na(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function rc(t) {
  const e = Na(t), r = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!r)
    return { host: "", port: null };
  const n = r[2].split("@").pop() || "", i = /^(\[[^\]]+\])(:|$)/.exec(n);
  if (i) {
    const a = i[1];
    return { host: a, port: di(n.substr(a.length + 1)) };
  } else {
    const [a, s] = n.split(":");
    return { host: a, port: di(s) };
  }
}
function di(t) {
  if (!t)
    return null;
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function nc() {
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
class Ma {
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
    return Ue("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return Ue("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, r) {
    return Ue("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return Ue("not implemented");
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
async function gt(t, e) {
  return ku(t, "POST", "/v1/accounts:signInWithIdp", _a(t, e));
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
const ic = "http://localhost";
class qe extends Ma {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const r = new qe(e.providerId, e.signInMethod);
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
    const r = typeof e == "string" ? JSON.parse(e) : e, { providerId: n, signInMethod: i } = r, a = yn(r, ["providerId", "signInMethod"]);
    if (!n || !i)
      return null;
    const s = new qe(n, i);
    return s.idToken = a.idToken || void 0, s.accessToken = a.accessToken || void 0, s.secret = a.secret, s.nonce = a.nonce, s.pendingToken = a.pendingToken || null, s;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const r = this.buildRequest();
    return gt(e, r);
  }
  /** @internal */
  _linkToIdToken(e, r) {
    const n = this.buildRequest();
    return n.idToken = r, gt(e, n);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const r = this.buildRequest();
    return r.autoCreate = !1, gt(e, r);
  }
  buildRequest() {
    const e = {
      requestUri: ic,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const r = {};
      this.idToken && (r.id_token = this.idToken), this.accessToken && (r.access_token = this.accessToken), this.secret && (r.oauth_token_secret = this.secret), r.providerId = this.providerId, this.nonce && !this.pendingToken && (r.nonce = this.nonce), e.postBody = $t(r);
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
class Sn {
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
class St extends Sn {
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
class Dt extends St {
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
    ), qe._fromParams(r);
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
    ), qe._fromParams(Object.assign(Object.assign({}, e), { providerId: this.providerId, signInMethod: this.providerId }));
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Dt.oauthCredentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Dt.oauthCredentialFromTaggedObject(e.customData || {});
  }
  static oauthCredentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: r, oauthAccessToken: n, oauthTokenSecret: i, pendingToken: a, nonce: s, providerId: u } = e;
    if (!n && !i && !r && !a || !u)
      return null;
    try {
      return new Dt(u)._credential({
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
class Ne extends St {
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
    return qe._fromParams({
      providerId: Ne.PROVIDER_ID,
      signInMethod: Ne.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Ne.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Ne.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return Ne.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Ne.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Ne.PROVIDER_ID = "facebook.com";
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
class Me extends St {
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
    return qe._fromParams({
      providerId: Me.PROVIDER_ID,
      signInMethod: Me.GOOGLE_SIGN_IN_METHOD,
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
    return Me.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Me.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: r, oauthAccessToken: n } = e;
    if (!r && !n)
      return null;
    try {
      return Me.credential(r, n);
    } catch {
      return null;
    }
  }
}
Me.GOOGLE_SIGN_IN_METHOD = "google.com";
Me.PROVIDER_ID = "google.com";
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
class xe extends St {
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
    return qe._fromParams({
      providerId: xe.PROVIDER_ID,
      signInMethod: xe.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return xe.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return xe.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return xe.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
xe.GITHUB_SIGN_IN_METHOD = "github.com";
xe.PROVIDER_ID = "github.com";
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
class Le extends St {
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
    return qe._fromParams({
      providerId: Le.PROVIDER_ID,
      signInMethod: Le.TWITTER_SIGN_IN_METHOD,
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
    return Le.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Le.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: r, oauthTokenSecret: n } = e;
    if (!r || !n)
      return null;
    try {
      return Le.credential(r, n);
    } catch {
      return null;
    }
  }
}
Le.TWITTER_SIGN_IN_METHOD = "twitter.com";
Le.PROVIDER_ID = "twitter.com";
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
    const a = await at._fromIdTokenResponse(e, n, i), s = fi(n);
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
    const i = fi(n);
    return new yt({
      user: e,
      providerId: i,
      _tokenResponse: n,
      operationType: r
    });
  }
}
function fi(t) {
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
class pr extends Ye {
  constructor(e, r, n, i) {
    var a;
    super(r.code, r.message), this.operationType = n, this.user = i, Object.setPrototypeOf(this, pr.prototype), this.customData = {
      appName: e.name,
      tenantId: (a = e.tenantId) !== null && a !== void 0 ? a : void 0,
      _serverResponse: r.customData._serverResponse,
      operationType: n
    };
  }
  static _fromErrorAndOperation(e, r, n, i) {
    return new pr(e, r, n, i);
  }
}
function xa(t, e, r, n) {
  return (e === "reauthenticate" ? r._getReauthenticationResolver(t) : r._getIdTokenResponse(t)).catch((a) => {
    throw a.code === "auth/multi-factor-auth-required" ? pr._fromErrorAndOperation(t, a, e, n) : a;
  });
}
async function ac(t, e, r = !1) {
  const n = await Lt(t, e._linkToIdToken(t.auth, await t.getIdToken()), r);
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
async function sc(t, e, r = !1) {
  const { auth: n } = t, i = "reauthenticate";
  try {
    const a = await Lt(t, xa(n, i, e, t), r);
    q(
      a.idToken,
      n,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const s = In(a.idToken);
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
async function oc(t, e, r = !1) {
  const n = "signIn", i = await xa(t, n, e), a = await yt._fromIdTokenResponse(t, n, i);
  return r || await t._updateCurrentUser(a.user), a;
}
function uc(t, e, r, n) {
  return Xe(t).onIdTokenChanged(e, r, n);
}
function cc(t, e, r) {
  return Xe(t).beforeAuthStateChanged(e, r);
}
function lc(t, e, r, n) {
  return Xe(t).onAuthStateChanged(e, r, n);
}
function La(t) {
  return Xe(t).signOut();
}
const vr = "__sak";
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
class Ua {
  constructor(e, r) {
    this.storageRetriever = e, this.type = r;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(vr, "1"), this.storage.removeItem(vr), Promise.resolve(!0)) : Promise.resolve(!1);
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
  const t = le();
  return wn(t) || Or(t);
}
const fc = 1e3, hc = 10;
class Fa extends Ua {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, r) => this.onStorageEvent(e, r), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = dc() && Hu(), this.fallbackToPolling = Ca(), this._shouldAllowMigration = !0;
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
Fa.type = "LOCAL";
const pc = Fa;
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
class ja extends Ua {
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
ja.type = "SESSION";
const qa = ja;
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
class Rr {
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
    const n = new Rr(e);
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
    const u = Array.from(s).map(async (c) => c(r.origin, a)), o = await vc(u);
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
Rr.receivers = [];
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
      const c = En("", 20);
      i.port1.start();
      const d = setTimeout(() => {
        o(new Error(
          "unsupported_event"
          /* _MessageError.UNSUPPORTED_EVENT */
        ));
      }, n);
      s = {
        messageChannel: i,
        onMessage(p) {
          const m = p;
          if (m.data.eventId === c)
            switch (m.data.status) {
              case "ack":
                clearTimeout(d), a = setTimeout(
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
                clearTimeout(d), clearTimeout(a), o(new Error(
                  "invalid_response"
                  /* _MessageError.INVALID_RESPONSE */
                ));
                break;
            }
        }
      }, this.handlers.add(s), i.port1.addEventListener("message", s.onMessage), this.target.postMessage({
        eventType: e,
        eventId: c,
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
function Re() {
  return window;
}
function mc(t) {
  Re().location.href = t;
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
function Ba() {
  return typeof Re().WorkerGlobalScope < "u" && typeof Re().importScripts == "function";
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
  return Ba() ? self : null;
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
const $a = "firebaseLocalStorageDb", Ic = 1, gr = "firebaseLocalStorage", Va = "fbase_key";
class Qt {
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
function Pr(t, e) {
  return t.transaction([gr], e ? "readwrite" : "readonly").objectStore(gr);
}
function wc() {
  const t = indexedDB.deleteDatabase($a);
  return new Qt(t).toPromise();
}
function an() {
  const t = indexedDB.open($a, Ic);
  return new Promise((e, r) => {
    t.addEventListener("error", () => {
      r(t.error);
    }), t.addEventListener("upgradeneeded", () => {
      const n = t.result;
      try {
        n.createObjectStore(gr, { keyPath: Va });
      } catch (i) {
        r(i);
      }
    }), t.addEventListener("success", async () => {
      const n = t.result;
      n.objectStoreNames.contains(gr) ? e(n) : (n.close(), await wc(), e(await an()));
    });
  });
}
async function hi(t, e, r) {
  const n = Pr(t, !0).put({
    [Va]: e,
    value: r
  });
  return new Qt(n).toPromise();
}
async function Sc(t, e) {
  const r = Pr(t, !1).get(e), n = await new Qt(r).toPromise();
  return n === void 0 ? null : n.value;
}
function pi(t, e) {
  const r = Pr(t, !0).delete(e);
  return new Qt(r).toPromise();
}
const Ec = 800, Tc = 3;
class Ha {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await an(), this.db);
  }
  async _withRetries(e) {
    let r = 0;
    for (; ; )
      try {
        const n = await this._openDb();
        return await e(n);
      } catch (n) {
        if (r++ > Tc)
          throw n;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return Ba() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = Rr._getInstance(_c()), this.receiver._subscribe("keyChanged", async (e, r) => ({
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
      const e = await an();
      return await hi(e, vr, "1"), await pi(e, vr), !0;
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
    return this._withPendingWrite(async () => (await this._withRetries((n) => hi(n, e, r)), this.localCache[e] = r, this.notifyServiceWorker(e)));
  }
  async _get(e) {
    const r = await this._withRetries((n) => Sc(n, e));
    return this.localCache[e] = r, r;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((r) => pi(r, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const a = Pr(i, !1).getAll();
      return new Qt(a).toPromise();
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
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), Ec);
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
Ha.type = "LOCAL";
const Oc = Ha;
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
function Wa(t, e) {
  return e ? Fe(e) : (q(
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
class Tn extends Ma {
  constructor(e) {
    super(
      "custom",
      "custom"
      /* ProviderId.CUSTOM */
    ), this.params = e;
  }
  _getIdTokenResponse(e) {
    return gt(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, r) {
    return gt(e, this._buildIdpRequest(r));
  }
  _getReauthenticationResolver(e) {
    return gt(e, this._buildIdpRequest());
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
function Rc(t) {
  return oc(t.auth, new Tn(t), t.bypassAuthState);
}
function Pc(t) {
  const { auth: e, user: r } = t;
  return q(
    r,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), sc(r, new Tn(t), t.bypassAuthState);
}
async function Ac(t) {
  const { auth: e, user: r } = t;
  return q(
    r,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), ac(r, new Tn(t), t.bypassAuthState);
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
class za {
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
    } catch (c) {
      this.reject(c);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return Rc;
      case "linkViaPopup":
      case "linkViaRedirect":
        return Ac;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return Pc;
      default:
        Ae(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    je(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    je(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
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
const kc = new Ht(2e3, 1e4);
class ht extends za {
  constructor(e, r, n, i, a) {
    super(e, r, i, a), this.provider = n, this.authWindow = null, this.pollId = null, ht.currentPopupAction && ht.currentPopupAction.cancel(), ht.currentPopupAction = this;
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
    je(this.filter.length === 1, "Popup operations only handle one event");
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
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, ht.currentPopupAction = null;
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
      this.pollId = window.setTimeout(e, kc.get());
    };
    e();
  }
}
ht.currentPopupAction = null;
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
const Cc = "pendingRedirect", ar = /* @__PURE__ */ new Map();
class Dc extends za {
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
    let e = ar.get(this.auth._key());
    if (!e) {
      try {
        const n = await Nc(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(n);
      } catch (r) {
        e = () => Promise.reject(r);
      }
      ar.set(this.auth._key(), e);
    }
    return this.bypassAuthState || ar.set(this.auth._key(), () => Promise.resolve(null)), e();
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
  const r = Ka(e), n = Qa(t);
  if (!await n._isAvailable())
    return !1;
  const i = await n._get(r) === "true";
  return await n._remove(r), i;
}
async function Mc(t, e) {
  return Qa(t)._set(Ka(e), "true");
}
function xc(t, e) {
  ar.set(t._key(), e);
}
function Qa(t) {
  return Fe(t._redirectPersistence);
}
function Ka(t) {
  return ir(Cc, t.config.apiKey, t.name);
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
function Kt(t, e, r) {
  return Lc(t, e, r);
}
async function Lc(t, e, r) {
  const n = zt(t);
  Eu(t, e, Sn), await n._initializationPromise;
  const i = Wa(n, r);
  return await Mc(i, n), i._openRedirect(
    n,
    e,
    "signInViaRedirect"
    /* AuthEventType.SIGN_IN_VIA_REDIRECT */
  );
}
async function Uc(t, e) {
  return await zt(t)._initializationPromise, Ga(t, e, !1);
}
async function Ga(t, e, r = !1) {
  const n = zt(t), i = Wa(n, e), s = await new Dc(n, i, r).execute();
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
const Fc = 10 * 60 * 1e3;
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
    if (e.error && !Ja(e)) {
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
    return Date.now() - this.lastProcessedEventTime >= Fc && this.cachedEventUids.clear(), this.cachedEventUids.has(vi(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(vi(e)), this.lastProcessedEventTime = Date.now();
  }
}
function vi(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join("-");
}
function Ja({ type: t, error: e }) {
  return t === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event";
}
function qc(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Ja(t);
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
  return Wt(t, "GET", "/v1/projects", e);
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
const $c = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, Vc = /^https?/;
async function Hc(t) {
  if (t.config.emulator)
    return;
  const { authorizedDomains: e } = await Bc(t);
  for (const r of e)
    try {
      if (Wc(r))
        return;
    } catch {
    }
  Ae(
    t,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function Wc(t) {
  const e = nn(), { protocol: r, hostname: n } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const s = new URL(t);
    return s.hostname === "" && n === "" ? r === "chrome-extension:" && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : r === "chrome-extension:" && s.hostname === n;
  }
  if (!Vc.test(r))
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
const zc = new Ht(3e4, 6e4);
function gi() {
  const t = Re().___jsl;
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
      gi(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          gi(), r(Oe(
            t,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: zc.get()
      });
    }
    if (!((i = (n = Re().gapi) === null || n === void 0 ? void 0 : n.iframes) === null || i === void 0) && i.Iframe)
      e(gapi.iframes.getContext());
    else if (!((a = Re().gapi) === null || a === void 0) && a.load)
      s();
    else {
      const u = Xu("iframefcb");
      return Re()[u] = () => {
        gapi.load ? s() : r(Oe(
          t,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, Yu(`https://apis.google.com/js/api.js?onload=${u}`).catch((o) => r(o));
    }
  }).catch((e) => {
    throw sr = null, e;
  });
}
let sr = null;
function Kc(t) {
  return sr = sr || Qc(t), sr;
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
const Gc = new Ht(5e3, 15e3), Jc = "__/auth/iframe", Yc = "emulator/auth/iframe", Xc = {
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
  const r = e.emulator ? _n(e, Yc) : `https://${t.config.authDomain}/${Jc}`, n = {
    apiKey: e.apiKey,
    appName: t.name,
    v: Vt
  }, i = Zc.get(t.config.apiHost);
  i && (n.eid = i);
  const a = t._getFrameworks();
  return a.length && (n.fw = a.join(",")), `${r}?${$t(n).slice(1)}`;
}
async function tl(t) {
  const e = await Kc(t), r = Re().gapi;
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
    const s = Oe(
      t,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), u = Re().setTimeout(() => {
      a(s);
    }, Gc.get());
    function o() {
      Re().clearTimeout(u), i(n);
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
class mi {
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
  }), c = le().toLowerCase();
  r && (u = Oa(c) ? al : r), Ta(c) && (e = e || sl, o.scrollbars = "yes");
  const d = Object.entries(o).reduce((m, [h, I]) => `${m}${h}=${I},`, "");
  if ($u(c) && u !== "_self")
    return ul(e || "", u), new mi(null);
  const p = window.open(e || "", u, d);
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
  return new mi(p);
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
async function yi(t, e, r, n, i, a) {
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
    v: Vt,
    eventId: i
  };
  if (e instanceof Sn) {
    e.setDefaultLanguage(t.languageCode), s.providerId = e.providerId || "", fo(e.getCustomParameters()) || (s.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [d, p] of Object.entries(a || {}))
      s[d] = p;
  }
  if (e instanceof St) {
    const d = e.getScopes().filter((p) => p !== "");
    d.length > 0 && (s.scopes = d.join(","));
  }
  t.tenantId && (s.tid = t.tenantId);
  const u = s;
  for (const d of Object.keys(u))
    u[d] === void 0 && delete u[d];
  const o = await t._getAppCheckToken(), c = o ? `#${dl}=${encodeURIComponent(o)}` : "";
  return `${fl(t)}?${$t(u).slice(1)}${c}`;
}
function fl({ config: t }) {
  return t.emulator ? _n(t, ll) : `https://${t.authDomain}/${cl}`;
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
const $r = "webStorageSupport";
class hl {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = qa, this._completeRedirectFn = Ga, this._overrideRedirectResult = xc;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, r, n, i) {
    var a;
    je((a = this.eventManagers[e._key()]) === null || a === void 0 ? void 0 : a.manager, "_initialize() not called before _openPopup()");
    const s = await yi(e, r, n, nn(), i);
    return ol(e, s, En());
  }
  async _openRedirect(e, r, n, i) {
    await this._originValidation(e);
    const a = await yi(e, r, n, nn(), i);
    return mc(a), new Promise(() => {
    });
  }
  _initialize(e) {
    const r = e._key();
    if (this.eventManagers[r]) {
      const { manager: i, promise: a } = this.eventManagers[r];
      return i ? Promise.resolve(i) : (je(a, "If manager is not set, promise should be"), a);
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
    this.iframes[e._key()].send($r, { type: $r }, (i) => {
      var a;
      const s = (a = i == null ? void 0 : i[0]) === null || a === void 0 ? void 0 : a[$r];
      s !== void 0 && r(!!s), Ae(
        e,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const r = e._key();
    return this.originValidationPromises[r] || (this.originValidationPromises[r] = Hc(e)), this.originValidationPromises[r];
  }
  get _shouldInitProactively() {
    return Ca() || wn() || Or();
  }
}
const pl = hl;
var bi = "@firebase/auth", _i = "1.3.0";
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
  Mt(new mt(
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
        sdkClientVersion: Da(t)
      }, c = new Gu(n, i, a, o);
      return ec(c, r), c;
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
  })), Mt(new mt(
    "auth-internal",
    (e) => {
      const r = zt(e.getProvider(
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
  )), pt(bi, _i, gl(t)), pt(bi, _i, "esm2017");
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
const yl = 5 * 60, bl = ua("authIdTokenMaxAge") || yl;
let Ii = null;
const _l = (t) => async (e) => {
  const r = e && await e.getIdTokenResult(), n = r && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(r.issuedAtTime)) / 1e3;
  if (n && n > bl)
    return;
  const i = r == null ? void 0 : r.token;
  Ii !== i && (Ii = i, await fetch(t, {
    method: i ? "POST" : "DELETE",
    headers: i ? {
      Authorization: `Bearer ${i}`
    } : {}
  }));
};
function Il(t = fu()) {
  const e = fa(t, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const r = Zu(t, {
    popupRedirectResolver: pl,
    persistence: [
      Oc,
      pc,
      qa
    ]
  }), n = ua("authTokenSyncURL");
  if (n) {
    const a = _l(n);
    cc(r, a, () => a(r.currentUser)), uc(r, (s) => a(s));
  }
  const i = eo("auth");
  return i && tc(r, `http://${i}`), r;
}
ml(
  "Browser"
  /* ClientPlatform.BROWSER */
);
var wl = "firebase", Sl = "10.4.0";
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
pt(wl, Sl, "app");
const Ya = {
  language: "en",
  firebaseConfig: {},
  endpoint: "http://127.0.0.1:8000/api/auth/",
  keyword: "TSESSION",
  refreshTokenHeader: "Authorization",
  acceptUsername: !1,
  bodyAsBase64: !1,
  signInMethods: [
    "google"
  ]
};
let X = { ...Ya };
const wf = (t) => {
  X = { ...Ya, ...t };
}, El = () => Object.keys(X.firebaseConfig).length !== 0, Ve = () => {
  const t = ha(X.firebaseConfig);
  return Il(t);
}, Xa = new Me();
Xa.setCustomParameters({ prompt: "select_account" });
const Za = new Ne();
Za.addScope("public_profile");
const Tl = new Le(), Ol = new xe(), Rl = new Dt("microsoft.com").setCustomParameters({
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
    var i = Ul[t], a = i ? typeof i == "function" ? i.apply(null, r) : i : "unknown error nr: " + t;
    throw Error("[Immer] " + a);
  }
  throw Error("[Immer] minified error nr: " + t + (r.length ? " " + r.map(function(s) {
    return "'" + s + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function Be(t) {
  return !!t && !!t[ve];
}
function $e(t) {
  var e;
  return !!t && (function(r) {
    if (!r || typeof r != "object")
      return !1;
    var n = Object.getPrototypeOf(r);
    if (n === null)
      return !0;
    var i = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
    return i === Object || typeof i == "function" && Function.toString.call(i) === Fl;
  }(t) || Array.isArray(t) || !!t[Nt] || !!(!((e = t.constructor) === null || e === void 0) && e[Nt]) || Ar(t) || kr(t));
}
function Pl(t) {
  return Be(t) || ie(23, t), t[ve].t;
}
function bt(t, e, r) {
  r === void 0 && (r = !1), Je(t) === 0 ? (r ? Object.keys : Cn)(t).forEach(function(n) {
    r && typeof n == "symbol" || e(n, t[n], t);
  }) : t.forEach(function(n, i) {
    return e(i, n, t);
  });
}
function Je(t) {
  var e = t[ve];
  return e ? e.i > 3 ? e.i - 4 : e.i : Array.isArray(t) ? 1 : Ar(t) ? 2 : kr(t) ? 3 : 0;
}
function Ft(t, e) {
  return Je(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function or(t, e) {
  return Je(t) === 2 ? t.get(e) : t[e];
}
function es(t, e, r) {
  var n = Je(t);
  n === 2 ? t.set(e, r) : n === 3 ? t.add(r) : t[e] = r;
}
function Al(t, e) {
  return t === e ? t !== 0 || 1 / t == 1 / e : t != t && e != e;
}
function Ar(t) {
  return xl && t instanceof Map;
}
function kr(t) {
  return Ll && t instanceof Set;
}
function nt(t) {
  return t.o || t.t;
}
function On(t) {
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  var e = jl(t);
  delete e[ve];
  for (var r = Cn(e), n = 0; n < r.length; n++) {
    var i = r[n], a = e[i];
    a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (e[i] = { configurable: !0, writable: !0, enumerable: a.enumerable, value: t[i] });
  }
  return Object.create(Object.getPrototypeOf(t), e);
}
function Rn(t, e) {
  return e === void 0 && (e = !1), Pn(t) || Be(t) || !$e(t) || (Je(t) > 1 && (t.set = t.add = t.clear = t.delete = kl), Object.freeze(t), e && bt(t, function(r, n) {
    return Rn(n, !0);
  }, !0)), t;
}
function kl() {
  ie(2);
}
function Pn(t) {
  return t == null || typeof t != "object" || Object.isFrozen(t);
}
function Pe(t) {
  var e = cn[t];
  return e || ie(18, t), e;
}
function Cl(t, e) {
  cn[t] || (cn[t] = e);
}
function wi() {
  return process.env.NODE_ENV === "production" || _t || ie(0), _t;
}
function Vr(t, e) {
  e && (Pe("Patches"), t.u = [], t.s = [], t.v = e);
}
function mr(t) {
  sn(t), t.p.forEach(Dl), t.p = null;
}
function sn(t) {
  t === _t && (_t = t.l);
}
function Si(t) {
  return _t = { p: [], l: _t, h: t, m: !0, _: 0 };
}
function Dl(t) {
  var e = t[ve];
  e.i === 0 || e.i === 1 ? e.j() : e.g = !0;
}
function Hr(t, e) {
  e._ = e.p.length;
  var r = e.p[0], n = t !== void 0 && t !== r;
  return e.h.O || Pe("ES5").S(e, t, n), n ? (r[ve].P && (mr(e), ie(4)), $e(t) && (t = yr(e, t), e.l || br(e, t)), e.u && Pe("Patches").M(r[ve].t, t, e.u, e.s)) : t = yr(e, r, []), mr(e), e.u && e.v(e.u, e.s), t !== kn ? t : void 0;
}
function yr(t, e, r) {
  if (Pn(e))
    return e;
  var n = e[ve];
  if (!n)
    return bt(e, function(u, o) {
      return Ei(t, n, e, u, o, r);
    }, !0), e;
  if (n.A !== t)
    return e;
  if (!n.P)
    return br(t, n.t, !0), n.t;
  if (!n.I) {
    n.I = !0, n.A._--;
    var i = n.i === 4 || n.i === 5 ? n.o = On(n.k) : n.o, a = i, s = !1;
    n.i === 3 && (a = new Set(i), i.clear(), s = !0), bt(a, function(u, o) {
      return Ei(t, n, i, u, o, r, s);
    }), br(t, i, !1), r && t.u && Pe("Patches").N(n, r, t.u, t.s);
  }
  return n.o;
}
function Ei(t, e, r, n, i, a, s) {
  if (process.env.NODE_ENV !== "production" && i === r && ie(5), Be(i)) {
    var u = yr(t, i, a && e && e.i !== 3 && !Ft(e.R, n) ? a.concat(n) : void 0);
    if (es(r, n, u), !Be(u))
      return;
    t.m = !1;
  } else
    s && r.add(i);
  if ($e(i) && !Pn(i)) {
    if (!t.h.D && t._ < 1)
      return;
    yr(t, i), e && e.A.l || br(t, i);
  }
}
function br(t, e, r) {
  r === void 0 && (r = !1), !t.l && t.h.D && t.m && Rn(e, r);
}
function Wr(t, e) {
  var r = t[ve];
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
function on(t) {
  t.P || (t.P = !0, t.l && on(t.l));
}
function zr(t) {
  t.o || (t.o = On(t.t));
}
function un(t, e, r) {
  var n = Ar(e) ? Pe("MapSet").F(e, r) : kr(e) ? Pe("MapSet").T(e, r) : t.O ? function(i, a) {
    var s = Array.isArray(i), u = { i: s ? 1 : 0, A: a ? a.A : wi(), P: !1, I: !1, R: {}, l: a, t: i, k: null, o: null, j: null, C: !1 }, o = u, c = ln;
    s && (o = [u], c = At);
    var d = Proxy.revocable(o, c), p = d.revoke, m = d.proxy;
    return u.k = m, u.j = p, m;
  }(e, r) : Pe("ES5").J(e, r);
  return (r ? r.A : wi()).p.push(n), n;
}
function Nl(t) {
  return Be(t) || ie(22, t), function e(r) {
    if (!$e(r))
      return r;
    var n, i = r[ve], a = Je(r);
    if (i) {
      if (!i.P && (i.i < 4 || !Pe("ES5").K(i)))
        return i.t;
      i.I = !0, n = Oi(r, a), i.I = !1;
    } else
      n = Oi(r, a);
    return bt(n, function(s, u) {
      i && or(i.t, s) === u || es(n, s, e(u));
    }), a === 3 ? new Set(n) : n;
  }(t);
}
function Oi(t, e) {
  switch (e) {
    case 2:
      return new Map(t);
    case 3:
      return Array.from(t);
  }
  return On(t);
}
function Ml() {
  function t(n) {
    if (!$e(n))
      return n;
    if (Array.isArray(n))
      return n.map(t);
    if (Ar(n))
      return new Map(Array.from(n.entries()).map(function(s) {
        return [s[0], t(s[1])];
      }));
    if (kr(n))
      return new Set(Array.from(n).map(t));
    var i = Object.create(Object.getPrototypeOf(n));
    for (var a in n)
      i[a] = t(n[a]);
    return Ft(n, Nt) && (i[Nt] = n[Nt]), i;
  }
  function e(n) {
    return Be(n) ? t(n) : n;
  }
  var r = "add";
  Cl("Patches", { $: function(n, i) {
    return i.forEach(function(a) {
      for (var s = a.path, u = a.op, o = n, c = 0; c < s.length - 1; c++) {
        var d = Je(o), p = s[c];
        typeof p != "string" && typeof p != "number" && (p = "" + p), d !== 0 && d !== 1 || p !== "__proto__" && p !== "constructor" || ie(24), typeof o == "function" && p === "prototype" && ie(24), typeof (o = or(o, p)) != "object" && ie(15, s.join("/"));
      }
      var m = Je(o), h = t(a.value), I = s[s.length - 1];
      switch (u) {
        case "replace":
          switch (m) {
            case 2:
              return o.set(I, h);
            case 3:
              ie(16);
            default:
              return o[I] = h;
          }
        case r:
          switch (m) {
            case 1:
              return I === "-" ? o.push(h) : o.splice(I, 0, h);
            case 2:
              return o.set(I, h);
            case 3:
              return o.add(h);
            default:
              return o[I] = h;
          }
        case "remove":
          switch (m) {
            case 1:
              return o.splice(I, 1);
            case 2:
              return o.delete(I);
            case 3:
              return o.delete(a.value);
            default:
              return delete o[I];
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
        return function(u, o, c, d) {
          var p = u.t, m = u.o;
          bt(u.R, function(h, I) {
            var S = or(p, h), T = or(m, h), P = I ? Ft(p, h) ? "replace" : r : "remove";
            if (S !== T || P !== "replace") {
              var w = o.concat(h);
              c.push(P === "remove" ? { op: P, path: w } : { op: P, path: w, value: T }), d.push(P === r ? { op: "remove", path: w } : P === "remove" ? { op: r, path: w, value: e(S) } : { op: "replace", path: w, value: e(S) });
            }
          });
        }(n, i, a, s);
      case 5:
      case 1:
        return function(u, o, c, d) {
          var p = u.t, m = u.R, h = u.o;
          if (h.length < p.length) {
            var I = [h, p];
            p = I[0], h = I[1];
            var S = [d, c];
            c = S[0], d = S[1];
          }
          for (var T = 0; T < p.length; T++)
            if (m[T] && h[T] !== p[T]) {
              var P = o.concat([T]);
              c.push({ op: "replace", path: P, value: e(h[T]) }), d.push({ op: "replace", path: P, value: e(p[T]) });
            }
          for (var w = p.length; w < h.length; w++) {
            var E = o.concat([w]);
            c.push({ op: r, path: E, value: e(h[w]) });
          }
          p.length < h.length && d.push({ op: "replace", path: o.concat(["length"]), value: p.length });
        }(n, i, a, s);
      case 3:
        return function(u, o, c, d) {
          var p = u.t, m = u.o, h = 0;
          p.forEach(function(I) {
            if (!m.has(I)) {
              var S = o.concat([h]);
              c.push({ op: "remove", path: S, value: I }), d.unshift({ op: r, path: S, value: I });
            }
            h++;
          }), h = 0, m.forEach(function(I) {
            if (!p.has(I)) {
              var S = o.concat([h]);
              c.push({ op: r, path: S, value: I }), d.unshift({ op: "remove", path: S, value: I });
            }
            h++;
          });
        }(n, i, a, s);
    }
  }, M: function(n, i, a, s) {
    a.push({ op: "replace", path: [], value: i === kn ? void 0 : i }), s.push({ op: "replace", path: [], value: n });
  } });
}
var Ri, _t, An = typeof Symbol < "u" && typeof Symbol("x") == "symbol", xl = typeof Map < "u", Ll = typeof Set < "u", Pi = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", kn = An ? Symbol.for("immer-nothing") : ((Ri = {})["immer-nothing"] = !0, Ri), Nt = An ? Symbol.for("immer-draftable") : "__$immer_draftable", ve = An ? Symbol.for("immer-state") : "__$immer_state", Ul = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(t) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, Fl = "" + Object.prototype.constructor, Cn = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Object.getOwnPropertyNames, jl = Object.getOwnPropertyDescriptors || function(t) {
  var e = {};
  return Cn(t).forEach(function(r) {
    e[r] = Object.getOwnPropertyDescriptor(t, r);
  }), e;
}, cn = {}, ln = { get: function(t, e) {
  if (e === ve)
    return t;
  var r = nt(t);
  if (!Ft(r, e))
    return function(i, a, s) {
      var u, o = Ti(a, s);
      return o ? "value" in o ? o.value : (u = o.get) === null || u === void 0 ? void 0 : u.call(i.k) : void 0;
    }(t, r, e);
  var n = r[e];
  return t.I || !$e(n) ? n : n === Wr(t.t, e) ? (zr(t), t.o[e] = un(t.A.h, n, t)) : n;
}, has: function(t, e) {
  return e in nt(t);
}, ownKeys: function(t) {
  return Reflect.ownKeys(nt(t));
}, set: function(t, e, r) {
  var n = Ti(nt(t), e);
  if (n != null && n.set)
    return n.set.call(t.k, r), !0;
  if (!t.P) {
    var i = Wr(nt(t), e), a = i == null ? void 0 : i[ve];
    if (a && a.t === r)
      return t.o[e] = r, t.R[e] = !1, !0;
    if (Al(r, i) && (r !== void 0 || Ft(t.t, e)))
      return !0;
    zr(t), on(t);
  }
  return t.o[e] === r && (r !== void 0 || e in t.o) || Number.isNaN(r) && Number.isNaN(t.o[e]) || (t.o[e] = r, t.R[e] = !0), !0;
}, deleteProperty: function(t, e) {
  return Wr(t.t, e) !== void 0 || e in t.t ? (t.R[e] = !1, zr(t), on(t)) : delete t.R[e], t.o && delete t.o[e], !0;
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
bt(ln, function(t, e) {
  At[t] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
}), At.deleteProperty = function(t, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && ie(13), At.set.call(this, t, e, void 0);
}, At.set = function(t, e, r) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && ie(14), ln.set.call(this, t[0], e, r, t[0]);
};
var ql = function() {
  function t(r) {
    var n = this;
    this.O = Pi, this.D = !0, this.produce = function(i, a, s) {
      if (typeof i == "function" && typeof a != "function") {
        var u = a;
        a = i;
        var o = n;
        return function(S) {
          var T = this;
          S === void 0 && (S = u);
          for (var P = arguments.length, w = Array(P > 1 ? P - 1 : 0), E = 1; E < P; E++)
            w[E - 1] = arguments[E];
          return o.produce(S, function(g) {
            var v;
            return (v = a).call.apply(v, [T, g].concat(w));
          });
        };
      }
      var c;
      if (typeof a != "function" && ie(6), s !== void 0 && typeof s != "function" && ie(7), $e(i)) {
        var d = Si(n), p = un(n, i, void 0), m = !0;
        try {
          c = a(p), m = !1;
        } finally {
          m ? mr(d) : sn(d);
        }
        return typeof Promise < "u" && c instanceof Promise ? c.then(function(S) {
          return Vr(d, s), Hr(S, d);
        }, function(S) {
          throw mr(d), S;
        }) : (Vr(d, s), Hr(c, d));
      }
      if (!i || typeof i != "object") {
        if ((c = a(i)) === void 0 && (c = i), c === kn && (c = void 0), n.D && Rn(c, !0), s) {
          var h = [], I = [];
          Pe("Patches").M(i, c, h, I), s(h, I);
        }
        return c;
      }
      ie(21, i);
    }, this.produceWithPatches = function(i, a) {
      if (typeof i == "function")
        return function(c) {
          for (var d = arguments.length, p = Array(d > 1 ? d - 1 : 0), m = 1; m < d; m++)
            p[m - 1] = arguments[m];
          return n.produceWithPatches(c, function(h) {
            return i.apply(void 0, [h].concat(p));
          });
        };
      var s, u, o = n.produce(i, a, function(c, d) {
        s = c, u = d;
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then(function(c) {
        return [c, s, u];
      }) : [o, s, u];
    }, typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies), typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var e = t.prototype;
  return e.createDraft = function(r) {
    $e(r) || ie(8), Be(r) && (r = Nl(r));
    var n = Si(this), i = un(this, r, void 0);
    return i[ve].C = !0, sn(n), i;
  }, e.finishDraft = function(r, n) {
    var i = r && r[ve];
    process.env.NODE_ENV !== "production" && (i && i.C || ie(9), i.I && ie(10));
    var a = i.A;
    return Vr(a, n), Hr(void 0, a);
  }, e.setAutoFreeze = function(r) {
    this.D = r;
  }, e.setUseProxies = function(r) {
    r && !Pi && ie(20), this.O = r;
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
    var s = Pe("Patches").$;
    return Be(r) ? s(r, n) : this.produce(r, function(u) {
      return s(u, n);
    });
  }, t;
}(), me = new ql();
me.produce;
var ts = me.produceWithPatches.bind(me);
me.setAutoFreeze.bind(me);
me.setUseProxies.bind(me);
var Ai = me.applyPatches.bind(me);
me.createDraft.bind(me);
me.finishDraft.bind(me);
var _r = "NOT_FOUND";
function Bl(t) {
  var e;
  return {
    get: function(n) {
      return e && t(e.key, n) ? e.value : _r;
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
    var o = r.findIndex(function(d) {
      return e(u, d.key);
    });
    if (o > -1) {
      var c = r[o];
      return o > 0 && (r.splice(o, 1), r.unshift(c)), c.value;
    }
    return _r;
  }
  function i(u, o) {
    n(u) === _r && (r.unshift({
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
var Vl = function(e, r) {
  return e === r;
};
function Hl(t) {
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
  }, n = r.equalityCheck, i = n === void 0 ? Vl : n, a = r.maxSize, s = a === void 0 ? 1 : a, u = r.resultEqualityCheck, o = Hl(i), c = s === 1 ? Bl(o) : $l(s, o);
  function d() {
    var p = c.get(arguments);
    if (p === _r) {
      if (p = t.apply(null, arguments), u) {
        var m = c.getEntries(), h = m.find(function(I) {
          return u(I.value, p);
        });
        h && (p = h.value);
      }
      c.put(arguments, p);
    }
    return p;
  }
  return d.clearCache = function() {
    return c.clear();
  }, d;
}
var Ir = globalThis && globalThis.__generator || function(t, e) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, s;
  return s = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function u(c) {
    return function(d) {
      return o([c, d]);
    };
  }
  function o(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done)
          return a;
        switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
          case 0:
          case 1:
            a = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = c;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(c);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = e.call(t, r);
      } catch (d) {
        c = [6, d], i = 0;
      } finally {
        n = a = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, wr = globalThis && globalThis.__spreadArray || function(t, e) {
  for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
    t[i] = e[r];
  return t;
}, Wl = Object.defineProperty, zl = Object.defineProperties, Ql = Object.getOwnPropertyDescriptors, Sr = Object.getOwnPropertySymbols, rs = Object.prototype.hasOwnProperty, ns = Object.prototype.propertyIsEnumerable, Ci = function(t, e, r) {
  return e in t ? Wl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
}, ae = function(t, e) {
  for (var r in e || (e = {}))
    rs.call(e, r) && Ci(t, r, e[r]);
  if (Sr)
    for (var n = 0, i = Sr(e); n < i.length; n++) {
      var r = i[n];
      ns.call(e, r) && Ci(t, r, e[r]);
    }
  return t;
}, Te = function(t, e) {
  return zl(t, Ql(e));
}, Di = function(t, e) {
  var r = {};
  for (var n in t)
    rs.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && Sr)
    for (var i = 0, a = Sr(t); i < a.length; i++) {
      var n = a[i];
      e.indexOf(n) < 0 && ns.call(t, n) && (r[n] = t[n]);
    }
  return r;
}, Er = function(t, e, r) {
  return new Promise(function(n, i) {
    var a = function(o) {
      try {
        u(r.next(o));
      } catch (c) {
        i(c);
      }
    }, s = function(o) {
      try {
        u(r.throw(o));
      } catch (c) {
        i(c);
      }
    }, u = function(o) {
      return o.done ? n(o.value) : Promise.resolve(o.value).then(a, s);
    };
    u((r = r.apply(t, e)).next());
  });
}, ne;
(function(t) {
  t.uninitialized = "uninitialized", t.pending = "pending", t.fulfilled = "fulfilled", t.rejected = "rejected";
})(ne || (ne = {}));
function Kl(t) {
  return {
    status: t,
    isUninitialized: t === ne.uninitialized,
    isLoading: t === ne.pending,
    isSuccess: t === ne.fulfilled,
    isError: t === ne.rejected
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
var Ni = function(t) {
  return [].concat.apply([], t);
};
function Zl() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function ed() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var Mi = ot;
function is(t, e) {
  if (t === e || !(Mi(t) && Mi(e) || Array.isArray(t) && Array.isArray(e)))
    return e;
  for (var r = Object.keys(e), n = Object.keys(t), i = r.length === n.length, a = Array.isArray(e) ? [] : {}, s = 0, u = r; s < u.length; s++) {
    var o = u[s];
    a[o] = is(t[o], e[o]), i && (i = t[o] === a[o]);
  }
  return i ? t : a;
}
var xi = function() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return fetch.apply(void 0, t);
}, td = function(t) {
  return t.status >= 200 && t.status <= 299;
}, rd = function(t) {
  return /ion\/(vnd\.api\+)?json/.test(t.get("content-type") || "");
};
function Li(t) {
  if (!ot(t))
    return t;
  for (var e = ae({}, t), r = 0, n = Object.entries(e); r < n.length; r++) {
    var i = n[r], a = i[0], s = i[1];
    s === void 0 && delete e[a];
  }
  return e;
}
function nd(t) {
  var e = this;
  t === void 0 && (t = {});
  var r = t, n = r.baseUrl, i = r.prepareHeaders, a = i === void 0 ? function(E) {
    return E;
  } : i, s = r.fetchFn, u = s === void 0 ? xi : s, o = r.paramsSerializer, c = r.isJsonContentType, d = c === void 0 ? rd : c, p = r.jsonContentType, m = p === void 0 ? "application/json" : p, h = r.jsonReplacer, I = r.timeout, S = r.responseHandler, T = r.validateStatus, P = Di(r, [
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
  return typeof fetch > "u" && u === xi && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), function(E, g) {
    return Er(e, null, function() {
      var v, f, b, y, O, _, R, k, A, D, M, F, L, U, W, $, V, K, B, G, H, J, re, fe, ye, be, ge, ue, te, Ee, Ze, He, et, ct, We, Gt;
      return Ir(this, function(_e) {
        switch (_e.label) {
          case 0:
            return v = g.signal, f = g.getState, b = g.extra, y = g.endpoint, O = g.forced, _ = g.type, k = typeof E == "string" ? { url: E } : E, A = k.url, D = k.headers, M = D === void 0 ? new Headers(P.headers) : D, F = k.params, L = F === void 0 ? void 0 : F, U = k.responseHandler, W = U === void 0 ? S ?? "json" : U, $ = k.validateStatus, V = $ === void 0 ? T ?? td : $, K = k.timeout, B = K === void 0 ? I : K, G = Di(k, [
              "url",
              "headers",
              "params",
              "responseHandler",
              "validateStatus",
              "timeout"
            ]), H = ae(Te(ae({}, P), {
              signal: v
            }), G), M = new Headers(Li(M)), J = H, [4, a(M, {
              getState: f,
              extra: b,
              endpoint: y,
              forced: O,
              type: _
            })];
          case 1:
            J.headers = _e.sent() || M, re = function(he) {
              return typeof he == "object" && (ot(he) || Array.isArray(he) || typeof he.toJSON == "function");
            }, !H.headers.has("content-type") && re(H.body) && H.headers.set("content-type", m), re(H.body) && d(H.headers) && (H.body = JSON.stringify(H.body, h)), L && (fe = ~A.indexOf("?") ? "&" : "?", ye = o ? o(L) : new URLSearchParams(Li(L)), A += fe + ye), A = Xl(n, A), be = new Request(A, H), ge = new Request(A, H), R = { request: ge }, te = !1, Ee = B && setTimeout(function() {
              te = !0, g.abort();
            }, B), _e.label = 2;
          case 2:
            return _e.trys.push([2, 4, 5, 6]), [4, u(be)];
          case 3:
            return ue = _e.sent(), [3, 6];
          case 4:
            return Ze = _e.sent(), [2, {
              error: {
                status: te ? "TIMEOUT_ERROR" : "FETCH_ERROR",
                error: String(Ze)
              },
              meta: R
            }];
          case 5:
            return Ee && clearTimeout(Ee), [
              7
              /*endfinally*/
            ];
          case 6:
            He = ue.clone(), R.response = He, ct = "", _e.label = 7;
          case 7:
            return _e.trys.push([7, 9, , 10]), [4, Promise.all([
              w(ue, W).then(function(he) {
                return et = he;
              }, function(he) {
                return We = he;
              }),
              He.text().then(function(he) {
                return ct = he;
              }, function() {
              })
            ])];
          case 8:
            if (_e.sent(), We)
              throw We;
            return [3, 10];
          case 9:
            return Gt = _e.sent(), [2, {
              error: {
                status: "PARSING_ERROR",
                originalStatus: ue.status,
                data: ct,
                error: String(Gt)
              },
              meta: R
            }];
          case 10:
            return [2, V(ue, et) ? {
              data: et,
              meta: R
            } : {
              error: {
                status: ue.status,
                data: et
              },
              meta: R
            }];
        }
      });
    });
  };
  function w(E, g) {
    return Er(this, null, function() {
      var v;
      return Ir(this, function(f) {
        switch (f.label) {
          case 0:
            return typeof g == "function" ? [2, g(E)] : (g === "content-type" && (g = d(E.headers) ? "json" : "text"), g !== "json" ? [3, 2] : [4, E.text()]);
          case 1:
            return v = f.sent(), [2, v.length ? JSON.parse(v) : null];
          case 2:
            return [2, E.text()];
        }
      });
    });
  }
}
var Ui = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = void 0), this.value = e, this.meta = r;
    }
    return t;
  }()
), Dn = /* @__PURE__ */ It("__rtkq/focused"), as = /* @__PURE__ */ It("__rtkq/unfocused"), Nn = /* @__PURE__ */ It("__rtkq/online"), ss = /* @__PURE__ */ It("__rtkq/offline"), ke;
(function(t) {
  t.query = "query", t.mutation = "mutation";
})(ke || (ke = {}));
function os(t) {
  return t.type === ke.query;
}
function id(t) {
  return t.type === ke.mutation;
}
function Mn(t, e, r, n, i, a) {
  return ad(t) ? t(e, r, n, i).map(dn).map(a) : Array.isArray(t) ? t.map(dn).map(a) : [];
}
function ad(t) {
  return typeof t == "function";
}
function dn(t) {
  return typeof t == "string" ? { type: t } : t;
}
function Qr(t) {
  return t != null;
}
var jt = Symbol("forceQueryFn"), fn = function(t) {
  return typeof t[jt] == "function";
};
function sd(t) {
  var e = t.serializeQueryArgs, r = t.queryThunk, n = t.mutationThunk, i = t.api, a = t.context, s = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), o = i.internalActions, c = o.unsubscribeQueryResult, d = o.removeMutationResult, p = o.updateSubscriptionOptions;
  return {
    buildInitiateQuery: E,
    buildInitiateMutation: g,
    getRunningQueryThunk: I,
    getRunningMutationThunk: S,
    getRunningQueriesThunk: T,
    getRunningMutationsThunk: P,
    getRunningOperationPromises: h,
    removalWarning: m
  };
  function m() {
    throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`);
  }
  function h() {
    if (typeof process < "u" && process.env.NODE_ENV === "development")
      m();
    else {
      var v = function(f) {
        return Array.from(f.values()).flatMap(function(b) {
          return b ? Object.values(b) : [];
        });
      };
      return wr(wr([], v(s)), v(u)).filter(Qr);
    }
  }
  function I(v, f) {
    return function(b) {
      var y, O = a.endpointDefinitions[v], _ = e({
        queryArgs: f,
        endpointDefinition: O,
        endpointName: v
      });
      return (y = s.get(b)) == null ? void 0 : y[_];
    };
  }
  function S(v, f) {
    return function(b) {
      var y;
      return (y = u.get(b)) == null ? void 0 : y[f];
    };
  }
  function T() {
    return function(v) {
      return Object.values(s.get(v) || {}).filter(Qr);
    };
  }
  function P() {
    return function(v) {
      return Object.values(u.get(v) || {}).filter(Qr);
    };
  }
  function w(v) {
    if (process.env.NODE_ENV !== "production") {
      if (w.triggered)
        return;
      var f = v(i.internalActions.internal_probeSubscription({
        queryCacheKey: "DOES_NOT_EXIST",
        requestId: "DUMMY_REQUEST_ID"
      }));
      if (w.triggered = !0, typeof f != "boolean")
        throw new Error('Warning: Middleware for RTK-Query API at reducerPath "' + i.reducerPath + `" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function E(v, f) {
    var b = function(y, O) {
      var _ = O === void 0 ? {} : O, R = _.subscribe, k = R === void 0 ? !0 : R, A = _.forceRefetch, D = _.subscriptionOptions, M = jt, F = _[M];
      return function(L, U) {
        var W, $, V = e({
          queryArgs: y,
          endpointDefinition: f,
          endpointName: v
        }), K = r((W = {
          type: "query",
          subscribe: k,
          forceRefetch: A,
          subscriptionOptions: D,
          endpointName: v,
          originalArgs: y,
          queryCacheKey: V
        }, W[jt] = F, W)), B = i.endpoints[v].select(y), G = L(K), H = B(U());
        w(L);
        var J = G.requestId, re = G.abort, fe = H.requestId !== J, ye = ($ = s.get(L)) == null ? void 0 : $[V], be = function() {
          return B(U());
        }, ge = Object.assign(F ? G.then(be) : fe && !ye ? Promise.resolve(H) : Promise.all([ye, G]).then(be), {
          arg: y,
          requestId: J,
          subscriptionOptions: D,
          queryCacheKey: V,
          abort: re,
          unwrap: function() {
            return Er(this, null, function() {
              var te;
              return Ir(this, function(Ee) {
                switch (Ee.label) {
                  case 0:
                    return [4, ge];
                  case 1:
                    if (te = Ee.sent(), te.isError)
                      throw te.error;
                    return [2, te.data];
                }
              });
            });
          },
          refetch: function() {
            return L(b(y, { subscribe: !1, forceRefetch: !0 }));
          },
          unsubscribe: function() {
            k && L(c({
              queryCacheKey: V,
              requestId: J
            }));
          },
          updateSubscriptionOptions: function(te) {
            ge.subscriptionOptions = te, L(p({
              endpointName: v,
              requestId: J,
              queryCacheKey: V,
              options: te
            }));
          }
        });
        if (!ye && !fe && !F) {
          var ue = s.get(L) || {};
          ue[V] = ge, s.set(L, ue), ge.then(function() {
            delete ue[V], Object.keys(ue).length || s.delete(L);
          });
        }
        return ge;
      };
    };
    return b;
  }
  function g(v) {
    return function(f, b) {
      var y = b === void 0 ? {} : b, O = y.track, _ = O === void 0 ? !0 : O, R = y.fixedCacheKey;
      return function(k, A) {
        var D = n({
          type: "mutation",
          endpointName: v,
          originalArgs: f,
          track: _,
          fixedCacheKey: R
        }), M = k(D);
        w(k);
        var F = M.requestId, L = M.abort, U = M.unwrap, W = M.unwrap().then(function(B) {
          return { data: B };
        }).catch(function(B) {
          return { error: B };
        }), $ = function() {
          k(d({ requestId: F, fixedCacheKey: R }));
        }, V = Object.assign(W, {
          arg: M.arg,
          requestId: F,
          abort: L,
          unwrap: U,
          unsubscribe: $,
          reset: $
        }), K = u.get(k) || {};
        return u.set(k, K), K[F] = V, V.then(function() {
          delete K[F], Object.keys(K).length || u.delete(k);
        }), R && (K[R] = V, V.then(function() {
          K[R] === V && (delete K[R], Object.keys(K).length || u.delete(k));
        })), V;
      };
    };
  }
}
function Fi(t) {
  return t;
}
function od(t) {
  var e = this, r = t.reducerPath, n = t.baseQuery, i = t.context.endpointDefinitions, a = t.serializeQueryArgs, s = t.api, u = t.assertTagType, o = function(g, v, f, b) {
    return function(y, O) {
      var _ = i[g], R = a({
        queryArgs: v,
        endpointDefinition: _,
        endpointName: g
      });
      if (y(s.internalActions.queryResultPatched({ queryCacheKey: R, patches: f })), !!b) {
        var k = s.endpoints[g].select(v)(O()), A = Mn(_.providesTags, k.data, void 0, v, {}, u);
        y(s.internalActions.updateProvidedBy({ queryCacheKey: R, providedTags: A }));
      }
    };
  }, c = function(g, v, f, b) {
    return b === void 0 && (b = !0), function(y, O) {
      var _, R, k = s.endpoints[g], A = k.select(v)(O()), D = {
        patches: [],
        inversePatches: [],
        undo: function() {
          return y(s.util.patchQueryData(g, v, D.inversePatches, b));
        }
      };
      if (A.status === ne.uninitialized)
        return D;
      var M;
      if ("data" in A)
        if ($e(A.data)) {
          var F = ts(A.data, f), L = F[0], U = F[1], W = F[2];
          (_ = D.patches).push.apply(_, U), (R = D.inversePatches).push.apply(R, W), M = L;
        } else
          M = f(A.data), D.patches.push({ op: "replace", path: [], value: M }), D.inversePatches.push({
            op: "replace",
            path: [],
            value: A.data
          });
      return y(s.util.patchQueryData(g, v, D.patches, b)), D;
    };
  }, d = function(g, v, f) {
    return function(b) {
      var y;
      return b(s.endpoints[g].initiate(v, (y = {
        subscribe: !1,
        forceRefetch: !0
      }, y[jt] = function() {
        return {
          data: f
        };
      }, y)));
    };
  }, p = function(g, v) {
    return Er(e, [g, v], function(f, b) {
      var y, O, _, R, k, A, D, M, F, L, U, W, $, V, K, B, G, H, J = b.signal, re = b.abort, fe = b.rejectWithValue, ye = b.fulfillWithValue, be = b.dispatch, ge = b.getState, ue = b.extra;
      return Ir(this, function(te) {
        switch (te.label) {
          case 0:
            y = i[f.endpointName], te.label = 1;
          case 1:
            return te.trys.push([1, 8, , 13]), O = Fi, _ = void 0, R = {
              signal: J,
              abort: re,
              dispatch: be,
              getState: ge,
              extra: ue,
              endpoint: f.endpointName,
              type: f.type,
              forced: f.type === "query" ? m(f, ge()) : void 0
            }, k = f.type === "query" ? f[jt] : void 0, k ? (_ = k(), [3, 6]) : [3, 2];
          case 2:
            return y.query ? [4, n(y.query(f.originalArgs), R, y.extraOptions)] : [3, 4];
          case 3:
            return _ = te.sent(), y.transformResponse && (O = y.transformResponse), [3, 6];
          case 4:
            return [4, y.queryFn(f.originalArgs, R, y.extraOptions, function(Ee) {
              return n(Ee, R, y.extraOptions);
            })];
          case 5:
            _ = te.sent(), te.label = 6;
          case 6:
            if (typeof process < "u" && process.env.NODE_ENV === "development") {
              if (A = y.query ? "`baseQuery`" : "`queryFn`", D = void 0, !_)
                D = A + " did not return anything.";
              else if (typeof _ != "object")
                D = A + " did not return an object.";
              else if (_.error && _.data)
                D = A + " returned an object containing both `error` and `result`.";
              else if (_.error === void 0 && _.data === void 0)
                D = A + " returned an object containing neither a valid `error` and `result`. At least one of them should not be `undefined`";
              else
                for (M = 0, F = Object.keys(_); M < F.length; M++)
                  if (L = F[M], L !== "error" && L !== "data" && L !== "meta") {
                    D = "The object returned by " + A + " has the unknown property " + L + ".";
                    break;
                  }
              D && console.error("Error encountered handling the endpoint " + f.endpointName + `.
              ` + D + "\n              It needs to return an object with either the shape `{ data: <value> }` or `{ error: <value> }` that may contain an optional `meta` property.\n              Object returned was:", _);
            }
            if (_.error)
              throw new Ui(_.error, _.meta);
            return U = ye, [4, O(_.data, _.meta, f.originalArgs)];
          case 7:
            return [2, U.apply(void 0, [te.sent(), (G = {
              fulfilledTimeStamp: Date.now(),
              baseQueryMeta: _.meta
            }, G[Yt] = !0, G)])];
          case 8:
            if (W = te.sent(), $ = W, !($ instanceof Ui))
              return [3, 12];
            V = Fi, y.query && y.transformErrorResponse && (V = y.transformErrorResponse), te.label = 9;
          case 9:
            return te.trys.push([9, 11, , 12]), K = fe, [4, V($.value, $.meta, f.originalArgs)];
          case 10:
            return [2, K.apply(void 0, [te.sent(), (H = { baseQueryMeta: $.meta }, H[Yt] = !0, H)])];
          case 11:
            return B = te.sent(), $ = B, [3, 12];
          case 12:
            throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error('An unhandled error occurred processing a request for the endpoint "' + f.endpointName + `".
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
  function m(g, v) {
    var f, b, y, O, _ = (b = (f = v[r]) == null ? void 0 : f.queries) == null ? void 0 : b[g.queryCacheKey], R = (y = v[r]) == null ? void 0 : y.config.refetchOnMountOrArgChange, k = _ == null ? void 0 : _.fulfilledTimeStamp, A = (O = g.forceRefetch) != null ? O : g.subscribe && R;
    return A ? A === !0 || (Number(/* @__PURE__ */ new Date()) - Number(k)) / 1e3 >= A : !1;
  }
  var h = Kn(r + "/executeQuery", p, {
    getPendingMeta: function() {
      var g;
      return g = { startedTimeStamp: Date.now() }, g[Yt] = !0, g;
    },
    condition: function(g, v) {
      var f = v.getState, b, y, O, _ = f(), R = (y = (b = _[r]) == null ? void 0 : b.queries) == null ? void 0 : y[g.queryCacheKey], k = R == null ? void 0 : R.fulfilledTimeStamp, A = g.originalArgs, D = R == null ? void 0 : R.originalArgs, M = i[g.endpointName];
      return fn(g) ? !0 : (R == null ? void 0 : R.status) === "pending" ? !1 : m(g, _) || os(M) && ((O = M == null ? void 0 : M.forceRefetch) != null && O.call(M, {
        currentArg: A,
        previousArg: D,
        endpointState: R,
        state: _
      })) ? !0 : !k;
    },
    dispatchConditionRejection: !0
  }), I = Kn(r + "/executeMutation", p, {
    getPendingMeta: function() {
      var g;
      return g = { startedTimeStamp: Date.now() }, g[Yt] = !0, g;
    }
  }), S = function(g) {
    return "force" in g;
  }, T = function(g) {
    return "ifOlderThan" in g;
  }, P = function(g, v, f) {
    return function(b, y) {
      var O = S(f) && f.force, _ = T(f) && f.ifOlderThan, R = function(M) {
        return M === void 0 && (M = !0), s.endpoints[g].initiate(v, { forceRefetch: M });
      }, k = s.endpoints[g].select(v)(y());
      if (O)
        b(R());
      else if (_) {
        var A = k == null ? void 0 : k.fulfilledTimeStamp;
        if (!A) {
          b(R());
          return;
        }
        var D = (Number(/* @__PURE__ */ new Date()) - Number(new Date(A))) / 1e3 >= _;
        D && b(R());
      } else
        b(R(!1));
    };
  };
  function w(g) {
    return function(v) {
      var f, b;
      return ((b = (f = v == null ? void 0 : v.meta) == null ? void 0 : f.arg) == null ? void 0 : b.endpointName) === g;
    };
  }
  function E(g, v) {
    return {
      matchPending: xr(ta(g), w(v)),
      matchFulfilled: xr(wt(g), w(v)),
      matchRejected: xr(ra(g), w(v))
    };
  }
  return {
    queryThunk: h,
    mutationThunk: I,
    prefetch: P,
    updateQueryData: c,
    upsertQueryData: d,
    patchQueryData: o,
    buildMatchThunkActions: E
  };
}
function us(t, e, r, n) {
  return Mn(r[t.meta.arg.endpointName][e], wt(t) ? t.payload : void 0, hn(t) ? t.payload : void 0, t.meta.arg.originalArgs, "baseQueryMeta" in t.meta ? t.meta.baseQueryMeta : void 0, n);
}
function Zt(t, e, r) {
  var n = t[e];
  n && r(n);
}
function qt(t) {
  var e;
  return (e = "arg" in t ? t.arg.fixedCacheKey : t.fixedCacheKey) != null ? e : t.requestId;
}
function ji(t, e, r) {
  var n = t[qt(e)];
  n && r(n);
}
var Pt = {};
function ud(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.mutationThunk, i = t.context, a = i.endpointDefinitions, s = i.apiUid, u = i.extractRehydrationInfo, o = i.hasRehydrationInfo, c = t.assertTagType, d = t.config, p = It(e + "/resetApiState"), m = tt({
    name: e + "/queries",
    initialState: Pt,
    reducers: {
      removeQueryResult: {
        reducer: function(v, f) {
          var b = f.payload.queryCacheKey;
          delete v[b];
        },
        prepare: Tt()
      },
      queryResultPatched: {
        reducer: function(v, f) {
          var b = f.payload, y = b.queryCacheKey, O = b.patches;
          Zt(v, y, function(_) {
            _.data = Ai(_.data, O.concat());
          });
        },
        prepare: Tt()
      }
    },
    extraReducers: function(v) {
      v.addCase(r.pending, function(f, b) {
        var y = b.meta, O = b.meta.arg, _, R, k = fn(O);
        (O.subscribe || k) && ((R = f[_ = O.queryCacheKey]) != null || (f[_] = {
          status: ne.uninitialized,
          endpointName: O.endpointName
        })), Zt(f, O.queryCacheKey, function(A) {
          A.status = ne.pending, A.requestId = k && A.requestId ? A.requestId : y.requestId, O.originalArgs !== void 0 && (A.originalArgs = O.originalArgs), A.startedTimeStamp = y.startedTimeStamp;
        });
      }).addCase(r.fulfilled, function(f, b) {
        var y = b.meta, O = b.payload;
        Zt(f, y.arg.queryCacheKey, function(_) {
          var R;
          if (!(_.requestId !== y.requestId && !fn(y.arg))) {
            var k = a[y.arg.endpointName].merge;
            if (_.status = ne.fulfilled, k)
              if (_.data !== void 0) {
                var A = y.fulfilledTimeStamp, D = y.arg, M = y.baseQueryMeta, F = y.requestId, L = pn(_.data, function(U) {
                  return k(U, O, {
                    arg: D.originalArgs,
                    baseQueryMeta: M,
                    fulfilledTimeStamp: A,
                    requestId: F
                  });
                });
                _.data = L;
              } else
                _.data = O;
            else
              _.data = (R = a[y.arg.endpointName].structuralSharing) == null || R ? is(Be(_.data) ? Pl(_.data) : _.data, O) : O;
            delete _.error, _.fulfilledTimeStamp = y.fulfilledTimeStamp;
          }
        });
      }).addCase(r.rejected, function(f, b) {
        var y = b.meta, O = y.condition, _ = y.arg, R = y.requestId, k = b.error, A = b.payload;
        Zt(f, _.queryCacheKey, function(D) {
          if (!O) {
            if (D.requestId !== R)
              return;
            D.status = ne.rejected, D.error = A ?? k;
          }
        });
      }).addMatcher(o, function(f, b) {
        for (var y = u(b).queries, O = 0, _ = Object.entries(y); O < _.length; O++) {
          var R = _[O], k = R[0], A = R[1];
          ((A == null ? void 0 : A.status) === ne.fulfilled || (A == null ? void 0 : A.status) === ne.rejected) && (f[k] = A);
        }
      });
    }
  }), h = tt({
    name: e + "/mutations",
    initialState: Pt,
    reducers: {
      removeMutationResult: {
        reducer: function(v, f) {
          var b = f.payload, y = qt(b);
          y in v && delete v[y];
        },
        prepare: Tt()
      }
    },
    extraReducers: function(v) {
      v.addCase(n.pending, function(f, b) {
        var y = b.meta, O = b.meta, _ = O.requestId, R = O.arg, k = O.startedTimeStamp;
        R.track && (f[qt(y)] = {
          requestId: _,
          status: ne.pending,
          endpointName: R.endpointName,
          startedTimeStamp: k
        });
      }).addCase(n.fulfilled, function(f, b) {
        var y = b.payload, O = b.meta;
        O.arg.track && ji(f, O, function(_) {
          _.requestId === O.requestId && (_.status = ne.fulfilled, _.data = y, _.fulfilledTimeStamp = O.fulfilledTimeStamp);
        });
      }).addCase(n.rejected, function(f, b) {
        var y = b.payload, O = b.error, _ = b.meta;
        _.arg.track && ji(f, _, function(R) {
          R.requestId === _.requestId && (R.status = ne.rejected, R.error = y ?? O);
        });
      }).addMatcher(o, function(f, b) {
        for (var y = u(b).mutations, O = 0, _ = Object.entries(y); O < _.length; O++) {
          var R = _[O], k = R[0], A = R[1];
          ((A == null ? void 0 : A.status) === ne.fulfilled || (A == null ? void 0 : A.status) === ne.rejected) && k !== (A == null ? void 0 : A.requestId) && (f[k] = A);
        }
      });
    }
  }), I = tt({
    name: e + "/invalidation",
    initialState: Pt,
    reducers: {
      updateProvidedBy: {
        reducer: function(v, f) {
          for (var b, y, O, _, R = f.payload, k = R.queryCacheKey, A = R.providedTags, D = 0, M = Object.values(v); D < M.length; D++)
            for (var F = M[D], L = 0, U = Object.values(F); L < U.length; L++) {
              var W = U[L], $ = W.indexOf(k);
              $ !== -1 && W.splice($, 1);
            }
          for (var V = 0, K = A; V < K.length; V++) {
            var B = K[V], G = B.type, H = B.id, J = (_ = (y = (b = v[G]) != null ? b : v[G] = {})[O = H || "__internal_without_id"]) != null ? _ : y[O] = [], re = J.includes(k);
            re || J.push(k);
          }
        },
        prepare: Tt()
      }
    },
    extraReducers: function(v) {
      v.addCase(m.actions.removeQueryResult, function(f, b) {
        for (var y = b.payload.queryCacheKey, O = 0, _ = Object.values(f); O < _.length; O++)
          for (var R = _[O], k = 0, A = Object.values(R); k < A.length; k++) {
            var D = A[k], M = D.indexOf(y);
            M !== -1 && D.splice(M, 1);
          }
      }).addMatcher(o, function(f, b) {
        for (var y, O, _, R, k = u(b).provided, A = 0, D = Object.entries(k); A < D.length; A++)
          for (var M = D[A], F = M[0], L = M[1], U = 0, W = Object.entries(L); U < W.length; U++)
            for (var $ = W[U], V = $[0], K = $[1], B = (R = (O = (y = f[F]) != null ? y : f[F] = {})[_ = V || "__internal_without_id"]) != null ? R : O[_] = [], G = 0, H = K; G < H.length; G++) {
              var J = H[G], re = B.includes(J);
              re || B.push(J);
            }
      }).addMatcher(Zi(wt(r), hn(r)), function(f, b) {
        var y = us(b, "providesTags", a, c), O = b.meta.arg.queryCacheKey;
        I.caseReducers.updateProvidedBy(f, I.actions.updateProvidedBy({
          queryCacheKey: O,
          providedTags: y
        }));
      });
    }
  }), S = tt({
    name: e + "/subscriptions",
    initialState: Pt,
    reducers: {
      updateSubscriptionOptions: function(v, f) {
      },
      unsubscribeQueryResult: function(v, f) {
      },
      internal_probeSubscription: function(v, f) {
      }
    }
  }), T = tt({
    name: e + "/internalSubscriptions",
    initialState: Pt,
    reducers: {
      subscriptionsUpdated: {
        reducer: function(v, f) {
          return Ai(v, f.payload);
        },
        prepare: Tt()
      }
    }
  }), P = tt({
    name: e + "/config",
    initialState: ae({
      online: Zl(),
      focused: ed(),
      middlewareRegistered: !1
    }, d),
    reducers: {
      middlewareRegistered: function(v, f) {
        var b = f.payload;
        v.middlewareRegistered = v.middlewareRegistered === "conflict" || s !== b ? "conflict" : !0;
      }
    },
    extraReducers: function(v) {
      v.addCase(Nn, function(f) {
        f.online = !0;
      }).addCase(ss, function(f) {
        f.online = !1;
      }).addCase(Dn, function(f) {
        f.focused = !0;
      }).addCase(as, function(f) {
        f.focused = !1;
      }).addMatcher(o, function(f) {
        return ae({}, f);
      });
    }
  }), w = ea({
    queries: m.reducer,
    mutations: h.reducer,
    provided: I.reducer,
    subscriptions: T.reducer,
    config: P.reducer
  }), E = function(v, f) {
    return w(p.match(f) ? void 0 : v, f);
  }, g = Te(ae(ae(ae(ae(ae(ae({}, P.actions), m.actions), S.actions), T.actions), h.actions), I.actions), {
    unsubscribeMutationResult: h.actions.removeMutationResult,
    resetApiState: p
  });
  return { reducer: E, actions: g };
}
var it = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), cs = {
  status: ne.uninitialized
}, qi = /* @__PURE__ */ pn(cs, function() {
}), Bi = /* @__PURE__ */ pn(cs, function() {
});
function cd(t) {
  var e = t.serializeQueryArgs, r = t.reducerPath, n = function(d) {
    return qi;
  }, i = function(d) {
    return Bi;
  };
  return { buildQuerySelector: u, buildMutationSelector: o, selectInvalidatedBy: c };
  function a(d) {
    return ae(ae({}, d), Kl(d.status));
  }
  function s(d) {
    var p = d[r];
    if (process.env.NODE_ENV !== "production" && !p) {
      if (s.triggered)
        return p;
      s.triggered = !0, console.error("Error: No data found at `state." + r + "`. Did you forget to add the reducer to the store?");
    }
    return p;
  }
  function u(d, p) {
    return function(m) {
      var h = e({
        queryArgs: m,
        endpointDefinition: p,
        endpointName: d
      }), I = function(T) {
        var P, w, E;
        return (E = (w = (P = s(T)) == null ? void 0 : P.queries) == null ? void 0 : w[h]) != null ? E : qi;
      }, S = m === it ? n : I;
      return kt(S, a);
    };
  }
  function o() {
    return function(d) {
      var p, m;
      typeof d == "object" ? m = (p = qt(d)) != null ? p : it : m = d;
      var h = function(S) {
        var T, P, w;
        return (w = (P = (T = s(S)) == null ? void 0 : T.mutations) == null ? void 0 : P[m]) != null ? w : Bi;
      }, I = m === it ? i : h;
      return kt(I, a);
    };
  }
  function c(d, p) {
    for (var m, h = d[r], I = /* @__PURE__ */ new Set(), S = 0, T = p.map(dn); S < T.length; S++) {
      var P = T[S], w = h.provided[P.type];
      if (w)
        for (var E = (m = P.id !== void 0 ? w[P.id] : Ni(Object.values(w))) != null ? m : [], g = 0, v = E; g < v.length; g++) {
          var f = v[g];
          I.add(f);
        }
    }
    return Ni(Array.from(I.values()).map(function(b) {
      var y = h.queries[b];
      return y ? [
        {
          queryCacheKey: b,
          endpointName: y.endpointName,
          originalArgs: y.originalArgs
        }
      ] : [];
    }));
  }
}
var er = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, $i = function(t) {
  var e = t.endpointName, r = t.queryArgs, n = "", i = er == null ? void 0 : er.get(r);
  if (typeof i == "string")
    n = i;
  else {
    var a = JSON.stringify(r, function(s, u) {
      return ot(u) ? Object.keys(u).sort().reduce(function(o, c) {
        return o[c] = u[c], o;
      }, {}) : u;
    });
    ot(r) && (er == null || er.set(r, a)), n = a;
  }
  return e + "(" + n + ")";
};
function ld() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(n) {
    var i = ki(function(d) {
      var p, m;
      return (m = n.extractRehydrationInfo) == null ? void 0 : m.call(n, d, {
        reducerPath: (p = n.reducerPath) != null ? p : "api"
      });
    }), a = Te(ae({
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1
    }, n), {
      extractRehydrationInfo: i,
      serializeQueryArgs: function(d) {
        var p = $i;
        if ("serializeQueryArgs" in d.endpointDefinition) {
          var m = d.endpointDefinition.serializeQueryArgs;
          p = function(h) {
            var I = m(h);
            return typeof I == "string" ? I : $i(Te(ae({}, h), {
              queryArgs: I
            }));
          };
        } else
          n.serializeQueryArgs && (p = n.serializeQueryArgs);
        return p(d);
      },
      tagTypes: wr([], n.tagTypes || [])
    }), s = {
      endpointDefinitions: {},
      batch: function(d) {
        d();
      },
      apiUid: Fs(),
      extractRehydrationInfo: i,
      hasRehydrationInfo: ki(function(d) {
        return i(d) != null;
      })
    }, u = {
      injectEndpoints: c,
      enhanceEndpoints: function(d) {
        var p = d.addTagTypes, m = d.endpoints;
        if (p)
          for (var h = 0, I = p; h < I.length; h++) {
            var S = I[h];
            a.tagTypes.includes(S) || a.tagTypes.push(S);
          }
        if (m)
          for (var T = 0, P = Object.entries(m); T < P.length; T++) {
            var w = P[T], E = w[0], g = w[1];
            typeof g == "function" ? g(s.endpointDefinitions[E]) : Object.assign(s.endpointDefinitions[E] || {}, g);
          }
        return u;
      }
    }, o = t.map(function(d) {
      return d.init(u, a, s);
    });
    function c(d) {
      for (var p = d.endpoints({
        query: function(g) {
          return Te(ae({}, g), { type: ke.query });
        },
        mutation: function(g) {
          return Te(ae({}, g), { type: ke.mutation });
        }
      }), m = 0, h = Object.entries(p); m < h.length; m++) {
        var I = h[m], S = I[0], T = I[1];
        if (!d.overrideExisting && S in s.endpointDefinitions) {
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error("called `injectEndpoints` to override already-existing endpointName " + S + " without specifying `overrideExisting: true`");
          continue;
        }
        s.endpointDefinitions[S] = T;
        for (var P = 0, w = o; P < w.length; P++) {
          var E = w[P];
          E.injectEndpoint(S, T);
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
    var h = i.currentSubscriptions[m];
    return !!h && !dd(h);
  }
  var c = {}, d = function(m, h, I) {
    var S;
    if (u.match(m)) {
      var T = h.getState()[e], P = m.payload.queryCacheKey;
      p(P, (S = T.queries[P]) == null ? void 0 : S.endpointName, h, T.config);
    }
    if (r.util.resetApiState.match(m))
      for (var w = 0, E = Object.entries(c); w < E.length; w++) {
        var g = E[w], v = g[0], f = g[1];
        f && clearTimeout(f), delete c[v];
      }
    if (n.hasRehydrationInfo(m))
      for (var T = h.getState()[e], b = n.extractRehydrationInfo(m).queries, y = 0, O = Object.entries(b); y < O.length; y++) {
        var _ = O[y], P = _[0], R = _[1];
        p(P, R == null ? void 0 : R.endpointName, h, T.config);
      }
  };
  function p(m, h, I, S) {
    var T, P = n.endpointDefinitions[h], w = (T = P == null ? void 0 : P.keepUnusedDataFor) != null ? T : S.keepUnusedDataFor;
    if (w !== 1 / 0) {
      var E = Math.max(0, Math.min(w, fd));
      if (!o(m)) {
        var g = c[m];
        g && clearTimeout(g), c[m] = setTimeout(function() {
          o(m) || I.dispatch(s({ queryCacheKey: m })), delete c[m];
        }, E * 1e3);
      }
    }
  }
  return d;
}, pd = function(t) {
  var e = t.reducerPath, r = t.context, n = t.context.endpointDefinitions, i = t.mutationThunk, a = t.api, s = t.assertTagType, u = t.refetchQuery, o = a.internalActions.removeQueryResult, c = Zi(wt(i), hn(i)), d = function(m, h) {
    c(m) && p(us(m, "invalidatesTags", n, s), h), a.util.invalidateTags.match(m) && p(Mn(m.payload, void 0, void 0, void 0, void 0, s), h);
  };
  function p(m, h) {
    var I = h.getState(), S = I[e], T = a.util.selectInvalidatedBy(I, m);
    r.batch(function() {
      for (var P, w = Array.from(T.values()), E = 0, g = w; E < g.length; E++) {
        var v = g[E].queryCacheKey, f = S.queries[v], b = (P = S.subscriptions[v]) != null ? P : {};
        f && (Object.keys(b).length === 0 ? h.dispatch(o({
          queryCacheKey: v
        })) : f.status !== ne.uninitialized && h.dispatch(u(f, v)));
      }
    });
  }
  return d;
}, vd = function(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.api, i = t.refetchQuery, a = t.internalState, s = {}, u = function(h, I) {
    (n.internalActions.updateSubscriptionOptions.match(h) || n.internalActions.unsubscribeQueryResult.match(h)) && c(h.payload, I), (r.pending.match(h) || r.rejected.match(h) && h.meta.condition) && c(h.meta.arg, I), (r.fulfilled.match(h) || r.rejected.match(h) && !h.meta.condition) && o(h.meta.arg, I), n.util.resetApiState.match(h) && p();
  };
  function o(h, I) {
    var S = h.queryCacheKey, T = I.getState()[e], P = T.queries[S], w = a.currentSubscriptions[S];
    if (!(!P || P.status === ne.uninitialized)) {
      var E = m(w);
      if (Number.isFinite(E)) {
        var g = s[S];
        g != null && g.timeout && (clearTimeout(g.timeout), g.timeout = void 0);
        var v = Date.now() + E, f = s[S] = {
          nextPollTimestamp: v,
          pollingInterval: E,
          timeout: setTimeout(function() {
            f.timeout = void 0, I.dispatch(i(P, S));
          }, E)
        };
      }
    }
  }
  function c(h, I) {
    var S = h.queryCacheKey, T = I.getState()[e], P = T.queries[S], w = a.currentSubscriptions[S];
    if (!(!P || P.status === ne.uninitialized)) {
      var E = m(w);
      if (!Number.isFinite(E)) {
        d(S);
        return;
      }
      var g = s[S], v = Date.now() + E;
      (!g || v < g.nextPollTimestamp) && o({ queryCacheKey: S }, I);
    }
  }
  function d(h) {
    var I = s[h];
    I != null && I.timeout && clearTimeout(I.timeout), delete s[h];
  }
  function p() {
    for (var h = 0, I = Object.keys(s); h < I.length; h++) {
      var S = I[h];
      d(S);
    }
  }
  function m(h) {
    h === void 0 && (h = {});
    var I = Number.POSITIVE_INFINITY;
    for (var S in h)
      h[S].pollingInterval && (I = Math.min(h[S].pollingInterval, I));
    return I;
  }
  return u;
}, gd = function(t) {
  var e = t.reducerPath, r = t.context, n = t.api, i = t.refetchQuery, a = t.internalState, s = n.internalActions.removeQueryResult, u = function(c, d) {
    Dn.match(c) && o(d, "refetchOnFocus"), Nn.match(c) && o(d, "refetchOnReconnect");
  };
  function o(c, d) {
    var p = c.getState()[e], m = p.queries, h = a.currentSubscriptions;
    r.batch(function() {
      for (var I = 0, S = Object.keys(h); I < S.length; I++) {
        var T = S[I], P = m[T], w = h[T];
        if (!(!w || !P)) {
          var E = Object.values(w).some(function(g) {
            return g[d] === !0;
          }) || Object.values(w).every(function(g) {
            return g[d] === void 0;
          }) && p.config[d];
          E && (Object.keys(w).length === 0 ? c.dispatch(s({
            queryCacheKey: T
          })) : P.status !== ne.uninitialized && c.dispatch(i(P, T)));
        }
      }
    });
  }
  return u;
}, Vi = new Error("Promise never resolved before cacheEntryRemoved."), md = function(t) {
  var e = t.api, r = t.reducerPath, n = t.context, i = t.queryThunk, a = t.mutationThunk;
  t.internalState;
  var s = Gn(i), u = Gn(a), o = wt(i, a), c = {}, d = function(h, I, S) {
    var T = p(h);
    if (i.pending.match(h)) {
      var P = S[r].queries[T], w = I.getState()[r].queries[T];
      !P && w && m(h.meta.arg.endpointName, h.meta.arg.originalArgs, T, I, h.meta.requestId);
    } else if (a.pending.match(h)) {
      var w = I.getState()[r].mutations[T];
      w && m(h.meta.arg.endpointName, h.meta.arg.originalArgs, T, I, h.meta.requestId);
    } else if (o(h)) {
      var E = c[T];
      E != null && E.valueResolved && (E.valueResolved({
        data: h.payload,
        meta: h.meta.baseQueryMeta
      }), delete E.valueResolved);
    } else if (e.internalActions.removeQueryResult.match(h) || e.internalActions.removeMutationResult.match(h)) {
      var E = c[T];
      E && (delete c[T], E.cacheEntryRemoved());
    } else if (e.util.resetApiState.match(h))
      for (var g = 0, v = Object.entries(c); g < v.length; g++) {
        var f = v[g], b = f[0], E = f[1];
        delete c[b], E.cacheEntryRemoved();
      }
  };
  function p(h) {
    return s(h) ? h.meta.arg.queryCacheKey : u(h) ? h.meta.requestId : e.internalActions.removeQueryResult.match(h) ? h.payload.queryCacheKey : e.internalActions.removeMutationResult.match(h) ? qt(h.payload) : "";
  }
  function m(h, I, S, T, P) {
    var w = n.endpointDefinitions[h], E = w == null ? void 0 : w.onCacheEntryAdded;
    if (E) {
      var g = {}, v = new Promise(function(R) {
        g.cacheEntryRemoved = R;
      }), f = Promise.race([
        new Promise(function(R) {
          g.valueResolved = R;
        }),
        v.then(function() {
          throw Vi;
        })
      ]);
      f.catch(function() {
      }), c[S] = g;
      var b = e.endpoints[h].select(w.type === ke.query ? I : S), y = T.dispatch(function(R, k, A) {
        return A;
      }), O = Te(ae({}, T), {
        getCacheEntry: function() {
          return b(T.getState());
        },
        requestId: P,
        extra: y,
        updateCachedData: w.type === ke.query ? function(R) {
          return T.dispatch(e.util.updateQueryData(h, I, R));
        } : void 0,
        cacheDataLoaded: f,
        cacheEntryRemoved: v
      }), _ = E(I, O);
      Promise.resolve(_).catch(function(R) {
        if (R !== Vi)
          throw R;
      });
    }
  }
  return d;
}, yd = function(t) {
  var e = t.api, r = t.context, n = t.queryThunk, i = t.mutationThunk, a = ta(n, i), s = ra(n, i), u = wt(n, i), o = {}, c = function(d, p) {
    var m, h, I;
    if (a(d)) {
      var S = d.meta, T = S.requestId, P = S.arg, w = P.endpointName, E = P.originalArgs, g = r.endpointDefinitions[w], v = g == null ? void 0 : g.onQueryStarted;
      if (v) {
        var f = {}, b = new Promise(function(M, F) {
          f.resolve = M, f.reject = F;
        });
        b.catch(function() {
        }), o[T] = f;
        var y = e.endpoints[w].select(g.type === ke.query ? E : T), O = p.dispatch(function(M, F, L) {
          return L;
        }), _ = Te(ae({}, p), {
          getCacheEntry: function() {
            return y(p.getState());
          },
          requestId: T,
          extra: O,
          updateCachedData: g.type === ke.query ? function(M) {
            return p.dispatch(e.util.updateQueryData(w, E, M));
          } : void 0,
          queryFulfilled: b
        });
        v(E, _);
      }
    } else if (u(d)) {
      var R = d.meta, T = R.requestId, k = R.baseQueryMeta;
      (m = o[T]) == null || m.resolve({
        data: d.payload,
        meta: k
      }), delete o[T];
    } else if (s(d)) {
      var A = d.meta, T = A.requestId, D = A.rejectedWithValue, k = A.baseQueryMeta;
      (I = o[T]) == null || I.reject({
        error: (h = d.payload) != null ? h : d.error,
        isUnhandledError: !D,
        meta: k
      }), delete o[T];
    }
  };
  return c;
}, bd = function(t) {
  var e = t.api, r = t.context.apiUid, n = t.reducerPath;
  return function(i, a) {
    var s, u;
    e.util.resetApiState.match(i) && a.dispatch(e.internalActions.middlewareRegistered(r)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(i) && i.payload === r && ((u = (s = a.getState()[n]) == null ? void 0 : s.config) == null ? void 0 : u.middlewareRegistered) === "conflict" && console.warn('There is a mismatch between slice and middleware for the reducerPath "' + n + `".
You can only have one api per reducer path, this will lead to crashes in various situations!` + (n === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""));
  };
}, Hi, _d = typeof queueMicrotask == "function" ? queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis) : function(t) {
  return (Hi || (Hi = Promise.resolve())).then(t).catch(function(e) {
    return setTimeout(function() {
      throw e;
    }, 0);
  });
}, Id = function(t) {
  var e = t.api, r = t.queryThunk, n = t.internalState, i = e.reducerPath + "/subscriptions", a = null, s = !1, u = e.internalActions, o = u.updateSubscriptionOptions, c = u.unsubscribeQueryResult, d = function(p, m) {
    var h, I, S, T, P, w, E, g, v;
    if (o.match(m)) {
      var f = m.payload, b = f.queryCacheKey, y = f.requestId, O = f.options;
      return (h = p == null ? void 0 : p[b]) != null && h[y] && (p[b][y] = O), !0;
    }
    if (c.match(m)) {
      var _ = m.payload, b = _.queryCacheKey, y = _.requestId;
      return p[b] && delete p[b][y], !0;
    }
    if (e.internalActions.removeQueryResult.match(m))
      return delete p[m.payload.queryCacheKey], !0;
    if (r.pending.match(m)) {
      var R = m.meta, k = R.arg, y = R.requestId;
      if (k.subscribe) {
        var A = (S = p[I = k.queryCacheKey]) != null ? S : p[I] = {};
        return A[y] = (P = (T = k.subscriptionOptions) != null ? T : A[y]) != null ? P : {}, !0;
      }
    }
    if (r.rejected.match(m)) {
      var D = m.meta, M = D.condition, k = D.arg, y = D.requestId;
      if (M && k.subscribe) {
        var A = (E = p[w = k.queryCacheKey]) != null ? E : p[w] = {};
        return A[y] = (v = (g = k.subscriptionOptions) != null ? g : A[y]) != null ? v : {}, !0;
      }
    }
    return !1;
  };
  return function(p, m) {
    var h, I;
    if (a || (a = JSON.parse(JSON.stringify(n.currentSubscriptions))), e.util.resetApiState.match(p))
      return a = n.currentSubscriptions = {}, [!0, !1];
    if (e.internalActions.internal_probeSubscription.match(p)) {
      var S = p.payload, T = S.queryCacheKey, P = S.requestId, w = !!((h = n.currentSubscriptions[T]) != null && h[P]);
      return [!1, w];
    }
    var E = d(n.currentSubscriptions, p);
    if (E) {
      s || (_d(function() {
        var b = JSON.parse(JSON.stringify(n.currentSubscriptions)), y = ts(a, function() {
          return b;
        }), O = y[1];
        m.next(e.internalActions.subscriptionsUpdated(O)), a = b, s = !1;
      }), s = !0);
      var g = !!((I = p.type) != null && I.startsWith(i)), v = r.rejected.match(p) && p.meta.condition && !!p.meta.arg.subscribe, f = !g && !v;
      return [f, !1];
    }
    return [!0, !1];
  };
};
function wd(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.api, i = t.context, a = i.apiUid, s = {
    invalidateTags: It(e + "/invalidateTags")
  }, u = function(p) {
    return !!p && typeof p.type == "string" && p.type.startsWith(e + "/");
  }, o = [
    bd,
    hd,
    pd,
    vd,
    md,
    yd
  ], c = function(p) {
    var m = !1, h = {
      currentSubscriptions: {}
    }, I = Te(ae({}, t), {
      internalState: h,
      refetchQuery: d
    }), S = o.map(function(w) {
      return w(I);
    }), T = Id(I), P = gd(I);
    return function(w) {
      return function(E) {
        m || (m = !0, p.dispatch(n.internalActions.middlewareRegistered(a)));
        var g = Te(ae({}, p), { next: w }), v = p.getState(), f = T(E, g, v), b = f[0], y = f[1], O;
        if (b ? O = w(E) : O = y, p.getState()[e] && (P(E, g, v), u(E) || i.hasRehydrationInfo(E)))
          for (var _ = 0, R = S; _ < R.length; _++) {
            var k = R[_];
            k(E, g, v);
          }
        return O;
      };
    };
  };
  return { middleware: c, actions: s };
  function d(p, m, h) {
    return h === void 0 && (h = {}), r(ae({
      type: "query",
      endpointName: p.endpointName,
      originalArgs: p.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: m
    }, h));
  }
}
function Qe(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  Object.assign.apply(Object, wr([t], e));
}
var Wi = /* @__PURE__ */ Symbol(), Sd = function() {
  return {
    name: Wi,
    init: function(t, e, r) {
      var n = e.baseQuery, i = e.tagTypes, a = e.reducerPath, s = e.serializeQueryArgs, u = e.keepUnusedDataFor, o = e.refetchOnMountOrArgChange, c = e.refetchOnFocus, d = e.refetchOnReconnect;
      Ml();
      var p = function(B) {
        return typeof process < "u" && process.env.NODE_ENV === "development" && (i.includes(B.type) || console.error("Tag type '" + B.type + "' was used, but not specified in `tagTypes`!")), B;
      };
      Object.assign(t, {
        reducerPath: a,
        endpoints: {},
        internalActions: {
          onOnline: Nn,
          onOffline: ss,
          onFocus: Dn,
          onFocusLost: as
        },
        util: {}
      });
      var m = od({
        baseQuery: n,
        reducerPath: a,
        context: r,
        api: t,
        serializeQueryArgs: s,
        assertTagType: p
      }), h = m.queryThunk, I = m.mutationThunk, S = m.patchQueryData, T = m.updateQueryData, P = m.upsertQueryData, w = m.prefetch, E = m.buildMatchThunkActions, g = ud({
        context: r,
        queryThunk: h,
        mutationThunk: I,
        reducerPath: a,
        assertTagType: p,
        config: {
          refetchOnFocus: c,
          refetchOnReconnect: d,
          refetchOnMountOrArgChange: o,
          keepUnusedDataFor: u,
          reducerPath: a
        }
      }), v = g.reducer, f = g.actions;
      Qe(t.util, {
        patchQueryData: S,
        updateQueryData: T,
        upsertQueryData: P,
        prefetch: w,
        resetApiState: f.resetApiState
      }), Qe(t.internalActions, f);
      var b = wd({
        reducerPath: a,
        context: r,
        queryThunk: h,
        mutationThunk: I,
        api: t,
        assertTagType: p
      }), y = b.middleware, O = b.actions;
      Qe(t.util, O), Qe(t, { reducer: v, middleware: y });
      var _ = cd({
        serializeQueryArgs: s,
        reducerPath: a
      }), R = _.buildQuerySelector, k = _.buildMutationSelector, A = _.selectInvalidatedBy;
      Qe(t.util, { selectInvalidatedBy: A });
      var D = sd({
        queryThunk: h,
        mutationThunk: I,
        api: t,
        serializeQueryArgs: s,
        context: r
      }), M = D.buildInitiateQuery, F = D.buildInitiateMutation, L = D.getRunningMutationThunk, U = D.getRunningMutationsThunk, W = D.getRunningQueriesThunk, $ = D.getRunningQueryThunk, V = D.getRunningOperationPromises, K = D.removalWarning;
      return Qe(t.util, {
        getRunningOperationPromises: V,
        getRunningOperationPromise: K,
        getRunningMutationThunk: L,
        getRunningMutationsThunk: U,
        getRunningQueryThunk: $,
        getRunningQueriesThunk: W
      }), {
        name: Wi,
        injectEndpoint: function(B, G) {
          var H, J, re = t;
          (J = (H = re.endpoints)[B]) != null || (H[B] = {}), os(G) ? Qe(re.endpoints[B], {
            name: B,
            select: R(B, G),
            initiate: M(B, G)
          }, E(h, B)) : id(G) && Qe(re.endpoints[B], {
            name: B,
            select: k(),
            initiate: F(B)
          }, E(I, B));
        }
      };
    }
  };
}, Ed = globalThis && globalThis.__spreadArray || function(t, e) {
  for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
    t[i] = e[r];
  return t;
}, Td = Object.defineProperty, Od = Object.defineProperties, Rd = Object.getOwnPropertyDescriptors, zi = Object.getOwnPropertySymbols, Pd = Object.prototype.hasOwnProperty, Ad = Object.prototype.propertyIsEnumerable, Qi = function(t, e, r) {
  return e in t ? Td(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
}, De = function(t, e) {
  for (var r in e || (e = {}))
    Pd.call(e, r) && Qi(t, r, e[r]);
  if (zi)
    for (var n = 0, i = zi(e); n < i.length; n++) {
      var r = i[n];
      Ad.call(e, r) && Qi(t, r, e[r]);
    }
  return t;
}, ur = function(t, e) {
  return Od(t, Rd(e));
};
function Ki(t, e, r, n) {
  var i = we(function() {
    return {
      queryArgs: t,
      serialized: typeof t == "object" ? e({ queryArgs: t, endpointDefinition: r, endpointName: n }) : t
    };
  }, [t, e, r, n]), a = Se(i);
  return ce(function() {
    a.current.serialized !== i.serialized && (a.current = i);
  }, [i]), a.current.serialized === i.serialized ? a.current.queryArgs : t;
}
var Kr = Symbol();
function Gr(t) {
  var e = Se(t);
  return ce(function() {
    cr(e.current, t) || (e.current = t);
  }, [t]), cr(e.current, t) ? e.current : t;
}
var tr = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, kd = function(t) {
  var e = t.endpointName, r = t.queryArgs, n = "", i = tr == null ? void 0 : tr.get(r);
  if (typeof i == "string")
    n = i;
  else {
    var a = JSON.stringify(r, function(s, u) {
      return ot(u) ? Object.keys(u).sort().reduce(function(o, c) {
        return o[c] = u[c], o;
      }, {}) : u;
    });
    ot(r) && (tr == null || tr.set(r, a)), n = a;
  }
  return e + "(" + n + ")";
}, Cd = typeof window < "u" && window.document && window.document.createElement ? Ls : ce, Dd = function(t) {
  return t;
}, Nd = function(t) {
  return t.isUninitialized ? ur(De({}, t), {
    isUninitialized: !1,
    isFetching: !0,
    isLoading: t.data === void 0,
    status: ne.pending
  }) : t;
};
function Md(t) {
  var e = t.api, r = t.moduleOptions, n = r.batch, i = r.useDispatch, a = r.useSelector, s = r.useStore, u = r.unstable__sideEffectsInRender, o = t.serializeQueryArgs, c = t.context, d = u ? function(S) {
    return S();
  } : ce;
  return { buildQueryHooks: h, buildMutationHook: I, usePrefetch: m };
  function p(S, T, P) {
    if (T != null && T.endpointName && S.isUninitialized) {
      var w = T.endpointName, E = c.endpointDefinitions[w];
      o({
        queryArgs: T.originalArgs,
        endpointDefinition: E,
        endpointName: w
      }) === o({
        queryArgs: P,
        endpointDefinition: E,
        endpointName: w
      }) && (T = void 0);
    }
    var g = S.isSuccess ? S.data : T == null ? void 0 : T.data;
    g === void 0 && (g = S.data);
    var v = g !== void 0, f = S.isLoading, b = !v && f, y = S.isSuccess || f && v;
    return ur(De({}, S), {
      data: g,
      currentData: S.data,
      isFetching: f,
      isLoading: b,
      isSuccess: y
    });
  }
  function m(S, T) {
    var P = i(), w = Gr(T);
    return Jt(function(E, g) {
      return P(e.util.prefetch(S, E, De(De({}, w), g)));
    }, [S, P, w]);
  }
  function h(S) {
    var T = function(E, g) {
      var v = g === void 0 ? {} : g, f = v.refetchOnReconnect, b = v.refetchOnFocus, y = v.refetchOnMountOrArgChange, O = v.skip, _ = O === void 0 ? !1 : O, R = v.pollingInterval, k = R === void 0 ? 0 : R, A = e.endpoints[S].initiate, D = i(), M = Ki(_ ? it : E, kd, c.endpointDefinitions[S], S), F = Gr({
        refetchOnReconnect: f,
        refetchOnFocus: b,
        pollingInterval: k
      }), L = Se(!1), U = Se(), W = U.current || {}, $ = W.queryCacheKey, V = W.requestId, K = !1;
      if ($ && V) {
        var B = D(e.internalActions.internal_probeSubscription({
          queryCacheKey: $,
          requestId: V
        }));
        if (process.env.NODE_ENV !== "production" && typeof B != "boolean")
          throw new Error('Warning: Middleware for RTK-Query API at reducerPath "' + e.reducerPath + `" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
        K = !!B;
      }
      var G = !K && L.current;
      return d(function() {
        L.current = K;
      }), d(function() {
        G && (U.current = void 0);
      }, [G]), d(function() {
        var H, J = U.current;
        if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(G), M === it) {
          J == null || J.unsubscribe(), U.current = void 0;
          return;
        }
        var re = (H = U.current) == null ? void 0 : H.subscriptionOptions;
        if (!J || J.arg !== M) {
          J == null || J.unsubscribe();
          var fe = D(A(M, {
            subscriptionOptions: F,
            forceRefetch: y
          }));
          U.current = fe;
        } else
          F !== re && J.updateSubscriptionOptions(F);
      }, [
        D,
        A,
        y,
        M,
        F,
        G
      ]), ce(function() {
        return function() {
          var H;
          (H = U.current) == null || H.unsubscribe(), U.current = void 0;
        };
      }, []), we(function() {
        return {
          refetch: function() {
            var H;
            if (!U.current)
              throw new Error("Cannot refetch a query that has not been started yet.");
            return (H = U.current) == null ? void 0 : H.refetch();
          }
        };
      }, []);
    }, P = function(E) {
      var g = E === void 0 ? {} : E, v = g.refetchOnReconnect, f = g.refetchOnFocus, b = g.pollingInterval, y = b === void 0 ? 0 : b, O = e.endpoints[S].initiate, _ = i(), R = Qn(Kr), k = R[0], A = R[1], D = Se(), M = Gr({
        refetchOnReconnect: v,
        refetchOnFocus: f,
        pollingInterval: y
      });
      d(function() {
        var U, W, $ = (U = D.current) == null ? void 0 : U.subscriptionOptions;
        M !== $ && ((W = D.current) == null || W.updateSubscriptionOptions(M));
      }, [M]);
      var F = Se(M);
      d(function() {
        F.current = M;
      }, [M]);
      var L = Jt(function(U, W) {
        W === void 0 && (W = !1);
        var $;
        return n(function() {
          var V;
          (V = D.current) == null || V.unsubscribe(), D.current = $ = _(O(U, {
            subscriptionOptions: F.current,
            forceRefetch: !W
          })), A(U);
        }), $;
      }, [_, O]);
      return ce(function() {
        return function() {
          var U;
          (U = D == null ? void 0 : D.current) == null || U.unsubscribe();
        };
      }, []), ce(function() {
        k !== Kr && !D.current && L(k, !0);
      }, [k, L]), we(function() {
        return [L, k];
      }, [L, k]);
    }, w = function(E, g) {
      var v = g === void 0 ? {} : g, f = v.skip, b = f === void 0 ? !1 : f, y = v.selectFromResult, O = e.endpoints[S].select, _ = Ki(b ? it : E, o, c.endpointDefinitions[S], S), R = Se(), k = we(function() {
        return kt([
          O(_),
          function(L, U) {
            return U;
          },
          function(L) {
            return _;
          }
        ], p);
      }, [O, _]), A = we(function() {
        return y ? kt([k], y) : k;
      }, [k, y]), D = a(function(L) {
        return A(L, R.current);
      }, cr), M = s(), F = k(M.getState(), R.current);
      return Cd(function() {
        R.current = F;
      }, [F]), D;
    };
    return {
      useQueryState: w,
      useQuerySubscription: T,
      useLazyQuerySubscription: P,
      useLazyQuery: function(E) {
        var g = P(E), v = g[0], f = g[1], b = w(f, ur(De({}, E), {
          skip: f === Kr
        })), y = we(function() {
          return { lastArg: f };
        }, [f]);
        return we(function() {
          return [v, b, y];
        }, [v, b, y]);
      },
      useQuery: function(E, g) {
        var v = T(E, g), f = w(E, De({
          selectFromResult: E === it || g != null && g.skip ? void 0 : Nd
        }, g)), b = f.data, y = f.status, O = f.isLoading, _ = f.isSuccess, R = f.isError, k = f.error;
        return zn({ data: b, status: y, isLoading: O, isSuccess: _, isError: R, error: k }), we(function() {
          return De(De({}, f), v);
        }, [f, v]);
      }
    };
  }
  function I(S) {
    return function(T) {
      var P = T === void 0 ? {} : T, w = P.selectFromResult, E = w === void 0 ? Dd : w, g = P.fixedCacheKey, v = e.endpoints[S], f = v.select, b = v.initiate, y = i(), O = Qn(), _ = O[0], R = O[1];
      ce(function() {
        return function() {
          _ != null && _.arg.fixedCacheKey || _ == null || _.reset();
        };
      }, [_]);
      var k = Jt(function(J) {
        var re = y(b(J, { fixedCacheKey: g }));
        return R(re), re;
      }, [y, b, g]), A = (_ || {}).requestId, D = we(function() {
        return kt([f({ fixedCacheKey: g, requestId: _ == null ? void 0 : _.requestId })], E);
      }, [f, _, E, g]), M = a(D, cr), F = g == null ? _ == null ? void 0 : _.arg.originalArgs : void 0, L = Jt(function() {
        n(function() {
          _ && R(void 0), g && y(e.internalActions.removeMutationResult({
            requestId: A,
            fixedCacheKey: g
          }));
        });
      }, [y, g, _, A]), U = M.endpointName, W = M.data, $ = M.status, V = M.isLoading, K = M.isSuccess, B = M.isError, G = M.error;
      zn({
        endpointName: U,
        data: W,
        status: $,
        isLoading: V,
        isSuccess: K,
        isError: B,
        error: G
      });
      var H = we(function() {
        return ur(De({}, M), { originalArgs: F, reset: L });
      }, [M, F, L]);
      return we(function() {
        return [k, H];
      }, [k, H]);
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
function Jr(t) {
  return t.replace(t[0], t[0].toUpperCase());
}
function rr(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  Object.assign.apply(Object, Ed([t], e));
}
var Ud = /* @__PURE__ */ Symbol(), Fd = function(t) {
  var e = t === void 0 ? {} : t, r = e.batch, n = r === void 0 ? qs : r, i = e.useDispatch, a = i === void 0 ? Bs : i, s = e.useSelector, u = s === void 0 ? $s : s, o = e.useStore, c = o === void 0 ? Vs : o, d = e.unstable__sideEffectsInRender, p = d === void 0 ? !1 : d;
  return {
    name: Ud,
    init: function(m, h, I) {
      var S = h.serializeQueryArgs, T = m, P = Md({
        api: m,
        moduleOptions: {
          batch: n,
          useDispatch: a,
          useSelector: u,
          useStore: c,
          unstable__sideEffectsInRender: p
        },
        serializeQueryArgs: S,
        context: I
      }), w = P.buildQueryHooks, E = P.buildMutationHook, g = P.usePrefetch;
      return rr(T, { usePrefetch: g }), rr(I, { batch: n }), {
        injectEndpoint: function(v, f) {
          if (xd(f)) {
            var b = w(v), y = b.useQuery, O = b.useLazyQuery, _ = b.useLazyQuerySubscription, R = b.useQueryState, k = b.useQuerySubscription;
            rr(T.endpoints[v], {
              useQuery: y,
              useLazyQuery: O,
              useLazyQuerySubscription: _,
              useQueryState: R,
              useQuerySubscription: k
            }), m["use" + Jr(v) + "Query"] = y, m["useLazy" + Jr(v) + "Query"] = O;
          } else if (Ld(f)) {
            var A = E(v);
            rr(T.endpoints[v], {
              useMutation: A
            }), m["use" + Jr(v) + "Mutation"] = A;
          }
        }
      };
    }
  };
}, jd = /* @__PURE__ */ ld(Sd(), Fd());
const qd = nd({
  prepareHeaders: (t, { getState: e, endpoint: r }) => {
    const { isAuthenticated: n, refresh_token: i } = e().userReducer;
    return n && i && r === "updateLogin" && t.set(
      X.refreshTokenHeader,
      X.keywordRefreshTokenHeader ? `${X.keywordRefreshTokenHeader} ${i}` : i
    ), t.set("Content-Type", "application/json");
  }
}), Bd = async (t, e, r) => {
  const n = X.endpoint, i = typeof t == "string" ? n : { ...t, url: n + t.url };
  return qd(i, e, r);
}, st = jd({
  baseQuery: Bd,
  endpoints: (t) => ({
    login: t.mutation({
      query({ email: e, encodedBody: r, password: n, username: i, token: a }) {
        if (a)
          return {
            url: "",
            method: "POST",
            headers: {
              Authorization: `${X.keyword} ${a}`
            }
          };
        if (r)
          return {
            url: X.urlLoginForBase64 ?? "",
            method: "POST",
            headers: {
              authorization: "Basic " + r
            }
          };
        let s = {};
        return n && (s = { ...s, password: n }), e && (s = { ...s, email: e }), i && (s = { ...s, username: i }), {
          url: X.urlLoginForEmailOrUser ?? "",
          method: "POST",
          body: s
        };
      }
    }),
    signIn: t.mutation({
      query({ body: e, encodedBody: r }) {
        return r ? {
          url: X.urlSignInForBase64 ?? "sign-in",
          method: "POST",
          body: e
        } : {
          url: X.urlSignIn ?? "sign-in",
          method: "POST",
          body: e
        };
      }
    }),
    updateLogin: t.mutation({
      query() {
        return {
          url: X.urlForRefreshToken ?? "login/update",
          method: "PUT"
        };
      }
    }),
    passwordReset: t.mutation({
      query(e) {
        return {
          url: X.urlForPasswordReset ?? "reset-password",
          method: "POST",
          body: e
        };
      }
    })
  })
}), { useLoginMutation: $d, useUpdateLoginMutation: Vd, usePasswordResetMutation: Hd, useSignInMutation: Wd } = st;
const zd = ({ children: t, isLoading: e, scrollPosition: r, language: n, toastMessage: i }) => {
  const a = pe(""), s = pe({}), [u, { isSuccess: o, isLoading: c, error: d }] = Hd(), { message: p } = Xi(vn), m = Se(null), h = (I) => {
    I.preventDefault(), !o && u({
      email: a.value
    });
  };
  return ce(() => {
    if (m.current) {
      const I = m.current.offsetWidth;
      r.value ? (m.current.scrollTo(I, 0), m.current.scrollTo(I, 0)) : m.current.scrollTo(0, 0);
    }
  }, [r.value]), ce(() => {
    d ? "data" in d ? s.value = {
      code: "auth/password-reset-error",
      message: d.data && (Object.values(d.data).find((I) => typeof I == "string") ?? d.data)
    } : "status" in d && (s.value = {
      code: "auth/fetch-failed",
      message: "error" in d ? d.error : "Unexpected Error"
    }) : s.value.message && (s.value = {});
  }, [d]), ce(() => {
    o && (i.value = n.forgotPasswordLabel);
  }, [o]), /* @__PURE__ */ N.jsxs("section", { ref: m, className: "modal-container mandatory-scroll-snapping", children: [
    /* @__PURE__ */ N.jsxs("section", { className: "modal-data", children: [
      /* @__PURE__ */ N.jsx("div", { className: "modal-message", children: e ? /* @__PURE__ */ N.jsx(Gi, {}) : typeof p == "string" ? /* @__PURE__ */ N.jsx("h1", { children: p }) : p }),
      /* @__PURE__ */ N.jsx("div", { className: "modal-footer", children: t })
    ] }),
    /* @__PURE__ */ N.jsxs("section", { className: "password-recovery", children: [
      /* @__PURE__ */ N.jsx("span", { className: "go-back", onClick: () => r.value = !1, children: "<" }),
      /* @__PURE__ */ N.jsxs("form", { onSubmit: h, children: [
        /* @__PURE__ */ N.jsx("h1", { children: n.forgotPassword }),
        /* @__PURE__ */ N.jsxs("label", { children: [
          "Email:",
          /* @__PURE__ */ N.jsx("input", { required: !0, onChange: (I) => a.value = I.currentTarget.value, value: a.value, type: "email" })
        ] }),
        /* @__PURE__ */ N.jsx("button", { className: "is-btn blue", children: n.submit })
      ] }),
      /* @__PURE__ */ N.jsx(gs, { error: s.value }),
      c && /* @__PURE__ */ N.jsx(Gi, {})
    ] }),
    i.value && /* @__PURE__ */ N.jsxs("div", { className: "simple-toast show", children: [
      /* @__PURE__ */ N.jsx("button", { onClick: () => i.value = void 0, children: "X" }),
      /* @__PURE__ */ N.jsx("div", { className: "toast-message", children: i })
    ] })
  ] });
};
const Gi = () => /* @__PURE__ */ N.jsx("div", { className: "loader-container", children: /* @__PURE__ */ N.jsxs("div", { className: "loader-box", children: [
  /* @__PURE__ */ N.jsx("div", { className: "load blue" }),
  /* @__PURE__ */ N.jsx("div", { className: "load red" }),
  /* @__PURE__ */ N.jsx("div", { className: "load orange" }),
  /* @__PURE__ */ N.jsx("div", { className: "load yellow" }),
  /* @__PURE__ */ N.jsx("div", { className: "load green" })
] }) });
const Qd = (t, e) => {
  var r;
  return ((r = t.find((n) => n.code === "*" ? !0 : n.code === e.code)) == null ? void 0 : r.message) ?? e.message;
}, ls = "IS_GOOGLE", ds = "IS_FACEBOOK", fs = "IS_TWITTER", hs = "IS_GITHUB", ps = "IS_MICROSOFT", Kd = [
  {
    method: "google",
    constName: ls,
    name: "Google",
    className: "google-btn"
  },
  {
    method: "facebook",
    constName: ds,
    name: "Facebook",
    className: "facebook-btn"
    //icon: <FacebookIcon />
  },
  {
    method: "twitter",
    constName: fs,
    name: "Twitter",
    className: "twitter-btn"
    //icon: <TwitterIcon />
  },
  {
    method: "github",
    constName: hs,
    name: "GitHub",
    className: "github-btn"
    //icon: <GitHubIcon />
  },
  {
    method: "microsoft",
    constName: ps,
    name: "Microsoft",
    className: "microsoft-btn"
  }
], Gd = (t) => Kd.filter((e) => t.find((r) => e.method === r)), Jd = {
  es: {
    logIn: "Iniciar sesión",
    username: "Usuario",
    password: "Contraseña",
    confirm_password: "Confirmar contraseña",
    continue: "Continuar",
    submit: "Enviar",
    continueAs: "Continuar como:",
    loggedWith: "Logueado con",
    logOut: "Desloguearse",
    forgotPassword: "Recuperar contraseña",
    forgotPasswordLabel: "Email enviado correctamente.",
    signIn: "Crear cuenta",
    passwordNotMatch: "Las contraseñas no coinciden",
    minLength: "La contraseña debe contener mínimo 8 caracteres"
  },
  en: {
    logIn: "Log In",
    username: "Username",
    password: "Password",
    confirm_password: "Confirm Password",
    continue: "Continue",
    submit: "Submit",
    continueAs: "Continue as:",
    loggedWith: "Logged with",
    logOut: "Log Out",
    forgotPassword: "Password Recovery",
    forgotPasswordLabel: "Email sended successfully.",
    signIn: "Create account",
    passwordNotMatch: "Passwords do not match",
    minLength: "Passwords should contain a minimum of 8 characters"
  }
}, Yd = (t) => Jd[t], Xd = 1e3, Zd = 5e3, Sf = () => {
  const t = pe(void 0), e = pe(void 0), r = pe(void 0);
  let n = Se(void 0);
  const i = we(
    () => (a, s, u) => new Promise((o) => {
      if (clearInterval(n.current), n.current = void 0, a.message) {
        s.value = a.message;
        return;
      }
      if (!a.expiry) {
        e.value = {
          code: "auth/invalid-auth-response",
          message: "User response must have an expiry field"
        };
        return;
      }
      n.current = setInterval(() => {
        u().unwrap().then((c) => t.value = c).catch((c) => {
          t.value = void 0, clearInterval(n.current), "data" in c ? e.value = {
            code: "auth/firebase-credential-not-provided",
            message: c.data && (Object.values(c.data).find((d) => typeof d == "string") ?? c.data)
          } : "status" in c && (e.value = {
            code: "auth/fetch-failed",
            message: "error" in c ? c.error : "Unexpected Error"
          });
        });
      }, a.expiry * Xd - Zd), t.value = a, r.value = async () => {
        await La(Ve()).finally(() => clearInterval(n.current)), r.value = void 0;
      }, o();
    }),
    []
  );
  return ce(() => () => {
    n.current && clearInterval(n.current);
  }, []), {
    user: t.value,
    updateError: e.value,
    logOut: r.value,
    authManager: i
  };
};
var ft = /* @__PURE__ */ ((t) => (t.LOGIN = "login", t.SIGN_IN = "signIn", t))(ft || {});
const ef = (t) => Kt(Ve(), Za).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), vs = (t, e) => {
  const { code: r, message: n, customData: i } = t, { email: a } = i;
  e.value = {
    code: r,
    message: n,
    email: a
  };
}, tf = (t) => Kt(Ve(), Xa).catch((e) => vs(e, t)), rf = (t) => Kt(Ve(), Tl).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), nf = (t) => Kt(Ve(), Ol).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), af = (t) => Kt(Ve(), Rl).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), sf = {
  login: {
    email: "",
    password: "",
    username: ""
  },
  signIn: {
    email: "",
    username: "",
    password1: "",
    password2: ""
  }
}, of = (t, e) => {
  let r = "";
  const { password1: n, password2: i } = t;
  return n.length > 0 && n.length < 8 ? r = e.minLength : i.length > 0 && i !== n && (r = e.passwordNotMatch), r;
}, uf = (t, e, r, n) => {
  const [i] = $d(), [a] = Wd(), [s] = Vd(), u = pe(sf), o = pe(!1), c = pe(!1), d = pe(!1), p = pe({});
  ce(() => {
    d.value || (d.value = !0), Uc(Ve()).then((v) => {
      v && v.user.getIdToken().then((f) => E(f));
    }).catch((v) => {
      d.value && (d.value = !1), vs(v, p);
    });
  }, []);
  const m = () => {
    d.value = !1, n && n();
  }, h = (v) => {
    "data" in v ? p.value = {
      code: "auth/firebase-credential-not-provided",
      message: v.data && (Object.values(v.data).find((f) => typeof f == "string") ?? v.data)
    } : "status" in v && (p.value = {
      code: "auth/fetch-failed",
      message: "error" in v ? v.error : "Unexpected Error"
    }), d.value = !1;
  }, I = () => {
    Us(() => {
      o.value = !o.value, c.value && (c.value = !c.value);
    });
  }, S = (v) => {
    const { target: f } = v, b = f.getAttribute("data-section") ?? ft.LOGIN;
    if (u.value = {
      ...u.value,
      [b]: {
        ...u.value[b],
        [f.name]: f.value
      }
    }, b === ft.SIGN_IN) {
      const y = of(u.value[b], e);
      y ? p.value = {
        code: "sign-in/password",
        message: y
      } : p.value = {};
    }
  }, T = (v) => {
    if (X.hasToS && !o.value) {
      c.value = !0;
      return;
    }
    d.value = !0, E(v);
  }, P = async (v) => {
    if (v.preventDefault(), p.value = {}, X.hasToS && !o.value) {
      c.value = !0;
      return;
    }
    if (d.value)
      return;
    d.value = !0;
    const f = v.currentTarget.getAttribute("data-section") ?? ft.LOGIN;
    let b = {};
    if (f === ft.LOGIN) {
      if (X.acceptUsername ? b = {
        username: u.value[f].username,
        password: u.value[f].password
      } : b = {
        email: u.value[f].email,
        password: u.value[f].password
      }, X.bodyAsBase64) {
        const y = Object.entries(b).map(([_, R]) => `${_}=${R}`).join("&");
        b = {
          encodedBody: btoa(y)
        };
      }
      i(b).unwrap().then(w).catch(h);
    } else if (f === ft.SIGN_IN) {
      let y = u.value[f];
      if (X.bodyAsBase64) {
        const O = Object.entries(y).map(([_, R]) => `${_}=${R}`).join("&");
        y = btoa(O);
      }
      a({
        body: y,
        encodedBody: X.bodyAsBase64
      }).unwrap().then(w).catch(h);
    }
  }, w = async (v) => {
    t(v, r, s).then(m);
  }, E = async (v) => {
    d.value = !0, i({ token: v }).unwrap().then(w).catch(h);
  };
  return {
    form: u,
    radio: o,
    isLoading: d,
    handleError: p,
    confirmTp: c,
    handleChange: S,
    handleRadio: I,
    handleSocialLogin: async (v) => {
      if (X.hasToS && !o.value) {
        c.value = !0;
        return;
      }
      if (!d.value)
        switch (d.value = !0, v) {
          case ls:
            tf(p);
            break;
          case ds:
            ef(p);
            break;
          case fs:
            rf(p);
            break;
          case hs:
            nf(p);
            break;
          case ps:
            af(p);
            break;
        }
    },
    handleSubmit: P,
    handleSubmitUserAlreadyLogged: T,
    handleToken: E
  };
}, cf = () => {
  const t = pe(!1), e = pe(void 0), r = pe(void 0), { authManager: n, onSuccessFn: i } = Xi(vn), a = Yd(X.language), {
    form: s,
    radio: u,
    confirmTp: o,
    isLoading: c,
    handleError: d,
    handleSubmit: p,
    handleSubmitUserAlreadyLogged: m,
    handleChange: h,
    handleRadio: I,
    handleSocialLogin: S
  } = uf(n, a, e, i);
  return ce(() => {
    (async () => {
      c.value = !0;
      let P = lc(Ve(), async (w) => {
        w && await w.getIdToken().then((E) => {
          const g = w.providerData[0];
          r.value = {
            ...g,
            providerId: g.providerId.split(".")[0],
            tokenId: E
          };
        }).finally(() => c.value = !1), c.value = !1, P();
      });
    })();
  }, []), /* @__PURE__ */ N.jsx(
    zd,
    {
      isLoading: c.value,
      scrollPosition: t,
      language: a,
      toastMessage: e,
      children: /* @__PURE__ */ N.jsxs("div", { className: "login-container", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "login", children: [
          /* @__PURE__ */ N.jsx(lf, { handleSocialLogin: S }),
          /* @__PURE__ */ N.jsx(
            df,
            {
              forgotPassword: t,
              form: s,
              handleChange: h,
              handleSubmit: p,
              language: a
            }
          )
        ] }),
        /* @__PURE__ */ N.jsx(gs, { error: d.value }),
        /* @__PURE__ */ N.jsx(ff, { alreadyUser: r, language: a, handleSubmitUserAlreadyLogged: m }),
        /* @__PURE__ */ N.jsx(hf, { confirmTp: o.value, handleRadio: I, radioValue: u.value })
      ] })
    }
  );
}, lf = ({ handleSocialLogin: t }) => /* @__PURE__ */ N.jsx("div", { children: Gd(X.signInMethods).map(
  ({ className: e, name: r, constName: n, icon: i }, a) => /* @__PURE__ */ N.jsxs("button", { onClick: () => t(n), className: e, children: [
    i && i,
    r
  ] }, a)
) }), df = ({
  handleSubmit: t,
  language: e,
  handleChange: r,
  form: n,
  forgotPassword: i
}) => {
  const a = pe(!0), s = Se(null);
  return ce(() => {
    if (s.current) {
      const u = s.current.offsetWidth;
      s.current.scrollTo(a.value ? 0 : u, 0);
    }
  }, [a.value]), /* @__PURE__ */ N.jsx("div", { children: /* @__PURE__ */ N.jsxs("section", { ref: s, className: "form-email mandatory-scroll-snapping", children: [
    /* @__PURE__ */ N.jsxs("form", { className: "form-field", autoComplete: "on", "data-section": "login", onSubmit: t, children: [
      X.acceptUsername ? /* @__PURE__ */ N.jsx(N.Fragment, { children: /* @__PURE__ */ N.jsx("input", { required: !0, "data-section": "login", autoComplete: "username", placeholder: `Email | ${e.username}`, name: "username", onChange: r, value: n.value.login.username, type: "text" }) }) : /* @__PURE__ */ N.jsx(N.Fragment, { children: /* @__PURE__ */ N.jsx("input", { required: !0, "data-section": "login", autoComplete: "email", placeholder: "Email", name: "email", onChange: r, value: n.value.login.email, type: "email" }) }),
      /* @__PURE__ */ N.jsx("input", { required: !0, "data-section": "login", autoComplete: "current-password", placeholder: e.password, name: "password", onChange: r, value: n.value.login.password, type: "password" }),
      /* @__PURE__ */ N.jsx("span", { onClick: () => i.value = !0, className: "forgot-password", children: e.forgotPassword }),
      /* @__PURE__ */ N.jsx("button", { className: "email-login", children: e.logIn }),
      /* @__PURE__ */ N.jsx("span", { onClick: () => a.value = !1, className: "form-action-change", children: e.signIn })
    ] }),
    /* @__PURE__ */ N.jsxs("form", { className: "form-field", autoComplete: "on", "data-section": "signIn", onSubmit: t, children: [
      /* @__PURE__ */ N.jsx("input", { required: !0, "data-section": "signIn", autoComplete: "off", placeholder: "Email", name: "email", onChange: r, value: n.value.signIn.email, type: "email" }),
      /* @__PURE__ */ N.jsx("input", { required: !0, "data-section": "signIn", autoComplete: "off", placeholder: `${e.username}`, name: "username", onChange: r, value: n.value.signIn.username, type: "text" }),
      /* @__PURE__ */ N.jsx("input", { required: !0, "data-section": "signIn", autoComplete: "off", placeholder: e.password, name: "password1", onChange: r, value: n.value.signIn.password1, type: "password" }),
      /* @__PURE__ */ N.jsx("input", { required: !0, "data-section": "signIn", autoComplete: "off", placeholder: e.confirm_password, name: "password2", onChange: r, value: n.value.signIn.password2, type: "password" }),
      /* @__PURE__ */ N.jsx("button", { className: "email-login", children: e.signIn }),
      /* @__PURE__ */ N.jsx("span", { onClick: () => a.value = !0, className: "form-action-change", children: e.logIn })
    ] })
  ] }) });
}, ff = ({ alreadyUser: t, language: e, handleSubmitUserAlreadyLogged: r }) => {
  const n = () => {
    La(Ve()).finally(() => t.value = void 0);
  };
  return /* @__PURE__ */ N.jsx(N.Fragment, { children: t.value && /* @__PURE__ */ N.jsxs("section", { className: "user-already-logged", children: [
    /* @__PURE__ */ N.jsxs("p", { children: [
      e.continueAs,
      " ",
      t.value.displayName,
      t.value.photoURL && /* @__PURE__ */ N.jsx("img", { src: t.value.photoURL, alt: "user image" }),
      /* @__PURE__ */ N.jsxs("span", { children: [
        e.loggedWith,
        " ",
        t.value.providerId
      ] })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "user-logged-choice", children: [
      /* @__PURE__ */ N.jsx("button", { onClick: () => {
        var i;
        return r(((i = t.value) == null ? void 0 : i.tokenId) ?? "");
      }, className: "choice-ok", children: "Ok" }),
      /* @__PURE__ */ N.jsx("button", { onClick: n, className: "choice-not", children: e.logOut })
    ] })
  ] }) });
}, hf = ({ confirmTp: t, handleRadio: e, radioValue: r }) => {
  const n = Se(null);
  return ce(() => {
    t && n.current && n.current.scrollIntoView({ behavior: "smooth" });
  }, [t]), /* @__PURE__ */ N.jsx("section", { children: X.hasToS && /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxs("label", { className: "login-accept", children: [
      /* @__PURE__ */ N.jsx("input", { onChange: e, type: "checkbox", checked: r }),
      X.hasToS.label
    ] }),
    t && /* @__PURE__ */ N.jsx("span", { ref: n, className: "notify error", children: X.hasToS.errorLabel })
  ] }) });
}, gs = ({ error: t }) => {
  const e = (n) => /* @__PURE__ */ N.jsx(N.Fragment, { children: Object.entries(n).map(
    ([i, a], s) => /* @__PURE__ */ N.jsxs("span", { children: [
      i,
      ": ",
      a
    ] }, s)
  ) }), r = (n, i) => {
    const a = Qd(n, i);
    return /* @__PURE__ */ N.jsx(N.Fragment, { children: typeof i == "string" ? i : e(a) });
  };
  return /* @__PURE__ */ N.jsx(N.Fragment, { children: t.message && /* @__PURE__ */ N.jsx("span", { autoFocus: !0, className: "notify error", children: X.firebaseErrorMessages ? r(X.firebaseErrorMessages, t) : typeof t.message == "string" ? t.message : e(t.message) }) });
}, Ji = {
  user: null,
  isAuthenticated: !1,
  expiry: void 0,
  refresh_token: void 0,
  token: void 0
}, pf = tt({
  name: "UserSlice",
  initialState: Ji,
  reducers: {},
  extraReducers(t) {
    t.addMatcher(st.endpoints.login.matchFulfilled, (e, r) => (e = {
      ...r.payload,
      isAuthenticated: !0
    }, e)).addMatcher(st.endpoints.updateLogin.matchFulfilled, (e, r) => (e = {
      ...r.payload,
      isAuthenticated: !0
    }, e)).addMatcher(st.endpoints.updateLogin.matchRejected, (e) => (e = Ji, e));
  }
}), { reducer: vf } = pf, gf = ea({
  userReducer: vf,
  [st.reducerPath]: st.reducer
}), mf = js({
  reducer: gf,
  middleware: (t) => t().concat(st.middleware)
}), Ef = ({ message: t, authManager: e, onSuccessFn: r }) => El() ? /* @__PURE__ */ N.jsx(Hs, { store: mf, children: /* @__PURE__ */ N.jsx(vn.Provider, { value: { message: t, authManager: e, onSuccessFn: r }, children: /* @__PURE__ */ N.jsx(cf, {}) }) }) : /* @__PURE__ */ N.jsx("h1", { children: "Error: Missing firebaseConfig in setConfig" });
export {
  Ef as Auth,
  wf as setConfig,
  Sf as useAuth
};
