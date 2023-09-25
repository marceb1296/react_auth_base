import Xi, { createContext as Cs, useCallback as At, useMemo as we, useDebugValue as Qn, useState as Kn, useEffect as ue, useRef as Se, useLayoutEffect as Ds, useContext as pn } from "react";
import { useSignal as pe, batch as Ns } from "@preact/signals-react";
import { nanoid as xs, isPlainObject as ut, createAction as wt, createAsyncThunk as Gn, SHOULD_AUTOBATCH as Jt, createSlice as tt, prepareAutoBatched as Ot, isAnyOf as Zi, isFulfilled as St, isRejectedWithValue as vn, combineReducers as ea, createSelector as Dt, isAllOf as Lr, isPending as ta, isRejected as ra, createNextState as gn, isAsyncThunkAction as Jn, configureStore as Ms } from "@reduxjs/toolkit";
import { shallowEqual as ur, batch as Ls, useDispatch as Fs, useSelector as Us, useStore as js, Provider as qs } from "react-redux";
var Xr = { exports: {} }, Rt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn;
function Bs() {
  if (Yn)
    return Rt;
  Yn = 1;
  var t = Xi, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, o, l) {
    var g, f = {}, b = null, v = null;
    l !== void 0 && (b = "" + l), o.key !== void 0 && (b = "" + o.key), o.ref !== void 0 && (v = o.ref);
    for (g in o)
      n.call(o, g) && !a.hasOwnProperty(g) && (f[g] = o[g]);
    if (u && u.defaultProps)
      for (g in o = u.defaultProps, o)
        f[g] === void 0 && (f[g] = o[g]);
    return { $$typeof: e, type: u, key: b, ref: v, props: f, _owner: i.current };
  }
  return Rt.Fragment = r, Rt.jsx = s, Rt.jsxs = s, Rt;
}
var Pt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function $s() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Xi, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), I = Symbol.iterator, S = "@@iterator";
    function T(c) {
      if (c === null || typeof c != "object")
        return null;
      var D = I && c[I] || c[S];
      return typeof D == "function" ? D : null;
    }
    var O = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(c) {
      {
        for (var D = arguments.length, M = new Array(D > 1 ? D - 1 : 0), j = 1; j < D; j++)
          M[j - 1] = arguments[j];
        w("error", c, M);
      }
    }
    function w(c, D, M) {
      {
        var j = O.ReactDebugCurrentFrame, Y = j.getStackAddendum();
        Y !== "" && (D += "%s", M = M.concat([Y]));
        var Z = M.map(function(Q) {
          return String(Q);
        });
        Z.unshift("Warning: " + D), Function.prototype.apply.call(console[c], console, Z);
      }
    }
    var d = !1, p = !1, h = !1, y = !1, m = !1, R;
    R = Symbol.for("react.module.reference");
    function _(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === n || c === a || m || c === i || c === l || c === g || y || c === v || d || p || h || typeof c == "object" && c !== null && (c.$$typeof === b || c.$$typeof === f || c.$$typeof === s || c.$$typeof === u || c.$$typeof === o || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === R || c.getModuleId !== void 0));
    }
    function P(c, D, M) {
      var j = c.displayName;
      if (j)
        return j;
      var Y = D.displayName || D.name || "";
      return Y !== "" ? M + "(" + Y + ")" : M;
    }
    function A(c) {
      return c.displayName || "Context";
    }
    function k(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
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
        case g:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case u:
            var D = c;
            return A(D) + ".Consumer";
          case s:
            var M = c;
            return A(M._context) + ".Provider";
          case o:
            return P(c, c.render, "ForwardRef");
          case f:
            var j = c.displayName || null;
            return j !== null ? j : k(c.type) || "Memo";
          case b: {
            var Y = c, Z = Y._payload, Q = Y._init;
            try {
              return k(Q(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, x = 0, U, L, F, W, $, V, K;
    function B() {
    }
    B.__reactDisabledLog = !0;
    function G() {
      {
        if (x === 0) {
          U = console.log, L = console.info, F = console.warn, W = console.error, $ = console.group, V = console.groupCollapsed, K = console.groupEnd;
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
        x++;
      }
    }
    function H() {
      {
        if (x--, x === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, c, {
              value: U
            }),
            info: N({}, c, {
              value: L
            }),
            warn: N({}, c, {
              value: F
            }),
            error: N({}, c, {
              value: W
            }),
            group: N({}, c, {
              value: $
            }),
            groupCollapsed: N({}, c, {
              value: V
            }),
            groupEnd: N({}, c, {
              value: K
            })
          });
        }
        x < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = O.ReactCurrentDispatcher, re;
    function fe(c, D, M) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (Y) {
            var j = Y.stack.trim().match(/\n( *(at )?)/);
            re = j && j[1] || "";
          }
        return `
` + re + c;
      }
    }
    var ye = !1, be;
    {
      var ge = typeof WeakMap == "function" ? WeakMap : Map;
      be = new ge();
    }
    function ce(c, D) {
      if (!c || ye)
        return "";
      {
        var M = be.get(c);
        if (M !== void 0)
          return M;
      }
      var j;
      ye = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = J.current, J.current = null, G();
      try {
        if (D) {
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
            } catch (Me) {
              j = Me;
            }
            Reflect.construct(c, [], Q);
          } else {
            try {
              Q.call();
            } catch (Me) {
              j = Me;
            }
            c.call(Q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Me) {
            j = Me;
          }
          c();
        }
      } catch (Me) {
        if (Me && j && typeof Me.stack == "string") {
          for (var z = Me.stack.split(`
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
                    return c.displayName && Ie.includes("<anonymous>") && (Ie = Ie.replace("<anonymous>", c.displayName)), typeof c == "function" && be.set(c, Ie), Ie;
                  }
                while (se >= 1 && oe >= 0);
              break;
            }
        }
      } finally {
        ye = !1, J.current = Z, H(), Error.prepareStackTrace = Y;
      }
      var ft = c ? c.displayName || c.name : "", zn = ft ? fe(ft) : "";
      return typeof c == "function" && be.set(c, zn), zn;
    }
    function te(c, D, M) {
      return ce(c, !1);
    }
    function Te(c) {
      var D = c.prototype;
      return !!(D && D.isReactComponent);
    }
    function Ze(c, D, M) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return ce(c, Te(c));
      if (typeof c == "string")
        return fe(c);
      switch (c) {
        case l:
          return fe("Suspense");
        case g:
          return fe("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case o:
            return te(c.render);
          case f:
            return Ze(c.type, D, M);
          case b: {
            var j = c, Y = j._payload, Z = j._init;
            try {
              return Ze(Z(Y), D, M);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, et = {}, lt = O.ReactDebugCurrentFrame;
    function He(c) {
      if (c) {
        var D = c._owner, M = Ze(c.type, c._source, D ? D.type : null);
        lt.setExtraStackFrame(M);
      } else
        lt.setExtraStackFrame(null);
    }
    function Gt(c, D, M, j, Y) {
      {
        var Z = Function.call.bind(Ve);
        for (var Q in c)
          if (Z(c, Q)) {
            var z = void 0;
            try {
              if (typeof c[Q] != "function") {
                var de = Error((j || "React class") + ": " + M + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              z = c[Q](D, Q, j, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (se) {
              z = se;
            }
            z && !(z instanceof Error) && (He(Y), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", M, Q, typeof z), He(null)), z instanceof Error && !(z.message in et) && (et[z.message] = !0, He(Y), E("Failed %s type: %s", M, z.message), He(null));
          }
      }
    }
    var _e = Array.isArray;
    function he(c) {
      return _e(c);
    }
    function hs(c) {
      {
        var D = typeof Symbol == "function" && Symbol.toStringTag, M = D && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return M;
      }
    }
    function ps(c) {
      try {
        return Ln(c), !1;
      } catch {
        return !0;
      }
    }
    function Ln(c) {
      return "" + c;
    }
    function Fn(c) {
      if (ps(c))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hs(c)), Ln(c);
    }
    var Et = O.ReactCurrentOwner, vs = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Un, jn, Dr;
    Dr = {};
    function gs(c) {
      if (Ve.call(c, "ref")) {
        var D = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function ms(c) {
      if (Ve.call(c, "key")) {
        var D = Object.getOwnPropertyDescriptor(c, "key").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function ys(c, D) {
      if (typeof c.ref == "string" && Et.current && D && Et.current.stateNode !== D) {
        var M = k(Et.current.type);
        Dr[M] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(Et.current.type), c.ref), Dr[M] = !0);
      }
    }
    function bs(c, D) {
      {
        var M = function() {
          Un || (Un = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        M.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function _s(c, D) {
      {
        var M = function() {
          jn || (jn = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        M.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var Is = function(c, D, M, j, Y, Z, Q) {
      var z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: c,
        key: D,
        ref: M,
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
    function ws(c, D, M, j, Y) {
      {
        var Z, Q = {}, z = null, de = null;
        M !== void 0 && (Fn(M), z = "" + M), ms(D) && (Fn(D.key), z = "" + D.key), gs(D) && (de = D.ref, ys(D, Y));
        for (Z in D)
          Ve.call(D, Z) && !vs.hasOwnProperty(Z) && (Q[Z] = D[Z]);
        if (c && c.defaultProps) {
          var se = c.defaultProps;
          for (Z in se)
            Q[Z] === void 0 && (Q[Z] = se[Z]);
        }
        if (z || de) {
          var oe = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          z && bs(Q, oe), de && _s(Q, oe);
        }
        return Is(c, z, de, Y, j, Et.current, Q);
      }
    }
    var Nr = O.ReactCurrentOwner, qn = O.ReactDebugCurrentFrame;
    function dt(c) {
      if (c) {
        var D = c._owner, M = Ze(c.type, c._source, D ? D.type : null);
        qn.setExtraStackFrame(M);
      } else
        qn.setExtraStackFrame(null);
    }
    var xr;
    xr = !1;
    function Mr(c) {
      return typeof c == "object" && c !== null && c.$$typeof === e;
    }
    function Bn() {
      {
        if (Nr.current) {
          var c = k(Nr.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Ss(c) {
      {
        if (c !== void 0) {
          var D = c.fileName.replace(/^.*[\\\/]/, ""), M = c.lineNumber;
          return `

Check your code at ` + D + ":" + M + ".";
        }
        return "";
      }
    }
    var $n = {};
    function Ts(c) {
      {
        var D = Bn();
        if (!D) {
          var M = typeof c == "string" ? c : c.displayName || c.name;
          M && (D = `

Check the top-level render call using <` + M + ">.");
        }
        return D;
      }
    }
    function Vn(c, D) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var M = Ts(D);
        if ($n[M])
          return;
        $n[M] = !0;
        var j = "";
        c && c._owner && c._owner !== Nr.current && (j = " It was passed a child from " + k(c._owner.type) + "."), dt(c), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, j), dt(null);
      }
    }
    function Hn(c, D) {
      {
        if (typeof c != "object")
          return;
        if (he(c))
          for (var M = 0; M < c.length; M++) {
            var j = c[M];
            Mr(j) && Vn(j, D);
          }
        else if (Mr(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var Y = T(c);
          if (typeof Y == "function" && Y !== c.entries)
            for (var Z = Y.call(c), Q; !(Q = Z.next()).done; )
              Mr(Q.value) && Vn(Q.value, D);
        }
      }
    }
    function Es(c) {
      {
        var D = c.type;
        if (D == null || typeof D == "string")
          return;
        var M;
        if (typeof D == "function")
          M = D.propTypes;
        else if (typeof D == "object" && (D.$$typeof === o || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        D.$$typeof === f))
          M = D.propTypes;
        else
          return;
        if (M) {
          var j = k(D);
          Gt(M, c.props, "prop", j, c);
        } else if (D.PropTypes !== void 0 && !xr) {
          xr = !0;
          var Y = k(D);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Os(c) {
      {
        for (var D = Object.keys(c.props), M = 0; M < D.length; M++) {
          var j = D[M];
          if (j !== "children" && j !== "key") {
            dt(c), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), dt(null);
            break;
          }
        }
        c.ref !== null && (dt(c), E("Invalid attribute `ref` supplied to `React.Fragment`."), dt(null));
      }
    }
    function Wn(c, D, M, j, Y, Z) {
      {
        var Q = _(c);
        if (!Q) {
          var z = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = Ss(Y);
          de ? z += de : z += Bn();
          var se;
          c === null ? se = "null" : he(c) ? se = "array" : c !== void 0 && c.$$typeof === e ? (se = "<" + (k(c.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : se = typeof c, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", se, z);
        }
        var oe = ws(c, D, M, Y, Z);
        if (oe == null)
          return oe;
        if (Q) {
          var Ie = D.children;
          if (Ie !== void 0)
            if (j)
              if (he(Ie)) {
                for (var ft = 0; ft < Ie.length; ft++)
                  Hn(Ie[ft], c);
                Object.freeze && Object.freeze(Ie);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Hn(Ie, c);
        }
        return c === n ? Os(oe) : Es(oe), oe;
      }
    }
    function Rs(c, D, M) {
      return Wn(c, D, M, !0);
    }
    function Ps(c, D, M) {
      return Wn(c, D, M, !1);
    }
    var ks = Ps, As = Rs;
    Pt.Fragment = n, Pt.jsx = ks, Pt.jsxs = As;
  }()), Pt;
}
process.env.NODE_ENV === "production" ? Xr.exports = Bs() : Xr.exports = $s();
var C = Xr.exports;
const Er = Cs({});
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
}, Vs = function(t) {
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
      const a = t[i], s = i + 1 < t.length, u = s ? t[i + 1] : 0, o = i + 2 < t.length, l = o ? t[i + 2] : 0, g = a >> 2, f = (a & 3) << 4 | u >> 4;
      let b = (u & 15) << 2 | l >> 6, v = l & 63;
      o || (v = 64, s || (b = 64)), n.push(r[g], r[f], r[b], r[v]);
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
    return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : Vs(this.decodeStringToByteArray(t, e));
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
      const f = i < t.length ? r[t.charAt(i)] : 64;
      if (++i, a == null || u == null || l == null || f == null)
        throw new Hs();
      const b = a << 2 | u >> 4;
      if (n.push(b), l !== 64) {
        const v = u << 4 & 240 | l >> 2;
        if (n.push(v), f !== 64) {
          const I = l << 6 & 192 | f;
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
class Hs extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const Ws = function(t) {
  const e = na(t);
  return ia.encodeByteArray(e, !0);
}, aa = function(t) {
  return Ws(t).replace(/\./g, "");
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
function zs() {
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
const Qs = () => zs().__FIREBASE_DEFAULTS__, Ks = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const t = process.env.__FIREBASE_DEFAULTS__;
  if (t)
    return JSON.parse(t);
}, Gs = () => {
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
}, mn = () => {
  try {
    return Qs() || Ks() || Gs();
  } catch (t) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
    return;
  }
}, Js = (t) => {
  var e, r;
  return (r = (e = mn()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || r === void 0 ? void 0 : r[t];
}, oa = () => {
  var t;
  return (t = mn()) === null || t === void 0 ? void 0 : t.config;
}, ua = (t) => {
  var e;
  return (e = mn()) === null || e === void 0 ? void 0 : e[`_${t}`];
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
class Ys {
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
function Xs() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le());
}
function Zs() {
  const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function eo() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function to() {
  const t = le();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function ro() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function no() {
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
const io = "FirebaseError";
class Je extends Error {
  constructor(e, r, n) {
    super(r), this.code = e, this.customData = n, this.name = io, Object.setPrototypeOf(this, Je.prototype), Error.captureStackTrace && Error.captureStackTrace(this, $t.prototype.create);
  }
}
class $t {
  constructor(e, r, n) {
    this.service = e, this.serviceName = r, this.errors = n;
  }
  create(e, ...r) {
    const n = r[0] || {}, i = `${this.service}/${e}`, a = this.errors[e], s = a ? ao(a, n) : "Error", u = `${this.serviceName}: ${s} (${i}).`;
    return new Je(i, u, n);
  }
}
function ao(t, e) {
  return t.replace(so, (r, n) => {
    const i = e[n];
    return i != null ? String(i) : `<${n}?>`;
  });
}
const so = /\{\$([^}]+)}/g;
function oo(t) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e))
      return !1;
  return !0;
}
function cr(t, e) {
  if (t === e)
    return !0;
  const r = Object.keys(t), n = Object.keys(e);
  for (const i of r) {
    if (!n.includes(i))
      return !1;
    const a = t[i], s = e[i];
    if (Zn(a) && Zn(s)) {
      if (!cr(a, s))
        return !1;
    } else if (a !== s)
      return !1;
  }
  for (const i of n)
    if (!r.includes(i))
      return !1;
  return !0;
}
function Zn(t) {
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
function Vt(t) {
  const e = [];
  for (const [r, n] of Object.entries(t))
    Array.isArray(n) ? n.forEach((i) => {
      e.push(encodeURIComponent(r) + "=" + encodeURIComponent(i));
    }) : e.push(encodeURIComponent(r) + "=" + encodeURIComponent(n));
  return e.length ? "&" + e.join("&") : "";
}
function uo(t, e) {
  const r = new co(t, e);
  return r.subscribe.bind(r);
}
class co {
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
    lo(e, [
      "next",
      "error",
      "complete"
    ]) ? i = e : i = {
      next: e,
      error: r,
      complete: n
    }, i.next === void 0 && (i.next = Fr), i.error === void 0 && (i.error = Fr), i.complete === void 0 && (i.complete = Fr);
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
function lo(t, e) {
  if (typeof t != "object" || t === null)
    return !1;
  for (const r of e)
    if (r in t && typeof t[r] == "function")
      return !0;
  return !1;
}
function Fr() {
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
function Ye(t) {
  return t && t._delegate ? t._delegate : t;
}
class yt {
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
class fo {
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
      const n = new Ys();
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
      if (po(e))
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
      instanceIdentifier: ho(e),
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
function ho(t) {
  return t === rt ? void 0 : t;
}
function po(t) {
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
class vo {
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
    const r = new fo(e, this);
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
const go = {
  debug: ee.DEBUG,
  verbose: ee.VERBOSE,
  info: ee.INFO,
  warn: ee.WARN,
  error: ee.ERROR,
  silent: ee.SILENT
}, mo = ee.INFO, yo = {
  [ee.DEBUG]: "log",
  [ee.VERBOSE]: "log",
  [ee.INFO]: "info",
  [ee.WARN]: "warn",
  [ee.ERROR]: "error"
}, bo = (t, e, ...r) => {
  if (e < t.logLevel)
    return;
  const n = (/* @__PURE__ */ new Date()).toISOString(), i = yo[e];
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
    this.name = e, this._logLevel = mo, this._logHandler = bo, this._userLogHandler = null;
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
    this._logLevel = typeof e == "string" ? go[e] : e;
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
const _o = (t, e) => e.some((r) => t instanceof r);
let ei, ti;
function Io() {
  return ei || (ei = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function wo() {
  return ti || (ti = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const la = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap();
function So(t) {
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
    r instanceof IDBCursor && la.set(r, t);
  }).catch(() => {
  }), yn.set(e, t), e;
}
function To(t) {
  if (Zr.has(t))
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
  Zr.set(t, e);
}
let en = {
  get(t, e, r) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return Zr.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || da.get(t);
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
function Eo(t) {
  en = t(en);
}
function Oo(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...r) {
    const n = t.call(jr(this), e, ...r);
    return da.set(n, e.sort ? e.sort() : [e]), Qe(n);
  } : wo().includes(t) ? function(...e) {
    return t.apply(jr(this), e), Qe(la.get(this));
  } : function(...e) {
    return Qe(t.apply(jr(this), e));
  };
}
function Ro(t) {
  return typeof t == "function" ? Oo(t) : (t instanceof IDBTransaction && To(t), _o(t, Io()) ? new Proxy(t, en) : t);
}
function Qe(t) {
  if (t instanceof IDBRequest)
    return So(t);
  if (Ur.has(t))
    return Ur.get(t);
  const e = Ro(t);
  return e !== t && (Ur.set(t, e), yn.set(e, t)), e;
}
const jr = (t) => yn.get(t);
function Po(t, e, { blocked: r, upgrade: n, blocking: i, terminated: a } = {}) {
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
const ko = ["get", "getKey", "getAll", "getAllKeys", "count"], Ao = ["put", "add", "delete", "clear"], qr = /* @__PURE__ */ new Map();
function ri(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (qr.get(e))
    return qr.get(e);
  const r = e.replace(/FromIndex$/, ""), n = e !== r, i = Ao.includes(r);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(r in (n ? IDBIndex : IDBObjectStore).prototype) || !(i || ko.includes(r))
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
  return qr.set(e, a), a;
}
Eo((t) => ({
  ...t,
  get: (e, r, n) => ri(e, r) || t.get(e, r, n),
  has: (e, r) => !!ri(e, r) || t.has(e, r)
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
class Co {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((r) => {
      if (Do(r)) {
        const n = r.getImmediate();
        return `${n.library}/${n.version}`;
      } else
        return null;
    }).filter((r) => r).join(" ");
  }
}
function Do(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const tn = "@firebase/app", ni = "0.9.19";
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
const ct = new ca("@firebase/app"), No = "@firebase/app-compat", xo = "@firebase/analytics-compat", Mo = "@firebase/analytics", Lo = "@firebase/app-check-compat", Fo = "@firebase/app-check", Uo = "@firebase/auth", jo = "@firebase/auth-compat", qo = "@firebase/database", Bo = "@firebase/database-compat", $o = "@firebase/functions", Vo = "@firebase/functions-compat", Ho = "@firebase/installations", Wo = "@firebase/installations-compat", zo = "@firebase/messaging", Qo = "@firebase/messaging-compat", Ko = "@firebase/performance", Go = "@firebase/performance-compat", Jo = "@firebase/remote-config", Yo = "@firebase/remote-config-compat", Xo = "@firebase/storage", Zo = "@firebase/storage-compat", eu = "@firebase/firestore", tu = "@firebase/firestore-compat", ru = "firebase", nu = "10.4.0";
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
const rn = "[DEFAULT]", iu = {
  [tn]: "fire-core",
  [No]: "fire-core-compat",
  [Mo]: "fire-analytics",
  [xo]: "fire-analytics-compat",
  [Fo]: "fire-app-check",
  [Lo]: "fire-app-check-compat",
  [Uo]: "fire-auth",
  [jo]: "fire-auth-compat",
  [qo]: "fire-rtdb",
  [Bo]: "fire-rtdb-compat",
  [$o]: "fire-fn",
  [Vo]: "fire-fn-compat",
  [Ho]: "fire-iid",
  [Wo]: "fire-iid-compat",
  [zo]: "fire-fcm",
  [Qo]: "fire-fcm-compat",
  [Ko]: "fire-perf",
  [Go]: "fire-perf-compat",
  [Jo]: "fire-rc",
  [Yo]: "fire-rc-compat",
  [Xo]: "fire-gcs",
  [Zo]: "fire-gcs-compat",
  [eu]: "fire-fst",
  [tu]: "fire-fst-compat",
  "fire-js": "fire-js",
  [ru]: "fire-js-all"
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
const lr = /* @__PURE__ */ new Map(), nn = /* @__PURE__ */ new Map();
function au(t, e) {
  try {
    t.container.addComponent(e);
  } catch (r) {
    ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, r);
  }
}
function Mt(t) {
  const e = t.name;
  if (nn.has(e))
    return ct.debug(`There were multiple attempts to register component ${e}.`), !1;
  nn.set(e, t);
  for (const r of lr.values())
    au(r, t);
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
const su = {
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
}, Ke = new $t("app", "Firebase", su);
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
class ou {
  constructor(e, r, n) {
    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, r), this._name = r.name, this._automaticDataCollectionEnabled = r.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new yt(
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
const Ht = nu;
function ha(t, e = {}) {
  let r = t;
  typeof e != "object" && (e = { name: e });
  const n = Object.assign({ name: rn, automaticDataCollectionEnabled: !1 }, e), i = n.name;
  if (typeof i != "string" || !i)
    throw Ke.create("bad-app-name", {
      appName: String(i)
    });
  if (r || (r = oa()), !r)
    throw Ke.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const a = lr.get(i);
  if (a) {
    if (cr(r, a.options) && cr(n, a.config))
      return a;
    throw Ke.create("duplicate-app", { appName: i });
  }
  const s = new vo(i);
  for (const o of nn.values())
    s.addComponent(o);
  const u = new ou(r, n, s);
  return lr.set(i, u), u;
}
function uu(t = rn) {
  const e = lr.get(t);
  if (!e && t === rn && oa())
    return ha();
  if (!e)
    throw Ke.create("no-app", { appName: t });
  return e;
}
function pt(t, e, r) {
  var n;
  let i = (n = iu[t]) !== null && n !== void 0 ? n : t;
  r && (i += `-${r}`);
  const a = i.match(/\s|\//), s = e.match(/\s|\//);
  if (a || s) {
    const u = [
      `Unable to register library "${i}" with version "${e}":`
    ];
    a && u.push(`library name "${i}" contains illegal characters (whitespace or "/")`), a && s && u.push("and"), s && u.push(`version name "${e}" contains illegal characters (whitespace or "/")`), ct.warn(u.join(" "));
    return;
  }
  Mt(new yt(
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
const cu = "firebase-heartbeat-database", lu = 1, Lt = "firebase-heartbeat-store";
let Br = null;
function pa() {
  return Br || (Br = Po(cu, lu, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          t.createObjectStore(Lt);
      }
    }
  }).catch((t) => {
    throw Ke.create("idb-open", {
      originalErrorMessage: t.message
    });
  })), Br;
}
async function du(t) {
  try {
    return await (await pa()).transaction(Lt).objectStore(Lt).get(va(t));
  } catch (e) {
    if (e instanceof Je)
      ct.warn(e.message);
    else {
      const r = Ke.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message
      });
      ct.warn(r.message);
    }
  }
}
async function ii(t, e) {
  try {
    const n = (await pa()).transaction(Lt, "readwrite");
    await n.objectStore(Lt).put(e, va(t)), await n.done;
  } catch (r) {
    if (r instanceof Je)
      ct.warn(r.message);
    else {
      const n = Ke.create("idb-set", {
        originalErrorMessage: r == null ? void 0 : r.message
      });
      ct.warn(n.message);
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
const fu = 1024, hu = 30 * 24 * 60 * 60 * 1e3;
class pu {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const r = this.container.getProvider("app").getImmediate();
    this._storage = new gu(r), this._heartbeatsCachePromise = this._storage.read().then((n) => (this._heartbeatsCache = n, n));
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    const r = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), n = ai();
    if (this._heartbeatsCache === null && (this._heartbeatsCache = await this._heartbeatsCachePromise), !(this._heartbeatsCache.lastSentHeartbeatDate === n || this._heartbeatsCache.heartbeats.some((i) => i.date === n)))
      return this._heartbeatsCache.heartbeats.push({ date: n, agent: r }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((i) => {
        const a = new Date(i.date).valueOf();
        return Date.now() - a <= hu;
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
    const e = ai(), { heartbeatsToSend: r, unsentEntries: n } = vu(this._heartbeatsCache.heartbeats), i = aa(JSON.stringify({ version: 2, heartbeats: r }));
    return this._heartbeatsCache.lastSentHeartbeatDate = e, n.length > 0 ? (this._heartbeatsCache.heartbeats = n, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i;
  }
}
function ai() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function vu(t, e = fu) {
  const r = [];
  let n = t.slice();
  for (const i of t) {
    const a = r.find((s) => s.agent === i.agent);
    if (a) {
      if (a.dates.push(i.date), si(r) > e) {
        a.dates.pop();
        break;
      }
    } else if (r.push({
      agent: i.agent,
      dates: [i.date]
    }), si(r) > e) {
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
class gu {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return ro() ? no().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    return await this._canUseIndexedDBPromise ? await du(this.app) || { heartbeats: [] } : { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    var r;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return ii(this.app, {
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
      return ii(this.app, {
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
function si(t) {
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
function mu(t) {
  Mt(new yt(
    "platform-logger",
    (e) => new Co(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), Mt(new yt(
    "heartbeat",
    (e) => new pu(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), pt(tn, ni, t), pt(tn, ni, "esm2017"), pt("fire-js", "");
}
mu("");
function bn(t, e) {
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
const yu = ga, ma = new $t("auth", "Firebase", ga());
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
const dr = new ca("@firebase/auth");
function bu(t, ...e) {
  dr.logLevel <= ee.WARN && dr.warn(`Auth (${Ht}): ${t}`, ...e);
}
function rr(t, ...e) {
  dr.logLevel <= ee.ERROR && dr.error(`Auth (${Ht}): ${t}`, ...e);
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
function Ne(t, ...e) {
  throw _n(t, ...e);
}
function Ae(t, ...e) {
  return _n(t, ...e);
}
function ya(t, e, r) {
  const n = Object.assign(Object.assign({}, yu()), { [e]: r });
  return new $t("auth", "Firebase", n).create(e, {
    appName: t.name
  });
}
function _u(t, e, r) {
  const n = r;
  if (!(e instanceof n))
    throw n.name !== e.constructor.name && Ne(
      t,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), ya(t, "argument-error", `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
}
function _n(t, ...e) {
  if (typeof t != "string") {
    const r = e[0], n = [...e.slice(1)];
    return n[0] && (n[0].appName = t.name), t._errorFactory.create(r, ...n);
  }
  return ma.create(t, ...e);
}
function q(t, e, ...r) {
  if (!t)
    throw _n(e, ...r);
}
function Fe(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw rr(e), new Error(e);
}
function je(t, e) {
  t || Fe(e);
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
function an() {
  var t;
  return typeof self < "u" && ((t = self.location) === null || t === void 0 ? void 0 : t.href) || "";
}
function Iu() {
  return oi() === "http:" || oi() === "https:";
}
function oi() {
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
function wu() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (Iu() || Zs() || "connection" in navigator) ? navigator.onLine : !0;
}
function Su() {
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
class Wt {
  constructor(e, r) {
    this.shortDelay = e, this.longDelay = r, je(r > e, "Short delay should be less than long delay!"), this.isMobile = Xs() || eo();
  }
  get() {
    return wu() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
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
function In(t, e) {
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
    Fe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl)
      return this.headersImpl;
    if (typeof self < "u" && "Headers" in self)
      return self.Headers;
    Fe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl)
      return this.responseImpl;
    if (typeof self < "u" && "Response" in self)
      return self.Response;
    Fe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
const Tu = {
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
const Eu = new Wt(3e4, 6e4);
function _a(t, e) {
  return t.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId }) : e;
}
async function zt(t, e, r, n, i = {}) {
  return Ia(t, i, async () => {
    let a = {}, s = {};
    n && (e === "GET" ? s = n : a = {
      body: JSON.stringify(n)
    });
    const u = Vt(Object.assign({ key: t.config.apiKey }, s)).slice(1), o = await t._getAdditionalHeaders();
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
  const n = Object.assign(Object.assign({}, Tu), e);
  try {
    const i = new Ru(t), a = await Promise.race([
      r(),
      i.promise
    ]);
    i.clearNetworkTimeout();
    const s = await a.json();
    if ("needConfirmation" in s)
      throw Yt(t, "account-exists-with-different-credential", s);
    if (a.ok && !("errorMessage" in s))
      return s;
    {
      const u = a.ok ? s.errorMessage : s.error.message, [o, l] = u.split(" : ");
      if (o === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Yt(t, "credential-already-in-use", s);
      if (o === "EMAIL_EXISTS")
        throw Yt(t, "email-already-in-use", s);
      if (o === "USER_DISABLED")
        throw Yt(t, "user-disabled", s);
      const g = n[o] || o.toLowerCase().replace(/[_\s]+/g, "-");
      if (l)
        throw ya(t, g, l);
      Ne(t, g);
    }
  } catch (i) {
    if (i instanceof Je)
      throw i;
    Ne(t, "network-request-failed", { message: String(i) });
  }
}
async function Ou(t, e, r, n, i = {}) {
  const a = await zt(t, e, r, n, i);
  return "mfaPendingCredential" in a && Ne(t, "multi-factor-auth-required", {
    _serverResponse: a
  }), a;
}
function wa(t, e, r, n) {
  const i = `${e}${r}?${n}`;
  return t.config.emulator ? In(t.config, i) : `${t.config.apiScheme}://${i}`;
}
class Ru {
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((r, n) => {
      this.timer = setTimeout(() => n(Ae(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), Eu.get());
    });
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function Yt(t, e, r) {
  const n = {
    appName: t.name
  };
  r.email && (n.email = r.email), r.phoneNumber && (n.phoneNumber = r.phoneNumber);
  const i = Ae(t, e, n);
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
async function Pu(t, e) {
  return zt(t, "POST", "/v1/accounts:delete", e);
}
async function ku(t, e) {
  return zt(t, "POST", "/v1/accounts:lookup", e);
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
function Nt(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function Au(t, e = !1) {
  const r = Ye(t), n = await r.getIdToken(e), i = wn(n);
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
    authTime: Nt($r(i.auth_time)),
    issuedAtTime: Nt($r(i.iat)),
    expirationTime: Nt($r(i.exp)),
    signInProvider: s || null,
    signInSecondFactor: (a == null ? void 0 : a.sign_in_second_factor) || null
  };
}
function $r(t) {
  return Number(t) * 1e3;
}
function wn(t) {
  const [e, r, n] = t.split(".");
  if (e === void 0 || r === void 0 || n === void 0)
    return rr("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = sa(r);
    return i ? JSON.parse(i) : (rr("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return rr("Caught error parsing JWT payload as JSON", i == null ? void 0 : i.toString()), null;
  }
}
function Cu(t) {
  const e = wn(t);
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
async function Ft(t, e, r = !1) {
  if (r)
    return e;
  try {
    return await e;
  } catch (n) {
    throw n instanceof Je && Du(n) && t.auth.currentUser === t && await t.auth.signOut(), n;
  }
}
function Du({ code: t }) {
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
class Nu {
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
    this.lastSignInTime = Nt(this.lastLoginAt), this.creationTime = Nt(this.createdAt);
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
async function fr(t) {
  var e;
  const r = t.auth, n = await t.getIdToken(), i = await Ft(t, ku(r, { idToken: n }));
  q(
    i == null ? void 0 : i.users.length,
    r,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const a = i.users[0];
  t._notifyReloadListener(a);
  const s = !((e = a.providerUserInfo) === null || e === void 0) && e.length ? Lu(a.providerUserInfo) : [], u = Mu(t.providerData, s), o = t.isAnonymous, l = !(t.email && a.passwordHash) && !(u != null && u.length), g = o ? l : !1, f = {
    uid: a.localId,
    displayName: a.displayName || null,
    photoURL: a.photoUrl || null,
    email: a.email || null,
    emailVerified: a.emailVerified || !1,
    phoneNumber: a.phoneNumber || null,
    tenantId: a.tenantId || null,
    providerData: u,
    metadata: new Sa(a.createdAt, a.lastLoginAt),
    isAnonymous: g
  };
  Object.assign(t, f);
}
async function xu(t) {
  const e = Ye(t);
  await fr(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function Mu(t, e) {
  return [...t.filter((n) => !e.some((i) => i.providerId === n.providerId)), ...e];
}
function Lu(t) {
  return t.map((e) => {
    var { providerId: r } = e, n = bn(e, ["providerId"]);
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
async function Fu(t, e) {
  const r = await Ia(t, {}, async () => {
    const n = Vt({
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
    const r = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : Cu(e.idToken);
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
    const { accessToken: n, refreshToken: i, expiresIn: a } = await Fu(e, r);
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
    return Fe("not implemented");
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
function We(t, e) {
  q(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class st {
  constructor(e) {
    var { uid: r, auth: n, stsTokenManager: i } = e, a = bn(e, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase", this.proactiveRefresh = new Nu(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = r, this.auth = n, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = a.displayName || null, this.email = a.email || null, this.emailVerified = a.emailVerified || !1, this.phoneNumber = a.phoneNumber || null, this.photoURL = a.photoURL || null, this.isAnonymous = a.isAnonymous || !1, this.tenantId = a.tenantId || null, this.providerData = a.providerData ? [...a.providerData] : [], this.metadata = new Sa(a.createdAt || void 0, a.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const r = await Ft(this, this.stsTokenManager.getToken(this.auth, e));
    return q(
      r,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== r && (this.accessToken = r, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), r;
  }
  getIdTokenResult(e) {
    return Au(this, e);
  }
  reload() {
    return xu(this);
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
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), n = !0), r && await fr(this), await this.auth._persistUserIfCurrent(this), n && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const e = await this.getIdToken();
    return await Ft(this, Pu(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
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
    var n, i, a, s, u, o, l, g;
    const f = (n = r.displayName) !== null && n !== void 0 ? n : void 0, b = (i = r.email) !== null && i !== void 0 ? i : void 0, v = (a = r.phoneNumber) !== null && a !== void 0 ? a : void 0, I = (s = r.photoURL) !== null && s !== void 0 ? s : void 0, S = (u = r.tenantId) !== null && u !== void 0 ? u : void 0, T = (o = r._redirectEventId) !== null && o !== void 0 ? o : void 0, O = (l = r.createdAt) !== null && l !== void 0 ? l : void 0, E = (g = r.lastLoginAt) !== null && g !== void 0 ? g : void 0, { uid: w, emailVerified: d, isAnonymous: p, providerData: h, stsTokenManager: y } = r;
    q(
      w && y,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const m = Ut.fromJSON(this.name, y);
    q(
      typeof w == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), We(f, e.name), We(b, e.name), q(
      typeof d == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), q(
      typeof p == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), We(v, e.name), We(I, e.name), We(S, e.name), We(T, e.name), We(O, e.name), We(E, e.name);
    const R = new st({
      uid: w,
      auth: e,
      email: b,
      emailVerified: d,
      displayName: f,
      isAnonymous: p,
      photoURL: I,
      phoneNumber: v,
      tenantId: S,
      stsTokenManager: m,
      createdAt: O,
      lastLoginAt: E
    });
    return h && Array.isArray(h) && (R.providerData = h.map((_) => Object.assign({}, _))), T && (R._redirectEventId = T), R;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, r, n = !1) {
    const i = new Ut();
    i.updateFromServerResponse(r);
    const a = new st({
      uid: r.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: n
    });
    return await fr(a), a;
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
const ui = /* @__PURE__ */ new Map();
function Ue(t) {
  je(t instanceof Function, "Expected a class definition");
  let e = ui.get(t);
  return e ? (je(e instanceof t, "Instance stored in cache mismatched with class"), e) : (e = new t(), ui.set(t, e), e);
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
class Ta {
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
Ta.type = "NONE";
const ci = Ta;
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
function nr(t, e, r) {
  return `firebase:${t}:${e}:${r}`;
}
class vt {
  constructor(e, r, n) {
    this.persistence = e, this.auth = r, this.userKey = n;
    const { config: i, name: a } = this.auth;
    this.fullUserKey = nr(this.userKey, i.apiKey, a), this.fullPersistenceKey = nr("persistence", i.apiKey, a), this.boundEventHandler = r._onStorageEvent.bind(r), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
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
      return new vt(Ue(ci), e, n);
    const i = (await Promise.all(r.map(async (l) => {
      if (await l._isAvailable())
        return l;
    }))).filter((l) => l);
    let a = i[0] || Ue(ci);
    const s = nr(n, e.config.apiKey, e.name);
    let u = null;
    for (const l of r)
      try {
        const g = await l._get(s);
        if (g) {
          const f = st._fromJSON(e, g);
          l !== a && (u = f), a = l;
          break;
        }
      } catch {
      }
    const o = i.filter((l) => l._shouldAllowMigration);
    return !a._shouldAllowMigration || !o.length ? new vt(a, e, n) : (a = o[0], u && await a._set(s, u.toJSON()), await Promise.all(r.map(async (l) => {
      if (l !== a)
        try {
          await l._remove(s);
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
function li(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (Ra(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (Ea(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (ka(e))
    return "Blackberry";
  if (Aa(e))
    return "Webos";
  if (Sn(e))
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
function Ea(t = le()) {
  return /firefox\//i.test(t);
}
function Sn(t = le()) {
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
function ka(t = le()) {
  return /blackberry/i.test(t);
}
function Aa(t = le()) {
  return /webos/i.test(t);
}
function Or(t = le()) {
  return /iphone|ipad|ipod/i.test(t) || /macintosh/i.test(t) && /mobile/i.test(t);
}
function Uu(t = le()) {
  var e;
  return Or(t) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function ju() {
  return to() && document.documentMode === 10;
}
function Ca(t = le()) {
  return Or(t) || Pa(t) || Aa(t) || ka(t) || /windows phone/i.test(t) || Ra(t);
}
function qu() {
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
      r = li(le());
      break;
    case "Worker":
      r = `${li(le())}-${t}`;
      break;
    default:
      r = t;
  }
  const n = e.length ? e.join(",") : "FirebaseCore-web";
  return `${r}/JsCore/${Ht}/${n}`;
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
class Bu {
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
async function $u(t, e = {}) {
  return zt(t, "GET", "/v2/passwordPolicy", _a(t, e));
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
const Vu = 6;
class Hu {
  constructor(e) {
    var r, n, i, a;
    const s = e.customStrengthOptions;
    this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = (r = s.minPasswordLength) !== null && r !== void 0 ? r : Vu, s.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = s.maxPasswordLength), s.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = s.containsLowercaseCharacter), s.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = s.containsUppercaseCharacter), s.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = s.containsNumericCharacter), s.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = s.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = (i = (n = e.allowedNonAlphanumericCharacters) === null || n === void 0 ? void 0 : n.join("")) !== null && i !== void 0 ? i : "", this.forceUpgradeOnSignin = (a = e.forceUpgradeOnSignin) !== null && a !== void 0 ? a : !1, this.schemaVersion = e.schemaVersion;
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
class Wu {
  constructor(e, r, n, i) {
    this.app = e, this.heartbeatServiceProvider = r, this.appCheckServiceProvider = n, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new di(this), this.idTokenSubscription = new di(this), this.beforeStateQueue = new Bu(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = ma, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion;
  }
  _initializeWithPersistence(e, r) {
    return r && (this._popupRedirectResolver = Ue(r)), this._initializationPromise = this.queue(async () => {
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
      await fr(e);
    } catch (r) {
      if ((r == null ? void 0 : r.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = Su();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    const r = e ? Ye(e) : null;
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
      await this.assertedPersistence.setPersistence(Ue(e));
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
    const e = await $u(this), r = new Hu(e);
    this.tenantId === null ? this._projectPasswordPolicy = r : this._tenantPasswordPolicies[this.tenantId] = r;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new $t("auth", "Firebase", e());
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
      const r = e && Ue(e) || this._popupRedirectResolver;
      q(
        r,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await vt.create(
        this,
        [Ue(r._redirectPersistence)],
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
    return r != null && r.error && bu(`Error while retrieving App Check token: ${r.error}`), r == null ? void 0 : r.token;
  }
}
function Rr(t) {
  return Ye(t);
}
class di {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = uo((r) => this.observer = r);
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
function zu() {
  var t, e;
  return (e = (t = document.getElementsByTagName("head")) === null || t === void 0 ? void 0 : t[0]) !== null && e !== void 0 ? e : document;
}
function Qu(t) {
  return new Promise((e, r) => {
    const n = document.createElement("script");
    n.setAttribute("src", t), n.onload = e, n.onerror = (i) => {
      const a = Ae(
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      a.customData = i, r(a);
    }, n.type = "text/javascript", n.charset = "UTF-8", zu().appendChild(n);
  });
}
function Ku(t) {
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
function Gu(t, e) {
  const r = fa(t, "auth");
  if (r.isInitialized()) {
    const i = r.getImmediate(), a = r.getOptions();
    if (cr(a, e ?? {}))
      return i;
    Ne(
      i,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return r.initialize({ options: e });
}
function Ju(t, e) {
  const r = (e == null ? void 0 : e.persistence) || [], n = (Array.isArray(r) ? r : [r]).map(Ue);
  e != null && e.errorMap && t._updateErrorMap(e.errorMap), t._initializeWithPersistence(n, e == null ? void 0 : e.popupRedirectResolver);
}
function Yu(t, e, r) {
  const n = Rr(t);
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
  const i = !!(r != null && r.disableWarnings), a = Na(e), { host: s, port: u } = Xu(e), o = u === null ? "" : `:${u}`;
  n.config.emulator = { url: `${a}//${s}${o}/` }, n.settings.appVerificationDisabledForTesting = !0, n.emulatorConfig = Object.freeze({
    host: s,
    port: u,
    protocol: a.replace(":", ""),
    options: Object.freeze({ disableWarnings: i })
  }), i || Zu();
}
function Na(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function Xu(t) {
  const e = Na(t), r = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!r)
    return { host: "", port: null };
  const n = r[2].split("@").pop() || "", i = /^(\[[^\]]+\])(:|$)/.exec(n);
  if (i) {
    const a = i[1];
    return { host: a, port: fi(n.substr(a.length + 1)) };
  } else {
    const [a, s] = n.split(":");
    return { host: a, port: fi(s) };
  }
}
function fi(t) {
  if (!t)
    return null;
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function Zu() {
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
class xa {
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
    return Fe("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return Fe("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, r) {
    return Fe("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return Fe("not implemented");
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
  return Ou(t, "POST", "/v1/accounts:signInWithIdp", _a(t, e));
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
const ec = "http://localhost";
class qe extends xa {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const r = new qe(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (r.idToken = e.idToken), e.accessToken && (r.accessToken = e.accessToken), e.nonce && !e.pendingToken && (r.nonce = e.nonce), e.pendingToken && (r.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (r.accessToken = e.oauthToken, r.secret = e.oauthTokenSecret) : Ne(
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
    const r = typeof e == "string" ? JSON.parse(e) : e, { providerId: n, signInMethod: i } = r, a = bn(r, ["providerId", "signInMethod"]);
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
      requestUri: ec,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const r = {};
      this.idToken && (r.id_token = this.idToken), this.accessToken && (r.access_token = this.accessToken), this.secret && (r.oauth_token_secret = this.secret), r.providerId = this.providerId, this.nonce && !this.pendingToken && (r.nonce = this.nonce), e.postBody = Vt(r);
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
class Tn {
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
class Tt extends Tn {
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
class mt extends Tt {
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
    return mt.oauthCredentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return mt.oauthCredentialFromTaggedObject(e.customData || {});
  }
  static oauthCredentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: r, oauthAccessToken: n, oauthTokenSecret: i, pendingToken: a, nonce: s, providerId: u } = e;
    if (!n && !i && !r && !a || !u)
      return null;
    try {
      return new mt(u)._credential({
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
    return qe._fromParams({
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
class Oe extends Tt {
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
      providerId: Oe.PROVIDER_ID,
      signInMethod: Oe.GOOGLE_SIGN_IN_METHOD,
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
    return Oe.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Oe.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: r, oauthAccessToken: n } = e;
    if (!r && !n)
      return null;
    try {
      return Oe.credential(r, n);
    } catch {
      return null;
    }
  }
}
Oe.GOOGLE_SIGN_IN_METHOD = "google.com";
Oe.PROVIDER_ID = "google.com";
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
class Re extends Tt {
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
      providerId: Re.PROVIDER_ID,
      signInMethod: Re.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Re.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Re.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return Re.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Re.GITHUB_SIGN_IN_METHOD = "github.com";
Re.PROVIDER_ID = "github.com";
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
class Pe extends Tt {
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
      providerId: Pe.PROVIDER_ID,
      signInMethod: Pe.TWITTER_SIGN_IN_METHOD,
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
    return Pe.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Pe.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: r, oauthTokenSecret: n } = e;
    if (!r || !n)
      return null;
    try {
      return Pe.credential(r, n);
    } catch {
      return null;
    }
  }
}
Pe.TWITTER_SIGN_IN_METHOD = "twitter.com";
Pe.PROVIDER_ID = "twitter.com";
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
class bt {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static async _fromIdTokenResponse(e, r, n, i = !1) {
    const a = await st._fromIdTokenResponse(e, n, i), s = hi(n);
    return new bt({
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
    const i = hi(n);
    return new bt({
      user: e,
      providerId: i,
      _tokenResponse: n,
      operationType: r
    });
  }
}
function hi(t) {
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
class hr extends Je {
  constructor(e, r, n, i) {
    var a;
    super(r.code, r.message), this.operationType = n, this.user = i, Object.setPrototypeOf(this, hr.prototype), this.customData = {
      appName: e.name,
      tenantId: (a = e.tenantId) !== null && a !== void 0 ? a : void 0,
      _serverResponse: r.customData._serverResponse,
      operationType: n
    };
  }
  static _fromErrorAndOperation(e, r, n, i) {
    return new hr(e, r, n, i);
  }
}
function Ma(t, e, r, n) {
  return (e === "reauthenticate" ? r._getReauthenticationResolver(t) : r._getIdTokenResponse(t)).catch((a) => {
    throw a.code === "auth/multi-factor-auth-required" ? hr._fromErrorAndOperation(t, a, e, n) : a;
  });
}
async function tc(t, e, r = !1) {
  const n = await Ft(t, e._linkToIdToken(t.auth, await t.getIdToken()), r);
  return bt._forOperation(t, "link", n);
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
async function rc(t, e, r = !1) {
  const { auth: n } = t, i = "reauthenticate";
  try {
    const a = await Ft(t, Ma(n, i, e, t), r);
    q(
      a.idToken,
      n,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const s = wn(a.idToken);
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
    ), bt._forOperation(t, i, a);
  } catch (a) {
    throw (a == null ? void 0 : a.code) === "auth/user-not-found" && Ne(
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
async function nc(t, e, r = !1) {
  const n = "signIn", i = await Ma(t, n, e), a = await bt._fromIdTokenResponse(t, n, i);
  return r || await t._updateCurrentUser(a.user), a;
}
function ic(t, e, r, n) {
  return Ye(t).onIdTokenChanged(e, r, n);
}
function ac(t, e, r) {
  return Ye(t).beforeAuthStateChanged(e, r);
}
function sc(t, e, r, n) {
  return Ye(t).onAuthStateChanged(e, r, n);
}
function La(t) {
  return Ye(t).signOut();
}
const pr = "__sak";
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
class Fa {
  constructor(e, r) {
    this.storageRetriever = e, this.type = r;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(pr, "1"), this.storage.removeItem(pr), Promise.resolve(!0)) : Promise.resolve(!1);
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
function oc() {
  const t = le();
  return Sn(t) || Or(t);
}
const uc = 1e3, cc = 10;
class Ua extends Fa {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, r) => this.onStorageEvent(e, r), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = oc() && qu(), this.fallbackToPolling = Ca(), this._shouldAllowMigration = !0;
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
    ju() && a !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, cc) : i();
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
    }, uc);
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
Ua.type = "LOCAL";
const lc = Ua;
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
class ja extends Fa {
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
function dc(t) {
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
class Pr {
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
    const n = new Pr(e);
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
    const u = Array.from(s).map(async (l) => l(r.origin, a)), o = await dc(u);
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
Pr.receivers = [];
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
class fc {
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
      const g = setTimeout(() => {
        o(new Error(
          "unsupported_event"
          /* _MessageError.UNSUPPORTED_EVENT */
        ));
      }, n);
      s = {
        messageChannel: i,
        onMessage(f) {
          const b = f;
          if (b.data.eventId === l)
            switch (b.data.status) {
              case "ack":
                clearTimeout(g), a = setTimeout(
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
                clearTimeout(a), u(b.data.response);
                break;
              default:
                clearTimeout(g), clearTimeout(a), o(new Error(
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
function Ce() {
  return window;
}
function hc(t) {
  Ce().location.href = t;
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
  return typeof Ce().WorkerGlobalScope < "u" && typeof Ce().importScripts == "function";
}
async function pc() {
  if (!(navigator != null && navigator.serviceWorker))
    return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function vc() {
  var t;
  return ((t = navigator == null ? void 0 : navigator.serviceWorker) === null || t === void 0 ? void 0 : t.controller) || null;
}
function gc() {
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
const $a = "firebaseLocalStorageDb", mc = 1, vr = "firebaseLocalStorage", Va = "fbase_key";
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
function kr(t, e) {
  return t.transaction([vr], e ? "readwrite" : "readonly").objectStore(vr);
}
function yc() {
  const t = indexedDB.deleteDatabase($a);
  return new Qt(t).toPromise();
}
function sn() {
  const t = indexedDB.open($a, mc);
  return new Promise((e, r) => {
    t.addEventListener("error", () => {
      r(t.error);
    }), t.addEventListener("upgradeneeded", () => {
      const n = t.result;
      try {
        n.createObjectStore(vr, { keyPath: Va });
      } catch (i) {
        r(i);
      }
    }), t.addEventListener("success", async () => {
      const n = t.result;
      n.objectStoreNames.contains(vr) ? e(n) : (n.close(), await yc(), e(await sn()));
    });
  });
}
async function pi(t, e, r) {
  const n = kr(t, !0).put({
    [Va]: e,
    value: r
  });
  return new Qt(n).toPromise();
}
async function bc(t, e) {
  const r = kr(t, !1).get(e), n = await new Qt(r).toPromise();
  return n === void 0 ? null : n.value;
}
function vi(t, e) {
  const r = kr(t, !0).delete(e);
  return new Qt(r).toPromise();
}
const _c = 800, Ic = 3;
class Ha {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await sn(), this.db);
  }
  async _withRetries(e) {
    let r = 0;
    for (; ; )
      try {
        const n = await this._openDb();
        return await e(n);
      } catch (n) {
        if (r++ > Ic)
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
    this.receiver = Pr._getInstance(gc()), this.receiver._subscribe("keyChanged", async (e, r) => ({
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
    if (this.activeServiceWorker = await pc(), !this.activeServiceWorker)
      return;
    this.sender = new fc(this.activeServiceWorker);
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
    if (!(!this.sender || !this.activeServiceWorker || vc() !== this.activeServiceWorker))
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
      const e = await sn();
      return await pi(e, pr, "1"), await vi(e, pr), !0;
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
    return this._withPendingWrite(async () => (await this._withRetries((n) => pi(n, e, r)), this.localCache[e] = r, this.notifyServiceWorker(e)));
  }
  async _get(e) {
    const r = await this._withRetries((n) => bc(n, e));
    return this.localCache[e] = r, r;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((r) => vi(r, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const a = kr(i, !1).getAll();
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
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), _c);
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
const wc = Ha;
new Wt(3e4, 6e4);
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
  return e ? Ue(e) : (q(
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
class On extends xa {
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
function Sc(t) {
  return nc(t.auth, new On(t), t.bypassAuthState);
}
function Tc(t) {
  const { auth: e, user: r } = t;
  return q(
    r,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), rc(r, new On(t), t.bypassAuthState);
}
async function Ec(t) {
  const { auth: e, user: r } = t;
  return q(
    r,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), tc(r, new On(t), t.bypassAuthState);
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
        return Sc;
      case "linkViaPopup":
      case "linkViaRedirect":
        return Ec;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return Tc;
      default:
        Ne(
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
const Oc = new Wt(2e3, 1e4);
async function Kt(t, e, r) {
  const n = Rr(t);
  _u(t, e, Tn);
  const i = Wa(n, r);
  return new it(n, "signInViaPopup", e, i).executeNotNull();
}
class it extends za {
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
      r || this.reject(Ae(
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
    this.reject(Ae(
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
            this.pollId = null, this.reject(Ae(
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
      this.pollId = window.setTimeout(e, Oc.get());
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
const Rc = "pendingRedirect", ir = /* @__PURE__ */ new Map();
class Pc extends za {
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
    let e = ir.get(this.auth._key());
    if (!e) {
      try {
        const n = await kc(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(n);
      } catch (r) {
        e = () => Promise.reject(r);
      }
      ir.set(this.auth._key(), e);
    }
    return this.bypassAuthState || ir.set(this.auth._key(), () => Promise.resolve(null)), e();
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
async function kc(t, e) {
  const r = Dc(e), n = Cc(t);
  if (!await n._isAvailable())
    return !1;
  const i = await n._get(r) === "true";
  return await n._remove(r), i;
}
function Ac(t, e) {
  ir.set(t._key(), e);
}
function Cc(t) {
  return Ue(t._redirectPersistence);
}
function Dc(t) {
  return nr(Rc, t.config.apiKey, t.name);
}
async function Nc(t, e, r = !1) {
  const n = Rr(t), i = Wa(n, e), s = await new Pc(n, i, r).execute();
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
const xc = 10 * 60 * 1e3;
class Mc {
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
    }), this.hasHandledPotentialRedirect || !Lc(e) || (this.hasHandledPotentialRedirect = !0, r || (this.queuedRedirectEvent = e, r = !0)), r;
  }
  sendToConsumer(e, r) {
    var n;
    if (e.error && !Qa(e)) {
      const i = ((n = e.error.code) === null || n === void 0 ? void 0 : n.split("auth/")[1]) || "internal-error";
      r.onError(Ae(this.auth, i));
    } else
      r.onAuthEvent(e);
  }
  isEventForConsumer(e, r) {
    const n = r.eventId === null || !!e.eventId && e.eventId === r.eventId;
    return r.filter.includes(e.type) && n;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= xc && this.cachedEventUids.clear(), this.cachedEventUids.has(gi(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(gi(e)), this.lastProcessedEventTime = Date.now();
  }
}
function gi(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join("-");
}
function Qa({ type: t, error: e }) {
  return t === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event";
}
function Lc(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Qa(t);
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
async function Fc(t, e = {}) {
  return zt(t, "GET", "/v1/projects", e);
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
const Uc = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, jc = /^https?/;
async function qc(t) {
  if (t.config.emulator)
    return;
  const { authorizedDomains: e } = await Fc(t);
  for (const r of e)
    try {
      if (Bc(r))
        return;
    } catch {
    }
  Ne(
    t,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function Bc(t) {
  const e = an(), { protocol: r, hostname: n } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const s = new URL(t);
    return s.hostname === "" && n === "" ? r === "chrome-extension:" && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : r === "chrome-extension:" && s.hostname === n;
  }
  if (!jc.test(r))
    return !1;
  if (Uc.test(t))
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
const $c = new Wt(3e4, 6e4);
function mi() {
  const t = Ce().___jsl;
  if (t != null && t.H) {
    for (const e of Object.keys(t.H))
      if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = [...t.H[e].L], t.CP)
        for (let r = 0; r < t.CP.length; r++)
          t.CP[r] = null;
  }
}
function Vc(t) {
  return new Promise((e, r) => {
    var n, i, a;
    function s() {
      mi(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          mi(), r(Ae(
            t,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: $c.get()
      });
    }
    if (!((i = (n = Ce().gapi) === null || n === void 0 ? void 0 : n.iframes) === null || i === void 0) && i.Iframe)
      e(gapi.iframes.getContext());
    else if (!((a = Ce().gapi) === null || a === void 0) && a.load)
      s();
    else {
      const u = Ku("iframefcb");
      return Ce()[u] = () => {
        gapi.load ? s() : r(Ae(
          t,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, Qu(`https://apis.google.com/js/api.js?onload=${u}`).catch((o) => r(o));
    }
  }).catch((e) => {
    throw ar = null, e;
  });
}
let ar = null;
function Hc(t) {
  return ar = ar || Vc(t), ar;
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
const Wc = new Wt(5e3, 15e3), zc = "__/auth/iframe", Qc = "emulator/auth/iframe", Kc = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, Gc = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function Jc(t) {
  const e = t.config;
  q(
    e.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const r = e.emulator ? In(e, Qc) : `https://${t.config.authDomain}/${zc}`, n = {
    apiKey: e.apiKey,
    appName: t.name,
    v: Ht
  }, i = Gc.get(t.config.apiHost);
  i && (n.eid = i);
  const a = t._getFrameworks();
  return a.length && (n.fw = a.join(",")), `${r}?${Vt(n).slice(1)}`;
}
async function Yc(t) {
  const e = await Hc(t), r = Ce().gapi;
  return q(
    r,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: Jc(t),
    messageHandlersFilter: r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: Kc,
    dontclear: !0
  }, (n) => new Promise(async (i, a) => {
    await n.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const s = Ae(
      t,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), u = Ce().setTimeout(() => {
      a(s);
    }, Wc.get());
    function o() {
      Ce().clearTimeout(u), i(n);
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
const Xc = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, Zc = 500, el = 600, tl = "_blank", rl = "http://localhost";
class yi {
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
function nl(t, e, r, n = Zc, i = el) {
  const a = Math.max((window.screen.availHeight - i) / 2, 0).toString(), s = Math.max((window.screen.availWidth - n) / 2, 0).toString();
  let u = "";
  const o = Object.assign(Object.assign({}, Xc), {
    width: n.toString(),
    height: i.toString(),
    top: a,
    left: s
  }), l = le().toLowerCase();
  r && (u = Oa(l) ? tl : r), Ea(l) && (e = e || rl, o.scrollbars = "yes");
  const g = Object.entries(o).reduce((b, [v, I]) => `${b}${v}=${I},`, "");
  if (Uu(l) && u !== "_self")
    return il(e || "", u), new yi(null);
  const f = window.open(e || "", u, g);
  q(
    f,
    t,
    "popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
  );
  try {
    f.focus();
  } catch {
  }
  return new yi(f);
}
function il(t, e) {
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
const al = "__/auth/handler", sl = "emulator/auth/handler", ol = encodeURIComponent("fac");
async function bi(t, e, r, n, i, a) {
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
    v: Ht,
    eventId: i
  };
  if (e instanceof Tn) {
    e.setDefaultLanguage(t.languageCode), s.providerId = e.providerId || "", oo(e.getCustomParameters()) || (s.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [g, f] of Object.entries(a || {}))
      s[g] = f;
  }
  if (e instanceof Tt) {
    const g = e.getScopes().filter((f) => f !== "");
    g.length > 0 && (s.scopes = g.join(","));
  }
  t.tenantId && (s.tid = t.tenantId);
  const u = s;
  for (const g of Object.keys(u))
    u[g] === void 0 && delete u[g];
  const o = await t._getAppCheckToken(), l = o ? `#${ol}=${encodeURIComponent(o)}` : "";
  return `${ul(t)}?${Vt(u).slice(1)}${l}`;
}
function ul({ config: t }) {
  return t.emulator ? In(t, sl) : `https://${t.authDomain}/${al}`;
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
const Vr = "webStorageSupport";
class cl {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = qa, this._completeRedirectFn = Nc, this._overrideRedirectResult = Ac;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, r, n, i) {
    var a;
    je((a = this.eventManagers[e._key()]) === null || a === void 0 ? void 0 : a.manager, "_initialize() not called before _openPopup()");
    const s = await bi(e, r, n, an(), i);
    return nl(e, s, En());
  }
  async _openRedirect(e, r, n, i) {
    await this._originValidation(e);
    const a = await bi(e, r, n, an(), i);
    return hc(a), new Promise(() => {
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
    const r = await Yc(e), n = new Mc(e);
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
    this.iframes[e._key()].send(Vr, { type: Vr }, (i) => {
      var a;
      const s = (a = i == null ? void 0 : i[0]) === null || a === void 0 ? void 0 : a[Vr];
      s !== void 0 && r(!!s), Ne(
        e,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const r = e._key();
    return this.originValidationPromises[r] || (this.originValidationPromises[r] = qc(e)), this.originValidationPromises[r];
  }
  get _shouldInitProactively() {
    return Ca() || Sn() || Or();
  }
}
const ll = cl;
var _i = "@firebase/auth", Ii = "1.3.0";
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
class dl {
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
function fl(t) {
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
function hl(t) {
  Mt(new yt(
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
      }, l = new Wu(n, i, a, o);
      return Ju(l, r), l;
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
  })), Mt(new yt(
    "auth-internal",
    (e) => {
      const r = Rr(e.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((n) => new dl(n))(r);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), pt(_i, Ii, fl(t)), pt(_i, Ii, "esm2017");
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
const pl = 5 * 60, vl = ua("authIdTokenMaxAge") || pl;
let wi = null;
const gl = (t) => async (e) => {
  const r = e && await e.getIdTokenResult(), n = r && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(r.issuedAtTime)) / 1e3;
  if (n && n > vl)
    return;
  const i = r == null ? void 0 : r.token;
  wi !== i && (wi = i, await fetch(t, {
    method: i ? "POST" : "DELETE",
    headers: i ? {
      Authorization: `Bearer ${i}`
    } : {}
  }));
};
function ml(t = uu()) {
  const e = fa(t, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const r = Gu(t, {
    popupRedirectResolver: ll,
    persistence: [
      wc,
      lc,
      qa
    ]
  }), n = ua("authTokenSyncURL");
  if (n) {
    const a = gl(n);
    ac(r, a, () => a(r.currentUser)), ic(r, (s) => a(s));
  }
  const i = Js("auth");
  return i && Yu(r, `http://${i}`), r;
}
hl(
  "Browser"
  /* ClientPlatform.BROWSER */
);
var yl = "firebase", bl = "10.4.0";
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
pt(yl, bl, "app");
const Ka = {
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
let X = { ...Ka };
const If = (t) => {
  X = { ...Ka, ...t };
}, _l = () => Object.keys(X.firebaseConfig).length !== 0, Xe = () => {
  const t = ha(X.firebaseConfig);
  return ml(t);
}, Ga = new Oe();
Ga.setCustomParameters({ prompt: "select_account" });
const Ja = new Ee();
Ja.addScope("public_profile");
const Il = new Pe(), wl = new Re(), Sl = new mt("microsoft.com").setCustomParameters({
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
    var i = Nl[t], a = i ? typeof i == "function" ? i.apply(null, r) : i : "unknown error nr: " + t;
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
    return i === Object || typeof i == "function" && Function.toString.call(i) === xl;
  }(t) || Array.isArray(t) || !!t[xt] || !!(!((e = t.constructor) === null || e === void 0) && e[xt]) || Ar(t) || Cr(t));
}
function Tl(t) {
  return Be(t) || ie(23, t), t[ve].t;
}
function _t(t, e, r) {
  r === void 0 && (r = !1), Ge(t) === 0 ? (r ? Object.keys : Dn)(t).forEach(function(n) {
    r && typeof n == "symbol" || e(n, t[n], t);
  }) : t.forEach(function(n, i) {
    return e(i, n, t);
  });
}
function Ge(t) {
  var e = t[ve];
  return e ? e.i > 3 ? e.i - 4 : e.i : Array.isArray(t) ? 1 : Ar(t) ? 2 : Cr(t) ? 3 : 0;
}
function jt(t, e) {
  return Ge(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function sr(t, e) {
  return Ge(t) === 2 ? t.get(e) : t[e];
}
function Ya(t, e, r) {
  var n = Ge(t);
  n === 2 ? t.set(e, r) : n === 3 ? t.add(r) : t[e] = r;
}
function El(t, e) {
  return t === e ? t !== 0 || 1 / t == 1 / e : t != t && e != e;
}
function Ar(t) {
  return Cl && t instanceof Map;
}
function Cr(t) {
  return Dl && t instanceof Set;
}
function nt(t) {
  return t.o || t.t;
}
function Rn(t) {
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  var e = Ml(t);
  delete e[ve];
  for (var r = Dn(e), n = 0; n < r.length; n++) {
    var i = r[n], a = e[i];
    a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (e[i] = { configurable: !0, writable: !0, enumerable: a.enumerable, value: t[i] });
  }
  return Object.create(Object.getPrototypeOf(t), e);
}
function Pn(t, e) {
  return e === void 0 && (e = !1), kn(t) || Be(t) || !$e(t) || (Ge(t) > 1 && (t.set = t.add = t.clear = t.delete = Ol), Object.freeze(t), e && _t(t, function(r, n) {
    return Pn(n, !0);
  }, !0)), t;
}
function Ol() {
  ie(2);
}
function kn(t) {
  return t == null || typeof t != "object" || Object.isFrozen(t);
}
function De(t) {
  var e = ln[t];
  return e || ie(18, t), e;
}
function Rl(t, e) {
  ln[t] || (ln[t] = e);
}
function Si() {
  return process.env.NODE_ENV === "production" || It || ie(0), It;
}
function Hr(t, e) {
  e && (De("Patches"), t.u = [], t.s = [], t.v = e);
}
function gr(t) {
  on(t), t.p.forEach(Pl), t.p = null;
}
function on(t) {
  t === It && (It = t.l);
}
function Ti(t) {
  return It = { p: [], l: It, h: t, m: !0, _: 0 };
}
function Pl(t) {
  var e = t[ve];
  e.i === 0 || e.i === 1 ? e.j() : e.g = !0;
}
function Wr(t, e) {
  e._ = e.p.length;
  var r = e.p[0], n = t !== void 0 && t !== r;
  return e.h.O || De("ES5").S(e, t, n), n ? (r[ve].P && (gr(e), ie(4)), $e(t) && (t = mr(e, t), e.l || yr(e, t)), e.u && De("Patches").M(r[ve].t, t, e.u, e.s)) : t = mr(e, r, []), gr(e), e.u && e.v(e.u, e.s), t !== Cn ? t : void 0;
}
function mr(t, e, r) {
  if (kn(e))
    return e;
  var n = e[ve];
  if (!n)
    return _t(e, function(u, o) {
      return Ei(t, n, e, u, o, r);
    }, !0), e;
  if (n.A !== t)
    return e;
  if (!n.P)
    return yr(t, n.t, !0), n.t;
  if (!n.I) {
    n.I = !0, n.A._--;
    var i = n.i === 4 || n.i === 5 ? n.o = Rn(n.k) : n.o, a = i, s = !1;
    n.i === 3 && (a = new Set(i), i.clear(), s = !0), _t(a, function(u, o) {
      return Ei(t, n, i, u, o, r, s);
    }), yr(t, i, !1), r && t.u && De("Patches").N(n, r, t.u, t.s);
  }
  return n.o;
}
function Ei(t, e, r, n, i, a, s) {
  if (process.env.NODE_ENV !== "production" && i === r && ie(5), Be(i)) {
    var u = mr(t, i, a && e && e.i !== 3 && !jt(e.R, n) ? a.concat(n) : void 0);
    if (Ya(r, n, u), !Be(u))
      return;
    t.m = !1;
  } else
    s && r.add(i);
  if ($e(i) && !kn(i)) {
    if (!t.h.D && t._ < 1)
      return;
    mr(t, i), e && e.A.l || yr(t, i);
  }
}
function yr(t, e, r) {
  r === void 0 && (r = !1), !t.l && t.h.D && t.m && Pn(e, r);
}
function zr(t, e) {
  var r = t[ve];
  return (r ? nt(r) : t)[e];
}
function Oi(t, e) {
  if (e in t)
    for (var r = Object.getPrototypeOf(t); r; ) {
      var n = Object.getOwnPropertyDescriptor(r, e);
      if (n)
        return n;
      r = Object.getPrototypeOf(r);
    }
}
function un(t) {
  t.P || (t.P = !0, t.l && un(t.l));
}
function Qr(t) {
  t.o || (t.o = Rn(t.t));
}
function cn(t, e, r) {
  var n = Ar(e) ? De("MapSet").F(e, r) : Cr(e) ? De("MapSet").T(e, r) : t.O ? function(i, a) {
    var s = Array.isArray(i), u = { i: s ? 1 : 0, A: a ? a.A : Si(), P: !1, I: !1, R: {}, l: a, t: i, k: null, o: null, j: null, C: !1 }, o = u, l = dn;
    s && (o = [u], l = Ct);
    var g = Proxy.revocable(o, l), f = g.revoke, b = g.proxy;
    return u.k = b, u.j = f, b;
  }(e, r) : De("ES5").J(e, r);
  return (r ? r.A : Si()).p.push(n), n;
}
function kl(t) {
  return Be(t) || ie(22, t), function e(r) {
    if (!$e(r))
      return r;
    var n, i = r[ve], a = Ge(r);
    if (i) {
      if (!i.P && (i.i < 4 || !De("ES5").K(i)))
        return i.t;
      i.I = !0, n = Ri(r, a), i.I = !1;
    } else
      n = Ri(r, a);
    return _t(n, function(s, u) {
      i && sr(i.t, s) === u || Ya(n, s, e(u));
    }), a === 3 ? new Set(n) : n;
  }(t);
}
function Ri(t, e) {
  switch (e) {
    case 2:
      return new Map(t);
    case 3:
      return Array.from(t);
  }
  return Rn(t);
}
function Al() {
  function t(n) {
    if (!$e(n))
      return n;
    if (Array.isArray(n))
      return n.map(t);
    if (Ar(n))
      return new Map(Array.from(n.entries()).map(function(s) {
        return [s[0], t(s[1])];
      }));
    if (Cr(n))
      return new Set(Array.from(n).map(t));
    var i = Object.create(Object.getPrototypeOf(n));
    for (var a in n)
      i[a] = t(n[a]);
    return jt(n, xt) && (i[xt] = n[xt]), i;
  }
  function e(n) {
    return Be(n) ? t(n) : n;
  }
  var r = "add";
  Rl("Patches", { $: function(n, i) {
    return i.forEach(function(a) {
      for (var s = a.path, u = a.op, o = n, l = 0; l < s.length - 1; l++) {
        var g = Ge(o), f = s[l];
        typeof f != "string" && typeof f != "number" && (f = "" + f), g !== 0 && g !== 1 || f !== "__proto__" && f !== "constructor" || ie(24), typeof o == "function" && f === "prototype" && ie(24), typeof (o = sr(o, f)) != "object" && ie(15, s.join("/"));
      }
      var b = Ge(o), v = t(a.value), I = s[s.length - 1];
      switch (u) {
        case "replace":
          switch (b) {
            case 2:
              return o.set(I, v);
            case 3:
              ie(16);
            default:
              return o[I] = v;
          }
        case r:
          switch (b) {
            case 1:
              return I === "-" ? o.push(v) : o.splice(I, 0, v);
            case 2:
              return o.set(I, v);
            case 3:
              return o.add(v);
            default:
              return o[I] = v;
          }
        case "remove":
          switch (b) {
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
        return function(u, o, l, g) {
          var f = u.t, b = u.o;
          _t(u.R, function(v, I) {
            var S = sr(f, v), T = sr(b, v), O = I ? jt(f, v) ? "replace" : r : "remove";
            if (S !== T || O !== "replace") {
              var E = o.concat(v);
              l.push(O === "remove" ? { op: O, path: E } : { op: O, path: E, value: T }), g.push(O === r ? { op: "remove", path: E } : O === "remove" ? { op: r, path: E, value: e(S) } : { op: "replace", path: E, value: e(S) });
            }
          });
        }(n, i, a, s);
      case 5:
      case 1:
        return function(u, o, l, g) {
          var f = u.t, b = u.R, v = u.o;
          if (v.length < f.length) {
            var I = [v, f];
            f = I[0], v = I[1];
            var S = [g, l];
            l = S[0], g = S[1];
          }
          for (var T = 0; T < f.length; T++)
            if (b[T] && v[T] !== f[T]) {
              var O = o.concat([T]);
              l.push({ op: "replace", path: O, value: e(v[T]) }), g.push({ op: "replace", path: O, value: e(f[T]) });
            }
          for (var E = f.length; E < v.length; E++) {
            var w = o.concat([E]);
            l.push({ op: r, path: w, value: e(v[E]) });
          }
          f.length < v.length && g.push({ op: "replace", path: o.concat(["length"]), value: f.length });
        }(n, i, a, s);
      case 3:
        return function(u, o, l, g) {
          var f = u.t, b = u.o, v = 0;
          f.forEach(function(I) {
            if (!b.has(I)) {
              var S = o.concat([v]);
              l.push({ op: "remove", path: S, value: I }), g.unshift({ op: r, path: S, value: I });
            }
            v++;
          }), v = 0, b.forEach(function(I) {
            if (!f.has(I)) {
              var S = o.concat([v]);
              l.push({ op: r, path: S, value: I }), g.unshift({ op: "remove", path: S, value: I });
            }
            v++;
          });
        }(n, i, a, s);
    }
  }, M: function(n, i, a, s) {
    a.push({ op: "replace", path: [], value: i === Cn ? void 0 : i }), s.push({ op: "replace", path: [], value: n });
  } });
}
var Pi, It, An = typeof Symbol < "u" && typeof Symbol("x") == "symbol", Cl = typeof Map < "u", Dl = typeof Set < "u", ki = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", Cn = An ? Symbol.for("immer-nothing") : ((Pi = {})["immer-nothing"] = !0, Pi), xt = An ? Symbol.for("immer-draftable") : "__$immer_draftable", ve = An ? Symbol.for("immer-state") : "__$immer_state", Nl = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(t) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, xl = "" + Object.prototype.constructor, Dn = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Object.getOwnPropertyNames, Ml = Object.getOwnPropertyDescriptors || function(t) {
  var e = {};
  return Dn(t).forEach(function(r) {
    e[r] = Object.getOwnPropertyDescriptor(t, r);
  }), e;
}, ln = {}, dn = { get: function(t, e) {
  if (e === ve)
    return t;
  var r = nt(t);
  if (!jt(r, e))
    return function(i, a, s) {
      var u, o = Oi(a, s);
      return o ? "value" in o ? o.value : (u = o.get) === null || u === void 0 ? void 0 : u.call(i.k) : void 0;
    }(t, r, e);
  var n = r[e];
  return t.I || !$e(n) ? n : n === zr(t.t, e) ? (Qr(t), t.o[e] = cn(t.A.h, n, t)) : n;
}, has: function(t, e) {
  return e in nt(t);
}, ownKeys: function(t) {
  return Reflect.ownKeys(nt(t));
}, set: function(t, e, r) {
  var n = Oi(nt(t), e);
  if (n != null && n.set)
    return n.set.call(t.k, r), !0;
  if (!t.P) {
    var i = zr(nt(t), e), a = i == null ? void 0 : i[ve];
    if (a && a.t === r)
      return t.o[e] = r, t.R[e] = !1, !0;
    if (El(r, i) && (r !== void 0 || jt(t.t, e)))
      return !0;
    Qr(t), un(t);
  }
  return t.o[e] === r && (r !== void 0 || e in t.o) || Number.isNaN(r) && Number.isNaN(t.o[e]) || (t.o[e] = r, t.R[e] = !0), !0;
}, deleteProperty: function(t, e) {
  return zr(t.t, e) !== void 0 || e in t.t ? (t.R[e] = !1, Qr(t), un(t)) : delete t.R[e], t.o && delete t.o[e], !0;
}, getOwnPropertyDescriptor: function(t, e) {
  var r = nt(t), n = Reflect.getOwnPropertyDescriptor(r, e);
  return n && { writable: !0, configurable: t.i !== 1 || e !== "length", enumerable: n.enumerable, value: r[e] };
}, defineProperty: function() {
  ie(11);
}, getPrototypeOf: function(t) {
  return Object.getPrototypeOf(t.t);
}, setPrototypeOf: function() {
  ie(12);
} }, Ct = {};
_t(dn, function(t, e) {
  Ct[t] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
}), Ct.deleteProperty = function(t, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && ie(13), Ct.set.call(this, t, e, void 0);
}, Ct.set = function(t, e, r) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && ie(14), dn.set.call(this, t[0], e, r, t[0]);
};
var Ll = function() {
  function t(r) {
    var n = this;
    this.O = ki, this.D = !0, this.produce = function(i, a, s) {
      if (typeof i == "function" && typeof a != "function") {
        var u = a;
        a = i;
        var o = n;
        return function(S) {
          var T = this;
          S === void 0 && (S = u);
          for (var O = arguments.length, E = Array(O > 1 ? O - 1 : 0), w = 1; w < O; w++)
            E[w - 1] = arguments[w];
          return o.produce(S, function(d) {
            var p;
            return (p = a).call.apply(p, [T, d].concat(E));
          });
        };
      }
      var l;
      if (typeof a != "function" && ie(6), s !== void 0 && typeof s != "function" && ie(7), $e(i)) {
        var g = Ti(n), f = cn(n, i, void 0), b = !0;
        try {
          l = a(f), b = !1;
        } finally {
          b ? gr(g) : on(g);
        }
        return typeof Promise < "u" && l instanceof Promise ? l.then(function(S) {
          return Hr(g, s), Wr(S, g);
        }, function(S) {
          throw gr(g), S;
        }) : (Hr(g, s), Wr(l, g));
      }
      if (!i || typeof i != "object") {
        if ((l = a(i)) === void 0 && (l = i), l === Cn && (l = void 0), n.D && Pn(l, !0), s) {
          var v = [], I = [];
          De("Patches").M(i, l, v, I), s(v, I);
        }
        return l;
      }
      ie(21, i);
    }, this.produceWithPatches = function(i, a) {
      if (typeof i == "function")
        return function(l) {
          for (var g = arguments.length, f = Array(g > 1 ? g - 1 : 0), b = 1; b < g; b++)
            f[b - 1] = arguments[b];
          return n.produceWithPatches(l, function(v) {
            return i.apply(void 0, [v].concat(f));
          });
        };
      var s, u, o = n.produce(i, a, function(l, g) {
        s = l, u = g;
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then(function(l) {
        return [l, s, u];
      }) : [o, s, u];
    }, typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies), typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var e = t.prototype;
  return e.createDraft = function(r) {
    $e(r) || ie(8), Be(r) && (r = kl(r));
    var n = Ti(this), i = cn(this, r, void 0);
    return i[ve].C = !0, on(n), i;
  }, e.finishDraft = function(r, n) {
    var i = r && r[ve];
    process.env.NODE_ENV !== "production" && (i && i.C || ie(9), i.I && ie(10));
    var a = i.A;
    return Hr(a, n), Wr(void 0, a);
  }, e.setAutoFreeze = function(r) {
    this.D = r;
  }, e.setUseProxies = function(r) {
    r && !ki && ie(20), this.O = r;
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
    var s = De("Patches").$;
    return Be(r) ? s(r, n) : this.produce(r, function(u) {
      return s(u, n);
    });
  }, t;
}(), me = new Ll();
me.produce;
var Xa = me.produceWithPatches.bind(me);
me.setAutoFreeze.bind(me);
me.setUseProxies.bind(me);
var Ai = me.applyPatches.bind(me);
me.createDraft.bind(me);
me.finishDraft.bind(me);
var br = "NOT_FOUND";
function Fl(t) {
  var e;
  return {
    get: function(n) {
      return e && t(e.key, n) ? e.value : br;
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
function Ul(t, e) {
  var r = [];
  function n(u) {
    var o = r.findIndex(function(g) {
      return e(u, g.key);
    });
    if (o > -1) {
      var l = r[o];
      return o > 0 && (r.splice(o, 1), r.unshift(l)), l.value;
    }
    return br;
  }
  function i(u, o) {
    n(u) === br && (r.unshift({
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
var jl = function(e, r) {
  return e === r;
};
function ql(t) {
  return function(r, n) {
    if (r === null || n === null || r.length !== n.length)
      return !1;
    for (var i = r.length, a = 0; a < i; a++)
      if (!t(r[a], n[a]))
        return !1;
    return !0;
  };
}
function Ci(t, e) {
  var r = typeof e == "object" ? e : {
    equalityCheck: e
  }, n = r.equalityCheck, i = n === void 0 ? jl : n, a = r.maxSize, s = a === void 0 ? 1 : a, u = r.resultEqualityCheck, o = ql(i), l = s === 1 ? Fl(o) : Ul(s, o);
  function g() {
    var f = l.get(arguments);
    if (f === br) {
      if (f = t.apply(null, arguments), u) {
        var b = l.getEntries(), v = b.find(function(I) {
          return u(I.value, f);
        });
        v && (f = v.value);
      }
      l.put(arguments, f);
    }
    return f;
  }
  return g.clearCache = function() {
    return l.clear();
  }, g;
}
var _r = globalThis && globalThis.__generator || function(t, e) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, s;
  return s = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function u(l) {
    return function(g) {
      return o([l, g]);
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
      } catch (g) {
        l = [6, g], i = 0;
      } finally {
        n = a = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}, Ir = globalThis && globalThis.__spreadArray || function(t, e) {
  for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
    t[i] = e[r];
  return t;
}, Bl = Object.defineProperty, $l = Object.defineProperties, Vl = Object.getOwnPropertyDescriptors, wr = Object.getOwnPropertySymbols, Za = Object.prototype.hasOwnProperty, es = Object.prototype.propertyIsEnumerable, Di = function(t, e, r) {
  return e in t ? Bl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
}, ae = function(t, e) {
  for (var r in e || (e = {}))
    Za.call(e, r) && Di(t, r, e[r]);
  if (wr)
    for (var n = 0, i = wr(e); n < i.length; n++) {
      var r = i[n];
      es.call(e, r) && Di(t, r, e[r]);
    }
  return t;
}, ke = function(t, e) {
  return $l(t, Vl(e));
}, Ni = function(t, e) {
  var r = {};
  for (var n in t)
    Za.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && wr)
    for (var i = 0, a = wr(t); i < a.length; i++) {
      var n = a[i];
      e.indexOf(n) < 0 && es.call(t, n) && (r[n] = t[n]);
    }
  return r;
}, Sr = function(t, e, r) {
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
}, ne;
(function(t) {
  t.uninitialized = "uninitialized", t.pending = "pending", t.fulfilled = "fulfilled", t.rejected = "rejected";
})(ne || (ne = {}));
function Hl(t) {
  return {
    status: t,
    isUninitialized: t === ne.uninitialized,
    isLoading: t === ne.pending,
    isSuccess: t === ne.fulfilled,
    isError: t === ne.rejected
  };
}
function Wl(t) {
  return new RegExp("(^|:)//").test(t);
}
var zl = function(t) {
  return t.replace(/\/$/, "");
}, Ql = function(t) {
  return t.replace(/^\//, "");
};
function Kl(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  if (Wl(e))
    return e;
  var r = t.endsWith("/") || !e.startsWith("?") ? "/" : "";
  return t = zl(t), e = Ql(e), "" + t + r + e;
}
var xi = function(t) {
  return [].concat.apply([], t);
};
function Gl() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function Jl() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var Mi = ut;
function ts(t, e) {
  if (t === e || !(Mi(t) && Mi(e) || Array.isArray(t) && Array.isArray(e)))
    return e;
  for (var r = Object.keys(e), n = Object.keys(t), i = r.length === n.length, a = Array.isArray(e) ? [] : {}, s = 0, u = r; s < u.length; s++) {
    var o = u[s];
    a[o] = ts(t[o], e[o]), i && (i = t[o] === a[o]);
  }
  return i ? t : a;
}
var Li = function() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return fetch.apply(void 0, t);
}, Yl = function(t) {
  return t.status >= 200 && t.status <= 299;
}, Xl = function(t) {
  return /ion\/(vnd\.api\+)?json/.test(t.get("content-type") || "");
};
function Fi(t) {
  if (!ut(t))
    return t;
  for (var e = ae({}, t), r = 0, n = Object.entries(e); r < n.length; r++) {
    var i = n[r], a = i[0], s = i[1];
    s === void 0 && delete e[a];
  }
  return e;
}
function Zl(t) {
  var e = this;
  t === void 0 && (t = {});
  var r = t, n = r.baseUrl, i = r.prepareHeaders, a = i === void 0 ? function(w) {
    return w;
  } : i, s = r.fetchFn, u = s === void 0 ? Li : s, o = r.paramsSerializer, l = r.isJsonContentType, g = l === void 0 ? Xl : l, f = r.jsonContentType, b = f === void 0 ? "application/json" : f, v = r.jsonReplacer, I = r.timeout, S = r.responseHandler, T = r.validateStatus, O = Ni(r, [
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
  return typeof fetch > "u" && u === Li && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), function(w, d) {
    return Sr(e, null, function() {
      var p, h, y, m, R, _, P, A, k, N, x, U, L, F, W, $, V, K, B, G, H, J, re, fe, ye, be, ge, ce, te, Te, Ze, Ve, et, lt, He, Gt;
      return _r(this, function(_e) {
        switch (_e.label) {
          case 0:
            return p = d.signal, h = d.getState, y = d.extra, m = d.endpoint, R = d.forced, _ = d.type, A = typeof w == "string" ? { url: w } : w, k = A.url, N = A.headers, x = N === void 0 ? new Headers(O.headers) : N, U = A.params, L = U === void 0 ? void 0 : U, F = A.responseHandler, W = F === void 0 ? S ?? "json" : F, $ = A.validateStatus, V = $ === void 0 ? T ?? Yl : $, K = A.timeout, B = K === void 0 ? I : K, G = Ni(A, [
              "url",
              "headers",
              "params",
              "responseHandler",
              "validateStatus",
              "timeout"
            ]), H = ae(ke(ae({}, O), {
              signal: p
            }), G), x = new Headers(Fi(x)), J = H, [4, a(x, {
              getState: h,
              extra: y,
              endpoint: m,
              forced: R,
              type: _
            })];
          case 1:
            J.headers = _e.sent() || x, re = function(he) {
              return typeof he == "object" && (ut(he) || Array.isArray(he) || typeof he.toJSON == "function");
            }, !H.headers.has("content-type") && re(H.body) && H.headers.set("content-type", b), re(H.body) && g(H.headers) && (H.body = JSON.stringify(H.body, v)), L && (fe = ~k.indexOf("?") ? "&" : "?", ye = o ? o(L) : new URLSearchParams(Fi(L)), k += fe + ye), k = Kl(n, k), be = new Request(k, H), ge = new Request(k, H), P = { request: ge }, te = !1, Te = B && setTimeout(function() {
              te = !0, d.abort();
            }, B), _e.label = 2;
          case 2:
            return _e.trys.push([2, 4, 5, 6]), [4, u(be)];
          case 3:
            return ce = _e.sent(), [3, 6];
          case 4:
            return Ze = _e.sent(), [2, {
              error: {
                status: te ? "TIMEOUT_ERROR" : "FETCH_ERROR",
                error: String(Ze)
              },
              meta: P
            }];
          case 5:
            return Te && clearTimeout(Te), [
              7
              /*endfinally*/
            ];
          case 6:
            Ve = ce.clone(), P.response = Ve, lt = "", _e.label = 7;
          case 7:
            return _e.trys.push([7, 9, , 10]), [4, Promise.all([
              E(ce, W).then(function(he) {
                return et = he;
              }, function(he) {
                return He = he;
              }),
              Ve.text().then(function(he) {
                return lt = he;
              }, function() {
              })
            ])];
          case 8:
            if (_e.sent(), He)
              throw He;
            return [3, 10];
          case 9:
            return Gt = _e.sent(), [2, {
              error: {
                status: "PARSING_ERROR",
                originalStatus: ce.status,
                data: lt,
                error: String(Gt)
              },
              meta: P
            }];
          case 10:
            return [2, V(ce, et) ? {
              data: et,
              meta: P
            } : {
              error: {
                status: ce.status,
                data: et
              },
              meta: P
            }];
        }
      });
    });
  };
  function E(w, d) {
    return Sr(this, null, function() {
      var p;
      return _r(this, function(h) {
        switch (h.label) {
          case 0:
            return typeof d == "function" ? [2, d(w)] : (d === "content-type" && (d = g(w.headers) ? "json" : "text"), d !== "json" ? [3, 2] : [4, w.text()]);
          case 1:
            return p = h.sent(), [2, p.length ? JSON.parse(p) : null];
          case 2:
            return [2, w.text()];
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
), Nn = /* @__PURE__ */ wt("__rtkq/focused"), rs = /* @__PURE__ */ wt("__rtkq/unfocused"), xn = /* @__PURE__ */ wt("__rtkq/online"), ns = /* @__PURE__ */ wt("__rtkq/offline"), xe;
(function(t) {
  t.query = "query", t.mutation = "mutation";
})(xe || (xe = {}));
function is(t) {
  return t.type === xe.query;
}
function ed(t) {
  return t.type === xe.mutation;
}
function Mn(t, e, r, n, i, a) {
  return td(t) ? t(e, r, n, i).map(fn).map(a) : Array.isArray(t) ? t.map(fn).map(a) : [];
}
function td(t) {
  return typeof t == "function";
}
function fn(t) {
  return typeof t == "string" ? { type: t } : t;
}
function Kr(t) {
  return t != null;
}
var qt = Symbol("forceQueryFn"), hn = function(t) {
  return typeof t[qt] == "function";
};
function rd(t) {
  var e = t.serializeQueryArgs, r = t.queryThunk, n = t.mutationThunk, i = t.api, a = t.context, s = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), o = i.internalActions, l = o.unsubscribeQueryResult, g = o.removeMutationResult, f = o.updateSubscriptionOptions;
  return {
    buildInitiateQuery: w,
    buildInitiateMutation: d,
    getRunningQueryThunk: I,
    getRunningMutationThunk: S,
    getRunningQueriesThunk: T,
    getRunningMutationsThunk: O,
    getRunningOperationPromises: v,
    removalWarning: b
  };
  function b() {
    throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`);
  }
  function v() {
    if (typeof process < "u" && process.env.NODE_ENV === "development")
      b();
    else {
      var p = function(h) {
        return Array.from(h.values()).flatMap(function(y) {
          return y ? Object.values(y) : [];
        });
      };
      return Ir(Ir([], p(s)), p(u)).filter(Kr);
    }
  }
  function I(p, h) {
    return function(y) {
      var m, R = a.endpointDefinitions[p], _ = e({
        queryArgs: h,
        endpointDefinition: R,
        endpointName: p
      });
      return (m = s.get(y)) == null ? void 0 : m[_];
    };
  }
  function S(p, h) {
    return function(y) {
      var m;
      return (m = u.get(y)) == null ? void 0 : m[h];
    };
  }
  function T() {
    return function(p) {
      return Object.values(s.get(p) || {}).filter(Kr);
    };
  }
  function O() {
    return function(p) {
      return Object.values(u.get(p) || {}).filter(Kr);
    };
  }
  function E(p) {
    if (process.env.NODE_ENV !== "production") {
      if (E.triggered)
        return;
      var h = p(i.internalActions.internal_probeSubscription({
        queryCacheKey: "DOES_NOT_EXIST",
        requestId: "DUMMY_REQUEST_ID"
      }));
      if (E.triggered = !0, typeof h != "boolean")
        throw new Error('Warning: Middleware for RTK-Query API at reducerPath "' + i.reducerPath + `" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function w(p, h) {
    var y = function(m, R) {
      var _ = R === void 0 ? {} : R, P = _.subscribe, A = P === void 0 ? !0 : P, k = _.forceRefetch, N = _.subscriptionOptions, x = qt, U = _[x];
      return function(L, F) {
        var W, $, V = e({
          queryArgs: m,
          endpointDefinition: h,
          endpointName: p
        }), K = r((W = {
          type: "query",
          subscribe: A,
          forceRefetch: k,
          subscriptionOptions: N,
          endpointName: p,
          originalArgs: m,
          queryCacheKey: V
        }, W[qt] = U, W)), B = i.endpoints[p].select(m), G = L(K), H = B(F());
        E(L);
        var J = G.requestId, re = G.abort, fe = H.requestId !== J, ye = ($ = s.get(L)) == null ? void 0 : $[V], be = function() {
          return B(F());
        }, ge = Object.assign(U ? G.then(be) : fe && !ye ? Promise.resolve(H) : Promise.all([ye, G]).then(be), {
          arg: m,
          requestId: J,
          subscriptionOptions: N,
          queryCacheKey: V,
          abort: re,
          unwrap: function() {
            return Sr(this, null, function() {
              var te;
              return _r(this, function(Te) {
                switch (Te.label) {
                  case 0:
                    return [4, ge];
                  case 1:
                    if (te = Te.sent(), te.isError)
                      throw te.error;
                    return [2, te.data];
                }
              });
            });
          },
          refetch: function() {
            return L(y(m, { subscribe: !1, forceRefetch: !0 }));
          },
          unsubscribe: function() {
            A && L(l({
              queryCacheKey: V,
              requestId: J
            }));
          },
          updateSubscriptionOptions: function(te) {
            ge.subscriptionOptions = te, L(f({
              endpointName: p,
              requestId: J,
              queryCacheKey: V,
              options: te
            }));
          }
        });
        if (!ye && !fe && !U) {
          var ce = s.get(L) || {};
          ce[V] = ge, s.set(L, ce), ge.then(function() {
            delete ce[V], Object.keys(ce).length || s.delete(L);
          });
        }
        return ge;
      };
    };
    return y;
  }
  function d(p) {
    return function(h, y) {
      var m = y === void 0 ? {} : y, R = m.track, _ = R === void 0 ? !0 : R, P = m.fixedCacheKey;
      return function(A, k) {
        var N = n({
          type: "mutation",
          endpointName: p,
          originalArgs: h,
          track: _,
          fixedCacheKey: P
        }), x = A(N);
        E(A);
        var U = x.requestId, L = x.abort, F = x.unwrap, W = x.unwrap().then(function(B) {
          return { data: B };
        }).catch(function(B) {
          return { error: B };
        }), $ = function() {
          A(g({ requestId: U, fixedCacheKey: P }));
        }, V = Object.assign(W, {
          arg: x.arg,
          requestId: U,
          abort: L,
          unwrap: F,
          unsubscribe: $,
          reset: $
        }), K = u.get(A) || {};
        return u.set(A, K), K[U] = V, V.then(function() {
          delete K[U], Object.keys(K).length || u.delete(A);
        }), P && (K[P] = V, V.then(function() {
          K[P] === V && (delete K[P], Object.keys(K).length || u.delete(A));
        })), V;
      };
    };
  }
}
function ji(t) {
  return t;
}
function nd(t) {
  var e = this, r = t.reducerPath, n = t.baseQuery, i = t.context.endpointDefinitions, a = t.serializeQueryArgs, s = t.api, u = t.assertTagType, o = function(d, p, h, y) {
    return function(m, R) {
      var _ = i[d], P = a({
        queryArgs: p,
        endpointDefinition: _,
        endpointName: d
      });
      if (m(s.internalActions.queryResultPatched({ queryCacheKey: P, patches: h })), !!y) {
        var A = s.endpoints[d].select(p)(R()), k = Mn(_.providesTags, A.data, void 0, p, {}, u);
        m(s.internalActions.updateProvidedBy({ queryCacheKey: P, providedTags: k }));
      }
    };
  }, l = function(d, p, h, y) {
    return y === void 0 && (y = !0), function(m, R) {
      var _, P, A = s.endpoints[d], k = A.select(p)(R()), N = {
        patches: [],
        inversePatches: [],
        undo: function() {
          return m(s.util.patchQueryData(d, p, N.inversePatches, y));
        }
      };
      if (k.status === ne.uninitialized)
        return N;
      var x;
      if ("data" in k)
        if ($e(k.data)) {
          var U = Xa(k.data, h), L = U[0], F = U[1], W = U[2];
          (_ = N.patches).push.apply(_, F), (P = N.inversePatches).push.apply(P, W), x = L;
        } else
          x = h(k.data), N.patches.push({ op: "replace", path: [], value: x }), N.inversePatches.push({
            op: "replace",
            path: [],
            value: k.data
          });
      return m(s.util.patchQueryData(d, p, N.patches, y)), N;
    };
  }, g = function(d, p, h) {
    return function(y) {
      var m;
      return y(s.endpoints[d].initiate(p, (m = {
        subscribe: !1,
        forceRefetch: !0
      }, m[qt] = function() {
        return {
          data: h
        };
      }, m)));
    };
  }, f = function(d, p) {
    return Sr(e, [d, p], function(h, y) {
      var m, R, _, P, A, k, N, x, U, L, F, W, $, V, K, B, G, H, J = y.signal, re = y.abort, fe = y.rejectWithValue, ye = y.fulfillWithValue, be = y.dispatch, ge = y.getState, ce = y.extra;
      return _r(this, function(te) {
        switch (te.label) {
          case 0:
            m = i[h.endpointName], te.label = 1;
          case 1:
            return te.trys.push([1, 8, , 13]), R = ji, _ = void 0, P = {
              signal: J,
              abort: re,
              dispatch: be,
              getState: ge,
              extra: ce,
              endpoint: h.endpointName,
              type: h.type,
              forced: h.type === "query" ? b(h, ge()) : void 0
            }, A = h.type === "query" ? h[qt] : void 0, A ? (_ = A(), [3, 6]) : [3, 2];
          case 2:
            return m.query ? [4, n(m.query(h.originalArgs), P, m.extraOptions)] : [3, 4];
          case 3:
            return _ = te.sent(), m.transformResponse && (R = m.transformResponse), [3, 6];
          case 4:
            return [4, m.queryFn(h.originalArgs, P, m.extraOptions, function(Te) {
              return n(Te, P, m.extraOptions);
            })];
          case 5:
            _ = te.sent(), te.label = 6;
          case 6:
            if (typeof process < "u" && process.env.NODE_ENV === "development") {
              if (k = m.query ? "`baseQuery`" : "`queryFn`", N = void 0, !_)
                N = k + " did not return anything.";
              else if (typeof _ != "object")
                N = k + " did not return an object.";
              else if (_.error && _.data)
                N = k + " returned an object containing both `error` and `result`.";
              else if (_.error === void 0 && _.data === void 0)
                N = k + " returned an object containing neither a valid `error` and `result`. At least one of them should not be `undefined`";
              else
                for (x = 0, U = Object.keys(_); x < U.length; x++)
                  if (L = U[x], L !== "error" && L !== "data" && L !== "meta") {
                    N = "The object returned by " + k + " has the unknown property " + L + ".";
                    break;
                  }
              N && console.error("Error encountered handling the endpoint " + h.endpointName + `.
              ` + N + "\n              It needs to return an object with either the shape `{ data: <value> }` or `{ error: <value> }` that may contain an optional `meta` property.\n              Object returned was:", _);
            }
            if (_.error)
              throw new Ui(_.error, _.meta);
            return F = ye, [4, R(_.data, _.meta, h.originalArgs)];
          case 7:
            return [2, F.apply(void 0, [te.sent(), (G = {
              fulfilledTimeStamp: Date.now(),
              baseQueryMeta: _.meta
            }, G[Jt] = !0, G)])];
          case 8:
            if (W = te.sent(), $ = W, !($ instanceof Ui))
              return [3, 12];
            V = ji, m.query && m.transformErrorResponse && (V = m.transformErrorResponse), te.label = 9;
          case 9:
            return te.trys.push([9, 11, , 12]), K = fe, [4, V($.value, $.meta, h.originalArgs)];
          case 10:
            return [2, K.apply(void 0, [te.sent(), (H = { baseQueryMeta: $.meta }, H[Jt] = !0, H)])];
          case 11:
            return B = te.sent(), $ = B, [3, 12];
          case 12:
            throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error('An unhandled error occurred processing a request for the endpoint "' + h.endpointName + `".
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
  function b(d, p) {
    var h, y, m, R, _ = (y = (h = p[r]) == null ? void 0 : h.queries) == null ? void 0 : y[d.queryCacheKey], P = (m = p[r]) == null ? void 0 : m.config.refetchOnMountOrArgChange, A = _ == null ? void 0 : _.fulfilledTimeStamp, k = (R = d.forceRefetch) != null ? R : d.subscribe && P;
    return k ? k === !0 || (Number(/* @__PURE__ */ new Date()) - Number(A)) / 1e3 >= k : !1;
  }
  var v = Gn(r + "/executeQuery", f, {
    getPendingMeta: function() {
      var d;
      return d = { startedTimeStamp: Date.now() }, d[Jt] = !0, d;
    },
    condition: function(d, p) {
      var h = p.getState, y, m, R, _ = h(), P = (m = (y = _[r]) == null ? void 0 : y.queries) == null ? void 0 : m[d.queryCacheKey], A = P == null ? void 0 : P.fulfilledTimeStamp, k = d.originalArgs, N = P == null ? void 0 : P.originalArgs, x = i[d.endpointName];
      return hn(d) ? !0 : (P == null ? void 0 : P.status) === "pending" ? !1 : b(d, _) || is(x) && ((R = x == null ? void 0 : x.forceRefetch) != null && R.call(x, {
        currentArg: k,
        previousArg: N,
        endpointState: P,
        state: _
      })) ? !0 : !A;
    },
    dispatchConditionRejection: !0
  }), I = Gn(r + "/executeMutation", f, {
    getPendingMeta: function() {
      var d;
      return d = { startedTimeStamp: Date.now() }, d[Jt] = !0, d;
    }
  }), S = function(d) {
    return "force" in d;
  }, T = function(d) {
    return "ifOlderThan" in d;
  }, O = function(d, p, h) {
    return function(y, m) {
      var R = S(h) && h.force, _ = T(h) && h.ifOlderThan, P = function(x) {
        return x === void 0 && (x = !0), s.endpoints[d].initiate(p, { forceRefetch: x });
      }, A = s.endpoints[d].select(p)(m());
      if (R)
        y(P());
      else if (_) {
        var k = A == null ? void 0 : A.fulfilledTimeStamp;
        if (!k) {
          y(P());
          return;
        }
        var N = (Number(/* @__PURE__ */ new Date()) - Number(new Date(k))) / 1e3 >= _;
        N && y(P());
      } else
        y(P(!1));
    };
  };
  function E(d) {
    return function(p) {
      var h, y;
      return ((y = (h = p == null ? void 0 : p.meta) == null ? void 0 : h.arg) == null ? void 0 : y.endpointName) === d;
    };
  }
  function w(d, p) {
    return {
      matchPending: Lr(ta(d), E(p)),
      matchFulfilled: Lr(St(d), E(p)),
      matchRejected: Lr(ra(d), E(p))
    };
  }
  return {
    queryThunk: v,
    mutationThunk: I,
    prefetch: O,
    updateQueryData: l,
    upsertQueryData: g,
    patchQueryData: o,
    buildMatchThunkActions: w
  };
}
function as(t, e, r, n) {
  return Mn(r[t.meta.arg.endpointName][e], St(t) ? t.payload : void 0, vn(t) ? t.payload : void 0, t.meta.arg.originalArgs, "baseQueryMeta" in t.meta ? t.meta.baseQueryMeta : void 0, n);
}
function Xt(t, e, r) {
  var n = t[e];
  n && r(n);
}
function Bt(t) {
  var e;
  return (e = "arg" in t ? t.arg.fixedCacheKey : t.fixedCacheKey) != null ? e : t.requestId;
}
function qi(t, e, r) {
  var n = t[Bt(e)];
  n && r(n);
}
var kt = {};
function id(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.mutationThunk, i = t.context, a = i.endpointDefinitions, s = i.apiUid, u = i.extractRehydrationInfo, o = i.hasRehydrationInfo, l = t.assertTagType, g = t.config, f = wt(e + "/resetApiState"), b = tt({
    name: e + "/queries",
    initialState: kt,
    reducers: {
      removeQueryResult: {
        reducer: function(p, h) {
          var y = h.payload.queryCacheKey;
          delete p[y];
        },
        prepare: Ot()
      },
      queryResultPatched: {
        reducer: function(p, h) {
          var y = h.payload, m = y.queryCacheKey, R = y.patches;
          Xt(p, m, function(_) {
            _.data = Ai(_.data, R.concat());
          });
        },
        prepare: Ot()
      }
    },
    extraReducers: function(p) {
      p.addCase(r.pending, function(h, y) {
        var m = y.meta, R = y.meta.arg, _, P, A = hn(R);
        (R.subscribe || A) && ((P = h[_ = R.queryCacheKey]) != null || (h[_] = {
          status: ne.uninitialized,
          endpointName: R.endpointName
        })), Xt(h, R.queryCacheKey, function(k) {
          k.status = ne.pending, k.requestId = A && k.requestId ? k.requestId : m.requestId, R.originalArgs !== void 0 && (k.originalArgs = R.originalArgs), k.startedTimeStamp = m.startedTimeStamp;
        });
      }).addCase(r.fulfilled, function(h, y) {
        var m = y.meta, R = y.payload;
        Xt(h, m.arg.queryCacheKey, function(_) {
          var P;
          if (!(_.requestId !== m.requestId && !hn(m.arg))) {
            var A = a[m.arg.endpointName].merge;
            if (_.status = ne.fulfilled, A)
              if (_.data !== void 0) {
                var k = m.fulfilledTimeStamp, N = m.arg, x = m.baseQueryMeta, U = m.requestId, L = gn(_.data, function(F) {
                  return A(F, R, {
                    arg: N.originalArgs,
                    baseQueryMeta: x,
                    fulfilledTimeStamp: k,
                    requestId: U
                  });
                });
                _.data = L;
              } else
                _.data = R;
            else
              _.data = (P = a[m.arg.endpointName].structuralSharing) == null || P ? ts(Be(_.data) ? Tl(_.data) : _.data, R) : R;
            delete _.error, _.fulfilledTimeStamp = m.fulfilledTimeStamp;
          }
        });
      }).addCase(r.rejected, function(h, y) {
        var m = y.meta, R = m.condition, _ = m.arg, P = m.requestId, A = y.error, k = y.payload;
        Xt(h, _.queryCacheKey, function(N) {
          if (!R) {
            if (N.requestId !== P)
              return;
            N.status = ne.rejected, N.error = k ?? A;
          }
        });
      }).addMatcher(o, function(h, y) {
        for (var m = u(y).queries, R = 0, _ = Object.entries(m); R < _.length; R++) {
          var P = _[R], A = P[0], k = P[1];
          ((k == null ? void 0 : k.status) === ne.fulfilled || (k == null ? void 0 : k.status) === ne.rejected) && (h[A] = k);
        }
      });
    }
  }), v = tt({
    name: e + "/mutations",
    initialState: kt,
    reducers: {
      removeMutationResult: {
        reducer: function(p, h) {
          var y = h.payload, m = Bt(y);
          m in p && delete p[m];
        },
        prepare: Ot()
      }
    },
    extraReducers: function(p) {
      p.addCase(n.pending, function(h, y) {
        var m = y.meta, R = y.meta, _ = R.requestId, P = R.arg, A = R.startedTimeStamp;
        P.track && (h[Bt(m)] = {
          requestId: _,
          status: ne.pending,
          endpointName: P.endpointName,
          startedTimeStamp: A
        });
      }).addCase(n.fulfilled, function(h, y) {
        var m = y.payload, R = y.meta;
        R.arg.track && qi(h, R, function(_) {
          _.requestId === R.requestId && (_.status = ne.fulfilled, _.data = m, _.fulfilledTimeStamp = R.fulfilledTimeStamp);
        });
      }).addCase(n.rejected, function(h, y) {
        var m = y.payload, R = y.error, _ = y.meta;
        _.arg.track && qi(h, _, function(P) {
          P.requestId === _.requestId && (P.status = ne.rejected, P.error = m ?? R);
        });
      }).addMatcher(o, function(h, y) {
        for (var m = u(y).mutations, R = 0, _ = Object.entries(m); R < _.length; R++) {
          var P = _[R], A = P[0], k = P[1];
          ((k == null ? void 0 : k.status) === ne.fulfilled || (k == null ? void 0 : k.status) === ne.rejected) && A !== (k == null ? void 0 : k.requestId) && (h[A] = k);
        }
      });
    }
  }), I = tt({
    name: e + "/invalidation",
    initialState: kt,
    reducers: {
      updateProvidedBy: {
        reducer: function(p, h) {
          for (var y, m, R, _, P = h.payload, A = P.queryCacheKey, k = P.providedTags, N = 0, x = Object.values(p); N < x.length; N++)
            for (var U = x[N], L = 0, F = Object.values(U); L < F.length; L++) {
              var W = F[L], $ = W.indexOf(A);
              $ !== -1 && W.splice($, 1);
            }
          for (var V = 0, K = k; V < K.length; V++) {
            var B = K[V], G = B.type, H = B.id, J = (_ = (m = (y = p[G]) != null ? y : p[G] = {})[R = H || "__internal_without_id"]) != null ? _ : m[R] = [], re = J.includes(A);
            re || J.push(A);
          }
        },
        prepare: Ot()
      }
    },
    extraReducers: function(p) {
      p.addCase(b.actions.removeQueryResult, function(h, y) {
        for (var m = y.payload.queryCacheKey, R = 0, _ = Object.values(h); R < _.length; R++)
          for (var P = _[R], A = 0, k = Object.values(P); A < k.length; A++) {
            var N = k[A], x = N.indexOf(m);
            x !== -1 && N.splice(x, 1);
          }
      }).addMatcher(o, function(h, y) {
        for (var m, R, _, P, A = u(y).provided, k = 0, N = Object.entries(A); k < N.length; k++)
          for (var x = N[k], U = x[0], L = x[1], F = 0, W = Object.entries(L); F < W.length; F++)
            for (var $ = W[F], V = $[0], K = $[1], B = (P = (R = (m = h[U]) != null ? m : h[U] = {})[_ = V || "__internal_without_id"]) != null ? P : R[_] = [], G = 0, H = K; G < H.length; G++) {
              var J = H[G], re = B.includes(J);
              re || B.push(J);
            }
      }).addMatcher(Zi(St(r), vn(r)), function(h, y) {
        var m = as(y, "providesTags", a, l), R = y.meta.arg.queryCacheKey;
        I.caseReducers.updateProvidedBy(h, I.actions.updateProvidedBy({
          queryCacheKey: R,
          providedTags: m
        }));
      });
    }
  }), S = tt({
    name: e + "/subscriptions",
    initialState: kt,
    reducers: {
      updateSubscriptionOptions: function(p, h) {
      },
      unsubscribeQueryResult: function(p, h) {
      },
      internal_probeSubscription: function(p, h) {
      }
    }
  }), T = tt({
    name: e + "/internalSubscriptions",
    initialState: kt,
    reducers: {
      subscriptionsUpdated: {
        reducer: function(p, h) {
          return Ai(p, h.payload);
        },
        prepare: Ot()
      }
    }
  }), O = tt({
    name: e + "/config",
    initialState: ae({
      online: Gl(),
      focused: Jl(),
      middlewareRegistered: !1
    }, g),
    reducers: {
      middlewareRegistered: function(p, h) {
        var y = h.payload;
        p.middlewareRegistered = p.middlewareRegistered === "conflict" || s !== y ? "conflict" : !0;
      }
    },
    extraReducers: function(p) {
      p.addCase(xn, function(h) {
        h.online = !0;
      }).addCase(ns, function(h) {
        h.online = !1;
      }).addCase(Nn, function(h) {
        h.focused = !0;
      }).addCase(rs, function(h) {
        h.focused = !1;
      }).addMatcher(o, function(h) {
        return ae({}, h);
      });
    }
  }), E = ea({
    queries: b.reducer,
    mutations: v.reducer,
    provided: I.reducer,
    subscriptions: T.reducer,
    config: O.reducer
  }), w = function(p, h) {
    return E(f.match(h) ? void 0 : p, h);
  }, d = ke(ae(ae(ae(ae(ae(ae({}, O.actions), b.actions), S.actions), T.actions), v.actions), I.actions), {
    unsubscribeMutationResult: v.actions.removeMutationResult,
    resetApiState: f
  });
  return { reducer: w, actions: d };
}
var at = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), ss = {
  status: ne.uninitialized
}, Bi = /* @__PURE__ */ gn(ss, function() {
}), $i = /* @__PURE__ */ gn(ss, function() {
});
function ad(t) {
  var e = t.serializeQueryArgs, r = t.reducerPath, n = function(g) {
    return Bi;
  }, i = function(g) {
    return $i;
  };
  return { buildQuerySelector: u, buildMutationSelector: o, selectInvalidatedBy: l };
  function a(g) {
    return ae(ae({}, g), Hl(g.status));
  }
  function s(g) {
    var f = g[r];
    if (process.env.NODE_ENV !== "production" && !f) {
      if (s.triggered)
        return f;
      s.triggered = !0, console.error("Error: No data found at `state." + r + "`. Did you forget to add the reducer to the store?");
    }
    return f;
  }
  function u(g, f) {
    return function(b) {
      var v = e({
        queryArgs: b,
        endpointDefinition: f,
        endpointName: g
      }), I = function(T) {
        var O, E, w;
        return (w = (E = (O = s(T)) == null ? void 0 : O.queries) == null ? void 0 : E[v]) != null ? w : Bi;
      }, S = b === at ? n : I;
      return Dt(S, a);
    };
  }
  function o() {
    return function(g) {
      var f, b;
      typeof g == "object" ? b = (f = Bt(g)) != null ? f : at : b = g;
      var v = function(S) {
        var T, O, E;
        return (E = (O = (T = s(S)) == null ? void 0 : T.mutations) == null ? void 0 : O[b]) != null ? E : $i;
      }, I = b === at ? i : v;
      return Dt(I, a);
    };
  }
  function l(g, f) {
    for (var b, v = g[r], I = /* @__PURE__ */ new Set(), S = 0, T = f.map(fn); S < T.length; S++) {
      var O = T[S], E = v.provided[O.type];
      if (E)
        for (var w = (b = O.id !== void 0 ? E[O.id] : xi(Object.values(E))) != null ? b : [], d = 0, p = w; d < p.length; d++) {
          var h = p[d];
          I.add(h);
        }
    }
    return xi(Array.from(I.values()).map(function(y) {
      var m = v.queries[y];
      return m ? [
        {
          queryCacheKey: y,
          endpointName: m.endpointName,
          originalArgs: m.originalArgs
        }
      ] : [];
    }));
  }
}
var Zt = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Vi = function(t) {
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
};
function sd() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(n) {
    var i = Ci(function(g) {
      var f, b;
      return (b = n.extractRehydrationInfo) == null ? void 0 : b.call(n, g, {
        reducerPath: (f = n.reducerPath) != null ? f : "api"
      });
    }), a = ke(ae({
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1
    }, n), {
      extractRehydrationInfo: i,
      serializeQueryArgs: function(g) {
        var f = Vi;
        if ("serializeQueryArgs" in g.endpointDefinition) {
          var b = g.endpointDefinition.serializeQueryArgs;
          f = function(v) {
            var I = b(v);
            return typeof I == "string" ? I : Vi(ke(ae({}, v), {
              queryArgs: I
            }));
          };
        } else
          n.serializeQueryArgs && (f = n.serializeQueryArgs);
        return f(g);
      },
      tagTypes: Ir([], n.tagTypes || [])
    }), s = {
      endpointDefinitions: {},
      batch: function(g) {
        g();
      },
      apiUid: xs(),
      extractRehydrationInfo: i,
      hasRehydrationInfo: Ci(function(g) {
        return i(g) != null;
      })
    }, u = {
      injectEndpoints: l,
      enhanceEndpoints: function(g) {
        var f = g.addTagTypes, b = g.endpoints;
        if (f)
          for (var v = 0, I = f; v < I.length; v++) {
            var S = I[v];
            a.tagTypes.includes(S) || a.tagTypes.push(S);
          }
        if (b)
          for (var T = 0, O = Object.entries(b); T < O.length; T++) {
            var E = O[T], w = E[0], d = E[1];
            typeof d == "function" ? d(s.endpointDefinitions[w]) : Object.assign(s.endpointDefinitions[w] || {}, d);
          }
        return u;
      }
    }, o = t.map(function(g) {
      return g.init(u, a, s);
    });
    function l(g) {
      for (var f = g.endpoints({
        query: function(d) {
          return ke(ae({}, d), { type: xe.query });
        },
        mutation: function(d) {
          return ke(ae({}, d), { type: xe.mutation });
        }
      }), b = 0, v = Object.entries(f); b < v.length; b++) {
        var I = v[b], S = I[0], T = I[1];
        if (!g.overrideExisting && S in s.endpointDefinitions) {
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error("called `injectEndpoints` to override already-existing endpointName " + S + " without specifying `overrideExisting: true`");
          continue;
        }
        s.endpointDefinitions[S] = T;
        for (var O = 0, E = o; O < E.length; O++) {
          var w = E[O];
          w.injectEndpoint(S, T);
        }
      }
      return u;
    }
    return u.injectEndpoints({ endpoints: n.endpoints });
  };
}
function od(t) {
  for (var e in t)
    return !1;
  return !0;
}
var ud = 2147483647 / 1e3 - 1, cd = function(t) {
  var e = t.reducerPath, r = t.api, n = t.context, i = t.internalState, a = r.internalActions, s = a.removeQueryResult, u = a.unsubscribeQueryResult;
  function o(b) {
    var v = i.currentSubscriptions[b];
    return !!v && !od(v);
  }
  var l = {}, g = function(b, v, I) {
    var S;
    if (u.match(b)) {
      var T = v.getState()[e], O = b.payload.queryCacheKey;
      f(O, (S = T.queries[O]) == null ? void 0 : S.endpointName, v, T.config);
    }
    if (r.util.resetApiState.match(b))
      for (var E = 0, w = Object.entries(l); E < w.length; E++) {
        var d = w[E], p = d[0], h = d[1];
        h && clearTimeout(h), delete l[p];
      }
    if (n.hasRehydrationInfo(b))
      for (var T = v.getState()[e], y = n.extractRehydrationInfo(b).queries, m = 0, R = Object.entries(y); m < R.length; m++) {
        var _ = R[m], O = _[0], P = _[1];
        f(O, P == null ? void 0 : P.endpointName, v, T.config);
      }
  };
  function f(b, v, I, S) {
    var T, O = n.endpointDefinitions[v], E = (T = O == null ? void 0 : O.keepUnusedDataFor) != null ? T : S.keepUnusedDataFor;
    if (E !== 1 / 0) {
      var w = Math.max(0, Math.min(E, ud));
      if (!o(b)) {
        var d = l[b];
        d && clearTimeout(d), l[b] = setTimeout(function() {
          o(b) || I.dispatch(s({ queryCacheKey: b })), delete l[b];
        }, w * 1e3);
      }
    }
  }
  return g;
}, ld = function(t) {
  var e = t.reducerPath, r = t.context, n = t.context.endpointDefinitions, i = t.mutationThunk, a = t.api, s = t.assertTagType, u = t.refetchQuery, o = a.internalActions.removeQueryResult, l = Zi(St(i), vn(i)), g = function(b, v) {
    l(b) && f(as(b, "invalidatesTags", n, s), v), a.util.invalidateTags.match(b) && f(Mn(b.payload, void 0, void 0, void 0, void 0, s), v);
  };
  function f(b, v) {
    var I = v.getState(), S = I[e], T = a.util.selectInvalidatedBy(I, b);
    r.batch(function() {
      for (var O, E = Array.from(T.values()), w = 0, d = E; w < d.length; w++) {
        var p = d[w].queryCacheKey, h = S.queries[p], y = (O = S.subscriptions[p]) != null ? O : {};
        h && (Object.keys(y).length === 0 ? v.dispatch(o({
          queryCacheKey: p
        })) : h.status !== ne.uninitialized && v.dispatch(u(h, p)));
      }
    });
  }
  return g;
}, dd = function(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.api, i = t.refetchQuery, a = t.internalState, s = {}, u = function(v, I) {
    (n.internalActions.updateSubscriptionOptions.match(v) || n.internalActions.unsubscribeQueryResult.match(v)) && l(v.payload, I), (r.pending.match(v) || r.rejected.match(v) && v.meta.condition) && l(v.meta.arg, I), (r.fulfilled.match(v) || r.rejected.match(v) && !v.meta.condition) && o(v.meta.arg, I), n.util.resetApiState.match(v) && f();
  };
  function o(v, I) {
    var S = v.queryCacheKey, T = I.getState()[e], O = T.queries[S], E = a.currentSubscriptions[S];
    if (!(!O || O.status === ne.uninitialized)) {
      var w = b(E);
      if (Number.isFinite(w)) {
        var d = s[S];
        d != null && d.timeout && (clearTimeout(d.timeout), d.timeout = void 0);
        var p = Date.now() + w, h = s[S] = {
          nextPollTimestamp: p,
          pollingInterval: w,
          timeout: setTimeout(function() {
            h.timeout = void 0, I.dispatch(i(O, S));
          }, w)
        };
      }
    }
  }
  function l(v, I) {
    var S = v.queryCacheKey, T = I.getState()[e], O = T.queries[S], E = a.currentSubscriptions[S];
    if (!(!O || O.status === ne.uninitialized)) {
      var w = b(E);
      if (!Number.isFinite(w)) {
        g(S);
        return;
      }
      var d = s[S], p = Date.now() + w;
      (!d || p < d.nextPollTimestamp) && o({ queryCacheKey: S }, I);
    }
  }
  function g(v) {
    var I = s[v];
    I != null && I.timeout && clearTimeout(I.timeout), delete s[v];
  }
  function f() {
    for (var v = 0, I = Object.keys(s); v < I.length; v++) {
      var S = I[v];
      g(S);
    }
  }
  function b(v) {
    v === void 0 && (v = {});
    var I = Number.POSITIVE_INFINITY;
    for (var S in v)
      v[S].pollingInterval && (I = Math.min(v[S].pollingInterval, I));
    return I;
  }
  return u;
}, fd = function(t) {
  var e = t.reducerPath, r = t.context, n = t.api, i = t.refetchQuery, a = t.internalState, s = n.internalActions.removeQueryResult, u = function(l, g) {
    Nn.match(l) && o(g, "refetchOnFocus"), xn.match(l) && o(g, "refetchOnReconnect");
  };
  function o(l, g) {
    var f = l.getState()[e], b = f.queries, v = a.currentSubscriptions;
    r.batch(function() {
      for (var I = 0, S = Object.keys(v); I < S.length; I++) {
        var T = S[I], O = b[T], E = v[T];
        if (!(!E || !O)) {
          var w = Object.values(E).some(function(d) {
            return d[g] === !0;
          }) || Object.values(E).every(function(d) {
            return d[g] === void 0;
          }) && f.config[g];
          w && (Object.keys(E).length === 0 ? l.dispatch(s({
            queryCacheKey: T
          })) : O.status !== ne.uninitialized && l.dispatch(i(O, T)));
        }
      }
    });
  }
  return u;
}, Hi = new Error("Promise never resolved before cacheEntryRemoved."), hd = function(t) {
  var e = t.api, r = t.reducerPath, n = t.context, i = t.queryThunk, a = t.mutationThunk;
  t.internalState;
  var s = Jn(i), u = Jn(a), o = St(i, a), l = {}, g = function(v, I, S) {
    var T = f(v);
    if (i.pending.match(v)) {
      var O = S[r].queries[T], E = I.getState()[r].queries[T];
      !O && E && b(v.meta.arg.endpointName, v.meta.arg.originalArgs, T, I, v.meta.requestId);
    } else if (a.pending.match(v)) {
      var E = I.getState()[r].mutations[T];
      E && b(v.meta.arg.endpointName, v.meta.arg.originalArgs, T, I, v.meta.requestId);
    } else if (o(v)) {
      var w = l[T];
      w != null && w.valueResolved && (w.valueResolved({
        data: v.payload,
        meta: v.meta.baseQueryMeta
      }), delete w.valueResolved);
    } else if (e.internalActions.removeQueryResult.match(v) || e.internalActions.removeMutationResult.match(v)) {
      var w = l[T];
      w && (delete l[T], w.cacheEntryRemoved());
    } else if (e.util.resetApiState.match(v))
      for (var d = 0, p = Object.entries(l); d < p.length; d++) {
        var h = p[d], y = h[0], w = h[1];
        delete l[y], w.cacheEntryRemoved();
      }
  };
  function f(v) {
    return s(v) ? v.meta.arg.queryCacheKey : u(v) ? v.meta.requestId : e.internalActions.removeQueryResult.match(v) ? v.payload.queryCacheKey : e.internalActions.removeMutationResult.match(v) ? Bt(v.payload) : "";
  }
  function b(v, I, S, T, O) {
    var E = n.endpointDefinitions[v], w = E == null ? void 0 : E.onCacheEntryAdded;
    if (w) {
      var d = {}, p = new Promise(function(P) {
        d.cacheEntryRemoved = P;
      }), h = Promise.race([
        new Promise(function(P) {
          d.valueResolved = P;
        }),
        p.then(function() {
          throw Hi;
        })
      ]);
      h.catch(function() {
      }), l[S] = d;
      var y = e.endpoints[v].select(E.type === xe.query ? I : S), m = T.dispatch(function(P, A, k) {
        return k;
      }), R = ke(ae({}, T), {
        getCacheEntry: function() {
          return y(T.getState());
        },
        requestId: O,
        extra: m,
        updateCachedData: E.type === xe.query ? function(P) {
          return T.dispatch(e.util.updateQueryData(v, I, P));
        } : void 0,
        cacheDataLoaded: h,
        cacheEntryRemoved: p
      }), _ = w(I, R);
      Promise.resolve(_).catch(function(P) {
        if (P !== Hi)
          throw P;
      });
    }
  }
  return g;
}, pd = function(t) {
  var e = t.api, r = t.context, n = t.queryThunk, i = t.mutationThunk, a = ta(n, i), s = ra(n, i), u = St(n, i), o = {}, l = function(g, f) {
    var b, v, I;
    if (a(g)) {
      var S = g.meta, T = S.requestId, O = S.arg, E = O.endpointName, w = O.originalArgs, d = r.endpointDefinitions[E], p = d == null ? void 0 : d.onQueryStarted;
      if (p) {
        var h = {}, y = new Promise(function(x, U) {
          h.resolve = x, h.reject = U;
        });
        y.catch(function() {
        }), o[T] = h;
        var m = e.endpoints[E].select(d.type === xe.query ? w : T), R = f.dispatch(function(x, U, L) {
          return L;
        }), _ = ke(ae({}, f), {
          getCacheEntry: function() {
            return m(f.getState());
          },
          requestId: T,
          extra: R,
          updateCachedData: d.type === xe.query ? function(x) {
            return f.dispatch(e.util.updateQueryData(E, w, x));
          } : void 0,
          queryFulfilled: y
        });
        p(w, _);
      }
    } else if (u(g)) {
      var P = g.meta, T = P.requestId, A = P.baseQueryMeta;
      (b = o[T]) == null || b.resolve({
        data: g.payload,
        meta: A
      }), delete o[T];
    } else if (s(g)) {
      var k = g.meta, T = k.requestId, N = k.rejectedWithValue, A = k.baseQueryMeta;
      (I = o[T]) == null || I.reject({
        error: (v = g.payload) != null ? v : g.error,
        isUnhandledError: !N,
        meta: A
      }), delete o[T];
    }
  };
  return l;
}, vd = function(t) {
  var e = t.api, r = t.context.apiUid, n = t.reducerPath;
  return function(i, a) {
    var s, u;
    e.util.resetApiState.match(i) && a.dispatch(e.internalActions.middlewareRegistered(r)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(i) && i.payload === r && ((u = (s = a.getState()[n]) == null ? void 0 : s.config) == null ? void 0 : u.middlewareRegistered) === "conflict" && console.warn('There is a mismatch between slice and middleware for the reducerPath "' + n + `".
You can only have one api per reducer path, this will lead to crashes in various situations!` + (n === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""));
  };
}, Wi, gd = typeof queueMicrotask == "function" ? queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis) : function(t) {
  return (Wi || (Wi = Promise.resolve())).then(t).catch(function(e) {
    return setTimeout(function() {
      throw e;
    }, 0);
  });
}, md = function(t) {
  var e = t.api, r = t.queryThunk, n = t.internalState, i = e.reducerPath + "/subscriptions", a = null, s = !1, u = e.internalActions, o = u.updateSubscriptionOptions, l = u.unsubscribeQueryResult, g = function(f, b) {
    var v, I, S, T, O, E, w, d, p;
    if (o.match(b)) {
      var h = b.payload, y = h.queryCacheKey, m = h.requestId, R = h.options;
      return (v = f == null ? void 0 : f[y]) != null && v[m] && (f[y][m] = R), !0;
    }
    if (l.match(b)) {
      var _ = b.payload, y = _.queryCacheKey, m = _.requestId;
      return f[y] && delete f[y][m], !0;
    }
    if (e.internalActions.removeQueryResult.match(b))
      return delete f[b.payload.queryCacheKey], !0;
    if (r.pending.match(b)) {
      var P = b.meta, A = P.arg, m = P.requestId;
      if (A.subscribe) {
        var k = (S = f[I = A.queryCacheKey]) != null ? S : f[I] = {};
        return k[m] = (O = (T = A.subscriptionOptions) != null ? T : k[m]) != null ? O : {}, !0;
      }
    }
    if (r.rejected.match(b)) {
      var N = b.meta, x = N.condition, A = N.arg, m = N.requestId;
      if (x && A.subscribe) {
        var k = (w = f[E = A.queryCacheKey]) != null ? w : f[E] = {};
        return k[m] = (p = (d = A.subscriptionOptions) != null ? d : k[m]) != null ? p : {}, !0;
      }
    }
    return !1;
  };
  return function(f, b) {
    var v, I;
    if (a || (a = JSON.parse(JSON.stringify(n.currentSubscriptions))), e.util.resetApiState.match(f))
      return a = n.currentSubscriptions = {}, [!0, !1];
    if (e.internalActions.internal_probeSubscription.match(f)) {
      var S = f.payload, T = S.queryCacheKey, O = S.requestId, E = !!((v = n.currentSubscriptions[T]) != null && v[O]);
      return [!1, E];
    }
    var w = g(n.currentSubscriptions, f);
    if (w) {
      s || (gd(function() {
        var y = JSON.parse(JSON.stringify(n.currentSubscriptions)), m = Xa(a, function() {
          return y;
        }), R = m[1];
        b.next(e.internalActions.subscriptionsUpdated(R)), a = y, s = !1;
      }), s = !0);
      var d = !!((I = f.type) != null && I.startsWith(i)), p = r.rejected.match(f) && f.meta.condition && !!f.meta.arg.subscribe, h = !d && !p;
      return [h, !1];
    }
    return [!0, !1];
  };
};
function yd(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.api, i = t.context, a = i.apiUid, s = {
    invalidateTags: wt(e + "/invalidateTags")
  }, u = function(f) {
    return !!f && typeof f.type == "string" && f.type.startsWith(e + "/");
  }, o = [
    vd,
    cd,
    ld,
    dd,
    hd,
    pd
  ], l = function(f) {
    var b = !1, v = {
      currentSubscriptions: {}
    }, I = ke(ae({}, t), {
      internalState: v,
      refetchQuery: g
    }), S = o.map(function(E) {
      return E(I);
    }), T = md(I), O = fd(I);
    return function(E) {
      return function(w) {
        b || (b = !0, f.dispatch(n.internalActions.middlewareRegistered(a)));
        var d = ke(ae({}, f), { next: E }), p = f.getState(), h = T(w, d, p), y = h[0], m = h[1], R;
        if (y ? R = E(w) : R = m, f.getState()[e] && (O(w, d, p), u(w) || i.hasRehydrationInfo(w)))
          for (var _ = 0, P = S; _ < P.length; _++) {
            var A = P[_];
            A(w, d, p);
          }
        return R;
      };
    };
  };
  return { middleware: l, actions: s };
  function g(f, b, v) {
    return v === void 0 && (v = {}), r(ae({
      type: "query",
      endpointName: f.endpointName,
      originalArgs: f.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: b
    }, v));
  }
}
function ze(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  Object.assign.apply(Object, Ir([t], e));
}
var zi = /* @__PURE__ */ Symbol(), bd = function() {
  return {
    name: zi,
    init: function(t, e, r) {
      var n = e.baseQuery, i = e.tagTypes, a = e.reducerPath, s = e.serializeQueryArgs, u = e.keepUnusedDataFor, o = e.refetchOnMountOrArgChange, l = e.refetchOnFocus, g = e.refetchOnReconnect;
      Al();
      var f = function(B) {
        return typeof process < "u" && process.env.NODE_ENV === "development" && (i.includes(B.type) || console.error("Tag type '" + B.type + "' was used, but not specified in `tagTypes`!")), B;
      };
      Object.assign(t, {
        reducerPath: a,
        endpoints: {},
        internalActions: {
          onOnline: xn,
          onOffline: ns,
          onFocus: Nn,
          onFocusLost: rs
        },
        util: {}
      });
      var b = nd({
        baseQuery: n,
        reducerPath: a,
        context: r,
        api: t,
        serializeQueryArgs: s,
        assertTagType: f
      }), v = b.queryThunk, I = b.mutationThunk, S = b.patchQueryData, T = b.updateQueryData, O = b.upsertQueryData, E = b.prefetch, w = b.buildMatchThunkActions, d = id({
        context: r,
        queryThunk: v,
        mutationThunk: I,
        reducerPath: a,
        assertTagType: f,
        config: {
          refetchOnFocus: l,
          refetchOnReconnect: g,
          refetchOnMountOrArgChange: o,
          keepUnusedDataFor: u,
          reducerPath: a
        }
      }), p = d.reducer, h = d.actions;
      ze(t.util, {
        patchQueryData: S,
        updateQueryData: T,
        upsertQueryData: O,
        prefetch: E,
        resetApiState: h.resetApiState
      }), ze(t.internalActions, h);
      var y = yd({
        reducerPath: a,
        context: r,
        queryThunk: v,
        mutationThunk: I,
        api: t,
        assertTagType: f
      }), m = y.middleware, R = y.actions;
      ze(t.util, R), ze(t, { reducer: p, middleware: m });
      var _ = ad({
        serializeQueryArgs: s,
        reducerPath: a
      }), P = _.buildQuerySelector, A = _.buildMutationSelector, k = _.selectInvalidatedBy;
      ze(t.util, { selectInvalidatedBy: k });
      var N = rd({
        queryThunk: v,
        mutationThunk: I,
        api: t,
        serializeQueryArgs: s,
        context: r
      }), x = N.buildInitiateQuery, U = N.buildInitiateMutation, L = N.getRunningMutationThunk, F = N.getRunningMutationsThunk, W = N.getRunningQueriesThunk, $ = N.getRunningQueryThunk, V = N.getRunningOperationPromises, K = N.removalWarning;
      return ze(t.util, {
        getRunningOperationPromises: V,
        getRunningOperationPromise: K,
        getRunningMutationThunk: L,
        getRunningMutationsThunk: F,
        getRunningQueryThunk: $,
        getRunningQueriesThunk: W
      }), {
        name: zi,
        injectEndpoint: function(B, G) {
          var H, J, re = t;
          (J = (H = re.endpoints)[B]) != null || (H[B] = {}), is(G) ? ze(re.endpoints[B], {
            name: B,
            select: P(B, G),
            initiate: x(B, G)
          }, w(v, B)) : ed(G) && ze(re.endpoints[B], {
            name: B,
            select: A(),
            initiate: U(B)
          }, w(I, B));
        }
      };
    }
  };
}, _d = globalThis && globalThis.__spreadArray || function(t, e) {
  for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
    t[i] = e[r];
  return t;
}, Id = Object.defineProperty, wd = Object.defineProperties, Sd = Object.getOwnPropertyDescriptors, Qi = Object.getOwnPropertySymbols, Td = Object.prototype.hasOwnProperty, Ed = Object.prototype.propertyIsEnumerable, Ki = function(t, e, r) {
  return e in t ? Id(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
}, Le = function(t, e) {
  for (var r in e || (e = {}))
    Td.call(e, r) && Ki(t, r, e[r]);
  if (Qi)
    for (var n = 0, i = Qi(e); n < i.length; n++) {
      var r = i[n];
      Ed.call(e, r) && Ki(t, r, e[r]);
    }
  return t;
}, or = function(t, e) {
  return wd(t, Sd(e));
};
function Gi(t, e, r, n) {
  var i = we(function() {
    return {
      queryArgs: t,
      serialized: typeof t == "object" ? e({ queryArgs: t, endpointDefinition: r, endpointName: n }) : t
    };
  }, [t, e, r, n]), a = Se(i);
  return ue(function() {
    a.current.serialized !== i.serialized && (a.current = i);
  }, [i]), a.current.serialized === i.serialized ? a.current.queryArgs : t;
}
var Gr = Symbol();
function Jr(t) {
  var e = Se(t);
  return ue(function() {
    ur(e.current, t) || (e.current = t);
  }, [t]), ur(e.current, t) ? e.current : t;
}
var er = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Od = function(t) {
  var e = t.endpointName, r = t.queryArgs, n = "", i = er == null ? void 0 : er.get(r);
  if (typeof i == "string")
    n = i;
  else {
    var a = JSON.stringify(r, function(s, u) {
      return ut(u) ? Object.keys(u).sort().reduce(function(o, l) {
        return o[l] = u[l], o;
      }, {}) : u;
    });
    ut(r) && (er == null || er.set(r, a)), n = a;
  }
  return e + "(" + n + ")";
}, Rd = typeof window < "u" && window.document && window.document.createElement ? Ds : ue, Pd = function(t) {
  return t;
}, kd = function(t) {
  return t.isUninitialized ? or(Le({}, t), {
    isUninitialized: !1,
    isFetching: !0,
    isLoading: t.data === void 0,
    status: ne.pending
  }) : t;
};
function Ad(t) {
  var e = t.api, r = t.moduleOptions, n = r.batch, i = r.useDispatch, a = r.useSelector, s = r.useStore, u = r.unstable__sideEffectsInRender, o = t.serializeQueryArgs, l = t.context, g = u ? function(S) {
    return S();
  } : ue;
  return { buildQueryHooks: v, buildMutationHook: I, usePrefetch: b };
  function f(S, T, O) {
    if (T != null && T.endpointName && S.isUninitialized) {
      var E = T.endpointName, w = l.endpointDefinitions[E];
      o({
        queryArgs: T.originalArgs,
        endpointDefinition: w,
        endpointName: E
      }) === o({
        queryArgs: O,
        endpointDefinition: w,
        endpointName: E
      }) && (T = void 0);
    }
    var d = S.isSuccess ? S.data : T == null ? void 0 : T.data;
    d === void 0 && (d = S.data);
    var p = d !== void 0, h = S.isLoading, y = !p && h, m = S.isSuccess || h && p;
    return or(Le({}, S), {
      data: d,
      currentData: S.data,
      isFetching: h,
      isLoading: y,
      isSuccess: m
    });
  }
  function b(S, T) {
    var O = i(), E = Jr(T);
    return At(function(w, d) {
      return O(e.util.prefetch(S, w, Le(Le({}, E), d)));
    }, [S, O, E]);
  }
  function v(S) {
    var T = function(w, d) {
      var p = d === void 0 ? {} : d, h = p.refetchOnReconnect, y = p.refetchOnFocus, m = p.refetchOnMountOrArgChange, R = p.skip, _ = R === void 0 ? !1 : R, P = p.pollingInterval, A = P === void 0 ? 0 : P, k = e.endpoints[S].initiate, N = i(), x = Gi(_ ? at : w, Od, l.endpointDefinitions[S], S), U = Jr({
        refetchOnReconnect: h,
        refetchOnFocus: y,
        pollingInterval: A
      }), L = Se(!1), F = Se(), W = F.current || {}, $ = W.queryCacheKey, V = W.requestId, K = !1;
      if ($ && V) {
        var B = N(e.internalActions.internal_probeSubscription({
          queryCacheKey: $,
          requestId: V
        }));
        if (process.env.NODE_ENV !== "production" && typeof B != "boolean")
          throw new Error('Warning: Middleware for RTK-Query API at reducerPath "' + e.reducerPath + `" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
        K = !!B;
      }
      var G = !K && L.current;
      return g(function() {
        L.current = K;
      }), g(function() {
        G && (F.current = void 0);
      }, [G]), g(function() {
        var H, J = F.current;
        if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(G), x === at) {
          J == null || J.unsubscribe(), F.current = void 0;
          return;
        }
        var re = (H = F.current) == null ? void 0 : H.subscriptionOptions;
        if (!J || J.arg !== x) {
          J == null || J.unsubscribe();
          var fe = N(k(x, {
            subscriptionOptions: U,
            forceRefetch: m
          }));
          F.current = fe;
        } else
          U !== re && J.updateSubscriptionOptions(U);
      }, [
        N,
        k,
        m,
        x,
        U,
        G
      ]), ue(function() {
        return function() {
          var H;
          (H = F.current) == null || H.unsubscribe(), F.current = void 0;
        };
      }, []), we(function() {
        return {
          refetch: function() {
            var H;
            if (!F.current)
              throw new Error("Cannot refetch a query that has not been started yet.");
            return (H = F.current) == null ? void 0 : H.refetch();
          }
        };
      }, []);
    }, O = function(w) {
      var d = w === void 0 ? {} : w, p = d.refetchOnReconnect, h = d.refetchOnFocus, y = d.pollingInterval, m = y === void 0 ? 0 : y, R = e.endpoints[S].initiate, _ = i(), P = Kn(Gr), A = P[0], k = P[1], N = Se(), x = Jr({
        refetchOnReconnect: p,
        refetchOnFocus: h,
        pollingInterval: m
      });
      g(function() {
        var F, W, $ = (F = N.current) == null ? void 0 : F.subscriptionOptions;
        x !== $ && ((W = N.current) == null || W.updateSubscriptionOptions(x));
      }, [x]);
      var U = Se(x);
      g(function() {
        U.current = x;
      }, [x]);
      var L = At(function(F, W) {
        W === void 0 && (W = !1);
        var $;
        return n(function() {
          var V;
          (V = N.current) == null || V.unsubscribe(), N.current = $ = _(R(F, {
            subscriptionOptions: U.current,
            forceRefetch: !W
          })), k(F);
        }), $;
      }, [_, R]);
      return ue(function() {
        return function() {
          var F;
          (F = N == null ? void 0 : N.current) == null || F.unsubscribe();
        };
      }, []), ue(function() {
        A !== Gr && !N.current && L(A, !0);
      }, [A, L]), we(function() {
        return [L, A];
      }, [L, A]);
    }, E = function(w, d) {
      var p = d === void 0 ? {} : d, h = p.skip, y = h === void 0 ? !1 : h, m = p.selectFromResult, R = e.endpoints[S].select, _ = Gi(y ? at : w, o, l.endpointDefinitions[S], S), P = Se(), A = we(function() {
        return Dt([
          R(_),
          function(L, F) {
            return F;
          },
          function(L) {
            return _;
          }
        ], f);
      }, [R, _]), k = we(function() {
        return m ? Dt([A], m) : A;
      }, [A, m]), N = a(function(L) {
        return k(L, P.current);
      }, ur), x = s(), U = A(x.getState(), P.current);
      return Rd(function() {
        P.current = U;
      }, [U]), N;
    };
    return {
      useQueryState: E,
      useQuerySubscription: T,
      useLazyQuerySubscription: O,
      useLazyQuery: function(w) {
        var d = O(w), p = d[0], h = d[1], y = E(h, or(Le({}, w), {
          skip: h === Gr
        })), m = we(function() {
          return { lastArg: h };
        }, [h]);
        return we(function() {
          return [p, y, m];
        }, [p, y, m]);
      },
      useQuery: function(w, d) {
        var p = T(w, d), h = E(w, Le({
          selectFromResult: w === at || d != null && d.skip ? void 0 : kd
        }, d)), y = h.data, m = h.status, R = h.isLoading, _ = h.isSuccess, P = h.isError, A = h.error;
        return Qn({ data: y, status: m, isLoading: R, isSuccess: _, isError: P, error: A }), we(function() {
          return Le(Le({}, h), p);
        }, [h, p]);
      }
    };
  }
  function I(S) {
    return function(T) {
      var O = T === void 0 ? {} : T, E = O.selectFromResult, w = E === void 0 ? Pd : E, d = O.fixedCacheKey, p = e.endpoints[S], h = p.select, y = p.initiate, m = i(), R = Kn(), _ = R[0], P = R[1];
      ue(function() {
        return function() {
          _ != null && _.arg.fixedCacheKey || _ == null || _.reset();
        };
      }, [_]);
      var A = At(function(J) {
        var re = m(y(J, { fixedCacheKey: d }));
        return P(re), re;
      }, [m, y, d]), k = (_ || {}).requestId, N = we(function() {
        return Dt([h({ fixedCacheKey: d, requestId: _ == null ? void 0 : _.requestId })], w);
      }, [h, _, w, d]), x = a(N, ur), U = d == null ? _ == null ? void 0 : _.arg.originalArgs : void 0, L = At(function() {
        n(function() {
          _ && P(void 0), d && m(e.internalActions.removeMutationResult({
            requestId: k,
            fixedCacheKey: d
          }));
        });
      }, [m, d, _, k]), F = x.endpointName, W = x.data, $ = x.status, V = x.isLoading, K = x.isSuccess, B = x.isError, G = x.error;
      Qn({
        endpointName: F,
        data: W,
        status: $,
        isLoading: V,
        isSuccess: K,
        isError: B,
        error: G
      });
      var H = we(function() {
        return or(Le({}, x), { originalArgs: U, reset: L });
      }, [x, U, L]);
      return we(function() {
        return [A, H];
      }, [A, H]);
    };
  }
}
var Tr;
(function(t) {
  t.query = "query", t.mutation = "mutation";
})(Tr || (Tr = {}));
function Cd(t) {
  return t.type === Tr.query;
}
function Dd(t) {
  return t.type === Tr.mutation;
}
function Yr(t) {
  return t.replace(t[0], t[0].toUpperCase());
}
function tr(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  Object.assign.apply(Object, _d([t], e));
}
var Nd = /* @__PURE__ */ Symbol(), xd = function(t) {
  var e = t === void 0 ? {} : t, r = e.batch, n = r === void 0 ? Ls : r, i = e.useDispatch, a = i === void 0 ? Fs : i, s = e.useSelector, u = s === void 0 ? Us : s, o = e.useStore, l = o === void 0 ? js : o, g = e.unstable__sideEffectsInRender, f = g === void 0 ? !1 : g;
  return {
    name: Nd,
    init: function(b, v, I) {
      var S = v.serializeQueryArgs, T = b, O = Ad({
        api: b,
        moduleOptions: {
          batch: n,
          useDispatch: a,
          useSelector: u,
          useStore: l,
          unstable__sideEffectsInRender: f
        },
        serializeQueryArgs: S,
        context: I
      }), E = O.buildQueryHooks, w = O.buildMutationHook, d = O.usePrefetch;
      return tr(T, { usePrefetch: d }), tr(I, { batch: n }), {
        injectEndpoint: function(p, h) {
          if (Cd(h)) {
            var y = E(p), m = y.useQuery, R = y.useLazyQuery, _ = y.useLazyQuerySubscription, P = y.useQueryState, A = y.useQuerySubscription;
            tr(T.endpoints[p], {
              useQuery: m,
              useLazyQuery: R,
              useLazyQuerySubscription: _,
              useQueryState: P,
              useQuerySubscription: A
            }), b["use" + Yr(p) + "Query"] = m, b["useLazy" + Yr(p) + "Query"] = R;
          } else if (Dd(h)) {
            var k = w(p);
            tr(T.endpoints[p], {
              useMutation: k
            }), b["use" + Yr(p) + "Mutation"] = k;
          }
        }
      };
    }
  };
}, Md = /* @__PURE__ */ sd(bd(), xd());
const Ld = Zl({
  prepareHeaders: (t, { getState: e, endpoint: r }) => {
    const { isAuthenticated: n, refresh_token: i } = e().userReducer;
    return n && i && r === "updateLogin" && t.set(
      X.refreshTokenHeader,
      X.keywordRefreshTokenHeader ? `${X.keywordRefreshTokenHeader} ${i}` : i
    ), t.set("Content-Type", "application/json");
  }
}), Fd = async (t, e, r) => {
  const n = X.endpoint, i = typeof t == "string" ? n : { ...t, url: n + t.url };
  return Ld(i, e, r);
}, ot = Md({
  baseQuery: Fd,
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
}), { useLoginMutation: Ud, useUpdateLoginMutation: jd, usePasswordResetMutation: qd, useSignInMutation: Bd } = ot;
const $d = ({ children: t, title: e, isLoading: r, scrollPosition: n, language: i, toastMessage: a }) => {
  const s = pe(""), u = pe({}), [o, { isSuccess: l, isLoading: g, error: f }] = qd(), { closeAction: b, isOpen: v, message: I } = pn(Er), S = Se(null), T = (O) => {
    O.preventDefault(), !l && o({
      email: s.value
    });
  };
  return ue(() => {
    S.current && (v ? S.current.showModal() : S.current.close());
  }, [v]), ue(() => {
    if (S.current) {
      const O = S.current.offsetWidth;
      S.current.scrollTo(n.value ? O : 0, 0);
    }
  }, [n.value]), ue(() => {
    f ? "data" in f ? u.value = {
      code: "auth/password-reset-error",
      message: f.data && (Object.values(f.data).find((O) => typeof O == "string") ?? f.data)
    } : "status" in f && (u.value = {
      code: "auth/fetch-failed",
      message: "error" in f ? f.error : "Unexpected Error"
    }) : u.value.message && (u.value = {});
  }, [f]), ue(() => {
    l && (a.value = i.forgotPasswordLabel);
  }, [l]), /* @__PURE__ */ C.jsxs("dialog", { ref: S, className: "modal-container mandatory-scroll-snapping", children: [
    /* @__PURE__ */ C.jsxs("section", { className: "modal-data", children: [
      b && /* @__PURE__ */ C.jsx("button", { onClick: () => typeof b == "function" ? b((O) => !O) : b.value = !b.value, className: "modal-close", children: "X" }),
      /* @__PURE__ */ C.jsx("header", { className: "modal-title", children: /* @__PURE__ */ C.jsx("label", { children: e }) }),
      /* @__PURE__ */ C.jsx("main", { className: "modal-message", children: r ? /* @__PURE__ */ C.jsx(Ji, {}) : typeof I == "string" ? /* @__PURE__ */ C.jsx("p", { children: I }) : I }),
      /* @__PURE__ */ C.jsx("footer", { className: "modal-footer", children: t })
    ] }),
    /* @__PURE__ */ C.jsxs("section", { className: "password-recovery", children: [
      /* @__PURE__ */ C.jsx("span", { className: "go-back", onClick: () => n.value = !1, children: "<" }),
      /* @__PURE__ */ C.jsxs("form", { onSubmit: T, children: [
        /* @__PURE__ */ C.jsx("h3", { children: i.forgotPasswordLabel }),
        /* @__PURE__ */ C.jsxs("label", { children: [
          "Email:",
          /* @__PURE__ */ C.jsx("input", { required: !0, onChange: (O) => s.value = O.currentTarget.value, value: s.value, type: "email" })
        ] }),
        /* @__PURE__ */ C.jsx("button", { className: "is-btn blue", children: i.submit })
      ] }),
      /* @__PURE__ */ C.jsx(fs, { error: u.value }),
      g && /* @__PURE__ */ C.jsx(Ji, {})
    ] }),
    a.value && /* @__PURE__ */ C.jsxs("div", { className: "simple-toast show", children: [
      /* @__PURE__ */ C.jsx("button", { onClick: () => a.value = void 0, children: "X" }),
      /* @__PURE__ */ C.jsx("div", { className: "toast-message", children: a })
    ] })
  ] });
};
const Ji = () => /* @__PURE__ */ C.jsx("div", { className: "loader-container", children: /* @__PURE__ */ C.jsxs("div", { className: "loader-box", children: [
  /* @__PURE__ */ C.jsx("div", { className: "load blue" }),
  /* @__PURE__ */ C.jsx("div", { className: "load red" }),
  /* @__PURE__ */ C.jsx("div", { className: "load orange" }),
  /* @__PURE__ */ C.jsx("div", { className: "load yellow" }),
  /* @__PURE__ */ C.jsx("div", { className: "load green" })
] }) });
const Vd = (t, e) => {
  var r;
  return ((r = t.find((n) => n.code === "*" ? !0 : n.code === e.code)) == null ? void 0 : r.message) ?? e.message;
}, os = "IS_GOOGLE", us = "IS_FACEBOOK", cs = "IS_TWITTER", ls = "IS_GITHUB", ds = "IS_MICROSOFT", Hd = () => /* @__PURE__ */ C.jsx("svg", { width: "98", height: "96", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 98 96", children: /* @__PURE__ */ C.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z", fill: "#fff" }) }), Wd = () => /* @__PURE__ */ C.jsx("svg", { version: "1.1", id: "Logo", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 248 204", xmlSpace: "preserve", children: /* @__PURE__ */ C.jsx("g", { id: "Logo_1_", children: /* @__PURE__ */ C.jsx("path", { id: "white_background", fill: "#FFFFFF", d: `M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
                    C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
                    c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
                    c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
                    c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
                    c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z` }) }) }), zd = () => /* @__PURE__ */ C.jsxs(
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
      /* @__PURE__ */ C.jsx(
        "path",
        {
          fill: "#1877F2",
          d: "M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z"
        }
      ),
      /* @__PURE__ */ C.jsx("path", { fill: "#FFFFFF", d: `M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20
            h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z` })
    ]
  }
), Qd = [
  {
    method: "google",
    constName: os,
    name: "Google",
    className: "google-btn"
  },
  {
    method: "facebook",
    constName: us,
    name: "Facebook",
    className: "facebook-btn",
    icon: /* @__PURE__ */ C.jsx(zd, {})
  },
  {
    method: "twitter",
    constName: cs,
    name: "Twitter",
    className: "twitter-btn",
    icon: /* @__PURE__ */ C.jsx(Wd, {})
  },
  {
    method: "github",
    constName: ls,
    name: "GitHub",
    className: "github-btn",
    icon: /* @__PURE__ */ C.jsx(Hd, {})
  },
  {
    method: "microsoft",
    constName: ds,
    name: "Microsoft",
    className: "microsoft-btn"
  }
], Kd = (t) => Qd.filter((e) => t.find((r) => e.method === r)), Gd = {
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
}, Jd = (t) => Gd[t], wf = () => {
  const t = pe(void 0), e = pe(void 0), r = pe(void 0);
  let n = Se(void 0);
  const i = At((a) => a(t, n, e, r), []);
  return ue(() => () => {
    n.current && clearInterval(n.current);
  }, []), {
    user: t.value,
    updateError: e.value,
    logOut: r.value,
    authManager: i
  };
};
var ht = /* @__PURE__ */ ((t) => (t.LOGIN = "login", t.SIGN_IN = "signIn", t))(ht || {});
const Yd = (t) => Kt(Xe(), Ja).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), Xd = (t) => Kt(Xe(), Ga).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), Zd = (t) => Kt(Xe(), Il).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), ef = (t) => Kt(Xe(), wl).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), tf = (t) => Kt(Xe(), Sl).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), rf = 1e3, nf = 5e3, af = {
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
}, sf = (t, e) => {
  let r = "";
  const { password1: n, password2: i } = t;
  return n.length > 0 && n.length < 8 ? r = e.minLength : i.length > 0 && i !== n && (r = e.passwordNotMatch), r;
}, of = (t, e, r, n) => {
  const [i] = Ud(), [a] = Bd(), [s] = jd(), u = pe(af), o = pe(!1), l = pe(!1), g = pe(!1), f = pe({}), b = () => {
    Ns(() => {
      o.value = !o.value, l.value && (l.value = !l.value);
    });
  }, v = (w) => {
    const { target: d } = w, p = d.getAttribute("data-section") ?? ht.LOGIN;
    if (u.value = {
      ...u.value,
      [p]: {
        ...u.value[p],
        [d.name]: d.value
      }
    }, p === ht.SIGN_IN) {
      const h = sf(u.value[p], r);
      h ? f.value = {
        code: "sign-in/password",
        message: h
      } : f.value = {};
    }
  }, I = (w) => {
    if (X.hasToS && !o.value) {
      l.value = !0;
      return;
    }
    g.value = !0, O(
      w,
      () => g.value = !1
    );
  }, S = async (w) => {
    if (w.preventDefault(), f.value = {}, X.hasToS && !o.value) {
      l.value = !0;
      return;
    }
    if (g.value)
      return;
    g.value = !0;
    const d = w.currentTarget.getAttribute("data-section") ?? ht.LOGIN;
    let p = {};
    if (d === ht.LOGIN) {
      if (X.acceptUsername ? p = {
        username: u.value[d].username,
        password: u.value[d].password
      } : p = {
        email: u.value[d].email,
        password: u.value[d].password
      }, X.bodyAsBase64) {
        const h = Object.entries(p).map(([m, R]) => `${m}=${R}`).join("&");
        p = {
          encodedBody: btoa(h)
        };
      }
      i(p).unwrap().then(T).catch((h) => {
        "data" in h ? f.value = {
          code: "auth/firebase-credential-not-provided",
          message: h.data && (Object.values(h.data).find((y) => typeof y == "string") ?? h.data)
        } : "status" in h && (f.value = {
          code: "auth/fetch-failed",
          message: "error" in h ? h.error : "Unexpected Error"
        });
      }).finally(() => g.value = !1);
    } else if (d === ht.SIGN_IN) {
      let h = u.value[d];
      if (X.bodyAsBase64) {
        const y = Object.entries(h).map(([m, R]) => `${m}=${R}`).join("&");
        h = btoa(y);
      }
      a({
        body: h,
        encodedBody: X.bodyAsBase64
      }).unwrap().then(T).catch((y) => {
        "data" in y ? f.value = {
          code: "auth/firebase-credential-not-provided",
          message: y.data && (Object.values(y.data).find((m) => typeof m == "string") ?? y.data)
        } : "status" in y && (f.value = {
          code: "auth/fetch-failed",
          message: "error" in y ? y.error : "Unexpected Error"
        });
      }).finally(() => g.value = !1);
    }
  }, T = (w) => {
    t(async (d, p, h, y) => {
      if (clearInterval(p.current), p.current = void 0, w.message) {
        n.value = w.message;
        return;
      }
      p.current = setInterval(() => {
        s().unwrap().then((m) => d.value = m).catch((m) => {
          d.value = void 0, clearInterval(p.current), "data" in m ? h.value = {
            code: "auth/firebase-credential-not-provided",
            message: m.data && (Object.values(m.data).find((R) => typeof R == "string") ?? m.data)
          } : "status" in m && (h.value = {
            code: "auth/fetch-failed",
            message: "error" in m ? m.error : "Unexpected Error"
          });
        });
      }, w.expiry * rf - nf), d.value = w, y.value = async () => {
        await La(Xe()).finally(() => clearInterval(p.current)), y.value = void 0;
      };
    }), !w.message && (typeof e == "function" ? e((d) => !d) : e.value = !e.value);
  }, O = async (w, d) => {
    i({ token: w }).unwrap().then(T).catch((p) => {
      "data" in p ? f.value = {
        code: "auth/firebase-credential-not-provided",
        message: p.data && (Object.values(p.data).find((h) => typeof h == "string") ?? p.data)
      } : "status" in p && (f.value = {
        code: "auth/fetch-failed",
        message: "error" in p ? p.error : "Unexpected Error"
      });
    }).finally(d);
  };
  return {
    form: u,
    radio: o,
    isLoading: g,
    handleError: f,
    confirmTp: l,
    handleChange: v,
    handleRadio: b,
    handleSocialLogin: async (w) => {
      if (X.hasToS && !o.value) {
        l.value = !0;
        return;
      }
      if (!g.value) {
        switch (g.value = !0, w) {
          case os:
            await Xd(f).then(
              (d) => {
                d && (Oe.credentialFromResult(d) === null && (f.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), d.user.getIdToken().then(O));
              }
            );
            break;
          case us:
            await Yd(f).then(
              (d) => {
                d && (Ee.credentialFromResult(d) === null && (f.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), d.user.getIdToken().then(O));
              }
            );
            break;
          case cs:
            await Zd(f).then(
              (d) => {
                d && (Pe.credentialFromResult(d) === null && (f.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), d.user.getIdToken().then(O));
              }
            );
            break;
          case ls:
            await ef(f).then(
              (d) => {
                d && (Re.credentialFromResult(d) === null && (f.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), d.user.getIdToken().then(O));
              }
            );
            break;
          case ds:
            await tf(f).then(
              (d) => {
                d && (mt.credentialFromResult(d) === null && (f.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), d.user.getIdToken().then(O));
              }
            );
            break;
        }
        g.value = !1;
      }
    },
    handleSubmit: S,
    handleSubmitUserAlreadyLogged: I,
    handleToken: O
  };
}, uf = () => {
  const t = pe(!1), e = pe(void 0), r = pe(void 0), { closeAction: n, authManager: i, isOpen: a } = pn(Er), s = Jd(X.language), {
    form: u,
    radio: o,
    confirmTp: l,
    isLoading: g,
    handleError: f,
    handleSubmit: b,
    handleSubmitUserAlreadyLogged: v,
    handleChange: I,
    handleRadio: S,
    handleSocialLogin: T
  } = of(i, n, s, e);
  return ue(() => {
    a || (f.value = {});
  }, [a]), ue(() => {
    a && (async () => {
      g.value = !0;
      let E = sc(Xe(), async (w) => {
        w && await w.getIdToken().then((d) => {
          const p = w.providerData[0];
          r.value = {
            ...p,
            providerId: p.providerId.split(".")[0],
            tokenId: d
          };
        }).finally(() => g.value = !1), g.value = !1, E();
      });
    })();
  }, [a]), /* @__PURE__ */ C.jsx(
    $d,
    {
      title: s.logIn,
      isLoading: g.value,
      scrollPosition: t,
      language: s,
      toastMessage: e,
      children: /* @__PURE__ */ C.jsxs("div", { className: "login-container", children: [
        /* @__PURE__ */ C.jsxs("div", { className: "login", children: [
          /* @__PURE__ */ C.jsx(cf, { handleSocialLogin: T }),
          /* @__PURE__ */ C.jsx(
            lf,
            {
              forgotPassword: t,
              form: u,
              handleChange: I,
              handleSubmit: b,
              language: s
            }
          )
        ] }),
        /* @__PURE__ */ C.jsx(fs, { error: f.value }),
        /* @__PURE__ */ C.jsx(df, { alreadyUser: r, language: s, handleSubmitUserAlreadyLogged: v }),
        /* @__PURE__ */ C.jsx(ff, { confirmTp: l.value, handleRadio: S, radioValue: o.value })
      ] })
    }
  );
}, cf = ({ handleSocialLogin: t }) => /* @__PURE__ */ C.jsx("div", { children: Kd(X.signInMethods).map(
  ({ className: e, name: r, constName: n, icon: i }, a) => /* @__PURE__ */ C.jsxs("button", { onClick: () => t(n), className: e, children: [
    i && i,
    r
  ] }, a)
) }), lf = ({
  handleSubmit: t,
  language: e,
  handleChange: r,
  form: n,
  forgotPassword: i
}) => {
  const a = pe(!0), s = Se(null);
  return ue(() => {
    if (s.current) {
      const u = s.current.offsetWidth;
      s.current.scrollTo(a.value ? 0 : u, 0);
    }
  }, [a.value]), /* @__PURE__ */ C.jsx("div", { children: /* @__PURE__ */ C.jsxs("section", { ref: s, className: "form-email mandatory-scroll-snapping", children: [
    /* @__PURE__ */ C.jsxs("form", { className: "form-field", autoComplete: "on", "data-section": "login", onSubmit: t, children: [
      X.acceptUsername ? /* @__PURE__ */ C.jsx(C.Fragment, { children: /* @__PURE__ */ C.jsx("input", { required: !0, "data-section": "login", autoComplete: "username", placeholder: `Email | ${e.username}`, name: "username", onChange: r, value: n.value.login.username, type: "text" }) }) : /* @__PURE__ */ C.jsx(C.Fragment, { children: /* @__PURE__ */ C.jsx("input", { required: !0, "data-section": "login", autoComplete: "email", placeholder: "Email", name: "email", onChange: r, value: n.value.login.email, type: "email" }) }),
      /* @__PURE__ */ C.jsx("input", { required: !0, "data-section": "login", autoComplete: "current-password", placeholder: e.password, name: "password", onChange: r, value: n.value.login.password, type: "password" }),
      /* @__PURE__ */ C.jsx("span", { onClick: () => i.value = !0, className: "forgot-password", children: e.forgotPassword }),
      /* @__PURE__ */ C.jsx("button", { className: "email-login", children: e.logIn }),
      /* @__PURE__ */ C.jsx("span", { onClick: () => a.value = !1, className: "form-action-change", children: e.signIn })
    ] }),
    /* @__PURE__ */ C.jsxs("form", { className: "form-field", autoComplete: "on", "data-section": "signIn", onSubmit: t, children: [
      /* @__PURE__ */ C.jsx("input", { required: !0, "data-section": "signIn", autoComplete: "off", placeholder: "Email", name: "email", onChange: r, value: n.value.signIn.email, type: "email" }),
      /* @__PURE__ */ C.jsx("input", { required: !0, "data-section": "signIn", autoComplete: "off", placeholder: `${e.username}`, name: "username", onChange: r, value: n.value.signIn.username, type: "text" }),
      /* @__PURE__ */ C.jsx("input", { required: !0, "data-section": "signIn", autoComplete: "off", placeholder: e.password, name: "password1", onChange: r, value: n.value.signIn.password1, type: "password" }),
      /* @__PURE__ */ C.jsx("input", { required: !0, "data-section": "signIn", autoComplete: "off", placeholder: e.confirm_password, name: "password2", onChange: r, value: n.value.signIn.password2, type: "password" }),
      /* @__PURE__ */ C.jsx("button", { className: "email-login", children: e.signIn }),
      /* @__PURE__ */ C.jsx("span", { onClick: () => a.value = !0, className: "form-action-change", children: e.logIn })
    ] })
  ] }) });
}, df = ({ alreadyUser: t, language: e, handleSubmitUserAlreadyLogged: r }) => {
  const n = () => {
    La(Xe()).finally(() => t.value = void 0);
  };
  return /* @__PURE__ */ C.jsx(C.Fragment, { children: t.value && /* @__PURE__ */ C.jsxs("section", { className: "user-already-logged", children: [
    /* @__PURE__ */ C.jsxs("p", { children: [
      e.continueAs,
      " ",
      t.value.displayName,
      t.value.photoURL && /* @__PURE__ */ C.jsx("img", { src: t.value.photoURL, alt: "user image" }),
      /* @__PURE__ */ C.jsxs("span", { children: [
        e.loggedWith,
        " ",
        t.value.providerId
      ] })
    ] }),
    /* @__PURE__ */ C.jsxs("div", { className: "user-logged-choice", children: [
      /* @__PURE__ */ C.jsx("button", { onClick: () => {
        var i;
        return r(((i = t.value) == null ? void 0 : i.tokenId) ?? "");
      }, className: "choice-ok", children: "Ok" }),
      /* @__PURE__ */ C.jsx("button", { onClick: n, className: "choice-not", children: e.logOut })
    ] })
  ] }) });
}, ff = ({ confirmTp: t, handleRadio: e, radioValue: r }) => {
  const { closeAction: n } = pn(Er), i = Se(null), a = () => typeof n == "function" ? n((s) => !s) : n.value = !n.value;
  return ue(() => {
    t && i.current && i.current.scrollIntoView({ behavior: "smooth" });
  }, [t]), /* @__PURE__ */ C.jsx("section", { children: X.hasToS && /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsxs("label", { className: "login-accept", children: [
      /* @__PURE__ */ C.jsx("input", { onChange: e, type: "checkbox", checked: r }),
      X.hasToS.label(a)
    ] }),
    t && /* @__PURE__ */ C.jsx("span", { ref: i, className: "notify error", children: X.hasToS.errorLabel })
  ] }) });
}, fs = ({ error: t }) => {
  const e = (n) => /* @__PURE__ */ C.jsx(C.Fragment, { children: Object.entries(n).map(
    ([i, a], s) => /* @__PURE__ */ C.jsxs("span", { children: [
      i,
      ": ",
      a
    ] }, s)
  ) }), r = (n, i) => {
    const a = Vd(n, i);
    return /* @__PURE__ */ C.jsx(C.Fragment, { children: typeof i == "string" ? i : e(a) });
  };
  return /* @__PURE__ */ C.jsx(C.Fragment, { children: t.message && /* @__PURE__ */ C.jsx("span", { autoFocus: !0, className: "notify error", children: X.firebaseErrorMessages ? r(X.firebaseErrorMessages, t) : typeof t.message == "string" ? t.message : e(t.message) }) });
}, Yi = {
  user: null,
  isAuthenticated: !1,
  expiry: void 0,
  refresh_token: void 0,
  token: void 0
}, hf = tt({
  name: "UserSlice",
  initialState: Yi,
  reducers: {},
  extraReducers(t) {
    t.addMatcher(ot.endpoints.login.matchFulfilled, (e, r) => (e = {
      ...r.payload,
      isAuthenticated: !0
    }, e)).addMatcher(ot.endpoints.updateLogin.matchFulfilled, (e, r) => (e = {
      ...r.payload,
      isAuthenticated: !0
    }, e)).addMatcher(ot.endpoints.updateLogin.matchRejected, (e) => (e = Yi, e));
  }
}), { reducer: pf } = hf, vf = ea({
  userReducer: pf,
  [ot.reducerPath]: ot.reducer
}), gf = Ms({
  reducer: vf,
  middleware: (t) => t().concat(ot.middleware)
}), Sf = ({ isOpen: t, closeAction: e, message: r, authManager: n }) => _l() ? /* @__PURE__ */ C.jsx(qs, { store: gf, children: /* @__PURE__ */ C.jsx(Er.Provider, { value: { isOpen: t, closeAction: e, message: r, authManager: n }, children: /* @__PURE__ */ C.jsx(uf, {}) }) }) : /* @__PURE__ */ C.jsx("dialog", { open: !0, children: /* @__PURE__ */ C.jsx("p", { children: "Error: Missing firebaseConfig in setConfig" }) });
export {
  Sf as Auth,
  If as setConfig,
  wf as useAuth
};
