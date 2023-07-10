(function(ye,V){typeof exports=="object"&&typeof module<"u"?V(exports,require("react"),require("@preact/signals-react"),require("@reduxjs/toolkit"),require("react-redux")):typeof define=="function"&&define.amd?define(["exports","react","@preact/signals-react","@reduxjs/toolkit","react-redux"],V):(ye=typeof globalThis<"u"?globalThis:ye||self,V(ye.react_auth_base={},ye.React,ye.SignalsReact,ye.ReduxToolkit,ye.ReactRedux))})(this,function(ye,V,He,x,Ne){"use strict";var Er={exports:{}},_t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var In;function Wa(){if(In)return _t;In=1;var t=V,e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(u,o,l){var f,p={},m=null,d=null;l!==void 0&&(m=""+l),o.key!==void 0&&(m=""+o.key),o.ref!==void 0&&(d=o.ref);for(f in o)n.call(o,f)&&!a.hasOwnProperty(f)&&(p[f]=o[f]);if(u&&u.defaultProps)for(f in o=u.defaultProps,o)p[f]===void 0&&(p[f]=o[f]);return{$$typeof:e,type:u,key:m,ref:d,props:p,_owner:i.current}}return _t.Fragment=r,_t.jsx=s,_t.jsxs=s,_t}var It={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var En;function Qa(){return En||(En=1,process.env.NODE_ENV!=="production"&&function(){var t=V,e=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),o=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),d=Symbol.for("react.offscreen"),E=Symbol.iterator,b="@@iterator";function y(c){if(c===null||typeof c!="object")return null;var k=E&&c[E]||c[b];return typeof k=="function"?k:null}var O=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function R(c){{for(var k=arguments.length,N=new Array(k>1?k-1:0),q=1;q<k;q++)N[q-1]=arguments[q];v("error",c,N)}}function v(c,k,N){{var q=O.ReactDebugCurrentFrame,Z=q.getStackAddendum();Z!==""&&(k+="%s",N=N.concat([Z]));var re=N.map(function(G){return String(G)});re.unshift("Warning: "+k),Function.prototype.apply.call(console[c],console,re)}}var _=!1,g=!1,h=!1,I=!1,w=!1,S;S=Symbol.for("react.module.reference");function T(c){return!!(typeof c=="string"||typeof c=="function"||c===n||c===a||w||c===i||c===l||c===f||I||c===d||_||g||h||typeof c=="object"&&c!==null&&(c.$$typeof===m||c.$$typeof===p||c.$$typeof===s||c.$$typeof===u||c.$$typeof===o||c.$$typeof===S||c.getModuleId!==void 0))}function A(c,k,N){var q=c.displayName;if(q)return q;var Z=k.displayName||k.name||"";return Z!==""?N+"("+Z+")":N}function C(c){return c.displayName||"Context"}function P(c){if(c==null)return null;if(typeof c.tag=="number"&&R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof c=="function")return c.displayName||c.name||null;if(typeof c=="string")return c;switch(c){case n:return"Fragment";case r:return"Portal";case a:return"Profiler";case i:return"StrictMode";case l:return"Suspense";case f:return"SuspenseList"}if(typeof c=="object")switch(c.$$typeof){case u:var k=c;return C(k)+".Consumer";case s:var N=c;return C(N._context)+".Provider";case o:return A(c,c.render,"ForwardRef");case p:var q=c.displayName||null;return q!==null?q:P(c.type)||"Memo";case m:{var Z=c,re=Z._payload,G=Z._init;try{return P(G(re))}catch{return null}}}return null}var D=Object.assign,M=0,j,F,U,z,$,W,J;function H(){}H.__reactDisabledLog=!0;function Y(){{if(M===0){j=console.log,F=console.info,U=console.warn,z=console.error,$=console.group,W=console.groupCollapsed,J=console.groupEnd;var c={configurable:!0,enumerable:!0,value:H,writable:!0};Object.defineProperties(console,{info:c,log:c,warn:c,error:c,group:c,groupCollapsed:c,groupEnd:c})}M++}}function Q(){{if(M--,M===0){var c={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:D({},c,{value:j}),info:D({},c,{value:F}),warn:D({},c,{value:U}),error:D({},c,{value:z}),group:D({},c,{value:$}),groupCollapsed:D({},c,{value:W}),groupEnd:D({},c,{value:J})})}M<0&&R("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var X=O.ReactCurrentDispatcher,ie;function pe(c,k,N){{if(ie===void 0)try{throw Error()}catch(Z){var q=Z.stack.trim().match(/\n( *(at )?)/);ie=q&&q[1]||""}return`
`+ie+c}}var be=!1,ve;{var _e=typeof WeakMap=="function"?WeakMap:Map;ve=new _e}function te(c,k){if(!c||be)return"";{var N=ve.get(c);if(N!==void 0)return N}var q;be=!0;var Z=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var re;re=X.current,X.current=null,Y();try{if(k){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(qe){q=qe}Reflect.construct(c,[],G)}else{try{G.call()}catch(qe){q=qe}c.call(G.prototype)}}else{try{throw Error()}catch(qe){q=qe}c()}}catch(qe){if(qe&&q&&typeof qe.stack=="string"){for(var K=qe.stack.split(`
`),fe=q.stack.split(`
`),ue=K.length-1,ce=fe.length-1;ue>=1&&ce>=0&&K[ue]!==fe[ce];)ce--;for(;ue>=1&&ce>=0;ue--,ce--)if(K[ue]!==fe[ce]){if(ue!==1||ce!==1)do if(ue--,ce--,ce<0||K[ue]!==fe[ce]){var Ee=`
`+K[ue].replace(" at new "," at ");return c.displayName&&Ee.includes("<anonymous>")&&(Ee=Ee.replace("<anonymous>",c.displayName)),typeof c=="function"&&ve.set(c,Ee),Ee}while(ue>=1&&ce>=0);break}}}finally{be=!1,X.current=re,Q(),Error.prepareStackTrace=Z}var bt=c?c.displayName||c.name:"",za=bt?pe(bt):"";return typeof c=="function"&&ve.set(c,za),za}function de(c,k,N){return te(c,!1)}function Ge(c){var k=c.prototype;return!!(k&&k.isReactComponent)}function at(c,k,N){if(c==null)return"";if(typeof c=="function")return te(c,Ge(c));if(typeof c=="string")return pe(c);switch(c){case l:return pe("Suspense");case f:return pe("SuspenseList")}if(typeof c=="object")switch(c.$$typeof){case o:return de(c.render);case p:return at(c.type,k,N);case m:{var q=c,Z=q._payload,re=q._init;try{return at(re(Z),k,N)}catch{}}}return""}var Je=Object.prototype.hasOwnProperty,st={},mt=O.ReactDebugCurrentFrame;function Ye(c){if(c){var k=c._owner,N=at(c.type,c._source,k?k.type:null);mt.setExtraStackFrame(N)}else mt.setExtraStackFrame(null)}function Ir(c,k,N,q,Z){{var re=Function.call.bind(Je);for(var G in c)if(re(c,G)){var K=void 0;try{if(typeof c[G]!="function"){var fe=Error((q||"React class")+": "+N+" type `"+G+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof c[G]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw fe.name="Invariant Violation",fe}K=c[G](k,G,q,N,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(ue){K=ue}K&&!(K instanceof Error)&&(Ye(Z),R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",q||"React class",N,G,typeof K),Ye(null)),K instanceof Error&&!(K.message in st)&&(st[K.message]=!0,Ye(Z),R("Failed %s type: %s",N,K.message),Ye(null))}}}var Ie=Array.isArray;function ge(c){return Ie(c)}function cd(c){{var k=typeof Symbol=="function"&&Symbol.toStringTag,N=k&&c[Symbol.toStringTag]||c.constructor.name||"Object";return N}}function ld(c){try{return Ma(c),!1}catch{return!0}}function Ma(c){return""+c}function xa(c){if(ld(c))return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",cd(c)),Ma(c)}var Ht=O.ReactCurrentOwner,dd={key:!0,ref:!0,__self:!0,__source:!0},La,Fa,mn;mn={};function fd(c){if(Je.call(c,"ref")){var k=Object.getOwnPropertyDescriptor(c,"ref").get;if(k&&k.isReactWarning)return!1}return c.ref!==void 0}function hd(c){if(Je.call(c,"key")){var k=Object.getOwnPropertyDescriptor(c,"key").get;if(k&&k.isReactWarning)return!1}return c.key!==void 0}function pd(c,k){if(typeof c.ref=="string"&&Ht.current&&k&&Ht.current.stateNode!==k){var N=P(Ht.current.type);mn[N]||(R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',P(Ht.current.type),c.ref),mn[N]=!0)}}function vd(c,k){{var N=function(){La||(La=!0,R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",k))};N.isReactWarning=!0,Object.defineProperty(c,"key",{get:N,configurable:!0})}}function gd(c,k){{var N=function(){Fa||(Fa=!0,R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",k))};N.isReactWarning=!0,Object.defineProperty(c,"ref",{get:N,configurable:!0})}}var md=function(c,k,N,q,Z,re,G){var K={$$typeof:e,type:c,key:k,ref:N,props:G,_owner:re};return K._store={},Object.defineProperty(K._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(K,"_self",{configurable:!1,enumerable:!1,writable:!1,value:q}),Object.defineProperty(K,"_source",{configurable:!1,enumerable:!1,writable:!1,value:Z}),Object.freeze&&(Object.freeze(K.props),Object.freeze(K)),K};function yd(c,k,N,q,Z){{var re,G={},K=null,fe=null;N!==void 0&&(xa(N),K=""+N),hd(k)&&(xa(k.key),K=""+k.key),fd(k)&&(fe=k.ref,pd(k,Z));for(re in k)Je.call(k,re)&&!dd.hasOwnProperty(re)&&(G[re]=k[re]);if(c&&c.defaultProps){var ue=c.defaultProps;for(re in ue)G[re]===void 0&&(G[re]=ue[re])}if(K||fe){var ce=typeof c=="function"?c.displayName||c.name||"Unknown":c;K&&vd(G,ce),fe&&gd(G,ce)}return md(c,K,fe,Z,q,Ht.current,G)}}var yn=O.ReactCurrentOwner,Ua=O.ReactDebugCurrentFrame;function yt(c){if(c){var k=c._owner,N=at(c.type,c._source,k?k.type:null);Ua.setExtraStackFrame(N)}else Ua.setExtraStackFrame(null)}var bn;bn=!1;function _n(c){return typeof c=="object"&&c!==null&&c.$$typeof===e}function ja(){{if(yn.current){var c=P(yn.current.type);if(c)return`

Check the render method of \``+c+"`."}return""}}function bd(c){{if(c!==void 0){var k=c.fileName.replace(/^.*[\\\/]/,""),N=c.lineNumber;return`

Check your code at `+k+":"+N+"."}return""}}var Ba={};function _d(c){{var k=ja();if(!k){var N=typeof c=="string"?c:c.displayName||c.name;N&&(k=`

Check the top-level render call using <`+N+">.")}return k}}function qa(c,k){{if(!c._store||c._store.validated||c.key!=null)return;c._store.validated=!0;var N=_d(k);if(Ba[N])return;Ba[N]=!0;var q="";c&&c._owner&&c._owner!==yn.current&&(q=" It was passed a child from "+P(c._owner.type)+"."),yt(c),R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',N,q),yt(null)}}function Ha(c,k){{if(typeof c!="object")return;if(ge(c))for(var N=0;N<c.length;N++){var q=c[N];_n(q)&&qa(q,k)}else if(_n(c))c._store&&(c._store.validated=!0);else if(c){var Z=y(c);if(typeof Z=="function"&&Z!==c.entries)for(var re=Z.call(c),G;!(G=re.next()).done;)_n(G.value)&&qa(G.value,k)}}}function Id(c){{var k=c.type;if(k==null||typeof k=="string")return;var N;if(typeof k=="function")N=k.propTypes;else if(typeof k=="object"&&(k.$$typeof===o||k.$$typeof===p))N=k.propTypes;else return;if(N){var q=P(k);Ir(N,c.props,"prop",q,c)}else if(k.PropTypes!==void 0&&!bn){bn=!0;var Z=P(k);R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",Z||"Unknown")}typeof k.getDefaultProps=="function"&&!k.getDefaultProps.isReactClassApproved&&R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ed(c){{for(var k=Object.keys(c.props),N=0;N<k.length;N++){var q=k[N];if(q!=="children"&&q!=="key"){yt(c),R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",q),yt(null);break}}c.ref!==null&&(yt(c),R("Invalid attribute `ref` supplied to `React.Fragment`."),yt(null))}}function Va(c,k,N,q,Z,re){{var G=T(c);if(!G){var K="";(c===void 0||typeof c=="object"&&c!==null&&Object.keys(c).length===0)&&(K+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var fe=bd(Z);fe?K+=fe:K+=ja();var ue;c===null?ue="null":ge(c)?ue="array":c!==void 0&&c.$$typeof===e?(ue="<"+(P(c.type)||"Unknown")+" />",K=" Did you accidentally export a JSX literal instead of a component?"):ue=typeof c,R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",ue,K)}var ce=yd(c,k,N,Z,re);if(ce==null)return ce;if(G){var Ee=k.children;if(Ee!==void 0)if(q)if(ge(Ee)){for(var bt=0;bt<Ee.length;bt++)Ha(Ee[bt],c);Object.freeze&&Object.freeze(Ee)}else R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ha(Ee,c)}return c===n?Ed(ce):Id(ce),ce}}function Td(c,k,N){return Va(c,k,N,!0)}function wd(c,k,N){return Va(c,k,N,!1)}var Sd=wd,Rd=Td;It.Fragment=n,It.jsx=Sd,It.jsxs=Rd}()),It}process.env.NODE_ENV==="production"?Er.exports=Wa():Er.exports=Qa();var L=Er.exports;const Od="",Ka=({children:t,closeAction:e,title:r,message:n})=>L.jsx("div",{className:"modal-container",children:L.jsxs("div",{className:"modal-data",children:[e&&L.jsx("button",{onClick:()=>typeof e=="function"?e(i=>!i):e.value=!e.value,className:"modal-close",children:"X"}),L.jsx("div",{className:"space modal-title",children:L.jsx("label",{children:r})}),L.jsx("div",{className:"space modal-message",children:typeof n=="string"?L.jsx("label",{children:n}):n}),L.jsx("div",{className:"space modal-footer",children:t})]})}),Ad="",$a=()=>L.jsx("div",{className:"loader-container",children:L.jsxs("div",{className:"loader-box",children:[L.jsx("div",{className:"load blue"}),L.jsx("div",{className:"load red"}),L.jsx("div",{className:"load orange"}),L.jsx("div",{className:"load yellow"}),L.jsx("div",{className:"load green"})]})}),Cd="",Ga=(t,e)=>{var r;return((r=t.find(n=>n.code==="*"?!0:n.code===e.code))==null?void 0:r.message)??e.message},Tn="IS_GOOGLE",wn="IS_FACEBOOK",Sn="IS_TWITTER",Rn="IS_GITHUB",On="IS_MICROSOFT",Ja=()=>L.jsx("svg",{width:"98",height:"96",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 98 96",children:L.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",fill:"#fff"})}),Ya=()=>L.jsx("svg",{version:"1.1",id:"Logo",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 248 204",xmlSpace:"preserve",children:L.jsx("g",{id:"Logo_1_",children:L.jsx("path",{id:"white_background",fill:"#FFFFFF",d:`M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
                    C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
                    c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
                    c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
                    c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
                    c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z`})})}),Xa=()=>L.jsxs("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 40 40",xmlSpace:"preserve",children:[L.jsx("path",{fill:"#1877F2",d:"M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z"}),L.jsx("path",{fill:"#FFFFFF",d:`M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20
            h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z`})]}),Za=[{method:"google",constName:Tn,name:"Google",className:"google-btn"},{method:"facebook",constName:wn,name:"Facebook",className:"facebook-btn",icon:L.jsx(Xa,{})},{method:"twitter",constName:Sn,name:"Twitter",className:"twitter-btn",icon:L.jsx(Ya,{})},{method:"github",constName:Rn,name:"GitHub",className:"github-btn",icon:L.jsx(Ja,{})},{method:"microsoft",constName:On,name:"Microsoft",className:"microsoft-btn"}],es=t=>Za.filter(e=>t.find(r=>e.method===r)),An={firebaseConfig:{},endpoint:"http://127.0.0.1:8000/api/auth/",keywoard:"TSESSION",refreshTokenHeader:"Authorization",acceptUsername:!1,bodyAsBase64:!1,signInMethods:["google"]};let se={...An};const ts=t=>{se={...An,...t}},rs=()=>{const t=He.useSignal(void 0),e=He.useSignal(void 0);let r;const n=V.useCallback(i=>i(t,r,e),[]);return V.useEffect(()=>{},[r]),{user:t.value,updateError:e.value,authManager:n}};/**
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
 */const Cn=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},ns=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[r++];e[n++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[r++],s=t[r++],u=t[r++],o=((i&7)<<18|(a&63)<<12|(s&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(o>>10)),e[n++]=String.fromCharCode(56320+(o&1023))}else{const a=t[r++],s=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(a&63)<<6|s&63)}}return e.join("")},Pn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const a=t[i],s=i+1<t.length,u=s?t[i+1]:0,o=i+2<t.length,l=o?t[i+2]:0,f=a>>2,p=(a&3)<<4|u>>4;let m=(u&15)<<2|l>>6,d=l&63;o||(d=64,s||(m=64)),n.push(r[f],r[p],r[m],r[d])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ns(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const a=r[t.charAt(i++)],u=i<t.length?r[t.charAt(i)]:0;++i;const l=i<t.length?r[t.charAt(i)]:64;++i;const p=i<t.length?r[t.charAt(i)]:64;if(++i,a==null||u==null||l==null||p==null)throw new is;const m=a<<2|u>>4;if(n.push(m),l!==64){const d=u<<4&240|l>>2;if(n.push(d),p!==64){const E=l<<6&192|p;n.push(E)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class is extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const as=function(t){const e=Cn(t);return Pn.encodeByteArray(e,!0)},kn=function(t){return as(t).replace(/\./g,"")},Dn=function(t){try{return Pn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ss(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const os=()=>ss().__FIREBASE_DEFAULTS__,us=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cs=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dn(t[1]);return e&&JSON.parse(e)},Tr=()=>{try{return os()||us()||cs()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ls=t=>{var e,r;return(r=(e=Tr())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},Nn=()=>{var t;return(t=Tr())===null||t===void 0?void 0:t.config},Mn=t=>{var e;return(e=Tr())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ds{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function hs(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ps(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vs(){const t=le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gs(){try{return typeof indexedDB=="object"}catch{return!1}}function ms(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(r){e(r)}})}/**
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
 */const ys="FirebaseError";class Ve extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=ys,Object.setPrototypeOf(this,Ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Et.prototype.create)}}class Et{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,a=this.errors[e],s=a?bs(a,n):"Error",u=`${this.serviceName}: ${s} (${i}).`;return new Ve(i,u,n)}}function bs(t,e){return t.replace(_s,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const _s=/\{\$([^}]+)}/g;function Is(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vt(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const a=t[i],s=e[i];if(xn(a)&&xn(s)){if(!Vt(a,s))return!1}else if(a!==s)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function xn(t){return t!==null&&typeof t=="object"}/**
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
 */function Tt(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Es(t,e){const r=new Ts(t,e);return r.subscribe.bind(r)}class Ts{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");ws(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=wr),i.error===void 0&&(i.error=wr),i.complete===void 0&&(i.complete=wr);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ws(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function wr(){}/**
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
 */function ot(t){return t&&t._delegate?t._delegate:t}class ut{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xe="[DEFAULT]";/**
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
 */class Ss{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new ds;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Os(e))try{this.getOrInitializeService({instanceIdentifier:Xe})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const a=this.getOrInitializeService({instanceIdentifier:i});n.resolve(a)}catch{}}}}clearInstance(e=Xe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xe){return this.instances.has(e)}getOptions(e=Xe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[a,s]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);n===u&&s.resolve(i)}return i}onInit(e,r){var n;const i=this.normalizeInstanceIdentifier(r),a=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;a.add(e),this.onInitCallbacks.set(i,a);const s=this.instances.get(i);return s&&e(s,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Rs(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Xe){return this.component?this.component.multipleInstances?e:Xe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rs(t){return t===Xe?void 0:t}function Os(t){return t.instantiationMode==="EAGER"}/**
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
 */class As{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new Ss(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Cs={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Ps=ee.INFO,ks={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Ds=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=ks[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ln{constructor(e){this.name=e,this._logLevel=Ps,this._logHandler=Ds,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cs[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Ns=(t,e)=>e.some(r=>t instanceof r);let Fn,Un;function Ms(){return Fn||(Fn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xs(){return Un||(Un=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jn=new WeakMap,Sr=new WeakMap,Bn=new WeakMap,Rr=new WeakMap,Or=new WeakMap;function Ls(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",s)},a=()=>{r(ze(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",s)});return e.then(r=>{r instanceof IDBCursor&&jn.set(r,t)}).catch(()=>{}),Or.set(e,t),e}function Fs(t){if(Sr.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",s),t.removeEventListener("abort",s)},a=()=>{r(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",s),t.addEventListener("abort",s)});Sr.set(t,e)}let Ar={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return Sr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bn.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ze(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Us(t){Ar=t(Ar)}function js(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(Cr(this),e,...r);return Bn.set(n,e.sort?e.sort():[e]),ze(n)}:xs().includes(t)?function(...e){return t.apply(Cr(this),e),ze(jn.get(this))}:function(...e){return ze(t.apply(Cr(this),e))}}function Bs(t){return typeof t=="function"?js(t):(t instanceof IDBTransaction&&Fs(t),Ns(t,Ms())?new Proxy(t,Ar):t)}function ze(t){if(t instanceof IDBRequest)return Ls(t);if(Rr.has(t))return Rr.get(t);const e=Bs(t);return e!==t&&(Rr.set(t,e),Or.set(e,t)),e}const Cr=t=>Or.get(t);function qs(t,e,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){const s=indexedDB.open(t,e),u=ze(s);return n&&s.addEventListener("upgradeneeded",o=>{n(ze(s.result),o.oldVersion,o.newVersion,ze(s.transaction),o)}),r&&s.addEventListener("blocked",o=>r(o.oldVersion,o.newVersion,o)),u.then(o=>{a&&o.addEventListener("close",()=>a()),i&&o.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),u}const Hs=["get","getKey","getAll","getAllKeys","count"],Vs=["put","add","delete","clear"],Pr=new Map;function qn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pr.get(e))return Pr.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=Vs.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Hs.includes(r)))return;const a=async function(s,...u){const o=this.transaction(s,i?"readwrite":"readonly");let l=o.store;return n&&(l=l.index(u.shift())),(await Promise.all([l[r](...u),i&&o.done]))[0]};return Pr.set(e,a),a}Us(t=>({...t,get:(e,r,n)=>qn(e,r)||t.get(e,r,n),has:(e,r)=>!!qn(e,r)||t.has(e,r)}));/**
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
 */class zs{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Ws(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function Ws(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kr="@firebase/app",Hn="0.9.13";/**
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
 */const Ze=new Ln("@firebase/app"),Qs="@firebase/app-compat",Ks="@firebase/analytics-compat",$s="@firebase/analytics",Gs="@firebase/app-check-compat",Js="@firebase/app-check",Ys="@firebase/auth",Xs="@firebase/auth-compat",Zs="@firebase/database",eo="@firebase/database-compat",to="@firebase/functions",ro="@firebase/functions-compat",no="@firebase/installations",io="@firebase/installations-compat",ao="@firebase/messaging",so="@firebase/messaging-compat",oo="@firebase/performance",uo="@firebase/performance-compat",co="@firebase/remote-config",lo="@firebase/remote-config-compat",fo="@firebase/storage",ho="@firebase/storage-compat",po="@firebase/firestore",vo="@firebase/firestore-compat",go="firebase",mo="9.23.0";/**
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
 */const Dr="[DEFAULT]",yo={[kr]:"fire-core",[Qs]:"fire-core-compat",[$s]:"fire-analytics",[Ks]:"fire-analytics-compat",[Js]:"fire-app-check",[Gs]:"fire-app-check-compat",[Ys]:"fire-auth",[Xs]:"fire-auth-compat",[Zs]:"fire-rtdb",[eo]:"fire-rtdb-compat",[to]:"fire-fn",[ro]:"fire-fn-compat",[no]:"fire-iid",[io]:"fire-iid-compat",[ao]:"fire-fcm",[so]:"fire-fcm-compat",[oo]:"fire-perf",[uo]:"fire-perf-compat",[co]:"fire-rc",[lo]:"fire-rc-compat",[fo]:"fire-gcs",[ho]:"fire-gcs-compat",[po]:"fire-fst",[vo]:"fire-fst-compat","fire-js":"fire-js",[go]:"fire-js-all"};/**
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
 */const zt=new Map,Nr=new Map;function bo(t,e){try{t.container.addComponent(e)}catch(r){Ze.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function wt(t){const e=t.name;if(Nr.has(e))return Ze.debug(`There were multiple attempts to register component ${e}.`),!1;Nr.set(e,t);for(const r of zt.values())bo(r,t);return!0}function Vn(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const _o={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},We=new Et("app","Firebase",_o);/**
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
 */class Io{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw We.create("app-deleted",{appName:this._name})}}/**
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
 */const St=mo;function zn(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Dr,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw We.create("bad-app-name",{appName:String(i)});if(r||(r=Nn()),!r)throw We.create("no-options");const a=zt.get(i);if(a){if(Vt(r,a.options)&&Vt(n,a.config))return a;throw We.create("duplicate-app",{appName:i})}const s=new As(i);for(const o of Nr.values())s.addComponent(o);const u=new Io(r,n,s);return zt.set(i,u),u}function Eo(t=Dr){const e=zt.get(t);if(!e&&t===Dr&&Nn())return zn();if(!e)throw We.create("no-app",{appName:t});return e}function ct(t,e,r){var n;let i=(n=yo[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const a=i.match(/\s|\//),s=e.match(/\s|\//);if(a||s){const u=[`Unable to register library "${i}" with version "${e}":`];a&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&u.push("and"),s&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ze.warn(u.join(" "));return}wt(new ut(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const To="firebase-heartbeat-database",wo=1,Rt="firebase-heartbeat-store";let Mr=null;function Wn(){return Mr||(Mr=qs(To,wo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rt)}}}).catch(t=>{throw We.create("idb-open",{originalErrorMessage:t.message})})),Mr}async function So(t){try{return await(await Wn()).transaction(Rt).objectStore(Rt).get(Kn(t))}catch(e){if(e instanceof Ve)Ze.warn(e.message);else{const r=We.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ze.warn(r.message)}}}async function Qn(t,e){try{const n=(await Wn()).transaction(Rt,"readwrite");await n.objectStore(Rt).put(e,Kn(t)),await n.done}catch(r){if(r instanceof Ve)Ze.warn(r.message);else{const n=We.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Ze.warn(n.message)}}}function Kn(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ro=1024,Oo=30*24*60*60*1e3;class Ao{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Po(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=$n();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=Oo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$n(),{heartbeatsToSend:r,unsentEntries:n}=Co(this._heartbeatsCache.heartbeats),i=kn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function $n(){return new Date().toISOString().substring(0,10)}function Co(t,e=Ro){const r=[];let n=t.slice();for(const i of t){const a=r.find(s=>s.agent===i.agent);if(a){if(a.dates.push(i.date),Gn(r)>e){a.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Gn(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class Po{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gs()?ms().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await So(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qn(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qn(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gn(t){return kn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ko(t){wt(new ut("platform-logger",e=>new zs(e),"PRIVATE")),wt(new ut("heartbeat",e=>new Ao(e),"PRIVATE")),ct(kr,Hn,t),ct(kr,Hn,"esm2017"),ct("fire-js","")}ko("");function xr(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}typeof SuppressedError=="function"&&SuppressedError;function Jn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Do=Jn,Yn=new Et("auth","Firebase",Jn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new Ln("@firebase/auth");function No(t,...e){Wt.logLevel<=ee.WARN&&Wt.warn(`Auth (${St}): ${t}`,...e)}function Qt(t,...e){Wt.logLevel<=ee.ERROR&&Wt.error(`Auth (${St}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t,...e){throw Lr(t,...e)}function we(t,...e){return Lr(t,...e)}function Xn(t,e,r){const n=Object.assign(Object.assign({},Do()),{[e]:r});return new Et("auth","Firebase",n).create(e,{appName:t.name})}function Mo(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&Te(t,"argument-error"),Xn(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lr(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return Yn.create(t,...e)}function B(t,e,...r){if(!t)throw Lr(e,...r)}function Me(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qt(e),new Error(e)}function xe(t,e){t||Me(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xo(){return Zn()==="http:"||Zn()==="https:"}function Zn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xo()||hs()||"connection"in navigator)?navigator.onLine:!0}function Fo(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,r){this.shortDelay=e,this.longDelay=r,xe(r>e,"Short delay should be less than long delay!"),this.isMobile=fs()||ps()}get(){return Lo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t,e){xe(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Me("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Me("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Me("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new Ot(3e4,6e4);function ti(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function At(t,e,r,n,i={}){return ri(t,i,async()=>{let a={},s={};n&&(e==="GET"?s=n:a={body:JSON.stringify(n)});const u=Tt(Object.assign({key:t.config.apiKey},s)).slice(1),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode),ei.fetch()(ni(t,t.config.apiHost,r,u),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},a))})}async function ri(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},Uo),e);try{const i=new qo(t),a=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const s=await a.json();if("needConfirmation"in s)throw Kt(t,"account-exists-with-different-credential",s);if(a.ok&&!("errorMessage"in s))return s;{const u=a.ok?s.errorMessage:s.error.message,[o,l]=u.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kt(t,"credential-already-in-use",s);if(o==="EMAIL_EXISTS")throw Kt(t,"email-already-in-use",s);if(o==="USER_DISABLED")throw Kt(t,"user-disabled",s);const f=n[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Xn(t,f,l);Te(t,f)}}catch(i){if(i instanceof Ve)throw i;Te(t,"network-request-failed",{message:String(i)})}}async function Bo(t,e,r,n,i={}){const a=await At(t,e,r,n,i);return"mfaPendingCredential"in a&&Te(t,"multi-factor-auth-required",{_serverResponse:a}),a}function ni(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?Ur(t.config,i):`${t.config.apiScheme}://${i}`}class qo{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(we(this.auth,"network-request-failed")),jo.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kt(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=we(t,e,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(t,e){return At(t,"POST","/v1/accounts:delete",e)}async function Vo(t,e){return At(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zo(t,e=!1){const r=ot(t),n=await r.getIdToken(e),i=Br(n);B(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,s=a==null?void 0:a.sign_in_provider;return{claims:i,token:n,authTime:Ct(jr(i.auth_time)),issuedAtTime:Ct(jr(i.iat)),expirationTime:Ct(jr(i.exp)),signInProvider:s||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function jr(t){return Number(t)*1e3}function Br(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return Qt("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dn(r);return i?JSON.parse(i):(Qt("Failed to decode base64 JWT payload"),null)}catch(i){return Qt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wo(t){const e=Br(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof Ve&&Qo(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function Qo({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ct(this.lastLoginAt),this.creationTime=Ct(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $t(t){var e;const r=t.auth,n=await t.getIdToken(),i=await Pt(t,Vo(r,{idToken:n}));B(i==null?void 0:i.users.length,r,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const s=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Jo(a.providerUserInfo):[],u=Go(t.providerData,s),o=t.isAnonymous,l=!(t.email&&a.passwordHash)&&!(u!=null&&u.length),f=o?l:!1,p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new ii(a.createdAt,a.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function $o(t){const e=ot(t);await $t(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Go(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Jo(t){return t.map(e=>{var{providerId:r}=e,n=xr(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(t,e){const r=await ri(t,{},async()=>{const n=Tt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,s=ni(t,i,"/v1/token",`key=${a}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",ei.fetch()(s,{method:"POST",headers:u,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:a}=await Yo(e,r);this.updateTokensAndExpiration(n,i,Number(a))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:a}=r,s=new kt;return n&&(B(typeof n=="string","internal-error",{appName:e}),s.refreshToken=n),i&&(B(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),a&&(B(typeof a=="number","internal-error",{appName:e}),s.expirationTime=a),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kt,this.toJSON())}_performRefresh(){return Me("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class et{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,a=xr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ko(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ii(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const r=await Pt(this,this.stsTokenManager.getToken(this.auth,e));return B(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return zo(this,e)}reload(){return $o(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await $t(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pt(this,Ho(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,a,s,u,o,l,f;const p=(n=r.displayName)!==null&&n!==void 0?n:void 0,m=(i=r.email)!==null&&i!==void 0?i:void 0,d=(a=r.phoneNumber)!==null&&a!==void 0?a:void 0,E=(s=r.photoURL)!==null&&s!==void 0?s:void 0,b=(u=r.tenantId)!==null&&u!==void 0?u:void 0,y=(o=r._redirectEventId)!==null&&o!==void 0?o:void 0,O=(l=r.createdAt)!==null&&l!==void 0?l:void 0,R=(f=r.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:v,emailVerified:_,isAnonymous:g,providerData:h,stsTokenManager:I}=r;B(v&&I,e,"internal-error");const w=kt.fromJSON(this.name,I);B(typeof v=="string",e,"internal-error"),Qe(p,e.name),Qe(m,e.name),B(typeof _=="boolean",e,"internal-error"),B(typeof g=="boolean",e,"internal-error"),Qe(d,e.name),Qe(E,e.name),Qe(b,e.name),Qe(y,e.name),Qe(O,e.name),Qe(R,e.name);const S=new et({uid:v,auth:e,email:m,emailVerified:_,displayName:p,isAnonymous:g,photoURL:E,phoneNumber:d,tenantId:b,stsTokenManager:w,createdAt:O,lastLoginAt:R});return h&&Array.isArray(h)&&(S.providerData=h.map(T=>Object.assign({},T))),y&&(S._redirectEventId=y),S}static async _fromIdTokenResponse(e,r,n=!1){const i=new kt;i.updateFromServerResponse(r);const a=new et({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await $t(a),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new Map;function Le(t){xe(t instanceof Function,"Expected a class definition");let e=ai.get(t);return e?(xe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ai.set(t,e),e)}/**
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
 */class si{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}si.type="NONE";const oi=si;/**
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
 */function Gt(t,e,r){return`firebase:${t}:${e}:${r}`}class lt{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:a}=this.auth;this.fullUserKey=Gt(this.userKey,i.apiKey,a),this.fullPersistenceKey=Gt("persistence",i.apiKey,a),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new lt(Le(oi),e,n);const i=(await Promise.all(r.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let a=i[0]||Le(oi);const s=Gt(n,e.config.apiKey,e.name);let u=null;for(const l of r)try{const f=await l._get(s);if(f){const p=et._fromJSON(e,f);l!==a&&(u=p),a=l;break}}catch{}const o=i.filter(l=>l._shouldAllowMigration);return!a._shouldAllowMigration||!o.length?new lt(a,e,n):(a=o[0],u&&await a._set(s,u.toJSON()),await Promise.all(r.map(async l=>{if(l!==a)try{await l._remove(s)}catch{}})),new lt(a,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(di(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ci(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hi(e))return"Blackberry";if(pi(e))return"Webos";if(qr(e))return"Safari";if((e.includes("chrome/")||li(e))&&!e.includes("edge/"))return"Chrome";if(fi(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function ci(t=le()){return/firefox\//i.test(t)}function qr(t=le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function li(t=le()){return/crios\//i.test(t)}function di(t=le()){return/iemobile/i.test(t)}function fi(t=le()){return/android/i.test(t)}function hi(t=le()){return/blackberry/i.test(t)}function pi(t=le()){return/webos/i.test(t)}function Jt(t=le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xo(t=le()){var e;return Jt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zo(){return vs()&&document.documentMode===10}function vi(t=le()){return Jt(t)||fi(t)||pi(t)||hi(t)||/windows phone/i.test(t)||di(t)}function eu(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t,e=[]){let r;switch(t){case"Browser":r=ui(le());break;case"Worker":r=`${ui(le())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${St}/${n}`}async function mi(t,e){return At(t,"GET","/v2/recaptchaConfig",ti(t,e))}function yi(t){return t!==void 0&&t.enterprise!==void 0}class bi{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(r=>r.provider==="EMAIL_PASSWORD_PROVIDER"&&r.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _i(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const a=we("internal-error");a.customData=i,r(a)},n.type="text/javascript",n.charset="UTF-8",tu().appendChild(n)})}function ru(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const nu="https://www.google.com/recaptcha/enterprise.js?render=",iu="recaptcha-enterprise",au="NO_RECAPTCHA";class su{constructor(e){this.type=iu,this.auth=Dt(e)}async verify(e="verify",r=!1){async function n(a){if(!r){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(s,u)=>{mi(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const l=new bi(o);return a.tenantId==null?a._agentRecaptchaConfig=l:a._tenantRecaptchaConfigs[a.tenantId]=l,s(l.siteKey)}}).catch(o=>{u(o)})})}function i(a,s,u){const o=window.grecaptcha;yi(o)?o.enterprise.ready(()=>{o.enterprise.execute(a,{action:e}).then(l=>{s(l)}).catch(()=>{s(au)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,s)=>{n(this.auth).then(u=>{if(!r&&yi(window.grecaptcha))i(u,a,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}_i(nu+u).then(()=>{i(u,a,s)}).catch(o=>{s(o)})}}).catch(u=>{s(u)})})}}/**
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
 */class ou{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=a=>new Promise((s,u)=>{try{const o=e(a);s(o)}catch(o){u(o)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,r,n,i){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ii(this),this.idTokenSubscription=new Ii(this),this.beforeStateQueue=new ou(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Le(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await lt.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var r;const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,u=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===u)&&(o!=null&&o.user)&&(i=o.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await $t(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fo()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?ot(e):null;return r&&B(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Le(e))})}async initializeRecaptchaConfig(){const e=await mi(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new bi(e);this.tenantId==null?this._agentRecaptchaConfig=r:this._tenantRecaptchaConfigs[this.tenantId]=r,r.emailPasswordEnabled&&new su(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Et("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Le(e)||this._popupRedirectResolver;B(r,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[Le(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const a=typeof r=="function"?r:r.next.bind(r),s=this._isInitialized?Promise.resolve():this._initializationPromise;return B(s,this,"internal-error"),s.then(()=>a(this.currentUser)),typeof r=="function"?e.addObserver(r,n,i):e.addObserver(r)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&No(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function Dt(t){return ot(t)}class Ii{constructor(e){this.auth=e,this.observer=null,this.addObserver=Es(r=>this.observer=r)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t,e){const r=Vn(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),a=r.getOptions();if(Vt(a,e??{}))return i;Te(i,"already-initialized")}return r.initialize({options:e})}function lu(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Le);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function du(t,e,r){const n=Dt(t);B(n._canInitEmulator,n,"emulator-config-failed"),B(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(r!=null&&r.disableWarnings),a=Ei(e),{host:s,port:u}=fu(e),o=u===null?"":`:${u}`;n.config.emulator={url:`${a}//${s}${o}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||hu()}function Ei(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fu(t){const e=Ei(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const a=i[1];return{host:a,port:Ti(n.substr(a.length+1))}}else{const[a,s]=n.split(":");return{host:a,port:Ti(s)}}}function Ti(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hu(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return Me("not implemented")}_getIdTokenResponse(e){return Me("not implemented")}_linkToIdToken(e,r){return Me("not implemented")}_getReauthenticationResolver(e){return Me("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(t,e){return Bo(t,"POST","/v1/accounts:signInWithIdp",ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="http://localhost";class Fe extends wi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new Fe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):Te("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,a=xr(r,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Fe(n,i);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}_getIdTokenResponse(e){const r=this.buildRequest();return dt(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,dt(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,dt(e,r)}buildRequest(){const e={requestUri:pu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Tt(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ft extends Hr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ht extends ft{static credentialFromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;return B("providerId"in r&&"signInMethod"in r,"argument-error"),Fe._fromParams(r)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return B(e.idToken||e.accessToken,"argument-error"),Fe._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ht.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ht.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:a,nonce:s,providerId:u}=e;if(!n&&!i&&!r&&!a||!u)return null;try{return new ht(u)._credential({idToken:r,accessToken:n,nonce:s,pendingToken:a})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends ft{constructor(){super("facebook.com")}static credential(e){return Fe._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Se.credential(e.oauthAccessToken)}catch{return null}}}Se.FACEBOOK_SIGN_IN_METHOD="facebook.com",Se.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends ft{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return Fe._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return Re.credential(r,n)}catch{return null}}}Re.GOOGLE_SIGN_IN_METHOD="google.com",Re.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends ft{constructor(){super("github.com")}static credential(e){return Fe._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Oe.credential(e.oauthAccessToken)}catch{return null}}}Oe.GITHUB_SIGN_IN_METHOD="github.com",Oe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends ft{constructor(){super("twitter.com")}static credential(e,r){return Fe._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return Ae.credential(r,n)}catch{return null}}}Ae.TWITTER_SIGN_IN_METHOD="twitter.com",Ae.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const a=await et._fromIdTokenResponse(e,n,i),s=Si(n);return new pt({user:a,providerId:s,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=Si(n);return new pt({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function Si(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Ve{constructor(e,r,n,i){var a;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Yt.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new Yt(e,r,n,i)}}function Ri(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Yt._fromErrorAndOperation(t,a,e,n):a})}async function vu(t,e,r=!1){const n=await Pt(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return pt._forOperation(t,"link",n)}/**
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
 */async function gu(t,e,r=!1){const{auth:n}=t,i="reauthenticate";try{const a=await Pt(t,Ri(n,i,e,t),r);B(a.idToken,n,"internal-error");const s=Br(a.idToken);B(s,n,"internal-error");const{sub:u}=s;return B(t.uid===u,n,"user-mismatch"),pt._forOperation(t,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Te(n,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(t,e,r=!1){const n="signIn",i=await Ri(t,n,e),a=await pt._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(a.user),a}function yu(t,e,r,n){return ot(t).onIdTokenChanged(e,r,n)}function bu(t,e,r){return ot(t).beforeAuthStateChanged(e,r)}const Xt="__sak";/**
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
 */class Oi{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Xt,"1"),this.storage.removeItem(Xt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(){const t=le();return qr(t)||Jt(t)}const Iu=1e3,Eu=10;class Ai extends Oi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_u()&&eu(),this.fallbackToPolling=vi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((s,u,o)=>{this.notifyListeners(s,o)});return}const n=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!r)return}const i=()=>{const s=this.storage.getItem(n);!r&&this.localCache[n]===s||this.notifyListeners(n,s)},a=this.storage.getItem(n);Zo()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Eu):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},Iu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ai.type="LOCAL";const Tu=Ai;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Oi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}Ci.type="SESSION";const Pi=Ci;/**
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
 */function wu(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class Zt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new Zt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:a}=r.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const u=Array.from(s).map(async l=>l(r.origin,a)),o=await wu(u);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:o})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class Su{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,s;return new Promise((u,o)=>{const l=Vr("",20);i.port1.start();const f=setTimeout(()=>{o(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===l)switch(m.data.status){case"ack":clearTimeout(f),a=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(m.data.response);break;default:clearTimeout(f),clearTimeout(a),o(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:r},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return window}function Ru(t){Ce().location.href=t}/**
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
 */function ki(){return typeof Ce().WorkerGlobalScope<"u"&&typeof Ce().importScripts=="function"}async function Ou(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Au(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Cu(){return ki()?self:null}/**
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
 */const Di="firebaseLocalStorageDb",Pu=1,er="firebaseLocalStorage",Ni="fbase_key";class Nt{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function tr(t,e){return t.transaction([er],e?"readwrite":"readonly").objectStore(er)}function ku(){const t=indexedDB.deleteDatabase(Di);return new Nt(t).toPromise()}function zr(){const t=indexedDB.open(Di,Pu);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(er,{keyPath:Ni})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(er)?e(n):(n.close(),await ku(),e(await zr()))})})}async function Mi(t,e,r){const n=tr(t,!0).put({[Ni]:e,value:r});return new Nt(n).toPromise()}async function Du(t,e){const r=tr(t,!1).get(e),n=await new Nt(r).toPromise();return n===void 0?null:n.value}function xi(t,e){const r=tr(t,!0).delete(e);return new Nt(r).toPromise()}const Nu=800,Mu=3;class Li{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zr(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>Mu)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ki()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zt._getInstance(Cu()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await Ou(),!this.activeServiceWorker)return;this.sender=new Su(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Au()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zr();return await Mi(e,Xt,"1"),await xi(e,Xt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mi(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>Du(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>xi(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=tr(i,!1).getAll();return new Nt(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;for(const{fbase_key:i,value:a}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Li.type="LOCAL";const xu=Li;new Ot(3e4,6e4);/**
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
 */function Fi(t,e){return e?Le(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Wr extends wi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dt(e,this._buildIdpRequest())}_linkToIdToken(e,r){return dt(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return dt(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Lu(t){return mu(t.auth,new Wr(t),t.bypassAuthState)}function Fu(t){const{auth:e,user:r}=t;return B(r,e,"internal-error"),gu(r,new Wr(t),t.bypassAuthState)}async function Uu(t){const{auth:e,user:r}=t;return B(r,e,"internal-error"),vu(r,new Wr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,r,n,i,a=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:a,error:s,type:u}=e;if(s){this.reject(s);return}const o={auth:this.auth,requestUri:r,sessionId:n,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lu;case"linkViaPopup":case"linkViaRedirect":return Uu;case"reauthViaPopup":case"reauthViaRedirect":return Fu;default:Te(this.auth,"internal-error")}}resolve(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Ot(2e3,1e4);async function Mt(t,e,r){const n=Dt(t);Mo(t,e,Hr);const i=Fi(n,r);return new tt(n,"signInViaPopup",e,i).executeNotNull()}class tt extends Ui{constructor(e,r,n,i,a){super(e,r,i,a),this.provider=n,this.authWindow=null,this.pollId=null,tt.currentPopupAction&&tt.currentPopupAction.cancel(),tt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){xe(this.filter.length===1,"Popup operations only handle one event");const e=Vr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(we(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(we(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(we(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ju.get())};e()}}tt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="pendingRedirect",rr=new Map;class qu extends Ui{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=rr.get(this.auth._key());if(!e){try{const n=await Hu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}rr.set(this.auth._key(),e)}return this.bypassAuthState||rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hu(t,e){const r=Wu(e),n=zu(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function Vu(t,e){rr.set(t._key(),e)}function zu(t){return Le(t._redirectPersistence)}function Wu(t){return Gt(Bu,t.config.apiKey,t.name)}async function Qu(t,e,r=!1){const n=Dt(t),i=Fi(n,e),s=await new qu(n,i,r).execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=10*60*1e3;class $u{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gu(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!Bi(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(we(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ku&&this.cachedEventUids.clear(),this.cachedEventUids.has(ji(e))}saveEventToCache(e){this.cachedEventUids.add(ji(e)),this.lastProcessedEventTime=Date.now()}}function ji(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bi({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gu(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bi(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ju(t,e={}){return At(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xu=/^https?/;async function Zu(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ju(t);for(const r of e)try{if(ec(r))return}catch{}Te(t,"unauthorized-domain")}function ec(t){const e=Fr(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&s.hostname===n}if(!Xu.test(r))return!1;if(Yu.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const tc=new Ot(3e4,6e4);function qi(){const t=Ce().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function rc(t){return new Promise((e,r)=>{var n,i,a;function s(){qi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qi(),r(we(t,"network-request-failed"))},timeout:tc.get()})}if(!((i=(n=Ce().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=Ce().gapi)===null||a===void 0)&&a.load)s();else{const u=ru("iframefcb");return Ce()[u]=()=>{gapi.load?s():r(we(t,"network-request-failed"))},_i(`https://apis.google.com/js/api.js?onload=${u}`).catch(o=>r(o))}}).catch(e=>{throw nr=null,e})}let nr=null;function nc(t){return nr=nr||rc(t),nr}/**
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
 */const ic=new Ot(5e3,15e3),ac="__/auth/iframe",sc="emulator/auth/iframe",oc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cc(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Ur(e,sc):`https://${t.config.authDomain}/${ac}`,n={apiKey:e.apiKey,appName:t.name,v:St},i=uc.get(t.config.apiHost);i&&(n.eid=i);const a=t._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${Tt(n).slice(1)}`}async function lc(t){const e=await nc(t),r=Ce().gapi;return B(r,t,"internal-error"),e.open({where:document.body,url:cc(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oc,dontclear:!0},n=>new Promise(async(i,a)=>{await n.restyle({setHideOnLeave:!1});const s=we(t,"network-request-failed"),u=Ce().setTimeout(()=>{a(s)},ic.get());function o(){Ce().clearTimeout(u),i(n)}n.ping(o).then(o,()=>{a(s)})}))}/**
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
 */const dc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fc=500,hc=600,pc="_blank",vc="http://localhost";class Hi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gc(t,e,r,n=fc,i=hc){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let u="";const o=Object.assign(Object.assign({},dc),{width:n.toString(),height:i.toString(),top:a,left:s}),l=le().toLowerCase();r&&(u=li(l)?pc:r),ci(l)&&(e=e||vc,o.scrollbars="yes");const f=Object.entries(o).reduce((m,[d,E])=>`${m}${d}=${E},`,"");if(Xo(l)&&u!=="_self")return mc(e||"",u),new Hi(null);const p=window.open(e||"",u,f);B(p,t,"popup-blocked");try{p.focus()}catch{}return new Hi(p)}function mc(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const yc="__/auth/handler",bc="emulator/auth/handler",_c=encodeURIComponent("fac");async function Vi(t,e,r,n,i,a){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:St,eventId:i};if(e instanceof Hr){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",Is(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(a||{}))s[f]=p}if(e instanceof ft){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const u=s;for(const f of Object.keys(u))u[f]===void 0&&delete u[f];const o=await t._getAppCheckToken(),l=o?`#${_c}=${encodeURIComponent(o)}`:"";return`${Ic(t)}?${Tt(u).slice(1)}${l}`}function Ic({config:t}){return t.emulator?Ur(t,bc):`https://${t.authDomain}/${yc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="webStorageSupport";class Ec{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pi,this._completeRedirectFn=Qu,this._overrideRedirectResult=Vu}async _openPopup(e,r,n,i){var a;xe((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await Vi(e,r,n,Fr(),i);return gc(e,s,Vr())}async _openRedirect(e,r,n,i){await this._originValidation(e);const a=await Vi(e,r,n,Fr(),i);return Ru(a),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:a}=this.eventManagers[r];return i?Promise.resolve(i):(xe(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await lc(e),n=new $u(e);return r.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(Qr,{type:Qr},i=>{var a;const s=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Qr];s!==void 0&&r(!!s),Te(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Zu(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return vi()||qr()||Jt()}}const Tc=Ec;var zi="@firebase/auth",Wi="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Rc(t){wt(new ut("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:s,authDomain:u}=n.options;B(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:s,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gi(t)},l=new uu(n,i,a,o);return lu(l,r),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),wt(new ut("auth-internal",e=>{const r=Dt(e.getProvider("auth").getImmediate());return(n=>new wc(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),ct(zi,Wi,Sc(t)),ct(zi,Wi,"esm2017")}/**
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
 */const Oc=5*60,Ac=Mn("authIdTokenMaxAge")||Oc;let Qi=null;const Cc=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>Ac)return;const i=r==null?void 0:r.token;Qi!==i&&(Qi=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Pc(t=Eo()){const e=Vn(t,"auth");if(e.isInitialized())return e.getImmediate();const r=cu(t,{popupRedirectResolver:Tc,persistence:[xu,Tu,Pi]}),n=Mn("authTokenSyncURL");if(n){const a=Cc(n);bu(r,a,()=>a(r.currentUser)),yu(r,s=>a(s))}const i=ls("auth");return i&&du(r,`http://${i}`),r}Rc("Browser");var kc="firebase",Dc="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct(kc,Dc,"app");const Nc=()=>Object.keys(se.firebaseConfig).length!==0,xt=()=>{const t=zn(se.firebaseConfig);return Pc(t)},Ki=new Re;Ki.setCustomParameters({prompt:"select_account"});const $i=new Se;$i.addScope("public_profile");const Mc=new Ae,xc=new Oe,Lc=new ht("microsoft.com").setCustomParameters({prompt:"consent",login_hint:"user@firstadd.onmicrosoft.com",tenant:"1bd1e0fb-f970-45f0-a49d-e80107b0e6f3"});function ae(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];if(process.env.NODE_ENV!=="production"){var i=Qc[t],a=i?typeof i=="function"?i.apply(null,r):i:"unknown error nr: "+t;throw Error("[Immer] "+a)}throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(s){return"'"+s+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Ue(t){return!!t&&!!t[he]}function je(t){var e;return!!t&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Kc}(t)||Array.isArray(t)||!!t[Ft]||!!(!((e=t.constructor)===null||e===void 0)&&e[Ft])||ar(t)||sr(t))}function Fc(t){return Ue(t)||ae(23,t),t[he].t}function vt(t,e,r){r===void 0&&(r=!1),Ke(t)===0?(r?Object.keys:sn)(t).forEach(function(n){r&&typeof n=="symbol"||e(n,t[n],t)}):t.forEach(function(n,i){return e(i,n,t)})}function Ke(t){var e=t[he];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:ar(t)?2:sr(t)?3:0}function Lt(t,e){return Ke(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function ir(t,e){return Ke(t)===2?t.get(e):t[e]}function Gi(t,e,r){var n=Ke(t);n===2?t.set(e,r):n===3?t.add(r):t[e]=r}function Uc(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function ar(t){return zc&&t instanceof Map}function sr(t){return Wc&&t instanceof Set}function rt(t){return t.o||t.t}function Kr(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=$c(t);delete e[he];for(var r=sn(e),n=0;n<r.length;n++){var i=r[n],a=e[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(e[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function $r(t,e){return e===void 0&&(e=!1),Gr(t)||Ue(t)||!je(t)||(Ke(t)>1&&(t.set=t.add=t.clear=t.delete=jc),Object.freeze(t),e&&vt(t,function(r,n){return $r(n,!0)},!0)),t}function jc(){ae(2)}function Gr(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Pe(t){var e=on[t];return e||ae(18,t),e}function Bc(t,e){on[t]||(on[t]=e)}function Ji(){return process.env.NODE_ENV==="production"||gt||ae(0),gt}function Jr(t,e){e&&(Pe("Patches"),t.u=[],t.s=[],t.v=e)}function or(t){Yr(t),t.p.forEach(qc),t.p=null}function Yr(t){t===gt&&(gt=t.l)}function Yi(t){return gt={p:[],l:gt,h:t,m:!0,_:0}}function qc(t){var e=t[he];e.i===0||e.i===1?e.j():e.g=!0}function Xr(t,e){e._=e.p.length;var r=e.p[0],n=t!==void 0&&t!==r;return e.h.O||Pe("ES5").S(e,t,n),n?(r[he].P&&(or(e),ae(4)),je(t)&&(t=ur(e,t),e.l||cr(e,t)),e.u&&Pe("Patches").M(r[he].t,t,e.u,e.s)):t=ur(e,r,[]),or(e),e.u&&e.v(e.u,e.s),t!==an?t:void 0}function ur(t,e,r){if(Gr(e))return e;var n=e[he];if(!n)return vt(e,function(u,o){return Xi(t,n,e,u,o,r)},!0),e;if(n.A!==t)return e;if(!n.P)return cr(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=n.i===4||n.i===5?n.o=Kr(n.k):n.o,a=i,s=!1;n.i===3&&(a=new Set(i),i.clear(),s=!0),vt(a,function(u,o){return Xi(t,n,i,u,o,r,s)}),cr(t,i,!1),r&&t.u&&Pe("Patches").N(n,r,t.u,t.s)}return n.o}function Xi(t,e,r,n,i,a,s){if(process.env.NODE_ENV!=="production"&&i===r&&ae(5),Ue(i)){var u=ur(t,i,a&&e&&e.i!==3&&!Lt(e.R,n)?a.concat(n):void 0);if(Gi(r,n,u),!Ue(u))return;t.m=!1}else s&&r.add(i);if(je(i)&&!Gr(i)){if(!t.h.D&&t._<1)return;ur(t,i),e&&e.A.l||cr(t,i)}}function cr(t,e,r){r===void 0&&(r=!1),!t.l&&t.h.D&&t.m&&$r(e,r)}function Zr(t,e){var r=t[he];return(r?rt(r):t)[e]}function Zi(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function en(t){t.P||(t.P=!0,t.l&&en(t.l))}function tn(t){t.o||(t.o=Kr(t.t))}function rn(t,e,r){var n=ar(e)?Pe("MapSet").F(e,r):sr(e)?Pe("MapSet").T(e,r):t.O?function(i,a){var s=Array.isArray(i),u={i:s?1:0,A:a?a.A:Ji(),P:!1,I:!1,R:{},l:a,t:i,k:null,o:null,j:null,C:!1},o=u,l=un;s&&(o=[u],l=Ut);var f=Proxy.revocable(o,l),p=f.revoke,m=f.proxy;return u.k=m,u.j=p,m}(e,r):Pe("ES5").J(e,r);return(r?r.A:Ji()).p.push(n),n}function Hc(t){return Ue(t)||ae(22,t),function e(r){if(!je(r))return r;var n,i=r[he],a=Ke(r);if(i){if(!i.P&&(i.i<4||!Pe("ES5").K(i)))return i.t;i.I=!0,n=ea(r,a),i.I=!1}else n=ea(r,a);return vt(n,function(s,u){i&&ir(i.t,s)===u||Gi(n,s,e(u))}),a===3?new Set(n):n}(t)}function ea(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Kr(t)}function Vc(){function t(n){if(!je(n))return n;if(Array.isArray(n))return n.map(t);if(ar(n))return new Map(Array.from(n.entries()).map(function(s){return[s[0],t(s[1])]}));if(sr(n))return new Set(Array.from(n).map(t));var i=Object.create(Object.getPrototypeOf(n));for(var a in n)i[a]=t(n[a]);return Lt(n,Ft)&&(i[Ft]=n[Ft]),i}function e(n){return Ue(n)?t(n):n}var r="add";Bc("Patches",{$:function(n,i){return i.forEach(function(a){for(var s=a.path,u=a.op,o=n,l=0;l<s.length-1;l++){var f=Ke(o),p=s[l];typeof p!="string"&&typeof p!="number"&&(p=""+p),f!==0&&f!==1||p!=="__proto__"&&p!=="constructor"||ae(24),typeof o=="function"&&p==="prototype"&&ae(24),typeof(o=ir(o,p))!="object"&&ae(15,s.join("/"))}var m=Ke(o),d=t(a.value),E=s[s.length-1];switch(u){case"replace":switch(m){case 2:return o.set(E,d);case 3:ae(16);default:return o[E]=d}case r:switch(m){case 1:return E==="-"?o.push(d):o.splice(E,0,d);case 2:return o.set(E,d);case 3:return o.add(d);default:return o[E]=d}case"remove":switch(m){case 1:return o.splice(E,1);case 2:return o.delete(E);case 3:return o.delete(a.value);default:return delete o[E]}default:ae(17,u)}}),n},N:function(n,i,a,s){switch(n.i){case 0:case 4:case 2:return function(u,o,l,f){var p=u.t,m=u.o;vt(u.R,function(d,E){var b=ir(p,d),y=ir(m,d),O=E?Lt(p,d)?"replace":r:"remove";if(b!==y||O!=="replace"){var R=o.concat(d);l.push(O==="remove"?{op:O,path:R}:{op:O,path:R,value:y}),f.push(O===r?{op:"remove",path:R}:O==="remove"?{op:r,path:R,value:e(b)}:{op:"replace",path:R,value:e(b)})}})}(n,i,a,s);case 5:case 1:return function(u,o,l,f){var p=u.t,m=u.R,d=u.o;if(d.length<p.length){var E=[d,p];p=E[0],d=E[1];var b=[f,l];l=b[0],f=b[1]}for(var y=0;y<p.length;y++)if(m[y]&&d[y]!==p[y]){var O=o.concat([y]);l.push({op:"replace",path:O,value:e(d[y])}),f.push({op:"replace",path:O,value:e(p[y])})}for(var R=p.length;R<d.length;R++){var v=o.concat([R]);l.push({op:r,path:v,value:e(d[R])})}p.length<d.length&&f.push({op:"replace",path:o.concat(["length"]),value:p.length})}(n,i,a,s);case 3:return function(u,o,l,f){var p=u.t,m=u.o,d=0;p.forEach(function(E){if(!m.has(E)){var b=o.concat([d]);l.push({op:"remove",path:b,value:E}),f.unshift({op:r,path:b,value:E})}d++}),d=0,m.forEach(function(E){if(!p.has(E)){var b=o.concat([d]);l.push({op:r,path:b,value:E}),f.unshift({op:"remove",path:b,value:E})}d++})}(n,i,a,s)}},M:function(n,i,a,s){a.push({op:"replace",path:[],value:i===an?void 0:i}),s.push({op:"replace",path:[],value:n})}})}var ta,gt,nn=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",zc=typeof Map<"u",Wc=typeof Set<"u",ra=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",an=nn?Symbol.for("immer-nothing"):((ta={})["immer-nothing"]=!0,ta),Ft=nn?Symbol.for("immer-draftable"):"__$immer_draftable",he=nn?Symbol.for("immer-state"):"__$immer_state",Qc={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(t){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+t},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(t){return"Cannot apply patch, path doesn't resolve: "+t},16:'Sets cannot have "replace" patches.',17:function(t){return"Unsupported patch operation: "+t},18:function(t){return"The plugin for '"+t+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+t+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(t){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+t+"'"},22:function(t){return"'current' expects a draft, got: "+t},23:function(t){return"'original' expects a draft, got: "+t},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Kc=""+Object.prototype.constructor,sn=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,$c=Object.getOwnPropertyDescriptors||function(t){var e={};return sn(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},on={},un={get:function(t,e){if(e===he)return t;var r=rt(t);if(!Lt(r,e))return function(i,a,s){var u,o=Zi(a,s);return o?"value"in o?o.value:(u=o.get)===null||u===void 0?void 0:u.call(i.k):void 0}(t,r,e);var n=r[e];return t.I||!je(n)?n:n===Zr(t.t,e)?(tn(t),t.o[e]=rn(t.A.h,n,t)):n},has:function(t,e){return e in rt(t)},ownKeys:function(t){return Reflect.ownKeys(rt(t))},set:function(t,e,r){var n=Zi(rt(t),e);if(n!=null&&n.set)return n.set.call(t.k,r),!0;if(!t.P){var i=Zr(rt(t),e),a=i==null?void 0:i[he];if(a&&a.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(Uc(r,i)&&(r!==void 0||Lt(t.t,e)))return!0;tn(t),en(t)}return t.o[e]===r&&(r!==void 0||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return Zr(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,tn(t),en(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=rt(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:n.enumerable,value:r[e]}},defineProperty:function(){ae(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){ae(12)}},Ut={};vt(un,function(t,e){Ut[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Ut.deleteProperty=function(t,e){return process.env.NODE_ENV!=="production"&&isNaN(parseInt(e))&&ae(13),Ut.set.call(this,t,e,void 0)},Ut.set=function(t,e,r){return process.env.NODE_ENV!=="production"&&e!=="length"&&isNaN(parseInt(e))&&ae(14),un.set.call(this,t[0],e,r,t[0])};var Gc=function(){function t(r){var n=this;this.O=ra,this.D=!0,this.produce=function(i,a,s){if(typeof i=="function"&&typeof a!="function"){var u=a;a=i;var o=n;return function(b){var y=this;b===void 0&&(b=u);for(var O=arguments.length,R=Array(O>1?O-1:0),v=1;v<O;v++)R[v-1]=arguments[v];return o.produce(b,function(_){var g;return(g=a).call.apply(g,[y,_].concat(R))})}}var l;if(typeof a!="function"&&ae(6),s!==void 0&&typeof s!="function"&&ae(7),je(i)){var f=Yi(n),p=rn(n,i,void 0),m=!0;try{l=a(p),m=!1}finally{m?or(f):Yr(f)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(b){return Jr(f,s),Xr(b,f)},function(b){throw or(f),b}):(Jr(f,s),Xr(l,f))}if(!i||typeof i!="object"){if((l=a(i))===void 0&&(l=i),l===an&&(l=void 0),n.D&&$r(l,!0),s){var d=[],E=[];Pe("Patches").M(i,l,d,E),s(d,E)}return l}ae(21,i)},this.produceWithPatches=function(i,a){if(typeof i=="function")return function(l){for(var f=arguments.length,p=Array(f>1?f-1:0),m=1;m<f;m++)p[m-1]=arguments[m];return n.produceWithPatches(l,function(d){return i.apply(void 0,[d].concat(p))})};var s,u,o=n.produce(i,a,function(l,f){s=l,u=f});return typeof Promise<"u"&&o instanceof Promise?o.then(function(l){return[l,s,u]}):[o,s,u]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var e=t.prototype;return e.createDraft=function(r){je(r)||ae(8),Ue(r)&&(r=Hc(r));var n=Yi(this),i=rn(this,r,void 0);return i[he].C=!0,Yr(n),i},e.finishDraft=function(r,n){var i=r&&r[he];process.env.NODE_ENV!=="production"&&(i&&i.C||ae(9),i.I&&ae(10));var a=i.A;return Jr(a,n),Xr(void 0,a)},e.setAutoFreeze=function(r){this.D=r},e.setUseProxies=function(r){r&&!ra&&ae(20),this.O=r},e.applyPatches=function(r,n){var i;for(i=n.length-1;i>=0;i--){var a=n[i];if(a.path.length===0&&a.op==="replace"){r=a.value;break}}i>-1&&(n=n.slice(i+1));var s=Pe("Patches").$;return Ue(r)?s(r,n):this.produce(r,function(u){return s(u,n)})},t}(),me=new Gc;me.produce;var na=me.produceWithPatches.bind(me);me.setAutoFreeze.bind(me),me.setUseProxies.bind(me);var ia=me.applyPatches.bind(me);me.createDraft.bind(me),me.finishDraft.bind(me);var lr="NOT_FOUND";function Jc(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:lr},put:function(n,i){e={key:n,value:i}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}function Yc(t,e){var r=[];function n(u){var o=r.findIndex(function(f){return e(u,f.key)});if(o>-1){var l=r[o];return o>0&&(r.splice(o,1),r.unshift(l)),l.value}return lr}function i(u,o){n(u)===lr&&(r.unshift({key:u,value:o}),r.length>t&&r.pop())}function a(){return r}function s(){r=[]}return{get:n,put:i,getEntries:a,clear:s}}var Xc=function(e,r){return e===r};function Zc(t){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var i=r.length,a=0;a<i;a++)if(!t(r[a],n[a]))return!1;return!0}}function aa(t,e){var r=typeof e=="object"?e:{equalityCheck:e},n=r.equalityCheck,i=n===void 0?Xc:n,a=r.maxSize,s=a===void 0?1:a,u=r.resultEqualityCheck,o=Zc(i),l=s===1?Jc(o):Yc(s,o);function f(){var p=l.get(arguments);if(p===lr){if(p=t.apply(null,arguments),u){var m=l.getEntries(),d=m.find(function(E){return u(E.value,p)});d&&(p=d.value)}l.put(arguments,p)}return p}return f.clearCache=function(){return l.clear()},f}var dr=globalThis&&globalThis.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(l){return function(f){return o([l,f])}}function o(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=l[0]&2?i.return:l[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;switch(i=0,a&&(l=[l[0]&2,a.value]),l[0]){case 0:case 1:a=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){r.label=l[1];break}if(l[0]===6&&r.label<a[1]){r.label=a[1],a=l;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(l);break}a[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(t,r)}catch(f){l=[6,f],i=0}finally{n=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},fr=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t},el=Object.defineProperty,tl=Object.defineProperties,rl=Object.getOwnPropertyDescriptors,hr=Object.getOwnPropertySymbols,sa=Object.prototype.hasOwnProperty,oa=Object.prototype.propertyIsEnumerable,ua=function(t,e,r){return e in t?el(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},oe=function(t,e){for(var r in e||(e={}))sa.call(e,r)&&ua(t,r,e[r]);if(hr)for(var n=0,i=hr(e);n<i.length;n++){var r=i[n];oa.call(e,r)&&ua(t,r,e[r])}return t},ke=function(t,e){return tl(t,rl(e))},ca=function(t,e){var r={};for(var n in t)sa.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&hr)for(var i=0,a=hr(t);i<a.length;i++){var n=a[i];e.indexOf(n)<0&&oa.call(t,n)&&(r[n]=t[n])}return r},pr=function(t,e,r){return new Promise(function(n,i){var a=function(o){try{u(r.next(o))}catch(l){i(l)}},s=function(o){try{u(r.throw(o))}catch(l){i(l)}},u=function(o){return o.done?n(o.value):Promise.resolve(o.value).then(a,s)};u((r=r.apply(t,e)).next())})},ne;(function(t){t.uninitialized="uninitialized",t.pending="pending",t.fulfilled="fulfilled",t.rejected="rejected"})(ne||(ne={}));function nl(t){return{status:t,isUninitialized:t===ne.uninitialized,isLoading:t===ne.pending,isSuccess:t===ne.fulfilled,isError:t===ne.rejected}}function il(t){return new RegExp("(^|:)//").test(t)}var al=function(t){return t.replace(/\/$/,"")},sl=function(t){return t.replace(/^\//,"")};function ol(t,e){if(!t)return e;if(!e)return t;if(il(e))return e;var r=t.endsWith("/")||!e.startsWith("?")?"/":"";return t=al(t),e=sl(e),""+t+r+e}var la=function(t){return[].concat.apply([],t)};function ul(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}function cl(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}var da=x.isPlainObject;function fa(t,e){if(t===e||!(da(t)&&da(e)||Array.isArray(t)&&Array.isArray(e)))return e;for(var r=Object.keys(e),n=Object.keys(t),i=r.length===n.length,a=Array.isArray(e)?[]:{},s=0,u=r;s<u.length;s++){var o=u[s];a[o]=fa(t[o],e[o]),i&&(i=t[o]===a[o])}return i?t:a}var ha=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return fetch.apply(void 0,t)},ll=function(t){return t.status>=200&&t.status<=299},dl=function(t){return/ion\/(vnd\.api\+)?json/.test(t.get("content-type")||"")};function pa(t){if(!x.isPlainObject(t))return t;for(var e=oe({},t),r=0,n=Object.entries(e);r<n.length;r++){var i=n[r],a=i[0],s=i[1];s===void 0&&delete e[a]}return e}function fl(t){var e=this;t===void 0&&(t={});var r=t,n=r.baseUrl,i=r.prepareHeaders,a=i===void 0?function(v){return v}:i,s=r.fetchFn,u=s===void 0?ha:s,o=r.paramsSerializer,l=r.isJsonContentType,f=l===void 0?dl:l,p=r.jsonContentType,m=p===void 0?"application/json":p,d=r.jsonReplacer,E=r.timeout,b=r.responseHandler,y=r.validateStatus,O=ca(r,["baseUrl","prepareHeaders","fetchFn","paramsSerializer","isJsonContentType","jsonContentType","jsonReplacer","timeout","responseHandler","validateStatus"]);return typeof fetch>"u"&&u===ha&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),function(v,_){return pr(e,null,function(){var g,h,I,w,S,T,A,C,P,D,M,j,F,U,z,$,W,J,H,Y,Q,X,ie,pe,be,ve,_e,te,de,Ge,at,Je,st,mt,Ye,Ir;return dr(this,function(Ie){switch(Ie.label){case 0:return g=_.signal,h=_.getState,I=_.extra,w=_.endpoint,S=_.forced,T=_.type,C=typeof v=="string"?{url:v}:v,P=C.url,D=C.headers,M=D===void 0?new Headers(O.headers):D,j=C.params,F=j===void 0?void 0:j,U=C.responseHandler,z=U===void 0?b??"json":U,$=C.validateStatus,W=$===void 0?y??ll:$,J=C.timeout,H=J===void 0?E:J,Y=ca(C,["url","headers","params","responseHandler","validateStatus","timeout"]),Q=oe(ke(oe({},O),{signal:g}),Y),M=new Headers(pa(M)),X=Q,[4,a(M,{getState:h,extra:I,endpoint:w,forced:S,type:T})];case 1:X.headers=Ie.sent()||M,ie=function(ge){return typeof ge=="object"&&(x.isPlainObject(ge)||Array.isArray(ge)||typeof ge.toJSON=="function")},!Q.headers.has("content-type")&&ie(Q.body)&&Q.headers.set("content-type",m),ie(Q.body)&&f(Q.headers)&&(Q.body=JSON.stringify(Q.body,d)),F&&(pe=~P.indexOf("?")?"&":"?",be=o?o(F):new URLSearchParams(pa(F)),P+=pe+be),P=ol(n,P),ve=new Request(P,Q),_e=ve.clone(),A={request:_e},de=!1,Ge=H&&setTimeout(function(){de=!0,_.abort()},H),Ie.label=2;case 2:return Ie.trys.push([2,4,5,6]),[4,u(ve)];case 3:return te=Ie.sent(),[3,6];case 4:return at=Ie.sent(),[2,{error:{status:de?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(at)},meta:A}];case 5:return Ge&&clearTimeout(Ge),[7];case 6:Je=te.clone(),A.response=Je,mt="",Ie.label=7;case 7:return Ie.trys.push([7,9,,10]),[4,Promise.all([R(te,z).then(function(ge){return st=ge},function(ge){return Ye=ge}),Je.text().then(function(ge){return mt=ge},function(){})])];case 8:if(Ie.sent(),Ye)throw Ye;return[3,10];case 9:return Ir=Ie.sent(),[2,{error:{status:"PARSING_ERROR",originalStatus:te.status,data:mt,error:String(Ir)},meta:A}];case 10:return[2,W(te,st)?{data:st,meta:A}:{error:{status:te.status,data:st},meta:A}]}})})};function R(v,_){return pr(this,null,function(){var g;return dr(this,function(h){switch(h.label){case 0:return typeof _=="function"?[2,_(v)]:(_==="content-type"&&(_=f(v.headers)?"json":"text"),_!=="json"?[3,2]:[4,v.text()]);case 1:return g=h.sent(),[2,g.length?JSON.parse(g):null];case 2:return[2,v.text()]}})})}}var va=function(){function t(e,r){r===void 0&&(r=void 0),this.value=e,this.meta=r}return t}(),cn=x.createAction("__rtkq/focused"),ga=x.createAction("__rtkq/unfocused"),ln=x.createAction("__rtkq/online"),ma=x.createAction("__rtkq/offline"),De;(function(t){t.query="query",t.mutation="mutation"})(De||(De={}));function ya(t){return t.type===De.query}function hl(t){return t.type===De.mutation}function ba(t,e,r,n,i,a){return pl(t)?t(e,r,n,i).map(dn).map(a):Array.isArray(t)?t.map(dn).map(a):[]}function pl(t){return typeof t=="function"}function dn(t){return typeof t=="string"?{type:t}:t}function fn(t){return t!=null}var jt=Symbol("forceQueryFn"),hn=function(t){return typeof t[jt]=="function"};function vl(t){var e=t.serializeQueryArgs,r=t.queryThunk,n=t.mutationThunk,i=t.api,a=t.context,s=new Map,u=new Map,o=i.internalActions,l=o.unsubscribeQueryResult,f=o.removeMutationResult,p=o.updateSubscriptionOptions;return{buildInitiateQuery:v,buildInitiateMutation:_,getRunningQueryThunk:E,getRunningMutationThunk:b,getRunningQueriesThunk:y,getRunningMutationsThunk:O,getRunningOperationPromises:d,removalWarning:m};function m(){throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`)}function d(){if(typeof process<"u"&&process.env.NODE_ENV==="development")m();else{var g=function(h){return Array.from(h.values()).flatMap(function(I){return I?Object.values(I):[]})};return fr(fr([],g(s)),g(u)).filter(fn)}}function E(g,h){return function(I){var w,S=a.endpointDefinitions[g],T=e({queryArgs:h,endpointDefinition:S,endpointName:g});return(w=s.get(I))==null?void 0:w[T]}}function b(g,h){return function(I){var w;return(w=u.get(I))==null?void 0:w[h]}}function y(){return function(g){return Object.values(s.get(g)||{}).filter(fn)}}function O(){return function(g){return Object.values(u.get(g)||{}).filter(fn)}}function R(g){if(process.env.NODE_ENV!=="production"){if(R.triggered)return;var h=g(i.internalActions.internal_probeSubscription({queryCacheKey:"DOES_NOT_EXIST",requestId:"DUMMY_REQUEST_ID"}));if(R.triggered=!0,typeof h!="boolean")throw new Error('Warning: Middleware for RTK-Query API at reducerPath "'+i.reducerPath+`" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`)}}function v(g,h){var I=function(w,S){var T=S===void 0?{}:S,A=T.subscribe,C=A===void 0?!0:A,P=T.forceRefetch,D=T.subscriptionOptions,M=jt,j=T[M];return function(F,U){var z,$,W=e({queryArgs:w,endpointDefinition:h,endpointName:g}),J=r((z={type:"query",subscribe:C,forceRefetch:P,subscriptionOptions:D,endpointName:g,originalArgs:w,queryCacheKey:W},z[jt]=j,z)),H=i.endpoints[g].select(w),Y=F(J),Q=H(U());R(F);var X=Y.requestId,ie=Y.abort,pe=Q.requestId!==X,be=($=s.get(F))==null?void 0:$[W],ve=function(){return H(U())},_e=Object.assign(j?Y.then(ve):pe&&!be?Promise.resolve(Q):Promise.all([be,Y]).then(ve),{arg:w,requestId:X,subscriptionOptions:D,queryCacheKey:W,abort:ie,unwrap:function(){return pr(this,null,function(){var de;return dr(this,function(Ge){switch(Ge.label){case 0:return[4,_e];case 1:if(de=Ge.sent(),de.isError)throw de.error;return[2,de.data]}})})},refetch:function(){return F(I(w,{subscribe:!1,forceRefetch:!0}))},unsubscribe:function(){C&&F(l({queryCacheKey:W,requestId:X}))},updateSubscriptionOptions:function(de){_e.subscriptionOptions=de,F(p({endpointName:g,requestId:X,queryCacheKey:W,options:de}))}});if(!be&&!pe&&!j){var te=s.get(F)||{};te[W]=_e,s.set(F,te),_e.then(function(){delete te[W],Object.keys(te).length||s.delete(F)})}return _e}};return I}function _(g){return function(h,I){var w=I===void 0?{}:I,S=w.track,T=S===void 0?!0:S,A=w.fixedCacheKey;return function(C,P){var D=n({type:"mutation",endpointName:g,originalArgs:h,track:T,fixedCacheKey:A}),M=C(D);R(C);var j=M.requestId,F=M.abort,U=M.unwrap,z=M.unwrap().then(function(H){return{data:H}}).catch(function(H){return{error:H}}),$=function(){C(f({requestId:j,fixedCacheKey:A}))},W=Object.assign(z,{arg:M.arg,requestId:j,abort:F,unwrap:U,unsubscribe:$,reset:$}),J=u.get(C)||{};return u.set(C,J),J[j]=W,W.then(function(){delete J[j],Object.keys(J).length||u.delete(C)}),A&&(J[A]=W,W.then(function(){J[A]===W&&(delete J[A],Object.keys(J).length||u.delete(C))})),W}}}}function _a(t){return t}function gl(t){var e=this,r=t.reducerPath,n=t.baseQuery,i=t.context.endpointDefinitions,a=t.serializeQueryArgs,s=t.api,u=function(v,_,g){return function(h){var I=i[v];h(s.internalActions.queryResultPatched({queryCacheKey:a({queryArgs:_,endpointDefinition:I,endpointName:v}),patches:g}))}},o=function(v,_,g){return function(h,I){var w,S,T=s.endpoints[v].select(_)(I()),A={patches:[],inversePatches:[],undo:function(){return h(s.util.patchQueryData(v,_,A.inversePatches))}};if(T.status===ne.uninitialized)return A;if("data"in T)if(je(T.data)){var C=na(T.data,g),P=C[1],D=C[2];(w=A.patches).push.apply(w,P),(S=A.inversePatches).push.apply(S,D)}else{var M=g(T.data);A.patches.push({op:"replace",path:[],value:M}),A.inversePatches.push({op:"replace",path:[],value:T.data})}return h(s.util.patchQueryData(v,_,A.patches)),A}},l=function(v,_,g){return function(h){var I;return h(s.endpoints[v].initiate(_,(I={subscribe:!1,forceRefetch:!0},I[jt]=function(){return{data:g}},I)))}},f=function(v,_){return pr(e,[v,_],function(g,h){var I,w,S,T,A,C,P,D,M,j,F,U,z,$,W,J,H,Y,Q=h.signal,X=h.abort,ie=h.rejectWithValue,pe=h.fulfillWithValue,be=h.dispatch,ve=h.getState,_e=h.extra;return dr(this,function(te){switch(te.label){case 0:I=i[g.endpointName],te.label=1;case 1:return te.trys.push([1,8,,13]),w=_a,S=void 0,T={signal:Q,abort:X,dispatch:be,getState:ve,extra:_e,endpoint:g.endpointName,type:g.type,forced:g.type==="query"?p(g,ve()):void 0},A=g.type==="query"?g[jt]:void 0,A?(S=A(),[3,6]):[3,2];case 2:return I.query?[4,n(I.query(g.originalArgs),T,I.extraOptions)]:[3,4];case 3:return S=te.sent(),I.transformResponse&&(w=I.transformResponse),[3,6];case 4:return[4,I.queryFn(g.originalArgs,T,I.extraOptions,function(de){return n(de,T,I.extraOptions)})];case 5:S=te.sent(),te.label=6;case 6:if(typeof process<"u"&&process.env.NODE_ENV==="development"){if(C=I.query?"`baseQuery`":"`queryFn`",P=void 0,!S)P=C+" did not return anything.";else if(typeof S!="object")P=C+" did not return an object.";else if(S.error&&S.data)P=C+" returned an object containing both `error` and `result`.";else if(S.error===void 0&&S.data===void 0)P=C+" returned an object containing neither a valid `error` and `result`. At least one of them should not be `undefined`";else for(D=0,M=Object.keys(S);D<M.length;D++)if(j=M[D],j!=="error"&&j!=="data"&&j!=="meta"){P="The object returned by "+C+" has the unknown property "+j+".";break}P&&console.error("Error encountered handling the endpoint "+g.endpointName+`.
              `+P+"\n              It needs to return an object with either the shape `{ data: <value> }` or `{ error: <value> }` that may contain an optional `meta` property.\n              Object returned was:",S)}if(S.error)throw new va(S.error,S.meta);return F=pe,[4,w(S.data,S.meta,g.originalArgs)];case 7:return[2,F.apply(void 0,[te.sent(),(H={fulfilledTimeStamp:Date.now(),baseQueryMeta:S.meta},H[x.SHOULD_AUTOBATCH]=!0,H)])];case 8:if(U=te.sent(),z=U,!(z instanceof va))return[3,12];$=_a,I.query&&I.transformErrorResponse&&($=I.transformErrorResponse),te.label=9;case 9:return te.trys.push([9,11,,12]),W=ie,[4,$(z.value,z.meta,g.originalArgs)];case 10:return[2,W.apply(void 0,[te.sent(),(Y={baseQueryMeta:z.meta},Y[x.SHOULD_AUTOBATCH]=!0,Y)])];case 11:return J=te.sent(),z=J,[3,12];case 12:throw typeof process<"u"&&process.env.NODE_ENV!=="production"?console.error('An unhandled error occurred processing a request for the endpoint "'+g.endpointName+`".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`,z):console.error(z),z;case 13:return[2]}})})};function p(v,_){var g,h,I,w,S=(h=(g=_[r])==null?void 0:g.queries)==null?void 0:h[v.queryCacheKey],T=(I=_[r])==null?void 0:I.config.refetchOnMountOrArgChange,A=S==null?void 0:S.fulfilledTimeStamp,C=(w=v.forceRefetch)!=null?w:v.subscribe&&T;return C?C===!0||(Number(new Date)-Number(A))/1e3>=C:!1}var m=x.createAsyncThunk(r+"/executeQuery",f,{getPendingMeta:function(){var v;return v={startedTimeStamp:Date.now()},v[x.SHOULD_AUTOBATCH]=!0,v},condition:function(v,_){var g=_.getState,h,I,w,S=g(),T=(I=(h=S[r])==null?void 0:h.queries)==null?void 0:I[v.queryCacheKey],A=T==null?void 0:T.fulfilledTimeStamp,C=v.originalArgs,P=T==null?void 0:T.originalArgs,D=i[v.endpointName];return hn(v)?!0:(T==null?void 0:T.status)==="pending"?!1:p(v,S)||ya(D)&&((w=D==null?void 0:D.forceRefetch)!=null&&w.call(D,{currentArg:C,previousArg:P,endpointState:T,state:S}))?!0:!A},dispatchConditionRejection:!0}),d=x.createAsyncThunk(r+"/executeMutation",f,{getPendingMeta:function(){var v;return v={startedTimeStamp:Date.now()},v[x.SHOULD_AUTOBATCH]=!0,v}}),E=function(v){return"force"in v},b=function(v){return"ifOlderThan"in v},y=function(v,_,g){return function(h,I){var w=E(g)&&g.force,S=b(g)&&g.ifOlderThan,T=function(D){return D===void 0&&(D=!0),s.endpoints[v].initiate(_,{forceRefetch:D})},A=s.endpoints[v].select(_)(I());if(w)h(T());else if(S){var C=A==null?void 0:A.fulfilledTimeStamp;if(!C){h(T());return}var P=(Number(new Date)-Number(new Date(C)))/1e3>=S;P&&h(T())}else h(T(!1))}};function O(v){return function(_){var g,h;return((h=(g=_==null?void 0:_.meta)==null?void 0:g.arg)==null?void 0:h.endpointName)===v}}function R(v,_){return{matchPending:x.isAllOf(x.isPending(v),O(_)),matchFulfilled:x.isAllOf(x.isFulfilled(v),O(_)),matchRejected:x.isAllOf(x.isRejected(v),O(_))}}return{queryThunk:m,mutationThunk:d,prefetch:y,updateQueryData:o,upsertQueryData:l,patchQueryData:u,buildMatchThunkActions:R}}function Ia(t,e,r,n){return ba(r[t.meta.arg.endpointName][e],x.isFulfilled(t)?t.payload:void 0,x.isRejectedWithValue(t)?t.payload:void 0,t.meta.arg.originalArgs,"baseQueryMeta"in t.meta?t.meta.baseQueryMeta:void 0,n)}function vr(t,e,r){var n=t[e];n&&r(n)}function Bt(t){var e;return(e="arg"in t?t.arg.fixedCacheKey:t.fixedCacheKey)!=null?e:t.requestId}function Ea(t,e,r){var n=t[Bt(e)];n&&r(n)}var qt={};function ml(t){var e=t.reducerPath,r=t.queryThunk,n=t.mutationThunk,i=t.context,a=i.endpointDefinitions,s=i.apiUid,u=i.extractRehydrationInfo,o=i.hasRehydrationInfo,l=t.assertTagType,f=t.config,p=x.createAction(e+"/resetApiState"),m=x.createSlice({name:e+"/queries",initialState:qt,reducers:{removeQueryResult:{reducer:function(g,h){var I=h.payload.queryCacheKey;delete g[I]},prepare:x.prepareAutoBatched()},queryResultPatched:function(g,h){var I=h.payload,w=I.queryCacheKey,S=I.patches;vr(g,w,function(T){T.data=ia(T.data,S.concat())})}},extraReducers:function(g){g.addCase(r.pending,function(h,I){var w=I.meta,S=I.meta.arg,T,A,C=hn(S);(S.subscribe||C)&&((A=h[T=S.queryCacheKey])!=null||(h[T]={status:ne.uninitialized,endpointName:S.endpointName})),vr(h,S.queryCacheKey,function(P){P.status=ne.pending,P.requestId=C&&P.requestId?P.requestId:w.requestId,S.originalArgs!==void 0&&(P.originalArgs=S.originalArgs),P.startedTimeStamp=w.startedTimeStamp})}).addCase(r.fulfilled,function(h,I){var w=I.meta,S=I.payload;vr(h,w.arg.queryCacheKey,function(T){var A;if(!(T.requestId!==w.requestId&&!hn(w.arg))){var C=a[w.arg.endpointName].merge;if(T.status=ne.fulfilled,C)if(T.data!==void 0){var P=w.fulfilledTimeStamp,D=w.arg,M=w.baseQueryMeta,j=w.requestId,F=x.createNextState(T.data,function(U){return C(U,S,{arg:D.originalArgs,baseQueryMeta:M,fulfilledTimeStamp:P,requestId:j})});T.data=F}else T.data=S;else T.data=(A=a[w.arg.endpointName].structuralSharing)==null||A?fa(Ue(T.data)?Fc(T.data):T.data,S):S;delete T.error,T.fulfilledTimeStamp=w.fulfilledTimeStamp}})}).addCase(r.rejected,function(h,I){var w=I.meta,S=w.condition,T=w.arg,A=w.requestId,C=I.error,P=I.payload;vr(h,T.queryCacheKey,function(D){if(!S){if(D.requestId!==A)return;D.status=ne.rejected,D.error=P??C}})}).addMatcher(o,function(h,I){for(var w=u(I).queries,S=0,T=Object.entries(w);S<T.length;S++){var A=T[S],C=A[0],P=A[1];((P==null?void 0:P.status)===ne.fulfilled||(P==null?void 0:P.status)===ne.rejected)&&(h[C]=P)}})}}),d=x.createSlice({name:e+"/mutations",initialState:qt,reducers:{removeMutationResult:{reducer:function(g,h){var I=h.payload,w=Bt(I);w in g&&delete g[w]},prepare:x.prepareAutoBatched()}},extraReducers:function(g){g.addCase(n.pending,function(h,I){var w=I.meta,S=I.meta,T=S.requestId,A=S.arg,C=S.startedTimeStamp;A.track&&(h[Bt(w)]={requestId:T,status:ne.pending,endpointName:A.endpointName,startedTimeStamp:C})}).addCase(n.fulfilled,function(h,I){var w=I.payload,S=I.meta;S.arg.track&&Ea(h,S,function(T){T.requestId===S.requestId&&(T.status=ne.fulfilled,T.data=w,T.fulfilledTimeStamp=S.fulfilledTimeStamp)})}).addCase(n.rejected,function(h,I){var w=I.payload,S=I.error,T=I.meta;T.arg.track&&Ea(h,T,function(A){A.requestId===T.requestId&&(A.status=ne.rejected,A.error=w??S)})}).addMatcher(o,function(h,I){for(var w=u(I).mutations,S=0,T=Object.entries(w);S<T.length;S++){var A=T[S],C=A[0],P=A[1];((P==null?void 0:P.status)===ne.fulfilled||(P==null?void 0:P.status)===ne.rejected)&&C!==(P==null?void 0:P.requestId)&&(h[C]=P)}})}}),E=x.createSlice({name:e+"/invalidation",initialState:qt,reducers:{},extraReducers:function(g){g.addCase(m.actions.removeQueryResult,function(h,I){for(var w=I.payload.queryCacheKey,S=0,T=Object.values(h);S<T.length;S++)for(var A=T[S],C=0,P=Object.values(A);C<P.length;C++){var D=P[C],M=D.indexOf(w);M!==-1&&D.splice(M,1)}}).addMatcher(o,function(h,I){for(var w,S,T,A,C=u(I).provided,P=0,D=Object.entries(C);P<D.length;P++)for(var M=D[P],j=M[0],F=M[1],U=0,z=Object.entries(F);U<z.length;U++)for(var $=z[U],W=$[0],J=$[1],H=(A=(S=(w=h[j])!=null?w:h[j]={})[T=W||"__internal_without_id"])!=null?A:S[T]=[],Y=0,Q=J;Y<Q.length;Y++){var X=Q[Y],ie=H.includes(X);ie||H.push(X)}}).addMatcher(x.isAnyOf(x.isFulfilled(r),x.isRejectedWithValue(r)),function(h,I){for(var w,S,T,A,C=Ia(I,"providesTags",a,l),P=I.meta.arg.queryCacheKey,D=0,M=Object.values(h);D<M.length;D++)for(var j=M[D],F=0,U=Object.values(j);F<U.length;F++){var z=U[F],$=z.indexOf(P);$!==-1&&z.splice($,1)}for(var W=0,J=C;W<J.length;W++){var H=J[W],Y=H.type,Q=H.id,X=(A=(S=(w=h[Y])!=null?w:h[Y]={})[T=Q||"__internal_without_id"])!=null?A:S[T]=[],ie=X.includes(P);ie||X.push(P)}})}}),b=x.createSlice({name:e+"/subscriptions",initialState:qt,reducers:{updateSubscriptionOptions:function(g,h){},unsubscribeQueryResult:function(g,h){},internal_probeSubscription:function(g,h){}}}),y=x.createSlice({name:e+"/internalSubscriptions",initialState:qt,reducers:{subscriptionsUpdated:{reducer:function(g,h){return ia(g,h.payload)},prepare:x.prepareAutoBatched()}}}),O=x.createSlice({name:e+"/config",initialState:oe({online:ul(),focused:cl(),middlewareRegistered:!1},f),reducers:{middlewareRegistered:function(g,h){var I=h.payload;g.middlewareRegistered=g.middlewareRegistered==="conflict"||s!==I?"conflict":!0}},extraReducers:function(g){g.addCase(ln,function(h){h.online=!0}).addCase(ma,function(h){h.online=!1}).addCase(cn,function(h){h.focused=!0}).addCase(ga,function(h){h.focused=!1}).addMatcher(o,function(h){return oe({},h)})}}),R=x.combineReducers({queries:m.reducer,mutations:d.reducer,provided:E.reducer,subscriptions:y.reducer,config:O.reducer}),v=function(g,h){return R(p.match(h)?void 0:g,h)},_=ke(oe(oe(oe(oe(oe({},O.actions),m.actions),b.actions),y.actions),d.actions),{unsubscribeMutationResult:d.actions.removeMutationResult,resetApiState:p});return{reducer:v,actions:_}}var nt=Symbol.for("RTKQ/skipToken"),Ta={status:ne.uninitialized},wa=x.createNextState(Ta,function(){}),Sa=x.createNextState(Ta,function(){});function yl(t){var e=t.serializeQueryArgs,r=t.reducerPath,n=function(f){return wa},i=function(f){return Sa};return{buildQuerySelector:u,buildMutationSelector:o,selectInvalidatedBy:l};function a(f){return oe(oe({},f),nl(f.status))}function s(f){var p=f[r];if(process.env.NODE_ENV!=="production"&&!p){if(s.triggered)return p;s.triggered=!0,console.error("Error: No data found at `state."+r+"`. Did you forget to add the reducer to the store?")}return p}function u(f,p){return function(m){var d=e({queryArgs:m,endpointDefinition:p,endpointName:f}),E=function(y){var O,R,v;return(v=(R=(O=s(y))==null?void 0:O.queries)==null?void 0:R[d])!=null?v:wa},b=m===nt?n:E;return x.createSelector(b,a)}}function o(){return function(f){var p,m;typeof f=="object"?m=(p=Bt(f))!=null?p:nt:m=f;var d=function(b){var y,O,R;return(R=(O=(y=s(b))==null?void 0:y.mutations)==null?void 0:O[m])!=null?R:Sa},E=m===nt?i:d;return x.createSelector(E,a)}}function l(f,p){for(var m,d=f[r],E=new Set,b=0,y=p.map(dn);b<y.length;b++){var O=y[b],R=d.provided[O.type];if(R)for(var v=(m=O.id!==void 0?R[O.id]:la(Object.values(R)))!=null?m:[],_=0,g=v;_<g.length;_++){var h=g[_];E.add(h)}}return la(Array.from(E.values()).map(function(I){var w=d.queries[I];return w?[{queryCacheKey:I,endpointName:w.endpointName,originalArgs:w.originalArgs}]:[]}))}}var gr=WeakMap?new WeakMap:void 0,Ra=function(t){var e=t.endpointName,r=t.queryArgs,n="",i=gr==null?void 0:gr.get(r);if(typeof i=="string")n=i;else{var a=JSON.stringify(r,function(s,u){return x.isPlainObject(u)?Object.keys(u).sort().reduce(function(o,l){return o[l]=u[l],o},{}):u});x.isPlainObject(r)&&(gr==null||gr.set(r,a)),n=a}return e+"("+n+")"};function bl(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(n){var i=aa(function(f){var p,m;return(m=n.extractRehydrationInfo)==null?void 0:m.call(n,f,{reducerPath:(p=n.reducerPath)!=null?p:"api"})}),a=ke(oe({reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1},n),{extractRehydrationInfo:i,serializeQueryArgs:function(f){var p=Ra;if("serializeQueryArgs"in f.endpointDefinition){var m=f.endpointDefinition.serializeQueryArgs;p=function(d){var E=m(d);return typeof E=="string"?E:Ra(ke(oe({},d),{queryArgs:E}))}}else n.serializeQueryArgs&&(p=n.serializeQueryArgs);return p(f)},tagTypes:fr([],n.tagTypes||[])}),s={endpointDefinitions:{},batch:function(f){f()},apiUid:x.nanoid(),extractRehydrationInfo:i,hasRehydrationInfo:aa(function(f){return i(f)!=null})},u={injectEndpoints:l,enhanceEndpoints:function(f){var p=f.addTagTypes,m=f.endpoints;if(p)for(var d=0,E=p;d<E.length;d++){var b=E[d];a.tagTypes.includes(b)||a.tagTypes.push(b)}if(m)for(var y=0,O=Object.entries(m);y<O.length;y++){var R=O[y],v=R[0],_=R[1];typeof _=="function"?_(s.endpointDefinitions[v]):Object.assign(s.endpointDefinitions[v]||{},_)}return u}},o=t.map(function(f){return f.init(u,a,s)});function l(f){for(var p=f.endpoints({query:function(_){return ke(oe({},_),{type:De.query})},mutation:function(_){return ke(oe({},_),{type:De.mutation})}}),m=0,d=Object.entries(p);m<d.length;m++){var E=d[m],b=E[0],y=E[1];if(!f.overrideExisting&&b in s.endpointDefinitions){typeof process<"u"&&process.env.NODE_ENV==="development"&&console.error("called `injectEndpoints` to override already-existing endpointName "+b+" without specifying `overrideExisting: true`");continue}s.endpointDefinitions[b]=y;for(var O=0,R=o;O<R.length;O++){var v=R[O];v.injectEndpoint(b,y)}}return u}return u.injectEndpoints({endpoints:n.endpoints})}}function _l(t){for(var e in t)return!1;return!0}var Il=2147483647/1e3-1,El=function(t){var e=t.reducerPath,r=t.api,n=t.context,i=t.internalState,a=r.internalActions,s=a.removeQueryResult,u=a.unsubscribeQueryResult;function o(m){var d=i.currentSubscriptions[m];return!!d&&!_l(d)}var l={},f=function(m,d,E){var b;if(u.match(m)){var y=d.getState()[e],O=m.payload.queryCacheKey;p(O,(b=y.queries[O])==null?void 0:b.endpointName,d,y.config)}if(r.util.resetApiState.match(m))for(var R=0,v=Object.entries(l);R<v.length;R++){var _=v[R],g=_[0],h=_[1];h&&clearTimeout(h),delete l[g]}if(n.hasRehydrationInfo(m))for(var y=d.getState()[e],I=n.extractRehydrationInfo(m).queries,w=0,S=Object.entries(I);w<S.length;w++){var T=S[w],O=T[0],A=T[1];p(O,A==null?void 0:A.endpointName,d,y.config)}};function p(m,d,E,b){var y,O=n.endpointDefinitions[d],R=(y=O==null?void 0:O.keepUnusedDataFor)!=null?y:b.keepUnusedDataFor;if(R!==1/0){var v=Math.max(0,Math.min(R,Il));if(!o(m)){var _=l[m];_&&clearTimeout(_),l[m]=setTimeout(function(){o(m)||E.dispatch(s({queryCacheKey:m})),delete l[m]},v*1e3)}}}return f},Tl=function(t){var e=t.reducerPath,r=t.context,n=t.context.endpointDefinitions,i=t.mutationThunk,a=t.api,s=t.assertTagType,u=t.refetchQuery,o=a.internalActions.removeQueryResult,l=x.isAnyOf(x.isFulfilled(i),x.isRejectedWithValue(i)),f=function(m,d){l(m)&&p(Ia(m,"invalidatesTags",n,s),d),a.util.invalidateTags.match(m)&&p(ba(m.payload,void 0,void 0,void 0,void 0,s),d)};function p(m,d){var E=d.getState(),b=E[e],y=a.util.selectInvalidatedBy(E,m);r.batch(function(){for(var O,R=Array.from(y.values()),v=0,_=R;v<_.length;v++){var g=_[v].queryCacheKey,h=b.queries[g],I=(O=b.subscriptions[g])!=null?O:{};h&&(Object.keys(I).length===0?d.dispatch(o({queryCacheKey:g})):h.status!==ne.uninitialized&&d.dispatch(u(h,g)))}})}return f},wl=function(t){var e=t.reducerPath,r=t.queryThunk,n=t.api,i=t.refetchQuery,a=t.internalState,s={},u=function(d,E){(n.internalActions.updateSubscriptionOptions.match(d)||n.internalActions.unsubscribeQueryResult.match(d))&&l(d.payload,E),(r.pending.match(d)||r.rejected.match(d)&&d.meta.condition)&&l(d.meta.arg,E),(r.fulfilled.match(d)||r.rejected.match(d)&&!d.meta.condition)&&o(d.meta.arg,E),n.util.resetApiState.match(d)&&p()};function o(d,E){var b=d.queryCacheKey,y=E.getState()[e],O=y.queries[b],R=a.currentSubscriptions[b];if(!(!O||O.status===ne.uninitialized)){var v=m(R);if(Number.isFinite(v)){var _=s[b];_!=null&&_.timeout&&(clearTimeout(_.timeout),_.timeout=void 0);var g=Date.now()+v,h=s[b]={nextPollTimestamp:g,pollingInterval:v,timeout:setTimeout(function(){h.timeout=void 0,E.dispatch(i(O,b))},v)}}}}function l(d,E){var b=d.queryCacheKey,y=E.getState()[e],O=y.queries[b],R=a.currentSubscriptions[b];if(!(!O||O.status===ne.uninitialized)){var v=m(R);if(!Number.isFinite(v)){f(b);return}var _=s[b],g=Date.now()+v;(!_||g<_.nextPollTimestamp)&&o({queryCacheKey:b},E)}}function f(d){var E=s[d];E!=null&&E.timeout&&clearTimeout(E.timeout),delete s[d]}function p(){for(var d=0,E=Object.keys(s);d<E.length;d++){var b=E[d];f(b)}}function m(d){d===void 0&&(d={});var E=Number.POSITIVE_INFINITY;for(var b in d)d[b].pollingInterval&&(E=Math.min(d[b].pollingInterval,E));return E}return u},Sl=function(t){var e=t.reducerPath,r=t.context,n=t.api,i=t.refetchQuery,a=t.internalState,s=n.internalActions.removeQueryResult,u=function(l,f){cn.match(l)&&o(f,"refetchOnFocus"),ln.match(l)&&o(f,"refetchOnReconnect")};function o(l,f){var p=l.getState()[e],m=p.queries,d=a.currentSubscriptions;r.batch(function(){for(var E=0,b=Object.keys(d);E<b.length;E++){var y=b[E],O=m[y],R=d[y];if(!(!R||!O)){var v=Object.values(R).some(function(_){return _[f]===!0})||Object.values(R).every(function(_){return _[f]===void 0})&&p.config[f];v&&(Object.keys(R).length===0?l.dispatch(s({queryCacheKey:y})):O.status!==ne.uninitialized&&l.dispatch(i(O,y)))}}})}return u},Oa=new Error("Promise never resolved before cacheEntryRemoved."),Rl=function(t){var e=t.api,r=t.reducerPath,n=t.context,i=t.queryThunk,a=t.mutationThunk;t.internalState;var s=x.isAsyncThunkAction(i),u=x.isAsyncThunkAction(a),o=x.isFulfilled(i,a),l={},f=function(d,E,b){var y=p(d);if(i.pending.match(d)){var O=b[r].queries[y],R=E.getState()[r].queries[y];!O&&R&&m(d.meta.arg.endpointName,d.meta.arg.originalArgs,y,E,d.meta.requestId)}else if(a.pending.match(d)){var R=E.getState()[r].mutations[y];R&&m(d.meta.arg.endpointName,d.meta.arg.originalArgs,y,E,d.meta.requestId)}else if(o(d)){var v=l[y];v!=null&&v.valueResolved&&(v.valueResolved({data:d.payload,meta:d.meta.baseQueryMeta}),delete v.valueResolved)}else if(e.internalActions.removeQueryResult.match(d)||e.internalActions.removeMutationResult.match(d)){var v=l[y];v&&(delete l[y],v.cacheEntryRemoved())}else if(e.util.resetApiState.match(d))for(var _=0,g=Object.entries(l);_<g.length;_++){var h=g[_],I=h[0],v=h[1];delete l[I],v.cacheEntryRemoved()}};function p(d){return s(d)?d.meta.arg.queryCacheKey:u(d)?d.meta.requestId:e.internalActions.removeQueryResult.match(d)?d.payload.queryCacheKey:e.internalActions.removeMutationResult.match(d)?Bt(d.payload):""}function m(d,E,b,y,O){var R=n.endpointDefinitions[d],v=R==null?void 0:R.onCacheEntryAdded;if(v){var _={},g=new Promise(function(A){_.cacheEntryRemoved=A}),h=Promise.race([new Promise(function(A){_.valueResolved=A}),g.then(function(){throw Oa})]);h.catch(function(){}),l[b]=_;var I=e.endpoints[d].select(R.type===De.query?E:b),w=y.dispatch(function(A,C,P){return P}),S=ke(oe({},y),{getCacheEntry:function(){return I(y.getState())},requestId:O,extra:w,updateCachedData:R.type===De.query?function(A){return y.dispatch(e.util.updateQueryData(d,E,A))}:void 0,cacheDataLoaded:h,cacheEntryRemoved:g}),T=v(E,S);Promise.resolve(T).catch(function(A){if(A!==Oa)throw A})}}return f},Ol=function(t){var e=t.api,r=t.context,n=t.queryThunk,i=t.mutationThunk,a=x.isPending(n,i),s=x.isRejected(n,i),u=x.isFulfilled(n,i),o={},l=function(f,p){var m,d,E;if(a(f)){var b=f.meta,y=b.requestId,O=b.arg,R=O.endpointName,v=O.originalArgs,_=r.endpointDefinitions[R],g=_==null?void 0:_.onQueryStarted;if(g){var h={},I=new Promise(function(M,j){h.resolve=M,h.reject=j});I.catch(function(){}),o[y]=h;var w=e.endpoints[R].select(_.type===De.query?v:y),S=p.dispatch(function(M,j,F){return F}),T=ke(oe({},p),{getCacheEntry:function(){return w(p.getState())},requestId:y,extra:S,updateCachedData:_.type===De.query?function(M){return p.dispatch(e.util.updateQueryData(R,v,M))}:void 0,queryFulfilled:I});g(v,T)}}else if(u(f)){var A=f.meta,y=A.requestId,C=A.baseQueryMeta;(m=o[y])==null||m.resolve({data:f.payload,meta:C}),delete o[y]}else if(s(f)){var P=f.meta,y=P.requestId,D=P.rejectedWithValue,C=P.baseQueryMeta;(E=o[y])==null||E.reject({error:(d=f.payload)!=null?d:f.error,isUnhandledError:!D,meta:C}),delete o[y]}};return l},Al=function(t){var e=t.api,r=t.context.apiUid,n=t.reducerPath;return function(i,a){var s,u;e.util.resetApiState.match(i)&&a.dispatch(e.internalActions.middlewareRegistered(r)),typeof process<"u"&&process.env.NODE_ENV==="development"&&e.internalActions.middlewareRegistered.match(i)&&i.payload===r&&((u=(s=a.getState()[n])==null?void 0:s.config)==null?void 0:u.middlewareRegistered)==="conflict"&&console.warn('There is a mismatch between slice and middleware for the reducerPath "'+n+`".
You can only have one api per reducer path, this will lead to crashes in various situations!`+(n==="api"?`
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!`:""))}},Aa,Cl=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis):function(t){return(Aa||(Aa=Promise.resolve())).then(t).catch(function(e){return setTimeout(function(){throw e},0)})},Pl=function(t){var e=t.api,r=t.queryThunk,n=t.internalState,i=e.reducerPath+"/subscriptions",a=null,s=!1,u=e.internalActions,o=u.updateSubscriptionOptions,l=u.unsubscribeQueryResult,f=function(p,m){var d,E,b,y,O,R,v,_,g;if(o.match(m)){var h=m.payload,I=h.queryCacheKey,w=h.requestId,S=h.options;return(d=p==null?void 0:p[I])!=null&&d[w]&&(p[I][w]=S),!0}if(l.match(m)){var T=m.payload,I=T.queryCacheKey,w=T.requestId;return p[I]&&delete p[I][w],!0}if(e.internalActions.removeQueryResult.match(m))return delete p[m.payload.queryCacheKey],!0;if(r.pending.match(m)){var A=m.meta,C=A.arg,w=A.requestId;if(C.subscribe){var P=(b=p[E=C.queryCacheKey])!=null?b:p[E]={};return P[w]=(O=(y=C.subscriptionOptions)!=null?y:P[w])!=null?O:{},!0}}if(r.rejected.match(m)){var D=m.meta,M=D.condition,C=D.arg,w=D.requestId;if(M&&C.subscribe){var P=(v=p[R=C.queryCacheKey])!=null?v:p[R]={};return P[w]=(g=(_=C.subscriptionOptions)!=null?_:P[w])!=null?g:{},!0}}return!1};return function(p,m){var d,E;if(a||(a=JSON.parse(JSON.stringify(n.currentSubscriptions))),e.util.resetApiState.match(p))return a=n.currentSubscriptions={},[!0,!1];if(e.internalActions.internal_probeSubscription.match(p)){var b=p.payload,y=b.queryCacheKey,O=b.requestId,R=!!((d=n.currentSubscriptions[y])!=null&&d[O]);return[!1,R]}var v=f(n.currentSubscriptions,p);if(v){s||(Cl(function(){var I=JSON.parse(JSON.stringify(n.currentSubscriptions)),w=na(a,function(){return I}),S=w[1];m.next(e.internalActions.subscriptionsUpdated(S)),a=I,s=!1}),s=!0);var _=!!((E=p.type)!=null&&E.startsWith(i)),g=r.rejected.match(p)&&p.meta.condition&&!!p.meta.arg.subscribe,h=!_&&!g;return[h,!1]}return[!0,!1]}};function kl(t){var e=t.reducerPath,r=t.queryThunk,n=t.api,i=t.context,a=i.apiUid,s={invalidateTags:x.createAction(e+"/invalidateTags")},u=function(p){return!!p&&typeof p.type=="string"&&p.type.startsWith(e+"/")},o=[Al,El,Tl,wl,Rl,Ol],l=function(p){var m=!1,d={currentSubscriptions:{}},E=ke(oe({},t),{internalState:d,refetchQuery:f}),b=o.map(function(R){return R(E)}),y=Pl(E),O=Sl(E);return function(R){return function(v){m||(m=!0,p.dispatch(n.internalActions.middlewareRegistered(a)));var _=ke(oe({},p),{next:R}),g=p.getState(),h=y(v,_,g),I=h[0],w=h[1],S;if(I?S=R(v):S=w,p.getState()[e]&&(O(v,_,g),u(v)||i.hasRehydrationInfo(v)))for(var T=0,A=b;T<A.length;T++){var C=A[T];C(v,_,g)}return S}}};return{middleware:l,actions:s};function f(p,m,d){return d===void 0&&(d={}),r(oe({type:"query",endpointName:p.endpointName,originalArgs:p.originalArgs,subscribe:!1,forceRefetch:!0,queryCacheKey:m},d))}}function $e(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];Object.assign.apply(Object,fr([t],e))}var Ca=Symbol(),Dl=function(){return{name:Ca,init:function(t,e,r){var n=e.baseQuery,i=e.tagTypes,a=e.reducerPath,s=e.serializeQueryArgs,u=e.keepUnusedDataFor,o=e.refetchOnMountOrArgChange,l=e.refetchOnFocus,f=e.refetchOnReconnect;Vc();var p=function(H){return typeof process<"u"&&process.env.NODE_ENV==="development"&&(i.includes(H.type)||console.error("Tag type '"+H.type+"' was used, but not specified in `tagTypes`!")),H};Object.assign(t,{reducerPath:a,endpoints:{},internalActions:{onOnline:ln,onOffline:ma,onFocus:cn,onFocusLost:ga},util:{}});var m=gl({baseQuery:n,reducerPath:a,context:r,api:t,serializeQueryArgs:s}),d=m.queryThunk,E=m.mutationThunk,b=m.patchQueryData,y=m.updateQueryData,O=m.upsertQueryData,R=m.prefetch,v=m.buildMatchThunkActions,_=ml({context:r,queryThunk:d,mutationThunk:E,reducerPath:a,assertTagType:p,config:{refetchOnFocus:l,refetchOnReconnect:f,refetchOnMountOrArgChange:o,keepUnusedDataFor:u,reducerPath:a}}),g=_.reducer,h=_.actions;$e(t.util,{patchQueryData:b,updateQueryData:y,upsertQueryData:O,prefetch:R,resetApiState:h.resetApiState}),$e(t.internalActions,h);var I=kl({reducerPath:a,context:r,queryThunk:d,mutationThunk:E,api:t,assertTagType:p}),w=I.middleware,S=I.actions;$e(t.util,S),$e(t,{reducer:g,middleware:w});var T=yl({serializeQueryArgs:s,reducerPath:a}),A=T.buildQuerySelector,C=T.buildMutationSelector,P=T.selectInvalidatedBy;$e(t.util,{selectInvalidatedBy:P});var D=vl({queryThunk:d,mutationThunk:E,api:t,serializeQueryArgs:s,context:r}),M=D.buildInitiateQuery,j=D.buildInitiateMutation,F=D.getRunningMutationThunk,U=D.getRunningMutationsThunk,z=D.getRunningQueriesThunk,$=D.getRunningQueryThunk,W=D.getRunningOperationPromises,J=D.removalWarning;return $e(t.util,{getRunningOperationPromises:W,getRunningOperationPromise:J,getRunningMutationThunk:F,getRunningMutationsThunk:U,getRunningQueryThunk:$,getRunningQueriesThunk:z}),{name:Ca,injectEndpoint:function(H,Y){var Q,X,ie=t;(X=(Q=ie.endpoints)[H])!=null||(Q[H]={}),ya(Y)?$e(ie.endpoints[H],{name:H,select:A(H,Y),initiate:M(H,Y)},v(d,H)):hl(Y)&&$e(ie.endpoints[H],{name:H,select:C(),initiate:j(H)},v(E,H))}}}}},Nl=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t},Ml=Object.defineProperty,xl=Object.defineProperties,Ll=Object.getOwnPropertyDescriptors,Pa=Object.getOwnPropertySymbols,Fl=Object.prototype.hasOwnProperty,Ul=Object.prototype.propertyIsEnumerable,ka=function(t,e,r){return e in t?Ml(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},Be=function(t,e){for(var r in e||(e={}))Fl.call(e,r)&&ka(t,r,e[r]);if(Pa)for(var n=0,i=Pa(e);n<i.length;n++){var r=i[n];Ul.call(e,r)&&ka(t,r,e[r])}return t},mr=function(t,e){return xl(t,Ll(e))};function Da(t,e,r,n){var i=V.useMemo(function(){return{queryArgs:t,serialized:typeof t=="object"?e({queryArgs:t,endpointDefinition:r,endpointName:n}):t}},[t,e,r,n]),a=V.useRef(i);return V.useEffect(function(){a.current.serialized!==i.serialized&&(a.current=i)},[i]),a.current.serialized===i.serialized?a.current.queryArgs:t}var pn=Symbol();function vn(t){var e=V.useRef(t);return V.useEffect(function(){Ne.shallowEqual(e.current,t)||(e.current=t)},[t]),Ne.shallowEqual(e.current,t)?e.current:t}var yr=WeakMap?new WeakMap:void 0,jl=function(t){var e=t.endpointName,r=t.queryArgs,n="",i=yr==null?void 0:yr.get(r);if(typeof i=="string")n=i;else{var a=JSON.stringify(r,function(s,u){return x.isPlainObject(u)?Object.keys(u).sort().reduce(function(o,l){return o[l]=u[l],o},{}):u});x.isPlainObject(r)&&(yr==null||yr.set(r,a)),n=a}return e+"("+n+")"},Bl=typeof window<"u"&&window.document&&window.document.createElement?V.useLayoutEffect:V.useEffect,ql=function(t){return t},Hl=function(t){return t.isUninitialized?mr(Be({},t),{isUninitialized:!1,isFetching:!0,isLoading:t.data===void 0,status:ne.pending}):t};function Vl(t){var e=t.api,r=t.moduleOptions,n=r.batch,i=r.useDispatch,a=r.useSelector,s=r.useStore,u=r.unstable__sideEffectsInRender,o=t.serializeQueryArgs,l=t.context,f=u?function(b){return b()}:V.useEffect;return{buildQueryHooks:d,buildMutationHook:E,usePrefetch:m};function p(b,y,O){if(y!=null&&y.endpointName&&b.isUninitialized){var R=y.endpointName,v=l.endpointDefinitions[R];o({queryArgs:y.originalArgs,endpointDefinition:v,endpointName:R})===o({queryArgs:O,endpointDefinition:v,endpointName:R})&&(y=void 0)}var _=b.isSuccess?b.data:y==null?void 0:y.data;_===void 0&&(_=b.data);var g=_!==void 0,h=b.isLoading,I=!g&&h,w=b.isSuccess||h&&g;return mr(Be({},b),{data:_,currentData:b.data,isFetching:h,isLoading:I,isSuccess:w})}function m(b,y){var O=i(),R=vn(y);return V.useCallback(function(v,_){return O(e.util.prefetch(b,v,Be(Be({},R),_)))},[b,O,R])}function d(b){var y=function(v,_){var g=_===void 0?{}:_,h=g.refetchOnReconnect,I=g.refetchOnFocus,w=g.refetchOnMountOrArgChange,S=g.skip,T=S===void 0?!1:S,A=g.pollingInterval,C=A===void 0?0:A,P=e.endpoints[b].initiate,D=i(),M=Da(T?nt:v,jl,l.endpointDefinitions[b],b),j=vn({refetchOnReconnect:h,refetchOnFocus:I,pollingInterval:C}),F=V.useRef(!1),U=V.useRef(),z=U.current||{},$=z.queryCacheKey,W=z.requestId,J=!1;if($&&W){var H=D(e.internalActions.internal_probeSubscription({queryCacheKey:$,requestId:W}));if(process.env.NODE_ENV!=="production"&&typeof H!="boolean")throw new Error('Warning: Middleware for RTK-Query API at reducerPath "'+e.reducerPath+`" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);J=!!H}var Y=!J&&F.current;return f(function(){F.current=J}),f(function(){Y&&(U.current=void 0)},[Y]),f(function(){var Q,X=U.current;if(typeof process<"u"&&process.env.NODE_ENV==="removeMeOnCompilation"&&console.log(Y),M===nt){X==null||X.unsubscribe(),U.current=void 0;return}var ie=(Q=U.current)==null?void 0:Q.subscriptionOptions;if(!X||X.arg!==M){X==null||X.unsubscribe();var pe=D(P(M,{subscriptionOptions:j,forceRefetch:w}));U.current=pe}else j!==ie&&X.updateSubscriptionOptions(j)},[D,P,w,M,j,Y]),V.useEffect(function(){return function(){var Q;(Q=U.current)==null||Q.unsubscribe(),U.current=void 0}},[]),V.useMemo(function(){return{refetch:function(){var Q;if(!U.current)throw new Error("Cannot refetch a query that has not been started yet.");return(Q=U.current)==null?void 0:Q.refetch()}}},[])},O=function(v){var _=v===void 0?{}:v,g=_.refetchOnReconnect,h=_.refetchOnFocus,I=_.pollingInterval,w=I===void 0?0:I,S=e.endpoints[b].initiate,T=i(),A=V.useState(pn),C=A[0],P=A[1],D=V.useRef(),M=vn({refetchOnReconnect:g,refetchOnFocus:h,pollingInterval:w});f(function(){var U,z,$=(U=D.current)==null?void 0:U.subscriptionOptions;M!==$&&((z=D.current)==null||z.updateSubscriptionOptions(M))},[M]);var j=V.useRef(M);f(function(){j.current=M},[M]);var F=V.useCallback(function(U,z){z===void 0&&(z=!1);var $;return n(function(){var W;(W=D.current)==null||W.unsubscribe(),D.current=$=T(S(U,{subscriptionOptions:j.current,forceRefetch:!z})),P(U)}),$},[T,S]);return V.useEffect(function(){return function(){var U;(U=D==null?void 0:D.current)==null||U.unsubscribe()}},[]),V.useEffect(function(){C!==pn&&!D.current&&F(C,!0)},[C,F]),V.useMemo(function(){return[F,C]},[F,C])},R=function(v,_){var g=_===void 0?{}:_,h=g.skip,I=h===void 0?!1:h,w=g.selectFromResult,S=e.endpoints[b].select,T=Da(I?nt:v,o,l.endpointDefinitions[b],b),A=V.useRef(),C=V.useMemo(function(){return x.createSelector([S(T),function(F,U){return U},function(F){return T}],p)},[S,T]),P=V.useMemo(function(){return w?x.createSelector([C],w):C},[C,w]),D=a(function(F){return P(F,A.current)},Ne.shallowEqual),M=s(),j=C(M.getState(),A.current);return Bl(function(){A.current=j},[j]),D};return{useQueryState:R,useQuerySubscription:y,useLazyQuerySubscription:O,useLazyQuery:function(v){var _=O(v),g=_[0],h=_[1],I=R(h,mr(Be({},v),{skip:h===pn})),w=V.useMemo(function(){return{lastArg:h}},[h]);return V.useMemo(function(){return[g,I,w]},[g,I,w])},useQuery:function(v,_){var g=y(v,_),h=R(v,Be({selectFromResult:v===nt||_!=null&&_.skip?void 0:Hl},_)),I=h.data,w=h.status,S=h.isLoading,T=h.isSuccess,A=h.isError,C=h.error;return V.useDebugValue({data:I,status:w,isLoading:S,isSuccess:T,isError:A,error:C}),V.useMemo(function(){return Be(Be({},h),g)},[h,g])}}}function E(b){return function(y){var O=y===void 0?{}:y,R=O.selectFromResult,v=R===void 0?ql:R,_=O.fixedCacheKey,g=e.endpoints[b],h=g.select,I=g.initiate,w=i(),S=V.useState(),T=S[0],A=S[1];V.useEffect(function(){return function(){T!=null&&T.arg.fixedCacheKey||T==null||T.reset()}},[T]);var C=V.useCallback(function(X){var ie=w(I(X,{fixedCacheKey:_}));return A(ie),ie},[w,I,_]),P=(T||{}).requestId,D=V.useMemo(function(){return x.createSelector([h({fixedCacheKey:_,requestId:T==null?void 0:T.requestId})],v)},[h,T,v,_]),M=a(D,Ne.shallowEqual),j=_==null?T==null?void 0:T.arg.originalArgs:void 0,F=V.useCallback(function(){n(function(){T&&A(void 0),_&&w(e.internalActions.removeMutationResult({requestId:P,fixedCacheKey:_}))})},[w,_,T,P]),U=M.endpointName,z=M.data,$=M.status,W=M.isLoading,J=M.isSuccess,H=M.isError,Y=M.error;V.useDebugValue({endpointName:U,data:z,status:$,isLoading:W,isSuccess:J,isError:H,error:Y});var Q=V.useMemo(function(){return mr(Be({},M),{originalArgs:j,reset:F})},[M,j,F]);return V.useMemo(function(){return[C,Q]},[C,Q])}}}var br;(function(t){t.query="query",t.mutation="mutation"})(br||(br={}));function zl(t){return t.type===br.query}function Wl(t){return t.type===br.mutation}function gn(t){return t.replace(t[0],t[0].toUpperCase())}function _r(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];Object.assign.apply(Object,Nl([t],e))}var Ql=Symbol(),Kl=function(t){var e=t===void 0?{}:t,r=e.batch,n=r===void 0?Ne.batch:r,i=e.useDispatch,a=i===void 0?Ne.useDispatch:i,s=e.useSelector,u=s===void 0?Ne.useSelector:s,o=e.useStore,l=o===void 0?Ne.useStore:o,f=e.unstable__sideEffectsInRender,p=f===void 0?!1:f;return{name:Ql,init:function(m,d,E){var b=d.serializeQueryArgs,y=m,O=Vl({api:m,moduleOptions:{batch:n,useDispatch:a,useSelector:u,useStore:l,unstable__sideEffectsInRender:p},serializeQueryArgs:b,context:E}),R=O.buildQueryHooks,v=O.buildMutationHook,_=O.usePrefetch;return _r(y,{usePrefetch:_}),_r(E,{batch:n}),{injectEndpoint:function(g,h){if(zl(h)){var I=R(g),w=I.useQuery,S=I.useLazyQuery,T=I.useLazyQuerySubscription,A=I.useQueryState,C=I.useQuerySubscription;_r(y.endpoints[g],{useQuery:w,useLazyQuery:S,useLazyQuerySubscription:T,useQueryState:A,useQuerySubscription:C}),m["use"+gn(g)+"Query"]=w,m["useLazy"+gn(g)+"Query"]=S}else if(Wl(h)){var P=v(g);_r(y.endpoints[g],{useMutation:P}),m["use"+gn(g)+"Mutation"]=P}}}}}},$l=bl(Dl(),Kl());const it=$l({baseQuery:fl({baseUrl:se.endpoint,prepareHeaders:(t,{getState:e,endpoint:r})=>{const{isAuthenticated:n,refresh_token:i}=e().userReducer;return n&&i&&r==="updateLogin"&&t.set(se.refreshTokenHeader,se.keywoardRefreshTokenHeader?`${se.keywoardRefreshTokenHeader} ${i}`:i),t.set("Content-Type","application/json")}}),endpoints:t=>({login:t.mutation({query({email:e,encodedBody:r,password:n,username:i,token:a}){if(a)return{url:"",method:"POST",headers:{Authorization:`${se.keywoard} ${a}`}};if(r)return{url:se.urlForBase64??"",method:"POST",headers:{authorization:"Basic "+r}};let s={};return n&&(s={...s,password:n}),e&&(s={...s,email:e}),i&&(s={...s,username:i}),{url:se.urlForEmailOrUser??"",method:"POST",body:s}}}),updateLogin:t.mutation({query(){return{url:se.urlForRefreshToken??"login/update",method:"PUT"}}})})}),{useLoginMutation:Gl,useUpdateLoginMutation:Jl}=it,Yl=t=>Mt(xt(),$i).catch(e=>{console.log(e);const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),Xl=t=>Mt(xt(),Ki).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),Zl=t=>Mt(xt(),Mc).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),ed=t=>Mt(xt(),xc).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),td=t=>Mt(xt(),Lc).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),rd=(t,e)=>{const[r]=Gl(),[n]=Jl(),i=He.useSignal({email:"",username:"",password:""}),a=He.useSignal(!1),s=He.useSignal(!1),u=He.useSignal(!1),o=He.useSignal({}),l=()=>{He.batch(()=>{a.value=!a.value,s.value&&(s.value=!s.value)})},f=E=>{const{name:b,value:y}=E.target;i.value={...i.value,[b]:y}},p=E=>{if(E.preventDefault(),se.hasToS&&!a.value){s.value=!0;return}if(u.value)return;u.value=!0;let b={};if(se.acceptUsername?b={username:i.value.username,password:i.value.password}:b={email:i.value.email,password:i.value.password},se.bodyAsBase64){const y=Object.entries(b).map(([R,v])=>`${R}=${v}`).join("&");b={encodedBody:btoa(y)}}r(b),u.value=!1},m=async E=>{r({token:E}).unwrap().then(b=>{t(async(y,O,R)=>{O&&(clearInterval(O),O=void 0),O=setInterval(()=>{n().unwrap().then(v=>y.value=v).catch(v=>{clearInterval(O),"data"in v?R.value={code:"auth/firebase-credential-not-provided",message:v.data&&(Object.values(v.data).find(_=>typeof _=="string")??v.data)}:"status"in v&&(R.value={code:"auth/fetch-failed",message:"error"in v?v.error:"Unexpected Error"})})},b.expiry*1e3-200),y.value=b}),typeof e=="function"?e(y=>!y):e.value=!e.value}).catch(b=>{"data"in b?o.value={code:"auth/firebase-credential-not-provided",message:b.data&&(Object.values(b.data).find(y=>typeof y=="string")??b.data)}:"status"in b&&(o.value={code:"auth/fetch-failed",message:"error"in b?b.error:"Unexpected Error"})})};return{form:i,radio:a,isLoading:u,handleError:o,confirmTp:s,handleChange:f,handlerRadio:l,handleSocialLogin:async(E,b)=>{if(E.preventDefault(),se.hasToS&&!a.value){s.value=!0;return}if(!u.value){switch(u.value=!0,b){case Tn:await Xl(o).then(async y=>{y&&(Re.credentialFromResult(y)===null&&(o.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),y.user.getIdToken().then(m))});break;case wn:await Yl(o).then(async y=>{y&&(Se.credentialFromResult(y)===null&&(o.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),y.user.getIdToken().then(m))});break;case Sn:await Zl(o).then(async y=>{y&&(Ae.credentialFromResult(y)===null&&(o.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),y.user.getIdToken().then(m))});break;case Rn:await ed(o).then(async y=>{y&&(Oe.credentialFromResult(y)===null&&(o.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),y.user.getIdToken().then(m))});break;case On:await td(o).then(async y=>{y&&(ht.credentialFromResult(y)===null&&(o.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),y.user.getIdToken().then(m))});break}u.value=!1}},handleSubmit:p}},nd=({isOpen:t,message:e,authManager:r})=>{const{form:n,radio:i,confirmTp:a,isLoading:s,handleError:u,handleSubmit:o,handleChange:l,handlerRadio:f,handleSocialLogin:p}=rd(r,t);return L.jsx(Ka,{title:"Log In",closeAction:t,message:s.value?L.jsx($a,{}):e,children:L.jsxs("div",{className:"login-container",children:[L.jsxs("div",{className:"login",children:[L.jsxs("div",{children:[es(se.signInMethods).map(({className:m,name:d,constName:E,icon:b},y)=>L.jsxs("button",{onClick:O=>p(O,E),className:m,children:[b&&b,d]},y)),u.value.message&&L.jsx("span",{className:"notify error",children:se.firebaseErrorMessages?Ga(se.firebaseErrorMessages,u.value):u.value.message})]}),L.jsx("div",{children:L.jsxs("form",{className:"email",onSubmit:o,children:[se.acceptUsername?L.jsx(L.Fragment,{children:L.jsx("input",{placeholder:"Email | Username",required:!0,name:"username",onChange:l,value:n.value.username,type:"text"})}):L.jsx(L.Fragment,{children:L.jsx("input",{placeholder:"Email",required:!0,name:"email",onChange:l,value:n.value.email,type:"email"})}),L.jsx("input",{placeholder:"Password",required:!0,name:"password",onChange:l,value:n.value.password,type:"password"}),L.jsx("button",{type:"submit",className:"email-login",children:"Continuar"})]})})]}),se.hasToS&&L.jsxs(L.Fragment,{children:[L.jsxs("label",{className:"login-accept",children:[L.jsx("input",{onChange:f,type:"checkbox",checked:i.value}),se.hasToS.label]}),a.value&&L.jsx("span",{autoFocus:!0,className:"notify error",children:se.hasToS.errorLabel})]})]})})},Na={user:null,isAuthenticated:!1,expiry:void 0,refresh_token:void 0,token:void 0},id=x.createSlice({name:"UserSlice",initialState:Na,reducers:{},extraReducers(t){t.addMatcher(it.endpoints.login.matchFulfilled,(e,r)=>(e={...r.payload,isAuthenticated:!0},e)).addMatcher(it.endpoints.updateLogin.matchFulfilled,(e,r)=>(e={...r.payload,isAuthenticated:!0},e)).addMatcher(it.endpoints.updateLogin.matchRejected,e=>(e=Na,e))}}),{reducer:ad}=id,sd=x.combineReducers({userReducer:ad,[it.reducerPath]:it.reducer}),od=x.configureStore({reducer:sd,middleware:t=>t().concat(it.middleware)}),ud=({isOpen:t,message:e,authManager:r})=>Nc()?L.jsx(Ne.Provider,{store:od,children:L.jsx(nd,{isOpen:t,authManager:r,message:e})}):L.jsx("div",{children:"Error: Missing firebaseConfig in setConfig"});ye.Auth=ud,ye.setConfig=ts,ye.useAuth=rs,Object.defineProperty(ye,Symbol.toStringTag,{value:"Module"})});
