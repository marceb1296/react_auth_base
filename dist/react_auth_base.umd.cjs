(function(be,F){typeof exports=="object"&&typeof module<"u"?F(exports,require("react"),require("@preact/signals-react"),require("@reduxjs/toolkit"),require("react-redux")):typeof define=="function"&&define.amd?define(["exports","react","@preact/signals-react","@reduxjs/toolkit","react-redux"],F):(be=typeof globalThis<"u"?globalThis:be||self,F(be.react_auth_base={},be.React,be.SignalsReact,be.ReduxToolkit,be.ReactRedux))})(this,function(be,F,he,L,Me){"use strict";var Er={exports:{}},wt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var En;function Ja(){if(En)return wt;En=1;var t=F,e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(u,o,l){var h,m={},y=null,f=null;l!==void 0&&(y=""+l),o.key!==void 0&&(y=""+o.key),o.ref!==void 0&&(f=o.ref);for(h in o)n.call(o,h)&&!a.hasOwnProperty(h)&&(m[h]=o[h]);if(u&&u.defaultProps)for(h in o=u.defaultProps,o)m[h]===void 0&&(m[h]=o[h]);return{$$typeof:e,type:u,key:y,ref:f,props:m,_owner:i.current}}return wt.Fragment=r,wt.jsx=s,wt.jsxs=s,wt}var Et={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tn;function Ya(){return Tn||(Tn=1,process.env.NODE_ENV!=="production"&&function(){var t=F,e=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),o=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),f=Symbol.for("react.offscreen"),w=Symbol.iterator,I="@@iterator";function R(c){if(c===null||typeof c!="object")return null;var k=w&&c[w]||c[I];return typeof k=="function"?k:null}var O=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(c){{for(var k=arguments.length,M=new Array(k>1?k-1:0),H=1;H<k;H++)M[H-1]=arguments[H];d("error",c,M)}}function d(c,k,M){{var H=O.ReactDebugCurrentFrame,Z=H.getStackAddendum();Z!==""&&(k+="%s",M=M.concat([Z]));var ne=M.map(function($){return String($)});ne.unshift("Warning: "+k),Function.prototype.apply.call(console[c],console,ne)}}var g=!1,v=!1,p=!1,_=!1,T=!1,S;S=Symbol.for("react.module.reference");function E(c){return!!(typeof c=="string"||typeof c=="function"||c===n||c===a||T||c===i||c===l||c===h||_||c===f||g||v||p||typeof c=="object"&&c!==null&&(c.$$typeof===y||c.$$typeof===m||c.$$typeof===s||c.$$typeof===u||c.$$typeof===o||c.$$typeof===S||c.getModuleId!==void 0))}function A(c,k,M){var H=c.displayName;if(H)return H;var Z=k.displayName||k.name||"";return Z!==""?M+"("+Z+")":M}function C(c){return c.displayName||"Context"}function P(c){if(c==null)return null;if(typeof c.tag=="number"&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof c=="function")return c.displayName||c.name||null;if(typeof c=="string")return c;switch(c){case n:return"Fragment";case r:return"Portal";case a:return"Profiler";case i:return"StrictMode";case l:return"Suspense";case h:return"SuspenseList"}if(typeof c=="object")switch(c.$$typeof){case u:var k=c;return C(k)+".Consumer";case s:var M=c;return C(M._context)+".Provider";case o:return A(c,c.render,"ForwardRef");case m:var H=c.displayName||null;return H!==null?H:P(c.type)||"Memo";case y:{var Z=c,ne=Z._payload,$=Z._init;try{return P($(ne))}catch{return null}}}return null}var N=Object.assign,x=0,B,U,j,W,G,z,J;function V(){}V.__reactDisabledLog=!0;function Y(){{if(x===0){B=console.log,U=console.info,j=console.warn,W=console.error,G=console.group,z=console.groupCollapsed,J=console.groupEnd;var c={configurable:!0,enumerable:!0,value:V,writable:!0};Object.defineProperties(console,{info:c,log:c,warn:c,error:c,group:c,groupCollapsed:c,groupEnd:c})}x++}}function Q(){{if(x--,x===0){var c={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:N({},c,{value:B}),info:N({},c,{value:U}),warn:N({},c,{value:j}),error:N({},c,{value:W}),group:N({},c,{value:G}),groupCollapsed:N({},c,{value:z}),groupEnd:N({},c,{value:J})})}x<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var X=O.ReactCurrentDispatcher,ae;function ve(c,k,M){{if(ae===void 0)try{throw Error()}catch(Z){var H=Z.stack.trim().match(/\n( *(at )?)/);ae=H&&H[1]||""}return`
`+ae+c}}var _e=!1,ge;{var Ie=typeof WeakMap=="function"?WeakMap:Map;ge=new Ie}function re(c,k){if(!c||_e)return"";{var M=ge.get(c);if(M!==void 0)return M}var H;_e=!0;var Z=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var ne;ne=X.current,X.current=null,Y();try{if(k){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(He){H=He}Reflect.construct(c,[],$)}else{try{$.call()}catch(He){H=He}c.call($.prototype)}}else{try{throw Error()}catch(He){H=He}c()}}catch(He){if(He&&H&&typeof He.stack=="string"){for(var K=He.stack.split(`
`),fe=H.stack.split(`
`),ue=K.length-1,ce=fe.length-1;ue>=1&&ce>=0&&K[ue]!==fe[ce];)ce--;for(;ue>=1&&ce>=0;ue--,ce--)if(K[ue]!==fe[ce]){if(ue!==1||ce!==1)do if(ue--,ce--,ce<0||K[ue]!==fe[ce]){var Ee=`
`+K[ue].replace(" at new "," at ");return c.displayName&&Ee.includes("<anonymous>")&&(Ee=Ee.replace("<anonymous>",c.displayName)),typeof c=="function"&&ge.set(c,Ee),Ee}while(ue>=1&&ce>=0);break}}}finally{_e=!1,X.current=ne,Q(),Error.prepareStackTrace=Z}var It=c?c.displayName||c.name:"",$a=It?ve(It):"";return typeof c=="function"&&ge.set(c,$a),$a}function de(c,k,M){return re(c,!1)}function Ye(c){var k=c.prototype;return!!(k&&k.isReactComponent)}function ot(c,k,M){if(c==null)return"";if(typeof c=="function")return re(c,Ye(c));if(typeof c=="string")return ve(c);switch(c){case l:return ve("Suspense");case h:return ve("SuspenseList")}if(typeof c=="object")switch(c.$$typeof){case o:return de(c.render);case m:return ot(c.type,k,M);case y:{var H=c,Z=H._payload,ne=H._init;try{return ot(ne(Z),k,M)}catch{}}}return""}var Xe=Object.prototype.hasOwnProperty,ut={},bt=O.ReactDebugCurrentFrame;function Ze(c){if(c){var k=c._owner,M=ot(c.type,c._source,k?k.type:null);bt.setExtraStackFrame(M)}else bt.setExtraStackFrame(null)}function wr(c,k,M,H,Z){{var ne=Function.call.bind(Xe);for(var $ in c)if(ne(c,$)){var K=void 0;try{if(typeof c[$]!="function"){var fe=Error((H||"React class")+": "+M+" type `"+$+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof c[$]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw fe.name="Invariant Violation",fe}K=c[$](k,$,H,M,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(ue){K=ue}K&&!(K instanceof Error)&&(Ze(Z),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",H||"React class",M,$,typeof K),Ze(null)),K instanceof Error&&!(K.message in ut)&&(ut[K.message]=!0,Ze(Z),b("Failed %s type: %s",M,K.message),Ze(null))}}}var we=Array.isArray;function me(c){return we(c)}function Sd(c){{var k=typeof Symbol=="function"&&Symbol.toStringTag,M=k&&c[Symbol.toStringTag]||c.constructor.name||"Object";return M}}function Rd(c){try{return ja(c),!1}catch{return!0}}function ja(c){return""+c}function Ba(c){if(Rd(c))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Sd(c)),ja(c)}var Vt=O.ReactCurrentOwner,Od={key:!0,ref:!0,__self:!0,__source:!0},qa,Ha,bn;bn={};function Ad(c){if(Xe.call(c,"ref")){var k=Object.getOwnPropertyDescriptor(c,"ref").get;if(k&&k.isReactWarning)return!1}return c.ref!==void 0}function Cd(c){if(Xe.call(c,"key")){var k=Object.getOwnPropertyDescriptor(c,"key").get;if(k&&k.isReactWarning)return!1}return c.key!==void 0}function Pd(c,k){if(typeof c.ref=="string"&&Vt.current&&k&&Vt.current.stateNode!==k){var M=P(Vt.current.type);bn[M]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',P(Vt.current.type),c.ref),bn[M]=!0)}}function kd(c,k){{var M=function(){qa||(qa=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",k))};M.isReactWarning=!0,Object.defineProperty(c,"key",{get:M,configurable:!0})}}function Dd(c,k){{var M=function(){Ha||(Ha=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",k))};M.isReactWarning=!0,Object.defineProperty(c,"ref",{get:M,configurable:!0})}}var Nd=function(c,k,M,H,Z,ne,$){var K={$$typeof:e,type:c,key:k,ref:M,props:$,_owner:ne};return K._store={},Object.defineProperty(K._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(K,"_self",{configurable:!1,enumerable:!1,writable:!1,value:H}),Object.defineProperty(K,"_source",{configurable:!1,enumerable:!1,writable:!1,value:Z}),Object.freeze&&(Object.freeze(K.props),Object.freeze(K)),K};function Md(c,k,M,H,Z){{var ne,$={},K=null,fe=null;M!==void 0&&(Ba(M),K=""+M),Cd(k)&&(Ba(k.key),K=""+k.key),Ad(k)&&(fe=k.ref,Pd(k,Z));for(ne in k)Xe.call(k,ne)&&!Od.hasOwnProperty(ne)&&($[ne]=k[ne]);if(c&&c.defaultProps){var ue=c.defaultProps;for(ne in ue)$[ne]===void 0&&($[ne]=ue[ne])}if(K||fe){var ce=typeof c=="function"?c.displayName||c.name||"Unknown":c;K&&kd($,ce),fe&&Dd($,ce)}return Nd(c,K,fe,Z,H,Vt.current,$)}}var _n=O.ReactCurrentOwner,Va=O.ReactDebugCurrentFrame;function _t(c){if(c){var k=c._owner,M=ot(c.type,c._source,k?k.type:null);Va.setExtraStackFrame(M)}else Va.setExtraStackFrame(null)}var In;In=!1;function wn(c){return typeof c=="object"&&c!==null&&c.$$typeof===e}function Wa(){{if(_n.current){var c=P(_n.current.type);if(c)return`

Check the render method of \``+c+"`."}return""}}function xd(c){{if(c!==void 0){var k=c.fileName.replace(/^.*[\\\/]/,""),M=c.lineNumber;return`

Check your code at `+k+":"+M+"."}return""}}var za={};function Ld(c){{var k=Wa();if(!k){var M=typeof c=="string"?c:c.displayName||c.name;M&&(k=`

Check the top-level render call using <`+M+">.")}return k}}function Qa(c,k){{if(!c._store||c._store.validated||c.key!=null)return;c._store.validated=!0;var M=Ld(k);if(za[M])return;za[M]=!0;var H="";c&&c._owner&&c._owner!==_n.current&&(H=" It was passed a child from "+P(c._owner.type)+"."),_t(c),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',M,H),_t(null)}}function Ka(c,k){{if(typeof c!="object")return;if(me(c))for(var M=0;M<c.length;M++){var H=c[M];wn(H)&&Qa(H,k)}else if(wn(c))c._store&&(c._store.validated=!0);else if(c){var Z=R(c);if(typeof Z=="function"&&Z!==c.entries)for(var ne=Z.call(c),$;!($=ne.next()).done;)wn($.value)&&Qa($.value,k)}}}function Fd(c){{var k=c.type;if(k==null||typeof k=="string")return;var M;if(typeof k=="function")M=k.propTypes;else if(typeof k=="object"&&(k.$$typeof===o||k.$$typeof===m))M=k.propTypes;else return;if(M){var H=P(k);wr(M,c.props,"prop",H,c)}else if(k.PropTypes!==void 0&&!In){In=!0;var Z=P(k);b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",Z||"Unknown")}typeof k.getDefaultProps=="function"&&!k.getDefaultProps.isReactClassApproved&&b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ud(c){{for(var k=Object.keys(c.props),M=0;M<k.length;M++){var H=k[M];if(H!=="children"&&H!=="key"){_t(c),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",H),_t(null);break}}c.ref!==null&&(_t(c),b("Invalid attribute `ref` supplied to `React.Fragment`."),_t(null))}}function Ga(c,k,M,H,Z,ne){{var $=E(c);if(!$){var K="";(c===void 0||typeof c=="object"&&c!==null&&Object.keys(c).length===0)&&(K+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var fe=xd(Z);fe?K+=fe:K+=Wa();var ue;c===null?ue="null":me(c)?ue="array":c!==void 0&&c.$$typeof===e?(ue="<"+(P(c.type)||"Unknown")+" />",K=" Did you accidentally export a JSX literal instead of a component?"):ue=typeof c,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",ue,K)}var ce=Md(c,k,M,Z,ne);if(ce==null)return ce;if($){var Ee=k.children;if(Ee!==void 0)if(H)if(me(Ee)){for(var It=0;It<Ee.length;It++)Ka(Ee[It],c);Object.freeze&&Object.freeze(Ee)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ka(Ee,c)}return c===n?Ud(ce):Fd(ce),ce}}function jd(c,k,M){return Ga(c,k,M,!0)}function Bd(c,k,M){return Ga(c,k,M,!1)}var qd=Bd,Hd=jd;Et.Fragment=n,Et.jsx=qd,Et.jsxs=Hd}()),Et}process.env.NODE_ENV==="production"?Er.exports=Ja():Er.exports=Ya();var D=Er.exports;const Tr=F.createContext({});/**
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
 */const Sn=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},Xa=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[r++];e[n++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[r++],s=t[r++],u=t[r++],o=((i&7)<<18|(a&63)<<12|(s&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(o>>10)),e[n++]=String.fromCharCode(56320+(o&1023))}else{const a=t[r++],s=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(a&63)<<6|s&63)}}return e.join("")},Rn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const a=t[i],s=i+1<t.length,u=s?t[i+1]:0,o=i+2<t.length,l=o?t[i+2]:0,h=a>>2,m=(a&3)<<4|u>>4;let y=(u&15)<<2|l>>6,f=l&63;o||(f=64,s||(y=64)),n.push(r[h],r[m],r[y],r[f])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xa(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const a=r[t.charAt(i++)],u=i<t.length?r[t.charAt(i)]:0;++i;const l=i<t.length?r[t.charAt(i)]:64;++i;const m=i<t.length?r[t.charAt(i)]:64;if(++i,a==null||u==null||l==null||m==null)throw new Za;const y=a<<2|u>>4;if(n.push(y),l!==64){const f=u<<4&240|l>>2;if(n.push(f),m!==64){const w=l<<6&192|m;n.push(w)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Za extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const es=function(t){const e=Sn(t);return Rn.encodeByteArray(e,!0)},On=function(t){return es(t).replace(/\./g,"")},An=function(t){try{return Rn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ts(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rs=()=>ts().__FIREBASE_DEFAULTS__,ns=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},is=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&An(t[1]);return e&&JSON.parse(e)},Sr=()=>{try{return rs()||ns()||is()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},as=t=>{var e,r;return(r=(e=Sr())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},Cn=()=>{var t;return(t=Sr())===null||t===void 0?void 0:t.config},Pn=t=>{var e;return(e=Sr())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ss{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function os(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function us(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cs(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ls(){const t=le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ds(){try{return typeof indexedDB=="object"}catch{return!1}}function fs(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(r){e(r)}})}/**
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
 */const hs="FirebaseError";class Ve extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=hs,Object.setPrototypeOf(this,Ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tt.prototype.create)}}class Tt{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,a=this.errors[e],s=a?ps(a,n):"Error",u=`${this.serviceName}: ${s} (${i}).`;return new Ve(i,u,n)}}function ps(t,e){return t.replace(vs,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const vs=/\{\$([^}]+)}/g;function gs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wt(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const a=t[i],s=e[i];if(kn(a)&&kn(s)){if(!Wt(a,s))return!1}else if(a!==s)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function kn(t){return t!==null&&typeof t=="object"}/**
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
 */function St(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ms(t,e){const r=new ys(t,e);return r.subscribe.bind(r)}class ys{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");bs(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=Rr),i.error===void 0&&(i.error=Rr),i.complete===void 0&&(i.complete=Rr);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bs(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function Rr(){}/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class ct{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const et="[DEFAULT]";/**
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
 */class _s{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new ss;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ws(e))try{this.getOrInitializeService({instanceIdentifier:et})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const a=this.getOrInitializeService({instanceIdentifier:i});n.resolve(a)}catch{}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[a,s]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);n===u&&s.resolve(i)}return i}onInit(e,r){var n;const i=this.normalizeInstanceIdentifier(r),a=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;a.add(e),this.onInitCallbacks.set(i,a);const s=this.instances.get(i);return s&&e(s,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Is(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Is(t){return t===et?void 0:t}function ws(t){return t.instantiationMode==="EAGER"}/**
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
 */class Es{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new _s(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Ts={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Ss=te.INFO,Rs={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Os=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=Rs[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dn{constructor(e){this.name=e,this._logLevel=Ss,this._logHandler=Os,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ts[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const As=(t,e)=>e.some(r=>t instanceof r);let Nn,Mn;function Cs(){return Nn||(Nn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ps(){return Mn||(Mn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xn=new WeakMap,Or=new WeakMap,Ln=new WeakMap,Ar=new WeakMap,Cr=new WeakMap;function ks(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",s)},a=()=>{r(ze(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",s)});return e.then(r=>{r instanceof IDBCursor&&xn.set(r,t)}).catch(()=>{}),Cr.set(e,t),e}function Ds(t){if(Or.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",s),t.removeEventListener("abort",s)},a=()=>{r(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",s),t.addEventListener("abort",s)});Or.set(t,e)}let Pr={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return Or.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ln.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ze(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ns(t){Pr=t(Pr)}function Ms(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(kr(this),e,...r);return Ln.set(n,e.sort?e.sort():[e]),ze(n)}:Ps().includes(t)?function(...e){return t.apply(kr(this),e),ze(xn.get(this))}:function(...e){return ze(t.apply(kr(this),e))}}function xs(t){return typeof t=="function"?Ms(t):(t instanceof IDBTransaction&&Ds(t),As(t,Cs())?new Proxy(t,Pr):t)}function ze(t){if(t instanceof IDBRequest)return ks(t);if(Ar.has(t))return Ar.get(t);const e=xs(t);return e!==t&&(Ar.set(t,e),Cr.set(e,t)),e}const kr=t=>Cr.get(t);function Ls(t,e,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){const s=indexedDB.open(t,e),u=ze(s);return n&&s.addEventListener("upgradeneeded",o=>{n(ze(s.result),o.oldVersion,o.newVersion,ze(s.transaction),o)}),r&&s.addEventListener("blocked",o=>r(o.oldVersion,o.newVersion,o)),u.then(o=>{a&&o.addEventListener("close",()=>a()),i&&o.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),u}const Fs=["get","getKey","getAll","getAllKeys","count"],Us=["put","add","delete","clear"],Dr=new Map;function Fn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dr.get(e))return Dr.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=Us.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Fs.includes(r)))return;const a=async function(s,...u){const o=this.transaction(s,i?"readwrite":"readonly");let l=o.store;return n&&(l=l.index(u.shift())),(await Promise.all([l[r](...u),i&&o.done]))[0]};return Dr.set(e,a),a}Ns(t=>({...t,get:(e,r,n)=>Fn(e,r)||t.get(e,r,n),has:(e,r)=>!!Fn(e,r)||t.has(e,r)}));/**
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
 */class js{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Bs(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function Bs(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nr="@firebase/app",Un="0.9.13";/**
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
 */const tt=new Dn("@firebase/app"),qs="@firebase/app-compat",Hs="@firebase/analytics-compat",Vs="@firebase/analytics",Ws="@firebase/app-check-compat",zs="@firebase/app-check",Qs="@firebase/auth",Ks="@firebase/auth-compat",Gs="@firebase/database",$s="@firebase/database-compat",Js="@firebase/functions",Ys="@firebase/functions-compat",Xs="@firebase/installations",Zs="@firebase/installations-compat",eo="@firebase/messaging",to="@firebase/messaging-compat",ro="@firebase/performance",no="@firebase/performance-compat",io="@firebase/remote-config",ao="@firebase/remote-config-compat",so="@firebase/storage",oo="@firebase/storage-compat",uo="@firebase/firestore",co="@firebase/firestore-compat",lo="firebase",fo="9.23.0";/**
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
 */const Mr="[DEFAULT]",ho={[Nr]:"fire-core",[qs]:"fire-core-compat",[Vs]:"fire-analytics",[Hs]:"fire-analytics-compat",[zs]:"fire-app-check",[Ws]:"fire-app-check-compat",[Qs]:"fire-auth",[Ks]:"fire-auth-compat",[Gs]:"fire-rtdb",[$s]:"fire-rtdb-compat",[Js]:"fire-fn",[Ys]:"fire-fn-compat",[Xs]:"fire-iid",[Zs]:"fire-iid-compat",[eo]:"fire-fcm",[to]:"fire-fcm-compat",[ro]:"fire-perf",[no]:"fire-perf-compat",[io]:"fire-rc",[ao]:"fire-rc-compat",[so]:"fire-gcs",[oo]:"fire-gcs-compat",[uo]:"fire-fst",[co]:"fire-fst-compat","fire-js":"fire-js",[lo]:"fire-js-all"};/**
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
 */const zt=new Map,xr=new Map;function po(t,e){try{t.container.addComponent(e)}catch(r){tt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Rt(t){const e=t.name;if(xr.has(e))return tt.debug(`There were multiple attempts to register component ${e}.`),!1;xr.set(e,t);for(const r of zt.values())po(r,t);return!0}function jn(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const vo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qe=new Tt("app","Firebase",vo);/**
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
 */class go{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}}/**
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
 */const Ot=fo;function Bn(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Mr,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Qe.create("bad-app-name",{appName:String(i)});if(r||(r=Cn()),!r)throw Qe.create("no-options");const a=zt.get(i);if(a){if(Wt(r,a.options)&&Wt(n,a.config))return a;throw Qe.create("duplicate-app",{appName:i})}const s=new Es(i);for(const o of xr.values())s.addComponent(o);const u=new go(r,n,s);return zt.set(i,u),u}function mo(t=Mr){const e=zt.get(t);if(!e&&t===Mr&&Cn())return Bn();if(!e)throw Qe.create("no-app",{appName:t});return e}function lt(t,e,r){var n;let i=(n=ho[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const a=i.match(/\s|\//),s=e.match(/\s|\//);if(a||s){const u=[`Unable to register library "${i}" with version "${e}":`];a&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&u.push("and"),s&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tt.warn(u.join(" "));return}Rt(new ct(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const yo="firebase-heartbeat-database",bo=1,At="firebase-heartbeat-store";let Lr=null;function qn(){return Lr||(Lr=Ls(yo,bo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(At)}}}).catch(t=>{throw Qe.create("idb-open",{originalErrorMessage:t.message})})),Lr}async function _o(t){try{return await(await qn()).transaction(At).objectStore(At).get(Vn(t))}catch(e){if(e instanceof Ve)tt.warn(e.message);else{const r=Qe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tt.warn(r.message)}}}async function Hn(t,e){try{const n=(await qn()).transaction(At,"readwrite");await n.objectStore(At).put(e,Vn(t)),await n.done}catch(r){if(r instanceof Ve)tt.warn(r.message);else{const n=Qe.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});tt.warn(n.message)}}}function Vn(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Io=1024,wo=30*24*60*60*1e3;class Eo{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new So(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Wn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=wo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wn(),{heartbeatsToSend:r,unsentEntries:n}=To(this._heartbeatsCache.heartbeats),i=On(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wn(){return new Date().toISOString().substring(0,10)}function To(t,e=Io){const r=[];let n=t.slice();for(const i of t){const a=r.find(s=>s.agent===i.agent);if(a){if(a.dates.push(i.date),zn(r)>e){a.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),zn(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class So{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ds()?fs().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _o(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hn(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hn(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zn(t){return On(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ro(t){Rt(new ct("platform-logger",e=>new js(e),"PRIVATE")),Rt(new ct("heartbeat",e=>new Eo(e),"PRIVATE")),lt(Nr,Un,t),lt(Nr,Un,"esm2017"),lt("fire-js","")}Ro("");function Fr(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}typeof SuppressedError=="function"&&SuppressedError;function Qn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oo=Qn,Kn=new Tt("auth","Firebase",Qn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Dn("@firebase/auth");function Ao(t,...e){Qt.logLevel<=te.WARN&&Qt.warn(`Auth (${Ot}): ${t}`,...e)}function Kt(t,...e){Qt.logLevel<=te.ERROR&&Qt.error(`Auth (${Ot}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t,...e){throw Ur(t,...e)}function Se(t,...e){return Ur(t,...e)}function Gn(t,e,r){const n=Object.assign(Object.assign({},Oo()),{[e]:r});return new Tt("auth","Firebase",n).create(e,{appName:t.name})}function Co(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&Te(t,"argument-error"),Gn(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ur(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return Kn.create(t,...e)}function q(t,e,...r){if(!t)throw Ur(e,...r)}function xe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Kt(e),new Error(e)}function Le(t,e){t||xe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Po(){return $n()==="http:"||$n()==="https:"}function $n(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Po()||us()||"connection"in navigator)?navigator.onLine:!0}function Do(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,r){this.shortDelay=e,this.longDelay=r,Le(r>e,"Short delay should be less than long delay!"),this.isMobile=os()||cs()}get(){return ko()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t,e){Le(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new Ct(3e4,6e4);function Yn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pt(t,e,r,n,i={}){return Xn(t,i,async()=>{let a={},s={};n&&(e==="GET"?s=n:a={body:JSON.stringify(n)});const u=St(Object.assign({key:t.config.apiKey},s)).slice(1),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode),Jn.fetch()(Zn(t,t.config.apiHost,r,u),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},a))})}async function Xn(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},No),e);try{const i=new Lo(t),a=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const s=await a.json();if("needConfirmation"in s)throw Gt(t,"account-exists-with-different-credential",s);if(a.ok&&!("errorMessage"in s))return s;{const u=a.ok?s.errorMessage:s.error.message,[o,l]=u.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gt(t,"credential-already-in-use",s);if(o==="EMAIL_EXISTS")throw Gt(t,"email-already-in-use",s);if(o==="USER_DISABLED")throw Gt(t,"user-disabled",s);const h=n[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Gn(t,h,l);Te(t,h)}}catch(i){if(i instanceof Ve)throw i;Te(t,"network-request-failed",{message:String(i)})}}async function xo(t,e,r,n,i={}){const a=await Pt(t,e,r,n,i);return"mfaPendingCredential"in a&&Te(t,"multi-factor-auth-required",{_serverResponse:a}),a}function Zn(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?Br(t.config,i):`${t.config.apiScheme}://${i}`}class Lo{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(Se(this.auth,"network-request-failed")),Mo.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gt(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=Se(t,e,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t,e){return Pt(t,"POST","/v1/accounts:delete",e)}async function Uo(t,e){return Pt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jo(t,e=!1){const r=We(t),n=await r.getIdToken(e),i=Hr(n);q(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,s=a==null?void 0:a.sign_in_provider;return{claims:i,token:n,authTime:kt(qr(i.auth_time)),issuedAtTime:kt(qr(i.iat)),expirationTime:kt(qr(i.exp)),signInProvider:s||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function qr(t){return Number(t)*1e3}function Hr(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return Kt("JWT malformed, contained fewer than 3 sections"),null;try{const i=An(r);return i?JSON.parse(i):(Kt("Failed to decode base64 JWT payload"),null)}catch(i){return Kt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Bo(t){const e=Hr(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof Ve&&qo(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function qo({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=kt(this.lastLoginAt),this.creationTime=kt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $t(t){var e;const r=t.auth,n=await t.getIdToken(),i=await Dt(t,Uo(r,{idToken:n}));q(i==null?void 0:i.users.length,r,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const s=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?zo(a.providerUserInfo):[],u=Wo(t.providerData,s),o=t.isAnonymous,l=!(t.email&&a.passwordHash)&&!(u!=null&&u.length),h=o?l:!1,m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new ei(a.createdAt,a.lastLoginAt),isAnonymous:h};Object.assign(t,m)}async function Vo(t){const e=We(t);await $t(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wo(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function zo(t){return t.map(e=>{var{providerId:r}=e,n=Fr(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(t,e){const r=await Xn(t,{},async()=>{const n=St({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,s=Zn(t,i,"/v1/token",`key=${a}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Jn.fetch()(s,{method:"POST",headers:u,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:a}=await Qo(e,r);this.updateTokensAndExpiration(n,i,Number(a))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:a}=r,s=new Nt;return n&&(q(typeof n=="string","internal-error",{appName:e}),s.refreshToken=n),i&&(q(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),a&&(q(typeof a=="number","internal-error",{appName:e}),s.expirationTime=a),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nt,this.toJSON())}_performRefresh(){return xe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rt{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,a=Fr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ho(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ei(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const r=await Dt(this,this.stsTokenManager.getToken(this.auth,e));return q(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return jo(this,e)}reload(){return Vo(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await $t(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dt(this,Fo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,a,s,u,o,l,h;const m=(n=r.displayName)!==null&&n!==void 0?n:void 0,y=(i=r.email)!==null&&i!==void 0?i:void 0,f=(a=r.phoneNumber)!==null&&a!==void 0?a:void 0,w=(s=r.photoURL)!==null&&s!==void 0?s:void 0,I=(u=r.tenantId)!==null&&u!==void 0?u:void 0,R=(o=r._redirectEventId)!==null&&o!==void 0?o:void 0,O=(l=r.createdAt)!==null&&l!==void 0?l:void 0,b=(h=r.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:d,emailVerified:g,isAnonymous:v,providerData:p,stsTokenManager:_}=r;q(d&&_,e,"internal-error");const T=Nt.fromJSON(this.name,_);q(typeof d=="string",e,"internal-error"),Ke(m,e.name),Ke(y,e.name),q(typeof g=="boolean",e,"internal-error"),q(typeof v=="boolean",e,"internal-error"),Ke(f,e.name),Ke(w,e.name),Ke(I,e.name),Ke(R,e.name),Ke(O,e.name),Ke(b,e.name);const S=new rt({uid:d,auth:e,email:y,emailVerified:g,displayName:m,isAnonymous:v,photoURL:w,phoneNumber:f,tenantId:I,stsTokenManager:T,createdAt:O,lastLoginAt:b});return p&&Array.isArray(p)&&(S.providerData=p.map(E=>Object.assign({},E))),R&&(S._redirectEventId=R),S}static async _fromIdTokenResponse(e,r,n=!1){const i=new Nt;i.updateFromServerResponse(r);const a=new rt({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await $t(a),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Map;function Fe(t){Le(t instanceof Function,"Expected a class definition");let e=ti.get(t);return e?(Le(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ti.set(t,e),e)}/**
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
 */class ri{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}ri.type="NONE";const ni=ri;/**
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
 */function Jt(t,e,r){return`firebase:${t}:${e}:${r}`}class dt{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:a}=this.auth;this.fullUserKey=Jt(this.userKey,i.apiKey,a),this.fullPersistenceKey=Jt("persistence",i.apiKey,a),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new dt(Fe(ni),e,n);const i=(await Promise.all(r.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let a=i[0]||Fe(ni);const s=Jt(n,e.config.apiKey,e.name);let u=null;for(const l of r)try{const h=await l._get(s);if(h){const m=rt._fromJSON(e,h);l!==a&&(u=m),a=l;break}}catch{}const o=i.filter(l=>l._shouldAllowMigration);return!a._shouldAllowMigration||!o.length?new dt(a,e,n):(a=o[0],u&&await a._set(s,u.toJSON()),await Promise.all(r.map(async l=>{if(l!==a)try{await l._remove(s)}catch{}})),new dt(a,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ai(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ci(e))return"Blackberry";if(li(e))return"Webos";if(Vr(e))return"Safari";if((e.includes("chrome/")||si(e))&&!e.includes("edge/"))return"Chrome";if(ui(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function ai(t=le()){return/firefox\//i.test(t)}function Vr(t=le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function si(t=le()){return/crios\//i.test(t)}function oi(t=le()){return/iemobile/i.test(t)}function ui(t=le()){return/android/i.test(t)}function ci(t=le()){return/blackberry/i.test(t)}function li(t=le()){return/webos/i.test(t)}function Yt(t=le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ko(t=le()){var e;return Yt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Go(){return ls()&&document.documentMode===10}function di(t=le()){return Yt(t)||ui(t)||li(t)||ci(t)||/windows phone/i.test(t)||oi(t)}function $o(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t,e=[]){let r;switch(t){case"Browser":r=ii(le());break;case"Worker":r=`${ii(le())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Ot}/${n}`}async function hi(t,e){return Pt(t,"GET","/v2/recaptchaConfig",Yn(t,e))}function pi(t){return t!==void 0&&t.enterprise!==void 0}class vi{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(r=>r.provider==="EMAIL_PASSWORD_PROVIDER"&&r.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gi(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const a=Se("internal-error");a.customData=i,r(a)},n.type="text/javascript",n.charset="UTF-8",Jo().appendChild(n)})}function Yo(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Xo="https://www.google.com/recaptcha/enterprise.js?render=",Zo="recaptcha-enterprise",eu="NO_RECAPTCHA";class tu{constructor(e){this.type=Zo,this.auth=Mt(e)}async verify(e="verify",r=!1){async function n(a){if(!r){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(s,u)=>{hi(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const l=new vi(o);return a.tenantId==null?a._agentRecaptchaConfig=l:a._tenantRecaptchaConfigs[a.tenantId]=l,s(l.siteKey)}}).catch(o=>{u(o)})})}function i(a,s,u){const o=window.grecaptcha;pi(o)?o.enterprise.ready(()=>{o.enterprise.execute(a,{action:e}).then(l=>{s(l)}).catch(()=>{s(eu)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,s)=>{n(this.auth).then(u=>{if(!r&&pi(window.grecaptcha))i(u,a,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}gi(Xo+u).then(()=>{i(u,a,s)}).catch(o=>{s(o)})}}).catch(u=>{s(u)})})}}/**
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
 */class ru{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=a=>new Promise((s,u)=>{try{const o=e(a);s(o)}catch(o){u(o)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,r,n,i){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mi(this),this.idTokenSubscription=new mi(this),this.beforeStateQueue=new ru(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Fe(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await dt.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var r;const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,u=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===u)&&(o!=null&&o.user)&&(i=o.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await $t(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Do()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?We(e):null;return r&&q(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Fe(e))})}async initializeRecaptchaConfig(){const e=await hi(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new vi(e);this.tenantId==null?this._agentRecaptchaConfig=r:this._tenantRecaptchaConfigs[this.tenantId]=r,r.emailPasswordEnabled&&new tu(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tt("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Fe(e)||this._popupRedirectResolver;q(r,this,"argument-error"),this.redirectPersistenceManager=await dt.create(this,[Fe(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const a=typeof r=="function"?r:r.next.bind(r),s=this._isInitialized?Promise.resolve():this._initializationPromise;return q(s,this,"internal-error"),s.then(()=>a(this.currentUser)),typeof r=="function"?e.addObserver(r,n,i):e.addObserver(r)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&Ao(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function Mt(t){return We(t)}class mi{constructor(e){this.auth=e,this.observer=null,this.addObserver=ms(r=>this.observer=r)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t,e){const r=jn(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),a=r.getOptions();if(Wt(a,e??{}))return i;Te(i,"already-initialized")}return r.initialize({options:e})}function au(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Fe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function su(t,e,r){const n=Mt(t);q(n._canInitEmulator,n,"emulator-config-failed"),q(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(r!=null&&r.disableWarnings),a=yi(e),{host:s,port:u}=ou(e),o=u===null?"":`:${u}`;n.config.emulator={url:`${a}//${s}${o}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||uu()}function yi(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ou(t){const e=yi(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const a=i[1];return{host:a,port:bi(n.substr(a.length+1))}}else{const[a,s]=n.split(":");return{host:a,port:bi(s)}}}function bi(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uu(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return xe("not implemented")}_getIdTokenResponse(e){return xe("not implemented")}_linkToIdToken(e,r){return xe("not implemented")}_getReauthenticationResolver(e){return xe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(t,e){return xo(t,"POST","/v1/accounts:signInWithIdp",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="http://localhost";class Ue extends _i{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new Ue(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):Te("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,a=Fr(r,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Ue(n,i);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}_getIdTokenResponse(e){const r=this.buildRequest();return ft(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,ft(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,ft(e,r)}buildRequest(){const e={requestUri:cu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=St(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ht extends Wr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class pt extends ht{static credentialFromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;return q("providerId"in r&&"signInMethod"in r,"argument-error"),Ue._fromParams(r)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return q(e.idToken||e.accessToken,"argument-error"),Ue._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return pt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return pt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:a,nonce:s,providerId:u}=e;if(!n&&!i&&!r&&!a||!u)return null;try{return new pt(u)._credential({idToken:r,accessToken:n,nonce:s,pendingToken:a})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends ht{constructor(){super("facebook.com")}static credential(e){return Ue._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.FACEBOOK_SIGN_IN_METHOD="facebook.com",Re.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return Ue._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return Oe.credential(r,n)}catch{return null}}}Oe.GOOGLE_SIGN_IN_METHOD="google.com",Oe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends ht{constructor(){super("github.com")}static credential(e){return Ue._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ae.credential(e.oauthAccessToken)}catch{return null}}}Ae.GITHUB_SIGN_IN_METHOD="github.com",Ae.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends ht{constructor(){super("twitter.com")}static credential(e,r){return Ue._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return Ce.credential(r,n)}catch{return null}}}Ce.TWITTER_SIGN_IN_METHOD="twitter.com",Ce.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const a=await rt._fromIdTokenResponse(e,n,i),s=Ii(n);return new vt({user:a,providerId:s,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=Ii(n);return new vt({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function Ii(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Ve{constructor(e,r,n,i){var a;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Xt.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new Xt(e,r,n,i)}}function wi(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Xt._fromErrorAndOperation(t,a,e,n):a})}async function lu(t,e,r=!1){const n=await Dt(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return vt._forOperation(t,"link",n)}/**
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
 */async function du(t,e,r=!1){const{auth:n}=t,i="reauthenticate";try{const a=await Dt(t,wi(n,i,e,t),r);q(a.idToken,n,"internal-error");const s=Hr(a.idToken);q(s,n,"internal-error");const{sub:u}=s;return q(t.uid===u,n,"user-mismatch"),vt._forOperation(t,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Te(n,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fu(t,e,r=!1){const n="signIn",i=await wi(t,n,e),a=await vt._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(a.user),a}function hu(t,e,r,n){return We(t).onIdTokenChanged(e,r,n)}function pu(t,e,r){return We(t).beforeAuthStateChanged(e,r)}function vu(t,e,r,n){return We(t).onAuthStateChanged(e,r,n)}function Ei(t){return We(t).signOut()}const Zt="__sak";/**
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
 */class Ti{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Zt,"1"),this.storage.removeItem(Zt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(){const t=le();return Vr(t)||Yt(t)}const mu=1e3,yu=10;class Si extends Ti{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gu()&&$o(),this.fallbackToPolling=di(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((s,u,o)=>{this.notifyListeners(s,o)});return}const n=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!r)return}const i=()=>{const s=this.storage.getItem(n);!r&&this.localCache[n]===s||this.notifyListeners(n,s)},a=this.storage.getItem(n);Go()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yu):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},mu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}Si.type="LOCAL";const bu=Si;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends Ti{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}Ri.type="SESSION";const Oi=Ri;/**
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
 */function _u(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class er{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new er(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:a}=r.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const u=Array.from(s).map(async l=>l(r.origin,a)),o=await _u(u);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:o})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}er.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class Iu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,s;return new Promise((u,o)=>{const l=zr("",20);i.port1.start();const h=setTimeout(()=>{o(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===l)switch(y.data.status){case"ack":clearTimeout(h),a=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(y.data.response);break;default:clearTimeout(h),clearTimeout(a),o(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:r},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return window}function wu(t){Pe().location.href=t}/**
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
 */function Ai(){return typeof Pe().WorkerGlobalScope<"u"&&typeof Pe().importScripts=="function"}async function Eu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tu(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Su(){return Ai()?self:null}/**
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
 */const Ci="firebaseLocalStorageDb",Ru=1,tr="firebaseLocalStorage",Pi="fbase_key";class xt{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function rr(t,e){return t.transaction([tr],e?"readwrite":"readonly").objectStore(tr)}function Ou(){const t=indexedDB.deleteDatabase(Ci);return new xt(t).toPromise()}function Qr(){const t=indexedDB.open(Ci,Ru);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(tr,{keyPath:Pi})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(tr)?e(n):(n.close(),await Ou(),e(await Qr()))})})}async function ki(t,e,r){const n=rr(t,!0).put({[Pi]:e,value:r});return new xt(n).toPromise()}async function Au(t,e){const r=rr(t,!1).get(e),n=await new xt(r).toPromise();return n===void 0?null:n.value}function Di(t,e){const r=rr(t,!0).delete(e);return new xt(r).toPromise()}const Cu=800,Pu=3;class Ni{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qr(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>Pu)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ai()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=er._getInstance(Su()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await Eu(),!this.activeServiceWorker)return;this.sender=new Iu(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qr();return await ki(e,Zt,"1"),await Di(e,Zt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>ki(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>Au(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Di(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=rr(i,!1).getAll();return new xt(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;for(const{fbase_key:i,value:a}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ni.type="LOCAL";const ku=Ni;new Ct(3e4,6e4);/**
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
 */function Mi(t,e){return e?Fe(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kr extends _i{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,r){return ft(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Du(t){return fu(t.auth,new Kr(t),t.bypassAuthState)}function Nu(t){const{auth:e,user:r}=t;return q(r,e,"internal-error"),du(r,new Kr(t),t.bypassAuthState)}async function Mu(t){const{auth:e,user:r}=t;return q(r,e,"internal-error"),lu(r,new Kr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,r,n,i,a=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:a,error:s,type:u}=e;if(s){this.reject(s);return}const o={auth:this.auth,requestUri:r,sessionId:n,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Du;case"linkViaPopup":case"linkViaRedirect":return Mu;case"reauthViaPopup":case"reauthViaRedirect":return Nu;default:Te(this.auth,"internal-error")}}resolve(e){Le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new Ct(2e3,1e4);async function Lt(t,e,r){const n=Mt(t);Co(t,e,Wr);const i=Mi(n,r);return new nt(n,"signInViaPopup",e,i).executeNotNull()}class nt extends xi{constructor(e,r,n,i,a){super(e,r,i,a),this.provider=n,this.authWindow=null,this.pollId=null,nt.currentPopupAction&&nt.currentPopupAction.cancel(),nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Le(this.filter.length===1,"Popup operations only handle one event");const e=zr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Se(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Se(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Se(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xu.get())};e()}}nt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="pendingRedirect",nr=new Map;class Fu extends xi{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=nr.get(this.auth._key());if(!e){try{const n=await Uu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}nr.set(this.auth._key(),e)}return this.bypassAuthState||nr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Uu(t,e){const r=qu(e),n=Bu(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function ju(t,e){nr.set(t._key(),e)}function Bu(t){return Fe(t._redirectPersistence)}function qu(t){return Jt(Lu,t.config.apiKey,t.name)}async function Hu(t,e,r=!1){const n=Mt(t),i=Mi(n,e),s=await new Fu(n,i,r).execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=10*60*1e3;class Wu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zu(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!Fi(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(Se(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vu&&this.cachedEventUids.clear(),this.cachedEventUids.has(Li(e))}saveEventToCache(e){this.cachedEventUids.add(Li(e)),this.lastProcessedEventTime=Date.now()}}function Li(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fi({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zu(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fi(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qu(t,e={}){return Pt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gu=/^https?/;async function $u(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qu(t);for(const r of e)try{if(Ju(r))return}catch{}Te(t,"unauthorized-domain")}function Ju(t){const e=jr(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&s.hostname===n}if(!Gu.test(r))return!1;if(Ku.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const Yu=new Ct(3e4,6e4);function Ui(){const t=Pe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function Xu(t){return new Promise((e,r)=>{var n,i,a;function s(){Ui(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ui(),r(Se(t,"network-request-failed"))},timeout:Yu.get()})}if(!((i=(n=Pe().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=Pe().gapi)===null||a===void 0)&&a.load)s();else{const u=Yo("iframefcb");return Pe()[u]=()=>{gapi.load?s():r(Se(t,"network-request-failed"))},gi(`https://apis.google.com/js/api.js?onload=${u}`).catch(o=>r(o))}}).catch(e=>{throw ir=null,e})}let ir=null;function Zu(t){return ir=ir||Xu(t),ir}/**
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
 */const ec=new Ct(5e3,15e3),tc="__/auth/iframe",rc="emulator/auth/iframe",nc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ic=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ac(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Br(e,rc):`https://${t.config.authDomain}/${tc}`,n={apiKey:e.apiKey,appName:t.name,v:Ot},i=ic.get(t.config.apiHost);i&&(n.eid=i);const a=t._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${St(n).slice(1)}`}async function sc(t){const e=await Zu(t),r=Pe().gapi;return q(r,t,"internal-error"),e.open({where:document.body,url:ac(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nc,dontclear:!0},n=>new Promise(async(i,a)=>{await n.restyle({setHideOnLeave:!1});const s=Se(t,"network-request-failed"),u=Pe().setTimeout(()=>{a(s)},ec.get());function o(){Pe().clearTimeout(u),i(n)}n.ping(o).then(o,()=>{a(s)})}))}/**
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
 */const oc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uc=500,cc=600,lc="_blank",dc="http://localhost";class ji{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fc(t,e,r,n=uc,i=cc){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let u="";const o=Object.assign(Object.assign({},oc),{width:n.toString(),height:i.toString(),top:a,left:s}),l=le().toLowerCase();r&&(u=si(l)?lc:r),ai(l)&&(e=e||dc,o.scrollbars="yes");const h=Object.entries(o).reduce((y,[f,w])=>`${y}${f}=${w},`,"");if(Ko(l)&&u!=="_self")return hc(e||"",u),new ji(null);const m=window.open(e||"",u,h);q(m,t,"popup-blocked");try{m.focus()}catch{}return new ji(m)}function hc(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const pc="__/auth/handler",vc="emulator/auth/handler",gc=encodeURIComponent("fac");async function Bi(t,e,r,n,i,a){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:Ot,eventId:i};if(e instanceof Wr){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",gs(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries(a||{}))s[h]=m}if(e instanceof ht){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(s.scopes=h.join(","))}t.tenantId&&(s.tid=t.tenantId);const u=s;for(const h of Object.keys(u))u[h]===void 0&&delete u[h];const o=await t._getAppCheckToken(),l=o?`#${gc}=${encodeURIComponent(o)}`:"";return`${mc(t)}?${St(u).slice(1)}${l}`}function mc({config:t}){return t.emulator?Br(t,vc):`https://${t.authDomain}/${pc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="webStorageSupport";class yc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oi,this._completeRedirectFn=Hu,this._overrideRedirectResult=ju}async _openPopup(e,r,n,i){var a;Le((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await Bi(e,r,n,jr(),i);return fc(e,s,zr())}async _openRedirect(e,r,n,i){await this._originValidation(e);const a=await Bi(e,r,n,jr(),i);return wu(a),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:a}=this.eventManagers[r];return i?Promise.resolve(i):(Le(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await sc(e),n=new Wu(e);return r.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(Gr,{type:Gr},i=>{var a;const s=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Gr];s!==void 0&&r(!!s),Te(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=$u(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return di()||Vr()||Yt()}}const bc=yc;var qi="@firebase/auth",Hi="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wc(t){Rt(new ct("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:s,authDomain:u}=n.options;q(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:s,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fi(t)},l=new nu(n,i,a,o);return au(l,r),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),Rt(new ct("auth-internal",e=>{const r=Mt(e.getProvider("auth").getImmediate());return(n=>new _c(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(qi,Hi,Ic(t)),lt(qi,Hi,"esm2017")}/**
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
 */const Ec=5*60,Tc=Pn("authIdTokenMaxAge")||Ec;let Vi=null;const Sc=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>Tc)return;const i=r==null?void 0:r.token;Vi!==i&&(Vi=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Rc(t=mo()){const e=jn(t,"auth");if(e.isInitialized())return e.getImmediate();const r=iu(t,{popupRedirectResolver:bc,persistence:[ku,bu,Oi]}),n=Pn("authTokenSyncURL");if(n){const a=Sc(n);pu(r,a,()=>a(r.currentUser)),hu(r,s=>a(s))}const i=as("auth");return i&&su(r,`http://${i}`),r}wc("Browser");var Oc="firebase",Ac="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(Oc,Ac,"app");const Wi={language:"en",firebaseConfig:{},endpoint:"http://127.0.0.1:8000/api/auth/",keyword:"TSESSION",refreshTokenHeader:"Authorization",acceptUsername:!1,bodyAsBase64:!1,signInMethods:["google"]};let ee={...Wi};const Cc=t=>{ee={...Wi,...t}},Pc=()=>Object.keys(ee.firebaseConfig).length!==0,Ge=()=>{const t=Bn(ee.firebaseConfig);return Rc(t)},zi=new Oe;zi.setCustomParameters({prompt:"select_account"});const Qi=new Re;Qi.addScope("public_profile");const kc=new Ce,Dc=new Ae,Nc=new pt("microsoft.com").setCustomParameters({prompt:"consent",login_hint:"user@firstadd.onmicrosoft.com",tenant:"1bd1e0fb-f970-45f0-a49d-e80107b0e6f3"});function se(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];if(process.env.NODE_ENV!=="production"){var i=Vc[t],a=i?typeof i=="function"?i.apply(null,r):i:"unknown error nr: "+t;throw Error("[Immer] "+a)}throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(s){return"'"+s+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function je(t){return!!t&&!!t[pe]}function Be(t){var e;return!!t&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Wc}(t)||Array.isArray(t)||!!t[Ut]||!!(!((e=t.constructor)===null||e===void 0)&&e[Ut])||sr(t)||or(t))}function Mc(t){return je(t)||se(23,t),t[pe].t}function gt(t,e,r){r===void 0&&(r=!1),$e(t)===0?(r?Object.keys:un)(t).forEach(function(n){r&&typeof n=="symbol"||e(n,t[n],t)}):t.forEach(function(n,i){return e(i,n,t)})}function $e(t){var e=t[pe];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:sr(t)?2:or(t)?3:0}function Ft(t,e){return $e(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function ar(t,e){return $e(t)===2?t.get(e):t[e]}function Ki(t,e,r){var n=$e(t);n===2?t.set(e,r):n===3?t.add(r):t[e]=r}function xc(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function sr(t){return qc&&t instanceof Map}function or(t){return Hc&&t instanceof Set}function it(t){return t.o||t.t}function $r(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=zc(t);delete e[pe];for(var r=un(e),n=0;n<r.length;n++){var i=r[n],a=e[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(e[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Jr(t,e){return e===void 0&&(e=!1),Yr(t)||je(t)||!Be(t)||($e(t)>1&&(t.set=t.add=t.clear=t.delete=Lc),Object.freeze(t),e&&gt(t,function(r,n){return Jr(n,!0)},!0)),t}function Lc(){se(2)}function Yr(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function ke(t){var e=cn[t];return e||se(18,t),e}function Fc(t,e){cn[t]||(cn[t]=e)}function Gi(){return process.env.NODE_ENV==="production"||mt||se(0),mt}function Xr(t,e){e&&(ke("Patches"),t.u=[],t.s=[],t.v=e)}function ur(t){Zr(t),t.p.forEach(Uc),t.p=null}function Zr(t){t===mt&&(mt=t.l)}function $i(t){return mt={p:[],l:mt,h:t,m:!0,_:0}}function Uc(t){var e=t[pe];e.i===0||e.i===1?e.j():e.g=!0}function en(t,e){e._=e.p.length;var r=e.p[0],n=t!==void 0&&t!==r;return e.h.O||ke("ES5").S(e,t,n),n?(r[pe].P&&(ur(e),se(4)),Be(t)&&(t=cr(e,t),e.l||lr(e,t)),e.u&&ke("Patches").M(r[pe].t,t,e.u,e.s)):t=cr(e,r,[]),ur(e),e.u&&e.v(e.u,e.s),t!==on?t:void 0}function cr(t,e,r){if(Yr(e))return e;var n=e[pe];if(!n)return gt(e,function(u,o){return Ji(t,n,e,u,o,r)},!0),e;if(n.A!==t)return e;if(!n.P)return lr(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=n.i===4||n.i===5?n.o=$r(n.k):n.o,a=i,s=!1;n.i===3&&(a=new Set(i),i.clear(),s=!0),gt(a,function(u,o){return Ji(t,n,i,u,o,r,s)}),lr(t,i,!1),r&&t.u&&ke("Patches").N(n,r,t.u,t.s)}return n.o}function Ji(t,e,r,n,i,a,s){if(process.env.NODE_ENV!=="production"&&i===r&&se(5),je(i)){var u=cr(t,i,a&&e&&e.i!==3&&!Ft(e.R,n)?a.concat(n):void 0);if(Ki(r,n,u),!je(u))return;t.m=!1}else s&&r.add(i);if(Be(i)&&!Yr(i)){if(!t.h.D&&t._<1)return;cr(t,i),e&&e.A.l||lr(t,i)}}function lr(t,e,r){r===void 0&&(r=!1),!t.l&&t.h.D&&t.m&&Jr(e,r)}function tn(t,e){var r=t[pe];return(r?it(r):t)[e]}function Yi(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function rn(t){t.P||(t.P=!0,t.l&&rn(t.l))}function nn(t){t.o||(t.o=$r(t.t))}function an(t,e,r){var n=sr(e)?ke("MapSet").F(e,r):or(e)?ke("MapSet").T(e,r):t.O?function(i,a){var s=Array.isArray(i),u={i:s?1:0,A:a?a.A:Gi(),P:!1,I:!1,R:{},l:a,t:i,k:null,o:null,j:null,C:!1},o=u,l=ln;s&&(o=[u],l=jt);var h=Proxy.revocable(o,l),m=h.revoke,y=h.proxy;return u.k=y,u.j=m,y}(e,r):ke("ES5").J(e,r);return(r?r.A:Gi()).p.push(n),n}function jc(t){return je(t)||se(22,t),function e(r){if(!Be(r))return r;var n,i=r[pe],a=$e(r);if(i){if(!i.P&&(i.i<4||!ke("ES5").K(i)))return i.t;i.I=!0,n=Xi(r,a),i.I=!1}else n=Xi(r,a);return gt(n,function(s,u){i&&ar(i.t,s)===u||Ki(n,s,e(u))}),a===3?new Set(n):n}(t)}function Xi(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return $r(t)}function Bc(){function t(n){if(!Be(n))return n;if(Array.isArray(n))return n.map(t);if(sr(n))return new Map(Array.from(n.entries()).map(function(s){return[s[0],t(s[1])]}));if(or(n))return new Set(Array.from(n).map(t));var i=Object.create(Object.getPrototypeOf(n));for(var a in n)i[a]=t(n[a]);return Ft(n,Ut)&&(i[Ut]=n[Ut]),i}function e(n){return je(n)?t(n):n}var r="add";Fc("Patches",{$:function(n,i){return i.forEach(function(a){for(var s=a.path,u=a.op,o=n,l=0;l<s.length-1;l++){var h=$e(o),m=s[l];typeof m!="string"&&typeof m!="number"&&(m=""+m),h!==0&&h!==1||m!=="__proto__"&&m!=="constructor"||se(24),typeof o=="function"&&m==="prototype"&&se(24),typeof(o=ar(o,m))!="object"&&se(15,s.join("/"))}var y=$e(o),f=t(a.value),w=s[s.length-1];switch(u){case"replace":switch(y){case 2:return o.set(w,f);case 3:se(16);default:return o[w]=f}case r:switch(y){case 1:return w==="-"?o.push(f):o.splice(w,0,f);case 2:return o.set(w,f);case 3:return o.add(f);default:return o[w]=f}case"remove":switch(y){case 1:return o.splice(w,1);case 2:return o.delete(w);case 3:return o.delete(a.value);default:return delete o[w]}default:se(17,u)}}),n},N:function(n,i,a,s){switch(n.i){case 0:case 4:case 2:return function(u,o,l,h){var m=u.t,y=u.o;gt(u.R,function(f,w){var I=ar(m,f),R=ar(y,f),O=w?Ft(m,f)?"replace":r:"remove";if(I!==R||O!=="replace"){var b=o.concat(f);l.push(O==="remove"?{op:O,path:b}:{op:O,path:b,value:R}),h.push(O===r?{op:"remove",path:b}:O==="remove"?{op:r,path:b,value:e(I)}:{op:"replace",path:b,value:e(I)})}})}(n,i,a,s);case 5:case 1:return function(u,o,l,h){var m=u.t,y=u.R,f=u.o;if(f.length<m.length){var w=[f,m];m=w[0],f=w[1];var I=[h,l];l=I[0],h=I[1]}for(var R=0;R<m.length;R++)if(y[R]&&f[R]!==m[R]){var O=o.concat([R]);l.push({op:"replace",path:O,value:e(f[R])}),h.push({op:"replace",path:O,value:e(m[R])})}for(var b=m.length;b<f.length;b++){var d=o.concat([b]);l.push({op:r,path:d,value:e(f[b])})}m.length<f.length&&h.push({op:"replace",path:o.concat(["length"]),value:m.length})}(n,i,a,s);case 3:return function(u,o,l,h){var m=u.t,y=u.o,f=0;m.forEach(function(w){if(!y.has(w)){var I=o.concat([f]);l.push({op:"remove",path:I,value:w}),h.unshift({op:r,path:I,value:w})}f++}),f=0,y.forEach(function(w){if(!m.has(w)){var I=o.concat([f]);l.push({op:r,path:I,value:w}),h.unshift({op:"remove",path:I,value:w})}f++})}(n,i,a,s)}},M:function(n,i,a,s){a.push({op:"replace",path:[],value:i===on?void 0:i}),s.push({op:"replace",path:[],value:n})}})}var Zi,mt,sn=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",qc=typeof Map<"u",Hc=typeof Set<"u",ea=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",on=sn?Symbol.for("immer-nothing"):((Zi={})["immer-nothing"]=!0,Zi),Ut=sn?Symbol.for("immer-draftable"):"__$immer_draftable",pe=sn?Symbol.for("immer-state"):"__$immer_state",Vc={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(t){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+t},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(t){return"Cannot apply patch, path doesn't resolve: "+t},16:'Sets cannot have "replace" patches.',17:function(t){return"Unsupported patch operation: "+t},18:function(t){return"The plugin for '"+t+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+t+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(t){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+t+"'"},22:function(t){return"'current' expects a draft, got: "+t},23:function(t){return"'original' expects a draft, got: "+t},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Wc=""+Object.prototype.constructor,un=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,zc=Object.getOwnPropertyDescriptors||function(t){var e={};return un(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},cn={},ln={get:function(t,e){if(e===pe)return t;var r=it(t);if(!Ft(r,e))return function(i,a,s){var u,o=Yi(a,s);return o?"value"in o?o.value:(u=o.get)===null||u===void 0?void 0:u.call(i.k):void 0}(t,r,e);var n=r[e];return t.I||!Be(n)?n:n===tn(t.t,e)?(nn(t),t.o[e]=an(t.A.h,n,t)):n},has:function(t,e){return e in it(t)},ownKeys:function(t){return Reflect.ownKeys(it(t))},set:function(t,e,r){var n=Yi(it(t),e);if(n!=null&&n.set)return n.set.call(t.k,r),!0;if(!t.P){var i=tn(it(t),e),a=i==null?void 0:i[pe];if(a&&a.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(xc(r,i)&&(r!==void 0||Ft(t.t,e)))return!0;nn(t),rn(t)}return t.o[e]===r&&(r!==void 0||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return tn(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,nn(t),rn(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=it(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:n.enumerable,value:r[e]}},defineProperty:function(){se(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){se(12)}},jt={};gt(ln,function(t,e){jt[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),jt.deleteProperty=function(t,e){return process.env.NODE_ENV!=="production"&&isNaN(parseInt(e))&&se(13),jt.set.call(this,t,e,void 0)},jt.set=function(t,e,r){return process.env.NODE_ENV!=="production"&&e!=="length"&&isNaN(parseInt(e))&&se(14),ln.set.call(this,t[0],e,r,t[0])};var Qc=function(){function t(r){var n=this;this.O=ea,this.D=!0,this.produce=function(i,a,s){if(typeof i=="function"&&typeof a!="function"){var u=a;a=i;var o=n;return function(I){var R=this;I===void 0&&(I=u);for(var O=arguments.length,b=Array(O>1?O-1:0),d=1;d<O;d++)b[d-1]=arguments[d];return o.produce(I,function(g){var v;return(v=a).call.apply(v,[R,g].concat(b))})}}var l;if(typeof a!="function"&&se(6),s!==void 0&&typeof s!="function"&&se(7),Be(i)){var h=$i(n),m=an(n,i,void 0),y=!0;try{l=a(m),y=!1}finally{y?ur(h):Zr(h)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(I){return Xr(h,s),en(I,h)},function(I){throw ur(h),I}):(Xr(h,s),en(l,h))}if(!i||typeof i!="object"){if((l=a(i))===void 0&&(l=i),l===on&&(l=void 0),n.D&&Jr(l,!0),s){var f=[],w=[];ke("Patches").M(i,l,f,w),s(f,w)}return l}se(21,i)},this.produceWithPatches=function(i,a){if(typeof i=="function")return function(l){for(var h=arguments.length,m=Array(h>1?h-1:0),y=1;y<h;y++)m[y-1]=arguments[y];return n.produceWithPatches(l,function(f){return i.apply(void 0,[f].concat(m))})};var s,u,o=n.produce(i,a,function(l,h){s=l,u=h});return typeof Promise<"u"&&o instanceof Promise?o.then(function(l){return[l,s,u]}):[o,s,u]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var e=t.prototype;return e.createDraft=function(r){Be(r)||se(8),je(r)&&(r=jc(r));var n=$i(this),i=an(this,r,void 0);return i[pe].C=!0,Zr(n),i},e.finishDraft=function(r,n){var i=r&&r[pe];process.env.NODE_ENV!=="production"&&(i&&i.C||se(9),i.I&&se(10));var a=i.A;return Xr(a,n),en(void 0,a)},e.setAutoFreeze=function(r){this.D=r},e.setUseProxies=function(r){r&&!ea&&se(20),this.O=r},e.applyPatches=function(r,n){var i;for(i=n.length-1;i>=0;i--){var a=n[i];if(a.path.length===0&&a.op==="replace"){r=a.value;break}}i>-1&&(n=n.slice(i+1));var s=ke("Patches").$;return je(r)?s(r,n):this.produce(r,function(u){return s(u,n)})},t}(),ye=new Qc;ye.produce;var ta=ye.produceWithPatches.bind(ye);ye.setAutoFreeze.bind(ye),ye.setUseProxies.bind(ye);var ra=ye.applyPatches.bind(ye);ye.createDraft.bind(ye),ye.finishDraft.bind(ye);var dr="NOT_FOUND";function Kc(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:dr},put:function(n,i){e={key:n,value:i}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}function Gc(t,e){var r=[];function n(u){var o=r.findIndex(function(h){return e(u,h.key)});if(o>-1){var l=r[o];return o>0&&(r.splice(o,1),r.unshift(l)),l.value}return dr}function i(u,o){n(u)===dr&&(r.unshift({key:u,value:o}),r.length>t&&r.pop())}function a(){return r}function s(){r=[]}return{get:n,put:i,getEntries:a,clear:s}}var $c=function(e,r){return e===r};function Jc(t){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var i=r.length,a=0;a<i;a++)if(!t(r[a],n[a]))return!1;return!0}}function na(t,e){var r=typeof e=="object"?e:{equalityCheck:e},n=r.equalityCheck,i=n===void 0?$c:n,a=r.maxSize,s=a===void 0?1:a,u=r.resultEqualityCheck,o=Jc(i),l=s===1?Kc(o):Gc(s,o);function h(){var m=l.get(arguments);if(m===dr){if(m=t.apply(null,arguments),u){var y=l.getEntries(),f=y.find(function(w){return u(w.value,m)});f&&(m=f.value)}l.put(arguments,m)}return m}return h.clearCache=function(){return l.clear()},h}var fr=globalThis&&globalThis.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(l){return function(h){return o([l,h])}}function o(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=l[0]&2?i.return:l[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;switch(i=0,a&&(l=[l[0]&2,a.value]),l[0]){case 0:case 1:a=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){r.label=l[1];break}if(l[0]===6&&r.label<a[1]){r.label=a[1],a=l;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(l);break}a[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(t,r)}catch(h){l=[6,h],i=0}finally{n=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},hr=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t},Yc=Object.defineProperty,Xc=Object.defineProperties,Zc=Object.getOwnPropertyDescriptors,pr=Object.getOwnPropertySymbols,ia=Object.prototype.hasOwnProperty,aa=Object.prototype.propertyIsEnumerable,sa=function(t,e,r){return e in t?Yc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},oe=function(t,e){for(var r in e||(e={}))ia.call(e,r)&&sa(t,r,e[r]);if(pr)for(var n=0,i=pr(e);n<i.length;n++){var r=i[n];aa.call(e,r)&&sa(t,r,e[r])}return t},De=function(t,e){return Xc(t,Zc(e))},oa=function(t,e){var r={};for(var n in t)ia.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&pr)for(var i=0,a=pr(t);i<a.length;i++){var n=a[i];e.indexOf(n)<0&&aa.call(t,n)&&(r[n]=t[n])}return r},vr=function(t,e,r){return new Promise(function(n,i){var a=function(o){try{u(r.next(o))}catch(l){i(l)}},s=function(o){try{u(r.throw(o))}catch(l){i(l)}},u=function(o){return o.done?n(o.value):Promise.resolve(o.value).then(a,s)};u((r=r.apply(t,e)).next())})},ie;(function(t){t.uninitialized="uninitialized",t.pending="pending",t.fulfilled="fulfilled",t.rejected="rejected"})(ie||(ie={}));function el(t){return{status:t,isUninitialized:t===ie.uninitialized,isLoading:t===ie.pending,isSuccess:t===ie.fulfilled,isError:t===ie.rejected}}function tl(t){return new RegExp("(^|:)//").test(t)}var rl=function(t){return t.replace(/\/$/,"")},nl=function(t){return t.replace(/^\//,"")};function il(t,e){if(!t)return e;if(!e)return t;if(tl(e))return e;var r=t.endsWith("/")||!e.startsWith("?")?"/":"";return t=rl(t),e=nl(e),""+t+r+e}var ua=function(t){return[].concat.apply([],t)};function al(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}function sl(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}var ca=L.isPlainObject;function la(t,e){if(t===e||!(ca(t)&&ca(e)||Array.isArray(t)&&Array.isArray(e)))return e;for(var r=Object.keys(e),n=Object.keys(t),i=r.length===n.length,a=Array.isArray(e)?[]:{},s=0,u=r;s<u.length;s++){var o=u[s];a[o]=la(t[o],e[o]),i&&(i=t[o]===a[o])}return i?t:a}var da=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return fetch.apply(void 0,t)},ol=function(t){return t.status>=200&&t.status<=299},ul=function(t){return/ion\/(vnd\.api\+)?json/.test(t.get("content-type")||"")};function fa(t){if(!L.isPlainObject(t))return t;for(var e=oe({},t),r=0,n=Object.entries(e);r<n.length;r++){var i=n[r],a=i[0],s=i[1];s===void 0&&delete e[a]}return e}function cl(t){var e=this;t===void 0&&(t={});var r=t,n=r.baseUrl,i=r.prepareHeaders,a=i===void 0?function(d){return d}:i,s=r.fetchFn,u=s===void 0?da:s,o=r.paramsSerializer,l=r.isJsonContentType,h=l===void 0?ul:l,m=r.jsonContentType,y=m===void 0?"application/json":m,f=r.jsonReplacer,w=r.timeout,I=r.responseHandler,R=r.validateStatus,O=oa(r,["baseUrl","prepareHeaders","fetchFn","paramsSerializer","isJsonContentType","jsonContentType","jsonReplacer","timeout","responseHandler","validateStatus"]);return typeof fetch>"u"&&u===da&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),function(d,g){return vr(e,null,function(){var v,p,_,T,S,E,A,C,P,N,x,B,U,j,W,G,z,J,V,Y,Q,X,ae,ve,_e,ge,Ie,re,de,Ye,ot,Xe,ut,bt,Ze,wr;return fr(this,function(we){switch(we.label){case 0:return v=g.signal,p=g.getState,_=g.extra,T=g.endpoint,S=g.forced,E=g.type,C=typeof d=="string"?{url:d}:d,P=C.url,N=C.headers,x=N===void 0?new Headers(O.headers):N,B=C.params,U=B===void 0?void 0:B,j=C.responseHandler,W=j===void 0?I??"json":j,G=C.validateStatus,z=G===void 0?R??ol:G,J=C.timeout,V=J===void 0?w:J,Y=oa(C,["url","headers","params","responseHandler","validateStatus","timeout"]),Q=oe(De(oe({},O),{signal:v}),Y),x=new Headers(fa(x)),X=Q,[4,a(x,{getState:p,extra:_,endpoint:T,forced:S,type:E})];case 1:X.headers=we.sent()||x,ae=function(me){return typeof me=="object"&&(L.isPlainObject(me)||Array.isArray(me)||typeof me.toJSON=="function")},!Q.headers.has("content-type")&&ae(Q.body)&&Q.headers.set("content-type",y),ae(Q.body)&&h(Q.headers)&&(Q.body=JSON.stringify(Q.body,f)),U&&(ve=~P.indexOf("?")?"&":"?",_e=o?o(U):new URLSearchParams(fa(U)),P+=ve+_e),P=il(n,P),ge=new Request(P,Q),Ie=ge.clone(),A={request:Ie},de=!1,Ye=V&&setTimeout(function(){de=!0,g.abort()},V),we.label=2;case 2:return we.trys.push([2,4,5,6]),[4,u(ge)];case 3:return re=we.sent(),[3,6];case 4:return ot=we.sent(),[2,{error:{status:de?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(ot)},meta:A}];case 5:return Ye&&clearTimeout(Ye),[7];case 6:Xe=re.clone(),A.response=Xe,bt="",we.label=7;case 7:return we.trys.push([7,9,,10]),[4,Promise.all([b(re,W).then(function(me){return ut=me},function(me){return Ze=me}),Xe.text().then(function(me){return bt=me},function(){})])];case 8:if(we.sent(),Ze)throw Ze;return[3,10];case 9:return wr=we.sent(),[2,{error:{status:"PARSING_ERROR",originalStatus:re.status,data:bt,error:String(wr)},meta:A}];case 10:return[2,z(re,ut)?{data:ut,meta:A}:{error:{status:re.status,data:ut},meta:A}]}})})};function b(d,g){return vr(this,null,function(){var v;return fr(this,function(p){switch(p.label){case 0:return typeof g=="function"?[2,g(d)]:(g==="content-type"&&(g=h(d.headers)?"json":"text"),g!=="json"?[3,2]:[4,d.text()]);case 1:return v=p.sent(),[2,v.length?JSON.parse(v):null];case 2:return[2,d.text()]}})})}}var ha=function(){function t(e,r){r===void 0&&(r=void 0),this.value=e,this.meta=r}return t}(),dn=L.createAction("__rtkq/focused"),pa=L.createAction("__rtkq/unfocused"),fn=L.createAction("__rtkq/online"),va=L.createAction("__rtkq/offline"),Ne;(function(t){t.query="query",t.mutation="mutation"})(Ne||(Ne={}));function ga(t){return t.type===Ne.query}function ll(t){return t.type===Ne.mutation}function ma(t,e,r,n,i,a){return dl(t)?t(e,r,n,i).map(hn).map(a):Array.isArray(t)?t.map(hn).map(a):[]}function dl(t){return typeof t=="function"}function hn(t){return typeof t=="string"?{type:t}:t}function pn(t){return t!=null}var Bt=Symbol("forceQueryFn"),vn=function(t){return typeof t[Bt]=="function"};function fl(t){var e=t.serializeQueryArgs,r=t.queryThunk,n=t.mutationThunk,i=t.api,a=t.context,s=new Map,u=new Map,o=i.internalActions,l=o.unsubscribeQueryResult,h=o.removeMutationResult,m=o.updateSubscriptionOptions;return{buildInitiateQuery:d,buildInitiateMutation:g,getRunningQueryThunk:w,getRunningMutationThunk:I,getRunningQueriesThunk:R,getRunningMutationsThunk:O,getRunningOperationPromises:f,removalWarning:y};function y(){throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`)}function f(){if(typeof process<"u"&&process.env.NODE_ENV==="development")y();else{var v=function(p){return Array.from(p.values()).flatMap(function(_){return _?Object.values(_):[]})};return hr(hr([],v(s)),v(u)).filter(pn)}}function w(v,p){return function(_){var T,S=a.endpointDefinitions[v],E=e({queryArgs:p,endpointDefinition:S,endpointName:v});return(T=s.get(_))==null?void 0:T[E]}}function I(v,p){return function(_){var T;return(T=u.get(_))==null?void 0:T[p]}}function R(){return function(v){return Object.values(s.get(v)||{}).filter(pn)}}function O(){return function(v){return Object.values(u.get(v)||{}).filter(pn)}}function b(v){if(process.env.NODE_ENV!=="production"){if(b.triggered)return;var p=v(i.internalActions.internal_probeSubscription({queryCacheKey:"DOES_NOT_EXIST",requestId:"DUMMY_REQUEST_ID"}));if(b.triggered=!0,typeof p!="boolean")throw new Error('Warning: Middleware for RTK-Query API at reducerPath "'+i.reducerPath+`" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`)}}function d(v,p){var _=function(T,S){var E=S===void 0?{}:S,A=E.subscribe,C=A===void 0?!0:A,P=E.forceRefetch,N=E.subscriptionOptions,x=Bt,B=E[x];return function(U,j){var W,G,z=e({queryArgs:T,endpointDefinition:p,endpointName:v}),J=r((W={type:"query",subscribe:C,forceRefetch:P,subscriptionOptions:N,endpointName:v,originalArgs:T,queryCacheKey:z},W[Bt]=B,W)),V=i.endpoints[v].select(T),Y=U(J),Q=V(j());b(U);var X=Y.requestId,ae=Y.abort,ve=Q.requestId!==X,_e=(G=s.get(U))==null?void 0:G[z],ge=function(){return V(j())},Ie=Object.assign(B?Y.then(ge):ve&&!_e?Promise.resolve(Q):Promise.all([_e,Y]).then(ge),{arg:T,requestId:X,subscriptionOptions:N,queryCacheKey:z,abort:ae,unwrap:function(){return vr(this,null,function(){var de;return fr(this,function(Ye){switch(Ye.label){case 0:return[4,Ie];case 1:if(de=Ye.sent(),de.isError)throw de.error;return[2,de.data]}})})},refetch:function(){return U(_(T,{subscribe:!1,forceRefetch:!0}))},unsubscribe:function(){C&&U(l({queryCacheKey:z,requestId:X}))},updateSubscriptionOptions:function(de){Ie.subscriptionOptions=de,U(m({endpointName:v,requestId:X,queryCacheKey:z,options:de}))}});if(!_e&&!ve&&!B){var re=s.get(U)||{};re[z]=Ie,s.set(U,re),Ie.then(function(){delete re[z],Object.keys(re).length||s.delete(U)})}return Ie}};return _}function g(v){return function(p,_){var T=_===void 0?{}:_,S=T.track,E=S===void 0?!0:S,A=T.fixedCacheKey;return function(C,P){var N=n({type:"mutation",endpointName:v,originalArgs:p,track:E,fixedCacheKey:A}),x=C(N);b(C);var B=x.requestId,U=x.abort,j=x.unwrap,W=x.unwrap().then(function(V){return{data:V}}).catch(function(V){return{error:V}}),G=function(){C(h({requestId:B,fixedCacheKey:A}))},z=Object.assign(W,{arg:x.arg,requestId:B,abort:U,unwrap:j,unsubscribe:G,reset:G}),J=u.get(C)||{};return u.set(C,J),J[B]=z,z.then(function(){delete J[B],Object.keys(J).length||u.delete(C)}),A&&(J[A]=z,z.then(function(){J[A]===z&&(delete J[A],Object.keys(J).length||u.delete(C))})),z}}}}function ya(t){return t}function hl(t){var e=this,r=t.reducerPath,n=t.baseQuery,i=t.context.endpointDefinitions,a=t.serializeQueryArgs,s=t.api,u=function(d,g,v){return function(p){var _=i[d];p(s.internalActions.queryResultPatched({queryCacheKey:a({queryArgs:g,endpointDefinition:_,endpointName:d}),patches:v}))}},o=function(d,g,v){return function(p,_){var T,S,E=s.endpoints[d].select(g)(_()),A={patches:[],inversePatches:[],undo:function(){return p(s.util.patchQueryData(d,g,A.inversePatches))}};if(E.status===ie.uninitialized)return A;if("data"in E)if(Be(E.data)){var C=ta(E.data,v),P=C[1],N=C[2];(T=A.patches).push.apply(T,P),(S=A.inversePatches).push.apply(S,N)}else{var x=v(E.data);A.patches.push({op:"replace",path:[],value:x}),A.inversePatches.push({op:"replace",path:[],value:E.data})}return p(s.util.patchQueryData(d,g,A.patches)),A}},l=function(d,g,v){return function(p){var _;return p(s.endpoints[d].initiate(g,(_={subscribe:!1,forceRefetch:!0},_[Bt]=function(){return{data:v}},_)))}},h=function(d,g){return vr(e,[d,g],function(v,p){var _,T,S,E,A,C,P,N,x,B,U,j,W,G,z,J,V,Y,Q=p.signal,X=p.abort,ae=p.rejectWithValue,ve=p.fulfillWithValue,_e=p.dispatch,ge=p.getState,Ie=p.extra;return fr(this,function(re){switch(re.label){case 0:_=i[v.endpointName],re.label=1;case 1:return re.trys.push([1,8,,13]),T=ya,S=void 0,E={signal:Q,abort:X,dispatch:_e,getState:ge,extra:Ie,endpoint:v.endpointName,type:v.type,forced:v.type==="query"?m(v,ge()):void 0},A=v.type==="query"?v[Bt]:void 0,A?(S=A(),[3,6]):[3,2];case 2:return _.query?[4,n(_.query(v.originalArgs),E,_.extraOptions)]:[3,4];case 3:return S=re.sent(),_.transformResponse&&(T=_.transformResponse),[3,6];case 4:return[4,_.queryFn(v.originalArgs,E,_.extraOptions,function(de){return n(de,E,_.extraOptions)})];case 5:S=re.sent(),re.label=6;case 6:if(typeof process<"u"&&process.env.NODE_ENV==="development"){if(C=_.query?"`baseQuery`":"`queryFn`",P=void 0,!S)P=C+" did not return anything.";else if(typeof S!="object")P=C+" did not return an object.";else if(S.error&&S.data)P=C+" returned an object containing both `error` and `result`.";else if(S.error===void 0&&S.data===void 0)P=C+" returned an object containing neither a valid `error` and `result`. At least one of them should not be `undefined`";else for(N=0,x=Object.keys(S);N<x.length;N++)if(B=x[N],B!=="error"&&B!=="data"&&B!=="meta"){P="The object returned by "+C+" has the unknown property "+B+".";break}P&&console.error("Error encountered handling the endpoint "+v.endpointName+`.
              `+P+"\n              It needs to return an object with either the shape `{ data: <value> }` or `{ error: <value> }` that may contain an optional `meta` property.\n              Object returned was:",S)}if(S.error)throw new ha(S.error,S.meta);return U=ve,[4,T(S.data,S.meta,v.originalArgs)];case 7:return[2,U.apply(void 0,[re.sent(),(V={fulfilledTimeStamp:Date.now(),baseQueryMeta:S.meta},V[L.SHOULD_AUTOBATCH]=!0,V)])];case 8:if(j=re.sent(),W=j,!(W instanceof ha))return[3,12];G=ya,_.query&&_.transformErrorResponse&&(G=_.transformErrorResponse),re.label=9;case 9:return re.trys.push([9,11,,12]),z=ae,[4,G(W.value,W.meta,v.originalArgs)];case 10:return[2,z.apply(void 0,[re.sent(),(Y={baseQueryMeta:W.meta},Y[L.SHOULD_AUTOBATCH]=!0,Y)])];case 11:return J=re.sent(),W=J,[3,12];case 12:throw typeof process<"u"&&process.env.NODE_ENV!=="production"?console.error('An unhandled error occurred processing a request for the endpoint "'+v.endpointName+`".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`,W):console.error(W),W;case 13:return[2]}})})};function m(d,g){var v,p,_,T,S=(p=(v=g[r])==null?void 0:v.queries)==null?void 0:p[d.queryCacheKey],E=(_=g[r])==null?void 0:_.config.refetchOnMountOrArgChange,A=S==null?void 0:S.fulfilledTimeStamp,C=(T=d.forceRefetch)!=null?T:d.subscribe&&E;return C?C===!0||(Number(new Date)-Number(A))/1e3>=C:!1}var y=L.createAsyncThunk(r+"/executeQuery",h,{getPendingMeta:function(){var d;return d={startedTimeStamp:Date.now()},d[L.SHOULD_AUTOBATCH]=!0,d},condition:function(d,g){var v=g.getState,p,_,T,S=v(),E=(_=(p=S[r])==null?void 0:p.queries)==null?void 0:_[d.queryCacheKey],A=E==null?void 0:E.fulfilledTimeStamp,C=d.originalArgs,P=E==null?void 0:E.originalArgs,N=i[d.endpointName];return vn(d)?!0:(E==null?void 0:E.status)==="pending"?!1:m(d,S)||ga(N)&&((T=N==null?void 0:N.forceRefetch)!=null&&T.call(N,{currentArg:C,previousArg:P,endpointState:E,state:S}))?!0:!A},dispatchConditionRejection:!0}),f=L.createAsyncThunk(r+"/executeMutation",h,{getPendingMeta:function(){var d;return d={startedTimeStamp:Date.now()},d[L.SHOULD_AUTOBATCH]=!0,d}}),w=function(d){return"force"in d},I=function(d){return"ifOlderThan"in d},R=function(d,g,v){return function(p,_){var T=w(v)&&v.force,S=I(v)&&v.ifOlderThan,E=function(N){return N===void 0&&(N=!0),s.endpoints[d].initiate(g,{forceRefetch:N})},A=s.endpoints[d].select(g)(_());if(T)p(E());else if(S){var C=A==null?void 0:A.fulfilledTimeStamp;if(!C){p(E());return}var P=(Number(new Date)-Number(new Date(C)))/1e3>=S;P&&p(E())}else p(E(!1))}};function O(d){return function(g){var v,p;return((p=(v=g==null?void 0:g.meta)==null?void 0:v.arg)==null?void 0:p.endpointName)===d}}function b(d,g){return{matchPending:L.isAllOf(L.isPending(d),O(g)),matchFulfilled:L.isAllOf(L.isFulfilled(d),O(g)),matchRejected:L.isAllOf(L.isRejected(d),O(g))}}return{queryThunk:y,mutationThunk:f,prefetch:R,updateQueryData:o,upsertQueryData:l,patchQueryData:u,buildMatchThunkActions:b}}function ba(t,e,r,n){return ma(r[t.meta.arg.endpointName][e],L.isFulfilled(t)?t.payload:void 0,L.isRejectedWithValue(t)?t.payload:void 0,t.meta.arg.originalArgs,"baseQueryMeta"in t.meta?t.meta.baseQueryMeta:void 0,n)}function gr(t,e,r){var n=t[e];n&&r(n)}function qt(t){var e;return(e="arg"in t?t.arg.fixedCacheKey:t.fixedCacheKey)!=null?e:t.requestId}function _a(t,e,r){var n=t[qt(e)];n&&r(n)}var Ht={};function pl(t){var e=t.reducerPath,r=t.queryThunk,n=t.mutationThunk,i=t.context,a=i.endpointDefinitions,s=i.apiUid,u=i.extractRehydrationInfo,o=i.hasRehydrationInfo,l=t.assertTagType,h=t.config,m=L.createAction(e+"/resetApiState"),y=L.createSlice({name:e+"/queries",initialState:Ht,reducers:{removeQueryResult:{reducer:function(v,p){var _=p.payload.queryCacheKey;delete v[_]},prepare:L.prepareAutoBatched()},queryResultPatched:function(v,p){var _=p.payload,T=_.queryCacheKey,S=_.patches;gr(v,T,function(E){E.data=ra(E.data,S.concat())})}},extraReducers:function(v){v.addCase(r.pending,function(p,_){var T=_.meta,S=_.meta.arg,E,A,C=vn(S);(S.subscribe||C)&&((A=p[E=S.queryCacheKey])!=null||(p[E]={status:ie.uninitialized,endpointName:S.endpointName})),gr(p,S.queryCacheKey,function(P){P.status=ie.pending,P.requestId=C&&P.requestId?P.requestId:T.requestId,S.originalArgs!==void 0&&(P.originalArgs=S.originalArgs),P.startedTimeStamp=T.startedTimeStamp})}).addCase(r.fulfilled,function(p,_){var T=_.meta,S=_.payload;gr(p,T.arg.queryCacheKey,function(E){var A;if(!(E.requestId!==T.requestId&&!vn(T.arg))){var C=a[T.arg.endpointName].merge;if(E.status=ie.fulfilled,C)if(E.data!==void 0){var P=T.fulfilledTimeStamp,N=T.arg,x=T.baseQueryMeta,B=T.requestId,U=L.createNextState(E.data,function(j){return C(j,S,{arg:N.originalArgs,baseQueryMeta:x,fulfilledTimeStamp:P,requestId:B})});E.data=U}else E.data=S;else E.data=(A=a[T.arg.endpointName].structuralSharing)==null||A?la(je(E.data)?Mc(E.data):E.data,S):S;delete E.error,E.fulfilledTimeStamp=T.fulfilledTimeStamp}})}).addCase(r.rejected,function(p,_){var T=_.meta,S=T.condition,E=T.arg,A=T.requestId,C=_.error,P=_.payload;gr(p,E.queryCacheKey,function(N){if(!S){if(N.requestId!==A)return;N.status=ie.rejected,N.error=P??C}})}).addMatcher(o,function(p,_){for(var T=u(_).queries,S=0,E=Object.entries(T);S<E.length;S++){var A=E[S],C=A[0],P=A[1];((P==null?void 0:P.status)===ie.fulfilled||(P==null?void 0:P.status)===ie.rejected)&&(p[C]=P)}})}}),f=L.createSlice({name:e+"/mutations",initialState:Ht,reducers:{removeMutationResult:{reducer:function(v,p){var _=p.payload,T=qt(_);T in v&&delete v[T]},prepare:L.prepareAutoBatched()}},extraReducers:function(v){v.addCase(n.pending,function(p,_){var T=_.meta,S=_.meta,E=S.requestId,A=S.arg,C=S.startedTimeStamp;A.track&&(p[qt(T)]={requestId:E,status:ie.pending,endpointName:A.endpointName,startedTimeStamp:C})}).addCase(n.fulfilled,function(p,_){var T=_.payload,S=_.meta;S.arg.track&&_a(p,S,function(E){E.requestId===S.requestId&&(E.status=ie.fulfilled,E.data=T,E.fulfilledTimeStamp=S.fulfilledTimeStamp)})}).addCase(n.rejected,function(p,_){var T=_.payload,S=_.error,E=_.meta;E.arg.track&&_a(p,E,function(A){A.requestId===E.requestId&&(A.status=ie.rejected,A.error=T??S)})}).addMatcher(o,function(p,_){for(var T=u(_).mutations,S=0,E=Object.entries(T);S<E.length;S++){var A=E[S],C=A[0],P=A[1];((P==null?void 0:P.status)===ie.fulfilled||(P==null?void 0:P.status)===ie.rejected)&&C!==(P==null?void 0:P.requestId)&&(p[C]=P)}})}}),w=L.createSlice({name:e+"/invalidation",initialState:Ht,reducers:{},extraReducers:function(v){v.addCase(y.actions.removeQueryResult,function(p,_){for(var T=_.payload.queryCacheKey,S=0,E=Object.values(p);S<E.length;S++)for(var A=E[S],C=0,P=Object.values(A);C<P.length;C++){var N=P[C],x=N.indexOf(T);x!==-1&&N.splice(x,1)}}).addMatcher(o,function(p,_){for(var T,S,E,A,C=u(_).provided,P=0,N=Object.entries(C);P<N.length;P++)for(var x=N[P],B=x[0],U=x[1],j=0,W=Object.entries(U);j<W.length;j++)for(var G=W[j],z=G[0],J=G[1],V=(A=(S=(T=p[B])!=null?T:p[B]={})[E=z||"__internal_without_id"])!=null?A:S[E]=[],Y=0,Q=J;Y<Q.length;Y++){var X=Q[Y],ae=V.includes(X);ae||V.push(X)}}).addMatcher(L.isAnyOf(L.isFulfilled(r),L.isRejectedWithValue(r)),function(p,_){for(var T,S,E,A,C=ba(_,"providesTags",a,l),P=_.meta.arg.queryCacheKey,N=0,x=Object.values(p);N<x.length;N++)for(var B=x[N],U=0,j=Object.values(B);U<j.length;U++){var W=j[U],G=W.indexOf(P);G!==-1&&W.splice(G,1)}for(var z=0,J=C;z<J.length;z++){var V=J[z],Y=V.type,Q=V.id,X=(A=(S=(T=p[Y])!=null?T:p[Y]={})[E=Q||"__internal_without_id"])!=null?A:S[E]=[],ae=X.includes(P);ae||X.push(P)}})}}),I=L.createSlice({name:e+"/subscriptions",initialState:Ht,reducers:{updateSubscriptionOptions:function(v,p){},unsubscribeQueryResult:function(v,p){},internal_probeSubscription:function(v,p){}}}),R=L.createSlice({name:e+"/internalSubscriptions",initialState:Ht,reducers:{subscriptionsUpdated:{reducer:function(v,p){return ra(v,p.payload)},prepare:L.prepareAutoBatched()}}}),O=L.createSlice({name:e+"/config",initialState:oe({online:al(),focused:sl(),middlewareRegistered:!1},h),reducers:{middlewareRegistered:function(v,p){var _=p.payload;v.middlewareRegistered=v.middlewareRegistered==="conflict"||s!==_?"conflict":!0}},extraReducers:function(v){v.addCase(fn,function(p){p.online=!0}).addCase(va,function(p){p.online=!1}).addCase(dn,function(p){p.focused=!0}).addCase(pa,function(p){p.focused=!1}).addMatcher(o,function(p){return oe({},p)})}}),b=L.combineReducers({queries:y.reducer,mutations:f.reducer,provided:w.reducer,subscriptions:R.reducer,config:O.reducer}),d=function(v,p){return b(m.match(p)?void 0:v,p)},g=De(oe(oe(oe(oe(oe({},O.actions),y.actions),I.actions),R.actions),f.actions),{unsubscribeMutationResult:f.actions.removeMutationResult,resetApiState:m});return{reducer:d,actions:g}}var at=Symbol.for("RTKQ/skipToken"),Ia={status:ie.uninitialized},wa=L.createNextState(Ia,function(){}),Ea=L.createNextState(Ia,function(){});function vl(t){var e=t.serializeQueryArgs,r=t.reducerPath,n=function(h){return wa},i=function(h){return Ea};return{buildQuerySelector:u,buildMutationSelector:o,selectInvalidatedBy:l};function a(h){return oe(oe({},h),el(h.status))}function s(h){var m=h[r];if(process.env.NODE_ENV!=="production"&&!m){if(s.triggered)return m;s.triggered=!0,console.error("Error: No data found at `state."+r+"`. Did you forget to add the reducer to the store?")}return m}function u(h,m){return function(y){var f=e({queryArgs:y,endpointDefinition:m,endpointName:h}),w=function(R){var O,b,d;return(d=(b=(O=s(R))==null?void 0:O.queries)==null?void 0:b[f])!=null?d:wa},I=y===at?n:w;return L.createSelector(I,a)}}function o(){return function(h){var m,y;typeof h=="object"?y=(m=qt(h))!=null?m:at:y=h;var f=function(I){var R,O,b;return(b=(O=(R=s(I))==null?void 0:R.mutations)==null?void 0:O[y])!=null?b:Ea},w=y===at?i:f;return L.createSelector(w,a)}}function l(h,m){for(var y,f=h[r],w=new Set,I=0,R=m.map(hn);I<R.length;I++){var O=R[I],b=f.provided[O.type];if(b)for(var d=(y=O.id!==void 0?b[O.id]:ua(Object.values(b)))!=null?y:[],g=0,v=d;g<v.length;g++){var p=v[g];w.add(p)}}return ua(Array.from(w.values()).map(function(_){var T=f.queries[_];return T?[{queryCacheKey:_,endpointName:T.endpointName,originalArgs:T.originalArgs}]:[]}))}}var mr=WeakMap?new WeakMap:void 0,Ta=function(t){var e=t.endpointName,r=t.queryArgs,n="",i=mr==null?void 0:mr.get(r);if(typeof i=="string")n=i;else{var a=JSON.stringify(r,function(s,u){return L.isPlainObject(u)?Object.keys(u).sort().reduce(function(o,l){return o[l]=u[l],o},{}):u});L.isPlainObject(r)&&(mr==null||mr.set(r,a)),n=a}return e+"("+n+")"};function gl(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(n){var i=na(function(h){var m,y;return(y=n.extractRehydrationInfo)==null?void 0:y.call(n,h,{reducerPath:(m=n.reducerPath)!=null?m:"api"})}),a=De(oe({reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1},n),{extractRehydrationInfo:i,serializeQueryArgs:function(h){var m=Ta;if("serializeQueryArgs"in h.endpointDefinition){var y=h.endpointDefinition.serializeQueryArgs;m=function(f){var w=y(f);return typeof w=="string"?w:Ta(De(oe({},f),{queryArgs:w}))}}else n.serializeQueryArgs&&(m=n.serializeQueryArgs);return m(h)},tagTypes:hr([],n.tagTypes||[])}),s={endpointDefinitions:{},batch:function(h){h()},apiUid:L.nanoid(),extractRehydrationInfo:i,hasRehydrationInfo:na(function(h){return i(h)!=null})},u={injectEndpoints:l,enhanceEndpoints:function(h){var m=h.addTagTypes,y=h.endpoints;if(m)for(var f=0,w=m;f<w.length;f++){var I=w[f];a.tagTypes.includes(I)||a.tagTypes.push(I)}if(y)for(var R=0,O=Object.entries(y);R<O.length;R++){var b=O[R],d=b[0],g=b[1];typeof g=="function"?g(s.endpointDefinitions[d]):Object.assign(s.endpointDefinitions[d]||{},g)}return u}},o=t.map(function(h){return h.init(u,a,s)});function l(h){for(var m=h.endpoints({query:function(g){return De(oe({},g),{type:Ne.query})},mutation:function(g){return De(oe({},g),{type:Ne.mutation})}}),y=0,f=Object.entries(m);y<f.length;y++){var w=f[y],I=w[0],R=w[1];if(!h.overrideExisting&&I in s.endpointDefinitions){typeof process<"u"&&process.env.NODE_ENV==="development"&&console.error("called `injectEndpoints` to override already-existing endpointName "+I+" without specifying `overrideExisting: true`");continue}s.endpointDefinitions[I]=R;for(var O=0,b=o;O<b.length;O++){var d=b[O];d.injectEndpoint(I,R)}}return u}return u.injectEndpoints({endpoints:n.endpoints})}}function ml(t){for(var e in t)return!1;return!0}var yl=2147483647/1e3-1,bl=function(t){var e=t.reducerPath,r=t.api,n=t.context,i=t.internalState,a=r.internalActions,s=a.removeQueryResult,u=a.unsubscribeQueryResult;function o(y){var f=i.currentSubscriptions[y];return!!f&&!ml(f)}var l={},h=function(y,f,w){var I;if(u.match(y)){var R=f.getState()[e],O=y.payload.queryCacheKey;m(O,(I=R.queries[O])==null?void 0:I.endpointName,f,R.config)}if(r.util.resetApiState.match(y))for(var b=0,d=Object.entries(l);b<d.length;b++){var g=d[b],v=g[0],p=g[1];p&&clearTimeout(p),delete l[v]}if(n.hasRehydrationInfo(y))for(var R=f.getState()[e],_=n.extractRehydrationInfo(y).queries,T=0,S=Object.entries(_);T<S.length;T++){var E=S[T],O=E[0],A=E[1];m(O,A==null?void 0:A.endpointName,f,R.config)}};function m(y,f,w,I){var R,O=n.endpointDefinitions[f],b=(R=O==null?void 0:O.keepUnusedDataFor)!=null?R:I.keepUnusedDataFor;if(b!==1/0){var d=Math.max(0,Math.min(b,yl));if(!o(y)){var g=l[y];g&&clearTimeout(g),l[y]=setTimeout(function(){o(y)||w.dispatch(s({queryCacheKey:y})),delete l[y]},d*1e3)}}}return h},_l=function(t){var e=t.reducerPath,r=t.context,n=t.context.endpointDefinitions,i=t.mutationThunk,a=t.api,s=t.assertTagType,u=t.refetchQuery,o=a.internalActions.removeQueryResult,l=L.isAnyOf(L.isFulfilled(i),L.isRejectedWithValue(i)),h=function(y,f){l(y)&&m(ba(y,"invalidatesTags",n,s),f),a.util.invalidateTags.match(y)&&m(ma(y.payload,void 0,void 0,void 0,void 0,s),f)};function m(y,f){var w=f.getState(),I=w[e],R=a.util.selectInvalidatedBy(w,y);r.batch(function(){for(var O,b=Array.from(R.values()),d=0,g=b;d<g.length;d++){var v=g[d].queryCacheKey,p=I.queries[v],_=(O=I.subscriptions[v])!=null?O:{};p&&(Object.keys(_).length===0?f.dispatch(o({queryCacheKey:v})):p.status!==ie.uninitialized&&f.dispatch(u(p,v)))}})}return h},Il=function(t){var e=t.reducerPath,r=t.queryThunk,n=t.api,i=t.refetchQuery,a=t.internalState,s={},u=function(f,w){(n.internalActions.updateSubscriptionOptions.match(f)||n.internalActions.unsubscribeQueryResult.match(f))&&l(f.payload,w),(r.pending.match(f)||r.rejected.match(f)&&f.meta.condition)&&l(f.meta.arg,w),(r.fulfilled.match(f)||r.rejected.match(f)&&!f.meta.condition)&&o(f.meta.arg,w),n.util.resetApiState.match(f)&&m()};function o(f,w){var I=f.queryCacheKey,R=w.getState()[e],O=R.queries[I],b=a.currentSubscriptions[I];if(!(!O||O.status===ie.uninitialized)){var d=y(b);if(Number.isFinite(d)){var g=s[I];g!=null&&g.timeout&&(clearTimeout(g.timeout),g.timeout=void 0);var v=Date.now()+d,p=s[I]={nextPollTimestamp:v,pollingInterval:d,timeout:setTimeout(function(){p.timeout=void 0,w.dispatch(i(O,I))},d)}}}}function l(f,w){var I=f.queryCacheKey,R=w.getState()[e],O=R.queries[I],b=a.currentSubscriptions[I];if(!(!O||O.status===ie.uninitialized)){var d=y(b);if(!Number.isFinite(d)){h(I);return}var g=s[I],v=Date.now()+d;(!g||v<g.nextPollTimestamp)&&o({queryCacheKey:I},w)}}function h(f){var w=s[f];w!=null&&w.timeout&&clearTimeout(w.timeout),delete s[f]}function m(){for(var f=0,w=Object.keys(s);f<w.length;f++){var I=w[f];h(I)}}function y(f){f===void 0&&(f={});var w=Number.POSITIVE_INFINITY;for(var I in f)f[I].pollingInterval&&(w=Math.min(f[I].pollingInterval,w));return w}return u},wl=function(t){var e=t.reducerPath,r=t.context,n=t.api,i=t.refetchQuery,a=t.internalState,s=n.internalActions.removeQueryResult,u=function(l,h){dn.match(l)&&o(h,"refetchOnFocus"),fn.match(l)&&o(h,"refetchOnReconnect")};function o(l,h){var m=l.getState()[e],y=m.queries,f=a.currentSubscriptions;r.batch(function(){for(var w=0,I=Object.keys(f);w<I.length;w++){var R=I[w],O=y[R],b=f[R];if(!(!b||!O)){var d=Object.values(b).some(function(g){return g[h]===!0})||Object.values(b).every(function(g){return g[h]===void 0})&&m.config[h];d&&(Object.keys(b).length===0?l.dispatch(s({queryCacheKey:R})):O.status!==ie.uninitialized&&l.dispatch(i(O,R)))}}})}return u},Sa=new Error("Promise never resolved before cacheEntryRemoved."),El=function(t){var e=t.api,r=t.reducerPath,n=t.context,i=t.queryThunk,a=t.mutationThunk;t.internalState;var s=L.isAsyncThunkAction(i),u=L.isAsyncThunkAction(a),o=L.isFulfilled(i,a),l={},h=function(f,w,I){var R=m(f);if(i.pending.match(f)){var O=I[r].queries[R],b=w.getState()[r].queries[R];!O&&b&&y(f.meta.arg.endpointName,f.meta.arg.originalArgs,R,w,f.meta.requestId)}else if(a.pending.match(f)){var b=w.getState()[r].mutations[R];b&&y(f.meta.arg.endpointName,f.meta.arg.originalArgs,R,w,f.meta.requestId)}else if(o(f)){var d=l[R];d!=null&&d.valueResolved&&(d.valueResolved({data:f.payload,meta:f.meta.baseQueryMeta}),delete d.valueResolved)}else if(e.internalActions.removeQueryResult.match(f)||e.internalActions.removeMutationResult.match(f)){var d=l[R];d&&(delete l[R],d.cacheEntryRemoved())}else if(e.util.resetApiState.match(f))for(var g=0,v=Object.entries(l);g<v.length;g++){var p=v[g],_=p[0],d=p[1];delete l[_],d.cacheEntryRemoved()}};function m(f){return s(f)?f.meta.arg.queryCacheKey:u(f)?f.meta.requestId:e.internalActions.removeQueryResult.match(f)?f.payload.queryCacheKey:e.internalActions.removeMutationResult.match(f)?qt(f.payload):""}function y(f,w,I,R,O){var b=n.endpointDefinitions[f],d=b==null?void 0:b.onCacheEntryAdded;if(d){var g={},v=new Promise(function(A){g.cacheEntryRemoved=A}),p=Promise.race([new Promise(function(A){g.valueResolved=A}),v.then(function(){throw Sa})]);p.catch(function(){}),l[I]=g;var _=e.endpoints[f].select(b.type===Ne.query?w:I),T=R.dispatch(function(A,C,P){return P}),S=De(oe({},R),{getCacheEntry:function(){return _(R.getState())},requestId:O,extra:T,updateCachedData:b.type===Ne.query?function(A){return R.dispatch(e.util.updateQueryData(f,w,A))}:void 0,cacheDataLoaded:p,cacheEntryRemoved:v}),E=d(w,S);Promise.resolve(E).catch(function(A){if(A!==Sa)throw A})}}return h},Tl=function(t){var e=t.api,r=t.context,n=t.queryThunk,i=t.mutationThunk,a=L.isPending(n,i),s=L.isRejected(n,i),u=L.isFulfilled(n,i),o={},l=function(h,m){var y,f,w;if(a(h)){var I=h.meta,R=I.requestId,O=I.arg,b=O.endpointName,d=O.originalArgs,g=r.endpointDefinitions[b],v=g==null?void 0:g.onQueryStarted;if(v){var p={},_=new Promise(function(x,B){p.resolve=x,p.reject=B});_.catch(function(){}),o[R]=p;var T=e.endpoints[b].select(g.type===Ne.query?d:R),S=m.dispatch(function(x,B,U){return U}),E=De(oe({},m),{getCacheEntry:function(){return T(m.getState())},requestId:R,extra:S,updateCachedData:g.type===Ne.query?function(x){return m.dispatch(e.util.updateQueryData(b,d,x))}:void 0,queryFulfilled:_});v(d,E)}}else if(u(h)){var A=h.meta,R=A.requestId,C=A.baseQueryMeta;(y=o[R])==null||y.resolve({data:h.payload,meta:C}),delete o[R]}else if(s(h)){var P=h.meta,R=P.requestId,N=P.rejectedWithValue,C=P.baseQueryMeta;(w=o[R])==null||w.reject({error:(f=h.payload)!=null?f:h.error,isUnhandledError:!N,meta:C}),delete o[R]}};return l},Sl=function(t){var e=t.api,r=t.context.apiUid,n=t.reducerPath;return function(i,a){var s,u;e.util.resetApiState.match(i)&&a.dispatch(e.internalActions.middlewareRegistered(r)),typeof process<"u"&&process.env.NODE_ENV==="development"&&e.internalActions.middlewareRegistered.match(i)&&i.payload===r&&((u=(s=a.getState()[n])==null?void 0:s.config)==null?void 0:u.middlewareRegistered)==="conflict"&&console.warn('There is a mismatch between slice and middleware for the reducerPath "'+n+`".
You can only have one api per reducer path, this will lead to crashes in various situations!`+(n==="api"?`
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!`:""))}},Ra,Rl=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis):function(t){return(Ra||(Ra=Promise.resolve())).then(t).catch(function(e){return setTimeout(function(){throw e},0)})},Ol=function(t){var e=t.api,r=t.queryThunk,n=t.internalState,i=e.reducerPath+"/subscriptions",a=null,s=!1,u=e.internalActions,o=u.updateSubscriptionOptions,l=u.unsubscribeQueryResult,h=function(m,y){var f,w,I,R,O,b,d,g,v;if(o.match(y)){var p=y.payload,_=p.queryCacheKey,T=p.requestId,S=p.options;return(f=m==null?void 0:m[_])!=null&&f[T]&&(m[_][T]=S),!0}if(l.match(y)){var E=y.payload,_=E.queryCacheKey,T=E.requestId;return m[_]&&delete m[_][T],!0}if(e.internalActions.removeQueryResult.match(y))return delete m[y.payload.queryCacheKey],!0;if(r.pending.match(y)){var A=y.meta,C=A.arg,T=A.requestId;if(C.subscribe){var P=(I=m[w=C.queryCacheKey])!=null?I:m[w]={};return P[T]=(O=(R=C.subscriptionOptions)!=null?R:P[T])!=null?O:{},!0}}if(r.rejected.match(y)){var N=y.meta,x=N.condition,C=N.arg,T=N.requestId;if(x&&C.subscribe){var P=(d=m[b=C.queryCacheKey])!=null?d:m[b]={};return P[T]=(v=(g=C.subscriptionOptions)!=null?g:P[T])!=null?v:{},!0}}return!1};return function(m,y){var f,w;if(a||(a=JSON.parse(JSON.stringify(n.currentSubscriptions))),e.util.resetApiState.match(m))return a=n.currentSubscriptions={},[!0,!1];if(e.internalActions.internal_probeSubscription.match(m)){var I=m.payload,R=I.queryCacheKey,O=I.requestId,b=!!((f=n.currentSubscriptions[R])!=null&&f[O]);return[!1,b]}var d=h(n.currentSubscriptions,m);if(d){s||(Rl(function(){var _=JSON.parse(JSON.stringify(n.currentSubscriptions)),T=ta(a,function(){return _}),S=T[1];y.next(e.internalActions.subscriptionsUpdated(S)),a=_,s=!1}),s=!0);var g=!!((w=m.type)!=null&&w.startsWith(i)),v=r.rejected.match(m)&&m.meta.condition&&!!m.meta.arg.subscribe,p=!g&&!v;return[p,!1]}return[!0,!1]}};function Al(t){var e=t.reducerPath,r=t.queryThunk,n=t.api,i=t.context,a=i.apiUid,s={invalidateTags:L.createAction(e+"/invalidateTags")},u=function(m){return!!m&&typeof m.type=="string"&&m.type.startsWith(e+"/")},o=[Sl,bl,_l,Il,El,Tl],l=function(m){var y=!1,f={currentSubscriptions:{}},w=De(oe({},t),{internalState:f,refetchQuery:h}),I=o.map(function(b){return b(w)}),R=Ol(w),O=wl(w);return function(b){return function(d){y||(y=!0,m.dispatch(n.internalActions.middlewareRegistered(a)));var g=De(oe({},m),{next:b}),v=m.getState(),p=R(d,g,v),_=p[0],T=p[1],S;if(_?S=b(d):S=T,m.getState()[e]&&(O(d,g,v),u(d)||i.hasRehydrationInfo(d)))for(var E=0,A=I;E<A.length;E++){var C=A[E];C(d,g,v)}return S}}};return{middleware:l,actions:s};function h(m,y,f){return f===void 0&&(f={}),r(oe({type:"query",endpointName:m.endpointName,originalArgs:m.originalArgs,subscribe:!1,forceRefetch:!0,queryCacheKey:y},f))}}function Je(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];Object.assign.apply(Object,hr([t],e))}var Oa=Symbol(),Cl=function(){return{name:Oa,init:function(t,e,r){var n=e.baseQuery,i=e.tagTypes,a=e.reducerPath,s=e.serializeQueryArgs,u=e.keepUnusedDataFor,o=e.refetchOnMountOrArgChange,l=e.refetchOnFocus,h=e.refetchOnReconnect;Bc();var m=function(V){return typeof process<"u"&&process.env.NODE_ENV==="development"&&(i.includes(V.type)||console.error("Tag type '"+V.type+"' was used, but not specified in `tagTypes`!")),V};Object.assign(t,{reducerPath:a,endpoints:{},internalActions:{onOnline:fn,onOffline:va,onFocus:dn,onFocusLost:pa},util:{}});var y=hl({baseQuery:n,reducerPath:a,context:r,api:t,serializeQueryArgs:s}),f=y.queryThunk,w=y.mutationThunk,I=y.patchQueryData,R=y.updateQueryData,O=y.upsertQueryData,b=y.prefetch,d=y.buildMatchThunkActions,g=pl({context:r,queryThunk:f,mutationThunk:w,reducerPath:a,assertTagType:m,config:{refetchOnFocus:l,refetchOnReconnect:h,refetchOnMountOrArgChange:o,keepUnusedDataFor:u,reducerPath:a}}),v=g.reducer,p=g.actions;Je(t.util,{patchQueryData:I,updateQueryData:R,upsertQueryData:O,prefetch:b,resetApiState:p.resetApiState}),Je(t.internalActions,p);var _=Al({reducerPath:a,context:r,queryThunk:f,mutationThunk:w,api:t,assertTagType:m}),T=_.middleware,S=_.actions;Je(t.util,S),Je(t,{reducer:v,middleware:T});var E=vl({serializeQueryArgs:s,reducerPath:a}),A=E.buildQuerySelector,C=E.buildMutationSelector,P=E.selectInvalidatedBy;Je(t.util,{selectInvalidatedBy:P});var N=fl({queryThunk:f,mutationThunk:w,api:t,serializeQueryArgs:s,context:r}),x=N.buildInitiateQuery,B=N.buildInitiateMutation,U=N.getRunningMutationThunk,j=N.getRunningMutationsThunk,W=N.getRunningQueriesThunk,G=N.getRunningQueryThunk,z=N.getRunningOperationPromises,J=N.removalWarning;return Je(t.util,{getRunningOperationPromises:z,getRunningOperationPromise:J,getRunningMutationThunk:U,getRunningMutationsThunk:j,getRunningQueryThunk:G,getRunningQueriesThunk:W}),{name:Oa,injectEndpoint:function(V,Y){var Q,X,ae=t;(X=(Q=ae.endpoints)[V])!=null||(Q[V]={}),ga(Y)?Je(ae.endpoints[V],{name:V,select:A(V,Y),initiate:x(V,Y)},d(f,V)):ll(Y)&&Je(ae.endpoints[V],{name:V,select:C(),initiate:B(V)},d(w,V))}}}}},Pl=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t},kl=Object.defineProperty,Dl=Object.defineProperties,Nl=Object.getOwnPropertyDescriptors,Aa=Object.getOwnPropertySymbols,Ml=Object.prototype.hasOwnProperty,xl=Object.prototype.propertyIsEnumerable,Ca=function(t,e,r){return e in t?kl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},qe=function(t,e){for(var r in e||(e={}))Ml.call(e,r)&&Ca(t,r,e[r]);if(Aa)for(var n=0,i=Aa(e);n<i.length;n++){var r=i[n];xl.call(e,r)&&Ca(t,r,e[r])}return t},yr=function(t,e){return Dl(t,Nl(e))};function Pa(t,e,r,n){var i=F.useMemo(function(){return{queryArgs:t,serialized:typeof t=="object"?e({queryArgs:t,endpointDefinition:r,endpointName:n}):t}},[t,e,r,n]),a=F.useRef(i);return F.useEffect(function(){a.current.serialized!==i.serialized&&(a.current=i)},[i]),a.current.serialized===i.serialized?a.current.queryArgs:t}var gn=Symbol();function mn(t){var e=F.useRef(t);return F.useEffect(function(){Me.shallowEqual(e.current,t)||(e.current=t)},[t]),Me.shallowEqual(e.current,t)?e.current:t}var br=WeakMap?new WeakMap:void 0,Ll=function(t){var e=t.endpointName,r=t.queryArgs,n="",i=br==null?void 0:br.get(r);if(typeof i=="string")n=i;else{var a=JSON.stringify(r,function(s,u){return L.isPlainObject(u)?Object.keys(u).sort().reduce(function(o,l){return o[l]=u[l],o},{}):u});L.isPlainObject(r)&&(br==null||br.set(r,a)),n=a}return e+"("+n+")"},Fl=typeof window<"u"&&window.document&&window.document.createElement?F.useLayoutEffect:F.useEffect,Ul=function(t){return t},jl=function(t){return t.isUninitialized?yr(qe({},t),{isUninitialized:!1,isFetching:!0,isLoading:t.data===void 0,status:ie.pending}):t};function Bl(t){var e=t.api,r=t.moduleOptions,n=r.batch,i=r.useDispatch,a=r.useSelector,s=r.useStore,u=r.unstable__sideEffectsInRender,o=t.serializeQueryArgs,l=t.context,h=u?function(I){return I()}:F.useEffect;return{buildQueryHooks:f,buildMutationHook:w,usePrefetch:y};function m(I,R,O){if(R!=null&&R.endpointName&&I.isUninitialized){var b=R.endpointName,d=l.endpointDefinitions[b];o({queryArgs:R.originalArgs,endpointDefinition:d,endpointName:b})===o({queryArgs:O,endpointDefinition:d,endpointName:b})&&(R=void 0)}var g=I.isSuccess?I.data:R==null?void 0:R.data;g===void 0&&(g=I.data);var v=g!==void 0,p=I.isLoading,_=!v&&p,T=I.isSuccess||p&&v;return yr(qe({},I),{data:g,currentData:I.data,isFetching:p,isLoading:_,isSuccess:T})}function y(I,R){var O=i(),b=mn(R);return F.useCallback(function(d,g){return O(e.util.prefetch(I,d,qe(qe({},b),g)))},[I,O,b])}function f(I){var R=function(d,g){var v=g===void 0?{}:g,p=v.refetchOnReconnect,_=v.refetchOnFocus,T=v.refetchOnMountOrArgChange,S=v.skip,E=S===void 0?!1:S,A=v.pollingInterval,C=A===void 0?0:A,P=e.endpoints[I].initiate,N=i(),x=Pa(E?at:d,Ll,l.endpointDefinitions[I],I),B=mn({refetchOnReconnect:p,refetchOnFocus:_,pollingInterval:C}),U=F.useRef(!1),j=F.useRef(),W=j.current||{},G=W.queryCacheKey,z=W.requestId,J=!1;if(G&&z){var V=N(e.internalActions.internal_probeSubscription({queryCacheKey:G,requestId:z}));if(process.env.NODE_ENV!=="production"&&typeof V!="boolean")throw new Error('Warning: Middleware for RTK-Query API at reducerPath "'+e.reducerPath+`" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);J=!!V}var Y=!J&&U.current;return h(function(){U.current=J}),h(function(){Y&&(j.current=void 0)},[Y]),h(function(){var Q,X=j.current;if(typeof process<"u"&&process.env.NODE_ENV==="removeMeOnCompilation"&&console.log(Y),x===at){X==null||X.unsubscribe(),j.current=void 0;return}var ae=(Q=j.current)==null?void 0:Q.subscriptionOptions;if(!X||X.arg!==x){X==null||X.unsubscribe();var ve=N(P(x,{subscriptionOptions:B,forceRefetch:T}));j.current=ve}else B!==ae&&X.updateSubscriptionOptions(B)},[N,P,T,x,B,Y]),F.useEffect(function(){return function(){var Q;(Q=j.current)==null||Q.unsubscribe(),j.current=void 0}},[]),F.useMemo(function(){return{refetch:function(){var Q;if(!j.current)throw new Error("Cannot refetch a query that has not been started yet.");return(Q=j.current)==null?void 0:Q.refetch()}}},[])},O=function(d){var g=d===void 0?{}:d,v=g.refetchOnReconnect,p=g.refetchOnFocus,_=g.pollingInterval,T=_===void 0?0:_,S=e.endpoints[I].initiate,E=i(),A=F.useState(gn),C=A[0],P=A[1],N=F.useRef(),x=mn({refetchOnReconnect:v,refetchOnFocus:p,pollingInterval:T});h(function(){var j,W,G=(j=N.current)==null?void 0:j.subscriptionOptions;x!==G&&((W=N.current)==null||W.updateSubscriptionOptions(x))},[x]);var B=F.useRef(x);h(function(){B.current=x},[x]);var U=F.useCallback(function(j,W){W===void 0&&(W=!1);var G;return n(function(){var z;(z=N.current)==null||z.unsubscribe(),N.current=G=E(S(j,{subscriptionOptions:B.current,forceRefetch:!W})),P(j)}),G},[E,S]);return F.useEffect(function(){return function(){var j;(j=N==null?void 0:N.current)==null||j.unsubscribe()}},[]),F.useEffect(function(){C!==gn&&!N.current&&U(C,!0)},[C,U]),F.useMemo(function(){return[U,C]},[U,C])},b=function(d,g){var v=g===void 0?{}:g,p=v.skip,_=p===void 0?!1:p,T=v.selectFromResult,S=e.endpoints[I].select,E=Pa(_?at:d,o,l.endpointDefinitions[I],I),A=F.useRef(),C=F.useMemo(function(){return L.createSelector([S(E),function(U,j){return j},function(U){return E}],m)},[S,E]),P=F.useMemo(function(){return T?L.createSelector([C],T):C},[C,T]),N=a(function(U){return P(U,A.current)},Me.shallowEqual),x=s(),B=C(x.getState(),A.current);return Fl(function(){A.current=B},[B]),N};return{useQueryState:b,useQuerySubscription:R,useLazyQuerySubscription:O,useLazyQuery:function(d){var g=O(d),v=g[0],p=g[1],_=b(p,yr(qe({},d),{skip:p===gn})),T=F.useMemo(function(){return{lastArg:p}},[p]);return F.useMemo(function(){return[v,_,T]},[v,_,T])},useQuery:function(d,g){var v=R(d,g),p=b(d,qe({selectFromResult:d===at||g!=null&&g.skip?void 0:jl},g)),_=p.data,T=p.status,S=p.isLoading,E=p.isSuccess,A=p.isError,C=p.error;return F.useDebugValue({data:_,status:T,isLoading:S,isSuccess:E,isError:A,error:C}),F.useMemo(function(){return qe(qe({},p),v)},[p,v])}}}function w(I){return function(R){var O=R===void 0?{}:R,b=O.selectFromResult,d=b===void 0?Ul:b,g=O.fixedCacheKey,v=e.endpoints[I],p=v.select,_=v.initiate,T=i(),S=F.useState(),E=S[0],A=S[1];F.useEffect(function(){return function(){E!=null&&E.arg.fixedCacheKey||E==null||E.reset()}},[E]);var C=F.useCallback(function(X){var ae=T(_(X,{fixedCacheKey:g}));return A(ae),ae},[T,_,g]),P=(E||{}).requestId,N=F.useMemo(function(){return L.createSelector([p({fixedCacheKey:g,requestId:E==null?void 0:E.requestId})],d)},[p,E,d,g]),x=a(N,Me.shallowEqual),B=g==null?E==null?void 0:E.arg.originalArgs:void 0,U=F.useCallback(function(){n(function(){E&&A(void 0),g&&T(e.internalActions.removeMutationResult({requestId:P,fixedCacheKey:g}))})},[T,g,E,P]),j=x.endpointName,W=x.data,G=x.status,z=x.isLoading,J=x.isSuccess,V=x.isError,Y=x.error;F.useDebugValue({endpointName:j,data:W,status:G,isLoading:z,isSuccess:J,isError:V,error:Y});var Q=F.useMemo(function(){return yr(qe({},x),{originalArgs:B,reset:U})},[x,B,U]);return F.useMemo(function(){return[C,Q]},[C,Q])}}}var _r;(function(t){t.query="query",t.mutation="mutation"})(_r||(_r={}));function ql(t){return t.type===_r.query}function Hl(t){return t.type===_r.mutation}function yn(t){return t.replace(t[0],t[0].toUpperCase())}function Ir(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];Object.assign.apply(Object,Pl([t],e))}var Vl=Symbol(),Wl=function(t){var e=t===void 0?{}:t,r=e.batch,n=r===void 0?Me.batch:r,i=e.useDispatch,a=i===void 0?Me.useDispatch:i,s=e.useSelector,u=s===void 0?Me.useSelector:s,o=e.useStore,l=o===void 0?Me.useStore:o,h=e.unstable__sideEffectsInRender,m=h===void 0?!1:h;return{name:Vl,init:function(y,f,w){var I=f.serializeQueryArgs,R=y,O=Bl({api:y,moduleOptions:{batch:n,useDispatch:a,useSelector:u,useStore:l,unstable__sideEffectsInRender:m},serializeQueryArgs:I,context:w}),b=O.buildQueryHooks,d=O.buildMutationHook,g=O.usePrefetch;return Ir(R,{usePrefetch:g}),Ir(w,{batch:n}),{injectEndpoint:function(v,p){if(ql(p)){var _=b(v),T=_.useQuery,S=_.useLazyQuery,E=_.useLazyQuerySubscription,A=_.useQueryState,C=_.useQuerySubscription;Ir(R.endpoints[v],{useQuery:T,useLazyQuery:S,useLazyQuerySubscription:E,useQueryState:A,useQuerySubscription:C}),y["use"+yn(v)+"Query"]=T,y["useLazy"+yn(v)+"Query"]=S}else if(Hl(p)){var P=d(v);Ir(R.endpoints[v],{useMutation:P}),y["use"+yn(v)+"Mutation"]=P}}}}}},zl=gl(Cl(),Wl());const st=zl({baseQuery:cl({baseUrl:ee.endpoint,prepareHeaders:(t,{getState:e,endpoint:r})=>{const{isAuthenticated:n,refresh_token:i}=e().userReducer;return n&&i&&r==="updateLogin"&&t.set(ee.refreshTokenHeader,ee.keywordRefreshTokenHeader?`${ee.keywordRefreshTokenHeader} ${i}`:i),t.set("Content-Type","application/json")}}),endpoints:t=>({login:t.mutation({query({email:e,encodedBody:r,password:n,username:i,token:a}){if(a)return{url:"",method:"POST",headers:{Authorization:`${ee.keyword} ${a}`}};if(r)return{url:ee.urlLoginForBase64??"",method:"POST",headers:{authorization:"Basic "+r}};let s={};return n&&(s={...s,password:n}),e&&(s={...s,email:e}),i&&(s={...s,username:i}),{url:ee.urlLoginForEmailOrUser??"",method:"POST",body:s}}}),signIn:t.mutation({query({body:e,encodedBody:r}){return r?{url:ee.urlSignInForBase64??"sign-in",method:"POST",body:e}:{url:ee.urlSignIn??"sign-in",method:"POST",body:e}}}),updateLogin:t.mutation({query(){return{url:ee.urlForRefreshToken??"login/update",method:"PUT"}}}),passwordReset:t.mutation({query(e){return{url:ee.urlForPasswordReset??"reset-password",method:"POST",body:e}}})})}),{useLoginMutation:Ql,useUpdateLoginMutation:Kl,usePasswordResetMutation:Gl,useSignInMutation:$l}=st,ka=(t,e)=>{var r;return((r=t.find(n=>n.code==="*"?!0:n.code===e.code))==null?void 0:r.message)??e.message},Da="IS_GOOGLE",Na="IS_FACEBOOK",Ma="IS_TWITTER",xa="IS_GITHUB",La="IS_MICROSOFT",Jl=()=>D.jsx("svg",{width:"98",height:"96",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 98 96",children:D.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",fill:"#fff"})}),Yl=()=>D.jsx("svg",{version:"1.1",id:"Logo",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 248 204",xmlSpace:"preserve",children:D.jsx("g",{id:"Logo_1_",children:D.jsx("path",{id:"white_background",fill:"#FFFFFF",d:`M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
                    C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
                    c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
                    c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
                    c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
                    c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z`})})}),Xl=()=>D.jsxs("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 40 40",xmlSpace:"preserve",children:[D.jsx("path",{fill:"#1877F2",d:"M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z"}),D.jsx("path",{fill:"#FFFFFF",d:`M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20
            h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z`})]}),Zl=[{method:"google",constName:Da,name:"Google",className:"google-btn"},{method:"facebook",constName:Na,name:"Facebook",className:"facebook-btn",icon:D.jsx(Xl,{})},{method:"twitter",constName:Ma,name:"Twitter",className:"twitter-btn",icon:D.jsx(Yl,{})},{method:"github",constName:xa,name:"GitHub",className:"github-btn",icon:D.jsx(Jl,{})},{method:"microsoft",constName:La,name:"Microsoft",className:"microsoft-btn"}],ed=t=>Zl.filter(e=>t.find(r=>e.method===r)),td={es:{logIn:"Iniciar sesión",username:"Usuario",password:"Contraseña",confirm_password:"Confirmar contraseña",continue:"Continuar",submit:"Enviar",continueAs:"Continuar como:",loggedWith:"Logueado con",logOut:"Desloguearse",forgotPassword:"Recuperar contraseña",forgotPasswordLabel:"Enviaremos instrucciones para restablecer la contraseña al correo electrónico introducido.",signIn:"Crear cuenta",passwordNotMatch:"Las contraseñas no coinciden",minLength:"La contraseña debe contener mínimo 8 caracteres"},en:{logIn:"Log In",username:"Username",password:"Password",confirm_password:"Confirm Password",continue:"Continue",submit:"Submit",continueAs:"Continue as:",loggedWith:"Logged with",logOut:"Log Out",forgotPassword:"Password Recovery",forgotPasswordLabel:"We will send instructions to reset the password to the entered email.",signIn:"Create account",passwordNotMatch:"Passwords do not match",minLength:"Passwords should contain a minimum of 8 characters"}},rd=t=>td[t],Vd="",nd=({children:t,title:e,isLoading:r,scrollPosition:n,language:i})=>{const a=he.useSignal(""),s=he.useSignal({}),[u,{data:o,isSuccess:l,isError:h,isLoading:m,error:y}]=Gl(),{closeAction:f,isOpen:w,message:I}=F.useContext(Tr),R=F.useRef(null),O=b=>{b.preventDefault(),!l&&u({email:a.value})};return F.useEffect(()=>{R.current&&(w?R.current.showModal():R.current.close())},[w]),F.useEffect(()=>{if(R.current){const b=R.current.offsetWidth;R.current.scrollTo(n.value?b:0,0)}},[n.value]),F.useEffect(()=>{y&&("data"in y?s.value={code:"auth/password-reset-error",message:y.data&&(Object.values(y.data).find(b=>typeof b=="string")??y.data)}:"status"in y&&(s.value={code:"auth/fetch-failed",message:"error"in y?y.error:"Unexpected Error"}))},[y]),D.jsxs("dialog",{ref:R,className:"modal-container mandatory-scroll-snapping",children:[D.jsxs("section",{className:"modal-data",children:[f&&D.jsx("button",{onClick:()=>typeof f=="function"?f(b=>!b):f.value=!f.value,className:"modal-close",children:"X"}),D.jsx("header",{className:"modal-title",children:D.jsx("label",{children:e})}),D.jsx("main",{className:"modal-message",children:r?D.jsx(Fa,{}):typeof I=="string"?D.jsx("p",{children:I}):I}),D.jsx("footer",{className:"modal-footer",children:t})]}),D.jsxs("section",{className:"password-recovery",children:[D.jsx("span",{className:"go-back",onClick:()=>n.value=!1,children:"<"}),D.jsxs("form",{onSubmit:O,children:[D.jsx("h3",{children:i.forgotPasswordLabel}),D.jsxs("label",{children:["Email:",D.jsx("input",{required:!0,onChange:b=>a.value=b.currentTarget.value,value:a.value,type:"email"})]}),D.jsx("button",{className:"is-btn blue",children:i.submit})]}),s.value.message&&D.jsx("span",{className:"notify error",children:ee.firebaseErrorMessages?ka(ee.firebaseErrorMessages,s.value):s.value.message}),l&&D.jsx("span",{className:"notify success",children:i.forgotPasswordLabel}),m&&D.jsx(Fa,{})]})]})},Wd="",Fa=()=>D.jsx("div",{className:"loader-container",children:D.jsxs("div",{className:"loader-box",children:[D.jsx("div",{className:"load blue"}),D.jsx("div",{className:"load red"}),D.jsx("div",{className:"load orange"}),D.jsx("div",{className:"load yellow"}),D.jsx("div",{className:"load green"})]})}),zd="",id=()=>{const t=he.useSignal(void 0),e=he.useSignal(void 0),r=he.useSignal(void 0);let n=F.useRef(void 0);const i=F.useCallback(a=>a(t,n,e,r),[]);return F.useEffect(()=>()=>{n.current&&clearInterval(n.current)},[]),{user:t.value,updateError:e.value,logOut:r.value,authManager:i}};var yt=(t=>(t.LOGIN="login",t.SIGN_IN="signIn",t))(yt||{});const ad=t=>Lt(Ge(),Qi).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),sd=t=>Lt(Ge(),zi).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),od=t=>Lt(Ge(),kc).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),ud=t=>Lt(Ge(),Dc).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),cd=t=>Lt(Ge(),Nc).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),ld=1e3,dd=5e3,fd={login:{email:"",password:"",username:""},signIn:{email:"",username:"",password:"",confirmPassword:""}},hd=(t,e)=>{let r="";const{password:n,confirmPassword:i}=t;return n.length>0&&n.length<8?r=e.minLength:i.length>0&&i!==n&&(r=e.passwordNotMatch),r},pd=(t,e,r)=>{const[n]=Ql(),[i]=$l(),[a]=Kl(),s=he.useSignal(fd),u=he.useSignal(!1),o=he.useSignal(!1),l=he.useSignal(!1),h=he.useSignal({}),m=()=>{he.batch(()=>{u.value=!u.value,o.value&&(o.value=!o.value)})},y=O=>{const{target:b}=O,d=b.getAttribute("data-section")??yt.LOGIN;if(s.value={...s.value,[d]:{...s.value[d],[b.name]:b.value}},d===yt.SIGN_IN){const g=hd(s.value[d],r);g?h.value={code:"sign-in/password",message:g}:h.value={}}},f=O=>{if(O.preventDefault(),ee.hasToS&&!u.value){o.value=!0;return}if(l.value)return;l.value=!0;const b=O.currentTarget.getAttribute("data-section")??yt.LOGIN;let d={};if(b===yt.LOGIN){if(ee.acceptUsername?d={username:s.value[b].username,password:s.value[b].password}:d={email:s.value[b].email,password:s.value[b].password},ee.bodyAsBase64){const g=Object.entries(d).map(([p,_])=>`${p}=${_}`).join("&");d={encodedBody:btoa(g)}}n(d).unwrap().then(w).catch(g=>{"data"in g?h.value={code:"auth/firebase-credential-not-provided",message:g.data&&(Object.values(g.data).find(v=>typeof v=="string")??g.data)}:"status"in g&&(h.value={code:"auth/fetch-failed",message:"error"in g?g.error:"Unexpected Error"})})}else if(b===yt.SIGN_IN){let g=s.value[b];if(ee.bodyAsBase64){const v=Object.entries(g).map(([p,_])=>`${p}=${_}`).join("&");g=btoa(v)}i({body:g,encodedBody:ee.bodyAsBase64}).unwrap().then(w).catch(v=>{"data"in v?h.value={code:"auth/firebase-credential-not-provided",message:v.data&&(Object.values(v.data).find(p=>typeof p=="string")??v.data)}:"status"in v&&(h.value={code:"auth/fetch-failed",message:"error"in v?v.error:"Unexpected Error"})})}l.value=!1},w=O=>{t(async(b,d,g,v)=>{clearInterval(d.current),d.current=void 0,d.current=setInterval(()=>{a().unwrap().then(p=>b.value=p).catch(p=>{b.value=void 0,clearInterval(d.current),"data"in p?g.value={code:"auth/firebase-credential-not-provided",message:p.data&&(Object.values(p.data).find(_=>typeof _=="string")??p.data)}:"status"in p&&(g.value={code:"auth/fetch-failed",message:"error"in p?p.error:"Unexpected Error"})})},O.expiry*ld-dd),b.value=O,v.value=async()=>{await Ei(Ge()).finally(()=>clearInterval(d.current)),v.value=void 0}}),typeof e=="function"?e(b=>!b):e.value=!e.value},I=async O=>{n({token:O}).unwrap().then(w).catch(b=>{"data"in b?h.value={code:"auth/firebase-credential-not-provided",message:b.data&&(Object.values(b.data).find(d=>typeof d=="string")??b.data)}:"status"in b&&(h.value={code:"auth/fetch-failed",message:"error"in b?b.error:"Unexpected Error"})})};return{form:s,radio:u,isLoading:l,handleError:h,confirmTp:o,handleChange:y,handleRadio:m,handleSocialLogin:async(O,b)=>{if(O.preventDefault(),ee.hasToS&&!u.value){o.value=!0;return}if(!l.value){switch(l.value=!0,b){case Da:await sd(h).then(async d=>{d&&(Oe.credentialFromResult(d)===null&&(h.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),d.user.getIdToken().then(I))});break;case Na:await ad(h).then(async d=>{d&&(Re.credentialFromResult(d)===null&&(h.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),d.user.getIdToken().then(I))});break;case Ma:await od(h).then(async d=>{d&&(Ce.credentialFromResult(d)===null&&(h.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),d.user.getIdToken().then(I))});break;case xa:await ud(h).then(async d=>{d&&(Ae.credentialFromResult(d)===null&&(h.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),d.user.getIdToken().then(I))});break;case La:await cd(h).then(async d=>{d&&(pt.credentialFromResult(d)===null&&(h.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),d.user.getIdToken().then(I))});break}l.value=!1}},handleSubmit:f,handleToken:I}},vd=()=>{const{closeAction:t,authManager:e,isOpen:r}=F.useContext(Tr),n=rd(ee.language),{form:i,radio:a,confirmTp:s,isLoading:u,handleError:o,handleSubmit:l,handleChange:h,handleRadio:m,handleSocialLogin:y,handleToken:f}=pd(e,t,n),w=he.useSignal(!1),I=he.useSignal(void 0);return F.useEffect(()=>{r||(o.value={})},[r]),F.useEffect(()=>{r&&(async()=>{u.value=!0;let O=vu(Ge(),async b=>{b&&await b.getIdToken().then(d=>{const g=b.providerData[0];I.value={...g,providerId:g.providerId.split(".")[0],tokenId:d}}).finally(()=>u.value=!1),u.value=!1,O()})})()},[r]),F.useEffect(()=>{},[]),D.jsx(nd,{title:n.logIn,isLoading:u.value,scrollPosition:w,language:n,children:D.jsxs("div",{className:"login-container",children:[D.jsxs("div",{className:"login",children:[D.jsx(gd,{handleSocialLogin:y}),D.jsx(md,{forgotPassword:w,form:i,handleChange:h,handleSubmit:l,language:n})]}),o.value.message&&D.jsx("span",{autoFocus:!0,className:"notify error",children:ee.firebaseErrorMessages?ka(ee.firebaseErrorMessages,o.value):o.value.message}),D.jsx(yd,{alreadyUser:I,language:n,handleToken:f}),D.jsx(bd,{confirmTp:s.value,handleRadio:m,radioValue:a.value})]})})},gd=({handleSocialLogin:t})=>D.jsx("div",{children:ed(ee.signInMethods).map(({className:e,name:r,constName:n,icon:i},a)=>D.jsxs("button",{onClick:s=>t(s,n),className:e,children:[i&&i,r]},a))}),md=({handleSubmit:t,language:e,handleChange:r,form:n,forgotPassword:i})=>{const a=he.useSignal(!0),s=F.useRef(null);return F.useEffect(()=>{if(s.current){const u=s.current.offsetWidth;s.current.scrollTo(a.value?0:u,0)}},[a.value]),D.jsx("div",{children:D.jsxs("section",{ref:s,className:"form-email mandatory-scroll-snapping",children:[D.jsxs("form",{className:"form-field",autoComplete:"on","data-section":"login",onSubmit:t,children:[ee.acceptUsername?D.jsx(D.Fragment,{children:D.jsx("input",{required:!0,"data-section":"login",autoComplete:"username",placeholder:`Email | ${e.username}`,name:"username",onChange:r,value:n.value.login.username,type:"text"})}):D.jsx(D.Fragment,{children:D.jsx("input",{required:!0,"data-section":"login",autoComplete:"email",placeholder:"Email",name:"email",onChange:r,value:n.value.login.email,type:"email"})}),D.jsx("input",{required:!0,"data-section":"login",autoComplete:"current-password",placeholder:e.password,name:"password",onChange:r,value:n.value.login.password,type:"password"}),D.jsx("span",{onClick:()=>i.value=!0,className:"forgot-password",children:e.forgotPassword}),D.jsx("button",{className:"email-login",children:e.logIn}),D.jsx("span",{onClick:()=>a.value=!1,className:"form-action-change",children:e.signIn})]}),D.jsxs("form",{className:"form-field",autoComplete:"on","data-section":"signIn",onSubmit:t,children:[D.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:"Email",name:"username",onChange:r,value:n.value.signIn.username,type:"email"}),D.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:`${e.username}`,name:"email",onChange:r,value:n.value.signIn.email,type:"text"}),D.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:e.password,name:"password",onChange:r,value:n.value.signIn.password,type:"password"}),D.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:e.confirm_password,name:"confirmPassword",onChange:r,value:n.value.signIn.confirmPassword,type:"password"}),D.jsx("button",{className:"email-login",children:e.signIn}),D.jsx("span",{onClick:()=>a.value=!0,className:"form-action-change",children:e.logIn})]})]})})},yd=({alreadyUser:t,language:e,handleToken:r})=>{const n=()=>{Ei(Ge()).finally(()=>t.value=void 0)};return D.jsx(D.Fragment,{children:t.value&&D.jsxs("section",{className:"user-already-logged",children:[D.jsxs("p",{children:[e.continueAs," ",t.value.displayName,t.value.photoURL&&D.jsx("img",{src:t.value.photoURL,alt:"user image"}),D.jsxs("span",{children:[e.loggedWith," ",t.value.providerId]})]}),D.jsxs("div",{className:"user-logged-choice",children:[D.jsx("button",{onClick:()=>{var i;return r(((i=t.value)==null?void 0:i.tokenId)??"")},className:"choice-ok",children:"Ok"}),D.jsx("button",{onClick:n,className:"choice-not",children:e.logOut})]})]})})},bd=({confirmTp:t,handleRadio:e,radioValue:r})=>{const n=F.useRef(null);return F.useEffect(()=>{t&&n.current&&n.current.scrollIntoView({behavior:"smooth"})},[t]),D.jsx("section",{children:ee.hasToS&&D.jsxs(D.Fragment,{children:[D.jsxs("label",{className:"login-accept",children:[D.jsx("input",{onChange:e,type:"checkbox",checked:r}),ee.hasToS.label]}),t&&D.jsx("span",{ref:n,className:"notify error",children:ee.hasToS.errorLabel})]})})},Ua={user:null,isAuthenticated:!1,expiry:void 0,refresh_token:void 0,token:void 0},_d=L.createSlice({name:"UserSlice",initialState:Ua,reducers:{},extraReducers(t){t.addMatcher(st.endpoints.login.matchFulfilled,(e,r)=>(e={...r.payload,isAuthenticated:!0},e)).addMatcher(st.endpoints.updateLogin.matchFulfilled,(e,r)=>(e={...r.payload,isAuthenticated:!0},e)).addMatcher(st.endpoints.updateLogin.matchRejected,e=>(e=Ua,e))}}),{reducer:Id}=_d,wd=L.combineReducers({userReducer:Id,[st.reducerPath]:st.reducer}),Ed=L.configureStore({reducer:wd,middleware:t=>t().concat(st.middleware)}),Td=({isOpen:t,closeAction:e,message:r,authManager:n})=>Pc()?D.jsx(Me.Provider,{store:Ed,children:D.jsx(Tr.Provider,{value:{isOpen:t,closeAction:e,message:r,authManager:n},children:D.jsx(vd,{})})}):D.jsx("dialog",{open:!0,children:D.jsx("p",{children:"Error: Missing firebaseConfig in setConfig"})});be.Auth=Td,be.setConfig=Cc,be.useAuth=id,Object.defineProperty(be,Symbol.toStringTag,{value:"Module"})});
