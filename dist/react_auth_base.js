import * as V from "react";
import Oa, { createContext as So, useCallback as nr, useMemo as Se, useDebugValue as bi, useState as _i, useEffect as de, useRef as Te, useLayoutEffect as To, useContext as Pa } from "react";
import { useSignal as me, batch as Ro } from "@preact/signals-react";
import { nanoid as Oo, isPlainObject as lt, createAction as Tt, createAsyncThunk as Ii, SHOULD_AUTOBATCH as ir, createSlice as it, prepareAutoBatched as kt, isAnyOf as Ca, isFulfilled as Rt, isRejectedWithValue as xn, combineReducers as Aa, createSelector as Lt, isAllOf as Kr, isPending as ka, isRejected as Na, createNextState as Mn, isAsyncThunkAction as wi, configureStore as Po } from "@reduxjs/toolkit";
import { shallowEqual as br, batch as Co, useDispatch as Ao, useSelector as ko, useStore as No, Provider as Do } from "react-redux";
var hn = { exports: {} }, Nt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ei;
function xo() {
  if (Ei)
    return Nt;
  Ei = 1;
  var t = Oa, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, o, c) {
    var d, h = {}, v = null, p = null;
    c !== void 0 && (v = "" + c), o.key !== void 0 && (v = "" + o.key), o.ref !== void 0 && (p = o.ref);
    for (d in o)
      n.call(o, d) && !a.hasOwnProperty(d) && (h[d] = o[d]);
    if (u && u.defaultProps)
      for (d in o = u.defaultProps, o)
        h[d] === void 0 && (h[d] = o[d]);
    return { $$typeof: e, type: u, key: v, ref: p, props: h, _owner: i.current };
  }
  return Nt.Fragment = r, Nt.jsx = s, Nt.jsxs = s, Nt;
}
var Dt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Si;
function Mo() {
  return Si || (Si = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Oa, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), _ = Symbol.iterator, w = "@@iterator";
    function S(l) {
      if (l === null || typeof l != "object")
        return null;
      var k = _ && l[_] || l[w];
      return typeof k == "function" ? k : null;
    }
    var O = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(l) {
      {
        for (var k = arguments.length, M = new Array(k > 1 ? k - 1 : 0), j = 1; j < k; j++)
          M[j - 1] = arguments[j];
        T("error", l, M);
      }
    }
    function T(l, k, M) {
      {
        var j = O.ReactDebugCurrentFrame, X = j.getStackAddendum();
        X !== "" && (k += "%s", M = M.concat([X]));
        var ee = M.map(function(K) {
          return String(K);
        });
        ee.unshift("Warning: " + k), Function.prototype.apply.call(console[l], console, ee);
      }
    }
    var m = !1, b = !1, f = !1, g = !1, y = !1, R;
    R = Symbol.for("react.module.reference");
    function I(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === n || l === a || y || l === i || l === c || l === d || g || l === p || m || b || f || typeof l == "object" && l !== null && (l.$$typeof === v || l.$$typeof === h || l.$$typeof === s || l.$$typeof === u || l.$$typeof === o || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === R || l.getModuleId !== void 0));
    }
    function P(l, k, M) {
      var j = l.displayName;
      if (j)
        return j;
      var X = k.displayName || k.name || "";
      return X !== "" ? M + "(" + X + ")" : M;
    }
    function A(l) {
      return l.displayName || "Context";
    }
    function C(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
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
            var k = l;
            return A(k) + ".Consumer";
          case s:
            var M = l;
            return A(M._context) + ".Provider";
          case o:
            return P(l, l.render, "ForwardRef");
          case h:
            var j = l.displayName || null;
            return j !== null ? j : C(l.type) || "Memo";
          case v: {
            var X = l, ee = X._payload, K = X._init;
            try {
              return C(K(ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, x = 0, F, L, U, z, $, W, G;
    function B() {
    }
    B.__reactDisabledLog = !0;
    function J() {
      {
        if (x === 0) {
          F = console.log, L = console.info, U = console.warn, z = console.error, $ = console.group, W = console.groupCollapsed, G = console.groupEnd;
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
        x++;
      }
    }
    function H() {
      {
        if (x--, x === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, l, {
              value: F
            }),
            info: N({}, l, {
              value: L
            }),
            warn: N({}, l, {
              value: U
            }),
            error: N({}, l, {
              value: z
            }),
            group: N({}, l, {
              value: $
            }),
            groupCollapsed: N({}, l, {
              value: W
            }),
            groupEnd: N({}, l, {
              value: G
            })
          });
        }
        x < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = O.ReactCurrentDispatcher, ne;
    function pe(l, k, M) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (X) {
            var j = X.stack.trim().match(/\n( *(at )?)/);
            ne = j && j[1] || "";
          }
        return `
` + ne + l;
      }
    }
    var _e = !1, Ie;
    {
      var ye = typeof WeakMap == "function" ? WeakMap : Map;
      Ie = new ye();
    }
    function le(l, k) {
      if (!l || _e)
        return "";
      {
        var M = Ie.get(l);
        if (M !== void 0)
          return M;
      }
      var j;
      _e = !0;
      var X = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ee;
      ee = Y.current, Y.current = null, J();
      try {
        if (k) {
          var K = function() {
            throw Error();
          };
          if (Object.defineProperty(K.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(K, []);
            } catch (De) {
              j = De;
            }
            Reflect.construct(l, [], K);
          } else {
            try {
              K.call();
            } catch (De) {
              j = De;
            }
            l.call(K.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (De) {
            j = De;
          }
          l();
        }
      } catch (De) {
        if (De && j && typeof De.stack == "string") {
          for (var Q = De.stack.split(`
`), he = j.stack.split(`
`), oe = Q.length - 1, ue = he.length - 1; oe >= 1 && ue >= 0 && Q[oe] !== he[ue]; )
            ue--;
          for (; oe >= 1 && ue >= 0; oe--, ue--)
            if (Q[oe] !== he[ue]) {
              if (oe !== 1 || ue !== 1)
                do
                  if (oe--, ue--, ue < 0 || Q[oe] !== he[ue]) {
                    var Ee = `
` + Q[oe].replace(" at new ", " at ");
                    return l.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", l.displayName)), typeof l == "function" && Ie.set(l, Ee), Ee;
                  }
                while (oe >= 1 && ue >= 0);
              break;
            }
        }
      } finally {
        _e = !1, Y.current = ee, H(), Error.prepareStackTrace = X;
      }
      var vt = l ? l.displayName || l.name : "", yi = vt ? pe(vt) : "";
      return typeof l == "function" && Ie.set(l, yi), yi;
    }
    function re(l, k, M) {
      return le(l, !1);
    }
    function Re(l) {
      var k = l.prototype;
      return !!(k && k.isReactComponent);
    }
    function rt(l, k, M) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return le(l, Re(l));
      if (typeof l == "string")
        return pe(l);
      switch (l) {
        case c:
          return pe("Suspense");
        case d:
          return pe("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case o:
            return re(l.render);
          case h:
            return rt(l.type, k, M);
          case v: {
            var j = l, X = j._payload, ee = j._init;
            try {
              return rt(ee(X), k, M);
            } catch {
            }
          }
        }
      return "";
    }
    var ze = Object.prototype.hasOwnProperty, nt = {}, ht = O.ReactDebugCurrentFrame;
    function Qe(l) {
      if (l) {
        var k = l._owner, M = rt(l.type, l._source, k ? k.type : null);
        ht.setExtraStackFrame(M);
      } else
        ht.setExtraStackFrame(null);
    }
    function rr(l, k, M, j, X) {
      {
        var ee = Function.call.bind(ze);
        for (var K in l)
          if (ee(l, K)) {
            var Q = void 0;
            try {
              if (typeof l[K] != "function") {
                var he = Error((j || "React class") + ": " + M + " type `" + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[K] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw he.name = "Invariant Violation", he;
              }
              Q = l[K](k, K, j, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (oe) {
              Q = oe;
            }
            Q && !(Q instanceof Error) && (Qe(X), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", M, K, typeof Q), Qe(null)), Q instanceof Error && !(Q.message in nt) && (nt[Q.message] = !0, Qe(X), E("Failed %s type: %s", M, Q.message), Qe(null));
          }
      }
    }
    var we = Array.isArray;
    function ve(l) {
      return we(l);
    }
    function ao(l) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, M = k && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return M;
      }
    }
    function so(l) {
      try {
        return ui(l), !1;
      } catch {
        return !0;
      }
    }
    function ui(l) {
      return "" + l;
    }
    function ci(l) {
      if (so(l))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ao(l)), ui(l);
    }
    var At = O.ReactCurrentOwner, oo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, li, di, Wr;
    Wr = {};
    function uo(l) {
      if (ze.call(l, "ref")) {
        var k = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function co(l) {
      if (ze.call(l, "key")) {
        var k = Object.getOwnPropertyDescriptor(l, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function lo(l, k) {
      if (typeof l.ref == "string" && At.current && k && At.current.stateNode !== k) {
        var M = C(At.current.type);
        Wr[M] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(At.current.type), l.ref), Wr[M] = !0);
      }
    }
    function fo(l, k) {
      {
        var M = function() {
          li || (li = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        M.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function ho(l, k) {
      {
        var M = function() {
          di || (di = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        M.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var po = function(l, k, M, j, X, ee, K) {
      var Q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: l,
        key: k,
        ref: M,
        props: K,
        // Record the component responsible for creating this element.
        _owner: ee
      };
      return Q._store = {}, Object.defineProperty(Q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Q, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(Q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.freeze && (Object.freeze(Q.props), Object.freeze(Q)), Q;
    };
    function vo(l, k, M, j, X) {
      {
        var ee, K = {}, Q = null, he = null;
        M !== void 0 && (ci(M), Q = "" + M), co(k) && (ci(k.key), Q = "" + k.key), uo(k) && (he = k.ref, lo(k, X));
        for (ee in k)
          ze.call(k, ee) && !oo.hasOwnProperty(ee) && (K[ee] = k[ee]);
        if (l && l.defaultProps) {
          var oe = l.defaultProps;
          for (ee in oe)
            K[ee] === void 0 && (K[ee] = oe[ee]);
        }
        if (Q || he) {
          var ue = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          Q && fo(K, ue), he && ho(K, ue);
        }
        return po(l, Q, he, X, j, At.current, K);
      }
    }
    var Hr = O.ReactCurrentOwner, fi = O.ReactDebugCurrentFrame;
    function pt(l) {
      if (l) {
        var k = l._owner, M = rt(l.type, l._source, k ? k.type : null);
        fi.setExtraStackFrame(M);
      } else
        fi.setExtraStackFrame(null);
    }
    var zr;
    zr = !1;
    function Qr(l) {
      return typeof l == "object" && l !== null && l.$$typeof === e;
    }
    function hi() {
      {
        if (Hr.current) {
          var l = C(Hr.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function mo(l) {
      {
        if (l !== void 0) {
          var k = l.fileName.replace(/^.*[\\\/]/, ""), M = l.lineNumber;
          return `

Check your code at ` + k + ":" + M + ".";
        }
        return "";
      }
    }
    var pi = {};
    function go(l) {
      {
        var k = hi();
        if (!k) {
          var M = typeof l == "string" ? l : l.displayName || l.name;
          M && (k = `

Check the top-level render call using <` + M + ">.");
        }
        return k;
      }
    }
    function vi(l, k) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var M = go(k);
        if (pi[M])
          return;
        pi[M] = !0;
        var j = "";
        l && l._owner && l._owner !== Hr.current && (j = " It was passed a child from " + C(l._owner.type) + "."), pt(l), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, j), pt(null);
      }
    }
    function mi(l, k) {
      {
        if (typeof l != "object")
          return;
        if (ve(l))
          for (var M = 0; M < l.length; M++) {
            var j = l[M];
            Qr(j) && vi(j, k);
          }
        else if (Qr(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var X = S(l);
          if (typeof X == "function" && X !== l.entries)
            for (var ee = X.call(l), K; !(K = ee.next()).done; )
              Qr(K.value) && vi(K.value, k);
        }
      }
    }
    function yo(l) {
      {
        var k = l.type;
        if (k == null || typeof k == "string")
          return;
        var M;
        if (typeof k == "function")
          M = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === o || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        k.$$typeof === h))
          M = k.propTypes;
        else
          return;
        if (M) {
          var j = C(k);
          rr(M, l.props, "prop", j, l);
        } else if (k.PropTypes !== void 0 && !zr) {
          zr = !0;
          var X = C(k);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bo(l) {
      {
        for (var k = Object.keys(l.props), M = 0; M < k.length; M++) {
          var j = k[M];
          if (j !== "children" && j !== "key") {
            pt(l), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), pt(null);
            break;
          }
        }
        l.ref !== null && (pt(l), E("Invalid attribute `ref` supplied to `React.Fragment`."), pt(null));
      }
    }
    function gi(l, k, M, j, X, ee) {
      {
        var K = I(l);
        if (!K) {
          var Q = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (Q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var he = mo(X);
          he ? Q += he : Q += hi();
          var oe;
          l === null ? oe = "null" : ve(l) ? oe = "array" : l !== void 0 && l.$$typeof === e ? (oe = "<" + (C(l.type) || "Unknown") + " />", Q = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof l, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, Q);
        }
        var ue = vo(l, k, M, X, ee);
        if (ue == null)
          return ue;
        if (K) {
          var Ee = k.children;
          if (Ee !== void 0)
            if (j)
              if (ve(Ee)) {
                for (var vt = 0; vt < Ee.length; vt++)
                  mi(Ee[vt], l);
                Object.freeze && Object.freeze(Ee);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mi(Ee, l);
        }
        return l === n ? bo(ue) : yo(ue), ue;
      }
    }
    function _o(l, k, M) {
      return gi(l, k, M, !0);
    }
    function Io(l, k, M) {
      return gi(l, k, M, !1);
    }
    var wo = Io, Eo = _o;
    Dt.Fragment = n, Dt.jsx = wo, Dt.jsxs = Eo;
  }()), Dt;
}
process.env.NODE_ENV === "production" ? hn.exports = xo() : hn.exports = Mo();
var D = hn.exports;
const Ln = So({});
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
const Da = function(t) {
  const e = [];
  let r = 0;
  for (let n = 0; n < t.length; n++) {
    let i = t.charCodeAt(n);
    i < 128 ? e[r++] = i : i < 2048 ? (e[r++] = i >> 6 | 192, e[r++] = i & 63 | 128) : (i & 64512) === 55296 && n + 1 < t.length && (t.charCodeAt(n + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++n) & 1023), e[r++] = i >> 18 | 240, e[r++] = i >> 12 & 63 | 128, e[r++] = i >> 6 & 63 | 128, e[r++] = i & 63 | 128) : (e[r++] = i >> 12 | 224, e[r++] = i >> 6 & 63 | 128, e[r++] = i & 63 | 128);
  }
  return e;
}, Lo = function(t) {
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
}, xa = {
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
      const a = t[i], s = i + 1 < t.length, u = s ? t[i + 1] : 0, o = i + 2 < t.length, c = o ? t[i + 2] : 0, d = a >> 2, h = (a & 3) << 4 | u >> 4;
      let v = (u & 15) << 2 | c >> 6, p = c & 63;
      o || (p = 64, s || (v = 64)), n.push(r[d], r[h], r[v], r[p]);
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
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(Da(t), e);
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
    return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : Lo(this.decodeStringToByteArray(t, e));
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
      const h = i < t.length ? r[t.charAt(i)] : 64;
      if (++i, a == null || u == null || c == null || h == null)
        throw new Uo();
      const v = a << 2 | u >> 4;
      if (n.push(v), c !== 64) {
        const p = u << 4 & 240 | c >> 2;
        if (n.push(p), h !== 64) {
          const _ = c << 6 & 192 | h;
          n.push(_);
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
class Uo extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const Fo = function(t) {
  const e = Da(t);
  return xa.encodeByteArray(e, !0);
}, Ma = function(t) {
  return Fo(t).replace(/\./g, "");
}, La = function(t) {
  try {
    return xa.decodeString(t, !0);
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
function jo() {
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
const qo = () => jo().__FIREBASE_DEFAULTS__, Vo = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const t = process.env.__FIREBASE_DEFAULTS__;
  if (t)
    return JSON.parse(t);
}, Bo = () => {
  if (typeof document > "u")
    return;
  let t;
  try {
    t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const e = t && La(t[1]);
  return e && JSON.parse(e);
}, Un = () => {
  try {
    return qo() || Vo() || Bo();
  } catch (t) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
    return;
  }
}, $o = (t) => {
  var e, r;
  return (r = (e = Un()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || r === void 0 ? void 0 : r[t];
}, Ua = () => {
  var t;
  return (t = Un()) === null || t === void 0 ? void 0 : t.config;
}, Fa = (t) => {
  var e;
  return (e = Un()) === null || e === void 0 ? void 0 : e[`_${t}`];
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
class Wo {
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
function fe() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function Ho() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe());
}
function zo() {
  const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function Qo() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function Ko() {
  const t = fe();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function Go() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function Jo() {
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
const Yo = "FirebaseError";
class Ze extends Error {
  constructor(e, r, n) {
    super(r), this.code = e, this.customData = n, this.name = Yo, Object.setPrototypeOf(this, Ze.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Qt.prototype.create);
  }
}
class Qt {
  constructor(e, r, n) {
    this.service = e, this.serviceName = r, this.errors = n;
  }
  create(e, ...r) {
    const n = r[0] || {}, i = `${this.service}/${e}`, a = this.errors[e], s = a ? Xo(a, n) : "Error", u = `${this.serviceName}: ${s} (${i}).`;
    return new Ze(i, u, n);
  }
}
function Xo(t, e) {
  return t.replace(Zo, (r, n) => {
    const i = e[n];
    return i != null ? String(i) : `<${n}?>`;
  });
}
const Zo = /\{\$([^}]+)}/g;
function eu(t) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e))
      return !1;
  return !0;
}
function _r(t, e) {
  if (t === e)
    return !0;
  const r = Object.keys(t), n = Object.keys(e);
  for (const i of r) {
    if (!n.includes(i))
      return !1;
    const a = t[i], s = e[i];
    if (Ti(a) && Ti(s)) {
      if (!_r(a, s))
        return !1;
    } else if (a !== s)
      return !1;
  }
  for (const i of n)
    if (!r.includes(i))
      return !1;
  return !0;
}
function Ti(t) {
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
function Kt(t) {
  const e = [];
  for (const [r, n] of Object.entries(t))
    Array.isArray(n) ? n.forEach((i) => {
      e.push(encodeURIComponent(r) + "=" + encodeURIComponent(i));
    }) : e.push(encodeURIComponent(r) + "=" + encodeURIComponent(n));
  return e.length ? "&" + e.join("&") : "";
}
function tu(t, e) {
  const r = new ru(t, e);
  return r.subscribe.bind(r);
}
class ru {
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
    nu(e, [
      "next",
      "error",
      "complete"
    ]) ? i = e : i = {
      next: e,
      error: r,
      complete: n
    }, i.next === void 0 && (i.next = Gr), i.error === void 0 && (i.error = Gr), i.complete === void 0 && (i.complete = Gr);
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
function nu(t, e) {
  if (typeof t != "object" || t === null)
    return !1;
  for (const r of e)
    if (r in t && typeof t[r] == "function")
      return !0;
  return !1;
}
function Gr() {
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
function et(t) {
  return t && t._delegate ? t._delegate : t;
}
class It {
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
const at = "[DEFAULT]";
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
class iu {
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
      const n = new Wo();
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
      if (su(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: at });
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
  clearInstance(e = at) {
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
  isInitialized(e = at) {
    return this.instances.has(e);
  }
  getOptions(e = at) {
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
      instanceIdentifier: au(e),
      options: r
    }), this.instances.set(e, n), this.instancesOptions.set(e, r), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, n);
      } catch {
      }
    return n || null;
  }
  normalizeInstanceIdentifier(e = at) {
    return this.component ? this.component.multipleInstances ? e : at : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function au(t) {
  return t === at ? void 0 : t;
}
function su(t) {
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
class ou {
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
    const r = new iu(e, this);
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
const uu = {
  debug: te.DEBUG,
  verbose: te.VERBOSE,
  info: te.INFO,
  warn: te.WARN,
  error: te.ERROR,
  silent: te.SILENT
}, cu = te.INFO, lu = {
  [te.DEBUG]: "log",
  [te.VERBOSE]: "log",
  [te.INFO]: "info",
  [te.WARN]: "warn",
  [te.ERROR]: "error"
}, du = (t, e, ...r) => {
  if (e < t.logLevel)
    return;
  const n = (/* @__PURE__ */ new Date()).toISOString(), i = lu[e];
  if (i)
    console[i](`[${n}]  ${t.name}:`, ...r);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class ja {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = cu, this._logHandler = du, this._userLogHandler = null;
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
    this._logLevel = typeof e == "string" ? uu[e] : e;
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
const fu = (t, e) => e.some((r) => t instanceof r);
let Ri, Oi;
function hu() {
  return Ri || (Ri = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function pu() {
  return Oi || (Oi = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const qa = /* @__PURE__ */ new WeakMap(), pn = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), Fn = /* @__PURE__ */ new WeakMap();
function vu(t) {
  const e = new Promise((r, n) => {
    const i = () => {
      t.removeEventListener("success", a), t.removeEventListener("error", s);
    }, a = () => {
      r(Je(t.result)), i();
    }, s = () => {
      n(t.error), i();
    };
    t.addEventListener("success", a), t.addEventListener("error", s);
  });
  return e.then((r) => {
    r instanceof IDBCursor && qa.set(r, t);
  }).catch(() => {
  }), Fn.set(e, t), e;
}
function mu(t) {
  if (pn.has(t))
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
  pn.set(t, e);
}
let vn = {
  get(t, e, r) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return pn.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || Va.get(t);
      if (e === "store")
        return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0]);
    }
    return Je(t[e]);
  },
  set(t, e, r) {
    return t[e] = r, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function gu(t) {
  vn = t(vn);
}
function yu(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...r) {
    const n = t.call(Yr(this), e, ...r);
    return Va.set(n, e.sort ? e.sort() : [e]), Je(n);
  } : pu().includes(t) ? function(...e) {
    return t.apply(Yr(this), e), Je(qa.get(this));
  } : function(...e) {
    return Je(t.apply(Yr(this), e));
  };
}
function bu(t) {
  return typeof t == "function" ? yu(t) : (t instanceof IDBTransaction && mu(t), fu(t, hu()) ? new Proxy(t, vn) : t);
}
function Je(t) {
  if (t instanceof IDBRequest)
    return vu(t);
  if (Jr.has(t))
    return Jr.get(t);
  const e = bu(t);
  return e !== t && (Jr.set(t, e), Fn.set(e, t)), e;
}
const Yr = (t) => Fn.get(t);
function _u(t, e, { blocked: r, upgrade: n, blocking: i, terminated: a } = {}) {
  const s = indexedDB.open(t, e), u = Je(s);
  return n && s.addEventListener("upgradeneeded", (o) => {
    n(Je(s.result), o.oldVersion, o.newVersion, Je(s.transaction), o);
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
const Iu = ["get", "getKey", "getAll", "getAllKeys", "count"], wu = ["put", "add", "delete", "clear"], Xr = /* @__PURE__ */ new Map();
function Pi(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (Xr.get(e))
    return Xr.get(e);
  const r = e.replace(/FromIndex$/, ""), n = e !== r, i = wu.includes(r);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(r in (n ? IDBIndex : IDBObjectStore).prototype) || !(i || Iu.includes(r))
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
  return Xr.set(e, a), a;
}
gu((t) => ({
  ...t,
  get: (e, r, n) => Pi(e, r) || t.get(e, r, n),
  has: (e, r) => !!Pi(e, r) || t.has(e, r)
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
class Eu {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((r) => {
      if (Su(r)) {
        const n = r.getImmediate();
        return `${n.library}/${n.version}`;
      } else
        return null;
    }).filter((r) => r).join(" ");
  }
}
function Su(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const mn = "@firebase/app", Ci = "0.9.19";
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
const dt = new ja("@firebase/app"), Tu = "@firebase/app-compat", Ru = "@firebase/analytics-compat", Ou = "@firebase/analytics", Pu = "@firebase/app-check-compat", Cu = "@firebase/app-check", Au = "@firebase/auth", ku = "@firebase/auth-compat", Nu = "@firebase/database", Du = "@firebase/database-compat", xu = "@firebase/functions", Mu = "@firebase/functions-compat", Lu = "@firebase/installations", Uu = "@firebase/installations-compat", Fu = "@firebase/messaging", ju = "@firebase/messaging-compat", qu = "@firebase/performance", Vu = "@firebase/performance-compat", Bu = "@firebase/remote-config", $u = "@firebase/remote-config-compat", Wu = "@firebase/storage", Hu = "@firebase/storage-compat", zu = "@firebase/firestore", Qu = "@firebase/firestore-compat", Ku = "firebase", Gu = "10.4.0";
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
const gn = "[DEFAULT]", Ju = {
  [mn]: "fire-core",
  [Tu]: "fire-core-compat",
  [Ou]: "fire-analytics",
  [Ru]: "fire-analytics-compat",
  [Cu]: "fire-app-check",
  [Pu]: "fire-app-check-compat",
  [Au]: "fire-auth",
  [ku]: "fire-auth-compat",
  [Nu]: "fire-rtdb",
  [Du]: "fire-rtdb-compat",
  [xu]: "fire-fn",
  [Mu]: "fire-fn-compat",
  [Lu]: "fire-iid",
  [Uu]: "fire-iid-compat",
  [Fu]: "fire-fcm",
  [ju]: "fire-fcm-compat",
  [qu]: "fire-perf",
  [Vu]: "fire-perf-compat",
  [Bu]: "fire-rc",
  [$u]: "fire-rc-compat",
  [Wu]: "fire-gcs",
  [Hu]: "fire-gcs-compat",
  [zu]: "fire-fst",
  [Qu]: "fire-fst-compat",
  "fire-js": "fire-js",
  [Ku]: "fire-js-all"
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
const Ir = /* @__PURE__ */ new Map(), yn = /* @__PURE__ */ new Map();
function Yu(t, e) {
  try {
    t.container.addComponent(e);
  } catch (r) {
    dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, r);
  }
}
function qt(t) {
  const e = t.name;
  if (yn.has(e))
    return dt.debug(`There were multiple attempts to register component ${e}.`), !1;
  yn.set(e, t);
  for (const r of Ir.values())
    Yu(r, t);
  return !0;
}
function Ba(t, e) {
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
const Xu = {
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
}, Ye = new Qt("app", "Firebase", Xu);
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
class Zu {
  constructor(e, r, n) {
    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, r), this._name = r.name, this._automaticDataCollectionEnabled = r.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new It(
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
      throw Ye.create("app-deleted", { appName: this._name });
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
const Gt = Gu;
function $a(t, e = {}) {
  let r = t;
  typeof e != "object" && (e = { name: e });
  const n = Object.assign({ name: gn, automaticDataCollectionEnabled: !1 }, e), i = n.name;
  if (typeof i != "string" || !i)
    throw Ye.create("bad-app-name", {
      appName: String(i)
    });
  if (r || (r = Ua()), !r)
    throw Ye.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const a = Ir.get(i);
  if (a) {
    if (_r(r, a.options) && _r(n, a.config))
      return a;
    throw Ye.create("duplicate-app", { appName: i });
  }
  const s = new ou(i);
  for (const o of yn.values())
    s.addComponent(o);
  const u = new Zu(r, n, s);
  return Ir.set(i, u), u;
}
function ec(t = gn) {
  const e = Ir.get(t);
  if (!e && t === gn && Ua())
    return $a();
  if (!e)
    throw Ye.create("no-app", { appName: t });
  return e;
}
function yt(t, e, r) {
  var n;
  let i = (n = Ju[t]) !== null && n !== void 0 ? n : t;
  r && (i += `-${r}`);
  const a = i.match(/\s|\//), s = e.match(/\s|\//);
  if (a || s) {
    const u = [
      `Unable to register library "${i}" with version "${e}":`
    ];
    a && u.push(`library name "${i}" contains illegal characters (whitespace or "/")`), a && s && u.push("and"), s && u.push(`version name "${e}" contains illegal characters (whitespace or "/")`), dt.warn(u.join(" "));
    return;
  }
  qt(new It(
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
const tc = "firebase-heartbeat-database", rc = 1, Vt = "firebase-heartbeat-store";
let Zr = null;
function Wa() {
  return Zr || (Zr = _u(tc, rc, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          t.createObjectStore(Vt);
      }
    }
  }).catch((t) => {
    throw Ye.create("idb-open", {
      originalErrorMessage: t.message
    });
  })), Zr;
}
async function nc(t) {
  try {
    return await (await Wa()).transaction(Vt).objectStore(Vt).get(Ha(t));
  } catch (e) {
    if (e instanceof Ze)
      dt.warn(e.message);
    else {
      const r = Ye.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message
      });
      dt.warn(r.message);
    }
  }
}
async function Ai(t, e) {
  try {
    const n = (await Wa()).transaction(Vt, "readwrite");
    await n.objectStore(Vt).put(e, Ha(t)), await n.done;
  } catch (r) {
    if (r instanceof Ze)
      dt.warn(r.message);
    else {
      const n = Ye.create("idb-set", {
        originalErrorMessage: r == null ? void 0 : r.message
      });
      dt.warn(n.message);
    }
  }
}
function Ha(t) {
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
const ic = 1024, ac = 30 * 24 * 60 * 60 * 1e3;
class sc {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const r = this.container.getProvider("app").getImmediate();
    this._storage = new uc(r), this._heartbeatsCachePromise = this._storage.read().then((n) => (this._heartbeatsCache = n, n));
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    const r = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), n = ki();
    if (this._heartbeatsCache === null && (this._heartbeatsCache = await this._heartbeatsCachePromise), !(this._heartbeatsCache.lastSentHeartbeatDate === n || this._heartbeatsCache.heartbeats.some((i) => i.date === n)))
      return this._heartbeatsCache.heartbeats.push({ date: n, agent: r }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((i) => {
        const a = new Date(i.date).valueOf();
        return Date.now() - a <= ac;
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
    const e = ki(), { heartbeatsToSend: r, unsentEntries: n } = oc(this._heartbeatsCache.heartbeats), i = Ma(JSON.stringify({ version: 2, heartbeats: r }));
    return this._heartbeatsCache.lastSentHeartbeatDate = e, n.length > 0 ? (this._heartbeatsCache.heartbeats = n, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i;
  }
}
function ki() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function oc(t, e = ic) {
  const r = [];
  let n = t.slice();
  for (const i of t) {
    const a = r.find((s) => s.agent === i.agent);
    if (a) {
      if (a.dates.push(i.date), Ni(r) > e) {
        a.dates.pop();
        break;
      }
    } else if (r.push({
      agent: i.agent,
      dates: [i.date]
    }), Ni(r) > e) {
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
class uc {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return Go() ? Jo().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    return await this._canUseIndexedDBPromise ? await nc(this.app) || { heartbeats: [] } : { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    var r;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Ai(this.app, {
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
      return Ai(this.app, {
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
function Ni(t) {
  return Ma(
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
function cc(t) {
  qt(new It(
    "platform-logger",
    (e) => new Eu(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), qt(new It(
    "heartbeat",
    (e) => new sc(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), yt(mn, Ci, t), yt(mn, Ci, "esm2017"), yt("fire-js", "");
}
cc("");
function jn(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function za() {
  return {
    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const lc = za, Qa = new Qt("auth", "Firebase", za());
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
const wr = new ja("@firebase/auth");
function dc(t, ...e) {
  wr.logLevel <= te.WARN && wr.warn(`Auth (${Gt}): ${t}`, ...e);
}
function dr(t, ...e) {
  wr.logLevel <= te.ERROR && wr.error(`Auth (${Gt}): ${t}`, ...e);
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
function ke(t, ...e) {
  throw qn(t, ...e);
}
function Pe(t, ...e) {
  return qn(t, ...e);
}
function Ka(t, e, r) {
  const n = Object.assign(Object.assign({}, lc()), { [e]: r });
  return new Qt("auth", "Firebase", n).create(e, {
    appName: t.name
  });
}
function fc(t, e, r) {
  const n = r;
  if (!(e instanceof n))
    throw n.name !== e.constructor.name && ke(
      t,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), Ka(t, "argument-error", `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
}
function qn(t, ...e) {
  if (typeof t != "string") {
    const r = e[0], n = [...e.slice(1)];
    return n[0] && (n[0].appName = t.name), t._errorFactory.create(r, ...n);
  }
  return Qa.create(t, ...e);
}
function q(t, e, ...r) {
  if (!t)
    throw qn(e, ...r);
}
function je(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw dr(e), new Error(e);
}
function Ve(t, e) {
  t || je(e);
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
function bn() {
  var t;
  return typeof self < "u" && ((t = self.location) === null || t === void 0 ? void 0 : t.href) || "";
}
function hc() {
  return Di() === "http:" || Di() === "https:";
}
function Di() {
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
function pc() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (hc() || zo() || "connection" in navigator) ? navigator.onLine : !0;
}
function vc() {
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
class Jt {
  constructor(e, r) {
    this.shortDelay = e, this.longDelay = r, Ve(r > e, "Short delay should be less than long delay!"), this.isMobile = Ho() || Qo();
  }
  get() {
    return pc() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
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
function Vn(t, e) {
  Ve(t.emulator, "Emulator should always be set here");
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
class Ga {
  static initialize(e, r, n) {
    this.fetchImpl = e, r && (this.headersImpl = r), n && (this.responseImpl = n);
  }
  static fetch() {
    if (this.fetchImpl)
      return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self)
      return self.fetch;
    je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl)
      return this.headersImpl;
    if (typeof self < "u" && "Headers" in self)
      return self.Headers;
    je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl)
      return this.responseImpl;
    if (typeof self < "u" && "Response" in self)
      return self.Response;
    je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
const mc = {
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
const gc = new Jt(3e4, 6e4);
function Ja(t, e) {
  return t.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId }) : e;
}
async function Yt(t, e, r, n, i = {}) {
  return Ya(t, i, async () => {
    let a = {}, s = {};
    n && (e === "GET" ? s = n : a = {
      body: JSON.stringify(n)
    });
    const u = Kt(Object.assign({ key: t.config.apiKey }, s)).slice(1), o = await t._getAdditionalHeaders();
    return o[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/json", t.languageCode && (o[
      "X-Firebase-Locale"
      /* HttpHeader.X_FIREBASE_LOCALE */
    ] = t.languageCode), Ga.fetch()(Xa(t, t.config.apiHost, r, u), Object.assign({
      method: e,
      headers: o,
      referrerPolicy: "no-referrer"
    }, a));
  });
}
async function Ya(t, e, r) {
  t._canInitEmulator = !1;
  const n = Object.assign(Object.assign({}, mc), e);
  try {
    const i = new bc(t), a = await Promise.race([
      r(),
      i.promise
    ]);
    i.clearNetworkTimeout();
    const s = await a.json();
    if ("needConfirmation" in s)
      throw ar(t, "account-exists-with-different-credential", s);
    if (a.ok && !("errorMessage" in s))
      return s;
    {
      const u = a.ok ? s.errorMessage : s.error.message, [o, c] = u.split(" : ");
      if (o === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw ar(t, "credential-already-in-use", s);
      if (o === "EMAIL_EXISTS")
        throw ar(t, "email-already-in-use", s);
      if (o === "USER_DISABLED")
        throw ar(t, "user-disabled", s);
      const d = n[o] || o.toLowerCase().replace(/[_\s]+/g, "-");
      if (c)
        throw Ka(t, d, c);
      ke(t, d);
    }
  } catch (i) {
    if (i instanceof Ze)
      throw i;
    ke(t, "network-request-failed", { message: String(i) });
  }
}
async function yc(t, e, r, n, i = {}) {
  const a = await Yt(t, e, r, n, i);
  return "mfaPendingCredential" in a && ke(t, "multi-factor-auth-required", {
    _serverResponse: a
  }), a;
}
function Xa(t, e, r, n) {
  const i = `${e}${r}?${n}`;
  return t.config.emulator ? Vn(t.config, i) : `${t.config.apiScheme}://${i}`;
}
class bc {
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((r, n) => {
      this.timer = setTimeout(() => n(Pe(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), gc.get());
    });
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function ar(t, e, r) {
  const n = {
    appName: t.name
  };
  r.email && (n.email = r.email), r.phoneNumber && (n.phoneNumber = r.phoneNumber);
  const i = Pe(t, e, n);
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
async function _c(t, e) {
  return Yt(t, "POST", "/v1/accounts:delete", e);
}
async function Ic(t, e) {
  return Yt(t, "POST", "/v1/accounts:lookup", e);
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
function Ut(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function wc(t, e = !1) {
  const r = et(t), n = await r.getIdToken(e), i = Bn(n);
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
    authTime: Ut(en(i.auth_time)),
    issuedAtTime: Ut(en(i.iat)),
    expirationTime: Ut(en(i.exp)),
    signInProvider: s || null,
    signInSecondFactor: (a == null ? void 0 : a.sign_in_second_factor) || null
  };
}
function en(t) {
  return Number(t) * 1e3;
}
function Bn(t) {
  const [e, r, n] = t.split(".");
  if (e === void 0 || r === void 0 || n === void 0)
    return dr("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = La(r);
    return i ? JSON.parse(i) : (dr("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return dr("Caught error parsing JWT payload as JSON", i == null ? void 0 : i.toString()), null;
  }
}
function Ec(t) {
  const e = Bn(t);
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
async function Bt(t, e, r = !1) {
  if (r)
    return e;
  try {
    return await e;
  } catch (n) {
    throw n instanceof Ze && Sc(n) && t.auth.currentUser === t && await t.auth.signOut(), n;
  }
}
function Sc({ code: t }) {
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
class Tc {
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
class Za {
  constructor(e, r) {
    this.createdAt = e, this.lastLoginAt = r, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = Ut(this.lastLoginAt), this.creationTime = Ut(this.createdAt);
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
async function Er(t) {
  var e;
  const r = t.auth, n = await t.getIdToken(), i = await Bt(t, Ic(r, { idToken: n }));
  q(
    i == null ? void 0 : i.users.length,
    r,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const a = i.users[0];
  t._notifyReloadListener(a);
  const s = !((e = a.providerUserInfo) === null || e === void 0) && e.length ? Pc(a.providerUserInfo) : [], u = Oc(t.providerData, s), o = t.isAnonymous, c = !(t.email && a.passwordHash) && !(u != null && u.length), d = o ? c : !1, h = {
    uid: a.localId,
    displayName: a.displayName || null,
    photoURL: a.photoUrl || null,
    email: a.email || null,
    emailVerified: a.emailVerified || !1,
    phoneNumber: a.phoneNumber || null,
    tenantId: a.tenantId || null,
    providerData: u,
    metadata: new Za(a.createdAt, a.lastLoginAt),
    isAnonymous: d
  };
  Object.assign(t, h);
}
async function Rc(t) {
  const e = et(t);
  await Er(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function Oc(t, e) {
  return [...t.filter((n) => !e.some((i) => i.providerId === n.providerId)), ...e];
}
function Pc(t) {
  return t.map((e) => {
    var { providerId: r } = e, n = jn(e, ["providerId"]);
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
async function Cc(t, e) {
  const r = await Ya(t, {}, async () => {
    const n = Kt({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: i, apiKey: a } = t.config, s = Xa(t, i, "/v1/token", `key=${a}`), u = await t._getAdditionalHeaders();
    return u[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded", Ga.fetch()(s, {
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
class $t {
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
    const r = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : Ec(e.idToken);
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
    const { accessToken: n, refreshToken: i, expiresIn: a } = await Cc(e, r);
    this.updateTokensAndExpiration(n, i, Number(a));
  }
  updateTokensAndExpiration(e, r, n) {
    this.refreshToken = r || null, this.accessToken = e || null, this.expirationTime = Date.now() + n * 1e3;
  }
  static fromJSON(e, r) {
    const { refreshToken: n, accessToken: i, expirationTime: a } = r, s = new $t();
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
    return Object.assign(new $t(), this.toJSON());
  }
  _performRefresh() {
    return je("not implemented");
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
function Ke(t, e) {
  q(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class ut {
  constructor(e) {
    var { uid: r, auth: n, stsTokenManager: i } = e, a = jn(e, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase", this.proactiveRefresh = new Tc(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = r, this.auth = n, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = a.displayName || null, this.email = a.email || null, this.emailVerified = a.emailVerified || !1, this.phoneNumber = a.phoneNumber || null, this.photoURL = a.photoURL || null, this.isAnonymous = a.isAnonymous || !1, this.tenantId = a.tenantId || null, this.providerData = a.providerData ? [...a.providerData] : [], this.metadata = new Za(a.createdAt || void 0, a.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const r = await Bt(this, this.stsTokenManager.getToken(this.auth, e));
    return q(
      r,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== r && (this.accessToken = r, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), r;
  }
  getIdTokenResult(e) {
    return wc(this, e);
  }
  reload() {
    return Rc(this);
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
    const r = new ut(Object.assign(Object.assign({}, this), { auth: e, stsTokenManager: this.stsTokenManager._clone() }));
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
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), n = !0), r && await Er(this), await this.auth._persistUserIfCurrent(this), n && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const e = await this.getIdToken();
    return await Bt(this, _c(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
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
    const h = (n = r.displayName) !== null && n !== void 0 ? n : void 0, v = (i = r.email) !== null && i !== void 0 ? i : void 0, p = (a = r.phoneNumber) !== null && a !== void 0 ? a : void 0, _ = (s = r.photoURL) !== null && s !== void 0 ? s : void 0, w = (u = r.tenantId) !== null && u !== void 0 ? u : void 0, S = (o = r._redirectEventId) !== null && o !== void 0 ? o : void 0, O = (c = r.createdAt) !== null && c !== void 0 ? c : void 0, E = (d = r.lastLoginAt) !== null && d !== void 0 ? d : void 0, { uid: T, emailVerified: m, isAnonymous: b, providerData: f, stsTokenManager: g } = r;
    q(
      T && g,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const y = $t.fromJSON(this.name, g);
    q(
      typeof T == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), Ke(h, e.name), Ke(v, e.name), q(
      typeof m == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), q(
      typeof b == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), Ke(p, e.name), Ke(_, e.name), Ke(w, e.name), Ke(S, e.name), Ke(O, e.name), Ke(E, e.name);
    const R = new ut({
      uid: T,
      auth: e,
      email: v,
      emailVerified: m,
      displayName: h,
      isAnonymous: b,
      photoURL: _,
      phoneNumber: p,
      tenantId: w,
      stsTokenManager: y,
      createdAt: O,
      lastLoginAt: E
    });
    return f && Array.isArray(f) && (R.providerData = f.map((I) => Object.assign({}, I))), S && (R._redirectEventId = S), R;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, r, n = !1) {
    const i = new $t();
    i.updateFromServerResponse(r);
    const a = new ut({
      uid: r.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: n
    });
    return await Er(a), a;
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
const xi = /* @__PURE__ */ new Map();
function qe(t) {
  Ve(t instanceof Function, "Expected a class definition");
  let e = xi.get(t);
  return e ? (Ve(e instanceof t, "Instance stored in cache mismatched with class"), e) : (e = new t(), xi.set(t, e), e);
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
class es {
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
es.type = "NONE";
const Mi = es;
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
function fr(t, e, r) {
  return `firebase:${t}:${e}:${r}`;
}
class bt {
  constructor(e, r, n) {
    this.persistence = e, this.auth = r, this.userKey = n;
    const { config: i, name: a } = this.auth;
    this.fullUserKey = fr(this.userKey, i.apiKey, a), this.fullPersistenceKey = fr("persistence", i.apiKey, a), this.boundEventHandler = r._onStorageEvent.bind(r), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? ut._fromJSON(this.auth, e) : null;
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
      return new bt(qe(Mi), e, n);
    const i = (await Promise.all(r.map(async (c) => {
      if (await c._isAvailable())
        return c;
    }))).filter((c) => c);
    let a = i[0] || qe(Mi);
    const s = fr(n, e.config.apiKey, e.name);
    let u = null;
    for (const c of r)
      try {
        const d = await c._get(s);
        if (d) {
          const h = ut._fromJSON(e, d);
          c !== a && (u = h), a = c;
          break;
        }
      } catch {
      }
    const o = i.filter((c) => c._shouldAllowMigration);
    return !a._shouldAllowMigration || !o.length ? new bt(a, e, n) : (a = o[0], u && await a._set(s, u.toJSON()), await Promise.all(r.map(async (c) => {
      if (c !== a)
        try {
          await c._remove(s);
        } catch {
        }
    })), new bt(a, e, n));
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
function Li(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (ns(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (ts(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (as(e))
    return "Blackberry";
  if (ss(e))
    return "Webos";
  if ($n(e))
    return "Safari";
  if ((e.includes("chrome/") || rs(e)) && !e.includes("edge/"))
    return "Chrome";
  if (is(e))
    return "Android";
  {
    const r = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, n = t.match(r);
    if ((n == null ? void 0 : n.length) === 2)
      return n[1];
  }
  return "Other";
}
function ts(t = fe()) {
  return /firefox\//i.test(t);
}
function $n(t = fe()) {
  const e = t.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function rs(t = fe()) {
  return /crios\//i.test(t);
}
function ns(t = fe()) {
  return /iemobile/i.test(t);
}
function is(t = fe()) {
  return /android/i.test(t);
}
function as(t = fe()) {
  return /blackberry/i.test(t);
}
function ss(t = fe()) {
  return /webos/i.test(t);
}
function Lr(t = fe()) {
  return /iphone|ipad|ipod/i.test(t) || /macintosh/i.test(t) && /mobile/i.test(t);
}
function Ac(t = fe()) {
  var e;
  return Lr(t) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function kc() {
  return Ko() && document.documentMode === 10;
}
function os(t = fe()) {
  return Lr(t) || is(t) || ss(t) || as(t) || /windows phone/i.test(t) || ns(t);
}
function Nc() {
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
function us(t, e = []) {
  let r;
  switch (t) {
    case "Browser":
      r = Li(fe());
      break;
    case "Worker":
      r = `${Li(fe())}-${t}`;
      break;
    default:
      r = t;
  }
  const n = e.length ? e.join(",") : "FirebaseCore-web";
  return `${r}/JsCore/${Gt}/${n}`;
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
class Dc {
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
async function xc(t, e = {}) {
  return Yt(t, "GET", "/v2/passwordPolicy", Ja(t, e));
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
const Mc = 6;
class Lc {
  constructor(e) {
    var r, n, i, a;
    const s = e.customStrengthOptions;
    this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = (r = s.minPasswordLength) !== null && r !== void 0 ? r : Mc, s.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = s.maxPasswordLength), s.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = s.containsLowercaseCharacter), s.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = s.containsUppercaseCharacter), s.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = s.containsNumericCharacter), s.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = s.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = (i = (n = e.allowedNonAlphanumericCharacters) === null || n === void 0 ? void 0 : n.join("")) !== null && i !== void 0 ? i : "", this.forceUpgradeOnSignin = (a = e.forceUpgradeOnSignin) !== null && a !== void 0 ? a : !1, this.schemaVersion = e.schemaVersion;
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
class Uc {
  constructor(e, r, n, i) {
    this.app = e, this.heartbeatServiceProvider = r, this.appCheckServiceProvider = n, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Ui(this), this.idTokenSubscription = new Ui(this), this.beforeStateQueue = new Dc(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Qa, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion;
  }
  _initializeWithPersistence(e, r) {
    return r && (this._popupRedirectResolver = qe(r)), this._initializationPromise = this.queue(async () => {
      var n, i;
      if (!this._deleted && (this.persistenceManager = await bt.create(this, e), !this._deleted)) {
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
      await Er(e);
    } catch (r) {
      if ((r == null ? void 0 : r.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = vc();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    const r = e ? et(e) : null;
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
      await this.assertedPersistence.setPersistence(qe(e));
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
    const e = await xc(this), r = new Lc(e);
    this.tenantId === null ? this._projectPasswordPolicy = r : this._tenantPasswordPolicies[this.tenantId] = r;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new Qt("auth", "Firebase", e());
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
      const r = e && qe(e) || this._popupRedirectResolver;
      q(
        r,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await bt.create(
        this,
        [qe(r._redirectPersistence)],
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
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = us(this.config.clientPlatform, this._getFrameworks()));
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
    return r != null && r.error && dc(`Error while retrieving App Check token: ${r.error}`), r == null ? void 0 : r.token;
  }
}
function Xt(t) {
  return et(t);
}
class Ui {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = tu((r) => this.observer = r);
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
function Fc() {
  var t, e;
  return (e = (t = document.getElementsByTagName("head")) === null || t === void 0 ? void 0 : t[0]) !== null && e !== void 0 ? e : document;
}
function jc(t) {
  return new Promise((e, r) => {
    const n = document.createElement("script");
    n.setAttribute("src", t), n.onload = e, n.onerror = (i) => {
      const a = Pe(
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      a.customData = i, r(a);
    }, n.type = "text/javascript", n.charset = "UTF-8", Fc().appendChild(n);
  });
}
function qc(t) {
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
function Vc(t, e) {
  const r = Ba(t, "auth");
  if (r.isInitialized()) {
    const i = r.getImmediate(), a = r.getOptions();
    if (_r(a, e ?? {}))
      return i;
    ke(
      i,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return r.initialize({ options: e });
}
function Bc(t, e) {
  const r = (e == null ? void 0 : e.persistence) || [], n = (Array.isArray(r) ? r : [r]).map(qe);
  e != null && e.errorMap && t._updateErrorMap(e.errorMap), t._initializeWithPersistence(n, e == null ? void 0 : e.popupRedirectResolver);
}
function $c(t, e, r) {
  const n = Xt(t);
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
  const i = !!(r != null && r.disableWarnings), a = cs(e), { host: s, port: u } = Wc(e), o = u === null ? "" : `:${u}`;
  n.config.emulator = { url: `${a}//${s}${o}/` }, n.settings.appVerificationDisabledForTesting = !0, n.emulatorConfig = Object.freeze({
    host: s,
    port: u,
    protocol: a.replace(":", ""),
    options: Object.freeze({ disableWarnings: i })
  }), i || Hc();
}
function cs(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function Wc(t) {
  const e = cs(t), r = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!r)
    return { host: "", port: null };
  const n = r[2].split("@").pop() || "", i = /^(\[[^\]]+\])(:|$)/.exec(n);
  if (i) {
    const a = i[1];
    return { host: a, port: Fi(n.substr(a.length + 1)) };
  } else {
    const [a, s] = n.split(":");
    return { host: a, port: Fi(s) };
  }
}
function Fi(t) {
  if (!t)
    return null;
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function Hc() {
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
class ls {
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
    return je("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return je("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, r) {
    return je("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return je("not implemented");
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
async function _t(t, e) {
  return yc(t, "POST", "/v1/accounts:signInWithIdp", Ja(t, e));
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
const zc = "http://localhost";
class Be extends ls {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const r = new Be(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (r.idToken = e.idToken), e.accessToken && (r.accessToken = e.accessToken), e.nonce && !e.pendingToken && (r.nonce = e.nonce), e.pendingToken && (r.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (r.accessToken = e.oauthToken, r.secret = e.oauthTokenSecret) : ke(
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
    const r = typeof e == "string" ? JSON.parse(e) : e, { providerId: n, signInMethod: i } = r, a = jn(r, ["providerId", "signInMethod"]);
    if (!n || !i)
      return null;
    const s = new Be(n, i);
    return s.idToken = a.idToken || void 0, s.accessToken = a.accessToken || void 0, s.secret = a.secret, s.nonce = a.nonce, s.pendingToken = a.pendingToken || null, s;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const r = this.buildRequest();
    return _t(e, r);
  }
  /** @internal */
  _linkToIdToken(e, r) {
    const n = this.buildRequest();
    return n.idToken = r, _t(e, n);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const r = this.buildRequest();
    return r.autoCreate = !1, _t(e, r);
  }
  buildRequest() {
    const e = {
      requestUri: zc,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const r = {};
      this.idToken && (r.id_token = this.idToken), this.accessToken && (r.access_token = this.accessToken), this.secret && (r.oauth_token_secret = this.secret), r.providerId = this.providerId, this.nonce && !this.pendingToken && (r.nonce = this.nonce), e.postBody = Kt(r);
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
class Wn {
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
class Ot extends Wn {
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
class Ft extends Ot {
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
    ), Be._fromParams(r);
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
    ), Be._fromParams(Object.assign(Object.assign({}, e), { providerId: this.providerId, signInMethod: this.providerId }));
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Ft.oauthCredentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Ft.oauthCredentialFromTaggedObject(e.customData || {});
  }
  static oauthCredentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: r, oauthAccessToken: n, oauthTokenSecret: i, pendingToken: a, nonce: s, providerId: u } = e;
    if (!n && !i && !r && !a || !u)
      return null;
    try {
      return new Ft(u)._credential({
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
class Me extends Ot {
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
    return Be._fromParams({
      providerId: Me.PROVIDER_ID,
      signInMethod: Me.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
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
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return Me.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Me.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Me.PROVIDER_ID = "facebook.com";
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
class Le extends Ot {
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
    return Be._fromParams({
      providerId: Le.PROVIDER_ID,
      signInMethod: Le.GOOGLE_SIGN_IN_METHOD,
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
    const { oauthIdToken: r, oauthAccessToken: n } = e;
    if (!r && !n)
      return null;
    try {
      return Le.credential(r, n);
    } catch {
      return null;
    }
  }
}
Le.GOOGLE_SIGN_IN_METHOD = "google.com";
Le.PROVIDER_ID = "google.com";
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
class Ue extends Ot {
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
    return Be._fromParams({
      providerId: Ue.PROVIDER_ID,
      signInMethod: Ue.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Ue.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Ue.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return Ue.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Ue.GITHUB_SIGN_IN_METHOD = "github.com";
Ue.PROVIDER_ID = "github.com";
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
class Fe extends Ot {
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
    return Be._fromParams({
      providerId: Fe.PROVIDER_ID,
      signInMethod: Fe.TWITTER_SIGN_IN_METHOD,
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
    return Fe.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Fe.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: r, oauthTokenSecret: n } = e;
    if (!r || !n)
      return null;
    try {
      return Fe.credential(r, n);
    } catch {
      return null;
    }
  }
}
Fe.TWITTER_SIGN_IN_METHOD = "twitter.com";
Fe.PROVIDER_ID = "twitter.com";
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
class wt {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static async _fromIdTokenResponse(e, r, n, i = !1) {
    const a = await ut._fromIdTokenResponse(e, n, i), s = ji(n);
    return new wt({
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
    const i = ji(n);
    return new wt({
      user: e,
      providerId: i,
      _tokenResponse: n,
      operationType: r
    });
  }
}
function ji(t) {
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
class Sr extends Ze {
  constructor(e, r, n, i) {
    var a;
    super(r.code, r.message), this.operationType = n, this.user = i, Object.setPrototypeOf(this, Sr.prototype), this.customData = {
      appName: e.name,
      tenantId: (a = e.tenantId) !== null && a !== void 0 ? a : void 0,
      _serverResponse: r.customData._serverResponse,
      operationType: n
    };
  }
  static _fromErrorAndOperation(e, r, n, i) {
    return new Sr(e, r, n, i);
  }
}
function ds(t, e, r, n) {
  return (e === "reauthenticate" ? r._getReauthenticationResolver(t) : r._getIdTokenResponse(t)).catch((a) => {
    throw a.code === "auth/multi-factor-auth-required" ? Sr._fromErrorAndOperation(t, a, e, n) : a;
  });
}
async function Qc(t, e, r = !1) {
  const n = await Bt(t, e._linkToIdToken(t.auth, await t.getIdToken()), r);
  return wt._forOperation(t, "link", n);
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
async function Kc(t, e, r = !1) {
  const { auth: n } = t, i = "reauthenticate";
  try {
    const a = await Bt(t, ds(n, i, e, t), r);
    q(
      a.idToken,
      n,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const s = Bn(a.idToken);
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
    ), wt._forOperation(t, i, a);
  } catch (a) {
    throw (a == null ? void 0 : a.code) === "auth/user-not-found" && ke(
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
async function Gc(t, e, r = !1) {
  const n = "signIn", i = await ds(t, n, e), a = await wt._fromIdTokenResponse(t, n, i);
  return r || await t._updateCurrentUser(a.user), a;
}
function Jc(t, e, r, n) {
  return et(t).onIdTokenChanged(e, r, n);
}
function Yc(t, e, r) {
  return et(t).beforeAuthStateChanged(e, r);
}
function Xc(t, e, r, n) {
  return et(t).onAuthStateChanged(e, r, n);
}
function fs(t) {
  return et(t).signOut();
}
const Tr = "__sak";
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
class hs {
  constructor(e, r) {
    this.storageRetriever = e, this.type = r;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(Tr, "1"), this.storage.removeItem(Tr), Promise.resolve(!0)) : Promise.resolve(!1);
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
function Zc() {
  const t = fe();
  return $n(t) || Lr(t);
}
const el = 1e3, tl = 10;
class ps extends hs {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, r) => this.onStorageEvent(e, r), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = Zc() && Nc(), this.fallbackToPolling = os(), this._shouldAllowMigration = !0;
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
    kc() && a !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, tl) : i();
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
    }, el);
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
ps.type = "LOCAL";
const rl = ps;
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
class vs extends hs {
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
vs.type = "SESSION";
const ms = vs;
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
function nl(t) {
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
class Ur {
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
    const n = new Ur(e);
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
    const u = Array.from(s).map(async (c) => c(r.origin, a)), o = await nl(u);
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
Ur.receivers = [];
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
function Hn(t = "", e = 10) {
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
class il {
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
      const c = Hn("", 20);
      i.port1.start();
      const d = setTimeout(() => {
        o(new Error(
          "unsupported_event"
          /* _MessageError.UNSUPPORTED_EVENT */
        ));
      }, n);
      s = {
        messageChannel: i,
        onMessage(h) {
          const v = h;
          if (v.data.eventId === c)
            switch (v.data.status) {
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
                clearTimeout(a), u(v.data.response);
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
function Ce() {
  return window;
}
function al(t) {
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
function gs() {
  return typeof Ce().WorkerGlobalScope < "u" && typeof Ce().importScripts == "function";
}
async function sl() {
  if (!(navigator != null && navigator.serviceWorker))
    return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function ol() {
  var t;
  return ((t = navigator == null ? void 0 : navigator.serviceWorker) === null || t === void 0 ? void 0 : t.controller) || null;
}
function ul() {
  return gs() ? self : null;
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
const ys = "firebaseLocalStorageDb", cl = 1, Rr = "firebaseLocalStorage", bs = "fbase_key";
class Zt {
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
function Fr(t, e) {
  return t.transaction([Rr], e ? "readwrite" : "readonly").objectStore(Rr);
}
function ll() {
  const t = indexedDB.deleteDatabase(ys);
  return new Zt(t).toPromise();
}
function _n() {
  const t = indexedDB.open(ys, cl);
  return new Promise((e, r) => {
    t.addEventListener("error", () => {
      r(t.error);
    }), t.addEventListener("upgradeneeded", () => {
      const n = t.result;
      try {
        n.createObjectStore(Rr, { keyPath: bs });
      } catch (i) {
        r(i);
      }
    }), t.addEventListener("success", async () => {
      const n = t.result;
      n.objectStoreNames.contains(Rr) ? e(n) : (n.close(), await ll(), e(await _n()));
    });
  });
}
async function qi(t, e, r) {
  const n = Fr(t, !0).put({
    [bs]: e,
    value: r
  });
  return new Zt(n).toPromise();
}
async function dl(t, e) {
  const r = Fr(t, !1).get(e), n = await new Zt(r).toPromise();
  return n === void 0 ? null : n.value;
}
function Vi(t, e) {
  const r = Fr(t, !0).delete(e);
  return new Zt(r).toPromise();
}
const fl = 800, hl = 3;
class _s {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await _n(), this.db);
  }
  async _withRetries(e) {
    let r = 0;
    for (; ; )
      try {
        const n = await this._openDb();
        return await e(n);
      } catch (n) {
        if (r++ > hl)
          throw n;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return gs() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = Ur._getInstance(ul()), this.receiver._subscribe("keyChanged", async (e, r) => ({
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
    if (this.activeServiceWorker = await sl(), !this.activeServiceWorker)
      return;
    this.sender = new il(this.activeServiceWorker);
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
    if (!(!this.sender || !this.activeServiceWorker || ol() !== this.activeServiceWorker))
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
      const e = await _n();
      return await qi(e, Tr, "1"), await Vi(e, Tr), !0;
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
    return this._withPendingWrite(async () => (await this._withRetries((n) => qi(n, e, r)), this.localCache[e] = r, this.notifyServiceWorker(e)));
  }
  async _get(e) {
    const r = await this._withRetries((n) => dl(n, e));
    return this.localCache[e] = r, r;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((r) => Vi(r, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const a = Fr(i, !1).getAll();
      return new Zt(a).toPromise();
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
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), fl);
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
_s.type = "LOCAL";
const pl = _s;
new Jt(3e4, 6e4);
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
function Is(t, e) {
  return e ? qe(e) : (q(
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
class zn extends ls {
  constructor(e) {
    super(
      "custom",
      "custom"
      /* ProviderId.CUSTOM */
    ), this.params = e;
  }
  _getIdTokenResponse(e) {
    return _t(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, r) {
    return _t(e, this._buildIdpRequest(r));
  }
  _getReauthenticationResolver(e) {
    return _t(e, this._buildIdpRequest());
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
function vl(t) {
  return Gc(t.auth, new zn(t), t.bypassAuthState);
}
function ml(t) {
  const { auth: e, user: r } = t;
  return q(
    r,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Kc(r, new zn(t), t.bypassAuthState);
}
async function gl(t) {
  const { auth: e, user: r } = t;
  return q(
    r,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Qc(r, new zn(t), t.bypassAuthState);
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
class ws {
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
        return vl;
      case "linkViaPopup":
      case "linkViaRedirect":
        return gl;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return ml;
      default:
        ke(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    Ve(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    Ve(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
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
const yl = new Jt(2e3, 1e4);
class gt extends ws {
  constructor(e, r, n, i, a) {
    super(e, r, i, a), this.provider = n, this.authWindow = null, this.pollId = null, gt.currentPopupAction && gt.currentPopupAction.cancel(), gt.currentPopupAction = this;
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
    Ve(this.filter.length === 1, "Popup operations only handle one event");
    const e = Hn();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      e
    ), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((r) => {
      this.reject(r);
    }), this.resolver._isIframeWebStorageSupported(this.auth, (r) => {
      r || this.reject(Pe(
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
    this.reject(Pe(
      this.auth,
      "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, gt.currentPopupAction = null;
  }
  pollUserCancellation() {
    const e = () => {
      var r, n;
      if (!((n = (r = this.authWindow) === null || r === void 0 ? void 0 : r.window) === null || n === void 0) && n.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(Pe(
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
      this.pollId = window.setTimeout(e, yl.get());
    };
    e();
  }
}
gt.currentPopupAction = null;
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
const bl = "pendingRedirect", hr = /* @__PURE__ */ new Map();
class _l extends ws {
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
    let e = hr.get(this.auth._key());
    if (!e) {
      try {
        const n = await Il(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(n);
      } catch (r) {
        e = () => Promise.reject(r);
      }
      hr.set(this.auth._key(), e);
    }
    return this.bypassAuthState || hr.set(this.auth._key(), () => Promise.resolve(null)), e();
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
async function Il(t, e) {
  const r = Ss(e), n = Es(t);
  if (!await n._isAvailable())
    return !1;
  const i = await n._get(r) === "true";
  return await n._remove(r), i;
}
async function wl(t, e) {
  return Es(t)._set(Ss(e), "true");
}
function El(t, e) {
  hr.set(t._key(), e);
}
function Es(t) {
  return qe(t._redirectPersistence);
}
function Ss(t) {
  return fr(bl, t.config.apiKey, t.name);
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
function er(t, e, r) {
  return Sl(t, e, r);
}
async function Sl(t, e, r) {
  const n = Xt(t);
  fc(t, e, Wn), await n._initializationPromise;
  const i = Is(n, r);
  return await wl(i, n), i._openRedirect(
    n,
    e,
    "signInViaRedirect"
    /* AuthEventType.SIGN_IN_VIA_REDIRECT */
  );
}
async function Tl(t, e) {
  return await Xt(t)._initializationPromise, Ts(t, e, !1);
}
async function Ts(t, e, r = !1) {
  const n = Xt(t), i = Is(n, e), s = await new _l(n, i, r).execute();
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
const Rl = 10 * 60 * 1e3;
class Ol {
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
    }), this.hasHandledPotentialRedirect || !Pl(e) || (this.hasHandledPotentialRedirect = !0, r || (this.queuedRedirectEvent = e, r = !0)), r;
  }
  sendToConsumer(e, r) {
    var n;
    if (e.error && !Rs(e)) {
      const i = ((n = e.error.code) === null || n === void 0 ? void 0 : n.split("auth/")[1]) || "internal-error";
      r.onError(Pe(this.auth, i));
    } else
      r.onAuthEvent(e);
  }
  isEventForConsumer(e, r) {
    const n = r.eventId === null || !!e.eventId && e.eventId === r.eventId;
    return r.filter.includes(e.type) && n;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= Rl && this.cachedEventUids.clear(), this.cachedEventUids.has(Bi(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(Bi(e)), this.lastProcessedEventTime = Date.now();
  }
}
function Bi(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join("-");
}
function Rs({ type: t, error: e }) {
  return t === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event";
}
function Pl(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Rs(t);
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
async function Cl(t, e = {}) {
  return Yt(t, "GET", "/v1/projects", e);
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
const Al = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, kl = /^https?/;
async function Nl(t) {
  if (t.config.emulator)
    return;
  const { authorizedDomains: e } = await Cl(t);
  for (const r of e)
    try {
      if (Dl(r))
        return;
    } catch {
    }
  ke(
    t,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function Dl(t) {
  const e = bn(), { protocol: r, hostname: n } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const s = new URL(t);
    return s.hostname === "" && n === "" ? r === "chrome-extension:" && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : r === "chrome-extension:" && s.hostname === n;
  }
  if (!kl.test(r))
    return !1;
  if (Al.test(t))
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
const xl = new Jt(3e4, 6e4);
function $i() {
  const t = Ce().___jsl;
  if (t != null && t.H) {
    for (const e of Object.keys(t.H))
      if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = [...t.H[e].L], t.CP)
        for (let r = 0; r < t.CP.length; r++)
          t.CP[r] = null;
  }
}
function Ml(t) {
  return new Promise((e, r) => {
    var n, i, a;
    function s() {
      $i(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          $i(), r(Pe(
            t,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: xl.get()
      });
    }
    if (!((i = (n = Ce().gapi) === null || n === void 0 ? void 0 : n.iframes) === null || i === void 0) && i.Iframe)
      e(gapi.iframes.getContext());
    else if (!((a = Ce().gapi) === null || a === void 0) && a.load)
      s();
    else {
      const u = qc("iframefcb");
      return Ce()[u] = () => {
        gapi.load ? s() : r(Pe(
          t,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, jc(`https://apis.google.com/js/api.js?onload=${u}`).catch((o) => r(o));
    }
  }).catch((e) => {
    throw pr = null, e;
  });
}
let pr = null;
function Ll(t) {
  return pr = pr || Ml(t), pr;
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
const Ul = new Jt(5e3, 15e3), Fl = "__/auth/iframe", jl = "emulator/auth/iframe", ql = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, Vl = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function Bl(t) {
  const e = t.config;
  q(
    e.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const r = e.emulator ? Vn(e, jl) : `https://${t.config.authDomain}/${Fl}`, n = {
    apiKey: e.apiKey,
    appName: t.name,
    v: Gt
  }, i = Vl.get(t.config.apiHost);
  i && (n.eid = i);
  const a = t._getFrameworks();
  return a.length && (n.fw = a.join(",")), `${r}?${Kt(n).slice(1)}`;
}
async function $l(t) {
  const e = await Ll(t), r = Ce().gapi;
  return q(
    r,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: Bl(t),
    messageHandlersFilter: r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: ql,
    dontclear: !0
  }, (n) => new Promise(async (i, a) => {
    await n.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const s = Pe(
      t,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), u = Ce().setTimeout(() => {
      a(s);
    }, Ul.get());
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
const Wl = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, Hl = 500, zl = 600, Ql = "_blank", Kl = "http://localhost";
class Wi {
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
function Gl(t, e, r, n = Hl, i = zl) {
  const a = Math.max((window.screen.availHeight - i) / 2, 0).toString(), s = Math.max((window.screen.availWidth - n) / 2, 0).toString();
  let u = "";
  const o = Object.assign(Object.assign({}, Wl), {
    width: n.toString(),
    height: i.toString(),
    top: a,
    left: s
  }), c = fe().toLowerCase();
  r && (u = rs(c) ? Ql : r), ts(c) && (e = e || Kl, o.scrollbars = "yes");
  const d = Object.entries(o).reduce((v, [p, _]) => `${v}${p}=${_},`, "");
  if (Ac(c) && u !== "_self")
    return Jl(e || "", u), new Wi(null);
  const h = window.open(e || "", u, d);
  q(
    h,
    t,
    "popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
  );
  try {
    h.focus();
  } catch {
  }
  return new Wi(h);
}
function Jl(t, e) {
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
const Yl = "__/auth/handler", Xl = "emulator/auth/handler", Zl = encodeURIComponent("fac");
async function Hi(t, e, r, n, i, a) {
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
    v: Gt,
    eventId: i
  };
  if (e instanceof Wn) {
    e.setDefaultLanguage(t.languageCode), s.providerId = e.providerId || "", eu(e.getCustomParameters()) || (s.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [d, h] of Object.entries(a || {}))
      s[d] = h;
  }
  if (e instanceof Ot) {
    const d = e.getScopes().filter((h) => h !== "");
    d.length > 0 && (s.scopes = d.join(","));
  }
  t.tenantId && (s.tid = t.tenantId);
  const u = s;
  for (const d of Object.keys(u))
    u[d] === void 0 && delete u[d];
  const o = await t._getAppCheckToken(), c = o ? `#${Zl}=${encodeURIComponent(o)}` : "";
  return `${ed(t)}?${Kt(u).slice(1)}${c}`;
}
function ed({ config: t }) {
  return t.emulator ? Vn(t, Xl) : `https://${t.authDomain}/${Yl}`;
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
const tn = "webStorageSupport";
class td {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = ms, this._completeRedirectFn = Ts, this._overrideRedirectResult = El;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, r, n, i) {
    var a;
    Ve((a = this.eventManagers[e._key()]) === null || a === void 0 ? void 0 : a.manager, "_initialize() not called before _openPopup()");
    const s = await Hi(e, r, n, bn(), i);
    return Gl(e, s, Hn());
  }
  async _openRedirect(e, r, n, i) {
    await this._originValidation(e);
    const a = await Hi(e, r, n, bn(), i);
    return al(a), new Promise(() => {
    });
  }
  _initialize(e) {
    const r = e._key();
    if (this.eventManagers[r]) {
      const { manager: i, promise: a } = this.eventManagers[r];
      return i ? Promise.resolve(i) : (Ve(a, "If manager is not set, promise should be"), a);
    }
    const n = this.initAndGetManager(e);
    return this.eventManagers[r] = { promise: n }, n.catch(() => {
      delete this.eventManagers[r];
    }), n;
  }
  async initAndGetManager(e) {
    const r = await $l(e), n = new Ol(e);
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
    this.iframes[e._key()].send(tn, { type: tn }, (i) => {
      var a;
      const s = (a = i == null ? void 0 : i[0]) === null || a === void 0 ? void 0 : a[tn];
      s !== void 0 && r(!!s), ke(
        e,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const r = e._key();
    return this.originValidationPromises[r] || (this.originValidationPromises[r] = Nl(e)), this.originValidationPromises[r];
  }
  get _shouldInitProactively() {
    return os() || $n() || Lr();
  }
}
const rd = td;
var zi = "@firebase/auth", Qi = "1.3.0";
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
class nd {
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
function id(t) {
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
function ad(t) {
  qt(new It(
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
        sdkClientVersion: us(t)
      }, c = new Uc(n, i, a, o);
      return Bc(c, r), c;
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
  })), qt(new It(
    "auth-internal",
    (e) => {
      const r = Xt(e.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((n) => new nd(n))(r);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), yt(zi, Qi, id(t)), yt(zi, Qi, "esm2017");
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
const sd = 5 * 60, od = Fa("authIdTokenMaxAge") || sd;
let Ki = null;
const ud = (t) => async (e) => {
  const r = e && await e.getIdTokenResult(), n = r && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(r.issuedAtTime)) / 1e3;
  if (n && n > od)
    return;
  const i = r == null ? void 0 : r.token;
  Ki !== i && (Ki = i, await fetch(t, {
    method: i ? "POST" : "DELETE",
    headers: i ? {
      Authorization: `Bearer ${i}`
    } : {}
  }));
};
function cd(t = ec()) {
  const e = Ba(t, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const r = Vc(t, {
    popupRedirectResolver: rd,
    persistence: [
      pl,
      rl,
      ms
    ]
  }), n = Fa("authTokenSyncURL");
  if (n) {
    const a = ud(n);
    Yc(r, a, () => a(r.currentUser)), Jc(r, (s) => a(s));
  }
  const i = $o("auth");
  return i && $c(r, `http://${i}`), r;
}
ad(
  "Browser"
  /* ClientPlatform.BROWSER */
);
var ld = "firebase", dd = "10.4.0";
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
yt(ld, dd, "app");
const Os = {
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
let Z = { ...Os };
const zh = (t) => {
  Z = { ...Os, ...t };
}, fd = () => Object.keys(Z.firebaseConfig).length !== 0, He = () => {
  const t = $a(Z.firebaseConfig);
  return cd(t);
}, Ps = new Le();
Ps.setCustomParameters({ prompt: "select_account" });
const Cs = new Me();
Cs.addScope("public_profile");
const hd = new Fe(), pd = new Ue(), vd = new Ft("microsoft.com").setCustomParameters({
  // Force re-consent.
  prompt: "consent",
  // Target specific email with login hint.
  login_hint: "user@firstadd.onmicrosoft.com",
  tenant: "1bd1e0fb-f970-45f0-a49d-e80107b0e6f3"
});
function ae(t) {
  for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  if (process.env.NODE_ENV !== "production") {
    var i = Td[t], a = i ? typeof i == "function" ? i.apply(null, r) : i : "unknown error nr: " + t;
    throw Error("[Immer] " + a);
  }
  throw Error("[Immer] minified error nr: " + t + (r.length ? " " + r.map(function(s) {
    return "'" + s + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function $e(t) {
  return !!t && !!t[ge];
}
function We(t) {
  var e;
  return !!t && (function(r) {
    if (!r || typeof r != "object")
      return !1;
    var n = Object.getPrototypeOf(r);
    if (n === null)
      return !0;
    var i = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
    return i === Object || typeof i == "function" && Function.toString.call(i) === Rd;
  }(t) || Array.isArray(t) || !!t[jt] || !!(!((e = t.constructor) === null || e === void 0) && e[jt]) || jr(t) || qr(t));
}
function md(t) {
  return $e(t) || ae(23, t), t[ge].t;
}
function Et(t, e, r) {
  r === void 0 && (r = !1), Xe(t) === 0 ? (r ? Object.keys : Xn)(t).forEach(function(n) {
    r && typeof n == "symbol" || e(n, t[n], t);
  }) : t.forEach(function(n, i) {
    return e(i, n, t);
  });
}
function Xe(t) {
  var e = t[ge];
  return e ? e.i > 3 ? e.i - 4 : e.i : Array.isArray(t) ? 1 : jr(t) ? 2 : qr(t) ? 3 : 0;
}
function Wt(t, e) {
  return Xe(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function vr(t, e) {
  return Xe(t) === 2 ? t.get(e) : t[e];
}
function As(t, e, r) {
  var n = Xe(t);
  n === 2 ? t.set(e, r) : n === 3 ? t.add(r) : t[e] = r;
}
function gd(t, e) {
  return t === e ? t !== 0 || 1 / t == 1 / e : t != t && e != e;
}
function jr(t) {
  return Ed && t instanceof Map;
}
function qr(t) {
  return Sd && t instanceof Set;
}
function st(t) {
  return t.o || t.t;
}
function Qn(t) {
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  var e = Od(t);
  delete e[ge];
  for (var r = Xn(e), n = 0; n < r.length; n++) {
    var i = r[n], a = e[i];
    a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (e[i] = { configurable: !0, writable: !0, enumerable: a.enumerable, value: t[i] });
  }
  return Object.create(Object.getPrototypeOf(t), e);
}
function Kn(t, e) {
  return e === void 0 && (e = !1), Gn(t) || $e(t) || !We(t) || (Xe(t) > 1 && (t.set = t.add = t.clear = t.delete = yd), Object.freeze(t), e && Et(t, function(r, n) {
    return Kn(n, !0);
  }, !0)), t;
}
function yd() {
  ae(2);
}
function Gn(t) {
  return t == null || typeof t != "object" || Object.isFrozen(t);
}
function Ae(t) {
  var e = Sn[t];
  return e || ae(18, t), e;
}
function bd(t, e) {
  Sn[t] || (Sn[t] = e);
}
function Gi() {
  return process.env.NODE_ENV === "production" || St || ae(0), St;
}
function rn(t, e) {
  e && (Ae("Patches"), t.u = [], t.s = [], t.v = e);
}
function Or(t) {
  In(t), t.p.forEach(_d), t.p = null;
}
function In(t) {
  t === St && (St = t.l);
}
function Ji(t) {
  return St = { p: [], l: St, h: t, m: !0, _: 0 };
}
function _d(t) {
  var e = t[ge];
  e.i === 0 || e.i === 1 ? e.j() : e.g = !0;
}
function nn(t, e) {
  e._ = e.p.length;
  var r = e.p[0], n = t !== void 0 && t !== r;
  return e.h.O || Ae("ES5").S(e, t, n), n ? (r[ge].P && (Or(e), ae(4)), We(t) && (t = Pr(e, t), e.l || Cr(e, t)), e.u && Ae("Patches").M(r[ge].t, t, e.u, e.s)) : t = Pr(e, r, []), Or(e), e.u && e.v(e.u, e.s), t !== Yn ? t : void 0;
}
function Pr(t, e, r) {
  if (Gn(e))
    return e;
  var n = e[ge];
  if (!n)
    return Et(e, function(u, o) {
      return Yi(t, n, e, u, o, r);
    }, !0), e;
  if (n.A !== t)
    return e;
  if (!n.P)
    return Cr(t, n.t, !0), n.t;
  if (!n.I) {
    n.I = !0, n.A._--;
    var i = n.i === 4 || n.i === 5 ? n.o = Qn(n.k) : n.o, a = i, s = !1;
    n.i === 3 && (a = new Set(i), i.clear(), s = !0), Et(a, function(u, o) {
      return Yi(t, n, i, u, o, r, s);
    }), Cr(t, i, !1), r && t.u && Ae("Patches").N(n, r, t.u, t.s);
  }
  return n.o;
}
function Yi(t, e, r, n, i, a, s) {
  if (process.env.NODE_ENV !== "production" && i === r && ae(5), $e(i)) {
    var u = Pr(t, i, a && e && e.i !== 3 && !Wt(e.R, n) ? a.concat(n) : void 0);
    if (As(r, n, u), !$e(u))
      return;
    t.m = !1;
  } else
    s && r.add(i);
  if (We(i) && !Gn(i)) {
    if (!t.h.D && t._ < 1)
      return;
    Pr(t, i), e && e.A.l || Cr(t, i);
  }
}
function Cr(t, e, r) {
  r === void 0 && (r = !1), !t.l && t.h.D && t.m && Kn(e, r);
}
function an(t, e) {
  var r = t[ge];
  return (r ? st(r) : t)[e];
}
function Xi(t, e) {
  if (e in t)
    for (var r = Object.getPrototypeOf(t); r; ) {
      var n = Object.getOwnPropertyDescriptor(r, e);
      if (n)
        return n;
      r = Object.getPrototypeOf(r);
    }
}
function wn(t) {
  t.P || (t.P = !0, t.l && wn(t.l));
}
function sn(t) {
  t.o || (t.o = Qn(t.t));
}
function En(t, e, r) {
  var n = jr(e) ? Ae("MapSet").F(e, r) : qr(e) ? Ae("MapSet").T(e, r) : t.O ? function(i, a) {
    var s = Array.isArray(i), u = { i: s ? 1 : 0, A: a ? a.A : Gi(), P: !1, I: !1, R: {}, l: a, t: i, k: null, o: null, j: null, C: !1 }, o = u, c = Tn;
    s && (o = [u], c = Mt);
    var d = Proxy.revocable(o, c), h = d.revoke, v = d.proxy;
    return u.k = v, u.j = h, v;
  }(e, r) : Ae("ES5").J(e, r);
  return (r ? r.A : Gi()).p.push(n), n;
}
function Id(t) {
  return $e(t) || ae(22, t), function e(r) {
    if (!We(r))
      return r;
    var n, i = r[ge], a = Xe(r);
    if (i) {
      if (!i.P && (i.i < 4 || !Ae("ES5").K(i)))
        return i.t;
      i.I = !0, n = Zi(r, a), i.I = !1;
    } else
      n = Zi(r, a);
    return Et(n, function(s, u) {
      i && vr(i.t, s) === u || As(n, s, e(u));
    }), a === 3 ? new Set(n) : n;
  }(t);
}
function Zi(t, e) {
  switch (e) {
    case 2:
      return new Map(t);
    case 3:
      return Array.from(t);
  }
  return Qn(t);
}
function wd() {
  function t(n) {
    if (!We(n))
      return n;
    if (Array.isArray(n))
      return n.map(t);
    if (jr(n))
      return new Map(Array.from(n.entries()).map(function(s) {
        return [s[0], t(s[1])];
      }));
    if (qr(n))
      return new Set(Array.from(n).map(t));
    var i = Object.create(Object.getPrototypeOf(n));
    for (var a in n)
      i[a] = t(n[a]);
    return Wt(n, jt) && (i[jt] = n[jt]), i;
  }
  function e(n) {
    return $e(n) ? t(n) : n;
  }
  var r = "add";
  bd("Patches", { $: function(n, i) {
    return i.forEach(function(a) {
      for (var s = a.path, u = a.op, o = n, c = 0; c < s.length - 1; c++) {
        var d = Xe(o), h = s[c];
        typeof h != "string" && typeof h != "number" && (h = "" + h), d !== 0 && d !== 1 || h !== "__proto__" && h !== "constructor" || ae(24), typeof o == "function" && h === "prototype" && ae(24), typeof (o = vr(o, h)) != "object" && ae(15, s.join("/"));
      }
      var v = Xe(o), p = t(a.value), _ = s[s.length - 1];
      switch (u) {
        case "replace":
          switch (v) {
            case 2:
              return o.set(_, p);
            case 3:
              ae(16);
            default:
              return o[_] = p;
          }
        case r:
          switch (v) {
            case 1:
              return _ === "-" ? o.push(p) : o.splice(_, 0, p);
            case 2:
              return o.set(_, p);
            case 3:
              return o.add(p);
            default:
              return o[_] = p;
          }
        case "remove":
          switch (v) {
            case 1:
              return o.splice(_, 1);
            case 2:
              return o.delete(_);
            case 3:
              return o.delete(a.value);
            default:
              return delete o[_];
          }
        default:
          ae(17, u);
      }
    }), n;
  }, N: function(n, i, a, s) {
    switch (n.i) {
      case 0:
      case 4:
      case 2:
        return function(u, o, c, d) {
          var h = u.t, v = u.o;
          Et(u.R, function(p, _) {
            var w = vr(h, p), S = vr(v, p), O = _ ? Wt(h, p) ? "replace" : r : "remove";
            if (w !== S || O !== "replace") {
              var E = o.concat(p);
              c.push(O === "remove" ? { op: O, path: E } : { op: O, path: E, value: S }), d.push(O === r ? { op: "remove", path: E } : O === "remove" ? { op: r, path: E, value: e(w) } : { op: "replace", path: E, value: e(w) });
            }
          });
        }(n, i, a, s);
      case 5:
      case 1:
        return function(u, o, c, d) {
          var h = u.t, v = u.R, p = u.o;
          if (p.length < h.length) {
            var _ = [p, h];
            h = _[0], p = _[1];
            var w = [d, c];
            c = w[0], d = w[1];
          }
          for (var S = 0; S < h.length; S++)
            if (v[S] && p[S] !== h[S]) {
              var O = o.concat([S]);
              c.push({ op: "replace", path: O, value: e(p[S]) }), d.push({ op: "replace", path: O, value: e(h[S]) });
            }
          for (var E = h.length; E < p.length; E++) {
            var T = o.concat([E]);
            c.push({ op: r, path: T, value: e(p[E]) });
          }
          h.length < p.length && d.push({ op: "replace", path: o.concat(["length"]), value: h.length });
        }(n, i, a, s);
      case 3:
        return function(u, o, c, d) {
          var h = u.t, v = u.o, p = 0;
          h.forEach(function(_) {
            if (!v.has(_)) {
              var w = o.concat([p]);
              c.push({ op: "remove", path: w, value: _ }), d.unshift({ op: r, path: w, value: _ });
            }
            p++;
          }), p = 0, v.forEach(function(_) {
            if (!h.has(_)) {
              var w = o.concat([p]);
              c.push({ op: r, path: w, value: _ }), d.unshift({ op: "remove", path: w, value: _ });
            }
            p++;
          });
        }(n, i, a, s);
    }
  }, M: function(n, i, a, s) {
    a.push({ op: "replace", path: [], value: i === Yn ? void 0 : i }), s.push({ op: "replace", path: [], value: n });
  } });
}
var ea, St, Jn = typeof Symbol < "u" && typeof Symbol("x") == "symbol", Ed = typeof Map < "u", Sd = typeof Set < "u", ta = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", Yn = Jn ? Symbol.for("immer-nothing") : ((ea = {})["immer-nothing"] = !0, ea), jt = Jn ? Symbol.for("immer-draftable") : "__$immer_draftable", ge = Jn ? Symbol.for("immer-state") : "__$immer_state", Td = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(t) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, Rd = "" + Object.prototype.constructor, Xn = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Object.getOwnPropertyNames, Od = Object.getOwnPropertyDescriptors || function(t) {
  var e = {};
  return Xn(t).forEach(function(r) {
    e[r] = Object.getOwnPropertyDescriptor(t, r);
  }), e;
}, Sn = {}, Tn = { get: function(t, e) {
  if (e === ge)
    return t;
  var r = st(t);
  if (!Wt(r, e))
    return function(i, a, s) {
      var u, o = Xi(a, s);
      return o ? "value" in o ? o.value : (u = o.get) === null || u === void 0 ? void 0 : u.call(i.k) : void 0;
    }(t, r, e);
  var n = r[e];
  return t.I || !We(n) ? n : n === an(t.t, e) ? (sn(t), t.o[e] = En(t.A.h, n, t)) : n;
}, has: function(t, e) {
  return e in st(t);
}, ownKeys: function(t) {
  return Reflect.ownKeys(st(t));
}, set: function(t, e, r) {
  var n = Xi(st(t), e);
  if (n != null && n.set)
    return n.set.call(t.k, r), !0;
  if (!t.P) {
    var i = an(st(t), e), a = i == null ? void 0 : i[ge];
    if (a && a.t === r)
      return t.o[e] = r, t.R[e] = !1, !0;
    if (gd(r, i) && (r !== void 0 || Wt(t.t, e)))
      return !0;
    sn(t), wn(t);
  }
  return t.o[e] === r && (r !== void 0 || e in t.o) || Number.isNaN(r) && Number.isNaN(t.o[e]) || (t.o[e] = r, t.R[e] = !0), !0;
}, deleteProperty: function(t, e) {
  return an(t.t, e) !== void 0 || e in t.t ? (t.R[e] = !1, sn(t), wn(t)) : delete t.R[e], t.o && delete t.o[e], !0;
}, getOwnPropertyDescriptor: function(t, e) {
  var r = st(t), n = Reflect.getOwnPropertyDescriptor(r, e);
  return n && { writable: !0, configurable: t.i !== 1 || e !== "length", enumerable: n.enumerable, value: r[e] };
}, defineProperty: function() {
  ae(11);
}, getPrototypeOf: function(t) {
  return Object.getPrototypeOf(t.t);
}, setPrototypeOf: function() {
  ae(12);
} }, Mt = {};
Et(Tn, function(t, e) {
  Mt[t] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
}), Mt.deleteProperty = function(t, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && ae(13), Mt.set.call(this, t, e, void 0);
}, Mt.set = function(t, e, r) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && ae(14), Tn.set.call(this, t[0], e, r, t[0]);
};
var Pd = function() {
  function t(r) {
    var n = this;
    this.O = ta, this.D = !0, this.produce = function(i, a, s) {
      if (typeof i == "function" && typeof a != "function") {
        var u = a;
        a = i;
        var o = n;
        return function(w) {
          var S = this;
          w === void 0 && (w = u);
          for (var O = arguments.length, E = Array(O > 1 ? O - 1 : 0), T = 1; T < O; T++)
            E[T - 1] = arguments[T];
          return o.produce(w, function(m) {
            var b;
            return (b = a).call.apply(b, [S, m].concat(E));
          });
        };
      }
      var c;
      if (typeof a != "function" && ae(6), s !== void 0 && typeof s != "function" && ae(7), We(i)) {
        var d = Ji(n), h = En(n, i, void 0), v = !0;
        try {
          c = a(h), v = !1;
        } finally {
          v ? Or(d) : In(d);
        }
        return typeof Promise < "u" && c instanceof Promise ? c.then(function(w) {
          return rn(d, s), nn(w, d);
        }, function(w) {
          throw Or(d), w;
        }) : (rn(d, s), nn(c, d));
      }
      if (!i || typeof i != "object") {
        if ((c = a(i)) === void 0 && (c = i), c === Yn && (c = void 0), n.D && Kn(c, !0), s) {
          var p = [], _ = [];
          Ae("Patches").M(i, c, p, _), s(p, _);
        }
        return c;
      }
      ae(21, i);
    }, this.produceWithPatches = function(i, a) {
      if (typeof i == "function")
        return function(c) {
          for (var d = arguments.length, h = Array(d > 1 ? d - 1 : 0), v = 1; v < d; v++)
            h[v - 1] = arguments[v];
          return n.produceWithPatches(c, function(p) {
            return i.apply(void 0, [p].concat(h));
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
    We(r) || ae(8), $e(r) && (r = Id(r));
    var n = Ji(this), i = En(this, r, void 0);
    return i[ge].C = !0, In(n), i;
  }, e.finishDraft = function(r, n) {
    var i = r && r[ge];
    process.env.NODE_ENV !== "production" && (i && i.C || ae(9), i.I && ae(10));
    var a = i.A;
    return rn(a, n), nn(void 0, a);
  }, e.setAutoFreeze = function(r) {
    this.D = r;
  }, e.setUseProxies = function(r) {
    r && !ta && ae(20), this.O = r;
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
    return $e(r) ? s(r, n) : this.produce(r, function(u) {
      return s(u, n);
    });
  }, t;
}(), be = new Pd();
be.produce;
var ks = be.produceWithPatches.bind(be);
be.setAutoFreeze.bind(be);
be.setUseProxies.bind(be);
var ra = be.applyPatches.bind(be);
be.createDraft.bind(be);
be.finishDraft.bind(be);
var Ar = "NOT_FOUND";
function Cd(t) {
  var e;
  return {
    get: function(n) {
      return e && t(e.key, n) ? e.value : Ar;
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
function Ad(t, e) {
  var r = [];
  function n(u) {
    var o = r.findIndex(function(d) {
      return e(u, d.key);
    });
    if (o > -1) {
      var c = r[o];
      return o > 0 && (r.splice(o, 1), r.unshift(c)), c.value;
    }
    return Ar;
  }
  function i(u, o) {
    n(u) === Ar && (r.unshift({
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
var kd = function(e, r) {
  return e === r;
};
function Nd(t) {
  return function(r, n) {
    if (r === null || n === null || r.length !== n.length)
      return !1;
    for (var i = r.length, a = 0; a < i; a++)
      if (!t(r[a], n[a]))
        return !1;
    return !0;
  };
}
function na(t, e) {
  var r = typeof e == "object" ? e : {
    equalityCheck: e
  }, n = r.equalityCheck, i = n === void 0 ? kd : n, a = r.maxSize, s = a === void 0 ? 1 : a, u = r.resultEqualityCheck, o = Nd(i), c = s === 1 ? Cd(o) : Ad(s, o);
  function d() {
    var h = c.get(arguments);
    if (h === Ar) {
      if (h = t.apply(null, arguments), u) {
        var v = c.getEntries(), p = v.find(function(_) {
          return u(_.value, h);
        });
        p && (h = p.value);
      }
      c.put(arguments, h);
    }
    return h;
  }
  return d.clearCache = function() {
    return c.clear();
  }, d;
}
var kr = globalThis && globalThis.__generator || function(t, e) {
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
}, Nr = globalThis && globalThis.__spreadArray || function(t, e) {
  for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
    t[i] = e[r];
  return t;
}, Dd = Object.defineProperty, xd = Object.defineProperties, Md = Object.getOwnPropertyDescriptors, Dr = Object.getOwnPropertySymbols, Ns = Object.prototype.hasOwnProperty, Ds = Object.prototype.propertyIsEnumerable, ia = function(t, e, r) {
  return e in t ? Dd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
}, se = function(t, e) {
  for (var r in e || (e = {}))
    Ns.call(e, r) && ia(t, r, e[r]);
  if (Dr)
    for (var n = 0, i = Dr(e); n < i.length; n++) {
      var r = i[n];
      Ds.call(e, r) && ia(t, r, e[r]);
    }
  return t;
}, Oe = function(t, e) {
  return xd(t, Md(e));
}, aa = function(t, e) {
  var r = {};
  for (var n in t)
    Ns.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && Dr)
    for (var i = 0, a = Dr(t); i < a.length; i++) {
      var n = a[i];
      e.indexOf(n) < 0 && Ds.call(t, n) && (r[n] = t[n]);
    }
  return r;
}, xr = function(t, e, r) {
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
}, ie;
(function(t) {
  t.uninitialized = "uninitialized", t.pending = "pending", t.fulfilled = "fulfilled", t.rejected = "rejected";
})(ie || (ie = {}));
function Ld(t) {
  return {
    status: t,
    isUninitialized: t === ie.uninitialized,
    isLoading: t === ie.pending,
    isSuccess: t === ie.fulfilled,
    isError: t === ie.rejected
  };
}
function Ud(t) {
  return new RegExp("(^|:)//").test(t);
}
var Fd = function(t) {
  return t.replace(/\/$/, "");
}, jd = function(t) {
  return t.replace(/^\//, "");
};
function qd(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  if (Ud(e))
    return e;
  var r = t.endsWith("/") || !e.startsWith("?") ? "/" : "";
  return t = Fd(t), e = jd(e), "" + t + r + e;
}
var sa = function(t) {
  return [].concat.apply([], t);
};
function Vd() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function Bd() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var oa = lt;
function xs(t, e) {
  if (t === e || !(oa(t) && oa(e) || Array.isArray(t) && Array.isArray(e)))
    return e;
  for (var r = Object.keys(e), n = Object.keys(t), i = r.length === n.length, a = Array.isArray(e) ? [] : {}, s = 0, u = r; s < u.length; s++) {
    var o = u[s];
    a[o] = xs(t[o], e[o]), i && (i = t[o] === a[o]);
  }
  return i ? t : a;
}
var ua = function() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return fetch.apply(void 0, t);
}, $d = function(t) {
  return t.status >= 200 && t.status <= 299;
}, Wd = function(t) {
  return /ion\/(vnd\.api\+)?json/.test(t.get("content-type") || "");
};
function ca(t) {
  if (!lt(t))
    return t;
  for (var e = se({}, t), r = 0, n = Object.entries(e); r < n.length; r++) {
    var i = n[r], a = i[0], s = i[1];
    s === void 0 && delete e[a];
  }
  return e;
}
function Hd(t) {
  var e = this;
  t === void 0 && (t = {});
  var r = t, n = r.baseUrl, i = r.prepareHeaders, a = i === void 0 ? function(T) {
    return T;
  } : i, s = r.fetchFn, u = s === void 0 ? ua : s, o = r.paramsSerializer, c = r.isJsonContentType, d = c === void 0 ? Wd : c, h = r.jsonContentType, v = h === void 0 ? "application/json" : h, p = r.jsonReplacer, _ = r.timeout, w = r.responseHandler, S = r.validateStatus, O = aa(r, [
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
  return typeof fetch > "u" && u === ua && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), function(T, m) {
    return xr(e, null, function() {
      var b, f, g, y, R, I, P, A, C, N, x, F, L, U, z, $, W, G, B, J, H, Y, ne, pe, _e, Ie, ye, le, re, Re, rt, ze, nt, ht, Qe, rr;
      return kr(this, function(we) {
        switch (we.label) {
          case 0:
            return b = m.signal, f = m.getState, g = m.extra, y = m.endpoint, R = m.forced, I = m.type, A = typeof T == "string" ? { url: T } : T, C = A.url, N = A.headers, x = N === void 0 ? new Headers(O.headers) : N, F = A.params, L = F === void 0 ? void 0 : F, U = A.responseHandler, z = U === void 0 ? w ?? "json" : U, $ = A.validateStatus, W = $ === void 0 ? S ?? $d : $, G = A.timeout, B = G === void 0 ? _ : G, J = aa(A, [
              "url",
              "headers",
              "params",
              "responseHandler",
              "validateStatus",
              "timeout"
            ]), H = se(Oe(se({}, O), {
              signal: b
            }), J), x = new Headers(ca(x)), Y = H, [4, a(x, {
              getState: f,
              extra: g,
              endpoint: y,
              forced: R,
              type: I
            })];
          case 1:
            Y.headers = we.sent() || x, ne = function(ve) {
              return typeof ve == "object" && (lt(ve) || Array.isArray(ve) || typeof ve.toJSON == "function");
            }, !H.headers.has("content-type") && ne(H.body) && H.headers.set("content-type", v), ne(H.body) && d(H.headers) && (H.body = JSON.stringify(H.body, p)), L && (pe = ~C.indexOf("?") ? "&" : "?", _e = o ? o(L) : new URLSearchParams(ca(L)), C += pe + _e), C = qd(n, C), Ie = new Request(C, H), ye = new Request(C, H), P = { request: ye }, re = !1, Re = B && setTimeout(function() {
              re = !0, m.abort();
            }, B), we.label = 2;
          case 2:
            return we.trys.push([2, 4, 5, 6]), [4, u(Ie)];
          case 3:
            return le = we.sent(), [3, 6];
          case 4:
            return rt = we.sent(), [2, {
              error: {
                status: re ? "TIMEOUT_ERROR" : "FETCH_ERROR",
                error: String(rt)
              },
              meta: P
            }];
          case 5:
            return Re && clearTimeout(Re), [
              7
              /*endfinally*/
            ];
          case 6:
            ze = le.clone(), P.response = ze, ht = "", we.label = 7;
          case 7:
            return we.trys.push([7, 9, , 10]), [4, Promise.all([
              E(le, z).then(function(ve) {
                return nt = ve;
              }, function(ve) {
                return Qe = ve;
              }),
              ze.text().then(function(ve) {
                return ht = ve;
              }, function() {
              })
            ])];
          case 8:
            if (we.sent(), Qe)
              throw Qe;
            return [3, 10];
          case 9:
            return rr = we.sent(), [2, {
              error: {
                status: "PARSING_ERROR",
                originalStatus: le.status,
                data: ht,
                error: String(rr)
              },
              meta: P
            }];
          case 10:
            return [2, W(le, nt) ? {
              data: nt,
              meta: P
            } : {
              error: {
                status: le.status,
                data: nt
              },
              meta: P
            }];
        }
      });
    });
  };
  function E(T, m) {
    return xr(this, null, function() {
      var b;
      return kr(this, function(f) {
        switch (f.label) {
          case 0:
            return typeof m == "function" ? [2, m(T)] : (m === "content-type" && (m = d(T.headers) ? "json" : "text"), m !== "json" ? [3, 2] : [4, T.text()]);
          case 1:
            return b = f.sent(), [2, b.length ? JSON.parse(b) : null];
          case 2:
            return [2, T.text()];
        }
      });
    });
  }
}
var la = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = void 0), this.value = e, this.meta = r;
    }
    return t;
  }()
), Zn = /* @__PURE__ */ Tt("__rtkq/focused"), Ms = /* @__PURE__ */ Tt("__rtkq/unfocused"), ei = /* @__PURE__ */ Tt("__rtkq/online"), Ls = /* @__PURE__ */ Tt("__rtkq/offline"), Ne;
(function(t) {
  t.query = "query", t.mutation = "mutation";
})(Ne || (Ne = {}));
function Us(t) {
  return t.type === Ne.query;
}
function zd(t) {
  return t.type === Ne.mutation;
}
function ti(t, e, r, n, i, a) {
  return Qd(t) ? t(e, r, n, i).map(Rn).map(a) : Array.isArray(t) ? t.map(Rn).map(a) : [];
}
function Qd(t) {
  return typeof t == "function";
}
function Rn(t) {
  return typeof t == "string" ? { type: t } : t;
}
function on(t) {
  return t != null;
}
var Ht = Symbol("forceQueryFn"), On = function(t) {
  return typeof t[Ht] == "function";
};
function Kd(t) {
  var e = t.serializeQueryArgs, r = t.queryThunk, n = t.mutationThunk, i = t.api, a = t.context, s = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), o = i.internalActions, c = o.unsubscribeQueryResult, d = o.removeMutationResult, h = o.updateSubscriptionOptions;
  return {
    buildInitiateQuery: T,
    buildInitiateMutation: m,
    getRunningQueryThunk: _,
    getRunningMutationThunk: w,
    getRunningQueriesThunk: S,
    getRunningMutationsThunk: O,
    getRunningOperationPromises: p,
    removalWarning: v
  };
  function v() {
    throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`);
  }
  function p() {
    if (typeof process < "u" && process.env.NODE_ENV === "development")
      v();
    else {
      var b = function(f) {
        return Array.from(f.values()).flatMap(function(g) {
          return g ? Object.values(g) : [];
        });
      };
      return Nr(Nr([], b(s)), b(u)).filter(on);
    }
  }
  function _(b, f) {
    return function(g) {
      var y, R = a.endpointDefinitions[b], I = e({
        queryArgs: f,
        endpointDefinition: R,
        endpointName: b
      });
      return (y = s.get(g)) == null ? void 0 : y[I];
    };
  }
  function w(b, f) {
    return function(g) {
      var y;
      return (y = u.get(g)) == null ? void 0 : y[f];
    };
  }
  function S() {
    return function(b) {
      return Object.values(s.get(b) || {}).filter(on);
    };
  }
  function O() {
    return function(b) {
      return Object.values(u.get(b) || {}).filter(on);
    };
  }
  function E(b) {
    if (process.env.NODE_ENV !== "production") {
      if (E.triggered)
        return;
      var f = b(i.internalActions.internal_probeSubscription({
        queryCacheKey: "DOES_NOT_EXIST",
        requestId: "DUMMY_REQUEST_ID"
      }));
      if (E.triggered = !0, typeof f != "boolean")
        throw new Error('Warning: Middleware for RTK-Query API at reducerPath "' + i.reducerPath + `" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function T(b, f) {
    var g = function(y, R) {
      var I = R === void 0 ? {} : R, P = I.subscribe, A = P === void 0 ? !0 : P, C = I.forceRefetch, N = I.subscriptionOptions, x = Ht, F = I[x];
      return function(L, U) {
        var z, $, W = e({
          queryArgs: y,
          endpointDefinition: f,
          endpointName: b
        }), G = r((z = {
          type: "query",
          subscribe: A,
          forceRefetch: C,
          subscriptionOptions: N,
          endpointName: b,
          originalArgs: y,
          queryCacheKey: W
        }, z[Ht] = F, z)), B = i.endpoints[b].select(y), J = L(G), H = B(U());
        E(L);
        var Y = J.requestId, ne = J.abort, pe = H.requestId !== Y, _e = ($ = s.get(L)) == null ? void 0 : $[W], Ie = function() {
          return B(U());
        }, ye = Object.assign(F ? J.then(Ie) : pe && !_e ? Promise.resolve(H) : Promise.all([_e, J]).then(Ie), {
          arg: y,
          requestId: Y,
          subscriptionOptions: N,
          queryCacheKey: W,
          abort: ne,
          unwrap: function() {
            return xr(this, null, function() {
              var re;
              return kr(this, function(Re) {
                switch (Re.label) {
                  case 0:
                    return [4, ye];
                  case 1:
                    if (re = Re.sent(), re.isError)
                      throw re.error;
                    return [2, re.data];
                }
              });
            });
          },
          refetch: function() {
            return L(g(y, { subscribe: !1, forceRefetch: !0 }));
          },
          unsubscribe: function() {
            A && L(c({
              queryCacheKey: W,
              requestId: Y
            }));
          },
          updateSubscriptionOptions: function(re) {
            ye.subscriptionOptions = re, L(h({
              endpointName: b,
              requestId: Y,
              queryCacheKey: W,
              options: re
            }));
          }
        });
        if (!_e && !pe && !F) {
          var le = s.get(L) || {};
          le[W] = ye, s.set(L, le), ye.then(function() {
            delete le[W], Object.keys(le).length || s.delete(L);
          });
        }
        return ye;
      };
    };
    return g;
  }
  function m(b) {
    return function(f, g) {
      var y = g === void 0 ? {} : g, R = y.track, I = R === void 0 ? !0 : R, P = y.fixedCacheKey;
      return function(A, C) {
        var N = n({
          type: "mutation",
          endpointName: b,
          originalArgs: f,
          track: I,
          fixedCacheKey: P
        }), x = A(N);
        E(A);
        var F = x.requestId, L = x.abort, U = x.unwrap, z = x.unwrap().then(function(B) {
          return { data: B };
        }).catch(function(B) {
          return { error: B };
        }), $ = function() {
          A(d({ requestId: F, fixedCacheKey: P }));
        }, W = Object.assign(z, {
          arg: x.arg,
          requestId: F,
          abort: L,
          unwrap: U,
          unsubscribe: $,
          reset: $
        }), G = u.get(A) || {};
        return u.set(A, G), G[F] = W, W.then(function() {
          delete G[F], Object.keys(G).length || u.delete(A);
        }), P && (G[P] = W, W.then(function() {
          G[P] === W && (delete G[P], Object.keys(G).length || u.delete(A));
        })), W;
      };
    };
  }
}
function da(t) {
  return t;
}
function Gd(t) {
  var e = this, r = t.reducerPath, n = t.baseQuery, i = t.context.endpointDefinitions, a = t.serializeQueryArgs, s = t.api, u = t.assertTagType, o = function(m, b, f, g) {
    return function(y, R) {
      var I = i[m], P = a({
        queryArgs: b,
        endpointDefinition: I,
        endpointName: m
      });
      if (y(s.internalActions.queryResultPatched({ queryCacheKey: P, patches: f })), !!g) {
        var A = s.endpoints[m].select(b)(R()), C = ti(I.providesTags, A.data, void 0, b, {}, u);
        y(s.internalActions.updateProvidedBy({ queryCacheKey: P, providedTags: C }));
      }
    };
  }, c = function(m, b, f, g) {
    return g === void 0 && (g = !0), function(y, R) {
      var I, P, A = s.endpoints[m], C = A.select(b)(R()), N = {
        patches: [],
        inversePatches: [],
        undo: function() {
          return y(s.util.patchQueryData(m, b, N.inversePatches, g));
        }
      };
      if (C.status === ie.uninitialized)
        return N;
      var x;
      if ("data" in C)
        if (We(C.data)) {
          var F = ks(C.data, f), L = F[0], U = F[1], z = F[2];
          (I = N.patches).push.apply(I, U), (P = N.inversePatches).push.apply(P, z), x = L;
        } else
          x = f(C.data), N.patches.push({ op: "replace", path: [], value: x }), N.inversePatches.push({
            op: "replace",
            path: [],
            value: C.data
          });
      return y(s.util.patchQueryData(m, b, N.patches, g)), N;
    };
  }, d = function(m, b, f) {
    return function(g) {
      var y;
      return g(s.endpoints[m].initiate(b, (y = {
        subscribe: !1,
        forceRefetch: !0
      }, y[Ht] = function() {
        return {
          data: f
        };
      }, y)));
    };
  }, h = function(m, b) {
    return xr(e, [m, b], function(f, g) {
      var y, R, I, P, A, C, N, x, F, L, U, z, $, W, G, B, J, H, Y = g.signal, ne = g.abort, pe = g.rejectWithValue, _e = g.fulfillWithValue, Ie = g.dispatch, ye = g.getState, le = g.extra;
      return kr(this, function(re) {
        switch (re.label) {
          case 0:
            y = i[f.endpointName], re.label = 1;
          case 1:
            return re.trys.push([1, 8, , 13]), R = da, I = void 0, P = {
              signal: Y,
              abort: ne,
              dispatch: Ie,
              getState: ye,
              extra: le,
              endpoint: f.endpointName,
              type: f.type,
              forced: f.type === "query" ? v(f, ye()) : void 0
            }, A = f.type === "query" ? f[Ht] : void 0, A ? (I = A(), [3, 6]) : [3, 2];
          case 2:
            return y.query ? [4, n(y.query(f.originalArgs), P, y.extraOptions)] : [3, 4];
          case 3:
            return I = re.sent(), y.transformResponse && (R = y.transformResponse), [3, 6];
          case 4:
            return [4, y.queryFn(f.originalArgs, P, y.extraOptions, function(Re) {
              return n(Re, P, y.extraOptions);
            })];
          case 5:
            I = re.sent(), re.label = 6;
          case 6:
            if (typeof process < "u" && process.env.NODE_ENV === "development") {
              if (C = y.query ? "`baseQuery`" : "`queryFn`", N = void 0, !I)
                N = C + " did not return anything.";
              else if (typeof I != "object")
                N = C + " did not return an object.";
              else if (I.error && I.data)
                N = C + " returned an object containing both `error` and `result`.";
              else if (I.error === void 0 && I.data === void 0)
                N = C + " returned an object containing neither a valid `error` and `result`. At least one of them should not be `undefined`";
              else
                for (x = 0, F = Object.keys(I); x < F.length; x++)
                  if (L = F[x], L !== "error" && L !== "data" && L !== "meta") {
                    N = "The object returned by " + C + " has the unknown property " + L + ".";
                    break;
                  }
              N && console.error("Error encountered handling the endpoint " + f.endpointName + `.
              ` + N + "\n              It needs to return an object with either the shape `{ data: <value> }` or `{ error: <value> }` that may contain an optional `meta` property.\n              Object returned was:", I);
            }
            if (I.error)
              throw new la(I.error, I.meta);
            return U = _e, [4, R(I.data, I.meta, f.originalArgs)];
          case 7:
            return [2, U.apply(void 0, [re.sent(), (J = {
              fulfilledTimeStamp: Date.now(),
              baseQueryMeta: I.meta
            }, J[ir] = !0, J)])];
          case 8:
            if (z = re.sent(), $ = z, !($ instanceof la))
              return [3, 12];
            W = da, y.query && y.transformErrorResponse && (W = y.transformErrorResponse), re.label = 9;
          case 9:
            return re.trys.push([9, 11, , 12]), G = pe, [4, W($.value, $.meta, f.originalArgs)];
          case 10:
            return [2, G.apply(void 0, [re.sent(), (H = { baseQueryMeta: $.meta }, H[ir] = !0, H)])];
          case 11:
            return B = re.sent(), $ = B, [3, 12];
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
  function v(m, b) {
    var f, g, y, R, I = (g = (f = b[r]) == null ? void 0 : f.queries) == null ? void 0 : g[m.queryCacheKey], P = (y = b[r]) == null ? void 0 : y.config.refetchOnMountOrArgChange, A = I == null ? void 0 : I.fulfilledTimeStamp, C = (R = m.forceRefetch) != null ? R : m.subscribe && P;
    return C ? C === !0 || (Number(/* @__PURE__ */ new Date()) - Number(A)) / 1e3 >= C : !1;
  }
  var p = Ii(r + "/executeQuery", h, {
    getPendingMeta: function() {
      var m;
      return m = { startedTimeStamp: Date.now() }, m[ir] = !0, m;
    },
    condition: function(m, b) {
      var f = b.getState, g, y, R, I = f(), P = (y = (g = I[r]) == null ? void 0 : g.queries) == null ? void 0 : y[m.queryCacheKey], A = P == null ? void 0 : P.fulfilledTimeStamp, C = m.originalArgs, N = P == null ? void 0 : P.originalArgs, x = i[m.endpointName];
      return On(m) ? !0 : (P == null ? void 0 : P.status) === "pending" ? !1 : v(m, I) || Us(x) && ((R = x == null ? void 0 : x.forceRefetch) != null && R.call(x, {
        currentArg: C,
        previousArg: N,
        endpointState: P,
        state: I
      })) ? !0 : !A;
    },
    dispatchConditionRejection: !0
  }), _ = Ii(r + "/executeMutation", h, {
    getPendingMeta: function() {
      var m;
      return m = { startedTimeStamp: Date.now() }, m[ir] = !0, m;
    }
  }), w = function(m) {
    return "force" in m;
  }, S = function(m) {
    return "ifOlderThan" in m;
  }, O = function(m, b, f) {
    return function(g, y) {
      var R = w(f) && f.force, I = S(f) && f.ifOlderThan, P = function(x) {
        return x === void 0 && (x = !0), s.endpoints[m].initiate(b, { forceRefetch: x });
      }, A = s.endpoints[m].select(b)(y());
      if (R)
        g(P());
      else if (I) {
        var C = A == null ? void 0 : A.fulfilledTimeStamp;
        if (!C) {
          g(P());
          return;
        }
        var N = (Number(/* @__PURE__ */ new Date()) - Number(new Date(C))) / 1e3 >= I;
        N && g(P());
      } else
        g(P(!1));
    };
  };
  function E(m) {
    return function(b) {
      var f, g;
      return ((g = (f = b == null ? void 0 : b.meta) == null ? void 0 : f.arg) == null ? void 0 : g.endpointName) === m;
    };
  }
  function T(m, b) {
    return {
      matchPending: Kr(ka(m), E(b)),
      matchFulfilled: Kr(Rt(m), E(b)),
      matchRejected: Kr(Na(m), E(b))
    };
  }
  return {
    queryThunk: p,
    mutationThunk: _,
    prefetch: O,
    updateQueryData: c,
    upsertQueryData: d,
    patchQueryData: o,
    buildMatchThunkActions: T
  };
}
function Fs(t, e, r, n) {
  return ti(r[t.meta.arg.endpointName][e], Rt(t) ? t.payload : void 0, xn(t) ? t.payload : void 0, t.meta.arg.originalArgs, "baseQueryMeta" in t.meta ? t.meta.baseQueryMeta : void 0, n);
}
function sr(t, e, r) {
  var n = t[e];
  n && r(n);
}
function zt(t) {
  var e;
  return (e = "arg" in t ? t.arg.fixedCacheKey : t.fixedCacheKey) != null ? e : t.requestId;
}
function fa(t, e, r) {
  var n = t[zt(e)];
  n && r(n);
}
var xt = {};
function Jd(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.mutationThunk, i = t.context, a = i.endpointDefinitions, s = i.apiUid, u = i.extractRehydrationInfo, o = i.hasRehydrationInfo, c = t.assertTagType, d = t.config, h = Tt(e + "/resetApiState"), v = it({
    name: e + "/queries",
    initialState: xt,
    reducers: {
      removeQueryResult: {
        reducer: function(b, f) {
          var g = f.payload.queryCacheKey;
          delete b[g];
        },
        prepare: kt()
      },
      queryResultPatched: {
        reducer: function(b, f) {
          var g = f.payload, y = g.queryCacheKey, R = g.patches;
          sr(b, y, function(I) {
            I.data = ra(I.data, R.concat());
          });
        },
        prepare: kt()
      }
    },
    extraReducers: function(b) {
      b.addCase(r.pending, function(f, g) {
        var y = g.meta, R = g.meta.arg, I, P, A = On(R);
        (R.subscribe || A) && ((P = f[I = R.queryCacheKey]) != null || (f[I] = {
          status: ie.uninitialized,
          endpointName: R.endpointName
        })), sr(f, R.queryCacheKey, function(C) {
          C.status = ie.pending, C.requestId = A && C.requestId ? C.requestId : y.requestId, R.originalArgs !== void 0 && (C.originalArgs = R.originalArgs), C.startedTimeStamp = y.startedTimeStamp;
        });
      }).addCase(r.fulfilled, function(f, g) {
        var y = g.meta, R = g.payload;
        sr(f, y.arg.queryCacheKey, function(I) {
          var P;
          if (!(I.requestId !== y.requestId && !On(y.arg))) {
            var A = a[y.arg.endpointName].merge;
            if (I.status = ie.fulfilled, A)
              if (I.data !== void 0) {
                var C = y.fulfilledTimeStamp, N = y.arg, x = y.baseQueryMeta, F = y.requestId, L = Mn(I.data, function(U) {
                  return A(U, R, {
                    arg: N.originalArgs,
                    baseQueryMeta: x,
                    fulfilledTimeStamp: C,
                    requestId: F
                  });
                });
                I.data = L;
              } else
                I.data = R;
            else
              I.data = (P = a[y.arg.endpointName].structuralSharing) == null || P ? xs($e(I.data) ? md(I.data) : I.data, R) : R;
            delete I.error, I.fulfilledTimeStamp = y.fulfilledTimeStamp;
          }
        });
      }).addCase(r.rejected, function(f, g) {
        var y = g.meta, R = y.condition, I = y.arg, P = y.requestId, A = g.error, C = g.payload;
        sr(f, I.queryCacheKey, function(N) {
          if (!R) {
            if (N.requestId !== P)
              return;
            N.status = ie.rejected, N.error = C ?? A;
          }
        });
      }).addMatcher(o, function(f, g) {
        for (var y = u(g).queries, R = 0, I = Object.entries(y); R < I.length; R++) {
          var P = I[R], A = P[0], C = P[1];
          ((C == null ? void 0 : C.status) === ie.fulfilled || (C == null ? void 0 : C.status) === ie.rejected) && (f[A] = C);
        }
      });
    }
  }), p = it({
    name: e + "/mutations",
    initialState: xt,
    reducers: {
      removeMutationResult: {
        reducer: function(b, f) {
          var g = f.payload, y = zt(g);
          y in b && delete b[y];
        },
        prepare: kt()
      }
    },
    extraReducers: function(b) {
      b.addCase(n.pending, function(f, g) {
        var y = g.meta, R = g.meta, I = R.requestId, P = R.arg, A = R.startedTimeStamp;
        P.track && (f[zt(y)] = {
          requestId: I,
          status: ie.pending,
          endpointName: P.endpointName,
          startedTimeStamp: A
        });
      }).addCase(n.fulfilled, function(f, g) {
        var y = g.payload, R = g.meta;
        R.arg.track && fa(f, R, function(I) {
          I.requestId === R.requestId && (I.status = ie.fulfilled, I.data = y, I.fulfilledTimeStamp = R.fulfilledTimeStamp);
        });
      }).addCase(n.rejected, function(f, g) {
        var y = g.payload, R = g.error, I = g.meta;
        I.arg.track && fa(f, I, function(P) {
          P.requestId === I.requestId && (P.status = ie.rejected, P.error = y ?? R);
        });
      }).addMatcher(o, function(f, g) {
        for (var y = u(g).mutations, R = 0, I = Object.entries(y); R < I.length; R++) {
          var P = I[R], A = P[0], C = P[1];
          ((C == null ? void 0 : C.status) === ie.fulfilled || (C == null ? void 0 : C.status) === ie.rejected) && A !== (C == null ? void 0 : C.requestId) && (f[A] = C);
        }
      });
    }
  }), _ = it({
    name: e + "/invalidation",
    initialState: xt,
    reducers: {
      updateProvidedBy: {
        reducer: function(b, f) {
          for (var g, y, R, I, P = f.payload, A = P.queryCacheKey, C = P.providedTags, N = 0, x = Object.values(b); N < x.length; N++)
            for (var F = x[N], L = 0, U = Object.values(F); L < U.length; L++) {
              var z = U[L], $ = z.indexOf(A);
              $ !== -1 && z.splice($, 1);
            }
          for (var W = 0, G = C; W < G.length; W++) {
            var B = G[W], J = B.type, H = B.id, Y = (I = (y = (g = b[J]) != null ? g : b[J] = {})[R = H || "__internal_without_id"]) != null ? I : y[R] = [], ne = Y.includes(A);
            ne || Y.push(A);
          }
        },
        prepare: kt()
      }
    },
    extraReducers: function(b) {
      b.addCase(v.actions.removeQueryResult, function(f, g) {
        for (var y = g.payload.queryCacheKey, R = 0, I = Object.values(f); R < I.length; R++)
          for (var P = I[R], A = 0, C = Object.values(P); A < C.length; A++) {
            var N = C[A], x = N.indexOf(y);
            x !== -1 && N.splice(x, 1);
          }
      }).addMatcher(o, function(f, g) {
        for (var y, R, I, P, A = u(g).provided, C = 0, N = Object.entries(A); C < N.length; C++)
          for (var x = N[C], F = x[0], L = x[1], U = 0, z = Object.entries(L); U < z.length; U++)
            for (var $ = z[U], W = $[0], G = $[1], B = (P = (R = (y = f[F]) != null ? y : f[F] = {})[I = W || "__internal_without_id"]) != null ? P : R[I] = [], J = 0, H = G; J < H.length; J++) {
              var Y = H[J], ne = B.includes(Y);
              ne || B.push(Y);
            }
      }).addMatcher(Ca(Rt(r), xn(r)), function(f, g) {
        var y = Fs(g, "providesTags", a, c), R = g.meta.arg.queryCacheKey;
        _.caseReducers.updateProvidedBy(f, _.actions.updateProvidedBy({
          queryCacheKey: R,
          providedTags: y
        }));
      });
    }
  }), w = it({
    name: e + "/subscriptions",
    initialState: xt,
    reducers: {
      updateSubscriptionOptions: function(b, f) {
      },
      unsubscribeQueryResult: function(b, f) {
      },
      internal_probeSubscription: function(b, f) {
      }
    }
  }), S = it({
    name: e + "/internalSubscriptions",
    initialState: xt,
    reducers: {
      subscriptionsUpdated: {
        reducer: function(b, f) {
          return ra(b, f.payload);
        },
        prepare: kt()
      }
    }
  }), O = it({
    name: e + "/config",
    initialState: se({
      online: Vd(),
      focused: Bd(),
      middlewareRegistered: !1
    }, d),
    reducers: {
      middlewareRegistered: function(b, f) {
        var g = f.payload;
        b.middlewareRegistered = b.middlewareRegistered === "conflict" || s !== g ? "conflict" : !0;
      }
    },
    extraReducers: function(b) {
      b.addCase(ei, function(f) {
        f.online = !0;
      }).addCase(Ls, function(f) {
        f.online = !1;
      }).addCase(Zn, function(f) {
        f.focused = !0;
      }).addCase(Ms, function(f) {
        f.focused = !1;
      }).addMatcher(o, function(f) {
        return se({}, f);
      });
    }
  }), E = Aa({
    queries: v.reducer,
    mutations: p.reducer,
    provided: _.reducer,
    subscriptions: S.reducer,
    config: O.reducer
  }), T = function(b, f) {
    return E(h.match(f) ? void 0 : b, f);
  }, m = Oe(se(se(se(se(se(se({}, O.actions), v.actions), w.actions), S.actions), p.actions), _.actions), {
    unsubscribeMutationResult: p.actions.removeMutationResult,
    resetApiState: h
  });
  return { reducer: T, actions: m };
}
var ot = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), js = {
  status: ie.uninitialized
}, ha = /* @__PURE__ */ Mn(js, function() {
}), pa = /* @__PURE__ */ Mn(js, function() {
});
function Yd(t) {
  var e = t.serializeQueryArgs, r = t.reducerPath, n = function(d) {
    return ha;
  }, i = function(d) {
    return pa;
  };
  return { buildQuerySelector: u, buildMutationSelector: o, selectInvalidatedBy: c };
  function a(d) {
    return se(se({}, d), Ld(d.status));
  }
  function s(d) {
    var h = d[r];
    if (process.env.NODE_ENV !== "production" && !h) {
      if (s.triggered)
        return h;
      s.triggered = !0, console.error("Error: No data found at `state." + r + "`. Did you forget to add the reducer to the store?");
    }
    return h;
  }
  function u(d, h) {
    return function(v) {
      var p = e({
        queryArgs: v,
        endpointDefinition: h,
        endpointName: d
      }), _ = function(S) {
        var O, E, T;
        return (T = (E = (O = s(S)) == null ? void 0 : O.queries) == null ? void 0 : E[p]) != null ? T : ha;
      }, w = v === ot ? n : _;
      return Lt(w, a);
    };
  }
  function o() {
    return function(d) {
      var h, v;
      typeof d == "object" ? v = (h = zt(d)) != null ? h : ot : v = d;
      var p = function(w) {
        var S, O, E;
        return (E = (O = (S = s(w)) == null ? void 0 : S.mutations) == null ? void 0 : O[v]) != null ? E : pa;
      }, _ = v === ot ? i : p;
      return Lt(_, a);
    };
  }
  function c(d, h) {
    for (var v, p = d[r], _ = /* @__PURE__ */ new Set(), w = 0, S = h.map(Rn); w < S.length; w++) {
      var O = S[w], E = p.provided[O.type];
      if (E)
        for (var T = (v = O.id !== void 0 ? E[O.id] : sa(Object.values(E))) != null ? v : [], m = 0, b = T; m < b.length; m++) {
          var f = b[m];
          _.add(f);
        }
    }
    return sa(Array.from(_.values()).map(function(g) {
      var y = p.queries[g];
      return y ? [
        {
          queryCacheKey: g,
          endpointName: y.endpointName,
          originalArgs: y.originalArgs
        }
      ] : [];
    }));
  }
}
var or = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, va = function(t) {
  var e = t.endpointName, r = t.queryArgs, n = "", i = or == null ? void 0 : or.get(r);
  if (typeof i == "string")
    n = i;
  else {
    var a = JSON.stringify(r, function(s, u) {
      return lt(u) ? Object.keys(u).sort().reduce(function(o, c) {
        return o[c] = u[c], o;
      }, {}) : u;
    });
    lt(r) && (or == null || or.set(r, a)), n = a;
  }
  return e + "(" + n + ")";
};
function Xd() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(n) {
    var i = na(function(d) {
      var h, v;
      return (v = n.extractRehydrationInfo) == null ? void 0 : v.call(n, d, {
        reducerPath: (h = n.reducerPath) != null ? h : "api"
      });
    }), a = Oe(se({
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1
    }, n), {
      extractRehydrationInfo: i,
      serializeQueryArgs: function(d) {
        var h = va;
        if ("serializeQueryArgs" in d.endpointDefinition) {
          var v = d.endpointDefinition.serializeQueryArgs;
          h = function(p) {
            var _ = v(p);
            return typeof _ == "string" ? _ : va(Oe(se({}, p), {
              queryArgs: _
            }));
          };
        } else
          n.serializeQueryArgs && (h = n.serializeQueryArgs);
        return h(d);
      },
      tagTypes: Nr([], n.tagTypes || [])
    }), s = {
      endpointDefinitions: {},
      batch: function(d) {
        d();
      },
      apiUid: Oo(),
      extractRehydrationInfo: i,
      hasRehydrationInfo: na(function(d) {
        return i(d) != null;
      })
    }, u = {
      injectEndpoints: c,
      enhanceEndpoints: function(d) {
        var h = d.addTagTypes, v = d.endpoints;
        if (h)
          for (var p = 0, _ = h; p < _.length; p++) {
            var w = _[p];
            a.tagTypes.includes(w) || a.tagTypes.push(w);
          }
        if (v)
          for (var S = 0, O = Object.entries(v); S < O.length; S++) {
            var E = O[S], T = E[0], m = E[1];
            typeof m == "function" ? m(s.endpointDefinitions[T]) : Object.assign(s.endpointDefinitions[T] || {}, m);
          }
        return u;
      }
    }, o = t.map(function(d) {
      return d.init(u, a, s);
    });
    function c(d) {
      for (var h = d.endpoints({
        query: function(m) {
          return Oe(se({}, m), { type: Ne.query });
        },
        mutation: function(m) {
          return Oe(se({}, m), { type: Ne.mutation });
        }
      }), v = 0, p = Object.entries(h); v < p.length; v++) {
        var _ = p[v], w = _[0], S = _[1];
        if (!d.overrideExisting && w in s.endpointDefinitions) {
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error("called `injectEndpoints` to override already-existing endpointName " + w + " without specifying `overrideExisting: true`");
          continue;
        }
        s.endpointDefinitions[w] = S;
        for (var O = 0, E = o; O < E.length; O++) {
          var T = E[O];
          T.injectEndpoint(w, S);
        }
      }
      return u;
    }
    return u.injectEndpoints({ endpoints: n.endpoints });
  };
}
function Zd(t) {
  for (var e in t)
    return !1;
  return !0;
}
var ef = 2147483647 / 1e3 - 1, tf = function(t) {
  var e = t.reducerPath, r = t.api, n = t.context, i = t.internalState, a = r.internalActions, s = a.removeQueryResult, u = a.unsubscribeQueryResult;
  function o(v) {
    var p = i.currentSubscriptions[v];
    return !!p && !Zd(p);
  }
  var c = {}, d = function(v, p, _) {
    var w;
    if (u.match(v)) {
      var S = p.getState()[e], O = v.payload.queryCacheKey;
      h(O, (w = S.queries[O]) == null ? void 0 : w.endpointName, p, S.config);
    }
    if (r.util.resetApiState.match(v))
      for (var E = 0, T = Object.entries(c); E < T.length; E++) {
        var m = T[E], b = m[0], f = m[1];
        f && clearTimeout(f), delete c[b];
      }
    if (n.hasRehydrationInfo(v))
      for (var S = p.getState()[e], g = n.extractRehydrationInfo(v).queries, y = 0, R = Object.entries(g); y < R.length; y++) {
        var I = R[y], O = I[0], P = I[1];
        h(O, P == null ? void 0 : P.endpointName, p, S.config);
      }
  };
  function h(v, p, _, w) {
    var S, O = n.endpointDefinitions[p], E = (S = O == null ? void 0 : O.keepUnusedDataFor) != null ? S : w.keepUnusedDataFor;
    if (E !== 1 / 0) {
      var T = Math.max(0, Math.min(E, ef));
      if (!o(v)) {
        var m = c[v];
        m && clearTimeout(m), c[v] = setTimeout(function() {
          o(v) || _.dispatch(s({ queryCacheKey: v })), delete c[v];
        }, T * 1e3);
      }
    }
  }
  return d;
}, rf = function(t) {
  var e = t.reducerPath, r = t.context, n = t.context.endpointDefinitions, i = t.mutationThunk, a = t.api, s = t.assertTagType, u = t.refetchQuery, o = a.internalActions.removeQueryResult, c = Ca(Rt(i), xn(i)), d = function(v, p) {
    c(v) && h(Fs(v, "invalidatesTags", n, s), p), a.util.invalidateTags.match(v) && h(ti(v.payload, void 0, void 0, void 0, void 0, s), p);
  };
  function h(v, p) {
    var _ = p.getState(), w = _[e], S = a.util.selectInvalidatedBy(_, v);
    r.batch(function() {
      for (var O, E = Array.from(S.values()), T = 0, m = E; T < m.length; T++) {
        var b = m[T].queryCacheKey, f = w.queries[b], g = (O = w.subscriptions[b]) != null ? O : {};
        f && (Object.keys(g).length === 0 ? p.dispatch(o({
          queryCacheKey: b
        })) : f.status !== ie.uninitialized && p.dispatch(u(f, b)));
      }
    });
  }
  return d;
}, nf = function(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.api, i = t.refetchQuery, a = t.internalState, s = {}, u = function(p, _) {
    (n.internalActions.updateSubscriptionOptions.match(p) || n.internalActions.unsubscribeQueryResult.match(p)) && c(p.payload, _), (r.pending.match(p) || r.rejected.match(p) && p.meta.condition) && c(p.meta.arg, _), (r.fulfilled.match(p) || r.rejected.match(p) && !p.meta.condition) && o(p.meta.arg, _), n.util.resetApiState.match(p) && h();
  };
  function o(p, _) {
    var w = p.queryCacheKey, S = _.getState()[e], O = S.queries[w], E = a.currentSubscriptions[w];
    if (!(!O || O.status === ie.uninitialized)) {
      var T = v(E);
      if (Number.isFinite(T)) {
        var m = s[w];
        m != null && m.timeout && (clearTimeout(m.timeout), m.timeout = void 0);
        var b = Date.now() + T, f = s[w] = {
          nextPollTimestamp: b,
          pollingInterval: T,
          timeout: setTimeout(function() {
            f.timeout = void 0, _.dispatch(i(O, w));
          }, T)
        };
      }
    }
  }
  function c(p, _) {
    var w = p.queryCacheKey, S = _.getState()[e], O = S.queries[w], E = a.currentSubscriptions[w];
    if (!(!O || O.status === ie.uninitialized)) {
      var T = v(E);
      if (!Number.isFinite(T)) {
        d(w);
        return;
      }
      var m = s[w], b = Date.now() + T;
      (!m || b < m.nextPollTimestamp) && o({ queryCacheKey: w }, _);
    }
  }
  function d(p) {
    var _ = s[p];
    _ != null && _.timeout && clearTimeout(_.timeout), delete s[p];
  }
  function h() {
    for (var p = 0, _ = Object.keys(s); p < _.length; p++) {
      var w = _[p];
      d(w);
    }
  }
  function v(p) {
    p === void 0 && (p = {});
    var _ = Number.POSITIVE_INFINITY;
    for (var w in p)
      p[w].pollingInterval && (_ = Math.min(p[w].pollingInterval, _));
    return _;
  }
  return u;
}, af = function(t) {
  var e = t.reducerPath, r = t.context, n = t.api, i = t.refetchQuery, a = t.internalState, s = n.internalActions.removeQueryResult, u = function(c, d) {
    Zn.match(c) && o(d, "refetchOnFocus"), ei.match(c) && o(d, "refetchOnReconnect");
  };
  function o(c, d) {
    var h = c.getState()[e], v = h.queries, p = a.currentSubscriptions;
    r.batch(function() {
      for (var _ = 0, w = Object.keys(p); _ < w.length; _++) {
        var S = w[_], O = v[S], E = p[S];
        if (!(!E || !O)) {
          var T = Object.values(E).some(function(m) {
            return m[d] === !0;
          }) || Object.values(E).every(function(m) {
            return m[d] === void 0;
          }) && h.config[d];
          T && (Object.keys(E).length === 0 ? c.dispatch(s({
            queryCacheKey: S
          })) : O.status !== ie.uninitialized && c.dispatch(i(O, S)));
        }
      }
    });
  }
  return u;
}, ma = new Error("Promise never resolved before cacheEntryRemoved."), sf = function(t) {
  var e = t.api, r = t.reducerPath, n = t.context, i = t.queryThunk, a = t.mutationThunk;
  t.internalState;
  var s = wi(i), u = wi(a), o = Rt(i, a), c = {}, d = function(p, _, w) {
    var S = h(p);
    if (i.pending.match(p)) {
      var O = w[r].queries[S], E = _.getState()[r].queries[S];
      !O && E && v(p.meta.arg.endpointName, p.meta.arg.originalArgs, S, _, p.meta.requestId);
    } else if (a.pending.match(p)) {
      var E = _.getState()[r].mutations[S];
      E && v(p.meta.arg.endpointName, p.meta.arg.originalArgs, S, _, p.meta.requestId);
    } else if (o(p)) {
      var T = c[S];
      T != null && T.valueResolved && (T.valueResolved({
        data: p.payload,
        meta: p.meta.baseQueryMeta
      }), delete T.valueResolved);
    } else if (e.internalActions.removeQueryResult.match(p) || e.internalActions.removeMutationResult.match(p)) {
      var T = c[S];
      T && (delete c[S], T.cacheEntryRemoved());
    } else if (e.util.resetApiState.match(p))
      for (var m = 0, b = Object.entries(c); m < b.length; m++) {
        var f = b[m], g = f[0], T = f[1];
        delete c[g], T.cacheEntryRemoved();
      }
  };
  function h(p) {
    return s(p) ? p.meta.arg.queryCacheKey : u(p) ? p.meta.requestId : e.internalActions.removeQueryResult.match(p) ? p.payload.queryCacheKey : e.internalActions.removeMutationResult.match(p) ? zt(p.payload) : "";
  }
  function v(p, _, w, S, O) {
    var E = n.endpointDefinitions[p], T = E == null ? void 0 : E.onCacheEntryAdded;
    if (T) {
      var m = {}, b = new Promise(function(P) {
        m.cacheEntryRemoved = P;
      }), f = Promise.race([
        new Promise(function(P) {
          m.valueResolved = P;
        }),
        b.then(function() {
          throw ma;
        })
      ]);
      f.catch(function() {
      }), c[w] = m;
      var g = e.endpoints[p].select(E.type === Ne.query ? _ : w), y = S.dispatch(function(P, A, C) {
        return C;
      }), R = Oe(se({}, S), {
        getCacheEntry: function() {
          return g(S.getState());
        },
        requestId: O,
        extra: y,
        updateCachedData: E.type === Ne.query ? function(P) {
          return S.dispatch(e.util.updateQueryData(p, _, P));
        } : void 0,
        cacheDataLoaded: f,
        cacheEntryRemoved: b
      }), I = T(_, R);
      Promise.resolve(I).catch(function(P) {
        if (P !== ma)
          throw P;
      });
    }
  }
  return d;
}, of = function(t) {
  var e = t.api, r = t.context, n = t.queryThunk, i = t.mutationThunk, a = ka(n, i), s = Na(n, i), u = Rt(n, i), o = {}, c = function(d, h) {
    var v, p, _;
    if (a(d)) {
      var w = d.meta, S = w.requestId, O = w.arg, E = O.endpointName, T = O.originalArgs, m = r.endpointDefinitions[E], b = m == null ? void 0 : m.onQueryStarted;
      if (b) {
        var f = {}, g = new Promise(function(x, F) {
          f.resolve = x, f.reject = F;
        });
        g.catch(function() {
        }), o[S] = f;
        var y = e.endpoints[E].select(m.type === Ne.query ? T : S), R = h.dispatch(function(x, F, L) {
          return L;
        }), I = Oe(se({}, h), {
          getCacheEntry: function() {
            return y(h.getState());
          },
          requestId: S,
          extra: R,
          updateCachedData: m.type === Ne.query ? function(x) {
            return h.dispatch(e.util.updateQueryData(E, T, x));
          } : void 0,
          queryFulfilled: g
        });
        b(T, I);
      }
    } else if (u(d)) {
      var P = d.meta, S = P.requestId, A = P.baseQueryMeta;
      (v = o[S]) == null || v.resolve({
        data: d.payload,
        meta: A
      }), delete o[S];
    } else if (s(d)) {
      var C = d.meta, S = C.requestId, N = C.rejectedWithValue, A = C.baseQueryMeta;
      (_ = o[S]) == null || _.reject({
        error: (p = d.payload) != null ? p : d.error,
        isUnhandledError: !N,
        meta: A
      }), delete o[S];
    }
  };
  return c;
}, uf = function(t) {
  var e = t.api, r = t.context.apiUid, n = t.reducerPath;
  return function(i, a) {
    var s, u;
    e.util.resetApiState.match(i) && a.dispatch(e.internalActions.middlewareRegistered(r)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(i) && i.payload === r && ((u = (s = a.getState()[n]) == null ? void 0 : s.config) == null ? void 0 : u.middlewareRegistered) === "conflict" && console.warn('There is a mismatch between slice and middleware for the reducerPath "' + n + `".
You can only have one api per reducer path, this will lead to crashes in various situations!` + (n === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""));
  };
}, ga, cf = typeof queueMicrotask == "function" ? queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis) : function(t) {
  return (ga || (ga = Promise.resolve())).then(t).catch(function(e) {
    return setTimeout(function() {
      throw e;
    }, 0);
  });
}, lf = function(t) {
  var e = t.api, r = t.queryThunk, n = t.internalState, i = e.reducerPath + "/subscriptions", a = null, s = !1, u = e.internalActions, o = u.updateSubscriptionOptions, c = u.unsubscribeQueryResult, d = function(h, v) {
    var p, _, w, S, O, E, T, m, b;
    if (o.match(v)) {
      var f = v.payload, g = f.queryCacheKey, y = f.requestId, R = f.options;
      return (p = h == null ? void 0 : h[g]) != null && p[y] && (h[g][y] = R), !0;
    }
    if (c.match(v)) {
      var I = v.payload, g = I.queryCacheKey, y = I.requestId;
      return h[g] && delete h[g][y], !0;
    }
    if (e.internalActions.removeQueryResult.match(v))
      return delete h[v.payload.queryCacheKey], !0;
    if (r.pending.match(v)) {
      var P = v.meta, A = P.arg, y = P.requestId;
      if (A.subscribe) {
        var C = (w = h[_ = A.queryCacheKey]) != null ? w : h[_] = {};
        return C[y] = (O = (S = A.subscriptionOptions) != null ? S : C[y]) != null ? O : {}, !0;
      }
    }
    if (r.rejected.match(v)) {
      var N = v.meta, x = N.condition, A = N.arg, y = N.requestId;
      if (x && A.subscribe) {
        var C = (T = h[E = A.queryCacheKey]) != null ? T : h[E] = {};
        return C[y] = (b = (m = A.subscriptionOptions) != null ? m : C[y]) != null ? b : {}, !0;
      }
    }
    return !1;
  };
  return function(h, v) {
    var p, _;
    if (a || (a = JSON.parse(JSON.stringify(n.currentSubscriptions))), e.util.resetApiState.match(h))
      return a = n.currentSubscriptions = {}, [!0, !1];
    if (e.internalActions.internal_probeSubscription.match(h)) {
      var w = h.payload, S = w.queryCacheKey, O = w.requestId, E = !!((p = n.currentSubscriptions[S]) != null && p[O]);
      return [!1, E];
    }
    var T = d(n.currentSubscriptions, h);
    if (T) {
      s || (cf(function() {
        var g = JSON.parse(JSON.stringify(n.currentSubscriptions)), y = ks(a, function() {
          return g;
        }), R = y[1];
        v.next(e.internalActions.subscriptionsUpdated(R)), a = g, s = !1;
      }), s = !0);
      var m = !!((_ = h.type) != null && _.startsWith(i)), b = r.rejected.match(h) && h.meta.condition && !!h.meta.arg.subscribe, f = !m && !b;
      return [f, !1];
    }
    return [!0, !1];
  };
};
function df(t) {
  var e = t.reducerPath, r = t.queryThunk, n = t.api, i = t.context, a = i.apiUid, s = {
    invalidateTags: Tt(e + "/invalidateTags")
  }, u = function(h) {
    return !!h && typeof h.type == "string" && h.type.startsWith(e + "/");
  }, o = [
    uf,
    tf,
    rf,
    nf,
    sf,
    of
  ], c = function(h) {
    var v = !1, p = {
      currentSubscriptions: {}
    }, _ = Oe(se({}, t), {
      internalState: p,
      refetchQuery: d
    }), w = o.map(function(E) {
      return E(_);
    }), S = lf(_), O = af(_);
    return function(E) {
      return function(T) {
        v || (v = !0, h.dispatch(n.internalActions.middlewareRegistered(a)));
        var m = Oe(se({}, h), { next: E }), b = h.getState(), f = S(T, m, b), g = f[0], y = f[1], R;
        if (g ? R = E(T) : R = y, h.getState()[e] && (O(T, m, b), u(T) || i.hasRehydrationInfo(T)))
          for (var I = 0, P = w; I < P.length; I++) {
            var A = P[I];
            A(T, m, b);
          }
        return R;
      };
    };
  };
  return { middleware: c, actions: s };
  function d(h, v, p) {
    return p === void 0 && (p = {}), r(se({
      type: "query",
      endpointName: h.endpointName,
      originalArgs: h.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: v
    }, p));
  }
}
function Ge(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  Object.assign.apply(Object, Nr([t], e));
}
var ya = /* @__PURE__ */ Symbol(), ff = function() {
  return {
    name: ya,
    init: function(t, e, r) {
      var n = e.baseQuery, i = e.tagTypes, a = e.reducerPath, s = e.serializeQueryArgs, u = e.keepUnusedDataFor, o = e.refetchOnMountOrArgChange, c = e.refetchOnFocus, d = e.refetchOnReconnect;
      wd();
      var h = function(B) {
        return typeof process < "u" && process.env.NODE_ENV === "development" && (i.includes(B.type) || console.error("Tag type '" + B.type + "' was used, but not specified in `tagTypes`!")), B;
      };
      Object.assign(t, {
        reducerPath: a,
        endpoints: {},
        internalActions: {
          onOnline: ei,
          onOffline: Ls,
          onFocus: Zn,
          onFocusLost: Ms
        },
        util: {}
      });
      var v = Gd({
        baseQuery: n,
        reducerPath: a,
        context: r,
        api: t,
        serializeQueryArgs: s,
        assertTagType: h
      }), p = v.queryThunk, _ = v.mutationThunk, w = v.patchQueryData, S = v.updateQueryData, O = v.upsertQueryData, E = v.prefetch, T = v.buildMatchThunkActions, m = Jd({
        context: r,
        queryThunk: p,
        mutationThunk: _,
        reducerPath: a,
        assertTagType: h,
        config: {
          refetchOnFocus: c,
          refetchOnReconnect: d,
          refetchOnMountOrArgChange: o,
          keepUnusedDataFor: u,
          reducerPath: a
        }
      }), b = m.reducer, f = m.actions;
      Ge(t.util, {
        patchQueryData: w,
        updateQueryData: S,
        upsertQueryData: O,
        prefetch: E,
        resetApiState: f.resetApiState
      }), Ge(t.internalActions, f);
      var g = df({
        reducerPath: a,
        context: r,
        queryThunk: p,
        mutationThunk: _,
        api: t,
        assertTagType: h
      }), y = g.middleware, R = g.actions;
      Ge(t.util, R), Ge(t, { reducer: b, middleware: y });
      var I = Yd({
        serializeQueryArgs: s,
        reducerPath: a
      }), P = I.buildQuerySelector, A = I.buildMutationSelector, C = I.selectInvalidatedBy;
      Ge(t.util, { selectInvalidatedBy: C });
      var N = Kd({
        queryThunk: p,
        mutationThunk: _,
        api: t,
        serializeQueryArgs: s,
        context: r
      }), x = N.buildInitiateQuery, F = N.buildInitiateMutation, L = N.getRunningMutationThunk, U = N.getRunningMutationsThunk, z = N.getRunningQueriesThunk, $ = N.getRunningQueryThunk, W = N.getRunningOperationPromises, G = N.removalWarning;
      return Ge(t.util, {
        getRunningOperationPromises: W,
        getRunningOperationPromise: G,
        getRunningMutationThunk: L,
        getRunningMutationsThunk: U,
        getRunningQueryThunk: $,
        getRunningQueriesThunk: z
      }), {
        name: ya,
        injectEndpoint: function(B, J) {
          var H, Y, ne = t;
          (Y = (H = ne.endpoints)[B]) != null || (H[B] = {}), Us(J) ? Ge(ne.endpoints[B], {
            name: B,
            select: P(B, J),
            initiate: x(B, J)
          }, T(p, B)) : zd(J) && Ge(ne.endpoints[B], {
            name: B,
            select: A(),
            initiate: F(B)
          }, T(_, B));
        }
      };
    }
  };
}, hf = globalThis && globalThis.__spreadArray || function(t, e) {
  for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
    t[i] = e[r];
  return t;
}, pf = Object.defineProperty, vf = Object.defineProperties, mf = Object.getOwnPropertyDescriptors, ba = Object.getOwnPropertySymbols, gf = Object.prototype.hasOwnProperty, yf = Object.prototype.propertyIsEnumerable, _a = function(t, e, r) {
  return e in t ? pf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
}, xe = function(t, e) {
  for (var r in e || (e = {}))
    gf.call(e, r) && _a(t, r, e[r]);
  if (ba)
    for (var n = 0, i = ba(e); n < i.length; n++) {
      var r = i[n];
      yf.call(e, r) && _a(t, r, e[r]);
    }
  return t;
}, mr = function(t, e) {
  return vf(t, mf(e));
};
function Ia(t, e, r, n) {
  var i = Se(function() {
    return {
      queryArgs: t,
      serialized: typeof t == "object" ? e({ queryArgs: t, endpointDefinition: r, endpointName: n }) : t
    };
  }, [t, e, r, n]), a = Te(i);
  return de(function() {
    a.current.serialized !== i.serialized && (a.current = i);
  }, [i]), a.current.serialized === i.serialized ? a.current.queryArgs : t;
}
var un = Symbol();
function cn(t) {
  var e = Te(t);
  return de(function() {
    br(e.current, t) || (e.current = t);
  }, [t]), br(e.current, t) ? e.current : t;
}
var ur = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, bf = function(t) {
  var e = t.endpointName, r = t.queryArgs, n = "", i = ur == null ? void 0 : ur.get(r);
  if (typeof i == "string")
    n = i;
  else {
    var a = JSON.stringify(r, function(s, u) {
      return lt(u) ? Object.keys(u).sort().reduce(function(o, c) {
        return o[c] = u[c], o;
      }, {}) : u;
    });
    lt(r) && (ur == null || ur.set(r, a)), n = a;
  }
  return e + "(" + n + ")";
}, _f = typeof window < "u" && window.document && window.document.createElement ? To : de, If = function(t) {
  return t;
}, wf = function(t) {
  return t.isUninitialized ? mr(xe({}, t), {
    isUninitialized: !1,
    isFetching: !0,
    isLoading: t.data === void 0,
    status: ie.pending
  }) : t;
};
function Ef(t) {
  var e = t.api, r = t.moduleOptions, n = r.batch, i = r.useDispatch, a = r.useSelector, s = r.useStore, u = r.unstable__sideEffectsInRender, o = t.serializeQueryArgs, c = t.context, d = u ? function(w) {
    return w();
  } : de;
  return { buildQueryHooks: p, buildMutationHook: _, usePrefetch: v };
  function h(w, S, O) {
    if (S != null && S.endpointName && w.isUninitialized) {
      var E = S.endpointName, T = c.endpointDefinitions[E];
      o({
        queryArgs: S.originalArgs,
        endpointDefinition: T,
        endpointName: E
      }) === o({
        queryArgs: O,
        endpointDefinition: T,
        endpointName: E
      }) && (S = void 0);
    }
    var m = w.isSuccess ? w.data : S == null ? void 0 : S.data;
    m === void 0 && (m = w.data);
    var b = m !== void 0, f = w.isLoading, g = !b && f, y = w.isSuccess || f && b;
    return mr(xe({}, w), {
      data: m,
      currentData: w.data,
      isFetching: f,
      isLoading: g,
      isSuccess: y
    });
  }
  function v(w, S) {
    var O = i(), E = cn(S);
    return nr(function(T, m) {
      return O(e.util.prefetch(w, T, xe(xe({}, E), m)));
    }, [w, O, E]);
  }
  function p(w) {
    var S = function(T, m) {
      var b = m === void 0 ? {} : m, f = b.refetchOnReconnect, g = b.refetchOnFocus, y = b.refetchOnMountOrArgChange, R = b.skip, I = R === void 0 ? !1 : R, P = b.pollingInterval, A = P === void 0 ? 0 : P, C = e.endpoints[w].initiate, N = i(), x = Ia(I ? ot : T, bf, c.endpointDefinitions[w], w), F = cn({
        refetchOnReconnect: f,
        refetchOnFocus: g,
        pollingInterval: A
      }), L = Te(!1), U = Te(), z = U.current || {}, $ = z.queryCacheKey, W = z.requestId, G = !1;
      if ($ && W) {
        var B = N(e.internalActions.internal_probeSubscription({
          queryCacheKey: $,
          requestId: W
        }));
        if (process.env.NODE_ENV !== "production" && typeof B != "boolean")
          throw new Error('Warning: Middleware for RTK-Query API at reducerPath "' + e.reducerPath + `" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
        G = !!B;
      }
      var J = !G && L.current;
      return d(function() {
        L.current = G;
      }), d(function() {
        J && (U.current = void 0);
      }, [J]), d(function() {
        var H, Y = U.current;
        if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(J), x === ot) {
          Y == null || Y.unsubscribe(), U.current = void 0;
          return;
        }
        var ne = (H = U.current) == null ? void 0 : H.subscriptionOptions;
        if (!Y || Y.arg !== x) {
          Y == null || Y.unsubscribe();
          var pe = N(C(x, {
            subscriptionOptions: F,
            forceRefetch: y
          }));
          U.current = pe;
        } else
          F !== ne && Y.updateSubscriptionOptions(F);
      }, [
        N,
        C,
        y,
        x,
        F,
        J
      ]), de(function() {
        return function() {
          var H;
          (H = U.current) == null || H.unsubscribe(), U.current = void 0;
        };
      }, []), Se(function() {
        return {
          refetch: function() {
            var H;
            if (!U.current)
              throw new Error("Cannot refetch a query that has not been started yet.");
            return (H = U.current) == null ? void 0 : H.refetch();
          }
        };
      }, []);
    }, O = function(T) {
      var m = T === void 0 ? {} : T, b = m.refetchOnReconnect, f = m.refetchOnFocus, g = m.pollingInterval, y = g === void 0 ? 0 : g, R = e.endpoints[w].initiate, I = i(), P = _i(un), A = P[0], C = P[1], N = Te(), x = cn({
        refetchOnReconnect: b,
        refetchOnFocus: f,
        pollingInterval: y
      });
      d(function() {
        var U, z, $ = (U = N.current) == null ? void 0 : U.subscriptionOptions;
        x !== $ && ((z = N.current) == null || z.updateSubscriptionOptions(x));
      }, [x]);
      var F = Te(x);
      d(function() {
        F.current = x;
      }, [x]);
      var L = nr(function(U, z) {
        z === void 0 && (z = !1);
        var $;
        return n(function() {
          var W;
          (W = N.current) == null || W.unsubscribe(), N.current = $ = I(R(U, {
            subscriptionOptions: F.current,
            forceRefetch: !z
          })), C(U);
        }), $;
      }, [I, R]);
      return de(function() {
        return function() {
          var U;
          (U = N == null ? void 0 : N.current) == null || U.unsubscribe();
        };
      }, []), de(function() {
        A !== un && !N.current && L(A, !0);
      }, [A, L]), Se(function() {
        return [L, A];
      }, [L, A]);
    }, E = function(T, m) {
      var b = m === void 0 ? {} : m, f = b.skip, g = f === void 0 ? !1 : f, y = b.selectFromResult, R = e.endpoints[w].select, I = Ia(g ? ot : T, o, c.endpointDefinitions[w], w), P = Te(), A = Se(function() {
        return Lt([
          R(I),
          function(L, U) {
            return U;
          },
          function(L) {
            return I;
          }
        ], h);
      }, [R, I]), C = Se(function() {
        return y ? Lt([A], y) : A;
      }, [A, y]), N = a(function(L) {
        return C(L, P.current);
      }, br), x = s(), F = A(x.getState(), P.current);
      return _f(function() {
        P.current = F;
      }, [F]), N;
    };
    return {
      useQueryState: E,
      useQuerySubscription: S,
      useLazyQuerySubscription: O,
      useLazyQuery: function(T) {
        var m = O(T), b = m[0], f = m[1], g = E(f, mr(xe({}, T), {
          skip: f === un
        })), y = Se(function() {
          return { lastArg: f };
        }, [f]);
        return Se(function() {
          return [b, g, y];
        }, [b, g, y]);
      },
      useQuery: function(T, m) {
        var b = S(T, m), f = E(T, xe({
          selectFromResult: T === ot || m != null && m.skip ? void 0 : wf
        }, m)), g = f.data, y = f.status, R = f.isLoading, I = f.isSuccess, P = f.isError, A = f.error;
        return bi({ data: g, status: y, isLoading: R, isSuccess: I, isError: P, error: A }), Se(function() {
          return xe(xe({}, f), b);
        }, [f, b]);
      }
    };
  }
  function _(w) {
    return function(S) {
      var O = S === void 0 ? {} : S, E = O.selectFromResult, T = E === void 0 ? If : E, m = O.fixedCacheKey, b = e.endpoints[w], f = b.select, g = b.initiate, y = i(), R = _i(), I = R[0], P = R[1];
      de(function() {
        return function() {
          I != null && I.arg.fixedCacheKey || I == null || I.reset();
        };
      }, [I]);
      var A = nr(function(Y) {
        var ne = y(g(Y, { fixedCacheKey: m }));
        return P(ne), ne;
      }, [y, g, m]), C = (I || {}).requestId, N = Se(function() {
        return Lt([f({ fixedCacheKey: m, requestId: I == null ? void 0 : I.requestId })], T);
      }, [f, I, T, m]), x = a(N, br), F = m == null ? I == null ? void 0 : I.arg.originalArgs : void 0, L = nr(function() {
        n(function() {
          I && P(void 0), m && y(e.internalActions.removeMutationResult({
            requestId: C,
            fixedCacheKey: m
          }));
        });
      }, [y, m, I, C]), U = x.endpointName, z = x.data, $ = x.status, W = x.isLoading, G = x.isSuccess, B = x.isError, J = x.error;
      bi({
        endpointName: U,
        data: z,
        status: $,
        isLoading: W,
        isSuccess: G,
        isError: B,
        error: J
      });
      var H = Se(function() {
        return mr(xe({}, x), { originalArgs: F, reset: L });
      }, [x, F, L]);
      return Se(function() {
        return [A, H];
      }, [A, H]);
    };
  }
}
var Mr;
(function(t) {
  t.query = "query", t.mutation = "mutation";
})(Mr || (Mr = {}));
function Sf(t) {
  return t.type === Mr.query;
}
function Tf(t) {
  return t.type === Mr.mutation;
}
function ln(t) {
  return t.replace(t[0], t[0].toUpperCase());
}
function cr(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  Object.assign.apply(Object, hf([t], e));
}
var Rf = /* @__PURE__ */ Symbol(), Of = function(t) {
  var e = t === void 0 ? {} : t, r = e.batch, n = r === void 0 ? Co : r, i = e.useDispatch, a = i === void 0 ? Ao : i, s = e.useSelector, u = s === void 0 ? ko : s, o = e.useStore, c = o === void 0 ? No : o, d = e.unstable__sideEffectsInRender, h = d === void 0 ? !1 : d;
  return {
    name: Rf,
    init: function(v, p, _) {
      var w = p.serializeQueryArgs, S = v, O = Ef({
        api: v,
        moduleOptions: {
          batch: n,
          useDispatch: a,
          useSelector: u,
          useStore: c,
          unstable__sideEffectsInRender: h
        },
        serializeQueryArgs: w,
        context: _
      }), E = O.buildQueryHooks, T = O.buildMutationHook, m = O.usePrefetch;
      return cr(S, { usePrefetch: m }), cr(_, { batch: n }), {
        injectEndpoint: function(b, f) {
          if (Sf(f)) {
            var g = E(b), y = g.useQuery, R = g.useLazyQuery, I = g.useLazyQuerySubscription, P = g.useQueryState, A = g.useQuerySubscription;
            cr(S.endpoints[b], {
              useQuery: y,
              useLazyQuery: R,
              useLazyQuerySubscription: I,
              useQueryState: P,
              useQuerySubscription: A
            }), v["use" + ln(b) + "Query"] = y, v["useLazy" + ln(b) + "Query"] = R;
          } else if (Tf(f)) {
            var C = T(b);
            cr(S.endpoints[b], {
              useMutation: C
            }), v["use" + ln(b) + "Mutation"] = C;
          }
        }
      };
    }
  };
}, Pf = /* @__PURE__ */ Xd(ff(), Of());
const Cf = Hd({
  prepareHeaders: (t, { getState: e, endpoint: r }) => {
    const { isAuthenticated: n, refresh_token: i } = e().userReducer;
    return n && i && r === "updateLogin" && t.set(
      Z.refreshTokenHeader,
      Z.keywordRefreshTokenHeader ? `${Z.keywordRefreshTokenHeader} ${i}` : i
    ), t.set("Content-Type", "application/json");
  }
}), Af = async (t, e, r) => {
  const n = Z.endpoint, i = typeof t == "string" ? n : { ...t, url: n + t.url };
  return Cf(i, e, r);
}, ct = Pf({
  baseQuery: Af,
  endpoints: (t) => ({
    login: t.mutation({
      query({ email: e, encodedBody: r, password: n, username: i, token: a }) {
        if (a)
          return {
            url: "",
            method: "POST",
            headers: {
              Authorization: `${Z.keyword} ${a}`
            }
          };
        if (r)
          return {
            url: Z.urlLoginForBase64 ?? "",
            method: "POST",
            headers: {
              authorization: "Basic " + r
            }
          };
        let s = {};
        return n && (s = { ...s, password: n }), e && (s = { ...s, email: e }), i && (s = { ...s, username: i }), {
          url: Z.urlLoginForEmailOrUser ?? "",
          method: "POST",
          body: s
        };
      }
    }),
    signIn: t.mutation({
      query({ body: e, encodedBody: r }) {
        return r ? {
          url: Z.urlSignInForBase64 ?? "sign-in",
          method: "POST",
          body: e
        } : {
          url: Z.urlSignIn ?? "sign-in",
          method: "POST",
          body: e
        };
      }
    }),
    updateLogin: t.mutation({
      query() {
        return {
          url: Z.urlForRefreshToken ?? "login/update",
          method: "PUT"
        };
      }
    }),
    passwordReset: t.mutation({
      query(e) {
        return {
          url: Z.urlForPasswordReset ?? "reset-password",
          method: "POST",
          body: e
        };
      }
    })
  })
}), { useLoginMutation: kf, useUpdateLoginMutation: Nf, usePasswordResetMutation: Df, useSignInMutation: xf } = ct;
const Mf = ({ children: t, isLoading: e, scrollPosition: r, language: n, toastMessage: i }) => {
  const a = me(""), s = me({}), [u, { isSuccess: o, isLoading: c, error: d }] = Df(), { message: h } = Pa(Ln), v = Te(null), p = (_) => {
    _.preventDefault(), !o && u({
      email: a.value
    });
  };
  return de(() => {
    if (v.current) {
      const _ = v.current.offsetWidth;
      r.value ? (v.current.scrollTo(_, 0), v.current.scrollTo(_, 0)) : v.current.scrollTo(0, 0);
    }
  }, [r.value]), de(() => {
    d ? "data" in d ? s.value = {
      code: "auth/password-reset-error",
      message: d.data && (Object.values(d.data).find((_) => typeof _ == "string") ?? d.data)
    } : "status" in d && (s.value = {
      code: "auth/fetch-failed",
      message: "error" in d ? d.error : "Unexpected Error"
    }) : s.value.message && (s.value = {});
  }, [d]), de(() => {
    o && (i.value = n.forgotPasswordLabel);
  }, [o]), /* @__PURE__ */ D.jsxs("section", { ref: v, className: "modal-container mandatory-scroll-snapping", children: [
    /* @__PURE__ */ D.jsxs("section", { className: "modal-data", children: [
      /* @__PURE__ */ D.jsx("div", { className: "modal-message", children: e ? /* @__PURE__ */ D.jsx(wa, {}) : typeof h == "string" ? /* @__PURE__ */ D.jsx("h1", { children: h }) : h }),
      /* @__PURE__ */ D.jsx("div", { className: "modal-footer", children: t })
    ] }),
    /* @__PURE__ */ D.jsxs("section", { className: "password-recovery", children: [
      /* @__PURE__ */ D.jsx("span", { className: "go-back", onClick: () => r.value = !1, children: "<" }),
      /* @__PURE__ */ D.jsxs("form", { onSubmit: p, children: [
        /* @__PURE__ */ D.jsx("h1", { children: n.forgotPassword }),
        /* @__PURE__ */ D.jsxs("label", { children: [
          "Email:",
          /* @__PURE__ */ D.jsx("input", { required: !0, onChange: (_) => a.value = _.currentTarget.value, value: a.value, type: "email" })
        ] }),
        /* @__PURE__ */ D.jsx("button", { className: "is-btn blue", children: n.submit })
      ] }),
      /* @__PURE__ */ D.jsx(io, { error: s.value }),
      c && /* @__PURE__ */ D.jsx(wa, {})
    ] }),
    i.value && /* @__PURE__ */ D.jsxs("div", { className: "simple-toast show", children: [
      /* @__PURE__ */ D.jsx("button", { onClick: () => i.value = void 0, children: "X" }),
      /* @__PURE__ */ D.jsx("div", { className: "toast-message", children: i })
    ] })
  ] });
};
const wa = () => /* @__PURE__ */ D.jsx("div", { className: "loader-container", children: /* @__PURE__ */ D.jsxs("div", { className: "loader-box", children: [
  /* @__PURE__ */ D.jsx("div", { className: "load blue" }),
  /* @__PURE__ */ D.jsx("div", { className: "load red" }),
  /* @__PURE__ */ D.jsx("div", { className: "load orange" }),
  /* @__PURE__ */ D.jsx("div", { className: "load yellow" }),
  /* @__PURE__ */ D.jsx("div", { className: "load green" })
] }) });
const Lf = (t, e) => {
  var r;
  return ((r = t.find((n) => n.code === "*" ? !0 : n.code === e.code)) == null ? void 0 : r.message) ?? e.message;
}, qs = "IS_GOOGLE", Vs = "IS_FACEBOOK", Bs = "IS_TWITTER", $s = "IS_GITHUB", Ws = "IS_MICROSOFT", Uf = [
  {
    method: "google",
    constName: qs,
    name: "Google",
    className: "google-btn"
  },
  {
    method: "facebook",
    constName: Vs,
    name: "Facebook",
    className: "facebook-btn"
    //icon: <FacebookIcon />
  },
  {
    method: "twitter",
    constName: Bs,
    name: "Twitter",
    className: "twitter-btn"
    //icon: <TwitterIcon />
  },
  {
    method: "github",
    constName: $s,
    name: "GitHub",
    className: "github-btn"
    //icon: <GitHubIcon />
  },
  {
    method: "microsoft",
    constName: Ws,
    name: "Microsoft",
    className: "microsoft-btn"
  }
], Ff = (t) => Uf.filter((e) => t.find((r) => e.method === r)), jf = {
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
}, qf = (t) => jf[t], Vf = 1e3, Bf = 5e3, Qh = () => {
  const t = me(void 0), e = me(void 0), r = me(void 0);
  let n = Te(void 0);
  const i = Se(
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
      }, a.expiry * Vf - Bf), t.value = a, r.value = async () => {
        await fs(He()).finally(() => clearInterval(n.current)), r.value = void 0;
      }, o();
    }),
    []
  );
  return de(() => () => {
    n.current && clearInterval(n.current);
  }, []), {
    user: t.value,
    updateError: e.value,
    logOut: r.value,
    authManager: i
  };
};
var mt = /* @__PURE__ */ ((t) => (t.LOGIN = "login", t.SIGN_IN = "signIn", t))(mt || {});
const $f = (t) => er(He(), Cs).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), Hs = (t, e) => {
  const { code: r, message: n, customData: i } = t, { email: a } = i;
  e.value = {
    code: r,
    message: n,
    email: a
  };
}, Wf = (t) => er(He(), Ps).catch((e) => Hs(e, t)), Hf = (t) => er(He(), hd).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), zf = (t) => er(He(), pd).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
}), Qf = (t) => er(He(), vd).catch((e) => {
  const { code: r, message: n, customData: i } = e, { email: a } = i;
  t.value = {
    code: r,
    message: n,
    email: a
  };
});
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Pn() {
  return Pn = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, Pn.apply(this, arguments);
}
var Ea;
(function(t) {
  t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE";
})(Ea || (Ea = {}));
function ce(t, e) {
  if (t === !1 || t === null || typeof t > "u")
    throw new Error(e);
}
function tr(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {
    }
  }
}
function Cn(t) {
  let {
    pathname: e = "/",
    search: r = "",
    hash: n = ""
  } = t;
  return r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function zs(t) {
  let e = {};
  if (t) {
    let r = t.indexOf("#");
    r >= 0 && (e.hash = t.substr(r), t = t.substr(0, r));
    let n = t.indexOf("?");
    n >= 0 && (e.search = t.substr(n), t = t.substr(0, n)), t && (e.pathname = t);
  }
  return e;
}
var Sa;
(function(t) {
  t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error";
})(Sa || (Sa = {}));
function An(t, e) {
  if (e === "/")
    return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase()))
    return null;
  let r = e.endsWith("/") ? e.length - 1 : e.length, n = t.charAt(r);
  return n && n !== "/" ? null : t.slice(r) || "/";
}
function Kf(t, e) {
  e === void 0 && (e = "/");
  let {
    pathname: r,
    search: n = "",
    hash: i = ""
  } = typeof t == "string" ? zs(t) : t;
  return {
    pathname: r ? r.startsWith("/") ? r : Gf(r, e) : e,
    search: Jf(n),
    hash: Yf(i)
  };
}
function Gf(t, e) {
  let r = e.replace(/\/+$/, "").split("/");
  return t.split("/").forEach((i) => {
    i === ".." ? r.length > 1 && r.pop() : i !== "." && r.push(i);
  }), r.length > 1 ? r.join("/") : "/";
}
function dn(t, e, r, n) {
  return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Qs(t) {
  return t.filter((e, r) => r === 0 || e.route.path && e.route.path.length > 0);
}
function Ks(t, e, r, n) {
  n === void 0 && (n = !1);
  let i;
  typeof t == "string" ? i = zs(t) : (i = Pn({}, t), ce(!i.pathname || !i.pathname.includes("?"), dn("?", "pathname", "search", i)), ce(!i.pathname || !i.pathname.includes("#"), dn("#", "pathname", "hash", i)), ce(!i.search || !i.search.includes("#"), dn("#", "search", "hash", i)));
  let a = t === "" || i.pathname === "", s = a ? "/" : i.pathname, u;
  if (n || s == null)
    u = r;
  else {
    let h = e.length - 1;
    if (s.startsWith("..")) {
      let v = s.split("/");
      for (; v[0] === ".."; )
        v.shift(), h -= 1;
      i.pathname = v.join("/");
    }
    u = h >= 0 ? e[h] : "/";
  }
  let o = Kf(i, u), c = s && s !== "/" && s.endsWith("/"), d = (a || s === ".") && r.endsWith("/");
  return !o.pathname.endsWith("/") && (c || d) && (o.pathname += "/"), o;
}
const ri = (t) => t.join("/").replace(/\/\/+/g, "/"), Jf = (t) => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t, Yf = (t) => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t, Gs = ["post", "put", "patch", "delete"];
new Set(Gs);
const Xf = ["get", ...Gs];
new Set(Xf);
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function kn() {
  return kn = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, kn.apply(this, arguments);
}
const Vr = /* @__PURE__ */ V.createContext(null);
process.env.NODE_ENV !== "production" && (Vr.displayName = "DataRouter");
const Js = /* @__PURE__ */ V.createContext(null);
process.env.NODE_ENV !== "production" && (Js.displayName = "DataRouterState");
const Zf = /* @__PURE__ */ V.createContext(null);
process.env.NODE_ENV !== "production" && (Zf.displayName = "Await");
const tt = /* @__PURE__ */ V.createContext(null);
process.env.NODE_ENV !== "production" && (tt.displayName = "Navigation");
const ni = /* @__PURE__ */ V.createContext(null);
process.env.NODE_ENV !== "production" && (ni.displayName = "Location");
const Pt = /* @__PURE__ */ V.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Pt.displayName = "Route");
const eh = /* @__PURE__ */ V.createContext(null);
process.env.NODE_ENV !== "production" && (eh.displayName = "RouteError");
function th(t, e) {
  let {
    relative: r
  } = e === void 0 ? {} : e;
  ii() || (process.env.NODE_ENV !== "production" ? ce(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : ce(!1));
  let {
    basename: n,
    navigator: i
  } = V.useContext(tt), {
    hash: a,
    pathname: s,
    search: u
  } = Br(t, {
    relative: r
  }), o = s;
  return n !== "/" && (o = s === "/" ? n : ri([n, s])), i.createHref({
    pathname: o,
    search: u,
    hash: a
  });
}
function ii() {
  return V.useContext(ni) != null;
}
function Ct() {
  return ii() || (process.env.NODE_ENV !== "production" ? ce(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : ce(!1)), V.useContext(ni).location;
}
const Ys = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Xs(t) {
  V.useContext(tt).static || V.useLayoutEffect(t);
}
function ai() {
  let {
    isDataRoute: t
  } = V.useContext(Pt);
  return t ? sh() : rh();
}
function rh() {
  ii() || (process.env.NODE_ENV !== "production" ? ce(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : ce(!1));
  let t = V.useContext(Vr), {
    basename: e,
    navigator: r
  } = V.useContext(tt), {
    matches: n
  } = V.useContext(Pt), {
    pathname: i
  } = Ct(), a = JSON.stringify(Qs(n).map((o) => o.pathnameBase)), s = V.useRef(!1);
  return Xs(() => {
    s.current = !0;
  }), V.useCallback(function(o, c) {
    if (c === void 0 && (c = {}), process.env.NODE_ENV !== "production" && tr(s.current, Ys), !s.current)
      return;
    if (typeof o == "number") {
      r.go(o);
      return;
    }
    let d = Ks(o, JSON.parse(a), i, c.relative === "path");
    t == null && e !== "/" && (d.pathname = d.pathname === "/" ? e : ri([e, d.pathname])), (c.replace ? r.replace : r.push)(d, c.state, c);
  }, [e, r, a, i, t]);
}
function Br(t, e) {
  let {
    relative: r
  } = e === void 0 ? {} : e, {
    matches: n
  } = V.useContext(Pt), {
    pathname: i
  } = Ct(), a = JSON.stringify(Qs(n).map((s) => s.pathnameBase));
  return V.useMemo(() => Ks(t, JSON.parse(a), i, r === "path"), [t, a, i, r]);
}
var Zs = /* @__PURE__ */ function(t) {
  return t.UseBlocker = "useBlocker", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t;
}(Zs || {}), si = /* @__PURE__ */ function(t) {
  return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t;
}(si || {});
function eo(t) {
  return t + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function nh(t) {
  let e = V.useContext(Vr);
  return e || (process.env.NODE_ENV !== "production" ? ce(!1, eo(t)) : ce(!1)), e;
}
function ih(t) {
  let e = V.useContext(Pt);
  return e || (process.env.NODE_ENV !== "production" ? ce(!1, eo(t)) : ce(!1)), e;
}
function to(t) {
  let e = ih(t), r = e.matches[e.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? ce(!1, t + ' can only be used on routes that contain a unique "id"') : ce(!1)), r.route.id;
}
function ah() {
  return to(si.UseRouteId);
}
function sh() {
  let {
    router: t
  } = nh(Zs.UseNavigateStable), e = to(si.UseNavigateStable), r = V.useRef(!1);
  return Xs(() => {
    r.current = !0;
  }), V.useCallback(function(i, a) {
    a === void 0 && (a = {}), process.env.NODE_ENV !== "production" && tr(r.current, Ys), r.current && (typeof i == "number" ? t.navigate(i) : t.navigate(i, kn({
      fromRouteId: e
    }, a)));
  }, [t, e]);
}
new Promise(() => {
});
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ft() {
  return ft = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, ft.apply(this, arguments);
}
function oi(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
const gr = "get", yr = "application/x-www-form-urlencoded";
function $r(t) {
  return t != null && typeof t.tagName == "string";
}
function oh(t) {
  return $r(t) && t.tagName.toLowerCase() === "button";
}
function uh(t) {
  return $r(t) && t.tagName.toLowerCase() === "form";
}
function ch(t) {
  return $r(t) && t.tagName.toLowerCase() === "input";
}
function lh(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function dh(t, e) {
  return t.button === 0 && // Ignore everything but left clicks
  (!e || e === "_self") && // Let browser handle "target=_blank" etc.
  !lh(t);
}
function Nn(t) {
  return t === void 0 && (t = ""), new URLSearchParams(typeof t == "string" || Array.isArray(t) || t instanceof URLSearchParams ? t : Object.keys(t).reduce((e, r) => {
    let n = t[r];
    return e.concat(Array.isArray(n) ? n.map((i) => [r, i]) : [[r, n]]);
  }, []));
}
function fh(t, e) {
  let r = Nn(t);
  return e && e.forEach((n, i) => {
    r.has(i) || e.getAll(i).forEach((a) => {
      r.append(i, a);
    });
  }), r;
}
let lr = null;
function hh() {
  if (lr === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), lr = !1;
    } catch {
      lr = !0;
    }
  return lr;
}
const ph = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function fn(t) {
  return t != null && !ph.has(t) ? (process.env.NODE_ENV !== "production" && tr(!1, '"' + t + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + yr + '"')), null) : t;
}
function vh(t, e) {
  let r, n, i, a, s;
  if (uh(t)) {
    let u = t.getAttribute("action");
    n = u ? An(u, e) : null, r = t.getAttribute("method") || gr, i = fn(t.getAttribute("enctype")) || yr, a = new FormData(t);
  } else if (oh(t) || ch(t) && (t.type === "submit" || t.type === "image")) {
    let u = t.form;
    if (u == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let o = t.getAttribute("formaction") || u.getAttribute("action");
    if (n = o ? An(o, e) : null, r = t.getAttribute("formmethod") || u.getAttribute("method") || gr, i = fn(t.getAttribute("formenctype")) || fn(u.getAttribute("enctype")) || yr, a = new FormData(u, t), !hh()) {
      let {
        name: c,
        type: d,
        value: h
      } = t;
      if (d === "image") {
        let v = c ? c + "." : "";
        a.append(v + "x", "0"), a.append(v + "y", "0");
      } else
        c && a.append(c, h);
    }
  } else {
    if ($r(t))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    r = gr, n = null, i = yr, s = t;
  }
  return a && i === "text/plain" && (s = a, a = void 0), {
    action: n,
    method: r.toLowerCase(),
    encType: i,
    formData: a,
    body: s
  };
}
const mh = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], gh = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"], yh = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset"];
process.env.NODE_ENV;
const bh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", _h = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ro = /* @__PURE__ */ V.forwardRef(function(e, r) {
  let {
    onClick: n,
    relative: i,
    reloadDocument: a,
    replace: s,
    state: u,
    target: o,
    to: c,
    preventScrollReset: d
  } = e, h = oi(e, mh), {
    basename: v
  } = V.useContext(tt), p, _ = !1;
  if (typeof c == "string" && _h.test(c) && (p = c, bh))
    try {
      let E = new URL(window.location.href), T = c.startsWith("//") ? new URL(E.protocol + c) : new URL(c), m = An(T.pathname, v);
      T.origin === E.origin && m != null ? c = m + T.search + T.hash : _ = !0;
    } catch {
      process.env.NODE_ENV !== "production" && tr(!1, '<Link to="' + c + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let w = th(c, {
    relative: i
  }), S = Th(c, {
    replace: s,
    state: u,
    target: o,
    preventScrollReset: d,
    relative: i
  });
  function O(E) {
    n && n(E), E.defaultPrevented || S(E);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ V.createElement("a", ft({}, h, {
      href: p || w,
      onClick: _ || a ? n : O,
      ref: r,
      target: o
    }))
  );
});
process.env.NODE_ENV !== "production" && (ro.displayName = "Link");
const Ih = /* @__PURE__ */ V.forwardRef(function(e, r) {
  let {
    "aria-current": n = "page",
    caseSensitive: i = !1,
    className: a = "",
    end: s = !1,
    style: u,
    to: o,
    children: c
  } = e, d = oi(e, gh), h = Br(o, {
    relative: d.relative
  }), v = Ct(), p = V.useContext(Js), {
    navigator: _
  } = V.useContext(tt), w = _.encodeLocation ? _.encodeLocation(h).pathname : h.pathname, S = v.pathname, O = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
  i || (S = S.toLowerCase(), O = O ? O.toLowerCase() : null, w = w.toLowerCase());
  let E = S === w || !s && S.startsWith(w) && S.charAt(w.length) === "/", T = O != null && (O === w || !s && O.startsWith(w) && O.charAt(w.length) === "/"), m = E ? n : void 0, b;
  typeof a == "function" ? b = a({
    isActive: E,
    isPending: T
  }) : b = [a, E ? "active" : null, T ? "pending" : null].filter(Boolean).join(" ");
  let f = typeof u == "function" ? u({
    isActive: E,
    isPending: T
  }) : u;
  return /* @__PURE__ */ V.createElement(ro, ft({}, d, {
    "aria-current": m,
    className: b,
    ref: r,
    style: f,
    to: o
  }), typeof c == "function" ? c({
    isActive: E,
    isPending: T
  }) : c);
});
process.env.NODE_ENV !== "production" && (Ih.displayName = "NavLink");
const wh = /* @__PURE__ */ V.forwardRef((t, e) => {
  let r = Ph();
  return /* @__PURE__ */ V.createElement(no, ft({}, t, {
    submit: r,
    ref: e
  }));
});
process.env.NODE_ENV !== "production" && (wh.displayName = "Form");
const no = /* @__PURE__ */ V.forwardRef((t, e) => {
  let {
    reloadDocument: r,
    replace: n,
    state: i,
    method: a = gr,
    action: s,
    onSubmit: u,
    submit: o,
    relative: c,
    preventScrollReset: d
  } = t, h = oi(t, yh), v = a.toLowerCase() === "get" ? "get" : "post", p = Ch(s, {
    relative: c
  }), _ = (w) => {
    if (u && u(w), w.defaultPrevented)
      return;
    w.preventDefault();
    let S = w.nativeEvent.submitter, O = (S == null ? void 0 : S.getAttribute("formmethod")) || a;
    o(S || w.currentTarget, {
      method: O,
      replace: n,
      state: i,
      relative: c,
      preventScrollReset: d
    });
  };
  return /* @__PURE__ */ V.createElement("form", ft({
    ref: e,
    method: v,
    action: p,
    onSubmit: r ? u : _
  }, h));
});
process.env.NODE_ENV !== "production" && (no.displayName = "FormImpl");
process.env.NODE_ENV;
var Dn;
(function(t) {
  t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher";
})(Dn || (Dn = {}));
var Ta;
(function(t) {
  t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration";
})(Ta || (Ta = {}));
function Eh(t) {
  return t + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Sh(t) {
  let e = V.useContext(Vr);
  return e || (process.env.NODE_ENV !== "production" ? ce(!1, Eh(t)) : ce(!1)), e;
}
function Th(t, e) {
  let {
    target: r,
    replace: n,
    state: i,
    preventScrollReset: a,
    relative: s
  } = e === void 0 ? {} : e, u = ai(), o = Ct(), c = Br(t, {
    relative: s
  });
  return V.useCallback((d) => {
    if (dh(d, r)) {
      d.preventDefault();
      let h = n !== void 0 ? n : Cn(o) === Cn(c);
      u(t, {
        replace: h,
        state: i,
        preventScrollReset: a,
        relative: s
      });
    }
  }, [o, u, c, n, i, r, t, a, s]);
}
function Rh(t) {
  process.env.NODE_ENV !== "production" && tr(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");
  let e = V.useRef(Nn(t)), r = V.useRef(!1), n = Ct(), i = V.useMemo(() => (
    // Only merge in the defaults if we haven't yet called setSearchParams.
    // Once we call that we want those to take precedence, otherwise you can't
    // remove a param with setSearchParams({}) if it has an initial value
    fh(n.search, r.current ? null : e.current)
  ), [n.search]), a = ai(), s = V.useCallback((u, o) => {
    const c = Nn(typeof u == "function" ? u(i) : u);
    r.current = !0, a("?" + c, o);
  }, [a, i]);
  return [i, s];
}
function Oh() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
function Ph() {
  let {
    router: t
  } = Sh(Dn.UseSubmit), {
    basename: e
  } = V.useContext(tt), r = ah();
  return V.useCallback(function(n, i) {
    i === void 0 && (i = {}), Oh();
    let {
      action: a,
      method: s,
      encType: u,
      formData: o,
      body: c
    } = vh(n, e);
    t.navigate(i.action || a, {
      preventScrollReset: i.preventScrollReset,
      formData: o,
      body: c,
      formMethod: i.method || s,
      formEncType: i.encType || u,
      replace: i.replace,
      state: i.state,
      fromRouteId: r
    });
  }, [t, e, r]);
}
function Ch(t, e) {
  let {
    relative: r
  } = e === void 0 ? {} : e, {
    basename: n
  } = V.useContext(tt), i = V.useContext(Pt);
  i || (process.env.NODE_ENV !== "production" ? ce(!1, "useFormAction must be used inside a RouteContext") : ce(!1));
  let [a] = i.matches.slice(-1), s = ft({}, Br(t || ".", {
    relative: r
  })), u = Ct();
  if (t == null && (s.search = u.search, a.route.index)) {
    let o = new URLSearchParams(s.search);
    o.delete("index"), s.search = o.toString() ? "?" + o.toString() : "";
  }
  return (!t || t === ".") && a.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (s.pathname = s.pathname === "/" ? n : ri([n, s.pathname])), Cn(s);
}
const Ah = {
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
}, kh = (t, e) => {
  let r = "";
  const { password1: n, password2: i } = t;
  return n.length > 0 && n.length < 8 ? r = e.minLength : i.length > 0 && i !== n && (r = e.passwordNotMatch), r;
}, Nh = (t, e, r) => {
  const [n] = kf(), [i] = xf(), [a] = Nf(), [s] = Rh(), u = ai(), o = me(Ah), c = me(!1), d = me(!1), h = me(!1), v = me({});
  de(() => {
    h.value || (h.value = !0), Tl(He()).then((f) => {
      f && f.user.getIdToken().then((g) => m(g));
    }).catch((f) => {
      h.value && (h.value = !1), Hs(f, v);
    });
  }, []);
  const p = () => {
    h.value = !1;
    const f = s.get("next");
    f && u(f);
  }, _ = (f) => {
    "data" in f ? v.value = {
      code: "auth/firebase-credential-not-provided",
      message: f.data && (Object.values(f.data).find((g) => typeof g == "string") ?? f.data)
    } : "status" in f && (v.value = {
      code: "auth/fetch-failed",
      message: "error" in f ? f.error : "Unexpected Error"
    }), h.value = !1;
  }, w = () => {
    Ro(() => {
      c.value = !c.value, d.value && (d.value = !d.value);
    });
  }, S = (f) => {
    const { target: g } = f, y = g.getAttribute("data-section") ?? mt.LOGIN;
    if (o.value = {
      ...o.value,
      [y]: {
        ...o.value[y],
        [g.name]: g.value
      }
    }, y === mt.SIGN_IN) {
      const R = kh(o.value[y], e);
      R ? v.value = {
        code: "sign-in/password",
        message: R
      } : v.value = {};
    }
  }, O = (f) => {
    if (Z.hasToS && !c.value) {
      d.value = !0;
      return;
    }
    h.value = !0, m(f);
  }, E = async (f) => {
    if (f.preventDefault(), v.value = {}, Z.hasToS && !c.value) {
      d.value = !0;
      return;
    }
    if (h.value)
      return;
    h.value = !0;
    const g = f.currentTarget.getAttribute("data-section") ?? mt.LOGIN;
    let y = {};
    if (g === mt.LOGIN) {
      if (Z.acceptUsername ? y = {
        username: o.value[g].username,
        password: o.value[g].password
      } : y = {
        email: o.value[g].email,
        password: o.value[g].password
      }, Z.bodyAsBase64) {
        const R = Object.entries(y).map(([P, A]) => `${P}=${A}`).join("&");
        y = {
          encodedBody: btoa(R)
        };
      }
      n(y).unwrap().then(T).catch(_);
    } else if (g === mt.SIGN_IN) {
      let R = o.value[g];
      if (Z.bodyAsBase64) {
        const I = Object.entries(R).map(([P, A]) => `${P}=${A}`).join("&");
        R = btoa(I);
      }
      i({
        body: R,
        encodedBody: Z.bodyAsBase64
      }).unwrap().then(T).catch(_);
    }
  }, T = async (f) => {
    t(f, r, a).then(p);
  }, m = async (f) => {
    h.value = !0, n({ token: f }).unwrap().then(T).catch(_);
  };
  return {
    form: o,
    radio: c,
    isLoading: h,
    handleError: v,
    confirmTp: d,
    handleChange: S,
    handleRadio: w,
    handleSocialLogin: async (f) => {
      if (Z.hasToS && !c.value) {
        d.value = !0;
        return;
      }
      if (!h.value)
        switch (h.value = !0, f) {
          case qs:
            Wf(v);
            break;
          case Vs:
            $f(v);
            break;
          case Bs:
            Hf(v);
            break;
          case $s:
            zf(v);
            break;
          case Ws:
            Qf(v);
            break;
        }
    },
    handleSubmit: E,
    handleSubmitUserAlreadyLogged: O,
    handleToken: m
  };
}, Dh = () => {
  const t = me(!1), e = me(void 0), r = me(void 0), { authManager: n } = Pa(Ln), i = qf(Z.language), {
    form: a,
    radio: s,
    confirmTp: u,
    isLoading: o,
    handleError: c,
    handleSubmit: d,
    handleSubmitUserAlreadyLogged: h,
    handleChange: v,
    handleRadio: p,
    handleSocialLogin: _
  } = Nh(n, i, e);
  return de(() => {
    (async () => {
      o.value = !0;
      let S = Xc(He(), async (O) => {
        O && await O.getIdToken().then((E) => {
          const T = O.providerData[0];
          r.value = {
            ...T,
            providerId: T.providerId.split(".")[0],
            tokenId: E
          };
        }).finally(() => o.value = !1), o.value = !1, S();
      });
    })();
  }, []), /* @__PURE__ */ D.jsx(
    Mf,
    {
      isLoading: o.value,
      scrollPosition: t,
      language: i,
      toastMessage: e,
      children: /* @__PURE__ */ D.jsxs("div", { className: "login-container", children: [
        /* @__PURE__ */ D.jsxs("div", { className: "login", children: [
          /* @__PURE__ */ D.jsx(xh, { handleSocialLogin: _ }),
          /* @__PURE__ */ D.jsx(
            Mh,
            {
              forgotPassword: t,
              form: a,
              handleChange: v,
              handleSubmit: d,
              language: i
            }
          )
        ] }),
        /* @__PURE__ */ D.jsx(io, { error: c.value }),
        /* @__PURE__ */ D.jsx(Lh, { alreadyUser: r, language: i, handleSubmitUserAlreadyLogged: h }),
        /* @__PURE__ */ D.jsx(Uh, { confirmTp: u.value, handleRadio: p, radioValue: s.value })
      ] })
    }
  );
}, xh = ({ handleSocialLogin: t }) => /* @__PURE__ */ D.jsx("div", { children: Ff(Z.signInMethods).map(
  ({ className: e, name: r, constName: n, icon: i }, a) => /* @__PURE__ */ D.jsxs("button", { onClick: () => t(n), className: e, children: [
    i && i,
    r
  ] }, a)
) }), Mh = ({
  handleSubmit: t,
  language: e,
  handleChange: r,
  form: n,
  forgotPassword: i
}) => {
  const a = me(!0), s = Te(null);
  return de(() => {
    if (s.current) {
      const u = s.current.offsetWidth;
      s.current.scrollTo(a.value ? 0 : u, 0);
    }
  }, [a.value]), /* @__PURE__ */ D.jsx("div", { children: /* @__PURE__ */ D.jsxs("section", { ref: s, className: "form-email mandatory-scroll-snapping", children: [
    /* @__PURE__ */ D.jsxs("form", { className: "form-field", autoComplete: "on", "data-section": "login", onSubmit: t, children: [
      Z.acceptUsername ? /* @__PURE__ */ D.jsx(D.Fragment, { children: /* @__PURE__ */ D.jsx("input", { required: !0, "data-section": "login", autoComplete: "username", placeholder: `Email | ${e.username}`, name: "username", onChange: r, value: n.value.login.username, type: "text" }) }) : /* @__PURE__ */ D.jsx(D.Fragment, { children: /* @__PURE__ */ D.jsx("input", { required: !0, "data-section": "login", autoComplete: "email", placeholder: "Email", name: "email", onChange: r, value: n.value.login.email, type: "email" }) }),
      /* @__PURE__ */ D.jsx("input", { required: !0, "data-section": "login", autoComplete: "current-password", placeholder: e.password, name: "password", onChange: r, value: n.value.login.password, type: "password" }),
      /* @__PURE__ */ D.jsx("span", { onClick: () => i.value = !0, className: "forgot-password", children: e.forgotPassword }),
      /* @__PURE__ */ D.jsx("button", { className: "email-login", children: e.logIn }),
      /* @__PURE__ */ D.jsx("span", { onClick: () => a.value = !1, className: "form-action-change", children: e.signIn })
    ] }),
    /* @__PURE__ */ D.jsxs("form", { className: "form-field", autoComplete: "on", "data-section": "signIn", onSubmit: t, children: [
      /* @__PURE__ */ D.jsx("input", { required: !0, "data-section": "signIn", autoComplete: "off", placeholder: "Email", name: "email", onChange: r, value: n.value.signIn.email, type: "email" }),
      /* @__PURE__ */ D.jsx("input", { required: !0, "data-section": "signIn", autoComplete: "off", placeholder: `${e.username}`, name: "username", onChange: r, value: n.value.signIn.username, type: "text" }),
      /* @__PURE__ */ D.jsx("input", { required: !0, "data-section": "signIn", autoComplete: "off", placeholder: e.password, name: "password1", onChange: r, value: n.value.signIn.password1, type: "password" }),
      /* @__PURE__ */ D.jsx("input", { required: !0, "data-section": "signIn", autoComplete: "off", placeholder: e.confirm_password, name: "password2", onChange: r, value: n.value.signIn.password2, type: "password" }),
      /* @__PURE__ */ D.jsx("button", { className: "email-login", children: e.signIn }),
      /* @__PURE__ */ D.jsx("span", { onClick: () => a.value = !0, className: "form-action-change", children: e.logIn })
    ] })
  ] }) });
}, Lh = ({ alreadyUser: t, language: e, handleSubmitUserAlreadyLogged: r }) => {
  const n = () => {
    fs(He()).finally(() => t.value = void 0);
  };
  return /* @__PURE__ */ D.jsx(D.Fragment, { children: t.value && /* @__PURE__ */ D.jsxs("section", { className: "user-already-logged", children: [
    /* @__PURE__ */ D.jsxs("p", { children: [
      e.continueAs,
      " ",
      t.value.displayName,
      t.value.photoURL && /* @__PURE__ */ D.jsx("img", { src: t.value.photoURL, alt: "user image" }),
      /* @__PURE__ */ D.jsxs("span", { children: [
        e.loggedWith,
        " ",
        t.value.providerId
      ] })
    ] }),
    /* @__PURE__ */ D.jsxs("div", { className: "user-logged-choice", children: [
      /* @__PURE__ */ D.jsx("button", { onClick: () => {
        var i;
        return r(((i = t.value) == null ? void 0 : i.tokenId) ?? "");
      }, className: "choice-ok", children: "Ok" }),
      /* @__PURE__ */ D.jsx("button", { onClick: n, className: "choice-not", children: e.logOut })
    ] })
  ] }) });
}, Uh = ({ confirmTp: t, handleRadio: e, radioValue: r }) => {
  const n = Te(null);
  return de(() => {
    t && n.current && n.current.scrollIntoView({ behavior: "smooth" });
  }, [t]), /* @__PURE__ */ D.jsx("section", { children: Z.hasToS && /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    /* @__PURE__ */ D.jsxs("label", { className: "login-accept", children: [
      /* @__PURE__ */ D.jsx("input", { onChange: e, type: "checkbox", checked: r }),
      Z.hasToS.label
    ] }),
    t && /* @__PURE__ */ D.jsx("span", { ref: n, className: "notify error", children: Z.hasToS.errorLabel })
  ] }) });
}, io = ({ error: t }) => {
  const e = (n) => /* @__PURE__ */ D.jsx(D.Fragment, { children: Object.entries(n).map(
    ([i, a], s) => /* @__PURE__ */ D.jsxs("span", { children: [
      i,
      ": ",
      a
    ] }, s)
  ) }), r = (n, i) => {
    const a = Lf(n, i);
    return /* @__PURE__ */ D.jsx(D.Fragment, { children: typeof i == "string" ? i : e(a) });
  };
  return /* @__PURE__ */ D.jsx(D.Fragment, { children: t.message && /* @__PURE__ */ D.jsx("span", { autoFocus: !0, className: "notify error", children: Z.firebaseErrorMessages ? r(Z.firebaseErrorMessages, t) : typeof t.message == "string" ? t.message : e(t.message) }) });
}, Ra = {
  user: null,
  isAuthenticated: !1,
  expiry: void 0,
  refresh_token: void 0,
  token: void 0
}, Fh = it({
  name: "UserSlice",
  initialState: Ra,
  reducers: {},
  extraReducers(t) {
    t.addMatcher(ct.endpoints.login.matchFulfilled, (e, r) => (e = {
      ...r.payload,
      isAuthenticated: !0
    }, e)).addMatcher(ct.endpoints.updateLogin.matchFulfilled, (e, r) => (e = {
      ...r.payload,
      isAuthenticated: !0
    }, e)).addMatcher(ct.endpoints.updateLogin.matchRejected, (e) => (e = Ra, e));
  }
}), { reducer: jh } = Fh, qh = Aa({
  userReducer: jh,
  [ct.reducerPath]: ct.reducer
}), Vh = Po({
  reducer: qh,
  middleware: (t) => t().concat(ct.middleware)
}), Kh = ({ message: t, authManager: e }) => fd() ? /* @__PURE__ */ D.jsx(Do, { store: Vh, children: /* @__PURE__ */ D.jsx(Ln.Provider, { value: { message: t, authManager: e }, children: /* @__PURE__ */ D.jsx(Dh, {}) }) }) : /* @__PURE__ */ D.jsx("h1", { children: "Error: Missing firebaseConfig in setConfig" });
export {
  Kh as Auth,
  zh as setConfig,
  Qh as useAuth
};
