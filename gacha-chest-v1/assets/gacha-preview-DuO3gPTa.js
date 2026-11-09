(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();var tl={exports:{}},Rr={},al={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zn=Symbol.for("react.element"),Dp=Symbol.for("react.portal"),Bp=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),Wp=Symbol.for("react.profiler"),Tp=Symbol.for("react.provider"),Ep=Symbol.for("react.context"),Rp=Symbol.for("react.forward_ref"),Yp=Symbol.for("react.suspense"),Hp=Symbol.for("react.memo"),_p=Symbol.for("react.lazy"),Pc=Symbol.iterator;function Gp(e){return e===null||typeof e!="object"?null:(e=Pc&&e[Pc]||e["@@iterator"],typeof e=="function"?e:null)}var nl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rl=Object.assign,il={};function Da(e,t,a){this.props=e,this.context=t,this.refs=il,this.updater=a||nl}Da.prototype.isReactComponent={};Da.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Da.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sl(){}sl.prototype=Da.prototype;function Ds(e,t,a){this.props=e,this.context=t,this.refs=il,this.updater=a||nl}var Bs=Ds.prototype=new sl;Bs.constructor=Ds;rl(Bs,Da.prototype);Bs.isPureReactComponent=!0;var Dc=Array.isArray,cl=Object.prototype.hasOwnProperty,zs={current:null},ol={key:!0,ref:!0,__self:!0,__source:!0};function ll(e,t,a){var n,r={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)cl.call(t,n)&&!ol.hasOwnProperty(n)&&(r[n]=t[n]);var o=arguments.length-2;if(o===1)r.children=a;else if(1<o){for(var c=Array(o),p=0;p<o;p++)c[p]=arguments[p+2];r.children=c}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)r[n]===void 0&&(r[n]=o[n]);return{$$typeof:Zn,type:e,key:i,ref:s,props:r,_owner:zs.current}}function Lp(e,t){return{$$typeof:Zn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ws(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zn}function Jp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Bc=/\/+/g;function si(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jp(""+e.key):t.toString(36)}function $n(e,t,a,n,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Zn:case Dp:s=!0}}if(s)return s=e,r=r(s),e=n===""?"."+si(s,0):n,Dc(r)?(a="",e!=null&&(a=e.replace(Bc,"$&/")+"/"),$n(r,t,a,"",function(p){return p})):r!=null&&(Ws(r)&&(r=Lp(r,a+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Bc,"$&/")+"/")+e)),t.push(r)),1;if(s=0,n=n===""?".":n+":",Dc(e))for(var o=0;o<e.length;o++){i=e[o];var c=n+si(i,o);s+=$n(i,t,a,c,r)}else if(c=Gp(e),typeof c=="function")for(e=c.call(e),o=0;!(i=e.next()).done;)i=i.value,c=n+si(i,o++),s+=$n(i,t,a,c,r);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Pn(e,t,a){if(e==null)return e;var n=[],r=0;return $n(e,n,"","",function(i){return t.call(a,i,r++)}),n}function Up(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},qn={transition:null},Fp={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:qn,ReactCurrentOwner:zs};function pl(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Pn,forEach:function(e,t,a){Pn(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Pn(e,function(){t++}),t},toArray:function(e){return Pn(e,function(t){return t})||[]},only:function(e){if(!Ws(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Da;H.Fragment=Bp;H.Profiler=Wp;H.PureComponent=Ds;H.StrictMode=zp;H.Suspense=Yp;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fp;H.act=pl;H.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=rl({},e.props),r=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=zs.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)cl.call(t,c)&&!ol.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=a;else if(1<c){o=Array(c);for(var p=0;p<c;p++)o[p]=arguments[p+2];n.children=o}return{$$typeof:Zn,type:e.type,key:r,ref:i,props:n,_owner:s}};H.createContext=function(e){return e={$$typeof:Ep,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tp,_context:e},e.Consumer=e};H.createElement=ll;H.createFactory=function(e){var t=ll.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Rp,render:e}};H.isValidElement=Ws;H.lazy=function(e){return{$$typeof:_p,_payload:{_status:-1,_result:e},_init:Up}};H.memo=function(e,t){return{$$typeof:Hp,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=qn.transition;qn.transition={};try{e()}finally{qn.transition=t}};H.unstable_act=pl;H.useCallback=function(e,t){return Me.current.useCallback(e,t)};H.useContext=function(e){return Me.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};H.useEffect=function(e,t){return Me.current.useEffect(e,t)};H.useId=function(){return Me.current.useId()};H.useImperativeHandle=function(e,t,a){return Me.current.useImperativeHandle(e,t,a)};H.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Me.current.useMemo(e,t)};H.useReducer=function(e,t,a){return Me.current.useReducer(e,t,a)};H.useRef=function(e){return Me.current.useRef(e)};H.useState=function(e){return Me.current.useState(e)};H.useSyncExternalStore=function(e,t,a){return Me.current.useSyncExternalStore(e,t,a)};H.useTransition=function(){return Me.current.useTransition()};H.version="18.3.1";al.exports=H;var E=al.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp=E,Qp=Symbol.for("react.element"),Op=Symbol.for("react.fragment"),Vp=Object.prototype.hasOwnProperty,Kp=Xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$p={key:!0,ref:!0,__self:!0,__source:!0};function gl(e,t,a){var n,r={},i=null,s=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Vp.call(t,n)&&!$p.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)r[n]===void 0&&(r[n]=t[n]);return{$$typeof:Qp,type:e,key:i,ref:s,props:r,_owner:Kp.current}}Rr.Fragment=Op;Rr.jsx=gl;Rr.jsxs=gl;tl.exports=Rr;var g=tl.exports,dl={exports:{}},ze={},ul={exports:{}},ml={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,P){var D=x.length;x.push(P);e:for(;0<D;){var J=D-1>>>1,ae=x[J];if(0<r(ae,P))x[J]=P,x[D]=ae,D=J;else break e}}function a(x){return x.length===0?null:x[0]}function n(x){if(x.length===0)return null;var P=x[0],D=x.pop();if(D!==P){x[0]=D;e:for(var J=0,ae=x.length,nt=ae>>>1;J<nt;){var rt=2*(J+1)-1,Rt=x[rt],Ke=rt+1,Yt=x[Ke];if(0>r(Rt,D))Ke<ae&&0>r(Yt,Rt)?(x[J]=Yt,x[Ke]=D,J=Ke):(x[J]=Rt,x[rt]=D,J=rt);else if(Ke<ae&&0>r(Yt,D))x[J]=Yt,x[Ke]=D,J=Ke;else break e}}return P}function r(x,P){var D=x.sortIndex-P.sortIndex;return D!==0?D:x.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var c=[],p=[],j=1,b=null,l=3,I=!1,v=!1,h=!1,w=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(x){for(var P=a(p);P!==null;){if(P.callback===null)n(p);else if(P.startTime<=x)n(p),P.sortIndex=P.expirationTime,t(c,P);else break;P=a(p)}}function f(x){if(h=!1,m(x),!v)if(a(c)!==null)v=!0,te(y);else{var P=a(p);P!==null&&O(f,P.startTime-x)}}function y(x,P){v=!1,h&&(h=!1,u(k),k=-1),I=!0;var D=l;try{for(m(P),b=a(c);b!==null&&(!(b.expirationTime>P)||x&&!T());){var J=b.callback;if(typeof J=="function"){b.callback=null,l=b.priorityLevel;var ae=J(b.expirationTime<=P);P=e.unstable_now(),typeof ae=="function"?b.callback=ae:b===a(c)&&n(c),m(P)}else n(c);b=a(c)}if(b!==null)var nt=!0;else{var rt=a(p);rt!==null&&O(f,rt.startTime-P),nt=!1}return nt}finally{b=null,l=D,I=!1}}var M=!1,N=null,k=-1,B=5,z=-1;function T(){return!(e.unstable_now()-z<B)}function S(){if(N!==null){var x=e.unstable_now();z=x;var P=!0;try{P=N(!0,x)}finally{P?W():(M=!1,N=null)}}else M=!1}var W;if(typeof d=="function")W=function(){d(S)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,Q=L.port2;L.port1.onmessage=S,W=function(){Q.postMessage(null)}}else W=function(){w(S,0)};function te(x){N=x,M||(M=!0,W())}function O(x,P){k=w(function(){x(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){v||I||(v=!0,te(y))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return l},e.unstable_getFirstCallbackNode=function(){return a(c)},e.unstable_next=function(x){switch(l){case 1:case 2:case 3:var P=3;break;default:P=l}var D=l;l=P;try{return x()}finally{l=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,P){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var D=l;l=x;try{return P()}finally{l=D}},e.unstable_scheduleCallback=function(x,P,D){var J=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?J+D:J):D=J,x){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=D+ae,x={id:j++,callback:P,priorityLevel:x,startTime:D,expirationTime:ae,sortIndex:-1},D>J?(x.sortIndex=D,t(p,x),a(c)===null&&x===a(p)&&(h?(u(k),k=-1):h=!0,O(f,D-J))):(x.sortIndex=ae,t(c,x),v||I||(v=!0,te(y))),x},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(x){var P=l;return function(){var D=l;l=P;try{return x.apply(this,arguments)}finally{l=D}}}})(ml);ul.exports=ml;var qp=ul.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg=E,Be=qp;function Z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fl=new Set,cn={};function ta(e,t){Za(e,t),Za(e+"Capture",t)}function Za(e,t){for(cn[e]=t,e=0;e<t.length;e++)fl.add(t[e])}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wi=Object.prototype.hasOwnProperty,tg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zc={},Wc={};function ag(e){return Wi.call(Wc,e)?!0:Wi.call(zc,e)?!1:tg.test(e)?Wc[e]=!0:(zc[e]=!0,!1)}function ng(e,t,a,n){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rg(e,t,a,n){if(t===null||typeof t>"u"||ng(e,t,a,n))return!0;if(n)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,a,n,r,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ts=/[\-:]([a-z])/g;function Es(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ts,Es);me[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ts,Es);me[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ts,Es);me[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rs(e,t,a,n){var r=me.hasOwnProperty(t)?me[t]:null;(r!==null?r.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rg(t,a,r,n)&&(a=null),n||r===null?ag(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):r.mustUseProperty?e[r.propertyName]=a===null?r.type===3?!1:"":a:(t=r.attributeName,n=r.attributeNamespace,a===null?e.removeAttribute(t):(r=r.type,a=r===3||r===4&&a===!0?"":""+a,n?e.setAttributeNS(n,t,a):e.setAttribute(t,a))))}var ft=eg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dn=Symbol.for("react.element"),ca=Symbol.for("react.portal"),oa=Symbol.for("react.fragment"),Ys=Symbol.for("react.strict_mode"),Ti=Symbol.for("react.profiler"),Il=Symbol.for("react.provider"),hl=Symbol.for("react.context"),Hs=Symbol.for("react.forward_ref"),Ei=Symbol.for("react.suspense"),Ri=Symbol.for("react.suspense_list"),_s=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),bl=Symbol.for("react.offscreen"),Tc=Symbol.iterator;function Wa(e){return e===null||typeof e!="object"?null:(e=Tc&&e[Tc]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,ci;function Ja(e){if(ci===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ci=t&&t[1]||""}return`
`+ci+e}var oi=!1;function li(e,t){if(!e||oi)return"";oi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var n=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){n=p}e.call(t.prototype)}else{try{throw Error()}catch(p){n=p}e()}}catch(p){if(p&&n&&typeof p.stack=="string"){for(var r=p.stack.split(`
`),i=n.stack.split(`
`),s=r.length-1,o=i.length-1;1<=s&&0<=o&&r[s]!==i[o];)o--;for(;1<=s&&0<=o;s--,o--)if(r[s]!==i[o]){if(s!==1||o!==1)do if(s--,o--,0>o||r[s]!==i[o]){var c=`
`+r[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=o);break}}}finally{oi=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?Ja(e):""}function ig(e){switch(e.tag){case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 2:case 15:return e=li(e.type,!1),e;case 11:return e=li(e.type.render,!1),e;case 1:return e=li(e.type,!0),e;default:return""}}function Yi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case oa:return"Fragment";case ca:return"Portal";case Ti:return"Profiler";case Ys:return"StrictMode";case Ei:return"Suspense";case Ri:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hl:return(e.displayName||"Context")+".Consumer";case Il:return(e._context.displayName||"Context")+".Provider";case Hs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _s:return t=e.displayName||null,t!==null?t:Yi(e.type)||"Memo";case bt:t=e._payload,e=e._init;try{return Yi(e(t))}catch{}}return null}function sg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yi(t);case 8:return t===Ys?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cg(e){var t=jl(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bn(e){e._valueTracker||(e._valueTracker=cg(e))}function vl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=jl(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hi(e,t){var a=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function Ec(e,t){var a=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;a=Bt(t.value!=null?t.value:a),e._wrapperState={initialChecked:n,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yl(e,t){t=t.checked,t!=null&&Rs(e,"checked",t,!1)}function _i(e,t){yl(e,t);var a=Bt(t.value),n=t.type;if(a!=null)n==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gi(e,t.type,a):t.hasOwnProperty("defaultValue")&&Gi(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Rc(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function Gi(e,t,a){(t!=="number"||dr(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var Ua=Array.isArray;function ja(e,t,a,n){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Bt(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,n&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Li(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Z(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yc(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(Z(92));if(Ua(a)){if(1<a.length)throw Error(Z(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:Bt(a)}}function wl(e,t){var a=Bt(t.value),n=Bt(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),n!=null&&(e.defaultValue=""+n)}function Hc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ml(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ji(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ml(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zn,xl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,n,r){MSApp.execUnsafeLocalFunction(function(){return e(t,a,n,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zn=zn||document.createElement("div"),zn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function on(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},og=["Webkit","ms","Moz","O"];Object.keys(Oa).forEach(function(e){og.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Oa[t]=Oa[e]})});function Zl(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||Oa.hasOwnProperty(e)&&Oa[e]?(""+t).trim():t+"px"}function Nl(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var n=a.indexOf("--")===0,r=Zl(a,t[a],n);a==="float"&&(a="cssFloat"),n?e.setProperty(a,r):e[a]=r}}var lg=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ui(e,t){if(t){if(lg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Z(62))}}function Fi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xi=null;function Gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qi=null,va=null,ya=null;function _c(e){if(e=Cn(e)){if(typeof Qi!="function")throw Error(Z(280));var t=e.stateNode;t&&(t=Lr(t),Qi(e.stateNode,e.type,t))}}function kl(e){va?ya?ya.push(e):ya=[e]:va=e}function Cl(){if(va){var e=va,t=ya;if(ya=va=null,_c(e),t)for(e=0;e<t.length;e++)_c(t[e])}}function Sl(e,t){return e(t)}function Al(){}var pi=!1;function Pl(e,t,a){if(pi)return e(t,a);pi=!0;try{return Sl(e,t,a)}finally{pi=!1,(va!==null||ya!==null)&&(Al(),Cl())}}function ln(e,t){var a=e.stateNode;if(a===null)return null;var n=Lr(a);if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(Z(231,t,typeof a));return a}var Oi=!1;if(gt)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){Oi=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{Oi=!1}function pg(e,t,a,n,r,i,s,o,c){var p=Array.prototype.slice.call(arguments,3);try{t.apply(a,p)}catch(j){this.onError(j)}}var Va=!1,ur=null,mr=!1,Vi=null,gg={onError:function(e){Va=!0,ur=e}};function dg(e,t,a,n,r,i,s,o,c){Va=!1,ur=null,pg.apply(gg,arguments)}function ug(e,t,a,n,r,i,s,o,c){if(dg.apply(this,arguments),Va){if(Va){var p=ur;Va=!1,ur=null}else throw Error(Z(198));mr||(mr=!0,Vi=p)}}function aa(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Dl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gc(e){if(aa(e)!==e)throw Error(Z(188))}function mg(e){var t=e.alternate;if(!t){if(t=aa(e),t===null)throw Error(Z(188));return t!==e?null:e}for(var a=e,n=t;;){var r=a.return;if(r===null)break;var i=r.alternate;if(i===null){if(n=r.return,n!==null){a=n;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===a)return Gc(r),e;if(i===n)return Gc(r),t;i=i.sibling}throw Error(Z(188))}if(a.return!==n.return)a=r,n=i;else{for(var s=!1,o=r.child;o;){if(o===a){s=!0,a=r,n=i;break}if(o===n){s=!0,n=r,a=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===a){s=!0,a=i,n=r;break}if(o===n){s=!0,n=i,a=r;break}o=o.sibling}if(!s)throw Error(Z(189))}}if(a.alternate!==n)throw Error(Z(190))}if(a.tag!==3)throw Error(Z(188));return a.stateNode.current===a?e:t}function Bl(e){return e=mg(e),e!==null?zl(e):null}function zl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zl(e);if(t!==null)return t;e=e.sibling}return null}var Wl=Be.unstable_scheduleCallback,Lc=Be.unstable_cancelCallback,fg=Be.unstable_shouldYield,Ig=Be.unstable_requestPaint,re=Be.unstable_now,hg=Be.unstable_getCurrentPriorityLevel,Ls=Be.unstable_ImmediatePriority,Tl=Be.unstable_UserBlockingPriority,fr=Be.unstable_NormalPriority,bg=Be.unstable_LowPriority,El=Be.unstable_IdlePriority,Yr=null,tt=null;function jg(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Yr,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:wg,vg=Math.log,yg=Math.LN2;function wg(e){return e>>>=0,e===0?32:31-(vg(e)/yg|0)|0}var Wn=64,Tn=4194304;function Fa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,t){var a=e.pendingLanes;if(a===0)return 0;var n=0,r=e.suspendedLanes,i=e.pingedLanes,s=a&268435455;if(s!==0){var o=s&~r;o!==0?n=Fa(o):(i&=s,i!==0&&(n=Fa(i)))}else s=a&~r,s!==0?n=Fa(s):i!==0&&(n=Fa(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&r)&&(r=n&-n,i=t&-t,r>=i||r===16&&(i&4194240)!==0))return t;if(n&4&&(n|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)a=31-Qe(t),r=1<<a,n|=e[a],t&=~r;return n}function Mg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xg(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Qe(i),o=1<<s,c=r[s];c===-1?(!(o&a)||o&n)&&(r[s]=Mg(o,t)):c<=t&&(e.expiredLanes|=o),i&=~o}}function Ki(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rl(){var e=Wn;return Wn<<=1,!(Wn&4194240)&&(Wn=64),e}function gi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Nn(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=a}function Zg(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<a;){var r=31-Qe(a),i=1<<r;t[r]=0,n[r]=-1,e[r]=-1,a&=~i}}function Js(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Qe(a),r=1<<n;r&t|e[n]&t&&(e[n]|=t),a&=~r}}var G=0;function Yl(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hl,Us,_l,Gl,Ll,$i=!1,En=[],xt=null,Zt=null,Nt=null,pn=new Map,gn=new Map,vt=[],Ng="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jc(e,t){switch(e){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":pn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(t.pointerId)}}function Ea(e,t,a,n,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[r]},t!==null&&(t=Cn(t),t!==null&&Us(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function kg(e,t,a,n,r){switch(t){case"focusin":return xt=Ea(xt,e,t,a,n,r),!0;case"dragenter":return Zt=Ea(Zt,e,t,a,n,r),!0;case"mouseover":return Nt=Ea(Nt,e,t,a,n,r),!0;case"pointerover":var i=r.pointerId;return pn.set(i,Ea(pn.get(i)||null,e,t,a,n,r)),!0;case"gotpointercapture":return i=r.pointerId,gn.set(i,Ea(gn.get(i)||null,e,t,a,n,r)),!0}return!1}function Jl(e){var t=Lt(e.target);if(t!==null){var a=aa(t);if(a!==null){if(t=a.tag,t===13){if(t=Dl(a),t!==null){e.blockedOn=t,Ll(e.priority,function(){_l(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function er(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=qi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Xi=n,a.target.dispatchEvent(n),Xi=null}else return t=Cn(a),t!==null&&Us(t),e.blockedOn=a,!1;t.shift()}return!0}function Uc(e,t,a){er(e)&&a.delete(t)}function Cg(){$i=!1,xt!==null&&er(xt)&&(xt=null),Zt!==null&&er(Zt)&&(Zt=null),Nt!==null&&er(Nt)&&(Nt=null),pn.forEach(Uc),gn.forEach(Uc)}function Ra(e,t){e.blockedOn===t&&(e.blockedOn=null,$i||($i=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,Cg)))}function dn(e){function t(r){return Ra(r,e)}if(0<En.length){Ra(En[0],e);for(var a=1;a<En.length;a++){var n=En[a];n.blockedOn===e&&(n.blockedOn=null)}}for(xt!==null&&Ra(xt,e),Zt!==null&&Ra(Zt,e),Nt!==null&&Ra(Nt,e),pn.forEach(t),gn.forEach(t),a=0;a<vt.length;a++)n=vt[a],n.blockedOn===e&&(n.blockedOn=null);for(;0<vt.length&&(a=vt[0],a.blockedOn===null);)Jl(a),a.blockedOn===null&&vt.shift()}var wa=ft.ReactCurrentBatchConfig,hr=!0;function Sg(e,t,a,n){var r=G,i=wa.transition;wa.transition=null;try{G=1,Fs(e,t,a,n)}finally{G=r,wa.transition=i}}function Ag(e,t,a,n){var r=G,i=wa.transition;wa.transition=null;try{G=4,Fs(e,t,a,n)}finally{G=r,wa.transition=i}}function Fs(e,t,a,n){if(hr){var r=qi(e,t,a,n);if(r===null)yi(e,t,n,br,a),Jc(e,n);else if(kg(r,e,t,a,n))n.stopPropagation();else if(Jc(e,n),t&4&&-1<Ng.indexOf(e)){for(;r!==null;){var i=Cn(r);if(i!==null&&Hl(i),i=qi(e,t,a,n),i===null&&yi(e,t,n,br,a),i===r)break;r=i}r!==null&&n.stopPropagation()}else yi(e,t,n,null,a)}}var br=null;function qi(e,t,a,n){if(br=null,e=Gs(n),e=Lt(e),e!==null)if(t=aa(e),t===null)e=null;else if(a=t.tag,a===13){if(e=Dl(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return br=e,null}function Ul(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hg()){case Ls:return 1;case Tl:return 4;case fr:case bg:return 16;case El:return 536870912;default:return 16}default:return 16}}var wt=null,Xs=null,tr=null;function Fl(){if(tr)return tr;var e,t=Xs,a=t.length,n,r="value"in wt?wt.value:wt.textContent,i=r.length;for(e=0;e<a&&t[e]===r[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===r[i-n];n++);return tr=r.slice(e,1<n?1-n:void 0)}function ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rn(){return!0}function Fc(){return!1}function We(e){function t(a,n,r,i,s){this._reactName=a,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Rn:Fc,this.isPropagationStopped=Fc,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Rn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Rn)},persist:function(){},isPersistent:Rn}),t}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=We(Ba),kn=ee({},Ba,{view:0,detail:0}),Pg=We(kn),di,ui,Ya,Hr=ee({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ya&&(Ya&&e.type==="mousemove"?(di=e.screenX-Ya.screenX,ui=e.screenY-Ya.screenY):ui=di=0,Ya=e),di)},movementY:function(e){return"movementY"in e?e.movementY:ui}}),Xc=We(Hr),Dg=ee({},Hr,{dataTransfer:0}),Bg=We(Dg),zg=ee({},kn,{relatedTarget:0}),mi=We(zg),Wg=ee({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),Tg=We(Wg),Eg=ee({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rg=We(Eg),Yg=ee({},Ba,{data:0}),Qc=We(Yg),Hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gg[e])?!!t[e]:!1}function Os(){return Lg}var Jg=ee({},kn,{key:function(e){if(e.key){var t=Hg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_g[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Os,charCode:function(e){return e.type==="keypress"?ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ug=We(Jg),Fg=ee({},Hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oc=We(Fg),Xg=ee({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Os}),Qg=We(Xg),Og=ee({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vg=We(Og),Kg=ee({},Hr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$g=We(Kg),qg=[9,13,27,32],Vs=gt&&"CompositionEvent"in window,Ka=null;gt&&"documentMode"in document&&(Ka=document.documentMode);var ed=gt&&"TextEvent"in window&&!Ka,Xl=gt&&(!Vs||Ka&&8<Ka&&11>=Ka),Vc=" ",Kc=!1;function Ql(e,t){switch(e){case"keyup":return qg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ol(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var la=!1;function td(e,t){switch(e){case"compositionend":return Ol(t);case"keypress":return t.which!==32?null:(Kc=!0,Vc);case"textInput":return e=t.data,e===Vc&&Kc?null:e;default:return null}}function ad(e,t){if(la)return e==="compositionend"||!Vs&&Ql(e,t)?(e=Fl(),tr=Xs=wt=null,la=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xl&&t.locale!=="ko"?null:t.data;default:return null}}var nd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nd[e.type]:t==="textarea"}function Vl(e,t,a,n){kl(n),t=jr(t,"onChange"),0<t.length&&(a=new Qs("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var $a=null,un=null;function rd(e){c0(e,0)}function _r(e){var t=da(e);if(vl(t))return e}function id(e,t){if(e==="change")return t}var Kl=!1;if(gt){var fi;if(gt){var Ii="oninput"in document;if(!Ii){var qc=document.createElement("div");qc.setAttribute("oninput","return;"),Ii=typeof qc.oninput=="function"}fi=Ii}else fi=!1;Kl=fi&&(!document.documentMode||9<document.documentMode)}function eo(){$a&&($a.detachEvent("onpropertychange",$l),un=$a=null)}function $l(e){if(e.propertyName==="value"&&_r(un)){var t=[];Vl(t,un,e,Gs(e)),Pl(rd,t)}}function sd(e,t,a){e==="focusin"?(eo(),$a=t,un=a,$a.attachEvent("onpropertychange",$l)):e==="focusout"&&eo()}function cd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _r(un)}function od(e,t){if(e==="click")return _r(t)}function ld(e,t){if(e==="input"||e==="change")return _r(t)}function pd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:pd;function mn(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var r=a[n];if(!Wi.call(t,r)||!Ve(e[r],t[r]))return!1}return!0}function to(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ao(e,t){var a=to(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=to(a)}}function ql(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ql(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function e0(){for(var e=window,t=dr();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=dr(e.document)}return t}function Ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gd(e){var t=e0(),a=e.focusedElem,n=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&ql(a.ownerDocument.documentElement,a)){if(n!==null&&Ks(a)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=a.textContent.length,i=Math.min(n.start,r);n=n.end===void 0?i:Math.min(n.end,r),!e.extend&&i>n&&(r=n,n=i,i=r),r=ao(a,i);var s=ao(a,n);r&&s&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dd=gt&&"documentMode"in document&&11>=document.documentMode,pa=null,es=null,qa=null,ts=!1;function no(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ts||pa==null||pa!==dr(n)||(n=pa,"selectionStart"in n&&Ks(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),qa&&mn(qa,n)||(qa=n,n=jr(es,"onSelect"),0<n.length&&(t=new Qs("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=pa)))}function Yn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ga={animationend:Yn("Animation","AnimationEnd"),animationiteration:Yn("Animation","AnimationIteration"),animationstart:Yn("Animation","AnimationStart"),transitionend:Yn("Transition","TransitionEnd")},hi={},t0={};gt&&(t0=document.createElement("div").style,"AnimationEvent"in window||(delete ga.animationend.animation,delete ga.animationiteration.animation,delete ga.animationstart.animation),"TransitionEvent"in window||delete ga.transitionend.transition);function Gr(e){if(hi[e])return hi[e];if(!ga[e])return e;var t=ga[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in t0)return hi[e]=t[a];return e}var a0=Gr("animationend"),n0=Gr("animationiteration"),r0=Gr("animationstart"),i0=Gr("transitionend"),s0=new Map,ro="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){s0.set(e,t),ta(t,[e])}for(var bi=0;bi<ro.length;bi++){var ji=ro[bi],ud=ji.toLowerCase(),md=ji[0].toUpperCase()+ji.slice(1);Wt(ud,"on"+md)}Wt(a0,"onAnimationEnd");Wt(n0,"onAnimationIteration");Wt(r0,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(i0,"onTransitionEnd");Za("onMouseEnter",["mouseout","mouseover"]);Za("onMouseLeave",["mouseout","mouseover"]);Za("onPointerEnter",["pointerout","pointerover"]);Za("onPointerLeave",["pointerout","pointerover"]);ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ta("onBeforeInput",["compositionend","keypress","textInput","paste"]);ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xa));function io(e,t,a){var n=e.type||"unknown-event";e.currentTarget=a,ug(n,t,void 0,e),e.currentTarget=null}function c0(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],r=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],c=o.instance,p=o.currentTarget;if(o=o.listener,c!==i&&r.isPropagationStopped())break e;io(r,o,p),i=c}else for(s=0;s<n.length;s++){if(o=n[s],c=o.instance,p=o.currentTarget,o=o.listener,c!==i&&r.isPropagationStopped())break e;io(r,o,p),i=c}}}if(mr)throw e=Vi,mr=!1,Vi=null,e}function F(e,t){var a=t[ss];a===void 0&&(a=t[ss]=new Set);var n=e+"__bubble";a.has(n)||(o0(t,e,2,!1),a.add(n))}function vi(e,t,a){var n=0;t&&(n|=4),o0(a,e,n,t)}var Hn="_reactListening"+Math.random().toString(36).slice(2);function fn(e){if(!e[Hn]){e[Hn]=!0,fl.forEach(function(a){a!=="selectionchange"&&(fd.has(a)||vi(a,!1,e),vi(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hn]||(t[Hn]=!0,vi("selectionchange",!1,t))}}function o0(e,t,a,n){switch(Ul(t)){case 1:var r=Sg;break;case 4:r=Ag;break;default:r=Fs}a=r.bind(null,t,a,e),r=void 0,!Oi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),n?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function yi(e,t,a,n,r){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;s=s.return}for(;o!==null;){if(s=Lt(o),s===null)return;if(c=s.tag,c===5||c===6){n=i=s;continue e}o=o.parentNode}}n=n.return}Pl(function(){var p=i,j=Gs(a),b=[];e:{var l=s0.get(e);if(l!==void 0){var I=Qs,v=e;switch(e){case"keypress":if(ar(a)===0)break e;case"keydown":case"keyup":I=Ug;break;case"focusin":v="focus",I=mi;break;case"focusout":v="blur",I=mi;break;case"beforeblur":case"afterblur":I=mi;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=Bg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Qg;break;case a0:case n0:case r0:I=Tg;break;case i0:I=Vg;break;case"scroll":I=Pg;break;case"wheel":I=$g;break;case"copy":case"cut":case"paste":I=Rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Oc}var h=(t&4)!==0,w=!h&&e==="scroll",u=h?l!==null?l+"Capture":null:l;h=[];for(var d=p,m;d!==null;){m=d;var f=m.stateNode;if(m.tag===5&&f!==null&&(m=f,u!==null&&(f=ln(d,u),f!=null&&h.push(In(d,f,m)))),w)break;d=d.return}0<h.length&&(l=new I(l,v,null,a,j),b.push({event:l,listeners:h}))}}if(!(t&7)){e:{if(l=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",l&&a!==Xi&&(v=a.relatedTarget||a.fromElement)&&(Lt(v)||v[dt]))break e;if((I||l)&&(l=j.window===j?j:(l=j.ownerDocument)?l.defaultView||l.parentWindow:window,I?(v=a.relatedTarget||a.toElement,I=p,v=v?Lt(v):null,v!==null&&(w=aa(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(I=null,v=p),I!==v)){if(h=Xc,f="onMouseLeave",u="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(h=Oc,f="onPointerLeave",u="onPointerEnter",d="pointer"),w=I==null?l:da(I),m=v==null?l:da(v),l=new h(f,d+"leave",I,a,j),l.target=w,l.relatedTarget=m,f=null,Lt(j)===p&&(h=new h(u,d+"enter",v,a,j),h.target=m,h.relatedTarget=w,f=h),w=f,I&&v)t:{for(h=I,u=v,d=0,m=h;m;m=na(m))d++;for(m=0,f=u;f;f=na(f))m++;for(;0<d-m;)h=na(h),d--;for(;0<m-d;)u=na(u),m--;for(;d--;){if(h===u||u!==null&&h===u.alternate)break t;h=na(h),u=na(u)}h=null}else h=null;I!==null&&so(b,l,I,h,!1),v!==null&&w!==null&&so(b,w,v,h,!0)}}e:{if(l=p?da(p):window,I=l.nodeName&&l.nodeName.toLowerCase(),I==="select"||I==="input"&&l.type==="file")var y=id;else if($c(l))if(Kl)y=ld;else{y=cd;var M=sd}else(I=l.nodeName)&&I.toLowerCase()==="input"&&(l.type==="checkbox"||l.type==="radio")&&(y=od);if(y&&(y=y(e,p))){Vl(b,y,a,j);break e}M&&M(e,l,p),e==="focusout"&&(M=l._wrapperState)&&M.controlled&&l.type==="number"&&Gi(l,"number",l.value)}switch(M=p?da(p):window,e){case"focusin":($c(M)||M.contentEditable==="true")&&(pa=M,es=p,qa=null);break;case"focusout":qa=es=pa=null;break;case"mousedown":ts=!0;break;case"contextmenu":case"mouseup":case"dragend":ts=!1,no(b,a,j);break;case"selectionchange":if(dd)break;case"keydown":case"keyup":no(b,a,j)}var N;if(Vs)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else la?Ql(e,a)&&(k="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(k="onCompositionStart");k&&(Xl&&a.locale!=="ko"&&(la||k!=="onCompositionStart"?k==="onCompositionEnd"&&la&&(N=Fl()):(wt=j,Xs="value"in wt?wt.value:wt.textContent,la=!0)),M=jr(p,k),0<M.length&&(k=new Qc(k,e,null,a,j),b.push({event:k,listeners:M}),N?k.data=N:(N=Ol(a),N!==null&&(k.data=N)))),(N=ed?td(e,a):ad(e,a))&&(p=jr(p,"onBeforeInput"),0<p.length&&(j=new Qc("onBeforeInput","beforeinput",null,a,j),b.push({event:j,listeners:p}),j.data=N))}c0(b,t)})}function In(e,t,a){return{instance:e,listener:t,currentTarget:a}}function jr(e,t){for(var a=t+"Capture",n=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=ln(e,a),i!=null&&n.unshift(In(e,i,r)),i=ln(e,t),i!=null&&n.push(In(e,i,r))),e=e.return}return n}function na(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function so(e,t,a,n,r){for(var i=t._reactName,s=[];a!==null&&a!==n;){var o=a,c=o.alternate,p=o.stateNode;if(c!==null&&c===n)break;o.tag===5&&p!==null&&(o=p,r?(c=ln(a,i),c!=null&&s.unshift(In(a,c,o))):r||(c=ln(a,i),c!=null&&s.push(In(a,c,o)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var Id=/\r\n?/g,hd=/\u0000|\uFFFD/g;function co(e){return(typeof e=="string"?e:""+e).replace(Id,`
`).replace(hd,"")}function _n(e,t,a){if(t=co(t),co(e)!==t&&a)throw Error(Z(425))}function vr(){}var as=null,ns=null;function rs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var is=typeof setTimeout=="function"?setTimeout:void 0,bd=typeof clearTimeout=="function"?clearTimeout:void 0,oo=typeof Promise=="function"?Promise:void 0,jd=typeof queueMicrotask=="function"?queueMicrotask:typeof oo<"u"?function(e){return oo.resolve(null).then(e).catch(vd)}:is;function vd(e){setTimeout(function(){throw e})}function wi(e,t){var a=t,n=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(n===0){e.removeChild(r),dn(t);return}n--}else a!=="$"&&a!=="$?"&&a!=="$!"||n++;a=r}while(a);dn(t)}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var za=Math.random().toString(36).slice(2),et="__reactFiber$"+za,hn="__reactProps$"+za,dt="__reactContainer$"+za,ss="__reactEvents$"+za,yd="__reactListeners$"+za,wd="__reactHandles$"+za;function Lt(e){var t=e[et];if(t)return t;for(var a=e.parentNode;a;){if(t=a[dt]||a[et]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=lo(e);e!==null;){if(a=e[et])return a;e=lo(e)}return t}e=a,a=e.parentNode}return null}function Cn(e){return e=e[et]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function da(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Z(33))}function Lr(e){return e[hn]||null}var cs=[],ua=-1;function Tt(e){return{current:e}}function X(e){0>ua||(e.current=cs[ua],cs[ua]=null,ua--)}function U(e,t){ua++,cs[ua]=e.current,e.current=t}var zt={},be=Tt(zt),ke=Tt(!1),Ot=zt;function Na(e,t){var a=e.type.contextTypes;if(!a)return zt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in a)r[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ce(e){return e=e.childContextTypes,e!=null}function yr(){X(ke),X(be)}function po(e,t,a){if(be.current!==zt)throw Error(Z(168));U(be,t),U(ke,a)}function l0(e,t,a){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return a;n=n.getChildContext();for(var r in n)if(!(r in t))throw Error(Z(108,sg(e)||"Unknown",r));return ee({},a,n)}function wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,Ot=be.current,U(be,e),U(ke,ke.current),!0}function go(e,t,a){var n=e.stateNode;if(!n)throw Error(Z(169));a?(e=l0(e,t,Ot),n.__reactInternalMemoizedMergedChildContext=e,X(ke),X(be),U(be,e)):X(ke),U(ke,a)}var st=null,Jr=!1,Mi=!1;function p0(e){st===null?st=[e]:st.push(e)}function Md(e){Jr=!0,p0(e)}function Et(){if(!Mi&&st!==null){Mi=!0;var e=0,t=G;try{var a=st;for(G=1;e<a.length;e++){var n=a[e];do n=n(!0);while(n!==null)}st=null,Jr=!1}catch(r){throw st!==null&&(st=st.slice(e+1)),Wl(Ls,Et),r}finally{G=t,Mi=!1}}return null}var ma=[],fa=0,Mr=null,xr=0,Ee=[],Re=0,Vt=null,ot=1,lt="";function Ht(e,t){ma[fa++]=xr,ma[fa++]=Mr,Mr=e,xr=t}function g0(e,t,a){Ee[Re++]=ot,Ee[Re++]=lt,Ee[Re++]=Vt,Vt=e;var n=ot;e=lt;var r=32-Qe(n)-1;n&=~(1<<r),a+=1;var i=32-Qe(t)+r;if(30<i){var s=r-r%5;i=(n&(1<<s)-1).toString(32),n>>=s,r-=s,ot=1<<32-Qe(t)+r|a<<r|n,lt=i+e}else ot=1<<i|a<<r|n,lt=e}function $s(e){e.return!==null&&(Ht(e,1),g0(e,1,0))}function qs(e){for(;e===Mr;)Mr=ma[--fa],ma[fa]=null,xr=ma[--fa],ma[fa]=null;for(;e===Vt;)Vt=Ee[--Re],Ee[Re]=null,lt=Ee[--Re],Ee[Re]=null,ot=Ee[--Re],Ee[Re]=null}var De=null,Pe=null,V=!1,Xe=null;function d0(e,t){var a=Ye(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function uo(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,Pe=kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=Vt!==null?{id:ot,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=Ye(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,De=e,Pe=null,!0):!1;default:return!1}}function os(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ls(e){if(V){var t=Pe;if(t){var a=t;if(!uo(e,t)){if(os(e))throw Error(Z(418));t=kt(a.nextSibling);var n=De;t&&uo(e,t)?d0(n,a):(e.flags=e.flags&-4097|2,V=!1,De=e)}}else{if(os(e))throw Error(Z(418));e.flags=e.flags&-4097|2,V=!1,De=e}}}function mo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function Gn(e){if(e!==De)return!1;if(!V)return mo(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!rs(e.type,e.memoizedProps)),t&&(t=Pe)){if(os(e))throw u0(),Error(Z(418));for(;t;)d0(e,t),t=kt(t.nextSibling)}if(mo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){Pe=kt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=De?kt(e.stateNode.nextSibling):null;return!0}function u0(){for(var e=Pe;e;)e=kt(e.nextSibling)}function ka(){Pe=De=null,V=!1}function ec(e){Xe===null?Xe=[e]:Xe.push(e)}var xd=ft.ReactCurrentBatchConfig;function Ha(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(Z(309));var n=a.stateNode}if(!n)throw Error(Z(147,e));var r=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var o=r.refs;s===null?delete o[i]:o[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(Z(284));if(!a._owner)throw Error(Z(290,e))}return e}function Ln(e,t){throw e=Object.prototype.toString.call(t),Error(Z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fo(e){var t=e._init;return t(e._payload)}function m0(e){function t(u,d){if(e){var m=u.deletions;m===null?(u.deletions=[d],u.flags|=16):m.push(d)}}function a(u,d){if(!e)return null;for(;d!==null;)t(u,d),d=d.sibling;return null}function n(u,d){for(u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function r(u,d){return u=Pt(u,d),u.index=0,u.sibling=null,u}function i(u,d,m){return u.index=m,e?(m=u.alternate,m!==null?(m=m.index,m<d?(u.flags|=2,d):m):(u.flags|=2,d)):(u.flags|=1048576,d)}function s(u){return e&&u.alternate===null&&(u.flags|=2),u}function o(u,d,m,f){return d===null||d.tag!==6?(d=Ai(m,u.mode,f),d.return=u,d):(d=r(d,m),d.return=u,d)}function c(u,d,m,f){var y=m.type;return y===oa?j(u,d,m.props.children,f,m.key):d!==null&&(d.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===bt&&fo(y)===d.type)?(f=r(d,m.props),f.ref=Ha(u,d,m),f.return=u,f):(f=lr(m.type,m.key,m.props,null,u.mode,f),f.ref=Ha(u,d,m),f.return=u,f)}function p(u,d,m,f){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Pi(m,u.mode,f),d.return=u,d):(d=r(d,m.children||[]),d.return=u,d)}function j(u,d,m,f,y){return d===null||d.tag!==7?(d=Qt(m,u.mode,f,y),d.return=u,d):(d=r(d,m),d.return=u,d)}function b(u,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ai(""+d,u.mode,m),d.return=u,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Dn:return m=lr(d.type,d.key,d.props,null,u.mode,m),m.ref=Ha(u,null,d),m.return=u,m;case ca:return d=Pi(d,u.mode,m),d.return=u,d;case bt:var f=d._init;return b(u,f(d._payload),m)}if(Ua(d)||Wa(d))return d=Qt(d,u.mode,m,null),d.return=u,d;Ln(u,d)}return null}function l(u,d,m,f){var y=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return y!==null?null:o(u,d,""+m,f);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Dn:return m.key===y?c(u,d,m,f):null;case ca:return m.key===y?p(u,d,m,f):null;case bt:return y=m._init,l(u,d,y(m._payload),f)}if(Ua(m)||Wa(m))return y!==null?null:j(u,d,m,f,null);Ln(u,m)}return null}function I(u,d,m,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return u=u.get(m)||null,o(d,u,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Dn:return u=u.get(f.key===null?m:f.key)||null,c(d,u,f,y);case ca:return u=u.get(f.key===null?m:f.key)||null,p(d,u,f,y);case bt:var M=f._init;return I(u,d,m,M(f._payload),y)}if(Ua(f)||Wa(f))return u=u.get(m)||null,j(d,u,f,y,null);Ln(d,f)}return null}function v(u,d,m,f){for(var y=null,M=null,N=d,k=d=0,B=null;N!==null&&k<m.length;k++){N.index>k?(B=N,N=null):B=N.sibling;var z=l(u,N,m[k],f);if(z===null){N===null&&(N=B);break}e&&N&&z.alternate===null&&t(u,N),d=i(z,d,k),M===null?y=z:M.sibling=z,M=z,N=B}if(k===m.length)return a(u,N),V&&Ht(u,k),y;if(N===null){for(;k<m.length;k++)N=b(u,m[k],f),N!==null&&(d=i(N,d,k),M===null?y=N:M.sibling=N,M=N);return V&&Ht(u,k),y}for(N=n(u,N);k<m.length;k++)B=I(N,u,k,m[k],f),B!==null&&(e&&B.alternate!==null&&N.delete(B.key===null?k:B.key),d=i(B,d,k),M===null?y=B:M.sibling=B,M=B);return e&&N.forEach(function(T){return t(u,T)}),V&&Ht(u,k),y}function h(u,d,m,f){var y=Wa(m);if(typeof y!="function")throw Error(Z(150));if(m=y.call(m),m==null)throw Error(Z(151));for(var M=y=null,N=d,k=d=0,B=null,z=m.next();N!==null&&!z.done;k++,z=m.next()){N.index>k?(B=N,N=null):B=N.sibling;var T=l(u,N,z.value,f);if(T===null){N===null&&(N=B);break}e&&N&&T.alternate===null&&t(u,N),d=i(T,d,k),M===null?y=T:M.sibling=T,M=T,N=B}if(z.done)return a(u,N),V&&Ht(u,k),y;if(N===null){for(;!z.done;k++,z=m.next())z=b(u,z.value,f),z!==null&&(d=i(z,d,k),M===null?y=z:M.sibling=z,M=z);return V&&Ht(u,k),y}for(N=n(u,N);!z.done;k++,z=m.next())z=I(N,u,k,z.value,f),z!==null&&(e&&z.alternate!==null&&N.delete(z.key===null?k:z.key),d=i(z,d,k),M===null?y=z:M.sibling=z,M=z);return e&&N.forEach(function(S){return t(u,S)}),V&&Ht(u,k),y}function w(u,d,m,f){if(typeof m=="object"&&m!==null&&m.type===oa&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Dn:e:{for(var y=m.key,M=d;M!==null;){if(M.key===y){if(y=m.type,y===oa){if(M.tag===7){a(u,M.sibling),d=r(M,m.props.children),d.return=u,u=d;break e}}else if(M.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===bt&&fo(y)===M.type){a(u,M.sibling),d=r(M,m.props),d.ref=Ha(u,M,m),d.return=u,u=d;break e}a(u,M);break}else t(u,M);M=M.sibling}m.type===oa?(d=Qt(m.props.children,u.mode,f,m.key),d.return=u,u=d):(f=lr(m.type,m.key,m.props,null,u.mode,f),f.ref=Ha(u,d,m),f.return=u,u=f)}return s(u);case ca:e:{for(M=m.key;d!==null;){if(d.key===M)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){a(u,d.sibling),d=r(d,m.children||[]),d.return=u,u=d;break e}else{a(u,d);break}else t(u,d);d=d.sibling}d=Pi(m,u.mode,f),d.return=u,u=d}return s(u);case bt:return M=m._init,w(u,d,M(m._payload),f)}if(Ua(m))return v(u,d,m,f);if(Wa(m))return h(u,d,m,f);Ln(u,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(a(u,d.sibling),d=r(d,m),d.return=u,u=d):(a(u,d),d=Ai(m,u.mode,f),d.return=u,u=d),s(u)):a(u,d)}return w}var Ca=m0(!0),f0=m0(!1),Zr=Tt(null),Nr=null,Ia=null,tc=null;function ac(){tc=Ia=Nr=null}function nc(e){var t=Zr.current;X(Zr),e._currentValue=t}function ps(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Ma(e,t){Nr=e,tc=Ia=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(tc!==e)if(e={context:e,memoizedValue:t,next:null},Ia===null){if(Nr===null)throw Error(Z(308));Ia=e,Nr.dependencies={lanes:0,firstContext:e}}else Ia=Ia.next=e;return t}var Jt=null;function rc(e){Jt===null?Jt=[e]:Jt.push(e)}function I0(e,t,a,n){var r=t.interleaved;return r===null?(a.next=a,rc(t)):(a.next=r.next,r.next=a),t.interleaved=a,ut(e,n)}function ut(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var jt=!1;function ic(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ct(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,_&2){var r=n.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),n.pending=t,ut(e,a)}return r=n.interleaved,r===null?(t.next=t,rc(n)):(t.next=r.next,r.next=t),n.interleaved=t,ut(e,a)}function nr(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Js(e,a)}}function Io(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var r=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?r=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?r=i=t:i=i.next=t}else r=i=t;a={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function kr(e,t,a,n){var r=e.updateQueue;jt=!1;var i=r.firstBaseUpdate,s=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,p=c.next;c.next=null,s===null?i=p:s.next=p,s=c;var j=e.alternate;j!==null&&(j=j.updateQueue,o=j.lastBaseUpdate,o!==s&&(o===null?j.firstBaseUpdate=p:o.next=p,j.lastBaseUpdate=c))}if(i!==null){var b=r.baseState;s=0,j=p=c=null,o=i;do{var l=o.lane,I=o.eventTime;if((n&l)===l){j!==null&&(j=j.next={eventTime:I,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=e,h=o;switch(l=t,I=a,h.tag){case 1:if(v=h.payload,typeof v=="function"){b=v.call(I,b,l);break e}b=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=h.payload,l=typeof v=="function"?v.call(I,b,l):v,l==null)break e;b=ee({},b,l);break e;case 2:jt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,l=r.effects,l===null?r.effects=[o]:l.push(o))}else I={eventTime:I,lane:l,tag:o.tag,payload:o.payload,callback:o.callback,next:null},j===null?(p=j=I,c=b):j=j.next=I,s|=l;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;l=o,o=l.next,l.next=null,r.lastBaseUpdate=l,r.shared.pending=null}}while(!0);if(j===null&&(c=b),r.baseState=c,r.firstBaseUpdate=p,r.lastBaseUpdate=j,t=r.shared.interleaved,t!==null){r=t;do s|=r.lane,r=r.next;while(r!==t)}else i===null&&(r.shared.lanes=0);$t|=s,e.lanes=s,e.memoizedState=b}}function ho(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],r=n.callback;if(r!==null){if(n.callback=null,n=a,typeof r!="function")throw Error(Z(191,r));r.call(n)}}}var Sn={},at=Tt(Sn),bn=Tt(Sn),jn=Tt(Sn);function Ut(e){if(e===Sn)throw Error(Z(174));return e}function sc(e,t){switch(U(jn,t),U(bn,e),U(at,Sn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ji(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ji(t,e)}X(at),U(at,t)}function Sa(){X(at),X(bn),X(jn)}function b0(e){Ut(jn.current);var t=Ut(at.current),a=Ji(t,e.type);t!==a&&(U(bn,e),U(at,a))}function cc(e){bn.current===e&&(X(at),X(bn))}var $=Tt(0);function Cr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xi=[];function oc(){for(var e=0;e<xi.length;e++)xi[e]._workInProgressVersionPrimary=null;xi.length=0}var rr=ft.ReactCurrentDispatcher,Zi=ft.ReactCurrentBatchConfig,Kt=0,q=null,se=null,le=null,Sr=!1,en=!1,vn=0,Zd=0;function fe(){throw Error(Z(321))}function lc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ve(e[a],t[a]))return!1;return!0}function pc(e,t,a,n,r,i){if(Kt=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,rr.current=e===null||e.memoizedState===null?Sd:Ad,e=a(n,r),en){i=0;do{if(en=!1,vn=0,25<=i)throw Error(Z(301));i+=1,le=se=null,t.updateQueue=null,rr.current=Pd,e=a(n,r)}while(en)}if(rr.current=Ar,t=se!==null&&se.next!==null,Kt=0,le=se=q=null,Sr=!1,t)throw Error(Z(300));return e}function gc(){var e=vn!==0;return vn=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?q.memoizedState=le=e:le=le.next=e,le}function Ge(){if(se===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=le===null?q.memoizedState:le.next;if(t!==null)le=t,se=e;else{if(e===null)throw Error(Z(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},le===null?q.memoizedState=le=e:le=le.next=e}return le}function yn(e,t){return typeof t=="function"?t(e):t}function Ni(e){var t=Ge(),a=t.queue;if(a===null)throw Error(Z(311));a.lastRenderedReducer=e;var n=se,r=n.baseQueue,i=a.pending;if(i!==null){if(r!==null){var s=r.next;r.next=i.next,i.next=s}n.baseQueue=r=i,a.pending=null}if(r!==null){i=r.next,n=n.baseState;var o=s=null,c=null,p=i;do{var j=p.lane;if((Kt&j)===j)c!==null&&(c=c.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),n=p.hasEagerState?p.eagerState:e(n,p.action);else{var b={lane:j,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};c===null?(o=c=b,s=n):c=c.next=b,q.lanes|=j,$t|=j}p=p.next}while(p!==null&&p!==i);c===null?s=n:c.next=o,Ve(n,t.memoizedState)||(Ne=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=c,a.lastRenderedState=n}if(e=a.interleaved,e!==null){r=e;do i=r.lane,q.lanes|=i,$t|=i,r=r.next;while(r!==e)}else r===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function ki(e){var t=Ge(),a=t.queue;if(a===null)throw Error(Z(311));a.lastRenderedReducer=e;var n=a.dispatch,r=a.pending,i=t.memoizedState;if(r!==null){a.pending=null;var s=r=r.next;do i=e(i,s.action),s=s.next;while(s!==r);Ve(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function j0(){}function v0(e,t){var a=q,n=Ge(),r=t(),i=!Ve(n.memoizedState,r);if(i&&(n.memoizedState=r,Ne=!0),n=n.queue,dc(M0.bind(null,a,n,e),[e]),n.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(a.flags|=2048,wn(9,w0.bind(null,a,n,r,t),void 0,null),pe===null)throw Error(Z(349));Kt&30||y0(a,t,r)}return r}function y0(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function w0(e,t,a,n){t.value=a,t.getSnapshot=n,x0(t)&&Z0(e)}function M0(e,t,a){return a(function(){x0(t)&&Z0(e)})}function x0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ve(e,a)}catch{return!0}}function Z0(e){var t=ut(e,1);t!==null&&Oe(t,e,1,-1)}function bo(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:e},t.queue=e,e=e.dispatch=Cd.bind(null,q,e),[t.memoizedState,e]}function wn(e,t,a,n){return e={tag:e,create:t,destroy:a,deps:n,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e)),e}function N0(){return Ge().memoizedState}function ir(e,t,a,n){var r=qe();q.flags|=e,r.memoizedState=wn(1|t,a,void 0,n===void 0?null:n)}function Ur(e,t,a,n){var r=Ge();n=n===void 0?null:n;var i=void 0;if(se!==null){var s=se.memoizedState;if(i=s.destroy,n!==null&&lc(n,s.deps)){r.memoizedState=wn(t,a,i,n);return}}q.flags|=e,r.memoizedState=wn(1|t,a,i,n)}function jo(e,t){return ir(8390656,8,e,t)}function dc(e,t){return Ur(2048,8,e,t)}function k0(e,t){return Ur(4,2,e,t)}function C0(e,t){return Ur(4,4,e,t)}function S0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function A0(e,t,a){return a=a!=null?a.concat([e]):null,Ur(4,4,S0.bind(null,t,e),a)}function uc(){}function P0(e,t){var a=Ge();t=t===void 0?null:t;var n=a.memoizedState;return n!==null&&t!==null&&lc(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function D0(e,t){var a=Ge();t=t===void 0?null:t;var n=a.memoizedState;return n!==null&&t!==null&&lc(t,n[1])?n[0]:(e=e(),a.memoizedState=[e,t],e)}function B0(e,t,a){return Kt&21?(Ve(a,t)||(a=Rl(),q.lanes|=a,$t|=a,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=a)}function Nd(e,t){var a=G;G=a!==0&&4>a?a:4,e(!0);var n=Zi.transition;Zi.transition={};try{e(!1),t()}finally{G=a,Zi.transition=n}}function z0(){return Ge().memoizedState}function kd(e,t,a){var n=At(e);if(a={lane:n,action:a,hasEagerState:!1,eagerState:null,next:null},W0(e))T0(t,a);else if(a=I0(e,t,a,n),a!==null){var r=we();Oe(a,e,n,r),E0(a,t,n)}}function Cd(e,t,a){var n=At(e),r={lane:n,action:a,hasEagerState:!1,eagerState:null,next:null};if(W0(e))T0(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,o=i(s,a);if(r.hasEagerState=!0,r.eagerState=o,Ve(o,s)){var c=t.interleaved;c===null?(r.next=r,rc(t)):(r.next=c.next,c.next=r),t.interleaved=r;return}}catch{}finally{}a=I0(e,t,r,n),a!==null&&(r=we(),Oe(a,e,n,r),E0(a,t,n))}}function W0(e){var t=e.alternate;return e===q||t!==null&&t===q}function T0(e,t){en=Sr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function E0(e,t,a){if(a&4194240){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Js(e,a)}}var Ar={readContext:_e,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Sd={readContext:_e,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:jo,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,ir(4194308,4,S0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ir(4194308,4,e,t)},useInsertionEffect:function(e,t){return ir(4,2,e,t)},useMemo:function(e,t){var a=qe();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var n=qe();return t=a!==void 0?a(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=kd.bind(null,q,e),[n.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:bo,useDebugValue:uc,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=bo(!1),t=e[0];return e=Nd.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var n=q,r=qe();if(V){if(a===void 0)throw Error(Z(407));a=a()}else{if(a=t(),pe===null)throw Error(Z(349));Kt&30||y0(n,t,a)}r.memoizedState=a;var i={value:a,getSnapshot:t};return r.queue=i,jo(M0.bind(null,n,i,e),[e]),n.flags|=2048,wn(9,w0.bind(null,n,i,a,t),void 0,null),a},useId:function(){var e=qe(),t=pe.identifierPrefix;if(V){var a=lt,n=ot;a=(n&~(1<<32-Qe(n)-1)).toString(32)+a,t=":"+t+"R"+a,a=vn++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=Zd++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ad={readContext:_e,useCallback:P0,useContext:_e,useEffect:dc,useImperativeHandle:A0,useInsertionEffect:k0,useLayoutEffect:C0,useMemo:D0,useReducer:Ni,useRef:N0,useState:function(){return Ni(yn)},useDebugValue:uc,useDeferredValue:function(e){var t=Ge();return B0(t,se.memoizedState,e)},useTransition:function(){var e=Ni(yn)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:j0,useSyncExternalStore:v0,useId:z0,unstable_isNewReconciler:!1},Pd={readContext:_e,useCallback:P0,useContext:_e,useEffect:dc,useImperativeHandle:A0,useInsertionEffect:k0,useLayoutEffect:C0,useMemo:D0,useReducer:ki,useRef:N0,useState:function(){return ki(yn)},useDebugValue:uc,useDeferredValue:function(e){var t=Ge();return se===null?t.memoizedState=e:B0(t,se.memoizedState,e)},useTransition:function(){var e=ki(yn)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:j0,useSyncExternalStore:v0,useId:z0,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function gs(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:ee({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Fr={isMounted:function(e){return(e=e._reactInternals)?aa(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var n=we(),r=At(e),i=pt(n,r);i.payload=t,a!=null&&(i.callback=a),t=Ct(e,i,r),t!==null&&(Oe(t,e,r,n),nr(t,e,r))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=we(),r=At(e),i=pt(n,r);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Ct(e,i,r),t!==null&&(Oe(t,e,r,n),nr(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=we(),n=At(e),r=pt(a,n);r.tag=2,t!=null&&(r.callback=t),t=Ct(e,r,n),t!==null&&(Oe(t,e,n,a),nr(t,e,n))}};function vo(e,t,a,n,r,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!mn(a,n)||!mn(r,i):!0}function R0(e,t,a){var n=!1,r=zt,i=t.contextType;return typeof i=="object"&&i!==null?i=_e(i):(r=Ce(t)?Ot:be.current,n=t.contextTypes,i=(n=n!=null)?Na(e,r):zt),t=new t(a,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fr,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function yo(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Fr.enqueueReplaceState(t,t.state,null)}function ds(e,t,a,n){var r=e.stateNode;r.props=a,r.state=e.memoizedState,r.refs={},ic(e);var i=t.contextType;typeof i=="object"&&i!==null?r.context=_e(i):(i=Ce(t)?Ot:be.current,r.context=Na(e,i)),r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(gs(e,t,i,a),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Fr.enqueueReplaceState(r,r.state,null),kr(e,a,r,n),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Aa(e,t){try{var a="",n=t;do a+=ig(n),n=n.return;while(n);var r=a}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:r,digest:null}}function Ci(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function us(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var Dd=typeof WeakMap=="function"?WeakMap:Map;function Y0(e,t,a){a=pt(-1,a),a.tag=3,a.payload={element:null};var n=t.value;return a.callback=function(){Dr||(Dr=!0,Ms=n),us(e,t)},a}function H0(e,t,a){a=pt(-1,a),a.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var r=t.value;a.payload=function(){return n(r)},a.callback=function(){us(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){us(e,t),typeof n!="function"&&(St===null?St=new Set([this]):St.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),a}function wo(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Dd;var r=new Set;n.set(t,r)}else r=n.get(t),r===void 0&&(r=new Set,n.set(t,r));r.has(a)||(r.add(a),e=Fd.bind(null,e,t,a),t.then(e,e))}function Mo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xo(e,t,a,n,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=pt(-1,1),t.tag=2,Ct(a,t,1))),a.lanes|=1),e)}var Bd=ft.ReactCurrentOwner,Ne=!1;function je(e,t,a,n){t.child=e===null?f0(t,null,a,n):Ca(t,e.child,a,n)}function Zo(e,t,a,n,r){a=a.render;var i=t.ref;return Ma(t,r),n=pc(e,t,a,n,i,r),a=gc(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,mt(e,t,r)):(V&&a&&$s(t),t.flags|=1,je(e,t,n,r),t.child)}function No(e,t,a,n,r){if(e===null){var i=a.type;return typeof i=="function"&&!yc(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=i,_0(e,t,i,n,r)):(e=lr(a.type,null,n,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&r)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:mn,a(s,n)&&e.ref===t.ref)return mt(e,t,r)}return t.flags|=1,e=Pt(i,n),e.ref=t.ref,e.return=t,t.child=e}function _0(e,t,a,n,r){if(e!==null){var i=e.memoizedProps;if(mn(i,n)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=n=i,(e.lanes&r)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,mt(e,t,r)}return ms(e,t,a,n,r)}function G0(e,t,a){var n=t.pendingProps,r=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(ba,Ae),Ae|=a;else{if(!(a&1073741824))return e=i!==null?i.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(ba,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:a,U(ba,Ae),Ae|=n}else i!==null?(n=i.baseLanes|a,t.memoizedState=null):n=a,U(ba,Ae),Ae|=n;return je(e,t,r,a),t.child}function L0(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function ms(e,t,a,n,r){var i=Ce(a)?Ot:be.current;return i=Na(t,i),Ma(t,r),a=pc(e,t,a,n,i,r),n=gc(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,mt(e,t,r)):(V&&n&&$s(t),t.flags|=1,je(e,t,a,r),t.child)}function ko(e,t,a,n,r){if(Ce(a)){var i=!0;wr(t)}else i=!1;if(Ma(t,r),t.stateNode===null)sr(e,t),R0(t,a,n),ds(t,a,n,r),n=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var c=s.context,p=a.contextType;typeof p=="object"&&p!==null?p=_e(p):(p=Ce(a)?Ot:be.current,p=Na(t,p));var j=a.getDerivedStateFromProps,b=typeof j=="function"||typeof s.getSnapshotBeforeUpdate=="function";b||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==n||c!==p)&&yo(t,s,n,p),jt=!1;var l=t.memoizedState;s.state=l,kr(t,n,s,r),c=t.memoizedState,o!==n||l!==c||ke.current||jt?(typeof j=="function"&&(gs(t,a,j,n),c=t.memoizedState),(o=jt||vo(t,a,o,n,l,c,p))?(b||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),s.props=n,s.state=c,s.context=p,n=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,h0(e,t),o=t.memoizedProps,p=t.type===t.elementType?o:Ue(t.type,o),s.props=p,b=t.pendingProps,l=s.context,c=a.contextType,typeof c=="object"&&c!==null?c=_e(c):(c=Ce(a)?Ot:be.current,c=Na(t,c));var I=a.getDerivedStateFromProps;(j=typeof I=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==b||l!==c)&&yo(t,s,n,c),jt=!1,l=t.memoizedState,s.state=l,kr(t,n,s,r);var v=t.memoizedState;o!==b||l!==v||ke.current||jt?(typeof I=="function"&&(gs(t,a,I,n),v=t.memoizedState),(p=jt||vo(t,a,p,n,l,v,c)||!1)?(j||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,v,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,v,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&l===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&l===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),s.props=n,s.state=v,s.context=c,n=p):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&l===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&l===e.memoizedState||(t.flags|=1024),n=!1)}return fs(e,t,a,n,i,r)}function fs(e,t,a,n,r,i){L0(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return r&&go(t,a,!1),mt(e,t,i);n=t.stateNode,Bd.current=t;var o=s&&typeof a.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=Ca(t,e.child,null,i),t.child=Ca(t,null,o,i)):je(e,t,o,i),t.memoizedState=n.state,r&&go(t,a,!0),t.child}function J0(e){var t=e.stateNode;t.pendingContext?po(e,t.pendingContext,t.pendingContext!==t.context):t.context&&po(e,t.context,!1),sc(e,t.containerInfo)}function Co(e,t,a,n,r){return ka(),ec(r),t.flags|=256,je(e,t,a,n),t.child}var Is={dehydrated:null,treeContext:null,retryLane:0};function hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function U0(e,t,a){var n=t.pendingProps,r=$.current,i=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(r&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),U($,r&1),e===null)return ls(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Or(s,n,0,null),e=Qt(e,n,a,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=hs(a),t.memoizedState=Is,e):mc(t,s));if(r=e.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return zd(e,t,s,n,o,r,a);if(i){i=n.fallback,s=t.mode,r=e.child,o=r.sibling;var c={mode:"hidden",children:n.children};return!(s&1)&&t.child!==r?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Pt(r,c),n.subtreeFlags=r.subtreeFlags&14680064),o!==null?i=Pt(o,i):(i=Qt(i,s,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?hs(a):{baseLanes:s.baseLanes|a,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~a,t.memoizedState=Is,n}return i=e.child,e=i.sibling,n=Pt(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=a),n.return=t,n.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=n,t.memoizedState=null,n}function mc(e,t){return t=Or({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jn(e,t,a,n){return n!==null&&ec(n),Ca(t,e.child,null,a),e=mc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zd(e,t,a,n,r,i,s){if(a)return t.flags&256?(t.flags&=-257,n=Ci(Error(Z(422))),Jn(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,r=t.mode,n=Or({mode:"visible",children:n.children},r,0,null),i=Qt(i,r,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&Ca(t,e.child,null,s),t.child.memoizedState=hs(s),t.memoizedState=Is,i);if(!(t.mode&1))return Jn(e,t,s,null);if(r.data==="$!"){if(n=r.nextSibling&&r.nextSibling.dataset,n)var o=n.dgst;return n=o,i=Error(Z(419)),n=Ci(i,n,void 0),Jn(e,t,s,n)}if(o=(s&e.childLanes)!==0,Ne||o){if(n=pe,n!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(n.suspendedLanes|s)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,ut(e,r),Oe(n,e,r,-1))}return vc(),n=Ci(Error(Z(421))),Jn(e,t,s,n)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=Xd.bind(null,e),r._reactRetry=t,null):(e=i.treeContext,Pe=kt(r.nextSibling),De=t,V=!0,Xe=null,e!==null&&(Ee[Re++]=ot,Ee[Re++]=lt,Ee[Re++]=Vt,ot=e.id,lt=e.overflow,Vt=t),t=mc(t,n.children),t.flags|=4096,t)}function So(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ps(e.return,t,a)}function Si(e,t,a,n,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=a,i.tailMode=r)}function F0(e,t,a){var n=t.pendingProps,r=n.revealOrder,i=n.tail;if(je(e,t,n.children,a),n=$.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&So(e,a,t);else if(e.tag===19)So(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(U($,n),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(a=t.child,r=null;a!==null;)e=a.alternate,e!==null&&Cr(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),Si(t,!1,r,a,i);break;case"backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Cr(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}Si(t,!0,a,null,i);break;case"together":Si(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),$t|=t.lanes,!(a&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Z(153));if(t.child!==null){for(e=t.child,a=Pt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Pt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Wd(e,t,a){switch(t.tag){case 3:J0(t),ka();break;case 5:b0(t);break;case 1:Ce(t.type)&&wr(t);break;case 4:sc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,r=t.memoizedProps.value;U(Zr,n._currentValue),n._currentValue=r;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(U($,$.current&1),t.flags|=128,null):a&t.child.childLanes?U0(e,t,a):(U($,$.current&1),e=mt(e,t,a),e!==null?e.sibling:null);U($,$.current&1);break;case 19:if(n=(a&t.childLanes)!==0,e.flags&128){if(n)return F0(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),U($,$.current),n)break;return null;case 22:case 23:return t.lanes=0,G0(e,t,a)}return mt(e,t,a)}var X0,bs,Q0,O0;X0=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};bs=function(){};Q0=function(e,t,a,n){var r=e.memoizedProps;if(r!==n){e=t.stateNode,Ut(at.current);var i=null;switch(a){case"input":r=Hi(e,r),n=Hi(e,n),i=[];break;case"select":r=ee({},r,{value:void 0}),n=ee({},n,{value:void 0}),i=[];break;case"textarea":r=Li(e,r),n=Li(e,n),i=[];break;default:typeof r.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=vr)}Ui(a,n);var s;a=null;for(p in r)if(!n.hasOwnProperty(p)&&r.hasOwnProperty(p)&&r[p]!=null)if(p==="style"){var o=r[p];for(s in o)o.hasOwnProperty(s)&&(a||(a={}),a[s]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(cn.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in n){var c=n[p];if(o=r?.[p],n.hasOwnProperty(p)&&c!==o&&(c!=null||o!=null))if(p==="style")if(o){for(s in o)!o.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(a||(a={}),a[s]="");for(s in c)c.hasOwnProperty(s)&&o[s]!==c[s]&&(a||(a={}),a[s]=c[s])}else a||(i||(i=[]),i.push(p,a)),a=c;else p==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(i=i||[]).push(p,c)):p==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(p,""+c):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(cn.hasOwnProperty(p)?(c!=null&&p==="onScroll"&&F("scroll",e),i||o===c||(i=[])):(i=i||[]).push(p,c))}a&&(i=i||[]).push("style",a);var p=i;(t.updateQueue=p)&&(t.flags|=4)}};O0=function(e,t,a,n){a!==n&&(t.flags|=4)};function _a(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,n|=r.subtreeFlags&14680064,n|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Td(e,t,a){var n=t.pendingProps;switch(qs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Ce(t.type)&&yr(),Ie(t),null;case 3:return n=t.stateNode,Sa(),X(ke),X(be),oc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(Ns(Xe),Xe=null))),bs(e,t),Ie(t),null;case 5:cc(t);var r=Ut(jn.current);if(a=t.type,e!==null&&t.stateNode!=null)Q0(e,t,a,n,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(Z(166));return Ie(t),null}if(e=Ut(at.current),Gn(t)){n=t.stateNode,a=t.type;var i=t.memoizedProps;switch(n[et]=t,n[hn]=i,e=(t.mode&1)!==0,a){case"dialog":F("cancel",n),F("close",n);break;case"iframe":case"object":case"embed":F("load",n);break;case"video":case"audio":for(r=0;r<Xa.length;r++)F(Xa[r],n);break;case"source":F("error",n);break;case"img":case"image":case"link":F("error",n),F("load",n);break;case"details":F("toggle",n);break;case"input":Ec(n,i),F("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},F("invalid",n);break;case"textarea":Yc(n,i),F("invalid",n)}Ui(a,i),r=null;for(var s in i)if(i.hasOwnProperty(s)){var o=i[s];s==="children"?typeof o=="string"?n.textContent!==o&&(i.suppressHydrationWarning!==!0&&_n(n.textContent,o,e),r=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&_n(n.textContent,o,e),r=["children",""+o]):cn.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&F("scroll",n)}switch(a){case"input":Bn(n),Rc(n,i,!0);break;case"textarea":Bn(n),Hc(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=vr)}n=r,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ml(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(a,{is:n.is}):(e=s.createElement(a),a==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,a),e[et]=t,e[hn]=n,X0(e,t,!1,!1),t.stateNode=e;e:{switch(s=Fi(a,n),a){case"dialog":F("cancel",e),F("close",e),r=n;break;case"iframe":case"object":case"embed":F("load",e),r=n;break;case"video":case"audio":for(r=0;r<Xa.length;r++)F(Xa[r],e);r=n;break;case"source":F("error",e),r=n;break;case"img":case"image":case"link":F("error",e),F("load",e),r=n;break;case"details":F("toggle",e),r=n;break;case"input":Ec(e,n),r=Hi(e,n),F("invalid",e);break;case"option":r=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},r=ee({},n,{value:void 0}),F("invalid",e);break;case"textarea":Yc(e,n),r=Li(e,n),F("invalid",e);break;default:r=n}Ui(a,r),o=r;for(i in o)if(o.hasOwnProperty(i)){var c=o[i];i==="style"?Nl(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&xl(e,c)):i==="children"?typeof c=="string"?(a!=="textarea"||c!=="")&&on(e,c):typeof c=="number"&&on(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(cn.hasOwnProperty(i)?c!=null&&i==="onScroll"&&F("scroll",e):c!=null&&Rs(e,i,c,s))}switch(a){case"input":Bn(e),Rc(e,n,!1);break;case"textarea":Bn(e),Hc(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Bt(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?ja(e,!!n.multiple,i,!1):n.defaultValue!=null&&ja(e,!!n.multiple,n.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=vr)}switch(a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)O0(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(Z(166));if(a=Ut(jn.current),Ut(at.current),Gn(t)){if(n=t.stateNode,a=t.memoizedProps,n[et]=t,(i=n.nodeValue!==a)&&(e=De,e!==null))switch(e.tag){case 3:_n(n.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_n(n.nodeValue,a,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(a.nodeType===9?a:a.ownerDocument).createTextNode(n),n[et]=t,t.stateNode=n}return Ie(t),null;case 13:if(X($),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Pe!==null&&t.mode&1&&!(t.flags&128))u0(),ka(),t.flags|=98560,i=!1;else if(i=Gn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(Z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(Z(317));i[et]=t}else ka(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),i=!1}else Xe!==null&&(Ns(Xe),Xe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=a,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?oe===0&&(oe=3):vc())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return Sa(),bs(e,t),e===null&&fn(t.stateNode.containerInfo),Ie(t),null;case 10:return nc(t.type._context),Ie(t),null;case 17:return Ce(t.type)&&yr(),Ie(t),null;case 19:if(X($),i=t.memoizedState,i===null)return Ie(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)_a(i,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Cr(e),s!==null){for(t.flags|=128,_a(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=a,a=t.child;a!==null;)i=a,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return U($,$.current&1|2),t.child}e=e.sibling}i.tail!==null&&re()>Pa&&(t.flags|=128,n=!0,_a(i,!1),t.lanes=4194304)}else{if(!n)if(e=Cr(s),e!==null){if(t.flags|=128,n=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),_a(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!V)return Ie(t),null}else 2*re()-i.renderingStartTime>Pa&&a!==1073741824&&(t.flags|=128,n=!0,_a(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(a=i.last,a!==null?a.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=re(),t.sibling=null,a=$.current,U($,n?a&1|2:a&1),t):(Ie(t),null);case 22:case 23:return jc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ae&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(Z(156,t.tag))}function Ed(e,t){switch(qs(t),t.tag){case 1:return Ce(t.type)&&yr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sa(),X(ke),X(be),oc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cc(t),null;case 13:if(X($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Z(340));ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X($),null;case 4:return Sa(),null;case 10:return nc(t.type._context),null;case 22:case 23:return jc(),null;case 24:return null;default:return null}}var Un=!1,he=!1,Rd=typeof WeakSet=="function"?WeakSet:Set,A=null;function ha(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(n){ne(e,t,n)}else a.current=null}function js(e,t,a){try{a()}catch(n){ne(e,t,n)}}var Ao=!1;function Yd(e,t){if(as=hr,e=e0(),Ks(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var r=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,o=-1,c=-1,p=0,j=0,b=e,l=null;t:for(;;){for(var I;b!==a||r!==0&&b.nodeType!==3||(o=s+r),b!==i||n!==0&&b.nodeType!==3||(c=s+n),b.nodeType===3&&(s+=b.nodeValue.length),(I=b.firstChild)!==null;)l=b,b=I;for(;;){if(b===e)break t;if(l===a&&++p===r&&(o=s),l===i&&++j===n&&(c=s),(I=b.nextSibling)!==null)break;b=l,l=b.parentNode}b=I}a=o===-1||c===-1?null:{start:o,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(ns={focusedElem:e,selectionRange:a},hr=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var h=v.memoizedProps,w=v.memoizedState,u=t.stateNode,d=u.getSnapshotBeforeUpdate(t.elementType===t.type?h:Ue(t.type,h),w);u.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(f){ne(t,t.return,f)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=Ao,Ao=!1,v}function tn(e,t,a){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&js(t,a,i)}r=r.next}while(r!==n)}}function Xr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var n=a.create;a.destroy=n()}a=a.next}while(a!==t)}}function vs(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function V0(e){var t=e.alternate;t!==null&&(e.alternate=null,V0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[hn],delete t[ss],delete t[yd],delete t[wd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function K0(e){return e.tag===5||e.tag===3||e.tag===4}function Po(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||K0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ys(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=vr));else if(n!==4&&(e=e.child,e!==null))for(ys(e,t,a),e=e.sibling;e!==null;)ys(e,t,a),e=e.sibling}function ws(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ws(e,t,a),e=e.sibling;e!==null;)ws(e,t,a),e=e.sibling}var ge=null,Fe=!1;function It(e,t,a){for(a=a.child;a!==null;)$0(e,t,a),a=a.sibling}function $0(e,t,a){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Yr,a)}catch{}switch(a.tag){case 5:he||ha(a,t);case 6:var n=ge,r=Fe;ge=null,It(e,t,a),ge=n,Fe=r,ge!==null&&(Fe?(e=ge,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):ge.removeChild(a.stateNode));break;case 18:ge!==null&&(Fe?(e=ge,a=a.stateNode,e.nodeType===8?wi(e.parentNode,a):e.nodeType===1&&wi(e,a),dn(e)):wi(ge,a.stateNode));break;case 4:n=ge,r=Fe,ge=a.stateNode.containerInfo,Fe=!0,It(e,t,a),ge=n,Fe=r;break;case 0:case 11:case 14:case 15:if(!he&&(n=a.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){r=n=n.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&js(a,t,s),r=r.next}while(r!==n)}It(e,t,a);break;case 1:if(!he&&(ha(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=a.memoizedProps,n.state=a.memoizedState,n.componentWillUnmount()}catch(o){ne(a,t,o)}It(e,t,a);break;case 21:It(e,t,a);break;case 22:a.mode&1?(he=(n=he)||a.memoizedState!==null,It(e,t,a),he=n):It(e,t,a);break;default:It(e,t,a)}}function Do(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new Rd),t.forEach(function(n){var r=Qd.bind(null,e,n);a.has(n)||(a.add(n),n.then(r,r))})}}function Le(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var r=a[n];try{var i=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:ge=o.stateNode,Fe=!1;break e;case 3:ge=o.stateNode.containerInfo,Fe=!0;break e;case 4:ge=o.stateNode.containerInfo,Fe=!0;break e}o=o.return}if(ge===null)throw Error(Z(160));$0(i,s,r),ge=null,Fe=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(p){ne(r,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)q0(t,e),t=t.sibling}function q0(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),$e(e),n&4){try{tn(3,e,e.return),Xr(3,e)}catch(h){ne(e,e.return,h)}try{tn(5,e,e.return)}catch(h){ne(e,e.return,h)}}break;case 1:Le(t,e),$e(e),n&512&&a!==null&&ha(a,a.return);break;case 5:if(Le(t,e),$e(e),n&512&&a!==null&&ha(a,a.return),e.flags&32){var r=e.stateNode;try{on(r,"")}catch(h){ne(e,e.return,h)}}if(n&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,s=a!==null?a.memoizedProps:i,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&yl(r,i),Fi(o,s);var p=Fi(o,i);for(s=0;s<c.length;s+=2){var j=c[s],b=c[s+1];j==="style"?Nl(r,b):j==="dangerouslySetInnerHTML"?xl(r,b):j==="children"?on(r,b):Rs(r,j,b,p)}switch(o){case"input":_i(r,i);break;case"textarea":wl(r,i);break;case"select":var l=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var I=i.value;I!=null?ja(r,!!i.multiple,I,!1):l!==!!i.multiple&&(i.defaultValue!=null?ja(r,!!i.multiple,i.defaultValue,!0):ja(r,!!i.multiple,i.multiple?[]:"",!1))}r[hn]=i}catch(h){ne(e,e.return,h)}}break;case 6:if(Le(t,e),$e(e),n&4){if(e.stateNode===null)throw Error(Z(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(h){ne(e,e.return,h)}}break;case 3:if(Le(t,e),$e(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{dn(t.containerInfo)}catch(h){ne(e,e.return,h)}break;case 4:Le(t,e),$e(e);break;case 13:Le(t,e),$e(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(hc=re())),n&4&&Do(e);break;case 22:if(j=a!==null&&a.memoizedState!==null,e.mode&1?(he=(p=he)||j,Le(t,e),he=p):Le(t,e),$e(e),n&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!j&&e.mode&1)for(A=e,j=e.child;j!==null;){for(b=A=j;A!==null;){switch(l=A,I=l.child,l.tag){case 0:case 11:case 14:case 15:tn(4,l,l.return);break;case 1:ha(l,l.return);var v=l.stateNode;if(typeof v.componentWillUnmount=="function"){n=l,a=l.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(h){ne(n,a,h)}}break;case 5:ha(l,l.return);break;case 22:if(l.memoizedState!==null){zo(b);continue}}I!==null?(I.return=l,A=I):zo(b)}j=j.sibling}e:for(j=null,b=e;;){if(b.tag===5){if(j===null){j=b;try{r=b.stateNode,p?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=b.stateNode,c=b.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Zl("display",s))}catch(h){ne(e,e.return,h)}}}else if(b.tag===6){if(j===null)try{b.stateNode.nodeValue=p?"":b.memoizedProps}catch(h){ne(e,e.return,h)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;j===b&&(j=null),b=b.return}j===b&&(j=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:Le(t,e),$e(e),n&4&&Do(e);break;case 21:break;default:Le(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(K0(a)){var n=a;break e}a=a.return}throw Error(Z(160))}switch(n.tag){case 5:var r=n.stateNode;n.flags&32&&(on(r,""),n.flags&=-33);var i=Po(e);ws(e,i,r);break;case 3:case 4:var s=n.stateNode.containerInfo,o=Po(e);ys(e,o,s);break;default:throw Error(Z(161))}}catch(c){ne(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hd(e,t,a){A=e,ep(e)}function ep(e,t,a){for(var n=(e.mode&1)!==0;A!==null;){var r=A,i=r.child;if(r.tag===22&&n){var s=r.memoizedState!==null||Un;if(!s){var o=r.alternate,c=o!==null&&o.memoizedState!==null||he;o=Un;var p=he;if(Un=s,(he=c)&&!p)for(A=r;A!==null;)s=A,c=s.child,s.tag===22&&s.memoizedState!==null?Wo(r):c!==null?(c.return=s,A=c):Wo(r);for(;i!==null;)A=i,ep(i),i=i.sibling;A=r,Un=o,he=p}Bo(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,A=i):Bo(e)}}function Bo(e){for(;A!==null;){var t=A;if(t.flags&8772){var a=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Xr(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!he)if(a===null)n.componentDidMount();else{var r=t.elementType===t.type?a.memoizedProps:Ue(t.type,a.memoizedProps);n.componentDidUpdate(r,a.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ho(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}ho(t,s,a)}break;case 5:var o=t.stateNode;if(a===null&&t.flags&4){a=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&a.focus();break;case"img":c.src&&(a.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var j=p.memoizedState;if(j!==null){var b=j.dehydrated;b!==null&&dn(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}he||t.flags&512&&vs(t)}catch(l){ne(t,t.return,l)}}if(t===e){A=null;break}if(a=t.sibling,a!==null){a.return=t.return,A=a;break}A=t.return}}function zo(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}function Wo(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{Xr(4,t)}catch(c){ne(t,a,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var r=t.return;try{n.componentDidMount()}catch(c){ne(t,r,c)}}var i=t.return;try{vs(t)}catch(c){ne(t,i,c)}break;case 5:var s=t.return;try{vs(t)}catch(c){ne(t,s,c)}}}catch(c){ne(t,t.return,c)}if(t===e){A=null;break}var o=t.sibling;if(o!==null){o.return=t.return,A=o;break}A=t.return}}var _d=Math.ceil,Pr=ft.ReactCurrentDispatcher,fc=ft.ReactCurrentOwner,He=ft.ReactCurrentBatchConfig,_=0,pe=null,ie=null,ue=0,Ae=0,ba=Tt(0),oe=0,Mn=null,$t=0,Qr=0,Ic=0,an=null,Ze=null,hc=0,Pa=1/0,it=null,Dr=!1,Ms=null,St=null,Fn=!1,Mt=null,Br=0,nn=0,xs=null,cr=-1,or=0;function we(){return _&6?re():cr!==-1?cr:cr=re()}function At(e){return e.mode&1?_&2&&ue!==0?ue&-ue:xd.transition!==null?(or===0&&(or=Rl()),or):(e=G,e!==0||(e=window.event,e=e===void 0?16:Ul(e.type)),e):1}function Oe(e,t,a,n){if(50<nn)throw nn=0,xs=null,Error(Z(185));Nn(e,a,n),(!(_&2)||e!==pe)&&(e===pe&&(!(_&2)&&(Qr|=a),oe===4&&yt(e,ue)),Se(e,n),a===1&&_===0&&!(t.mode&1)&&(Pa=re()+500,Jr&&Et()))}function Se(e,t){var a=e.callbackNode;xg(e,t);var n=Ir(e,e===pe?ue:0);if(n===0)a!==null&&Lc(a),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(a!=null&&Lc(a),t===1)e.tag===0?Md(To.bind(null,e)):p0(To.bind(null,e)),jd(function(){!(_&6)&&Et()}),a=null;else{switch(Yl(n)){case 1:a=Ls;break;case 4:a=Tl;break;case 16:a=fr;break;case 536870912:a=El;break;default:a=fr}a=op(a,tp.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function tp(e,t){if(cr=-1,or=0,_&6)throw Error(Z(327));var a=e.callbackNode;if(xa()&&e.callbackNode!==a)return null;var n=Ir(e,e===pe?ue:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=zr(e,n);else{t=n;var r=_;_|=2;var i=np();(pe!==e||ue!==t)&&(it=null,Pa=re()+500,Xt(e,t));do try{Jd();break}catch(o){ap(e,o)}while(!0);ac(),Pr.current=i,_=r,ie!==null?t=0:(pe=null,ue=0,t=oe)}if(t!==0){if(t===2&&(r=Ki(e),r!==0&&(n=r,t=Zs(e,r))),t===1)throw a=Mn,Xt(e,0),yt(e,n),Se(e,re()),a;if(t===6)yt(e,n);else{if(r=e.current.alternate,!(n&30)&&!Gd(r)&&(t=zr(e,n),t===2&&(i=Ki(e),i!==0&&(n=i,t=Zs(e,i))),t===1))throw a=Mn,Xt(e,0),yt(e,n),Se(e,re()),a;switch(e.finishedWork=r,e.finishedLanes=n,t){case 0:case 1:throw Error(Z(345));case 2:_t(e,Ze,it);break;case 3:if(yt(e,n),(n&130023424)===n&&(t=hc+500-re(),10<t)){if(Ir(e,0)!==0)break;if(r=e.suspendedLanes,(r&n)!==n){we(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=is(_t.bind(null,e,Ze,it),t);break}_t(e,Ze,it);break;case 4:if(yt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,r=-1;0<n;){var s=31-Qe(n);i=1<<s,s=t[s],s>r&&(r=s),n&=~i}if(n=r,n=re()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*_d(n/1960))-n,10<n){e.timeoutHandle=is(_t.bind(null,e,Ze,it),n);break}_t(e,Ze,it);break;case 5:_t(e,Ze,it);break;default:throw Error(Z(329))}}}return Se(e,re()),e.callbackNode===a?tp.bind(null,e):null}function Zs(e,t){var a=an;return e.current.memoizedState.isDehydrated&&(Xt(e,t).flags|=256),e=zr(e,t),e!==2&&(t=Ze,Ze=a,t!==null&&Ns(t)),e}function Ns(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function Gd(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var n=0;n<a.length;n++){var r=a[n],i=r.getSnapshot;r=r.value;try{if(!Ve(i(),r))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~Ic,t&=~Qr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-Qe(t),n=1<<a;e[a]=-1,t&=~n}}function To(e){if(_&6)throw Error(Z(327));xa();var t=Ir(e,0);if(!(t&1))return Se(e,re()),null;var a=zr(e,t);if(e.tag!==0&&a===2){var n=Ki(e);n!==0&&(t=n,a=Zs(e,n))}if(a===1)throw a=Mn,Xt(e,0),yt(e,t),Se(e,re()),a;if(a===6)throw Error(Z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,Ze,it),Se(e,re()),null}function bc(e,t){var a=_;_|=1;try{return e(t)}finally{_=a,_===0&&(Pa=re()+500,Jr&&Et())}}function qt(e){Mt!==null&&Mt.tag===0&&!(_&6)&&xa();var t=_;_|=1;var a=He.transition,n=G;try{if(He.transition=null,G=1,e)return e()}finally{G=n,He.transition=a,_=t,!(_&6)&&Et()}}function jc(){Ae=ba.current,X(ba)}function Xt(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,bd(a)),ie!==null)for(a=ie.return;a!==null;){var n=a;switch(qs(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&yr();break;case 3:Sa(),X(ke),X(be),oc();break;case 5:cc(n);break;case 4:Sa();break;case 13:X($);break;case 19:X($);break;case 10:nc(n.type._context);break;case 22:case 23:jc()}a=a.return}if(pe=e,ie=e=Pt(e.current,null),ue=Ae=t,oe=0,Mn=null,Ic=Qr=$t=0,Ze=an=null,Jt!==null){for(t=0;t<Jt.length;t++)if(a=Jt[t],n=a.interleaved,n!==null){a.interleaved=null;var r=n.next,i=a.pending;if(i!==null){var s=i.next;i.next=r,n.next=s}a.pending=n}Jt=null}return e}function ap(e,t){do{var a=ie;try{if(ac(),rr.current=Ar,Sr){for(var n=q.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Sr=!1}if(Kt=0,le=se=q=null,en=!1,vn=0,fc.current=null,a===null||a.return===null){oe=1,Mn=t,ie=null;break}e:{var i=e,s=a.return,o=a,c=t;if(t=ue,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var p=c,j=o,b=j.tag;if(!(j.mode&1)&&(b===0||b===11||b===15)){var l=j.alternate;l?(j.updateQueue=l.updateQueue,j.memoizedState=l.memoizedState,j.lanes=l.lanes):(j.updateQueue=null,j.memoizedState=null)}var I=Mo(s);if(I!==null){I.flags&=-257,xo(I,s,o,i,t),I.mode&1&&wo(i,p,t),t=I,c=p;var v=t.updateQueue;if(v===null){var h=new Set;h.add(c),t.updateQueue=h}else v.add(c);break e}else{if(!(t&1)){wo(i,p,t),vc();break e}c=Error(Z(426))}}else if(V&&o.mode&1){var w=Mo(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),xo(w,s,o,i,t),ec(Aa(c,o));break e}}i=c=Aa(c,o),oe!==4&&(oe=2),an===null?an=[i]:an.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var u=Y0(i,c,t);Io(i,u);break e;case 1:o=c;var d=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(St===null||!St.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var f=H0(i,o,t);Io(i,f);break e}}i=i.return}while(i!==null)}ip(a)}catch(y){t=y,ie===a&&a!==null&&(ie=a=a.return);continue}break}while(!0)}function np(){var e=Pr.current;return Pr.current=Ar,e===null?Ar:e}function vc(){(oe===0||oe===3||oe===2)&&(oe=4),pe===null||!($t&268435455)&&!(Qr&268435455)||yt(pe,ue)}function zr(e,t){var a=_;_|=2;var n=np();(pe!==e||ue!==t)&&(it=null,Xt(e,t));do try{Ld();break}catch(r){ap(e,r)}while(!0);if(ac(),_=a,Pr.current=n,ie!==null)throw Error(Z(261));return pe=null,ue=0,oe}function Ld(){for(;ie!==null;)rp(ie)}function Jd(){for(;ie!==null&&!fg();)rp(ie)}function rp(e){var t=cp(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?ip(e):ie=t,fc.current=null}function ip(e){var t=e;do{var a=t.alternate;if(e=t.return,t.flags&32768){if(a=Ed(a,t),a!==null){a.flags&=32767,ie=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ie=null;return}}else if(a=Td(a,t,Ae),a!==null){ie=a;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);oe===0&&(oe=5)}function _t(e,t,a){var n=G,r=He.transition;try{He.transition=null,G=1,Ud(e,t,a,n)}finally{He.transition=r,G=n}return null}function Ud(e,t,a,n){do xa();while(Mt!==null);if(_&6)throw Error(Z(327));a=e.finishedWork;var r=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(Z(177));e.callbackNode=null,e.callbackPriority=0;var i=a.lanes|a.childLanes;if(Zg(e,i),e===pe&&(ie=pe=null,ue=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Fn||(Fn=!0,op(fr,function(){return xa(),null})),i=(a.flags&15990)!==0,a.subtreeFlags&15990||i){i=He.transition,He.transition=null;var s=G;G=1;var o=_;_|=4,fc.current=null,Yd(e,a),q0(a,e),gd(ns),hr=!!as,ns=as=null,e.current=a,Hd(a),Ig(),_=o,G=s,He.transition=i}else e.current=a;if(Fn&&(Fn=!1,Mt=e,Br=r),i=e.pendingLanes,i===0&&(St=null),jg(a.stateNode),Se(e,re()),t!==null)for(n=e.onRecoverableError,a=0;a<t.length;a++)r=t[a],n(r.value,{componentStack:r.stack,digest:r.digest});if(Dr)throw Dr=!1,e=Ms,Ms=null,e;return Br&1&&e.tag!==0&&xa(),i=e.pendingLanes,i&1?e===xs?nn++:(nn=0,xs=e):nn=0,Et(),null}function xa(){if(Mt!==null){var e=Yl(Br),t=He.transition,a=G;try{if(He.transition=null,G=16>e?16:e,Mt===null)var n=!1;else{if(e=Mt,Mt=null,Br=0,_&6)throw Error(Z(331));var r=_;for(_|=4,A=e.current;A!==null;){var i=A,s=i.child;if(A.flags&16){var o=i.deletions;if(o!==null){for(var c=0;c<o.length;c++){var p=o[c];for(A=p;A!==null;){var j=A;switch(j.tag){case 0:case 11:case 15:tn(8,j,i)}var b=j.child;if(b!==null)b.return=j,A=b;else for(;A!==null;){j=A;var l=j.sibling,I=j.return;if(V0(j),j===p){A=null;break}if(l!==null){l.return=I,A=l;break}A=I}}}var v=i.alternate;if(v!==null){var h=v.child;if(h!==null){v.child=null;do{var w=h.sibling;h.sibling=null,h=w}while(h!==null)}}A=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,A=s;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:tn(9,i,i.return)}var u=i.sibling;if(u!==null){u.return=i.return,A=u;break e}A=i.return}}var d=e.current;for(A=d;A!==null;){s=A;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,A=m;else e:for(s=d;A!==null;){if(o=A,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Xr(9,o)}}catch(y){ne(o,o.return,y)}if(o===s){A=null;break e}var f=o.sibling;if(f!==null){f.return=o.return,A=f;break e}A=o.return}}if(_=r,Et(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Yr,e)}catch{}n=!0}return n}finally{G=a,He.transition=t}}return!1}function Eo(e,t,a){t=Aa(a,t),t=Y0(e,t,1),e=Ct(e,t,1),t=we(),e!==null&&(Nn(e,1,t),Se(e,t))}function ne(e,t,a){if(e.tag===3)Eo(e,e,a);else for(;t!==null;){if(t.tag===3){Eo(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(St===null||!St.has(n))){e=Aa(a,e),e=H0(t,e,1),t=Ct(t,e,1),e=we(),t!==null&&(Nn(t,1,e),Se(t,e));break}}t=t.return}}function Fd(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&a,pe===e&&(ue&a)===a&&(oe===4||oe===3&&(ue&130023424)===ue&&500>re()-hc?Xt(e,0):Ic|=a),Se(e,t)}function sp(e,t){t===0&&(e.mode&1?(t=Tn,Tn<<=1,!(Tn&130023424)&&(Tn=4194304)):t=1);var a=we();e=ut(e,t),e!==null&&(Nn(e,t,a),Se(e,a))}function Xd(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),sp(e,a)}function Qd(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(Z(314))}n!==null&&n.delete(t),sp(e,a)}var cp;cp=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Ne=!0;else{if(!(e.lanes&a)&&!(t.flags&128))return Ne=!1,Wd(e,t,a);Ne=!!(e.flags&131072)}else Ne=!1,V&&t.flags&1048576&&g0(t,xr,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;sr(e,t),e=t.pendingProps;var r=Na(t,be.current);Ma(t,a),r=pc(null,t,n,e,r,a);var i=gc();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(n)?(i=!0,wr(t)):i=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ic(t),r.updater=Fr,t.stateNode=r,r._reactInternals=t,ds(t,n,e,a),t=fs(null,t,n,!0,i,a)):(t.tag=0,V&&i&&$s(t),je(null,t,r,a),t=t.child),t;case 16:n=t.elementType;e:{switch(sr(e,t),e=t.pendingProps,r=n._init,n=r(n._payload),t.type=n,r=t.tag=Vd(n),e=Ue(n,e),r){case 0:t=ms(null,t,n,e,a);break e;case 1:t=ko(null,t,n,e,a);break e;case 11:t=Zo(null,t,n,e,a);break e;case 14:t=No(null,t,n,Ue(n.type,e),a);break e}throw Error(Z(306,n,""))}return t;case 0:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:Ue(n,r),ms(e,t,n,r,a);case 1:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:Ue(n,r),ko(e,t,n,r,a);case 3:e:{if(J0(t),e===null)throw Error(Z(387));n=t.pendingProps,i=t.memoizedState,r=i.element,h0(e,t),kr(t,n,null,a);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){r=Aa(Error(Z(423)),t),t=Co(e,t,n,a,r);break e}else if(n!==r){r=Aa(Error(Z(424)),t),t=Co(e,t,n,a,r);break e}else for(Pe=kt(t.stateNode.containerInfo.firstChild),De=t,V=!0,Xe=null,a=f0(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ka(),n===r){t=mt(e,t,a);break e}je(e,t,n,a)}t=t.child}return t;case 5:return b0(t),e===null&&ls(t),n=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,s=r.children,rs(n,r)?s=null:i!==null&&rs(n,i)&&(t.flags|=32),L0(e,t),je(e,t,s,a),t.child;case 6:return e===null&&ls(t),null;case 13:return U0(e,t,a);case 4:return sc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ca(t,null,n,a):je(e,t,n,a),t.child;case 11:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:Ue(n,r),Zo(e,t,n,r,a);case 7:return je(e,t,t.pendingProps,a),t.child;case 8:return je(e,t,t.pendingProps.children,a),t.child;case 12:return je(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(n=t.type._context,r=t.pendingProps,i=t.memoizedProps,s=r.value,U(Zr,n._currentValue),n._currentValue=s,i!==null)if(Ve(i.value,s)){if(i.children===r.children&&!ke.current){t=mt(e,t,a);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){s=i.child;for(var c=o.firstContext;c!==null;){if(c.context===n){if(i.tag===1){c=pt(-1,a&-a),c.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var j=p.pending;j===null?c.next=c:(c.next=j.next,j.next=c),p.pending=c}}i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),ps(i.return,a,t),o.lanes|=a;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(Z(341));s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),ps(s,a,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}je(e,t,r.children,a),t=t.child}return t;case 9:return r=t.type,n=t.pendingProps.children,Ma(t,a),r=_e(r),n=n(r),t.flags|=1,je(e,t,n,a),t.child;case 14:return n=t.type,r=Ue(n,t.pendingProps),r=Ue(n.type,r),No(e,t,n,r,a);case 15:return _0(e,t,t.type,t.pendingProps,a);case 17:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:Ue(n,r),sr(e,t),t.tag=1,Ce(n)?(e=!0,wr(t)):e=!1,Ma(t,a),R0(t,n,r),ds(t,n,r,a),fs(null,t,n,!0,e,a);case 19:return F0(e,t,a);case 22:return G0(e,t,a)}throw Error(Z(156,t.tag))};function op(e,t){return Wl(e,t)}function Od(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,a,n){return new Od(e,t,a,n)}function yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vd(e){if(typeof e=="function")return yc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hs)return 11;if(e===_s)return 14}return 2}function Pt(e,t){var a=e.alternate;return a===null?(a=Ye(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function lr(e,t,a,n,r,i){var s=2;if(n=e,typeof e=="function")yc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case oa:return Qt(a.children,r,i,t);case Ys:s=8,r|=8;break;case Ti:return e=Ye(12,a,t,r|2),e.elementType=Ti,e.lanes=i,e;case Ei:return e=Ye(13,a,t,r),e.elementType=Ei,e.lanes=i,e;case Ri:return e=Ye(19,a,t,r),e.elementType=Ri,e.lanes=i,e;case bl:return Or(a,r,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Il:s=10;break e;case hl:s=9;break e;case Hs:s=11;break e;case _s:s=14;break e;case bt:s=16,n=null;break e}throw Error(Z(130,e==null?e:typeof e,""))}return t=Ye(s,a,t,r),t.elementType=e,t.type=n,t.lanes=i,t}function Qt(e,t,a,n){return e=Ye(7,e,n,t),e.lanes=a,e}function Or(e,t,a,n){return e=Ye(22,e,n,t),e.elementType=bl,e.lanes=a,e.stateNode={isHidden:!1},e}function Ai(e,t,a){return e=Ye(6,e,null,t),e.lanes=a,e}function Pi(e,t,a){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kd(e,t,a,n,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gi(0),this.expirationTimes=gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gi(0),this.identifierPrefix=n,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function wc(e,t,a,n,r,i,s,o,c){return e=new Kd(e,t,a,o,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ye(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ic(i),e}function $d(e,t,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ca,key:n==null?null:""+n,children:e,containerInfo:t,implementation:a}}function lp(e){if(!e)return zt;e=e._reactInternals;e:{if(aa(e)!==e||e.tag!==1)throw Error(Z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Z(171))}if(e.tag===1){var a=e.type;if(Ce(a))return l0(e,a,t)}return t}function pp(e,t,a,n,r,i,s,o,c){return e=wc(a,n,!0,e,r,i,s,o,c),e.context=lp(null),a=e.current,n=we(),r=At(a),i=pt(n,r),i.callback=t??null,Ct(a,i,r),e.current.lanes=r,Nn(e,r,n),Se(e,n),e}function Vr(e,t,a,n){var r=t.current,i=we(),s=At(r);return a=lp(a),t.context===null?t.context=a:t.pendingContext=a,t=pt(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Ct(r,t,s),e!==null&&(Oe(e,r,s,i),nr(e,r,s)),s}function Wr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ro(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Mc(e,t){Ro(e,t),(e=e.alternate)&&Ro(e,t)}function qd(){return null}var gp=typeof reportError=="function"?reportError:function(e){console.error(e)};function xc(e){this._internalRoot=e}Kr.prototype.render=xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Z(409));Vr(e,t,null,null)};Kr.prototype.unmount=xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qt(function(){Vr(null,e,null,null)}),t[dt]=null}};function Kr(e){this._internalRoot=e}Kr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gl();e={blockedOn:null,target:e,priority:t};for(var a=0;a<vt.length&&t!==0&&t<vt[a].priority;a++);vt.splice(a,0,e),a===0&&Jl(e)}};function Zc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yo(){}function eu(e,t,a,n,r){if(r){if(typeof n=="function"){var i=n;n=function(){var p=Wr(s);i.call(p)}}var s=pp(t,n,e,0,null,!1,!1,"",Yo);return e._reactRootContainer=s,e[dt]=s.current,fn(e.nodeType===8?e.parentNode:e),qt(),s}for(;r=e.lastChild;)e.removeChild(r);if(typeof n=="function"){var o=n;n=function(){var p=Wr(c);o.call(p)}}var c=wc(e,0,!1,null,null,!1,!1,"",Yo);return e._reactRootContainer=c,e[dt]=c.current,fn(e.nodeType===8?e.parentNode:e),qt(function(){Vr(t,c,a,n)}),c}function qr(e,t,a,n,r){var i=a._reactRootContainer;if(i){var s=i;if(typeof r=="function"){var o=r;r=function(){var c=Wr(s);o.call(c)}}Vr(t,s,e,r)}else s=eu(a,t,e,r,n);return Wr(s)}Hl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=Fa(t.pendingLanes);a!==0&&(Js(t,a|1),Se(t,re()),!(_&6)&&(Pa=re()+500,Et()))}break;case 13:qt(function(){var n=ut(e,1);if(n!==null){var r=we();Oe(n,e,1,r)}}),Mc(e,1)}};Us=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var a=we();Oe(t,e,134217728,a)}Mc(e,134217728)}};_l=function(e){if(e.tag===13){var t=At(e),a=ut(e,t);if(a!==null){var n=we();Oe(a,e,t,n)}Mc(e,t)}};Gl=function(){return G};Ll=function(e,t){var a=G;try{return G=e,t()}finally{G=a}};Qi=function(e,t,a){switch(t){case"input":if(_i(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var r=Lr(n);if(!r)throw Error(Z(90));vl(n),_i(n,r)}}}break;case"textarea":wl(e,a);break;case"select":t=a.value,t!=null&&ja(e,!!a.multiple,t,!1)}};Sl=bc;Al=qt;var tu={usingClientEntryPoint:!1,Events:[Cn,da,Lr,kl,Cl,bc]},Ga={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},au={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bl(e),e===null?null:e.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||qd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xn.isDisabled&&Xn.supportsFiber)try{Yr=Xn.inject(au),tt=Xn}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tu;ze.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zc(t))throw Error(Z(200));return $d(e,t,null,a)};ze.createRoot=function(e,t){if(!Zc(e))throw Error(Z(299));var a=!1,n="",r=gp;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=wc(e,1,!1,null,null,a,!1,n,r),e[dt]=t.current,fn(e.nodeType===8?e.parentNode:e),new xc(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Z(188)):(e=Object.keys(e).join(","),Error(Z(268,e)));return e=Bl(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return qt(e)};ze.hydrate=function(e,t,a){if(!$r(t))throw Error(Z(200));return qr(null,e,t,!0,a)};ze.hydrateRoot=function(e,t,a){if(!Zc(e))throw Error(Z(405));var n=a!=null&&a.hydratedSources||null,r=!1,i="",s=gp;if(a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(s=a.onRecoverableError)),t=pp(t,null,e,1,a??null,r,!1,i,s),e[dt]=t.current,fn(e),n)for(e=0;e<n.length;e++)a=n[e],r=a._getVersion,r=r(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,r]:t.mutableSourceEagerHydrationData.push(a,r);return new Kr(t)};ze.render=function(e,t,a){if(!$r(t))throw Error(Z(200));return qr(null,e,t,!1,a)};ze.unmountComponentAtNode=function(e){if(!$r(e))throw Error(Z(40));return e._reactRootContainer?(qt(function(){qr(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};ze.unstable_batchedUpdates=bc;ze.unstable_renderSubtreeIntoContainer=function(e,t,a,n){if(!$r(a))throw Error(Z(200));if(e==null||e._reactInternals===void 0)throw Error(Z(38));return qr(e,t,a,!1,n)};ze.version="18.3.1-next-f1338f8080-20240426";function dp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dp)}catch(e){console.error(e)}}dp(),dl.exports=ze;var nu=dl.exports,up,Ho=nu;up=Ho.createRoot,Ho.hydrateRoot;const ru=[["北海道","#3D7DCA",["ヒグマ","🐻","SAPPORO ROYAL"],["ラベンダー","💜","HAKODATE RIVER CLUB"],["松前慶広","静御前","クラーク博士","エカチェリーナ2世"]],["青森","#C8323C",["りんご","🍎","HIROSAKI ACES"],["ねぶた","🏮","HAKKODA LOUNGE"],["津軽為信","満天姫","南部信直","ジャンヌ・ダルク"]],["岩手","#2E8B57",["わんこそば","🥢","MORIOKA CARD CLUB"],["南部鉄器","🫖","HIRAIZUMI GOLD ROOM"],["藤原秀衡","クレオパトラ","チンギス・ハン","ネフェルティティ"]],["宮城","#4169E1",["牛たん","🐂","SENDAI KINGS"],["こけし","🪆","MATSUSHIMA BAY LOUNGE"],["伊達政宗","愛姫","片倉景綱","五郎八姫"]],["秋田","#B22222",["なまはげ","👹","OGA SHOWDOWN"],["きりたんぽ","🍢","KAKUNODATE ROOM"],["佐竹義宣","小野小町","ナポレオン","西施"]],["山形","#DC143C",["さくらんぼ","🍒","YAMAGATA ACES"],["樹氷","🌲","ZAO ICE ROYAL"],["最上義光","義姫","上杉景勝","駒姫"]],["福島","#1E90FF",["赤べこ","🐮","AIZU ACES"],["もも","🍑","INAWASHIRO LAKE CLUB"],["蒲生氏郷","照姫","劉備","中野竹子"]],["茨城","#2F4F9F",["納豆","🫘","MITO FLUSH"],["メロン","🍈","TSUKUBA LOUNGE"],["佐竹義重","滝夜叉姫","平将門","ブーディカ"]],["栃木","#6A5ACD",["いちご","🍓","UTSUNOMIYA KINGS"],["餃子","🥟","NIKKO ROYAL"],["那須与一","玉藻前","関羽","マリア・テレジア"]],["群馬","#8B4513",["温泉","♨️","KUSATSU ALL-IN"],["だるま","🔴","IKAHO LOUNGE"],["新田義貞","小松姫","真田信之","ポカホンタス"]],["埼玉","#C71585",["さつまいも","🍠","KAWAGOE ACES"],["ねぎ","🥬","CHICHIBU RIVER ROOM"],["畠山重忠","甲斐姫","成田長親","ナイチンゲール"]],["千葉","#20B2AA",["落花生","🥜","MAKUHARI BAY ROYAL"],["菜の花","🌼","BOSO OCEAN CLUB"],["千葉常胤","伏姫","里見義堯","ヘレネ"]],["東京","#7B68EE",["電波塔","🗼","ROPPONGI ACES"],["月見だんご","🍡","GINZA ROYAL ROOM"],["太田道灌","春日局","北条氏照","八百屋お七"]],["神奈川","#4682B4",["大仏","🧘","KAMAKURA LOUNGE"],["港","⚓","YOKOHAMA BAY CLUB"],["北条早雲","大姫","北条氏康","ヴィクトリア女王"]],["新潟","#DAA520",["お米","🍚","NIIGATA RIVER CLUB"],["日本酒","🍶","SADO GOLD ROOM"],["上杉謙信","仙桃院","直江兼続","エリザベス1世"]],["富山","#1E3A8A",["ホタルイカ","🦑","TOYAMA BAY ACES"],["立山","🏔️","TATEYAMA ROYAL"],["佐々成政","マリー・アントワネット","前田利長","ジョゼフィーヌ"]],["石川","#B8860B",["金箔","✨","KANAZAWA GOLD ROOM"],["加賀友禅","👘","WAKURA LOUNGE"],["前田利家","まつ","前田利常","珠姫"]],["福井","#2E8B57",["恐竜","🦖","TOJINBO SHOWDOWN"],["越前がに","🦀","TSURUGA BAY CLUB"],["柴田勝家","お市の方","朝倉義景","初"]],["山梨","#8A2BE2",["ぶどう","🍇","KOFU ACES"],["富士山","🗻","KAWAGUCHIKO FLUSH"],["武田信玄","松姫","武田勝頼","三条の方"]],["長野","#228B22",["そば","🍜","MATSUMOTO CASTLE CLUB"],["雷鳥","🐦","KARUIZAWA ROYAL"],["真田昌幸","諏訪御料人","真田幸村","巴御前"]],["岐阜","#4B0082",["鵜飼い","🛶","GIFU RIVER ROOM"],["合掌造り","🏠","SHIRAKAWAGO LOUNGE"],["斎藤道三","濃姫","竹中半兵衛","おつやの方"]],["静岡","#3CB371",["お茶","🍵","SHIZUOKA KINGS"],["うなぎ","🐍","HAMANAKO LOUNGE"],["今川義元","井伊直虎","徳川家康","北条政子"]],["愛知","#FF8C00",["しゃちほこ","🐟","NAGOYA KINGS"],["味噌","🥣","SAKAE NIGHT ROOM"],["織田信長","ねね","豊臣秀吉","築山殿"]],["三重","#4169E1",["真珠","🦪","TOBA PEARL ROOM"],["忍者","🥷","IGA SHADOW CLUB"],["藤堂高虎","冬姫","九鬼嘉隆","鈴鹿御前"]],["滋賀","#1E90FF",["びわ湖","🌊","BIWAKO BLUE LOUNGE"],["信楽たぬき","🦝","HIKONE CASTLE ACES"],["浅井長政","江","石田三成","京極竜子"]],["京都","#800080",["舞","🪭","GION ROYAL ROOM"],["抹茶","🍵","ARASHIYAMA LOUNGE"],["明智光秀","細川ガラシャ","細川藤孝","常盤御前"]],["大阪","#FF4500",["たこ焼き","🐙","NAMBA ALL-IN"],["お好み焼き","🥞","UMEDA ACES"],["楠木正成","淀殿","豊臣秀頼","葛の葉"]],["兵庫","#2F4F4F",["白い城","🏯","HIMEJI KINGS"],["港の夜景","🌃","KOBE HARBOR CLUB"],["黒田官兵衛","千姫","平清盛","光"]],["奈良","#8B4513",["鹿","🦌","NARA KINGS"],["柿","🟠","YOSHINO LOUNGE"],["松永久秀","額田王","筒井順慶","王昭君"]],["和歌山","#FFA500",["みかん","🍊","WAKAYAMA ACES"],["梅","🌸","SHIRAHAMA BEACH CLUB"],["雑賀孫一","清姫","徳川頼宣","キュリー夫人"]],["鳥取","#C2B280",["砂丘","🏜️","TOTTORI DUNES ROOM"],["梨","🍐","DAISEN SHOWDOWN"],["曹操","シバの女王","諸葛亮","シェヘラザード"]],["島根","#4682B4",["縁結び","💞","IWAMI SILVER ROOM"],["しじみ","🐚","MATSUE LAKE CLUB"],["尼子経久","出雲阿国","山中鹿介","櫛名田比売"]],["岡山","#E9967A",["桃太郎","🍑","OKAYAMA ACES"],["マスカット","🍇","KURASHIKI CANAL CLUB"],["宇喜多直家","豪姫","宇喜多秀家","虞美人"]],["広島","#B22222",["もみじ","🍁","HIROSHIMA ACES"],["牡蠣","🦪","ONOMICHI SEA CLUB"],["毛利元就","妙玖","小早川隆景","則天武后"]],["山口","#FF6347",["ふぐ","🐡","SHIMONOSEKI ROYAL"],["錦帯橋","🌉","IWAKUNI BRIDGE CLUB"],["大内義隆","楊貴妃","陶晴賢","西太后"]],["徳島","#9370DB",["阿波おどり","💃","TOKUSHIMA ACES"],["すだち","🍋","IYA VALLEY LOUNGE"],["三好長慶","ポンパドゥール夫人","蜂須賀家政","イサベル1世"]],["香川","#F5DEB3",["うどん","🍜","TAKAMATSU ROYAL"],["オリーブ","🫒","SHODOSHIMA LOUNGE"],["アレクサンドロス大王","かぐや姫","ユリウス・カエサル","メアリー・スチュアート"]],["愛媛","#FF8C00",["みかんジュース","🧃","MATSUYAMA ACES"],["道後温泉","♨️","DOGO ROYAL"],["村上武吉","テオドラ","加藤嘉明","ジェーン・オースティン"]],["高知","#006400",["かつお","🐟","KATSURAHAMA BEACH CLUB"],["よさこい","🎐","SHIMANTO RIVER ROOM"],["長宗我部元親","千代","山内一豊","アメリア・イアハート"]],["福岡","#DC143C",["明太子","🌶️","NAKASU NIGHT ROYAL"],["屋台","🏮","TENJIN ACES"],["立花宗茂","立花誾千代","黒田長政","貂蝉"]],["佐賀","#4682B4",["有田焼","🏺","KARATSU BAY CLUB"],["バルーン","🎈","URESHINO LOUNGE"],["龍造寺隆信","カトリーヌ・ド・メディシス","鍋島直茂","アン・ブーリン"]],["長崎","#8B0000",["カステラ","🍰","DEJIMA ROYAL"],["ちゃんぽん","🍲","SASEBO HARBOR CLUB"],["大村純忠","蝶々夫人","有馬晴信","ネフェルタリ"]],["熊本","#000000",["くま","🐻","KUMAMOTO CASTLE ACES"],["阿蘇山","🌋","ASO VOLCANO ROOM"],["加藤清正","ハトシェプスト","細川忠興","ゼノビア"]],["大分","#8B4513",["温泉地獄","♨️","BEPPU ALL-IN"],["かぼす","🍋","YUFUIN LOUNGE"],["大友宗麟","ルクレツィア・ボルジア","立花道雪","ラクシュミー・バーイー"]],["宮崎","#FF8C00",["マンゴー","🥭","MIYAZAKI ACES"],["ひまわり","🌻","AOSHIMA BEACH CLUB"],["ハンニバル","木花咲耶姫","項羽","サッフォー"]],["鹿児島","#B22222",["桜島","🌋","SAKURAJIMA ROYAL"],["黒豚","🐖","IBUSUKI LOUNGE"],["島津義久","篤姫","島津義弘","ジョルジュ・サンド"]],["沖縄","#00CED1",["シーサー","🦁","NAHA ROYAL"],["ハイビスカス","🌺","ISHIGAKI BLUE LOUNGE"],["尚巴志","リリウオカラニ","護佐丸","ムーラン"]]],ei=[{id:"n",name:"N"},{id:"r",name:"R"},{id:"s",name:"SR"},{id:"g",name:"SSR"},{id:"u",name:"UR"}];ei.map(e=>e.id);const iu=[{id:"T",name:"タイト"},{id:"N",name:""},{id:"L",name:"ルース"}],su=[{id:"P",name:"パッシブ"},{id:"B",name:"バランス"},{id:"A",name:"アグレッシブ"},{id:"M",name:"マニアック"}],cu=["TB TP LA NM","LA TB TP NM","TB LM TA NP","LA TP TB NA","TP NB TA LP","TA LB TP NP","TB NP LP NA","TA LM NM LA","TB LM TA NB","LA TA TP NP","TB NA LP TP","TP NB TA LM","TB TA NA LM","TA TP TB NB","NA TP TB TA","LA LP TP NB","TA TB NP TP","LA TB LP NB","TA TP LA NB","NM TP LA TA","NM TA TB LB","LP TB TP TA","LM TB LA NP","TB TP LA NM","NB TP TA LB","TB TP NB LP","TA LA NP NB","TB NP LA TP","LM NB TP NP","TA LM NA TB","TA NB TB LB","TA LA NM TP","NM NB LA LP","TB TP TA LM","LP LB LA TA","TB NB TP NA","LA TP TA LB","LA TA TB NP","TA TB TP LA","TA NA TB LM","LA TM TB LB","NP LP NA TB","TA TB LM NA","LB LM TA NA","TM NP LA NB","TB TP NA LB","TA NP TB NA"],ou=e=>(iu.find(t=>t.id===e[0])||{}).name+(su.find(t=>t.id===e[1])||{}).name,Nc=(()=>{const e=[];return ru.forEach(([t,a,n,r,i],s)=>{[n,r].forEach(([o,c,p],j)=>{const b=j===0?"a":"b";["m","f"].forEach((l,I)=>{e.push({key:`${String(s+1).padStart(2,"0")}${b}${l}`,pref:s,prefName:t,color:a,store:b,storeName:p,motif:o,emoji:c,sex:l,name:i[j*2+I],style:cu[s].split(" ")[j*2+I]})})})}),e})(),mp=["♠","♥","♦","♣"],Tr="shdc",lu="A23456789TJQK",pu={A:14,T:10,J:11,Q:12,K:13},gu=Object.fromEntries(ei.map(e=>[e.id,e.name])),du=Object.fromEntries(Nc.map(e=>[e.key,e])),uu=/^(\d\d[ab][mf])-([nrsgu])-([A2-9TJQK])([shdc])$/,Di=new Map;function ks(e){if(Di.has(e))return Di.get(e);const t=uu.exec(e||""),a=t&&du[t[1]],n=a?{id:e,player:a,rarity:t[2],rarityName:gu[t[2]],rank:pu[t[3]]||Number(t[3]),suit:Tr.indexOf(t[4]),label:`${t[3]}${mp[Tr.indexOf(t[4])]}`}:null;return Di.set(e,n),n}Nc.filter(e=>e.sex==="m").map(e=>({key:e.key.slice(0,3),pref:e.pref,prefName:e.prefName,name:e.storeName}));const mu=[...lu.split("").map((e,t)=>({id:"r"+e,name:`${["A","2","3","4","5","6","7","8","9","10","J","Q","K"][t]}`,kind:"rank",rank:t,gold:500})),...Tr.split("").map((e,t)=>({id:"s"+e,name:mp[t],kind:"suit",suit:t,gold:3e3})),{id:"52",name:"コンプリート",kind:"all",gold:2e4}],fu={n:1,r:2,s:5,g:10,u:20},Iu=e=>mu.map(t=>({...t,cells:ei.map(a=>({rarity:a.id,key:`${e}:${a.id}:${t.id}`,gold:Math.round(t.gold*fu[a.id])}))}));(()=>{const e=new Set;return Nc.forEach(t=>Iu(t.key).forEach(a=>a.cells.forEach(n=>e.add(n.key)))),e})();const hu=["♠","♥","♦","♣"],_o=[{name:"ビギナー",max:3e3,stakes:[[1,3]],ad:100},{name:"ブロンズ",max:1e4,stakes:[[1,3],[2,5]],ad:100},{name:"シルバー",max:3e4,stakes:[[2,5],[5,10]],ad:200},{name:"ゴールド",max:1e5,stakes:[[5,10],[10,20]],ad:300},{name:"プラチナム",max:1e6,stakes:[[10,20],[20,40]],ad:500}];_o.forEach((e,t)=>{e.min=t===0?0:_o[t-1].max});const Cs=[{id:"card-n",label:"プレイヤーカード N",card:"n",weight:7e4},{id:"card-r",label:"プレイヤーカード R",card:"r",weight:25e3},{id:"card-s",label:"プレイヤーカード SR",card:"s",weight:4450},{id:"card-g",label:"プレイヤーカード SSR",card:"g",weight:500},{id:"card-u",label:"プレイヤーカード UR",card:"u",weight:50}],Qn=e=>Cs.find(t=>t.id===e),Go=[{id:"normal",name:"ノーマルガチャ",cost:"free",prizes:Cs},{id:"rare",name:"レアガチャ",cost:"tickets",prizes:[{...Qn("card-r"),weight:78e3},{...Qn("card-s"),weight:19500},{...Qn("card-g"),weight:2250},{...Qn("card-u"),weight:250}]},{id:"pickup",name:"ピックアップガチャ",cost:"ptickets",prizes:Cs,pickup:!0}],bu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMTEwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjExMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0ibSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSg5MCAuNSAuNSkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjxzdG9wIG9mZnNldD0iLjM1IiBzdG9wLWNvbG9yPSIjZGZlM2VhIi8+PHN0b3Agb2Zmc2V0PSIuNTUiIHN0b3AtY29sb3I9IiM5YWEyYjEiLz48c3RvcCBvZmZzZXQ9Ii43NSIgc3RvcC1jb2xvcj0iI2RmZTNlYSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJiZyIgY3g9Ii41IiBjeT0iLjM1IiByPSIuNyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9Ii45NSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIuOTUiLz48L3JhZGlhbEdyYWRpZW50Pgo8ZmlsdGVyIGlkPSJzaCI+PGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjIiIHN0ZERldmlhdGlvbj0iMiIgZmxvb2QtY29sb3I9IiMwMDAiIGZsb29kLW9wYWNpdHk9Ii41Ii8+PC9maWx0ZXI+PC9kZWZzPgo8ZWxsaXBzZSBjeD0iMTAwIiBjeT0iNTUiIHJ4PSI5NCIgcnk9IjQ5IiBmaWxsPSJ1cmwoI2JnKSIgc3Ryb2tlPSJ1cmwoI20pIiBzdHJva2Utd2lkdGg9IjgiIGZpbHRlcj0idXJsKCNzaCkiLz4KPGVsbGlwc2UgY3g9IjEwMCIgY3k9IjU1IiByeD0iODIiIHJ5PSIzOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOWFhMmIxIiBzdHJva2Utb3BhY2l0eT0iLjUiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIxMDAiIHk9Ijc5LjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgJ0xpYmVyYXRpb24gU2VyaWYnLCAnRGVqYVZ1IFNlcmlmJywgc2VyaWYiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZm9udC13ZWlnaHQ9IjcwMCIgZm9udC1zaXplPSI3MCIgZmlsbD0iIzViNjE3MCIgc3Ryb2tlPSIjOWFhMmIxIiBzdHJva2Utd2lkdGg9IjEuNSIgcGFpbnQtb3JkZXI9InN0cm9rZSI+TjwvdGV4dD4KPC9zdmc+",ju="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMTEwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjExMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0ibSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSg5MCAuNSAuNSkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2NmZTZmZiIvPjxzdG9wIG9mZnNldD0iLjM1IiBzdG9wLWNvbG9yPSIjNGE5YmZmIi8+PHN0b3Agb2Zmc2V0PSIuNTUiIHN0b3AtY29sb3I9IiMxNjNmOGYiLz48c3RvcCBvZmZzZXQ9Ii43NSIgc3RvcC1jb2xvcj0iIzRhOWJmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2NmZTZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJiZyIgY3g9Ii41IiBjeT0iLjM1IiByPSIuNyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9Ii45NSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2NmZTZmZiIgc3RvcC1vcGFjaXR5PSIuOTUiLz48L3JhZGlhbEdyYWRpZW50Pgo8ZmlsdGVyIGlkPSJzaCI+PGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjIiIHN0ZERldmlhdGlvbj0iMiIgZmxvb2QtY29sb3I9IiMwMDAiIGZsb29kLW9wYWNpdHk9Ii41Ii8+PC9maWx0ZXI+PC9kZWZzPgo8ZWxsaXBzZSBjeD0iMTAwIiBjeT0iNTUiIHJ4PSI5NCIgcnk9IjQ5IiBmaWxsPSJ1cmwoI2JnKSIgc3Ryb2tlPSJ1cmwoI20pIiBzdHJva2Utd2lkdGg9IjgiIGZpbHRlcj0idXJsKCNzaCkiLz4KPGVsbGlwc2UgY3g9IjEwMCIgY3k9IjU1IiByeD0iODIiIHJ5PSIzOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTYzZjhmIiBzdHJva2Utb3BhY2l0eT0iLjUiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIxMDAiIHk9Ijc5LjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgJ0xpYmVyYXRpb24gU2VyaWYnLCAnRGVqYVZ1IFNlcmlmJywgc2VyaWYiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZm9udC13ZWlnaHQ9IjcwMCIgZm9udC1zaXplPSI3MCIgZmlsbD0iIzFmNWZkMSIgc3Ryb2tlPSIjMTYzZjhmIiBzdHJva2Utd2lkdGg9IjEuNSIgcGFpbnQtb3JkZXI9InN0cm9rZSI+UjwvdGV4dD4KPC9zdmc+",vu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMTEwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjExMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0ibSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSg5MCAuNSAuNSkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjxzdG9wIG9mZnNldD0iLjM1IiBzdG9wLWNvbG9yPSIjYzRjY2Q4Ii8+PHN0b3Agb2Zmc2V0PSIuNTUiIHN0b3AtY29sb3I9IiM1ZDY2NzYiLz48c3RvcCBvZmZzZXQ9Ii43NSIgc3RvcC1jb2xvcj0iI2M0Y2NkOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJiZyIgY3g9Ii41IiBjeT0iLjM1IiByPSIuNyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9Ii45NSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIuOTUiLz48L3JhZGlhbEdyYWRpZW50Pgo8ZmlsdGVyIGlkPSJzaCI+PGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjIiIHN0ZERldmlhdGlvbj0iMiIgZmxvb2QtY29sb3I9IiMwMDAiIGZsb29kLW9wYWNpdHk9Ii41Ii8+PC9maWx0ZXI+PC9kZWZzPgo8ZWxsaXBzZSBjeD0iMTAwIiBjeT0iNTUiIHJ4PSI5NCIgcnk9IjQ5IiBmaWxsPSJ1cmwoI2JnKSIgc3Ryb2tlPSJ1cmwoI20pIiBzdHJva2Utd2lkdGg9IjgiIGZpbHRlcj0idXJsKCNzaCkiLz4KPGVsbGlwc2UgY3g9IjEwMCIgY3k9IjU1IiByeD0iODIiIHJ5PSIzOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNWQ2Njc2IiBzdHJva2Utb3BhY2l0eT0iLjUiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIxMDAiIHk9Ijc2LjciIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgJ0xpYmVyYXRpb24gU2VyaWYnLCAnRGVqYVZ1IFNlcmlmJywgc2VyaWYiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZm9udC13ZWlnaHQ9IjcwMCIgZm9udC1zaXplPSI2MiIgZmlsbD0iIzZhNzM4MyIgc3Ryb2tlPSIjNWQ2Njc2IiBzdHJva2Utd2lkdGg9IjEuNSIgcGFpbnQtb3JkZXI9InN0cm9rZSI+U1I8L3RleHQ+Cjwvc3ZnPg==",yu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMTEwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjExMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0ibSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSg5MCAuNSAuNSkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZjRjMiIvPjxzdG9wIG9mZnNldD0iLjM1IiBzdG9wLWNvbG9yPSIjZTdiNTRhIi8+PHN0b3Agb2Zmc2V0PSIuNTUiIHN0b3AtY29sb3I9IiM3YTU0MTMiLz48c3RvcCBvZmZzZXQ9Ii43NSIgc3RvcC1jb2xvcj0iI2U3YjU0YSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjRjMiIvPjwvbGluZWFyR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJiZyIgY3g9Ii41IiBjeT0iLjM1IiByPSIuNyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9Ii45NSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjRjMiIgc3RvcC1vcGFjaXR5PSIuOTUiLz48L3JhZGlhbEdyYWRpZW50Pgo8ZmlsdGVyIGlkPSJzaCI+PGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjIiIHN0ZERldmlhdGlvbj0iMiIgZmxvb2QtY29sb3I9IiMwMDAiIGZsb29kLW9wYWNpdHk9Ii41Ii8+PC9maWx0ZXI+PC9kZWZzPgo8ZWxsaXBzZSBjeD0iMTAwIiBjeT0iNTUiIHJ4PSI5NCIgcnk9IjQ5IiBmaWxsPSJ1cmwoI2JnKSIgc3Ryb2tlPSJ1cmwoI20pIiBzdHJva2Utd2lkdGg9IjgiIGZpbHRlcj0idXJsKCNzaCkiLz4KPGVsbGlwc2UgY3g9IjEwMCIgY3k9IjU1IiByeD0iODIiIHJ5PSIzOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjN2E1NDEzIiBzdHJva2Utb3BhY2l0eT0iLjUiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIxMDAiIHk9IjczLjkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgJ0xpYmVyYXRpb24gU2VyaWYnLCAnRGVqYVZ1IFNlcmlmJywgc2VyaWYiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZm9udC13ZWlnaHQ9IjcwMCIgZm9udC1zaXplPSI1NCIgZmlsbD0iIzhhNWExMiIgc3Ryb2tlPSIjN2E1NDEzIiBzdHJva2Utd2lkdGg9IjEuNSIgcGFpbnQtb3JkZXI9InN0cm9rZSI+U1NSPC90ZXh0Pgo8L3N2Zz4=",wu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMTEwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjExMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0ibSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSg0NSAuNSAuNSkiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZjVhNWEiLz48c3RvcCBvZmZzZXQ9IjE0LjI4NTcxNDI4NTcxNDI4NSUiIHN0b3AtY29sb3I9IiNmZmIwM2MiLz48c3RvcCBvZmZzZXQ9IjI4LjU3MTQyODU3MTQyODU3JSIgc3RvcC1jb2xvcj0iI2ZmZTk1YSIvPjxzdG9wIG9mZnNldD0iNDIuODU3MTQyODU3MTQyODU0JSIgc3RvcC1jb2xvcj0iIzVlZTA4YSIvPjxzdG9wIG9mZnNldD0iNTcuMTQyODU3MTQyODU3MTQlIiBzdG9wLWNvbG9yPSIjNGZkMmZmIi8+PHN0b3Agb2Zmc2V0PSI3MS40Mjg1NzE0Mjg1NzE0MyUiIHN0b3AtY29sb3I9IiM2YjdiZmYiLz48c3RvcCBvZmZzZXQ9Ijg1LjcxNDI4NTcxNDI4NTcxJSIgc3RvcC1jb2xvcj0iI2M3N2RmZiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmNWE5ZSIvPjwvbGluZWFyR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJiZyIgY3g9Ii41IiBjeT0iLjM1IiByPSIuNyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9Ii45NSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2VmZTJmZiIgc3RvcC1vcGFjaXR5PSIuOTUiLz48L3JhZGlhbEdyYWRpZW50Pgo8ZmlsdGVyIGlkPSJzaCI+PGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjIiIHN0ZERldmlhdGlvbj0iMiIgZmxvb2QtY29sb3I9IiMwMDAiIGZsb29kLW9wYWNpdHk9Ii41Ii8+PC9maWx0ZXI+PC9kZWZzPgo8ZWxsaXBzZSBjeD0iMTAwIiBjeT0iNTUiIHJ4PSI5NCIgcnk9IjQ5IiBmaWxsPSJ1cmwoI2JnKSIgc3Ryb2tlPSJ1cmwoI20pIiBzdHJva2Utd2lkdGg9IjgiIGZpbHRlcj0idXJsKCNzaCkiLz4KPGVsbGlwc2UgY3g9IjEwMCIgY3k9IjU1IiByeD0iODIiIHJ5PSIzOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2IyYTZiIiBzdHJva2Utb3BhY2l0eT0iLjUiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIxMDAiIHk9Ijc2LjciIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgJ0xpYmVyYXRpb24gU2VyaWYnLCAnRGVqYVZ1IFNlcmlmJywgc2VyaWYiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZm9udC13ZWlnaHQ9IjcwMCIgZm9udC1zaXplPSI2MiIgZmlsbD0idXJsKCNtKSIgc3Ryb2tlPSIjM2IyYTZiIiBzdHJva2Utd2lkdGg9IjEuNSIgcGFpbnQtb3JkZXI9InN0cm9rZSI+VVI8L3RleHQ+Cjwvc3ZnPg==",Mu="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20630%20880'%20width='630'%20height='880'%3e%3cdefs%3e%3clinearGradient%20id='m'%20gradientTransform='rotate(90%20.5%20.5)'%3e%3cstop%20offset='0'%20stop-color='%23ffffff'/%3e%3cstop%20offset='.35'%20stop-color='%23dfe3ea'/%3e%3cstop%20offset='.55'%20stop-color='%239aa2b1'/%3e%3cstop%20offset='.75'%20stop-color='%23dfe3ea'/%3e%3cstop%20offset='1'%20stop-color='%23ffffff'/%3e%3c/linearGradient%3e%3clinearGradient%20id='m2'%20gradientTransform='rotate(0%20.5%20.5)'%3e%3cstop%20offset='0'%20stop-color='%23ffffff'/%3e%3cstop%20offset='.35'%20stop-color='%23dfe3ea'/%3e%3cstop%20offset='.55'%20stop-color='%239aa2b1'/%3e%3cstop%20offset='.75'%20stop-color='%23dfe3ea'/%3e%3cstop%20offset='1'%20stop-color='%23ffffff'/%3e%3c/linearGradient%3e%3clinearGradient%20id='panel'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%230b0d1c'%20stop-opacity='0'/%3e%3cstop%20offset='.12'%20stop-color='%230b0d1c'%20stop-opacity='.72'/%3e%3cstop%20offset='1'%20stop-color='%2305060d'%20stop-opacity='.94'/%3e%3c/linearGradient%3e%3clinearGradient%20id='plate'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%23ffffff'/%3e%3cstop%20offset='1'%20stop-color='%23dfe3ea'/%3e%3c/linearGradient%3e%3cfilter%20id='glow'%20x='-10%25'%20y='-10%25'%20width='120%25'%20height='120%25'%3e%3cfeGaussianBlur%20stdDeviation='6'/%3e%3c/filter%3e%3cmask%20id='hole'%3e%3crect%20width='630'%20height='880'%20fill='%23fff'/%3e%3crect%20x='26'%20y='26'%20width='578'%20height='828'%20rx='5'%20fill='%23000'/%3e%3c/mask%3e%3c/defs%3e%3c!--%20外の枠(光)%20--%3e%3crect%20x='10'%20y='10'%20width='610'%20height='860'%20rx='8'%20fill='none'%20stroke='rgba(255,255,255,.55)'%20stroke-width='16'%20filter='url(%23glow)'/%3e%3c!--%20外の枠(金属)%20--%3e%3crect%20width='630'%20height='880'%20rx='12'%20fill='url(%23m)'%20mask='url(%23hole)'/%3e%3crect%20x='5'%20y='5'%20width='620'%20height='870'%20rx='9'%20fill='none'%20stroke='%239aa2b1'%20stroke-width='2'%20opacity='.8'/%3e%3crect%20x='26'%20y='26'%20width='578'%20height='828'%20rx='5'%20fill='none'%20stroke='%239aa2b1'%20stroke-width='3'/%3e%3crect%20x='33'%20y='33'%20width='564'%20height='814'%20rx='3'%20fill='none'%20stroke='url(%23m2)'%20stroke-width='2'%20opacity='.9'/%3e%3c!--%20下の欄(名前・説明・プレイスタイル)。文字はアプリが重ねる%20--%3e%3cpath%20d='M26%20560%20L604%20560%20L604%20849%20Q604%20854%20599%20854%20L31%20854%20Q26%20854%2026%20849%20Z'%20fill='url(%23panel)'/%3e%3cpath%20d='M60%20694%20L570%20694'%20stroke='url(%23m2)'%20stroke-width='2.5'/%3e%3cpath%20d='M297%20694%20l18%20-9%20l18%209%20l-18%209%20Z'%20fill='url(%23m)'%20stroke='%239aa2b1'%20stroke-width='1.5'/%3e%3crect%20x='96'%20y='772'%20width='438'%20height='34'%20rx='17'%20fill='%23000'%20fill-opacity='.45'%20stroke='url(%23m2)'%20stroke-width='1.5'/%3e%3crect%20x='96'%20y='812'%20width='438'%20height='34'%20rx='17'%20fill='%23000'%20fill-opacity='.45'%20stroke='url(%23m2)'%20stroke-width='1.5'/%3e%3c!--%20上の帯(店の名前。2段)%20--%3e%3cpath%20d='M150%2030%20L432%2030%20L414%2076%20L150%2076%20Z'%20fill='url(%23plate)'%20stroke='url(%23m)'%20stroke-width='4'/%3e%3cpath%20d='M150%2076%20L414%2076%20L402%20106%20L150%20106%20Z'%20fill='%230c0d18'%20fill-opacity='.9'%20stroke='url(%23m)'%20stroke-width='3'/%3e%3c!--%20角の飾り%20--%3e%3cg%20stroke='url(%23m)'%20opacity='.95'%3e%3cg%20transform='translate(26%20854)%20scale(1%20-1)'%3e%3cpath%20d='M8%2070%20C8%2034%2034%208%2070%208%20M8%20110%20C14%2070%2030%2044%2058%2030%20C44%2046%2040%2062%2046%2076%20C30%2070%2022%2084%2028%2096%20M110%208%20C70%2014%2044%2030%2030%2058%20C46%2044%2062%2040%2076%2046%20C70%2030%2084%2022%2096%2028'%20fill='none'%20stroke-width='4'%20stroke-linecap='round'/%3e%3c/g%3e%3cg%20transform='translate(604%20854)%20scale(-1%20-1)'%3e%3cpath%20d='M8%2070%20C8%2034%2034%208%2070%208%20M8%20110%20C14%2070%2030%2044%2058%2030%20C44%2046%2040%2062%2046%2076%20C30%2070%2022%2084%2028%2096%20M110%208%20C70%2014%2044%2030%2030%2058%20C46%2044%2062%2040%2076%2046%20C70%2030%2084%2022%2096%2028'%20fill='none'%20stroke-width='4'%20stroke-linecap='round'/%3e%3c/g%3e%3cg%20transform='translate(604%2026)%20scale(-1%201)'%3e%3cpath%20d='%20M8%20110%20C14%2070%2030%2044%2058%2030%20C44%2046%2040%2062%2046%2076%20C30%2070%2022%2084%2028%2096%20M110%208%20C70%2014%2044%2030%2030%2058%20C46%2044%2062%2040%2076%2046%20C70%2030%2084%2022%2096%2028'%20fill='none'%20stroke-width='4'%20stroke-linecap='round'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",xu="/-stack-poker-test-web/gacha-chest-v1/assets/frame-n-KY6AuXSR.webp",Zu="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20630%20880'%20width='630'%20height='880'%3e%3cdefs%3e%3clinearGradient%20id='m'%20gradientTransform='rotate(90%20.5%20.5)'%3e%3cstop%20offset='0'%20stop-color='%23cfe6ff'/%3e%3cstop%20offset='.35'%20stop-color='%234a9bff'/%3e%3cstop%20offset='.55'%20stop-color='%23163f8f'/%3e%3cstop%20offset='.75'%20stop-color='%234a9bff'/%3e%3cstop%20offset='1'%20stop-color='%23cfe6ff'/%3e%3c/linearGradient%3e%3clinearGradient%20id='m2'%20gradientTransform='rotate(0%20.5%20.5)'%3e%3cstop%20offset='0'%20stop-color='%23cfe6ff'/%3e%3cstop%20offset='.35'%20stop-color='%234a9bff'/%3e%3cstop%20offset='.55'%20stop-color='%23163f8f'/%3e%3cstop%20offset='.75'%20stop-color='%234a9bff'/%3e%3cstop%20offset='1'%20stop-color='%23cfe6ff'/%3e%3c/linearGradient%3e%3clinearGradient%20id='panel'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%230b0d1c'%20stop-opacity='0'/%3e%3cstop%20offset='.12'%20stop-color='%230b0d1c'%20stop-opacity='.72'/%3e%3cstop%20offset='1'%20stop-color='%2305060d'%20stop-opacity='.94'/%3e%3c/linearGradient%3e%3clinearGradient%20id='plate'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%23cfe6ff'/%3e%3cstop%20offset='1'%20stop-color='%234a9bff'/%3e%3c/linearGradient%3e%3cfilter%20id='glow'%20x='-10%25'%20y='-10%25'%20width='120%25'%20height='120%25'%3e%3cfeGaussianBlur%20stdDeviation='6'/%3e%3c/filter%3e%3cmask%20id='hole'%3e%3crect%20width='630'%20height='880'%20fill='%23fff'/%3e%3crect%20x='26'%20y='26'%20width='578'%20height='828'%20rx='5'%20fill='%23000'/%3e%3c/mask%3e%3c/defs%3e%3c!--%20外の枠(光)%20--%3e%3crect%20x='10'%20y='10'%20width='610'%20height='860'%20rx='8'%20fill='none'%20stroke='rgba(90,170,255,.6)'%20stroke-width='16'%20filter='url(%23glow)'/%3e%3c!--%20外の枠(金属)%20--%3e%3crect%20width='630'%20height='880'%20rx='12'%20fill='url(%23m)'%20mask='url(%23hole)'/%3e%3crect%20x='5'%20y='5'%20width='620'%20height='870'%20rx='9'%20fill='none'%20stroke='%23163f8f'%20stroke-width='2'%20opacity='.8'/%3e%3crect%20x='26'%20y='26'%20width='578'%20height='828'%20rx='5'%20fill='none'%20stroke='%23163f8f'%20stroke-width='3'/%3e%3crect%20x='33'%20y='33'%20width='564'%20height='814'%20rx='3'%20fill='none'%20stroke='url(%23m2)'%20stroke-width='2'%20opacity='.9'/%3e%3c!--%20下の欄(名前・説明・プレイスタイル)。文字はアプリが重ねる%20--%3e%3cpath%20d='M26%20560%20L604%20560%20L604%20849%20Q604%20854%20599%20854%20L31%20854%20Q26%20854%2026%20849%20Z'%20fill='url(%23panel)'/%3e%3cpath%20d='M60%20694%20L570%20694'%20stroke='url(%23m2)'%20stroke-width='2.5'/%3e%3cpath%20d='M297%20694%20l18%20-9%20l18%209%20l-18%209%20Z'%20fill='url(%23m)'%20stroke='%23163f8f'%20stroke-width='1.5'/%3e%3crect%20x='96'%20y='772'%20width='438'%20height='34'%20rx='17'%20fill='%23000'%20fill-opacity='.45'%20stroke='url(%23m2)'%20stroke-width='1.5'/%3e%3crect%20x='96'%20y='812'%20width='438'%20height='34'%20rx='17'%20fill='%23000'%20fill-opacity='.45'%20stroke='url(%23m2)'%20stroke-width='1.5'/%3e%3c!--%20上の帯(店の名前。2段)%20--%3e%3cpath%20d='M150%2030%20L432%2030%20L414%2076%20L150%2076%20Z'%20fill='url(%23plate)'%20stroke='url(%23m)'%20stroke-width='4'/%3e%3cpath%20d='M150%2076%20L414%2076%20L402%20106%20L150%20106%20Z'%20fill='%230c0d18'%20fill-opacity='.9'%20stroke='url(%23m)'%20stroke-width='3'/%3e%3c!--%20角の飾り%20--%3e%3cg%20stroke='url(%23m)'%20opacity='.95'%3e%3cg%20transform='translate(26%20854)%20scale(1%20-1)'%3e%3cpath%20d='M8%2070%20C8%2034%2034%208%2070%208%20M8%20110%20C14%2070%2030%2044%2058%2030%20C44%2046%2040%2062%2046%2076%20C30%2070%2022%2084%2028%2096%20M110%208%20C70%2014%2044%2030%2030%2058%20C46%2044%2062%2040%2076%2046%20C70%2030%2084%2022%2096%2028'%20fill='none'%20stroke-width='4'%20stroke-linecap='round'/%3e%3c/g%3e%3cg%20transform='translate(604%20854)%20scale(-1%20-1)'%3e%3cpath%20d='M8%2070%20C8%2034%2034%208%2070%208%20M8%20110%20C14%2070%2030%2044%2058%2030%20C44%2046%2040%2062%2046%2076%20C30%2070%2022%2084%2028%2096%20M110%208%20C70%2014%2044%2030%2030%2058%20C46%2044%2062%2040%2076%2046%20C70%2030%2084%2022%2096%2028'%20fill='none'%20stroke-width='4'%20stroke-linecap='round'/%3e%3c/g%3e%3cg%20transform='translate(604%2026)%20scale(-1%201)'%3e%3cpath%20d='%20M8%20110%20C14%2070%2030%2044%2058%2030%20C44%2046%2040%2062%2046%2076%20C30%2070%2022%2084%2028%2096%20M110%208%20C70%2014%2044%2030%2030%2058%20C46%2044%2062%2040%2076%2046%20C70%2030%2084%2022%2096%2028'%20fill='none'%20stroke-width='4'%20stroke-linecap='round'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Nu="/-stack-poker-test-web/gacha-chest-v1/assets/frame-r-DtYFGJrR.webp",ku="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20630%20880'%20width='630'%20height='880'%3e%3cdefs%3e%3clinearGradient%20id='m'%20gradientTransform='rotate(90%20.5%20.5)'%3e%3cstop%20offset='0'%20stop-color='%23ffffff'/%3e%3cstop%20offset='.35'%20stop-color='%23c4ccd8'/%3e%3cstop%20offset='.55'%20stop-color='%235d6676'/%3e%3cstop%20offset='.75'%20stop-color='%23c4ccd8'/%3e%3cstop%20offset='1'%20stop-color='%23ffffff'/%3e%3c/linearGradient%3e%3clinearGradient%20id='m2'%20gradientTransform='rotate(0%20.5%20.5)'%3e%3cstop%20offset='0'%20stop-color='%23ffffff'/%3e%3cstop%20offset='.35'%20stop-color='%23c4ccd8'/%3e%3cstop%20offset='.55'%20stop-color='%235d6676'/%3e%3cstop%20offset='.75'%20stop-color='%23c4ccd8'/%3e%3cstop%20offset='1'%20stop-color='%23ffffff'/%3e%3c/linearGradient%3e%3clinearGradient%20id='panel'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%230b0d1c'%20stop-opacity='0'/%3e%3cstop%20offset='.12'%20stop-color='%230b0d1c'%20stop-opacity='.72'/%3e%3cstop%20offset='1'%20stop-color='%2305060d'%20stop-opacity='.94'/%3e%3c/linearGradient%3e%3clinearGradient%20id='plate'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%23ffffff'/%3e%3cstop%20offset='1'%20stop-color='%23c4ccd8'/%3e%3c/linearGradient%3e%3cfilter%20id='glow'%20x='-10%25'%20y='-10%25'%20width='120%25'%20height='120%25'%3e%3cfeGaussianBlur%20stdDeviation='6'/%3e%3c/filter%3e%3cmask%20id='hole'%3e%3crect%20width='630'%20height='880'%20fill='%23fff'/%3e%3crect%20x='26'%20y='26'%20width='578'%20height='828'%20rx='5'%20fill='%23000'/%3e%3c/mask%3e%3c/defs%3e%3c!--%20外の枠(光)%20--%3e%3crect%20x='10'%20y='10'%20width='610'%20height='860'%20rx='8'%20fill='none'%20stroke='rgba(220,230,245,.65)'%20stroke-width='16'%20filter='url(%23glow)'/%3e%3c!--%20外の枠(金属)%20--%3e%3crect%20width='630'%20height='880'%20rx='12'%20fill='url(%23m)'%20mask='url(%23hole)'/%3e%3crect%20x='5'%20y='5'%20width='620'%20height='870'%20rx='9'%20fill='none'%20stroke='%235d6676'%20stroke-width='2'%20opacity='.8'/%3e%3crect%20x='26'%20y='26'%20width='578'%20height='828'%20rx='5'%20fill='none'%20stroke='%235d6676'%20stroke-width='3'/%3e%3crect%20x='33'%20y='33'%20width='564'%20height='814'%20rx='3'%20fill='none'%20stroke='url(%23m2)'%20stroke-width='2'%20opacity='.9'/%3e%3c!--%20下の欄(名前・説明・プレイスタイル)。文字はアプリが重ねる%20--%3e%3cpath%20d='M26%20560%20L604%20560%20L604%20849%20Q604%20854%20599%20854%20L31%20854%20Q26%20854%2026%20849%20Z'%20fill='url(%23panel)'/%3e%3cpath%20d='M60%20694%20L570%20694'%20stroke='url(%23m2)'%20stroke-width='2.5'/%3e%3cpath%20d='M297%20694%20l18%20-9%20l18%209%20l-18%209%20Z'%20fill='url(%23m)'%20stroke='%235d6676'%20stroke-width='1.5'/%3e%3crect%20x='96'%20y='772'%20width='438'%20height='34'%20rx='17'%20fill='%23000'%20fill-opacity='.45'%20stroke='url(%23m2)'%20stroke-width='1.5'/%3e%3crect%20x='96'%20y='812'%20width='438'%20height='34'%20rx='17'%20fill='%23000'%20fill-opacity='.45'%20stroke='url(%23m2)'%20stroke-width='1.5'/%3e%3c!--%20上の帯(店の名前。2段)%20--%3e%3cpath%20d='M150%2030%20L432%2030%20L414%2076%20L150%2076%20Z'%20fill='url(%23plate)'%20stroke='url(%23m)'%20stroke-width='4'/%3e%3cpath%20d='M150%2076%20L414%2076%20L402%20106%20L150%20106%20Z'%20fill='%230c0d18'%20fill-opacity='.9'%20stroke='url(%23m)'%20stroke-width='3'/%3e%3c!--%20角の飾り%20--%3e%3cg%20stroke='url(%23m)'%20opacity='.95'%3e%3cg%20transform='translate(26%20854)%20scale(1%20-1)'%3e%3cpath%20d='M8%2070%20C8%2034%2034%208%2070%208%20M8%20110%20C14%2070%2030%2044%2058%2030%20C44%2046%2040%2062%2046%2076%20C30%2070%2022%2084%2028%2096%20M110%208%20C70%2014%2044%2030%2030%2058%20C46%2044%2062%2040%2076%2046%20C70%2030%2084%2022%2096%2028'%20fill='none'%20stroke-width='4'%20stroke-linecap='round'/%3e%3c/g%3e%3cg%20transform='translate(604%20854)%20scale(-1%20-1)'%3e%3cpath%20d='M8%2070%20C8%2034%2034%208%2070%208%20M8%20110%20C14%2070%2030%2044%2058%2030%20C44%2046%2040%2062%2046%2076%20C30%2070%2022%2084%2028%2096%20M110%208%20C70%2014%2044%2030%2030%2058%20C46%2044%2062%2040%2076%2046%20C70%2030%2084%2022%2096%2028'%20fill='none'%20stroke-width='4'%20stroke-linecap='round'/%3e%3c/g%3e%3cg%20transform='translate(604%2026)%20scale(-1%201)'%3e%3cpath%20d='%20M8%20110%20C14%2070%2030%2044%2058%2030%20C44%2046%2040%2062%2046%2076%20C30%2070%2022%2084%2028%2096%20M110%208%20C70%2014%2044%2030%2030%2058%20C46%2044%2062%2040%2076%2046%20C70%2030%2084%2022%2096%2028'%20fill='none'%20stroke-width='4'%20stroke-linecap='round'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Cu="/-stack-poker-test-web/gacha-chest-v1/assets/frame-s-D1KhkND6.webp",Su="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20630%20880'%20width='630'%20height='880'%3e%3cdefs%3e%3clinearGradient%20id='m'%20gradientTransform='rotate(90%20.5%20.5)'%3e%3cstop%20offset='0'%20stop-color='%23fff4c2'/%3e%3cstop%20offset='.35'%20stop-color='%23e7b54a'/%3e%3cstop%20offset='.55'%20stop-color='%237a5413'/%3e%3cstop%20offset='.75'%20stop-color='%23e7b54a'/%3e%3cstop%20offset='1'%20stop-color='%23fff4c2'/%3e%3c/linearGradient%3e%3clinearGradient%20id='m2'%20gradientTransform='rotate(0%20.5%20.5)'%3e%3cstop%20offset='0'%20stop-color='%23fff4c2'/%3e%3cstop%20offset='.35'%20stop-color='%23e7b54a'/%3e%3cstop%20offset='.55'%20stop-color='%237a5413'/%3e%3cstop%20offset='.75'%20stop-color='%23e7b54a'/%3e%3cstop%20offset='1'%20stop-color='%23fff4c2'/%3e%3c/linearGradient%3e%3clinearGradient%20id='panel'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%230b0d1c'%20stop-opacity='0'/%3e%3cstop%20offset='.12'%20stop-color='%230b0d1c'%20stop-opacity='.72'/%3e%3cstop%20offset='1'%20stop-color='%2305060d'%20stop-opacity='.94'/%3e%3c/linearGradient%3e%3clinearGradient%20id='plate'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%23fff4c2'/%3e%3cstop%20offset='1'%20stop-color='%23e7b54a'/%3e%3c/linearGradient%3e%3cfilter%20id='glow'%20x='-10%25'%20y='-10%25'%20width='120%25'%20height='120%25'%3e%3cfeGaussianBlur%20stdDeviation='6'/%3e%3c/filter%3e%3cmask%20id='hole'%3e%3crect%20width='630'%20height='880'%20fill='%23fff'/%3e%3crect%20x='26'%20y='26'%20width='578'%20height='828'%20rx='5'%20fill='%23000'/%3e%3c/mask%3e%3c/defs%3e%3c!--%20外の枠(光)%20--%3e%3crect%20x='10'%20y='10'%20width='610'%20height='860'%20rx='8'%20fill='none'%20stroke='rgba(255,200,80,.7)'%20stroke-width='16'%20filter='url(%23glow)'/%3e%3c!--%20外の枠(金属)%20--%3e%3crect%20width='630'%20height='880'%20rx='12'%20fill='url(%23m)'%20mask='url(%23hole)'/%3e%3crect%20x='5'%20y='5'%20width='620'%20height='870'%20rx='9'%20fill='none'%20stroke='%237a5413'%20stroke-width='2'%20opacity='.8'/%3e%3crect%20x='26'%20y='26'%20width='578'%20height='828'%20rx='5'%20fill='none'%20stroke='%237a5413'%20stroke-width='3'/%3e%3crect%20x='33'%20y='33'%20width='564'%20height='814'%20rx='3'%20fill='none'%20stroke='url(%23m2)'%20stroke-width='2'%20opacity='.9'/%3e%3c!--%20下の欄(名前・説明・プレイスタイル)。文字はアプリが重ねる%20--%3e%3cpath%20d='M26%20560%20L604%20560%20L604%20849%20Q604%20854%20599%20854%20L31%20854%20Q26%20854%2026%20849%20Z'%20fill='url(%23panel)'/%3e%3cpath%20d='M60%20694%20L570%20694'%20stroke='url(%23m2)'%20stroke-width='2.5'/%3e%3cpath%20d='M297%20694%20l18%20-9%20l18%209%20l-18%209%20Z'%20fill='url(%23m)'%20stroke='%237a5413'%20stroke-width='1.5'/%3e%3crect%20x='96'%20y='772'%20width='438'%20height='34'%20rx='17'%20fill='%23000'%20fill-opacity='.45'%20stroke='url(%23m2)'%20stroke-width='1.5'/%3e%3crect%20x='96'%20y='812'%20width='438'%20height='34'%20rx='17'%20fill='%23000'%20fill-opacity='.45'%20stroke='url(%23m2)'%20stroke-width='1.5'/%3e%3c!--%20上の帯(店の名前。2段)%20--%3e%3cpath%20d='M150%2030%20L432%2030%20L414%2076%20L150%2076%20Z'%20fill='url(%23plate)'%20stroke='url(%23m)'%20stroke-width='4'/%3e%3cpath%20d='M150%2076%20L414%2076%20L402%20106%20L150%20106%20Z'%20fill='%230c0d18'%20fill-opacity='.9'%20stroke='url(%23m)'%20stroke-width='3'/%3e%3c!--%20角の飾り%20--%3e%3cg%20stroke='url(%23m)'%20opacity='.95'%3e%3cg%20transform='translate(26%20854)%20scale(1%20-1)'%3e%3cpath%20d='M8%2070%20C8%2034%2034%208%2070%208%20M8%20110%20C14%2070%2030%2044%2058%2030%20C44%2046%2040%2062%2046%2076%20C30%2070%2022%2084%2028%2096%20M110%208%20C70%2014%2044%2030%2030%2058%20C46%2044%2062%2040%2076%2046%20C70%2030%2084%2022%2096%2028'%20fill='none'%20stroke-width='4'%20stroke-linecap='round'/%3e%3c/g%3e%3cg%20transform='translate(604%20854)%20scale(-1%20-1)'%3e%3cpath%20d='M8%2070%20C8%2034%2034%208%2070%208%20M8%20110%20C14%2070%2030%2044%2058%2030%20C44%2046%2040%2062%2046%2076%20C30%2070%2022%2084%2028%2096%20M110%208%20C70%2014%2044%2030%2030%2058%20C46%2044%2062%2040%2076%2046%20C70%2030%2084%2022%2096%2028'%20fill='none'%20stroke-width='4'%20stroke-linecap='round'/%3e%3c/g%3e%3cg%20transform='translate(604%2026)%20scale(-1%201)'%3e%3cpath%20d='%20M8%20110%20C14%2070%2030%2044%2058%2030%20C44%2046%2040%2062%2046%2076%20C30%2070%2022%2084%2028%2096%20M110%208%20C70%2014%2044%2030%2030%2058%20C46%2044%2062%2040%2076%2046%20C70%2030%2084%2022%2096%2028'%20fill='none'%20stroke-width='4'%20stroke-linecap='round'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Au="/-stack-poker-test-web/gacha-chest-v1/assets/frame-ss-FPYptorT.webp",Pu="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20630%20880'%20width='630'%20height='880'%3e%3cdefs%3e%3clinearGradient%20id='m'%20gradientTransform='rotate(45%20.5%20.5)'%3e%3cstop%20offset='0%25'%20stop-color='%23ff5a5a'/%3e%3cstop%20offset='14.285714285714285%25'%20stop-color='%23ffb03c'/%3e%3cstop%20offset='28.57142857142857%25'%20stop-color='%23ffe95a'/%3e%3cstop%20offset='42.857142857142854%25'%20stop-color='%235ee08a'/%3e%3cstop%20offset='57.14285714285714%25'%20stop-color='%234fd2ff'/%3e%3cstop%20offset='71.42857142857143%25'%20stop-color='%236b7bff'/%3e%3cstop%20offset='85.71428571428571%25'%20stop-color='%23c77dff'/%3e%3cstop%20offset='100%25'%20stop-color='%23ff5a9e'/%3e%3c/linearGradient%3e%3clinearGradient%20id='m2'%20gradientTransform='rotate(-45%20.5%20.5)'%3e%3cstop%20offset='0%25'%20stop-color='%23ff5a5a'/%3e%3cstop%20offset='14.285714285714285%25'%20stop-color='%23ffb03c'/%3e%3cstop%20offset='28.57142857142857%25'%20stop-color='%23ffe95a'/%3e%3cstop%20offset='42.857142857142854%25'%20stop-color='%235ee08a'/%3e%3cstop%20offset='57.14285714285714%25'%20stop-color='%234fd2ff'/%3e%3cstop%20offset='71.42857142857143%25'%20stop-color='%236b7bff'/%3e%3cstop%20offset='85.71428571428571%25'%20stop-color='%23c77dff'/%3e%3cstop%20offset='100%25'%20stop-color='%23ff5a9e'/%3e%3c/linearGradient%3e%3clinearGradient%20id='panel'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%230b0d1c'%20stop-opacity='0'/%3e%3cstop%20offset='.12'%20stop-color='%230b0d1c'%20stop-opacity='.72'/%3e%3cstop%20offset='1'%20stop-color='%2305060d'%20stop-opacity='.94'/%3e%3c/linearGradient%3e%3clinearGradient%20id='plate'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%23fff6ff'/%3e%3cstop%20offset='1'%20stop-color='%23e8d8ff'/%3e%3c/linearGradient%3e%3cfilter%20id='glow'%20x='-10%25'%20y='-10%25'%20width='120%25'%20height='120%25'%3e%3cfeGaussianBlur%20stdDeviation='6'/%3e%3c/filter%3e%3cmask%20id='hole'%3e%3crect%20width='630'%20height='880'%20fill='%23fff'/%3e%3crect%20x='26'%20y='26'%20width='578'%20height='828'%20rx='5'%20fill='%23000'/%3e%3c/mask%3e%3c/defs%3e%3c!--%20外の枠(光)%20--%3e%3crect%20x='10'%20y='10'%20width='610'%20height='860'%20rx='8'%20fill='none'%20stroke='rgba(255,160,240,.7)'%20stroke-width='16'%20filter='url(%23glow)'/%3e%3c!--%20外の枠(金属)%20--%3e%3crect%20width='630'%20height='880'%20rx='12'%20fill='url(%23m)'%20mask='url(%23hole)'/%3e%3crect%20x='5'%20y='5'%20width='620'%20height='870'%20rx='9'%20fill='none'%20stroke='%233b2a6b'%20stroke-width='2'%20opacity='.8'/%3e%3crect%20x='26'%20y='26'%20width='578'%20height='828'%20rx='5'%20fill='none'%20stroke='%233b2a6b'%20stroke-width='3'/%3e%3crect%20x='33'%20y='33'%20width='564'%20height='814'%20rx='3'%20fill='none'%20stroke='url(%23m2)'%20stroke-width='2'%20opacity='.9'/%3e%3c!--%20下の欄(名前・説明・プレイスタイル)。文字はアプリが重ねる%20--%3e%3cpath%20d='M26%20560%20L604%20560%20L604%20849%20Q604%20854%20599%20854%20L31%20854%20Q26%20854%2026%20849%20Z'%20fill='url(%23panel)'/%3e%3cpath%20d='M60%20694%20L570%20694'%20stroke='url(%23m2)'%20stroke-width='2.5'/%3e%3cpath%20d='M297%20694%20l18%20-9%20l18%209%20l-18%209%20Z'%20fill='url(%23m)'%20stroke='%233b2a6b'%20stroke-width='1.5'/%3e%3crect%20x='96'%20y='772'%20width='438'%20height='34'%20rx='17'%20fill='%23000'%20fill-opacity='.45'%20stroke='url(%23m2)'%20stroke-width='1.5'/%3e%3crect%20x='96'%20y='812'%20width='438'%20height='34'%20rx='17'%20fill='%23000'%20fill-opacity='.45'%20stroke='url(%23m2)'%20stroke-width='1.5'/%3e%3c!--%20上の帯(店の名前。2段)%20--%3e%3cpath%20d='M150%2030%20L432%2030%20L414%2076%20L150%2076%20Z'%20fill='url(%23plate)'%20stroke='url(%23m)'%20stroke-width='4'/%3e%3cpath%20d='M150%2076%20L414%2076%20L402%20106%20L150%20106%20Z'%20fill='%230c0d18'%20fill-opacity='.9'%20stroke='url(%23m)'%20stroke-width='3'/%3e%3c!--%20角の飾り%20--%3e%3cg%20stroke='url(%23m)'%20opacity='.95'%3e%3cg%20transform='translate(26%20854)%20scale(1%20-1)'%3e%3cpath%20d='M8%2070%20C8%2034%2034%208%2070%208%20M8%20110%20C14%2070%2030%2044%2058%2030%20C44%2046%2040%2062%2046%2076%20C30%2070%2022%2084%2028%2096%20M110%208%20C70%2014%2044%2030%2030%2058%20C46%2044%2062%2040%2076%2046%20C70%2030%2084%2022%2096%2028'%20fill='none'%20stroke-width='4'%20stroke-linecap='round'/%3e%3c/g%3e%3cg%20transform='translate(604%20854)%20scale(-1%20-1)'%3e%3cpath%20d='M8%2070%20C8%2034%2034%208%2070%208%20M8%20110%20C14%2070%2030%2044%2058%2030%20C44%2046%2040%2062%2046%2076%20C30%2070%2022%2084%2028%2096%20M110%208%20C70%2014%2044%2030%2030%2058%20C46%2044%2062%2040%2076%2046%20C70%2030%2084%2022%2096%2028'%20fill='none'%20stroke-width='4'%20stroke-linecap='round'/%3e%3c/g%3e%3cg%20transform='translate(604%2026)%20scale(-1%201)'%3e%3cpath%20d='%20M8%20110%20C14%2070%2030%2044%2058%2030%20C44%2046%2040%2062%2046%2076%20C30%2070%2022%2084%2028%2096%20M110%208%20C70%2014%2044%2030%2030%2058%20C46%2044%2062%2040%2076%2046%20C70%2030%2084%2022%2096%2028'%20fill='none'%20stroke-width='4'%20stroke-linecap='round'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Du="/-stack-poker-test-web/gacha-chest-v1/assets/frame-u-keYf1zgp.webp",Bu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjkyIiBmaWxsPSIjMTUxNTFjIiBsZXR0ZXItc3BhY2luZz0iLTYiPjEwPC90ZXh0Pgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNiAxMTIpIHNjYWxlKC42OCkiIGZpbGw9IiMxNTE1MWMiPjxjaXJjbGUgY3g9IjUwIiBjeT0iMjciIHI9IjE5Ii8+PGNpcmNsZSBjeD0iMjciIGN5PSI1OCIgcj0iMTkiLz48Y2lyY2xlIGN4PSI3MyIgY3k9IjU4IiByPSIxOSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTIiIHI9IjEyIi8+PHBhdGggZD0iTTQ1IDU2IEM0NSA3NiA0MCA4OCAzMSA5NyBMNjkgOTcgQzYwIDg4IDU1IDc2IDU1IDU2IFoiLz48L2c+Cjwvc3ZnPg==",zu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjkyIiBmaWxsPSIjYzgxMDJlIiBsZXR0ZXItc3BhY2luZz0iLTYiPjEwPC90ZXh0Pgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNiAxMTIpIHNjYWxlKC42OCkiIGZpbGw9IiNjODEwMmUiPjxwYXRoIGQ9Ik01MCAzIEw4OCA1MCBMNTAgOTcgTDEyIDUwIFoiLz48L2c+Cjwvc3ZnPg==",Wu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjkyIiBmaWxsPSIjYzgxMDJlIiBsZXR0ZXItc3BhY2luZz0iLTYiPjEwPC90ZXh0Pgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNiAxMTIpIHNjYWxlKC42OCkiIGZpbGw9IiNjODEwMmUiPjxwYXRoIGQ9Ik01MCA5MiBDMjAgNjggNCA1MCA0IDMxIEM0IDE1IDE2IDUgMzAgNSBDNDAgNSA0NyAxMSA1MCAxOSBDNTMgMTEgNjAgNSA3MCA1IEM4NCA1IDk2IDE1IDk2IDMxIEM5NiA1MCA4MCA2OCA1MCA5MiBaIi8+PC9nPgo8L3N2Zz4=",Tu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjkyIiBmaWxsPSIjMTUxNTFjIiBsZXR0ZXItc3BhY2luZz0iLTYiPjEwPC90ZXh0Pgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNiAxMTIpIHNjYWxlKC42OCkiIGZpbGw9IiMxNTE1MWMiPjxwYXRoIGQ9Ik01MCA0IEM3OCAzMCA5NSA0NCA5NSA2MCBDOTUgNzQgODQgODIgNzIgODIgQzYzIDgyIDU2IDc4IDUzIDcyIEM1NCA4MiA1OCA5MCA2NiA5NyBMMzQgOTcgQzQyIDkwIDQ2IDgyIDQ3IDcyIEM0NCA3OCAzNyA4MiAyOCA4MiBDMTYgODIgNSA3NCA1IDYwIEM1IDQ0IDIyIDMwIDUwIDQgWiIvPjwvZz4KPC9zdmc+",Eu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPjI8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PGNpcmNsZSBjeD0iNTAiIGN5PSIyNyIgcj0iMTkiLz48Y2lyY2xlIGN4PSIyNyIgY3k9IjU4IiByPSIxOSIvPjxjaXJjbGUgY3g9IjczIiBjeT0iNTgiIHI9IjE5Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MiIgcj0iMTIiLz48cGF0aCBkPSJNNDUgNTYgQzQ1IDc2IDQwIDg4IDMxIDk3IEw2OSA5NyBDNjAgODggNTUgNzYgNTUgNTYgWiIvPjwvZz4KPC9zdmc+",Ru="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPjI8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDMgTDg4IDUwIEw1MCA5NyBMMTIgNTAgWiIvPjwvZz4KPC9zdmc+",Yu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPjI8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDkyIEMyMCA2OCA0IDUwIDQgMzEgQzQgMTUgMTYgNSAzMCA1IEM0MCA1IDQ3IDExIDUwIDE5IEM1MyAxMSA2MCA1IDcwIDUgQzg0IDUgOTYgMTUgOTYgMzEgQzk2IDUwIDgwIDY4IDUwIDkyIFoiLz48L2c+Cjwvc3ZnPg==",Hu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPjI8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PHBhdGggZD0iTTUwIDQgQzc4IDMwIDk1IDQ0IDk1IDYwIEM5NSA3NCA4NCA4MiA3MiA4MiBDNjMgODIgNTYgNzggNTMgNzIgQzU0IDgyIDU4IDkwIDY2IDk3IEwzNCA5NyBDNDIgOTAgNDYgODIgNDcgNzIgQzQ0IDc4IDM3IDgyIDI4IDgyIEMxNiA4MiA1IDc0IDUgNjAgQzUgNDQgMjIgMzAgNTAgNCBaIi8+PC9nPgo8L3N2Zz4=",_u="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPjM8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PGNpcmNsZSBjeD0iNTAiIGN5PSIyNyIgcj0iMTkiLz48Y2lyY2xlIGN4PSIyNyIgY3k9IjU4IiByPSIxOSIvPjxjaXJjbGUgY3g9IjczIiBjeT0iNTgiIHI9IjE5Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MiIgcj0iMTIiLz48cGF0aCBkPSJNNDUgNTYgQzQ1IDc2IDQwIDg4IDMxIDk3IEw2OSA5NyBDNjAgODggNTUgNzYgNTUgNTYgWiIvPjwvZz4KPC9zdmc+",Gu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPjM8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDMgTDg4IDUwIEw1MCA5NyBMMTIgNTAgWiIvPjwvZz4KPC9zdmc+",Lu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPjM8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDkyIEMyMCA2OCA0IDUwIDQgMzEgQzQgMTUgMTYgNSAzMCA1IEM0MCA1IDQ3IDExIDUwIDE5IEM1MyAxMSA2MCA1IDcwIDUgQzg0IDUgOTYgMTUgOTYgMzEgQzk2IDUwIDgwIDY4IDUwIDkyIFoiLz48L2c+Cjwvc3ZnPg==",Ju="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPjM8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PHBhdGggZD0iTTUwIDQgQzc4IDMwIDk1IDQ0IDk1IDYwIEM5NSA3NCA4NCA4MiA3MiA4MiBDNjMgODIgNTYgNzggNTMgNzIgQzU0IDgyIDU4IDkwIDY2IDk3IEwzNCA5NyBDNDIgOTAgNDYgODIgNDcgNzIgQzQ0IDc4IDM3IDgyIDI4IDgyIEMxNiA4MiA1IDc0IDUgNjAgQzUgNDQgMjIgMzAgNTAgNCBaIi8+PC9nPgo8L3N2Zz4=",Uu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPjQ8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PGNpcmNsZSBjeD0iNTAiIGN5PSIyNyIgcj0iMTkiLz48Y2lyY2xlIGN4PSIyNyIgY3k9IjU4IiByPSIxOSIvPjxjaXJjbGUgY3g9IjczIiBjeT0iNTgiIHI9IjE5Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MiIgcj0iMTIiLz48cGF0aCBkPSJNNDUgNTYgQzQ1IDc2IDQwIDg4IDMxIDk3IEw2OSA5NyBDNjAgODggNTUgNzYgNTUgNTYgWiIvPjwvZz4KPC9zdmc+",Fu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPjQ8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDMgTDg4IDUwIEw1MCA5NyBMMTIgNTAgWiIvPjwvZz4KPC9zdmc+",Xu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPjQ8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDkyIEMyMCA2OCA0IDUwIDQgMzEgQzQgMTUgMTYgNSAzMCA1IEM0MCA1IDQ3IDExIDUwIDE5IEM1MyAxMSA2MCA1IDcwIDUgQzg0IDUgOTYgMTUgOTYgMzEgQzk2IDUwIDgwIDY4IDUwIDkyIFoiLz48L2c+Cjwvc3ZnPg==",Qu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPjQ8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PHBhdGggZD0iTTUwIDQgQzc4IDMwIDk1IDQ0IDk1IDYwIEM5NSA3NCA4NCA4MiA3MiA4MiBDNjMgODIgNTYgNzggNTMgNzIgQzU0IDgyIDU4IDkwIDY2IDk3IEwzNCA5NyBDNDIgOTAgNDYgODIgNDcgNzIgQzQ0IDc4IDM3IDgyIDI4IDgyIEMxNiA4MiA1IDc0IDUgNjAgQzUgNDQgMjIgMzAgNTAgNCBaIi8+PC9nPgo8L3N2Zz4=",Ou="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPjU8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PGNpcmNsZSBjeD0iNTAiIGN5PSIyNyIgcj0iMTkiLz48Y2lyY2xlIGN4PSIyNyIgY3k9IjU4IiByPSIxOSIvPjxjaXJjbGUgY3g9IjczIiBjeT0iNTgiIHI9IjE5Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MiIgcj0iMTIiLz48cGF0aCBkPSJNNDUgNTYgQzQ1IDc2IDQwIDg4IDMxIDk3IEw2OSA5NyBDNjAgODggNTUgNzYgNTUgNTYgWiIvPjwvZz4KPC9zdmc+",Vu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPjU8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDMgTDg4IDUwIEw1MCA5NyBMMTIgNTAgWiIvPjwvZz4KPC9zdmc+",Ku="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPjU8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDkyIEMyMCA2OCA0IDUwIDQgMzEgQzQgMTUgMTYgNSAzMCA1IEM0MCA1IDQ3IDExIDUwIDE5IEM1MyAxMSA2MCA1IDcwIDUgQzg0IDUgOTYgMTUgOTYgMzEgQzk2IDUwIDgwIDY4IDUwIDkyIFoiLz48L2c+Cjwvc3ZnPg==",$u="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPjU8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PHBhdGggZD0iTTUwIDQgQzc4IDMwIDk1IDQ0IDk1IDYwIEM5NSA3NCA4NCA4MiA3MiA4MiBDNjMgODIgNTYgNzggNTMgNzIgQzU0IDgyIDU4IDkwIDY2IDk3IEwzNCA5NyBDNDIgOTAgNDYgODIgNDcgNzIgQzQ0IDc4IDM3IDgyIDI4IDgyIEMxNiA4MiA1IDc0IDUgNjAgQzUgNDQgMjIgMzAgNTAgNCBaIi8+PC9nPgo8L3N2Zz4=",qu="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPjY8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PGNpcmNsZSBjeD0iNTAiIGN5PSIyNyIgcj0iMTkiLz48Y2lyY2xlIGN4PSIyNyIgY3k9IjU4IiByPSIxOSIvPjxjaXJjbGUgY3g9IjczIiBjeT0iNTgiIHI9IjE5Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MiIgcj0iMTIiLz48cGF0aCBkPSJNNDUgNTYgQzQ1IDc2IDQwIDg4IDMxIDk3IEw2OSA5NyBDNjAgODggNTUgNzYgNTUgNTYgWiIvPjwvZz4KPC9zdmc+",em="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPjY8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDMgTDg4IDUwIEw1MCA5NyBMMTIgNTAgWiIvPjwvZz4KPC9zdmc+",tm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPjY8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDkyIEMyMCA2OCA0IDUwIDQgMzEgQzQgMTUgMTYgNSAzMCA1IEM0MCA1IDQ3IDExIDUwIDE5IEM1MyAxMSA2MCA1IDcwIDUgQzg0IDUgOTYgMTUgOTYgMzEgQzk2IDUwIDgwIDY4IDUwIDkyIFoiLz48L2c+Cjwvc3ZnPg==",am="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPjY8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PHBhdGggZD0iTTUwIDQgQzc4IDMwIDk1IDQ0IDk1IDYwIEM5NSA3NCA4NCA4MiA3MiA4MiBDNjMgODIgNTYgNzggNTMgNzIgQzU0IDgyIDU4IDkwIDY2IDk3IEwzNCA5NyBDNDIgOTAgNDYgODIgNDcgNzIgQzQ0IDc4IDM3IDgyIDI4IDgyIEMxNiA4MiA1IDc0IDUgNjAgQzUgNDQgMjIgMzAgNTAgNCBaIi8+PC9nPgo8L3N2Zz4=",nm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPjc8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PGNpcmNsZSBjeD0iNTAiIGN5PSIyNyIgcj0iMTkiLz48Y2lyY2xlIGN4PSIyNyIgY3k9IjU4IiByPSIxOSIvPjxjaXJjbGUgY3g9IjczIiBjeT0iNTgiIHI9IjE5Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MiIgcj0iMTIiLz48cGF0aCBkPSJNNDUgNTYgQzQ1IDc2IDQwIDg4IDMxIDk3IEw2OSA5NyBDNjAgODggNTUgNzYgNTUgNTYgWiIvPjwvZz4KPC9zdmc+",rm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPjc8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDMgTDg4IDUwIEw1MCA5NyBMMTIgNTAgWiIvPjwvZz4KPC9zdmc+",im="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPjc8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDkyIEMyMCA2OCA0IDUwIDQgMzEgQzQgMTUgMTYgNSAzMCA1IEM0MCA1IDQ3IDExIDUwIDE5IEM1MyAxMSA2MCA1IDcwIDUgQzg0IDUgOTYgMTUgOTYgMzEgQzk2IDUwIDgwIDY4IDUwIDkyIFoiLz48L2c+Cjwvc3ZnPg==",sm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPjc8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PHBhdGggZD0iTTUwIDQgQzc4IDMwIDk1IDQ0IDk1IDYwIEM5NSA3NCA4NCA4MiA3MiA4MiBDNjMgODIgNTYgNzggNTMgNzIgQzU0IDgyIDU4IDkwIDY2IDk3IEwzNCA5NyBDNDIgOTAgNDYgODIgNDcgNzIgQzQ0IDc4IDM3IDgyIDI4IDgyIEMxNiA4MiA1IDc0IDUgNjAgQzUgNDQgMjIgMzAgNTAgNCBaIi8+PC9nPgo8L3N2Zz4=",cm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPjg8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PGNpcmNsZSBjeD0iNTAiIGN5PSIyNyIgcj0iMTkiLz48Y2lyY2xlIGN4PSIyNyIgY3k9IjU4IiByPSIxOSIvPjxjaXJjbGUgY3g9IjczIiBjeT0iNTgiIHI9IjE5Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MiIgcj0iMTIiLz48cGF0aCBkPSJNNDUgNTYgQzQ1IDc2IDQwIDg4IDMxIDk3IEw2OSA5NyBDNjAgODggNTUgNzYgNTUgNTYgWiIvPjwvZz4KPC9zdmc+",om="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPjg8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDMgTDg4IDUwIEw1MCA5NyBMMTIgNTAgWiIvPjwvZz4KPC9zdmc+",lm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPjg8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDkyIEMyMCA2OCA0IDUwIDQgMzEgQzQgMTUgMTYgNSAzMCA1IEM0MCA1IDQ3IDExIDUwIDE5IEM1MyAxMSA2MCA1IDcwIDUgQzg0IDUgOTYgMTUgOTYgMzEgQzk2IDUwIDgwIDY4IDUwIDkyIFoiLz48L2c+Cjwvc3ZnPg==",pm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPjg8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PHBhdGggZD0iTTUwIDQgQzc4IDMwIDk1IDQ0IDk1IDYwIEM5NSA3NCA4NCA4MiA3MiA4MiBDNjMgODIgNTYgNzggNTMgNzIgQzU0IDgyIDU4IDkwIDY2IDk3IEwzNCA5NyBDNDIgOTAgNDYgODIgNDcgNzIgQzQ0IDc4IDM3IDgyIDI4IDgyIEMxNiA4MiA1IDc0IDUgNjAgQzUgNDQgMjIgMzAgNTAgNCBaIi8+PC9nPgo8L3N2Zz4=",gm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPjk8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PGNpcmNsZSBjeD0iNTAiIGN5PSIyNyIgcj0iMTkiLz48Y2lyY2xlIGN4PSIyNyIgY3k9IjU4IiByPSIxOSIvPjxjaXJjbGUgY3g9IjczIiBjeT0iNTgiIHI9IjE5Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MiIgcj0iMTIiLz48cGF0aCBkPSJNNDUgNTYgQzQ1IDc2IDQwIDg4IDMxIDk3IEw2OSA5NyBDNjAgODggNTUgNzYgNTUgNTYgWiIvPjwvZz4KPC9zdmc+",dm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPjk8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDMgTDg4IDUwIEw1MCA5NyBMMTIgNTAgWiIvPjwvZz4KPC9zdmc+",um="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPjk8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDkyIEMyMCA2OCA0IDUwIDQgMzEgQzQgMTUgMTYgNSAzMCA1IEM0MCA1IDQ3IDExIDUwIDE5IEM1MyAxMSA2MCA1IDcwIDUgQzg0IDUgOTYgMTUgOTYgMzEgQzk2IDUwIDgwIDY4IDUwIDkyIFoiLz48L2c+Cjwvc3ZnPg==",mm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPjk8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PHBhdGggZD0iTTUwIDQgQzc4IDMwIDk1IDQ0IDk1IDYwIEM5NSA3NCA4NCA4MiA3MiA4MiBDNjMgODIgNTYgNzggNTMgNzIgQzU0IDgyIDU4IDkwIDY2IDk3IEwzNCA5NyBDNDIgOTAgNDYgODIgNDcgNzIgQzQ0IDc4IDM3IDgyIDI4IDgyIEMxNiA4MiA1IDc0IDUgNjAgQzUgNDQgMjIgMzAgNTAgNCBaIi8+PC9nPgo8L3N2Zz4=",fm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPkE8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PGNpcmNsZSBjeD0iNTAiIGN5PSIyNyIgcj0iMTkiLz48Y2lyY2xlIGN4PSIyNyIgY3k9IjU4IiByPSIxOSIvPjxjaXJjbGUgY3g9IjczIiBjeT0iNTgiIHI9IjE5Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MiIgcj0iMTIiLz48cGF0aCBkPSJNNDUgNTYgQzQ1IDc2IDQwIDg4IDMxIDk3IEw2OSA5NyBDNjAgODggNTUgNzYgNTUgNTYgWiIvPjwvZz4KPC9zdmc+",Im="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPkE8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDMgTDg4IDUwIEw1MCA5NyBMMTIgNTAgWiIvPjwvZz4KPC9zdmc+",hm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPkE8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDkyIEMyMCA2OCA0IDUwIDQgMzEgQzQgMTUgMTYgNSAzMCA1IEM0MCA1IDQ3IDExIDUwIDE5IEM1MyAxMSA2MCA1IDcwIDUgQzg0IDUgOTYgMTUgOTYgMzEgQzk2IDUwIDgwIDY4IDUwIDkyIFoiLz48L2c+Cjwvc3ZnPg==",bm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPkE8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PHBhdGggZD0iTTUwIDQgQzc4IDMwIDk1IDQ0IDk1IDYwIEM5NSA3NCA4NCA4MiA3MiA4MiBDNjMgODIgNTYgNzggNTMgNzIgQzU0IDgyIDU4IDkwIDY2IDk3IEwzNCA5NyBDNDIgOTAgNDYgODIgNDcgNzIgQzQ0IDc4IDM3IDgyIDI4IDgyIEMxNiA4MiA1IDc0IDUgNjAgQzUgNDQgMjIgMzAgNTAgNCBaIi8+PC9nPgo8L3N2Zz4=",jm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPko8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PGNpcmNsZSBjeD0iNTAiIGN5PSIyNyIgcj0iMTkiLz48Y2lyY2xlIGN4PSIyNyIgY3k9IjU4IiByPSIxOSIvPjxjaXJjbGUgY3g9IjczIiBjeT0iNTgiIHI9IjE5Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MiIgcj0iMTIiLz48cGF0aCBkPSJNNDUgNTYgQzQ1IDc2IDQwIDg4IDMxIDk3IEw2OSA5NyBDNjAgODggNTUgNzYgNTUgNTYgWiIvPjwvZz4KPC9zdmc+",vm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPko8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDMgTDg4IDUwIEw1MCA5NyBMMTIgNTAgWiIvPjwvZz4KPC9zdmc+",ym="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPko8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDkyIEMyMCA2OCA0IDUwIDQgMzEgQzQgMTUgMTYgNSAzMCA1IEM0MCA1IDQ3IDExIDUwIDE5IEM1MyAxMSA2MCA1IDcwIDUgQzg0IDUgOTYgMTUgOTYgMzEgQzk2IDUwIDgwIDY4IDUwIDkyIFoiLz48L2c+Cjwvc3ZnPg==",wm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPko8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PHBhdGggZD0iTTUwIDQgQzc4IDMwIDk1IDQ0IDk1IDYwIEM5NSA3NCA4NCA4MiA3MiA4MiBDNjMgODIgNTYgNzggNTMgNzIgQzU0IDgyIDU4IDkwIDY2IDk3IEwzNCA5NyBDNDIgOTAgNDYgODIgNDcgNzIgQzQ0IDc4IDM3IDgyIDI4IDgyIEMxNiA4MiA1IDc0IDUgNjAgQzUgNDQgMjIgMzAgNTAgNCBaIi8+PC9nPgo8L3N2Zz4=",Mm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPks8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PGNpcmNsZSBjeD0iNTAiIGN5PSIyNyIgcj0iMTkiLz48Y2lyY2xlIGN4PSIyNyIgY3k9IjU4IiByPSIxOSIvPjxjaXJjbGUgY3g9IjczIiBjeT0iNTgiIHI9IjE5Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MiIgcj0iMTIiLz48cGF0aCBkPSJNNDUgNTYgQzQ1IDc2IDQwIDg4IDMxIDk3IEw2OSA5NyBDNjAgODggNTUgNzYgNTUgNTYgWiIvPjwvZz4KPC9zdmc+",xm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPks8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDMgTDg4IDUwIEw1MCA5NyBMMTIgNTAgWiIvPjwvZz4KPC9zdmc+",Zm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPks8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDkyIEMyMCA2OCA0IDUwIDQgMzEgQzQgMTUgMTYgNSAzMCA1IEM0MCA1IDQ3IDExIDUwIDE5IEM1MyAxMSA2MCA1IDcwIDUgQzg0IDUgOTYgMTUgOTYgMzEgQzk2IDUwIDgwIDY4IDUwIDkyIFoiLz48L2c+Cjwvc3ZnPg==",Nm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPks8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PHBhdGggZD0iTTUwIDQgQzc4IDMwIDk1IDQ0IDk1IDYwIEM5NSA3NCA4NCA4MiA3MiA4MiBDNjMgODIgNTYgNzggNTMgNzIgQzU0IDgyIDU4IDkwIDY2IDk3IEwzNCA5NyBDNDIgOTAgNDYgODIgNDcgNzIgQzQ0IDc4IDM3IDgyIDI4IDgyIEMxNiA4MiA1IDc0IDUgNjAgQzUgNDQgMjIgMzAgNTAgNCBaIi8+PC9nPgo8L3N2Zz4=",km="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPlE8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PGNpcmNsZSBjeD0iNTAiIGN5PSIyNyIgcj0iMTkiLz48Y2lyY2xlIGN4PSIyNyIgY3k9IjU4IiByPSIxOSIvPjxjaXJjbGUgY3g9IjczIiBjeT0iNTgiIHI9IjE5Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MiIgcj0iMTIiLz48cGF0aCBkPSJNNDUgNTYgQzQ1IDc2IDQwIDg4IDMxIDk3IEw2OSA5NyBDNjAgODggNTUgNzYgNTUgNTYgWiIvPjwvZz4KPC9zdmc+",Cm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPlE8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDMgTDg4IDUwIEw1MCA5NyBMMTIgNTAgWiIvPjwvZz4KPC9zdmc+",Sm="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNjODEwMmUiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iI2M4MTAyZSIgPlE8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iI2M4MTAyZSI+PHBhdGggZD0iTTUwIDkyIEMyMCA2OCA0IDUwIDQgMzEgQzQgMTUgMTYgNSAzMCA1IEM0MCA1IDQ3IDExIDUwIDE5IEM1MyAxMSA2MCA1IDcwIDUgQzg0IDUgOTYgMTUgOTYgMzEgQzk2IDUwIDgwIDY4IDUwIDkyIFoiLz48L2c+Cjwvc3ZnPg==",Am="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMjIwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaXYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlOWUxY2MiLz48L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9ImdkIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWI4Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2M5OTUyZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZjFiOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPgo8cGF0aCBkPSJNNCA0IEwxMzYgNCBMMTM2IDE3MCBMNzAgMjE2IEw0IDE3MCBaIiBmaWxsPSJ1cmwoI2l2KSIgc3Ryb2tlPSJ1cmwoI2dkKSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNCBMMTI2IDE0IEwxMjYgMTY0IEw3MCAyMDMgTDE0IDE2NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTE1MWMiIHN0cm9rZS1vcGFjaXR5PSIuMTgiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI3MCIgeT0iMTA0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsICdMaWJlcmF0aW9uIFNlcmlmJywgJ0RlamFWdSBTZXJpZicsIHNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjExMiIgZmlsbD0iIzE1MTUxYyIgPlE8L3RleHQ+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2IDExMikgc2NhbGUoLjY4KSIgZmlsbD0iIzE1MTUxYyI+PHBhdGggZD0iTTUwIDQgQzc4IDMwIDk1IDQ0IDk1IDYwIEM5NSA3NCA4NCA4MiA3MiA4MiBDNjMgODIgNTYgNzggNTMgNzIgQzU0IDgyIDU4IDkwIDY2IDk3IEwzNCA5NyBDNDIgOTAgNDYgODIgNDcgNzIgQzQ0IDc4IDM3IDgyIDI4IDgyIEMxNiA4MiA1IDc0IDUgNjAgQzUgNDQgMjIgMzAgNTAgNCBaIi8+PC9nPgo8L3N2Zz4=",Pm="/-stack-poker-test-web/gacha-chest-v1/assets/01af-g-CNROIhe_.webp",Dm="/-stack-poker-test-web/gacha-chest-v1/assets/01af-n-BgHzBMXV.webp",Bm="/-stack-poker-test-web/gacha-chest-v1/assets/01af-r-B9GSLX1a.webp",zm="/-stack-poker-test-web/gacha-chest-v1/assets/01af-s-C1RS3JBp.webp",Wm="/-stack-poker-test-web/gacha-chest-v1/assets/01af-u-BmpFswZ0.webp",Tm="/-stack-poker-test-web/gacha-chest-v1/assets/01am-g-CaoH6yeK.webp",Em="/-stack-poker-test-web/gacha-chest-v1/assets/01am-n-pgPymsFq.webp",Rm="/-stack-poker-test-web/gacha-chest-v1/assets/01am-r-BgB8Ga9s.webp",Ym="/-stack-poker-test-web/gacha-chest-v1/assets/01am-s-CA2e8KGS.webp",Hm="/-stack-poker-test-web/gacha-chest-v1/assets/01am-u-i87AkR5m.webp",_m="/-stack-poker-test-web/gacha-chest-v1/assets/01bf-g-Dw1cAquV.webp",Gm="/-stack-poker-test-web/gacha-chest-v1/assets/01bf-n-B_cvgDW0.webp",Lm="/-stack-poker-test-web/gacha-chest-v1/assets/01bf-r-xnoqnY_1.webp",Jm="/-stack-poker-test-web/gacha-chest-v1/assets/01bf-s-DDSi1qr-.webp",Um="/-stack-poker-test-web/gacha-chest-v1/assets/01bf-u-CsDoCUcS.webp",Fm="/-stack-poker-test-web/gacha-chest-v1/assets/01bm-g-DNpLvRwb.webp",Xm="/-stack-poker-test-web/gacha-chest-v1/assets/01bm-n-B2q9Ftsh.webp",Qm="/-stack-poker-test-web/gacha-chest-v1/assets/01bm-r-Dc-tdmR-.webp",Om="/-stack-poker-test-web/gacha-chest-v1/assets/01bm-s-CQYIjAEB.webp",Vm="/-stack-poker-test-web/gacha-chest-v1/assets/01bm-u-CW4E2wnp.webp",Km="/-stack-poker-test-web/gacha-chest-v1/assets/02af-g-B2AmtbgY.webp",$m="/-stack-poker-test-web/gacha-chest-v1/assets/02af-n-YNPG4Bgp.webp",qm="/-stack-poker-test-web/gacha-chest-v1/assets/02af-r-BwFi5Tw5.webp",e2="/-stack-poker-test-web/gacha-chest-v1/assets/02af-s-BzQ-CTNn.webp",t2="/-stack-poker-test-web/gacha-chest-v1/assets/02af-u-DeLxwrIZ.webp",a2="/-stack-poker-test-web/gacha-chest-v1/assets/02am-g-BgPMsD-1.webp",n2="/-stack-poker-test-web/gacha-chest-v1/assets/02am-n-CWzzreQB.webp",r2="/-stack-poker-test-web/gacha-chest-v1/assets/02am-r-DXjutUx4.webp",i2="/-stack-poker-test-web/gacha-chest-v1/assets/02am-s-RqPFy0rB.webp",s2="/-stack-poker-test-web/gacha-chest-v1/assets/02am-u-caqhLF4o.webp",c2="/-stack-poker-test-web/gacha-chest-v1/assets/02bf-g-rfeLoMbE.webp",o2="/-stack-poker-test-web/gacha-chest-v1/assets/02bf-n-CUrt9SPt.webp",l2="/-stack-poker-test-web/gacha-chest-v1/assets/02bf-r-jHOz4-K3.webp",p2="/-stack-poker-test-web/gacha-chest-v1/assets/02bf-s-DbCV_bjs.webp",g2="/-stack-poker-test-web/gacha-chest-v1/assets/02bf-u-DNJVYllc.webp",d2="/-stack-poker-test-web/gacha-chest-v1/assets/02bm-g-Ca7lWw6K.webp",u2="/-stack-poker-test-web/gacha-chest-v1/assets/02bm-n-D5HrUJIW.webp",m2="/-stack-poker-test-web/gacha-chest-v1/assets/02bm-r-Dk70Zp7O.webp",f2="/-stack-poker-test-web/gacha-chest-v1/assets/02bm-s-8uFoIKaR.webp",I2="/-stack-poker-test-web/gacha-chest-v1/assets/02bm-u-Db3mxPUG.webp",h2="/-stack-poker-test-web/gacha-chest-v1/assets/03af-g-18pU7hed.webp",b2="/-stack-poker-test-web/gacha-chest-v1/assets/03af-n-B4x9A5ze.webp",j2="/-stack-poker-test-web/gacha-chest-v1/assets/03af-r-av71aZTR.webp",v2="/-stack-poker-test-web/gacha-chest-v1/assets/03af-s-D06WhKQo.webp",y2="/-stack-poker-test-web/gacha-chest-v1/assets/03af-u-DaUSOn_c.webp",w2="/-stack-poker-test-web/gacha-chest-v1/assets/03am-g-C2LG2Qs8.webp",M2="/-stack-poker-test-web/gacha-chest-v1/assets/03am-n-DRp3aEAJ.webp",x2="/-stack-poker-test-web/gacha-chest-v1/assets/03am-r-CGsTKJjq.webp",Z2="/-stack-poker-test-web/gacha-chest-v1/assets/03am-s-BmZ2CQRe.webp",N2="/-stack-poker-test-web/gacha-chest-v1/assets/03am-u-BWwoWJqw.webp",k2="/-stack-poker-test-web/gacha-chest-v1/assets/03bf-g-D8JcSpBg.webp",C2="/-stack-poker-test-web/gacha-chest-v1/assets/03bf-n-Bl3fGmCk.webp",S2="/-stack-poker-test-web/gacha-chest-v1/assets/03bf-r-DEbc2PQl.webp",A2="/-stack-poker-test-web/gacha-chest-v1/assets/03bf-s-CIr5BaCB.webp",P2="/-stack-poker-test-web/gacha-chest-v1/assets/03bf-u-C6APSKm4.webp",D2="/-stack-poker-test-web/gacha-chest-v1/assets/03bm-g-bW4XCybf.webp",B2="/-stack-poker-test-web/gacha-chest-v1/assets/03bm-n-DpQG0bHJ.webp",z2="/-stack-poker-test-web/gacha-chest-v1/assets/03bm-r-B_J9qBSA.webp",W2="/-stack-poker-test-web/gacha-chest-v1/assets/03bm-s-C5Gy9nwW.webp",T2="/-stack-poker-test-web/gacha-chest-v1/assets/03bm-u-D7VBsnX4.webp",E2="/-stack-poker-test-web/gacha-chest-v1/assets/04af-g-BeegbwEM.webp",R2="/-stack-poker-test-web/gacha-chest-v1/assets/04af-n-sdYAvrC6.webp",Y2="/-stack-poker-test-web/gacha-chest-v1/assets/04af-r-BL68oFVq.webp",H2="/-stack-poker-test-web/gacha-chest-v1/assets/04af-s-ChBPGJ42.webp",_2="/-stack-poker-test-web/gacha-chest-v1/assets/04af-u-cjqh7xoB.webp",G2="/-stack-poker-test-web/gacha-chest-v1/assets/06af-g-BQDGX7_W.webp",L2="/-stack-poker-test-web/gacha-chest-v1/assets/06af-n-C1GAI8nV.webp",J2="/-stack-poker-test-web/gacha-chest-v1/assets/06af-r-DMS8Hzvo.webp",U2="/-stack-poker-test-web/gacha-chest-v1/assets/06af-s-DeEi9Rx_.webp",F2="/-stack-poker-test-web/gacha-chest-v1/assets/06af-u-B83n0_E4.webp",X2="/-stack-poker-test-web/gacha-chest-v1/assets/06bf-g-CQut83pm.webp",Q2="/-stack-poker-test-web/gacha-chest-v1/assets/06bf-n-Lkp7Dmpg.webp",O2="/-stack-poker-test-web/gacha-chest-v1/assets/06bf-r-CrxgR18W.webp",V2="/-stack-poker-test-web/gacha-chest-v1/assets/06bf-s-B5284lJ_.webp",K2="/-stack-poker-test-web/gacha-chest-v1/assets/06bf-u-5IpaydKl.webp",$2="/-stack-poker-test-web/gacha-chest-v1/assets/06bm-g-YC6dnRqA.webp",q2="/-stack-poker-test-web/gacha-chest-v1/assets/06bm-n-BE8FbaPF.webp",ef="/-stack-poker-test-web/gacha-chest-v1/assets/06bm-r-DZ8hfGef.webp",tf="/-stack-poker-test-web/gacha-chest-v1/assets/06bm-s-CVqZ1JFl.webp",af="/-stack-poker-test-web/gacha-chest-v1/assets/06bm-u-BDI3cqdt.webp",nf="/-stack-poker-test-web/gacha-chest-v1/assets/07af-g-D_3tZi1J.webp",rf="/-stack-poker-test-web/gacha-chest-v1/assets/07af-n-DfesIjon.webp",sf="/-stack-poker-test-web/gacha-chest-v1/assets/07af-r-BwpUOZlE.webp",cf="/-stack-poker-test-web/gacha-chest-v1/assets/07af-s-fD4hO_MX.webp",of="/-stack-poker-test-web/gacha-chest-v1/assets/07af-u-CE7xsvBU.webp",lf="/-stack-poker-test-web/gacha-chest-v1/assets/07am-g-CP0v9cw5.webp",pf="/-stack-poker-test-web/gacha-chest-v1/assets/07am-n-BSzG9jdD.webp",gf="/-stack-poker-test-web/gacha-chest-v1/assets/07am-r-DDfMZY2z.webp",df="/-stack-poker-test-web/gacha-chest-v1/assets/07am-s-BpUeqkvD.webp",uf="/-stack-poker-test-web/gacha-chest-v1/assets/07am-u-4UtSmJPG.webp",mf="/-stack-poker-test-web/gacha-chest-v1/assets/07bf-g-Bm5cvZOp.webp",ff="/-stack-poker-test-web/gacha-chest-v1/assets/07bf-n-wJigm1H9.webp",If="/-stack-poker-test-web/gacha-chest-v1/assets/07bf-r-DZ2bEQJL.webp",hf="/-stack-poker-test-web/gacha-chest-v1/assets/07bf-s-ByhaMZgb.webp",bf="/-stack-poker-test-web/gacha-chest-v1/assets/07bf-u-BgN_4r88.webp",jf="/-stack-poker-test-web/gacha-chest-v1/assets/07bm-g-B48_GWuM.webp",vf="/-stack-poker-test-web/gacha-chest-v1/assets/07bm-n-DS0MAppv.webp",yf="/-stack-poker-test-web/gacha-chest-v1/assets/07bm-r-BU02Cqr4.webp",wf="/-stack-poker-test-web/gacha-chest-v1/assets/07bm-s-CW6CIdOX.webp",Mf="/-stack-poker-test-web/gacha-chest-v1/assets/07bm-u-lmTz3ZQr.webp",xf="/-stack-poker-test-web/gacha-chest-v1/assets/08af-g-C0NWJjJX.webp",Zf="/-stack-poker-test-web/gacha-chest-v1/assets/08af-n-Ctr3pJxF.webp",Nf="/-stack-poker-test-web/gacha-chest-v1/assets/08af-r-BhUYxael.webp",kf="/-stack-poker-test-web/gacha-chest-v1/assets/08af-s-Cffj6oIa.webp",Cf="/-stack-poker-test-web/gacha-chest-v1/assets/08af-u-FWirgdlz.webp",Sf="/-stack-poker-test-web/gacha-chest-v1/assets/08am-g-DOx6cZyg.webp",Af="/-stack-poker-test-web/gacha-chest-v1/assets/08am-n-C-KPE6ka.webp",Pf="/-stack-poker-test-web/gacha-chest-v1/assets/08am-r-u0B_S4Tr.webp",Df="/-stack-poker-test-web/gacha-chest-v1/assets/08am-s-DMQAxIzi.webp",Bf="/-stack-poker-test-web/gacha-chest-v1/assets/08am-u-B5fEwcNb.webp",zf="/-stack-poker-test-web/gacha-chest-v1/assets/08bf-g-CbNTd3vT.webp",Wf="/-stack-poker-test-web/gacha-chest-v1/assets/08bf-n-CeShH6kx.webp",Tf="/-stack-poker-test-web/gacha-chest-v1/assets/08bf-r-BNsA1dQ7.webp",Ef="/-stack-poker-test-web/gacha-chest-v1/assets/08bf-s-CHAk9-vz.webp",Rf="/-stack-poker-test-web/gacha-chest-v1/assets/08bf-u-C3Xkm1nW.webp",Yf="/-stack-poker-test-web/gacha-chest-v1/assets/08bm-g-Df4KKf5b.webp",Hf="/-stack-poker-test-web/gacha-chest-v1/assets/08bm-n-DdzSekbE.webp",_f="/-stack-poker-test-web/gacha-chest-v1/assets/08bm-r-yRuEbDRj.webp",Gf="/-stack-poker-test-web/gacha-chest-v1/assets/08bm-s-CqhNsKbK.webp",Lf="/-stack-poker-test-web/gacha-chest-v1/assets/08bm-u-BbHuo265.webp",Jf="/-stack-poker-test-web/gacha-chest-v1/assets/09af-g-DLk1ffnS.webp",Uf="/-stack-poker-test-web/gacha-chest-v1/assets/09af-n-BFn72PbC.webp",Ff="/-stack-poker-test-web/gacha-chest-v1/assets/09af-r-CXzhdZpu.webp",Xf="/-stack-poker-test-web/gacha-chest-v1/assets/09af-s-ChDHJ3oW.webp",Qf="/-stack-poker-test-web/gacha-chest-v1/assets/09af-u-CGeyue9G.webp",Of="/-stack-poker-test-web/gacha-chest-v1/assets/09am-g-p02-MZSE.webp",Vf="/-stack-poker-test-web/gacha-chest-v1/assets/09am-n-DjMcvMc-.webp",Kf="/-stack-poker-test-web/gacha-chest-v1/assets/09am-r-C-eyz3-H.webp",$f="/-stack-poker-test-web/gacha-chest-v1/assets/09am-s-C11nqflB.webp",qf="/-stack-poker-test-web/gacha-chest-v1/assets/09am-u-54jpvc-x.webp",eI="/-stack-poker-test-web/gacha-chest-v1/assets/09bm-g-CFuszygp.webp",tI="/-stack-poker-test-web/gacha-chest-v1/assets/09bm-n-C4Jnyryi.webp",aI="/-stack-poker-test-web/gacha-chest-v1/assets/09bm-r-CX3M3StV.webp",nI="/-stack-poker-test-web/gacha-chest-v1/assets/09bm-s-24PeVZul.webp",rI="/-stack-poker-test-web/gacha-chest-v1/assets/09bm-u-BpAzMffe.webp",iI={"01am":{desc:`松前藩の初代藩主。秀吉・家康と渡り合い、
蝦夷地の交易を任された交渉の名手。`},"01af":{desc:`源義経を想い、頼朝の前でも恋の歌で舞った
白拍子。静かな手で勝機を待つ。`},"01bm":{desc:`「少年よ、大志を抱け」と説いた教育者。
大志を胸に、大きなポットを狙い続ける。`},"01bf":{desc:`大黒屋光太夫に会い、日本へ使節を送った
ロシアの女帝。大胆な賭けで大国を動かす。`},"02am":{desc:`南部氏から独立し、津軽一国を切り取った
弘前藩の祖。奪ったポットは決して返さない。`},"02af":{desc:`徳川家康の養女として、津軽家に嫁いだ姫。
関ヶ原の屏風とともに、勝負の流れも運ぶ。`},"02bm":{desc:`秀吉に従って家を守り、盛岡城を築いた
南部家の当主。堅い守りでスタックを守る。`},"02bf":{desc:`神の声を聞き、オルレアンを救った乙女。
迷わず突き進む、恐れ知らずのオールイン。`},"03am":{desc:`平泉に黄金の都を築いた、奥州藤原氏の三代。
義経をかくまった度量で、大きな勝負を受ける。`},"03af":{desc:`知略と美貌でローマと渡り合った最後の女王。
読めない一手で、卓の空気を支配する。`},"03bm":{desc:`草原の部族をまとめ、大帝国を築いた覇王。
狙った獲物は逃さない、電光石火のレイズ。`},"03bf":{desc:`「美しい者が来た」の名を持つエジプトの王妃。
静かな微笑みの裏に、強い手を隠す。`},"04am":{desc:`奥州の独眼竜。仙台の街を築いた伊達男。
派手な見せ札で、相手の読みを狂わせる。`},"04af":{desc:`伊達政宗の正室。三春の田村家から嫁いだ姫。
動かず待ち、確かな手だけで勝負する。`},"04bm":{desc:`政宗を支えた知恵袋。通り名は「小十郎」。
主の勝負を見極める、冷静な参謀。`},"04bf":{desc:`政宗の長女。家康の六男・松平忠輝に嫁いだ。
父ゆずりの度胸で、強気に打って出る。`},"05am":{desc:`常陸から秋田へ移った、久保田藩の初代藩主。
律儀に守り、無理な勝負には乗らない。`},"05af":{desc:`六歌仙に数えられる、平安の女流歌人。
移ろう色を見抜き、流れに合わせて打つ。`},"05bm":{desc:`「余の辞書に不可能はない」のフランス皇帝。
狙いを定めたら、一気に攻めて押し切る。`},"05bf":{desc:`中国四大美女のひとり。呉を傾けた越の美女。
ゆったりと構え、相手に勝負をさせる。`},"06am":{desc:`出羽の山形を治め、五十七万石を築いた大名。
守りを固め、ここぞで鋭く仕掛ける。`},"06af":{desc:`最上義光の妹で、伊達政宗の母。
強さとしなやかさで、どんな卓にもなじむ。`},"06bm":{desc:`謙信の跡を継ぎ、米沢藩の祖となった寡黙な将。
めったに笑わず、めったに動かない。`},"06bf":{desc:`最上義光の娘。悲運の最期で知られる姫。
そっと手を合わせ、静かに流れを待つ。`},"07am":{desc:`会津若松の城と町を築いた、文武に秀でた大名。
攻めも守りも、ほどよく使い分ける。`},"07af":{desc:`会津藩主・松平容保の義姉。鶴ヶ城で戦った姫。
じっと耐え、最後まで卓を守り抜く。`},"07bm":{desc:`義兄弟と蜀を興した、三国志の英雄。
仲間を信じて、多くのハンドに参加する。`},"07bf":{desc:`会津戦争で、薙刀を手に戦った娘子隊の女性。
迷いなく踏み込む、まっすぐなレイズ。`},"08am":{desc:`「鬼義重」と恐れられた、常陸の戦国大名。
固く構え、鬼の一撃で相手を退ける。`},"08af":{desc:`平将門の娘と伝わる、妖術使いの姫。
怪しい術のような、読めないブラフ。`},"08bm":{desc:`坂東で兵を挙げ、「新皇」を名のった武将。
誰にも止められない、型破りの攻め。`},"08bf":{desc:`ローマに立ち向かった、古代ブリテンの女王。
恐れず前に出て、大きなポットを取りに行く。`},"09am":{desc:`屋島の戦いで、扇の的を射抜いた弓の名手。
ただ一度の好機を、正確に撃ち抜く。`},"09af":{desc:`那須の殺生石に姿を変えたと伝わる、九尾の狐。
化かしの名手。何を持つか誰にも読めない。`},"09bm":{desc:`美しいひげと忠義で知られる、三国志の武将。
青龍刀の一撃のような、重いレイズ。`},"09bf":{desc:`オーストリアを治めた、ハプスブルク家の女帝。
攻めと守りのつり合いで、国も卓も治める。`},"10am":{desc:`鎌倉を攻め落とし、鎌倉幕府を倒した武将。
勢いに乗ったら、一気にポットを奪う。`},"10af":{desc:`本多忠勝の娘で真田信之の妻。沼田城を守った。
留守の城も卓も、強気の構えで守る。`},"10bm":{desc:`弟の幸村と道を分け、真田家を残した沼田城主。
無理をせず、長く生き残ることを選ぶ。`},"10bf":{desc:`イギリスの入植者と先住民をつないだ女性。
相手の出方をよく見て、静かに合わせる。`},"11am":{desc:`鎌倉武士の鑑とたたえられた、坂東の武将。
正々堂々と、筋の通った勝負をする。`},"11af":{desc:`忍城の戦いで、豊臣の大軍に立ち向かった姫。
女武者の気迫で、ためらわず攻める。`},"11bm":{desc:`水攻めに耐えて、忍城を守り抜いた城代。
のんびり構えて、相手の攻めを受け流す。`},"11bf":{desc:`戦地で傷ついた兵を看護した「白衣の天使」。
記録を重んじ、確かな手だけで勝負する。`},"12am":{desc:`源頼朝を助け、鎌倉幕府を支えた千葉氏の当主。
じっくり構え、勝てる場面だけを選ぶ。`},"12af":{desc:`「南総里見八犬伝」で、八つの玉を残した姫。
八つの徳を胸に、つり合いの取れた打ち方。`},"12bm":{desc:`安房から房総へ勢力を広げた、里見家の名将。
固く待ち、隙を見れば鋭く攻め込む。`},"12bf":{desc:`トロイア戦争のきっかけとなった、伝説の美女。
ひとつのポットに、国ごと賭けさせる。`},"13am":{desc:`江戸城を築いた、室町時代の武将で歌人。
城を築くように、スタックを積み上げる。`},"13af":{desc:`三代将軍・家光の乳母として、大奥を整えた。
厳しい目で、甘い手は見逃さない。`},"13bm":{desc:`八王子城を築いた、北条家の武闘派。
関東の山城から、強気に攻め下る。`},"13bf":{desc:`恋しさのあまり火を付けたと伝わる、江戸の娘。
燃え上がったら止まらない、熱いレイズ。`},"14am":{desc:`小田原を拠点に、戦国時代の幕を開けた武将。
機を見るに敏。小さなポットも逃さない。`},"14af":{desc:`源頼朝と北条政子の娘。悲恋で知られる姫。
傷を抱えながらも、静かに卓に座る。`},"14bm":{desc:`河越の夜戦で大軍を破った、相模の名君。
攻めも守りも、ちょうどよい加減を知る。`},"14bf":{desc:`大英帝国の最盛期を築いた、イギリスの女王。
落ち着いた打ち回しで、長く卓に君臨する。`},"15am":{desc:`「越後の龍」とたたえられた、義の武将。
敵に塩を送っても、勝負は手加減しない。`},"15af":{desc:`上杉謙信の姉で、上杉景勝の母。
家を見守るように、静かに流れを読む。`},"15bm":{desc:`兜の「愛」の字で知られる、上杉家の家老。
義と知恵で、無駄のない打ち方をする。`},"15bf":{desc:`無敵艦隊を退けた、イングランドの女王。
選んだ勝負には、全力で攻めかかる。`},"16am":{desc:`冬の立山を越えた「さらさら越え」の武将。
雪山も越える度胸で、無理な勝負にも挑む。`},"16af":{desc:`フランス王妃。華やかな宮廷の象徴となった。
気前よく参加して、ポットを楽しむ。`},"16bm":{desc:`加賀藩の二代藩主。高岡の町を開いた。
家を守るため、危ない橋は渡らない。`},"16bf":{desc:`ナポレオンの最初の皇后。バラを愛した女性。
華やかさと計算を、ほどよく使い分ける。`},"17am":{desc:`「槍の又左」と呼ばれた、加賀百万石の祖。
長い槍のように、鋭いベットで攻める。`},"17af":{desc:`前田利家の妻。加賀百万石を支えた賢夫人。
家計を守るように、スタックを守り育てる。`},"17bm":{desc:`加賀藩の三代藩主。工芸を育てた名君。
わざと隙を見せて、相手に打たせる。`},"17bf":{desc:`徳川秀忠の娘。三歳で前田利常に嫁いだ。
幼くして嫁いだ芯の強さで、堅く打つ。`},"18am":{desc:`「鬼柴田」と呼ばれた、織田家の筆頭家老。
勢いのままに、大胆に攻め込む。`},"18af":{desc:`織田信長の妹。戦国一の美女と伝わる。
運命に流されても、気品は失わない。`},"18bm":{desc:`一乗谷に京の文化を咲かせた、越前の大名。
雅を好み、自分からは仕掛けない。`},"18bf":{desc:`浅井三姉妹の次女。姉と妹の間を取り持った。
どちらにも偏らない、つり合いの名手。`},"19am":{desc:`「風林火山」の旗を掲げた、甲斐の虎。
動かざること山の如く、攻めは火の如く。`},"19af":{desc:`武田信玄の娘。のちに八王子で尼となった。
辛抱強く、良い手が来るのを待つ。`},"19bm":{desc:`信玄の跡を継ぎ、武田家の領地を最も広げた。
父を超えようと、積極的に攻め続ける。`},"19bf":{desc:`武田信玄の正室。京の公家の家から嫁いだ。
都の気品と落ち着きで、卓を整える。`},"20am":{desc:`徳川の大軍を二度退けた、真田家の知将。
表裏比興。何を考えているか読ませない。`},"20af":{desc:`諏訪頼重の娘で、武田勝頼の母。
穏やかに座り、静かに流れを見守る。`},"20bm":{desc:`大坂の陣で「日本一の兵」とたたえられた。
最後まであきらめない、真っ向勝負。`},"20bf":{desc:`木曽義仲に仕えた、一騎当千の女武者。
強い手だけを選び、容赦なく攻める。`},"21am":{desc:`油売りから美濃の国主になった「美濃の蝮」。
したたかな一手で、卓を乗っ取る。`},"21af":{desc:`斎藤道三の娘で、織田信長の正室。
蝮の娘らしく、鋭い一手を隠し持つ。`},"21bm":{desc:`わずかな兵で稲葉山城を奪った、天才軍師。
少ないスタックでも、知恵で勝ち切る。`},"21bf":{desc:`織田信長の叔母。岩村城の女城主となった。
柔らかく構え、どんな相手とも渡り合う。`},"22am":{desc:`「海道一の弓取り」と呼ばれた、駿河の大名。
大きく構えすぎて、隙を見せることも。`},"22af":{desc:`女の身で家を継ぎ、井伊家を守った「女城主」。
家を守るため、ときに大胆な手を打つ。`},"22bm":{desc:`長い忍耐の末に天下を取った、江戸幕府の祖。
鳴くまで待とう。勝てる時まで動かない。`},"22bf":{desc:`源頼朝の妻。「尼将軍」と呼ばれた。
ここ一番の演説のような、強いレイズ。`},"23am":{desc:`天下布武を掲げ、戦国の世を大きく動かした。
常識を破るベットで、卓を揺さぶる。`},"23af":{desc:`豊臣秀吉の正室。家臣たちの母と慕われた。
みんなに目を配り、ほどよく打つ。`},"23bm":{desc:`足軽から天下人へ。日本を一つにまとめた。
人たらしの笑顔で、相手を勝負に誘う。`},"23bf":{desc:`徳川家康の正室。今川家ゆかりの姫。
多くは語らず、静かに機会を待つ。`},"24am":{desc:`七度主君を替え、築城の名手として名を残した。
場を読み、攻めと守りを切り替える。`},"24af":{desc:`織田信長の娘で、蒲生氏郷の妻。
気高く、軽い勝負には乗らない。`},"24bm":{desc:`鉄甲船を率いた、九鬼水軍の将。
荒波を越える勢いで、ポットに乗り込む。`},"24bf":{desc:`鈴鹿山の鬼退治に加わったと伝わる天女。
神通力のように、思いもよらない一手。`},"25am":{desc:`小谷城の城主。信長の妹・お市の夫。
義理と損得を量り、つり合いよく打つ。`},"25af":{desc:`浅井三姉妹の三女。徳川秀忠の正室となった。
三度の嫁入りを経た、ねばり強い打ち手。`},"25bm":{desc:`豊臣家を支えた奉行。関ヶ原で西軍を率いた。
計算ずくの正確なベットで勝負する。`},"25bf":{desc:`豊臣秀吉の側室。「松の丸殿」と呼ばれた。
華やかに構え、いろいろな手で遊ぶ。`},"26am":{desc:`本能寺の変で、主君・信長を討った武将。
じっと機をうかがい、一度に勝負を決める。`},"26af":{desc:`明智光秀の娘。信仰を貫いたキリシタン。
信じた道を、静かに最後まで守る。`},"26bm":{desc:`古今伝授を受けた、武将で歌人の教養人。
歌のように、間合いと調子を大切にする。`},"26bf":{desc:`源義経の母。都一の美女と伝わる。
子を守るため、柔らかく流れに乗る。`},"27am":{desc:`千早城で大軍を足止めした、知略の武将。
少ない兵で、大きなポットを守り抜く。`},"27af":{desc:`浅井三姉妹の長女。豊臣秀頼の母。
大坂城の主として、強気に打って出る。`},"27bm":{desc:`大坂城の若き主。豊臣家の最後の当主。
城の奥から、静かに勝負を見守る。`},"27bf":{desc:`安倍晴明の母と伝わる、白狐の化身。
正体を見せず、ほどよく打ち分ける。`},"28am":{desc:`豊臣秀吉を支えた、天才軍師。
相手の一手先を読み、確実に仕留める。`},"28af":{desc:`徳川秀忠の娘。大坂城から救い出され、姫路へ。
荒波をくぐった姫。無理な勝負はしない。`},"28bm":{desc:`武士で初めて太政大臣となった、平家の棟梁。
日宋貿易のように、大きな取引を好む。`},"28bf":{desc:`黒田官兵衛の妻。側室を持たない夫を支えた。
ひとつの手を大事にする、一途な打ち手。`},"29am":{desc:`茶釜「平蜘蛛」で知られる、戦国の梟雄。
最後は平蜘蛛とともに、すべてを賭ける。`},"29af":{desc:`万葉集を代表する、飛鳥時代の歌人。
歌うように、ほどよい間合いで打つ。`},"29bm":{desc:`大和を治めた大名。「洞ヶ峠」の話で知られる。
様子を見て、勝つ側につく慎重派。`},"29bf":{desc:`漢から匈奴へ嫁いだ、中国四大美女のひとり。
遠い地でも、静かに耐えて機を待つ。`},"30am":{desc:`鉄砲で名を上げた、雑賀衆の頭領。
狙いすました一発で、ポットを撃ち抜く。`},"30af":{desc:`安珍を追い、大蛇となった道成寺の伝説の娘。
一度決めたら、どこまでも追いかける。`},"30bm":{desc:`家康の十男。紀州藩の祖となった「南海の龍」。
龍のように大胆に、積極的に攻める。`},"30bf":{desc:`放射能を研究し、ノーベル賞を二度受けた。
確率を計算し、根拠のある手で勝負する。`},"31am":{desc:`魏の礎を築いた、三国志の「乱世の奸雄」。
人材と手札を見極め、強い時に攻める。`},"31af":{desc:`知恵を試すため、ソロモン王を訪ねた女王。
問いかけるような一手で、相手を試す。`},"31bm":{desc:`蜀の劉備を支えた、三国志の名軍師。
天下三分の計のように、先まで読み切る。`},"31bf":{desc:`千夜一夜の物語を語り続けた王妃。
話の続きが気になるように、相手を誘う。`},"32am":{desc:`出雲から中国地方に勢力を広げた、謀略の雄。
相手の隙を突き、鋭く攻める。`},"32af":{desc:`歌舞伎の始まりとされる、かぶき踊りの創始者。
舞うように派手に、ポットへ飛び込む。`},"32bm":{desc:`「我に七難八苦を与えたまえ」と祈った忠臣。
何度負けても、恐れず挑み続ける。`},"32bf":{desc:`スサノオが八岐大蛇から救った、出雲の姫神。
守られながらも、確かな手を待つ。`},"33am":{desc:`謀略で備前を手にした、戦国の梟雄。
罠を仕掛け、思いもよらない手で奪う。`},"33af":{desc:`前田利家の娘。豊臣秀吉の養女となった姫。
華やかさと強さを、ほどよく使い分ける。`},"33bm":{desc:`豊臣五大老のひとり。のちに八丈島へ流された。
遠い島からでも、大きな勝負に挑む。`},"33bf":{desc:`項羽に愛された美女。「虞や虞や」と歌われた。
寄り添うように、相手の手に合わせる。`},"34am":{desc:`三本の矢の教えで知られる、中国地方の覇者。
ひとりでなく、知恵をたばねて勝つ。`},"34af":{desc:`毛利元就の正室。三人の息子を育てた。
家を支えるように、静かに流れを守る。`},"34bm":{desc:`毛利家を支えた三男。知略に優れた名将。
固く構え、勝負所では鋭く仕掛ける。`},"34bf":{desc:`中国でただひとり、女帝として即位した。
常識にとらわれない、大胆な攻め。`},"35am":{desc:`山口に京のような文化を咲かせた大名。
雅を好み、多くのハンドを楽しむ。`},"35af":{desc:`唐の玄宗に愛された、中国四大美女のひとり。
相手を夢中にさせ、ゆるやかに流れを作る。`},"35bm":{desc:`主君・大内義隆を倒した、西国の猛将。
下克上の勢いで、強引に攻め込む。`},"35bf":{desc:`清の末期に、長く実権を握った皇太后。
固く構え、握った主導権は離さない。`},"36am":{desc:`将軍をしのぐ力を持った、最初の天下人とも。
攻守のつり合いで、畿内を制する。`},"36af":{desc:`ルイ15世に愛され、芸術を守った才女。
社交の名手。卓の流れを上手に整える。`},"36bm":{desc:`徳島藩の祖。阿波踊りの始まりとも伝わる。
城を築くように、地道にスタックを守る。`},"36bf":{desc:`コロンブスの航海を支えた、スペインの女王。
未知の航路にも、大胆に賭ける。`},"37am":{desc:`東方遠征で大帝国を築いた、マケドニアの王。
結び目を一刀で断つような、豪快な一手。`},"37af":{desc:`竹から生まれ、月へ帰った物語の姫。
難題を出して、相手の本気を試す。`},"37bm":{desc:`「賽は投げられた」とルビコン川を渡った将軍。
決めたら迷わず、勝負に打って出る。`},"37bf":{desc:`波乱の生涯を送った、スコットランドの女王。
気ままに参加して、運命の一枚を待つ。`},"38am":{desc:`瀬戸内の海を支配した、村上水軍の頭領。
海賊らしく、積極的にポットを奪う。`},"38af":{desc:`踊り子から皇后になった、東ローマの女帝。
逃げずに踏みとどまり、強気に攻める。`},"38bm":{desc:`賤ヶ岳の七本槍のひとり。松山城を築いた。
攻守を見極めた、手堅い打ち回し。`},"38bf":{desc:`「高慢と偏見」を書いた、イギリスの作家。
人の心を細やかに読み、静かに応じる。`},"39am":{desc:`土佐から四国の大半を手にした「鬼若子」。
固く構え、勝てる時は一気に攻める。`},"39af":{desc:`山内一豊の妻。へそくりで名馬を買わせた。
やりくり上手。スタックを賢く使う。`},"39bm":{desc:`妻の助けで出世し、土佐藩の祖となった。
地道に、確かな手だけを積み重ねる。`},"39bf":{desc:`女性で初めて大西洋を単独で飛んだ飛行士。
広い空のように、大胆に勝負へ飛び込む。`},"40am":{desc:`「西国無双」とたたえられた、柳川の名将。
負け知らずの強さで、ここぞと攻める。`},"40af":{desc:`七歳で立花城の城督となった、女城主。
城を守る気迫で、強気にレイズする。`},"40bm":{desc:`福岡藩の祖。関ヶ原で大きな手柄を上げた。
父ゆずりの知略で、つり合いよく打つ。`},"40bf":{desc:`三国志演義で、董卓と呂布を仲違いさせた美女。
相手どうしを争わせ、ポットをさらう。`},"41am":{desc:`「肥前の熊」と呼ばれた、九州の戦国大名。
熊のような力強さで、強引に押し切る。`},"41af":{desc:`三人の王の母として、フランスを動かした王妃。
選び抜いた手で、意表をつく攻めを見せる。`},"41bm":{desc:`龍造寺家を支え、佐賀藩の礎を築いた。
主家を支えるように、手堅く打つ。`},"41bf":{desc:`ヘンリー8世の王妃。エリザベス1世の母。
華やかに勝負に加わり、運を試す。`},"42am":{desc:`初のキリシタン大名。長崎の港を開いた。
港を開くように、多くの勝負を受け入れる。`},"42af":{desc:`長崎を舞台にした、オペラの主人公。
帰りを待ち続けるように、じっと待つ。`},"42bm":{desc:`南蛮貿易で栄えた、島原のキリシタン大名。
異国の風に乗り、強気に攻める。`},"42bf":{desc:`ラムセス2世に深く愛された、エジプトの王妃。
美しく整った、つり合いのよい打ち方。`},"43am":{desc:`熊本城を築いた、築城と槍の名手。
堅い城のように守り、勝負所で攻める。`},"43af":{desc:`王として古代エジプトを治めた女性のファラオ。
冷静に治め、攻めと守りをほどよく使う。`},"43bm":{desc:`ガラシャの夫。茶人でもあった激情の武将。
激しい気性で、多くの勝負に飛び込む。`},"43bf":{desc:`ローマに挑んだ、パルミラの女王。
大国にもひるまず、強気に攻める。`},"44am":{desc:`南蛮文化を取り入れた、豊後のキリシタン大名。
珍しいものを好み、幅広い手で遊ぶ。`},"44af":{desc:`ルネサンスの時代を生きた、ボルジア家の娘。
噂に包まれた、読めない打ち手。`},"44bm":{desc:`雷を斬ったと伝わる、大友家の勇将。
雷のような一撃で、相手を退ける。`},"44bf":{desc:`インド大反乱で戦った、ジャーンシーの王妃。
馬上の勇者のように、恐れず攻める。`},"45am":{desc:`象を連れてアルプスを越えた、カルタゴの名将。
誰も思いつかない道から、ポットを奪う。`},"45af":{desc:`富士山の神ともされる、日向に降りた花の女神。
花が咲くのを待つように、静かに構える。`},"45bm":{desc:`「力は山を抜き」と歌われた、楚の覇王。
圧倒的な力で、ポットをねじ伏せる。`},"45bf":{desc:`「十番目のムーサ」と呼ばれた古代の詩人。
詩のように、ほどよい調子で打つ。`},"46am":{desc:`九州の大半を手にした、島津家の当主。
兄弟の力をまとめ、手堅く勝つ。`},"46af":{desc:`薩摩から将軍家に嫁ぎ、大奥をまとめた。
守るべきものを守る、堅い打ち手。`},"46bm":{desc:`関ヶ原で敵中を突破した「鬼島津」。
退く時さえ前に出る、恐れ知らずの攻め。`},"46bf":{desc:`男の名で書いた、フランスの女性作家。
自由気ままに、多くのハンドに加わる。`},"47am":{desc:`三つの国をまとめ、琉球王国を開いた王。
まとめる力で、卓を思いのままに動かす。`},"47af":{desc:`ハワイ最後の女王。「アロハ・オエ」の作者。
穏やかな歌のように、静かに流れを待つ。`},"47bm":{desc:`座喜味城などを築いた、琉球の名将。
城を築くように、つり合いよく守る。`},"47bf":{desc:`父の代わりに戦場へ出た、伝説の娘。
勇気を胸に、迷わず攻め込む。`}},sI="/-stack-poker-test-web/gacha-chest-v1/assets/shippori-b1-800-sub-Su4IIu-N.woff2",cI="/-stack-poker-test-web/gacha-chest-v1/assets/cinzel-700-sub-CIee9RlX.woff2",oI="data:font/woff2;base64,d09GRgABAAAAAAuUAA8AAAAADpQAAQABAAAAAAAAAAAAAAAAAAAAAAAAAABHREVGAAABWAAAABYAAAAWABEABEdQT1MAAAFwAAAA9wAAAmQvASb/R1NVQgAAAmgAAAAoAAAAKLj8uOpPUy8yAAACkAAAAGAAAABgg2FbhVNUQVQAAALwAAAAKgAAACp5lmwRY21hcAAAAxwAAABUAAAAVACtATVnYXNwAAADcAAAAAgAAAAIAAAAEGdseWYAAAN4AAAGCQAABxyV2byDaGVhZAAACYQAAAA2AAAANgrcE1toaGVhAAAJvAAAACQAAAAkCQEA5GhtdHgAAAngAAAAQAAAAEAmRQEvbG9jYQAACiAAAAAiAAAAIhDGDtVtYXhwAAAKRAAAACAAAAAgADQA525hbWUAAApkAAABDgAAAe4naklAcG9zdAAAC3QAAAAgAAAAIP+fADIAAQAAAAwAAAAAAAAAAgABAAEAAwABAAB4Xn1SMY7CQAycdZIDQiASBRUlL+ANiIqSD1BQcaI43dOuhoZH0ERCNDRp0tCa8YaIEMJZynrX4xnNrgMHIMYUM8h8sVxh+L3+3WGIkHWownC33fzs0LWd/0IITyIJmeL+rNed3Z6slJwcI7149tXWZpRYs1qdNf8P19Mn3ls91cJqeilzE9eMWKFHy+9ROm9nGs8rt96u0qJ2Ya/RjDZNzbybTA9PtMVXqVZfX8T15l3Zy8c1oO4h1at3LZyh47RslpYDfDELdzEGSDjbDiL0Odfeo8PQgP0DVhIiHTIidofsNQX7WwQTjL2O8Oz87R0Cze/TyEgfAAABAAAACgAmACYAAkRGTFQAEmxhdG4ADgAAAAAABAAAAAD//wAAAAAABAKIA4QABQAAAooCWAAAAEsCigJYAAABXgAyASwAAAAAAAAAAAAAAACgAADvQAAgSwAAAAAAAAAATk9ORQDAACAAUQPQ/owAAAPQAXQgAACTAAAAAAH0ArwAAAAgAAIAAQABAAgAAQAAABQAAQAAABwAAndnaHQBAgAAAAIAAQAAAAABBQOEAAAAAAAAAAIAAAADAAAAFAADAAEAAAAUAAQAQAAAAAwACAACAAQAIAA5AEEASwBR//8AAAAgADAAQQBKAFH////v/9X/wP+4/7MAAQAAAAAAAAAAAAAAAAABAAH//wAPeF5dVFts29YZPudQFCXKkqwLyepiShQtUpJrmSJNMl4kWbJsp3YcX+IabuJcHNsb0qVxkmZZUAzDEg9DGttBW7QvRVugbdoCve1haF/aYMAaFE2yZViLPLQv3YCi2MsStH0osg2i99PesGEPPDg8lP7v+/7v/w4iSHc28UfUnxCFGIRmI1IkL0UkHT/tvIofdO44m/TwP67pnr8geutzhMh9cgd+GUVplEVlhJpYpigvzxsGJ5uaXtEtG3OUjOuUHeMkkzbgExzD1tAtfBQf/OZ3F/xsosP/Z79Q6cTK9zOYpiOxMF5wvsb83yKa4HN+5Y9nyJ22jv/onIunwyzblSMbL7Z/T6p+tVwKOh5dfyrXxbISQtTWP7c0vE6uoQ7EAyPUjMRDRDXrxIwIsqLIWq5iGoJpcLDJeRlcsw6drWlGlKJwPhmc/mQ6mMxjcq3908ZyK+3z85OLGrk0lsyzY2NsPol8SASQaagfhfoyUlEF7UYjaAqQYjwvcHKuTNQyXcGYwTa8eRnVUmTZNKSIHIlBT3QdhNsxl0suB+cxtyNwyMkRYAVHLqu79x/ozzwWqE5OdfmSmWyyE593PhvDsbc90kD8cEeYY+86ym3gwWKgu80ds2T6E3cDZ9PT8AYf8B+c9bwC+85SIaBW9FIK6jzL4vOMP8WTiOhvD4PUK64yUgKN7SuwkLPbSilUcG7Si+QWEkCljdCIKnoEnrcsW4CWKmqZonSe5+Jer5xTFLPfsmK6ZZn9rjCvl4vzPP7Ymj33yNShwb1rpw6rzK4frr9+qLY0t7/n4ocrKx9evPjBysoHF+vz5fJ8veauoQrTEeazQuoBTyZNNVcGO/N67qHBAvli/tWzj1+d31nbB/duLi9v7t1ZEUHy1nfkKeAZRilw4f84CTmXCrQciOEDS+vj4+tLxzbGxzeO9WtaPzzk1sLV1ZOvLSy8dnL16oL+/CuvPO8+CLtOwyS5+tExEzSaETlEMZyh81wk7pVlBq9zvMSm9u3fw0XF7qzAYTbDk41OIezHrKg6NJ9ld+qQ01CnG9Kk1gn8H7oGlYCUZRuUZNY9QI6Bnh1riXPL2sza3uLQ5IT4W7FSjLDD7fs9C3PDhZHdg018471kLlpZaGoPP1SrxIRyt/NX1vzxo8d/pDfHafrRJRdt632ikxvbWdxBIqouEkAEz2weguA6ZIOPapkAqCCrloWF6TM1yRrsEvc0S83Vy88MkfrqXGVgroeUJx+kqW5TrOqEHVDWyI3ihF2qdgd8sd59Pxg9MdIVFFmcHTxg18ZyLO6d0vK9UYo+euTdrApp/BZuiHOg3fNvd2wjIscELEEEDAauA7DG4CTb9Qfr19nb1/3Oi/jpdNrPZtovkJDEB5xfY1aQ8Heft21yc9x5g4s9w16CxrIZAdSyW78hWfIVyoBamrFEwoSobZmUbSkKo8byLhL+0rkdW3xuRaOoifObl3eR5MTsuEZ5Rp+Y8M/iUrY7wJJ4YlaIto43xh9rJqJdLO5I9w31DjSZjBdfSKR5wCpsfUN+Tu6hImAJIcqdcNdCt5+qAjmvExceeuqmoU5In+fEE7tCvmx3XgkF+TBfCPpCtcnpVoGQwV8sLz052li7Tr5kpP3Hfzk7e8quTPUONDJef4fPl1U7YuaBodZqk+CR5x4/8ebpPsCnoZcG3DwczJFhWYbEhDyMUffYMZpmAzkRN/qDJdPSo28xCTErBi+07+FPRfFUaubo4pyYmjp0ZH8XLhKolIDELIMrLagEud2ZSMixXCfqthhXmyCCRDfcZRiZOmXY26EWYHDMfveOo4abp0eGzoxUD5Zzia4Axj3FfDHVGNBmG/LklSN9izMVtdowA1q5Wu2XbCncXSunhhsl/PfW4Uppn9E3mGEGRhLF3YRU8uliTybRa7S00UUtnB82+4aKgi8QmtkzOklT8WIykpEUIaTYM8Be2bpFfkZuogJC82qd+t8bB9jZQoiUiV0ntuXGjPxkx4VM3nVBCAlqkAlVd1yoX1h+9qXG2kfKfz2YLP/Hg0wBPDjYbK0OYfLyO9sW/AtmxXqXAAAAAAEAAAACAAA5kDUwXw889QADA+gAAAAAy16eGAAAAADbNzIE/87+jAVgA9AAAAAGAAIAAAAAAAAAAQAAA9D+jAAABI//zv24BWAAAQAAAAAAAAAAAAAAAAAAABAB9AAyAtD/2AGo//sDNgAeA5AAKAKyACMBqAAeApIAHgJaAB4Cg//xAk8ACgKjACgCPAAFAnwAGQKjACYA+gAAAAAAFQBfAI8BBAFYAYQBqAHfAiYCVgKMAswC8QNQA44DjgAAAAEAAAAQAG4AEAB2ABAAAQAAAAAAAAAAAAAAAAADAAJ4XnWQTUoDQRSEv8mPoEiWIq5mqQtNcOHCrDQqCDIJMSRrHcP4MzrDdLLQhUfxBJ7AY3giqzuNaZHQDF3zXnXVqwds8E6dqLEOfPDtccQ2Xx7XaPHpcZ2DX34j4DTZ4c5z1lS/8rjFEVsLHNXYlJvzippCcErODSlPTJjyQMY9M/fNKDEc09YxYlTqlqoa+RvhXHehaqZ+nwv59VR94U06OfuB8liVyr0p1I851MuOO0vUJZFKwjndlTpD6WTM3cTVH1YcuPXkUvLq5l2ksY7WqyPvkbJNdYezxgzELnhUJ1XCmBO52C3YfEb/u/82kkndMubcKk0q5rP2kHDGJddS7zNWlqFqodPeD812RtUAAAADAAAAAAAA/5wAMgAAAAAAAAAAAAAAAAAAAAAAAAAA",rn=Object.assign({"./assets/cards/badge-n.svg":bu,"./assets/cards/badge-r.svg":ju,"./assets/cards/badge-s.svg":vu,"./assets/cards/badge-ss.svg":yu,"./assets/cards/badge-u.svg":wu,"./assets/cards/frame-n.svg":Mu,"./assets/cards/frame-n.webp":xu,"./assets/cards/frame-r.svg":Zu,"./assets/cards/frame-r.webp":Nu,"./assets/cards/frame-s.svg":ku,"./assets/cards/frame-s.webp":Cu,"./assets/cards/frame-ss.svg":Su,"./assets/cards/frame-ss.webp":Au,"./assets/cards/frame-u.svg":Pu,"./assets/cards/frame-u.webp":Du,"./assets/cards/idx-10-c.svg":Bu,"./assets/cards/idx-10-d.svg":zu,"./assets/cards/idx-10-h.svg":Wu,"./assets/cards/idx-10-s.svg":Tu,"./assets/cards/idx-2-c.svg":Eu,"./assets/cards/idx-2-d.svg":Ru,"./assets/cards/idx-2-h.svg":Yu,"./assets/cards/idx-2-s.svg":Hu,"./assets/cards/idx-3-c.svg":_u,"./assets/cards/idx-3-d.svg":Gu,"./assets/cards/idx-3-h.svg":Lu,"./assets/cards/idx-3-s.svg":Ju,"./assets/cards/idx-4-c.svg":Uu,"./assets/cards/idx-4-d.svg":Fu,"./assets/cards/idx-4-h.svg":Xu,"./assets/cards/idx-4-s.svg":Qu,"./assets/cards/idx-5-c.svg":Ou,"./assets/cards/idx-5-d.svg":Vu,"./assets/cards/idx-5-h.svg":Ku,"./assets/cards/idx-5-s.svg":$u,"./assets/cards/idx-6-c.svg":qu,"./assets/cards/idx-6-d.svg":em,"./assets/cards/idx-6-h.svg":tm,"./assets/cards/idx-6-s.svg":am,"./assets/cards/idx-7-c.svg":nm,"./assets/cards/idx-7-d.svg":rm,"./assets/cards/idx-7-h.svg":im,"./assets/cards/idx-7-s.svg":sm,"./assets/cards/idx-8-c.svg":cm,"./assets/cards/idx-8-d.svg":om,"./assets/cards/idx-8-h.svg":lm,"./assets/cards/idx-8-s.svg":pm,"./assets/cards/idx-9-c.svg":gm,"./assets/cards/idx-9-d.svg":dm,"./assets/cards/idx-9-h.svg":um,"./assets/cards/idx-9-s.svg":mm,"./assets/cards/idx-A-c.svg":fm,"./assets/cards/idx-A-d.svg":Im,"./assets/cards/idx-A-h.svg":hm,"./assets/cards/idx-A-s.svg":bm,"./assets/cards/idx-J-c.svg":jm,"./assets/cards/idx-J-d.svg":vm,"./assets/cards/idx-J-h.svg":ym,"./assets/cards/idx-J-s.svg":wm,"./assets/cards/idx-K-c.svg":Mm,"./assets/cards/idx-K-d.svg":xm,"./assets/cards/idx-K-h.svg":Zm,"./assets/cards/idx-K-s.svg":Nm,"./assets/cards/idx-Q-c.svg":km,"./assets/cards/idx-Q-d.svg":Cm,"./assets/cards/idx-Q-h.svg":Sm,"./assets/cards/idx-Q-s.svg":Am}),lI=e=>rn[`./assets/cards/${e}.webp`]||rn[`./assets/cards/${e}.png`]||rn[`./assets/cards/${e}.svg`],pI=Object.assign({"./assets/chars/01af-g.webp":Pm,"./assets/chars/01af-n.webp":Dm,"./assets/chars/01af-r.webp":Bm,"./assets/chars/01af-s.webp":zm,"./assets/chars/01af-u.webp":Wm,"./assets/chars/01am-g.webp":Tm,"./assets/chars/01am-n.webp":Em,"./assets/chars/01am-r.webp":Rm,"./assets/chars/01am-s.webp":Ym,"./assets/chars/01am-u.webp":Hm,"./assets/chars/01bf-g.webp":_m,"./assets/chars/01bf-n.webp":Gm,"./assets/chars/01bf-r.webp":Lm,"./assets/chars/01bf-s.webp":Jm,"./assets/chars/01bf-u.webp":Um,"./assets/chars/01bm-g.webp":Fm,"./assets/chars/01bm-n.webp":Xm,"./assets/chars/01bm-r.webp":Qm,"./assets/chars/01bm-s.webp":Om,"./assets/chars/01bm-u.webp":Vm,"./assets/chars/02af-g.webp":Km,"./assets/chars/02af-n.webp":$m,"./assets/chars/02af-r.webp":qm,"./assets/chars/02af-s.webp":e2,"./assets/chars/02af-u.webp":t2,"./assets/chars/02am-g.webp":a2,"./assets/chars/02am-n.webp":n2,"./assets/chars/02am-r.webp":r2,"./assets/chars/02am-s.webp":i2,"./assets/chars/02am-u.webp":s2,"./assets/chars/02bf-g.webp":c2,"./assets/chars/02bf-n.webp":o2,"./assets/chars/02bf-r.webp":l2,"./assets/chars/02bf-s.webp":p2,"./assets/chars/02bf-u.webp":g2,"./assets/chars/02bm-g.webp":d2,"./assets/chars/02bm-n.webp":u2,"./assets/chars/02bm-r.webp":m2,"./assets/chars/02bm-s.webp":f2,"./assets/chars/02bm-u.webp":I2,"./assets/chars/03af-g.webp":h2,"./assets/chars/03af-n.webp":b2,"./assets/chars/03af-r.webp":j2,"./assets/chars/03af-s.webp":v2,"./assets/chars/03af-u.webp":y2,"./assets/chars/03am-g.webp":w2,"./assets/chars/03am-n.webp":M2,"./assets/chars/03am-r.webp":x2,"./assets/chars/03am-s.webp":Z2,"./assets/chars/03am-u.webp":N2,"./assets/chars/03bf-g.webp":k2,"./assets/chars/03bf-n.webp":C2,"./assets/chars/03bf-r.webp":S2,"./assets/chars/03bf-s.webp":A2,"./assets/chars/03bf-u.webp":P2,"./assets/chars/03bm-g.webp":D2,"./assets/chars/03bm-n.webp":B2,"./assets/chars/03bm-r.webp":z2,"./assets/chars/03bm-s.webp":W2,"./assets/chars/03bm-u.webp":T2,"./assets/chars/04af-g.webp":E2,"./assets/chars/04af-n.webp":R2,"./assets/chars/04af-r.webp":Y2,"./assets/chars/04af-s.webp":H2,"./assets/chars/04af-u.webp":_2,"./assets/chars/06af-g.webp":G2,"./assets/chars/06af-n.webp":L2,"./assets/chars/06af-r.webp":J2,"./assets/chars/06af-s.webp":U2,"./assets/chars/06af-u.webp":F2,"./assets/chars/06bf-g.webp":X2,"./assets/chars/06bf-n.webp":Q2,"./assets/chars/06bf-r.webp":O2,"./assets/chars/06bf-s.webp":V2,"./assets/chars/06bf-u.webp":K2,"./assets/chars/06bm-g.webp":$2,"./assets/chars/06bm-n.webp":q2,"./assets/chars/06bm-r.webp":ef,"./assets/chars/06bm-s.webp":tf,"./assets/chars/06bm-u.webp":af,"./assets/chars/07af-g.webp":nf,"./assets/chars/07af-n.webp":rf,"./assets/chars/07af-r.webp":sf,"./assets/chars/07af-s.webp":cf,"./assets/chars/07af-u.webp":of,"./assets/chars/07am-g.webp":lf,"./assets/chars/07am-n.webp":pf,"./assets/chars/07am-r.webp":gf,"./assets/chars/07am-s.webp":df,"./assets/chars/07am-u.webp":uf,"./assets/chars/07bf-g.webp":mf,"./assets/chars/07bf-n.webp":ff,"./assets/chars/07bf-r.webp":If,"./assets/chars/07bf-s.webp":hf,"./assets/chars/07bf-u.webp":bf,"./assets/chars/07bm-g.webp":jf,"./assets/chars/07bm-n.webp":vf,"./assets/chars/07bm-r.webp":yf,"./assets/chars/07bm-s.webp":wf,"./assets/chars/07bm-u.webp":Mf,"./assets/chars/08af-g.webp":xf,"./assets/chars/08af-n.webp":Zf,"./assets/chars/08af-r.webp":Nf,"./assets/chars/08af-s.webp":kf,"./assets/chars/08af-u.webp":Cf,"./assets/chars/08am-g.webp":Sf,"./assets/chars/08am-n.webp":Af,"./assets/chars/08am-r.webp":Pf,"./assets/chars/08am-s.webp":Df,"./assets/chars/08am-u.webp":Bf,"./assets/chars/08bf-g.webp":zf,"./assets/chars/08bf-n.webp":Wf,"./assets/chars/08bf-r.webp":Tf,"./assets/chars/08bf-s.webp":Ef,"./assets/chars/08bf-u.webp":Rf,"./assets/chars/08bm-g.webp":Yf,"./assets/chars/08bm-n.webp":Hf,"./assets/chars/08bm-r.webp":_f,"./assets/chars/08bm-s.webp":Gf,"./assets/chars/08bm-u.webp":Lf,"./assets/chars/09af-g.webp":Jf,"./assets/chars/09af-n.webp":Uf,"./assets/chars/09af-r.webp":Ff,"./assets/chars/09af-s.webp":Xf,"./assets/chars/09af-u.webp":Qf,"./assets/chars/09am-g.webp":Of,"./assets/chars/09am-n.webp":Vf,"./assets/chars/09am-r.webp":Kf,"./assets/chars/09am-s.webp":$f,"./assets/chars/09am-u.webp":qf,"./assets/chars/09bm-g.webp":eI,"./assets/chars/09bm-n.webp":tI,"./assets/chars/09bm-r.webp":aI,"./assets/chars/09bm-s.webp":nI,"./assets/chars/09bm-u.webp":rI}),Ss={};Object.entries(pI).forEach(([e,t])=>{const a=/\/([^/]+)\.(png|webp|jpg)$/.exec(e);a&&(Ss[a[1]]=t)});const gI={n:"n",r:"r",s:"s",g:"ss",u:"u"},Lo={14:"A",10:"10",11:"J",12:"Q",13:"K"},dI=e=>e===1||e===2;function Bi({id:e,player:t,rarity:a,size:n="m",owned:r=!0,count:i}){const s=e?ks(e):null,o=s?s.player:t,c=s?s.rarity:a;if(!o)return null;const p=(ei.find(w=>w.id===c)||{}).name||"",j=Ss[`${o.key}-${c}`]||Ss[o.key],b=iI[o.key]||{},l=gI[c]||"n",I=s?Tr[s.suit]:null,v=s?`idx-${Lo[s.rank]||s.rank}-${I}`:"",h=s?rn[`./assets/cards/${v}.webp`]||rn[`./assets/cards/${v}.png`]:null;return g.jsxs("div",{className:`jp-pcard jp-pcard-${c} jp-pcf-${l} jp-pcard-size-${n}`+(r?"":" off"),style:{"--pc":o.color},"aria-label":`${p} ${o.name}${s?" "+s.label:""}(${o.storeName}・${o.prefName})${r?"":"(未入手)"}`,children:[g.jsx("span",{className:"jp-pc-art","aria-hidden":"true",children:r?j?g.jsx("img",{src:j,alt:""}):g.jsx("span",{className:"jp-pc-emoji",children:o.emoji}):g.jsx("span",{className:"jp-pc-emoji",children:"？"})}),uI.map(w=>g.jsx("span",{className:`jp-pc-tint jp-pc-${w}`,"aria-hidden":"true"},w)),g.jsx("img",{className:"jp-pc-frame",src:lI(`frame-${l}`),alt:"",draggable:"false"}),s&&(h?g.jsx("img",{className:"jp-pc-slot jp-pc-shield jp-pc-idximg",src:h,alt:"",draggable:"false"}):g.jsxs("span",{className:"jp-pc-slot jp-pc-shield"+(dI(s.suit)?" red":""),"aria-hidden":"true",children:[g.jsx("b",{children:g.jsx("u",{children:Lo[s.rank]||s.rank})}),g.jsx("i",{children:g.jsx("u",{children:hu[s.suit]})})]})),g.jsx("span",{className:"jp-pc-slot jp-pc-pref",children:g.jsx("u",{children:o.prefName})}),g.jsx("span",{className:"jp-pc-slot jp-pc-name",style:{"--nl":r?[...o.name].length:3},children:g.jsx("u",{children:r?o.name:"？？？"})}),g.jsx("span",{className:"jp-pc-slot jp-pc-store",style:{"--sl":o.storeName.length},children:g.jsx("u",{children:o.storeName})}),r?g.jsx("span",{className:"jp-pc-slot jp-pc-style",children:b.style||ou(o.style)}):null,r&&b.desc?g.jsx("span",{className:"jp-pc-slot jp-pc-desc",children:b.desc}):null,i>1&&g.jsxs("span",{className:"jp-pcard-cnt",children:["×",i]})]})}const uI=["shield","pref","name","store","style","desc"],mI={n:{shield:[45,33,134,143],pref:[173,27,455,75],name:[84,594,544,649],store:[144,664,485,693],style:[181,709,448,737],desc:[54,754,575,834]},r:{shield:[36,39,132,159],pref:[165,41,463,87],name:[89,565,540,620],store:[145,636,485,668],style:[179,684,451,713],desc:[53,730,576,817]},s:{shield:[50,56,140,156],pref:[180,47,448,91],name:[104,572,524,623],store:[155,638,473,667],style:[189,683,439,709],desc:[63,726,565,804]},ss:{shield:[46,62,141,166],pref:[187,51,442,93],name:[106,561,523,616],store:[159,633,469,660],style:[189,678,439,705],desc:[57,724,573,802]},u:{shield:[45,62,143,166],pref:[184,51,446,94],name:[100,575,528,624],store:[147,640,480,669],style:[182,684,444,712],desc:[54,729,574,803]}},On=(e,t)=>`${(e/t*100).toFixed(2)}%`,fI=Object.entries(mI).map(([e,t])=>Object.entries(t).map(([a,[n,r,i,s]])=>`.jp-pcf-${e} .jp-pc-${a}{left:${On(n,630)};top:${On(r,880)};width:${On(i-n,630)};height:${On(s-r,880)}}`).join(`
`)).join(`
`),II=`
@font-face{font-family:"SP Shippori";src:url(${sI}) format("woff2");font-weight:800;font-display:swap}
@font-face{font-family:"SP Cinzel";src:url(${cI}) format("woff2");font-weight:700;font-display:swap}
@font-face{font-family:"SP Cinzel Rank";src:url(${oI}) format("woff2");font-weight:900;font-display:swap}
/* プレイヤーカード(部品を重ねる。630 × 880 = 縦88・横63 の中の位置を % で) */
.jp-pcard{position:relative;display:block;aspect-ratio:63/88;align-self:start;container-type:inline-size;border-radius:1.9cqw;overflow:hidden;color:#fff;background:#0b0d1c;box-shadow:0 4px 14px rgba(0,0,0,.5);text-align:left}
.jp-pc-art{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:radial-gradient(120% 70% at 50% 35%,color-mix(in srgb,var(--pc) 70%,#fff 30%),var(--pc) 55%,color-mix(in srgb,var(--pc) 45%,#000 55%))}
.jp-pc-art img{width:100%;height:100%;object-fit:cover}
.jp-pc-emoji{font-size:40cqw;line-height:1;transform:translateY(-12cqw);filter:drop-shadow(0 3px 6px rgba(0,0,0,.45))}
.jp-pc-frame{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
/* 文字の板の位置(枠ごと。630 × 880 の中の px を % にする。ユーザーの枠 2026-11-03) */
.jp-pc-slot{position:absolute;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden;white-space:nowrap;line-height:1.15;pointer-events:none;text-shadow:0 1px 3px #000}
${fI}
.jp-pc-tint{position:absolute;background:linear-gradient(180deg,rgba(4,6,18,.5),rgba(4,6,18,.62));-webkit-backdrop-filter:blur(3px) saturate(.8);backdrop-filter:blur(3px) saturate(.8);clip-path:polygon(5% 0,95% 0,100% 50%,95% 100%,5% 100%,0 50%);pointer-events:none}
.jp-pc-tint.jp-pc-shield{clip-path:polygon(0 0,100% 0,100% 60%,50% 100%,0 60%)}
.jp-pc-tint.jp-pc-desc{clip-path:polygon(2% 0,98% 0,100% 14%,100% 86%,98% 100%,2% 100%,0 86%,0 14%)}
.jp-pc-slot u{text-decoration:none;display:block;overflow:hidden;text-overflow:clip}
/* 文字に金属の色(グラデーション)。影は外の箱に filter で付ける(透明な文字に text-shadow は使えない) */
.jp-pc-slot.jp-pc-shield,.jp-pc-slot.jp-pc-pref,.jp-pc-slot.jp-pc-name,.jp-pc-slot.jp-pc-store{text-shadow:none;filter:drop-shadow(0 0 .25cqw #000) drop-shadow(0 0 .25cqw #000) drop-shadow(0 .35cqw .2cqw rgba(0,0,0,.9)) drop-shadow(0 0 1.2cqw rgba(0,0,0,.7))}
.jp-pc-shield u,.jp-pc-pref u,.jp-pc-name u,.jp-pc-store u{-webkit-background-clip:text;background-clip:text;color:transparent;padding:0 .4cqw}
.jp-pc-shield{flex-direction:column;gap:0;padding-bottom:2.4cqw;box-sizing:border-box}
.jp-pc-shield b{font-family:"SP Cinzel Rank",var(--serif,serif);font-size:9.6cqw;font-weight:900;line-height:1;letter-spacing:-.04em}
.jp-pc-shield i{font-style:normal;font-size:6.6cqw;line-height:1;margin-top:-.4cqw}
.jp-pc-shield u{background-image:linear-gradient(180deg,#FFFFFF 0%,#E9EEF7 40%,#9AA6BC 60%,#F4F7FC 100%)}
.jp-pc-shield.red u{background-image:linear-gradient(180deg,#FFD0C4 0%,#FF6A55 45%,#B8160E 62%,#FF8A70 100%)}
.jp-pc-idximg{object-fit:contain}
.jp-pc-pref{font-family:"SP Shippori",var(--serif,serif);font-size:4.6cqw;font-weight:800;letter-spacing:.3em}
.jp-pc-pref u{padding-left:.3em;background-image:linear-gradient(180deg,#FFFBEA 0%,#F3D58A 50%,#C8963A 100%)}
.jp-pc-name{font-family:"SP Shippori",var(--serif,serif);font-weight:800;font-size:min(7cqw,calc(58cqw / var(--nl,1)));letter-spacing:.04em}
.jp-pc-name u{line-height:1.2;background-image:linear-gradient(180deg,#FFFDF3 0%,#FCE7A8 30%,#E9B748 52%,#A8741E 64%,#F6D27A 100%)}
.jp-pc-store{font-family:"SP Cinzel",var(--serif,serif);font-size:min(3.7cqw,calc(50cqw / var(--sl,1)));font-weight:700;letter-spacing:.14em}
.jp-pc-store u{padding-left:.14em;background-image:linear-gradient(180deg,#FFFFFF 0%,#E8D9AE 55%,#B99A57 100%)}
.jp-pc-style{font-family:"SP Shippori",var(--serif,serif);font-size:3.4cqw;font-weight:800;letter-spacing:.08em;color:#F1F3F8}
.jp-pc-slot.jp-pc-style,.jp-pc-slot.jp-pc-desc{text-shadow:0 0 .3cqw #000,0 0 .3cqw #000,0 .3cqw .5cqw #000,0 0 1.2cqw rgba(0,0,0,.8)}
.jp-pc-desc{flex-direction:column;white-space:pre-line;font-size:3cqw;line-height:1.35;padding:0 6%;box-sizing:border-box}
.jp-pcard-cnt{position:absolute;top:22%;left:4%;font-size:4.5cqw;font-weight:800;background:rgba(0,0,0,.6);border-radius:2cqw;padding:0 1.5cqw}
.jp-pcard.off .jp-pc-art,.jp-pcard.off .jp-pc-frame{filter:grayscale(1) brightness(.45)}
.jp-pcard-s{box-shadow:0 0 14px rgba(220,230,245,.45),0 4px 14px rgba(0,0,0,.5)}
.jp-pcard-ss{box-shadow:0 0 16px rgba(255,200,80,.55),0 4px 14px rgba(0,0,0,.5)}
.jp-pcard-u{box-shadow:0 0 18px rgba(255,140,240,.55),0 4px 14px rgba(0,0,0,.5)}
.jp-pcard-size-m{width:240px}
/* 小さいカード(図鑑・ピックアップ): 文字は名前だけ */
.jp-pcard-size-s .jp-pc-desc,.jp-pcard-size-s .jp-pc-style,.jp-pcard-size-s .jp-pc-store,.jp-pcard-size-s .jp-pc-pref{display:none}
.jp-pcard-size-s .jp-pc-name{font-size:min(10cqw,calc(62cqw / var(--nl,1)))}
.jp-pcard-row{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.jp-prefs{display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch}
.jp-prefs .jp-chip{flex:none}
.jp-prefs .jp-chip small{opacity:.75}
.jp-combos{list-style:none;margin:0;padding:0;display:grid;gap:8px}
.jp-combos li{display:grid;gap:5px;padding:8px 10px;border-radius:10px;background:rgba(0,0,0,.25);border:1px solid rgba(224,176,74,.25)}
.jp-combos li.done{border-color:#F2C25A;box-shadow:0 0 10px rgba(255,200,80,.35)}
.jp-combo-h{display:flex;justify-content:space-between;align-items:baseline;gap:8px}
.jp-combo-h b{color:#F2D08A}.jp-combos li.done .jp-combo-h span{color:var(--mint);font-weight:700}
.jp-combo-cards{display:flex;gap:4px;flex-wrap:wrap}
.jp-section > .jp-combo-cards{margin-bottom:8px}
.jp-mini{display:inline-flex;flex-direction:column;align-items:center;min-width:34px;padding:2px 4px;border-radius:6px;background:#2A3050;color:#8A93B0;font-weight:800;font-size:13px;line-height:1.1}
.jp-mini small{font-size:9px;font-weight:700}
.jp-mini.on{background:#F3F0E8;color:#1B1F2A}.jp-mini.on.red{color:#C73A2B}
.jp-pcard-cell{display:grid;gap:4px}
.jp-fuse-btn{min-height:30px;border:0;border-radius:8px;font-weight:800;font-size:12px;color:#241A05;background:linear-gradient(180deg,#FFE79A,#E0B04A 55%,#B07F22);box-shadow:0 0 8px rgba(255,200,80,.5);cursor:pointer}
.jp-fuse-btn:disabled{opacity:.6}
.jp-pcard-row4{grid-template-columns:repeat(4,1fr);gap:6px}
.jp-pcard-row2{grid-template-columns:repeat(2,minmax(0,140px));gap:10px;justify-content:center}
.jp-pcard-pick{display:grid;gap:4px;background:none;border:0;padding:0;color:inherit;cursor:pointer;text-align:center}
.jp-pcard-pick small{font-size:9px;color:#C9CFE0;line-height:1.3}
.jp-pcard-size-s{width:100%}
.jp-pbook-head{display:grid;grid-template-columns:minmax(0,46%) 1fr;gap:14px;align-items:center;margin-bottom:4px}
.jp-pbook-head .jp-pcard{width:100%}
.jp-pbook-info{min-width:0;display:grid;gap:6px}
.jp-pbook-info h2{margin:0;font-family:"SP Shippori",var(--serif),serif;font-size:clamp(20px,6vw,26px);line-height:1.2}
.jp-pbook-store{margin:0;font-family:"SP Cinzel",var(--serif),serif;font-size:clamp(12px,3.6vw,15px);font-weight:700;letter-spacing:.04em;color:#F2D08A;line-height:1.3}
.jp-pbook-store small{display:block;font-family:var(--sans);font-weight:600;letter-spacing:0;color:#C9CFE0;font-size:.9em}
.jp-pbook-style{margin:0;justify-self:start;font-size:13px;font-weight:700;color:#1E1606;background:linear-gradient(180deg,#F8DE96,#C9952F);border-radius:999px;padding:2px 12px}
.jp-pbook-earned{font-size:12px;font-weight:600;color:#C9CFE0;margin-left:6px}
/* 獲得済みの表(版40): 18行を詰める。そろったら明るく、途中は少し明るく */
.jp-own-table,.jp-gold-table{border-spacing:0 2px}
.jp-own-table th,.jp-gold-table th{font-size:clamp(12px,3.6vw,15px)}
.jp-own-table td,.jp-gold-table td{padding:3px 4px;font-size:clamp(11px,3.3vw,13px);text-align:center;color:#7F88A6}
.jp-own-table td small{font-size:.75em;opacity:.7}
.jp-own-table td.part{color:#E9EDF8}
.jp-own-table td.done,.jp-gold-table td.done{color:#FFE08A;font-weight:800;background:rgba(224,176,74,.16)}
.jp-own-table tbody th,.jp-gold-table tbody th{padding:3px 6px;text-align:center;width:3.6em}
.jp-own-table th .red,.jp-gold-table th .red{color:#E5534B}
.jp-own-table thead th,.jp-gold-table thead th{text-align:center}
.jp-own-table tr.all th,.jp-gold-table tr.all th{font-size:11px}
.jp-own-table tr.all td,.jp-gold-table tr.all td{border-top:1px solid rgba(224,176,74,.4)}
.jp-rar-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-top:6px}
.jp-rar-tabs small{opacity:.75}
.jp-combo-table{width:100%;border-collapse:separate;border-spacing:0 4px;font-size:13px}
.jp-combo-table th{text-align:left;font-weight:700;color:#F2D08A;padding:4px 6px}
.jp-combo-table thead th{color:#C9CFE0;font-size:11px;text-align:right}
.jp-combo-table thead th:first-child{text-align:left}
.jp-combo-table td{text-align:right;padding:6px;background:rgba(0,0,0,.25);font-variant-numeric:tabular-nums}
.jp-combo-table td.done{color:var(--mint);font-weight:800;background:rgba(80,200,150,.12)}
/* 2026-11-03: 役の名前(ワンペアなど)が途中で割れないように(折り返すのは「ストレート」「ロイヤル」のあとだけ)。数字の欄を少し詰め、狭い画面では文字を小さく */
.jp-combo-table tbody th{word-break:keep-all;overflow-wrap:normal;padding-right:4px;font-size:clamp(11px,3.2vw,13px)}
.jp-combo-table td{padding:6px clamp(3px,1.2vw,6px);font-size:clamp(11px,3.2vw,13px)}
.jp-face-grid{display:grid;grid-template-columns:repeat(13,1fr);gap:3px}
.jp-face-grid .jp-mini{min-width:0;padding:3px 0;font-size:11px}
.jp-face-grid .jp-mini small{font-size:8px}
.jp-fuse-list{display:grid;gap:6px;margin-top:10px}
.jp-fuse-h{margin:6px 0 0;font-size:15px;color:#f2d08a}
.jp-gacha-card{display:flex;justify-content:center;padding:6px 0;animation:jp-in .35s ease-out}
`,hI={blue:{r:.75,s:.2,g:.045,u:.005},gold:{s:.75,g:.24,u:.01}};function bI(e){const t=e.reduce((r,i)=>r+i.weight,0),a=Object.fromEntries(["n","r","s","g","u"].map(r=>[r,e.filter(i=>i.card===r).reduce((i,s)=>i+s.weight,0)/t])),n={};for(const[r,i]of Object.entries(hI)){const s=Math.min(...Object.entries(i).map(([o,c])=>a[o]/c))*.5;n[r]=Object.fromEntries(Object.entries(i).map(([o,c])=>[o,c*s]));for(const[o,c]of Object.entries(n[r]))a[o]=Math.max(0,a[o]-c)}return n.rainbow={u:a.u*.5},a.u-=n.rainbow.u,n.white=a,n}function jI(e,t,a=Math.random()){const n=bI(e),r=Object.values(n).reduce((s,o)=>s+(o[t]||0),0);let i=a*r;for(const s of["blue","gold","rainbow","white"])if(i-=n[s][t]||0,i<0)return s;return"white"}const ti=Object.freeze({gather:1600,chest:700,launch:1900,mystery:950}),pr=Object.values(ti).reduce((e,t)=>e+t,0),fp=Object.freeze(Object.keys(ti)),ai=Object.freeze({...ti,rise:900,hold:1700,strike:1200,veil:5100,settle:1800}),Je=Object.freeze({...ai,veil:4050,settle:800}),Gt=Object.freeze({start:0,opening:Je.gather,launch:Je.gather+Je.chest,reveal:Je.gather+Je.chest+Je.launch,branch:pr,settle:pr+Je.veil,result:pr+Je.veil+Je.settle}),K=Object.freeze({...Je,gather:700,chest:500,launch:1450,mystery:650,veil:2650,settle:550});Object.freeze({start:0,opening:K.gather,launch:K.gather+K.chest,reveal:K.gather+K.chest+K.launch,branch:K.gather+K.chest+K.launch+K.mystery,settle:K.gather+K.chest+K.launch+K.mystery+K.veil,result:K.gather+K.chest+K.launch+K.mystery+K.veil+K.settle});const sn=(e,t="r",a="classic")=>(t==="n"&&a==="fast"?K:t==="n"?Je:ai)[e]||0,Jo=Object.freeze({white:Object.freeze(["white"]),blue:Object.freeze(["white","blue"]),gold:Object.freeze(["white","blue","gold"]),rainbow:Object.freeze(["white","blue","gold","rainbow"])});ai.hold;const ra=Object.freeze({bronze:0,silver:1,gold:2});function vI(e,t){const a=Object.hasOwn(ra,t)?t:"bronze",n=Object.hasOwn(ra,e)?e:a,r=ra[n]>ra[a]?a:n;return{tabletStart:r,tabletFinish:a,stoneUpgrading:ra[r]<ra[a]}}function kc(e,t,a=.999,n=null){const r=Jo[e]||Jo.white,i=n&&r.includes(n)?n:r[Math.min(r.length-1,Math.floor(Math.max(0,Math.min(.999999,Number.isFinite(a)?a:.999))*r.length))],s=i!==e;return{promotionFrom:i,promotionTo:e,promoted:s,...vI(s?t==="gold"?"silver":"bronze":t,t)}}function yI(e,t,a){const n=jI(e,t,a[0]),r=n==="rainbow"?"gold":n==="gold"?a[1]<.65?"gold":"silver":n==="blue"&&a[1]<.65?"silver":"bronze";return{cue:n,tablet:r,...kc(n,r,a[4]),lightning:n==="rainbow"?"chime":n==="gold"||n==="blue"&&a[2]<.25?"large":"normal",aura:n,veil:n}}const ea=[{label:"N・カード直接表示",rarity:"n",tablet:"bronze",lightning:"normal",aura:"white",veil:"white",cue:"white"},{label:"銀石板→カード裏→表（R）",postStoneSide:"back",rarity:"r",tablet:"silver",lightning:"normal",aura:"blue",veil:"blue",cue:"blue"},{label:"銀石板→カード表（SR以上確定）",postStoneSide:"front",rarity:"s",tablet:"silver",lightning:"large",aura:"gold",veil:"gold",cue:"gold"},{label:"金石板→カード表（SR以上確定）",postStoneSide:"front",rarity:"g",tablet:"gold",lightning:"large",aura:"gold",veil:"gold",cue:"gold"},{label:"金石板→カード表（UR）",postStoneSide:"front",rarity:"u",tablet:"gold",lightning:"chime",aura:"rainbow",veil:"rainbow",cue:"rainbow"}];ea.push({label:"銀石板→カード裏→表（SR）",rarity:"s",postStoneSide:"back",tablet:"silver",lightning:"large",aura:"gold",veil:"gold",cue:"gold"},{label:"金石板→カード裏→表（SSR）",rarity:"g",postStoneSide:"back",tablet:"gold",lightning:"large",aura:"gold",veil:"gold",cue:"gold"},{label:"金石板→カード裏→表（UR）",rarity:"u",postStoneSide:"back",tablet:"gold",lightning:"chime",aura:"rainbow",veil:"rainbow",cue:"rainbow"});ea.push({label:"白→青・銀石板・通常雷（R）",rarity:"r",postStoneSide:"back",cue:"blue",aura:"blue",veil:"blue",tablet:"silver",lightning:"normal",promotionFrom:"white"},{label:"白→青・銀石板・大雷（SR）",rarity:"s",postStoneSide:"front",cue:"blue",aura:"blue",veil:"blue",tablet:"silver",lightning:"large",promotionFrom:"white"},{label:"青→金・銀石板・大雷（SR）",rarity:"s",postStoneSide:"front",cue:"gold",aura:"gold",veil:"gold",tablet:"silver",lightning:"large",promotionFrom:"blue"},{label:"青→金・金石板・大雷（SSR）",rarity:"g",postStoneSide:"front",cue:"gold",aura:"gold",veil:"gold",tablet:"gold",lightning:"large",promotionFrom:"blue"},{label:"金→虹・金石板・キュイン（UR）",rarity:"u",postStoneSide:"front",cue:"rainbow",aura:"rainbow",veil:"rainbow",tablet:"gold",lightning:"chime",promotionFrom:"gold"},{label:"白のまま・銅石板・通常雷（R）",rarity:"r",postStoneSide:"back",cue:"white",aura:"white",veil:"white",tablet:"bronze",lightning:"normal"},{label:"青のまま・銀石板・通常雷（R）",rarity:"r",postStoneSide:"back",cue:"blue",aura:"blue",veil:"blue",tablet:"silver",lightning:"normal",promotionFrom:"blue"},{label:"金のまま・金石板・大雷（SSR）",rarity:"g",postStoneSide:"front",cue:"gold",aura:"gold",veil:"gold",tablet:"gold",lightning:"large",promotionFrom:"gold"},{label:"虹のまま・金石板・キュイン（UR）",rarity:"u",postStoneSide:"front",cue:"rainbow",aura:"rainbow",veil:"rainbow",tablet:"gold",lightning:"chime",promotionFrom:"rainbow"});ea.push({label:"白→金・金石板・大雷（SSR）",rarity:"g",postStoneSide:"front",cue:"gold",aura:"gold",veil:"gold",tablet:"gold",lightning:"large",promotionFrom:"white"},{label:"白→虹・金石板・キュイン（UR）",rarity:"u",postStoneSide:"front",cue:"rainbow",aura:"rainbow",veil:"rainbow",tablet:"gold",lightning:"chime",promotionFrom:"white"},{label:"青→虹・金石板・キュイン（UR）",rarity:"u",postStoneSide:"front",cue:"rainbow",aura:"rainbow",veil:"rainbow",tablet:"gold",lightning:"chime",promotionFrom:"blue"});ea.forEach(e=>{const t=kc(e.cue,e.tablet,.999,e.promotionFrom);Object.assign(e,t)});ea.push(...["n","r","s","g"].map((e,t)=>({label:`${["N","R","SR","SSR"][t]}結果 → フリーズ → UR（手動確認）`,rarity:"u",temporaryRarity:e,freeze:!0,tablet:"bronze",lightning:"normal",aura:"blue",veil:"blue",cue:"blue"})));const wI=.5;function MI(e,t=1,a=null){return["s","g","u"].includes(e)?a==="front"||a==="back"?a:Number.isFinite(t)&&t<wI?"front":"back":"back"}function xI(e,t={}){const a=e==="u"&&t.freeze===!0&&["n","r","s","g"].includes(t.temporaryRarity),n=a?t.temporaryRarity:e;return{reversal:a,shownRarity:n,postStoneSide:n==="n"?"none":MI(n,t.postStoneRoll,t.postStoneSide),phases:n==="n"?["gather","chest","launch","mystery","veil","settle","result"]:["gather","chest","launch","mystery","rise","hold","strike","veil","settle","result"]}}const ZI=new Set(["launch","mystery","rise","hold","strike","veil","settle","result"]),NI=new Set(["chest","launch","mystery","veil","settle","result"]);function kI(e,t){return e.shownRarity==="n"?NI.has(t)?"direct-card":"none":ZI.has(t)?"sealed-card":"none"}const CI=Object.freeze({gather:{stem:"gather",mode:"chest-full"},chest:{stem:"chest",mode:"chest-full"},launch:{stem:"launch-atmosphere",mode:"background-only"},rise:{stem:"rise-atmosphere",mode:"background-only"},hold:{stem:"hold-atmosphere",mode:"background-only"},strike:{stem:"strike-atmosphere",mode:"background-only"},veil:{stem:"veil-atmosphere",mode:"background-only"},settle:{stem:"settle-atmosphere",mode:"background-only"}});function Cc(e){const t=CI[e];return t?Object.freeze({phase:e,...t,durationMs:ai[e]}):null}function SI(e,t="white"){const a=Cc(e);if(!a)return[];const n=["white","blue","gold","silver","rainbow"].includes(t)?t:"white";return e==="gather"||e==="chest"?[`chest-burst-${n}.mp4`,"chest-burst.mp4"]:[`${a.stem}-${n}.mp4`,`${a.stem}.mp4`]}function AI(e){return Cc(e)?.mode==="chest-full"}function PI(e){return/^chest-burst(?:-(?:white|blue|silver|gold|rainbow))?\.mp4$/.test(e)}const DI=Object.assign({});function BI({phase:e,color:t,onFullMoviePlaying:a}){const n=Cc(e),r=E.useMemo(()=>{for(const l of SI(e,t)){const I=DI[`./assets/gacha/film/${l}`];if(I)return{src:I,sharedIntro:PI(l)}}return null},[e,t]),i=r?.src||null,s=E.useRef(null),[o,c]=E.useState(!1),[p,j]=E.useState(null),b=!!i&&p===i;return E.useEffect(()=>{if(c(!1),a?.(!1),!i)return;const l=s.current;if(l){try{l.currentTime=0;const I=l.play();I?.catch&&I.catch(()=>{j(i),a?.(!1)})}catch{j(i)}return()=>{l.pause(),a?.(!1)}}},[i,a]),E.useEffect(()=>{if(!i||b||!r?.sharedIntro||e!=="chest")return;const l=s.current;if(l&&l.currentTime<.075)try{l.currentTime=.1}catch{}},[i,r?.sharedIntro,e,b]),!n||!i||b?null:g.jsx("video",{ref:s,className:`jp-gc-film-video ${o?"is-playing":""}`,src:i,playsInline:!0,muted:!0,autoPlay:!0,preload:"auto",disablePictureInPicture:!0,"aria-hidden":"true",tabIndex:-1,draggable:!1,onPlaying:()=>{c(!0),AI(e)&&a?.(!0)},onEnded:()=>{c(!1),a?.(!1)},onError:()=>{j(i),c(!1),a?.(!1)},"data-film-phase":e,"data-film-role":n.mode},i)}const As=Gt.result,ve=Object.freeze({opening:Gt.opening/1e3,flight:Gt.launch/1e3,unveil:Gt.reveal/1e3,face:(Gt.reveal+2500)/1e3,settle:Gt.settle/1e3}),xn=Math.PI*2,Dt=(e,t=0,a=1)=>Math.max(t,Math.min(a,e)),Ft=(e,t,a)=>{const n=Dt((a-e)/(t-e));return n*n*(3-2*n)},Uo=(e,t,a)=>Math.max(0,1-Math.abs(e-t)/a),ia=e=>{const t=Math.sin(e*91.453+17.71)*43758.5453;return t-Math.floor(t)},Ip=e=>({phase:ia(e*3.13)*xn,orbit:.12+ia(e*6.27)*.9,depth:.35+ia(e*11.71)*1.8,speed:.25+ia(e*5.11)*.85,twinkle:ia(e*9.17)*xn,size:.65+ia(e*7.93)*1.8}),zI=Array.from({length:76},(e,t)=>Ip(t+1)),WI=Array.from({length:38},(e,t)=>Ip(t+215));function sa(e,t,a,n,r,i,s=1){i<=.005||(e.strokeStyle=`rgba(220,239,255,${Dt(i)})`,e.lineWidth=s,e.beginPath(),e.moveTo(t,a),e.lineTo(n,r),e.stroke())}function Vn(e,t,a,n,r,i=2,s=.58){r<=.005||(e.strokeStyle=`rgba(204,232,255,${Dt(r)})`,e.lineWidth=i,e.beginPath(),e.ellipse(t,a,n,n*s,0,0,xn),e.stroke())}function Fo(e,t,a,n,r){if(r<=.005)return;const i=e.createRadialGradient(t,a,0,t,a,n);i.addColorStop(0,`rgba(255,255,247,${Dt(r)})`),i.addColorStop(.2,`rgba(176,216,255,${Dt(r*.55)})`),i.addColorStop(.55,`rgba(107,166,255,${Dt(r*.15)})`),i.addColorStop(1,"rgba(85,146,255,0)"),e.fillStyle=i,e.fillRect(t-n,a-n,n*2,n*2)}function TI(e){const t=Uo(e,ve.opening+.18,.46),a=Ft(ve.flight-.06,ve.flight+.22,e)*(1-Ft(ve.unveil-.24,ve.unveil+.48,e)),n=Uo(e,ve.face,.47),r=1-Ft(ve.settle-.12,As/1e3,e);return{opening:t,flight:a,face:n,fade:r}}function EI(e,t,a,n,r,i){const s=Dt(n,0,As/1e3),o=TI(s),c=t*.5,p=a*.47,j=Math.min(t,a*.8);if(e.clearRect(0,0,t,a),e.save(),e.globalCompositeOperation="lighter",r){const u=Math.max(o.opening*.78,o.face*.9);if(u>.015){sa(e,c-j*.49,p,c+j*.49,p,u*.56,1.5),Fo(e,c,p,Math.min(t*.48,200),u*.15);for(let d=0;d<6;d++){const m=c+Math.sin(d*2.3999+s*1.5)*j*.38,f=p+Math.cos(d*1.71+s*.9)*j*.31;sa(e,m-12,f,m+12,f,u*.3,1)}}}else{Fo(e,c,p,j*(.43+.14*o.flight),.09+.13*o.opening+.16*o.face);const u=s*.09;for(let f=0;f<9;f++){const y=f*xn/9+u,M=(.028+o.opening*.21+o.flight*.1+o.face*.22)*o.fade,N=j*.07,k=j*(.57+.06*Math.sin(s*.55+f));sa(e,c+Math.cos(y)*N,p+Math.sin(y)*N*.6,c+Math.cos(y)*k,p+Math.sin(y)*k*.75,M,f%3===0?2.2:.9)}const d=s-(ve.opening+.16);if(d>=0&&d<1.1){const f=d/1.1;Vn(e,c,p,j*(.1+f*.75),Math.pow(1-f,2)*.85,5*(1-f)+1),Vn(e,c,p,j*(.08+f*.56),Math.pow(1-f,2)*.48,1.4)}const m=s-ve.face;if(m>=0&&m<1.25){const f=m/1.25;Vn(e,c,p,j*(.21+f*.59),Math.pow(1-f,2)*.75,3.4*(1-f)+.7,.85),Vn(e,c,p,j*(.17+f*.77),Math.pow(1-f,2)*.43,1.1,.85)}}const b=r?WI:zI,l=i?r?18:42:b.length,I=Ft(0,ve.opening,s),v=Ft(ve.opening+.06,ve.flight+.35,s),h=Ft(ve.unveil,ve.face,s),w=1-Ft(ve.settle-.1,As/1e3,s);for(let u=0;u<l;u++){const d=b[u],m=d.phase+s*(r?.15:.06)*d.speed,f=(d.orbit*.48+.2)*(1-I*.35+v*.58)*(r?1.18:1),y=c+Math.cos(m)*j*f,M=p+Math.sin(m)*j*f*.98-Math.sin(s*(d.speed+.15)+d.phase)*(r?20:7);if(r&&h>.25&&Math.abs(y-c)<Math.min(t*.32,145)&&Math.abs(M-p)<Math.min(t*.45,184))continue;const N=.4+.6*Math.pow(Math.max(0,Math.sin(s*(2+d.speed)+d.twinkle)),4),k=(.08+d.depth*.12+o.opening*.3+o.flight*.22+o.face*.34)*N*w*(r?.9:.65);if(!(k<=.004)){if(e.fillStyle=`rgba(229,243,255,${Dt(k)})`,e.beginPath(),e.arc(y,M,d.size*(r?1.1:.75),0,xn),e.fill(),d.depth>1.2&&N>.66){const B=k*.74,z=(r?11:6)*d.depth*N;sa(e,y-z,M,y+z,M,B,r?1.25:.65),sa(e,y,M-z*.7,y,M+z*.7,B*.75,.7)}if(o.flight>.08&&r&&u%3===0){const B=(12+d.depth*18)*o.flight;sa(e,y,M+B*.45,y-(y-c)*.06,M+B,k*.8,1)}}}e.restore()}const Xo={position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",display:"block"};function RI({reducedMotion:e=!1,initialOffsetMs:t=0}){const a=E.useRef(null),n=E.useRef(null);return E.useEffect(()=>{if(e)return;const r=[a.current,n.current];if(r.some(I=>!I))return;const i=r.map(I=>I.getContext("2d",{alpha:!0}));if(i.some(I=>!I))return;let s=0,o=-1/0;const c=performance.now(),p=()=>r.map((I,v)=>{const h=I.clientWidth,w=I.clientHeight,u=Math.min(window.devicePixelRatio||1,1.5,Math.sqrt(85e4/Math.max(1,h*w)));return I.width=Math.max(1,Math.round(h*u)),I.height=Math.max(1,Math.round(w*u)),i[v].setTransform(u,0,0,u,0,0),{w:h,h:w}});let j=p();const b=()=>{j=p()};window.addEventListener("resize",b);const l=I=>{if(s=requestAnimationFrame(l),document.hidden||I-o<1e3/30)return;o=I;const v=(I-c+t)/1e3,h=window.innerWidth<=430;j.forEach(({w,h:u},d)=>{w&&u&&EI(i[d],w,u,v,d===1,h)})};return s=requestAnimationFrame(l),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",b)}},[e,t]),e?null:g.jsxs(g.Fragment,{children:[g.jsx("canvas",{ref:a,className:"jp-gc-n-depth-back",style:{...Xo,zIndex:1},"aria-hidden":"true"}),g.jsx("canvas",{ref:n,className:"jp-gc-n-depth-front",style:{...Xo,zIndex:4},"aria-hidden":"true"})]})}const ye=Math.PI*2,Y=(e,t=0,a=1)=>Math.max(t,Math.min(a,e)),ce=(e,t,a)=>{const n=Y((a-e)/(t-e));return n*n*(3-2*n)},de=e=>{const t=Math.sin(e*117.31+82.61)*43758.5453;return t-Math.floor(t)},YI=Array.from({length:162},(e,t)=>({angle:de(t*9+1)*ye,radius:.09+de(t*9+2)*.73,layer:de(t*9+3),phase:de(t*9+4)*ye,speed:.25+de(t*9+5)*1.4,twinkle:de(t*9+6)*ye,length:.8+de(t*9+7)*1.8,weight:de(t*9+8)})),HI=92,_I=162,Qo={position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",display:"block"},hp=(e,t)=>({buildup:ce(0,t.opening,e),opening:ce(t.opening,t.opening+.22,e)*(1-ce(t.opening+.44,t.launch+.17,e)),flight:ce(t.launch,t.launch+.4,e),release:ce(t.release-.31,t.release,e),pulse:Math.exp(-Math.pow((e-(t.opening+.2))/.19,2))});function Te(e,t,a,n,r,i,s=1){i<=.005||(e.beginPath(),e.moveTo(t,a),e.lineTo(t+Math.cos(n)*r,a+Math.sin(n)*r),e.lineWidth=s,e.strokeStyle=`rgba(210,237,255,${Y(i)})`,e.stroke())}function ct(e,t,a,n,r){if(r<=.005)return;const i=e.createRadialGradient(t,a,0,t,a,n);i.addColorStop(0,`rgba(255,255,250,${Y(r)})`),i.addColorStop(.13,`rgba(238,246,255,${Y(r*.86)})`),i.addColorStop(.4,`rgba(138,204,255,${Y(r*.37)})`),i.addColorStop(.75,`rgba(73,131,235,${Y(r*.07)})`),i.addColorStop(1,"rgba(73,131,235,0)"),e.fillStyle=i,e.fillRect(t-n,a-n,n*2,n*2)}const Oo=Array.from({length:88},(e,t)=>({angle:de(t*11+13)*ye,orbit:.15+de(t*11+14)*.93,speed:.15+de(t*11+15)*.52,depth:.34+de(t*11+16)*.66,size:.4+de(t*11+17)*1.6,phase:de(t*11+18)*ye}));function Er(e,t,a,n,r,i,s,o=1,c="214,234,255"){s<.004||(e.beginPath(),e.ellipse(t,a,n,r,i,0,ye),e.strokeStyle=`rgba(${c},${Y(s)})`,e.lineWidth=o,e.stroke())}function GI(e,t,a,n,r,i){e.clearRect(0,0,t,a);const s=t*.5,o=a*.47,c=Math.min(t,a*.78),p=hp(n,r),j=ce(r.opening+.1,r.launch+1.13,n),b=1-p.release,l=(.18+.4*p.buildup+.43*p.opening+.31*p.flight)*b,I=Math.sin(n*.38)*c*.028;e.save(),e.globalCompositeOperation="lighter",ct(e,s+I,o-c*.03,c*.9,l*.11);for(let h of[-1,1])for(let w=0;w<5;w++){const u=w/5,d=h*(.28+u*.37)+n*.024,m=c*(.3+u*.12);e.beginPath(),e.moveTo(s+h*c*.018,o+c*.18),e.bezierCurveTo(s+h*m*.55,o-c*(.44+u*.06),s+h*m*(1.22+.2*Math.sin(n*.6+w)),o-c*(.35-u*.15),s+h*m*(.7+u*.25),o+c*(.31+u*.055));const f=e.createLinearGradient(s,o-c*.46,s,o+c*.39);f.addColorStop(0,`rgba(148,196,255,${Y(l*(.065+u*.018))})`),f.addColorStop(.45,`rgba(224,246,255,${Y(l*(.14-u*.02))})`),f.addColorStop(1,"rgba(122,186,255,0)"),e.strokeStyle=f,e.lineWidth=1+w%3*.5,e.stroke(),(w===1||w===4)&&Er(e,s+h*c*.025,o-c*.06,c*(.27+.09*u),c*(.09+.035*u),d,l*.16,1.3,w===1?"245,225,181":"139,204,255")}for(let h=0;h<5;h++){const w=(h%2?1:-1)*n*(.1+h*.012)+h*.63;Er(e,s,o-c*.06,c*(.28+h*.082)*(1+.03*j),c*(.1+h*.024),w,l*(h===0?.18:.07),h===0?1.6:.75,h%2?"243,220,174":"172,215,255")}const v=i?48:Oo.length;for(let h=0;h<v;h++){const w=Oo[h],u=w.angle+n*w.speed*(h%2?1:-1)*.1,d=c*w.orbit*(.58+.21*j),m=s+Math.cos(u)*d,f=o+Math.sin(u)*d*.76+Math.sin(n*.44+w.phase)*9,y=l*(.12+w.depth*.25)*(.45+.55*Math.sin(n*1.4+w.phase)**2);e.fillStyle=`rgba(214,235,255,${Y(y)})`,e.beginPath(),e.arc(m,f,w.size,0,ye),e.fill(),w.depth>.81&&h%5===0&&Te(e,m-5,f,0,10,y*.6,.7)}e.restore()}function LI(e,t,a,n,r,i,s){if(s<=.007)return;const o=ce(i.opening+.1,i.launch+1.13,r),c=n*(.12+.31*o);e.save();for(let p=0;p<12;p++){const j=p%2?-1:1,b=p*2.39996+r*(p%3===0?1.45:-1.06),l=t+Math.sin(b)*c*.68,I=a+Math.cos(b)*c*.48,v=n*(.08+.065*(p%4)),h=s*(.18+.22*Math.sin(p*3.7+r*2)**2);e.beginPath(),e.moveTo(l,I-v),e.bezierCurveTo(l+j*v*1.7,I-v*.34,l-j*v*1.2,I+v*.44,l+Math.sin(b)*v*.7,I+v*1.6),e.strokeStyle=`rgba(${p%4===0?"255,226,168":"174,226,255"},${Y(h)})`,e.lineWidth=p%3===0?1.6:.68,e.stroke()}e.restore()}function JI(e,t,a,n,r,i){const s=ce(i.opening+.1,i.launch+1.13,r),o=ce(i.opening+.08,i.opening+.25,r)*(1-ce(i.release-.13,i.release,r));if(o<.007)return;const c=n*(.058+.168*s),p=c*88/63;e.save(),e.globalCompositeOperation="source-over",e.translate(t,a),e.rotate(Math.sin(r*1.85)*.014),e.shadowBlur=Math.max(19,n*.072),e.shadowColor=`rgba(223,245,255,${Y(o*.94)})`;const j=e.createLinearGradient(-c,-p,c,p);j.addColorStop(0,`rgba(232,248,255,${Y(o*.34)})`),j.addColorStop(.22,`rgba(255,255,255,${Y(o*.48)})`),j.addColorStop(.55,`rgba(255,255,255,${Y(o*.55)})`),j.addColorStop(.83,`rgba(244,252,255,${Y(o*.42)})`),j.addColorStop(1,`rgba(213,238,255,${Y(o*.37)})`),e.fillStyle=j,e.fillRect(-c,-p,2*c,2*p),e.shadowBlur=0;const b=.27+.2*Math.sin(r*5.4)**2;e.fillStyle=`rgba(255,255,255,${Y(o*b)})`,e.fillRect(-c*.87,-p*.96,Math.max(1.5,n*.006),p*1.92),e.fillStyle=`rgba(240,251,255,${Y(o*.23)})`,e.fillRect(c*.71,-p*.92,Math.max(1.1,n*.004),p*1.84),e.restore()}function UI(e,t,a,n,r,i){const s=ce(i.opening+.1,i.launch+1.13,r),o=ce(i.opening+.08,i.opening+.25,r),c=1-ce(i.release-.13,i.release,r),p=o*c;if(p<.007)return;const j=n*(.058+.168*s),b=j*88/63,l=Math.sin(r*1.85)*.014,I=j,v=b,h=Math.max(2,n*.009);e.save(),e.globalCompositeOperation="source-over",e.translate(t,a),e.rotate(l),e.lineCap="round",e.lineJoin="round";const w=()=>{e.beginPath(),e.moveTo(-I+h,-v),e.lineTo(I-h,-v),e.quadraticCurveTo(I,-v,I,-v+h),e.lineTo(I,v-h),e.quadraticCurveTo(I,v,I-h,v),e.lineTo(-I+h,v),e.quadraticCurveTo(-I,v,-I,v-h),e.lineTo(-I,-v+h),e.quadraticCurveTo(-I,-v,-I+h,-v),e.closePath()};w(),e.lineWidth=7,e.strokeStyle=`rgba(7,20,53,${Y(p*.63)})`,e.shadowBlur=7,e.shadowColor=`rgba(5,25,63,${Y(p*.45)})`,e.stroke(),w(),e.lineWidth=9,e.strokeStyle=`rgba(255,255,255,${Y(p*.92)})`,e.shadowBlur=26,e.shadowColor=`rgba(246,252,255,${Y(p*.99)})`,e.stroke(),w(),e.lineWidth=6,e.strokeStyle=`rgba(104,204,255,${Y(p*.78)})`,e.shadowBlur=18,e.shadowColor=`rgba(120,208,255,${Y(p*.92)})`,e.stroke(),w(),e.lineWidth=2.65,e.strokeStyle=`rgba(255,255,255,${Y(p*.98)})`,e.shadowBlur=8,e.shadowColor=`rgba(255,255,255,${Y(p*.99)})`,e.stroke(),e.shadowBlur=0;for(const[u,d,m]of[[-1,-1,0],[1,-1,1],[-1,1,2],[1,1,3]]){const f=p*(.64+.36*Math.sin(r*5.4+m*1.7)**2),y=u*I,M=d*v,N=n*(.012+.007*s);e.beginPath(),e.moveTo(y-u*N,M),e.lineTo(y+u*N*.18,M),e.moveTo(y,M-d*N),e.lineTo(y,M+d*N*.18),e.lineWidth=2.5,e.strokeStyle=`rgba(255,255,255,${Y(f)})`,e.shadowBlur=9,e.shadowColor="#e8f8ff",e.stroke()}e.shadowBlur=0,e.restore()}function Vo(e,t,a,n,r,i,s,o,c){const p=r-i;if(p<0||p>s)return;const j=Y(p/s),b=o*(1-j)*(1-j),l=n*(.06+.8*ce(0,.72,j));e.save(),e.globalCompositeOperation="lighter";for(let I=0;I<(c?17:25);I++){const v=I*2.3999632+r*.05,h=l*(.32+.7*de(I*13+3)),w=t+h*Math.cos(v),u=a+h*Math.sin(v)*.77,d=n*(.025+.08*de(I*13+4))*(1+j*.6);Te(e,w,u,v,d,b*(.23+.3*de(I*13+5)),I%7===0?1.6:.7),I%3===0&&Te(e,w-d*.4,u,0,d*.8,b*.18,.6)}Er(e,t,a,l,l*.67,0,b*.58,1.7,"227,244,255"),Er(e,t,a,l*.73,l*.44,0,b*.24,1.1,"251,224,174"),e.restore()}function FI(e,t,a,n,r,i,s,o){const c=[[i.opening+.17,.27,.88],[i.launch+.23,.22,.31],[i.release-.24,.25,.69]];e.save(),e.globalCompositeOperation="lighter";for(const[p,j,b]of c){const l=Math.exp(-Math.pow((r-p)/j,2))*b;if(l<=.008)continue;const I=n*(.32+.22*l);Te(e,t-I,a,0,I*2,l*.57,.65),Te(e,t,a-I*.32,Math.PI/2,I*.64,l*.36,.65),ct(e,t,a,I*.23,l*.24);const v=o?2:3;for(let h=0;h<v;h++){const w=(h+1)*n*.055;ct(e,t+(h%2?-w:w),a,n*(.009+.007*h),l*.13)}}e.restore()}function XI(e,t,a,n,r,i){e.clearRect(0,0,t,a);const s=hp(n,r),o=t*.5,c=a*.47,p=Math.min(t,a*.78),j=ce(r.opening+.1,r.launch+1.13,n);ce(r.launch-.1,r.launch+.96,n);const b=ce(r.opening+.17,r.launch+.24,n)*(1-ce(r.launch+.58,r.launch+1.43,n)),l=c+p*(.2-.23*j),I=1-s.release;e.save(),e.globalCompositeOperation="lighter";const v=7;for(let m=0;m<v;m++){const f=n*.11+m*ye/v,y=.2+.12*Math.sin(n*.85+m),M=(.045+s.opening*.23+s.flight*.12)*(1-s.release*.9);Te(e,o+Math.cos(f)*p*.12,c+Math.sin(f)*p*.1,f,p*(.3+y),M,m%3===0?1.8:.65)}if(n>=r.opening&&n<r.opening+.72){const m=n-r.opening,f=m/.72;for(let y=0;y<2;y++){const M=p*(.08+f*(y===0?.81:.59));e.beginPath(),e.ellipse(o,c,M,M*.66,0,0,ye),e.strokeStyle=`rgba(203,232,255,${Y((1-f)**2*(y===0?.75:.36))})`,e.lineWidth=(1-f)*4+1,e.stroke()}}const h=ce(r.opening+.03,r.opening+.27,n)*I,w=p*(.075+.35*j),u=Math.exp(-Math.pow((n-r.opening-.2)/.145,2));if(ct(e,o,l,p*.63,u*.47),ct(e,o,l,w*1.5,h*(.048+.04*b)),ct(e,o,l+w*.8,w*.95,h*.07*b),h>.005){ct(e,o,l,w,h*.135);const m=1+.032*Math.sin(n*12),f=e.createRadialGradient(o,l,w*.12,o,l,w*m);f.addColorStop(0,`rgba(255,255,252,${Y(h*.075)})`),f.addColorStop(.28,`rgba(236,247,255,${Y(h*.085)})`),f.addColorStop(.54,`rgba(210,235,255,${Y(h*.11)})`),f.addColorStop(.76,`rgba(154,214,255,${Y(h*.29)})`),f.addColorStop(.89,`rgba(181,226,255,${Y(h*.42)})`),f.addColorStop(1,"rgba(167,215,255,0)"),e.save(),e.globalAlpha=.22,e.fillStyle=f,e.beginPath(),e.arc(o,l,w*m,0,ye),e.fill(),e.restore();for(let y=0;y<5;y++){const M=y*ye/5+n*(y%2?-.68:.43);e.beginPath(),e.ellipse(o,l,w*(.76+.07*y),w*(.3+.025*y),M,0,ye*.66),e.strokeStyle=`rgba(244,251,255,${Y(h*(.23+.075*Math.sin(n*2+y)))})`,e.lineWidth=y%2?1.1:1.7,e.stroke()}}if(LI(e,o,l,p,n,r,h*(.37+.48*b)),Vo(e,o,l,p,n,r.opening+.15,.59,.84,i),Vo(e,o,l,p,n,r.release-.24,.34,.75,i),FI(e,o,l,p,n,r,s.release,i),b>.015&&h>.15){for(let m=0;m<16;m++){const f=m*ye/16+n*.055,y=m%2===0?1:-1,M=w*(.62+.09*y),N=p*(.07+.21*b)*(1+.16*Math.sin(m*2.7));Te(e,o+Math.cos(f)*M,l+Math.sin(f)*M*.8,f,N,b*h*(.12+.07*(m%3)),m%3===0?1.3:.6)}ct(e,o,l+w*.23,w*.64,h*b*.25)}const d=i?HI:_I;for(let m=0;m<d;m++){const f=YI[m],y=f.angle+n*(f.layer>.5?.13:-.11)*f.speed,M=.68+.46*s.flight+.45*s.opening+.52*j,N=f.radius*p*M,k=o+Math.cos(y)*N,B=c+Math.sin(y)*N*.95-12*Math.sin(n*.7+f.phase),z=.45+.55*Math.pow(Math.max(0,Math.sin(n*(2.4+f.speed)+f.twinkle)),5),T=Y((.08+f.layer*.26+s.opening*.23+s.flight*.14)*z*(1-.68*s.release));if(T<=.01)continue;e.fillStyle=`rgba(231,245,255,${T})`;const S=(.45+f.weight*1.85)*(i?.85:1);if(e.beginPath(),e.arc(k,B,S,0,ye),e.fill(),f.layer>.69&&z>.62&&(Te(e,k-8*f.length,B,0,16*f.length,T*.55,.75),Te(e,k,B-5*f.length,Math.PI/2,10*f.length,T*.36,.65)),s.flight>.1&&f.layer>.68&&m%4===0){const W=(k-o)*.055,L=(B-l)*.07;Te(e,k-W,B-L,Math.atan2(L,W),Math.hypot(W,L)*(2+s.flight),T*.5,1)}}if(s.release>.02){const m=Math.sin(Math.PI*s.release);ct(e,o,l,p*.58,m*.13),Te(e,o-p*.44,l,0,p*.88,m*.58,1.3);for(let f=0;f<10;f++)Te(e,o,l,f*ye/10+n*.16,p*(.21+.28*s.release),m*.2,f%2===0?1.5:.7)}JI(e,o,l,p,n,r),UI(e,o,l,p,n,r),e.restore()}function QI({reducedMotion:e=!1,fast:t=!1}){const a=E.useRef(null),n=E.useRef(null);return E.useEffect(()=>{if(e)return;const r=[a.current,n.current];if(r.some(h=>!h))return;const i=r.map(h=>h.getContext("2d",{alpha:!0}));if(i.some(h=>!h))return;const s=t?K:ti,o={opening:s.gather/1e3,launch:(s.gather+s.chest)/1e3,release:(s.gather+s.chest+s.launch+s.mystery)/1e3};let c=0,p=-1/0;const j=performance.now();let b=0,l=0;const I=()=>{b=r[0].clientWidth,l=r[0].clientHeight;const h=Math.min(window.devicePixelRatio||1,1.3,Math.sqrt(85e4/Math.max(1,b*l)));r.forEach((w,u)=>{w.width=Math.max(1,Math.round(b*h)),w.height=Math.max(1,Math.round(l*h)),i[u].setTransform(h,0,0,h,0,0)})};I(),window.addEventListener("resize",I);const v=h=>{if(c=requestAnimationFrame(v),document.hidden||h-p<1e3/30)return;p=h;const w=Math.min((h-j)/1e3,o.release),u=window.innerWidth<=430;b&&l&&(GI(i[0],b,l,w,o,u),XI(i[1],b,l,w,o,u))};return c=requestAnimationFrame(v),()=>{cancelAnimationFrame(c),window.removeEventListener("resize",I)}},[e,t]),e?null:g.jsxs(g.Fragment,{children:[g.jsx("canvas",{ref:a,className:"jp-gc-mystery-fx jp-gc-mystery-fx--far",style:{...Qo,zIndex:1},"aria-hidden":"true"}),g.jsx("canvas",{ref:n,className:"jp-gc-mystery-fx jp-gc-mystery-fx--near",style:{...Qo,zIndex:6},"aria-hidden":"true"})]})}const Ko=Object.freeze({waiting:{particles:0,peakAt:0,motion:"still"},gather:{particles:12,peakAt:0,motion:"charge"},chest:{particles:110,peakAt:.25,motion:"burst"},launch:{particles:90,peakAt:.28,motion:"comet"},mystery:{particles:90,peakAt:.73,motion:"suspense"},rise:{particles:45,peakAt:.48,motion:"float"},hold:{particles:30,peakAt:.73,motion:"pulse"},strike:{particles:112,peakAt:.25,motion:"shatter"},veil:{particles:58,peakAt:.48,motion:"reveal"},settle:{particles:18,peakAt:.12,motion:"fade"},result:{particles:0,peakAt:0,motion:"still"},freeze:{particles:0,peakAt:0,motion:"still"}}),$o=Object.freeze({n:.7,r:.85,s:1,g:1.14,u:1.28});function OI(e,t="n",a=!1){const n=Ko[e]||Ko.result,r=fp.includes(e)?1:$o[t]??$o.n;return Object.freeze({phase:e,motion:a?"still":n.motion,particles:a?0:Math.min(112,Math.round(n.particles*Math.min(1.1,r))),peakAt:n.peakAt,durationMs:sn(e,t),intensity:r})}const gr="/-stack-poker-test-web/gacha-chest-v1/assets/chest-fdfMeHjy.webp",bp="/-stack-poker-test-web/gacha-chest-v1/assets/chest-open-Bl7b05ZL.webp",Qa="/-stack-poker-test-web/gacha-chest-v1/assets/tablet-H9OXO-et.webp",VI={n:"N",r:"R",s:"SR",g:"SSR",u:"UR"},KI={n:"white",r:"blue",s:"silver",g:"gold",u:"rainbow"},zi={white:[213,232,255],blue:[55,149,255],gold:[255,197,77],rainbow:[211,148,255],silver:[211,226,240]},$I=()=>typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;let qI;const jp=()=>qI||=typeof Image>"u"?Promise.resolve():Promise.all([gr,bp,Qa].map(e=>new Promise(t=>{const a=new Image;a.onload=a.onerror=t,a.src=e,a.complete&&t()}))),eh=[["0% 0%,50% 0%,46% 25%,0% 32%",-85,-95,-35],["50% 0%,100% 0%,100% 30%,64% 28%,46% 25%",90,-100,40],["0% 32%,46% 25%,50% 46%,24% 52%,0% 47%",-120,-15,-55],["46% 25%,64% 28%,100% 30%,100% 52%,74% 55%,50% 46%",115,-25,65],["0% 47%,24% 52%,43% 72%,0% 75%",-105,80,-45],["24% 52%,50% 46%,74% 55%,60% 78%,43% 72%",15,65,45],["74% 55%,100% 52%,100% 78%,60% 78%",115,65,75],["0% 75%,43% 72%,60% 78%,54% 100%,0% 100%",-60,140,-30],["60% 78%,100% 78%,100% 100%,54% 100%",80,145,30]];function th({phase:e,color:t,lightning:a,motion:n,rarity:r,fastN:i=!1}){const s=E.useRef(null);return E.useEffect(()=>{const o=s.current;if(!o||n||e==="result"||e==="freeze")return;const c=o.getContext("2d");if(!c)return;const p=OI(e,r,n),j=i&&r==="n"?sn(e,r,"fast"):p.durationMs;let b,l=0,I=0,v=performance.now(),h=0;const w=()=>{l=o.clientWidth,I=o.clientHeight;const m=Math.min(window.devicePixelRatio||1,1.5,Math.sqrt(12e5/Math.max(1,l*I)));o.width=l*m,o.height=I*m,c.setTransform(m,0,0,m,0,0)};w(),window.addEventListener("resize",w);const u=Array.from({length:p.particles},(m,f)=>({a:f*2.39996,r:.12+f*37%83/100,speed:12+f%23,size:.5+f%3*.5})),d=m=>{if(document.hidden||m-h<1e3/30){b=requestAnimationFrame(d);return}h=m;const f=(m-v)/1e3,y=l/2,M=I*.47;c.clearRect(0,0,l,I),c.globalCompositeOperation="lighter";const N=zi[t]||zi.white;for(let T=0;T<u.length;T++){const S=u[T],W=e==="strike",L=e==="chest"&&f>.11||e==="launch",Q=e==="gather",te=W?Math.min(1,Math.max(0,(f-.14)/.75)):L?Math.min(1,e==="launch"?f/(i?1.45:r==="n"?1.9:2.3):Math.max(0,(f-.11)/(i?.39:.59))):0,O=W||L?16+te*l*S.r*(W?1.4:.9):Q?l*Math.max(.02,.54-f*.17)*S.r:l*(.18+S.r*.27),x=S.a+(W||L?0:f*(Q?1.7:.07)),P=y+Math.cos(x)*O,D=W?M+Math.sin(S.a)*O+te*te*100:L?M-I*.035+Math.sin(S.a)*O-te*I*.2:Q?M+Math.sin(x)*O*.8:((I-f*S.speed+T*53)%I+I)%I,J=W||L?Math.max(0,1-te)*.95:Q?.25+f*.25:.22+Math.sin(f*1.4+T)*.16;c.fillStyle=`rgba(${t==="rainbow"?zi[["gold","blue","rainbow"][T%3]].join(","):N.join(",")},${J})`,c.beginPath(),c.arc(P,D,S.size*(W||L?1.7:1),0,Math.PI*2),c.fill()}const k=Math.max(.1,j/1e3),B=Math.min(1,f/k),z=`rgba(${N.join(",")},${Math.max(0,1-B)})`;if(e==="chest"||e==="strike"){const T=e==="chest"?.25:.23,S=Math.max(0,Math.min(1,(B-T+.08)/.72));B>=T-.08&&S<=1&&(c.save(),c.strokeStyle=`rgba(${N.join(",")},${.73*(1-S)})`,c.lineWidth=e==="chest"?7*(1-S)+1:11*(1-S)+1,c.shadowColor=`rgba(${N.join(",")},.7)`,c.shadowBlur=16,c.beginPath(),c.ellipse(y,M,20+S*l*.65,8+S*l*.43,0,0,Math.PI*2),c.stroke(),c.restore());const W=Math.max(0,1-Math.abs(B-T)/.22);W>0&&(c.save(),c.lineWidth=1.5+3*W,c.strokeStyle=`rgba(255,252,235,${W*.65})`,c.shadowColor=z,c.shadowBlur=18,c.beginPath(),c.moveTo(y-l*.48*W,M),c.lineTo(y+l*.48*W,M),c.stroke(),c.restore())}if(e==="launch"){const T=M+I*.31-Math.min(1,B*1.5)*I*.34;for(let S=0;S<20;S++){const W=S*2.39996,L=(9+S%7*8)*(.4+B),Q=y+Math.sin(W+f*.8)*L,te=T+S*47%100*.65,O=Math.sin(Math.PI*Math.min(1,B))*(.36+S%5*.08);c.beginPath(),c.moveTo(Q,te),c.lineTo(Q+Math.sin(W)*3,te+22+S%6*8),c.strokeStyle=`rgba(${N.join(",")},${Math.max(0,O)})`,c.lineWidth=S%4===0?2.4:1,c.stroke()}}if(e==="veil"||e==="settle"||e==="hold"){const T=e==="settle"?(1-B)*.26:e==="hold"?.45:.24+.28*Math.sin(Math.PI*B);c.save(),c.lineWidth=1.2,c.strokeStyle=`rgba(${N.join(",")},${T})`;for(let S=0;S<2;S++)c.beginPath(),c.ellipse(y,M,Math.min(l*.38,150)+S*20,Math.min(I*.24,200)+S*15,.12*Math.sin(f*.8+S),f*(S===0?.7:-.5),Math.PI*1.7+f*(S===0?.7:-.5)),c.stroke();for(let S=0;S<14;S++){const W=S*2.39996+f*(S%2?.35:-.28),L=Math.min(l*.39,160)+S%3*16,Q=y+Math.cos(W)*L,te=M+Math.sin(W)*L*1.18,O=.24+.6*Math.pow(Math.max(0,Math.sin(f*3+S*6.7)),9);c.strokeStyle=`rgba(255,255,247,${T*O})`,c.lineWidth=1,c.beginPath(),c.moveTo(Q-4*O,te),c.lineTo(Q+4*O,te),c.moveTo(Q,te-7*O),c.lineTo(Q,te+7*O),c.stroke()}c.restore()}if(e==="strike"&&f>.12&&f<.46){const T=a!=="normal",S=Math.floor(f*24),W=(L,Q,te)=>{const O=[[y+L,-20]];for(let x=1;x<12;x++)O.push([y+L*(1-x/12)+Math.sin(x*17.17+S*4.71)*(T?34:18),M*x/12]);if(O.push([y,M]),c.beginPath(),O.forEach(([x,P],D)=>D?c.lineTo(x,P):c.moveTo(x,P)),c.shadowColor=`rgb(${N.join(",")})`,c.shadowBlur=T?22:10,c.strokeStyle=`rgba(${N.join(",")},${te})`,c.lineWidth=Q,c.lineJoin="round",c.stroke(),c.beginPath(),O.forEach(([x,P],D)=>D?c.lineTo(x,P):c.moveTo(x,P)),c.strokeStyle=`rgba(255,255,255,${te})`,c.lineWidth=Math.max(1,Q/4),c.stroke(),T)for(let x=3;x<10;x+=3){const[P,D]=O[x];c.beginPath(),c.moveTo(P,D),c.lineTo(P+(x%2?-45:45),D+18),c.lineTo(P+(x%2?-75:75),D+70),c.lineWidth=1.4,c.stroke()}};W(0,T?14:5,.28),W(0,T?5:2,.95),T&&(W(-l*.28,3,.65),W(l*.3,3,.65))}c.shadowBlur=0,c.globalCompositeOperation="source-over",b=requestAnimationFrame(d)};return b=requestAnimationFrame(d),()=>{cancelAnimationFrame(b),window.removeEventListener("resize",w)}},[e,t,a,n,r,i]),g.jsx("canvas",{className:"jp-gc-fx",ref:s,"aria-hidden":"true"})}function ah({result:e,pending:t,onClose:a,onAgain:n,againLabel:r,comboTitle:i,sfx:s,kind:o="normal",previewPlan:c,previewTempo:p="classic"}){const[j]=E.useState($I),b=`gc-vortex-${E.useId().replace(/:/g,"")}`,[l,I]=E.useState("waiting"),[v,h]=E.useState(!1),[w,u]=E.useState(!1),[d,m]=E.useState(!1);E.useEffect(()=>{let R=!0;return jp().then(()=>{R&&m(!0)}),()=>{R=!1}},[]);const f=E.useRef(null);f.current||(f.current=[Math.random(),Math.random(),Math.random(),Math.random(),Math.random()]);const y=e?.cardId?ks(e.cardId):null,M=y?.rarity||"n",N=Go.find(R=>R.id===o)||Go[0],k=E.useMemo(()=>c||yI(N.prizes,M,f.current),[c,N,M]),B=xI(M,{...c||{},postStoneRoll:f.current[3]}),z=B.phases,T=B.reversal&&!w,S=T?B.shownRarity:M,W=!!c&&S==="n"&&p==="fast",L=fp.includes(l),Q=kc(k.cue,k.tablet,f.current[4],k.promotionFrom),te=S!=="n"&&["rise","hold","strike","veil"].includes(l),O=S!=="n"&&Q.promoted&&l==="hold",x=T&&y&&ks(y.id.replace(/-[nrsgu]-/,`-${S}-`))||y,P=()=>{nt(),u(!0),I("result")},D=!t&&!!y&&d,J=E.useRef(s);J.current=s;const ae=E.useRef([]),nt=()=>{ae.current.forEach(R=>{try{R()}catch{}}),ae.current=[]};E.useEffect(()=>{s||nt()},[s]),E.useEffect(()=>()=>nt(),[]),E.useEffect(()=>{l==="waiting"&&D&&(j&&u(!0),I(j?"result":"gather"))},[l,D,j]),E.useEffect(()=>{if(!D||l==="waiting")return;const R={gather:"gachaBonusCharge",chest:"gachaChest",launch:"gachaLaunch",mystery:null,rise:"gachaRise",hold:"gachaHold",strike:k.lightning==="normal"?"gachaThunder":"gachaThunderBig",veil:S==="n"?null:"gachaVeil"},C=Pp=>{const Ac=J.current?.(Pp);typeof Ac=="function"&&ae.current.push(Ac)},ni=l==="gather"?setTimeout(()=>C("gachaBonusCharge"),W?180:420):null;R[l]&&l!=="gather"&&C(R[l]);const ri=l==="gather"?setTimeout(()=>C("gachaHold"),W?470:1230):null,An=l==="chest"?setTimeout(()=>C("gachaOpen"),150):null,yp=l==="veil"&&S==="n"?setTimeout(()=>C("gachaVeil"),Math.round(sn("veil",S,W?"fast":"classic")*(W?.4:(6700-pr)/4050))):null,ii=sn("veil",S,W?"fast":"classic"),wp=l==="veil"?setTimeout(()=>C("gachaBonusSparkle"),S==="n"?Math.round(ii*(W?.36:1475/4050)):120):null,Mp=l==="veil"?setTimeout(()=>C("gachaBonusShakiin"),S==="n"?Math.round(ii*(W?.4:1550/4050)):350):null,xp=l==="chest"||l==="strike"&&k.lightning!=="normal"?setTimeout(()=>C("gachaBonusMagic"),l==="chest"?180:150):null,Zp=l==="launch"?setTimeout(()=>C("gachaBonusFlight"),65):null,Np=l==="rise"?setTimeout(()=>C("gachaBonusMetallic"),110):null,kp=l==="hold"?setTimeout(()=>C("gachaBonusAbsorb"),120):null,Cp=l==="veil"?setTimeout(()=>C("gachaBonusCardDisplay"),S==="n"?Math.round(ii*(W?.4:1550/4050)):160):null,Sp=l==="strike"&&k.lightning==="chime"?setTimeout(()=>C("gachaKyuin"),250):null,Sc=sn(l,S,W?"fast":"classic"),Ap=Sc?setTimeout(()=>I(z[z.indexOf(l)+1]),Sc):null;return()=>{clearTimeout(Ap),clearTimeout(Sp),clearTimeout(An),clearTimeout(ni),clearTimeout(ri),clearTimeout(yp),clearTimeout(wp),clearTimeout(Mp),clearTimeout(xp),clearTimeout(Zp),clearTimeout(Np),clearTimeout(kp),clearTimeout(Cp)}},[l,D,k.lightning,M,S,W]);const rt=()=>{!D||l!=="freeze"||(u(!0),I("result"))},Rt=L||l==="waiting"?"white":l==="freeze"?"rainbow":l==="result"?KI[S]:["rise","hold"].includes(l)&&S!=="n"?Q.promotionFrom:l==="veil"?k.veil:k.aura,Ke=l==="waiting"?0:z.indexOf(l),Yt=l==="result"&&S!=="n"?"sealed-card":kI(B,l);return g.jsxs("div",{className:`jp-gr jp-gc jp-gc-p-${l} jp-gc-c-${Rt} jp-gc-metal-${L?"bronze":k.tablet} jp-gc-entry-${Q.tabletStart} jp-gc-grade-${k.cue} jp-gc-grade-from-${Q.promotionFrom}${Q.stoneUpgrading?" jp-gc-stone-upgrading":""} jp-gc-thunder-${L?"normal":k.lightning}${O?" jp-gc-grade-upgrading":""}${!Q.promoted&&S!=="n"?" jp-gc-grade-nochange":""}${S==="n"?" jp-gc-n-cinematic":""}${L?" jp-gc-mystery-common":""}${W?" jp-gc-n-fast":""}${v?" jp-gc-film-active":""}`,role:"dialog","aria-modal":"true","aria-label":c?"ガチャ演出プレビュー":"ガチャの結果",onClick:rt,"data-phase":l,children:[g.jsx("div",{className:"jp-gc-atmosphere","aria-hidden":"true"}),S==="n"&&["gather","chest","launch","veil","settle"].includes(l)&&g.jsxs("div",{className:"jp-gc-n-flow-score","aria-hidden":"true","data-n-continuity":"10s",children:[g.jsx("span",{className:"jp-gc-n-flow-wash"}),g.jsx("span",{className:"jp-gc-n-flow-ring jp-gc-n-flow-ring-a"}),g.jsx("span",{className:"jp-gc-n-flow-ring jp-gc-n-flow-ring-b"}),g.jsx("span",{className:"jp-gc-n-flow-column"}),g.jsx("span",{className:"jp-gc-n-flow-lens"}),g.jsx("div",{className:"jp-gc-n-flow-sparks",children:Array.from({length:8},(R,C)=>g.jsx("i",{style:{"--n-flow-angle":`${C*45}deg`,"--n-flow-orbit":`-${113+C%4*16}px`}},C))})]}),g.jsx(BI,{phase:S==="n"&&l==="gather"?"waiting":l,color:Rt,onFullMoviePlaying:h}),g.jsx("div",{className:"jp-gc-aureole","aria-hidden":"true"}),(l==="launch"||l==="strike"||l==="veil"||l==="result")&&g.jsxs(g.Fragment,{children:[g.jsx("svg",{className:"jp-gc-filter-defs","aria-hidden":"true",children:g.jsx("defs",{children:g.jsxs("filter",{id:b,x:"-25%",y:"-25%",width:"150%",height:"150%",children:[g.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:".025 .06",numOctaves:"2",seed:"8",result:"noise"}),g.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"19",xChannelSelector:"R",yChannelSelector:"G"})]})})}),g.jsxs("div",{className:"jp-gc-vortex","aria-hidden":"true",children:[g.jsx("i",{style:{filter:`url(#${b})`}}),g.jsx("i",{style:{filter:`url(#${b})`}}),g.jsx("b",{})]})]}),g.jsxs("div",{className:"jp-gc-floor","aria-hidden":"true",children:[g.jsx("i",{}),g.jsx("i",{})]}),!L&&S!=="n"&&g.jsx(th,{phase:l,color:Rt,lightning:k.lightning,motion:j,rarity:S,fastN:W}),te&&g.jsxs("div",{className:"jp-gc-grade-fx","aria-hidden":"true","data-grade-cue":k.cue,"data-grade-metal":k.tablet,children:[g.jsx("span",{className:"jp-gc-grade-depth"}),g.jsx("span",{className:"jp-gc-grade-prism"}),g.jsx("span",{className:"jp-gc-grade-metamorphosis"}),g.jsx("span",{className:"jp-gc-grade-arc"}),g.jsx("span",{className:"jp-gc-grade-arc jp-gc-grade-arc-b"}),g.jsx("span",{className:"jp-gc-grade-shock"}),g.jsxs("div",{className:"jp-gc-chance-tease",children:[g.jsx("span",{className:"jp-gc-chance-spine"}),g.jsx("span",{className:"jp-gc-chance-orbit"}),g.jsx("span",{className:"jp-gc-chance-needles"}),g.jsx("div",{className:"jp-gc-chance-strands",children:Array.from({length:14},(R,C)=>g.jsx("i",{style:{"--gc-strand-angle":`${C*137.508}deg`,"--gc-strand-delay":`${C%7*.08}s`}},C))})]}),g.jsxs("div",{className:"jp-gc-upgrade-outcome",children:[g.jsx("span",{className:"jp-gc-upgrade-flood"}),g.jsx("span",{className:"jp-gc-upgrade-cross"}),g.jsx("span",{className:"jp-gc-upgrade-floor"}),g.jsx("div",{className:"jp-gc-upgrade-pillars",children:Array.from({length:9},(R,C)=>g.jsx("i",{style:{"--gc-column-index":C,"--gc-column-offset":`${(C-4)*4.6}%`,"--gc-column-drift":`${(C-4)*12}deg`,"--gc-column-delay":`${C%5*.042}s`}},C))}),g.jsx("div",{className:"jp-gc-upgrade-motes",children:Array.from({length:26},(R,C)=>g.jsx("i",{style:{"--gc-mote-angle":`${C*137.508}deg`,"--gc-mote-travel":`${64+C%7*29}px`,"--gc-mote-delay":`${C%6*.045}s`}},C))})]}),g.jsx("div",{className:"jp-gc-grade-rays",children:Array.from({length:18},(R,C)=>g.jsx("i",{style:{"--gc-ray-angle":`${C*20}deg`,"--gc-ray-delay":`${C%6*.045}s`}},C))}),g.jsx("div",{className:"jp-gc-grade-sparks",children:Array.from({length:30},(R,C)=>g.jsx("i",{style:{"--gc-spark-angle":`${C*137.508}deg`,"--gc-spark-dist":`${74+C%8*25}px`,"--gc-spark-delay":`${C%9*.06}s`}},C))})]}),L&&g.jsx(QI,{reducedMotion:j,fast:W}),S==="n"&&["veil","settle"].includes(l)&&g.jsx(RI,{reducedMotion:j,initialOffsetMs:Gt.branch}),S==="n"&&g.jsxs("div",{className:"jp-gc-n-flash-stage","aria-hidden":"true",children:[g.jsx("span",{className:"jp-gc-n-opening-core"}),g.jsx("span",{className:"jp-gc-n-opening-halo"}),g.jsx("span",{className:"jp-gc-n-opening-cross"}),g.jsx("span",{className:"jp-gc-n-opening-ring"}),g.jsx("div",{className:"jp-gc-n-opening-sparks",children:Array.from({length:12},(R,C)=>g.jsx("i",{style:{"--n-spark-angle":`${C*30}deg`,"--n-spark-short":`-${Math.round((95+C%4*26)*.42)}px`,"--n-spark-far":`-${95+C%4*26}px`,"--n-spark-depth":`${95+C%4*26}px`,"--n-spark-delay":`${C%4*.025}s`}},C))})]}),g.jsxs("div",{className:"jp-gc-cinema-bursts","aria-hidden":"true",children:[g.jsx("span",{className:"jp-gc-cinema-whiteout"}),g.jsx("span",{className:"jp-gc-cinema-corona"}),g.jsx("span",{className:"jp-gc-cinema-ring jp-gc-cinema-ring-a"}),g.jsx("span",{className:"jp-gc-cinema-ring jp-gc-cinema-ring-b"}),g.jsx("span",{className:"jp-gc-cinema-prism"}),g.jsx("div",{className:"jp-gc-cinema-spokes",children:Array.from({length:12},(R,C)=>g.jsx("i",{style:{"--spoke-angle":`${C*30}deg`}},C))})]}),l!=="result"&&l!=="freeze"&&g.jsxs("div",{className:"jp-gc-heading","aria-hidden":"true",children:[g.jsx("span",{children:"STACK POKER"}),g.jsx("i",{}),g.jsx("small",{children:["開放","開封","飛翔","覚醒","解放","顕現"][Math.min(Ke,5)]})]}),(l==="waiting"||l==="gather"||l==="chest"||l==="launch"||l==="rise")&&g.jsxs("div",{className:"jp-gc-chest-scene","aria-hidden":"true",children:[g.jsx("div",{className:"jp-gc-chest-halo"}),g.jsx("div",{className:"jp-gc-chest-filmflare"}),g.jsx("div",{className:"jp-gc-chest-dust",children:Array.from({length:30},(R,C)=>g.jsx("i",{style:{"--a":`${C*137.508}deg`,"--reach":`${100+C%7*24}px`,"--lag":`${C%10*.048}s`}},C))}),g.jsx("div",{className:"jp-gc-chest-metalglow"}),g.jsx("div",{className:"jp-gc-chest-fan",children:[-60,-40,-20,0,20,40,60].map(R=>g.jsx("i",{style:{"--angle":`${R}deg`}},R))}),g.jsxs("div",{className:"jp-gc-chest-closed",children:[g.jsx("img",{className:"jp-gc-chest-base",src:gr,alt:"",draggable:"false"}),g.jsx("img",{className:"jp-gc-chest-lid",src:gr,alt:"",draggable:"false"})]}),S==="n"&&g.jsxs("div",{className:"jp-gc-n-hinge-depth","aria-hidden":"true",children:[g.jsx("i",{}),g.jsx("b",{})]}),S==="n"&&g.jsxs("div",{className:"jp-gc-n-anticipation","aria-hidden":"true",children:[g.jsx("span",{className:"jp-gc-n-suspense-ring"}),g.jsx("span",{className:"jp-gc-n-suspense-seam"}),g.jsx("span",{className:"jp-gc-n-suspense-core"}),g.jsx("div",{className:"jp-gc-n-suspense-embers",children:Array.from({length:12},(R,C)=>g.jsx("i",{style:{"--n-charge-az":`${C*30}deg`,"--n-charge-delay":`${C%4*.055}s`,"--n-charge-travel":`-${75+C%4*17}px`}},C))})]}),S==="n"&&g.jsxs("div",{className:"jp-gc-n-portal-bridge","aria-hidden":"true",children:[g.jsx("span",{}),g.jsx("i",{})]}),g.jsx("img",{className:"jp-gc-chest-open",src:bp,alt:"",draggable:"false"}),g.jsx("div",{className:"jp-gc-chest-core"}),g.jsx("div",{className:"jp-gc-lens-flare"}),g.jsx("div",{className:"jp-gc-chest-bloom"})]}),Yt==="sealed-card"&&x&&g.jsxs("div",{className:`jp-gc-tablet-scene jp-gc-sealed-scene jp-gc-poststone-${B.postStoneSide}`,"aria-hidden":"true","data-sealed-card":x.id,"data-poststone-side":B.postStoneSide,children:[g.jsx("div",{className:"jp-gc-seal"}),g.jsx("div",{className:"jp-gc-beam"}),g.jsxs("div",{className:"jp-gc-tablet",children:[g.jsx("div",{className:"jp-gc-sealed-card",children:B.postStoneSide==="back"?g.jsxs("div",{className:"jp-gc-poststone-flipper",children:[g.jsx("div",{className:"jp-gc-poststone-card-front",children:g.jsx(Bi,{id:x.id,size:"m"})}),g.jsxs("div",{className:"jp-gc-poststone-card-reverse",children:[g.jsx("b",{className:"jp-gc-poststone-corner jp-gc-poststone-corner-top","aria-hidden":"true",children:"♠"}),g.jsx("span",{"aria-hidden":"true",children:"♠"}),g.jsx("small",{children:"STACK POKER"}),g.jsx("b",{className:"jp-gc-poststone-corner jp-gc-poststone-corner-bottom","aria-hidden":"true",children:"♠"})]})]}):g.jsx(Bi,{id:x.id,size:"m"})}),g.jsx("div",{className:"jp-gc-card-edge-glow"}),g.jsx("div",{className:"jp-gc-stone-card-flash","aria-hidden":"true"}),g.jsx("div",{className:"jp-gc-stone-underlight"}),g.jsxs("div",{className:"jp-gc-stone-underlay",children:[g.jsx("img",{className:"jp-gc-stone-entry-img",src:Qa,alt:"",draggable:"false"}),g.jsx("img",{className:"jp-gc-stone-final-img",src:Qa,alt:"",draggable:"false"})]}),eh.map(([R,C,ni,ri],An)=>g.jsxs("div",{className:"jp-gc-shard",style:{clipPath:`polygon(${R})`,"--dx":`${C}%`,"--dy":`${ni}%`,"--rot":`${ri}deg`,"--depth":`${40+An*17}px`},children:[g.jsx("img",{className:"jp-gc-stone-entry-img",src:Qa,alt:"",draggable:"false"}),g.jsx("img",{className:"jp-gc-stone-final-img",src:Qa,alt:"",draggable:"false"}),g.jsx("span",{className:"jp-gc-stone-chip-edge"})]},An)),g.jsx("svg",{className:"jp-gc-cracks",viewBox:"0 0 100 140",fill:"none",children:g.jsx("path",{d:"M50 0 46 35 50 64 24 73 0 66M50 64 74 77 100 73M50 64 43 101 60 109 54 140M46 35 0 45M46 35 64 39 100 42M24 73 43 101 0 105M74 77 60 109 100 109"})})]}),g.jsx("div",{className:"jp-gc-shockwave"}),l==="strike"&&g.jsx("div",{className:"jp-gc-stone-microshards","aria-hidden":"true",children:Array.from({length:28},(R,C)=>g.jsx("i",{style:{"--az":`${C*137.508}deg`,"--flight":`${80+C%8*21}px`,"--delay":`${C%6*11}ms`,"--chip-size":`${2+C%3*2}px`}},C))}),g.jsx("div",{className:"jp-gc-sealed-reveal-light"})]}),l==="strike"&&g.jsx("div",{className:"jp-gc-impact","aria-hidden":"true"}),Yt==="direct-card"&&x&&g.jsxs("div",{className:"jp-gc-veil-scene","aria-hidden":"true",children:[g.jsxs("div",{className:"jp-gc-n-launch-trails","aria-hidden":"true",children:[Array.from({length:9},(R,C)=>g.jsx("i",{style:{"--trail-angle":`${-36+C*9}deg`,"--trail-delay":`${C%3*.035}s`,"--trail-len":`${80+C%5*24}px`}},C)),g.jsx("span",{className:"jp-gc-n-launch-flash"})]}),g.jsxs("div",{className:"jp-gc-n-disappear-burst","aria-hidden":"true",children:[g.jsx("span",{className:"jp-gc-n-disappear-white"}),g.jsx("span",{className:"jp-gc-n-disappear-ring"}),g.jsx("span",{className:"jp-gc-n-disappear-rays"}),g.jsx("span",{className:"jp-gc-n-disappear-flare"}),g.jsx("span",{className:"jp-gc-n-disappear-iris"})]}),g.jsxs("div",{className:"jp-gc-n-ejection","aria-hidden":"true",children:[g.jsx("span",{className:"jp-gc-n-ejection-core"}),g.jsx("span",{className:"jp-gc-n-ejection-ring jp-gc-n-ejection-ring-a"}),g.jsx("span",{className:"jp-gc-n-ejection-ring jp-gc-n-ejection-ring-b"}),g.jsx("div",{className:"jp-gc-n-ejection-spokes",children:Array.from({length:10},(R,C)=>g.jsx("i",{style:{"--n-eject-angle":`${C*36}deg`,"--n-eject-delay":`${C%3*.016}s`}},C))})]}),g.jsx("div",{className:"jp-gc-card-shadow",children:g.jsxs("div",{className:"jp-gc-n-flip",children:[g.jsx("div",{className:"jp-gc-n-front",children:g.jsx(Bi,{id:x.id,size:"m"})}),g.jsxs("div",{className:"jp-gc-direct-card-back","data-n-physical-card-back":"true",children:[g.jsx("b",{className:"jp-gc-n-card-back-corner jp-gc-n-card-back-corner-tl",children:"♠"}),g.jsx("span",{"aria-hidden":"true",children:"♠"}),g.jsx("small",{children:"STACK POKER"}),g.jsx("b",{className:"jp-gc-n-card-back-corner jp-gc-n-card-back-corner-br",children:"♠"}),g.jsx("i",{"aria-hidden":"true"})]})]})}),g.jsxs("div",{className:"jp-gc-n-reveal-effects","aria-hidden":"true",children:[g.jsx("span",{className:"jp-gc-n-reveal-aura"}),g.jsx("span",{className:"jp-gc-n-reveal-pulse"}),g.jsx("span",{className:"jp-gc-n-reveal-beam"}),g.jsx("span",{className:"jp-gc-n-reveal-halo"}),Array.from({length:8},(R,C)=>g.jsx("i",{style:{"--n-star-angle":`${C*45}deg`,"--n-star-delay":`${C%4*.115}s`}},C))]}),g.jsx("div",{className:"jp-gc-veil-light"}),g.jsx("div",{className:"jp-gc-veil-sweep"})]}),S==="n"&&(l==="chest"||l==="launch")&&g.jsxs("div",{className:"jp-gc-n-chest-front","aria-hidden":"true","data-n-card-occlusion":"front-lip",children:[g.jsx("img",{src:gr,alt:"",draggable:"false"}),g.jsx("span",{className:"jp-gc-n-mouth-rim"}),g.jsx("span",{className:"jp-gc-n-mouth-emission"})]}),l==="result"&&y&&g.jsxs("div",{className:`jp-gc-result${S==="n"?"":" jp-gc-result-stone-hud"}`,role:"status",onClick:R=>R.stopPropagation(),children:[c&&g.jsx("p",{className:"jp-gc-demo-label",children:"演出プレビュー・カードの獲得はありません"}),g.jsx("div",{className:`jp-gc-rarity jp-gc-rarity-${S}`,children:VI[S]}),g.jsx("div",{className:"jp-gc-result-card jp-gc-result-card-spacer","aria-hidden":"true"}),g.jsxs("p",{className:"jp-gc-name",children:[x.player.name,g.jsx("small",{children:x.label})]}),!T&&!!e.combos?.length&&g.jsx("div",{className:"jp-combo-won",children:e.combos.map(R=>g.jsxs("p",{children:[i?i(R.key):R.key," 達成！ ",g.jsxs("b",{children:["+",Number(R.gold).toLocaleString("ja-JP")," GOLD"]})]},R.key))}),g.jsx("div",{className:"jp-gc-buttons",children:T?g.jsxs(g.Fragment,{children:[g.jsx("button",{className:"jp-btn jp-call",onClick:()=>{nt(),I("freeze")},children:"逆転フリーズを確認"}),g.jsx("button",{className:"jp-chip",onClick:P,children:"最終結果へ"})]}):g.jsxs(g.Fragment,{children:[n&&g.jsx("button",{className:"jp-sponsor-btn",onClick:n,children:r||"もう一度引く"}),g.jsx("button",{className:"jp-btn jp-call",onClick:a,children:"閉じる"})]})})]}),l==="freeze"&&g.jsxs("div",{className:"jp-gc-freeze",role:"status",children:[g.jsx("strong",{children:"時が止まる――"}),g.jsx("p",{children:"タップしてURを表示"})]}),l!=="result"&&g.jsxs("div",{className:"jp-gc-footer",children:[g.jsx("div",{className:"jp-gc-progress","aria-hidden":"true",children:z.map((R,C)=>g.jsx("i",{className:C<=Ke?"is-lit":""},R))}),g.jsx("p",{role:"status",children:D?"演出中…（右上からスキップ可能）":t||!y?"抽選中…":"演出を準備中…"})]}),l!=="result"&&D&&g.jsx("button",{className:"jp-gr-skip",onClick:R=>{R.stopPropagation(),P()},children:"スキップ"})]})}function nh({sfx:e}){E.useEffect(()=>{jp()},[]);const t=typeof window<"u"?new URLSearchParams(window.location.search):new URLSearchParams,a=t.get("n-only")==="1",n=a&&t.get("tempo")==="fast"?"fast":"classic",[r,i]=E.useState(0),[s,o]=E.useState(!1),[c,p]=E.useState(0),j=ea[a?0:r];return g.jsxs("section",{className:"jp-section jp-gc-preview",children:[g.jsx("h3",{children:a?"Nガチャ・専用プレビュー":"演出プレビュー"}),g.jsxs("p",{children:["ガチャ券を使わずに演出を確認できます。",a?n==="fast"?"高速テスト版：6.5秒。開封からカード公開までのテンポを強化しています。":"10秒版：開封前1.6秒のため→宝箱から高速射出→カードの立体反転。":""]}),!a&&g.jsxs("label",{children:["演出の種類",g.jsx("select",{value:r,onChange:b=>i(Number(b.target.value)),children:ea.map((b,l)=>g.jsx("option",{value:l,children:b.label},l))})]}),g.jsx("button",{className:"jp-chip",onClick:()=>{p(b=>b+1),o(!0)},children:"演出を見る"}),s&&g.jsx(ah,{result:{cardId:`01am-${j.rarity}-As`},pending:!1,previewPlan:j,previewTempo:n,sfx:e,onClose:()=>o(!1),onAgain:()=>p(b=>b+1),againLabel:"もう一度見る"},c)]})}const rh=`
/* Optional licensed/produced movie backgrounds: never composited over a live sealed card. */
.jp-gc-film-video{position:absolute;inset:0;z-index:-2;width:100%;height:100%;object-fit:cover;pointer-events:none;opacity:0;background:#03060c}
.jp-gc-film-video.is-playing{opacity:1;transition:opacity .16s ease-in}
.jp-gc.jp-gc-film-active.jp-gc-p-gather .jp-gc-chest-scene,
.jp-gc.jp-gc-film-active.jp-gc-p-chest .jp-gc-chest-scene{opacity:0!important;transition:opacity .16s ease-in}
.jp-gc.jp-gc-p-gather .jp-gc-chest-scene,
.jp-gc.jp-gc-p-chest .jp-gc-chest-scene{transition:opacity .16s ease-in}


.jp-gc-freeze{position:absolute;inset:0;z-index:8;display:flex;flex-direction:column;align-items:center;justify-content:center;background:radial-gradient(ellipse,#231331,#02030a 65%);color:#e6cfff;letter-spacing:.2em;text-shadow:0 0 22px #d998ff}
.jp-gc-freeze strong{font:28px serif}.jp-gc-freeze p{font-size:12px;margin-top:30px}
.jp-gc-p-freeze .jp-gc-fx,.jp-gc-p-freeze .jp-gc-aureole{display:none}
.jp-gc-metal-rainbow .jp-gc-shard img{filter:sepia(.3) saturate(1.5) drop-shadow(0 0 12px #d8a0ff)}
.jp-gc-metal-rainbow .jp-gc-tablet:after{content:'';position:absolute;inset:0;pointer-events:none;mix-blend-mode:color;background:linear-gradient(135deg,#68cfff,#8b75ff,#f28bde,#ffcd66,#79edcc);opacity:.7}

.jp-gr.jp-gc{position:fixed;inset:0;z-index:60;isolation:isolate;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;color:#fff;background:#02050b;cursor:pointer;user-select:none;-webkit-user-select:none;--gc:#d8e8ff;--gc-rgb:216,232,255;-webkit-tap-highlight-color:transparent}
.jp-gc-c-blue{--gc:#56abff!important;--gc-rgb:86,171,255!important}
.jp-gc-c-gold{--gc:#ffcf72!important;--gc-rgb:255,207,114!important}
.jp-gc-c-rainbow{--gc:#e0b2ff!important;--gc-rgb:224,178,255!important}
.jp-gc-metal-bronze{--stone:saturate(.8)}.jp-gc-metal-silver{--stone:saturate(0) brightness(1.4) contrast(1.08)}.jp-gc-metal-gold{--stone:sepia(1) saturate(2.3) hue-rotate(8deg) brightness(1.45)}
.jp-gc-atmosphere{position:absolute;inset:0;z-index:-3;background:radial-gradient(ellipse at 50% 46%,rgba(var(--gc-rgb),.16),transparent 57%),linear-gradient(160deg,#050a16,#02040a 60%,#0a1120);transition:background 1s}
.jp-gc-atmosphere:after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at center,transparent 25%,#0009 100%);box-shadow:inset 0 0 70px #000}
.jp-gc-aureole{position:absolute;z-index:-2;width:min(100vw,700px);aspect-ratio:1;top:47%;left:50%;transform:translate(-50%,-50%);opacity:.38;background:repeating-conic-gradient(from 0deg,transparent 0deg 13deg,rgba(var(--gc-rgb),.17) 14deg,transparent 17deg 30deg);mask-image:radial-gradient(circle,#0001 5%,#000 25%,transparent 68%);-webkit-mask-image:radial-gradient(circle,#0001 5%,#000 25%,transparent 68%);animation:gc-rays 32s linear infinite}
.jp-gc-floor{position:absolute;width:min(90vw,570px);height:140px;left:50%;top:calc(47% + 115px);transform:translateX(-50%);background:radial-gradient(ellipse,rgba(var(--gc-rgb),.11),transparent 68%);pointer-events:none}
.jp-gc-floor i{position:absolute;inset:15px 20px;border:1px solid rgba(var(--gc-rgb),.22);border-radius:50%;box-shadow:0 0 14px rgba(var(--gc-rgb),.14),inset 0 0 16px rgba(var(--gc-rgb),.1)}.jp-gc-floor i+i{inset:33px 65px;border-style:dashed;opacity:.65}
.jp-gc-fx{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:4}
.jp-gc-heading{position:absolute;top:calc(12% + env(safe-area-inset-top));display:flex;flex-direction:column;align-items:center;gap:12px;color:#e8d7ae;text-shadow:0 0 18px #d5b57455;pointer-events:none}
.jp-gc-heading>span{font-family:Cinzel,Georgia,serif;letter-spacing:.34em;font-size:11px;opacity:.7}.jp-gc-heading>i{width:50px;height:1px;background:linear-gradient(90deg,transparent,#b79b63,transparent)}.jp-gc-heading>small{font-family:'Shippori Mincho B1',serif;font-size:21px;letter-spacing:.5em;padding-left:.5em}
.jp-gc-chest-scene{position:absolute;left:50%;top:47%;width:min(67vw,310px);aspect-ratio:1.15;transform:translate(-50%,-50%);perspective:850px}
.jp-gc-chest-closed{position:absolute;left:0;right:0;bottom:4%;aspect-ratio:1000/745;z-index:2;filter:drop-shadow(0 25px 22px #0009)}
.jp-gc-chest-base,.jp-gc-chest-lid{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
.jp-gc-chest-base{clip-path:inset(39% 0 0 0)}.jp-gc-chest-lid{clip-path:inset(0 0 60% 0);transform-origin:50% 40%;backface-visibility:hidden;-webkit-backface-visibility:hidden}
.jp-gc-chest-open{position:absolute;left:0;bottom:4%;width:100%;height:auto;z-index:1;opacity:0;pointer-events:none;filter:drop-shadow(0 25px 22px #0009)}
.jp-gc-p-chest .jp-gc-chest-scene{animation:gc-chest-camera 1.8s cubic-bezier(.2,.7,.2,1) both}
.jp-gc-p-chest .jp-gc-chest-base{animation:gc-base-open 1.8s ease both}.jp-gc-p-chest .jp-gc-chest-lid{animation:gc-lid-open 1.8s cubic-bezier(.2,.8,.2,1) both}.jp-gc-p-chest .jp-gc-chest-open{animation:gc-open-art 1.8s ease both}
.jp-gc-chest-core{position:absolute;width:50%;height:18%;left:25%;top:31%;z-index:3;background:radial-gradient(ellipse,#fff 0%,rgba(var(--gc-rgb),.9) 20%,transparent 70%);filter:blur(8px);opacity:0;mix-blend-mode:screen;pointer-events:none}.jp-gc-p-chest .jp-gc-chest-core{animation:gc-open-core 1.8s ease both}
.jp-gc-chest-fan{position:absolute;inset:0;z-index:0;opacity:0;pointer-events:none;mix-blend-mode:screen}.jp-gc-chest-fan i{position:absolute;width:120px;height:min(65vh,480px);left:calc(50% - 60px);bottom:57%;transform-origin:50% 100%;transform:rotate(var(--angle));clip-path:polygon(0 0,100% 0,54% 100%,46% 100%);background:linear-gradient(0deg,#fff 0%,rgba(var(--gc-rgb),.55) 18%,rgba(var(--gc-rgb),.08) 75%,transparent);mask-image:linear-gradient(0deg,#000 0%,#0008 35%,transparent 85%);-webkit-mask-image:linear-gradient(0deg,#000 0%,#0008 35%,transparent 85%);filter:blur(7px)}.jp-gc-p-chest .jp-gc-chest-fan{animation:gc-open-fan 1.8s ease both}
.jp-gc-c-rainbow .jp-gc-chest-fan i:nth-child(3n){background:linear-gradient(0deg,#fff,#ffd38099 25%,transparent)}.jp-gc-c-rainbow .jp-gc-chest-fan i:nth-child(3n+1){background:linear-gradient(0deg,#fff,#80d7ff99 25%,transparent)}.jp-gc-c-rainbow .jp-gc-chest-fan i:nth-child(3n+2){background:linear-gradient(0deg,#fff,#e095ff99 25%,transparent)}
.jp-gc-chest-bloom{position:absolute;inset:-50%;z-index:4;background:radial-gradient(ellipse at center,#fff 0%,rgba(var(--gc-rgb),.65) 12%,transparent 58%);mix-blend-mode:screen;opacity:0;pointer-events:none}.jp-gc-p-chest .jp-gc-chest-bloom{animation:gc-chest-bloom 1.8s ease both}
.jp-gc-lens-flare{position:absolute;left:-40%;top:45%;width:180%;height:2px;z-index:5;background:linear-gradient(90deg,transparent,rgba(var(--gc-rgb),.45) 20%,#fff 50%,rgba(var(--gc-rgb),.45) 80%,transparent);box-shadow:0 0 15px 4px rgba(var(--gc-rgb),.45);opacity:0;pointer-events:none}.jp-gc-p-chest .jp-gc-lens-flare{animation:gc-open-flare 1.8s ease both}
.jp-gc-p-chest .jp-gc-aureole,.jp-gc-p-strike .jp-gc-aureole{opacity:.85;width:min(150vw,1000px)}
.jp-gc-p-rise .jp-gc-tablet{filter:drop-shadow(0 0 24px rgba(var(--gc-rgb),.45))}.jp-gc-p-strike.jp-gc-thunder-large .jp-gc-tablet,.jp-gc-p-strike.jp-gc-thunder-chime .jp-gc-tablet{animation:gc-heavy-hit .55s linear .14s both}
.jp-gc-p-strike .jp-gc-shockwave{border-width:3px;box-shadow:0 0 36px var(--gc),inset 0 0 36px var(--gc)}
.jp-gc-p-result.jp-gc-c-gold .jp-gc-aureole,.jp-gc-p-result.jp-gc-c-rainbow .jp-gc-aureole{opacity:.95;width:min(145vw,1000px)}
@keyframes gc-chest-camera{0%{transform:translate(-50%,-50%) scale(.82)}42%{transform:translate(-50%,-50%) scale(.94)}57%{transform:translate(-50%,-50%) scale(1.06)}100%{transform:translate(-50%,-50%) scale(1)}}
@keyframes gc-base-open{0%,45%{opacity:1}65%,100%{opacity:0}}
@keyframes gc-lid-open{0%,40%{transform:rotateX(0);opacity:1}59%{transform:rotateX(-105deg);opacity:0}100%{transform:rotateX(-105deg);opacity:0}}
@keyframes gc-open-art{0%,45%{opacity:0;transform:translateY(22px) scale(.94)}64%,100%{opacity:1;transform:translateY(0) scale(1)}}
@keyframes gc-open-core{0%,35%{opacity:0;transform:scale(.25)}46%{opacity:.9;transform:scale(.75)}62%{opacity:1;transform:scale(1.7)}100%{opacity:.45;transform:scale(1.2)}}
@keyframes gc-open-fan{0%,43%{opacity:0;transform:scaleX(.1)}60%{opacity:.9;transform:scaleX(1)}100%{opacity:.45;transform:scaleX(1.2)}}
@keyframes gc-chest-bloom{0%,43%{opacity:0;transform:scale(.15)}52%{opacity:.95;transform:scale(1.1)}72%{opacity:.22;transform:scale(1.5)}100%{opacity:.04;transform:scale(1.6)}}
@keyframes gc-open-flare{0%,45%{opacity:0;transform:scaleX(.1)}53%{opacity:1;transform:scaleX(1)}100%{opacity:0;transform:scaleX(1.4)}}
@keyframes gc-heavy-hit{0%,100%{transform:rotateY(-12deg) translate(0,0)}20%{transform:rotateY(-12deg) translate(-5px,3px)}40%{transform:rotateY(-12deg) translate(4px,-3px)}60%{transform:rotateY(-12deg) translate(-3px,2px)}80%{transform:rotateY(-12deg) translate(1px,-1px)}}

.jp-gc-chest-halo{position:absolute;inset:0;background:radial-gradient(ellipse,rgba(var(--gc-rgb),.2),transparent 65%);filter:blur(12px)}
.jp-gc-tablet-scene{position:absolute;left:50%;top:47%;width:min(55vw,245px);aspect-ratio:63/88;transform:translate(-50%,-50%);perspective:950px;z-index:2}
.jp-gc-tablet{position:absolute;inset:0;transform-style:preserve-3d;transform:rotateY(-12deg);filter:drop-shadow(0 0 14px rgba(var(--gc-rgb),.25))}
.jp-gc-p-rise .jp-gc-tablet{animation:gc-rise 1.2s cubic-bezier(.16,.7,.28,1) both}
.jp-gc-shard{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden}.jp-gc-shard img{width:100%;height:100%;object-fit:fill;filter:var(--stone,none);pointer-events:none}
.jp-gc-beam{position:absolute;inset:-55% -38% -20%;z-index:-1;background:linear-gradient(90deg,transparent,rgba(var(--gc-rgb),.05) 22%,rgba(var(--gc-rgb),.23) 49%,rgba(var(--gc-rgb),.05) 75%,transparent);mask-image:linear-gradient(transparent,#000 50%,#000);-webkit-mask-image:linear-gradient(transparent,#000 50%,#000);transform-origin:bottom;animation:gc-beam 1.2s ease-out both}
.jp-gc-seal{position:absolute;inset:-13% -26%;border-radius:50%;border:1px solid rgba(var(--gc-rgb),.18);box-shadow:0 0 35px rgba(var(--gc-rgb),.08),inset 0 0 35px rgba(var(--gc-rgb),.08);transform:rotateX(35deg);animation:gc-seal 8s linear infinite}.jp-gc-seal:after{content:'';position:absolute;inset:10px;border:1px dashed rgba(var(--gc-rgb),.18);border-radius:50%}
.jp-gc-cracks{position:absolute;inset:0;width:100%;height:100%;opacity:0;stroke:#f5faff;stroke-width:.55;filter:drop-shadow(0 0 3px var(--gc));pointer-events:none}
.jp-gc-p-strike .jp-gc-cracks{animation:gc-cracks .9s linear both}.jp-gc-p-strike .jp-gc-shard{animation:gc-shatter .9s cubic-bezier(.1,.65,.4,1) both}
.jp-gc-p-strike .jp-gc-seal,.jp-gc-p-strike .jp-gc-beam{animation:gc-vanish .65s ease-out .2s both}
.jp-gc-impact{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 47%,#fff 0%,rgba(var(--gc-rgb),.75) 8%,transparent 60%);mix-blend-mode:screen;pointer-events:none;z-index:5;animation:gc-impact .9s ease-out both}.jp-gc-thunder-normal .jp-gc-impact{opacity:.7}.jp-gc-thunder-chime .jp-gc-impact{background:radial-gradient(ellipse at 50% 47%,#fff 4%,#f5d4ff 12%,#99caff88 30%,transparent 70%)}
.jp-gc-shockwave{position:absolute;inset:25% -10%;border:2px solid var(--gc);box-shadow:0 0 25px var(--gc),inset 0 0 25px var(--gc);border-radius:50%;opacity:0}.jp-gc-p-strike .jp-gc-shockwave{animation:gc-wave .9s ease-out both}
.jp-gc-veil-scene{position:absolute;top:47%;left:50%;width:min(60vw,260px);aspect-ratio:63/88;transform:translate(-50%,-50%);perspective:1000px;animation:gc-materialize .95s ease-out both}
.jp-gc-card-shadow{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;filter:blur(3.5px) brightness(.55) saturate(.7);opacity:.68;overflow:hidden;transform:rotateY(-12deg) scale(.94)}
.jp-gc-veil-light{position:absolute;inset:-15%;border-radius:35%;background:radial-gradient(ellipse,rgba(var(--gc-rgb),.12) 20%,rgba(var(--gc-rgb),.65) 47%,transparent 69%);filter:blur(14px);mix-blend-mode:screen;animation:gc-veil .95s ease both;pointer-events:none}
.jp-gc-veil-sweep{position:absolute;inset:-10%;background:linear-gradient(110deg,transparent 20%,rgba(var(--gc-rgb),.65) 48%,#fffc 50%,rgba(var(--gc-rgb),.6) 52%,transparent 80%);filter:blur(12px);mix-blend-mode:screen;animation:gc-sweep .95s ease both;pointer-events:none}
.jp-gc-c-rainbow .jp-gc-atmosphere{background:radial-gradient(ellipse at 28% 40%,#668aff22,transparent 48%),radial-gradient(ellipse at 72% 47%,#ff80cf22,transparent 48%),radial-gradient(ellipse at 50% 68%,#ffe19515,transparent 48%),#030610}.jp-gc-c-rainbow .jp-gc-aureole{background:repeating-conic-gradient(from 15deg,#ffc47e33 0deg 3deg,transparent 3deg 20deg,#86c8ff33 20deg 23deg,transparent 23deg 40deg,#e3a1ff33 40deg 43deg,transparent 43deg 60deg);opacity:.6}
.jp-gc-c-rainbow .jp-gc-beam,.jp-gc-c-rainbow .jp-gc-veil-light{background:conic-gradient(from 35deg,#ff90ba44,#ffe49388,#8df9c955,#92caff99,#dc9cff88,#ff90ba44);mask-image:radial-gradient(ellipse,#000 15%,transparent 70%);-webkit-mask-image:radial-gradient(ellipse,#000 15%,transparent 70%)}
.jp-gc-footer{position:absolute;bottom:calc(9% + env(safe-area-inset-bottom));display:flex;flex-direction:column;align-items:center;gap:16px;pointer-events:none}.jp-gc-footer p{font-size:11px;letter-spacing:.2em;color:#aab3c6;margin:0}.jp-gc-progress{display:flex;gap:10px}.jp-gc-progress i{width:5px;height:5px;transform:rotate(45deg);border:1px solid #6e6653;transition:background .4s,box-shadow .4s}.jp-gc-progress .is-lit{background:#e1c38b;border-color:#f6dba0;box-shadow:0 0 8px #cfaa6480}
.jp-gr-skip{position:absolute;z-index:8;top:calc(14px + env(safe-area-inset-top));right:14px;border:1px solid #d4c39c44;background:#05080f80;color:#d9d5ce;border-radius:20px;padding:9px 16px;font-size:11px;letter-spacing:.12em;cursor:pointer;min-height:36px}
.jp-gc-result{position:relative;z-index:6;display:flex;flex-direction:column;align-items:center;gap:10px;padding:calc(20px + env(safe-area-inset-top)) 18px calc(20px + env(safe-area-inset-bottom));width:100%;max-width:380px;box-sizing:border-box;max-height:100dvh;overflow-y:auto;cursor:default;animation:gc-result .7s cubic-bezier(.16,1,.3,1) both}
.jp-gc-rarity{font-family:Cinzel,Georgia,serif;font-weight:900;font-size:46px;line-height:1.1;letter-spacing:.12em;text-shadow:0 0 22px rgba(var(--gc-rgb),.6)}.jp-gc-rarity-n{color:#e4eaf0}.jp-gc-rarity-r{color:#8bc8ff}.jp-gc-rarity-s{color:#e1eaf6}.jp-gc-rarity-g{color:#ffdf92}.jp-gc-rarity-u{background:linear-gradient(100deg,#ffb2d3,#ffeca9,#afffd7,#9dcaff,#ecc0ff);background-clip:text;-webkit-background-clip:text;color:transparent}
.jp-gc-result-card{filter:drop-shadow(0 0 22px rgba(var(--gc-rgb),.35));animation:gc-card-arrive .8s cubic-bezier(.2,.8,.3,1) both}
.jp-gc-name{position:relative;padding:3px 18px;background:linear-gradient(90deg,transparent,#02060dcc,transparent);text-shadow:0 2px 4px #000;margin:0;text-align:center;font-family:'Shippori Mincho B1',serif;font-weight:800;font-size:18px;line-height:1.5}.jp-gc-name small{display:block;font-family:inherit;font-size:12px;font-weight:400;color:#a5b0c2}
.jp-gc-buttons{display:flex;flex-direction:column;align-items:center;gap:8px;width:100%;margin-top:6px}.jp-gc-buttons>*{max-width:100%;min-width:min(220px,100%);width:auto;padding-left:28px;padding-right:28px}
.jp-gc-demo-label{font-size:10px;color:#b7bfd0;margin:0;text-align:center}.jp-gc-preview label{display:flex;flex-direction:column;gap:8px;font-size:12px}.jp-gc-preview select{width:100%;border:1px solid #ac8b4544;background:#10192b;color:#e5d4b0;padding:12px;border-radius:6px;font-size:14px}.jp-gc-preview>button{margin-top:14px}.jp-gc-preview>p{font-size:12px;opacity:.7}
@keyframes gc-rays{from{transform:translate(-50%,-50%) rotate(0)}to{transform:translate(-50%,-50%) rotate(360deg)}}
@keyframes gc-rise{0%{opacity:0;transform:translateY(5px) rotateY(0) scale(.16)}15%{opacity:1}58%{transform:translateY(-52px) rotateY(-24deg) scale(.48)}100%{transform:translateY(0) rotateY(-12deg) scale(1)}}
@keyframes gc-beam{0%{opacity:0;transform:scaleX(.2)}50%,100%{opacity:1;transform:scaleX(1)}}
@keyframes gc-seal{to{transform:rotateX(35deg) rotateZ(360deg)}}
@keyframes gc-cracks{0%,10%{opacity:0}15%,24%{opacity:1}45%,100%{opacity:0}}
@keyframes gc-shatter{0%,16%{transform:translate3d(0,0,0) rotate(0);opacity:1}27%{opacity:1}100%{transform:translate3d(var(--dx),var(--dy),var(--depth)) rotate(var(--rot));opacity:0}}
@keyframes gc-impact{0%,8%{opacity:0}14%{opacity:.75}26%{opacity:.25}48%,100%{opacity:0}}
@keyframes gc-wave{0%,15%{opacity:0;transform:scale(.2) rotateX(60deg)}25%{opacity:.8}85%,100%{opacity:0;transform:scale(3) rotateX(60deg)}}
@keyframes gc-vanish{to{opacity:0;transform:scale(1.4)}}
@keyframes gc-materialize{0%{opacity:0;transform:translate(-50%,-50%) scale(.75)}25%{opacity:1}100%{transform:translate(-50%,-50%) scale(1)}}
@keyframes gc-veil{0%{opacity:.4;transform:scale(.8)}35%{opacity:1;transform:scale(1.15)}100%{opacity:.7;transform:scale(1)}}
@keyframes gc-sweep{0%{opacity:0;transform:translateX(-70%)}45%{opacity:.85}100%{opacity:0;transform:translateX(70%)}}
@keyframes gc-result{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:none}}
@keyframes gc-card-arrive{from{filter:brightness(2.5);transform:translateY(8px) scale(.9)}to{filter:brightness(1);transform:none}}
/* Continuous chest-to-card motion, informed by the supplied screen recording. */
.jp-gc-p-rise .jp-gc-chest-scene{animation:gc-chest-recede 1.2s cubic-bezier(.2,.7,.2,1) both;z-index:0}
.jp-gc-p-rise .jp-gc-chest-closed{display:none}.jp-gc-p-rise .jp-gc-chest-open{opacity:1}
.jp-gc-p-rise .jp-gc-chest-core{opacity:.65}.jp-gc-p-rise .jp-gc-chest-fan{opacity:.25}
.jp-gc-p-rise .jp-gc-tablet:after{content:'';position:absolute;inset:3%;background:linear-gradient(135deg,#fff,rgba(var(--gc-rgb),.85));box-shadow:0 0 25px 12px rgba(var(--gc-rgb),.5);border-radius:3%;mix-blend-mode:screen;pointer-events:none;animation:gc-slab-light 1.2s ease-out both}
.jp-gc-p-rise .jp-gc-tablet{filter:drop-shadow(0 0 30px rgba(var(--gc-rgb),.75))}
.jp-gc-veil-scene{z-index:3}.jp-gc-card-shadow{animation:gc-card-approach .95s cubic-bezier(.16,.65,.2,1) both;opacity:.8}
.jp-gc-filter-defs{position:absolute;width:0;height:0;pointer-events:none}
.jp-gc-vortex{position:absolute;left:50%;top:47%;width:min(104vw,450px);aspect-ratio:1;transform:translate(-50%,-50%);z-index:1;pointer-events:none;mix-blend-mode:screen;animation:gc-vortex-in .6s cubic-bezier(.12,.7,.2,1) both}
.jp-gc-vortex>i{position:absolute;inset:0;border-radius:50%;animation:gc-vortex-swirl 3.2s linear infinite}
.jp-gc-vortex>i:before{content:"";position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 5deg,rgba(var(--gc-rgb),.05),rgba(var(--gc-rgb),.95) 18deg,#fff 34deg,rgba(var(--gc-rgb),.2) 70deg,rgba(var(--gc-rgb),.9) 95deg,#fff 114deg,rgba(var(--gc-rgb),.08) 160deg,rgba(var(--gc-rgb),.9) 205deg,#fff 225deg,rgba(var(--gc-rgb),.15) 258deg,rgba(var(--gc-rgb),.9) 305deg,#fff 325deg,rgba(var(--gc-rgb),.05));mask-image:radial-gradient(closest-side,transparent 68%,#000 80%,#000 88%,transparent 100%);-webkit-mask-image:radial-gradient(closest-side,transparent 68%,#000 80%,#000 88%,transparent 100%);}
.jp-gc-vortex>i+i{inset:7%;opacity:.8;animation-duration:2.1s;animation-direction:reverse;transform:rotate(70deg)}
.jp-gc-vortex>b{position:absolute;inset:16%;border:1px solid rgba(var(--gc-rgb),.65);border-radius:50%;box-shadow:0 0 32px 10px rgba(var(--gc-rgb),.4),inset 0 0 30px rgba(var(--gc-rgb),.45);animation:gc-vortex-breathe 1.4s ease-in-out infinite}
.jp-gc-c-rainbow .jp-gc-vortex>i:before{background:conic-gradient(from 20deg,#fface655,#ffe9aaff,#fff 55deg,#a5ffcdbb 95deg,#79c5ffdd 150deg,#fff 170deg,#e3a2ffdd 215deg,#ffb3d6cc 270deg,#fff 290deg,#ffe19add 330deg,#fface655)}
.jp-gc.jp-gc-p-chest .jp-gc-aureole,.jp-gc.jp-gc-p-result .jp-gc-aureole,.jp-gc.jp-gc-p-strike .jp-gc-aureole{opacity:.23}
@keyframes gc-chest-recede{0%{opacity:1;transform:translate(-50%,-50%) scale(1)}65%{opacity:.55}100%{opacity:0;transform:translate(-50%,-28%) scale(.55)}}
@keyframes gc-slab-light{0%,15%{opacity:1}55%{opacity:.5}100%{opacity:.08}}
@keyframes gc-card-approach{0%{transform:rotateY(-65deg) translateY(-10px) scale(.58);filter:blur(6px) brightness(2.5)}60%{filter:blur(3px) brightness(1.5)}100%{transform:rotateY(0) translateY(0) scale(1);filter:blur(2px) brightness(1.05)}}
@keyframes gc-vortex-in{0%{opacity:0;transform:translate(-50%,-50%) scale(.25)}45%{opacity:1}100%{opacity:1;transform:translate(-50%,-50%) scale(1)}}
@keyframes gc-vortex-swirl{to{transform:rotate(360deg)}}
@keyframes gc-vortex-breathe{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:1;transform:scale(1.07)}}

@media(max-height:680px){.jp-gc-heading{top:10%}.jp-gc-heading>small{font-size:18px}.jp-gc-tablet-scene{width:min(50vw,205px)}.jp-gc-veil-scene{width:min(54vw,230px)}.jp-gc-result{gap:6px}.jp-gc-rarity{font-size:36px}.jp-gc-result-card{zoom:.86}.jp-gc-result .jp-gc-name{font-size:15px}.jp-gc-footer{bottom:7%}}

/* CHEST MOVIE v1: cinematic lighting and depth around the existing hinged chest art. */
.jp-gc-chest-scene{transform-style:preserve-3d;filter:drop-shadow(0 23px 30px #000b)}
.jp-gc-chest-base,.jp-gc-chest-lid,.jp-gc-chest-open{image-rendering:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden}
.jp-gc-chest-filmflare{position:absolute;z-index:4;left:-55%;right:-55%;top:42%;height:4px;pointer-events:none;opacity:0;background:linear-gradient(90deg,transparent,rgba(255,217,121,.12) 18%,rgba(var(--gc-rgb),.65) 38%,#fff 50%,rgba(var(--gc-rgb),.55) 63%,transparent);box-shadow:0 0 14px 5px rgba(var(--gc-rgb),.35),0 0 85px 25px rgba(var(--gc-rgb),.2);filter:blur(.4px)}
.jp-gc-p-chest .jp-gc-chest-filmflare{animation:gc-chest-filmflare 1.25s ease-out both}
.jp-gc-chest-metalglow{position:absolute;z-index:5;left:8%;right:8%;bottom:2%;height:55%;pointer-events:none;opacity:0;border-radius:48%;background:radial-gradient(ellipse at 50% 40%,transparent 28%,#ffdf983a 69%,transparent 78%);mix-blend-mode:screen;filter:blur(8px)}
.jp-gc-p-chest .jp-gc-chest-metalglow{animation:gc-metal-reflections 1.25s ease-out both}
.jp-gc-chest-dust{position:absolute;inset:-45%;z-index:6;pointer-events:none;mix-blend-mode:screen}
.jp-gc-chest-dust i{position:absolute;left:50%;top:46%;width:3px;height:3px;opacity:0;border-radius:50%;background:#fff9e1;box-shadow:0 0 7px 3px #ffdc8bbb,0 0 18px 6px rgba(var(--gc-rgb),.25)}
.jp-gc-p-chest .jp-gc-chest-dust i{animation:gc-chest-fly 1s cubic-bezier(.18,.64,.25,1) var(--lag) both}
.jp-gc-p-chest .jp-gc-chest-scene{animation-duration:1.25s}
.jp-gc-p-chest .jp-gc-chest-base,.jp-gc-p-chest .jp-gc-chest-lid,.jp-gc-p-chest .jp-gc-chest-open,.jp-gc-p-chest .jp-gc-chest-core,.jp-gc-p-chest .jp-gc-chest-fan,.jp-gc-p-chest .jp-gc-chest-bloom,.jp-gc-p-chest .jp-gc-lens-flare{animation-duration:1.25s}
.jp-gc-p-rise .jp-gc-chest-scene,.jp-gc-p-rise .jp-gc-tablet,.jp-gc-p-rise .jp-gc-tablet:after,.jp-gc-p-rise .jp-gc-beam{animation-duration:.95s}
.jp-gc-p-hold .jp-gc-chest-scene{display:none}
.jp-gc-p-hold .jp-gc-tablet{animation:gc-tablet-suspense .85s ease-in-out both;filter:drop-shadow(0 0 18px rgba(var(--gc-rgb),.52))}
.jp-gc-p-hold .jp-gc-tablet:after{content:'';position:absolute;inset:2%;border-radius:4%;background:linear-gradient(110deg,transparent 22%,rgba(var(--gc-rgb),.7) 46%,#fff9 50%,transparent 67%);mix-blend-mode:screen;pointer-events:none;animation:gc-tablet-sheen .85s ease-out both}
.jp-gc-p-hold .jp-gc-seal{animation:gc-seal 2.2s linear infinite;box-shadow:0 0 45px rgba(var(--gc-rgb),.15),inset 0 0 38px rgba(var(--gc-rgb),.14)}
.jp-gc-p-hold .jp-gc-cracks{opacity:0}
.jp-gc-p-strike .jp-gc-shard,.jp-gc-p-strike .jp-gc-cracks,.jp-gc-p-strike .jp-gc-shockwave,.jp-gc-impact{animation-duration:.5s}
.jp-gc-p-veil .jp-gc-card-shadow{animation:gc-card-approach-premium 1s cubic-bezier(.14,.67,.23,1) both}
.jp-gc-p-veil .jp-gc-veil-scene,.jp-gc-p-veil .jp-gc-veil-light,.jp-gc-p-veil .jp-gc-veil-sweep{animation-duration:1s}
.jp-gc-p-result .jp-gc-vortex{opacity:.12;animation:none}
.jp-gc-p-result .jp-gc-aureole{opacity:.17!important;width:min(104vw,700px)!important}
.jp-gc-p-result .jp-gc-result-card{filter:drop-shadow(0 6px 18px rgba(var(--gc-rgb),.26))}
.jp-gc-p-result .jp-gc-rarity{filter:drop-shadow(0 0 8px rgba(var(--gc-rgb),.23))}
@keyframes gc-chest-filmflare{0%,37%{opacity:0;transform:scaleX(.1)}54%{opacity:.95;transform:scaleX(1)}82%,100%{opacity:0;transform:scaleX(1.4)}}
@keyframes gc-metal-reflections{0%,36%{opacity:0}55%{opacity:.8}100%{opacity:.12}}
@keyframes gc-chest-fly{0%,43%{opacity:0;transform:rotate(var(--a)) translateY(0) scale(.2)}57%{opacity:1}100%{opacity:0;transform:rotate(var(--a)) translateY(var(--reach)) scale(.35)}}
@keyframes gc-tablet-suspense{0%{transform:translateY(3px) rotateY(-10deg)}45%{transform:translateY(-7px) rotateY(4deg) scale(1.035)}85%{transform:translateY(-5px) rotateY(0) scale(1.01)}100%{transform:translateY(-4px) rotateY(0)}}
@keyframes gc-tablet-sheen{0%,14%{opacity:0;transform:translateX(-80%)}47%{opacity:.7}100%{opacity:0;transform:translateX(70%)}}
@keyframes gc-card-approach-premium{0%{transform:rotateY(-66deg) translateY(-16px) scale(.55);filter:blur(8px) brightness(2.3);opacity:.1}40%{opacity:.8;filter:blur(2px) brightness(1.55)}77%{filter:blur(.7px) brightness(1.1)}100%{transform:rotateY(0) translateY(0) scale(1);filter:blur(0) brightness(1);opacity:1}}
@media (prefers-reduced-motion:reduce){.jp-gc-chest-dust,.jp-gc-chest-metalglow,.jp-gc-chest-filmflare{display:none}}


/* 10s N film + additional R+ tablet stages. Phase lengths match gachaSequence.mjs.
   The final result screen remains visible until the player dismisses it. */
.jp-gc-p-gather .jp-gc-chest-scene{animation:gc-gather-anticipation 3.1s cubic-bezier(.25,.55,.3,1) both}
.jp-gc-p-gather .jp-gc-chest-halo{animation:gc-halo-buildup 3.1s ease-in-out both}
.jp-gc-p-gather .jp-gc-chest-metalglow{animation:gc-metal-buildup 3.1s ease-in-out both}
.jp-gc-p-gather .jp-gc-aureole{animation-duration:18s;opacity:.48}
.jp-gc-p-chest .jp-gc-chest-scene,
.jp-gc-p-chest .jp-gc-chest-base,.jp-gc-p-chest .jp-gc-chest-lid,
.jp-gc-p-chest .jp-gc-chest-open,.jp-gc-p-chest .jp-gc-chest-core,
.jp-gc-p-chest .jp-gc-chest-fan,.jp-gc-p-chest .jp-gc-chest-bloom,
.jp-gc-p-chest .jp-gc-lens-flare,.jp-gc-p-chest .jp-gc-chest-filmflare,
.jp-gc-p-chest .jp-gc-chest-metalglow{animation-duration:1.9s}
.jp-gc-p-rise .jp-gc-chest-scene,.jp-gc-p-rise .jp-gc-tablet,
.jp-gc-p-rise .jp-gc-tablet:after,.jp-gc-p-rise .jp-gc-beam{animation-duration:1.5s}
.jp-gc-p-hold .jp-gc-tablet,.jp-gc-p-hold .jp-gc-tablet:after{animation-duration:1.45s}
.jp-gc-p-strike .jp-gc-shard,.jp-gc-p-strike .jp-gc-cracks,
.jp-gc-p-strike .jp-gc-shockwave,.jp-gc-p-strike .jp-gc-impact,
.jp-gc-p-strike .jp-gc-seal,.jp-gc-p-strike .jp-gc-beam{animation-duration:.85s}
.jp-gc-p-veil .jp-gc-veil-scene,.jp-gc-p-veil .jp-gc-card-shadow,
.jp-gc-p-veil .jp-gc-veil-light,.jp-gc-p-veil .jp-gc-veil-sweep{animation-duration:2.95s}
.jp-gc-p-settle .jp-gc-veil-scene{animation:gc-result-settling 2.05s ease-in-out both}
.jp-gc-p-settle .jp-gc-card-shadow{filter:blur(0) brightness(1) saturate(1);opacity:1;transform:rotateY(0) scale(1);animation:gc-final-card-hold 2.05s ease-in-out both}
.jp-gc-p-settle .jp-gc-veil-light{opacity:.26;animation:gc-final-bloom 2.05s ease-out both}
.jp-gc-p-settle .jp-gc-veil-sweep{opacity:0}
.jp-gc-p-settle .jp-gc-aureole{opacity:.20}
@keyframes gc-gather-anticipation{
  0%{opacity:.8;transform:translate(-50%,-50%) scale(.88) rotate(-1deg);filter:brightness(.60)}
  30%{opacity:1;transform:translate(-50%,-50%) scale(.94) rotate(0);filter:brightness(.9)}
  60%{transform:translate(-50%,-50%) scale(1) rotate(.8deg);filter:brightness(1.2)}
  80%{transform:translate(-50%,-50%) scale(1.04) rotate(-.4deg);filter:brightness(1.4)}
  100%{transform:translate(-50%,-50%) scale(1.06);filter:brightness(1.9)}
}
@keyframes gc-halo-buildup{from{opacity:.12;filter:blur(22px)}to{opacity:1;filter:blur(5px)}}
@keyframes gc-metal-buildup{0%{opacity:0}70%{opacity:.20}100%{opacity:.65}}
@keyframes gc-result-settling{0%{opacity:1;transform:translate(-50%,-50%) scale(1.02)}100%{opacity:1;transform:translate(-50%,-50%) scale(1)}}
@keyframes gc-final-card-hold{0%{filter:brightness(1.7) blur(.5px);transform:scale(1.03)}100%{filter:brightness(1) blur(0);transform:scale(1)}}
@keyframes gc-final-bloom{0%{opacity:.7;transform:scale(1.08)}100%{opacity:.17;transform:scale(1)}}


/* 2026-11-08: the drawn card is physically beneath the R+ stone.
   The exact SAME PlayerCard DOM remains in jp-gc-tablet between rise/hold/
   strike/veil/settle. Only the pieces above it move during the shatter. */
.jp-gc-sealed-scene{width:min(55vw,245px);z-index:3;overflow:visible}
.jp-gc-sealed-scene .jp-gc-tablet{isolation:isolate}
.jp-gc-sealed-card{position:absolute;inset:0;z-index:1;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:4px;background:#060a16}
.jp-gc-sealed-card>.jp-pcard{width:100%!important;max-width:100%;flex:0 0 100%;align-self:center;box-shadow:none}
.jp-gc-sealed-scene .jp-gc-shard{z-index:4}
.jp-gc-sealed-scene .jp-gc-cracks{z-index:6}
.jp-gc-card-edge-glow{position:absolute;inset:-2%;z-index:2;border-radius:6px;opacity:0;pointer-events:none;box-shadow:0 0 16px 4px rgba(var(--gc-rgb),.75),inset 0 0 20px 4px rgba(var(--gc-rgb),.85)}
.jp-gc-p-hold .jp-gc-card-edge-glow{opacity:.65;animation:gc-covered-edge-glow 1.45s ease-in-out both}
.jp-gc-p-strike .jp-gc-card-edge-glow{opacity:1;animation:gc-covered-edge-shatter .85s ease-out both}
.jp-gc-sealed-reveal-light{position:absolute;inset:-35%;z-index:7;pointer-events:none;opacity:0;mix-blend-mode:screen;background:radial-gradient(ellipse at center,#fff 2%,rgba(var(--gc-rgb),.65) 18%,transparent 56%)}
.jp-gc-p-strike .jp-gc-sealed-reveal-light{animation:gc-understone-flash .85s ease-out both}
.jp-gc-sealed-scene .jp-gc-tablet:after{z-index:7;pointer-events:none}
.jp-gc-p-strike .jp-gc-sealed-scene .jp-gc-tablet{transform:translateY(-4px) rotateY(0)}
.jp-gc-p-veil .jp-gc-sealed-scene .jp-gc-tablet{transform:translateY(-4px) rotateY(0) scale(1);animation:gc-sealed-card-emerge 2.95s ease-out both}
.jp-gc-p-veil .jp-gc-sealed-scene .jp-gc-shard,
.jp-gc-p-settle .jp-gc-sealed-scene .jp-gc-shard{display:none}
.jp-gc-p-veil .jp-gc-sealed-scene .jp-gc-cracks,
.jp-gc-p-settle .jp-gc-sealed-scene .jp-gc-cracks{display:none}
.jp-gc-p-veil .jp-gc-sealed-scene .jp-gc-card-edge-glow{opacity:.18;transition:opacity 1.5s}
.jp-gc-p-veil .jp-gc-sealed-scene .jp-gc-sealed-card{animation:gc-understone-reveal 2.95s ease-out both}
.jp-gc-p-veil .jp-gc-sealed-scene .jp-gc-sealed-reveal-light{animation:gc-after-stone-flash 2.95s ease-out both}
.jp-gc-p-settle .jp-gc-sealed-scene .jp-gc-tablet{transform:translateY(-4px) rotateY(0) scale(1.08);animation:gc-sealed-card-settle 2.05s ease-out both}
.jp-gc-p-settle .jp-gc-sealed-scene .jp-gc-sealed-card{filter:none;opacity:1}
.jp-gc-p-settle .jp-gc-sealed-scene .jp-gc-card-edge-glow{opacity:.10}
.jp-gc-p-settle .jp-gc-sealed-scene .jp-gc-sealed-reveal-light{opacity:0}
@keyframes gc-covered-edge-glow{0%,100%{opacity:.15}50%{opacity:.85}}
@keyframes gc-covered-edge-shatter{0%{opacity:.3}25%{opacity:1}100%{opacity:.1}}
@keyframes gc-understone-flash{0%,16%{opacity:0;transform:scale(.45)}23%{opacity:.9}48%{opacity:.45}100%{opacity:0;transform:scale(1.6)}}
@keyframes gc-after-stone-flash{0%{opacity:.65;transform:scale(.7)}38%{opacity:.20}100%{opacity:0;transform:scale(1.4)}}
@keyframes gc-understone-reveal{0%{filter:blur(1px) brightness(1.7)}45%{filter:blur(0) brightness(1.35)}100%{filter:none}}
@keyframes gc-sealed-card-emerge{0%{transform:translateY(-4px) rotateY(0) scale(.98)}60%{transform:translateY(-4px) rotateY(0) scale(1.13)}100%{transform:translateY(-4px) rotateY(0) scale(1.08)}}
@keyframes gc-sealed-card-settle{0%{transform:translateY(-4px) rotateY(0) scale(1.08);filter:brightness(1.2)}100%{transform:translateY(-4px) rotateY(0) scale(1.08);filter:brightness(1)}}

/* The unbroken stone image fills all shard seams until impact. */
.jp-gc-stone-underlay{position:absolute;inset:0;z-index:3;pointer-events:none}
.jp-gc-stone-underlay img{width:100%;height:100%;object-fit:fill;filter:var(--stone,none)}
.jp-gc-p-strike .jp-gc-stone-underlay{animation:gc-stone-shell-release .85s ease-out both}
.jp-gc-p-veil .jp-gc-stone-underlay,.jp-gc-p-settle .jp-gc-stone-underlay{display:none}
@keyframes gc-stone-shell-release{0%,16%{opacity:1}42%{opacity:.65}67%,100%{opacity:0}}


/* Stone v1.2: thick lithic layers, luminous fractures, optical shrapnel.
 * The slab texture completely covers the already-awarded card until impact. */
.jp-gc-sealed-scene .jp-gc-stone-underlight{position:absolute;inset:-7%;z-index:2;pointer-events:none;opacity:0;
 background:radial-gradient(ellipse at 48% 44%,#fff9 0%,rgba(var(--gc-rgb),.72) 23%,transparent 69%);
 filter:blur(8px);box-shadow:0 0 16px 6px rgba(var(--gc-rgb),.24),inset 0 0 26px rgba(var(--gc-rgb),.35)}
.jp-gc-p-hold .jp-gc-stone-underlight{animation:gc-lithic-suspense 1.45s ease-in-out both}
.jp-gc-p-strike .jp-gc-stone-underlight{animation:gc-lithic-rupture .85s ease-out both}
.jp-gc-p-veil .jp-gc-stone-underlight{opacity:.24}
.jp-gc-p-settle .jp-gc-stone-underlight{opacity:.06}
.jp-gc-sealed-scene .jp-gc-stone-underlay{box-shadow:inset 0 0 0 2px #d2b38699,inset 0 0 13px 5px #020812bb,0 3px 2px #000c,0 12px 28px #0007}
.jp-gc-sealed-scene .jp-gc-shard{transform-style:preserve-3d;will-change:transform,opacity}
.jp-gc-stone-chip-edge{position:absolute;inset:0;z-index:2;pointer-events:none;
 border:1px solid rgba(220,237,245,.22);box-shadow:inset 0 0 4px 1px #fafaff24,inset -3px -5px 9px 0 #000b,0 3px 0 rgba(23,32,48,.6);
 background:linear-gradient(132deg,#eef7ff10 0%,transparent 36%,#0204094a 78%,#0008 100%)}
.jp-gc-p-strike .jp-gc-shard{filter:drop-shadow(4px 8px 2px #000a) drop-shadow(0 0 2px rgba(var(--gc-rgb),.65))}
.jp-gc-p-strike .jp-gc-cracks{stroke:#fff;stroke-width:.62;filter:drop-shadow(0 0 2px #fff) drop-shadow(0 0 8px var(--gc));animation:gc-lithic-crack .85s linear both}
.jp-gc-stone-microshards{position:absolute;inset:0;z-index:8;pointer-events:none}
.jp-gc-stone-microshards i{position:absolute;top:50%;left:50%;width:var(--chip-size);height:calc(var(--chip-size)*1.6);
 opacity:0;transform:rotate(var(--az)) translateY(0) rotate(25deg) scale(.1);
 clip-path:polygon(50% 0,100% 35%,80% 100%,0 68%);
 background:linear-gradient(125deg,#fffbd6,#a6a5a1 24%,#393f50 72%,#090c16);
 box-shadow:0 0 6px 1px rgba(var(--gc-rgb),.55)}
.jp-gc-p-strike .jp-gc-stone-microshards i{animation:gc-microshard-fly .85s cubic-bezier(.13,.68,.29,.99) var(--delay) both}
.jp-gc-p-veil .jp-gc-stone-microshards,.jp-gc-p-settle .jp-gc-stone-microshards{display:none}
@keyframes gc-lithic-suspense{0%{opacity:.02}65%{opacity:.24}100%{opacity:.48}}
@keyframes gc-lithic-rupture{0%,12%{opacity:.45;filter:blur(8px)}23%,38%{opacity:1;filter:blur(2px)}100%{opacity:.12;filter:blur(18px)}}
@keyframes gc-lithic-crack{0%,11%{opacity:0}16%,28%{opacity:1}30%,38%{opacity:.65}45%,73%{opacity:1}100%{opacity:0}}
@keyframes gc-microshard-fly{0%,14%{opacity:0;transform:rotate(var(--az)) translateY(0) rotate(0) scale(.1)}24%{opacity:1}100%{opacity:0;transform:rotate(var(--az)) translateY(var(--flight)) rotate(235deg) scale(1.1)}}
@media(max-width:420px){.jp-gc-sealed-scene .jp-gc-shard{filter:none}}

@media(prefers-reduced-motion:reduce){
 .jp-gc-p-veil .jp-gc-sealed-scene .jp-gc-shard,
 .jp-gc-p-settle .jp-gc-sealed-scene .jp-gc-shard{display:none}
}


/* v1.5: 100ms prelude, 700ms explosive lid, then devote 9.2 seconds to
   the card/slab flying clear of the chest and its reveal (N is 10s total).
   The R+ sealed card remains one DOM element from launch through settle. */
.jp-gc-p-gather .jp-gc-chest-scene{animation:gc-quick-ready .1s ease-out both}
.jp-gc-p-gather .jp-gc-chest-halo,
.jp-gc-p-gather .jp-gc-chest-metalglow{animation:gc-quick-glow .1s ease-out both}
.jp-gc-p-chest .jp-gc-chest-scene,
.jp-gc-p-chest .jp-gc-chest-base,.jp-gc-p-chest .jp-gc-chest-lid,
.jp-gc-p-chest .jp-gc-chest-open,.jp-gc-p-chest .jp-gc-chest-core,
.jp-gc-p-chest .jp-gc-chest-fan,.jp-gc-p-chest .jp-gc-chest-bloom,
.jp-gc-p-chest .jp-gc-lens-flare,.jp-gc-p-chest .jp-gc-chest-filmflare,
.jp-gc-p-chest .jp-gc-chest-metalglow{animation-duration:.7s}
.jp-gc-p-chest .jp-gc-chest-base{animation:gc-fast-chest-base .7s ease-out both}
.jp-gc-p-chest .jp-gc-chest-lid{animation:gc-fast-chest-lid .7s cubic-bezier(.09,.55,.2,1) both}
.jp-gc-p-chest .jp-gc-chest-open{animation:gc-fast-chest-open .7s ease-out both}
.jp-gc-p-chest .jp-gc-chest-core{animation:gc-fast-chest-core .7s ease-out both}
.jp-gc-p-chest .jp-gc-chest-bloom{animation:gc-fast-chest-flash .7s ease-out both}
.jp-gc-p-chest .jp-gc-chest-fan{animation:gc-fast-chest-fan .7s ease-out both}
.jp-gc-p-chest .jp-gc-chest-filmflare{animation:gc-fast-horizontal-flash .7s ease-out both}
.jp-gc-p-launch .jp-gc-chest-scene{animation:gc-launch-chest-recede 2.3s ease-out both;z-index:0}
.jp-gc-p-launch .jp-gc-chest-closed{display:none}
.jp-gc-p-launch .jp-gc-chest-open{opacity:1}
.jp-gc-p-launch .jp-gc-chest-core{opacity:.75}
.jp-gc-p-launch .jp-gc-chest-fan{opacity:.3}
.jp-gc-p-rise .jp-gc-chest-scene{animation:gc-post-launch-chest-leave .9s ease-out both;z-index:0}
.jp-gc-p-rise .jp-gc-chest-closed{display:none}
.jp-gc-p-rise .jp-gc-chest-open{opacity:1}
.jp-gc-p-launch .jp-gc-tablet{animation:gc-sealed-flyout 2.3s cubic-bezier(.11,.55,.24,1) both}
.jp-gc-p-launch .jp-gc-seal{animation:gc-launch-seal 2.3s ease-in-out both}
.jp-gc-p-launch .jp-gc-beam{animation:gc-launch-beam 2.3s ease-out both}
.jp-gc-p-rise .jp-gc-sealed-scene .jp-gc-tablet{animation:gc-after-launch-hover .9s ease-out both}
.jp-gc-p-rise .jp-gc-sealed-scene .jp-gc-tablet:after{animation-duration:.9s}
.jp-gc-p-hold .jp-gc-sealed-scene .jp-gc-tablet{animation:gc-tablet-suspense 1.7s ease-in-out both}
.jp-gc-p-hold .jp-gc-sealed-scene .jp-gc-tablet:after{animation-duration:1.7s}
.jp-gc-p-hold .jp-gc-stone-underlight{animation-duration:1.7s}
.jp-gc-p-strike .jp-gc-shard,.jp-gc-p-strike .jp-gc-cracks,
.jp-gc-p-strike .jp-gc-shockwave,.jp-gc-p-strike .jp-gc-impact,
.jp-gc-p-strike .jp-gc-stone-underlay,.jp-gc-p-strike .jp-gc-stone-microshards i,
.jp-gc-p-strike .jp-gc-sealed-reveal-light{animation-duration:1.2s}
.jp-gc-p-strike .jp-gc-seal,.jp-gc-p-strike .jp-gc-beam{animation-duration:1.2s}
.jp-gc-p-launch .jp-gc-veil-scene,.jp-gc-p-veil .jp-gc-veil-scene{animation:none;opacity:1}
.jp-gc-p-launch .jp-gc-veil-scene{z-index:3}
.jp-gc-p-launch .jp-gc-card-shadow{animation:gc-direct-card-flyout 2.3s cubic-bezier(.11,.55,.24,1) both;transform-origin:50% 100%}
.jp-gc-p-launch .jp-gc-veil-light{animation:gc-launch-veil-flash 2.3s ease-out both}
.jp-gc-p-launch .jp-gc-veil-sweep{animation:gc-launch-veil-sweep 2.3s ease-out both}
.jp-gc-p-veil .jp-gc-card-shadow{animation:gc-prolonged-direct-reveal 5.1s cubic-bezier(.15,.7,.24,1) both}
.jp-gc-p-veil .jp-gc-veil-light,.jp-gc-p-veil .jp-gc-veil-sweep{animation-duration:5.1s}
.jp-gc-p-veil .jp-gc-sealed-scene .jp-gc-tablet,
.jp-gc-p-veil .jp-gc-sealed-scene .jp-gc-sealed-card,
.jp-gc-p-veil .jp-gc-sealed-scene .jp-gc-sealed-reveal-light{animation-duration:5.1s}
.jp-gc-p-settle .jp-gc-veil-scene,.jp-gc-p-settle .jp-gc-card-shadow,
.jp-gc-p-settle .jp-gc-sealed-scene .jp-gc-tablet{animation-duration:1.8s}
@keyframes gc-quick-ready{from{opacity:.85;transform:translate(-50%,-50%) scale(.94)}to{opacity:1;transform:translate(-50%,-50%) scale(1)}}
@keyframes gc-quick-glow{from{opacity:.05}to{opacity:.75}}
@keyframes gc-fast-chest-lid{0%,7%{opacity:1;transform:rotateX(0)}42%{opacity:1;transform:rotateX(-110deg)}55%,100%{opacity:0;transform:rotateX(-110deg)}}
@keyframes gc-fast-chest-base{0%,33%{opacity:1}45%,100%{opacity:0}}
@keyframes gc-fast-chest-open{0%,23%{opacity:0;transform:scale(.96) translateY(12px)}46%,100%{opacity:1;transform:scale(1) translateY(0)}}
@keyframes gc-fast-chest-core{0%,12%{opacity:0;transform:scale(.4)}25%{opacity:1;transform:scale(1.6)}75%,100%{opacity:.9;transform:scale(2)}}
@keyframes gc-fast-chest-flash{0%,10%{opacity:0;transform:scale(.2)}25%{opacity:1;transform:scale(1.8)}50%{opacity:.75;transform:scale(2.1)}100%{opacity:.2;transform:scale(2.5)}}
@keyframes gc-fast-chest-fan{0%,14%{opacity:0}25%{opacity:1;transform:scaleX(1)}100%{opacity:.65;transform:scaleX(1.4)}}
@keyframes gc-fast-horizontal-flash{0%,10%{opacity:0;transform:scaleX(.1)}24%{opacity:1;transform:scaleX(1)}100%{opacity:0;transform:scaleX(1.5)}}
@keyframes gc-launch-chest-recede{0%{opacity:1;transform:translate(-50%,-50%) scale(1)}45%{opacity:.9;transform:translate(-50%,-50%) scale(.84)}100%{opacity:.02;transform:translate(-50%,-15%) scale(.5)}}
@keyframes gc-post-launch-chest-leave{0%{opacity:.12;transform:translate(-50%,-16%) scale(.5)}100%{opacity:0;transform:translate(-50%,10%) scale(.3)}}
@keyframes gc-sealed-flyout{0%{opacity:0;transform:translateY(145px) rotateY(-78deg) scale(.14);filter:brightness(2.2) blur(7px)}12%{opacity:1}35%{transform:translateY(-55px) rotateY(-40deg) scale(.68);filter:brightness(1.8) blur(2px)}64%{transform:translateY(-28px) rotateY(-8deg) scale(1.09);filter:brightness(1.25) blur(0)}100%{transform:translateY(-4px) rotateY(-10deg) scale(1);filter:brightness(1) blur(0);opacity:1}}
@keyframes gc-after-launch-hover{0%{transform:translateY(-4px) rotateY(-10deg) scale(1)}60%{transform:translateY(-12px) rotateY(-5deg) scale(1.025)}100%{transform:translateY(-4px) rotateY(-10deg) scale(1)}}
@keyframes gc-launch-seal{0%{opacity:0;transform:rotateX(35deg) scale(.25)}35%{opacity:.75}100%{opacity:1;transform:rotateX(35deg) scale(1)}}
@keyframes gc-launch-beam{0%{opacity:1;transform:scaleX(.2)}70%{opacity:.8;transform:scaleX(1.2)}100%{opacity:.45;transform:scaleX(1)}}
@keyframes gc-direct-card-flyout{0%{opacity:.02;transform:translateY(155px) rotateY(-70deg) scale(.12);filter:brightness(2.8) blur(9px)}14%{opacity:.75}38%{transform:translateY(-48px) rotateY(-30deg) scale(.78);filter:brightness(1.7) blur(3px)}68%{transform:translateY(-22px) rotateY(-5deg) scale(1.12);filter:brightness(1.35) blur(1px)}100%{opacity:1;transform:translateY(0) rotateY(0) scale(1);filter:brightness(1) blur(0)}}
@keyframes gc-launch-veil-flash{0%,10%{opacity:0;transform:scale(.3)}27%{opacity:1;transform:scale(1.5)}100%{opacity:.24;transform:scale(1)}}
@keyframes gc-launch-veil-sweep{0%,20%{opacity:0;transform:translateX(-55%)}56%{opacity:1}100%{opacity:0;transform:translateX(65%)}}
@keyframes gc-prolonged-direct-reveal{0%{opacity:1;transform:translateY(0) rotateY(0) scale(1);filter:brightness(1) blur(0)}35%{opacity:1;transform:translateY(-13px) rotateY(12deg) scale(1.1);filter:brightness(1.2)}65%{transform:translateY(-8px) rotateY(0) scale(1.16);filter:brightness(1.35)}100%{opacity:1;transform:translateY(0) rotateY(0) scale(1.08);filter:brightness(1) blur(0)}}


.jp-gc-veil-scene .jp-gc-card-shadow>.jp-pcard{width:100%!important;max-width:100%;flex:0 0 100%;align-self:center}
/* In N the card flies out FACE-DOWN, then the front artwork is revealed slowly.
   This is an overlay on the same awarded PlayerCard, not a temporary reward. */
.jp-gc-direct-card-back{position:absolute;inset:0;z-index:4;display:grid;place-items:center;border:5px double #d6b579;border-radius:6px;
 background:radial-gradient(ellipse at 50% 38%,#305b89 0%,#142541 48%,#050a19 86%);
 box-shadow:inset 0 0 0 3px #101c34,inset 0 0 0 7px #d5a65573,inset 0 0 24px #000c,0 0 20px #70b2ff4d;
 color:#d7b879;backface-visibility:hidden;pointer-events:none;opacity:0}
.jp-gc-direct-card-back:before{content:'';position:absolute;inset:7%;border:1px solid #d7b87991;box-shadow:inset 0 0 12px #d7b87954;transform:rotate(0deg)}
.jp-gc-direct-card-back span{font:900 clamp(54px,16vw,96px) Georgia,serif;text-shadow:0 0 12px #fbe9ad80;filter:drop-shadow(0 0 7px #c7a15f)}
.jp-gc-direct-card-back i{position:absolute;inset:18%;border:1px dashed #d8b67c54;transform:rotate(45deg)}
.jp-gc-p-launch .jp-gc-direct-card-back{opacity:1}
.jp-gc-p-veil .jp-gc-direct-card-back{animation:gc-card-back-unveil 5.1s ease-in-out both}
.jp-gc-p-settle .jp-gc-direct-card-back{display:none}
@keyframes gc-card-back-unveil{0%,23%{opacity:1;filter:brightness(1)}35%{opacity:1;filter:brightness(1.8)}54%{opacity:.3;filter:brightness(2.7)}72%,100%{opacity:0;filter:brightness(2)}}


/* CINEMATIC VFX v1.6: three discrete light peaks, not a constant blinding fog.
   Animations use composited transforms / opacity. PlayerCard remains crisp. */
.jp-gc-cinema-bursts{position:absolute;inset:0;z-index:4;pointer-events:none;overflow:hidden;contain:layout style paint}
.jp-gc-cinema-bursts>span{position:absolute;pointer-events:none;opacity:0;left:50%;top:47%}
.jp-gc-cinema-whiteout{width:180vmax;height:180vmax;
 background:radial-gradient(circle,rgba(255,255,250,.97) 0%,rgba(255,255,245,.78) 7%,rgba(var(--gc-rgb),.36) 23%,transparent 61%);
 transform:translate(-50%,-50%) scale(.18);mix-blend-mode:screen}
.jp-gc-cinema-corona{width:min(155vw,920px);height:min(155vw,920px);border-radius:50%;
 background:conic-gradient(from 0deg,transparent 0deg,rgba(var(--gc-rgb),.72) 10deg,transparent 20deg,rgba(var(--gc-rgb),.08) 40deg,#ffffffb8 55deg,transparent 70deg,rgba(var(--gc-rgb),.5) 90deg,transparent 120deg,rgba(var(--gc-rgb),.68) 155deg,transparent 180deg,rgba(var(--gc-rgb),.45) 220deg,transparent 260deg,#fff9 310deg,transparent 350deg);
 mask-image:radial-gradient(circle,transparent 2%,#000 16%,transparent 66%);
 -webkit-mask-image:radial-gradient(circle,transparent 2%,#000 16%,transparent 66%);
 transform:translate(-50%,-50%) scale(.2) rotate(0)}
.jp-gc-cinema-ring{width:min(72vw,385px);height:min(72vw,385px);border:2px solid rgba(var(--gc-rgb),.88);
 border-radius:50%;box-shadow:0 0 26px 6px rgba(var(--gc-rgb),.4),inset 0 0 22px rgba(var(--gc-rgb),.18);
 transform:translate(-50%,-50%) scale(.15);will-change:transform,opacity}
.jp-gc-cinema-ring-b{width:min(55vw,300px);height:min(55vw,300px);border-width:1px;box-shadow:0 0 12px 2px rgba(var(--gc-rgb),.35)}
.jp-gc-cinema-prism{width:min(140vw,860px);height:min(140vw,860px);border-radius:50%;
 background:conic-gradient(from 45deg,#ff8e9e4d,#ffe8a355,#9affde44,#98baff66,#e5afff5c,#ff8e9e4d);
 mask-image:radial-gradient(circle,transparent 0%,#000 20%,transparent 66%);
 -webkit-mask-image:radial-gradient(circle,transparent 0%,#000 20%,transparent 66%);
 transform:translate(-50%,-50%) scale(.3)}
.jp-gc-cinema-spokes{position:absolute;left:50%;top:47%;width:0;height:0;opacity:0}
.jp-gc-cinema-spokes i{position:absolute;left:-3px;top:-285px;height:285px;width:6px;transform-origin:3px 285px;
 transform:rotate(var(--spoke-angle));opacity:.8;
 background:linear-gradient(0deg,rgba(255,255,255,.75),rgba(var(--gc-rgb),.35) 18%,transparent 82%);
 clip-path:polygon(48% 0,52% 0,100% 100%,0 100%)}
.jp-gc-p-chest .jp-gc-cinema-whiteout{animation:gc-cinema-blast .7s cubic-bezier(.05,.65,.2,1) both}
.jp-gc-p-chest .jp-gc-cinema-corona{animation:gc-cinema-corona .7s ease-out both}
.jp-gc-p-chest .jp-gc-cinema-ring-a{animation:gc-cinema-ring .7s ease-out 0s both}
.jp-gc-p-chest .jp-gc-cinema-ring-b{animation:gc-cinema-ring .7s ease-out .075s both}
.jp-gc-p-chest .jp-gc-cinema-spokes{animation:gc-cinema-sunburst .7s ease-out both}
.jp-gc-p-launch .jp-gc-cinema-corona{animation:gc-cinema-launch-corona 2.3s cubic-bezier(.13,.7,.2,1) both}
.jp-gc-p-launch .jp-gc-cinema-ring-a{animation:gc-cinema-launch-ring 2.3s ease-out both}
.jp-gc-p-launch .jp-gc-cinema-ring-b{animation:gc-cinema-launch-ring 2.3s ease-out .07s both}
.jp-gc-p-hold .jp-gc-cinema-ring-a{animation:gc-cinema-suspense-ring 1.7s ease-in-out both}
.jp-gc-p-hold .jp-gc-cinema-corona{animation:gc-cinema-suspense-corona 1.7s ease-in-out both}
.jp-gc-p-strike .jp-gc-cinema-whiteout{animation:gc-cinema-stone-burst 1.2s ease-out both}
.jp-gc-p-strike .jp-gc-cinema-ring-a{animation:gc-cinema-impact-ring 1.2s ease-out both}
.jp-gc-p-strike .jp-gc-cinema-ring-b{animation:gc-cinema-impact-ring 1.2s ease-out .11s both}
.jp-gc-p-strike .jp-gc-cinema-spokes{animation:gc-cinema-impact-spokes 1.2s ease-out both}
.jp-gc-p-veil .jp-gc-cinema-corona{animation:gc-cinema-revelation-aura 5.1s ease-in-out both}
.jp-gc-p-veil .jp-gc-cinema-ring-a{animation:gc-cinema-revelation-ring 5.1s ease-in-out both}
.jp-gc-p-veil .jp-gc-cinema-ring-b{animation:gc-cinema-revelation-ring 5.1s ease-in-out .25s both}
.jp-gc-p-veil .jp-gc-cinema-whiteout{animation:gc-cinema-card-glint 5.1s ease-in-out both}
.jp-gc-p-veil.jp-gc-c-rainbow .jp-gc-cinema-prism{animation:gc-cinema-rainbow 5.1s ease-in-out both}
.jp-gc-p-settle .jp-gc-cinema-ring-a{opacity:.1;transform:translate(-50%,-50%) scale(1.25)}
.jp-gc-p-settle .jp-gc-cinema-corona{opacity:.08;transform:translate(-50%,-50%) scale(1.3)}
.jp-gc-p-result .jp-gc-cinema-bursts,.jp-gc-p-freeze .jp-gc-cinema-bursts{display:none}
@keyframes gc-cinema-blast{
  0%,13%{opacity:0;transform:translate(-50%,-50%) scale(.15)}
  24%{opacity:.88;transform:translate(-50%,-50%) scale(.46)}
  43%{opacity:.60;transform:translate(-50%,-50%) scale(.76)}
  100%{opacity:0;transform:translate(-50%,-50%) scale(1.12)}}
@keyframes gc-cinema-corona{
  0%,16%{opacity:0;transform:translate(-50%,-50%) scale(.15) rotate(-30deg)}
  29%{opacity:.84}100%{opacity:.04;transform:translate(-50%,-50%) scale(1.3) rotate(65deg)}}
@keyframes gc-cinema-ring{
  0%,17%{opacity:0;transform:translate(-50%,-50%) scale(.13)}
  27%{opacity:.95}100%{opacity:0;transform:translate(-50%,-50%) scale(2.6)}}
@keyframes gc-cinema-sunburst{
  0%,15%{opacity:0;transform:rotate(0deg) scale(.15)}
  30%{opacity:.85;transform:rotate(22deg) scale(1)}
  100%{opacity:0;transform:rotate(55deg) scale(1.5)}}
@keyframes gc-cinema-launch-corona{
  0%{opacity:.38;transform:translate(-50%,-50%) scale(.35) rotate(0deg)}
  36%{opacity:.65}100%{opacity:.08;transform:translate(-50%,-50%) scale(1.6) rotate(90deg)}}
@keyframes gc-cinema-launch-ring{
  0%{opacity:.55;transform:translate(-50%,-50%) scale(.4)}
  50%{opacity:.68}100%{opacity:0;transform:translate(-50%,-50%) scale(2.3)}}
@keyframes gc-cinema-suspense-ring{0%,100%{opacity:.10;transform:translate(-50%,-50%) scale(1.05)}62%{opacity:.58;transform:translate(-50%,-50%) scale(1.15)}}
@keyframes gc-cinema-suspense-corona{0%,100%{opacity:.14;transform:translate(-50%,-50%) scale(.85) rotate(0)}70%{opacity:.55;transform:translate(-50%,-50%) scale(1.1) rotate(32deg)}}
@keyframes gc-cinema-stone-burst{0%,12%{opacity:0;transform:translate(-50%,-50%) scale(.08)}23%{opacity:1;transform:translate(-50%,-50%) scale(.5)}43%{opacity:.65}100%{opacity:0;transform:translate(-50%,-50%) scale(1.2)}}
@keyframes gc-cinema-impact-ring{0%,12%{opacity:0;transform:translate(-50%,-50%) scale(.13)}28%{opacity:1}100%{opacity:0;transform:translate(-50%,-50%) scale(2.9)}}
@keyframes gc-cinema-impact-spokes{0%,15%{opacity:0;transform:rotate(0) scale(.4)}25%{opacity:.95}70%{opacity:.2}100%{opacity:0;transform:rotate(85deg) scale(1.3)}}
@keyframes gc-cinema-revelation-aura{
  0%,12%{opacity:0;transform:translate(-50%,-50%) scale(.55) rotate(0)}
  32%{opacity:.28}51%{opacity:.48;transform:translate(-50%,-50%) scale(1.22) rotate(44deg)}
  78%{opacity:.2}100%{opacity:.06;transform:translate(-50%,-50%) scale(1.45) rotate(90deg)}}
@keyframes gc-cinema-revelation-ring{
  0%,20%{opacity:0;transform:translate(-50%,-50%) scale(.55)}
  36%{opacity:.55}54%{opacity:.82;transform:translate(-50%,-50%) scale(1.15)}
  100%{opacity:0;transform:translate(-50%,-50%) scale(1.6)}}
@keyframes gc-cinema-card-glint{
  0%,36%{opacity:0;transform:translate(-50%,-50%) scale(.32)}
  45%{opacity:.40;transform:translate(-50%,-50%) scale(.5)}
  59%{opacity:.20}70%,100%{opacity:0;transform:translate(-50%,-50%) scale(.9)}}
@keyframes gc-cinema-rainbow{
  0%,20%{opacity:0;transform:translate(-50%,-50%) scale(.4) rotate(0)}
  50%{opacity:.5}80%{opacity:.25}
  100%{opacity:0;transform:translate(-50%,-50%) scale(1.5) rotate(155deg)}}
@media(max-width:420px){
  .jp-gc-cinema-spokes i:nth-child(n+7){display:none}
  .jp-gc-cinema-corona{width:130vw;height:130vw}
  .jp-gc-cinema-whiteout{width:130vmax;height:130vmax}
}
@media(prefers-reduced-motion:reduce){
  .jp-gc-cinema-bursts{display:none}
}


/* N-only finishing: one real card with physical front/back faces.
   The reverse is seen at take-off, and genuine perspective Y rotation exposes
   the actual awarded face between 4.3s and 6.8s. No image substitution. */
.jp-gc-n-flip{position:relative;width:100%;height:100%;flex:1 1 auto;transform-style:preserve-3d;
  transform:rotateY(180deg);-webkit-transform-style:preserve-3d}
.jp-gc-n-front{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
  -webkit-backface-visibility:hidden;backface-visibility:hidden;transform:rotateY(0deg);z-index:1}
.jp-gc-n-front>.jp-pcard{width:100%!important;max-width:100%;height:auto;flex:0 0 100%}
.jp-gc-n-flip>.jp-gc-direct-card-back{
  opacity:1!important;display:grid;transform:rotateY(180deg);z-index:2;
  animation:none!important;-webkit-backface-visibility:hidden;backface-visibility:hidden}
.jp-gc-p-launch .jp-gc-n-flip{transform:rotateY(180deg)}
.jp-gc-p-veil .jp-gc-n-flip{
  animation:gc-n-true-3d-reveal 5s cubic-bezier(.17,.7,.19,1) both}
.jp-gc-p-settle .jp-gc-n-flip{transform:rotateY(0deg)}
.jp-gc-p-settle .jp-gc-n-flip>.jp-gc-direct-card-back{display:none}
@keyframes gc-n-true-3d-reveal{
  0%,18%{transform:rotateY(180deg)}
  37%{transform:rotateY(142deg)}
  52%{transform:rotateY(77deg)}
  63%{transform:rotateY(10deg)}
  73%,100%{transform:rotateY(0deg)}
}
@media(prefers-reduced-motion:reduce){
  .jp-gc-n-flip{transform:rotateY(0deg)!important}
  .jp-gc-n-flip>.jp-gc-direct-card-back{display:none!important}
}


/* N-first polish v1.8 — optical depth at the chest hinge, and a clear 3D card
 * flight path. All selectors are explicitly N-only; R+ stone routes unchanged.
 * Approximate dimensional illusion until a dedicated 3D chest is delivered. */
.jp-gc-n-hinge-depth{position:absolute;left:13%;top:22%;width:74%;height:19%;z-index:3;
  border-radius:20% 20% 7% 7%;opacity:0;pointer-events:none;
  transform:perspective(850px) rotateX(0deg) translateZ(0);
  transform-origin:50% 100%;backface-visibility:hidden;
  background:linear-gradient(180deg,#f4db96 0%,#a57b34 9%,#342918 21%,#121a2c 52%,#31435a 80%,#dcb965 96%,#4a3517 100%);
  border:2px solid #a98c50;box-shadow:inset 0 2px 5px #fff9,inset 0 -5px 8px #02040cc9,0 8px 11px #020408a0}
.jp-gc-n-hinge-depth i{position:absolute;inset:13% 6% 17%;border:1px solid #ceaf6099;
  background:linear-gradient(145deg,#172b45,#0a1424 45%,#111828);
  box-shadow:inset 0 0 8px #000a}
.jp-gc-n-hinge-depth b{position:absolute;width:24%;height:35%;left:38%;bottom:-2px;
  border-radius:0 0 15% 15%;background:linear-gradient(90deg,#543b1a,#e7cc83 28%,#a47b39 57%,#d9b96d 78%,#553915);
  box-shadow:inset 0 2px 4px #fff7}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-chest-lid{
  animation:gc-n-lid-arc .7s cubic-bezier(.08,.72,.27,1) both;
  transform-origin:50% 40%;-webkit-backface-visibility:visible;backface-visibility:visible}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-n-hinge-depth{
  animation:gc-n-hinge-arc .7s cubic-bezier(.1,.67,.24,1) both}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-chest-scene{
  animation:gc-n-open-camera .7s cubic-bezier(.15,.72,.22,1) both}
.jp-gc-n-cinematic.jp-gc-p-gather .jp-gc-n-hinge-depth{opacity:0}
@keyframes gc-n-lid-arc{
  0%,8%{opacity:1;transform:perspective(850px) rotateX(0deg) translateY(0)}
  24%{opacity:1;transform:perspective(850px) rotateX(-38deg) translateY(-3px)}
  43%{opacity:1;transform:perspective(850px) rotateX(-83deg) translateY(-8px)}
  61%{opacity:.22;transform:perspective(850px) rotateX(-116deg) translateY(-10px)}
  100%{opacity:0;transform:perspective(850px) rotateX(-118deg) translateY(-10px)}}
@keyframes gc-n-hinge-arc{
  0%,9%{opacity:0;transform:perspective(850px) rotateX(0deg)}
  14%{opacity:.78}42%{opacity:.88;transform:perspective(850px) rotateX(-77deg) translateY(-7px)}
  58%{opacity:.12;transform:perspective(850px) rotateX(-110deg) translateY(-8px)}
  100%{opacity:0;transform:perspective(850px) rotateX(-112deg)}}
@keyframes gc-n-open-camera{
  0%{transform:translate(-50%,-50%) scale(.94)}
  45%{transform:translate(-50%,-50%) scale(1.04)}
  100%{transform:translate(-50%,-50%) scale(1)}}
/* The N trail is made of nine lightweight optical ribbons, NOT extra cards. */
.jp-gc-n-launch-trails{position:absolute;inset:0;z-index:0;pointer-events:none;
  transform:translateZ(-1px);overflow:visible}
.jp-gc-n-launch-trails i{position:absolute;left:50%;top:62%;width:3px;
  height:var(--trail-len);opacity:0;
  background:linear-gradient(180deg,#fffdecf2 0%,#c5ebffcf 12%,#7cc4ff5e 35%,transparent 100%);
  transform-origin:50% 0%;border-radius:50%;
  box-shadow:0 0 6px 1px #80bbff77}
.jp-gc-n-launch-flash{position:absolute;width:75%;height:56%;left:12.5%;top:47%;opacity:0;
  background:radial-gradient(ellipse,#ffffffbb 0%,#c4e8ff69 23%,#82bbff29 48%,transparent 70%);
  transform:translateY(40px) scale(.2);pointer-events:none}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-launch-trails i{
  animation:gc-n-light-ribbon 1.9s ease-out var(--trail-delay) both;
  transform:rotate(var(--trail-angle)) scaleY(.16)}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-launch-flash{
  animation:gc-n-trail-burst 1.9s ease-out both}
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-n-launch-trails,
.jp-gc-n-cinematic.jp-gc-p-settle .jp-gc-n-launch-trails{display:none}
@keyframes gc-n-light-ribbon{
  0%,7%{opacity:0;transform:rotate(var(--trail-angle)) scaleY(.1)}
  18%{opacity:.94;transform:rotate(var(--trail-angle)) scaleY(1.05)}
  41%{opacity:.7;transform:rotate(var(--trail-angle)) translateY(15px) scaleY(1.3)}
  78%{opacity:.22}100%{opacity:0;transform:rotate(var(--trail-angle)) translateY(44px) scaleY(.8)}}
@keyframes gc-n-trail-burst{
  0%,6%{opacity:0;transform:translateY(65px) scale(.13)}
  20%{opacity:.65;transform:translateY(23px) scale(.9)}
  51%{opacity:.2;transform:translateY(-3px) scale(1.4)}
  100%{opacity:0;transform:translateY(0) scale(1.6)}}
/* Safari flattens 3D descendants when a parent has filter/overflow:hidden.
   Keep the one live PlayerCard and its back face in an actual 3D scene. */
.jp-gc-n-cinematic .jp-gc-veil-scene{perspective:1100px}
.jp-gc-n-cinematic .jp-gc-card-shadow{overflow:visible;filter:none!important;
  transform-style:preserve-3d;-webkit-transform-style:preserve-3d;
  z-index:2;opacity:1}
.jp-gc-n-cinematic .jp-gc-n-flip{transform-style:preserve-3d;-webkit-transform-style:preserve-3d}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-card-shadow{
  animation:gc-n-hero-flight 1.9s cubic-bezier(.12,.68,.25,1) both;will-change:transform,opacity}
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-card-shadow{
  animation:gc-n-hero-display 5s ease-in-out both;will-change:transform}
.jp-gc-n-cinematic.jp-gc-p-settle .jp-gc-card-shadow{
  animation:gc-n-hero-settle 1.8s ease-out both}
@keyframes gc-n-hero-flight{
  0%{opacity:0;transform:translateY(165px) rotateZ(-14deg) rotateY(-24deg) scale(.18)}
  11%{opacity:1}34%{transform:translateY(-68px) rotateZ(9deg) rotateY(-16deg) scale(.78)}
  61%{transform:translateY(-35px) rotateZ(-3deg) rotateY(-5deg) scale(1.12)}
  82%{transform:translateY(-11px) rotateZ(1deg) rotateY(0deg) scale(1.04)}
  100%{opacity:1;transform:translateY(0) rotateZ(0) rotateY(0) scale(1)}}
@keyframes gc-n-hero-display{
  0%,18%{opacity:1;transform:translateY(0) rotateZ(0) scale(1)}
  40%{transform:translateY(-12px) rotateZ(-1.5deg) scale(1.07)}
  66%{transform:translateY(-5px) rotateZ(0) scale(1.095)}
  100%{opacity:1;transform:translateY(0) rotateZ(0) scale(1.08)}}
@keyframes gc-n-hero-settle{
  0%{opacity:1;transform:translateY(0) scale(1.08)}
  100%{opacity:1;transform:translateY(0) scale(1.04)}}
@media(max-width:420px){
  .jp-gc-n-cinematic .jp-gc-n-launch-trails i:nth-child(n+7){display:none}
  .jp-gc-n-cinematic .jp-gc-n-hinge-depth{box-shadow:inset 0 2px 5px #fff9,0 5px 8px #000b}
}
@media(prefers-reduced-motion:reduce){
  .jp-gc-n-hinge-depth,.jp-gc-n-launch-trails{display:none!important}
  .jp-gc-n-cinematic .jp-gc-card-shadow{transform:none!important;filter:none!important}
}


/* N-only EFFECT SCORE v1.9:
 * 0.10-0.80s opening: short high-energy flash + concentric corona + 12 sparks.
 * 0.80-3.10s launch: existing flight trails plus a focused exhaust bloom.
 * 3.10-8.20s reveal: glint from the card turn, energy ring, eight starbursts.
 * 8.20-10.0s: subside to a clean, readable card. Never bake in another card.
 * Use transform and opacity for compositing; no permanent full-screen whiteout.
 */
.jp-gc-n-flash-stage{position:absolute;inset:0;pointer-events:none;z-index:5;overflow:hidden;
 contain:layout style paint;isolation:isolate}
.jp-gc-n-flash-stage>span{position:absolute;left:50%;top:47%;opacity:0;pointer-events:none}
.jp-gc-n-opening-core{width:min(140vw,650px);height:min(140vw,650px);border-radius:50%;
 background:radial-gradient(circle,#fffee8 0%,#fffbd9d9 7%,#d2edffe0 16%,#8abfff69 36%,transparent 68%);
 transform:translate(-50%,-50%) scale(.15);mix-blend-mode:screen}
.jp-gc-n-opening-halo{width:min(100vw,520px);height:min(100vw,520px);border-radius:50%;
 background:conic-gradient(from 18deg,transparent 0deg,#f7e0a9d1 22deg,transparent 38deg,#85bfff81 73deg,transparent 111deg,#fdf1cebd 171deg,transparent 203deg,#70b1ff83 245deg,transparent 296deg,#fff5ccbd 332deg,transparent 359deg);
 mask-image:radial-gradient(circle,transparent 8%,#000 30%,transparent 72%);
 -webkit-mask-image:radial-gradient(circle,transparent 8%,#000 30%,transparent 72%);
 transform:translate(-50%,-50%) scale(.2) rotate(-20deg)}
.jp-gc-n-opening-cross{width:min(145vw,680px);height:7px;border-radius:50%;
 background:linear-gradient(90deg,transparent 0%,#7cb7ff77 17%,#fffde8 49%,#fff5dc 51%,#76baff77 83%,transparent 100%);
 box-shadow:0 0 8px #eef5ffe0,0 0 25px #9acaff8c,0 0 45px #6dbaff52;
 transform:translate(-50%,-50%) scaleX(.1)}
.jp-gc-n-opening-ring{width:min(56vw,250px);height:min(56vw,250px);border:3px solid #e9f2fb;
 border-radius:50%;box-shadow:0 0 17px 4px #b7dfff8c,inset 0 0 15px #ceeaff77;
 transform:translate(-50%,-50%) scale(.2)}
.jp-gc-n-opening-sparks{position:absolute;inset:0;pointer-events:none}
.jp-gc-n-opening-sparks i{position:absolute;top:47%;left:50%;width:3px;height:22px;opacity:0;
 transform-origin:center center;
 transform:rotate(var(--n-spark-angle)) translateY(0) scale(.12);
 clip-path:polygon(50% 0,100% 47%,60% 100%,15% 50%);
 background:linear-gradient(180deg,#fffef2,#ffe6ad 35%,#9bd8ff 75%,transparent)}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-n-opening-core{
 animation:gc-n-v19-open-core .7s ease-out both}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-n-opening-halo{
 animation:gc-n-v19-open-halo .7s ease-out both}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-n-opening-cross{
 animation:gc-n-v19-open-cross .7s ease-out both}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-n-opening-ring{
 animation:gc-n-v19-open-ring .7s cubic-bezier(.1,.65,.25,1) both}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-n-opening-sparks i{
 animation:gc-n-v19-open-spark .7s ease-out var(--n-spark-delay) both}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-flash-stage,
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-n-flash-stage,
.jp-gc-n-cinematic.jp-gc-p-settle .jp-gc-n-flash-stage{display:none}

/* v1.31: bright optical hit at 1.6s + 23% of 0.7s (=1.761s),
   exactly around the archived chest-open MP3 accent (1.75s). Do not leave
   a persistent opaque wash over the physical chest or the emerging card. */
@keyframes gc-n-v19-open-core{
  0%,12%{opacity:0;transform:translate(-50%,-50%) scale(.12)}
  19%{opacity:.47;transform:translate(-50%,-50%) scale(.33)}
  23%{opacity:.97;transform:translate(-50%,-50%) scale(.60)}
  32%{opacity:.63;transform:translate(-50%,-50%) scale(.86)}
  53%{opacity:.15;transform:translate(-50%,-50%) scale(1.13)}
  76%,100%{opacity:0;transform:translate(-50%,-50%) scale(1.35)}}
@keyframes gc-n-v19-open-halo{
  0%,16%{opacity:0;transform:translate(-50%,-50%) rotate(-20deg) scale(.3)}
  28%{opacity:.80}
  100%{opacity:0;transform:translate(-50%,-50%) rotate(90deg) scale(1.5)}}
@keyframes gc-n-v19-open-cross{
  0%,13%{opacity:0;transform:translate(-50%,-50%) scaleX(.12)}
  23%{opacity:.95;transform:translate(-50%,-50%) scaleX(.96)}
  31%{opacity:.53;transform:translate(-50%,-50%) scaleX(1.2)}
  62%{opacity:.07;transform:translate(-50%,-50%) scaleX(1.62)}
  80%,100%{opacity:0;transform:translate(-50%,-50%) scaleX(1.7)}}
@keyframes gc-n-v19-open-ring{
  0%,12%{opacity:0;transform:translate(-50%,-50%) scale(.15)}
  26%{opacity:.9}
  100%{opacity:0;transform:translate(-50%,-50%) scale(2.8)}}
@keyframes gc-n-v19-open-spark{
  0%,17%{opacity:0;transform:rotate(var(--n-spark-angle)) translateY(0) scale(.1)}
  28%{opacity:1;transform:rotate(var(--n-spark-angle)) translateY(var(--n-spark-short)) scale(1)}
  100%{opacity:0;transform:rotate(var(--n-spark-angle)) translateY(var(--n-spark-far)) rotate(35deg) scale(.42)}}

/* Reveal effects sit BEHIND the actual front/back card, avoiding clipped faces.
   The audible "card reveal" cue is at 50% of this 5.1s interval. */
.jp-gc-n-reveal-effects{position:absolute;inset:-16%;z-index:1;pointer-events:none;
 overflow:visible;contain:layout style}
.jp-gc-n-reveal-effects>span{position:absolute;left:50%;top:50%;opacity:0;pointer-events:none}
.jp-gc-n-reveal-aura{width:120%;height:110%;border-radius:50%;
 background:radial-gradient(ellipse,#fffcec40 0%,#a9d2ff44 28%,#85b4ff1f 48%,transparent 72%);
 transform:translate(-50%,-50%) scale(.6)}
.jp-gc-n-reveal-pulse{width:95%;height:83%;border:2px solid #e7f1ffb3;border-radius:50%;
 box-shadow:0 0 14px 3px #c5dbff99,inset 0 0 17px #a9d0ff4a;
 transform:translate(-50%,-50%) scale(.4)}
.jp-gc-n-reveal-beam{width:170%;height:7px;top:49%!important;
 background:linear-gradient(90deg,transparent,#85baffc4 25%,#fffde9 49%,#fff9e0 51%,#82b9ffc4 75%,transparent);
 box-shadow:0 0 15px #a8d5ffd0,0 0 35px #6eb1ff73;transform:translate(-50%,-50%) scaleX(.05)}
.jp-gc-n-reveal-halo{width:125%;height:105%;border-radius:50%;
 background:conic-gradient(from 40deg,transparent 0 25deg,#d7ecffb3 40deg,transparent 65deg,#f5dca28a 135deg,transparent 163deg,#83bcff9e 223deg,transparent 265deg,#f5ecceaa 325deg,transparent 359deg);
 mask-image:radial-gradient(ellipse,transparent 40%,#000 53%,transparent 73%);
 -webkit-mask-image:radial-gradient(ellipse,transparent 40%,#000 53%,transparent 73%);
 transform:translate(-50%,-50%) rotate(-60deg) scale(.6)}
.jp-gc-n-reveal-effects i{position:absolute;left:50%;top:50%;width:2px;height:2px;opacity:0;
 transform:rotate(var(--n-star-angle)) translateY(-150px);
 background:#fff;box-shadow:0 0 7px #fff,0 0 13px #b5dfff}
.jp-gc-n-reveal-effects i::before,.jp-gc-n-reveal-effects i::after{content:'';position:absolute;left:-4px;top:0;
 width:10px;height:1px;background:#fff;border-radius:100%}
.jp-gc-n-reveal-effects i::after{transform:rotate(90deg)}
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-n-reveal-aura{
 animation:gc-n-v19-reveal-aura 5s ease-in-out both}
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-n-reveal-pulse{
 animation:gc-n-v19-reveal-ring 5s ease-out both}
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-n-reveal-halo{
 animation:gc-n-v19-reveal-halo 5s ease-in-out both}
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-n-reveal-beam{
 animation:gc-n-v19-reveal-beam 5s ease-in-out both}
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-n-reveal-effects i{
 animation:gc-n-v19-star 5s ease-in-out var(--n-star-delay) both}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-reveal-effects,
.jp-gc-n-cinematic.jp-gc-p-settle .jp-gc-n-reveal-effects{display:none}
.jp-gc-n-cinematic.jp-gc-p-settle .jp-gc-n-front{filter:none}
/* v1.31: card display / shakiin / reveal peak at 50% of the five-second
   veil phase (=6.7s in N). Outer light clears before the result settles. */
@keyframes gc-n-v19-reveal-aura{
  0%,23%{opacity:.05;transform:translate(-50%,-50%) scale(.7)}
  43%{opacity:.29;transform:translate(-50%,-50%) scale(.87)}
  51%{opacity:.54;transform:translate(-50%,-50%) scale(1.00)}
  62%{opacity:.32;transform:translate(-50%,-50%) scale(1.13)}
  76%{opacity:.06;transform:translate(-50%,-50%) scale(1.25)}
  86%,100%{opacity:0;transform:translate(-50%,-50%) scale(1.32)}}
@keyframes gc-n-v19-reveal-ring{
  0%,36%{opacity:0;transform:translate(-50%,-50%) scale(.45)}
  48%{opacity:.55;transform:translate(-50%,-50%) scale(.72)}
  50%{opacity:.98;transform:translate(-50%,-50%) scale(.94)}
  57%{opacity:.62;transform:translate(-50%,-50%) scale(1.15)}
  67%{opacity:.17;transform:translate(-50%,-50%) scale(1.48)}
  77%,100%{opacity:0;transform:translate(-50%,-50%) scale(1.7)}}
@keyframes gc-n-v19-reveal-beam{
  0%,45%{opacity:0;transform:translate(-50%,-50%) scaleX(.15)}
  50%{opacity:.96;transform:translate(-50%,-50%) scaleX(1.02)}
  54%{opacity:.55;transform:translate(-50%,-50%) scaleX(1.18)}
  60%{opacity:.08;transform:translate(-50%,-50%) scaleX(1.3)}
  66%,100%{opacity:0;transform:translate(-50%,-50%) scaleX(1.3)}}
@keyframes gc-n-v19-reveal-halo{
  0%,29%{opacity:.03;transform:translate(-50%,-50%) rotate(-60deg) scale(.6)}
  45%{opacity:.42;transform:translate(-50%,-50%) rotate(-20deg) scale(.86)}
  51%{opacity:.69;transform:translate(-50%,-50%) rotate(1deg) scale(1.0)}
  65%{opacity:.34;transform:translate(-50%,-50%) rotate(35deg) scale(1.16)}
  81%,100%{opacity:0;transform:translate(-50%,-50%) rotate(104deg) scale(1.4)}}
@keyframes gc-n-v19-star{
  0%,39%{opacity:0;transform:rotate(var(--n-star-angle)) translateY(-120px) scale(.4)}
  48%{opacity:.50;transform:rotate(var(--n-star-angle)) translateY(-135px) scale(.72)}
  52%{opacity:.96;transform:rotate(var(--n-star-angle)) translateY(-151px) scale(1.35)}
  61%{opacity:.30;transform:rotate(var(--n-star-angle)) translateY(-171px) scale(1.05)}
  73%,100%{opacity:0;transform:rotate(var(--n-star-angle)) translateY(-190px) scale(.55)}}
@media(max-width:420px){
 .jp-gc-n-opening-sparks i:nth-child(n+9){display:none}
 .jp-gc-n-reveal-effects i:nth-of-type(n+6){display:none}
}
@media(prefers-reduced-motion:reduce){
 .jp-gc-n-flash-stage,.jp-gc-n-reveal-effects{display:none!important}
}


/* N finishing v1.10: continuity and a clean reward-card face.
   The transition between a chest glow and flying card remains luminous.
   Only the N route uses these overrides: stone routes retain their movies. */
.jp-gc-n-portal-bridge{position:absolute;inset:0;z-index:3;pointer-events:none;overflow:visible}
.jp-gc-n-portal-bridge span{position:absolute;top:24%;left:15%;width:70%;height:50%;
 border-radius:50%;opacity:0;transform:translateY(25px) scale(.2);
 background:radial-gradient(ellipse,#fffdeacb 0%,#e2f3ffb3 11%,#89c5ff7c 30%,transparent 69%);
 mix-blend-mode:screen}
.jp-gc-n-portal-bridge i{position:absolute;top:10%;left:46%;width:8%;height:64%;
 opacity:0;transform:translateY(24px) scaleY(.2);transform-origin:50% 100%;
 background:linear-gradient(0deg,#fff7eacc,#c5e9ff77 35%,transparent 100%);
 filter:blur(4px);border-radius:60%}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-n-portal-bridge span{
 animation:gc-n-v110-portal-open .7s ease-out both}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-n-portal-bridge i{
 animation:gc-n-v110-portal-column .7s ease-out both}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-portal-bridge span{
 animation:gc-n-v110-portal-launch 1.9s cubic-bezier(.1,.7,.2,1) both}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-portal-bridge i{
 animation:gc-n-v110-column-launch 1.9s ease-out both}
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-n-portal-bridge,
.jp-gc-n-cinematic.jp-gc-p-settle .jp-gc-n-portal-bridge{display:none}
@keyframes gc-n-v110-portal-open{
 0%,12%{opacity:0;transform:translateY(25px) scale(.2)}
 27%{opacity:.74;transform:translateY(0) scale(.9)}
 54%,100%{opacity:.88;transform:translateY(-4px) scale(1.05)}}
@keyframes gc-n-v110-portal-column{
 0%,18%{opacity:0;transform:translateY(24px) scaleY(.2)}
 36%{opacity:.75;transform:translateY(0) scaleY(.8)}
 100%{opacity:.65;transform:translateY(-5px) scaleY(1)}}
@keyframes gc-n-v110-portal-launch{
 0%{opacity:.88;transform:translateY(-4px) scale(1.05)}
 14%{opacity:.83;transform:translateY(-25px) scale(1.14)}
 40%{opacity:.42;transform:translateY(-55px) scale(1.25)}
 80%,100%{opacity:0;transform:translateY(-95px) scale(1.48)}}
@keyframes gc-n-v110-column-launch{
 0%{opacity:.65;transform:translateY(-5px) scaleY(1)}
 24%{opacity:.56;transform:translateY(-23px) scaleY(1.17)}
 70%,100%{opacity:0;transform:translateY(-72px) scaleY(1.32)}}
/* The bright 0.7s opening has its own controlled center light already.
   Suppress the older full-screen whiteout only for N: retain shockwaves. */
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-cinema-whiteout{display:none}
/* The legacy noise-distorted vortex uses SVG turbulence/displacement on large
   layers. N's new light rings do the same visual job with composited CSS,
   with less GPU pressure on mobile Safari; R+ keeps its existing vortex. */
.jp-gc-n-cinematic .jp-gc-vortex,.jp-gc-n-cinematic .jp-gc-filter-defs{display:none}
/* Subtle outline specular, shown only after the front is turning into view.
   Keep it on the card border, never a pale overlay obscuring character art. */
.jp-gc-n-cinematic .jp-gc-n-front::after{content:'';position:absolute;inset:0;
 border:2px solid #dbedff;border-radius:5px;pointer-events:none;opacity:0;
 box-shadow:inset 0 0 6px #ffffff44,0 0 12px 2px #85bfff75}
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-n-front::after{
 animation:gc-n-v110-edge-glint 5s ease-in-out both}
.jp-gc-n-cinematic.jp-gc-p-settle .jp-gc-n-front::after{opacity:.17}
@keyframes gc-n-v110-edge-glint{
 0%,42%{opacity:0;box-shadow:0 0 4px #fff0}
 52%{opacity:.96;box-shadow:0 0 12px 3px #bde8ffa8,inset 0 0 6px #fff8}
 68%{opacity:.34;box-shadow:0 0 8px 2px #bde8ff55}
 100%{opacity:.12;box-shadow:0 0 5px 1px #d4edff33}}
@media(prefers-reduced-motion:reduce){
 .jp-gc-n-portal-bridge{display:none!important}
 .jp-gc-n-cinematic .jp-gc-n-front::after{display:none!important}
}


/* N cinematic v1.11: spend the reclaimed final second on the CLOSED chest.
   0.00-1.10s anticipation, 1.10-1.80s opening, 1.80-4.10s flight,
   4.10-9.20s flip/reveal, 9.20-10.00s settle. R+ uses the old clocks.
   All classes below are N-only and the box stays closed during anticipation.
 */
.jp-gc-n-anticipation{position:absolute;inset:-14%;z-index:6;pointer-events:none;overflow:visible}
.jp-gc-n-anticipation>span{position:absolute;opacity:0;pointer-events:none}
.jp-gc-n-suspense-ring{left:12%;top:8%;width:76%;aspect-ratio:1;border:1.4px solid #d8e8ff;
 border-radius:50%;box-shadow:0 0 12px 2px #98caff66,inset 0 0 10px #fff6;
 transform:rotateX(67deg) scale(.56)}
.jp-gc-n-suspense-seam{left:27%;top:45%;width:46%;height:3%;border-radius:60%;
 background:linear-gradient(90deg,transparent,#a4cdff7d 15%,#fff9dcf0 48%,#fbe3a6f0 52%,#99cbff8a 84%,transparent);
 box-shadow:0 0 6px 1px #fae9ba88,0 0 20px 4px #75b8ff55;transform:scaleX(.1)}
.jp-gc-n-suspense-core{left:28%;top:26%;width:44%;height:42%;border-radius:50%;
 background:radial-gradient(circle,#fff8d064 0%,#b2dfff49 28%,transparent 73%);
 transform:scale(.25)}
.jp-gc-n-suspense-embers{position:absolute;inset:0;pointer-events:none}
.jp-gc-n-suspense-embers i{position:absolute;left:50%;top:46%;width:3px;height:3px;opacity:0;
 border-radius:50%;background:#fff9dd;box-shadow:0 0 7px 1px #f7dc9aaa,0 0 10px 1px #8bc3ff88;
 transform:rotate(var(--n-charge-az)) translateY(var(--n-charge-travel)) scale(.5)}
.jp-gc-n-cinematic.jp-gc-p-gather .jp-gc-chest-scene{
 animation:gc-n-v111-windup 1.6s ease-in-out both}
.jp-gc-n-cinematic.jp-gc-p-gather .jp-gc-chest-halo{
 animation:gc-n-v111-halo 1.6s ease-in both}
.jp-gc-n-cinematic.jp-gc-p-gather .jp-gc-n-suspense-ring{
 animation:gc-n-v111-ring 1.6s ease-in both}
.jp-gc-n-cinematic.jp-gc-p-gather .jp-gc-n-suspense-seam{
 animation:gc-n-v111-seam 1.6s ease-in both}
.jp-gc-n-cinematic.jp-gc-p-gather .jp-gc-n-suspense-core{
 animation:gc-n-v111-core 1.6s ease-in both}
.jp-gc-n-cinematic.jp-gc-p-gather .jp-gc-n-suspense-embers i{
 animation:gc-n-v111-ember 1.6s ease-in var(--n-charge-delay) both}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-n-suspense-seam{
 animation:gc-n-v111-seam-release .7s ease-out both}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-n-suspense-core{
 animation:gc-n-v111-core-release .7s ease-out both}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-n-suspense-ring{
 animation:gc-n-v111-ring-release .7s ease-out both}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-anticipation,
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-n-anticipation,
.jp-gc-n-cinematic.jp-gc-p-settle .jp-gc-n-anticipation{display:none}
@keyframes gc-n-v111-windup{
 0%{transform:translate(-50%,-50%) scale(.94)}
 24%{transform:translate(-50%,-50%) scale(.965)}
 48%{transform:translate(-50%,-50%) scale(.98)}
 67%{transform:translate(calc(-50% - 1px),calc(-50% + 1px)) scale(.978)}
 74%{transform:translate(calc(-50% + 1px),calc(-50% - 1px)) scale(.978)}
 82%{transform:translate(calc(-50% - 2px),calc(-50% + 1px)) scale(.972)}
 89%{transform:translate(calc(-50% + 2px),calc(-50% - 1px)) scale(.96)}
 95%{transform:translate(calc(-50% - 1px),calc(-50% + 1px)) scale(.944)}
 100%{transform:translate(-50%,-50%) scale(.94)}}
@keyframes gc-n-v111-halo{
 0%{opacity:.12}30%{opacity:.25}64%{opacity:.51}81%{opacity:.8}
 88%{opacity:.48}100%{opacity:.84}}
@keyframes gc-n-v111-ring{
 0%,7%{opacity:0;transform:rotateX(67deg) rotateZ(-10deg) scale(.55)}
 29%{opacity:.26}
 75%{opacity:.69;transform:rotateX(67deg) rotateZ(80deg) scale(.94)}
 90%{opacity:.37}100%{opacity:.9;transform:rotateX(67deg) rotateZ(130deg) scale(1.1)}}
@keyframes gc-n-v111-seam{
 0%,12%{opacity:0;transform:scaleX(.15)}
 37%{opacity:.25;transform:scaleX(.46)}
 72%{opacity:.6;transform:scaleX(.83)}
 87%{opacity:.25;transform:scaleX(.9)}
 100%{opacity:.88;transform:scaleX(1)}}
@keyframes gc-n-v111-core{
 0%,17%{opacity:0;transform:scale(.25)}
 53%{opacity:.28;transform:scale(.74)}
 87%{opacity:.35;transform:scale(.96)}
 100%{opacity:.68;transform:scale(1.05)}}
@keyframes gc-n-v111-ember{
 0%,13%{opacity:0;transform:rotate(var(--n-charge-az)) translateY(-130px) scale(.3)}
 47%{opacity:.55}
 82%{opacity:.94;transform:rotate(var(--n-charge-az)) translateY(-25px) scale(.9)}
 100%{opacity:0;transform:rotate(var(--n-charge-az)) translateY(0) scale(.2)}}
@keyframes gc-n-v111-seam-release{
 0%{opacity:.88;transform:scaleX(1)}23%{opacity:.78}
 49%{opacity:.16;transform:scaleX(1.3)}100%{opacity:0;transform:scaleX(1.5)}}
@keyframes gc-n-v111-core-release{
 0%{opacity:.68;transform:scale(1.05)}25%{opacity:.85;transform:scale(1.45)}
 100%{opacity:0;transform:scale(2)}}
@keyframes gc-n-v111-ring-release{
 0%{opacity:.9;transform:rotateX(67deg) rotateZ(130deg) scale(1.1)}
 31%{opacity:.59;transform:rotateX(67deg) rotateZ(160deg) scale(1.3)}
 100%{opacity:0;transform:rotateX(67deg) rotateZ(210deg) scale(1.9)}}
/* N quiet tail is now 800ms instead of the stale 1800ms. */
.jp-gc-n-cinematic.jp-gc-p-settle .jp-gc-card-shadow{
 animation:gc-n-hero-settle .8s ease-out both}
.jp-gc-n-cinematic.jp-gc-p-settle .jp-gc-veil-scene{
 animation-duration:.8s}
@media(max-width:420px){
 .jp-gc-n-cinematic .jp-gc-n-suspense-embers i:nth-child(n+9){display:none}
}
@media(prefers-reduced-motion:reduce){
 .jp-gc-n-anticipation{display:none!important}
 .jp-gc-n-cinematic .jp-gc-chest-scene{animation:none!important}
}


/* N VFX v1.12: a SINGLE 10-second ambient composition mounted just once at
   'gather' and kept in the DOM through chest, launch, veil and settle.
   Stage boundaries: 0%, 16% lid starts, 23% flight starts, 42% unveiling,
   92% final settle, 100% result. One animation clock = no cut-to-black.
   Effects live BEHIND the one awarded PlayerCard and never duplicate it. */
.jp-gc-n-flow-score{position:absolute;inset:0;z-index:2;pointer-events:none;
 overflow:hidden;contain:layout style paint;isolation:isolate}
.jp-gc-n-flow-score>span{position:absolute;pointer-events:none;left:50%;top:47%;opacity:0}
.jp-gc-n-flow-wash{width:min(145vw,770px);height:min(145vw,770px);
 border-radius:50%;transform:translate(-50%,-50%) scale(.5);
 background:radial-gradient(circle,transparent 0%,#fbf2d61d 16%,#9bcfff48 32%,#6aa6ef25 46%,transparent 72%);
 animation:gc-n-v112-continuity-wash 10s linear both}
.jp-gc-n-flow-ring{width:min(94vw,460px);height:min(94vw,460px);border-radius:50%;
 border:1px solid #a8d6ffa6;box-shadow:0 0 14px #7cbdff40,inset 0 0 12px #a2ddff28;
 transform:translate(-50%,-50%) rotate(0deg) scale(.45)}
.jp-gc-n-flow-ring-a{animation:gc-n-v112-continuity-ring 10s linear both}
.jp-gc-n-flow-ring-b{width:min(64vw,330px);height:min(64vw,330px);
 border-color:#ffe5aa91;animation:gc-n-v112-continuity-inner 10s linear both}
.jp-gc-n-flow-column{width:min(24vw,90px);height:70vh;
 background:linear-gradient(180deg,transparent 4%,#eaf7ff21 28%,#e5eeff48 49%,#fcefc438 70%,transparent);
 transform:translate(-50%,-50%) scaleX(.3) scaleY(.6);
 animation:gc-n-v112-continuity-column 10s linear both}
.jp-gc-n-flow-lens{width:min(175vw,880px);height:4px;
 background:linear-gradient(90deg,transparent,#90c8ff50 26%,#ffffefce 49%,#fff2cbbb 51%,#8fbfff44 76%,transparent);
 box-shadow:0 0 18px #abd5ff73;
 transform:translate(-50%,-50%) scaleX(.15);
 animation:gc-n-v112-continuity-lens 10s linear both}
.jp-gc-n-flow-sparks{position:absolute;inset:0;pointer-events:none}
.jp-gc-n-flow-sparks i{position:absolute;left:50%;top:47%;width:3px;height:3px;opacity:0;
 border-radius:50%;background:#fffcef;box-shadow:0 0 6px 2px #ecf7ff99,0 0 12px #99bfff77;
 transform:rotate(var(--n-flow-angle)) translateY(var(--n-flow-orbit)) scale(.1);
 animation:gc-n-v112-continuity-star 10s linear both}
/* Continuous energy evolves rather than being restarted every React phase. */
@keyframes gc-n-v112-continuity-wash{
  0%{opacity:.02;transform:translate(-51%,-51%) scale(.55)}
  15%{opacity:.12;transform:translate(-51%,-51%) scale(.77)}
  18%{opacity:.26;transform:translate(-51%,-51%) scale(.85)}
  23%{opacity:.48;transform:translate(-51%,-51%) scale(1.03)}
  29%{opacity:.36;transform:translate(-51%,-57%) scale(1.12)}
  40%{opacity:.18;transform:translate(-51%,-51%) scale(1.09)}
  42%{opacity:.19;transform:translate(-51%,-51%) scale(1.04)}
  63%{opacity:.26;transform:translate(-51%,-51%) scale(1.1)}
  72%{opacity:.32;transform:translate(-51%,-51%) scale(1.15)}
  90%{opacity:.13;transform:translate(-51%,-51%) scale(1.1)}
  92%{opacity:.09;transform:translate(-51%,-51%) scale(1.05)}
  100%{opacity:0;transform:translate(-51%,-51%) scale(.98)}}
@keyframes gc-n-v112-continuity-ring{
  0%{opacity:0;transform:translate(-51%,-51%) rotate(0) scale(.4)}
  15%{opacity:.22}
  22%{opacity:.45;transform:translate(-51%,-51%) rotate(48deg) scale(.8)}
  29%{opacity:.4;transform:translate(-51%,-51%) rotate(85deg) scale(1.05)}
  40%{opacity:.12;transform:translate(-51%,-51%) rotate(140deg) scale(1.2)}
  42%{opacity:.11;transform:translate(-51%,-51%) rotate(150deg) scale(1.18)}
  61%{opacity:.28;transform:translate(-51%,-51%) rotate(190deg) scale(1.15)}
  71%{opacity:.44;transform:translate(-51%,-51%) rotate(260deg) scale(1.17)}
  90%{opacity:.10;transform:translate(-51%,-51%) rotate(310deg) scale(1.1)}
  100%{opacity:0;transform:translate(-51%,-51%) rotate(340deg) scale(.98)}}
@keyframes gc-n-v112-continuity-inner{
  0%{opacity:0;transform:translate(-51%,-51%) rotate(0deg) scale(.35)}
  15%{opacity:.21}
  23%{opacity:.39;transform:translate(-51%,-51%) rotate(-45deg) scale(.85)}
  35%{opacity:.14;transform:translate(-51%,-51%) rotate(-96deg) scale(1.1)}
  42%{opacity:.10;transform:translate(-51%,-51%) rotate(-128deg) scale(1)}
  66%{opacity:.28;transform:translate(-51%,-51%) rotate(-205deg) scale(1.08)}
  76%{opacity:.24;transform:translate(-51%,-51%) rotate(-258deg) scale(1.15)}
  92%{opacity:.06;transform:translate(-51%,-51%) rotate(-320deg) scale(1.02)}
  100%{opacity:0;transform:translate(-51%,-51%) rotate(-345deg) scale(.98)}}
@keyframes gc-n-v112-continuity-column{
  0%,13%{opacity:0;transform:translate(-51%,-51%) scaleX(.12) scaleY(.35)}
  21%{opacity:.35}
  23%{opacity:.65;transform:translate(-51%,-51%) scaleX(.78) scaleY(.8)}
  30%{opacity:.46;transform:translate(-51%,-59%) scaleX(.55) scaleY(1.08)}
  40%{opacity:.07;transform:translate(-51%,-66%) scaleX(.4) scaleY(1.13)}
  42%{opacity:.03}
  59%{opacity:.04;transform:translate(-51%,-51%) scaleX(.35) scaleY(.85)}
  67%{opacity:.19;transform:translate(-51%,-51%) scaleX(.58) scaleY(.98)}
  77%{opacity:.07}
  92%,100%{opacity:0;transform:translate(-51%,-51%) scaleX(.2) scaleY(1)}}
@keyframes gc-n-v112-continuity-lens{
  0%,13%{opacity:0;transform:translate(-51%,-51%) scaleX(.12)}
  16%{opacity:.16}
  20%{opacity:.37;transform:translate(-51%,-51%) scaleX(.68)}
  23%{opacity:.46;transform:translate(-51%,-51%) scaleX(.98)}
  30%{opacity:.24}
  41%{opacity:0;transform:translate(-51%,-51%) scaleX(1.3)}
  42%,60%{opacity:0;transform:translate(-51%,-51%) scaleX(.65)}
  67%{opacity:.49;transform:translate(-51%,-51%) scaleX(.94)}
  71%{opacity:.30}
  79%,100%{opacity:0;transform:translate(-51%,-51%) scaleX(1.2)}}
@keyframes gc-n-v112-continuity-star{
  0%{opacity:0;transform:rotate(var(--n-flow-angle)) translateY(var(--n-flow-orbit)) scale(.3)}
  16%{opacity:.14}
  23%{opacity:.55;transform:rotate(var(--n-flow-angle)) translateY(var(--n-flow-orbit)) scale(.85)}
  34%{opacity:.35;transform:rotate(var(--n-flow-angle)) translateY(-175px) scale(.7)}
  42%{opacity:.15;transform:rotate(var(--n-flow-angle)) translateY(-158px) scale(.65)}
  61%{opacity:.38;transform:rotate(var(--n-flow-angle)) translateY(-152px) scale(.8)}
  69%{opacity:.85;transform:rotate(var(--n-flow-angle)) translateY(-181px) scale(1.35)}
  80%{opacity:.34}
  92%{opacity:.07;transform:rotate(var(--n-flow-angle)) translateY(-198px) scale(.6)}
  100%{opacity:0;transform:rotate(var(--n-flow-angle)) translateY(-204px) scale(.15)}}
@media(max-width:420px){
 .jp-gc-n-flow-sparks i:nth-child(n+6){display:none}
 .jp-gc-n-flow-column{height:58vh}
}
@media(prefers-reduced-motion:reduce){
 .jp-gc-n-flow-score{display:none!important}
}


/* N v1.13: the card is physically INSIDE the opened chest before take-off.
 * Render the real PlayerCard in the chest phase, with its lower part occluded
 * by a clipped front lip from the SAME chest.webp texture. Never draw a
 * second card. The card travels one unbroken trajectory into the camera.
 * N chest: 1.10–1.80s, N launch: 1.80–4.10s.
 */
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-veil-scene{
 animation:none;opacity:1;z-index:3}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-n-flip{
 transform:rotateY(180deg);animation:none}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-card-shadow{
 animation:gc-n-v113-inside-chest .7s ease-out both;
 transform-origin:50% 50%;will-change:transform,opacity}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-card-shadow{
 animation:gc-n-v113-emerge-from-chest 1.9s linear both;
 transform-origin:50% 50%;will-change:transform,opacity}
/* v1.32: reveal the actual card back while the chest lip still exists.
   At 0.27–0.7s of opening the top edge passes the rim visibly.
   End pose EXACTLY matches the first frame of the launch animation. */
/* v1.34: the actual single card begins rising AND zooming with the lid.
   First visible at .16s after chest opens; camera push is underway while
   the chest shrinks behind it. Final pose matches launch frame 0 exactly. */
@keyframes gc-n-v113-inside-chest{
 0%,22%{opacity:0;transform:translateY(95px) rotateZ(-7deg) rotateY(-12deg) scale(.20)}
 27%{opacity:.62;transform:translateY(84px) rotateZ(-7deg) rotateY(-12deg) scale(.27)}
 40%{opacity:1;transform:translateY(55px) rotateZ(-7deg) rotateY(-12deg) scale(.40)}
 55%{opacity:1;transform:translateY(12px) rotateZ(-6deg) rotateY(-13deg) scale(.59)}
 72%{opacity:1;transform:translateY(-28px) rotateZ(-6deg) rotateY(-14deg) scale(.75)}
 88%{opacity:1;transform:translateY(-48px) rotateZ(-6deg) rotateY(-13deg) scale(.83)}
 100%{opacity:1;transform:translateY(-55px) rotateZ(-6deg) rotateY(-12deg) scale(.88)}
}
/* v1.34: the card has ALREADY emerged and scaled up during chest opening.
   Continue one unbroken toward-camera trajectory; do not restart from a
   tiny card or wait for the chest to vanish before zooming. */
@keyframes gc-n-v113-emerge-from-chest{
 0%{opacity:1;transform:translateY(-55px) rotateZ(-6deg) rotateY(-12deg) scale(.88)}
 8%{transform:translateY(-96px) rotateZ(-4deg) rotateY(-14deg) scale(1.00)}
 17%{transform:translateY(-142px) rotateZ(-1deg) rotateY(-15deg) scale(1.12)}
 29%{transform:translateY(-151px) rotateZ(3deg) rotateY(-9deg) scale(1.16)}
 41%{transform:translateY(-110px) rotateZ(5deg) rotateY(3deg) scale(1.16)}
 55%{transform:translateY(-60px) rotateZ(2deg) rotateY(2deg) scale(1.11)}
 70%{transform:translateY(-23px) rotateZ(-1deg) rotateY(-1deg) scale(1.06)}
 84%{transform:translateY(-5px) rotateZ(0deg) rotateY(0deg) scale(1.02)}
 100%{opacity:1;transform:translateY(0) rotateZ(0deg) rotateY(0deg) scale(1)}
}
/* The parent shares exactly the closed-chest scene's positioning. Only the
 * front 61% of its *lower* artwork covers the card at the actual aperture. */
.jp-gc-n-chest-front{position:absolute;left:50%;top:47%;width:min(67vw,310px);
 aspect-ratio:1.15;transform:translate(-50%,-50%);z-index:5;
 pointer-events:none;overflow:visible;opacity:0}
.jp-gc-n-chest-front>img{position:absolute;left:0;bottom:4%;width:100%;height:auto;
 clip-path:inset(39% 0 0 0);filter:drop-shadow(0 8px 7px #0007);
 user-select:none;-webkit-user-select:none;pointer-events:none}
/* Metallic opening + localized spill of light where the card intersects the
 * front rim. Effects are NOT a full-screen flash or a card replacement. */
.jp-gc-n-mouth-rim{position:absolute;top:43%;left:14%;width:72%;height:3%;opacity:0;
 border-radius:50%;
 background:linear-gradient(90deg,transparent,#947047 11%,#f0d89c 36%,#fdf0ca 49%,#e6bd72 66%,#674721 90%,transparent);
 box-shadow:0 2px 2px #0008,0 -2px 11px #eed4a88c}
.jp-gc-n-mouth-emission{position:absolute;top:30%;left:22%;width:56%;height:35%;
 opacity:0;border-radius:50%;mix-blend-mode:screen;
 background:radial-gradient(ellipse,#fffbd0dd 0%,#b8dcff95 29%,transparent 68%);
 transform:translateY(22px) scale(.3);pointer-events:none}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-n-chest-front{
 animation:gc-n-v113-lip-open .7s cubic-bezier(.15,.7,.2,1) both}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-n-mouth-rim{
 animation:gc-n-v113-rim-bloom .7s ease-out both}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-n-mouth-emission{
 animation:gc-n-v113-mouth-spark .7s ease-out both}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-chest-front{
 animation:gc-n-v113-lip-recede 1.9s ease-out both}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-mouth-rim{
 animation:gc-n-v113-rim-launch 1.9s ease-out both}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-mouth-emission{
 animation:gc-n-v113-emission-release 1.9s ease-out both}
@keyframes gc-n-v113-lip-open{
 0%{opacity:1;transform:translate(-50%,-50%) scale(.94)}
 45%{opacity:1;transform:translate(-50%,-50%) scale(1.04)}
 100%{opacity:1;transform:translate(-50%,-50%) scale(1)}}
@keyframes gc-n-v113-lip-recede{
 0%{opacity:1;transform:translate(-50%,-50%) scale(1)}
 18%{opacity:1;transform:translate(-50%,-50%) scale(.96)}
 34%{opacity:.9;transform:translate(-50%,-48%) scale(.9)}
 50%,100%{opacity:0;transform:translate(-50%,-35%) scale(.78)}}
@keyframes gc-n-v113-rim-bloom{
 0%,44%{opacity:0}68%{opacity:.55}100%{opacity:.95}}
@keyframes gc-n-v113-mouth-spark{
 0%,57%{opacity:0;transform:translateY(22px) scale(.2)}
 75%{opacity:.55;transform:translateY(6px) scale(.75)}
 100%{opacity:.68;transform:translateY(0) scale(1.1)}}
@keyframes gc-n-v113-rim-launch{
 0%{opacity:.95}
 15%{opacity:1}
 38%{opacity:.3}60%,100%{opacity:0}}
@keyframes gc-n-v113-emission-release{
 0%{opacity:.68;transform:translateY(0) scale(1.1)}
 19%{opacity:.82;transform:translateY(-11px) scale(1.4)}
 43%{opacity:.15;transform:translateY(-31px) scale(1.8)}
 69%,100%{opacity:0;transform:translateY(-40px) scale(2)}}
@media(prefers-reduced-motion:reduce){
 .jp-gc-n-chest-front{display:none!important}
 .jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-card-shadow{
  animation:none!important;opacity:0!important}
}


/* N v1.14: reference-style projectile motion. The chest gives way as the
 * single real card rockets out. A small launch pulse lasts <0.9s, not a
 * permanent whiteout; the front lip stays in front until the card clears it.
 * Three decisive beats: CLOSED pressure -> FAST UP -> TOWARD CAMERA.
 * All rules are N scoped; no changes to R+/tablet render or phase durations.
 */
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-chest-scene{
  animation:gc-n-v114-chest-recoil .7s linear both}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-chest-scene{
  animation:gc-n-v114-chest-recede 1.9s linear both}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-n-chest-front{
  animation:gc-n-v114-front-recoil .7s linear both}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-chest-front{
  animation:gc-n-v114-front-recede 1.9s linear both}
/* v1.34: the lid opens until ~.30s, then the box recedes on a smooth
   ease-out and is fully invisible ~.62s into the .7s opening segment.
   The card grows during these SAME frames. */
@keyframes gc-n-v114-chest-recoil{
 0%{opacity:1;transform:translate(-50%,-50%) scale(.94)}
 23%{opacity:1;transform:translate(-50%,-50%) scale(.94)}
 43%{opacity:1;transform:translate(-50%,-50%) scale(.90)}
 55%{opacity:.88;transform:translate(-50%,-47%) scale(.75)}
 69%{opacity:.58;transform:translate(-50%,-42%) scale(.57)}
 82%{opacity:.14;transform:translate(-50%,-34%) scale(.38)}
 90%,100%{opacity:0;transform:translate(-50%,-30%) scale(.30)}}
/* Chest was already dismissed during opening. Preserve the same pose
   across the phase handoff: never bring the old chest back for one frame. */
@keyframes gc-n-v114-chest-recede{
 0%,100%{opacity:0;transform:translate(-50%,-30%) scale(.30)}
}
@keyframes gc-n-v114-front-recoil{
 0%{opacity:1;transform:translate(-50%,-50%) scale(.94)}
 23%{opacity:1;transform:translate(-50%,-50%) scale(.94)}
 43%{opacity:1;transform:translate(-50%,-50%) scale(.90)}
 55%{opacity:.88;transform:translate(-50%,-47%) scale(.75)}
 69%{opacity:.58;transform:translate(-50%,-42%) scale(.57)}
 82%{opacity:.14;transform:translate(-50%,-34%) scale(.38)}
 90%,100%{opacity:0;transform:translate(-50%,-30%) scale(.30)}}
@keyframes gc-n-v114-front-recede{
 0%,100%{opacity:0;transform:translate(-50%,-30%) scale(.30)}
}
/* Launched from the chest opening — sparks, circular shockwave and a tight
 * directional exhaust only; they remain behind the actual PlayerCard. */
.jp-gc-n-ejection{position:absolute;inset:0;z-index:0;
  pointer-events:none;overflow:visible;contain:layout style}
.jp-gc-n-ejection>span{position:absolute;left:50%;top:calc(50% + 30px);
  opacity:0;pointer-events:none}
.jp-gc-n-ejection-core{width:110%;height:68%;border-radius:50%;
  background:radial-gradient(ellipse,#fffce5b8 0%,#cdeaffaa 16%,#7dbaff5a 34%,transparent 68%);
  transform:translate(-50%,-50%) scale(.12)}
.jp-gc-n-ejection-ring{width:105%;aspect-ratio:1;border-radius:50%;
  border:2px solid #e8f6ffbd;box-shadow:0 0 13px #9fcdff77,inset 0 0 11px #ffe5a860;
  transform:translate(-50%,-50%) scale(.16)}
.jp-gc-n-ejection-ring-b{width:75%;border-color:#f7e2b5a0}
.jp-gc-n-ejection-spokes{position:absolute;inset:0;pointer-events:none}
.jp-gc-n-ejection-spokes i{position:absolute;left:50%;top:calc(50% + 30px);
  width:2.5px;height:75px;opacity:0;transform-origin:50% 0;
  border-radius:70%;background:linear-gradient(180deg,#fffdea,#b0d5ff9b 22%,#67aaff4a 58%,transparent);
  transform:rotate(var(--n-eject-angle)) scaleY(.14)}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-ejection-core{
  animation:gc-n-v114-eject-core 1.9s linear both}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-ejection-ring-a{
  animation:gc-n-v114-eject-ring 1.9s linear both}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-ejection-ring-b{
  animation:gc-n-v114-eject-ring 1.9s linear .06s both}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-ejection-spokes i{
  animation:gc-n-v114-eject-ray 1.9s linear var(--n-eject-delay) both}
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-n-ejection,
.jp-gc-n-cinematic.jp-gc-p-settle .jp-gc-n-ejection{display:none}
@keyframes gc-n-v114-eject-core{
 0%,2%{opacity:0;transform:translate(-50%,-50%) scale(.12)}
 6%{opacity:.78;transform:translate(-50%,-50%) scale(.72)}
 13%{opacity:.86;transform:translate(-50%,-50%) scale(1.04)}
 24%{opacity:.31;transform:translate(-50%,-78%) scale(1.35)}
 39%,100%{opacity:0;transform:translate(-50%,-92%) scale(1.8)}}
@keyframes gc-n-v114-eject-ring{
 0%,3%{opacity:0;transform:translate(-50%,-50%) scale(.16)}
 8%{opacity:.92;transform:translate(-50%,-50%) scale(.60)}
 17%{opacity:.64;transform:translate(-50%,-55%) scale(1.5)}
 31%{opacity:.12;transform:translate(-50%,-64%) scale(2.0)}
 44%,100%{opacity:0;transform:translate(-50%,-66%) scale(2.2)}}
@keyframes gc-n-v114-eject-ray{
 0%,3%{opacity:0;transform:rotate(var(--n-eject-angle)) scaleY(.14)}
 9%{opacity:.94;transform:rotate(var(--n-eject-angle)) scaleY(1.25)}
 18%{opacity:.69;transform:rotate(var(--n-eject-angle)) scaleY(1.65)}
 31%{opacity:.1;transform:rotate(var(--n-eject-angle)) scaleY(1.9)}
 42%,100%{opacity:0;transform:rotate(var(--n-eject-angle)) scaleY(2)}}
@media(max-width:420px){
 .jp-gc-n-ejection-spokes i:nth-child(n+7){display:none}
 .jp-gc-n-ejection-core{width:105%;height:63%}
}
@media(prefers-reduced-motion:reduce){
 .jp-gc-n-ejection{display:none!important}
}


/* v1.15: preview-only SNAPPY edit. Same story, 6.5s instead of 10s.
 * Only the read-only N-only preview sets .jp-gc-n-fast. Live gacha and
 * R+/stone presentation retain their original timings. Use short *active*
 * animations rather than long easing and lingering full-screen flares.
 *
 * Cue boundaries keep nearly identical normalized keyframe proportions:
 * old 1.1/1.8/4.1/9.2/10s => 11%/18%/41%/92%/100%;
 * fast .7/1.2/2.65/5.95/6.5s => 10.8%/18.5%/40.8%/91.5%/100%.
 */
.jp-gc-n-fast .jp-gc-n-flow-score :is(.jp-gc-n-flow-wash,
 .jp-gc-n-flow-ring-a,.jp-gc-n-flow-ring-b,.jp-gc-n-flow-column,
 .jp-gc-n-flow-lens,.jp-gc-n-flow-sparks i){animation-duration:6.5s!important}
.jp-gc-n-fast.jp-gc-p-gather :is(
 .jp-gc-chest-scene,.jp-gc-chest-halo,
 .jp-gc-n-suspense-ring,.jp-gc-n-suspense-seam,
 .jp-gc-n-suspense-core,.jp-gc-n-suspense-embers i){animation-duration:.7s!important}
.jp-gc-n-fast.jp-gc-p-chest :is(
 .jp-gc-chest-scene,.jp-gc-chest-base,.jp-gc-chest-lid,.jp-gc-chest-open,
 .jp-gc-chest-core,.jp-gc-chest-fan,.jp-gc-chest-bloom,.jp-gc-lens-flare,
 .jp-gc-chest-filmflare,.jp-gc-chest-metalglow,.jp-gc-chest-dust i,
 .jp-gc-n-hinge-depth,.jp-gc-n-chest-front,.jp-gc-n-mouth-rim,
 .jp-gc-n-mouth-emission,.jp-gc-card-shadow,
 .jp-gc-n-suspense-ring,.jp-gc-n-suspense-seam,.jp-gc-n-suspense-core,
 .jp-gc-n-portal-bridge span,.jp-gc-n-portal-bridge i,
 .jp-gc-n-opening-core,.jp-gc-n-opening-halo,.jp-gc-n-opening-cross,
 .jp-gc-n-opening-ring,.jp-gc-n-opening-sparks i,
 .jp-gc-cinema-whiteout,.jp-gc-cinema-corona,.jp-gc-cinema-ring-a,
 .jp-gc-cinema-ring-b,.jp-gc-cinema-spokes){animation-duration:.5s!important}
.jp-gc-n-fast.jp-gc-p-launch :is(
 .jp-gc-card-shadow,.jp-gc-chest-scene,.jp-gc-n-chest-front,
 .jp-gc-n-mouth-rim,.jp-gc-n-mouth-emission,
 .jp-gc-n-portal-bridge span,.jp-gc-n-portal-bridge i,
 .jp-gc-n-launch-trails i,.jp-gc-n-launch-flash,
 .jp-gc-n-ejection-core,.jp-gc-n-ejection-ring-a,.jp-gc-n-ejection-ring-b,
 .jp-gc-n-ejection-spokes i,.jp-gc-cinema-corona,
 .jp-gc-cinema-ring-a,.jp-gc-cinema-ring-b,
 .jp-gc-veil-light,.jp-gc-veil-sweep){animation-duration:1.45s!important}
.jp-gc-n-fast.jp-gc-p-veil :is(
 .jp-gc-card-shadow,.jp-gc-n-flip,
 .jp-gc-n-reveal-aura,.jp-gc-n-reveal-pulse,
 .jp-gc-n-reveal-beam,.jp-gc-n-reveal-halo,
 .jp-gc-n-reveal-effects i,.jp-gc-veil-light,.jp-gc-veil-sweep,
 .jp-gc-cinema-corona,.jp-gc-cinema-ring-a,.jp-gc-cinema-ring-b,
 .jp-gc-cinema-whiteout){animation-duration:3.3s!important}
.jp-gc-n-fast.jp-gc-p-veil .jp-gc-n-front::after{animation-duration:3.3s!important}
.jp-gc-n-fast.jp-gc-p-settle :is(.jp-gc-card-shadow,
 .jp-gc-veil-scene,.jp-gc-veil-light,.jp-gc-veil-sweep){animation-duration:.55s!important}
/* Smooth 1.45s projectile: already-accelerated card from v1.14, with a
 * crisp start and almost no excess float. R+ never matches this selector. */
.jp-gc-n-fast.jp-gc-p-launch .jp-gc-card-shadow{
 animation-timing-function:linear!important}
@media(prefers-reduced-motion:reduce){
 .jp-gc-n-fast .jp-gc-n-flow-score{display:none!important}
}


/* v1.16 user confirmed 10s. Add half a second of tension BEFORE the lid;
 * take 400ms from the card flight and 100ms from the face reveal.
 * 0–1.6s gather, 1.6–2.3s lid, 2.3–4.2s flight,
 * 4.2–9.2s unveil, 9.2–10.0s settle. R+ remains unchanged. */
.jp-gc-n-cinematic:not(.jp-gc-n-fast).jp-gc-p-launch :is(
 .jp-gc-chest-scene,.jp-gc-veil-light,.jp-gc-veil-sweep,
 .jp-gc-cinema-corona,.jp-gc-cinema-ring-a,.jp-gc-cinema-ring-b){
 animation-duration:1.9s!important}
.jp-gc-n-cinematic:not(.jp-gc-n-fast).jp-gc-p-veil :is(
 .jp-gc-veil-light,.jp-gc-veil-sweep,
 .jp-gc-cinema-corona,.jp-gc-cinema-ring-a,.jp-gc-cinema-ring-b,
 .jp-gc-direct-card-back,.jp-gc-cinema-whiteout){
 animation-duration:5s!important}


/* N v1.18: the chest disappears in the first 0.475s of the 1.9s flight.
   This flash is in FRONT of the disappearing box but BEHIND the live card.
   The short radial shockwave visibly explains the box shrinking away. */
.jp-gc-n-disappear-burst{position:absolute;inset:0;z-index:1;pointer-events:none;overflow:visible}
.jp-gc-n-disappear-burst>span{position:absolute;left:50%;top:50%;opacity:0;pointer-events:none}
.jp-gc-n-disappear-white{width:105%;height:77%;border-radius:50%;
 background:radial-gradient(ellipse,#fffbe8ee 0%,#fff5d3a8 12%,#a7d3ff75 36%,transparent 68%);
 transform:translate(-50%,-50%) scale(.15)}
.jp-gc-n-disappear-ring{width:105%;aspect-ratio:1;border:3px solid #d3ecffb8;border-radius:50%;
 box-shadow:0 0 22px 6px #e3f3ff82,inset 0 0 18px #fbe4b664;
 transform:translate(-50%,-50%) scale(.15)}
.jp-gc-n-disappear-rays{width:115%;height:115%;
 background:repeating-conic-gradient(from 6deg,#ffffff00 0deg 13deg,#fff9e599 15deg,#fff9e500 18deg 30deg);
 -webkit-mask-image:radial-gradient(circle,transparent 0 18%,#000 22% 55%,transparent 77%);
 mask-image:radial-gradient(circle,transparent 0 18%,#000 22% 55%,transparent 77%);
 transform:translate(-50%,-50%) scale(.35)}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-disappear-white{
 animation:gc-n-v118-white 1.9s linear both}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-disappear-ring{
 animation:gc-n-v118-ring 1.9s linear both}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-disappear-rays{
 animation:gc-n-v118-rays 1.9s linear both}
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-n-disappear-burst,
.jp-gc-n-cinematic.jp-gc-p-settle .jp-gc-n-disappear-burst{display:none}
@keyframes gc-n-v118-white{
 0%,2%{opacity:0;transform:translate(-50%,-50%) scale(.15)}
 7%{opacity:.80;transform:translate(-50%,-50%) scale(.72)}
 13%{opacity:.93;transform:translate(-50%,-50%) scale(1.05)}
 23%{opacity:.15;transform:translate(-50%,-50%) scale(1.34)}
 31%,100%{opacity:0;transform:translate(-50%,-50%) scale(1.52)}}
@keyframes gc-n-v118-ring{
 0%,4%{opacity:0;transform:translate(-50%,-50%) scale(.15)}
 10%{opacity:.94;transform:translate(-50%,-50%) scale(.72)}
 18%{opacity:.60;transform:translate(-50%,-50%) scale(1.30)}
 33%{opacity:.08;transform:translate(-50%,-50%) scale(1.82)}
 40%,100%{opacity:0;transform:translate(-50%,-50%) scale(2.1)}}
@keyframes gc-n-v118-rays{
 0%,4%{opacity:0;transform:translate(-50%,-50%) scale(.35)}
 12%{opacity:.74;transform:translate(-50%,-50%) scale(.84)}
 20%{opacity:.31;transform:translate(-50%,-50%) scale(1.2)}
 32%,100%{opacity:0;transform:translate(-50%,-50%) scale(1.65)}}
/* N v1.21: cinematic optics, layered behind the real card.
   Both highlights die within the fast chest exit (~0.48s) and never
   extend into the suspense/face-reveal; no GS2 or timing changes. */
/* v1.22: thin photographic streak rather than a solid rectangular white bar.
   The tapered glow sits behind the live card; keep the optical peak brief. */
.jp-gc-n-disappear-flare{width:126%;height:18px;
 background:radial-gradient(ellipse 50% 25% at 50% 50%,#fffef9 0%,#fff9e0e6 12%,#b3d8ff8c 37%,#92c2ff20 69%,transparent 100%);
 border-radius:50%;filter:drop-shadow(0 0 5px #fff4d4) drop-shadow(0 0 13px #8bc8ff);
 transform:translate(-50%,-50%) scaleX(.12);will-change:transform,opacity}
.jp-gc-n-disappear-flare::before{content:"";position:absolute;left:0;top:calc(50% - 1px);width:100%;height:2px;
 background:linear-gradient(90deg,transparent 0%,#b0ddff00 17%,#d3e8ff75 36%,#fff 50%,#d3e8ff75 64%,#b0ddff00 83%,transparent 100%);
 border-radius:50%}
.jp-gc-n-disappear-flare::after{content:"";position:absolute;left:calc(50% - 1px);top:-160%;
 width:2px;height:420%;border-radius:50%;background:linear-gradient(180deg,transparent 0%,#c3dfff29 24%,#fff8dda8 43%,#fff 50%,#fff8dda8 57%,#c3dfff29 76%,transparent 100%);
 filter:blur(.8px)}
.jp-gc-n-disappear-iris{width:67%;aspect-ratio:1;border-radius:50%;
 border:1.5px solid #fff7d9bb;
 box-shadow:0 0 0 4px #b2d9ff18,0 0 15px 3px #fff2cf88,inset 0 0 11px #b1ddff60;
 transform:translate(-50%,-50%) scale(.18);will-change:transform,opacity}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-disappear-flare{
 animation:gc-n-v121-flare 1.9s linear both}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-disappear-iris{
 animation:gc-n-v121-iris 1.9s linear both}
@keyframes gc-n-v121-flare{
 0%,2%{opacity:0;transform:translate(-50%,-50%) scaleX(.12)}
 8%{opacity:.94;transform:translate(-50%,-50%) scaleX(.75)}
 13%{opacity:1;transform:translate(-50%,-50%) scaleX(1.15)}
 22%{opacity:.35;transform:translate(-50%,-50%) scaleX(1.45)}
 27%,100%{opacity:0;transform:translate(-50%,-50%) scaleX(1.52)}}
@keyframes gc-n-v121-iris{
 0%,3%{opacity:0;transform:translate(-50%,-50%) scale(.18)}
 9%{opacity:1;transform:translate(-50%,-50%) scale(.55)}
 17%{opacity:.82;transform:translate(-50%,-50%) scale(1.12)}
 25%{opacity:0;transform:translate(-50%,-50%) scale(1.9)}
 100%{opacity:0;transform:translate(-50%,-50%) scale(1.9)}}
@media(prefers-reduced-motion:reduce){.jp-gc-n-disappear-burst{display:none!important}}


/* v1.19: prevent the small card from leaking BELOW the chest floor.
   The persistent card scene is masked at a horizontal chest-front cut line,
   and the mask lifts quickly after the card has cleared the mouth. The mask
   is on the *scene*, not the 3D card, to avoid rotating the cutout with it.
   Do not clip the 3D flip during veil/settle or touch R+ tablet presentation.
 */
/* N v1.34: no container clip during OPENING either. The entire camera
   zoom must remain visible above its parent. The actual chest/front lip
   masks the card naturally while the box is present. Its bottom stays
   inside the scene through the rising keyframes. */
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-veil-scene{
 clip-path:none!important;
 -webkit-clip-path:none!important;
 overflow:visible!important
}
/* v1.33: release the whole card from the scene-level chest mask
   as soon as launch starts. Even inset(0 0 0 0) CLIPS children to the
   scene rectangle, cutting off the upper half of a card rising -151px.
   The real foreground chest lip (z-index:5) still masks its lower edge,
   while the card/flare are free to travel outside this scene's bounds. */
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-veil-scene{
 animation:none!important;
 clip-path:none!important;
 -webkit-clip-path:none!important;
 overflow:visible!important
}
@media(prefers-reduced-motion:reduce){
 .jp-gc-n-cinematic .jp-gc-veil-scene{
 clip-path:none!important;-webkit-clip-path:none!important}
}

/* N v1.24: the same physical card carries its luminous shroud from
   flight into the reveal. It thins before the face is readable; no extra
   card, image swap, or opaque white rectangle is introduced. */
.jp-gc-n-cinematic .jp-gc-card-shadow::after{
 content:"";position:absolute;inset:-7%;z-index:6;pointer-events:none;
 border-radius:13px;opacity:0;
 background:radial-gradient(ellipse at 50% 45%,#fffdf6e0 0%,#e9f6ffb8 27%,#9ecaff75 56%,transparent 77%);
 box-shadow:0 0 20px 5px #d6eaff70,0 0 45px 12px #89c7ff35;
 mix-blend-mode:screen;transform:scale(1.04);
}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-card-shadow::after{
 opacity:.40;
}
/* A narrow gilded back edge stays visible as the one real card rises.
   Avoid flooding the whole card with white during its emergence. */
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-direct-card-back,
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-direct-card-back{
 box-shadow:inset 0 0 0 3px #101c34,inset 0 0 0 7px #d5a65573,
 inset 0 0 24px #000c,0 0 10px #fff6d878,0 0 23px #83c4ff65;
}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-card-shadow::after{
 animation:gc-n-v124-shroud-launch 1.9s linear both;
}
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-card-shadow::after{
 animation:gc-n-v124-shroud-reveal 5s linear both;
}
.jp-gc-n-cinematic.jp-gc-p-settle .jp-gc-card-shadow::after{opacity:0}
/* v1.26: carry the chest flash into the moving card without a second
   brightness surge when the flight settles. Preserve exact .66 handoff
   into the 5s reveal phase (and the same single live card). */
@keyframes gc-n-v124-shroud-launch{
 0%{opacity:.40;transform:scale(.97)}
 9%{opacity:.50;transform:scale(1.00)}
 16%{opacity:.70;transform:scale(1.08)}
 26%{opacity:.86;transform:scale(1.12)}
 42%{opacity:.83;transform:scale(1.11)}
 62%{opacity:.73;transform:scale(1.08)}
 82%{opacity:.68;transform:scale(1.05)}
 100%{opacity:.66;transform:scale(1.04)}
}
/* v1.25: build suspense through the audio cue at 50%, then uncover
   the actual card rapidly. Avoid a lingering white layer over the art. */
@keyframes gc-n-v124-shroud-reveal{
 0%,18%{opacity:.66;transform:scale(1.04)}
 34%{opacity:.74;transform:scale(1.07)}
 47%{opacity:.83;transform:scale(1.09)}
 50%{opacity:.87;transform:scale(1.10)}
 56%{opacity:.25;transform:scale(1.14)}
 62%{opacity:.04;transform:scale(1.17)}
 66%,100%{opacity:0;transform:scale(1.18)}
}
.jp-gc-n-fast.jp-gc-p-launch .jp-gc-card-shadow::after{animation-duration:1.45s!important}
.jp-gc-n-fast.jp-gc-p-veil .jp-gc-card-shadow::after{animation-duration:3.3s!important}
@media(prefers-reduced-motion:reduce){
 .jp-gc-n-cinematic .jp-gc-card-shadow::after{display:none!important}
}

/* N cinematic polish: give the closed chest a visible pressure build,
   make its opening a directional flash rather than an abrupt scene swap,
   and sharpen the light-to-face handoff. Only the N route is affected. */
.jp-gc-n-cinematic.jp-gc-p-gather .jp-gc-chest-scene{
 filter:drop-shadow(0 0 18px #9fcaff55);
 animation:gc-n-chest-breathe 1.6s ease-in-out both;
}
/* The scene is absolutely anchored at left:50% / top:47%.
   Every animated transform MUST retain translate(-50%,-50%), otherwise the
   chest origin jumps to the centre and the chest is clipped at screen right. */
@keyframes gc-n-chest-breathe{
 0%{filter:drop-shadow(0 0 4px #a8d6ff30);transform:translate(-50%,-50%) scale(.985)}
 72%{filter:drop-shadow(0 0 18px #e7f6ff99);transform:translate(-50%,-50%) scale(1.025)}
 100%{filter:drop-shadow(0 0 30px #fff4d6c0);transform:translate(-50%,-50%) scale(.94)}
}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-n-mouth-emission{
 filter:brightness(1.35) drop-shadow(0 0 22px #fff4d6);
}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-disappear-white{
 filter:brightness(1.35) drop-shadow(0 0 32px #d7f0ff);
}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-n-disappear-ring{
 filter:drop-shadow(0 0 14px #f7eacb);
}
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-card-shadow::after{
 animation:gc-n-v136-shroud-reveal 5s cubic-bezier(.32,0,.16,1) both;
}
@keyframes gc-n-v136-shroud-reveal{
 0%,14%{opacity:.66;transform:scale(1.04)}
 28%{opacity:.76;transform:scale(1.08)}
 42%{opacity:.84;transform:scale(1.11)}
 48%{opacity:.94;transform:scale(1.13)}
 52%{opacity:.99;transform:scale(1.15)}
 57%{opacity:.20;transform:scale(1.19)}
 61%{opacity:.02;transform:scale(1.21)}
 65%,100%{opacity:0;transform:scale(1.21)}
}
@media(prefers-reduced-motion:reduce){
 .jp-gc-n-cinematic.jp-gc-p-gather .jp-gc-chest-scene{animation:none!important}
 .jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-card-shadow::after{animation:none!important}
}

/* N v1.37: phase boundaries must carry the SAME card position/scale.
   Flight eases into the reveal instead of returning to centre, stopping,
   then starting another animation. The last frame of each phase equals
   the first frame of the next, including the settle handoff. */
.jp-gc-n-cinematic:not(.jp-gc-n-fast).jp-gc-p-launch .jp-gc-card-shadow{
 animation:gc-n-v137-continuous-flight 1.9s cubic-bezier(.2,.65,.32,1) both;
}
.jp-gc-n-cinematic:not(.jp-gc-n-fast).jp-gc-p-veil .jp-gc-card-shadow{
 animation:gc-n-v137-continuous-reveal 5s ease-in-out both;
}
.jp-gc-n-cinematic:not(.jp-gc-n-fast).jp-gc-p-settle .jp-gc-card-shadow{
 animation:gc-n-v137-continuous-settle .8s ease-out both;
}
@keyframes gc-n-v137-continuous-flight{
 0%{opacity:1;transform:translateY(-55px) rotateZ(-6deg) rotateY(-12deg) scale(.88)}
 12%{transform:translateY(-105px) rotateZ(-4deg) rotateY(-12deg) scale(1.01)}
 28%{transform:translateY(-147px) rotateZ(-1deg) rotateY(-8deg) scale(1.13)}
 46%{transform:translateY(-111px) rotateZ(2deg) rotateY(-3deg) scale(1.14)}
 68%{transform:translateY(-43px) rotateZ(1deg) rotateY(-1deg) scale(1.09)}
 86%{transform:translateY(-14px) rotateZ(0deg) rotateY(0deg) scale(1.065)}
 100%{opacity:1;transform:translateY(-8px) rotateZ(0deg) rotateY(0deg) scale(1.06)}
}
@keyframes gc-n-v137-continuous-reveal{
 0%{opacity:1;transform:translateY(-8px) rotateZ(0deg) rotateY(0deg) scale(1.06)}
 18%{transform:translateY(-10px) rotateZ(-.4deg) rotateY(0deg) scale(1.065)}
 44%{transform:translateY(-13px) rotateZ(-.6deg) rotateY(0deg) scale(1.08)}
 68%{transform:translateY(-10px) rotateZ(0deg) rotateY(0deg) scale(1.085)}
 100%{opacity:1;transform:translateY(-8px) rotateZ(0deg) rotateY(0deg) scale(1.08)}
}
@keyframes gc-n-v137-continuous-settle{
 0%{opacity:1;transform:translateY(-8px) rotateZ(0deg) rotateY(0deg) scale(1.08)}
 100%{opacity:1;transform:translateY(-6px) rotateZ(0deg) rotateY(0deg) scale(1.04)}
}

/* The N card must sit BETWEEN the two transparent depth canvases:
   far particles z=1, continuous ambient z=2, card z=3, near lens z=4.
   Foreground chest lip stays z=5 for physical card occlusion. */
.jp-gc-n-cinematic .jp-gc-veil-scene{z-index:3}

/* N v1.41: this is a playing CARD back, not a tablet or stone.
   The thin blue foil card and corner pips retain exactly the dimensions of
   the real PlayerCard face. No reward, tablet, position or flip clock changes. */
.jp-gc-n-cinematic .jp-gc-n-flip>.jp-gc-direct-card-back{
 border:2px solid #ebcc83!important;border-radius:8px!important;
 background:
  radial-gradient(ellipse at 50% 43%,#21599b8e 0%,transparent 65%),
  repeating-linear-gradient(42deg,transparent 0px,transparent 9px,#a9dcff10 10px,#a9dcff10 11px),
  linear-gradient(140deg,#183761,#09162f 48%,#18477c 100%)!important;
 box-shadow:
  inset 0 0 0 3px #071021,inset 0 0 0 5px #f4d798b8,
  inset 0 0 22px #6db8ff58,0 0 22px #9edcff53!important;
 color:#f4d9a1;overflow:hidden;
}
.jp-gc-n-cinematic .jp-gc-n-flip>.jp-gc-direct-card-back::before{
 inset:10px;border:1px solid #d6edfda8;border-radius:3px;
 box-shadow:inset 0 0 8px #92d4ff38;transform:none
}
.jp-gc-n-cinematic .jp-gc-n-flip>.jp-gc-direct-card-back::after{
 content:"";position:absolute;inset:-20% auto -20% -55%;width:20%;
 opacity:0;pointer-events:none;transform:skewX(-20deg) translateX(-150%);
 background:linear-gradient(90deg,transparent,#f3f9ff65,transparent);
}
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-direct-card-back::after{
 animation:gc-n-card-foil-glint 5s ease-in-out both
}
@keyframes gc-n-card-foil-glint{
 0%,20%{opacity:0;transform:skewX(-20deg) translateX(-150%)}
 36%{opacity:.6;transform:skewX(-20deg) translateX(380%)}
 47%,100%{opacity:0;transform:skewX(-20deg) translateX(520%)}
}
.jp-gc-n-cinematic .jp-gc-n-flip>.jp-gc-direct-card-back span{
 position:relative;z-index:2;align-self:center;justify-self:center;
 font:900 clamp(40px,13vw,76px) Georgia,serif!important;
 color:#f3d79b;text-shadow:0 0 9px #fedf9559,0 1px 1px #071224;
 filter:none!important;line-height:1;transform:scaleY(.92);
}
.jp-gc-n-cinematic .jp-gc-n-flip>.jp-gc-direct-card-back small{
 position:absolute;top:65%;left:0;right:0;z-index:2;
 text-align:center;letter-spacing:.23em;font:700 clamp(7px,1.85vw,10px) Georgia,serif;
 color:#d5e6f4;text-shadow:0 0 7px #90ccff80;white-space:nowrap
}
.jp-gc-n-cinematic .jp-gc-n-card-back-corner{
 position:absolute;z-index:2;font:800 clamp(13px,3.2vw,21px) Georgia,serif;
 color:#f5dbac;line-height:1;text-shadow:0 0 7px #84c7ff88
}
.jp-gc-n-cinematic .jp-gc-n-card-back-corner-tl{top:17px;left:16px}
.jp-gc-n-cinematic .jp-gc-n-card-back-corner-br{bottom:17px;right:16px;transform:rotate(180deg)}
.jp-gc-n-cinematic .jp-gc-n-flip>.jp-gc-direct-card-back i{
 inset:22%;border:1px solid #c5e3ff3b;transform:none;border-radius:50%
}
@media(prefers-reduced-motion:reduce){
 .jp-gc-n-cinematic .jp-gc-direct-card-back::after{animation:none!important;opacity:0!important}
}

/* N v1.42: user-review cleanup. Remove the duplicate huge circular portal
   during face reveal; the continuous depth canvas already draws two fine
   shockwaves. Give the physical card a short rectangular edge glint instead.
   R+ stone impact/revelation rings are deliberately untouched. */
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-cinema-ring-a,
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-cinema-ring-b{display:none!important}
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-n-reveal-pulse{
 width:108%;height:106%;border-radius:8px;border:1px solid #d6edff94;
 box-shadow:0 0 10px 2px #a1d0ff6c,inset 0 0 5px #eff8ff54;
 animation:gc-n-v142-card-perimeter 5s ease-out both
}
@keyframes gc-n-v142-card-perimeter{
 0%,37%{opacity:0;transform:translate(-50%,-50%) scale(.97)}
 48%{opacity:.33;transform:translate(-50%,-50%) scale(1.00)}
 52%{opacity:.84;transform:translate(-50%,-50%) scale(1.035)}
 61%{opacity:.24;transform:translate(-50%,-50%) scale(1.07)}
 70%,100%{opacity:0;transform:translate(-50%,-50%) scale(1.10)}
}

/* N v1.43: DO NOT tip the N/stone branch before the concealing light leaves.
   From the lid opening through the card flight, the ONE real N card is
   visually anonymous within the same featureless luminous cocoon.
   No card pip, face, frame or rectangular outline may be readable.
   Once the shroud withdraws during the early veil phase (~4.7-5.15s
   on the standard 10s cut), the genuine N card back is finally revealed.
   R+ still exposes its actual stone on its own existing route.
   The artwork is not duplicated, swapped, or awarded a second time. */
.jp-gc-n-cinematic .jp-gc-card-shadow::after{
 inset:-23%!important;
 z-index:8!important;
 border-radius:48%!important;
 background:radial-gradient(ellipse at 50% 50%,
   #fffdf7 0%,#fffdf7 44%,#edf8ff 66%,#c9e5ffed 80%,#98c9ff00 100%)!important;
 box-shadow:0 0 34px 14px #daedffb0,0 0 85px 27px #8ec4ff66!important;
 mix-blend-mode:normal!important;
 filter:blur(7px);
 pointer-events:none;
}
.jp-gc-n-cinematic.jp-gc-p-chest .jp-gc-card-shadow::after{
 opacity:1!important;animation:none!important;
 transform:scale(1.00)!important
}
.jp-gc-n-cinematic.jp-gc-p-launch .jp-gc-card-shadow::after{
 animation:gc-n-v143-sealed-flight 1.9s linear both!important
}
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-card-shadow::after{
 animation:gc-n-v143-light-withdraws 5s linear both!important
}
.jp-gc-n-cinematic.jp-gc-p-settle .jp-gc-card-shadow::after,
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-card-shadow::after{
 display:none!important
}
@keyframes gc-n-v143-sealed-flight{
 0%,100%{opacity:1;transform:scale(1.06)}
}
@keyframes gc-n-v143-light-withdraws{
 0%,10%{opacity:1;transform:scale(1.06)}
 13%{opacity:.95;transform:scale(1.08)}
 16%{opacity:.45;transform:scale(1.13)}
 19%,100%{opacity:0;transform:scale(1.19)}
}
.jp-gc-n-fast.jp-gc-p-launch .jp-gc-card-shadow::after{
 animation-duration:1.45s!important
}
.jp-gc-n-fast.jp-gc-p-veil .jp-gc-card-shadow::after{
 animation-duration:3.3s!important
}
@media(prefers-reduced-motion:reduce){
 .jp-gc-n-cinematic .jp-gc-card-shadow::after{display:none!important}
}

/* N v1.39: one mounted card remains at the exact 47% cinematic anchor.
   Draw result labels relative to that same anchor, not to a second
   variable-height flex stack (which drifted on short iPhone viewports).
   Keep R+ result layout unchanged. */
.jp-gc-n-cinematic.jp-gc-p-result{
 --gc-n-half-card:min(41.90476vw,181.5873px);
}
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-veil-scene{
 animation:none!important;opacity:1!important;overflow:visible!important;
 clip-path:none!important;-webkit-clip-path:none!important
}
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-card-shadow{
 animation:none!important;opacity:1!important;
 transform:translateY(-6px) rotateZ(0deg) rotateY(0deg) scale(1.04)!important;
 filter:none!important;overflow:visible!important
}
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-n-flip{
 animation:none!important;transform:rotateY(0deg)!important
}
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-n-flip>.jp-gc-direct-card-back,
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-card-shadow::after{display:none!important}
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-n-launch-trails,
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-n-disappear-burst,
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-n-ejection,
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-veil-light,
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-veil-sweep{display:none!important}
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-result{
 position:absolute;inset:0;margin:0;max-width:none;max-height:none;
 width:100%;height:100%;padding:0;display:block;overflow:visible;
 pointer-events:none;animation:gc-n-v138-hud-arrive .45s ease-out both
}
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-result-card-spacer{display:none!important}
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-demo-label{
 position:absolute;top:calc(env(safe-area-inset-top) + 18px);
 left:12px;right:12px
}
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-rarity{
 position:absolute;top:calc(47% - var(--gc-n-half-card) - 62px);
 left:0;right:0;text-align:center
}
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-name{
 position:absolute;top:calc(47% + var(--gc-n-half-card) + 10px);
 left:12px;right:12px
}
.jp-gc-n-cinematic.jp-gc-p-result .jp-combo-won{
 position:absolute;top:calc(47% + var(--gc-n-half-card) + 65px);
 left:14px;right:14px
}
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-buttons{
 position:absolute;top:calc(47% + var(--gc-n-half-card) + 67px);
 left:0;right:0;width:100%;margin:0
}
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-result:has(.jp-combo-won) .jp-gc-buttons{
 top:calc(47% + var(--gc-n-half-card) + 148px)
}
.jp-gc-n-cinematic.jp-gc-p-result .jp-gc-result :is(button,.jp-gc-buttons){
 pointer-events:auto
}
@media(max-height:680px){
 .jp-gc-n-cinematic.jp-gc-p-result{
  --gc-n-half-card:min(37.71429vw,160.6349px)
 }
 .jp-gc-n-cinematic.jp-gc-p-result .jp-gc-rarity{
  top:calc(47% - var(--gc-n-half-card) - 51px)
 }
 .jp-gc-n-cinematic.jp-gc-p-result .jp-gc-buttons{
  top:calc(47% + var(--gc-n-half-card) + 59px)
 }
 .jp-gc-n-cinematic.jp-gc-p-result .jp-gc-result:has(.jp-combo-won) .jp-gc-buttons{
  top:calc(47% + var(--gc-n-half-card) + 139px)
 }
}
@keyframes gc-n-v138-hud-arrive{from{opacity:0}to{opacity:1}}

/* v1.49: Split stone-shatter aftermath into 2 visual routes.
 * FRONT is the pre-existing face-up reveal, reserved for SR+ only.
 * BACK holds the one genuine awarded card on a 3D flipper: visible back
 * at the shatter, then one physical turn during veil, no second award.
 * Both keep the original stone shatter, bonus effects and result timings. */
.jp-gc-poststone-back .jp-gc-sealed-card{
 overflow:visible!important;
 perspective:1000px;
 -webkit-perspective:1000px;
 isolation:isolate
}
.jp-gc-poststone-flipper{
 position:absolute;inset:0;
 width:100%;height:100%;
 transform-style:preserve-3d;-webkit-transform-style:preserve-3d;
 transform:rotateY(0deg);
 will-change:transform
}
.jp-gc-poststone-card-front,
.jp-gc-poststone-card-reverse{
 position:absolute;inset:0;
 display:flex;align-items:center;justify-content:center;
 -webkit-backface-visibility:hidden;backface-visibility:hidden;
 border-radius:5px;overflow:hidden;
}
.jp-gc-poststone-card-front{transform:rotateY(180deg);z-index:1}
.jp-gc-poststone-card-front>.jp-pcard{
 width:100%!important;height:100%!important;max-width:100%;
 flex:0 0 100%;box-shadow:none;object-fit:contain
}
.jp-gc-poststone-card-reverse{
 z-index:2;transform:rotateY(0deg);
 display:flex;flex-direction:column;gap:8px;
 background:radial-gradient(ellipse at 50% 44%,#244e88 0%,#0b203b 56%,#050d20 100%);
 border:3px solid #e6c884;
 box-shadow:inset 0 0 0 3px #07152a,inset 0 0 0 5px #b6d8ff9c,
   inset 0 0 25px #609ddd77,0 0 24px #81c8ff77;
 color:#edd7a1;box-sizing:border-box
}
.jp-gc-poststone-card-reverse::before{
 content:"";position:absolute;inset:10px;
 border:1px solid #acd6fa9e;border-radius:2px;
 pointer-events:none
}
.jp-gc-poststone-card-reverse>span{
 font:900 clamp(45px,12vw,72px) Georgia,serif;
 text-shadow:0 0 12px #99d9ff88;line-height:1
}
.jp-gc-poststone-card-reverse>small{
 font:700 clamp(8px,1.8vw,11px) Georgia,serif;
 letter-spacing:.17em;color:#d4ebfc;white-space:nowrap;
 text-shadow:0 0 8px #82c0ff99
}
.jp-gc-poststone-corner{
 position:absolute;font:700 20px Georgia,serif;
 text-shadow:0 0 8px #c0ebff
}
.jp-gc-poststone-corner-top{top:16px;left:15px}
.jp-gc-poststone-corner-bottom{bottom:16px;right:15px;transform:rotate(180deg)}
/* The stone itself obscures the flipper until its fragments leave. */
.jp-gc-p-strike .jp-gc-poststone-back .jp-gc-poststone-flipper{
 transform:rotateY(0deg)
}
.jp-gc-p-veil .jp-gc-poststone-back .jp-gc-poststone-flipper{
 animation:gc-poststone-back-then-turn 5.1s cubic-bezier(.25,.68,.22,1) both
}
@keyframes gc-poststone-back-then-turn{
 0%,24%{transform:rotateY(0deg)}
 43%,100%{transform:rotateY(-180deg)}
}
.jp-gc-p-settle .jp-gc-poststone-back .jp-gc-poststone-flipper{
 animation:none!important;transform:rotateY(-180deg)!important
}
/* Safari 3D faces: no momentary front-image flash during the stone break. */
.jp-gc-poststone-back .jp-gc-poststone-card-front,
.jp-gc-poststone-back .jp-gc-poststone-card-reverse{
 -webkit-transform-style:preserve-3d;transform-style:preserve-3d
}
@media(prefers-reduced-motion:reduce){
 .jp-gc-poststone-back .jp-gc-poststone-flipper{
  animation:none!important;transform:rotateY(-180deg)!important
 }
}

/* v1.51: STONE/CARD GEOMETRY & FINISH. The visual branches and phase
 * timing stay fixed. Reuse the exact 47% light focal point, common 63:88
 * plate dimensions and stable centre for rise/strike/veil/settle.
 * --gc-poststone-accent-rgb is deliberately neutral: rarity-specific
 * colour/effect mapping is a separate future change. */
.jp-gc-sealed-scene{
 --gc-poststone-accent-rgb:174,219,255;
 --gc-poststone-stage-width:min(55vw,245px,42dvh);
 width:var(--gc-poststone-stage-width);
 left:50%;top:47%;
 aspect-ratio:63/88;
 transform:translate(-50%,-50%);
 transform-origin:50% 50%;
 perspective:1050px;
 -webkit-perspective:1050px;
}
.jp-gc-sealed-scene .jp-gc-tablet{
 transform-origin:50% 50%;
 -webkit-transform-origin:50% 50%;
 backface-visibility:visible;
}
.jp-gc-poststone-back .jp-gc-sealed-card,
.jp-gc-poststone-back .jp-gc-poststone-flipper{
 box-sizing:border-box;width:100%;height:100%;
 transform-origin:50% 50%;
 -webkit-transform-origin:50% 50%;
}
.jp-gc-poststone-back .jp-gc-poststone-card-front,
.jp-gc-poststone-back .jp-gc-poststone-card-reverse{
 box-sizing:border-box;
 width:100%;height:100%;
 -webkit-backface-visibility:hidden;
 backface-visibility:hidden
}
.jp-gc-poststone-back .jp-gc-poststone-card-front>.jp-pcard{
 width:100%!important;height:100%!important;
 aspect-ratio:63/88!important;
 margin:0!important;box-shadow:none!important;
 border-radius:5px!important
}
/* Physically continuous after shatter: original stone footprint -> back
 * card at 1x -> gentle push in -> 1.08x settle. No horizontal travel,
 * no abrupt overzoom and no source-image replacement. */
.jp-gc-p-veil .jp-gc-poststone-back .jp-gc-tablet{
 animation:gc-v151-poststone-continuous 5.1s cubic-bezier(.2,.75,.23,1) both!important
}
@keyframes gc-v151-poststone-continuous{
 0%{transform:translateY(-4px) rotateY(0deg) scale(1)}
 40%{transform:translateY(-4px) rotateY(0deg) scale(1.055)}
 100%{transform:translateY(-4px) rotateY(0deg) scale(1.08)}
}
/* A modest directional reflection is ON THE BACK ONLY. It vanishes before
 * the front becomes readable and never tints the existing face-up route. */
.jp-gc-poststone-back .jp-gc-poststone-card-reverse{
 box-shadow:inset 0 0 0 3px #101a31,
   inset 0 0 0 5px rgba(var(--gc-poststone-accent-rgb),.65),
   inset 0 0 32px #6a9ecb65,0 0 19px 3px rgba(var(--gc-poststone-accent-rgb),.42);
}
.jp-gc-poststone-back .jp-gc-poststone-card-reverse::after{
 content:"";position:absolute;inset:-12%;pointer-events:none;z-index:1;
 background:linear-gradient(110deg,transparent 21%,#edfcff04 34%,
   #fbffff5e 49%,#fff9e67a 50%,#c5e9ff29 56%,transparent 69%);
 opacity:0;transform:translateX(-115%);
 mix-blend-mode:screen;
}
.jp-gc-p-veil .jp-gc-poststone-back .jp-gc-poststone-card-reverse::after{
 animation:gc-v151-back-metal-glint 5.1s ease-out both
}
@keyframes gc-v151-back-metal-glint{
 0%,7%{opacity:0;transform:translateX(-115%)}
 14%{opacity:.7;transform:translateX(-38%)}
 22%{opacity:.36;transform:translateX(65%)}
 29%,100%{opacity:0;transform:translateX(125%)}
}
.jp-gc-p-veil .jp-gc-poststone-back .jp-gc-card-edge-glow{
 animation:gc-v151-card-rim-glisten 5.1s ease-out both
}
@keyframes gc-v151-card-rim-glisten{
 0%{opacity:.12;filter:brightness(1)}
 22%{opacity:.52;filter:brightness(1.4)}
 42%{opacity:.38;filter:brightness(1.1)}
 100%{opacity:.1;filter:brightness(1)}
}
.jp-gc-p-settle .jp-gc-poststone-back .jp-gc-card-edge-glow{
 animation:none!important;opacity:.10
}
@media(max-height:610px){
 .jp-gc-sealed-scene{
  --gc-poststone-stage-width:min(52vw,205px,38dvh)
 }
}
@media(prefers-reduced-motion:reduce){
 .jp-gc-p-veil .jp-gc-poststone-back .jp-gc-tablet{
  animation:none!important;transform:translateY(-4px) rotateY(0deg) scale(1.08)
 }
 .jp-gc-poststone-back .jp-gc-poststone-card-reverse::after{
  animation:none!important;opacity:0!important
 }
 .jp-gc-p-veil .jp-gc-poststone-back .jp-gc-card-edge-glow{
  animation:none!important
 }
}

/* Stone result HUD: align the final awarded PlayerCard with the same
 * 47%-height centre and 1.08x size reached at the end of the stone unveil.
 * No jump to a new flex-column card footprint on portrait phones. Keep the
 * original scrollable result flow for short/landscape devices and bonuses. */
@media(min-height:700px) and (orientation:portrait){
 .jp-gc:not(.jp-gc-n-cinematic).jp-gc-p-result{
  --gc-poststone-hud-width:min(55vw,245px,42dvh);
  --gc-poststone-hud-half:calc(var(--gc-poststone-hud-width) * .7542857143);
 }
 .jp-gc:not(.jp-gc-n-cinematic).jp-gc-p-result .jp-gc-result:not(:has(.jp-combo-won)){
  position:absolute;inset:0;width:100%;height:100%;
  max-width:none;max-height:none;margin:0;padding:0;
  display:block;overflow:visible;pointer-events:none;
  animation:gc-n-v138-hud-arrive .35s ease-out both
 }
 .jp-gc:not(.jp-gc-n-cinematic).jp-gc-p-result .jp-gc-result:not(:has(.jp-combo-won)) .jp-gc-result-card{
  position:absolute;top:47%;left:50%;
  width:calc(var(--gc-poststone-hud-width) * 1.08);
  transform:translate(-50%,-50%);
  filter:drop-shadow(0 7px 22px rgba(var(--gc-rgb),.27));
  zoom:1;animation:gc-v151-hud-card-arrive .35s ease-out both
 }
 .jp-gc:not(.jp-gc-n-cinematic).jp-gc-p-result .jp-gc-result:not(:has(.jp-combo-won)) .jp-gc-result-card>.jp-pcard{
  width:100%!important;height:auto!important;max-width:100%;
  aspect-ratio:63/88
 }
 @keyframes gc-v151-hud-card-arrive{
  from{opacity:.72;transform:translate(-50%,-50%) scale(1.005)}
  to{opacity:1;transform:translate(-50%,-50%) scale(1)}
 }
 .jp-gc:not(.jp-gc-n-cinematic).jp-gc-p-result .jp-gc-result:not(:has(.jp-combo-won)) .jp-gc-rarity{
  position:absolute;top:calc(47% - var(--gc-poststone-hud-half) - 60px);
  left:0;right:0;text-align:center
 }
 .jp-gc:not(.jp-gc-n-cinematic).jp-gc-p-result .jp-gc-result:not(:has(.jp-combo-won)) .jp-gc-name{
  position:absolute;top:calc(47% + var(--gc-poststone-hud-half) + 11px);
  left:10px;right:10px
 }
 .jp-gc:not(.jp-gc-n-cinematic).jp-gc-p-result .jp-gc-result:not(:has(.jp-combo-won)) .jp-gc-demo-label{
  position:absolute;top:calc(env(safe-area-inset-top) + 18px);
  left:12px;right:12px
 }
 .jp-gc:not(.jp-gc-n-cinematic).jp-gc-p-result .jp-gc-result:not(:has(.jp-combo-won)) .jp-gc-buttons{
  position:absolute;top:calc(47% + var(--gc-poststone-hud-half) + 76px);
  left:0;right:0;width:100%;margin:0
 }
 .jp-gc:not(.jp-gc-n-cinematic).jp-gc-p-result .jp-gc-result:not(:has(.jp-combo-won)) :is(.jp-gc-buttons,.jp-gc-buttons button){
  pointer-events:auto
 }
}


/* v1.52: Colour / metal / impact orchestra, POST 5.15s ONLY.
 * Keep the shared chest, white rectangle, mystery timing and card branches
 * byte-for-byte untouched. Effects are layered, not an opaque circular blob.
 * All visible cue paths derive from the EXISTING calibrated pickCue().
 */
.jp-gc-grade-white{--gc-grade-rgb:225,239,255;--gc-grade-secondary:174,216,254;--gc-grade-energy:.66}
.jp-gc-grade-blue{--gc-grade-rgb:79,167,255;--gc-grade-secondary:184,227,255;--gc-grade-energy:.92}
.jp-gc-grade-gold{--gc-grade-rgb:255,195,91;--gc-grade-secondary:255,242,185;--gc-grade-energy:1.20}
.jp-gc-grade-rainbow{--gc-grade-rgb:221,156,255;--gc-grade-secondary:150,255,231;--gc-grade-energy:1.48}
.jp-gc-entry-bronze{
 --gc-stone-entry-filter:sepia(.22) saturate(.82) hue-rotate(0deg) brightness(.92) contrast(1.12)
}
.jp-gc-entry-silver{
 --gc-stone-entry-filter:sepia(0) saturate(.18) hue-rotate(0deg) brightness(1.35) contrast(1.15)
}
.jp-gc-entry-gold{
 --gc-stone-entry-filter:sepia(.90) saturate(1.95) hue-rotate(8deg) brightness(1.32) contrast(1.11)
}
.jp-gc-metal-bronze{
 --gc-stone-final-filter:sepia(.22) saturate(.82) hue-rotate(0deg) brightness(.92) contrast(1.12)
}
.jp-gc-metal-silver{
 --gc-stone-final-filter:sepia(0) saturate(.18) hue-rotate(0deg) brightness(1.35) contrast(1.15)
}
.jp-gc-metal-gold{
 --gc-stone-final-filter:sepia(.90) saturate(1.95) hue-rotate(8deg) brightness(1.32) contrast(1.11)
}
/* v1.55: the stone is ONE physical slab, with two stacked paints of
 * that same asset. Their material filters are CONSTANT at all times.
 * The prior filter keyframe 57%{brightness(1.9)} created a false golden
 * flash even when bronze->silver. Crossfade the finished paint instead;
 * no intermediate gold state, overbright tint, or colour downgrades.
 * The slab/fragment geometry, stone break and all phase lengths stay fixed. */
.jp-gc-sealed-scene :is(.jp-gc-stone-underlay,.jp-gc-shard) > :is(.jp-gc-stone-entry-img,.jp-gc-stone-final-img){
 position:absolute;inset:0;width:100%;height:100%;object-fit:fill;
 pointer-events:none;animation:none
}
.jp-gc.jp-gc-sealed-scene,.jp-gc .jp-gc-stone-underlay,.jp-gc .jp-gc-shard{
 isolation:isolate
}
.jp-gc.jp-gc .jp-gc-sealed-scene .jp-gc-stone-entry-img{
 z-index:0;opacity:1;
 filter:var(--gc-stone-entry-filter)!important
}
.jp-gc.jp-gc .jp-gc-sealed-scene .jp-gc-stone-final-img{
 z-index:1;opacity:1;
 filter:var(--gc-stone-final-filter)!important
}
.jp-gc.jp-gc-stone-upgrading.jp-gc-p-rise .jp-gc-sealed-scene .jp-gc-stone-final-img{
 opacity:0
}
.jp-gc.jp-gc-stone-upgrading.jp-gc-p-hold .jp-gc-sealed-scene .jp-gc-stone-final-img{
 animation:gc-v155-stone-monotone 1.7s cubic-bezier(.24,.67,.31,1) both!important
}
/* Non-decreasing final-paint coverage: start 0, end 1, NEVER back. */
@keyframes gc-v155-stone-monotone{
 0%,58.8%{opacity:0}
 77%{opacity:.52}
 96%,100%{opacity:1}
}
.jp-gc.jp-gc-stone-upgrading.jp-gc-p-strike .jp-gc-sealed-scene .jp-gc-stone-final-img{
 opacity:1
}
/* Static grades MUST stay static on hold, even during a white/blue cue. */
.jp-gc.jp-gc-p-hold:not(.jp-gc-stone-upgrading) .jp-gc-sealed-scene .jp-gc-stone-final-img{
 animation:none!important;opacity:1!important
}
@media(prefers-reduced-motion:reduce){
 .jp-gc.jp-gc-stone-upgrading.jp-gc-p-hold .jp-gc-sealed-scene .jp-gc-stone-final-img{
  animation:none!important;opacity:1!important
 }
}
/* Do not cast rarity-dependent light across the N/R+ shared intro. */
.jp-gc-grade-fx{
 position:absolute;inset:0;z-index:2;overflow:hidden;
 pointer-events:none;contain:layout style paint;
 --gc-origin-x:50%;--gc-origin-y:47%;
}
.jp-gc-grade-fx>span,.jp-gc-grade-fx>div{
 position:absolute;inset:0;pointer-events:none
}
/* Large, transparent, layered volume behind the actual slab. */
.jp-gc-grade-depth{
 opacity:.55;
 background:
  radial-gradient(ellipse 30% 42% at 40% 40%,rgba(var(--gc-grade-rgb),.21),transparent 80%),
  radial-gradient(ellipse 31% 39% at 61% 55%,rgba(var(--gc-grade-secondary),.23),transparent 80%),
  conic-gradient(from -60deg at 50% 47%,transparent 0 25%,rgba(var(--gc-grade-rgb),.14) 31%,transparent 39% 63%,rgba(var(--gc-grade-secondary),.11) 70%,transparent 80%);
 mix-blend-mode:screen;
 animation:gc-v152-volume 1.9s ease-in-out infinite alternate
}
@keyframes gc-v152-volume{
 from{opacity:.31;transform:scale(.95) rotate(-4deg)}
 to{opacity:.7;transform:scale(1.07) rotate(5deg)}
}
/* Refracted stripe, not a uniformly luminous white disk. */
.jp-gc-grade-prism{
 opacity:.5;
 background:repeating-conic-gradient(from 16deg at 50% 47%,
   rgba(var(--gc-grade-rgb),0) 0deg 8deg,
   rgba(var(--gc-grade-rgb),.19) 9deg,
   rgba(var(--gc-grade-rgb),0) 12deg 25deg);
 -webkit-mask-image:radial-gradient(ellipse 49% 55% at 50% 47%,transparent 16%,#0007 38%,transparent 83%);
 mask-image:radial-gradient(ellipse 49% 55% at 50% 47%,transparent 16%,#0007 38%,transparent 83%);
 animation:gc-v152-prism 4.5s linear infinite
}
@keyframes gc-v152-prism{
 from{transform:rotate(0deg) scale(.92)}
 to{transform:rotate(65deg) scale(1.08)}
}
.jp-gc-grade-metamorphosis{
 opacity:0;
 background:linear-gradient(110deg,transparent 26%,rgba(var(--gc-grade-rgb),.06) 36%,
    rgba(var(--gc-grade-secondary),.74) 49%,#fffefa 50%,
    rgba(var(--gc-grade-rgb),.73) 52%,transparent 68%);
 mix-blend-mode:screen;
}
/* Same 1.7s suspense pause whether upgrade or not; a visibly moving
 * refraction is stronger on promotions, gentle on a non-upgrade draw. */
.jp-gc.jp-gc-p-hold .jp-gc-grade-metamorphosis{
 animation:gc-v152-colour-refraction 1.7s cubic-bezier(.32,.13,.19,1) both
}
@keyframes gc-v152-colour-refraction{
 0%,14%{opacity:0;transform:translateX(-42%)}
 37%{opacity:.30;transform:translateX(-18%)}
 51%{opacity:.72;transform:translateX(0)}
 69%{opacity:.38;transform:translateX(21%)}
 83%,100%{opacity:0;transform:translateX(42%)}
}
.jp-gc.jp-gc-grade-upgrading.jp-gc-p-hold .jp-gc-grade-metamorphosis{
 filter:brightness(1.4) saturate(1.55)
}
/* Dual arcs sweep opposite directions; the first strikes a rectangle
 * of light around the slab, not its painted portrait. */
.jp-gc-grade-arc{
 position:absolute!important;inset:17% 11%!important;
 border-radius:50%;border:1px solid rgba(var(--gc-grade-secondary),.49);
 opacity:.28;transform:rotate(-24deg) scale(.72,1.1);
 box-shadow:0 0 16px rgba(var(--gc-grade-rgb),.35);
 animation:gc-v152-orbit-a 2.8s ease-in-out infinite alternate
}
.jp-gc-grade-arc-b{
 inset:24% 9%!important;border-color:rgba(var(--gc-grade-rgb),.48);
 animation:gc-v152-orbit-b 3.5s ease-in-out infinite alternate
}
@keyframes gc-v152-orbit-a{
 from{opacity:.17;transform:rotate(-23deg) scale(.68,.96)}
 to{opacity:.41;transform:rotate(28deg) scale(.86,1.05)}
}
@keyframes gc-v152-orbit-b{
 from{opacity:.35;transform:rotate(31deg) scale(.94,.68)}
 to{opacity:.12;transform:rotate(-27deg) scale(1.02,.79)}
}
.jp-gc-grade-sparks,.jp-gc-grade-rays{position:absolute;inset:0}
.jp-gc-grade-rays i{
 position:absolute;top:47%;left:50%;
 width:1.2px;height:clamp(60px,14vh,135px);
 transform-origin:50% 0;
 background:linear-gradient(180deg,rgba(var(--gc-grade-secondary),.54),transparent 88%);
 opacity:0;mix-blend-mode:screen;
 animation:gc-v152-ray 2.2s ease-out var(--gc-ray-delay) infinite
}
@keyframes gc-v152-ray{
 0%,12%{opacity:0;transform:rotate(var(--gc-ray-angle)) translateY(24px) scaleY(.24)}
 34%{opacity:.53;transform:rotate(var(--gc-ray-angle)) translateY(38px) scaleY(1)}
 72%,100%{opacity:0;transform:rotate(var(--gc-ray-angle)) translateY(62px) scaleY(1.25)}
}
.jp-gc-grade-sparks i{
 position:absolute;top:47%;left:50%;
 width:2px;height:7px;border-radius:999px;
 transform-origin:center;
 background:linear-gradient(#fff,rgba(var(--gc-grade-rgb),.75),transparent);
 box-shadow:0 0 6px 1px rgba(var(--gc-grade-rgb),.55);
 opacity:0;
 animation:gc-v152-spark 2.1s ease-out var(--gc-spark-delay) infinite
}
@keyframes gc-v152-spark{
 0%,9%{opacity:0;transform:rotate(var(--gc-spark-angle)) translateY(0) scale(.3)}
 26%{opacity:.92;transform:rotate(var(--gc-spark-angle)) translateY(-34px) scale(1)}
 85%,100%{opacity:0;transform:rotate(var(--gc-spark-angle)) translateY(calc(-1 * var(--gc-spark-dist))) scale(.33)}
}
.jp-gc-grade-shock{
 opacity:0;
 background:radial-gradient(ellipse 42% 33% at 50% 47%,
   rgba(255,255,255,.38) 0%,rgba(var(--gc-grade-secondary),.25) 28%,transparent 70%);
}
.jp-gc.jp-gc-p-strike .jp-gc-grade-shock{
 animation:gc-v152-grade-hit 1.2s ease-out both
}
@keyframes gc-v152-grade-hit{
 0%,5%{opacity:0;transform:scale(.55)}
 14%{opacity:.88;transform:scale(.82)}
 30%{opacity:.47;transform:scale(1.08)}
 68%,100%{opacity:0;transform:scale(1.34)}
}
/* The old top-heavy screen flash is given short impulse, then vacates
 * the foreground. The white centre does not linger across final art. */
.jp-gc-grade-white .jp-gc-grade-rays i{opacity:.35}
.jp-gc-grade-blue .jp-gc-grade-rays i{filter:drop-shadow(0 0 4px #4caaff)}
.jp-gc-grade-gold .jp-gc-grade-rays i{width:1.7px;filter:drop-shadow(0 0 5px #ffcc63)}
.jp-gc-grade-rainbow .jp-gc-grade-rays i:nth-child(4n+1){background:linear-gradient(#fff,#ff92c9,transparent)}
.jp-gc-grade-rainbow .jp-gc-grade-rays i:nth-child(4n+2){background:linear-gradient(#fff,#91aaff,transparent)}
.jp-gc-grade-rainbow .jp-gc-grade-rays i:nth-child(4n+3){background:linear-gradient(#fff,#9affd3,transparent)}
.jp-gc-grade-rainbow .jp-gc-grade-rays i:nth-child(4n){background:linear-gradient(#fff,#ffe29a,transparent)}
.jp-gc-grade-rainbow .jp-gc-grade-sparks i:nth-child(3n){background:linear-gradient(#fff,#ffb0ea,transparent)}
.jp-gc-grade-rainbow .jp-gc-grade-sparks i:nth-child(3n+1){background:linear-gradient(#fff,#9effea,transparent)}
.jp-gc-grade-rainbow .jp-gc-grade-sparks i:nth-child(3n+2){background:linear-gradient(#fff,#b1bbff,transparent)}
/* Lightning strength changes shock ripple/trails without touching timing
 * or reward cues. Chime remains the existing UR-only audio event. */
.jp-gc-thunder-normal.jp-gc-p-strike .jp-gc-grade-shock{filter:brightness(.92)}
.jp-gc-thunder-large.jp-gc-p-strike .jp-gc-grade-shock{filter:brightness(1.35)}
.jp-gc-thunder-large.jp-gc-p-strike .jp-gc-grade-sparks i{
 animation-duration:.95s
}
.jp-gc-thunder-chime.jp-gc-p-strike .jp-gc-grade-shock{
 filter:brightness(1.7) saturate(1.7)
}
.jp-gc-thunder-chime.jp-gc-p-strike .jp-gc-grade-rays i{
 filter:drop-shadow(0 0 8px #ffb9f8)
}
.jp-gc-p-veil .jp-gc-grade-depth,
.jp-gc-p-veil .jp-gc-grade-prism{
 animation-duration:3.3s;opacity:.13
}
/* Fixed outcome poster: no blur/filter retained on actual card art. */
.jp-gc-p-result .jp-gc-result-card>.jp-pcard,
.jp-gc-p-result .jp-gc-result-card>.jp-pcard *,
.jp-gc-p-settle .jp-gc-sealed-scene .jp-gc-sealed-card>.jp-pcard{
 filter:none!important;
}
.jp-gc-p-result .jp-gc-result-card{
 filter:none!important
}
.jp-gc-p-result .jp-gc-result-card>.jp-pcard{
 box-shadow:0 0 0 1px rgba(var(--gc-rgb),.34),0 0 18px rgba(var(--gc-rgb),.19)
}
@media(prefers-reduced-motion:reduce){
 .jp-gc-grade-fx{display:none!important}
 .jp-gc-p-hold .jp-gc-sealed-scene :is(.jp-gc-stone-underlay img,.jp-gc-shard img){
  animation:none!important;filter:var(--gc-stone-final-filter)!important
 }
}

/* v1.53: Six independent presentation paths are now visible.
 * Origin colour stays perceptible after 5.15s, then light / prism / stone
 * transition to the preselected cue in the SAME existing 1.7s hold.
 * No visible route-specific geometry, light or sound during mystery prefix. */
.jp-gc-grade-from-white{--gc-grade-start-rgb:226,239,255}
.jp-gc-grade-from-blue{--gc-grade-start-rgb:70,162,255}
.jp-gc-grade-from-gold{--gc-grade-start-rgb:255,198,103}
.jp-gc-grade-depth::before{
 content:"";position:absolute;inset:0;pointer-events:none;
 background:
  radial-gradient(ellipse 33% 43% at 45% 40%,rgba(var(--gc-grade-start-rgb),.42),transparent 77%),
  conic-gradient(from -40deg at 50% 47%,transparent 0 16%,rgba(var(--gc-grade-start-rgb),.29) 24%,transparent 41% 62%,rgba(var(--gc-grade-start-rgb),.24) 71%,transparent 87%);
 mix-blend-mode:screen;
 opacity:.86;transform:scale(.97);
}
.jp-gc-p-rise .jp-gc-grade-depth::before{
 opacity:.95
}
.jp-gc-p-hold .jp-gc-grade-depth::before{
 animation:gc-v153-origin-withdraw 1.7s ease-in-out both
}
@keyframes gc-v153-origin-withdraw{
 0%,20%{opacity:.95;transform:scale(.97)}
 44%{opacity:.72;transform:scale(1.00)}
 65%{opacity:.17;transform:scale(1.08)}
 84%,100%{opacity:0;transform:scale(1.13)}
}
.jp-gc-grade-metamorphosis::before{
 content:"";position:absolute;inset:0;pointer-events:none;
 background:linear-gradient(105deg,transparent 27%,
 rgba(var(--gc-grade-start-rgb),.35) 40%,
 rgba(var(--gc-grade-start-rgb),.83) 46%,#fffefb 50%,
 rgba(var(--gc-grade-rgb),.77) 54%,transparent 71%);
}
.jp-gc-grade-rainbow.jp-gc-grade-from-white.jp-gc-p-hold .jp-gc-grade-metamorphosis::before{
 filter:drop-shadow(0 0 12px rgba(240,245,255,.75))
}
.jp-gc-grade-rainbow.jp-gc-grade-from-blue.jp-gc-p-hold .jp-gc-grade-metamorphosis::before{
 filter:drop-shadow(0 0 12px rgba(104,182,255,.8))
}
.jp-gc-grade-gold.jp-gc-grade-from-white.jp-gc-p-hold .jp-gc-grade-metamorphosis::before{
 filter:drop-shadow(0 0 11px rgba(255,228,155,.75))
}
@media(prefers-reduced-motion:reduce){
 .jp-gc-grade-depth::before,.jp-gc-grade-metamorphosis::before{
  animation:none!important;opacity:0!important
 }
}

/* v1.56: Stone -> card is ONE uninterrupted object.
 * - A brief WHITE flash occurs exactly as the last stone cover clears.
 * - The card beneath is never hidden or remounted.
 * - Zoom reaches the final camera distance in the FIRST 19% of the existing
 *   5.1s veil, then stays still through settle AND the result HUD.
 * - The result is labels-only, anchored to the SAME real card DOM.
 * - No timing, cue colour, actual award or shatter logic changes. */
.jp-gc .jp-gc-sealed-scene .jp-gc-stone-card-flash{
 position:absolute;inset:-12%;z-index:9;pointer-events:none;opacity:0;
 transform-origin:50% 50%;contain:paint;
}
.jp-gc .jp-gc-sealed-scene .jp-gc-stone-card-flash::before{
 content:"";position:absolute;inset:8.5%;
 border:3px solid rgba(255,255,255,.97);border-radius:4px;
 background:linear-gradient(118deg,transparent 10%,#fff9 42%,#fff6 49%,transparent 73%);
 box-shadow:0 0 15px 5px #fff,0 0 35px 12px rgba(var(--gc-rgb),.8),
   inset 0 0 17px 3px #ffffffb9;
}
.jp-gc .jp-gc-sealed-scene .jp-gc-stone-card-flash::after{
 content:"";position:absolute;top:50%;left:-18%;width:136%;height:3px;
 background:linear-gradient(90deg,transparent 0%,#d5edff50 23%,#fff 48%,
   #fff 52%,#d5edff50 77%,transparent 100%);
 box-shadow:0 0 12px 5px #ffffffa8,0 0 22px 8px rgba(var(--gc-rgb),.45);
 transform:translateY(-50%);
}
.jp-gc.jp-gc-p-veil .jp-gc-sealed-scene .jp-gc-stone-card-flash{
 animation:gc-v156-stone-card-flash 5.1s ease-out both!important
}
@keyframes gc-v156-stone-card-flash{
 0%{opacity:.38;transform:scale(.94)}
 1.5%{opacity:1;transform:scale(1)}
 4%{opacity:.95;transform:scale(1.04)}
 10%{opacity:.24;transform:scale(1.09)}
 16%,100%{opacity:0;transform:scale(1.12)}
}
/* The previous 2.95-second blur/crossflash leaked into the last reveal.
 * Flash is ABOVE the card, never implemented by hiding card content. */
.jp-gc.jp-gc-p-veil .jp-gc-sealed-scene .jp-gc-sealed-card{
 opacity:1!important;visibility:visible!important;
 animation:none!important;filter:none!important
}
.jp-gc.jp-gc-p-strike .jp-gc-sealed-scene .jp-gc-sealed-card,
.jp-gc.jp-gc-p-settle .jp-gc-sealed-scene .jp-gc-sealed-card,
.jp-gc.jp-gc-p-result .jp-gc-sealed-scene .jp-gc-sealed-card{
 opacity:1!important;visibility:visible!important;filter:none!important
}
/* FAST zoom: at front within .97s, then no late drift. Both back and front
 * routes share this same transform; the internal back-to-front FLIP still
 * takes place independently without changing the physical card position. */
.jp-gc.jp-gc-p-veil .jp-gc-sealed-scene .jp-gc-tablet{
 animation:gc-v156-fast-zoom 5.1s cubic-bezier(.12,.72,.2,1) both!important;
 transform-origin:50% 50%
}
@keyframes gc-v156-fast-zoom{
 0%{transform:translateY(-4px) rotateY(0deg) scale(1)}
 9%{transform:translateY(-4px) rotateY(0deg) scale(1.055)}
 19%,100%{transform:translateY(-4px) rotateY(0deg) scale(1.08)}
}
.jp-gc.jp-gc-p-settle .jp-gc-sealed-scene .jp-gc-tablet,
.jp-gc.jp-gc-p-result .jp-gc-sealed-scene .jp-gc-tablet{
 animation:none!important;filter:none!important;
 transform:translateY(-4px) rotateY(0deg) scale(1.08)!important
}
/* Keep the same PlayerCard mounted during the last HUD screen. */
.jp-gc.jp-gc-p-result .jp-gc-sealed-scene{
 visibility:visible!important;opacity:1!important
}
.jp-gc.jp-gc-p-result .jp-gc-sealed-scene :is(
 .jp-gc-seal,.jp-gc-beam,.jp-gc-stone-underlay,.jp-gc-shard,
 .jp-gc-cracks,.jp-gc-stone-underlight,.jp-gc-stone-card-flash,
 .jp-gc-sealed-reveal-light
){display:none!important}
.jp-gc.jp-gc-p-result .jp-gc-poststone-back .jp-gc-poststone-flipper,
.jp-gc.jp-gc-p-settle .jp-gc-poststone-back .jp-gc-poststone-flipper{
 animation:none!important;transform:rotateY(-180deg)!important
}
.jp-gc.jp-gc-p-result .jp-gc-card-edge-glow{opacity:.10!important}
.jp-gc.jp-gc-p-result .jp-gc-sealed-card{
 background:transparent!important;overflow:visible
}
/* Fully independent HUD, no second card image. The physical result anchor
 * is top:47%, width:stage and scale:1.08 on ALL screen sizes. */
.jp-gc.jp-gc-p-result .jp-gc-result-stone-hud{
 --gc-stone-hud-width:min(55vw,245px,42dvh);
 --gc-stone-hud-half:calc(var(--gc-stone-hud-width) * .7542857143);
 position:absolute!important;inset:0!important;display:block!important;
 width:100%!important;height:100%!important;max-width:none!important;
 max-height:none!important;margin:0!important;padding:0!important;
 overflow-y:auto;overflow-x:hidden;box-sizing:border-box;
 pointer-events:none;animation:gc-n-v138-hud-arrive .35s ease-out both!important
}
.jp-gc.jp-gc-p-result .jp-gc-result-stone-hud .jp-gc-result-card-spacer{
 display:none!important
}
.jp-gc.jp-gc-p-result .jp-gc-result-stone-hud .jp-gc-demo-label{
 position:absolute;top:calc(env(safe-area-inset-top) + 18px);
 left:12px;right:12px;text-align:center
}
.jp-gc.jp-gc-p-result .jp-gc-result-stone-hud .jp-gc-rarity{
 position:absolute;top:calc(47% - var(--gc-stone-hud-half) - 60px);
 left:0;right:0;text-align:center;font-size:clamp(27px,9vw,46px)
}
.jp-gc.jp-gc-p-result .jp-gc-result-stone-hud .jp-gc-name{
 position:absolute;top:calc(47% + var(--gc-stone-hud-half) + 11px);
 left:10px;right:10px
}
.jp-gc.jp-gc-p-result .jp-gc-result-stone-hud .jp-combo-won{
 position:absolute;top:calc(47% + var(--gc-stone-hud-half) + 65px);
 left:12px;right:12px
}
.jp-gc.jp-gc-p-result .jp-gc-result-stone-hud .jp-gc-buttons{
 position:absolute;top:calc(47% + var(--gc-stone-hud-half) + 76px);
 left:0;right:0;width:100%;margin:0;
 pointer-events:auto
}
.jp-gc.jp-gc-p-result .jp-gc-result-stone-hud:has(.jp-combo-won) .jp-gc-buttons{
 top:calc(47% + var(--gc-stone-hud-half) + 153px)
}
.jp-gc.jp-gc-p-result .jp-gc-result-stone-hud :is(button,.jp-gc-buttons){
 pointer-events:auto
}
@media(max-height:610px){
 .jp-gc.jp-gc-p-result .jp-gc-result-stone-hud{
  --gc-stone-hud-width:min(52vw,205px,38dvh)
 }
}
@media(prefers-reduced-motion:reduce){
 .jp-gc .jp-gc-sealed-scene .jp-gc-stone-card-flash{
  animation:none!important;opacity:0!important
 }
 .jp-gc.jp-gc-p-veil .jp-gc-sealed-scene .jp-gc-tablet{
  animation:none!important;
  transform:translateY(-4px) rotateY(0deg) scale(1.08)!important
 }
}


/* v1.57 CHANCE-UP: a real 1-second suspense within the established 1700ms
 * hold. There is no tell: no promotion / promotion share identical startup
 * color, geometry, sound, timing and light density until the 1000ms mark.
 * The last 700ms reveal color + new stone rank if selected, never downgrade.
 * Reference-video energy: layered vertical shafts, diagonal filaments,
 * horizontal refraction, deep specks and a brief light contraction.
 * No prolonged center whiteout; the stone remains readable at all times. */
.jp-gc-grade-white{--gc-grade-outcome-rgb:225,239,255;--gc-grade-outcome-secondary:174,216,254}
.jp-gc-grade-blue{--gc-grade-outcome-rgb:79,167,255;--gc-grade-outcome-secondary:184,227,255}
.jp-gc-grade-gold{--gc-grade-outcome-rgb:255,195,91;--gc-grade-outcome-secondary:255,242,185}
.jp-gc-grade-rainbow{--gc-grade-outcome-rgb:221,156,255;--gc-grade-outcome-secondary:150,255,231}
.jp-gc-grade-from-white{--gc-grade-start-secondary:216,240,255}
.jp-gc-grade-from-blue{--gc-grade-start-secondary:125,208,255}
.jp-gc-grade-from-gold{--gc-grade-start-secondary:255,237,174}
.jp-gc-grade-from-rainbow{--gc-grade-start-rgb:221,156,255;--gc-grade-start-secondary:150,255,231}
.jp-gc.jp-gc-p-rise{
 --gc-grade-rgb:var(--gc-grade-start-rgb);
 --gc-grade-secondary:var(--gc-grade-start-secondary);
}
.jp-gc.jp-gc-p-rise .jp-gc-grade-rays i,
.jp-gc.jp-gc-p-rise .jp-gc-grade-sparks i{
 background:linear-gradient(180deg,#fff,rgba(var(--gc-grade-start-rgb),.8),transparent)!important;
 filter:none!important
}
/* The base lighting and the legacy arcs cannot announce a hidden outcome.
 * All existing hold-period rays/motes use ONLY the known starting colour. */
.jp-gc.jp-gc-p-hold{
 --gc-grade-rgb:var(--gc-grade-start-rgb);
 --gc-grade-secondary:var(--gc-grade-start-secondary);
}
.jp-gc.jp-gc-p-hold .jp-gc-grade-rays i,
.jp-gc.jp-gc-p-hold .jp-gc-grade-sparks i{
 background:linear-gradient(180deg,#fff,rgba(var(--gc-grade-start-rgb),.8),transparent)!important;
 filter:none!important
}
.jp-gc.jp-gc-p-hold .jp-gc-grade-metamorphosis{
 animation:gc-v157-refraction 1.7s cubic-bezier(.18,.6,.2,1) both
}
@keyframes gc-v157-refraction{
 0%,58.7%{opacity:0;transform:translateX(-35%)}
 64%{opacity:.93;transform:translateX(-12%)}
 76%{opacity:.77;transform:translateX(6%)}
 89%,100%{opacity:0;transform:translateX(36%)}
}
.jp-gc.jp-gc-grade-nochange.jp-gc-p-hold .jp-gc-grade-metamorphosis{
 animation:gc-v157-nochange-glint 1.7s ease-out both
}
@keyframes gc-v157-nochange-glint{
 0%,58.7%{opacity:0;transform:translateX(-25%)}
 70%{opacity:.22;transform:translateX(-6%)}
 88%,100%{opacity:0;transform:translateX(26%)}
}
.jp-gc.jp-gc-p-hold .jp-gc-grade-depth::before{
 animation:gc-v157-origin-keep 1.7s ease-in-out both
}
@keyframes gc-v157-origin-keep{
 0%,23%{opacity:.72;transform:scale(.97)}
 42%{opacity:.96;transform:scale(1.01)}
 54%{opacity:.41;transform:scale(.98)}
 58.7%{opacity:.20;transform:scale(.97)}
 73%{opacity:.24;transform:scale(1.05)}
 100%{opacity:0;transform:scale(1.12)}
}
/* One continuous suspended energy column, growing then held for ~1s.
 * It is deliberately unrelated to the outcome. */
.jp-gc-chance-tease,.jp-gc-upgrade-outcome{
 position:absolute;inset:0;pointer-events:none;isolation:isolate
}
.jp-gc-chance-tease>span,.jp-gc-upgrade-outcome>span,
.jp-gc-chance-tease>div,.jp-gc-upgrade-outcome>div{
 position:absolute;inset:0;pointer-events:none
}
.jp-gc-chance-tease{opacity:0}
.jp-gc.jp-gc-p-hold .jp-gc-chance-tease{
 animation:gc-v157-tease 1.7s linear both
}
@keyframes gc-v157-tease{
 0%{opacity:.19}
 22%{opacity:.64}
 42%{opacity:.94}
 55%{opacity:.44}
 58.7%{opacity:.30}
 82%,100%{opacity:0}
}
.jp-gc-chance-spine{
 background:
 linear-gradient(90deg,transparent 35%,rgba(var(--gc-grade-start-rgb),.10) 45%,
  rgba(255,255,255,.38) 49.5%,rgba(255,255,255,.47) 50.5%,
  rgba(var(--gc-grade-start-rgb),.1) 55%,transparent 65%);
 -webkit-mask-image:linear-gradient(180deg,transparent 7%,#000 25% 73%,transparent 90%);
 mask-image:linear-gradient(180deg,transparent 7%,#000 25% 73%,transparent 90%);
 animation:gc-v157-spine 1s ease-in-out both
}
@keyframes gc-v157-spine{
 0%{opacity:.14;transform:scaleX(.72)}
 45%{opacity:.77;transform:scaleX(1.07)}
 82%,100%{opacity:.55;transform:scaleX(.88)}
}
.jp-gc-chance-needles{
 background:repeating-conic-gradient(from 13deg at 50% 47%,
  transparent 0 6deg,rgba(var(--gc-grade-start-rgb),.23) 7deg,
  transparent 9deg 22deg);
 -webkit-mask-image:radial-gradient(ellipse 48% 47% at 50% 47%,transparent 24%,#0007 47%,transparent 77%);
 mask-image:radial-gradient(ellipse 48% 47% at 50% 47%,transparent 24%,#0007 47%,transparent 77%);
 animation:gc-v157-needle-swirl 1.05s ease-in-out both
}
@keyframes gc-v157-needle-swirl{
 0%{opacity:.15;transform:rotate(-12deg) scale(1.08)}
 65%{opacity:.81;transform:rotate(12deg) scale(.91)}
 100%{opacity:.48;transform:rotate(20deg) scale(.94)}
}
.jp-gc-chance-orbit{
 background:
 radial-gradient(ellipse 47% 8% at 50% 66%,transparent 38%,rgba(var(--gc-grade-start-rgb),.48) 57%,transparent 70%),
 radial-gradient(ellipse 39% 6% at 50% 39%,transparent 44%,rgba(var(--gc-grade-start-secondary),.6) 64%,transparent 78%);
 opacity:.7;animation:gc-v157-orbit-contract 1.05s ease-in-out both
}
@keyframes gc-v157-orbit-contract{
 from{transform:scale(1.18,1.03);opacity:.18}
 57%{transform:scale(.98,.94);opacity:.8}
 to{transform:scale(.9,.86);opacity:.16}
}
.jp-gc-chance-strands i{
 position:absolute;left:50%;top:47%;width:1.5px;height:clamp(85px,18vh,220px);
 transform-origin:50% 100%;
 background:linear-gradient(0deg,rgba(255,255,255,.94),rgba(var(--gc-grade-start-rgb),.52),transparent);
 box-shadow:0 0 7px rgba(var(--gc-grade-start-rgb),.50);
 opacity:0;
 animation:gc-v157-strand 1.0s ease-in var(--gc-strand-delay) both
}
@keyframes gc-v157-strand{
 0%{opacity:0;transform:rotate(var(--gc-strand-angle)) translateY(-15px) scaleY(.12)}
 48%{opacity:.61;transform:rotate(var(--gc-strand-angle)) translateY(-30px) scaleY(.9)}
 84%,100%{opacity:.27;transform:rotate(var(--gc-strand-angle)) translateY(-49px) scaleY(1.1)}
}
/* No outcome leak before 1 second, even on rainbow/chime variants. */
.jp-gc-upgrade-outcome{opacity:0}
.jp-gc.jp-gc-grade-upgrading.jp-gc-p-hold .jp-gc-upgrade-outcome{
 animation:gc-v157-upgrade-arrive .7s cubic-bezier(.08,.86,.22,1) 1s both
}
.jp-gc.jp-gc-grade-nochange.jp-gc-p-hold .jp-gc-upgrade-outcome{
 animation:gc-v157-stay .7s ease-out 1s both
}
@keyframes gc-v157-upgrade-arrive{
 0%{opacity:0;transform:scale(.89)}
 9%{opacity:1;transform:scale(.97)}
 31%{opacity:.88;transform:scale(1.03)}
 100%{opacity:.52;transform:scale(1.06)}
}
@keyframes gc-v157-stay{
 0%{opacity:0;transform:scale(.94)}
 25%{opacity:.19;transform:scale(.98)}
 100%{opacity:.08;transform:scale(1)}
}
.jp-gc-upgrade-flood{
 background:
 radial-gradient(ellipse 35% 43% at 44% 44%,rgba(var(--gc-grade-outcome-rgb),.50),transparent 77%),
 radial-gradient(ellipse 29% 38% at 62% 53%,rgba(var(--gc-grade-outcome-secondary),.47),transparent 78%),
 linear-gradient(90deg,transparent 35%,rgba(var(--gc-grade-outcome-rgb),.22) 45%,
 rgba(255,255,255,.44) 50%,rgba(var(--gc-grade-outcome-rgb),.24) 56%,transparent 65%);
 mix-blend-mode:screen
}
.jp-gc-upgrade-cross{
 background:
 linear-gradient(0deg,transparent 46%,rgba(255,255,255,.97) 49.8%,
 rgba(255,255,255,.9) 50.2%,transparent 54%),
 linear-gradient(90deg,transparent 44%,rgba(var(--gc-grade-outcome-rgb),.71) 49%,
 #fff 50%,rgba(var(--gc-grade-outcome-rgb),.7) 51%,transparent 56%);
 -webkit-mask-image:radial-gradient(ellipse 48% 35% at 50% 47%,#000 7%,transparent 100%);
 mask-image:radial-gradient(ellipse 48% 35% at 50% 47%,#000 7%,transparent 100%);
 animation:gc-v157-lens-collapse .7s ease-out both
}
@keyframes gc-v157-lens-collapse{
 0%{opacity:.85;transform:scale(.35)}
 22%{opacity:1;transform:scale(1)}
 100%{opacity:0;transform:scale(1.65)}
}
.jp-gc-upgrade-floor{
 background:radial-gradient(ellipse 49% 9% at 50% 73%,
  transparent 37%,rgba(var(--gc-grade-outcome-rgb),.62) 53%,
  rgba(var(--gc-grade-outcome-secondary),.3) 60%,transparent 76%);
 animation:gc-v157-floor-shock .7s ease-out both
}
@keyframes gc-v157-floor-shock{
 0%{opacity:0;transform:scale(.44,.7)}
 19%{opacity:.9;transform:scale(.85,1)}
 90%,100%{opacity:.23;transform:scale(1.37,1)}
}
/* Reference-like vertical pillars are SEPARATE depth layers, with long/short
 * strokes and warm/cold highlights, not one saturated rectangular blur. */
.jp-gc-upgrade-pillars i{
 position:absolute;left:calc(50% + var(--gc-column-offset));
 top:23%;width:clamp(5px,1.7vw,17px);height:54%;
 background:linear-gradient(180deg,transparent 0%,
  rgba(var(--gc-grade-outcome-rgb),.05) 8%,
  rgba(var(--gc-grade-outcome-secondary),.75) 38%,
  rgba(255,255,255,.9) 56%,
  rgba(var(--gc-grade-outcome-rgb),.85) 72%,transparent 100%);
 filter:drop-shadow(0 0 9px rgba(var(--gc-grade-outcome-rgb),.87));
 mix-blend-mode:screen;opacity:0;
 transform-origin:50% 78%;
 animation:gc-v157-pillar .7s cubic-bezier(.08,.56,.22,1) var(--gc-column-delay) both
}
.jp-gc-upgrade-pillars i:nth-child(even){width:clamp(2px,.7vw,8px);height:67%;top:13%}
.jp-gc-upgrade-pillars i:nth-child(3n){height:39%;top:31%}
@keyframes gc-v157-pillar{
 0%{opacity:0;transform:translateY(38%) scaleY(.15) skewX(-8deg)}
 23%{opacity:.89;transform:translateY(-5%) scaleY(1.25) skewX(3deg)}
 66%{opacity:.76;transform:translateY(-14%) scaleY(1.09) skewX(-2deg)}
 100%{opacity:.38;transform:translateY(-19%) scaleY(1.22) skewX(0deg)}
}
.jp-gc-upgrade-motes i{
 position:absolute;left:50%;top:47%;width:2px;height:8px;
 background:linear-gradient(#fff,rgba(var(--gc-grade-outcome-rgb),.92),transparent);
 border-radius:2px;box-shadow:0 0 7px rgba(var(--gc-grade-outcome-rgb),.65);
 opacity:0;transform-origin:50% 50%;
 animation:gc-v157-mote .66s cubic-bezier(.18,.4,.16,1) var(--gc-mote-delay) both
}
@keyframes gc-v157-mote{
 0%{opacity:0;transform:rotate(var(--gc-mote-angle)) translateY(0) scale(.2)}
 22%{opacity:.9;transform:rotate(var(--gc-mote-angle)) translateY(-32px) scale(1)}
 85%,100%{opacity:0;transform:rotate(var(--gc-mote-angle)) translateY(calc(-1 * var(--gc-mote-travel))) scale(.2)}
}
.jp-gc-grade-rainbow.jp-gc-grade-upgrading .jp-gc-upgrade-pillars i:nth-child(3n+1){
 background:linear-gradient(180deg,transparent,#ffbcf8,#fff,#ff9ddc,transparent)
}
.jp-gc-grade-rainbow.jp-gc-grade-upgrading .jp-gc-upgrade-pillars i:nth-child(3n+2){
 background:linear-gradient(180deg,transparent,#98d4ff,#fff,#6e91ff,transparent)
}
.jp-gc-grade-rainbow.jp-gc-grade-upgrading .jp-gc-upgrade-pillars i:nth-child(3n){
 background:linear-gradient(180deg,transparent,#a9ffdf,#fff,#9afff0,transparent)
}
/* Unchanged outcome does not trigger a fake triumphant gold/rainbow flash. */
.jp-gc-grade-nochange.jp-gc-p-hold .jp-gc-upgrade-pillars i,
.jp-gc-grade-nochange.jp-gc-p-hold .jp-gc-upgrade-motes i{
 display:none!important
}
.jp-gc-grade-nochange.jp-gc-p-hold .jp-gc-upgrade-cross{
 opacity:.12
}
@media(prefers-reduced-motion:reduce){
 .jp-gc-chance-tease,.jp-gc-upgrade-outcome{display:none!important}
 .jp-gc.jp-gc-p-hold .jp-gc-grade-metamorphosis{animation:none!important;opacity:0!important}
}

/* N/R+ UNIFIED MYSTERY v1.44
 * gather(1.6)+chest(.7)+flight(1.9)+mystery(.95)=5.15 seconds.
 * All rarities share ONE reveal-independent animation and recorded sound
 * score until the cocoon completely withdraws. Keep game logic untouched. */
.jp-gc.jp-gc-mystery-common{
 --gc:#e7f3ff!important;--gc-rgb:224,238,255!important
}
.jp-gc.jp-gc-mystery-common .jp-gc-veil-scene,
.jp-gc.jp-gc-mystery-common .jp-gc-sealed-scene{
 visibility:hidden!important;opacity:0!important;pointer-events:none!important
}
.jp-gc.jp-gc-mystery-common :is(
 .jp-gc-n-flash-stage,.jp-gc-n-anticipation,.jp-gc-n-portal-bridge,
 .jp-gc-n-hinge-depth,.jp-gc-n-chest-front,.jp-gc-n-disappear-burst,
 .jp-gc-n-ejection,.jp-gc-n-launch-trails,.jp-gc-n-reveal-effects,
 .jp-gc-cinema-bursts,.jp-gc-cine-lightning,.jp-gc-vortex,
 .jp-gc-filter-defs,.jp-gc-veil-sweep,.jp-gc-veil-light
){display:none!important}
.jp-gc.jp-gc-mystery-common.jp-gc-p-gather .jp-gc-chest-scene{
 opacity:1!important;
 animation:gc-n-chest-breathe 1.6s ease-in-out both!important
}
/* At the first burst of light the chest DISAPPEARS at fixed size.
   No shrink, perspective retreat or reverse camera push. */
.jp-gc.jp-gc-mystery-common.jp-gc-p-chest .jp-gc-chest-scene{
 animation:gc-v145-chest-covered-by-light .7s linear both!important
}
@keyframes gc-v145-chest-covered-by-light{
 0%,23%{opacity:1;transform:translate(-50%,-50%) scale(.94)}
 31%{opacity:.85;transform:translate(-50%,-50%) scale(.94)}
 42%,100%{opacity:0;transform:translate(-50%,-50%) scale(.94)}
}
.jp-gc.jp-gc-mystery-common.jp-gc-p-chest .jp-gc-chest-lid{
 animation:gc-n-lid-arc .7s cubic-bezier(.08,.72,.27,1) both!important
}
.jp-gc.jp-gc-mystery-common.jp-gc-p-chest .jp-gc-chest-base{
 animation:gc-base-open .7s ease-out both!important
}
.jp-gc.jp-gc-mystery-common.jp-gc-p-chest .jp-gc-chest-open{
 animation:gc-open-art .7s ease-out both!important
}
.jp-gc.jp-gc-mystery-common.jp-gc-p-launch .jp-gc-chest-scene,
.jp-gc.jp-gc-mystery-common.jp-gc-p-mystery .jp-gc-chest-scene{
 display:none!important
}
.jp-gc.jp-gc-mystery-common .jp-gc-chest-filmflare,
.jp-gc.jp-gc-mystery-common .jp-gc-chest-fan,
.jp-gc.jp-gc-mystery-common .jp-gc-chest-dust,
.jp-gc.jp-gc-mystery-common .jp-gc-chest-metalglow,
.jp-gc.jp-gc-mystery-common .jp-gc-chest-halo,
.jp-gc.jp-gc-mystery-common .jp-gc-chest-core,
.jp-gc.jp-gc-mystery-common .jp-gc-chest-bloom,
.jp-gc.jp-gc-mystery-common .jp-gc-lens-flare{
 /* Legacy chest FX had result-dependent brightness and timing. The shared
    MysteryFX canvas replaces them with deterministic optical layers. */
 display:none!important
}
.jp-gc.jp-gc-mystery-common .jp-gc-mystery-fx{
 mix-blend-mode:screen;contain:layout style paint
}
/* Three camera depths: far atmospheric optical layer, tangible chest, then
   the close lens/opaque light cocoon. The two canvases use the same clock. */
.jp-gc.jp-gc-mystery-common .jp-gc-mystery-fx--far{z-index:1}
.jp-gc.jp-gc-mystery-common .jp-gc-chest-scene{z-index:2!important}
.jp-gc.jp-gc-mystery-common .jp-gc-mystery-fx--near{
 z-index:6;mix-blend-mode:normal!important
}
/* Screen blending washed away the white outline on the bright cocoon.
   Normal blending preserves a dark contrast keyline and crisp white glow. */
.jp-gc.jp-gc-mystery-common .jp-gr-skip{z-index:30!important}
/* The chest is already gone before the shared cocoon clears. Do not
   resurrect legacy open-chest footage for one frame on R+ stone rise. */
.jp-gc.jp-gc-p-rise .jp-gc-chest-scene{display:none!important}
/* N face is first visible AFTER the exact same 5.15s common prefix.
   Existing card identity and the 10.0s completion stay unchanged. */
.jp-gc-n-cinematic.jp-gc-p-veil .jp-gc-veil-scene{
 animation:none!important;opacity:1!important
}
.jp-gc-n-cinematic:not(.jp-gc-n-fast).jp-gc-p-veil .jp-gc-card-shadow{
 animation:gc-n-v137-continuous-reveal 4.05s ease-in-out both!important
}
.jp-gc-n-cinematic:not(.jp-gc-n-fast).jp-gc-p-veil .jp-gc-n-flip{
 animation:gc-n-v144-reveal-physical-card 4.05s cubic-bezier(.15,.78,.2,1) both!important
}
@keyframes gc-n-v144-reveal-physical-card{
 0%,7%{transform:rotateY(180deg)}
 15%{transform:rotateY(151deg)}
 29%{transform:rotateY(88deg)}
 38%{transform:rotateY(0deg)}
 100%{transform:rotateY(0deg)}
}
.jp-gc-n-cinematic:not(.jp-gc-n-fast).jp-gc-p-veil .jp-gc-card-shadow::after{
 animation:gc-n-v144-mystery-exit .17s ease-out both!important
}
@keyframes gc-n-v144-mystery-exit{
 0%{opacity:.28;transform:scale(1.05)}
 100%{opacity:0;transform:scale(1.16)}
}
.jp-gc-n-cinematic:not(.jp-gc-n-fast).jp-gc-p-veil :is(
 .jp-gc-n-reveal-pulse,.jp-gc-n-reveal-halo,.jp-gc-n-reveal-beam,
 .jp-gc-n-reveal-effects i){animation-duration:3.1s!important}
.jp-gc-n-cinematic:not(.jp-gc-n-fast).jp-gc-p-veil .jp-gc-n-front::after{
 animation-duration:3.1s!important
}

@media(prefers-reduced-motion:reduce){.jp-gc *{animation:none!important;transition:none!important}.jp-gc-fx{display:none}}
`;function ih({playSound:e,homeUrl:t="./"}){const[a,n]=E.useState(!1),r=typeof window<"u"?new URLSearchParams(window.location.search):new URLSearchParams,i=r.get("n-only")==="1",s=i&&r.get("tempo")==="fast";return E.useEffect(()=>{document.title=i?`Nガチャ・${s?"高速6.5秒":"従来10秒"}プレビュー | スタックポーカー`:"ガチャ演出プレビュー | スタックポーカー"},[i,s]),g.jsxs("main",{className:"jp-gacha-preview-page",children:[g.jsxs("style",{children:[II,rh,sh]}),g.jsxs("header",{children:[g.jsx("span",{children:"STACK POKER"}),g.jsx("h1",{children:i?"Nガチャ演出":"ガチャ演出"}),g.jsx("p",{children:i?s?"参考用・旧6.5秒カット。":"合計10秒。宝箱が開く前のためを少し長く、飛び出してからはキビキビ進む。":"宝箱が開く。石板が割れ、運命の一枚が現れる。"})]}),g.jsxs("div",{className:"jp-gacha-preview-sound",children:[g.jsxs("label",{children:[g.jsx("input",{type:"checkbox","aria-label":"サウンド",checked:a,onChange:o=>{n(o.target.checked),o.target.checked&&e?.("gachaAudioUnlock")}}),g.jsxs("span",{children:["サウンド ",a?"ON":"OFF"]})]}),g.jsx("small",{children:"キュイン音も確認できます"})]}),g.jsx(nh,{sfx:a?e:null}),g.jsxs("footer",{children:[g.jsx("p",{children:"カードの獲得・ガチャ券の消費はありません。"}),t&&g.jsx("a",{href:t,children:"ゲームのタイトルへ"})]})]})}const sh=`
html,body{margin:0;min-height:100%;background:#050912;color:#e7dfce;font-family:system-ui,sans-serif}
.jp-gacha-preview-page{min-height:100dvh;box-sizing:border-box;max-width:500px;margin:0 auto;padding:calc(36px + env(safe-area-inset-top)) 22px calc(28px + env(safe-area-inset-bottom));background:radial-gradient(ellipse at 50% 0,#bda16a13,transparent 55%)}
.jp-gacha-preview-page>header{text-align:center;margin-bottom:30px}.jp-gacha-preview-page>header>span{font-family:Georgia,serif;font-size:12px;letter-spacing:.3em;color:#cdb47d}.jp-gacha-preview-page h1{font-family:'Shippori Mincho B1',serif;font-size:30px;letter-spacing:.12em;font-weight:800;margin:14px 0}.jp-gacha-preview-page>header p{font-family:serif;font-size:13px;letter-spacing:.15em;color:#9e9789}
.jp-gacha-preview-sound{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:15px 0;border-top:1px solid #bea46a30;border-bottom:1px solid #bea46a30;margin-bottom:24px}.jp-gacha-preview-sound label{display:flex;align-items:center;gap:9px;font-size:13px;font-weight:700;cursor:pointer}.jp-gacha-preview-sound input{width:19px;height:19px;accent-color:#d7b574}.jp-gacha-preview-sound small{font-size:10px;color:#8e98ab}
.jp-gacha-preview-page .jp-section{padding:22px 18px;border:1px solid #baa06b33;border-radius:12px;background:linear-gradient(140deg,#131b2b,#080e1b);box-shadow:0 12px 40px #0004}.jp-gacha-preview-page .jp-section h3{font-family:serif;font-size:18px;letter-spacing:.08em;margin:0 0 12px}.jp-gacha-preview-page .jp-section p{font-size:12px;line-height:1.7;margin-bottom:22px;color:#a6b1c4}
.jp-gacha-preview-page button{box-sizing:border-box;border:1px solid #ead49e66;min-height:44px;padding:12px 26px;border-radius:7px;cursor:pointer;background:linear-gradient(#e7ce97,#bc9148 65%,#99712f);color:#251c0e;font-size:14px;font-weight:800;box-shadow:inset 0 1px 0 #ffecbe66,0 4px 16px #0004}.jp-gacha-preview-page .jp-gc-preview>button{display:block;width:100%;margin-top:20px}.jp-gacha-preview-page .jp-gr-skip{background:#05080fcc;color:#e7dfce;font-size:11px;min-height:36px;padding:8px 14px;border-radius:20px}.jp-gacha-preview-page select{min-height:45px;box-sizing:border-box}
.jp-gacha-preview-page footer{text-align:center;margin-top:24px}.jp-gacha-preview-page footer p{font-size:11px;color:#8993a8;line-height:1.8}.jp-gacha-preview-page footer a{display:inline-block;font-size:12px;color:#cbb27a;padding:14px;text-underline-offset:4px}
.jp-gacha-preview-compare{display:flex;gap:8px;margin:0 0 16px}
.jp-gacha-preview-compare>a{flex:1;text-align:center;box-sizing:border-box;padding:12px 8px;
 border:1px solid #bea46a66;border-radius:9px;text-decoration:none;font-size:12px;
 color:#e3d8c0;background:#111a2a}
.jp-gacha-preview-compare>a[aria-current="page"]{background:#cda76c;color:#1b1820;font-weight:800}
.jp-gacha-preview-page :focus-visible{outline:2px solid #ffe0a0;outline-offset:4px}
`,ch="/-stack-poker-test-web/gacha-chest-v1/assets/bonus-absorb-BDKUPiTg.mp3",oh="/-stack-poker-test-web/gacha-chest-v1/assets/bonus-card-display-BCiUi8hU.mp3",lh="/-stack-poker-test-web/gacha-chest-v1/assets/bonus-charge-DAd07zpE.mp3",ph="/-stack-poker-test-web/gacha-chest-v1/assets/bonus-flight-DPXL6eB7.mp3",gh="/-stack-poker-test-web/gacha-chest-v1/assets/bonus-magic-Ngj8tRrL.mp3",dh="/-stack-poker-test-web/gacha-chest-v1/assets/bonus-metallic-9rAyYxNE.mp3",uh="/-stack-poker-test-web/gacha-chest-v1/assets/bonus-shakiin-BtMU8RR_.mp3",mh="/-stack-poker-test-web/gacha-chest-v1/assets/bonus-sparkle-B6J1HT62.mp3";function fh(e,t=globalThis){let a,n,r=!1;const i=new Map,s=new Map,o=new Set,c=new WeakMap,p=I=>{if(o.delete(I)){try{I.stop()}catch{}try{I.disconnect()}catch{}try{c.get(I)?.disconnect()}catch{}}},j=()=>{for(const I of[...o])p(I)},b=()=>{if(r)throw new Error("disposed");const I=t.AudioContext||t.webkitAudioContext;if(!I)throw new Error("Web Audio unavailable");if(!a&&(a=new I,n=a.destination,a.createDynamicsCompressor)){const v=a.createDynamicsCompressor();v.threshold.value=-8,v.knee.value=8,v.ratio.value=2.5,v.attack.value=.004,v.release.value=.16,v.connect(a.destination),n=v}return a},l=I=>{if(i.has(I))return Promise.resolve();if(!(I in e))return Promise.reject(new Error("unknown audio: "+I));if(s.has(I))return s.get(I);const v=Promise.resolve().then(async()=>{const h=await t.fetch(e[I]);if(!h.ok)throw new Error("audio load: "+I);const w=await a.decodeAudioData(await h.arrayBuffer());r||i.set(I,w)}).catch(h=>{throw s.delete(I),h});return s.set(I,v),v};return{prepare(I){try{const v=b(),h=Promise.resolve(v.resume());return I?Promise.all([h,l(I)]).then(()=>{}):Promise.all([h,Promise.allSettled(Object.keys(e).map(l))]).then(()=>{})}catch(v){return Promise.reject(v)}},resume(){return a?.resume()},play(I,v=1){if(r||!a||!i.has(I))return;const h=a.createBufferSource();h.buffer=i.get(I);const w=v<1&&a.createGain?a.createGain():null;return w?(w.gain.value=Math.max(0,Math.min(1,v)),h.connect(w),w.connect(n),c.set(h,w)):h.connect(n),o.add(h),h.onended=()=>{o.delete(h);try{h.disconnect()}catch{}try{w?.disconnect()}catch{}},h.start(),()=>p(h)},stop:j,dispose(){r=!0,j(),a&&Promise.resolve(a.close()).catch(()=>{}),s.clear(),i.clear()}}}const Ih="/-stack-poker-test-web/gacha-chest-v1/assets/chest-open-DlkFbepN.mp3",hh="/-stack-poker-test-web/gacha-chest-v1/assets/metal-rise-DH6bbR6T.mp3",bh="/-stack-poker-test-web/gacha-chest-v1/assets/tablet-break-D4w0X-Sz.mp3",jh="/-stack-poker-test-web/gacha-chest-v1/assets/card-reveal-BHMGj60R.mp3",Ps=Object.freeze({gachaOpen:"open",gachaRise:"rise",gachaThunder:"break",gachaThunderBig:"break",gachaVeil:"card"}),ht=Object.assign({"./assets/gacha/audio/bonus-absorb.mp3":ch,"./assets/gacha/audio/bonus-card-display.mp3":oh,"./assets/gacha/audio/bonus-charge.mp3":lh,"./assets/gacha/audio/bonus-flight.mp3":ph,"./assets/gacha/audio/bonus-magic.mp3":gh,"./assets/gacha/audio/bonus-metallic.mp3":dh,"./assets/gacha/audio/bonus-shakiin.mp3":uh,"./assets/gacha/audio/bonus-sparkle.mp3":mh}),qo={charge:ht["./assets/gacha/audio/bonus-charge.mp3"],sparkle:ht["./assets/gacha/audio/bonus-sparkle.mp3"],shakiin:ht["./assets/gacha/audio/bonus-shakiin.mp3"],flight:ht["./assets/gacha/audio/bonus-flight.mp3"],cardDisplay:ht["./assets/gacha/audio/bonus-card-display.mp3"],metallic:ht["./assets/gacha/audio/bonus-metallic.mp3"],magic:ht["./assets/gacha/audio/bonus-magic.mp3"],absorb:ht["./assets/gacha/audio/bonus-absorb.mp3"]},vp=Object.freeze({gachaBonusCharge:"charge",gachaBonusSparkle:"sparkle",gachaBonusShakiin:"shakiin",gachaBonusFlight:"flight",gachaBonusCardDisplay:"cardDisplay",gachaBonusMetallic:"metallic",gachaBonusMagic:"magic",gachaBonusAbsorb:"absorb"}),vh=Object.freeze({charge:.72,sparkle:.85,shakiin:.7,flight:.8,cardDisplay:.78,metallic:.85,magic:.75,absorb:.8}),Kn={gachaBonusCharge:"gachaCharge"};function yh(e=()=>{},t=globalThis){const a=fh({open:Ih,rise:hh,break:bh,card:jh,...Object.fromEntries(Object.entries(qo).filter(([,r])=>!!r))},t),n=()=>a.prepare();return{prepare:n,play(r){if(r==="gachaAudioUnlock"){n().catch(()=>{});return}const i=vp[r];if(i&&!qo[i])return Kn[r]?e(Kn[r]):void 0;const s=Ps[r]||i;if(!s)return e(r);let o=!1,c;const p=Date.now();return a.prepare(s).then(()=>{!o&&Date.now()-p<400&&(c=a.play(s,i?vh[i]:1))}).catch(()=>{!o&&Date.now()-p<400&&(Kn[r]||Ps[r])&&(c=e(Kn[r]||r))}),()=>{o=!0;try{c?.()}catch{}}},stop:()=>a.stop(),dispose:()=>a.dispose()}}function La(e,t,a,n,r=.05){const i=e.currentTime+.005,s=e.createOscillator(),o=e.createGain();return s.type="sine",s.frequency.setValueAtTime(t,i),s.frequency.exponentialRampToValueAtTime(a,i+Math.min(n,.85)),o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(r,i+.025),o.gain.exponentialRampToValueAtTime(1e-4,i+n),s.connect(o),o.connect(e.destination),s.start(i),s.stop(i+n+.02),()=>{try{const c=e.currentTime;o.gain.cancelScheduledValues(c),o.gain.setValueAtTime(Math.max(1e-4,o.gain.value),c),o.gain.exponentialRampToValueAtTime(1e-4,c+.035),s.stop(c+.04)}catch{}}}function el(e,t){if(t==="gachaCharge"||t==="gachaChest")return La(e,220,660,.5,.055);if(t==="gachaHold")return La(e,520,560,.24,.05);if(t==="gachaLaunch")return La(e,180,740,.45,.035);if(t!=="gachaKyuin")return;const a=La(e,950,3200,.98,.035),n=La(e,957,3207,1.04,.035);return()=>{a(),n()}}function wh(){const e=E.useRef(null),t=E.useRef(null);E.useEffect(()=>()=>{e.current?.dispose(),e.current=null,t.current?.close().catch(()=>{}),t.current=null},[]);const a=n=>{try{const r=window.AudioContext||window.webkitAudioContext;return r&&!t.current&&(t.current=new r),t.current?.resume().catch(()=>{}),n==="gachaAudioUnlock"||Object.prototype.hasOwnProperty.call(Ps,n)||Object.prototype.hasOwnProperty.call(vp,n)?(e.current||=yh(i=>t.current?el(t.current,i):void 0),e.current.play(n)):t.current?el(t.current,n):void 0}catch{return}};return g.jsx(ih,{playSound:a,homeUrl:null})}up(document.getElementById("root")).render(g.jsx(wh,{}));
