(function(Ie,U){typeof exports=="object"&&typeof module<"u"?U(exports,require("react"),require("@preact/signals-react"),require("@reduxjs/toolkit"),require("react-redux")):typeof define=="function"&&define.amd?define(["exports","react","@preact/signals-react","@reduxjs/toolkit","react-redux"],U):(Ie=typeof globalThis<"u"?globalThis:Ie||self,U(Ie.react_auth_base={},Ie.React,Ie.SignalsReact,Ie.ReduxToolkit,Ie.ReactRedux))})(this,function(Ie,U,pe,L,De){"use strict";function Fs(t){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t){for(const r in t)if(r!=="default"){const n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:()=>t[r]})}}return e.default=t,Object.freeze(e)}const $=Fs(U);var Lr={exports:{}},Rt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn;function js(){if(Yn)return Rt;Yn=1;var t=U,e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(u,o,c){var d,h={},v=null,p=null;c!==void 0&&(v=""+c),o.key!==void 0&&(v=""+o.key),o.ref!==void 0&&(p=o.ref);for(d in o)n.call(o,d)&&!a.hasOwnProperty(d)&&(h[d]=o[d]);if(u&&u.defaultProps)for(d in o=u.defaultProps,o)h[d]===void 0&&(h[d]=o[d]);return{$$typeof:e,type:u,key:v,ref:p,props:h,_owner:i.current}}return Rt.Fragment=r,Rt.jsx=s,Rt.jsxs=s,Rt}var Pt={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn;function qs(){return Xn||(Xn=1,process.env.NODE_ENV!=="production"&&function(){var t=U,e=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),o=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),p=Symbol.for("react.offscreen"),_=Symbol.iterator,w="@@iterator";function S(l){if(l===null||typeof l!="object")return null;var k=_&&l[_]||l[w];return typeof k=="function"?k:null}var R=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function E(l){{for(var k=arguments.length,M=new Array(k>1?k-1:0),V=1;V<k;V++)M[V-1]=arguments[V];T("error",l,M)}}function T(l,k,M){{var V=R.ReactDebugCurrentFrame,ee=V.getStackAddendum();ee!==""&&(k+="%s",M=M.concat([ee]));var ne=M.map(function(J){return String(J)});ne.unshift("Warning: "+k),Function.prototype.apply.call(console[l],console,ne)}}var m=!1,b=!1,f=!1,g=!1,y=!1,O;O=Symbol.for("react.module.reference");function I(l){return!!(typeof l=="string"||typeof l=="function"||l===n||l===a||y||l===i||l===c||l===d||g||l===p||m||b||f||typeof l=="object"&&l!==null&&(l.$$typeof===v||l.$$typeof===h||l.$$typeof===s||l.$$typeof===u||l.$$typeof===o||l.$$typeof===O||l.getModuleId!==void 0))}function P(l,k,M){var V=l.displayName;if(V)return V;var ee=k.displayName||k.name||"";return ee!==""?M+"("+ee+")":M}function A(l){return l.displayName||"Context"}function C(l){if(l==null)return null;if(typeof l.tag=="number"&&E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case n:return"Fragment";case r:return"Portal";case a:return"Profiler";case i:return"StrictMode";case c:return"Suspense";case d:return"SuspenseList"}if(typeof l=="object")switch(l.$$typeof){case u:var k=l;return A(k)+".Consumer";case s:var M=l;return A(M._context)+".Provider";case o:return P(l,l.render,"ForwardRef");case h:var V=l.displayName||null;return V!==null?V:C(l.type)||"Memo";case v:{var ee=l,ne=ee._payload,J=ee._init;try{return C(J(ne))}catch{return null}}}return null}var N=Object.assign,x=0,q,F,j,K,H,z,Y;function W(){}W.__reactDisabledLog=!0;function X(){{if(x===0){q=console.log,F=console.info,j=console.warn,K=console.error,H=console.group,z=console.groupCollapsed,Y=console.groupEnd;var l={configurable:!0,enumerable:!0,value:W,writable:!0};Object.defineProperties(console,{info:l,log:l,warn:l,error:l,group:l,groupCollapsed:l,groupEnd:l})}x++}}function Q(){{if(x--,x===0){var l={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:N({},l,{value:q}),info:N({},l,{value:F}),warn:N({},l,{value:j}),error:N({},l,{value:K}),group:N({},l,{value:H}),groupCollapsed:N({},l,{value:z}),groupEnd:N({},l,{value:Y})})}x<0&&E("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Z=R.ReactCurrentDispatcher,se;function ge(l,k,M){{if(se===void 0)try{throw Error()}catch(ee){var V=ee.stack.trim().match(/\n( *(at )?)/);se=V&&V[1]||""}return`
`+se+l}}var we=!1,Ee;{var _e=typeof WeakMap=="function"?WeakMap:Map;Ee=new _e}function he(l,k){if(!l||we)return"";{var M=Ee.get(l);if(M!==void 0)return M}var V;we=!0;var ee=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var ne;ne=Z.current,Z.current=null,X();try{if(k){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(ze){V=ze}Reflect.construct(l,[],J)}else{try{J.call()}catch(ze){V=ze}l.call(J.prototype)}}else{try{throw Error()}catch(ze){V=ze}l()}}catch(ze){if(ze&&V&&typeof ze.stack=="string"){for(var G=ze.stack.split(`
`),ve=V.stack.split(`
`),ce=G.length-1,le=ve.length-1;ce>=1&&le>=0&&G[ce]!==ve[le];)le--;for(;ce>=1&&le>=0;ce--,le--)if(G[ce]!==ve[le]){if(ce!==1||le!==1)do if(ce--,le--,le<0||G[ce]!==ve[le]){var Te=`
`+G[ce].replace(" at new "," at ");return l.displayName&&Te.includes("<anonymous>")&&(Te=Te.replace("<anonymous>",l.displayName)),typeof l=="function"&&Ee.set(l,Te),Te}while(ce>=1&&le>=0);break}}}finally{we=!1,Z.current=ne,Q(),Error.prepareStackTrace=ee}var Ot=l?l.displayName||l.name:"",Us=Ot?ge(Ot):"";return typeof l=="function"&&Ee.set(l,Us),Us}function ie(l,k,M){return he(l,!1)}function Ne(l){var k=l.prototype;return!!(k&&k.isReactComponent)}function lt(l,k,M){if(l==null)return"";if(typeof l=="function")return he(l,Ne(l));if(typeof l=="string")return ge(l);switch(l){case c:return ge("Suspense");case d:return ge("SuspenseList")}if(typeof l=="object")switch(l.$$typeof){case o:return ie(l.render);case h:return lt(l.type,k,M);case v:{var V=l,ee=V._payload,ne=V._init;try{return lt(ne(ee),k,M)}catch{}}}return""}var tt=Object.prototype.hasOwnProperty,dt={},St=R.ReactDebugCurrentFrame;function rt(l){if(l){var k=l._owner,M=lt(l.type,l._source,k?k.type:null);St.setExtraStackFrame(M)}else St.setExtraStackFrame(null)}function Mr(l,k,M,V,ee){{var ne=Function.call.bind(tt);for(var J in l)if(ne(l,J)){var G=void 0;try{if(typeof l[J]!="function"){var ve=Error((V||"React class")+": "+M+" type `"+J+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof l[J]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw ve.name="Invariant Violation",ve}G=l[J](k,J,V,M,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(ce){G=ce}G&&!(G instanceof Error)&&(rt(ee),E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",V||"React class",M,J,typeof G),rt(null)),G instanceof Error&&!(G.message in dt)&&(dt[G.message]=!0,rt(ee),E("Failed %s type: %s",M,G.message),rt(null))}}}var Se=Array.isArray;function ye(l){return Se(l)}function Jf(l){{var k=typeof Symbol=="function"&&Symbol.toStringTag,M=k&&l[Symbol.toStringTag]||l.constructor.name||"Object";return M}}function Yf(l){try{return Rs(l),!1}catch{return!0}}function Rs(l){return""+l}function Ps(l){if(Yf(l))return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Jf(l)),Rs(l)}var Jt=R.ReactCurrentOwner,Xf={key:!0,ref:!0,__self:!0,__source:!0},Cs,As,Qn;Qn={};function Zf(l){if(tt.call(l,"ref")){var k=Object.getOwnPropertyDescriptor(l,"ref").get;if(k&&k.isReactWarning)return!1}return l.ref!==void 0}function eh(l){if(tt.call(l,"key")){var k=Object.getOwnPropertyDescriptor(l,"key").get;if(k&&k.isReactWarning)return!1}return l.key!==void 0}function th(l,k){if(typeof l.ref=="string"&&Jt.current&&k&&Jt.current.stateNode!==k){var M=C(Jt.current.type);Qn[M]||(E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',C(Jt.current.type),l.ref),Qn[M]=!0)}}function rh(l,k){{var M=function(){Cs||(Cs=!0,E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",k))};M.isReactWarning=!0,Object.defineProperty(l,"key",{get:M,configurable:!0})}}function nh(l,k){{var M=function(){As||(As=!0,E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",k))};M.isReactWarning=!0,Object.defineProperty(l,"ref",{get:M,configurable:!0})}}var ih=function(l,k,M,V,ee,ne,J){var G={$$typeof:e,type:l,key:k,ref:M,props:J,_owner:ne};return G._store={},Object.defineProperty(G._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(G,"_self",{configurable:!1,enumerable:!1,writable:!1,value:V}),Object.defineProperty(G,"_source",{configurable:!1,enumerable:!1,writable:!1,value:ee}),Object.freeze&&(Object.freeze(G.props),Object.freeze(G)),G};function ah(l,k,M,V,ee){{var ne,J={},G=null,ve=null;M!==void 0&&(Ps(M),G=""+M),eh(k)&&(Ps(k.key),G=""+k.key),Zf(k)&&(ve=k.ref,th(k,ee));for(ne in k)tt.call(k,ne)&&!Xf.hasOwnProperty(ne)&&(J[ne]=k[ne]);if(l&&l.defaultProps){var ce=l.defaultProps;for(ne in ce)J[ne]===void 0&&(J[ne]=ce[ne])}if(G||ve){var le=typeof l=="function"?l.displayName||l.name||"Unknown":l;G&&rh(J,le),ve&&nh(J,le)}return ih(l,G,ve,ee,V,Jt.current,J)}}var Kn=R.ReactCurrentOwner,ks=R.ReactDebugCurrentFrame;function Tt(l){if(l){var k=l._owner,M=lt(l.type,l._source,k?k.type:null);ks.setExtraStackFrame(M)}else ks.setExtraStackFrame(null)}var Gn;Gn=!1;function Jn(l){return typeof l=="object"&&l!==null&&l.$$typeof===e}function Ns(){{if(Kn.current){var l=C(Kn.current.type);if(l)return`

Check the render method of \``+l+"`."}return""}}function sh(l){{if(l!==void 0){var k=l.fileName.replace(/^.*[\\\/]/,""),M=l.lineNumber;return`

Check your code at `+k+":"+M+"."}return""}}var Ds={};function oh(l){{var k=Ns();if(!k){var M=typeof l=="string"?l:l.displayName||l.name;M&&(k=`

Check the top-level render call using <`+M+">.")}return k}}function xs(l,k){{if(!l._store||l._store.validated||l.key!=null)return;l._store.validated=!0;var M=oh(k);if(Ds[M])return;Ds[M]=!0;var V="";l&&l._owner&&l._owner!==Kn.current&&(V=" It was passed a child from "+C(l._owner.type)+"."),Tt(l),E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',M,V),Tt(null)}}function Ms(l,k){{if(typeof l!="object")return;if(ye(l))for(var M=0;M<l.length;M++){var V=l[M];Jn(V)&&xs(V,k)}else if(Jn(l))l._store&&(l._store.validated=!0);else if(l){var ee=S(l);if(typeof ee=="function"&&ee!==l.entries)for(var ne=ee.call(l),J;!(J=ne.next()).done;)Jn(J.value)&&xs(J.value,k)}}}function uh(l){{var k=l.type;if(k==null||typeof k=="string")return;var M;if(typeof k=="function")M=k.propTypes;else if(typeof k=="object"&&(k.$$typeof===o||k.$$typeof===h))M=k.propTypes;else return;if(M){var V=C(k);Mr(M,l.props,"prop",V,l)}else if(k.PropTypes!==void 0&&!Gn){Gn=!0;var ee=C(k);E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",ee||"Unknown")}typeof k.getDefaultProps=="function"&&!k.getDefaultProps.isReactClassApproved&&E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ch(l){{for(var k=Object.keys(l.props),M=0;M<k.length;M++){var V=k[M];if(V!=="children"&&V!=="key"){Tt(l),E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",V),Tt(null);break}}l.ref!==null&&(Tt(l),E("Invalid attribute `ref` supplied to `React.Fragment`."),Tt(null))}}function Ls(l,k,M,V,ee,ne){{var J=I(l);if(!J){var G="";(l===void 0||typeof l=="object"&&l!==null&&Object.keys(l).length===0)&&(G+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var ve=sh(ee);ve?G+=ve:G+=Ns();var ce;l===null?ce="null":ye(l)?ce="array":l!==void 0&&l.$$typeof===e?(ce="<"+(C(l.type)||"Unknown")+" />",G=" Did you accidentally export a JSX literal instead of a component?"):ce=typeof l,E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",ce,G)}var le=ah(l,k,M,ee,ne);if(le==null)return le;if(J){var Te=k.children;if(Te!==void 0)if(V)if(ye(Te)){for(var Ot=0;Ot<Te.length;Ot++)Ms(Te[Ot],l);Object.freeze&&Object.freeze(Te)}else E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ms(Te,l)}return l===n?ch(le):uh(le),le}}function lh(l,k,M){return Ls(l,k,M,!0)}function dh(l,k,M){return Ls(l,k,M,!1)}var fh=dh,hh=lh;Pt.Fragment=n,Pt.jsx=fh,Pt.jsxs=hh}()),Pt}process.env.NODE_ENV==="production"?Lr.exports=js():Lr.exports=qs();var D=Lr.exports;const Ur=U.createContext({});/**
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
 *//**
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
 */const Zn=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},Bs=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[r++];e[n++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[r++],s=t[r++],u=t[r++],o=((i&7)<<18|(a&63)<<12|(s&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(o>>10)),e[n++]=String.fromCharCode(56320+(o&1023))}else{const a=t[r++],s=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(a&63)<<6|s&63)}}return e.join("")},ei={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const a=t[i],s=i+1<t.length,u=s?t[i+1]:0,o=i+2<t.length,c=o?t[i+2]:0,d=a>>2,h=(a&3)<<4|u>>4;let v=(u&15)<<2|c>>6,p=c&63;o||(p=64,s||(v=64)),n.push(r[d],r[h],r[v],r[p])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bs(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const a=r[t.charAt(i++)],u=i<t.length?r[t.charAt(i)]:0;++i;const c=i<t.length?r[t.charAt(i)]:64;++i;const h=i<t.length?r[t.charAt(i)]:64;if(++i,a==null||u==null||c==null||h==null)throw new Vs;const v=a<<2|u>>4;if(n.push(v),c!==64){const p=u<<4&240|c>>2;if(n.push(p),h!==64){const _=c<<6&192|h;n.push(_)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Vs extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $s=function(t){const e=Zn(t);return ei.encodeByteArray(e,!0)},ti=function(t){return $s(t).replace(/\./g,"")},ri=function(t){try{return ei.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ws(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hs=()=>Ws().__FIREBASE_DEFAULTS__,zs=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Qs=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ri(t[1]);return e&&JSON.parse(e)},Fr=()=>{try{return Hs()||zs()||Qs()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ks=t=>{var e,r;return(r=(e=Fr())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},ni=()=>{var t;return(t=Fr())===null||t===void 0?void 0:t.config},ii=t=>{var e;return(e=Fr())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Gs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Js(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function Ys(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Xs(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zs(){const t=fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eo(){try{return typeof indexedDB=="object"}catch{return!1}}function to(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(r){e(r)}})}/**
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
 */const ro="FirebaseError";class Qe extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=ro,Object.setPrototypeOf(this,Qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ct.prototype.create)}}class Ct{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,a=this.errors[e],s=a?no(a,n):"Error",u=`${this.serviceName}: ${s} (${i}).`;return new Qe(i,u,n)}}function no(t,e){return t.replace(io,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const io=/\{\$([^}]+)}/g;function ao(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yt(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const a=t[i],s=e[i];if(ai(a)&&ai(s)){if(!Yt(a,s))return!1}else if(a!==s)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function ai(t){return t!==null&&typeof t=="object"}/**
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
 */function At(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function so(t,e){const r=new oo(t,e);return r.subscribe.bind(r)}class oo{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");uo(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=jr),i.error===void 0&&(i.error=jr),i.complete===void 0&&(i.complete=jr);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uo(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function jr(){}/**
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
 */function Ke(t){return t&&t._delegate?t._delegate:t}class ft{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nt="[DEFAULT]";/**
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
 */class co{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new Gs;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fo(e))try{this.getOrInitializeService({instanceIdentifier:nt})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const a=this.getOrInitializeService({instanceIdentifier:i});n.resolve(a)}catch{}}}}clearInstance(e=nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nt){return this.instances.has(e)}getOptions(e=nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[a,s]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);n===u&&s.resolve(i)}return i}onInit(e,r){var n;const i=this.normalizeInstanceIdentifier(r),a=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;a.add(e),this.onInitCallbacks.set(i,a);const s=this.instances.get(i);return s&&e(s,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:lo(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=nt){return this.component?this.component.multipleInstances?e:nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lo(t){return t===nt?void 0:t}function fo(t){return t.instantiationMode==="EAGER"}/**
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
 */class ho{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new co(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const po={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},vo=re.INFO,mo={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},go=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=mo[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class si{constructor(e){this.name=e,this._logLevel=vo,this._logHandler=go,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?po[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const yo=(t,e)=>e.some(r=>t instanceof r);let oi,ui;function bo(){return oi||(oi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _o(){return ui||(ui=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ci=new WeakMap,qr=new WeakMap,li=new WeakMap,Br=new WeakMap,Vr=new WeakMap;function Io(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",s)},a=()=>{r(Ge(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",s)});return e.then(r=>{r instanceof IDBCursor&&ci.set(r,t)}).catch(()=>{}),Vr.set(e,t),e}function wo(t){if(qr.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",s),t.removeEventListener("abort",s)},a=()=>{r(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",s),t.addEventListener("abort",s)});qr.set(t,e)}let $r={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return qr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||li.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Ge(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Eo(t){$r=t($r)}function So(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(Wr(this),e,...r);return li.set(n,e.sort?e.sort():[e]),Ge(n)}:_o().includes(t)?function(...e){return t.apply(Wr(this),e),Ge(ci.get(this))}:function(...e){return Ge(t.apply(Wr(this),e))}}function To(t){return typeof t=="function"?So(t):(t instanceof IDBTransaction&&wo(t),yo(t,bo())?new Proxy(t,$r):t)}function Ge(t){if(t instanceof IDBRequest)return Io(t);if(Br.has(t))return Br.get(t);const e=To(t);return e!==t&&(Br.set(t,e),Vr.set(e,t)),e}const Wr=t=>Vr.get(t);function Oo(t,e,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){const s=indexedDB.open(t,e),u=Ge(s);return n&&s.addEventListener("upgradeneeded",o=>{n(Ge(s.result),o.oldVersion,o.newVersion,Ge(s.transaction),o)}),r&&s.addEventListener("blocked",o=>r(o.oldVersion,o.newVersion,o)),u.then(o=>{a&&o.addEventListener("close",()=>a()),i&&o.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),u}const Ro=["get","getKey","getAll","getAllKeys","count"],Po=["put","add","delete","clear"],Hr=new Map;function di(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hr.get(e))return Hr.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=Po.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Ro.includes(r)))return;const a=async function(s,...u){const o=this.transaction(s,i?"readwrite":"readonly");let c=o.store;return n&&(c=c.index(u.shift())),(await Promise.all([c[r](...u),i&&o.done]))[0]};return Hr.set(e,a),a}Eo(t=>({...t,get:(e,r,n)=>di(e,r)||t.get(e,r,n),has:(e,r)=>!!di(e,r)||t.has(e,r)}));/**
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
 */class Co{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Ao(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function Ao(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zr="@firebase/app",fi="0.9.19";/**
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
 */const it=new si("@firebase/app"),ko="@firebase/app-compat",No="@firebase/analytics-compat",Do="@firebase/analytics",xo="@firebase/app-check-compat",Mo="@firebase/app-check",Lo="@firebase/auth",Uo="@firebase/auth-compat",Fo="@firebase/database",jo="@firebase/database-compat",qo="@firebase/functions",Bo="@firebase/functions-compat",Vo="@firebase/installations",$o="@firebase/installations-compat",Wo="@firebase/messaging",Ho="@firebase/messaging-compat",zo="@firebase/performance",Qo="@firebase/performance-compat",Ko="@firebase/remote-config",Go="@firebase/remote-config-compat",Jo="@firebase/storage",Yo="@firebase/storage-compat",Xo="@firebase/firestore",Zo="@firebase/firestore-compat",eu="firebase",tu="10.4.0";/**
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
 */const Qr="[DEFAULT]",ru={[zr]:"fire-core",[ko]:"fire-core-compat",[Do]:"fire-analytics",[No]:"fire-analytics-compat",[Mo]:"fire-app-check",[xo]:"fire-app-check-compat",[Lo]:"fire-auth",[Uo]:"fire-auth-compat",[Fo]:"fire-rtdb",[jo]:"fire-rtdb-compat",[qo]:"fire-fn",[Bo]:"fire-fn-compat",[Vo]:"fire-iid",[$o]:"fire-iid-compat",[Wo]:"fire-fcm",[Ho]:"fire-fcm-compat",[zo]:"fire-perf",[Qo]:"fire-perf-compat",[Ko]:"fire-rc",[Go]:"fire-rc-compat",[Jo]:"fire-gcs",[Yo]:"fire-gcs-compat",[Xo]:"fire-fst",[Zo]:"fire-fst-compat","fire-js":"fire-js",[eu]:"fire-js-all"};/**
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
 */const Xt=new Map,Kr=new Map;function nu(t,e){try{t.container.addComponent(e)}catch(r){it.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function kt(t){const e=t.name;if(Kr.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;Kr.set(e,t);for(const r of Xt.values())nu(r,t);return!0}function hi(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const iu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Je=new Ct("app","Firebase",iu);/**
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
 */class au{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Je.create("app-deleted",{appName:this._name})}}/**
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
 */const Nt=tu;function pi(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Qr,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Je.create("bad-app-name",{appName:String(i)});if(r||(r=ni()),!r)throw Je.create("no-options");const a=Xt.get(i);if(a){if(Yt(r,a.options)&&Yt(n,a.config))return a;throw Je.create("duplicate-app",{appName:i})}const s=new ho(i);for(const o of Kr.values())s.addComponent(o);const u=new au(r,n,s);return Xt.set(i,u),u}function su(t=Qr){const e=Xt.get(t);if(!e&&t===Qr&&ni())return pi();if(!e)throw Je.create("no-app",{appName:t});return e}function ht(t,e,r){var n;let i=(n=ru[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const a=i.match(/\s|\//),s=e.match(/\s|\//);if(a||s){const u=[`Unable to register library "${i}" with version "${e}":`];a&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&u.push("and"),s&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(u.join(" "));return}kt(new ft(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ou="firebase-heartbeat-database",uu=1,Dt="firebase-heartbeat-store";let Gr=null;function vi(){return Gr||(Gr=Oo(ou,uu,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dt)}}}).catch(t=>{throw Je.create("idb-open",{originalErrorMessage:t.message})})),Gr}async function cu(t){try{return await(await vi()).transaction(Dt).objectStore(Dt).get(gi(t))}catch(e){if(e instanceof Qe)it.warn(e.message);else{const r=Je.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});it.warn(r.message)}}}async function mi(t,e){try{const n=(await vi()).transaction(Dt,"readwrite");await n.objectStore(Dt).put(e,gi(t)),await n.done}catch(r){if(r instanceof Qe)it.warn(r.message);else{const n=Je.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});it.warn(n.message)}}}function gi(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lu=1024,du=30*24*60*60*1e3;class fu{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new pu(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=yi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=du}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yi(),{heartbeatsToSend:r,unsentEntries:n}=hu(this._heartbeatsCache.heartbeats),i=ti(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function yi(){return new Date().toISOString().substring(0,10)}function hu(t,e=lu){const r=[];let n=t.slice();for(const i of t){const a=r.find(s=>s.agent===i.agent);if(a){if(a.dates.push(i.date),bi(r)>e){a.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),bi(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class pu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eo()?to().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return mi(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return mi(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bi(t){return ti(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vu(t){kt(new ft("platform-logger",e=>new Co(e),"PRIVATE")),kt(new ft("heartbeat",e=>new fu(e),"PRIVATE")),ht(zr,fi,t),ht(zr,fi,"esm2017"),ht("fire-js","")}vu("");function Jr(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}typeof SuppressedError=="function"&&SuppressedError;function _i(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mu=_i,Ii=new Ct("auth","Firebase",_i());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new si("@firebase/auth");function gu(t,...e){Zt.logLevel<=re.WARN&&Zt.warn(`Auth (${Nt}): ${t}`,...e)}function er(t,...e){Zt.logLevel<=re.ERROR&&Zt.error(`Auth (${Nt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t,...e){throw Yr(t,...e)}function Re(t,...e){return Yr(t,...e)}function wi(t,e,r){const n=Object.assign(Object.assign({},mu()),{[e]:r});return new Ct("auth","Firebase",n).create(e,{appName:t.name})}function yu(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&Oe(t,"argument-error"),wi(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yr(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return Ii.create(t,...e)}function B(t,e,...r){if(!t)throw Yr(e,...r)}function xe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw er(e),new Error(e)}function Me(t,e){t||xe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bu(){return Ei()==="http:"||Ei()==="https:"}function Ei(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bu()||Ys()||"connection"in navigator)?navigator.onLine:!0}function Iu(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,r){this.shortDelay=e,this.longDelay=r,Me(r>e,"Short delay should be less than long delay!"),this.isMobile=Js()||Xs()}get(){return _u()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t,e){Me(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new xt(3e4,6e4);function Ti(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mt(t,e,r,n,i={}){return Oi(t,i,async()=>{let a={},s={};n&&(e==="GET"?s=n:a={body:JSON.stringify(n)});const u=At(Object.assign({key:t.config.apiKey},s)).slice(1),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode),Si.fetch()(Ri(t,t.config.apiHost,r,u),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},a))})}async function Oi(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},wu),e);try{const i=new Tu(t),a=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const s=await a.json();if("needConfirmation"in s)throw tr(t,"account-exists-with-different-credential",s);if(a.ok&&!("errorMessage"in s))return s;{const u=a.ok?s.errorMessage:s.error.message,[o,c]=u.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw tr(t,"credential-already-in-use",s);if(o==="EMAIL_EXISTS")throw tr(t,"email-already-in-use",s);if(o==="USER_DISABLED")throw tr(t,"user-disabled",s);const d=n[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw wi(t,d,c);Oe(t,d)}}catch(i){if(i instanceof Qe)throw i;Oe(t,"network-request-failed",{message:String(i)})}}async function Su(t,e,r,n,i={}){const a=await Mt(t,e,r,n,i);return"mfaPendingCredential"in a&&Oe(t,"multi-factor-auth-required",{_serverResponse:a}),a}function Ri(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?Zr(t.config,i):`${t.config.apiScheme}://${i}`}class Tu{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(Re(this.auth,"network-request-failed")),Eu.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tr(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=Re(t,e,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ou(t,e){return Mt(t,"POST","/v1/accounts:delete",e)}async function Ru(t,e){return Mt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pu(t,e=!1){const r=Ke(t),n=await r.getIdToken(e),i=tn(n);B(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,s=a==null?void 0:a.sign_in_provider;return{claims:i,token:n,authTime:Lt(en(i.auth_time)),issuedAtTime:Lt(en(i.iat)),expirationTime:Lt(en(i.exp)),signInProvider:s||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function en(t){return Number(t)*1e3}function tn(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return er("JWT malformed, contained fewer than 3 sections"),null;try{const i=ri(r);return i?JSON.parse(i):(er("Failed to decode base64 JWT payload"),null)}catch(i){return er("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Cu(t){const e=tn(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof Qe&&Au(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function Au({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lt(this.lastLoginAt),this.creationTime=Lt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rr(t){var e;const r=t.auth,n=await t.getIdToken(),i=await Ut(t,Ru(r,{idToken:n}));B(i==null?void 0:i.users.length,r,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const s=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?xu(a.providerUserInfo):[],u=Du(t.providerData,s),o=t.isAnonymous,c=!(t.email&&a.passwordHash)&&!(u!=null&&u.length),d=o?c:!1,h={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new Pi(a.createdAt,a.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function Nu(t){const e=Ke(t);await rr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Du(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function xu(t){return t.map(e=>{var{providerId:r}=e,n=Jr(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mu(t,e){const r=await Oi(t,{},async()=>{const n=At({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,s=Ri(t,i,"/v1/token",`key=${a}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Si.fetch()(s,{method:"POST",headers:u,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:a}=await Mu(e,r);this.updateTokensAndExpiration(n,i,Number(a))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:a}=r,s=new Ft;return n&&(B(typeof n=="string","internal-error",{appName:e}),s.refreshToken=n),i&&(B(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),a&&(B(typeof a=="number","internal-error",{appName:e}),s.expirationTime=a),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ft,this.toJSON())}_performRefresh(){return xe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class at{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,a=Jr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ku(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Pi(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const r=await Ut(this,this.stsTokenManager.getToken(this.auth,e));return B(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return Pu(this,e)}reload(){return Nu(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new at(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await rr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ut(this,Ou(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,a,s,u,o,c,d;const h=(n=r.displayName)!==null&&n!==void 0?n:void 0,v=(i=r.email)!==null&&i!==void 0?i:void 0,p=(a=r.phoneNumber)!==null&&a!==void 0?a:void 0,_=(s=r.photoURL)!==null&&s!==void 0?s:void 0,w=(u=r.tenantId)!==null&&u!==void 0?u:void 0,S=(o=r._redirectEventId)!==null&&o!==void 0?o:void 0,R=(c=r.createdAt)!==null&&c!==void 0?c:void 0,E=(d=r.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:T,emailVerified:m,isAnonymous:b,providerData:f,stsTokenManager:g}=r;B(T&&g,e,"internal-error");const y=Ft.fromJSON(this.name,g);B(typeof T=="string",e,"internal-error"),Ye(h,e.name),Ye(v,e.name),B(typeof m=="boolean",e,"internal-error"),B(typeof b=="boolean",e,"internal-error"),Ye(p,e.name),Ye(_,e.name),Ye(w,e.name),Ye(S,e.name),Ye(R,e.name),Ye(E,e.name);const O=new at({uid:T,auth:e,email:v,emailVerified:m,displayName:h,isAnonymous:b,photoURL:_,phoneNumber:p,tenantId:w,stsTokenManager:y,createdAt:R,lastLoginAt:E});return f&&Array.isArray(f)&&(O.providerData=f.map(I=>Object.assign({},I))),S&&(O._redirectEventId=S),O}static async _fromIdTokenResponse(e,r,n=!1){const i=new Ft;i.updateFromServerResponse(r);const a=new at({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await rr(a),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Map;function Le(t){Me(t instanceof Function,"Expected a class definition");let e=Ci.get(t);return e?(Me(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ci.set(t,e),e)}/**
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
 */class Ai{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}Ai.type="NONE";const ki=Ai;/**
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
 */function nr(t,e,r){return`firebase:${t}:${e}:${r}`}class pt{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:a}=this.auth;this.fullUserKey=nr(this.userKey,i.apiKey,a),this.fullPersistenceKey=nr("persistence",i.apiKey,a),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?at._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new pt(Le(ki),e,n);const i=(await Promise.all(r.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let a=i[0]||Le(ki);const s=nr(n,e.config.apiKey,e.name);let u=null;for(const c of r)try{const d=await c._get(s);if(d){const h=at._fromJSON(e,d);c!==a&&(u=h),a=c;break}}catch{}const o=i.filter(c=>c._shouldAllowMigration);return!a._shouldAllowMigration||!o.length?new pt(a,e,n):(a=o[0],u&&await a._set(s,u.toJSON()),await Promise.all(r.map(async c=>{if(c!==a)try{await c._remove(s)}catch{}})),new pt(a,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Di(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ui(e))return"Blackberry";if(Fi(e))return"Webos";if(rn(e))return"Safari";if((e.includes("chrome/")||xi(e))&&!e.includes("edge/"))return"Chrome";if(Li(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Di(t=fe()){return/firefox\//i.test(t)}function rn(t=fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xi(t=fe()){return/crios\//i.test(t)}function Mi(t=fe()){return/iemobile/i.test(t)}function Li(t=fe()){return/android/i.test(t)}function Ui(t=fe()){return/blackberry/i.test(t)}function Fi(t=fe()){return/webos/i.test(t)}function ir(t=fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Lu(t=fe()){var e;return ir(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Uu(){return Zs()&&document.documentMode===10}function ji(t=fe()){return ir(t)||Li(t)||Fi(t)||Ui(t)||/windows phone/i.test(t)||Mi(t)}function Fu(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t,e=[]){let r;switch(t){case"Browser":r=Ni(fe());break;case"Worker":r=`${Ni(fe())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Nt}/${n}`}/**
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
 */class ju{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=a=>new Promise((s,u)=>{try{const o=e(a);s(o)}catch(o){u(o)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function qu(t,e={}){return Mt(t,"GET","/v2/passwordPolicy",Ti(t,e))}/**
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
 */const Bu=6;class Vu{constructor(e){var r,n,i,a;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=s.minPasswordLength)!==null&&r!==void 0?r:Bu,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,n,i,a,s,u;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=(r=o.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(n=o.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(i=o.containsLowercaseLetter)!==null&&i!==void 0?i:!0),o.isValid&&(o.isValid=(a=o.containsUppercaseLetter)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(s=o.containsNumericCharacter)!==null&&s!==void 0?s:!0),o.isValid&&(o.isValid=(u=o.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),o}validatePasswordLengthOptions(e,r){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=e.length>=n),i&&(r.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,r,n,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,r,n,i){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bi(this),this.idTokenSubscription=new Bi(this),this.beforeStateQueue=new ju(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ii,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Le(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await pt.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var r;const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,u=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===u)&&(o!=null&&o.user)&&(i=o.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await rr(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Iu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?Ke(e):null;return r&&B(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Le(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qu(this),r=new Vu(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ct("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},r)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Le(e)||this._popupRedirectResolver;B(r,this,"argument-error"),this.redirectPersistenceManager=await pt.create(this,[Le(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const a=typeof r=="function"?r:r.next.bind(r);let s=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(u,this,"internal-error"),u.then(()=>{s||a(this.currentUser)}),typeof r=="function"){const o=e.addObserver(r,n,i);return()=>{s=!0,o()}}else{const o=e.addObserver(r);return()=>{s=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&gu(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function jt(t){return Ke(t)}class Bi{constructor(e){this.auth=e,this.observer=null,this.addObserver=so(r=>this.observer=r)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Hu(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const a=Re("internal-error");a.customData=i,r(a)},n.type="text/javascript",n.charset="UTF-8",Wu().appendChild(n)})}function zu(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t,e){const r=hi(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),a=r.getOptions();if(Yt(a,e??{}))return i;Oe(i,"already-initialized")}return r.initialize({options:e})}function Ku(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Le);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Gu(t,e,r){const n=jt(t);B(n._canInitEmulator,n,"emulator-config-failed"),B(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(r!=null&&r.disableWarnings),a=Vi(e),{host:s,port:u}=Ju(e),o=u===null?"":`:${u}`;n.config.emulator={url:`${a}//${s}${o}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Yu()}function Vi(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ju(t){const e=Vi(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const a=i[1];return{host:a,port:$i(n.substr(a.length+1))}}else{const[a,s]=n.split(":");return{host:a,port:$i(s)}}}function $i(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Yu(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return xe("not implemented")}_getIdTokenResponse(e){return xe("not implemented")}_linkToIdToken(e,r){return xe("not implemented")}_getReauthenticationResolver(e){return xe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t,e){return Su(t,"POST","/v1/accounts:signInWithIdp",Ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="http://localhost";class Ue extends Wi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new Ue(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):Oe("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,a=Jr(r,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Ue(n,i);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}_getIdTokenResponse(e){const r=this.buildRequest();return vt(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,vt(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,vt(e,r)}buildRequest(){const e={requestUri:Xu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=At(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mt extends nn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class qt extends mt{static credentialFromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;return B("providerId"in r&&"signInMethod"in r,"argument-error"),Ue._fromParams(r)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return B(e.idToken||e.accessToken,"argument-error"),Ue._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return qt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return qt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:a,nonce:s,providerId:u}=e;if(!n&&!i&&!r&&!a||!u)return null;try{return new qt(u)._credential({idToken:r,accessToken:n,nonce:s,pendingToken:a})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends mt{constructor(){super("facebook.com")}static credential(e){return Ue._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch{return null}}}Fe.FACEBOOK_SIGN_IN_METHOD="facebook.com",Fe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends mt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return Ue._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return je.credential(r,n)}catch{return null}}}je.GOOGLE_SIGN_IN_METHOD="google.com",je.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends mt{constructor(){super("github.com")}static credential(e){return Ue._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qe.credential(e.oauthAccessToken)}catch{return null}}}qe.GITHUB_SIGN_IN_METHOD="github.com",qe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends mt{constructor(){super("twitter.com")}static credential(e,r){return Ue._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return Be.credential(r,n)}catch{return null}}}Be.TWITTER_SIGN_IN_METHOD="twitter.com",Be.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const a=await at._fromIdTokenResponse(e,n,i),s=Hi(n);return new gt({user:a,providerId:s,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=Hi(n);return new gt({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function Hi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Qe{constructor(e,r,n,i){var a;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ar.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new ar(e,r,n,i)}}function zi(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ar._fromErrorAndOperation(t,a,e,n):a})}async function Zu(t,e,r=!1){const n=await Ut(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return gt._forOperation(t,"link",n)}/**
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
 */async function ec(t,e,r=!1){const{auth:n}=t,i="reauthenticate";try{const a=await Ut(t,zi(n,i,e,t),r);B(a.idToken,n,"internal-error");const s=tn(a.idToken);B(s,n,"internal-error");const{sub:u}=s;return B(t.uid===u,n,"user-mismatch"),gt._forOperation(t,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Oe(n,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tc(t,e,r=!1){const n="signIn",i=await zi(t,n,e),a=await gt._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(a.user),a}function rc(t,e,r,n){return Ke(t).onIdTokenChanged(e,r,n)}function nc(t,e,r){return Ke(t).beforeAuthStateChanged(e,r)}function ic(t,e,r,n){return Ke(t).onAuthStateChanged(e,r,n)}function Qi(t){return Ke(t).signOut()}const sr="__sak";/**
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
 */class Ki{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(sr,"1"),this.storage.removeItem(sr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(){const t=fe();return rn(t)||ir(t)}const sc=1e3,oc=10;class Gi extends Ki{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ac()&&Fu(),this.fallbackToPolling=ji(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((s,u,o)=>{this.notifyListeners(s,o)});return}const n=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!r)return}const i=()=>{const s=this.storage.getItem(n);!r&&this.localCache[n]===s||this.notifyListeners(n,s)},a=this.storage.getItem(n);Uu()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oc):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},sc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gi.type="LOCAL";const uc=Gi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends Ki{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}Ji.type="SESSION";const Yi=Ji;/**
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
 */function cc(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class or{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new or(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:a}=r.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const u=Array.from(s).map(async c=>c(r.origin,a)),o=await cc(u);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:o})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}or.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class lc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,s;return new Promise((u,o)=>{const c=an("",20);i.port1.start();const d=setTimeout(()=>{o(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(h){const v=h;if(v.data.eventId===c)switch(v.data.status){case"ack":clearTimeout(d),a=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(v.data.response);break;default:clearTimeout(d),clearTimeout(a),o(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:r},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return window}function dc(t){Pe().location.href=t}/**
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
 */function Xi(){return typeof Pe().WorkerGlobalScope<"u"&&typeof Pe().importScripts=="function"}async function fc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hc(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pc(){return Xi()?self:null}/**
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
 */const Zi="firebaseLocalStorageDb",vc=1,ur="firebaseLocalStorage",ea="fbase_key";class Bt{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function cr(t,e){return t.transaction([ur],e?"readwrite":"readonly").objectStore(ur)}function mc(){const t=indexedDB.deleteDatabase(Zi);return new Bt(t).toPromise()}function sn(){const t=indexedDB.open(Zi,vc);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(ur,{keyPath:ea})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(ur)?e(n):(n.close(),await mc(),e(await sn()))})})}async function ta(t,e,r){const n=cr(t,!0).put({[ea]:e,value:r});return new Bt(n).toPromise()}async function gc(t,e){const r=cr(t,!1).get(e),n=await new Bt(r).toPromise();return n===void 0?null:n.value}function ra(t,e){const r=cr(t,!0).delete(e);return new Bt(r).toPromise()}const yc=800,bc=3;class na{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sn(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>bc)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=or._getInstance(pc()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await fc(),!this.activeServiceWorker)return;this.sender=new lc(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sn();return await ta(e,sr,"1"),await ra(e,sr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>ta(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>gc(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>ra(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=cr(i,!1).getAll();return new Bt(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;for(const{fbase_key:i,value:a}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}na.type="LOCAL";const _c=na;new xt(3e4,6e4);/**
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
 */function ia(t,e){return e?Le(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class on extends Wi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vt(e,this._buildIdpRequest())}_linkToIdToken(e,r){return vt(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return vt(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Ic(t){return tc(t.auth,new on(t),t.bypassAuthState)}function wc(t){const{auth:e,user:r}=t;return B(r,e,"internal-error"),ec(r,new on(t),t.bypassAuthState)}async function Ec(t){const{auth:e,user:r}=t;return B(r,e,"internal-error"),Zu(r,new on(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,r,n,i,a=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:a,error:s,type:u}=e;if(s){this.reject(s);return}const o={auth:this.auth,requestUri:r,sessionId:n,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(o))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ic;case"linkViaPopup":case"linkViaRedirect":return Ec;case"reauthViaPopup":case"reauthViaRedirect":return wc;default:Oe(this.auth,"internal-error")}}resolve(e){Me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=new xt(2e3,1e4);class yt extends aa{constructor(e,r,n,i,a){super(e,r,i,a),this.provider=n,this.authWindow=null,this.pollId=null,yt.currentPopupAction&&yt.currentPopupAction.cancel(),yt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Me(this.filter.length===1,"Popup operations only handle one event");const e=an();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Re(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sc.get())};e()}}yt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="pendingRedirect",lr=new Map;class Oc extends aa{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=lr.get(this.auth._key());if(!e){try{const n=await Rc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}lr.set(this.auth._key(),e)}return this.bypassAuthState||lr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rc(t,e){const r=oa(e),n=sa(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}async function Pc(t,e){return sa(t)._set(oa(e),"true")}function Cc(t,e){lr.set(t._key(),e)}function sa(t){return Le(t._redirectPersistence)}function oa(t){return nr(Tc,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e,r){return Ac(t,e,r)}async function Ac(t,e,r){const n=jt(t);yu(t,e,nn),await n._initializationPromise;const i=ia(n,r);return await Pc(i,n),i._openRedirect(n,e,"signInViaRedirect")}async function kc(t,e){return await jt(t)._initializationPromise,ua(t,e,!1)}async function ua(t,e,r=!1){const n=jt(t),i=ia(n,e),s=await new Oc(n,i,r).execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=10*60*1e3;class Dc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xc(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!la(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(Re(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Nc&&this.cachedEventUids.clear(),this.cachedEventUids.has(ca(e))}saveEventToCache(e){this.cachedEventUids.add(ca(e)),this.lastProcessedEventTime=Date.now()}}function ca(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function la({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return la(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mc(t,e={}){return Mt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Uc=/^https?/;async function Fc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mc(t);for(const r of e)try{if(jc(r))return}catch{}Oe(t,"unauthorized-domain")}function jc(t){const e=Xr(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&s.hostname===n}if(!Uc.test(r))return!1;if(Lc.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const qc=new xt(3e4,6e4);function da(){const t=Pe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function Bc(t){return new Promise((e,r)=>{var n,i,a;function s(){da(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{da(),r(Re(t,"network-request-failed"))},timeout:qc.get()})}if(!((i=(n=Pe().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=Pe().gapi)===null||a===void 0)&&a.load)s();else{const u=zu("iframefcb");return Pe()[u]=()=>{gapi.load?s():r(Re(t,"network-request-failed"))},Hu(`https://apis.google.com/js/api.js?onload=${u}`).catch(o=>r(o))}}).catch(e=>{throw dr=null,e})}let dr=null;function Vc(t){return dr=dr||Bc(t),dr}/**
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
 */const $c=new xt(5e3,15e3),Wc="__/auth/iframe",Hc="emulator/auth/iframe",zc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kc(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Zr(e,Hc):`https://${t.config.authDomain}/${Wc}`,n={apiKey:e.apiKey,appName:t.name,v:Nt},i=Qc.get(t.config.apiHost);i&&(n.eid=i);const a=t._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${At(n).slice(1)}`}async function Gc(t){const e=await Vc(t),r=Pe().gapi;return B(r,t,"internal-error"),e.open({where:document.body,url:Kc(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zc,dontclear:!0},n=>new Promise(async(i,a)=>{await n.restyle({setHideOnLeave:!1});const s=Re(t,"network-request-failed"),u=Pe().setTimeout(()=>{a(s)},$c.get());function o(){Pe().clearTimeout(u),i(n)}n.ping(o).then(o,()=>{a(s)})}))}/**
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
 */const Jc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yc=500,Xc=600,Zc="_blank",el="http://localhost";class fa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tl(t,e,r,n=Yc,i=Xc){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let u="";const o=Object.assign(Object.assign({},Jc),{width:n.toString(),height:i.toString(),top:a,left:s}),c=fe().toLowerCase();r&&(u=xi(c)?Zc:r),Di(c)&&(e=e||el,o.scrollbars="yes");const d=Object.entries(o).reduce((v,[p,_])=>`${v}${p}=${_},`,"");if(Lu(c)&&u!=="_self")return rl(e||"",u),new fa(null);const h=window.open(e||"",u,d);B(h,t,"popup-blocked");try{h.focus()}catch{}return new fa(h)}function rl(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const nl="__/auth/handler",il="emulator/auth/handler",al=encodeURIComponent("fac");async function ha(t,e,r,n,i,a){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:Nt,eventId:i};if(e instanceof nn){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",ao(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(a||{}))s[d]=h}if(e instanceof mt){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const u=s;for(const d of Object.keys(u))u[d]===void 0&&delete u[d];const o=await t._getAppCheckToken(),c=o?`#${al}=${encodeURIComponent(o)}`:"";return`${sl(t)}?${At(u).slice(1)}${c}`}function sl({config:t}){return t.emulator?Zr(t,il):`https://${t.authDomain}/${nl}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="webStorageSupport";class ol{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yi,this._completeRedirectFn=ua,this._overrideRedirectResult=Cc}async _openPopup(e,r,n,i){var a;Me((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await ha(e,r,n,Xr(),i);return tl(e,s,an())}async _openRedirect(e,r,n,i){await this._originValidation(e);const a=await ha(e,r,n,Xr(),i);return dc(a),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:a}=this.eventManagers[r];return i?Promise.resolve(i):(Me(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await Gc(e),n=new Dc(e);return r.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(un,{type:un},i=>{var a;const s=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[un];s!==void 0&&r(!!s),Oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Fc(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return ji()||rn()||ir()}}const ul=ol;var pa="@firebase/auth",va="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function dl(t){kt(new ft("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:s,authDomain:u}=n.options;B(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:s,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qi(t)},c=new $u(n,i,a,o);return Ku(c,r),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),kt(new ft("auth-internal",e=>{const r=jt(e.getProvider("auth").getImmediate());return(n=>new cl(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),ht(pa,va,ll(t)),ht(pa,va,"esm2017")}/**
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
 */const fl=5*60,hl=ii("authIdTokenMaxAge")||fl;let ma=null;const pl=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>hl)return;const i=r==null?void 0:r.token;ma!==i&&(ma=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vl(t=su()){const e=hi(t,"auth");if(e.isInitialized())return e.getImmediate();const r=Qu(t,{popupRedirectResolver:ul,persistence:[_c,uc,Yi]}),n=ii("authTokenSyncURL");if(n){const a=pl(n);nc(r,a,()=>a(r.currentUser)),rc(r,s=>a(s))}const i=Ks("auth");return i&&Gu(r,`http://${i}`),r}dl("Browser");var ml="firebase",gl="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht(ml,gl,"app");const ga={language:"en",firebaseConfig:{},endpoint:"http://127.0.0.1:8000/api/auth/",keyword:"TSESSION",refreshTokenHeader:"Authorization",acceptUsername:!1,bodyAsBase64:!1,signInMethods:["google"]};let te={...ga};const yl=t=>{te={...ga,...t}},bl=()=>Object.keys(te.firebaseConfig).length!==0,Ve=()=>{const t=pi(te.firebaseConfig);return vl(t)},ya=new je;ya.setCustomParameters({prompt:"select_account"});const ba=new Fe;ba.addScope("public_profile");const _l=new Be,Il=new qe,wl=new qt("microsoft.com").setCustomParameters({prompt:"consent",login_hint:"user@firstadd.onmicrosoft.com",tenant:"1bd1e0fb-f970-45f0-a49d-e80107b0e6f3"});function oe(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];if(process.env.NODE_ENV!=="production"){var i=Nl[t],a=i?typeof i=="function"?i.apply(null,r):i:"unknown error nr: "+t;throw Error("[Immer] "+a)}throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(s){return"'"+s+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function $e(t){return!!t&&!!t[me]}function We(t){var e;return!!t&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Dl}(t)||Array.isArray(t)||!!t[Wt]||!!(!((e=t.constructor)===null||e===void 0)&&e[Wt])||hr(t)||pr(t))}function El(t){return $e(t)||oe(23,t),t[me].t}function bt(t,e,r){r===void 0&&(r=!1),Xe(t)===0?(r?Object.keys:In)(t).forEach(function(n){r&&typeof n=="symbol"||e(n,t[n],t)}):t.forEach(function(n,i){return e(i,n,t)})}function Xe(t){var e=t[me];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:hr(t)?2:pr(t)?3:0}function $t(t,e){return Xe(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function fr(t,e){return Xe(t)===2?t.get(e):t[e]}function _a(t,e,r){var n=Xe(t);n===2?t.set(e,r):n===3?t.add(r):t[e]=r}function Sl(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function hr(t){return Al&&t instanceof Map}function pr(t){return kl&&t instanceof Set}function st(t){return t.o||t.t}function cn(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=xl(t);delete e[me];for(var r=In(e),n=0;n<r.length;n++){var i=r[n],a=e[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(e[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function ln(t,e){return e===void 0&&(e=!1),dn(t)||$e(t)||!We(t)||(Xe(t)>1&&(t.set=t.add=t.clear=t.delete=Tl),Object.freeze(t),e&&bt(t,function(r,n){return ln(n,!0)},!0)),t}function Tl(){oe(2)}function dn(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Ce(t){var e=wn[t];return e||oe(18,t),e}function Ol(t,e){wn[t]||(wn[t]=e)}function Ia(){return process.env.NODE_ENV==="production"||_t||oe(0),_t}function fn(t,e){e&&(Ce("Patches"),t.u=[],t.s=[],t.v=e)}function vr(t){hn(t),t.p.forEach(Rl),t.p=null}function hn(t){t===_t&&(_t=t.l)}function wa(t){return _t={p:[],l:_t,h:t,m:!0,_:0}}function Rl(t){var e=t[me];e.i===0||e.i===1?e.j():e.g=!0}function pn(t,e){e._=e.p.length;var r=e.p[0],n=t!==void 0&&t!==r;return e.h.O||Ce("ES5").S(e,t,n),n?(r[me].P&&(vr(e),oe(4)),We(t)&&(t=mr(e,t),e.l||gr(e,t)),e.u&&Ce("Patches").M(r[me].t,t,e.u,e.s)):t=mr(e,r,[]),vr(e),e.u&&e.v(e.u,e.s),t!==_n?t:void 0}function mr(t,e,r){if(dn(e))return e;var n=e[me];if(!n)return bt(e,function(u,o){return Ea(t,n,e,u,o,r)},!0),e;if(n.A!==t)return e;if(!n.P)return gr(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=n.i===4||n.i===5?n.o=cn(n.k):n.o,a=i,s=!1;n.i===3&&(a=new Set(i),i.clear(),s=!0),bt(a,function(u,o){return Ea(t,n,i,u,o,r,s)}),gr(t,i,!1),r&&t.u&&Ce("Patches").N(n,r,t.u,t.s)}return n.o}function Ea(t,e,r,n,i,a,s){if(process.env.NODE_ENV!=="production"&&i===r&&oe(5),$e(i)){var u=mr(t,i,a&&e&&e.i!==3&&!$t(e.R,n)?a.concat(n):void 0);if(_a(r,n,u),!$e(u))return;t.m=!1}else s&&r.add(i);if(We(i)&&!dn(i)){if(!t.h.D&&t._<1)return;mr(t,i),e&&e.A.l||gr(t,i)}}function gr(t,e,r){r===void 0&&(r=!1),!t.l&&t.h.D&&t.m&&ln(e,r)}function vn(t,e){var r=t[me];return(r?st(r):t)[e]}function Sa(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function mn(t){t.P||(t.P=!0,t.l&&mn(t.l))}function gn(t){t.o||(t.o=cn(t.t))}function yn(t,e,r){var n=hr(e)?Ce("MapSet").F(e,r):pr(e)?Ce("MapSet").T(e,r):t.O?function(i,a){var s=Array.isArray(i),u={i:s?1:0,A:a?a.A:Ia(),P:!1,I:!1,R:{},l:a,t:i,k:null,o:null,j:null,C:!1},o=u,c=En;s&&(o=[u],c=Ht);var d=Proxy.revocable(o,c),h=d.revoke,v=d.proxy;return u.k=v,u.j=h,v}(e,r):Ce("ES5").J(e,r);return(r?r.A:Ia()).p.push(n),n}function Pl(t){return $e(t)||oe(22,t),function e(r){if(!We(r))return r;var n,i=r[me],a=Xe(r);if(i){if(!i.P&&(i.i<4||!Ce("ES5").K(i)))return i.t;i.I=!0,n=Ta(r,a),i.I=!1}else n=Ta(r,a);return bt(n,function(s,u){i&&fr(i.t,s)===u||_a(n,s,e(u))}),a===3?new Set(n):n}(t)}function Ta(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return cn(t)}function Cl(){function t(n){if(!We(n))return n;if(Array.isArray(n))return n.map(t);if(hr(n))return new Map(Array.from(n.entries()).map(function(s){return[s[0],t(s[1])]}));if(pr(n))return new Set(Array.from(n).map(t));var i=Object.create(Object.getPrototypeOf(n));for(var a in n)i[a]=t(n[a]);return $t(n,Wt)&&(i[Wt]=n[Wt]),i}function e(n){return $e(n)?t(n):n}var r="add";Ol("Patches",{$:function(n,i){return i.forEach(function(a){for(var s=a.path,u=a.op,o=n,c=0;c<s.length-1;c++){var d=Xe(o),h=s[c];typeof h!="string"&&typeof h!="number"&&(h=""+h),d!==0&&d!==1||h!=="__proto__"&&h!=="constructor"||oe(24),typeof o=="function"&&h==="prototype"&&oe(24),typeof(o=fr(o,h))!="object"&&oe(15,s.join("/"))}var v=Xe(o),p=t(a.value),_=s[s.length-1];switch(u){case"replace":switch(v){case 2:return o.set(_,p);case 3:oe(16);default:return o[_]=p}case r:switch(v){case 1:return _==="-"?o.push(p):o.splice(_,0,p);case 2:return o.set(_,p);case 3:return o.add(p);default:return o[_]=p}case"remove":switch(v){case 1:return o.splice(_,1);case 2:return o.delete(_);case 3:return o.delete(a.value);default:return delete o[_]}default:oe(17,u)}}),n},N:function(n,i,a,s){switch(n.i){case 0:case 4:case 2:return function(u,o,c,d){var h=u.t,v=u.o;bt(u.R,function(p,_){var w=fr(h,p),S=fr(v,p),R=_?$t(h,p)?"replace":r:"remove";if(w!==S||R!=="replace"){var E=o.concat(p);c.push(R==="remove"?{op:R,path:E}:{op:R,path:E,value:S}),d.push(R===r?{op:"remove",path:E}:R==="remove"?{op:r,path:E,value:e(w)}:{op:"replace",path:E,value:e(w)})}})}(n,i,a,s);case 5:case 1:return function(u,o,c,d){var h=u.t,v=u.R,p=u.o;if(p.length<h.length){var _=[p,h];h=_[0],p=_[1];var w=[d,c];c=w[0],d=w[1]}for(var S=0;S<h.length;S++)if(v[S]&&p[S]!==h[S]){var R=o.concat([S]);c.push({op:"replace",path:R,value:e(p[S])}),d.push({op:"replace",path:R,value:e(h[S])})}for(var E=h.length;E<p.length;E++){var T=o.concat([E]);c.push({op:r,path:T,value:e(p[E])})}h.length<p.length&&d.push({op:"replace",path:o.concat(["length"]),value:h.length})}(n,i,a,s);case 3:return function(u,o,c,d){var h=u.t,v=u.o,p=0;h.forEach(function(_){if(!v.has(_)){var w=o.concat([p]);c.push({op:"remove",path:w,value:_}),d.unshift({op:r,path:w,value:_})}p++}),p=0,v.forEach(function(_){if(!h.has(_)){var w=o.concat([p]);c.push({op:r,path:w,value:_}),d.unshift({op:"remove",path:w,value:_})}p++})}(n,i,a,s)}},M:function(n,i,a,s){a.push({op:"replace",path:[],value:i===_n?void 0:i}),s.push({op:"replace",path:[],value:n})}})}var Oa,_t,bn=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Al=typeof Map<"u",kl=typeof Set<"u",Ra=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",_n=bn?Symbol.for("immer-nothing"):((Oa={})["immer-nothing"]=!0,Oa),Wt=bn?Symbol.for("immer-draftable"):"__$immer_draftable",me=bn?Symbol.for("immer-state"):"__$immer_state",Nl={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(t){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+t},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(t){return"Cannot apply patch, path doesn't resolve: "+t},16:'Sets cannot have "replace" patches.',17:function(t){return"Unsupported patch operation: "+t},18:function(t){return"The plugin for '"+t+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+t+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(t){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+t+"'"},22:function(t){return"'current' expects a draft, got: "+t},23:function(t){return"'original' expects a draft, got: "+t},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Dl=""+Object.prototype.constructor,In=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,xl=Object.getOwnPropertyDescriptors||function(t){var e={};return In(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},wn={},En={get:function(t,e){if(e===me)return t;var r=st(t);if(!$t(r,e))return function(i,a,s){var u,o=Sa(a,s);return o?"value"in o?o.value:(u=o.get)===null||u===void 0?void 0:u.call(i.k):void 0}(t,r,e);var n=r[e];return t.I||!We(n)?n:n===vn(t.t,e)?(gn(t),t.o[e]=yn(t.A.h,n,t)):n},has:function(t,e){return e in st(t)},ownKeys:function(t){return Reflect.ownKeys(st(t))},set:function(t,e,r){var n=Sa(st(t),e);if(n!=null&&n.set)return n.set.call(t.k,r),!0;if(!t.P){var i=vn(st(t),e),a=i==null?void 0:i[me];if(a&&a.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(Sl(r,i)&&(r!==void 0||$t(t.t,e)))return!0;gn(t),mn(t)}return t.o[e]===r&&(r!==void 0||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return vn(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,gn(t),mn(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=st(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:n.enumerable,value:r[e]}},defineProperty:function(){oe(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){oe(12)}},Ht={};bt(En,function(t,e){Ht[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Ht.deleteProperty=function(t,e){return process.env.NODE_ENV!=="production"&&isNaN(parseInt(e))&&oe(13),Ht.set.call(this,t,e,void 0)},Ht.set=function(t,e,r){return process.env.NODE_ENV!=="production"&&e!=="length"&&isNaN(parseInt(e))&&oe(14),En.set.call(this,t[0],e,r,t[0])};var Ml=function(){function t(r){var n=this;this.O=Ra,this.D=!0,this.produce=function(i,a,s){if(typeof i=="function"&&typeof a!="function"){var u=a;a=i;var o=n;return function(w){var S=this;w===void 0&&(w=u);for(var R=arguments.length,E=Array(R>1?R-1:0),T=1;T<R;T++)E[T-1]=arguments[T];return o.produce(w,function(m){var b;return(b=a).call.apply(b,[S,m].concat(E))})}}var c;if(typeof a!="function"&&oe(6),s!==void 0&&typeof s!="function"&&oe(7),We(i)){var d=wa(n),h=yn(n,i,void 0),v=!0;try{c=a(h),v=!1}finally{v?vr(d):hn(d)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(w){return fn(d,s),pn(w,d)},function(w){throw vr(d),w}):(fn(d,s),pn(c,d))}if(!i||typeof i!="object"){if((c=a(i))===void 0&&(c=i),c===_n&&(c=void 0),n.D&&ln(c,!0),s){var p=[],_=[];Ce("Patches").M(i,c,p,_),s(p,_)}return c}oe(21,i)},this.produceWithPatches=function(i,a){if(typeof i=="function")return function(c){for(var d=arguments.length,h=Array(d>1?d-1:0),v=1;v<d;v++)h[v-1]=arguments[v];return n.produceWithPatches(c,function(p){return i.apply(void 0,[p].concat(h))})};var s,u,o=n.produce(i,a,function(c,d){s=c,u=d});return typeof Promise<"u"&&o instanceof Promise?o.then(function(c){return[c,s,u]}):[o,s,u]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var e=t.prototype;return e.createDraft=function(r){We(r)||oe(8),$e(r)&&(r=Pl(r));var n=wa(this),i=yn(this,r,void 0);return i[me].C=!0,hn(n),i},e.finishDraft=function(r,n){var i=r&&r[me];process.env.NODE_ENV!=="production"&&(i&&i.C||oe(9),i.I&&oe(10));var a=i.A;return fn(a,n),pn(void 0,a)},e.setAutoFreeze=function(r){this.D=r},e.setUseProxies=function(r){r&&!Ra&&oe(20),this.O=r},e.applyPatches=function(r,n){var i;for(i=n.length-1;i>=0;i--){var a=n[i];if(a.path.length===0&&a.op==="replace"){r=a.value;break}}i>-1&&(n=n.slice(i+1));var s=Ce("Patches").$;return $e(r)?s(r,n):this.produce(r,function(u){return s(u,n)})},t}(),be=new Ml;be.produce;var Pa=be.produceWithPatches.bind(be);be.setAutoFreeze.bind(be),be.setUseProxies.bind(be);var Ca=be.applyPatches.bind(be);be.createDraft.bind(be),be.finishDraft.bind(be);var yr="NOT_FOUND";function Ll(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:yr},put:function(n,i){e={key:n,value:i}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}function Ul(t,e){var r=[];function n(u){var o=r.findIndex(function(d){return e(u,d.key)});if(o>-1){var c=r[o];return o>0&&(r.splice(o,1),r.unshift(c)),c.value}return yr}function i(u,o){n(u)===yr&&(r.unshift({key:u,value:o}),r.length>t&&r.pop())}function a(){return r}function s(){r=[]}return{get:n,put:i,getEntries:a,clear:s}}var Fl=function(e,r){return e===r};function jl(t){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var i=r.length,a=0;a<i;a++)if(!t(r[a],n[a]))return!1;return!0}}function Aa(t,e){var r=typeof e=="object"?e:{equalityCheck:e},n=r.equalityCheck,i=n===void 0?Fl:n,a=r.maxSize,s=a===void 0?1:a,u=r.resultEqualityCheck,o=jl(i),c=s===1?Ll(o):Ul(s,o);function d(){var h=c.get(arguments);if(h===yr){if(h=t.apply(null,arguments),u){var v=c.getEntries(),p=v.find(function(_){return u(_.value,h)});p&&(h=p.value)}c.put(arguments,h)}return h}return d.clearCache=function(){return c.clear()},d}var br=globalThis&&globalThis.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(c){return function(d){return o([c,d])}}function o(c){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=c[0]&2?i.return:c[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,c[1])).done)return a;switch(i=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,i=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){r.label=c[1];break}if(c[0]===6&&r.label<a[1]){r.label=a[1],a=c;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(c);break}a[2]&&r.ops.pop(),r.trys.pop();continue}c=e.call(t,r)}catch(d){c=[6,d],i=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},_r=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t},ql=Object.defineProperty,Bl=Object.defineProperties,Vl=Object.getOwnPropertyDescriptors,Ir=Object.getOwnPropertySymbols,ka=Object.prototype.hasOwnProperty,Na=Object.prototype.propertyIsEnumerable,Da=function(t,e,r){return e in t?ql(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},ue=function(t,e){for(var r in e||(e={}))ka.call(e,r)&&Da(t,r,e[r]);if(Ir)for(var n=0,i=Ir(e);n<i.length;n++){var r=i[n];Na.call(e,r)&&Da(t,r,e[r])}return t},Ae=function(t,e){return Bl(t,Vl(e))},xa=function(t,e){var r={};for(var n in t)ka.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&Ir)for(var i=0,a=Ir(t);i<a.length;i++){var n=a[i];e.indexOf(n)<0&&Na.call(t,n)&&(r[n]=t[n])}return r},wr=function(t,e,r){return new Promise(function(n,i){var a=function(o){try{u(r.next(o))}catch(c){i(c)}},s=function(o){try{u(r.throw(o))}catch(c){i(c)}},u=function(o){return o.done?n(o.value):Promise.resolve(o.value).then(a,s)};u((r=r.apply(t,e)).next())})},ae;(function(t){t.uninitialized="uninitialized",t.pending="pending",t.fulfilled="fulfilled",t.rejected="rejected"})(ae||(ae={}));function $l(t){return{status:t,isUninitialized:t===ae.uninitialized,isLoading:t===ae.pending,isSuccess:t===ae.fulfilled,isError:t===ae.rejected}}function Wl(t){return new RegExp("(^|:)//").test(t)}var Hl=function(t){return t.replace(/\/$/,"")},zl=function(t){return t.replace(/^\//,"")};function Ql(t,e){if(!t)return e;if(!e)return t;if(Wl(e))return e;var r=t.endsWith("/")||!e.startsWith("?")?"/":"";return t=Hl(t),e=zl(e),""+t+r+e}var Ma=function(t){return[].concat.apply([],t)};function Kl(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}function Gl(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}var La=L.isPlainObject;function Ua(t,e){if(t===e||!(La(t)&&La(e)||Array.isArray(t)&&Array.isArray(e)))return e;for(var r=Object.keys(e),n=Object.keys(t),i=r.length===n.length,a=Array.isArray(e)?[]:{},s=0,u=r;s<u.length;s++){var o=u[s];a[o]=Ua(t[o],e[o]),i&&(i=t[o]===a[o])}return i?t:a}var Fa=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return fetch.apply(void 0,t)},Jl=function(t){return t.status>=200&&t.status<=299},Yl=function(t){return/ion\/(vnd\.api\+)?json/.test(t.get("content-type")||"")};function ja(t){if(!L.isPlainObject(t))return t;for(var e=ue({},t),r=0,n=Object.entries(e);r<n.length;r++){var i=n[r],a=i[0],s=i[1];s===void 0&&delete e[a]}return e}function Xl(t){var e=this;t===void 0&&(t={});var r=t,n=r.baseUrl,i=r.prepareHeaders,a=i===void 0?function(T){return T}:i,s=r.fetchFn,u=s===void 0?Fa:s,o=r.paramsSerializer,c=r.isJsonContentType,d=c===void 0?Yl:c,h=r.jsonContentType,v=h===void 0?"application/json":h,p=r.jsonReplacer,_=r.timeout,w=r.responseHandler,S=r.validateStatus,R=xa(r,["baseUrl","prepareHeaders","fetchFn","paramsSerializer","isJsonContentType","jsonContentType","jsonReplacer","timeout","responseHandler","validateStatus"]);return typeof fetch>"u"&&u===Fa&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),function(T,m){return wr(e,null,function(){var b,f,g,y,O,I,P,A,C,N,x,q,F,j,K,H,z,Y,W,X,Q,Z,se,ge,we,Ee,_e,he,ie,Ne,lt,tt,dt,St,rt,Mr;return br(this,function(Se){switch(Se.label){case 0:return b=m.signal,f=m.getState,g=m.extra,y=m.endpoint,O=m.forced,I=m.type,A=typeof T=="string"?{url:T}:T,C=A.url,N=A.headers,x=N===void 0?new Headers(R.headers):N,q=A.params,F=q===void 0?void 0:q,j=A.responseHandler,K=j===void 0?w??"json":j,H=A.validateStatus,z=H===void 0?S??Jl:H,Y=A.timeout,W=Y===void 0?_:Y,X=xa(A,["url","headers","params","responseHandler","validateStatus","timeout"]),Q=ue(Ae(ue({},R),{signal:b}),X),x=new Headers(ja(x)),Z=Q,[4,a(x,{getState:f,extra:g,endpoint:y,forced:O,type:I})];case 1:Z.headers=Se.sent()||x,se=function(ye){return typeof ye=="object"&&(L.isPlainObject(ye)||Array.isArray(ye)||typeof ye.toJSON=="function")},!Q.headers.has("content-type")&&se(Q.body)&&Q.headers.set("content-type",v),se(Q.body)&&d(Q.headers)&&(Q.body=JSON.stringify(Q.body,p)),F&&(ge=~C.indexOf("?")?"&":"?",we=o?o(F):new URLSearchParams(ja(F)),C+=ge+we),C=Ql(n,C),Ee=new Request(C,Q),_e=new Request(C,Q),P={request:_e},ie=!1,Ne=W&&setTimeout(function(){ie=!0,m.abort()},W),Se.label=2;case 2:return Se.trys.push([2,4,5,6]),[4,u(Ee)];case 3:return he=Se.sent(),[3,6];case 4:return lt=Se.sent(),[2,{error:{status:ie?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(lt)},meta:P}];case 5:return Ne&&clearTimeout(Ne),[7];case 6:tt=he.clone(),P.response=tt,St="",Se.label=7;case 7:return Se.trys.push([7,9,,10]),[4,Promise.all([E(he,K).then(function(ye){return dt=ye},function(ye){return rt=ye}),tt.text().then(function(ye){return St=ye},function(){})])];case 8:if(Se.sent(),rt)throw rt;return[3,10];case 9:return Mr=Se.sent(),[2,{error:{status:"PARSING_ERROR",originalStatus:he.status,data:St,error:String(Mr)},meta:P}];case 10:return[2,z(he,dt)?{data:dt,meta:P}:{error:{status:he.status,data:dt},meta:P}]}})})};function E(T,m){return wr(this,null,function(){var b;return br(this,function(f){switch(f.label){case 0:return typeof m=="function"?[2,m(T)]:(m==="content-type"&&(m=d(T.headers)?"json":"text"),m!=="json"?[3,2]:[4,T.text()]);case 1:return b=f.sent(),[2,b.length?JSON.parse(b):null];case 2:return[2,T.text()]}})})}}var qa=function(){function t(e,r){r===void 0&&(r=void 0),this.value=e,this.meta=r}return t}(),Sn=L.createAction("__rtkq/focused"),Ba=L.createAction("__rtkq/unfocused"),Tn=L.createAction("__rtkq/online"),Va=L.createAction("__rtkq/offline"),ke;(function(t){t.query="query",t.mutation="mutation"})(ke||(ke={}));function $a(t){return t.type===ke.query}function Zl(t){return t.type===ke.mutation}function On(t,e,r,n,i,a){return ed(t)?t(e,r,n,i).map(Rn).map(a):Array.isArray(t)?t.map(Rn).map(a):[]}function ed(t){return typeof t=="function"}function Rn(t){return typeof t=="string"?{type:t}:t}function Pn(t){return t!=null}var zt=Symbol("forceQueryFn"),Cn=function(t){return typeof t[zt]=="function"};function td(t){var e=t.serializeQueryArgs,r=t.queryThunk,n=t.mutationThunk,i=t.api,a=t.context,s=new Map,u=new Map,o=i.internalActions,c=o.unsubscribeQueryResult,d=o.removeMutationResult,h=o.updateSubscriptionOptions;return{buildInitiateQuery:T,buildInitiateMutation:m,getRunningQueryThunk:_,getRunningMutationThunk:w,getRunningQueriesThunk:S,getRunningMutationsThunk:R,getRunningOperationPromises:p,removalWarning:v};function v(){throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`)}function p(){if(typeof process<"u"&&process.env.NODE_ENV==="development")v();else{var b=function(f){return Array.from(f.values()).flatMap(function(g){return g?Object.values(g):[]})};return _r(_r([],b(s)),b(u)).filter(Pn)}}function _(b,f){return function(g){var y,O=a.endpointDefinitions[b],I=e({queryArgs:f,endpointDefinition:O,endpointName:b});return(y=s.get(g))==null?void 0:y[I]}}function w(b,f){return function(g){var y;return(y=u.get(g))==null?void 0:y[f]}}function S(){return function(b){return Object.values(s.get(b)||{}).filter(Pn)}}function R(){return function(b){return Object.values(u.get(b)||{}).filter(Pn)}}function E(b){if(process.env.NODE_ENV!=="production"){if(E.triggered)return;var f=b(i.internalActions.internal_probeSubscription({queryCacheKey:"DOES_NOT_EXIST",requestId:"DUMMY_REQUEST_ID"}));if(E.triggered=!0,typeof f!="boolean")throw new Error('Warning: Middleware for RTK-Query API at reducerPath "'+i.reducerPath+`" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`)}}function T(b,f){var g=function(y,O){var I=O===void 0?{}:O,P=I.subscribe,A=P===void 0?!0:P,C=I.forceRefetch,N=I.subscriptionOptions,x=zt,q=I[x];return function(F,j){var K,H,z=e({queryArgs:y,endpointDefinition:f,endpointName:b}),Y=r((K={type:"query",subscribe:A,forceRefetch:C,subscriptionOptions:N,endpointName:b,originalArgs:y,queryCacheKey:z},K[zt]=q,K)),W=i.endpoints[b].select(y),X=F(Y),Q=W(j());E(F);var Z=X.requestId,se=X.abort,ge=Q.requestId!==Z,we=(H=s.get(F))==null?void 0:H[z],Ee=function(){return W(j())},_e=Object.assign(q?X.then(Ee):ge&&!we?Promise.resolve(Q):Promise.all([we,X]).then(Ee),{arg:y,requestId:Z,subscriptionOptions:N,queryCacheKey:z,abort:se,unwrap:function(){return wr(this,null,function(){var ie;return br(this,function(Ne){switch(Ne.label){case 0:return[4,_e];case 1:if(ie=Ne.sent(),ie.isError)throw ie.error;return[2,ie.data]}})})},refetch:function(){return F(g(y,{subscribe:!1,forceRefetch:!0}))},unsubscribe:function(){A&&F(c({queryCacheKey:z,requestId:Z}))},updateSubscriptionOptions:function(ie){_e.subscriptionOptions=ie,F(h({endpointName:b,requestId:Z,queryCacheKey:z,options:ie}))}});if(!we&&!ge&&!q){var he=s.get(F)||{};he[z]=_e,s.set(F,he),_e.then(function(){delete he[z],Object.keys(he).length||s.delete(F)})}return _e}};return g}function m(b){return function(f,g){var y=g===void 0?{}:g,O=y.track,I=O===void 0?!0:O,P=y.fixedCacheKey;return function(A,C){var N=n({type:"mutation",endpointName:b,originalArgs:f,track:I,fixedCacheKey:P}),x=A(N);E(A);var q=x.requestId,F=x.abort,j=x.unwrap,K=x.unwrap().then(function(W){return{data:W}}).catch(function(W){return{error:W}}),H=function(){A(d({requestId:q,fixedCacheKey:P}))},z=Object.assign(K,{arg:x.arg,requestId:q,abort:F,unwrap:j,unsubscribe:H,reset:H}),Y=u.get(A)||{};return u.set(A,Y),Y[q]=z,z.then(function(){delete Y[q],Object.keys(Y).length||u.delete(A)}),P&&(Y[P]=z,z.then(function(){Y[P]===z&&(delete Y[P],Object.keys(Y).length||u.delete(A))})),z}}}}function Wa(t){return t}function rd(t){var e=this,r=t.reducerPath,n=t.baseQuery,i=t.context.endpointDefinitions,a=t.serializeQueryArgs,s=t.api,u=t.assertTagType,o=function(m,b,f,g){return function(y,O){var I=i[m],P=a({queryArgs:b,endpointDefinition:I,endpointName:m});if(y(s.internalActions.queryResultPatched({queryCacheKey:P,patches:f})),!!g){var A=s.endpoints[m].select(b)(O()),C=On(I.providesTags,A.data,void 0,b,{},u);y(s.internalActions.updateProvidedBy({queryCacheKey:P,providedTags:C}))}}},c=function(m,b,f,g){return g===void 0&&(g=!0),function(y,O){var I,P,A=s.endpoints[m],C=A.select(b)(O()),N={patches:[],inversePatches:[],undo:function(){return y(s.util.patchQueryData(m,b,N.inversePatches,g))}};if(C.status===ae.uninitialized)return N;var x;if("data"in C)if(We(C.data)){var q=Pa(C.data,f),F=q[0],j=q[1],K=q[2];(I=N.patches).push.apply(I,j),(P=N.inversePatches).push.apply(P,K),x=F}else x=f(C.data),N.patches.push({op:"replace",path:[],value:x}),N.inversePatches.push({op:"replace",path:[],value:C.data});return y(s.util.patchQueryData(m,b,N.patches,g)),N}},d=function(m,b,f){return function(g){var y;return g(s.endpoints[m].initiate(b,(y={subscribe:!1,forceRefetch:!0},y[zt]=function(){return{data:f}},y)))}},h=function(m,b){return wr(e,[m,b],function(f,g){var y,O,I,P,A,C,N,x,q,F,j,K,H,z,Y,W,X,Q,Z=g.signal,se=g.abort,ge=g.rejectWithValue,we=g.fulfillWithValue,Ee=g.dispatch,_e=g.getState,he=g.extra;return br(this,function(ie){switch(ie.label){case 0:y=i[f.endpointName],ie.label=1;case 1:return ie.trys.push([1,8,,13]),O=Wa,I=void 0,P={signal:Z,abort:se,dispatch:Ee,getState:_e,extra:he,endpoint:f.endpointName,type:f.type,forced:f.type==="query"?v(f,_e()):void 0},A=f.type==="query"?f[zt]:void 0,A?(I=A(),[3,6]):[3,2];case 2:return y.query?[4,n(y.query(f.originalArgs),P,y.extraOptions)]:[3,4];case 3:return I=ie.sent(),y.transformResponse&&(O=y.transformResponse),[3,6];case 4:return[4,y.queryFn(f.originalArgs,P,y.extraOptions,function(Ne){return n(Ne,P,y.extraOptions)})];case 5:I=ie.sent(),ie.label=6;case 6:if(typeof process<"u"&&process.env.NODE_ENV==="development"){if(C=y.query?"`baseQuery`":"`queryFn`",N=void 0,!I)N=C+" did not return anything.";else if(typeof I!="object")N=C+" did not return an object.";else if(I.error&&I.data)N=C+" returned an object containing both `error` and `result`.";else if(I.error===void 0&&I.data===void 0)N=C+" returned an object containing neither a valid `error` and `result`. At least one of them should not be `undefined`";else for(x=0,q=Object.keys(I);x<q.length;x++)if(F=q[x],F!=="error"&&F!=="data"&&F!=="meta"){N="The object returned by "+C+" has the unknown property "+F+".";break}N&&console.error("Error encountered handling the endpoint "+f.endpointName+`.
              `+N+"\n              It needs to return an object with either the shape `{ data: <value> }` or `{ error: <value> }` that may contain an optional `meta` property.\n              Object returned was:",I)}if(I.error)throw new qa(I.error,I.meta);return j=we,[4,O(I.data,I.meta,f.originalArgs)];case 7:return[2,j.apply(void 0,[ie.sent(),(X={fulfilledTimeStamp:Date.now(),baseQueryMeta:I.meta},X[L.SHOULD_AUTOBATCH]=!0,X)])];case 8:if(K=ie.sent(),H=K,!(H instanceof qa))return[3,12];z=Wa,y.query&&y.transformErrorResponse&&(z=y.transformErrorResponse),ie.label=9;case 9:return ie.trys.push([9,11,,12]),Y=ge,[4,z(H.value,H.meta,f.originalArgs)];case 10:return[2,Y.apply(void 0,[ie.sent(),(Q={baseQueryMeta:H.meta},Q[L.SHOULD_AUTOBATCH]=!0,Q)])];case 11:return W=ie.sent(),H=W,[3,12];case 12:throw typeof process<"u"&&process.env.NODE_ENV!=="production"?console.error('An unhandled error occurred processing a request for the endpoint "'+f.endpointName+`".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`,H):console.error(H),H;case 13:return[2]}})})};function v(m,b){var f,g,y,O,I=(g=(f=b[r])==null?void 0:f.queries)==null?void 0:g[m.queryCacheKey],P=(y=b[r])==null?void 0:y.config.refetchOnMountOrArgChange,A=I==null?void 0:I.fulfilledTimeStamp,C=(O=m.forceRefetch)!=null?O:m.subscribe&&P;return C?C===!0||(Number(new Date)-Number(A))/1e3>=C:!1}var p=L.createAsyncThunk(r+"/executeQuery",h,{getPendingMeta:function(){var m;return m={startedTimeStamp:Date.now()},m[L.SHOULD_AUTOBATCH]=!0,m},condition:function(m,b){var f=b.getState,g,y,O,I=f(),P=(y=(g=I[r])==null?void 0:g.queries)==null?void 0:y[m.queryCacheKey],A=P==null?void 0:P.fulfilledTimeStamp,C=m.originalArgs,N=P==null?void 0:P.originalArgs,x=i[m.endpointName];return Cn(m)?!0:(P==null?void 0:P.status)==="pending"?!1:v(m,I)||$a(x)&&((O=x==null?void 0:x.forceRefetch)!=null&&O.call(x,{currentArg:C,previousArg:N,endpointState:P,state:I}))?!0:!A},dispatchConditionRejection:!0}),_=L.createAsyncThunk(r+"/executeMutation",h,{getPendingMeta:function(){var m;return m={startedTimeStamp:Date.now()},m[L.SHOULD_AUTOBATCH]=!0,m}}),w=function(m){return"force"in m},S=function(m){return"ifOlderThan"in m},R=function(m,b,f){return function(g,y){var O=w(f)&&f.force,I=S(f)&&f.ifOlderThan,P=function(x){return x===void 0&&(x=!0),s.endpoints[m].initiate(b,{forceRefetch:x})},A=s.endpoints[m].select(b)(y());if(O)g(P());else if(I){var C=A==null?void 0:A.fulfilledTimeStamp;if(!C){g(P());return}var N=(Number(new Date)-Number(new Date(C)))/1e3>=I;N&&g(P())}else g(P(!1))}};function E(m){return function(b){var f,g;return((g=(f=b==null?void 0:b.meta)==null?void 0:f.arg)==null?void 0:g.endpointName)===m}}function T(m,b){return{matchPending:L.isAllOf(L.isPending(m),E(b)),matchFulfilled:L.isAllOf(L.isFulfilled(m),E(b)),matchRejected:L.isAllOf(L.isRejected(m),E(b))}}return{queryThunk:p,mutationThunk:_,prefetch:R,updateQueryData:c,upsertQueryData:d,patchQueryData:o,buildMatchThunkActions:T}}function Ha(t,e,r,n){return On(r[t.meta.arg.endpointName][e],L.isFulfilled(t)?t.payload:void 0,L.isRejectedWithValue(t)?t.payload:void 0,t.meta.arg.originalArgs,"baseQueryMeta"in t.meta?t.meta.baseQueryMeta:void 0,n)}function Er(t,e,r){var n=t[e];n&&r(n)}function Qt(t){var e;return(e="arg"in t?t.arg.fixedCacheKey:t.fixedCacheKey)!=null?e:t.requestId}function za(t,e,r){var n=t[Qt(e)];n&&r(n)}var Kt={};function nd(t){var e=t.reducerPath,r=t.queryThunk,n=t.mutationThunk,i=t.context,a=i.endpointDefinitions,s=i.apiUid,u=i.extractRehydrationInfo,o=i.hasRehydrationInfo,c=t.assertTagType,d=t.config,h=L.createAction(e+"/resetApiState"),v=L.createSlice({name:e+"/queries",initialState:Kt,reducers:{removeQueryResult:{reducer:function(b,f){var g=f.payload.queryCacheKey;delete b[g]},prepare:L.prepareAutoBatched()},queryResultPatched:{reducer:function(b,f){var g=f.payload,y=g.queryCacheKey,O=g.patches;Er(b,y,function(I){I.data=Ca(I.data,O.concat())})},prepare:L.prepareAutoBatched()}},extraReducers:function(b){b.addCase(r.pending,function(f,g){var y=g.meta,O=g.meta.arg,I,P,A=Cn(O);(O.subscribe||A)&&((P=f[I=O.queryCacheKey])!=null||(f[I]={status:ae.uninitialized,endpointName:O.endpointName})),Er(f,O.queryCacheKey,function(C){C.status=ae.pending,C.requestId=A&&C.requestId?C.requestId:y.requestId,O.originalArgs!==void 0&&(C.originalArgs=O.originalArgs),C.startedTimeStamp=y.startedTimeStamp})}).addCase(r.fulfilled,function(f,g){var y=g.meta,O=g.payload;Er(f,y.arg.queryCacheKey,function(I){var P;if(!(I.requestId!==y.requestId&&!Cn(y.arg))){var A=a[y.arg.endpointName].merge;if(I.status=ae.fulfilled,A)if(I.data!==void 0){var C=y.fulfilledTimeStamp,N=y.arg,x=y.baseQueryMeta,q=y.requestId,F=L.createNextState(I.data,function(j){return A(j,O,{arg:N.originalArgs,baseQueryMeta:x,fulfilledTimeStamp:C,requestId:q})});I.data=F}else I.data=O;else I.data=(P=a[y.arg.endpointName].structuralSharing)==null||P?Ua($e(I.data)?El(I.data):I.data,O):O;delete I.error,I.fulfilledTimeStamp=y.fulfilledTimeStamp}})}).addCase(r.rejected,function(f,g){var y=g.meta,O=y.condition,I=y.arg,P=y.requestId,A=g.error,C=g.payload;Er(f,I.queryCacheKey,function(N){if(!O){if(N.requestId!==P)return;N.status=ae.rejected,N.error=C??A}})}).addMatcher(o,function(f,g){for(var y=u(g).queries,O=0,I=Object.entries(y);O<I.length;O++){var P=I[O],A=P[0],C=P[1];((C==null?void 0:C.status)===ae.fulfilled||(C==null?void 0:C.status)===ae.rejected)&&(f[A]=C)}})}}),p=L.createSlice({name:e+"/mutations",initialState:Kt,reducers:{removeMutationResult:{reducer:function(b,f){var g=f.payload,y=Qt(g);y in b&&delete b[y]},prepare:L.prepareAutoBatched()}},extraReducers:function(b){b.addCase(n.pending,function(f,g){var y=g.meta,O=g.meta,I=O.requestId,P=O.arg,A=O.startedTimeStamp;P.track&&(f[Qt(y)]={requestId:I,status:ae.pending,endpointName:P.endpointName,startedTimeStamp:A})}).addCase(n.fulfilled,function(f,g){var y=g.payload,O=g.meta;O.arg.track&&za(f,O,function(I){I.requestId===O.requestId&&(I.status=ae.fulfilled,I.data=y,I.fulfilledTimeStamp=O.fulfilledTimeStamp)})}).addCase(n.rejected,function(f,g){var y=g.payload,O=g.error,I=g.meta;I.arg.track&&za(f,I,function(P){P.requestId===I.requestId&&(P.status=ae.rejected,P.error=y??O)})}).addMatcher(o,function(f,g){for(var y=u(g).mutations,O=0,I=Object.entries(y);O<I.length;O++){var P=I[O],A=P[0],C=P[1];((C==null?void 0:C.status)===ae.fulfilled||(C==null?void 0:C.status)===ae.rejected)&&A!==(C==null?void 0:C.requestId)&&(f[A]=C)}})}}),_=L.createSlice({name:e+"/invalidation",initialState:Kt,reducers:{updateProvidedBy:{reducer:function(b,f){for(var g,y,O,I,P=f.payload,A=P.queryCacheKey,C=P.providedTags,N=0,x=Object.values(b);N<x.length;N++)for(var q=x[N],F=0,j=Object.values(q);F<j.length;F++){var K=j[F],H=K.indexOf(A);H!==-1&&K.splice(H,1)}for(var z=0,Y=C;z<Y.length;z++){var W=Y[z],X=W.type,Q=W.id,Z=(I=(y=(g=b[X])!=null?g:b[X]={})[O=Q||"__internal_without_id"])!=null?I:y[O]=[],se=Z.includes(A);se||Z.push(A)}},prepare:L.prepareAutoBatched()}},extraReducers:function(b){b.addCase(v.actions.removeQueryResult,function(f,g){for(var y=g.payload.queryCacheKey,O=0,I=Object.values(f);O<I.length;O++)for(var P=I[O],A=0,C=Object.values(P);A<C.length;A++){var N=C[A],x=N.indexOf(y);x!==-1&&N.splice(x,1)}}).addMatcher(o,function(f,g){for(var y,O,I,P,A=u(g).provided,C=0,N=Object.entries(A);C<N.length;C++)for(var x=N[C],q=x[0],F=x[1],j=0,K=Object.entries(F);j<K.length;j++)for(var H=K[j],z=H[0],Y=H[1],W=(P=(O=(y=f[q])!=null?y:f[q]={})[I=z||"__internal_without_id"])!=null?P:O[I]=[],X=0,Q=Y;X<Q.length;X++){var Z=Q[X],se=W.includes(Z);se||W.push(Z)}}).addMatcher(L.isAnyOf(L.isFulfilled(r),L.isRejectedWithValue(r)),function(f,g){var y=Ha(g,"providesTags",a,c),O=g.meta.arg.queryCacheKey;_.caseReducers.updateProvidedBy(f,_.actions.updateProvidedBy({queryCacheKey:O,providedTags:y}))})}}),w=L.createSlice({name:e+"/subscriptions",initialState:Kt,reducers:{updateSubscriptionOptions:function(b,f){},unsubscribeQueryResult:function(b,f){},internal_probeSubscription:function(b,f){}}}),S=L.createSlice({name:e+"/internalSubscriptions",initialState:Kt,reducers:{subscriptionsUpdated:{reducer:function(b,f){return Ca(b,f.payload)},prepare:L.prepareAutoBatched()}}}),R=L.createSlice({name:e+"/config",initialState:ue({online:Kl(),focused:Gl(),middlewareRegistered:!1},d),reducers:{middlewareRegistered:function(b,f){var g=f.payload;b.middlewareRegistered=b.middlewareRegistered==="conflict"||s!==g?"conflict":!0}},extraReducers:function(b){b.addCase(Tn,function(f){f.online=!0}).addCase(Va,function(f){f.online=!1}).addCase(Sn,function(f){f.focused=!0}).addCase(Ba,function(f){f.focused=!1}).addMatcher(o,function(f){return ue({},f)})}}),E=L.combineReducers({queries:v.reducer,mutations:p.reducer,provided:_.reducer,subscriptions:S.reducer,config:R.reducer}),T=function(b,f){return E(h.match(f)?void 0:b,f)},m=Ae(ue(ue(ue(ue(ue(ue({},R.actions),v.actions),w.actions),S.actions),p.actions),_.actions),{unsubscribeMutationResult:p.actions.removeMutationResult,resetApiState:h});return{reducer:T,actions:m}}var ot=Symbol.for("RTKQ/skipToken"),Qa={status:ae.uninitialized},Ka=L.createNextState(Qa,function(){}),Ga=L.createNextState(Qa,function(){});function id(t){var e=t.serializeQueryArgs,r=t.reducerPath,n=function(d){return Ka},i=function(d){return Ga};return{buildQuerySelector:u,buildMutationSelector:o,selectInvalidatedBy:c};function a(d){return ue(ue({},d),$l(d.status))}function s(d){var h=d[r];if(process.env.NODE_ENV!=="production"&&!h){if(s.triggered)return h;s.triggered=!0,console.error("Error: No data found at `state."+r+"`. Did you forget to add the reducer to the store?")}return h}function u(d,h){return function(v){var p=e({queryArgs:v,endpointDefinition:h,endpointName:d}),_=function(S){var R,E,T;return(T=(E=(R=s(S))==null?void 0:R.queries)==null?void 0:E[p])!=null?T:Ka},w=v===ot?n:_;return L.createSelector(w,a)}}function o(){return function(d){var h,v;typeof d=="object"?v=(h=Qt(d))!=null?h:ot:v=d;var p=function(w){var S,R,E;return(E=(R=(S=s(w))==null?void 0:S.mutations)==null?void 0:R[v])!=null?E:Ga},_=v===ot?i:p;return L.createSelector(_,a)}}function c(d,h){for(var v,p=d[r],_=new Set,w=0,S=h.map(Rn);w<S.length;w++){var R=S[w],E=p.provided[R.type];if(E)for(var T=(v=R.id!==void 0?E[R.id]:Ma(Object.values(E)))!=null?v:[],m=0,b=T;m<b.length;m++){var f=b[m];_.add(f)}}return Ma(Array.from(_.values()).map(function(g){var y=p.queries[g];return y?[{queryCacheKey:g,endpointName:y.endpointName,originalArgs:y.originalArgs}]:[]}))}}var Sr=WeakMap?new WeakMap:void 0,Ja=function(t){var e=t.endpointName,r=t.queryArgs,n="",i=Sr==null?void 0:Sr.get(r);if(typeof i=="string")n=i;else{var a=JSON.stringify(r,function(s,u){return L.isPlainObject(u)?Object.keys(u).sort().reduce(function(o,c){return o[c]=u[c],o},{}):u});L.isPlainObject(r)&&(Sr==null||Sr.set(r,a)),n=a}return e+"("+n+")"};function ad(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(n){var i=Aa(function(d){var h,v;return(v=n.extractRehydrationInfo)==null?void 0:v.call(n,d,{reducerPath:(h=n.reducerPath)!=null?h:"api"})}),a=Ae(ue({reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1},n),{extractRehydrationInfo:i,serializeQueryArgs:function(d){var h=Ja;if("serializeQueryArgs"in d.endpointDefinition){var v=d.endpointDefinition.serializeQueryArgs;h=function(p){var _=v(p);return typeof _=="string"?_:Ja(Ae(ue({},p),{queryArgs:_}))}}else n.serializeQueryArgs&&(h=n.serializeQueryArgs);return h(d)},tagTypes:_r([],n.tagTypes||[])}),s={endpointDefinitions:{},batch:function(d){d()},apiUid:L.nanoid(),extractRehydrationInfo:i,hasRehydrationInfo:Aa(function(d){return i(d)!=null})},u={injectEndpoints:c,enhanceEndpoints:function(d){var h=d.addTagTypes,v=d.endpoints;if(h)for(var p=0,_=h;p<_.length;p++){var w=_[p];a.tagTypes.includes(w)||a.tagTypes.push(w)}if(v)for(var S=0,R=Object.entries(v);S<R.length;S++){var E=R[S],T=E[0],m=E[1];typeof m=="function"?m(s.endpointDefinitions[T]):Object.assign(s.endpointDefinitions[T]||{},m)}return u}},o=t.map(function(d){return d.init(u,a,s)});function c(d){for(var h=d.endpoints({query:function(m){return Ae(ue({},m),{type:ke.query})},mutation:function(m){return Ae(ue({},m),{type:ke.mutation})}}),v=0,p=Object.entries(h);v<p.length;v++){var _=p[v],w=_[0],S=_[1];if(!d.overrideExisting&&w in s.endpointDefinitions){typeof process<"u"&&process.env.NODE_ENV==="development"&&console.error("called `injectEndpoints` to override already-existing endpointName "+w+" without specifying `overrideExisting: true`");continue}s.endpointDefinitions[w]=S;for(var R=0,E=o;R<E.length;R++){var T=E[R];T.injectEndpoint(w,S)}}return u}return u.injectEndpoints({endpoints:n.endpoints})}}function sd(t){for(var e in t)return!1;return!0}var od=2147483647/1e3-1,ud=function(t){var e=t.reducerPath,r=t.api,n=t.context,i=t.internalState,a=r.internalActions,s=a.removeQueryResult,u=a.unsubscribeQueryResult;function o(v){var p=i.currentSubscriptions[v];return!!p&&!sd(p)}var c={},d=function(v,p,_){var w;if(u.match(v)){var S=p.getState()[e],R=v.payload.queryCacheKey;h(R,(w=S.queries[R])==null?void 0:w.endpointName,p,S.config)}if(r.util.resetApiState.match(v))for(var E=0,T=Object.entries(c);E<T.length;E++){var m=T[E],b=m[0],f=m[1];f&&clearTimeout(f),delete c[b]}if(n.hasRehydrationInfo(v))for(var S=p.getState()[e],g=n.extractRehydrationInfo(v).queries,y=0,O=Object.entries(g);y<O.length;y++){var I=O[y],R=I[0],P=I[1];h(R,P==null?void 0:P.endpointName,p,S.config)}};function h(v,p,_,w){var S,R=n.endpointDefinitions[p],E=(S=R==null?void 0:R.keepUnusedDataFor)!=null?S:w.keepUnusedDataFor;if(E!==1/0){var T=Math.max(0,Math.min(E,od));if(!o(v)){var m=c[v];m&&clearTimeout(m),c[v]=setTimeout(function(){o(v)||_.dispatch(s({queryCacheKey:v})),delete c[v]},T*1e3)}}}return d},cd=function(t){var e=t.reducerPath,r=t.context,n=t.context.endpointDefinitions,i=t.mutationThunk,a=t.api,s=t.assertTagType,u=t.refetchQuery,o=a.internalActions.removeQueryResult,c=L.isAnyOf(L.isFulfilled(i),L.isRejectedWithValue(i)),d=function(v,p){c(v)&&h(Ha(v,"invalidatesTags",n,s),p),a.util.invalidateTags.match(v)&&h(On(v.payload,void 0,void 0,void 0,void 0,s),p)};function h(v,p){var _=p.getState(),w=_[e],S=a.util.selectInvalidatedBy(_,v);r.batch(function(){for(var R,E=Array.from(S.values()),T=0,m=E;T<m.length;T++){var b=m[T].queryCacheKey,f=w.queries[b],g=(R=w.subscriptions[b])!=null?R:{};f&&(Object.keys(g).length===0?p.dispatch(o({queryCacheKey:b})):f.status!==ae.uninitialized&&p.dispatch(u(f,b)))}})}return d},ld=function(t){var e=t.reducerPath,r=t.queryThunk,n=t.api,i=t.refetchQuery,a=t.internalState,s={},u=function(p,_){(n.internalActions.updateSubscriptionOptions.match(p)||n.internalActions.unsubscribeQueryResult.match(p))&&c(p.payload,_),(r.pending.match(p)||r.rejected.match(p)&&p.meta.condition)&&c(p.meta.arg,_),(r.fulfilled.match(p)||r.rejected.match(p)&&!p.meta.condition)&&o(p.meta.arg,_),n.util.resetApiState.match(p)&&h()};function o(p,_){var w=p.queryCacheKey,S=_.getState()[e],R=S.queries[w],E=a.currentSubscriptions[w];if(!(!R||R.status===ae.uninitialized)){var T=v(E);if(Number.isFinite(T)){var m=s[w];m!=null&&m.timeout&&(clearTimeout(m.timeout),m.timeout=void 0);var b=Date.now()+T,f=s[w]={nextPollTimestamp:b,pollingInterval:T,timeout:setTimeout(function(){f.timeout=void 0,_.dispatch(i(R,w))},T)}}}}function c(p,_){var w=p.queryCacheKey,S=_.getState()[e],R=S.queries[w],E=a.currentSubscriptions[w];if(!(!R||R.status===ae.uninitialized)){var T=v(E);if(!Number.isFinite(T)){d(w);return}var m=s[w],b=Date.now()+T;(!m||b<m.nextPollTimestamp)&&o({queryCacheKey:w},_)}}function d(p){var _=s[p];_!=null&&_.timeout&&clearTimeout(_.timeout),delete s[p]}function h(){for(var p=0,_=Object.keys(s);p<_.length;p++){var w=_[p];d(w)}}function v(p){p===void 0&&(p={});var _=Number.POSITIVE_INFINITY;for(var w in p)p[w].pollingInterval&&(_=Math.min(p[w].pollingInterval,_));return _}return u},dd=function(t){var e=t.reducerPath,r=t.context,n=t.api,i=t.refetchQuery,a=t.internalState,s=n.internalActions.removeQueryResult,u=function(c,d){Sn.match(c)&&o(d,"refetchOnFocus"),Tn.match(c)&&o(d,"refetchOnReconnect")};function o(c,d){var h=c.getState()[e],v=h.queries,p=a.currentSubscriptions;r.batch(function(){for(var _=0,w=Object.keys(p);_<w.length;_++){var S=w[_],R=v[S],E=p[S];if(!(!E||!R)){var T=Object.values(E).some(function(m){return m[d]===!0})||Object.values(E).every(function(m){return m[d]===void 0})&&h.config[d];T&&(Object.keys(E).length===0?c.dispatch(s({queryCacheKey:S})):R.status!==ae.uninitialized&&c.dispatch(i(R,S)))}}})}return u},Ya=new Error("Promise never resolved before cacheEntryRemoved."),fd=function(t){var e=t.api,r=t.reducerPath,n=t.context,i=t.queryThunk,a=t.mutationThunk;t.internalState;var s=L.isAsyncThunkAction(i),u=L.isAsyncThunkAction(a),o=L.isFulfilled(i,a),c={},d=function(p,_,w){var S=h(p);if(i.pending.match(p)){var R=w[r].queries[S],E=_.getState()[r].queries[S];!R&&E&&v(p.meta.arg.endpointName,p.meta.arg.originalArgs,S,_,p.meta.requestId)}else if(a.pending.match(p)){var E=_.getState()[r].mutations[S];E&&v(p.meta.arg.endpointName,p.meta.arg.originalArgs,S,_,p.meta.requestId)}else if(o(p)){var T=c[S];T!=null&&T.valueResolved&&(T.valueResolved({data:p.payload,meta:p.meta.baseQueryMeta}),delete T.valueResolved)}else if(e.internalActions.removeQueryResult.match(p)||e.internalActions.removeMutationResult.match(p)){var T=c[S];T&&(delete c[S],T.cacheEntryRemoved())}else if(e.util.resetApiState.match(p))for(var m=0,b=Object.entries(c);m<b.length;m++){var f=b[m],g=f[0],T=f[1];delete c[g],T.cacheEntryRemoved()}};function h(p){return s(p)?p.meta.arg.queryCacheKey:u(p)?p.meta.requestId:e.internalActions.removeQueryResult.match(p)?p.payload.queryCacheKey:e.internalActions.removeMutationResult.match(p)?Qt(p.payload):""}function v(p,_,w,S,R){var E=n.endpointDefinitions[p],T=E==null?void 0:E.onCacheEntryAdded;if(T){var m={},b=new Promise(function(P){m.cacheEntryRemoved=P}),f=Promise.race([new Promise(function(P){m.valueResolved=P}),b.then(function(){throw Ya})]);f.catch(function(){}),c[w]=m;var g=e.endpoints[p].select(E.type===ke.query?_:w),y=S.dispatch(function(P,A,C){return C}),O=Ae(ue({},S),{getCacheEntry:function(){return g(S.getState())},requestId:R,extra:y,updateCachedData:E.type===ke.query?function(P){return S.dispatch(e.util.updateQueryData(p,_,P))}:void 0,cacheDataLoaded:f,cacheEntryRemoved:b}),I=T(_,O);Promise.resolve(I).catch(function(P){if(P!==Ya)throw P})}}return d},hd=function(t){var e=t.api,r=t.context,n=t.queryThunk,i=t.mutationThunk,a=L.isPending(n,i),s=L.isRejected(n,i),u=L.isFulfilled(n,i),o={},c=function(d,h){var v,p,_;if(a(d)){var w=d.meta,S=w.requestId,R=w.arg,E=R.endpointName,T=R.originalArgs,m=r.endpointDefinitions[E],b=m==null?void 0:m.onQueryStarted;if(b){var f={},g=new Promise(function(x,q){f.resolve=x,f.reject=q});g.catch(function(){}),o[S]=f;var y=e.endpoints[E].select(m.type===ke.query?T:S),O=h.dispatch(function(x,q,F){return F}),I=Ae(ue({},h),{getCacheEntry:function(){return y(h.getState())},requestId:S,extra:O,updateCachedData:m.type===ke.query?function(x){return h.dispatch(e.util.updateQueryData(E,T,x))}:void 0,queryFulfilled:g});b(T,I)}}else if(u(d)){var P=d.meta,S=P.requestId,A=P.baseQueryMeta;(v=o[S])==null||v.resolve({data:d.payload,meta:A}),delete o[S]}else if(s(d)){var C=d.meta,S=C.requestId,N=C.rejectedWithValue,A=C.baseQueryMeta;(_=o[S])==null||_.reject({error:(p=d.payload)!=null?p:d.error,isUnhandledError:!N,meta:A}),delete o[S]}};return c},pd=function(t){var e=t.api,r=t.context.apiUid,n=t.reducerPath;return function(i,a){var s,u;e.util.resetApiState.match(i)&&a.dispatch(e.internalActions.middlewareRegistered(r)),typeof process<"u"&&process.env.NODE_ENV==="development"&&e.internalActions.middlewareRegistered.match(i)&&i.payload===r&&((u=(s=a.getState()[n])==null?void 0:s.config)==null?void 0:u.middlewareRegistered)==="conflict"&&console.warn('There is a mismatch between slice and middleware for the reducerPath "'+n+`".
You can only have one api per reducer path, this will lead to crashes in various situations!`+(n==="api"?`
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!`:""))}},Xa,vd=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis):function(t){return(Xa||(Xa=Promise.resolve())).then(t).catch(function(e){return setTimeout(function(){throw e},0)})},md=function(t){var e=t.api,r=t.queryThunk,n=t.internalState,i=e.reducerPath+"/subscriptions",a=null,s=!1,u=e.internalActions,o=u.updateSubscriptionOptions,c=u.unsubscribeQueryResult,d=function(h,v){var p,_,w,S,R,E,T,m,b;if(o.match(v)){var f=v.payload,g=f.queryCacheKey,y=f.requestId,O=f.options;return(p=h==null?void 0:h[g])!=null&&p[y]&&(h[g][y]=O),!0}if(c.match(v)){var I=v.payload,g=I.queryCacheKey,y=I.requestId;return h[g]&&delete h[g][y],!0}if(e.internalActions.removeQueryResult.match(v))return delete h[v.payload.queryCacheKey],!0;if(r.pending.match(v)){var P=v.meta,A=P.arg,y=P.requestId;if(A.subscribe){var C=(w=h[_=A.queryCacheKey])!=null?w:h[_]={};return C[y]=(R=(S=A.subscriptionOptions)!=null?S:C[y])!=null?R:{},!0}}if(r.rejected.match(v)){var N=v.meta,x=N.condition,A=N.arg,y=N.requestId;if(x&&A.subscribe){var C=(T=h[E=A.queryCacheKey])!=null?T:h[E]={};return C[y]=(b=(m=A.subscriptionOptions)!=null?m:C[y])!=null?b:{},!0}}return!1};return function(h,v){var p,_;if(a||(a=JSON.parse(JSON.stringify(n.currentSubscriptions))),e.util.resetApiState.match(h))return a=n.currentSubscriptions={},[!0,!1];if(e.internalActions.internal_probeSubscription.match(h)){var w=h.payload,S=w.queryCacheKey,R=w.requestId,E=!!((p=n.currentSubscriptions[S])!=null&&p[R]);return[!1,E]}var T=d(n.currentSubscriptions,h);if(T){s||(vd(function(){var g=JSON.parse(JSON.stringify(n.currentSubscriptions)),y=Pa(a,function(){return g}),O=y[1];v.next(e.internalActions.subscriptionsUpdated(O)),a=g,s=!1}),s=!0);var m=!!((_=h.type)!=null&&_.startsWith(i)),b=r.rejected.match(h)&&h.meta.condition&&!!h.meta.arg.subscribe,f=!m&&!b;return[f,!1]}return[!0,!1]}};function gd(t){var e=t.reducerPath,r=t.queryThunk,n=t.api,i=t.context,a=i.apiUid,s={invalidateTags:L.createAction(e+"/invalidateTags")},u=function(h){return!!h&&typeof h.type=="string"&&h.type.startsWith(e+"/")},o=[pd,ud,cd,ld,fd,hd],c=function(h){var v=!1,p={currentSubscriptions:{}},_=Ae(ue({},t),{internalState:p,refetchQuery:d}),w=o.map(function(E){return E(_)}),S=md(_),R=dd(_);return function(E){return function(T){v||(v=!0,h.dispatch(n.internalActions.middlewareRegistered(a)));var m=Ae(ue({},h),{next:E}),b=h.getState(),f=S(T,m,b),g=f[0],y=f[1],O;if(g?O=E(T):O=y,h.getState()[e]&&(R(T,m,b),u(T)||i.hasRehydrationInfo(T)))for(var I=0,P=w;I<P.length;I++){var A=P[I];A(T,m,b)}return O}}};return{middleware:c,actions:s};function d(h,v,p){return p===void 0&&(p={}),r(ue({type:"query",endpointName:h.endpointName,originalArgs:h.originalArgs,subscribe:!1,forceRefetch:!0,queryCacheKey:v},p))}}function Ze(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];Object.assign.apply(Object,_r([t],e))}var Za=Symbol(),yd=function(){return{name:Za,init:function(t,e,r){var n=e.baseQuery,i=e.tagTypes,a=e.reducerPath,s=e.serializeQueryArgs,u=e.keepUnusedDataFor,o=e.refetchOnMountOrArgChange,c=e.refetchOnFocus,d=e.refetchOnReconnect;Cl();var h=function(W){return typeof process<"u"&&process.env.NODE_ENV==="development"&&(i.includes(W.type)||console.error("Tag type '"+W.type+"' was used, but not specified in `tagTypes`!")),W};Object.assign(t,{reducerPath:a,endpoints:{},internalActions:{onOnline:Tn,onOffline:Va,onFocus:Sn,onFocusLost:Ba},util:{}});var v=rd({baseQuery:n,reducerPath:a,context:r,api:t,serializeQueryArgs:s,assertTagType:h}),p=v.queryThunk,_=v.mutationThunk,w=v.patchQueryData,S=v.updateQueryData,R=v.upsertQueryData,E=v.prefetch,T=v.buildMatchThunkActions,m=nd({context:r,queryThunk:p,mutationThunk:_,reducerPath:a,assertTagType:h,config:{refetchOnFocus:c,refetchOnReconnect:d,refetchOnMountOrArgChange:o,keepUnusedDataFor:u,reducerPath:a}}),b=m.reducer,f=m.actions;Ze(t.util,{patchQueryData:w,updateQueryData:S,upsertQueryData:R,prefetch:E,resetApiState:f.resetApiState}),Ze(t.internalActions,f);var g=gd({reducerPath:a,context:r,queryThunk:p,mutationThunk:_,api:t,assertTagType:h}),y=g.middleware,O=g.actions;Ze(t.util,O),Ze(t,{reducer:b,middleware:y});var I=id({serializeQueryArgs:s,reducerPath:a}),P=I.buildQuerySelector,A=I.buildMutationSelector,C=I.selectInvalidatedBy;Ze(t.util,{selectInvalidatedBy:C});var N=td({queryThunk:p,mutationThunk:_,api:t,serializeQueryArgs:s,context:r}),x=N.buildInitiateQuery,q=N.buildInitiateMutation,F=N.getRunningMutationThunk,j=N.getRunningMutationsThunk,K=N.getRunningQueriesThunk,H=N.getRunningQueryThunk,z=N.getRunningOperationPromises,Y=N.removalWarning;return Ze(t.util,{getRunningOperationPromises:z,getRunningOperationPromise:Y,getRunningMutationThunk:F,getRunningMutationsThunk:j,getRunningQueryThunk:H,getRunningQueriesThunk:K}),{name:Za,injectEndpoint:function(W,X){var Q,Z,se=t;(Z=(Q=se.endpoints)[W])!=null||(Q[W]={}),$a(X)?Ze(se.endpoints[W],{name:W,select:P(W,X),initiate:x(W,X)},T(p,W)):Zl(X)&&Ze(se.endpoints[W],{name:W,select:A(),initiate:q(W)},T(_,W))}}}}},bd=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t},_d=Object.defineProperty,Id=Object.defineProperties,wd=Object.getOwnPropertyDescriptors,es=Object.getOwnPropertySymbols,Ed=Object.prototype.hasOwnProperty,Sd=Object.prototype.propertyIsEnumerable,ts=function(t,e,r){return e in t?_d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},He=function(t,e){for(var r in e||(e={}))Ed.call(e,r)&&ts(t,r,e[r]);if(es)for(var n=0,i=es(e);n<i.length;n++){var r=i[n];Sd.call(e,r)&&ts(t,r,e[r])}return t},Tr=function(t,e){return Id(t,wd(e))};function rs(t,e,r,n){var i=U.useMemo(function(){return{queryArgs:t,serialized:typeof t=="object"?e({queryArgs:t,endpointDefinition:r,endpointName:n}):t}},[t,e,r,n]),a=U.useRef(i);return U.useEffect(function(){a.current.serialized!==i.serialized&&(a.current=i)},[i]),a.current.serialized===i.serialized?a.current.queryArgs:t}var An=Symbol();function kn(t){var e=U.useRef(t);return U.useEffect(function(){De.shallowEqual(e.current,t)||(e.current=t)},[t]),De.shallowEqual(e.current,t)?e.current:t}var Or=WeakMap?new WeakMap:void 0,Td=function(t){var e=t.endpointName,r=t.queryArgs,n="",i=Or==null?void 0:Or.get(r);if(typeof i=="string")n=i;else{var a=JSON.stringify(r,function(s,u){return L.isPlainObject(u)?Object.keys(u).sort().reduce(function(o,c){return o[c]=u[c],o},{}):u});L.isPlainObject(r)&&(Or==null||Or.set(r,a)),n=a}return e+"("+n+")"},Od=typeof window<"u"&&window.document&&window.document.createElement?U.useLayoutEffect:U.useEffect,Rd=function(t){return t},Pd=function(t){return t.isUninitialized?Tr(He({},t),{isUninitialized:!1,isFetching:!0,isLoading:t.data===void 0,status:ae.pending}):t};function Cd(t){var e=t.api,r=t.moduleOptions,n=r.batch,i=r.useDispatch,a=r.useSelector,s=r.useStore,u=r.unstable__sideEffectsInRender,o=t.serializeQueryArgs,c=t.context,d=u?function(w){return w()}:U.useEffect;return{buildQueryHooks:p,buildMutationHook:_,usePrefetch:v};function h(w,S,R){if(S!=null&&S.endpointName&&w.isUninitialized){var E=S.endpointName,T=c.endpointDefinitions[E];o({queryArgs:S.originalArgs,endpointDefinition:T,endpointName:E})===o({queryArgs:R,endpointDefinition:T,endpointName:E})&&(S=void 0)}var m=w.isSuccess?w.data:S==null?void 0:S.data;m===void 0&&(m=w.data);var b=m!==void 0,f=w.isLoading,g=!b&&f,y=w.isSuccess||f&&b;return Tr(He({},w),{data:m,currentData:w.data,isFetching:f,isLoading:g,isSuccess:y})}function v(w,S){var R=i(),E=kn(S);return U.useCallback(function(T,m){return R(e.util.prefetch(w,T,He(He({},E),m)))},[w,R,E])}function p(w){var S=function(T,m){var b=m===void 0?{}:m,f=b.refetchOnReconnect,g=b.refetchOnFocus,y=b.refetchOnMountOrArgChange,O=b.skip,I=O===void 0?!1:O,P=b.pollingInterval,A=P===void 0?0:P,C=e.endpoints[w].initiate,N=i(),x=rs(I?ot:T,Td,c.endpointDefinitions[w],w),q=kn({refetchOnReconnect:f,refetchOnFocus:g,pollingInterval:A}),F=U.useRef(!1),j=U.useRef(),K=j.current||{},H=K.queryCacheKey,z=K.requestId,Y=!1;if(H&&z){var W=N(e.internalActions.internal_probeSubscription({queryCacheKey:H,requestId:z}));if(process.env.NODE_ENV!=="production"&&typeof W!="boolean")throw new Error('Warning: Middleware for RTK-Query API at reducerPath "'+e.reducerPath+`" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);Y=!!W}var X=!Y&&F.current;return d(function(){F.current=Y}),d(function(){X&&(j.current=void 0)},[X]),d(function(){var Q,Z=j.current;if(typeof process<"u"&&process.env.NODE_ENV==="removeMeOnCompilation"&&console.log(X),x===ot){Z==null||Z.unsubscribe(),j.current=void 0;return}var se=(Q=j.current)==null?void 0:Q.subscriptionOptions;if(!Z||Z.arg!==x){Z==null||Z.unsubscribe();var ge=N(C(x,{subscriptionOptions:q,forceRefetch:y}));j.current=ge}else q!==se&&Z.updateSubscriptionOptions(q)},[N,C,y,x,q,X]),U.useEffect(function(){return function(){var Q;(Q=j.current)==null||Q.unsubscribe(),j.current=void 0}},[]),U.useMemo(function(){return{refetch:function(){var Q;if(!j.current)throw new Error("Cannot refetch a query that has not been started yet.");return(Q=j.current)==null?void 0:Q.refetch()}}},[])},R=function(T){var m=T===void 0?{}:T,b=m.refetchOnReconnect,f=m.refetchOnFocus,g=m.pollingInterval,y=g===void 0?0:g,O=e.endpoints[w].initiate,I=i(),P=U.useState(An),A=P[0],C=P[1],N=U.useRef(),x=kn({refetchOnReconnect:b,refetchOnFocus:f,pollingInterval:y});d(function(){var j,K,H=(j=N.current)==null?void 0:j.subscriptionOptions;x!==H&&((K=N.current)==null||K.updateSubscriptionOptions(x))},[x]);var q=U.useRef(x);d(function(){q.current=x},[x]);var F=U.useCallback(function(j,K){K===void 0&&(K=!1);var H;return n(function(){var z;(z=N.current)==null||z.unsubscribe(),N.current=H=I(O(j,{subscriptionOptions:q.current,forceRefetch:!K})),C(j)}),H},[I,O]);return U.useEffect(function(){return function(){var j;(j=N==null?void 0:N.current)==null||j.unsubscribe()}},[]),U.useEffect(function(){A!==An&&!N.current&&F(A,!0)},[A,F]),U.useMemo(function(){return[F,A]},[F,A])},E=function(T,m){var b=m===void 0?{}:m,f=b.skip,g=f===void 0?!1:f,y=b.selectFromResult,O=e.endpoints[w].select,I=rs(g?ot:T,o,c.endpointDefinitions[w],w),P=U.useRef(),A=U.useMemo(function(){return L.createSelector([O(I),function(F,j){return j},function(F){return I}],h)},[O,I]),C=U.useMemo(function(){return y?L.createSelector([A],y):A},[A,y]),N=a(function(F){return C(F,P.current)},De.shallowEqual),x=s(),q=A(x.getState(),P.current);return Od(function(){P.current=q},[q]),N};return{useQueryState:E,useQuerySubscription:S,useLazyQuerySubscription:R,useLazyQuery:function(T){var m=R(T),b=m[0],f=m[1],g=E(f,Tr(He({},T),{skip:f===An})),y=U.useMemo(function(){return{lastArg:f}},[f]);return U.useMemo(function(){return[b,g,y]},[b,g,y])},useQuery:function(T,m){var b=S(T,m),f=E(T,He({selectFromResult:T===ot||m!=null&&m.skip?void 0:Pd},m)),g=f.data,y=f.status,O=f.isLoading,I=f.isSuccess,P=f.isError,A=f.error;return U.useDebugValue({data:g,status:y,isLoading:O,isSuccess:I,isError:P,error:A}),U.useMemo(function(){return He(He({},f),b)},[f,b])}}}function _(w){return function(S){var R=S===void 0?{}:S,E=R.selectFromResult,T=E===void 0?Rd:E,m=R.fixedCacheKey,b=e.endpoints[w],f=b.select,g=b.initiate,y=i(),O=U.useState(),I=O[0],P=O[1];U.useEffect(function(){return function(){I!=null&&I.arg.fixedCacheKey||I==null||I.reset()}},[I]);var A=U.useCallback(function(Z){var se=y(g(Z,{fixedCacheKey:m}));return P(se),se},[y,g,m]),C=(I||{}).requestId,N=U.useMemo(function(){return L.createSelector([f({fixedCacheKey:m,requestId:I==null?void 0:I.requestId})],T)},[f,I,T,m]),x=a(N,De.shallowEqual),q=m==null?I==null?void 0:I.arg.originalArgs:void 0,F=U.useCallback(function(){n(function(){I&&P(void 0),m&&y(e.internalActions.removeMutationResult({requestId:C,fixedCacheKey:m}))})},[y,m,I,C]),j=x.endpointName,K=x.data,H=x.status,z=x.isLoading,Y=x.isSuccess,W=x.isError,X=x.error;U.useDebugValue({endpointName:j,data:K,status:H,isLoading:z,isSuccess:Y,isError:W,error:X});var Q=U.useMemo(function(){return Tr(He({},x),{originalArgs:q,reset:F})},[x,q,F]);return U.useMemo(function(){return[A,Q]},[A,Q])}}}var Rr;(function(t){t.query="query",t.mutation="mutation"})(Rr||(Rr={}));function Ad(t){return t.type===Rr.query}function kd(t){return t.type===Rr.mutation}function Nn(t){return t.replace(t[0],t[0].toUpperCase())}function Pr(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];Object.assign.apply(Object,bd([t],e))}var Nd=Symbol(),Dd=function(t){var e=t===void 0?{}:t,r=e.batch,n=r===void 0?De.batch:r,i=e.useDispatch,a=i===void 0?De.useDispatch:i,s=e.useSelector,u=s===void 0?De.useSelector:s,o=e.useStore,c=o===void 0?De.useStore:o,d=e.unstable__sideEffectsInRender,h=d===void 0?!1:d;return{name:Nd,init:function(v,p,_){var w=p.serializeQueryArgs,S=v,R=Cd({api:v,moduleOptions:{batch:n,useDispatch:a,useSelector:u,useStore:c,unstable__sideEffectsInRender:h},serializeQueryArgs:w,context:_}),E=R.buildQueryHooks,T=R.buildMutationHook,m=R.usePrefetch;return Pr(S,{usePrefetch:m}),Pr(_,{batch:n}),{injectEndpoint:function(b,f){if(Ad(f)){var g=E(b),y=g.useQuery,O=g.useLazyQuery,I=g.useLazyQuerySubscription,P=g.useQueryState,A=g.useQuerySubscription;Pr(S.endpoints[b],{useQuery:y,useLazyQuery:O,useLazyQuerySubscription:I,useQueryState:P,useQuerySubscription:A}),v["use"+Nn(b)+"Query"]=y,v["useLazy"+Nn(b)+"Query"]=O}else if(kd(f)){var C=T(b);Pr(S.endpoints[b],{useMutation:C}),v["use"+Nn(b)+"Mutation"]=C}}}}}},xd=ad(yd(),Dd());const Md=Xl({prepareHeaders:(t,{getState:e,endpoint:r})=>{const{isAuthenticated:n,refresh_token:i}=e().userReducer;return n&&i&&r==="updateLogin"&&t.set(te.refreshTokenHeader,te.keywordRefreshTokenHeader?`${te.keywordRefreshTokenHeader} ${i}`:i),t.set("Content-Type","application/json")}}),ut=xd({baseQuery:async(t,e,r)=>{const n=te.endpoint,i=typeof t=="string"?n:{...t,url:n+t.url};return Md(i,e,r)},endpoints:t=>({login:t.mutation({query({email:e,encodedBody:r,password:n,username:i,token:a}){if(a)return{url:"",method:"POST",headers:{Authorization:`${te.keyword} ${a}`}};if(r)return{url:te.urlLoginForBase64??"",method:"POST",headers:{authorization:"Basic "+r}};let s={};return n&&(s={...s,password:n}),e&&(s={...s,email:e}),i&&(s={...s,username:i}),{url:te.urlLoginForEmailOrUser??"",method:"POST",body:s}}}),signIn:t.mutation({query({body:e,encodedBody:r}){return r?{url:te.urlSignInForBase64??"sign-in",method:"POST",body:e}:{url:te.urlSignIn??"sign-in",method:"POST",body:e}}}),updateLogin:t.mutation({query(){return{url:te.urlForRefreshToken??"login/update",method:"PUT"}}}),passwordReset:t.mutation({query(e){return{url:te.urlForPasswordReset??"reset-password",method:"POST",body:e}}})})}),{useLoginMutation:Ld,useUpdateLoginMutation:Ud,usePasswordResetMutation:Fd,useSignInMutation:jd}=ut,vh="",qd=({children:t,isLoading:e,scrollPosition:r,language:n,toastMessage:i})=>{const a=pe.useSignal(""),s=pe.useSignal({}),[u,{isSuccess:o,isLoading:c,error:d}]=Fd(),{message:h}=U.useContext(Ur),v=U.useRef(null),p=_=>{_.preventDefault(),!o&&u({email:a.value})};return U.useEffect(()=>{if(v.current){const _=v.current.offsetWidth;r.value?(v.current.scrollTo(_,0),v.current.scrollTo(_,0)):v.current.scrollTo(0,0)}},[r.value]),U.useEffect(()=>{d?"data"in d?s.value={code:"auth/password-reset-error",message:d.data&&(Object.values(d.data).find(_=>typeof _=="string")??d.data)}:"status"in d&&(s.value={code:"auth/fetch-failed",message:"error"in d?d.error:"Unexpected Error"}):s.value.message&&(s.value={})},[d]),U.useEffect(()=>{o&&(i.value=n.forgotPasswordLabel)},[o]),D.jsxs("section",{ref:v,className:"modal-container mandatory-scroll-snapping",children:[D.jsxs("section",{className:"modal-data",children:[D.jsx("div",{className:"modal-message",children:e?D.jsx(ns,{}):typeof h=="string"?D.jsx("h1",{children:h}):h}),D.jsx("div",{className:"modal-footer",children:t})]}),D.jsxs("section",{className:"password-recovery",children:[D.jsx("span",{className:"go-back",onClick:()=>r.value=!1,children:"<"}),D.jsxs("form",{onSubmit:p,children:[D.jsx("h1",{children:n.forgotPassword}),D.jsxs("label",{children:["Email:",D.jsx("input",{required:!0,onChange:_=>a.value=_.currentTarget.value,value:a.value,type:"email"})]}),D.jsx("button",{className:"is-btn blue",children:n.submit})]}),D.jsx(Ts,{error:s.value}),c&&D.jsx(ns,{})]}),i.value&&D.jsxs("div",{className:"simple-toast show",children:[D.jsx("button",{onClick:()=>i.value=void 0,children:"X"}),D.jsx("div",{className:"toast-message",children:i})]})]})},mh="",ns=()=>D.jsx("div",{className:"loader-container",children:D.jsxs("div",{className:"loader-box",children:[D.jsx("div",{className:"load blue"}),D.jsx("div",{className:"load red"}),D.jsx("div",{className:"load orange"}),D.jsx("div",{className:"load yellow"}),D.jsx("div",{className:"load green"})]})}),gh="",Bd=(t,e)=>{var r;return((r=t.find(n=>n.code==="*"?!0:n.code===e.code))==null?void 0:r.message)??e.message},is="IS_GOOGLE",as="IS_FACEBOOK",ss="IS_TWITTER",os="IS_GITHUB",us="IS_MICROSOFT",Vd=[{method:"google",constName:is,name:"Google",className:"google-btn"},{method:"facebook",constName:as,name:"Facebook",className:"facebook-btn"},{method:"twitter",constName:ss,name:"Twitter",className:"twitter-btn"},{method:"github",constName:os,name:"GitHub",className:"github-btn"},{method:"microsoft",constName:us,name:"Microsoft",className:"microsoft-btn"}],$d=t=>Vd.filter(e=>t.find(r=>e.method===r)),Wd={es:{logIn:"Iniciar sesión",username:"Usuario",password:"Contraseña",confirm_password:"Confirmar contraseña",continue:"Continuar",submit:"Enviar",continueAs:"Continuar como:",loggedWith:"Logueado con",logOut:"Desloguearse",forgotPassword:"Recuperar contraseña",forgotPasswordLabel:"Email enviado correctamente.",signIn:"Crear cuenta",passwordNotMatch:"Las contraseñas no coinciden",minLength:"La contraseña debe contener mínimo 8 caracteres"},en:{logIn:"Log In",username:"Username",password:"Password",confirm_password:"Confirm Password",continue:"Continue",submit:"Submit",continueAs:"Continue as:",loggedWith:"Logged with",logOut:"Log Out",forgotPassword:"Password Recovery",forgotPasswordLabel:"Email sended successfully.",signIn:"Create account",passwordNotMatch:"Passwords do not match",minLength:"Passwords should contain a minimum of 8 characters"}},Hd=t=>Wd[t],zd=1e3,Qd=5e3,Kd=()=>{const t=pe.useSignal(void 0),e=pe.useSignal(void 0),r=pe.useSignal(void 0);let n=U.useRef(void 0);const i=U.useMemo(()=>(a,s,u)=>new Promise(o=>{if(clearInterval(n.current),n.current=void 0,a.message){s.value=a.message;return}if(!a.expiry){e.value={code:"auth/invalid-auth-response",message:"User response must have an expiry field"};return}n.current=setInterval(()=>{u().unwrap().then(c=>t.value=c).catch(c=>{t.value=void 0,clearInterval(n.current),"data"in c?e.value={code:"auth/firebase-credential-not-provided",message:c.data&&(Object.values(c.data).find(d=>typeof d=="string")??c.data)}:"status"in c&&(e.value={code:"auth/fetch-failed",message:"error"in c?c.error:"Unexpected Error"})})},a.expiry*zd-Qd),t.value=a,r.value=async()=>{await Qi(Ve()).finally(()=>clearInterval(n.current)),r.value=void 0},o()}),[]);return U.useEffect(()=>()=>{n.current&&clearInterval(n.current)},[]),{user:t.value,updateError:e.value,logOut:r.value,authManager:i}};var It=(t=>(t.LOGIN="login",t.SIGN_IN="signIn",t))(It||{});const Gd=t=>Vt(Ve(),ba).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),cs=(t,e)=>{const{code:r,message:n,customData:i}=t,{email:a}=i;e.value={code:r,message:n,email:a}},Jd=t=>Vt(Ve(),ya).catch(e=>cs(e,t)),Yd=t=>Vt(Ve(),_l).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),Xd=t=>Vt(Ve(),Il).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),Zd=t=>Vt(Ve(),wl).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}});/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dn(){return Dn=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Dn.apply(this,arguments)}var ls;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ls||(ls={}));function de(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gt(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xn(t){let{pathname:e="/",search:r="",hash:n=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function ds(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}var fs;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(fs||(fs={}));function Mn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}function ef(t,e){e===void 0&&(e="/");let{pathname:r,search:n="",hash:i=""}=typeof t=="string"?ds(t):t;return{pathname:r?r.startsWith("/")?r:tf(r,e):e,search:rf(n),hash:nf(i)}}function tf(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Ln(t,e,r,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hs(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function ps(t,e,r,n){n===void 0&&(n=!1);let i;typeof t=="string"?i=ds(t):(i=Dn({},t),de(!i.pathname||!i.pathname.includes("?"),Ln("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),Ln("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),Ln("#","search","hash",i)));let a=t===""||i.pathname==="",s=a?"/":i.pathname,u;if(n||s==null)u=r;else{let h=e.length-1;if(s.startsWith("..")){let v=s.split("/");for(;v[0]==="..";)v.shift(),h-=1;i.pathname=v.join("/")}u=h>=0?e[h]:"/"}let o=ef(i,u),c=s&&s!=="/"&&s.endsWith("/"),d=(a||s===".")&&r.endsWith("/");return!o.pathname.endsWith("/")&&(c||d)&&(o.pathname+="/"),o}const Un=t=>t.join("/").replace(/\/\/+/g,"/"),rf=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nf=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,vs=["post","put","patch","delete"];new Set(vs);const af=["get",...vs];new Set(af);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fn(){return Fn=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Fn.apply(this,arguments)}const Cr=$.createContext(null);process.env.NODE_ENV!=="production"&&(Cr.displayName="DataRouter");const ms=$.createContext(null);process.env.NODE_ENV!=="production"&&(ms.displayName="DataRouterState");const sf=$.createContext(null);process.env.NODE_ENV!=="production"&&(sf.displayName="Await");const et=$.createContext(null);process.env.NODE_ENV!=="production"&&(et.displayName="Navigation");const jn=$.createContext(null);process.env.NODE_ENV!=="production"&&(jn.displayName="Location");const wt=$.createContext({outlet:null,matches:[],isDataRoute:!1});process.env.NODE_ENV!=="production"&&(wt.displayName="Route");const of=$.createContext(null);process.env.NODE_ENV!=="production"&&(of.displayName="RouteError");function uf(t,e){let{relative:r}=e===void 0?{}:e;qn()||(process.env.NODE_ENV!=="production"?de(!1,"useHref() may be used only in the context of a <Router> component."):de(!1));let{basename:n,navigator:i}=$.useContext(et),{hash:a,pathname:s,search:u}=Ar(t,{relative:r}),o=s;return n!=="/"&&(o=s==="/"?n:Un([n,s])),i.createHref({pathname:o,search:u,hash:a})}function qn(){return $.useContext(jn)!=null}function Et(){return qn()||(process.env.NODE_ENV!=="production"?de(!1,"useLocation() may be used only in the context of a <Router> component."):de(!1)),$.useContext(jn).location}const gs="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ys(t){$.useContext(et).static||$.useLayoutEffect(t)}function Bn(){let{isDataRoute:t}=$.useContext(wt);return t?hf():cf()}function cf(){qn()||(process.env.NODE_ENV!=="production"?de(!1,"useNavigate() may be used only in the context of a <Router> component."):de(!1));let t=$.useContext(Cr),{basename:e,navigator:r}=$.useContext(et),{matches:n}=$.useContext(wt),{pathname:i}=Et(),a=JSON.stringify(hs(n).map(o=>o.pathnameBase)),s=$.useRef(!1);return ys(()=>{s.current=!0}),$.useCallback(function(o,c){if(c===void 0&&(c={}),process.env.NODE_ENV!=="production"&&Gt(s.current,gs),!s.current)return;if(typeof o=="number"){r.go(o);return}let d=ps(o,JSON.parse(a),i,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Un([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,a,i,t])}function Ar(t,e){let{relative:r}=e===void 0?{}:e,{matches:n}=$.useContext(wt),{pathname:i}=Et(),a=JSON.stringify(hs(n).map(s=>s.pathnameBase));return $.useMemo(()=>ps(t,JSON.parse(a),i,r==="path"),[t,a,i,r])}var bs=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(bs||{}),Vn=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Vn||{});function _s(t){return t+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}function lf(t){let e=$.useContext(Cr);return e||(process.env.NODE_ENV!=="production"?de(!1,_s(t)):de(!1)),e}function df(t){let e=$.useContext(wt);return e||(process.env.NODE_ENV!=="production"?de(!1,_s(t)):de(!1)),e}function Is(t){let e=df(t),r=e.matches[e.matches.length-1];return r.route.id||(process.env.NODE_ENV!=="production"?de(!1,t+' can only be used on routes that contain a unique "id"'):de(!1)),r.route.id}function ff(){return Is(Vn.UseRouteId)}function hf(){let{router:t}=lf(bs.UseNavigateStable),e=Is(Vn.UseNavigateStable),r=$.useRef(!1);return ys(()=>{r.current=!0}),$.useCallback(function(i,a){a===void 0&&(a={}),process.env.NODE_ENV!=="production"&&Gt(r.current,gs),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Fn({fromRouteId:e},a)))},[t,e])}new Promise(()=>{});/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ct(){return ct=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},ct.apply(this,arguments)}function $n(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,a;for(a=0;a<n.length;a++)i=n[a],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}const kr="get",Nr="application/x-www-form-urlencoded";function Dr(t){return t!=null&&typeof t.tagName=="string"}function pf(t){return Dr(t)&&t.tagName.toLowerCase()==="button"}function vf(t){return Dr(t)&&t.tagName.toLowerCase()==="form"}function mf(t){return Dr(t)&&t.tagName.toLowerCase()==="input"}function gf(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function yf(t,e){return t.button===0&&(!e||e==="_self")&&!gf(t)}function Wn(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,r)=>{let n=t[r];return e.concat(Array.isArray(n)?n.map(i=>[r,i]):[[r,n]])},[]))}function bf(t,e){let r=Wn(t);return e&&e.forEach((n,i)=>{r.has(i)||e.getAll(i).forEach(a=>{r.append(i,a)})}),r}let xr=null;function _f(){if(xr===null)try{new FormData(document.createElement("form"),0),xr=!1}catch{xr=!0}return xr}const If=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hn(t){return t!=null&&!If.has(t)?(process.env.NODE_ENV!=="production"&&Gt(!1,'"'+t+'" is not a valid `encType` for `<Form>`/`<fetcher.Form>` '+('and will default to "'+Nr+'"')),null):t}function wf(t,e){let r,n,i,a,s;if(vf(t)){let u=t.getAttribute("action");n=u?Mn(u,e):null,r=t.getAttribute("method")||kr,i=Hn(t.getAttribute("enctype"))||Nr,a=new FormData(t)}else if(pf(t)||mf(t)&&(t.type==="submit"||t.type==="image")){let u=t.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let o=t.getAttribute("formaction")||u.getAttribute("action");if(n=o?Mn(o,e):null,r=t.getAttribute("formmethod")||u.getAttribute("method")||kr,i=Hn(t.getAttribute("formenctype"))||Hn(u.getAttribute("enctype"))||Nr,a=new FormData(u,t),!_f()){let{name:c,type:d,value:h}=t;if(d==="image"){let v=c?c+".":"";a.append(v+"x","0"),a.append(v+"y","0")}else c&&a.append(c,h)}}else{if(Dr(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=kr,n=null,i=Nr,s=t}return a&&i==="text/plain"&&(s=a,a=void 0),{action:n,method:r.toLowerCase(),encType:i,formData:a,body:s}}const Ef=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Sf=["aria-current","caseSensitive","className","end","style","to","children"],Tf=["reloadDocument","replace","state","method","action","onSubmit","submit","relative","preventScrollReset"];process.env.NODE_ENV;const Of=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ws=$.forwardRef(function(e,r){let{onClick:n,relative:i,reloadDocument:a,replace:s,state:u,target:o,to:c,preventScrollReset:d}=e,h=$n(e,Ef),{basename:v}=$.useContext(et),p,_=!1;if(typeof c=="string"&&Rf.test(c)&&(p=c,Of))try{let E=new URL(window.location.href),T=c.startsWith("//")?new URL(E.protocol+c):new URL(c),m=Mn(T.pathname,v);T.origin===E.origin&&m!=null?c=m+T.search+T.hash:_=!0}catch{process.env.NODE_ENV!=="production"&&Gt(!1,'<Link to="'+c+'"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.')}let w=uf(c,{relative:i}),S=Nf(c,{replace:s,state:u,target:o,preventScrollReset:d,relative:i});function R(E){n&&n(E),E.defaultPrevented||S(E)}return $.createElement("a",ct({},h,{href:p||w,onClick:_||a?n:R,ref:r,target:o}))});process.env.NODE_ENV!=="production"&&(ws.displayName="Link");const Pf=$.forwardRef(function(e,r){let{"aria-current":n="page",caseSensitive:i=!1,className:a="",end:s=!1,style:u,to:o,children:c}=e,d=$n(e,Sf),h=Ar(o,{relative:d.relative}),v=Et(),p=$.useContext(ms),{navigator:_}=$.useContext(et),w=_.encodeLocation?_.encodeLocation(h).pathname:h.pathname,S=v.pathname,R=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(S=S.toLowerCase(),R=R?R.toLowerCase():null,w=w.toLowerCase());let E=S===w||!s&&S.startsWith(w)&&S.charAt(w.length)==="/",T=R!=null&&(R===w||!s&&R.startsWith(w)&&R.charAt(w.length)==="/"),m=E?n:void 0,b;typeof a=="function"?b=a({isActive:E,isPending:T}):b=[a,E?"active":null,T?"pending":null].filter(Boolean).join(" ");let f=typeof u=="function"?u({isActive:E,isPending:T}):u;return $.createElement(ws,ct({},d,{"aria-current":m,className:b,ref:r,style:f,to:o}),typeof c=="function"?c({isActive:E,isPending:T}):c)});process.env.NODE_ENV!=="production"&&(Pf.displayName="NavLink");const Cf=$.forwardRef((t,e)=>{let r=Mf();return $.createElement(Es,ct({},t,{submit:r,ref:e}))});process.env.NODE_ENV!=="production"&&(Cf.displayName="Form");const Es=$.forwardRef((t,e)=>{let{reloadDocument:r,replace:n,state:i,method:a=kr,action:s,onSubmit:u,submit:o,relative:c,preventScrollReset:d}=t,h=$n(t,Tf),v=a.toLowerCase()==="get"?"get":"post",p=Lf(s,{relative:c}),_=w=>{if(u&&u(w),w.defaultPrevented)return;w.preventDefault();let S=w.nativeEvent.submitter,R=(S==null?void 0:S.getAttribute("formmethod"))||a;o(S||w.currentTarget,{method:R,replace:n,state:i,relative:c,preventScrollReset:d})};return $.createElement("form",ct({ref:e,method:v,action:p,onSubmit:r?u:_},h))});process.env.NODE_ENV!=="production"&&(Es.displayName="FormImpl"),process.env.NODE_ENV;var zn;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(zn||(zn={}));var Ss;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ss||(Ss={}));function Af(t){return t+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}function kf(t){let e=$.useContext(Cr);return e||(process.env.NODE_ENV!=="production"?de(!1,Af(t)):de(!1)),e}function Nf(t,e){let{target:r,replace:n,state:i,preventScrollReset:a,relative:s}=e===void 0?{}:e,u=Bn(),o=Et(),c=Ar(t,{relative:s});return $.useCallback(d=>{if(yf(d,r)){d.preventDefault();let h=n!==void 0?n:xn(o)===xn(c);u(t,{replace:h,state:i,preventScrollReset:a,relative:s})}},[o,u,c,n,i,r,t,a,s])}function Df(t){process.env.NODE_ENV!=="production"&&Gt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");let e=$.useRef(Wn(t)),r=$.useRef(!1),n=Et(),i=$.useMemo(()=>bf(n.search,r.current?null:e.current),[n.search]),a=Bn(),s=$.useCallback((u,o)=>{const c=Wn(typeof u=="function"?u(i):u);r.current=!0,a("?"+c,o)},[a,i]);return[i,s]}function xf(){if(typeof document>"u")throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}function Mf(){let{router:t}=kf(zn.UseSubmit),{basename:e}=$.useContext(et),r=ff();return $.useCallback(function(n,i){i===void 0&&(i={}),xf();let{action:a,method:s,encType:u,formData:o,body:c}=wf(n,e);t.navigate(i.action||a,{preventScrollReset:i.preventScrollReset,formData:o,body:c,formMethod:i.method||s,formEncType:i.encType||u,replace:i.replace,state:i.state,fromRouteId:r})},[t,e,r])}function Lf(t,e){let{relative:r}=e===void 0?{}:e,{basename:n}=$.useContext(et),i=$.useContext(wt);i||(process.env.NODE_ENV!=="production"?de(!1,"useFormAction must be used inside a RouteContext"):de(!1));let[a]=i.matches.slice(-1),s=ct({},Ar(t||".",{relative:r})),u=Et();if(t==null&&(s.search=u.search,a.route.index)){let o=new URLSearchParams(s.search);o.delete("index"),s.search=o.toString()?"?"+o.toString():""}return(!t||t===".")&&a.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:Un([n,s.pathname])),xn(s)}const Uf={login:{email:"",password:"",username:""},signIn:{email:"",username:"",password1:"",password2:""}},Ff=(t,e)=>{let r="";const{password1:n,password2:i}=t;return n.length>0&&n.length<8?r=e.minLength:i.length>0&&i!==n&&(r=e.passwordNotMatch),r},jf=(t,e,r)=>{const[n]=Ld(),[i]=jd(),[a]=Ud(),[s]=Df(),u=Bn(),o=pe.useSignal(Uf),c=pe.useSignal(!1),d=pe.useSignal(!1),h=pe.useSignal(!1),v=pe.useSignal({});U.useEffect(()=>{h.value||(h.value=!0),kc(Ve()).then(f=>{f&&f.user.getIdToken().then(g=>m(g))}).catch(f=>{h.value&&(h.value=!1),cs(f,v)})},[]);const p=()=>{h.value=!1;const f=s.get("next");f&&u(f)},_=f=>{"data"in f?v.value={code:"auth/firebase-credential-not-provided",message:f.data&&(Object.values(f.data).find(g=>typeof g=="string")??f.data)}:"status"in f&&(v.value={code:"auth/fetch-failed",message:"error"in f?f.error:"Unexpected Error"}),h.value=!1},w=()=>{pe.batch(()=>{c.value=!c.value,d.value&&(d.value=!d.value)})},S=f=>{const{target:g}=f,y=g.getAttribute("data-section")??It.LOGIN;if(o.value={...o.value,[y]:{...o.value[y],[g.name]:g.value}},y===It.SIGN_IN){const O=Ff(o.value[y],e);O?v.value={code:"sign-in/password",message:O}:v.value={}}},R=f=>{if(te.hasToS&&!c.value){d.value=!0;return}h.value=!0,m(f)},E=async f=>{if(f.preventDefault(),v.value={},te.hasToS&&!c.value){d.value=!0;return}if(h.value)return;h.value=!0;const g=f.currentTarget.getAttribute("data-section")??It.LOGIN;let y={};if(g===It.LOGIN){if(te.acceptUsername?y={username:o.value[g].username,password:o.value[g].password}:y={email:o.value[g].email,password:o.value[g].password},te.bodyAsBase64){const O=Object.entries(y).map(([P,A])=>`${P}=${A}`).join("&");y={encodedBody:btoa(O)}}n(y).unwrap().then(T).catch(_)}else if(g===It.SIGN_IN){let O=o.value[g];if(te.bodyAsBase64){const I=Object.entries(O).map(([P,A])=>`${P}=${A}`).join("&");O=btoa(I)}i({body:O,encodedBody:te.bodyAsBase64}).unwrap().then(T).catch(_)}},T=async f=>{t(f,r,a).then(p)},m=async f=>{h.value=!0,n({token:f}).unwrap().then(T).catch(_)};return{form:o,radio:c,isLoading:h,handleError:v,confirmTp:d,handleChange:S,handleRadio:w,handleSocialLogin:async f=>{if(te.hasToS&&!c.value){d.value=!0;return}if(!h.value)switch(h.value=!0,f){case is:Jd(v);break;case as:Gd(v);break;case ss:Yd(v);break;case os:Xd(v);break;case us:Zd(v);break}},handleSubmit:E,handleSubmitUserAlreadyLogged:R,handleToken:m}},qf=()=>{const t=pe.useSignal(!1),e=pe.useSignal(void 0),r=pe.useSignal(void 0),{authManager:n}=U.useContext(Ur),i=Hd(te.language),{form:a,radio:s,confirmTp:u,isLoading:o,handleError:c,handleSubmit:d,handleSubmitUserAlreadyLogged:h,handleChange:v,handleRadio:p,handleSocialLogin:_}=jf(n,i,e);return U.useEffect(()=>{(async()=>{o.value=!0;let S=ic(Ve(),async R=>{R&&await R.getIdToken().then(E=>{const T=R.providerData[0];r.value={...T,providerId:T.providerId.split(".")[0],tokenId:E}}).finally(()=>o.value=!1),o.value=!1,S()})})()},[]),D.jsx(qd,{isLoading:o.value,scrollPosition:t,language:i,toastMessage:e,children:D.jsxs("div",{className:"login-container",children:[D.jsxs("div",{className:"login",children:[D.jsx(Bf,{handleSocialLogin:_}),D.jsx(Vf,{forgotPassword:t,form:a,handleChange:v,handleSubmit:d,language:i})]}),D.jsx(Ts,{error:c.value}),D.jsx($f,{alreadyUser:r,language:i,handleSubmitUserAlreadyLogged:h}),D.jsx(Wf,{confirmTp:u.value,handleRadio:p,radioValue:s.value})]})})},Bf=({handleSocialLogin:t})=>D.jsx("div",{children:$d(te.signInMethods).map(({className:e,name:r,constName:n,icon:i},a)=>D.jsxs("button",{onClick:()=>t(n),className:e,children:[i&&i,r]},a))}),Vf=({handleSubmit:t,language:e,handleChange:r,form:n,forgotPassword:i})=>{const a=pe.useSignal(!0),s=U.useRef(null);return U.useEffect(()=>{if(s.current){const u=s.current.offsetWidth;s.current.scrollTo(a.value?0:u,0)}},[a.value]),D.jsx("div",{children:D.jsxs("section",{ref:s,className:"form-email mandatory-scroll-snapping",children:[D.jsxs("form",{className:"form-field",autoComplete:"on","data-section":"login",onSubmit:t,children:[te.acceptUsername?D.jsx(D.Fragment,{children:D.jsx("input",{required:!0,"data-section":"login",autoComplete:"username",placeholder:`Email | ${e.username}`,name:"username",onChange:r,value:n.value.login.username,type:"text"})}):D.jsx(D.Fragment,{children:D.jsx("input",{required:!0,"data-section":"login",autoComplete:"email",placeholder:"Email",name:"email",onChange:r,value:n.value.login.email,type:"email"})}),D.jsx("input",{required:!0,"data-section":"login",autoComplete:"current-password",placeholder:e.password,name:"password",onChange:r,value:n.value.login.password,type:"password"}),D.jsx("span",{onClick:()=>i.value=!0,className:"forgot-password",children:e.forgotPassword}),D.jsx("button",{className:"email-login",children:e.logIn}),D.jsx("span",{onClick:()=>a.value=!1,className:"form-action-change",children:e.signIn})]}),D.jsxs("form",{className:"form-field",autoComplete:"on","data-section":"signIn",onSubmit:t,children:[D.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:"Email",name:"email",onChange:r,value:n.value.signIn.email,type:"email"}),D.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:`${e.username}`,name:"username",onChange:r,value:n.value.signIn.username,type:"text"}),D.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:e.password,name:"password1",onChange:r,value:n.value.signIn.password1,type:"password"}),D.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:e.confirm_password,name:"password2",onChange:r,value:n.value.signIn.password2,type:"password"}),D.jsx("button",{className:"email-login",children:e.signIn}),D.jsx("span",{onClick:()=>a.value=!0,className:"form-action-change",children:e.logIn})]})]})})},$f=({alreadyUser:t,language:e,handleSubmitUserAlreadyLogged:r})=>{const n=()=>{Qi(Ve()).finally(()=>t.value=void 0)};return D.jsx(D.Fragment,{children:t.value&&D.jsxs("section",{className:"user-already-logged",children:[D.jsxs("p",{children:[e.continueAs," ",t.value.displayName,t.value.photoURL&&D.jsx("img",{src:t.value.photoURL,alt:"user image"}),D.jsxs("span",{children:[e.loggedWith," ",t.value.providerId]})]}),D.jsxs("div",{className:"user-logged-choice",children:[D.jsx("button",{onClick:()=>{var i;return r(((i=t.value)==null?void 0:i.tokenId)??"")},className:"choice-ok",children:"Ok"}),D.jsx("button",{onClick:n,className:"choice-not",children:e.logOut})]})]})})},Wf=({confirmTp:t,handleRadio:e,radioValue:r})=>{const n=U.useRef(null);return U.useEffect(()=>{t&&n.current&&n.current.scrollIntoView({behavior:"smooth"})},[t]),D.jsx("section",{children:te.hasToS&&D.jsxs(D.Fragment,{children:[D.jsxs("label",{className:"login-accept",children:[D.jsx("input",{onChange:e,type:"checkbox",checked:r}),te.hasToS.label]}),t&&D.jsx("span",{ref:n,className:"notify error",children:te.hasToS.errorLabel})]})})},Ts=({error:t})=>{const e=n=>D.jsx(D.Fragment,{children:Object.entries(n).map(([i,a],s)=>D.jsxs("span",{children:[i,": ",a]},s))}),r=(n,i)=>{const a=Bd(n,i);return D.jsx(D.Fragment,{children:typeof i=="string"?i:e(a)})};return D.jsx(D.Fragment,{children:t.message&&D.jsx("span",{autoFocus:!0,className:"notify error",children:te.firebaseErrorMessages?r(te.firebaseErrorMessages,t):typeof t.message=="string"?t.message:e(t.message)})})},Os={user:null,isAuthenticated:!1,expiry:void 0,refresh_token:void 0,token:void 0},Hf=L.createSlice({name:"UserSlice",initialState:Os,reducers:{},extraReducers(t){t.addMatcher(ut.endpoints.login.matchFulfilled,(e,r)=>(e={...r.payload,isAuthenticated:!0},e)).addMatcher(ut.endpoints.updateLogin.matchFulfilled,(e,r)=>(e={...r.payload,isAuthenticated:!0},e)).addMatcher(ut.endpoints.updateLogin.matchRejected,e=>(e=Os,e))}}),{reducer:zf}=Hf,Qf=L.combineReducers({userReducer:zf,[ut.reducerPath]:ut.reducer}),Kf=L.configureStore({reducer:Qf,middleware:t=>t().concat(ut.middleware)}),Gf=({message:t,authManager:e})=>bl()?D.jsx(De.Provider,{store:Kf,children:D.jsx(Ur.Provider,{value:{message:t,authManager:e},children:D.jsx(qf,{})})}):D.jsx("h1",{children:"Error: Missing firebaseConfig in setConfig"});Ie.Auth=Gf,Ie.setConfig=yl,Ie.useAuth=Kd,Object.defineProperty(Ie,Symbol.toStringTag,{value:"Module"})});
