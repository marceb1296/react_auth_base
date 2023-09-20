(function(be,F){typeof exports=="object"&&typeof module<"u"?F(exports,require("react"),require("@preact/signals-react"),require("@reduxjs/toolkit"),require("react-redux")):typeof define=="function"&&define.amd?define(["exports","react","@preact/signals-react","@reduxjs/toolkit","react-redux"],F):(be=typeof globalThis<"u"?globalThis:be||self,F(be.react_auth_base={},be.React,be.SignalsReact,be.ReduxToolkit,be.ReactRedux))})(this,function(be,F,de,L,xe){"use strict";var Tr={exports:{}},wt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var En;function $a(){if(En)return wt;En=1;var t=F,e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(o,u,l){var v,p={},b=null,h=null;l!==void 0&&(b=""+l),u.key!==void 0&&(b=""+u.key),u.ref!==void 0&&(h=u.ref);for(v in u)n.call(u,v)&&!a.hasOwnProperty(v)&&(p[v]=u[v]);if(o&&o.defaultProps)for(v in u=o.defaultProps,u)p[v]===void 0&&(p[v]=u[v]);return{$$typeof:e,type:o,key:b,ref:h,props:p,_owner:i.current}}return wt.Fragment=r,wt.jsx=s,wt.jsxs=s,wt}var Et={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tn;function Ja(){return Tn||(Tn=1,process.env.NODE_ENV!=="production"&&function(){var t=F,e=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),o=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen"),I=Symbol.iterator,T="@@iterator";function S(c){if(c===null||typeof c!="object")return null;var D=I&&c[I]||c[T];return typeof D=="function"?D:null}var R=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function O(c){{for(var D=arguments.length,x=new Array(D>1?D-1:0),H=1;H<D;H++)x[H-1]=arguments[H];g("error",c,x)}}function g(c,D,x){{var H=R.ReactDebugCurrentFrame,Z=H.getStackAddendum();Z!==""&&(D+="%s",x=x.concat([Z]));var ne=x.map(function($){return String($)});ne.unshift("Warning: "+D),Function.prototype.apply.call(console[c],console,ne)}}var m=!1,d=!1,f=!1,y=!1,_=!1,w;w=Symbol.for("react.module.reference");function E(c){return!!(typeof c=="string"||typeof c=="function"||c===n||c===a||_||c===i||c===l||c===v||y||c===h||m||d||f||typeof c=="object"&&c!==null&&(c.$$typeof===b||c.$$typeof===p||c.$$typeof===s||c.$$typeof===o||c.$$typeof===u||c.$$typeof===w||c.getModuleId!==void 0))}function A(c,D,x){var H=c.displayName;if(H)return H;var Z=D.displayName||D.name||"";return Z!==""?x+"("+Z+")":x}function C(c){return c.displayName||"Context"}function P(c){if(c==null)return null;if(typeof c.tag=="number"&&O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof c=="function")return c.displayName||c.name||null;if(typeof c=="string")return c;switch(c){case n:return"Fragment";case r:return"Portal";case a:return"Profiler";case i:return"StrictMode";case l:return"Suspense";case v:return"SuspenseList"}if(typeof c=="object")switch(c.$$typeof){case o:var D=c;return C(D)+".Consumer";case s:var x=c;return C(x._context)+".Provider";case u:return A(c,c.render,"ForwardRef");case p:var H=c.displayName||null;return H!==null?H:P(c.type)||"Memo";case b:{var Z=c,ne=Z._payload,$=Z._init;try{return P($(ne))}catch{return null}}}return null}var N=Object.assign,M=0,B,U,j,W,G,z,J;function V(){}V.__reactDisabledLog=!0;function Y(){{if(M===0){B=console.log,U=console.info,j=console.warn,W=console.error,G=console.group,z=console.groupCollapsed,J=console.groupEnd;var c={configurable:!0,enumerable:!0,value:V,writable:!0};Object.defineProperties(console,{info:c,log:c,warn:c,error:c,group:c,groupCollapsed:c,groupEnd:c})}M++}}function Q(){{if(M--,M===0){var c={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:N({},c,{value:B}),info:N({},c,{value:U}),warn:N({},c,{value:j}),error:N({},c,{value:W}),group:N({},c,{value:G}),groupCollapsed:N({},c,{value:z}),groupEnd:N({},c,{value:J})})}M<0&&O("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var X=R.ReactCurrentDispatcher,ae;function ve(c,D,x){{if(ae===void 0)try{throw Error()}catch(Z){var H=Z.stack.trim().match(/\n( *(at )?)/);ae=H&&H[1]||""}return`
`+ae+c}}var _e=!1,ge;{var Ie=typeof WeakMap=="function"?WeakMap:Map;ge=new Ie}function re(c,D){if(!c||_e)return"";{var x=ge.get(c);if(x!==void 0)return x}var H;_e=!0;var Z=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var ne;ne=X.current,X.current=null,Y();try{if(D){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(He){H=He}Reflect.construct(c,[],$)}else{try{$.call()}catch(He){H=He}c.call($.prototype)}}else{try{throw Error()}catch(He){H=He}c()}}catch(He){if(He&&H&&typeof He.stack=="string"){for(var K=He.stack.split(`
`),he=H.stack.split(`
`),ue=K.length-1,ce=he.length-1;ue>=1&&ce>=0&&K[ue]!==he[ce];)ce--;for(;ue>=1&&ce>=0;ue--,ce--)if(K[ue]!==he[ce]){if(ue!==1||ce!==1)do if(ue--,ce--,ce<0||K[ue]!==he[ce]){var Ee=`
`+K[ue].replace(" at new "," at ");return c.displayName&&Ee.includes("<anonymous>")&&(Ee=Ee.replace("<anonymous>",c.displayName)),typeof c=="function"&&ge.set(c,Ee),Ee}while(ue>=1&&ce>=0);break}}}finally{_e=!1,X.current=ne,Q(),Error.prepareStackTrace=Z}var It=c?c.displayName||c.name:"",Ga=It?ve(It):"";return typeof c=="function"&&ge.set(c,Ga),Ga}function fe(c,D,x){return re(c,!1)}function Ye(c){var D=c.prototype;return!!(D&&D.isReactComponent)}function ot(c,D,x){if(c==null)return"";if(typeof c=="function")return re(c,Ye(c));if(typeof c=="string")return ve(c);switch(c){case l:return ve("Suspense");case v:return ve("SuspenseList")}if(typeof c=="object")switch(c.$$typeof){case u:return fe(c.render);case p:return ot(c.type,D,x);case b:{var H=c,Z=H._payload,ne=H._init;try{return ot(ne(Z),D,x)}catch{}}}return""}var Xe=Object.prototype.hasOwnProperty,ut={},bt=R.ReactDebugCurrentFrame;function Ze(c){if(c){var D=c._owner,x=ot(c.type,c._source,D?D.type:null);bt.setExtraStackFrame(x)}else bt.setExtraStackFrame(null)}function Er(c,D,x,H,Z){{var ne=Function.call.bind(Xe);for(var $ in c)if(ne(c,$)){var K=void 0;try{if(typeof c[$]!="function"){var he=Error((H||"React class")+": "+x+" type `"+$+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof c[$]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw he.name="Invariant Violation",he}K=c[$](D,$,H,x,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(ue){K=ue}K&&!(K instanceof Error)&&(Ze(Z),O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",H||"React class",x,$,typeof K),Ze(null)),K instanceof Error&&!(K.message in ut)&&(ut[K.message]=!0,Ze(Z),O("Failed %s type: %s",x,K.message),Ze(null))}}}var we=Array.isArray;function me(c){return we(c)}function Rd(c){{var D=typeof Symbol=="function"&&Symbol.toStringTag,x=D&&c[Symbol.toStringTag]||c.constructor.name||"Object";return x}}function Od(c){try{return Ua(c),!1}catch{return!0}}function Ua(c){return""+c}function ja(c){if(Od(c))return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Rd(c)),Ua(c)}var Vt=R.ReactCurrentOwner,Ad={key:!0,ref:!0,__self:!0,__source:!0},Ba,qa,bn;bn={};function Cd(c){if(Xe.call(c,"ref")){var D=Object.getOwnPropertyDescriptor(c,"ref").get;if(D&&D.isReactWarning)return!1}return c.ref!==void 0}function Pd(c){if(Xe.call(c,"key")){var D=Object.getOwnPropertyDescriptor(c,"key").get;if(D&&D.isReactWarning)return!1}return c.key!==void 0}function kd(c,D){if(typeof c.ref=="string"&&Vt.current&&D&&Vt.current.stateNode!==D){var x=P(Vt.current.type);bn[x]||(O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',P(Vt.current.type),c.ref),bn[x]=!0)}}function Dd(c,D){{var x=function(){Ba||(Ba=!0,O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",D))};x.isReactWarning=!0,Object.defineProperty(c,"key",{get:x,configurable:!0})}}function Nd(c,D){{var x=function(){qa||(qa=!0,O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",D))};x.isReactWarning=!0,Object.defineProperty(c,"ref",{get:x,configurable:!0})}}var xd=function(c,D,x,H,Z,ne,$){var K={$$typeof:e,type:c,key:D,ref:x,props:$,_owner:ne};return K._store={},Object.defineProperty(K._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(K,"_self",{configurable:!1,enumerable:!1,writable:!1,value:H}),Object.defineProperty(K,"_source",{configurable:!1,enumerable:!1,writable:!1,value:Z}),Object.freeze&&(Object.freeze(K.props),Object.freeze(K)),K};function Md(c,D,x,H,Z){{var ne,$={},K=null,he=null;x!==void 0&&(ja(x),K=""+x),Pd(D)&&(ja(D.key),K=""+D.key),Cd(D)&&(he=D.ref,kd(D,Z));for(ne in D)Xe.call(D,ne)&&!Ad.hasOwnProperty(ne)&&($[ne]=D[ne]);if(c&&c.defaultProps){var ue=c.defaultProps;for(ne in ue)$[ne]===void 0&&($[ne]=ue[ne])}if(K||he){var ce=typeof c=="function"?c.displayName||c.name||"Unknown":c;K&&Dd($,ce),he&&Nd($,ce)}return xd(c,K,he,Z,H,Vt.current,$)}}var _n=R.ReactCurrentOwner,Ha=R.ReactDebugCurrentFrame;function _t(c){if(c){var D=c._owner,x=ot(c.type,c._source,D?D.type:null);Ha.setExtraStackFrame(x)}else Ha.setExtraStackFrame(null)}var In;In=!1;function wn(c){return typeof c=="object"&&c!==null&&c.$$typeof===e}function Va(){{if(_n.current){var c=P(_n.current.type);if(c)return`

Check the render method of \``+c+"`."}return""}}function Ld(c){{if(c!==void 0){var D=c.fileName.replace(/^.*[\\\/]/,""),x=c.lineNumber;return`

Check your code at `+D+":"+x+"."}return""}}var Wa={};function Fd(c){{var D=Va();if(!D){var x=typeof c=="string"?c:c.displayName||c.name;x&&(D=`

Check the top-level render call using <`+x+">.")}return D}}function za(c,D){{if(!c._store||c._store.validated||c.key!=null)return;c._store.validated=!0;var x=Fd(D);if(Wa[x])return;Wa[x]=!0;var H="";c&&c._owner&&c._owner!==_n.current&&(H=" It was passed a child from "+P(c._owner.type)+"."),_t(c),O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',x,H),_t(null)}}function Qa(c,D){{if(typeof c!="object")return;if(me(c))for(var x=0;x<c.length;x++){var H=c[x];wn(H)&&za(H,D)}else if(wn(c))c._store&&(c._store.validated=!0);else if(c){var Z=S(c);if(typeof Z=="function"&&Z!==c.entries)for(var ne=Z.call(c),$;!($=ne.next()).done;)wn($.value)&&za($.value,D)}}}function Ud(c){{var D=c.type;if(D==null||typeof D=="string")return;var x;if(typeof D=="function")x=D.propTypes;else if(typeof D=="object"&&(D.$$typeof===u||D.$$typeof===p))x=D.propTypes;else return;if(x){var H=P(D);Er(x,c.props,"prop",H,c)}else if(D.PropTypes!==void 0&&!In){In=!0;var Z=P(D);O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",Z||"Unknown")}typeof D.getDefaultProps=="function"&&!D.getDefaultProps.isReactClassApproved&&O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function jd(c){{for(var D=Object.keys(c.props),x=0;x<D.length;x++){var H=D[x];if(H!=="children"&&H!=="key"){_t(c),O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",H),_t(null);break}}c.ref!==null&&(_t(c),O("Invalid attribute `ref` supplied to `React.Fragment`."),_t(null))}}function Ka(c,D,x,H,Z,ne){{var $=E(c);if(!$){var K="";(c===void 0||typeof c=="object"&&c!==null&&Object.keys(c).length===0)&&(K+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var he=Ld(Z);he?K+=he:K+=Va();var ue;c===null?ue="null":me(c)?ue="array":c!==void 0&&c.$$typeof===e?(ue="<"+(P(c.type)||"Unknown")+" />",K=" Did you accidentally export a JSX literal instead of a component?"):ue=typeof c,O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",ue,K)}var ce=Md(c,D,x,Z,ne);if(ce==null)return ce;if($){var Ee=D.children;if(Ee!==void 0)if(H)if(me(Ee)){for(var It=0;It<Ee.length;It++)Qa(Ee[It],c);Object.freeze&&Object.freeze(Ee)}else O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Qa(Ee,c)}return c===n?jd(ce):Ud(ce),ce}}function Bd(c,D,x){return Ka(c,D,x,!0)}function qd(c,D,x){return Ka(c,D,x,!1)}var Hd=qd,Vd=Bd;Et.Fragment=n,Et.jsx=Hd,Et.jsxs=Vd}()),Et}process.env.NODE_ENV==="production"?Tr.exports=$a():Tr.exports=Ja();var k=Tr.exports;const Wt=F.createContext({});/**
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
 */const Sn=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},Ya=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[r++];e[n++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[r++],s=t[r++],o=t[r++],u=((i&7)<<18|(a&63)<<12|(s&63)<<6|o&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const a=t[r++],s=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(a&63)<<6|s&63)}}return e.join("")},Rn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const a=t[i],s=i+1<t.length,o=s?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,v=a>>2,p=(a&3)<<4|o>>4;let b=(o&15)<<2|l>>6,h=l&63;u||(h=64,s||(b=64)),n.push(r[v],r[p],r[b],r[h])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ya(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const a=r[t.charAt(i++)],o=i<t.length?r[t.charAt(i)]:0;++i;const l=i<t.length?r[t.charAt(i)]:64;++i;const p=i<t.length?r[t.charAt(i)]:64;if(++i,a==null||o==null||l==null||p==null)throw new Xa;const b=a<<2|o>>4;if(n.push(b),l!==64){const h=o<<4&240|l>>2;if(n.push(h),p!==64){const I=l<<6&192|p;n.push(I)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Za=function(t){const e=Sn(t);return Rn.encodeByteArray(e,!0)},On=function(t){return Za(t).replace(/\./g,"")},An=function(t){try{return Rn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const ts=()=>es().__FIREBASE_DEFAULTS__,rs=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ns=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&An(t[1]);return e&&JSON.parse(e)},Sr=()=>{try{return ts()||rs()||ns()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},is=t=>{var e,r;return(r=(e=Sr())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},Cn=()=>{var t;return(t=Sr())===null||t===void 0?void 0:t.config},Pn=t=>{var e;return(e=Sr())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */const fs="FirebaseError";class Ve extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=fs,Object.setPrototypeOf(this,Ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tt.prototype.create)}}class Tt{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,a=this.errors[e],s=a?hs(a,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new Ve(i,o,n)}}function hs(t,e){return t.replace(ps,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const ps=/\{\$([^}]+)}/g;function vs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zt(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const a=t[i],s=e[i];if(kn(a)&&kn(s)){if(!zt(a,s))return!1}else if(a!==s)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function kn(t){return t!==null&&typeof t=="object"}/**
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
 */function St(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function gs(t,e){const r=new ms(t,e);return r.subscribe.bind(r)}class ms{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");ys(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=Rr),i.error===void 0&&(i.error=Rr),i.complete===void 0&&(i.complete=Rr);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ys(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function Rr(){}/**
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
 */class bs{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new as;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Is(e))try{this.getOrInitializeService({instanceIdentifier:et})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const a=this.getOrInitializeService({instanceIdentifier:i});n.resolve(a)}catch{}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[a,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(a);n===o&&s.resolve(i)}return i}onInit(e,r){var n;const i=this.normalizeInstanceIdentifier(r),a=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;a.add(e),this.onInitCallbacks.set(i,a);const s=this.instances.get(i);return s&&e(s,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:_s(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _s(t){return t===et?void 0:t}function Is(t){return t.instantiationMode==="EAGER"}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Es={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Ts=te.INFO,Ss={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Rs=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=Ss[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dn{constructor(e){this.name=e,this._logLevel=Ts,this._logHandler=Rs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Es[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Os=(t,e)=>e.some(r=>t instanceof r);let Nn,xn;function As(){return Nn||(Nn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cs(){return xn||(xn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mn=new WeakMap,Or=new WeakMap,Ln=new WeakMap,Ar=new WeakMap,Cr=new WeakMap;function Ps(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",s)},a=()=>{r(ze(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",s)});return e.then(r=>{r instanceof IDBCursor&&Mn.set(r,t)}).catch(()=>{}),Cr.set(e,t),e}function ks(t){if(Or.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",s),t.removeEventListener("abort",s)},a=()=>{r(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",s),t.addEventListener("abort",s)});Or.set(t,e)}let Pr={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return Or.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ln.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ze(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ds(t){Pr=t(Pr)}function Ns(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(kr(this),e,...r);return Ln.set(n,e.sort?e.sort():[e]),ze(n)}:Cs().includes(t)?function(...e){return t.apply(kr(this),e),ze(Mn.get(this))}:function(...e){return ze(t.apply(kr(this),e))}}function xs(t){return typeof t=="function"?Ns(t):(t instanceof IDBTransaction&&ks(t),Os(t,As())?new Proxy(t,Pr):t)}function ze(t){if(t instanceof IDBRequest)return Ps(t);if(Ar.has(t))return Ar.get(t);const e=xs(t);return e!==t&&(Ar.set(t,e),Cr.set(e,t)),e}const kr=t=>Cr.get(t);function Ms(t,e,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){const s=indexedDB.open(t,e),o=ze(s);return n&&s.addEventListener("upgradeneeded",u=>{n(ze(s.result),u.oldVersion,u.newVersion,ze(s.transaction),u)}),r&&s.addEventListener("blocked",u=>r(u.oldVersion,u.newVersion,u)),o.then(u=>{a&&u.addEventListener("close",()=>a()),i&&u.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const Ls=["get","getKey","getAll","getAllKeys","count"],Fs=["put","add","delete","clear"],Dr=new Map;function Fn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dr.get(e))return Dr.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=Fs.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Ls.includes(r)))return;const a=async function(s,...o){const u=this.transaction(s,i?"readwrite":"readonly");let l=u.store;return n&&(l=l.index(o.shift())),(await Promise.all([l[r](...o),i&&u.done]))[0]};return Dr.set(e,a),a}Ds(t=>({...t,get:(e,r,n)=>Fn(e,r)||t.get(e,r,n),has:(e,r)=>!!Fn(e,r)||t.has(e,r)}));/**
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
 */class Us{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(js(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function js(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nr="@firebase/app",Un="0.9.13";/**
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
 */const tt=new Dn("@firebase/app"),Bs="@firebase/app-compat",qs="@firebase/analytics-compat",Hs="@firebase/analytics",Vs="@firebase/app-check-compat",Ws="@firebase/app-check",zs="@firebase/auth",Qs="@firebase/auth-compat",Ks="@firebase/database",Gs="@firebase/database-compat",$s="@firebase/functions",Js="@firebase/functions-compat",Ys="@firebase/installations",Xs="@firebase/installations-compat",Zs="@firebase/messaging",eo="@firebase/messaging-compat",to="@firebase/performance",ro="@firebase/performance-compat",no="@firebase/remote-config",io="@firebase/remote-config-compat",ao="@firebase/storage",so="@firebase/storage-compat",oo="@firebase/firestore",uo="@firebase/firestore-compat",co="firebase",lo="9.23.0";/**
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
 */const xr="[DEFAULT]",fo={[Nr]:"fire-core",[Bs]:"fire-core-compat",[Hs]:"fire-analytics",[qs]:"fire-analytics-compat",[Ws]:"fire-app-check",[Vs]:"fire-app-check-compat",[zs]:"fire-auth",[Qs]:"fire-auth-compat",[Ks]:"fire-rtdb",[Gs]:"fire-rtdb-compat",[$s]:"fire-fn",[Js]:"fire-fn-compat",[Ys]:"fire-iid",[Xs]:"fire-iid-compat",[Zs]:"fire-fcm",[eo]:"fire-fcm-compat",[to]:"fire-perf",[ro]:"fire-perf-compat",[no]:"fire-rc",[io]:"fire-rc-compat",[ao]:"fire-gcs",[so]:"fire-gcs-compat",[oo]:"fire-fst",[uo]:"fire-fst-compat","fire-js":"fire-js",[co]:"fire-js-all"};/**
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
 */const Qt=new Map,Mr=new Map;function ho(t,e){try{t.container.addComponent(e)}catch(r){tt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Rt(t){const e=t.name;if(Mr.has(e))return tt.debug(`There were multiple attempts to register component ${e}.`),!1;Mr.set(e,t);for(const r of Qt.values())ho(r,t);return!0}function jn(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const po={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qe=new Tt("app","Firebase",po);/**
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
 */class vo{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}}/**
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
 */const Ot=lo;function Bn(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:xr,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Qe.create("bad-app-name",{appName:String(i)});if(r||(r=Cn()),!r)throw Qe.create("no-options");const a=Qt.get(i);if(a){if(zt(r,a.options)&&zt(n,a.config))return a;throw Qe.create("duplicate-app",{appName:i})}const s=new ws(i);for(const u of Mr.values())s.addComponent(u);const o=new vo(r,n,s);return Qt.set(i,o),o}function go(t=xr){const e=Qt.get(t);if(!e&&t===xr&&Cn())return Bn();if(!e)throw Qe.create("no-app",{appName:t});return e}function lt(t,e,r){var n;let i=(n=fo[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const a=i.match(/\s|\//),s=e.match(/\s|\//);if(a||s){const o=[`Unable to register library "${i}" with version "${e}":`];a&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tt.warn(o.join(" "));return}Rt(new ct(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mo="firebase-heartbeat-database",yo=1,At="firebase-heartbeat-store";let Lr=null;function qn(){return Lr||(Lr=Ms(mo,yo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(At)}}}).catch(t=>{throw Qe.create("idb-open",{originalErrorMessage:t.message})})),Lr}async function bo(t){try{return await(await qn()).transaction(At).objectStore(At).get(Vn(t))}catch(e){if(e instanceof Ve)tt.warn(e.message);else{const r=Qe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tt.warn(r.message)}}}async function Hn(t,e){try{const n=(await qn()).transaction(At,"readwrite");await n.objectStore(At).put(e,Vn(t)),await n.done}catch(r){if(r instanceof Ve)tt.warn(r.message);else{const n=Qe.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});tt.warn(n.message)}}}function Vn(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _o=1024,Io=30*24*60*60*1e3;class wo{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new To(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Wn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=Io}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wn(),{heartbeatsToSend:r,unsentEntries:n}=Eo(this._heartbeatsCache.heartbeats),i=On(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wn(){return new Date().toISOString().substring(0,10)}function Eo(t,e=_o){const r=[];let n=t.slice();for(const i of t){const a=r.find(s=>s.agent===i.agent);if(a){if(a.dates.push(i.date),zn(r)>e){a.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),zn(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class To{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ls()?ds().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bo(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hn(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hn(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zn(t){return On(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function So(t){Rt(new ct("platform-logger",e=>new Us(e),"PRIVATE")),Rt(new ct("heartbeat",e=>new wo(e),"PRIVATE")),lt(Nr,Un,t),lt(Nr,Un,"esm2017"),lt("fire-js","")}So("");function Fr(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}typeof SuppressedError=="function"&&SuppressedError;function Qn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ro=Qn,Kn=new Tt("auth","Firebase",Qn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new Dn("@firebase/auth");function Oo(t,...e){Kt.logLevel<=te.WARN&&Kt.warn(`Auth (${Ot}): ${t}`,...e)}function Gt(t,...e){Kt.logLevel<=te.ERROR&&Kt.error(`Auth (${Ot}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t,...e){throw Ur(t,...e)}function Se(t,...e){return Ur(t,...e)}function Gn(t,e,r){const n=Object.assign(Object.assign({},Ro()),{[e]:r});return new Tt("auth","Firebase",n).create(e,{appName:t.name})}function Ao(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&Te(t,"argument-error"),Gn(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ur(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return Kn.create(t,...e)}function q(t,e,...r){if(!t)throw Ur(e,...r)}function Me(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gt(e),new Error(e)}function Le(t,e){t||Me(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Co(){return $n()==="http:"||$n()==="https:"}function $n(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Co()||os()||"connection"in navigator)?navigator.onLine:!0}function ko(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,r){this.shortDelay=e,this.longDelay=r,Le(r>e,"Short delay should be less than long delay!"),this.isMobile=ss()||us()}get(){return Po()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jn{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Me("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Me("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Me("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Ct(3e4,6e4);function Yn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pt(t,e,r,n,i={}){return Xn(t,i,async()=>{let a={},s={};n&&(e==="GET"?s=n:a={body:JSON.stringify(n)});const o=St(Object.assign({key:t.config.apiKey},s)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),Jn.fetch()(Zn(t,t.config.apiHost,r,o),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},a))})}async function Xn(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},Do),e);try{const i=new Mo(t),a=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const s=await a.json();if("needConfirmation"in s)throw $t(t,"account-exists-with-different-credential",s);if(a.ok&&!("errorMessage"in s))return s;{const o=a.ok?s.errorMessage:s.error.message,[u,l]=o.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw $t(t,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw $t(t,"email-already-in-use",s);if(u==="USER_DISABLED")throw $t(t,"user-disabled",s);const v=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Gn(t,v,l);Te(t,v)}}catch(i){if(i instanceof Ve)throw i;Te(t,"network-request-failed",{message:String(i)})}}async function xo(t,e,r,n,i={}){const a=await Pt(t,e,r,n,i);return"mfaPendingCredential"in a&&Te(t,"multi-factor-auth-required",{_serverResponse:a}),a}function Zn(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?Br(t.config,i):`${t.config.apiScheme}://${i}`}class Mo{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(Se(this.auth,"network-request-failed")),No.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $t(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=Se(t,e,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t,e){return Pt(t,"POST","/v1/accounts:delete",e)}async function Fo(t,e){return Pt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Uo(t,e=!1){const r=We(t),n=await r.getIdToken(e),i=Hr(n);q(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,s=a==null?void 0:a.sign_in_provider;return{claims:i,token:n,authTime:kt(qr(i.auth_time)),issuedAtTime:kt(qr(i.iat)),expirationTime:kt(qr(i.exp)),signInProvider:s||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function qr(t){return Number(t)*1e3}function Hr(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return Gt("JWT malformed, contained fewer than 3 sections"),null;try{const i=An(r);return i?JSON.parse(i):(Gt("Failed to decode base64 JWT payload"),null)}catch(i){return Gt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jo(t){const e=Hr(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof Ve&&Bo(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function Bo({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Jt(t){var e;const r=t.auth,n=await t.getIdToken(),i=await Dt(t,Fo(r,{idToken:n}));q(i==null?void 0:i.users.length,r,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const s=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Wo(a.providerUserInfo):[],o=Vo(t.providerData,s),u=t.isAnonymous,l=!(t.email&&a.passwordHash)&&!(o!=null&&o.length),v=u?l:!1,p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new ei(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(t,p)}async function Ho(t){const e=We(t);await Jt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vo(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Wo(t){return t.map(e=>{var{providerId:r}=e,n=Fr(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(t,e){const r=await Xn(t,{},async()=>{const n=St({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,s=Zn(t,i,"/v1/token",`key=${a}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Jn.fetch()(s,{method:"POST",headers:o,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:a}=await zo(e,r);this.updateTokensAndExpiration(n,i,Number(a))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:a}=r,s=new Nt;return n&&(q(typeof n=="string","internal-error",{appName:e}),s.refreshToken=n),i&&(q(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),a&&(q(typeof a=="number","internal-error",{appName:e}),s.expirationTime=a),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nt,this.toJSON())}_performRefresh(){return Me("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rt{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,a=Fr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ei(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const r=await Dt(this,this.stsTokenManager.getToken(this.auth,e));return q(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return Uo(this,e)}reload(){return Ho(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await Jt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dt(this,Lo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,a,s,o,u,l,v;const p=(n=r.displayName)!==null&&n!==void 0?n:void 0,b=(i=r.email)!==null&&i!==void 0?i:void 0,h=(a=r.phoneNumber)!==null&&a!==void 0?a:void 0,I=(s=r.photoURL)!==null&&s!==void 0?s:void 0,T=(o=r.tenantId)!==null&&o!==void 0?o:void 0,S=(u=r._redirectEventId)!==null&&u!==void 0?u:void 0,R=(l=r.createdAt)!==null&&l!==void 0?l:void 0,O=(v=r.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:g,emailVerified:m,isAnonymous:d,providerData:f,stsTokenManager:y}=r;q(g&&y,e,"internal-error");const _=Nt.fromJSON(this.name,y);q(typeof g=="string",e,"internal-error"),Ke(p,e.name),Ke(b,e.name),q(typeof m=="boolean",e,"internal-error"),q(typeof d=="boolean",e,"internal-error"),Ke(h,e.name),Ke(I,e.name),Ke(T,e.name),Ke(S,e.name),Ke(R,e.name),Ke(O,e.name);const w=new rt({uid:g,auth:e,email:b,emailVerified:m,displayName:p,isAnonymous:d,photoURL:I,phoneNumber:h,tenantId:T,stsTokenManager:_,createdAt:R,lastLoginAt:O});return f&&Array.isArray(f)&&(w.providerData=f.map(E=>Object.assign({},E))),S&&(w._redirectEventId=S),w}static async _fromIdTokenResponse(e,r,n=!1){const i=new Nt;i.updateFromServerResponse(r);const a=new rt({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Jt(a),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Yt(t,e,r){return`firebase:${t}:${e}:${r}`}class dt{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:a}=this.auth;this.fullUserKey=Yt(this.userKey,i.apiKey,a),this.fullPersistenceKey=Yt("persistence",i.apiKey,a),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new dt(Fe(ni),e,n);const i=(await Promise.all(r.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let a=i[0]||Fe(ni);const s=Yt(n,e.config.apiKey,e.name);let o=null;for(const l of r)try{const v=await l._get(s);if(v){const p=rt._fromJSON(e,v);l!==a&&(o=p),a=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!a._shouldAllowMigration||!u.length?new dt(a,e,n):(a=u[0],o&&await a._set(s,o.toJSON()),await Promise.all(r.map(async l=>{if(l!==a)try{await l._remove(s)}catch{}})),new dt(a,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ai(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ci(e))return"Blackberry";if(li(e))return"Webos";if(Vr(e))return"Safari";if((e.includes("chrome/")||si(e))&&!e.includes("edge/"))return"Chrome";if(ui(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function ai(t=le()){return/firefox\//i.test(t)}function Vr(t=le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function si(t=le()){return/crios\//i.test(t)}function oi(t=le()){return/iemobile/i.test(t)}function ui(t=le()){return/android/i.test(t)}function ci(t=le()){return/blackberry/i.test(t)}function li(t=le()){return/webos/i.test(t)}function Xt(t=le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qo(t=le()){var e;return Xt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ko(){return cs()&&document.documentMode===10}function di(t=le()){return Xt(t)||ui(t)||li(t)||ci(t)||/windows phone/i.test(t)||oi(t)}function Go(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function $o(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gi(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const a=Se("internal-error");a.customData=i,r(a)},n.type="text/javascript",n.charset="UTF-8",$o().appendChild(n)})}function Jo(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Yo="https://www.google.com/recaptcha/enterprise.js?render=",Xo="recaptcha-enterprise",Zo="NO_RECAPTCHA";class eu{constructor(e){this.type=Xo,this.auth=xt(e)}async verify(e="verify",r=!1){async function n(a){if(!r){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(s,o)=>{hi(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const l=new vi(u);return a.tenantId==null?a._agentRecaptchaConfig=l:a._tenantRecaptchaConfigs[a.tenantId]=l,s(l.siteKey)}}).catch(u=>{o(u)})})}function i(a,s,o){const u=window.grecaptcha;pi(u)?u.enterprise.ready(()=>{u.enterprise.execute(a,{action:e}).then(l=>{s(l)}).catch(()=>{s(Zo)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,s)=>{n(this.auth).then(o=>{if(!r&&pi(window.grecaptcha))i(o,a,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}gi(Yo+o).then(()=>{i(o,a,s)}).catch(u=>{s(u)})}}).catch(o=>{s(o)})})}}/**
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
 */class tu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=a=>new Promise((s,o)=>{try{const u=e(a);s(u)}catch(u){o(u)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,r,n,i){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mi(this),this.idTokenSubscription=new mi(this),this.beforeStateQueue=new tu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Fe(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await dt.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var r;const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,o=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!s||s===o)&&(u!=null&&u.user)&&(i=u.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await Jt(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ko()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?We(e):null;return r&&q(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Fe(e))})}async initializeRecaptchaConfig(){const e=await hi(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new vi(e);this.tenantId==null?this._agentRecaptchaConfig=r:this._tenantRecaptchaConfigs[this.tenantId]=r,r.emailPasswordEnabled&&new eu(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tt("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Fe(e)||this._popupRedirectResolver;q(r,this,"argument-error"),this.redirectPersistenceManager=await dt.create(this,[Fe(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const a=typeof r=="function"?r:r.next.bind(r),s=this._isInitialized?Promise.resolve():this._initializationPromise;return q(s,this,"internal-error"),s.then(()=>a(this.currentUser)),typeof r=="function"?e.addObserver(r,n,i):e.addObserver(r)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&Oo(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function xt(t){return We(t)}class mi{constructor(e){this.auth=e,this.observer=null,this.addObserver=gs(r=>this.observer=r)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t,e){const r=jn(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),a=r.getOptions();if(zt(a,e??{}))return i;Te(i,"already-initialized")}return r.initialize({options:e})}function iu(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Fe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function au(t,e,r){const n=xt(t);q(n._canInitEmulator,n,"emulator-config-failed"),q(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(r!=null&&r.disableWarnings),a=yi(e),{host:s,port:o}=su(e),u=o===null?"":`:${o}`;n.config.emulator={url:`${a}//${s}${u}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:o,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ou()}function yi(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function su(t){const e=yi(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const a=i[1];return{host:a,port:bi(n.substr(a.length+1))}}else{const[a,s]=n.split(":");return{host:a,port:bi(s)}}}function bi(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ou(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return Me("not implemented")}_getIdTokenResponse(e){return Me("not implemented")}_linkToIdToken(e,r){return Me("not implemented")}_getReauthenticationResolver(e){return Me("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const uu="http://localhost";class Ue extends _i{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new Ue(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):Te("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,a=Fr(r,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Ue(n,i);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}_getIdTokenResponse(e){const r=this.buildRequest();return ft(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,ft(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,ft(e,r)}buildRequest(){const e={requestUri:uu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=St(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ht extends Wr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class pt extends ht{static credentialFromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;return q("providerId"in r&&"signInMethod"in r,"argument-error"),Ue._fromParams(r)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return q(e.idToken||e.accessToken,"argument-error"),Ue._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return pt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return pt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:a,nonce:s,providerId:o}=e;if(!n&&!i&&!r&&!a||!o)return null;try{return new pt(o)._credential({idToken:r,accessToken:n,nonce:s,pendingToken:a})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zt extends Ve{constructor(e,r,n,i){var a;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Zt.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new Zt(e,r,n,i)}}function wi(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Zt._fromErrorAndOperation(t,a,e,n):a})}async function cu(t,e,r=!1){const n=await Dt(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return vt._forOperation(t,"link",n)}/**
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
 */async function lu(t,e,r=!1){const{auth:n}=t,i="reauthenticate";try{const a=await Dt(t,wi(n,i,e,t),r);q(a.idToken,n,"internal-error");const s=Hr(a.idToken);q(s,n,"internal-error");const{sub:o}=s;return q(t.uid===o,n,"user-mismatch"),vt._forOperation(t,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Te(n,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function du(t,e,r=!1){const n="signIn",i=await wi(t,n,e),a=await vt._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(a.user),a}function fu(t,e,r,n){return We(t).onIdTokenChanged(e,r,n)}function hu(t,e,r){return We(t).beforeAuthStateChanged(e,r)}function pu(t,e,r,n){return We(t).onAuthStateChanged(e,r,n)}function Ei(t){return We(t).signOut()}const er="__sak";/**
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
 */class Ti{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(er,"1"),this.storage.removeItem(er),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(){const t=le();return Vr(t)||Xt(t)}const gu=1e3,mu=10;class Si extends Ti{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vu()&&Go(),this.fallbackToPolling=di(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((s,o,u)=>{this.notifyListeners(s,u)});return}const n=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!r)return}const i=()=>{const s=this.storage.getItem(n);!r&&this.localCache[n]===s||this.notifyListeners(n,s)},a=this.storage.getItem(n);Ko()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mu):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},gu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}Si.type="LOCAL";const yu=Si;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new tr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:a}=r.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map(async l=>l(r.origin,a)),u=await bu(o);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:u})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _u{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,s;return new Promise((o,u)=>{const l=zr("",20);i.port1.start();const v=setTimeout(()=>{u(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(p){const b=p;if(b.data.eventId===l)switch(b.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),o(b.data.response);break;default:clearTimeout(v),clearTimeout(a),u(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:r},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return window}function Iu(t){Pe().location.href=t}/**
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
 */function Ai(){return typeof Pe().WorkerGlobalScope<"u"&&typeof Pe().importScripts=="function"}async function wu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Eu(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Tu(){return Ai()?self:null}/**
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
 */const Ci="firebaseLocalStorageDb",Su=1,rr="firebaseLocalStorage",Pi="fbase_key";class Mt{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function nr(t,e){return t.transaction([rr],e?"readwrite":"readonly").objectStore(rr)}function Ru(){const t=indexedDB.deleteDatabase(Ci);return new Mt(t).toPromise()}function Qr(){const t=indexedDB.open(Ci,Su);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(rr,{keyPath:Pi})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(rr)?e(n):(n.close(),await Ru(),e(await Qr()))})})}async function ki(t,e,r){const n=nr(t,!0).put({[Pi]:e,value:r});return new Mt(n).toPromise()}async function Ou(t,e){const r=nr(t,!1).get(e),n=await new Mt(r).toPromise();return n===void 0?null:n.value}function Di(t,e){const r=nr(t,!0).delete(e);return new Mt(r).toPromise()}const Au=800,Cu=3;class Ni{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qr(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>Cu)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ai()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tr._getInstance(Tu()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await wu(),!this.activeServiceWorker)return;this.sender=new _u(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Eu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qr();return await ki(e,er,"1"),await Di(e,er),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>ki(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>Ou(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Di(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=nr(i,!1).getAll();return new Mt(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;for(const{fbase_key:i,value:a}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Au)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ni.type="LOCAL";const Pu=Ni;new Ct(3e4,6e4);/**
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
 */function xi(t,e){return e?Fe(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kr extends _i{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,r){return ft(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function ku(t){return du(t.auth,new Kr(t),t.bypassAuthState)}function Du(t){const{auth:e,user:r}=t;return q(r,e,"internal-error"),lu(r,new Kr(t),t.bypassAuthState)}async function Nu(t){const{auth:e,user:r}=t;return q(r,e,"internal-error"),cu(r,new Kr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,r,n,i,a=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:a,error:s,type:o}=e;if(s){this.reject(s);return}const u={auth:this.auth,requestUri:r,sessionId:n,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ku;case"linkViaPopup":case"linkViaRedirect":return Nu;case"reauthViaPopup":case"reauthViaRedirect":return Du;default:Te(this.auth,"internal-error")}}resolve(e){Le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new Ct(2e3,1e4);async function Lt(t,e,r){const n=xt(t);Ao(t,e,Wr);const i=xi(n,r);return new nt(n,"signInViaPopup",e,i).executeNotNull()}class nt extends Mi{constructor(e,r,n,i,a){super(e,r,i,a),this.provider=n,this.authWindow=null,this.pollId=null,nt.currentPopupAction&&nt.currentPopupAction.cancel(),nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Le(this.filter.length===1,"Popup operations only handle one event");const e=zr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Se(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Se(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Se(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xu.get())};e()}}nt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="pendingRedirect",ir=new Map;class Lu extends Mi{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=ir.get(this.auth._key());if(!e){try{const n=await Fu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}ir.set(this.auth._key(),e)}return this.bypassAuthState||ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fu(t,e){const r=Bu(e),n=ju(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function Uu(t,e){ir.set(t._key(),e)}function ju(t){return Fe(t._redirectPersistence)}function Bu(t){return Yt(Mu,t.config.apiKey,t.name)}async function qu(t,e,r=!1){const n=xt(t),i=xi(n,e),s=await new Lu(n,i,r).execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=10*60*1e3;class Vu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wu(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!Fi(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(Se(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hu&&this.cachedEventUids.clear(),this.cachedEventUids.has(Li(e))}saveEventToCache(e){this.cachedEventUids.add(Li(e)),this.lastProcessedEventTime=Date.now()}}function Li(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fi({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wu(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fi(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zu(t,e={}){return Pt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ku=/^https?/;async function Gu(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zu(t);for(const r of e)try{if($u(r))return}catch{}Te(t,"unauthorized-domain")}function $u(t){const e=jr(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&s.hostname===n}if(!Ku.test(r))return!1;if(Qu.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const Ju=new Ct(3e4,6e4);function Ui(){const t=Pe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function Yu(t){return new Promise((e,r)=>{var n,i,a;function s(){Ui(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ui(),r(Se(t,"network-request-failed"))},timeout:Ju.get()})}if(!((i=(n=Pe().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=Pe().gapi)===null||a===void 0)&&a.load)s();else{const o=Jo("iframefcb");return Pe()[o]=()=>{gapi.load?s():r(Se(t,"network-request-failed"))},gi(`https://apis.google.com/js/api.js?onload=${o}`).catch(u=>r(u))}}).catch(e=>{throw ar=null,e})}let ar=null;function Xu(t){return ar=ar||Yu(t),ar}/**
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
 */const Zu=new Ct(5e3,15e3),ec="__/auth/iframe",tc="emulator/auth/iframe",rc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ic(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Br(e,tc):`https://${t.config.authDomain}/${ec}`,n={apiKey:e.apiKey,appName:t.name,v:Ot},i=nc.get(t.config.apiHost);i&&(n.eid=i);const a=t._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${St(n).slice(1)}`}async function ac(t){const e=await Xu(t),r=Pe().gapi;return q(r,t,"internal-error"),e.open({where:document.body,url:ic(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rc,dontclear:!0},n=>new Promise(async(i,a)=>{await n.restyle({setHideOnLeave:!1});const s=Se(t,"network-request-failed"),o=Pe().setTimeout(()=>{a(s)},Zu.get());function u(){Pe().clearTimeout(o),i(n)}n.ping(u).then(u,()=>{a(s)})}))}/**
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
 */const sc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oc=500,uc=600,cc="_blank",lc="http://localhost";class ji{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dc(t,e,r,n=oc,i=uc){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const u=Object.assign(Object.assign({},sc),{width:n.toString(),height:i.toString(),top:a,left:s}),l=le().toLowerCase();r&&(o=si(l)?cc:r),ai(l)&&(e=e||lc,u.scrollbars="yes");const v=Object.entries(u).reduce((b,[h,I])=>`${b}${h}=${I},`,"");if(Qo(l)&&o!=="_self")return fc(e||"",o),new ji(null);const p=window.open(e||"",o,v);q(p,t,"popup-blocked");try{p.focus()}catch{}return new ji(p)}function fc(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const hc="__/auth/handler",pc="emulator/auth/handler",vc=encodeURIComponent("fac");async function Bi(t,e,r,n,i,a){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:Ot,eventId:i};if(e instanceof Wr){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",vs(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,p]of Object.entries(a||{}))s[v]=p}if(e instanceof ht){const v=e.getScopes().filter(p=>p!=="");v.length>0&&(s.scopes=v.join(","))}t.tenantId&&(s.tid=t.tenantId);const o=s;for(const v of Object.keys(o))o[v]===void 0&&delete o[v];const u=await t._getAppCheckToken(),l=u?`#${vc}=${encodeURIComponent(u)}`:"";return`${gc(t)}?${St(o).slice(1)}${l}`}function gc({config:t}){return t.emulator?Br(t,pc):`https://${t.authDomain}/${hc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="webStorageSupport";class mc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oi,this._completeRedirectFn=qu,this._overrideRedirectResult=Uu}async _openPopup(e,r,n,i){var a;Le((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await Bi(e,r,n,jr(),i);return dc(e,s,zr())}async _openRedirect(e,r,n,i){await this._originValidation(e);const a=await Bi(e,r,n,jr(),i);return Iu(a),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:a}=this.eventManagers[r];return i?Promise.resolve(i):(Le(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await ac(e),n=new Vu(e);return r.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(Gr,{type:Gr},i=>{var a;const s=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Gr];s!==void 0&&r(!!s),Te(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Gu(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return di()||Vr()||Xt()}}const yc=mc;var qi="@firebase/auth",Hi="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function _c(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ic(t){Rt(new ct("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;q(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fi(t)},l=new ru(n,i,a,u);return iu(l,r),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),Rt(new ct("auth-internal",e=>{const r=xt(e.getProvider("auth").getImmediate());return(n=>new bc(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(qi,Hi,_c(t)),lt(qi,Hi,"esm2017")}/**
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
 */const wc=5*60,Ec=Pn("authIdTokenMaxAge")||wc;let Vi=null;const Tc=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>Ec)return;const i=r==null?void 0:r.token;Vi!==i&&(Vi=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Sc(t=go()){const e=jn(t,"auth");if(e.isInitialized())return e.getImmediate();const r=nu(t,{popupRedirectResolver:yc,persistence:[Pu,yu,Oi]}),n=Pn("authTokenSyncURL");if(n){const a=Tc(n);hu(r,a,()=>a(r.currentUser)),fu(r,s=>a(s))}const i=is("auth");return i&&au(r,`http://${i}`),r}Ic("Browser");var Rc="firebase",Oc="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(Rc,Oc,"app");const Ac={language:"en",firebaseConfig:{},endpoint:"/api/auth/",keyword:"TSESSION",refreshTokenHeader:"Authorization",acceptUsername:!1,bodyAsBase64:!1,signInMethods:["google"]};let ee={};const Cc=t=>{ee={...Ac,...t}},Pc=()=>Object.keys(ee.firebaseConfig).length!==0,Ge=()=>{const t=Bn(ee.firebaseConfig);return Sc(t)},Wi=new Oe;Wi.setCustomParameters({prompt:"select_account"});const zi=new Re;zi.addScope("public_profile");const kc=new Ce,Dc=new Ae,Nc=new pt("microsoft.com").setCustomParameters({prompt:"consent",login_hint:"user@firstadd.onmicrosoft.com",tenant:"1bd1e0fb-f970-45f0-a49d-e80107b0e6f3"});function se(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];if(process.env.NODE_ENV!=="production"){var i=Vc[t],a=i?typeof i=="function"?i.apply(null,r):i:"unknown error nr: "+t;throw Error("[Immer] "+a)}throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(s){return"'"+s+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function je(t){return!!t&&!!t[pe]}function Be(t){var e;return!!t&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Wc}(t)||Array.isArray(t)||!!t[Ut]||!!(!((e=t.constructor)===null||e===void 0)&&e[Ut])||or(t)||ur(t))}function xc(t){return je(t)||se(23,t),t[pe].t}function gt(t,e,r){r===void 0&&(r=!1),$e(t)===0?(r?Object.keys:un)(t).forEach(function(n){r&&typeof n=="symbol"||e(n,t[n],t)}):t.forEach(function(n,i){return e(i,n,t)})}function $e(t){var e=t[pe];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:or(t)?2:ur(t)?3:0}function Ft(t,e){return $e(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function sr(t,e){return $e(t)===2?t.get(e):t[e]}function Qi(t,e,r){var n=$e(t);n===2?t.set(e,r):n===3?t.add(r):t[e]=r}function Mc(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function or(t){return qc&&t instanceof Map}function ur(t){return Hc&&t instanceof Set}function it(t){return t.o||t.t}function $r(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=zc(t);delete e[pe];for(var r=un(e),n=0;n<r.length;n++){var i=r[n],a=e[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(e[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Jr(t,e){return e===void 0&&(e=!1),Yr(t)||je(t)||!Be(t)||($e(t)>1&&(t.set=t.add=t.clear=t.delete=Lc),Object.freeze(t),e&&gt(t,function(r,n){return Jr(n,!0)},!0)),t}function Lc(){se(2)}function Yr(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function ke(t){var e=cn[t];return e||se(18,t),e}function Fc(t,e){cn[t]||(cn[t]=e)}function Ki(){return process.env.NODE_ENV==="production"||mt||se(0),mt}function Xr(t,e){e&&(ke("Patches"),t.u=[],t.s=[],t.v=e)}function cr(t){Zr(t),t.p.forEach(Uc),t.p=null}function Zr(t){t===mt&&(mt=t.l)}function Gi(t){return mt={p:[],l:mt,h:t,m:!0,_:0}}function Uc(t){var e=t[pe];e.i===0||e.i===1?e.j():e.g=!0}function en(t,e){e._=e.p.length;var r=e.p[0],n=t!==void 0&&t!==r;return e.h.O||ke("ES5").S(e,t,n),n?(r[pe].P&&(cr(e),se(4)),Be(t)&&(t=lr(e,t),e.l||dr(e,t)),e.u&&ke("Patches").M(r[pe].t,t,e.u,e.s)):t=lr(e,r,[]),cr(e),e.u&&e.v(e.u,e.s),t!==on?t:void 0}function lr(t,e,r){if(Yr(e))return e;var n=e[pe];if(!n)return gt(e,function(o,u){return $i(t,n,e,o,u,r)},!0),e;if(n.A!==t)return e;if(!n.P)return dr(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=n.i===4||n.i===5?n.o=$r(n.k):n.o,a=i,s=!1;n.i===3&&(a=new Set(i),i.clear(),s=!0),gt(a,function(o,u){return $i(t,n,i,o,u,r,s)}),dr(t,i,!1),r&&t.u&&ke("Patches").N(n,r,t.u,t.s)}return n.o}function $i(t,e,r,n,i,a,s){if(process.env.NODE_ENV!=="production"&&i===r&&se(5),je(i)){var o=lr(t,i,a&&e&&e.i!==3&&!Ft(e.R,n)?a.concat(n):void 0);if(Qi(r,n,o),!je(o))return;t.m=!1}else s&&r.add(i);if(Be(i)&&!Yr(i)){if(!t.h.D&&t._<1)return;lr(t,i),e&&e.A.l||dr(t,i)}}function dr(t,e,r){r===void 0&&(r=!1),!t.l&&t.h.D&&t.m&&Jr(e,r)}function tn(t,e){var r=t[pe];return(r?it(r):t)[e]}function Ji(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function rn(t){t.P||(t.P=!0,t.l&&rn(t.l))}function nn(t){t.o||(t.o=$r(t.t))}function an(t,e,r){var n=or(e)?ke("MapSet").F(e,r):ur(e)?ke("MapSet").T(e,r):t.O?function(i,a){var s=Array.isArray(i),o={i:s?1:0,A:a?a.A:Ki(),P:!1,I:!1,R:{},l:a,t:i,k:null,o:null,j:null,C:!1},u=o,l=ln;s&&(u=[o],l=jt);var v=Proxy.revocable(u,l),p=v.revoke,b=v.proxy;return o.k=b,o.j=p,b}(e,r):ke("ES5").J(e,r);return(r?r.A:Ki()).p.push(n),n}function jc(t){return je(t)||se(22,t),function e(r){if(!Be(r))return r;var n,i=r[pe],a=$e(r);if(i){if(!i.P&&(i.i<4||!ke("ES5").K(i)))return i.t;i.I=!0,n=Yi(r,a),i.I=!1}else n=Yi(r,a);return gt(n,function(s,o){i&&sr(i.t,s)===o||Qi(n,s,e(o))}),a===3?new Set(n):n}(t)}function Yi(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return $r(t)}function Bc(){function t(n){if(!Be(n))return n;if(Array.isArray(n))return n.map(t);if(or(n))return new Map(Array.from(n.entries()).map(function(s){return[s[0],t(s[1])]}));if(ur(n))return new Set(Array.from(n).map(t));var i=Object.create(Object.getPrototypeOf(n));for(var a in n)i[a]=t(n[a]);return Ft(n,Ut)&&(i[Ut]=n[Ut]),i}function e(n){return je(n)?t(n):n}var r="add";Fc("Patches",{$:function(n,i){return i.forEach(function(a){for(var s=a.path,o=a.op,u=n,l=0;l<s.length-1;l++){var v=$e(u),p=s[l];typeof p!="string"&&typeof p!="number"&&(p=""+p),v!==0&&v!==1||p!=="__proto__"&&p!=="constructor"||se(24),typeof u=="function"&&p==="prototype"&&se(24),typeof(u=sr(u,p))!="object"&&se(15,s.join("/"))}var b=$e(u),h=t(a.value),I=s[s.length-1];switch(o){case"replace":switch(b){case 2:return u.set(I,h);case 3:se(16);default:return u[I]=h}case r:switch(b){case 1:return I==="-"?u.push(h):u.splice(I,0,h);case 2:return u.set(I,h);case 3:return u.add(h);default:return u[I]=h}case"remove":switch(b){case 1:return u.splice(I,1);case 2:return u.delete(I);case 3:return u.delete(a.value);default:return delete u[I]}default:se(17,o)}}),n},N:function(n,i,a,s){switch(n.i){case 0:case 4:case 2:return function(o,u,l,v){var p=o.t,b=o.o;gt(o.R,function(h,I){var T=sr(p,h),S=sr(b,h),R=I?Ft(p,h)?"replace":r:"remove";if(T!==S||R!=="replace"){var O=u.concat(h);l.push(R==="remove"?{op:R,path:O}:{op:R,path:O,value:S}),v.push(R===r?{op:"remove",path:O}:R==="remove"?{op:r,path:O,value:e(T)}:{op:"replace",path:O,value:e(T)})}})}(n,i,a,s);case 5:case 1:return function(o,u,l,v){var p=o.t,b=o.R,h=o.o;if(h.length<p.length){var I=[h,p];p=I[0],h=I[1];var T=[v,l];l=T[0],v=T[1]}for(var S=0;S<p.length;S++)if(b[S]&&h[S]!==p[S]){var R=u.concat([S]);l.push({op:"replace",path:R,value:e(h[S])}),v.push({op:"replace",path:R,value:e(p[S])})}for(var O=p.length;O<h.length;O++){var g=u.concat([O]);l.push({op:r,path:g,value:e(h[O])})}p.length<h.length&&v.push({op:"replace",path:u.concat(["length"]),value:p.length})}(n,i,a,s);case 3:return function(o,u,l,v){var p=o.t,b=o.o,h=0;p.forEach(function(I){if(!b.has(I)){var T=u.concat([h]);l.push({op:"remove",path:T,value:I}),v.unshift({op:r,path:T,value:I})}h++}),h=0,b.forEach(function(I){if(!p.has(I)){var T=u.concat([h]);l.push({op:r,path:T,value:I}),v.unshift({op:"remove",path:T,value:I})}h++})}(n,i,a,s)}},M:function(n,i,a,s){a.push({op:"replace",path:[],value:i===on?void 0:i}),s.push({op:"replace",path:[],value:n})}})}var Xi,mt,sn=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",qc=typeof Map<"u",Hc=typeof Set<"u",Zi=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",on=sn?Symbol.for("immer-nothing"):((Xi={})["immer-nothing"]=!0,Xi),Ut=sn?Symbol.for("immer-draftable"):"__$immer_draftable",pe=sn?Symbol.for("immer-state"):"__$immer_state",Vc={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(t){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+t},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(t){return"Cannot apply patch, path doesn't resolve: "+t},16:'Sets cannot have "replace" patches.',17:function(t){return"Unsupported patch operation: "+t},18:function(t){return"The plugin for '"+t+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+t+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(t){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+t+"'"},22:function(t){return"'current' expects a draft, got: "+t},23:function(t){return"'original' expects a draft, got: "+t},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Wc=""+Object.prototype.constructor,un=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,zc=Object.getOwnPropertyDescriptors||function(t){var e={};return un(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},cn={},ln={get:function(t,e){if(e===pe)return t;var r=it(t);if(!Ft(r,e))return function(i,a,s){var o,u=Ji(a,s);return u?"value"in u?u.value:(o=u.get)===null||o===void 0?void 0:o.call(i.k):void 0}(t,r,e);var n=r[e];return t.I||!Be(n)?n:n===tn(t.t,e)?(nn(t),t.o[e]=an(t.A.h,n,t)):n},has:function(t,e){return e in it(t)},ownKeys:function(t){return Reflect.ownKeys(it(t))},set:function(t,e,r){var n=Ji(it(t),e);if(n!=null&&n.set)return n.set.call(t.k,r),!0;if(!t.P){var i=tn(it(t),e),a=i==null?void 0:i[pe];if(a&&a.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(Mc(r,i)&&(r!==void 0||Ft(t.t,e)))return!0;nn(t),rn(t)}return t.o[e]===r&&(r!==void 0||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return tn(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,nn(t),rn(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=it(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:n.enumerable,value:r[e]}},defineProperty:function(){se(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){se(12)}},jt={};gt(ln,function(t,e){jt[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),jt.deleteProperty=function(t,e){return process.env.NODE_ENV!=="production"&&isNaN(parseInt(e))&&se(13),jt.set.call(this,t,e,void 0)},jt.set=function(t,e,r){return process.env.NODE_ENV!=="production"&&e!=="length"&&isNaN(parseInt(e))&&se(14),ln.set.call(this,t[0],e,r,t[0])};var Qc=function(){function t(r){var n=this;this.O=Zi,this.D=!0,this.produce=function(i,a,s){if(typeof i=="function"&&typeof a!="function"){var o=a;a=i;var u=n;return function(T){var S=this;T===void 0&&(T=o);for(var R=arguments.length,O=Array(R>1?R-1:0),g=1;g<R;g++)O[g-1]=arguments[g];return u.produce(T,function(m){var d;return(d=a).call.apply(d,[S,m].concat(O))})}}var l;if(typeof a!="function"&&se(6),s!==void 0&&typeof s!="function"&&se(7),Be(i)){var v=Gi(n),p=an(n,i,void 0),b=!0;try{l=a(p),b=!1}finally{b?cr(v):Zr(v)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(T){return Xr(v,s),en(T,v)},function(T){throw cr(v),T}):(Xr(v,s),en(l,v))}if(!i||typeof i!="object"){if((l=a(i))===void 0&&(l=i),l===on&&(l=void 0),n.D&&Jr(l,!0),s){var h=[],I=[];ke("Patches").M(i,l,h,I),s(h,I)}return l}se(21,i)},this.produceWithPatches=function(i,a){if(typeof i=="function")return function(l){for(var v=arguments.length,p=Array(v>1?v-1:0),b=1;b<v;b++)p[b-1]=arguments[b];return n.produceWithPatches(l,function(h){return i.apply(void 0,[h].concat(p))})};var s,o,u=n.produce(i,a,function(l,v){s=l,o=v});return typeof Promise<"u"&&u instanceof Promise?u.then(function(l){return[l,s,o]}):[u,s,o]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var e=t.prototype;return e.createDraft=function(r){Be(r)||se(8),je(r)&&(r=jc(r));var n=Gi(this),i=an(this,r,void 0);return i[pe].C=!0,Zr(n),i},e.finishDraft=function(r,n){var i=r&&r[pe];process.env.NODE_ENV!=="production"&&(i&&i.C||se(9),i.I&&se(10));var a=i.A;return Xr(a,n),en(void 0,a)},e.setAutoFreeze=function(r){this.D=r},e.setUseProxies=function(r){r&&!Zi&&se(20),this.O=r},e.applyPatches=function(r,n){var i;for(i=n.length-1;i>=0;i--){var a=n[i];if(a.path.length===0&&a.op==="replace"){r=a.value;break}}i>-1&&(n=n.slice(i+1));var s=ke("Patches").$;return je(r)?s(r,n):this.produce(r,function(o){return s(o,n)})},t}(),ye=new Qc;ye.produce;var ea=ye.produceWithPatches.bind(ye);ye.setAutoFreeze.bind(ye),ye.setUseProxies.bind(ye);var ta=ye.applyPatches.bind(ye);ye.createDraft.bind(ye),ye.finishDraft.bind(ye);var fr="NOT_FOUND";function Kc(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:fr},put:function(n,i){e={key:n,value:i}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}function Gc(t,e){var r=[];function n(o){var u=r.findIndex(function(v){return e(o,v.key)});if(u>-1){var l=r[u];return u>0&&(r.splice(u,1),r.unshift(l)),l.value}return fr}function i(o,u){n(o)===fr&&(r.unshift({key:o,value:u}),r.length>t&&r.pop())}function a(){return r}function s(){r=[]}return{get:n,put:i,getEntries:a,clear:s}}var $c=function(e,r){return e===r};function Jc(t){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var i=r.length,a=0;a<i;a++)if(!t(r[a],n[a]))return!1;return!0}}function ra(t,e){var r=typeof e=="object"?e:{equalityCheck:e},n=r.equalityCheck,i=n===void 0?$c:n,a=r.maxSize,s=a===void 0?1:a,o=r.resultEqualityCheck,u=Jc(i),l=s===1?Kc(u):Gc(s,u);function v(){var p=l.get(arguments);if(p===fr){if(p=t.apply(null,arguments),o){var b=l.getEntries(),h=b.find(function(I){return o(I.value,p)});h&&(p=h.value)}l.put(arguments,p)}return p}return v.clearCache=function(){return l.clear()},v}var hr=globalThis&&globalThis.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(l){return function(v){return u([l,v])}}function u(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=l[0]&2?i.return:l[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;switch(i=0,a&&(l=[l[0]&2,a.value]),l[0]){case 0:case 1:a=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){r.label=l[1];break}if(l[0]===6&&r.label<a[1]){r.label=a[1],a=l;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(l);break}a[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(t,r)}catch(v){l=[6,v],i=0}finally{n=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},pr=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t},Yc=Object.defineProperty,Xc=Object.defineProperties,Zc=Object.getOwnPropertyDescriptors,vr=Object.getOwnPropertySymbols,na=Object.prototype.hasOwnProperty,ia=Object.prototype.propertyIsEnumerable,aa=function(t,e,r){return e in t?Yc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},oe=function(t,e){for(var r in e||(e={}))na.call(e,r)&&aa(t,r,e[r]);if(vr)for(var n=0,i=vr(e);n<i.length;n++){var r=i[n];ia.call(e,r)&&aa(t,r,e[r])}return t},De=function(t,e){return Xc(t,Zc(e))},sa=function(t,e){var r={};for(var n in t)na.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&vr)for(var i=0,a=vr(t);i<a.length;i++){var n=a[i];e.indexOf(n)<0&&ia.call(t,n)&&(r[n]=t[n])}return r},gr=function(t,e,r){return new Promise(function(n,i){var a=function(u){try{o(r.next(u))}catch(l){i(l)}},s=function(u){try{o(r.throw(u))}catch(l){i(l)}},o=function(u){return u.done?n(u.value):Promise.resolve(u.value).then(a,s)};o((r=r.apply(t,e)).next())})},ie;(function(t){t.uninitialized="uninitialized",t.pending="pending",t.fulfilled="fulfilled",t.rejected="rejected"})(ie||(ie={}));function el(t){return{status:t,isUninitialized:t===ie.uninitialized,isLoading:t===ie.pending,isSuccess:t===ie.fulfilled,isError:t===ie.rejected}}function tl(t){return new RegExp("(^|:)//").test(t)}var rl=function(t){return t.replace(/\/$/,"")},nl=function(t){return t.replace(/^\//,"")};function il(t,e){if(!t)return e;if(!e)return t;if(tl(e))return e;var r=t.endsWith("/")||!e.startsWith("?")?"/":"";return t=rl(t),e=nl(e),""+t+r+e}var oa=function(t){return[].concat.apply([],t)};function al(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}function sl(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}var ua=L.isPlainObject;function ca(t,e){if(t===e||!(ua(t)&&ua(e)||Array.isArray(t)&&Array.isArray(e)))return e;for(var r=Object.keys(e),n=Object.keys(t),i=r.length===n.length,a=Array.isArray(e)?[]:{},s=0,o=r;s<o.length;s++){var u=o[s];a[u]=ca(t[u],e[u]),i&&(i=t[u]===a[u])}return i?t:a}var la=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return fetch.apply(void 0,t)},ol=function(t){return t.status>=200&&t.status<=299},ul=function(t){return/ion\/(vnd\.api\+)?json/.test(t.get("content-type")||"")};function da(t){if(!L.isPlainObject(t))return t;for(var e=oe({},t),r=0,n=Object.entries(e);r<n.length;r++){var i=n[r],a=i[0],s=i[1];s===void 0&&delete e[a]}return e}function cl(t){var e=this;t===void 0&&(t={});var r=t,n=r.baseUrl,i=r.prepareHeaders,a=i===void 0?function(g){return g}:i,s=r.fetchFn,o=s===void 0?la:s,u=r.paramsSerializer,l=r.isJsonContentType,v=l===void 0?ul:l,p=r.jsonContentType,b=p===void 0?"application/json":p,h=r.jsonReplacer,I=r.timeout,T=r.responseHandler,S=r.validateStatus,R=sa(r,["baseUrl","prepareHeaders","fetchFn","paramsSerializer","isJsonContentType","jsonContentType","jsonReplacer","timeout","responseHandler","validateStatus"]);return typeof fetch>"u"&&o===la&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),function(g,m){return gr(e,null,function(){var d,f,y,_,w,E,A,C,P,N,M,B,U,j,W,G,z,J,V,Y,Q,X,ae,ve,_e,ge,Ie,re,fe,Ye,ot,Xe,ut,bt,Ze,Er;return hr(this,function(we){switch(we.label){case 0:return d=m.signal,f=m.getState,y=m.extra,_=m.endpoint,w=m.forced,E=m.type,C=typeof g=="string"?{url:g}:g,P=C.url,N=C.headers,M=N===void 0?new Headers(R.headers):N,B=C.params,U=B===void 0?void 0:B,j=C.responseHandler,W=j===void 0?T??"json":j,G=C.validateStatus,z=G===void 0?S??ol:G,J=C.timeout,V=J===void 0?I:J,Y=sa(C,["url","headers","params","responseHandler","validateStatus","timeout"]),Q=oe(De(oe({},R),{signal:d}),Y),M=new Headers(da(M)),X=Q,[4,a(M,{getState:f,extra:y,endpoint:_,forced:w,type:E})];case 1:X.headers=we.sent()||M,ae=function(me){return typeof me=="object"&&(L.isPlainObject(me)||Array.isArray(me)||typeof me.toJSON=="function")},!Q.headers.has("content-type")&&ae(Q.body)&&Q.headers.set("content-type",b),ae(Q.body)&&v(Q.headers)&&(Q.body=JSON.stringify(Q.body,h)),U&&(ve=~P.indexOf("?")?"&":"?",_e=u?u(U):new URLSearchParams(da(U)),P+=ve+_e),P=il(n,P),ge=new Request(P,Q),Ie=ge.clone(),A={request:Ie},fe=!1,Ye=V&&setTimeout(function(){fe=!0,m.abort()},V),we.label=2;case 2:return we.trys.push([2,4,5,6]),[4,o(ge)];case 3:return re=we.sent(),[3,6];case 4:return ot=we.sent(),[2,{error:{status:fe?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(ot)},meta:A}];case 5:return Ye&&clearTimeout(Ye),[7];case 6:Xe=re.clone(),A.response=Xe,bt="",we.label=7;case 7:return we.trys.push([7,9,,10]),[4,Promise.all([O(re,W).then(function(me){return ut=me},function(me){return Ze=me}),Xe.text().then(function(me){return bt=me},function(){})])];case 8:if(we.sent(),Ze)throw Ze;return[3,10];case 9:return Er=we.sent(),[2,{error:{status:"PARSING_ERROR",originalStatus:re.status,data:bt,error:String(Er)},meta:A}];case 10:return[2,z(re,ut)?{data:ut,meta:A}:{error:{status:re.status,data:ut},meta:A}]}})})};function O(g,m){return gr(this,null,function(){var d;return hr(this,function(f){switch(f.label){case 0:return typeof m=="function"?[2,m(g)]:(m==="content-type"&&(m=v(g.headers)?"json":"text"),m!=="json"?[3,2]:[4,g.text()]);case 1:return d=f.sent(),[2,d.length?JSON.parse(d):null];case 2:return[2,g.text()]}})})}}var fa=function(){function t(e,r){r===void 0&&(r=void 0),this.value=e,this.meta=r}return t}(),dn=L.createAction("__rtkq/focused"),ha=L.createAction("__rtkq/unfocused"),fn=L.createAction("__rtkq/online"),pa=L.createAction("__rtkq/offline"),Ne;(function(t){t.query="query",t.mutation="mutation"})(Ne||(Ne={}));function va(t){return t.type===Ne.query}function ll(t){return t.type===Ne.mutation}function ga(t,e,r,n,i,a){return dl(t)?t(e,r,n,i).map(hn).map(a):Array.isArray(t)?t.map(hn).map(a):[]}function dl(t){return typeof t=="function"}function hn(t){return typeof t=="string"?{type:t}:t}function pn(t){return t!=null}var Bt=Symbol("forceQueryFn"),vn=function(t){return typeof t[Bt]=="function"};function fl(t){var e=t.serializeQueryArgs,r=t.queryThunk,n=t.mutationThunk,i=t.api,a=t.context,s=new Map,o=new Map,u=i.internalActions,l=u.unsubscribeQueryResult,v=u.removeMutationResult,p=u.updateSubscriptionOptions;return{buildInitiateQuery:g,buildInitiateMutation:m,getRunningQueryThunk:I,getRunningMutationThunk:T,getRunningQueriesThunk:S,getRunningMutationsThunk:R,getRunningOperationPromises:h,removalWarning:b};function b(){throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`)}function h(){if(typeof process<"u"&&process.env.NODE_ENV==="development")b();else{var d=function(f){return Array.from(f.values()).flatMap(function(y){return y?Object.values(y):[]})};return pr(pr([],d(s)),d(o)).filter(pn)}}function I(d,f){return function(y){var _,w=a.endpointDefinitions[d],E=e({queryArgs:f,endpointDefinition:w,endpointName:d});return(_=s.get(y))==null?void 0:_[E]}}function T(d,f){return function(y){var _;return(_=o.get(y))==null?void 0:_[f]}}function S(){return function(d){return Object.values(s.get(d)||{}).filter(pn)}}function R(){return function(d){return Object.values(o.get(d)||{}).filter(pn)}}function O(d){if(process.env.NODE_ENV!=="production"){if(O.triggered)return;var f=d(i.internalActions.internal_probeSubscription({queryCacheKey:"DOES_NOT_EXIST",requestId:"DUMMY_REQUEST_ID"}));if(O.triggered=!0,typeof f!="boolean")throw new Error('Warning: Middleware for RTK-Query API at reducerPath "'+i.reducerPath+`" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`)}}function g(d,f){var y=function(_,w){var E=w===void 0?{}:w,A=E.subscribe,C=A===void 0?!0:A,P=E.forceRefetch,N=E.subscriptionOptions,M=Bt,B=E[M];return function(U,j){var W,G,z=e({queryArgs:_,endpointDefinition:f,endpointName:d}),J=r((W={type:"query",subscribe:C,forceRefetch:P,subscriptionOptions:N,endpointName:d,originalArgs:_,queryCacheKey:z},W[Bt]=B,W)),V=i.endpoints[d].select(_),Y=U(J),Q=V(j());O(U);var X=Y.requestId,ae=Y.abort,ve=Q.requestId!==X,_e=(G=s.get(U))==null?void 0:G[z],ge=function(){return V(j())},Ie=Object.assign(B?Y.then(ge):ve&&!_e?Promise.resolve(Q):Promise.all([_e,Y]).then(ge),{arg:_,requestId:X,subscriptionOptions:N,queryCacheKey:z,abort:ae,unwrap:function(){return gr(this,null,function(){var fe;return hr(this,function(Ye){switch(Ye.label){case 0:return[4,Ie];case 1:if(fe=Ye.sent(),fe.isError)throw fe.error;return[2,fe.data]}})})},refetch:function(){return U(y(_,{subscribe:!1,forceRefetch:!0}))},unsubscribe:function(){C&&U(l({queryCacheKey:z,requestId:X}))},updateSubscriptionOptions:function(fe){Ie.subscriptionOptions=fe,U(p({endpointName:d,requestId:X,queryCacheKey:z,options:fe}))}});if(!_e&&!ve&&!B){var re=s.get(U)||{};re[z]=Ie,s.set(U,re),Ie.then(function(){delete re[z],Object.keys(re).length||s.delete(U)})}return Ie}};return y}function m(d){return function(f,y){var _=y===void 0?{}:y,w=_.track,E=w===void 0?!0:w,A=_.fixedCacheKey;return function(C,P){var N=n({type:"mutation",endpointName:d,originalArgs:f,track:E,fixedCacheKey:A}),M=C(N);O(C);var B=M.requestId,U=M.abort,j=M.unwrap,W=M.unwrap().then(function(V){return{data:V}}).catch(function(V){return{error:V}}),G=function(){C(v({requestId:B,fixedCacheKey:A}))},z=Object.assign(W,{arg:M.arg,requestId:B,abort:U,unwrap:j,unsubscribe:G,reset:G}),J=o.get(C)||{};return o.set(C,J),J[B]=z,z.then(function(){delete J[B],Object.keys(J).length||o.delete(C)}),A&&(J[A]=z,z.then(function(){J[A]===z&&(delete J[A],Object.keys(J).length||o.delete(C))})),z}}}}function ma(t){return t}function hl(t){var e=this,r=t.reducerPath,n=t.baseQuery,i=t.context.endpointDefinitions,a=t.serializeQueryArgs,s=t.api,o=function(g,m,d){return function(f){var y=i[g];f(s.internalActions.queryResultPatched({queryCacheKey:a({queryArgs:m,endpointDefinition:y,endpointName:g}),patches:d}))}},u=function(g,m,d){return function(f,y){var _,w,E=s.endpoints[g].select(m)(y()),A={patches:[],inversePatches:[],undo:function(){return f(s.util.patchQueryData(g,m,A.inversePatches))}};if(E.status===ie.uninitialized)return A;if("data"in E)if(Be(E.data)){var C=ea(E.data,d),P=C[1],N=C[2];(_=A.patches).push.apply(_,P),(w=A.inversePatches).push.apply(w,N)}else{var M=d(E.data);A.patches.push({op:"replace",path:[],value:M}),A.inversePatches.push({op:"replace",path:[],value:E.data})}return f(s.util.patchQueryData(g,m,A.patches)),A}},l=function(g,m,d){return function(f){var y;return f(s.endpoints[g].initiate(m,(y={subscribe:!1,forceRefetch:!0},y[Bt]=function(){return{data:d}},y)))}},v=function(g,m){return gr(e,[g,m],function(d,f){var y,_,w,E,A,C,P,N,M,B,U,j,W,G,z,J,V,Y,Q=f.signal,X=f.abort,ae=f.rejectWithValue,ve=f.fulfillWithValue,_e=f.dispatch,ge=f.getState,Ie=f.extra;return hr(this,function(re){switch(re.label){case 0:y=i[d.endpointName],re.label=1;case 1:return re.trys.push([1,8,,13]),_=ma,w=void 0,E={signal:Q,abort:X,dispatch:_e,getState:ge,extra:Ie,endpoint:d.endpointName,type:d.type,forced:d.type==="query"?p(d,ge()):void 0},A=d.type==="query"?d[Bt]:void 0,A?(w=A(),[3,6]):[3,2];case 2:return y.query?[4,n(y.query(d.originalArgs),E,y.extraOptions)]:[3,4];case 3:return w=re.sent(),y.transformResponse&&(_=y.transformResponse),[3,6];case 4:return[4,y.queryFn(d.originalArgs,E,y.extraOptions,function(fe){return n(fe,E,y.extraOptions)})];case 5:w=re.sent(),re.label=6;case 6:if(typeof process<"u"&&process.env.NODE_ENV==="development"){if(C=y.query?"`baseQuery`":"`queryFn`",P=void 0,!w)P=C+" did not return anything.";else if(typeof w!="object")P=C+" did not return an object.";else if(w.error&&w.data)P=C+" returned an object containing both `error` and `result`.";else if(w.error===void 0&&w.data===void 0)P=C+" returned an object containing neither a valid `error` and `result`. At least one of them should not be `undefined`";else for(N=0,M=Object.keys(w);N<M.length;N++)if(B=M[N],B!=="error"&&B!=="data"&&B!=="meta"){P="The object returned by "+C+" has the unknown property "+B+".";break}P&&console.error("Error encountered handling the endpoint "+d.endpointName+`.
              `+P+"\n              It needs to return an object with either the shape `{ data: <value> }` or `{ error: <value> }` that may contain an optional `meta` property.\n              Object returned was:",w)}if(w.error)throw new fa(w.error,w.meta);return U=ve,[4,_(w.data,w.meta,d.originalArgs)];case 7:return[2,U.apply(void 0,[re.sent(),(V={fulfilledTimeStamp:Date.now(),baseQueryMeta:w.meta},V[L.SHOULD_AUTOBATCH]=!0,V)])];case 8:if(j=re.sent(),W=j,!(W instanceof fa))return[3,12];G=ma,y.query&&y.transformErrorResponse&&(G=y.transformErrorResponse),re.label=9;case 9:return re.trys.push([9,11,,12]),z=ae,[4,G(W.value,W.meta,d.originalArgs)];case 10:return[2,z.apply(void 0,[re.sent(),(Y={baseQueryMeta:W.meta},Y[L.SHOULD_AUTOBATCH]=!0,Y)])];case 11:return J=re.sent(),W=J,[3,12];case 12:throw typeof process<"u"&&process.env.NODE_ENV!=="production"?console.error('An unhandled error occurred processing a request for the endpoint "'+d.endpointName+`".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`,W):console.error(W),W;case 13:return[2]}})})};function p(g,m){var d,f,y,_,w=(f=(d=m[r])==null?void 0:d.queries)==null?void 0:f[g.queryCacheKey],E=(y=m[r])==null?void 0:y.config.refetchOnMountOrArgChange,A=w==null?void 0:w.fulfilledTimeStamp,C=(_=g.forceRefetch)!=null?_:g.subscribe&&E;return C?C===!0||(Number(new Date)-Number(A))/1e3>=C:!1}var b=L.createAsyncThunk(r+"/executeQuery",v,{getPendingMeta:function(){var g;return g={startedTimeStamp:Date.now()},g[L.SHOULD_AUTOBATCH]=!0,g},condition:function(g,m){var d=m.getState,f,y,_,w=d(),E=(y=(f=w[r])==null?void 0:f.queries)==null?void 0:y[g.queryCacheKey],A=E==null?void 0:E.fulfilledTimeStamp,C=g.originalArgs,P=E==null?void 0:E.originalArgs,N=i[g.endpointName];return vn(g)?!0:(E==null?void 0:E.status)==="pending"?!1:p(g,w)||va(N)&&((_=N==null?void 0:N.forceRefetch)!=null&&_.call(N,{currentArg:C,previousArg:P,endpointState:E,state:w}))?!0:!A},dispatchConditionRejection:!0}),h=L.createAsyncThunk(r+"/executeMutation",v,{getPendingMeta:function(){var g;return g={startedTimeStamp:Date.now()},g[L.SHOULD_AUTOBATCH]=!0,g}}),I=function(g){return"force"in g},T=function(g){return"ifOlderThan"in g},S=function(g,m,d){return function(f,y){var _=I(d)&&d.force,w=T(d)&&d.ifOlderThan,E=function(N){return N===void 0&&(N=!0),s.endpoints[g].initiate(m,{forceRefetch:N})},A=s.endpoints[g].select(m)(y());if(_)f(E());else if(w){var C=A==null?void 0:A.fulfilledTimeStamp;if(!C){f(E());return}var P=(Number(new Date)-Number(new Date(C)))/1e3>=w;P&&f(E())}else f(E(!1))}};function R(g){return function(m){var d,f;return((f=(d=m==null?void 0:m.meta)==null?void 0:d.arg)==null?void 0:f.endpointName)===g}}function O(g,m){return{matchPending:L.isAllOf(L.isPending(g),R(m)),matchFulfilled:L.isAllOf(L.isFulfilled(g),R(m)),matchRejected:L.isAllOf(L.isRejected(g),R(m))}}return{queryThunk:b,mutationThunk:h,prefetch:S,updateQueryData:u,upsertQueryData:l,patchQueryData:o,buildMatchThunkActions:O}}function ya(t,e,r,n){return ga(r[t.meta.arg.endpointName][e],L.isFulfilled(t)?t.payload:void 0,L.isRejectedWithValue(t)?t.payload:void 0,t.meta.arg.originalArgs,"baseQueryMeta"in t.meta?t.meta.baseQueryMeta:void 0,n)}function mr(t,e,r){var n=t[e];n&&r(n)}function qt(t){var e;return(e="arg"in t?t.arg.fixedCacheKey:t.fixedCacheKey)!=null?e:t.requestId}function ba(t,e,r){var n=t[qt(e)];n&&r(n)}var Ht={};function pl(t){var e=t.reducerPath,r=t.queryThunk,n=t.mutationThunk,i=t.context,a=i.endpointDefinitions,s=i.apiUid,o=i.extractRehydrationInfo,u=i.hasRehydrationInfo,l=t.assertTagType,v=t.config,p=L.createAction(e+"/resetApiState"),b=L.createSlice({name:e+"/queries",initialState:Ht,reducers:{removeQueryResult:{reducer:function(d,f){var y=f.payload.queryCacheKey;delete d[y]},prepare:L.prepareAutoBatched()},queryResultPatched:function(d,f){var y=f.payload,_=y.queryCacheKey,w=y.patches;mr(d,_,function(E){E.data=ta(E.data,w.concat())})}},extraReducers:function(d){d.addCase(r.pending,function(f,y){var _=y.meta,w=y.meta.arg,E,A,C=vn(w);(w.subscribe||C)&&((A=f[E=w.queryCacheKey])!=null||(f[E]={status:ie.uninitialized,endpointName:w.endpointName})),mr(f,w.queryCacheKey,function(P){P.status=ie.pending,P.requestId=C&&P.requestId?P.requestId:_.requestId,w.originalArgs!==void 0&&(P.originalArgs=w.originalArgs),P.startedTimeStamp=_.startedTimeStamp})}).addCase(r.fulfilled,function(f,y){var _=y.meta,w=y.payload;mr(f,_.arg.queryCacheKey,function(E){var A;if(!(E.requestId!==_.requestId&&!vn(_.arg))){var C=a[_.arg.endpointName].merge;if(E.status=ie.fulfilled,C)if(E.data!==void 0){var P=_.fulfilledTimeStamp,N=_.arg,M=_.baseQueryMeta,B=_.requestId,U=L.createNextState(E.data,function(j){return C(j,w,{arg:N.originalArgs,baseQueryMeta:M,fulfilledTimeStamp:P,requestId:B})});E.data=U}else E.data=w;else E.data=(A=a[_.arg.endpointName].structuralSharing)==null||A?ca(je(E.data)?xc(E.data):E.data,w):w;delete E.error,E.fulfilledTimeStamp=_.fulfilledTimeStamp}})}).addCase(r.rejected,function(f,y){var _=y.meta,w=_.condition,E=_.arg,A=_.requestId,C=y.error,P=y.payload;mr(f,E.queryCacheKey,function(N){if(!w){if(N.requestId!==A)return;N.status=ie.rejected,N.error=P??C}})}).addMatcher(u,function(f,y){for(var _=o(y).queries,w=0,E=Object.entries(_);w<E.length;w++){var A=E[w],C=A[0],P=A[1];((P==null?void 0:P.status)===ie.fulfilled||(P==null?void 0:P.status)===ie.rejected)&&(f[C]=P)}})}}),h=L.createSlice({name:e+"/mutations",initialState:Ht,reducers:{removeMutationResult:{reducer:function(d,f){var y=f.payload,_=qt(y);_ in d&&delete d[_]},prepare:L.prepareAutoBatched()}},extraReducers:function(d){d.addCase(n.pending,function(f,y){var _=y.meta,w=y.meta,E=w.requestId,A=w.arg,C=w.startedTimeStamp;A.track&&(f[qt(_)]={requestId:E,status:ie.pending,endpointName:A.endpointName,startedTimeStamp:C})}).addCase(n.fulfilled,function(f,y){var _=y.payload,w=y.meta;w.arg.track&&ba(f,w,function(E){E.requestId===w.requestId&&(E.status=ie.fulfilled,E.data=_,E.fulfilledTimeStamp=w.fulfilledTimeStamp)})}).addCase(n.rejected,function(f,y){var _=y.payload,w=y.error,E=y.meta;E.arg.track&&ba(f,E,function(A){A.requestId===E.requestId&&(A.status=ie.rejected,A.error=_??w)})}).addMatcher(u,function(f,y){for(var _=o(y).mutations,w=0,E=Object.entries(_);w<E.length;w++){var A=E[w],C=A[0],P=A[1];((P==null?void 0:P.status)===ie.fulfilled||(P==null?void 0:P.status)===ie.rejected)&&C!==(P==null?void 0:P.requestId)&&(f[C]=P)}})}}),I=L.createSlice({name:e+"/invalidation",initialState:Ht,reducers:{},extraReducers:function(d){d.addCase(b.actions.removeQueryResult,function(f,y){for(var _=y.payload.queryCacheKey,w=0,E=Object.values(f);w<E.length;w++)for(var A=E[w],C=0,P=Object.values(A);C<P.length;C++){var N=P[C],M=N.indexOf(_);M!==-1&&N.splice(M,1)}}).addMatcher(u,function(f,y){for(var _,w,E,A,C=o(y).provided,P=0,N=Object.entries(C);P<N.length;P++)for(var M=N[P],B=M[0],U=M[1],j=0,W=Object.entries(U);j<W.length;j++)for(var G=W[j],z=G[0],J=G[1],V=(A=(w=(_=f[B])!=null?_:f[B]={})[E=z||"__internal_without_id"])!=null?A:w[E]=[],Y=0,Q=J;Y<Q.length;Y++){var X=Q[Y],ae=V.includes(X);ae||V.push(X)}}).addMatcher(L.isAnyOf(L.isFulfilled(r),L.isRejectedWithValue(r)),function(f,y){for(var _,w,E,A,C=ya(y,"providesTags",a,l),P=y.meta.arg.queryCacheKey,N=0,M=Object.values(f);N<M.length;N++)for(var B=M[N],U=0,j=Object.values(B);U<j.length;U++){var W=j[U],G=W.indexOf(P);G!==-1&&W.splice(G,1)}for(var z=0,J=C;z<J.length;z++){var V=J[z],Y=V.type,Q=V.id,X=(A=(w=(_=f[Y])!=null?_:f[Y]={})[E=Q||"__internal_without_id"])!=null?A:w[E]=[],ae=X.includes(P);ae||X.push(P)}})}}),T=L.createSlice({name:e+"/subscriptions",initialState:Ht,reducers:{updateSubscriptionOptions:function(d,f){},unsubscribeQueryResult:function(d,f){},internal_probeSubscription:function(d,f){}}}),S=L.createSlice({name:e+"/internalSubscriptions",initialState:Ht,reducers:{subscriptionsUpdated:{reducer:function(d,f){return ta(d,f.payload)},prepare:L.prepareAutoBatched()}}}),R=L.createSlice({name:e+"/config",initialState:oe({online:al(),focused:sl(),middlewareRegistered:!1},v),reducers:{middlewareRegistered:function(d,f){var y=f.payload;d.middlewareRegistered=d.middlewareRegistered==="conflict"||s!==y?"conflict":!0}},extraReducers:function(d){d.addCase(fn,function(f){f.online=!0}).addCase(pa,function(f){f.online=!1}).addCase(dn,function(f){f.focused=!0}).addCase(ha,function(f){f.focused=!1}).addMatcher(u,function(f){return oe({},f)})}}),O=L.combineReducers({queries:b.reducer,mutations:h.reducer,provided:I.reducer,subscriptions:S.reducer,config:R.reducer}),g=function(d,f){return O(p.match(f)?void 0:d,f)},m=De(oe(oe(oe(oe(oe({},R.actions),b.actions),T.actions),S.actions),h.actions),{unsubscribeMutationResult:h.actions.removeMutationResult,resetApiState:p});return{reducer:g,actions:m}}var at=Symbol.for("RTKQ/skipToken"),_a={status:ie.uninitialized},Ia=L.createNextState(_a,function(){}),wa=L.createNextState(_a,function(){});function vl(t){var e=t.serializeQueryArgs,r=t.reducerPath,n=function(v){return Ia},i=function(v){return wa};return{buildQuerySelector:o,buildMutationSelector:u,selectInvalidatedBy:l};function a(v){return oe(oe({},v),el(v.status))}function s(v){var p=v[r];if(process.env.NODE_ENV!=="production"&&!p){if(s.triggered)return p;s.triggered=!0,console.error("Error: No data found at `state."+r+"`. Did you forget to add the reducer to the store?")}return p}function o(v,p){return function(b){var h=e({queryArgs:b,endpointDefinition:p,endpointName:v}),I=function(S){var R,O,g;return(g=(O=(R=s(S))==null?void 0:R.queries)==null?void 0:O[h])!=null?g:Ia},T=b===at?n:I;return L.createSelector(T,a)}}function u(){return function(v){var p,b;typeof v=="object"?b=(p=qt(v))!=null?p:at:b=v;var h=function(T){var S,R,O;return(O=(R=(S=s(T))==null?void 0:S.mutations)==null?void 0:R[b])!=null?O:wa},I=b===at?i:h;return L.createSelector(I,a)}}function l(v,p){for(var b,h=v[r],I=new Set,T=0,S=p.map(hn);T<S.length;T++){var R=S[T],O=h.provided[R.type];if(O)for(var g=(b=R.id!==void 0?O[R.id]:oa(Object.values(O)))!=null?b:[],m=0,d=g;m<d.length;m++){var f=d[m];I.add(f)}}return oa(Array.from(I.values()).map(function(y){var _=h.queries[y];return _?[{queryCacheKey:y,endpointName:_.endpointName,originalArgs:_.originalArgs}]:[]}))}}var yr=WeakMap?new WeakMap:void 0,Ea=function(t){var e=t.endpointName,r=t.queryArgs,n="",i=yr==null?void 0:yr.get(r);if(typeof i=="string")n=i;else{var a=JSON.stringify(r,function(s,o){return L.isPlainObject(o)?Object.keys(o).sort().reduce(function(u,l){return u[l]=o[l],u},{}):o});L.isPlainObject(r)&&(yr==null||yr.set(r,a)),n=a}return e+"("+n+")"};function gl(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(n){var i=ra(function(v){var p,b;return(b=n.extractRehydrationInfo)==null?void 0:b.call(n,v,{reducerPath:(p=n.reducerPath)!=null?p:"api"})}),a=De(oe({reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1},n),{extractRehydrationInfo:i,serializeQueryArgs:function(v){var p=Ea;if("serializeQueryArgs"in v.endpointDefinition){var b=v.endpointDefinition.serializeQueryArgs;p=function(h){var I=b(h);return typeof I=="string"?I:Ea(De(oe({},h),{queryArgs:I}))}}else n.serializeQueryArgs&&(p=n.serializeQueryArgs);return p(v)},tagTypes:pr([],n.tagTypes||[])}),s={endpointDefinitions:{},batch:function(v){v()},apiUid:L.nanoid(),extractRehydrationInfo:i,hasRehydrationInfo:ra(function(v){return i(v)!=null})},o={injectEndpoints:l,enhanceEndpoints:function(v){var p=v.addTagTypes,b=v.endpoints;if(p)for(var h=0,I=p;h<I.length;h++){var T=I[h];a.tagTypes.includes(T)||a.tagTypes.push(T)}if(b)for(var S=0,R=Object.entries(b);S<R.length;S++){var O=R[S],g=O[0],m=O[1];typeof m=="function"?m(s.endpointDefinitions[g]):Object.assign(s.endpointDefinitions[g]||{},m)}return o}},u=t.map(function(v){return v.init(o,a,s)});function l(v){for(var p=v.endpoints({query:function(m){return De(oe({},m),{type:Ne.query})},mutation:function(m){return De(oe({},m),{type:Ne.mutation})}}),b=0,h=Object.entries(p);b<h.length;b++){var I=h[b],T=I[0],S=I[1];if(!v.overrideExisting&&T in s.endpointDefinitions){typeof process<"u"&&process.env.NODE_ENV==="development"&&console.error("called `injectEndpoints` to override already-existing endpointName "+T+" without specifying `overrideExisting: true`");continue}s.endpointDefinitions[T]=S;for(var R=0,O=u;R<O.length;R++){var g=O[R];g.injectEndpoint(T,S)}}return o}return o.injectEndpoints({endpoints:n.endpoints})}}function ml(t){for(var e in t)return!1;return!0}var yl=2147483647/1e3-1,bl=function(t){var e=t.reducerPath,r=t.api,n=t.context,i=t.internalState,a=r.internalActions,s=a.removeQueryResult,o=a.unsubscribeQueryResult;function u(b){var h=i.currentSubscriptions[b];return!!h&&!ml(h)}var l={},v=function(b,h,I){var T;if(o.match(b)){var S=h.getState()[e],R=b.payload.queryCacheKey;p(R,(T=S.queries[R])==null?void 0:T.endpointName,h,S.config)}if(r.util.resetApiState.match(b))for(var O=0,g=Object.entries(l);O<g.length;O++){var m=g[O],d=m[0],f=m[1];f&&clearTimeout(f),delete l[d]}if(n.hasRehydrationInfo(b))for(var S=h.getState()[e],y=n.extractRehydrationInfo(b).queries,_=0,w=Object.entries(y);_<w.length;_++){var E=w[_],R=E[0],A=E[1];p(R,A==null?void 0:A.endpointName,h,S.config)}};function p(b,h,I,T){var S,R=n.endpointDefinitions[h],O=(S=R==null?void 0:R.keepUnusedDataFor)!=null?S:T.keepUnusedDataFor;if(O!==1/0){var g=Math.max(0,Math.min(O,yl));if(!u(b)){var m=l[b];m&&clearTimeout(m),l[b]=setTimeout(function(){u(b)||I.dispatch(s({queryCacheKey:b})),delete l[b]},g*1e3)}}}return v},_l=function(t){var e=t.reducerPath,r=t.context,n=t.context.endpointDefinitions,i=t.mutationThunk,a=t.api,s=t.assertTagType,o=t.refetchQuery,u=a.internalActions.removeQueryResult,l=L.isAnyOf(L.isFulfilled(i),L.isRejectedWithValue(i)),v=function(b,h){l(b)&&p(ya(b,"invalidatesTags",n,s),h),a.util.invalidateTags.match(b)&&p(ga(b.payload,void 0,void 0,void 0,void 0,s),h)};function p(b,h){var I=h.getState(),T=I[e],S=a.util.selectInvalidatedBy(I,b);r.batch(function(){for(var R,O=Array.from(S.values()),g=0,m=O;g<m.length;g++){var d=m[g].queryCacheKey,f=T.queries[d],y=(R=T.subscriptions[d])!=null?R:{};f&&(Object.keys(y).length===0?h.dispatch(u({queryCacheKey:d})):f.status!==ie.uninitialized&&h.dispatch(o(f,d)))}})}return v},Il=function(t){var e=t.reducerPath,r=t.queryThunk,n=t.api,i=t.refetchQuery,a=t.internalState,s={},o=function(h,I){(n.internalActions.updateSubscriptionOptions.match(h)||n.internalActions.unsubscribeQueryResult.match(h))&&l(h.payload,I),(r.pending.match(h)||r.rejected.match(h)&&h.meta.condition)&&l(h.meta.arg,I),(r.fulfilled.match(h)||r.rejected.match(h)&&!h.meta.condition)&&u(h.meta.arg,I),n.util.resetApiState.match(h)&&p()};function u(h,I){var T=h.queryCacheKey,S=I.getState()[e],R=S.queries[T],O=a.currentSubscriptions[T];if(!(!R||R.status===ie.uninitialized)){var g=b(O);if(Number.isFinite(g)){var m=s[T];m!=null&&m.timeout&&(clearTimeout(m.timeout),m.timeout=void 0);var d=Date.now()+g,f=s[T]={nextPollTimestamp:d,pollingInterval:g,timeout:setTimeout(function(){f.timeout=void 0,I.dispatch(i(R,T))},g)}}}}function l(h,I){var T=h.queryCacheKey,S=I.getState()[e],R=S.queries[T],O=a.currentSubscriptions[T];if(!(!R||R.status===ie.uninitialized)){var g=b(O);if(!Number.isFinite(g)){v(T);return}var m=s[T],d=Date.now()+g;(!m||d<m.nextPollTimestamp)&&u({queryCacheKey:T},I)}}function v(h){var I=s[h];I!=null&&I.timeout&&clearTimeout(I.timeout),delete s[h]}function p(){for(var h=0,I=Object.keys(s);h<I.length;h++){var T=I[h];v(T)}}function b(h){h===void 0&&(h={});var I=Number.POSITIVE_INFINITY;for(var T in h)h[T].pollingInterval&&(I=Math.min(h[T].pollingInterval,I));return I}return o},wl=function(t){var e=t.reducerPath,r=t.context,n=t.api,i=t.refetchQuery,a=t.internalState,s=n.internalActions.removeQueryResult,o=function(l,v){dn.match(l)&&u(v,"refetchOnFocus"),fn.match(l)&&u(v,"refetchOnReconnect")};function u(l,v){var p=l.getState()[e],b=p.queries,h=a.currentSubscriptions;r.batch(function(){for(var I=0,T=Object.keys(h);I<T.length;I++){var S=T[I],R=b[S],O=h[S];if(!(!O||!R)){var g=Object.values(O).some(function(m){return m[v]===!0})||Object.values(O).every(function(m){return m[v]===void 0})&&p.config[v];g&&(Object.keys(O).length===0?l.dispatch(s({queryCacheKey:S})):R.status!==ie.uninitialized&&l.dispatch(i(R,S)))}}})}return o},Ta=new Error("Promise never resolved before cacheEntryRemoved."),El=function(t){var e=t.api,r=t.reducerPath,n=t.context,i=t.queryThunk,a=t.mutationThunk;t.internalState;var s=L.isAsyncThunkAction(i),o=L.isAsyncThunkAction(a),u=L.isFulfilled(i,a),l={},v=function(h,I,T){var S=p(h);if(i.pending.match(h)){var R=T[r].queries[S],O=I.getState()[r].queries[S];!R&&O&&b(h.meta.arg.endpointName,h.meta.arg.originalArgs,S,I,h.meta.requestId)}else if(a.pending.match(h)){var O=I.getState()[r].mutations[S];O&&b(h.meta.arg.endpointName,h.meta.arg.originalArgs,S,I,h.meta.requestId)}else if(u(h)){var g=l[S];g!=null&&g.valueResolved&&(g.valueResolved({data:h.payload,meta:h.meta.baseQueryMeta}),delete g.valueResolved)}else if(e.internalActions.removeQueryResult.match(h)||e.internalActions.removeMutationResult.match(h)){var g=l[S];g&&(delete l[S],g.cacheEntryRemoved())}else if(e.util.resetApiState.match(h))for(var m=0,d=Object.entries(l);m<d.length;m++){var f=d[m],y=f[0],g=f[1];delete l[y],g.cacheEntryRemoved()}};function p(h){return s(h)?h.meta.arg.queryCacheKey:o(h)?h.meta.requestId:e.internalActions.removeQueryResult.match(h)?h.payload.queryCacheKey:e.internalActions.removeMutationResult.match(h)?qt(h.payload):""}function b(h,I,T,S,R){var O=n.endpointDefinitions[h],g=O==null?void 0:O.onCacheEntryAdded;if(g){var m={},d=new Promise(function(A){m.cacheEntryRemoved=A}),f=Promise.race([new Promise(function(A){m.valueResolved=A}),d.then(function(){throw Ta})]);f.catch(function(){}),l[T]=m;var y=e.endpoints[h].select(O.type===Ne.query?I:T),_=S.dispatch(function(A,C,P){return P}),w=De(oe({},S),{getCacheEntry:function(){return y(S.getState())},requestId:R,extra:_,updateCachedData:O.type===Ne.query?function(A){return S.dispatch(e.util.updateQueryData(h,I,A))}:void 0,cacheDataLoaded:f,cacheEntryRemoved:d}),E=g(I,w);Promise.resolve(E).catch(function(A){if(A!==Ta)throw A})}}return v},Tl=function(t){var e=t.api,r=t.context,n=t.queryThunk,i=t.mutationThunk,a=L.isPending(n,i),s=L.isRejected(n,i),o=L.isFulfilled(n,i),u={},l=function(v,p){var b,h,I;if(a(v)){var T=v.meta,S=T.requestId,R=T.arg,O=R.endpointName,g=R.originalArgs,m=r.endpointDefinitions[O],d=m==null?void 0:m.onQueryStarted;if(d){var f={},y=new Promise(function(M,B){f.resolve=M,f.reject=B});y.catch(function(){}),u[S]=f;var _=e.endpoints[O].select(m.type===Ne.query?g:S),w=p.dispatch(function(M,B,U){return U}),E=De(oe({},p),{getCacheEntry:function(){return _(p.getState())},requestId:S,extra:w,updateCachedData:m.type===Ne.query?function(M){return p.dispatch(e.util.updateQueryData(O,g,M))}:void 0,queryFulfilled:y});d(g,E)}}else if(o(v)){var A=v.meta,S=A.requestId,C=A.baseQueryMeta;(b=u[S])==null||b.resolve({data:v.payload,meta:C}),delete u[S]}else if(s(v)){var P=v.meta,S=P.requestId,N=P.rejectedWithValue,C=P.baseQueryMeta;(I=u[S])==null||I.reject({error:(h=v.payload)!=null?h:v.error,isUnhandledError:!N,meta:C}),delete u[S]}};return l},Sl=function(t){var e=t.api,r=t.context.apiUid,n=t.reducerPath;return function(i,a){var s,o;e.util.resetApiState.match(i)&&a.dispatch(e.internalActions.middlewareRegistered(r)),typeof process<"u"&&process.env.NODE_ENV==="development"&&e.internalActions.middlewareRegistered.match(i)&&i.payload===r&&((o=(s=a.getState()[n])==null?void 0:s.config)==null?void 0:o.middlewareRegistered)==="conflict"&&console.warn('There is a mismatch between slice and middleware for the reducerPath "'+n+`".
You can only have one api per reducer path, this will lead to crashes in various situations!`+(n==="api"?`
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!`:""))}},Sa,Rl=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis):function(t){return(Sa||(Sa=Promise.resolve())).then(t).catch(function(e){return setTimeout(function(){throw e},0)})},Ol=function(t){var e=t.api,r=t.queryThunk,n=t.internalState,i=e.reducerPath+"/subscriptions",a=null,s=!1,o=e.internalActions,u=o.updateSubscriptionOptions,l=o.unsubscribeQueryResult,v=function(p,b){var h,I,T,S,R,O,g,m,d;if(u.match(b)){var f=b.payload,y=f.queryCacheKey,_=f.requestId,w=f.options;return(h=p==null?void 0:p[y])!=null&&h[_]&&(p[y][_]=w),!0}if(l.match(b)){var E=b.payload,y=E.queryCacheKey,_=E.requestId;return p[y]&&delete p[y][_],!0}if(e.internalActions.removeQueryResult.match(b))return delete p[b.payload.queryCacheKey],!0;if(r.pending.match(b)){var A=b.meta,C=A.arg,_=A.requestId;if(C.subscribe){var P=(T=p[I=C.queryCacheKey])!=null?T:p[I]={};return P[_]=(R=(S=C.subscriptionOptions)!=null?S:P[_])!=null?R:{},!0}}if(r.rejected.match(b)){var N=b.meta,M=N.condition,C=N.arg,_=N.requestId;if(M&&C.subscribe){var P=(g=p[O=C.queryCacheKey])!=null?g:p[O]={};return P[_]=(d=(m=C.subscriptionOptions)!=null?m:P[_])!=null?d:{},!0}}return!1};return function(p,b){var h,I;if(a||(a=JSON.parse(JSON.stringify(n.currentSubscriptions))),e.util.resetApiState.match(p))return a=n.currentSubscriptions={},[!0,!1];if(e.internalActions.internal_probeSubscription.match(p)){var T=p.payload,S=T.queryCacheKey,R=T.requestId,O=!!((h=n.currentSubscriptions[S])!=null&&h[R]);return[!1,O]}var g=v(n.currentSubscriptions,p);if(g){s||(Rl(function(){var y=JSON.parse(JSON.stringify(n.currentSubscriptions)),_=ea(a,function(){return y}),w=_[1];b.next(e.internalActions.subscriptionsUpdated(w)),a=y,s=!1}),s=!0);var m=!!((I=p.type)!=null&&I.startsWith(i)),d=r.rejected.match(p)&&p.meta.condition&&!!p.meta.arg.subscribe,f=!m&&!d;return[f,!1]}return[!0,!1]}};function Al(t){var e=t.reducerPath,r=t.queryThunk,n=t.api,i=t.context,a=i.apiUid,s={invalidateTags:L.createAction(e+"/invalidateTags")},o=function(p){return!!p&&typeof p.type=="string"&&p.type.startsWith(e+"/")},u=[Sl,bl,_l,Il,El,Tl],l=function(p){var b=!1,h={currentSubscriptions:{}},I=De(oe({},t),{internalState:h,refetchQuery:v}),T=u.map(function(O){return O(I)}),S=Ol(I),R=wl(I);return function(O){return function(g){b||(b=!0,p.dispatch(n.internalActions.middlewareRegistered(a)));var m=De(oe({},p),{next:O}),d=p.getState(),f=S(g,m,d),y=f[0],_=f[1],w;if(y?w=O(g):w=_,p.getState()[e]&&(R(g,m,d),o(g)||i.hasRehydrationInfo(g)))for(var E=0,A=T;E<A.length;E++){var C=A[E];C(g,m,d)}return w}}};return{middleware:l,actions:s};function v(p,b,h){return h===void 0&&(h={}),r(oe({type:"query",endpointName:p.endpointName,originalArgs:p.originalArgs,subscribe:!1,forceRefetch:!0,queryCacheKey:b},h))}}function Je(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];Object.assign.apply(Object,pr([t],e))}var Ra=Symbol(),Cl=function(){return{name:Ra,init:function(t,e,r){var n=e.baseQuery,i=e.tagTypes,a=e.reducerPath,s=e.serializeQueryArgs,o=e.keepUnusedDataFor,u=e.refetchOnMountOrArgChange,l=e.refetchOnFocus,v=e.refetchOnReconnect;Bc();var p=function(V){return typeof process<"u"&&process.env.NODE_ENV==="development"&&(i.includes(V.type)||console.error("Tag type '"+V.type+"' was used, but not specified in `tagTypes`!")),V};Object.assign(t,{reducerPath:a,endpoints:{},internalActions:{onOnline:fn,onOffline:pa,onFocus:dn,onFocusLost:ha},util:{}});var b=hl({baseQuery:n,reducerPath:a,context:r,api:t,serializeQueryArgs:s}),h=b.queryThunk,I=b.mutationThunk,T=b.patchQueryData,S=b.updateQueryData,R=b.upsertQueryData,O=b.prefetch,g=b.buildMatchThunkActions,m=pl({context:r,queryThunk:h,mutationThunk:I,reducerPath:a,assertTagType:p,config:{refetchOnFocus:l,refetchOnReconnect:v,refetchOnMountOrArgChange:u,keepUnusedDataFor:o,reducerPath:a}}),d=m.reducer,f=m.actions;Je(t.util,{patchQueryData:T,updateQueryData:S,upsertQueryData:R,prefetch:O,resetApiState:f.resetApiState}),Je(t.internalActions,f);var y=Al({reducerPath:a,context:r,queryThunk:h,mutationThunk:I,api:t,assertTagType:p}),_=y.middleware,w=y.actions;Je(t.util,w),Je(t,{reducer:d,middleware:_});var E=vl({serializeQueryArgs:s,reducerPath:a}),A=E.buildQuerySelector,C=E.buildMutationSelector,P=E.selectInvalidatedBy;Je(t.util,{selectInvalidatedBy:P});var N=fl({queryThunk:h,mutationThunk:I,api:t,serializeQueryArgs:s,context:r}),M=N.buildInitiateQuery,B=N.buildInitiateMutation,U=N.getRunningMutationThunk,j=N.getRunningMutationsThunk,W=N.getRunningQueriesThunk,G=N.getRunningQueryThunk,z=N.getRunningOperationPromises,J=N.removalWarning;return Je(t.util,{getRunningOperationPromises:z,getRunningOperationPromise:J,getRunningMutationThunk:U,getRunningMutationsThunk:j,getRunningQueryThunk:G,getRunningQueriesThunk:W}),{name:Ra,injectEndpoint:function(V,Y){var Q,X,ae=t;(X=(Q=ae.endpoints)[V])!=null||(Q[V]={}),va(Y)?Je(ae.endpoints[V],{name:V,select:A(V,Y),initiate:M(V,Y)},g(h,V)):ll(Y)&&Je(ae.endpoints[V],{name:V,select:C(),initiate:B(V)},g(I,V))}}}}},Pl=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t},kl=Object.defineProperty,Dl=Object.defineProperties,Nl=Object.getOwnPropertyDescriptors,Oa=Object.getOwnPropertySymbols,xl=Object.prototype.hasOwnProperty,Ml=Object.prototype.propertyIsEnumerable,Aa=function(t,e,r){return e in t?kl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},qe=function(t,e){for(var r in e||(e={}))xl.call(e,r)&&Aa(t,r,e[r]);if(Oa)for(var n=0,i=Oa(e);n<i.length;n++){var r=i[n];Ml.call(e,r)&&Aa(t,r,e[r])}return t},br=function(t,e){return Dl(t,Nl(e))};function Ca(t,e,r,n){var i=F.useMemo(function(){return{queryArgs:t,serialized:typeof t=="object"?e({queryArgs:t,endpointDefinition:r,endpointName:n}):t}},[t,e,r,n]),a=F.useRef(i);return F.useEffect(function(){a.current.serialized!==i.serialized&&(a.current=i)},[i]),a.current.serialized===i.serialized?a.current.queryArgs:t}var gn=Symbol();function mn(t){var e=F.useRef(t);return F.useEffect(function(){xe.shallowEqual(e.current,t)||(e.current=t)},[t]),xe.shallowEqual(e.current,t)?e.current:t}var _r=WeakMap?new WeakMap:void 0,Ll=function(t){var e=t.endpointName,r=t.queryArgs,n="",i=_r==null?void 0:_r.get(r);if(typeof i=="string")n=i;else{var a=JSON.stringify(r,function(s,o){return L.isPlainObject(o)?Object.keys(o).sort().reduce(function(u,l){return u[l]=o[l],u},{}):o});L.isPlainObject(r)&&(_r==null||_r.set(r,a)),n=a}return e+"("+n+")"},Fl=typeof window<"u"&&window.document&&window.document.createElement?F.useLayoutEffect:F.useEffect,Ul=function(t){return t},jl=function(t){return t.isUninitialized?br(qe({},t),{isUninitialized:!1,isFetching:!0,isLoading:t.data===void 0,status:ie.pending}):t};function Bl(t){var e=t.api,r=t.moduleOptions,n=r.batch,i=r.useDispatch,a=r.useSelector,s=r.useStore,o=r.unstable__sideEffectsInRender,u=t.serializeQueryArgs,l=t.context,v=o?function(T){return T()}:F.useEffect;return{buildQueryHooks:h,buildMutationHook:I,usePrefetch:b};function p(T,S,R){if(S!=null&&S.endpointName&&T.isUninitialized){var O=S.endpointName,g=l.endpointDefinitions[O];u({queryArgs:S.originalArgs,endpointDefinition:g,endpointName:O})===u({queryArgs:R,endpointDefinition:g,endpointName:O})&&(S=void 0)}var m=T.isSuccess?T.data:S==null?void 0:S.data;m===void 0&&(m=T.data);var d=m!==void 0,f=T.isLoading,y=!d&&f,_=T.isSuccess||f&&d;return br(qe({},T),{data:m,currentData:T.data,isFetching:f,isLoading:y,isSuccess:_})}function b(T,S){var R=i(),O=mn(S);return F.useCallback(function(g,m){return R(e.util.prefetch(T,g,qe(qe({},O),m)))},[T,R,O])}function h(T){var S=function(g,m){var d=m===void 0?{}:m,f=d.refetchOnReconnect,y=d.refetchOnFocus,_=d.refetchOnMountOrArgChange,w=d.skip,E=w===void 0?!1:w,A=d.pollingInterval,C=A===void 0?0:A,P=e.endpoints[T].initiate,N=i(),M=Ca(E?at:g,Ll,l.endpointDefinitions[T],T),B=mn({refetchOnReconnect:f,refetchOnFocus:y,pollingInterval:C}),U=F.useRef(!1),j=F.useRef(),W=j.current||{},G=W.queryCacheKey,z=W.requestId,J=!1;if(G&&z){var V=N(e.internalActions.internal_probeSubscription({queryCacheKey:G,requestId:z}));if(process.env.NODE_ENV!=="production"&&typeof V!="boolean")throw new Error('Warning: Middleware for RTK-Query API at reducerPath "'+e.reducerPath+`" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);J=!!V}var Y=!J&&U.current;return v(function(){U.current=J}),v(function(){Y&&(j.current=void 0)},[Y]),v(function(){var Q,X=j.current;if(typeof process<"u"&&process.env.NODE_ENV==="removeMeOnCompilation"&&console.log(Y),M===at){X==null||X.unsubscribe(),j.current=void 0;return}var ae=(Q=j.current)==null?void 0:Q.subscriptionOptions;if(!X||X.arg!==M){X==null||X.unsubscribe();var ve=N(P(M,{subscriptionOptions:B,forceRefetch:_}));j.current=ve}else B!==ae&&X.updateSubscriptionOptions(B)},[N,P,_,M,B,Y]),F.useEffect(function(){return function(){var Q;(Q=j.current)==null||Q.unsubscribe(),j.current=void 0}},[]),F.useMemo(function(){return{refetch:function(){var Q;if(!j.current)throw new Error("Cannot refetch a query that has not been started yet.");return(Q=j.current)==null?void 0:Q.refetch()}}},[])},R=function(g){var m=g===void 0?{}:g,d=m.refetchOnReconnect,f=m.refetchOnFocus,y=m.pollingInterval,_=y===void 0?0:y,w=e.endpoints[T].initiate,E=i(),A=F.useState(gn),C=A[0],P=A[1],N=F.useRef(),M=mn({refetchOnReconnect:d,refetchOnFocus:f,pollingInterval:_});v(function(){var j,W,G=(j=N.current)==null?void 0:j.subscriptionOptions;M!==G&&((W=N.current)==null||W.updateSubscriptionOptions(M))},[M]);var B=F.useRef(M);v(function(){B.current=M},[M]);var U=F.useCallback(function(j,W){W===void 0&&(W=!1);var G;return n(function(){var z;(z=N.current)==null||z.unsubscribe(),N.current=G=E(w(j,{subscriptionOptions:B.current,forceRefetch:!W})),P(j)}),G},[E,w]);return F.useEffect(function(){return function(){var j;(j=N==null?void 0:N.current)==null||j.unsubscribe()}},[]),F.useEffect(function(){C!==gn&&!N.current&&U(C,!0)},[C,U]),F.useMemo(function(){return[U,C]},[U,C])},O=function(g,m){var d=m===void 0?{}:m,f=d.skip,y=f===void 0?!1:f,_=d.selectFromResult,w=e.endpoints[T].select,E=Ca(y?at:g,u,l.endpointDefinitions[T],T),A=F.useRef(),C=F.useMemo(function(){return L.createSelector([w(E),function(U,j){return j},function(U){return E}],p)},[w,E]),P=F.useMemo(function(){return _?L.createSelector([C],_):C},[C,_]),N=a(function(U){return P(U,A.current)},xe.shallowEqual),M=s(),B=C(M.getState(),A.current);return Fl(function(){A.current=B},[B]),N};return{useQueryState:O,useQuerySubscription:S,useLazyQuerySubscription:R,useLazyQuery:function(g){var m=R(g),d=m[0],f=m[1],y=O(f,br(qe({},g),{skip:f===gn})),_=F.useMemo(function(){return{lastArg:f}},[f]);return F.useMemo(function(){return[d,y,_]},[d,y,_])},useQuery:function(g,m){var d=S(g,m),f=O(g,qe({selectFromResult:g===at||m!=null&&m.skip?void 0:jl},m)),y=f.data,_=f.status,w=f.isLoading,E=f.isSuccess,A=f.isError,C=f.error;return F.useDebugValue({data:y,status:_,isLoading:w,isSuccess:E,isError:A,error:C}),F.useMemo(function(){return qe(qe({},f),d)},[f,d])}}}function I(T){return function(S){var R=S===void 0?{}:S,O=R.selectFromResult,g=O===void 0?Ul:O,m=R.fixedCacheKey,d=e.endpoints[T],f=d.select,y=d.initiate,_=i(),w=F.useState(),E=w[0],A=w[1];F.useEffect(function(){return function(){E!=null&&E.arg.fixedCacheKey||E==null||E.reset()}},[E]);var C=F.useCallback(function(X){var ae=_(y(X,{fixedCacheKey:m}));return A(ae),ae},[_,y,m]),P=(E||{}).requestId,N=F.useMemo(function(){return L.createSelector([f({fixedCacheKey:m,requestId:E==null?void 0:E.requestId})],g)},[f,E,g,m]),M=a(N,xe.shallowEqual),B=m==null?E==null?void 0:E.arg.originalArgs:void 0,U=F.useCallback(function(){n(function(){E&&A(void 0),m&&_(e.internalActions.removeMutationResult({requestId:P,fixedCacheKey:m}))})},[_,m,E,P]),j=M.endpointName,W=M.data,G=M.status,z=M.isLoading,J=M.isSuccess,V=M.isError,Y=M.error;F.useDebugValue({endpointName:j,data:W,status:G,isLoading:z,isSuccess:J,isError:V,error:Y});var Q=F.useMemo(function(){return br(qe({},M),{originalArgs:B,reset:U})},[M,B,U]);return F.useMemo(function(){return[C,Q]},[C,Q])}}}var Ir;(function(t){t.query="query",t.mutation="mutation"})(Ir||(Ir={}));function ql(t){return t.type===Ir.query}function Hl(t){return t.type===Ir.mutation}function yn(t){return t.replace(t[0],t[0].toUpperCase())}function wr(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];Object.assign.apply(Object,Pl([t],e))}var Vl=Symbol(),Wl=function(t){var e=t===void 0?{}:t,r=e.batch,n=r===void 0?xe.batch:r,i=e.useDispatch,a=i===void 0?xe.useDispatch:i,s=e.useSelector,o=s===void 0?xe.useSelector:s,u=e.useStore,l=u===void 0?xe.useStore:u,v=e.unstable__sideEffectsInRender,p=v===void 0?!1:v;return{name:Vl,init:function(b,h,I){var T=h.serializeQueryArgs,S=b,R=Bl({api:b,moduleOptions:{batch:n,useDispatch:a,useSelector:o,useStore:l,unstable__sideEffectsInRender:p},serializeQueryArgs:T,context:I}),O=R.buildQueryHooks,g=R.buildMutationHook,m=R.usePrefetch;return wr(S,{usePrefetch:m}),wr(I,{batch:n}),{injectEndpoint:function(d,f){if(ql(f)){var y=O(d),_=y.useQuery,w=y.useLazyQuery,E=y.useLazyQuerySubscription,A=y.useQueryState,C=y.useQuerySubscription;wr(S.endpoints[d],{useQuery:_,useLazyQuery:w,useLazyQuerySubscription:E,useQueryState:A,useQuerySubscription:C}),b["use"+yn(d)+"Query"]=_,b["useLazy"+yn(d)+"Query"]=w}else if(Hl(f)){var P=g(d);wr(S.endpoints[d],{useMutation:P}),b["use"+yn(d)+"Mutation"]=P}}}}}},zl=gl(Cl(),Wl());const st=zl({baseQuery:cl({baseUrl:ee.endpoint,prepareHeaders:(t,{getState:e,endpoint:r})=>{const{isAuthenticated:n,refresh_token:i}=e().userReducer;return n&&i&&r==="updateLogin"&&t.set(ee.refreshTokenHeader,ee.keywordRefreshTokenHeader?`${ee.keywordRefreshTokenHeader} ${i}`:i),t.set("Content-Type","application/json")}}),endpoints:t=>({login:t.mutation({query({email:e,encodedBody:r,password:n,username:i,token:a}){if(a)return{url:"",method:"POST",headers:{Authorization:`${ee.keyword} ${a}`}};if(r)return{url:ee.urlLoginForBase64??"",method:"POST",headers:{authorization:"Basic "+r}};let s={};return n&&(s={...s,password:n}),e&&(s={...s,email:e}),i&&(s={...s,username:i}),{url:ee.urlLoginForEmailOrUser??"",method:"POST",body:s}}}),signIn:t.mutation({query({body:e,encodedBody:r}){return r?{url:ee.urlSignInForBase64??"sign-in",method:"POST",body:e}:{url:ee.urlSignIn??"sign-in",method:"POST",body:e}}}),updateLogin:t.mutation({query(){return{url:ee.urlForRefreshToken??"login/update",method:"PUT"}}}),passwordReset:t.mutation({query(e){return{url:ee.urlForPasswordReset??"reset-password",method:"POST",body:e}}})})}),{useLoginMutation:Ql,useUpdateLoginMutation:Kl,usePasswordResetMutation:Gl,useSignInMutation:$l}=st,Wd="",Jl=({children:t,title:e,isLoading:r,scrollPosition:n,language:i,toastMessage:a})=>{const s=de.useSignal(""),o=de.useSignal({}),[u,{data:l,isSuccess:v,isError:p,isLoading:b,error:h}]=Gl(),{closeAction:I,isOpen:T,message:S}=F.useContext(Wt),R=F.useRef(null),O=g=>{g.preventDefault(),!v&&u({email:s.value})};return F.useEffect(()=>{R.current&&(T?R.current.showModal():R.current.close())},[T]),F.useEffect(()=>{if(R.current){const g=R.current.offsetWidth;R.current.scrollTo(n.value?g:0,0)}},[n.value]),F.useEffect(()=>{h?"data"in h?o.value={code:"auth/password-reset-error",message:h.data&&(Object.values(h.data).find(g=>typeof g=="string")??h.data)}:"status"in h&&(o.value={code:"auth/fetch-failed",message:"error"in h?h.error:"Unexpected Error"}):o.value.message&&(o.value={})},[h]),F.useEffect(()=>{v&&(a.value=i.forgotPasswordLabel)},[v]),k.jsxs("dialog",{ref:R,className:"modal-container mandatory-scroll-snapping",children:[k.jsxs("section",{className:"modal-data",children:[I&&k.jsx("button",{onClick:()=>typeof I=="function"?I(g=>!g):I.value=!I.value,className:"modal-close",children:"X"}),k.jsx("header",{className:"modal-title",children:k.jsx("label",{children:e})}),k.jsx("main",{className:"modal-message",children:r?k.jsx(Pa,{}):typeof S=="string"?k.jsx("p",{children:S}):S}),k.jsx("footer",{className:"modal-footer",children:t})]}),k.jsxs("section",{className:"password-recovery",children:[k.jsx("span",{className:"go-back",onClick:()=>n.value=!1,children:"<"}),k.jsxs("form",{onSubmit:O,children:[k.jsx("h3",{children:i.forgotPasswordLabel}),k.jsxs("label",{children:["Email:",k.jsx("input",{required:!0,onChange:g=>s.value=g.currentTarget.value,value:s.value,type:"email"})]}),k.jsx("button",{className:"is-btn blue",children:i.submit})]}),k.jsx(La,{error:o.value}),b&&k.jsx(Pa,{})]}),a.value&&k.jsxs("div",{className:"simple-toast show",children:[k.jsx("button",{onClick:()=>a.value=void 0,children:"X"}),k.jsx("div",{className:"toast-message",children:a})]})]})},zd="",Pa=()=>k.jsx("div",{className:"loader-container",children:k.jsxs("div",{className:"loader-box",children:[k.jsx("div",{className:"load blue"}),k.jsx("div",{className:"load red"}),k.jsx("div",{className:"load orange"}),k.jsx("div",{className:"load yellow"}),k.jsx("div",{className:"load green"})]})}),Qd="",Yl=(t,e)=>{var r;return((r=t.find(n=>n.code==="*"?!0:n.code===e.code))==null?void 0:r.message)??e.message},ka="IS_GOOGLE",Da="IS_FACEBOOK",Na="IS_TWITTER",xa="IS_GITHUB",Ma="IS_MICROSOFT",Xl=()=>k.jsx("svg",{width:"98",height:"96",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 98 96",children:k.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",fill:"#fff"})}),Zl=()=>k.jsx("svg",{version:"1.1",id:"Logo",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 248 204",xmlSpace:"preserve",children:k.jsx("g",{id:"Logo_1_",children:k.jsx("path",{id:"white_background",fill:"#FFFFFF",d:`M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
                    C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
                    c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
                    c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
                    c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
                    c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z`})})}),ed=()=>k.jsxs("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 40 40",xmlSpace:"preserve",children:[k.jsx("path",{fill:"#1877F2",d:"M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z"}),k.jsx("path",{fill:"#FFFFFF",d:`M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20
            h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z`})]}),td=[{method:"google",constName:ka,name:"Google",className:"google-btn"},{method:"facebook",constName:Da,name:"Facebook",className:"facebook-btn",icon:k.jsx(ed,{})},{method:"twitter",constName:Na,name:"Twitter",className:"twitter-btn",icon:k.jsx(Zl,{})},{method:"github",constName:xa,name:"GitHub",className:"github-btn",icon:k.jsx(Xl,{})},{method:"microsoft",constName:Ma,name:"Microsoft",className:"microsoft-btn"}],rd=t=>td.filter(e=>t.find(r=>e.method===r)),nd={es:{logIn:"Iniciar sesión",username:"Usuario",password:"Contraseña",confirm_password:"Confirmar contraseña",continue:"Continuar",submit:"Enviar",continueAs:"Continuar como:",loggedWith:"Logueado con",logOut:"Desloguearse",forgotPassword:"Recuperar contraseña",forgotPasswordLabel:"Email enviado correctamente.",signIn:"Crear cuenta",passwordNotMatch:"Las contraseñas no coinciden",minLength:"La contraseña debe contener mínimo 8 caracteres"},en:{logIn:"Log In",username:"Username",password:"Password",confirm_password:"Confirm Password",continue:"Continue",submit:"Submit",continueAs:"Continue as:",loggedWith:"Logged with",logOut:"Log Out",forgotPassword:"Password Recovery",forgotPasswordLabel:"Email sended successfully.",signIn:"Create account",passwordNotMatch:"Passwords do not match",minLength:"Passwords should contain a minimum of 8 characters"}},id=t=>nd[t],ad=()=>{const t=de.useSignal(void 0),e=de.useSignal(void 0),r=de.useSignal(void 0);let n=F.useRef(void 0);const i=F.useCallback(a=>a(t,n,e,r),[]);return F.useEffect(()=>()=>{n.current&&clearInterval(n.current)},[]),{user:t.value,updateError:e.value,logOut:r.value,authManager:i}};var yt=(t=>(t.LOGIN="login",t.SIGN_IN="signIn",t))(yt||{});const sd=t=>Lt(Ge(),zi).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),od=t=>Lt(Ge(),Wi).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),ud=t=>Lt(Ge(),kc).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),cd=t=>Lt(Ge(),Dc).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),ld=t=>Lt(Ge(),Nc).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),dd=1e3,fd=5e3,hd={login:{email:"",password:"",username:""},signIn:{email:"",username:"",password1:"",password2:""}},pd=(t,e)=>{let r="";const{password1:n,password2:i}=t;return n.length>0&&n.length<8?r=e.minLength:i.length>0&&i!==n&&(r=e.passwordNotMatch),r},vd=(t,e,r,n)=>{const[i]=Ql(),[a]=$l(),[s]=Kl(),o=de.useSignal(hd),u=de.useSignal(!1),l=de.useSignal(!1),v=de.useSignal(!1),p=de.useSignal({}),b=()=>{de.batch(()=>{u.value=!u.value,l.value&&(l.value=!l.value)})},h=g=>{const{target:m}=g,d=m.getAttribute("data-section")??yt.LOGIN;if(o.value={...o.value,[d]:{...o.value[d],[m.name]:m.value}},d===yt.SIGN_IN){const f=pd(o.value[d],r);f?p.value={code:"sign-in/password",message:f}:p.value={}}},I=g=>{if(ee.hasToS&&!u.value){l.value=!0;return}v.value=!0,R(g,()=>v.value=!1)},T=async g=>{if(g.preventDefault(),p.value={},ee.hasToS&&!u.value){l.value=!0;return}if(v.value)return;v.value=!0;const m=g.currentTarget.getAttribute("data-section")??yt.LOGIN;let d={};if(m===yt.LOGIN){if(ee.acceptUsername?d={username:o.value[m].username,password:o.value[m].password}:d={email:o.value[m].email,password:o.value[m].password},ee.bodyAsBase64){const f=Object.entries(d).map(([_,w])=>`${_}=${w}`).join("&");d={encodedBody:btoa(f)}}i(d).unwrap().then(S).catch(f=>{"data"in f?p.value={code:"auth/firebase-credential-not-provided",message:f.data&&(Object.values(f.data).find(y=>typeof y=="string")??f.data)}:"status"in f&&(p.value={code:"auth/fetch-failed",message:"error"in f?f.error:"Unexpected Error"})}).finally(()=>v.value=!1)}else if(m===yt.SIGN_IN){let f=o.value[m];if(ee.bodyAsBase64){const y=Object.entries(f).map(([_,w])=>`${_}=${w}`).join("&");f=btoa(y)}a({body:f,encodedBody:ee.bodyAsBase64}).unwrap().then(S).catch(y=>{"data"in y?p.value={code:"auth/firebase-credential-not-provided",message:y.data&&(Object.values(y.data).find(_=>typeof _=="string")??y.data)}:"status"in y&&(p.value={code:"auth/fetch-failed",message:"error"in y?y.error:"Unexpected Error"})}).finally(()=>v.value=!1)}},S=g=>{t(async(m,d,f,y)=>{if(clearInterval(d.current),d.current=void 0,g.message){n.value=g.message;return}d.current=setInterval(()=>{s().unwrap().then(_=>m.value=_).catch(_=>{m.value=void 0,clearInterval(d.current),"data"in _?f.value={code:"auth/firebase-credential-not-provided",message:_.data&&(Object.values(_.data).find(w=>typeof w=="string")??_.data)}:"status"in _&&(f.value={code:"auth/fetch-failed",message:"error"in _?_.error:"Unexpected Error"})})},g.expiry*dd-fd),m.value=g,y.value=async()=>{await Ei(Ge()).finally(()=>clearInterval(d.current)),y.value=void 0}}),!g.message&&(typeof e=="function"?e(m=>!m):e.value=!e.value)},R=async(g,m)=>{i({token:g}).unwrap().then(S).catch(d=>{"data"in d?p.value={code:"auth/firebase-credential-not-provided",message:d.data&&(Object.values(d.data).find(f=>typeof f=="string")??d.data)}:"status"in d&&(p.value={code:"auth/fetch-failed",message:"error"in d?d.error:"Unexpected Error"})}).finally(m)};return{form:o,radio:u,isLoading:v,handleError:p,confirmTp:l,handleChange:h,handleRadio:b,handleSocialLogin:async(g,m)=>{if(g.preventDefault(),ee.hasToS&&!u.value){l.value=!0;return}if(!v.value){switch(v.value=!0,m){case ka:await od(p).then(async d=>{d&&(Oe.credentialFromResult(d)===null&&(p.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),d.user.getIdToken().then(R))});break;case Da:await sd(p).then(async d=>{d&&(Re.credentialFromResult(d)===null&&(p.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),d.user.getIdToken().then(R))});break;case Na:await ud(p).then(async d=>{d&&(Ce.credentialFromResult(d)===null&&(p.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),d.user.getIdToken().then(R))});break;case xa:await cd(p).then(async d=>{d&&(Ae.credentialFromResult(d)===null&&(p.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),d.user.getIdToken().then(R))});break;case Ma:await ld(p).then(async d=>{d&&(pt.credentialFromResult(d)===null&&(p.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),d.user.getIdToken().then(R))});break}v.value=!1}},handleSubmit:T,handleSubmitUserAlreadyLogged:I,handleToken:R}},gd=()=>{const t=de.useSignal(!1),e=de.useSignal(void 0),r=de.useSignal(void 0),{closeAction:n,authManager:i,isOpen:a}=F.useContext(Wt),s=id(ee.language),{form:o,radio:u,confirmTp:l,isLoading:v,handleError:p,handleSubmit:b,handleSubmitUserAlreadyLogged:h,handleChange:I,handleRadio:T,handleSocialLogin:S,handleToken:R}=vd(i,n,s,e);return F.useEffect(()=>{a||(p.value={})},[a]),F.useEffect(()=>{a&&(async()=>{v.value=!0;let g=pu(Ge(),async m=>{m&&await m.getIdToken().then(d=>{const f=m.providerData[0];r.value={...f,providerId:f.providerId.split(".")[0],tokenId:d}}).finally(()=>v.value=!1),v.value=!1,g()})})()},[a]),k.jsx(Jl,{title:s.logIn,isLoading:v.value,scrollPosition:t,language:s,toastMessage:e,children:k.jsxs("div",{className:"login-container",children:[k.jsxs("div",{className:"login",children:[k.jsx(md,{handleSocialLogin:S}),k.jsx(yd,{forgotPassword:t,form:o,handleChange:I,handleSubmit:b,language:s})]}),k.jsx(La,{error:p.value}),k.jsx(bd,{alreadyUser:r,language:s,handleSubmitUserAlreadyLogged:h}),k.jsx(_d,{confirmTp:l.value,handleRadio:T,radioValue:u.value})]})})},md=({handleSocialLogin:t})=>k.jsx("div",{children:rd(ee.signInMethods).map(({className:e,name:r,constName:n,icon:i},a)=>k.jsxs("button",{onClick:s=>t(s,n),className:e,children:[i&&i,r]},a))}),yd=({handleSubmit:t,language:e,handleChange:r,form:n,forgotPassword:i})=>{const a=de.useSignal(!0),s=F.useRef(null);return F.useEffect(()=>{if(s.current){const o=s.current.offsetWidth;s.current.scrollTo(a.value?0:o,0)}},[a.value]),k.jsx("div",{children:k.jsxs("section",{ref:s,className:"form-email mandatory-scroll-snapping",children:[k.jsxs("form",{className:"form-field",autoComplete:"on","data-section":"login",onSubmit:t,children:[ee.acceptUsername?k.jsx(k.Fragment,{children:k.jsx("input",{required:!0,"data-section":"login",autoComplete:"username",placeholder:`Email | ${e.username}`,name:"username",onChange:r,value:n.value.login.username,type:"text"})}):k.jsx(k.Fragment,{children:k.jsx("input",{required:!0,"data-section":"login",autoComplete:"email",placeholder:"Email",name:"email",onChange:r,value:n.value.login.email,type:"email"})}),k.jsx("input",{required:!0,"data-section":"login",autoComplete:"current-password",placeholder:e.password,name:"password",onChange:r,value:n.value.login.password,type:"password"}),k.jsx("span",{onClick:()=>i.value=!0,className:"forgot-password",children:e.forgotPassword}),k.jsx("button",{className:"email-login",children:e.logIn}),k.jsx("span",{onClick:()=>a.value=!1,className:"form-action-change",children:e.signIn})]}),k.jsxs("form",{className:"form-field",autoComplete:"on","data-section":"signIn",onSubmit:t,children:[k.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:"Email",name:"email",onChange:r,value:n.value.signIn.email,type:"email"}),k.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:`${e.username}`,name:"username",onChange:r,value:n.value.signIn.username,type:"text"}),k.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:e.password,name:"password1",onChange:r,value:n.value.signIn.password1,type:"password"}),k.jsx("input",{required:!0,"data-section":"signIn",autoComplete:"off",placeholder:e.confirm_password,name:"password2",onChange:r,value:n.value.signIn.password2,type:"password"}),k.jsx("button",{className:"email-login",children:e.signIn}),k.jsx("span",{onClick:()=>a.value=!0,className:"form-action-change",children:e.logIn})]})]})})},bd=({alreadyUser:t,language:e,handleSubmitUserAlreadyLogged:r})=>{const n=()=>{Ei(Ge()).finally(()=>t.value=void 0)};return k.jsx(k.Fragment,{children:t.value&&k.jsxs("section",{className:"user-already-logged",children:[k.jsxs("p",{children:[e.continueAs," ",t.value.displayName,t.value.photoURL&&k.jsx("img",{src:t.value.photoURL,alt:"user image"}),k.jsxs("span",{children:[e.loggedWith," ",t.value.providerId]})]}),k.jsxs("div",{className:"user-logged-choice",children:[k.jsx("button",{onClick:()=>{var i;return r(((i=t.value)==null?void 0:i.tokenId)??"")},className:"choice-ok",children:"Ok"}),k.jsx("button",{onClick:n,className:"choice-not",children:e.logOut})]})]})})},_d=({confirmTp:t,handleRadio:e,radioValue:r})=>{const{closeAction:n}=F.useContext(Wt),i=F.useRef(null),a=()=>typeof n=="function"?n(s=>!s):n.value=!n.value;return F.useEffect(()=>{t&&i.current&&i.current.scrollIntoView({behavior:"smooth"})},[t]),k.jsx("section",{children:ee.hasToS&&k.jsxs(k.Fragment,{children:[k.jsxs("label",{className:"login-accept",children:[k.jsx("input",{onChange:e,type:"checkbox",checked:r}),ee.hasToS.label(a)]}),t&&k.jsx("span",{ref:i,className:"notify error",children:ee.hasToS.errorLabel})]})})},La=({error:t})=>{const e=n=>k.jsx(k.Fragment,{children:Object.entries(n).map(([i,a],s)=>k.jsxs("span",{children:[i,": ",a]},s))}),r=(n,i)=>{const a=Yl(n,i);return k.jsx(k.Fragment,{children:typeof i=="string"?i:e(a)})};return k.jsx(k.Fragment,{children:t.message&&k.jsx("span",{autoFocus:!0,className:"notify error",children:ee.firebaseErrorMessages?r(ee.firebaseErrorMessages,t):typeof t.message=="string"?t.message:e(t.message)})})},Fa={user:null,isAuthenticated:!1,expiry:void 0,refresh_token:void 0,token:void 0},Id=L.createSlice({name:"UserSlice",initialState:Fa,reducers:{},extraReducers(t){t.addMatcher(st.endpoints.login.matchFulfilled,(e,r)=>(e={...r.payload,isAuthenticated:!0},e)).addMatcher(st.endpoints.updateLogin.matchFulfilled,(e,r)=>(e={...r.payload,isAuthenticated:!0},e)).addMatcher(st.endpoints.updateLogin.matchRejected,e=>(e=Fa,e))}}),{reducer:wd}=Id,Ed=L.combineReducers({userReducer:wd,[st.reducerPath]:st.reducer}),Td=L.configureStore({reducer:Ed,middleware:t=>t().concat(st.middleware)}),Sd=({isOpen:t,closeAction:e,message:r,authManager:n})=>Pc()?k.jsx(xe.Provider,{store:Td,children:k.jsx(Wt.Provider,{value:{isOpen:t,closeAction:e,message:r,authManager:n},children:k.jsx(gd,{})})}):k.jsx("dialog",{open:!0,children:k.jsx("p",{children:"Error: Missing firebaseConfig in setConfig"})});be.Auth=Sd,be.setConfig=Cc,be.useAuth=ad,Object.defineProperty(be,Symbol.toStringTag,{value:"Module"})});
