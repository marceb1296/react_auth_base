(function(be,F){typeof exports=="object"&&typeof module<"u"?F(exports,require("react"),require("@preact/signals-react"),require("@reduxjs/toolkit"),require("react-redux")):typeof define=="function"&&define.amd?define(["exports","react","@preact/signals-react","@reduxjs/toolkit","react-redux"],F):(be=typeof globalThis<"u"?globalThis:be||self,F(be.react_auth_base={},be.React,be.SignalsReact,be.ReduxToolkit,be.ReactRedux))})(this,function(be,F,fe,L,Me){"use strict";var Er={exports:{}},wt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var En;function Qa(){if(En)return wt;En=1;var t=F,e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(u,o,l){var g,f={},b=null,v=null;l!==void 0&&(b=""+l),o.key!==void 0&&(b=""+o.key),o.ref!==void 0&&(v=o.ref);for(g in o)n.call(o,g)&&!a.hasOwnProperty(g)&&(f[g]=o[g]);if(u&&u.defaultProps)for(g in o=u.defaultProps,o)f[g]===void 0&&(f[g]=o[g]);return{$$typeof:e,type:u,key:b,ref:v,props:f,_owner:i.current}}return wt.Fragment=r,wt.jsx=s,wt.jsxs=s,wt}var St={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tn;function Ka(){return Tn||(Tn=1,process.env.NODE_ENV!=="production"&&function(){var t=F,e=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),o=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen"),I=Symbol.iterator,S="@@iterator";function E(c){if(c===null||typeof c!="object")return null;var D=I&&c[I]||c[S];return typeof D=="function"?D:null}var O=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function T(c){{for(var D=arguments.length,M=new Array(D>1?D-1:0),V=1;V<D;V++)M[V-1]=arguments[V];w("error",c,M)}}function w(c,D,M){{var V=O.ReactDebugCurrentFrame,Z=V.getStackAddendum();Z!==""&&(D+="%s",M=M.concat([Z]));var re=M.map(function($){return String($)});re.unshift("Warning: "+D),Function.prototype.apply.call(console[c],console,re)}}var d=!1,p=!1,h=!1,y=!1,m=!1,R;R=Symbol.for("react.module.reference");function _(c){return!!(typeof c=="string"||typeof c=="function"||c===n||c===a||m||c===i||c===l||c===g||y||c===v||d||p||h||typeof c=="object"&&c!==null&&(c.$$typeof===b||c.$$typeof===f||c.$$typeof===s||c.$$typeof===u||c.$$typeof===o||c.$$typeof===R||c.getModuleId!==void 0))}function P(c,D,M){var V=c.displayName;if(V)return V;var Z=D.displayName||D.name||"";return Z!==""?M+"("+Z+")":M}function C(c){return c.displayName||"Context"}function A(c){if(c==null)return null;if(typeof c.tag=="number"&&T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof c=="function")return c.displayName||c.name||null;if(typeof c=="string")return c;switch(c){case n:return"Fragment";case r:return"Portal";case a:return"Profiler";case i:return"StrictMode";case l:return"Suspense";case g:return"SuspenseList"}if(typeof c=="object")switch(c.$$typeof){case u:var D=c;return C(D)+".Consumer";case s:var M=c;return C(M._context)+".Provider";case o:return P(c,c.render,"ForwardRef");case f:var V=c.displayName||null;return V!==null?V:A(c.type)||"Memo";case b:{var Z=c,re=Z._payload,$=Z._init;try{return A($(re))}catch{return null}}}return null}var N=Object.assign,x=0,B,U,j,K,W,z,J;function H(){}H.__reactDisabledLog=!0;function Y(){{if(x===0){B=console.log,U=console.info,j=console.warn,K=console.error,W=console.group,z=console.groupCollapsed,J=console.groupEnd;var c={configurable:!0,enumerable:!0,value:H,writable:!0};Object.defineProperties(console,{info:c,log:c,warn:c,error:c,group:c,groupCollapsed:c,groupEnd:c})}x++}}function Q(){{if(x--,x===0){var c={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:N({},c,{value:B}),info:N({},c,{value:U}),warn:N({},c,{value:j}),error:N({},c,{value:K}),group:N({},c,{value:W}),groupCollapsed:N({},c,{value:z}),groupEnd:N({},c,{value:J})})}x<0&&T("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var X=O.ReactCurrentDispatcher,ae;function ve(c,D,M){{if(ae===void 0)try{throw Error()}catch(Z){var V=Z.stack.trim().match(/\n( *(at )?)/);ae=V&&V[1]||""}return`
`+ae+c}}var _e=!1,Ie;{var ye=typeof WeakMap=="function"?WeakMap:Map;Ie=new ye}function de(c,D){if(!c||_e)return"";{var M=Ie.get(c);if(M!==void 0)return M}var V;_e=!0;var Z=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var re;re=X.current,X.current=null,Y();try{if(D){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(He){V=He}Reflect.construct(c,[],$)}else{try{$.call()}catch(He){V=He}c.call($.prototype)}}else{try{throw Error()}catch(He){V=He}c()}}catch(He){if(He&&V&&typeof He.stack=="string"){for(var G=He.stack.split(`
`),he=V.stack.split(`
`),ue=G.length-1,ce=he.length-1;ue>=1&&ce>=0&&G[ue]!==he[ce];)ce--;for(;ue>=1&&ce>=0;ue--,ce--)if(G[ue]!==he[ce]){if(ue!==1||ce!==1)do if(ue--,ce--,ce<0||G[ue]!==he[ce]){var Se=`
`+G[ue].replace(" at new "," at ");return c.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",c.displayName)),typeof c=="function"&&Ie.set(c,Se),Se}while(ue>=1&&ce>=0);break}}}finally{_e=!1,X.current=re,Q(),Error.prepareStackTrace=Z}var It=c?c.displayName||c.name:"",za=It?ve(It):"";return typeof c=="function"&&Ie.set(c,za),za}function ne(c,D,M){return de(c,!1)}function xe(c){var D=c.prototype;return!!(D&&D.isReactComponent)}function ot(c,D,M){if(c==null)return"";if(typeof c=="function")return de(c,xe(c));if(typeof c=="string")return ve(c);switch(c){case l:return ve("Suspense");case g:return ve("SuspenseList")}if(typeof c=="object")switch(c.$$typeof){case o:return ne(c.render);case f:return ot(c.type,D,M);case b:{var V=c,Z=V._payload,re=V._init;try{return ot(re(Z),D,M)}catch{}}}return""}var Xe=Object.prototype.hasOwnProperty,ut={},bt=O.ReactDebugCurrentFrame;function Ze(c){if(c){var D=c._owner,M=ot(c.type,c._source,D?D.type:null);bt.setExtraStackFrame(M)}else bt.setExtraStackFrame(null)}function Sr(c,D,M,V,Z){{var re=Function.call.bind(Xe);for(var $ in c)if(re(c,$)){var G=void 0;try{if(typeof c[$]!="function"){var he=Error((V||"React class")+": "+M+" type `"+$+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof c[$]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw he.name="Invariant Violation",he}G=c[$](D,$,V,M,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(ue){G=ue}G&&!(G instanceof Error)&&(Ze(Z),T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",V||"React class",M,$,typeof G),Ze(null)),G instanceof Error&&!(G.message in ut)&&(ut[G.message]=!0,Ze(Z),T("Failed %s type: %s",M,G.message),Ze(null))}}}var we=Array.isArray;function ge(c){return we(c)}function Sd(c){{var D=typeof Symbol=="function"&&Symbol.toStringTag,M=D&&c[Symbol.toStringTag]||c.constructor.name||"Object";return M}}function Ed(c){try{return Ma(c),!1}catch{return!0}}function Ma(c){return""+c}function La(c){if(Ed(c))return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Sd(c)),Ma(c)}var Vt=O.ReactCurrentOwner,Td={key:!0,ref:!0,__self:!0,__source:!0},Fa,Ua,_n;_n={};function Od(c){if(Xe.call(c,"ref")){var D=Object.getOwnPropertyDescriptor(c,"ref").get;if(D&&D.isReactWarning)return!1}return c.ref!==void 0}function Rd(c){if(Xe.call(c,"key")){var D=Object.getOwnPropertyDescriptor(c,"key").get;if(D&&D.isReactWarning)return!1}return c.key!==void 0}function Pd(c,D){if(typeof c.ref=="string"&&Vt.current&&D&&Vt.current.stateNode!==D){var M=A(Vt.current.type);_n[M]||(T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',A(Vt.current.type),c.ref),_n[M]=!0)}}function Ad(c,D){{var M=function(){Fa||(Fa=!0,T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",D))};M.isReactWarning=!0,Object.defineProperty(c,"key",{get:M,configurable:!0})}}function Cd(c,D){{var M=function(){Ua||(Ua=!0,T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",D))};M.isReactWarning=!0,Object.defineProperty(c,"ref",{get:M,configurable:!0})}}var kd=function(c,D,M,V,Z,re,$){var G={$$typeof:e,type:c,key:D,ref:M,props:$,_owner:re};return G._store={},Object.defineProperty(G._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(G,"_self",{configurable:!1,enumerable:!1,writable:!1,value:V}),Object.defineProperty(G,"_source",{configurable:!1,enumerable:!1,writable:!1,value:Z}),Object.freeze&&(Object.freeze(G.props),Object.freeze(G)),G};function Dd(c,D,M,V,Z){{var re,$={},G=null,he=null;M!==void 0&&(La(M),G=""+M),Rd(D)&&(La(D.key),G=""+D.key),Od(D)&&(he=D.ref,Pd(D,Z));for(re in D)Xe.call(D,re)&&!Td.hasOwnProperty(re)&&($[re]=D[re]);if(c&&c.defaultProps){var ue=c.defaultProps;for(re in ue)$[re]===void 0&&($[re]=ue[re])}if(G||he){var ce=typeof c=="function"?c.displayName||c.name||"Unknown":c;G&&Ad($,ce),he&&Cd($,ce)}return kd(c,G,he,Z,V,Vt.current,$)}}var In=O.ReactCurrentOwner,ja=O.ReactDebugCurrentFrame;function _t(c){if(c){var D=c._owner,M=ot(c.type,c._source,D?D.type:null);ja.setExtraStackFrame(M)}else ja.setExtraStackFrame(null)}var wn;wn=!1;function Sn(c){return typeof c=="object"&&c!==null&&c.$$typeof===e}function Ba(){{if(In.current){var c=A(In.current.type);if(c)return`

Check the render method of \``+c+"`."}return""}}function Nd(c){{if(c!==void 0){var D=c.fileName.replace(/^.*[\\\/]/,""),M=c.lineNumber;return`

Check your code at `+D+":"+M+"."}return""}}var qa={};function xd(c){{var D=Ba();if(!D){var M=typeof c=="string"?c:c.displayName||c.name;M&&(D=`

Check the top-level render call using <`+M+">.")}return D}}function Va(c,D){{if(!c._store||c._store.validated||c.key!=null)return;c._store.validated=!0;var M=xd(D);if(qa[M])return;qa[M]=!0;var V="";c&&c._owner&&c._owner!==In.current&&(V=" It was passed a child from "+A(c._owner.type)+"."),_t(c),T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',M,V),_t(null)}}function Ha(c,D){{if(typeof c!="object")return;if(ge(c))for(var M=0;M<c.length;M++){var V=c[M];Sn(V)&&Va(V,D)}else if(Sn(c))c._store&&(c._store.validated=!0);else if(c){var Z=E(c);if(typeof Z=="function"&&Z!==c.entries)for(var re=Z.call(c),$;!($=re.next()).done;)Sn($.value)&&Va($.value,D)}}}function Md(c){{var D=c.type;if(D==null||typeof D=="string")return;var M;if(typeof D=="function")M=D.propTypes;else if(typeof D=="object"&&(D.$$typeof===o||D.$$typeof===f))M=D.propTypes;else return;if(M){var V=A(D);Sr(M,c.props,"prop",V,c)}else if(D.PropTypes!==void 0&&!wn){wn=!0;var Z=A(D);T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",Z||"Unknown")}typeof D.getDefaultProps=="function"&&!D.getDefaultProps.isReactClassApproved&&T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ld(c){{for(var D=Object.keys(c.props),M=0;M<D.length;M++){var V=D[M];if(V!=="children"&&V!=="key"){_t(c),T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",V),_t(null);break}}c.ref!==null&&(_t(c),T("Invalid attribute `ref` supplied to `React.Fragment`."),_t(null))}}function Wa(c,D,M,V,Z,re){{var $=_(c);if(!$){var G="";(c===void 0||typeof c=="object"&&c!==null&&Object.keys(c).length===0)&&(G+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var he=Nd(Z);he?G+=he:G+=Ba();var ue;c===null?ue="null":ge(c)?ue="array":c!==void 0&&c.$$typeof===e?(ue="<"+(A(c.type)||"Unknown")+" />",G=" Did you accidentally export a JSX literal instead of a component?"):ue=typeof c,T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",ue,G)}var ce=Dd(c,D,M,Z,re);if(ce==null)return ce;if($){var Se=D.children;if(Se!==void 0)if(V)if(ge(Se)){for(var It=0;It<Se.length;It++)Ha(Se[It],c);Object.freeze&&Object.freeze(Se)}else T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ha(Se,c)}return c===n?Ld(ce):Md(ce),ce}}function Fd(c,D,M){return Wa(c,D,M,!0)}function Ud(c,D,M){return Wa(c,D,M,!1)}var jd=Ud,Bd=Fd;St.Fragment=n,St.jsx=jd,St.jsxs=Bd}()),St}process.env.NODE_ENV==="production"?Er.exports=Qa():Er.exports=Ka();var k=Er.exports;const Ht=F.createContext({});/**
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
 */const On=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},Ga=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[r++];e[n++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[r++],s=t[r++],u=t[r++],o=((i&7)<<18|(a&63)<<12|(s&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(o>>10)),e[n++]=String.fromCharCode(56320+(o&1023))}else{const a=t[r++],s=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(a&63)<<6|s&63)}}return e.join("")},Rn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const a=t[i],s=i+1<t.length,u=s?t[i+1]:0,o=i+2<t.length,l=o?t[i+2]:0,g=a>>2,f=(a&3)<<4|u>>4;let b=(u&15)<<2|l>>6,v=l&63;o||(v=64,s||(b=64)),n.push(r[g],r[f],r[b],r[v])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(On(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ga(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const a=r[t.charAt(i++)],u=i<t.length?r[t.charAt(i)]:0;++i;const l=i<t.length?r[t.charAt(i)]:64;++i;const f=i<t.length?r[t.charAt(i)]:64;if(++i,a==null||u==null||l==null||f==null)throw new $a;const b=a<<2|u>>4;if(n.push(b),l!==64){const v=u<<4&240|l>>2;if(n.push(v),f!==64){const I=l<<6&192|f;n.push(I)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ja=function(t){const e=On(t);return Rn.encodeByteArray(e,!0)},Pn=function(t){return Ja(t).replace(/\./g,"")},An=function(t){try{return Rn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ya(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xa=()=>Ya().__FIREBASE_DEFAULTS__,Za=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},es=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&An(t[1]);return e&&JSON.parse(e)},Tr=()=>{try{return Xa()||Za()||es()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ts=t=>{var e,r;return(r=(e=Tr())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},Cn=()=>{var t;return(t=Tr())===null||t===void 0?void 0:t.config},kn=t=>{var e;return(e=Tr())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class rs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ns(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function is(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function as(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ss(){const t=le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function os(){try{return typeof indexedDB=="object"}catch{return!1}}function us(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(r){e(r)}})}/**
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
 */const cs="FirebaseError";class We extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=cs,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Et.prototype.create)}}class Et{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,a=this.errors[e],s=a?ls(a,n):"Error",u=`${this.serviceName}: ${s} (${i}).`;return new We(i,u,n)}}function ls(t,e){return t.replace(ds,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const ds=/\{\$([^}]+)}/g;function fs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wt(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const a=t[i],s=e[i];if(Dn(a)&&Dn(s)){if(!Wt(a,s))return!1}else if(a!==s)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function Dn(t){return t!==null&&typeof t=="object"}/**
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
 */function Tt(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function hs(t,e){const r=new ps(t,e);return r.subscribe.bind(r)}class ps{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");vs(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=Or),i.error===void 0&&(i.error=Or),i.complete===void 0&&(i.complete=Or);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vs(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function Or(){}/**
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
 */function ze(t){return t&&t._delegate?t._delegate:t}class ct{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class gs{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new rs;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ys(e))try{this.getOrInitializeService({instanceIdentifier:et})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const a=this.getOrInitializeService({instanceIdentifier:i});n.resolve(a)}catch{}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[a,s]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);n===u&&s.resolve(i)}return i}onInit(e,r){var n;const i=this.normalizeInstanceIdentifier(r),a=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;a.add(e),this.onInitCallbacks.set(i,a);const s=this.instances.get(i);return s&&e(s,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ms(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ms(t){return t===et?void 0:t}function ys(t){return t.instantiationMode==="EAGER"}/**
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
 */class bs{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new gs(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const _s={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Is=te.INFO,ws={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Ss=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=ws[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nn{constructor(e){this.name=e,this._logLevel=Is,this._logHandler=Ss,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Es=(t,e)=>e.some(r=>t instanceof r);let xn,Mn;function Ts(){return xn||(xn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Os(){return Mn||(Mn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ln=new WeakMap,Rr=new WeakMap,Fn=new WeakMap,Pr=new WeakMap,Ar=new WeakMap;function Rs(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",s)},a=()=>{r(Qe(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",s)});return e.then(r=>{r instanceof IDBCursor&&Ln.set(r,t)}).catch(()=>{}),Ar.set(e,t),e}function Ps(t){if(Rr.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",s),t.removeEventListener("abort",s)},a=()=>{r(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",s),t.addEventListener("abort",s)});Rr.set(t,e)}let Cr={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return Rr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fn.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Qe(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function As(t){Cr=t(Cr)}function Cs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(kr(this),e,...r);return Fn.set(n,e.sort?e.sort():[e]),Qe(n)}:Os().includes(t)?function(...e){return t.apply(kr(this),e),Qe(Ln.get(this))}:function(...e){return Qe(t.apply(kr(this),e))}}function ks(t){return typeof t=="function"?Cs(t):(t instanceof IDBTransaction&&Ps(t),Es(t,Ts())?new Proxy(t,Cr):t)}function Qe(t){if(t instanceof IDBRequest)return Rs(t);if(Pr.has(t))return Pr.get(t);const e=ks(t);return e!==t&&(Pr.set(t,e),Ar.set(e,t)),e}const kr=t=>Ar.get(t);function Ds(t,e,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){const s=indexedDB.open(t,e),u=Qe(s);return n&&s.addEventListener("upgradeneeded",o=>{n(Qe(s.result),o.oldVersion,o.newVersion,Qe(s.transaction),o)}),r&&s.addEventListener("blocked",o=>r(o.oldVersion,o.newVersion,o)),u.then(o=>{a&&o.addEventListener("close",()=>a()),i&&o.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),u}const Ns=["get","getKey","getAll","getAllKeys","count"],xs=["put","add","delete","clear"],Dr=new Map;function Un(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dr.get(e))return Dr.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=xs.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Ns.includes(r)))return;const a=async function(s,...u){const o=this.transaction(s,i?"readwrite":"readonly");let l=o.store;return n&&(l=l.index(u.shift())),(await Promise.all([l[r](...u),i&&o.done]))[0]};return Dr.set(e,a),a}As(t=>({...t,get:(e,r,n)=>Un(e,r)||t.get(e,r,n),has:(e,r)=>!!Un(e,r)||t.has(e,r)}));/**
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
 */class Ms{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Ls(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function Ls(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nr="@firebase/app",jn="0.9.19";/**
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
 */const tt=new Nn("@firebase/app"),Fs="@firebase/app-compat",Us="@firebase/analytics-compat",js="@firebase/analytics",Bs="@firebase/app-check-compat",qs="@firebase/app-check",Vs="@firebase/auth",Hs="@firebase/auth-compat",Ws="@firebase/database",zs="@firebase/database-compat",Qs="@firebase/functions",Ks="@firebase/functions-compat",Gs="@firebase/installations",$s="@firebase/installations-compat",Js="@firebase/messaging",Ys="@firebase/messaging-compat",Xs="@firebase/performance",Zs="@firebase/performance-compat",eo="@firebase/remote-config",to="@firebase/remote-config-compat",ro="@firebase/storage",no="@firebase/storage-compat",io="@firebase/firestore",ao="@firebase/firestore-compat",so="firebase",oo="10.4.0";/**
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
 */const xr="[DEFAULT]",uo={[Nr]:"fire-core",[Fs]:"fire-core-compat",[js]:"fire-analytics",[Us]:"fire-analytics-compat",[qs]:"fire-app-check",[Bs]:"fire-app-check-compat",[Vs]:"fire-auth",[Hs]:"fire-auth-compat",[Ws]:"fire-rtdb",[zs]:"fire-rtdb-compat",[Qs]:"fire-fn",[Ks]:"fire-fn-compat",[Gs]:"fire-iid",[$s]:"fire-iid-compat",[Js]:"fire-fcm",[Ys]:"fire-fcm-compat",[Xs]:"fire-perf",[Zs]:"fire-perf-compat",[eo]:"fire-rc",[to]:"fire-rc-compat",[ro]:"fire-gcs",[no]:"fire-gcs-compat",[io]:"fire-fst",[ao]:"fire-fst-compat","fire-js":"fire-js",[so]:"fire-js-all"};/**
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
 */const zt=new Map,Mr=new Map;function co(t,e){try{t.container.addComponent(e)}catch(r){tt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Ot(t){const e=t.name;if(Mr.has(e))return tt.debug(`There were multiple attempts to register component ${e}.`),!1;Mr.set(e,t);for(const r of zt.values())co(r,t);return!0}function Bn(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const lo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ke=new Et("app","Firebase",lo);/**
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
 */class fo{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}}/**
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
 */const Rt=oo;function qn(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:xr,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Ke.create("bad-app-name",{appName:String(i)});if(r||(r=Cn()),!r)throw Ke.create("no-options");const a=zt.get(i);if(a){if(Wt(r,a.options)&&Wt(n,a.config))return a;throw Ke.create("duplicate-app",{appName:i})}const s=new bs(i);for(const o of Mr.values())s.addComponent(o);const u=new fo(r,n,s);return zt.set(i,u),u}function ho(t=xr){const e=zt.get(t);if(!e&&t===xr&&Cn())return qn();if(!e)throw Ke.create("no-app",{appName:t});return e}function lt(t,e,r){var n;let i=(n=uo[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const a=i.match(/\s|\//),s=e.match(/\s|\//);if(a||s){const u=[`Unable to register library "${i}" with version "${e}":`];a&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&u.push("and"),s&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tt.warn(u.join(" "));return}Ot(new ct(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const po="firebase-heartbeat-database",vo=1,Pt="firebase-heartbeat-store";let Lr=null;function Vn(){return Lr||(Lr=Ds(po,vo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pt)}}}).catch(t=>{throw Ke.create("idb-open",{originalErrorMessage:t.message})})),Lr}async function go(t){try{return await(await Vn()).transaction(Pt).objectStore(Pt).get(Wn(t))}catch(e){if(e instanceof We)tt.warn(e.message);else{const r=Ke.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tt.warn(r.message)}}}async function Hn(t,e){try{const n=(await Vn()).transaction(Pt,"readwrite");await n.objectStore(Pt).put(e,Wn(t)),await n.done}catch(r){if(r instanceof We)tt.warn(r.message);else{const n=Ke.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});tt.warn(n.message)}}}function Wn(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mo=1024,yo=30*24*60*60*1e3;class bo{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Io(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=zn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=yo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zn(),{heartbeatsToSend:r,unsentEntries:n}=_o(this._heartbeatsCache.heartbeats),i=Pn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function zn(){return new Date().toISOString().substring(0,10)}function _o(t,e=mo){const r=[];let n=t.slice();for(const i of t){const a=r.find(s=>s.agent===i.agent);if(a){if(a.dates.push(i.date),Qn(r)>e){a.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Qn(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class Io{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return os()?us().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await go(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hn(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hn(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qn(t){return Pn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wo(t){Ot(new ct("platform-logger",e=>new Ms(e),"PRIVATE")),Ot(new ct("heartbeat",e=>new bo(e),"PRIVATE")),lt(Nr,jn,t),lt(Nr,jn,"esm2017"),lt("fire-js","")}wo("");function Fr(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}typeof SuppressedError=="function"&&SuppressedError;function Kn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const So=Kn,Gn=new Et("auth","Firebase",Kn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Nn("@firebase/auth");function Eo(t,...e){Qt.logLevel<=te.WARN&&Qt.warn(`Auth (${Rt}): ${t}`,...e)}function Kt(t,...e){Qt.logLevel<=te.ERROR&&Qt.error(`Auth (${Rt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t,...e){throw Ur(t,...e)}function Te(t,...e){return Ur(t,...e)}function $n(t,e,r){const n=Object.assign(Object.assign({},So()),{[e]:r});return new Et("auth","Firebase",n).create(e,{appName:t.name})}function To(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&Ee(t,"argument-error"),$n(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ur(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return Gn.create(t,...e)}function q(t,e,...r){if(!t)throw Ur(e,...r)}function Le(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Kt(e),new Error(e)}function Fe(t,e){t||Le(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Oo(){return Jn()==="http:"||Jn()==="https:"}function Jn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Oo()||is()||"connection"in navigator)?navigator.onLine:!0}function Po(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,r){this.shortDelay=e,this.longDelay=r,Fe(r>e,"Short delay should be less than long delay!"),this.isMobile=ns()||as()}get(){return Ro()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t,e){Fe(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Le("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Le("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Le("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new At(3e4,6e4);function Xn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ct(t,e,r,n,i={}){return Zn(t,i,async()=>{let a={},s={};n&&(e==="GET"?s=n:a={body:JSON.stringify(n)});const u=Tt(Object.assign({key:t.config.apiKey},s)).slice(1),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode),Yn.fetch()(ei(t,t.config.apiHost,r,u),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},a))})}async function Zn(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},Ao),e);try{const i=new Do(t),a=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const s=await a.json();if("needConfirmation"in s)throw Gt(t,"account-exists-with-different-credential",s);if(a.ok&&!("errorMessage"in s))return s;{const u=a.ok?s.errorMessage:s.error.message,[o,l]=u.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gt(t,"credential-already-in-use",s);if(o==="EMAIL_EXISTS")throw Gt(t,"email-already-in-use",s);if(o==="USER_DISABLED")throw Gt(t,"user-disabled",s);const g=n[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw $n(t,g,l);Ee(t,g)}}catch(i){if(i instanceof We)throw i;Ee(t,"network-request-failed",{message:String(i)})}}async function ko(t,e,r,n,i={}){const a=await Ct(t,e,r,n,i);return"mfaPendingCredential"in a&&Ee(t,"multi-factor-auth-required",{_serverResponse:a}),a}function ei(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?Br(t.config,i):`${t.config.apiScheme}://${i}`}class Do{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(Te(this.auth,"network-request-failed")),Co.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gt(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=Te(t,e,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(t,e){return Ct(t,"POST","/v1/accounts:delete",e)}async function xo(t,e){return Ct(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mo(t,e=!1){const r=ze(t),n=await r.getIdToken(e),i=Vr(n);q(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,s=a==null?void 0:a.sign_in_provider;return{claims:i,token:n,authTime:kt(qr(i.auth_time)),issuedAtTime:kt(qr(i.iat)),expirationTime:kt(qr(i.exp)),signInProvider:s||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function qr(t){return Number(t)*1e3}function Vr(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return Kt("JWT malformed, contained fewer than 3 sections"),null;try{const i=An(r);return i?JSON.parse(i):(Kt("Failed to decode base64 JWT payload"),null)}catch(i){return Kt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Lo(t){const e=Vr(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof We&&Fo(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function Fo({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=kt(this.lastLoginAt),this.creationTime=kt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $t(t){var e;const r=t.auth,n=await t.getIdToken(),i=await Dt(t,xo(r,{idToken:n}));q(i==null?void 0:i.users.length,r,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const s=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?qo(a.providerUserInfo):[],u=Bo(t.providerData,s),o=t.isAnonymous,l=!(t.email&&a.passwordHash)&&!(u!=null&&u.length),g=o?l:!1,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new ti(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(t,f)}async function jo(t){const e=ze(t);await $t(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bo(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function qo(t){return t.map(e=>{var{providerId:r}=e,n=Fr(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(t,e){const r=await Zn(t,{},async()=>{const n=Tt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,s=ei(t,i,"/v1/token",`key=${a}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Yn.fetch()(s,{method:"POST",headers:u,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:a}=await Vo(e,r);this.updateTokensAndExpiration(n,i,Number(a))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:a}=r,s=new Nt;return n&&(q(typeof n=="string","internal-error",{appName:e}),s.refreshToken=n),i&&(q(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),a&&(q(typeof a=="number","internal-error",{appName:e}),s.expirationTime=a),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nt,this.toJSON())}_performRefresh(){return Le("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rt{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,a=Fr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Uo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ti(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const r=await Dt(this,this.stsTokenManager.getToken(this.auth,e));return q(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return Mo(this,e)}reload(){return jo(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await $t(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dt(this,No(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,a,s,u,o,l,g;const f=(n=r.displayName)!==null&&n!==void 0?n:void 0,b=(i=r.email)!==null&&i!==void 0?i:void 0,v=(a=r.phoneNumber)!==null&&a!==void 0?a:void 0,I=(s=r.photoURL)!==null&&s!==void 0?s:void 0,S=(u=r.tenantId)!==null&&u!==void 0?u:void 0,E=(o=r._redirectEventId)!==null&&o!==void 0?o:void 0,O=(l=r.createdAt)!==null&&l!==void 0?l:void 0,T=(g=r.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:w,emailVerified:d,isAnonymous:p,providerData:h,stsTokenManager:y}=r;q(w&&y,e,"internal-error");const m=Nt.fromJSON(this.name,y);q(typeof w=="string",e,"internal-error"),Ge(f,e.name),Ge(b,e.name),q(typeof d=="boolean",e,"internal-error"),q(typeof p=="boolean",e,"internal-error"),Ge(v,e.name),Ge(I,e.name),Ge(S,e.name),Ge(E,e.name),Ge(O,e.name),Ge(T,e.name);const R=new rt({uid:w,auth:e,email:b,emailVerified:d,displayName:f,isAnonymous:p,photoURL:I,phoneNumber:v,tenantId:S,stsTokenManager:m,createdAt:O,lastLoginAt:T});return h&&Array.isArray(h)&&(R.providerData=h.map(_=>Object.assign({},_))),E&&(R._redirectEventId=E),R}static async _fromIdTokenResponse(e,r,n=!1){const i=new Nt;i.updateFromServerResponse(r);const a=new rt({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await $t(a),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new Map;function Ue(t){Fe(t instanceof Function,"Expected a class definition");let e=ri.get(t);return e?(Fe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ri.set(t,e),e)}/**
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
 */class ni{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}ni.type="NONE";const ii=ni;/**
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
 */function Jt(t,e,r){return`firebase:${t}:${e}:${r}`}class dt{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:a}=this.auth;this.fullUserKey=Jt(this.userKey,i.apiKey,a),this.fullPersistenceKey=Jt("persistence",i.apiKey,a),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new dt(Ue(ii),e,n);const i=(await Promise.all(r.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let a=i[0]||Ue(ii);const s=Jt(n,e.config.apiKey,e.name);let u=null;for(const l of r)try{const g=await l._get(s);if(g){const f=rt._fromJSON(e,g);l!==a&&(u=f),a=l;break}}catch{}const o=i.filter(l=>l._shouldAllowMigration);return!a._shouldAllowMigration||!o.length?new dt(a,e,n):(a=o[0],u&&await a._set(s,u.toJSON()),await Promise.all(r.map(async l=>{if(l!==a)try{await l._remove(s)}catch{}})),new dt(a,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ui(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(si(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(li(e))return"Blackberry";if(di(e))return"Webos";if(Hr(e))return"Safari";if((e.includes("chrome/")||oi(e))&&!e.includes("edge/"))return"Chrome";if(ci(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function si(t=le()){return/firefox\//i.test(t)}function Hr(t=le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oi(t=le()){return/crios\//i.test(t)}function ui(t=le()){return/iemobile/i.test(t)}function ci(t=le()){return/android/i.test(t)}function li(t=le()){return/blackberry/i.test(t)}function di(t=le()){return/webos/i.test(t)}function Yt(t=le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ho(t=le()){var e;return Yt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wo(){return ss()&&document.documentMode===10}function fi(t=le()){return Yt(t)||ci(t)||di(t)||li(t)||/windows phone/i.test(t)||ui(t)}function zo(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t,e=[]){let r;switch(t){case"Browser":r=ai(le());break;case"Worker":r=`${ai(le())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Rt}/${n}`}/**
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
 */class Qo{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=a=>new Promise((s,u)=>{try{const o=e(a);s(o)}catch(o){u(o)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function Ko(t,e={}){return Ct(t,"GET","/v2/passwordPolicy",Xn(t,e))}/**
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
 */const Go=6;class $o{constructor(e){var r,n,i,a;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=s.minPasswordLength)!==null&&r!==void 0?r:Go,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,n,i,a,s,u;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=(r=o.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(n=o.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(i=o.containsLowercaseLetter)!==null&&i!==void 0?i:!0),o.isValid&&(o.isValid=(a=o.containsUppercaseLetter)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(s=o.containsNumericCharacter)!==null&&s!==void 0?s:!0),o.isValid&&(o.isValid=(u=o.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),o}validatePasswordLengthOptions(e,r){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=e.length>=n),i&&(r.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,r,n,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,r,n,i){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pi(this),this.idTokenSubscription=new pi(this),this.beforeStateQueue=new Qo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Ue(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await dt.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var r;const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,u=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===u)&&(o!=null&&o.user)&&(i=o.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await $t(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Po()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?ze(e):null;return r&&q(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ue(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ko(this),r=new $o(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Et("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},r)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Ue(e)||this._popupRedirectResolver;q(r,this,"argument-error"),this.redirectPersistenceManager=await dt.create(this,[Ue(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const a=typeof r=="function"?r:r.next.bind(r);let s=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(u,this,"internal-error"),u.then(()=>{s||a(this.currentUser)}),typeof r=="function"){const o=e.addObserver(r,n,i);return()=>{s=!0,o()}}else{const o=e.addObserver(r);return()=>{s=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&Eo(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function Xt(t){return ze(t)}class pi{constructor(e){this.auth=e,this.observer=null,this.addObserver=hs(r=>this.observer=r)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Xo(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const a=Te("internal-error");a.customData=i,r(a)},n.type="text/javascript",n.charset="UTF-8",Yo().appendChild(n)})}function Zo(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t,e){const r=Bn(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),a=r.getOptions();if(Wt(a,e??{}))return i;Ee(i,"already-initialized")}return r.initialize({options:e})}function tu(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Ue);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function ru(t,e,r){const n=Xt(t);q(n._canInitEmulator,n,"emulator-config-failed"),q(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(r!=null&&r.disableWarnings),a=vi(e),{host:s,port:u}=nu(e),o=u===null?"":`:${u}`;n.config.emulator={url:`${a}//${s}${o}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||iu()}function vi(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nu(t){const e=vi(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const a=i[1];return{host:a,port:gi(n.substr(a.length+1))}}else{const[a,s]=n.split(":");return{host:a,port:gi(s)}}}function gi(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iu(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return Le("not implemented")}_getIdTokenResponse(e){return Le("not implemented")}_linkToIdToken(e,r){return Le("not implemented")}_getReauthenticationResolver(e){return Le("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(t,e){return ko(t,"POST","/v1/accounts:signInWithIdp",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="http://localhost";class je extends mi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new je(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):Ee("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,a=Fr(r,["providerId","signInMethod"]);if(!n||!i)return null;const s=new je(n,i);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}_getIdTokenResponse(e){const r=this.buildRequest();return ft(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,ft(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,ft(e,r)}buildRequest(){const e={requestUri:au,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Tt(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ht extends Wr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class pt extends ht{static credentialFromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;return q("providerId"in r&&"signInMethod"in r,"argument-error"),je._fromParams(r)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return q(e.idToken||e.accessToken,"argument-error"),je._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return pt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return pt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:a,nonce:s,providerId:u}=e;if(!n&&!i&&!r&&!a||!u)return null;try{return new pt(u)._credential({idToken:r,accessToken:n,nonce:s,pendingToken:a})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends ht{constructor(){super("facebook.com")}static credential(e){return je._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Oe.credential(e.oauthAccessToken)}catch{return null}}}Oe.FACEBOOK_SIGN_IN_METHOD="facebook.com",Oe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return je._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return Re.credential(r,n)}catch{return null}}}Re.GOOGLE_SIGN_IN_METHOD="google.com",Re.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends ht{constructor(){super("github.com")}static credential(e){return je._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch{return null}}}Pe.GITHUB_SIGN_IN_METHOD="github.com",Pe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends ht{constructor(){super("twitter.com")}static credential(e,r){return je._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return Ae.credential(r,n)}catch{return null}}}Ae.TWITTER_SIGN_IN_METHOD="twitter.com",Ae.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const a=await rt._fromIdTokenResponse(e,n,i),s=yi(n);return new vt({user:a,providerId:s,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=yi(n);return new vt({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function yi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends We{constructor(e,r,n,i){var a;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Zt.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new Zt(e,r,n,i)}}function bi(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Zt._fromErrorAndOperation(t,a,e,n):a})}async function su(t,e,r=!1){const n=await Dt(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return vt._forOperation(t,"link",n)}/**
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
 */async function ou(t,e,r=!1){const{auth:n}=t,i="reauthenticate";try{const a=await Dt(t,bi(n,i,e,t),r);q(a.idToken,n,"internal-error");const s=Vr(a.idToken);q(s,n,"internal-error");const{sub:u}=s;return q(t.uid===u,n,"user-mismatch"),vt._forOperation(t,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Ee(n,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu(t,e,r=!1){const n="signIn",i=await bi(t,n,e),a=await vt._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(a.user),a}function cu(t,e,r,n){return ze(t).onIdTokenChanged(e,r,n)}function lu(t,e,r){return ze(t).beforeAuthStateChanged(e,r)}function du(t,e,r,n){return ze(t).onAuthStateChanged(e,r,n)}function _i(t){return ze(t).signOut()}const er="__sak";/**
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
 */class Ii{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(er,"1"),this.storage.removeItem(er),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(){const t=le();return Hr(t)||Yt(t)}const hu=1e3,pu=10;class wi extends Ii{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fu()&&zo(),this.fallbackToPolling=fi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((s,u,o)=>{this.notifyListeners(s,o)});return}const n=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!r)return}const i=()=>{const s=this.storage.getItem(n);!r&&this.localCache[n]===s||this.notifyListeners(n,s)},a=this.storage.getItem(n);Wo()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pu):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},hu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}wi.type="LOCAL";const vu=wi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends Ii{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}Si.type="SESSION";const Ei=Si;/**
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
 */function gu(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class tr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new tr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:a}=r.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const u=Array.from(s).map(async l=>l(r.origin,a)),o=await gu(u);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:o})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,s;return new Promise((u,o)=>{const l=zr("",20);i.port1.start();const g=setTimeout(()=>{o(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(f){const b=f;if(b.data.eventId===l)switch(b.data.status){case"ack":clearTimeout(g),a=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(b.data.response);break;default:clearTimeout(g),clearTimeout(a),o(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:r},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return window}function yu(t){Ce().location.href=t}/**
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
 */function Ti(){return typeof Ce().WorkerGlobalScope<"u"&&typeof Ce().importScripts=="function"}async function bu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _u(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Iu(){return Ti()?self:null}/**
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
 */const Oi="firebaseLocalStorageDb",wu=1,rr="firebaseLocalStorage",Ri="fbase_key";class xt{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function nr(t,e){return t.transaction([rr],e?"readwrite":"readonly").objectStore(rr)}function Su(){const t=indexedDB.deleteDatabase(Oi);return new xt(t).toPromise()}function Qr(){const t=indexedDB.open(Oi,wu);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(rr,{keyPath:Ri})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(rr)?e(n):(n.close(),await Su(),e(await Qr()))})})}async function Pi(t,e,r){const n=nr(t,!0).put({[Ri]:e,value:r});return new xt(n).toPromise()}async function Eu(t,e){const r=nr(t,!1).get(e),n=await new xt(r).toPromise();return n===void 0?null:n.value}function Ai(t,e){const r=nr(t,!0).delete(e);return new xt(r).toPromise()}const Tu=800,Ou=3;class Ci{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qr(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>Ou)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ti()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tr._getInstance(Iu()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await bu(),!this.activeServiceWorker)return;this.sender=new mu(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_u()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qr();return await Pi(e,er,"1"),await Ai(e,er),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pi(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>Eu(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ai(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=nr(i,!1).getAll();return new xt(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;for(const{fbase_key:i,value:a}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ci.type="LOCAL";const Ru=Ci;new At(3e4,6e4);/**
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
 */function ki(t,e){return e?Ue(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kr extends mi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,r){return ft(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Pu(t){return uu(t.auth,new Kr(t),t.bypassAuthState)}function Au(t){const{auth:e,user:r}=t;return q(r,e,"internal-error"),ou(r,new Kr(t),t.bypassAuthState)}async function Cu(t){const{auth:e,user:r}=t;return q(r,e,"internal-error"),su(r,new Kr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,r,n,i,a=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:a,error:s,type:u}=e;if(s){this.reject(s);return}const o={auth:this.auth,requestUri:r,sessionId:n,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pu;case"linkViaPopup":case"linkViaRedirect":return Cu;case"reauthViaPopup":case"reauthViaRedirect":return Au;default:Ee(this.auth,"internal-error")}}resolve(e){Fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=new At(2e3,1e4);async function Mt(t,e,r){const n=Xt(t);To(t,e,Wr);const i=ki(n,r);return new nt(n,"signInViaPopup",e,i).executeNotNull()}class nt extends Di{constructor(e,r,n,i,a){super(e,r,i,a),this.provider=n,this.authWindow=null,this.pollId=null,nt.currentPopupAction&&nt.currentPopupAction.cancel(),nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Fe(this.filter.length===1,"Popup operations only handle one event");const e=zr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ku.get())};e()}}nt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="pendingRedirect",ir=new Map;class Nu extends Di{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=ir.get(this.auth._key());if(!e){try{const n=await xu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}ir.set(this.auth._key(),e)}return this.bypassAuthState||ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xu(t,e){const r=Fu(e),n=Lu(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function Mu(t,e){ir.set(t._key(),e)}function Lu(t){return Ue(t._redirectPersistence)}function Fu(t){return Jt(Du,t.config.apiKey,t.name)}async function Uu(t,e,r=!1){const n=Xt(t),i=ki(n,e),s=await new Nu(n,i,r).execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=10*60*1e3;class Bu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qu(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!xi(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(Te(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ju&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ni(e))}saveEventToCache(e){this.cachedEventUids.add(Ni(e)),this.lastProcessedEventTime=Date.now()}}function Ni(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xi({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qu(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xi(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vu(t,e={}){return Ct(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wu=/^https?/;async function zu(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Vu(t);for(const r of e)try{if(Qu(r))return}catch{}Ee(t,"unauthorized-domain")}function Qu(t){const e=jr(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&s.hostname===n}if(!Wu.test(r))return!1;if(Hu.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const Ku=new At(3e4,6e4);function Mi(){const t=Ce().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function Gu(t){return new Promise((e,r)=>{var n,i,a;function s(){Mi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mi(),r(Te(t,"network-request-failed"))},timeout:Ku.get()})}if(!((i=(n=Ce().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=Ce().gapi)===null||a===void 0)&&a.load)s();else{const u=Zo("iframefcb");return Ce()[u]=()=>{gapi.load?s():r(Te(t,"network-request-failed"))},Xo(`https://apis.google.com/js/api.js?onload=${u}`).catch(o=>r(o))}}).catch(e=>{throw ar=null,e})}let ar=null;function $u(t){return ar=ar||Gu(t),ar}/**
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
 */const Ju=new At(5e3,15e3),Yu="__/auth/iframe",Xu="emulator/auth/iframe",Zu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ec=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tc(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Br(e,Xu):`https://${t.config.authDomain}/${Yu}`,n={apiKey:e.apiKey,appName:t.name,v:Rt},i=ec.get(t.config.apiHost);i&&(n.eid=i);const a=t._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${Tt(n).slice(1)}`}async function rc(t){const e=await $u(t),r=Ce().gapi;return q(r,t,"internal-error"),e.open({where:document.body,url:tc(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zu,dontclear:!0},n=>new Promise(async(i,a)=>{await n.restyle({setHideOnLeave:!1});const s=Te(t,"network-request-failed"),u=Ce().setTimeout(()=>{a(s)},Ju.get());function o(){Ce().clearTimeout(u),i(n)}n.ping(o).then(o,()=>{a(s)})}))}/**
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
 */const nc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ic=500,ac=600,sc="_blank",oc="http://localhost";class Li{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uc(t,e,r,n=ic,i=ac){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let u="";const o=Object.assign(Object.assign({},nc),{width:n.toString(),height:i.toString(),top:a,left:s}),l=le().toLowerCase();r&&(u=oi(l)?sc:r),si(l)&&(e=e||oc,o.scrollbars="yes");const g=Object.entries(o).reduce((b,[v,I])=>`${b}${v}=${I},`,"");if(Ho(l)&&u!=="_self")return cc(e||"",u),new Li(null);const f=window.open(e||"",u,g);q(f,t,"popup-blocked");try{f.focus()}catch{}return new Li(f)}function cc(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const lc="__/auth/handler",dc="emulator/auth/handler",fc=encodeURIComponent("fac");async function Fi(t,e,r,n,i,a){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:Rt,eventId:i};if(e instanceof Wr){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",fs(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,f]of Object.entries(a||{}))s[g]=f}if(e instanceof ht){const g=e.getScopes().filter(f=>f!=="");g.length>0&&(s.scopes=g.join(","))}t.tenantId&&(s.tid=t.tenantId);const u=s;for(const g of Object.keys(u))u[g]===void 0&&delete u[g];const o=await t._getAppCheckToken(),l=o?`#${fc}=${encodeURIComponent(o)}`:"";return`${hc(t)}?${Tt(u).slice(1)}${l}`}function hc({config:t}){return t.emulator?Br(t,dc):`https://${t.authDomain}/${lc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="webStorageSupport";class pc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ei,this._completeRedirectFn=Uu,this._overrideRedirectResult=Mu}async _openPopup(e,r,n,i){var a;Fe((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await Fi(e,r,n,jr(),i);return uc(e,s,zr())}async _openRedirect(e,r,n,i){await this._originValidation(e);const a=await Fi(e,r,n,jr(),i);return yu(a),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:a}=this.eventManagers[r];return i?Promise.resolve(i):(Fe(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await rc(e),n=new Bu(e);return r.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(Gr,{type:Gr},i=>{var a;const s=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Gr];s!==void 0&&r(!!s),Ee(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=zu(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return fi()||Hr()||Yt()}}const vc=pc;var Ui="@firebase/auth",ji="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yc(t){Ot(new ct("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:s,authDomain:u}=n.options;q(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:s,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hi(t)},l=new Jo(n,i,a,o);return tu(l,r),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),Ot(new ct("auth-internal",e=>{const r=Xt(e.getProvider("auth").getImmediate());return(n=>new gc(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(Ui,ji,mc(t)),lt(Ui,ji,"esm2017")}/**
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
 */const bc=5*60,_c=kn("authIdTokenMaxAge")||bc;let Bi=null;const Ic=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>_c)return;const i=r==null?void 0:r.token;Bi!==i&&(Bi=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wc(t=ho()){const e=Bn(t,"auth");if(e.isInitialized())return e.getImmediate();const r=eu(t,{popupRedirectResolver:vc,persistence:[Ru,vu,Ei]}),n=kn("authTokenSyncURL");if(n){const a=Ic(n);lu(r,a,()=>a(r.currentUser)),cu(r,s=>a(s))}const i=ts("auth");return i&&ru(r,`http://${i}`),r}yc("Browser");var Sc="firebase",Ec="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(Sc,Ec,"app");const qi={language:"en",firebaseConfig:{},endpoint:"http://127.0.0.1:8000/api/auth/",keyword:"TSESSION",refreshTokenHeader:"Authorization",acceptUsername:!1,bodyAsBase64:!1,signInMethods:["google"]};let ee={...qi};const Tc=t=>{ee={...qi,...t}},Oc=()=>Object.keys(ee.firebaseConfig).length!==0,$e=()=>{const t=qn(ee.firebaseConfig);return wc(t)},Vi=new Re;Vi.setCustomParameters({prompt:"select_account"});const Hi=new Oe;Hi.addScope("public_profile");const Rc=new Ae,Pc=new Pe,Ac=new pt("microsoft.com").setCustomParameters({prompt:"consent",login_hint:"user@firstadd.onmicrosoft.com",tenant:"1bd1e0fb-f970-45f0-a49d-e80107b0e6f3"});function se(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];if(process.env.NODE_ENV!=="production"){var i=jc[t],a=i?typeof i=="function"?i.apply(null,r):i:"unknown error nr: "+t;throw Error("[Immer] "+a)}throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(s){return"'"+s+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Be(t){return!!t&&!!t[pe]}function qe(t){var e;return!!t&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Bc}(t)||Array.isArray(t)||!!t[Ft]||!!(!((e=t.constructor)===null||e===void 0)&&e[Ft])||or(t)||ur(t))}function Cc(t){return Be(t)||se(23,t),t[pe].t}function gt(t,e,r){r===void 0&&(r=!1),Je(t)===0?(r?Object.keys:un)(t).forEach(function(n){r&&typeof n=="symbol"||e(n,t[n],t)}):t.forEach(function(n,i){return e(i,n,t)})}function Je(t){var e=t[pe];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:or(t)?2:ur(t)?3:0}function Lt(t,e){return Je(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function sr(t,e){return Je(t)===2?t.get(e):t[e]}function Wi(t,e,r){var n=Je(t);n===2?t.set(e,r):n===3?t.add(r):t[e]=r}function kc(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function or(t){return Fc&&t instanceof Map}function ur(t){return Uc&&t instanceof Set}function it(t){return t.o||t.t}function $r(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=qc(t);delete e[pe];for(var r=un(e),n=0;n<r.length;n++){var i=r[n],a=e[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(e[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Jr(t,e){return e===void 0&&(e=!1),Yr(t)||Be(t)||!qe(t)||(Je(t)>1&&(t.set=t.add=t.clear=t.delete=Dc),Object.freeze(t),e&&gt(t,function(r,n){return Jr(n,!0)},!0)),t}function Dc(){se(2)}function Yr(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function ke(t){var e=cn[t];return e||se(18,t),e}function Nc(t,e){cn[t]||(cn[t]=e)}function zi(){return process.env.NODE_ENV==="production"||mt||se(0),mt}function Xr(t,e){e&&(ke("Patches"),t.u=[],t.s=[],t.v=e)}function cr(t){Zr(t),t.p.forEach(xc),t.p=null}function Zr(t){t===mt&&(mt=t.l)}function Qi(t){return mt={p:[],l:mt,h:t,m:!0,_:0}}function xc(t){var e=t[pe];e.i===0||e.i===1?e.j():e.g=!0}function en(t,e){e._=e.p.length;var r=e.p[0],n=t!==void 0&&t!==r;return e.h.O||ke("ES5").S(e,t,n),n?(r[pe].P&&(cr(e),se(4)),qe(t)&&(t=lr(e,t),e.l||dr(e,t)),e.u&&ke("Patches").M(r[pe].t,t,e.u,e.s)):t=lr(e,r,[]),cr(e),e.u&&e.v(e.u,e.s),t!==on?t:void 0}function lr(t,e,r){if(Yr(e))return e;var n=e[pe];if(!n)return gt(e,function(u,o){return Ki(t,n,e,u,o,r)},!0),e;if(n.A!==t)return e;if(!n.P)return dr(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=n.i===4||n.i===5?n.o=$r(n.k):n.o,a=i,s=!1;n.i===3&&(a=new Set(i),i.clear(),s=!0),gt(a,function(u,o){return Ki(t,n,i,u,o,r,s)}),dr(t,i,!1),r&&t.u&&ke("Patches").N(n,r,t.u,t.s)}return n.o}function Ki(t,e,r,n,i,a,s){if(process.env.NODE_ENV!=="production"&&i===r&&se(5),Be(i)){var u=lr(t,i,a&&e&&e.i!==3&&!Lt(e.R,n)?a.concat(n):void 0);if(Wi(r,n,u),!Be(u))return;t.m=!1}else s&&r.add(i);if(qe(i)&&!Yr(i)){if(!t.h.D&&t._<1)return;lr(t,i),e&&e.A.l||dr(t,i)}}function dr(t,e,r){r===void 0&&(r=!1),!t.l&&t.h.D&&t.m&&Jr(e,r)}function tn(t,e){var r=t[pe];return(r?it(r):t)[e]}function Gi(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function rn(t){t.P||(t.P=!0,t.l&&rn(t.l))}function nn(t){t.o||(t.o=$r(t.t))}function an(t,e,r){var n=or(e)?ke("MapSet").F(e,r):ur(e)?ke("MapSet").T(e,r):t.O?function(i,a){var s=Array.isArray(i),u={i:s?1:0,A:a?a.A:zi(),P:!1,I:!1,R:{},l:a,t:i,k:null,o:null,j:null,C:!1},o=u,l=ln;s&&(o=[u],l=Ut);var g=Proxy.revocable(o,l),f=g.revoke,b=g.proxy;return u.k=b,u.j=f,b}(e,r):ke("ES5").J(e,r);return(r?r.A:zi()).p.push(n),n}function Mc(t){return Be(t)||se(22,t),function e(r){if(!qe(r))return r;var n,i=r[pe],a=Je(r);if(i){if(!i.P&&(i.i<4||!ke("ES5").K(i)))return i.t;i.I=!0,n=$i(r,a),i.I=!1}else n=$i(r,a);return gt(n,function(s,u){i&&sr(i.t,s)===u||Wi(n,s,e(u))}),a===3?new Set(n):n}(t)}function $i(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return $r(t)}function Lc(){function t(n){if(!qe(n))return n;if(Array.isArray(n))return n.map(t);if(or(n))return new Map(Array.from(n.entries()).map(function(s){return[s[0],t(s[1])]}));if(ur(n))return new Set(Array.from(n).map(t));var i=Object.create(Object.getPrototypeOf(n));for(var a in n)i[a]=t(n[a]);return Lt(n,Ft)&&(i[Ft]=n[Ft]),i}function e(n){return Be(n)?t(n):n}var r="add";Nc("Patches",{$:function(n,i){return i.forEach(function(a){for(var s=a.path,u=a.op,o=n,l=0;l<s.length-1;l++){var g=Je(o),f=s[l];typeof f!="string"&&typeof f!="number"&&(f=""+f),g!==0&&g!==1||f!=="__proto__"&&f!=="constructor"||se(24),typeof o=="function"&&f==="prototype"&&se(24),typeof(o=sr(o,f))!="object"&&se(15,s.join("/"))}var b=Je(o),v=t(a.value),I=s[s.length-1];switch(u){case"replace":switch(b){case 2:return o.set(I,v);case 3:se(16);default:return o[I]=v}case r:switch(b){case 1:return I==="-"?o.push(v):o.splice(I,0,v);case 2:return o.set(I,v);case 3:return o.add(v);default:return o[I]=v}case"remove":switch(b){case 1:return o.splice(I,1);case 2:return o.delete(I);case 3:return o.delete(a.value);default:return delete o[I]}default:se(17,u)}}),n},N:function(n,i,a,s){switch(n.i){case 0:case 4:case 2:return function(u,o,l,g){var f=u.t,b=u.o;gt(u.R,function(v,I){var S=sr(f,v),E=sr(b,v),O=I?Lt(f,v)?"replace":r:"remove";if(S!==E||O!=="replace"){var T=o.concat(v);l.push(O==="remove"?{op:O,path:T}:{op:O,path:T,value:E}),g.push(O===r?{op:"remove",path:T}:O==="remove"?{op:r,path:T,value:e(S)}:{op:"replace",path:T,value:e(S)})}})}(n,i,a,s);case 5:case 1:return function(u,o,l,g){var f=u.t,b=u.R,v=u.o;if(v.length<f.length){var I=[v,f];f=I[0],v=I[1];var S=[g,l];l=S[0],g=S[1]}for(var E=0;E<f.length;E++)if(b[E]&&v[E]!==f[E]){var O=o.concat([E]);l.push({op:"replace",path:O,value:e(v[E])}),g.push({op:"replace",path:O,value:e(f[E])})}for(var T=f.length;T<v.length;T++){var w=o.concat([T]);l.push({op:r,path:w,value:e(v[T])})}f.length<v.length&&g.push({op:"replace",path:o.concat(["length"]),value:f.length})}(n,i,a,s);case 3:return function(u,o,l,g){var f=u.t,b=u.o,v=0;f.forEach(function(I){if(!b.has(I)){var S=o.concat([v]);l.push({op:"remove",path:S,value:I}),g.unshift({op:r,path:S,value:I})}v++}),v=0,b.forEach(function(I){if(!f.has(I)){var S=o.concat([v]);l.push({op:r,path:S,value:I}),g.unshift({op:"remove",path:S,value:I})}v++})}(n,i,a,s)}},M:function(n,i,a,s){a.push({op:"replace",path:[],value:i===on?void 0:i}),s.push({op:"replace",path:[],value:n})}})}var Ji,mt,sn=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Fc=typeof Map<"u",Uc=typeof Set<"u",Yi=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",on=sn?Symbol.for("immer-nothing"):((Ji={})["immer-nothing"]=!0,Ji),Ft=sn?Symbol.for("immer-draftable"):"__$immer_draftable",pe=sn?Symbol.for("immer-state"):"__$immer_state",jc={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(t){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+t},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(t){return"Cannot apply patch, path doesn't resolve: "+t},16:'Sets cannot have "replace" patches.',17:function(t){return"Unsupported patch operation: "+t},18:function(t){return"The plugin for '"+t+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+t+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(t){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+t+"'"},22:function(t){return"'current' expects a draft, got: "+t},23:function(t){return"'original' expects a draft, got: "+t},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Bc=""+Object.prototype.constructor,un=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,qc=Object.getOwnPropertyDescriptors||function(t){var e={};return un(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},cn={},ln={get:function(t,e){if(e===pe)return t;var r=it(t);if(!Lt(r,e))return function(i,a,s){var u,o=Gi(a,s);return o?"value"in o?o.value:(u=o.get)===null||u===void 0?void 0:u.call(i.k):void 0}(t,r,e);var n=r[e];return t.I||!qe(n)?n:n===tn(t.t,e)?(nn(t),t.o[e]=an(t.A.h,n,t)):n},has:function(t,e){return e in it(t)},ownKeys:function(t){return Reflect.ownKeys(it(t))},set:function(t,e,r){var n=Gi(it(t),e);if(n!=null&&n.set)return n.set.call(t.k,r),!0;if(!t.P){var i=tn(it(t),e),a=i==null?void 0:i[pe];if(a&&a.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(kc(r,i)&&(r!==void 0||Lt(t.t,e)))return!0;nn(t),rn(t)}return t.o[e]===r&&(r!==void 0||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return tn(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,nn(t),rn(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=it(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:n.enumerable,value:r[e]}},defineProperty:function(){se(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){se(12)}},Ut={};gt(ln,function(t,e){Ut[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Ut.deleteProperty=function(t,e){return process.env.NODE_ENV!=="production"&&isNaN(parseInt(e))&&se(13),Ut.set.call(this,t,e,void 0)},Ut.set=function(t,e,r){return process.env.NODE_ENV!=="production"&&e!=="length"&&isNaN(parseInt(e))&&se(14),ln.set.call(this,t[0],e,r,t[0])};var Vc=function(){function t(r){var n=this;this.O=Yi,this.D=!0,this.produce=function(i,a,s){if(typeof i=="function"&&typeof a!="function"){var u=a;a=i;var o=n;return function(S){var E=this;S===void 0&&(S=u);for(var O=arguments.length,T=Array(O>1?O-1:0),w=1;w<O;w++)T[w-1]=arguments[w];return o.produce(S,function(d){var p;return(p=a).call.apply(p,[E,d].concat(T))})}}var l;if(typeof a!="function"&&se(6),s!==void 0&&typeof s!="function"&&se(7),qe(i)){var g=Qi(n),f=an(n,i,void 0),b=!0;try{l=a(f),b=!1}finally{b?cr(g):Zr(g)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(S){return Xr(g,s),en(S,g)},function(S){throw cr(g),S}):(Xr(g,s),en(l,g))}if(!i||typeof i!="object"){if((l=a(i))===void 0&&(l=i),l===on&&(l=void 0),n.D&&Jr(l,!0),s){var v=[],I=[];ke("Patches").M(i,l,v,I),s(v,I)}return l}se(21,i)},this.produceWithPatches=function(i,a){if(typeof i=="function")return function(l){for(var g=arguments.length,f=Array(g>1?g-1:0),b=1;b<g;b++)f[b-1]=arguments[b];return n.produceWithPatches(l,function(v){return i.apply(void 0,[v].concat(f))})};var s,u,o=n.produce(i,a,function(l,g){s=l,u=g});return typeof Promise<"u"&&o instanceof Promise?o.then(function(l){return[l,s,u]}):[o,s,u]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var e=t.prototype;return e.createDraft=function(r){qe(r)||se(8),Be(r)&&(r=Mc(r));var n=Qi(this),i=an(this,r,void 0);return i[pe].C=!0,Zr(n),i},e.finishDraft=function(r,n){var i=r&&r[pe];process.env.NODE_ENV!=="production"&&(i&&i.C||se(9),i.I&&se(10));var a=i.A;return Xr(a,n),en(void 0,a)},e.setAutoFreeze=function(r){this.D=r},e.setUseProxies=function(r){r&&!Yi&&se(20),this.O=r},e.applyPatches=function(r,n){var i;for(i=n.length-1;i>=0;i--){var a=n[i];if(a.path.length===0&&a.op==="replace"){r=a.value;break}}i>-1&&(n=n.slice(i+1));var s=ke("Patches").$;return Be(r)?s(r,n):this.produce(r,function(u){return s(u,n)})},t}(),me=new Vc;me.produce;var Xi=me.produceWithPatches.bind(me);me.setAutoFreeze.bind(me),me.setUseProxies.bind(me);var Zi=me.applyPatches.bind(me);me.createDraft.bind(me),me.finishDraft.bind(me);var fr="NOT_FOUND";function Hc(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:fr},put:function(n,i){e={key:n,value:i}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}function Wc(t,e){var r=[];function n(u){var o=r.findIndex(function(g){return e(u,g.key)});if(o>-1){var l=r[o];return o>0&&(r.splice(o,1),r.unshift(l)),l.value}return fr}function i(u,o){n(u)===fr&&(r.unshift({key:u,value:o}),r.length>t&&r.pop())}function a(){return r}function s(){r=[]}return{get:n,put:i,getEntries:a,clear:s}}var zc=function(e,r){return e===r};function Qc(t){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var i=r.length,a=0;a<i;a++)if(!t(r[a],n[a]))return!1;return!0}}function ea(t,e){var r=typeof e=="object"?e:{equalityCheck:e},n=r.equalityCheck,i=n===void 0?zc:n,a=r.maxSize,s=a===void 0?1:a,u=r.resultEqualityCheck,o=Qc(i),l=s===1?Hc(o):Wc(s,o);function g(){var f=l.get(arguments);if(f===fr){if(f=t.apply(null,arguments),u){var b=l.getEntries(),v=b.find(function(I){return u(I.value,f)});v&&(f=v.value)}l.put(arguments,f)}return f}return g.clearCache=function(){return l.clear()},g}var hr=globalThis&&globalThis.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(l){return function(g){return o([l,g])}}function o(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=l[0]&2?i.return:l[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;switch(i=0,a&&(l=[l[0]&2,a.value]),l[0]){case 0:case 1:a=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){r.label=l[1];break}if(l[0]===6&&r.label<a[1]){r.label=a[1],a=l;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(l);break}a[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(t,r)}catch(g){l=[6,g],i=0}finally{n=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},pr=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t},Kc=Object.defineProperty,Gc=Object.defineProperties,$c=Object.getOwnPropertyDescriptors,vr=Object.getOwnPropertySymbols,ta=Object.prototype.hasOwnProperty,ra=Object.prototype.propertyIsEnumerable,na=function(t,e,r){return e in t?Kc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},oe=function(t,e){for(var r in e||(e={}))ta.call(e,r)&&na(t,r,e[r]);if(vr)for(var n=0,i=vr(e);n<i.length;n++){var r=i[n];ra.call(e,r)&&na(t,r,e[r])}return t},De=function(t,e){return Gc(t,$c(e))},ia=function(t,e){var r={};for(var n in t)ta.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&vr)for(var i=0,a=vr(t);i<a.length;i++){var n=a[i];e.indexOf(n)<0&&ra.call(t,n)&&(r[n]=t[n])}return r},gr=function(t,e,r){return new Promise(function(n,i){var a=function(o){try{u(r.next(o))}catch(l){i(l)}},s=function(o){try{u(r.throw(o))}catch(l){i(l)}},u=function(o){return o.done?n(o.value):Promise.resolve(o.value).then(a,s)};u((r=r.apply(t,e)).next())})},ie;(function(t){t.uninitialized="uninitialized",t.pending="pending",t.fulfilled="fulfilled",t.rejected="rejected"})(ie||(ie={}));function Jc(t){return{status:t,isUninitialized:t===ie.uninitialized,isLoading:t===ie.pending,isSuccess:t===ie.fulfilled,isError:t===ie.rejected}}function Yc(t){return new RegExp("(^|:)//").test(t)}var Xc=function(t){return t.replace(/\/$/,"")},Zc=function(t){return t.replace(/^\//,"")};function el(t,e){if(!t)return e;if(!e)return t;if(Yc(e))return e;var r=t.endsWith("/")||!e.startsWith("?")?"/":"";return t=Xc(t),e=Zc(e),""+t+r+e}var aa=function(t){return[].concat.apply([],t)};function tl(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}function rl(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}var sa=L.isPlainObject;function oa(t,e){if(t===e||!(sa(t)&&sa(e)||Array.isArray(t)&&Array.isArray(e)))return e;for(var r=Object.keys(e),n=Object.keys(t),i=r.length===n.length,a=Array.isArray(e)?[]:{},s=0,u=r;s<u.length;s++){var o=u[s];a[o]=oa(t[o],e[o]),i&&(i=t[o]===a[o])}return i?t:a}var ua=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return fetch.apply(void 0,t)},nl=function(t){return t.status>=200&&t.status<=299},il=function(t){return/ion\/(vnd\.api\+)?json/.test(t.get("content-type")||"")};function ca(t){if(!L.isPlainObject(t))return t;for(var e=oe({},t),r=0,n=Object.entries(e);r<n.length;r++){var i=n[r],a=i[0],s=i[1];s===void 0&&delete e[a]}return e}function al(t){var e=this;t===void 0&&(t={});var r=t,n=r.baseUrl,i=r.prepareHeaders,a=i===void 0?function(w){return w}:i,s=r.fetchFn,u=s===void 0?ua:s,o=r.paramsSerializer,l=r.isJsonContentType,g=l===void 0?il:l,f=r.jsonContentType,b=f===void 0?"application/json":f,v=r.jsonReplacer,I=r.timeout,S=r.responseHandler,E=r.validateStatus,O=ia(r,["baseUrl","prepareHeaders","fetchFn","paramsSerializer","isJsonContentType","jsonContentType","jsonReplacer","timeout","responseHandler","validateStatus"]);return typeof fetch>"u"&&u===ua&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),function(w,d){return gr(e,null,function(){var p,h,y,m,R,_,P,C,A,N,x,B,U,j,K,W,z,J,H,Y,Q,X,ae,ve,_e,Ie,ye,de,ne,xe,ot,Xe,ut,bt,Ze,Sr;return hr(this,function(we){switch(we.label){case 0:return p=d.signal,h=d.getState,y=d.extra,m=d.endpoint,R=d.forced,_=d.type,C=typeof w=="string"?{url:w}:w,A=C.url,N=C.headers,x=N===void 0?new Headers(O.headers):N,B=C.params,U=B===void 0?void 0:B,j=C.responseHandler,K=j===void 0?S??"json":j,W=C.validateStatus,z=W===void 0?E??nl:W,J=C.timeout,H=J===void 0?I:J,Y=ia(C,["url","headers","params","responseHandler","validateStatus","timeout"]),Q=oe(De(oe({},O),{signal:p}),Y),x=new Headers(ca(x)),X=Q,[4,a(x,{getState:h,extra:y,endpoint:m,forced:R,type:_})];case 1:X.headers=we.sent()||x,ae=function(ge){return typeof ge=="object"&&(L.isPlainObject(ge)||Array.isArray(ge)||typeof ge.toJSON=="function")},!Q.headers.has("content-type")&&ae(Q.body)&&Q.headers.set("content-type",b),ae(Q.body)&&g(Q.headers)&&(Q.body=JSON.stringify(Q.body,v)),U&&(ve=~A.indexOf("?")?"&":"?",_e=o?o(U):new URLSearchParams(ca(U)),A+=ve+_e),A=el(n,A),Ie=new Request(A,Q),ye=new Request(A,Q),P={request:ye},ne=!1,xe=H&&setTimeout(function(){ne=!0,d.abort()},H),we.label=2;case 2:return we.trys.push([2,4,5,6]),[4,u(Ie)];case 3:return de=we.sent(),[3,6];case 4:return ot=we.sent(),[2,{error:{status:ne?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(ot)},meta:P}];case 5:return xe&&clearTimeout(xe),[7];case 6:Xe=de.clone(),P.response=Xe,bt="",we.label=7;case 7:return we.trys.push([7,9,,10]),[4,Promise.all([T(de,K).then(function(ge){return ut=ge},function(ge){return Ze=ge}),Xe.text().then(function(ge){return bt=ge},function(){})])];case 8:if(we.sent(),Ze)throw Ze;return[3,10];case 9:return Sr=we.sent(),[2,{error:{status:"PARSING_ERROR",originalStatus:de.status,data:bt,error:String(Sr)},meta:P}];case 10:return[2,z(de,ut)?{data:ut,meta:P}:{error:{status:de.status,data:ut},meta:P}]}})})};function T(w,d){return gr(this,null,function(){var p;return hr(this,function(h){switch(h.label){case 0:return typeof d=="function"?[2,d(w)]:(d==="content-type"&&(d=g(w.headers)?"json":"text"),d!=="json"?[3,2]:[4,w.text()]);case 1:return p=h.sent(),[2,p.length?JSON.parse(p):null];case 2:return[2,w.text()]}})})}}var la=function(){function t(e,r){r===void 0&&(r=void 0),this.value=e,this.meta=r}return t}(),dn=L.createAction("__rtkq/focused"),da=L.createAction("__rtkq/unfocused"),fn=L.createAction("__rtkq/online"),fa=L.createAction("__rtkq/offline"),Ne;(function(t){t.query="query",t.mutation="mutation"})(Ne||(Ne={}));function ha(t){return t.type===Ne.query}function sl(t){return t.type===Ne.mutation}function hn(t,e,r,n,i,a){return ol(t)?t(e,r,n,i).map(pn).map(a):Array.isArray(t)?t.map(pn).map(a):[]}function ol(t){return typeof t=="function"}function pn(t){return typeof t=="string"?{type:t}:t}function vn(t){return t!=null}var jt=Symbol("forceQueryFn"),gn=function(t){return typeof t[jt]=="function"};function ul(t){var e=t.serializeQueryArgs,r=t.queryThunk,n=t.mutationThunk,i=t.api,a=t.context,s=new Map,u=new Map,o=i.internalActions,l=o.unsubscribeQueryResult,g=o.removeMutationResult,f=o.updateSubscriptionOptions;return{buildInitiateQuery:w,buildInitiateMutation:d,getRunningQueryThunk:I,getRunningMutationThunk:S,getRunningQueriesThunk:E,getRunningMutationsThunk:O,getRunningOperationPromises:v,removalWarning:b};function b(){throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`)}function v(){if(typeof process<"u"&&process.env.NODE_ENV==="development")b();else{var p=function(h){return Array.from(h.values()).flatMap(function(y){return y?Object.values(y):[]})};return pr(pr([],p(s)),p(u)).filter(vn)}}function I(p,h){return function(y){var m,R=a.endpointDefinitions[p],_=e({queryArgs:h,endpointDefinition:R,endpointName:p});return(m=s.get(y))==null?void 0:m[_]}}function S(p,h){return function(y){var m;return(m=u.get(y))==null?void 0:m[h]}}function E(){return function(p){return Object.values(s.get(p)||{}).filter(vn)}}function O(){return function(p){return Object.values(u.get(p)||{}).filter(vn)}}function T(p){if(process.env.NODE_ENV!=="production"){if(T.triggered)return;var h=p(i.internalActions.internal_probeSubscription({queryCacheKey:"DOES_NOT_EXIST",requestId:"DUMMY_REQUEST_ID"}));if(T.triggered=!0,typeof h!="boolean")throw new Error('Warning: Middleware for RTK-Query API at reducerPath "'+i.reducerPath+`" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`)}}function w(p,h){var y=function(m,R){var _=R===void 0?{}:R,P=_.subscribe,C=P===void 0?!0:P,A=_.forceRefetch,N=_.subscriptionOptions,x=jt,B=_[x];return function(U,j){var K,W,z=e({queryArgs:m,endpointDefinition:h,endpointName:p}),J=r((K={type:"query",subscribe:C,forceRefetch:A,subscriptionOptions:N,endpointName:p,originalArgs:m,queryCacheKey:z},K[jt]=B,K)),H=i.endpoints[p].select(m),Y=U(J),Q=H(j());T(U);var X=Y.requestId,ae=Y.abort,ve=Q.requestId!==X,_e=(W=s.get(U))==null?void 0:W[z],Ie=function(){return H(j())},ye=Object.assign(B?Y.then(Ie):ve&&!_e?Promise.resolve(Q):Promise.all([_e,Y]).then(Ie),{arg:m,requestId:X,subscriptionOptions:N,queryCacheKey:z,abort:ae,unwrap:function(){return gr(this,null,function(){var ne;return hr(this,function(xe){switch(xe.label){case 0:return[4,ye];case 1:if(ne=xe.sent(),ne.isError)throw ne.error;return[2,ne.data]}})})},refetch:function(){return U(y(m,{subscribe:!1,forceRefetch:!0}))},unsubscribe:function(){C&&U(l({queryCacheKey:z,requestId:X}))},updateSubscriptionOptions:function(ne){ye.subscriptionOptions=ne,U(f({endpointName:p,requestId:X,queryCacheKey:z,options:ne}))}});if(!_e&&!ve&&!B){var de=s.get(U)||{};de[z]=ye,s.set(U,de),ye.then(function(){delete de[z],Object.keys(de).length||s.delete(U)})}return ye}};return y}function d(p){return function(h,y){var m=y===void 0?{}:y,R=m.track,_=R===void 0?!0:R,P=m.fixedCacheKey;return function(C,A){var N=n({type:"mutation",endpointName:p,originalArgs:h,track:_,fixedCacheKey:P}),x=C(N);T(C);var B=x.requestId,U=x.abort,j=x.unwrap,K=x.unwrap().then(function(H){return{data:H}}).catch(function(H){return{error:H}}),W=function(){C(g({requestId:B,fixedCacheKey:P}))},z=Object.assign(K,{arg:x.arg,requestId:B,abort:U,unwrap:j,unsubscribe:W,reset:W}),J=u.get(C)||{};return u.set(C,J),J[B]=z,z.then(function(){delete J[B],Object.keys(J).length||u.delete(C)}),P&&(J[P]=z,z.then(function(){J[P]===z&&(delete J[P],Object.keys(J).length||u.delete(C))})),z}}}}function pa(t){return t}function cl(t){var e=this,r=t.reducerPath,n=t.baseQuery,i=t.context.endpointDefinitions,a=t.serializeQueryArgs,s=t.api,u=t.assertTagType,o=function(d,p,h,y){return function(m,R){var _=i[d],P=a({queryArgs:p,endpointDefinition:_,endpointName:d});if(m(s.internalActions.queryResultPatched({queryCacheKey:P,patches:h})),!!y){var C=s.endpoints[d].select(p)(R()),A=hn(_.providesTags,C.data,void 0,p,{},u);m(s.internalActions.updateProvidedBy({queryCacheKey:P,providedTags:A}))}}},l=function(d,p,h,y){return y===void 0&&(y=!0),function(m,R){var _,P,C=s.endpoints[d],A=C.select(p)(R()),N={patches:[],inversePatches:[],undo:function(){return m(s.util.patchQueryData(d,p,N.inversePatches,y))}};if(A.status===ie.uninitialized)return N;var x;if("data"in A)if(qe(A.data)){var B=Xi(A.data,h),U=B[0],j=B[1],K=B[2];(_=N.patches).push.apply(_,j),(P=N.inversePatches).push.apply(P,K),x=U}else x=h(A.data),N.patches.push({op:"replace",path:[],value:x}),N.inversePatches.push({op:"replace",path:[],value:A.data});return m(s.util.patchQueryData(d,p,N.patches,y)),N}},g=function(d,p,h){return function(y){var m;return y(s.endpoints[d].initiate(p,(m={subscribe:!1,forceRefetch:!0},m[jt]=function(){return{data:h}},m)))}},f=function(d,p){return gr(e,[d,p],function(h,y){var m,R,_,P,C,A,N,x,B,U,j,K,W,z,J,H,Y,Q,X=y.signal,ae=y.abort,ve=y.rejectWithValue,_e=y.fulfillWithValue,Ie=y.dispatch,ye=y.getState,de=y.extra;return hr(this,function(ne){switch(ne.label){case 0:m=i[h.endpointName],ne.label=1;case 1:return ne.trys.push([1,8,,13]),R=pa,_=void 0,P={signal:X,abort:ae,dispatch:Ie,getState:ye,extra:de,endpoint:h.endpointName,type:h.type,forced:h.type==="query"?b(h,ye()):void 0},C=h.type==="query"?h[jt]:void 0,C?(_=C(),[3,6]):[3,2];case 2:return m.query?[4,n(m.query(h.originalArgs),P,m.extraOptions)]:[3,4];case 3:return _=ne.sent(),m.transformResponse&&(R=m.transformResponse),[3,6];case 4:return[4,m.queryFn(h.originalArgs,P,m.extraOptions,function(xe){return n(xe,P,m.extraOptions)})];case 5:_=ne.sent(),ne.label=6;case 6:if(typeof process<"u"&&process.env.NODE_ENV==="development"){if(A=m.query?"`baseQuery`":"`queryFn`",N=void 0,!_)N=A+" did not return anything.";else if(typeof _!="object")N=A+" did not return an object.";else if(_.error&&_.data)N=A+" returned an object containing both `error` and `result`.";else if(_.error===void 0&&_.data===void 0)N=A+" returned an object containing neither a valid `error` and `result`. At least one of them should not be `undefined`";else for(x=0,B=Object.keys(_);x<B.length;x++)if(U=B[x],U!=="error"&&U!=="data"&&U!=="meta"){N="The object returned by "+A+" has the unknown property "+U+".";break}N&&console.error("Error encountered handling the endpoint "+h.endpointName+`.
              `+N+"\n              It needs to return an object with either the shape `{ data: <value> }` or `{ error: <value> }` that may contain an optional `meta` property.\n              Object returned was:",_)}if(_.error)throw new la(_.error,_.meta);return j=_e,[4,R(_.data,_.meta,h.originalArgs)];case 7:return[2,j.apply(void 0,[ne.sent(),(Y={fulfilledTimeStamp:Date.now(),baseQueryMeta:_.meta},Y[L.SHOULD_AUTOBATCH]=!0,Y)])];case 8:if(K=ne.sent(),W=K,!(W instanceof la))return[3,12];z=pa,m.query&&m.transformErrorResponse&&(z=m.transformErrorResponse),ne.label=9;case 9:return ne.trys.push([9,11,,12]),J=ve,[4,z(W.value,W.meta,h.originalArgs)];case 10:return[2,J.apply(void 0,[ne.sent(),(Q={baseQueryMeta:W.meta},Q[L.SHOULD_AUTOBATCH]=!0,Q)])];case 11:return H=ne.sent(),W=H,[3,12];case 12:throw typeof process<"u"&&process.env.NODE_ENV!=="production"?console.error('An unhandled error occurred processing a request for the endpoint "'+h.endpointName+`".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`,W):console.error(W),W;case 13:return[2]}})})};function b(d,p){var h,y,m,R,_=(y=(h=p[r])==null?void 0:h.queries)==null?void 0:y[d.queryCacheKey],P=(m=p[r])==null?void 0:m.config.refetchOnMountOrArgChange,C=_==null?void 0:_.fulfilledTimeStamp,A=(R=d.forceRefetch)!=null?R:d.subscribe&&P;return A?A===!0||(Number(new Date)-Number(C))/1e3>=A:!1}var v=L.createAsyncThunk(r+"/executeQuery",f,{getPendingMeta:function(){var d;return d={startedTimeStamp:Date.now()},d[L.SHOULD_AUTOBATCH]=!0,d},condition:function(d,p){var h=p.getState,y,m,R,_=h(),P=(m=(y=_[r])==null?void 0:y.queries)==null?void 0:m[d.queryCacheKey],C=P==null?void 0:P.fulfilledTimeStamp,A=d.originalArgs,N=P==null?void 0:P.originalArgs,x=i[d.endpointName];return gn(d)?!0:(P==null?void 0:P.status)==="pending"?!1:b(d,_)||ha(x)&&((R=x==null?void 0:x.forceRefetch)!=null&&R.call(x,{currentArg:A,previousArg:N,endpointState:P,state:_}))?!0:!C},dispatchConditionRejection:!0}),I=L.createAsyncThunk(r+"/executeMutation",f,{getPendingMeta:function(){var d;return d={startedTimeStamp:Date.now()},d[L.SHOULD_AUTOBATCH]=!0,d}}),S=function(d){return"force"in d},E=function(d){return"ifOlderThan"in d},O=function(d,p,h){return function(y,m){var R=S(h)&&h.force,_=E(h)&&h.ifOlderThan,P=function(x){return x===void 0&&(x=!0),s.endpoints[d].initiate(p,{forceRefetch:x})},C=s.endpoints[d].select(p)(m());if(R)y(P());else if(_){var A=C==null?void 0:C.fulfilledTimeStamp;if(!A){y(P());return}var N=(Number(new Date)-Number(new Date(A)))/1e3>=_;N&&y(P())}else y(P(!1))}};function T(d){return function(p){var h,y;return((y=(h=p==null?void 0:p.meta)==null?void 0:h.arg)==null?void 0:y.endpointName)===d}}function w(d,p){return{matchPending:L.isAllOf(L.isPending(d),T(p)),matchFulfilled:L.isAllOf(L.isFulfilled(d),T(p)),matchRejected:L.isAllOf(L.isRejected(d),T(p))}}return{queryThunk:v,mutationThunk:I,prefetch:O,updateQueryData:l,upsertQueryData:g,patchQueryData:o,buildMatchThunkActions:w}}function va(t,e,r,n){return hn(r[t.meta.arg.endpointName][e],L.isFulfilled(t)?t.payload:void 0,L.isRejectedWithValue(t)?t.payload:void 0,t.meta.arg.originalArgs,"baseQueryMeta"in t.meta?t.meta.baseQueryMeta:void 0,n)}function mr(t,e,r){var n=t[e];n&&r(n)}function Bt(t){var e;return(e="arg"in t?t.arg.fixedCacheKey:t.fixedCacheKey)!=null?e:t.requestId}function ga(t,e,r){var n=t[Bt(e)];n&&r(n)}var qt={};function ll(t){var e=t.reducerPath,r=t.queryThunk,n=t.mutationThunk,i=t.context,a=i.endpointDefinitions,s=i.apiUid,u=i.extractRehydrationInfo,o=i.hasRehydrationInfo,l=t.assertTagType,g=t.config,f=L.createAction(e+"/resetApiState"),b=L.createSlice({name:e+"/queries",initialState:qt,reducers:{removeQueryResult:{reducer:function(p,h){var y=h.payload.queryCacheKey;delete p[y]},prepare:L.prepareAutoBatched()},queryResultPatched:{reducer:function(p,h){var y=h.payload,m=y.queryCacheKey,R=y.patches;mr(p,m,function(_){_.data=Zi(_.data,R.concat())})},prepare:L.prepareAutoBatched()}},extraReducers:function(p){p.addCase(r.pending,function(h,y){var m=y.meta,R=y.meta.arg,_,P,C=gn(R);(R.subscribe||C)&&((P=h[_=R.queryCacheKey])!=null||(h[_]={status:ie.uninitialized,endpointName:R.endpointName})),mr(h,R.queryCacheKey,function(A){A.status=ie.pending,A.requestId=C&&A.requestId?A.requestId:m.requestId,R.originalArgs!==void 0&&(A.originalArgs=R.originalArgs),A.startedTimeStamp=m.startedTimeStamp})}).addCase(r.fulfilled,function(h,y){var m=y.meta,R=y.payload;mr(h,m.arg.queryCacheKey,function(_){var P;if(!(_.requestId!==m.requestId&&!gn(m.arg))){var C=a[m.arg.endpointName].merge;if(_.status=ie.fulfilled,C)if(_.data!==void 0){var A=m.fulfilledTimeStamp,N=m.arg,x=m.baseQueryMeta,B=m.requestId,U=L.createNextState(_.data,function(j){return C(j,R,{arg:N.originalArgs,baseQueryMeta:x,fulfilledTimeStamp:A,requestId:B})});_.data=U}else _.data=R;else _.data=(P=a[m.arg.endpointName].structuralSharing)==null||P?oa(Be(_.data)?Cc(_.data):_.data,R):R;delete _.error,_.fulfilledTimeStamp=m.fulfilledTimeStamp}})}).addCase(r.rejected,function(h,y){var m=y.meta,R=m.condition,_=m.arg,P=m.requestId,C=y.error,A=y.payload;mr(h,_.queryCacheKey,function(N){if(!R){if(N.requestId!==P)return;N.status=ie.rejected,N.error=A??C}})}).addMatcher(o,function(h,y){for(var m=u(y).queries,R=0,_=Object.entries(m);R<_.length;R++){var P=_[R],C=P[0],A=P[1];((A==null?void 0:A.status)===ie.fulfilled||(A==null?void 0:A.status)===ie.rejected)&&(h[C]=A)}})}}),v=L.createSlice({name:e+"/mutations",initialState:qt,reducers:{removeMutationResult:{reducer:function(p,h){var y=h.payload,m=Bt(y);m in p&&delete p[m]},prepare:L.prepareAutoBatched()}},extraReducers:function(p){p.addCase(n.pending,function(h,y){var m=y.meta,R=y.meta,_=R.requestId,P=R.arg,C=R.startedTimeStamp;P.track&&(h[Bt(m)]={requestId:_,status:ie.pending,endpointName:P.endpointName,startedTimeStamp:C})}).addCase(n.fulfilled,function(h,y){var m=y.payload,R=y.meta;R.arg.track&&ga(h,R,function(_){_.requestId===R.requestId&&(_.status=ie.fulfilled,_.data=m,_.fulfilledTimeStamp=R.fulfilledTimeStamp)})}).addCase(n.rejected,function(h,y){var m=y.payload,R=y.error,_=y.meta;_.arg.track&&ga(h,_,function(P){P.requestId===_.requestId&&(P.status=ie.rejected,P.error=m??R)})}).addMatcher(o,function(h,y){for(var m=u(y).mutations,R=0,_=Object.entries(m);R<_.length;R++){var P=_[R],C=P[0],A=P[1];((A==null?void 0:A.status)===ie.fulfilled||(A==null?void 0:A.status)===ie.rejected)&&C!==(A==null?void 0:A.requestId)&&(h[C]=A)}})}}),I=L.createSlice({name:e+"/invalidation",initialState:qt,reducers:{updateProvidedBy:{reducer:function(p,h){for(var y,m,R,_,P=h.payload,C=P.queryCacheKey,A=P.providedTags,N=0,x=Object.values(p);N<x.length;N++)for(var B=x[N],U=0,j=Object.values(B);U<j.length;U++){var K=j[U],W=K.indexOf(C);W!==-1&&K.splice(W,1)}for(var z=0,J=A;z<J.length;z++){var H=J[z],Y=H.type,Q=H.id,X=(_=(m=(y=p[Y])!=null?y:p[Y]={})[R=Q||"__internal_without_id"])!=null?_:m[R]=[],ae=X.includes(C);ae||X.push(C)}},prepare:L.prepareAutoBatched()}},extraReducers:function(p){p.addCase(b.actions.removeQueryResult,function(h,y){for(var m=y.payload.queryCacheKey,R=0,_=Object.values(h);R<_.length;R++)for(var P=_[R],C=0,A=Object.values(P);C<A.length;C++){var N=A[C],x=N.indexOf(m);x!==-1&&N.splice(x,1)}}).addMatcher(o,function(h,y){for(var m,R,_,P,C=u(y).provided,A=0,N=Object.entries(C);A<N.length;A++)for(var x=N[A],B=x[0],U=x[1],j=0,K=Object.entries(U);j<K.length;j++)for(var W=K[j],z=W[0],J=W[1],H=(P=(R=(m=h[B])!=null?m:h[B]={})[_=z||"__internal_without_id"])!=null?P:R[_]=[],Y=0,Q=J;Y<Q.length;Y++){var X=Q[Y],ae=H.includes(X);ae||H.push(X)}}).addMatcher(L.isAnyOf(L.isFulfilled(r),L.isRejectedWithValue(r)),function(h,y){var m=va(y,"providesTags",a,l),R=y.meta.arg.queryCacheKey;I.caseReducers.updateProvidedBy(h,I.actions.updateProvidedBy({queryCacheKey:R,providedTags:m}))})}}),S=L.createSlice({name:e+"/subscriptions",initialState:qt,reducers:{updateSubscriptionOptions:function(p,h){},unsubscribeQueryResult:function(p,h){},internal_probeSubscription:function(p,h){}}}),E=L.createSlice({name:e+"/internalSubscriptions",initialState:qt,reducers:{subscriptionsUpdated:{reducer:function(p,h){return Zi(p,h.payload)},prepare:L.prepareAutoBatched()}}}),O=L.createSlice({name:e+"/config",initialState:oe({online:tl(),focused:rl(),middlewareRegistered:!1},g),reducers:{middlewareRegistered:function(p,h){var y=h.payload;p.middlewareRegistered=p.middlewareRegistered==="conflict"||s!==y?"conflict":!0}},extraReducers:function(p){p.addCase(fn,function(h){h.online=!0}).addCase(fa,function(h){h.online=!1}).addCase(dn,function(h){h.focused=!0}).addCase(da,function(h){h.focused=!1}).addMatcher(o,function(h){return oe({},h)})}}),T=L.combineReducers({queries:b.reducer,mutations:v.reducer,provided:I.reducer,subscriptions:E.reducer,config:O.reducer}),w=function(p,h){return T(f.match(h)?void 0:p,h)},d=De(oe(oe(oe(oe(oe(oe({},O.actions),b.actions),S.actions),E.actions),v.actions),I.actions),{unsubscribeMutationResult:v.actions.removeMutationResult,resetApiState:f});return{reducer:w,actions:d}}var at=Symbol.for("RTKQ/skipToken"),ma={status:ie.uninitialized},ya=L.createNextState(ma,function(){}),ba=L.createNextState(ma,function(){});function dl(t){var e=t.serializeQueryArgs,r=t.reducerPath,n=function(g){return ya},i=function(g){return ba};return{buildQuerySelector:u,buildMutationSelector:o,selectInvalidatedBy:l};function a(g){return oe(oe({},g),Jc(g.status))}function s(g){var f=g[r];if(process.env.NODE_ENV!=="production"&&!f){if(s.triggered)return f;s.triggered=!0,console.error("Error: No data found at `state."+r+"`. Did you forget to add the reducer to the store?")}return f}function u(g,f){return function(b){var v=e({queryArgs:b,endpointDefinition:f,endpointName:g}),I=function(E){var O,T,w;return(w=(T=(O=s(E))==null?void 0:O.queries)==null?void 0:T[v])!=null?w:ya},S=b===at?n:I;return L.createSelector(S,a)}}function o(){return function(g){var f,b;typeof g=="object"?b=(f=Bt(g))!=null?f:at:b=g;var v=function(S){var E,O,T;return(T=(O=(E=s(S))==null?void 0:E.mutations)==null?void 0:O[b])!=null?T:ba},I=b===at?i:v;return L.createSelector(I,a)}}function l(g,f){for(var b,v=g[r],I=new Set,S=0,E=f.map(pn);S<E.length;S++){var O=E[S],T=v.provided[O.type];if(T)for(var w=(b=O.id!==void 0?T[O.id]:aa(Object.values(T)))!=null?b:[],d=0,p=w;d<p.length;d++){var h=p[d];I.add(h)}}return aa(Array.from(I.values()).map(function(y){var m=v.queries[y];return m?[{queryCacheKey:y,endpointName:m.endpointName,originalArgs:m.originalArgs}]:[]}))}}var yr=WeakMap?new WeakMap:void 0,_a=function(t){var e=t.endpointName,r=t.queryArgs,n="",i=yr==null?void 0:yr.get(r);if(typeof i=="string")n=i;else{var a=JSON.stringify(r,function(s,u){return L.isPlainObject(u)?Object.keys(u).sort().reduce(function(o,l){return o[l]=u[l],o},{}):u});L.isPlainObject(r)&&(yr==null||yr.set(r,a)),n=a}return e+"("+n+")"};function fl(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(n){var i=ea(function(g){var f,b;return(b=n.extractRehydrationInfo)==null?void 0:b.call(n,g,{reducerPath:(f=n.reducerPath)!=null?f:"api"})}),a=De(oe({reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1},n),{extractRehydrationInfo:i,serializeQueryArgs:function(g){var f=_a;if("serializeQueryArgs"in g.endpointDefinition){var b=g.endpointDefinition.serializeQueryArgs;f=function(v){var I=b(v);return typeof I=="string"?I:_a(De(oe({},v),{queryArgs:I}))}}else n.serializeQueryArgs&&(f=n.serializeQueryArgs);return f(g)},tagTypes:pr([],n.tagTypes||[])}),s={endpointDefinitions:{},batch:function(g){g()},apiUid:L.nanoid(),extractRehydrationInfo:i,hasRehydrationInfo:ea(function(g){return i(g)!=null})},u={injectEndpoints:l,enhanceEndpoints:function(g){var f=g.addTagTypes,b=g.endpoints;if(f)for(var v=0,I=f;v<I.length;v++){var S=I[v];a.tagTypes.includes(S)||a.tagTypes.push(S)}if(b)for(var E=0,O=Object.entries(b);E<O.length;E++){var T=O[E],w=T[0],d=T[1];typeof d=="function"?d(s.endpointDefinitions[w]):Object.assign(s.endpointDefinitions[w]||{},d)}return u}},o=t.map(function(g){return g.init(u,a,s)});function l(g){for(var f=g.endpoints({query:function(d){return De(oe({},d),{type:Ne.query})},mutation:function(d){return De(oe({},d),{type:Ne.mutation})}}),b=0,v=Object.entries(f);b<v.length;b++){var I=v[b],S=I[0],E=I[1];if(!g.overrideExisting&&S in s.endpointDefinitions){typeof process<"u"&&process.env.NODE_ENV==="development"&&console.error("called `injectEndpoints` to override already-existing endpointName "+S+" without specifying `overrideExisting: true`");continue}s.endpointDefinitions[S]=E;for(var O=0,T=o;O<T.length;O++){var w=T[O];w.injectEndpoint(S,E)}}return u}return u.injectEndpoints({endpoints:n.endpoints})}}function hl(t){for(var e in t)return!1;return!0}var pl=2147483647/1e3-1,vl=function(t){var e=t.reducerPath,r=t.api,n=t.context,i=t.internalState,a=r.internalActions,s=a.removeQueryResult,u=a.unsubscribeQueryResult;function o(b){var v=i.currentSubscriptions[b];return!!v&&!hl(v)}var l={},g=function(b,v,I){var S;if(u.match(b)){var E=v.getState()[e],O=b.payload.queryCacheKey;f(O,(S=E.queries[O])==null?void 0:S.endpointName,v,E.config)}if(r.util.resetApiState.match(b))for(var T=0,w=Object.entries(l);T<w.length;T++){var d=w[T],p=d[0],h=d[1];h&&clearTimeout(h),delete l[p]}if(n.hasRehydrationInfo(b))for(var E=v.getState()[e],y=n.extractRehydrationInfo(b).queries,m=0,R=Object.entries(y);m<R.length;m++){var _=R[m],O=_[0],P=_[1];f(O,P==null?void 0:P.endpointName,v,E.config)}};function f(b,v,I,S){var E,O=n.endpointDefinitions[v],T=(E=O==null?void 0:O.keepUnusedDataFor)!=null?E:S.keepUnusedDataFor;if(T!==1/0){var w=Math.max(0,Math.min(T,pl));if(!o(b)){var d=l[b];d&&clearTimeout(d),l[b]=setTimeout(function(){o(b)||I.dispatch(s({queryCacheKey:b})),delete l[b]},w*1e3)}}}return g},gl=function(t){var e=t.reducerPath,r=t.context,n=t.context.endpointDefinitions,i=t.mutationThunk,a=t.api,s=t.assertTagType,u=t.refetchQuery,o=a.internalActions.removeQueryResult,l=L.isAnyOf(L.isFulfilled(i),L.isRejectedWithValue(i)),g=function(b,v){l(b)&&f(va(b,"invalidatesTags",n,s),v),a.util.invalidateTags.match(b)&&f(hn(b.payload,void 0,void 0,void 0,void 0,s),v)};function f(b,v){var I=v.getState(),S=I[e],E=a.util.selectInvalidatedBy(I,b);r.batch(function(){for(var O,T=Array.from(E.values()),w=0,d=T;w<d.length;w++){var p=d[w].queryCacheKey,h=S.queries[p],y=(O=S.subscriptions[p])!=null?O:{};h&&(Object.keys(y).length===0?v.dispatch(o({queryCacheKey:p})):h.status!==ie.uninitialized&&v.dispatch(u(h,p)))}})}return g},ml=function(t){var e=t.reducerPath,r=t.queryThunk,n=t.api,i=t.refetchQuery,a=t.internalState,s={},u=function(v,I){(n.internalActions.updateSubscriptionOptions.match(v)||n.internalActions.unsubscribeQueryResult.match(v))&&l(v.payload,I),(r.pending.match(v)||r.rejected.match(v)&&v.meta.condition)&&l(v.meta.arg,I),(r.fulfilled.match(v)||r.rejected.match(v)&&!v.meta.condition)&&o(v.meta.arg,I),n.util.resetApiState.match(v)&&f()};function o(v,I){var S=v.queryCacheKey,E=I.getState()[e],O=E.queries[S],T=a.currentSubscriptions[S];if(!(!O||O.status===ie.uninitialized)){var w=b(T);if(Number.isFinite(w)){var d=s[S];d!=null&&d.timeout&&(clearTimeout(d.timeout),d.timeout=void 0);var p=Date.now()+w,h=s[S]={nextPollTimestamp:p,pollingInterval:w,timeout:setTimeout(function(){h.timeout=void 0,I.dispatch(i(O,S))},w)}}}}function l(v,I){var S=v.queryCacheKey,E=I.getState()[e],O=E.queries[S],T=a.currentSubscriptions[S];if(!(!O||O.status===ie.uninitialized)){var w=b(T);if(!Number.isFinite(w)){g(S);return}var d=s[S],p=Date.now()+w;(!d||p<d.nextPollTimestamp)&&o({queryCacheKey:S},I)}}function g(v){var I=s[v];I!=null&&I.timeout&&clearTimeout(I.timeout),delete s[v]}function f(){for(var v=0,I=Object.keys(s);v<I.length;v++){var S=I[v];g(S)}}function b(v){v===void 0&&(v={});var I=Number.POSITIVE_INFINITY;for(var S in v)v[S].pollingInterval&&(I=Math.min(v[S].pollingInterval,I));return I}return u},yl=function(t){var e=t.reducerPath,r=t.context,n=t.api,i=t.refetchQuery,a=t.internalState,s=n.internalActions.removeQueryResult,u=function(l,g){dn.match(l)&&o(g,"refetchOnFocus"),fn.match(l)&&o(g,"refetchOnReconnect")};function o(l,g){var f=l.getState()[e],b=f.queries,v=a.currentSubscriptions;r.batch(function(){for(var I=0,S=Object.keys(v);I<S.length;I++){var E=S[I],O=b[E],T=v[E];if(!(!T||!O)){var w=Object.values(T).some(function(d){return d[g]===!0})||Object.values(T).every(function(d){return d[g]===void 0})&&f.config[g];w&&(Object.keys(T).length===0?l.dispatch(s({queryCacheKey:E})):O.status!==ie.uninitialized&&l.dispatch(i(O,E)))}}})}return u},Ia=new Error("Promise never resolved before cacheEntryRemoved."),bl=function(t){var e=t.api,r=t.reducerPath,n=t.context,i=t.queryThunk,a=t.mutationThunk;t.internalState;var s=L.isAsyncThunkAction(i),u=L.isAsyncThunkAction(a),o=L.isFulfilled(i,a),l={},g=function(v,I,S){var E=f(v);if(i.pending.match(v)){var O=S[r].queries[E],T=I.getState()[r].queries[E];!O&&T&&b(v.meta.arg.endpointName,v.meta.arg.originalArgs,E,I,v.meta.requestId)}else if(a.pending.match(v)){var T=I.getState()[r].mutations[E];T&&b(v.meta.arg.endpointName,v.meta.arg.originalArgs,E,I,v.meta.requestId)}else if(o(v)){var w=l[E];w!=null&&w.valueResolved&&(w.valueResolved({data:v.payload,meta:v.meta.baseQueryMeta}),delete w.valueResolved)}else if(e.internalActions.removeQueryResult.match(v)||e.internalActions.removeMutationResult.match(v)){var w=l[E];w&&(delete l[E],w.cacheEntryRemoved())}else if(e.util.resetApiState.match(v))for(var d=0,p=Object.entries(l);d<p.length;d++){var h=p[d],y=h[0],w=h[1];delete l[y],w.cacheEntryRemoved()}};function f(v){return s(v)?v.meta.arg.queryCacheKey:u(v)?v.meta.requestId:e.internalActions.removeQueryResult.match(v)?v.payload.queryCacheKey:e.internalActions.removeMutationResult.match(v)?Bt(v.payload):""}function b(v,I,S,E,O){var T=n.endpointDefinitions[v],w=T==null?void 0:T.onCacheEntryAdded;if(w){var d={},p=new Promise(function(P){d.cacheEntryRemoved=P}),h=Promise.race([new Promise(function(P){d.valueResolved=P}),p.then(function(){throw Ia})]);h.catch(function(){}),l[S]=d;var y=e.endpoints[v].select(T.type===Ne.query?I:S),m=E.dispatch(function(P,C,A){return A}),R=De(oe({},E),{getCacheEntry:function(){return y(E.getState())},requestId:O,extra:m,updateCachedData:T.type===Ne.query?function(P){return E.dispatch(e.util.updateQueryData(v,I,P))}:void 0,cacheDataLoaded:h,cacheEntryRemoved:p}),_=w(I,R);Promise.resolve(_).catch(function(P){if(P!==Ia)throw P})}}return g},_l=function(t){var e=t.api,r=t.context,n=t.queryThunk,i=t.mutationThunk,a=L.isPending(n,i),s=L.isRejected(n,i),u=L.isFulfilled(n,i),o={},l=function(g,f){var b,v,I;if(a(g)){var S=g.meta,E=S.requestId,O=S.arg,T=O.endpointName,w=O.originalArgs,d=r.endpointDefinitions[T],p=d==null?void 0:d.onQueryStarted;if(p){var h={},y=new Promise(function(x,B){h.resolve=x,h.reject=B});y.catch(function(){}),o[E]=h;var m=e.endpoints[T].select(d.type===Ne.query?w:E),R=f.dispatch(function(x,B,U){return U}),_=De(oe({},f),{getCacheEntry:function(){return m(f.getState())},requestId:E,extra:R,updateCachedData:d.type===Ne.query?function(x){return f.dispatch(e.util.updateQueryData(T,w,x))}:void 0,queryFulfilled:y});p(w,_)}}else if(u(g)){var P=g.meta,E=P.requestId,C=P.baseQueryMeta;(b=o[E])==null||b.resolve({data:g.payload,meta:C}),delete o[E]}else if(s(g)){var A=g.meta,E=A.requestId,N=A.rejectedWithValue,C=A.baseQueryMeta;(I=o[E])==null||I.reject({error:(v=g.payload)!=null?v:g.error,isUnhandledError:!N,meta:C}),delete o[E]}};return l},Il=function(t){var e=t.api,r=t.context.apiUid,n=t.reducerPath;return function(i,a){var s,u;e.util.resetApiState.match(i)&&a.dispatch(e.internalActions.middlewareRegistered(r)),typeof process<"u"&&process.env.NODE_ENV==="development"&&e.internalActions.middlewareRegistered.match(i)&&i.payload===r&&((u=(s=a.getState()[n])==null?void 0:s.config)==null?void 0:u.middlewareRegistered)==="conflict"&&console.warn('There is a mismatch between slice and middleware for the reducerPath "'+n+`".
You can only have one api per reducer path, this will lead to crashes in various situations!`+(n==="api"?`
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!`:""))}},wa,wl=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis):function(t){return(wa||(wa=Promise.resolve())).then(t).catch(function(e){return setTimeout(function(){throw e},0)})},Sl=function(t){var e=t.api,r=t.queryThunk,n=t.internalState,i=e.reducerPath+"/subscriptions",a=null,s=!1,u=e.internalActions,o=u.updateSubscriptionOptions,l=u.unsubscribeQueryResult,g=function(f,b){var v,I,S,E,O,T,w,d,p;if(o.match(b)){var h=b.payload,y=h.queryCacheKey,m=h.requestId,R=h.options;return(v=f==null?void 0:f[y])!=null&&v[m]&&(f[y][m]=R),!0}if(l.match(b)){var _=b.payload,y=_.queryCacheKey,m=_.requestId;return f[y]&&delete f[y][m],!0}if(e.internalActions.removeQueryResult.match(b))return delete f[b.payload.queryCacheKey],!0;if(r.pending.match(b)){var P=b.meta,C=P.arg,m=P.requestId;if(C.subscribe){var A=(S=f[I=C.queryCacheKey])!=null?S:f[I]={};return A[m]=(O=(E=C.subscriptionOptions)!=null?E:A[m])!=null?O:{},!0}}if(r.rejected.match(b)){var N=b.meta,x=N.condition,C=N.arg,m=N.requestId;if(x&&C.subscribe){var A=(w=f[T=C.queryCacheKey])!=null?w:f[T]={};return A[m]=(p=(d=C.subscriptionOptions)!=null?d:A[m])!=null?p:{},!0}}return!1};return function(f,b){var v,I;if(a||(a=JSON.parse(JSON.stringify(n.currentSubscriptions))),e.util.resetApiState.match(f))return a=n.currentSubscriptions={},[!0,!1];if(e.internalActions.internal_probeSubscription.match(f)){var S=f.payload,E=S.queryCacheKey,O=S.requestId,T=!!((v=n.currentSubscriptions[E])!=null&&v[O]);return[!1,T]}var w=g(n.currentSubscriptions,f);if(w){s||(wl(function(){var y=JSON.parse(JSON.stringify(n.currentSubscriptions)),m=Xi(a,function(){return y}),R=m[1];b.next(e.internalActions.subscriptionsUpdated(R)),a=y,s=!1}),s=!0);var d=!!((I=f.type)!=null&&I.startsWith(i)),p=r.rejected.match(f)&&f.meta.condition&&!!f.meta.arg.subscribe,h=!d&&!p;return[h,!1]}return[!0,!1]}};function El(t){var e=t.reducerPath,r=t.queryThunk,n=t.api,i=t.context,a=i.apiUid,s={invalidateTags:L.createAction(e+"/invalidateTags")},u=function(f){return!!f&&typeof f.type=="string"&&f.type.startsWith(e+"/")},o=[Il,vl,gl,ml,bl,_l],l=function(f){var b=!1,v={currentSubscriptions:{}},I=De(oe({},t),{internalState:v,refetchQuery:g}),S=o.map(function(T){return T(I)}),E=Sl(I),O=yl(I);return function(T){return function(w){b||(b=!0,f.dispatch(n.internalActions.middlewareRegistered(a)));var d=De(oe({},f),{next:T}),p=f.getState(),h=E(w,d,p),y=h[0],m=h[1],R;if(y?R=T(w):R=m,f.getState()[e]&&(O(w,d,p),u(w)||i.hasRehydrationInfo(w)))for(var _=0,P=S;_<P.length;_++){var C=P[_];C(w,d,p)}return R}}};return{middleware:l,actions:s};function g(f,b,v){return v===void 0&&(v={}),r(oe({type:"query",endpointName:f.endpointName,originalArgs:f.originalArgs,subscribe:!1,forceRefetch:!0,queryCacheKey:b},v))}}function Ye(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];Object.assign.apply(Object,pr([t],e))}var Sa=Symbol(),Tl=function(){return{name:Sa,init:function(t,e,r){var n=e.baseQuery,i=e.tagTypes,a=e.reducerPath,s=e.serializeQueryArgs,u=e.keepUnusedDataFor,o=e.refetchOnMountOrArgChange,l=e.refetchOnFocus,g=e.refetchOnReconnect;Lc();var f=function(H){return typeof process<"u"&&process.env.NODE_ENV==="development"&&(i.includes(H.type)||console.error("Tag type '"+H.type+"' was used, but not specified in `tagTypes`!")),H};Object.assign(t,{reducerPath:a,endpoints:{},internalActions:{onOnline:fn,onOffline:fa,onFocus:dn,onFocusLost:da},util:{}});var b=cl({baseQuery:n,reducerPath:a,context:r,api:t,serializeQueryArgs:s,assertTagType:f}),v=b.queryThunk,I=b.mutationThunk,S=b.patchQueryData,E=b.updateQueryData,O=b.upsertQueryData,T=b.prefetch,w=b.buildMatchThunkActions,d=ll({context:r,queryThunk:v,mutationThunk:I,reducerPath:a,assertTagType:f,config:{refetchOnFocus:l,refetchOnReconnect:g,refetchOnMountOrArgChange:o,keepUnusedDataFor:u,reducerPath:a}}),p=d.reducer,h=d.actions;Ye(t.util,{patchQueryData:S,updateQueryData:E,upsertQueryData:O,prefetch:T,resetApiState:h.resetApiState}),Ye(t.internalActions,h);var y=El({reducerPath:a,context:r,queryThunk:v,mutationThunk:I,api:t,assertTagType:f}),m=y.middleware,R=y.actions;Ye(t.util,R),Ye(t,{reducer:p,middleware:m});var _=dl({serializeQueryArgs:s,reducerPath:a}),P=_.buildQuerySelector,C=_.buildMutationSelector,A=_.selectInvalidatedBy;Ye(t.util,{selectInvalidatedBy:A});var N=ul({queryThunk:v,mutationThunk:I,api:t,serializeQueryArgs:s,context:r}),x=N.buildInitiateQuery,B=N.buildInitiateMutation,U=N.getRunningMutationThunk,j=N.getRunningMutationsThunk,K=N.getRunningQueriesThunk,W=N.getRunningQueryThunk,z=N.getRunningOperationPromises,J=N.removalWarning;return Ye(t.util,{getRunningOperationPromises:z,getRunningOperationPromise:J,getRunningMutationThunk:U,getRunningMutationsThunk:j,getRunningQueryThunk:W,getRunningQueriesThunk:K}),{name:Sa,injectEndpoint:function(H,Y){var Q,X,ae=t;(X=(Q=ae.endpoints)[H])!=null||(Q[H]={}),ha(Y)?Ye(ae.endpoints[H],{name:H,select:P(H,Y),initiate:x(H,Y)},w(v,H)):sl(Y)&&Ye(ae.endpoints[H],{name:H,select:C(),initiate:B(H)},w(I,H))}}}}},Ol=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t},Rl=Object.defineProperty,Pl=Object.defineProperties,Al=Object.getOwnPropertyDescriptors,Ea=Object.getOwnPropertySymbols,Cl=Object.prototype.hasOwnProperty,kl=Object.prototype.propertyIsEnumerable,Ta=function(t,e,r){return e in t?Rl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},Ve=function(t,e){for(var r in e||(e={}))Cl.call(e,r)&&Ta(t,r,e[r]);if(Ea)for(var n=0,i=Ea(e);n<i.length;n++){var r=i[n];kl.call(e,r)&&Ta(t,r,e[r])}return t},br=function(t,e){return Pl(t,Al(e))};function Oa(t,e,r,n){var i=F.useMemo(function(){return{queryArgs:t,serialized:typeof t=="object"?e({queryArgs:t,endpointDefinition:r,endpointName:n}):t}},[t,e,r,n]),a=F.useRef(i);return F.useEffect(function(){a.current.serialized!==i.serialized&&(a.current=i)},[i]),a.current.serialized===i.serialized?a.current.queryArgs:t}var mn=Symbol();function yn(t){var e=F.useRef(t);return F.useEffect(function(){Me.shallowEqual(e.current,t)||(e.current=t)},[t]),Me.shallowEqual(e.current,t)?e.current:t}var _r=WeakMap?new WeakMap:void 0,Dl=function(t){var e=t.endpointName,r=t.queryArgs,n="",i=_r==null?void 0:_r.get(r);if(typeof i=="string")n=i;else{var a=JSON.stringify(r,function(s,u){return L.isPlainObject(u)?Object.keys(u).sort().reduce(function(o,l){return o[l]=u[l],o},{}):u});L.isPlainObject(r)&&(_r==null||_r.set(r,a)),n=a}return e+"("+n+")"},Nl=typeof window<"u"&&window.document&&window.document.createElement?F.useLayoutEffect:F.useEffect,xl=function(t){return t},Ml=function(t){return t.isUninitialized?br(Ve({},t),{isUninitialized:!1,isFetching:!0,isLoading:t.data===void 0,status:ie.pending}):t};function Ll(t){var e=t.api,r=t.moduleOptions,n=r.batch,i=r.useDispatch,a=r.useSelector,s=r.useStore,u=r.unstable__sideEffectsInRender,o=t.serializeQueryArgs,l=t.context,g=u?function(S){return S()}:F.useEffect;return{buildQueryHooks:v,buildMutationHook:I,usePrefetch:b};function f(S,E,O){if(E!=null&&E.endpointName&&S.isUninitialized){var T=E.endpointName,w=l.endpointDefinitions[T];o({queryArgs:E.originalArgs,endpointDefinition:w,endpointName:T})===o({queryArgs:O,endpointDefinition:w,endpointName:T})&&(E=void 0)}var d=S.isSuccess?S.data:E==null?void 0:E.data;d===void 0&&(d=S.data);var p=d!==void 0,h=S.isLoading,y=!p&&h,m=S.isSuccess||h&&p;return br(Ve({},S),{data:d,currentData:S.data,isFetching:h,isLoading:y,isSuccess:m})}function b(S,E){var O=i(),T=yn(E);return F.useCallback(function(w,d){return O(e.util.prefetch(S,w,Ve(Ve({},T),d)))},[S,O,T])}function v(S){var E=function(w,d){var p=d===void 0?{}:d,h=p.refetchOnReconnect,y=p.refetchOnFocus,m=p.refetchOnMountOrArgChange,R=p.skip,_=R===void 0?!1:R,P=p.pollingInterval,C=P===void 0?0:P,A=e.endpoints[S].initiate,N=i(),x=Oa(_?at:w,Dl,l.endpointDefinitions[S],S),B=yn({refetchOnReconnect:h,refetchOnFocus:y,pollingInterval:C}),U=F.useRef(!1),j=F.useRef(),K=j.current||{},W=K.queryCacheKey,z=K.requestId,J=!1;if(W&&z){var H=N(e.internalActions.internal_probeSubscription({queryCacheKey:W,requestId:z}));if(process.env.NODE_ENV!=="production"&&typeof H!="boolean")throw new Error('Warning: Middleware for RTK-Query API at reducerPath "'+e.reducerPath+`" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);J=!!H}var Y=!J&&U.current;return g(function(){U.current=J}),g(function(){Y&&(j.current=void 0)},[Y]),g(function(){var Q,X=j.current;if(typeof process<"u"&&process.env.NODE_ENV==="removeMeOnCompilation"&&console.log(Y),x===at){X==null||X.unsubscribe(),j.current=void 0;return}var ae=(Q=j.current)==null?void 0:Q.subscriptionOptions;if(!X||X.arg!==x){X==null||X.unsubscribe();var ve=N(A(x,{subscriptionOptions:B,forceRefetch:m}));j.current=ve}else B!==ae&&X.updateSubscriptionOptions(B)},[N,A,m,x,B,Y]),F.useEffect(function(){return function(){var Q;(Q=j.current)==null||Q.unsubscribe(),j.current=void 0}},[]),F.useMemo(function(){return{refetch:function(){var Q;if(!j.current)throw new Error("Cannot refetch a query that has not been started yet.");return(Q=j.current)==null?void 0:Q.refetch()}}},[])},O=function(w){var d=w===void 0?{}:w,p=d.refetchOnReconnect,h=d.refetchOnFocus,y=d.pollingInterval,m=y===void 0?0:y,R=e.endpoints[S].initiate,_=i(),P=F.useState(mn),C=P[0],A=P[1],N=F.useRef(),x=yn({refetchOnReconnect:p,refetchOnFocus:h,pollingInterval:m});g(function(){var j,K,W=(j=N.current)==null?void 0:j.subscriptionOptions;x!==W&&((K=N.current)==null||K.updateSubscriptionOptions(x))},[x]);var B=F.useRef(x);g(function(){B.current=x},[x]);var U=F.useCallback(function(j,K){K===void 0&&(K=!1);var W;return n(function(){var z;(z=N.current)==null||z.unsubscribe(),N.current=W=_(R(j,{subscriptionOptions:B.current,forceRefetch:!K})),A(j)}),W},[_,R]);return F.useEffect(function(){return function(){var j;(j=N==null?void 0:N.current)==null||j.unsubscribe()}},[]),F.useEffect(function(){C!==mn&&!N.current&&U(C,!0)},[C,U]),F.useMemo(function(){return[U,C]},[U,C])},T=function(w,d){var p=d===void 0?{}:d,h=p.skip,y=h===void 0?!1:h,m=p.selectFromResult,R=e.endpoints[S].select,_=Oa(y?at:w,o,l.endpointDefinitions[S],S),P=F.useRef(),C=F.useMemo(function(){return L.createSelector([R(_),function(U,j){return j},function(U){return _}],f)},[R,_]),A=F.useMemo(function(){return m?L.createSelector([C],m):C},[C,m]),N=a(function(U){return A(U,P.current)},Me.shallowEqual),x=s(),B=C(x.getState(),P.current);return Nl(function(){P.current=B},[B]),N};return{useQueryState:T,useQuerySubscription:E,useLazyQuerySubscription:O,useLazyQuery:function(w){var d=O(w),p=d[0],h=d[1],y=T(h,br(Ve({},w),{skip:h===mn})),m=F.useMemo(function(){return{lastArg:h}},[h]);return F.useMemo(function(){return[p,y,m]},[p,y,m])},useQuery:function(w,d){var p=E(w,d),h=T(w,Ve({selectFromResult:w===at||d!=null&&d.skip?void 0:Ml},d)),y=h.data,m=h.status,R=h.isLoading,_=h.isSuccess,P=h.isError,C=h.error;return F.useDebugValue({data:y,status:m,isLoading:R,isSuccess:_,isError:P,error:C}),F.useMemo(function(){return Ve(Ve({},h),p)},[h,p])}}}function I(S){return function(E){var O=E===void 0?{}:E,T=O.selectFromResult,w=T===void 0?xl:T,d=O.fixedCacheKey,p=e.endpoints[S],h=p.select,y=p.initiate,m=i(),R=F.useState(),_=R[0],P=R[1];F.useEffect(function(){return function(){_!=null&&_.arg.fixedCacheKey||_==null||_.reset()}},[_]);var C=F.useCallback(function(X){var ae=m(y(X,{fixedCacheKey:d}));return P(ae),ae},[m,y,d]),A=(_||{}).requestId,N=F.useMemo(function(){return L.createSelector([h({fixedCacheKey:d,requestId:_==null?void 0:_.requestId})],w)},[h,_,w,d]),x=a(N,Me.shallowEqual),B=d==null?_==null?void 0:_.arg.originalArgs:void 0,U=F.useCallback(function(){n(function(){_&&P(void 0),d&&m(e.internalActions.removeMutationResult({requestId:A,fixedCacheKey:d}))})},[m,d,_,A]),j=x.endpointName,K=x.data,W=x.status,z=x.isLoading,J=x.isSuccess,H=x.isError,Y=x.error;F.useDebugValue({endpointName:j,data:K,status:W,isLoading:z,isSuccess:J,isError:H,error:Y});var Q=F.useMemo(function(){return br(Ve({},x),{originalArgs:B,reset:U})},[x,B,U]);return F.useMemo(function(){return[C,Q]},[C,Q])}}}var Ir;(function(t){t.query="query",t.mutation="mutation"})(Ir||(Ir={}));function Fl(t){return t.type===Ir.query}function Ul(t){return t.type===Ir.mutation}function bn(t){return t.replace(t[0],t[0].toUpperCase())}function wr(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];Object.assign.apply(Object,Ol([t],e))}var jl=Symbol(),Bl=function(t){var e=t===void 0?{}:t,r=e.batch,n=r===void 0?Me.batch:r,i=e.useDispatch,a=i===void 0?Me.useDispatch:i,s=e.useSelector,u=s===void 0?Me.useSelector:s,o=e.useStore,l=o===void 0?Me.useStore:o,g=e.unstable__sideEffectsInRender,f=g===void 0?!1:g;return{name:jl,init:function(b,v,I){var S=v.serializeQueryArgs,E=b,O=Ll({api:b,moduleOptions:{batch:n,useDispatch:a,useSelector:u,useStore:l,unstable__sideEffectsInRender:f},serializeQueryArgs:S,context:I}),T=O.buildQueryHooks,w=O.buildMutationHook,d=O.usePrefetch;return wr(E,{usePrefetch:d}),wr(I,{batch:n}),{injectEndpoint:function(p,h){if(Fl(h)){var y=T(p),m=y.useQuery,R=y.useLazyQuery,_=y.useLazyQuerySubscription,P=y.useQueryState,C=y.useQuerySubscription;wr(E.endpoints[p],{useQuery:m,useLazyQuery:R,useLazyQuerySubscription:_,useQueryState:P,useQuerySubscription:C}),b["use"+bn(p)+"Query"]=m,b["useLazy"+bn(p)+"Query"]=R}else if(Ul(h)){var A=w(p);wr(E.endpoints[p],{useMutation:A}),b["use"+bn(p)+"Mutation"]=A}}}}}},ql=fl(Tl(),Bl());const Vl=al({prepareHeaders:(t,{getState:e,endpoint:r})=>{const{isAuthenticated:n,refresh_token:i}=e().userReducer;return n&&i&&r==="updateLogin"&&t.set(ee.refreshTokenHeader,ee.keywordRefreshTokenHeader?`${ee.keywordRefreshTokenHeader} ${i}`:i),t.set("Content-Type","application/json")}}),st=ql({baseQuery:async(t,e,r)=>{const n=ee.endpoint,i=typeof t=="string"?n:{...t,url:n+t.url};return Vl(i,e,r)},endpoints:t=>({login:t.mutation({query({email:e,encodedBody:r,password:n,username:i,token:a}){if(a)return{url:"",method:"POST",headers:{Authorization:`${ee.keyword} ${a}`}};if(r)return{url:ee.urlLoginForBase64??"",method:"POST",headers:{authorization:"Basic "+r}};let s={};return n&&(s={...s,password:n}),e&&(s={...s,email:e}),i&&(s={...s,username:i}),{url:ee.urlLoginForEmailOrUser??"",method:"POST",body:s}}}),signIn:t.mutation({query({body:e,encodedBody:r}){return r?{url:ee.urlSignInForBase64??"sign-in",method:"POST",body:e}:{url:ee.urlSignIn??"sign-in",method:"POST",body:e}}}),updateLogin:t.mutation({query(){return{url:ee.urlForRefreshToken??"login/update",method:"PUT"}}}),passwordReset:t.mutation({query(e){return{url:ee.urlForPasswordReset??"reset-password",method:"POST",body:e}}})})}),{useLoginMutation:Hl,useUpdateLoginMutation:Wl,usePasswordResetMutation:zl,useSignInMutation:Ql}=st,Vd="",Kl=({children:t,title:e,isLoading:r,scrollPosition:n,language:i,toastMessage:a})=>{const s=fe.useSignal(""),u=fe.useSignal({}),[o,{isSuccess:l,isLoading:g,error:f}]=zl(),{closeAction:b,isOpen:v,message:I}=F.useContext(Ht),S=F.useRef(null),E=O=>{O.preventDefault(),!l&&o({email:s.value})};return F.useEffect(()=>{S.current&&(v?S.current.showModal():S.current.close())},[v]),F.useEffect(()=>{if(S.current){const O=S.current.offsetWidth;S.current.scrollTo(n.value?O:0,0)}},[n.value]),F.useEffect(()=>{f?"data"in f?u.value={code:"auth/password-reset-error",message:f.data&&(Object.values(f.data).find(O=>typeof O=="string")??f.data)}:"status"in f&&(u.value={code:"auth/fetch-failed",message:"error"in f?f.error:"Unexpected Error"}):u.value.message&&(u.value={})},[f]),F.useEffect(()=>{l&&(a.value=i.forgotPasswordLabel)},[l]),k.jsxs("dialog",{ref:S,className:"modal-container mandatory-scroll-snapping",children:[k.jsxs("section",{className:"modal-data",children:[b&&k.jsx("button",{onClick:()=>typeof b=="function"?b(O=>!O):b.value=!b.value,className:"modal-close",children:"X"}),k.jsx("header",{className:"modal-title",children:k.jsx("label",{children:e})}),k.jsx("main",{className:"modal-message",children:r?k.jsx(Ra,{}):typeof I=="string"?k.jsx("p",{children:I}):I}),k.jsx("footer",{className:"modal-footer",children:t})]}),k.jsxs("section",{className:"password-recovery",children:[k.jsx("span",{className:"go-back",onClick:()=>n.value=!1,children:"<"}),k.jsxs("form",{onSubmit:E,children:[k.jsx("h3",{children:i.forgotPasswordLabel}),k.jsxs("label",{children:["Email:",k.jsx("input",{required:!0,onChange:O=>s.value=O.currentTarget.value,value:s.value,type:"email"})]}),k.jsx("button",{className:"is-btn blue",children:i.submit})]}),k.jsx(Na,{error:u.value}),g&&k.jsx(Ra,{})]}),a.value&&k.jsxs("div",{className:"simple-toast show",children:[k.jsx("button",{onClick:()=>a.value=void 0,children:"X"}),k.jsx("div",{className:"toast-message",children:a})]})]})},Hd="",Ra=()=>k.jsx("div",{className:"loader-container",children:k.jsxs("div",{className:"loader-box",children:[k.jsx("div",{className:"load blue"}),k.jsx("div",{className:"load red"}),k.jsx("div",{className:"load orange"}),k.jsx("div",{className:"load yellow"}),k.jsx("div",{className:"load green"})]})}),Wd="",Gl=(t,e)=>{var r;return((r=t.find(n=>n.code==="*"?!0:n.code===e.code))==null?void 0:r.message)??e.message},Pa="IS_GOOGLE",Aa="IS_FACEBOOK",Ca="IS_TWITTER",ka="IS_GITHUB",Da="IS_MICROSOFT",$l=()=>k.jsx("svg",{width:"98",height:"96",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 98 96",children:k.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",fill:"#fff"})}),Jl=()=>k.jsx("svg",{version:"1.1",id:"Logo",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 248 204",xmlSpace:"preserve",children:k.jsx("g",{id:"Logo_1_",children:k.jsx("path",{id:"white_background",fill:"#FFFFFF",d:`M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
                    C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
                    c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
                    c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
                    c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
                    c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z`})})}),Yl=()=>k.jsxs("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 40 40",xmlSpace:"preserve",children:[k.jsx("path",{fill:"#1877F2",d:"M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z"}),k.jsx("path",{fill:"#FFFFFF",d:`M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20
            h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z`})]}),Xl=[{method:"google",constName:Pa,name:"Google",className:"google-btn"},{method:"facebook",constName:Aa,name:"Facebook",className:"facebook-btn",icon:k.jsx(Yl,{})},{method:"twitter",constName:Ca,name:"Twitter",className:"twitter-btn",icon:k.jsx(Jl,{})},{method:"github",constName:ka,name:"GitHub",className:"github-btn",icon:k.jsx($l,{})},{method:"microsoft",constName:Da,name:"Microsoft",className:"microsoft-btn"}],Zl=t=>Xl.filter(e=>t.find(r=>e.method===r)),ed={es:{logIn:"Iniciar sesión",username:"Usuario",password:"Contraseña",confirm_password:"Confirmar contraseña",continue:"Continuar",submit:"Enviar",continueAs:"Continuar como:",loggedWith:"Logueado con",logOut:"Desloguearse",forgotPassword:"Recuperar contraseña",forgotPasswordLabel:"Email enviado correctamente.",signIn:"Crear cuenta",passwordNotMatch:"Las contraseñas no coinciden",minLength:"La contraseña debe contener mínimo 8 caracteres"},en:{logIn:"Log In",username:"Username",password:"Password",confirm_password:"Confirm Password",continue:"Continue",submit:"Submit",continueAs:"Continue as:",loggedWith:"Logged with",logOut:"Log Out",forgotPassword:"Password Recovery",forgotPasswordLabel:"Email sended successfully.",signIn:"Create account",passwordNotMatch:"Passwords do not match",minLength:"Passwords should contain a minimum of 8 characters"}},td=t=>ed[t],rd=()=>{const t=fe.useSignal(void 0),e=fe.useSignal(void 0),r=fe.useSignal(void 0);let n=F.useRef(void 0);const i=F.useCallback(a=>a(t,n,e,r),[]);return F.useEffect(()=>()=>{n.current&&clearInterval(n.current)},[]),{user:t.value,updateError:e.value,logOut:r.value,authManager:i}};var yt=(t=>(t.LOGIN="login",t.SIGN_IN="signIn",t))(yt||{});const nd=t=>Mt($e(),Hi).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),id=t=>Mt($e(),Vi).catch(e=>{console.log(e);const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),ad=t=>Mt($e(),Rc).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),sd=t=>Mt($e(),Pc).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),od=t=>Mt($e(),Ac).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),ud=1e3,cd=5e3,ld={login:{email:"",password:"",username:""},signIn:{email:"",username:"",password1:"",password2:""}},dd=(t,e)=>{let r="";const{password1:n,password2:i}=t;return n.length>0&&n.length<8?r=e.minLength:i.length>0&&i!==n&&(r=e.passwordNotMatch),r},fd=(t,e,r,n)=>{const[i]=Hl(),[a]=Ql(),[s]=Wl(),u=fe.useSignal(ld),o=fe.useSignal(!1),l=fe.useSignal(!1),g=fe.useSignal(!1),f=fe.useSignal({}),b=()=>{fe.batch(()=>{o.value=!o.value,l.value&&(l.value=!l.value)})},v=w=>{const{target:d}=w,p=d.getAttribute("data-section")??yt.LOGIN;if(u.value={...u.value,[p]:{...u.value[p],[d.name]:d.value}},p===yt.SIGN_IN){const h=dd(u.value[p],r);h?f.value={code:"sign-in/password",message:h}:f.value={}}},I=w=>{if(ee.hasToS&&!o.value){l.value=!0;return}g.value=!0,O(w,()=>g.value=!1)},S=async w=>{if(w.preventDefault(),f.value={},ee.hasToS&&!o.value){l.value=!0;return}if(g.value)return;g.value=!0;const d=w.currentTarget.getAttribute("data-section")??yt.LOGIN;let p={};if(d===yt.LOGIN){if(ee.acceptUsername?p={username:u.value[d].username,password:u.value[d].password}:p={email:u.value[d].email,password:u.value[d].password},ee.bodyAsBase64){const h=Object.entries(p).map(([m,R])=>`${m}=${R}`).join("&");p={encodedBody:btoa(h)}}i(p).unwrap().then(E).catch(h=>{"data"in h?f.value={code:"auth/firebase-credential-not-provided",message:h.data&&(Object.values(h.data).find(y=>typeof y=="string")??h.data)}:"status"in h&&(f.value={code:"auth/fetch-failed",message:"error"in h?h.error:"Unexpected Error"})}).finally(()=>g.value=!1)}else if(d===yt.SIGN_IN){let h=u.value[d];if(ee.bodyAsBase64){const y=Object.entries(h).map(([m,R])=>`${m}=${R}`).join("&");h=btoa(y)}a({body:h,encodedBody:ee.bodyAsBase64}).unwrap().then(E).catch(y=>{"data"in y?f.value={code:"auth/firebase-credential-not-provided",message:y.data&&(Object.values(y.data).find(m=>typeof m=="string")??y.data)}:"status"in y&&(f.value={code:"auth/fetch-failed",message:"error"in y?y.error:"Unexpected Error"})}).finally(()=>g.value=!1)}},E=w=>{t(async(d,p,h,y)=>{if(clearInterval(p.current),p.current=void 0,w.message){n.value=w.message;return}p.current=setInterval(()=>{s().unwrap().then(m=>d.value=m).catch(m=>{d.value=void 0,clearInterval(p.current),"data"in m?h.value={code:"auth/firebase-credential-not-provided",message:m.data&&(Object.values(m.data).find(R=>typeof R=="string")??m.data)}:"status"in m&&(h.value={code:"auth/fetch-failed",message:"error"in m?m.error:"Unexpected Error"})})},w.expiry*ud-cd),d.value=w,y.value=async()=>{await _i($e()).finally(()=>clearInterval(p.current)),y.value=void 0}}),!w.message&&(typeof e=="function"?e(d=>!d):e.value=!e.value)},O=async(w,d)=>{i({token:w}).unwrap().then(E).catch(p=>{"data"in p?f.value={code:"auth/firebase-credential-not-provided",message:p.data&&(Object.values(p.data).find(h=>typeof h=="string")??p.data)}:"status"in p&&(f.value={code:"auth/fetch-failed",message:"error"in p?p.error:"Unexpected Error"})}).finally(d)};return{form:u,radio:o,isLoading:g,handleError:f,confirmTp:l,handleChange:v,handleRadio:b,handleSocialLogin:async w=>{if(ee.hasToS&&!o.value){l.value=!0;return}if(!g.value){switch(g.value=!0,w){case Pa:await id(f).then(async d=>{d&&(Re.credentialFromResult(d)===null&&(f.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),d.user.getIdToken().then(O))});break;case Aa:await nd(f).then(async d=>{d&&(Oe.credentialFromResult(d)===null&&(f.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),d.user.getIdToken().then(O))});break;case Ca:await ad(f).then(async d=>{d&&(Ae.credentialFromResult(d)===null&&(f.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),d.user.getIdToken().then(O))});break;case ka:await sd(f).then(async d=>{d&&(Pe.credentialFromResult(d)===null&&(f.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),d.user.getIdToken().then(O))});break;case Da:await od(f).then(async d=>{d&&(pt.credentialFromResult(d)===null&&(f.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),d.user.getIdToken().then(O))});break}g.value=!1}},handleSubmit:S,handleSubmitUserAlreadyLogged:I,handleToken:O}},hd=()=>{const t=fe.useSignal(!1),e=fe.useSignal(void 0),r=fe.useSignal(void 0),{closeAction:n,authManager:i,isOpen:a}=F.useContext(Ht),s=td(ee.language),{form:u,radio:o,confirmTp:l,isLoading:g,handleError:f,handleSubmit:b,handleSubmitUserAlreadyLogged:v,handleChange:I,handleRadio:S,handleSocialLogin:E}=fd(i,n,s,e);return F.useEffect(()=>{a||(f.value={})},[a]),F.useEffect(()=>{a&&(async()=>{g.value=!0;let T=du($e(),async w=>{w&&await w.getIdToken().then(d=>{const p=w.providerData[0];r.value={...p,providerId:p.providerId.split(".")[0],tokenId:d}}).finally(()=>g.value=!1),g.value=!1,T()})})()},[a]),k.jsx(Kl,{title:s.logIn,isLoading:g.value,scrollPosition:t,language:s,toastMessage:e,children:k.jsxs("div",{className:"login-container",children:[k.jsxs("div",{className:"login",children:[k.jsx(pd,{handleSocialLogin:E}),k.jsx(vd,{forgotPassword:t,form:u,handleChange:I,handleSubmit:b,language:s})]}),k.jsx(Na,{error:f.value}),k.jsx(gd,{alreadyUser:r,language:s,handleSubmitUserAlreadyLogged:v}),k.jsx(md,{confirmTp:l.value,handleRadio:S,radioValue:o.value})]})})},pd=({handleSocialLogin:t})=>k.jsx("div",{children:Zl(ee.signInMethods).map(({className:e,name:r,constName:n,icon:i},a)=>k.jsxs("button",{onClick:()=>t(n),className:e,children:[i&&i,r]},a))}),vd=({handleSubmit:t,language:e,handleChange:r,form:n,forgotPassword:i})=>{const a=fe.useSignal(!0),s=F.useRef(null);return F.useEffect(()=>{if(s.current){const u=s.current.offsetWidth;s.current.scrollTo(a.value?0:u,0)}},[a.value]),k.jsx("div",{children:k.jsxs("section",{ref:s,className:"form-email mandatory-scroll-snapping",children:[k.jsxs("form",{className:"form-field",autoComplete:"on","data-section":"login",onSubmit:t,children:[ee.acceptUsername?k.jsx(k.Fragment,{children:k.jsx("input",{required:!0,"data-section":"login",autoComplete:"username",placeholder:`Email | ${e.username}`,name:"username",onChange:r,value:n.value.login.username,type:"text"})}):k.jsx(k.Fragment,{children:k.jsx("input",{required:!0,"data-section":"login",autoComplete:"email",placeholder:"Email",name:"email",onChange:r,value:n.value.login.email,type:"email"})}),k.jsx("input",{required:!0,"data-section":"login",autoComplete:"current-password",placeholder:e.password,name:"password",onChange:r,value:n.value.login.password,type:"password"}),k.jsx("span",{onClick:()=>i.value=!0,className:"forgot-password",children:e.forgotPassword}),k.jsx("button",{className:"email-login",children:e.logIn}),k.jsx("span",{onClick:()=>a.value=!1,className:"form-action-change",children:e.signIn})]}),k.jsxs("form",{className:"form-field",autoComplete:"on","data-section":"signIn",onSubmit:t,children:[k.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:"Email",name:"email",onChange:r,value:n.value.signIn.email,type:"email"}),k.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:`${e.username}`,name:"username",onChange:r,value:n.value.signIn.username,type:"text"}),k.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:e.password,name:"password1",onChange:r,value:n.value.signIn.password1,type:"password"}),k.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:e.confirm_password,name:"password2",onChange:r,value:n.value.signIn.password2,type:"password"}),k.jsx("button",{className:"email-login",children:e.signIn}),k.jsx("span",{onClick:()=>a.value=!0,className:"form-action-change",children:e.logIn})]})]})})},gd=({alreadyUser:t,language:e,handleSubmitUserAlreadyLogged:r})=>{const n=()=>{_i($e()).finally(()=>t.value=void 0)};return k.jsx(k.Fragment,{children:t.value&&k.jsxs("section",{className:"user-already-logged",children:[k.jsxs("p",{children:[e.continueAs," ",t.value.displayName,t.value.photoURL&&k.jsx("img",{src:t.value.photoURL,alt:"user image"}),k.jsxs("span",{children:[e.loggedWith," ",t.value.providerId]})]}),k.jsxs("div",{className:"user-logged-choice",children:[k.jsx("button",{onClick:()=>{var i;return r(((i=t.value)==null?void 0:i.tokenId)??"")},className:"choice-ok",children:"Ok"}),k.jsx("button",{onClick:n,className:"choice-not",children:e.logOut})]})]})})},md=({confirmTp:t,handleRadio:e,radioValue:r})=>{const{closeAction:n}=F.useContext(Ht),i=F.useRef(null),a=()=>typeof n=="function"?n(s=>!s):n.value=!n.value;return F.useEffect(()=>{t&&i.current&&i.current.scrollIntoView({behavior:"smooth"})},[t]),k.jsx("section",{children:ee.hasToS&&k.jsxs(k.Fragment,{children:[k.jsxs("label",{className:"login-accept",children:[k.jsx("input",{onChange:e,type:"checkbox",checked:r}),ee.hasToS.label(a)]}),t&&k.jsx("span",{ref:i,className:"notify error",children:ee.hasToS.errorLabel})]})})},Na=({error:t})=>{const e=n=>k.jsx(k.Fragment,{children:Object.entries(n).map(([i,a],s)=>k.jsxs("span",{children:[i,": ",a]},s))}),r=(n,i)=>{const a=Gl(n,i);return k.jsx(k.Fragment,{children:typeof i=="string"?i:e(a)})};return k.jsx(k.Fragment,{children:t.message&&k.jsx("span",{autoFocus:!0,className:"notify error",children:ee.firebaseErrorMessages?r(ee.firebaseErrorMessages,t):typeof t.message=="string"?t.message:e(t.message)})})},xa={user:null,isAuthenticated:!1,expiry:void 0,refresh_token:void 0,token:void 0},yd=L.createSlice({name:"UserSlice",initialState:xa,reducers:{},extraReducers(t){t.addMatcher(st.endpoints.login.matchFulfilled,(e,r)=>(e={...r.payload,isAuthenticated:!0},e)).addMatcher(st.endpoints.updateLogin.matchFulfilled,(e,r)=>(e={...r.payload,isAuthenticated:!0},e)).addMatcher(st.endpoints.updateLogin.matchRejected,e=>(e=xa,e))}}),{reducer:bd}=yd,_d=L.combineReducers({userReducer:bd,[st.reducerPath]:st.reducer}),Id=L.configureStore({reducer:_d,middleware:t=>t().concat(st.middleware)}),wd=({isOpen:t,closeAction:e,message:r,authManager:n})=>Oc()?k.jsx(Me.Provider,{store:Id,children:k.jsx(Ht.Provider,{value:{isOpen:t,closeAction:e,message:r,authManager:n},children:k.jsx(hd,{})})}):k.jsx("dialog",{open:!0,children:k.jsx("p",{children:"Error: Missing firebaseConfig in setConfig"})});be.Auth=wd,be.setConfig=Tc,be.useAuth=rd,Object.defineProperty(be,Symbol.toStringTag,{value:"Module"})});
