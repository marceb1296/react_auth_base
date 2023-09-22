import Xi, { createContext as Ms, useCallback as At, useMemo as we, useDebugValue as Wn, useState as Qn, useEffect as ue, useRef as Ee, useLayoutEffect as Ls, useContext as pn } from "react";
import { useSignal as ve, batch as Fs } from "@preact/signals-react";
import { nanoid as Us, isPlainObject as ut, createAction as wt, createAsyncThunk as Kn, SHOULD_AUTOBATCH as Jt, createSlice as tt, prepareAutoBatched as Mr, isAnyOf as Zi, isFulfilled as Et, isRejectedWithValue as vn, combineReducers as ea, createSelector as Pt, isAllOf as Lr, isPending as ta, isRejected as ra, createNextState as gn, isAsyncThunkAction as Gn, configureStore as js } from "@reduxjs/toolkit";
import { shallowEqual as ur, batch as qs, useDispatch as Bs, useSelector as $s, useStore as Hs, Provider as Vs } from "react-redux";
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
var Jn;
function zs() {
  if (Jn)
    return Rt;
  Jn = 1;
  var t = Xi, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, u, l) {
    var v, p = {}, b = null, h = null;
    l !== void 0 && (b = "" + l), u.key !== void 0 && (b = "" + u.key), u.ref !== void 0 && (h = u.ref);
    for (v in u)
      n.call(u, v) && !a.hasOwnProperty(v) && (p[v] = u[v]);
    if (o && o.defaultProps)
      for (v in u = o.defaultProps, u)
        p[v] === void 0 && (p[v] = u[v]);
    return { $$typeof: e, type: o, key: b, ref: h, props: p, _owner: i.current };
  }
  return Rt.Fragment = r, Rt.jsx = s, Rt.jsxs = s, Rt;
}
var Ot = {};
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
function Ws() {
  return Yn || (Yn = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Xi, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), I = Symbol.iterator, T = "@@iterator";
    function S(c) {
      if (c === null || typeof c != "object")
        return null;
      var D = I && c[I] || c[T];
      return typeof D == "function" ? D : null;
    }
    var R = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(c) {
      {
        for (var D = arguments.length, x = new Array(D > 1 ? D - 1 : 0), j = 1; j < D; j++)
          x[j - 1] = arguments[j];
        g("error", c, x);
      }
    }
    function g(c, D, x) {
      {
        var j = R.ReactDebugCurrentFrame, Y = j.getStackAddendum();
        Y !== "" && (D += "%s", x = x.concat([Y]));
        var ee = x.map(function(Q) {
          return String(Q);
        });
        ee.unshift("Warning: " + D), Function.prototype.apply.call(console[c], console, ee);
      }
    }
    var m = !1, d = !1, f = !1, y = !1, _ = !1, w;
    w = Symbol.for("react.module.reference");
    function E(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === n || c === a || _ || c === i || c === l || c === v || y || c === h || m || d || f || typeof c == "object" && c !== null && (c.$$typeof === b || c.$$typeof === p || c.$$typeof === s || c.$$typeof === o || c.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === w || c.getModuleId !== void 0));
    }
    function k(c, D, x) {
      var j = c.displayName;
      if (j)
        return j;
      var Y = D.displayName || D.name || "";
      return Y !== "" ? x + "(" + Y + ")" : x;
    }
    function A(c) {
      return c.displayName || "Context";
    }
    function C(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
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
        case v:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case o:
            var D = c;
            return A(D) + ".Consumer";
          case s:
            var x = c;
            return A(x._context) + ".Provider";
          case u:
            return k(c, c.render, "ForwardRef");
          case p:
            var j = c.displayName || null;
            return j !== null ? j : C(c.type) || "Memo";
          case b: {
            var Y = c, ee = Y._payload, Q = Y._init;
            try {
              return C(Q(ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, M = 0, U, L, F, $, W, H, K;
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
              value: $
            }),
            group: N({}, c, {
              value: W
            }),
            groupCollapsed: N({}, c, {
              value: H
            }),
            groupEnd: N({}, c, {
              value: K
            })
          });
        }
        M < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = R.ReactCurrentDispatcher, re;
    function fe(c, D, x) {
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
    var ye = !1, he;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      he = new be();
    }
    function Z(c, D) {
      if (!c || ye)
        return "";
      {
        var x = he.get(c);
        if (x !== void 0)
          return x;
      }
      var j;
      ye = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ee;
      ee = J.current, J.current = null, G();
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
            } catch (xe) {
              j = xe;
            }
            Reflect.construct(c, [], Q);
          } else {
            try {
              Q.call();
            } catch (xe) {
              j = xe;
            }
            c.call(Q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xe) {
            j = xe;
          }
          c();
        }
      } catch (xe) {
        if (xe && j && typeof xe.stack == "string") {
          for (var z = xe.stack.split(`
`), de = j.stack.split(`
`), ae = z.length - 1, oe = de.length - 1; ae >= 1 && oe >= 0 && z[ae] !== de[oe]; )
            oe--;
          for (; ae >= 1 && oe >= 0; ae--, oe--)
            if (z[ae] !== de[oe]) {
              if (ae !== 1 || oe !== 1)
                do
                  if (ae--, oe--, oe < 0 || z[ae] !== de[oe]) {
                    var Ie = `
` + z[ae].replace(" at new ", " at ");
                    return c.displayName && Ie.includes("<anonymous>") && (Ie = Ie.replace("<anonymous>", c.displayName)), typeof c == "function" && he.set(c, Ie), Ie;
                  }
                while (ae >= 1 && oe >= 0);
              break;
            }
        }
      } finally {
        ye = !1, J.current = ee, V(), Error.prepareStackTrace = Y;
      }
      var ft = c ? c.displayName || c.name : "", zn = ft ? fe(ft) : "";
      return typeof c == "function" && he.set(c, zn), zn;
    }
    function le(c, D, x) {
      return Z(c, !1);
    }
    function $e(c) {
      var D = c.prototype;
      return !!(D && D.isReactComponent);
    }
    function Ze(c, D, x) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return Z(c, $e(c));
      if (typeof c == "string")
        return fe(c);
      switch (c) {
        case l:
          return fe("Suspense");
        case v:
          return fe("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case u:
            return le(c.render);
          case p:
            return Ze(c.type, D, x);
          case b: {
            var j = c, Y = j._payload, ee = j._init;
            try {
              return Ze(ee(Y), D, x);
            } catch {
            }
          }
        }
      return "";
    }
    var He = Object.prototype.hasOwnProperty, et = {}, lt = R.ReactDebugCurrentFrame;
    function Ve(c) {
      if (c) {
        var D = c._owner, x = Ze(c.type, c._source, D ? D.type : null);
        lt.setExtraStackFrame(x);
      } else
        lt.setExtraStackFrame(null);
    }
    function Gt(c, D, x, j, Y) {
      {
        var ee = Function.call.bind(He);
        for (var Q in c)
          if (ee(c, Q)) {
            var z = void 0;
            try {
              if (typeof c[Q] != "function") {
                var de = Error((j || "React class") + ": " + x + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              z = c[Q](D, Q, j, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ae) {
              z = ae;
            }
            z && !(z instanceof Error) && (Ve(Y), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", x, Q, typeof z), Ve(null)), z instanceof Error && !(z.message in et) && (et[z.message] = !0, Ve(Y), O("Failed %s type: %s", x, z.message), Ve(null));
          }
      }
    }
    var _e = Array.isArray;
    function pe(c) {
      return _e(c);
    }
    function ms(c) {
      {
        var D = typeof Symbol == "function" && Symbol.toStringTag, x = D && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return x;
      }
    }
    function ys(c) {
      try {
        return Mn(c), !1;
      } catch {
        return !0;
      }
    }
    function Mn(c) {
      return "" + c;
    }
    function Ln(c) {
      if (ys(c))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ms(c)), Mn(c);
    }
    var St = R.ReactCurrentOwner, bs = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fn, Un, Pr;
    Pr = {};
    function _s(c) {
      if (He.call(c, "ref")) {
        var D = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function Is(c) {
      if (He.call(c, "key")) {
        var D = Object.getOwnPropertyDescriptor(c, "key").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function ws(c, D) {
      if (typeof c.ref == "string" && St.current && D && St.current.stateNode !== D) {
        var x = C(St.current.type);
        Pr[x] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(St.current.type), c.ref), Pr[x] = !0);
      }
    }
    function Es(c, D) {
      {
        var x = function() {
          Fn || (Fn = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        x.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function Ts(c, D) {
      {
        var x = function() {
          Un || (Un = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        x.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Ss = function(c, D, x, j, Y, ee, Q) {
      var z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: c,
        key: D,
        ref: x,
        props: Q,
        // Record the component responsible for creating this element.
        _owner: ee
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
    function Rs(c, D, x, j, Y) {
      {
        var ee, Q = {}, z = null, de = null;
        x !== void 0 && (Ln(x), z = "" + x), Is(D) && (Ln(D.key), z = "" + D.key), _s(D) && (de = D.ref, ws(D, Y));
        for (ee in D)
          He.call(D, ee) && !bs.hasOwnProperty(ee) && (Q[ee] = D[ee]);
        if (c && c.defaultProps) {
          var ae = c.defaultProps;
          for (ee in ae)
            Q[ee] === void 0 && (Q[ee] = ae[ee]);
        }
        if (z || de) {
          var oe = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          z && Es(Q, oe), de && Ts(Q, oe);
        }
        return Ss(c, z, de, Y, j, St.current, Q);
      }
    }
    var Dr = R.ReactCurrentOwner, jn = R.ReactDebugCurrentFrame;
    function dt(c) {
      if (c) {
        var D = c._owner, x = Ze(c.type, c._source, D ? D.type : null);
        jn.setExtraStackFrame(x);
      } else
        jn.setExtraStackFrame(null);
    }
    var Nr;
    Nr = !1;
    function xr(c) {
      return typeof c == "object" && c !== null && c.$$typeof === e;
    }
    function qn() {
      {
        if (Dr.current) {
          var c = C(Dr.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Os(c) {
      {
        if (c !== void 0) {
          var D = c.fileName.replace(/^.*[\\\/]/, ""), x = c.lineNumber;
          return `

Check your code at ` + D + ":" + x + ".";
        }
        return "";
      }
    }
    var Bn = {};
    function ks(c) {
      {
        var D = qn();
        if (!D) {
          var x = typeof c == "string" ? c : c.displayName || c.name;
          x && (D = `

Check the top-level render call using <` + x + ">.");
        }
        return D;
      }
    }
    function $n(c, D) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var x = ks(D);
        if (Bn[x])
          return;
        Bn[x] = !0;
        var j = "";
        c && c._owner && c._owner !== Dr.current && (j = " It was passed a child from " + C(c._owner.type) + "."), dt(c), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, j), dt(null);
      }
    }
    function Hn(c, D) {
      {
        if (typeof c != "object")
          return;
        if (pe(c))
          for (var x = 0; x < c.length; x++) {
            var j = c[x];
            xr(j) && $n(j, D);
          }
        else if (xr(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var Y = S(c);
          if (typeof Y == "function" && Y !== c.entries)
            for (var ee = Y.call(c), Q; !(Q = ee.next()).done; )
              xr(Q.value) && $n(Q.value, D);
        }
      }
    }
    function As(c) {
      {
        var D = c.type;
        if (D == null || typeof D == "string")
          return;
        var x;
        if (typeof D == "function")
          x = D.propTypes;
        else if (typeof D == "object" && (D.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        D.$$typeof === p))
          x = D.propTypes;
        else
          return;
        if (x) {
          var j = C(D);
          Gt(x, c.props, "prop", j, c);
        } else if (D.PropTypes !== void 0 && !Nr) {
          Nr = !0;
          var Y = C(D);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Cs(c) {
      {
        for (var D = Object.keys(c.props), x = 0; x < D.length; x++) {
          var j = D[x];
          if (j !== "children" && j !== "key") {
            dt(c), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), dt(null);
            break;
          }
        }
        c.ref !== null && (dt(c), O("Invalid attribute `ref` supplied to `React.Fragment`."), dt(null));
      }
    }
    function Vn(c, D, x, j, Y, ee) {
      {
        var Q = E(c);
        if (!Q) {
          var z = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = Os(Y);
          de ? z += de : z += qn();
          var ae;
          c === null ? ae = "null" : pe(c) ? ae = "array" : c !== void 0 && c.$$typeof === e ? (ae = "<" + (C(c.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof c, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, z);
        }
        var oe = Rs(c, D, x, Y, ee);
        if (oe == null)
          return oe;
        if (Q) {
          var Ie = D.children;
          if (Ie !== void 0)
            if (j)
              if (pe(Ie)) {
                for (var ft = 0; ft < Ie.length; ft++)
                  Hn(Ie[ft], c);
                Object.freeze && Object.freeze(Ie);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Hn(Ie, c);
        }
        return c === n ? Cs(oe) : As(oe), oe;
      }
    }
    function Ps(c, D, x) {
      return Vn(c, D, x, !0);
    }
    function Ds(c, D, x) {
      return Vn(c, D, x, !1);
    }
    var Ns = Ds, xs = Ps;
    Ot.Fragment = n, Ot.jsx = Ns, Ot.jsxs = xs;
  }()), Ot;
}
process.env.NODE_ENV === "production" ? Xr.exports = zs() : Xr.exports = Ws();
var P = Xr.exports;
const Sr = Ms({});
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
      const a = t[r++], s = t[r++], o = t[r++], u = ((i & 7) << 18 | (a & 63) << 12 | (s & 63) << 6 | o & 63) - 65536;
      e[n++] = String.fromCharCode(55296 + (u >> 10)), e[n++] = String.fromCharCode(56320 + (u & 1023));
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
      const a = t[i], s = i + 1 < t.length, o = s ? t[i + 1] : 0, u = i + 2 < t.length, l = u ? t[i + 2] : 0, v = a >> 2, p = (a & 3) << 4 | o >> 4;
      let b = (o & 15) << 2 | l >> 6, h = l & 63;
      u || (h = 64, s || (b = 64)), n.push(r[v], r[p], r[b], r[h]);
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
      const a = r[t.charAt(i++)], o = i < t.length ? r[t.charAt(i)] : 0;
      ++i;
      const l = i < t.length ? r[t.charAt(i)] : 64;
      ++i;
      const p = i < t.length ? r[t.charAt(i)] : 64;
      if (++i, a == null || o == null || l == null || p == null)
        throw new Ks();
      const b = a << 2 | o >> 4;
      if (n.push(b), l !== 64) {
        const h = o << 4 & 240 | l >> 2;
        if (n.push(h), p !== 64) {
          const I = l << 6 & 192 | p;
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
}, mn = () => {
  try {
    return Ys() || Xs() || Zs();
  } catch (t) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
    return;
  }
}, eo = (t) => {
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
function ce() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function ro() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce());
}
function no() {
  const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function io() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function ao() {
  const t = ce();
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
class Je extends Error {
  constructor(e, r, n) {
    super(r), this.code = e, this.customData = n, this.name = uo, Object.setPrototypeOf(this, Je.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Bt.prototype.create);
  }
}
class Bt {
  constructor(e, r, n) {
    this.service = e, this.serviceName = r, this.errors = n;
  }
  create(e, ...r) {
    const n = r[0] || {}, i = `${this.service}/${e}`, a = this.errors[e], s = a ? co(a, n) : "Error", o = `${this.serviceName}: ${s} (${i}).`;
    return new Je(i, o, n);
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
function cr(t, e) {
  if (t === e)
    return !0;
  const r = Object.keys(t), n = Object.keys(e);
  for (const i of r) {
    if (!n.includes(i))
      return !1;
    const a = t[i], s = e[i];
    if (Xn(a) && Xn(s)) {
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
function vo(t, e) {
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
      const o = this.normalizeInstanceIdentifier(a);
      n === o && s.resolve(i);
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
var te;
(function(t) {
  t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT";
})(te || (te = {}));
const _o = {
  debug: te.DEBUG,
  verbose: te.VERBOSE,
  info: te.INFO,
  warn: te.WARN,
  error: te.ERROR,
  silent: te.SILENT
}, Io = te.INFO, wo = {
  [te.DEBUG]: "log",
  [te.VERBOSE]: "log",
  [te.INFO]: "info",
  [te.WARN]: "warn",
  [te.ERROR]: "error"
}, Eo = (t, e, ...r) => {
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
    this.name = e, this._logLevel = Io, this._logHandler = Eo, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in te))
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
    this._userLogHandler && this._userLogHandler(this, te.DEBUG, ...e), this._logHandler(this, te.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, te.VERBOSE, ...e), this._logHandler(this, te.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, te.INFO, ...e), this._logHandler(this, te.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, te.WARN, ...e), this._logHandler(this, te.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, te.ERROR, ...e), this._logHandler(this, te.ERROR, ...e);
  }
}
const To = (t, e) => e.some((r) => t instanceof r);
let Zn, ei;
function So() {
  return Zn || (Zn = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Ro() {
  return ei || (ei = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const la = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap();
function Oo(t) {
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
function ko(t) {
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
function Ao(t) {
  en = t(en);
}
function Co(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...r) {
    const n = t.call(jr(this), e, ...r);
    return da.set(n, e.sort ? e.sort() : [e]), Qe(n);
  } : Ro().includes(t) ? function(...e) {
    return t.apply(jr(this), e), Qe(la.get(this));
  } : function(...e) {
    return Qe(t.apply(jr(this), e));
  };
}
function Po(t) {
  return typeof t == "function" ? Co(t) : (t instanceof IDBTransaction && ko(t), To(t, So()) ? new Proxy(t, en) : t);
}
function Qe(t) {
  if (t instanceof IDBRequest)
    return Oo(t);
  if (Ur.has(t))
    return Ur.get(t);
  const e = Po(t);
  return e !== t && (Ur.set(t, e), yn.set(e, t)), e;
}
const jr = (t) => yn.get(t);
function Do(t, e, { blocked: r, upgrade: n, blocking: i, terminated: a } = {}) {
  const s = indexedDB.open(t, e), o = Qe(s);
  return n && s.addEventListener("upgradeneeded", (u) => {
    n(Qe(s.result), u.oldVersion, u.newVersion, Qe(s.transaction), u);
  }), r && s.addEventListener("blocked", (u) => r(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    u.oldVersion,
    u.newVersion,
    u
  )), o.then((u) => {
    a && u.addEventListener("close", () => a()), i && u.addEventListener("versionchange", (l) => i(l.oldVersion, l.newVersion, l));
  }).catch(() => {
  }), o;
}
const No = ["get", "getKey", "getAll", "getAllKeys", "count"], xo = ["put", "add", "delete", "clear"], qr = /* @__PURE__ */ new Map();
function ti(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (qr.get(e))
    return qr.get(e);
  const r = e.replace(/FromIndex$/, ""), n = e !== r, i = xo.includes(r);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(r in (n ? IDBIndex : IDBObjectStore).prototype) || !(i || No.includes(r))
  )
    return;
  const a = async function(s, ...o) {
    const u = this.transaction(s, i ? "readwrite" : "readonly");
    let l = u.store;
    return n && (l = l.index(o.shift())), (await Promise.all([
      l[r](...o),
      i && u.done
    ]))[0];
  };
  return qr.set(e, a), a;
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
class Mo {
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
const tn = "@firebase/app", ri = "0.9.13";
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
const ct = new ca("@firebase/app"), Fo = "@firebase/app-compat", Uo = "@firebase/analytics-compat", jo = "@firebase/analytics", qo = "@firebase/app-check-compat", Bo = "@firebase/app-check", $o = "@firebase/auth", Ho = "@firebase/auth-compat", Vo = "@firebase/database", zo = "@firebase/database-compat", Wo = "@firebase/functions", Qo = "@firebase/functions-compat", Ko = "@firebase/installations", Go = "@firebase/installations-compat", Jo = "@firebase/messaging", Yo = "@firebase/messaging-compat", Xo = "@firebase/performance", Zo = "@firebase/performance-compat", eu = "@firebase/remote-config", tu = "@firebase/remote-config-compat", ru = "@firebase/storage", nu = "@firebase/storage-compat", iu = "@firebase/firestore", au = "@firebase/firestore-compat", su = "firebase", ou = "9.23.0";
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
const rn = "[DEFAULT]", uu = {
  [tn]: "fire-core",
  [Fo]: "fire-core-compat",
  [jo]: "fire-analytics",
  [Uo]: "fire-analytics-compat",
  [Bo]: "fire-app-check",
  [qo]: "fire-app-check-compat",
  [$o]: "fire-auth",
  [Ho]: "fire-auth-compat",
  [Vo]: "fire-rtdb",
  [zo]: "fire-rtdb-compat",
  [Wo]: "fire-fn",
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
const lr = /* @__PURE__ */ new Map(), nn = /* @__PURE__ */ new Map();
function cu(t, e) {
  try {
    t.container.addComponent(e);
  } catch (r) {
    ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, r);
  }
}
function xt(t) {
  const e = t.name;
  if (nn.has(e))
    return ct.debug(`There were multiple attempts to register component ${e}.`), !1;
  nn.set(e, t);
  for (const r of lr.values())
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
}, Ke = new Bt("app", "Firebase", lu);
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
const Ht = ou;
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
  const s = new bo(i);
  for (const u of nn.values())
    s.addComponent(u);
  const o = new du(r, n, s);
  return lr.set(i, o), o;
}
function fu(t = rn) {
  const e = lr.get(t);
  if (!e && t === rn && oa())
    return ha();
  if (!e)
    throw Ke.create("no-app", { appName: t });
  return e;
}
function pt(t, e, r) {
  var n;
  let i = (n = uu[t]) !== null && n !== void 0 ? n : t;
  r && (i += `-${r}`);
  const a = i.match(/\s|\//), s = e.match(/\s|\//);
  if (a || s) {
    const o = [
      `Unable to register library "${i}" with version "${e}":`
    ];
    a && o.push(`library name "${i}" contains illegal characters (whitespace or "/")`), a && s && o.push("and"), s && o.push(`version name "${e}" contains illegal characters (whitespace or "/")`), ct.warn(o.join(" "));
    return;
  }
  xt(new yt(
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
const hu = "firebase-heartbeat-database", pu = 1, Mt = "firebase-heartbeat-store";
let Br = null;
function pa() {
  return Br || (Br = Do(hu, pu, {
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
  })), Br;
}
async function vu(t) {
  try {
    return await (await pa()).transaction(Mt).objectStore(Mt).get(va(t));
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
async function ni(t, e) {
  try {
    const n = (await pa()).transaction(Mt, "readwrite");
    await n.objectStore(Mt).put(e, va(t)), await n.done;
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
  xt(new yt(
    "platform-logger",
    (e) => new Mo(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), xt(new yt(
    "heartbeat",
    (e) => new yu(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), pt(tn, ri, t), pt(tn, ri, "esm2017"), pt("fire-js", "");
}
Iu("");
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
const dr = new ca("@firebase/auth");
function Eu(t, ...e) {
  dr.logLevel <= te.WARN && dr.warn(`Auth (${Ht}): ${t}`, ...e);
}
function rr(t, ...e) {
  dr.logLevel <= te.ERROR && dr.error(`Auth (${Ht}): ${t}`, ...e);
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
function De(t, ...e) {
  throw _n(t, ...e);
}
function Ae(t, ...e) {
  return _n(t, ...e);
}
function ya(t, e, r) {
  const n = Object.assign(Object.assign({}, wu()), { [e]: r });
  return new Bt("auth", "Firebase", n).create(e, {
    appName: t.name
  });
}
function Tu(t, e, r) {
  const n = r;
  if (!(e instanceof n))
    throw n.name !== e.constructor.name && De(
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
function Le(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw rr(e), new Error(e);
}
function Ue(t, e) {
  t || Le(e);
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
function Su() {
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
function Ru() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (Su() || no() || "connection" in navigator) ? navigator.onLine : !0;
}
function Ou() {
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
class Vt {
  constructor(e, r) {
    this.shortDelay = e, this.longDelay = r, Ue(r > e, "Short delay should be less than long delay!"), this.isMobile = ro() || io();
  }
  get() {
    return Ru() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
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
  Ue(t.emulator, "Emulator should always be set here");
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
    Le("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl)
      return this.headersImpl;
    if (typeof self < "u" && "Headers" in self)
      return self.Headers;
    Le("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl)
      return this.responseImpl;
    if (typeof self < "u" && "Response" in self)
      return self.Response;
    Le("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
const ku = {
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
const Au = new Vt(3e4, 6e4);
function _a(t, e) {
  return t.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId }) : e;
}
async function zt(t, e, r, n, i = {}) {
  return Ia(t, i, async () => {
    let a = {}, s = {};
    n && (e === "GET" ? s = n : a = {
      body: JSON.stringify(n)
    });
    const o = $t(Object.assign({ key: t.config.apiKey }, s)).slice(1), u = await t._getAdditionalHeaders();
    return u[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/json", t.languageCode && (u[
      "X-Firebase-Locale"
      /* HttpHeader.X_FIREBASE_LOCALE */
    ] = t.languageCode), ba.fetch()(wa(t, t.config.apiHost, r, o), Object.assign({
      method: e,
      headers: u,
      referrerPolicy: "no-referrer"
    }, a));
  });
}
async function Ia(t, e, r) {
  t._canInitEmulator = !1;
  const n = Object.assign(Object.assign({}, ku), e);
  try {
    const i = new Pu(t), a = await Promise.race([
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
      const o = a.ok ? s.errorMessage : s.error.message, [u, l] = o.split(" : ");
      if (u === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Yt(t, "credential-already-in-use", s);
      if (u === "EMAIL_EXISTS")
        throw Yt(t, "email-already-in-use", s);
      if (u === "USER_DISABLED")
        throw Yt(t, "user-disabled", s);
      const v = n[u] || u.toLowerCase().replace(/[_\s]+/g, "-");
      if (l)
        throw ya(t, v, l);
      De(t, v);
    }
  } catch (i) {
    if (i instanceof Je)
      throw i;
    De(t, "network-request-failed", { message: String(i) });
  }
}
async function Cu(t, e, r, n, i = {}) {
  const a = await zt(t, e, r, n, i);
  return "mfaPendingCredential" in a && De(t, "multi-factor-auth-required", {
    _serverResponse: a
  }), a;
}
function wa(t, e, r, n) {
  const i = `${e}${r}?${n}`;
  return t.config.emulator ? In(t.config, i) : `${t.config.apiScheme}://${i}`;
}
class Pu {
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((r, n) => {
      this.timer = setTimeout(() => n(Ae(
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
async function Du(t, e) {
  return zt(t, "POST", "/v1/accounts:delete", e);
}
async function Nu(t, e) {
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
function Dt(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function xu(t, e = !1) {
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
    authTime: Dt($r(i.auth_time)),
    issuedAtTime: Dt($r(i.iat)),
    expirationTime: Dt($r(i.exp)),
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
function Mu(t) {
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
async function Lt(t, e, r = !1) {
  if (r)
    return e;
  try {
    return await e;
  } catch (n) {
    throw n instanceof Je && Lu(n) && t.auth.currentUser === t && await t.auth.signOut(), n;
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
class Fu {
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
class Ea {
  constructor(e, r) {
    this.createdAt = e, this.lastLoginAt = r, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = Dt(this.lastLoginAt), this.creationTime = Dt(this.createdAt);
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
  const r = t.auth, n = await t.getIdToken(), i = await Lt(t, Nu(r, { idToken: n }));
  q(
    i == null ? void 0 : i.users.length,
    r,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const a = i.users[0];
  t._notifyReloadListener(a);
  const s = !((e = a.providerUserInfo) === null || e === void 0) && e.length ? qu(a.providerUserInfo) : [], o = ju(t.providerData, s), u = t.isAnonymous, l = !(t.email && a.passwordHash) && !(o != null && o.length), v = u ? l : !1, p = {
    uid: a.localId,
    displayName: a.displayName || null,
    photoURL: a.photoUrl || null,
    email: a.email || null,
    emailVerified: a.emailVerified || !1,
    phoneNumber: a.phoneNumber || null,
    tenantId: a.tenantId || null,
    providerData: o,
    metadata: new Ea(a.createdAt, a.lastLoginAt),
    isAnonymous: v
  };
  Object.assign(t, p);
}
async function Uu(t) {
  const e = Ye(t);
  await fr(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function ju(t, e) {
  return [...t.filter((n) => !e.some((i) => i.providerId === n.providerId)), ...e];
}
function qu(t) {
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
async function Bu(t, e) {
  const r = await Ia(t, {}, async () => {
    const n = $t({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: i, apiKey: a } = t.config, s = wa(t, i, "/v1/token", `key=${a}`), o = await t._getAdditionalHeaders();
    return o[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded", ba.fetch()(s, {
      method: "POST",
      headers: o,
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
class Ft {
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
    const r = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : Mu(e.idToken);
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
    const { refreshToken: n, accessToken: i, expirationTime: a } = r, s = new Ft();
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
    return Object.assign(new Ft(), this.toJSON());
  }
  _performRefresh() {
    return Le("not implemented");
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
class st {
  constructor(e) {
    var { uid: r, auth: n, stsTokenManager: i } = e, a = bn(e, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase", this.proactiveRefresh = new Fu(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = r, this.auth = n, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = a.displayName || null, this.email = a.email || null, this.emailVerified = a.emailVerified || !1, this.phoneNumber = a.phoneNumber || null, this.photoURL = a.photoURL || null, this.isAnonymous = a.isAnonymous || !1, this.tenantId = a.tenantId || null, this.providerData = a.providerData ? [...a.providerData] : [], this.metadata = new Ea(a.createdAt || void 0, a.lastLoginAt || void 0);
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
    return xu(this, e);
  }
  reload() {
    return Uu(this);
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
    var n, i, a, s, o, u, l, v;
    const p = (n = r.displayName) !== null && n !== void 0 ? n : void 0, b = (i = r.email) !== null && i !== void 0 ? i : void 0, h = (a = r.phoneNumber) !== null && a !== void 0 ? a : void 0, I = (s = r.photoURL) !== null && s !== void 0 ? s : void 0, T = (o = r.tenantId) !== null && o !== void 0 ? o : void 0, S = (u = r._redirectEventId) !== null && u !== void 0 ? u : void 0, R = (l = r.createdAt) !== null && l !== void 0 ? l : void 0, O = (v = r.lastLoginAt) !== null && v !== void 0 ? v : void 0, { uid: g, emailVerified: m, isAnonymous: d, providerData: f, stsTokenManager: y } = r;
    q(
      g && y,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const _ = Ft.fromJSON(this.name, y);
    q(
      typeof g == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), ze(p, e.name), ze(b, e.name), q(
      typeof m == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), q(
      typeof d == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), ze(h, e.name), ze(I, e.name), ze(T, e.name), ze(S, e.name), ze(R, e.name), ze(O, e.name);
    const w = new st({
      uid: g,
      auth: e,
      email: b,
      emailVerified: m,
      displayName: p,
      isAnonymous: d,
      photoURL: I,
      phoneNumber: h,
      tenantId: T,
      stsTokenManager: _,
      createdAt: R,
      lastLoginAt: O
    });
    return f && Array.isArray(f) && (w.providerData = f.map((E) => Object.assign({}, E))), S && (w._redirectEventId = S), w;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, r, n = !1) {
    const i = new Ft();
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
const oi = /* @__PURE__ */ new Map();
function Fe(t) {
  Ue(t instanceof Function, "Expected a class definition");
  let e = oi.get(t);
  return e ? (Ue(e instanceof t, "Instance stored in cache mismatched with class"), e) : (e = new t(), oi.set(t, e), e);
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
const ui = Ta;
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
      return new vt(Fe(ui), e, n);
    const i = (await Promise.all(r.map(async (l) => {
      if (await l._isAvailable())
        return l;
    }))).filter((l) => l);
    let a = i[0] || Fe(ui);
    const s = nr(n, e.config.apiKey, e.name);
    let o = null;
    for (const l of r)
      try {
        const v = await l._get(s);
        if (v) {
          const p = st._fromJSON(e, v);
          l !== a && (o = p), a = l;
          break;
        }
      } catch {
      }
    const u = i.filter((l) => l._shouldAllowMigration);
    return !a._shouldAllowMigration || !u.length ? new vt(a, e, n) : (a = u[0], o && await a._set(s, o.toJSON()), await Promise.all(r.map(async (l) => {
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
function ci(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (Oa(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (Sa(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (Aa(e))
    return "Blackberry";
  if (Ca(e))
    return "Webos";
  if (En(e))
    return "Safari";
  if ((e.includes("chrome/") || Ra(e)) && !e.includes("edge/"))
    return "Chrome";
  if (ka(e))
    return "Android";
  {
    const r = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, n = t.match(r);
    if ((n == null ? void 0 : n.length) === 2)
      return n[1];
  }
  return "Other";
}
function Sa(t = ce()) {
  return /firefox\//i.test(t);
}
function En(t = ce()) {
  const e = t.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function Ra(t = ce()) {
  return /crios\//i.test(t);
}
function Oa(t = ce()) {
  return /iemobile/i.test(t);
}
function ka(t = ce()) {
  return /android/i.test(t);
}
function Aa(t = ce()) {
  return /blackberry/i.test(t);
}
function Ca(t = ce()) {
  return /webos/i.test(t);
}
function Rr(t = ce()) {
  return /iphone|ipad|ipod/i.test(t) || /macintosh/i.test(t) && /mobile/i.test(t);
}
function $u(t = ce()) {
  var e;
  return Rr(t) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function Hu() {
  return ao() && document.documentMode === 10;
}
function Pa(t = ce()) {
  return Rr(t) || ka(t) || Ca(t) || Aa(t) || /windows phone/i.test(t) || Oa(t);
}
function Vu() {
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
      r = ci(ce());
      break;
    case "Worker":
      r = `${ci(ce())}-${t}`;
      break;
    default:
      r = t;
  }
  const n = e.length ? e.join(",") : "FirebaseCore-web";
  return `${r}/JsCore/${Ht}/${n}`;
}
async function Na(t, e) {
  return zt(t, "GET", "/v2/recaptchaConfig", _a(t, e));
}
function li(t) {
  return t !== void 0 && t.enterprise !== void 0;
}
class xa {
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
function zu() {
  var t, e;
  return (e = (t = document.getElementsByTagName("head")) === null || t === void 0 ? void 0 : t[0]) !== null && e !== void 0 ? e : document;
}
function Ma(t) {
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
function Wu(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
const Qu = "https://www.google.com/recaptcha/enterprise.js?render=", Ku = "recaptcha-enterprise", Gu = "NO_RECAPTCHA";
class Ju {
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(e) {
    this.type = Ku, this.auth = Wt(e);
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
      return new Promise(async (s, o) => {
        Na(a, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }).then((u) => {
          if (u.recaptchaKey === void 0)
            o(new Error("recaptcha Enterprise site key undefined"));
          else {
            const l = new xa(u);
            return a.tenantId == null ? a._agentRecaptchaConfig = l : a._tenantRecaptchaConfigs[a.tenantId] = l, s(l.siteKey);
          }
        }).catch((u) => {
          o(u);
        });
      });
    }
    function i(a, s, o) {
      const u = window.grecaptcha;
      li(u) ? u.enterprise.ready(() => {
        u.enterprise.execute(a, { action: e }).then((l) => {
          s(l);
        }).catch(() => {
          s(Gu);
        });
      }) : o(Error("No reCAPTCHA enterprise script loaded."));
    }
    return new Promise((a, s) => {
      n(this.auth).then((o) => {
        if (!r && li(window.grecaptcha))
          i(o, a, s);
        else {
          if (typeof window > "u") {
            s(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          Ma(Qu + o).then(() => {
            i(o, a, s);
          }).catch((u) => {
            s(u);
          });
        }
      }).catch((o) => {
        s(o);
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
class Yu {
  constructor(e) {
    this.auth = e, this.queue = [];
  }
  pushCallback(e, r) {
    const n = (a) => new Promise((s, o) => {
      try {
        const u = e(a);
        s(u);
      } catch (u) {
        o(u);
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
class Xu {
  constructor(e, r, n, i) {
    this.app = e, this.heartbeatServiceProvider = r, this.appCheckServiceProvider = n, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new di(this), this.idTokenSubscription = new di(this), this.beforeStateQueue = new Yu(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = ma, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion;
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
      const s = (r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId, o = i == null ? void 0 : i._redirectEventId, u = await this.tryRedirectSignIn(e);
      (!s || s === o) && (u != null && u.user) && (i = u.user, a = !0);
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
    this.languageCode = Ou();
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
      await this.assertedPersistence.setPersistence(Fe(e));
    });
  }
  async initializeRecaptchaConfig() {
    const e = await Na(this, {
      clientType: "CLIENT_TYPE_WEB",
      version: "RECAPTCHA_ENTERPRISE"
      /* RecaptchaVersion.ENTERPRISE */
    }), r = new xa(e);
    this.tenantId == null ? this._agentRecaptchaConfig = r : this._tenantRecaptchaConfigs[this.tenantId] = r, r.emailPasswordEnabled && new Ju(this).verify();
  }
  _getRecaptchaConfig() {
    return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
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
    return r != null && r.error && Eu(`Error while retrieving App Check token: ${r.error}`), r == null ? void 0 : r.token;
  }
}
function Wt(t) {
  return Ye(t);
}
class di {
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
function Zu(t, e) {
  const r = fa(t, "auth");
  if (r.isInitialized()) {
    const i = r.getImmediate(), a = r.getOptions();
    if (cr(a, e ?? {}))
      return i;
    De(
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
  const n = Wt(t);
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
  const i = !!(r != null && r.disableWarnings), a = La(e), { host: s, port: o } = rc(e), u = o === null ? "" : `:${o}`;
  n.config.emulator = { url: `${a}//${s}${u}/` }, n.settings.appVerificationDisabledForTesting = !0, n.emulatorConfig = Object.freeze({
    host: s,
    port: o,
    protocol: a.replace(":", ""),
    options: Object.freeze({ disableWarnings: i })
  }), i || nc();
}
function La(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function rc(t) {
  const e = La(t), r = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
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
class Fa {
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
    return Le("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return Le("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, r) {
    return Le("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return Le("not implemented");
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
  return Cu(t, "POST", "/v1/accounts:signInWithIdp", _a(t, e));
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
class je extends Fa {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const r = new je(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (r.idToken = e.idToken), e.accessToken && (r.accessToken = e.accessToken), e.nonce && !e.pendingToken && (r.nonce = e.nonce), e.pendingToken && (r.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (r.accessToken = e.oauthToken, r.secret = e.oauthTokenSecret) : De(
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
    const s = new je(n, i);
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
    ), je._fromParams(r);
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
    ), je._fromParams(Object.assign(Object.assign({}, e), { providerId: this.providerId, signInMethod: this.providerId }));
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
    const { oauthIdToken: r, oauthAccessToken: n, oauthTokenSecret: i, pendingToken: a, nonce: s, providerId: o } = e;
    if (!n && !i && !r && !a || !o)
      return null;
    try {
      return new mt(o)._credential({
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
class Te extends Tt {
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
    return je._fromParams({
      providerId: Te.PROVIDER_ID,
      signInMethod: Te.FACEBOOK_SIGN_IN_METHOD,
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
Te.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Te.PROVIDER_ID = "facebook.com";
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
    return je._fromParams({
      providerId: Se.PROVIDER_ID,
      signInMethod: Se.GOOGLE_SIGN_IN_METHOD,
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
    const { oauthIdToken: r, oauthAccessToken: n } = e;
    if (!r && !n)
      return null;
    try {
      return Se.credential(r, n);
    } catch {
      return null;
    }
  }
}
Se.GOOGLE_SIGN_IN_METHOD = "google.com";
Se.PROVIDER_ID = "google.com";
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
    return je._fromParams({
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
class Oe extends Tt {
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
    return je._fromParams({
      providerId: Oe.PROVIDER_ID,
      signInMethod: Oe.TWITTER_SIGN_IN_METHOD,
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
    const { oauthAccessToken: r, oauthTokenSecret: n } = e;
    if (!r || !n)
      return null;
    try {
      return Oe.credential(r, n);
    } catch {
      return null;
    }
  }
}
Oe.TWITTER_SIGN_IN_METHOD = "twitter.com";
Oe.PROVIDER_ID = "twitter.com";
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
function Ua(t, e, r, n) {
  return (e === "reauthenticate" ? r._getReauthenticationResolver(t) : r._getIdTokenResponse(t)).catch((a) => {
    throw a.code === "auth/multi-factor-auth-required" ? hr._fromErrorAndOperation(t, a, e, n) : a;
  });
}
async function ac(t, e, r = !1) {
  const n = await Lt(t, e._linkToIdToken(t.auth, await t.getIdToken()), r);
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
async function sc(t, e, r = !1) {
  const { auth: n } = t, i = "reauthenticate";
  try {
    const a = await Lt(t, Ua(n, i, e, t), r);
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
    const { sub: o } = s;
    return q(
      t.uid === o,
      n,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), bt._forOperation(t, i, a);
  } catch (a) {
    throw (a == null ? void 0 : a.code) === "auth/user-not-found" && De(
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
  const n = "signIn", i = await Ua(t, n, e), a = await bt._fromIdTokenResponse(t, n, i);
  return r || await t._updateCurrentUser(a.user), a;
}
function uc(t, e, r, n) {
  return Ye(t).onIdTokenChanged(e, r, n);
}
function cc(t, e, r) {
  return Ye(t).beforeAuthStateChanged(e, r);
}
function lc(t, e, r, n) {
  return Ye(t).onAuthStateChanged(e, r, n);
}
function ja(t) {
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
class qa {
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
function dc() {
  const t = ce();
  return En(t) || Rr(t);
}
const fc = 1e3, hc = 10;
class Ba extends qa {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, r) => this.onStorageEvent(e, r), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = dc() && Vu(), this.fallbackToPolling = Pa(), this._shouldAllowMigration = !0;
  }
  forAllChangedKeys(e) {
    for (const r of Object.keys(this.listeners)) {
      const n = this.storage.getItem(r), i = this.localCache[r];
      n !== i && e(r, i, n);
    }
  }
  onStorageEvent(e, r = !1) {
    if (!e.key) {
      this.forAllChangedKeys((s, o, u) => {
        this.notifyListeners(s, u);
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
    Hu() && a !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, hc) : i();
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
Ba.type = "LOCAL";
const pc = Ba;
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
class $a extends qa {
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
$a.type = "SESSION";
const Ha = $a;
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
class Or {
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
    const n = new Or(e);
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
    const o = Array.from(s).map(async (l) => l(r.origin, a)), u = await vc(o);
    r.ports[0].postMessage({
      status: "done",
      eventId: n,
      eventType: i,
      response: u
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
Or.receivers = [];
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
function Sn(t = "", e = 10) {
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
    return new Promise((o, u) => {
      const l = Sn("", 20);
      i.port1.start();
      const v = setTimeout(() => {
        u(new Error(
          "unsupported_event"
          /* _MessageError.UNSUPPORTED_EVENT */
        ));
      }, n);
      s = {
        messageChannel: i,
        onMessage(p) {
          const b = p;
          if (b.data.eventId === l)
            switch (b.data.status) {
              case "ack":
                clearTimeout(v), a = setTimeout(
                  () => {
                    u(new Error(
                      "timeout"
                      /* _MessageError.TIMEOUT */
                    ));
                  },
                  3e3
                  /* _TimeoutDuration.COMPLETION */
                );
                break;
              case "done":
                clearTimeout(a), o(b.data.response);
                break;
              default:
                clearTimeout(v), clearTimeout(a), u(new Error(
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
function mc(t) {
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
function Va() {
  return typeof Ce().WorkerGlobalScope < "u" && typeof Ce().importScripts == "function";
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
  return Va() ? self : null;
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
const za = "firebaseLocalStorageDb", Ic = 1, vr = "firebaseLocalStorage", Wa = "fbase_key";
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
function wc() {
  const t = indexedDB.deleteDatabase(za);
  return new Qt(t).toPromise();
}
function sn() {
  const t = indexedDB.open(za, Ic);
  return new Promise((e, r) => {
    t.addEventListener("error", () => {
      r(t.error);
    }), t.addEventListener("upgradeneeded", () => {
      const n = t.result;
      try {
        n.createObjectStore(vr, { keyPath: Wa });
      } catch (i) {
        r(i);
      }
    }), t.addEventListener("success", async () => {
      const n = t.result;
      n.objectStoreNames.contains(vr) ? e(n) : (n.close(), await wc(), e(await sn()));
    });
  });
}
async function pi(t, e, r) {
  const n = kr(t, !0).put({
    [Wa]: e,
    value: r
  });
  return new Qt(n).toPromise();
}
async function Ec(t, e) {
  const r = kr(t, !1).get(e), n = await new Qt(r).toPromise();
  return n === void 0 ? null : n.value;
}
function vi(t, e) {
  const r = kr(t, !0).delete(e);
  return new Qt(r).toPromise();
}
const Tc = 800, Sc = 3;
class Qa {
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
    return Va() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = Or._getInstance(_c()), this.receiver._subscribe("keyChanged", async (e, r) => ({
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
    const r = await this._withRetries((n) => Ec(n, e));
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
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), Tc);
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
Qa.type = "LOCAL";
const Rc = Qa;
new Vt(3e4, 6e4);
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
function Ka(t, e) {
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
class Rn extends Fa {
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
function Oc(t) {
  return oc(t.auth, new Rn(t), t.bypassAuthState);
}
function kc(t) {
  const { auth: e, user: r } = t;
  return q(
    r,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), sc(r, new Rn(t), t.bypassAuthState);
}
async function Ac(t) {
  const { auth: e, user: r } = t;
  return q(
    r,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), ac(r, new Rn(t), t.bypassAuthState);
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
class Ga {
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
    const { urlResponse: r, sessionId: n, postBody: i, tenantId: a, error: s, type: o } = e;
    if (s) {
      this.reject(s);
      return;
    }
    const u = {
      auth: this.auth,
      requestUri: r,
      sessionId: n,
      tenantId: a || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(o)(u));
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
        De(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    Ue(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    Ue(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
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
const Cc = new Vt(2e3, 1e4);
async function Kt(t, e, r) {
  const n = Wt(t);
  Tu(t, e, Tn);
  const i = Ka(n, r);
  return new it(n, "signInViaPopup", e, i).executeNotNull();
}
class it extends Ga {
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
    Ue(this.filter.length === 1, "Popup operations only handle one event");
    const e = Sn();
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
      this.pollId = window.setTimeout(e, Cc.get());
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
const Pc = "pendingRedirect", ir = /* @__PURE__ */ new Map();
class Dc extends Ga {
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
        const n = await Nc(this.resolver, this.auth) ? await super.execute() : null;
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
async function Nc(t, e) {
  const r = Lc(e), n = Mc(t);
  if (!await n._isAvailable())
    return !1;
  const i = await n._get(r) === "true";
  return await n._remove(r), i;
}
function xc(t, e) {
  ir.set(t._key(), e);
}
function Mc(t) {
  return Fe(t._redirectPersistence);
}
function Lc(t) {
  return nr(Pc, t.config.apiKey, t.name);
}
async function Fc(t, e, r = !1) {
  const n = Wt(t), i = Ka(n, e), s = await new Dc(n, i, r).execute();
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
    if (e.error && !Ja(e)) {
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
    return Date.now() - this.lastProcessedEventTime >= Uc && this.cachedEventUids.clear(), this.cachedEventUids.has(gi(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(gi(e)), this.lastProcessedEventTime = Date.now();
  }
}
function gi(t) {
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
  De(
    t,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function zc(t) {
  const e = an(), { protocol: r, hostname: n } = new URL(e);
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
const Wc = new Vt(3e4, 6e4);
function mi() {
  const t = Ce().___jsl;
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
        timeout: Wc.get()
      });
    }
    if (!((i = (n = Ce().gapi) === null || n === void 0 ? void 0 : n.iframes) === null || i === void 0) && i.Iframe)
      e(gapi.iframes.getContext());
    else if (!((a = Ce().gapi) === null || a === void 0) && a.load)
      s();
    else {
      const o = Wu("iframefcb");
      return Ce()[o] = () => {
        gapi.load ? s() : r(Ae(
          t,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, Ma(`https://apis.google.com/js/api.js?onload=${o}`).catch((u) => r(u));
    }
  }).catch((e) => {
    throw ar = null, e;
  });
}
let ar = null;
function Kc(t) {
  return ar = ar || Qc(t), ar;
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
const Gc = new Vt(5e3, 15e3), Jc = "__/auth/iframe", Yc = "emulator/auth/iframe", Xc = {
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
  const r = e.emulator ? In(e, Yc) : `https://${t.config.authDomain}/${Jc}`, n = {
    apiKey: e.apiKey,
    appName: t.name,
    v: Ht
  }, i = Zc.get(t.config.apiHost);
  i && (n.eid = i);
  const a = t._getFrameworks();
  return a.length && (n.fw = a.join(",")), `${r}?${$t(n).slice(1)}`;
}
async function tl(t) {
  const e = await Kc(t), r = Ce().gapi;
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
    const s = Ae(
      t,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), o = Ce().setTimeout(() => {
      a(s);
    }, Gc.get());
    function u() {
      Ce().clearTimeout(o), i(n);
    }
    n.ping(u).then(u, () => {
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
function ol(t, e, r, n = nl, i = il) {
  const a = Math.max((window.screen.availHeight - i) / 2, 0).toString(), s = Math.max((window.screen.availWidth - n) / 2, 0).toString();
  let o = "";
  const u = Object.assign(Object.assign({}, rl), {
    width: n.toString(),
    height: i.toString(),
    top: a,
    left: s
  }), l = ce().toLowerCase();
  r && (o = Ra(l) ? al : r), Sa(l) && (e = e || sl, u.scrollbars = "yes");
  const v = Object.entries(u).reduce((b, [h, I]) => `${b}${h}=${I},`, "");
  if ($u(l) && o !== "_self")
    return ul(e || "", o), new yi(null);
  const p = window.open(e || "", o, v);
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
  return new yi(p);
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
    e.setDefaultLanguage(t.languageCode), s.providerId = e.providerId || "", fo(e.getCustomParameters()) || (s.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [v, p] of Object.entries(a || {}))
      s[v] = p;
  }
  if (e instanceof Tt) {
    const v = e.getScopes().filter((p) => p !== "");
    v.length > 0 && (s.scopes = v.join(","));
  }
  t.tenantId && (s.tid = t.tenantId);
  const o = s;
  for (const v of Object.keys(o))
    o[v] === void 0 && delete o[v];
  const u = await t._getAppCheckToken(), l = u ? `#${dl}=${encodeURIComponent(u)}` : "";
  return `${fl(t)}?${$t(o).slice(1)}${l}`;
}
function fl({ config: t }) {
  return t.emulator ? In(t, ll) : `https://${t.authDomain}/${cl}`;
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
const Hr = "webStorageSupport";
class hl {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = Ha, this._completeRedirectFn = Fc, this._overrideRedirectResult = xc;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, r, n, i) {
    var a;
    Ue((a = this.eventManagers[e._key()]) === null || a === void 0 ? void 0 : a.manager, "_initialize() not called before _openPopup()");
    const s = await bi(e, r, n, an(), i);
    return ol(e, s, Sn());
  }
  async _openRedirect(e, r, n, i) {
    await this._originValidation(e);
    const a = await bi(e, r, n, an(), i);
    return mc(a), new Promise(() => {
    });
  }
  _initialize(e) {
    const r = e._key();
    if (this.eventManagers[r]) {
      const { manager: i, promise: a } = this.eventManagers[r];
      return i ? Promise.resolve(i) : (Ue(a, "If manager is not set, promise should be"), a);
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
    this.iframes[e._key()].send(Hr, { type: Hr }, (i) => {
      var a;
      const s = (a = i == null ? void 0 : i[0]) === null || a === void 0 ? void 0 : a[Hr];
      s !== void 0 && r(!!s), De(
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
    return Pa() || En() || Rr();
  }
}
const pl = hl;
var _i = "@firebase/auth", Ii = "0.23.2";
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
  xt(new yt(
    "auth",
    (e, { options: r }) => {
      const n = e.getProvider("app").getImmediate(), i = e.getProvider("heartbeat"), a = e.getProvider("app-check-internal"), { apiKey: s, authDomain: o } = n.options;
      q(s && !s.includes(":"), "invalid-api-key", { appName: n.name });
      const u = {
        apiKey: s,
        authDomain: o,
        clientPlatform: t,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: Da(t)
      }, l = new Xu(n, i, a, u);
      return ec(l, r), l;
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
  })), xt(new yt(
    "auth-internal",
    (e) => {
      const r = Wt(e.getProvider(
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
  )), pt(_i, Ii, gl(t)), pt(_i, Ii, "esm2017");
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
let wi = null;
const _l = (t) => async (e) => {
  const r = e && await e.getIdTokenResult(), n = r && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(r.issuedAtTime)) / 1e3;
  if (n && n > bl)
    return;
  const i = r == null ? void 0 : r.token;
  wi !== i && (wi = i, await fetch(t, {
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
      Rc,
      pc,
      Ha
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
var wl = "firebase", El = "9.23.0";
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
pt(wl, El, "app");
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
const Sf = (t) => {
  X = { ...Ya, ...t };
}, Tl = () => Object.keys(X.firebaseConfig).length !== 0, Xe = () => {
  const t = ha(X.firebaseConfig);
  return Il(t);
}, Xa = new Se();
Xa.setCustomParameters({ prompt: "select_account" });
const Za = new Te();
Za.addScope("public_profile");
const Sl = new Oe(), Rl = new Re(), Ol = new mt("microsoft.com").setCustomParameters({
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
    var i = Fl[t], a = i ? typeof i == "function" ? i.apply(null, r) : i : "unknown error nr: " + t;
    throw Error("[Immer] " + a);
  }
  throw Error("[Immer] minified error nr: " + t + (r.length ? " " + r.map(function(s) {
    return "'" + s + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function qe(t) {
  return !!t && !!t[ge];
}
function Be(t) {
  var e;
  return !!t && (function(r) {
    if (!r || typeof r != "object")
      return !1;
    var n = Object.getPrototypeOf(r);
    if (n === null)
      return !0;
    var i = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
    return i === Object || typeof i == "function" && Function.toString.call(i) === Ul;
  }(t) || Array.isArray(t) || !!t[Nt] || !!(!((e = t.constructor) === null || e === void 0) && e[Nt]) || Ar(t) || Cr(t));
}
function kl(t) {
  return qe(t) || ie(23, t), t[ge].t;
}
function _t(t, e, r) {
  r === void 0 && (r = !1), Ge(t) === 0 ? (r ? Object.keys : Dn)(t).forEach(function(n) {
    r && typeof n == "symbol" || e(n, t[n], t);
  }) : t.forEach(function(n, i) {
    return e(i, n, t);
  });
}
function Ge(t) {
  var e = t[ge];
  return e ? e.i > 3 ? e.i - 4 : e.i : Array.isArray(t) ? 1 : Ar(t) ? 2 : Cr(t) ? 3 : 0;
}
function Ut(t, e) {
  return Ge(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function sr(t, e) {
  return Ge(t) === 2 ? t.get(e) : t[e];
}
function es(t, e, r) {
  var n = Ge(t);
  n === 2 ? t.set(e, r) : n === 3 ? t.add(r) : t[e] = r;
}
function Al(t, e) {
  return t === e ? t !== 0 || 1 / t == 1 / e : t != t && e != e;
}
function Ar(t) {
  return Ml && t instanceof Map;
}
function Cr(t) {
  return Ll && t instanceof Set;
}
function nt(t) {
  return t.o || t.t;
}
function On(t) {
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  var e = jl(t);
  delete e[ge];
  for (var r = Dn(e), n = 0; n < r.length; n++) {
    var i = r[n], a = e[i];
    a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (e[i] = { configurable: !0, writable: !0, enumerable: a.enumerable, value: t[i] });
  }
  return Object.create(Object.getPrototypeOf(t), e);
}
function kn(t, e) {
  return e === void 0 && (e = !1), An(t) || qe(t) || !Be(t) || (Ge(t) > 1 && (t.set = t.add = t.clear = t.delete = Cl), Object.freeze(t), e && _t(t, function(r, n) {
    return kn(n, !0);
  }, !0)), t;
}
function Cl() {
  ie(2);
}
function An(t) {
  return t == null || typeof t != "object" || Object.isFrozen(t);
}
function Pe(t) {
  var e = ln[t];
  return e || ie(18, t), e;
}
function Pl(t, e) {
  ln[t] || (ln[t] = e);
}
function Ei() {
  return process.env.NODE_ENV === "production" || It || ie(0), It;
}
function Vr(t, e) {
  e && (Pe("Patches"), t.u = [], t.s = [], t.v = e);
}
function gr(t) {
  on(t), t.p.forEach(Dl), t.p = null;
}
function on(t) {
  t === It && (It = t.l);
}
function Ti(t) {
  return It = { p: [], l: It, h: t, m: !0, _: 0 };
}
function Dl(t) {
  var e = t[ge];
  e.i === 0 || e.i === 1 ? e.j() : e.g = !0;
}
function zr(t, e) {
  e._ = e.p.length;
  var r = e.p[0], n = t !== void 0 && t !== r;
  return e.h.O || Pe("ES5").S(e, t, n), n ? (r[ge].P && (gr(e), ie(4)), Be(t) && (t = mr(e, t), e.l || yr(e, t)), e.u && Pe("Patches").M(r[ge].t, t, e.u, e.s)) : t = mr(e, r, []), gr(e), e.u && e.v(e.u, e.s), t !== Pn ? t : void 0;
}
function mr(t, e, r) {
  if (An(e))
    return e;
  var n = e[ge];
  if (!n)
    return _t(e, function(o, u) {
      return Si(t, n, e, o, u, r);
    }, !0), e;
  if (n.A !== t)
    return e;
  if (!n.P)
    return yr(t, n.t, !0), n.t;
  if (!n.I) {
    n.I = !0, n.A._--;
    var i = n.i === 4 || n.i === 5 ? n.o = On(n.k) : n.o, a = i, s = !1;
    n.i === 3 && (a = new Set(i), i.clear(), s = !0), _t(a, function(o, u) {
      return Si(t, n, i, o, u, r, s);
    }), yr(t, i, !1), r && t.u && Pe("Patches").N(n, r, t.u, t.s);
  }
  return n.o;
}
function Si(t, e, r, n, i, a, s) {
  if (process.env.NODE_ENV !== "production" && i === r && ie(5), qe(i)) {
    var o = mr(t, i, a && e && e.i !== 3 && !Ut(e.R, n) ? a.concat(n) : void 0);
    if (es(r, n, o), !qe(o))
      return;
    t.m = !1;
  } else
    s && r.add(i);
  if (Be(i) && !An(i)) {
    if (!t.h.D && t._ < 1)
      return;
    mr(t, i), e && e.A.l || yr(t, i);
  }
}
function yr(t, e, r) {
  r === void 0 && (r = !1), !t.l && t.h.D && t.m && kn(e, r);
}
function Wr(t, e) {
  var r = t[ge];
  return (r ? nt(r) : t)[e];
}
function Ri(t, e) {
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
  t.o || (t.o = On(t.t));
}
function cn(t, e, r) {
  var n = Ar(e) ? Pe("MapSet").F(e, r) : Cr(e) ? Pe("MapSet").T(e, r) : t.O ? function(i, a) {
    var s = Array.isArray(i), o = { i: s ? 1 : 0, A: a ? a.A : Ei(), P: !1, I: !1, R: {}, l: a, t: i, k: null, o: null, j: null, C: !1 }, u = o, l = dn;
    s && (u = [o], l = Ct);
    var v = Proxy.revocable(u, l), p = v.revoke, b = v.proxy;
    return o.k = b, o.j = p, b;
  }(e, r) : Pe("ES5").J(e, r);
  return (r ? r.A : Ei()).p.push(n), n;
}
function Nl(t) {
  return qe(t) || ie(22, t), function e(r) {
    if (!Be(r))
      return r;
    var n, i = r[ge], a = Ge(r);
    if (i) {
      if (!i.P && (i.i < 4 || !Pe("ES5").K(i)))
        return i.t;
      i.I = !0, n = Oi(r, a), i.I = !1;
    } else
      n = Oi(r, a);
    return _t(n, function(s, o) {
      i && sr(i.t, s) === o || es(n, s, e(o));
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
function xl() {
  function t(n) {
    if (!Be(n))
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
    return Ut(n, Nt) && (i[Nt] = n[Nt]), i;
  }
  function e(n) {
    return qe(n) ? t(n) : n;
  }
  var r = "add";
  Pl("Patches", { $: function(n, i) {
    return i.forEach(function(a) {
      for (var s = a.path, o = a.op, u = n, l = 0; l < s.length - 1; l++) {
        var v = Ge(u), p = s[l];
        typeof p != "string" && typeof p != "number" && (p = "" + p), v !== 0 && v !== 1 || p !== "__proto__" && p !== "constructor" || ie(24), typeof u == "function" && p === "prototype" && ie(24), typeof (u = sr(u, p)) != "object" && ie(15, s.join("/"));
      }
      var b = Ge(u), h = t(a.value), I = s[s.length - 1];
      switch (o) {
        case "replace":
          switch (b) {
            case 2:
              return u.set(I, h);
            case 3:
              ie(16);
            default:
              return u[I] = h;
          }
        case r:
          switch (b) {
            case 1:
              return I === "-" ? u.push(h) : u.splice(I, 0, h);
            case 2:
              return u.set(I, h);
            case 3:
              return u.add(h);
            default:
              return u[I] = h;
          }
        case "remove":
          switch (b) {
            case 1:
              return u.splice(I, 1);
            case 2:
              return u.delete(I);
            case 3:
              return u.delete(a.value);
            default:
              return delete u[I];
          }
        default:
          ie(17, o);
      }
    }), n;
  }, N: function(n, i, a, s) {
    switch (n.i) {
      case 0:
      case 4:
      case 2:
        return function(o, u, l, v) {
          var p = o.t, b = o.o;
          _t(o.R, function(h, I) {
            var T = sr(p, h), S = sr(b, h), R = I ? Ut(p, h) ? "replace" : r : "remove";
            if (T !== S || R !== "replace") {
              var O = u.concat(h);
              l.push(R === "remove" ? { op: R, path: O } : { op: R, path: O, value: S }), v.push(R === r ? { op: "remove", path: O } : R === "remove" ? { op: r, path: O, value: e(T) } : { op: "replace", path: O, value: e(T) });
            }
          });
        }(n, i, a, s);
      case 5:
      case 1:
        return function(o, u, l, v) {
          var p = o.t, b = o.R, h = o.o;
          if (h.length < p.length) {
            var I = [h, p];
            p = I[0], h = I[1];
            var T = [v, l];
            l = T[0], v = T[1];
          }
          for (var S = 0; S < p.length; S++)
            if (b[S] && h[S] !== p[S]) {
              var R = u.concat([S]);
              l.push({ op: "replace", path: R, value: e(h[S]) }), v.push({ op: "replace", path: R, value: e(p[S]) });
            }
          for (var O = p.length; O < h.length; O++) {
            var g = u.concat([O]);
            l.push({ op: r, path: g, value: e(h[O]) });
          }
          p.length < h.length && v.push({ op: "replace", path: u.concat(["length"]), value: p.length });
        }(n, i, a, s);
      case 3:
        return function(o, u, l, v) {
          var p = o.t, b = o.o, h = 0;
          p.forEach(function(I) {
            if (!b.has(I)) {
              var T = u.concat([h]);
              l.push({ op: "remove", path: T, value: I }), v.unshift({ op: r, path: T, value: I });
            }
            h++;
          }), h = 0, b.forEach(function(I) {
            if (!p.has(I)) {
              var T = u.concat([h]);
              l.push({ op: r, path: T, value: I }), v.unshift({ op: "remove", path: T, value: I });
            }
            h++;
          });
        }(n, i, a, s);
    }
  }, M: function(n, i, a, s) {
    a.push({ op: "replace", path: [], value: i === Pn ? void 0 : i }), s.push({ op: "replace", path: [], value: n });
  } });
}
var ki, It, Cn = typeof Symbol < "u" && typeof Symbol("x") == "symbol", Ml = typeof Map < "u", Ll = typeof Set < "u", Ai = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", Pn = Cn ? Symbol.for("immer-nothing") : ((ki = {})["immer-nothing"] = !0, ki), Nt = Cn ? Symbol.for("immer-draftable") : "__$immer_draftable", ge = Cn ? Symbol.for("immer-state") : "__$immer_state", Fl = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(t) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, Ul = "" + Object.prototype.constructor, Dn = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Object.getOwnPropertyNames, jl = Object.getOwnPropertyDescriptors || function(t) {
  var e = {};
  return Dn(t).forEach(function(r) {
    e[r] = Object.getOwnPropertyDescriptor(t, r);
  }), e;
}, ln = {}, dn = { get: function(t, e) {
  if (e === ge)
    return t;
  var r = nt(t);
  if (!Ut(r, e))
    return function(i, a, s) {
      var o, u = Ri(a, s);
      return u ? "value" in u ? u.value : (o = u.get) === null || o === void 0 ? void 0 : o.call(i.k) : void 0;
    }(t, r, e);
  var n = r[e];
  return t.I || !Be(n) ? n : n === Wr(t.t, e) ? (Qr(t), t.o[e] = cn(t.A.h, n, t)) : n;
}, has: function(t, e) {
  return e in nt(t);
}, ownKeys: function(t) {
  return Reflect.ownKeys(nt(t));
}, set: function(t, e, r) {
  var n = Ri(nt(t), e);
  if (n != null && n.set)
    return n.set.call(t.k, r), !0;
  if (!t.P) {
    var i = Wr(nt(t), e), a = i == null ? void 0 : i[ge];
    if (a && a.t === r)
      return t.o[e] = r, t.R[e] = !1, !0;
    if (Al(r, i) && (r !== void 0 || Ut(t.t, e)))
      return !0;
    Qr(t), un(t);
  }
  return t.o[e] === r && (r !== void 0 || e in t.o) || Number.isNaN(r) && Number.isNaN(t.o[e]) || (t.o[e] = r, t.R[e] = !0), !0;
}, deleteProperty: function(t, e) {
  return Wr(t.t, e) !== void 0 || e in t.t ? (t.R[e] = !1, Qr(t), un(t)) : delete t.R[e], t.o && delete t.o[e], !0;
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
var ql = function() {
  function t(r) {
    var n = this;
    this.O = Ai, this.D = !0, this.produce = function(i, a, s) {
      if (typeof i == "function" && typeof a != "function") {
        var o = a;
        a = i;
        var u = n;
        return function(T) {
          var S = this;
          T === void 0 && (T = o);
          for (var R = arguments.length, O = Array(R > 1 ? R - 1 : 0), g = 1; g < R; g++)
            O[g - 1] = arguments[g];
          return u.produce(T, function(m) {
            var d;
            return (d = a).call.apply(d, [S, m].concat(O));
          });
        };
      }
      var l;
      if (typeof a != "function" && ie(6), s !== void 0 && typeof s != "function" && ie(7), Be(i)) {
        var v = Ti(n), p = cn(n, i, void 0), b = !0;
        try {
          l = a(p), b = !1;
        } finally {
          b ? gr(v) : on(v);
        }
        return typeof Promise < "u" && l instanceof Promise ? l.then(function(T) {
          return Vr(v, s), zr(T, v);
        }, function(T) {
          throw gr(v), T;
        }) : (Vr(v, s), zr(l, v));
      }
      if (!i || typeof i != "object") {
        if ((l = a(i)) === void 0 && (l = i), l === Pn && (l = void 0), n.D && kn(l, !0), s) {
          var h = [], I = [];
          Pe("Patches").M(i, l, h, I), s(h, I);
        }
        return l;
      }
      ie(21, i);
    }, this.produceWithPatches = function(i, a) {
      if (typeof i == "function")
        return function(l) {
          for (var v = arguments.length, p = Array(v > 1 ? v - 1 : 0), b = 1; b < v; b++)
            p[b - 1] = arguments[b];
          return n.produceWithPatches(l, function(h) {
            return i.apply(void 0, [h].concat(p));
          });
        };
      var s, o, u = n.produce(i, a, function(l, v) {
        s = l, o = v;
      });
      return typeof Promise < "u" && u instanceof Promise ? u.then(function(l) {
        return [l, s, o];
      }) : [u, s, o];
    }, typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies), typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var e = t.prototype;
  return e.createDraft = function(r) {
    Be(r) || ie(8), qe(r) && (r = Nl(r));
    var n = Ti(this), i = cn(this, r, void 0);
    return i[ge].C = !0, on(n), i;
  }, e.finishDraft = function(r, n) {
    var i = r && r[ge];
    process.env.NODE_ENV !== "production" && (i && i.C || ie(9), i.I && ie(10));
    var a = i.A;
    return Vr(a, n), zr(void 0, a);
  }, e.setAutoFreeze = function(r) {
    this.D = r;
  }, e.setUseProxies = function(r) {
    r && !Ai && ie(20), this.O = r;
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
    return qe(r) ? s(r, n) : this.produce(r, function(o) {
      return s(o, n);
    });
  }, t;
}(), me = new ql();
me.produce;
var ts = me.produceWithPatches.bind(me);
me.setAutoFreeze.bind(me);
me.setUseProxies.bind(me);
var Ci = me.applyPatches.bind(me);
me.createDraft.bind(me);
me.finishDraft.bind(me);
var br = "NOT_FOUND";
function Bl(t) {
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
function $l(t, e) {
  var r = [];
  function n(o) {
    var u = r.findIndex(function(v) {
      return e(o, v.key);
    });
    if (u > -1) {
      var l = r[u];
      return u > 0 && (r.splice(u, 1), r.unshift(l)), l.value;
    }
    return br;
  }
  function i(o, u) {
    n(o) === br && (r.unshift({
      key: o,
      value: u
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
function Pi(t, e) {
  var r = typeof e == "object" ? e : {
    equalityCheck: e
  }, n = r.equalityCheck, i = n === void 0 ? Hl : n, a = r.maxSize, s = a === void 0 ? 1 : a, o = r.resultEqualityCheck, u = Vl(i), l = s === 1 ? Bl(u) : $l(s, u);
  function v() {
    var p = l.get(arguments);
    if (p === br) {
      if (p = t.apply(null, arguments), o) {
        var b = l.getEntries(), h = b.find(function(I) {
          return o(I.value, p);
        });
        h && (p = h.value);
      }
      l.put(arguments, p);
    }
    return p;
  }
  return v.clearCache = function() {
    return l.clear();
  }, v;
}
var _r = globalThis && globalThis.__generator || function(t, e) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, s;
  return s = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(l) {
    return function(v) {
      return u([l, v]);
    };
  }
  function u(l) {
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
      } catch (v) {
        l = [6, v], i = 0;
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
}, zl = Object.defineProperty, Wl = Object.defineProperties, Ql = Object.getOwnPropertyDescriptors, wr = Object.getOwnPropertySymbols, rs = Object.prototype.hasOwnProperty, ns = Object.prototype.propertyIsEnumerable, Di = function(t, e, r) {
  return e in t ? zl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
}, se = function(t, e) {
  for (var r in e || (e = {}))
    rs.call(e, r) && Di(t, r, e[r]);
  if (wr)
    for (var n = 0, i = wr(e); n < i.length; n++) {
      var r = i[n];
      ns.call(e, r) && Di(t, r, e[r]);
    }
  return t;
}, ke = function(t, e) {
  return Wl(t, Ql(e));
}, Ni = function(t, e) {
  var r = {};
  for (var n in t)
    rs.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && wr)
    for (var i = 0, a = wr(t); i < a.length; i++) {
      var n = a[i];
      e.indexOf(n) < 0 && ns.call(t, n) && (r[n] = t[n]);
    }
  return r;
}, Er = function(t, e, r) {
  return new Promise(function(n, i) {
    var a = function(u) {
      try {
        o(r.next(u));
      } catch (l) {
        i(l);
      }
    }, s = function(u) {
      try {
        o(r.throw(u));
      } catch (l) {
        i(l);
      }
    }, o = function(u) {
      return u.done ? n(u.value) : Promise.resolve(u.value).then(a, s);
    };
    o((r = r.apply(t, e)).next());
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
var xi = function(t) {
  return [].concat.apply([], t);
};
function Zl() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function ed() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var Mi = ut;
function is(t, e) {
  if (t === e || !(Mi(t) && Mi(e) || Array.isArray(t) && Array.isArray(e)))
    return e;
  for (var r = Object.keys(e), n = Object.keys(t), i = r.length === n.length, a = Array.isArray(e) ? [] : {}, s = 0, o = r; s < o.length; s++) {
    var u = o[s];
    a[u] = is(t[u], e[u]), i && (i = t[u] === a[u]);
  }
  return i ? t : a;
}
var Li = function() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return fetch.apply(void 0, t);
}, td = function(t) {
  return t.status >= 200 && t.status <= 299;
}, rd = function(t) {
  return /ion\/(vnd\.api\+)?json/.test(t.get("content-type") || "");
};
function Fi(t) {
  if (!ut(t))
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
  var r = t, n = r.baseUrl, i = r.prepareHeaders, a = i === void 0 ? function(g) {
    return g;
  } : i, s = r.fetchFn, o = s === void 0 ? Li : s, u = r.paramsSerializer, l = r.isJsonContentType, v = l === void 0 ? rd : l, p = r.jsonContentType, b = p === void 0 ? "application/json" : p, h = r.jsonReplacer, I = r.timeout, T = r.responseHandler, S = r.validateStatus, R = Ni(r, [
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
  return typeof fetch > "u" && o === Li && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), function(g, m) {
    return Er(e, null, function() {
      var d, f, y, _, w, E, k, A, C, N, M, U, L, F, $, W, H, K, B, G, V, J, re, fe, ye, he, be, Z, le, $e, Ze, He, et, lt, Ve, Gt;
      return _r(this, function(_e) {
        switch (_e.label) {
          case 0:
            return d = m.signal, f = m.getState, y = m.extra, _ = m.endpoint, w = m.forced, E = m.type, A = typeof g == "string" ? { url: g } : g, C = A.url, N = A.headers, M = N === void 0 ? new Headers(R.headers) : N, U = A.params, L = U === void 0 ? void 0 : U, F = A.responseHandler, $ = F === void 0 ? T ?? "json" : F, W = A.validateStatus, H = W === void 0 ? S ?? td : W, K = A.timeout, B = K === void 0 ? I : K, G = Ni(A, [
              "url",
              "headers",
              "params",
              "responseHandler",
              "validateStatus",
              "timeout"
            ]), V = se(ke(se({}, R), {
              signal: d
            }), G), M = new Headers(Fi(M)), J = V, [4, a(M, {
              getState: f,
              extra: y,
              endpoint: _,
              forced: w,
              type: E
            })];
          case 1:
            J.headers = _e.sent() || M, re = function(pe) {
              return typeof pe == "object" && (ut(pe) || Array.isArray(pe) || typeof pe.toJSON == "function");
            }, !V.headers.has("content-type") && re(V.body) && V.headers.set("content-type", b), re(V.body) && v(V.headers) && (V.body = JSON.stringify(V.body, h)), L && (fe = ~C.indexOf("?") ? "&" : "?", ye = u ? u(L) : new URLSearchParams(Fi(L)), C += fe + ye), C = Xl(n, C), he = new Request(C, V), be = he.clone(), k = { request: be }, le = !1, $e = B && setTimeout(function() {
              le = !0, m.abort();
            }, B), _e.label = 2;
          case 2:
            return _e.trys.push([2, 4, 5, 6]), [4, o(he)];
          case 3:
            return Z = _e.sent(), [3, 6];
          case 4:
            return Ze = _e.sent(), [2, {
              error: {
                status: le ? "TIMEOUT_ERROR" : "FETCH_ERROR",
                error: String(Ze)
              },
              meta: k
            }];
          case 5:
            return $e && clearTimeout($e), [
              7
              /*endfinally*/
            ];
          case 6:
            He = Z.clone(), k.response = He, lt = "", _e.label = 7;
          case 7:
            return _e.trys.push([7, 9, , 10]), [4, Promise.all([
              O(Z, $).then(function(pe) {
                return et = pe;
              }, function(pe) {
                return Ve = pe;
              }),
              He.text().then(function(pe) {
                return lt = pe;
              }, function() {
              })
            ])];
          case 8:
            if (_e.sent(), Ve)
              throw Ve;
            return [3, 10];
          case 9:
            return Gt = _e.sent(), [2, {
              error: {
                status: "PARSING_ERROR",
                originalStatus: Z.status,
                data: lt,
                error: String(Gt)
              },
              meta: k
            }];
          case 10:
            return [2, H(Z, et) ? {
              data: et,
              meta: k
            } : {
              error: {
                status: Z.status,
                data: et
              },
              meta: k
            }];
        }
      });
    });
  };
  function O(g, m) {
    return Er(this, null, function() {
      var d;
      return _r(this, function(f) {
        switch (f.label) {
          case 0:
            return typeof m == "function" ? [2, m(g)] : (m === "content-type" && (m = v(g.headers) ? "json" : "text"), m !== "json" ? [3, 2] : [4, g.text()]);
          case 1:
            return d = f.sent(), [2, d.length ? JSON.parse(d) : null];
          case 2:
            return [2, g.text()];
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
), Nn = /* @__PURE__ */ wt("__rtkq/focused"), as = /* @__PURE__ */ wt("__rtkq/unfocused"), xn = /* @__PURE__ */ wt("__rtkq/online"), ss = /* @__PURE__ */ wt("__rtkq/offline"), Ne;
(function(t) {
  t.query = "query", t.mutation = "mutation";
})(Ne || (Ne = {}));
function os(t) {
  return t.type === Ne.query;
}
function id(t) {
  return t.type === Ne.mutation;
}
function us(t, e, r, n, i, a) {
  return ad(t) ? t(e, r, n, i).map(fn).map(a) : Array.isArray(t) ? t.map(fn).map(a) : [];
}
function ad(t) {
  return typeof t == "function";
}
function fn(t) {
  return typeof t == "string" ? { type: t } : t;
}
function Kr(t) {
  return t != null;
}
var jt = Symbol("forceQueryFn"), hn = function(t) {
  return typeof t[jt] == "function";
};
function sd(t) {
  var e = t.serializeQueryArgs, r = t.queryThunk, n = t.mutationThunk, i = t.api, a = t.context, s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), u = i.internalActions, l = u.unsubscribeQueryResult, v = u.removeMutationResult, p = u.updateSubscriptionOptions;
  return {
    buildInitiateQuery: g,
    buildInitiateMutation: m,
    getRunningQueryThunk: I,
    getRunningMutationThunk: T,
    getRunningQueriesThunk: S,
    getRunningMutationsThunk: R,
    getRunningOperationPromises: h,
    removalWarning: b
  };
  function b() {
    throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`);
  }
  function h() {
    if (typeof process < "u" && process.env.NODE_ENV === "development")
      b();
    else {
      var d = function(f) {
        return Array.from(f.values()).flatMap(function(y) {
          return y ? Object.values(y) : [];
        });
      };
      return Ir(Ir([], d(s)), d(o)).filter(Kr);
    }
  }
  function I(d, f) {
    return function(y) {
      var _, w = a.endpointDefinitions[d], E = e({
        queryArgs: f,
        endpointDefinition: w,
        endpointName: d
      });
      return (_ = s.get(y)) == null ? void 0 : _[E];
    };
  }
  function T(d, f) {
    return function(y) {
      var _;
      return (_ = o.get(y)) == null ? void 0 : _[f];
    };
  }
  function S() {
    return function(d) {
      return Object.values(s.get(d) || {}).filter(Kr);
    };
  }
  function R() {
    return function(d) {
      return Object.values(o.get(d) || {}).filter(Kr);
    };
  }
  function O(d) {
    if (process.env.NODE_ENV !== "production") {
      if (O.triggered)
        return;
      var f = d(i.internalActions.internal_probeSubscription({
        queryCacheKey: "DOES_NOT_EXIST",
        requestId: "DUMMY_REQUEST_ID"
      }));
      if (O.triggered = !0, typeof f != "boolean")
        throw new Error('Warning: Middleware for RTK-Query API at reducerPath "' + i.reducerPath + `" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function g(d, f) {
    var y = function(_, w) {
      var E = w === void 0 ? {} : w, k = E.subscribe, A = k === void 0 ? !0 : k, C = E.forceRefetch, N = E.subscriptionOptions, M = jt, U = E[M];
      return function(L, F) {
        var $, W, H = e({
          queryArgs: _,
          endpointDefinition: f,
          endpointName: d
        }), K = r(($ = {
          type: "query",
          subscribe: A,
          forceRefetch: C,
          subscriptionOptions: N,
          endpointName: d,
          originalArgs: _,
          queryCacheKey: H
        }, $[jt] = U, $)), B = i.endpoints[d].select(_), G = L(K), V = B(F());
        O(L);
        var J = G.requestId, re = G.abort, fe = V.requestId !== J, ye = (W = s.get(L)) == null ? void 0 : W[H], he = function() {
          return B(F());
        }, be = Object.assign(U ? G.then(he) : fe && !ye ? Promise.resolve(V) : Promise.all([ye, G]).then(he), {
          arg: _,
          requestId: J,
          subscriptionOptions: N,
          queryCacheKey: H,
          abort: re,
          unwrap: function() {
            return Er(this, null, function() {
              var le;
              return _r(this, function($e) {
                switch ($e.label) {
                  case 0:
                    return [4, be];
                  case 1:
                    if (le = $e.sent(), le.isError)
                      throw le.error;
                    return [2, le.data];
                }
              });
            });
          },
          refetch: function() {
            return L(y(_, { subscribe: !1, forceRefetch: !0 }));
          },
          unsubscribe: function() {
            A && L(l({
              queryCacheKey: H,
              requestId: J
            }));
          },
          updateSubscriptionOptions: function(le) {
            be.subscriptionOptions = le, L(p({
              endpointName: d,
              requestId: J,
              queryCacheKey: H,
              options: le
            }));
          }
        });
        if (!ye && !fe && !U) {
          var Z = s.get(L) || {};
          Z[H] = be, s.set(L, Z), be.then(function() {
            delete Z[H], Object.keys(Z).length || s.delete(L);
          });
        }
        return be;
      };
    };
    return y;
  }
  function m(d) {
    return function(f, y) {
      var _ = y === void 0 ? {} : y, w = _.track, E = w === void 0 ? !0 : w, k = _.fixedCacheKey;
      return function(A, C) {
        var N = n({
          type: "mutation",
          endpointName: d,
          originalArgs: f,
          track: E,
          fixedCacheKey: k
        }), M = A(N);
        O(A);
        var U = M.requestId, L = M.abort, F = M.unwrap, $ = M.unwrap().then(function(B) {
          return { data: B };
        }).catch(function(B) {
          return { error: B };
        }), W = function() {
          A(v({ requestId: U, fixedCacheKey: k }));
        }, H = Object.assign($, {
          arg: M.arg,
          requestId: U,
          abort: L,
          unwrap: F,
          unsubscribe: W,
          reset: W
        }), K = o.get(A) || {};
        return o.set(A, K), K[U] = H, H.then(function() {
          delete K[U], Object.keys(K).length || o.delete(A);
        }), k && (K[k] = H, H.then(function() {
          K[k] === H && (delete K[k], Object.keys(K).length || o.delete(A));
        })), H;
      };
    };
  }
}
function ji(t) {
  return t;
}
function od(t) {
  var e = this, r = t.reducerPath, n = t.baseQuery, i = t.context.endpointDefinitions, a = t.serializeQueryArgs, s = t.api, o = function(g, m, d) {
    return function(f) {
      var y = i[g];
      f(s.internalActions.queryResultPatched({
        queryCacheKey: a({
          queryArgs: m,
          endpointDefinition: y,
          endpointName: g
        }),
        patches: d
      }));
    };
  }, u = function(g, m, d) {
    return function(f, y) {
      var _, w, E = s.endpoints[g].select(m)(y()), k = {
        patches: [],
        inversePatches: [],
        undo: function() {
          return f(s.util.patchQueryData(g, m, k.inversePatches));
        }
      };
      if (E.status === ne.uninitialized)
        return k;
      if ("data" in E)
        if (Be(E.data)) {
          var A = ts(E.data, d), C = A[1], N = A[2];
          (_ = k.patches).push.apply(_, C), (w = k.inversePatches).push.apply(w, N);
        } else {
          var M = d(E.data);
          k.patches.push({ op: "replace", path: [], value: M }), k.inversePatches.push({
            op: "replace",
            path: [],
            value: E.data
          });
        }
      return f(s.util.patchQueryData(g, m, k.patches)), k;
    };
  }, l = function(g, m, d) {
    return function(f) {
      var y;
      return f(s.endpoints[g].initiate(m, (y = {
        subscribe: !1,
        forceRefetch: !0
      }, y[jt] = function() {
        return {
          data: d
        };
      }, y)));
    };
  }, v = function(g, m) {
    return Er(e, [g, m], function(d, f) {
      var y, _, w, E, k, A, C, N, M, U, L, F, $, W, H, K, B, G, V = f.signal, J = f.abort, re = f.rejectWithValue, fe = f.fulfillWithValue, ye = f.dispatch, he = f.getState, be = f.extra;
      return _r(this, function(Z) {
        switch (Z.label) {
          case 0:
            y = i[d.endpointName], Z.label = 1;
          case 1:
            return Z.trys.push([1, 8, , 13]), _ = ji, w = void 0, E = {
              signal: V,
              abort: J,
              dispatch: ye,
              getState: he,
              extra: be,
              endpoint: d.endpointName,
              type: d.type,
              forced: d.type === "query" ? p(d, he()) : void 0
            }, k = d.type === "query" ? d[jt] : void 0, k ? (w = k(), [3, 6]) : [3, 2];
          case 2:
            return y.query ? [4, n(y.query(d.originalArgs), E, y.extraOptions)] : [3, 4];
          case 3:
            return w = Z.sent(), y.transformResponse && (_ = y.transformResponse), [3, 6];
          case 4:
            return [4, y.queryFn(d.originalArgs, E, y.extraOptions, function(le) {
              return n(le, E, y.extraOptions);
            })];
          case 5:
            w = Z.sent(), Z.label = 6;
          case 6:
            if (typeof process < "u" && process.env.NODE_ENV === "development") {
              if (A = y.query ? "`baseQuery`" : "`queryFn`", C = void 0, !w)
                C = A + " did not return anything.";
              else if (typeof w != "object")
                C = A + " did not return an object.";
              else if (w.error && w.data)
                C = A + " returned an object containing both `error` and `result`.";
              else if (w.error === void 0 && w.data === void 0)
                C = A + " returned an object containing neither a valid `error` and `result`. At least one of them should not be `undefined`";
              else
                for (N = 0, M = Object.keys(w); N < M.length; N++)
                  if (U = M[N], U !== "error" && U !== "data" && U !== "meta") {
                    C = "The object returned by " + A + " has the unknown property " + U + ".";
                    break;
                  }
              C && console.error("Error encountered handling the endpoint " + d.endpointName + `.
              ` + C + "\n              It needs to return an object with either the shape `{ data: <value> }` or `{ error: <value> }` that may contain an optional `meta` property.\n              Object returned was:", w);
            }
            if (w.error)
              throw new Ui(w.error, w.meta);
            return L = fe, [4, _(w.data, w.meta, d.originalArgs)];
          case 7:
            return [2, L.apply(void 0, [Z.sent(), (B = {
              fulfilledTimeStamp: Date.now(),
              baseQueryMeta: w.meta
            }, B[Jt] = !0, B)])];
          case 8:
            if (F = Z.sent(), $ = F, !($ instanceof Ui))
              return [3, 12];
            W = ji, y.query && y.transformErrorResponse && (W = y.transformErrorResponse), Z.label = 9;
          case 9:
            return Z.trys.push([9, 11, , 12]), H = re, [4, W($.value, $.meta, d.originalArgs)];
          case 10:
            return [2, H.apply(void 0, [Z.sent(), (G = { baseQueryMeta: $.meta }, G[Jt] = !0, G)])];
          case 11:
            return K = Z.sent(), $ = K, [3, 12];
          case 12:
            throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error('An unhandled error occurred processing a request for the endpoint "' + d.endpointName + `".
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
  function p(g, m) {
    var d, f, y, _, w = (f = (d = m[r]) == null ? void 0 : d.queries) == null ? void 0 : f[g.queryCacheKey], E = (y = m[r]) == null ? void 0 : y.config.refetchOnMountOrArgChange, k = w == null ? void 0 : w.fulfilledTimeStamp, A = (_ = g.forceRefetch) != null ? _ : g.subscribe && E;
    return A ? A === !0 || (Number(/* @__PURE__ */ new Date()) - Number(k)) / 1e3 >= A : !1;
  }
  var b = Kn(r + "/executeQuery", v, {
    getPendingMeta: function() {
      var g;
      return g = { startedTimeStamp: Date.now() }, g[Jt] = !0, g;
    },
    condition: function(g, m) {
      var d = m.getState, f, y, _, w = d(), E = (y = (f = w[r]) == null ? void 0 : f.queries) == null ? void 0 : y[g.queryCacheKey], k = E == null ? void 0 : E.fulfilledTimeStamp, A = g.originalArgs, C = E == null ? void 0 : E.originalArgs, N = i[g.endpointName];
      return hn(g) ? !0 : (E == null ? void 0 : E.status) === "pending" ? !1 : p(g, w) || os(N) && ((_ = N == null ? void 0 : N.forceRefetch) != null && _.call(N, {
        currentArg: A,
        previousArg: C,
        endpointState: E,
        state: w
      })) ? !0 : !k;
    },
    dispatchConditionRejection: !0
  }), h = Kn(r + "/executeMutation", v, {
    getPendingMeta: function() {
      var g;
      return g = { startedTimeStamp: Date.now() }, g[Jt] = !0, g;
    }
  }), I = function(g) {
    return "force" in g;
  }, T = function(g) {
    return "ifOlderThan" in g;
  }, S = function(g, m, d) {
    return function(f, y) {
      var _ = I(d) && d.force, w = T(d) && d.ifOlderThan, E = function(N) {
        return N === void 0 && (N = !0), s.endpoints[g].initiate(m, { forceRefetch: N });
      }, k = s.endpoints[g].select(m)(y());
      if (_)
        f(E());
      else if (w) {
        var A = k == null ? void 0 : k.fulfilledTimeStamp;
        if (!A) {
          f(E());
          return;
        }
        var C = (Number(/* @__PURE__ */ new Date()) - Number(new Date(A))) / 1e3 >= w;
        C && f(E());
      } else
        f(E(!1));
    };
  };
  function R(g) {
    return function(m) {
      var d, f;
      return ((f = (d = m == null ? void 0 : m.meta) == null ? void 0 : d.arg) == null ? void 0 : f.endpointName) === g;
    };
  }
  function O(g, m) {
    return {
      matchPending: Lr(ta(g), R(m)),
      matchFulfilled: Lr(Et(g), R(m)),
      matchRejected: Lr(ra(g), R(m))
    };
  }
  return {
    queryThunk: b,
    mutationThunk: h,
    prefetch: S,
    updateQueryData: u,
    upsertQueryData: l,
    patchQueryData: o,
    buildMatchThunkActions: O
  };
}
function cs(t, e, r, n) {
  return us(r[t.meta.arg.endpointName][e], Et(t) ? t.payload : void 0, vn(t) ? t.payload : void 0, t.meta.arg.originalArgs, "baseQueryMeta" in t.meta ? t.meta.baseQueryMeta : void 0, n);
}
function Xt(t, e, r) {
  var n = t[e];
  n && r(n);
}
function qt(t) {
  var e;
  return (e = "arg" in t ? t.arg.fixedCacheKey : t.fixedCacheKey) != null ? e : t.requestId;
}
function qi(t, e, r) {
  var n = t[qt(e)];
  n && r(n);
}
var kt = {};
function ud(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.mutationThunk, i = t.context, a = i.endpointDefinitions, s = i.apiUid, o = i.extractRehydrationInfo, u = i.hasRehydrationInfo, l = t.assertTagType, v = t.config, p = wt(e + "/resetApiState"), b = tt({
    name: e + "/queries",
    initialState: kt,
    reducers: {
      removeQueryResult: {
        reducer: function(d, f) {
          var y = f.payload.queryCacheKey;
          delete d[y];
        },
        prepare: Mr()
      },
      queryResultPatched: function(d, f) {
        var y = f.payload, _ = y.queryCacheKey, w = y.patches;
        Xt(d, _, function(E) {
          E.data = Ci(E.data, w.concat());
        });
      }
    },
    extraReducers: function(d) {
      d.addCase(r.pending, function(f, y) {
        var _ = y.meta, w = y.meta.arg, E, k, A = hn(w);
        (w.subscribe || A) && ((k = f[E = w.queryCacheKey]) != null || (f[E] = {
          status: ne.uninitialized,
          endpointName: w.endpointName
        })), Xt(f, w.queryCacheKey, function(C) {
          C.status = ne.pending, C.requestId = A && C.requestId ? C.requestId : _.requestId, w.originalArgs !== void 0 && (C.originalArgs = w.originalArgs), C.startedTimeStamp = _.startedTimeStamp;
        });
      }).addCase(r.fulfilled, function(f, y) {
        var _ = y.meta, w = y.payload;
        Xt(f, _.arg.queryCacheKey, function(E) {
          var k;
          if (!(E.requestId !== _.requestId && !hn(_.arg))) {
            var A = a[_.arg.endpointName].merge;
            if (E.status = ne.fulfilled, A)
              if (E.data !== void 0) {
                var C = _.fulfilledTimeStamp, N = _.arg, M = _.baseQueryMeta, U = _.requestId, L = gn(E.data, function(F) {
                  return A(F, w, {
                    arg: N.originalArgs,
                    baseQueryMeta: M,
                    fulfilledTimeStamp: C,
                    requestId: U
                  });
                });
                E.data = L;
              } else
                E.data = w;
            else
              E.data = (k = a[_.arg.endpointName].structuralSharing) == null || k ? is(qe(E.data) ? kl(E.data) : E.data, w) : w;
            delete E.error, E.fulfilledTimeStamp = _.fulfilledTimeStamp;
          }
        });
      }).addCase(r.rejected, function(f, y) {
        var _ = y.meta, w = _.condition, E = _.arg, k = _.requestId, A = y.error, C = y.payload;
        Xt(f, E.queryCacheKey, function(N) {
          if (!w) {
            if (N.requestId !== k)
              return;
            N.status = ne.rejected, N.error = C ?? A;
          }
        });
      }).addMatcher(u, function(f, y) {
        for (var _ = o(y).queries, w = 0, E = Object.entries(_); w < E.length; w++) {
          var k = E[w], A = k[0], C = k[1];
          ((C == null ? void 0 : C.status) === ne.fulfilled || (C == null ? void 0 : C.status) === ne.rejected) && (f[A] = C);
        }
      });
    }
  }), h = tt({
    name: e + "/mutations",
    initialState: kt,
    reducers: {
      removeMutationResult: {
        reducer: function(d, f) {
          var y = f.payload, _ = qt(y);
          _ in d && delete d[_];
        },
        prepare: Mr()
      }
    },
    extraReducers: function(d) {
      d.addCase(n.pending, function(f, y) {
        var _ = y.meta, w = y.meta, E = w.requestId, k = w.arg, A = w.startedTimeStamp;
        k.track && (f[qt(_)] = {
          requestId: E,
          status: ne.pending,
          endpointName: k.endpointName,
          startedTimeStamp: A
        });
      }).addCase(n.fulfilled, function(f, y) {
        var _ = y.payload, w = y.meta;
        w.arg.track && qi(f, w, function(E) {
          E.requestId === w.requestId && (E.status = ne.fulfilled, E.data = _, E.fulfilledTimeStamp = w.fulfilledTimeStamp);
        });
      }).addCase(n.rejected, function(f, y) {
        var _ = y.payload, w = y.error, E = y.meta;
        E.arg.track && qi(f, E, function(k) {
          k.requestId === E.requestId && (k.status = ne.rejected, k.error = _ ?? w);
        });
      }).addMatcher(u, function(f, y) {
        for (var _ = o(y).mutations, w = 0, E = Object.entries(_); w < E.length; w++) {
          var k = E[w], A = k[0], C = k[1];
          ((C == null ? void 0 : C.status) === ne.fulfilled || (C == null ? void 0 : C.status) === ne.rejected) && A !== (C == null ? void 0 : C.requestId) && (f[A] = C);
        }
      });
    }
  }), I = tt({
    name: e + "/invalidation",
    initialState: kt,
    reducers: {},
    extraReducers: function(d) {
      d.addCase(b.actions.removeQueryResult, function(f, y) {
        for (var _ = y.payload.queryCacheKey, w = 0, E = Object.values(f); w < E.length; w++)
          for (var k = E[w], A = 0, C = Object.values(k); A < C.length; A++) {
            var N = C[A], M = N.indexOf(_);
            M !== -1 && N.splice(M, 1);
          }
      }).addMatcher(u, function(f, y) {
        for (var _, w, E, k, A = o(y).provided, C = 0, N = Object.entries(A); C < N.length; C++)
          for (var M = N[C], U = M[0], L = M[1], F = 0, $ = Object.entries(L); F < $.length; F++)
            for (var W = $[F], H = W[0], K = W[1], B = (k = (w = (_ = f[U]) != null ? _ : f[U] = {})[E = H || "__internal_without_id"]) != null ? k : w[E] = [], G = 0, V = K; G < V.length; G++) {
              var J = V[G], re = B.includes(J);
              re || B.push(J);
            }
      }).addMatcher(Zi(Et(r), vn(r)), function(f, y) {
        for (var _, w, E, k, A = cs(y, "providesTags", a, l), C = y.meta.arg.queryCacheKey, N = 0, M = Object.values(f); N < M.length; N++)
          for (var U = M[N], L = 0, F = Object.values(U); L < F.length; L++) {
            var $ = F[L], W = $.indexOf(C);
            W !== -1 && $.splice(W, 1);
          }
        for (var H = 0, K = A; H < K.length; H++) {
          var B = K[H], G = B.type, V = B.id, J = (k = (w = (_ = f[G]) != null ? _ : f[G] = {})[E = V || "__internal_without_id"]) != null ? k : w[E] = [], re = J.includes(C);
          re || J.push(C);
        }
      });
    }
  }), T = tt({
    name: e + "/subscriptions",
    initialState: kt,
    reducers: {
      updateSubscriptionOptions: function(d, f) {
      },
      unsubscribeQueryResult: function(d, f) {
      },
      internal_probeSubscription: function(d, f) {
      }
    }
  }), S = tt({
    name: e + "/internalSubscriptions",
    initialState: kt,
    reducers: {
      subscriptionsUpdated: {
        reducer: function(d, f) {
          return Ci(d, f.payload);
        },
        prepare: Mr()
      }
    }
  }), R = tt({
    name: e + "/config",
    initialState: se({
      online: Zl(),
      focused: ed(),
      middlewareRegistered: !1
    }, v),
    reducers: {
      middlewareRegistered: function(d, f) {
        var y = f.payload;
        d.middlewareRegistered = d.middlewareRegistered === "conflict" || s !== y ? "conflict" : !0;
      }
    },
    extraReducers: function(d) {
      d.addCase(xn, function(f) {
        f.online = !0;
      }).addCase(ss, function(f) {
        f.online = !1;
      }).addCase(Nn, function(f) {
        f.focused = !0;
      }).addCase(as, function(f) {
        f.focused = !1;
      }).addMatcher(u, function(f) {
        return se({}, f);
      });
    }
  }), O = ea({
    queries: b.reducer,
    mutations: h.reducer,
    provided: I.reducer,
    subscriptions: S.reducer,
    config: R.reducer
  }), g = function(d, f) {
    return O(p.match(f) ? void 0 : d, f);
  }, m = ke(se(se(se(se(se({}, R.actions), b.actions), T.actions), S.actions), h.actions), {
    unsubscribeMutationResult: h.actions.removeMutationResult,
    resetApiState: p
  });
  return { reducer: g, actions: m };
}
var at = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), ls = {
  status: ne.uninitialized
}, Bi = /* @__PURE__ */ gn(ls, function() {
}), $i = /* @__PURE__ */ gn(ls, function() {
});
function cd(t) {
  var e = t.serializeQueryArgs, r = t.reducerPath, n = function(v) {
    return Bi;
  }, i = function(v) {
    return $i;
  };
  return { buildQuerySelector: o, buildMutationSelector: u, selectInvalidatedBy: l };
  function a(v) {
    return se(se({}, v), Kl(v.status));
  }
  function s(v) {
    var p = v[r];
    if (process.env.NODE_ENV !== "production" && !p) {
      if (s.triggered)
        return p;
      s.triggered = !0, console.error("Error: No data found at `state." + r + "`. Did you forget to add the reducer to the store?");
    }
    return p;
  }
  function o(v, p) {
    return function(b) {
      var h = e({
        queryArgs: b,
        endpointDefinition: p,
        endpointName: v
      }), I = function(S) {
        var R, O, g;
        return (g = (O = (R = s(S)) == null ? void 0 : R.queries) == null ? void 0 : O[h]) != null ? g : Bi;
      }, T = b === at ? n : I;
      return Pt(T, a);
    };
  }
  function u() {
    return function(v) {
      var p, b;
      typeof v == "object" ? b = (p = qt(v)) != null ? p : at : b = v;
      var h = function(T) {
        var S, R, O;
        return (O = (R = (S = s(T)) == null ? void 0 : S.mutations) == null ? void 0 : R[b]) != null ? O : $i;
      }, I = b === at ? i : h;
      return Pt(I, a);
    };
  }
  function l(v, p) {
    for (var b, h = v[r], I = /* @__PURE__ */ new Set(), T = 0, S = p.map(fn); T < S.length; T++) {
      var R = S[T], O = h.provided[R.type];
      if (O)
        for (var g = (b = R.id !== void 0 ? O[R.id] : xi(Object.values(O))) != null ? b : [], m = 0, d = g; m < d.length; m++) {
          var f = d[m];
          I.add(f);
        }
    }
    return xi(Array.from(I.values()).map(function(y) {
      var _ = h.queries[y];
      return _ ? [
        {
          queryCacheKey: y,
          endpointName: _.endpointName,
          originalArgs: _.originalArgs
        }
      ] : [];
    }));
  }
}
var Zt = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Hi = function(t) {
  var e = t.endpointName, r = t.queryArgs, n = "", i = Zt == null ? void 0 : Zt.get(r);
  if (typeof i == "string")
    n = i;
  else {
    var a = JSON.stringify(r, function(s, o) {
      return ut(o) ? Object.keys(o).sort().reduce(function(u, l) {
        return u[l] = o[l], u;
      }, {}) : o;
    });
    ut(r) && (Zt == null || Zt.set(r, a)), n = a;
  }
  return e + "(" + n + ")";
};
function ld() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(n) {
    var i = Pi(function(v) {
      var p, b;
      return (b = n.extractRehydrationInfo) == null ? void 0 : b.call(n, v, {
        reducerPath: (p = n.reducerPath) != null ? p : "api"
      });
    }), a = ke(se({
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1
    }, n), {
      extractRehydrationInfo: i,
      serializeQueryArgs: function(v) {
        var p = Hi;
        if ("serializeQueryArgs" in v.endpointDefinition) {
          var b = v.endpointDefinition.serializeQueryArgs;
          p = function(h) {
            var I = b(h);
            return typeof I == "string" ? I : Hi(ke(se({}, h), {
              queryArgs: I
            }));
          };
        } else
          n.serializeQueryArgs && (p = n.serializeQueryArgs);
        return p(v);
      },
      tagTypes: Ir([], n.tagTypes || [])
    }), s = {
      endpointDefinitions: {},
      batch: function(v) {
        v();
      },
      apiUid: Us(),
      extractRehydrationInfo: i,
      hasRehydrationInfo: Pi(function(v) {
        return i(v) != null;
      })
    }, o = {
      injectEndpoints: l,
      enhanceEndpoints: function(v) {
        var p = v.addTagTypes, b = v.endpoints;
        if (p)
          for (var h = 0, I = p; h < I.length; h++) {
            var T = I[h];
            a.tagTypes.includes(T) || a.tagTypes.push(T);
          }
        if (b)
          for (var S = 0, R = Object.entries(b); S < R.length; S++) {
            var O = R[S], g = O[0], m = O[1];
            typeof m == "function" ? m(s.endpointDefinitions[g]) : Object.assign(s.endpointDefinitions[g] || {}, m);
          }
        return o;
      }
    }, u = t.map(function(v) {
      return v.init(o, a, s);
    });
    function l(v) {
      for (var p = v.endpoints({
        query: function(m) {
          return ke(se({}, m), { type: Ne.query });
        },
        mutation: function(m) {
          return ke(se({}, m), { type: Ne.mutation });
        }
      }), b = 0, h = Object.entries(p); b < h.length; b++) {
        var I = h[b], T = I[0], S = I[1];
        if (!v.overrideExisting && T in s.endpointDefinitions) {
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error("called `injectEndpoints` to override already-existing endpointName " + T + " without specifying `overrideExisting: true`");
          continue;
        }
        s.endpointDefinitions[T] = S;
        for (var R = 0, O = u; R < O.length; R++) {
          var g = O[R];
          g.injectEndpoint(T, S);
        }
      }
      return o;
    }
    return o.injectEndpoints({ endpoints: n.endpoints });
  };
}
function dd(t) {
  for (var e in t)
    return !1;
  return !0;
}
var fd = 2147483647 / 1e3 - 1, hd = function(t) {
  var e = t.reducerPath, r = t.api, n = t.context, i = t.internalState, a = r.internalActions, s = a.removeQueryResult, o = a.unsubscribeQueryResult;
  function u(b) {
    var h = i.currentSubscriptions[b];
    return !!h && !dd(h);
  }
  var l = {}, v = function(b, h, I) {
    var T;
    if (o.match(b)) {
      var S = h.getState()[e], R = b.payload.queryCacheKey;
      p(R, (T = S.queries[R]) == null ? void 0 : T.endpointName, h, S.config);
    }
    if (r.util.resetApiState.match(b))
      for (var O = 0, g = Object.entries(l); O < g.length; O++) {
        var m = g[O], d = m[0], f = m[1];
        f && clearTimeout(f), delete l[d];
      }
    if (n.hasRehydrationInfo(b))
      for (var S = h.getState()[e], y = n.extractRehydrationInfo(b).queries, _ = 0, w = Object.entries(y); _ < w.length; _++) {
        var E = w[_], R = E[0], k = E[1];
        p(R, k == null ? void 0 : k.endpointName, h, S.config);
      }
  };
  function p(b, h, I, T) {
    var S, R = n.endpointDefinitions[h], O = (S = R == null ? void 0 : R.keepUnusedDataFor) != null ? S : T.keepUnusedDataFor;
    if (O !== 1 / 0) {
      var g = Math.max(0, Math.min(O, fd));
      if (!u(b)) {
        var m = l[b];
        m && clearTimeout(m), l[b] = setTimeout(function() {
          u(b) || I.dispatch(s({ queryCacheKey: b })), delete l[b];
        }, g * 1e3);
      }
    }
  }
  return v;
}, pd = function(t) {
  var e = t.reducerPath, r = t.context, n = t.context.endpointDefinitions, i = t.mutationThunk, a = t.api, s = t.assertTagType, o = t.refetchQuery, u = a.internalActions.removeQueryResult, l = Zi(Et(i), vn(i)), v = function(b, h) {
    l(b) && p(cs(b, "invalidatesTags", n, s), h), a.util.invalidateTags.match(b) && p(us(b.payload, void 0, void 0, void 0, void 0, s), h);
  };
  function p(b, h) {
    var I = h.getState(), T = I[e], S = a.util.selectInvalidatedBy(I, b);
    r.batch(function() {
      for (var R, O = Array.from(S.values()), g = 0, m = O; g < m.length; g++) {
        var d = m[g].queryCacheKey, f = T.queries[d], y = (R = T.subscriptions[d]) != null ? R : {};
        f && (Object.keys(y).length === 0 ? h.dispatch(u({
          queryCacheKey: d
        })) : f.status !== ne.uninitialized && h.dispatch(o(f, d)));
      }
    });
  }
  return v;
}, vd = function(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.api, i = t.refetchQuery, a = t.internalState, s = {}, o = function(h, I) {
    (n.internalActions.updateSubscriptionOptions.match(h) || n.internalActions.unsubscribeQueryResult.match(h)) && l(h.payload, I), (r.pending.match(h) || r.rejected.match(h) && h.meta.condition) && l(h.meta.arg, I), (r.fulfilled.match(h) || r.rejected.match(h) && !h.meta.condition) && u(h.meta.arg, I), n.util.resetApiState.match(h) && p();
  };
  function u(h, I) {
    var T = h.queryCacheKey, S = I.getState()[e], R = S.queries[T], O = a.currentSubscriptions[T];
    if (!(!R || R.status === ne.uninitialized)) {
      var g = b(O);
      if (Number.isFinite(g)) {
        var m = s[T];
        m != null && m.timeout && (clearTimeout(m.timeout), m.timeout = void 0);
        var d = Date.now() + g, f = s[T] = {
          nextPollTimestamp: d,
          pollingInterval: g,
          timeout: setTimeout(function() {
            f.timeout = void 0, I.dispatch(i(R, T));
          }, g)
        };
      }
    }
  }
  function l(h, I) {
    var T = h.queryCacheKey, S = I.getState()[e], R = S.queries[T], O = a.currentSubscriptions[T];
    if (!(!R || R.status === ne.uninitialized)) {
      var g = b(O);
      if (!Number.isFinite(g)) {
        v(T);
        return;
      }
      var m = s[T], d = Date.now() + g;
      (!m || d < m.nextPollTimestamp) && u({ queryCacheKey: T }, I);
    }
  }
  function v(h) {
    var I = s[h];
    I != null && I.timeout && clearTimeout(I.timeout), delete s[h];
  }
  function p() {
    for (var h = 0, I = Object.keys(s); h < I.length; h++) {
      var T = I[h];
      v(T);
    }
  }
  function b(h) {
    h === void 0 && (h = {});
    var I = Number.POSITIVE_INFINITY;
    for (var T in h)
      h[T].pollingInterval && (I = Math.min(h[T].pollingInterval, I));
    return I;
  }
  return o;
}, gd = function(t) {
  var e = t.reducerPath, r = t.context, n = t.api, i = t.refetchQuery, a = t.internalState, s = n.internalActions.removeQueryResult, o = function(l, v) {
    Nn.match(l) && u(v, "refetchOnFocus"), xn.match(l) && u(v, "refetchOnReconnect");
  };
  function u(l, v) {
    var p = l.getState()[e], b = p.queries, h = a.currentSubscriptions;
    r.batch(function() {
      for (var I = 0, T = Object.keys(h); I < T.length; I++) {
        var S = T[I], R = b[S], O = h[S];
        if (!(!O || !R)) {
          var g = Object.values(O).some(function(m) {
            return m[v] === !0;
          }) || Object.values(O).every(function(m) {
            return m[v] === void 0;
          }) && p.config[v];
          g && (Object.keys(O).length === 0 ? l.dispatch(s({
            queryCacheKey: S
          })) : R.status !== ne.uninitialized && l.dispatch(i(R, S)));
        }
      }
    });
  }
  return o;
}, Vi = new Error("Promise never resolved before cacheEntryRemoved."), md = function(t) {
  var e = t.api, r = t.reducerPath, n = t.context, i = t.queryThunk, a = t.mutationThunk;
  t.internalState;
  var s = Gn(i), o = Gn(a), u = Et(i, a), l = {}, v = function(h, I, T) {
    var S = p(h);
    if (i.pending.match(h)) {
      var R = T[r].queries[S], O = I.getState()[r].queries[S];
      !R && O && b(h.meta.arg.endpointName, h.meta.arg.originalArgs, S, I, h.meta.requestId);
    } else if (a.pending.match(h)) {
      var O = I.getState()[r].mutations[S];
      O && b(h.meta.arg.endpointName, h.meta.arg.originalArgs, S, I, h.meta.requestId);
    } else if (u(h)) {
      var g = l[S];
      g != null && g.valueResolved && (g.valueResolved({
        data: h.payload,
        meta: h.meta.baseQueryMeta
      }), delete g.valueResolved);
    } else if (e.internalActions.removeQueryResult.match(h) || e.internalActions.removeMutationResult.match(h)) {
      var g = l[S];
      g && (delete l[S], g.cacheEntryRemoved());
    } else if (e.util.resetApiState.match(h))
      for (var m = 0, d = Object.entries(l); m < d.length; m++) {
        var f = d[m], y = f[0], g = f[1];
        delete l[y], g.cacheEntryRemoved();
      }
  };
  function p(h) {
    return s(h) ? h.meta.arg.queryCacheKey : o(h) ? h.meta.requestId : e.internalActions.removeQueryResult.match(h) ? h.payload.queryCacheKey : e.internalActions.removeMutationResult.match(h) ? qt(h.payload) : "";
  }
  function b(h, I, T, S, R) {
    var O = n.endpointDefinitions[h], g = O == null ? void 0 : O.onCacheEntryAdded;
    if (g) {
      var m = {}, d = new Promise(function(k) {
        m.cacheEntryRemoved = k;
      }), f = Promise.race([
        new Promise(function(k) {
          m.valueResolved = k;
        }),
        d.then(function() {
          throw Vi;
        })
      ]);
      f.catch(function() {
      }), l[T] = m;
      var y = e.endpoints[h].select(O.type === Ne.query ? I : T), _ = S.dispatch(function(k, A, C) {
        return C;
      }), w = ke(se({}, S), {
        getCacheEntry: function() {
          return y(S.getState());
        },
        requestId: R,
        extra: _,
        updateCachedData: O.type === Ne.query ? function(k) {
          return S.dispatch(e.util.updateQueryData(h, I, k));
        } : void 0,
        cacheDataLoaded: f,
        cacheEntryRemoved: d
      }), E = g(I, w);
      Promise.resolve(E).catch(function(k) {
        if (k !== Vi)
          throw k;
      });
    }
  }
  return v;
}, yd = function(t) {
  var e = t.api, r = t.context, n = t.queryThunk, i = t.mutationThunk, a = ta(n, i), s = ra(n, i), o = Et(n, i), u = {}, l = function(v, p) {
    var b, h, I;
    if (a(v)) {
      var T = v.meta, S = T.requestId, R = T.arg, O = R.endpointName, g = R.originalArgs, m = r.endpointDefinitions[O], d = m == null ? void 0 : m.onQueryStarted;
      if (d) {
        var f = {}, y = new Promise(function(M, U) {
          f.resolve = M, f.reject = U;
        });
        y.catch(function() {
        }), u[S] = f;
        var _ = e.endpoints[O].select(m.type === Ne.query ? g : S), w = p.dispatch(function(M, U, L) {
          return L;
        }), E = ke(se({}, p), {
          getCacheEntry: function() {
            return _(p.getState());
          },
          requestId: S,
          extra: w,
          updateCachedData: m.type === Ne.query ? function(M) {
            return p.dispatch(e.util.updateQueryData(O, g, M));
          } : void 0,
          queryFulfilled: y
        });
        d(g, E);
      }
    } else if (o(v)) {
      var k = v.meta, S = k.requestId, A = k.baseQueryMeta;
      (b = u[S]) == null || b.resolve({
        data: v.payload,
        meta: A
      }), delete u[S];
    } else if (s(v)) {
      var C = v.meta, S = C.requestId, N = C.rejectedWithValue, A = C.baseQueryMeta;
      (I = u[S]) == null || I.reject({
        error: (h = v.payload) != null ? h : v.error,
        isUnhandledError: !N,
        meta: A
      }), delete u[S];
    }
  };
  return l;
}, bd = function(t) {
  var e = t.api, r = t.context.apiUid, n = t.reducerPath;
  return function(i, a) {
    var s, o;
    e.util.resetApiState.match(i) && a.dispatch(e.internalActions.middlewareRegistered(r)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(i) && i.payload === r && ((o = (s = a.getState()[n]) == null ? void 0 : s.config) == null ? void 0 : o.middlewareRegistered) === "conflict" && console.warn('There is a mismatch between slice and middleware for the reducerPath "' + n + `".
You can only have one api per reducer path, this will lead to crashes in various situations!` + (n === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""));
  };
}, zi, _d = typeof queueMicrotask == "function" ? queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis) : function(t) {
  return (zi || (zi = Promise.resolve())).then(t).catch(function(e) {
    return setTimeout(function() {
      throw e;
    }, 0);
  });
}, Id = function(t) {
  var e = t.api, r = t.queryThunk, n = t.internalState, i = e.reducerPath + "/subscriptions", a = null, s = !1, o = e.internalActions, u = o.updateSubscriptionOptions, l = o.unsubscribeQueryResult, v = function(p, b) {
    var h, I, T, S, R, O, g, m, d;
    if (u.match(b)) {
      var f = b.payload, y = f.queryCacheKey, _ = f.requestId, w = f.options;
      return (h = p == null ? void 0 : p[y]) != null && h[_] && (p[y][_] = w), !0;
    }
    if (l.match(b)) {
      var E = b.payload, y = E.queryCacheKey, _ = E.requestId;
      return p[y] && delete p[y][_], !0;
    }
    if (e.internalActions.removeQueryResult.match(b))
      return delete p[b.payload.queryCacheKey], !0;
    if (r.pending.match(b)) {
      var k = b.meta, A = k.arg, _ = k.requestId;
      if (A.subscribe) {
        var C = (T = p[I = A.queryCacheKey]) != null ? T : p[I] = {};
        return C[_] = (R = (S = A.subscriptionOptions) != null ? S : C[_]) != null ? R : {}, !0;
      }
    }
    if (r.rejected.match(b)) {
      var N = b.meta, M = N.condition, A = N.arg, _ = N.requestId;
      if (M && A.subscribe) {
        var C = (g = p[O = A.queryCacheKey]) != null ? g : p[O] = {};
        return C[_] = (d = (m = A.subscriptionOptions) != null ? m : C[_]) != null ? d : {}, !0;
      }
    }
    return !1;
  };
  return function(p, b) {
    var h, I;
    if (a || (a = JSON.parse(JSON.stringify(n.currentSubscriptions))), e.util.resetApiState.match(p))
      return a = n.currentSubscriptions = {}, [!0, !1];
    if (e.internalActions.internal_probeSubscription.match(p)) {
      var T = p.payload, S = T.queryCacheKey, R = T.requestId, O = !!((h = n.currentSubscriptions[S]) != null && h[R]);
      return [!1, O];
    }
    var g = v(n.currentSubscriptions, p);
    if (g) {
      s || (_d(function() {
        var y = JSON.parse(JSON.stringify(n.currentSubscriptions)), _ = ts(a, function() {
          return y;
        }), w = _[1];
        b.next(e.internalActions.subscriptionsUpdated(w)), a = y, s = !1;
      }), s = !0);
      var m = !!((I = p.type) != null && I.startsWith(i)), d = r.rejected.match(p) && p.meta.condition && !!p.meta.arg.subscribe, f = !m && !d;
      return [f, !1];
    }
    return [!0, !1];
  };
};
function wd(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.api, i = t.context, a = i.apiUid, s = {
    invalidateTags: wt(e + "/invalidateTags")
  }, o = function(p) {
    return !!p && typeof p.type == "string" && p.type.startsWith(e + "/");
  }, u = [
    bd,
    hd,
    pd,
    vd,
    md,
    yd
  ], l = function(p) {
    var b = !1, h = {
      currentSubscriptions: {}
    }, I = ke(se({}, t), {
      internalState: h,
      refetchQuery: v
    }), T = u.map(function(O) {
      return O(I);
    }), S = Id(I), R = gd(I);
    return function(O) {
      return function(g) {
        b || (b = !0, p.dispatch(n.internalActions.middlewareRegistered(a)));
        var m = ke(se({}, p), { next: O }), d = p.getState(), f = S(g, m, d), y = f[0], _ = f[1], w;
        if (y ? w = O(g) : w = _, p.getState()[e] && (R(g, m, d), o(g) || i.hasRehydrationInfo(g)))
          for (var E = 0, k = T; E < k.length; E++) {
            var A = k[E];
            A(g, m, d);
          }
        return w;
      };
    };
  };
  return { middleware: l, actions: s };
  function v(p, b, h) {
    return h === void 0 && (h = {}), r(se({
      type: "query",
      endpointName: p.endpointName,
      originalArgs: p.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: b
    }, h));
  }
}
function We(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  Object.assign.apply(Object, Ir([t], e));
}
var Wi = /* @__PURE__ */ Symbol(), Ed = function() {
  return {
    name: Wi,
    init: function(t, e, r) {
      var n = e.baseQuery, i = e.tagTypes, a = e.reducerPath, s = e.serializeQueryArgs, o = e.keepUnusedDataFor, u = e.refetchOnMountOrArgChange, l = e.refetchOnFocus, v = e.refetchOnReconnect;
      xl();
      var p = function(B) {
        return typeof process < "u" && process.env.NODE_ENV === "development" && (i.includes(B.type) || console.error("Tag type '" + B.type + "' was used, but not specified in `tagTypes`!")), B;
      };
      Object.assign(t, {
        reducerPath: a,
        endpoints: {},
        internalActions: {
          onOnline: xn,
          onOffline: ss,
          onFocus: Nn,
          onFocusLost: as
        },
        util: {}
      });
      var b = od({
        baseQuery: n,
        reducerPath: a,
        context: r,
        api: t,
        serializeQueryArgs: s
      }), h = b.queryThunk, I = b.mutationThunk, T = b.patchQueryData, S = b.updateQueryData, R = b.upsertQueryData, O = b.prefetch, g = b.buildMatchThunkActions, m = ud({
        context: r,
        queryThunk: h,
        mutationThunk: I,
        reducerPath: a,
        assertTagType: p,
        config: {
          refetchOnFocus: l,
          refetchOnReconnect: v,
          refetchOnMountOrArgChange: u,
          keepUnusedDataFor: o,
          reducerPath: a
        }
      }), d = m.reducer, f = m.actions;
      We(t.util, {
        patchQueryData: T,
        updateQueryData: S,
        upsertQueryData: R,
        prefetch: O,
        resetApiState: f.resetApiState
      }), We(t.internalActions, f);
      var y = wd({
        reducerPath: a,
        context: r,
        queryThunk: h,
        mutationThunk: I,
        api: t,
        assertTagType: p
      }), _ = y.middleware, w = y.actions;
      We(t.util, w), We(t, { reducer: d, middleware: _ });
      var E = cd({
        serializeQueryArgs: s,
        reducerPath: a
      }), k = E.buildQuerySelector, A = E.buildMutationSelector, C = E.selectInvalidatedBy;
      We(t.util, { selectInvalidatedBy: C });
      var N = sd({
        queryThunk: h,
        mutationThunk: I,
        api: t,
        serializeQueryArgs: s,
        context: r
      }), M = N.buildInitiateQuery, U = N.buildInitiateMutation, L = N.getRunningMutationThunk, F = N.getRunningMutationsThunk, $ = N.getRunningQueriesThunk, W = N.getRunningQueryThunk, H = N.getRunningOperationPromises, K = N.removalWarning;
      return We(t.util, {
        getRunningOperationPromises: H,
        getRunningOperationPromise: K,
        getRunningMutationThunk: L,
        getRunningMutationsThunk: F,
        getRunningQueryThunk: W,
        getRunningQueriesThunk: $
      }), {
        name: Wi,
        injectEndpoint: function(B, G) {
          var V, J, re = t;
          (J = (V = re.endpoints)[B]) != null || (V[B] = {}), os(G) ? We(re.endpoints[B], {
            name: B,
            select: k(B, G),
            initiate: M(B, G)
          }, g(h, B)) : id(G) && We(re.endpoints[B], {
            name: B,
            select: A(),
            initiate: U(B)
          }, g(I, B));
        }
      };
    }
  };
}, Td = globalThis && globalThis.__spreadArray || function(t, e) {
  for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
    t[i] = e[r];
  return t;
}, Sd = Object.defineProperty, Rd = Object.defineProperties, Od = Object.getOwnPropertyDescriptors, Qi = Object.getOwnPropertySymbols, kd = Object.prototype.hasOwnProperty, Ad = Object.prototype.propertyIsEnumerable, Ki = function(t, e, r) {
  return e in t ? Sd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
}, Me = function(t, e) {
  for (var r in e || (e = {}))
    kd.call(e, r) && Ki(t, r, e[r]);
  if (Qi)
    for (var n = 0, i = Qi(e); n < i.length; n++) {
      var r = i[n];
      Ad.call(e, r) && Ki(t, r, e[r]);
    }
  return t;
}, or = function(t, e) {
  return Rd(t, Od(e));
};
function Gi(t, e, r, n) {
  var i = we(function() {
    return {
      queryArgs: t,
      serialized: typeof t == "object" ? e({ queryArgs: t, endpointDefinition: r, endpointName: n }) : t
    };
  }, [t, e, r, n]), a = Ee(i);
  return ue(function() {
    a.current.serialized !== i.serialized && (a.current = i);
  }, [i]), a.current.serialized === i.serialized ? a.current.queryArgs : t;
}
var Gr = Symbol();
function Jr(t) {
  var e = Ee(t);
  return ue(function() {
    ur(e.current, t) || (e.current = t);
  }, [t]), ur(e.current, t) ? e.current : t;
}
var er = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Cd = function(t) {
  var e = t.endpointName, r = t.queryArgs, n = "", i = er == null ? void 0 : er.get(r);
  if (typeof i == "string")
    n = i;
  else {
    var a = JSON.stringify(r, function(s, o) {
      return ut(o) ? Object.keys(o).sort().reduce(function(u, l) {
        return u[l] = o[l], u;
      }, {}) : o;
    });
    ut(r) && (er == null || er.set(r, a)), n = a;
  }
  return e + "(" + n + ")";
}, Pd = typeof window < "u" && window.document && window.document.createElement ? Ls : ue, Dd = function(t) {
  return t;
}, Nd = function(t) {
  return t.isUninitialized ? or(Me({}, t), {
    isUninitialized: !1,
    isFetching: !0,
    isLoading: t.data === void 0,
    status: ne.pending
  }) : t;
};
function xd(t) {
  var e = t.api, r = t.moduleOptions, n = r.batch, i = r.useDispatch, a = r.useSelector, s = r.useStore, o = r.unstable__sideEffectsInRender, u = t.serializeQueryArgs, l = t.context, v = o ? function(T) {
    return T();
  } : ue;
  return { buildQueryHooks: h, buildMutationHook: I, usePrefetch: b };
  function p(T, S, R) {
    if (S != null && S.endpointName && T.isUninitialized) {
      var O = S.endpointName, g = l.endpointDefinitions[O];
      u({
        queryArgs: S.originalArgs,
        endpointDefinition: g,
        endpointName: O
      }) === u({
        queryArgs: R,
        endpointDefinition: g,
        endpointName: O
      }) && (S = void 0);
    }
    var m = T.isSuccess ? T.data : S == null ? void 0 : S.data;
    m === void 0 && (m = T.data);
    var d = m !== void 0, f = T.isLoading, y = !d && f, _ = T.isSuccess || f && d;
    return or(Me({}, T), {
      data: m,
      currentData: T.data,
      isFetching: f,
      isLoading: y,
      isSuccess: _
    });
  }
  function b(T, S) {
    var R = i(), O = Jr(S);
    return At(function(g, m) {
      return R(e.util.prefetch(T, g, Me(Me({}, O), m)));
    }, [T, R, O]);
  }
  function h(T) {
    var S = function(g, m) {
      var d = m === void 0 ? {} : m, f = d.refetchOnReconnect, y = d.refetchOnFocus, _ = d.refetchOnMountOrArgChange, w = d.skip, E = w === void 0 ? !1 : w, k = d.pollingInterval, A = k === void 0 ? 0 : k, C = e.endpoints[T].initiate, N = i(), M = Gi(E ? at : g, Cd, l.endpointDefinitions[T], T), U = Jr({
        refetchOnReconnect: f,
        refetchOnFocus: y,
        pollingInterval: A
      }), L = Ee(!1), F = Ee(), $ = F.current || {}, W = $.queryCacheKey, H = $.requestId, K = !1;
      if (W && H) {
        var B = N(e.internalActions.internal_probeSubscription({
          queryCacheKey: W,
          requestId: H
        }));
        if (process.env.NODE_ENV !== "production" && typeof B != "boolean")
          throw new Error('Warning: Middleware for RTK-Query API at reducerPath "' + e.reducerPath + `" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
        K = !!B;
      }
      var G = !K && L.current;
      return v(function() {
        L.current = K;
      }), v(function() {
        G && (F.current = void 0);
      }, [G]), v(function() {
        var V, J = F.current;
        if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(G), M === at) {
          J == null || J.unsubscribe(), F.current = void 0;
          return;
        }
        var re = (V = F.current) == null ? void 0 : V.subscriptionOptions;
        if (!J || J.arg !== M) {
          J == null || J.unsubscribe();
          var fe = N(C(M, {
            subscriptionOptions: U,
            forceRefetch: _
          }));
          F.current = fe;
        } else
          U !== re && J.updateSubscriptionOptions(U);
      }, [
        N,
        C,
        _,
        M,
        U,
        G
      ]), ue(function() {
        return function() {
          var V;
          (V = F.current) == null || V.unsubscribe(), F.current = void 0;
        };
      }, []), we(function() {
        return {
          refetch: function() {
            var V;
            if (!F.current)
              throw new Error("Cannot refetch a query that has not been started yet.");
            return (V = F.current) == null ? void 0 : V.refetch();
          }
        };
      }, []);
    }, R = function(g) {
      var m = g === void 0 ? {} : g, d = m.refetchOnReconnect, f = m.refetchOnFocus, y = m.pollingInterval, _ = y === void 0 ? 0 : y, w = e.endpoints[T].initiate, E = i(), k = Qn(Gr), A = k[0], C = k[1], N = Ee(), M = Jr({
        refetchOnReconnect: d,
        refetchOnFocus: f,
        pollingInterval: _
      });
      v(function() {
        var F, $, W = (F = N.current) == null ? void 0 : F.subscriptionOptions;
        M !== W && (($ = N.current) == null || $.updateSubscriptionOptions(M));
      }, [M]);
      var U = Ee(M);
      v(function() {
        U.current = M;
      }, [M]);
      var L = At(function(F, $) {
        $ === void 0 && ($ = !1);
        var W;
        return n(function() {
          var H;
          (H = N.current) == null || H.unsubscribe(), N.current = W = E(w(F, {
            subscriptionOptions: U.current,
            forceRefetch: !$
          })), C(F);
        }), W;
      }, [E, w]);
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
    }, O = function(g, m) {
      var d = m === void 0 ? {} : m, f = d.skip, y = f === void 0 ? !1 : f, _ = d.selectFromResult, w = e.endpoints[T].select, E = Gi(y ? at : g, u, l.endpointDefinitions[T], T), k = Ee(), A = we(function() {
        return Pt([
          w(E),
          function(L, F) {
            return F;
          },
          function(L) {
            return E;
          }
        ], p);
      }, [w, E]), C = we(function() {
        return _ ? Pt([A], _) : A;
      }, [A, _]), N = a(function(L) {
        return C(L, k.current);
      }, ur), M = s(), U = A(M.getState(), k.current);
      return Pd(function() {
        k.current = U;
      }, [U]), N;
    };
    return {
      useQueryState: O,
      useQuerySubscription: S,
      useLazyQuerySubscription: R,
      useLazyQuery: function(g) {
        var m = R(g), d = m[0], f = m[1], y = O(f, or(Me({}, g), {
          skip: f === Gr
        })), _ = we(function() {
          return { lastArg: f };
        }, [f]);
        return we(function() {
          return [d, y, _];
        }, [d, y, _]);
      },
      useQuery: function(g, m) {
        var d = S(g, m), f = O(g, Me({
          selectFromResult: g === at || m != null && m.skip ? void 0 : Nd
        }, m)), y = f.data, _ = f.status, w = f.isLoading, E = f.isSuccess, k = f.isError, A = f.error;
        return Wn({ data: y, status: _, isLoading: w, isSuccess: E, isError: k, error: A }), we(function() {
          return Me(Me({}, f), d);
        }, [f, d]);
      }
    };
  }
  function I(T) {
    return function(S) {
      var R = S === void 0 ? {} : S, O = R.selectFromResult, g = O === void 0 ? Dd : O, m = R.fixedCacheKey, d = e.endpoints[T], f = d.select, y = d.initiate, _ = i(), w = Qn(), E = w[0], k = w[1];
      ue(function() {
        return function() {
          E != null && E.arg.fixedCacheKey || E == null || E.reset();
        };
      }, [E]);
      var A = At(function(J) {
        var re = _(y(J, { fixedCacheKey: m }));
        return k(re), re;
      }, [_, y, m]), C = (E || {}).requestId, N = we(function() {
        return Pt([f({ fixedCacheKey: m, requestId: E == null ? void 0 : E.requestId })], g);
      }, [f, E, g, m]), M = a(N, ur), U = m == null ? E == null ? void 0 : E.arg.originalArgs : void 0, L = At(function() {
        n(function() {
          E && k(void 0), m && _(e.internalActions.removeMutationResult({
            requestId: C,
            fixedCacheKey: m
          }));
        });
      }, [_, m, E, C]), F = M.endpointName, $ = M.data, W = M.status, H = M.isLoading, K = M.isSuccess, B = M.isError, G = M.error;
      Wn({
        endpointName: F,
        data: $,
        status: W,
        isLoading: H,
        isSuccess: K,
        isError: B,
        error: G
      });
      var V = we(function() {
        return or(Me({}, M), { originalArgs: U, reset: L });
      }, [M, U, L]);
      return we(function() {
        return [A, V];
      }, [A, V]);
    };
  }
}
var Tr;
(function(t) {
  t.query = "query", t.mutation = "mutation";
})(Tr || (Tr = {}));
function Md(t) {
  return t.type === Tr.query;
}
function Ld(t) {
  return t.type === Tr.mutation;
}
function Yr(t) {
  return t.replace(t[0], t[0].toUpperCase());
}
function tr(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  Object.assign.apply(Object, Td([t], e));
}
var Fd = /* @__PURE__ */ Symbol(), Ud = function(t) {
  var e = t === void 0 ? {} : t, r = e.batch, n = r === void 0 ? qs : r, i = e.useDispatch, a = i === void 0 ? Bs : i, s = e.useSelector, o = s === void 0 ? $s : s, u = e.useStore, l = u === void 0 ? Hs : u, v = e.unstable__sideEffectsInRender, p = v === void 0 ? !1 : v;
  return {
    name: Fd,
    init: function(b, h, I) {
      var T = h.serializeQueryArgs, S = b, R = xd({
        api: b,
        moduleOptions: {
          batch: n,
          useDispatch: a,
          useSelector: o,
          useStore: l,
          unstable__sideEffectsInRender: p
        },
        serializeQueryArgs: T,
        context: I
      }), O = R.buildQueryHooks, g = R.buildMutationHook, m = R.usePrefetch;
      return tr(S, { usePrefetch: m }), tr(I, { batch: n }), {
        injectEndpoint: function(d, f) {
          if (Md(f)) {
            var y = O(d), _ = y.useQuery, w = y.useLazyQuery, E = y.useLazyQuerySubscription, k = y.useQueryState, A = y.useQuerySubscription;
            tr(S.endpoints[d], {
              useQuery: _,
              useLazyQuery: w,
              useLazyQuerySubscription: E,
              useQueryState: k,
              useQuerySubscription: A
            }), b["use" + Yr(d) + "Query"] = _, b["useLazy" + Yr(d) + "Query"] = w;
          } else if (Ld(f)) {
            var C = g(d);
            tr(S.endpoints[d], {
              useMutation: C
            }), b["use" + Yr(d) + "Mutation"] = C;
          }
        }
      };
    }
  };
}, jd = /* @__PURE__ */ ld(Ed(), Ud());
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
}, ot = jd({
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
}), { useLoginMutation: $d, useUpdateLoginMutation: Hd, usePasswordResetMutation: Vd, useSignInMutation: zd } = ot;
const Wd = ({ children: t, title: e, isLoading: r, scrollPosition: n, language: i, toastMessage: a }) => {
  const s = ve(""), o = ve({}), [u, { data: l, isSuccess: v, isError: p, isLoading: b, error: h }] = Vd(), { closeAction: I, isOpen: T, message: S } = pn(Sr), R = Ee(null), O = (g) => {
    g.preventDefault(), !v && u({
      email: s.value
    });
  };
  return ue(() => {
    R.current && (T ? R.current.showModal() : R.current.close());
  }, [T]), ue(() => {
    if (R.current) {
      const g = R.current.offsetWidth;
      R.current.scrollTo(n.value ? g : 0, 0);
    }
  }, [n.value]), ue(() => {
    h ? "data" in h ? o.value = {
      code: "auth/password-reset-error",
      message: h.data && (Object.values(h.data).find((g) => typeof g == "string") ?? h.data)
    } : "status" in h && (o.value = {
      code: "auth/fetch-failed",
      message: "error" in h ? h.error : "Unexpected Error"
    }) : o.value.message && (o.value = {});
  }, [h]), ue(() => {
    v && (a.value = i.forgotPasswordLabel);
  }, [v]), /* @__PURE__ */ P.jsxs("dialog", { ref: R, className: "modal-container mandatory-scroll-snapping", children: [
    /* @__PURE__ */ P.jsxs("section", { className: "modal-data", children: [
      I && /* @__PURE__ */ P.jsx("button", { onClick: () => typeof I == "function" ? I((g) => !g) : I.value = !I.value, className: "modal-close", children: "X" }),
      /* @__PURE__ */ P.jsx("header", { className: "modal-title", children: /* @__PURE__ */ P.jsx("label", { children: e }) }),
      /* @__PURE__ */ P.jsx("main", { className: "modal-message", children: r ? /* @__PURE__ */ P.jsx(Ji, {}) : typeof S == "string" ? /* @__PURE__ */ P.jsx("p", { children: S }) : S }),
      /* @__PURE__ */ P.jsx("footer", { className: "modal-footer", children: t })
    ] }),
    /* @__PURE__ */ P.jsxs("section", { className: "password-recovery", children: [
      /* @__PURE__ */ P.jsx("span", { className: "go-back", onClick: () => n.value = !1, children: "<" }),
      /* @__PURE__ */ P.jsxs("form", { onSubmit: O, children: [
        /* @__PURE__ */ P.jsx("h3", { children: i.forgotPasswordLabel }),
        /* @__PURE__ */ P.jsxs("label", { children: [
          "Email:",
          /* @__PURE__ */ P.jsx("input", { required: !0, onChange: (g) => s.value = g.currentTarget.value, value: s.value, type: "email" })
        ] }),
        /* @__PURE__ */ P.jsx("button", { className: "is-btn blue", children: i.submit })
      ] }),
      /* @__PURE__ */ P.jsx(gs, { error: o.value }),
      b && /* @__PURE__ */ P.jsx(Ji, {})
    ] }),
    a.value && /* @__PURE__ */ P.jsxs("div", { className: "simple-toast show", children: [
      /* @__PURE__ */ P.jsx("button", { onClick: () => a.value = void 0, children: "X" }),
      /* @__PURE__ */ P.jsx("div", { className: "toast-message", children: a })
    ] })
  ] });
};
const Ji = () => /* @__PURE__ */ P.jsx("div", { className: "loader-container", children: /* @__PURE__ */ P.jsxs("div", { className: "loader-box", children: [
  /* @__PURE__ */ P.jsx("div", { className: "load blue" }),
  /* @__PURE__ */ P.jsx("div", { className: "load red" }),
  /* @__PURE__ */ P.jsx("div", { className: "load orange" }),
  /* @__PURE__ */ P.jsx("div", { className: "load yellow" }),
  /* @__PURE__ */ P.jsx("div", { className: "load green" })
] }) });
const Qd = (t, e) => {
  var r;
  return ((r = t.find((n) => n.code === "*" ? !0 : n.code === e.code)) == null ? void 0 : r.message) ?? e.message;
}, ds = "IS_GOOGLE", fs = "IS_FACEBOOK", hs = "IS_TWITTER", ps = "IS_GITHUB", vs = "IS_MICROSOFT", Kd = () => /* @__PURE__ */ P.jsx("svg", { width: "98", height: "96", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 98 96", children: /* @__PURE__ */ P.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z", fill: "#fff" }) }), Gd = () => /* @__PURE__ */ P.jsx("svg", { version: "1.1", id: "Logo", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 248 204", xmlSpace: "preserve", children: /* @__PURE__ */ P.jsx("g", { id: "Logo_1_", children: /* @__PURE__ */ P.jsx("path", { id: "white_background", fill: "#FFFFFF", d: `M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
                    C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
                    c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
                    c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
                    c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
                    c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z` }) }) }), Jd = () => /* @__PURE__ */ P.jsxs(
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
      /* @__PURE__ */ P.jsx(
        "path",
        {
          fill: "#1877F2",
          d: "M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z"
        }
      ),
      /* @__PURE__ */ P.jsx("path", { fill: "#FFFFFF", d: `M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20
            h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z` })
    ]
  }
), Yd = [
  {
    method: "google",
    constName: ds,
    name: "Google",
    className: "google-btn"
  },
  {
    method: "facebook",
    constName: fs,
    name: "Facebook",
    className: "facebook-btn",
    icon: /* @__PURE__ */ P.jsx(Jd, {})
  },
  {
    method: "twitter",
    constName: hs,
    name: "Twitter",
    className: "twitter-btn",
    icon: /* @__PURE__ */ P.jsx(Gd, {})
  },
  {
    method: "github",
    constName: ps,
    name: "GitHub",
    className: "github-btn",
    icon: /* @__PURE__ */ P.jsx(Kd, {})
  },
  {
    method: "microsoft",
    constName: vs,
    name: "Microsoft",
    className: "microsoft-btn"
  }
], Xd = (t) => Yd.filter((e) => t.find((r) => e.method === r)), Zd = {
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
}, ef = (t) => Zd[t], Rf = () => {
  const t = ve(void 0), e = ve(void 0), r = ve(void 0);
  let n = Ee(void 0);
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
const tf = (t) => Kt(Xe(), Za).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), rf = (t) => Kt(Xe(), Xa).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), nf = (t) => Kt(Xe(), Sl).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), af = (t) => Kt(Xe(), Rl).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), sf = (t) => Kt(Xe(), Ol).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), of = 1e3, uf = 5e3, cf = {
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
}, lf = (t, e) => {
  let r = "";
  const { password1: n, password2: i } = t;
  return n.length > 0 && n.length < 8 ? r = e.minLength : i.length > 0 && i !== n && (r = e.passwordNotMatch), r;
}, df = (t, e, r, n) => {
  const [i] = $d(), [a] = zd(), [s] = Hd(), o = ve(cf), u = ve(!1), l = ve(!1), v = ve(!1), p = ve({}), b = () => {
    Fs(() => {
      u.value = !u.value, l.value && (l.value = !l.value);
    });
  }, h = (g) => {
    const { target: m } = g, d = m.getAttribute("data-section") ?? ht.LOGIN;
    if (o.value = {
      ...o.value,
      [d]: {
        ...o.value[d],
        [m.name]: m.value
      }
    }, d === ht.SIGN_IN) {
      const f = lf(o.value[d], r);
      f ? p.value = {
        code: "sign-in/password",
        message: f
      } : p.value = {};
    }
  }, I = (g) => {
    if (X.hasToS && !u.value) {
      l.value = !0;
      return;
    }
    v.value = !0, R(
      g,
      () => v.value = !1
    );
  }, T = async (g) => {
    if (g.preventDefault(), p.value = {}, X.hasToS && !u.value) {
      l.value = !0;
      return;
    }
    if (v.value)
      return;
    v.value = !0;
    const m = g.currentTarget.getAttribute("data-section") ?? ht.LOGIN;
    let d = {};
    if (m === ht.LOGIN) {
      if (X.acceptUsername ? d = {
        username: o.value[m].username,
        password: o.value[m].password
      } : d = {
        email: o.value[m].email,
        password: o.value[m].password
      }, X.bodyAsBase64) {
        const f = Object.entries(d).map(([_, w]) => `${_}=${w}`).join("&");
        d = {
          encodedBody: btoa(f)
        };
      }
      i(d).unwrap().then(S).catch((f) => {
        "data" in f ? p.value = {
          code: "auth/firebase-credential-not-provided",
          message: f.data && (Object.values(f.data).find((y) => typeof y == "string") ?? f.data)
        } : "status" in f && (p.value = {
          code: "auth/fetch-failed",
          message: "error" in f ? f.error : "Unexpected Error"
        });
      }).finally(() => v.value = !1);
    } else if (m === ht.SIGN_IN) {
      let f = o.value[m];
      if (X.bodyAsBase64) {
        const y = Object.entries(f).map(([_, w]) => `${_}=${w}`).join("&");
        f = btoa(y);
      }
      a({
        body: f,
        encodedBody: X.bodyAsBase64
      }).unwrap().then(S).catch((y) => {
        "data" in y ? p.value = {
          code: "auth/firebase-credential-not-provided",
          message: y.data && (Object.values(y.data).find((_) => typeof _ == "string") ?? y.data)
        } : "status" in y && (p.value = {
          code: "auth/fetch-failed",
          message: "error" in y ? y.error : "Unexpected Error"
        });
      }).finally(() => v.value = !1);
    }
  }, S = (g) => {
    t(async (m, d, f, y) => {
      if (clearInterval(d.current), d.current = void 0, g.message) {
        n.value = g.message;
        return;
      }
      d.current = setInterval(() => {
        s().unwrap().then((_) => m.value = _).catch((_) => {
          m.value = void 0, clearInterval(d.current), "data" in _ ? f.value = {
            code: "auth/firebase-credential-not-provided",
            message: _.data && (Object.values(_.data).find((w) => typeof w == "string") ?? _.data)
          } : "status" in _ && (f.value = {
            code: "auth/fetch-failed",
            message: "error" in _ ? _.error : "Unexpected Error"
          });
        });
      }, g.expiry * of - uf), m.value = g, y.value = async () => {
        await ja(Xe()).finally(() => clearInterval(d.current)), y.value = void 0;
      };
    }), !g.message && (typeof e == "function" ? e((m) => !m) : e.value = !e.value);
  }, R = async (g, m) => {
    i({ token: g }).unwrap().then(S).catch((d) => {
      "data" in d ? p.value = {
        code: "auth/firebase-credential-not-provided",
        message: d.data && (Object.values(d.data).find((f) => typeof f == "string") ?? d.data)
      } : "status" in d && (p.value = {
        code: "auth/fetch-failed",
        message: "error" in d ? d.error : "Unexpected Error"
      });
    }).finally(m);
  };
  return {
    form: o,
    radio: u,
    isLoading: v,
    handleError: p,
    confirmTp: l,
    handleChange: h,
    handleRadio: b,
    handleSocialLogin: async (g, m) => {
      if (g.preventDefault(), X.hasToS && !u.value) {
        l.value = !0;
        return;
      }
      if (!v.value) {
        switch (v.value = !0, m) {
          case ds:
            await rf(p).then(
              async (d) => {
                d && (Se.credentialFromResult(d) === null && (p.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), d.user.getIdToken().then(R));
              }
            );
            break;
          case fs:
            await tf(p).then(
              async (d) => {
                d && (Te.credentialFromResult(d) === null && (p.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), d.user.getIdToken().then(R));
              }
            );
            break;
          case hs:
            await nf(p).then(
              async (d) => {
                d && (Oe.credentialFromResult(d) === null && (p.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), d.user.getIdToken().then(R));
              }
            );
            break;
          case ps:
            await af(p).then(
              async (d) => {
                d && (Re.credentialFromResult(d) === null && (p.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), d.user.getIdToken().then(R));
              }
            );
            break;
          case vs:
            await sf(p).then(
              async (d) => {
                d && (mt.credentialFromResult(d) === null && (p.value = {
                  code: "response/empty-credentials",
                  message: "Firebase: Unavailable to get credentials"
                }), d.user.getIdToken().then(R));
              }
            );
            break;
        }
        v.value = !1;
      }
    },
    handleSubmit: T,
    handleSubmitUserAlreadyLogged: I,
    handleToken: R
  };
}, ff = () => {
  const t = ve(!1), e = ve(void 0), r = ve(void 0), { closeAction: n, authManager: i, isOpen: a } = pn(Sr), s = ef(X.language), {
    form: o,
    radio: u,
    confirmTp: l,
    isLoading: v,
    handleError: p,
    handleSubmit: b,
    handleSubmitUserAlreadyLogged: h,
    handleChange: I,
    handleRadio: T,
    handleSocialLogin: S,
    handleToken: R
  } = df(i, n, s, e);
  return ue(() => {
    a || (p.value = {});
  }, [a]), ue(() => {
    a && (async () => {
      v.value = !0;
      let g = lc(Xe(), async (m) => {
        m && await m.getIdToken().then((d) => {
          const f = m.providerData[0];
          r.value = {
            ...f,
            providerId: f.providerId.split(".")[0],
            tokenId: d
          };
        }).finally(() => v.value = !1), v.value = !1, g();
      });
    })();
  }, [a]), /* @__PURE__ */ P.jsx(
    Wd,
    {
      title: s.logIn,
      isLoading: v.value,
      scrollPosition: t,
      language: s,
      toastMessage: e,
      children: /* @__PURE__ */ P.jsxs("div", { className: "login-container", children: [
        /* @__PURE__ */ P.jsxs("div", { className: "login", children: [
          /* @__PURE__ */ P.jsx(hf, { handleSocialLogin: S }),
          /* @__PURE__ */ P.jsx(
            pf,
            {
              forgotPassword: t,
              form: o,
              handleChange: I,
              handleSubmit: b,
              language: s
            }
          )
        ] }),
        /* @__PURE__ */ P.jsx(gs, { error: p.value }),
        /* @__PURE__ */ P.jsx(vf, { alreadyUser: r, language: s, handleSubmitUserAlreadyLogged: h }),
        /* @__PURE__ */ P.jsx(gf, { confirmTp: l.value, handleRadio: T, radioValue: u.value })
      ] })
    }
  );
}, hf = ({ handleSocialLogin: t }) => /* @__PURE__ */ P.jsx("div", { children: Xd(X.signInMethods).map(
  ({ className: e, name: r, constName: n, icon: i }, a) => /* @__PURE__ */ P.jsxs("button", { onClick: (s) => t(s, n), className: e, children: [
    i && i,
    r
  ] }, a)
) }), pf = ({
  handleSubmit: t,
  language: e,
  handleChange: r,
  form: n,
  forgotPassword: i
}) => {
  const a = ve(!0), s = Ee(null);
  return ue(() => {
    if (s.current) {
      const o = s.current.offsetWidth;
      s.current.scrollTo(a.value ? 0 : o, 0);
    }
  }, [a.value]), /* @__PURE__ */ P.jsx("div", { children: /* @__PURE__ */ P.jsxs("section", { ref: s, className: "form-email mandatory-scroll-snapping", children: [
    /* @__PURE__ */ P.jsxs("form", { className: "form-field", autoComplete: "on", "data-section": "login", onSubmit: t, children: [
      X.acceptUsername ? /* @__PURE__ */ P.jsx(P.Fragment, { children: /* @__PURE__ */ P.jsx("input", { required: !0, "data-section": "login", autoComplete: "username", placeholder: `Email | ${e.username}`, name: "username", onChange: r, value: n.value.login.username, type: "text" }) }) : /* @__PURE__ */ P.jsx(P.Fragment, { children: /* @__PURE__ */ P.jsx("input", { required: !0, "data-section": "login", autoComplete: "email", placeholder: "Email", name: "email", onChange: r, value: n.value.login.email, type: "email" }) }),
      /* @__PURE__ */ P.jsx("input", { required: !0, "data-section": "login", autoComplete: "current-password", placeholder: e.password, name: "password", onChange: r, value: n.value.login.password, type: "password" }),
      /* @__PURE__ */ P.jsx("span", { onClick: () => i.value = !0, className: "forgot-password", children: e.forgotPassword }),
      /* @__PURE__ */ P.jsx("button", { className: "email-login", children: e.logIn }),
      /* @__PURE__ */ P.jsx("span", { onClick: () => a.value = !1, className: "form-action-change", children: e.signIn })
    ] }),
    /* @__PURE__ */ P.jsxs("form", { className: "form-field", autoComplete: "on", "data-section": "signIn", onSubmit: t, children: [
      /* @__PURE__ */ P.jsx("input", { required: !0, "data-section": "signIn", autoComplete: "off", placeholder: "Email", name: "email", onChange: r, value: n.value.signIn.email, type: "email" }),
      /* @__PURE__ */ P.jsx("input", { required: !0, "data-section": "signIn", autoComplete: "off", placeholder: `${e.username}`, name: "username", onChange: r, value: n.value.signIn.username, type: "text" }),
      /* @__PURE__ */ P.jsx("input", { required: !0, "data-section": "signIn", autoComplete: "off", placeholder: e.password, name: "password1", onChange: r, value: n.value.signIn.password1, type: "password" }),
      /* @__PURE__ */ P.jsx("input", { required: !0, "data-section": "signIn", autoComplete: "off", placeholder: e.confirm_password, name: "password2", onChange: r, value: n.value.signIn.password2, type: "password" }),
      /* @__PURE__ */ P.jsx("button", { className: "email-login", children: e.signIn }),
      /* @__PURE__ */ P.jsx("span", { onClick: () => a.value = !0, className: "form-action-change", children: e.logIn })
    ] })
  ] }) });
}, vf = ({ alreadyUser: t, language: e, handleSubmitUserAlreadyLogged: r }) => {
  const n = () => {
    ja(Xe()).finally(() => t.value = void 0);
  };
  return /* @__PURE__ */ P.jsx(P.Fragment, { children: t.value && /* @__PURE__ */ P.jsxs("section", { className: "user-already-logged", children: [
    /* @__PURE__ */ P.jsxs("p", { children: [
      e.continueAs,
      " ",
      t.value.displayName,
      t.value.photoURL && /* @__PURE__ */ P.jsx("img", { src: t.value.photoURL, alt: "user image" }),
      /* @__PURE__ */ P.jsxs("span", { children: [
        e.loggedWith,
        " ",
        t.value.providerId
      ] })
    ] }),
    /* @__PURE__ */ P.jsxs("div", { className: "user-logged-choice", children: [
      /* @__PURE__ */ P.jsx("button", { onClick: () => {
        var i;
        return r(((i = t.value) == null ? void 0 : i.tokenId) ?? "");
      }, className: "choice-ok", children: "Ok" }),
      /* @__PURE__ */ P.jsx("button", { onClick: n, className: "choice-not", children: e.logOut })
    ] })
  ] }) });
}, gf = ({ confirmTp: t, handleRadio: e, radioValue: r }) => {
  const { closeAction: n } = pn(Sr), i = Ee(null), a = () => typeof n == "function" ? n((s) => !s) : n.value = !n.value;
  return ue(() => {
    t && i.current && i.current.scrollIntoView({ behavior: "smooth" });
  }, [t]), /* @__PURE__ */ P.jsx("section", { children: X.hasToS && /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
    /* @__PURE__ */ P.jsxs("label", { className: "login-accept", children: [
      /* @__PURE__ */ P.jsx("input", { onChange: e, type: "checkbox", checked: r }),
      X.hasToS.label(a)
    ] }),
    t && /* @__PURE__ */ P.jsx("span", { ref: i, className: "notify error", children: X.hasToS.errorLabel })
  ] }) });
}, gs = ({ error: t }) => {
  const e = (n) => /* @__PURE__ */ P.jsx(P.Fragment, { children: Object.entries(n).map(
    ([i, a], s) => /* @__PURE__ */ P.jsxs("span", { children: [
      i,
      ": ",
      a
    ] }, s)
  ) }), r = (n, i) => {
    const a = Qd(n, i);
    return /* @__PURE__ */ P.jsx(P.Fragment, { children: typeof i == "string" ? i : e(a) });
  };
  return /* @__PURE__ */ P.jsx(P.Fragment, { children: t.message && /* @__PURE__ */ P.jsx("span", { autoFocus: !0, className: "notify error", children: X.firebaseErrorMessages ? r(X.firebaseErrorMessages, t) : typeof t.message == "string" ? t.message : e(t.message) }) });
}, Yi = {
  user: null,
  isAuthenticated: !1,
  expiry: void 0,
  refresh_token: void 0,
  token: void 0
}, mf = tt({
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
}), { reducer: yf } = mf, bf = ea({
  userReducer: yf,
  [ot.reducerPath]: ot.reducer
}), _f = js({
  reducer: bf,
  middleware: (t) => t().concat(ot.middleware)
}), Of = ({ isOpen: t, closeAction: e, message: r, authManager: n }) => Tl() ? /* @__PURE__ */ P.jsx(Vs, { store: _f, children: /* @__PURE__ */ P.jsx(Sr.Provider, { value: { isOpen: t, closeAction: e, message: r, authManager: n }, children: /* @__PURE__ */ P.jsx(ff, {}) }) }) : /* @__PURE__ */ P.jsx("dialog", { open: !0, children: /* @__PURE__ */ P.jsx("p", { children: "Error: Missing firebaseConfig in setConfig" }) });
export {
  Of as Auth,
  Sf as setConfig,
  Rf as useAuth
};
