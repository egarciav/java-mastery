(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const x of p)if(x.type==="childList")for(const g of x.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function d(p){const x={};return p.integrity&&(x.integrity=p.integrity),p.referrerPolicy&&(x.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?x.credentials="include":p.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function u(p){if(p.ep)return;p.ep=!0;const x=d(p);fetch(p.href,x)}})();var _o={exports:{}},kr={};var up;function Vg(){if(up)return kr;up=1;var l=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function d(u,p,x){var g=null;if(x!==void 0&&(g=""+x),p.key!==void 0&&(g=""+p.key),"key"in p){x={};for(var T in p)T!=="key"&&(x[T]=p[T])}else x=p;return p=x.ref,{$$typeof:l,type:u,key:g,ref:p!==void 0?p:null,props:x}}return kr.Fragment=c,kr.jsx=d,kr.jsxs=d,kr}var dp;function Gg(){return dp||(dp=1,_o.exports=Vg()),_o.exports}var t=Gg(),ko={exports:{}},ce={};var mp;function Yg(){if(mp)return ce;mp=1;var l=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),g=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),J=Symbol.iterator;function V(j){return j===null||typeof j!="object"?null:(j=J&&j[J]||j["@@iterator"],typeof j=="function"?j:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,E={};function B(j,P,Y){this.props=j,this.context=P,this.refs=E,this.updater=Y||R}B.prototype.isReactComponent={},B.prototype.setState=function(j,P){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,P,"setState")},B.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function z(){}z.prototype=B.prototype;function I(j,P,Y){this.props=j,this.context=P,this.refs=E,this.updater=Y||R}var $=I.prototype=new z;$.constructor=I,N($,B.prototype),$.isPureReactComponent=!0;var ae=Array.isArray;function pe(){}var X={H:null,A:null,T:null,S:null},fe=Object.prototype.hasOwnProperty;function Ee(j,P,Y){var Q=Y.ref;return{$$typeof:l,type:j,key:P,ref:Q!==void 0?Q:null,props:Y}}function Ze(j,P){return Ee(j.type,P,j.props)}function He(j){return typeof j=="object"&&j!==null&&j.$$typeof===l}function Ue(j){var P={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(Y){return P[Y]})}var xa=/\/+/g;function Re(j,P){return typeof j=="object"&&j!==null&&j.key!=null?Ue(""+j.key):P.toString(36)}function Ce(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(pe,pe):(j.status="pending",j.then(function(P){j.status==="pending"&&(j.status="fulfilled",j.value=P)},function(P){j.status==="pending"&&(j.status="rejected",j.reason=P)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function U(j,P,Y,Q,le){var de=typeof j;(de==="undefined"||de==="boolean")&&(j=null);var ve=!1;if(j===null)ve=!0;else switch(de){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(j.$$typeof){case l:case c:ve=!0;break;case A:return ve=j._init,U(ve(j._payload),P,Y,Q,le)}}if(ve)return le=le(j),ve=Q===""?"."+Re(j,0):Q,ae(le)?(Y="",ve!=null&&(Y=ve.replace(xa,"$&/")+"/"),U(le,P,Y,"",function(Gn){return Gn})):le!=null&&(He(le)&&(le=Ze(le,Y+(le.key==null||j&&j.key===le.key?"":(""+le.key).replace(xa,"$&/")+"/")+ve)),P.push(le)),1;ve=0;var ea=Q===""?".":Q+":";if(ae(j))for(var qe=0;qe<j.length;qe++)Q=j[qe],de=ea+Re(Q,qe),ve+=U(Q,P,Y,de,le);else if(qe=V(j),typeof qe=="function")for(j=qe.call(j),qe=0;!(Q=j.next()).done;)Q=Q.value,de=ea+Re(Q,qe++),ve+=U(Q,P,Y,de,le);else if(de==="object"){if(typeof j.then=="function")return U(Ce(j),P,Y,Q,le);throw P=String(j),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return ve}function G(j,P,Y){if(j==null)return j;var Q=[],le=0;return U(j,Q,"","",function(de){return P.call(Y,de,le++)}),Q}function ee(j){if(j._status===-1){var P=j._result;P=P(),P.then(function(Y){(j._status===0||j._status===-1)&&(j._status=1,j._result=Y)},function(Y){(j._status===0||j._status===-1)&&(j._status=2,j._result=Y)}),j._status===-1&&(j._status=0,j._result=P)}if(j._status===1)return j._result.default;throw j._result}var Ae=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},he={map:G,forEach:function(j,P,Y){G(j,function(){P.apply(this,arguments)},Y)},count:function(j){var P=0;return G(j,function(){P++}),P},toArray:function(j){return G(j,function(P){return P})||[]},only:function(j){if(!He(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return ce.Activity=y,ce.Children=he,ce.Component=B,ce.Fragment=d,ce.Profiler=p,ce.PureComponent=I,ce.StrictMode=u,ce.Suspense=h,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ce.__COMPILER_RUNTIME={__proto__:null,c:function(j){return X.H.useMemoCache(j)}},ce.cache=function(j){return function(){return j.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(j,P,Y){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var Q=N({},j.props),le=j.key;if(P!=null)for(de in P.key!==void 0&&(le=""+P.key),P)!fe.call(P,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&P.ref===void 0||(Q[de]=P[de]);var de=arguments.length-2;if(de===1)Q.children=Y;else if(1<de){for(var ve=Array(de),ea=0;ea<de;ea++)ve[ea]=arguments[ea+2];Q.children=ve}return Ee(j.type,le,Q)},ce.createContext=function(j){return j={$$typeof:g,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:x,_context:j},j},ce.createElement=function(j,P,Y){var Q,le={},de=null;if(P!=null)for(Q in P.key!==void 0&&(de=""+P.key),P)fe.call(P,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(le[Q]=P[Q]);var ve=arguments.length-2;if(ve===1)le.children=Y;else if(1<ve){for(var ea=Array(ve),qe=0;qe<ve;qe++)ea[qe]=arguments[qe+2];le.children=ea}if(j&&j.defaultProps)for(Q in ve=j.defaultProps,ve)le[Q]===void 0&&(le[Q]=ve[Q]);return Ee(j,de,le)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(j){return{$$typeof:T,render:j}},ce.isValidElement=He,ce.lazy=function(j){return{$$typeof:A,_payload:{_status:-1,_result:j},_init:ee}},ce.memo=function(j,P){return{$$typeof:f,type:j,compare:P===void 0?null:P}},ce.startTransition=function(j){var P=X.T,Y={};X.T=Y;try{var Q=j(),le=X.S;le!==null&&le(Y,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(pe,Ae)}catch(de){Ae(de)}finally{P!==null&&Y.types!==null&&(P.types=Y.types),X.T=P}},ce.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ce.use=function(j){return X.H.use(j)},ce.useActionState=function(j,P,Y){return X.H.useActionState(j,P,Y)},ce.useCallback=function(j,P){return X.H.useCallback(j,P)},ce.useContext=function(j){return X.H.useContext(j)},ce.useDebugValue=function(){},ce.useDeferredValue=function(j,P){return X.H.useDeferredValue(j,P)},ce.useEffect=function(j,P){return X.H.useEffect(j,P)},ce.useEffectEvent=function(j){return X.H.useEffectEvent(j)},ce.useId=function(){return X.H.useId()},ce.useImperativeHandle=function(j,P,Y){return X.H.useImperativeHandle(j,P,Y)},ce.useInsertionEffect=function(j,P){return X.H.useInsertionEffect(j,P)},ce.useLayoutEffect=function(j,P){return X.H.useLayoutEffect(j,P)},ce.useMemo=function(j,P){return X.H.useMemo(j,P)},ce.useOptimistic=function(j,P){return X.H.useOptimistic(j,P)},ce.useReducer=function(j,P,Y){return X.H.useReducer(j,P,Y)},ce.useRef=function(j){return X.H.useRef(j)},ce.useState=function(j){return X.H.useState(j)},ce.useSyncExternalStore=function(j,P,Y){return X.H.useSyncExternalStore(j,P,Y)},ce.useTransition=function(){return X.H.useTransition()},ce.version="19.2.4",ce}var pp;function $o(){return pp||(pp=1,ko.exports=Yg()),ko.exports}var L=$o(),Po={exports:{}},Pr={},Ho={exports:{}},Io={};var fp;function Qg(){return fp||(fp=1,(function(l){function c(U,G){var ee=U.length;U.push(G);e:for(;0<ee;){var Ae=ee-1>>>1,he=U[Ae];if(0<p(he,G))U[Ae]=G,U[ee]=he,ee=Ae;else break e}}function d(U){return U.length===0?null:U[0]}function u(U){if(U.length===0)return null;var G=U[0],ee=U.pop();if(ee!==G){U[0]=ee;e:for(var Ae=0,he=U.length,j=he>>>1;Ae<j;){var P=2*(Ae+1)-1,Y=U[P],Q=P+1,le=U[Q];if(0>p(Y,ee))Q<he&&0>p(le,Y)?(U[Ae]=le,U[Q]=ee,Ae=Q):(U[Ae]=Y,U[P]=ee,Ae=P);else if(Q<he&&0>p(le,ee))U[Ae]=le,U[Q]=ee,Ae=Q;else break e}}return G}function p(U,G){var ee=U.sortIndex-G.sortIndex;return ee!==0?ee:U.id-G.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;l.unstable_now=function(){return x.now()}}else{var g=Date,T=g.now();l.unstable_now=function(){return g.now()-T}}var h=[],f=[],A=1,y=null,J=3,V=!1,R=!1,N=!1,E=!1,B=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function $(U){for(var G=d(f);G!==null;){if(G.callback===null)u(f);else if(G.startTime<=U)u(f),G.sortIndex=G.expirationTime,c(h,G);else break;G=d(f)}}function ae(U){if(N=!1,$(U),!R)if(d(h)!==null)R=!0,pe||(pe=!0,Ue());else{var G=d(f);G!==null&&Ce(ae,G.startTime-U)}}var pe=!1,X=-1,fe=5,Ee=-1;function Ze(){return E?!0:!(l.unstable_now()-Ee<fe)}function He(){if(E=!1,pe){var U=l.unstable_now();Ee=U;var G=!0;try{e:{R=!1,N&&(N=!1,z(X),X=-1),V=!0;var ee=J;try{a:{for($(U),y=d(h);y!==null&&!(y.expirationTime>U&&Ze());){var Ae=y.callback;if(typeof Ae=="function"){y.callback=null,J=y.priorityLevel;var he=Ae(y.expirationTime<=U);if(U=l.unstable_now(),typeof he=="function"){y.callback=he,$(U),G=!0;break a}y===d(h)&&u(h),$(U)}else u(h);y=d(h)}if(y!==null)G=!0;else{var j=d(f);j!==null&&Ce(ae,j.startTime-U),G=!1}}break e}finally{y=null,J=ee,V=!1}G=void 0}}finally{G?Ue():pe=!1}}}var Ue;if(typeof I=="function")Ue=function(){I(He)};else if(typeof MessageChannel<"u"){var xa=new MessageChannel,Re=xa.port2;xa.port1.onmessage=He,Ue=function(){Re.postMessage(null)}}else Ue=function(){B(He,0)};function Ce(U,G){X=B(function(){U(l.unstable_now())},G)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(U){U.callback=null},l.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<U?Math.floor(1e3/U):5},l.unstable_getCurrentPriorityLevel=function(){return J},l.unstable_next=function(U){switch(J){case 1:case 2:case 3:var G=3;break;default:G=J}var ee=J;J=G;try{return U()}finally{J=ee}},l.unstable_requestPaint=function(){E=!0},l.unstable_runWithPriority=function(U,G){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ee=J;J=U;try{return G()}finally{J=ee}},l.unstable_scheduleCallback=function(U,G,ee){var Ae=l.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Ae+ee:Ae):ee=Ae,U){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=ee+he,U={id:A++,callback:G,priorityLevel:U,startTime:ee,expirationTime:he,sortIndex:-1},ee>Ae?(U.sortIndex=ee,c(f,U),d(h)===null&&U===d(f)&&(N?(z(X),X=-1):N=!0,Ce(ae,ee-Ae))):(U.sortIndex=he,c(h,U),R||V||(R=!0,pe||(pe=!0,Ue()))),U},l.unstable_shouldYield=Ze,l.unstable_wrapCallback=function(U){var G=J;return function(){var ee=J;J=G;try{return U.apply(this,arguments)}finally{J=ee}}}})(Io)),Io}var xp;function Xg(){return xp||(xp=1,Ho.exports=Qg()),Ho.exports}var Jo={exports:{}},sa={};var gp;function Zg(){if(gp)return sa;gp=1;var l=$o();function c(h){var f="https://react.dev/errors/"+h;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)f+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+h+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(c(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},p=Symbol.for("react.portal");function x(h,f,A){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:y==null?null:""+y,children:h,containerInfo:f,implementation:A}}var g=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(h,f){if(h==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return sa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,sa.createPortal=function(h,f){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(c(299));return x(h,f,null,A)},sa.flushSync=function(h){var f=g.T,A=u.p;try{if(g.T=null,u.p=2,h)return h()}finally{g.T=f,u.p=A,u.d.f()}},sa.preconnect=function(h,f){typeof h=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,u.d.C(h,f))},sa.prefetchDNS=function(h){typeof h=="string"&&u.d.D(h)},sa.preinit=function(h,f){if(typeof h=="string"&&f&&typeof f.as=="string"){var A=f.as,y=T(A,f.crossOrigin),J=typeof f.integrity=="string"?f.integrity:void 0,V=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;A==="style"?u.d.S(h,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:y,integrity:J,fetchPriority:V}):A==="script"&&u.d.X(h,{crossOrigin:y,integrity:J,fetchPriority:V,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},sa.preinitModule=function(h,f){if(typeof h=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var A=T(f.as,f.crossOrigin);u.d.M(h,{crossOrigin:A,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&u.d.M(h)},sa.preload=function(h,f){if(typeof h=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var A=f.as,y=T(A,f.crossOrigin);u.d.L(h,A,{crossOrigin:y,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},sa.preloadModule=function(h,f){if(typeof h=="string")if(f){var A=T(f.as,f.crossOrigin);u.d.m(h,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:A,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else u.d.m(h)},sa.requestFormReset=function(h){u.d.r(h)},sa.unstable_batchedUpdates=function(h,f){return h(f)},sa.useFormState=function(h,f,A){return g.H.useFormState(h,f,A)},sa.useFormStatus=function(){return g.H.useHostTransitionStatus()},sa.version="19.2.4",sa}var hp;function Kg(){if(hp)return Jo.exports;hp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),Jo.exports=Zg(),Jo.exports}var bp;function $g(){if(bp)return Pr;bp=1;var l=Xg(),c=$o(),d=Kg();function u(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function x(e){var a=e,n=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(n=a.return),e=a.return;while(e)}return a.tag===3?n:null}function g(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function T(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function h(e){if(x(e)!==e)throw Error(u(188))}function f(e){var a=e.alternate;if(!a){if(a=x(e),a===null)throw Error(u(188));return a!==e?null:e}for(var n=e,r=a;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return h(i),e;if(s===r)return h(i),a;s=s.sibling}throw Error(u(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,m=i.child;m;){if(m===n){o=!0,n=i,r=s;break}if(m===r){o=!0,r=i,n=s;break}m=m.sibling}if(!o){for(m=s.child;m;){if(m===n){o=!0,n=s,r=i;break}if(m===r){o=!0,r=s,n=i;break}m=m.sibling}if(!o)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:a}function A(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=A(e),a!==null)return a;e=e.sibling}return null}var y=Object.assign,J=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),I=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),Ze=Symbol.for("react.memo_cache_sentinel"),He=Symbol.iterator;function Ue(e){return e===null||typeof e!="object"?null:(e=He&&e[He]||e["@@iterator"],typeof e=="function"?e:null)}var xa=Symbol.for("react.client.reference");function Re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case B:return"Profiler";case E:return"StrictMode";case ae:return"Suspense";case pe:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case I:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case $:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return a=e.displayName||null,a!==null?a:Re(e.type)||"Memo";case fe:a=e._payload,e=e._init;try{return Re(e(a))}catch{}}return null}var Ce=Array.isArray,U=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},Ae=[],he=-1;function j(e){return{current:e}}function P(e){0>he||(e.current=Ae[he],Ae[he]=null,he--)}function Y(e,a){he++,Ae[he]=e.current,e.current=a}var Q=j(null),le=j(null),de=j(null),ve=j(null);function ea(e,a){switch(Y(de,a),Y(le,e),Y(Q,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Lm(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Lm(a),e=Um(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(Q),Y(Q,e)}function qe(){P(Q),P(le),P(de)}function Gn(e){e.memoizedState!==null&&Y(ve,e);var a=Q.current,n=Um(a,e.type);a!==n&&(Y(le,e),Y(Q,n))}function Gr(e){le.current===e&&(P(Q),P(le)),ve.current===e&&(P(ve),zr._currentValue=ee)}var ys,cc;function Pt(e){if(ys===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);ys=a&&a[1]||"",cc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ys+e+cc}var vs=!1;function js(e,a){if(!e||vs)return"";vs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(a){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(w){var D=w}Reflect.construct(e,[],H)}else{try{H.call()}catch(w){D=w}e.call(H.prototype)}}else{try{throw Error()}catch(w){D=w}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(w){if(w&&D&&typeof w.stack=="string")return[w.stack,D.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=r.DetermineComponentFrameRoot(),o=s[0],m=s[1];if(o&&m){var b=o.split(`
`),O=m.split(`
`);for(i=r=0;r<b.length&&!b[r].includes("DetermineComponentFrameRoot");)r++;for(;i<O.length&&!O[i].includes("DetermineComponentFrameRoot");)i++;if(r===b.length||i===O.length)for(r=b.length-1,i=O.length-1;1<=r&&0<=i&&b[r]!==O[i];)i--;for(;1<=r&&0<=i;r--,i--)if(b[r]!==O[i]){if(r!==1||i!==1)do if(r--,i--,0>i||b[r]!==O[i]){var q=`
`+b[r].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=r&&0<=i);break}}}finally{vs=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Pt(n):""}function Sf(e,a){switch(e.tag){case 26:case 27:case 5:return Pt(e.type);case 16:return Pt("Lazy");case 13:return e.child!==a&&a!==null?Pt("Suspense Fallback"):Pt("Suspense");case 19:return Pt("SuspenseList");case 0:case 15:return js(e.type,!1);case 11:return js(e.type.render,!1);case 1:return js(e.type,!0);case 31:return Pt("Activity");default:return""}}function uc(e){try{var a="",n=null;do a+=Sf(e,n),n=e,e=e.return;while(e);return a}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ss=Object.prototype.hasOwnProperty,Ns=l.unstable_scheduleCallback,Es=l.unstable_cancelCallback,Nf=l.unstable_shouldYield,Ef=l.unstable_requestPaint,ga=l.unstable_now,Cf=l.unstable_getCurrentPriorityLevel,dc=l.unstable_ImmediatePriority,mc=l.unstable_UserBlockingPriority,Yr=l.unstable_NormalPriority,Tf=l.unstable_LowPriority,pc=l.unstable_IdlePriority,Af=l.log,Rf=l.unstable_setDisableYieldValue,Yn=null,ha=null;function xt(e){if(typeof Af=="function"&&Rf(e),ha&&typeof ha.setStrictMode=="function")try{ha.setStrictMode(Yn,e)}catch{}}var ba=Math.clz32?Math.clz32:Df,Mf=Math.log,Of=Math.LN2;function Df(e){return e>>>=0,e===0?32:31-(Mf(e)/Of|0)|0}var Qr=256,Xr=262144,Zr=4194304;function Ht(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Kr(e,a,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,s=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var m=r&134217727;return m!==0?(r=m&~s,r!==0?i=Ht(r):(o&=m,o!==0?i=Ht(o):n||(n=m&~e,n!==0&&(i=Ht(n))))):(m=r&~s,m!==0?i=Ht(m):o!==0?i=Ht(o):n||(n=r&~e,n!==0&&(i=Ht(n)))),i===0?0:a!==0&&a!==i&&(a&s)===0&&(s=i&-i,n=a&-a,s>=n||s===32&&(n&4194048)!==0)?a:i}function Qn(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function wf(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fc(){var e=Zr;return Zr<<=1,(Zr&62914560)===0&&(Zr=4194304),e}function Cs(e){for(var a=[],n=0;31>n;n++)a.push(e);return a}function Xn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lf(e,a,n,r,i,s){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,b=e.expirationTimes,O=e.hiddenUpdates;for(n=o&~n;0<n;){var q=31-ba(n),H=1<<q;m[q]=0,b[q]=-1;var D=O[q];if(D!==null)for(O[q]=null,q=0;q<D.length;q++){var w=D[q];w!==null&&(w.lane&=-536870913)}n&=~H}r!==0&&xc(e,r,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(o&~a))}function xc(e,a,n){e.pendingLanes|=a,e.suspendedLanes&=~a;var r=31-ba(a);e.entangledLanes|=a,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function gc(e,a){var n=e.entangledLanes|=a;for(e=e.entanglements;n;){var r=31-ba(n),i=1<<r;i&a|e[r]&a&&(e[r]|=a),n&=~i}}function hc(e,a){var n=a&-a;return n=(n&42)!==0?1:Ts(n),(n&(e.suspendedLanes|a))!==0?0:n}function Ts(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function As(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function bc(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:np(e.type))}function yc(e,a){var n=G.p;try{return G.p=e,a()}finally{G.p=n}}var gt=Math.random().toString(36).slice(2),aa="__reactFiber$"+gt,oa="__reactProps$"+gt,sn="__reactContainer$"+gt,Rs="__reactEvents$"+gt,Uf="__reactListeners$"+gt,zf="__reactHandles$"+gt,vc="__reactResources$"+gt,Zn="__reactMarker$"+gt;function Ms(e){delete e[aa],delete e[oa],delete e[Rs],delete e[Uf],delete e[zf]}function ln(e){var a=e[aa];if(a)return a;for(var n=e.parentNode;n;){if(a=n[sn]||n[aa]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(e=Hm(e);e!==null;){if(n=e[aa])return n;e=Hm(e)}return a}e=n,n=e.parentNode}return null}function on(e){if(e=e[aa]||e[sn]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Kn(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(u(33))}function cn(e){var a=e[vc];return a||(a=e[vc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function $e(e){e[Zn]=!0}var jc=new Set,Sc={};function It(e,a){un(e,a),un(e+"Capture",a)}function un(e,a){for(Sc[e]=a,e=0;e<a.length;e++)jc.add(a[e])}var qf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nc={},Ec={};function Bf(e){return Ss.call(Ec,e)?!0:Ss.call(Nc,e)?!1:qf.test(e)?Ec[e]=!0:(Nc[e]=!0,!1)}function $r(e,a,n){if(Bf(a))if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var r=a.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+n)}}function Wr(e,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+n)}}function Xa(e,a,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(a,n,""+r)}}function Aa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cc(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function _f(e,a,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,s.call(this,o)}}),Object.defineProperty(e,a,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Os(e){if(!e._valueTracker){var a=Cc(e)?"checked":"value";e._valueTracker=_f(e,a,""+e[a])}}function Tc(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var n=a.getValue(),r="";return e&&(r=Cc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(a.setValue(e),!0):!1}function ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var kf=/[\n"\\]/g;function Ra(e){return e.replace(kf,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Ds(e,a,n,r,i,s,o,m){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),a!=null?o==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Aa(a)):e.value!==""+Aa(a)&&(e.value=""+Aa(a)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),a!=null?ws(e,o,Aa(a)):n!=null?ws(e,o,Aa(n)):r!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Aa(m):e.removeAttribute("name")}function Ac(e,a,n,r,i,s,o,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),a!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||a!=null)){Os(e);return}n=n!=null?""+Aa(n):"",a=a!=null?""+Aa(a):n,m||a===e.value||(e.value=a),e.defaultValue=a}r=r??i,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=m?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Os(e)}function ws(e,a,n){a==="number"&&ei(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function dn(e,a,n,r){if(e=e.options,a){a={};for(var i=0;i<n.length;i++)a["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=a.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Aa(n),a=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}a!==null||e[i].disabled||(a=e[i])}a!==null&&(a.selected=!0)}}function Rc(e,a,n){if(a!=null&&(a=""+Aa(a),a!==e.value&&(e.value=a),n==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=n!=null?""+Aa(n):""}function Mc(e,a,n,r){if(a==null){if(r!=null){if(n!=null)throw Error(u(92));if(Ce(r)){if(1<r.length)throw Error(u(93));r=r[0]}n=r}n==null&&(n=""),a=n}n=Aa(a),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r),Os(e)}function mn(e,a){if(a){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=a;return}}e.textContent=a}var Pf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Oc(e,a,n){var r=a.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":r?e.setProperty(a,n):typeof n!="number"||n===0||Pf.has(a)?a==="float"?e.cssFloat=n:e[a]=(""+n).trim():e[a]=n+"px"}function Dc(e,a,n){if(a!=null&&typeof a!="object")throw Error(u(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||a!=null&&a.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var i in a)r=a[i],a.hasOwnProperty(i)&&n[i]!==r&&Oc(e,i,r)}else for(var s in a)a.hasOwnProperty(s)&&Oc(e,s,a[s])}function Ls(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),If=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ai(e){return If.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Za(){}var Us=null;function zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,fn=null;function wc(e){var a=on(e);if(a&&(e=a.stateNode)){var n=e[oa]||null;e:switch(e=a.stateNode,a.type){case"input":if(Ds(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),a=n.name,n.type==="radio"&&a!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ra(""+a)+'"][type="radio"]'),a=0;a<n.length;a++){var r=n[a];if(r!==e&&r.form===e.form){var i=r[oa]||null;if(!i)throw Error(u(90));Ds(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<n.length;a++)r=n[a],r.form===e.form&&Tc(r)}break e;case"textarea":Rc(e,n.value,n.defaultValue);break e;case"select":a=n.value,a!=null&&dn(e,!!n.multiple,a,!1)}}}var qs=!1;function Lc(e,a,n){if(qs)return e(a,n);qs=!0;try{var r=e(a);return r}finally{if(qs=!1,(pn!==null||fn!==null)&&(Ii(),pn&&(a=pn,e=fn,fn=pn=null,wc(a),e)))for(a=0;a<e.length;a++)wc(e[a])}}function $n(e,a){var n=e.stateNode;if(n===null)return null;var r=n[oa]||null;if(r===null)return null;n=r[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,a,typeof n));return n}var Ka=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bs=!1;if(Ka)try{var Wn={};Object.defineProperty(Wn,"passive",{get:function(){Bs=!0}}),window.addEventListener("test",Wn,Wn),window.removeEventListener("test",Wn,Wn)}catch{Bs=!1}var ht=null,_s=null,ti=null;function Uc(){if(ti)return ti;var e,a=_s,n=a.length,r,i="value"in ht?ht.value:ht.textContent,s=i.length;for(e=0;e<n&&a[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&a[n-r]===i[s-r];r++);return ti=i.slice(e,1<r?1-r:void 0)}function ni(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function ri(){return!0}function zc(){return!1}function ca(e){function a(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ri:zc,this.isPropagationStopped=zc,this}return y(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ri)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ri)},persist:function(){},isPersistent:ri}),a}var Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ii=ca(Jt),er=y({},Jt,{view:0,detail:0}),Jf=ca(er),ks,Ps,ar,si=y({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(ks=e.screenX-ar.screenX,Ps=e.screenY-ar.screenY):Ps=ks=0,ar=e),ks)},movementY:function(e){return"movementY"in e?e.movementY:Ps}}),qc=ca(si),Ff=y({},si,{dataTransfer:0}),Vf=ca(Ff),Gf=y({},er,{relatedTarget:0}),Hs=ca(Gf),Yf=y({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0}),Qf=ca(Yf),Xf=y({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zf=ca(Xf),Kf=y({},Jt,{data:0}),Bc=ca(Kf),$f={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ax(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=ex[e])?!!a[e]:!1}function Is(){return ax}var tx=y({},er,{key:function(e){if(e.key){var a=$f[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Is,charCode:function(e){return e.type==="keypress"?ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nx=ca(tx),rx=y({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_c=ca(rx),ix=y({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Is}),sx=ca(ix),lx=y({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),ox=ca(lx),cx=y({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=ca(cx),dx=y({},Jt,{newState:0,oldState:0}),mx=ca(dx),px=[9,13,27,32],Js=Ka&&"CompositionEvent"in window,tr=null;Ka&&"documentMode"in document&&(tr=document.documentMode);var fx=Ka&&"TextEvent"in window&&!tr,kc=Ka&&(!Js||tr&&8<tr&&11>=tr),Pc=" ",Hc=!1;function Ic(e,a){switch(e){case"keyup":return px.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function xx(e,a){switch(e){case"compositionend":return Jc(a);case"keypress":return a.which!==32?null:(Hc=!0,Pc);case"textInput":return e=a.data,e===Pc&&Hc?null:e;default:return null}}function gx(e,a){if(xn)return e==="compositionend"||!Js&&Ic(e,a)?(e=Uc(),ti=_s=ht=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return kc&&a.locale!=="ko"?null:a.data;default:return null}}var hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!hx[e.type]:a==="textarea"}function Vc(e,a,n,r){pn?fn?fn.push(r):fn=[r]:pn=r,a=Xi(a,"onChange"),0<a.length&&(n=new ii("onChange","change",null,n,r),e.push({event:n,listeners:a}))}var nr=null,rr=null;function bx(e){Am(e,0)}function li(e){var a=Kn(e);if(Tc(a))return e}function Gc(e,a){if(e==="change")return a}var Yc=!1;if(Ka){var Fs;if(Ka){var Vs="oninput"in document;if(!Vs){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),Vs=typeof Qc.oninput=="function"}Fs=Vs}else Fs=!1;Yc=Fs&&(!document.documentMode||9<document.documentMode)}function Xc(){nr&&(nr.detachEvent("onpropertychange",Zc),rr=nr=null)}function Zc(e){if(e.propertyName==="value"&&li(rr)){var a=[];Vc(a,rr,e,zs(e)),Lc(bx,a)}}function yx(e,a,n){e==="focusin"?(Xc(),nr=a,rr=n,nr.attachEvent("onpropertychange",Zc)):e==="focusout"&&Xc()}function vx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return li(rr)}function jx(e,a){if(e==="click")return li(a)}function Sx(e,a){if(e==="input"||e==="change")return li(a)}function Nx(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ya=typeof Object.is=="function"?Object.is:Nx;function ir(e,a){if(ya(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var n=Object.keys(e),r=Object.keys(a);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ss.call(a,i)||!ya(e[i],a[i]))return!1}return!0}function Kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $c(e,a){var n=Kc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=a&&r>=a)return{node:n,offset:a-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kc(n)}}function Wc(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Wc(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function eu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=ei(e.document);a instanceof e.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)e=a.contentWindow;else break;a=ei(e.document)}return a}function Gs(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Ex=Ka&&"documentMode"in document&&11>=document.documentMode,gn=null,Ys=null,sr=null,Qs=!1;function au(e,a,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qs||gn==null||gn!==ei(r)||(r=gn,"selectionStart"in r&&Gs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),sr&&ir(sr,r)||(sr=r,r=Xi(Ys,"onSelect"),0<r.length&&(a=new ii("onSelect","select",null,a,n),e.push({event:a,listeners:r}),a.target=gn)))}function Ft(e,a){var n={};return n[e.toLowerCase()]=a.toLowerCase(),n["Webkit"+e]="webkit"+a,n["Moz"+e]="moz"+a,n}var hn={animationend:Ft("Animation","AnimationEnd"),animationiteration:Ft("Animation","AnimationIteration"),animationstart:Ft("Animation","AnimationStart"),transitionrun:Ft("Transition","TransitionRun"),transitionstart:Ft("Transition","TransitionStart"),transitioncancel:Ft("Transition","TransitionCancel"),transitionend:Ft("Transition","TransitionEnd")},Xs={},tu={};Ka&&(tu=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function Vt(e){if(Xs[e])return Xs[e];if(!hn[e])return e;var a=hn[e],n;for(n in a)if(a.hasOwnProperty(n)&&n in tu)return Xs[e]=a[n];return e}var nu=Vt("animationend"),ru=Vt("animationiteration"),iu=Vt("animationstart"),Cx=Vt("transitionrun"),Tx=Vt("transitionstart"),Ax=Vt("transitioncancel"),su=Vt("transitionend"),lu=new Map,Zs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zs.push("scrollEnd");function _a(e,a){lu.set(e,a),It(a,[e])}var oi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ma=[],bn=0,Ks=0;function ci(){for(var e=bn,a=Ks=bn=0;a<e;){var n=Ma[a];Ma[a++]=null;var r=Ma[a];Ma[a++]=null;var i=Ma[a];Ma[a++]=null;var s=Ma[a];if(Ma[a++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}s!==0&&ou(n,i,s)}}function ui(e,a,n,r){Ma[bn++]=e,Ma[bn++]=a,Ma[bn++]=n,Ma[bn++]=r,Ks|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function $s(e,a,n,r){return ui(e,a,n,r),di(e)}function Gt(e,a){return ui(e,null,null,a),di(e)}function ou(e,a,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,s=e.return;s!==null;)s.childLanes|=n,r=s.alternate,r!==null&&(r.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&a!==null&&(i=31-ba(n),e=s.hiddenUpdates,r=e[i],r===null?e[i]=[a]:r.push(a),a.lane=n|536870912),s):null}function di(e){if(50<Rr)throw Rr=0,lo=null,Error(u(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var yn={};function Rx(e,a,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function va(e,a,n,r){return new Rx(e,a,n,r)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $a(e,a){var n=e.alternate;return n===null?(n=va(e.tag,a,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=a,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function cu(e,a){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function mi(e,a,n,r,i,s){var o=0;if(r=e,typeof e=="function")Ws(e)&&(o=1);else if(typeof e=="string")o=Lg(e,n,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=va(31,n,a,i),e.elementType=Ee,e.lanes=s,e;case N:return Yt(n.children,i,s,a);case E:o=8,i|=24;break;case B:return e=va(12,n,a,i|2),e.elementType=B,e.lanes=s,e;case ae:return e=va(13,n,a,i),e.elementType=ae,e.lanes=s,e;case pe:return e=va(19,n,a,i),e.elementType=pe,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:o=10;break e;case z:o=9;break e;case $:o=11;break e;case X:o=14;break e;case fe:o=16,r=null;break e}o=29,n=Error(u(130,e===null?"null":typeof e,"")),r=null}return a=va(o,n,a,i),a.elementType=e,a.type=r,a.lanes=s,a}function Yt(e,a,n,r){return e=va(7,e,r,a),e.lanes=n,e}function el(e,a,n){return e=va(6,e,null,a),e.lanes=n,e}function uu(e){var a=va(18,null,null,0);return a.stateNode=e,a}function al(e,a,n){return a=va(4,e.children!==null?e.children:[],e.key,a),a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var du=new WeakMap;function Oa(e,a){if(typeof e=="object"&&e!==null){var n=du.get(e);return n!==void 0?n:(a={value:e,source:a,stack:uc(a)},du.set(e,a),a)}return{value:e,source:a,stack:uc(a)}}var vn=[],jn=0,pi=null,lr=0,Da=[],wa=0,bt=null,Ha=1,Ia="";function Wa(e,a){vn[jn++]=lr,vn[jn++]=pi,pi=e,lr=a}function mu(e,a,n){Da[wa++]=Ha,Da[wa++]=Ia,Da[wa++]=bt,bt=e;var r=Ha;e=Ia;var i=32-ba(r)-1;r&=~(1<<i),n+=1;var s=32-ba(a)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ha=1<<32-ba(a)+i|n<<i|r,Ia=s+e}else Ha=1<<s|n<<i|r,Ia=e}function tl(e){e.return!==null&&(Wa(e,1),mu(e,1,0))}function nl(e){for(;e===pi;)pi=vn[--jn],vn[jn]=null,lr=vn[--jn],vn[jn]=null;for(;e===bt;)bt=Da[--wa],Da[wa]=null,Ia=Da[--wa],Da[wa]=null,Ha=Da[--wa],Da[wa]=null}function pu(e,a){Da[wa++]=Ha,Da[wa++]=Ia,Da[wa++]=bt,Ha=a.id,Ia=a.overflow,bt=e}var ta=null,Be=null,je=!1,yt=null,La=!1,rl=Error(u(519));function vt(e){var a=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw or(Oa(a,e)),rl}function fu(e){var a=e.stateNode,n=e.type,r=e.memoizedProps;switch(a[aa]=e,a[oa]=r,n){case"dialog":ge("cancel",a),ge("close",a);break;case"iframe":case"object":case"embed":ge("load",a);break;case"video":case"audio":for(n=0;n<Or.length;n++)ge(Or[n],a);break;case"source":ge("error",a);break;case"img":case"image":case"link":ge("error",a),ge("load",a);break;case"details":ge("toggle",a);break;case"input":ge("invalid",a),Ac(a,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ge("invalid",a);break;case"textarea":ge("invalid",a),Mc(a,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||a.textContent===""+n||r.suppressHydrationWarning===!0||Dm(a.textContent,n)?(r.popover!=null&&(ge("beforetoggle",a),ge("toggle",a)),r.onScroll!=null&&ge("scroll",a),r.onScrollEnd!=null&&ge("scrollend",a),r.onClick!=null&&(a.onclick=Za),a=!0):a=!1,a||vt(e,!0)}function xu(e){for(ta=e.return;ta;)switch(ta.tag){case 5:case 31:case 13:La=!1;return;case 27:case 3:La=!0;return;default:ta=ta.return}}function Sn(e){if(e!==ta)return!1;if(!je)return xu(e),je=!0,!1;var a=e.tag,n;if((n=a!==3&&a!==27)&&((n=a===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||No(e.type,e.memoizedProps)),n=!n),n&&Be&&vt(e),xu(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Be=Pm(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Be=Pm(e)}else a===27?(a=Be,Ut(e.type)?(e=Ro,Ro=null,Be=e):Be=a):Be=ta?za(e.stateNode.nextSibling):null;return!0}function Qt(){Be=ta=null,je=!1}function il(){var e=yt;return e!==null&&(pa===null?pa=e:pa.push.apply(pa,e),yt=null),e}function or(e){yt===null?yt=[e]:yt.push(e)}var sl=j(null),Xt=null,et=null;function jt(e,a,n){Y(sl,a._currentValue),a._currentValue=n}function at(e){e._currentValue=sl.current,P(sl)}function ll(e,a,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,r!==null&&(r.childLanes|=a)):r!==null&&(r.childLanes&a)!==a&&(r.childLanes|=a),e===n)break;e=e.return}}function ol(e,a,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var o=i.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=i;for(var b=0;b<a.length;b++)if(m.context===a[b]){s.lanes|=n,m=s.alternate,m!==null&&(m.lanes|=n),ll(s.return,n,e),r||(o=null);break e}s=m.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(u(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ll(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Nn(e,a,n,r){e=null;for(var i=a,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(u(387));if(o=o.memoizedProps,o!==null){var m=i.type;ya(i.pendingProps.value,o.value)||(e!==null?e.push(m):e=[m])}}else if(i===ve.current){if(o=i.alternate,o===null)throw Error(u(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(zr):e=[zr])}i=i.return}e!==null&&ol(a,e,n,r),a.flags|=262144}function fi(e){for(e=e.firstContext;e!==null;){if(!ya(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zt(e){Xt=e,et=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function na(e){return gu(Xt,e)}function xi(e,a){return Xt===null&&Zt(e),gu(e,a)}function gu(e,a){var n=a._currentValue;if(a={context:a,memoizedValue:n,next:null},et===null){if(e===null)throw Error(u(308));et=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else et=et.next=a;return n}var Mx=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){a.aborted=!0,e.forEach(function(n){return n()})}},Ox=l.unstable_scheduleCallback,Dx=l.unstable_NormalPriority,Ge={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cl(){return{controller:new Mx,data:new Map,refCount:0}}function cr(e){e.refCount--,e.refCount===0&&Ox(Dx,function(){e.controller.abort()})}var ur=null,ul=0,En=0,Cn=null;function wx(e,a){if(ur===null){var n=ur=[];ul=0,En=fo(),Cn={status:"pending",value:void 0,then:function(r){n.push(r)}}}return ul++,a.then(hu,hu),a}function hu(){if(--ul===0&&ur!==null){Cn!==null&&(Cn.status="fulfilled");var e=ur;ur=null,En=0,Cn=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Lx(e,a){var n=[],r={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){r.status="fulfilled",r.value=a;for(var i=0;i<n.length;i++)(0,n[i])(a)},function(i){for(r.status="rejected",r.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),r}var bu=U.S;U.S=function(e,a){am=ga(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&wx(e,a),bu!==null&&bu(e,a)};var Kt=j(null);function dl(){var e=Kt.current;return e!==null?e:ze.pooledCache}function gi(e,a){a===null?Y(Kt,Kt.current):Y(Kt,a.pool)}function yu(){var e=dl();return e===null?null:{parent:Ge._currentValue,pool:e}}var Tn=Error(u(460)),ml=Error(u(474)),hi=Error(u(542)),bi={then:function(){}};function vu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ju(e,a,n){switch(n=e[n],n===void 0?e.push(a):n!==a&&(a.then(Za,Za),a=n),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Nu(e),e;default:if(typeof a.status=="string")a.then(Za,Za);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=a,e.status="pending",e.then(function(r){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=r}},function(r){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=r}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Nu(e),e}throw Wt=a,Tn}}function $t(e){try{var a=e._init;return a(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Wt=n,Tn):n}}var Wt=null;function Su(){if(Wt===null)throw Error(u(459));var e=Wt;return Wt=null,e}function Nu(e){if(e===Tn||e===hi)throw Error(u(483))}var An=null,dr=0;function yi(e){var a=dr;return dr+=1,An===null&&(An=[]),ju(An,e,a)}function mr(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function vi(e,a){throw a.$$typeof===J?Error(u(525)):(e=Object.prototype.toString.call(a),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Eu(e){function a(C,v){if(e){var M=C.deletions;M===null?(C.deletions=[v],C.flags|=16):M.push(v)}}function n(C,v){if(!e)return null;for(;v!==null;)a(C,v),v=v.sibling;return null}function r(C){for(var v=new Map;C!==null;)C.key!==null?v.set(C.key,C):v.set(C.index,C),C=C.sibling;return v}function i(C,v){return C=$a(C,v),C.index=0,C.sibling=null,C}function s(C,v,M){return C.index=M,e?(M=C.alternate,M!==null?(M=M.index,M<v?(C.flags|=67108866,v):M):(C.flags|=67108866,v)):(C.flags|=1048576,v)}function o(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function m(C,v,M,_){return v===null||v.tag!==6?(v=el(M,C.mode,_),v.return=C,v):(v=i(v,M),v.return=C,v)}function b(C,v,M,_){var te=M.type;return te===N?q(C,v,M.props.children,_,M.key):v!==null&&(v.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===fe&&$t(te)===v.type)?(v=i(v,M.props),mr(v,M),v.return=C,v):(v=mi(M.type,M.key,M.props,null,C.mode,_),mr(v,M),v.return=C,v)}function O(C,v,M,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==M.containerInfo||v.stateNode.implementation!==M.implementation?(v=al(M,C.mode,_),v.return=C,v):(v=i(v,M.children||[]),v.return=C,v)}function q(C,v,M,_,te){return v===null||v.tag!==7?(v=Yt(M,C.mode,_,te),v.return=C,v):(v=i(v,M),v.return=C,v)}function H(C,v,M){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=el(""+v,C.mode,M),v.return=C,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case V:return M=mi(v.type,v.key,v.props,null,C.mode,M),mr(M,v),M.return=C,M;case R:return v=al(v,C.mode,M),v.return=C,v;case fe:return v=$t(v),H(C,v,M)}if(Ce(v)||Ue(v))return v=Yt(v,C.mode,M,null),v.return=C,v;if(typeof v.then=="function")return H(C,yi(v),M);if(v.$$typeof===I)return H(C,xi(C,v),M);vi(C,v)}return null}function D(C,v,M,_){var te=v!==null?v.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return te!==null?null:m(C,v,""+M,_);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case V:return M.key===te?b(C,v,M,_):null;case R:return M.key===te?O(C,v,M,_):null;case fe:return M=$t(M),D(C,v,M,_)}if(Ce(M)||Ue(M))return te!==null?null:q(C,v,M,_,null);if(typeof M.then=="function")return D(C,v,yi(M),_);if(M.$$typeof===I)return D(C,v,xi(C,M),_);vi(C,M)}return null}function w(C,v,M,_,te){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return C=C.get(M)||null,m(v,C,""+_,te);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case V:return C=C.get(_.key===null?M:_.key)||null,b(v,C,_,te);case R:return C=C.get(_.key===null?M:_.key)||null,O(v,C,_,te);case fe:return _=$t(_),w(C,v,M,_,te)}if(Ce(_)||Ue(_))return C=C.get(M)||null,q(v,C,_,te,null);if(typeof _.then=="function")return w(C,v,M,yi(_),te);if(_.$$typeof===I)return w(C,v,M,xi(v,_),te);vi(v,_)}return null}function Z(C,v,M,_){for(var te=null,Se=null,W=v,me=v=0,ye=null;W!==null&&me<M.length;me++){W.index>me?(ye=W,W=null):ye=W.sibling;var Ne=D(C,W,M[me],_);if(Ne===null){W===null&&(W=ye);break}e&&W&&Ne.alternate===null&&a(C,W),v=s(Ne,v,me),Se===null?te=Ne:Se.sibling=Ne,Se=Ne,W=ye}if(me===M.length)return n(C,W),je&&Wa(C,me),te;if(W===null){for(;me<M.length;me++)W=H(C,M[me],_),W!==null&&(v=s(W,v,me),Se===null?te=W:Se.sibling=W,Se=W);return je&&Wa(C,me),te}for(W=r(W);me<M.length;me++)ye=w(W,C,me,M[me],_),ye!==null&&(e&&ye.alternate!==null&&W.delete(ye.key===null?me:ye.key),v=s(ye,v,me),Se===null?te=ye:Se.sibling=ye,Se=ye);return e&&W.forEach(function(kt){return a(C,kt)}),je&&Wa(C,me),te}function ie(C,v,M,_){if(M==null)throw Error(u(151));for(var te=null,Se=null,W=v,me=v=0,ye=null,Ne=M.next();W!==null&&!Ne.done;me++,Ne=M.next()){W.index>me?(ye=W,W=null):ye=W.sibling;var kt=D(C,W,Ne.value,_);if(kt===null){W===null&&(W=ye);break}e&&W&&kt.alternate===null&&a(C,W),v=s(kt,v,me),Se===null?te=kt:Se.sibling=kt,Se=kt,W=ye}if(Ne.done)return n(C,W),je&&Wa(C,me),te;if(W===null){for(;!Ne.done;me++,Ne=M.next())Ne=H(C,Ne.value,_),Ne!==null&&(v=s(Ne,v,me),Se===null?te=Ne:Se.sibling=Ne,Se=Ne);return je&&Wa(C,me),te}for(W=r(W);!Ne.done;me++,Ne=M.next())Ne=w(W,C,me,Ne.value,_),Ne!==null&&(e&&Ne.alternate!==null&&W.delete(Ne.key===null?me:Ne.key),v=s(Ne,v,me),Se===null?te=Ne:Se.sibling=Ne,Se=Ne);return e&&W.forEach(function(Fg){return a(C,Fg)}),je&&Wa(C,me),te}function Le(C,v,M,_){if(typeof M=="object"&&M!==null&&M.type===N&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case V:e:{for(var te=M.key;v!==null;){if(v.key===te){if(te=M.type,te===N){if(v.tag===7){n(C,v.sibling),_=i(v,M.props.children),_.return=C,C=_;break e}}else if(v.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===fe&&$t(te)===v.type){n(C,v.sibling),_=i(v,M.props),mr(_,M),_.return=C,C=_;break e}n(C,v);break}else a(C,v);v=v.sibling}M.type===N?(_=Yt(M.props.children,C.mode,_,M.key),_.return=C,C=_):(_=mi(M.type,M.key,M.props,null,C.mode,_),mr(_,M),_.return=C,C=_)}return o(C);case R:e:{for(te=M.key;v!==null;){if(v.key===te)if(v.tag===4&&v.stateNode.containerInfo===M.containerInfo&&v.stateNode.implementation===M.implementation){n(C,v.sibling),_=i(v,M.children||[]),_.return=C,C=_;break e}else{n(C,v);break}else a(C,v);v=v.sibling}_=al(M,C.mode,_),_.return=C,C=_}return o(C);case fe:return M=$t(M),Le(C,v,M,_)}if(Ce(M))return Z(C,v,M,_);if(Ue(M)){if(te=Ue(M),typeof te!="function")throw Error(u(150));return M=te.call(M),ie(C,v,M,_)}if(typeof M.then=="function")return Le(C,v,yi(M),_);if(M.$$typeof===I)return Le(C,v,xi(C,M),_);vi(C,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,v!==null&&v.tag===6?(n(C,v.sibling),_=i(v,M),_.return=C,C=_):(n(C,v),_=el(M,C.mode,_),_.return=C,C=_),o(C)):n(C,v)}return function(C,v,M,_){try{dr=0;var te=Le(C,v,M,_);return An=null,te}catch(W){if(W===Tn||W===hi)throw W;var Se=va(29,W,null,C.mode);return Se.lanes=_,Se.return=C,Se}}}var en=Eu(!0),Cu=Eu(!1),St=!1;function pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fl(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Nt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Et(e,a,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Te&2)!==0){var i=r.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),r.pending=a,a=di(e),ou(e,null,n),a}return ui(e,r,a,n),di(e)}function pr(e,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194048)!==0)){var r=a.lanes;r&=e.pendingLanes,n|=r,a.lanes=n,gc(e,n)}}function xl(e,a){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=a:s=s.next=a}else i=s=a;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=a:e.next=a,n.lastBaseUpdate=a}var gl=!1;function fr(){if(gl){var e=Cn;if(e!==null)throw e}}function xr(e,a,n,r){gl=!1;var i=e.updateQueue;St=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var b=m,O=b.next;b.next=null,o===null?s=O:o.next=O,o=b;var q=e.alternate;q!==null&&(q=q.updateQueue,m=q.lastBaseUpdate,m!==o&&(m===null?q.firstBaseUpdate=O:m.next=O,q.lastBaseUpdate=b))}if(s!==null){var H=i.baseState;o=0,q=O=b=null,m=s;do{var D=m.lane&-536870913,w=D!==m.lane;if(w?(be&D)===D:(r&D)===D){D!==0&&D===En&&(gl=!0),q!==null&&(q=q.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var Z=e,ie=m;D=a;var Le=n;switch(ie.tag){case 1:if(Z=ie.payload,typeof Z=="function"){H=Z.call(Le,H,D);break e}H=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ie.payload,D=typeof Z=="function"?Z.call(Le,H,D):Z,D==null)break e;H=y({},H,D);break e;case 2:St=!0}}D=m.callback,D!==null&&(e.flags|=64,w&&(e.flags|=8192),w=i.callbacks,w===null?i.callbacks=[D]:w.push(D))}else w={lane:D,tag:m.tag,payload:m.payload,callback:m.callback,next:null},q===null?(O=q=w,b=H):q=q.next=w,o|=D;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;w=m,m=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);q===null&&(b=H),i.baseState=b,i.firstBaseUpdate=O,i.lastBaseUpdate=q,s===null&&(i.shared.lanes=0),Mt|=o,e.lanes=o,e.memoizedState=H}}function Tu(e,a){if(typeof e!="function")throw Error(u(191,e));e.call(a)}function Au(e,a){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Tu(n[e],a)}var Rn=j(null),ji=j(0);function Ru(e,a){e=ut,Y(ji,e),Y(Rn,a),ut=e|a.baseLanes}function hl(){Y(ji,ut),Y(Rn,Rn.current)}function bl(){ut=ji.current,P(Rn),P(ji)}var ja=j(null),Ua=null;function Ct(e){var a=e.alternate;Y(Fe,Fe.current&1),Y(ja,e),Ua===null&&(a===null||Rn.current!==null||a.memoizedState!==null)&&(Ua=e)}function yl(e){Y(Fe,Fe.current),Y(ja,e),Ua===null&&(Ua=e)}function Mu(e){e.tag===22?(Y(Fe,Fe.current),Y(ja,e),Ua===null&&(Ua=e)):Tt()}function Tt(){Y(Fe,Fe.current),Y(ja,ja.current)}function Sa(e){P(ja),Ua===e&&(Ua=null),P(Fe)}var Fe=j(0);function Si(e){for(var a=e;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||To(n)||Ao(n)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var tt=0,ue=null,De=null,Ye=null,Ni=!1,Mn=!1,an=!1,Ei=0,gr=0,On=null,Ux=0;function Ie(){throw Error(u(321))}function vl(e,a){if(a===null)return!1;for(var n=0;n<a.length&&n<e.length;n++)if(!ya(e[n],a[n]))return!1;return!0}function jl(e,a,n,r,i,s){return tt=s,ue=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,U.H=e===null||e.memoizedState===null?md:ql,an=!1,s=n(r,i),an=!1,Mn&&(s=Du(a,n,r,i)),Ou(e),s}function Ou(e){U.H=yr;var a=De!==null&&De.next!==null;if(tt=0,Ye=De=ue=null,Ni=!1,gr=0,On=null,a)throw Error(u(300));e===null||Qe||(e=e.dependencies,e!==null&&fi(e)&&(Qe=!0))}function Du(e,a,n,r){ue=e;var i=0;do{if(Mn&&(On=null),gr=0,Mn=!1,25<=i)throw Error(u(301));if(i+=1,Ye=De=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}U.H=pd,s=a(n,r)}while(Mn);return s}function zx(){var e=U.H,a=e.useState()[0];return a=typeof a.then=="function"?hr(a):a,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(ue.flags|=1024),a}function Sl(){var e=Ei!==0;return Ei=0,e}function Nl(e,a,n){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n}function El(e){if(Ni){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Ni=!1}tt=0,Ye=De=ue=null,Mn=!1,gr=Ei=0,On=null}function la(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?ue.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ve(){if(De===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var a=Ye===null?ue.memoizedState:Ye.next;if(a!==null)Ye=a,De=e;else{if(e===null)throw ue.alternate===null?Error(u(467)):Error(u(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ye===null?ue.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Ci(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hr(e){var a=gr;return gr+=1,On===null&&(On=[]),e=ju(On,e,a),a=ue,(Ye===null?a.memoizedState:Ye.next)===null&&(a=a.alternate,U.H=a===null||a.memoizedState===null?md:ql),e}function Ti(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hr(e);if(e.$$typeof===I)return na(e)}throw Error(u(438,String(e)))}function Cl(e){var a=null,n=ue.updateQueue;if(n!==null&&(a=n.memoCache),a==null){var r=ue.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(a={data:r.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),n===null&&(n=Ci(),ue.updateQueue=n),n.memoCache=a,n=a.data[a.index],n===void 0)for(n=a.data[a.index]=Array(e),r=0;r<e;r++)n[r]=Ze;return a.index++,n}function nt(e,a){return typeof a=="function"?a(e):a}function Ai(e){var a=Ve();return Tl(a,De,e)}function Tl(e,a,n){var r=e.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=n;var i=e.baseQueue,s=r.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}a.baseQueue=i=s,r.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{a=i.next;var m=o=null,b=null,O=a,q=!1;do{var H=O.lane&-536870913;if(H!==O.lane?(be&H)===H:(tt&H)===H){var D=O.revertLane;if(D===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),H===En&&(q=!0);else if((tt&D)===D){O=O.next,D===En&&(q=!0);continue}else H={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},b===null?(m=b=H,o=s):b=b.next=H,ue.lanes|=D,Mt|=D;H=O.action,an&&n(s,H),s=O.hasEagerState?O.eagerState:n(s,H)}else D={lane:H,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},b===null?(m=b=D,o=s):b=b.next=D,ue.lanes|=H,Mt|=H;O=O.next}while(O!==null&&O!==a);if(b===null?o=s:b.next=m,!ya(s,e.memoizedState)&&(Qe=!0,q&&(n=Cn,n!==null)))throw n;e.memoizedState=s,e.baseState=o,e.baseQueue=b,r.lastRenderedState=s}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Al(e){var a=Ve(),n=a.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=a.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);ya(s,a.memoizedState)||(Qe=!0),a.memoizedState=s,a.baseQueue===null&&(a.baseState=s),n.lastRenderedState=s}return[s,r]}function wu(e,a,n){var r=ue,i=Ve(),s=je;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=a();var o=!ya((De||i).memoizedState,n);if(o&&(i.memoizedState=n,Qe=!0),i=i.queue,Ol(zu.bind(null,r,i,e),[e]),i.getSnapshot!==a||o||Ye!==null&&Ye.memoizedState.tag&1){if(r.flags|=2048,Dn(9,{destroy:void 0},Uu.bind(null,r,i,n,a),null),ze===null)throw Error(u(349));s||(tt&127)!==0||Lu(r,a,n)}return n}function Lu(e,a,n){e.flags|=16384,e={getSnapshot:a,value:n},a=ue.updateQueue,a===null?(a=Ci(),ue.updateQueue=a,a.stores=[e]):(n=a.stores,n===null?a.stores=[e]:n.push(e))}function Uu(e,a,n,r){a.value=n,a.getSnapshot=r,qu(a)&&Bu(e)}function zu(e,a,n){return n(function(){qu(a)&&Bu(e)})}function qu(e){var a=e.getSnapshot;e=e.value;try{var n=a();return!ya(e,n)}catch{return!0}}function Bu(e){var a=Gt(e,2);a!==null&&fa(a,e,2)}function Rl(e){var a=la();if(typeof e=="function"){var n=e;if(e=n(),an){xt(!0);try{n()}finally{xt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nt,lastRenderedState:e},a}function _u(e,a,n,r){return e.baseState=n,Tl(e,De,typeof r=="function"?r:nt)}function qx(e,a,n,r,i){if(Oi(e))throw Error(u(485));if(e=a.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){s.listeners.push(o)}};U.T!==null?n(!0):s.isTransition=!1,r(s),n=a.pending,n===null?(s.next=a.pending=s,ku(a,s)):(s.next=n.next,a.pending=n.next=s)}}function ku(e,a){var n=a.action,r=a.payload,i=e.state;if(a.isTransition){var s=U.T,o={};U.T=o;try{var m=n(i,r),b=U.S;b!==null&&b(o,m),Pu(e,a,m)}catch(O){Ml(e,a,O)}finally{s!==null&&o.types!==null&&(s.types=o.types),U.T=s}}else try{s=n(i,r),Pu(e,a,s)}catch(O){Ml(e,a,O)}}function Pu(e,a,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Hu(e,a,r)},function(r){return Ml(e,a,r)}):Hu(e,a,n)}function Hu(e,a,n){a.status="fulfilled",a.value=n,Iu(a),e.state=n,a=e.pending,a!==null&&(n=a.next,n===a?e.pending=null:(n=n.next,a.next=n,ku(e,n)))}function Ml(e,a,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do a.status="rejected",a.reason=n,Iu(a),a=a.next;while(a!==r)}e.action=null}function Iu(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Ju(e,a){return a}function Fu(e,a){if(je){var n=ze.formState;if(n!==null){e:{var r=ue;if(je){if(Be){a:{for(var i=Be,s=La;i.nodeType!==8;){if(!s){i=null;break a}if(i=za(i.nextSibling),i===null){i=null;break a}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Be=za(i.nextSibling),r=i.data==="F!";break e}}vt(r)}r=!1}r&&(a=n[0])}}return n=la(),n.memoizedState=n.baseState=a,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ju,lastRenderedState:a},n.queue=r,n=cd.bind(null,ue,r),r.dispatch=n,r=Rl(!1),s=zl.bind(null,ue,!1,r.queue),r=la(),i={state:a,dispatch:null,action:e,pending:null},r.queue=i,n=qx.bind(null,ue,i,s,n),i.dispatch=n,r.memoizedState=e,[a,n,!1]}function Vu(e){var a=Ve();return Gu(a,De,e)}function Gu(e,a,n){if(a=Tl(e,a,Ju)[0],e=Ai(nt)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var r=hr(a)}catch(o){throw o===Tn?hi:o}else r=a;a=Ve();var i=a.queue,s=i.dispatch;return n!==a.memoizedState&&(ue.flags|=2048,Dn(9,{destroy:void 0},Bx.bind(null,i,n),null)),[r,s,e]}function Bx(e,a){e.action=a}function Yu(e){var a=Ve(),n=De;if(n!==null)return Gu(a,n,e);Ve(),a=a.memoizedState,n=Ve();var r=n.queue.dispatch;return n.memoizedState=e,[a,r,!1]}function Dn(e,a,n,r){return e={tag:e,create:n,deps:r,inst:a,next:null},a=ue.updateQueue,a===null&&(a=Ci(),ue.updateQueue=a),n=a.lastEffect,n===null?a.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,a.lastEffect=e),e}function Qu(){return Ve().memoizedState}function Ri(e,a,n,r){var i=la();ue.flags|=e,i.memoizedState=Dn(1|a,{destroy:void 0},n,r===void 0?null:r)}function Mi(e,a,n,r){var i=Ve();r=r===void 0?null:r;var s=i.memoizedState.inst;De!==null&&r!==null&&vl(r,De.memoizedState.deps)?i.memoizedState=Dn(a,s,n,r):(ue.flags|=e,i.memoizedState=Dn(1|a,s,n,r))}function Xu(e,a){Ri(8390656,8,e,a)}function Ol(e,a){Mi(2048,8,e,a)}function _x(e){ue.flags|=4;var a=ue.updateQueue;if(a===null)a=Ci(),ue.updateQueue=a,a.events=[e];else{var n=a.events;n===null?a.events=[e]:n.push(e)}}function Zu(e){var a=Ve().memoizedState;return _x({ref:a,nextImpl:e}),function(){if((Te&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}function Ku(e,a){return Mi(4,2,e,a)}function $u(e,a){return Mi(4,4,e,a)}function Wu(e,a){if(typeof a=="function"){e=e();var n=a(e);return function(){typeof n=="function"?n():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function ed(e,a,n){n=n!=null?n.concat([e]):null,Mi(4,4,Wu.bind(null,a,e),n)}function Dl(){}function ad(e,a){var n=Ve();a=a===void 0?null:a;var r=n.memoizedState;return a!==null&&vl(a,r[1])?r[0]:(n.memoizedState=[e,a],e)}function td(e,a){var n=Ve();a=a===void 0?null:a;var r=n.memoizedState;if(a!==null&&vl(a,r[1]))return r[0];if(r=e(),an){xt(!0);try{e()}finally{xt(!1)}}return n.memoizedState=[r,a],r}function wl(e,a,n){return n===void 0||(tt&1073741824)!==0&&(be&261930)===0?e.memoizedState=a:(e.memoizedState=n,e=nm(),ue.lanes|=e,Mt|=e,n)}function nd(e,a,n,r){return ya(n,a)?n:Rn.current!==null?(e=wl(e,n,r),ya(e,a)||(Qe=!0),e):(tt&42)===0||(tt&1073741824)!==0&&(be&261930)===0?(Qe=!0,e.memoizedState=n):(e=nm(),ue.lanes|=e,Mt|=e,a)}function rd(e,a,n,r,i){var s=G.p;G.p=s!==0&&8>s?s:8;var o=U.T,m={};U.T=m,zl(e,!1,a,n);try{var b=i(),O=U.S;if(O!==null&&O(m,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var q=Lx(b,r);br(e,a,q,Ca(e))}else br(e,a,r,Ca(e))}catch(H){br(e,a,{then:function(){},status:"rejected",reason:H},Ca())}finally{G.p=s,o!==null&&m.types!==null&&(o.types=m.types),U.T=o}}function kx(){}function Ll(e,a,n,r){if(e.tag!==5)throw Error(u(476));var i=id(e).queue;rd(e,i,a,ee,n===null?kx:function(){return sd(e),n(r)})}function id(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nt,lastRenderedState:ee},next:null};var n={};return a.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nt,lastRenderedState:n},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function sd(e){var a=id(e);a.next===null&&(a=e.alternate.memoizedState),br(e,a.next.queue,{},Ca())}function Ul(){return na(zr)}function ld(){return Ve().memoizedState}function od(){return Ve().memoizedState}function Px(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var n=Ca();e=Nt(n);var r=Et(a,e,n);r!==null&&(fa(r,a,n),pr(r,a,n)),a={cache:cl()},e.payload=a;return}a=a.return}}function Hx(e,a,n){var r=Ca();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Oi(e)?ud(a,n):(n=$s(e,a,n,r),n!==null&&(fa(n,e,r),dd(n,a,r)))}function cd(e,a,n){var r=Ca();br(e,a,n,r)}function br(e,a,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Oi(e))ud(a,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=a.lastRenderedReducer,s!==null))try{var o=a.lastRenderedState,m=s(o,n);if(i.hasEagerState=!0,i.eagerState=m,ya(m,o))return ui(e,a,i,0),ze===null&&ci(),!1}catch{}if(n=$s(e,a,i,r),n!==null)return fa(n,e,r),dd(n,a,r),!0}return!1}function zl(e,a,n,r){if(r={lane:2,revertLane:fo(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Oi(e)){if(a)throw Error(u(479))}else a=$s(e,n,r,2),a!==null&&fa(a,e,2)}function Oi(e){var a=e.alternate;return e===ue||a!==null&&a===ue}function ud(e,a){Mn=Ni=!0;var n=e.pending;n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a}function dd(e,a,n){if((n&4194048)!==0){var r=a.lanes;r&=e.pendingLanes,n|=r,a.lanes=n,gc(e,n)}}var yr={readContext:na,use:Ti,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie,useHostTransitionStatus:Ie,useFormState:Ie,useActionState:Ie,useOptimistic:Ie,useMemoCache:Ie,useCacheRefresh:Ie};yr.useEffectEvent=Ie;var md={readContext:na,use:Ti,useCallback:function(e,a){return la().memoizedState=[e,a===void 0?null:a],e},useContext:na,useEffect:Xu,useImperativeHandle:function(e,a,n){n=n!=null?n.concat([e]):null,Ri(4194308,4,Wu.bind(null,a,e),n)},useLayoutEffect:function(e,a){return Ri(4194308,4,e,a)},useInsertionEffect:function(e,a){Ri(4,2,e,a)},useMemo:function(e,a){var n=la();a=a===void 0?null:a;var r=e();if(an){xt(!0);try{e()}finally{xt(!1)}}return n.memoizedState=[r,a],r},useReducer:function(e,a,n){var r=la();if(n!==void 0){var i=n(a);if(an){xt(!0);try{n(a)}finally{xt(!1)}}}else i=a;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Hx.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var a=la();return e={current:e},a.memoizedState=e},useState:function(e){e=Rl(e);var a=e.queue,n=cd.bind(null,ue,a);return a.dispatch=n,[e.memoizedState,n]},useDebugValue:Dl,useDeferredValue:function(e,a){var n=la();return wl(n,e,a)},useTransition:function(){var e=Rl(!1);return e=rd.bind(null,ue,e.queue,!0,!1),la().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,n){var r=ue,i=la();if(je){if(n===void 0)throw Error(u(407));n=n()}else{if(n=a(),ze===null)throw Error(u(349));(be&127)!==0||Lu(r,a,n)}i.memoizedState=n;var s={value:n,getSnapshot:a};return i.queue=s,Xu(zu.bind(null,r,s,e),[e]),r.flags|=2048,Dn(9,{destroy:void 0},Uu.bind(null,r,s,n,a),null),n},useId:function(){var e=la(),a=ze.identifierPrefix;if(je){var n=Ia,r=Ha;n=(r&~(1<<32-ba(r)-1)).toString(32)+n,a="_"+a+"R_"+n,n=Ei++,0<n&&(a+="H"+n.toString(32)),a+="_"}else n=Ux++,a="_"+a+"r_"+n.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Ul,useFormState:Fu,useActionState:Fu,useOptimistic:function(e){var a=la();a.memoizedState=a.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=n,a=zl.bind(null,ue,!0,n),n.dispatch=a,[e,a]},useMemoCache:Cl,useCacheRefresh:function(){return la().memoizedState=Px.bind(null,ue)},useEffectEvent:function(e){var a=la(),n={impl:e};return a.memoizedState=n,function(){if((Te&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},ql={readContext:na,use:Ti,useCallback:ad,useContext:na,useEffect:Ol,useImperativeHandle:ed,useInsertionEffect:Ku,useLayoutEffect:$u,useMemo:td,useReducer:Ai,useRef:Qu,useState:function(){return Ai(nt)},useDebugValue:Dl,useDeferredValue:function(e,a){var n=Ve();return nd(n,De.memoizedState,e,a)},useTransition:function(){var e=Ai(nt)[0],a=Ve().memoizedState;return[typeof e=="boolean"?e:hr(e),a]},useSyncExternalStore:wu,useId:ld,useHostTransitionStatus:Ul,useFormState:Vu,useActionState:Vu,useOptimistic:function(e,a){var n=Ve();return _u(n,De,e,a)},useMemoCache:Cl,useCacheRefresh:od};ql.useEffectEvent=Zu;var pd={readContext:na,use:Ti,useCallback:ad,useContext:na,useEffect:Ol,useImperativeHandle:ed,useInsertionEffect:Ku,useLayoutEffect:$u,useMemo:td,useReducer:Al,useRef:Qu,useState:function(){return Al(nt)},useDebugValue:Dl,useDeferredValue:function(e,a){var n=Ve();return De===null?wl(n,e,a):nd(n,De.memoizedState,e,a)},useTransition:function(){var e=Al(nt)[0],a=Ve().memoizedState;return[typeof e=="boolean"?e:hr(e),a]},useSyncExternalStore:wu,useId:ld,useHostTransitionStatus:Ul,useFormState:Yu,useActionState:Yu,useOptimistic:function(e,a){var n=Ve();return De!==null?_u(n,De,e,a):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Cl,useCacheRefresh:od};pd.useEffectEvent=Zu;function Bl(e,a,n,r){a=e.memoizedState,n=n(r,a),n=n==null?a:y({},a,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _l={enqueueSetState:function(e,a,n){e=e._reactInternals;var r=Ca(),i=Nt(r);i.payload=a,n!=null&&(i.callback=n),a=Et(e,i,r),a!==null&&(fa(a,e,r),pr(a,e,r))},enqueueReplaceState:function(e,a,n){e=e._reactInternals;var r=Ca(),i=Nt(r);i.tag=1,i.payload=a,n!=null&&(i.callback=n),a=Et(e,i,r),a!==null&&(fa(a,e,r),pr(a,e,r))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var n=Ca(),r=Nt(n);r.tag=2,a!=null&&(r.callback=a),a=Et(e,r,n),a!==null&&(fa(a,e,n),pr(a,e,n))}};function fd(e,a,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):a.prototype&&a.prototype.isPureReactComponent?!ir(n,r)||!ir(i,s):!0}function xd(e,a,n,r){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,r),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,r),a.state!==e&&_l.enqueueReplaceState(a,a.state,null)}function tn(e,a){var n=a;if("ref"in a){n={};for(var r in a)r!=="ref"&&(n[r]=a[r])}if(e=e.defaultProps){n===a&&(n=y({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function gd(e){oi(e)}function hd(e){console.error(e)}function bd(e){oi(e)}function Di(e,a){try{var n=e.onUncaughtError;n(a.value,{componentStack:a.stack})}catch(r){setTimeout(function(){throw r})}}function yd(e,a,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function kl(e,a,n){return n=Nt(n),n.tag=3,n.payload={element:null},n.callback=function(){Di(e,a)},n}function vd(e){return e=Nt(e),e.tag=3,e}function jd(e,a,n,r){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var s=r.value;e.payload=function(){return i(s)},e.callback=function(){yd(a,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){yd(a,n,r),typeof i!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var m=r.stack;this.componentDidCatch(r.value,{componentStack:m!==null?m:""})})}function Ix(e,a,n,r,i){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(a=n.alternate,a!==null&&Nn(a,n,i,!0),n=ja.current,n!==null){switch(n.tag){case 31:case 13:return Ua===null?Ji():n.alternate===null&&Je===0&&(Je=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===bi?n.flags|=16384:(a=n.updateQueue,a===null?n.updateQueue=new Set([r]):a.add(r),uo(e,r,i)),!1;case 22:return n.flags|=65536,r===bi?n.flags|=16384:(a=n.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=a):(n=a.retryQueue,n===null?a.retryQueue=new Set([r]):n.add(r)),uo(e,r,i)),!1}throw Error(u(435,n.tag))}return uo(e,r,i),Ji(),!1}if(je)return a=ja.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,r!==rl&&(e=Error(u(422),{cause:r}),or(Oa(e,n)))):(r!==rl&&(a=Error(u(423),{cause:r}),or(Oa(a,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Oa(r,n),i=kl(e.stateNode,r,i),xl(e,i),Je!==4&&(Je=2)),!1;var s=Error(u(520),{cause:r});if(s=Oa(s,n),Ar===null?Ar=[s]:Ar.push(s),Je!==4&&(Je=2),a===null)return!0;r=Oa(r,n),n=a;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=kl(n.stateNode,r,e),xl(n,e),!1;case 1:if(a=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ot===null||!Ot.has(s))))return n.flags|=65536,i&=-i,n.lanes|=i,i=vd(i),jd(i,e,n,r),xl(n,i),!1}n=n.return}while(n!==null);return!1}var Pl=Error(u(461)),Qe=!1;function ra(e,a,n,r){a.child=e===null?Cu(a,null,n,r):en(a,e.child,n,r)}function Sd(e,a,n,r,i){n=n.render;var s=a.ref;if("ref"in r){var o={};for(var m in r)m!=="ref"&&(o[m]=r[m])}else o=r;return Zt(a),r=jl(e,a,n,o,s,i),m=Sl(),e!==null&&!Qe?(Nl(e,a,i),rt(e,a,i)):(je&&m&&tl(a),a.flags|=1,ra(e,a,r,i),a.child)}function Nd(e,a,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Ws(s)&&s.defaultProps===void 0&&n.compare===null?(a.tag=15,a.type=s,Ed(e,a,s,r,i)):(e=mi(n.type,null,r,a,a.mode,i),e.ref=a.ref,e.return=a,a.child=e)}if(s=e.child,!Ql(e,i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ir,n(o,r)&&e.ref===a.ref)return rt(e,a,i)}return a.flags|=1,e=$a(s,r),e.ref=a.ref,e.return=a,a.child=e}function Ed(e,a,n,r,i){if(e!==null){var s=e.memoizedProps;if(ir(s,r)&&e.ref===a.ref)if(Qe=!1,a.pendingProps=r=s,Ql(e,i))(e.flags&131072)!==0&&(Qe=!0);else return a.lanes=e.lanes,rt(e,a,i)}return Hl(e,a,n,r,i)}function Cd(e,a,n,r){var i=r.children,s=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((a.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(r=a.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~s}else r=0,a.child=null;return Td(e,a,s,n,r)}if((n&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&gi(a,s!==null?s.cachePool:null),s!==null?Ru(a,s):hl(),Mu(a);else return r=a.lanes=536870912,Td(e,a,s!==null?s.baseLanes|n:n,n,r)}else s!==null?(gi(a,s.cachePool),Ru(a,s),Tt(),a.memoizedState=null):(e!==null&&gi(a,null),hl(),Tt());return ra(e,a,i,n),a.child}function vr(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Td(e,a,n,r,i){var s=dl();return s=s===null?null:{parent:Ge._currentValue,pool:s},a.memoizedState={baseLanes:n,cachePool:s},e!==null&&gi(a,null),hl(),Mu(a),e!==null&&Nn(e,a,r,!0),a.childLanes=i,null}function wi(e,a){return a=Ui({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Ad(e,a,n){return en(a,e.child,null,n),e=wi(a,a.pendingProps),e.flags|=2,Sa(a),a.memoizedState=null,e}function Jx(e,a,n){var r=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(je){if(r.mode==="hidden")return e=wi(a,r),a.lanes=536870912,vr(null,e);if(yl(a),(e=Be)?(e=km(e,La),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:bt!==null?{id:Ha,overflow:Ia}:null,retryLane:536870912,hydrationErrors:null},n=uu(e),n.return=a,a.child=n,ta=a,Be=null)):e=null,e===null)throw vt(a);return a.lanes=536870912,null}return wi(a,r)}var s=e.memoizedState;if(s!==null){var o=s.dehydrated;if(yl(a),i)if(a.flags&256)a.flags&=-257,a=Ad(e,a,n);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(u(558));else if(Qe||Nn(e,a,n,!1),i=(n&e.childLanes)!==0,Qe||i){if(r=ze,r!==null&&(o=hc(r,n),o!==0&&o!==s.retryLane))throw s.retryLane=o,Gt(e,o),fa(r,e,o),Pl;Ji(),a=Ad(e,a,n)}else e=s.treeContext,Be=za(o.nextSibling),ta=a,je=!0,yt=null,La=!1,e!==null&&pu(a,e),a=wi(a,r),a.flags|=4096;return a}return e=$a(e.child,{mode:r.mode,children:r.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Li(e,a){var n=a.ref;if(n===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(a.flags|=4194816)}}function Hl(e,a,n,r,i){return Zt(a),n=jl(e,a,n,r,void 0,i),r=Sl(),e!==null&&!Qe?(Nl(e,a,i),rt(e,a,i)):(je&&r&&tl(a),a.flags|=1,ra(e,a,n,i),a.child)}function Rd(e,a,n,r,i,s){return Zt(a),a.updateQueue=null,n=Du(a,r,n,i),Ou(e),r=Sl(),e!==null&&!Qe?(Nl(e,a,s),rt(e,a,s)):(je&&r&&tl(a),a.flags|=1,ra(e,a,n,s),a.child)}function Md(e,a,n,r,i){if(Zt(a),a.stateNode===null){var s=yn,o=n.contextType;typeof o=="object"&&o!==null&&(s=na(o)),s=new n(r,s),a.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=_l,a.stateNode=s,s._reactInternals=a,s=a.stateNode,s.props=r,s.state=a.memoizedState,s.refs={},pl(a),o=n.contextType,s.context=typeof o=="object"&&o!==null?na(o):yn,s.state=a.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Bl(a,n,o,r),s.state=a.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(o=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),o!==s.state&&_l.enqueueReplaceState(s,s.state,null),xr(a,r,s,i),fr(),s.state=a.memoizedState),typeof s.componentDidMount=="function"&&(a.flags|=4194308),r=!0}else if(e===null){s=a.stateNode;var m=a.memoizedProps,b=tn(n,m);s.props=b;var O=s.context,q=n.contextType;o=yn,typeof q=="object"&&q!==null&&(o=na(q));var H=n.getDerivedStateFromProps;q=typeof H=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=a.pendingProps!==m,q||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||O!==o)&&xd(a,s,r,o),St=!1;var D=a.memoizedState;s.state=D,xr(a,r,s,i),fr(),O=a.memoizedState,m||D!==O||St?(typeof H=="function"&&(Bl(a,n,H,r),O=a.memoizedState),(b=St||fd(a,n,b,r,D,O,o))?(q||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(a.flags|=4194308)):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=r,a.memoizedState=O),s.props=r,s.state=O,s.context=o,r=b):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),r=!1)}else{s=a.stateNode,fl(e,a),o=a.memoizedProps,q=tn(n,o),s.props=q,H=a.pendingProps,D=s.context,O=n.contextType,b=yn,typeof O=="object"&&O!==null&&(b=na(O)),m=n.getDerivedStateFromProps,(O=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==H||D!==b)&&xd(a,s,r,b),St=!1,D=a.memoizedState,s.state=D,xr(a,r,s,i),fr();var w=a.memoizedState;o!==H||D!==w||St||e!==null&&e.dependencies!==null&&fi(e.dependencies)?(typeof m=="function"&&(Bl(a,n,m,r),w=a.memoizedState),(q=St||fd(a,n,q,r,D,w,b)||e!==null&&e.dependencies!==null&&fi(e.dependencies))?(O||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,b),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,b)),typeof s.componentDidUpdate=="function"&&(a.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(a.flags|=1024),a.memoizedProps=r,a.memoizedState=w),s.props=r,s.state=w,s.context=b,r=q):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(a.flags|=1024),r=!1)}return s=r,Li(e,a),r=(a.flags&128)!==0,s||r?(s=a.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:s.render(),a.flags|=1,e!==null&&r?(a.child=en(a,e.child,null,i),a.child=en(a,null,n,i)):ra(e,a,n,i),a.memoizedState=s.state,e=a.child):e=rt(e,a,i),e}function Od(e,a,n,r){return Qt(),a.flags|=256,ra(e,a,n,r),a.child}var Il={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jl(e){return{baseLanes:e,cachePool:yu()}}function Fl(e,a,n){return e=e!==null?e.childLanes&~n:0,a&&(e|=Ea),e}function Dd(e,a,n){var r=a.pendingProps,i=!1,s=(a.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),o&&(i=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,e===null){if(je){if(i?Ct(a):Tt(),(e=Be)?(e=km(e,La),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:bt!==null?{id:Ha,overflow:Ia}:null,retryLane:536870912,hydrationErrors:null},n=uu(e),n.return=a,a.child=n,ta=a,Be=null)):e=null,e===null)throw vt(a);return Ao(e)?a.lanes=32:a.lanes=536870912,null}var m=r.children;return r=r.fallback,i?(Tt(),i=a.mode,m=Ui({mode:"hidden",children:m},i),r=Yt(r,i,n,null),m.return=a,r.return=a,m.sibling=r,a.child=m,r=a.child,r.memoizedState=Jl(n),r.childLanes=Fl(e,o,n),a.memoizedState=Il,vr(null,r)):(Ct(a),Vl(a,m))}var b=e.memoizedState;if(b!==null&&(m=b.dehydrated,m!==null)){if(s)a.flags&256?(Ct(a),a.flags&=-257,a=Gl(e,a,n)):a.memoizedState!==null?(Tt(),a.child=e.child,a.flags|=128,a=null):(Tt(),m=r.fallback,i=a.mode,r=Ui({mode:"visible",children:r.children},i),m=Yt(m,i,n,null),m.flags|=2,r.return=a,m.return=a,r.sibling=m,a.child=r,en(a,e.child,null,n),r=a.child,r.memoizedState=Jl(n),r.childLanes=Fl(e,o,n),a.memoizedState=Il,a=vr(null,r));else if(Ct(a),Ao(m)){if(o=m.nextSibling&&m.nextSibling.dataset,o)var O=o.dgst;o=O,r=Error(u(419)),r.stack="",r.digest=o,or({value:r,source:null,stack:null}),a=Gl(e,a,n)}else if(Qe||Nn(e,a,n,!1),o=(n&e.childLanes)!==0,Qe||o){if(o=ze,o!==null&&(r=hc(o,n),r!==0&&r!==b.retryLane))throw b.retryLane=r,Gt(e,r),fa(o,e,r),Pl;To(m)||Ji(),a=Gl(e,a,n)}else To(m)?(a.flags|=192,a.child=e.child,a=null):(e=b.treeContext,Be=za(m.nextSibling),ta=a,je=!0,yt=null,La=!1,e!==null&&pu(a,e),a=Vl(a,r.children),a.flags|=4096);return a}return i?(Tt(),m=r.fallback,i=a.mode,b=e.child,O=b.sibling,r=$a(b,{mode:"hidden",children:r.children}),r.subtreeFlags=b.subtreeFlags&65011712,O!==null?m=$a(O,m):(m=Yt(m,i,n,null),m.flags|=2),m.return=a,r.return=a,r.sibling=m,a.child=r,vr(null,r),r=a.child,m=e.child.memoizedState,m===null?m=Jl(n):(i=m.cachePool,i!==null?(b=Ge._currentValue,i=i.parent!==b?{parent:b,pool:b}:i):i=yu(),m={baseLanes:m.baseLanes|n,cachePool:i}),r.memoizedState=m,r.childLanes=Fl(e,o,n),a.memoizedState=Il,vr(e.child,r)):(Ct(a),n=e.child,e=n.sibling,n=$a(n,{mode:"visible",children:r.children}),n.return=a,n.sibling=null,e!==null&&(o=a.deletions,o===null?(a.deletions=[e],a.flags|=16):o.push(e)),a.child=n,a.memoizedState=null,n)}function Vl(e,a){return a=Ui({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Ui(e,a){return e=va(22,e,null,a),e.lanes=0,e}function Gl(e,a,n){return en(a,e.child,null,n),e=Vl(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function wd(e,a,n){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a),ll(e.return,a,n)}function Yl(e,a,n,r,i,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:s}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=s)}function Ld(e,a,n){var r=a.pendingProps,i=r.revealOrder,s=r.tail;r=r.children;var o=Fe.current,m=(o&2)!==0;if(m?(o=o&1|2,a.flags|=128):o&=1,Y(Fe,o),ra(e,a,r,n),r=je?lr:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wd(e,n,a);else if(e.tag===19)wd(e,n,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=a.child,i=null;n!==null;)e=n.alternate,e!==null&&Si(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=a.child,a.child=null):(i=n.sibling,n.sibling=null),Yl(a,!1,i,n,s,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=a.child,a.child=null;i!==null;){if(e=i.alternate,e!==null&&Si(e)===null){a.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Yl(a,!0,n,null,s,r);break;case"together":Yl(a,!1,null,null,void 0,r);break;default:a.memoizedState=null}return a.child}function rt(e,a,n){if(e!==null&&(a.dependencies=e.dependencies),Mt|=a.lanes,(n&a.childLanes)===0)if(e!==null){if(Nn(e,a,n,!1),(n&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(u(153));if(a.child!==null){for(e=a.child,n=$a(e,e.pendingProps),a.child=n,n.return=a;e.sibling!==null;)e=e.sibling,n=n.sibling=$a(e,e.pendingProps),n.return=a;n.sibling=null}return a.child}function Ql(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&fi(e)))}function Fx(e,a,n){switch(a.tag){case 3:ea(a,a.stateNode.containerInfo),jt(a,Ge,e.memoizedState.cache),Qt();break;case 27:case 5:Gn(a);break;case 4:ea(a,a.stateNode.containerInfo);break;case 10:jt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,yl(a),null;break;case 13:var r=a.memoizedState;if(r!==null)return r.dehydrated!==null?(Ct(a),a.flags|=128,null):(n&a.child.childLanes)!==0?Dd(e,a,n):(Ct(a),e=rt(e,a,n),e!==null?e.sibling:null);Ct(a);break;case 19:var i=(e.flags&128)!==0;if(r=(n&a.childLanes)!==0,r||(Nn(e,a,n,!1),r=(n&a.childLanes)!==0),i){if(r)return Ld(e,a,n);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(Fe,Fe.current),r)break;return null;case 22:return a.lanes=0,Cd(e,a,n,a.pendingProps);case 24:jt(a,Ge,e.memoizedState.cache)}return rt(e,a,n)}function Ud(e,a,n){if(e!==null)if(e.memoizedProps!==a.pendingProps)Qe=!0;else{if(!Ql(e,n)&&(a.flags&128)===0)return Qe=!1,Fx(e,a,n);Qe=(e.flags&131072)!==0}else Qe=!1,je&&(a.flags&1048576)!==0&&mu(a,lr,a.index);switch(a.lanes=0,a.tag){case 16:e:{var r=a.pendingProps;if(e=$t(a.elementType),a.type=e,typeof e=="function")Ws(e)?(r=tn(e,r),a.tag=1,a=Md(null,a,e,r,n)):(a.tag=0,a=Hl(null,a,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===$){a.tag=11,a=Sd(null,a,e,r,n);break e}else if(i===X){a.tag=14,a=Nd(null,a,e,r,n);break e}}throw a=Re(e)||e,Error(u(306,a,""))}}return a;case 0:return Hl(e,a,a.type,a.pendingProps,n);case 1:return r=a.type,i=tn(r,a.pendingProps),Md(e,a,r,i,n);case 3:e:{if(ea(a,a.stateNode.containerInfo),e===null)throw Error(u(387));r=a.pendingProps;var s=a.memoizedState;i=s.element,fl(e,a),xr(a,r,null,n);var o=a.memoizedState;if(r=o.cache,jt(a,Ge,r),r!==s.cache&&ol(a,[Ge],n,!0),fr(),r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=s,a.memoizedState=s,a.flags&256){a=Od(e,a,r,n);break e}else if(r!==i){i=Oa(Error(u(424)),a),or(i),a=Od(e,a,r,n);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Be=za(e.firstChild),ta=a,je=!0,yt=null,La=!0,n=Cu(a,null,r,n),a.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qt(),r===i){a=rt(e,a,n);break e}ra(e,a,r,n)}a=a.child}return a;case 26:return Li(e,a),e===null?(n=Vm(a.type,null,a.pendingProps,null))?a.memoizedState=n:je||(n=a.type,e=a.pendingProps,r=Zi(de.current).createElement(n),r[aa]=a,r[oa]=e,ia(r,n,e),$e(r),a.stateNode=r):a.memoizedState=Vm(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Gn(a),e===null&&je&&(r=a.stateNode=Im(a.type,a.pendingProps,de.current),ta=a,La=!0,i=Be,Ut(a.type)?(Ro=i,Be=za(r.firstChild)):Be=i),ra(e,a,a.pendingProps.children,n),Li(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&je&&((i=r=Be)&&(r=vg(r,a.type,a.pendingProps,La),r!==null?(a.stateNode=r,ta=a,Be=za(r.firstChild),La=!1,i=!0):i=!1),i||vt(a)),Gn(a),i=a.type,s=a.pendingProps,o=e!==null?e.memoizedProps:null,r=s.children,No(i,s)?r=null:o!==null&&No(i,o)&&(a.flags|=32),a.memoizedState!==null&&(i=jl(e,a,zx,null,null,n),zr._currentValue=i),Li(e,a),ra(e,a,r,n),a.child;case 6:return e===null&&je&&((e=n=Be)&&(n=jg(n,a.pendingProps,La),n!==null?(a.stateNode=n,ta=a,Be=null,e=!0):e=!1),e||vt(a)),null;case 13:return Dd(e,a,n);case 4:return ea(a,a.stateNode.containerInfo),r=a.pendingProps,e===null?a.child=en(a,null,r,n):ra(e,a,r,n),a.child;case 11:return Sd(e,a,a.type,a.pendingProps,n);case 7:return ra(e,a,a.pendingProps,n),a.child;case 8:return ra(e,a,a.pendingProps.children,n),a.child;case 12:return ra(e,a,a.pendingProps.children,n),a.child;case 10:return r=a.pendingProps,jt(a,a.type,r.value),ra(e,a,r.children,n),a.child;case 9:return i=a.type._context,r=a.pendingProps.children,Zt(a),i=na(i),r=r(i),a.flags|=1,ra(e,a,r,n),a.child;case 14:return Nd(e,a,a.type,a.pendingProps,n);case 15:return Ed(e,a,a.type,a.pendingProps,n);case 19:return Ld(e,a,n);case 31:return Jx(e,a,n);case 22:return Cd(e,a,n,a.pendingProps);case 24:return Zt(a),r=na(Ge),e===null?(i=dl(),i===null&&(i=ze,s=cl(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=n),i=s),a.memoizedState={parent:r,cache:i},pl(a),jt(a,Ge,i)):((e.lanes&n)!==0&&(fl(e,a),xr(a,null,null,n),fr()),i=e.memoizedState,s=a.memoizedState,i.parent!==r?(i={parent:r,cache:r},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),jt(a,Ge,r)):(r=s.cache,jt(a,Ge,r),r!==i.cache&&ol(a,[Ge],n,!0))),ra(e,a,a.pendingProps.children,n),a.child;case 29:throw a.pendingProps}throw Error(u(156,a.tag))}function it(e){e.flags|=4}function Xl(e,a,n,r,i){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(lm())e.flags|=8192;else throw Wt=bi,ml}else e.flags&=-16777217}function zd(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zm(a))if(lm())e.flags|=8192;else throw Wt=bi,ml}function zi(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?fc():536870912,e.lanes|=a,zn|=a)}function jr(e,a){if(!je)switch(e.tailMode){case"hidden":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var a=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(a)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,a}function Vx(e,a,n){var r=a.pendingProps;switch(nl(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(a),null;case 1:return _e(a),null;case 3:return n=a.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),at(Ge),qe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Sn(a)?it(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,il())),_e(a),null;case 26:var i=a.type,s=a.memoizedState;return e===null?(it(a),s!==null?(_e(a),zd(a,s)):(_e(a),Xl(a,i,null,r,n))):s?s!==e.memoizedState?(it(a),_e(a),zd(a,s)):(_e(a),a.flags&=-16777217):(e=e.memoizedProps,e!==r&&it(a),_e(a),Xl(a,i,e,r,n)),null;case 27:if(Gr(a),n=de.current,i=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==r&&it(a);else{if(!r){if(a.stateNode===null)throw Error(u(166));return _e(a),null}e=Q.current,Sn(a)?fu(a):(e=Im(i,r,n),a.stateNode=e,it(a))}return _e(a),null;case 5:if(Gr(a),i=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==r&&it(a);else{if(!r){if(a.stateNode===null)throw Error(u(166));return _e(a),null}if(s=Q.current,Sn(a))fu(a);else{var o=Zi(de.current);switch(s){case 1:s=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=o.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof r.is=="string"?o.createElement("select",{is:r.is}):o.createElement("select"),r.multiple?s.multiple=!0:r.size&&(s.size=r.size);break;default:s=typeof r.is=="string"?o.createElement(i,{is:r.is}):o.createElement(i)}}s[aa]=a,s[oa]=r;e:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)s.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break e;for(;o.sibling===null;){if(o.return===null||o.return===a)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=s;e:switch(ia(s,i,r),i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&it(a)}}return _e(a),Xl(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,n),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==r&&it(a);else{if(typeof r!="string"&&a.stateNode===null)throw Error(u(166));if(e=de.current,Sn(a)){if(e=a.stateNode,n=a.memoizedProps,r=null,i=ta,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[aa]=a,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||Dm(e.nodeValue,n)),e||vt(a,!0)}else e=Zi(e).createTextNode(r),e[aa]=a,a.stateNode=e}return _e(a),null;case 31:if(n=a.memoizedState,e===null||e.memoizedState!==null){if(r=Sn(a),n!==null){if(e===null){if(!r)throw Error(u(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[aa]=a}else Qt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;_e(a),e=!1}else n=il(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return a.flags&256?(Sa(a),a):(Sa(a),null);if((a.flags&128)!==0)throw Error(u(558))}return _e(a),null;case 13:if(r=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Sn(a),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[aa]=a}else Qt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;_e(a),i=!1}else i=il(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(Sa(a),a):(Sa(a),null)}return Sa(a),(a.flags&128)!==0?(a.lanes=n,a):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=a.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),s=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==i&&(r.flags|=2048)),n!==e&&n&&(a.child.flags|=8192),zi(a,a.updateQueue),_e(a),null);case 4:return qe(),e===null&&bo(a.stateNode.containerInfo),_e(a),null;case 10:return at(a.type),_e(a),null;case 19:if(P(Fe),r=a.memoizedState,r===null)return _e(a),null;if(i=(a.flags&128)!==0,s=r.rendering,s===null)if(i)jr(r,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(s=Si(e),s!==null){for(a.flags|=128,jr(r,!1),e=s.updateQueue,a.updateQueue=e,zi(a,e),a.subtreeFlags=0,e=n,n=a.child;n!==null;)cu(n,e),n=n.sibling;return Y(Fe,Fe.current&1|2),je&&Wa(a,r.treeForkCount),a.child}e=e.sibling}r.tail!==null&&ga()>Pi&&(a.flags|=128,i=!0,jr(r,!1),a.lanes=4194304)}else{if(!i)if(e=Si(s),e!==null){if(a.flags|=128,i=!0,e=e.updateQueue,a.updateQueue=e,zi(a,e),jr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!je)return _e(a),null}else 2*ga()-r.renderingStartTime>Pi&&n!==536870912&&(a.flags|=128,i=!0,jr(r,!1),a.lanes=4194304);r.isBackwards?(s.sibling=a.child,a.child=s):(e=r.last,e!==null?e.sibling=s:a.child=s,r.last=s)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ga(),e.sibling=null,n=Fe.current,Y(Fe,i?n&1|2:n&1),je&&Wa(a,r.treeForkCount),e):(_e(a),null);case 22:case 23:return Sa(a),bl(),r=a.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(a.flags|=8192):r&&(a.flags|=8192),r?(n&536870912)!==0&&(a.flags&128)===0&&(_e(a),a.subtreeFlags&6&&(a.flags|=8192)):_e(a),n=a.updateQueue,n!==null&&zi(a,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==n&&(a.flags|=2048),e!==null&&P(Kt),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),at(Ge),_e(a),null;case 25:return null;case 30:return null}throw Error(u(156,a.tag))}function Gx(e,a){switch(nl(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return at(Ge),qe(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Gr(a),null;case 31:if(a.memoizedState!==null){if(Sa(a),a.alternate===null)throw Error(u(340));Qt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(Sa(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(u(340));Qt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return P(Fe),null;case 4:return qe(),null;case 10:return at(a.type),null;case 22:case 23:return Sa(a),bl(),e!==null&&P(Kt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return at(Ge),null;case 25:return null;default:return null}}function qd(e,a){switch(nl(a),a.tag){case 3:at(Ge),qe();break;case 26:case 27:case 5:Gr(a);break;case 4:qe();break;case 31:a.memoizedState!==null&&Sa(a);break;case 13:Sa(a);break;case 19:P(Fe);break;case 10:at(a.type);break;case 22:case 23:Sa(a),bl(),e!==null&&P(Kt);break;case 24:at(Ge)}}function Sr(e,a){try{var n=a.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var s=n.create,o=n.inst;r=s(),o.destroy=r}n=n.next}while(n!==i)}}catch(m){Oe(a,a.return,m)}}function At(e,a,n){try{var r=a.updateQueue,i=r!==null?r.lastEffect:null;if(i!==null){var s=i.next;r=s;do{if((r.tag&e)===e){var o=r.inst,m=o.destroy;if(m!==void 0){o.destroy=void 0,i=a;var b=n,O=m;try{O()}catch(q){Oe(i,b,q)}}}r=r.next}while(r!==s)}}catch(q){Oe(a,a.return,q)}}function Bd(e){var a=e.updateQueue;if(a!==null){var n=e.stateNode;try{Au(a,n)}catch(r){Oe(e,e.return,r)}}}function _d(e,a,n){n.props=tn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Oe(e,a,r)}}function Nr(e,a){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(i){Oe(e,a,i)}}function Ja(e,a){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(i){Oe(e,a,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Oe(e,a,i)}else n.current=null}function kd(e){var a=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){Oe(e,e.return,i)}}function Zl(e,a,n){try{var r=e.stateNode;fg(r,e.type,n,a),r[oa]=a}catch(i){Oe(e,e.return,i)}}function Pd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ut(e.type)||e.tag===4}function Kl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ut(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $l(e,a,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,a?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,a):(a=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.appendChild(e),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=Za));else if(r!==4&&(r===27&&Ut(e.type)&&(n=e.stateNode,a=null),e=e.child,e!==null))for($l(e,a,n),e=e.sibling;e!==null;)$l(e,a,n),e=e.sibling}function qi(e,a,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,a?n.insertBefore(e,a):n.appendChild(e);else if(r!==4&&(r===27&&Ut(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(qi(e,a,n),e=e.sibling;e!==null;)qi(e,a,n),e=e.sibling}function Hd(e){var a=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);ia(a,r,n),a[aa]=e,a[oa]=n}catch(s){Oe(e,e.return,s)}}var st=!1,Xe=!1,Wl=!1,Id=typeof WeakSet=="function"?WeakSet:Set,We=null;function Yx(e,a){if(e=e.containerInfo,jo=ns,e=eu(e),Gs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,m=-1,b=-1,O=0,q=0,H=e,D=null;a:for(;;){for(var w;H!==n||i!==0&&H.nodeType!==3||(m=o+i),H!==s||r!==0&&H.nodeType!==3||(b=o+r),H.nodeType===3&&(o+=H.nodeValue.length),(w=H.firstChild)!==null;)D=H,H=w;for(;;){if(H===e)break a;if(D===n&&++O===i&&(m=o),D===s&&++q===r&&(b=o),(w=H.nextSibling)!==null)break;H=D,D=H.parentNode}H=w}n=m===-1||b===-1?null:{start:m,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(So={focusedElem:e,selectionRange:n},ns=!1,We=a;We!==null;)if(a=We,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,We=e;else for(;We!==null;){switch(a=We,s=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=a,i=s.memoizedProps,s=s.memoizedState,r=n.stateNode;try{var Z=tn(n.type,i);e=r.getSnapshotBeforeUpdate(Z,s),r.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Oe(n,n.return,ie)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,n=e.nodeType,n===9)Co(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Co(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=a.sibling,e!==null){e.return=a.return,We=e;break}We=a.return}}function Jd(e,a,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:ot(e,n),r&4&&Sr(5,n);break;case 1:if(ot(e,n),r&4)if(e=n.stateNode,a===null)try{e.componentDidMount()}catch(o){Oe(n,n.return,o)}else{var i=tn(n.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(i,a,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Oe(n,n.return,o)}}r&64&&Bd(n),r&512&&Nr(n,n.return);break;case 3:if(ot(e,n),r&64&&(e=n.updateQueue,e!==null)){if(a=null,n.child!==null)switch(n.child.tag){case 27:case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}try{Au(e,a)}catch(o){Oe(n,n.return,o)}}break;case 27:a===null&&r&4&&Hd(n);case 26:case 5:ot(e,n),a===null&&r&4&&kd(n),r&512&&Nr(n,n.return);break;case 12:ot(e,n);break;case 31:ot(e,n),r&4&&Gd(e,n);break;case 13:ot(e,n),r&4&&Yd(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=tg.bind(null,n),Sg(e,n))));break;case 22:if(r=n.memoizedState!==null||st,!r){a=a!==null&&a.memoizedState!==null||Xe,i=st;var s=Xe;st=r,(Xe=a)&&!s?ct(e,n,(n.subtreeFlags&8772)!==0):ot(e,n),st=i,Xe=s}break;case 30:break;default:ot(e,n)}}function Fd(e){var a=e.alternate;a!==null&&(e.alternate=null,Fd(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Ms(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,ua=!1;function lt(e,a,n){for(n=n.child;n!==null;)Vd(e,a,n),n=n.sibling}function Vd(e,a,n){if(ha&&typeof ha.onCommitFiberUnmount=="function")try{ha.onCommitFiberUnmount(Yn,n)}catch{}switch(n.tag){case 26:Xe||Ja(n,a),lt(e,a,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xe||Ja(n,a);var r=ke,i=ua;Ut(n.type)&&(ke=n.stateNode,ua=!1),lt(e,a,n),wr(n.stateNode),ke=r,ua=i;break;case 5:Xe||Ja(n,a);case 6:if(r=ke,i=ua,ke=null,lt(e,a,n),ke=r,ua=i,ke!==null)if(ua)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(n.stateNode)}catch(s){Oe(n,a,s)}else try{ke.removeChild(n.stateNode)}catch(s){Oe(n,a,s)}break;case 18:ke!==null&&(ua?(e=ke,Bm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Jn(e)):Bm(ke,n.stateNode));break;case 4:r=ke,i=ua,ke=n.stateNode.containerInfo,ua=!0,lt(e,a,n),ke=r,ua=i;break;case 0:case 11:case 14:case 15:At(2,n,a),Xe||At(4,n,a),lt(e,a,n);break;case 1:Xe||(Ja(n,a),r=n.stateNode,typeof r.componentWillUnmount=="function"&&_d(n,a,r)),lt(e,a,n);break;case 21:lt(e,a,n);break;case 22:Xe=(r=Xe)||n.memoizedState!==null,lt(e,a,n),Xe=r;break;default:lt(e,a,n)}}function Gd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Jn(e)}catch(n){Oe(a,a.return,n)}}}function Yd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jn(e)}catch(n){Oe(a,a.return,n)}}function Qx(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Id),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Id),a;default:throw Error(u(435,e.tag))}}function Bi(e,a){var n=Qx(e);a.forEach(function(r){if(!n.has(r)){n.add(r);var i=ng.bind(null,e,r);r.then(i,i)}})}function da(e,a){var n=a.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],s=e,o=a,m=o;e:for(;m!==null;){switch(m.tag){case 27:if(Ut(m.type)){ke=m.stateNode,ua=!1;break e}break;case 5:ke=m.stateNode,ua=!1;break e;case 3:case 4:ke=m.stateNode.containerInfo,ua=!0;break e}m=m.return}if(ke===null)throw Error(u(160));Vd(s,o,i),ke=null,ua=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Qd(a,e),a=a.sibling}var ka=null;function Qd(e,a){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:da(a,e),ma(e),r&4&&(At(3,e,e.return),Sr(3,e),At(5,e,e.return));break;case 1:da(a,e),ma(e),r&512&&(Xe||n===null||Ja(n,n.return)),r&64&&st&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=ka;if(da(a,e),ma(e),r&512&&(Xe||n===null||Ja(n,n.return)),r&4){var s=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;a:switch(r){case"title":s=i.getElementsByTagName("title")[0],(!s||s[Zn]||s[aa]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(r),i.head.insertBefore(s,i.querySelector("head > title"))),ia(s,r,n),s[aa]=e,$e(s),r=s;break e;case"link":var o=Qm("link","href",i).get(r+(n.href||""));if(o){for(var m=0;m<o.length;m++)if(s=o[m],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(m,1);break a}}s=i.createElement(r),ia(s,r,n),i.head.appendChild(s);break;case"meta":if(o=Qm("meta","content",i).get(r+(n.content||""))){for(m=0;m<o.length;m++)if(s=o[m],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(m,1);break a}}s=i.createElement(r),ia(s,r,n),i.head.appendChild(s);break;default:throw Error(u(468,r))}s[aa]=e,$e(s),r=s}e.stateNode=r}else Xm(i,e.type,e.stateNode);else e.stateNode=Ym(i,r,e.memoizedProps);else s!==r?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,r===null?Xm(i,e.type,e.stateNode):Ym(i,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Zl(e,e.memoizedProps,n.memoizedProps)}break;case 27:da(a,e),ma(e),r&512&&(Xe||n===null||Ja(n,n.return)),n!==null&&r&4&&Zl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(da(a,e),ma(e),r&512&&(Xe||n===null||Ja(n,n.return)),e.flags&32){i=e.stateNode;try{mn(i,"")}catch(Z){Oe(e,e.return,Z)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Zl(e,i,n!==null?n.memoizedProps:i)),r&1024&&(Wl=!0);break;case 6:if(da(a,e),ma(e),r&4){if(e.stateNode===null)throw Error(u(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(Z){Oe(e,e.return,Z)}}break;case 3:if(Wi=null,i=ka,ka=Ki(a.containerInfo),da(a,e),ka=i,ma(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jn(a.containerInfo)}catch(Z){Oe(e,e.return,Z)}Wl&&(Wl=!1,Xd(e));break;case 4:r=ka,ka=Ki(e.stateNode.containerInfo),da(a,e),ma(e),ka=r;break;case 12:da(a,e),ma(e);break;case 31:da(a,e),ma(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Bi(e,r)));break;case 13:da(a,e),ma(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ki=ga()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Bi(e,r)));break;case 22:i=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,O=st,q=Xe;if(st=O||i,Xe=q||b,da(a,e),Xe=q,st=O,ma(e),r&8192)e:for(a=e.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(n===null||b||st||Xe||nn(e)),n=null,a=e;;){if(a.tag===5||a.tag===26){if(n===null){b=n=a;try{if(s=b.stateNode,i)o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{m=b.stateNode;var H=b.memoizedProps.style,D=H!=null&&H.hasOwnProperty("display")?H.display:null;m.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(Z){Oe(b,b.return,Z)}}}else if(a.tag===6){if(n===null){b=a;try{b.stateNode.nodeValue=i?"":b.memoizedProps}catch(Z){Oe(b,b.return,Z)}}}else if(a.tag===18){if(n===null){b=a;try{var w=b.stateNode;i?_m(w,!0):_m(b.stateNode,!1)}catch(Z){Oe(b,b.return,Z)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;n===a&&(n=null),a=a.return}n===a&&(n=null),a.sibling.return=a.return,a=a.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Bi(e,n))));break;case 19:da(a,e),ma(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Bi(e,r)));break;case 30:break;case 21:break;default:da(a,e),ma(e)}}function ma(e){var a=e.flags;if(a&2){try{for(var n,r=e.return;r!==null;){if(Pd(r)){n=r;break}r=r.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var i=n.stateNode,s=Kl(e);qi(e,s,i);break;case 5:var o=n.stateNode;n.flags&32&&(mn(o,""),n.flags&=-33);var m=Kl(e);qi(e,m,o);break;case 3:case 4:var b=n.stateNode.containerInfo,O=Kl(e);$l(e,O,b);break;default:throw Error(u(161))}}catch(q){Oe(e,e.return,q)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Xd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Xd(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function ot(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Jd(e,a.alternate,a),a=a.sibling}function nn(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:At(4,a,a.return),nn(a);break;case 1:Ja(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&_d(a,a.return,n),nn(a);break;case 27:wr(a.stateNode);case 26:case 5:Ja(a,a.return),nn(a);break;case 22:a.memoizedState===null&&nn(a);break;case 30:nn(a);break;default:nn(a)}e=e.sibling}}function ct(e,a,n){for(n=n&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var r=a.alternate,i=e,s=a,o=s.flags;switch(s.tag){case 0:case 11:case 15:ct(i,s,n),Sr(4,s);break;case 1:if(ct(i,s,n),r=s,i=r.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(O){Oe(r,r.return,O)}if(r=s,i=r.updateQueue,i!==null){var m=r.stateNode;try{var b=i.shared.hiddenCallbacks;if(b!==null)for(i.shared.hiddenCallbacks=null,i=0;i<b.length;i++)Tu(b[i],m)}catch(O){Oe(r,r.return,O)}}n&&o&64&&Bd(s),Nr(s,s.return);break;case 27:Hd(s);case 26:case 5:ct(i,s,n),n&&r===null&&o&4&&kd(s),Nr(s,s.return);break;case 12:ct(i,s,n);break;case 31:ct(i,s,n),n&&o&4&&Gd(i,s);break;case 13:ct(i,s,n),n&&o&4&&Yd(i,s);break;case 22:s.memoizedState===null&&ct(i,s,n),Nr(s,s.return);break;case 30:break;default:ct(i,s,n)}a=a.sibling}}function eo(e,a){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&cr(n))}function ao(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&cr(e))}function Pa(e,a,n,r){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Zd(e,a,n,r),a=a.sibling}function Zd(e,a,n,r){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Pa(e,a,n,r),i&2048&&Sr(9,a);break;case 1:Pa(e,a,n,r);break;case 3:Pa(e,a,n,r),i&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&cr(e)));break;case 12:if(i&2048){Pa(e,a,n,r),e=a.stateNode;try{var s=a.memoizedProps,o=s.id,m=s.onPostCommit;typeof m=="function"&&m(o,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Oe(a,a.return,b)}}else Pa(e,a,n,r);break;case 31:Pa(e,a,n,r);break;case 13:Pa(e,a,n,r);break;case 23:break;case 22:s=a.stateNode,o=a.alternate,a.memoizedState!==null?s._visibility&2?Pa(e,a,n,r):Er(e,a):s._visibility&2?Pa(e,a,n,r):(s._visibility|=2,wn(e,a,n,r,(a.subtreeFlags&10256)!==0||!1)),i&2048&&eo(o,a);break;case 24:Pa(e,a,n,r),i&2048&&ao(a.alternate,a);break;default:Pa(e,a,n,r)}}function wn(e,a,n,r,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var s=e,o=a,m=n,b=r,O=o.flags;switch(o.tag){case 0:case 11:case 15:wn(s,o,m,b,i),Sr(8,o);break;case 23:break;case 22:var q=o.stateNode;o.memoizedState!==null?q._visibility&2?wn(s,o,m,b,i):Er(s,o):(q._visibility|=2,wn(s,o,m,b,i)),i&&O&2048&&eo(o.alternate,o);break;case 24:wn(s,o,m,b,i),i&&O&2048&&ao(o.alternate,o);break;default:wn(s,o,m,b,i)}a=a.sibling}}function Er(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var n=e,r=a,i=r.flags;switch(r.tag){case 22:Er(n,r),i&2048&&eo(r.alternate,r);break;case 24:Er(n,r),i&2048&&ao(r.alternate,r);break;default:Er(n,r)}a=a.sibling}}var Cr=8192;function Ln(e,a,n){if(e.subtreeFlags&Cr)for(e=e.child;e!==null;)Kd(e,a,n),e=e.sibling}function Kd(e,a,n){switch(e.tag){case 26:Ln(e,a,n),e.flags&Cr&&e.memoizedState!==null&&Ug(n,ka,e.memoizedState,e.memoizedProps);break;case 5:Ln(e,a,n);break;case 3:case 4:var r=ka;ka=Ki(e.stateNode.containerInfo),Ln(e,a,n),ka=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Cr,Cr=16777216,Ln(e,a,n),Cr=r):Ln(e,a,n));break;default:Ln(e,a,n)}}function $d(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Tr(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var r=a[n];We=r,em(r,e)}$d(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wd(e),e=e.sibling}function Wd(e){switch(e.tag){case 0:case 11:case 15:Tr(e),e.flags&2048&&At(9,e,e.return);break;case 3:Tr(e);break;case 12:Tr(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,_i(e)):Tr(e);break;default:Tr(e)}}function _i(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var r=a[n];We=r,em(r,e)}$d(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:At(8,a,a.return),_i(a);break;case 22:n=a.stateNode,n._visibility&2&&(n._visibility&=-3,_i(a));break;default:_i(a)}e=e.sibling}}function em(e,a){for(;We!==null;){var n=We;switch(n.tag){case 0:case 11:case 15:At(8,n,a);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:cr(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,We=r;else e:for(n=e;We!==null;){r=We;var i=r.sibling,s=r.return;if(Fd(r),r===n){We=null;break e}if(i!==null){i.return=s,We=i;break e}We=s}}}var Xx={getCacheForType:function(e){var a=na(Ge),n=a.data.get(e);return n===void 0&&(n=e(),a.data.set(e,n)),n},cacheSignal:function(){return na(Ge).controller.signal}},Zx=typeof WeakMap=="function"?WeakMap:Map,Te=0,ze=null,xe=null,be=0,Me=0,Na=null,Rt=!1,Un=!1,to=!1,ut=0,Je=0,Mt=0,rn=0,no=0,Ea=0,zn=0,Ar=null,pa=null,ro=!1,ki=0,am=0,Pi=1/0,Hi=null,Ot=null,Ke=0,Dt=null,qn=null,dt=0,io=0,so=null,tm=null,Rr=0,lo=null;function Ca(){return(Te&2)!==0&&be!==0?be&-be:U.T!==null?fo():bc()}function nm(){if(Ea===0)if((be&536870912)===0||je){var e=Xr;Xr<<=1,(Xr&3932160)===0&&(Xr=262144),Ea=e}else Ea=536870912;return e=ja.current,e!==null&&(e.flags|=32),Ea}function fa(e,a,n){(e===ze&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(Bn(e,0),wt(e,be,Ea,!1)),Xn(e,n),((Te&2)===0||e!==ze)&&(e===ze&&((Te&2)===0&&(rn|=n),Je===4&&wt(e,be,Ea,!1)),Fa(e))}function rm(e,a,n){if((Te&6)!==0)throw Error(u(327));var r=!n&&(a&127)===0&&(a&e.expiredLanes)===0||Qn(e,a),i=r?Wx(e,a):co(e,a,!0),s=r;do{if(i===0){Un&&!r&&wt(e,a,0,!1);break}else{if(n=e.current.alternate,s&&!Kx(n)){i=co(e,a,!1),s=!1;continue}if(i===2){if(s=a,e.errorRecoveryDisabledLanes&s)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;e:{var m=e;i=Ar;var b=m.current.memoizedState.isDehydrated;if(b&&(Bn(m,o).flags|=256),o=co(m,o,!1),o!==2){if(to&&!b){m.errorRecoveryDisabledLanes|=s,rn|=s,i=4;break e}s=pa,pa=i,s!==null&&(pa===null?pa=s:pa.push.apply(pa,s))}i=o}if(s=!1,i!==2)continue}}if(i===1){Bn(e,0),wt(e,a,0,!0);break}e:{switch(r=e,s=i,s){case 0:case 1:throw Error(u(345));case 4:if((a&4194048)!==a)break;case 6:wt(r,a,Ea,!Rt);break e;case 2:pa=null;break;case 3:case 5:break;default:throw Error(u(329))}if((a&62914560)===a&&(i=ki+300-ga(),10<i)){if(wt(r,a,Ea,!Rt),Kr(r,0,!0)!==0)break e;dt=a,r.timeoutHandle=zm(im.bind(null,r,n,pa,Hi,ro,a,Ea,rn,zn,Rt,s,"Throttled",-0,0),i);break e}im(r,n,pa,Hi,ro,a,Ea,rn,zn,Rt,s,null,-0,0)}}break}while(!0);Fa(e)}function im(e,a,n,r,i,s,o,m,b,O,q,H,D,w){if(e.timeoutHandle=-1,H=a.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Za},Kd(a,s,H);var Z=(s&62914560)===s?ki-ga():(s&4194048)===s?am-ga():0;if(Z=zg(H,Z),Z!==null){dt=s,e.cancelPendingCommit=Z(pm.bind(null,e,a,s,n,r,i,o,m,b,q,H,null,D,w)),wt(e,s,o,!O);return}}pm(e,a,s,n,r,i,o,m,b)}function Kx(e){for(var a=e;;){var n=a.tag;if((n===0||n===11||n===15)&&a.flags&16384&&(n=a.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ya(s(),i))return!1}catch{return!1}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function wt(e,a,n,r){a&=~no,a&=~rn,e.suspendedLanes|=a,e.pingedLanes&=~a,r&&(e.warmLanes|=a),r=e.expirationTimes;for(var i=a;0<i;){var s=31-ba(i),o=1<<s;r[s]=-1,i&=~o}n!==0&&xc(e,n,a)}function Ii(){return(Te&6)===0?(Mr(0),!1):!0}function oo(){if(xe!==null){if(Me===0)var e=xe.return;else e=xe,et=Xt=null,El(e),An=null,dr=0,e=xe;for(;e!==null;)qd(e.alternate,e),e=e.return;xe=null}}function Bn(e,a){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,hg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),dt=0,oo(),ze=e,xe=n=$a(e.current,null),be=a,Me=0,Na=null,Rt=!1,Un=Qn(e,a),to=!1,zn=Ea=no=rn=Mt=Je=0,pa=Ar=null,ro=!1,(a&8)!==0&&(a|=a&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=a;0<r;){var i=31-ba(r),s=1<<i;a|=e[i],r&=~s}return ut=a,ci(),n}function sm(e,a){ue=null,U.H=yr,a===Tn||a===hi?(a=Su(),Me=3):a===ml?(a=Su(),Me=4):Me=a===Pl?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Na=a,xe===null&&(Je=1,Di(e,Oa(a,e.current)))}function lm(){var e=ja.current;return e===null?!0:(be&4194048)===be?Ua===null:(be&62914560)===be||(be&536870912)!==0?e===Ua:!1}function om(){var e=U.H;return U.H=yr,e===null?yr:e}function cm(){var e=U.A;return U.A=Xx,e}function Ji(){Je=4,Rt||(be&4194048)!==be&&ja.current!==null||(Un=!0),(Mt&134217727)===0&&(rn&134217727)===0||ze===null||wt(ze,be,Ea,!1)}function co(e,a,n){var r=Te;Te|=2;var i=om(),s=cm();(ze!==e||be!==a)&&(Hi=null,Bn(e,a)),a=!1;var o=Je;e:do try{if(Me!==0&&xe!==null){var m=xe,b=Na;switch(Me){case 8:oo(),o=6;break e;case 3:case 2:case 9:case 6:ja.current===null&&(a=!0);var O=Me;if(Me=0,Na=null,_n(e,m,b,O),n&&Un){o=0;break e}break;default:O=Me,Me=0,Na=null,_n(e,m,b,O)}}$x(),o=Je;break}catch(q){sm(e,q)}while(!0);return a&&e.shellSuspendCounter++,et=Xt=null,Te=r,U.H=i,U.A=s,xe===null&&(ze=null,be=0,ci()),o}function $x(){for(;xe!==null;)um(xe)}function Wx(e,a){var n=Te;Te|=2;var r=om(),i=cm();ze!==e||be!==a?(Hi=null,Pi=ga()+500,Bn(e,a)):Un=Qn(e,a);e:do try{if(Me!==0&&xe!==null){a=xe;var s=Na;a:switch(Me){case 1:Me=0,Na=null,_n(e,a,s,1);break;case 2:case 9:if(vu(s)){Me=0,Na=null,dm(a);break}a=function(){Me!==2&&Me!==9||ze!==e||(Me=7),Fa(e)},s.then(a,a);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:vu(s)?(Me=0,Na=null,dm(a)):(Me=0,Na=null,_n(e,a,s,7));break;case 5:var o=null;switch(xe.tag){case 26:o=xe.memoizedState;case 5:case 27:var m=xe;if(o?Zm(o):m.stateNode.complete){Me=0,Na=null;var b=m.sibling;if(b!==null)xe=b;else{var O=m.return;O!==null?(xe=O,Fi(O)):xe=null}break a}}Me=0,Na=null,_n(e,a,s,5);break;case 6:Me=0,Na=null,_n(e,a,s,6);break;case 8:oo(),Je=6;break e;default:throw Error(u(462))}}eg();break}catch(q){sm(e,q)}while(!0);return et=Xt=null,U.H=r,U.A=i,Te=n,xe!==null?0:(ze=null,be=0,ci(),Je)}function eg(){for(;xe!==null&&!Nf();)um(xe)}function um(e){var a=Ud(e.alternate,e,ut);e.memoizedProps=e.pendingProps,a===null?Fi(e):xe=a}function dm(e){var a=e,n=a.alternate;switch(a.tag){case 15:case 0:a=Rd(n,a,a.pendingProps,a.type,void 0,be);break;case 11:a=Rd(n,a,a.pendingProps,a.type.render,a.ref,be);break;case 5:El(a);default:qd(n,a),a=xe=cu(a,ut),a=Ud(n,a,ut)}e.memoizedProps=e.pendingProps,a===null?Fi(e):xe=a}function _n(e,a,n,r){et=Xt=null,El(a),An=null,dr=0;var i=a.return;try{if(Ix(e,i,a,n,be)){Je=1,Di(e,Oa(n,e.current)),xe=null;return}}catch(s){if(i!==null)throw xe=i,s;Je=1,Di(e,Oa(n,e.current)),xe=null;return}a.flags&32768?(je||r===1?e=!0:Un||(be&536870912)!==0?e=!1:(Rt=e=!0,(r===2||r===9||r===3||r===6)&&(r=ja.current,r!==null&&r.tag===13&&(r.flags|=16384))),mm(a,e)):Fi(a)}function Fi(e){var a=e;do{if((a.flags&32768)!==0){mm(a,Rt);return}e=a.return;var n=Vx(a.alternate,a,ut);if(n!==null){xe=n;return}if(a=a.sibling,a!==null){xe=a;return}xe=a=e}while(a!==null);Je===0&&(Je=5)}function mm(e,a){do{var n=Gx(e.alternate,e);if(n!==null){n.flags&=32767,xe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!a&&(e=e.sibling,e!==null)){xe=e;return}xe=e=n}while(e!==null);Je=6,xe=null}function pm(e,a,n,r,i,s,o,m,b){e.cancelPendingCommit=null;do Vi();while(Ke!==0);if((Te&6)!==0)throw Error(u(327));if(a!==null){if(a===e.current)throw Error(u(177));if(s=a.lanes|a.childLanes,s|=Ks,Lf(e,n,s,o,m,b),e===ze&&(xe=ze=null,be=0),qn=a,Dt=e,dt=n,io=s,so=i,tm=r,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rg(Yr,function(){return bm(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||r){r=U.T,U.T=null,i=G.p,G.p=2,o=Te,Te|=4;try{Yx(e,a,n)}finally{Te=o,G.p=i,U.T=r}}Ke=1,fm(),xm(),gm()}}function fm(){if(Ke===1){Ke=0;var e=Dt,a=qn,n=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||n){n=U.T,U.T=null;var r=G.p;G.p=2;var i=Te;Te|=4;try{Qd(a,e);var s=So,o=eu(e.containerInfo),m=s.focusedElem,b=s.selectionRange;if(o!==m&&m&&m.ownerDocument&&Wc(m.ownerDocument.documentElement,m)){if(b!==null&&Gs(m)){var O=b.start,q=b.end;if(q===void 0&&(q=O),"selectionStart"in m)m.selectionStart=O,m.selectionEnd=Math.min(q,m.value.length);else{var H=m.ownerDocument||document,D=H&&H.defaultView||window;if(D.getSelection){var w=D.getSelection(),Z=m.textContent.length,ie=Math.min(b.start,Z),Le=b.end===void 0?ie:Math.min(b.end,Z);!w.extend&&ie>Le&&(o=Le,Le=ie,ie=o);var C=$c(m,ie),v=$c(m,Le);if(C&&v&&(w.rangeCount!==1||w.anchorNode!==C.node||w.anchorOffset!==C.offset||w.focusNode!==v.node||w.focusOffset!==v.offset)){var M=H.createRange();M.setStart(C.node,C.offset),w.removeAllRanges(),ie>Le?(w.addRange(M),w.extend(v.node,v.offset)):(M.setEnd(v.node,v.offset),w.addRange(M))}}}}for(H=[],w=m;w=w.parentNode;)w.nodeType===1&&H.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<H.length;m++){var _=H[m];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}ns=!!jo,So=jo=null}finally{Te=i,G.p=r,U.T=n}}e.current=a,Ke=2}}function xm(){if(Ke===2){Ke=0;var e=Dt,a=qn,n=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||n){n=U.T,U.T=null;var r=G.p;G.p=2;var i=Te;Te|=4;try{Jd(e,a.alternate,a)}finally{Te=i,G.p=r,U.T=n}}Ke=3}}function gm(){if(Ke===4||Ke===3){Ke=0,Ef();var e=Dt,a=qn,n=dt,r=tm;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Ke=5:(Ke=0,qn=Dt=null,hm(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ot=null),As(n),a=a.stateNode,ha&&typeof ha.onCommitFiberRoot=="function")try{ha.onCommitFiberRoot(Yn,a,void 0,(a.current.flags&128)===128)}catch{}if(r!==null){a=U.T,i=G.p,G.p=2,U.T=null;try{for(var s=e.onRecoverableError,o=0;o<r.length;o++){var m=r[o];s(m.value,{componentStack:m.stack})}}finally{U.T=a,G.p=i}}(dt&3)!==0&&Vi(),Fa(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===lo?Rr++:(Rr=0,lo=e):Rr=0,Mr(0)}}function hm(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,cr(a)))}function Vi(){return fm(),xm(),gm(),bm()}function bm(){if(Ke!==5)return!1;var e=Dt,a=io;io=0;var n=As(dt),r=U.T,i=G.p;try{G.p=32>n?32:n,U.T=null,n=so,so=null;var s=Dt,o=dt;if(Ke=0,qn=Dt=null,dt=0,(Te&6)!==0)throw Error(u(331));var m=Te;if(Te|=4,Wd(s.current),Zd(s,s.current,o,n),Te=m,Mr(0,!1),ha&&typeof ha.onPostCommitFiberRoot=="function")try{ha.onPostCommitFiberRoot(Yn,s)}catch{}return!0}finally{G.p=i,U.T=r,hm(e,a)}}function ym(e,a,n){a=Oa(n,a),a=kl(e.stateNode,a,2),e=Et(e,a,2),e!==null&&(Xn(e,2),Fa(e))}function Oe(e,a,n){if(e.tag===3)ym(e,e,n);else for(;a!==null;){if(a.tag===3){ym(a,e,n);break}else if(a.tag===1){var r=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Oa(n,e),n=vd(2),r=Et(a,n,2),r!==null&&(jd(n,r,a,e),Xn(r,2),Fa(r));break}}a=a.return}}function uo(e,a,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zx;var i=new Set;r.set(a,i)}else i=r.get(a),i===void 0&&(i=new Set,r.set(a,i));i.has(n)||(to=!0,i.add(n),e=ag.bind(null,e,a,n),a.then(e,e))}function ag(e,a,n){var r=e.pingCache;r!==null&&r.delete(a),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ze===e&&(be&n)===n&&(Je===4||Je===3&&(be&62914560)===be&&300>ga()-ki?(Te&2)===0&&Bn(e,0):no|=n,zn===be&&(zn=0)),Fa(e)}function vm(e,a){a===0&&(a=fc()),e=Gt(e,a),e!==null&&(Xn(e,a),Fa(e))}function tg(e){var a=e.memoizedState,n=0;a!==null&&(n=a.retryLane),vm(e,n)}function ng(e,a){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(u(314))}r!==null&&r.delete(a),vm(e,n)}function rg(e,a){return Ns(e,a)}var Gi=null,kn=null,mo=!1,Yi=!1,po=!1,Lt=0;function Fa(e){e!==kn&&e.next===null&&(kn===null?Gi=kn=e:kn=kn.next=e),Yi=!0,mo||(mo=!0,sg())}function Mr(e,a){if(!po&&Yi){po=!0;do for(var n=!1,r=Gi;r!==null;){if(e!==0){var i=r.pendingLanes;if(i===0)var s=0;else{var o=r.suspendedLanes,m=r.pingedLanes;s=(1<<31-ba(42|e)+1)-1,s&=i&~(o&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Em(r,s))}else s=be,s=Kr(r,r===ze?s:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(s&3)===0||Qn(r,s)||(n=!0,Em(r,s));r=r.next}while(n);po=!1}}function ig(){jm()}function jm(){Yi=mo=!1;var e=0;Lt!==0&&gg()&&(e=Lt);for(var a=ga(),n=null,r=Gi;r!==null;){var i=r.next,s=Sm(r,a);s===0?(r.next=null,n===null?Gi=i:n.next=i,i===null&&(kn=n)):(n=r,(e!==0||(s&3)!==0)&&(Yi=!0)),r=i}Ke!==0&&Ke!==5||Mr(e),Lt!==0&&(Lt=0)}function Sm(e,a){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var o=31-ba(s),m=1<<o,b=i[o];b===-1?((m&n)===0||(m&r)!==0)&&(i[o]=wf(m,a)):b<=a&&(e.expiredLanes|=m),s&=~m}if(a=ze,n=be,n=Kr(e,e===a?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===a&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Es(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Qn(e,n)){if(a=n&-n,a===e.callbackPriority)return a;switch(r!==null&&Es(r),As(n)){case 2:case 8:n=mc;break;case 32:n=Yr;break;case 268435456:n=pc;break;default:n=Yr}return r=Nm.bind(null,e),n=Ns(n,r),e.callbackPriority=a,e.callbackNode=n,a}return r!==null&&r!==null&&Es(r),e.callbackPriority=2,e.callbackNode=null,2}function Nm(e,a){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vi()&&e.callbackNode!==n)return null;var r=be;return r=Kr(e,e===ze?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(rm(e,r,a),Sm(e,ga()),e.callbackNode!=null&&e.callbackNode===n?Nm.bind(null,e):null)}function Em(e,a){if(Vi())return null;rm(e,a,!0)}function sg(){bg(function(){(Te&6)!==0?Ns(dc,ig):jm()})}function fo(){if(Lt===0){var e=En;e===0&&(e=Qr,Qr<<=1,(Qr&261888)===0&&(Qr=256)),Lt=e}return Lt}function Cm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ai(""+e)}function Tm(e,a){var n=a.ownerDocument.createElement("input");return n.name=a.name,n.value=a.value,e.id&&n.setAttribute("form",e.id),a.parentNode.insertBefore(n,a),e=new FormData(e),n.parentNode.removeChild(n),e}function lg(e,a,n,r,i){if(a==="submit"&&n&&n.stateNode===i){var s=Cm((i[oa]||null).action),o=r.submitter;o&&(a=(a=o[oa]||null)?Cm(a.formAction):o.getAttribute("formAction"),a!==null&&(s=a,o=null));var m=new ii("action","action",null,r,i);e.push({event:m,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Lt!==0){var b=o?Tm(i,o):new FormData(i);Ll(n,{pending:!0,data:b,method:i.method,action:s},null,b)}}else typeof s=="function"&&(m.preventDefault(),b=o?Tm(i,o):new FormData(i),Ll(n,{pending:!0,data:b,method:i.method,action:s},s,b))},currentTarget:i}]})}}for(var xo=0;xo<Zs.length;xo++){var go=Zs[xo],og=go.toLowerCase(),cg=go[0].toUpperCase()+go.slice(1);_a(og,"on"+cg)}_a(nu,"onAnimationEnd"),_a(ru,"onAnimationIteration"),_a(iu,"onAnimationStart"),_a("dblclick","onDoubleClick"),_a("focusin","onFocus"),_a("focusout","onBlur"),_a(Cx,"onTransitionRun"),_a(Tx,"onTransitionStart"),_a(Ax,"onTransitionCancel"),_a(su,"onTransitionEnd"),un("onMouseEnter",["mouseout","mouseover"]),un("onMouseLeave",["mouseout","mouseover"]),un("onPointerEnter",["pointerout","pointerover"]),un("onPointerLeave",["pointerout","pointerover"]),It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),It("onBeforeInput",["compositionend","keypress","textInput","paste"]),It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ug=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Or));function Am(e,a){a=(a&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(a)for(var o=r.length-1;0<=o;o--){var m=r[o],b=m.instance,O=m.currentTarget;if(m=m.listener,b!==s&&i.isPropagationStopped())break e;s=m,i.currentTarget=O;try{s(i)}catch(q){oi(q)}i.currentTarget=null,s=b}else for(o=0;o<r.length;o++){if(m=r[o],b=m.instance,O=m.currentTarget,m=m.listener,b!==s&&i.isPropagationStopped())break e;s=m,i.currentTarget=O;try{s(i)}catch(q){oi(q)}i.currentTarget=null,s=b}}}}function ge(e,a){var n=a[Rs];n===void 0&&(n=a[Rs]=new Set);var r=e+"__bubble";n.has(r)||(Rm(a,e,2,!1),n.add(r))}function ho(e,a,n){var r=0;a&&(r|=4),Rm(n,e,r,a)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function bo(e){if(!e[Qi]){e[Qi]=!0,jc.forEach(function(n){n!=="selectionchange"&&(ug.has(n)||ho(n,!1,e),ho(n,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Qi]||(a[Qi]=!0,ho("selectionchange",!1,a))}}function Rm(e,a,n,r){switch(np(a)){case 2:var i=_g;break;case 8:i=kg;break;default:i=Lo}n=i.bind(null,a,n,e),i=void 0,!Bs||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(a,n,{capture:!0,passive:i}):e.addEventListener(a,n,!0):i!==void 0?e.addEventListener(a,n,{passive:i}):e.addEventListener(a,n,!1)}function yo(e,a,n,r,i){var s=r;if((a&1)===0&&(a&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var m=r.stateNode.containerInfo;if(m===i)break;if(o===4)for(o=r.return;o!==null;){var b=o.tag;if((b===3||b===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;m!==null;){if(o=ln(m),o===null)return;if(b=o.tag,b===5||b===6||b===26||b===27){r=s=o;continue e}m=m.parentNode}}r=r.return}Lc(function(){var O=s,q=zs(n),H=[];e:{var D=lu.get(e);if(D!==void 0){var w=ii,Z=e;switch(e){case"keypress":if(ni(n)===0)break e;case"keydown":case"keyup":w=nx;break;case"focusin":Z="focus",w=Hs;break;case"focusout":Z="blur",w=Hs;break;case"beforeblur":case"afterblur":w=Hs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Vf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=sx;break;case nu:case ru:case iu:w=Qf;break;case su:w=ox;break;case"scroll":case"scrollend":w=Jf;break;case"wheel":w=ux;break;case"copy":case"cut":case"paste":w=Zf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=_c;break;case"toggle":case"beforetoggle":w=mx}var ie=(a&4)!==0,Le=!ie&&(e==="scroll"||e==="scrollend"),C=ie?D!==null?D+"Capture":null:D;ie=[];for(var v=O,M;v!==null;){var _=v;if(M=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||M===null||C===null||(_=$n(v,C),_!=null&&ie.push(Dr(v,_,M))),Le)break;v=v.return}0<ie.length&&(D=new w(D,Z,null,n,q),H.push({event:D,listeners:ie}))}}if((a&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",D&&n!==Us&&(Z=n.relatedTarget||n.fromElement)&&(ln(Z)||Z[sn]))break e;if((w||D)&&(D=q.window===q?q:(D=q.ownerDocument)?D.defaultView||D.parentWindow:window,w?(Z=n.relatedTarget||n.toElement,w=O,Z=Z?ln(Z):null,Z!==null&&(Le=x(Z),ie=Z.tag,Z!==Le||ie!==5&&ie!==27&&ie!==6)&&(Z=null)):(w=null,Z=O),w!==Z)){if(ie=qc,_="onMouseLeave",C="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(ie=_c,_="onPointerLeave",C="onPointerEnter",v="pointer"),Le=w==null?D:Kn(w),M=Z==null?D:Kn(Z),D=new ie(_,v+"leave",w,n,q),D.target=Le,D.relatedTarget=M,_=null,ln(q)===O&&(ie=new ie(C,v+"enter",Z,n,q),ie.target=M,ie.relatedTarget=Le,_=ie),Le=_,w&&Z)a:{for(ie=dg,C=w,v=Z,M=0,_=C;_;_=ie(_))M++;_=0;for(var te=v;te;te=ie(te))_++;for(;0<M-_;)C=ie(C),M--;for(;0<_-M;)v=ie(v),_--;for(;M--;){if(C===v||v!==null&&C===v.alternate){ie=C;break a}C=ie(C),v=ie(v)}ie=null}else ie=null;w!==null&&Mm(H,D,w,ie,!1),Z!==null&&Le!==null&&Mm(H,Le,Z,ie,!0)}}e:{if(D=O?Kn(O):window,w=D.nodeName&&D.nodeName.toLowerCase(),w==="select"||w==="input"&&D.type==="file")var Se=Gc;else if(Fc(D))if(Yc)Se=Sx;else{Se=vx;var W=yx}else w=D.nodeName,!w||w.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?O&&Ls(O.elementType)&&(Se=Gc):Se=jx;if(Se&&(Se=Se(e,O))){Vc(H,Se,n,q);break e}W&&W(e,D,O),e==="focusout"&&O&&D.type==="number"&&O.memoizedProps.value!=null&&ws(D,"number",D.value)}switch(W=O?Kn(O):window,e){case"focusin":(Fc(W)||W.contentEditable==="true")&&(gn=W,Ys=O,sr=null);break;case"focusout":sr=Ys=gn=null;break;case"mousedown":Qs=!0;break;case"contextmenu":case"mouseup":case"dragend":Qs=!1,au(H,n,q);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":au(H,n,q)}var me;if(Js)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else xn?Ic(e,n)&&(ye="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ye="onCompositionStart");ye&&(kc&&n.locale!=="ko"&&(xn||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&xn&&(me=Uc()):(ht=q,_s="value"in ht?ht.value:ht.textContent,xn=!0)),W=Xi(O,ye),0<W.length&&(ye=new Bc(ye,e,null,n,q),H.push({event:ye,listeners:W}),me?ye.data=me:(me=Jc(n),me!==null&&(ye.data=me)))),(me=fx?xx(e,n):gx(e,n))&&(ye=Xi(O,"onBeforeInput"),0<ye.length&&(W=new Bc("onBeforeInput","beforeinput",null,n,q),H.push({event:W,listeners:ye}),W.data=me)),lg(H,e,O,n,q)}Am(H,a)})}function Dr(e,a,n){return{instance:e,listener:a,currentTarget:n}}function Xi(e,a){for(var n=a+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=$n(e,n),i!=null&&r.unshift(Dr(e,i,s)),i=$n(e,a),i!=null&&r.push(Dr(e,i,s))),e.tag===3)return r;e=e.return}return[]}function dg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mm(e,a,n,r,i){for(var s=a._reactName,o=[];n!==null&&n!==r;){var m=n,b=m.alternate,O=m.stateNode;if(m=m.tag,b!==null&&b===r)break;m!==5&&m!==26&&m!==27||O===null||(b=O,i?(O=$n(n,s),O!=null&&o.unshift(Dr(n,O,b))):i||(O=$n(n,s),O!=null&&o.push(Dr(n,O,b)))),n=n.return}o.length!==0&&e.push({event:a,listeners:o})}var mg=/\r\n?/g,pg=/\u0000|\uFFFD/g;function Om(e){return(typeof e=="string"?e:""+e).replace(mg,`
`).replace(pg,"")}function Dm(e,a){return a=Om(a),Om(e)===a}function we(e,a,n,r,i,s){switch(n){case"children":typeof r=="string"?a==="body"||a==="textarea"&&r===""||mn(e,r):(typeof r=="number"||typeof r=="bigint")&&a!=="body"&&mn(e,""+r);break;case"className":Wr(e,"class",r);break;case"tabIndex":Wr(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Wr(e,n,r);break;case"style":Dc(e,r,s);break;case"data":if(a!=="object"){Wr(e,"data",r);break}case"src":case"href":if(r===""&&(a!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=ai(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(a!=="input"&&we(e,a,"name",i.name,i,null),we(e,a,"formEncType",i.formEncType,i,null),we(e,a,"formMethod",i.formMethod,i,null),we(e,a,"formTarget",i.formTarget,i,null)):(we(e,a,"encType",i.encType,i,null),we(e,a,"method",i.method,i,null),we(e,a,"target",i.target,i,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=ai(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=Za);break;case"onScroll":r!=null&&ge("scroll",e);break;case"onScrollEnd":r!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(u(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=ai(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":ge("beforetoggle",e),ge("toggle",e),$r(e,"popover",r);break;case"xlinkActuate":Xa(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Xa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Xa(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Xa(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Xa(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Xa(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Xa(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Xa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Xa(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":$r(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Hf.get(n)||n,$r(e,n,r))}}function vo(e,a,n,r,i,s){switch(n){case"style":Dc(e,r,s);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(u(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof r=="string"?mn(e,r):(typeof r=="number"||typeof r=="bigint")&&mn(e,""+r);break;case"onScroll":r!=null&&ge("scroll",e);break;case"onScrollEnd":r!=null&&ge("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Za);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),a=n.slice(2,i?n.length-7:void 0),s=e[oa]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(a,s,i),typeof r=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,r,i);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):$r(e,n,r)}}}function ia(e,a,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var r=!1,i=!1,s;for(s in n)if(n.hasOwnProperty(s)){var o=n[s];if(o!=null)switch(s){case"src":r=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:we(e,a,s,o,n,null)}}i&&we(e,a,"srcSet",n.srcSet,n,null),r&&we(e,a,"src",n.src,n,null);return;case"input":ge("invalid",e);var m=s=o=i=null,b=null,O=null;for(r in n)if(n.hasOwnProperty(r)){var q=n[r];if(q!=null)switch(r){case"name":i=q;break;case"type":o=q;break;case"checked":b=q;break;case"defaultChecked":O=q;break;case"value":s=q;break;case"defaultValue":m=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(u(137,a));break;default:we(e,a,r,q,n,null)}}Ac(e,s,m,b,O,o,i,!1);return;case"select":ge("invalid",e),r=o=s=null;for(i in n)if(n.hasOwnProperty(i)&&(m=n[i],m!=null))switch(i){case"value":s=m;break;case"defaultValue":o=m;break;case"multiple":r=m;default:we(e,a,i,m,n,null)}a=s,n=o,e.multiple=!!r,a!=null?dn(e,!!r,a,!1):n!=null&&dn(e,!!r,n,!0);return;case"textarea":ge("invalid",e),s=i=r=null;for(o in n)if(n.hasOwnProperty(o)&&(m=n[o],m!=null))switch(o){case"value":r=m;break;case"defaultValue":i=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(u(91));break;default:we(e,a,o,m,n,null)}Mc(e,r,i,s);return;case"option":for(b in n)n.hasOwnProperty(b)&&(r=n[b],r!=null)&&(b==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":we(e,a,b,r,n,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(r=0;r<Or.length;r++)ge(Or[r],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(r=n[O],r!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:we(e,a,O,r,n,null)}return;default:if(Ls(a)){for(q in n)n.hasOwnProperty(q)&&(r=n[q],r!==void 0&&vo(e,a,q,r,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(r=n[m],r!=null&&we(e,a,m,r,n,null))}function fg(e,a,n,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,o=null,m=null,b=null,O=null,q=null;for(w in n){var H=n[w];if(n.hasOwnProperty(w)&&H!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":b=H;default:r.hasOwnProperty(w)||we(e,a,w,null,r,H)}}for(var D in r){var w=r[D];if(H=n[D],r.hasOwnProperty(D)&&(w!=null||H!=null))switch(D){case"type":s=w;break;case"name":i=w;break;case"checked":O=w;break;case"defaultChecked":q=w;break;case"value":o=w;break;case"defaultValue":m=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(137,a));break;default:w!==H&&we(e,a,D,w,r,H)}}Ds(e,o,m,b,O,q,s,i);return;case"select":w=o=m=D=null;for(s in n)if(b=n[s],n.hasOwnProperty(s)&&b!=null)switch(s){case"value":break;case"multiple":w=b;default:r.hasOwnProperty(s)||we(e,a,s,null,r,b)}for(i in r)if(s=r[i],b=n[i],r.hasOwnProperty(i)&&(s!=null||b!=null))switch(i){case"value":D=s;break;case"defaultValue":m=s;break;case"multiple":o=s;default:s!==b&&we(e,a,i,s,r,b)}a=m,n=o,r=w,D!=null?dn(e,!!n,D,!1):!!r!=!!n&&(a!=null?dn(e,!!n,a,!0):dn(e,!!n,n?[]:"",!1));return;case"textarea":w=D=null;for(m in n)if(i=n[m],n.hasOwnProperty(m)&&i!=null&&!r.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:we(e,a,m,null,r,i)}for(o in r)if(i=r[o],s=n[o],r.hasOwnProperty(o)&&(i!=null||s!=null))switch(o){case"value":D=i;break;case"defaultValue":w=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==s&&we(e,a,o,i,r,s)}Rc(e,D,w);return;case"option":for(var Z in n)D=n[Z],n.hasOwnProperty(Z)&&D!=null&&!r.hasOwnProperty(Z)&&(Z==="selected"?e.selected=!1:we(e,a,Z,null,r,D));for(b in r)D=r[b],w=n[b],r.hasOwnProperty(b)&&D!==w&&(D!=null||w!=null)&&(b==="selected"?e.selected=D&&typeof D!="function"&&typeof D!="symbol":we(e,a,b,D,r,w));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in n)D=n[ie],n.hasOwnProperty(ie)&&D!=null&&!r.hasOwnProperty(ie)&&we(e,a,ie,null,r,D);for(O in r)if(D=r[O],w=n[O],r.hasOwnProperty(O)&&D!==w&&(D!=null||w!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,a));break;default:we(e,a,O,D,r,w)}return;default:if(Ls(a)){for(var Le in n)D=n[Le],n.hasOwnProperty(Le)&&D!==void 0&&!r.hasOwnProperty(Le)&&vo(e,a,Le,void 0,r,D);for(q in r)D=r[q],w=n[q],!r.hasOwnProperty(q)||D===w||D===void 0&&w===void 0||vo(e,a,q,D,r,w);return}}for(var C in n)D=n[C],n.hasOwnProperty(C)&&D!=null&&!r.hasOwnProperty(C)&&we(e,a,C,null,r,D);for(H in r)D=r[H],w=n[H],!r.hasOwnProperty(H)||D===w||D==null&&w==null||we(e,a,H,D,r,w)}function wm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var i=n[r],s=i.transferSize,o=i.initiatorType,m=i.duration;if(s&&m&&wm(o)){for(o=0,m=i.responseEnd,r+=1;r<n.length;r++){var b=n[r],O=b.startTime;if(O>m)break;var q=b.transferSize,H=b.initiatorType;q&&wm(H)&&(b=b.responseEnd,o+=q*(b<m?1:(m-O)/(b-O)))}if(--r,a+=8*(s+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jo=null,So=null;function Zi(e){return e.nodeType===9?e:e.ownerDocument}function Lm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Um(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function No(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Eo=null;function gg(){var e=window.event;return e&&e.type==="popstate"?e===Eo?!1:(Eo=e,!0):(Eo=null,!1)}var zm=typeof setTimeout=="function"?setTimeout:void 0,hg=typeof clearTimeout=="function"?clearTimeout:void 0,qm=typeof Promise=="function"?Promise:void 0,bg=typeof queueMicrotask=="function"?queueMicrotask:typeof qm<"u"?function(e){return qm.resolve(null).then(e).catch(yg)}:zm;function yg(e){setTimeout(function(){throw e})}function Ut(e){return e==="head"}function Bm(e,a){var n=a,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(r===0){e.removeChild(i),Jn(a);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")wr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,wr(n);for(var s=n.firstChild;s;){var o=s.nextSibling,m=s.nodeName;s[Zn]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=o}}else n==="body"&&wr(e.ownerDocument.body);n=i}while(n);Jn(a)}function _m(e,a){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?a?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(a?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=r}while(n)}function Co(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var n=a;switch(a=a.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Co(n),Ms(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function vg(e,a,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Zn])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=za(e.nextSibling),e===null)break}return null}function jg(e,a,n){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=za(e.nextSibling),e===null))return null;return e}function km(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=za(e.nextSibling),e===null))return null;return e}function To(e){return e.data==="$?"||e.data==="$~"}function Ao(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Sg(e,a){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||n.readyState!=="loading")a();else{var r=function(){a(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function za(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Ro=null;function Pm(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(a===0)return za(e.nextSibling);a--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||a++}e=e.nextSibling}return null}function Hm(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(a===0)return e;a--}else n!=="/$"&&n!=="/&"||a++}e=e.previousSibling}return null}function Im(e,a,n){switch(a=Zi(n),e){case"html":if(e=a.documentElement,!e)throw Error(u(452));return e;case"head":if(e=a.head,!e)throw Error(u(453));return e;case"body":if(e=a.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function wr(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Ms(e)}var qa=new Map,Jm=new Set;function Ki(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var mt=G.d;G.d={f:Ng,r:Eg,D:Cg,C:Tg,L:Ag,m:Rg,X:Og,S:Mg,M:Dg};function Ng(){var e=mt.f(),a=Ii();return e||a}function Eg(e){var a=on(e);a!==null&&a.tag===5&&a.type==="form"?sd(a):mt.r(e)}var Pn=typeof document>"u"?null:document;function Fm(e,a,n){var r=Pn;if(r&&typeof a=="string"&&a){var i=Ra(a);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Jm.has(i)||(Jm.add(i),e={rel:e,crossOrigin:n,href:a},r.querySelector(i)===null&&(a=r.createElement("link"),ia(a,"link",e),$e(a),r.head.appendChild(a)))}}function Cg(e){mt.D(e),Fm("dns-prefetch",e,null)}function Tg(e,a){mt.C(e,a),Fm("preconnect",e,a)}function Ag(e,a,n){mt.L(e,a,n);var r=Pn;if(r&&e&&a){var i='link[rel="preload"][as="'+Ra(a)+'"]';a==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Ra(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Ra(n.imageSizes)+'"]')):i+='[href="'+Ra(e)+'"]';var s=i;switch(a){case"style":s=Hn(e);break;case"script":s=In(e)}qa.has(s)||(e=y({rel:"preload",href:a==="image"&&n&&n.imageSrcSet?void 0:e,as:a},n),qa.set(s,e),r.querySelector(i)!==null||a==="style"&&r.querySelector(Lr(s))||a==="script"&&r.querySelector(Ur(s))||(a=r.createElement("link"),ia(a,"link",e),$e(a),r.head.appendChild(a)))}}function Rg(e,a){mt.m(e,a);var n=Pn;if(n&&e){var r=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+Ra(r)+'"][href="'+Ra(e)+'"]',s=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=In(e)}if(!qa.has(s)&&(e=y({rel:"modulepreload",href:e},a),qa.set(s,e),n.querySelector(i)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ur(s)))return}r=n.createElement("link"),ia(r,"link",e),$e(r),n.head.appendChild(r)}}}function Mg(e,a,n){mt.S(e,a,n);var r=Pn;if(r&&e){var i=cn(r).hoistableStyles,s=Hn(e);a=a||"default";var o=i.get(s);if(!o){var m={loading:0,preload:null};if(o=r.querySelector(Lr(s)))m.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":a},n),(n=qa.get(s))&&Mo(e,n);var b=o=r.createElement("link");$e(b),ia(b,"link",e),b._p=new Promise(function(O,q){b.onload=O,b.onerror=q}),b.addEventListener("load",function(){m.loading|=1}),b.addEventListener("error",function(){m.loading|=2}),m.loading|=4,$i(o,a,r)}o={type:"stylesheet",instance:o,count:1,state:m},i.set(s,o)}}}function Og(e,a){mt.X(e,a);var n=Pn;if(n&&e){var r=cn(n).hoistableScripts,i=In(e),s=r.get(i);s||(s=n.querySelector(Ur(i)),s||(e=y({src:e,async:!0},a),(a=qa.get(i))&&Oo(e,a),s=n.createElement("script"),$e(s),ia(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(i,s))}}function Dg(e,a){mt.M(e,a);var n=Pn;if(n&&e){var r=cn(n).hoistableScripts,i=In(e),s=r.get(i);s||(s=n.querySelector(Ur(i)),s||(e=y({src:e,async:!0,type:"module"},a),(a=qa.get(i))&&Oo(e,a),s=n.createElement("script"),$e(s),ia(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(i,s))}}function Vm(e,a,n,r){var i=(i=de.current)?Ki(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(a=Hn(n.href),n=cn(i).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Hn(n.href);var s=cn(i).hoistableStyles,o=s.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,o),(s=i.querySelector(Lr(e)))&&!s._p&&(o.instance=s,o.state.loading=5),qa.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},qa.set(e,n),s||wg(i,e,n,o.state))),a&&r===null)throw Error(u(528,""));return o}if(a&&r!==null)throw Error(u(529,""));return null;case"script":return a=n.async,n=n.src,typeof n=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=In(n),n=cn(i).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Hn(e){return'href="'+Ra(e)+'"'}function Lr(e){return'link[rel="stylesheet"]['+e+"]"}function Gm(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function wg(e,a,n,r){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?r.loading=1:(a=e.createElement("link"),r.preload=a,a.addEventListener("load",function(){return r.loading|=1}),a.addEventListener("error",function(){return r.loading|=2}),ia(a,"link",n),$e(a),e.head.appendChild(a))}function In(e){return'[src="'+Ra(e)+'"]'}function Ur(e){return"script[async]"+e}function Ym(e,a,n){if(a.count++,a.instance===null)switch(a.type){case"style":var r=e.querySelector('style[data-href~="'+Ra(n.href)+'"]');if(r)return a.instance=r,$e(r),r;var i=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),$e(r),ia(r,"style",i),$i(r,n.precedence,e),a.instance=r;case"stylesheet":i=Hn(n.href);var s=e.querySelector(Lr(i));if(s)return a.state.loading|=4,a.instance=s,$e(s),s;r=Gm(n),(i=qa.get(i))&&Mo(r,i),s=(e.ownerDocument||e).createElement("link"),$e(s);var o=s;return o._p=new Promise(function(m,b){o.onload=m,o.onerror=b}),ia(s,"link",r),a.state.loading|=4,$i(s,n.precedence,e),a.instance=s;case"script":return s=In(n.src),(i=e.querySelector(Ur(s)))?(a.instance=i,$e(i),i):(r=n,(i=qa.get(s))&&(r=y({},n),Oo(r,i)),e=e.ownerDocument||e,i=e.createElement("script"),$e(i),ia(i,"link",r),e.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(u(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(r=a.instance,a.state.loading|=4,$i(r,n.precedence,e));return a.instance}function $i(e,a,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,s=i,o=0;o<r.length;o++){var m=r[o];if(m.dataset.precedence===a)s=m;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(a=n.nodeType===9?n.head:n,a.insertBefore(e,a.firstChild))}function Mo(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Oo(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Wi=null;function Qm(e,a,n){if(Wi===null){var r=new Map,i=Wi=new Map;i.set(n,r)}else i=Wi,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var s=n[i];if(!(s[Zn]||s[aa]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var o=s.getAttribute(a)||"";o=e+o;var m=r.get(o);m?m.push(s):r.set(o,[s])}}return r}function Xm(e,a,n){e=e.ownerDocument||e,e.head.insertBefore(n,a==="title"?e.querySelector("head > title"):null)}function Lg(e,a,n){if(n===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Zm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ug(e,a,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=Hn(r.href),s=a.querySelector(Lr(i));if(s){a=s._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=es.bind(e),a.then(e,e)),n.state.loading|=4,n.instance=s,$e(s);return}s=a.ownerDocument||a,r=Gm(r),(i=qa.get(i))&&Mo(r,i),s=s.createElement("link"),$e(s);var o=s;o._p=new Promise(function(m,b){o.onload=m,o.onerror=b}),ia(s,"link",r),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,a),(a=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=es.bind(e),a.addEventListener("load",n),a.addEventListener("error",n))}}var Do=0;function zg(e,a){return e.stylesheets&&e.count===0&&ts(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ts(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+a);0<e.imgBytes&&Do===0&&(Do=62500*xg());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ts(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Do?50:800)+a);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function es(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ts(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var as=null;function ts(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,as=new Map,a.forEach(qg,e),as=null,es.call(e))}function qg(e,a){if(!(a.state.loading&4)){var n=as.get(e);if(n)var r=n.get(null);else{n=new Map,as.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var o=i[s];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=a.instance,o=i.getAttribute("data-precedence"),s=n.get(o)||r,s===r&&n.set(null,i),n.set(o,i),this.count++,r=es.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),a.state.loading|=4}}var zr={$$typeof:I,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function Bg(e,a,n,r,i,s,o,m,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Cs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cs(0),this.hiddenUpdates=Cs(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Km(e,a,n,r,i,s,o,m,b,O,q,H){return e=new Bg(e,a,n,o,b,O,q,H,m),a=1,s===!0&&(a|=24),s=va(3,null,null,a),e.current=s,s.stateNode=e,a=cl(),a.refCount++,e.pooledCache=a,a.refCount++,s.memoizedState={element:r,isDehydrated:n,cache:a},pl(s),e}function $m(e){return e?(e=yn,e):yn}function Wm(e,a,n,r,i,s){i=$m(i),r.context===null?r.context=i:r.pendingContext=i,r=Nt(a),r.payload={element:n},s=s===void 0?null:s,s!==null&&(r.callback=s),n=Et(e,r,a),n!==null&&(fa(n,e,a),pr(n,e,a))}function ep(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<a?n:a}}function wo(e,a){ep(e,a),(e=e.alternate)&&ep(e,a)}function ap(e){if(e.tag===13||e.tag===31){var a=Gt(e,67108864);a!==null&&fa(a,e,67108864),wo(e,67108864)}}function tp(e){if(e.tag===13||e.tag===31){var a=Ca();a=Ts(a);var n=Gt(e,a);n!==null&&fa(n,e,a),wo(e,a)}}var ns=!0;function _g(e,a,n,r){var i=U.T;U.T=null;var s=G.p;try{G.p=2,Lo(e,a,n,r)}finally{G.p=s,U.T=i}}function kg(e,a,n,r){var i=U.T;U.T=null;var s=G.p;try{G.p=8,Lo(e,a,n,r)}finally{G.p=s,U.T=i}}function Lo(e,a,n,r){if(ns){var i=Uo(r);if(i===null)yo(e,a,r,rs,n),rp(e,r);else if(Hg(i,e,a,n,r))r.stopPropagation();else if(rp(e,r),a&4&&-1<Pg.indexOf(e)){for(;i!==null;){var s=on(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var o=Ht(s.pendingLanes);if(o!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;o;){var b=1<<31-ba(o);m.entanglements[1]|=b,o&=~b}Fa(s),(Te&6)===0&&(Pi=ga()+500,Mr(0))}}break;case 31:case 13:m=Gt(s,2),m!==null&&fa(m,s,2),Ii(),wo(s,2)}if(s=Uo(r),s===null&&yo(e,a,r,rs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else yo(e,a,r,null,n)}}function Uo(e){return e=zs(e),zo(e)}var rs=null;function zo(e){if(rs=null,e=ln(e),e!==null){var a=x(e);if(a===null)e=null;else{var n=a.tag;if(n===13){if(e=g(a),e!==null)return e;e=null}else if(n===31){if(e=T(a),e!==null)return e;e=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return rs=e,null}function np(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cf()){case dc:return 2;case mc:return 8;case Yr:case Tf:return 32;case pc:return 268435456;default:return 32}default:return 32}}var qo=!1,zt=null,qt=null,Bt=null,qr=new Map,Br=new Map,_t=[],Pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rp(e,a){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":qr.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Br.delete(a.pointerId)}}function _r(e,a,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:a,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},a!==null&&(a=on(a),a!==null&&ap(a)),e):(e.eventSystemFlags|=r,a=e.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),e)}function Hg(e,a,n,r,i){switch(a){case"focusin":return zt=_r(zt,e,a,n,r,i),!0;case"dragenter":return qt=_r(qt,e,a,n,r,i),!0;case"mouseover":return Bt=_r(Bt,e,a,n,r,i),!0;case"pointerover":var s=i.pointerId;return qr.set(s,_r(qr.get(s)||null,e,a,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Br.set(s,_r(Br.get(s)||null,e,a,n,r,i)),!0}return!1}function ip(e){var a=ln(e.target);if(a!==null){var n=x(a);if(n!==null){if(a=n.tag,a===13){if(a=g(n),a!==null){e.blockedOn=a,yc(e.priority,function(){tp(n)});return}}else if(a===31){if(a=T(n),a!==null){e.blockedOn=a,yc(e.priority,function(){tp(n)});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function is(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var n=Uo(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Us=r,n.target.dispatchEvent(r),Us=null}else return a=on(n),a!==null&&ap(a),e.blockedOn=n,!1;a.shift()}return!0}function sp(e,a,n){is(e)&&n.delete(a)}function Ig(){qo=!1,zt!==null&&is(zt)&&(zt=null),qt!==null&&is(qt)&&(qt=null),Bt!==null&&is(Bt)&&(Bt=null),qr.forEach(sp),Br.forEach(sp)}function ss(e,a){e.blockedOn===a&&(e.blockedOn=null,qo||(qo=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Ig)))}var ls=null;function lp(e){ls!==e&&(ls=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){ls===e&&(ls=null);for(var a=0;a<e.length;a+=3){var n=e[a],r=e[a+1],i=e[a+2];if(typeof r!="function"){if(zo(r||n)===null)continue;break}var s=on(n);s!==null&&(e.splice(a,3),a-=3,Ll(s,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Jn(e){function a(b){return ss(b,e)}zt!==null&&ss(zt,e),qt!==null&&ss(qt,e),Bt!==null&&ss(Bt,e),qr.forEach(a),Br.forEach(a);for(var n=0;n<_t.length;n++){var r=_t[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)ip(n),n.blockedOn===null&&_t.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],s=n[r+1],o=i[oa]||null;if(typeof s=="function")o||lp(n);else if(o){var m=null;if(s&&s.hasAttribute("formAction")){if(i=s,o=s[oa]||null)m=o.formAction;else if(zo(i)!==null)continue}else m=o.action;typeof m=="function"?n[r+1]=m:(n.splice(r,3),r-=3),lp(n)}}}function op(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function Bo(e){this._internalRoot=e}os.prototype.render=Bo.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(u(409));var n=a.current,r=Ca();Wm(n,r,e,a,null,null)},os.prototype.unmount=Bo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Wm(e.current,2,null,e,null,null),Ii(),a[sn]=null}};function os(e){this._internalRoot=e}os.prototype.unstable_scheduleHydration=function(e){if(e){var a=bc();e={blockedOn:null,target:e,priority:a};for(var n=0;n<_t.length&&a!==0&&a<_t[n].priority;n++);_t.splice(n,0,e),n===0&&ip(e)}};var cp=c.version;if(cp!=="19.2.4")throw Error(u(527,cp,"19.2.4"));G.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=f(a),e=e!==null?A(e):null,e=e===null?null:e.stateNode,e};var Jg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{Yn=cs.inject(Jg),ha=cs}catch{}}return Pr.createRoot=function(e,a){if(!p(e))throw Error(u(299));var n=!1,r="",i=gd,s=hd,o=bd;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=Km(e,1,!1,null,null,n,r,null,i,s,o,op),e[sn]=a.current,bo(e),new Bo(a)},Pr.hydrateRoot=function(e,a,n){if(!p(e))throw Error(u(299));var r=!1,i="",s=gd,o=hd,m=bd,b=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.formState!==void 0&&(b=n.formState)),a=Km(e,1,!0,a,n??null,r,i,b,s,o,m,op),a.context=$m(null),n=a.current,r=Ca(),r=Ts(r),i=Nt(r),i.callback=null,Et(n,i,r),n=r,a.current.lanes=n,Xn(a,n),Fa(a),e[sn]=a.current,bo(e),new os(a)},Pr.version="19.2.4",Pr}var yp;function Wg(){if(yp)return Po.exports;yp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),Po.exports=$g(),Po.exports}var eh=Wg();var vp="popstate";function jp(l){return typeof l=="object"&&l!=null&&"pathname"in l&&"search"in l&&"hash"in l&&"state"in l&&"key"in l}function ah(l={}){function c(u,p){let x=p.state?.masked,{pathname:g,search:T,hash:h}=x||u.location;return Qo("",{pathname:g,search:T,hash:h},p.state&&p.state.usr||null,p.state&&p.state.key||"default",x?{pathname:u.location.pathname,search:u.location.search,hash:u.location.hash}:void 0)}function d(u,p){return typeof p=="string"?p:Ir(p)}return nh(c,d,null,l)}function Pe(l,c){if(l===!1||l===null||typeof l>"u")throw new Error(c)}function Ya(l,c){if(!l){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function th(){return Math.random().toString(36).substring(2,10)}function Sp(l,c){return{usr:l.state,key:l.key,idx:c,masked:l.unstable_mask?{pathname:l.pathname,search:l.search,hash:l.hash}:void 0}}function Qo(l,c,d=null,u,p){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof c=="string"?Fn(c):c,state:d,key:c&&c.key||u||th(),unstable_mask:p}}function Ir({pathname:l="/",search:c="",hash:d=""}){return c&&c!=="?"&&(l+=c.charAt(0)==="?"?c:"?"+c),d&&d!=="#"&&(l+=d.charAt(0)==="#"?d:"#"+d),l}function Fn(l){let c={};if(l){let d=l.indexOf("#");d>=0&&(c.hash=l.substring(d),l=l.substring(0,d));let u=l.indexOf("?");u>=0&&(c.search=l.substring(u),l=l.substring(0,u)),l&&(c.pathname=l)}return c}function nh(l,c,d,u={}){let{window:p=document.defaultView,v5Compat:x=!1}=u,g=p.history,T="POP",h=null,f=A();f==null&&(f=0,g.replaceState({...g.state,idx:f},""));function A(){return(g.state||{idx:null}).idx}function y(){T="POP";let E=A(),B=E==null?null:E-f;f=E,h&&h({action:T,location:N.location,delta:B})}function J(E,B){T="PUSH";let z=jp(E)?E:Qo(N.location,E,B);f=A()+1;let I=Sp(z,f),$=N.createHref(z.unstable_mask||z);try{g.pushState(I,"",$)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;p.location.assign($)}x&&h&&h({action:T,location:N.location,delta:1})}function V(E,B){T="REPLACE";let z=jp(E)?E:Qo(N.location,E,B);f=A();let I=Sp(z,f),$=N.createHref(z.unstable_mask||z);g.replaceState(I,"",$),x&&h&&h({action:T,location:N.location,delta:0})}function R(E){return rh(E)}let N={get action(){return T},get location(){return l(p,g)},listen(E){if(h)throw new Error("A history only accepts one active listener");return p.addEventListener(vp,y),h=E,()=>{p.removeEventListener(vp,y),h=null}},createHref(E){return c(p,E)},createURL:R,encodeLocation(E){let B=R(E);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:J,replace:V,go(E){return g.go(E)}};return N}function rh(l,c=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Pe(d,"No window.location.(origin|href) available to create URL");let u=typeof l=="string"?l:Ir(l);return u=u.replace(/ $/,"%20"),!c&&u.startsWith("//")&&(u=d+u),new URL(u,d)}function Hp(l,c,d="/"){return ih(l,c,d,!1)}function ih(l,c,d,u){let p=typeof c=="string"?Fn(c):c,x=pt(p.pathname||"/",d);if(x==null)return null;let g=Ip(l);sh(g);let T=null;for(let h=0;T==null&&h<g.length;++h){let f=hh(x);T=xh(g[h],f,u)}return T}function Ip(l,c=[],d=[],u="",p=!1){let x=(g,T,h=p,f)=>{let A={relativePath:f===void 0?g.path||"":f,caseSensitive:g.caseSensitive===!0,childrenIndex:T,route:g};if(A.relativePath.startsWith("/")){if(!A.relativePath.startsWith(u)&&h)return;Pe(A.relativePath.startsWith(u),`Absolute route path "${A.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),A.relativePath=A.relativePath.slice(u.length)}let y=Va([u,A.relativePath]),J=d.concat(A);g.children&&g.children.length>0&&(Pe(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Ip(g.children,c,J,y,h)),!(g.path==null&&!g.index)&&c.push({path:y,score:ph(y,g.index),routesMeta:J})};return l.forEach((g,T)=>{if(g.path===""||!g.path?.includes("?"))x(g,T);else for(let h of Jp(g.path))x(g,T,!0,h)}),c}function Jp(l){let c=l.split("/");if(c.length===0)return[];let[d,...u]=c,p=d.endsWith("?"),x=d.replace(/\?$/,"");if(u.length===0)return p?[x,""]:[x];let g=Jp(u.join("/")),T=[];return T.push(...g.map(h=>h===""?x:[x,h].join("/"))),p&&T.push(...g),T.map(h=>l.startsWith("/")&&h===""?"/":h)}function sh(l){l.sort((c,d)=>c.score!==d.score?d.score-c.score:fh(c.routesMeta.map(u=>u.childrenIndex),d.routesMeta.map(u=>u.childrenIndex)))}var lh=/^:[\w-]+$/,oh=3,ch=2,uh=1,dh=10,mh=-2,Np=l=>l==="*";function ph(l,c){let d=l.split("/"),u=d.length;return d.some(Np)&&(u+=mh),c&&(u+=ch),d.filter(p=>!Np(p)).reduce((p,x)=>p+(lh.test(x)?oh:x===""?uh:dh),u)}function fh(l,c){return l.length===c.length&&l.slice(0,-1).every((u,p)=>u===c[p])?l[l.length-1]-c[c.length-1]:0}function xh(l,c,d=!1){let{routesMeta:u}=l,p={},x="/",g=[];for(let T=0;T<u.length;++T){let h=u[T],f=T===u.length-1,A=x==="/"?c:c.slice(x.length)||"/",y=ps({path:h.relativePath,caseSensitive:h.caseSensitive,end:f},A),J=h.route;if(!y&&f&&d&&!u[u.length-1].route.index&&(y=ps({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},A)),!y)return null;Object.assign(p,y.params),g.push({params:p,pathname:Va([x,y.pathname]),pathnameBase:jh(Va([x,y.pathnameBase])),route:J}),y.pathnameBase!=="/"&&(x=Va([x,y.pathnameBase]))}return g}function ps(l,c){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[d,u]=gh(l.path,l.caseSensitive,l.end),p=c.match(d);if(!p)return null;let x=p[0],g=x.replace(/(.)\/+$/,"$1"),T=p.slice(1);return{params:u.reduce((f,{paramName:A,isOptional:y},J)=>{if(A==="*"){let R=T[J]||"";g=x.slice(0,x.length-R.length).replace(/(.)\/+$/,"$1")}const V=T[J];return y&&!V?f[A]=void 0:f[A]=(V||"").replace(/%2F/g,"/"),f},{}),pathname:x,pathnameBase:g,pattern:l}}function gh(l,c=!1,d=!0){Ya(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let u=[],p="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,T,h,f,A)=>{if(u.push({paramName:T,isOptional:h!=null}),h){let y=A.charAt(f+g.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(u.push({paramName:"*"}),p+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?p+="\\/*$":l!==""&&l!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,c?void 0:"i"),u]}function hh(l){try{return l.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Ya(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),l}}function pt(l,c){if(c==="/")return l;if(!l.toLowerCase().startsWith(c.toLowerCase()))return null;let d=c.endsWith("/")?c.length-1:c.length,u=l.charAt(d);return u&&u!=="/"?null:l.slice(d)||"/"}var bh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function yh(l,c="/"){let{pathname:d,search:u="",hash:p=""}=typeof l=="string"?Fn(l):l,x;return d?(d=d.replace(/\/\/+/g,"/"),d.startsWith("/")?x=Ep(d.substring(1),"/"):x=Ep(d,c)):x=c,{pathname:x,search:Sh(u),hash:Nh(p)}}function Ep(l,c){let d=c.replace(/\/+$/,"").split("/");return l.split("/").forEach(p=>{p===".."?d.length>1&&d.pop():p!=="."&&d.push(p)}),d.length>1?d.join("/"):"/"}function Fo(l,c,d,u){return`Cannot include a '${l}' character in a manually specified \`to.${c}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function vh(l){return l.filter((c,d)=>d===0||c.route.path&&c.route.path.length>0)}function Fp(l){let c=vh(l);return c.map((d,u)=>u===c.length-1?d.pathname:d.pathnameBase)}function Wo(l,c,d,u=!1){let p;typeof l=="string"?p=Fn(l):(p={...l},Pe(!p.pathname||!p.pathname.includes("?"),Fo("?","pathname","search",p)),Pe(!p.pathname||!p.pathname.includes("#"),Fo("#","pathname","hash",p)),Pe(!p.search||!p.search.includes("#"),Fo("#","search","hash",p)));let x=l===""||p.pathname==="",g=x?"/":p.pathname,T;if(g==null)T=d;else{let y=c.length-1;if(!u&&g.startsWith("..")){let J=g.split("/");for(;J[0]==="..";)J.shift(),y-=1;p.pathname=J.join("/")}T=y>=0?c[y]:"/"}let h=yh(p,T),f=g&&g!=="/"&&g.endsWith("/"),A=(x||g===".")&&d.endsWith("/");return!h.pathname.endsWith("/")&&(f||A)&&(h.pathname+="/"),h}var Va=l=>l.join("/").replace(/\/\/+/g,"/"),jh=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Sh=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Nh=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,Eh=class{constructor(l,c,d,u=!1){this.status=l,this.statusText=c||"",this.internal=u,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function Ch(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function Th(l){return l.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Vp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Gp(l,c){let d=l;if(typeof d!="string"||!bh.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let u=d,p=!1;if(Vp)try{let x=new URL(window.location.href),g=d.startsWith("//")?new URL(x.protocol+d):new URL(d),T=pt(g.pathname,c);g.origin===x.origin&&T!=null?d=T+g.search+g.hash:p=!0}catch{Ya(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:p,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Yp=["POST","PUT","PATCH","DELETE"];new Set(Yp);var Ah=["GET",...Yp];new Set(Ah);var Vn=L.createContext(null);Vn.displayName="DataRouter";var xs=L.createContext(null);xs.displayName="DataRouterState";var Rh=L.createContext(!1),Qp=L.createContext({isTransitioning:!1});Qp.displayName="ViewTransition";var Mh=L.createContext(new Map);Mh.displayName="Fetchers";var Oh=L.createContext(null);Oh.displayName="Await";var Ba=L.createContext(null);Ba.displayName="Navigation";var Jr=L.createContext(null);Jr.displayName="Location";var Qa=L.createContext({outlet:null,matches:[],isDataRoute:!1});Qa.displayName="Route";var ec=L.createContext(null);ec.displayName="RouteError";var Xp="REACT_ROUTER_ERROR",Dh="REDIRECT",wh="ROUTE_ERROR_RESPONSE";function Lh(l){if(l.startsWith(`${Xp}:${Dh}:{`))try{let c=JSON.parse(l.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function Uh(l){if(l.startsWith(`${Xp}:${wh}:{`))try{let c=JSON.parse(l.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new Eh(c.status,c.statusText,c.data)}catch{}}function zh(l,{relative:c}={}){Pe(Fr(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:u}=L.useContext(Ba),{hash:p,pathname:x,search:g}=Vr(l,{relative:c}),T=x;return d!=="/"&&(T=x==="/"?d:Va([d,x])),u.createHref({pathname:T,search:g,hash:p})}function Fr(){return L.useContext(Jr)!=null}function ft(){return Pe(Fr(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(Jr).location}var Zp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Kp(l){L.useContext(Ba).static||L.useLayoutEffect(l)}function qh(){let{isDataRoute:l}=L.useContext(Qa);return l?Kh():Bh()}function Bh(){Pe(Fr(),"useNavigate() may be used only in the context of a <Router> component.");let l=L.useContext(Vn),{basename:c,navigator:d}=L.useContext(Ba),{matches:u}=L.useContext(Qa),{pathname:p}=ft(),x=JSON.stringify(Fp(u)),g=L.useRef(!1);return Kp(()=>{g.current=!0}),L.useCallback((h,f={})=>{if(Ya(g.current,Zp),!g.current)return;if(typeof h=="number"){d.go(h);return}let A=Wo(h,JSON.parse(x),p,f.relative==="path");l==null&&c!=="/"&&(A.pathname=A.pathname==="/"?c:Va([c,A.pathname])),(f.replace?d.replace:d.push)(A,f.state,f)},[c,d,x,p,l])}var _h=L.createContext(null);function kh(l){let c=L.useContext(Qa).outlet;return L.useMemo(()=>c&&L.createElement(_h.Provider,{value:l},c),[c,l])}function Vr(l,{relative:c}={}){let{matches:d}=L.useContext(Qa),{pathname:u}=ft(),p=JSON.stringify(Fp(d));return L.useMemo(()=>Wo(l,JSON.parse(p),u,c==="path"),[l,p,u,c])}function Ph(l,c){return $p(l,c)}function $p(l,c,d){Pe(Fr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=L.useContext(Ba),{matches:p}=L.useContext(Qa),x=p[p.length-1],g=x?x.params:{},T=x?x.pathname:"/",h=x?x.pathnameBase:"/",f=x&&x.route;{let E=f&&f.path||"";ef(T,!f||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${T}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let A=ft(),y;if(c){let E=typeof c=="string"?Fn(c):c;Pe(h==="/"||E.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${E.pathname}" was given in the \`location\` prop.`),y=E}else y=A;let J=y.pathname||"/",V=J;if(h!=="/"){let E=h.replace(/^\//,"").split("/");V="/"+J.replace(/^\//,"").split("/").slice(E.length).join("/")}let R=Hp(l,{pathname:V});Ya(f||R!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Ya(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=Vh(R&&R.map(E=>Object.assign({},E,{params:Object.assign({},g,E.params),pathname:Va([h,u.encodeLocation?u.encodeLocation(E.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?h:Va([h,u.encodeLocation?u.encodeLocation(E.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathnameBase])})),p,d);return c&&N?L.createElement(Jr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...y},navigationType:"POP"}},N):N}function Hh(){let l=Zh(),c=Ch(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),d=l instanceof Error?l.stack:null,u="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:u},x={padding:"2px 4px",backgroundColor:u},g=null;return console.error("Error handled by React Router default ErrorBoundary:",l),g=L.createElement(L.Fragment,null,L.createElement("p",null,"💿 Hey developer 👋"),L.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",L.createElement("code",{style:x},"ErrorBoundary")," or"," ",L.createElement("code",{style:x},"errorElement")," prop on your route.")),L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},c),d?L.createElement("pre",{style:p},d):null,g)}var Ih=L.createElement(Hh,null),Wp=class extends L.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,c){return c.location!==l.location||c.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:c.error,location:c.location,revalidation:l.revalidation||c.revalidation}}componentDidCatch(l,c){this.props.onError?this.props.onError(l,c):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const d=Uh(l.digest);d&&(l=d)}let c=l!==void 0?L.createElement(Qa.Provider,{value:this.props.routeContext},L.createElement(ec.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?L.createElement(Jh,{error:l},c):c}};Wp.contextType=Rh;var Vo=new WeakMap;function Jh({children:l,error:c}){let{basename:d}=L.useContext(Ba);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let u=Lh(c.digest);if(u){let p=Vo.get(c);if(p)throw p;let x=Gp(u.location,d);if(Vp&&!Vo.get(c))if(x.isExternal||u.reloadDocument)window.location.href=x.absoluteURL||x.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(x.to,{replace:u.replace}));throw Vo.set(c,g),g}return L.createElement("meta",{httpEquiv:"refresh",content:`0;url=${x.absoluteURL||x.to}`})}}return l}function Fh({routeContext:l,match:c,children:d}){let u=L.useContext(Vn);return u&&u.static&&u.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=c.route.id),L.createElement(Qa.Provider,{value:l},d)}function Vh(l,c=[],d){let u=d?.state;if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(c.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let p=l,x=u?.errors;if(x!=null){let A=p.findIndex(y=>y.route.id&&x?.[y.route.id]!==void 0);Pe(A>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(x).join(",")}`),p=p.slice(0,Math.min(p.length,A+1))}let g=!1,T=-1;if(d&&u){g=u.renderFallback;for(let A=0;A<p.length;A++){let y=p[A];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(T=A),y.route.id){let{loaderData:J,errors:V}=u,R=y.route.loader&&!J.hasOwnProperty(y.route.id)&&(!V||V[y.route.id]===void 0);if(y.route.lazy||R){d.isStatic&&(g=!0),T>=0?p=p.slice(0,T+1):p=[p[0]];break}}}}let h=d?.onError,f=u&&h?(A,y)=>{h(A,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:Th(u.matches),errorInfo:y})}:void 0;return p.reduceRight((A,y,J)=>{let V,R=!1,N=null,E=null;u&&(V=x&&y.route.id?x[y.route.id]:void 0,N=y.route.errorElement||Ih,g&&(T<0&&J===0?(ef("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,E=null):T===J&&(R=!0,E=y.route.hydrateFallbackElement||null)));let B=c.concat(p.slice(0,J+1)),z=()=>{let I;return V?I=N:R?I=E:y.route.Component?I=L.createElement(y.route.Component,null):y.route.element?I=y.route.element:I=A,L.createElement(Fh,{match:y,routeContext:{outlet:A,matches:B,isDataRoute:u!=null},children:I})};return u&&(y.route.ErrorBoundary||y.route.errorElement||J===0)?L.createElement(Wp,{location:u.location,revalidation:u.revalidation,component:N,error:V,children:z(),routeContext:{outlet:null,matches:B,isDataRoute:!0},onError:f}):z()},null)}function ac(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gh(l){let c=L.useContext(Vn);return Pe(c,ac(l)),c}function Yh(l){let c=L.useContext(xs);return Pe(c,ac(l)),c}function Qh(l){let c=L.useContext(Qa);return Pe(c,ac(l)),c}function tc(l){let c=Qh(l),d=c.matches[c.matches.length-1];return Pe(d.route.id,`${l} can only be used on routes that contain a unique "id"`),d.route.id}function Xh(){return tc("useRouteId")}function Zh(){let l=L.useContext(ec),c=Yh("useRouteError"),d=tc("useRouteError");return l!==void 0?l:c.errors?.[d]}function Kh(){let{router:l}=Gh("useNavigate"),c=tc("useNavigate"),d=L.useRef(!1);return Kp(()=>{d.current=!0}),L.useCallback(async(p,x={})=>{Ya(d.current,Zp),d.current&&(typeof p=="number"?await l.navigate(p):await l.navigate(p,{fromRouteId:c,...x}))},[l,c])}var Cp={};function ef(l,c,d){!c&&!Cp[l]&&(Cp[l]=!0,Ya(!1,d))}L.memo($h);function $h({routes:l,future:c,state:d,isStatic:u,onError:p}){return $p(l,void 0,{state:d,isStatic:u,onError:p})}function Wh(l){return kh(l.context)}function se(l){Pe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function eb({basename:l="/",children:c=null,location:d,navigationType:u="POP",navigator:p,static:x=!1,unstable_useTransitions:g}){Pe(!Fr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let T=l.replace(/^\/*/,"/"),h=L.useMemo(()=>({basename:T,navigator:p,static:x,unstable_useTransitions:g,future:{}}),[T,p,x,g]);typeof d=="string"&&(d=Fn(d));let{pathname:f="/",search:A="",hash:y="",state:J=null,key:V="default",unstable_mask:R}=d,N=L.useMemo(()=>{let E=pt(f,T);return E==null?null:{location:{pathname:E,search:A,hash:y,state:J,key:V,unstable_mask:R},navigationType:u}},[T,f,A,y,J,V,u,R]);return Ya(N!=null,`<Router basename="${T}"> is not able to match the URL "${f}${A}${y}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:L.createElement(Ba.Provider,{value:h},L.createElement(Jr.Provider,{children:c,value:N}))}function ab({children:l,location:c}){return Ph(Xo(l),c)}function Xo(l,c=[]){let d=[];return L.Children.forEach(l,(u,p)=>{if(!L.isValidElement(u))return;let x=[...c,p];if(u.type===L.Fragment){d.push.apply(d,Xo(u.props.children,x));return}Pe(u.type===se,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Pe(!u.props.index||!u.props.children,"An index route cannot have child routes.");let g={id:u.props.id||x.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(g.children=Xo(u.props.children,x)),d.push(g)}),d}var ds="get",ms="application/x-www-form-urlencoded";function gs(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function tb(l){return gs(l)&&l.tagName.toLowerCase()==="button"}function nb(l){return gs(l)&&l.tagName.toLowerCase()==="form"}function rb(l){return gs(l)&&l.tagName.toLowerCase()==="input"}function ib(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function sb(l,c){return l.button===0&&(!c||c==="_self")&&!ib(l)}var us=null;function lb(){if(us===null)try{new FormData(document.createElement("form"),0),us=!1}catch{us=!0}return us}var ob=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Go(l){return l!=null&&!ob.has(l)?(Ya(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ms}"`),null):l}function cb(l,c){let d,u,p,x,g;if(nb(l)){let T=l.getAttribute("action");u=T?pt(T,c):null,d=l.getAttribute("method")||ds,p=Go(l.getAttribute("enctype"))||ms,x=new FormData(l)}else if(tb(l)||rb(l)&&(l.type==="submit"||l.type==="image")){let T=l.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=l.getAttribute("formaction")||T.getAttribute("action");if(u=h?pt(h,c):null,d=l.getAttribute("formmethod")||T.getAttribute("method")||ds,p=Go(l.getAttribute("formenctype"))||Go(T.getAttribute("enctype"))||ms,x=new FormData(T,l),!lb()){let{name:f,type:A,value:y}=l;if(A==="image"){let J=f?`${f}.`:"";x.append(`${J}x`,"0"),x.append(`${J}y`,"0")}else f&&x.append(f,y)}}else{if(gs(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=ds,u=null,p=ms,g=l}return x&&p==="text/plain"&&(g=x,x=void 0),{action:u,method:d.toLowerCase(),encType:p,formData:x,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function nc(l,c){if(l===!1||l===null||typeof l>"u")throw new Error(c)}function ub(l,c,d,u){let p=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return d?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${u}`:p.pathname=`${p.pathname}.${u}`:p.pathname==="/"?p.pathname=`_root.${u}`:c&&pt(p.pathname,c)==="/"?p.pathname=`${c.replace(/\/$/,"")}/_root.${u}`:p.pathname=`${p.pathname.replace(/\/$/,"")}.${u}`,p}async function db(l,c){if(l.id in c)return c[l.id];try{let d=await import(l.module);return c[l.id]=d,d}catch(d){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mb(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function pb(l,c,d){let u=await Promise.all(l.map(async p=>{let x=c.routes[p.route.id];if(x){let g=await db(x,d);return g.links?g.links():[]}return[]}));return hb(u.flat(1).filter(mb).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function Tp(l,c,d,u,p,x){let g=(h,f)=>d[f]?h.route.id!==d[f].route.id:!0,T=(h,f)=>d[f].pathname!==h.pathname||d[f].route.path?.endsWith("*")&&d[f].params["*"]!==h.params["*"];return x==="assets"?c.filter((h,f)=>g(h,f)||T(h,f)):x==="data"?c.filter((h,f)=>{let A=u.routes[h.route.id];if(!A||!A.hasLoader)return!1;if(g(h,f)||T(h,f))return!0;if(h.route.shouldRevalidate){let y=h.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function fb(l,c,{includeHydrateFallback:d}={}){return xb(l.map(u=>{let p=c.routes[u.route.id];if(!p)return[];let x=[p.module];return p.clientActionModule&&(x=x.concat(p.clientActionModule)),p.clientLoaderModule&&(x=x.concat(p.clientLoaderModule)),d&&p.hydrateFallbackModule&&(x=x.concat(p.hydrateFallbackModule)),p.imports&&(x=x.concat(p.imports)),x}).flat(1))}function xb(l){return[...new Set(l)]}function gb(l){let c={},d=Object.keys(l).sort();for(let u of d)c[u]=l[u];return c}function hb(l,c){let d=new Set;return new Set(c),l.reduce((u,p)=>{let x=JSON.stringify(gb(p));return d.has(x)||(d.add(x),u.push({key:x,link:p})),u},[])}function af(){let l=L.useContext(Vn);return nc(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function bb(){let l=L.useContext(xs);return nc(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var rc=L.createContext(void 0);rc.displayName="FrameworkContext";function tf(){let l=L.useContext(rc);return nc(l,"You must render this element inside a <HydratedRouter> element"),l}function yb(l,c){let d=L.useContext(rc),[u,p]=L.useState(!1),[x,g]=L.useState(!1),{onFocus:T,onBlur:h,onMouseEnter:f,onMouseLeave:A,onTouchStart:y}=c,J=L.useRef(null);L.useEffect(()=>{if(l==="render"&&g(!0),l==="viewport"){let N=B=>{B.forEach(z=>{g(z.isIntersecting)})},E=new IntersectionObserver(N,{threshold:.5});return J.current&&E.observe(J.current),()=>{E.disconnect()}}},[l]),L.useEffect(()=>{if(u){let N=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(N)}}},[u]);let V=()=>{p(!0)},R=()=>{p(!1),g(!1)};return d?l!=="intent"?[x,J,{}]:[x,J,{onFocus:Hr(T,V),onBlur:Hr(h,R),onMouseEnter:Hr(f,V),onMouseLeave:Hr(A,R),onTouchStart:Hr(y,V)}]:[!1,J,{}]}function Hr(l,c){return d=>{l&&l(d),d.defaultPrevented||c(d)}}function vb({page:l,...c}){let{router:d}=af(),u=L.useMemo(()=>Hp(d.routes,l,d.basename),[d.routes,l,d.basename]);return u?L.createElement(Sb,{page:l,matches:u,...c}):null}function jb(l){let{manifest:c,routeModules:d}=tf(),[u,p]=L.useState([]);return L.useEffect(()=>{let x=!1;return pb(l,c,d).then(g=>{x||p(g)}),()=>{x=!0}},[l,c,d]),u}function Sb({page:l,matches:c,...d}){let u=ft(),{future:p,manifest:x,routeModules:g}=tf(),{basename:T}=af(),{loaderData:h,matches:f}=bb(),A=L.useMemo(()=>Tp(l,c,f,x,u,"data"),[l,c,f,x,u]),y=L.useMemo(()=>Tp(l,c,f,x,u,"assets"),[l,c,f,x,u]),J=L.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let N=new Set,E=!1;if(c.forEach(z=>{let I=x.routes[z.route.id];!I||!I.hasLoader||(!A.some($=>$.route.id===z.route.id)&&z.route.id in h&&g[z.route.id]?.shouldRevalidate||I.hasClientLoader?E=!0:N.add(z.route.id))}),N.size===0)return[];let B=ub(l,T,p.unstable_trailingSlashAwareDataRequests,"data");return E&&N.size>0&&B.searchParams.set("_routes",c.filter(z=>N.has(z.route.id)).map(z=>z.route.id).join(",")),[B.pathname+B.search]},[T,p.unstable_trailingSlashAwareDataRequests,h,u,x,A,c,l,g]),V=L.useMemo(()=>fb(y,x),[y,x]),R=jb(y);return L.createElement(L.Fragment,null,J.map(N=>L.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...d})),V.map(N=>L.createElement("link",{key:N,rel:"modulepreload",href:N,...d})),R.map(({key:N,link:E})=>L.createElement("link",{key:N,nonce:d.nonce,...E,crossOrigin:E.crossOrigin??d.crossOrigin})))}function Nb(...l){return c=>{l.forEach(d=>{typeof d=="function"?d(c):d!=null&&(d.current=c)})}}var Eb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Eb&&(window.__reactRouterVersion="7.13.1")}catch{}function Cb({basename:l,children:c,unstable_useTransitions:d,window:u}){let p=L.useRef();p.current==null&&(p.current=ah({window:u,v5Compat:!0}));let x=p.current,[g,T]=L.useState({action:x.action,location:x.location}),h=L.useCallback(f=>{d===!1?T(f):L.startTransition(()=>T(f))},[d]);return L.useLayoutEffect(()=>x.listen(h),[x,h]),L.createElement(eb,{basename:l,children:c,location:g.location,navigationType:g.action,navigator:x,unstable_useTransitions:d})}var nf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ic=L.forwardRef(function({onClick:c,discover:d="render",prefetch:u="none",relative:p,reloadDocument:x,replace:g,unstable_mask:T,state:h,target:f,to:A,preventScrollReset:y,viewTransition:J,unstable_defaultShouldRevalidate:V,...R},N){let{basename:E,navigator:B,unstable_useTransitions:z}=L.useContext(Ba),I=typeof A=="string"&&nf.test(A),$=Gp(A,E);A=$.to;let ae=zh(A,{relative:p}),pe=ft(),X=null;if(T){let Ce=Wo(T,[],pe.unstable_mask?pe.unstable_mask.pathname:"/",!0);E!=="/"&&(Ce.pathname=Ce.pathname==="/"?E:Va([E,Ce.pathname])),X=B.createHref(Ce)}let[fe,Ee,Ze]=yb(u,R),He=Rb(A,{replace:g,unstable_mask:T,state:h,target:f,preventScrollReset:y,relative:p,viewTransition:J,unstable_defaultShouldRevalidate:V,unstable_useTransitions:z});function Ue(Ce){c&&c(Ce),Ce.defaultPrevented||He(Ce)}let xa=!($.isExternal||x),Re=L.createElement("a",{...R,...Ze,href:(xa?X:void 0)||$.absoluteURL||ae,onClick:xa?Ue:c,ref:Nb(N,Ee),target:f,"data-discover":!I&&d==="render"?"true":void 0});return fe&&!I?L.createElement(L.Fragment,null,Re,L.createElement(vb,{page:ae})):Re});ic.displayName="Link";var rf=L.forwardRef(function({"aria-current":c="page",caseSensitive:d=!1,className:u="",end:p=!1,style:x,to:g,viewTransition:T,children:h,...f},A){let y=Vr(g,{relative:f.relative}),J=ft(),V=L.useContext(xs),{navigator:R,basename:N}=L.useContext(Ba),E=V!=null&&Lb(y)&&T===!0,B=R.encodeLocation?R.encodeLocation(y).pathname:y.pathname,z=J.pathname,I=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;d||(z=z.toLowerCase(),I=I?I.toLowerCase():null,B=B.toLowerCase()),I&&N&&(I=pt(I,N)||I);const $=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let ae=z===B||!p&&z.startsWith(B)&&z.charAt($)==="/",pe=I!=null&&(I===B||!p&&I.startsWith(B)&&I.charAt(B.length)==="/"),X={isActive:ae,isPending:pe,isTransitioning:E},fe=ae?c:void 0,Ee;typeof u=="function"?Ee=u(X):Ee=[u,ae?"active":null,pe?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let Ze=typeof x=="function"?x(X):x;return L.createElement(ic,{...f,"aria-current":fe,className:Ee,ref:A,style:Ze,to:g,viewTransition:T},typeof h=="function"?h(X):h)});rf.displayName="NavLink";var Tb=L.forwardRef(({discover:l="render",fetcherKey:c,navigate:d,reloadDocument:u,replace:p,state:x,method:g=ds,action:T,onSubmit:h,relative:f,preventScrollReset:A,viewTransition:y,unstable_defaultShouldRevalidate:J,...V},R)=>{let{unstable_useTransitions:N}=L.useContext(Ba),E=Db(),B=wb(T,{relative:f}),z=g.toLowerCase()==="get"?"get":"post",I=typeof T=="string"&&nf.test(T),$=ae=>{if(h&&h(ae),ae.defaultPrevented)return;ae.preventDefault();let pe=ae.nativeEvent.submitter,X=pe?.getAttribute("formmethod")||g,fe=()=>E(pe||ae.currentTarget,{fetcherKey:c,method:X,navigate:d,replace:p,state:x,relative:f,preventScrollReset:A,viewTransition:y,unstable_defaultShouldRevalidate:J});N&&d!==!1?L.startTransition(()=>fe()):fe()};return L.createElement("form",{ref:R,method:z,action:B,onSubmit:u?h:$,...V,"data-discover":!I&&l==="render"?"true":void 0})});Tb.displayName="Form";function Ab(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sf(l){let c=L.useContext(Vn);return Pe(c,Ab(l)),c}function Rb(l,{target:c,replace:d,unstable_mask:u,state:p,preventScrollReset:x,relative:g,viewTransition:T,unstable_defaultShouldRevalidate:h,unstable_useTransitions:f}={}){let A=qh(),y=ft(),J=Vr(l,{relative:g});return L.useCallback(V=>{if(sb(V,c)){V.preventDefault();let R=d!==void 0?d:Ir(y)===Ir(J),N=()=>A(l,{replace:R,unstable_mask:u,state:p,preventScrollReset:x,relative:g,viewTransition:T,unstable_defaultShouldRevalidate:h});f?L.startTransition(()=>N()):N()}},[y,A,J,d,u,p,c,l,x,g,T,h,f])}var Mb=0,Ob=()=>`__${String(++Mb)}__`;function Db(){let{router:l}=sf("useSubmit"),{basename:c}=L.useContext(Ba),d=Xh(),u=l.fetch,p=l.navigate;return L.useCallback(async(x,g={})=>{let{action:T,method:h,encType:f,formData:A,body:y}=cb(x,c);if(g.navigate===!1){let J=g.fetcherKey||Ob();await u(J,d,g.action||T,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:A,body:y,formMethod:g.method||h,formEncType:g.encType||f,flushSync:g.flushSync})}else await p(g.action||T,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:A,body:y,formMethod:g.method||h,formEncType:g.encType||f,replace:g.replace,state:g.state,fromRouteId:d,flushSync:g.flushSync,viewTransition:g.viewTransition})},[u,p,c,d])}function wb(l,{relative:c}={}){let{basename:d}=L.useContext(Ba),u=L.useContext(Qa);Pe(u,"useFormAction must be used inside a RouteContext");let[p]=u.matches.slice(-1),x={...Vr(l||".",{relative:c})},g=ft();if(l==null){x.search=g.search;let T=new URLSearchParams(x.search),h=T.getAll("index");if(h.some(A=>A==="")){T.delete("index"),h.filter(y=>y).forEach(y=>T.append("index",y));let A=T.toString();x.search=A?`?${A}`:""}}return(!l||l===".")&&p.route.index&&(x.search=x.search?x.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(x.pathname=x.pathname==="/"?d:Va([d,x.pathname])),Ir(x)}function Lb(l,{relative:c}={}){let d=L.useContext(Qp);Pe(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=sf("useViewTransitionState"),p=Vr(l,{relative:c});if(!d.isTransitioning)return!1;let x=pt(d.currentLocation.pathname,u)||d.currentLocation.pathname,g=pt(d.nextLocation.pathname,u)||d.nextLocation.pathname;return ps(p.pathname,g)!=null||ps(p.pathname,x)!=null}function lf(){const{pathname:l}=ft();return L.useEffect(()=>{window.scrollTo(0,0)},[l]),null}const of=(...l)=>l.filter((c,d,u)=>!!c&&c.trim()!==""&&u.indexOf(c)===d).join(" ").trim();const Ub=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const zb=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,d,u)=>u?u.toUpperCase():d.toLowerCase());const Ap=l=>{const c=zb(l);return c.charAt(0).toUpperCase()+c.slice(1)};var qb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Bb=l=>{for(const c in l)if(c.startsWith("aria-")||c==="role"||c==="title")return!0;return!1};const _b=L.forwardRef(({color:l="currentColor",size:c=24,strokeWidth:d=2,absoluteStrokeWidth:u,className:p="",children:x,iconNode:g,...T},h)=>L.createElement("svg",{ref:h,...qb,width:c,height:c,stroke:l,strokeWidth:u?Number(d)*24/Number(c):d,className:of("lucide",p),...!x&&!Bb(T)&&{"aria-hidden":"true"},...T},[...g.map(([f,A])=>L.createElement(f,A)),...Array.isArray(x)?x:[x]]));const re=(l,c)=>{const d=L.forwardRef(({className:u,...p},x)=>L.createElement(_b,{ref:x,iconNode:c,className:of(`lucide-${Ub(Ap(l))}`,`lucide-${l}`,u),...p}));return d.displayName=Ap(l),d};const kb=[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]],Zo=re("arrow-right-left",kb);const Pb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Hb=re("arrow-right",Pb);const Ib=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],Rp=re("binary",Ib);const Jb=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Fb=re("book-open",Jb);const Vb=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Gb=re("box",Vb);const Yb=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],Qb=re("boxes",Yb);const Xb=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],sc=re("brain",Xb);const Zb=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Kb=re("calendar",Zb);const $b=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Wb=re("check",$b);const ey=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Mp=re("chevron-down",ey);const ay=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Op=re("chevron-up",ay);const ty=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Dp=re("circle-alert",ty);const ny=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ry=re("circle-check",ny);const iy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],cf=re("clock",iy);const sy=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],lc=re("code-xml",sy);const ly=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],uf=re("coffee",ly);const oy=[["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}]],cy=re("cog",oy);const uy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],dy=re("copy",uy);const my=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],wp=re("cpu",my);const py=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],fy=re("database",py);const xy=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],df=re("file-code",xy);const gy=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Lp=re("file-text",gy);const hy=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],by=re("folder-open",hy);const yy=[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]],vy=re("git-branch",yy);const jy=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],Ko=re("git-commit-horizontal",jy);const Sy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Ny=re("globe",Sy);const Ey=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Cy=re("hash",Ey);const Ty=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Ay=re("house",Ty);const Ry=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],My=re("info",Ry);const Oy=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Dy=re("layers",Oy);const wy=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],mf=re("leaf",wy);const Ly=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],pf=re("lightbulb",Ly);const Uy=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],zy=re("list",Uy);const qy=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],By=re("lock",qy);const _y=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],ky=re("menu",_y);const Py=[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],Hy=re("monitor-check",Py);const Iy=[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m16 17 2 2 4-4",key:"uh5qu3"}],["path",{d:"M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",key:"kpkbpo"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]],Jy=re("package-check",Iy);const Fy=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],Vy=re("puzzle",Fy);const Gy=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],Yy=re("repeat",Gy);const Qy=[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]],Xy=re("rocket",Qy);const Zy=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Ky=re("server",Zy);const $y=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Up=re("settings",$y);const Wy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Yo=re("shield",Wy);const ev=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],av=re("target",ev);const tv=[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",key:"125lnx"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]],nv=re("test-tube",tv);const rv=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],iv=re("toggle-left",rv);const sv=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],lv=re("triangle-alert",sv);const ov=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],cv=re("trophy",ov);const uv=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],dv=re("type",uv);const mv=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],pv=re("workflow",mv);const fv=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],xv=re("wrench",fv);const gv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],hv=re("x",gv);const bv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ff=re("zap",bv),yv=[{title:"Inicio",items:[{path:"/",label:"Bienvenida",icon:Ay}]},{title:"Fundamentos de Java",items:[{path:"/introduccion",label:"Introducción a Java",icon:uf},{path:"/sintaxis",label:"Sintaxis Básica",icon:lc},{path:"/tipos-datos",label:"Tipos de Datos",icon:Rp},{path:"/variables",label:"Variables y Constantes",icon:Gb},{path:"/operadores",label:"Operadores",icon:Cy},{path:"/strings",label:"Strings",icon:dv}]},{title:"Control de Flujo",items:[{path:"/condicionales",label:"Condicionales",icon:iv},{path:"/bucles",label:"Bucles",icon:Yy},{path:"/arrays",label:"Arrays",icon:zy}]},{title:"POO - Programación Orientada a Objetos",items:[{path:"/metodos",label:"Métodos",icon:ff},{path:"/clases-objetos",label:"Clases y Objetos",icon:Qb},{path:"/encapsulamiento",label:"Encapsulamiento",icon:Yo},{path:"/herencia",label:"Herencia",icon:vy},{path:"/polimorfismo",label:"Polimorfismo",icon:Zo},{path:"/interfaces",label:"Interfaces",icon:Dy},{path:"/clases-abstractas",label:"Clases Abstractas",icon:Lp}]},{title:"Java Intermedio",items:[{path:"/colecciones",label:"Colecciones",icon:fy},{path:"/excepciones",label:"Excepciones",icon:Dp},{path:"/generics",label:"Generics",icon:Vy},{path:"/enums",label:"Enums",icon:Up},{path:"/comparador",label:"Comparable y Comparator",icon:Zo}]},{title:"Java Avanzado",items:[{path:"/lambdas",label:"Lambdas",icon:pv},{path:"/streams",label:"Streams API",icon:wp},{path:"/optional",label:"Optional",icon:sc},{path:"/concurrencia",label:"Concurrencia y Threads",icon:Xy},{path:"/virtual-threads",label:"Virtual Threads (Java 21)",icon:wp},{path:"/io-archivos",label:"I/O y Archivos",icon:by},{path:"/fechas-api",label:"API de Fechas",icon:cf}]},{title:"Java Moderno (17+)",items:[{path:"/records",label:"Records",icon:df},{path:"/sealed-classes",label:"Sealed Classes",icon:By},{path:"/pattern-matching",label:"Pattern Matching",icon:Hy},{path:"/patrones-diseno",label:"Patrones de Diseño",icon:xv},{path:"/text-blocks",label:"Text Blocks y var",icon:Lp}]},{title:"Spring Boot",items:[{path:"/spring-intro",label:"Introducción a Spring",icon:mf},{path:"/spring-setup",label:"Setup y Estructura",icon:Jy},{path:"/spring-anotaciones",label:"Anotaciones",icon:Fb},{path:"/spring-controllers",label:"Controllers REST",icon:Ny},{path:"/spring-services",label:"Servicios",icon:cy},{path:"/spring-repositories",label:"Repositories y JPA",icon:Ky},{path:"/spring-security",label:"Spring Security",icon:Yo},{path:"/spring-testing",label:"Testing",icon:nv},{path:"/spring-excepciones",label:"Manejo de Excepciones",icon:Dp},{path:"/spring-validacion",label:"Validación (@Valid)",icon:Yo},{path:"/spring-dtos",label:"DTOs y MapStruct",icon:Rp},{path:"/spring-perfiles",label:"Perfiles y Config",icon:Up}]}];function vv(){const[l,c]=L.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>c(!l),className:"fixed top-4 left-4 z-50 lg:hidden bg-surface-light border border-border rounded-lg p-2 text-text hover:bg-surface-lighter transition-colors cursor-pointer",children:l?t.jsx(hv,{size:20}):t.jsx(ky,{size:20})}),l&&t.jsx("div",{className:"fixed inset-0 bg-black/50 z-30 lg:hidden",onClick:()=>c(!1)}),t.jsxs("aside",{className:`fixed top-0 left-0 h-full w-72 bg-surface-light border-r border-border z-40 overflow-y-auto transition-transform duration-300 ${l?"translate-x-0":"-translate-x-full"} lg:translate-x-0 lg:static lg:z-0`,children:[t.jsxs("div",{className:"p-6 border-b border-border",children:[t.jsxs("h1",{className:"text-lg font-bold text-java flex items-center gap-2",children:[t.jsx("span",{className:"text-2xl",children:"☕"})," Java Mastery"]}),t.jsx("p",{className:"text-xs text-text-muted mt-1",children:"Guía Completa 2026"})]}),t.jsx("nav",{className:"p-4",children:yv.map(d=>t.jsxs("div",{className:"mb-4",children:[t.jsx("h3",{className:"text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 px-3",children:d.title}),d.items.map(u=>{const p=u.icon;return t.jsxs(rf,{to:u.path,onClick:()=>c(!1),className:({isActive:x})=>`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 mb-0.5 ${x?"bg-primary/15 text-primary font-medium":"text-text-muted hover:bg-surface-lighter/50 hover:text-text"}`,end:u.path==="/",children:[t.jsx(p,{size:16}),u.label]},u.path)})]},d.title))})]})]})}function jv(){return t.jsxs("div",{className:"flex min-h-screen",children:[t.jsx(lf,{}),t.jsx(vv,{}),t.jsx("main",{className:"flex-1 lg:ml-0 min-h-screen",children:t.jsx("div",{className:"max-w-4xl mx-auto px-6 py-12 lg:px-12",children:t.jsx(Wh,{})})})]})}const zp=[{phase:"Fase 1 — Fundamentos",color:"text-primary",bg:"bg-primary/10",border:"border-primary/25",days:[{day:1,title:"Introducción a Java",link:"/introduccion",desc:"Qué es Java, JDK, JVM, tu primer programa"},{day:2,title:"Sintaxis Básica",link:"/sintaxis",desc:"Estructura de un programa, main, paquetes, convenciones"},{day:3,title:"Tipos de Datos",link:"/tipos-datos",desc:"Primitivos vs objetos, casting, wrappers"},{day:4,title:"Variables y Constantes",link:"/variables",desc:"Declaración, scope, final, valores por defecto"},{day:5,title:"Operadores",link:"/operadores",desc:"Aritméticos, lógicos, comparación, ternario"},{day:6,title:"Strings",link:"/strings",desc:"Inmutabilidad, métodos, StringBuilder, formato"}]},{phase:"Fase 2 — Control de Flujo",color:"text-success",bg:"bg-success/10",border:"border-success/25",days:[{day:7,title:"Condicionales",link:"/condicionales",desc:"if/else, switch, pattern matching"},{day:8,title:"Bucles",link:"/bucles",desc:"for, while, do-while, for-each, break/continue"},{day:9,title:"Arrays",link:"/arrays",desc:"Declaración, iteración, arrays multidimensionales"}]},{phase:"Fase 3 — POO",color:"text-accent",bg:"bg-accent/10",border:"border-accent/25",days:[{day:10,title:"Métodos",link:"/metodos",desc:"Definir, sobrecargar, varargs, paso por valor"},{day:11,title:"Clases y Objetos",link:"/clases-objetos",desc:"Constructores, this, static, equals"},{day:12,title:"Encapsulamiento",link:"/encapsulamiento",desc:"Getters/setters, modificadores de acceso"},{day:13,title:"Herencia",link:"/herencia",desc:"extends, super, sobreescritura de métodos"},{day:14,title:"Polimorfismo",link:"/polimorfismo",desc:"Upcasting, downcasting, instanceof"},{day:15,title:"Interfaces",link:"/interfaces",desc:"Contratos, default methods, implementación múltiple"},{day:16,title:"Clases Abstractas",link:"/clases-abstractas",desc:"Abstract vs interface, cuándo usar cada uno"}]},{phase:"Fase 4 — Intermedio",color:"text-warning",bg:"bg-warning/10",border:"border-warning/25",days:[{day:17,title:"Colecciones",link:"/colecciones",desc:"List, Set, Map, Queue, iteradores"},{day:18,title:"Excepciones",link:"/excepciones",desc:"try/catch, checked vs unchecked, custom exceptions"},{day:19,title:"Generics",link:"/generics",desc:"Tipos parametrizados, wildcards, bounded types"},{day:20,title:"Enums",link:"/enums",desc:"Constantes tipadas, métodos en enums"},{day:21,title:"Comparable y Comparator",link:"/comparador",desc:"Ordenamiento personalizado, cadenas de comparación"}]},{phase:"Fase 5 — Avanzado",color:"text-[#c084fc]",bg:"bg-[#c084fc]/10",border:"border-[#c084fc]/25",days:[{day:22,title:"Lambdas",link:"/lambdas",desc:"Funciones anónimas, interfaces funcionales"},{day:23,title:"Streams API",link:"/streams",desc:"map, filter, reduce, collect, operaciones en cadena"},{day:24,title:"Optional",link:"/optional",desc:"Manejo seguro de null, encadenamiento"},{day:25,title:"Concurrencia",link:"/concurrencia",desc:"Threads, ExecutorService, CompletableFuture"},{day:26,title:"Virtual Threads",link:"/virtual-threads",desc:"Java 21: hilos ligeros de alto rendimiento"},{day:27,title:"I/O y Archivos",link:"/io-archivos",desc:"Files, Path, streams de archivos, serialización"},{day:28,title:"API de Fechas",link:"/fechas-api",desc:"LocalDate, LocalDateTime, Duration, formateo"}]},{phase:"Fase 6 — Java Moderno",color:"text-[#f472b6]",bg:"bg-[#f472b6]/10",border:"border-[#f472b6]/25",days:[{day:29,title:"Records",link:"/records",desc:"DTOs inmutables en una línea"},{day:30,title:"Sealed Classes",link:"/sealed-classes",desc:"Jerarquías controladas de herencia"},{day:31,title:"Pattern Matching",link:"/pattern-matching",desc:"instanceof mejorado, switch expressions"},{day:32,title:"Patrones de Diseño",link:"/patrones-diseno",desc:"Builder, Factory, Strategy, Observer"},{day:33,title:"Text Blocks y var",link:"/text-blocks",desc:"Strings multilínea, inferencia de tipos"}]},{phase:"Fase 7 — Spring Boot",color:"text-spring",bg:"bg-spring/10",border:"border-spring/25",days:[{day:34,title:"Intro a Spring",link:"/spring-intro",desc:"IoC, DI, por qué Spring"},{day:35,title:"Setup y Estructura",link:"/spring-setup",desc:"Spring Initializr, pom.xml, estructura de proyecto"},{day:36,title:"Anotaciones",link:"/spring-anotaciones",desc:"@Component, @Service, @Repository, @Autowired"},{day:37,title:"Controllers REST",link:"/spring-controllers",desc:"@RestController, endpoints, ResponseEntity"},{day:38,title:"Servicios",link:"/spring-services",desc:"Capa de negocio, @Transactional"},{day:39,title:"Repositories y JPA",link:"/spring-repositories",desc:"Spring Data JPA, queries, relaciones"},{day:40,title:"Spring Security",link:"/spring-security",desc:"Autenticación, JWT, autorización"},{day:41,title:"Manejo de Excepciones",link:"/spring-excepciones",desc:"@ControllerAdvice, errores globales"},{day:42,title:"Validación",link:"/spring-validacion",desc:"@Valid, Jakarta Validation, custom validators"},{day:43,title:"DTOs y MapStruct",link:"/spring-dtos",desc:"Mapeo de entidades, separación de capas"},{day:44,title:"Perfiles y Config",link:"/spring-perfiles",desc:"application.yml, @Profile, @Value"},{day:45,title:"Testing",link:"/spring-testing",desc:"JUnit 5, Mockito, @WebMvcTest, MockMvc"}]}];function Sv(){const l=zp.reduce((c,d)=>c+d.days.length,0);return t.jsxs("div",{children:[t.jsxs("div",{className:"mb-10",children:[t.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[t.jsx("span",{className:"text-5xl",children:"☕"}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-4xl font-bold text-java",children:"Java Mastery"}),t.jsxs("p",{className:"text-text-muted text-lg mt-1",children:[l," días de Java — De cero a Spring Boot"]})]})]}),t.jsxs("p",{className:"text-text-muted leading-relaxed mt-4",children:["Este no es un curso que solo te dice ",t.jsx("strong",{className:"text-text",children:"qué"})," aprender. Aquí vas a ",t.jsx("strong",{className:"text-text",children:"pensar como desarrollador Java"}),": cada día tiene ejercicios que escribes tú mismo, explicaciones de ",t.jsx("em",{children:"por qué"})," las cosas funcionan así, y un commit que puedes subir a tu GitHub para documentar tu progreso."]})]}),t.jsxs("div",{className:"grid gap-4 md:grid-cols-4 mb-10",children:[t.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-5 text-center",children:[t.jsx(lc,{size:24,className:"text-primary mx-auto mb-2"}),t.jsx("h3",{className:"font-semibold text-text text-sm",children:"Ejercicios reales"}),t.jsx("p",{className:"text-text-muted text-xs mt-1",children:"Código que escribes, no que lees"})]}),t.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-5 text-center",children:[t.jsx(sc,{size:24,className:"text-accent mx-auto mb-2"}),t.jsx("h3",{className:"font-semibold text-text text-sm",children:"Cómo pensarlo"}),t.jsx("p",{className:"text-text-muted text-xs mt-1",children:"El razonamiento detrás de cada decisión"})]}),t.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-5 text-center",children:[t.jsx(Ko,{size:24,className:"text-success mx-auto mb-2"}),t.jsx("h3",{className:"font-semibold text-text text-sm",children:"Un commit por día"}),t.jsx("p",{className:"text-text-muted text-xs mt-1",children:"Progreso real en tu GitHub"})]}),t.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-5 text-center",children:[t.jsx(cv,{size:24,className:"text-warning mx-auto mb-2"}),t.jsx("h3",{className:"font-semibold text-text text-sm",children:"De cero a Spring"}),t.jsxs("p",{className:"text-text-muted text-xs mt-1",children:[l," días, 7 fases, dominio completo"]})]})]}),t.jsxs("div",{className:"mb-10",children:[t.jsxs("h2",{className:"text-xl font-bold text-text mb-2 flex items-center gap-2",children:[t.jsx(av,{size:20,className:"text-primary"}),"Tu ruta día a día"]}),t.jsx("p",{className:"text-text-muted text-sm mb-6",children:"Cada día tiene explicación, ejercicios y un commit para tu repo."}),t.jsx("div",{className:"space-y-6",children:zp.map(c=>t.jsxs("div",{className:`rounded-xl border ${c.border} overflow-hidden`,children:[t.jsxs("div",{className:`${c.bg} px-5 py-3 flex items-center gap-2`,children:[t.jsx(uf,{size:16,className:c.color}),t.jsx("span",{className:`font-bold text-sm ${c.color}`,children:c.phase}),t.jsxs("span",{className:"text-text-muted text-xs ml-auto",children:[c.days.length," días"]})]}),t.jsx("div",{className:"divide-y divide-border/30",children:c.days.map(d=>t.jsxs(ic,{to:d.link,className:"flex items-center gap-3 px-5 py-3 hover:bg-surface-lighter/20 transition-colors group",children:[t.jsx("span",{className:"flex-shrink-0 w-8 h-8 rounded-lg bg-surface-lighter/50 text-text-muted font-bold text-xs flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors",children:d.day}),t.jsxs("div",{className:"min-w-0",children:[t.jsx("h4",{className:"font-medium text-sm text-text group-hover:text-primary transition-colors truncate",children:d.title}),t.jsx("p",{className:"text-text-muted text-xs truncate",children:d.desc})]}),t.jsx(ff,{size:14,className:"text-text-muted/30 ml-auto flex-shrink-0 group-hover:text-primary transition-colors"})]},d.day))})]},c.phase))})]}),t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-8",children:[t.jsxs("h3",{className:"text-success font-semibold mb-3 flex items-center gap-2",children:[t.jsx(Ko,{size:18})," Cómo usar esta guía"]}),t.jsxs("div",{className:"space-y-2 text-sm text-text-muted",children:[t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"1."})," Crea un repo en GitHub: ",t.jsx("code",{className:"text-success font-mono text-xs",children:"java-mastery-45-dias"})]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"2."})," Cada día, lee la lección, resuelve los ejercicios y escribe el código tú mismo"]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"3."})," Haz commit con el mensaje sugerido al final de cada lección"]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"4."})," Al terminar tendrás ",l," commits que demuestran tu dominio de Java"]})]})]}),t.jsxs("div",{className:"bg-primary/10 border border-primary/30 rounded-xl p-6",children:[t.jsx("h3",{className:"text-primary font-semibold mb-2",children:"💡 Para desarrolladores Angular/TypeScript"}),t.jsxs("p",{className:"text-text-muted text-sm leading-relaxed",children:["Cada lección incluye comparaciones con ",t.jsx("strong",{className:"text-angular",children:"Angular/TypeScript"})," para que conectes lo que ya sabes con Java. TypeScript y Java comparten tipado estático, clases, interfaces y generics — tu transición será más natural de lo que piensas."]})]})]})}function xf(l){var c,d,u="";if(typeof l=="string"||typeof l=="number")u+=l;else if(typeof l=="object")if(Array.isArray(l)){var p=l.length;for(c=0;c<p;c++)l[c]&&(d=xf(l[c]))&&(u&&(u+=" "),u+=d)}else for(d in l)l[d]&&(u&&(u+=" "),u+=d);return u}function gf(){for(var l,c,d=0,u="",p=arguments.length;d<p;d++)(l=arguments[d])&&(c=xf(l))&&(u&&(u+=" "),u+=c);return u}var Nv=Object.create,hs=Object.defineProperty,Ev=Object.defineProperties,Cv=Object.getOwnPropertyDescriptor,Tv=Object.getOwnPropertyDescriptors,hf=Object.getOwnPropertyNames,fs=Object.getOwnPropertySymbols,Av=Object.getPrototypeOf,oc=Object.prototype.hasOwnProperty,bf=Object.prototype.propertyIsEnumerable,qp=(l,c,d)=>c in l?hs(l,c,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[c]=d,Ga=(l,c)=>{for(var d in c||(c={}))oc.call(c,d)&&qp(l,d,c[d]);if(fs)for(var d of fs(c))bf.call(c,d)&&qp(l,d,c[d]);return l},bs=(l,c)=>Ev(l,Tv(c)),yf=(l,c)=>{var d={};for(var u in l)oc.call(l,u)&&c.indexOf(u)<0&&(d[u]=l[u]);if(l!=null&&fs)for(var u of fs(l))c.indexOf(u)<0&&bf.call(l,u)&&(d[u]=l[u]);return d},Rv=(l,c)=>function(){return c||(0,l[hf(l)[0]])((c={exports:{}}).exports,c),c.exports},Mv=(l,c)=>{for(var d in c)hs(l,d,{get:c[d],enumerable:!0})},Ov=(l,c,d,u)=>{if(c&&typeof c=="object"||typeof c=="function")for(let p of hf(c))!oc.call(l,p)&&p!==d&&hs(l,p,{get:()=>c[p],enumerable:!(u=Cv(c,p))||u.enumerable});return l},Dv=(l,c,d)=>(d=l!=null?Nv(Av(l)):{},Ov(!l||!l.__esModule?hs(d,"default",{value:l,enumerable:!0}):d,l)),wv=Rv({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(l,c){var d=(function(){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,p=0,x={},g={util:{encode:function R(N){return N instanceof T?new T(N.type,R(N.content),N.alias):Array.isArray(N)?N.map(R):N.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(R){return Object.prototype.toString.call(R).slice(8,-1)},objId:function(R){return R.__id||Object.defineProperty(R,"__id",{value:++p}),R.__id},clone:function R(N,E){E=E||{};var B,z;switch(g.util.type(N)){case"Object":if(z=g.util.objId(N),E[z])return E[z];B={},E[z]=B;for(var I in N)N.hasOwnProperty(I)&&(B[I]=R(N[I],E));return B;case"Array":return z=g.util.objId(N),E[z]?E[z]:(B=[],E[z]=B,N.forEach(function($,ae){B[ae]=R($,E)}),B);default:return N}},getLanguage:function(R){for(;R;){var N=u.exec(R.className);if(N)return N[1].toLowerCase();R=R.parentElement}return"none"},setLanguage:function(R,N){R.className=R.className.replace(RegExp(u,"gi"),""),R.classList.add("language-"+N)},isActive:function(R,N,E){for(var B="no-"+N;R;){var z=R.classList;if(z.contains(N))return!0;if(z.contains(B))return!1;R=R.parentElement}return!!E}},languages:{plain:x,plaintext:x,text:x,txt:x,extend:function(R,N){var E=g.util.clone(g.languages[R]);for(var B in N)E[B]=N[B];return E},insertBefore:function(R,N,E,B){B=B||g.languages;var z=B[R],I={};for(var $ in z)if(z.hasOwnProperty($)){if($==N)for(var ae in E)E.hasOwnProperty(ae)&&(I[ae]=E[ae]);E.hasOwnProperty($)||(I[$]=z[$])}var pe=B[R];return B[R]=I,g.languages.DFS(g.languages,function(X,fe){fe===pe&&X!=R&&(this[X]=I)}),I},DFS:function R(N,E,B,z){z=z||{};var I=g.util.objId;for(var $ in N)if(N.hasOwnProperty($)){E.call(N,$,N[$],B||$);var ae=N[$],pe=g.util.type(ae);pe==="Object"&&!z[I(ae)]?(z[I(ae)]=!0,R(ae,E,null,z)):pe==="Array"&&!z[I(ae)]&&(z[I(ae)]=!0,R(ae,E,$,z))}}},plugins:{},highlight:function(R,N,E){var B={code:R,grammar:N,language:E};if(g.hooks.run("before-tokenize",B),!B.grammar)throw new Error('The language "'+B.language+'" has no grammar.');return B.tokens=g.tokenize(B.code,B.grammar),g.hooks.run("after-tokenize",B),T.stringify(g.util.encode(B.tokens),B.language)},tokenize:function(R,N){var E=N.rest;if(E){for(var B in E)N[B]=E[B];delete N.rest}var z=new A;return y(z,z.head,R),f(R,z,N,z.head,0),V(z)},hooks:{all:{},add:function(R,N){var E=g.hooks.all;E[R]=E[R]||[],E[R].push(N)},run:function(R,N){var E=g.hooks.all[R];if(!(!E||!E.length))for(var B=0,z;z=E[B++];)z(N)}},Token:T};function T(R,N,E,B){this.type=R,this.content=N,this.alias=E,this.length=(B||"").length|0}T.stringify=function R(N,E){if(typeof N=="string")return N;if(Array.isArray(N)){var B="";return N.forEach(function(pe){B+=R(pe,E)}),B}var z={type:N.type,content:R(N.content,E),tag:"span",classes:["token",N.type],attributes:{},language:E},I=N.alias;I&&(Array.isArray(I)?Array.prototype.push.apply(z.classes,I):z.classes.push(I)),g.hooks.run("wrap",z);var $="";for(var ae in z.attributes)$+=" "+ae+'="'+(z.attributes[ae]||"").replace(/"/g,"&quot;")+'"';return"<"+z.tag+' class="'+z.classes.join(" ")+'"'+$+">"+z.content+"</"+z.tag+">"};function h(R,N,E,B){R.lastIndex=N;var z=R.exec(E);if(z&&B&&z[1]){var I=z[1].length;z.index+=I,z[0]=z[0].slice(I)}return z}function f(R,N,E,B,z,I){for(var $ in E)if(!(!E.hasOwnProperty($)||!E[$])){var ae=E[$];ae=Array.isArray(ae)?ae:[ae];for(var pe=0;pe<ae.length;++pe){if(I&&I.cause==$+","+pe)return;var X=ae[pe],fe=X.inside,Ee=!!X.lookbehind,Ze=!!X.greedy,He=X.alias;if(Ze&&!X.pattern.global){var Ue=X.pattern.toString().match(/[imsuy]*$/)[0];X.pattern=RegExp(X.pattern.source,Ue+"g")}for(var xa=X.pattern||X,Re=B.next,Ce=z;Re!==N.tail&&!(I&&Ce>=I.reach);Ce+=Re.value.length,Re=Re.next){var U=Re.value;if(N.length>R.length)return;if(!(U instanceof T)){var G=1,ee;if(Ze){if(ee=h(xa,Ce,R,Ee),!ee||ee.index>=R.length)break;var P=ee.index,Ae=ee.index+ee[0].length,he=Ce;for(he+=Re.value.length;P>=he;)Re=Re.next,he+=Re.value.length;if(he-=Re.value.length,Ce=he,Re.value instanceof T)continue;for(var j=Re;j!==N.tail&&(he<Ae||typeof j.value=="string");j=j.next)G++,he+=j.value.length;G--,U=R.slice(Ce,he),ee.index-=Ce}else if(ee=h(xa,0,U,Ee),!ee)continue;var P=ee.index,Y=ee[0],Q=U.slice(0,P),le=U.slice(P+Y.length),de=Ce+U.length;I&&de>I.reach&&(I.reach=de);var ve=Re.prev;Q&&(ve=y(N,ve,Q),Ce+=Q.length),J(N,ve,G);var ea=new T($,fe?g.tokenize(Y,fe):Y,He,Y);if(Re=y(N,ve,ea),le&&y(N,Re,le),G>1){var qe={cause:$+","+pe,reach:de};f(R,N,E,Re.prev,Ce,qe),I&&qe.reach>I.reach&&(I.reach=qe.reach)}}}}}}function A(){var R={value:null,prev:null,next:null},N={value:null,prev:R,next:null};R.next=N,this.head=R,this.tail=N,this.length=0}function y(R,N,E){var B=N.next,z={value:E,prev:N,next:B};return N.next=z,B.prev=z,R.length++,z}function J(R,N,E){for(var B=N.next,z=0;z<E&&B!==R.tail;z++)B=B.next;N.next=B,B.prev=N,R.length-=z}function V(R){for(var N=[],E=R.head.next;E!==R.tail;)N.push(E.value),E=E.next;return N}return g})();c.exports=d,d.default=d}}),k=Dv(wv());k.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},k.languages.markup.tag.inside["attr-value"].inside.entity=k.languages.markup.entity,k.languages.markup.doctype.inside["internal-subset"].inside=k.languages.markup,k.hooks.add("wrap",function(l){l.type==="entity"&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),Object.defineProperty(k.languages.markup.tag,"addInlined",{value:function(l,u){var d={},d=(d["language-"+u]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:k.languages[u]},d.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:d}}),u=(d["language-"+u]={pattern:/[\s\S]+/,inside:k.languages[u]},{});u[l]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:d},k.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(k.languages.markup.tag,"addAttribute",{value:function(l,c){k.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+l+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:k.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),k.languages.html=k.languages.markup,k.languages.mathml=k.languages.markup,k.languages.svg=k.languages.markup,k.languages.xml=k.languages.extend("markup",{}),k.languages.ssml=k.languages.xml,k.languages.atom=k.languages.xml,k.languages.rss=k.languages.xml,(function(l){var c={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},d=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,u="(?:[^\\\\-]|"+d.source+")",u=RegExp(u+"-"+u),p={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};l.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:u,inside:{escape:d,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":c,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:d}},"special-escape":c,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":p}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:d,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":p}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}})(k),k.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},k.languages.javascript=k.languages.extend("clike",{"class-name":[k.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),k.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,k.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:k.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:k.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:k.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:k.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:k.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),k.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:k.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),k.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),k.languages.markup&&(k.languages.markup.tag.addInlined("script","javascript"),k.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),k.languages.js=k.languages.javascript,k.languages.actionscript=k.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),k.languages.actionscript["class-name"].alias="function",delete k.languages.actionscript.parameter,delete k.languages.actionscript["literal-property"],k.languages.markup&&k.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:k.languages.markup}}),(function(l){var c=/#(?!\{).+/,d={pattern:/#\{[^}]+\}/,alias:"variable"};l.languages.coffeescript=l.languages.extend("javascript",{comment:c,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:d}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),l.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:c,interpolation:d}}}),l.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:l.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:d}}]}),l.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete l.languages.coffeescript["template-string"],l.languages.coffee=l.languages.coffeescript})(k),(function(l){var c=l.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(c,"addSupport",{value:function(d,u){(d=typeof d=="string"?[d]:d).forEach(function(p){var x=function(y){y.inside||(y.inside={}),y.inside.rest=u},g="doc-comment";if(T=l.languages[p]){var T,h=T[g];if((h=h||(T=l.languages.insertBefore(p,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[g])instanceof RegExp&&(h=T[g]={pattern:h}),Array.isArray(h))for(var f=0,A=h.length;f<A;f++)h[f]instanceof RegExp&&(h[f]={pattern:h[f]}),x(h[f]);else x(h)}})}}),c.addSupport(["java","javascript","php"],c)})(k),(function(l){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,c=(l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+c.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},l.languages.css.atrule.inside.rest=l.languages.css,l.languages.markup);c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))})(k),(function(l){var c=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,c=(l.languages.css.selector={pattern:l.languages.css.selector.pattern,lookbehind:!0,inside:c={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+c.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[c,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},l.languages.css.atrule.inside["selector-function-argument"].inside=c,l.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),d={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};l.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:c,number:d,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:c,number:d})})(k),(function(l){var c=/[*&][^\s[\]{},]+/,d=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,u="(?:"+d.source+"(?:[ 	]+"+c.source+")?|"+c.source+"(?:[ 	]+"+d.source+")?)",p=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),x=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function g(T,h){h=(h||"").replace(/m/g,"")+"m";var f=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return u}).replace(/<<value>>/g,function(){return T});return RegExp(f,h)}l.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return u})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return u}).replace(/<<key>>/g,function(){return"(?:"+p+"|"+x+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:g(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:g(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:g(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:g(x),lookbehind:!0,greedy:!0},number:{pattern:g(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:d,important:c,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},l.languages.yml=l.languages.yaml})(k),(function(l){var c=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function d(f){return f=f.replace(/<inner>/g,function(){return c}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+f+")")}var u=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,p=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return u}),x=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,g=(l.languages.markdown=l.languages.extend("markup",{}),l.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:l.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+p+x+"(?:"+p+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+p+x+")(?:"+p+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(u),inside:l.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+p+")"+x+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+p+"$"),inside:{"table-header":{pattern:RegExp(u),alias:"important",inside:l.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:d(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:d(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:d(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:d(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(f){["url","bold","italic","strike","code-snippet"].forEach(function(A){f!==A&&(l.languages.markdown[f].inside.content.inside[A]=l.languages.markdown[A])})}),l.hooks.add("after-tokenize",function(f){f.language!=="markdown"&&f.language!=="md"||(function A(y){if(y&&typeof y!="string")for(var J=0,V=y.length;J<V;J++){var R,N=y[J];N.type!=="code"?A(N.content):(R=N.content[1],N=N.content[3],R&&N&&R.type==="code-language"&&N.type==="code-block"&&typeof R.content=="string"&&(R=R.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),R="language-"+(R=(/[a-z][\w-]*/i.exec(R)||[""])[0].toLowerCase()),N.alias?typeof N.alias=="string"?N.alias=[N.alias,R]:N.alias.push(R):N.alias=[R]))}})(f.tokens)}),l.hooks.add("wrap",function(f){if(f.type==="code-block"){for(var A="",y=0,J=f.classes.length;y<J;y++){var V=f.classes[y],V=/language-(.+)/.exec(V);if(V){A=V[1];break}}var R,N=l.languages[A];N?f.content=l.highlight((function(E){return E=E.replace(g,""),E=E.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(B,z){var I;return(z=z.toLowerCase())[0]==="#"?(I=z[1]==="x"?parseInt(z.slice(2),16):Number(z.slice(1)),h(I)):T[z]||B})})(f.content),N,A):A&&A!=="none"&&l.plugins.autoloader&&(R="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random()),f.attributes.id=R,l.plugins.autoloader.loadLanguages(A,function(){var E=document.getElementById(R);E&&(E.innerHTML=l.highlight(E.textContent,l.languages[A],A))}))}}),RegExp(l.languages.markup.tag.pattern.source,"gi")),T={amp:"&",lt:"<",gt:">",quot:'"'},h=String.fromCodePoint||String.fromCharCode;l.languages.md=l.languages.markdown})(k),k.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:k.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},k.hooks.add("after-tokenize",function(l){if(l.language==="graphql")for(var c=l.tokens.filter(function(R){return typeof R!="string"&&R.type!=="comment"&&R.type!=="scalar"}),d=0;d<c.length;){var u=c[d++];if(u.type==="keyword"&&u.content==="mutation"){var p=[];if(y(["definition-mutation","punctuation"])&&A(1).content==="("){d+=2;var x=J(/^\($/,/^\)$/);if(x===-1)continue;for(;d<x;d++){var g=A(0);g.type==="variable"&&(V(g,"variable-input"),p.push(g.content))}d=x+1}if(y(["punctuation","property-query"])&&A(0).content==="{"&&(d++,V(A(0),"property-mutation"),0<p.length)){var T=J(/^\{$/,/^\}$/);if(T!==-1)for(var h=d;h<T;h++){var f=c[h];f.type==="variable"&&0<=p.indexOf(f.content)&&V(f,"variable-input")}}}}function A(R){return c[d+R]}function y(R,N){N=N||0;for(var E=0;E<R.length;E++){var B=A(E+N);if(!B||B.type!==R[E])return}return 1}function J(R,N){for(var E=1,B=d;B<c.length;B++){var z=c[B],I=z.content;if(z.type==="punctuation"&&typeof I=="string"){if(R.test(I))E++;else if(N.test(I)&&--E===0)return B}}return-1}function V(R,N){var E=R.alias;E?Array.isArray(E)||(R.alias=E=[E]):R.alias=E=[],E.push(N)}}),k.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},(function(l){var c=l.languages.javascript["template-string"],d=c.pattern.source,u=c.inside.interpolation,p=u.inside["interpolation-punctuation"],x=u.pattern.source;function g(y,J){if(l.languages[y])return{pattern:RegExp("((?:"+J+")\\s*)"+d),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:y}}}}function T(y,J,V){return y={code:y,grammar:J,language:V},l.hooks.run("before-tokenize",y),y.tokens=l.tokenize(y.code,y.grammar),l.hooks.run("after-tokenize",y),y.tokens}function h(y,J,V){var E=l.tokenize(y,{interpolation:{pattern:RegExp(x),lookbehind:!0}}),R=0,N={},E=T(E.map(function(z){if(typeof z=="string")return z;for(var I,$,z=z.content;y.indexOf(($=R++,I="___"+V.toUpperCase()+"_"+$+"___"))!==-1;);return N[I]=z,I}).join(""),J,V),B=Object.keys(N);return R=0,(function z(I){for(var $=0;$<I.length;$++){if(R>=B.length)return;var ae,pe,X,fe,Ee,Ze,He,Ue=I[$];typeof Ue=="string"||typeof Ue.content=="string"?(ae=B[R],(He=(Ze=typeof Ue=="string"?Ue:Ue.content).indexOf(ae))!==-1&&(++R,pe=Ze.substring(0,He),Ee=N[ae],X=void 0,(fe={})["interpolation-punctuation"]=p,(fe=l.tokenize(Ee,fe)).length===3&&((X=[1,1]).push.apply(X,T(fe[1],l.languages.javascript,"javascript")),fe.splice.apply(fe,X)),X=new l.Token("interpolation",fe,u.alias,Ee),fe=Ze.substring(He+ae.length),Ee=[],pe&&Ee.push(pe),Ee.push(X),fe&&(z(Ze=[fe]),Ee.push.apply(Ee,Ze)),typeof Ue=="string"?(I.splice.apply(I,[$,1].concat(Ee)),$+=Ee.length-1):Ue.content=Ee)):(He=Ue.content,Array.isArray(He)?z(He):z([He]))}})(E),new l.Token(V,E,"language-"+V,y)}l.languages.javascript["template-string"]=[g("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),g("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),g("svg",/\bsvg/.source),g("markdown",/\b(?:markdown|md)/.source),g("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),g("sql",/\bsql/.source),c].filter(Boolean);var f={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function A(y){return typeof y=="string"?y:Array.isArray(y)?y.map(A).join(""):A(y.content)}l.hooks.add("after-tokenize",function(y){y.language in f&&(function J(V){for(var R=0,N=V.length;R<N;R++){var E,B,z,I=V[R];typeof I!="string"&&(E=I.content,Array.isArray(E)?I.type==="template-string"?(I=E[1],E.length===3&&typeof I!="string"&&I.type==="embedded-code"&&(B=A(I),I=I.alias,I=Array.isArray(I)?I[0]:I,z=l.languages[I])&&(E[1]=h(B,z,I))):J(E):typeof E!="string"&&J([E]))}})(y.tokens)})})(k),(function(l){l.languages.typescript=l.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),l.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete l.languages.typescript.parameter,delete l.languages.typescript["literal-property"];var c=l.languages.extend("typescript",{});delete c["class-name"],l.languages.typescript["class-name"].inside=c,l.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:c}}}}),l.languages.ts=l.languages.typescript})(k),(function(l){var c=l.languages.javascript,d=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,u="(@(?:arg|argument|param|property)\\s+(?:"+d+"\\s+)?)";l.languages.jsdoc=l.languages.extend("javadoclike",{parameter:{pattern:RegExp(u+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),l.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(u+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:c,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return d})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+d),lookbehind:!0,inside:{string:c.string,number:c.number,boolean:c.boolean,keyword:l.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:c,alias:"language-javascript"}}}}),l.languages.javadoclike.addSupport("javascript",l.languages.jsdoc)})(k),(function(l){l.languages.flow=l.languages.extend("javascript",{}),l.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),l.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete l.languages.flow.parameter,l.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(l.languages.flow.keyword)||(l.languages.flow.keyword=[l.languages.flow.keyword]),l.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})})(k),k.languages.n4js=k.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),k.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),k.languages.n4jsd=k.languages.n4js,(function(l){function c(g,T){return RegExp(g.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),T)}l.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+l.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),l.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+l.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),l.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),l.languages.insertBefore("javascript","keyword",{imports:{pattern:c(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:l.languages.javascript},exports:{pattern:c(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:l.languages.javascript}}),l.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),l.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),l.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:c(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var d=["function","function-variable","method","method-variable","property-access"],u=0;u<d.length;u++){var x=d[u],p=l.languages.javascript[x],x=(p=l.util.type(p)==="RegExp"?l.languages.javascript[x]={pattern:p}:p).inside||{};(p.inside=x)["maybe-class-name"]=/^[A-Z][\s\S]*/}})(k),(function(l){var c=l.util.clone(l.languages.javascript),d=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,u=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,p=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function x(h,f){return h=h.replace(/<S>/g,function(){return d}).replace(/<BRACES>/g,function(){return u}).replace(/<SPREAD>/g,function(){return p}),RegExp(h,f)}p=x(p).source,l.languages.jsx=l.languages.extend("markup",c),l.languages.jsx.tag.pattern=x(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),l.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,l.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,l.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,l.languages.jsx.tag.inside.comment=c.comment,l.languages.insertBefore("inside","attr-name",{spread:{pattern:x(/<SPREAD>/.source),inside:l.languages.jsx}},l.languages.jsx.tag),l.languages.insertBefore("inside","special-attr",{script:{pattern:x(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:l.languages.jsx}}},l.languages.jsx.tag);function g(h){for(var f=[],A=0;A<h.length;A++){var y=h[A],J=!1;typeof y!="string"&&(y.type==="tag"&&y.content[0]&&y.content[0].type==="tag"?y.content[0].content[0].content==="</"?0<f.length&&f[f.length-1].tagName===T(y.content[0].content[1])&&f.pop():y.content[y.content.length-1].content!=="/>"&&f.push({tagName:T(y.content[0].content[1]),openedBraces:0}):0<f.length&&y.type==="punctuation"&&y.content==="{"?f[f.length-1].openedBraces++:0<f.length&&0<f[f.length-1].openedBraces&&y.type==="punctuation"&&y.content==="}"?f[f.length-1].openedBraces--:J=!0),(J||typeof y=="string")&&0<f.length&&f[f.length-1].openedBraces===0&&(J=T(y),A<h.length-1&&(typeof h[A+1]=="string"||h[A+1].type==="plain-text")&&(J+=T(h[A+1]),h.splice(A+1,1)),0<A&&(typeof h[A-1]=="string"||h[A-1].type==="plain-text")&&(J=T(h[A-1])+J,h.splice(A-1,1),A--),h[A]=new l.Token("plain-text",J,null,J)),y.content&&typeof y.content!="string"&&g(y.content)}}var T=function(h){return h?typeof h=="string"?h:typeof h.content=="string"?h.content:h.content.map(T).join(""):""};l.hooks.add("after-tokenize",function(h){h.language!=="jsx"&&h.language!=="tsx"||g(h.tokens)})})(k),(function(l){var c=l.util.clone(l.languages.typescript),c=(l.languages.tsx=l.languages.extend("jsx",c),delete l.languages.tsx.parameter,delete l.languages.tsx["literal-property"],l.languages.tsx.tag);c.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+c.pattern.source+")",c.pattern.flags),c.lookbehind=!0})(k),k.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},k.languages.swift["string-literal"].forEach(function(l){l.inside.interpolation.inside=k.languages.swift}),(function(l){l.languages.kotlin=l.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete l.languages.kotlin["class-name"];var c={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:l.languages.kotlin}};l.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:c},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:c},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete l.languages.kotlin.string,l.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),l.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),l.languages.kt=l.languages.kotlin,l.languages.kts=l.languages.kotlin})(k),k.languages.c=k.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),k.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),k.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},k.languages.c.string],char:k.languages.c.char,comment:k.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:k.languages.c}}}}),k.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete k.languages.c.boolean,k.languages.objectivec=k.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete k.languages.objectivec["class-name"],k.languages.objc=k.languages.objectivec,k.languages.reason=k.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),k.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete k.languages.reason.function,(function(l){for(var c=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,d=0;d<2;d++)c=c.replace(/<self>/g,function(){return c});c=c.replace(/<self>/g,function(){return/[^\s\S]/.source}),l.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+c),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},l.languages.rust["closure-params"].inside.rest=l.languages.rust,l.languages.rust.attribute.inside.string=l.languages.rust.string})(k),k.languages.go=k.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),k.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete k.languages.go["class-name"],(function(l){var c=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,d=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return c.source});l.languages.cpp=l.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return c.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:c,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),l.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return d})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),l.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:l.languages.cpp}}}}),l.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),l.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:l.languages.extend("cpp",{})}}),l.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},l.languages.cpp["base-clause"])})(k),k.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},k.languages.python["string-interpolation"].inside.interpolation.inside.rest=k.languages.python,k.languages.py=k.languages.python,k.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},k.languages.webmanifest=k.languages.json;var vf={};Mv(vf,{dracula:()=>Uv,duotoneDark:()=>qv,duotoneLight:()=>_v,github:()=>Pv,gruvboxMaterialDark:()=>xj,gruvboxMaterialLight:()=>hj,jettwaveDark:()=>lj,jettwaveLight:()=>cj,nightOwl:()=>Iv,nightOwlLight:()=>Fv,oceanicNext:()=>Gv,okaidia:()=>Qv,oneDark:()=>dj,oneLight:()=>pj,palenight:()=>Zv,shadesOfPurple:()=>$v,synthwave84:()=>ej,ultramin:()=>tj,vsDark:()=>jf,vsLight:()=>ij});var Lv={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},Uv=Lv,zv={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},qv=zv,Bv={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},_v=Bv,kv={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},Pv=kv,Hv={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},Iv=Hv,Jv={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},Fv=Jv,Ta={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",tag:"#fc929e",function:"#79b6f2",className:"#FAC863"},Vv={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:Ta.keyword}},{types:["attr-value"],style:{color:Ta.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:Ta.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:Ta.primitive}},{types:["boolean"],style:{color:Ta.boolean}},{types:["tag"],style:{color:Ta.tag}},{types:["string"],style:{color:Ta.string}},{types:["punctuation"],style:{color:Ta.string}},{types:["selector","char","builtin","inserted"],style:{color:Ta.char}},{types:["function"],style:{color:Ta.function}},{types:["operator","entity","url","variable"],style:{color:Ta.variable}},{types:["keyword"],style:{color:Ta.keyword}},{types:["atrule","class-name"],style:{color:Ta.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},Gv=Vv,Yv={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},Qv=Yv,Xv={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},Zv=Xv,Kv={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},$v=Kv,Wv={plain:{backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},ej=Wv,aj={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},tj=aj,nj={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},jf=nj,rj={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},ij=rj,sj={plain:{color:"#f8fafc",backgroundColor:"#011627"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#569CD6"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#f8fafc"}},{types:["attr-name","variable"],style:{color:"#9CDCFE"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#cbd5e1"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#D4D4D4"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#7dd3fc"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},lj=sj,oj={plain:{color:"#0f172a",backgroundColor:"#f1f5f9"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#0c4a6e"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#0f172a"}},{types:["attr-name","variable"],style:{color:"#0c4a6e"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#64748b"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#475569"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#0e7490"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},cj=oj,uj={plain:{backgroundColor:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(220, 10%, 40%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(220, 14%, 71%)"}},{types:["attr-name","class-name","maybe-class-name","boolean","constant","number","atrule"],style:{color:"hsl(29, 54%, 61%)"}},{types:["keyword"],style:{color:"hsl(286, 60%, 67%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(355, 65%, 65%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value"],style:{color:"hsl(95, 38%, 62%)"}},{types:["variable","operator","function"],style:{color:"hsl(207, 82%, 66%)"}},{types:["url"],style:{color:"hsl(187, 47%, 55%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(220, 14%, 71%)"}}]},dj=uj,mj={plain:{backgroundColor:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(230, 4%, 64%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(230, 8%, 24%)"}},{types:["attr-name","class-name","boolean","constant","number","atrule"],style:{color:"hsl(35, 99%, 36%)"}},{types:["keyword"],style:{color:"hsl(301, 63%, 40%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(5, 74%, 59%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value","punctuation"],style:{color:"hsl(119, 34%, 47%)"}},{types:["variable","operator","function"],style:{color:"hsl(221, 87%, 60%)"}},{types:["url"],style:{color:"hsl(198, 99%, 37%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(230, 8%, 24%)"}}]},pj=mj,fj={plain:{color:"#ebdbb2",backgroundColor:"#292828"},styles:[{types:["imports","class-name","maybe-class-name","constant","doctype","builtin","function"],style:{color:"#d8a657"}},{types:["property-access"],style:{color:"#7daea3"}},{types:["tag"],style:{color:"#e78a4e"}},{types:["attr-name","char","url","regex"],style:{color:"#a9b665"}},{types:["attr-value","string"],style:{color:"#89b482"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#ea6962"}},{types:["entity","number","symbol"],style:{color:"#d3869b"}}]},xj=fj,gj={plain:{color:"#654735",backgroundColor:"#f9f5d7"},styles:[{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#af2528"}},{types:["imports","class-name","maybe-class-name","constant","doctype","builtin"],style:{color:"#b4730e"}},{types:["string","attr-value"],style:{color:"#477a5b"}},{types:["property-access"],style:{color:"#266b79"}},{types:["function","attr-name","char","url"],style:{color:"#72761e"}},{types:["tag"],style:{color:"#b94c07"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["entity","number","symbol"],style:{color:"#924f79"}}]},hj=gj,bj=l=>L.useCallback(c=>{var d=c,{className:u,style:p,line:x}=d,g=yf(d,["className","style","line"]);const T=bs(Ga({},g),{className:gf("token-line",u)});return typeof l=="object"&&"plain"in l&&(T.style=l.plain),typeof p=="object"&&(T.style=Ga(Ga({},T.style||{}),p)),T},[l]),yj=l=>{const c=L.useCallback(({types:d,empty:u})=>{if(l!=null){{if(d.length===1&&d[0]==="plain")return u!=null?{display:"inline-block"}:void 0;if(d.length===1&&u!=null)return l[d[0]]}return Object.assign(u!=null?{display:"inline-block"}:{},...d.map(p=>l[p]))}},[l]);return L.useCallback(d=>{var u=d,{token:p,className:x,style:g}=u,T=yf(u,["token","className","style"]);const h=bs(Ga({},T),{className:gf("token",...p.types,x),children:p.content,style:c(p)});return g!=null&&(h.style=Ga(Ga({},h.style||{}),g)),h},[c])},vj=/\r\n|\r|\n/,Bp=l=>{l.length===0?l.push({types:["plain"],content:`
`,empty:!0}):l.length===1&&l[0].content===""&&(l[0].content=`
`,l[0].empty=!0)},_p=(l,c)=>{const d=l.length;return d>0&&l[d-1]===c?l:l.concat(c)},jj=l=>{const c=[[]],d=[l],u=[0],p=[l.length];let x=0,g=0,T=[];const h=[T];for(;g>-1;){for(;(x=u[g]++)<p[g];){let f,A=c[g];const J=d[g][x];if(typeof J=="string"?(A=g>0?A:["plain"],f=J):(A=_p(A,J.type),J.alias&&(A=_p(A,J.alias)),f=J.content),typeof f!="string"){g++,c.push(A),d.push(f),u.push(0),p.push(f.length);continue}const V=f.split(vj),R=V.length;T.push({types:A,content:V[0]});for(let N=1;N<R;N++)Bp(T),h.push(T=[]),T.push({types:A,content:V[N]})}g--,c.pop(),d.pop(),u.pop(),p.pop()}return Bp(T),h},kp=jj,Sj=({prism:l,code:c,grammar:d,language:u})=>L.useMemo(()=>{if(d==null)return kp([c]);const p={code:c,grammar:d,language:u,tokens:[]};return l.hooks.run("before-tokenize",p),p.tokens=l.tokenize(c,d),l.hooks.run("after-tokenize",p),kp(p.tokens)},[c,d,u,l]),Nj=(l,c)=>{const{plain:d}=l,u=l.styles.reduce((p,x)=>{const{languages:g,style:T}=x;return g&&!g.includes(c)||x.types.forEach(h=>{const f=Ga(Ga({},p[h]),T);p[h]=f}),p},{});return u.root=d,u.plain=bs(Ga({},d),{backgroundColor:void 0}),u},Ej=Nj,Cj=({children:l,language:c,code:d,theme:u,prism:p})=>{const x=c.toLowerCase(),g=Ej(u,x),T=bj(g),h=yj(g),f=p.languages[x],A=Sj({prism:p,language:x,code:d,grammar:f});return l({tokens:A,className:`prism-code language-${x}`,style:g!=null?g.root:{},getLineProps:T,getTokenProps:h})},Tj=l=>L.createElement(Cj,bs(Ga({},l),{prism:l.prism||k,theme:l.theme||jf,code:l.code,language:l.language}));k.languages.java={comment:[{pattern:/\/\*\*[\s\S]*?\*\//,greedy:!0},{pattern:/\/\*[\s\S]*?\*\//,greedy:!0},{pattern:/\/\/.*/,greedy:!0}],string:[{pattern:/"""[\s\S]*?"""/,greedy:!0},{pattern:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0}],annotation:{pattern:/@\w+(?:\.\w+)*/,alias:"builtin"},keyword:/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,boolean:/\b(?:true|false)\b/,number:/\b0(?:x[\da-f_]+|b[01_]+|[0-7_]+)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:[eE][+-]?\d[\d_]*)?[dDfFlL]?\b/i,function:/\b\w+(?=\s*\()/,operator:/->|[<>]=?|[!=]=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]|<<=?|>>>?=?/,punctuation:/[{}[\];(),.:]/};k.languages.sql={comment:[{pattern:/\/\*[\s\S]*?\*\//,greedy:!0},{pattern:/--.*/}],string:{pattern:/(')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:/\b(?:SELECT|FROM|WHERE|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER|TABLE|INDEX|INTO|VALUES|SET|JOIN|LEFT|RIGHT|INNER|OUTER|ON|AND|OR|NOT|NULL|IS|IN|BETWEEN|LIKE|ORDER|BY|GROUP|HAVING|LIMIT|OFFSET|AS|DISTINCT|COUNT|SUM|AVG|MAX|MIN|EXISTS|UNION|ALL|PRIMARY|KEY|FOREIGN|REFERENCES|CONSTRAINT|DEFAULT|AUTO_INCREMENT|CASCADE|UNIQUE|CHECK|VIEW|TRIGGER|PROCEDURE|FUNCTION|BEGIN|END|IF|ELSE|THEN|CASE|WHEN|COMMIT|ROLLBACK|GRANT|REVOKE|VARCHAR|INT|INTEGER|BIGINT|BOOLEAN|DATE|TIMESTAMP|TEXT|FLOAT|DOUBLE|DECIMAL)\b/i,number:/\b\d+(?:\.\d+)?\b/,boolean:/\b(?:TRUE|FALSE)\b/i,operator:/[=<>!]+/,punctuation:/[;(),.*]/};k.languages.properties={comment:{pattern:/^[#!].*$/m},key:{pattern:/^[\w.-]+(?=\s*[=:])/m,alias:"attr-name"},value:{pattern:new RegExp("(?<=[=:])\\s*.+","m"),alias:"attr-value"},punctuation:/[=:]/};const Aj=vf.nightOwl;function S({code:l,language:c="java",filename:d}){const[u,p]=L.useState(!1),x=()=>{navigator.clipboard.writeText(l.trim()),p(!0),setTimeout(()=>p(!1),2e3)},g=c==="java"?"Java":c==="bash"?"Terminal":c==="xml"?"XML":c==="json"?"JSON":c==="sql"?"SQL":c==="yaml"?"YAML":c;return t.jsxs("div",{className:"rounded-xl overflow-hidden border border-[#2d333b] my-5 shadow-lg shadow-black/20",children:[t.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5",style:{background:"#01111d"},children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsxs("div",{className:"flex gap-1.5",children:[t.jsx("span",{className:"w-3 h-3 rounded-full bg-[#ff5f57]"}),t.jsx("span",{className:"w-3 h-3 rounded-full bg-[#febc2e]"}),t.jsx("span",{className:"w-3 h-3 rounded-full bg-[#28c840]"})]}),d&&t.jsxs("span",{className:"text-[#8b949e] text-sm font-mono ml-2 flex items-center gap-1.5",children:[t.jsx(df,{size:14}),d]}),!d&&t.jsx("span",{className:"text-[#6e7681] text-xs font-mono ml-2",children:g})]}),t.jsxs("button",{onClick:x,className:"flex items-center gap-1.5 text-xs text-[#8b949e] hover:text-[#e6edf3] transition-colors cursor-pointer px-2 py-1 rounded hover:bg-white/5",children:[u?t.jsx(Wb,{size:13,className:"text-[#3fb950]"}):t.jsx(dy,{size:13}),u?"Copiado!":"Copiar"]})]}),t.jsx(Tj,{theme:Aj,code:l.trim(),language:c,children:({tokens:T,getLineProps:h,getTokenProps:f})=>t.jsx("pre",{style:{margin:0,padding:"1rem 0",background:"#011627",overflowX:"auto",fontSize:"0.875rem",lineHeight:"1.7"},children:T.map((A,y)=>{const J=h({line:A});return t.jsxs("div",{style:{...J.style,display:"table-row"},children:[t.jsx("span",{style:{display:"table-cell",paddingRight:"1rem",paddingLeft:"1rem",textAlign:"right",userSelect:"none",opacity:.3,fontSize:"0.75rem",width:"2rem",color:"#8b949e"},children:y+1}),t.jsx("span",{style:{display:"table-cell",paddingRight:"1rem"},children:A.map((V,R)=>{const N=f({token:V});return t.jsx("span",{...N},R)})})]},y)})})})]})}const Rj={info:{icon:My,bg:"bg-accent/10",border:"border-accent/30",iconColor:"text-accent",defaultTitle:"Nota"},warning:{icon:lv,bg:"bg-warning/10",border:"border-warning/30",iconColor:"text-warning",defaultTitle:"Importante"},tip:{icon:pf,bg:"bg-success/10",border:"border-success/30",iconColor:"text-success",defaultTitle:"Tip"},angular:{icon:Zo,bg:"bg-angular/10",border:"border-angular/30",iconColor:"text-angular",defaultTitle:"Comparación con Angular/TypeScript"},spring:{icon:mf,bg:"bg-spring/10",border:"border-spring/30",iconColor:"text-spring",defaultTitle:"Spring Boot"}};function F({type:l="info",title:c,children:d}){const u=Rj[l],p=u.icon;return t.jsxs("div",{className:`${u.bg} ${u.border} border rounded-xl p-4 my-4`,children:[t.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[t.jsx(p,{size:18,className:u.iconColor}),t.jsx("span",{className:`font-semibold text-sm ${u.iconColor}`,children:c||u.defaultTitle})]}),t.jsx("div",{className:"text-text-muted text-sm leading-relaxed",children:d})]})}function oe({day:l,title:c,duration:d,commitMsg:u}){return t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[t.jsx("div",{className:"flex-shrink-0 w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center",children:t.jsx("span",{className:"text-primary font-bold text-lg",children:l})}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center gap-2 text-xs text-text-muted mb-0.5",children:[t.jsx(Kb,{size:12}),t.jsxs("span",{children:["Día ",l]}),t.jsx("span",{className:"text-border",children:"•"}),t.jsx(cf,{size:12}),t.jsx("span",{children:d})]}),t.jsx("h1",{className:"text-3xl font-bold text-java",children:c})]})]}),u&&t.jsxs("div",{className:"flex items-center gap-2 mt-3 px-3 py-2 rounded-lg bg-[#161b22] border border-[#30363d] text-sm font-mono",children:[t.jsx(Ko,{size:14,className:"text-success flex-shrink-0"}),t.jsx("span",{className:"text-success",children:"git commit -m"}),t.jsxs("span",{className:"text-[#e6edf3]",children:['"',u,'"']})]})]})}function ne({title:l="¿Cómo pensarlo?",children:c}){return t.jsxs("div",{className:"my-6 rounded-xl border border-accent/30 overflow-hidden",children:[t.jsxs("div",{className:"bg-accent/10 px-5 py-3 flex items-center gap-2.5",children:[t.jsx(sc,{size:18,className:"text-accent"}),t.jsx("span",{className:"font-semibold text-sm text-accent",children:l})]}),t.jsx("div",{className:"px-5 py-4 bg-accent/5 text-text-muted text-sm leading-relaxed space-y-3",children:c})]})}function Pp({title:l="Paso a paso",steps:c}){return t.jsxs("div",{className:"my-6 rounded-xl border border-border overflow-hidden",children:[t.jsxs("div",{className:"bg-surface-lighter/40 px-5 py-3 flex items-center gap-2.5",children:[t.jsx(Hb,{size:16,className:"text-primary"}),t.jsx("span",{className:"font-semibold text-sm text-text",children:l})]}),t.jsx("div",{className:"px-5 py-4 space-y-0",children:c.map((d,u)=>t.jsxs("div",{className:"flex gap-3 py-3 border-b border-border/30 last:border-0",children:[t.jsx("div",{className:"flex-shrink-0 w-7 h-7 rounded-full bg-primary/15 text-primary font-bold text-xs flex items-center justify-center mt-0.5",children:u+1}),t.jsxs("div",{children:[t.jsx("p",{className:"text-text text-sm font-medium",children:d.instruction}),d.detail&&t.jsx("p",{className:"text-text-muted text-xs mt-1 leading-relaxed",children:d.detail})]})]},u))})]})}function K({number:l,title:c,description:d,hint:u,solution:p,solutionLanguage:x="java",solutionFilename:g}){const[T,h]=L.useState(!1),[f,A]=L.useState(!1);return t.jsxs("div",{className:"my-6 rounded-xl border-2 border-primary/30 overflow-hidden",children:[t.jsxs("div",{className:"bg-primary/10 px-5 py-4 flex items-center gap-3",children:[t.jsx("div",{className:"flex-shrink-0 w-9 h-9 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center",children:t.jsx(lc,{size:18,className:"text-primary"})}),t.jsxs("div",{children:[t.jsxs("span",{className:"text-xs font-bold text-primary uppercase tracking-wider",children:["Ejercicio ",l]}),t.jsx("h4",{className:"text-text font-semibold text-sm mt-0.5",children:c})]})]}),t.jsxs("div",{className:"px-5 py-4 bg-surface-light/50",children:[t.jsx("p",{className:"text-text-muted text-sm leading-relaxed whitespace-pre-line",children:d}),u&&t.jsxs("button",{onClick:()=>h(!T),className:"mt-3 flex items-center gap-2 text-xs text-warning hover:text-warning/80 transition-colors cursor-pointer",children:[t.jsx(pf,{size:14}),T?"Ocultar pista":"Necesito una pista",T?t.jsx(Op,{size:14}):t.jsx(Mp,{size:14})]}),T&&u&&t.jsxs("div",{className:"mt-2 p-3 rounded-lg bg-warning/10 border border-warning/20 text-sm text-warning/90",children:["💡 ",u]})]}),t.jsxs("div",{className:"px-5 py-3 border-t border-border/50",children:[t.jsxs("button",{onClick:()=>A(!f),className:"flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors cursor-pointer",children:[t.jsx(ry,{size:16}),f?"Ocultar solución":"Ver solución",f?t.jsx(Op,{size:14}):t.jsx(Mp,{size:14})]}),f&&t.jsx("div",{className:"mt-3",children:t.jsx(S,{code:p,language:x,filename:g})})]})]})}function Mj(){return t.jsxs("div",{children:[t.jsx(oe,{day:1,title:"Introducción a Java",duration:"45 min",commitMsg:"dia-1: primer programa Java - HolaMundo"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy vas a entender qué es Java, cómo funciona por dentro, y vas a escribir y ejecutar tu primer programa. No solo leer — vas a ",t.jsx("strong",{className:"text-text",children:"hacer"}),"."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es Java y por qué te importa?"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Java es un lenguaje ",t.jsx("strong",{className:"text-text",children:"orientado a objetos"}),",",t.jsx("strong",{className:"text-text",children:" fuertemente tipado"})," y ",t.jsx("strong",{className:"text-text",children:"compilado"}),". Fue creado en 1995 por James Gosling y hoy lo mantiene Oracle."]}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Su filosofía es ",t.jsx("strong",{className:"text-text",children:'"Write Once, Run Anywhere" (WORA)'}),": escribes el código una vez y se ejecuta en cualquier plataforma con una JVM."]}),t.jsxs(ne,{title:"¿Por qué debería aprender Java si ya sé TypeScript?",children:[t.jsxs("p",{children:["Piénsalo así: TypeScript te da tipado estático ",t.jsx("em",{children:"opcional"})," sobre JavaScript. Java te da tipado estático ",t.jsx("em",{children:"obligatorio"})," desde el primer día. Eso significa que el compilador atrapa más errores antes de que tu código se ejecute."]}),t.jsx("p",{children:"El 90% de los sistemas bancarios, aerolíneas y gobiernos corren sobre Java. Si quieres trabajar en backend enterprise, Java es el lenguaje que abre esas puertas. Spring Boot (que aprenderemos en la Fase 7) es el equivalente de NestJS pero con un ecosistema mucho más maduro."})]}),t.jsxs(F,{type:"angular",children:["En Angular trabajas con TypeScript, que se ",t.jsx("strong",{children:"transpila"})," a JavaScript y se ejecuta en el navegador. En Java, el código se ",t.jsx("strong",{children:"compila"})," a ",t.jsx("code",{className:"text-primary",children:"bytecode"})," y se ejecuta en la JVM. El concepto es similar: un paso intermedio antes de la ejecución."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"JDK, JRE y JVM — Las tres piezas clave"}),t.jsxs(ne,{title:"¿Cómo pensar en estas tres piezas?",children:[t.jsxs("p",{children:["Imagina una ",t.jsx("strong",{className:"text-text",children:"muñeca rusa (matrioska)"}),". La más grande es el JDK, que contiene al JRE, que contiene a la JVM. Cada capa agrega herramientas:"]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"JVM"})," = el motor que ejecuta tu programa.",t.jsx("strong",{className:"text-text",children:" JRE"})," = el motor + las bibliotecas (java.util, java.lang...).",t.jsx("strong",{className:"text-text",children:" JDK"})," = todo lo anterior + herramientas para desarrollar (compilador, debugger)."]}),t.jsxs("p",{children:["Como desarrollador, siempre instalas el ",t.jsx("strong",{className:"text-text",children:"JDK"}),". Es todo lo que necesitas."]})]}),t.jsxs("div",{className:"space-y-4 mb-6",children:[t.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-4",children:[t.jsx("h3",{className:"font-semibold text-java mb-2",children:"JVM (Java Virtual Machine)"}),t.jsx("p",{className:"text-text-muted text-sm",children:"Ejecuta el bytecode de Java. Cada sistema operativo tiene su propia JVM, pero todos ejecutan el mismo bytecode. Es lo que hace a Java multiplataforma."})]}),t.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-4",children:[t.jsx("h3",{className:"font-semibold text-java mb-2",children:"JRE (Java Runtime Environment)"}),t.jsxs("p",{className:"text-text-muted text-sm",children:["JVM + bibliotecas estándar. Lo que necesitas para ",t.jsx("strong",{className:"text-text",children:"ejecutar"})," programas Java."]})]}),t.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-4",children:[t.jsx("h3",{className:"font-semibold text-java mb-2",children:"JDK (Java Development Kit)"}),t.jsxs("p",{className:"text-text-muted text-sm",children:["JRE + compilador (",t.jsx("code",{className:"text-primary",children:"javac"}),") + debugger + herramientas. Lo que necesitas para ",t.jsx("strong",{className:"text-text",children:"escribir y compilar"})," programas."]})]})]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Instalación paso a paso"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Antes de escribir código, necesitas tener el JDK instalado. Vamos a hacerlo juntos:"}),t.jsx(Pp,{title:"Instalar JDK 21 en tu máquina",steps:[{instruction:"Descarga el JDK 21 (LTS)",detail:"Ve a adoptium.net o oracle.com/java y descarga JDK 21 para tu sistema operativo."},{instruction:"Ejecuta el instalador",detail:"En Windows: siguiente, siguiente, instalar. En macOS: abre el .dmg y arrastra. En Linux: usa tu gestor de paquetes (apt, dnf, etc.)."},{instruction:"Verifica la instalación en tu terminal",detail:"Abre una terminal y ejecuta los comandos de abajo."},{instruction:"Instala IntelliJ IDEA Community",detail:"Descarga de jetbrains.com/idea. La versión Community es gratuita y perfecta para aprender."}]}),t.jsx(S,{language:"bash",filename:"Terminal — Verificar instalación",code:`
# Verificar que Java está instalado
java --version
# Debería mostrar algo como: openjdk 21.0.x ...

# Verificar el compilador
javac --version
# Debería mostrar algo como: javac 21.0.x
`}),t.jsxs(F,{type:"warning",title:"¿No te reconoce el comando java?",children:['Si la terminal dice "java no se reconoce como un comando", necesitas agregar el JDK al PATH de tu sistema. En Windows: Panel de control → Variables de entorno → PATH → agrega la ruta del bin del JDK (ejemplo: ',t.jsx("code",{className:"text-primary",children:"C:\\Program Files\\Java\\jdk-21\\bin"}),")."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Tu primer programa: HolaMundo"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Ahora sí, manos al código. Vas a crear tu primer archivo Java y ejecutarlo. Presta atención a ",t.jsx("strong",{className:"text-text",children:"cada parte"})," del código:"]}),t.jsx(Pp,{title:"Crear tu primer proyecto en IntelliJ",steps:[{instruction:"Abre IntelliJ IDEA",detail:'Si es la primera vez, selecciona "New Project".'},{instruction:"Configura el proyecto",detail:'Name: java-mastery-45-dias, Language: Java, Build system: IntelliJ, JDK: 21. Click "Create".'},{instruction:"Crea el archivo HolaMundo.java",detail:'Click derecho en la carpeta "src" → New → Java Class → escribe "HolaMundo".'},{instruction:"Escribe el código de abajo",detail:"No copies y pegues. Escríbelo tú mismo — así tu cerebro empieza a memorizar la estructura."},{instruction:"Ejecuta el programa",detail:"Click derecho en el archivo → Run, o usa el atajo Shift+F10 (Windows) / Ctrl+R (Mac)."}]}),t.jsx(S,{language:"java",filename:"HolaMundo.java",code:`
public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("¡Hola, Mundo!");
    }
}
`}),t.jsxs(ne,{title:"¿Qué significa cada palabra de este código?",children:[t.jsx("p",{children:"Vamos parte por parte, porque entender esto es la base de TODO lo que viene después:"}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"public"})," — Modificador de acceso. Significa que esta clase es visible para todos. Por ahora, siempre pondrás ",t.jsx("code",{className:"text-primary",children:"public"})," en tu clase principal."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"class HolaMundo"})," — Defines una clase llamada HolaMundo. En Java ",t.jsx("em",{children:"todo"})," el código vive dentro de una clase. El nombre ",t.jsx("em",{children:"debe"})," coincidir exactamente con el nombre del archivo (HolaMundo.java)."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"public static void main(String[] args)"})," — Este es el punto de entrada. La JVM busca exactamente este método para arrancar tu programa. No puedes cambiarle el nombre ni la firma. ",t.jsx("code",{className:"text-primary",children:"static"})," = no necesita una instancia. ",t.jsx("code",{className:"text-primary",children:"void"})," = no retorna nada.",t.jsx("code",{className:"text-primary",children:" String[] args"})," = argumentos desde la línea de comandos."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"System.out.println()"})," — Imprime texto en la consola y agrega un salto de línea al final. ",t.jsx("code",{className:"text-primary",children:"System"})," es una clase del sistema, ",t.jsx("code",{className:"text-primary",children:"out"})," es el flujo de salida estándar."]})]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Cómo funciona por dentro?"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:'Cuando hiciste click en "Run" en IntelliJ, esto es lo que pasó detrás de escenas:'}),t.jsx(S,{language:"bash",filename:"Lo que IntelliJ hizo por ti",code:`
# Paso 1: El compilador convierte .java → .class (bytecode)
javac HolaMundo.java
# Genera: HolaMundo.class

# Paso 2: La JVM ejecuta el bytecode
java HolaMundo
# Salida: ¡Hola, Mundo!

# NOTA: No pones .class al ejecutar
# NOTA: El archivo .class no es legible por humanos — es bytecode
`}),t.jsxs(F,{type:"info",children:["IntelliJ hace estos dos pasos automáticamente con un solo click. Pero es fundamental que entiendas el proceso: ",t.jsx("strong",{children:"tu código → compilador → bytecode → JVM → ejecución"}),". Cuando algo falle, saber en qué paso ocurrió el error te ahorra horas de debugging."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Java vs TypeScript — Mapa mental"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Si vienes de TypeScript, esta tabla te ayuda a conectar lo que ya sabes:"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full text-sm text-text-muted",children:[t.jsx("thead",{children:t.jsxs("tr",{className:"border-b border-border",children:[t.jsx("th",{className:"text-left py-3 px-4 text-text",children:"Concepto"}),t.jsx("th",{className:"text-left py-3 px-4 text-angular",children:"TypeScript"}),t.jsx("th",{className:"text-left py-3 px-4 text-java",children:"Java"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-3 px-4",children:"Tipado"}),t.jsx("td",{className:"py-3 px-4",children:"Estático (opcional)"}),t.jsx("td",{className:"py-3 px-4",children:"Estático (obligatorio)"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-3 px-4",children:"Compilación"}),t.jsx("td",{className:"py-3 px-4",children:"Transpila a JS"}),t.jsx("td",{className:"py-3 px-4",children:"Compila a bytecode"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-3 px-4",children:"Ejecución"}),t.jsx("td",{className:"py-3 px-4",children:"Navegador / Node.js"}),t.jsx("td",{className:"py-3 px-4",children:"JVM"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-3 px-4",children:"Punto de entrada"}),t.jsx("td",{className:"py-3 px-4",children:"main.ts / index.ts"}),t.jsx("td",{className:"py-3 px-4",children:"public static void main()"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-3 px-4",children:"Dependencias"}),t.jsx("td",{className:"py-3 px-4",children:"npm / yarn / pnpm"}),t.jsx("td",{className:"py-3 px-4",children:"Maven / Gradle"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"py-3 px-4",children:"Imprimir"}),t.jsx("td",{className:"py-3 px-4",children:"console.log()"}),t.jsx("td",{className:"py-3 px-4",children:"System.out.println()"})]})]})]})})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 1"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"No avances al Día 2 sin completar estos ejercicios. Escríbelos tú mismo en IntelliJ, ejecútalos y verifica que funcionen."}),t.jsx(K,{number:1,title:"Saluda con tu nombre",description:`Crea una clase llamada MiSaludo.java que imprima:
"Hola, me llamo [TU NOMBRE] y estoy aprendiendo Java"

Recuerda: el nombre de la clase debe coincidir con el nombre del archivo.`,hint:"Usa System.out.println() con tu nombre dentro de las comillas.",solution:`public class MiSaludo {
    public static void main(String[] args) {
        System.out.println("Hola, me llamo Carlos y estoy aprendiendo Java");
    }
}`,solutionFilename:"MiSaludo.java"}),t.jsx(K,{number:2,title:"Múltiples líneas",description:`Crea una clase llamada MiPerfil.java que imprima tu perfil en 4 líneas separadas:
- Tu nombre
- Tu edad
- Tu lenguaje favorito actual
- Lo que esperas aprender con Java

Usa 4 llamadas separadas a System.out.println().`,hint:"Cada System.out.println() imprime una línea. Necesitas 4 sentencias separadas, cada una terminando con punto y coma.",solution:`public class MiPerfil {
    public static void main(String[] args) {
        System.out.println("Nombre: Carlos García");
        System.out.println("Edad: 28");
        System.out.println("Lenguaje favorito: TypeScript");
        System.out.println("Meta: Aprender Spring Boot para backend");
    }
}`,solutionFilename:"MiPerfil.java"}),t.jsx(K,{number:3,title:"print vs println",description:`Crea una clase Impresion.java que demuestre la diferencia entre print y println:
1. Usa System.out.print("Java ") (sin ln)
2. Usa System.out.print("es ") (sin ln)
3. Usa System.out.println("genial!") (con ln)
4. Usa System.out.println("--- fin ---")

¿Qué diferencia notas en la salida?`,hint:"print() NO agrega salto de línea al final, println() SÍ. Las primeras tres palabras deberían aparecer en la misma línea.",solution:`public class Impresion {
    public static void main(String[] args) {
        System.out.print("Java ");      // NO salto de línea
        System.out.print("es ");        // NO salto de línea
        System.out.println("genial!");  // SÍ salto de línea
        System.out.println("--- fin ---");
        // Salida:
        // Java es genial!
        // --- fin ---
    }
}`,solutionFilename:"Impresion.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx("p",{className:"text-text-muted text-sm mb-3",children:"Si completaste los 3 ejercicios, haz tu primer commit:"}),t.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-1: primer programa Java - HolaMundo, MiSaludo, MiPerfil, Impresion"
git push origin main
`}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",t.jsx("strong",{className:"text-text",children:"Día 2"})," vas a aprender la estructura completa de un programa Java: paquetes, imports, convenciones y más."]})]})})]})}function Oj(){return t.jsxs("div",{children:[t.jsx(oe,{day:2,title:"Sintaxis Básica",duration:"50 min",commitMsg:"dia-2: sintaxis basica, comentarios, convenciones, paquetes"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a dominar la estructura de un programa Java: cómo imprimir texto de varias formas, cómo documentar tu código, y las convenciones que todo desarrollador Java sigue."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"La anatomía de un programa Java"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Ayer escribiste tu primer HolaMundo. Hoy vamos a profundizar en cada pieza y aprender nuevas formas de trabajar con la consola."}),t.jsx(S,{filename:"Anatomia.java",code:`
// 1. Declaración de paquete (opcional en programas simples)
// package com.tuempresa.proyecto;

// 2. Imports (clases que necesitas de otros paquetes)
// import java.util.Scanner;

// 3. Declaración de clase (obligatoria — todo va dentro de una clase)
public class Anatomia {

    // 4. Método main (punto de entrada del programa)
    public static void main(String[] args) {
        // 5. Tu código va aquí
        System.out.println("¡Estructura completa!");
    }
}
`}),t.jsxs(ne,{title:"¿Por qué Java obliga a poner todo dentro de una clase?",children:[t.jsxs("p",{children:["En TypeScript puedes escribir una función suelta en un archivo. En Java, ",t.jsx("strong",{className:"text-text",children:"no existe código suelto"}),". Todo debe estar dentro de una clase. ¿Por qué? Porque Java fue diseñado como un lenguaje 100% orientado a objetos. Incluso tu programa más simple es una clase."]}),t.jsx("p",{children:"Piénsalo como una regla de organización: así como Angular te obliga a poner lógica en componentes, Java te obliga a poner lógica en clases. Es más verboso al inicio, pero a gran escala mantiene el código organizado."})]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Imprimir en consola — Las 3 formas"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Imprimir en consola es tu herramienta #1 de debugging. Aprende las tres formas y cuándo usar cada una:"}),t.jsx(S,{filename:"FormasDeImprimir.java",code:`
public class FormasDeImprimir {
    public static void main(String[] args) {
        // === println: imprime + salto de línea ===
        System.out.println("Línea 1");
        System.out.println("Línea 2");
        // Salida:
        // Línea 1
        // Línea 2

        // === print: imprime SIN salto de línea ===
        System.out.print("Hola ");
        System.out.print("Mundo");
        System.out.println(); // Solo salto de línea
        // Salida: Hola Mundo

        // === printf: impresión formateada ===
        String nombre = "Carlos";
        int edad = 28;
        double salario = 45000.50;
        System.out.printf("Nombre: %s, Edad: %d, Salario: $%.2f%n",
                          nombre, edad, salario);
        // Salida: Nombre: Carlos, Edad: 28, Salario: $45000.50

        // === Concatenación con + ===
        System.out.println("Me llamo " + nombre + " y tengo " + edad + " años");
    }
}
`}),t.jsxs(ne,{title:"¿Cuándo uso printf vs println con concatenación?",children:[t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"println + concatenación"}),": Para mensajes simples y debugging rápido. Es lo que usarás el 90% del tiempo al principio."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"printf"}),": Cuando necesitas control de formato — como mostrar decimales con exactamente 2 posiciones (",t.jsx("code",{className:"text-primary",children:"%.2f"}),"), alinear columnas, o construir salidas tabulares. Es como el template literal de TypeScript pero más potente para números."]})]}),t.jsxs(F,{type:"tip",title:"Formatos comunes de printf",children:[t.jsx("code",{className:"text-primary",children:"%s"})," = String, ",t.jsx("code",{className:"text-primary",children:"%d"})," = entero,"," ",t.jsx("code",{className:"text-primary",children:"%f"})," = decimal, ",t.jsx("code",{className:"text-primary",children:"%.2f"})," = 2 decimales,"," ",t.jsx("code",{className:"text-primary",children:"%n"})," = nueva línea, ",t.jsx("code",{className:"text-primary",children:"%b"})," = booleano,"," ",t.jsx("code",{className:"text-primary",children:"%10s"})," = alinear a 10 caracteres."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Comentarios — Documenta tu pensamiento"}),t.jsx(S,{filename:"Comentarios.java",code:`
public class Comentarios {
    // Comentario de una línea — para explicaciones cortas
    // Atajo IntelliJ: Ctrl+/ (selecciona líneas y presiona Ctrl+/)

    /*
     * Comentario de múltiples líneas
     * Para explicaciones más largas que necesitan
     * varias líneas de texto.
     */

    /**
     * Comentario Javadoc — para documentar clases y métodos.
     * IntelliJ lo usa para mostrarte tooltips de ayuda.
     *
     * @param nombre el nombre del usuario
     * @return saludo personalizado
     */
    public static String saludar(String nombre) {
        return "Hola, " + nombre;
    }

    public static void main(String[] args) {
        System.out.println(saludar("Carlos"));
    }
}
`}),t.jsxs(F,{type:"info",children:["En IntelliJ, escribe ",t.jsx("code",{className:"text-primary",children:"/**"})," justo arriba de un método y presiona Enter. IntelliJ genera automáticamente la estructura del Javadoc con los @param y @return."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Convenciones de nombres"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Java tiene convenciones estrictas. No son obligatorias, pero ",t.jsx("strong",{className:"text-text",children:"todo el ecosistema Java las sigue"}),". Romperlas es como escribir JavaScript sin camelCase — funciona, pero nadie lo hace."]}),t.jsx(S,{filename:"Convenciones.java",code:`
// CLASES: PascalCase
public class MiClaseEjemplo { }
public class CalculadoraDeImpuestos { }

// MÉTODOS y VARIABLES: camelCase
public void calcularTotal() { }
int edadDelUsuario = 25;
String nombreCompleto = "Juan Pérez";

// CONSTANTES: SNAKE_CASE_MAYÚSCULAS
static final int EDAD_MINIMA = 18;
static final String NOMBRE_APP = "MiApp";

// PAQUETES: todo en minúsculas
// package com.miempresa.miproyecto.modelos;

// INTERFACES: PascalCase (sin prefijo "I")
// public interface Serializable { }
`}),t.jsxs(F,{type:"angular",children:['TypeScript usa las mismas convenciones: PascalCase para clases, camelCase para variables. Diferencia clave: en Angular a veces pones prefijo "I" en interfaces (',t.jsx("code",{className:"text-primary",children:"IUser"}),"). En Java ",t.jsx("strong",{children:"nunca"})," se hace eso."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Paquetes — Organizar tu código"}),t.jsxs(ne,{title:"¿Cómo pensar en los paquetes?",children:[t.jsxs("p",{children:["Un paquete es la ",t.jsx("strong",{className:"text-text",children:"dirección postal"})," de tu clase. Así como una dirección tiene país → ciudad → calle → número, un paquete tiene dominio → empresa → proyecto → módulo."]}),t.jsxs("p",{children:["La convención es usar tu dominio invertido: si tu sitio es ",t.jsx("code",{className:"text-primary",children:"miempresa.com"}),", tu paquete base es ",t.jsx("code",{className:"text-primary",children:"com.miempresa"}),". Y la carpeta física",t.jsx("strong",{className:"text-text",children:" debe coincidir"})," con el paquete."]})]}),t.jsx(S,{filename:"com/miempresa/modelo/Usuario.java",code:`
package com.miempresa.modelo;

import java.util.List;

public class Usuario {
    private String nombre;
    private int edad;
}
`}),t.jsx(S,{filename:"com/miempresa/servicio/UsuarioServicio.java",code:`
package com.miempresa.servicio;

import com.miempresa.modelo.Usuario;

public class UsuarioServicio {
    public Usuario buscarPorId(int id) {
        return new Usuario();
    }
}
`}),t.jsxs(F,{type:"warning",children:["El paquete ",t.jsx("strong",{children:"debe coincidir con la estructura de carpetas"}),". Si tu paquete es"," ",t.jsx("code",{className:"text-primary",children:"com.miempresa.modelo"}),", el archivo debe estar en"," ",t.jsx("code",{className:"text-primary",children:"com/miempresa/modelo/"}),". IntelliJ crea las carpetas automáticamente."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Punto y coma, llaves y case-sensitive"}),t.jsx(S,{filename:"ReglasBasicas.java",code:`
public class ReglasBasicas {
    public static void main(String[] args) {
        // Cada instrucción TERMINA con punto y coma ;
        int x = 10;
        System.out.println(x);

        // Los bloques se delimitan con llaves { }
        if (x > 5) {
            System.out.println("x es mayor que 5");
        }

        // Las llaves crean un scope (alcance)
        {
            int variableLocal = 42;
            System.out.println(variableLocal); // OK
        }
        // System.out.println(variableLocal); // ERROR: no existe fuera del bloque

        // Java es CASE-SENSITIVE
        int miVariable = 1;
        int MiVariable = 2; // ¡Es OTRA variable diferente!
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Palabras reservadas"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Java tiene 50+ palabras que NO puedes usar como nombres. No necesitas memorizarlas — IntelliJ te marcará error si intentas usar una. Pero conócelas de vista:"}),t.jsx("div",{className:"bg-surface-light border border-border rounded-xl p-4",children:t.jsx("div",{className:"flex flex-wrap gap-2",children:["abstract","assert","boolean","break","byte","case","catch","char","class","const","continue","default","do","double","else","enum","extends","final","finally","float","for","goto","if","implements","import","instanceof","int","interface","long","native","new","package","private","protected","public","return","short","static","strictfp","super","switch","synchronized","this","throw","throws","transient","try","void","volatile","while","var","record","sealed","permits","yield"].map(l=>t.jsx("span",{className:"bg-[#282c34] text-primary text-xs font-mono px-2 py-1 rounded",children:l},l))})})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 2"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Escríbelos tú mismo. No copies y pegues — tu memoria muscular importa."}),t.jsx(K,{number:1,title:"Tarjeta de presentación con printf",description:`Crea TarjetaPresentacion.java que use printf para imprimir:
"Nombre: [tu nombre]"
"Edad: [tu edad] años"
"Experiencia: [X.X] años en programación"

El último valor debe mostrarse con exactamente 1 decimal.`,hint:"Usa %s para strings, %d para enteros, y %.1f para un decimal con 1 posición.",solution:`public class TarjetaPresentacion {
    public static void main(String[] args) {
        String nombre = "Carlos García";
        int edad = 28;
        double experiencia = 3.5;

        System.out.printf("Nombre: %s%n", nombre);
        System.out.printf("Edad: %d años%n", edad);
        System.out.printf("Experiencia: %.1f años en programación%n", experiencia);
    }
}`,solutionFilename:"TarjetaPresentacion.java"}),t.jsx(K,{number:2,title:"Comentarios y Javadoc",description:`Crea Calculadora.java con:
1. Un comentario Javadoc para la clase
2. Un método static "sumar" que reciba dos int y retorne su suma
3. Un comentario Javadoc para el método con @param y @return
4. En el main, llama al método e imprime el resultado

Tip: En IntelliJ, escribe /** arriba del método y presiona Enter.`,hint:"El método se declara como: static int sumar(int a, int b) { return a + b; }",solution:`/**
 * Calculadora básica para operaciones aritméticas.
 * Día 2 del curso Java Mastery.
 */
public class Calculadora {

    /**
     * Suma dos números enteros.
     *
     * @param a primer número
     * @param b segundo número
     * @return la suma de a + b
     */
    public static int sumar(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int resultado = sumar(15, 27);
        System.out.println("15 + 27 = " + resultado);
    }
}`,solutionFilename:"Calculadora.java"}),t.jsx(K,{number:3,title:"Tabla formateada con printf",description:`Crea TablaProductos.java que imprima una tabla con 3 productos:
- Cada fila: nombre (alineado a 15 caracteres), precio con 2 decimales, cantidad
- Incluye una fila de encabezado

Ejemplo de salida:
Producto         Precio    Cant
Laptop           $1299.99     5
Mouse            $29.50      50
Teclado          $89.00      20`,hint:"Usa %-15s para alinear texto a la izquierda en 15 caracteres, %8.2f para precio, y %5d para cantidad.",solution:`public class TablaProductos {
    public static void main(String[] args) {
        System.out.printf("%-15s %8s %5s%n", "Producto", "Precio", "Cant");
        System.out.printf("%-15s $%7.2f %5d%n", "Laptop", 1299.99, 5);
        System.out.printf("%-15s $%7.2f %5d%n", "Mouse", 29.50, 50);
        System.out.printf("%-15s $%7.2f %5d%n", "Teclado", 89.00, 20);
    }
}`,solutionFilename:"TablaProductos.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-2: sintaxis basica, printf, comentarios, convenciones"
git push origin main
`}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",t.jsx("strong",{className:"text-text",children:"Día 3"}),": tipos de datos primitivos, casting, y la diferencia entre primitivos y objetos."]})]})})]})}function Dj(){return t.jsxs("div",{children:[t.jsx(oe,{day:3,title:"Tipos de Datos",duration:"50 min",commitMsg:"dia-3: tipos primitivos, wrappers, casting"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a entender la diferencia más fundamental de Java: primitivos vs objetos. También vas a aprender a convertir entre tipos sin perder datos."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Los 8 tipos primitivos"}),t.jsxs(ne,{title:"¿Por qué Java tiene tantos tipos de números?",children:[t.jsxs("p",{children:["En TypeScript solo existe ",t.jsx("code",{className:"text-primary",children:"number"})," para todo. En Java debes elegir el tipo exacto. ¿Por qué? ",t.jsx("strong",{className:"text-text",children:"Eficiencia y control"}),". Un ",t.jsx("code",{className:"text-primary",children:"byte"})," usa 1 byte de RAM; un ",t.jsx("code",{className:"text-primary",children:"long"})," usa 8. Cuando manejas millones de registros, esa diferencia importa."]}),t.jsxs("p",{children:["En la práctica, usarás ",t.jsx("code",{className:"text-primary",children:"int"})," para enteros y ",t.jsx("code",{className:"text-primary",children:"double"})," para decimales el 95% del tiempo. Los demás son para casos especiales (archivos binarios, rendimiento extremo, dinero)."]})]}),t.jsx("div",{className:"overflow-x-auto mb-6",children:t.jsxs("table",{className:"w-full text-sm text-text-muted",children:[t.jsx("thead",{children:t.jsxs("tr",{className:"border-b border-border",children:[t.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Tipo"}),t.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Tamaño"}),t.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Rango"}),t.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Valor por defecto"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"byte"}),t.jsx("td",{className:"py-2 px-3",children:"8 bits"}),t.jsx("td",{className:"py-2 px-3",children:"-128 a 127"}),t.jsx("td",{className:"py-2 px-3",children:"0"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"short"}),t.jsx("td",{className:"py-2 px-3",children:"16 bits"}),t.jsx("td",{className:"py-2 px-3",children:"-32,768 a 32,767"}),t.jsx("td",{className:"py-2 px-3",children:"0"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"int"}),t.jsx("td",{className:"py-2 px-3",children:"32 bits"}),t.jsx("td",{className:"py-2 px-3",children:"-2³¹ a 2³¹-1"}),t.jsx("td",{className:"py-2 px-3",children:"0"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"long"}),t.jsx("td",{className:"py-2 px-3",children:"64 bits"}),t.jsx("td",{className:"py-2 px-3",children:"-2⁶³ a 2⁶³-1"}),t.jsx("td",{className:"py-2 px-3",children:"0L"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"float"}),t.jsx("td",{className:"py-2 px-3",children:"32 bits"}),t.jsx("td",{className:"py-2 px-3",children:"±3.4 × 10³⁸"}),t.jsx("td",{className:"py-2 px-3",children:"0.0f"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"double"}),t.jsx("td",{className:"py-2 px-3",children:"64 bits"}),t.jsx("td",{className:"py-2 px-3",children:"±1.7 × 10³⁰⁸"}),t.jsx("td",{className:"py-2 px-3",children:"0.0"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"char"}),t.jsx("td",{className:"py-2 px-3",children:"16 bits"}),t.jsx("td",{className:"py-2 px-3",children:"0 a 65,535 (Unicode)"}),t.jsx("td",{className:"py-2 px-3",children:"'\\u0000'"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"boolean"}),t.jsx("td",{className:"py-2 px-3",children:"1 bit*"}),t.jsx("td",{className:"py-2 px-3",children:"true / false"}),t.jsx("td",{className:"py-2 px-3",children:"false"})]})]})]})}),t.jsx(S,{filename:"TiposPrimitivos.java",code:`
public class TiposPrimitivos {
    public static void main(String[] args) {
        // ENTEROS
        byte edadBebe = 2;           // -128 a 127
        short temperatura = -15;      // números pequeños
        int poblacion = 130_000_000;  // el más usado para enteros
        long distanciaEstrella = 9_460_730_472_580_800L; // nota la L al final

        // DECIMALES
        float precio = 19.99f;        // nota la f al final
        double pi = 3.141592653589;   // mayor precisión (el más usado)

        // CARÁCTER
        char letra = 'A';             // comillas simples (UN solo carácter)
        char unicode = '\\u0041';      // también es 'A' en Unicode

        // BOOLEANO
        boolean esMayorDeEdad = true;
        boolean tienePermiso = false;

        // Java permite separadores _ para legibilidad en números
        int millon = 1_000_000;       // se lee más fácil
        long tarjeta = 1234_5678_9012_3456L;

        System.out.println("Población: " + poblacion);
        System.out.println("Pi: " + pi);
        System.out.println("Letra: " + letra);
        System.out.println("¿Mayor de edad? " + esMayorDeEdad);
    }
}
`}),t.jsxs(F,{type:"angular",children:["En TypeScript solo existe ",t.jsx("code",{className:"text-primary",children:"number"})," para TODOS los números (enteros y decimales). En Java debes elegir el tipo específico. Lo más común: ",t.jsx("code",{className:"text-primary",children:"int"})," para enteros y ",t.jsx("code",{className:"text-primary",children:"double"})," para decimales."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Tipos de Referencia"}),t.jsxs(ne,{title:"Primitivo vs Referencia — ¿Cuál es la diferencia real?",children:[t.jsxs("p",{children:["Imagina que un ",t.jsx("strong",{className:"text-text",children:"primitivo"})," es un post-it con un número escrito directamente. Si le sacas copia, tienes otro post-it independiente con el mismo número."]}),t.jsxs("p",{children:["Una ",t.jsx("strong",{className:"text-text",children:"referencia"})," es un post-it con una ",t.jsx("em",{children:"dirección"})," que apunta a una caja en un almacén. Si copias el post-it, ahora tienes dos post-its que apuntan a la ",t.jsx("em",{children:"misma"})," caja. Si alguien modifica el contenido de la caja desde un post-it, el otro también lo ve."]})]}),t.jsx(S,{filename:"TiposReferencia.java",code:`
public class TiposReferencia {
    public static void main(String[] args) {
        // String es un tipo de referencia (NO es primitivo)
        String nombre = "Carlos";
        String saludo = new String("Hola"); // otra forma (no recomendada)

        // Arrays son tipos de referencia
        int[] numeros = {1, 2, 3, 4, 5};
        String[] nombres = {"Ana", "Luis", "María"};

        // Cualquier objeto es tipo de referencia
        // Scanner scanner = new Scanner(System.in);

        // null es el valor por defecto de los tipos de referencia
        String textoNull = null; // "no apunta a ningún objeto"

        // CUIDADO: usar null causa NullPointerException
        // textoNull.length(); // ¡CRASH! NullPointerException

        // Verificar null antes de usar
        if (textoNull != null) {
            System.out.println(textoNull.length());
        }
    }
}
`}),t.jsxs(F,{type:"warning",title:"Primitivo vs Referencia — Diferencia clave",children:[t.jsx("strong",{children:"Primitivos"})," almacenan el valor directamente. Si copias una variable primitiva, copias el valor. ",t.jsx("strong",{children:"Referencias"})," almacenan una dirección de memoria. Si copias una variable de referencia, ambas apuntan al mismo objeto."]}),t.jsx(S,{filename:"PrimitivoVsReferencia.java",code:`
public class PrimitivoVsReferencia {
    public static void main(String[] args) {
        // PRIMITIVOS: se copia el VALOR
        int a = 10;
        int b = a;    // b tiene su propia copia del valor 10
        b = 20;       // cambiar b NO afecta a
        System.out.println(a); // 10 (no cambió)
        System.out.println(b); // 20

        // REFERENCIAS: se copia la DIRECCIÓN
        int[] arr1 = {1, 2, 3};
        int[] arr2 = arr1;  // arr2 apunta al MISMO array
        arr2[0] = 99;       // cambiar arr2 SÍ afecta a arr1
        System.out.println(arr1[0]); // 99 (¡cambió!)
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Wrapper Classes (Clases Envolventes)"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Cada tipo primitivo tiene una ",t.jsx("strong",{className:"text-text",children:"clase envolvente"})," (wrapper) que lo convierte en objeto. Son necesarios cuando necesitas usar primitivos con colecciones (List, Map, etc.)."]}),t.jsx(S,{filename:"WrapperClasses.java",code:`
public class WrapperClasses {
    public static void main(String[] args) {
        // Primitivo → Wrapper (autoboxing automático)
        Integer edad = 25;           // int → Integer
        Double precio = 19.99;       // double → Double
        Boolean activo = true;       // boolean → Boolean
        Character letra = 'A';       // char → Character
        Long distancia = 100L;       // long → Long

        // Wrapper → Primitivo (unboxing automático)
        int edadPrimitivo = edad;    // Integer → int
        double precioPrimitivo = precio; // Double → double

        // Métodos útiles de las Wrapper Classes
        int numero = Integer.parseInt("42");       // String → int
        double decimal = Double.parseDouble("3.14"); // String → double
        boolean flag = Boolean.parseBoolean("true"); // String → boolean

        String texto = Integer.toString(42);       // int → String
        String texto2 = String.valueOf(42);        // alternativa

        // Valores máximos y mínimos
        System.out.println("int máximo: " + Integer.MAX_VALUE);   // 2147483647
        System.out.println("int mínimo: " + Integer.MIN_VALUE);   // -2147483648
        System.out.println("double máximo: " + Double.MAX_VALUE);

        // Comparar wrappers: usar .equals(), NO ==
        Integer x = 200;
        Integer y = 200;
        System.out.println(x == y);       // false (compara referencias)
        System.out.println(x.equals(y));  // true (compara valores)
    }
}
`}),t.jsxs(F,{type:"warning",children:[t.jsx("strong",{children:"Nunca uses == para comparar Wrapper objects"}),". Usa ",t.jsx("code",{className:"text-primary",children:".equals()"}),". El operador == compara las referencias (direcciones de memoria), no los valores. Excepción: Integer caches valores de -128 a 127, por lo que == funciona en ese rango, pero NO confíes en eso."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Casting (Conversión de tipos)"}),t.jsx(S,{filename:"Casting.java",code:`
public class Casting {
    public static void main(String[] args) {
        // WIDENING (implícito): tipo pequeño → tipo grande (seguro)
        // byte → short → int → long → float → double
        int entero = 42;
        double decimal = entero;  // int → double automáticamente
        System.out.println(decimal); // 42.0

        long grande = entero;     // int → long automáticamente
        float flotante = grande;  // long → float automáticamente

        // NARROWING (explícito): tipo grande → tipo pequeño (puede perder datos)
        double pi = 3.14159;
        int piEntero = (int) pi;  // NECESITAS el cast explícito (int)
        System.out.println(piEntero); // 3 (se pierde la parte decimal)

        long valorGrande = 1000L;
        int valorPequeno = (int) valorGrande; // long → int (cast explícito)

        // CUIDADO: overflow silencioso
        int grande2 = 130;
        byte pequeno = (byte) grande2; // 130 no cabe en byte (-128 a 127)
        System.out.println(pequeno);   // -126 (¡overflow!)

        // Convertir String a número
        String textoNumero = "123";
        int numero = Integer.parseInt(textoNumero);
        double decimal2 = Double.parseDouble("45.67");

        // Convertir número a String
        String texto = String.valueOf(123);
        String texto2 = Integer.toString(123);
        String texto3 = "" + 123; // concatenación (funciona pero no ideal)
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"var — Inferencia de tipos (Java 10+)"}),t.jsx(S,{filename:"InferenciaTipos.java",code:`
public class InferenciaTipos {
    public static void main(String[] args) {
        // Desde Java 10, puedes usar 'var' para inferir el tipo
        var nombre = "Carlos";      // Java infiere: String
        var edad = 25;              // Java infiere: int
        var precio = 19.99;         // Java infiere: double
        var activo = true;          // Java infiere: boolean
        var numeros = new int[]{1, 2, 3}; // Java infiere: int[]

        // var SOLO funciona con variables locales (dentro de métodos)
        // NO funciona para:
        // - Campos de clase
        // - Parámetros de métodos
        // - Tipos de retorno

        // var NECESITA un valor inicial (no puede ser null solo)
        // var x;         // ERROR: no puede inferir el tipo
        // var y = null;  // ERROR: no puede inferir el tipo

        // Es útil para tipos largos
        var lista = new java.util.ArrayList<String>(); // en vez de ArrayList<String> lista = ...
    }
}
`}),t.jsxs(F,{type:"angular",children:[t.jsx("code",{className:"text-primary",children:"var"})," en Java es similar a ",t.jsx("code",{className:"text-primary",children:"let"})," en TypeScript cuando no especificas el tipo. TypeScript también infiere tipos automáticamente. La diferencia es que Java solo permite ",t.jsx("code",{className:"text-primary",children:"var"})," en variables locales."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 3"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Crea cada archivo en IntelliJ, escríbelo tú mismo y ejecútalo."}),t.jsx(K,{number:1,title:"Explorador de tipos",description:`Crea ExploradorTipos.java que declare una variable de cada tipo primitivo y las imprima todas.
Incluye:
- Un byte, short, int y long
- Un float y double
- Un char y un boolean

Usa separadores _ en los números grandes para legibilidad.`,hint:"Recuerda: long necesita L al final, float necesita f al final. Usa System.out.println() para cada variable.",solution:`public class ExploradorTipos {
    public static void main(String[] args) {
        byte nivelBateria = 87;
        short anio = 2026;
        int poblacionCiudad = 8_336_817;
        long distanciaLuna = 384_400_000L;

        float tasaInteres = 4.5f;
        double pi = 3.14159265358979;

        char inicial = 'J';
        boolean javaEsGenial = true;

        System.out.println("Batería: " + nivelBateria + "%");
        System.out.println("Año: " + anio);
        System.out.println("Población: " + poblacionCiudad);
        System.out.println("Distancia luna: " + distanciaLuna + " metros");
        System.out.println("Tasa interés: " + tasaInteres + "%");
        System.out.println("Pi: " + pi);
        System.out.println("Inicial: " + inicial);
        System.out.println("¿Java es genial? " + javaEsGenial);
    }
}`,solutionFilename:"ExploradorTipos.java"}),t.jsx(K,{number:2,title:"Casting peligroso",description:`Crea CastingDemo.java que demuestre:
1. Widening: asigna un int a un double e imprime ambos
2. Narrowing: asigna un double (3.99) a un int con cast explícito — ¿qué valor obtienes?
3. Overflow: asigna 200 a una variable byte con cast — ¿qué imprime?
4. String a número: convierte "456" a int y "78.9" a double, súmalos e imprime

¿Qué aprendiste sobre la pérdida de datos?`,hint:"Para narrowing usa (int), para overflow usa (byte). parseInt() y parseDouble() convierten strings.",solution:`public class CastingDemo {
    public static void main(String[] args) {
        // 1. Widening (seguro)
        int entero = 42;
        double decimal = entero;
        System.out.println("int: " + entero + " → double: " + decimal);

        // 2. Narrowing (pierde decimales)
        double precio = 3.99;
        int precioEntero = (int) precio;
        System.out.println("double: " + precio + " → int: " + precioEntero);
        // Imprime 3 — se TRUNCA, no se redondea

        // 3. Overflow
        int grande = 200;
        byte pequeno = (byte) grande;
        System.out.println("int 200 → byte: " + pequeno);
        // Imprime -56 — overflow silencioso

        // 4. String a número
        int num = Integer.parseInt("456");
        double dec = Double.parseDouble("78.9");
        System.out.println("456 + 78.9 = " + (num + dec));
    }
}`,solutionFilename:"CastingDemo.java"}),t.jsx(K,{number:3,title:"Trampa de los Wrappers",description:`Crea WrapperTrampa.java que demuestre la trampa clásica de == vs .equals():
1. Crea dos Integer con valor 100 y compáralos con == y .equals()
2. Crea dos Integer con valor 200 y compáralos con == y .equals()
3. Imprime los resultados y explica con comentarios por qué uno da true y otro false con ==

Este es un bug real que pasa en producción.`,hint:"Integer cachea valores de -128 a 127. Dentro de ese rango, == funciona 'por casualidad'. Fuera de ese rango, falla.",solution:`public class WrapperTrampa {
    public static void main(String[] args) {
        // Caso 1: valor 100 (dentro del cache -128 a 127)
        Integer a = 100;
        Integer b = 100;
        System.out.println("100 == 100: " + (a == b));       // true (cache)
        System.out.println("100 equals 100: " + a.equals(b)); // true

        // Caso 2: valor 200 (fuera del cache)
        Integer x = 200;
        Integer y = 200;
        System.out.println("200 == 200: " + (x == y));       // false (!!)
        System.out.println("200 equals 200: " + x.equals(y)); // true

        // LECCIÓN: SIEMPRE usa .equals() para comparar Wrappers
        // == compara referencias (direcciones de memoria)
        // .equals() compara valores
    }
}`,solutionFilename:"WrapperTrampa.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-3: tipos primitivos, wrappers, casting, var"
git push origin main
`}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",t.jsx("strong",{className:"text-text",children:"Día 4"}),": variables, constantes, scope y valores por defecto."]})]})})]})}function wj(){return t.jsxs("div",{children:[t.jsx(oe,{day:4,title:"Variables y Constantes",duration:"45 min",commitMsg:"dia-4: variables, final, scope, valores por defecto"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy vas a dominar cómo Java maneja las variables: declaración, scope, constantes con",t.jsx("code",{className:"text-primary ml-1",children:"final"}),", y una trampa importante sobre valores por defecto."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Declaración de Variables"}),t.jsxs(ne,{title:"¿Cómo pensar en las variables de Java vs TypeScript?",children:[t.jsxs("p",{children:["En TypeScript escribes ",t.jsx("code",{className:"text-primary",children:'let nombre: string = "Carlos"'})," — el tipo va",t.jsx("em",{children:" después"})," del nombre, separado por dos puntos."]}),t.jsxs("p",{children:["En Java escribes ",t.jsx("code",{className:"text-primary",children:'String nombre = "Carlos"'})," — el tipo va",t.jsx("em",{children:" antes"})," del nombre, sin dos puntos. Y no existe ",t.jsx("code",{className:"text-primary",children:"let"}),"ni ",t.jsx("code",{className:"text-primary",children:"const"}),". Java usa ",t.jsx("code",{className:"text-primary",children:"final"})," para constantes."]}),t.jsxs("p",{children:["La regla mental: ",t.jsx("strong",{className:"text-text",children:"tipo nombre = valor;"})," — siempre en ese orden."]})]}),t.jsx(S,{filename:"Variables.java",code:`
public class Variables {
    public static void main(String[] args) {
        // Declarar y asignar en una línea
        int edad = 25;
        String nombre = "Carlos";
        double salario = 45000.50;
        boolean activo = true;

        // Declarar primero, asignar después
        int cantidad;
        cantidad = 100;

        // Declarar múltiples del mismo tipo
        int x = 1, y = 2, z = 3;

        // IMPORTANTE: No puedes usar sin inicializar
        int sinValor;
        // System.out.println(sinValor); // ERROR de compilación
        sinValor = 42;
        System.out.println(sinValor); // Ahora sí

        // Reasignar: OK. Cambiar tipo: ERROR
        edad = 26;
        nombre = "Luis";
        // edad = "texto"; // ERROR: no puedes cambiar el tipo
    }
}
`}),t.jsxs(F,{type:"angular",children:["En TypeScript: ",t.jsx("code",{className:"text-primary",children:'let nombre: string = "Carlos"'}),". En Java: ",t.jsx("code",{className:"text-primary",children:'String nombre = "Carlos"'}),". En Java NO hay ",t.jsx("code",{className:"text-primary",children:"let"}),"/",t.jsx("code",{className:"text-primary",children:"const"}),"/",t.jsx("code",{className:"text-primary",children:"var"})," (bueno, ",t.jsx("code",{className:"text-primary",children:"var"})," desde Java 10, pero limitado a variables locales)."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Constantes con final"}),t.jsxs(ne,{title:"final = const de TypeScript... ¿pero con una trampa?",children:[t.jsxs("p",{children:[t.jsx("code",{className:"text-primary",children:"final"})," previene la ",t.jsx("strong",{className:"text-text",children:"reasignación"}),", no la ",t.jsx("strong",{className:"text-text",children:"mutación"}),". Es exactamente igual que ",t.jsx("code",{className:"text-primary",children:"const"}),"en JavaScript: puedes hacer ",t.jsx("code",{className:"text-primary",children:"const arr = [1,2,3]; arr[0] = 99;"})," sin error."]}),t.jsxs("p",{children:["Para constantes de clase, la convención es ",t.jsx("code",{className:"text-primary",children:"static final"})," +",t.jsx("strong",{className:"text-text",children:" MAYÚSCULAS_CON_GUIONES"}),"."]})]}),t.jsx(S,{filename:"Constantes.java",code:`
public class Constantes {
    // Constantes de clase: static final + MAYÚSCULAS
    static final double PI = 3.14159265358979;
    static final int EDAD_MINIMA = 18;
    static final String NOMBRE_APP = "MiAplicación";

    public static void main(String[] args) {
        // Constante local
        final int maxIntentos = 3;
        // maxIntentos = 5; // ERROR: no se puede reasignar

        System.out.println("PI: " + PI);
        System.out.println("Max intentos: " + maxIntentos);

        // TRAMPA: final con objetos/arrays
        final int[] numeros = {1, 2, 3};
        numeros[0] = 99;  // OK: modificar contenido
        // numeros = new int[]{4, 5, 6}; // ERROR: reasignar referencia

        // final puede asignarse después (una sola vez)
        final int resultado;
        resultado = calcular(10);  // Primera y única asignación
        // resultado = 20;         // ERROR: ya fue asignada
        System.out.println("Resultado: " + resultado);
    }

    static int calcular(int n) {
        return n * 2;
    }
}
`}),t.jsxs(F,{type:"warning",title:"final no hace inmutable",children:[t.jsx("code",{className:"text-primary",children:"final"})," solo previene ",t.jsx("strong",{children:"reasignación"}),". Si apunta a un array, lista u objeto, puedes modificar su contenido. Para inmutabilidad real, necesitarás ",t.jsx("code",{className:"text-primary",children:"Collections.unmodifiableList()"})," o",t.jsx("code",{className:"text-primary",children:" List.of()"})," (lo verás en colecciones)."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Scope — ¿Dónde vive cada variable?"}),t.jsxs(ne,{title:"Las 3 zonas de vida de una variable",children:[t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Variable de clase (static)"})," — Vive mientras la clase exista. Compartida por todas las instancias."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Variable de instancia"})," — Vive mientras el objeto exista. Cada objeto tiene su propia copia."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Variable local"})," — Vive solo dentro del método o bloque donde fue declarada. Es la que más usarás al principio."]})]}),t.jsx(S,{filename:"Scope.java",code:`
public class Scope {
    // Variable de CLASE — accesible en toda la clase
    static String variableDeClase = "Soy de clase";

    // Variable de INSTANCIA — cada objeto tiene la suya
    String variableDeInstancia = "Soy de instancia";

    public static void main(String[] args) {
        // Variable LOCAL — solo existe en este método
        int variableLocal = 42;
        System.out.println(variableLocal);
        System.out.println(variableDeClase);

        // Variables de BLOQUE — solo dentro de las llaves
        if (true) {
            int dentroDelIf = 100;
            System.out.println(dentroDelIf);
        }
        // System.out.println(dentroDelIf); // ERROR: no existe aquí

        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }
        // System.out.println(i); // ERROR: no existe aquí
    }

    public void otroMetodo() {
        // variableLocal NO existe aquí
        System.out.println(variableDeInstancia); // OK
        System.out.println(variableDeClase);     // OK
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Valores por Defecto"}),t.jsx(S,{filename:"ValoresPorDefecto.java",code:`
public class ValoresPorDefecto {
    // Variables de clase/instancia SÍ tienen valores por defecto
    static int numero;           // 0
    static double decimal;       // 0.0
    static boolean flag;         // false
    static char caracter;        // '\\u0000' (carácter nulo)
    static String texto;         // null

    public static void main(String[] args) {
        System.out.println("int: " + numero);       // 0
        System.out.println("double: " + decimal);   // 0.0
        System.out.println("boolean: " + flag);     // false
        System.out.println("String: " + texto);     // null

        // Variables LOCALES NO tienen valor por defecto
        int local;
        // System.out.println(local); // ERROR de compilación
    }
}
`}),t.jsxs(F,{type:"tip",children:[t.jsx("strong",{children:"Buena práctica:"})," Siempre inicializa tus variables al declararlas. No dependas de los valores por defecto — hace tu código más legible y menos propenso a bugs."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 4"}),t.jsx(K,{number:1,title:"Configuración de app",description:`Crea ConfigApp.java con constantes de configuración para una app imaginaria:
- Nombre de la app (String, final)
- Versión (String, final)
- Puerto máximo (int, final)
- Modo debug activado (boolean, final)

Imprímelas todas con formato: "CONFIG: [nombre] = [valor]"`,hint:"Usa static final para constantes de clase con nombres en MAYÚSCULAS_GUIONES.",solution:`public class ConfigApp {
    static final String APP_NOMBRE = "TaskManager";
    static final String APP_VERSION = "1.0.0";
    static final int PUERTO_MAXIMO = 8080;
    static final boolean MODO_DEBUG = true;

    public static void main(String[] args) {
        System.out.println("CONFIG: APP_NOMBRE = " + APP_NOMBRE);
        System.out.println("CONFIG: APP_VERSION = " + APP_VERSION);
        System.out.println("CONFIG: PUERTO_MAXIMO = " + PUERTO_MAXIMO);
        System.out.println("CONFIG: MODO_DEBUG = " + MODO_DEBUG);
    }
}`,solutionFilename:"ConfigApp.java"}),t.jsx(K,{number:2,title:"Scope detective",description:`Crea ScopeDetective.java que demuestre 3 niveles de scope:
1. Una variable static de clase
2. Una variable local en main
3. Una variable dentro de un bloque if

Para cada una, imprime dónde es accesible y dónde NO (dejando la línea comentada con el error).
Agrega comentarios explicando por qué cada caso funciona o falla.`,hint:"Las variables de bloque (dentro de if, for, etc.) mueren cuando se cierra la llave }.",solution:`public class ScopeDetective {
    // Nivel 1: variable de clase — vive en toda la clase
    static String nivel1 = "Soy variable de clase";

    public static void main(String[] args) {
        // Nivel 2: variable local — vive solo en main
        int nivel2 = 42;

        System.out.println(nivel1); // OK: clase accesible aquí
        System.out.println(nivel2); // OK: local accesible aquí

        if (true) {
            // Nivel 3: variable de bloque — solo vive dentro del if
            String nivel3 = "Soy variable de bloque";
            System.out.println(nivel1); // OK
            System.out.println(nivel2); // OK
            System.out.println(nivel3); // OK: estamos dentro del bloque
        }

        // System.out.println(nivel3); // ERROR: nivel3 ya no existe
        System.out.println(nivel1); // OK: sigue viva
        System.out.println(nivel2); // OK: sigue viva
    }
}`,solutionFilename:"ScopeDetective.java"}),t.jsx(K,{number:3,title:"Calculadora de área con constantes",description:`Crea CalculadoraArea.java que:
1. Defina PI como constante static final
2. Tenga un método static calcularAreaCirculo(double radio) que retorne PI * radio * radio
3. Tenga un método static calcularAreaRectangulo(int ancho, int alto) que retorne ancho * alto
4. En main, calcula el área de un círculo de radio 5.0 y un rectángulo de 8x3
5. Imprime ambos resultados con printf y 2 decimales`,hint:"static double calcularAreaCirculo(double radio) { return PI * radio * radio; }",solution:`public class CalculadoraArea {
    static final double PI = 3.14159265358979;

    static double calcularAreaCirculo(double radio) {
        return PI * radio * radio;
    }

    static int calcularAreaRectangulo(int ancho, int alto) {
        return ancho * alto;
    }

    public static void main(String[] args) {
        double areaCirculo = calcularAreaCirculo(5.0);
        int areaRectangulo = calcularAreaRectangulo(8, 3);

        System.out.printf("Área del círculo (r=5): %.2f%n", areaCirculo);
        System.out.printf("Área del rectángulo (8x3): %d%n", areaRectangulo);
    }
}`,solutionFilename:"CalculadoraArea.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-4: variables, constantes final, scope, valores por defecto"
git push origin main
`}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",t.jsx("strong",{className:"text-text",children:"Día 5"}),": operadores aritméticos, lógicos, de comparación y el operador ternario."]})]})})]})}function Lj(){return t.jsxs("div",{children:[t.jsx(oe,{day:5,title:"Operadores",duration:"45 min",commitMsg:"dia-5: operadores aritmeticos, logicos, comparacion, ternario"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a dominar todos los operadores de Java. La mayoría son idénticos a TypeScript, pero hay trampas importantes que debes conocer (especialmente con la división entera y la comparación de objetos)."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operadores Aritméticos"}),t.jsxs(ne,{title:"La trampa #1 de Java: la división entera",children:[t.jsxs("p",{children:["En TypeScript, ",t.jsx("code",{className:"text-primary",children:"10 / 3"})," da ",t.jsx("code",{className:"text-primary",children:"3.333..."}),". En Java, ",t.jsx("code",{className:"text-primary",children:"10 / 3"})," da ",t.jsx("code",{className:"text-primary",children:"3"}),". Punto. Sin decimales."]}),t.jsxs("p",{children:["¿Por qué? Porque ambos operandos son ",t.jsx("code",{className:"text-primary",children:"int"}),", así que Java hace ",t.jsx("strong",{className:"text-text",children:"división entera"}),". Para obtener decimales, al menos uno debe ser ",t.jsx("code",{className:"text-primary",children:"double"}),":",t.jsx("code",{className:"text-primary",children:" 10.0 / 3"})," o ",t.jsx("code",{className:"text-primary",children:"(double) 10 / 3"}),"."]})]}),t.jsx(S,{filename:"Aritmeticos.java",code:`
public class Aritmeticos {
    public static void main(String[] args) {
        int a = 10, b = 3;

        System.out.println(a + b);  // 13  Suma
        System.out.println(a - b);  // 7   Resta
        System.out.println(a * b);  // 30  Multiplicación
        System.out.println(a / b);  // 3   División ENTERA (trunca decimales)
        System.out.println(a % b);  // 1   Módulo (residuo)

        // Para obtener decimales, al menos un operando debe ser double
        System.out.println(10.0 / 3);   // 3.3333...
        System.out.println((double) a / b); // 3.3333... (cast)

        // Incremento y decremento
        int x = 5;
        x++;          // x = 6 (post-incremento)
        ++x;          // x = 7 (pre-incremento)
        x--;          // x = 6 (post-decremento)

        // Diferencia entre pre y post
        int y = 10;
        System.out.println(y++); // Imprime 10, LUEGO y se vuelve 11
        System.out.println(++y); // y se vuelve 12, LUEGO imprime 12
    }
}
`}),t.jsxs(F,{type:"warning",children:[t.jsx("strong",{children:"División entera:"})," ",t.jsx("code",{className:"text-primary",children:"10 / 3 = 3"})," (no 3.33). Java trunca los decimales cuando ambos operandos son enteros. Si necesitas decimales, usa ",t.jsx("code",{className:"text-primary",children:"double"})," o haz un cast."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operadores de Asignación"}),t.jsx(S,{filename:"Asignacion.java",code:`
public class Asignacion {
    public static void main(String[] args) {
        int x = 10;    // Asignación simple

        x += 5;  // x = x + 5  → 15
        x -= 3;  // x = x - 3  → 12
        x *= 2;  // x = x * 2  → 24
        x /= 4;  // x = x / 4  → 6
        x %= 4;  // x = x % 4  → 2

        // También existen para operaciones de bits
        // x &= 3;  x |= 3;  x ^= 3;  x <<= 2;  x >>= 1;
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operadores de Comparación"}),t.jsx(S,{filename:"Comparacion.java",code:`
public class Comparacion {
    public static void main(String[] args) {
        int a = 10, b = 20;

        System.out.println(a == b);  // false  Igual a
        System.out.println(a != b);  // true   Diferente de
        System.out.println(a > b);   // false  Mayor que
        System.out.println(a < b);   // true   Menor que
        System.out.println(a >= b);  // false  Mayor o igual
        System.out.println(a <= b);  // true   Menor o igual

        // CUIDADO con == para objetos (String, Integer, etc.)
        String s1 = new String("hola");
        String s2 = new String("hola");
        System.out.println(s1 == s2);      // false (compara REFERENCIAS)
        System.out.println(s1.equals(s2)); // true  (compara VALORES)

        // Para primitivos, == compara valores correctamente
        int x = 5, y = 5;
        System.out.println(x == y); // true (compara valores)
    }
}
`}),t.jsxs(ne,{title:"== vs .equals() — La trampa #2 más común",children:[t.jsxs("p",{children:["En TypeScript tienes ",t.jsx("code",{className:"text-primary",children:"==="})," (estricto) y ",t.jsx("code",{className:"text-primary",children:"=="})," (flexible). En Java solo existe ",t.jsx("code",{className:"text-primary",children:"=="}),"."]}),t.jsxs("p",{children:["Para ",t.jsx("strong",{className:"text-text",children:"primitivos"})," (int, double, boolean): ",t.jsx("code",{className:"text-primary",children:"=="})," compara ",t.jsx("em",{children:"valores"}),". Funciona perfecto."]}),t.jsxs("p",{children:["Para ",t.jsx("strong",{className:"text-text",children:"objetos"})," (String, Integer, etc.): ",t.jsx("code",{className:"text-primary",children:"=="})," compara ",t.jsx("em",{children:"referencias"})," (direcciones de memoria). Usa ",t.jsx("code",{className:"text-primary",children:".equals()"})," para comparar contenido. Esta es una fuente constante de bugs en código Java de principiantes."]})]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operadores Lógicos"}),t.jsx(S,{filename:"Logicos.java",code:`
public class Logicos {
    public static void main(String[] args) {
        boolean a = true, b = false;

        // AND: ambos deben ser true
        System.out.println(a && b);  // false
        System.out.println(a && true); // true

        // OR: al menos uno debe ser true
        System.out.println(a || b);  // true
        System.out.println(b || false); // false

        // NOT: invierte el valor
        System.out.println(!a);      // false
        System.out.println(!b);      // true

        // Short-circuit (evaluación perezosa)
        // && → si el primero es false, NO evalúa el segundo
        // || → si el primero es true, NO evalúa el segundo
        String texto = null;
        // Esto es SEGURO gracias al short-circuit:
        if (texto != null && texto.length() > 0) {
            System.out.println("Texto no vacío");
        }
        // Si texto es null, NO intenta llamar a .length()

        // Operador ternario (condicional)
        int edad = 20;
        String resultado = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
        System.out.println(resultado); // "Mayor de edad"
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"instanceof — Verificar tipo"}),t.jsx(S,{filename:"InstanceOf.java",code:`
public class InstanceOf {
    public static void main(String[] args) {
        Object texto = "Hola mundo";
        Object numero = 42;

        // instanceof verifica si un objeto es de un tipo específico
        System.out.println(texto instanceof String);  // true
        System.out.println(texto instanceof Integer); // false
        System.out.println(numero instanceof Integer); // true

        // Uso práctico: verificar antes de hacer cast
        if (texto instanceof String) {
            String s = (String) texto;
            System.out.println(s.toUpperCase()); // "HOLA MUNDO"
        }

        // Java 16+: Pattern matching con instanceof
        if (texto instanceof String s) {
            // s ya está casteado a String automáticamente
            System.out.println(s.toUpperCase()); // "HOLA MUNDO"
        }
    }
}
`}),t.jsxs(F,{type:"tip",children:["El pattern matching con ",t.jsx("code",{className:"text-primary",children:"instanceof"})," (Java 16+) es una mejora muy útil que elimina la necesidad de hacer cast manual después de verificar el tipo."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Precedencia de Operadores"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"De mayor a menor prioridad:"}),t.jsx("div",{className:"bg-surface-light border border-border rounded-xl p-4 text-sm text-text-muted",children:t.jsxs("ol",{className:"space-y-1 list-decimal list-inside",children:[t.jsxs("li",{children:[t.jsx("code",{className:"text-primary",children:"() [] ."})," — Paréntesis, acceso"]}),t.jsxs("li",{children:[t.jsx("code",{className:"text-primary",children:"++ -- ! ~"})," — Unarios"]}),t.jsxs("li",{children:[t.jsx("code",{className:"text-primary",children:"* / %"})," — Multiplicación, división, módulo"]}),t.jsxs("li",{children:[t.jsx("code",{className:"text-primary",children:"+ -"})," — Suma, resta"]}),t.jsxs("li",{children:[t.jsx("code",{className:"text-primary",children:"< > <= >= instanceof"})," — Comparación"]}),t.jsxs("li",{children:[t.jsx("code",{className:"text-primary",children:"== !="})," — Igualdad"]}),t.jsxs("li",{children:[t.jsx("code",{className:"text-primary",children:"&&"})," — AND lógico"]}),t.jsxs("li",{children:[t.jsx("code",{className:"text-primary",children:"||"})," — OR lógico"]}),t.jsxs("li",{children:[t.jsx("code",{className:"text-primary",children:"?:"})," — Ternario"]}),t.jsxs("li",{children:[t.jsx("code",{className:"text-primary",children:"= += -= *= /="})," — Asignación"]})]})}),t.jsxs(F,{type:"tip",children:["Cuando tengas dudas sobre precedencia, ",t.jsx("strong",{children:"usa paréntesis"}),". Hacen tu código más legible y evitan errores sutiles."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 5"}),t.jsx(K,{number:1,title:"Calculadora completa",description:`Crea MiniCalculadora.java con métodos static para las 4 operaciones básicas:
- sumar(double a, double b)
- restar(double a, double b)
- multiplicar(double a, double b)
- dividir(double a, double b) — debe verificar que b != 0 antes de dividir

En main, prueba cada operación e imprime con printf y 2 decimales.
Si b es 0 en dividir, imprime "Error: división por cero".`,hint:"Usa un if dentro de dividir: if (b == 0) imprime error, else retorna a / b.",solution:`public class MiniCalculadora {
    static double sumar(double a, double b) { return a + b; }
    static double restar(double a, double b) { return a - b; }
    static double multiplicar(double a, double b) { return a * b; }

    static void dividir(double a, double b) {
        if (b == 0) {
            System.out.println("Error: división por cero");
        } else {
            System.out.printf("%.2f / %.2f = %.2f%n", a, b, a / b);
        }
    }

    public static void main(String[] args) {
        System.out.printf("10 + 3 = %.2f%n", sumar(10, 3));
        System.out.printf("10 - 3 = %.2f%n", restar(10, 3));
        System.out.printf("10 * 3 = %.2f%n", multiplicar(10, 3));
        dividir(10, 3);
        dividir(10, 0);
    }
}`,solutionFilename:"MiniCalculadora.java"}),t.jsx(K,{number:2,title:"Clasificador con ternarios anidados",description:`Crea Clasificador.java con un método static clasificarNota(int nota) que use
operadores ternarios anidados para retornar:
- "Excelente" si nota >= 90
- "Bueno" si nota >= 70
- "Regular" si nota >= 50
- "Reprobado" si nota < 50

En main, prueba con las notas: 95, 75, 55, 30.`,hint:'String resultado = (nota >= 90) ? "Excelente" : (nota >= 70) ? "Bueno" : ... ;',solution:`public class Clasificador {
    static String clasificarNota(int nota) {
        return (nota >= 90) ? "Excelente"
             : (nota >= 70) ? "Bueno"
             : (nota >= 50) ? "Regular"
             : "Reprobado";
    }

    public static void main(String[] args) {
        System.out.println("95: " + clasificarNota(95));
        System.out.println("75: " + clasificarNota(75));
        System.out.println("55: " + clasificarNota(55));
        System.out.println("30: " + clasificarNota(30));
    }
}`,solutionFilename:"Clasificador.java"}),t.jsx(K,{number:3,title:"Validador con short-circuit",description:`Crea Validador.java con un método static validarUsuario(String nombre, int edad) que:
1. Use short-circuit (&&) para verificar que nombre no sea null Y no esté vacío
2. Verifique que edad sea >= 18 y <= 120
3. Retorne true solo si todas las condiciones se cumplen

Prueba con: ("Carlos", 25), (null, 25), ("", 17), ("Ana", 200)`,hint:"if (nombre != null && !nombre.isEmpty() && edad >= 18 && edad <= 120) — el short-circuit protege contra el NullPointerException.",solution:`public class Validador {
    static boolean validarUsuario(String nombre, int edad) {
        return nombre != null && !nombre.isEmpty()
            && edad >= 18 && edad <= 120;
    }

    public static void main(String[] args) {
        System.out.println(validarUsuario("Carlos", 25)); // true
        System.out.println(validarUsuario(null, 25));      // false (short-circuit)
        System.out.println(validarUsuario("", 17));        // false
        System.out.println(validarUsuario("Ana", 200));    // false
    }
}`,solutionFilename:"Validador.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-5: operadores aritmeticos, logicos, comparacion, ternario, instanceof"
git push origin main
`}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",t.jsx("strong",{className:"text-text",children:"Día 6"}),": Strings — inmutabilidad, métodos esenciales, StringBuilder y formateo."]})]})})]})}function Uj(){return t.jsxs("div",{children:[t.jsx(oe,{day:6,title:"Strings",duration:"50 min",commitMsg:"dia-6: strings, inmutabilidad, metodos, StringBuilder"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy vas a dominar Strings — el tipo de dato que más usarás en Java. La clave es entender que son ",t.jsx("strong",{className:"text-text",children:"inmutables"})," y cuándo usar ",t.jsx("code",{className:"text-primary",children:"StringBuilder"}),"."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Crear Strings"}),t.jsxs(ne,{title:"¿Por qué los Strings son inmutables?",children:[t.jsxs("p",{children:["En TypeScript/JavaScript, los strings también son inmutables, pero casi nadie lo piensa. En Java es ",t.jsx("strong",{className:"text-text",children:"crucial"}),' porque afecta rendimiento: cada vez que "modificas" un String con ',t.jsx("code",{className:"text-primary",children:"+"}),", se crea un objeto nuevo en memoria."]}),t.jsxs("p",{children:["Si concatenas en un bucle de 10,000 iteraciones, creas 10,000 objetos String. Por eso existe",t.jsx("code",{className:"text-primary",children:" StringBuilder"}),": modifica el mismo objeto internamente."]})]}),t.jsx(S,{filename:"CrearStrings.java",code:`
public class CrearStrings {
    public static void main(String[] args) {
        // Forma más común (String literal - usa el String Pool)
        String nombre = "Carlos";

        // Con new (NO recomendado - crea objeto nuevo en heap)
        String nombre2 = new String("Carlos");

        // String es INMUTABLE: no puedes cambiar su contenido
        String saludo = "Hola";
        saludo = saludo + " Mundo"; // Crea un NUEVO String, no modifica el original

        // Strings vacíos y null
        String vacio = "";          // String vacío (existe, longitud 0)
        String nulo = null;         // No apunta a ningún String

        // Text blocks (Java 15+) - Strings multilínea
        String json = """
                {
                    "nombre": "Carlos",
                    "edad": 25
                }
                """;
        System.out.println(json);
    }
}
`}),t.jsxs(F,{type:"warning",title:"String es inmutable",children:['Cada vez que "modificas" un String, se crea uno nuevo en memoria. Para muchas concatenaciones en un bucle, usa ',t.jsx("code",{className:"text-primary",children:"StringBuilder"})," (más eficiente)."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Métodos esenciales de String"}),t.jsx(S,{filename:"MetodosString.java",code:`
public class MetodosString {
    public static void main(String[] args) {
        String texto = "  Hola Mundo Java  ";

        // Longitud
        System.out.println(texto.length());         // 19

        // Acceder a un carácter por índice (0-based)
        System.out.println(texto.charAt(2));         // 'H'

        // Mayúsculas y minúsculas
        System.out.println("hola".toUpperCase());    // "HOLA"
        System.out.println("HOLA".toLowerCase());    // "hola"

        // Eliminar espacios al inicio y final
        System.out.println(texto.trim());            // "Hola Mundo Java"
        System.out.println(texto.strip());           // "Hola Mundo Java" (Java 11+, maneja Unicode)

        // Buscar
        System.out.println(texto.contains("Mundo")); // true
        System.out.println(texto.indexOf("Mundo"));   // 7 (posición donde empieza)
        System.out.println(texto.indexOf("xyz"));     // -1 (no encontrado)
        System.out.println(texto.startsWith("  H")); // true
        System.out.println(texto.endsWith("  "));    // true

        // Subcadena
        System.out.println("Hola Mundo".substring(5));     // "Mundo"
        System.out.println("Hola Mundo".substring(0, 4));  // "Hola"

        // Reemplazar
        System.out.println("Hola Mundo".replace("Mundo", "Java")); // "Hola Java"
        System.out.println("aaa-bbb-ccc".replace("-", "_"));       // "aaa_bbb_ccc"

        // Dividir en array
        String csv = "Juan,María,Pedro,Ana";
        String[] nombres = csv.split(",");
        // nombres = ["Juan", "María", "Pedro", "Ana"]

        // Unir (Java 8+)
        String unido = String.join(" - ", nombres);
        System.out.println(unido); // "Juan - María - Pedro - Ana"

        // Verificar vacío
        System.out.println("".isEmpty());      // true
        System.out.println("  ".isEmpty());    // false (tiene espacios)
        System.out.println("  ".isBlank());    // true (Java 11+ - solo espacios)

        // Repetir (Java 11+)
        System.out.println("Ha".repeat(3));    // "HaHaHa"

        // Comparar Strings
        System.out.println("hola".equals("hola"));           // true
        System.out.println("hola".equals("Hola"));           // false
        System.out.println("hola".equalsIgnoreCase("Hola")); // true
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Formatear Strings"}),t.jsx(S,{filename:"FormatearStrings.java",code:`
public class FormatearStrings {
    public static void main(String[] args) {
        String nombre = "Carlos";
        int edad = 25;
        double salario = 45000.50;

        // String.format()
        String info = String.format("Nombre: %s, Edad: %d, Salario: $%.2f", nombre, edad, salario);
        System.out.println(info);
        // "Nombre: Carlos, Edad: 25, Salario: $45000.50"

        // formatted() - Java 15+
        String info2 = "Nombre: %s, Edad: %d".formatted(nombre, edad);

        // Convertir otros tipos a String
        String num = String.valueOf(42);        // "42"
        String dec = String.valueOf(3.14);      // "3.14"
        String bool = String.valueOf(true);     // "true"

        // Concatenación con + (simple pero ineficiente en bucles)
        String resultado = nombre + " tiene " + edad + " años";
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"StringBuilder — Para concatenaciones eficientes"}),t.jsx(S,{filename:"StringBuilderEjemplo.java",code:`
public class StringBuilderEjemplo {
    public static void main(String[] args) {
        // MALO: cada + crea un nuevo String en memoria
        String resultado = "";
        for (int i = 0; i < 1000; i++) {
            resultado += i + ", "; // ¡1000 objetos String creados!
        }

        // BUENO: StringBuilder modifica el mismo objeto
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 1000; i++) {
            sb.append(i).append(", ");
        }
        String resultadoFinal = sb.toString();

        // Métodos de StringBuilder
        StringBuilder builder = new StringBuilder("Hola");
        builder.append(" Mundo");          // "Hola Mundo"
        builder.insert(5, " Bello");       // "Hola Bello Mundo"
        builder.replace(5, 11, " Gran");   // "Hola Gran Mundo"
        builder.delete(4, 9);              // "Hola Mundo"
        builder.reverse();                 // "odnuM aloH"

        System.out.println(builder.toString());

        // StringBuilder NO es thread-safe
        // Para multi-threading usa StringBuffer (misma API, pero sincronizado)
    }
}
`}),t.jsxs(F,{type:"angular",children:["En TypeScript/JavaScript, los template literals (",t.jsx("code",{className:"text-primary",children:"`${variable}`"}),") son la forma estándar de formatear strings. En Java usas ",t.jsx("code",{className:"text-primary",children:"String.format()"}),", el operador ",t.jsx("code",{className:"text-primary",children:"+"}),", o ",t.jsx("code",{className:"text-primary",children:"StringBuilder"})," para casos de rendimiento."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 6"}),t.jsx(K,{number:1,title:"Procesador de nombres",description:`Crea ProcesadorNombres.java con un método static procesarNombre(String nombreCompleto) que:
1. Reciba un nombre completo (ej: "  carlos GARCÍA  ")
2. Elimine espacios al inicio y final (trim)
3. Convierta a Title Case: primera letra mayúscula, el resto minúscula para cada palabra
4. Retorne el nombre procesado

Prueba con: "  carlos GARCÍA  ", "ANA maría LÓPEZ", "  juan  "`,hint:"Usa trim(), split() para separar por espacios, luego para cada palabra: substring(0,1).toUpperCase() + substring(1).toLowerCase()",solution:`public class ProcesadorNombres {
    static String procesarNombre(String nombreCompleto) {
        String limpio = nombreCompleto.trim();
        String[] partes = limpio.split("\\\\s+");
        StringBuilder resultado = new StringBuilder();

        for (int i = 0; i < partes.length; i++) {
            if (i > 0) resultado.append(" ");
            String palabra = partes[i];
            resultado.append(palabra.substring(0, 1).toUpperCase())
                     .append(palabra.substring(1).toLowerCase());
        }
        return resultado.toString();
    }

    public static void main(String[] args) {
        System.out.println(procesarNombre("  carlos GARCÍA  "));
        System.out.println(procesarNombre("ANA maría LÓPEZ"));
        System.out.println(procesarNombre("  juan  "));
    }
}`,solutionFilename:"ProcesadorNombres.java"}),t.jsx(K,{number:2,title:"Analizador de texto",description:`Crea AnalizadorTexto.java con un método static analizarTexto(String texto) que imprima:
- Longitud del texto
- Número de palabras (split por espacios)
- Número de vocales (a, e, i, o, u — sin importar mayúsculas)
- El texto en reversa

Prueba con: "Java es un lenguaje genial"`,hint:"Para contar vocales, convierte a minúsculas y recorre con charAt() verificando si es vocal. Para reversa, usa new StringBuilder(texto).reverse().toString()",solution:`public class AnalizadorTexto {
    static void analizarTexto(String texto) {
        System.out.println("Texto: " + texto);
        System.out.println("Longitud: " + texto.length());
        System.out.println("Palabras: " + texto.split("\\\\s+").length);

        int vocales = 0;
        String lower = texto.toLowerCase();
        for (int i = 0; i < lower.length(); i++) {
            char c = lower.charAt(i);
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                vocales++;
            }
        }
        System.out.println("Vocales: " + vocales);

        String reversa = new StringBuilder(texto).reverse().toString();
        System.out.println("Reversa: " + reversa);
    }

    public static void main(String[] args) {
        analizarTexto("Java es un lenguaje genial");
    }
}`,solutionFilename:"AnalizadorTexto.java"}),t.jsx(K,{number:3,title:"Generador de email",description:`Crea GeneradorEmail.java con un método static generarEmail(String nombre, String apellido, String empresa) que:
1. Tome nombre, apellido y empresa
2. Genere un email: nombre.apellido@empresa.com
3. Todo en minúsculas, sin espacios, sin acentos (simplifica: no te preocupes por acentos por ahora)

Prueba con: ("Carlos", "García", "Google") → carlos.garcia@google.com

Bonus: usa StringBuilder para construir el email.`,hint:'new StringBuilder().append(nombre.toLowerCase()).append(".").append(apellido.toLowerCase()).append("@")...',solution:`public class GeneradorEmail {
    static String generarEmail(String nombre, String apellido, String empresa) {
        return new StringBuilder()
            .append(nombre.toLowerCase().trim())
            .append(".")
            .append(apellido.toLowerCase().trim())
            .append("@")
            .append(empresa.toLowerCase().trim())
            .append(".com")
            .toString();
    }

    public static void main(String[] args) {
        System.out.println(generarEmail("Carlos", "García", "Google"));
        System.out.println(generarEmail("Ana", "López", "Microsoft"));
        System.out.println(generarEmail("Juan", "Pérez", "Amazon"));
    }
}`,solutionFilename:"GeneradorEmail.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-6: strings, inmutabilidad, metodos, StringBuilder, formateo"
git push origin main
`}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",t.jsx("strong",{className:"text-text",children:"Día 7"}),": condicionales — if/else, switch, y pattern matching."]})]})})]})}function zj(){return t.jsxs("div",{children:[t.jsx(oe,{day:7,title:"Condicionales",duration:"45 min",commitMsg:"dia-7: if-else, switch clasico y moderno, ternario"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy vas a aprender a tomar decisiones en tu código. Los condicionales son idénticos a TypeScript en su forma básica, pero Java tiene un ",t.jsx("strong",{className:"text-text",children:"switch moderno"})," muy poderoso."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"if / else if / else"}),t.jsx(S,{filename:"Condicionales.java",code:`
public class Condicionales {
    public static void main(String[] args) {
        int edad = 20;

        // if simple
        if (edad >= 18) {
            System.out.println("Mayor de edad");
        }

        // if-else
        if (edad >= 18) {
            System.out.println("Mayor");
        } else {
            System.out.println("Menor");
        }

        // if-else if-else
        int nota = 85;
        if (nota >= 90) {
            System.out.println("A - Excelente");
        } else if (nota >= 80) {
            System.out.println("B - Muy bien");
        } else if (nota >= 70) {
            System.out.println("C - Bien");
        } else {
            System.out.println("F - Reprobado");
        }

        // Condiciones compuestas con && (AND) y || (OR)
        String rol = "admin";
        boolean activo = true;
        if (rol.equals("admin") && activo) {
            System.out.println("Acceso concedido");
        }
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operador Ternario"}),t.jsx(S,{filename:"Ternario.java",code:`
// Sintaxis: condición ? valorSiTrue : valorSiFalse
int edad = 20;
String resultado = (edad >= 18) ? "Mayor" : "Menor";

int a = 10, b = 20;
int mayor = (a > b) ? a : b; // 20
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"switch (clásico y moderno)"}),t.jsx(S,{filename:"SwitchEjemplo.java",code:`
public class SwitchEjemplo {
    public static void main(String[] args) {
        // Switch CLÁSICO (necesita break)
        int dia = 3;
        switch (dia) {
            case 1:
                System.out.println("Lunes");
                break;  // sin break, cae al siguiente case
            case 2:
                System.out.println("Martes");
                break;
            case 3:
                System.out.println("Miércoles");
                break;
            default:
                System.out.println("Otro día");
        }

        // Switch con String (desde Java 7)
        String color = "rojo";
        switch (color) {
            case "rojo":
                System.out.println("Peligro");
                break;
            case "verde":
                System.out.println("Seguro");
                break;
            default:
                System.out.println("Desconocido");
        }

        // Switch MODERNO con arrow -> (Java 14+) NO necesita break
        String resultado = switch (dia) {
            case 1 -> "Lunes";
            case 2 -> "Martes";
            case 3 -> "Miércoles";
            case 4, 5 -> "Jueves o Viernes"; // múltiples valores
            default -> "Fin de semana";
        };
        System.out.println(resultado);

        // Switch con bloques y yield (Java 14+)
        String mensaje = switch (dia) {
            case 1, 2, 3, 4, 5 -> {
                String tipo = "laborable";
                yield "Día " + tipo; // yield retorna el valor del bloque
            }
            default -> "Fin de semana";
        };
    }
}
`}),t.jsxs(ne,{title:"¿Cuándo usar switch clásico vs moderno?",children:[t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Switch clásico"})," (con break): solo si estás en Java 13 o menos, o si necesitas fall-through intencional (raro)."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Switch moderno"})," (con arrow →): siempre que puedas (Java 14+). Es más seguro (no hay bugs de break olvidado), más limpio, y puede retornar un valor directamente."]})]}),t.jsxs(F,{type:"angular",children:["TypeScript no tiene switch con arrow syntax. El switch moderno de Java 14+ con ",t.jsx("code",{className:"text-primary",children:"->"})," es más limpio y seguro que el switch clásico porque no necesita ",t.jsx("code",{className:"text-primary",children:"break"}),"."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 7"}),t.jsx(K,{number:1,title:"Clasificador de IMC",description:`Crea ClasificadorIMC.java con un método static clasificar(double peso, double altura):
1. Calcula el IMC: peso / (altura * altura)
2. Clasifica según:
   - IMC < 18.5 → "Bajo peso"
   - IMC < 25 → "Normal"
   - IMC < 30 → "Sobrepeso"
   - IMC >= 30 → "Obesidad"
3. Imprime el IMC con 1 decimal y la clasificación

Prueba con: (70, 1.75), (50, 1.60), (95, 1.70)`,hint:"double imc = peso / (altura * altura); luego usa if-else if-else para clasificar.",solution:`public class ClasificadorIMC {
    static void clasificar(double peso, double altura) {
        double imc = peso / (altura * altura);
        String clasificacion;

        if (imc < 18.5) {
            clasificacion = "Bajo peso";
        } else if (imc < 25) {
            clasificacion = "Normal";
        } else if (imc < 30) {
            clasificacion = "Sobrepeso";
        } else {
            clasificacion = "Obesidad";
        }

        System.out.printf("Peso: %.1f, Altura: %.2f → IMC: %.1f (%s)%n",
                          peso, altura, imc, clasificacion);
    }

    public static void main(String[] args) {
        clasificar(70, 1.75);
        clasificar(50, 1.60);
        clasificar(95, 1.70);
    }
}`,solutionFilename:"ClasificadorIMC.java"}),t.jsx(K,{number:2,title:"Traductor de día con switch moderno",description:`Crea TraductorDia.java que use switch moderno (arrow syntax) para:
1. Recibir un int del 1 al 7
2. Retornar el nombre del día en español
3. Retornar si es "laborable" o "fin de semana"

Usa switch como expresión que retorna un valor String.
Prueba con: 1, 3, 6, 7, 9 (inválido)`,hint:'String dia = switch (numero) { case 1 -> "Lunes"; case 6, 7 -> "fin de semana"; default -> "Día inválido"; };',solution:`public class TraductorDia {
    static String obtenerDia(int numero) {
        return switch (numero) {
            case 1 -> "Lunes";
            case 2 -> "Martes";
            case 3 -> "Miércoles";
            case 4 -> "Jueves";
            case 5 -> "Viernes";
            case 6 -> "Sábado";
            case 7 -> "Domingo";
            default -> "Día inválido";
        };
    }

    static String obtenerTipo(int numero) {
        return switch (numero) {
            case 1, 2, 3, 4, 5 -> "Laborable";
            case 6, 7 -> "Fin de semana";
            default -> "Inválido";
        };
    }

    public static void main(String[] args) {
        for (int i : new int[]{1, 3, 6, 7, 9}) {
            System.out.printf("%d → %s (%s)%n", i, obtenerDia(i), obtenerTipo(i));
        }
    }
}`,solutionFilename:"TraductorDia.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-7: condicionales if-else, switch clasico y moderno, ternario"
git push origin main
`}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",t.jsx("strong",{className:"text-text",children:"Día 8"}),": bucles — for, while, do-while, for-each, break y continue."]})]})})]})}function qj(){return t.jsxs("div",{children:[t.jsx(oe,{day:8,title:"Bucles",duration:"50 min",commitMsg:"dia-8: for, while, do-while, for-each, break, continue"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a dominar las 4 formas de repetir código en Java. Además aprenderás cuándo usar cada una — algo que muchos cursos no explican."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Bucle for"}),t.jsxs(ne,{title:"¿Cuándo usar cada tipo de bucle?",children:[t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"for clásico"})," — Cuando sabes cuántas iteraciones necesitas, o cuando necesitas el índice."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"for-each"})," — Cuando recorres una colección completa y NO necesitas el índice. Es más limpio."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"while"})," — Cuando no sabes cuántas iteraciones habrá (ej: leer un archivo hasta el final)."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"do-while"})," — Cuando necesitas ejecutar al menos una vez (ej: menú interactivo)."]})]}),t.jsx(S,{filename:"BucleFor.java",code:`
public class BucleFor {
    public static void main(String[] args) {
        // for clásico: for (inicialización; condición; actualización)
        for (int i = 0; i < 5; i++) {
            System.out.println("Iteración: " + i); // 0, 1, 2, 3, 4
        }

        // Contar hacia atrás
        for (int i = 10; i >= 0; i--) {
            System.out.print(i + " "); // 10 9 8 7 6 5 4 3 2 1 0
        }

        // Incremento personalizado
        for (int i = 0; i < 100; i += 10) {
            System.out.print(i + " "); // 0 10 20 30 40 50 60 70 80 90
        }

        // Bucles anidados
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                System.out.printf("(%d,%d) ", i, j);
            }
            System.out.println();
        }
        // (1,1) (1,2) (1,3)
        // (2,1) (2,2) (2,3)
        // (3,1) (3,2) (3,3)
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"for-each (Enhanced for)"}),t.jsx(S,{filename:"ForEach.java",code:`
public class ForEach {
    public static void main(String[] args) {
        // for-each para arrays
        String[] frutas = {"Manzana", "Banana", "Cereza"};
        for (String fruta : frutas) {
            System.out.println(fruta);
        }

        // for-each para colecciones
        java.util.List<Integer> numeros = java.util.List.of(1, 2, 3, 4, 5);
        for (int num : numeros) {
            System.out.println(num);
        }

        // LIMITACIÓN: no tienes acceso al índice
        // Si necesitas el índice, usa el for clásico
    }
}
`}),t.jsxs(F,{type:"angular",children:["El for-each de Java (",t.jsx("code",{className:"text-primary",children:"for (Type item : collection)"}),") es como el ",t.jsx("code",{className:"text-primary",children:"for...of"})," de TypeScript/JavaScript."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"while y do-while"}),t.jsx(S,{filename:"While.java",code:`
public class While {
    public static void main(String[] args) {
        // while: verifica ANTES de ejecutar
        int contador = 0;
        while (contador < 5) {
            System.out.println("Contador: " + contador);
            contador++;
        }

        // do-while: ejecuta AL MENOS UNA VEZ, luego verifica
        int intentos = 0;
        do {
            System.out.println("Intento: " + intentos);
            intentos++;
        } while (intentos < 3);

        // Bucle infinito controlado
        int numero = 0;
        while (true) {
            if (numero >= 10) break; // salir del bucle
            numero++;
        }
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"break y continue"}),t.jsx(S,{filename:"BreakContinue.java",code:`
public class BreakContinue {
    public static void main(String[] args) {
        // break: sale del bucle completamente
        for (int i = 0; i < 10; i++) {
            if (i == 5) break;
            System.out.print(i + " "); // 0 1 2 3 4
        }

        System.out.println();

        // continue: salta a la siguiente iteración
        for (int i = 0; i < 10; i++) {
            if (i % 2 == 0) continue; // saltar pares
            System.out.print(i + " "); // 1 3 5 7 9
        }

        System.out.println();

        // break con etiqueta (label) - para bucles anidados
        externo:
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                if (i == 2 && j == 2) break externo; // sale de AMBOS bucles
                System.out.printf("(%d,%d) ", i, j);
            }
        }
    }
}
`}),t.jsxs(F,{type:"tip",children:["El ",t.jsx("code",{className:"text-primary",children:"break"})," con etiqueta es útil pero poco común. Si lo necesitas frecuentemente, considera refactorizar tu código en métodos separados."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 8"}),t.jsx(K,{number:1,title:"FizzBuzz",description:`El clásico FizzBuzz. Crea FizzBuzz.java que imprima los números del 1 al 30:
- Si es divisible por 3, imprime "Fizz"
- Si es divisible por 5, imprime "Buzz"
- Si es divisible por ambos, imprime "FizzBuzz"
- Si no, imprime el número

Este ejercicio aparece en entrevistas técnicas reales.`,hint:"Usa el operador módulo (%). Verifica primero divisible por ambos (15), luego por 3, luego por 5.",solution:`public class FizzBuzz {
    public static void main(String[] args) {
        for (int i = 1; i <= 30; i++) {
            if (i % 15 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else {
                System.out.println(i);
            }
        }
    }
}`,solutionFilename:"FizzBuzz.java"}),t.jsx(K,{number:2,title:"Tabla de multiplicar",description:`Crea TablaMultiplicar.java que:
1. Reciba un número (hardcoded, ej: 7)
2. Imprima su tabla de multiplicar del 1 al 10
3. Use printf para alinear las columnas

Formato esperado:
 7 x  1 =   7
 7 x  2 =  14
 7 x 10 =  70`,hint:"Usa un for del 1 al 10 y printf con %2d para alinear los números.",solution:`public class TablaMultiplicar {
    public static void main(String[] args) {
        int numero = 7;
        System.out.println("Tabla del " + numero + ":");
        for (int i = 1; i <= 10; i++) {
            System.out.printf("%2d x %2d = %3d%n", numero, i, numero * i);
        }
    }
}`,solutionFilename:"TablaMultiplicar.java"}),t.jsx(K,{number:3,title:"Números primos",description:`Crea BuscadorPrimos.java con:
1. Un método static esPrimo(int n) que retorne true si n es primo
2. En main, imprima todos los primos entre 2 y 50

Un número es primo si solo es divisible por 1 y por sí mismo.`,hint:"Para verificar si n es primo, recorre desde 2 hasta la raíz cuadrada de n. Si alguno lo divide exactamente, no es primo.",solution:`public class BuscadorPrimos {
    static boolean esPrimo(int n) {
        if (n < 2) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.print("Primos del 2 al 50: ");
        for (int i = 2; i <= 50; i++) {
            if (esPrimo(i)) {
                System.out.print(i + " ");
            }
        }
        System.out.println();
    }
}`,solutionFilename:"BuscadorPrimos.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-8: bucles for, while, do-while, for-each, FizzBuzz, primos"
git push origin main
`}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",t.jsx("strong",{className:"text-text",children:"Día 9"}),": arrays — declaración, iteración, multidimensionales y java.util.Arrays."]})]})})]})}function Bj(){return t.jsxs("div",{children:[t.jsx(oe,{day:9,title:"Arrays",duration:"50 min",commitMsg:"dia-9: arrays, multidimensionales, java.util.Arrays"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a dominar arrays — la estructura de datos más básica de Java. Son de tamaño fijo, pero son la base para entender colecciones dinámicas después."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Declarar y crear Arrays"}),t.jsxs(ne,{title:"Arrays en Java vs TypeScript — diferencia clave",children:[t.jsxs("p",{children:["En TypeScript, los arrays son ",t.jsx("strong",{className:"text-text",children:"dinámicos"}),": puedes hacer",t.jsx("code",{className:"text-primary",children:" arr.push()"}),", ",t.jsx("code",{className:"text-primary",children:".pop()"}),", y el tamaño cambia."]}),t.jsxs("p",{children:["En Java, los arrays tienen ",t.jsx("strong",{className:"text-text",children:"tamaño fijo"}),". Una vez creados con",t.jsx("code",{className:"text-primary",children:" new int[5]"}),", siempre tendrán 5 elementos. Si necesitas algo dinámico, usarás ",t.jsx("code",{className:"text-primary",children:"ArrayList"})," (Día 17). Pero primero domina los arrays — son la base."]})]}),t.jsx(S,{filename:"Arrays.java",code:`
public class Arrays {
    public static void main(String[] args) {
        // Declarar con tamaño fijo
        int[] numeros = new int[5]; // array de 5 enteros (todos 0)
        numeros[0] = 10;
        numeros[1] = 20;

        // Declarar con valores iniciales
        String[] frutas = {"Manzana", "Banana", "Cereza"};
        double[] precios = {19.99, 29.99, 39.99};

        // Acceder a elementos (índice empieza en 0)
        System.out.println(frutas[0]);       // "Manzana"
        System.out.println(frutas.length);   // 3 (NO es un método, es un campo)

        // Modificar elementos
        frutas[1] = "Pera";

        // CUIDADO: ArrayIndexOutOfBoundsException
        // System.out.println(frutas[10]); // ¡ERROR en tiempo de ejecución!

        // Recorrer con for
        for (int i = 0; i < frutas.length; i++) {
            System.out.println(i + ": " + frutas[i]);
        }

        // Recorrer con for-each
        for (String fruta : frutas) {
            System.out.println(fruta);
        }
    }
}
`}),t.jsxs(F,{type:"warning",children:["Los arrays en Java tienen ",t.jsx("strong",{children:"tamaño fijo"}),". Una vez creados, no puedes agregar ni quitar elementos. Si necesitas una colección dinámica, usa ",t.jsx("code",{className:"text-primary",children:"ArrayList"}),"."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Arrays multidimensionales"}),t.jsx(S,{filename:"ArraysMulti.java",code:`
// Matriz 2D (array de arrays)
int[][] matriz = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
System.out.println(matriz[1][2]); // 6 (fila 1, columna 2)

// Recorrer matriz 2D
for (int i = 0; i < matriz.length; i++) {
    for (int j = 0; j < matriz[i].length; j++) {
        System.out.printf("%d ", matriz[i][j]);
    }
    System.out.println();
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Clase java.util.Arrays"}),t.jsx(S,{filename:"ArraysUtil.java",code:`
import java.util.Arrays;

public class ArraysUtil {
    public static void main(String[] args) {
        int[] nums = {5, 2, 8, 1, 9, 3};

        // Ordenar
        Arrays.sort(nums); // [1, 2, 3, 5, 8, 9]

        // Buscar (el array DEBE estar ordenado)
        int indice = Arrays.binarySearch(nums, 5); // 3

        // Convertir a String legible
        System.out.println(Arrays.toString(nums)); // [1, 2, 3, 5, 8, 9]

        // Llenar con un valor
        int[] ceros = new int[5];
        Arrays.fill(ceros, 0); // [0, 0, 0, 0, 0]

        // Copiar
        int[] copia = Arrays.copyOf(nums, nums.length);
        int[] parcial = Arrays.copyOfRange(nums, 1, 4); // [2, 3, 5]

        // Comparar
        System.out.println(Arrays.equals(nums, copia)); // true

        // Convertir a List
        String[] nombres = {"Ana", "Luis", "María"};
        java.util.List<String> lista = Arrays.asList(nombres);
    }
}
`}),t.jsxs(F,{type:"angular",children:["En TypeScript los arrays son dinámicos y tienen métodos como ",t.jsx("code",{className:"text-primary",children:".push()"}),",",t.jsx("code",{className:"text-primary",children:".map()"}),", ",t.jsx("code",{className:"text-primary",children:".filter()"}),". En Java los arrays primitivos son fijos. Para funcionalidad similar usa ",t.jsx("code",{className:"text-primary",children:"ArrayList"})," y ",t.jsx("code",{className:"text-primary",children:"Streams"}),"."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 9"}),t.jsx(K,{number:1,title:"Estadísticas de array",description:`Crea EstadisticasArray.java con métodos static que reciban un int[] y retornen:
- encontrarMaximo(int[] nums) → el valor máximo
- encontrarMinimo(int[] nums) → el valor mínimo
- calcularPromedio(int[] nums) → el promedio como double

Prueba con: {45, 12, 78, 3, 56, 91, 23}`,hint:"Recorre el array con for, lleva una variable para el máximo/mínimo actual. Para promedio, suma todo y divide entre length.",solution:`public class EstadisticasArray {
    static int encontrarMaximo(int[] nums) {
        int max = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > max) max = nums[i];
        }
        return max;
    }

    static int encontrarMinimo(int[] nums) {
        int min = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] < min) min = nums[i];
        }
        return min;
    }

    static double calcularPromedio(int[] nums) {
        int suma = 0;
        for (int num : nums) {
            suma += num;
        }
        return (double) suma / nums.length;
    }

    public static void main(String[] args) {
        int[] datos = {45, 12, 78, 3, 56, 91, 23};
        System.out.println("Datos: " + java.util.Arrays.toString(datos));
        System.out.println("Máximo: " + encontrarMaximo(datos));
        System.out.println("Mínimo: " + encontrarMinimo(datos));
        System.out.printf("Promedio: %.2f%n", calcularPromedio(datos));
    }
}`,solutionFilename:"EstadisticasArray.java"}),t.jsx(K,{number:2,title:"Invertir array",description:`Crea InvertirArray.java con un método static invertir(int[] arr) que:
1. Invierta el array IN-PLACE (sin crear uno nuevo)
2. Use dos punteros: uno al inicio y otro al final
3. Intercambie los elementos hasta que se crucen

Prueba con: {1, 2, 3, 4, 5} → {5, 4, 3, 2, 1}
Y con: {10, 20, 30, 40} → {40, 30, 20, 10}`,hint:"Usa int izq = 0 y int der = arr.length - 1. Intercambia arr[izq] y arr[der], luego izq++ y der-- hasta que izq >= der.",solution:`public class InvertirArray {
    static void invertir(int[] arr) {
        int izq = 0;
        int der = arr.length - 1;
        while (izq < der) {
            int temp = arr[izq];
            arr[izq] = arr[der];
            arr[der] = temp;
            izq++;
            der--;
        }
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5};
        System.out.println("Antes: " + java.util.Arrays.toString(nums));
        invertir(nums);
        System.out.println("Después: " + java.util.Arrays.toString(nums));

        int[] nums2 = {10, 20, 30, 40};
        invertir(nums2);
        System.out.println("Invertido: " + java.util.Arrays.toString(nums2));
    }
}`,solutionFilename:"InvertirArray.java"}),t.jsx(K,{number:3,title:"Matriz transpuesta",description:`Crea MatrizTranspuesta.java que:
1. Cree una matriz 3x3 con valores
2. Imprima la matriz original
3. Cree la matriz transpuesta (filas ↔ columnas)
4. Imprima la transpuesta

Ejemplo:
Original:     Transpuesta:
1 2 3         1 4 7
4 5 6         2 5 8
7 8 9         3 6 9`,hint:"Para transponer: transpuesta[j][i] = original[i][j]. Necesitas dos bucles anidados.",solution:`public class MatrizTranspuesta {
    static void imprimirMatriz(int[][] m) {
        for (int[] fila : m) {
            for (int val : fila) {
                System.out.printf("%3d", val);
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int[][] original = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        System.out.println("Original:");
        imprimirMatriz(original);

        int[][] transpuesta = new int[3][3];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                transpuesta[j][i] = original[i][j];
            }
        }

        System.out.println("Transpuesta:");
        imprimirMatriz(transpuesta);
    }
}`,solutionFilename:"MatrizTranspuesta.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-9: arrays, multidimensionales, java.util.Arrays, invertir, transponer"
git push origin main
`}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",t.jsx("strong",{className:"text-text",children:"Día 10"}),": métodos — parámetros, retorno, overloading, varargs y paso por valor."]})]})})]})}function _j(){return t.jsxs("div",{children:[t.jsx(oe,{day:10,title:"Métodos",duration:"50 min",commitMsg:"dia-10: metodos, overloading, varargs, paso por valor"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a aprender a crear métodos — las funciones de Java. Dominar métodos es clave porque en OOP, todo el comportamiento se define con métodos."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Definir y llamar métodos"}),t.jsxs(ne,{title:"Métodos en Java vs funciones en TypeScript",children:[t.jsxs("p",{children:["En TypeScript puedes tener funciones sueltas: ",t.jsxs("code",{className:"text-primary",children:["function sumar(a: number, b: number) ","{}"]}),". En Java, ",t.jsx("strong",{className:"text-text",children:"todo método debe vivir dentro de una clase"}),"."]}),t.jsxs("p",{children:[t.jsx("code",{className:"text-primary",children:"static"})," permite llamar al método sin crear un objeto. Sin ",t.jsx("code",{className:"text-primary",children:"static"}),", necesitas hacer ",t.jsx("code",{className:"text-primary",children:"new MiClase().miMetodo()"}),". Por ahora usarás ",t.jsx("code",{className:"text-primary",children:"static"}),"; cuando lleguemos a OOP, entenderás cuándo no usarlo."]})]}),t.jsx(S,{filename:"Metodos.java",code:`
public class Metodos {
    // Método sin retorno (void)
    static void saludar() {
        System.out.println("¡Hola!");
    }

    // Método con retorno
    static int sumar(int a, int b) {
        return a + b;
    }

    // Método con String como retorno
    static String formatearNombre(String nombre, String apellido) {
        return apellido.toUpperCase() + ", " + nombre;
    }

    // Método con múltiples returns
    static String clasificarEdad(int edad) {
        if (edad < 13) return "Niño";
        if (edad < 18) return "Adolescente";
        if (edad < 65) return "Adulto";
        return "Senior";
    }

    public static void main(String[] args) {
        saludar();                              // ¡Hola!
        int resultado = sumar(5, 3);            // 8
        String nombre = formatearNombre("Carlos", "García"); // GARCÍA, Carlos
        String clase = clasificarEdad(25);      // Adulto
    }
}
`}),t.jsxs(F,{type:"angular",children:["En TypeScript defines funciones con ",t.jsx("code",{className:"text-primary",children:"function"})," o arrow functions. En Java todo método debe estar dentro de una clase. ",t.jsx("code",{className:"text-primary",children:"static"})," permite llamar al método sin crear una instancia de la clase."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Sobrecarga de métodos (Overloading)"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Puedes tener varios métodos con el ",t.jsx("strong",{className:"text-text",children:"mismo nombre"})," pero",t.jsx("strong",{className:"text-text",children:" diferentes parámetros"}),"."]}),t.jsx(S,{filename:"Sobrecarga.java",code:`
public class Sobrecarga {
    // Mismo nombre, diferentes parámetros
    static int sumar(int a, int b) {
        return a + b;
    }

    static double sumar(double a, double b) {
        return a + b;
    }

    static int sumar(int a, int b, int c) {
        return a + b + c;
    }

    static String sumar(String a, String b) {
        return a + b; // concatenación
    }

    public static void main(String[] args) {
        System.out.println(sumar(1, 2));         // 3 (int)
        System.out.println(sumar(1.5, 2.5));     // 4.0 (double)
        System.out.println(sumar(1, 2, 3));      // 6 (tres ints)
        System.out.println(sumar("Ho", "la"));   // "Hola" (String)
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Varargs (argumentos variables)"}),t.jsx(S,{filename:"Varargs.java",code:`
public class Varargs {
    // ... permite recibir cualquier cantidad de argumentos
    static int sumarTodos(int... numeros) {
        int total = 0;
        for (int n : numeros) {
            total += n;
        }
        return total;
    }

    // Varargs debe ser el ÚLTIMO parámetro
    static void imprimir(String prefijo, String... mensajes) {
        for (String msg : mensajes) {
            System.out.println(prefijo + ": " + msg);
        }
    }

    public static void main(String[] args) {
        System.out.println(sumarTodos(1, 2));           // 3
        System.out.println(sumarTodos(1, 2, 3, 4, 5));  // 15
        System.out.println(sumarTodos());                // 0

        imprimir("LOG", "Inicio", "Proceso", "Fin");
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Paso por valor vs referencia"}),t.jsx(S,{filename:"PasoPorValor.java",code:`
public class PasoPorValor {
    // Java SIEMPRE pasa por valor
    // Pero para objetos, el "valor" es la referencia (dirección)

    static void cambiarPrimitivo(int x) {
        x = 100; // NO afecta al original
    }

    static void cambiarArray(int[] arr) {
        arr[0] = 100; // SÍ afecta al original (misma referencia)
    }

    static void reasignarArray(int[] arr) {
        arr = new int[]{100, 200}; // NO afecta al original (nueva referencia local)
    }

    public static void main(String[] args) {
        int num = 5;
        cambiarPrimitivo(num);
        System.out.println(num); // 5 (no cambió)

        int[] datos = {1, 2, 3};
        cambiarArray(datos);
        System.out.println(datos[0]); // 100 (sí cambió)

        reasignarArray(datos);
        System.out.println(datos[0]); // 100 (no cambió por reasignación)
    }
}
`}),t.jsxs(F,{type:"info",children:["Java es siempre ",t.jsx("strong",{children:"paso por valor"}),". Para primitivos copia el valor. Para objetos copia la referencia — por eso puedes modificar el contenido del objeto pero no reasignar la variable original."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 10"}),t.jsx(K,{number:1,title:"Utilidades matemáticas",description:`Crea MathUtils.java con métodos static sobrecargados:
- max(int a, int b) → el mayor de dos ints
- max(int a, int b, int c) → el mayor de tres ints
- max(double a, double b) → el mayor de dos doubles
- esPar(int n) → true si n es par
- factorial(int n) → el factorial de n (n!)

Prueba todos desde main.`,hint:"Para factorial: si n <= 1 retorna 1, sino retorna n * factorial(n-1). O usa un bucle for.",solution:`public class MathUtils {
    static int max(int a, int b) { return (a > b) ? a : b; }
    static int max(int a, int b, int c) { return max(max(a, b), c); }
    static double max(double a, double b) { return (a > b) ? a : b; }
    static boolean esPar(int n) { return n % 2 == 0; }

    static long factorial(int n) {
        long resultado = 1;
        for (int i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }

    public static void main(String[] args) {
        System.out.println("max(3, 7) = " + max(3, 7));
        System.out.println("max(3, 7, 5) = " + max(3, 7, 5));
        System.out.println("max(3.14, 2.71) = " + max(3.14, 2.71));
        System.out.println("esPar(4) = " + esPar(4));
        System.out.println("esPar(7) = " + esPar(7));
        System.out.println("factorial(5) = " + factorial(5));
        System.out.println("factorial(10) = " + factorial(10));
    }
}`,solutionFilename:"MathUtils.java"}),t.jsx(K,{number:2,title:"Constructor de mensajes con varargs",description:`Crea MensajeBuilder.java con:
- formatear(String... partes) → une todas las partes con " | "
- formatear(String separador, String... partes) → une con el separador dado
- contar(String... palabras) → retorna cuántas palabras se pasaron

Prueba con varias cantidades de argumentos.`,hint:"Usa String.join(separador, partes) para unir las partes fácilmente.",solution:`public class MensajeBuilder {
    static String formatear(String... partes) {
        return String.join(" | ", partes);
    }

    static String formatear(String separador, String... partes) {
        return String.join(separador, partes);
    }

    static int contar(String... palabras) {
        return palabras.length;
    }

    public static void main(String[] args) {
        System.out.println(formatear("Hola", "Mundo", "Java"));
        System.out.println(formatear(" -> ", "Paso 1", "Paso 2", "Paso 3"));
        System.out.println("Palabras: " + contar("a", "b", "c", "d"));
    }
}`,solutionFilename:"MensajeBuilder.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-10: metodos, overloading, varargs, paso por valor"
git push origin main
`}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",t.jsx("strong",{className:"text-text",children:"Día 11"}),": clases y objetos — constructores, this, static, toString."]})]})})]})}function kj(){return t.jsxs("div",{children:[t.jsx(oe,{day:11,title:"Clases y Objetos",duration:"60 min",commitMsg:"dia-11: clases, objetos, constructores, this, static, equals"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy entras al corazón de Java: la Programación Orientada a Objetos. Una clase es un plano, un objeto es una instancia concreta. Dominar esto cambia tu forma de pensar en código."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es una Clase?"}),t.jsxs(ne,{title:"Clase = TypeScript class, pero con superpoderes",children:[t.jsxs("p",{children:["En TypeScript/Angular ya usas clases. En Java la idea es la misma: ",t.jsx("strong",{className:"text-text",children:"campos"})," (propiedades) + ",t.jsx("strong",{className:"text-text",children:"métodos"})," (comportamiento). La diferencia clave: en Java el constructor se llama con el ",t.jsx("em",{children:"nombre de la clase"}),", no con ",t.jsx("code",{className:"text-primary",children:"constructor()"}),"."]}),t.jsxs("p",{children:["Además, Java requiere ",t.jsx("strong",{className:"text-text",children:"un archivo por clase pública"}),". Si la clase se llama ",t.jsx("code",{className:"text-primary",children:"Persona"}),", el archivo debe llamarse ",t.jsx("code",{className:"text-primary",children:"Persona.java"}),"."]})]}),t.jsx(S,{filename:"Persona.java",code:`
public class Persona {
    // Campos (atributos/propiedades)
    String nombre;
    int edad;
    String email;

    // Constructor: se ejecuta al crear un objeto con "new"
    public Persona(String nombre, int edad, String email) {
        this.nombre = nombre;  // "this" se refiere a la instancia actual
        this.edad = edad;
        this.email = email;
    }

    // Constructor vacío (sin argumentos)
    public Persona() {
        this.nombre = "Sin nombre";
        this.edad = 0;
        this.email = "";
    }

    // Métodos (comportamientos)
    public void saludar() {
        System.out.println("Hola, soy " + nombre + " y tengo " + edad + " años");
    }

    public boolean esMayorDeEdad() {
        return edad >= 18;
    }

    // toString: representación en texto del objeto
    @Override
    public String toString() {
        return "Persona{nombre='" + nombre + "', edad=" + edad + "}";
    }
}
`}),t.jsx(S,{filename:"Main.java",code:`
public class Main {
    public static void main(String[] args) {
        // Crear objetos con "new"
        Persona p1 = new Persona("Carlos", 25, "carlos@mail.com");
        Persona p2 = new Persona("Ana", 17, "ana@mail.com");
        Persona p3 = new Persona(); // constructor vacío

        p1.saludar();  // "Hola, soy Carlos y tengo 25 años"
        System.out.println(p2.esMayorDeEdad()); // false

        // Acceder a campos
        System.out.println(p1.nombre); // "Carlos"
        p3.nombre = "Luis";

        // toString se llama automáticamente
        System.out.println(p1); // "Persona{nombre='Carlos', edad=25}"
    }
}
`}),t.jsxs(F,{type:"angular",children:["En TypeScript/Angular defines clases igual con ",t.jsx("code",{className:"text-primary",children:"class"}),". La diferencia principal es que Java requiere un archivo por clase pública y el constructor se llama con el nombre de la clase (no ",t.jsx("code",{className:"text-primary",children:"constructor()"}),")."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"this, static y final"}),t.jsx(S,{filename:"Conceptos.java",code:`
public class Contador {
    // Campo static: compartido por TODAS las instancias
    static int totalCreados = 0;

    // Campo de instancia: cada objeto tiene su propia copia
    String id;

    // Constante de clase
    static final int MAX_INSTANCIAS = 100;

    public Contador(String id) {
        this.id = id;       // "this" distingue campo de parámetro
        totalCreados++;      // incrementa el contador compartido
    }

    // Método static: se llama sin instancia
    public static int getTotal() {
        return totalCreados;
    }

    // Método de instancia: necesita un objeto
    public String getId() {
        return this.id;
    }

    public static void main(String[] args) {
        Contador c1 = new Contador("A");
        Contador c2 = new Contador("B");

        // Llamar método static: Clase.metodo()
        System.out.println(Contador.getTotal()); // 2
        System.out.println(Contador.MAX_INSTANCIAS); // 100

        // Llamar método de instancia: objeto.metodo()
        System.out.println(c1.getId()); // "A"
    }
}
`}),t.jsxs(F,{type:"info",children:[t.jsx("strong",{children:"static"})," = pertenece a la clase, no a la instancia. No necesitas crear un objeto.",t.jsx("strong",{children:" this"})," = referencia a la instancia actual. ",t.jsx("strong",{children:"final"})," = constante, no se puede reasignar."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Getters, Setters y equals"}),t.jsx(S,{filename:"Producto.java",code:`
public class Producto {
    private String nombre;
    private double precio;

    public Producto(String nombre, double precio) {
        this.nombre = nombre;
        setPrecio(precio); // usar setter para validar
    }

    // Getter
    public String getNombre() { return nombre; }
    public double getPrecio() { return precio; }

    // Setter con validación
    public void setPrecio(double precio) {
        if (precio < 0) throw new IllegalArgumentException("Precio no puede ser negativo");
        this.precio = precio;
    }

    // equals: comparar objetos por contenido
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Producto otro = (Producto) obj;
        return nombre.equals(otro.nombre) && Double.compare(precio, otro.precio) == 0;
    }

    // hashCode: SIEMPRE sobreescribir junto con equals
    @Override
    public int hashCode() {
        return java.util.Objects.hash(nombre, precio);
    }
}
`}),t.jsxs(F,{type:"warning",children:["Si sobreescribes ",t.jsx("code",{className:"text-primary",children:"equals()"}),", ",t.jsx("strong",{children:"siempre"})," sobreescribe también ",t.jsx("code",{className:"text-primary",children:"hashCode()"}),". Es un contrato de Java — objetos iguales deben tener el mismo hashCode. Si no lo haces, las colecciones como HashMap fallarán."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 11"}),t.jsx(K,{number:1,title:"Clase CuentaBancaria",description:`Crea CuentaBancaria.java con:
- Campos: titular (String), saldo (double), numeroCuenta (String)
- Constructor con los 3 parámetros
- Métodos: depositar(double monto), retirar(double monto), getSaldo()
- depositar debe rechazar montos negativos
- retirar debe rechazar si no hay saldo suficiente
- toString que muestre la info de la cuenta

Crea un Main.java que pruebe depositar, retirar e imprimir la cuenta.`,hint:"En retirar: if (monto > saldo) { System.out.println('Saldo insuficiente'); return; }",solution:`public class CuentaBancaria {
    private String titular;
    private double saldo;
    private String numeroCuenta;

    public CuentaBancaria(String titular, double saldo, String numeroCuenta) {
        this.titular = titular;
        this.saldo = saldo;
        this.numeroCuenta = numeroCuenta;
    }

    public void depositar(double monto) {
        if (monto <= 0) {
            System.out.println("Error: monto debe ser positivo");
            return;
        }
        saldo += monto;
        System.out.printf("Depositado: $%.2f. Nuevo saldo: $%.2f%n", monto, saldo);
    }

    public void retirar(double monto) {
        if (monto <= 0) {
            System.out.println("Error: monto debe ser positivo");
            return;
        }
        if (monto > saldo) {
            System.out.println("Error: saldo insuficiente");
            return;
        }
        saldo -= monto;
        System.out.printf("Retirado: $%.2f. Nuevo saldo: $%.2f%n", monto, saldo);
    }

    public double getSaldo() { return saldo; }

    @Override
    public String toString() {
        return String.format("Cuenta[%s] %s - Saldo: $%.2f",
                             numeroCuenta, titular, saldo);
    }

    public static void main(String[] args) {
        CuentaBancaria cuenta = new CuentaBancaria("Carlos", 1000, "001-234");
        System.out.println(cuenta);
        cuenta.depositar(500);
        cuenta.retirar(200);
        cuenta.retirar(5000);
        System.out.println(cuenta);
    }
}`,solutionFilename:"CuentaBancaria.java"}),t.jsx(K,{number:2,title:"Contador con static",description:`Crea Estudiante.java con:
- Campo static: totalEstudiantes (int)
- Campos de instancia: nombre (String), matricula (String)
- Constructor que auto-incremente totalEstudiantes y genere la matrícula como "EST-" + totalEstudiantes
- Método static getTotalEstudiantes()
- toString con nombre y matrícula

Crea 3 estudiantes y verifica que el contador y las matrículas son correctas.`,hint:'En el constructor: totalEstudiantes++; this.matricula = "EST-" + totalEstudiantes;',solution:`public class Estudiante {
    private static int totalEstudiantes = 0;
    private String nombre;
    private String matricula;

    public Estudiante(String nombre) {
        totalEstudiantes++;
        this.nombre = nombre;
        this.matricula = "EST-" + totalEstudiantes;
    }

    public static int getTotalEstudiantes() {
        return totalEstudiantes;
    }

    @Override
    public String toString() {
        return matricula + ": " + nombre;
    }

    public static void main(String[] args) {
        Estudiante e1 = new Estudiante("Carlos");
        Estudiante e2 = new Estudiante("Ana");
        Estudiante e3 = new Estudiante("Luis");

        System.out.println(e1);
        System.out.println(e2);
        System.out.println(e3);
        System.out.println("Total: " + Estudiante.getTotalEstudiantes());
    }
}`,solutionFilename:"Estudiante.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-11: clases, objetos, constructores, this, static, getters, equals"
git push origin main
`}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",t.jsx("strong",{className:"text-text",children:"Día 12"}),": encapsulamiento — modificadores de acceso, validación en setters."]})]})})]})}function Pj(){return t.jsxs("div",{children:[t.jsx(oe,{day:12,title:"Encapsulamiento",duration:"45 min",commitMsg:"dia-12: encapsulamiento, modificadores de acceso, getters/setters"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy vas a aprender ",t.jsx("strong",{className:"text-text",children:"encapsulamiento"}),' — el principio de OOP que dice: "esconde los detalles internos y expone solo lo necesario". Es la diferencia entre código frágil que se rompe cuando alguien modifica un campo directamente, y código robusto que protege su estado.']}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Modificadores de Acceso"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Los modificadores de acceso controlan ",t.jsx("strong",{className:"text-text",children:"quién puede ver y usar"})," tus campos y métodos. Java tiene 4 niveles, de más restrictivo a más permisivo: ",t.jsx("code",{className:"text-primary",children:"private"}),", (default/package), ",t.jsx("code",{className:"text-primary",children:"protected"}),", ",t.jsx("code",{className:"text-primary",children:"public"}),"."]}),t.jsxs(ne,{title:"¿Por qué no hacer todo public?",children:[t.jsxs("p",{children:["En TypeScript/JavaScript, las propiedades de un objeto son públicas por defecto y cualquiera puede modificarlas. En Java, la filosofía es opuesta: ",t.jsx("strong",{className:"text-text",children:"esconde todo lo que puedas"}),"."]}),t.jsxs("p",{children:["Imagina una clase ",t.jsx("code",{className:"text-primary",children:"CuentaBancaria"}),". Si el campo",t.jsx("code",{className:"text-primary",children:" saldo"})," es público, cualquier código puede hacer",t.jsx("code",{className:"text-primary",children:" cuenta.saldo = -1000"}),' y tu validación de "no permitir saldo negativo" no sirve de nada. Pero si es ',t.jsx("code",{className:"text-primary",children:"private"})," con un método",t.jsx("code",{className:"text-primary",children:" retirar(monto)"}),", tú controlas que solo se retire si hay fondos suficientes."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Regla de oro:"})," campos SIEMPRE ",t.jsx("code",{className:"text-primary",children:"private"}),", métodos ",t.jsx("code",{className:"text-primary",children:"public"})," solo los que forman tu API pública. Los métodos auxiliares internos deben ser ",t.jsx("code",{className:"text-primary",children:"private"})," también. Esto te permite cambiar la implementación interna sin romper el código que usa tu clase."]})]}),t.jsx("div",{className:"overflow-x-auto mb-6",children:t.jsxs("table",{className:"w-full text-sm text-text-muted",children:[t.jsx("thead",{children:t.jsxs("tr",{className:"border-b border-border",children:[t.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Modificador"}),t.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Misma clase"}),t.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Mismo paquete"}),t.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Subclase"}),t.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Cualquiera"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"public"}),t.jsx("td",{className:"py-2 px-3",children:"✅"}),t.jsx("td",{className:"py-2 px-3",children:"✅"}),t.jsx("td",{className:"py-2 px-3",children:"✅"}),t.jsx("td",{className:"py-2 px-3",children:"✅"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"protected"}),t.jsx("td",{className:"py-2 px-3",children:"✅"}),t.jsx("td",{className:"py-2 px-3",children:"✅"}),t.jsx("td",{className:"py-2 px-3",children:"✅"}),t.jsx("td",{className:"py-2 px-3",children:"❌"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"(default)"}),t.jsx("td",{className:"py-2 px-3",children:"✅"}),t.jsx("td",{className:"py-2 px-3",children:"✅"}),t.jsx("td",{className:"py-2 px-3",children:"❌"}),t.jsx("td",{className:"py-2 px-3",children:"❌"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"private"}),t.jsx("td",{className:"py-2 px-3",children:"✅"}),t.jsx("td",{className:"py-2 px-3",children:"❌"}),t.jsx("td",{className:"py-2 px-3",children:"❌"}),t.jsx("td",{className:"py-2 px-3",children:"❌"})]})]})]})})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Encapsulamiento en práctica"}),t.jsx(S,{filename:"CuentaBancaria.java",code:`
public class CuentaBancaria {
    // Campos PRIVADOS: nadie puede acceder directamente
    private String titular;
    private double saldo;
    private String numeroCuenta;

    public CuentaBancaria(String titular, double saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.numeroCuenta = generarNumeroCuenta();
    }

    // Getter público: permite LEER el saldo
    public double getSaldo() {
        return saldo;
    }

    // NO hay setSaldo() — el saldo solo cambia con depositar/retirar

    public String getTitular() {
        return titular;
    }

    // Métodos públicos con lógica de negocio
    public void depositar(double monto) {
        if (monto <= 0) {
            throw new IllegalArgumentException("Monto debe ser positivo");
        }
        saldo += monto;
        System.out.printf("Depositado: $%.2f. Saldo: $%.2f%n", monto, saldo);
    }

    public void retirar(double monto) {
        if (monto <= 0) {
            throw new IllegalArgumentException("Monto debe ser positivo");
        }
        if (monto > saldo) {
            throw new IllegalArgumentException("Saldo insuficiente");
        }
        saldo -= monto;
        System.out.printf("Retirado: $%.2f. Saldo: $%.2f%n", monto, saldo);
    }

    // Método PRIVADO: solo uso interno
    private String generarNumeroCuenta() {
        return "CTA-" + System.currentTimeMillis();
    }
}
`}),t.jsx(S,{filename:"UsoCuenta.java",code:`
public class UsoCuenta {
    public static void main(String[] args) {
        CuentaBancaria cuenta = new CuentaBancaria("Carlos", 1000);

        cuenta.depositar(500);  // OK: método público
        cuenta.retirar(200);    // OK: método público
        System.out.println(cuenta.getSaldo()); // 1300.0

        // cuenta.saldo = 999999; // ERROR: saldo es private
        // cuenta.saldo -= 100;   // ERROR: no puedes manipular directamente
    }
}
`}),t.jsxs(F,{type:"tip",title:"¿Por qué encapsular?",children:[t.jsx("strong",{children:"1."})," Proteges los datos de modificaciones no controladas."," ",t.jsx("strong",{children:"2."})," Puedes agregar validación en setters."," ",t.jsx("strong",{children:"3."})," Puedes cambiar la implementación interna sin afectar el código que usa tu clase."," ",t.jsx("strong",{children:"4."})," Es el principio fundamental de OOP."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 12"}),t.jsx(K,{number:1,title:"Clase Producto encapsulada",description:`Crea Producto.java con:
- Campos private: nombre, precio, stock
- Constructor con validación (precio > 0, stock >= 0)
- Getters para todos los campos
- setPrecio con validación (> 0)
- vender(int cantidad) que reduzca stock si hay suficiente
- reabastecer(int cantidad) que aumente stock

No debe haber forma de modificar el precio o stock directamente. Solo a través de los métodos.`,hint:"En vender: if (cantidad > stock) throw new IllegalArgumentException(...);",solution:`public class Producto {
    private String nombre;
    private double precio;
    private int stock;

    public Producto(String nombre, double precio, int stock) {
        if (precio <= 0) throw new IllegalArgumentException("Precio debe ser positivo");
        if (stock < 0) throw new IllegalArgumentException("Stock no puede ser negativo");
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    public String getNombre() { return nombre; }
    public double getPrecio() { return precio; }
    public int getStock() { return stock; }

    public void setPrecio(double precio) {
        if (precio <= 0) throw new IllegalArgumentException("Precio debe ser positivo");
        this.precio = precio;
    }

    public void vender(int cantidad) {
        if (cantidad <= 0) throw new IllegalArgumentException("Cantidad debe ser positiva");
        if (cantidad > stock) throw new IllegalArgumentException("Stock insuficiente");
        stock -= cantidad;
        System.out.printf("Vendido %d de %s. Stock restante: %d%n", cantidad, nombre, stock);
    }

    public void reabastecer(int cantidad) {
        if (cantidad <= 0) throw new IllegalArgumentException("Cantidad debe ser positiva");
        stock += cantidad;
        System.out.printf("Reabastecido %d de %s. Stock actual: %d%n", cantidad, nombre, stock);
    }

    @Override
    public String toString() {
        return String.format("%s - $%.2f (stock: %d)", nombre, precio, stock);
    }

    public static void main(String[] args) {
        Producto p = new Producto("Laptop", 999.99, 10);
        System.out.println(p);
        p.vender(3);
        p.reabastecer(5);
        p.setPrecio(899.99);
        System.out.println(p);
    }
}`,solutionFilename:"Producto.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-12: encapsulamiento, modificadores de acceso, validacion en setters"
git push origin main
`}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",t.jsx("strong",{className:"text-text",children:"Día 13"}),": herencia — extends, super, @Override, clases abstractas."]})]})})]})}function Hj(){return t.jsxs("div",{children:[t.jsx(oe,{day:13,title:"Herencia",duration:"60 min",commitMsg:"dia-13: herencia, extends, super, override, clases abstractas"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy aprenderás ",t.jsx("strong",{className:"text-text",children:"herencia"})," — el mecanismo de OOP que permite crear nuevas clases basadas en clases existentes. La clase hija hereda campos y métodos del padre, y puede agregar nuevos o sobrescribir los heredados para cambiar su comportamiento."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"extends — Heredar de una clase"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Cuando una clase ",t.jsx("code",{className:"text-primary",children:"extends"})," otra, hereda automáticamente todos sus campos y métodos (excepto los privados, que existen pero no son accesibles directamente). La clase hija puede usar ",t.jsx("code",{className:"text-primary",children:"super"})," para llamar al constructor y métodos del padre, y ",t.jsx("code",{className:"text-primary",children:"@Override"})," para reemplazar el comportamiento de un método heredado."]}),t.jsxs(ne,{title:"Herencia = 'es un'. ¿Cuándo usarla?",children:[t.jsxs("p",{children:['La prueba para saber si herencia es correcta: ¿tiene sentido decir que la clase hija "es un" tipo del padre? Un ',t.jsx("code",{className:"text-primary",children:"Perro"})," ",t.jsx("strong",{className:"text-text",children:"es un"}),t.jsx("code",{className:"text-primary",children:" Animal"})," → ✅ correcto. Un ",t.jsx("code",{className:"text-primary",children:"Motor"}),t.jsx("strong",{className:"text-text",children:" es un"})," ",t.jsx("code",{className:"text-primary",children:"Auto"})," → ❌ incorrecto (un Motor es PARTE de un Auto — eso es composición, no herencia)."]}),t.jsxs("p",{children:["Java solo permite ",t.jsx("strong",{className:"text-text",children:"herencia simple"}),': una clase puede extender UNA sola clase padre. Esto evita el "diamond problem" de C++. Para agregar múltiples capacidades a una clase, usarás interfaces (Día 15). En la práctica profesional moderna, se prefiere ',t.jsx("strong",{className:"text-text",children:"composición sobre herencia"})," — pero herencia sigue siendo fundamental para entender frameworks como Spring."]})]}),t.jsx(S,{filename:"Herencia.java",code:`
// Clase padre (superclase)
public class Animal {
    protected String nombre;
    protected int edad;

    public Animal(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public void comer() {
        System.out.println(nombre + " está comiendo");
    }

    public void dormir() {
        System.out.println(nombre + " está durmiendo");
    }

    @Override
    public String toString() {
        return nombre + " (edad: " + edad + ")";
    }
}

// Clase hija (subclase) — hereda TODO de Animal
public class Perro extends Animal {
    private String raza;

    public Perro(String nombre, int edad, String raza) {
        super(nombre, edad); // OBLIGATORIO: llamar al constructor padre
        this.raza = raza;
    }

    // Método PROPIO del Perro
    public void ladrar() {
        System.out.println(nombre + " dice: ¡Guau!");
    }

    // SOBRESCRIBIR (Override) un método del padre
    @Override
    public void comer() {
        System.out.println(nombre + " come croquetas de " + raza);
    }
}
`}),t.jsx(S,{filename:"Main.java",code:`
public class Main {
    public static void main(String[] args) {
        Perro perro = new Perro("Rex", 5, "Pastor Alemán");

        perro.comer();   // "Rex come croquetas de Pastor Alemán" (override)
        perro.dormir();  // "Rex está durmiendo" (heredado)
        perro.ladrar();  // "Rex dice: ¡Guau!" (propio)

        // Un Perro ES un Animal (polimorfismo)
        Animal animal = new Perro("Luna", 3, "Labrador");
        animal.comer();  // "Luna come croquetas de Labrador" (usa el override)
        // animal.ladrar(); // ERROR: Animal no tiene ladrar()
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"super y @Override"}),t.jsx(S,{filename:"SuperYOverride.java",code:`
public class Gato extends Animal {
    private boolean esInterior;

    public Gato(String nombre, int edad, boolean esInterior) {
        super(nombre, edad); // super() llama al constructor padre
        this.esInterior = esInterior;
    }

    @Override
    public void comer() {
        super.comer(); // Llamar al método original del padre
        System.out.println("(y también come atún)");
    }

    // @Override es OPCIONAL pero MUY recomendado
    // Si te equivocas en el nombre del método, el compilador te avisa
    @Override
    public String toString() {
        return super.toString() + " - Gato " + (esInterior ? "interior" : "exterior");
    }
}
`}),t.jsxs(F,{type:"warning",children:["Java solo permite ",t.jsx("strong",{children:"herencia simple"}),": una clase solo puede extender UNA clase padre. No existe herencia múltiple de clases (pero sí puedes implementar múltiples interfaces)."]}),t.jsxs(F,{type:"angular",children:["TypeScript también usa ",t.jsx("code",{className:"text-primary",children:"extends"})," para herencia y tiene la misma limitación de herencia simple. La diferencia es que Java tiene ",t.jsx("code",{className:"text-primary",children:"@Override"})," como anotación explícita y ",t.jsx("code",{className:"text-primary",children:"super"})," funciona igual."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Clases Abstractas"}),t.jsx(S,{filename:"ClaseAbstracta.java",code:`
// abstract = no se puede instanciar directamente
public abstract class Figura {
    protected String color;

    public Figura(String color) {
        this.color = color;
    }

    // Método abstracto: SIN implementación, las subclases DEBEN implementarlo
    public abstract double calcularArea();
    public abstract double calcularPerimetro();

    // Método concreto: tiene implementación, se hereda normalmente
    public void mostrarInfo() {
        System.out.printf("Figura %s - Área: %.2f%n", color, calcularArea());
    }
}

public class Circulo extends Figura {
    private double radio;

    public Circulo(String color, double radio) {
        super(color);
        this.radio = radio;
    }

    @Override
    public double calcularArea() {
        return Math.PI * radio * radio;
    }

    @Override
    public double calcularPerimetro() {
        return 2 * Math.PI * radio;
    }
}

public class Rectangulo extends Figura {
    private double ancho, alto;

    public Rectangulo(String color, double ancho, double alto) {
        super(color);
        this.ancho = ancho;
        this.alto = alto;
    }

    @Override
    public double calcularArea() { return ancho * alto; }

    @Override
    public double calcularPerimetro() { return 2 * (ancho + alto); }
}
`}),t.jsxs(F,{type:"tip",children:["Usa clases abstractas cuando quieras definir un ",t.jsx("strong",{children:"comportamiento común"})," + obligar a las subclases a implementar ciertos métodos. Es un punto medio entre una clase normal y una interfaz."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 13"}),t.jsx(K,{number:1,title:"Jerarquía de empleados",description:`Crea una jerarquía:
- Empleado (clase padre): nombre, salarioBase. Método calcularSalario() retorna salarioBase.
- Gerente extends Empleado: tiene bono (double). calcularSalario() retorna salarioBase + bono.
- Desarrollador extends Empleado: tiene horasExtra (int). calcularSalario() retorna salarioBase + (horasExtra * 50).

Crea un array de Empleado[] con mezcla de Gerentes y Desarrolladores, recórrelo e imprime nombre + salario.`,hint:"Usa super(nombre, salarioBase) en los constructores hijos. Override calcularSalario() en cada subclase.",solution:`public class Empleado {
    protected String nombre;
    protected double salarioBase;

    public Empleado(String nombre, double salarioBase) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
    }

    public double calcularSalario() { return salarioBase; }

    @Override
    public String toString() {
        return String.format("%s - Salario: $%.2f", nombre, calcularSalario());
    }
}

class Gerente extends Empleado {
    private double bono;

    public Gerente(String nombre, double salarioBase, double bono) {
        super(nombre, salarioBase);
        this.bono = bono;
    }

    @Override
    public double calcularSalario() { return salarioBase + bono; }
}

class Desarrollador extends Empleado {
    private int horasExtra;

    public Desarrollador(String nombre, double salarioBase, int horasExtra) {
        super(nombre, salarioBase);
        this.horasExtra = horasExtra;
    }

    @Override
    public double calcularSalario() { return salarioBase + (horasExtra * 50); }

    public static void main(String[] args) {
        Empleado[] equipo = {
            new Gerente("Ana", 5000, 2000),
            new Desarrollador("Carlos", 4000, 20),
            new Desarrollador("Luis", 4000, 10),
            new Gerente("María", 5500, 1500)
        };

        for (Empleado e : equipo) {
            System.out.println(e);
        }
    }
}`,solutionFilename:"Empleado.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-13: herencia, extends, super, override, clases abstractas"
git push origin main
`}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",t.jsx("strong",{className:"text-text",children:"Día 14"}),": polimorfismo — upcasting, downcasting, instanceof, pattern matching."]})]})})]})}function Ij(){return t.jsxs("div",{children:[t.jsx(oe,{day:14,title:"Polimorfismo",duration:"50 min",commitMsg:"dia-14: polimorfismo, upcasting, downcasting, instanceof"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy entenderás el concepto más poderoso de la Programación Orientada a Objetos: el ",t.jsx("strong",{className:"text-text",children:"polimorfismo"}),". Significa que un mismo método se comporta de forma diferente según el tipo real del objeto que lo ejecuta. Es lo que permite que frameworks como Spring Boot funcionen con código extensible y desacoplado."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es el Polimorfismo?"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["La palabra viene del griego: ",t.jsx("strong",{className:"text-text",children:'"poli"'})," (muchos) + ",t.jsx("strong",{className:"text-text",children:'"morfo"'})," (formas). En programación significa que una variable de tipo padre puede contener un objeto de cualquier tipo hijo, y al llamar un método, Java ejecuta la versión del ",t.jsx("strong",{className:"text-text",children:"tipo real del objeto"})," (no de la variable). Esto se decide en runtime — se llama ",t.jsx("strong",{className:"text-text",children:"dynamic dispatch"})," o ",t.jsx("strong",{className:"text-text",children:"late binding"}),"."]}),t.jsxs(ne,{title:"¿Por qué esto es tan poderoso?",children:[t.jsxs("p",{children:["Imagina un método ",t.jsx("code",{className:"text-primary",children:"alimentar(Animal animal)"}),". Puedes pasarle un Perro, un Gato, un Pájaro — cualquier subtipo de Animal. Java ejecutará el método ",t.jsx("code",{className:"text-primary",children:"comer()"}),"correcto ",t.jsx("strong",{className:"text-text",children:"según el tipo real del objeto"}),", no el tipo de la variable."]}),t.jsxs("p",{children:["Esto te permite escribir código genérico y extensible: puedes agregar un nuevo tipo de Animal sin modificar el método ",t.jsx("code",{className:"text-primary",children:"alimentar()"}),". Es el principio",t.jsx("strong",{className:"text-text",children:" Open/Closed"}),": abierto a extensión, cerrado a modificación. Es exactamente la misma razón por la que en Angular defines un Service como interface — para poder inyectar diferentes implementaciones sin cambiar el código que las usa."]})]}),t.jsx(S,{filename:"Polimorfismo.java",code:`
public class Polimorfismo {
    public static void main(String[] args) {
        // Variable tipo Animal, objeto tipo Perro/Gato
        Animal[] animales = {
            new Perro("Rex", 5, "Pastor"),
            new Gato("Misi", 3, true),
            new Perro("Luna", 2, "Labrador")
        };

        // Java llama al método correcto según el TIPO REAL del objeto
        for (Animal animal : animales) {
            animal.comer();  // Cada uno ejecuta su propia versión
        }
        // "Rex come croquetas de Pastor"
        // "Misi está comiendo (y también come atún)"
        // "Luna come croquetas de Labrador"
    }

    // Método que acepta CUALQUIER Animal
    static void alimentar(Animal animal) {
        System.out.println("Alimentando a " + animal.nombre);
        animal.comer(); // ejecuta la versión correcta
    }

    // Método que acepta CUALQUIER Figura
    static void imprimirArea(Figura figura) {
        System.out.printf("Área: %.2f%n", figura.calcularArea());
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Casting de objetos"}),t.jsx(S,{filename:"CastingObjetos.java",code:`
public class CastingObjetos {
    public static void main(String[] args) {
        // Upcasting (implícito): hijo → padre (siempre seguro)
        Animal animal = new Perro("Rex", 5, "Pastor");

        // Downcasting (explícito): padre → hijo (puede fallar)
        if (animal instanceof Perro) {
            Perro perro = (Perro) animal; // cast explícito
            perro.ladrar(); // ahora sí puedes usar métodos de Perro
        }

        // Java 16+: Pattern matching (más limpio)
        if (animal instanceof Perro perro) {
            perro.ladrar(); // cast automático
        }

        // ClassCastException si el cast es inválido
        // Gato gato = (Gato) animal; // CRASH: animal es un Perro, no un Gato
    }
}
`}),t.jsxs(F,{type:"tip",children:["Siempre verifica con ",t.jsx("code",{className:"text-primary",children:"instanceof"})," antes de hacer downcasting. El pattern matching de Java 16+ combina la verificación y el cast en una sola línea."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 14"}),t.jsx(K,{number:1,title:"Sistema de pagos polimórfico",description:`Crea una jerarquía de pagos:
- MetodoPago (clase abstracta): monto. Método abstracto procesar().
- TarjetaCredito extends MetodoPago: ultimos4Digitos. procesar() imprime "Cobrado $X a tarjeta ****1234".
- PayPal extends MetodoPago: email. procesar() imprime "Cobrado $X a PayPal user@mail.com".
- Transferencia extends MetodoPago: banco. procesar() imprime "Transferencia de $X desde Banco X".

Crea un array MetodoPago[] con los 3 tipos y recórrelo llamando procesar().`,hint:"abstract class MetodoPago { protected double monto; public abstract void procesar(); }",solution:`public abstract class MetodoPago {
    protected double monto;

    public MetodoPago(double monto) { this.monto = monto; }
    public abstract void procesar();
}

class TarjetaCredito extends MetodoPago {
    private String ultimos4;
    public TarjetaCredito(double monto, String ultimos4) {
        super(monto);
        this.ultimos4 = ultimos4;
    }
    @Override
    public void procesar() {
        System.out.printf("Cobrado $%.2f a tarjeta ****%s%n", monto, ultimos4);
    }
}

class PayPal extends MetodoPago {
    private String email;
    public PayPal(double monto, String email) {
        super(monto);
        this.email = email;
    }
    @Override
    public void procesar() {
        System.out.printf("Cobrado $%.2f a PayPal %s%n", monto, email);
    }
}

class Transferencia extends MetodoPago {
    private String banco;
    public Transferencia(double monto, String banco) {
        super(monto);
        this.banco = banco;
    }
    @Override
    public void procesar() {
        System.out.printf("Transferencia de $%.2f desde %s%n", monto, banco);
    }

    public static void main(String[] args) {
        MetodoPago[] pagos = {
            new TarjetaCredito(99.99, "1234"),
            new PayPal(49.50, "user@mail.com"),
            new Transferencia(200.00, "Banco Nacional")
        };
        for (MetodoPago pago : pagos) {
            pago.procesar();
        }
    }
}`,solutionFilename:"MetodoPago.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-14: polimorfismo, upcasting, downcasting, instanceof"
git push origin main
`}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",t.jsx("strong",{className:"text-text",children:"Día 15"}),": interfaces — contratos, default methods, implementación múltiple."]})]})})]})}function Jj(){return t.jsxs("div",{children:[t.jsx(oe,{day:15,title:"Interfaces",duration:"50 min",commitMsg:"dia-15: interfaces, default methods, funcionales, lambdas intro"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy aprenderás interfaces — el mecanismo de Java para definir contratos que las clases deben cumplir. A diferencia de la herencia (solo UNA clase padre), puedes implementar ",t.jsx("strong",{className:"text-text",children:"múltiples"})," interfaces. Son la base de la inyección de dependencias en Spring Boot."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es una Interface?"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Una interface define ",t.jsx("strong",{className:"text-text",children:"qué"})," debe hacer una clase, pero no ",t.jsx("strong",{className:"text-text",children:"cómo"}),'. Es un contrato: "si implementas esta interface, DEBES tener estos métodos". Cualquier clase que implemente la interface garantiza que puede hacer esas operaciones, sin importar cómo las implemente internamente.']}),t.jsxs(ne,{title:"Interface = contrato de capacidades",children:[t.jsxs("p",{children:["En TypeScript, las interfaces son solo contratos de forma/tipo — definen qué propiedades y métodos debe tener un objeto. En Java, las interfaces también son contratos, pero desde Java 8 pueden tener",t.jsx("code",{className:"text-primary",children:" default"})," methods con implementación real. Esto permite agregar métodos nuevos a una interface sin romper todas las clases que la implementan."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"¿Cuándo usar interface vs clase abstracta?"})," Usa interface cuando defines una ",t.jsx("em",{children:"capacidad"})," que clases no relacionadas pueden tener: un Pato puede ser",t.jsx("code",{className:"text-primary",children:" Volable"})," y ",t.jsx("code",{className:"text-primary",children:"Nadable"}),". Un Avión también puede ser ",t.jsx("code",{className:"text-primary",children:"Volable"}),". No tienen relación de herencia, pero comparten la capacidad de volar."]}),t.jsxs("p",{children:["En Spring Boot, la DI funciona principalmente a través de interfaces: tu Controller depende de",t.jsx("code",{className:"text-primary",children:" UsuarioService"})," (interface), y Spring inyecta la implementación concreta. Esto permite cambiar la implementación sin tocar el código que la usa."]})]}),t.jsx(S,{filename:"Volable.java",code:`
public interface Volable {
    void volar();              // abstracto (sin cuerpo)
    double getAlturaMax();

    // default method (Java 8+): tiene implementación
    default void aterrizar() {
        System.out.println("Aterrizando...");
    }

    // static method en interfaz
    static String tipo() { return "Volable"; }
}

public interface Nadable {
    void nadar();
}

// Implementar MÚLTIPLES interfaces (a diferencia de extends)
public class Pato implements Volable, Nadable {
    @Override
    public void volar() { System.out.println("Pato volando"); }

    @Override
    public double getAlturaMax() { return 100; }

    @Override
    public void nadar() { System.out.println("Pato nadando"); }
    // aterrizar() se hereda del default
}
`}),t.jsxs(F,{type:"angular",children:["Las interfaces de Java son como las de TypeScript pero con una diferencia clave: en Java pueden tener métodos ",t.jsx("code",{className:"text-primary",children:"default"})," con implementación y métodos ",t.jsx("code",{className:"text-primary",children:"static"}),". En TS las interfaces son solo contratos de tipos."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Interfaces funcionales"}),t.jsx(S,{filename:"InterfazFuncional.java",code:`
// Interfaz con UN SOLO método abstracto = interfaz funcional
// Se puede usar con lambdas
@FunctionalInterface
public interface Operacion {
    double calcular(double a, double b);
}

public class Main {
    public static void main(String[] args) {
        // Usar con lambda
        Operacion suma = (a, b) -> a + b;
        Operacion resta = (a, b) -> a - b;

        System.out.println(suma.calcular(5, 3));  // 8.0
        System.out.println(resta.calcular(5, 3)); // 2.0

        // Interfaces funcionales del JDK:
        // Predicate<T>    -> boolean test(T t)
        // Function<T, R>  -> R apply(T t)
        // Consumer<T>     -> void accept(T t)
        // Supplier<T>     -> T get()
    }
}
`}),t.jsxs(F,{type:"tip",children:[t.jsx("code",{className:"text-primary",children:"@FunctionalInterface"})," es opcional pero recomendada. Le dice al compilador que la interfaz debe tener exactamente un método abstracto. Son la base de las lambdas y Streams en Java."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Interface vs Clase abstracta"}),t.jsx("div",{className:"overflow-x-auto mb-6",children:t.jsxs("table",{className:"w-full text-sm text-text-muted",children:[t.jsx("thead",{children:t.jsxs("tr",{className:"border-b border-border",children:[t.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Característica"}),t.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Interface"}),t.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Clase Abstracta"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3",children:"Múltiple herencia"}),t.jsx("td",{className:"py-2 px-3",children:"Sí (implements A, B)"}),t.jsx("td",{className:"py-2 px-3",children:"No (solo un extends)"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3",children:"Campos de instancia"}),t.jsx("td",{className:"py-2 px-3",children:"No (solo constantes)"}),t.jsx("td",{className:"py-2 px-3",children:"Sí"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3",children:"Constructores"}),t.jsx("td",{className:"py-2 px-3",children:"No"}),t.jsx("td",{className:"py-2 px-3",children:"Sí"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3",children:"Métodos con cuerpo"}),t.jsx("td",{className:"py-2 px-3",children:"Solo default/static"}),t.jsx("td",{className:"py-2 px-3",children:"Sí"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"py-2 px-3",children:"Uso típico"}),t.jsx("td",{className:"py-2 px-3",children:"Definir capacidades"}),t.jsx("td",{className:"py-2 px-3",children:"Compartir código base"})]})]})]})})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 15"}),t.jsx(K,{number:1,title:"Sistema de notificaciones",description:`Crea interfaces Notificable con método enviar(String mensaje):
- EmailNotificacion implements Notificable
- SmsNotificacion implements Notificable
- PushNotificacion implements Notificable
Cada una imprime el mensaje con su canal. Crea un array Notificable[] y recórrelo.`,hint:"interface Notificable { void enviar(String mensaje); }",solution:`public interface Notificable {
    void enviar(String mensaje);
}

class EmailNotificacion implements Notificable {
    public void enviar(String msg) { System.out.println("EMAIL: " + msg); }
}
class SmsNotificacion implements Notificable {
    public void enviar(String msg) { System.out.println("SMS: " + msg); }
}
class PushNotificacion implements Notificable {
    public void enviar(String msg) { System.out.println("PUSH: " + msg); }

    public static void main(String[] args) {
        Notificable[] canales = {
            new EmailNotificacion(),
            new SmsNotificacion(),
            new PushNotificacion()
        };
        for (Notificable n : canales) n.enviar("Pedido confirmado");
    }
}`,solutionFilename:"Notificable.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-15: interfaces, default methods, funcionales"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 16"})," — clases abstractas en profundidad."]})]})})]})}function Fj(){return t.jsxs("div",{children:[t.jsx(oe,{day:16,title:"Clases Abstractas",duration:"45 min",commitMsg:"dia-16: clases abstractas, template method pattern"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy profundizamos en clases abstractas — el punto medio entre una clase concreta y una interfaz. Una clase abstracta puede tener campos con estado, constructores, métodos con implementación completa, Y métodos abstractos que las subclases deben implementar obligatoriamente."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es una clase abstracta?"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Una clase abstracta es una clase que ",t.jsx("strong",{className:"text-text",children:"no se puede instanciar directamente"}),"(no puedes hacer ",t.jsx("code",{className:"text-primary",children:"new Figura()"}),'). Existe solo para ser heredada. Define un "contrato parcial": parte del código ya está implementado (métodos concretos), y parte queda pendiente para que las subclases lo completen (métodos abstractos marcados con ',t.jsx("code",{className:"text-primary",children:"abstract"}),")."]}),t.jsxs(ne,{title:"Abstracta vs Interface — ¿cuál usar?",children:[t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Clase abstracta"}),": úsala cuando las subclases comparten",t.jsx("em",{children:" estado"})," (campos) y ",t.jsx("em",{children:"código común"}),". Ejemplo: todas las figuras geométricas tienen un color y un método ",t.jsx("code",{className:"text-primary",children:"mostrarInfo()"})," que funciona igual para todas. Solo cambia cómo se calcula el área — eso lo defines como abstracto."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Interface"}),": úsala cuando defines una ",t.jsx("em",{children:"capacidad"})," que clases no relacionadas pueden tener. Ejemplo: ",t.jsx("code",{className:"text-primary",children:"Serializable"}),"lo puede implementar un Pato, un Documento, y un Número. No comparten estado ni código."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Regla práctica:"}),' ¿Las subclases son "un tipo de" la clase padre (Circulo ES una Figura)? → Clase abstracta. ¿Las clases "pueden hacer" algo (un Pato PUEDE volar)? → Interface. En Java solo puedes heredar de UNA clase abstracta, pero implementar MUCHAS interfaces.']})]}),t.jsx(S,{filename:"Figura.java",code:`
public abstract class Figura {
    protected String color;

    public Figura(String color) {
        this.color = color;
    }

    // Métodos abstractos: las subclases DEBEN implementarlos
    public abstract double calcularArea();
    public abstract double calcularPerimetro();

    // Método concreto: se hereda normalmente
    public void mostrarInfo() {
        System.out.printf("Figura %s - Área: %.2f - Perímetro: %.2f%n",
            color, calcularArea(), calcularPerimetro());
    }
}

public class Circulo extends Figura {
    private double radio;

    public Circulo(String color, double radio) {
        super(color);
        this.radio = radio;
    }

    @Override
    public double calcularArea() {
        return Math.PI * radio * radio;
    }

    @Override
    public double calcularPerimetro() {
        return 2 * Math.PI * radio;
    }
}

public class Rectangulo extends Figura {
    private double ancho, alto;

    public Rectangulo(String color, double ancho, double alto) {
        super(color);
        this.ancho = ancho;
        this.alto = alto;
    }

    @Override
    public double calcularArea() { return ancho * alto; }

    @Override
    public double calcularPerimetro() { return 2 * (ancho + alto); }
}
`}),t.jsx(S,{filename:"Main.java",code:`
public class Main {
    public static void main(String[] args) {
        // Figura f = new Figura("rojo"); // ERROR: no se puede instanciar

        Figura c = new Circulo("azul", 5);
        Figura r = new Rectangulo("verde", 4, 6);

        c.mostrarInfo(); // Figura azul - Área: 78.54 - Perímetro: 31.42
        r.mostrarInfo(); // Figura verde - Área: 24.00 - Perímetro: 20.00

        // Polimorfismo con clases abstractas
        Figura[] figuras = { c, r, new Circulo("rojo", 3) };
        for (Figura f : figuras) {
            f.mostrarInfo();
        }
    }
}
`}),t.jsxs(F,{type:"tip",children:["Usa clases abstractas cuando necesites ",t.jsx("strong",{children:"compartir código"})," entre clases relacionadas y al mismo tiempo obligar a implementar ciertos métodos. Si solo necesitas definir un contrato sin compartir código, usa una ",t.jsx("strong",{children:"interfaz"}),"."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 16"}),t.jsx(K,{number:1,title:"Template Method con Bebida",description:`Crea una clase abstracta Bebida con un template method preparer():
1. hervir() — concreto, imprime "Hirviendo agua..."
2. agregarIngrediente() — abstracto
3. servir() — concreto, imprime "Sirviendo en taza..."

Subclases: Cafe (agrega café molido), Te (agrega bolsita de té), Chocolate (agrega cacao).
Crea las 3 y llama preparar() en cada una.`,hint:"El método preparar() llama hervir(), agregarIngrediente(), servir() en orden. Las subclases solo implementan agregarIngrediente().",solution:`public abstract class Bebida {
    public final void preparar() {
        hervir();
        agregarIngrediente();
        servir();
        System.out.println();
    }
    private void hervir() { System.out.println("Hirviendo agua..."); }
    protected abstract void agregarIngrediente();
    private void servir() { System.out.println("Sirviendo en taza..."); }
}

class Cafe extends Bebida {
    protected void agregarIngrediente() { System.out.println("Agregando café molido"); }
}
class Te extends Bebida {
    protected void agregarIngrediente() { System.out.println("Agregando bolsita de té"); }
}
class Chocolate extends Bebida {
    protected void agregarIngrediente() { System.out.println("Agregando cacao en polvo"); }

    public static void main(String[] args) {
        Bebida[] bebidas = { new Cafe(), new Te(), new Chocolate() };
        for (Bebida b : bebidas) b.preparar();
    }
}`,solutionFilename:"Bebida.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-16: clases abstractas, template method pattern"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 17"})," — colecciones: List, Set, Map y la revolución dinámica."]})]})})]})}function Vj(){return t.jsxs("div",{children:[t.jsx(oe,{day:17,title:"Colecciones",duration:"60 min",commitMsg:"dia-17: ArrayList, HashMap, HashSet, List.of, Map.of"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy pasas de arrays (tamaño fijo) a colecciones dinámicas. ",t.jsx("code",{className:"text-primary",children:"List"}),",",t.jsx("code",{className:"text-primary",children:" Set"})," y ",t.jsx("code",{className:"text-primary",children:"Map"})," son las estructuras de datos que usarás el 90% del tiempo en Java profesional. Son como los arrays y objetos de TypeScript, pero con tipos específicos para cada necesidad."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"ArrayList — Lista dinámica ordenada"}),t.jsxs(ne,{title:"El framework de colecciones: List vs Set vs Map",children:[t.jsxs("p",{children:["Java tiene un framework de colecciones organizado en interfaces:",t.jsx("strong",{className:"text-text",children:" List"})," (ordenada, permite duplicados — como array de TS),",t.jsx("strong",{className:"text-text",children:" Set"})," (sin duplicados, sin orden garantizado — como Set de JS),",t.jsx("strong",{className:"text-text",children:" Map"})," (clave→valor — como Map/objeto de JS)."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Regla fundamental:"})," declara con la INTERFACE como tipo (",t.jsx("code",{className:"text-primary",children:"List<String>"}),") y usa la IMPLEMENTACIÓN al crear (",t.jsx("code",{className:"text-primary",children:"new ArrayList<>()"}),'). Así puedes cambiar de ArrayList a LinkedList sin modificar el código que la usa. Esto se llama "programar contra interfaces" y es un pilar de la buena arquitectura en Java y Spring.']}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"¿Cuál usar?"})," ¿Necesitas acceso por índice y orden? → ",t.jsx("code",{className:"text-primary",children:"List"}),". ¿Necesitas unicidad sin duplicados? → ",t.jsx("code",{className:"text-primary",children:"Set"}),". ¿Necesitas buscar por clave? → ",t.jsx("code",{className:"text-primary",children:"Map"}),"."]})]}),t.jsx(S,{filename:"ListaEjemplo.java",code:`
import java.util.ArrayList;
import java.util.List;

public class ListaEjemplo {
    public static void main(String[] args) {
        // Crear lista tipada con generics
        List<String> nombres = new ArrayList<>();
        nombres.add("Carlos");
        nombres.add("Ana");
        nombres.add("Luis");

        // Acceder por índice
        System.out.println(nombres.get(0)); // "Carlos"
        System.out.println(nombres.size()); // 3

        // Modificar y eliminar
        nombres.set(1, "María");     // reemplaza "Ana"
        nombres.remove("Luis");      // elimina por valor
        nombres.remove(0);           // elimina por índice

        // Verificar
        System.out.println(nombres.contains("María")); // true
        System.out.println(nombres.isEmpty());          // false

        // Recorrer
        for (String nombre : nombres) {
            System.out.println(nombre);
        }

        // List.of() — lista INMUTABLE (Java 9+)
        List<String> fija = List.of("A", "B", "C");
        // fija.add("D"); // ERROR: UnsupportedOperationException
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"HashMap — Diccionario clave-valor"}),t.jsx(S,{filename:"MapaEjemplo.java",code:`
import java.util.HashMap;
import java.util.Map;

public class MapaEjemplo {
    public static void main(String[] args) {
        Map<String, Integer> edades = new HashMap<>();
        edades.put("Carlos", 25);
        edades.put("Ana", 30);
        edades.put("Luis", 22);

        System.out.println(edades.get("Ana"));            // 30
        System.out.println(edades.getOrDefault("Pedro", 0)); // 0
        System.out.println(edades.containsKey("Carlos"));    // true
        System.out.println(edades.size());                   // 3

        edades.remove("Luis");

        // Recorrer
        for (Map.Entry<String, Integer> entry : edades.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        // Map.of() — mapa inmutable (Java 9+)
        Map<String, String> config = Map.of("host", "localhost", "port", "8080");
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"HashSet — Conjunto sin duplicados"}),t.jsx(S,{filename:"SetEjemplo.java",code:`
import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

public class SetEjemplo {
    public static void main(String[] args) {
        Set<String> colores = new HashSet<>();
        colores.add("rojo");
        colores.add("verde");
        colores.add("rojo"); // NO se agrega (duplicado)

        System.out.println(colores.size());       // 2
        System.out.println(colores.contains("verde")); // true

        // TreeSet: ordenado automáticamente
        Set<Integer> ordenados = new TreeSet<>();
        ordenados.add(5);
        ordenados.add(1);
        ordenados.add(3);
        System.out.println(ordenados); // [1, 3, 5]
    }
}
`}),t.jsxs(F,{type:"angular",children:["En TypeScript usas arrays y objetos/Map. En Java hay una jerarquía completa de colecciones:",t.jsx("strong",{children:" List"})," (ordenada, con duplicados), ",t.jsx("strong",{children:"Set"})," (sin duplicados),",t.jsx("strong",{children:" Map"})," (clave-valor), ",t.jsx("strong",{children:"Queue"})," (FIFO). Todas son tipadas con generics."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 17"}),t.jsx(K,{number:1,title:"Contador de palabras con Map",description:`Crea ContadorPalabras.java que:
1. Reciba un String[] de palabras
2. Use un HashMap<String, Integer> para contar cuántas veces aparece cada palabra
3. Imprima cada palabra y su frecuencia ordenada por valor

Prueba con: {"java", "es", "genial", "java", "es", "poderoso", "java"}`,hint:"Usa map.getOrDefault(palabra, 0) + 1 para incrementar el contador.",solution:`import java.util.*;

public class ContadorPalabras {
    public static void main(String[] args) {
        String[] palabras = {"java", "es", "genial", "java", "es", "poderoso", "java"};
        Map<String, Integer> conteo = new HashMap<>();

        for (String p : palabras) {
            conteo.put(p, conteo.getOrDefault(p, 0) + 1);
        }

        conteo.entrySet().stream()
            .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
            .forEach(e -> System.out.println(e.getKey() + ": " + e.getValue()));
    }
}`,solutionFilename:"ContadorPalabras.java"}),t.jsx(K,{number:2,title:"Agenda de contactos",description:`Crea Agenda.java con:
- Un Map<String, List<String>> donde la clave es el nombre y el valor es una lista de teléfonos
- Método agregar(String nombre, String telefono)
- Método buscar(String nombre) que retorne la lista de teléfonos
- Método eliminar(String nombre)
- Método mostrarTodos()

Una persona puede tener múltiples teléfonos.`,hint:"Para agregar: usa computeIfAbsent(nombre, k -> new ArrayList<>()).add(telefono);",solution:`import java.util.*;

public class Agenda {
    private Map<String, List<String>> contactos = new HashMap<>();

    public void agregar(String nombre, String telefono) {
        contactos.computeIfAbsent(nombre, k -> new ArrayList<>()).add(telefono);
    }

    public List<String> buscar(String nombre) {
        return contactos.getOrDefault(nombre, List.of());
    }

    public void eliminar(String nombre) {
        contactos.remove(nombre);
    }

    public void mostrarTodos() {
        contactos.forEach((nombre, tels) ->
            System.out.println(nombre + ": " + tels));
    }

    public static void main(String[] args) {
        Agenda agenda = new Agenda();
        agenda.agregar("Carlos", "555-1234");
        agenda.agregar("Carlos", "555-5678");
        agenda.agregar("Ana", "555-9999");
        agenda.mostrarTodos();
        System.out.println("Carlos: " + agenda.buscar("Carlos"));
    }
}`,solutionFilename:"Agenda.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-17: colecciones ArrayList, HashMap, HashSet"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 18"})," — excepciones: try-catch, throw, custom exceptions."]})]})})]})}function Gj(){return t.jsxs("div",{children:[t.jsx(oe,{day:18,title:"Excepciones",duration:"50 min",commitMsg:"dia-18: try-catch, throw, custom exceptions, try-with-resources"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy dominarás el manejo de errores en Java. A diferencia de TypeScript donde capturar errores es totalmente opcional, Java tiene un sistema de excepciones donde el compilador te ",t.jsx("strong",{className:"text-text",children:"obliga"}),"a pensar en qué puede fallar y cómo manejar cada caso."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"El sistema de excepciones de Java"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["En Java, cuando algo sale mal, se lanza (throw) una ",t.jsx("strong",{className:"text-text",children:"excepción"})," — un objeto que describe el error. El flujo del programa se interrumpe y busca un bloque ",t.jsx("code",{className:"text-primary",children:"catch"}),"que pueda manejar ese tipo de error. Si no lo encuentra, el programa se detiene con un stack trace."]}),t.jsxs(ne,{title:"Checked vs Unchecked — la diferencia fundamental con TypeScript",children:[t.jsx("p",{children:"En TypeScript/JavaScript, todos los errores son opcionales de manejar. Puedes ignorarlos y tu código compila igual (aunque crashee en runtime). Java tiene una filosofía diferente con dos categorías:"}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Checked exceptions"})," (heredan de ",t.jsx("code",{className:"text-primary",children:"Exception"}),"): el compilador te ",t.jsx("em",{children:"obliga"})," a manejarlas con try-catch o declararlas con throws. Representan errores recuperables que tu programa debería anticipar: archivos que no existen (",t.jsx("code",{className:"text-primary",children:"IOException"}),"), conexiones a BD fallidas (",t.jsx("code",{className:"text-primary",children:"SQLException"}),"). Si no las manejas, ",t.jsx("strong",{className:"text-text",children:"tu código no compila"}),"."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Unchecked exceptions"})," (heredan de ",t.jsx("code",{className:"text-primary",children:"RuntimeException"}),"): son opcionales de capturar. Representan errores de programación que NO deberían ocurrir si el código es correcto: ",t.jsx("code",{className:"text-primary",children:"NullPointerException"})," (usaste null sin verificar),",t.jsx("code",{className:"text-primary",children:" ArrayIndexOutOfBoundsException"})," (accediste fuera del rango). La solución es arreglar el código, no ponerle try-catch."]})]}),t.jsx(S,{filename:"Excepciones.java",code:`
public class Excepciones {
    public static void main(String[] args) {
        // try-catch básico
        try {
            int resultado = 10 / 0; // ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }

        // Múltiples catch
        try {
            String texto = null;
            texto.length(); // NullPointerException
        } catch (NullPointerException e) {
            System.out.println("Null: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Error general: " + e.getMessage());
        }

        // Multi-catch (Java 7+)
        try {
            // código que puede lanzar varias excepciones
            int[] arr = {1, 2};
            System.out.println(arr[5]);
        } catch (ArrayIndexOutOfBoundsException | NullPointerException e) {
            System.out.println("Error: " + e.getMessage());
        }

        // finally: SIEMPRE se ejecuta
        try {
            System.out.println("Intentando...");
        } catch (Exception e) {
            System.out.println("Error");
        } finally {
            System.out.println("Siempre se ejecuta (limpiar recursos)");
        }
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"throw y throws"}),t.jsx(S,{filename:"ThrowEjemplo.java",code:`
public class ThrowEjemplo {
    // throws: DECLARA que el método puede lanzar una excepción checked
    public static int dividir(int a, int b) throws IllegalArgumentException {
        if (b == 0) {
            throw new IllegalArgumentException("Divisor no puede ser 0");
        }
        return a / b;
    }

    // Excepción personalizada
    static class SaldoInsuficienteException extends Exception {
        private double saldo;

        public SaldoInsuficienteException(String msg, double saldo) {
            super(msg);
            this.saldo = saldo;
        }

        public double getSaldo() { return saldo; }
    }

    public static void retirar(double monto, double saldo)
            throws SaldoInsuficienteException {
        if (monto > saldo) {
            throw new SaldoInsuficienteException(
                "Saldo insuficiente para retirar " + monto, saldo);
        }
    }

    public static void main(String[] args) {
        try {
            retirar(500, 100);
        } catch (SaldoInsuficienteException e) {
            System.out.println(e.getMessage());
            System.out.println("Saldo actual: " + e.getSaldo());
        }
    }
}
`}),t.jsxs(F,{type:"info",children:[t.jsx("strong",{children:"Checked exceptions"})," (heredan de Exception): el compilador te obliga a manejarlas con try-catch o declararlas con throws.",t.jsx("strong",{children:" Unchecked exceptions"})," (heredan de RuntimeException): no requieren manejo explícito (NullPointer, ArrayIndex, etc.)."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"try-with-resources (Java 7+)"}),t.jsx(S,{filename:"TryWithResources.java",code:`
import java.io.*;

public class TryWithResources {
    public static void main(String[] args) {
        // Cierra automáticamente recursos que implementan AutoCloseable
        try (BufferedReader reader = new BufferedReader(new FileReader("datos.txt"))) {
            String linea = reader.readLine();
            System.out.println(linea);
        } catch (IOException e) {
            System.out.println("Error de archivo: " + e.getMessage());
        }
        // reader se cierra automáticamente al salir del try
    }
}
`}),t.jsx(F,{type:"angular",children:"TypeScript no tiene checked exceptions. En Java, el compilador te fuerza a manejar ciertas excepciones. Es más estricto pero previene errores no manejados en producción."})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 18"}),t.jsx(K,{number:1,title:"Validador con excepciones personalizadas",description:`Crea un sistema de validación:
1. EdadInvalidaException extends Exception (con campo int edad)
2. EmailInvalidoException extends Exception (con campo String email)
3. Clase Validador con métodos static:
   - validarEdad(int edad) — lanza si edad < 0 o > 150
   - validarEmail(String email) — lanza si no contiene "@"
4. Main que pruebe ambos casos con try-catch`,hint:'throw new EdadInvalidaException("Edad fuera de rango: " + edad, edad);',solution:`class EdadInvalidaException extends Exception {
    private int edad;
    public EdadInvalidaException(String msg, int edad) {
        super(msg); this.edad = edad;
    }
    public int getEdad() { return edad; }
}

class EmailInvalidoException extends Exception {
    private String email;
    public EmailInvalidoException(String msg, String email) {
        super(msg); this.email = email;
    }
    public String getEmail() { return email; }
}

public class Validador {
    public static void validarEdad(int edad) throws EdadInvalidaException {
        if (edad < 0 || edad > 150)
            throw new EdadInvalidaException("Edad inválida: " + edad, edad);
    }

    public static void validarEmail(String email) throws EmailInvalidoException {
        if (email == null || !email.contains("@"))
            throw new EmailInvalidoException("Email inválido: " + email, email);
    }

    public static void main(String[] args) {
        try { validarEdad(200); }
        catch (EdadInvalidaException e) { System.out.println(e.getMessage()); }

        try { validarEmail("sin-arroba"); }
        catch (EmailInvalidoException e) { System.out.println(e.getMessage()); }

        try {
            validarEdad(25);
            validarEmail("user@mail.com");
            System.out.println("Todo válido");
        } catch (EdadInvalidaException | EmailInvalidoException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,solutionFilename:"Validador.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-18: excepciones, try-catch, custom exceptions"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 19"})," — Generics: tipos paramétricos, bounded types, wildcards."]})]})})]})}function Yj(){return t.jsxs("div",{children:[t.jsx(oe,{day:19,title:"Generics",duration:"55 min",commitMsg:"dia-19: generics, clases genericas, bounded types, wildcards"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás Generics — el sistema de tipos paramétricos de Java que te permite escribir código reutilizable y type-safe. Son fundamentales para colecciones, Spring Data, y cualquier código que trabaje con tipos variados sin perder seguridad de tipos."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué son los Generics y por qué importan?"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Sin generics, una lista solo podría almacenar ",t.jsx("code",{className:"text-primary",children:"Object"})," y necesitarías hacer casting manual cada vez que sacas un elemento — propenso a errores en runtime. Con generics, declaras ",t.jsx("code",{className:"text-primary",children:"List<String>"})," y el compilador garantiza que solo entran Strings. Si intentas meter un Integer, el error aparece al compilar, no al ejecutar."]}),t.jsxs(ne,{title:"Generics = TypeScript generics, pero con 'borrado de tipos'",children:[t.jsxs("p",{children:["En TypeScript: ",t.jsx("code",{className:"text-primary",children:"function f<T>(x: T): T"})," — los tipos genéricos solo existen en tiempo de compilación y desaparecen en el JavaScript resultante. En Java pasa exactamente lo mismo: se llama ",t.jsx("strong",{className:"text-text",children:"type erasure"})," (borrado de tipos)."]}),t.jsxs("p",{children:["El compilador Java verifica los tipos genéricos, pero al generar el bytecode los borra. En runtime,",t.jsx("code",{className:"text-primary",children:"List<String>"})," y ",t.jsx("code",{className:"text-primary",children:"List<Integer>"}),"son la MISMA clase (",t.jsx("code",{className:"text-primary",children:"List"}),"). Esto tiene consecuencias: no puedes hacer",t.jsx("code",{className:"text-primary",children:"new T()"}),", ni ",t.jsx("code",{className:"text-primary",children:"instanceof List<String>"}),", ni crear arrays genéricos ",t.jsx("code",{className:"text-primary",children:"new T[10]"}),"."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"A pesar de estas limitaciones"}),", los generics te dan seguridad completa en compilación. Si compila sin warnings, sabes que no habrá ",t.jsx("code",{className:"text-primary",children:"ClassCastException"}),"en runtime. Eso es un contrato muy valioso."]})]}),t.jsx(S,{filename:"Caja.java",code:`
// T es un parámetro de tipo (puede ser cualquier letra/nombre)
public class Caja<T> {
    private T contenido;

    public Caja(T contenido) {
        this.contenido = contenido;
    }

    public T getContenido() { return contenido; }
    public void setContenido(T contenido) { this.contenido = contenido; }

    public static void main(String[] args) {
        Caja<String> cajaTexto = new Caja<>("Hola");
        String texto = cajaTexto.getContenido(); // tipo seguro, sin cast

        Caja<Integer> cajaNum = new Caja<>(42);
        int numero = cajaNum.getContenido();

        // Sin generics tendrías que hacer cast manual (inseguro)
        // Object obj = caja.getContenido();
        // String s = (String) obj; // podría fallar en runtime
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Métodos genéricos"}),t.jsx(S,{filename:"MetodosGenericos.java",code:`
public class MetodosGenericos {
    // <T> antes del retorno declara el tipo genérico
    public static <T> void imprimir(T[] array) {
        for (T elemento : array) {
            System.out.print(elemento + " ");
        }
        System.out.println();
    }

    // Múltiples tipos genéricos
    public static <K, V> void mostrarPar(K clave, V valor) {
        System.out.println(clave + " = " + valor);
    }

    public static void main(String[] args) {
        String[] nombres = {"Ana", "Luis"};
        Integer[] nums = {1, 2, 3};

        imprimir(nombres); // Ana Luis
        imprimir(nums);    // 1 2 3
        mostrarPar("edad", 25); // edad = 25
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Bounded types (límites)"}),t.jsx(S,{filename:"Bounded.java",code:`
// T debe ser Number o subclase de Number
public class Calculadora<T extends Number> {
    private T valor;

    public Calculadora(T valor) { this.valor = valor; }

    public double getDoble() {
        return valor.doubleValue() * 2; // funciona porque T ES un Number
    }
}

// Wildcards en parámetros
public class Wildcards {
    // ? extends Number: acepta Number o cualquier subclase (lectura)
    static double sumar(java.util.List<? extends Number> lista) {
        double total = 0;
        for (Number n : lista) {
            total += n.doubleValue();
        }
        return total;
    }

    // ? super Integer: acepta Integer o cualquier superclase (escritura)
    static void agregar(java.util.List<? super Integer> lista) {
        lista.add(1);
        lista.add(2);
    }
}
`}),t.jsxs(F,{type:"angular",children:["TypeScript tiene generics similares: ",t.jsx("code",{className:"text-primary",children:"function f<T>(x: T): T"}),". La diferencia es que Java borra los tipos genéricos en compilación (type erasure), mientras que TypeScript los mantiene solo en tiempo de compilación de todas formas."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 19"}),t.jsx(K,{number:1,title:"Par genérico",description:`Crea una clase Par<A, B> con:
- Campos: primero (A), segundo (B)
- Constructor, getters
- toString que muestre "(primero, segundo)"
- Método static of(A a, B b) que retorne un nuevo Par

Prueba con Par<String, Integer>, Par<Integer, Boolean>, etc.`,hint:"public class Par<A, B> { private A primero; private B segundo; ... }",solution:`public class Par<A, B> {
    private A primero;
    private B segundo;

    public Par(A primero, B segundo) {
        this.primero = primero;
        this.segundo = segundo;
    }

    public A getPrimero() { return primero; }
    public B getSegundo() { return segundo; }

    public static <A, B> Par<A, B> of(A a, B b) {
        return new Par<>(a, b);
    }

    @Override
    public String toString() {
        return "(" + primero + ", " + segundo + ")";
    }

    public static void main(String[] args) {
        Par<String, Integer> p1 = Par.of("edad", 25);
        Par<Integer, Boolean> p2 = Par.of(42, true);
        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p1.getPrimero().toUpperCase());
    }
}`,solutionFilename:"Par.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-19: generics, bounded types, wildcards"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 20"})," — Enums: constantes con superpoderes."]})]})})]})}function Qj(){return t.jsxs("div",{children:[t.jsx(oe,{day:20,title:"Enums",duration:"45 min",commitMsg:"dia-20: enums basicos, con campos y metodos, en switch"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy descubrirás que los enums de Java son mucho más que simples constantes. A diferencia de TypeScript donde un enum es solo un mapeo nombre→valor, en Java cada valor de un enum es una",t.jsx("strong",{className:"text-text",children:" instancia completa de una clase"})," con campos, métodos y comportamiento propio."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es un Enum y cuándo usarlo?"}),t.jsxs(ne,{title:"Enums Java vs TypeScript — la diferencia es abismal",children:[t.jsxs("p",{children:["En TypeScript, un enum es azúcar sintáctica para constantes numéricas o strings:",t.jsxs("code",{className:"text-primary",children:[" enum Color ","{","Red, Green, Blue","}"]})," se compila a números 0, 1, 2. No puedes agregar métodos, campos ni lógica a un enum de TypeScript."]}),t.jsxs("p",{children:["En Java, un enum es una ",t.jsx("strong",{className:"text-text",children:"clase especial"})," donde cada valor es un",t.jsx("strong",{className:"text-text",children:" objeto singleton"}),". Puede tener constructores privados, campos con datos, métodos con lógica, e incluso implementar interfaces. Es como tener una clase con un número fijo de instancias predefinidas."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"¿Cuándo usar enum?"})," Siempre que tengas un conjunto FIJO y CONOCIDO de valores: estados de un pedido (PENDIENTE, ENVIADO, ENTREGADO), roles (ADMIN, USER), direcciones (NORTE, SUR, ESTE, OESTE), monedas (USD, EUR), etc."]})]}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Un enum reemplaza las constantes mágicas (",t.jsx("code",{className:"text-primary",children:"int ESTADO_ACTIVO = 1"}),") con tipos seguros. Si un método recibe un ",t.jsx("code",{className:"text-primary",children:"EstadoPedido"}),", el compilador garantiza que solo puedes pasar valores válidos — no un número aleatorio por error."]}),t.jsx(S,{filename:"DiaSemana.java",code:`
public enum DiaSemana {
    LUNES, MARTES, MIERCOLES, JUEVES, VIERNES, SABADO, DOMINGO
}

public class Main {
    public static void main(String[] args) {
        DiaSemana hoy = DiaSemana.MIERCOLES;

        // Comparar enums con == (no con equals)
        if (hoy == DiaSemana.MIERCOLES) {
            System.out.println("Mitad de semana");
        }

        // switch con enums
        switch (hoy) {
            case LUNES, MARTES, MIERCOLES, JUEVES, VIERNES ->
                System.out.println("Día laborable");
            case SABADO, DOMINGO ->
                System.out.println("Fin de semana");
        }

        // Métodos útiles
        System.out.println(hoy.name());     // "MIERCOLES"
        System.out.println(hoy.ordinal());  // 2 (posición)
        DiaSemana d = DiaSemana.valueOf("LUNES"); // String -> Enum
        DiaSemana[] todos = DiaSemana.values();   // todos los valores
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Enum con campos y métodos"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Aquí es donde los enums de Java brillan. Puedes darle a cada valor del enum sus propios datos y comportamiento. El constructor es ",t.jsx("strong",{className:"text-text",children:"siempre privado"})," — solo se usa internamente cuando Java crea las instancias predefinidas al cargar la clase."]}),t.jsx(S,{filename:"Planeta.java",code:`
public enum Planeta {
    MERCURIO(3.303e+23, 2.4397e6),
    VENUS(4.869e+24, 6.0518e6),
    TIERRA(5.976e+24, 6.37814e6),
    MARTE(6.421e+23, 3.3972e6);

    private final double masa;      // en kg
    private final double radio;     // en metros

    // Constructor PRIVADO (siempre es privado en enums)
    Planeta(double masa, double radio) {
        this.masa = masa;
        this.radio = radio;
    }

    // Métodos
    public double getMasa() { return masa; }
    public double getRadio() { return radio; }

    public double gravedadSuperficial() {
        final double G = 6.67300E-11;
        return G * masa / (radio * radio);
    }
}

// Uso
// double g = Planeta.TIERRA.gravedadSuperficial(); // ~9.8
`}),t.jsxs(F,{type:"tip",title:"Métodos útiles que TODO enum tiene gratis",children:[t.jsx("code",{className:"text-primary",children:".name()"}),' — nombre como String ("TIERRA").',t.jsx("code",{className:"text-primary",children:" .ordinal()"})," — posición (0-based).",t.jsx("code",{className:"text-primary",children:" values()"})," — array con todos los valores.",t.jsx("code",{className:"text-primary",children:' valueOf("NOMBRE")'})," — convierte String a enum (lanza excepción si no existe). Puedes comparar con ",t.jsx("code",{className:"text-primary",children:"=="})," porque cada valor es singleton (una sola instancia en memoria)."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Caso real: Enum como estrategia (Strategy Pattern)"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Los enums pueden implementar interfaces. Esto te permite tener comportamiento diferente por cada valor sin necesidad de crear múltiples clases. Es el patrón Strategy en su forma más compacta."}),t.jsx(S,{filename:"EstadoPedido.java",code:`
public enum EstadoPedido {
    PENDIENTE {
        @Override
        public boolean puedeTransicionarA(EstadoPedido nuevo) {
            return nuevo == CONFIRMADO || nuevo == CANCELADO;
        }
    },
    CONFIRMADO {
        @Override
        public boolean puedeTransicionarA(EstadoPedido nuevo) {
            return nuevo == ENVIADO || nuevo == CANCELADO;
        }
    },
    ENVIADO {
        @Override
        public boolean puedeTransicionarA(EstadoPedido nuevo) {
            return nuevo == ENTREGADO;
        }
    },
    ENTREGADO {
        @Override
        public boolean puedeTransicionarA(EstadoPedido nuevo) {
            return false; // Estado final
        }
    },
    CANCELADO {
        @Override
        public boolean puedeTransicionarA(EstadoPedido nuevo) {
            return false; // Estado final
        }
    };

    // Método abstracto que cada valor DEBE implementar
    public abstract boolean puedeTransicionarA(EstadoPedido nuevo);

    // Método concreto compartido por todos
    public void transicionar(EstadoPedido nuevo) {
        if (!puedeTransicionarA(nuevo)) {
            throw new IllegalStateException(
                "No se puede ir de " + this + " a " + nuevo
            );
        }
    }
}

// Uso:
// EstadoPedido.PENDIENTE.puedeTransicionarA(EstadoPedido.ENVIADO); // false
// EstadoPedido.PENDIENTE.puedeTransicionarA(EstadoPedido.CONFIRMADO); // true
`}),t.jsx(F,{type:"angular",children:"En Angular/TypeScript lograrías esto con un Map o switch. En Java, el enum encapsula la lógica de transición de estados directamente, haciendo imposible crear un estado inválido. Esto se usa mucho en e-commerce (estados de pedido), workflows (estados de aprobación) y máquinas de estado."})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 20"}),t.jsx(K,{number:1,title:"Enum Moneda con conversión",description:`Crea un enum Moneda con valores: USD, EUR, MXN, GBP.
Cada uno tiene un campo tasaCambioAUSD (double):
- USD: 1.0, EUR: 1.08, MXN: 0.058, GBP: 1.27

Métodos:
- convertir(double monto, Moneda destino) — convierte monto de esta moneda a la destino
- toString con formato "USD (1 USD = 1.00 USD)"

Prueba convirtiendo 100 EUR a MXN.`,hint:"Convierte primero a USD multiplicando por tasaCambioAUSD, luego divide entre la tasa destino.",solution:`public enum Moneda {
    USD(1.0), EUR(1.08), MXN(0.058), GBP(1.27);

    private final double tasaAUSD;

    Moneda(double tasaAUSD) { this.tasaAUSD = tasaAUSD; }

    public double convertir(double monto, Moneda destino) {
        double enUSD = monto * this.tasaAUSD;
        return enUSD / destino.tasaAUSD;
    }

    public static void main(String[] args) {
        double resultado = EUR.convertir(100, MXN);
        System.out.printf("100 EUR = %.2f MXN%n", resultado);

        double r2 = GBP.convertir(50, USD);
        System.out.printf("50 GBP = %.2f USD%n", r2);
    }
}`,solutionFilename:"Moneda.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-20: enums con campos, metodos, switch"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 21"})," — Comparable y Comparator: ordenar objetos."]})]})})]})}function Xj(){return t.jsxs("div",{children:[t.jsx(oe,{day:22,title:"Expresiones Lambda",duration:"55 min",commitMsg:"dia-22: lambdas, interfaces funcionales, method references"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy entras a la programación funcional de Java. Las lambdas (Java 8+) son expresiones que representan funciones anónimas — como las arrow functions de TypeScript, pero con una diferencia fundamental: en Java solo puedes usar una lambda donde se espera una ",t.jsx("strong",{className:"text-text",children:"interfaz funcional"}),"."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es una Lambda?"}),t.jsxs(ne,{title:"Lambda = arrow function que implementa una interfaz",children:[t.jsxs("p",{children:["En TypeScript: ",t.jsx("code",{className:"text-primary",children:"const f = (a, b) => a + b"})," — puedes asignar una función a cualquier variable. Las funciones son ciudadanos de primera clase."]}),t.jsxs("p",{children:["En Java, las funciones NO son ciudadanos de primera clase — todo vive dentro de una clase. Una lambda es azúcar sintáctico para una ",t.jsx("strong",{className:"text-text",children:"clase anónima"})," que implementa una interfaz con un solo método abstracto (llamada ",t.jsx("strong",{className:"text-text",children:"interfaz funcional"}),"). Es decir, cuando escribes ",t.jsx("code",{className:"text-primary",children:"(a, b) -> a + b"}),', Java lo traduce internamente a: "crea un objeto que implementa esta interfaz y su único método hace a + b".']}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Interfaces funcionales estándar (java.util.function):"})," ",t.jsx("code",{className:"text-primary",children:"Predicate<T>"})," (T→boolean),"," ",t.jsx("code",{className:"text-primary",children:"Function<T,R>"})," (T→R),"," ",t.jsx("code",{className:"text-primary",children:"Consumer<T>"})," (T→void),"," ",t.jsx("code",{className:"text-primary",children:"Supplier<T>"})," (→T),"," ",t.jsx("code",{className:"text-primary",children:"Comparator<T>"})," (T,T→int). Estas cubren el 95% de los casos de uso."]})]}),t.jsx(S,{filename:"Lambdas.java",code:`
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.function.*;

public class Lambdas {
    public static void main(String[] args) {
        // Sintaxis: (parámetros) -> expresión
        // o:        (parámetros) -> { bloque de código }

        // Antes (clase anónima)
        Runnable antiguoHola = new Runnable() {
            @Override
            public void run() { System.out.println("Hola"); }
        };

        // Con lambda (mucho más conciso)
        Runnable hola = () -> System.out.println("Hola");

        // Con un parámetro (paréntesis opcionales)
        Consumer<String> saludar = nombre -> System.out.println("Hola " + nombre);

        // Con múltiples parámetros
        java.util.Comparator<String> porLongitud = (a, b) -> a.length() - b.length();

        // Con bloque de código
        Function<Integer, String> clasificar = edad -> {
            if (edad < 18) return "Menor";
            if (edad < 65) return "Adulto";
            return "Senior";
        };

        // Usar lambdas
        hola.run();                        // "Hola"
        saludar.accept("Carlos");          // "Hola Carlos"
        System.out.println(clasificar.apply(25)); // "Adulto"

        // Ordenar lista con lambda
        List<String> nombres = new ArrayList<>(List.of("Carlos", "Ana", "Luis"));
        Collections.sort(nombres, (a, b) -> a.compareTo(b));
        // O más corto con method reference:
        Collections.sort(nombres, String::compareTo);
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Interfaces funcionales del JDK"}),t.jsx(S,{filename:"InterfacesFuncionales.java",code:`
import java.util.function.*;

public class InterfacesFuncionales {
    public static void main(String[] args) {
        // Predicate<T>: T -> boolean (filtrar)
        Predicate<Integer> esPar = n -> n % 2 == 0;
        System.out.println(esPar.test(4));  // true

        // Function<T, R>: T -> R (transformar)
        Function<String, Integer> longitud = String::length;
        System.out.println(longitud.apply("Hola")); // 4

        // Consumer<T>: T -> void (consumir/ejecutar)
        Consumer<String> imprimir = System.out::println;
        imprimir.accept("Hola mundo");

        // Supplier<T>: () -> T (proveer/crear)
        Supplier<Double> random = Math::random;
        System.out.println(random.get());

        // BiFunction<T, U, R>: (T, U) -> R
        BiFunction<Integer, Integer, Integer> sumar = Integer::sum;
        System.out.println(sumar.apply(3, 4)); // 7

        // Componer funciones
        Function<Integer, Integer> doble = n -> n * 2;
        Function<Integer, Integer> masCinco = n -> n + 5;
        Function<Integer, Integer> dobleMasCinco = doble.andThen(masCinco);
        System.out.println(dobleMasCinco.apply(3)); // 11
    }
}
`}),t.jsxs(F,{type:"angular",children:["Las lambdas de Java son como las arrow functions de TypeScript: ",t.jsx("code",{className:"text-primary",children:"(a, b) => a + b"}),". La diferencia es que en Java las lambdas solo funcionan donde se espera una interfaz funcional."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Method References (::)"}),t.jsx(S,{filename:"MethodRef.java",code:`
import java.util.List;

public class MethodRef {
    public static void main(String[] args) {
        List<String> nombres = List.of("Ana", "Luis", "Carlos");

        // Lambda           vs  Method Reference
        nombres.forEach(n -> System.out.println(n));
        nombres.forEach(System.out::println);  // más limpio

        // Tipos de method references:
        // 1. Estático:      Integer::parseInt
        // 2. De instancia:  String::toUpperCase
        // 3. De objeto:     System.out::println
        // 4. Constructor:   ArrayList::new
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 22"}),t.jsx(K,{number:1,title:"Pipeline de transformación",description:`Crea PipelineLambda.java con:
1. Una lista de nombres: "carlos", "ANA", " luis ", "MARÍA", " pedro "
2. Usa lambdas para: trim → toLowerCase → capitalize (primera letra mayúscula)
3. Filtra los que tengan más de 4 letras
4. Ordénalos alfabéticamente
5. Imprime el resultado

Todo con lambdas, sin bucles for.`,hint:"Usa List.stream().map(String::trim).map(String::toLowerCase).map(s -> ...).filter(...).sorted().forEach(...);",solution:`import java.util.*;
import java.util.stream.*;

public class PipelineLambda {
    public static void main(String[] args) {
        List<String> nombres = List.of("carlos", "ANA", " luis ", "MARÍA", " pedro ");

        nombres.stream()
            .map(String::trim)
            .map(String::toLowerCase)
            .map(s -> s.substring(0, 1).toUpperCase() + s.substring(1))
            .filter(s -> s.length() > 4)
            .sorted()
            .forEach(System.out::println);
        // Carlos, María, Pedro
    }
}`,solutionFilename:"PipelineLambda.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-22: lambdas, interfaces funcionales, method references"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 23"})," — Streams API: filter, map, reduce, collect."]})]})})]})}function Zj(){return t.jsxs("div",{children:[t.jsx(oe,{day:23,title:"Streams API",duration:"60 min",commitMsg:"dia-23: streams, filter, map, reduce, collect, groupingBy"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy dominarás la Streams API — la herramienta más poderosa de Java para procesar colecciones de forma declarativa. Si conoces RxJS en Angular, los Streams te resultarán familiares: encadenas operaciones como ",t.jsx("code",{className:"text-primary",children:"filter → map → collect"})," en un pipeline fluido."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es un Stream?"}),t.jsxs(ne,{title:"Stream = pipeline de datos (como RxJS pipe)",children:[t.jsxs("p",{children:["En Angular usas ",t.jsx("code",{className:"text-primary",children:"pipe(filter(), map(), tap())"})," con observables para transformar flujos de datos. En Java, ",t.jsx("code",{className:"text-primary",children:".stream().filter().map().collect()"}),"es el mismo concepto aplicado a colecciones en memoria."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Diferencias clave con RxJS:"})," (1) Los Streams se consumen ",t.jsx("strong",{className:"text-text",children:"una sola vez"}),"— no puedes reusar un Stream como un Observable. (2) Son ",t.jsx("strong",{className:"text-text",children:"lazy"})," — no procesan nada hasta que llamas una operación terminal (collect, forEach, count). (3) Son ",t.jsx("strong",{className:"text-text",children:"síncronos"}),"— no manejan eventos asíncronos ni tiempo."]})]}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Un Stream tiene tres partes: (1) una ",t.jsx("strong",{className:"text-text",children:"fuente"})," (lista, array, archivo), (2) cero o más ",t.jsx("strong",{className:"text-text",children:"operaciones intermedias"})," (filter, map, sorted — retornan otro Stream), y (3) una ",t.jsx("strong",{className:"text-text",children:"operación terminal"})," (collect, forEach, count — produce el resultado final). Sin operación terminal, nada se ejecuta."]}),t.jsx(F,{type:"warning",title:"Los Streams NO modifican la colección original",children:"Un Stream nunca muta la lista de origen. Siempre crea una nueva colección o resultado. La lista original queda intacta. Esto es programación funcional: datos inmutables + transformaciones."}),t.jsx(S,{filename:"StreamsBasico.java",code:`
import java.util.List;
import java.util.stream.Collectors;

public class StreamsBasico {
    public static void main(String[] args) {
        List<String> nombres = List.of("Carlos", "Ana", "Luis", "María", "Pedro");

        // filter: filtrar elementos
        List<String> largos = nombres.stream()
            .filter(n -> n.length() > 4)
            .collect(Collectors.toList());
        // ["Carlos", "María", "Pedro"]

        // map: transformar elementos
        List<String> mayusculas = nombres.stream()
            .map(String::toUpperCase)
            .collect(Collectors.toList());
        // ["CARLOS", "ANA", "LUIS", "MARÍA", "PEDRO"]

        // forEach: ejecutar acción por elemento
        nombres.stream()
            .filter(n -> n.startsWith("C"))
            .forEach(System.out::println); // "Carlos"

        // sorted: ordenar
        List<String> ordenados = nombres.stream()
            .sorted()
            .collect(Collectors.toList());

        // distinct: eliminar duplicados
        // limit: tomar los primeros N
        // skip: saltar los primeros N
        List<String> primeros2 = nombres.stream()
            .sorted()
            .limit(2)
            .collect(Collectors.toList()); // ["Ana", "Carlos"]
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operaciones terminales — Donde ocurre la magia"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Las operaciones terminales ",t.jsx("strong",{className:"text-text",children:"disparan la ejecución"}),' de todo el pipeline y producen un resultado final (una lista, un número, un boolean, etc.). Sin ellas, las operaciones intermedias simplemente se quedan "esperando". Piénsalo como ',t.jsx("code",{className:"text-primary",children:".subscribe()"})," en RxJS — sin subscribe, el observable no hace nada."]}),t.jsx(S,{filename:"StreamsTerminal.java",code:`
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class StreamsTerminal {
    public static void main(String[] args) {
        List<Integer> numeros = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // reduce: acumular en un solo valor
        int suma = numeros.stream().reduce(0, Integer::sum); // 55

        // count
        long pares = numeros.stream().filter(n -> n % 2 == 0).count(); // 5

        // findFirst / findAny
        Optional<Integer> primero = numeros.stream()
            .filter(n -> n > 5)
            .findFirst(); // Optional[6]

        // anyMatch / allMatch / noneMatch
        boolean hayMayorQue5 = numeros.stream().anyMatch(n -> n > 5);   // true
        boolean todosMayorQue0 = numeros.stream().allMatch(n -> n > 0); // true

        // min / max
        Optional<Integer> maximo = numeros.stream().max(Integer::compareTo); // 10

        // collect a Map
        List<String> nombres = List.of("Ana", "Luis", "Carlos");
        var porLetra = nombres.stream()
            .collect(Collectors.groupingBy(n -> n.charAt(0)));
        // {A=[Ana], L=[Luis], C=[Carlos]}

        // joining
        String unidos = nombres.stream()
            .collect(Collectors.joining(", ")); // "Ana, Luis, Carlos"

        // toList() shorthand (Java 16+)
        List<Integer> dobles = numeros.stream()
            .map(n -> n * 2)
            .toList(); // inmutable
    }
}
`}),t.jsxs(F,{type:"angular",children:["Los Streams de Java son como los operadores RxJS en Angular: ",t.jsx("code",{className:"text-primary",children:"pipe(filter(), map())"}),". La diferencia es que los Streams son para datos en memoria y se ejecutan una sola vez, mientras que RxJS maneja flujos asíncronos y observables."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 23"}),t.jsx(K,{number:1,title:"Reporte de ventas con Streams",description:`Crea ReporteVentas.java con:
1. Un record Venta(String producto, double monto, String categoria)
2. Una lista con al menos 5 ventas de diferentes categorías
3. Usa Streams para calcular:
   - Total de ventas (suma de todos los montos)
   - La venta más cara (usa max con Comparator)
   - Total por categoría (agrupa con groupingBy y suma con summingDouble)
   - Top 3 ventas más caras (sorted + limit)
   - Cantidad de productos únicos vendidos (map + distinct + count)`,hint:"Usa mapToDouble().sum(), max(Comparator.comparingDouble()), Collectors.groupingBy(), sorted().limit(), map().distinct().count()",solution:`import java.util.*;
import java.util.stream.*;

public class ReporteVentas {
    record Venta(String producto, double monto, String cat) {}
    public static void main(String[] args) {
        var v = List.of(new Venta("Laptop",1200,"Tech"), new Venta("Mouse",25,"Tech"),
            new Venta("Camisa",45,"Ropa"), new Venta("Monitor",450,"Tech"));
        System.out.println("Total: " + v.stream().mapToDouble(Venta::monto).sum());
        v.stream().max(Comparator.comparingDouble(Venta::monto)).ifPresent(System.out::println);
        v.stream().collect(Collectors.groupingBy(Venta::cat, Collectors.summingDouble(Venta::monto)))
            .forEach((c,s) -> System.out.printf("%s: $%.2f%n", c, s));
    }
}`,solutionFilename:"ReporteVentas.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-23: streams filter, map, reduce, collect, groupingBy"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 24"})," — Optional: adiós NullPointerException."]})]})})]})}function Kj(){return t.jsxs("div",{children:[t.jsx(oe,{day:24,title:"Optional",duration:"40 min",commitMsg:"dia-24: Optional, orElse, map, flatMap, ifPresent"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy aprenderás ",t.jsx("code",{className:"text-primary",children:"Optional<T>"})," — el arma definitiva contra",t.jsx("code",{className:"text-primary",children:" NullPointerException"}),", el error más común en la historia de Java. En Spring Boot lo verás en cada ",t.jsx("code",{className:"text-primary",children:"findById()"})," de tus repositorios."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Por qué existe Optional?"}),t.jsxs(ne,{title:"Optional = un contenedor que puede estar vacío",children:[t.jsxs("p",{children:["En TypeScript puedes usar ",t.jsx("code",{className:"text-primary",children:"?."})," (optional chaining) y ",t.jsx("code",{className:"text-primary",children:"??"}),"(nullish coalescing) para manejar nulls de forma segura. Pero en Java no existían estos operadores hasta que se creó ",t.jsx("code",{className:"text-primary",children:"Optional"})," en Java 8."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"NullPointerException (NPE)"})," es el error #1 en Java. Ocurre cuando llamas un método sobre una variable que es ",t.jsx("code",{className:"text-primary",children:"null"}),'. Optional te obliga a pensar explícitamente: "¿qué hago si no hay valor?" — en vez de confiar en que "seguro no es null".']}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Reglas de oro:"})," (1) Nunca retornes null — retorna ",t.jsx("code",{className:"text-primary",children:"Optional.empty()"}),". (2) Nunca uses Optional como parámetro de método. (3) Nunca uses Optional como campo de clase. Su único propósito legítimo es como ",t.jsx("strong",{className:"text-text",children:"tipo de retorno"})," para comunicar que un resultado puede estar ausente."]})]}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Piensa en Optional como una caja que puede contener un valor o estar vacía. En vez de verificar ",t.jsx("code",{className:"text-primary",children:"if (resultado != null)"}),", usas métodos expresivos como ",t.jsx("code",{className:"text-primary",children:"orElse()"}),", ",t.jsx("code",{className:"text-primary",children:"map()"}),",",t.jsx("code",{className:"text-primary",children:" ifPresent()"})," que hacen tu código más legible y seguro."]}),t.jsx(S,{filename:"OptionalEjemplo.java",code:`
import java.util.Optional;

public class OptionalEjemplo {
    public static void main(String[] args) {
        // Crear Optional
        Optional<String> conValor = Optional.of("Hola");
        Optional<String> vacio = Optional.empty();
        Optional<String> nullable = Optional.ofNullable(null); // no lanza excepción

        // Verificar si tiene valor
        System.out.println(conValor.isPresent()); // true
        System.out.println(vacio.isEmpty());      // true (Java 11+)

        // Obtener valor
        String valor = conValor.get(); // "Hola" (lanza excepción si vacío)

        // Valor por defecto
        String resultado = vacio.orElse("Valor por defecto");
        String lazy = vacio.orElseGet(() -> "Calculado bajo demanda");

        // Lanzar excepción si vacío
        // String error = vacio.orElseThrow(() -> new RuntimeException("No hay valor"));

        // ifPresent: ejecutar solo si hay valor
        conValor.ifPresent(v -> System.out.println("Valor: " + v));

        // ifPresentOrElse (Java 9+)
        vacio.ifPresentOrElse(
            v -> System.out.println("Hay: " + v),
            () -> System.out.println("Vacío")
        );
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Encadenar operaciones"}),t.jsx(S,{filename:"OptionalChain.java",code:`
import java.util.Optional;

public class OptionalChain {
    record Usuario(String nombre, String email) {}

    static Optional<Usuario> buscarPorId(int id) {
        if (id == 1) return Optional.of(new Usuario("Carlos", "carlos@mail.com"));
        return Optional.empty();
    }

    public static void main(String[] args) {
        // map: transformar el valor si existe
        Optional<String> nombre = buscarPorId(1)
            .map(Usuario::nombre);  // Optional["Carlos"]

        // flatMap: cuando el resultado ya es Optional
        // filter: filtrar el valor
        String email = buscarPorId(1)
            .filter(u -> u.nombre().startsWith("C"))
            .map(Usuario::email)
            .orElse("no-email");

        System.out.println(email); // "carlos@mail.com"

        // Patrón: nunca retornes null, retorna Optional
        // MAL:  public String buscar() { return null; }
        // BIEN: public Optional<String> buscar() { return Optional.empty(); }
    }
}
`}),t.jsxs(F,{type:"tip",children:["Usa Optional como tipo de retorno de métodos que pueden no tener resultado.",t.jsx("strong",{children:" Nunca"})," uses Optional como parámetro de método ni como campo de clase. Su propósito es comunicar al llamador que el resultado puede estar ausente."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 24"}),t.jsx(K,{number:1,title:"Repositorio con Optional",description:`Crea un mini repositorio en memoria:
1. Clase Usuario(int id, String nombre, String email)
2. Clase UsuarioRepo con Map<Integer, Usuario> interno
3. Método Optional<Usuario> buscarPorId(int id)
4. Método Optional<Usuario> buscarPorEmail(String email)
5. En main: busca usuarios existentes y no existentes, usa orElse, map, ifPresent`,hint:"return Optional.ofNullable(usuarios.get(id));",solution:`import java.util.*;

public class UsuarioRepo {
    record Usuario(int id, String nombre, String email) {}

    private Map<Integer, Usuario> usuarios = new HashMap<>();

    public void guardar(Usuario u) { usuarios.put(u.id(), u); }

    public Optional<Usuario> buscarPorId(int id) {
        return Optional.ofNullable(usuarios.get(id));
    }

    public Optional<Usuario> buscarPorEmail(String email) {
        return usuarios.values().stream()
            .filter(u -> u.email().equals(email))
            .findFirst();
    }

    public static void main(String[] args) {
        UsuarioRepo repo = new UsuarioRepo();
        repo.guardar(new Usuario(1, "Carlos", "carlos@mail.com"));
        repo.guardar(new Usuario(2, "Ana", "ana@mail.com"));

        repo.buscarPorId(1).ifPresent(u -> System.out.println("Encontrado: " + u));

        String nombre = repo.buscarPorId(99)
            .map(Usuario::nombre)
            .orElse("Desconocido");
        System.out.println("Nombre: " + nombre);

        repo.buscarPorEmail("ana@mail.com")
            .ifPresentOrElse(
                u -> System.out.println("Email de: " + u.nombre()),
                () -> System.out.println("No encontrado")
            );
    }
}`,solutionFilename:"UsuarioRepo.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-24: Optional, orElse, map, flatMap, ifPresent"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 25"})," — Concurrencia: threads, synchronized, ExecutorService."]})]})})]})}function $j(){return t.jsxs("div",{children:[t.jsx(oe,{day:25,title:"Concurrencia",duration:"60 min",commitMsg:"dia-25: threads, ExecutorService, CompletableFuture"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy entras al mundo de la concurrencia — uno de los temas más importantes y complejos de Java. Entender threads es clave porque en Spring Boot, ",t.jsx("strong",{className:"text-text",children:"cada petición HTTP corre en su propio hilo"}),". Si tu código no es thread-safe, tendrás bugs que solo aparecen en producción bajo carga."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es un Thread y por qué importa?"}),t.jsxs(ne,{title:"Java = multi-threaded real (no event loop)",children:[t.jsxs("p",{children:["En JavaScript/TypeScript todo es ",t.jsx("strong",{className:"text-text",children:"single-threaded con event loop"}),": un solo hilo ejecuta tu código y las operaciones async se manejan con callbacks/promises. Nunca hay dos funciones ejecutándose simultáneamente en el mismo proceso."]}),t.jsxs("p",{children:["En Java, puedes tener ",t.jsx("strong",{className:"text-text",children:"múltiples hilos reales del sistema operativo"}),"ejecutándose en paralelo sobre múltiples cores de CPU. Esto da mucho más rendimiento para operaciones CPU-intensivas, pero introduce problemas de sincronización: ¿qué pasa si dos hilos modifican la misma variable al mismo tiempo? → ",t.jsx("strong",{className:"text-text",children:"Race conditions"}),", datos corruptos, deadlocks."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Regla moderna:"})," nunca crees ",t.jsx("code",{className:"text-primary",children:"new Thread()"})," directamente. Usa ",t.jsx("code",{className:"text-primary",children:"ExecutorService"})," (pool de hilos reutilizables) o",t.jsx("code",{className:"text-primary",children:" CompletableFuture"})," (programación asíncrona declarativa). Los threads crudos son como hacer HTTP con sockets raw — funciona pero es innecesariamente complejo."]})]}),t.jsx(S,{filename:"Threads.java",code:`
public class Threads {
    public static void main(String[] args) throws InterruptedException {
        // Opción 1: Runnable con lambda
        Thread t1 = new Thread(() -> {
            System.out.println("Hilo 1: " + Thread.currentThread().getName());
        });
        t1.start(); // NO uses t1.run() — eso ejecuta en el hilo actual

        // Opción 2: Extender Thread (menos común)
        Thread t2 = new Thread() {
            @Override
            public void run() {
                System.out.println("Hilo 2 ejecutándose");
            }
        };
        t2.start();

        // join: esperar a que el hilo termine
        t1.join();
        t2.join();
        System.out.println("Ambos hilos terminaron");

        // sleep: pausar el hilo actual
        Thread.sleep(1000); // 1 segundo
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"ExecutorService (recomendado)"}),t.jsx(S,{filename:"Executor.java",code:`
import java.util.concurrent.*;

public class Executor {
    public static void main(String[] args) throws Exception {
        // Pool de hilos: reutiliza hilos en lugar de crear nuevos
        ExecutorService executor = Executors.newFixedThreadPool(3);

        // submit Runnable (sin retorno)
        executor.submit(() -> System.out.println("Tarea 1"));

        // submit Callable (con retorno)
        Future<String> futuro = executor.submit(() -> {
            Thread.sleep(1000);
            return "Resultado";
        });

        // get() bloquea hasta obtener el resultado
        String resultado = futuro.get(); // "Resultado"

        // SIEMPRE cerrar el executor
        executor.shutdown();
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"CompletableFuture (async moderno)"}),t.jsx(S,{filename:"CompletableFutureEjemplo.java",code:`
import java.util.concurrent.CompletableFuture;

public class CompletableFutureEjemplo {
    public static void main(String[] args) {
        // Ejecutar algo async y encadenar
        CompletableFuture.supplyAsync(() -> "Hola")
            .thenApply(s -> s + " Mundo")           // transformar
            .thenApply(String::toUpperCase)          // otra transformación
            .thenAccept(System.out::println);        // consumir: "HOLA MUNDO"

        // Combinar dos futuros
        CompletableFuture<String> f1 = CompletableFuture.supplyAsync(() -> "Java");
        CompletableFuture<String> f2 = CompletableFuture.supplyAsync(() -> "Spring");

        f1.thenCombine(f2, (a, b) -> a + " + " + b)
          .thenAccept(System.out::println); // "Java + Spring"

        // Manejar errores
        CompletableFuture.supplyAsync(() -> {
            if (true) throw new RuntimeException("Error!");
            return "OK";
        })
        .exceptionally(ex -> "Error manejado: " + ex.getMessage())
        .thenAccept(System.out::println);

        // Esperar a que todo termine
        CompletableFuture.allOf(f1, f2).join();
    }
}
`}),t.jsxs(F,{type:"angular",children:["CompletableFuture es similar a las ",t.jsx("code",{className:"text-primary",children:"Promise"})," de TypeScript.",t.jsx("code",{className:"text-primary",children:" thenApply"})," = ",t.jsx("code",{className:"text-primary",children:".then()"}),",",t.jsx("code",{className:"text-primary",children:" exceptionally"})," = ",t.jsx("code",{className:"text-primary",children:".catch()"}),",",t.jsx("code",{className:"text-primary",children:" allOf"})," = ",t.jsx("code",{className:"text-primary",children:"Promise.all()"}),"."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 25"}),t.jsx(K,{number:1,title:"Descarga paralela simulada",description:`Simula descargar 5 archivos en paralelo con CompletableFuture:
1. Cada "descarga" es un Thread.sleep(random 1-3 segundos)
2. Imprime cuándo empieza y termina cada descarga
3. Mide el tiempo total (debe ser ~3s, no 5×3s)
4. Usa CompletableFuture.allOf() para esperar a todos`,hint:"CompletableFuture.supplyAsync(() -> { Thread.sleep(...); return archivo; })",solution:`import java.util.concurrent.*;
import java.util.*;

public class DescargaParalela {
    static String descargar(String archivo) {
        try {
            int ms = 1000 + new Random().nextInt(2000);
            System.out.printf("[%s] Descargando %s...%n",
                Thread.currentThread().getName(), archivo);
            Thread.sleep(ms);
            return archivo + " (" + ms + "ms)";
        } catch (InterruptedException e) { throw new RuntimeException(e); }
    }

    public static void main(String[] args) {
        long inicio = System.currentTimeMillis();
        List<String> archivos = List.of("app.jar","data.csv","img.png","log.txt","config.xml");

        CompletableFuture<?>[] futuros = archivos.stream()
            .map(a -> CompletableFuture.supplyAsync(() -> descargar(a))
                .thenAccept(r -> System.out.println("Completado: " + r)))
            .toArray(CompletableFuture[]::new);

        CompletableFuture.allOf(futuros).join();
        System.out.printf("Total: %dms%n", System.currentTimeMillis() - inicio);
    }
}`,solutionFilename:"DescargaParalela.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-25: threads, ExecutorService, CompletableFuture"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 26"})," — Virtual Threads: millones de hilos con Java 21."]})]})})]})}function Wj(){return t.jsxs("div",{children:[t.jsx(oe,{day:27,title:"I/O y Archivos",duration:"45 min",commitMsg:"dia-27: Path, Files, BufferedReader, try-with-resources"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy aprenderás a leer y escribir archivos con ",t.jsx("code",{className:"text-primary",children:"java.nio.file"})," — la API moderna de I/O. Entenderás Path, Files, try-with-resources, y cuándo usar cada método según el tamaño del archivo."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"java.nio.file — La API moderna"}),t.jsxs(ne,{title:"java.nio vs java.io — siempre usa nio",children:[t.jsxs("p",{children:["Java tiene dos APIs de archivos: la vieja ",t.jsx("code",{className:"text-primary",children:"java.io.File"})," (Java 1.0, de 1996) y la moderna ",t.jsx("code",{className:"text-primary",children:"java.nio.file"})," (NIO.2, Java 7+). ",t.jsx("strong",{className:"text-text",children:"Siempre usa NIO.2"}),". La API vieja tiene problemas: no lanza excepciones informativas cuando falla, no soporta links simbólicos bien, y su diseño es confuso."]}),t.jsxs("p",{children:["Con NIO.2, ",t.jsx("code",{className:"text-primary",children:"Path"})," representa la ruta del archivo (como una dirección) y",t.jsx("code",{className:"text-primary",children:" Files"})," es la clase utilitaria con métodos estáticos para leer, escribir, copiar, mover y eliminar archivos. Es como ",t.jsx("code",{className:"text-primary",children:"fs"})," en Node.js pero tipado y más robusto."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Regla del tamaño:"})," Para archivos pequeños (<10MB), usa",t.jsx("code",{className:"text-primary",children:" Files.readString()"})," o ",t.jsx("code",{className:"text-primary",children:"Files.readAllLines()"}),". Para archivos grandes, usa ",t.jsx("code",{className:"text-primary",children:"Files.lines()"})," (Stream lazy) o",t.jsx("code",{className:"text-primary",children:" BufferedReader"})," para no cargar todo en RAM."]})]}),t.jsx(S,{filename:"NIOArchivos.java",code:`
import java.nio.file.*;
import java.io.IOException;
import java.util.List;

public class NIOArchivos {
    public static void main(String[] args) throws IOException {
        Path archivo = Path.of("datos.txt");

        // Escribir archivo completo
        Files.writeString(archivo, "Hola Mundo\\nSegunda línea");

        // Leer archivo completo como String
        String contenido = Files.readString(archivo);
        System.out.println(contenido);

        // Leer todas las líneas como List
        List<String> lineas = Files.readAllLines(archivo);
        lineas.forEach(System.out::println);

        // Escribir lista de líneas
        Files.write(Path.of("salida.txt"), List.of("Línea 1", "Línea 2"));

        // Verificar existencia
        System.out.println(Files.exists(archivo));    // true
        System.out.println(Files.isDirectory(archivo)); // false

        // Copiar y mover
        Files.copy(archivo, Path.of("copia.txt"), StandardCopyOption.REPLACE_EXISTING);
        // Files.move(archivo, Path.of("nuevo.txt"));

        // Eliminar
        Files.deleteIfExists(Path.of("copia.txt"));

        // Listar directorio
        try (var stream = Files.list(Path.of("."))) {
            stream.filter(Files::isRegularFile)
                  .forEach(System.out::println);
        }

        // Crear directorios
        Files.createDirectories(Path.of("carpeta/subcarpeta"));
    }
}
`}),t.jsxs(F,{type:"tip",children:["Siempre prefiere ",t.jsx("code",{className:"text-primary",children:"java.nio.file"})," sobre ",t.jsx("code",{className:"text-primary",children:"java.io.File"}),". Es más moderno, más seguro y tiene mejor manejo de errores. ",t.jsx("code",{className:"text-primary",children:"Files"})," y",t.jsx("code",{className:"text-primary",children:" Path"})," son las clases principales."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"BufferedReader/Writer (streams grandes)"}),t.jsx(S,{filename:"BufferedIO.java",code:`
import java.io.*;
import java.nio.file.*;

public class BufferedIO {
    public static void main(String[] args) throws IOException {
        // Para archivos grandes: leer línea por línea (no cargar todo en memoria)
        try (BufferedReader reader = Files.newBufferedReader(Path.of("grande.txt"))) {
            String linea;
            while ((linea = reader.readLine()) != null) {
                System.out.println(linea);
            }
        }

        // Escribir línea por línea
        try (BufferedWriter writer = Files.newBufferedWriter(Path.of("salida.txt"))) {
            writer.write("Primera línea");
            writer.newLine();
            writer.write("Segunda línea");
        }
        // El try-with-resources cierra automáticamente el writer
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 27"}),t.jsx(K,{number:1,title:"Contador de palabras en archivo",description:`Crea ContadorArchivo.java que:
1. Lea un archivo de texto línea por línea
2. Cuente: total líneas, total palabras, total caracteres
3. Encuentre la línea más larga
4. Imprima un resumen estilo wc de Linux`,hint:"Usa Files.readAllLines() o Files.lines() (stream). Para palabras: linea.split('\\\\s+').length",solution:`import java.nio.file.*;
import java.io.IOException;

public class ContadorArchivo {
    public static void main(String[] args) throws IOException {
        Path archivo = Path.of("datos.txt");
        // Crear archivo de prueba
        Files.writeString(archivo, "Hola mundo
Java es genial
NIO es moderno y potente");

        var lineas = Files.readAllLines(archivo);
        long totalLineas = lineas.size();
        long totalPalabras = lineas.stream()
            .mapToInt(l -> l.split("\\s+").length).sum();
        long totalChars = lineas.stream()
            .mapToInt(String::length).sum();
        String masLarga = lineas.stream()
            .reduce((a, b) -> a.length() >= b.length() ? a : b)
            .orElse("");

        System.out.printf("Líneas: %d%n", totalLineas);
        System.out.printf("Palabras: %d%n", totalPalabras);
        System.out.printf("Caracteres: %d%n", totalChars);
        System.out.printf("Línea más larga: %s%n", masLarga);
    }
}`,solutionFilename:"ContadorArchivo.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-27: I/O archivos, Path, Files, BufferedReader"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 28"})," — API de Fechas: LocalDate, LocalDateTime, Duration."]})]})})]})}function eS(){return t.jsxs("div",{children:[t.jsx(oe,{day:28,title:"API de Fechas",duration:"45 min",commitMsg:"dia-28: LocalDate, LocalDateTime, Duration, DateTimeFormatter"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy dominarás ",t.jsx("code",{className:"text-primary",children:"java.time"})," — la API moderna de fechas introducida en Java 8. Es inmutable, thread-safe y clara. Si alguna vez usaste ",t.jsx("code",{className:"text-primary",children:"new Date()"})," en JavaScript y sufriste con zonas horarias, aquí encontrarás la solución profesional."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Por qué java.time y no Date?"}),t.jsxs(ne,{title:"java.time es inmutable — como los strings",children:[t.jsxs("p",{children:["Cada operación retorna un ",t.jsx("strong",{className:"text-text",children:"nuevo objeto"}),".",t.jsx("code",{className:"text-primary",children:"hoy.plusDays(1)"})," no modifica ",t.jsx("code",{className:"text-primary",children:"hoy"}),", retorna un nuevo LocalDate. Esto evita bugs sutiles de mutabilidad que plagan a",t.jsx("code",{className:"text-primary",children:" new Date()"})," en JavaScript."]}),t.jsxs("p",{children:["En TypeScript usas ",t.jsx("code",{className:"text-primary",children:"new Date()"})," que es mutable, tiene meses 0-indexed (enero=0), y mezcla fecha con hora sin forma de separarlas. Java tuvo el mismo problema con ",t.jsx("code",{className:"text-primary",children:"java.util.Date"}),", pero lo resolvió creando java.time — una API completamente nueva basada en la biblioteca Joda-Time."]})]}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["La API java.time separa claramente los conceptos: ",t.jsx("strong",{className:"text-text",children:"LocalDate"})," (solo fecha),",t.jsx("strong",{className:"text-text",children:" LocalTime"})," (solo hora), ",t.jsx("strong",{className:"text-text",children:"LocalDateTime"})," (fecha+hora sin zona),",t.jsx("strong",{className:"text-text",children:" ZonedDateTime"})," (fecha+hora+zona), e ",t.jsx("strong",{className:"text-text",children:"Instant"})," (momento exacto en UTC). Cada clase existe para un propósito específico."]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-6",children:[{a:"LocalDate",d:"Solo fecha (cumpleaños, fecha de factura). Sin hora ni zona."},{a:"LocalTime",d:"Solo hora (hora de alarma, horario). Sin fecha ni zona."},{a:"LocalDateTime",d:"Fecha + hora (evento local, cita). Sin zona horaria."},{a:"ZonedDateTime",d:"Fecha + hora + zona (vuelos, reuniones internacionales)."},{a:"Instant",d:"Momento en UTC (timestamps, logs, auditoría)."},{a:"Duration / Period",d:"Diferencia entre tiempos (Duration) o fechas (Period)."}].map(({a:l,d:c})=>t.jsxs("div",{className:"p-3 bg-bg-secondary rounded-lg border border-border",children:[t.jsx("code",{className:"text-primary text-sm",children:l}),t.jsx("p",{className:"text-text-muted text-xs mt-1",children:c})]},l))}),t.jsx(S,{filename:"FechasModernas.java",code:`
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class FechasModernas {
    public static void main(String[] args) {
        // LocalDate: solo fecha (sin hora)
        LocalDate hoy = LocalDate.now();
        LocalDate navidad = LocalDate.of(2025, 12, 25);
        LocalDate parsed = LocalDate.parse("2025-06-15");

        System.out.println(hoy);        // 2025-03-11
        System.out.println(hoy.getYear());     // 2025
        System.out.println(hoy.getMonth());    // MARCH
        System.out.println(hoy.getDayOfWeek()); // TUESDAY

        // LocalTime: solo hora (sin fecha)
        LocalTime ahora = LocalTime.now();
        LocalTime almuerzo = LocalTime.of(13, 30, 0);

        // LocalDateTime: fecha + hora
        LocalDateTime fechaHora = LocalDateTime.now();
        LocalDateTime especifico = LocalDateTime.of(2025, 6, 15, 14, 30);

        // ZonedDateTime: con zona horaria
        ZonedDateTime conZona = ZonedDateTime.now(ZoneId.of("America/Mexico_City"));

        // Operaciones (INMUTABLES — siempre retornan nuevo objeto)
        LocalDate manana = hoy.plusDays(1);
        LocalDate mesAntes = hoy.minusMonths(1);
        LocalDate proxAnio = hoy.plusYears(1);

        // Comparar
        System.out.println(hoy.isBefore(navidad)); // true
        System.out.println(hoy.isAfter(navidad));  // false

        // Diferencia entre fechas
        long dias = ChronoUnit.DAYS.between(hoy, navidad);
        Period periodo = Period.between(hoy, navidad);
        System.out.println(dias + " días hasta Navidad");
        System.out.println(periodo.getMonths() + " meses y " + periodo.getDays() + " días");

        // Formatear
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        String formateada = hoy.format(formato); // "11/03/2025"

        DateTimeFormatter conHora = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String completa = fechaHora.format(conHora);

        // Parsear con formato personalizado
        LocalDate desde = LocalDate.parse("15/06/2025", formato);

        // Instant: momento exacto en UTC (para timestamps)
        Instant timestamp = Instant.now();
        long epoch = timestamp.toEpochMilli();
    }
}
`}),t.jsxs(F,{type:"warning",children:["Nunca uses ",t.jsx("code",{className:"text-primary",children:"java.util.Date"})," ni ",t.jsx("code",{className:"text-primary",children:"java.util.Calendar"}),". Son APIs antiguas, mutables y confusas. Siempre usa ",t.jsx("code",{className:"text-primary",children:"java.time.*"})," (Java 8+)."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 28"}),t.jsx(K,{number:1,title:"Calculadora de edad y eventos",description:`Crea CalculadoraFechas.java que:
1. Calcule tu edad exacta en años, meses y días (usa Period)
2. Calcule cuántos días faltan para tu próximo cumpleaños
3. Calcule qué día de la semana naciste
4. Muestre la fecha formateada en español: "martes 15 de junio de 2025"`,hint:"Period.between(nacimiento, hoy), ChronoUnit.DAYS.between(), getDayOfWeek(), DateTimeFormatter.ofPattern()",solution:`import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Locale;

public class CalculadoraFechas {
    public static void main(String[] args) {
        LocalDate nacimiento = LocalDate.of(1995, 6, 15);
        LocalDate hoy = LocalDate.now();

        Period edad = Period.between(nacimiento, hoy);
        System.out.printf("Edad: %d años, %d meses, %d días%n",
            edad.getYears(), edad.getMonths(), edad.getDays());

        System.out.println("Naciste un: " + nacimiento.getDayOfWeek());

        LocalDate proxCumple = nacimiento.withYear(hoy.getYear());
        if (proxCumple.isBefore(hoy) || proxCumple.isEqual(hoy))
            proxCumple = proxCumple.plusYears(1);
        long diasFaltan = ChronoUnit.DAYS.between(hoy, proxCumple);
        System.out.println("Faltan " + diasFaltan + " días para tu cumple");

        DateTimeFormatter fmt = DateTimeFormatter
            .ofPattern("EEEE dd 'de' MMMM 'de' yyyy", new Locale("es"));
        System.out.println(hoy.format(fmt));
    }
}`,solutionFilename:"CalculadoraFechas.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-28: LocalDate, LocalDateTime, Duration, formatter"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 29"})," — Records: clases de datos inmutables con una línea."]})]})})]})}function aS(){return t.jsxs("div",{children:[t.jsx(oe,{day:29,title:"Records",duration:"40 min",commitMsg:"dia-29: records, constructor compacto, DTOs inmutables"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás Records (Java 16+) — la forma moderna de crear clases de datos inmutables con una sola línea de código. Eliminan el 90% del boilerplate que plagaba las clases Java tradicionales y son perfectos como DTOs en Spring Boot."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué problema resuelven los Records?"}),t.jsxs(ne,{title:"Record = interfaz TypeScript + constructor + equals + toString",children:[t.jsxs("p",{children:["En TypeScript defines ",t.jsx("code",{className:"text-primary",children:"interface Persona { nombre: string; edad: number; }"}),"y ya tienes un tipo con forma definida. Pero en Java, antes de los records, crear una clase de datos simple requería escribir: campos privados, constructor, getters, ",t.jsx("code",{className:"text-primary",children:"equals()"}),",",t.jsx("code",{className:"text-primary",children:" hashCode()"})," y ",t.jsx("code",{className:"text-primary",children:"toString()"})," — unas 50+ líneas de código repetitivo para 3 campos."]}),t.jsxs("p",{children:["Un ",t.jsx("code",{className:"text-primary",children:"record"})," genera TODO eso automáticamente en una línea. Los campos son",t.jsx("code",{className:"text-primary",children:" final"}),' (inmutables), los getters no llevan prefijo "get", y la igualdad se compara por contenido (no por referencia). Son ideales para DTOs, respuestas de API, objetos de valor, y cualquier dato que no cambia después de crearse.']})]}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:[t.jsx("strong",{className:"text-text",children:"¿Cuándo usar record vs clase normal?"}),' Usa record cuando tu objeto es solo un "contenedor de datos" que no cambia (inmutable). Usa clase normal cuando necesitas mutabilidad, herencia, o lógica de estado compleja.']}),t.jsx(S,{filename:"Records.java",code:`
// Un record genera automáticamente:
// - Constructor con todos los campos
// - Getters (nombre(), edad(), email())
// - equals(), hashCode(), toString()
// - Los campos son final (inmutables)

public record Persona(String nombre, int edad, String email) {}

// Equivale a escribir ~50 líneas de clase con constructor, getters, equals, etc.

public class Main {
    public static void main(String[] args) {
        Persona p = new Persona("Carlos", 25, "carlos@mail.com");

        // Getters (sin "get" prefix)
        System.out.println(p.nombre()); // "Carlos"
        System.out.println(p.edad());   // 25

        // toString automático
        System.out.println(p); // Persona[nombre=Carlos, edad=25, email=carlos@mail.com]

        // equals por contenido
        Persona p2 = new Persona("Carlos", 25, "carlos@mail.com");
        System.out.println(p.equals(p2)); // true

        // Inmutable: no hay setters
        // p.nombre = "Otro"; // ERROR: no compila
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Records avanzados"}),t.jsx(S,{filename:"RecordsAvanzados.java",code:`
// Record con validación en constructor compacto
public record Producto(String nombre, double precio) {
    // Constructor compacto (sin parámetros, se asignan solos)
    public Producto {
        if (precio < 0) throw new IllegalArgumentException("Precio negativo");
        nombre = nombre.trim(); // puedes modificar ANTES de la asignación
    }
}

// Record con métodos adicionales
public record Punto(double x, double y) {
    public double distanciaAlOrigen() {
        return Math.sqrt(x * x + y * y);
    }

    // Método estático factory
    public static Punto origen() {
        return new Punto(0, 0);
    }
}

// Record que implementa interfaz
public record Rango(int min, int max) implements Comparable<Rango> {
    @Override
    public int compareTo(Rango otro) {
        return Integer.compare(this.min, otro.min);
    }
}
`}),t.jsx(F,{type:"angular",children:"Los records de Java son similares a las interfaces de TypeScript para definir formas de datos, pero son clases reales con constructor, igualdad por valor y toString. En Angular usarías una interfaz o clase — en Java moderno, usa records para DTOs y objetos de valor."})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 29"}),t.jsx(K,{number:1,title:"Sistema de pedidos con Records",description:`Crea un mini sistema de pedidos:
1. record Producto(String nombre, double precio)
2. record LineaPedido(Producto producto, int cantidad) con método subtotal()
3. record Pedido(String cliente, List<LineaPedido> lineas) con métodos total() y resumen()
4. En main: crea un pedido con 3 productos y muestra el resumen`,hint:"En el record Pedido: public double total() { return lineas.stream().mapToDouble(LineaPedido::subtotal).sum(); }",solution:`import java.util.List;

public class SistemaPedidos {
    record Producto(String nombre, double precio) {}

    record LineaPedido(Producto producto, int cantidad) {
        public double subtotal() { return producto.precio() * cantidad; }
    }

    record Pedido(String cliente, List<LineaPedido> lineas) {
        public double total() {
            return lineas.stream().mapToDouble(LineaPedido::subtotal).sum();
        }
        public String resumen() {
            var sb = new StringBuilder("Pedido de " + cliente + ":\\n");
            lineas.forEach(l -> sb.append(String.format(
                "  %s x%d = $%.2f%n", l.producto().nombre(), l.cantidad(), l.subtotal())));
            sb.append(String.format("  TOTAL: $%.2f", total()));
            return sb.toString();
        }
    }

    public static void main(String[] args) {
        var p = new Pedido("Carlos", List.of(
            new LineaPedido(new Producto("Laptop", 1200), 1),
            new LineaPedido(new Producto("Mouse", 25), 2),
            new LineaPedido(new Producto("Monitor", 450), 1)
        ));
        System.out.println(p.resumen());
    }
}`,solutionFilename:"SistemaPedidos.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-29: records, constructor compacto, DTOs inmutables"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 30"})," — Sealed Classes: controlar la herencia."]})]})})]})}function tS(){return t.jsxs("div",{children:[t.jsx(oe,{day:30,title:"Sealed Classes",duration:"40 min",commitMsg:"dia-30: sealed classes, permits, exhaustive switch"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás Sealed Classes (Java 17) — una forma de declarar exactamente qué clases pueden heredar de otra. Combinadas con records y pattern matching, permiten modelar dominios complejos con seguridad de tipos que el compilador puede verificar exhaustivamente."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué son y por qué existen?"}),t.jsxs(ne,{title:"Sealed = union types de TypeScript en Java",children:[t.jsxs("p",{children:["En TypeScript puedes definir: ",t.jsx("code",{className:"text-primary",children:"type Resultado = Exito | Error | Pendiente"}),". El compilador sabe que solo existen esos 3 tipos posibles. Si haces un switch/if, TypeScript te avisa si no cubres todos los casos."]}),t.jsxs("p",{children:["En Java 17+, ",t.jsx("code",{className:"text-primary",children:"sealed interface Resultado permits Exito, Error, Pendiente"}),"logra exactamente lo mismo. El compilador sabe que solo esas 3 clases implementan Resultado, y en un switch con pattern matching te obliga a cubrir TODOS los casos o poner un default."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"¿Cuándo usarlas?"})," Cuando tienes una jerarquía CERRADA: estados de un proceso (Pendiente/Aprobado/Rechazado), tipos de pago (Tarjeta/Efectivo/Transferencia), nodos de un AST, resultados de operaciones (Ok/Error). Si alguien más pudiera necesitar extender la clase, NO la hagas sealed."]})]}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Una ",t.jsx("strong",{className:"text-text",children:"sealed class/interface"})," restringe qué clases pueden extenderla o implementarla. Solo las clases explícitamente listadas en ",t.jsx("code",{className:"text-primary",children:"permits"}),"tienen permiso de heredar. Cada subclase debe ser ",t.jsx("code",{className:"text-primary",children:"final"})," (no se puede extender más), ",t.jsx("code",{className:"text-primary",children:"sealed"})," (restringida también), o",t.jsx("code",{className:"text-primary",children:" non-sealed"})," (abierta a extensión)."]}),t.jsx(S,{filename:"SealedClasses.java",code:`
// Solo Circulo, Rectangulo y Triangulo pueden extender Figura
public sealed class Figura permits Circulo, Rectangulo, Triangulo {
    protected String color;
    public Figura(String color) { this.color = color; }
}

// final: no puede ser extendida más
public final class Circulo extends Figura {
    private double radio;
    public Circulo(String color, double radio) {
        super(color);
        this.radio = radio;
    }
}

// non-sealed: abierta a extensión libre
public non-sealed class Rectangulo extends Figura {
    private double ancho, alto;
    public Rectangulo(String color, double ancho, double alto) {
        super(color);
        this.ancho = ancho;
        this.alto = alto;
    }
}

// sealed: puede restringir sus propias subclases
public sealed class Triangulo extends Figura permits TrianguloEquilatero {
    public Triangulo(String color) { super(color); }
}

public final class TrianguloEquilatero extends Triangulo {
    public TrianguloEquilatero(String color) { super(color); }
}

// Otra clase NO puede extender Figura:
// public class Pentagono extends Figura {} // ERROR: no está en permits
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Sealed interfaces y records"}),t.jsx(S,{filename:"SealedInterface.java",code:`
// Sealed interfaces funcionan igual
public sealed interface Resultado permits Exito, Error, Pendiente {}

public record Exito(String valor) implements Resultado {}
public record Error(String mensaje) implements Resultado {}
public record Pendiente() implements Resultado {}

// Perfecto para pattern matching exhaustivo
public class Main {
    static String procesar(Resultado r) {
        return switch (r) {
            case Exito e -> "OK: " + e.valor();
            case Error e -> "ERROR: " + e.mensaje();
            case Pendiente p -> "Esperando...";
            // No necesita default: el compilador sabe que cubriste todos los casos
        };
    }
}
`}),t.jsx(F,{type:"tip",children:"Sealed classes + records + pattern matching = una combinación poderosa para modelar dominios cerrados donde sabes exactamente qué tipos existen. El compilador verifica exhaustividad."})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 30"}),t.jsx(K,{number:1,title:"Resultado de operación con Sealed",description:`Modela un sistema de respuestas HTTP:
1. sealed interface Respuesta permits Ok, ClientError, ServerError
2. record Ok(String body) implements Respuesta
3. record ClientError(int codigo, String mensaje) implements Respuesta
4. record ServerError(String excepcion) implements Respuesta
5. Método String procesar(Respuesta r) con switch exhaustivo
6. Prueba con los 3 tipos en main`,hint:"return switch (r) { case Ok ok -> ...; case ClientError ce -> ...; case ServerError se -> ...; };",solution:`public class SistemaHTTP {
    sealed interface Respuesta permits Ok, ClientError, ServerError {}
    record Ok(String body) implements Respuesta {}
    record ClientError(int codigo, String mensaje) implements Respuesta {}
    record ServerError(String excepcion) implements Respuesta {}

    static String procesar(Respuesta r) {
        return switch (r) {
            case Ok ok -> "200 OK: " + ok.body();
            case ClientError ce -> ce.codigo() + " " + ce.mensaje();
            case ServerError se -> "500 Internal: " + se.excepcion();
        };
    }

    public static void main(String[] args) {
        System.out.println(procesar(new Ok("{\\"user\\":\\"Carlos\\"}")));
        System.out.println(procesar(new ClientError(404, "Not Found")));
        System.out.println(procesar(new ServerError("NullPointerException")));
    }
}`,solutionFilename:"SistemaHTTP.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-30: sealed classes, permits, exhaustive switch"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 31"})," — Pattern Matching: instanceof y switch modernos."]})]})})]})}function nS(){return t.jsxs("div",{children:[t.jsx(oe,{day:31,title:"Pattern Matching",duration:"45 min",commitMsg:"dia-31: pattern matching instanceof, switch, guards"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy dominarás Pattern Matching — una característica que permite verificar el tipo de un objeto, extraer sus datos, y usar esa información en una sola expresión compacta. Combinado con sealed classes y records, el compilador puede verificar que cubras todos los casos posibles."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"instanceof con Pattern Matching (Java 16+)"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Pattern Matching elimina el código repetitivo de verificar tipo + hacer cast. En Java clásico, necesitabas 3 líneas para verificar si un Object es String y usarlo. Con pattern matching, lo haces en una sola expresión segura y legible."}),t.jsxs(ne,{title:"Pattern Matching = smart cast de Kotlin / narrowing de TypeScript",children:[t.jsxs("p",{children:["En TypeScript, cuando haces ",t.jsx("code",{className:"text-primary",children:'if (typeof x === "string")'})," dentro del bloque if, TypeScript sabe que x es string (type narrowing). En Java 16+, pattern matching hace lo mismo: ",t.jsx("code",{className:"text-primary",children:"if (obj instanceof String s)"})," verifica el tipo Y crea la variable ",t.jsx("code",{className:"text-primary",children:"s"})," ya tipada como String en el mismo paso."]}),t.jsxs("p",{children:["Con el switch mejorado de Java 21, puedes hacer pattern matching sobre sealed classes y records, descomponiendo sus campos directamente. El compilador verifica que tu switch sea ",t.jsx("strong",{className:"text-text",children:"exhaustivo"})," — que cubra todos los subtipos posibles. Si agregas un nuevo subtipo, te obliga a manejar ese caso."]})]}),t.jsx(S,{filename:"PatternInstanceof.java",code:`
public class PatternInstanceof {
    static void procesar(Object obj) {
        // ANTES (verbose)
        if (obj instanceof String) {
            String s = (String) obj;
            System.out.println("String de longitud: " + s.length());
        }

        // AHORA (Java 16+): cast automático
        if (obj instanceof String s) {
            System.out.println("String de longitud: " + s.length());
        }

        // Con negación
        if (!(obj instanceof String s)) {
            System.out.println("No es String");
            return;
        }
        // s está disponible aquí
        System.out.println(s.toUpperCase());

        // Con && (la variable está en scope si la condición es true)
        if (obj instanceof String s && s.length() > 5) {
            System.out.println("String largo: " + s);
        }
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Switch con Pattern Matching (Java 21+)"}),t.jsx(S,{filename:"PatternSwitch.java",code:`
public class PatternSwitch {
    // Con sealed classes/records
    sealed interface Forma permits Circulo, Rectangulo, Triangulo {}
    record Circulo(double radio) implements Forma {}
    record Rectangulo(double ancho, double alto) implements Forma {}
    record Triangulo(double base, double altura) implements Forma {}

    static double area(Forma forma) {
        return switch (forma) {
            case Circulo c -> Math.PI * c.radio() * c.radio();
            case Rectangulo r -> r.ancho() * r.alto();
            case Triangulo t -> t.base() * t.altura() / 2;
            // No necesita default: sealed + exhaustivo
        };
    }

    // Con guardas (when)
    static String clasificar(Object obj) {
        return switch (obj) {
            case Integer i when i < 0 -> "Negativo: " + i;
            case Integer i when i == 0 -> "Cero";
            case Integer i -> "Positivo: " + i;
            case String s when s.isEmpty() -> "String vacío";
            case String s -> "String: " + s;
            case null -> "Nulo";
            default -> "Otro tipo: " + obj.getClass().getSimpleName();
        };
    }

    public static void main(String[] args) {
        System.out.println(area(new Circulo(5)));         // 78.54
        System.out.println(area(new Rectangulo(4, 6)));   // 24.0
        System.out.println(clasificar(-5));               // "Negativo: -5"
        System.out.println(clasificar("Hola"));           // "String: Hola"
        System.out.println(clasificar(null));              // "Nulo"
    }
}
`}),t.jsx(F,{type:"tip",children:"Pattern matching + sealed classes + records es la combinación más poderosa de Java moderno. Permite modelar dominios de forma segura donde el compilador verifica que cubres todos los casos."})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 31"}),t.jsx(K,{number:1,title:"Evaluador de expresiones",description:`Modela expresiones matemáticas con sealed + records + pattern matching:
1. sealed interface Expr permits Num, Suma, Mult, Neg
2. record Num(double valor) implements Expr
3. record Suma(Expr izq, Expr der) implements Expr
4. record Mult(Expr izq, Expr der) implements Expr
5. record Neg(Expr expr) implements Expr
6. Método double evaluar(Expr e) con switch recursivo
7. Prueba: evaluar(new Suma(new Num(3), new Mult(new Num(2), new Num(5))))`,hint:"case Suma(var i, var d) -> evaluar(i) + evaluar(d); (usa deconstructing patterns si Java 21)",solution:`public class Evaluador {
    sealed interface Expr permits Num, Suma, Mult, Neg {}
    record Num(double valor) implements Expr {}
    record Suma(Expr izq, Expr der) implements Expr {}
    record Mult(Expr izq, Expr der) implements Expr {}
    record Neg(Expr expr) implements Expr {}

    static double evaluar(Expr e) {
        return switch (e) {
            case Num n -> n.valor();
            case Suma s -> evaluar(s.izq()) + evaluar(s.der());
            case Mult m -> evaluar(m.izq()) * evaluar(m.der());
            case Neg n -> -evaluar(n.expr());
        };
    }

    public static void main(String[] args) {
        // 3 + (2 * 5) = 13
        Expr expr = new Suma(new Num(3), new Mult(new Num(2), new Num(5)));
        System.out.println(evaluar(expr)); // 13.0

        // -(4 + 6) = -10
        Expr neg = new Neg(new Suma(new Num(4), new Num(6)));
        System.out.println(evaluar(neg)); // -10.0
    }
}`,solutionFilename:"Evaluador.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-31: pattern matching instanceof, switch, guards"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 32"})," — Patrones de diseño esenciales."]})]})})]})}function rS(){return t.jsxs("div",{children:[t.jsx(oe,{day:32,title:"Patrones de Diseño",duration:"55 min",commitMsg:"dia-32: singleton, builder, strategy, observer"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy aprenderás los patrones de diseño más usados en Java empresarial. Los patrones de diseño son soluciones probadas a problemas recurrentes en el diseño de software. No son código que copias, sino ",t.jsx("strong",{className:"text-text",children:"recetas mentales"})," para resolver problemas de forma elegante y mantenible."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Singleton — Una sola instancia global"}),t.jsxs(ne,{title:"Spring Boot YA usa todos estos patrones por ti",children:[t.jsxs("p",{children:["No necesitas implementar Singleton manualmente — Spring lo hace con ",t.jsx("code",{className:"text-primary",children:"@Service"})," (scope singleton por defecto). No necesitas implementar Strategy manualmente — Spring lo hace con múltiples ",t.jsx("code",{className:"text-primary",children:"@Service"})," que implementan la misma interfaz + ",t.jsx("code",{className:"text-primary",children:"@Qualifier"}),". No necesitas Observer — Spring tiene",t.jsx("code",{className:"text-primary",children:" ApplicationEventPublisher"}),"."]}),t.jsxs("p",{children:["Entonces, ¿por qué aprenderlos? Porque ",t.jsx("strong",{className:"text-text",children:"entender los patrones te permite entender cómo funciona Spring internamente"}),". Cuando ves ",t.jsx("code",{className:"text-primary",children:"@Bean"})," sabes que es una Factory. Cuando ves filtros de seguridad encadenados, sabes que es Chain of Responsibility. Cuando ves ",t.jsx("code",{className:"text-primary",children:"ResponseEntity.ok().body()"}),", sabes que es un Builder."]})]}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["El patrón ",t.jsx("strong",{className:"text-text",children:"Singleton"})," garantiza que solo exista UNA instancia de una clase en toda la aplicación y provee un punto de acceso global. Útil para conexiones de BD, caches, y configuración."]}),t.jsx(S,{filename:"Singleton.java",code:`
public class DatabaseConnection {
    private static volatile DatabaseConnection instance;
    private String url;

    private DatabaseConnection() { // constructor privado
        this.url = "jdbc:mysql://localhost:3306/mydb";
    }

    public static DatabaseConnection getInstance() {
        if (instance == null) {
            synchronized (DatabaseConnection.class) {
                if (instance == null) {
                    instance = new DatabaseConnection();
                }
            }
        }
        return instance;
    }
}
// En Spring Boot: @Service, @Component ya son singletons por defecto
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Builder — Construir objetos complejos paso a paso"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["El patrón ",t.jsx("strong",{className:"text-text",children:"Builder"})," resuelve el problema de constructores con muchos parámetros. Imagina un objeto con 8 campos donde solo 2 son obligatorios — ¿creas un constructor con 8 parámetros? ¿Usas setters y pierdes inmutabilidad? Builder te permite construir el objeto paso a paso con una API fluida (encadenando métodos), manteniendo el objeto final inmutable."]}),t.jsx(S,{filename:"Builder.java",code:`
public class Usuario {
    private final String nombre;
    private final String email;
    private final int edad;
    private final String telefono;

    private Usuario(Builder builder) {
        this.nombre = builder.nombre;
        this.email = builder.email;
        this.edad = builder.edad;
        this.telefono = builder.telefono;
    }

    public static class Builder {
        private final String nombre; // obligatorio
        private String email = "";
        private int edad = 0;
        private String telefono = "";

        public Builder(String nombre) { this.nombre = nombre; }
        public Builder email(String email) { this.email = email; return this; }
        public Builder edad(int edad) { this.edad = edad; return this; }
        public Builder telefono(String tel) { this.telefono = tel; return this; }
        public Usuario build() { return new Usuario(this); }
    }
}

// Uso fluido
Usuario u = new Usuario.Builder("Carlos")
    .email("carlos@mail.com")
    .edad(25)
    .build();
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Strategy — Cambiar algoritmo en tiempo de ejecución"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["El patrón ",t.jsx("strong",{className:"text-text",children:"Strategy"})," encapsula diferentes algoritmos detrás de una misma interfaz, permitiendo intercambiarlos sin modificar el código que los usa. En vez de un gigante ",t.jsx("code",{className:"text-primary",children:"if/else"})," o ",t.jsx("code",{className:"text-primary",children:"switch"})," para decidir qué hacer, delegas la decisión a un objeto Strategy que puedes cambiar dinámicamente. Con lambdas de Java 8+, las strategies se vuelven aún más concisas."]}),t.jsx(S,{filename:"Strategy.java",code:`
// Interfaz de estrategia
public interface OrdenStrategy {
    double calcularPrecio(double precioBase);
}

// Implementaciones
public class PrecioNormal implements OrdenStrategy {
    public double calcularPrecio(double precioBase) { return precioBase; }
}

public class DescuentoVIP implements OrdenStrategy {
    public double calcularPrecio(double precioBase) { return precioBase * 0.8; }
}

// Contexto
public class CarritoCompras {
    private OrdenStrategy strategy;

    public void setStrategy(OrdenStrategy strategy) { this.strategy = strategy; }

    public double calcularTotal(double precioBase) {
        return strategy.calcularPrecio(precioBase);
    }
}

// Con lambdas (más moderno)
OrdenStrategy blackFriday = precio -> precio * 0.5;
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Observer — Notificar cambios a múltiples interesados"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["El patrón ",t.jsx("strong",{className:"text-text",children:"Observer"}),' define una relación de uno-a-muchos: cuando un objeto cambia de estado, notifica automáticamente a todos sus "suscriptores". Es el mismo concepto que los ',t.jsx("code",{className:"text-primary",children:"EventEmitter"})," de Angular o los ",t.jsx("code",{className:"text-primary",children:"Subject"}),"de RxJS — un emisor con múltiples listeners que reaccionan a eventos."]}),t.jsx(S,{filename:"Observer.java",code:`
import java.util.ArrayList;
import java.util.List;

public interface EventListener {
    void onEvent(String evento);
}

public class EventManager {
    private List<EventListener> listeners = new ArrayList<>();

    public void subscribe(EventListener listener) { listeners.add(listener); }
    public void unsubscribe(EventListener listener) { listeners.remove(listener); }

    public void notify(String evento) {
        for (EventListener listener : listeners) {
            listener.onEvent(evento);
        }
    }
}

// Uso
EventManager manager = new EventManager();
manager.subscribe(e -> System.out.println("Logger: " + e));
manager.subscribe(e -> System.out.println("Email: " + e));
manager.notify("Usuario creado"); // ambos listeners reciben el evento
`}),t.jsxs(F,{type:"spring",children:["Spring Boot usa estos patrones internamente: ",t.jsx("strong",{children:"Singleton"})," (beans),",t.jsx("strong",{children:" Strategy"})," (múltiples implementaciones de interfaz + @Qualifier),",t.jsx("strong",{children:" Observer"})," (ApplicationEventPublisher), ",t.jsx("strong",{children:"Dependency Injection"})," en todo."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 32"}),t.jsx(K,{number:1,title:"Sistema de descuentos con Strategy",description:`Crea un sistema de descuentos usando el patrón Strategy:
1. Interface DescuentoStrategy con método double aplicar(double precio)
2. SinDescuento, Descuento10, DescuentoBlackFriday (50%), DescuentoPorMonto (>100 = 15%)
3. Clase Carrito que reciba una strategy y calcule el total
4. En main: prueba cambiando la strategy dinámicamente`,hint:"Puedes usar lambdas en lugar de clases: DescuentoStrategy bf = precio -> precio * 0.5;",solution:`import java.util.*;

public class SistemaDescuentos {
    interface DescuentoStrategy {
        double aplicar(double precio);
    }

    static class Carrito {
        private List<Double> precios = new ArrayList<>();
        private DescuentoStrategy strategy = p -> p; // sin descuento

        void agregar(double precio) { precios.add(precio); }
        void setStrategy(DescuentoStrategy s) { this.strategy = s; }

        double total() {
            return precios.stream()
                .mapToDouble(strategy::aplicar).sum();
        }
    }

    public static void main(String[] args) {
        Carrito c = new Carrito();
        c.agregar(100); c.agregar(200); c.agregar(50);

        System.out.printf("Normal: $%.2f%n", c.total());

        c.setStrategy(p -> p * 0.9);
        System.out.printf("10%% off: $%.2f%n", c.total());

        c.setStrategy(p -> p > 100 ? p * 0.85 : p);
        System.out.printf("15%% >100: $%.2f%n", c.total());
    }
}`,solutionFilename:"SistemaDescuentos.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-32: patrones singleton, builder, strategy, observer"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 33"})," — Text Blocks, var y novedades del lenguaje."]})]})})]})}function iS(){return t.jsxs("div",{children:[t.jsx(oe,{day:34,title:"Introducción a Spring Boot",duration:"45 min",commitMsg:"dia-34: intro Spring Boot, IoC, DI, arquitectura"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy empiezas Spring Boot — el framework más usado en Java empresarial. Si vienes de Angular, te sentirás como en casa: DI, servicios, módulos."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es Spring Boot?"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:[t.jsx("strong",{className:"text-text",children:"Spring Boot"})," es un framework de Java que te permite crear aplicaciones backend (APIs REST, microservicios, aplicaciones web) con mínima configuración. Está construido sobre el ecosistema Spring Framework y automatiza todo lo tedioso: configurar servidores, conectar bases de datos, manejar seguridad, serializar JSON, etc."]}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Sin Spring Boot, necesitarías configurar manualmente un servidor Tomcat, definir archivos XML de configuración, y escribir cientos de líneas de boilerplate. Con Spring Boot, una sola anotación y un archivo de propiedades son suficientes para tener una API REST funcionando con conexión a base de datos."}),t.jsxs(F,{type:"spring",title:"Spring Framework vs Spring Boot — ¿Cuál es la diferencia?",children:[t.jsx("strong",{children:"Spring Framework"})," es el ecosistema completo de bibliotecas: IoC container, AOP, Spring MVC, Spring Data, Spring Security, Spring Cloud, etc. Es enorme y flexible, pero requiere mucha configuración manual.",t.jsx("strong",{children:" Spring Boot"}),' es una capa de conveniencia que autoconfigura Spring Framework con "opiniones sensatas" (defaults inteligentes). Piensa en Spring como Angular y Spring Boot como Angular CLI + Schematics — te da estructura, convenciones y código generado para que arranques en minutos.']})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Los 3 pilares: IoC, DI y Autoconfiguración"}),t.jsxs(ne,{title:"Spring Boot = Angular para el backend",children:[t.jsxs("p",{children:["Si ya conoces Angular, Spring Boot es su equivalente backend. Angular tiene: DI con constructores, servicios singleton con ",t.jsx("code",{className:"text-primary",children:"@Injectable()"}),", módulos de configuración, interceptores HTTP, guards para rutas, y Angular CLI para generar código."]}),t.jsxs("p",{children:["Spring Boot tiene: DI con constructores, servicios singleton con ",t.jsx("code",{className:"text-primary",children:"@Service"}),", clases de configuración con ",t.jsx("code",{className:"text-primary",children:"@Configuration"}),", filtros para peticiones, Spring Security para proteger endpoints, y Spring Initializr para generar proyectos. La transición mental es casi directa."]})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[t.jsx("h3",{className:"font-bold text-text mb-2",children:'1. Inversión de Control (IoC) — "No llames, yo te llamo"'}),t.jsxs("p",{className:"text-text-muted text-sm mb-2",children:["En programación tradicional, TÚ creas objetos con ",t.jsx("code",{className:"text-primary",children:"new MiServicio()"}),". Con IoC, el ",t.jsx("strong",{className:"text-text",children:"contenedor de Spring"}),' crea los objetos por ti y los gestiona. Tú solo dices "necesito un UsuarioService" y Spring te lo da ya creado y configurado.']}),t.jsxs("p",{className:"text-text-muted text-sm",children:["Los objetos gestionados por Spring se llaman ",t.jsx("strong",{className:"text-text",children:"beans"}),". Spring los crea al arrancar la aplicación, los guarda en su contenedor (ApplicationContext), y los destruye cuando la app se detiene. Por defecto, cada bean es ",t.jsx("strong",{className:"text-text",children:"singleton"})," — solo existe una instancia compartida."]})]}),t.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[t.jsx("h3",{className:"font-bold text-text mb-2",children:'2. Inyección de Dependencias (DI) — "Te paso lo que necesitas"'}),t.jsxs("p",{className:"text-text-muted text-sm mb-2",children:["Cuando tu clase necesita otra clase para funcionar (ej: un Controller necesita un Service), Spring detecta esa dependencia y la ",t.jsx("strong",{className:"text-text",children:"inyecta automáticamente"})," por el constructor. No necesitas buscarla ni crearla — Spring la pone ahí."]}),t.jsxs("p",{className:"text-text-muted text-sm",children:["Esto es idéntico a Angular: cuando pones ",t.jsx("code",{className:"text-primary",children:"constructor(private userService: UserService)"}),"en un componente, Angular inyecta el servicio. En Spring:",t.jsx("code",{className:"text-primary",children:" public MiController(MiService service)"})," hace lo mismo."]})]}),t.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[t.jsx("h3",{className:"font-bold text-text mb-2",children:'3. Autoconfiguración — "Adivino qué necesitas"'}),t.jsxs("p",{className:"text-text-muted text-sm mb-2",children:["Spring Boot escanea las dependencias de tu ",t.jsx("code",{className:"text-primary",children:"pom.xml"})," y configura beans automáticamente. Si detecta ",t.jsx("code",{className:"text-primary",children:"spring-boot-starter-data-jpa"})," + un driver H2, crea automáticamente un DataSource, un EntityManager, y habilita repositorios JPA."]}),t.jsxs("p",{className:"text-text-muted text-sm",children:["Si detecta ",t.jsx("code",{className:"text-primary",children:"spring-boot-starter-web"}),", arranca un servidor Tomcat embebido en el puerto 8080. Si detecta ",t.jsx("code",{className:"text-primary",children:"spring-boot-starter-security"}),", protege todos los endpoints con autenticación básica. Todo sin que escribas una línea de configuración."]})]})]}),t.jsx(S,{filename:"Ejemplo: DI en acción",code:`
// Spring crea este bean automáticamente por la anotación @Service
@Service
public class UsuarioService {
    private final UsuarioRepository repository;

    // Spring ve que necesitas un UsuarioRepository y lo inyecta aquí
    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    public List<Usuario> listarTodos() {
        return repository.findAll();
    }
}

// El Controller recibe el Service inyectado
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
    private final UsuarioService service;

    // Spring inyecta el UsuarioService automáticamente
    public UsuarioController(UsuarioService service) {
        this.service = service;
    }

    @GetMapping
    public List<Usuario> listar() {
        return service.listarTodos();
    }
}
`}),t.jsxs(F,{type:"tip",title:"¿Cómo sabe Spring qué inyectar?",children:["Spring busca en su contenedor un bean cuyo tipo coincida con el parámetro del constructor. Si tu constructor pide un ",t.jsx("code",{className:"text-primary",children:"UsuarioService"}),", Spring busca un bean de tipo UsuarioService. Si encuentra exactamente uno, lo inyecta. Si hay varios del mismo tipo, necesitas ",t.jsx("code",{className:"text-primary",children:"@Primary"})," o ",t.jsx("code",{className:"text-primary",children:"@Qualifier"})," para desambiguar."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Arquitectura típica"}),t.jsx(S,{language:"bash",filename:"Estructura del proyecto",code:`
src/main/java/com/miapp/
├── MiAppApplication.java      # Punto de entrada (@SpringBootApplication)
├── controller/                 # Recibe peticiones HTTP (como Angular components)
│   └── UsuarioController.java
├── service/                    # Lógica de negocio (como Angular services)
│   └── UsuarioService.java
├── repository/                 # Acceso a datos (como Angular HttpClient)
│   └── UsuarioRepository.java
├── model/                      # Entidades/DTOs (como Angular interfaces/models)
│   └── Usuario.java
└── config/                     # Configuración personalizada
    └── SecurityConfig.java

src/main/resources/
├── application.properties      # Configuración (puerto, BD, etc.)
└── static/                     # Archivos estáticos
`}),t.jsxs(F,{type:"angular",children:["La arquitectura de Spring Boot es muy similar a Angular: ",t.jsx("strong",{children:"Controller"})," = Component (recibe input),",t.jsx("strong",{children:" Service"})," = Service (lógica), ",t.jsx("strong",{children:"Repository"})," = HttpClient (datos),",t.jsx("strong",{children:" Model"})," = Interface/Class (tipos)."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 34"}),t.jsx(K,{number:1,title:"Mapear la arquitectura Angular → Spring",description:`Sin código, responde mentalmente:
1. ¿Qué capa de Spring corresponde a un Angular Component?
2. ¿Qué capa corresponde a un Angular Service?
3. ¿Qué capa corresponde a HttpClient?
4. ¿Qué archivo equivale a package.json?
5. ¿Qué anotación equivale a @Injectable()?`,hint:"Controller = Component, Service = Service, Repository = HttpClient, pom.xml = package.json",solution:`Respuestas:
1. @RestController = Angular Component (recibe input del usuario/HTTP)
2. @Service = Angular Service (lógica de negocio)
3. @Repository = HttpClient (acceso a datos/BD)
4. pom.xml (Maven) = package.json (npm)
5. @Service / @Component = @Injectable()

Bonus: application.properties = environment.ts
        @Configuration = AppModule
        Spring Security = Route Guards`,solutionFilename:"respuestas.txt"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-34: intro Spring Boot, IoC, DI, arquitectura"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 35"})," — Setup: crear proyecto con Spring Initializr."]})]})})]})}function sS(){return t.jsxs("div",{children:[t.jsx(oe,{day:35,title:"Setup del Proyecto",duration:"50 min",commitMsg:"dia-35: spring initializr, pom.xml, application.properties"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy crearás tu primer proyecto Spring Boot desde cero. Usarás Spring Initializr para generar la estructura, entenderás qué es ",t.jsx("code",{className:"text-primary",children:"pom.xml"})," (tu package.json de Java), y configurarás ",t.jsx("code",{className:"text-primary",children:"application.properties"})," (tu environment.ts)."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Spring Initializr — El generador de proyectos"}),t.jsxs(ne,{title:"start.spring.io = ng new para Java",children:[t.jsxs("p",{children:["Así como ",t.jsx("code",{className:"text-primary",children:"ng new mi-app"})," genera un proyecto Angular completo con estructura de carpetas, dependencias y configuración, ",t.jsx("strong",{className:"text-text",children:"Spring Initializr"}),"(start.spring.io) genera un proyecto Spring Boot con Maven/Gradle, dependencias configuradas, clase principal y archivos de configuración. Solo eliges qué necesitas y descargas un ZIP."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Maven"})," es el gestor de dependencias más usado en Java (como npm). El archivo ",t.jsx("code",{className:"text-primary",children:"pom.xml"})," es tu ",t.jsx("code",{className:"text-primary",children:"package.json"}),': lista las dependencias (starters), versiones, y plugins de build. Los "starters" son paquetes preconfigurados: ',t.jsx("code",{className:"text-primary",children:"spring-boot-starter-web"})," incluye Tomcat + Spring MVC + Jackson,",t.jsx("code",{className:"text-primary",children:" spring-boot-starter-data-jpa"})," incluye Hibernate + DataSource."]})]}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Ve a ",t.jsx("strong",{className:"text-text",children:"start.spring.io"})," y configura tu proyecto:"]}),t.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-2 mb-4",children:[t.jsxs("li",{children:[t.jsx("strong",{className:"text-text",children:"Project:"})," Maven o Gradle"]}),t.jsxs("li",{children:[t.jsx("strong",{className:"text-text",children:"Language:"})," Java"]}),t.jsxs("li",{children:[t.jsx("strong",{className:"text-text",children:"Spring Boot:"})," última versión estable (3.x)"]}),t.jsxs("li",{children:[t.jsx("strong",{className:"text-text",children:"Java:"})," 21 (LTS recomendado)"]}),t.jsxs("li",{children:[t.jsx("strong",{className:"text-text",children:"Dependencies:"})," Spring Web, Spring Data JPA, H2 Database, Lombok"]})]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Clase principal"}),t.jsx(S,{filename:"MiAppApplication.java",code:`
package com.miapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication  // Combina @Configuration + @EnableAutoConfiguration + @ComponentScan
public class MiAppApplication {
    public static void main(String[] args) {
        SpringApplication.run(MiAppApplication.class, args);
    }
}
// Ejecutar: ./mvnw spring-boot:run
// O desde IDE: Run MiAppApplication.main()
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"application.properties"}),t.jsx(S,{language:"bash",filename:"src/main/resources/application.properties",code:`
# Puerto del servidor
server.port=8080

# Base de datos H2 (en memoria, para desarrollo)
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# JPA / Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# Consola H2 (acceder en http://localhost:8080/h2-console)
spring.h2.console.enabled=true
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"pom.xml (dependencias Maven)"}),t.jsx(S,{language:"markup",filename:"pom.xml (fragmento)",code:`
<dependencies>
    <!-- Spring Web: REST APIs -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- Spring Data JPA: acceso a BD -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>

    <!-- H2: BD en memoria para desarrollo -->
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>

    <!-- Lombok: reduce boilerplate -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>

    <!-- Test -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
`}),t.jsxs(F,{type:"angular",children:["El ",t.jsx("code",{className:"text-primary",children:"pom.xml"})," de Maven es como el ",t.jsx("code",{className:"text-primary",children:"package.json"})," de npm. Las dependencias se descargan del repositorio central de Maven (como npmjs.com)."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 35"}),t.jsx(K,{number:1,title:"Tu primer Hello World en Spring Boot",description:`1. Ve a start.spring.io y genera un proyecto con Spring Web
2. Importa en IntelliJ
3. Crea HolaController.java en el paquete controller
4. Agrega @RestController y un @GetMapping("/hola") que retorne "Hola Spring Boot!"
5. Ejecuta y visita http://localhost:8080/hola`,hint:'@GetMapping("/hola") public String hola() { return "Hola Spring Boot!"; }',solution:`package com.miapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaController {

    @GetMapping("/hola")
    public String hola() {
        return "Hola Spring Boot!";
    }

    @GetMapping("/fecha")
    public String fecha() {
        return "Hoy es: " + java.time.LocalDate.now();
    }
}`,solutionFilename:"HolaController.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-35: setup Spring Boot, primer endpoint /hola"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 36"})," — Anotaciones de Spring: el lenguaje del framework."]})]})})]})}function lS(){return t.jsxs("div",{children:[t.jsx(oe,{day:36,title:"Anotaciones de Spring",duration:"50 min",commitMsg:"dia-36: @Component, @Service, @RestController, DI, JPA annotations"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:'Hoy aprenderás las anotaciones esenciales de Spring — los "decoradores" que le dicen al framework cómo tratar cada clase, método y campo. Sin anotaciones, Spring no sabe que tu clase existe. Con ellas, Spring la detecta, la instancia, la inyecta y la configura automáticamente.'}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué son las anotaciones en Spring?"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Una ",t.jsx("strong",{className:"text-text",children:"anotación"})," es metadatos que agregas con ",t.jsx("code",{className:"text-primary",children:"@"}),'encima de una clase, método o campo. Spring escanea tu código al arrancar, encuentra estas anotaciones, y actúa según lo que indican: crear un bean, mapear una URL, inyectar una dependencia, definir una transacción, etc. Son el "lenguaje" con el que te comunicas con el framework.']}),t.jsxs(ne,{title:"Anotaciones = decoradores de Angular (mismo concepto)",children:[t.jsxs("p",{children:["En Angular usas ",t.jsx("code",{className:"text-primary",children:"@Component()"}),", ",t.jsx("code",{className:"text-primary",children:"@Injectable()"}),",",t.jsx("code",{className:"text-primary",children:" @Input()"}),". Angular lee estos decoradores y sabe qué hacer con cada clase. En Spring es idéntico: ",t.jsx("code",{className:"text-primary",children:"@Service"}),",",t.jsx("code",{className:"text-primary",children:" @RestController"}),", ",t.jsx("code",{className:"text-primary",children:"@GetMapping"}),"le dicen a Spring el rol y comportamiento de cada pieza."]}),t.jsxs("p",{children:["La diferencia: en Angular los decoradores modifican la clase en tiempo de compilación (TypeScript). En Spring, las anotaciones son leídas en ",t.jsx("strong",{className:"text-text",children:"runtime"})," usando reflexión (Java Reflection API). Spring escanea el classpath buscando clases con anotaciones específicas y las registra como beans."]})]}),t.jsx(S,{filename:"Componentes.java",code:`
// Spring escanea estas anotaciones y crea beans automáticamente

@Component          // Bean genérico
@Service            // Bean de lógica de negocio (semántico)
@Repository         // Bean de acceso a datos (traduce excepciones de BD)
@Controller         // Bean que maneja peticiones web (retorna vistas)
@RestController     // = @Controller + @ResponseBody (retorna JSON)
@Configuration      // Clase de configuración (define @Bean methods)

// Ejemplo:
@Service
public class UsuarioService {
    // Spring crea UNA instancia (singleton) y la gestiona
}

@RestController
public class UsuarioController {
    // Spring inyecta las dependencias automáticamente
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Inyección de dependencias"}),t.jsx(S,{filename:"DI.java",code:`
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    // Opción 1: Constructor injection (RECOMENDADA)
    private final UsuarioService service;

    public UsuarioController(UsuarioService service) {
        this.service = service; // Spring inyecta automáticamente
    }

    // Opción 2: @Autowired en campo (menos recomendada)
    // @Autowired
    // private UsuarioService service;

    // Opción 3: @Autowired en setter
    // @Autowired
    // public void setService(UsuarioService service) { ... }
}

// Si hay múltiples implementaciones de una interfaz:
@Service
@Primary                    // Esta es la implementación por defecto
public class UsuarioServiceImpl implements UsuarioService { }

@Service("cache")
public class UsuarioCacheService implements UsuarioService { }

// Inyectar específica:
// @Qualifier("cache") UsuarioService service
`}),t.jsxs(F,{type:"angular",children:["La DI en Spring es casi idéntica a Angular: ",t.jsx("code",{className:"text-primary",children:"@Injectable()"})," = ",t.jsx("code",{className:"text-primary",children:"@Service"}),", inyección por constructor es la forma preferida en ambos. ",t.jsx("code",{className:"text-primary",children:"@Primary"})," es como",t.jsx("code",{className:"text-primary",children:" providedIn: 'root'"})," por defecto."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Anotaciones HTTP"}),t.jsx(S,{filename:"HTTP.java",code:`
@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    @GetMapping              // GET /api/productos
    @GetMapping("/{id}")     // GET /api/productos/5
    @PostMapping             // POST /api/productos
    @PutMapping("/{id}")     // PUT /api/productos/5
    @DeleteMapping("/{id}")  // DELETE /api/productos/5
    @PatchMapping("/{id}")   // PATCH /api/productos/5

    // Parámetros
    @PathVariable    // Extrae de la URL: /productos/{id}
    @RequestParam    // Extrae query param: /productos?nombre=Java
    @RequestBody     // Extrae del cuerpo JSON de la petición
    @RequestHeader   // Extrae un header HTTP
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Anotaciones JPA"}),t.jsx(S,{filename:"JPA.java",code:`
@Entity                          // Marca como entidad de BD
@Table(name = "usuarios")       // Nombre de la tabla
public class Usuario {
    @Id                          // Clave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment
    private Long id;

    @Column(nullable = false, length = 100)
    private String nombre;

    @Column(unique = true)
    private String email;

    @OneToMany(mappedBy = "usuario")  // Relación 1:N
    private List<Pedido> pedidos;

    @ManyToOne                        // Relación N:1
    @JoinColumn(name = "rol_id")
    private Rol rol;

    @Transient                        // NO se guarda en BD
    private String campoTemporal;
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 36"}),t.jsx(K,{number:1,title:"CRUD completo con anotaciones",description:`Crea un ProductoController con:
1. @GetMapping — listar todos
2. @GetMapping("/{id}") — buscar por id
3. @PostMapping — crear producto (@RequestBody)
4. @PutMapping("/{id}") — actualizar
5. @DeleteMapping("/{id}") — eliminar
Usa una List<Producto> en memoria por ahora.`,hint:"private List<Producto> productos = new ArrayList<>(); Usa @PathVariable y @RequestBody",solution:`@RestController
@RequestMapping("/api/productos")
public class ProductoController {
    private List<Producto> productos = new ArrayList<>();
    private long nextId = 1;

    record Producto(long id, String nombre, double precio) {}

    @GetMapping
    public List<Producto> listar() { return productos; }

    @GetMapping("/{id}")
    public Producto buscar(@PathVariable long id) {
        return productos.stream().filter(p -> p.id() == id)
            .findFirst().orElseThrow();
    }

    @PostMapping
    public Producto crear(@RequestBody Producto p) {
        var nuevo = new Producto(nextId++, p.nombre(), p.precio());
        productos.add(nuevo);
        return nuevo;
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable long id) {
        productos.removeIf(p -> p.id() == id);
    }
}`,solutionFilename:"ProductoController.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-36: anotaciones Spring, DI, HTTP mappings, JPA"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 37"})," — Controllers en profundidad."]})]})})]})}function oS(){return t.jsxs("div",{children:[t.jsx(oe,{day:37,title:"Controllers",duration:"50 min",commitMsg:"dia-37: @RestController, CRUD, ResponseEntity, @PathVariable"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy construirás REST APIs completas. Un Controller es la puerta de entrada HTTP a tu aplicación — recibe peticiones, las valida, delega al Service, y construye la respuesta con el código HTTP apropiado (200, 201, 404, etc.)."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es un @RestController?"}),t.jsxs(ne,{title:"Controller = la fachada HTTP de tu aplicación",children:[t.jsxs("p",{children:["En Angular, un Component recibe input del usuario (clicks, forms) y delega al Service. En Spring, un ",t.jsx("code",{className:"text-primary",children:"@RestController"})," recibe peticiones HTTP (GET, POST, PUT, DELETE) y delega al Service. ",t.jsx("strong",{className:"text-text",children:"Nunca"})," pongas lógica de negocio, validaciones complejas, ni acceso a BD en el Controller. Su única responsabilidad es traducir HTTP ↔ Java."]}),t.jsxs("p",{children:[t.jsx("code",{className:"text-primary",children:"@RestController"})," = ",t.jsx("code",{className:"text-primary",children:"@Controller"})," +",t.jsx("code",{className:"text-primary",children:" @ResponseBody"}),". Significa que cada método retorna datos (JSON) directamente, no una vista HTML. Spring usa Jackson para convertir automáticamente tus objetos Java a JSON."]})]}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["El flujo completo de una petición es: ",t.jsx("strong",{className:"text-text",children:"Cliente HTTP → DispatcherServlet → Controller → Service → Repository → BD"}),", y la respuesta viaja de vuelta en sentido inverso. El Controller solo maneja la capa HTTP: extrae parámetros, llama al service, y envuelve el resultado en un ResponseEntity."]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-4",children:[{a:"@GetMapping",d:"Maneja GET — obtener datos (listar, buscar por ID)."},{a:"@PostMapping",d:"Maneja POST — crear nuevos recursos."},{a:"@PutMapping",d:"Maneja PUT — reemplazar un recurso completo."},{a:"@DeleteMapping",d:"Maneja DELETE — eliminar un recurso."},{a:"@PathVariable",d:"Extrae valor de la URL: /api/users/{id}"},{a:"@RequestParam",d:"Extrae query params: /api/users?name=Carlos"},{a:"@RequestBody",d:"Deserializa el body JSON a un objeto Java."},{a:"ResponseEntity<T>",d:"Control total: código HTTP + headers + body."}].map(({a:l,d:c})=>t.jsxs("div",{className:"p-3 bg-bg-secondary rounded-lg border border-border",children:[t.jsx("code",{className:"text-primary text-sm",children:l}),t.jsx("p",{className:"text-text-muted text-xs mt-1",children:c})]},l))}),t.jsx(S,{filename:"UsuarioController.java",code:`
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    private final UsuarioService service;

    public UsuarioController(UsuarioService service) {
        this.service = service;
    }

    // GET /api/usuarios
    @GetMapping
    public List<Usuario> listar() {
        return service.listarTodos();
    }

    // GET /api/usuarios/5
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> obtener(@PathVariable Long id) {
        return service.buscarPorId(id)
            .map(ResponseEntity::ok)                    // 200 OK
            .orElse(ResponseEntity.notFound().build());  // 404
    }

    // POST /api/usuarios (body: JSON)
    @PostMapping
    public ResponseEntity<Usuario> crear(@RequestBody @Valid Usuario usuario) {
        Usuario creado = service.guardar(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(creado); // 201
    }

    // PUT /api/usuarios/5
    @PutMapping("/{id}")
    public ResponseEntity<Usuario> actualizar(
            @PathVariable Long id,
            @RequestBody @Valid Usuario usuario) {
        return service.buscarPorId(id)
            .map(existente -> {
                usuario.setId(id);
                return ResponseEntity.ok(service.guardar(usuario));
            })
            .orElse(ResponseEntity.notFound().build());
    }

    // DELETE /api/usuarios/5
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        if (service.buscarPorId(id).isPresent()) {
            service.eliminar(id);
            return ResponseEntity.noContent().build(); // 204
        }
        return ResponseEntity.notFound().build(); // 404
    }

    // GET /api/usuarios?nombre=Carlos&page=0&size=10
    @GetMapping("/buscar")
    public List<Usuario> buscar(
            @RequestParam String nombre,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return service.buscarPorNombre(nombre, page, size);
    }
}
`}),t.jsxs(F,{type:"spring",children:[t.jsx("code",{className:"text-primary",children:"ResponseEntity"})," te da control total sobre el código HTTP, headers y body de la respuesta. Siempre úsalo para APIs profesionales en lugar de retornar objetos directamente."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 37"}),t.jsx(K,{number:1,title:"API de Tareas con ResponseEntity",description:`Crea TareaController con endpoints:
- GET /api/tareas — listar todas (200)
- POST /api/tareas — crear (201 Created)
- PUT /api/tareas/{id}/completar — marcar como completada (200 o 404)
- DELETE /api/tareas/{id} — eliminar (204 o 404)
Usa ResponseEntity para códigos HTTP correctos.`,hint:"ResponseEntity.status(HttpStatus.CREATED).body(tarea) para 201",solution:`@RestController
@RequestMapping("/api/tareas")
public class TareaController {
    record Tarea(long id, String titulo, boolean completada) {}
    private List<Tarea> tareas = new ArrayList<>();
    private long nextId = 1;

    @GetMapping
    public ResponseEntity<List<Tarea>> listar() {
        return ResponseEntity.ok(tareas);
    }

    @PostMapping
    public ResponseEntity<Tarea> crear(@RequestBody Tarea t) {
        var nueva = new Tarea(nextId++, t.titulo(), false);
        tareas.add(nueva);
        return ResponseEntity.status(HttpStatus.CREATED).body(nueva);
    }

    @PutMapping("/{id}/completar")
    public ResponseEntity<Tarea> completar(@PathVariable long id) {
        for (int i = 0; i < tareas.size(); i++) {
            if (tareas.get(i).id() == id) {
                var c = new Tarea(id, tareas.get(i).titulo(), true);
                tareas.set(i, c);
                return ResponseEntity.ok(c);
            }
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable long id) {
        boolean removed = tareas.removeIf(t -> t.id() == id);
        return removed
            ? ResponseEntity.noContent().build()   // 204
            : ResponseEntity.notFound().build();   // 404
    }
}`,solutionFilename:"TareaController.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-37: controllers CRUD, ResponseEntity, @PathVariable"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 38"})," — Services: lógica de negocio y @Transactional."]})]})})]})}function cS(){return t.jsxs("div",{children:[t.jsx(oe,{day:38,title:"Services",duration:"50 min",commitMsg:"dia-38: @Service, @Transactional, interface + impl pattern"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás la capa de servicios — el corazón de tu aplicación donde vive toda la lógica de negocio. El Controller solo traduce HTTP, el Repository solo accede a datos, pero el Service es donde ocurren las decisiones, validaciones y orquestación."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es un Service y por qué separarlo?"}),t.jsxs(ne,{title:"Service = donde vive la lógica de negocio",children:[t.jsxs("p",{children:["El patrón de capas en Spring es: ",t.jsx("strong",{className:"text-text",children:"Controller → Service → Repository"}),". El Controller recibe peticiones HTTP y las traduce a llamadas Java. El Repository se comunica con la base de datos. El Service es el ",t.jsx("strong",{className:"text-text",children:"intermediario inteligente"}),": contiene las reglas de negocio (validaciones, cálculos, decisiones), orquesta múltiples repositorios si es necesario, y define los límites transaccionales."]}),t.jsxs("p",{children:[t.jsx("code",{className:"text-primary",children:"@Transactional"})," es una anotación que envuelve el método en una transacción de base de datos: si cualquier operación dentro del método falla (excepción), Spring hace",t.jsx("strong",{className:"text-text",children:"rollback automático"})," de todos los cambios. Sin @Transactional, podrías quedar con datos a medio guardar si algo falla entre dos operaciones de BD."]}),t.jsx("p",{children:"En Angular, el patrón es idéntico: Component → Service → HttpClient. El Service es donde pones lógica de transformación y orquestación, no en el componente."})]}),t.jsx(S,{filename:"UsuarioService.java",code:`
@Service
public class UsuarioService {

    private final UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    public List<Usuario> listarTodos() {
        return repository.findAll();
    }

    public Optional<Usuario> buscarPorId(Long id) {
        return repository.findById(id);
    }

    @Transactional // Si algo falla, se revierte TODO
    public Usuario guardar(Usuario usuario) {
        // Validaciones de negocio
        if (repository.existsByEmail(usuario.getEmail())) {
            throw new RuntimeException("Email ya registrado");
        }
        return repository.save(usuario);
    }

    @Transactional
    public void eliminar(Long id) {
        repository.deleteById(id);
    }

    public List<Usuario> buscarPorNombre(String nombre, int page, int size) {
        return repository.findByNombreContaining(
            nombre, PageRequest.of(page, size)
        ).getContent();
    }
}
`}),t.jsx(F,{type:"angular",children:"Los Services en Spring son exactamente como los Services en Angular: contienen lógica de negocio reutilizable e inyectable. La diferencia es que Spring los gestiona como singletons automáticamente."})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Interface + Implementación"}),t.jsx(S,{filename:"Patron.java",code:`
// Interfaz (contrato)
public interface UsuarioService {
    List<Usuario> listarTodos();
    Optional<Usuario> buscarPorId(Long id);
    Usuario guardar(Usuario usuario);
    void eliminar(Long id);
}

// Implementación
@Service
public class UsuarioServiceImpl implements UsuarioService {
    private final UsuarioRepository repository;

    public UsuarioServiceImpl(UsuarioRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Usuario> listarTodos() {
        return repository.findAll();
    }

    @Override
    public Optional<Usuario> buscarPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public Usuario guardar(Usuario usuario) {
        return repository.save(usuario);
    }

    @Override
    @Transactional
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
`}),t.jsx(F,{type:"tip",children:"El patrón Interface + Impl es muy común en Spring. Permite cambiar la implementación sin tocar el código que la usa (ej: UsuarioServiceMock para tests)."})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 38"}),t.jsx(K,{number:1,title:"Service con validaciones de negocio",description:`Crea ProductoService con reglas de negocio:
- guardar(): precio > 0, nombre no vacío, nombre único
- aplicarDescuento(id, porcentaje): máximo 50% de descuento
- buscarCaros(umbral): productos con precio > umbral
Usa @Transactional en operaciones de escritura.`,hint:"if (precio <= 0) throw new IllegalArgumentException(...); @Transactional en guardar y aplicarDescuento",solution:`@Service
public class ProductoService {
    private final ProductoRepository repo;

    public ProductoService(ProductoRepository repo) { this.repo = repo; }

    @Transactional
    public Producto guardar(Producto p) {
        if (p.getPrecio() <= 0) throw new IllegalArgumentException("Precio debe ser > 0");
        if (p.getNombre().isBlank()) throw new IllegalArgumentException("Nombre requerido");
        if (repo.existsByNombre(p.getNombre())) throw new RuntimeException("Ya existe");
        return repo.save(p);
    }

    @Transactional
    public Producto aplicarDescuento(Long id, double porcentaje) {
        if (porcentaje > 50) throw new IllegalArgumentException("Max 50%");
        var p = repo.findById(id).orElseThrow();
        p.setPrecio(p.getPrecio() * (1 - porcentaje / 100));
        return repo.save(p);
    }

    public List<Producto> buscarCaros(double umbral) {
        return repo.findByPrecioGreaterThan(umbral);
    }
}`,solutionFilename:"ProductoService.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-38: services, @Transactional, interface+impl"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 39"})," — Repositories: Spring Data JPA y queries automáticas."]})]})})]})}function uS(){return t.jsxs("div",{children:[t.jsx(oe,{day:39,title:"Repositories",duration:"50 min",commitMsg:"dia-39: JPA entities, JpaRepository, query methods, @Query"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás Spring Data JPA — la capa que te permite acceder a bases de datos relacionales sin escribir SQL manualmente. Defines una interfaz y Spring genera toda la implementación por ti, incluyendo las queries SQL."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es JPA y por qué lo necesitas?"}),t.jsxs(ne,{title:"Repository = HttpClient automático para Base de Datos",children:[t.jsxs("p",{children:["En Angular usas ",t.jsx("code",{className:"text-primary",children:"HttpClient"})," para comunicarte con APIs REST. En Spring, ",t.jsx("code",{className:"text-primary",children:"JpaRepository"}),' es tu "HttpClient para la base de datos": te da métodos como ',t.jsx("code",{className:"text-primary",children:"save()"}),", ",t.jsx("code",{className:"text-primary",children:"findById()"}),",",t.jsx("code",{className:"text-primary",children:" findAll()"})," y ",t.jsx("code",{className:"text-primary",children:"delete()"})," sin que escribas una sola línea de SQL. Solo defines la interfaz — Spring crea la implementación completa en runtime."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"JPA (Java Persistence API)"})," es la especificación estándar de Java para mapear objetos Java a tablas de base de datos. ",t.jsx("strong",{className:"text-text",children:"Hibernate"})," es la implementación más usada de JPA, y Spring Data JPA es la capa de conveniencia que simplifica todo aún más."]})]}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["La cadena completa es: ",t.jsx("strong",{className:"text-text",children:"Tu código → Spring Data JPA → Hibernate (JPA) → JDBC → Base de Datos"}),". Tú solo trabajas con la capa más alta (Spring Data JPA), y todo lo demás se maneja automáticamente."]}),t.jsxs(F,{type:"info",title:"¿Qué necesitas en tu pom.xml?",children:["La dependencia ",t.jsx("code",{className:"text-primary",children:"spring-boot-starter-data-jpa"})," incluye Hibernate, JDBC y Spring Data JPA. También necesitas un driver de base de datos como ",t.jsx("code",{className:"text-primary",children:"h2"})," (para desarrollo) o",t.jsx("code",{className:"text-primary",children:" postgresql"})," (para producción)."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Entidad JPA — Tu clase es una tabla"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Una ",t.jsx("strong",{className:"text-text",children:"entidad JPA"})," es una clase Java que representa una tabla en la base de datos. Cada instancia de la clase es una fila, y cada campo es una columna. Las anotaciones le dicen a Hibernate cómo mapear entre tu objeto y la tabla SQL."]}),t.jsx(S,{filename:"Usuario.java",code:`
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;

@Entity                          // Marca esta clase como una tabla de BD
@Table(name = "usuarios")       // Nombre de la tabla (si no lo pones, usa el nombre de la clase)
public class Usuario {

    @Id                          // Campo de clave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-increment en la BD
    private Long id;

    @Column(nullable = false, length = 100)  // NOT NULL, max 100 chars
    private String nombre;

    @Column(unique = true, nullable = false)  // UNIQUE + NOT NULL
    private String email;

    private int edad;            // Sin @Column: usa el nombre del campo como columna

    @Column(name = "activo")     // Nombre de columna diferente al campo
    private boolean esActivo = true;

    @CreationTimestamp           // Se llena automáticamente al insertar
    @Column(updatable = false)   // No se puede modificar después
    private LocalDateTime creadoEn;

    // Constructor vacío OBLIGATORIO para JPA (Hibernate lo necesita)
    public Usuario() {}

    // Constructor para crear usuarios (sin id, se genera solo)
    public Usuario(String nombre, String email, int edad) {
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
    }

    // Getters y setters para TODOS los campos
    // (o usa Lombok: @Data @NoArgsConstructor @AllArgsConstructor)
    public Long getId() { return id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public int getEdad() { return edad; }
    public void setEdad(int edad) { this.edad = edad; }
}
`}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-4",children:[{a:"@Entity",d:"Marca la clase como tabla de BD. Obligatoria."},{a:'@Table(name="x")',d:"Nombre de la tabla. Opcional si coincide con la clase."},{a:"@Id",d:"Clave primaria. Cada entidad DEBE tener una."},{a:"@GeneratedValue",d:"La BD genera el valor (auto-increment)."},{a:"@Column",d:"Configura la columna: nullable, unique, length, name."},{a:"@CreationTimestamp",d:"Se llena con la fecha/hora actual al insertar."}].map(({a:l,d:c})=>t.jsxs("div",{className:"p-3 bg-bg-secondary rounded-lg border border-border",children:[t.jsx("code",{className:"text-primary text-sm",children:l}),t.jsx("p",{className:"text-text-muted text-xs mt-1",children:c})]},l))}),t.jsxs(F,{type:"warning",title:"Regla de oro: constructor vacío obligatorio",children:["JPA/Hibernate necesita un constructor sin argumentos para crear instancias al leer de la BD. Si defines otro constructor, ",t.jsx("strong",{children:"debes"})," también definir el vacío explícitamente. Sin él, obtendrás un error críptico: ",t.jsx("code",{className:"text-primary",children:"No default constructor for entity"}),"."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Repository — La magia de Spring Data"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Un ",t.jsx("strong",{className:"text-text",children:"Repository"})," es una interfaz que defines tú, y Spring crea la implementación automáticamente en tiempo de ejecución. Al extender ",t.jsx("code",{className:"text-primary",children:"JpaRepository<Entidad, TipoId>"}),", heredas decenas de métodos CRUD sin escribir una sola línea de implementación."]}),t.jsx(S,{filename:"UsuarioRepository.java",code:`
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;
import java.util.Optional;

// JpaRepository<Entidad, TipoDelId> te da GRATIS:
// save(), findById(), findAll(), deleteById(), count(), existsById()...
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    // ═══════════════════════════════════════════════════════
    // QUERY METHODS: Spring genera SQL por el nombre del método
    // ═══════════════════════════════════════════════════════

    // findBy + NombreCampo → WHERE campo = ?
    List<Usuario> findByNombre(String nombre);
    // SQL generado: SELECT * FROM usuarios WHERE nombre = ?

    // findBy + Campo + Comparador
    List<Usuario> findByEdadGreaterThan(int edad);
    // SQL: SELECT * FROM usuarios WHERE edad > ?

    List<Usuario> findByEdadBetween(int min, int max);
    // SQL: SELECT * FROM usuarios WHERE edad BETWEEN ? AND ?

    // Optional para resultados únicos que pueden no existir
    Optional<Usuario> findByEmail(String email);
    // SQL: SELECT * FROM usuarios WHERE email = ?

    // exists retorna boolean
    boolean existsByEmail(String email);
    // SQL: SELECT COUNT(*) > 0 FROM usuarios WHERE email = ?

    // Containing = LIKE '%texto%'
    List<Usuario> findByNombreContainingIgnoreCase(String texto);
    // SQL: SELECT * FROM usuarios WHERE LOWER(nombre) LIKE LOWER('%texto%')

    // Ordenamiento
    List<Usuario> findByEdadGreaterThanOrderByNombreAsc(int edad);
    // SQL: SELECT * FROM usuarios WHERE edad > ? ORDER BY nombre ASC

    // Limitar resultados
    List<Usuario> findTop5ByOrderByEdadDesc();
    // SQL: SELECT * FROM usuarios ORDER BY edad DESC LIMIT 5

    // ═══════════════════════════════════════════════════════
    // PAGINACIÓN: resultados por páginas
    // ═══════════════════════════════════════════════════════
    Page<Usuario> findByNombreContaining(String texto, Pageable pageable);

    // ═══════════════════════════════════════════════════════
    // @Query: para queries complejas que no se pueden expresar con nombres
    // ═══════════════════════════════════════════════════════

    // JPQL (Java Persistence Query Language) — usa nombres de CLASES, no tablas
    @Query("SELECT u FROM Usuario u WHERE u.edad BETWEEN :min AND :max")
    List<Usuario> buscarPorRangoEdad(@Param("min") int min, @Param("max") int max);

    // Query nativa SQL — usa nombres de TABLAS y COLUMNAS reales
    @Query(value = "SELECT * FROM usuarios WHERE email LIKE %:dominio", nativeQuery = true)
    List<Usuario> buscarPorDominioEmail(@Param("dominio") String dominio);

    // Contar con query personalizada
    @Query("SELECT COUNT(u) FROM Usuario u WHERE u.edad >= :edad")
    long contarMayoresDe(@Param("edad") int edad);
}
`}),t.jsx("h3",{className:"text-lg font-bold text-text mt-6 mb-3",children:"Convención de nombres para Query Methods"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Spring analiza el nombre de tu método y genera la SQL correspondiente. La estructura es:",t.jsx("code",{className:"text-primary ml-1",children:"findBy"})," + ",t.jsx("code",{className:"text-primary",children:"Campo"})," +",t.jsx("code",{className:"text-primary",children:" Comparador"})," (opcional) + ",t.jsx("code",{className:"text-primary",children:"OrderBy"})," (opcional)."]}),t.jsx("div",{className:"overflow-x-auto mb-4",children:t.jsxs("table",{className:"w-full text-sm text-text-muted",children:[t.jsx("thead",{children:t.jsxs("tr",{className:"border-b border-border",children:[t.jsx("th",{className:"text-left py-2 px-3 text-text",children:"Keyword en el nombre"}),t.jsx("th",{className:"text-left py-2 px-3 text-text",children:"SQL generado"}),t.jsx("th",{className:"text-left py-2 px-3 text-text",children:"Ejemplo"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"findBy"}),t.jsx("td",{className:"py-2 px-3",children:"WHERE campo = ?"}),t.jsx("td",{className:"py-2 px-3 text-xs",children:"findByEmail(email)"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"GreaterThan"}),t.jsx("td",{className:"py-2 px-3",children:"WHERE campo > ?"}),t.jsx("td",{className:"py-2 px-3 text-xs",children:"findByEdadGreaterThan(18)"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"LessThan"}),t.jsx("td",{className:"py-2 px-3",children:"WHERE campo < ?"}),t.jsx("td",{className:"py-2 px-3 text-xs",children:"findByPrecioLessThan(100)"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"Between"}),t.jsx("td",{className:"py-2 px-3",children:"WHERE campo BETWEEN ? AND ?"}),t.jsx("td",{className:"py-2 px-3 text-xs",children:"findByEdadBetween(18, 65)"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"Containing"}),t.jsx("td",{className:"py-2 px-3",children:"WHERE campo LIKE %?%"}),t.jsx("td",{className:"py-2 px-3 text-xs",children:'findByNombreContaining("ar")'})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"StartingWith"}),t.jsx("td",{className:"py-2 px-3",children:"WHERE campo LIKE ?%"}),t.jsx("td",{className:"py-2 px-3 text-xs",children:'findByNombreStartingWith("Ca")'})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"IsNull"}),t.jsx("td",{className:"py-2 px-3",children:"WHERE campo IS NULL"}),t.jsx("td",{className:"py-2 px-3 text-xs",children:"findByEmailIsNull()"})]}),t.jsxs("tr",{className:"border-b border-border/50",children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"In"}),t.jsx("td",{className:"py-2 px-3",children:"WHERE campo IN (?)"}),t.jsx("td",{className:"py-2 px-3 text-xs",children:"findByEdadIn(List.of(18,25))"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"OrderBy...Asc/Desc"}),t.jsx("td",{className:"py-2 px-3",children:"ORDER BY campo ASC/DESC"}),t.jsx("td",{className:"py-2 px-3 text-xs",children:"findByEdadGreaterThanOrderByNombreAsc(18)"})]})]})]})}),t.jsxs(F,{type:"tip",title:"¿Cuándo usar @Query vs Query Methods?",children:[t.jsx("strong",{children:"Query Methods"})," (por nombre): para consultas simples con 1-2 condiciones. Son legibles y autocompletables.",t.jsx("strong",{children:" @Query (JPQL)"}),": para consultas complejas con JOINs, subqueries, o múltiples condiciones. Usa nombres de clases Java.",t.jsx("strong",{children:" @Query (nativeQuery)"}),": cuando necesitas SQL específico de tu BD (funciones de PostgreSQL, etc.). Usa nombres de tablas reales."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Usando el Repository en el Service"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"El Repository se inyecta en tu Service. Nunca lo uses directamente desde el Controller — siempre pasa por la capa de servicio para mantener la lógica de negocio separada."}),t.jsx(S,{filename:"UsuarioService.java",code:`
@Service
public class UsuarioService {
    private final UsuarioRepository repository;

    // Inyección por constructor (recomendada)
    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    public List<Usuario> listarTodos() {
        return repository.findAll();  // Heredado de JpaRepository
    }

    public Optional<Usuario> buscarPorId(Long id) {
        return repository.findById(id);  // Retorna Optional (puede no existir)
    }

    @Transactional  // Si falla, hace rollback automático
    public Usuario crear(Usuario usuario) {
        if (repository.existsByEmail(usuario.getEmail())) {
            throw new RecursoDuplicadoException("Email ya registrado");
        }
        return repository.save(usuario);  // INSERT si no tiene id, UPDATE si tiene
    }

    @Transactional
    public void eliminar(Long id) {
        if (!repository.existsById(id)) {
            throw new RecursoNoEncontradoException("Usuario " + id + " no encontrado");
        }
        repository.deleteById(id);
    }

    // Paginación: retorna una "página" de resultados
    public Page<Usuario> buscarPaginado(String nombre, int pagina, int tamano) {
        Pageable pageable = PageRequest.of(pagina, tamano, Sort.by("nombre"));
        return repository.findByNombreContaining(nombre, pageable);
    }
}
`}),t.jsxs(F,{type:"angular",children:["En Angular, tu Service llama a ",t.jsx("code",{className:"text-primary",children:'this.http.get<User[]>("/api/users")'}),". En Spring, tu Service llama a ",t.jsx("code",{className:"text-primary",children:"this.repository.findAll()"}),". El patrón es idéntico: el Service encapsula la lógica de acceso a datos y el Controller solo delega."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 39"}),t.jsx(K,{number:1,title:"Repository con query methods",description:`Crea ProductoRepository extends JpaRepository con:
- findByNombre(String nombre)
- findByPrecioGreaterThan(double precio)
- findByCategoria(String cat)
- findByNombreContainingIgnoreCase(String texto)
- @Query personalizada: buscar productos con precio entre min y max`,hint:"Solo define la interfaz con los métodos. Spring genera el SQL automáticamente.",solution:`public interface ProductoRepository extends JpaRepository<Producto, Long> {
    List<Producto> findByNombre(String nombre);
    List<Producto> findByPrecioGreaterThan(double precio);
    List<Producto> findByCategoria(String cat);
    List<Producto> findByNombreContainingIgnoreCase(String texto);
    boolean existsByNombre(String nombre);

    @Query("SELECT p FROM Producto p WHERE p.precio BETWEEN :min AND :max ORDER BY p.precio")
    List<Producto> buscarPorRangoPrecio(@Param("min") double min, @Param("max") double max);

    Page<Producto> findByCategoria(String cat, Pageable pageable);
}`,solutionFilename:"ProductoRepository.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-39: JPA entities, repositories, query methods"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 40"})," — Spring Security: autenticación y autorización."]})]})})]})}function dS(){return t.jsxs("div",{children:[t.jsx(oe,{day:40,title:"Spring Security",duration:"55 min",commitMsg:"dia-40: SecurityFilterChain, BCrypt, JWT, roles"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás Spring Security — el módulo que protege tu API controlando quién puede acceder (autenticación) y qué puede hacer (autorización). Es el equivalente de los Route Guards e HTTP Interceptors de Angular, pero aplicado a nivel de servidor."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Autenticación vs Autorización"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:[t.jsx("strong",{className:"text-text",children:"Autenticación"})," = verificar QUIÉN eres (login con email/contraseña, token JWT).",t.jsx("strong",{className:"text-text",children:" Autorización"})," = verificar QUÉ puedes hacer (¿tienes rol ADMIN para borrar usuarios?). Spring Security maneja ambas cosas a través de una cadena de filtros que interceptan cada petición HTTP antes de que llegue a tu Controller."]}),t.jsxs(ne,{title:"Spring Security = Route Guards + Interceptors del backend",children:[t.jsxs("p",{children:["En Angular proteges rutas con ",t.jsx("code",{className:"text-primary",children:"CanActivate"})," guards y adjuntas tokens JWT con HTTP interceptors. En Spring Security es el mismo concepto:",t.jsx("code",{className:"text-primary",children:" SecurityFilterChain"})," define qué rutas requieren autenticación (como los guards) y ",t.jsx("code",{className:"text-primary",children:"OncePerRequestFilter"})," intercepta cada petición para validar el token JWT (como el interceptor)."]}),t.jsxs("p",{children:['La diferencia clave: en Angular, la seguridad del frontend es "cosmética" — un usuario puede saltarse los guards modificando el código. En Spring Security, la protección es ',t.jsx("strong",{className:"text-text",children:"real"}),"porque corre en el servidor. Si no pasas la validación, nunca llegas al Controller."]})]}),t.jsx(S,{filename:"SecurityConfig.java",code:`
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Deshabilitar CSRF para APIs REST
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()    // público
                .requestMatchers("/api/admin/**").hasRole("ADMIN") // solo admin
                .requestMatchers("/api/**").authenticated()        // autenticado
                .anyRequest().permitAll()
            )
            .httpBasic(Customizer.withDefaults())  // Basic Auth
            // .oauth2Login(Customizer.withDefaults()) // OAuth2
            ;
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // NUNCA guardes contraseñas en texto plano
    }

    @Bean
    public UserDetailsService userDetailsService(PasswordEncoder encoder) {
        // Usuarios en memoria (solo para desarrollo)
        var admin = User.builder()
            .username("admin")
            .password(encoder.encode("admin123"))
            .roles("ADMIN", "USER")
            .build();

        var user = User.builder()
            .username("usuario")
            .password(encoder.encode("user123"))
            .roles("USER")
            .build();

        return new InMemoryUserDetailsManager(admin, user);
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"JWT Authentication (producción)"}),t.jsx(S,{filename:"JwtUtil.java",code:`
// Flujo JWT típico:
// 1. POST /api/auth/login  -> {username, password}
// 2. Servidor valida credenciales
// 3. Servidor genera JWT y lo retorna
// 4. Cliente envía JWT en header: Authorization: Bearer <token>
// 5. Servidor valida JWT en cada petición

// Dependencia: io.jsonwebtoken:jjwt-api
@Component
public class JwtUtil {
    @Value("\${jwt.secret}")
    private String secret;

    public String generateToken(String username) {
        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 24h
            .signWith(Keys.hmacShaKeyFor(secret.getBytes()))
            .compact();
    }

    public String extractUsername(String token) {
        return Jwts.parserBuilder()
            .setSigningKey(Keys.hmacShaKeyFor(secret.getBytes()))
            .build()
            .parseClaimsJws(token)
            .getBody()
            .getSubject();
    }
}
`}),t.jsxs(F,{type:"angular",children:["En Angular usas interceptors HTTP para adjuntar el JWT token. En Spring usas filtros (",t.jsx("code",{className:"text-primary",children:"OncePerRequestFilter"}),") para validar el token en cada petición. El concepto de guards en Angular equivale a ",t.jsx("code",{className:"text-primary",children:"@PreAuthorize"})," en Spring."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 40"}),t.jsx(K,{number:1,title:"SecurityConfig con roles",description:`Configura SecurityFilterChain con:
- /api/public/** → permitAll
- /api/admin/** → hasRole("ADMIN")
- /api/usuarios/** → authenticated
- POST /api/auth/login → permitAll
- BCryptPasswordEncoder como @Bean
- Dos usuarios en memoria: admin (ADMIN) y user (USER)`,hint:"authorizeHttpRequests(auth -> auth.requestMatchers(...).permitAll()...)",solution:`@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(c -> c.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**", "/api/auth/login").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/usuarios/**").authenticated()
                .anyRequest().permitAll()
            )
            .httpBasic(Customizer.withDefaults());
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() { return new BCryptPasswordEncoder(); }

    @Bean
    public UserDetailsService users(PasswordEncoder enc) {
        var admin = User.builder().username("admin").password(enc.encode("admin123")).roles("ADMIN","USER").build();
        var user = User.builder().username("user").password(enc.encode("user123")).roles("USER").build();
        return new InMemoryUserDetailsManager(admin, user);
    }
}`,solutionFilename:"SecurityConfig.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-40: Spring Security, BCrypt, JWT, roles"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 41"})," — Testing: JUnit 5, Mockito, MockMvc."]})]})})]})}function mS(){return t.jsxs("div",{children:[t.jsx(oe,{day:41,title:"Testing en Spring Boot",duration:"55 min",commitMsg:"dia-41: JUnit 5, Mockito, MockMvc, integration tests"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás testing profesional en Spring Boot: unit tests aislados con Mockito para probar tu lógica de negocio, e integration tests con MockMvc para verificar tus endpoints HTTP completos sin levantar un servidor real."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Unit Tests con JUnit 5 + Mockito"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Un ",t.jsx("strong",{className:"text-text",children:"unit test"})," prueba UNA clase aislada. Si tu Service depende de un Repository, no quieres que el test dependa de una BD real — sería lento y frágil. En su lugar, usas ",t.jsx("strong",{className:"text-text",children:"Mockito"}),' para crear un "doble" (mock) del Repository que simula su comportamiento sin conectarse a ninguna BD.']}),t.jsxs(ne,{title:"Arrange → Act → Assert (AAA pattern)",children:[t.jsxs("p",{children:["Cada test sigue el patrón AAA: ",t.jsx("strong",{className:"text-text",children:"Arrange"})," (preparar datos y configurar qué van a retornar los mocks), ",t.jsx("strong",{className:"text-text",children:"Act"})," (ejecutar el método que estás probando), ",t.jsx("strong",{className:"text-text",children:"Assert"})," (verificar que el resultado es lo que esperabas)."]}),t.jsxs("p",{children:[t.jsx("code",{className:"text-primary",children:"@Mock"})," crea un mock del Repository (un objeto falso que puedes programar).",t.jsx("code",{className:"text-primary",children:" @InjectMocks"})," crea el Service real pero le inyecta los mocks como dependencias.",t.jsx("code",{className:"text-primary",children:" when(...).thenReturn(...)"})," programa lo que el mock va a retornar cuando se llame.",t.jsx("code",{className:"text-primary",children:" verify(...)"})," confirma que el mock fue llamado como esperabas."]})]}),t.jsx(S,{filename:"UsuarioServiceTest.java",code:`
@ExtendWith(MockitoExtension.class)
class UsuarioServiceTest {

    @Mock
    private UsuarioRepository repository;

    @InjectMocks
    private UsuarioService service;

    @Test
    void listarTodos_debeRetornarLista() {
        // Arrange (preparar)
        List<Usuario> esperados = List.of(
            new Usuario(1L, "Carlos", "carlos@mail.com", 25),
            new Usuario(2L, "Ana", "ana@mail.com", 30)
        );
        when(repository.findAll()).thenReturn(esperados);

        // Act (ejecutar)
        List<Usuario> resultado = service.listarTodos();

        // Assert (verificar)
        assertEquals(2, resultado.size());
        assertEquals("Carlos", resultado.get(0).getNombre());
        verify(repository, times(1)).findAll();
    }

    @Test
    void buscarPorId_noExiste_debeRetornarVacio() {
        when(repository.findById(99L)).thenReturn(Optional.empty());

        Optional<Usuario> resultado = service.buscarPorId(99L);

        assertTrue(resultado.isEmpty());
    }

    @Test
    void guardar_emailDuplicado_debeLanzarExcepcion() {
        when(repository.existsByEmail("dup@mail.com")).thenReturn(true);

        Usuario usuario = new Usuario(null, "Test", "dup@mail.com", 20);
        assertThrows(RuntimeException.class, () -> service.guardar(usuario));
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Integration Test con MockMvc"}),t.jsx(S,{filename:"UsuarioControllerTest.java",code:`
@SpringBootTest
@AutoConfigureMockMvc
class UsuarioControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void listar_debeRetornar200() throws Exception {
        mockMvc.perform(get("/api/usuarios"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$").isArray());
    }

    @Test
    void crear_debeRetornar201() throws Exception {
        Usuario nuevo = new Usuario(null, "Test", "test@mail.com", 25);
        String json = objectMapper.writeValueAsString(nuevo);

        mockMvc.perform(post("/api/usuarios")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.nombre").value("Test"));
    }

    @Test
    void obtener_noExiste_debeRetornar404() throws Exception {
        mockMvc.perform(get("/api/usuarios/99999"))
            .andExpect(status().isNotFound());
    }
}
`}),t.jsxs(F,{type:"tip",children:[t.jsx("strong",{children:"Unit tests"}),": rápidos, aislados con mocks. Testean una clase.",t.jsx("strong",{children:" Integration tests"}),": levantan el contexto de Spring. Testean el flujo completo. Usa ",t.jsx("code",{className:"text-primary",children:"@SpringBootTest"})," para integration y ",t.jsx("code",{className:"text-primary",children:"@ExtendWith(MockitoExtension.class)"})," para unit."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 41"}),t.jsx(K,{number:1,title:"Tests para ProductoService",description:`Escribe 3 unit tests para ProductoService:
1. guardar_precioNegativo_lanzaExcepcion()
2. guardar_productoValido_retornaGuardado()
3. buscarPorId_noExiste_retornaVacio()
Usa @Mock para el repository y @InjectMocks para el service.`,hint:"when(repo.save(any())).thenReturn(producto); assertThrows(IllegalArgumentException.class, () -> ...);",solution:`@ExtendWith(MockitoExtension.class)
class ProductoServiceTest {
    @Mock ProductoRepository repo;
    @InjectMocks ProductoService service;

    @Test
    void guardar_precioNegativo_lanzaExcepcion() {
        var p = new Producto(null, "Test", -5.0);
        assertThrows(IllegalArgumentException.class, () -> service.guardar(p));
    }

    @Test
    void guardar_valido_retornaGuardado() {
        var p = new Producto(null, "Laptop", 1200.0);
        when(repo.existsByNombre("Laptop")).thenReturn(false);
        when(repo.save(any())).thenReturn(new Producto(1L, "Laptop", 1200.0));

        var result = service.guardar(p);
        assertEquals("Laptop", result.getNombre());
        verify(repo).save(any());
    }

    @Test
    void buscarPorId_noExiste_retornaVacio() {
        when(repo.findById(99L)).thenReturn(Optional.empty());
        assertTrue(service.buscarPorId(99L).isEmpty());
    }
}`,solutionFilename:"ProductoServiceTest.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-41: JUnit 5, Mockito, MockMvc tests"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 42"})," — Manejo de excepciones global con @ControllerAdvice."]})]})})]})}function pS(){return t.jsxs("div",{children:[t.jsx(oe,{day:21,title:"Comparable y Comparator",duration:"45 min",commitMsg:"dia-21: Comparable, Comparator, ordenamiento de objetos"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy aprenderás a ordenar objetos personalizados en Java. En TypeScript, ordenas con",t.jsx("code",{className:"text-primary",children:" .sort((a, b) => a.precio - b.precio)"}),". En Java hay dos mecanismos formales:",t.jsx("code",{className:"text-primary",children:" Comparable"})," (orden natural interno) y ",t.jsx("code",{className:"text-primary",children:"Comparator"}),"(orden externo flexible). Los usarás constantemente con colecciones, streams y Spring Data."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Comparable — El objeto sabe ordenarse"}),t.jsxs(ne,{title:"¿Comparable o Comparator? Depende del caso",children:[t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Comparable<T>"}),": la clase implementa ",t.jsx("code",{className:"text-primary",children:"compareTo()"}),'internamente. Define UN solo orden "natural" (ej: productos por precio). Las colecciones usan este orden por defecto al llamar ',t.jsx("code",{className:"text-primary",children:"Collections.sort()"})," o ",t.jsx("code",{className:"text-primary",children:".sorted()"}),"."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Comparator<T>"}),": el orden se define FUERA de la clase. Puedes crear múltiples Comparators para la misma clase (por nombre, por precio, por fecha). Es más flexible y se combina con lambdas y method references. ",t.jsx("strong",{className:"text-text",children:"Usa Comparator el 90% del tiempo"}),"— Comparable solo para el orden más obvio y natural de tu clase."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Regla del retorno:"})," ",t.jsx("code",{className:"text-primary",children:"compareTo()"})," retorna: negativo (this va antes), cero (iguales), positivo (this va después). Es como ",t.jsx("code",{className:"text-primary",children:"(a, b) => a - b"})," en JavaScript."]})]}),t.jsx(S,{filename:"Producto.java",code:`
public class Producto implements Comparable<Producto> {
    private String nombre;
    private double precio;

    public Producto(String nombre, double precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    // Define el orden natural: por precio ascendente
    @Override
    public int compareTo(Producto otro) {
        // Retorna: negativo si this < otro, 0 si iguales, positivo si this > otro
        return Double.compare(this.precio, otro.precio);
    }

    @Override
    public String toString() {
        return nombre + " ($" + precio + ")";
    }
}

// Uso:
List<Producto> productos = new ArrayList<>();
productos.add(new Producto("Laptop", 1200.0));
productos.add(new Producto("Mouse", 25.0));
productos.add(new Producto("Monitor", 450.0));

Collections.sort(productos); // usa compareTo()
System.out.println(productos);
// [Mouse ($25.0), Monitor ($450.0), Laptop ($1200.0)]

// También funciona con TreeSet, TreeMap (orden automático)
TreeSet<Producto> set = new TreeSet<>(productos);
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Comparator — orden personalizado"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Usa ",t.jsx("code",{className:"text-primary",children:"Comparator"})," cuando necesitas ",t.jsx("strong",{className:"text-text",children:"múltiples criterios de orden"}),"o no puedes modificar la clase original."]}),t.jsx(S,{filename:"ComparatorEjemplo.java",code:`
List<Producto> productos = List.of(
    new Producto("Laptop", 1200.0),
    new Producto("Mouse", 25.0),
    new Producto("Monitor", 450.0),
    new Producto("Teclado", 80.0)
);

// Comparator con lambda
productos.sort((a, b) -> Double.compare(a.getPrecio(), b.getPrecio()));

// Comparator.comparing() — más legible (Java 8+)
productos.sort(Comparator.comparing(Producto::getPrecio));          // ascendente
productos.sort(Comparator.comparing(Producto::getPrecio).reversed()); // descendente
productos.sort(Comparator.comparing(Producto::getNombre));           // por nombre A-Z

// Encadenar criterios: primero por precio, luego por nombre
productos.sort(
    Comparator.comparing(Producto::getPrecio)
              .thenComparing(Producto::getNombre)
);

// Con streams
List<Producto> ordenados = productos.stream()
    .sorted(Comparator.comparing(Producto::getPrecio))
    .collect(Collectors.toList());

// El más caro
Optional<Producto> masCaro = productos.stream()
    .max(Comparator.comparing(Producto::getPrecio));
`}),t.jsxs(F,{type:"angular",children:["En TypeScript, ",t.jsx("code",{className:"text-primary",children:"array.sort((a, b) => a.price - b.price)"})," es el equivalente. Java tiene el mismo patrón pero con ",t.jsx("code",{className:"text-primary",children:"Comparator.comparing()"})," que es más expresivo y seguro para tipos no numéricos."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Comparable vs Comparator"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[t.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[t.jsx("h3",{className:"font-bold text-text mb-2",children:"Comparable"}),t.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[t.jsxs("li",{children:["• Implementado ",t.jsx("strong",{className:"text-text",children:"dentro"})," de la clase"]}),t.jsxs("li",{children:["• Define el ",t.jsx("strong",{className:"text-text",children:"orden natural"})," único"]}),t.jsx("li",{children:'• La clase "sabe" cómo ordenarse'}),t.jsx("li",{children:"• Ejemplo: String, Integer, LocalDate"})]})]}),t.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[t.jsx("h3",{className:"font-bold text-text mb-2",children:"Comparator"}),t.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[t.jsxs("li",{children:["• Definido ",t.jsx("strong",{className:"text-text",children:"fuera"})," de la clase"]}),t.jsxs("li",{children:["• Permite ",t.jsx("strong",{className:"text-text",children:"múltiples criterios"})]}),t.jsx("li",{children:"• No necesitas modificar la clase"}),t.jsx("li",{children:"• Más flexible para casos ad-hoc"})]})]})]}),t.jsxs(F,{type:"tip",children:["Regla práctica: implementa ",t.jsx("code",{className:"text-primary",children:"Comparable"}),' si hay un orden "lógico" obvio para tu clase (ej: productos por precio, personas por nombre). Usa ',t.jsx("code",{className:"text-primary",children:"Comparator"}),"para ordenamientos alternativos o cuando no controlas la clase."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 21"}),t.jsx(K,{number:1,title:"Ordenar estudiantes",description:`Crea Estudiante implements Comparable<Estudiante> con:
- Campos: nombre, promedio, edad
- Orden natural: por promedio descendente (mayor primero)
- En main: crea una lista de 5 estudiantes, ordénalos naturalmente
- Luego ordénalos con Comparator.comparing por nombre A-Z
- Luego por edad ascendente, y si empatan, por nombre`,hint:"Para orden descendente en compareTo: return Double.compare(otro.promedio, this.promedio);",solution:`import java.util.*;

public class Estudiante implements Comparable<Estudiante> {
    private String nombre;
    private double promedio;
    private int edad;

    public Estudiante(String nombre, double promedio, int edad) {
        this.nombre = nombre;
        this.promedio = promedio;
        this.edad = edad;
    }

    public String getNombre() { return nombre; }
    public double getPromedio() { return promedio; }
    public int getEdad() { return edad; }

    @Override
    public int compareTo(Estudiante otro) {
        return Double.compare(otro.promedio, this.promedio);
    }

    @Override
    public String toString() {
        return String.format("%s (%.1f, %d años)", nombre, promedio, edad);
    }

    public static void main(String[] args) {
        List<Estudiante> lista = new ArrayList<>(List.of(
            new Estudiante("Carlos", 8.5, 22),
            new Estudiante("Ana", 9.2, 20),
            new Estudiante("Luis", 7.8, 22),
            new Estudiante("María", 9.2, 21),
            new Estudiante("Pedro", 8.0, 23)
        ));

        Collections.sort(lista);
        System.out.println("Por promedio desc: " + lista);

        lista.sort(Comparator.comparing(Estudiante::getNombre));
        System.out.println("Por nombre: " + lista);

        lista.sort(Comparator.comparingInt(Estudiante::getEdad)
                             .thenComparing(Estudiante::getNombre));
        System.out.println("Por edad+nombre: " + lista);
    }
}`,solutionFilename:"Estudiante.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-21: Comparable, Comparator, ordenamiento de objetos"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 22"})," — Lambdas: funciones como ciudadanos de primera clase."]})]})})]})}function fS(){return t.jsxs("div",{children:[t.jsx(oe,{day:33,title:"Text Blocks y Novedades",duration:"40 min",commitMsg:"dia-33: text blocks, var, string enhancements"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy cierras la sección de Java Moderno con varias features que hacen tu código más limpio: Text Blocks para strings multilínea, ",t.jsx("code",{className:"text-primary",children:"var"})," para inferencia de tipos, y mejoras de String como ",t.jsx("code",{className:"text-primary",children:".formatted()"})," y ",t.jsx("code",{className:"text-primary",children:".isBlank()"}),"."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Text Blocks (Java 13+)"}),t.jsxs(ne,{title:"Text Blocks = template literals sin interpolación",children:[t.jsxs("p",{children:["En TypeScript usas backticks: ",t.jsx("code",{className:"text-primary",children:"`Hola ${nombre}`"})," con interpolación directa de variables. En Java, los Text Blocks usan ",t.jsx("code",{className:"text-primary",children:'"""...."""'}),"para strings multilínea, pero ",t.jsx("strong",{className:"text-text",children:"NO tienen interpolación de variables"}),". Para insertar valores, usas ",t.jsx("code",{className:"text-primary",children:".formatted()"})," (como printf) o concatenación con ",t.jsx("code",{className:"text-primary",children:"+"}),"."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"¿Cuándo usarlos?"})," Son ideales para JSON, SQL, HTML, XML, o cualquier string multilínea que sería ilegible con ",t.jsx("code",{className:"text-primary",children:"\\n"})," y concatenación. El indentado se gestiona automáticamente — Java detecta el indentado común y lo elimina."]})]}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Antes de Java 13, escribir un JSON o SQL multilínea era un desastre de escapes y concatenaciones. Los Text Blocks eliminan ese problema por completo — escribes el texto tal cual y Java maneja los saltos de línea."}),t.jsx(S,{filename:"TextBlocks.java",code:`
// Antes de Java 13: string con escapes
String json = "{
" +
              "  "nombre": "Carlos",
" +
              "  "edad": 25
" +
              "}";

// Con Text Block (Java 13+): mucho más legible
String json = """
        {
          "nombre": "Carlos",
          "edad": 25
        }
        """;

// Ideal para JSON, SQL, HTML, XML
String sql = """
        SELECT u.nombre, u.email
        FROM usuarios u
        WHERE u.activo = true
        ORDER BY u.nombre
        """;

String html = """
        <html>
          <body>
            <h1>Hola, %s!</h1>
          </body>
        </html>
        """.formatted("Carlos"); // con String.formatted()

// Métodos útiles con Text Blocks
String texto = """
        Línea 1
        Línea 2
        Línea 3
        """;

System.out.println(texto.lines().count()); // 3
System.out.println(texto.stripIndent());   // elimina indentado común
`}),t.jsxs(F,{type:"angular",children:["Los Text Blocks son el equivalente de los template literals de JavaScript/TypeScript con backticks:",t.jsx("code",{className:"text-primary",children:" `...`"}),". La diferencia es que Java usa ",t.jsx("code",{className:"text-primary",children:'"""'})," en lugar de backticks."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"var — Inferencia de tipos local (Java 10+)"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:[t.jsx("code",{className:"text-primary",children:"var"})," permite que el compilador infiera el tipo de una variable local. Java sigue siendo estáticamente tipado — ",t.jsx("code",{className:"text-primary",children:"var"})," es solo azúcar sintáctico."]}),t.jsx(S,{filename:"VarEjemplo.java",code:`
// Sin var (explícito)
ArrayList<String> lista = new ArrayList<String>();
Map<String, List<Integer>> mapa = new HashMap<String, List<Integer>>();

// Con var (el compilador infiere el tipo)
var lista = new ArrayList<String>();       // tipo: ArrayList<String>
var mapa = new HashMap<String, List<Integer>>(); // tipo: HashMap<String, List<Integer>>
var numero = 42;                           // tipo: int
var texto = "Hola Java";                  // tipo: String
var precio = 19.99;                       // tipo: double

// var en bucles for-each
for (var elemento : lista) {
    System.out.println(elemento.toUpperCase()); // el compilador sabe que es String
}

// var con streams
var nombres = List.of("Carlos", "Ana", "Luis");
var filtrados = nombres.stream()
    .filter(n -> n.startsWith("C"))
    .collect(Collectors.toList());

// NO se puede usar var con:
// var x;           // sin inicialización
// var x = null;    // tipo ambiguo
// var[] arr;       // arrays
// return var;      // fuera de ámbito local
`}),t.jsxs(F,{type:"tip",children:["Usa ",t.jsx("code",{className:"text-primary",children:"var"})," cuando el tipo es obvio por el lado derecho (ej: ",t.jsx("code",{className:"text-primary",children:"new ArrayList<>()"}),"). Evítalo cuando el tipo no es claro sin leerlo (reduce legibilidad). Es especialmente útil para tipos genéricos largos."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"String enhancements (Java 11+)"}),t.jsx(S,{filename:"StringMethods.java",code:`
// Java 11: nuevos métodos en String
String texto = "  hola mundo  ";

texto.isBlank();          // false (solo espacios = true)
texto.strip();            // "hola mundo" (mejor que trim() para Unicode)
texto.stripLeading();     // "hola mundo  "
texto.stripTrailing();    // "  hola mundo"

"".isBlank();             // true
"   ".isBlank();          // true

// repeat (Java 11)
"=-".repeat(10);          // "=-=-=-=-=-=-=-=-=-=-"

// lines() — stream de líneas
String multilinea = "linea1\\nlinea2\\nlinea3";
multilinea.lines()
    .map(String::trim)
    .forEach(System.out::println);

// Java 12: indent()
"hola\\nmundo".indent(4); // añade 4 espacios a cada línea

// Java 15: String.formatted() — alternativa a String.format()
"Hola %s, tienes %d años".formatted("Carlos", 25);
// = String.format("Hola %s, tienes %d años", "Carlos", 25)
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 33"}),t.jsx(K,{number:1,title:"Generador de HTML con Text Blocks",description:`Crea GeneradorHTML.java que:
1. Use Text Blocks para definir un template HTML con placeholders %s
2. Método static String generarPagina(String titulo, String contenido)
3. Método static String generarTabla(List<String[]> filas)
4. Use .formatted() para insertar valores
5. Imprima el HTML resultante`,hint:`String template = """
<html>...
""".formatted(titulo, contenido);`,solution:`import java.util.List;

public class GeneradorHTML {
    static String generarPagina(String titulo, String contenido) {
        return """
            <html>
              <head><title>%s</title></head>
              <body>
                <h1>%s</h1>
                <div>%s</div>
              </body>
            </html>
            """.formatted(titulo, titulo, contenido);
    }

    static String generarTabla(List<String[]> filas) {
        var sb = new StringBuilder("<table>\\n");
        for (var fila : filas) {
            sb.append("  <tr>");
            for (var celda : fila) sb.append("<td>%s</td>".formatted(celda));
            sb.append("</tr>\\n");
        }
        sb.append("</table>");
        return sb.toString();
    }

    public static void main(String[] args) {
        var tabla = generarTabla(List.of(
            new String[]{"Java", "17"},
            new String[]{"Spring", "3.2"}
        ));
        System.out.println(generarPagina("Mi App", tabla));
    }
}`,solutionFilename:"GeneradorHTML.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-33: text blocks, var, string enhancements"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 34"})," — Spring Boot: introducción al framework."]})]})})]})}function xS(){return t.jsxs("div",{children:[t.jsx(oe,{day:26,title:"Virtual Threads",duration:"45 min",commitMsg:"dia-26: virtual threads Java 21, Spring Boot integration"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy descubrirás Virtual Threads (Java 21, Project Loom) — una revolución que permite crear millones de hilos ligeros sin cambiar tu código. Escribes código síncrono normal y la JVM lo hace eficiente por debajo, eliminando la necesidad de reactive programming en la mayoría de casos."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Por qué son revolucionarios?"}),t.jsxs(ne,{title:"Virtual Threads = async/await sin cambiar tu código",children:[t.jsxs("p",{children:["En Node.js usas ",t.jsx("code",{className:"text-primary",children:"async/await"})," para no bloquear el event loop. Si haces una query a BD o una llamada HTTP, usas await para que el hilo no se quede esperando. En Java clásico, cada thread bloqueante consume ~1MB de RAM del sistema operativo. Si tienes 10,000 conexiones simultáneas, necesitas 10,000 threads = ~10GB de RAM solo en stacks."]}),t.jsxs("p",{children:["Con ",t.jsx("strong",{className:"text-text",children:"Virtual Threads"}),', puedes crear MILLONES de hilos porque son gestionados por la JVM (no por el SO). Cada uno ocupa solo unos pocos KB. Cuando un virtual thread se bloquea esperando I/O (BD, HTTP, archivo), la JVM lo "desmonta" del thread real y monta otro. Es como async/await pero ',t.jsx("strong",{className:"text-text",children:"transparente"})," — tu código sigue siendo secuencial y simple."]}),t.jsxs("p",{children:[t.jsx("strong",{className:"text-text",children:"Impacto práctico:"})," Spring Boot 3.2+ puede usar virtual threads para manejar peticiones HTTP. Activando una sola propiedad, cada petición corre en un virtual thread, permitiendo miles de conexiones concurrentes sin reactive programming (WebFlux/Reactor)."]})]}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Los ",t.jsx("strong",{className:"text-text",children:"hilos de plataforma"})," (threads clásicos) son costosos: cada uno ocupa ~1MB de memoria del SO. Una JVM puede manejar unos pocos miles. Con ",t.jsx("strong",{className:"text-text",children:"Virtual Threads"}),", puedes crear millones porque son gestionados por la JVM, no por el sistema operativo."]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[t.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[t.jsx("h3",{className:"font-bold text-text mb-2",children:"Hilos de plataforma (antes)"}),t.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[t.jsx("li",{children:"• ~1MB por hilo (stack del SO)"}),t.jsx("li",{children:"• Máximo ~10,000 hilos prácticos"}),t.jsx("li",{children:"• Context switch costoso"}),t.jsx("li",{children:"• Limitante para apps I/O-bound"})]})]}),t.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[t.jsx("h3",{className:"font-bold text-text mb-2",children:"Virtual Threads (Java 21)"}),t.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[t.jsx("li",{children:"• Muy ligeros (~KB por hilo)"}),t.jsx("li",{children:"• Millones de hilos posibles"}),t.jsx("li",{children:"• Gestionados por la JVM"}),t.jsx("li",{children:"• Ideal para apps I/O-bound (REST, BD)"})]})]})]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Crear Virtual Threads"}),t.jsx(S,{filename:"VirtualThreads.java",code:`
// Crear un virtual thread (Java 21)
Thread vt = Thread.ofVirtual().start(() -> {
    System.out.println("Ejecutando en virtual thread: " + Thread.currentThread());
});
vt.join();

// Thread.startVirtualThread() — forma corta
Thread.startVirtualThread(() -> System.out.println("Hola desde virtual thread!"));

// ExecutorService con virtual threads (la forma más común)
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    // Cada tarea corre en su propio virtual thread
    for (int i = 0; i < 10_000; i++) {
        final int id = i;
        executor.submit(() -> {
            // Simular I/O (ej: llamada a BD, HTTP request)
            Thread.sleep(Duration.ofMillis(100));
            System.out.println("Tarea " + id + " completada");
        });
    }
} // auto-shutdown con try-with-resources

// Comparación directa
// Hilos de plataforma: 1,000 hilos = ~1GB RAM
// Virtual Threads: 1,000,000 hilos = ~100MB RAM
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Virtual Threads en Spring Boot"}),t.jsx(S,{language:"bash",filename:"application.properties",code:`
# Habilitar virtual threads en Spring Boot 3.2+ (Java 21)
spring.threads.virtual.enabled=true

# Esto hace que Spring use virtual threads automáticamente para:
# - Peticiones HTTP (Tomcat/Jetty)
# - @Async tasks
# - @Scheduled tasks
# ¡Sin cambiar ningún código de tu aplicación!
`}),t.jsx(S,{filename:"Config.java",code:`
// Alternativa: configurar manualmente
@Configuration
public class ThreadConfig {

    @Bean
    public TomcatProtocolHandlerCustomizer<?> virtualThreadsProtocolHandler() {
        return handler ->
            handler.setExecutor(Executors.newVirtualThreadPerTaskExecutor());
    }
}

// Verificar si un thread es virtual
Thread t = Thread.currentThread();
System.out.println(t.isVirtual()); // true si es virtual thread
`}),t.jsxs(F,{type:"spring",children:["Con Spring Boot 3.2+ y Java 21, solo necesitas ",t.jsx("code",{className:"text-primary",children:"spring.threads.virtual.enabled=true"})," en tu ",t.jsx("code",{className:"text-primary",children:"application.properties"}),". Spring maneja todo automáticamente. Tu API REST puede manejar miles de peticiones concurrentes bloqueantes sin cambiar ningún código."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Cuándo usar Virtual Threads?"}),t.jsxs(F,{type:"tip",children:[t.jsx("strong",{children:"Ideal para"}),": aplicaciones I/O-bound (APIs REST, acceso a BD, llamadas HTTP externas).",t.jsx("br",{}),t.jsx("br",{}),t.jsx("strong",{children:"No reemplaza"}),": ",t.jsx("code",{className:"text-primary",children:"CompletableFuture"})," o reactive programming para lógica async compleja. Si ya tienes un sistema reactivo (WebFlux), no necesitas migrar.",t.jsx("br",{}),t.jsx("br",{}),t.jsx("strong",{children:"Regla simple"}),": si usas Spring Boot con operaciones bloqueantes (JPA, RestTemplate, etc.), habilita virtual threads y obtendrás mayor throughput sin código adicional."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 26"}),t.jsx(K,{number:1,title:"Benchmark: Platform vs Virtual Threads",description:`Crea un benchmark que:
1. Lance 10,000 tareas que duermen 100ms cada una (simulando I/O)
2. Primero con Executors.newFixedThreadPool(100)
3. Luego con Executors.newVirtualThreadPerTaskExecutor()
4. Mide y compara el tiempo total de ambos enfoques`,hint:"Usa System.currentTimeMillis() antes y después. El pool fijo tardará ~10s, virtual threads ~100ms.",solution:`import java.util.concurrent.*;
import java.time.*;

public class BenchmarkThreads {
    static void benchmark(String nombre, ExecutorService executor) throws Exception {
        long inicio = System.currentTimeMillis();
        for (int i = 0; i < 10_000; i++) {
            executor.submit(() -> {
                try { Thread.sleep(100); }
                catch (InterruptedException e) { throw new RuntimeException(e); }
            });
        }
        executor.shutdown();
        executor.awaitTermination(1, TimeUnit.MINUTES);
        long ms = System.currentTimeMillis() - inicio;
        System.out.printf("%s: %dms%n", nombre, ms);
    }

    public static void main(String[] args) throws Exception {
        benchmark("FixedPool(100)", Executors.newFixedThreadPool(100));
        benchmark("VirtualThreads", Executors.newVirtualThreadPerTaskExecutor());
    }
}`,solutionFilename:"BenchmarkThreads.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-26: virtual threads, benchmark, Spring Boot config"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 27"})," — I/O y archivos: leer, escribir, Path, Files."]})]})})]})}function gS(){return t.jsxs("div",{children:[t.jsx(oe,{day:42,title:"Manejo de Excepciones",duration:"45 min",commitMsg:"dia-42: @ControllerAdvice, @ExceptionHandler, ErrorResponse"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy centralizarás el manejo de errores de tu API en un solo lugar usando ",t.jsx("code",{className:"text-primary",children:"@ControllerAdvice"}),". En vez de poner try-catch en cada Controller, defines UN handler global que intercepta excepciones de cualquier endpoint y las transforma en respuestas JSON limpias y profesionales."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Por qué necesitas manejo global de errores?"}),t.jsxs(ne,{title:"@ControllerAdvice = ErrorHandler global de Angular",children:[t.jsxs("p",{children:["En Angular usas un ",t.jsx("code",{className:"text-primary",children:"ErrorHandler"})," global o HTTP interceptors para capturar errores de forma centralizada y mostrar mensajes al usuario. En Spring,",t.jsx("code",{className:"text-primary",children:" @ControllerAdvice"})," hace exactamente lo mismo: intercepta excepciones que ocurren en cualquier Controller y las transforma en respuestas HTTP con formato consistente."]}),t.jsx("p",{children:"Sin esto, cuando tu código lanza una excepción, Spring retorna un stacktrace completo en el JSON de respuesta (exponiendo detalles internos de tu código) o una página HTML blanca de error. Ambas opciones son inaceptables en una API profesional — necesitas respuestas JSON estructuradas con códigos HTTP correctos (400, 404, 500) y mensajes claros para el frontend."})]}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["El patrón es: (1) creas excepciones personalizadas para cada caso de error (recurso no encontrado, validación fallida, acceso denegado), (2) las lanzas desde tus Services cuando algo falla, y (3) ",t.jsx("code",{className:"text-primary",children:"@ControllerAdvice"})," las captura y las convierte en ResponseEntity con el código HTTP y body JSON apropiados. Tu código de negocio solo lanza excepciones — nunca se preocupa por construir respuestas HTTP de error."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Excepciones personalizadas"}),t.jsx(S,{filename:"Excepciones.java",code:`
// Excepción para recurso no encontrado (404)
public class RecursoNoEncontradoException extends RuntimeException {
    public RecursoNoEncontradoException(String mensaje) {
        super(mensaje);
    }
}

// Excepción para datos duplicados (409)
public class RecursoDuplicadoException extends RuntimeException {
    public RecursoDuplicadoException(String mensaje) {
        super(mensaje);
    }
}

// Usar en el Service:
public Usuario buscarPorId(Long id) {
    return repository.findById(id)
        .orElseThrow(() -> new RecursoNoEncontradoException(
            "Usuario con id " + id + " no encontrado"
        ));
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"ErrorResponse DTO"}),t.jsx(S,{filename:"ErrorResponse.java",code:`
// Estructura consistente para todas las respuestas de error
public record ErrorResponse(
    int status,
    String error,
    String mensaje,
    String timestamp,
    String path
) {
    public static ErrorResponse of(int status, String error, String mensaje, String path) {
        return new ErrorResponse(
            status, error, mensaje,
            LocalDateTime.now().toString(),
            path
        );
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"@ControllerAdvice — Manejador global"}),t.jsx(S,{filename:"GlobalExceptionHandler.java",code:`
@RestControllerAdvice  // = @ControllerAdvice + @ResponseBody
public class GlobalExceptionHandler {

    // 404 - No encontrado
    @ExceptionHandler(RecursoNoEncontradoException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleNoEncontrado(
            RecursoNoEncontradoException ex,
            HttpServletRequest request) {
        return ErrorResponse.of(404, "Not Found", ex.getMessage(), request.getRequestURI());
    }

    // 409 - Conflicto (duplicado)
    @ExceptionHandler(RecursoDuplicadoException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ErrorResponse handleDuplicado(
            RecursoDuplicadoException ex,
            HttpServletRequest request) {
        return ErrorResponse.of(409, "Conflict", ex.getMessage(), request.getRequestURI());
    }

    // 400 - Validación fallida (@Valid)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, Object> handleValidacion(
            MethodArgumentNotValidException ex,
            HttpServletRequest request) {
        Map<String, String> errores = new HashMap<>();
        ex.getBindingResult().getFieldErrors()
            .forEach(e -> errores.put(e.getField(), e.getDefaultMessage()));

        return Map.of(
            "status", 400,
            "error", "Bad Request",
            "errores", errores,
            "path", request.getRequestURI()
        );
    }

    // 500 - Cualquier otra excepción no manejada
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleGeneral(Exception ex, HttpServletRequest request) {
        return ErrorResponse.of(500, "Internal Server Error",
            "Error interno del servidor", request.getRequestURI());
    }
}
`}),t.jsxs(F,{type:"spring",children:["Con este patrón, cuando tu Service lanza ",t.jsx("code",{className:"text-primary",children:"RecursoNoEncontradoException"}),", Spring automáticamente retorna un JSON 404 limpio al cliente. Nunca más stacktraces expuestos en producción."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejemplo de respuesta JSON"}),t.jsx(S,{language:"bash",filename:"GET /api/usuarios/99 (no existe)",code:`
// HTTP 404 Not Found
{
  "status": 404,
  "error": "Not Found",
  "mensaje": "Usuario con id 99 no encontrado",
  "timestamp": "2024-01-15T10:30:45",
  "path": "/api/usuarios/99"
}

// HTTP 400 Bad Request (validación)
{
  "status": 400,
  "error": "Bad Request",
  "errores": {
    "email": "debe ser una dirección de correo válida",
    "nombre": "el nombre no puede estar vacío"
  },
  "path": "/api/usuarios"
}
`}),t.jsxs(F,{type:"angular",children:["En Angular, tu ",t.jsx("code",{className:"text-primary",children:"HttpClient"})," recibirá estos errores en el bloque",t.jsx("code",{className:"text-primary",children:" catchError"})," del observable. El ",t.jsx("code",{className:"text-primary",children:"error.error.mensaje"}),"o ",t.jsx("code",{className:"text-primary",children:"error.error.errores"})," tendrá el detalle para mostrar en la UI."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 42"}),t.jsx(K,{number:1,title:"GlobalExceptionHandler completo",description:`Implementa un @RestControllerAdvice con handlers para:
1. RecursoNoEncontradoException → 404
2. RecursoDuplicadoException → 409
3. IllegalArgumentException → 400
4. Exception genérica → 500
Todos retornando ErrorResponse con status, error, mensaje, timestamp, path.`,hint:"@ExceptionHandler(MiException.class) @ResponseStatus(HttpStatus.NOT_FOUND) public ErrorResponse handle(...)",solution:`@RestControllerAdvice
public class GlobalExceptionHandler {
    record ErrorResponse(int status, String error, String mensaje, String timestamp, String path) {
        static ErrorResponse of(int s, String e, String m, String p) {
            return new ErrorResponse(s, e, m, java.time.LocalDateTime.now().toString(), p);
        }
    }

    @ExceptionHandler(RecursoNoEncontradoException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handle404(RecursoNoEncontradoException ex, HttpServletRequest req) {
        return ErrorResponse.of(404, "Not Found", ex.getMessage(), req.getRequestURI());
    }

    @ExceptionHandler(RecursoDuplicadoException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ErrorResponse handle409(RecursoDuplicadoException ex, HttpServletRequest req) {
        return ErrorResponse.of(409, "Conflict", ex.getMessage(), req.getRequestURI());
    }

    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handle400(IllegalArgumentException ex, HttpServletRequest req) {
        return ErrorResponse.of(400, "Bad Request", ex.getMessage(), req.getRequestURI());
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handle500(Exception ex, HttpServletRequest req) {
        return ErrorResponse.of(500, "Internal Server Error", "Error interno", req.getRequestURI());
    }
}`,solutionFilename:"GlobalExceptionHandler.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-42: @ControllerAdvice, ErrorResponse, exception handlers"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 43"})," — Validación con @Valid y Bean Validation."]})]})})]})}function hS(){return t.jsxs("div",{children:[t.jsx(oe,{day:43,title:"Validación con Bean Validation",duration:"45 min",commitMsg:"dia-43: @Valid, @NotBlank, @Email, @Size, grupos de validación"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy aprenderás Bean Validation — el estándar de Java para validar datos con anotaciones declarativas. La validación del frontend es para UX (feedback rápido); la del backend es para ",t.jsx("strong",{className:"text-text",children:"seguridad"}),". Nunca confíes en que el cliente envía datos correctos — cualquiera puede usar Postman o curl."]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Cómo funciona Bean Validation?"}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:[t.jsx("strong",{className:"text-text",children:"Bean Validation"})," (JSR 380) te permite declarar restricciones con anotaciones (",t.jsx("code",{className:"text-primary",children:"@NotBlank"}),", ",t.jsx("code",{className:"text-primary",children:"@Email"}),", ",t.jsx("code",{className:"text-primary",children:"@Size"}),") directamente en los campos de tu DTO. Cuando un Controller recibe un request con ",t.jsx("code",{className:"text-primary",children:"@Valid"}),", Spring valida automáticamente el objeto ANTES de ejecutar tu método. Si falla, lanza una excepción que puedes manejar para retornar un error 400 con los mensajes apropiados."]}),t.jsxs(ne,{title:"Bean Validation = Validators de Angular Reactive Forms",children:[t.jsxs("p",{children:["En Angular usas ",t.jsx("code",{className:"text-primary",children:"Validators.required"}),", ",t.jsx("code",{className:"text-primary",children:"Validators.email"}),",",t.jsx("code",{className:"text-primary",children:" Validators.minLength()"})," en Reactive Forms. En Java es el mismo concepto pero con anotaciones: ",t.jsx("code",{className:"text-primary",children:"@NotBlank"}),", ",t.jsx("code",{className:"text-primary",children:"@Email"}),",",t.jsx("code",{className:"text-primary",children:" @Size(min=2)"})," directamente en los campos del DTO."]}),t.jsxs("p",{children:["La diferencia: en Angular la validación es en el navegador del usuario (puede saltarse). En Spring, la validación corre en el servidor — si no pasa, el request nunca llega a tu lógica de negocio.",t.jsx("strong",{className:"text-text",children:" Siempre valida en ambos lados"}),": frontend para UX, backend para seguridad."]})]}),t.jsx(S,{filename:"UsuarioDTO.java",code:`
import jakarta.validation.constraints.*;

public class UsuarioDTO {

    @NotBlank(message = "El nombre no puede estar vacío")
    @Size(min = 2, max = 100, message = "El nombre debe tener entre 2 y 100 caracteres")
    private String nombre;

    @NotBlank(message = "El email es obligatorio")
    @Email(message = "Debe ser una dirección de correo válida")
    private String email;

    @NotNull(message = "La edad es obligatoria")
    @Min(value = 0, message = "La edad no puede ser negativa")
    @Max(value = 150, message = "La edad no puede superar 150")
    private Integer edad;

    @NotBlank(message = "La contraseña es obligatoria")
    @Size(min = 8, message = "La contraseña debe tener al menos 8 caracteres")
    @Pattern(regexp = ".*[A-Z].*", message = "Debe contener al menos una mayúscula")
    private String password;

    @Positive(message = "El precio debe ser positivo")
    private Double precio;

    @NotEmpty(message = "La lista no puede estar vacía")
    private List<String> roles;

    @Past(message = "La fecha de nacimiento debe ser en el pasado")
    private LocalDate fechaNacimiento;

    // getters y setters...
}
`}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3 mb-4",children:[{a:"@NotNull",d:"No nulo"},{a:"@NotBlank",d:"No nulo ni vacío (String)"},{a:"@NotEmpty",d:"No nulo ni vacío (colecciones)"},{a:"@Size",d:"Tamaño min/max"},{a:"@Min / @Max",d:"Valor mínimo/máximo"},{a:"@Email",d:"Formato email"},{a:"@Pattern",d:"Expresión regular"},{a:"@Positive",d:"Número positivo"},{a:"@Past / @Future",d:"Fecha en pasado/futuro"}].map(({a:l,d:c})=>t.jsxs("div",{className:"p-3 bg-bg-secondary rounded-lg border border-border",children:[t.jsx("code",{className:"text-primary text-sm",children:l}),t.jsx("p",{className:"text-text-muted text-xs mt-1",children:c})]},l))})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Activar validación en el Controller"}),t.jsx(S,{filename:"UsuarioController.java",code:`
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    // @Valid activa la validación del RequestBody
    @PostMapping
    public ResponseEntity<UsuarioDTO> crear(@RequestBody @Valid UsuarioDTO usuario) {
        // Si la validación falla, Spring lanza MethodArgumentNotValidException
        // y @ControllerAdvice la maneja automáticamente (retorna 400)
        UsuarioDTO creado = service.guardar(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(creado);
    }

    // También funciona con @RequestParam y @PathVariable con @Validated
    @GetMapping("/{id}")
    public ResponseEntity<UsuarioDTO> obtener(
            @PathVariable @Positive(message = "El id debe ser positivo") Long id) {
        return service.buscarPorId(id)
            .map(ResponseEntity::ok)
            .orElseThrow(() -> new RecursoNoEncontradoException("Usuario " + id + " no encontrado"));
    }
}

// Para validar @PathVariable y @RequestParam, la clase controller debe tener:
@Validated  // en la clase del controller (no en el método)
`}),t.jsxs(F,{type:"tip",children:[t.jsx("code",{className:"text-primary",children:"@Valid"})," vs ",t.jsx("code",{className:"text-primary",children:"@Validated"}),": Usa ",t.jsx("code",{className:"text-primary",children:"@Valid"}),"para validar el body completo de una petición. Usa ",t.jsx("code",{className:"text-primary",children:"@Validated"})," a nivel de clase para habilitar validación en parámetros sueltos (",t.jsx("code",{className:"text-primary",children:"@PathVariable"}),", ",t.jsx("code",{className:"text-primary",children:"@RequestParam"}),")."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Validación en grupos y anidada"}),t.jsx(S,{filename:"ValidacionAvanzada.java",code:`
// Validación anidada: validar objetos dentro de objetos
public class PedidoDTO {
    @Valid  // activa la validación de los objetos dentro de la lista
    @NotEmpty
    private List<@Valid ProductoDTO> productos;

    @Valid
    @NotNull
    private DireccionDTO direccion;
}

// Grupos de validación: validar diferente en create vs update
public interface OnCreate {}
public interface OnUpdate {}

public class UsuarioDTO {
    @Null(groups = OnCreate.class)  // null al crear (lo genera la BD)
    @NotNull(groups = OnUpdate.class)  // requerido al actualizar
    private Long id;

    @NotBlank(groups = {OnCreate.class, OnUpdate.class})
    private String nombre;
}

// En el controller, usar @Validated(grupo) en lugar de @Valid
@PostMapping
public ResponseEntity<?> crear(@RequestBody @Validated(OnCreate.class) UsuarioDTO dto) {...}

@PutMapping("/{id}")
public ResponseEntity<?> actualizar(@RequestBody @Validated(OnUpdate.class) UsuarioDTO dto) {...}
`}),t.jsxs(F,{type:"angular",children:["Bean Validation es equivalente a los validadores de Angular Reactive Forms:",t.jsx("code",{className:"text-primary",children:" @NotBlank"})," = ",t.jsx("code",{className:"text-primary",children:"Validators.required"}),",",t.jsx("code",{className:"text-primary",children:" @Email"})," = ",t.jsx("code",{className:"text-primary",children:"Validators.email"}),",",t.jsx("code",{className:"text-primary",children:" @Size"})," = ",t.jsx("code",{className:"text-primary",children:"Validators.minLength/maxLength"}),". La diferencia: en Spring la validación ocurre en el servidor (nunca confíes solo en el cliente)."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 43"}),t.jsx(K,{number:1,title:"DTO con validaciones completas",description:`Crea ProductoCreateRequest con:
- nombre: @NotBlank, @Size(2-100)
- precio: @NotNull, @Positive
- categoria: @NotBlank
- stock: @Min(0)
Usa @Valid en el controller y verifica que Spring retorna 400 con mensajes claros.`,hint:"@PostMapping public ResponseEntity<?> crear(@RequestBody @Valid ProductoCreateRequest req)",solution:`public record ProductoCreateRequest(
    @NotBlank(message = "Nombre requerido")
    @Size(min = 2, max = 100, message = "Nombre: 2-100 chars")
    String nombre,

    @NotNull(message = "Precio requerido")
    @Positive(message = "Precio debe ser positivo")
    Double precio,

    @NotBlank(message = "Categoría requerida")
    String categoria,

    @Min(value = 0, message = "Stock no puede ser negativo")
    int stock
) {}

// En el controller:
@PostMapping
public ResponseEntity<ProductoResponse> crear(
        @RequestBody @Valid ProductoCreateRequest req) {
    return ResponseEntity.status(HttpStatus.CREATED)
        .body(service.crear(req));
}`,solutionFilename:"ProductoCreateRequest.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-43: Bean Validation, @Valid, grupos de validación"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 44"})," — DTOs y MapStruct: separar API de BD."]})]})})]})}function bS(){return t.jsxs("div",{children:[t.jsx(oe,{day:44,title:"DTOs y MapStruct",duration:"50 min",commitMsg:"dia-44: DTOs, records, mapper manual, MapStruct"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás DTOs (Data Transfer Objects) — la capa intermedia que separa tu modelo de base de datos de lo que tu API expone al mundo. Es una práctica esencial en APIs profesionales que protege datos sensibles y desacopla tu API de tu esquema de BD."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Por qué NUNCA exponer entidades JPA directamente?"}),t.jsxs(ne,{title:"DTOs = interfaces de Angular para tipar la API (pero del lado servidor)",children:[t.jsxs("p",{children:["En Angular creas interfaces como ",t.jsx("code",{className:"text-primary",children:"UserResponse"})," y",t.jsx("code",{className:"text-primary",children:" CreateUserRequest"})," para tipar exactamente lo que envías/recibes del backend. No usas la misma interfaz para todo — el formulario de registro no tiene los mismos campos que el perfil público del usuario."]}),t.jsxs("p",{children:["En Spring es lo mismo: creas DTOs (generalmente records) específicos para cada operación. Un ",t.jsx("code",{className:"text-primary",children:"CrearUsuarioRequest"})," recibe nombre+email+contraseña. Un ",t.jsx("code",{className:"text-primary",children:"UsuarioResponse"})," retorna id+nombre+email (sin contraseña). Tu entidad JPA ",t.jsx("code",{className:"text-primary",children:"Usuario"})," tiene todos los campos + relaciones + auditoría — pero nunca sale directamente al JSON de respuesta."]})]}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Exponer directamente tus entidades JPA a la API es uno de los errores más comunes en Spring Boot. Los ",t.jsx("strong",{className:"text-text",children:"DTOs"})," son objetos simples (records) diseñados específicamente para cada caso de uso de tu API, sin acoplar el contrato HTTP al modelo interno de BD."]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[t.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[t.jsx("h3",{className:"font-bold text-red-400 mb-2",children:"❌ Sin DTOs (problemas)"}),t.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[t.jsx("li",{children:"• Expones campos internos (contraseña, etc.)"}),t.jsx("li",{children:"• Lazy-loading de JPA causa errores JSON"}),t.jsx("li",{children:"• Ciclos infinitos en relaciones bidireccionales"}),t.jsx("li",{children:"• El cliente puede enviar campos que no debería"}),t.jsx("li",{children:"• Cambio en la BD = cambio en la API"})]})]}),t.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[t.jsx("h3",{className:"font-bold text-green-400 mb-2",children:"✅ Con DTOs (solución)"}),t.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[t.jsx("li",{children:"• Solo expones lo que el cliente necesita"}),t.jsx("li",{children:"• Sin problemas de serialización JPA"}),t.jsx("li",{children:"• Puedes tener DTOs distintos para crear/leer"}),t.jsx("li",{children:"• La BD y la API evolucionan independientemente"}),t.jsx("li",{children:"• Validaciones específicas por operación"})]})]})]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Definir DTOs con Records"}),t.jsx(S,{filename:"DTOs.java",code:`
// Entidad JPA (base de datos)
@Entity
public class Usuario {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String email;
    private String passwordHash; // ¡nunca debe salir en la API!
    @OneToMany(mappedBy = "usuario")
    private List<Pedido> pedidos; // relación que puede causar problemas
}

// DTO de respuesta (GET) — solo lo que el cliente necesita ver
public record UsuarioResponse(
    Long id,
    String nombre,
    String email
) {}

// DTO de creación (POST) — lo que el cliente envía
public record UsuarioCreateRequest(
    @NotBlank String nombre,
    @Email String email,
    @Size(min = 8) String password  // aquí sí recibimos la contraseña
) {}

// DTO de actualización (PUT/PATCH)
public record UsuarioUpdateRequest(
    @NotBlank String nombre,
    @Email String email
) {}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Mapeo manual y con MapStruct"}),t.jsx(S,{filename:"UsuarioMapper.java",code:`
// Opción 1: Mapeo manual (simple, sin dependencias)
@Component
public class UsuarioMapper {

    public UsuarioResponse toResponse(Usuario usuario) {
        return new UsuarioResponse(
            usuario.getId(),
            usuario.getNombre(),
            usuario.getEmail()
        );
    }

    public Usuario toEntity(UsuarioCreateRequest request, PasswordEncoder encoder) {
        var usuario = new Usuario();
        usuario.setNombre(request.nombre());
        usuario.setEmail(request.email());
        usuario.setPasswordHash(encoder.encode(request.password()));
        return usuario;
    }

    public List<UsuarioResponse> toResponseList(List<Usuario> usuarios) {
        return usuarios.stream().map(this::toResponse).toList();
    }
}

// Opción 2: MapStruct (genera el mapeo automáticamente)
// Dependencia: org.mapstruct:mapstruct
@Mapper(componentModel = "spring")
public interface UsuarioMapper {
    UsuarioResponse toResponse(Usuario usuario);  // automático por nombres iguales
    List<UsuarioResponse> toResponseList(List<Usuario> usuarios);

    @Mapping(target = "passwordHash", ignore = true) // ignorar campo
    Usuario toEntity(UsuarioCreateRequest request);
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Usando DTOs en Controller y Service"}),t.jsx(S,{filename:"UsuarioController.java",code:`
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
    private final UsuarioService service;

    @GetMapping
    public List<UsuarioResponse> listar() {
        return service.listarTodos(); // retorna DTOs, no entidades
    }

    @PostMapping
    public ResponseEntity<UsuarioResponse> crear(
            @RequestBody @Valid UsuarioCreateRequest request) {
        UsuarioResponse creado = service.crear(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(creado);
    }
}

@Service
public class UsuarioService {
    private final UsuarioRepository repository;
    private final UsuarioMapper mapper;
    private final PasswordEncoder encoder;

    public List<UsuarioResponse> listarTodos() {
        return mapper.toResponseList(repository.findAll());
    }

    @Transactional
    public UsuarioResponse crear(UsuarioCreateRequest request) {
        if (repository.existsByEmail(request.email())) {
            throw new RecursoDuplicadoException("Email ya registrado");
        }
        Usuario usuario = mapper.toEntity(request, encoder);
        return mapper.toResponse(repository.save(usuario));
    }
}
`}),t.jsxs(F,{type:"angular",children:["Los DTOs en Spring son como los ",t.jsx("strong",{children:"interfaces/models"})," en Angular:",t.jsx("code",{className:"text-primary",children:" UsuarioResponse"})," = la interface que defines en Angular para tipar lo que llega del HTTP. ",t.jsx("code",{className:"text-primary",children:"UsuarioCreateRequest"})," = los datos del formulario que envías al backend."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 44"}),t.jsx(K,{number:1,title:"DTOs completos para Producto",description:`Crea el set completo de DTOs para Producto:
1. ProductoResponse(Long id, String nombre, double precio, String categoria)
2. ProductoCreateRequest con validaciones (@NotBlank, @Positive)
3. ProductoUpdateRequest (nombre y precio opcionales)
4. ProductoMapper manual con toResponse(), toEntity(), toResponseList()
5. Úsalos en el Controller y Service`,hint:"Los records son perfectos para DTOs. El mapper convierte entre entidad y DTO.",solution:`public record ProductoResponse(Long id, String nombre, double precio, String cat) {}
public record ProductoCreateRequest(
    @NotBlank String nombre, @Positive double precio, @NotBlank String cat) {}
public record ProductoUpdateRequest(String nombre, Double precio) {}

@Component
public class ProductoMapper {
    public ProductoResponse toResponse(Producto p) {
        return new ProductoResponse(p.getId(), p.getNombre(), p.getPrecio(), p.getCategoria());
    }
    public Producto toEntity(ProductoCreateRequest r) {
        var p = new Producto();
        p.setNombre(r.nombre()); p.setPrecio(r.precio()); p.setCategoria(r.cat());
        return p;
    }
    public List<ProductoResponse> toResponseList(List<Producto> list) {
        return list.stream().map(this::toResponse).toList();
    }
}`,solutionFilename:"ProductoMapper.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-44: DTOs, records, mapper, separar API de BD"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",t.jsx("strong",{className:"text-text",children:"Día 45"})," — Perfiles, configuración y CORS."]})]})})]})}function yS(){return t.jsxs("div",{children:[t.jsx(oe,{day:45,title:"Perfiles y Configuración",duration:"50 min",commitMsg:"dia-45: profiles, @Value, @ConfigurationProperties, CORS"}),t.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Último día del roadmap. Hoy aprenderás a configurar tu aplicación para diferentes entornos (desarrollo, testing, producción) usando perfiles, a externalizar configuración de forma segura, y a configurar CORS para que tu frontend Angular pueda comunicarse con tu API Spring Boot."}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Perfiles de entorno (Profiles)"}),t.jsxs(ne,{title:"Profiles = environment.ts de Angular (pero más potente)",children:[t.jsxs("p",{children:["En Angular tienes ",t.jsx("code",{className:"text-primary",children:"environment.ts"})," y ",t.jsx("code",{className:"text-primary",children:"environment.prod.ts"}),"para cambiar URLs de API y flags según el entorno. En Spring Boot es el mismo concepto pero más completo: creas ",t.jsx("code",{className:"text-primary",children:"application-dev.properties"})," y",t.jsx("code",{className:"text-primary",children:" application-prod.properties"}),", y Spring carga automáticamente el archivo correcto según el perfil activo."]}),t.jsx("p",{children:"La ventaja: en Angular los environments se compilan en el bundle (si cambias algo, reconstruyes). En Spring Boot, los profiles se activan con una variable de entorno o argumento — el mismo JAR funciona en dev o producción sin recompilar. Además puedes tener secrets en variables de entorno que nunca entran al código fuente."})]}),t.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Los ",t.jsx("strong",{className:"text-text",children:"profiles"})," permiten tener configuraciones completamente diferentes para cada entorno: BD en memoria para desarrollo (H2), BD real para producción (PostgreSQL), diferentes puertos, niveles de log, etc. Se activan con una sola propiedad o variable de entorno."]}),t.jsx(S,{language:"bash",filename:"src/main/resources/application.properties",code:`
# Perfil activo (cambiar según entorno)
spring.profiles.active=dev
`}),t.jsx(S,{language:"bash",filename:"application-dev.properties",code:`
# Configuración de DESARROLLO
spring.datasource.url=jdbc:h2:mem:devdb
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=create-drop
server.port=8080
logging.level.com.miapp=DEBUG
spring.h2.console.enabled=true
`}),t.jsx(S,{language:"bash",filename:"application-prod.properties",code:`
# Configuración de PRODUCCIÓN
spring.datasource.url=jdbc:postgresql://prod-server:5432/miapp
spring.datasource.username=\${DB_USERNAME}
spring.datasource.password=\${DB_PASSWORD}
spring.jpa.show-sql=false
spring.jpa.hibernate.ddl-auto=validate
server.port=8080
logging.level.root=WARN
spring.h2.console.enabled=false
`}),t.jsx(S,{language:"bash",filename:"application-test.properties",code:`
# Configuración de TESTS
spring.datasource.url=jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1
spring.jpa.hibernate.ddl-auto=create-drop
logging.level.root=ERROR
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"@Value y @ConfigurationProperties"}),t.jsx(S,{filename:"Configuracion.java",code:`
// @Value: inyectar una propiedad individual
@Service
public class EmailService {

    @Value("\${app.email.from}")
    private String emailFrom;

    @Value("\${app.email.smtp-host:localhost}")  // :localhost es el valor por defecto
    private String smtpHost;

    @Value("\${app.max-file-size:10}")
    private int maxFileSizeMb;
}

// @ConfigurationProperties: agrupar propiedades relacionadas (recomendado)
@ConfigurationProperties(prefix = "app")
@Component
public class AppConfig {
    private String nombre;
    private String version;
    private Email email = new Email();
    private Security security = new Security();

    public record Email(String from, String smtpHost, int smtpPort) {
        public Email() { this("noreply@app.com", "localhost", 587); }
    }
    public record Security(String jwtSecret, int jwtExpiracion) {
        public Security() { this("secret", 86400); }
    }
    // getters y setters...
}
`}),t.jsx(S,{language:"bash",filename:"application.properties (propiedades custom)",code:`
app.nombre=Mi API
app.version=1.0.0
app.email.from=noreply@miapp.com
app.email.smtp-host=smtp.gmail.com
app.email.smtp-port=587
app.security.jwt-secret=clave-super-secreta-de-produccion
app.security.jwt-expiracion=86400
`}),t.jsxs(F,{type:"tip",children:["Usa ",t.jsx("code",{className:"text-primary",children:"@ConfigurationProperties"})," sobre ",t.jsx("code",{className:"text-primary",children:"@Value"})," para grupos de propiedades — es más limpio, testeable y soporta autocompletado en IDEs. Las propiedades sensibles (passwords, secrets) siempre deben venir de variables de entorno en producción."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"@Profile — Beans por entorno"}),t.jsx(S,{filename:"Beans.java",code:`
// Bean solo activo en desarrollo
@Component
@Profile("dev")
public class DataInitializer implements CommandLineRunner {
    private final UsuarioRepository repository;

    @Override
    public void run(String... args) {
        // Carga datos de prueba al arrancar en dev
        repository.save(new Usuario("Admin", "admin@dev.com"));
        System.out.println("Datos de prueba cargados");
    }
}

// Bean activo en prod y staging
@Service
@Profile({"prod", "staging"})
public class EmailServiceReal implements EmailService {
    // Implementación real con SMTP
}

// Bean activo en todo EXCEPTO prod
@Service
@Profile("!prod")
public class EmailServiceMock implements EmailService {
    // Implementación fake para dev/test
    @Override
    public void enviar(String to, String subject, String body) {
        System.out.println("EMAIL MOCK -> " + to + ": " + subject);
    }
}
`})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"CORS — Permitir peticiones desde Angular"}),t.jsx(S,{filename:"CorsConfig.java",code:`
// Configuración global de CORS (para APIs consumidas por frontend)
@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                    .allowedOrigins(
                        "http://localhost:4200",   // Angular dev
                        "https://miapp.netlify.app" // prod
                    )
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS")
                    .allowedHeaders("*")
                    .allowCredentials(true)
                    .maxAge(3600);
            }
        };
    }
}

// Alternativa: @CrossOrigin en el controller (menos recomendado)
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController { ... }
`}),t.jsxs(F,{type:"angular",children:["Sin configurar CORS, tu app Angular recibirá ",t.jsx("strong",{children:"CORS error"})," al hacer peticiones HTTP. En Angular dev puedes usar un proxy (",t.jsx("code",{className:"text-primary",children:"proxy.conf.json"}),"), pero en producción necesitas configurar CORS en Spring obligatoriamente para que el navegador permita las peticiones."]})]}),t.jsxs("section",{className:"mb-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 45"}),t.jsx(K,{number:1,title:"Configuración completa por entorno",description:`Configura tu proyecto con:
1. application-dev.properties (H2, DEBUG, puerto 8080)
2. application-prod.properties (PostgreSQL con env vars, WARN, puerto 8080)
3. CorsConfig que permita http://localhost:4200 en dev
4. DataInitializer con @Profile("dev") que cargue datos de prueba
5. @ConfigurationProperties para propiedades custom de tu app`,hint:'spring.profiles.active=dev en application.properties. @Profile("dev") en DataInitializer.',solution:`// application-dev.properties
// spring.datasource.url=jdbc:h2:mem:devdb
// spring.jpa.show-sql=true
// spring.h2.console.enabled=true

@Component
@Profile("dev")
public class DataInitializer implements CommandLineRunner {
    private final ProductoRepository repo;
    public DataInitializer(ProductoRepository repo) { this.repo = repo; }

    @Override
    public void run(String... args) {
        repo.save(new Producto("Laptop", 1200, "Tech"));
        repo.save(new Producto("Mouse", 25, "Tech"));
        System.out.println("Datos dev cargados");
    }
}

@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer cors() {
        return new WebMvcConfigurer() {
            public void addCorsMappings(CorsRegistry reg) {
                reg.addMapping("/api/**")
                    .allowedOrigins("http://localhost:4200")
                    .allowedMethods("*");
            }
        };
    }
}`,solutionFilename:"DataInitializer.java"})]}),t.jsx("section",{className:"mb-8",children:t.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[t.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),t.jsx(S,{language:"bash",code:'git commit -m "dia-45: profiles, CORS, ConfigurationProperties - ROADMAP COMPLETO!"'}),t.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["🎉 ",t.jsx("strong",{className:"text-text",children:"Felicidades!"})," Has completado los 45 días del roadmap Java + Spring Boot."]})]})})]})}function vS(){return t.jsxs(Cb,{children:[t.jsx(lf,{}),t.jsx(ab,{children:t.jsxs(se,{element:t.jsx(jv,{}),children:[t.jsx(se,{path:"/",element:t.jsx(Sv,{})}),t.jsx(se,{path:"/introduccion",element:t.jsx(Mj,{})}),t.jsx(se,{path:"/sintaxis",element:t.jsx(Oj,{})}),t.jsx(se,{path:"/tipos-datos",element:t.jsx(Dj,{})}),t.jsx(se,{path:"/variables",element:t.jsx(wj,{})}),t.jsx(se,{path:"/operadores",element:t.jsx(Lj,{})}),t.jsx(se,{path:"/strings",element:t.jsx(Uj,{})}),t.jsx(se,{path:"/condicionales",element:t.jsx(zj,{})}),t.jsx(se,{path:"/bucles",element:t.jsx(qj,{})}),t.jsx(se,{path:"/arrays",element:t.jsx(Bj,{})}),t.jsx(se,{path:"/metodos",element:t.jsx(_j,{})}),t.jsx(se,{path:"/clases-objetos",element:t.jsx(kj,{})}),t.jsx(se,{path:"/encapsulamiento",element:t.jsx(Pj,{})}),t.jsx(se,{path:"/herencia",element:t.jsx(Hj,{})}),t.jsx(se,{path:"/polimorfismo",element:t.jsx(Ij,{})}),t.jsx(se,{path:"/interfaces",element:t.jsx(Jj,{})}),t.jsx(se,{path:"/clases-abstractas",element:t.jsx(Fj,{})}),t.jsx(se,{path:"/colecciones",element:t.jsx(Vj,{})}),t.jsx(se,{path:"/excepciones",element:t.jsx(Gj,{})}),t.jsx(se,{path:"/generics",element:t.jsx(Yj,{})}),t.jsx(se,{path:"/enums",element:t.jsx(Qj,{})}),t.jsx(se,{path:"/comparador",element:t.jsx(pS,{})}),t.jsx(se,{path:"/lambdas",element:t.jsx(Xj,{})}),t.jsx(se,{path:"/streams",element:t.jsx(Zj,{})}),t.jsx(se,{path:"/optional",element:t.jsx(Kj,{})}),t.jsx(se,{path:"/concurrencia",element:t.jsx($j,{})}),t.jsx(se,{path:"/virtual-threads",element:t.jsx(xS,{})}),t.jsx(se,{path:"/io-archivos",element:t.jsx(Wj,{})}),t.jsx(se,{path:"/fechas-api",element:t.jsx(eS,{})}),t.jsx(se,{path:"/records",element:t.jsx(aS,{})}),t.jsx(se,{path:"/sealed-classes",element:t.jsx(tS,{})}),t.jsx(se,{path:"/pattern-matching",element:t.jsx(nS,{})}),t.jsx(se,{path:"/patrones-diseno",element:t.jsx(rS,{})}),t.jsx(se,{path:"/text-blocks",element:t.jsx(fS,{})}),t.jsx(se,{path:"/spring-intro",element:t.jsx(iS,{})}),t.jsx(se,{path:"/spring-setup",element:t.jsx(sS,{})}),t.jsx(se,{path:"/spring-anotaciones",element:t.jsx(lS,{})}),t.jsx(se,{path:"/spring-controllers",element:t.jsx(oS,{})}),t.jsx(se,{path:"/spring-services",element:t.jsx(cS,{})}),t.jsx(se,{path:"/spring-repositories",element:t.jsx(uS,{})}),t.jsx(se,{path:"/spring-security",element:t.jsx(dS,{})}),t.jsx(se,{path:"/spring-testing",element:t.jsx(mS,{})}),t.jsx(se,{path:"/spring-excepciones",element:t.jsx(gS,{})}),t.jsx(se,{path:"/spring-validacion",element:t.jsx(hS,{})}),t.jsx(se,{path:"/spring-dtos",element:t.jsx(bS,{})}),t.jsx(se,{path:"/spring-perfiles",element:t.jsx(yS,{})})]})})]})}eh.createRoot(document.getElementById("root")).render(t.jsx(L.StrictMode,{children:t.jsx(vS,{})}));
