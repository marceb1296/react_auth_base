(function(ye,H){typeof exports=="object"&&typeof module<"u"?H(exports,require("react"),require("@preact/signals-react"),require("@reduxjs/toolkit"),require("react-redux")):typeof define=="function"&&define.amd?define(["exports","react","@preact/signals-react","@reduxjs/toolkit","react-redux"],H):(ye=typeof globalThis<"u"?globalThis:ye||self,H(ye.react_auth_base={},ye.React,ye.SignalsReact,ye.ReduxToolkit,ye.ReactRedux))})(this,function(ye,H,Te,x,Me){"use strict";var Er={exports:{}},It={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var In;function Qa(){if(In)return It;In=1;var t=H,e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(u,o,l){var f,p={},y=null,d=null;l!==void 0&&(y=""+l),o.key!==void 0&&(y=""+o.key),o.ref!==void 0&&(d=o.ref);for(f in o)n.call(o,f)&&!a.hasOwnProperty(f)&&(p[f]=o[f]);if(u&&u.defaultProps)for(f in o=u.defaultProps,o)p[f]===void 0&&(p[f]=o[f]);return{$$typeof:e,type:u,key:y,ref:d,props:p,_owner:i.current}}return It.Fragment=r,It.jsx=s,It.jsxs=s,It}var Et={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var En;function Ka(){return En||(En=1,process.env.NODE_ENV!=="production"&&function(){var t=H,e=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),o=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),d=Symbol.for("react.offscreen"),E=Symbol.iterator,T="@@iterator";function _(c){if(c===null||typeof c!="object")return null;var k=E&&c[E]||c[T];return typeof k=="function"?k:null}var b=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function w(c){{for(var k=arguments.length,N=new Array(k>1?k-1:0),q=1;q<k;q++)N[q-1]=arguments[q];v("error",c,N)}}function v(c,k,N){{var q=b.ReactDebugCurrentFrame,Z=q.getStackAddendum();Z!==""&&(k+="%s",N=N.concat([Z]));var re=N.map(function(G){return String(G)});re.unshift("Warning: "+k),Function.prototype.apply.call(console[c],console,re)}}var m=!1,g=!1,h=!1,I=!1,R=!1,O;O=Symbol.for("react.module.reference");function S(c){return!!(typeof c=="string"||typeof c=="function"||c===n||c===a||R||c===i||c===l||c===f||I||c===d||m||g||h||typeof c=="object"&&c!==null&&(c.$$typeof===y||c.$$typeof===p||c.$$typeof===s||c.$$typeof===u||c.$$typeof===o||c.$$typeof===O||c.getModuleId!==void 0))}function A(c,k,N){var q=c.displayName;if(q)return q;var Z=k.displayName||k.name||"";return Z!==""?N+"("+Z+")":N}function C(c){return c.displayName||"Context"}function P(c){if(c==null)return null;if(typeof c.tag=="number"&&w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof c=="function")return c.displayName||c.name||null;if(typeof c=="string")return c;switch(c){case n:return"Fragment";case r:return"Portal";case a:return"Profiler";case i:return"StrictMode";case l:return"Suspense";case f:return"SuspenseList"}if(typeof c=="object")switch(c.$$typeof){case u:var k=c;return C(k)+".Consumer";case s:var N=c;return C(N._context)+".Provider";case o:return A(c,c.render,"ForwardRef");case p:var q=c.displayName||null;return q!==null?q:P(c.type)||"Memo";case y:{var Z=c,re=Z._payload,G=Z._init;try{return P(G(re))}catch{return null}}}return null}var D=Object.assign,M=0,j,F,U,z,$,W,J;function V(){}V.__reactDisabledLog=!0;function Y(){{if(M===0){j=console.log,F=console.info,U=console.warn,z=console.error,$=console.group,W=console.groupCollapsed,J=console.groupEnd;var c={configurable:!0,enumerable:!0,value:V,writable:!0};Object.defineProperties(console,{info:c,log:c,warn:c,error:c,group:c,groupCollapsed:c,groupEnd:c})}M++}}function Q(){{if(M--,M===0){var c={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:D({},c,{value:j}),info:D({},c,{value:F}),warn:D({},c,{value:U}),error:D({},c,{value:z}),group:D({},c,{value:$}),groupCollapsed:D({},c,{value:W}),groupEnd:D({},c,{value:J})})}M<0&&w("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var X=b.ReactCurrentDispatcher,ie;function pe(c,k,N){{if(ie===void 0)try{throw Error()}catch(Z){var q=Z.stack.trim().match(/\n( *(at )?)/);ie=q&&q[1]||""}return`
`+ie+c}}var be=!1,ve;{var _e=typeof WeakMap=="function"?WeakMap:Map;ve=new _e}function te(c,k){if(!c||be)return"";{var N=ve.get(c);if(N!==void 0)return N}var q;be=!0;var Z=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var re;re=X.current,X.current=null,Y();try{if(k){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(He){q=He}Reflect.construct(c,[],G)}else{try{G.call()}catch(He){q=He}c.call(G.prototype)}}else{try{throw Error()}catch(He){q=He}c()}}catch(He){if(He&&q&&typeof He.stack=="string"){for(var K=He.stack.split(`
`),fe=q.stack.split(`
`),ue=K.length-1,ce=fe.length-1;ue>=1&&ce>=0&&K[ue]!==fe[ce];)ce--;for(;ue>=1&&ce>=0;ue--,ce--)if(K[ue]!==fe[ce]){if(ue!==1||ce!==1)do if(ue--,ce--,ce<0||K[ue]!==fe[ce]){var Ee=`
`+K[ue].replace(" at new "," at ");return c.displayName&&Ee.includes("<anonymous>")&&(Ee=Ee.replace("<anonymous>",c.displayName)),typeof c=="function"&&ve.set(c,Ee),Ee}while(ue>=1&&ce>=0);break}}}finally{be=!1,X.current=re,Q(),Error.prepareStackTrace=Z}var _t=c?c.displayName||c.name:"",Wa=_t?pe(_t):"";return typeof c=="function"&&ve.set(c,Wa),Wa}function de(c,k,N){return te(c,!1)}function Ye(c){var k=c.prototype;return!!(k&&k.isReactComponent)}function ot(c,k,N){if(c==null)return"";if(typeof c=="function")return te(c,Ye(c));if(typeof c=="string")return pe(c);switch(c){case l:return pe("Suspense");case f:return pe("SuspenseList")}if(typeof c=="object")switch(c.$$typeof){case o:return de(c.render);case p:return ot(c.type,k,N);case y:{var q=c,Z=q._payload,re=q._init;try{return ot(re(Z),k,N)}catch{}}}return""}var Xe=Object.prototype.hasOwnProperty,ut={},yt=b.ReactDebugCurrentFrame;function Ze(c){if(c){var k=c._owner,N=ot(c.type,c._source,k?k.type:null);yt.setExtraStackFrame(N)}else yt.setExtraStackFrame(null)}function Ir(c,k,N,q,Z){{var re=Function.call.bind(Xe);for(var G in c)if(re(c,G)){var K=void 0;try{if(typeof c[G]!="function"){var fe=Error((q||"React class")+": "+N+" type `"+G+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof c[G]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw fe.name="Invariant Violation",fe}K=c[G](k,G,q,N,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(ue){K=ue}K&&!(K instanceof Error)&&(Ze(Z),w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",q||"React class",N,G,typeof K),Ze(null)),K instanceof Error&&!(K.message in ut)&&(ut[K.message]=!0,Ze(Z),w("Failed %s type: %s",N,K.message),Ze(null))}}}var Ie=Array.isArray;function ge(c){return Ie(c)}function vd(c){{var k=typeof Symbol=="function"&&Symbol.toStringTag,N=k&&c[Symbol.toStringTag]||c.constructor.name||"Object";return N}}function gd(c){try{return xa(c),!1}catch{return!0}}function xa(c){return""+c}function La(c){if(gd(c))return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",vd(c)),xa(c)}var Ht=b.ReactCurrentOwner,md={key:!0,ref:!0,__self:!0,__source:!0},Fa,Ua,mn;mn={};function yd(c){if(Xe.call(c,"ref")){var k=Object.getOwnPropertyDescriptor(c,"ref").get;if(k&&k.isReactWarning)return!1}return c.ref!==void 0}function bd(c){if(Xe.call(c,"key")){var k=Object.getOwnPropertyDescriptor(c,"key").get;if(k&&k.isReactWarning)return!1}return c.key!==void 0}function _d(c,k){if(typeof c.ref=="string"&&Ht.current&&k&&Ht.current.stateNode!==k){var N=P(Ht.current.type);mn[N]||(w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',P(Ht.current.type),c.ref),mn[N]=!0)}}function Id(c,k){{var N=function(){Fa||(Fa=!0,w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",k))};N.isReactWarning=!0,Object.defineProperty(c,"key",{get:N,configurable:!0})}}function Ed(c,k){{var N=function(){Ua||(Ua=!0,w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",k))};N.isReactWarning=!0,Object.defineProperty(c,"ref",{get:N,configurable:!0})}}var Td=function(c,k,N,q,Z,re,G){var K={$$typeof:e,type:c,key:k,ref:N,props:G,_owner:re};return K._store={},Object.defineProperty(K._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(K,"_self",{configurable:!1,enumerable:!1,writable:!1,value:q}),Object.defineProperty(K,"_source",{configurable:!1,enumerable:!1,writable:!1,value:Z}),Object.freeze&&(Object.freeze(K.props),Object.freeze(K)),K};function wd(c,k,N,q,Z){{var re,G={},K=null,fe=null;N!==void 0&&(La(N),K=""+N),bd(k)&&(La(k.key),K=""+k.key),yd(k)&&(fe=k.ref,_d(k,Z));for(re in k)Xe.call(k,re)&&!md.hasOwnProperty(re)&&(G[re]=k[re]);if(c&&c.defaultProps){var ue=c.defaultProps;for(re in ue)G[re]===void 0&&(G[re]=ue[re])}if(K||fe){var ce=typeof c=="function"?c.displayName||c.name||"Unknown":c;K&&Id(G,ce),fe&&Ed(G,ce)}return Td(c,K,fe,Z,q,Ht.current,G)}}var yn=b.ReactCurrentOwner,ja=b.ReactDebugCurrentFrame;function bt(c){if(c){var k=c._owner,N=ot(c.type,c._source,k?k.type:null);ja.setExtraStackFrame(N)}else ja.setExtraStackFrame(null)}var bn;bn=!1;function _n(c){return typeof c=="object"&&c!==null&&c.$$typeof===e}function Ba(){{if(yn.current){var c=P(yn.current.type);if(c)return`

Check the render method of \``+c+"`."}return""}}function Sd(c){{if(c!==void 0){var k=c.fileName.replace(/^.*[\\\/]/,""),N=c.lineNumber;return`

Check your code at `+k+":"+N+"."}return""}}var qa={};function Rd(c){{var k=Ba();if(!k){var N=typeof c=="string"?c:c.displayName||c.name;N&&(k=`

Check the top-level render call using <`+N+">.")}return k}}function Ha(c,k){{if(!c._store||c._store.validated||c.key!=null)return;c._store.validated=!0;var N=Rd(k);if(qa[N])return;qa[N]=!0;var q="";c&&c._owner&&c._owner!==yn.current&&(q=" It was passed a child from "+P(c._owner.type)+"."),bt(c),w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',N,q),bt(null)}}function Va(c,k){{if(typeof c!="object")return;if(ge(c))for(var N=0;N<c.length;N++){var q=c[N];_n(q)&&Ha(q,k)}else if(_n(c))c._store&&(c._store.validated=!0);else if(c){var Z=_(c);if(typeof Z=="function"&&Z!==c.entries)for(var re=Z.call(c),G;!(G=re.next()).done;)_n(G.value)&&Ha(G.value,k)}}}function Od(c){{var k=c.type;if(k==null||typeof k=="string")return;var N;if(typeof k=="function")N=k.propTypes;else if(typeof k=="object"&&(k.$$typeof===o||k.$$typeof===p))N=k.propTypes;else return;if(N){var q=P(k);Ir(N,c.props,"prop",q,c)}else if(k.PropTypes!==void 0&&!bn){bn=!0;var Z=P(k);w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",Z||"Unknown")}typeof k.getDefaultProps=="function"&&!k.getDefaultProps.isReactClassApproved&&w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ad(c){{for(var k=Object.keys(c.props),N=0;N<k.length;N++){var q=k[N];if(q!=="children"&&q!=="key"){bt(c),w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",q),bt(null);break}}c.ref!==null&&(bt(c),w("Invalid attribute `ref` supplied to `React.Fragment`."),bt(null))}}function za(c,k,N,q,Z,re){{var G=S(c);if(!G){var K="";(c===void 0||typeof c=="object"&&c!==null&&Object.keys(c).length===0)&&(K+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var fe=Sd(Z);fe?K+=fe:K+=Ba();var ue;c===null?ue="null":ge(c)?ue="array":c!==void 0&&c.$$typeof===e?(ue="<"+(P(c.type)||"Unknown")+" />",K=" Did you accidentally export a JSX literal instead of a component?"):ue=typeof c,w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",ue,K)}var ce=wd(c,k,N,Z,re);if(ce==null)return ce;if(G){var Ee=k.children;if(Ee!==void 0)if(q)if(ge(Ee)){for(var _t=0;_t<Ee.length;_t++)Va(Ee[_t],c);Object.freeze&&Object.freeze(Ee)}else w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Va(Ee,c)}return c===n?Ad(ce):Od(ce),ce}}function Cd(c,k,N){return za(c,k,N,!0)}function Pd(c,k,N){return za(c,k,N,!1)}var kd=Pd,Dd=Cd;Et.Fragment=n,Et.jsx=kd,Et.jsxs=Dd}()),Et}process.env.NODE_ENV==="production"?Er.exports=Qa():Er.exports=Ka();var L=Er.exports;const Nd="",$a=({children:t,closeAction:e,title:r,message:n})=>L.jsx("div",{className:"modal-container",children:L.jsxs("div",{className:"modal-data",children:[e&&L.jsx("button",{onClick:()=>typeof e=="function"?e(i=>!i):e.value=!e.value,className:"modal-close",children:"X"}),L.jsx("div",{className:"space modal-title",children:L.jsx("label",{children:r})}),L.jsx("div",{className:"space modal-message",children:typeof n=="string"?L.jsx("label",{children:n}):n}),L.jsx("div",{className:"space modal-footer",children:t})]})}),Md="",Ga=()=>L.jsx("div",{className:"loader-container",children:L.jsxs("div",{className:"loader-box",children:[L.jsx("div",{className:"load blue"}),L.jsx("div",{className:"load red"}),L.jsx("div",{className:"load orange"}),L.jsx("div",{className:"load yellow"}),L.jsx("div",{className:"load green"})]})}),xd="",Ja=(t,e)=>{var r;return((r=t.find(n=>n.code==="*"?!0:n.code===e.code))==null?void 0:r.message)??e.message},Tn="IS_GOOGLE",wn="IS_FACEBOOK",Sn="IS_TWITTER",Rn="IS_GITHUB",On="IS_MICROSOFT",Ya=()=>L.jsx("svg",{width:"98",height:"96",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 98 96",children:L.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",fill:"#fff"})}),Xa=()=>L.jsx("svg",{version:"1.1",id:"Logo",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 248 204",xmlSpace:"preserve",children:L.jsx("g",{id:"Logo_1_",children:L.jsx("path",{id:"white_background",fill:"#FFFFFF",d:`M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
                    C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
                    c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
                    c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
                    c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
                    c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z`})})}),Za=()=>L.jsxs("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 40 40",xmlSpace:"preserve",children:[L.jsx("path",{fill:"#1877F2",d:"M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z"}),L.jsx("path",{fill:"#FFFFFF",d:`M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20
            h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z`})]}),es=[{method:"google",constName:Tn,name:"Google",className:"google-btn"},{method:"facebook",constName:wn,name:"Facebook",className:"facebook-btn",icon:L.jsx(Za,{})},{method:"twitter",constName:Sn,name:"Twitter",className:"twitter-btn",icon:L.jsx(Xa,{})},{method:"github",constName:Rn,name:"GitHub",className:"github-btn",icon:L.jsx(Ya,{})},{method:"microsoft",constName:On,name:"Microsoft",className:"microsoft-btn"}],ts=t=>es.filter(e=>t.find(r=>e.method===r)),rs={es:{logIn:"Iniciar sesion",username:"Usuario",password:"Contraseña",continue:"Continuar",continueAs:"Continuar como:",logguedWith:"Logueado con",logOut:"Desloguearse"},en:{logIn:"Log In",username:"Username",password:"Password",continue:"Continue",continueAs:"Continue as:",logguedWith:"Loggued with",logOut:"Log Out"}},ns=t=>rs[t],An={languaje:"en",firebaseConfig:{},endpoint:"http://127.0.0.1:8000/api/auth/",keywoard:"TSESSION",refreshTokenHeader:"Authorization",acceptUsername:!1,bodyAsBase64:!1,signInMethods:["google"]};let ae={...An};const is=t=>{ae={...An,...t}},as=()=>{const t=Te.useSignal(void 0),e=Te.useSignal(void 0),r=Te.useSignal(void 0);let n=H.useRef(void 0);const i=H.useCallback(a=>a(t,n,e,r),[]);return H.useEffect(()=>()=>{n.current&&clearInterval(n.current)},[]),{user:t.value,updateError:e.value,logOut:r.value,authManager:i}};/**
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
 */const Cn=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},ss=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[r++];e[n++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[r++],s=t[r++],u=t[r++],o=((i&7)<<18|(a&63)<<12|(s&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(o>>10)),e[n++]=String.fromCharCode(56320+(o&1023))}else{const a=t[r++],s=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(a&63)<<6|s&63)}}return e.join("")},Pn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const a=t[i],s=i+1<t.length,u=s?t[i+1]:0,o=i+2<t.length,l=o?t[i+2]:0,f=a>>2,p=(a&3)<<4|u>>4;let y=(u&15)<<2|l>>6,d=l&63;o||(d=64,s||(y=64)),n.push(r[f],r[p],r[y],r[d])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ss(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const a=r[t.charAt(i++)],u=i<t.length?r[t.charAt(i)]:0;++i;const l=i<t.length?r[t.charAt(i)]:64;++i;const p=i<t.length?r[t.charAt(i)]:64;if(++i,a==null||u==null||l==null||p==null)throw new os;const y=a<<2|u>>4;if(n.push(y),l!==64){const d=u<<4&240|l>>2;if(n.push(d),p!==64){const E=l<<6&192|p;n.push(E)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class os extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const us=function(t){const e=Cn(t);return Pn.encodeByteArray(e,!0)},kn=function(t){return us(t).replace(/\./g,"")},Dn=function(t){try{return Pn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ls=()=>cs().__FIREBASE_DEFAULTS__,ds=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fs=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dn(t[1]);return e&&JSON.parse(e)},Tr=()=>{try{return ls()||ds()||fs()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hs=t=>{var e,r;return(r=(e=Tr())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},Nn=()=>{var t;return(t=Tr())===null||t===void 0?void 0:t.config},Mn=t=>{var e;return(e=Tr())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ps{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function gs(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ms(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ys(){const t=le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bs(){try{return typeof indexedDB=="object"}catch{return!1}}function _s(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(r){e(r)}})}/**
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
 */const Is="FirebaseError";class Ve extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=Is,Object.setPrototypeOf(this,Ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tt.prototype.create)}}class Tt{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,a=this.errors[e],s=a?Es(a,n):"Error",u=`${this.serviceName}: ${s} (${i}).`;return new Ve(i,u,n)}}function Es(t,e){return t.replace(Ts,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Ts=/\{\$([^}]+)}/g;function ws(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vt(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const a=t[i],s=e[i];if(xn(a)&&xn(s)){if(!Vt(a,s))return!1}else if(a!==s)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function xn(t){return t!==null&&typeof t=="object"}/**
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
 */function wt(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Ss(t,e){const r=new Rs(t,e);return r.subscribe.bind(r)}class Rs{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");Os(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=wr),i.error===void 0&&(i.error=wr),i.complete===void 0&&(i.complete=wr);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Os(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function wr(){}/**
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
 */class As{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new ps;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ps(e))try{this.getOrInitializeService({instanceIdentifier:et})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const a=this.getOrInitializeService({instanceIdentifier:i});n.resolve(a)}catch{}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[a,s]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);n===u&&s.resolve(i)}return i}onInit(e,r){var n;const i=this.normalizeInstanceIdentifier(r),a=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;a.add(e),this.onInitCallbacks.set(i,a);const s=this.instances.get(i);return s&&e(s,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Cs(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cs(t){return t===et?void 0:t}function Ps(t){return t.instantiationMode==="EAGER"}/**
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
 */class ks{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new As(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Ds={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Ns=ee.INFO,Ms={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},xs=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=Ms[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ln{constructor(e){this.name=e,this._logLevel=Ns,this._logHandler=xs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ds[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Ls=(t,e)=>e.some(r=>t instanceof r);let Fn,Un;function Fs(){return Fn||(Fn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Us(){return Un||(Un=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jn=new WeakMap,Sr=new WeakMap,Bn=new WeakMap,Rr=new WeakMap,Or=new WeakMap;function js(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",s)},a=()=>{r(We(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",s)});return e.then(r=>{r instanceof IDBCursor&&jn.set(r,t)}).catch(()=>{}),Or.set(e,t),e}function Bs(t){if(Sr.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",s),t.removeEventListener("abort",s)},a=()=>{r(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",s),t.addEventListener("abort",s)});Sr.set(t,e)}let Ar={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return Sr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bn.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return We(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qs(t){Ar=t(Ar)}function Hs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(Cr(this),e,...r);return Bn.set(n,e.sort?e.sort():[e]),We(n)}:Us().includes(t)?function(...e){return t.apply(Cr(this),e),We(jn.get(this))}:function(...e){return We(t.apply(Cr(this),e))}}function Vs(t){return typeof t=="function"?Hs(t):(t instanceof IDBTransaction&&Bs(t),Ls(t,Fs())?new Proxy(t,Ar):t)}function We(t){if(t instanceof IDBRequest)return js(t);if(Rr.has(t))return Rr.get(t);const e=Vs(t);return e!==t&&(Rr.set(t,e),Or.set(e,t)),e}const Cr=t=>Or.get(t);function zs(t,e,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){const s=indexedDB.open(t,e),u=We(s);return n&&s.addEventListener("upgradeneeded",o=>{n(We(s.result),o.oldVersion,o.newVersion,We(s.transaction),o)}),r&&s.addEventListener("blocked",o=>r(o.oldVersion,o.newVersion,o)),u.then(o=>{a&&o.addEventListener("close",()=>a()),i&&o.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),u}const Ws=["get","getKey","getAll","getAllKeys","count"],Qs=["put","add","delete","clear"],Pr=new Map;function qn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pr.get(e))return Pr.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=Qs.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Ws.includes(r)))return;const a=async function(s,...u){const o=this.transaction(s,i?"readwrite":"readonly");let l=o.store;return n&&(l=l.index(u.shift())),(await Promise.all([l[r](...u),i&&o.done]))[0]};return Pr.set(e,a),a}qs(t=>({...t,get:(e,r,n)=>qn(e,r)||t.get(e,r,n),has:(e,r)=>!!qn(e,r)||t.has(e,r)}));/**
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
 */class Ks{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if($s(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function $s(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kr="@firebase/app",Hn="0.9.13";/**
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
 */const tt=new Ln("@firebase/app"),Gs="@firebase/app-compat",Js="@firebase/analytics-compat",Ys="@firebase/analytics",Xs="@firebase/app-check-compat",Zs="@firebase/app-check",eo="@firebase/auth",to="@firebase/auth-compat",ro="@firebase/database",no="@firebase/database-compat",io="@firebase/functions",ao="@firebase/functions-compat",so="@firebase/installations",oo="@firebase/installations-compat",uo="@firebase/messaging",co="@firebase/messaging-compat",lo="@firebase/performance",fo="@firebase/performance-compat",ho="@firebase/remote-config",po="@firebase/remote-config-compat",vo="@firebase/storage",go="@firebase/storage-compat",mo="@firebase/firestore",yo="@firebase/firestore-compat",bo="firebase",_o="9.23.0";/**
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
 */const Dr="[DEFAULT]",Io={[kr]:"fire-core",[Gs]:"fire-core-compat",[Ys]:"fire-analytics",[Js]:"fire-analytics-compat",[Zs]:"fire-app-check",[Xs]:"fire-app-check-compat",[eo]:"fire-auth",[to]:"fire-auth-compat",[ro]:"fire-rtdb",[no]:"fire-rtdb-compat",[io]:"fire-fn",[ao]:"fire-fn-compat",[so]:"fire-iid",[oo]:"fire-iid-compat",[uo]:"fire-fcm",[co]:"fire-fcm-compat",[lo]:"fire-perf",[fo]:"fire-perf-compat",[ho]:"fire-rc",[po]:"fire-rc-compat",[vo]:"fire-gcs",[go]:"fire-gcs-compat",[mo]:"fire-fst",[yo]:"fire-fst-compat","fire-js":"fire-js",[bo]:"fire-js-all"};/**
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
 */const zt=new Map,Nr=new Map;function Eo(t,e){try{t.container.addComponent(e)}catch(r){tt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function St(t){const e=t.name;if(Nr.has(e))return tt.debug(`There were multiple attempts to register component ${e}.`),!1;Nr.set(e,t);for(const r of zt.values())Eo(r,t);return!0}function Vn(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const To={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qe=new Tt("app","Firebase",To);/**
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
 */class wo{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}}/**
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
 */const Rt=_o;function zn(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Dr,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Qe.create("bad-app-name",{appName:String(i)});if(r||(r=Nn()),!r)throw Qe.create("no-options");const a=zt.get(i);if(a){if(Vt(r,a.options)&&Vt(n,a.config))return a;throw Qe.create("duplicate-app",{appName:i})}const s=new ks(i);for(const o of Nr.values())s.addComponent(o);const u=new wo(r,n,s);return zt.set(i,u),u}function So(t=Dr){const e=zt.get(t);if(!e&&t===Dr&&Nn())return zn();if(!e)throw Qe.create("no-app",{appName:t});return e}function lt(t,e,r){var n;let i=(n=Io[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const a=i.match(/\s|\//),s=e.match(/\s|\//);if(a||s){const u=[`Unable to register library "${i}" with version "${e}":`];a&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&u.push("and"),s&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tt.warn(u.join(" "));return}St(new ct(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ro="firebase-heartbeat-database",Oo=1,Ot="firebase-heartbeat-store";let Mr=null;function Wn(){return Mr||(Mr=zs(Ro,Oo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ot)}}}).catch(t=>{throw Qe.create("idb-open",{originalErrorMessage:t.message})})),Mr}async function Ao(t){try{return await(await Wn()).transaction(Ot).objectStore(Ot).get(Kn(t))}catch(e){if(e instanceof Ve)tt.warn(e.message);else{const r=Qe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tt.warn(r.message)}}}async function Qn(t,e){try{const n=(await Wn()).transaction(Ot,"readwrite");await n.objectStore(Ot).put(e,Kn(t)),await n.done}catch(r){if(r instanceof Ve)tt.warn(r.message);else{const n=Qe.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});tt.warn(n.message)}}}function Kn(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Co=1024,Po=30*24*60*60*1e3;class ko{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new No(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=$n();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=Po}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$n(),{heartbeatsToSend:r,unsentEntries:n}=Do(this._heartbeatsCache.heartbeats),i=kn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function $n(){return new Date().toISOString().substring(0,10)}function Do(t,e=Co){const r=[];let n=t.slice();for(const i of t){const a=r.find(s=>s.agent===i.agent);if(a){if(a.dates.push(i.date),Gn(r)>e){a.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Gn(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class No{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bs()?_s().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ao(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qn(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qn(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gn(t){return kn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Mo(t){St(new ct("platform-logger",e=>new Ks(e),"PRIVATE")),St(new ct("heartbeat",e=>new ko(e),"PRIVATE")),lt(kr,Hn,t),lt(kr,Hn,"esm2017"),lt("fire-js","")}Mo("");function xr(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}typeof SuppressedError=="function"&&SuppressedError;function Jn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xo=Jn,Yn=new Tt("auth","Firebase",Jn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new Ln("@firebase/auth");function Lo(t,...e){Wt.logLevel<=ee.WARN&&Wt.warn(`Auth (${Rt}): ${t}`,...e)}function Qt(t,...e){Wt.logLevel<=ee.ERROR&&Wt.error(`Auth (${Rt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t,...e){throw Lr(t,...e)}function Se(t,...e){return Lr(t,...e)}function Xn(t,e,r){const n=Object.assign(Object.assign({},xo()),{[e]:r});return new Tt("auth","Firebase",n).create(e,{appName:t.name})}function Fo(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&we(t,"argument-error"),Xn(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lr(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return Yn.create(t,...e)}function B(t,e,...r){if(!t)throw Lr(e,...r)}function xe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qt(e),new Error(e)}function Le(t,e){t||xe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Uo(){return Zn()==="http:"||Zn()==="https:"}function Zn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uo()||gs()||"connection"in navigator)?navigator.onLine:!0}function Bo(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,r){this.shortDelay=e,this.longDelay=r,Le(r>e,"Short delay should be less than long delay!"),this.isMobile=vs()||ms()}get(){return jo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t,e){Le(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new At(3e4,6e4);function ti(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ct(t,e,r,n,i={}){return ri(t,i,async()=>{let a={},s={};n&&(e==="GET"?s=n:a={body:JSON.stringify(n)});const u=wt(Object.assign({key:t.config.apiKey},s)).slice(1),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode),ei.fetch()(ni(t,t.config.apiHost,r,u),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},a))})}async function ri(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},qo),e);try{const i=new zo(t),a=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const s=await a.json();if("needConfirmation"in s)throw Kt(t,"account-exists-with-different-credential",s);if(a.ok&&!("errorMessage"in s))return s;{const u=a.ok?s.errorMessage:s.error.message,[o,l]=u.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kt(t,"credential-already-in-use",s);if(o==="EMAIL_EXISTS")throw Kt(t,"email-already-in-use",s);if(o==="USER_DISABLED")throw Kt(t,"user-disabled",s);const f=n[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Xn(t,f,l);we(t,f)}}catch(i){if(i instanceof Ve)throw i;we(t,"network-request-failed",{message:String(i)})}}async function Vo(t,e,r,n,i={}){const a=await Ct(t,e,r,n,i);return"mfaPendingCredential"in a&&we(t,"multi-factor-auth-required",{_serverResponse:a}),a}function ni(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?Ur(t.config,i):`${t.config.apiScheme}://${i}`}class zo{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(Se(this.auth,"network-request-failed")),Ho.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kt(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=Se(t,e,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(t,e){return Ct(t,"POST","/v1/accounts:delete",e)}async function Qo(t,e){return Ct(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ko(t,e=!1){const r=ze(t),n=await r.getIdToken(e),i=Br(n);B(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,s=a==null?void 0:a.sign_in_provider;return{claims:i,token:n,authTime:Pt(jr(i.auth_time)),issuedAtTime:Pt(jr(i.iat)),expirationTime:Pt(jr(i.exp)),signInProvider:s||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function jr(t){return Number(t)*1e3}function Br(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return Qt("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dn(r);return i?JSON.parse(i):(Qt("Failed to decode base64 JWT payload"),null)}catch(i){return Qt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $o(t){const e=Br(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof Ve&&Go(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function Go({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pt(this.lastLoginAt),this.creationTime=Pt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $t(t){var e;const r=t.auth,n=await t.getIdToken(),i=await kt(t,Qo(r,{idToken:n}));B(i==null?void 0:i.users.length,r,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const s=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Zo(a.providerUserInfo):[],u=Xo(t.providerData,s),o=t.isAnonymous,l=!(t.email&&a.passwordHash)&&!(u!=null&&u.length),f=o?l:!1,p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new ii(a.createdAt,a.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Yo(t){const e=ze(t);await $t(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xo(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Zo(t){return t.map(e=>{var{providerId:r}=e,n=xr(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eu(t,e){const r=await ri(t,{},async()=>{const n=wt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,s=ni(t,i,"/v1/token",`key=${a}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",ei.fetch()(s,{method:"POST",headers:u,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$o(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:a}=await eu(e,r);this.updateTokensAndExpiration(n,i,Number(a))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:a}=r,s=new Dt;return n&&(B(typeof n=="string","internal-error",{appName:e}),s.refreshToken=n),i&&(B(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),a&&(B(typeof a=="number","internal-error",{appName:e}),s.expirationTime=a),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dt,this.toJSON())}_performRefresh(){return xe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rt{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,a=xr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ii(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const r=await kt(this,this.stsTokenManager.getToken(this.auth,e));return B(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return Ko(this,e)}reload(){return Yo(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await $t(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await kt(this,Wo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,a,s,u,o,l,f;const p=(n=r.displayName)!==null&&n!==void 0?n:void 0,y=(i=r.email)!==null&&i!==void 0?i:void 0,d=(a=r.phoneNumber)!==null&&a!==void 0?a:void 0,E=(s=r.photoURL)!==null&&s!==void 0?s:void 0,T=(u=r.tenantId)!==null&&u!==void 0?u:void 0,_=(o=r._redirectEventId)!==null&&o!==void 0?o:void 0,b=(l=r.createdAt)!==null&&l!==void 0?l:void 0,w=(f=r.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:v,emailVerified:m,isAnonymous:g,providerData:h,stsTokenManager:I}=r;B(v&&I,e,"internal-error");const R=Dt.fromJSON(this.name,I);B(typeof v=="string",e,"internal-error"),Ke(p,e.name),Ke(y,e.name),B(typeof m=="boolean",e,"internal-error"),B(typeof g=="boolean",e,"internal-error"),Ke(d,e.name),Ke(E,e.name),Ke(T,e.name),Ke(_,e.name),Ke(b,e.name),Ke(w,e.name);const O=new rt({uid:v,auth:e,email:y,emailVerified:m,displayName:p,isAnonymous:g,photoURL:E,phoneNumber:d,tenantId:T,stsTokenManager:R,createdAt:b,lastLoginAt:w});return h&&Array.isArray(h)&&(O.providerData=h.map(S=>Object.assign({},S))),_&&(O._redirectEventId=_),O}static async _fromIdTokenResponse(e,r,n=!1){const i=new Dt;i.updateFromServerResponse(r);const a=new rt({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await $t(a),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new Map;function Fe(t){Le(t instanceof Function,"Expected a class definition");let e=ai.get(t);return e?(Le(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ai.set(t,e),e)}/**
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
 */function Gt(t,e,r){return`firebase:${t}:${e}:${r}`}class dt{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:a}=this.auth;this.fullUserKey=Gt(this.userKey,i.apiKey,a),this.fullPersistenceKey=Gt("persistence",i.apiKey,a),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new dt(Fe(oi),e,n);const i=(await Promise.all(r.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let a=i[0]||Fe(oi);const s=Gt(n,e.config.apiKey,e.name);let u=null;for(const l of r)try{const f=await l._get(s);if(f){const p=rt._fromJSON(e,f);l!==a&&(u=p),a=l;break}}catch{}const o=i.filter(l=>l._shouldAllowMigration);return!a._shouldAllowMigration||!o.length?new dt(a,e,n):(a=o[0],u&&await a._set(s,u.toJSON()),await Promise.all(r.map(async l=>{if(l!==a)try{await l._remove(s)}catch{}})),new dt(a,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(di(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ci(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hi(e))return"Blackberry";if(pi(e))return"Webos";if(qr(e))return"Safari";if((e.includes("chrome/")||li(e))&&!e.includes("edge/"))return"Chrome";if(fi(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function ci(t=le()){return/firefox\//i.test(t)}function qr(t=le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function li(t=le()){return/crios\//i.test(t)}function di(t=le()){return/iemobile/i.test(t)}function fi(t=le()){return/android/i.test(t)}function hi(t=le()){return/blackberry/i.test(t)}function pi(t=le()){return/webos/i.test(t)}function Jt(t=le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tu(t=le()){var e;return Jt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ru(){return ys()&&document.documentMode===10}function vi(t=le()){return Jt(t)||fi(t)||pi(t)||hi(t)||/windows phone/i.test(t)||di(t)}function nu(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t,e=[]){let r;switch(t){case"Browser":r=ui(le());break;case"Worker":r=`${ui(le())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Rt}/${n}`}async function mi(t,e){return Ct(t,"GET","/v2/recaptchaConfig",ti(t,e))}function yi(t){return t!==void 0&&t.enterprise!==void 0}class bi{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(r=>r.provider==="EMAIL_PASSWORD_PROVIDER"&&r.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _i(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const a=Se("internal-error");a.customData=i,r(a)},n.type="text/javascript",n.charset="UTF-8",iu().appendChild(n)})}function au(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const su="https://www.google.com/recaptcha/enterprise.js?render=",ou="recaptcha-enterprise",uu="NO_RECAPTCHA";class cu{constructor(e){this.type=ou,this.auth=Nt(e)}async verify(e="verify",r=!1){async function n(a){if(!r){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(s,u)=>{mi(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const l=new bi(o);return a.tenantId==null?a._agentRecaptchaConfig=l:a._tenantRecaptchaConfigs[a.tenantId]=l,s(l.siteKey)}}).catch(o=>{u(o)})})}function i(a,s,u){const o=window.grecaptcha;yi(o)?o.enterprise.ready(()=>{o.enterprise.execute(a,{action:e}).then(l=>{s(l)}).catch(()=>{s(uu)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,s)=>{n(this.auth).then(u=>{if(!r&&yi(window.grecaptcha))i(u,a,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}_i(su+u).then(()=>{i(u,a,s)}).catch(o=>{s(o)})}}).catch(u=>{s(u)})})}}/**
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
 */class lu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=a=>new Promise((s,u)=>{try{const o=e(a);s(o)}catch(o){u(o)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,r,n,i){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ii(this),this.idTokenSubscription=new Ii(this),this.beforeStateQueue=new lu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Fe(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await dt.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var r;const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,u=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===u)&&(o!=null&&o.user)&&(i=o.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await $t(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bo()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?ze(e):null;return r&&B(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Fe(e))})}async initializeRecaptchaConfig(){const e=await mi(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new bi(e);this.tenantId==null?this._agentRecaptchaConfig=r:this._tenantRecaptchaConfigs[this.tenantId]=r,r.emailPasswordEnabled&&new cu(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tt("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Fe(e)||this._popupRedirectResolver;B(r,this,"argument-error"),this.redirectPersistenceManager=await dt.create(this,[Fe(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const a=typeof r=="function"?r:r.next.bind(r),s=this._isInitialized?Promise.resolve():this._initializationPromise;return B(s,this,"internal-error"),s.then(()=>a(this.currentUser)),typeof r=="function"?e.addObserver(r,n,i):e.addObserver(r)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&Lo(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function Nt(t){return ze(t)}class Ii{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ss(r=>this.observer=r)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t,e){const r=Vn(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),a=r.getOptions();if(Vt(a,e??{}))return i;we(i,"already-initialized")}return r.initialize({options:e})}function hu(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Fe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function pu(t,e,r){const n=Nt(t);B(n._canInitEmulator,n,"emulator-config-failed"),B(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(r!=null&&r.disableWarnings),a=Ei(e),{host:s,port:u}=vu(e),o=u===null?"":`:${u}`;n.config.emulator={url:`${a}//${s}${o}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||gu()}function Ei(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vu(t){const e=Ei(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const a=i[1];return{host:a,port:Ti(n.substr(a.length+1))}}else{const[a,s]=n.split(":");return{host:a,port:Ti(s)}}}function Ti(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gu(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return xe("not implemented")}_getIdTokenResponse(e){return xe("not implemented")}_linkToIdToken(e,r){return xe("not implemented")}_getReauthenticationResolver(e){return xe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(t,e){return Vo(t,"POST","/v1/accounts:signInWithIdp",ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="http://localhost";class Ue extends wi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new Ue(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):we("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,a=xr(r,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Ue(n,i);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}_getIdTokenResponse(e){const r=this.buildRequest();return ft(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,ft(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,ft(e,r)}buildRequest(){const e={requestUri:mu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=wt(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ht extends Hr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class pt extends ht{static credentialFromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;return B("providerId"in r&&"signInMethod"in r,"argument-error"),Ue._fromParams(r)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return B(e.idToken||e.accessToken,"argument-error"),Ue._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return pt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return pt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:a,nonce:s,providerId:u}=e;if(!n&&!i&&!r&&!a||!u)return null;try{return new pt(u)._credential({idToken:r,accessToken:n,nonce:s,pendingToken:a})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const a=await rt._fromIdTokenResponse(e,n,i),s=Si(n);return new vt({user:a,providerId:s,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=Si(n);return new vt({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function Si(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Ve{constructor(e,r,n,i){var a;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Yt.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new Yt(e,r,n,i)}}function Ri(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Yt._fromErrorAndOperation(t,a,e,n):a})}async function yu(t,e,r=!1){const n=await kt(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return vt._forOperation(t,"link",n)}/**
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
 */async function bu(t,e,r=!1){const{auth:n}=t,i="reauthenticate";try{const a=await kt(t,Ri(n,i,e,t),r);B(a.idToken,n,"internal-error");const s=Br(a.idToken);B(s,n,"internal-error");const{sub:u}=s;return B(t.uid===u,n,"user-mismatch"),vt._forOperation(t,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&we(n,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _u(t,e,r=!1){const n="signIn",i=await Ri(t,n,e),a=await vt._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(a.user),a}function Iu(t,e,r,n){return ze(t).onIdTokenChanged(e,r,n)}function Eu(t,e,r){return ze(t).beforeAuthStateChanged(e,r)}function Tu(t,e,r,n){return ze(t).onAuthStateChanged(e,r,n)}function Oi(t){return ze(t).signOut()}const Xt="__sak";/**
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
 */class Ai{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Xt,"1"),this.storage.removeItem(Xt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(){const t=le();return qr(t)||Jt(t)}const Su=1e3,Ru=10;class Ci extends Ai{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wu()&&nu(),this.fallbackToPolling=vi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((s,u,o)=>{this.notifyListeners(s,o)});return}const n=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!r)return}const i=()=>{const s=this.storage.getItem(n);!r&&this.localCache[n]===s||this.notifyListeners(n,s)},a=this.storage.getItem(n);ru()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ru):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},Su)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ci.type="LOCAL";const Ou=Ci;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Ai{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}Pi.type="SESSION";const ki=Pi;/**
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
 */function Au(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class Zt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new Zt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:a}=r.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const u=Array.from(s).map(async l=>l(r.origin,a)),o=await Au(u);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:o})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,s;return new Promise((u,o)=>{const l=Vr("",20);i.port1.start();const f=setTimeout(()=>{o(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(p){const y=p;if(y.data.eventId===l)switch(y.data.status){case"ack":clearTimeout(f),a=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(y.data.response);break;default:clearTimeout(f),clearTimeout(a),o(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:r},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return window}function Pu(t){Pe().location.href=t}/**
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
 */function Di(){return typeof Pe().WorkerGlobalScope<"u"&&typeof Pe().importScripts=="function"}async function ku(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Du(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Nu(){return Di()?self:null}/**
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
 */const Ni="firebaseLocalStorageDb",Mu=1,er="firebaseLocalStorage",Mi="fbase_key";class Mt{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function tr(t,e){return t.transaction([er],e?"readwrite":"readonly").objectStore(er)}function xu(){const t=indexedDB.deleteDatabase(Ni);return new Mt(t).toPromise()}function zr(){const t=indexedDB.open(Ni,Mu);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(er,{keyPath:Mi})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(er)?e(n):(n.close(),await xu(),e(await zr()))})})}async function xi(t,e,r){const n=tr(t,!0).put({[Mi]:e,value:r});return new Mt(n).toPromise()}async function Lu(t,e){const r=tr(t,!1).get(e),n=await new Mt(r).toPromise();return n===void 0?null:n.value}function Li(t,e){const r=tr(t,!0).delete(e);return new Mt(r).toPromise()}const Fu=800,Uu=3;class Fi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zr(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>Uu)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Di()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zt._getInstance(Nu()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await ku(),!this.activeServiceWorker)return;this.sender=new Cu(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Du()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zr();return await xi(e,Xt,"1"),await Li(e,Xt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>xi(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>Lu(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Li(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=tr(i,!1).getAll();return new Mt(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;for(const{fbase_key:i,value:a}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fi.type="LOCAL";const ju=Fi;new At(3e4,6e4);/**
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
 */function Ui(t,e){return e?Fe(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Wr extends wi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,r){return ft(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Bu(t){return _u(t.auth,new Wr(t),t.bypassAuthState)}function qu(t){const{auth:e,user:r}=t;return B(r,e,"internal-error"),bu(r,new Wr(t),t.bypassAuthState)}async function Hu(t){const{auth:e,user:r}=t;return B(r,e,"internal-error"),yu(r,new Wr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,r,n,i,a=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:a,error:s,type:u}=e;if(s){this.reject(s);return}const o={auth:this.auth,requestUri:r,sessionId:n,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bu;case"linkViaPopup":case"linkViaRedirect":return Hu;case"reauthViaPopup":case"reauthViaRedirect":return qu;default:we(this.auth,"internal-error")}}resolve(e){Le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new At(2e3,1e4);async function xt(t,e,r){const n=Nt(t);Fo(t,e,Hr);const i=Ui(n,r);return new nt(n,"signInViaPopup",e,i).executeNotNull()}class nt extends ji{constructor(e,r,n,i,a){super(e,r,i,a),this.provider=n,this.authWindow=null,this.pollId=null,nt.currentPopupAction&&nt.currentPopupAction.cancel(),nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Le(this.filter.length===1,"Popup operations only handle one event");const e=Vr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Se(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Se(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Se(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Vu.get())};e()}}nt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="pendingRedirect",rr=new Map;class Wu extends ji{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=rr.get(this.auth._key());if(!e){try{const n=await Qu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}rr.set(this.auth._key(),e)}return this.bypassAuthState||rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qu(t,e){const r=Gu(e),n=$u(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function Ku(t,e){rr.set(t._key(),e)}function $u(t){return Fe(t._redirectPersistence)}function Gu(t){return Gt(zu,t.config.apiKey,t.name)}async function Ju(t,e,r=!1){const n=Nt(t),i=Ui(n,e),s=await new Wu(n,i,r).execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=10*60*1e3;class Xu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zu(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!qi(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(Se(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yu&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bi(e))}saveEventToCache(e){this.cachedEventUids.add(Bi(e)),this.lastProcessedEventTime=Date.now()}}function Bi(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qi({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zu(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qi(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(t,e={}){return Ct(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rc=/^https?/;async function nc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ec(t);for(const r of e)try{if(ic(r))return}catch{}we(t,"unauthorized-domain")}function ic(t){const e=Fr(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&s.hostname===n}if(!rc.test(r))return!1;if(tc.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const ac=new At(3e4,6e4);function Hi(){const t=Pe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function sc(t){return new Promise((e,r)=>{var n,i,a;function s(){Hi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hi(),r(Se(t,"network-request-failed"))},timeout:ac.get()})}if(!((i=(n=Pe().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=Pe().gapi)===null||a===void 0)&&a.load)s();else{const u=au("iframefcb");return Pe()[u]=()=>{gapi.load?s():r(Se(t,"network-request-failed"))},_i(`https://apis.google.com/js/api.js?onload=${u}`).catch(o=>r(o))}}).catch(e=>{throw nr=null,e})}let nr=null;function oc(t){return nr=nr||sc(t),nr}/**
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
 */const uc=new At(5e3,15e3),cc="__/auth/iframe",lc="emulator/auth/iframe",dc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hc(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Ur(e,lc):`https://${t.config.authDomain}/${cc}`,n={apiKey:e.apiKey,appName:t.name,v:Rt},i=fc.get(t.config.apiHost);i&&(n.eid=i);const a=t._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${wt(n).slice(1)}`}async function pc(t){const e=await oc(t),r=Pe().gapi;return B(r,t,"internal-error"),e.open({where:document.body,url:hc(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dc,dontclear:!0},n=>new Promise(async(i,a)=>{await n.restyle({setHideOnLeave:!1});const s=Se(t,"network-request-failed"),u=Pe().setTimeout(()=>{a(s)},uc.get());function o(){Pe().clearTimeout(u),i(n)}n.ping(o).then(o,()=>{a(s)})}))}/**
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
 */const vc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gc=500,mc=600,yc="_blank",bc="http://localhost";class Vi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _c(t,e,r,n=gc,i=mc){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let u="";const o=Object.assign(Object.assign({},vc),{width:n.toString(),height:i.toString(),top:a,left:s}),l=le().toLowerCase();r&&(u=li(l)?yc:r),ci(l)&&(e=e||bc,o.scrollbars="yes");const f=Object.entries(o).reduce((y,[d,E])=>`${y}${d}=${E},`,"");if(tu(l)&&u!=="_self")return Ic(e||"",u),new Vi(null);const p=window.open(e||"",u,f);B(p,t,"popup-blocked");try{p.focus()}catch{}return new Vi(p)}function Ic(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const Ec="__/auth/handler",Tc="emulator/auth/handler",wc=encodeURIComponent("fac");async function zi(t,e,r,n,i,a){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:Rt,eventId:i};if(e instanceof Hr){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",ws(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(a||{}))s[f]=p}if(e instanceof ht){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const u=s;for(const f of Object.keys(u))u[f]===void 0&&delete u[f];const o=await t._getAppCheckToken(),l=o?`#${wc}=${encodeURIComponent(o)}`:"";return`${Sc(t)}?${wt(u).slice(1)}${l}`}function Sc({config:t}){return t.emulator?Ur(t,Tc):`https://${t.authDomain}/${Ec}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="webStorageSupport";class Rc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ki,this._completeRedirectFn=Ju,this._overrideRedirectResult=Ku}async _openPopup(e,r,n,i){var a;Le((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await zi(e,r,n,Fr(),i);return _c(e,s,Vr())}async _openRedirect(e,r,n,i){await this._originValidation(e);const a=await zi(e,r,n,Fr(),i);return Pu(a),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:a}=this.eventManagers[r];return i?Promise.resolve(i):(Le(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await pc(e),n=new Xu(e);return r.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(Qr,{type:Qr},i=>{var a;const s=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Qr];s!==void 0&&r(!!s),we(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=nc(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return vi()||qr()||Jt()}}const Oc=Rc;var Wi="@firebase/auth",Qi="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Pc(t){St(new ct("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:s,authDomain:u}=n.options;B(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:s,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gi(t)},l=new du(n,i,a,o);return hu(l,r),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),St(new ct("auth-internal",e=>{const r=Nt(e.getProvider("auth").getImmediate());return(n=>new Ac(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(Wi,Qi,Cc(t)),lt(Wi,Qi,"esm2017")}/**
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
 */const kc=5*60,Dc=Mn("authIdTokenMaxAge")||kc;let Ki=null;const Nc=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>Dc)return;const i=r==null?void 0:r.token;Ki!==i&&(Ki=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Mc(t=So()){const e=Vn(t,"auth");if(e.isInitialized())return e.getImmediate();const r=fu(t,{popupRedirectResolver:Oc,persistence:[ju,Ou,ki]}),n=Mn("authTokenSyncURL");if(n){const a=Nc(n);Eu(r,a,()=>a(r.currentUser)),Iu(r,s=>a(s))}const i=hs("auth");return i&&pu(r,`http://${i}`),r}Pc("Browser");var xc="firebase",Lc="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(xc,Lc,"app");const Fc=()=>Object.keys(ae.firebaseConfig).length!==0,$e=()=>{const t=zn(ae.firebaseConfig);return Mc(t)},$i=new Oe;$i.setCustomParameters({prompt:"select_account"});const Gi=new Re;Gi.addScope("public_profile");const Uc=new Ce,jc=new Ae,Bc=new pt("microsoft.com").setCustomParameters({prompt:"consent",login_hint:"user@firstadd.onmicrosoft.com",tenant:"1bd1e0fb-f970-45f0-a49d-e80107b0e6f3"});function se(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];if(process.env.NODE_ENV!=="production"){var i=Jc[t],a=i?typeof i=="function"?i.apply(null,r):i:"unknown error nr: "+t;throw Error("[Immer] "+a)}throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(s){return"'"+s+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function je(t){return!!t&&!!t[he]}function Be(t){var e;return!!t&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Yc}(t)||Array.isArray(t)||!!t[Ft]||!!(!((e=t.constructor)===null||e===void 0)&&e[Ft])||ar(t)||sr(t))}function qc(t){return je(t)||se(23,t),t[he].t}function gt(t,e,r){r===void 0&&(r=!1),Ge(t)===0?(r?Object.keys:sn)(t).forEach(function(n){r&&typeof n=="symbol"||e(n,t[n],t)}):t.forEach(function(n,i){return e(i,n,t)})}function Ge(t){var e=t[he];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:ar(t)?2:sr(t)?3:0}function Lt(t,e){return Ge(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function ir(t,e){return Ge(t)===2?t.get(e):t[e]}function Ji(t,e,r){var n=Ge(t);n===2?t.set(e,r):n===3?t.add(r):t[e]=r}function Hc(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function ar(t){return $c&&t instanceof Map}function sr(t){return Gc&&t instanceof Set}function it(t){return t.o||t.t}function Kr(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=Xc(t);delete e[he];for(var r=sn(e),n=0;n<r.length;n++){var i=r[n],a=e[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(e[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function $r(t,e){return e===void 0&&(e=!1),Gr(t)||je(t)||!Be(t)||(Ge(t)>1&&(t.set=t.add=t.clear=t.delete=Vc),Object.freeze(t),e&&gt(t,function(r,n){return $r(n,!0)},!0)),t}function Vc(){se(2)}function Gr(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function ke(t){var e=on[t];return e||se(18,t),e}function zc(t,e){on[t]||(on[t]=e)}function Yi(){return process.env.NODE_ENV==="production"||mt||se(0),mt}function Jr(t,e){e&&(ke("Patches"),t.u=[],t.s=[],t.v=e)}function or(t){Yr(t),t.p.forEach(Wc),t.p=null}function Yr(t){t===mt&&(mt=t.l)}function Xi(t){return mt={p:[],l:mt,h:t,m:!0,_:0}}function Wc(t){var e=t[he];e.i===0||e.i===1?e.j():e.g=!0}function Xr(t,e){e._=e.p.length;var r=e.p[0],n=t!==void 0&&t!==r;return e.h.O||ke("ES5").S(e,t,n),n?(r[he].P&&(or(e),se(4)),Be(t)&&(t=ur(e,t),e.l||cr(e,t)),e.u&&ke("Patches").M(r[he].t,t,e.u,e.s)):t=ur(e,r,[]),or(e),e.u&&e.v(e.u,e.s),t!==an?t:void 0}function ur(t,e,r){if(Gr(e))return e;var n=e[he];if(!n)return gt(e,function(u,o){return Zi(t,n,e,u,o,r)},!0),e;if(n.A!==t)return e;if(!n.P)return cr(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=n.i===4||n.i===5?n.o=Kr(n.k):n.o,a=i,s=!1;n.i===3&&(a=new Set(i),i.clear(),s=!0),gt(a,function(u,o){return Zi(t,n,i,u,o,r,s)}),cr(t,i,!1),r&&t.u&&ke("Patches").N(n,r,t.u,t.s)}return n.o}function Zi(t,e,r,n,i,a,s){if(process.env.NODE_ENV!=="production"&&i===r&&se(5),je(i)){var u=ur(t,i,a&&e&&e.i!==3&&!Lt(e.R,n)?a.concat(n):void 0);if(Ji(r,n,u),!je(u))return;t.m=!1}else s&&r.add(i);if(Be(i)&&!Gr(i)){if(!t.h.D&&t._<1)return;ur(t,i),e&&e.A.l||cr(t,i)}}function cr(t,e,r){r===void 0&&(r=!1),!t.l&&t.h.D&&t.m&&$r(e,r)}function Zr(t,e){var r=t[he];return(r?it(r):t)[e]}function ea(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function en(t){t.P||(t.P=!0,t.l&&en(t.l))}function tn(t){t.o||(t.o=Kr(t.t))}function rn(t,e,r){var n=ar(e)?ke("MapSet").F(e,r):sr(e)?ke("MapSet").T(e,r):t.O?function(i,a){var s=Array.isArray(i),u={i:s?1:0,A:a?a.A:Yi(),P:!1,I:!1,R:{},l:a,t:i,k:null,o:null,j:null,C:!1},o=u,l=un;s&&(o=[u],l=Ut);var f=Proxy.revocable(o,l),p=f.revoke,y=f.proxy;return u.k=y,u.j=p,y}(e,r):ke("ES5").J(e,r);return(r?r.A:Yi()).p.push(n),n}function Qc(t){return je(t)||se(22,t),function e(r){if(!Be(r))return r;var n,i=r[he],a=Ge(r);if(i){if(!i.P&&(i.i<4||!ke("ES5").K(i)))return i.t;i.I=!0,n=ta(r,a),i.I=!1}else n=ta(r,a);return gt(n,function(s,u){i&&ir(i.t,s)===u||Ji(n,s,e(u))}),a===3?new Set(n):n}(t)}function ta(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Kr(t)}function Kc(){function t(n){if(!Be(n))return n;if(Array.isArray(n))return n.map(t);if(ar(n))return new Map(Array.from(n.entries()).map(function(s){return[s[0],t(s[1])]}));if(sr(n))return new Set(Array.from(n).map(t));var i=Object.create(Object.getPrototypeOf(n));for(var a in n)i[a]=t(n[a]);return Lt(n,Ft)&&(i[Ft]=n[Ft]),i}function e(n){return je(n)?t(n):n}var r="add";zc("Patches",{$:function(n,i){return i.forEach(function(a){for(var s=a.path,u=a.op,o=n,l=0;l<s.length-1;l++){var f=Ge(o),p=s[l];typeof p!="string"&&typeof p!="number"&&(p=""+p),f!==0&&f!==1||p!=="__proto__"&&p!=="constructor"||se(24),typeof o=="function"&&p==="prototype"&&se(24),typeof(o=ir(o,p))!="object"&&se(15,s.join("/"))}var y=Ge(o),d=t(a.value),E=s[s.length-1];switch(u){case"replace":switch(y){case 2:return o.set(E,d);case 3:se(16);default:return o[E]=d}case r:switch(y){case 1:return E==="-"?o.push(d):o.splice(E,0,d);case 2:return o.set(E,d);case 3:return o.add(d);default:return o[E]=d}case"remove":switch(y){case 1:return o.splice(E,1);case 2:return o.delete(E);case 3:return o.delete(a.value);default:return delete o[E]}default:se(17,u)}}),n},N:function(n,i,a,s){switch(n.i){case 0:case 4:case 2:return function(u,o,l,f){var p=u.t,y=u.o;gt(u.R,function(d,E){var T=ir(p,d),_=ir(y,d),b=E?Lt(p,d)?"replace":r:"remove";if(T!==_||b!=="replace"){var w=o.concat(d);l.push(b==="remove"?{op:b,path:w}:{op:b,path:w,value:_}),f.push(b===r?{op:"remove",path:w}:b==="remove"?{op:r,path:w,value:e(T)}:{op:"replace",path:w,value:e(T)})}})}(n,i,a,s);case 5:case 1:return function(u,o,l,f){var p=u.t,y=u.R,d=u.o;if(d.length<p.length){var E=[d,p];p=E[0],d=E[1];var T=[f,l];l=T[0],f=T[1]}for(var _=0;_<p.length;_++)if(y[_]&&d[_]!==p[_]){var b=o.concat([_]);l.push({op:"replace",path:b,value:e(d[_])}),f.push({op:"replace",path:b,value:e(p[_])})}for(var w=p.length;w<d.length;w++){var v=o.concat([w]);l.push({op:r,path:v,value:e(d[w])})}p.length<d.length&&f.push({op:"replace",path:o.concat(["length"]),value:p.length})}(n,i,a,s);case 3:return function(u,o,l,f){var p=u.t,y=u.o,d=0;p.forEach(function(E){if(!y.has(E)){var T=o.concat([d]);l.push({op:"remove",path:T,value:E}),f.unshift({op:r,path:T,value:E})}d++}),d=0,y.forEach(function(E){if(!p.has(E)){var T=o.concat([d]);l.push({op:r,path:T,value:E}),f.unshift({op:"remove",path:T,value:E})}d++})}(n,i,a,s)}},M:function(n,i,a,s){a.push({op:"replace",path:[],value:i===an?void 0:i}),s.push({op:"replace",path:[],value:n})}})}var ra,mt,nn=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",$c=typeof Map<"u",Gc=typeof Set<"u",na=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",an=nn?Symbol.for("immer-nothing"):((ra={})["immer-nothing"]=!0,ra),Ft=nn?Symbol.for("immer-draftable"):"__$immer_draftable",he=nn?Symbol.for("immer-state"):"__$immer_state",Jc={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(t){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+t},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(t){return"Cannot apply patch, path doesn't resolve: "+t},16:'Sets cannot have "replace" patches.',17:function(t){return"Unsupported patch operation: "+t},18:function(t){return"The plugin for '"+t+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+t+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(t){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+t+"'"},22:function(t){return"'current' expects a draft, got: "+t},23:function(t){return"'original' expects a draft, got: "+t},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Yc=""+Object.prototype.constructor,sn=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,Xc=Object.getOwnPropertyDescriptors||function(t){var e={};return sn(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},on={},un={get:function(t,e){if(e===he)return t;var r=it(t);if(!Lt(r,e))return function(i,a,s){var u,o=ea(a,s);return o?"value"in o?o.value:(u=o.get)===null||u===void 0?void 0:u.call(i.k):void 0}(t,r,e);var n=r[e];return t.I||!Be(n)?n:n===Zr(t.t,e)?(tn(t),t.o[e]=rn(t.A.h,n,t)):n},has:function(t,e){return e in it(t)},ownKeys:function(t){return Reflect.ownKeys(it(t))},set:function(t,e,r){var n=ea(it(t),e);if(n!=null&&n.set)return n.set.call(t.k,r),!0;if(!t.P){var i=Zr(it(t),e),a=i==null?void 0:i[he];if(a&&a.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(Hc(r,i)&&(r!==void 0||Lt(t.t,e)))return!0;tn(t),en(t)}return t.o[e]===r&&(r!==void 0||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return Zr(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,tn(t),en(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=it(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:n.enumerable,value:r[e]}},defineProperty:function(){se(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){se(12)}},Ut={};gt(un,function(t,e){Ut[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Ut.deleteProperty=function(t,e){return process.env.NODE_ENV!=="production"&&isNaN(parseInt(e))&&se(13),Ut.set.call(this,t,e,void 0)},Ut.set=function(t,e,r){return process.env.NODE_ENV!=="production"&&e!=="length"&&isNaN(parseInt(e))&&se(14),un.set.call(this,t[0],e,r,t[0])};var Zc=function(){function t(r){var n=this;this.O=na,this.D=!0,this.produce=function(i,a,s){if(typeof i=="function"&&typeof a!="function"){var u=a;a=i;var o=n;return function(T){var _=this;T===void 0&&(T=u);for(var b=arguments.length,w=Array(b>1?b-1:0),v=1;v<b;v++)w[v-1]=arguments[v];return o.produce(T,function(m){var g;return(g=a).call.apply(g,[_,m].concat(w))})}}var l;if(typeof a!="function"&&se(6),s!==void 0&&typeof s!="function"&&se(7),Be(i)){var f=Xi(n),p=rn(n,i,void 0),y=!0;try{l=a(p),y=!1}finally{y?or(f):Yr(f)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(T){return Jr(f,s),Xr(T,f)},function(T){throw or(f),T}):(Jr(f,s),Xr(l,f))}if(!i||typeof i!="object"){if((l=a(i))===void 0&&(l=i),l===an&&(l=void 0),n.D&&$r(l,!0),s){var d=[],E=[];ke("Patches").M(i,l,d,E),s(d,E)}return l}se(21,i)},this.produceWithPatches=function(i,a){if(typeof i=="function")return function(l){for(var f=arguments.length,p=Array(f>1?f-1:0),y=1;y<f;y++)p[y-1]=arguments[y];return n.produceWithPatches(l,function(d){return i.apply(void 0,[d].concat(p))})};var s,u,o=n.produce(i,a,function(l,f){s=l,u=f});return typeof Promise<"u"&&o instanceof Promise?o.then(function(l){return[l,s,u]}):[o,s,u]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var e=t.prototype;return e.createDraft=function(r){Be(r)||se(8),je(r)&&(r=Qc(r));var n=Xi(this),i=rn(this,r,void 0);return i[he].C=!0,Yr(n),i},e.finishDraft=function(r,n){var i=r&&r[he];process.env.NODE_ENV!=="production"&&(i&&i.C||se(9),i.I&&se(10));var a=i.A;return Jr(a,n),Xr(void 0,a)},e.setAutoFreeze=function(r){this.D=r},e.setUseProxies=function(r){r&&!na&&se(20),this.O=r},e.applyPatches=function(r,n){var i;for(i=n.length-1;i>=0;i--){var a=n[i];if(a.path.length===0&&a.op==="replace"){r=a.value;break}}i>-1&&(n=n.slice(i+1));var s=ke("Patches").$;return je(r)?s(r,n):this.produce(r,function(u){return s(u,n)})},t}(),me=new Zc;me.produce;var ia=me.produceWithPatches.bind(me);me.setAutoFreeze.bind(me),me.setUseProxies.bind(me);var aa=me.applyPatches.bind(me);me.createDraft.bind(me),me.finishDraft.bind(me);var lr="NOT_FOUND";function el(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:lr},put:function(n,i){e={key:n,value:i}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}function tl(t,e){var r=[];function n(u){var o=r.findIndex(function(f){return e(u,f.key)});if(o>-1){var l=r[o];return o>0&&(r.splice(o,1),r.unshift(l)),l.value}return lr}function i(u,o){n(u)===lr&&(r.unshift({key:u,value:o}),r.length>t&&r.pop())}function a(){return r}function s(){r=[]}return{get:n,put:i,getEntries:a,clear:s}}var rl=function(e,r){return e===r};function nl(t){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var i=r.length,a=0;a<i;a++)if(!t(r[a],n[a]))return!1;return!0}}function sa(t,e){var r=typeof e=="object"?e:{equalityCheck:e},n=r.equalityCheck,i=n===void 0?rl:n,a=r.maxSize,s=a===void 0?1:a,u=r.resultEqualityCheck,o=nl(i),l=s===1?el(o):tl(s,o);function f(){var p=l.get(arguments);if(p===lr){if(p=t.apply(null,arguments),u){var y=l.getEntries(),d=y.find(function(E){return u(E.value,p)});d&&(p=d.value)}l.put(arguments,p)}return p}return f.clearCache=function(){return l.clear()},f}var dr=globalThis&&globalThis.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(l){return function(f){return o([l,f])}}function o(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=l[0]&2?i.return:l[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;switch(i=0,a&&(l=[l[0]&2,a.value]),l[0]){case 0:case 1:a=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){r.label=l[1];break}if(l[0]===6&&r.label<a[1]){r.label=a[1],a=l;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(l);break}a[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(t,r)}catch(f){l=[6,f],i=0}finally{n=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},fr=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t},il=Object.defineProperty,al=Object.defineProperties,sl=Object.getOwnPropertyDescriptors,hr=Object.getOwnPropertySymbols,oa=Object.prototype.hasOwnProperty,ua=Object.prototype.propertyIsEnumerable,ca=function(t,e,r){return e in t?il(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},oe=function(t,e){for(var r in e||(e={}))oa.call(e,r)&&ca(t,r,e[r]);if(hr)for(var n=0,i=hr(e);n<i.length;n++){var r=i[n];ua.call(e,r)&&ca(t,r,e[r])}return t},De=function(t,e){return al(t,sl(e))},la=function(t,e){var r={};for(var n in t)oa.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&hr)for(var i=0,a=hr(t);i<a.length;i++){var n=a[i];e.indexOf(n)<0&&ua.call(t,n)&&(r[n]=t[n])}return r},pr=function(t,e,r){return new Promise(function(n,i){var a=function(o){try{u(r.next(o))}catch(l){i(l)}},s=function(o){try{u(r.throw(o))}catch(l){i(l)}},u=function(o){return o.done?n(o.value):Promise.resolve(o.value).then(a,s)};u((r=r.apply(t,e)).next())})},ne;(function(t){t.uninitialized="uninitialized",t.pending="pending",t.fulfilled="fulfilled",t.rejected="rejected"})(ne||(ne={}));function ol(t){return{status:t,isUninitialized:t===ne.uninitialized,isLoading:t===ne.pending,isSuccess:t===ne.fulfilled,isError:t===ne.rejected}}function ul(t){return new RegExp("(^|:)//").test(t)}var cl=function(t){return t.replace(/\/$/,"")},ll=function(t){return t.replace(/^\//,"")};function dl(t,e){if(!t)return e;if(!e)return t;if(ul(e))return e;var r=t.endsWith("/")||!e.startsWith("?")?"/":"";return t=cl(t),e=ll(e),""+t+r+e}var da=function(t){return[].concat.apply([],t)};function fl(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}function hl(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}var fa=x.isPlainObject;function ha(t,e){if(t===e||!(fa(t)&&fa(e)||Array.isArray(t)&&Array.isArray(e)))return e;for(var r=Object.keys(e),n=Object.keys(t),i=r.length===n.length,a=Array.isArray(e)?[]:{},s=0,u=r;s<u.length;s++){var o=u[s];a[o]=ha(t[o],e[o]),i&&(i=t[o]===a[o])}return i?t:a}var pa=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return fetch.apply(void 0,t)},pl=function(t){return t.status>=200&&t.status<=299},vl=function(t){return/ion\/(vnd\.api\+)?json/.test(t.get("content-type")||"")};function va(t){if(!x.isPlainObject(t))return t;for(var e=oe({},t),r=0,n=Object.entries(e);r<n.length;r++){var i=n[r],a=i[0],s=i[1];s===void 0&&delete e[a]}return e}function gl(t){var e=this;t===void 0&&(t={});var r=t,n=r.baseUrl,i=r.prepareHeaders,a=i===void 0?function(v){return v}:i,s=r.fetchFn,u=s===void 0?pa:s,o=r.paramsSerializer,l=r.isJsonContentType,f=l===void 0?vl:l,p=r.jsonContentType,y=p===void 0?"application/json":p,d=r.jsonReplacer,E=r.timeout,T=r.responseHandler,_=r.validateStatus,b=la(r,["baseUrl","prepareHeaders","fetchFn","paramsSerializer","isJsonContentType","jsonContentType","jsonReplacer","timeout","responseHandler","validateStatus"]);return typeof fetch>"u"&&u===pa&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),function(v,m){return pr(e,null,function(){var g,h,I,R,O,S,A,C,P,D,M,j,F,U,z,$,W,J,V,Y,Q,X,ie,pe,be,ve,_e,te,de,Ye,ot,Xe,ut,yt,Ze,Ir;return dr(this,function(Ie){switch(Ie.label){case 0:return g=m.signal,h=m.getState,I=m.extra,R=m.endpoint,O=m.forced,S=m.type,C=typeof v=="string"?{url:v}:v,P=C.url,D=C.headers,M=D===void 0?new Headers(b.headers):D,j=C.params,F=j===void 0?void 0:j,U=C.responseHandler,z=U===void 0?T??"json":U,$=C.validateStatus,W=$===void 0?_??pl:$,J=C.timeout,V=J===void 0?E:J,Y=la(C,["url","headers","params","responseHandler","validateStatus","timeout"]),Q=oe(De(oe({},b),{signal:g}),Y),M=new Headers(va(M)),X=Q,[4,a(M,{getState:h,extra:I,endpoint:R,forced:O,type:S})];case 1:X.headers=Ie.sent()||M,ie=function(ge){return typeof ge=="object"&&(x.isPlainObject(ge)||Array.isArray(ge)||typeof ge.toJSON=="function")},!Q.headers.has("content-type")&&ie(Q.body)&&Q.headers.set("content-type",y),ie(Q.body)&&f(Q.headers)&&(Q.body=JSON.stringify(Q.body,d)),F&&(pe=~P.indexOf("?")?"&":"?",be=o?o(F):new URLSearchParams(va(F)),P+=pe+be),P=dl(n,P),ve=new Request(P,Q),_e=ve.clone(),A={request:_e},de=!1,Ye=V&&setTimeout(function(){de=!0,m.abort()},V),Ie.label=2;case 2:return Ie.trys.push([2,4,5,6]),[4,u(ve)];case 3:return te=Ie.sent(),[3,6];case 4:return ot=Ie.sent(),[2,{error:{status:de?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(ot)},meta:A}];case 5:return Ye&&clearTimeout(Ye),[7];case 6:Xe=te.clone(),A.response=Xe,yt="",Ie.label=7;case 7:return Ie.trys.push([7,9,,10]),[4,Promise.all([w(te,z).then(function(ge){return ut=ge},function(ge){return Ze=ge}),Xe.text().then(function(ge){return yt=ge},function(){})])];case 8:if(Ie.sent(),Ze)throw Ze;return[3,10];case 9:return Ir=Ie.sent(),[2,{error:{status:"PARSING_ERROR",originalStatus:te.status,data:yt,error:String(Ir)},meta:A}];case 10:return[2,W(te,ut)?{data:ut,meta:A}:{error:{status:te.status,data:ut},meta:A}]}})})};function w(v,m){return pr(this,null,function(){var g;return dr(this,function(h){switch(h.label){case 0:return typeof m=="function"?[2,m(v)]:(m==="content-type"&&(m=f(v.headers)?"json":"text"),m!=="json"?[3,2]:[4,v.text()]);case 1:return g=h.sent(),[2,g.length?JSON.parse(g):null];case 2:return[2,v.text()]}})})}}var ga=function(){function t(e,r){r===void 0&&(r=void 0),this.value=e,this.meta=r}return t}(),cn=x.createAction("__rtkq/focused"),ma=x.createAction("__rtkq/unfocused"),ln=x.createAction("__rtkq/online"),ya=x.createAction("__rtkq/offline"),Ne;(function(t){t.query="query",t.mutation="mutation"})(Ne||(Ne={}));function ba(t){return t.type===Ne.query}function ml(t){return t.type===Ne.mutation}function _a(t,e,r,n,i,a){return yl(t)?t(e,r,n,i).map(dn).map(a):Array.isArray(t)?t.map(dn).map(a):[]}function yl(t){return typeof t=="function"}function dn(t){return typeof t=="string"?{type:t}:t}function fn(t){return t!=null}var jt=Symbol("forceQueryFn"),hn=function(t){return typeof t[jt]=="function"};function bl(t){var e=t.serializeQueryArgs,r=t.queryThunk,n=t.mutationThunk,i=t.api,a=t.context,s=new Map,u=new Map,o=i.internalActions,l=o.unsubscribeQueryResult,f=o.removeMutationResult,p=o.updateSubscriptionOptions;return{buildInitiateQuery:v,buildInitiateMutation:m,getRunningQueryThunk:E,getRunningMutationThunk:T,getRunningQueriesThunk:_,getRunningMutationsThunk:b,getRunningOperationPromises:d,removalWarning:y};function y(){throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`)}function d(){if(typeof process<"u"&&process.env.NODE_ENV==="development")y();else{var g=function(h){return Array.from(h.values()).flatMap(function(I){return I?Object.values(I):[]})};return fr(fr([],g(s)),g(u)).filter(fn)}}function E(g,h){return function(I){var R,O=a.endpointDefinitions[g],S=e({queryArgs:h,endpointDefinition:O,endpointName:g});return(R=s.get(I))==null?void 0:R[S]}}function T(g,h){return function(I){var R;return(R=u.get(I))==null?void 0:R[h]}}function _(){return function(g){return Object.values(s.get(g)||{}).filter(fn)}}function b(){return function(g){return Object.values(u.get(g)||{}).filter(fn)}}function w(g){if(process.env.NODE_ENV!=="production"){if(w.triggered)return;var h=g(i.internalActions.internal_probeSubscription({queryCacheKey:"DOES_NOT_EXIST",requestId:"DUMMY_REQUEST_ID"}));if(w.triggered=!0,typeof h!="boolean")throw new Error('Warning: Middleware for RTK-Query API at reducerPath "'+i.reducerPath+`" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`)}}function v(g,h){var I=function(R,O){var S=O===void 0?{}:O,A=S.subscribe,C=A===void 0?!0:A,P=S.forceRefetch,D=S.subscriptionOptions,M=jt,j=S[M];return function(F,U){var z,$,W=e({queryArgs:R,endpointDefinition:h,endpointName:g}),J=r((z={type:"query",subscribe:C,forceRefetch:P,subscriptionOptions:D,endpointName:g,originalArgs:R,queryCacheKey:W},z[jt]=j,z)),V=i.endpoints[g].select(R),Y=F(J),Q=V(U());w(F);var X=Y.requestId,ie=Y.abort,pe=Q.requestId!==X,be=($=s.get(F))==null?void 0:$[W],ve=function(){return V(U())},_e=Object.assign(j?Y.then(ve):pe&&!be?Promise.resolve(Q):Promise.all([be,Y]).then(ve),{arg:R,requestId:X,subscriptionOptions:D,queryCacheKey:W,abort:ie,unwrap:function(){return pr(this,null,function(){var de;return dr(this,function(Ye){switch(Ye.label){case 0:return[4,_e];case 1:if(de=Ye.sent(),de.isError)throw de.error;return[2,de.data]}})})},refetch:function(){return F(I(R,{subscribe:!1,forceRefetch:!0}))},unsubscribe:function(){C&&F(l({queryCacheKey:W,requestId:X}))},updateSubscriptionOptions:function(de){_e.subscriptionOptions=de,F(p({endpointName:g,requestId:X,queryCacheKey:W,options:de}))}});if(!be&&!pe&&!j){var te=s.get(F)||{};te[W]=_e,s.set(F,te),_e.then(function(){delete te[W],Object.keys(te).length||s.delete(F)})}return _e}};return I}function m(g){return function(h,I){var R=I===void 0?{}:I,O=R.track,S=O===void 0?!0:O,A=R.fixedCacheKey;return function(C,P){var D=n({type:"mutation",endpointName:g,originalArgs:h,track:S,fixedCacheKey:A}),M=C(D);w(C);var j=M.requestId,F=M.abort,U=M.unwrap,z=M.unwrap().then(function(V){return{data:V}}).catch(function(V){return{error:V}}),$=function(){C(f({requestId:j,fixedCacheKey:A}))},W=Object.assign(z,{arg:M.arg,requestId:j,abort:F,unwrap:U,unsubscribe:$,reset:$}),J=u.get(C)||{};return u.set(C,J),J[j]=W,W.then(function(){delete J[j],Object.keys(J).length||u.delete(C)}),A&&(J[A]=W,W.then(function(){J[A]===W&&(delete J[A],Object.keys(J).length||u.delete(C))})),W}}}}function Ia(t){return t}function _l(t){var e=this,r=t.reducerPath,n=t.baseQuery,i=t.context.endpointDefinitions,a=t.serializeQueryArgs,s=t.api,u=function(v,m,g){return function(h){var I=i[v];h(s.internalActions.queryResultPatched({queryCacheKey:a({queryArgs:m,endpointDefinition:I,endpointName:v}),patches:g}))}},o=function(v,m,g){return function(h,I){var R,O,S=s.endpoints[v].select(m)(I()),A={patches:[],inversePatches:[],undo:function(){return h(s.util.patchQueryData(v,m,A.inversePatches))}};if(S.status===ne.uninitialized)return A;if("data"in S)if(Be(S.data)){var C=ia(S.data,g),P=C[1],D=C[2];(R=A.patches).push.apply(R,P),(O=A.inversePatches).push.apply(O,D)}else{var M=g(S.data);A.patches.push({op:"replace",path:[],value:M}),A.inversePatches.push({op:"replace",path:[],value:S.data})}return h(s.util.patchQueryData(v,m,A.patches)),A}},l=function(v,m,g){return function(h){var I;return h(s.endpoints[v].initiate(m,(I={subscribe:!1,forceRefetch:!0},I[jt]=function(){return{data:g}},I)))}},f=function(v,m){return pr(e,[v,m],function(g,h){var I,R,O,S,A,C,P,D,M,j,F,U,z,$,W,J,V,Y,Q=h.signal,X=h.abort,ie=h.rejectWithValue,pe=h.fulfillWithValue,be=h.dispatch,ve=h.getState,_e=h.extra;return dr(this,function(te){switch(te.label){case 0:I=i[g.endpointName],te.label=1;case 1:return te.trys.push([1,8,,13]),R=Ia,O=void 0,S={signal:Q,abort:X,dispatch:be,getState:ve,extra:_e,endpoint:g.endpointName,type:g.type,forced:g.type==="query"?p(g,ve()):void 0},A=g.type==="query"?g[jt]:void 0,A?(O=A(),[3,6]):[3,2];case 2:return I.query?[4,n(I.query(g.originalArgs),S,I.extraOptions)]:[3,4];case 3:return O=te.sent(),I.transformResponse&&(R=I.transformResponse),[3,6];case 4:return[4,I.queryFn(g.originalArgs,S,I.extraOptions,function(de){return n(de,S,I.extraOptions)})];case 5:O=te.sent(),te.label=6;case 6:if(typeof process<"u"&&process.env.NODE_ENV==="development"){if(C=I.query?"`baseQuery`":"`queryFn`",P=void 0,!O)P=C+" did not return anything.";else if(typeof O!="object")P=C+" did not return an object.";else if(O.error&&O.data)P=C+" returned an object containing both `error` and `result`.";else if(O.error===void 0&&O.data===void 0)P=C+" returned an object containing neither a valid `error` and `result`. At least one of them should not be `undefined`";else for(D=0,M=Object.keys(O);D<M.length;D++)if(j=M[D],j!=="error"&&j!=="data"&&j!=="meta"){P="The object returned by "+C+" has the unknown property "+j+".";break}P&&console.error("Error encountered handling the endpoint "+g.endpointName+`.
              `+P+"\n              It needs to return an object with either the shape `{ data: <value> }` or `{ error: <value> }` that may contain an optional `meta` property.\n              Object returned was:",O)}if(O.error)throw new ga(O.error,O.meta);return F=pe,[4,R(O.data,O.meta,g.originalArgs)];case 7:return[2,F.apply(void 0,[te.sent(),(V={fulfilledTimeStamp:Date.now(),baseQueryMeta:O.meta},V[x.SHOULD_AUTOBATCH]=!0,V)])];case 8:if(U=te.sent(),z=U,!(z instanceof ga))return[3,12];$=Ia,I.query&&I.transformErrorResponse&&($=I.transformErrorResponse),te.label=9;case 9:return te.trys.push([9,11,,12]),W=ie,[4,$(z.value,z.meta,g.originalArgs)];case 10:return[2,W.apply(void 0,[te.sent(),(Y={baseQueryMeta:z.meta},Y[x.SHOULD_AUTOBATCH]=!0,Y)])];case 11:return J=te.sent(),z=J,[3,12];case 12:throw typeof process<"u"&&process.env.NODE_ENV!=="production"?console.error('An unhandled error occurred processing a request for the endpoint "'+g.endpointName+`".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`,z):console.error(z),z;case 13:return[2]}})})};function p(v,m){var g,h,I,R,O=(h=(g=m[r])==null?void 0:g.queries)==null?void 0:h[v.queryCacheKey],S=(I=m[r])==null?void 0:I.config.refetchOnMountOrArgChange,A=O==null?void 0:O.fulfilledTimeStamp,C=(R=v.forceRefetch)!=null?R:v.subscribe&&S;return C?C===!0||(Number(new Date)-Number(A))/1e3>=C:!1}var y=x.createAsyncThunk(r+"/executeQuery",f,{getPendingMeta:function(){var v;return v={startedTimeStamp:Date.now()},v[x.SHOULD_AUTOBATCH]=!0,v},condition:function(v,m){var g=m.getState,h,I,R,O=g(),S=(I=(h=O[r])==null?void 0:h.queries)==null?void 0:I[v.queryCacheKey],A=S==null?void 0:S.fulfilledTimeStamp,C=v.originalArgs,P=S==null?void 0:S.originalArgs,D=i[v.endpointName];return hn(v)?!0:(S==null?void 0:S.status)==="pending"?!1:p(v,O)||ba(D)&&((R=D==null?void 0:D.forceRefetch)!=null&&R.call(D,{currentArg:C,previousArg:P,endpointState:S,state:O}))?!0:!A},dispatchConditionRejection:!0}),d=x.createAsyncThunk(r+"/executeMutation",f,{getPendingMeta:function(){var v;return v={startedTimeStamp:Date.now()},v[x.SHOULD_AUTOBATCH]=!0,v}}),E=function(v){return"force"in v},T=function(v){return"ifOlderThan"in v},_=function(v,m,g){return function(h,I){var R=E(g)&&g.force,O=T(g)&&g.ifOlderThan,S=function(D){return D===void 0&&(D=!0),s.endpoints[v].initiate(m,{forceRefetch:D})},A=s.endpoints[v].select(m)(I());if(R)h(S());else if(O){var C=A==null?void 0:A.fulfilledTimeStamp;if(!C){h(S());return}var P=(Number(new Date)-Number(new Date(C)))/1e3>=O;P&&h(S())}else h(S(!1))}};function b(v){return function(m){var g,h;return((h=(g=m==null?void 0:m.meta)==null?void 0:g.arg)==null?void 0:h.endpointName)===v}}function w(v,m){return{matchPending:x.isAllOf(x.isPending(v),b(m)),matchFulfilled:x.isAllOf(x.isFulfilled(v),b(m)),matchRejected:x.isAllOf(x.isRejected(v),b(m))}}return{queryThunk:y,mutationThunk:d,prefetch:_,updateQueryData:o,upsertQueryData:l,patchQueryData:u,buildMatchThunkActions:w}}function Ea(t,e,r,n){return _a(r[t.meta.arg.endpointName][e],x.isFulfilled(t)?t.payload:void 0,x.isRejectedWithValue(t)?t.payload:void 0,t.meta.arg.originalArgs,"baseQueryMeta"in t.meta?t.meta.baseQueryMeta:void 0,n)}function vr(t,e,r){var n=t[e];n&&r(n)}function Bt(t){var e;return(e="arg"in t?t.arg.fixedCacheKey:t.fixedCacheKey)!=null?e:t.requestId}function Ta(t,e,r){var n=t[Bt(e)];n&&r(n)}var qt={};function Il(t){var e=t.reducerPath,r=t.queryThunk,n=t.mutationThunk,i=t.context,a=i.endpointDefinitions,s=i.apiUid,u=i.extractRehydrationInfo,o=i.hasRehydrationInfo,l=t.assertTagType,f=t.config,p=x.createAction(e+"/resetApiState"),y=x.createSlice({name:e+"/queries",initialState:qt,reducers:{removeQueryResult:{reducer:function(g,h){var I=h.payload.queryCacheKey;delete g[I]},prepare:x.prepareAutoBatched()},queryResultPatched:function(g,h){var I=h.payload,R=I.queryCacheKey,O=I.patches;vr(g,R,function(S){S.data=aa(S.data,O.concat())})}},extraReducers:function(g){g.addCase(r.pending,function(h,I){var R=I.meta,O=I.meta.arg,S,A,C=hn(O);(O.subscribe||C)&&((A=h[S=O.queryCacheKey])!=null||(h[S]={status:ne.uninitialized,endpointName:O.endpointName})),vr(h,O.queryCacheKey,function(P){P.status=ne.pending,P.requestId=C&&P.requestId?P.requestId:R.requestId,O.originalArgs!==void 0&&(P.originalArgs=O.originalArgs),P.startedTimeStamp=R.startedTimeStamp})}).addCase(r.fulfilled,function(h,I){var R=I.meta,O=I.payload;vr(h,R.arg.queryCacheKey,function(S){var A;if(!(S.requestId!==R.requestId&&!hn(R.arg))){var C=a[R.arg.endpointName].merge;if(S.status=ne.fulfilled,C)if(S.data!==void 0){var P=R.fulfilledTimeStamp,D=R.arg,M=R.baseQueryMeta,j=R.requestId,F=x.createNextState(S.data,function(U){return C(U,O,{arg:D.originalArgs,baseQueryMeta:M,fulfilledTimeStamp:P,requestId:j})});S.data=F}else S.data=O;else S.data=(A=a[R.arg.endpointName].structuralSharing)==null||A?ha(je(S.data)?qc(S.data):S.data,O):O;delete S.error,S.fulfilledTimeStamp=R.fulfilledTimeStamp}})}).addCase(r.rejected,function(h,I){var R=I.meta,O=R.condition,S=R.arg,A=R.requestId,C=I.error,P=I.payload;vr(h,S.queryCacheKey,function(D){if(!O){if(D.requestId!==A)return;D.status=ne.rejected,D.error=P??C}})}).addMatcher(o,function(h,I){for(var R=u(I).queries,O=0,S=Object.entries(R);O<S.length;O++){var A=S[O],C=A[0],P=A[1];((P==null?void 0:P.status)===ne.fulfilled||(P==null?void 0:P.status)===ne.rejected)&&(h[C]=P)}})}}),d=x.createSlice({name:e+"/mutations",initialState:qt,reducers:{removeMutationResult:{reducer:function(g,h){var I=h.payload,R=Bt(I);R in g&&delete g[R]},prepare:x.prepareAutoBatched()}},extraReducers:function(g){g.addCase(n.pending,function(h,I){var R=I.meta,O=I.meta,S=O.requestId,A=O.arg,C=O.startedTimeStamp;A.track&&(h[Bt(R)]={requestId:S,status:ne.pending,endpointName:A.endpointName,startedTimeStamp:C})}).addCase(n.fulfilled,function(h,I){var R=I.payload,O=I.meta;O.arg.track&&Ta(h,O,function(S){S.requestId===O.requestId&&(S.status=ne.fulfilled,S.data=R,S.fulfilledTimeStamp=O.fulfilledTimeStamp)})}).addCase(n.rejected,function(h,I){var R=I.payload,O=I.error,S=I.meta;S.arg.track&&Ta(h,S,function(A){A.requestId===S.requestId&&(A.status=ne.rejected,A.error=R??O)})}).addMatcher(o,function(h,I){for(var R=u(I).mutations,O=0,S=Object.entries(R);O<S.length;O++){var A=S[O],C=A[0],P=A[1];((P==null?void 0:P.status)===ne.fulfilled||(P==null?void 0:P.status)===ne.rejected)&&C!==(P==null?void 0:P.requestId)&&(h[C]=P)}})}}),E=x.createSlice({name:e+"/invalidation",initialState:qt,reducers:{},extraReducers:function(g){g.addCase(y.actions.removeQueryResult,function(h,I){for(var R=I.payload.queryCacheKey,O=0,S=Object.values(h);O<S.length;O++)for(var A=S[O],C=0,P=Object.values(A);C<P.length;C++){var D=P[C],M=D.indexOf(R);M!==-1&&D.splice(M,1)}}).addMatcher(o,function(h,I){for(var R,O,S,A,C=u(I).provided,P=0,D=Object.entries(C);P<D.length;P++)for(var M=D[P],j=M[0],F=M[1],U=0,z=Object.entries(F);U<z.length;U++)for(var $=z[U],W=$[0],J=$[1],V=(A=(O=(R=h[j])!=null?R:h[j]={})[S=W||"__internal_without_id"])!=null?A:O[S]=[],Y=0,Q=J;Y<Q.length;Y++){var X=Q[Y],ie=V.includes(X);ie||V.push(X)}}).addMatcher(x.isAnyOf(x.isFulfilled(r),x.isRejectedWithValue(r)),function(h,I){for(var R,O,S,A,C=Ea(I,"providesTags",a,l),P=I.meta.arg.queryCacheKey,D=0,M=Object.values(h);D<M.length;D++)for(var j=M[D],F=0,U=Object.values(j);F<U.length;F++){var z=U[F],$=z.indexOf(P);$!==-1&&z.splice($,1)}for(var W=0,J=C;W<J.length;W++){var V=J[W],Y=V.type,Q=V.id,X=(A=(O=(R=h[Y])!=null?R:h[Y]={})[S=Q||"__internal_without_id"])!=null?A:O[S]=[],ie=X.includes(P);ie||X.push(P)}})}}),T=x.createSlice({name:e+"/subscriptions",initialState:qt,reducers:{updateSubscriptionOptions:function(g,h){},unsubscribeQueryResult:function(g,h){},internal_probeSubscription:function(g,h){}}}),_=x.createSlice({name:e+"/internalSubscriptions",initialState:qt,reducers:{subscriptionsUpdated:{reducer:function(g,h){return aa(g,h.payload)},prepare:x.prepareAutoBatched()}}}),b=x.createSlice({name:e+"/config",initialState:oe({online:fl(),focused:hl(),middlewareRegistered:!1},f),reducers:{middlewareRegistered:function(g,h){var I=h.payload;g.middlewareRegistered=g.middlewareRegistered==="conflict"||s!==I?"conflict":!0}},extraReducers:function(g){g.addCase(ln,function(h){h.online=!0}).addCase(ya,function(h){h.online=!1}).addCase(cn,function(h){h.focused=!0}).addCase(ma,function(h){h.focused=!1}).addMatcher(o,function(h){return oe({},h)})}}),w=x.combineReducers({queries:y.reducer,mutations:d.reducer,provided:E.reducer,subscriptions:_.reducer,config:b.reducer}),v=function(g,h){return w(p.match(h)?void 0:g,h)},m=De(oe(oe(oe(oe(oe({},b.actions),y.actions),T.actions),_.actions),d.actions),{unsubscribeMutationResult:d.actions.removeMutationResult,resetApiState:p});return{reducer:v,actions:m}}var at=Symbol.for("RTKQ/skipToken"),wa={status:ne.uninitialized},Sa=x.createNextState(wa,function(){}),Ra=x.createNextState(wa,function(){});function El(t){var e=t.serializeQueryArgs,r=t.reducerPath,n=function(f){return Sa},i=function(f){return Ra};return{buildQuerySelector:u,buildMutationSelector:o,selectInvalidatedBy:l};function a(f){return oe(oe({},f),ol(f.status))}function s(f){var p=f[r];if(process.env.NODE_ENV!=="production"&&!p){if(s.triggered)return p;s.triggered=!0,console.error("Error: No data found at `state."+r+"`. Did you forget to add the reducer to the store?")}return p}function u(f,p){return function(y){var d=e({queryArgs:y,endpointDefinition:p,endpointName:f}),E=function(_){var b,w,v;return(v=(w=(b=s(_))==null?void 0:b.queries)==null?void 0:w[d])!=null?v:Sa},T=y===at?n:E;return x.createSelector(T,a)}}function o(){return function(f){var p,y;typeof f=="object"?y=(p=Bt(f))!=null?p:at:y=f;var d=function(T){var _,b,w;return(w=(b=(_=s(T))==null?void 0:_.mutations)==null?void 0:b[y])!=null?w:Ra},E=y===at?i:d;return x.createSelector(E,a)}}function l(f,p){for(var y,d=f[r],E=new Set,T=0,_=p.map(dn);T<_.length;T++){var b=_[T],w=d.provided[b.type];if(w)for(var v=(y=b.id!==void 0?w[b.id]:da(Object.values(w)))!=null?y:[],m=0,g=v;m<g.length;m++){var h=g[m];E.add(h)}}return da(Array.from(E.values()).map(function(I){var R=d.queries[I];return R?[{queryCacheKey:I,endpointName:R.endpointName,originalArgs:R.originalArgs}]:[]}))}}var gr=WeakMap?new WeakMap:void 0,Oa=function(t){var e=t.endpointName,r=t.queryArgs,n="",i=gr==null?void 0:gr.get(r);if(typeof i=="string")n=i;else{var a=JSON.stringify(r,function(s,u){return x.isPlainObject(u)?Object.keys(u).sort().reduce(function(o,l){return o[l]=u[l],o},{}):u});x.isPlainObject(r)&&(gr==null||gr.set(r,a)),n=a}return e+"("+n+")"};function Tl(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(n){var i=sa(function(f){var p,y;return(y=n.extractRehydrationInfo)==null?void 0:y.call(n,f,{reducerPath:(p=n.reducerPath)!=null?p:"api"})}),a=De(oe({reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1},n),{extractRehydrationInfo:i,serializeQueryArgs:function(f){var p=Oa;if("serializeQueryArgs"in f.endpointDefinition){var y=f.endpointDefinition.serializeQueryArgs;p=function(d){var E=y(d);return typeof E=="string"?E:Oa(De(oe({},d),{queryArgs:E}))}}else n.serializeQueryArgs&&(p=n.serializeQueryArgs);return p(f)},tagTypes:fr([],n.tagTypes||[])}),s={endpointDefinitions:{},batch:function(f){f()},apiUid:x.nanoid(),extractRehydrationInfo:i,hasRehydrationInfo:sa(function(f){return i(f)!=null})},u={injectEndpoints:l,enhanceEndpoints:function(f){var p=f.addTagTypes,y=f.endpoints;if(p)for(var d=0,E=p;d<E.length;d++){var T=E[d];a.tagTypes.includes(T)||a.tagTypes.push(T)}if(y)for(var _=0,b=Object.entries(y);_<b.length;_++){var w=b[_],v=w[0],m=w[1];typeof m=="function"?m(s.endpointDefinitions[v]):Object.assign(s.endpointDefinitions[v]||{},m)}return u}},o=t.map(function(f){return f.init(u,a,s)});function l(f){for(var p=f.endpoints({query:function(m){return De(oe({},m),{type:Ne.query})},mutation:function(m){return De(oe({},m),{type:Ne.mutation})}}),y=0,d=Object.entries(p);y<d.length;y++){var E=d[y],T=E[0],_=E[1];if(!f.overrideExisting&&T in s.endpointDefinitions){typeof process<"u"&&process.env.NODE_ENV==="development"&&console.error("called `injectEndpoints` to override already-existing endpointName "+T+" without specifying `overrideExisting: true`");continue}s.endpointDefinitions[T]=_;for(var b=0,w=o;b<w.length;b++){var v=w[b];v.injectEndpoint(T,_)}}return u}return u.injectEndpoints({endpoints:n.endpoints})}}function wl(t){for(var e in t)return!1;return!0}var Sl=2147483647/1e3-1,Rl=function(t){var e=t.reducerPath,r=t.api,n=t.context,i=t.internalState,a=r.internalActions,s=a.removeQueryResult,u=a.unsubscribeQueryResult;function o(y){var d=i.currentSubscriptions[y];return!!d&&!wl(d)}var l={},f=function(y,d,E){var T;if(u.match(y)){var _=d.getState()[e],b=y.payload.queryCacheKey;p(b,(T=_.queries[b])==null?void 0:T.endpointName,d,_.config)}if(r.util.resetApiState.match(y))for(var w=0,v=Object.entries(l);w<v.length;w++){var m=v[w],g=m[0],h=m[1];h&&clearTimeout(h),delete l[g]}if(n.hasRehydrationInfo(y))for(var _=d.getState()[e],I=n.extractRehydrationInfo(y).queries,R=0,O=Object.entries(I);R<O.length;R++){var S=O[R],b=S[0],A=S[1];p(b,A==null?void 0:A.endpointName,d,_.config)}};function p(y,d,E,T){var _,b=n.endpointDefinitions[d],w=(_=b==null?void 0:b.keepUnusedDataFor)!=null?_:T.keepUnusedDataFor;if(w!==1/0){var v=Math.max(0,Math.min(w,Sl));if(!o(y)){var m=l[y];m&&clearTimeout(m),l[y]=setTimeout(function(){o(y)||E.dispatch(s({queryCacheKey:y})),delete l[y]},v*1e3)}}}return f},Ol=function(t){var e=t.reducerPath,r=t.context,n=t.context.endpointDefinitions,i=t.mutationThunk,a=t.api,s=t.assertTagType,u=t.refetchQuery,o=a.internalActions.removeQueryResult,l=x.isAnyOf(x.isFulfilled(i),x.isRejectedWithValue(i)),f=function(y,d){l(y)&&p(Ea(y,"invalidatesTags",n,s),d),a.util.invalidateTags.match(y)&&p(_a(y.payload,void 0,void 0,void 0,void 0,s),d)};function p(y,d){var E=d.getState(),T=E[e],_=a.util.selectInvalidatedBy(E,y);r.batch(function(){for(var b,w=Array.from(_.values()),v=0,m=w;v<m.length;v++){var g=m[v].queryCacheKey,h=T.queries[g],I=(b=T.subscriptions[g])!=null?b:{};h&&(Object.keys(I).length===0?d.dispatch(o({queryCacheKey:g})):h.status!==ne.uninitialized&&d.dispatch(u(h,g)))}})}return f},Al=function(t){var e=t.reducerPath,r=t.queryThunk,n=t.api,i=t.refetchQuery,a=t.internalState,s={},u=function(d,E){(n.internalActions.updateSubscriptionOptions.match(d)||n.internalActions.unsubscribeQueryResult.match(d))&&l(d.payload,E),(r.pending.match(d)||r.rejected.match(d)&&d.meta.condition)&&l(d.meta.arg,E),(r.fulfilled.match(d)||r.rejected.match(d)&&!d.meta.condition)&&o(d.meta.arg,E),n.util.resetApiState.match(d)&&p()};function o(d,E){var T=d.queryCacheKey,_=E.getState()[e],b=_.queries[T],w=a.currentSubscriptions[T];if(!(!b||b.status===ne.uninitialized)){var v=y(w);if(Number.isFinite(v)){var m=s[T];m!=null&&m.timeout&&(clearTimeout(m.timeout),m.timeout=void 0);var g=Date.now()+v,h=s[T]={nextPollTimestamp:g,pollingInterval:v,timeout:setTimeout(function(){h.timeout=void 0,E.dispatch(i(b,T))},v)}}}}function l(d,E){var T=d.queryCacheKey,_=E.getState()[e],b=_.queries[T],w=a.currentSubscriptions[T];if(!(!b||b.status===ne.uninitialized)){var v=y(w);if(!Number.isFinite(v)){f(T);return}var m=s[T],g=Date.now()+v;(!m||g<m.nextPollTimestamp)&&o({queryCacheKey:T},E)}}function f(d){var E=s[d];E!=null&&E.timeout&&clearTimeout(E.timeout),delete s[d]}function p(){for(var d=0,E=Object.keys(s);d<E.length;d++){var T=E[d];f(T)}}function y(d){d===void 0&&(d={});var E=Number.POSITIVE_INFINITY;for(var T in d)d[T].pollingInterval&&(E=Math.min(d[T].pollingInterval,E));return E}return u},Cl=function(t){var e=t.reducerPath,r=t.context,n=t.api,i=t.refetchQuery,a=t.internalState,s=n.internalActions.removeQueryResult,u=function(l,f){cn.match(l)&&o(f,"refetchOnFocus"),ln.match(l)&&o(f,"refetchOnReconnect")};function o(l,f){var p=l.getState()[e],y=p.queries,d=a.currentSubscriptions;r.batch(function(){for(var E=0,T=Object.keys(d);E<T.length;E++){var _=T[E],b=y[_],w=d[_];if(!(!w||!b)){var v=Object.values(w).some(function(m){return m[f]===!0})||Object.values(w).every(function(m){return m[f]===void 0})&&p.config[f];v&&(Object.keys(w).length===0?l.dispatch(s({queryCacheKey:_})):b.status!==ne.uninitialized&&l.dispatch(i(b,_)))}}})}return u},Aa=new Error("Promise never resolved before cacheEntryRemoved."),Pl=function(t){var e=t.api,r=t.reducerPath,n=t.context,i=t.queryThunk,a=t.mutationThunk;t.internalState;var s=x.isAsyncThunkAction(i),u=x.isAsyncThunkAction(a),o=x.isFulfilled(i,a),l={},f=function(d,E,T){var _=p(d);if(i.pending.match(d)){var b=T[r].queries[_],w=E.getState()[r].queries[_];!b&&w&&y(d.meta.arg.endpointName,d.meta.arg.originalArgs,_,E,d.meta.requestId)}else if(a.pending.match(d)){var w=E.getState()[r].mutations[_];w&&y(d.meta.arg.endpointName,d.meta.arg.originalArgs,_,E,d.meta.requestId)}else if(o(d)){var v=l[_];v!=null&&v.valueResolved&&(v.valueResolved({data:d.payload,meta:d.meta.baseQueryMeta}),delete v.valueResolved)}else if(e.internalActions.removeQueryResult.match(d)||e.internalActions.removeMutationResult.match(d)){var v=l[_];v&&(delete l[_],v.cacheEntryRemoved())}else if(e.util.resetApiState.match(d))for(var m=0,g=Object.entries(l);m<g.length;m++){var h=g[m],I=h[0],v=h[1];delete l[I],v.cacheEntryRemoved()}};function p(d){return s(d)?d.meta.arg.queryCacheKey:u(d)?d.meta.requestId:e.internalActions.removeQueryResult.match(d)?d.payload.queryCacheKey:e.internalActions.removeMutationResult.match(d)?Bt(d.payload):""}function y(d,E,T,_,b){var w=n.endpointDefinitions[d],v=w==null?void 0:w.onCacheEntryAdded;if(v){var m={},g=new Promise(function(A){m.cacheEntryRemoved=A}),h=Promise.race([new Promise(function(A){m.valueResolved=A}),g.then(function(){throw Aa})]);h.catch(function(){}),l[T]=m;var I=e.endpoints[d].select(w.type===Ne.query?E:T),R=_.dispatch(function(A,C,P){return P}),O=De(oe({},_),{getCacheEntry:function(){return I(_.getState())},requestId:b,extra:R,updateCachedData:w.type===Ne.query?function(A){return _.dispatch(e.util.updateQueryData(d,E,A))}:void 0,cacheDataLoaded:h,cacheEntryRemoved:g}),S=v(E,O);Promise.resolve(S).catch(function(A){if(A!==Aa)throw A})}}return f},kl=function(t){var e=t.api,r=t.context,n=t.queryThunk,i=t.mutationThunk,a=x.isPending(n,i),s=x.isRejected(n,i),u=x.isFulfilled(n,i),o={},l=function(f,p){var y,d,E;if(a(f)){var T=f.meta,_=T.requestId,b=T.arg,w=b.endpointName,v=b.originalArgs,m=r.endpointDefinitions[w],g=m==null?void 0:m.onQueryStarted;if(g){var h={},I=new Promise(function(M,j){h.resolve=M,h.reject=j});I.catch(function(){}),o[_]=h;var R=e.endpoints[w].select(m.type===Ne.query?v:_),O=p.dispatch(function(M,j,F){return F}),S=De(oe({},p),{getCacheEntry:function(){return R(p.getState())},requestId:_,extra:O,updateCachedData:m.type===Ne.query?function(M){return p.dispatch(e.util.updateQueryData(w,v,M))}:void 0,queryFulfilled:I});g(v,S)}}else if(u(f)){var A=f.meta,_=A.requestId,C=A.baseQueryMeta;(y=o[_])==null||y.resolve({data:f.payload,meta:C}),delete o[_]}else if(s(f)){var P=f.meta,_=P.requestId,D=P.rejectedWithValue,C=P.baseQueryMeta;(E=o[_])==null||E.reject({error:(d=f.payload)!=null?d:f.error,isUnhandledError:!D,meta:C}),delete o[_]}};return l},Dl=function(t){var e=t.api,r=t.context.apiUid,n=t.reducerPath;return function(i,a){var s,u;e.util.resetApiState.match(i)&&a.dispatch(e.internalActions.middlewareRegistered(r)),typeof process<"u"&&process.env.NODE_ENV==="development"&&e.internalActions.middlewareRegistered.match(i)&&i.payload===r&&((u=(s=a.getState()[n])==null?void 0:s.config)==null?void 0:u.middlewareRegistered)==="conflict"&&console.warn('There is a mismatch between slice and middleware for the reducerPath "'+n+`".
You can only have one api per reducer path, this will lead to crashes in various situations!`+(n==="api"?`
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!`:""))}},Ca,Nl=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis):function(t){return(Ca||(Ca=Promise.resolve())).then(t).catch(function(e){return setTimeout(function(){throw e},0)})},Ml=function(t){var e=t.api,r=t.queryThunk,n=t.internalState,i=e.reducerPath+"/subscriptions",a=null,s=!1,u=e.internalActions,o=u.updateSubscriptionOptions,l=u.unsubscribeQueryResult,f=function(p,y){var d,E,T,_,b,w,v,m,g;if(o.match(y)){var h=y.payload,I=h.queryCacheKey,R=h.requestId,O=h.options;return(d=p==null?void 0:p[I])!=null&&d[R]&&(p[I][R]=O),!0}if(l.match(y)){var S=y.payload,I=S.queryCacheKey,R=S.requestId;return p[I]&&delete p[I][R],!0}if(e.internalActions.removeQueryResult.match(y))return delete p[y.payload.queryCacheKey],!0;if(r.pending.match(y)){var A=y.meta,C=A.arg,R=A.requestId;if(C.subscribe){var P=(T=p[E=C.queryCacheKey])!=null?T:p[E]={};return P[R]=(b=(_=C.subscriptionOptions)!=null?_:P[R])!=null?b:{},!0}}if(r.rejected.match(y)){var D=y.meta,M=D.condition,C=D.arg,R=D.requestId;if(M&&C.subscribe){var P=(v=p[w=C.queryCacheKey])!=null?v:p[w]={};return P[R]=(g=(m=C.subscriptionOptions)!=null?m:P[R])!=null?g:{},!0}}return!1};return function(p,y){var d,E;if(a||(a=JSON.parse(JSON.stringify(n.currentSubscriptions))),e.util.resetApiState.match(p))return a=n.currentSubscriptions={},[!0,!1];if(e.internalActions.internal_probeSubscription.match(p)){var T=p.payload,_=T.queryCacheKey,b=T.requestId,w=!!((d=n.currentSubscriptions[_])!=null&&d[b]);return[!1,w]}var v=f(n.currentSubscriptions,p);if(v){s||(Nl(function(){var I=JSON.parse(JSON.stringify(n.currentSubscriptions)),R=ia(a,function(){return I}),O=R[1];y.next(e.internalActions.subscriptionsUpdated(O)),a=I,s=!1}),s=!0);var m=!!((E=p.type)!=null&&E.startsWith(i)),g=r.rejected.match(p)&&p.meta.condition&&!!p.meta.arg.subscribe,h=!m&&!g;return[h,!1]}return[!0,!1]}};function xl(t){var e=t.reducerPath,r=t.queryThunk,n=t.api,i=t.context,a=i.apiUid,s={invalidateTags:x.createAction(e+"/invalidateTags")},u=function(p){return!!p&&typeof p.type=="string"&&p.type.startsWith(e+"/")},o=[Dl,Rl,Ol,Al,Pl,kl],l=function(p){var y=!1,d={currentSubscriptions:{}},E=De(oe({},t),{internalState:d,refetchQuery:f}),T=o.map(function(w){return w(E)}),_=Ml(E),b=Cl(E);return function(w){return function(v){y||(y=!0,p.dispatch(n.internalActions.middlewareRegistered(a)));var m=De(oe({},p),{next:w}),g=p.getState(),h=_(v,m,g),I=h[0],R=h[1],O;if(I?O=w(v):O=R,p.getState()[e]&&(b(v,m,g),u(v)||i.hasRehydrationInfo(v)))for(var S=0,A=T;S<A.length;S++){var C=A[S];C(v,m,g)}return O}}};return{middleware:l,actions:s};function f(p,y,d){return d===void 0&&(d={}),r(oe({type:"query",endpointName:p.endpointName,originalArgs:p.originalArgs,subscribe:!1,forceRefetch:!0,queryCacheKey:y},d))}}function Je(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];Object.assign.apply(Object,fr([t],e))}var Pa=Symbol(),Ll=function(){return{name:Pa,init:function(t,e,r){var n=e.baseQuery,i=e.tagTypes,a=e.reducerPath,s=e.serializeQueryArgs,u=e.keepUnusedDataFor,o=e.refetchOnMountOrArgChange,l=e.refetchOnFocus,f=e.refetchOnReconnect;Kc();var p=function(V){return typeof process<"u"&&process.env.NODE_ENV==="development"&&(i.includes(V.type)||console.error("Tag type '"+V.type+"' was used, but not specified in `tagTypes`!")),V};Object.assign(t,{reducerPath:a,endpoints:{},internalActions:{onOnline:ln,onOffline:ya,onFocus:cn,onFocusLost:ma},util:{}});var y=_l({baseQuery:n,reducerPath:a,context:r,api:t,serializeQueryArgs:s}),d=y.queryThunk,E=y.mutationThunk,T=y.patchQueryData,_=y.updateQueryData,b=y.upsertQueryData,w=y.prefetch,v=y.buildMatchThunkActions,m=Il({context:r,queryThunk:d,mutationThunk:E,reducerPath:a,assertTagType:p,config:{refetchOnFocus:l,refetchOnReconnect:f,refetchOnMountOrArgChange:o,keepUnusedDataFor:u,reducerPath:a}}),g=m.reducer,h=m.actions;Je(t.util,{patchQueryData:T,updateQueryData:_,upsertQueryData:b,prefetch:w,resetApiState:h.resetApiState}),Je(t.internalActions,h);var I=xl({reducerPath:a,context:r,queryThunk:d,mutationThunk:E,api:t,assertTagType:p}),R=I.middleware,O=I.actions;Je(t.util,O),Je(t,{reducer:g,middleware:R});var S=El({serializeQueryArgs:s,reducerPath:a}),A=S.buildQuerySelector,C=S.buildMutationSelector,P=S.selectInvalidatedBy;Je(t.util,{selectInvalidatedBy:P});var D=bl({queryThunk:d,mutationThunk:E,api:t,serializeQueryArgs:s,context:r}),M=D.buildInitiateQuery,j=D.buildInitiateMutation,F=D.getRunningMutationThunk,U=D.getRunningMutationsThunk,z=D.getRunningQueriesThunk,$=D.getRunningQueryThunk,W=D.getRunningOperationPromises,J=D.removalWarning;return Je(t.util,{getRunningOperationPromises:W,getRunningOperationPromise:J,getRunningMutationThunk:F,getRunningMutationsThunk:U,getRunningQueryThunk:$,getRunningQueriesThunk:z}),{name:Pa,injectEndpoint:function(V,Y){var Q,X,ie=t;(X=(Q=ie.endpoints)[V])!=null||(Q[V]={}),ba(Y)?Je(ie.endpoints[V],{name:V,select:A(V,Y),initiate:M(V,Y)},v(d,V)):ml(Y)&&Je(ie.endpoints[V],{name:V,select:C(),initiate:j(V)},v(E,V))}}}}},Fl=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t},Ul=Object.defineProperty,jl=Object.defineProperties,Bl=Object.getOwnPropertyDescriptors,ka=Object.getOwnPropertySymbols,ql=Object.prototype.hasOwnProperty,Hl=Object.prototype.propertyIsEnumerable,Da=function(t,e,r){return e in t?Ul(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},qe=function(t,e){for(var r in e||(e={}))ql.call(e,r)&&Da(t,r,e[r]);if(ka)for(var n=0,i=ka(e);n<i.length;n++){var r=i[n];Hl.call(e,r)&&Da(t,r,e[r])}return t},mr=function(t,e){return jl(t,Bl(e))};function Na(t,e,r,n){var i=H.useMemo(function(){return{queryArgs:t,serialized:typeof t=="object"?e({queryArgs:t,endpointDefinition:r,endpointName:n}):t}},[t,e,r,n]),a=H.useRef(i);return H.useEffect(function(){a.current.serialized!==i.serialized&&(a.current=i)},[i]),a.current.serialized===i.serialized?a.current.queryArgs:t}var pn=Symbol();function vn(t){var e=H.useRef(t);return H.useEffect(function(){Me.shallowEqual(e.current,t)||(e.current=t)},[t]),Me.shallowEqual(e.current,t)?e.current:t}var yr=WeakMap?new WeakMap:void 0,Vl=function(t){var e=t.endpointName,r=t.queryArgs,n="",i=yr==null?void 0:yr.get(r);if(typeof i=="string")n=i;else{var a=JSON.stringify(r,function(s,u){return x.isPlainObject(u)?Object.keys(u).sort().reduce(function(o,l){return o[l]=u[l],o},{}):u});x.isPlainObject(r)&&(yr==null||yr.set(r,a)),n=a}return e+"("+n+")"},zl=typeof window<"u"&&window.document&&window.document.createElement?H.useLayoutEffect:H.useEffect,Wl=function(t){return t},Ql=function(t){return t.isUninitialized?mr(qe({},t),{isUninitialized:!1,isFetching:!0,isLoading:t.data===void 0,status:ne.pending}):t};function Kl(t){var e=t.api,r=t.moduleOptions,n=r.batch,i=r.useDispatch,a=r.useSelector,s=r.useStore,u=r.unstable__sideEffectsInRender,o=t.serializeQueryArgs,l=t.context,f=u?function(T){return T()}:H.useEffect;return{buildQueryHooks:d,buildMutationHook:E,usePrefetch:y};function p(T,_,b){if(_!=null&&_.endpointName&&T.isUninitialized){var w=_.endpointName,v=l.endpointDefinitions[w];o({queryArgs:_.originalArgs,endpointDefinition:v,endpointName:w})===o({queryArgs:b,endpointDefinition:v,endpointName:w})&&(_=void 0)}var m=T.isSuccess?T.data:_==null?void 0:_.data;m===void 0&&(m=T.data);var g=m!==void 0,h=T.isLoading,I=!g&&h,R=T.isSuccess||h&&g;return mr(qe({},T),{data:m,currentData:T.data,isFetching:h,isLoading:I,isSuccess:R})}function y(T,_){var b=i(),w=vn(_);return H.useCallback(function(v,m){return b(e.util.prefetch(T,v,qe(qe({},w),m)))},[T,b,w])}function d(T){var _=function(v,m){var g=m===void 0?{}:m,h=g.refetchOnReconnect,I=g.refetchOnFocus,R=g.refetchOnMountOrArgChange,O=g.skip,S=O===void 0?!1:O,A=g.pollingInterval,C=A===void 0?0:A,P=e.endpoints[T].initiate,D=i(),M=Na(S?at:v,Vl,l.endpointDefinitions[T],T),j=vn({refetchOnReconnect:h,refetchOnFocus:I,pollingInterval:C}),F=H.useRef(!1),U=H.useRef(),z=U.current||{},$=z.queryCacheKey,W=z.requestId,J=!1;if($&&W){var V=D(e.internalActions.internal_probeSubscription({queryCacheKey:$,requestId:W}));if(process.env.NODE_ENV!=="production"&&typeof V!="boolean")throw new Error('Warning: Middleware for RTK-Query API at reducerPath "'+e.reducerPath+`" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);J=!!V}var Y=!J&&F.current;return f(function(){F.current=J}),f(function(){Y&&(U.current=void 0)},[Y]),f(function(){var Q,X=U.current;if(typeof process<"u"&&process.env.NODE_ENV==="removeMeOnCompilation"&&console.log(Y),M===at){X==null||X.unsubscribe(),U.current=void 0;return}var ie=(Q=U.current)==null?void 0:Q.subscriptionOptions;if(!X||X.arg!==M){X==null||X.unsubscribe();var pe=D(P(M,{subscriptionOptions:j,forceRefetch:R}));U.current=pe}else j!==ie&&X.updateSubscriptionOptions(j)},[D,P,R,M,j,Y]),H.useEffect(function(){return function(){var Q;(Q=U.current)==null||Q.unsubscribe(),U.current=void 0}},[]),H.useMemo(function(){return{refetch:function(){var Q;if(!U.current)throw new Error("Cannot refetch a query that has not been started yet.");return(Q=U.current)==null?void 0:Q.refetch()}}},[])},b=function(v){var m=v===void 0?{}:v,g=m.refetchOnReconnect,h=m.refetchOnFocus,I=m.pollingInterval,R=I===void 0?0:I,O=e.endpoints[T].initiate,S=i(),A=H.useState(pn),C=A[0],P=A[1],D=H.useRef(),M=vn({refetchOnReconnect:g,refetchOnFocus:h,pollingInterval:R});f(function(){var U,z,$=(U=D.current)==null?void 0:U.subscriptionOptions;M!==$&&((z=D.current)==null||z.updateSubscriptionOptions(M))},[M]);var j=H.useRef(M);f(function(){j.current=M},[M]);var F=H.useCallback(function(U,z){z===void 0&&(z=!1);var $;return n(function(){var W;(W=D.current)==null||W.unsubscribe(),D.current=$=S(O(U,{subscriptionOptions:j.current,forceRefetch:!z})),P(U)}),$},[S,O]);return H.useEffect(function(){return function(){var U;(U=D==null?void 0:D.current)==null||U.unsubscribe()}},[]),H.useEffect(function(){C!==pn&&!D.current&&F(C,!0)},[C,F]),H.useMemo(function(){return[F,C]},[F,C])},w=function(v,m){var g=m===void 0?{}:m,h=g.skip,I=h===void 0?!1:h,R=g.selectFromResult,O=e.endpoints[T].select,S=Na(I?at:v,o,l.endpointDefinitions[T],T),A=H.useRef(),C=H.useMemo(function(){return x.createSelector([O(S),function(F,U){return U},function(F){return S}],p)},[O,S]),P=H.useMemo(function(){return R?x.createSelector([C],R):C},[C,R]),D=a(function(F){return P(F,A.current)},Me.shallowEqual),M=s(),j=C(M.getState(),A.current);return zl(function(){A.current=j},[j]),D};return{useQueryState:w,useQuerySubscription:_,useLazyQuerySubscription:b,useLazyQuery:function(v){var m=b(v),g=m[0],h=m[1],I=w(h,mr(qe({},v),{skip:h===pn})),R=H.useMemo(function(){return{lastArg:h}},[h]);return H.useMemo(function(){return[g,I,R]},[g,I,R])},useQuery:function(v,m){var g=_(v,m),h=w(v,qe({selectFromResult:v===at||m!=null&&m.skip?void 0:Ql},m)),I=h.data,R=h.status,O=h.isLoading,S=h.isSuccess,A=h.isError,C=h.error;return H.useDebugValue({data:I,status:R,isLoading:O,isSuccess:S,isError:A,error:C}),H.useMemo(function(){return qe(qe({},h),g)},[h,g])}}}function E(T){return function(_){var b=_===void 0?{}:_,w=b.selectFromResult,v=w===void 0?Wl:w,m=b.fixedCacheKey,g=e.endpoints[T],h=g.select,I=g.initiate,R=i(),O=H.useState(),S=O[0],A=O[1];H.useEffect(function(){return function(){S!=null&&S.arg.fixedCacheKey||S==null||S.reset()}},[S]);var C=H.useCallback(function(X){var ie=R(I(X,{fixedCacheKey:m}));return A(ie),ie},[R,I,m]),P=(S||{}).requestId,D=H.useMemo(function(){return x.createSelector([h({fixedCacheKey:m,requestId:S==null?void 0:S.requestId})],v)},[h,S,v,m]),M=a(D,Me.shallowEqual),j=m==null?S==null?void 0:S.arg.originalArgs:void 0,F=H.useCallback(function(){n(function(){S&&A(void 0),m&&R(e.internalActions.removeMutationResult({requestId:P,fixedCacheKey:m}))})},[R,m,S,P]),U=M.endpointName,z=M.data,$=M.status,W=M.isLoading,J=M.isSuccess,V=M.isError,Y=M.error;H.useDebugValue({endpointName:U,data:z,status:$,isLoading:W,isSuccess:J,isError:V,error:Y});var Q=H.useMemo(function(){return mr(qe({},M),{originalArgs:j,reset:F})},[M,j,F]);return H.useMemo(function(){return[C,Q]},[C,Q])}}}var br;(function(t){t.query="query",t.mutation="mutation"})(br||(br={}));function $l(t){return t.type===br.query}function Gl(t){return t.type===br.mutation}function gn(t){return t.replace(t[0],t[0].toUpperCase())}function _r(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];Object.assign.apply(Object,Fl([t],e))}var Jl=Symbol(),Yl=function(t){var e=t===void 0?{}:t,r=e.batch,n=r===void 0?Me.batch:r,i=e.useDispatch,a=i===void 0?Me.useDispatch:i,s=e.useSelector,u=s===void 0?Me.useSelector:s,o=e.useStore,l=o===void 0?Me.useStore:o,f=e.unstable__sideEffectsInRender,p=f===void 0?!1:f;return{name:Jl,init:function(y,d,E){var T=d.serializeQueryArgs,_=y,b=Kl({api:y,moduleOptions:{batch:n,useDispatch:a,useSelector:u,useStore:l,unstable__sideEffectsInRender:p},serializeQueryArgs:T,context:E}),w=b.buildQueryHooks,v=b.buildMutationHook,m=b.usePrefetch;return _r(_,{usePrefetch:m}),_r(E,{batch:n}),{injectEndpoint:function(g,h){if($l(h)){var I=w(g),R=I.useQuery,O=I.useLazyQuery,S=I.useLazyQuerySubscription,A=I.useQueryState,C=I.useQuerySubscription;_r(_.endpoints[g],{useQuery:R,useLazyQuery:O,useLazyQuerySubscription:S,useQueryState:A,useQuerySubscription:C}),y["use"+gn(g)+"Query"]=R,y["useLazy"+gn(g)+"Query"]=O}else if(Gl(h)){var P=v(g);_r(_.endpoints[g],{useMutation:P}),y["use"+gn(g)+"Mutation"]=P}}}}}},Xl=Tl(Ll(),Yl());const st=Xl({baseQuery:gl({baseUrl:ae.endpoint,prepareHeaders:(t,{getState:e,endpoint:r})=>{const{isAuthenticated:n,refresh_token:i}=e().userReducer;return n&&i&&r==="updateLogin"&&t.set(ae.refreshTokenHeader,ae.keywoardRefreshTokenHeader?`${ae.keywoardRefreshTokenHeader} ${i}`:i),t.set("Content-Type","application/json")}}),endpoints:t=>({login:t.mutation({query({email:e,encodedBody:r,password:n,username:i,token:a}){if(a)return{url:"",method:"POST",headers:{Authorization:`${ae.keywoard} ${a}`}};if(r)return{url:ae.urlForBase64??"",method:"POST",headers:{authorization:"Basic "+r}};let s={};return n&&(s={...s,password:n}),e&&(s={...s,email:e}),i&&(s={...s,username:i}),{url:ae.urlForEmailOrUser??"",method:"POST",body:s}}}),updateLogin:t.mutation({query(){return{url:ae.urlForRefreshToken??"login/update",method:"PUT"}}})})}),{useLoginMutation:Zl,useUpdateLoginMutation:ed}=st,td=t=>xt($e(),Gi).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),rd=t=>xt($e(),$i).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),nd=t=>xt($e(),Uc).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),id=t=>xt($e(),jc).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),ad=t=>xt($e(),Bc).catch(e=>{const{code:r,message:n,customData:i}=e,{email:a}=i;t.value={code:r,message:n,email:a}}),sd=1e3,od=5e3,ud=(t,e)=>{const[r]=Zl(),[n]=ed(),i=Te.useSignal({email:"",username:"",password:""}),a=Te.useSignal(!1),s=Te.useSignal(!1),u=Te.useSignal(!1),o=Te.useSignal({}),l=()=>{Te.batch(()=>{a.value=!a.value,s.value&&(s.value=!s.value)})},f=T=>{const{name:_,value:b}=T.target;i.value={...i.value,[_]:b}},p=T=>{if(T.preventDefault(),ae.hasToS&&!a.value){s.value=!0;return}if(u.value)return;u.value=!0;let _={};if(ae.acceptUsername?_={username:i.value.username,password:i.value.password}:_={email:i.value.email,password:i.value.password},ae.bodyAsBase64){const b=Object.entries(_).map(([v,m])=>`${v}=${m}`).join("&");_={encodedBody:btoa(b)}}r(_).unwrap().then(y).catch(b=>{"data"in b?o.value={code:"auth/firebase-credential-not-provided",message:b.data&&(Object.values(b.data).find(w=>typeof w=="string")??b.data)}:"status"in b&&(o.value={code:"auth/fetch-failed",message:"error"in b?b.error:"Unexpected Error"})}),u.value=!1},y=T=>{t(async(_,b,w,v)=>{clearInterval(b.current),b.current=void 0,b.current=setInterval(()=>{n().unwrap().then(m=>_.value=m).catch(m=>{clearInterval(b.current),"data"in m?w.value={code:"auth/firebase-credential-not-provided",message:m.data&&(Object.values(m.data).find(g=>typeof g=="string")??m.data)}:"status"in m&&(w.value={code:"auth/fetch-failed",message:"error"in m?m.error:"Unexpected Error"})})},T.expiry*sd-od),_.value=T,v.value=async()=>{await Oi($e()).finally(()=>clearInterval(b.current)),v.value=void 0}}),typeof e=="function"?e(_=>!_):e.value=!e.value},d=async T=>{r({token:T}).unwrap().then(y).catch(_=>{"data"in _?o.value={code:"auth/firebase-credential-not-provided",message:_.data&&(Object.values(_.data).find(b=>typeof b=="string")??_.data)}:"status"in _&&(o.value={code:"auth/fetch-failed",message:"error"in _?_.error:"Unexpected Error"})})};return{form:i,radio:a,isLoading:u,handleError:o,confirmTp:s,handleChange:f,handlerRadio:l,handleSocialLogin:async(T,_)=>{if(T.preventDefault(),ae.hasToS&&!a.value){s.value=!0;return}if(!u.value){switch(u.value=!0,_){case Tn:await rd(o).then(async b=>{b&&(Oe.credentialFromResult(b)===null&&(o.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),b.user.getIdToken().then(d))});break;case wn:await td(o).then(async b=>{b&&(Re.credentialFromResult(b)===null&&(o.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),b.user.getIdToken().then(d))});break;case Sn:await nd(o).then(async b=>{b&&(Ce.credentialFromResult(b)===null&&(o.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),b.user.getIdToken().then(d))});break;case Rn:await id(o).then(async b=>{b&&(Ae.credentialFromResult(b)===null&&(o.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),b.user.getIdToken().then(d))});break;case On:await ad(o).then(async b=>{b&&(pt.credentialFromResult(b)===null&&(o.value={code:"response/empty-credentials",message:"Firebase: Unavailable to get credentials"}),b.user.getIdToken().then(d))});break}u.value=!1}},handleSubmit:p,handleToken:d}},cd=({isOpen:t,message:e,authManager:r})=>{const{form:n,radio:i,confirmTp:a,isLoading:s,handleError:u,handleSubmit:o,handleChange:l,handlerRadio:f,handleSocialLogin:p,handleToken:y}=ud(r,t),d=ns(ae.languaje),E=Te.useSignal(void 0);H.useEffect(()=>{(async()=>{s.value=!0;let b=Tu($e(),async w=>{w&&await w.getIdToken().then(v=>{const m=w.providerData[0];E.value={...m,providerId:m.providerId.split(".")[0],tokenId:v}}).finally(()=>s.value=!1),s.value=!1,b()})})()},[]);const T=()=>{Oi($e()).finally(()=>E.value=void 0)};return L.jsx($a,{title:d.logIn,closeAction:t,message:s.value?L.jsx(Ga,{}):e,children:L.jsxs("div",{className:"login-container",children:[L.jsxs("div",{className:"login",children:[L.jsxs("div",{children:[ts(ae.signInMethods).map(({className:_,name:b,constName:w,icon:v},m)=>L.jsxs("button",{onClick:g=>p(g,w),className:_,children:[v&&v,b]},m)),u.value.message&&L.jsx("span",{className:"notify error",children:ae.firebaseErrorMessages?Ja(ae.firebaseErrorMessages,u.value):u.value.message})]}),L.jsx("div",{children:L.jsxs("form",{className:"email",onSubmit:o,children:[ae.acceptUsername?L.jsx(L.Fragment,{children:L.jsx("input",{placeholder:`Email | ${d.username}`,required:!0,name:"username",onChange:l,value:n.value.username,type:"text"})}):L.jsx(L.Fragment,{children:L.jsx("input",{placeholder:"Email",required:!0,name:"email",onChange:l,value:n.value.email,type:"email"})}),L.jsx("input",{placeholder:d.password,required:!0,name:"password",onChange:l,value:n.value.password,type:"password"}),L.jsx("button",{type:"submit",className:"email-login",children:d.continue})]})})]}),E.value&&L.jsxs("div",{className:"user-already-loggued",children:[L.jsxs("label",{htmlFor:"",children:[d.continueAs," ",E.value.displayName,E.value.photoURL&&L.jsx("img",{src:E.value.photoURL,alt:"user image"}),L.jsxs("span",{children:[d.logguedWith," ",E.value.providerId]})]}),L.jsxs("div",{className:"user-loggued-choice",children:[L.jsx("button",{onClick:()=>{var _;return y(((_=E.value)==null?void 0:_.tokenId)??"")},className:"choice-ok",children:"Ok"}),L.jsx("button",{onClick:T,className:"choice-not",children:d.logOut})]})]}),ae.hasToS&&L.jsxs(L.Fragment,{children:[L.jsxs("label",{className:"login-accept",children:[L.jsx("input",{onChange:f,type:"checkbox",checked:i.value}),ae.hasToS.label]}),a.value&&L.jsx("span",{autoFocus:!0,className:"notify error",children:ae.hasToS.errorLabel})]})]})})},Ma={user:null,isAuthenticated:!1,expiry:void 0,refresh_token:void 0,token:void 0},ld=x.createSlice({name:"UserSlice",initialState:Ma,reducers:{},extraReducers(t){t.addMatcher(st.endpoints.login.matchFulfilled,(e,r)=>(e={...r.payload,isAuthenticated:!0},e)).addMatcher(st.endpoints.updateLogin.matchFulfilled,(e,r)=>(e={...r.payload,isAuthenticated:!0},e)).addMatcher(st.endpoints.updateLogin.matchRejected,e=>(e=Ma,e))}}),{reducer:dd}=ld,fd=x.combineReducers({userReducer:dd,[st.reducerPath]:st.reducer}),hd=x.configureStore({reducer:fd,middleware:t=>t().concat(st.middleware)}),pd=({isOpen:t,message:e,authManager:r})=>Fc()?L.jsx(Me.Provider,{store:hd,children:L.jsx(cd,{isOpen:t,authManager:r,message:e})}):L.jsx("div",{children:"Error: Missing firebaseConfig in setConfig"});ye.Auth=pd,ye.setConfig=is,ye.useAuth=as,Object.defineProperty(ye,Symbol.toStringTag,{value:"Module"})});
