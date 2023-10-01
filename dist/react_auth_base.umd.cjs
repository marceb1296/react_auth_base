(function(be,U){typeof exports=="object"&&typeof module<"u"?U(exports,require("react"),require("@preact/signals-react"),require("@reduxjs/toolkit"),require("react-redux")):typeof define=="function"&&define.amd?define(["exports","react","@preact/signals-react","@reduxjs/toolkit","react-redux"],U):(be=typeof globalThis<"u"?globalThis:be||self,U(be.react_auth_base={},be.React,be.SignalsReact,be.ReduxToolkit,be.ReactRedux))})(this,function(be,U,fe,L,ke){"use strict";var Sr={exports:{}},It={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var En;function $a(){if(En)return It;En=1;var t=U,e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(u,o,c){var f,p={},y=null,h=null;c!==void 0&&(y=""+c),o.key!==void 0&&(y=""+o.key),o.ref!==void 0&&(h=o.ref);for(f in o)n.call(o,f)&&!a.hasOwnProperty(f)&&(p[f]=o[f]);if(u&&u.defaultProps)for(f in o=u.defaultProps,o)p[f]===void 0&&(p[f]=o[f]);return{$$typeof:e,type:u,key:y,ref:h,props:p,_owner:i.current}}return It.Fragment=r,It.jsx=s,It.jsxs=s,It}var wt={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tn;function Ja(){return Tn||(Tn=1,process.env.NODE_ENV!=="production"&&function(){var t=U,e=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),o=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen"),I=Symbol.iterator,S="@@iterator";function T(l){if(l===null||typeof l!="object")return null;var k=I&&l[I]||l[S];return typeof k=="function"?k:null}var A=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function w(l){{for(var k=arguments.length,x=new Array(k>1?k-1:0),V=1;V<k;V++)x[V-1]=arguments[V];E("error",l,x)}}function E(l,k,x){{var V=A.ReactDebugCurrentFrame,Z=V.getStackAddendum();Z!==""&&(k+="%s",x=x.concat([Z]));var re=x.map(function($){return String($)});re.unshift("Warning: "+k),Function.prototype.apply.call(console[l],console,re)}}var g=!1,v=!1,d=!1,b=!1,m=!1,O;O=Symbol.for("react.module.reference");function _(l){return!!(typeof l=="string"||typeof l=="function"||l===n||l===a||m||l===i||l===c||l===f||b||l===h||g||v||d||typeof l=="object"&&l!==null&&(l.$$typeof===y||l.$$typeof===p||l.$$typeof===s||l.$$typeof===u||l.$$typeof===o||l.$$typeof===O||l.getModuleId!==void 0))}function R(l,k,x){var V=l.displayName;if(V)return V;var Z=k.displayName||k.name||"";return Z!==""?x+"("+Z+")":x}function C(l){return l.displayName||"Context"}function P(l){if(l==null)return null;if(typeof l.tag=="number"&&w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case n:return"Fragment";case r:return"Portal";case a:return"Profiler";case i:return"StrictMode";case c:return"Suspense";case f:return"SuspenseList"}if(typeof l=="object")switch(l.$$typeof){case u:var k=l;return C(k)+".Consumer";case s:var x=l;return C(x._context)+".Provider";case o:return R(l,l.render,"ForwardRef");case p:var V=l.displayName||null;return V!==null?V:P(l.type)||"Memo";case y:{var Z=l,re=Z._payload,$=Z._init;try{return P($(re))}catch{return null}}}return null}var D=Object.assign,M=0,B,F,j,K,W,z,J;function H(){}H.__reactDisabledLog=!0;function Y(){{if(M===0){B=console.log,F=console.info,j=console.warn,K=console.error,W=console.group,z=console.groupCollapsed,J=console.groupEnd;var l={configurable:!0,enumerable:!0,value:H,writable:!0};Object.defineProperties(console,{info:l,log:l,warn:l,error:l,group:l,groupCollapsed:l,groupEnd:l})}M++}}function Q(){{if(M--,M===0){var l={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:D({},l,{value:B}),info:D({},l,{value:F}),warn:D({},l,{value:j}),error:D({},l,{value:K}),group:D({},l,{value:W}),groupCollapsed:D({},l,{value:z}),groupEnd:D({},l,{value:J})})}M<0&&w("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var X=A.ReactCurrentDispatcher,ae;function ve(l,k,x){{if(ae===void 0)try{throw Error()}catch(Z){var V=Z.stack.trim().match(/\n( *(at )?)/);ae=V&&V[1]||""}return`
`+ae+l}}var _e=!1,Ie;{var ye=typeof WeakMap=="function"?WeakMap:Map;Ie=new ye}function de(l,k){if(!l||_e)return"";{var x=Ie.get(l);if(x!==void 0)return x}var V;_e=!0;var Z=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var re;re=X.current,X.current=null,Y();try{if(k){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(We){V=We}Reflect.construct(l,[],$)}else{try{$.call()}catch(We){V=We}l.call($.prototype)}}else{try{throw Error()}catch(We){V=We}l()}}catch(We){if(We&&V&&typeof We.stack=="string"){for(var G=We.stack.split(`
`),he=V.stack.split(`
`),ue=G.length-1,ce=he.length-1;ue>=1&&ce>=0&&G[ue]!==he[ce];)ce--;for(;ue>=1&&ce>=0;ue--,ce--)if(G[ue]!==he[ce]){if(ue!==1||ce!==1)do if(ue--,ce--,ce<0||G[ue]!==he[ce]){var Se=`
`+G[ue].replace(" at new "," at ");return l.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",l.displayName)),typeof l=="function"&&Ie.set(l,Se),Se}while(ue>=1&&ce>=0);break}}}finally{_e=!1,X.current=re,Q(),Error.prepareStackTrace=Z}var _t=l?l.displayName||l.name:"",Ga=_t?ve(_t):"";return typeof l=="function"&&Ie.set(l,Ga),Ga}function ne(l,k,x){return de(l,!1)}function Ce(l){var k=l.prototype;return!!(k&&k.isReactComponent)}function st(l,k,x){if(l==null)return"";if(typeof l=="function")return de(l,Ce(l));if(typeof l=="string")return ve(l);switch(l){case c:return ve("Suspense");case f:return ve("SuspenseList")}if(typeof l=="object")switch(l.$$typeof){case o:return ne(l.render);case p:return st(l.type,k,x);case y:{var V=l,Z=V._payload,re=V._init;try{return st(re(Z),k,x)}catch{}}}return""}var Xe=Object.prototype.hasOwnProperty,ot={},yt=A.ReactDebugCurrentFrame;function Ze(l){if(l){var k=l._owner,x=st(l.type,l._source,k?k.type:null);yt.setExtraStackFrame(x)}else yt.setExtraStackFrame(null)}function wr(l,k,x,V,Z){{var re=Function.call.bind(Xe);for(var $ in l)if(re(l,$)){var G=void 0;try{if(typeof l[$]!="function"){var he=Error((V||"React class")+": "+x+" type `"+$+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof l[$]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw he.name="Invariant Violation",he}G=l[$](k,$,V,x,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(ue){G=ue}G&&!(G instanceof Error)&&(Ze(Z),w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",V||"React class",x,$,typeof G),Ze(null)),G instanceof Error&&!(G.message in ot)&&(ot[G.message]=!0,Ze(Z),w("Failed %s type: %s",x,G.message),Ze(null))}}}var we=Array.isArray;function ge(l){return we(l)}function Ed(l){{var k=typeof Symbol=="function"&&Symbol.toStringTag,x=k&&l[Symbol.toStringTag]||l.constructor.name||"Object";return x}}function Td(l){try{return Fa(l),!1}catch{return!0}}function Fa(l){return""+l}function ja(l){if(Td(l))return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ed(l)),Fa(l)}var Ht=A.ReactCurrentOwner,Od={key:!0,ref:!0,__self:!0,__source:!0},Ba,qa,_n;_n={};function Rd(l){if(Xe.call(l,"ref")){var k=Object.getOwnPropertyDescriptor(l,"ref").get;if(k&&k.isReactWarning)return!1}return l.ref!==void 0}function Pd(l){if(Xe.call(l,"key")){var k=Object.getOwnPropertyDescriptor(l,"key").get;if(k&&k.isReactWarning)return!1}return l.key!==void 0}function Ad(l,k){if(typeof l.ref=="string"&&Ht.current&&k&&Ht.current.stateNode!==k){var x=P(Ht.current.type);_n[x]||(w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',P(Ht.current.type),l.ref),_n[x]=!0)}}function Cd(l,k){{var x=function(){Ba||(Ba=!0,w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",k))};x.isReactWarning=!0,Object.defineProperty(l,"key",{get:x,configurable:!0})}}function kd(l,k){{var x=function(){qa||(qa=!0,w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",k))};x.isReactWarning=!0,Object.defineProperty(l,"ref",{get:x,configurable:!0})}}var Dd=function(l,k,x,V,Z,re,$){var G={$$typeof:e,type:l,key:k,ref:x,props:$,_owner:re};return G._store={},Object.defineProperty(G._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(G,"_self",{configurable:!1,enumerable:!1,writable:!1,value:V}),Object.defineProperty(G,"_source",{configurable:!1,enumerable:!1,writable:!1,value:Z}),Object.freeze&&(Object.freeze(G.props),Object.freeze(G)),G};function Nd(l,k,x,V,Z){{var re,$={},G=null,he=null;x!==void 0&&(ja(x),G=""+x),Pd(k)&&(ja(k.key),G=""+k.key),Rd(k)&&(he=k.ref,Ad(k,Z));for(re in k)Xe.call(k,re)&&!Od.hasOwnProperty(re)&&($[re]=k[re]);if(l&&l.defaultProps){var ue=l.defaultProps;for(re in ue)$[re]===void 0&&($[re]=ue[re])}if(G||he){var ce=typeof l=="function"?l.displayName||l.name||"Unknown":l;G&&Cd($,ce),he&&kd($,ce)}return Dd(l,G,he,Z,V,Ht.current,$)}}var In=A.ReactCurrentOwner,Va=A.ReactDebugCurrentFrame;function bt(l){if(l){var k=l._owner,x=st(l.type,l._source,k?k.type:null);Va.setExtraStackFrame(x)}else Va.setExtraStackFrame(null)}var wn;wn=!1;function Sn(l){return typeof l=="object"&&l!==null&&l.$$typeof===e}function Ha(){{if(In.current){var l=P(In.current.type);if(l)return`

Check the render method of \``+l+"`."}return""}}function Md(l){{if(l!==void 0){var k=l.fileName.replace(/^.*[\\\/]/,""),x=l.lineNumber;return`

Check your code at `+k+":"+x+"."}return""}}var Wa={};function xd(l){{var k=Ha();if(!k){var x=typeof l=="string"?l:l.displayName||l.name;x&&(k=`

Check the top-level render call using <`+x+">.")}return k}}function za(l,k){{if(!l._store||l._store.validated||l.key!=null)return;l._store.validated=!0;var x=xd(k);if(Wa[x])return;Wa[x]=!0;var V="";l&&l._owner&&l._owner!==In.current&&(V=" It was passed a child from "+P(l._owner.type)+"."),bt(l),w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',x,V),bt(null)}}function Qa(l,k){{if(typeof l!="object")return;if(ge(l))for(var x=0;x<l.length;x++){var V=l[x];Sn(V)&&za(V,k)}else if(Sn(l))l._store&&(l._store.validated=!0);else if(l){var Z=T(l);if(typeof Z=="function"&&Z!==l.entries)for(var re=Z.call(l),$;!($=re.next()).done;)Sn($.value)&&za($.value,k)}}}function Ld(l){{var k=l.type;if(k==null||typeof k=="string")return;var x;if(typeof k=="function")x=k.propTypes;else if(typeof k=="object"&&(k.$$typeof===o||k.$$typeof===p))x=k.propTypes;else return;if(x){var V=P(k);wr(x,l.props,"prop",V,l)}else if(k.PropTypes!==void 0&&!wn){wn=!0;var Z=P(k);w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",Z||"Unknown")}typeof k.getDefaultProps=="function"&&!k.getDefaultProps.isReactClassApproved&&w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ud(l){{for(var k=Object.keys(l.props),x=0;x<k.length;x++){var V=k[x];if(V!=="children"&&V!=="key"){bt(l),w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",V),bt(null);break}}l.ref!==null&&(bt(l),w("Invalid attribute `ref` supplied to `React.Fragment`."),bt(null))}}function Ka(l,k,x,V,Z,re){{var $=_(l);if(!$){var G="";(l===void 0||typeof l=="object"&&l!==null&&Object.keys(l).length===0)&&(G+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var he=Md(Z);he?G+=he:G+=Ha();var ue;l===null?ue="null":ge(l)?ue="array":l!==void 0&&l.$$typeof===e?(ue="<"+(P(l.type)||"Unknown")+" />",G=" Did you accidentally export a JSX literal instead of a component?"):ue=typeof l,w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",ue,G)}var ce=Nd(l,k,x,Z,re);if(ce==null)return ce;if($){var Se=k.children;if(Se!==void 0)if(V)if(ge(Se)){for(var _t=0;_t<Se.length;_t++)Qa(Se[_t],l);Object.freeze&&Object.freeze(Se)}else w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Qa(Se,l)}return l===n?Ud(ce):Ld(ce),ce}}function Fd(l,k,x){return Ka(l,k,x,!0)}function jd(l,k,x){return Ka(l,k,x,!1)}var Bd=jd,qd=Fd;wt.Fragment=n,wt.jsx=Bd,wt.jsxs=qd}()),wt}process.env.NODE_ENV==="production"?Sr.exports=$a():Sr.exports=Ja();var N=Sr.exports;const Er=U.createContext({});/**
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
 */const On=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},Ya=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[r++];e[n++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[r++],s=t[r++],u=t[r++],o=((i&7)<<18|(a&63)<<12|(s&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(o>>10)),e[n++]=String.fromCharCode(56320+(o&1023))}else{const a=t[r++],s=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(a&63)<<6|s&63)}}return e.join("")},Rn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const a=t[i],s=i+1<t.length,u=s?t[i+1]:0,o=i+2<t.length,c=o?t[i+2]:0,f=a>>2,p=(a&3)<<4|u>>4;let y=(u&15)<<2|c>>6,h=c&63;o||(h=64,s||(y=64)),n.push(r[f],r[p],r[y],r[h])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(On(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ya(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const a=r[t.charAt(i++)],u=i<t.length?r[t.charAt(i)]:0;++i;const c=i<t.length?r[t.charAt(i)]:64;++i;const p=i<t.length?r[t.charAt(i)]:64;if(++i,a==null||u==null||c==null||p==null)throw new Xa;const y=a<<2|u>>4;if(n.push(y),c!==64){const h=u<<4&240|c>>2;if(n.push(h),p!==64){const I=c<<6&192|p;n.push(I)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Za=function(t){const e=On(t);return Rn.encodeByteArray(e,!0)},Pn=function(t){return Za(t).replace(/\./g,"")},An=function(t){try{return Rn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function es(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ts=()=>es().__FIREBASE_DEFAULTS__,rs=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ns=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&An(t[1]);return e&&JSON.parse(e)},Tr=()=>{try{return ts()||rs()||ns()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},is=t=>{var e,r;return(r=(e=Tr())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},Cn=()=>{var t;return(t=Tr())===null||t===void 0?void 0:t.config},kn=t=>{var e;return(e=Tr())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class as{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ss(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function os(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function us(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cs(){const t=le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ls(){try{return typeof indexedDB=="object"}catch{return!1}}function ds(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(r){e(r)}})}/**
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
 */const fs="FirebaseError";class ze extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=fs,Object.setPrototypeOf(this,ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,St.prototype.create)}}class St{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,a=this.errors[e],s=a?hs(a,n):"Error",u=`${this.serviceName}: ${s} (${i}).`;return new ze(i,u,n)}}function hs(t,e){return t.replace(ps,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const ps=/\{\$([^}]+)}/g;function vs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wt(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const a=t[i],s=e[i];if(Dn(a)&&Dn(s)){if(!Wt(a,s))return!1}else if(a!==s)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function Dn(t){return t!==null&&typeof t=="object"}/**
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
 */function Et(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function gs(t,e){const r=new ms(t,e);return r.subscribe.bind(r)}class ms{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");ys(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=Or),i.error===void 0&&(i.error=Or),i.complete===void 0&&(i.complete=Or);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ys(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function Or(){}/**
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
 */function Qe(t){return t&&t._delegate?t._delegate:t}class ut{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class bs{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new as;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Is(e))try{this.getOrInitializeService({instanceIdentifier:et})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const a=this.getOrInitializeService({instanceIdentifier:i});n.resolve(a)}catch{}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[a,s]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);n===u&&s.resolve(i)}return i}onInit(e,r){var n;const i=this.normalizeInstanceIdentifier(r),a=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;a.add(e),this.onInitCallbacks.set(i,a);const s=this.instances.get(i);return s&&e(s,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:_s(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _s(t){return t===et?void 0:t}function Is(t){return t.instantiationMode==="EAGER"}/**
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
 */class ws{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new bs(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Ss={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Es=te.INFO,Ts={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Os=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=Ts[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nn{constructor(e){this.name=e,this._logLevel=Es,this._logHandler=Os,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ss[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Rs=(t,e)=>e.some(r=>t instanceof r);let Mn,xn;function Ps(){return Mn||(Mn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function As(){return xn||(xn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ln=new WeakMap,Rr=new WeakMap,Un=new WeakMap,Pr=new WeakMap,Ar=new WeakMap;function Cs(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",s)},a=()=>{r(Ke(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",s)});return e.then(r=>{r instanceof IDBCursor&&Ln.set(r,t)}).catch(()=>{}),Ar.set(e,t),e}function ks(t){if(Rr.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",s),t.removeEventListener("abort",s)},a=()=>{r(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",s),t.addEventListener("abort",s)});Rr.set(t,e)}let Cr={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return Rr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Un.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Ke(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ds(t){Cr=t(Cr)}function Ns(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(kr(this),e,...r);return Un.set(n,e.sort?e.sort():[e]),Ke(n)}:As().includes(t)?function(...e){return t.apply(kr(this),e),Ke(Ln.get(this))}:function(...e){return Ke(t.apply(kr(this),e))}}function Ms(t){return typeof t=="function"?Ns(t):(t instanceof IDBTransaction&&ks(t),Rs(t,Ps())?new Proxy(t,Cr):t)}function Ke(t){if(t instanceof IDBRequest)return Cs(t);if(Pr.has(t))return Pr.get(t);const e=Ms(t);return e!==t&&(Pr.set(t,e),Ar.set(e,t)),e}const kr=t=>Ar.get(t);function xs(t,e,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){const s=indexedDB.open(t,e),u=Ke(s);return n&&s.addEventListener("upgradeneeded",o=>{n(Ke(s.result),o.oldVersion,o.newVersion,Ke(s.transaction),o)}),r&&s.addEventListener("blocked",o=>r(o.oldVersion,o.newVersion,o)),u.then(o=>{a&&o.addEventListener("close",()=>a()),i&&o.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),u}const Ls=["get","getKey","getAll","getAllKeys","count"],Us=["put","add","delete","clear"],Dr=new Map;function Fn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dr.get(e))return Dr.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=Us.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Ls.includes(r)))return;const a=async function(s,...u){const o=this.transaction(s,i?"readwrite":"readonly");let c=o.store;return n&&(c=c.index(u.shift())),(await Promise.all([c[r](...u),i&&o.done]))[0]};return Dr.set(e,a),a}Ds(t=>({...t,get:(e,r,n)=>Fn(e,r)||t.get(e,r,n),has:(e,r)=>!!Fn(e,r)||t.has(e,r)}));/**
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
 */class Fs{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(js(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function js(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nr="@firebase/app",jn="0.9.19";/**
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
 */const tt=new Nn("@firebase/app"),Bs="@firebase/app-compat",qs="@firebase/analytics-compat",Vs="@firebase/analytics",Hs="@firebase/app-check-compat",Ws="@firebase/app-check",zs="@firebase/auth",Qs="@firebase/auth-compat",Ks="@firebase/database",Gs="@firebase/database-compat",$s="@firebase/functions",Js="@firebase/functions-compat",Ys="@firebase/installations",Xs="@firebase/installations-compat",Zs="@firebase/messaging",eo="@firebase/messaging-compat",to="@firebase/performance",ro="@firebase/performance-compat",no="@firebase/remote-config",io="@firebase/remote-config-compat",ao="@firebase/storage",so="@firebase/storage-compat",oo="@firebase/firestore",uo="@firebase/firestore-compat",co="firebase",lo="10.4.0";/**
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
 */const Mr="[DEFAULT]",fo={[Nr]:"fire-core",[Bs]:"fire-core-compat",[Vs]:"fire-analytics",[qs]:"fire-analytics-compat",[Ws]:"fire-app-check",[Hs]:"fire-app-check-compat",[zs]:"fire-auth",[Qs]:"fire-auth-compat",[Ks]:"fire-rtdb",[Gs]:"fire-rtdb-compat",[$s]:"fire-fn",[Js]:"fire-fn-compat",[Ys]:"fire-iid",[Xs]:"fire-iid-compat",[Zs]:"fire-fcm",[eo]:"fire-fcm-compat",[to]:"fire-perf",[ro]:"fire-perf-compat",[no]:"fire-rc",[io]:"fire-rc-compat",[ao]:"fire-gcs",[so]:"fire-gcs-compat",[oo]:"fire-fst",[uo]:"fire-fst-compat","fire-js":"fire-js",[co]:"fire-js-all"};/**
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
 */const zt=new Map,xr=new Map;function ho(t,e){try{t.container.addComponent(e)}catch(r){tt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Tt(t){const e=t.name;if(xr.has(e))return tt.debug(`There were multiple attempts to register component ${e}.`),!1;xr.set(e,t);for(const r of zt.values())ho(r,t);return!0}function Bn(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const po={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ge=new St("app","Firebase",po);/**
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
 */class vo{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ge.create("app-deleted",{appName:this._name})}}/**
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
 */const Ot=lo;function qn(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Mr,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Ge.create("bad-app-name",{appName:String(i)});if(r||(r=Cn()),!r)throw Ge.create("no-options");const a=zt.get(i);if(a){if(Wt(r,a.options)&&Wt(n,a.config))return a;throw Ge.create("duplicate-app",{appName:i})}const s=new ws(i);for(const o of xr.values())s.addComponent(o);const u=new vo(r,n,s);return zt.set(i,u),u}function go(t=Mr){const e=zt.get(t);if(!e&&t===Mr&&Cn())return qn();if(!e)throw Ge.create("no-app",{appName:t});return e}function ct(t,e,r){var n;let i=(n=fo[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const a=i.match(/\s|\//),s=e.match(/\s|\//);if(a||s){const u=[`Unable to register library "${i}" with version "${e}":`];a&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&u.push("and"),s&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tt.warn(u.join(" "));return}Tt(new ut(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mo="firebase-heartbeat-database",yo=1,Rt="firebase-heartbeat-store";let Lr=null;function Vn(){return Lr||(Lr=xs(mo,yo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rt)}}}).catch(t=>{throw Ge.create("idb-open",{originalErrorMessage:t.message})})),Lr}async function bo(t){try{return await(await Vn()).transaction(Rt).objectStore(Rt).get(Wn(t))}catch(e){if(e instanceof ze)tt.warn(e.message);else{const r=Ge.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tt.warn(r.message)}}}async function Hn(t,e){try{const n=(await Vn()).transaction(Rt,"readwrite");await n.objectStore(Rt).put(e,Wn(t)),await n.done}catch(r){if(r instanceof ze)tt.warn(r.message);else{const n=Ge.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});tt.warn(n.message)}}}function Wn(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _o=1024,Io=30*24*60*60*1e3;class wo{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Eo(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=zn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=Io}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zn(),{heartbeatsToSend:r,unsentEntries:n}=So(this._heartbeatsCache.heartbeats),i=Pn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function zn(){return new Date().toISOString().substring(0,10)}function So(t,e=_o){const r=[];let n=t.slice();for(const i of t){const a=r.find(s=>s.agent===i.agent);if(a){if(a.dates.push(i.date),Qn(r)>e){a.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Qn(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class Eo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ls()?ds().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bo(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hn(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hn(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qn(t){return Pn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function To(t){Tt(new ut("platform-logger",e=>new Fs(e),"PRIVATE")),Tt(new ut("heartbeat",e=>new wo(e),"PRIVATE")),ct(Nr,jn,t),ct(Nr,jn,"esm2017"),ct("fire-js","")}To("");function Ur(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}typeof SuppressedError=="function"&&SuppressedError;function Kn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oo=Kn,Gn=new St("auth","Firebase",Kn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Nn("@firebase/auth");function Ro(t,...e){Qt.logLevel<=te.WARN&&Qt.warn(`Auth (${Ot}): ${t}`,...e)}function Kt(t,...e){Qt.logLevel<=te.ERROR&&Qt.error(`Auth (${Ot}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t,...e){throw Fr(t,...e)}function Te(t,...e){return Fr(t,...e)}function $n(t,e,r){const n=Object.assign(Object.assign({},Oo()),{[e]:r});return new St("auth","Firebase",n).create(e,{appName:t.name})}function Po(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&Ee(t,"argument-error"),$n(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fr(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return Gn.create(t,...e)}function q(t,e,...r){if(!t)throw Fr(e,...r)}function De(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Kt(e),new Error(e)}function Ne(t,e){t||De(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ao(){return Jn()==="http:"||Jn()==="https:"}function Jn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ao()||os()||"connection"in navigator)?navigator.onLine:!0}function ko(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,r){this.shortDelay=e,this.longDelay=r,Ne(r>e,"Short delay should be less than long delay!"),this.isMobile=ss()||us()}get(){return Co()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t,e){Ne(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;De("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;De("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;De("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Pt(3e4,6e4);function Xn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function At(t,e,r,n,i={}){return Zn(t,i,async()=>{let a={},s={};n&&(e==="GET"?s=n:a={body:JSON.stringify(n)});const u=Et(Object.assign({key:t.config.apiKey},s)).slice(1),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode),Yn.fetch()(ei(t,t.config.apiHost,r,u),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},a))})}async function Zn(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},Do),e);try{const i=new xo(t),a=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const s=await a.json();if("needConfirmation"in s)throw Gt(t,"account-exists-with-different-credential",s);if(a.ok&&!("errorMessage"in s))return s;{const u=a.ok?s.errorMessage:s.error.message,[o,c]=u.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gt(t,"credential-already-in-use",s);if(o==="EMAIL_EXISTS")throw Gt(t,"email-already-in-use",s);if(o==="USER_DISABLED")throw Gt(t,"user-disabled",s);const f=n[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw $n(t,f,c);Ee(t,f)}}catch(i){if(i instanceof ze)throw i;Ee(t,"network-request-failed",{message:String(i)})}}async function Mo(t,e,r,n,i={}){const a=await At(t,e,r,n,i);return"mfaPendingCredential"in a&&Ee(t,"multi-factor-auth-required",{_serverResponse:a}),a}function ei(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?Br(t.config,i):`${t.config.apiScheme}://${i}`}class xo{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(Te(this.auth,"network-request-failed")),No.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gt(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=Te(t,e,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t,e){return At(t,"POST","/v1/accounts:delete",e)}async function Uo(t,e){return At(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fo(t,e=!1){const r=Qe(t),n=await r.getIdToken(e),i=Vr(n);q(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,s=a==null?void 0:a.sign_in_provider;return{claims:i,token:n,authTime:Ct(qr(i.auth_time)),issuedAtTime:Ct(qr(i.iat)),expirationTime:Ct(qr(i.exp)),signInProvider:s||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function qr(t){return Number(t)*1e3}function Vr(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return Kt("JWT malformed, contained fewer than 3 sections"),null;try{const i=An(r);return i?JSON.parse(i):(Kt("Failed to decode base64 JWT payload"),null)}catch(i){return Kt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jo(t){const e=Vr(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof ze&&Bo(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function Bo({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ct(this.lastLoginAt),this.creationTime=Ct(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $t(t){var e;const r=t.auth,n=await t.getIdToken(),i=await kt(t,Uo(r,{idToken:n}));q(i==null?void 0:i.users.length,r,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const s=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Wo(a.providerUserInfo):[],u=Ho(t.providerData,s),o=t.isAnonymous,c=!(t.email&&a.passwordHash)&&!(u!=null&&u.length),f=o?c:!1,p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new ti(a.createdAt,a.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Vo(t){const e=Qe(t);await $t(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ho(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Wo(t){return t.map(e=>{var{providerId:r}=e,n=Ur(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(t,e){const r=await Zn(t,{},async()=>{const n=Et({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,s=ei(t,i,"/v1/token",`key=${a}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Yn.fetch()(s,{method:"POST",headers:u,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:a}=await zo(e,r);this.updateTokensAndExpiration(n,i,Number(a))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:a}=r,s=new Dt;return n&&(q(typeof n=="string","internal-error",{appName:e}),s.refreshToken=n),i&&(q(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),a&&(q(typeof a=="number","internal-error",{appName:e}),s.expirationTime=a),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dt,this.toJSON())}_performRefresh(){return De("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rt{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,a=Ur(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ti(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const r=await kt(this,this.stsTokenManager.getToken(this.auth,e));return q(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return Fo(this,e)}reload(){return Vo(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await $t(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await kt(this,Lo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,a,s,u,o,c,f;const p=(n=r.displayName)!==null&&n!==void 0?n:void 0,y=(i=r.email)!==null&&i!==void 0?i:void 0,h=(a=r.phoneNumber)!==null&&a!==void 0?a:void 0,I=(s=r.photoURL)!==null&&s!==void 0?s:void 0,S=(u=r.tenantId)!==null&&u!==void 0?u:void 0,T=(o=r._redirectEventId)!==null&&o!==void 0?o:void 0,A=(c=r.createdAt)!==null&&c!==void 0?c:void 0,w=(f=r.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:E,emailVerified:g,isAnonymous:v,providerData:d,stsTokenManager:b}=r;q(E&&b,e,"internal-error");const m=Dt.fromJSON(this.name,b);q(typeof E=="string",e,"internal-error"),$e(p,e.name),$e(y,e.name),q(typeof g=="boolean",e,"internal-error"),q(typeof v=="boolean",e,"internal-error"),$e(h,e.name),$e(I,e.name),$e(S,e.name),$e(T,e.name),$e(A,e.name),$e(w,e.name);const O=new rt({uid:E,auth:e,email:y,emailVerified:g,displayName:p,isAnonymous:v,photoURL:I,phoneNumber:h,tenantId:S,stsTokenManager:m,createdAt:A,lastLoginAt:w});return d&&Array.isArray(d)&&(O.providerData=d.map(_=>Object.assign({},_))),T&&(O._redirectEventId=T),O}static async _fromIdTokenResponse(e,r,n=!1){const i=new Dt;i.updateFromServerResponse(r);const a=new rt({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await $t(a),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new Map;function Me(t){Ne(t instanceof Function,"Expected a class definition");let e=ri.get(t);return e?(Ne(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ri.set(t,e),e)}/**
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
 */function Jt(t,e,r){return`firebase:${t}:${e}:${r}`}class lt{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:a}=this.auth;this.fullUserKey=Jt(this.userKey,i.apiKey,a),this.fullPersistenceKey=Jt("persistence",i.apiKey,a),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new lt(Me(ii),e,n);const i=(await Promise.all(r.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let a=i[0]||Me(ii);const s=Jt(n,e.config.apiKey,e.name);let u=null;for(const c of r)try{const f=await c._get(s);if(f){const p=rt._fromJSON(e,f);c!==a&&(u=p),a=c;break}}catch{}const o=i.filter(c=>c._shouldAllowMigration);return!a._shouldAllowMigration||!o.length?new lt(a,e,n):(a=o[0],u&&await a._set(s,u.toJSON()),await Promise.all(r.map(async c=>{if(c!==a)try{await c._remove(s)}catch{}})),new lt(a,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ui(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(si(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(li(e))return"Blackberry";if(di(e))return"Webos";if(Hr(e))return"Safari";if((e.includes("chrome/")||oi(e))&&!e.includes("edge/"))return"Chrome";if(ci(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function si(t=le()){return/firefox\//i.test(t)}function Hr(t=le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oi(t=le()){return/crios\//i.test(t)}function ui(t=le()){return/iemobile/i.test(t)}function ci(t=le()){return/android/i.test(t)}function li(t=le()){return/blackberry/i.test(t)}function di(t=le()){return/webos/i.test(t)}function Yt(t=le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qo(t=le()){var e;return Yt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ko(){return cs()&&document.documentMode===10}function fi(t=le()){return Yt(t)||ci(t)||di(t)||li(t)||/windows phone/i.test(t)||ui(t)}function Go(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t,e=[]){let r;switch(t){case"Browser":r=ai(le());break;case"Worker":r=`${ai(le())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Ot}/${n}`}/**
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
 */class $o{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=a=>new Promise((s,u)=>{try{const o=e(a);s(o)}catch(o){u(o)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function Jo(t,e={}){return At(t,"GET","/v2/passwordPolicy",Xn(t,e))}/**
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
 */const Yo=6;class Xo{constructor(e){var r,n,i,a;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=s.minPasswordLength)!==null&&r!==void 0?r:Yo,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,n,i,a,s,u;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=(r=o.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(n=o.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(i=o.containsLowercaseLetter)!==null&&i!==void 0?i:!0),o.isValid&&(o.isValid=(a=o.containsUppercaseLetter)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(s=o.containsNumericCharacter)!==null&&s!==void 0?s:!0),o.isValid&&(o.isValid=(u=o.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),o}validatePasswordLengthOptions(e,r){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=e.length>=n),i&&(r.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,r,n,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,r,n,i){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pi(this),this.idTokenSubscription=new pi(this),this.beforeStateQueue=new $o(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Me(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await lt.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var r;const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,u=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===u)&&(o!=null&&o.user)&&(i=o.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await $t(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ko()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?Qe(e):null;return r&&q(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Me(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jo(this),r=new Xo(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new St("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},r)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Me(e)||this._popupRedirectResolver;q(r,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[Me(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const a=typeof r=="function"?r:r.next.bind(r);let s=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(u,this,"internal-error"),u.then(()=>{s||a(this.currentUser)}),typeof r=="function"){const o=e.addObserver(r,n,i);return()=>{s=!0,o()}}else{const o=e.addObserver(r);return()=>{s=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&Ro(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function Nt(t){return Qe(t)}class pi{constructor(e){this.auth=e,this.observer=null,this.addObserver=gs(r=>this.observer=r)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function tu(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const a=Te("internal-error");a.customData=i,r(a)},n.type="text/javascript",n.charset="UTF-8",eu().appendChild(n)})}function ru(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t,e){const r=Bn(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),a=r.getOptions();if(Wt(a,e??{}))return i;Ee(i,"already-initialized")}return r.initialize({options:e})}function iu(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Me);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function au(t,e,r){const n=Nt(t);q(n._canInitEmulator,n,"emulator-config-failed"),q(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(r!=null&&r.disableWarnings),a=vi(e),{host:s,port:u}=su(e),o=u===null?"":`:${u}`;n.config.emulator={url:`${a}//${s}${o}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ou()}function vi(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function su(t){const e=vi(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const a=i[1];return{host:a,port:gi(n.substr(a.length+1))}}else{const[a,s]=n.split(":");return{host:a,port:gi(s)}}}function gi(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ou(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return De("not implemented")}_getIdTokenResponse(e){return De("not implemented")}_linkToIdToken(e,r){return De("not implemented")}_getReauthenticationResolver(e){return De("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(t,e){return Mo(t,"POST","/v1/accounts:signInWithIdp",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="http://localhost";class xe extends mi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):Ee("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,a=Ur(r,["providerId","signInMethod"]);if(!n||!i)return null;const s=new xe(n,i);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}_getIdTokenResponse(e){const r=this.buildRequest();return dt(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,dt(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,dt(e,r)}buildRequest(){const e={requestUri:uu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Et(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ft extends Wr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Mt extends ft{static credentialFromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;return q("providerId"in r&&"signInMethod"in r,"argument-error"),xe._fromParams(r)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return q(e.idToken||e.accessToken,"argument-error"),xe._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Mt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Mt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:a,nonce:s,providerId:u}=e;if(!n&&!i&&!r&&!a||!u)return null;try{return new Mt(u)._credential({idToken:r,accessToken:n,nonce:s,pendingToken:a})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends ft{constructor(){super("facebook.com")}static credential(e){return xe._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Le.credential(e.oauthAccessToken)}catch{return null}}}Le.FACEBOOK_SIGN_IN_METHOD="facebook.com",Le.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends ft{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return xe._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return Ue.credential(r,n)}catch{return null}}}Ue.GOOGLE_SIGN_IN_METHOD="google.com",Ue.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends ft{constructor(){super("github.com")}static credential(e){return xe._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch{return null}}}Fe.GITHUB_SIGN_IN_METHOD="github.com",Fe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends ft{constructor(){super("twitter.com")}static credential(e,r){return xe._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return je.credential(r,n)}catch{return null}}}je.TWITTER_SIGN_IN_METHOD="twitter.com",je.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const a=await rt._fromIdTokenResponse(e,n,i),s=yi(n);return new ht({user:a,providerId:s,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=yi(n);return new ht({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function yi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends ze{constructor(e,r,n,i){var a;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Xt.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new Xt(e,r,n,i)}}function bi(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Xt._fromErrorAndOperation(t,a,e,n):a})}async function cu(t,e,r=!1){const n=await kt(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return ht._forOperation(t,"link",n)}/**
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
 */async function lu(t,e,r=!1){const{auth:n}=t,i="reauthenticate";try{const a=await kt(t,bi(n,i,e,t),r);q(a.idToken,n,"internal-error");const s=Vr(a.idToken);q(s,n,"internal-error");const{sub:u}=s;return q(t.uid===u,n,"user-mismatch"),ht._forOperation(t,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Ee(n,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function du(t,e,r=!1){const n="signIn",i=await bi(t,n,e),a=await ht._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(a.user),a}function fu(t,e,r,n){return Qe(t).onIdTokenChanged(e,r,n)}function hu(t,e,r){return Qe(t).beforeAuthStateChanged(e,r)}function pu(t,e,r,n){return Qe(t).onAuthStateChanged(e,r,n)}function _i(t){return Qe(t).signOut()}const Zt="__sak";/**
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
 */class Ii{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Zt,"1"),this.storage.removeItem(Zt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(){const t=le();return Hr(t)||Yt(t)}const gu=1e3,mu=10;class wi extends Ii{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vu()&&Go(),this.fallbackToPolling=fi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((s,u,o)=>{this.notifyListeners(s,o)});return}const n=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!r)return}const i=()=>{const s=this.storage.getItem(n);!r&&this.localCache[n]===s||this.notifyListeners(n,s)},a=this.storage.getItem(n);Ko()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mu):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},gu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}wi.type="LOCAL";const yu=wi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function bu(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class er{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new er(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:a}=r.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const u=Array.from(s).map(async c=>c(r.origin,a)),o=await bu(u);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:o})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}er.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _u{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,s;return new Promise((u,o)=>{const c=zr("",20);i.port1.start();const f=setTimeout(()=>{o(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(p){const y=p;if(y.data.eventId===c)switch(y.data.status){case"ack":clearTimeout(f),a=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(y.data.response);break;default:clearTimeout(f),clearTimeout(a),o(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:r},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return window}function Iu(t){Oe().location.href=t}/**
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
 */function Ti(){return typeof Oe().WorkerGlobalScope<"u"&&typeof Oe().importScripts=="function"}async function wu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Su(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Eu(){return Ti()?self:null}/**
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
 */const Oi="firebaseLocalStorageDb",Tu=1,tr="firebaseLocalStorage",Ri="fbase_key";class xt{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function rr(t,e){return t.transaction([tr],e?"readwrite":"readonly").objectStore(tr)}function Ou(){const t=indexedDB.deleteDatabase(Oi);return new xt(t).toPromise()}function Qr(){const t=indexedDB.open(Oi,Tu);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(tr,{keyPath:Ri})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(tr)?e(n):(n.close(),await Ou(),e(await Qr()))})})}async function Pi(t,e,r){const n=rr(t,!0).put({[Ri]:e,value:r});return new xt(n).toPromise()}async function Ru(t,e){const r=rr(t,!1).get(e),n=await new xt(r).toPromise();return n===void 0?null:n.value}function Ai(t,e){const r=rr(t,!0).delete(e);return new xt(r).toPromise()}const Pu=800,Au=3;class Ci{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qr(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>Au)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ti()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=er._getInstance(Eu()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await wu(),!this.activeServiceWorker)return;this.sender=new _u(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Su()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qr();return await Pi(e,Zt,"1"),await Ai(e,Zt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pi(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>Ru(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ai(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=rr(i,!1).getAll();return new xt(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;for(const{fbase_key:i,value:a}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ci.type="LOCAL";const Cu=Ci;new Pt(3e4,6e4);/**
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
 */function ki(t,e){return e?Me(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kr extends mi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dt(e,this._buildIdpRequest())}_linkToIdToken(e,r){return dt(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return dt(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function ku(t){return du(t.auth,new Kr(t),t.bypassAuthState)}function Du(t){const{auth:e,user:r}=t;return q(r,e,"internal-error"),lu(r,new Kr(t),t.bypassAuthState)}async function Nu(t){const{auth:e,user:r}=t;return q(r,e,"internal-error"),cu(r,new Kr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,r,n,i,a=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:a,error:s,type:u}=e;if(s){this.reject(s);return}const o={auth:this.auth,requestUri:r,sessionId:n,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(o))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ku;case"linkViaPopup":case"linkViaRedirect":return Nu;case"reauthViaPopup":case"reauthViaRedirect":return Du;default:Ee(this.auth,"internal-error")}}resolve(e){Ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=new Pt(2e3,1e4);class pt extends Di{constructor(e,r,n,i,a){super(e,r,i,a),this.provider=n,this.authWindow=null,this.pollId=null,pt.currentPopupAction&&pt.currentPopupAction.cancel(),pt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Ne(this.filter.length===1,"Popup operations only handle one event");const e=zr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mu.get())};e()}}pt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="pendingRedirect",nr=new Map;class Lu extends Di{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=nr.get(this.auth._key());if(!e){try{const n=await Uu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}nr.set(this.auth._key(),e)}return this.bypassAuthState||nr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Uu(t,e){const r=Mi(e),n=Ni(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}async function Fu(t,e){return Ni(t)._set(Mi(e),"true")}function ju(t,e){nr.set(t._key(),e)}function Ni(t){return Me(t._redirectPersistence)}function Mi(t){return Jt(xu,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,e,r){return Bu(t,e,r)}async function Bu(t,e,r){const n=Nt(t);Po(t,e,Wr),await n._initializationPromise;const i=ki(n,r);return await Fu(i,n),i._openRedirect(n,e,"signInViaRedirect")}async function qu(t,e){return await Nt(t)._initializationPromise,xi(t,e,!1)}async function xi(t,e,r=!1){const n=Nt(t),i=ki(n,e),s=await new Lu(n,i,r).execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=10*60*1e3;class Hu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wu(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!Ui(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(Te(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vu&&this.cachedEventUids.clear(),this.cachedEventUids.has(Li(e))}saveEventToCache(e){this.cachedEventUids.add(Li(e)),this.lastProcessedEventTime=Date.now()}}function Li(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ui({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wu(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ui(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zu(t,e={}){return At(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ku=/^https?/;async function Gu(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zu(t);for(const r of e)try{if($u(r))return}catch{}Ee(t,"unauthorized-domain")}function $u(t){const e=jr(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&s.hostname===n}if(!Ku.test(r))return!1;if(Qu.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const Ju=new Pt(3e4,6e4);function Fi(){const t=Oe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function Yu(t){return new Promise((e,r)=>{var n,i,a;function s(){Fi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fi(),r(Te(t,"network-request-failed"))},timeout:Ju.get()})}if(!((i=(n=Oe().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=Oe().gapi)===null||a===void 0)&&a.load)s();else{const u=ru("iframefcb");return Oe()[u]=()=>{gapi.load?s():r(Te(t,"network-request-failed"))},tu(`https://apis.google.com/js/api.js?onload=${u}`).catch(o=>r(o))}}).catch(e=>{throw ir=null,e})}let ir=null;function Xu(t){return ir=ir||Yu(t),ir}/**
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
 */const Zu=new Pt(5e3,15e3),ec="__/auth/iframe",tc="emulator/auth/iframe",rc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ic(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Br(e,tc):`https://${t.config.authDomain}/${ec}`,n={apiKey:e.apiKey,appName:t.name,v:Ot},i=nc.get(t.config.apiHost);i&&(n.eid=i);const a=t._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${Et(n).slice(1)}`}async function ac(t){const e=await Xu(t),r=Oe().gapi;return q(r,t,"internal-error"),e.open({where:document.body,url:ic(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rc,dontclear:!0},n=>new Promise(async(i,a)=>{await n.restyle({setHideOnLeave:!1});const s=Te(t,"network-request-failed"),u=Oe().setTimeout(()=>{a(s)},Zu.get());function o(){Oe().clearTimeout(u),i(n)}n.ping(o).then(o,()=>{a(s)})}))}/**
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
 */const sc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oc=500,uc=600,cc="_blank",lc="http://localhost";class ji{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dc(t,e,r,n=oc,i=uc){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let u="";const o=Object.assign(Object.assign({},sc),{width:n.toString(),height:i.toString(),top:a,left:s}),c=le().toLowerCase();r&&(u=oi(c)?cc:r),si(c)&&(e=e||lc,o.scrollbars="yes");const f=Object.entries(o).reduce((y,[h,I])=>`${y}${h}=${I},`,"");if(Qo(c)&&u!=="_self")return fc(e||"",u),new ji(null);const p=window.open(e||"",u,f);q(p,t,"popup-blocked");try{p.focus()}catch{}return new ji(p)}function fc(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const hc="__/auth/handler",pc="emulator/auth/handler",vc=encodeURIComponent("fac");async function Bi(t,e,r,n,i,a){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:Ot,eventId:i};if(e instanceof Wr){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",vs(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(a||{}))s[f]=p}if(e instanceof ft){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const u=s;for(const f of Object.keys(u))u[f]===void 0&&delete u[f];const o=await t._getAppCheckToken(),c=o?`#${vc}=${encodeURIComponent(o)}`:"";return`${gc(t)}?${Et(u).slice(1)}${c}`}function gc({config:t}){return t.emulator?Br(t,pc):`https://${t.authDomain}/${hc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="webStorageSupport";class mc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ei,this._completeRedirectFn=xi,this._overrideRedirectResult=ju}async _openPopup(e,r,n,i){var a;Ne((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await Bi(e,r,n,jr(),i);return dc(e,s,zr())}async _openRedirect(e,r,n,i){await this._originValidation(e);const a=await Bi(e,r,n,jr(),i);return Iu(a),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:a}=this.eventManagers[r];return i?Promise.resolve(i):(Ne(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await ac(e),n=new Hu(e);return r.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(Gr,{type:Gr},i=>{var a;const s=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Gr];s!==void 0&&r(!!s),Ee(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Gu(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return fi()||Hr()||Yt()}}const yc=mc;var qi="@firebase/auth",Vi="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ic(t){Tt(new ut("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:s,authDomain:u}=n.options;q(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:s,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hi(t)},c=new Zo(n,i,a,o);return iu(c,r),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),Tt(new ut("auth-internal",e=>{const r=Nt(e.getProvider("auth").getImmediate());return(n=>new bc(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),ct(qi,Vi,_c(t)),ct(qi,Vi,"esm2017")}/**
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
 */const wc=5*60,Sc=kn("authIdTokenMaxAge")||wc;let Hi=null;const Ec=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>Sc)return;const i=r==null?void 0:r.token;Hi!==i&&(Hi=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tc(t=go()){const e=Bn(t,"auth");if(e.isInitialized())return e.getImmediate();const r=nu(t,{popupRedirectResolver:yc,persistence:[Cu,yu,Ei]}),n=kn("authTokenSyncURL");if(n){const a=Ec(n);hu(r,a,()=>a(r.currentUser)),fu(r,s=>a(s))}const i=is("auth");return i&&au(r,`http://${i}`),r}Ic("Browser");var Oc="firebase",Rc="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct(Oc,Rc,"app");const Wi={language:"en",firebaseConfig:{},endpoint:"http://127.0.0.1:8000/api/auth/",keyword:"TSESSION",refreshTokenHeader:"Authorization",acceptUsername:!1,bodyAsBase64:!1,signInMethods:["google"]};let ee={...Wi};const Pc=t=>{ee={...Wi,...t}},Ac=()=>Object.keys(ee.firebaseConfig).length!==0,Be=()=>{const t=qn(ee.firebaseConfig);return Tc(t)},zi=new Ue;zi.setCustomParameters({prompt:"select_account"});const Qi=new Le;Qi.addScope("public_profile");const Cc=new je,kc=new Fe,Dc=new Mt("microsoft.com").setCustomParameters({prompt:"consent",login_hint:"user@firstadd.onmicrosoft.com",tenant:"1bd1e0fb-f970-45f0-a49d-e80107b0e6f3"});function se(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];if(process.env.NODE_ENV!=="production"){var i=Vc[t],a=i?typeof i=="function"?i.apply(null,r):i:"unknown error nr: "+t;throw Error("[Immer] "+a)}throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(s){return"'"+s+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function qe(t){return!!t&&!!t[pe]}function Ve(t){var e;return!!t&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Hc}(t)||Array.isArray(t)||!!t[Ft]||!!(!((e=t.constructor)===null||e===void 0)&&e[Ft])||sr(t)||or(t))}function Nc(t){return qe(t)||se(23,t),t[pe].t}function vt(t,e,r){r===void 0&&(r=!1),Je(t)===0?(r?Object.keys:un)(t).forEach(function(n){r&&typeof n=="symbol"||e(n,t[n],t)}):t.forEach(function(n,i){return e(i,n,t)})}function Je(t){var e=t[pe];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:sr(t)?2:or(t)?3:0}function Ut(t,e){return Je(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function ar(t,e){return Je(t)===2?t.get(e):t[e]}function Ki(t,e,r){var n=Je(t);n===2?t.set(e,r):n===3?t.add(r):t[e]=r}function Mc(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function sr(t){return Bc&&t instanceof Map}function or(t){return qc&&t instanceof Set}function nt(t){return t.o||t.t}function $r(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=Wc(t);delete e[pe];for(var r=un(e),n=0;n<r.length;n++){var i=r[n],a=e[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(e[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Jr(t,e){return e===void 0&&(e=!1),Yr(t)||qe(t)||!Ve(t)||(Je(t)>1&&(t.set=t.add=t.clear=t.delete=xc),Object.freeze(t),e&&vt(t,function(r,n){return Jr(n,!0)},!0)),t}function xc(){se(2)}function Yr(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Re(t){var e=cn[t];return e||se(18,t),e}function Lc(t,e){cn[t]||(cn[t]=e)}function Gi(){return process.env.NODE_ENV==="production"||gt||se(0),gt}function Xr(t,e){e&&(Re("Patches"),t.u=[],t.s=[],t.v=e)}function ur(t){Zr(t),t.p.forEach(Uc),t.p=null}function Zr(t){t===gt&&(gt=t.l)}function $i(t){return gt={p:[],l:gt,h:t,m:!0,_:0}}function Uc(t){var e=t[pe];e.i===0||e.i===1?e.j():e.g=!0}function en(t,e){e._=e.p.length;var r=e.p[0],n=t!==void 0&&t!==r;return e.h.O||Re("ES5").S(e,t,n),n?(r[pe].P&&(ur(e),se(4)),Ve(t)&&(t=cr(e,t),e.l||lr(e,t)),e.u&&Re("Patches").M(r[pe].t,t,e.u,e.s)):t=cr(e,r,[]),ur(e),e.u&&e.v(e.u,e.s),t!==on?t:void 0}function cr(t,e,r){if(Yr(e))return e;var n=e[pe];if(!n)return vt(e,function(u,o){return Ji(t,n,e,u,o,r)},!0),e;if(n.A!==t)return e;if(!n.P)return lr(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=n.i===4||n.i===5?n.o=$r(n.k):n.o,a=i,s=!1;n.i===3&&(a=new Set(i),i.clear(),s=!0),vt(a,function(u,o){return Ji(t,n,i,u,o,r,s)}),lr(t,i,!1),r&&t.u&&Re("Patches").N(n,r,t.u,t.s)}return n.o}function Ji(t,e,r,n,i,a,s){if(process.env.NODE_ENV!=="production"&&i===r&&se(5),qe(i)){var u=cr(t,i,a&&e&&e.i!==3&&!Ut(e.R,n)?a.concat(n):void 0);if(Ki(r,n,u),!qe(u))return;t.m=!1}else s&&r.add(i);if(Ve(i)&&!Yr(i)){if(!t.h.D&&t._<1)return;cr(t,i),e&&e.A.l||lr(t,i)}}function lr(t,e,r){r===void 0&&(r=!1),!t.l&&t.h.D&&t.m&&Jr(e,r)}function tn(t,e){var r=t[pe];return(r?nt(r):t)[e]}function Yi(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function rn(t){t.P||(t.P=!0,t.l&&rn(t.l))}function nn(t){t.o||(t.o=$r(t.t))}function an(t,e,r){var n=sr(e)?Re("MapSet").F(e,r):or(e)?Re("MapSet").T(e,r):t.O?function(i,a){var s=Array.isArray(i),u={i:s?1:0,A:a?a.A:Gi(),P:!1,I:!1,R:{},l:a,t:i,k:null,o:null,j:null,C:!1},o=u,c=ln;s&&(o=[u],c=jt);var f=Proxy.revocable(o,c),p=f.revoke,y=f.proxy;return u.k=y,u.j=p,y}(e,r):Re("ES5").J(e,r);return(r?r.A:Gi()).p.push(n),n}function Fc(t){return qe(t)||se(22,t),function e(r){if(!Ve(r))return r;var n,i=r[pe],a=Je(r);if(i){if(!i.P&&(i.i<4||!Re("ES5").K(i)))return i.t;i.I=!0,n=Xi(r,a),i.I=!1}else n=Xi(r,a);return vt(n,function(s,u){i&&ar(i.t,s)===u||Ki(n,s,e(u))}),a===3?new Set(n):n}(t)}function Xi(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return $r(t)}function jc(){function t(n){if(!Ve(n))return n;if(Array.isArray(n))return n.map(t);if(sr(n))return new Map(Array.from(n.entries()).map(function(s){return[s[0],t(s[1])]}));if(or(n))return new Set(Array.from(n).map(t));var i=Object.create(Object.getPrototypeOf(n));for(var a in n)i[a]=t(n[a]);return Ut(n,Ft)&&(i[Ft]=n[Ft]),i}function e(n){return qe(n)?t(n):n}var r="add";Lc("Patches",{$:function(n,i){return i.forEach(function(a){for(var s=a.path,u=a.op,o=n,c=0;c<s.length-1;c++){var f=Je(o),p=s[c];typeof p!="string"&&typeof p!="number"&&(p=""+p),f!==0&&f!==1||p!=="__proto__"&&p!=="constructor"||se(24),typeof o=="function"&&p==="prototype"&&se(24),typeof(o=ar(o,p))!="object"&&se(15,s.join("/"))}var y=Je(o),h=t(a.value),I=s[s.length-1];switch(u){case"replace":switch(y){case 2:return o.set(I,h);case 3:se(16);default:return o[I]=h}case r:switch(y){case 1:return I==="-"?o.push(h):o.splice(I,0,h);case 2:return o.set(I,h);case 3:return o.add(h);default:return o[I]=h}case"remove":switch(y){case 1:return o.splice(I,1);case 2:return o.delete(I);case 3:return o.delete(a.value);default:return delete o[I]}default:se(17,u)}}),n},N:function(n,i,a,s){switch(n.i){case 0:case 4:case 2:return function(u,o,c,f){var p=u.t,y=u.o;vt(u.R,function(h,I){var S=ar(p,h),T=ar(y,h),A=I?Ut(p,h)?"replace":r:"remove";if(S!==T||A!=="replace"){var w=o.concat(h);c.push(A==="remove"?{op:A,path:w}:{op:A,path:w,value:T}),f.push(A===r?{op:"remove",path:w}:A==="remove"?{op:r,path:w,value:e(S)}:{op:"replace",path:w,value:e(S)})}})}(n,i,a,s);case 5:case 1:return function(u,o,c,f){var p=u.t,y=u.R,h=u.o;if(h.length<p.length){var I=[h,p];p=I[0],h=I[1];var S=[f,c];c=S[0],f=S[1]}for(var T=0;T<p.length;T++)if(y[T]&&h[T]!==p[T]){var A=o.concat([T]);c.push({op:"replace",path:A,value:e(h[T])}),f.push({op:"replace",path:A,value:e(p[T])})}for(var w=p.length;w<h.length;w++){var E=o.concat([w]);c.push({op:r,path:E,value:e(h[w])})}p.length<h.length&&f.push({op:"replace",path:o.concat(["length"]),value:p.length})}(n,i,a,s);case 3:return function(u,o,c,f){var p=u.t,y=u.o,h=0;p.forEach(function(I){if(!y.has(I)){var S=o.concat([h]);c.push({op:"remove",path:S,value:I}),f.unshift({op:r,path:S,value:I})}h++}),h=0,y.forEach(function(I){if(!p.has(I)){var S=o.concat([h]);c.push({op:r,path:S,value:I}),f.unshift({op:"remove",path:S,value:I})}h++})}(n,i,a,s)}},M:function(n,i,a,s){a.push({op:"replace",path:[],value:i===on?void 0:i}),s.push({op:"replace",path:[],value:n})}})}var Zi,gt,sn=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Bc=typeof Map<"u",qc=typeof Set<"u",ea=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",on=sn?Symbol.for("immer-nothing"):((Zi={})["immer-nothing"]=!0,Zi),Ft=sn?Symbol.for("immer-draftable"):"__$immer_draftable",pe=sn?Symbol.for("immer-state"):"__$immer_state",Vc={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(t){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+t},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(t){return"Cannot apply patch, path doesn't resolve: "+t},16:'Sets cannot have "replace" patches.',17:function(t){return"Unsupported patch operation: "+t},18:function(t){return"The plugin for '"+t+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+t+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(t){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+t+"'"},22:function(t){return"'current' expects a draft, got: "+t},23:function(t){return"'original' expects a draft, got: "+t},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Hc=""+Object.prototype.constructor,un=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,Wc=Object.getOwnPropertyDescriptors||function(t){var e={};return un(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},cn={},ln={get:function(t,e){if(e===pe)return t;var r=nt(t);if(!Ut(r,e))return function(i,a,s){var u,o=Yi(a,s);return o?"value"in o?o.value:(u=o.get)===null||u===void 0?void 0:u.call(i.k):void 0}(t,r,e);var n=r[e];return t.I||!Ve(n)?n:n===tn(t.t,e)?(nn(t),t.o[e]=an(t.A.h,n,t)):n},has:function(t,e){return e in nt(t)},ownKeys:function(t){return Reflect.ownKeys(nt(t))},set:function(t,e,r){var n=Yi(nt(t),e);if(n!=null&&n.set)return n.set.call(t.k,r),!0;if(!t.P){var i=tn(nt(t),e),a=i==null?void 0:i[pe];if(a&&a.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(Mc(r,i)&&(r!==void 0||Ut(t.t,e)))return!0;nn(t),rn(t)}return t.o[e]===r&&(r!==void 0||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return tn(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,nn(t),rn(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=nt(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:n.enumerable,value:r[e]}},defineProperty:function(){se(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){se(12)}},jt={};vt(ln,function(t,e){jt[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),jt.deleteProperty=function(t,e){return process.env.NODE_ENV!=="production"&&isNaN(parseInt(e))&&se(13),jt.set.call(this,t,e,void 0)},jt.set=function(t,e,r){return process.env.NODE_ENV!=="production"&&e!=="length"&&isNaN(parseInt(e))&&se(14),ln.set.call(this,t[0],e,r,t[0])};var zc=function(){function t(r){var n=this;this.O=ea,this.D=!0,this.produce=function(i,a,s){if(typeof i=="function"&&typeof a!="function"){var u=a;a=i;var o=n;return function(S){var T=this;S===void 0&&(S=u);for(var A=arguments.length,w=Array(A>1?A-1:0),E=1;E<A;E++)w[E-1]=arguments[E];return o.produce(S,function(g){var v;return(v=a).call.apply(v,[T,g].concat(w))})}}var c;if(typeof a!="function"&&se(6),s!==void 0&&typeof s!="function"&&se(7),Ve(i)){var f=$i(n),p=an(n,i,void 0),y=!0;try{c=a(p),y=!1}finally{y?ur(f):Zr(f)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(S){return Xr(f,s),en(S,f)},function(S){throw ur(f),S}):(Xr(f,s),en(c,f))}if(!i||typeof i!="object"){if((c=a(i))===void 0&&(c=i),c===on&&(c=void 0),n.D&&Jr(c,!0),s){var h=[],I=[];Re("Patches").M(i,c,h,I),s(h,I)}return c}se(21,i)},this.produceWithPatches=function(i,a){if(typeof i=="function")return function(c){for(var f=arguments.length,p=Array(f>1?f-1:0),y=1;y<f;y++)p[y-1]=arguments[y];return n.produceWithPatches(c,function(h){return i.apply(void 0,[h].concat(p))})};var s,u,o=n.produce(i,a,function(c,f){s=c,u=f});return typeof Promise<"u"&&o instanceof Promise?o.then(function(c){return[c,s,u]}):[o,s,u]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var e=t.prototype;return e.createDraft=function(r){Ve(r)||se(8),qe(r)&&(r=Fc(r));var n=$i(this),i=an(this,r,void 0);return i[pe].C=!0,Zr(n),i},e.finishDraft=function(r,n){var i=r&&r[pe];process.env.NODE_ENV!=="production"&&(i&&i.C||se(9),i.I&&se(10));var a=i.A;return Xr(a,n),en(void 0,a)},e.setAutoFreeze=function(r){this.D=r},e.setUseProxies=function(r){r&&!ea&&se(20),this.O=r},e.applyPatches=function(r,n){var i;for(i=n.length-1;i>=0;i--){var a=n[i];if(a.path.length===0&&a.op==="replace"){r=a.value;break}}i>-1&&(n=n.slice(i+1));var s=Re("Patches").$;return qe(r)?s(r,n):this.produce(r,function(u){return s(u,n)})},t}(),me=new zc;me.produce;var ta=me.produceWithPatches.bind(me);me.setAutoFreeze.bind(me),me.setUseProxies.bind(me);var ra=me.applyPatches.bind(me);me.createDraft.bind(me),me.finishDraft.bind(me);var dr="NOT_FOUND";function Qc(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:dr},put:function(n,i){e={key:n,value:i}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}function Kc(t,e){var r=[];function n(u){var o=r.findIndex(function(f){return e(u,f.key)});if(o>-1){var c=r[o];return o>0&&(r.splice(o,1),r.unshift(c)),c.value}return dr}function i(u,o){n(u)===dr&&(r.unshift({key:u,value:o}),r.length>t&&r.pop())}function a(){return r}function s(){r=[]}return{get:n,put:i,getEntries:a,clear:s}}var Gc=function(e,r){return e===r};function $c(t){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var i=r.length,a=0;a<i;a++)if(!t(r[a],n[a]))return!1;return!0}}function na(t,e){var r=typeof e=="object"?e:{equalityCheck:e},n=r.equalityCheck,i=n===void 0?Gc:n,a=r.maxSize,s=a===void 0?1:a,u=r.resultEqualityCheck,o=$c(i),c=s===1?Qc(o):Kc(s,o);function f(){var p=c.get(arguments);if(p===dr){if(p=t.apply(null,arguments),u){var y=c.getEntries(),h=y.find(function(I){return u(I.value,p)});h&&(p=h.value)}c.put(arguments,p)}return p}return f.clearCache=function(){return c.clear()},f}var fr=globalThis&&globalThis.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(c){return function(f){return o([c,f])}}function o(c){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=c[0]&2?i.return:c[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,c[1])).done)return a;switch(i=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,i=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){r.label=c[1];break}if(c[0]===6&&r.label<a[1]){r.label=a[1],a=c;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(c);break}a[2]&&r.ops.pop(),r.trys.pop();continue}c=e.call(t,r)}catch(f){c=[6,f],i=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},hr=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t},Jc=Object.defineProperty,Yc=Object.defineProperties,Xc=Object.getOwnPropertyDescriptors,pr=Object.getOwnPropertySymbols,ia=Object.prototype.hasOwnProperty,aa=Object.prototype.propertyIsEnumerable,sa=function(t,e,r){return e in t?Jc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},oe=function(t,e){for(var r in e||(e={}))ia.call(e,r)&&sa(t,r,e[r]);if(pr)for(var n=0,i=pr(e);n<i.length;n++){var r=i[n];aa.call(e,r)&&sa(t,r,e[r])}return t},Pe=function(t,e){return Yc(t,Xc(e))},oa=function(t,e){var r={};for(var n in t)ia.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&pr)for(var i=0,a=pr(t);i<a.length;i++){var n=a[i];e.indexOf(n)<0&&aa.call(t,n)&&(r[n]=t[n])}return r},vr=function(t,e,r){return new Promise(function(n,i){var a=function(o){try{u(r.next(o))}catch(c){i(c)}},s=function(o){try{u(r.throw(o))}catch(c){i(c)}},u=function(o){return o.done?n(o.value):Promise.resolve(o.value).then(a,s)};u((r=r.apply(t,e)).next())})},ie;(function(t){t.uninitialized="uninitialized",t.pending="pending",t.fulfilled="fulfilled",t.rejected="rejected"})(ie||(ie={}));function Zc(t){return{status:t,isUninitialized:t===ie.uninitialized,isLoading:t===ie.pending,isSuccess:t===ie.fulfilled,isError:t===ie.rejected}}function el(t){return new RegExp("(^|:)//").test(t)}var tl=function(t){return t.replace(/\/$/,"")},rl=function(t){return t.replace(/^\//,"")};function nl(t,e){if(!t)return e;if(!e)return t;if(el(e))return e;var r=t.endsWith("/")||!e.startsWith("?")?"/":"";return t=tl(t),e=rl(e),""+t+r+e}var ua=function(t){return[].concat.apply([],t)};function il(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}function al(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}var ca=L.isPlainObject;function la(t,e){if(t===e||!(ca(t)&&ca(e)||Array.isArray(t)&&Array.isArray(e)))return e;for(var r=Object.keys(e),n=Object.keys(t),i=r.length===n.length,a=Array.isArray(e)?[]:{},s=0,u=r;s<u.length;s++){var o=u[s];a[o]=la(t[o],e[o]),i&&(i=t[o]===a[o])}return i?t:a}var da=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return fetch.apply(void 0,t)},sl=function(t){return t.status>=200&&t.status<=299},ol=function(t){return/ion\/(vnd\.api\+)?json/.test(t.get("content-type")||"")};function fa(t){if(!L.isPlainObject(t))return t;for(var e=oe({},t),r=0,n=Object.entries(e);r<n.length;r++){var i=n[r],a=i[0],s=i[1];s===void 0&&delete e[a]}return e}function ul(t){var e=this;t===void 0&&(t={});var r=t,n=r.baseUrl,i=r.prepareHeaders,a=i===void 0?function(E){return E}:i,s=r.fetchFn,u=s===void 0?da:s,o=r.paramsSerializer,c=r.isJsonContentType,f=c===void 0?ol:c,p=r.jsonContentType,y=p===void 0?"application/json":p,h=r.jsonReplacer,I=r.timeout,S=r.responseHandler,T=r.validateStatus,A=oa(r,["baseUrl","prepareHeaders","fetchFn","paramsSerializer","isJsonContentType","jsonContentType","jsonReplacer","timeout","responseHandler","validateStatus"]);return typeof fetch>"u"&&u===da&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),function(E,g){return vr(e,null,function(){var v,d,b,m,O,_,R,C,P,D,M,B,F,j,K,W,z,J,H,Y,Q,X,ae,ve,_e,Ie,ye,de,ne,Ce,st,Xe,ot,yt,Ze,wr;return fr(this,function(we){switch(we.label){case 0:return v=g.signal,d=g.getState,b=g.extra,m=g.endpoint,O=g.forced,_=g.type,C=typeof E=="string"?{url:E}:E,P=C.url,D=C.headers,M=D===void 0?new Headers(A.headers):D,B=C.params,F=B===void 0?void 0:B,j=C.responseHandler,K=j===void 0?S??"json":j,W=C.validateStatus,z=W===void 0?T??sl:W,J=C.timeout,H=J===void 0?I:J,Y=oa(C,["url","headers","params","responseHandler","validateStatus","timeout"]),Q=oe(Pe(oe({},A),{signal:v}),Y),M=new Headers(fa(M)),X=Q,[4,a(M,{getState:d,extra:b,endpoint:m,forced:O,type:_})];case 1:X.headers=we.sent()||M,ae=function(ge){return typeof ge=="object"&&(L.isPlainObject(ge)||Array.isArray(ge)||typeof ge.toJSON=="function")},!Q.headers.has("content-type")&&ae(Q.body)&&Q.headers.set("content-type",y),ae(Q.body)&&f(Q.headers)&&(Q.body=JSON.stringify(Q.body,h)),F&&(ve=~P.indexOf("?")?"&":"?",_e=o?o(F):new URLSearchParams(fa(F)),P+=ve+_e),P=nl(n,P),Ie=new Request(P,Q),ye=new Request(P,Q),R={request:ye},ne=!1,Ce=H&&setTimeout(function(){ne=!0,g.abort()},H),we.label=2;case 2:return we.trys.push([2,4,5,6]),[4,u(Ie)];case 3:return de=we.sent(),[3,6];case 4:return st=we.sent(),[2,{error:{status:ne?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(st)},meta:R}];case 5:return Ce&&clearTimeout(Ce),[7];case 6:Xe=de.clone(),R.response=Xe,yt="",we.label=7;case 7:return we.trys.push([7,9,,10]),[4,Promise.all([w(de,K).then(function(ge){return ot=ge},function(ge){return Ze=ge}),Xe.text().then(function(ge){return yt=ge},function(){})])];case 8:if(we.sent(),Ze)throw Ze;return[3,10];case 9:return wr=we.sent(),[2,{error:{status:"PARSING_ERROR",originalStatus:de.status,data:yt,error:String(wr)},meta:R}];case 10:return[2,z(de,ot)?{data:ot,meta:R}:{error:{status:de.status,data:ot},meta:R}]}})})};function w(E,g){return vr(this,null,function(){var v;return fr(this,function(d){switch(d.label){case 0:return typeof g=="function"?[2,g(E)]:(g==="content-type"&&(g=f(E.headers)?"json":"text"),g!=="json"?[3,2]:[4,E.text()]);case 1:return v=d.sent(),[2,v.length?JSON.parse(v):null];case 2:return[2,E.text()]}})})}}var ha=function(){function t(e,r){r===void 0&&(r=void 0),this.value=e,this.meta=r}return t}(),dn=L.createAction("__rtkq/focused"),pa=L.createAction("__rtkq/unfocused"),fn=L.createAction("__rtkq/online"),va=L.createAction("__rtkq/offline"),Ae;(function(t){t.query="query",t.mutation="mutation"})(Ae||(Ae={}));function ga(t){return t.type===Ae.query}function cl(t){return t.type===Ae.mutation}function hn(t,e,r,n,i,a){return ll(t)?t(e,r,n,i).map(pn).map(a):Array.isArray(t)?t.map(pn).map(a):[]}function ll(t){return typeof t=="function"}function pn(t){return typeof t=="string"?{type:t}:t}function vn(t){return t!=null}var Bt=Symbol("forceQueryFn"),gn=function(t){return typeof t[Bt]=="function"};function dl(t){var e=t.serializeQueryArgs,r=t.queryThunk,n=t.mutationThunk,i=t.api,a=t.context,s=new Map,u=new Map,o=i.internalActions,c=o.unsubscribeQueryResult,f=o.removeMutationResult,p=o.updateSubscriptionOptions;return{buildInitiateQuery:E,buildInitiateMutation:g,getRunningQueryThunk:I,getRunningMutationThunk:S,getRunningQueriesThunk:T,getRunningMutationsThunk:A,getRunningOperationPromises:h,removalWarning:y};function y(){throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`)}function h(){if(typeof process<"u"&&process.env.NODE_ENV==="development")y();else{var v=function(d){return Array.from(d.values()).flatMap(function(b){return b?Object.values(b):[]})};return hr(hr([],v(s)),v(u)).filter(vn)}}function I(v,d){return function(b){var m,O=a.endpointDefinitions[v],_=e({queryArgs:d,endpointDefinition:O,endpointName:v});return(m=s.get(b))==null?void 0:m[_]}}function S(v,d){return function(b){var m;return(m=u.get(b))==null?void 0:m[d]}}function T(){return function(v){return Object.values(s.get(v)||{}).filter(vn)}}function A(){return function(v){return Object.values(u.get(v)||{}).filter(vn)}}function w(v){if(process.env.NODE_ENV!=="production"){if(w.triggered)return;var d=v(i.internalActions.internal_probeSubscription({queryCacheKey:"DOES_NOT_EXIST",requestId:"DUMMY_REQUEST_ID"}));if(w.triggered=!0,typeof d!="boolean")throw new Error('Warning: Middleware for RTK-Query API at reducerPath "'+i.reducerPath+`" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`)}}function E(v,d){var b=function(m,O){var _=O===void 0?{}:O,R=_.subscribe,C=R===void 0?!0:R,P=_.forceRefetch,D=_.subscriptionOptions,M=Bt,B=_[M];return function(F,j){var K,W,z=e({queryArgs:m,endpointDefinition:d,endpointName:v}),J=r((K={type:"query",subscribe:C,forceRefetch:P,subscriptionOptions:D,endpointName:v,originalArgs:m,queryCacheKey:z},K[Bt]=B,K)),H=i.endpoints[v].select(m),Y=F(J),Q=H(j());w(F);var X=Y.requestId,ae=Y.abort,ve=Q.requestId!==X,_e=(W=s.get(F))==null?void 0:W[z],Ie=function(){return H(j())},ye=Object.assign(B?Y.then(Ie):ve&&!_e?Promise.resolve(Q):Promise.all([_e,Y]).then(Ie),{arg:m,requestId:X,subscriptionOptions:D,queryCacheKey:z,abort:ae,unwrap:function(){return vr(this,null,function(){var ne;return fr(this,function(Ce){switch(Ce.label){case 0:return[4,ye];case 1:if(ne=Ce.sent(),ne.isError)throw ne.error;return[2,ne.data]}})})},refetch:function(){return F(b(m,{subscribe:!1,forceRefetch:!0}))},unsubscribe:function(){C&&F(c({queryCacheKey:z,requestId:X}))},updateSubscriptionOptions:function(ne){ye.subscriptionOptions=ne,F(p({endpointName:v,requestId:X,queryCacheKey:z,options:ne}))}});if(!_e&&!ve&&!B){var de=s.get(F)||{};de[z]=ye,s.set(F,de),ye.then(function(){delete de[z],Object.keys(de).length||s.delete(F)})}return ye}};return b}function g(v){return function(d,b){var m=b===void 0?{}:b,O=m.track,_=O===void 0?!0:O,R=m.fixedCacheKey;return function(C,P){var D=n({type:"mutation",endpointName:v,originalArgs:d,track:_,fixedCacheKey:R}),M=C(D);w(C);var B=M.requestId,F=M.abort,j=M.unwrap,K=M.unwrap().then(function(H){return{data:H}}).catch(function(H){return{error:H}}),W=function(){C(f({requestId:B,fixedCacheKey:R}))},z=Object.assign(K,{arg:M.arg,requestId:B,abort:F,unwrap:j,unsubscribe:W,reset:W}),J=u.get(C)||{};return u.set(C,J),J[B]=z,z.then(function(){delete J[B],Object.keys(J).length||u.delete(C)}),R&&(J[R]=z,z.then(function(){J[R]===z&&(delete J[R],Object.keys(J).length||u.delete(C))})),z}}}}function ma(t){return t}function fl(t){var e=this,r=t.reducerPath,n=t.baseQuery,i=t.context.endpointDefinitions,a=t.serializeQueryArgs,s=t.api,u=t.assertTagType,o=function(g,v,d,b){return function(m,O){var _=i[g],R=a({queryArgs:v,endpointDefinition:_,endpointName:g});if(m(s.internalActions.queryResultPatched({queryCacheKey:R,patches:d})),!!b){var C=s.endpoints[g].select(v)(O()),P=hn(_.providesTags,C.data,void 0,v,{},u);m(s.internalActions.updateProvidedBy({queryCacheKey:R,providedTags:P}))}}},c=function(g,v,d,b){return b===void 0&&(b=!0),function(m,O){var _,R,C=s.endpoints[g],P=C.select(v)(O()),D={patches:[],inversePatches:[],undo:function(){return m(s.util.patchQueryData(g,v,D.inversePatches,b))}};if(P.status===ie.uninitialized)return D;var M;if("data"in P)if(Ve(P.data)){var B=ta(P.data,d),F=B[0],j=B[1],K=B[2];(_=D.patches).push.apply(_,j),(R=D.inversePatches).push.apply(R,K),M=F}else M=d(P.data),D.patches.push({op:"replace",path:[],value:M}),D.inversePatches.push({op:"replace",path:[],value:P.data});return m(s.util.patchQueryData(g,v,D.patches,b)),D}},f=function(g,v,d){return function(b){var m;return b(s.endpoints[g].initiate(v,(m={subscribe:!1,forceRefetch:!0},m[Bt]=function(){return{data:d}},m)))}},p=function(g,v){return vr(e,[g,v],function(d,b){var m,O,_,R,C,P,D,M,B,F,j,K,W,z,J,H,Y,Q,X=b.signal,ae=b.abort,ve=b.rejectWithValue,_e=b.fulfillWithValue,Ie=b.dispatch,ye=b.getState,de=b.extra;return fr(this,function(ne){switch(ne.label){case 0:m=i[d.endpointName],ne.label=1;case 1:return ne.trys.push([1,8,,13]),O=ma,_=void 0,R={signal:X,abort:ae,dispatch:Ie,getState:ye,extra:de,endpoint:d.endpointName,type:d.type,forced:d.type==="query"?y(d,ye()):void 0},C=d.type==="query"?d[Bt]:void 0,C?(_=C(),[3,6]):[3,2];case 2:return m.query?[4,n(m.query(d.originalArgs),R,m.extraOptions)]:[3,4];case 3:return _=ne.sent(),m.transformResponse&&(O=m.transformResponse),[3,6];case 4:return[4,m.queryFn(d.originalArgs,R,m.extraOptions,function(Ce){return n(Ce,R,m.extraOptions)})];case 5:_=ne.sent(),ne.label=6;case 6:if(typeof process<"u"&&process.env.NODE_ENV==="development"){if(P=m.query?"`baseQuery`":"`queryFn`",D=void 0,!_)D=P+" did not return anything.";else if(typeof _!="object")D=P+" did not return an object.";else if(_.error&&_.data)D=P+" returned an object containing both `error` and `result`.";else if(_.error===void 0&&_.data===void 0)D=P+" returned an object containing neither a valid `error` and `result`. At least one of them should not be `undefined`";else for(M=0,B=Object.keys(_);M<B.length;M++)if(F=B[M],F!=="error"&&F!=="data"&&F!=="meta"){D="The object returned by "+P+" has the unknown property "+F+".";break}D&&console.error("Error encountered handling the endpoint "+d.endpointName+`.
              `+D+"\n              It needs to return an object with either the shape `{ data: <value> }` or `{ error: <value> }` that may contain an optional `meta` property.\n              Object returned was:",_)}if(_.error)throw new ha(_.error,_.meta);return j=_e,[4,O(_.data,_.meta,d.originalArgs)];case 7:return[2,j.apply(void 0,[ne.sent(),(Y={fulfilledTimeStamp:Date.now(),baseQueryMeta:_.meta},Y[L.SHOULD_AUTOBATCH]=!0,Y)])];case 8:if(K=ne.sent(),W=K,!(W instanceof ha))return[3,12];z=ma,m.query&&m.transformErrorResponse&&(z=m.transformErrorResponse),ne.label=9;case 9:return ne.trys.push([9,11,,12]),J=ve,[4,z(W.value,W.meta,d.originalArgs)];case 10:return[2,J.apply(void 0,[ne.sent(),(Q={baseQueryMeta:W.meta},Q[L.SHOULD_AUTOBATCH]=!0,Q)])];case 11:return H=ne.sent(),W=H,[3,12];case 12:throw typeof process<"u"&&process.env.NODE_ENV!=="production"?console.error('An unhandled error occurred processing a request for the endpoint "'+d.endpointName+`".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`,W):console.error(W),W;case 13:return[2]}})})};function y(g,v){var d,b,m,O,_=(b=(d=v[r])==null?void 0:d.queries)==null?void 0:b[g.queryCacheKey],R=(m=v[r])==null?void 0:m.config.refetchOnMountOrArgChange,C=_==null?void 0:_.fulfilledTimeStamp,P=(O=g.forceRefetch)!=null?O:g.subscribe&&R;return P?P===!0||(Number(new Date)-Number(C))/1e3>=P:!1}var h=L.createAsyncThunk(r+"/executeQuery",p,{getPendingMeta:function(){var g;return g={startedTimeStamp:Date.now()},g[L.SHOULD_AUTOBATCH]=!0,g},condition:function(g,v){var d=v.getState,b,m,O,_=d(),R=(m=(b=_[r])==null?void 0:b.queries)==null?void 0:m[g.queryCacheKey],C=R==null?void 0:R.fulfilledTimeStamp,P=g.originalArgs,D=R==null?void 0:R.originalArgs,M=i[g.endpointName];return gn(g)?!0:(R==null?void 0:R.status)==="pending"?!1:y(g,_)||ga(M)&&((O=M==null?void 0:M.forceRefetch)!=null&&O.call(M,{currentArg:P,previousArg:D,endpointState:R,state:_}))?!0:!C},dispatchConditionRejection:!0}),I=L.createAsyncThunk(r+"/executeMutation",p,{getPendingMeta:function(){var g;return g={startedTimeStamp:Date.now()},g[L.SHOULD_AUTOBATCH]=!0,g}}),S=function(g){return"force"in g},T=function(g){return"ifOlderThan"in g},A=function(g,v,d){return function(b,m){var O=S(d)&&d.force,_=T(d)&&d.ifOlderThan,R=function(M){return M===void 0&&(M=!0),s.endpoints[g].initiate(v,{forceRefetch:M})},C=s.endpoints[g].select(v)(m());if(O)b(R());else if(_){var P=C==null?void 0:C.fulfilledTimeStamp;if(!P){b(R());return}var D=(Number(new Date)-Number(new Date(P)))/1e3>=_;D&&b(R())}else b(R(!1))}};function w(g){return function(v){var d,b;return((b=(d=v==null?void 0:v.meta)==null?void 0:d.arg)==null?void 0:b.endpointName)===g}}function E(g,v){return{matchPending:L.isAllOf(L.isPending(g),w(v)),matchFulfilled:L.isAllOf(L.isFulfilled(g),w(v)),matchRejected:L.isAllOf(L.isRejected(g),w(v))}}return{queryThunk:h,mutationThunk:I,prefetch:A,updateQueryData:c,upsertQueryData:f,patchQueryData:o,buildMatchThunkActions:E}}function ya(t,e,r,n){return hn(r[t.meta.arg.endpointName][e],L.isFulfilled(t)?t.payload:void 0,L.isRejectedWithValue(t)?t.payload:void 0,t.meta.arg.originalArgs,"baseQueryMeta"in t.meta?t.meta.baseQueryMeta:void 0,n)}function gr(t,e,r){var n=t[e];n&&r(n)}function qt(t){var e;return(e="arg"in t?t.arg.fixedCacheKey:t.fixedCacheKey)!=null?e:t.requestId}function ba(t,e,r){var n=t[qt(e)];n&&r(n)}var Vt={};function hl(t){var e=t.reducerPath,r=t.queryThunk,n=t.mutationThunk,i=t.context,a=i.endpointDefinitions,s=i.apiUid,u=i.extractRehydrationInfo,o=i.hasRehydrationInfo,c=t.assertTagType,f=t.config,p=L.createAction(e+"/resetApiState"),y=L.createSlice({name:e+"/queries",initialState:Vt,reducers:{removeQueryResult:{reducer:function(v,d){var b=d.payload.queryCacheKey;delete v[b]},prepare:L.prepareAutoBatched()},queryResultPatched:{reducer:function(v,d){var b=d.payload,m=b.queryCacheKey,O=b.patches;gr(v,m,function(_){_.data=ra(_.data,O.concat())})},prepare:L.prepareAutoBatched()}},extraReducers:function(v){v.addCase(r.pending,function(d,b){var m=b.meta,O=b.meta.arg,_,R,C=gn(O);(O.subscribe||C)&&((R=d[_=O.queryCacheKey])!=null||(d[_]={status:ie.uninitialized,endpointName:O.endpointName})),gr(d,O.queryCacheKey,function(P){P.status=ie.pending,P.requestId=C&&P.requestId?P.requestId:m.requestId,O.originalArgs!==void 0&&(P.originalArgs=O.originalArgs),P.startedTimeStamp=m.startedTimeStamp})}).addCase(r.fulfilled,function(d,b){var m=b.meta,O=b.payload;gr(d,m.arg.queryCacheKey,function(_){var R;if(!(_.requestId!==m.requestId&&!gn(m.arg))){var C=a[m.arg.endpointName].merge;if(_.status=ie.fulfilled,C)if(_.data!==void 0){var P=m.fulfilledTimeStamp,D=m.arg,M=m.baseQueryMeta,B=m.requestId,F=L.createNextState(_.data,function(j){return C(j,O,{arg:D.originalArgs,baseQueryMeta:M,fulfilledTimeStamp:P,requestId:B})});_.data=F}else _.data=O;else _.data=(R=a[m.arg.endpointName].structuralSharing)==null||R?la(qe(_.data)?Nc(_.data):_.data,O):O;delete _.error,_.fulfilledTimeStamp=m.fulfilledTimeStamp}})}).addCase(r.rejected,function(d,b){var m=b.meta,O=m.condition,_=m.arg,R=m.requestId,C=b.error,P=b.payload;gr(d,_.queryCacheKey,function(D){if(!O){if(D.requestId!==R)return;D.status=ie.rejected,D.error=P??C}})}).addMatcher(o,function(d,b){for(var m=u(b).queries,O=0,_=Object.entries(m);O<_.length;O++){var R=_[O],C=R[0],P=R[1];((P==null?void 0:P.status)===ie.fulfilled||(P==null?void 0:P.status)===ie.rejected)&&(d[C]=P)}})}}),h=L.createSlice({name:e+"/mutations",initialState:Vt,reducers:{removeMutationResult:{reducer:function(v,d){var b=d.payload,m=qt(b);m in v&&delete v[m]},prepare:L.prepareAutoBatched()}},extraReducers:function(v){v.addCase(n.pending,function(d,b){var m=b.meta,O=b.meta,_=O.requestId,R=O.arg,C=O.startedTimeStamp;R.track&&(d[qt(m)]={requestId:_,status:ie.pending,endpointName:R.endpointName,startedTimeStamp:C})}).addCase(n.fulfilled,function(d,b){var m=b.payload,O=b.meta;O.arg.track&&ba(d,O,function(_){_.requestId===O.requestId&&(_.status=ie.fulfilled,_.data=m,_.fulfilledTimeStamp=O.fulfilledTimeStamp)})}).addCase(n.rejected,function(d,b){var m=b.payload,O=b.error,_=b.meta;_.arg.track&&ba(d,_,function(R){R.requestId===_.requestId&&(R.status=ie.rejected,R.error=m??O)})}).addMatcher(o,function(d,b){for(var m=u(b).mutations,O=0,_=Object.entries(m);O<_.length;O++){var R=_[O],C=R[0],P=R[1];((P==null?void 0:P.status)===ie.fulfilled||(P==null?void 0:P.status)===ie.rejected)&&C!==(P==null?void 0:P.requestId)&&(d[C]=P)}})}}),I=L.createSlice({name:e+"/invalidation",initialState:Vt,reducers:{updateProvidedBy:{reducer:function(v,d){for(var b,m,O,_,R=d.payload,C=R.queryCacheKey,P=R.providedTags,D=0,M=Object.values(v);D<M.length;D++)for(var B=M[D],F=0,j=Object.values(B);F<j.length;F++){var K=j[F],W=K.indexOf(C);W!==-1&&K.splice(W,1)}for(var z=0,J=P;z<J.length;z++){var H=J[z],Y=H.type,Q=H.id,X=(_=(m=(b=v[Y])!=null?b:v[Y]={})[O=Q||"__internal_without_id"])!=null?_:m[O]=[],ae=X.includes(C);ae||X.push(C)}},prepare:L.prepareAutoBatched()}},extraReducers:function(v){v.addCase(y.actions.removeQueryResult,function(d,b){for(var m=b.payload.queryCacheKey,O=0,_=Object.values(d);O<_.length;O++)for(var R=_[O],C=0,P=Object.values(R);C<P.length;C++){var D=P[C],M=D.indexOf(m);M!==-1&&D.splice(M,1)}}).addMatcher(o,function(d,b){for(var m,O,_,R,C=u(b).provided,P=0,D=Object.entries(C);P<D.length;P++)for(var M=D[P],B=M[0],F=M[1],j=0,K=Object.entries(F);j<K.length;j++)for(var W=K[j],z=W[0],J=W[1],H=(R=(O=(m=d[B])!=null?m:d[B]={})[_=z||"__internal_without_id"])!=null?R:O[_]=[],Y=0,Q=J;Y<Q.length;Y++){var X=Q[Y],ae=H.includes(X);ae||H.push(X)}}).addMatcher(L.isAnyOf(L.isFulfilled(r),L.isRejectedWithValue(r)),function(d,b){var m=ya(b,"providesTags",a,c),O=b.meta.arg.queryCacheKey;I.caseReducers.updateProvidedBy(d,I.actions.updateProvidedBy({queryCacheKey:O,providedTags:m}))})}}),S=L.createSlice({name:e+"/subscriptions",initialState:Vt,reducers:{updateSubscriptionOptions:function(v,d){},unsubscribeQueryResult:function(v,d){},internal_probeSubscription:function(v,d){}}}),T=L.createSlice({name:e+"/internalSubscriptions",initialState:Vt,reducers:{subscriptionsUpdated:{reducer:function(v,d){return ra(v,d.payload)},prepare:L.prepareAutoBatched()}}}),A=L.createSlice({name:e+"/config",initialState:oe({online:il(),focused:al(),middlewareRegistered:!1},f),reducers:{middlewareRegistered:function(v,d){var b=d.payload;v.middlewareRegistered=v.middlewareRegistered==="conflict"||s!==b?"conflict":!0}},extraReducers:function(v){v.addCase(fn,function(d){d.online=!0}).addCase(va,function(d){d.online=!1}).addCase(dn,function(d){d.focused=!0}).addCase(pa,function(d){d.focused=!1}).addMatcher(o,function(d){return oe({},d)})}}),w=L.combineReducers({queries:y.reducer,mutations:h.reducer,provided:I.reducer,subscriptions:T.reducer,config:A.reducer}),E=function(v,d){return w(p.match(d)?void 0:v,d)},g=Pe(oe(oe(oe(oe(oe(oe({},A.actions),y.actions),S.actions),T.actions),h.actions),I.actions),{unsubscribeMutationResult:h.actions.removeMutationResult,resetApiState:p});return{reducer:E,actions:g}}var it=Symbol.for("RTKQ/skipToken"),_a={status:ie.uninitialized},Ia=L.createNextState(_a,function(){}),wa=L.createNextState(_a,function(){});function pl(t){var e=t.serializeQueryArgs,r=t.reducerPath,n=function(f){return Ia},i=function(f){return wa};return{buildQuerySelector:u,buildMutationSelector:o,selectInvalidatedBy:c};function a(f){return oe(oe({},f),Zc(f.status))}function s(f){var p=f[r];if(process.env.NODE_ENV!=="production"&&!p){if(s.triggered)return p;s.triggered=!0,console.error("Error: No data found at `state."+r+"`. Did you forget to add the reducer to the store?")}return p}function u(f,p){return function(y){var h=e({queryArgs:y,endpointDefinition:p,endpointName:f}),I=function(T){var A,w,E;return(E=(w=(A=s(T))==null?void 0:A.queries)==null?void 0:w[h])!=null?E:Ia},S=y===it?n:I;return L.createSelector(S,a)}}function o(){return function(f){var p,y;typeof f=="object"?y=(p=qt(f))!=null?p:it:y=f;var h=function(S){var T,A,w;return(w=(A=(T=s(S))==null?void 0:T.mutations)==null?void 0:A[y])!=null?w:wa},I=y===it?i:h;return L.createSelector(I,a)}}function c(f,p){for(var y,h=f[r],I=new Set,S=0,T=p.map(pn);S<T.length;S++){var A=T[S],w=h.provided[A.type];if(w)for(var E=(y=A.id!==void 0?w[A.id]:ua(Object.values(w)))!=null?y:[],g=0,v=E;g<v.length;g++){var d=v[g];I.add(d)}}return ua(Array.from(I.values()).map(function(b){var m=h.queries[b];return m?[{queryCacheKey:b,endpointName:m.endpointName,originalArgs:m.originalArgs}]:[]}))}}var mr=WeakMap?new WeakMap:void 0,Sa=function(t){var e=t.endpointName,r=t.queryArgs,n="",i=mr==null?void 0:mr.get(r);if(typeof i=="string")n=i;else{var a=JSON.stringify(r,function(s,u){return L.isPlainObject(u)?Object.keys(u).sort().reduce(function(o,c){return o[c]=u[c],o},{}):u});L.isPlainObject(r)&&(mr==null||mr.set(r,a)),n=a}return e+"("+n+")"};function vl(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(n){var i=na(function(f){var p,y;return(y=n.extractRehydrationInfo)==null?void 0:y.call(n,f,{reducerPath:(p=n.reducerPath)!=null?p:"api"})}),a=Pe(oe({reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1},n),{extractRehydrationInfo:i,serializeQueryArgs:function(f){var p=Sa;if("serializeQueryArgs"in f.endpointDefinition){var y=f.endpointDefinition.serializeQueryArgs;p=function(h){var I=y(h);return typeof I=="string"?I:Sa(Pe(oe({},h),{queryArgs:I}))}}else n.serializeQueryArgs&&(p=n.serializeQueryArgs);return p(f)},tagTypes:hr([],n.tagTypes||[])}),s={endpointDefinitions:{},batch:function(f){f()},apiUid:L.nanoid(),extractRehydrationInfo:i,hasRehydrationInfo:na(function(f){return i(f)!=null})},u={injectEndpoints:c,enhanceEndpoints:function(f){var p=f.addTagTypes,y=f.endpoints;if(p)for(var h=0,I=p;h<I.length;h++){var S=I[h];a.tagTypes.includes(S)||a.tagTypes.push(S)}if(y)for(var T=0,A=Object.entries(y);T<A.length;T++){var w=A[T],E=w[0],g=w[1];typeof g=="function"?g(s.endpointDefinitions[E]):Object.assign(s.endpointDefinitions[E]||{},g)}return u}},o=t.map(function(f){return f.init(u,a,s)});function c(f){for(var p=f.endpoints({query:function(g){return Pe(oe({},g),{type:Ae.query})},mutation:function(g){return Pe(oe({},g),{type:Ae.mutation})}}),y=0,h=Object.entries(p);y<h.length;y++){var I=h[y],S=I[0],T=I[1];if(!f.overrideExisting&&S in s.endpointDefinitions){typeof process<"u"&&process.env.NODE_ENV==="development"&&console.error("called `injectEndpoints` to override already-existing endpointName "+S+" without specifying `overrideExisting: true`");continue}s.endpointDefinitions[S]=T;for(var A=0,w=o;A<w.length;A++){var E=w[A];E.injectEndpoint(S,T)}}return u}return u.injectEndpoints({endpoints:n.endpoints})}}function gl(t){for(var e in t)return!1;return!0}var ml=2147483647/1e3-1,yl=function(t){var e=t.reducerPath,r=t.api,n=t.context,i=t.internalState,a=r.internalActions,s=a.removeQueryResult,u=a.unsubscribeQueryResult;function o(y){var h=i.currentSubscriptions[y];return!!h&&!gl(h)}var c={},f=function(y,h,I){var S;if(u.match(y)){var T=h.getState()[e],A=y.payload.queryCacheKey;p(A,(S=T.queries[A])==null?void 0:S.endpointName,h,T.config)}if(r.util.resetApiState.match(y))for(var w=0,E=Object.entries(c);w<E.length;w++){var g=E[w],v=g[0],d=g[1];d&&clearTimeout(d),delete c[v]}if(n.hasRehydrationInfo(y))for(var T=h.getState()[e],b=n.extractRehydrationInfo(y).queries,m=0,O=Object.entries(b);m<O.length;m++){var _=O[m],A=_[0],R=_[1];p(A,R==null?void 0:R.endpointName,h,T.config)}};function p(y,h,I,S){var T,A=n.endpointDefinitions[h],w=(T=A==null?void 0:A.keepUnusedDataFor)!=null?T:S.keepUnusedDataFor;if(w!==1/0){var E=Math.max(0,Math.min(w,ml));if(!o(y)){var g=c[y];g&&clearTimeout(g),c[y]=setTimeout(function(){o(y)||I.dispatch(s({queryCacheKey:y})),delete c[y]},E*1e3)}}}return f},bl=function(t){var e=t.reducerPath,r=t.context,n=t.context.endpointDefinitions,i=t.mutationThunk,a=t.api,s=t.assertTagType,u=t.refetchQuery,o=a.internalActions.removeQueryResult,c=L.isAnyOf(L.isFulfilled(i),L.isRejectedWithValue(i)),f=function(y,h){c(y)&&p(ya(y,"invalidatesTags",n,s),h),a.util.invalidateTags.match(y)&&p(hn(y.payload,void 0,void 0,void 0,void 0,s),h)};function p(y,h){var I=h.getState(),S=I[e],T=a.util.selectInvalidatedBy(I,y);r.batch(function(){for(var A,w=Array.from(T.values()),E=0,g=w;E<g.length;E++){var v=g[E].queryCacheKey,d=S.queries[v],b=(A=S.subscriptions[v])!=null?A:{};d&&(Object.keys(b).length===0?h.dispatch(o({queryCacheKey:v})):d.status!==ie.uninitialized&&h.dispatch(u(d,v)))}})}return f},_l=function(t){var e=t.reducerPath,r=t.queryThunk,n=t.api,i=t.refetchQuery,a=t.internalState,s={},u=function(h,I){(n.internalActions.updateSubscriptionOptions.match(h)||n.internalActions.unsubscribeQueryResult.match(h))&&c(h.payload,I),(r.pending.match(h)||r.rejected.match(h)&&h.meta.condition)&&c(h.meta.arg,I),(r.fulfilled.match(h)||r.rejected.match(h)&&!h.meta.condition)&&o(h.meta.arg,I),n.util.resetApiState.match(h)&&p()};function o(h,I){var S=h.queryCacheKey,T=I.getState()[e],A=T.queries[S],w=a.currentSubscriptions[S];if(!(!A||A.status===ie.uninitialized)){var E=y(w);if(Number.isFinite(E)){var g=s[S];g!=null&&g.timeout&&(clearTimeout(g.timeout),g.timeout=void 0);var v=Date.now()+E,d=s[S]={nextPollTimestamp:v,pollingInterval:E,timeout:setTimeout(function(){d.timeout=void 0,I.dispatch(i(A,S))},E)}}}}function c(h,I){var S=h.queryCacheKey,T=I.getState()[e],A=T.queries[S],w=a.currentSubscriptions[S];if(!(!A||A.status===ie.uninitialized)){var E=y(w);if(!Number.isFinite(E)){f(S);return}var g=s[S],v=Date.now()+E;(!g||v<g.nextPollTimestamp)&&o({queryCacheKey:S},I)}}function f(h){var I=s[h];I!=null&&I.timeout&&clearTimeout(I.timeout),delete s[h]}function p(){for(var h=0,I=Object.keys(s);h<I.length;h++){var S=I[h];f(S)}}function y(h){h===void 0&&(h={});var I=Number.POSITIVE_INFINITY;for(var S in h)h[S].pollingInterval&&(I=Math.min(h[S].pollingInterval,I));return I}return u},Il=function(t){var e=t.reducerPath,r=t.context,n=t.api,i=t.refetchQuery,a=t.internalState,s=n.internalActions.removeQueryResult,u=function(c,f){dn.match(c)&&o(f,"refetchOnFocus"),fn.match(c)&&o(f,"refetchOnReconnect")};function o(c,f){var p=c.getState()[e],y=p.queries,h=a.currentSubscriptions;r.batch(function(){for(var I=0,S=Object.keys(h);I<S.length;I++){var T=S[I],A=y[T],w=h[T];if(!(!w||!A)){var E=Object.values(w).some(function(g){return g[f]===!0})||Object.values(w).every(function(g){return g[f]===void 0})&&p.config[f];E&&(Object.keys(w).length===0?c.dispatch(s({queryCacheKey:T})):A.status!==ie.uninitialized&&c.dispatch(i(A,T)))}}})}return u},Ea=new Error("Promise never resolved before cacheEntryRemoved."),wl=function(t){var e=t.api,r=t.reducerPath,n=t.context,i=t.queryThunk,a=t.mutationThunk;t.internalState;var s=L.isAsyncThunkAction(i),u=L.isAsyncThunkAction(a),o=L.isFulfilled(i,a),c={},f=function(h,I,S){var T=p(h);if(i.pending.match(h)){var A=S[r].queries[T],w=I.getState()[r].queries[T];!A&&w&&y(h.meta.arg.endpointName,h.meta.arg.originalArgs,T,I,h.meta.requestId)}else if(a.pending.match(h)){var w=I.getState()[r].mutations[T];w&&y(h.meta.arg.endpointName,h.meta.arg.originalArgs,T,I,h.meta.requestId)}else if(o(h)){var E=c[T];E!=null&&E.valueResolved&&(E.valueResolved({data:h.payload,meta:h.meta.baseQueryMeta}),delete E.valueResolved)}else if(e.internalActions.removeQueryResult.match(h)||e.internalActions.removeMutationResult.match(h)){var E=c[T];E&&(delete c[T],E.cacheEntryRemoved())}else if(e.util.resetApiState.match(h))for(var g=0,v=Object.entries(c);g<v.length;g++){var d=v[g],b=d[0],E=d[1];delete c[b],E.cacheEntryRemoved()}};function p(h){return s(h)?h.meta.arg.queryCacheKey:u(h)?h.meta.requestId:e.internalActions.removeQueryResult.match(h)?h.payload.queryCacheKey:e.internalActions.removeMutationResult.match(h)?qt(h.payload):""}function y(h,I,S,T,A){var w=n.endpointDefinitions[h],E=w==null?void 0:w.onCacheEntryAdded;if(E){var g={},v=new Promise(function(R){g.cacheEntryRemoved=R}),d=Promise.race([new Promise(function(R){g.valueResolved=R}),v.then(function(){throw Ea})]);d.catch(function(){}),c[S]=g;var b=e.endpoints[h].select(w.type===Ae.query?I:S),m=T.dispatch(function(R,C,P){return P}),O=Pe(oe({},T),{getCacheEntry:function(){return b(T.getState())},requestId:A,extra:m,updateCachedData:w.type===Ae.query?function(R){return T.dispatch(e.util.updateQueryData(h,I,R))}:void 0,cacheDataLoaded:d,cacheEntryRemoved:v}),_=E(I,O);Promise.resolve(_).catch(function(R){if(R!==Ea)throw R})}}return f},Sl=function(t){var e=t.api,r=t.context,n=t.queryThunk,i=t.mutationThunk,a=L.isPending(n,i),s=L.isRejected(n,i),u=L.isFulfilled(n,i),o={},c=function(f,p){var y,h,I;if(a(f)){var S=f.meta,T=S.requestId,A=S.arg,w=A.endpointName,E=A.originalArgs,g=r.endpointDefinitions[w],v=g==null?void 0:g.onQueryStarted;if(v){var d={},b=new Promise(function(M,B){d.resolve=M,d.reject=B});b.catch(function(){}),o[T]=d;var m=e.endpoints[w].select(g.type===Ae.query?E:T),O=p.dispatch(function(M,B,F){return F}),_=Pe(oe({},p),{getCacheEntry:function(){return m(p.getState())},requestId:T,extra:O,updateCachedData:g.type===Ae.query?function(M){return p.dispatch(e.util.updateQueryData(w,E,M))}:void 0,queryFulfilled:b});v(E,_)}}else if(u(f)){var R=f.meta,T=R.requestId,C=R.baseQueryMeta;(y=o[T])==null||y.resolve({data:f.payload,meta:C}),delete o[T]}else if(s(f)){var P=f.meta,T=P.requestId,D=P.rejectedWithValue,C=P.baseQueryMeta;(I=o[T])==null||I.reject({error:(h=f.payload)!=null?h:f.error,isUnhandledError:!D,meta:C}),delete o[T]}};return c},El=function(t){var e=t.api,r=t.context.apiUid,n=t.reducerPath;return function(i,a){var s,u;e.util.resetApiState.match(i)&&a.dispatch(e.internalActions.middlewareRegistered(r)),typeof process<"u"&&process.env.NODE_ENV==="development"&&e.internalActions.middlewareRegistered.match(i)&&i.payload===r&&((u=(s=a.getState()[n])==null?void 0:s.config)==null?void 0:u.middlewareRegistered)==="conflict"&&console.warn('There is a mismatch between slice and middleware for the reducerPath "'+n+`".
You can only have one api per reducer path, this will lead to crashes in various situations!`+(n==="api"?`
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!`:""))}},Ta,Tl=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis):function(t){return(Ta||(Ta=Promise.resolve())).then(t).catch(function(e){return setTimeout(function(){throw e},0)})},Ol=function(t){var e=t.api,r=t.queryThunk,n=t.internalState,i=e.reducerPath+"/subscriptions",a=null,s=!1,u=e.internalActions,o=u.updateSubscriptionOptions,c=u.unsubscribeQueryResult,f=function(p,y){var h,I,S,T,A,w,E,g,v;if(o.match(y)){var d=y.payload,b=d.queryCacheKey,m=d.requestId,O=d.options;return(h=p==null?void 0:p[b])!=null&&h[m]&&(p[b][m]=O),!0}if(c.match(y)){var _=y.payload,b=_.queryCacheKey,m=_.requestId;return p[b]&&delete p[b][m],!0}if(e.internalActions.removeQueryResult.match(y))return delete p[y.payload.queryCacheKey],!0;if(r.pending.match(y)){var R=y.meta,C=R.arg,m=R.requestId;if(C.subscribe){var P=(S=p[I=C.queryCacheKey])!=null?S:p[I]={};return P[m]=(A=(T=C.subscriptionOptions)!=null?T:P[m])!=null?A:{},!0}}if(r.rejected.match(y)){var D=y.meta,M=D.condition,C=D.arg,m=D.requestId;if(M&&C.subscribe){var P=(E=p[w=C.queryCacheKey])!=null?E:p[w]={};return P[m]=(v=(g=C.subscriptionOptions)!=null?g:P[m])!=null?v:{},!0}}return!1};return function(p,y){var h,I;if(a||(a=JSON.parse(JSON.stringify(n.currentSubscriptions))),e.util.resetApiState.match(p))return a=n.currentSubscriptions={},[!0,!1];if(e.internalActions.internal_probeSubscription.match(p)){var S=p.payload,T=S.queryCacheKey,A=S.requestId,w=!!((h=n.currentSubscriptions[T])!=null&&h[A]);return[!1,w]}var E=f(n.currentSubscriptions,p);if(E){s||(Tl(function(){var b=JSON.parse(JSON.stringify(n.currentSubscriptions)),m=ta(a,function(){return b}),O=m[1];y.next(e.internalActions.subscriptionsUpdated(O)),a=b,s=!1}),s=!0);var g=!!((I=p.type)!=null&&I.startsWith(i)),v=r.rejected.match(p)&&p.meta.condition&&!!p.meta.arg.subscribe,d=!g&&!v;return[d,!1]}return[!0,!1]}};function Rl(t){var e=t.reducerPath,r=t.queryThunk,n=t.api,i=t.context,a=i.apiUid,s={invalidateTags:L.createAction(e+"/invalidateTags")},u=function(p){return!!p&&typeof p.type=="string"&&p.type.startsWith(e+"/")},o=[El,yl,bl,_l,wl,Sl],c=function(p){var y=!1,h={currentSubscriptions:{}},I=Pe(oe({},t),{internalState:h,refetchQuery:f}),S=o.map(function(w){return w(I)}),T=Ol(I),A=Il(I);return function(w){return function(E){y||(y=!0,p.dispatch(n.internalActions.middlewareRegistered(a)));var g=Pe(oe({},p),{next:w}),v=p.getState(),d=T(E,g,v),b=d[0],m=d[1],O;if(b?O=w(E):O=m,p.getState()[e]&&(A(E,g,v),u(E)||i.hasRehydrationInfo(E)))for(var _=0,R=S;_<R.length;_++){var C=R[_];C(E,g,v)}return O}}};return{middleware:c,actions:s};function f(p,y,h){return h===void 0&&(h={}),r(oe({type:"query",endpointName:p.endpointName,originalArgs:p.originalArgs,subscribe:!1,forceRefetch:!0,queryCacheKey:y},h))}}function Ye(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];Object.assign.apply(Object,hr([t],e))}var Oa=Symbol(),Pl=function(){return{name:Oa,init:function(t,e,r){var n=e.baseQuery,i=e.tagTypes,a=e.reducerPath,s=e.serializeQueryArgs,u=e.keepUnusedDataFor,o=e.refetchOnMountOrArgChange,c=e.refetchOnFocus,f=e.refetchOnReconnect;jc();var p=function(H){return typeof process<"u"&&process.env.NODE_ENV==="development"&&(i.includes(H.type)||console.error("Tag type '"+H.type+"' was used, but not specified in `tagTypes`!")),H};Object.assign(t,{reducerPath:a,endpoints:{},internalActions:{onOnline:fn,onOffline:va,onFocus:dn,onFocusLost:pa},util:{}});var y=fl({baseQuery:n,reducerPath:a,context:r,api:t,serializeQueryArgs:s,assertTagType:p}),h=y.queryThunk,I=y.mutationThunk,S=y.patchQueryData,T=y.updateQueryData,A=y.upsertQueryData,w=y.prefetch,E=y.buildMatchThunkActions,g=hl({context:r,queryThunk:h,mutationThunk:I,reducerPath:a,assertTagType:p,config:{refetchOnFocus:c,refetchOnReconnect:f,refetchOnMountOrArgChange:o,keepUnusedDataFor:u,reducerPath:a}}),v=g.reducer,d=g.actions;Ye(t.util,{patchQueryData:S,updateQueryData:T,upsertQueryData:A,prefetch:w,resetApiState:d.resetApiState}),Ye(t.internalActions,d);var b=Rl({reducerPath:a,context:r,queryThunk:h,mutationThunk:I,api:t,assertTagType:p}),m=b.middleware,O=b.actions;Ye(t.util,O),Ye(t,{reducer:v,middleware:m});var _=pl({serializeQueryArgs:s,reducerPath:a}),R=_.buildQuerySelector,C=_.buildMutationSelector,P=_.selectInvalidatedBy;Ye(t.util,{selectInvalidatedBy:P});var D=dl({queryThunk:h,mutationThunk:I,api:t,serializeQueryArgs:s,context:r}),M=D.buildInitiateQuery,B=D.buildInitiateMutation,F=D.getRunningMutationThunk,j=D.getRunningMutationsThunk,K=D.getRunningQueriesThunk,W=D.getRunningQueryThunk,z=D.getRunningOperationPromises,J=D.removalWarning;return Ye(t.util,{getRunningOperationPromises:z,getRunningOperationPromise:J,getRunningMutationThunk:F,getRunningMutationsThunk:j,getRunningQueryThunk:W,getRunningQueriesThunk:K}),{name:Oa,injectEndpoint:function(H,Y){var Q,X,ae=t;(X=(Q=ae.endpoints)[H])!=null||(Q[H]={}),ga(Y)?Ye(ae.endpoints[H],{name:H,select:R(H,Y),initiate:M(H,Y)},E(h,H)):cl(Y)&&Ye(ae.endpoints[H],{name:H,select:C(),initiate:B(H)},E(I,H))}}}}},Al=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t},Cl=Object.defineProperty,kl=Object.defineProperties,Dl=Object.getOwnPropertyDescriptors,Ra=Object.getOwnPropertySymbols,Nl=Object.prototype.hasOwnProperty,Ml=Object.prototype.propertyIsEnumerable,Pa=function(t,e,r){return e in t?Cl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},He=function(t,e){for(var r in e||(e={}))Nl.call(e,r)&&Pa(t,r,e[r]);if(Ra)for(var n=0,i=Ra(e);n<i.length;n++){var r=i[n];Ml.call(e,r)&&Pa(t,r,e[r])}return t},yr=function(t,e){return kl(t,Dl(e))};function Aa(t,e,r,n){var i=U.useMemo(function(){return{queryArgs:t,serialized:typeof t=="object"?e({queryArgs:t,endpointDefinition:r,endpointName:n}):t}},[t,e,r,n]),a=U.useRef(i);return U.useEffect(function(){a.current.serialized!==i.serialized&&(a.current=i)},[i]),a.current.serialized===i.serialized?a.current.queryArgs:t}var mn=Symbol();function yn(t){var e=U.useRef(t);return U.useEffect(function(){ke.shallowEqual(e.current,t)||(e.current=t)},[t]),ke.shallowEqual(e.current,t)?e.current:t}var br=WeakMap?new WeakMap:void 0,xl=function(t){var e=t.endpointName,r=t.queryArgs,n="",i=br==null?void 0:br.get(r);if(typeof i=="string")n=i;else{var a=JSON.stringify(r,function(s,u){return L.isPlainObject(u)?Object.keys(u).sort().reduce(function(o,c){return o[c]=u[c],o},{}):u});L.isPlainObject(r)&&(br==null||br.set(r,a)),n=a}return e+"("+n+")"},Ll=typeof window<"u"&&window.document&&window.document.createElement?U.useLayoutEffect:U.useEffect,Ul=function(t){return t},Fl=function(t){return t.isUninitialized?yr(He({},t),{isUninitialized:!1,isFetching:!0,isLoading:t.data===void 0,status:ie.pending}):t};function jl(t){var e=t.api,r=t.moduleOptions,n=r.batch,i=r.useDispatch,a=r.useSelector,s=r.useStore,u=r.unstable__sideEffectsInRender,o=t.serializeQueryArgs,c=t.context,f=u?function(S){return S()}:U.useEffect;return{buildQueryHooks:h,buildMutationHook:I,usePrefetch:y};function p(S,T,A){if(T!=null&&T.endpointName&&S.isUninitialized){var w=T.endpointName,E=c.endpointDefinitions[w];o({queryArgs:T.originalArgs,endpointDefinition:E,endpointName:w})===o({queryArgs:A,endpointDefinition:E,endpointName:w})&&(T=void 0)}var g=S.isSuccess?S.data:T==null?void 0:T.data;g===void 0&&(g=S.data);var v=g!==void 0,d=S.isLoading,b=!v&&d,m=S.isSuccess||d&&v;return yr(He({},S),{data:g,currentData:S.data,isFetching:d,isLoading:b,isSuccess:m})}function y(S,T){var A=i(),w=yn(T);return U.useCallback(function(E,g){return A(e.util.prefetch(S,E,He(He({},w),g)))},[S,A,w])}function h(S){var T=function(E,g){var v=g===void 0?{}:g,d=v.refetchOnReconnect,b=v.refetchOnFocus,m=v.refetchOnMountOrArgChange,O=v.skip,_=O===void 0?!1:O,R=v.pollingInterval,C=R===void 0?0:R,P=e.endpoints[S].initiate,D=i(),M=Aa(_?it:E,xl,c.endpointDefinitions[S],S),B=yn({refetchOnReconnect:d,refetchOnFocus:b,pollingInterval:C}),F=U.useRef(!1),j=U.useRef(),K=j.current||{},W=K.queryCacheKey,z=K.requestId,J=!1;if(W&&z){var H=D(e.internalActions.internal_probeSubscription({queryCacheKey:W,requestId:z}));if(process.env.NODE_ENV!=="production"&&typeof H!="boolean")throw new Error('Warning: Middleware for RTK-Query API at reducerPath "'+e.reducerPath+`" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);J=!!H}var Y=!J&&F.current;return f(function(){F.current=J}),f(function(){Y&&(j.current=void 0)},[Y]),f(function(){var Q,X=j.current;if(typeof process<"u"&&process.env.NODE_ENV==="removeMeOnCompilation"&&console.log(Y),M===it){X==null||X.unsubscribe(),j.current=void 0;return}var ae=(Q=j.current)==null?void 0:Q.subscriptionOptions;if(!X||X.arg!==M){X==null||X.unsubscribe();var ve=D(P(M,{subscriptionOptions:B,forceRefetch:m}));j.current=ve}else B!==ae&&X.updateSubscriptionOptions(B)},[D,P,m,M,B,Y]),U.useEffect(function(){return function(){var Q;(Q=j.current)==null||Q.unsubscribe(),j.current=void 0}},[]),U.useMemo(function(){return{refetch:function(){var Q;if(!j.current)throw new Error("Cannot refetch a query that has not been started yet.");return(Q=j.current)==null?void 0:Q.refetch()}}},[])},A=function(E){var g=E===void 0?{}:E,v=g.refetchOnReconnect,d=g.refetchOnFocus,b=g.pollingInterval,m=b===void 0?0:b,O=e.endpoints[S].initiate,_=i(),R=U.useState(mn),C=R[0],P=R[1],D=U.useRef(),M=yn({refetchOnReconnect:v,refetchOnFocus:d,pollingInterval:m});f(function(){var j,K,W=(j=D.current)==null?void 0:j.subscriptionOptions;M!==W&&((K=D.current)==null||K.updateSubscriptionOptions(M))},[M]);var B=U.useRef(M);f(function(){B.current=M},[M]);var F=U.useCallback(function(j,K){K===void 0&&(K=!1);var W;return n(function(){var z;(z=D.current)==null||z.unsubscribe(),D.current=W=_(O(j,{subscriptionOptions:B.current,forceRefetch:!K})),P(j)}),W},[_,O]);return U.useEffect(function(){return function(){var j;(j=D==null?void 0:D.current)==null||j.unsubscribe()}},[]),U.useEffect(function(){C!==mn&&!D.current&&F(C,!0)},[C,F]),U.useMemo(function(){return[F,C]},[F,C])},w=function(E,g){var v=g===void 0?{}:g,d=v.skip,b=d===void 0?!1:d,m=v.selectFromResult,O=e.endpoints[S].select,_=Aa(b?it:E,o,c.endpointDefinitions[S],S),R=U.useRef(),C=U.useMemo(function(){return L.createSelector([O(_),function(F,j){return j},function(F){return _}],p)},[O,_]),P=U.useMemo(function(){return m?L.createSelector([C],m):C},[C,m]),D=a(function(F){return P(F,R.current)},ke.shallowEqual),M=s(),B=C(M.getState(),R.current);return Ll(function(){R.current=B},[B]),D};return{useQueryState:w,useQuerySubscription:T,useLazyQuerySubscription:A,useLazyQuery:function(E){var g=A(E),v=g[0],d=g[1],b=w(d,yr(He({},E),{skip:d===mn})),m=U.useMemo(function(){return{lastArg:d}},[d]);return U.useMemo(function(){return[v,b,m]},[v,b,m])},useQuery:function(E,g){var v=T(E,g),d=w(E,He({selectFromResult:E===it||g!=null&&g.skip?void 0:Fl},g)),b=d.data,m=d.status,O=d.isLoading,_=d.isSuccess,R=d.isError,C=d.error;return U.useDebugValue({data:b,status:m,isLoading:O,isSuccess:_,isError:R,error:C}),U.useMemo(function(){return He(He({},d),v)},[d,v])}}}function I(S){return function(T){var A=T===void 0?{}:T,w=A.selectFromResult,E=w===void 0?Ul:w,g=A.fixedCacheKey,v=e.endpoints[S],d=v.select,b=v.initiate,m=i(),O=U.useState(),_=O[0],R=O[1];U.useEffect(function(){return function(){_!=null&&_.arg.fixedCacheKey||_==null||_.reset()}},[_]);var C=U.useCallback(function(X){var ae=m(b(X,{fixedCacheKey:g}));return R(ae),ae},[m,b,g]),P=(_||{}).requestId,D=U.useMemo(function(){return L.createSelector([d({fixedCacheKey:g,requestId:_==null?void 0:_.requestId})],E)},[d,_,E,g]),M=a(D,ke.shallowEqual),B=g==null?_==null?void 0:_.arg.originalArgs:void 0,F=U.useCallback(function(){n(function(){_&&R(void 0),g&&m(e.internalActions.removeMutationResult({requestId:P,fixedCacheKey:g}))})},[m,g,_,P]),j=M.endpointName,K=M.data,W=M.status,z=M.isLoading,J=M.isSuccess,H=M.isError,Y=M.error;U.useDebugValue({endpointName:j,data:K,status:W,isLoading:z,isSuccess:J,isError:H,error:Y});var Q=U.useMemo(function(){return yr(He({},M),{originalArgs:B,reset:F})},[M,B,F]);return U.useMemo(function(){return[C,Q]},[C,Q])}}}var _r;(function(t){t.query="query",t.mutation="mutation"})(_r||(_r={}));function Bl(t){return t.type===_r.query}function ql(t){return t.type===_r.mutation}function bn(t){return t.replace(t[0],t[0].toUpperCase())}function Ir(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];Object.assign.apply(Object,Al([t],e))}var Vl=Symbol(),Hl=function(t){var e=t===void 0?{}:t,r=e.batch,n=r===void 0?ke.batch:r,i=e.useDispatch,a=i===void 0?ke.useDispatch:i,s=e.useSelector,u=s===void 0?ke.useSelector:s,o=e.useStore,c=o===void 0?ke.useStore:o,f=e.unstable__sideEffectsInRender,p=f===void 0?!1:f;return{name:Vl,init:function(y,h,I){var S=h.serializeQueryArgs,T=y,A=jl({api:y,moduleOptions:{batch:n,useDispatch:a,useSelector:u,useStore:c,unstable__sideEffectsInRender:p},serializeQueryArgs:S,context:I}),w=A.buildQueryHooks,E=A.buildMutationHook,g=A.usePrefetch;return Ir(T,{usePrefetch:g}),Ir(I,{batch:n}),{injectEndpoint:function(v,d){if(Bl(d)){var b=w(v),m=b.useQuery,O=b.useLazyQuery,_=b.useLazyQuerySubscription,R=b.useQueryState,C=b.useQuerySubscription;Ir(T.endpoints[v],{useQuery:m,useLazyQuery:O,useLazyQuerySubscription:_,useQueryState:R,useQuerySubscription:C}),y["use"+bn(v)+"Query"]=m,y["useLazy"+bn(v)+"Query"]=O}else if(ql(d)){var P=E(v);Ir(T.endpoints[v],{useMutation:P}),y["use"+bn(v)+"Mutation"]=P}}}}}},Wl=vl(Pl(),Hl());const zl=ul({prepareHeaders:(t,{getState:e,endpoint:r})=>{const{isAuthenticated:n,refresh_token:i}=e().userReducer;return n&&i&&r==="updateLogin"&&t.set(ee.refreshTokenHeader,ee.keywordRefreshTokenHeader?`${ee.keywordRefreshTokenHeader} ${i}`:i),t.set("Content-Type","application/json")}}),at=Wl({baseQuery:async(t,e,r)=>{const n=ee.endpoint,i=typeof t=="string"?n:{...t,url:n+t.url};return zl(i,e,r)},endpoints:t=>({login:t.mutation({query({email:e,encodedBody:r,password:n,username:i,token:a}){if(a)return{url:"",method:"POST",headers:{Authorization:`${ee.keyword} ${a}`}};if(r)return{url:ee.urlLoginForBase64??"",method:"POST",headers:{authorization:"Basic "+r}};let s={};return n&&(s={...s,password:n}),e&&(s={...s,email:e}),i&&(s={...s,username:i}),{url:ee.urlLoginForEmailOrUser??"",method:"POST",body:s}}}),signIn:t.mutation({query({body:e,encodedBody:r}){return r?{url:ee.urlSignInForBase64??"sign-in",method:"POST",body:e}:{url:ee.urlSignIn??"sign-in",method:"POST",body:e}}}),updateLogin:t.mutation({query(){return{url:ee.urlForRefreshToken??"login/update",method:"PUT"}}}),passwordReset:t.mutation({query(e){return{url:ee.urlForPasswordReset??"reset-password",method:"POST",body:e}}})})}),{useLoginMutation:Ql,useUpdateLoginMutation:Kl,usePasswordResetMutation:Gl,useSignInMutation:$l}=at,Hd="",Jl=({children:t,isLoading:e,scrollPosition:r,language:n,toastMessage:i})=>{const a=fe.useSignal(""),s=fe.useSignal({}),[u,{isSuccess:o,isLoading:c,error:f}]=Gl(),{message:p}=U.useContext(Er),y=U.useRef(null),h=I=>{I.preventDefault(),!o&&u({email:a.value})};return U.useEffect(()=>{if(y.current){const I=y.current.offsetWidth;y.current.scrollTo(r.value?I:0,0)}},[r.value]),U.useEffect(()=>{f?"data"in f?s.value={code:"auth/password-reset-error",message:f.data&&(Object.values(f.data).find(I=>typeof I=="string")??f.data)}:"status"in f&&(s.value={code:"auth/fetch-failed",message:"error"in f?f.error:"Unexpected Error"}):s.value.message&&(s.value={})},[f]),U.useEffect(()=>{o&&(i.value=n.forgotPasswordLabel)},[o]),N.jsxs("section",{ref:y,className:"modal-container mandatory-scroll-snapping",children:[N.jsxs("section",{className:"modal-data",children:[N.jsx("div",{className:"modal-message",children:e?N.jsx(Ca,{}):typeof p=="string"?N.jsx("h1",{children:p}):p}),N.jsx("div",{className:"modal-footer",children:t})]}),N.jsxs("section",{className:"password-recovery",children:[N.jsx("span",{className:"go-back",onClick:()=>r.value=!1,children:"<"}),N.jsxs("form",{onSubmit:h,children:[N.jsx("h1",{children:n.forgotPassword}),N.jsxs("label",{children:["Email:",N.jsx("input",{required:!0,onChange:I=>a.value=I.currentTarget.value,value:a.value,type:"email"})]}),N.jsx("button",{className:"is-btn blue",children:n.submit})]}),N.jsx(La,{error:s.value}),c&&N.jsx(Ca,{})]}),i.value&&N.jsxs("div",{className:"simple-toast show",children:[N.jsx("button",{onClick:()=>i.value=void 0,children:"X"}),N.jsx("div",{className:"toast-message",children:i})]})]})},Wd="",Ca=()=>N.jsx("div",{className:"loader-container",children:N.jsxs("div",{className:"loader-box",children:[N.jsx("div",{className:"load blue"}),N.jsx("div",{className:"load red"}),N.jsx("div",{className:"load orange"}),N.jsx("div",{className:"load yellow"}),N.jsx("div",{className:"load green"})]})}),zd="",Yl=(t,e)=>{var r;return((r=t.find(n=>n.code==="*"?!0:n.code===e.code))==null?void 0:r.message)??e.message},Xl=(t,e)=>{const{code:r,message:n,customData:i}=t,{email:a}=i;e.value={code:r,message:n,email:a}},ka="IS_GOOGLE",Da="IS_FACEBOOK",Na="IS_TWITTER",Ma="IS_GITHUB",xa="IS_MICROSOFT",Zl=[{method:"google",constName:ka,name:"Google",className:"google-btn"},{method:"facebook",constName:Da,name:"Facebook",className:"facebook-btn"},{method:"twitter",constName:Na,name:"Twitter",className:"twitter-btn"},{method:"github",constName:Ma,name:"GitHub",className:"github-btn"},{method:"microsoft",constName:xa,name:"Microsoft",className:"microsoft-btn"}],ed=t=>Zl.filter(e=>t.find(r=>e.method===r)),td={es:{logIn:"Iniciar sesión",username:"Usuario",password:"Contraseña",confirm_password:"Confirmar contraseña",continue:"Continuar",submit:"Enviar",continueAs:"Continuar como:",loggedWith:"Logueado con",logOut:"Desloguearse",forgotPassword:"Recuperar contraseña",forgotPasswordLabel:"Email enviado correctamente.",signIn:"Crear cuenta",passwordNotMatch:"Las contraseñas no coinciden",minLength:"La contraseña debe contener mínimo 8 caracteres"},en:{logIn:"Log In",username:"Username",password:"Password",confirm_password:"Confirm Password",continue:"Continue",submit:"Submit",continueAs:"Continue as:",loggedWith:"Logged with",logOut:"Log Out",forgotPassword:"Password Recovery",forgotPasswordLabel:"Email sended successfully.",signIn:"Create account",passwordNotMatch:"Passwords do not match",minLength:"Passwords should contain a minimum of 8 characters"}},rd=t=>td[t],nd=1e3,id=5e3,ad=()=>{const t=fe.useSignal(void 0),e=fe.useSignal(void 0),r=fe.useSignal(void 0);let n=U.useRef(void 0);const i=U.useMemo(()=>(a,s,u)=>new Promise(o=>{if(clearInterval(n.current),n.current=void 0,a.message){s.value=a.message;return}if(!a.expiry){e.value={code:"auth/invalid-auth-response",message:"User response must have an expiry field"};return}n.current=setInterval(()=>{u().unwrap().then(c=>t.value=c).catch(c=>{t.value=void 0,clearInterval(n.current),"data"in c?e.value={code:"auth/firebase-credential-not-provided",message:c.data&&(Object.values(c.data).find(f=>typeof f=="string")??c.data)}:"status"in c&&(e.value={code:"auth/fetch-failed",message:"error"in c?c.error:"Unexpected Error"})})},a.expiry*nd-id),t.value=a,r.value=async()=>{await _i(Be()).finally(()=>clearInterval(n.current)),r.value=void 0},o()}),[]);return U.useEffect(()=>()=>{n.current&&clearInterval(n.current)},[]),{user:t.value,updateError:e.value,logOut:r.value,authManager:i}};var mt=(t=>(t.LOGIN="login",t.SIGN_IN="signIn",t))(mt||{});const sd=t=>Lt(Be(),Qi).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),od=t=>Lt(Be(),zi).catch(e=>Xl(e,t)),ud=t=>Lt(Be(),Cc).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),cd=t=>Lt(Be(),kc).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),ld=t=>Lt(Be(),Dc).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),dd={login:{email:"",password:"",username:""},signIn:{email:"",username:"",password1:"",password2:""}},fd=(t,e)=>{let r="";const{password1:n,password2:i}=t;return n.length>0&&n.length<8?r=e.minLength:i.length>0&&i!==n&&(r=e.passwordNotMatch),r},hd=(t,e,r,n)=>{const[i]=Ql(),[a]=$l(),[s]=Kl(),u=fe.useSignal(dd),o=fe.useSignal(!1),c=fe.useSignal(!1),f=fe.useSignal(!1),p=fe.useSignal({}),y=()=>{f.value=!1,n&&n()},h=v=>{"data"in v?p.value={code:"auth/firebase-credential-not-provided",message:v.data&&(Object.values(v.data).find(d=>typeof d=="string")??v.data)}:"status"in v&&(p.value={code:"auth/fetch-failed",message:"error"in v?v.error:"Unexpected Error"}),f.value=!1},I=()=>{fe.batch(()=>{o.value=!o.value,c.value&&(c.value=!c.value)})},S=v=>{const{target:d}=v,b=d.getAttribute("data-section")??mt.LOGIN;if(u.value={...u.value,[b]:{...u.value[b],[d.name]:d.value}},b===mt.SIGN_IN){const m=fd(u.value[b],e);m?p.value={code:"sign-in/password",message:m}:p.value={}}},T=v=>{if(ee.hasToS&&!o.value){c.value=!0;return}f.value=!0,E(v)},A=async v=>{if(v.preventDefault(),p.value={},ee.hasToS&&!o.value){c.value=!0;return}if(f.value)return;f.value=!0;const d=v.currentTarget.getAttribute("data-section")??mt.LOGIN;let b={};if(d===mt.LOGIN){if(ee.acceptUsername?b={username:u.value[d].username,password:u.value[d].password}:b={email:u.value[d].email,password:u.value[d].password},ee.bodyAsBase64){const m=Object.entries(b).map(([_,R])=>`${_}=${R}`).join("&");b={encodedBody:btoa(m)}}i(b).unwrap().then(w).catch(h)}else if(d===mt.SIGN_IN){let m=u.value[d];if(ee.bodyAsBase64){const O=Object.entries(m).map(([_,R])=>`${_}=${R}`).join("&");m=btoa(O)}a({body:m,encodedBody:ee.bodyAsBase64}).unwrap().then(w).catch(h)}},w=async v=>{t(v,r,s).then(y)},E=async v=>{f.value=!0,i({token:v}).unwrap().then(w).catch(h)};return{form:u,radio:o,isLoading:f,handleError:p,confirmTp:c,handleChange:S,handleRadio:I,handleSocialLogin:async v=>{if(ee.hasToS&&!o.value){c.value=!0;return}if(!f.value)switch(f.value=!0,v){case ka:od(p);break;case Da:sd(p);break;case Na:ud(p);break;case Ma:cd(p);break;case xa:ld(p);break}},handleSubmit:A,handleSubmitUserAlreadyLogged:T,handleToken:E}},pd=()=>{const t=fe.useSignal(!1),e=fe.useSignal(void 0),r=fe.useSignal(void 0),{authManager:n,onSuccessFn:i}=U.useContext(Er),a=rd(ee.language),{form:s,radio:u,confirmTp:o,isLoading:c,handleError:f,handleSubmit:p,handleSubmitUserAlreadyLogged:y,handleChange:h,handleRadio:I,handleSocialLogin:S,handleToken:T}=hd(n,a,e,i);return U.useEffect(()=>{c.value&&window.scrollTo({behavior:"smooth",top:0})},[c.value]),U.useEffect(()=>{(async()=>{c.value=!0;const w=await qu(Be());if(w)w.user.getIdToken().then(E=>T(E));else{let E=pu(Be(),async g=>{g&&await g.getIdToken().then(v=>{const d=g.providerData[0];r.value={...d,providerId:d.providerId.split(".")[0],tokenId:v}}),c.value=!1,E()})}})()},[]),N.jsx(Jl,{isLoading:c.value,scrollPosition:t,language:a,toastMessage:e,children:N.jsxs("div",{className:"login-container",children:[N.jsxs("div",{className:"login",children:[N.jsx(vd,{handleSocialLogin:S}),N.jsx(gd,{forgotPassword:t,form:s,handleChange:h,handleSubmit:p,language:a})]}),N.jsx(La,{error:f.value}),N.jsx(md,{alreadyUser:r,language:a,handleSubmitUserAlreadyLogged:y}),N.jsx(yd,{confirmTp:o.value,handleRadio:I,radioValue:u.value})]})})},vd=({handleSocialLogin:t})=>N.jsx("div",{children:ed(ee.signInMethods).map(({className:e,name:r,constName:n,icon:i},a)=>N.jsxs("button",{onClick:()=>t(n),className:e,children:[i&&i,r]},a))}),gd=({handleSubmit:t,language:e,handleChange:r,form:n,forgotPassword:i})=>{const a=fe.useSignal(!0),s=U.useRef(null);return U.useEffect(()=>{if(s.current){const u=s.current.offsetWidth;s.current.scrollTo(a.value?0:u,0)}},[a.value]),U.useEffect(()=>{i.value&&window.scrollTo({behavior:"smooth",top:0})},[i.value]),N.jsx("div",{children:N.jsxs("section",{ref:s,className:"form-email mandatory-scroll-snapping",children:[N.jsxs("form",{className:"form-field",autoComplete:"on","data-section":"login",onSubmit:t,children:[ee.acceptUsername?N.jsx(N.Fragment,{children:N.jsx("input",{required:!0,"data-section":"login",autoComplete:"username",placeholder:`Email | ${e.username}`,name:"username",onChange:r,value:n.value.login.username,type:"text"})}):N.jsx(N.Fragment,{children:N.jsx("input",{required:!0,"data-section":"login",autoComplete:"email",placeholder:"Email",name:"email",onChange:r,value:n.value.login.email,type:"email"})}),N.jsx("input",{required:!0,"data-section":"login",autoComplete:"current-password",placeholder:e.password,name:"password",onChange:r,value:n.value.login.password,type:"password"}),N.jsx("span",{onClick:()=>i.value=!0,className:"forgot-password",children:e.forgotPassword}),N.jsx("button",{className:"email-login",children:e.logIn}),N.jsx("span",{onClick:()=>a.value=!1,className:"form-action-change",children:e.signIn})]}),N.jsxs("form",{className:"form-field",autoComplete:"on","data-section":"signIn",onSubmit:t,children:[N.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:"Email",name:"email",onChange:r,value:n.value.signIn.email,type:"email"}),N.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:`${e.username}`,name:"username",onChange:r,value:n.value.signIn.username,type:"text"}),N.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:e.password,name:"password1",onChange:r,value:n.value.signIn.password1,type:"password"}),N.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:e.confirm_password,name:"password2",onChange:r,value:n.value.signIn.password2,type:"password"}),N.jsx("button",{className:"email-login",children:e.signIn}),N.jsx("span",{onClick:()=>a.value=!0,className:"form-action-change",children:e.logIn})]})]})})},md=({alreadyUser:t,language:e,handleSubmitUserAlreadyLogged:r})=>{const n=()=>{_i(Be()).finally(()=>t.value=void 0)};return N.jsx(N.Fragment,{children:t.value&&N.jsxs("section",{className:"user-already-logged",children:[N.jsxs("p",{children:[e.continueAs," ",t.value.displayName,t.value.photoURL&&N.jsx("img",{src:t.value.photoURL,alt:"user image"}),N.jsxs("span",{children:[e.loggedWith," ",t.value.providerId]})]}),N.jsxs("div",{className:"user-logged-choice",children:[N.jsx("button",{onClick:()=>{var i;return r(((i=t.value)==null?void 0:i.tokenId)??"")},className:"choice-ok",children:"Ok"}),N.jsx("button",{onClick:n,className:"choice-not",children:e.logOut})]})]})})},yd=({confirmTp:t,handleRadio:e,radioValue:r})=>{const n=U.useRef(null);return U.useEffect(()=>{t&&n.current&&n.current.scrollIntoView({behavior:"smooth"})},[t]),N.jsx("section",{children:ee.hasToS&&N.jsxs(N.Fragment,{children:[N.jsxs("label",{className:"login-accept",children:[N.jsx("input",{onChange:e,type:"checkbox",checked:r}),ee.hasToS.label]}),t&&N.jsx("span",{ref:n,className:"notify error",children:ee.hasToS.errorLabel})]})})},La=({error:t})=>{const e=n=>N.jsx(N.Fragment,{children:Object.entries(n).map(([i,a],s)=>N.jsxs("span",{children:[i,": ",a]},s))}),r=(n,i)=>{const a=Yl(n,i);return N.jsx(N.Fragment,{children:typeof i=="string"?i:e(a)})};return N.jsx(N.Fragment,{children:t.message&&N.jsx("span",{autoFocus:!0,className:"notify error",children:ee.firebaseErrorMessages?r(ee.firebaseErrorMessages,t):typeof t.message=="string"?t.message:e(t.message)})})},Ua={user:null,isAuthenticated:!1,expiry:void 0,refresh_token:void 0,token:void 0},bd=L.createSlice({name:"UserSlice",initialState:Ua,reducers:{},extraReducers(t){t.addMatcher(at.endpoints.login.matchFulfilled,(e,r)=>(e={...r.payload,isAuthenticated:!0},e)).addMatcher(at.endpoints.updateLogin.matchFulfilled,(e,r)=>(e={...r.payload,isAuthenticated:!0},e)).addMatcher(at.endpoints.updateLogin.matchRejected,e=>(e=Ua,e))}}),{reducer:_d}=bd,Id=L.combineReducers({userReducer:_d,[at.reducerPath]:at.reducer}),wd=L.configureStore({reducer:Id,middleware:t=>t().concat(at.middleware)}),Sd=({message:t,authManager:e,onSuccessFn:r})=>Ac()?N.jsx(ke.Provider,{store:wd,children:N.jsx(Er.Provider,{value:{message:t,authManager:e,onSuccessFn:r},children:N.jsx(pd,{})})}):N.jsx("h1",{children:"Error: Missing firebaseConfig in setConfig"});be.Auth=Sd,be.setConfig=Pc,be.useAuth=ad,Object.defineProperty(be,Symbol.toStringTag,{value:"Module"})});
