(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const x of p)if(x.type==="childList")for(const g of x.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function d(p){const x={};return p.integrity&&(x.integrity=p.integrity),p.referrerPolicy&&(x.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?x.credentials="include":p.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function u(p){if(p.ep)return;p.ep=!0;const x=d(p);fetch(p.href,x)}})();var ko={exports:{}},qi={};var up;function Fg(){if(up)return qi;up=1;var l=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function d(u,p,x){var g=null;if(x!==void 0&&(g=""+x),p.key!==void 0&&(g=""+p.key),"key"in p){x={};for(var A in p)A!=="key"&&(x[A]=p[A])}else x=p;return p=x.ref,{$$typeof:l,type:u,key:g,ref:p!==void 0?p:null,props:x}}return qi.Fragment=c,qi.jsx=d,qi.jsxs=d,qi}var dp;function Gg(){return dp||(dp=1,ko.exports=Fg()),ko.exports}var a=Gg(),qo={exports:{}},ce={};var mp;function Yg(){if(mp)return ce;mp=1;var l=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),g=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),J=Symbol.iterator;function V(j){return j===null||typeof j!="object"?null:(j=J&&j[J]||j["@@iterator"],typeof j=="function"?j:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,E={};function B(j,q,G){this.props=j,this.context=q,this.refs=E,this.updater=G||M}B.prototype.isReactComponent={},B.prototype.setState=function(j,q){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,q,"setState")},B.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function _(){}_.prototype=B.prototype;function I(j,q,G){this.props=j,this.context=q,this.refs=E,this.updater=G||M}var $=I.prototype=new _;$.constructor=I,S($,B.prototype),$.isPureReactComponent=!0;var te=Array.isArray;function pe(){}var X={H:null,A:null,T:null,S:null},fe=Object.prototype.hasOwnProperty;function Ee(j,q,G){var Q=G.ref;return{$$typeof:l,type:j,key:q,ref:Q!==void 0?Q:null,props:G}}function Ze(j,q){return Ee(j.type,q,j.props)}function He(j){return typeof j=="object"&&j!==null&&j.$$typeof===l}function ze(j){var q={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(G){return q[G]})}var xt=/\/+/g;function Me(j,q){return typeof j=="object"&&j!==null&&j.key!=null?ze(""+j.key):q.toString(36)}function Ce(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(pe,pe):(j.status="pending",j.then(function(q){j.status==="pending"&&(j.status="fulfilled",j.value=q)},function(q){j.status==="pending"&&(j.status="rejected",j.reason=q)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function z(j,q,G,Q,le){var de=typeof j;(de==="undefined"||de==="boolean")&&(j=null);var ve=!1;if(j===null)ve=!0;else switch(de){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(j.$$typeof){case l:case c:ve=!0;break;case T:return ve=j._init,z(ve(j._payload),q,G,Q,le)}}if(ve)return le=le(j),ve=Q===""?"."+Me(j,0):Q,te(le)?(G="",ve!=null&&(G=ve.replace(xt,"$&/")+"/"),z(le,q,G,"",function(Gn){return Gn})):le!=null&&(He(le)&&(le=Ze(le,G+(le.key==null||j&&j.key===le.key?"":(""+le.key).replace(xt,"$&/")+"/")+ve)),q.push(le)),1;ve=0;var et=Q===""?".":Q+":";if(te(j))for(var Ue=0;Ue<j.length;Ue++)Q=j[Ue],de=et+Me(Q,Ue),ve+=z(Q,q,G,de,le);else if(Ue=V(j),typeof Ue=="function")for(j=Ue.call(j),Ue=0;!(Q=j.next()).done;)Q=Q.value,de=et+Me(Q,Ue++),ve+=z(Q,q,G,de,le);else if(de==="object"){if(typeof j.then=="function")return z(Ce(j),q,G,Q,le);throw q=String(j),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ve}function F(j,q,G){if(j==null)return j;var Q=[],le=0;return z(j,Q,"","",function(de){return q.call(G,de,le++)}),Q}function ee(j){if(j._status===-1){var q=j._result;q=q(),q.then(function(G){(j._status===0||j._status===-1)&&(j._status=1,j._result=G)},function(G){(j._status===0||j._status===-1)&&(j._status=2,j._result=G)}),j._status===-1&&(j._status=0,j._result=q)}if(j._status===1)return j._result.default;throw j._result}var Te=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},be={map:F,forEach:function(j,q,G){F(j,function(){q.apply(this,arguments)},G)},count:function(j){var q=0;return F(j,function(){q++}),q},toArray:function(j){return F(j,function(q){return q})||[]},only:function(j){if(!He(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return ce.Activity=y,ce.Children=be,ce.Component=B,ce.Fragment=d,ce.Profiler=p,ce.PureComponent=I,ce.StrictMode=u,ce.Suspense=b,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ce.__COMPILER_RUNTIME={__proto__:null,c:function(j){return X.H.useMemoCache(j)}},ce.cache=function(j){return function(){return j.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(j,q,G){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var Q=S({},j.props),le=j.key;if(q!=null)for(de in q.key!==void 0&&(le=""+q.key),q)!fe.call(q,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&q.ref===void 0||(Q[de]=q[de]);var de=arguments.length-2;if(de===1)Q.children=G;else if(1<de){for(var ve=Array(de),et=0;et<de;et++)ve[et]=arguments[et+2];Q.children=ve}return Ee(j.type,le,Q)},ce.createContext=function(j){return j={$$typeof:g,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:x,_context:j},j},ce.createElement=function(j,q,G){var Q,le={},de=null;if(q!=null)for(Q in q.key!==void 0&&(de=""+q.key),q)fe.call(q,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(le[Q]=q[Q]);var ve=arguments.length-2;if(ve===1)le.children=G;else if(1<ve){for(var et=Array(ve),Ue=0;Ue<ve;Ue++)et[Ue]=arguments[Ue+2];le.children=et}if(j&&j.defaultProps)for(Q in ve=j.defaultProps,ve)le[Q]===void 0&&(le[Q]=ve[Q]);return Ee(j,de,le)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(j){return{$$typeof:A,render:j}},ce.isValidElement=He,ce.lazy=function(j){return{$$typeof:T,_payload:{_status:-1,_result:j},_init:ee}},ce.memo=function(j,q){return{$$typeof:f,type:j,compare:q===void 0?null:q}},ce.startTransition=function(j){var q=X.T,G={};X.T=G;try{var Q=j(),le=X.S;le!==null&&le(G,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(pe,Te)}catch(de){Te(de)}finally{q!==null&&G.types!==null&&(q.types=G.types),X.T=q}},ce.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ce.use=function(j){return X.H.use(j)},ce.useActionState=function(j,q,G){return X.H.useActionState(j,q,G)},ce.useCallback=function(j,q){return X.H.useCallback(j,q)},ce.useContext=function(j){return X.H.useContext(j)},ce.useDebugValue=function(){},ce.useDeferredValue=function(j,q){return X.H.useDeferredValue(j,q)},ce.useEffect=function(j,q){return X.H.useEffect(j,q)},ce.useEffectEvent=function(j){return X.H.useEffectEvent(j)},ce.useId=function(){return X.H.useId()},ce.useImperativeHandle=function(j,q,G){return X.H.useImperativeHandle(j,q,G)},ce.useInsertionEffect=function(j,q){return X.H.useInsertionEffect(j,q)},ce.useLayoutEffect=function(j,q){return X.H.useLayoutEffect(j,q)},ce.useMemo=function(j,q){return X.H.useMemo(j,q)},ce.useOptimistic=function(j,q){return X.H.useOptimistic(j,q)},ce.useReducer=function(j,q,G){return X.H.useReducer(j,q,G)},ce.useRef=function(j){return X.H.useRef(j)},ce.useState=function(j){return X.H.useState(j)},ce.useSyncExternalStore=function(j,q,G){return X.H.useSyncExternalStore(j,q,G)},ce.useTransition=function(){return X.H.useTransition()},ce.version="19.2.4",ce}var pp;function $o(){return pp||(pp=1,qo.exports=Yg()),qo.exports}var L=$o(),Po={exports:{}},Pi={},Ho={exports:{}},Io={};var fp;function Qg(){return fp||(fp=1,(function(l){function c(z,F){var ee=z.length;z.push(F);e:for(;0<ee;){var Te=ee-1>>>1,be=z[Te];if(0<p(be,F))z[Te]=F,z[ee]=be,ee=Te;else break e}}function d(z){return z.length===0?null:z[0]}function u(z){if(z.length===0)return null;var F=z[0],ee=z.pop();if(ee!==F){z[0]=ee;e:for(var Te=0,be=z.length,j=be>>>1;Te<j;){var q=2*(Te+1)-1,G=z[q],Q=q+1,le=z[Q];if(0>p(G,ee))Q<be&&0>p(le,G)?(z[Te]=le,z[Q]=ee,Te=Q):(z[Te]=G,z[q]=ee,Te=q);else if(Q<be&&0>p(le,ee))z[Te]=le,z[Q]=ee,Te=Q;else break e}}return F}function p(z,F){var ee=z.sortIndex-F.sortIndex;return ee!==0?ee:z.id-F.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;l.unstable_now=function(){return x.now()}}else{var g=Date,A=g.now();l.unstable_now=function(){return g.now()-A}}var b=[],f=[],T=1,y=null,J=3,V=!1,M=!1,S=!1,E=!1,B=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function $(z){for(var F=d(f);F!==null;){if(F.callback===null)u(f);else if(F.startTime<=z)u(f),F.sortIndex=F.expirationTime,c(b,F);else break;F=d(f)}}function te(z){if(S=!1,$(z),!M)if(d(b)!==null)M=!0,pe||(pe=!0,ze());else{var F=d(f);F!==null&&Ce(te,F.startTime-z)}}var pe=!1,X=-1,fe=5,Ee=-1;function Ze(){return E?!0:!(l.unstable_now()-Ee<fe)}function He(){if(E=!1,pe){var z=l.unstable_now();Ee=z;var F=!0;try{e:{M=!1,S&&(S=!1,_(X),X=-1),V=!0;var ee=J;try{t:{for($(z),y=d(b);y!==null&&!(y.expirationTime>z&&Ze());){var Te=y.callback;if(typeof Te=="function"){y.callback=null,J=y.priorityLevel;var be=Te(y.expirationTime<=z);if(z=l.unstable_now(),typeof be=="function"){y.callback=be,$(z),F=!0;break t}y===d(b)&&u(b),$(z)}else u(b);y=d(b)}if(y!==null)F=!0;else{var j=d(f);j!==null&&Ce(te,j.startTime-z),F=!1}}break e}finally{y=null,J=ee,V=!1}F=void 0}}finally{F?ze():pe=!1}}}var ze;if(typeof I=="function")ze=function(){I(He)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,Me=xt.port2;xt.port1.onmessage=He,ze=function(){Me.postMessage(null)}}else ze=function(){B(He,0)};function Ce(z,F){X=B(function(){z(l.unstable_now())},F)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(z){z.callback=null},l.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<z?Math.floor(1e3/z):5},l.unstable_getCurrentPriorityLevel=function(){return J},l.unstable_next=function(z){switch(J){case 1:case 2:case 3:var F=3;break;default:F=J}var ee=J;J=F;try{return z()}finally{J=ee}},l.unstable_requestPaint=function(){E=!0},l.unstable_runWithPriority=function(z,F){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ee=J;J=z;try{return F()}finally{J=ee}},l.unstable_scheduleCallback=function(z,F,ee){var Te=l.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Te+ee:Te):ee=Te,z){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ee+be,z={id:T++,callback:F,priorityLevel:z,startTime:ee,expirationTime:be,sortIndex:-1},ee>Te?(z.sortIndex=ee,c(f,z),d(b)===null&&z===d(f)&&(S?(_(X),X=-1):S=!0,Ce(te,ee-Te))):(z.sortIndex=be,c(b,z),M||V||(M=!0,pe||(pe=!0,ze()))),z},l.unstable_shouldYield=Ze,l.unstable_wrapCallback=function(z){var F=J;return function(){var ee=J;J=F;try{return z.apply(this,arguments)}finally{J=ee}}}})(Io)),Io}var xp;function Xg(){return xp||(xp=1,Ho.exports=Qg()),Ho.exports}var Jo={exports:{}},st={};var gp;function Zg(){if(gp)return st;gp=1;var l=$o();function c(b){var f="https://react.dev/errors/"+b;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)f+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+b+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(c(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},p=Symbol.for("react.portal");function x(b,f,T){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:y==null?null:""+y,children:b,containerInfo:f,implementation:T}}var g=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(b,f){if(b==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,st.createPortal=function(b,f){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(c(299));return x(b,f,null,T)},st.flushSync=function(b){var f=g.T,T=u.p;try{if(g.T=null,u.p=2,b)return b()}finally{g.T=f,u.p=T,u.d.f()}},st.preconnect=function(b,f){typeof b=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,u.d.C(b,f))},st.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},st.preinit=function(b,f){if(typeof b=="string"&&f&&typeof f.as=="string"){var T=f.as,y=A(T,f.crossOrigin),J=typeof f.integrity=="string"?f.integrity:void 0,V=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;T==="style"?u.d.S(b,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:y,integrity:J,fetchPriority:V}):T==="script"&&u.d.X(b,{crossOrigin:y,integrity:J,fetchPriority:V,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},st.preinitModule=function(b,f){if(typeof b=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var T=A(f.as,f.crossOrigin);u.d.M(b,{crossOrigin:T,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&u.d.M(b)},st.preload=function(b,f){if(typeof b=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var T=f.as,y=A(T,f.crossOrigin);u.d.L(b,T,{crossOrigin:y,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},st.preloadModule=function(b,f){if(typeof b=="string")if(f){var T=A(f.as,f.crossOrigin);u.d.m(b,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:T,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else u.d.m(b)},st.requestFormReset=function(b){u.d.r(b)},st.unstable_batchedUpdates=function(b,f){return b(f)},st.useFormState=function(b,f,T){return g.H.useFormState(b,f,T)},st.useFormStatus=function(){return g.H.useHostTransitionStatus()},st.version="19.2.4",st}var bp;function Kg(){if(bp)return Jo.exports;bp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),Jo.exports=Zg(),Jo.exports}var hp;function $g(){if(hp)return Pi;hp=1;var l=Xg(),c=$o(),d=Kg();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function x(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(x(e)!==e)throw Error(u(188))}function f(e){var t=e.alternate;if(!t){if(t=x(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return b(r),e;if(s===i)return b(r),t;s=s.sibling}throw Error(u(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,m=r.child;m;){if(m===n){o=!0,n=r,i=s;break}if(m===i){o=!0,i=r,n=s;break}m=m.sibling}if(!o){for(m=s.child;m;){if(m===n){o=!0,n=s,i=r;break}if(m===i){o=!0,i=s,n=r;break}m=m.sibling}if(!o)throw Error(u(189))}}if(n.alternate!==i)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,J=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),I=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),Ze=Symbol.for("react.memo_cache_sentinel"),He=Symbol.iterator;function ze(e){return e===null||typeof e!="object"?null:(e=He&&e[He]||e["@@iterator"],typeof e=="function"?e:null)}var xt=Symbol.for("react.client.reference");function Me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case B:return"Profiler";case E:return"StrictMode";case te:return"Suspense";case pe:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case I:return e.displayName||"Context";case _:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:Me(e.type)||"Memo";case fe:t=e._payload,e=e._init;try{return Me(e(t))}catch{}}return null}var Ce=Array.isArray,z=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},Te=[],be=-1;function j(e){return{current:e}}function q(e){0>be||(e.current=Te[be],Te[be]=null,be--)}function G(e,t){be++,Te[be]=e.current,e.current=t}var Q=j(null),le=j(null),de=j(null),ve=j(null);function et(e,t){switch(G(de,t),G(le,e),G(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Lm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Lm(t),e=zm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Q),G(Q,e)}function Ue(){q(Q),q(le),q(de)}function Gn(e){e.memoizedState!==null&&G(ve,e);var t=Q.current,n=zm(t,e.type);t!==n&&(G(le,e),G(Q,n))}function Gi(e){le.current===e&&(q(Q),q(le)),ve.current===e&&(q(ve),_i._currentValue=ee)}var ys,cc;function Pa(e){if(ys===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ys=t&&t[1]||"",cc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ys+e+cc}var vs=!1;function js(e,t){if(!e||vs)return"";vs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(w){var D=w}Reflect.construct(e,[],P)}else{try{P.call()}catch(w){D=w}e.call(P.prototype)}}else{try{throw Error()}catch(w){D=w}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(w){if(w&&D&&typeof w.stack=="string")return[w.stack,D.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),o=s[0],m=s[1];if(o&&m){var h=o.split(`
`),O=m.split(`
`);for(r=i=0;i<h.length&&!h[i].includes("DetermineComponentFrameRoot");)i++;for(;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;if(i===h.length||r===O.length)for(i=h.length-1,r=O.length-1;1<=i&&0<=r&&h[i]!==O[r];)r--;for(;1<=i&&0<=r;i--,r--)if(h[i]!==O[r]){if(i!==1||r!==1)do if(i--,r--,0>r||h[i]!==O[r]){var U=`
`+h[i].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=i&&0<=r);break}}}finally{vs=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Pa(n):""}function Sf(e,t){switch(e.tag){case 26:case 27:case 5:return Pa(e.type);case 16:return Pa("Lazy");case 13:return e.child!==t&&t!==null?Pa("Suspense Fallback"):Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 15:return js(e.type,!1);case 11:return js(e.type.render,!1);case 1:return js(e.type,!0);case 31:return Pa("Activity");default:return""}}function uc(e){try{var t="",n=null;do t+=Sf(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ss=Object.prototype.hasOwnProperty,Ns=l.unstable_scheduleCallback,Es=l.unstable_cancelCallback,Nf=l.unstable_shouldYield,Ef=l.unstable_requestPaint,gt=l.unstable_now,Cf=l.unstable_getCurrentPriorityLevel,dc=l.unstable_ImmediatePriority,mc=l.unstable_UserBlockingPriority,Yi=l.unstable_NormalPriority,Af=l.unstable_LowPriority,pc=l.unstable_IdlePriority,Tf=l.log,Mf=l.unstable_setDisableYieldValue,Yn=null,bt=null;function xa(e){if(typeof Tf=="function"&&Mf(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Yn,e)}catch{}}var ht=Math.clz32?Math.clz32:Df,Rf=Math.log,Of=Math.LN2;function Df(e){return e>>>=0,e===0?32:31-(Rf(e)/Of|0)|0}var Qi=256,Xi=262144,Zi=4194304;function Ha(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ki(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var m=i&134217727;return m!==0?(i=m&~s,i!==0?r=Ha(i):(o&=m,o!==0?r=Ha(o):n||(n=m&~e,n!==0&&(r=Ha(n))))):(m=i&~s,m!==0?r=Ha(m):o!==0?r=Ha(o):n||(n=i&~e,n!==0&&(r=Ha(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function Qn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function wf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fc(){var e=Zi;return Zi<<=1,(Zi&62914560)===0&&(Zi=4194304),e}function Cs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lf(e,t,n,i,r,s){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,h=e.expirationTimes,O=e.hiddenUpdates;for(n=o&~n;0<n;){var U=31-ht(n),P=1<<U;m[U]=0,h[U]=-1;var D=O[U];if(D!==null)for(O[U]=null,U=0;U<D.length;U++){var w=D[U];w!==null&&(w.lane&=-536870913)}n&=~P}i!==0&&xc(e,i,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(o&~t))}function xc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ht(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function gc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ht(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function bc(e,t){var n=t&-t;return n=(n&42)!==0?1:As(n),(n&(e.suspendedLanes|t))!==0?0:n}function As(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ts(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hc(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:np(e.type))}function yc(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var ga=Math.random().toString(36).slice(2),tt="__reactFiber$"+ga,ot="__reactProps$"+ga,sn="__reactContainer$"+ga,Ms="__reactEvents$"+ga,zf="__reactListeners$"+ga,_f="__reactHandles$"+ga,vc="__reactResources$"+ga,Zn="__reactMarker$"+ga;function Rs(e){delete e[tt],delete e[ot],delete e[Ms],delete e[zf],delete e[_f]}function ln(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[sn]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hm(e);e!==null;){if(n=e[tt])return n;e=Hm(e)}return t}e=n,n=e.parentNode}return null}function on(e){if(e=e[tt]||e[sn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Kn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function cn(e){var t=e[vc];return t||(t=e[vc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[Zn]=!0}var jc=new Set,Sc={};function Ia(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Sc[e]=t,e=0;e<t.length;e++)jc.add(t[e])}var Uf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nc={},Ec={};function Bf(e){return Ss.call(Ec,e)?!0:Ss.call(Nc,e)?!1:Uf.test(e)?Ec[e]=!0:(Nc[e]=!0,!1)}function $i(e,t,n){if(Bf(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Wi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Xt(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kf(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){n=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Os(e){if(!e._valueTracker){var t=Cc(e)?"checked":"value";e._valueTracker=kf(e,t,""+e[t])}}function Ac(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Cc(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function er(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qf=/[\n"\\]/g;function Mt(e){return e.replace(qf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ds(e,t,n,i,r,s,o,m){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Tt(t)):e.value!==""+Tt(t)&&(e.value=""+Tt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?ws(e,o,Tt(t)):n!=null?ws(e,o,Tt(n)):i!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Tt(m):e.removeAttribute("name")}function Tc(e,t,n,i,r,s,o,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Os(e);return}n=n!=null?""+Tt(n):"",t=t!=null?""+Tt(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=m?e.checked:!!i,e.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Os(e)}function ws(e,t,n){t==="number"&&er(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function dn(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Mc(e,t,n){if(t!=null&&(t=""+Tt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Tt(n):""}function Rc(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(u(92));if(Ce(i)){if(1<i.length)throw Error(u(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Tt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Os(e)}function mn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Oc(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Pf.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Dc(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&Oc(e,r,i)}else for(var s in t)t.hasOwnProperty(s)&&Oc(e,s,t[s])}function Ls(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),If=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tr(e){return If.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var zs=null;function _s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,fn=null;function wc(e){var t=on(e);if(t&&(e=t.stateNode)){var n=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ds(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[ot]||null;if(!r)throw Error(u(90));Ds(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Ac(i)}break e;case"textarea":Mc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}}}var Us=!1;function Lc(e,t,n){if(Us)return e(t,n);Us=!0;try{var i=e(t);return i}finally{if(Us=!1,(pn!==null||fn!==null)&&(Ir(),pn&&(t=pn,e=fn,fn=pn=null,wc(t),e)))for(t=0;t<e.length;t++)wc(e[t])}}function $n(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ot]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bs=!1;if(Kt)try{var Wn={};Object.defineProperty(Wn,"passive",{get:function(){Bs=!0}}),window.addEventListener("test",Wn,Wn),window.removeEventListener("test",Wn,Wn)}catch{Bs=!1}var ba=null,ks=null,ar=null;function zc(){if(ar)return ar;var e,t=ks,n=t.length,i,r="value"in ba?ba.value:ba.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var o=n-e;for(i=1;i<=o&&t[n-i]===r[s-i];i++);return ar=r.slice(e,1<i?1-i:void 0)}function nr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ir(){return!0}function _c(){return!1}function ct(e){function t(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ir:_c,this.isPropagationStopped=_c,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ir)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ir)},persist:function(){},isPersistent:ir}),t}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rr=ct(Ja),ei=y({},Ja,{view:0,detail:0}),Jf=ct(ei),qs,Ps,ti,sr=y({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ti&&(ti&&e.type==="mousemove"?(qs=e.screenX-ti.screenX,Ps=e.screenY-ti.screenY):Ps=qs=0,ti=e),qs)},movementY:function(e){return"movementY"in e?e.movementY:Ps}}),Uc=ct(sr),Vf=y({},sr,{dataTransfer:0}),Ff=ct(Vf),Gf=y({},ei,{relatedTarget:0}),Hs=ct(Gf),Yf=y({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Qf=ct(Yf),Xf=y({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zf=ct(Xf),Kf=y({},Ja,{data:0}),Bc=ct(Kf),$f={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ex[e])?!!t[e]:!1}function Is(){return tx}var ax=y({},ei,{key:function(e){if(e.key){var t=$f[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Is,charCode:function(e){return e.type==="keypress"?nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nx=ct(ax),ix=y({},sr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kc=ct(ix),rx=y({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Is}),sx=ct(rx),lx=y({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),ox=ct(lx),cx=y({},sr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=ct(cx),dx=y({},Ja,{newState:0,oldState:0}),mx=ct(dx),px=[9,13,27,32],Js=Kt&&"CompositionEvent"in window,ai=null;Kt&&"documentMode"in document&&(ai=document.documentMode);var fx=Kt&&"TextEvent"in window&&!ai,qc=Kt&&(!Js||ai&&8<ai&&11>=ai),Pc=" ",Hc=!1;function Ic(e,t){switch(e){case"keyup":return px.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function xx(e,t){switch(e){case"compositionend":return Jc(t);case"keypress":return t.which!==32?null:(Hc=!0,Pc);case"textInput":return e=t.data,e===Pc&&Hc?null:e;default:return null}}function gx(e,t){if(xn)return e==="compositionend"||!Js&&Ic(e,t)?(e=zc(),ar=ks=ba=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qc&&t.locale!=="ko"?null:t.data;default:return null}}var bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bx[e.type]:t==="textarea"}function Fc(e,t,n,i){pn?fn?fn.push(i):fn=[i]:pn=i,t=Xr(t,"onChange"),0<t.length&&(n=new rr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ni=null,ii=null;function hx(e){Tm(e,0)}function lr(e){var t=Kn(e);if(Ac(t))return e}function Gc(e,t){if(e==="change")return t}var Yc=!1;if(Kt){var Vs;if(Kt){var Fs="oninput"in document;if(!Fs){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),Fs=typeof Qc.oninput=="function"}Vs=Fs}else Vs=!1;Yc=Vs&&(!document.documentMode||9<document.documentMode)}function Xc(){ni&&(ni.detachEvent("onpropertychange",Zc),ii=ni=null)}function Zc(e){if(e.propertyName==="value"&&lr(ii)){var t=[];Fc(t,ii,e,_s(e)),Lc(hx,t)}}function yx(e,t,n){e==="focusin"?(Xc(),ni=t,ii=n,ni.attachEvent("onpropertychange",Zc)):e==="focusout"&&Xc()}function vx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lr(ii)}function jx(e,t){if(e==="click")return lr(t)}function Sx(e,t){if(e==="input"||e==="change")return lr(t)}function Nx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Nx;function ri(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ss.call(t,r)||!yt(e[r],t[r]))return!1}return!0}function Kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $c(e,t){var n=Kc(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kc(n)}}function Wc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function eu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=er(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=er(e.document)}return t}function Gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ex=Kt&&"documentMode"in document&&11>=document.documentMode,gn=null,Ys=null,si=null,Qs=!1;function tu(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qs||gn==null||gn!==er(i)||(i=gn,"selectionStart"in i&&Gs(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),si&&ri(si,i)||(si=i,i=Xr(Ys,"onSelect"),0<i.length&&(t=new rr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=gn)))}function Va(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},Xs={},au={};Kt&&(au=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function Fa(e){if(Xs[e])return Xs[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in au)return Xs[e]=t[n];return e}var nu=Fa("animationend"),iu=Fa("animationiteration"),ru=Fa("animationstart"),Cx=Fa("transitionrun"),Ax=Fa("transitionstart"),Tx=Fa("transitioncancel"),su=Fa("transitionend"),lu=new Map,Zs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zs.push("scrollEnd");function kt(e,t){lu.set(e,t),Ia(t,[e])}var or=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Rt=[],hn=0,Ks=0;function cr(){for(var e=hn,t=Ks=hn=0;t<e;){var n=Rt[t];Rt[t++]=null;var i=Rt[t];Rt[t++]=null;var r=Rt[t];Rt[t++]=null;var s=Rt[t];if(Rt[t++]=null,i!==null&&r!==null){var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}s!==0&&ou(n,r,s)}}function ur(e,t,n,i){Rt[hn++]=e,Rt[hn++]=t,Rt[hn++]=n,Rt[hn++]=i,Ks|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function $s(e,t,n,i){return ur(e,t,n,i),dr(e)}function Ga(e,t){return ur(e,null,null,t),dr(e)}function ou(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-ht(n),e=s.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),s):null}function dr(e){if(50<Mi)throw Mi=0,lo=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var yn={};function Mx(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,i){return new Mx(e,t,n,i)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $t(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function cu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mr(e,t,n,i,r,s){var o=0;if(i=e,typeof e=="function")Ws(e)&&(o=1);else if(typeof e=="string")o=Lg(e,n,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=vt(31,n,t,r),e.elementType=Ee,e.lanes=s,e;case S:return Ya(n.children,r,s,t);case E:o=8,r|=24;break;case B:return e=vt(12,n,t,r|2),e.elementType=B,e.lanes=s,e;case te:return e=vt(13,n,t,r),e.elementType=te,e.lanes=s,e;case pe:return e=vt(19,n,t,r),e.elementType=pe,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:o=10;break e;case _:o=9;break e;case $:o=11;break e;case X:o=14;break e;case fe:o=16,i=null;break e}o=29,n=Error(u(130,e===null?"null":typeof e,"")),i=null}return t=vt(o,n,t,r),t.elementType=e,t.type=i,t.lanes=s,t}function Ya(e,t,n,i){return e=vt(7,e,i,t),e.lanes=n,e}function el(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function uu(e){var t=vt(18,null,null,0);return t.stateNode=e,t}function tl(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var du=new WeakMap;function Ot(e,t){if(typeof e=="object"&&e!==null){var n=du.get(e);return n!==void 0?n:(t={value:e,source:t,stack:uc(t)},du.set(e,t),t)}return{value:e,source:t,stack:uc(t)}}var vn=[],jn=0,pr=null,li=0,Dt=[],wt=0,ha=null,Ht=1,It="";function Wt(e,t){vn[jn++]=li,vn[jn++]=pr,pr=e,li=t}function mu(e,t,n){Dt[wt++]=Ht,Dt[wt++]=It,Dt[wt++]=ha,ha=e;var i=Ht;e=It;var r=32-ht(i)-1;i&=~(1<<r),n+=1;var s=32-ht(t)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ht=1<<32-ht(t)+r|n<<r|i,It=s+e}else Ht=1<<s|n<<r|i,It=e}function al(e){e.return!==null&&(Wt(e,1),mu(e,1,0))}function nl(e){for(;e===pr;)pr=vn[--jn],vn[jn]=null,li=vn[--jn],vn[jn]=null;for(;e===ha;)ha=Dt[--wt],Dt[wt]=null,It=Dt[--wt],Dt[wt]=null,Ht=Dt[--wt],Dt[wt]=null}function pu(e,t){Dt[wt++]=Ht,Dt[wt++]=It,Dt[wt++]=ha,Ht=t.id,It=t.overflow,ha=e}var at=null,Be=null,je=!1,ya=null,Lt=!1,il=Error(u(519));function va(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oi(Ot(t,e)),il}function fu(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[tt]=e,t[ot]=i,n){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(n=0;n<Oi.length;n++)ge(Oi[n],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),Tc(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),Rc(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Dm(t.textContent,n)?(i.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),i.onScroll!=null&&ge("scroll",t),i.onScrollEnd!=null&&ge("scrollend",t),i.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||va(e,!0)}function xu(e){for(at=e.return;at;)switch(at.tag){case 5:case 31:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:at=at.return}}function Sn(e){if(e!==at)return!1;if(!je)return xu(e),je=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||No(e.type,e.memoizedProps)),n=!n),n&&Be&&va(e),xu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Be=Pm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Be=Pm(e)}else t===27?(t=Be,za(e.type)?(e=Mo,Mo=null,Be=e):Be=t):Be=at?_t(e.stateNode.nextSibling):null;return!0}function Qa(){Be=at=null,je=!1}function rl(){var e=ya;return e!==null&&(pt===null?pt=e:pt.push.apply(pt,e),ya=null),e}function oi(e){ya===null?ya=[e]:ya.push(e)}var sl=j(null),Xa=null,ea=null;function ja(e,t,n){G(sl,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=sl.current,q(sl)}function ll(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ol(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var o=r.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=r;for(var h=0;h<t.length;h++)if(m.context===t[h]){s.lanes|=n,m=s.alternate,m!==null&&(m.lanes|=n),ll(s.return,n,e),i||(o=null);break e}s=m.next}}else if(r.tag===18){if(o=r.return,o===null)throw Error(u(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ll(o,n,e),o=null}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===e){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}}function Nn(e,t,n,i){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var o=r.alternate;if(o===null)throw Error(u(387));if(o=o.memoizedProps,o!==null){var m=r.type;yt(r.pendingProps.value,o.value)||(e!==null?e.push(m):e=[m])}}else if(r===ve.current){if(o=r.alternate,o===null)throw Error(u(387));o.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(_i):e=[_i])}r=r.return}e!==null&&ol(t,e,n,i),t.flags|=262144}function fr(e){for(e=e.firstContext;e!==null;){if(!yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Za(e){Xa=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nt(e){return gu(Xa,e)}function xr(e,t){return Xa===null&&Za(e),gu(e,t)}function gu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(u(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var Rx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ox=l.unstable_scheduleCallback,Dx=l.unstable_NormalPriority,Ge={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cl(){return{controller:new Rx,data:new Map,refCount:0}}function ci(e){e.refCount--,e.refCount===0&&Ox(Dx,function(){e.controller.abort()})}var ui=null,ul=0,En=0,Cn=null;function wx(e,t){if(ui===null){var n=ui=[];ul=0,En=fo(),Cn={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ul++,t.then(bu,bu),t}function bu(){if(--ul===0&&ui!==null){Cn!==null&&(Cn.status="fulfilled");var e=ui;ui=null,En=0,Cn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Lx(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var hu=z.S;z.S=function(e,t){tm=gt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&wx(e,t),hu!==null&&hu(e,t)};var Ka=j(null);function dl(){var e=Ka.current;return e!==null?e:_e.pooledCache}function gr(e,t){t===null?G(Ka,Ka.current):G(Ka,t.pool)}function yu(){var e=dl();return e===null?null:{parent:Ge._currentValue,pool:e}}var An=Error(u(460)),ml=Error(u(474)),br=Error(u(542)),hr={then:function(){}};function vu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ju(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Zt,Zt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nu(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nu(e),e}throw Wa=t,An}}function $a(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Wa=n,An):n}}var Wa=null;function Su(){if(Wa===null)throw Error(u(459));var e=Wa;return Wa=null,e}function Nu(e){if(e===An||e===br)throw Error(u(483))}var Tn=null,di=0;function yr(e){var t=di;return di+=1,Tn===null&&(Tn=[]),ju(Tn,e,t)}function mi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vr(e,t){throw t.$$typeof===J?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Eu(e){function t(C,v){if(e){var R=C.deletions;R===null?(C.deletions=[v],C.flags|=16):R.push(v)}}function n(C,v){if(!e)return null;for(;v!==null;)t(C,v),v=v.sibling;return null}function i(C){for(var v=new Map;C!==null;)C.key!==null?v.set(C.key,C):v.set(C.index,C),C=C.sibling;return v}function r(C,v){return C=$t(C,v),C.index=0,C.sibling=null,C}function s(C,v,R){return C.index=R,e?(R=C.alternate,R!==null?(R=R.index,R<v?(C.flags|=67108866,v):R):(C.flags|=67108866,v)):(C.flags|=1048576,v)}function o(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function m(C,v,R,k){return v===null||v.tag!==6?(v=el(R,C.mode,k),v.return=C,v):(v=r(v,R),v.return=C,v)}function h(C,v,R,k){var ae=R.type;return ae===S?U(C,v,R.props.children,k,R.key):v!==null&&(v.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===fe&&$a(ae)===v.type)?(v=r(v,R.props),mi(v,R),v.return=C,v):(v=mr(R.type,R.key,R.props,null,C.mode,k),mi(v,R),v.return=C,v)}function O(C,v,R,k){return v===null||v.tag!==4||v.stateNode.containerInfo!==R.containerInfo||v.stateNode.implementation!==R.implementation?(v=tl(R,C.mode,k),v.return=C,v):(v=r(v,R.children||[]),v.return=C,v)}function U(C,v,R,k,ae){return v===null||v.tag!==7?(v=Ya(R,C.mode,k,ae),v.return=C,v):(v=r(v,R),v.return=C,v)}function P(C,v,R){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=el(""+v,C.mode,R),v.return=C,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case V:return R=mr(v.type,v.key,v.props,null,C.mode,R),mi(R,v),R.return=C,R;case M:return v=tl(v,C.mode,R),v.return=C,v;case fe:return v=$a(v),P(C,v,R)}if(Ce(v)||ze(v))return v=Ya(v,C.mode,R,null),v.return=C,v;if(typeof v.then=="function")return P(C,yr(v),R);if(v.$$typeof===I)return P(C,xr(C,v),R);vr(C,v)}return null}function D(C,v,R,k){var ae=v!==null?v.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return ae!==null?null:m(C,v,""+R,k);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case V:return R.key===ae?h(C,v,R,k):null;case M:return R.key===ae?O(C,v,R,k):null;case fe:return R=$a(R),D(C,v,R,k)}if(Ce(R)||ze(R))return ae!==null?null:U(C,v,R,k,null);if(typeof R.then=="function")return D(C,v,yr(R),k);if(R.$$typeof===I)return D(C,v,xr(C,R),k);vr(C,R)}return null}function w(C,v,R,k,ae){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return C=C.get(R)||null,m(v,C,""+k,ae);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case V:return C=C.get(k.key===null?R:k.key)||null,h(v,C,k,ae);case M:return C=C.get(k.key===null?R:k.key)||null,O(v,C,k,ae);case fe:return k=$a(k),w(C,v,R,k,ae)}if(Ce(k)||ze(k))return C=C.get(R)||null,U(v,C,k,ae,null);if(typeof k.then=="function")return w(C,v,R,yr(k),ae);if(k.$$typeof===I)return w(C,v,R,xr(v,k),ae);vr(v,k)}return null}function Z(C,v,R,k){for(var ae=null,Se=null,W=v,me=v=0,ye=null;W!==null&&me<R.length;me++){W.index>me?(ye=W,W=null):ye=W.sibling;var Ne=D(C,W,R[me],k);if(Ne===null){W===null&&(W=ye);break}e&&W&&Ne.alternate===null&&t(C,W),v=s(Ne,v,me),Se===null?ae=Ne:Se.sibling=Ne,Se=Ne,W=ye}if(me===R.length)return n(C,W),je&&Wt(C,me),ae;if(W===null){for(;me<R.length;me++)W=P(C,R[me],k),W!==null&&(v=s(W,v,me),Se===null?ae=W:Se.sibling=W,Se=W);return je&&Wt(C,me),ae}for(W=i(W);me<R.length;me++)ye=w(W,C,me,R[me],k),ye!==null&&(e&&ye.alternate!==null&&W.delete(ye.key===null?me:ye.key),v=s(ye,v,me),Se===null?ae=ye:Se.sibling=ye,Se=ye);return e&&W.forEach(function(qa){return t(C,qa)}),je&&Wt(C,me),ae}function re(C,v,R,k){if(R==null)throw Error(u(151));for(var ae=null,Se=null,W=v,me=v=0,ye=null,Ne=R.next();W!==null&&!Ne.done;me++,Ne=R.next()){W.index>me?(ye=W,W=null):ye=W.sibling;var qa=D(C,W,Ne.value,k);if(qa===null){W===null&&(W=ye);break}e&&W&&qa.alternate===null&&t(C,W),v=s(qa,v,me),Se===null?ae=qa:Se.sibling=qa,Se=qa,W=ye}if(Ne.done)return n(C,W),je&&Wt(C,me),ae;if(W===null){for(;!Ne.done;me++,Ne=R.next())Ne=P(C,Ne.value,k),Ne!==null&&(v=s(Ne,v,me),Se===null?ae=Ne:Se.sibling=Ne,Se=Ne);return je&&Wt(C,me),ae}for(W=i(W);!Ne.done;me++,Ne=R.next())Ne=w(W,C,me,Ne.value,k),Ne!==null&&(e&&Ne.alternate!==null&&W.delete(Ne.key===null?me:Ne.key),v=s(Ne,v,me),Se===null?ae=Ne:Se.sibling=Ne,Se=Ne);return e&&W.forEach(function(Vg){return t(C,Vg)}),je&&Wt(C,me),ae}function Le(C,v,R,k){if(typeof R=="object"&&R!==null&&R.type===S&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case V:e:{for(var ae=R.key;v!==null;){if(v.key===ae){if(ae=R.type,ae===S){if(v.tag===7){n(C,v.sibling),k=r(v,R.props.children),k.return=C,C=k;break e}}else if(v.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===fe&&$a(ae)===v.type){n(C,v.sibling),k=r(v,R.props),mi(k,R),k.return=C,C=k;break e}n(C,v);break}else t(C,v);v=v.sibling}R.type===S?(k=Ya(R.props.children,C.mode,k,R.key),k.return=C,C=k):(k=mr(R.type,R.key,R.props,null,C.mode,k),mi(k,R),k.return=C,C=k)}return o(C);case M:e:{for(ae=R.key;v!==null;){if(v.key===ae)if(v.tag===4&&v.stateNode.containerInfo===R.containerInfo&&v.stateNode.implementation===R.implementation){n(C,v.sibling),k=r(v,R.children||[]),k.return=C,C=k;break e}else{n(C,v);break}else t(C,v);v=v.sibling}k=tl(R,C.mode,k),k.return=C,C=k}return o(C);case fe:return R=$a(R),Le(C,v,R,k)}if(Ce(R))return Z(C,v,R,k);if(ze(R)){if(ae=ze(R),typeof ae!="function")throw Error(u(150));return R=ae.call(R),re(C,v,R,k)}if(typeof R.then=="function")return Le(C,v,yr(R),k);if(R.$$typeof===I)return Le(C,v,xr(C,R),k);vr(C,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,v!==null&&v.tag===6?(n(C,v.sibling),k=r(v,R),k.return=C,C=k):(n(C,v),k=el(R,C.mode,k),k.return=C,C=k),o(C)):n(C,v)}return function(C,v,R,k){try{di=0;var ae=Le(C,v,R,k);return Tn=null,ae}catch(W){if(W===An||W===br)throw W;var Se=vt(29,W,null,C.mode);return Se.lanes=k,Se.return=C,Se}}}var en=Eu(!0),Cu=Eu(!1),Sa=!1;function pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ae&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=dr(e),ou(e,null,n),t}return ur(e,i,t,n),dr(e)}function pi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,gc(e,n)}}function xl(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var gl=!1;function fi(){if(gl){var e=Cn;if(e!==null)throw e}}function xi(e,t,n,i){gl=!1;var r=e.updateQueue;Sa=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,m=r.shared.pending;if(m!==null){r.shared.pending=null;var h=m,O=h.next;h.next=null,o===null?s=O:o.next=O,o=h;var U=e.alternate;U!==null&&(U=U.updateQueue,m=U.lastBaseUpdate,m!==o&&(m===null?U.firstBaseUpdate=O:m.next=O,U.lastBaseUpdate=h))}if(s!==null){var P=r.baseState;o=0,U=O=h=null,m=s;do{var D=m.lane&-536870913,w=D!==m.lane;if(w?(he&D)===D:(i&D)===D){D!==0&&D===En&&(gl=!0),U!==null&&(U=U.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var Z=e,re=m;D=t;var Le=n;switch(re.tag){case 1:if(Z=re.payload,typeof Z=="function"){P=Z.call(Le,P,D);break e}P=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=re.payload,D=typeof Z=="function"?Z.call(Le,P,D):Z,D==null)break e;P=y({},P,D);break e;case 2:Sa=!0}}D=m.callback,D!==null&&(e.flags|=64,w&&(e.flags|=8192),w=r.callbacks,w===null?r.callbacks=[D]:w.push(D))}else w={lane:D,tag:m.tag,payload:m.payload,callback:m.callback,next:null},U===null?(O=U=w,h=P):U=U.next=w,o|=D;if(m=m.next,m===null){if(m=r.shared.pending,m===null)break;w=m,m=w.next,w.next=null,r.lastBaseUpdate=w,r.shared.pending=null}}while(!0);U===null&&(h=P),r.baseState=h,r.firstBaseUpdate=O,r.lastBaseUpdate=U,s===null&&(r.shared.lanes=0),Ra|=o,e.lanes=o,e.memoizedState=P}}function Au(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Tu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Au(n[e],t)}var Mn=j(null),jr=j(0);function Mu(e,t){e=ua,G(jr,e),G(Mn,t),ua=e|t.baseLanes}function bl(){G(jr,ua),G(Mn,Mn.current)}function hl(){ua=jr.current,q(Mn),q(jr)}var jt=j(null),zt=null;function Ca(e){var t=e.alternate;G(Ve,Ve.current&1),G(jt,e),zt===null&&(t===null||Mn.current!==null||t.memoizedState!==null)&&(zt=e)}function yl(e){G(Ve,Ve.current),G(jt,e),zt===null&&(zt=e)}function Ru(e){e.tag===22?(G(Ve,Ve.current),G(jt,e),zt===null&&(zt=e)):Aa()}function Aa(){G(Ve,Ve.current),G(jt,jt.current)}function St(e){q(jt),zt===e&&(zt=null),q(Ve)}var Ve=j(0);function Sr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ao(n)||To(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var aa=0,ue=null,De=null,Ye=null,Nr=!1,Rn=!1,tn=!1,Er=0,gi=0,On=null,zx=0;function Ie(){throw Error(u(321))}function vl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function jl(e,t,n,i,r,s){return aa=s,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?md:Ul,tn=!1,s=n(i,r),tn=!1,Rn&&(s=Du(t,n,i,r)),Ou(e),s}function Ou(e){z.H=yi;var t=De!==null&&De.next!==null;if(aa=0,Ye=De=ue=null,Nr=!1,gi=0,On=null,t)throw Error(u(300));e===null||Qe||(e=e.dependencies,e!==null&&fr(e)&&(Qe=!0))}function Du(e,t,n,i){ue=e;var r=0;do{if(Rn&&(On=null),gi=0,Rn=!1,25<=r)throw Error(u(301));if(r+=1,Ye=De=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}z.H=pd,s=t(n,i)}while(Rn);return s}function _x(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?bi(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(ue.flags|=1024),t}function Sl(){var e=Er!==0;return Er=0,e}function Nl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function El(e){if(Nr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Nr=!1}aa=0,Ye=De=ue=null,Rn=!1,gi=Er=0,On=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?ue.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Fe(){if(De===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Ye===null?ue.memoizedState:Ye.next;if(t!==null)Ye=t,De=e;else{if(e===null)throw ue.alternate===null?Error(u(467)):Error(u(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ye===null?ue.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Cr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bi(e){var t=gi;return gi+=1,On===null&&(On=[]),e=ju(On,e,t),t=ue,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?md:Ul),e}function Ar(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bi(e);if(e.$$typeof===I)return nt(e)}throw Error(u(438,String(e)))}function Cl(e){var t=null,n=ue.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ue.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Cr(),ue.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Ze;return t.index++,n}function na(e,t){return typeof t=="function"?t(e):t}function Tr(e){var t=Fe();return Al(t,De,e)}function Al(e,t,n){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=n;var r=e.baseQueue,s=i.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}t.baseQueue=r=s,i.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var m=o=null,h=null,O=t,U=!1;do{var P=O.lane&-536870913;if(P!==O.lane?(he&P)===P:(aa&P)===P){var D=O.revertLane;if(D===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),P===En&&(U=!0);else if((aa&D)===D){O=O.next,D===En&&(U=!0);continue}else P={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},h===null?(m=h=P,o=s):h=h.next=P,ue.lanes|=D,Ra|=D;P=O.action,tn&&n(s,P),s=O.hasEagerState?O.eagerState:n(s,P)}else D={lane:P,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},h===null?(m=h=D,o=s):h=h.next=D,ue.lanes|=P,Ra|=P;O=O.next}while(O!==null&&O!==t);if(h===null?o=s:h.next=m,!yt(s,e.memoizedState)&&(Qe=!0,U&&(n=Cn,n!==null)))throw n;e.memoizedState=s,e.baseState=o,e.baseQueue=h,i.lastRenderedState=s}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Tl(e){var t=Fe(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=e(s,o.action),o=o.next;while(o!==r);yt(s,t.memoizedState)||(Qe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function wu(e,t,n){var i=ue,r=Fe(),s=je;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var o=!yt((De||r).memoizedState,n);if(o&&(r.memoizedState=n,Qe=!0),r=r.queue,Ol(_u.bind(null,i,r,e),[e]),r.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(i.flags|=2048,Dn(9,{destroy:void 0},zu.bind(null,i,r,n,t),null),_e===null)throw Error(u(349));s||(aa&127)!==0||Lu(i,t,n)}return n}function Lu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t=Cr(),ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zu(e,t,n,i){t.value=n,t.getSnapshot=i,Uu(t)&&Bu(e)}function _u(e,t,n){return n(function(){Uu(t)&&Bu(e)})}function Uu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function Bu(e){var t=Ga(e,2);t!==null&&ft(t,e,2)}function Ml(e){var t=lt();if(typeof e=="function"){var n=e;if(e=n(),tn){xa(!0);try{n()}finally{xa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},t}function ku(e,t,n,i){return e.baseState=n,Al(e,De,typeof i=="function"?i:na)}function Ux(e,t,n,i,r){if(Or(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){s.listeners.push(o)}};z.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,qu(t,s)):(s.next=n.next,t.pending=n.next=s)}}function qu(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var s=z.T,o={};z.T=o;try{var m=n(r,i),h=z.S;h!==null&&h(o,m),Pu(e,t,m)}catch(O){Rl(e,t,O)}finally{s!==null&&o.types!==null&&(s.types=o.types),z.T=s}}else try{s=n(r,i),Pu(e,t,s)}catch(O){Rl(e,t,O)}}function Pu(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Hu(e,t,i)},function(i){return Rl(e,t,i)}):Hu(e,t,n)}function Hu(e,t,n){t.status="fulfilled",t.value=n,Iu(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qu(e,n)))}function Rl(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Iu(t),t=t.next;while(t!==i)}e.action=null}function Iu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ju(e,t){return t}function Vu(e,t){if(je){var n=_e.formState;if(n!==null){e:{var i=ue;if(je){if(Be){t:{for(var r=Be,s=Lt;r.nodeType!==8;){if(!s){r=null;break t}if(r=_t(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){Be=_t(r.nextSibling),i=r.data==="F!";break e}}va(i)}i=!1}i&&(t=n[0])}}return n=lt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ju,lastRenderedState:t},n.queue=i,n=cd.bind(null,ue,i),i.dispatch=n,i=Ml(!1),s=_l.bind(null,ue,!1,i.queue),i=lt(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=Ux.bind(null,ue,r,s,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function Fu(e){var t=Fe();return Gu(t,De,e)}function Gu(e,t,n){if(t=Al(e,t,Ju)[0],e=Tr(na)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=bi(t)}catch(o){throw o===An?br:o}else i=t;t=Fe();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(ue.flags|=2048,Dn(9,{destroy:void 0},Bx.bind(null,r,n),null)),[i,s,e]}function Bx(e,t){e.action=t}function Yu(e){var t=Fe(),n=De;if(n!==null)return Gu(t,n,e);Fe(),t=t.memoizedState,n=Fe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Dn(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ue.updateQueue,t===null&&(t=Cr(),ue.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Qu(){return Fe().memoizedState}function Mr(e,t,n,i){var r=lt();ue.flags|=e,r.memoizedState=Dn(1|t,{destroy:void 0},n,i===void 0?null:i)}function Rr(e,t,n,i){var r=Fe();i=i===void 0?null:i;var s=r.memoizedState.inst;De!==null&&i!==null&&vl(i,De.memoizedState.deps)?r.memoizedState=Dn(t,s,n,i):(ue.flags|=e,r.memoizedState=Dn(1|t,s,n,i))}function Xu(e,t){Mr(8390656,8,e,t)}function Ol(e,t){Rr(2048,8,e,t)}function kx(e){ue.flags|=4;var t=ue.updateQueue;if(t===null)t=Cr(),ue.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Zu(e){var t=Fe().memoizedState;return kx({ref:t,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Ku(e,t){return Rr(4,2,e,t)}function $u(e,t){return Rr(4,4,e,t)}function Wu(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ed(e,t,n){n=n!=null?n.concat([e]):null,Rr(4,4,Wu.bind(null,t,e),n)}function Dl(){}function td(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&vl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function ad(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&vl(t,i[1]))return i[0];if(i=e(),tn){xa(!0);try{e()}finally{xa(!1)}}return n.memoizedState=[i,t],i}function wl(e,t,n){return n===void 0||(aa&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=nm(),ue.lanes|=e,Ra|=e,n)}function nd(e,t,n,i){return yt(n,t)?n:Mn.current!==null?(e=wl(e,n,i),yt(e,t)||(Qe=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(he&261930)===0?(Qe=!0,e.memoizedState=n):(e=nm(),ue.lanes|=e,Ra|=e,t)}function id(e,t,n,i,r){var s=F.p;F.p=s!==0&&8>s?s:8;var o=z.T,m={};z.T=m,_l(e,!1,t,n);try{var h=r(),O=z.S;if(O!==null&&O(m,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var U=Lx(h,i);hi(e,t,U,Ct(e))}else hi(e,t,i,Ct(e))}catch(P){hi(e,t,{then:function(){},status:"rejected",reason:P},Ct())}finally{F.p=s,o!==null&&m.types!==null&&(o.types=m.types),z.T=o}}function qx(){}function Ll(e,t,n,i){if(e.tag!==5)throw Error(u(476));var r=rd(e).queue;id(e,r,t,ee,n===null?qx:function(){return sd(e),n(i)})}function rd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function sd(e){var t=rd(e);t.next===null&&(t=e.alternate.memoizedState),hi(e,t.next.queue,{},Ct())}function zl(){return nt(_i)}function ld(){return Fe().memoizedState}function od(){return Fe().memoizedState}function Px(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ct();e=Na(n);var i=Ea(t,e,n);i!==null&&(ft(i,t,n),pi(i,t,n)),t={cache:cl()},e.payload=t;return}t=t.return}}function Hx(e,t,n){var i=Ct();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Or(e)?ud(t,n):(n=$s(e,t,n,i),n!==null&&(ft(n,e,i),dd(n,t,i)))}function cd(e,t,n){var i=Ct();hi(e,t,n,i)}function hi(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Or(e))ud(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,m=s(o,n);if(r.hasEagerState=!0,r.eagerState=m,yt(m,o))return ur(e,t,r,0),_e===null&&cr(),!1}catch{}if(n=$s(e,t,r,i),n!==null)return ft(n,e,i),dd(n,t,i),!0}return!1}function _l(e,t,n,i){if(i={lane:2,revertLane:fo(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Or(e)){if(t)throw Error(u(479))}else t=$s(e,n,i,2),t!==null&&ft(t,e,2)}function Or(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function ud(e,t){Rn=Nr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dd(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,gc(e,n)}}var yi={readContext:nt,use:Ar,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie,useHostTransitionStatus:Ie,useFormState:Ie,useActionState:Ie,useOptimistic:Ie,useMemoCache:Ie,useCacheRefresh:Ie};yi.useEffectEvent=Ie;var md={readContext:nt,use:Ar,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Xu,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Mr(4194308,4,Wu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mr(4194308,4,e,t)},useInsertionEffect:function(e,t){Mr(4,2,e,t)},useMemo:function(e,t){var n=lt();t=t===void 0?null:t;var i=e();if(tn){xa(!0);try{e()}finally{xa(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=lt();if(n!==void 0){var r=n(t);if(tn){xa(!0);try{n(t)}finally{xa(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=Hx.bind(null,ue,e),[i.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ml(e);var t=e.queue,n=cd.bind(null,ue,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Dl,useDeferredValue:function(e,t){var n=lt();return wl(n,e,t)},useTransition:function(){var e=Ml(!1);return e=id.bind(null,ue,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ue,r=lt();if(je){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),_e===null)throw Error(u(349));(he&127)!==0||Lu(i,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,Xu(_u.bind(null,i,s,e),[e]),i.flags|=2048,Dn(9,{destroy:void 0},zu.bind(null,i,s,n,t),null),n},useId:function(){var e=lt(),t=_e.identifierPrefix;if(je){var n=It,i=Ht;n=(i&~(1<<32-ht(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Er++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=zx++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zl,useFormState:Vu,useActionState:Vu,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=_l.bind(null,ue,!0,n),n.dispatch=t,[e,t]},useMemoCache:Cl,useCacheRefresh:function(){return lt().memoizedState=Px.bind(null,ue)},useEffectEvent:function(e){var t=lt(),n={impl:e};return t.memoizedState=n,function(){if((Ae&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},Ul={readContext:nt,use:Ar,useCallback:td,useContext:nt,useEffect:Ol,useImperativeHandle:ed,useInsertionEffect:Ku,useLayoutEffect:$u,useMemo:ad,useReducer:Tr,useRef:Qu,useState:function(){return Tr(na)},useDebugValue:Dl,useDeferredValue:function(e,t){var n=Fe();return nd(n,De.memoizedState,e,t)},useTransition:function(){var e=Tr(na)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:wu,useId:ld,useHostTransitionStatus:zl,useFormState:Fu,useActionState:Fu,useOptimistic:function(e,t){var n=Fe();return ku(n,De,e,t)},useMemoCache:Cl,useCacheRefresh:od};Ul.useEffectEvent=Zu;var pd={readContext:nt,use:Ar,useCallback:td,useContext:nt,useEffect:Ol,useImperativeHandle:ed,useInsertionEffect:Ku,useLayoutEffect:$u,useMemo:ad,useReducer:Tl,useRef:Qu,useState:function(){return Tl(na)},useDebugValue:Dl,useDeferredValue:function(e,t){var n=Fe();return De===null?wl(n,e,t):nd(n,De.memoizedState,e,t)},useTransition:function(){var e=Tl(na)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:wu,useId:ld,useHostTransitionStatus:zl,useFormState:Yu,useActionState:Yu,useOptimistic:function(e,t){var n=Fe();return De!==null?ku(n,De,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Cl,useCacheRefresh:od};pd.useEffectEvent=Zu;function Bl(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kl={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ct(),r=Na(i);r.payload=t,n!=null&&(r.callback=n),t=Ea(e,r,i),t!==null&&(ft(t,e,i),pi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ct(),r=Na(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Ea(e,r,i),t!==null&&(ft(t,e,i),pi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ct(),i=Na(n);i.tag=2,t!=null&&(i.callback=t),t=Ea(e,i,n),t!==null&&(ft(t,e,n),pi(t,e,n))}};function fd(e,t,n,i,r,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,o):t.prototype&&t.prototype.isPureReactComponent?!ri(n,i)||!ri(r,s):!0}function xd(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function an(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function gd(e){or(e)}function bd(e){console.error(e)}function hd(e){or(e)}function Dr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function yd(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ql(e,t,n){return n=Na(n),n.tag=3,n.payload={element:null},n.callback=function(){Dr(e,t)},n}function vd(e){return e=Na(e),e.tag=3,e}function jd(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=i.value;e.payload=function(){return r(s)},e.callback=function(){yd(t,n,i)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){yd(t,n,i),typeof r!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})})}function Ix(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Nn(t,n,r,!0),n=jt.current,n!==null){switch(n.tag){case 31:case 13:return zt===null?Jr():n.alternate===null&&Je===0&&(Je=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===hr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),uo(e,i,r)),!1;case 22:return n.flags|=65536,i===hr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),uo(e,i,r)),!1}throw Error(u(435,n.tag))}return uo(e,i,r),Jr(),!1}if(je)return t=jt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==il&&(e=Error(u(422),{cause:i}),oi(Ot(e,n)))):(i!==il&&(t=Error(u(423),{cause:i}),oi(Ot(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=Ot(i,n),r=ql(e.stateNode,i,r),xl(e,r),Je!==4&&(Je=2)),!1;var s=Error(u(520),{cause:i});if(s=Ot(s,n),Ti===null?Ti=[s]:Ti.push(s),Je!==4&&(Je=2),t===null)return!0;i=Ot(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=ql(n.stateNode,i,e),xl(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Oa===null||!Oa.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=vd(r),jd(r,e,n,i),xl(n,r),!1}n=n.return}while(n!==null);return!1}var Pl=Error(u(461)),Qe=!1;function it(e,t,n,i){t.child=e===null?Cu(t,null,n,i):en(t,e.child,n,i)}function Sd(e,t,n,i,r){n=n.render;var s=t.ref;if("ref"in i){var o={};for(var m in i)m!=="ref"&&(o[m]=i[m])}else o=i;return Za(t),i=jl(e,t,n,o,s,r),m=Sl(),e!==null&&!Qe?(Nl(e,t,r),ia(e,t,r)):(je&&m&&al(t),t.flags|=1,it(e,t,i,r),t.child)}function Nd(e,t,n,i,r){if(e===null){var s=n.type;return typeof s=="function"&&!Ws(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Ed(e,t,s,i,r)):(e=mr(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Ql(e,r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ri,n(o,i)&&e.ref===t.ref)return ia(e,t,r)}return t.flags|=1,e=$t(s,i),e.ref=t.ref,e.return=t,t.child=e}function Ed(e,t,n,i,r){if(e!==null){var s=e.memoizedProps;if(ri(s,i)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=i=s,Ql(e,r))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,ia(e,t,r)}return Hl(e,t,n,i,r)}function Cd(e,t,n,i){var r=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~s}else i=0,t.child=null;return Ad(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&gr(t,s!==null?s.cachePool:null),s!==null?Mu(t,s):bl(),Ru(t);else return i=t.lanes=536870912,Ad(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(gr(t,s.cachePool),Mu(t,s),Aa(),t.memoizedState=null):(e!==null&&gr(t,null),bl(),Aa());return it(e,t,r,n),t.child}function vi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ad(e,t,n,i,r){var s=dl();return s=s===null?null:{parent:Ge._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&gr(t,null),bl(),Ru(t),e!==null&&Nn(e,t,i,!0),t.childLanes=r,null}function wr(e,t){return t=zr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Td(e,t,n){return en(t,e.child,null,n),e=wr(t,t.pendingProps),e.flags|=2,St(t),t.memoizedState=null,e}function Jx(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(je){if(i.mode==="hidden")return e=wr(t,i),t.lanes=536870912,vi(null,e);if(yl(t),(e=Be)?(e=qm(e,Lt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:Ht,overflow:It}:null,retryLane:536870912,hydrationErrors:null},n=uu(e),n.return=t,t.child=n,at=t,Be=null)):e=null,e===null)throw va(t);return t.lanes=536870912,null}return wr(t,i)}var s=e.memoizedState;if(s!==null){var o=s.dehydrated;if(yl(t),r)if(t.flags&256)t.flags&=-257,t=Td(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Qe||Nn(e,t,n,!1),r=(n&e.childLanes)!==0,Qe||r){if(i=_e,i!==null&&(o=bc(i,n),o!==0&&o!==s.retryLane))throw s.retryLane=o,Ga(e,o),ft(i,e,o),Pl;Jr(),t=Td(e,t,n)}else e=s.treeContext,Be=_t(o.nextSibling),at=t,je=!0,ya=null,Lt=!1,e!==null&&pu(t,e),t=wr(t,i),t.flags|=4096;return t}return e=$t(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Lr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Hl(e,t,n,i,r){return Za(t),n=jl(e,t,n,i,void 0,r),i=Sl(),e!==null&&!Qe?(Nl(e,t,r),ia(e,t,r)):(je&&i&&al(t),t.flags|=1,it(e,t,n,r),t.child)}function Md(e,t,n,i,r,s){return Za(t),t.updateQueue=null,n=Du(t,i,n,r),Ou(e),i=Sl(),e!==null&&!Qe?(Nl(e,t,s),ia(e,t,s)):(je&&i&&al(t),t.flags|=1,it(e,t,n,s),t.child)}function Rd(e,t,n,i,r){if(Za(t),t.stateNode===null){var s=yn,o=n.contextType;typeof o=="object"&&o!==null&&(s=nt(o)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=kl,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},pl(t),o=n.contextType,s.context=typeof o=="object"&&o!==null?nt(o):yn,s.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Bl(t,n,o,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(o=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),o!==s.state&&kl.enqueueReplaceState(s,s.state,null),xi(t,i,s,r),fi(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,h=an(n,m);s.props=h;var O=s.context,U=n.contextType;o=yn,typeof U=="object"&&U!==null&&(o=nt(U));var P=n.getDerivedStateFromProps;U=typeof P=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,U||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||O!==o)&&xd(t,s,i,o),Sa=!1;var D=t.memoizedState;s.state=D,xi(t,i,s,r),fi(),O=t.memoizedState,m||D!==O||Sa?(typeof P=="function"&&(Bl(t,n,P,i),O=t.memoizedState),(h=Sa||fd(t,n,h,i,D,O,o))?(U||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=O),s.props=i,s.state=O,s.context=o,i=h):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,fl(e,t),o=t.memoizedProps,U=an(n,o),s.props=U,P=t.pendingProps,D=s.context,O=n.contextType,h=yn,typeof O=="object"&&O!==null&&(h=nt(O)),m=n.getDerivedStateFromProps,(O=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==P||D!==h)&&xd(t,s,i,h),Sa=!1,D=t.memoizedState,s.state=D,xi(t,i,s,r),fi();var w=t.memoizedState;o!==P||D!==w||Sa||e!==null&&e.dependencies!==null&&fr(e.dependencies)?(typeof m=="function"&&(Bl(t,n,m,i),w=t.memoizedState),(U=Sa||fd(t,n,U,i,D,w,h)||e!==null&&e.dependencies!==null&&fr(e.dependencies))?(O||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,w,h),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,w,h)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=w),s.props=i,s.state=w,s.context=h,i=U):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Lr(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=en(t,e.child,null,r),t.child=en(t,null,n,r)):it(e,t,n,r),t.memoizedState=s.state,e=t.child):e=ia(e,t,r),e}function Od(e,t,n,i){return Qa(),t.flags|=256,it(e,t,n,i),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jl(e){return{baseLanes:e,cachePool:yu()}}function Vl(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Et),e}function Dd(e,t,n){var i=t.pendingProps,r=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),o&&(r=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(je){if(r?Ca(t):Aa(),(e=Be)?(e=qm(e,Lt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:Ht,overflow:It}:null,retryLane:536870912,hydrationErrors:null},n=uu(e),n.return=t,t.child=n,at=t,Be=null)):e=null,e===null)throw va(t);return To(e)?t.lanes=32:t.lanes=536870912,null}var m=i.children;return i=i.fallback,r?(Aa(),r=t.mode,m=zr({mode:"hidden",children:m},r),i=Ya(i,r,n,null),m.return=t,i.return=t,m.sibling=i,t.child=m,i=t.child,i.memoizedState=Jl(n),i.childLanes=Vl(e,o,n),t.memoizedState=Il,vi(null,i)):(Ca(t),Fl(t,m))}var h=e.memoizedState;if(h!==null&&(m=h.dehydrated,m!==null)){if(s)t.flags&256?(Ca(t),t.flags&=-257,t=Gl(e,t,n)):t.memoizedState!==null?(Aa(),t.child=e.child,t.flags|=128,t=null):(Aa(),m=i.fallback,r=t.mode,i=zr({mode:"visible",children:i.children},r),m=Ya(m,r,n,null),m.flags|=2,i.return=t,m.return=t,i.sibling=m,t.child=i,en(t,e.child,null,n),i=t.child,i.memoizedState=Jl(n),i.childLanes=Vl(e,o,n),t.memoizedState=Il,t=vi(null,i));else if(Ca(t),To(m)){if(o=m.nextSibling&&m.nextSibling.dataset,o)var O=o.dgst;o=O,i=Error(u(419)),i.stack="",i.digest=o,oi({value:i,source:null,stack:null}),t=Gl(e,t,n)}else if(Qe||Nn(e,t,n,!1),o=(n&e.childLanes)!==0,Qe||o){if(o=_e,o!==null&&(i=bc(o,n),i!==0&&i!==h.retryLane))throw h.retryLane=i,Ga(e,i),ft(o,e,i),Pl;Ao(m)||Jr(),t=Gl(e,t,n)}else Ao(m)?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Be=_t(m.nextSibling),at=t,je=!0,ya=null,Lt=!1,e!==null&&pu(t,e),t=Fl(t,i.children),t.flags|=4096);return t}return r?(Aa(),m=i.fallback,r=t.mode,h=e.child,O=h.sibling,i=$t(h,{mode:"hidden",children:i.children}),i.subtreeFlags=h.subtreeFlags&65011712,O!==null?m=$t(O,m):(m=Ya(m,r,n,null),m.flags|=2),m.return=t,i.return=t,i.sibling=m,t.child=i,vi(null,i),i=t.child,m=e.child.memoizedState,m===null?m=Jl(n):(r=m.cachePool,r!==null?(h=Ge._currentValue,r=r.parent!==h?{parent:h,pool:h}:r):r=yu(),m={baseLanes:m.baseLanes|n,cachePool:r}),i.memoizedState=m,i.childLanes=Vl(e,o,n),t.memoizedState=Il,vi(e.child,i)):(Ca(t),n=e.child,e=n.sibling,n=$t(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Fl(e,t){return t=zr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function zr(e,t){return e=vt(22,e,null,t),e.lanes=0,e}function Gl(e,t,n){return en(t,e.child,null,n),e=Fl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wd(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ll(e.return,t,n)}function Yl(e,t,n,i,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r,o.treeForkCount=s)}function Ld(e,t,n){var i=t.pendingProps,r=i.revealOrder,s=i.tail;i=i.children;var o=Ve.current,m=(o&2)!==0;if(m?(o=o&1|2,t.flags|=128):o&=1,G(Ve,o),it(e,t,i,n),i=je?li:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wd(e,n,t);else if(e.tag===19)wd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Sr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Yl(t,!1,r,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Sr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Yl(t,!0,n,null,s,i);break;case"together":Yl(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ia(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ra|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Nn(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ql(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fr(e)))}function Vx(e,t,n){switch(t.tag){case 3:et(t,t.stateNode.containerInfo),ja(t,Ge,e.memoizedState.cache),Qa();break;case 27:case 5:Gn(t);break;case 4:et(t,t.stateNode.containerInfo);break;case 10:ja(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,yl(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ca(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Dd(e,t,n):(Ca(t),e=ia(e,t,n),e!==null?e.sibling:null);Ca(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Nn(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return Ld(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),G(Ve,Ve.current),i)break;return null;case 22:return t.lanes=0,Cd(e,t,n,t.pendingProps);case 24:ja(t,Ge,e.memoizedState.cache)}return ia(e,t,n)}function zd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!Ql(e,n)&&(t.flags&128)===0)return Qe=!1,Vx(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,je&&(t.flags&1048576)!==0&&mu(t,li,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=$a(t.elementType),t.type=e,typeof e=="function")Ws(e)?(i=an(e,i),t.tag=1,t=Rd(null,t,e,i,n)):(t.tag=0,t=Hl(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===$){t.tag=11,t=Sd(null,t,e,i,n);break e}else if(r===X){t.tag=14,t=Nd(null,t,e,i,n);break e}}throw t=Me(e)||e,Error(u(306,t,""))}}return t;case 0:return Hl(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=an(i,t.pendingProps),Rd(e,t,i,r,n);case 3:e:{if(et(t,t.stateNode.containerInfo),e===null)throw Error(u(387));i=t.pendingProps;var s=t.memoizedState;r=s.element,fl(e,t),xi(t,i,null,n);var o=t.memoizedState;if(i=o.cache,ja(t,Ge,i),i!==s.cache&&ol(t,[Ge],n,!0),fi(),i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Od(e,t,i,n);break e}else if(i!==r){r=Ot(Error(u(424)),t),oi(r),t=Od(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Be=_t(e.firstChild),at=t,je=!0,ya=null,Lt=!0,n=Cu(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qa(),i===r){t=ia(e,t,n);break e}it(e,t,i,n)}t=t.child}return t;case 26:return Lr(e,t),e===null?(n=Fm(t.type,null,t.pendingProps,null))?t.memoizedState=n:je||(n=t.type,e=t.pendingProps,i=Zr(de.current).createElement(n),i[tt]=t,i[ot]=e,rt(i,n,e),$e(i),t.stateNode=i):t.memoizedState=Fm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gn(t),e===null&&je&&(i=t.stateNode=Im(t.type,t.pendingProps,de.current),at=t,Lt=!0,r=Be,za(t.type)?(Mo=r,Be=_t(i.firstChild)):Be=r),it(e,t,t.pendingProps.children,n),Lr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&je&&((r=i=Be)&&(i=vg(i,t.type,t.pendingProps,Lt),i!==null?(t.stateNode=i,at=t,Be=_t(i.firstChild),Lt=!1,r=!0):r=!1),r||va(t)),Gn(t),r=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,i=s.children,No(r,s)?i=null:o!==null&&No(r,o)&&(t.flags|=32),t.memoizedState!==null&&(r=jl(e,t,_x,null,null,n),_i._currentValue=r),Lr(e,t),it(e,t,i,n),t.child;case 6:return e===null&&je&&((e=n=Be)&&(n=jg(n,t.pendingProps,Lt),n!==null?(t.stateNode=n,at=t,Be=null,e=!0):e=!1),e||va(t)),null;case 13:return Dd(e,t,n);case 4:return et(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=en(t,null,i,n):it(e,t,i,n),t.child;case 11:return Sd(e,t,t.type,t.pendingProps,n);case 7:return it(e,t,t.pendingProps,n),t.child;case 8:return it(e,t,t.pendingProps.children,n),t.child;case 12:return it(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ja(t,t.type,i.value),it(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,Za(t),r=nt(r),i=i(r),t.flags|=1,it(e,t,i,n),t.child;case 14:return Nd(e,t,t.type,t.pendingProps,n);case 15:return Ed(e,t,t.type,t.pendingProps,n);case 19:return Ld(e,t,n);case 31:return Jx(e,t,n);case 22:return Cd(e,t,n,t.pendingProps);case 24:return Za(t),i=nt(Ge),e===null?(r=dl(),r===null&&(r=_e,s=cl(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:i,cache:r},pl(t),ja(t,Ge,r)):((e.lanes&n)!==0&&(fl(e,t),xi(t,null,null,n),fi()),r=e.memoizedState,s=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),ja(t,Ge,i)):(i=s.cache,ja(t,Ge,i),i!==r.cache&&ol(t,[Ge],n,!0))),it(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function ra(e){e.flags|=4}function Xl(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(lm())e.flags|=8192;else throw Wa=hr,ml}else e.flags&=-16777217}function _d(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zm(t))if(lm())e.flags|=8192;else throw Wa=hr,ml}function _r(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?fc():536870912,e.lanes|=t,_n|=t)}function ji(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Fx(e,t,n){var i=t.pendingProps;switch(nl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return ke(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ta(Ge),Ue(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Sn(t)?ra(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rl())),ke(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(ra(t),s!==null?(ke(t),_d(t,s)):(ke(t),Xl(t,r,null,i,n))):s?s!==e.memoizedState?(ra(t),ke(t),_d(t,s)):(ke(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ra(t),ke(t),Xl(t,r,e,i,n)),null;case 27:if(Gi(t),n=de.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ra(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return ke(t),null}e=Q.current,Sn(t)?fu(t):(e=Im(r,i,n),t.stateNode=e,ra(t))}return ke(t),null;case 5:if(Gi(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ra(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return ke(t),null}if(s=Q.current,Sn(t))fu(t);else{var o=Zr(de.current);switch(s){case 1:s=o.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=o.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=o.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?o.createElement(r,{is:i.is}):o.createElement(r)}}s[tt]=t,s[ot]=i;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)s.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=s;e:switch(rt(s,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ra(t)}}return ke(t),Xl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ra(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(u(166));if(e=de.current,Sn(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=at,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[tt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Dm(e.nodeValue,n)),e||va(t,!0)}else e=Zr(e).createTextNode(i),e[tt]=t,t.stateNode=e}return ke(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Sn(t),n!==null){if(e===null){if(!i)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[tt]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ke(t),e=!1}else n=rl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(St(t),t):(St(t),null);if((t.flags&128)!==0)throw Error(u(558))}return ke(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Sn(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(u(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(u(317));r[tt]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ke(t),r=!1}else r=rl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(St(t),t):(St(t),null)}return St(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),_r(t,t.updateQueue),ke(t),null);case 4:return Ue(),e===null&&ho(t.stateNode.containerInfo),ke(t),null;case 10:return ta(t.type),ke(t),null;case 19:if(q(Ve),i=t.memoizedState,i===null)return ke(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)ji(i,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Sr(e),s!==null){for(t.flags|=128,ji(i,!1),e=s.updateQueue,t.updateQueue=e,_r(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)cu(n,e),n=n.sibling;return G(Ve,Ve.current&1|2),je&&Wt(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&gt()>Pr&&(t.flags|=128,r=!0,ji(i,!1),t.lanes=4194304)}else{if(!r)if(e=Sr(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,_r(t,e),ji(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!je)return ke(t),null}else 2*gt()-i.renderingStartTime>Pr&&n!==536870912&&(t.flags|=128,r=!0,ji(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=gt(),e.sibling=null,n=Ve.current,G(Ve,r?n&1|2:n&1),je&&Wt(t,i.treeForkCount),e):(ke(t),null);case 22:case 23:return St(t),hl(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),n=t.updateQueue,n!==null&&_r(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&q(Ka),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(Ge),ke(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Gx(e,t){switch(nl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(Ge),Ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Gi(t),null;case 31:if(t.memoizedState!==null){if(St(t),t.alternate===null)throw Error(u(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(St(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Ve),null;case 4:return Ue(),null;case 10:return ta(t.type),null;case 22:case 23:return St(t),hl(),e!==null&&q(Ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(Ge),null;case 25:return null;default:return null}}function Ud(e,t){switch(nl(t),t.tag){case 3:ta(Ge),Ue();break;case 26:case 27:case 5:Gi(t);break;case 4:Ue();break;case 31:t.memoizedState!==null&&St(t);break;case 13:St(t);break;case 19:q(Ve);break;case 10:ta(t.type);break;case 22:case 23:St(t),hl(),e!==null&&q(Ka);break;case 24:ta(Ge)}}function Si(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var s=n.create,o=n.inst;i=s(),o.destroy=i}n=n.next}while(n!==r)}}catch(m){Oe(t,t.return,m)}}function Ta(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var s=r.next;i=s;do{if((i.tag&e)===e){var o=i.inst,m=o.destroy;if(m!==void 0){o.destroy=void 0,r=t;var h=n,O=m;try{O()}catch(U){Oe(r,h,U)}}}i=i.next}while(i!==s)}}catch(U){Oe(t,t.return,U)}}function Bd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Tu(t,n)}catch(i){Oe(e,e.return,i)}}}function kd(e,t,n){n.props=an(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Oe(e,t,i)}}function Ni(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){Oe(e,t,r)}}function Jt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){Oe(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function qd(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){Oe(e,e.return,r)}}function Zl(e,t,n){try{var i=e.stateNode;fg(i,e.type,n,t),i[ot]=t}catch(r){Oe(e,e.return,r)}}function Pd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function Kl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $l(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zt));else if(i!==4&&(i===27&&za(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($l(e,t,n),e=e.sibling;e!==null;)$l(e,t,n),e=e.sibling}function Ur(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&za(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ur(e,t,n),e=e.sibling;e!==null;)Ur(e,t,n),e=e.sibling}function Hd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);rt(t,i,n),t[tt]=e,t[ot]=n}catch(s){Oe(e,e.return,s)}}var sa=!1,Xe=!1,Wl=!1,Id=typeof WeakSet=="function"?WeakSet:Set,We=null;function Yx(e,t){if(e=e.containerInfo,jo=ns,e=eu(e),Gs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,m=-1,h=-1,O=0,U=0,P=e,D=null;t:for(;;){for(var w;P!==n||r!==0&&P.nodeType!==3||(m=o+r),P!==s||i!==0&&P.nodeType!==3||(h=o+i),P.nodeType===3&&(o+=P.nodeValue.length),(w=P.firstChild)!==null;)D=P,P=w;for(;;){if(P===e)break t;if(D===n&&++O===r&&(m=o),D===s&&++U===i&&(h=o),(w=P.nextSibling)!==null)break;P=D,D=P.parentNode}P=w}n=m===-1||h===-1?null:{start:m,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(So={focusedElem:e,selectionRange:n},ns=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var Z=an(n.type,r);e=i.getSnapshotBeforeUpdate(Z,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(re){Oe(n,n.return,re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Co(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Co(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function Jd(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:oa(e,n),i&4&&Si(5,n);break;case 1:if(oa(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){Oe(n,n.return,o)}else{var r=an(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Oe(n,n.return,o)}}i&64&&Bd(n),i&512&&Ni(n,n.return);break;case 3:if(oa(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Tu(e,t)}catch(o){Oe(n,n.return,o)}}break;case 27:t===null&&i&4&&Hd(n);case 26:case 5:oa(e,n),t===null&&i&4&&qd(n),i&512&&Ni(n,n.return);break;case 12:oa(e,n);break;case 31:oa(e,n),i&4&&Gd(e,n);break;case 13:oa(e,n),i&4&&Yd(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=ag.bind(null,n),Sg(e,n))));break;case 22:if(i=n.memoizedState!==null||sa,!i){t=t!==null&&t.memoizedState!==null||Xe,r=sa;var s=Xe;sa=i,(Xe=t)&&!s?ca(e,n,(n.subtreeFlags&8772)!==0):oa(e,n),sa=r,Xe=s}break;case 30:break;default:oa(e,n)}}function Vd(e){var t=e.alternate;t!==null&&(e.alternate=null,Vd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Rs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,ut=!1;function la(e,t,n){for(n=n.child;n!==null;)Fd(e,t,n),n=n.sibling}function Fd(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Yn,n)}catch{}switch(n.tag){case 26:Xe||Jt(n,t),la(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xe||Jt(n,t);var i=qe,r=ut;za(n.type)&&(qe=n.stateNode,ut=!1),la(e,t,n),wi(n.stateNode),qe=i,ut=r;break;case 5:Xe||Jt(n,t);case 6:if(i=qe,r=ut,qe=null,la(e,t,n),qe=i,ut=r,qe!==null)if(ut)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(n.stateNode)}catch(s){Oe(n,t,s)}else try{qe.removeChild(n.stateNode)}catch(s){Oe(n,t,s)}break;case 18:qe!==null&&(ut?(e=qe,Bm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Jn(e)):Bm(qe,n.stateNode));break;case 4:i=qe,r=ut,qe=n.stateNode.containerInfo,ut=!0,la(e,t,n),qe=i,ut=r;break;case 0:case 11:case 14:case 15:Ta(2,n,t),Xe||Ta(4,n,t),la(e,t,n);break;case 1:Xe||(Jt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&kd(n,t,i)),la(e,t,n);break;case 21:la(e,t,n);break;case 22:Xe=(i=Xe)||n.memoizedState!==null,la(e,t,n),Xe=i;break;default:la(e,t,n)}}function Gd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Jn(e)}catch(n){Oe(t,t.return,n)}}}function Yd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jn(e)}catch(n){Oe(t,t.return,n)}}function Qx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Id),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Id),t;default:throw Error(u(435,e.tag))}}function Br(e,t){var n=Qx(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=ng.bind(null,e,i);i.then(r,r)}})}function dt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],s=e,o=t,m=o;e:for(;m!==null;){switch(m.tag){case 27:if(za(m.type)){qe=m.stateNode,ut=!1;break e}break;case 5:qe=m.stateNode,ut=!1;break e;case 3:case 4:qe=m.stateNode.containerInfo,ut=!0;break e}m=m.return}if(qe===null)throw Error(u(160));Fd(s,o,r),qe=null,ut=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Qd(t,e),t=t.sibling}var qt=null;function Qd(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dt(t,e),mt(e),i&4&&(Ta(3,e,e.return),Si(3,e),Ta(5,e,e.return));break;case 1:dt(t,e),mt(e),i&512&&(Xe||n===null||Jt(n,n.return)),i&64&&sa&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=qt;if(dt(t,e),mt(e),i&512&&(Xe||n===null||Jt(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Zn]||s[tt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(i),r.head.insertBefore(s,r.querySelector("head > title"))),rt(s,i,n),s[tt]=e,$e(s),i=s;break e;case"link":var o=Qm("link","href",r).get(i+(n.href||""));if(o){for(var m=0;m<o.length;m++)if(s=o[m],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(m,1);break t}}s=r.createElement(i),rt(s,i,n),r.head.appendChild(s);break;case"meta":if(o=Qm("meta","content",r).get(i+(n.content||""))){for(m=0;m<o.length;m++)if(s=o[m],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(m,1);break t}}s=r.createElement(i),rt(s,i,n),r.head.appendChild(s);break;default:throw Error(u(468,i))}s[tt]=e,$e(s),i=s}e.stateNode=i}else Xm(r,e.type,e.stateNode);else e.stateNode=Ym(r,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?Xm(r,e.type,e.stateNode):Ym(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Zl(e,e.memoizedProps,n.memoizedProps)}break;case 27:dt(t,e),mt(e),i&512&&(Xe||n===null||Jt(n,n.return)),n!==null&&i&4&&Zl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(dt(t,e),mt(e),i&512&&(Xe||n===null||Jt(n,n.return)),e.flags&32){r=e.stateNode;try{mn(r,"")}catch(Z){Oe(e,e.return,Z)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,Zl(e,r,n!==null?n.memoizedProps:r)),i&1024&&(Wl=!0);break;case 6:if(dt(t,e),mt(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(Z){Oe(e,e.return,Z)}}break;case 3:if(Wr=null,r=qt,qt=Kr(t.containerInfo),dt(t,e),qt=r,mt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Jn(t.containerInfo)}catch(Z){Oe(e,e.return,Z)}Wl&&(Wl=!1,Xd(e));break;case 4:i=qt,qt=Kr(e.stateNode.containerInfo),dt(t,e),mt(e),qt=i;break;case 12:dt(t,e),mt(e);break;case 31:dt(t,e),mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Br(e,i)));break;case 13:dt(t,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(qr=gt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Br(e,i)));break;case 22:r=e.memoizedState!==null;var h=n!==null&&n.memoizedState!==null,O=sa,U=Xe;if(sa=O||r,Xe=U||h,dt(t,e),Xe=U,sa=O,mt(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||h||sa||Xe||nn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){h=n=t;try{if(s=h.stateNode,r)o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{m=h.stateNode;var P=h.memoizedProps.style,D=P!=null&&P.hasOwnProperty("display")?P.display:null;m.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(Z){Oe(h,h.return,Z)}}}else if(t.tag===6){if(n===null){h=t;try{h.stateNode.nodeValue=r?"":h.memoizedProps}catch(Z){Oe(h,h.return,Z)}}}else if(t.tag===18){if(n===null){h=t;try{var w=h.stateNode;r?km(w,!0):km(h.stateNode,!1)}catch(Z){Oe(h,h.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Br(e,n))));break;case 19:dt(t,e),mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Br(e,i)));break;case 30:break;case 21:break;default:dt(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Pd(i)){n=i;break}i=i.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var r=n.stateNode,s=Kl(e);Ur(e,s,r);break;case 5:var o=n.stateNode;n.flags&32&&(mn(o,""),n.flags&=-33);var m=Kl(e);Ur(e,m,o);break;case 3:case 4:var h=n.stateNode.containerInfo,O=Kl(e);$l(e,O,h);break;default:throw Error(u(161))}}catch(U){Oe(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Xd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function oa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Jd(e,t.alternate,t),t=t.sibling}function nn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ta(4,t,t.return),nn(t);break;case 1:Jt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&kd(t,t.return,n),nn(t);break;case 27:wi(t.stateNode);case 26:case 5:Jt(t,t.return),nn(t);break;case 22:t.memoizedState===null&&nn(t);break;case 30:nn(t);break;default:nn(t)}e=e.sibling}}function ca(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,s=t,o=s.flags;switch(s.tag){case 0:case 11:case 15:ca(r,s,n),Si(4,s);break;case 1:if(ca(r,s,n),i=s,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(O){Oe(i,i.return,O)}if(i=s,r=i.updateQueue,r!==null){var m=i.stateNode;try{var h=r.shared.hiddenCallbacks;if(h!==null)for(r.shared.hiddenCallbacks=null,r=0;r<h.length;r++)Au(h[r],m)}catch(O){Oe(i,i.return,O)}}n&&o&64&&Bd(s),Ni(s,s.return);break;case 27:Hd(s);case 26:case 5:ca(r,s,n),n&&i===null&&o&4&&qd(s),Ni(s,s.return);break;case 12:ca(r,s,n);break;case 31:ca(r,s,n),n&&o&4&&Gd(r,s);break;case 13:ca(r,s,n),n&&o&4&&Yd(r,s);break;case 22:s.memoizedState===null&&ca(r,s,n),Ni(s,s.return);break;case 30:break;default:ca(r,s,n)}t=t.sibling}}function eo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ci(n))}function to(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ci(e))}function Pt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zd(e,t,n,i),t=t.sibling}function Zd(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Pt(e,t,n,i),r&2048&&Si(9,t);break;case 1:Pt(e,t,n,i);break;case 3:Pt(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ci(e)));break;case 12:if(r&2048){Pt(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,o=s.id,m=s.onPostCommit;typeof m=="function"&&m(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){Oe(t,t.return,h)}}else Pt(e,t,n,i);break;case 31:Pt(e,t,n,i);break;case 13:Pt(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,o=t.alternate,t.memoizedState!==null?s._visibility&2?Pt(e,t,n,i):Ei(e,t):s._visibility&2?Pt(e,t,n,i):(s._visibility|=2,wn(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&eo(o,t);break;case 24:Pt(e,t,n,i),r&2048&&to(t.alternate,t);break;default:Pt(e,t,n,i)}}function wn(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,o=t,m=n,h=i,O=o.flags;switch(o.tag){case 0:case 11:case 15:wn(s,o,m,h,r),Si(8,o);break;case 23:break;case 22:var U=o.stateNode;o.memoizedState!==null?U._visibility&2?wn(s,o,m,h,r):Ei(s,o):(U._visibility|=2,wn(s,o,m,h,r)),r&&O&2048&&eo(o.alternate,o);break;case 24:wn(s,o,m,h,r),r&&O&2048&&to(o.alternate,o);break;default:wn(s,o,m,h,r)}t=t.sibling}}function Ei(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:Ei(n,i),r&2048&&eo(i.alternate,i);break;case 24:Ei(n,i),r&2048&&to(i.alternate,i);break;default:Ei(n,i)}t=t.sibling}}var Ci=8192;function Ln(e,t,n){if(e.subtreeFlags&Ci)for(e=e.child;e!==null;)Kd(e,t,n),e=e.sibling}function Kd(e,t,n){switch(e.tag){case 26:Ln(e,t,n),e.flags&Ci&&e.memoizedState!==null&&zg(n,qt,e.memoizedState,e.memoizedProps);break;case 5:Ln(e,t,n);break;case 3:case 4:var i=qt;qt=Kr(e.stateNode.containerInfo),Ln(e,t,n),qt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ci,Ci=16777216,Ln(e,t,n),Ci=i):Ln(e,t,n));break;default:Ln(e,t,n)}}function $d(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ai(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];We=i,em(i,e)}$d(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wd(e),e=e.sibling}function Wd(e){switch(e.tag){case 0:case 11:case 15:Ai(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:Ai(e);break;case 12:Ai(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,kr(e)):Ai(e);break;default:Ai(e)}}function kr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];We=i,em(i,e)}$d(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ta(8,t,t.return),kr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,kr(t));break;default:kr(t)}e=e.sibling}}function em(e,t){for(;We!==null;){var n=We;switch(n.tag){case 0:case 11:case 15:Ta(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ci(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,We=i;else e:for(n=e;We!==null;){i=We;var r=i.sibling,s=i.return;if(Vd(i),i===n){We=null;break e}if(r!==null){r.return=s,We=r;break e}We=s}}}var Xx={getCacheForType:function(e){var t=nt(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return nt(Ge).controller.signal}},Zx=typeof WeakMap=="function"?WeakMap:Map,Ae=0,_e=null,xe=null,he=0,Re=0,Nt=null,Ma=!1,zn=!1,ao=!1,ua=0,Je=0,Ra=0,rn=0,no=0,Et=0,_n=0,Ti=null,pt=null,io=!1,qr=0,tm=0,Pr=1/0,Hr=null,Oa=null,Ke=0,Da=null,Un=null,da=0,ro=0,so=null,am=null,Mi=0,lo=null;function Ct(){return(Ae&2)!==0&&he!==0?he&-he:z.T!==null?fo():hc()}function nm(){if(Et===0)if((he&536870912)===0||je){var e=Xi;Xi<<=1,(Xi&3932160)===0&&(Xi=262144),Et=e}else Et=536870912;return e=jt.current,e!==null&&(e.flags|=32),Et}function ft(e,t,n){(e===_e&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(Bn(e,0),wa(e,he,Et,!1)),Xn(e,n),((Ae&2)===0||e!==_e)&&(e===_e&&((Ae&2)===0&&(rn|=n),Je===4&&wa(e,he,Et,!1)),Vt(e))}function im(e,t,n){if((Ae&6)!==0)throw Error(u(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Qn(e,t),r=i?Wx(e,t):co(e,t,!0),s=i;do{if(r===0){zn&&!i&&wa(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Kx(n)){r=co(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var m=e;r=Ti;var h=m.current.memoizedState.isDehydrated;if(h&&(Bn(m,o).flags|=256),o=co(m,o,!1),o!==2){if(ao&&!h){m.errorRecoveryDisabledLanes|=s,rn|=s,r=4;break e}s=pt,pt=r,s!==null&&(pt===null?pt=s:pt.push.apply(pt,s))}r=o}if(s=!1,r!==2)continue}}if(r===1){Bn(e,0),wa(e,t,0,!0);break}e:{switch(i=e,s=r,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:wa(i,t,Et,!Ma);break e;case 2:pt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(r=qr+300-gt(),10<r)){if(wa(i,t,Et,!Ma),Ki(i,0,!0)!==0)break e;da=t,i.timeoutHandle=_m(rm.bind(null,i,n,pt,Hr,io,t,Et,rn,_n,Ma,s,"Throttled",-0,0),r);break e}rm(i,n,pt,Hr,io,t,Et,rn,_n,Ma,s,null,-0,0)}}break}while(!0);Vt(e)}function rm(e,t,n,i,r,s,o,m,h,O,U,P,D,w){if(e.timeoutHandle=-1,P=t.subtreeFlags,P&8192||(P&16785408)===16785408){P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},Kd(t,s,P);var Z=(s&62914560)===s?qr-gt():(s&4194048)===s?tm-gt():0;if(Z=_g(P,Z),Z!==null){da=s,e.cancelPendingCommit=Z(pm.bind(null,e,t,s,n,i,r,o,m,h,U,P,null,D,w)),wa(e,s,o,!O);return}}pm(e,t,s,n,i,r,o,m,h)}function Kx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!yt(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wa(e,t,n,i){t&=~no,t&=~rn,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var s=31-ht(r),o=1<<s;i[s]=-1,r&=~o}n!==0&&xc(e,n,t)}function Ir(){return(Ae&6)===0?(Ri(0),!1):!0}function oo(){if(xe!==null){if(Re===0)var e=xe.return;else e=xe,ea=Xa=null,El(e),Tn=null,di=0,e=xe;for(;e!==null;)Ud(e.alternate,e),e=e.return;xe=null}}function Bn(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,bg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),da=0,oo(),_e=e,xe=n=$t(e.current,null),he=t,Re=0,Nt=null,Ma=!1,zn=Qn(e,t),ao=!1,_n=Et=no=rn=Ra=Je=0,pt=Ti=null,io=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-ht(i),s=1<<r;t|=e[r],i&=~s}return ua=t,cr(),n}function sm(e,t){ue=null,z.H=yi,t===An||t===br?(t=Su(),Re=3):t===ml?(t=Su(),Re=4):Re=t===Pl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Nt=t,xe===null&&(Je=1,Dr(e,Ot(t,e.current)))}function lm(){var e=jt.current;return e===null?!0:(he&4194048)===he?zt===null:(he&62914560)===he||(he&536870912)!==0?e===zt:!1}function om(){var e=z.H;return z.H=yi,e===null?yi:e}function cm(){var e=z.A;return z.A=Xx,e}function Jr(){Je=4,Ma||(he&4194048)!==he&&jt.current!==null||(zn=!0),(Ra&134217727)===0&&(rn&134217727)===0||_e===null||wa(_e,he,Et,!1)}function co(e,t,n){var i=Ae;Ae|=2;var r=om(),s=cm();(_e!==e||he!==t)&&(Hr=null,Bn(e,t)),t=!1;var o=Je;e:do try{if(Re!==0&&xe!==null){var m=xe,h=Nt;switch(Re){case 8:oo(),o=6;break e;case 3:case 2:case 9:case 6:jt.current===null&&(t=!0);var O=Re;if(Re=0,Nt=null,kn(e,m,h,O),n&&zn){o=0;break e}break;default:O=Re,Re=0,Nt=null,kn(e,m,h,O)}}$x(),o=Je;break}catch(U){sm(e,U)}while(!0);return t&&e.shellSuspendCounter++,ea=Xa=null,Ae=i,z.H=r,z.A=s,xe===null&&(_e=null,he=0,cr()),o}function $x(){for(;xe!==null;)um(xe)}function Wx(e,t){var n=Ae;Ae|=2;var i=om(),r=cm();_e!==e||he!==t?(Hr=null,Pr=gt()+500,Bn(e,t)):zn=Qn(e,t);e:do try{if(Re!==0&&xe!==null){t=xe;var s=Nt;t:switch(Re){case 1:Re=0,Nt=null,kn(e,t,s,1);break;case 2:case 9:if(vu(s)){Re=0,Nt=null,dm(t);break}t=function(){Re!==2&&Re!==9||_e!==e||(Re=7),Vt(e)},s.then(t,t);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:vu(s)?(Re=0,Nt=null,dm(t)):(Re=0,Nt=null,kn(e,t,s,7));break;case 5:var o=null;switch(xe.tag){case 26:o=xe.memoizedState;case 5:case 27:var m=xe;if(o?Zm(o):m.stateNode.complete){Re=0,Nt=null;var h=m.sibling;if(h!==null)xe=h;else{var O=m.return;O!==null?(xe=O,Vr(O)):xe=null}break t}}Re=0,Nt=null,kn(e,t,s,5);break;case 6:Re=0,Nt=null,kn(e,t,s,6);break;case 8:oo(),Je=6;break e;default:throw Error(u(462))}}eg();break}catch(U){sm(e,U)}while(!0);return ea=Xa=null,z.H=i,z.A=r,Ae=n,xe!==null?0:(_e=null,he=0,cr(),Je)}function eg(){for(;xe!==null&&!Nf();)um(xe)}function um(e){var t=zd(e.alternate,e,ua);e.memoizedProps=e.pendingProps,t===null?Vr(e):xe=t}function dm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Md(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Md(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:El(t);default:Ud(n,t),t=xe=cu(t,ua),t=zd(n,t,ua)}e.memoizedProps=e.pendingProps,t===null?Vr(e):xe=t}function kn(e,t,n,i){ea=Xa=null,El(t),Tn=null,di=0;var r=t.return;try{if(Ix(e,r,t,n,he)){Je=1,Dr(e,Ot(n,e.current)),xe=null;return}}catch(s){if(r!==null)throw xe=r,s;Je=1,Dr(e,Ot(n,e.current)),xe=null;return}t.flags&32768?(je||i===1?e=!0:zn||(he&536870912)!==0?e=!1:(Ma=e=!0,(i===2||i===9||i===3||i===6)&&(i=jt.current,i!==null&&i.tag===13&&(i.flags|=16384))),mm(t,e)):Vr(t)}function Vr(e){var t=e;do{if((t.flags&32768)!==0){mm(t,Ma);return}e=t.return;var n=Fx(t.alternate,t,ua);if(n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Je===0&&(Je=5)}function mm(e,t){do{var n=Gx(e.alternate,e);if(n!==null){n.flags&=32767,xe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){xe=e;return}xe=e=n}while(e!==null);Je=6,xe=null}function pm(e,t,n,i,r,s,o,m,h){e.cancelPendingCommit=null;do Fr();while(Ke!==0);if((Ae&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=Ks,Lf(e,n,s,o,m,h),e===_e&&(xe=_e=null,he=0),Un=t,Da=e,da=n,ro=s,so=r,am=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ig(Yi,function(){return hm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=z.T,z.T=null,r=F.p,F.p=2,o=Ae,Ae|=4;try{Yx(e,t,n)}finally{Ae=o,F.p=r,z.T=i}}Ke=1,fm(),xm(),gm()}}function fm(){if(Ke===1){Ke=0;var e=Da,t=Un,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=z.T,z.T=null;var i=F.p;F.p=2;var r=Ae;Ae|=4;try{Qd(t,e);var s=So,o=eu(e.containerInfo),m=s.focusedElem,h=s.selectionRange;if(o!==m&&m&&m.ownerDocument&&Wc(m.ownerDocument.documentElement,m)){if(h!==null&&Gs(m)){var O=h.start,U=h.end;if(U===void 0&&(U=O),"selectionStart"in m)m.selectionStart=O,m.selectionEnd=Math.min(U,m.value.length);else{var P=m.ownerDocument||document,D=P&&P.defaultView||window;if(D.getSelection){var w=D.getSelection(),Z=m.textContent.length,re=Math.min(h.start,Z),Le=h.end===void 0?re:Math.min(h.end,Z);!w.extend&&re>Le&&(o=Le,Le=re,re=o);var C=$c(m,re),v=$c(m,Le);if(C&&v&&(w.rangeCount!==1||w.anchorNode!==C.node||w.anchorOffset!==C.offset||w.focusNode!==v.node||w.focusOffset!==v.offset)){var R=P.createRange();R.setStart(C.node,C.offset),w.removeAllRanges(),re>Le?(w.addRange(R),w.extend(v.node,v.offset)):(R.setEnd(v.node,v.offset),w.addRange(R))}}}}for(P=[],w=m;w=w.parentNode;)w.nodeType===1&&P.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<P.length;m++){var k=P[m];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}ns=!!jo,So=jo=null}finally{Ae=r,F.p=i,z.T=n}}e.current=t,Ke=2}}function xm(){if(Ke===2){Ke=0;var e=Da,t=Un,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var i=F.p;F.p=2;var r=Ae;Ae|=4;try{Jd(e,t.alternate,t)}finally{Ae=r,F.p=i,z.T=n}}Ke=3}}function gm(){if(Ke===4||Ke===3){Ke=0,Ef();var e=Da,t=Un,n=da,i=am;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,Un=Da=null,bm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Oa=null),Ts(n),t=t.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Yn,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=z.T,r=F.p,F.p=2,z.T=null;try{for(var s=e.onRecoverableError,o=0;o<i.length;o++){var m=i[o];s(m.value,{componentStack:m.stack})}}finally{z.T=t,F.p=r}}(da&3)!==0&&Fr(),Vt(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===lo?Mi++:(Mi=0,lo=e):Mi=0,Ri(0)}}function bm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ci(t)))}function Fr(){return fm(),xm(),gm(),hm()}function hm(){if(Ke!==5)return!1;var e=Da,t=ro;ro=0;var n=Ts(da),i=z.T,r=F.p;try{F.p=32>n?32:n,z.T=null,n=so,so=null;var s=Da,o=da;if(Ke=0,Un=Da=null,da=0,(Ae&6)!==0)throw Error(u(331));var m=Ae;if(Ae|=4,Wd(s.current),Zd(s,s.current,o,n),Ae=m,Ri(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Yn,s)}catch{}return!0}finally{F.p=r,z.T=i,bm(e,t)}}function ym(e,t,n){t=Ot(n,t),t=ql(e.stateNode,t,2),e=Ea(e,t,2),e!==null&&(Xn(e,2),Vt(e))}function Oe(e,t,n){if(e.tag===3)ym(e,e,n);else for(;t!==null;){if(t.tag===3){ym(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oa===null||!Oa.has(i))){e=Ot(n,e),n=vd(2),i=Ea(t,n,2),i!==null&&(jd(n,i,t,e),Xn(i,2),Vt(i));break}}t=t.return}}function uo(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Zx;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(ao=!0,r.add(n),e=tg.bind(null,e,t,n),t.then(e,e))}function tg(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_e===e&&(he&n)===n&&(Je===4||Je===3&&(he&62914560)===he&&300>gt()-qr?(Ae&2)===0&&Bn(e,0):no|=n,_n===he&&(_n=0)),Vt(e)}function vm(e,t){t===0&&(t=fc()),e=Ga(e,t),e!==null&&(Xn(e,t),Vt(e))}function ag(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vm(e,n)}function ng(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(t),vm(e,n)}function ig(e,t){return Ns(e,t)}var Gr=null,qn=null,mo=!1,Yr=!1,po=!1,La=0;function Vt(e){e!==qn&&e.next===null&&(qn===null?Gr=qn=e:qn=qn.next=e),Yr=!0,mo||(mo=!0,sg())}function Ri(e,t){if(!po&&Yr){po=!0;do for(var n=!1,i=Gr;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var s=0;else{var o=i.suspendedLanes,m=i.pingedLanes;s=(1<<31-ht(42|e)+1)-1,s&=r&~(o&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Em(i,s))}else s=he,s=Ki(i,i===_e?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Qn(i,s)||(n=!0,Em(i,s));i=i.next}while(n);po=!1}}function rg(){jm()}function jm(){Yr=mo=!1;var e=0;La!==0&&gg()&&(e=La);for(var t=gt(),n=null,i=Gr;i!==null;){var r=i.next,s=Sm(i,t);s===0?(i.next=null,n===null?Gr=r:n.next=r,r===null&&(qn=n)):(n=i,(e!==0||(s&3)!==0)&&(Yr=!0)),i=r}Ke!==0&&Ke!==5||Ri(e),La!==0&&(La=0)}function Sm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var o=31-ht(s),m=1<<o,h=r[o];h===-1?((m&n)===0||(m&i)!==0)&&(r[o]=wf(m,t)):h<=t&&(e.expiredLanes|=m),s&=~m}if(t=_e,n=he,n=Ki(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Es(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Qn(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Es(i),Ts(n)){case 2:case 8:n=mc;break;case 32:n=Yi;break;case 268435456:n=pc;break;default:n=Yi}return i=Nm.bind(null,e),n=Ns(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Es(i),e.callbackPriority=2,e.callbackNode=null,2}function Nm(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Fr()&&e.callbackNode!==n)return null;var i=he;return i=Ki(e,e===_e?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(im(e,i,t),Sm(e,gt()),e.callbackNode!=null&&e.callbackNode===n?Nm.bind(null,e):null)}function Em(e,t){if(Fr())return null;im(e,t,!0)}function sg(){hg(function(){(Ae&6)!==0?Ns(dc,rg):jm()})}function fo(){if(La===0){var e=En;e===0&&(e=Qi,Qi<<=1,(Qi&261888)===0&&(Qi=256)),La=e}return La}function Cm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tr(""+e)}function Am(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function lg(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var s=Cm((r[ot]||null).action),o=i.submitter;o&&(t=(t=o[ot]||null)?Cm(t.formAction):o.getAttribute("formAction"),t!==null&&(s=t,o=null));var m=new rr("action","action",null,i,r);e.push({event:m,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(La!==0){var h=o?Am(r,o):new FormData(r);Ll(n,{pending:!0,data:h,method:r.method,action:s},null,h)}}else typeof s=="function"&&(m.preventDefault(),h=o?Am(r,o):new FormData(r),Ll(n,{pending:!0,data:h,method:r.method,action:s},s,h))},currentTarget:r}]})}}for(var xo=0;xo<Zs.length;xo++){var go=Zs[xo],og=go.toLowerCase(),cg=go[0].toUpperCase()+go.slice(1);kt(og,"on"+cg)}kt(nu,"onAnimationEnd"),kt(iu,"onAnimationIteration"),kt(ru,"onAnimationStart"),kt("dblclick","onDoubleClick"),kt("focusin","onFocus"),kt("focusout","onBlur"),kt(Cx,"onTransitionRun"),kt(Ax,"onTransitionStart"),kt(Tx,"onTransitionCancel"),kt(su,"onTransitionEnd"),un("onMouseEnter",["mouseout","mouseover"]),un("onMouseLeave",["mouseout","mouseover"]),un("onPointerEnter",["pointerout","pointerover"]),un("onPointerLeave",["pointerout","pointerover"]),Ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ia("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ug=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oi));function Tm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var o=i.length-1;0<=o;o--){var m=i[o],h=m.instance,O=m.currentTarget;if(m=m.listener,h!==s&&r.isPropagationStopped())break e;s=m,r.currentTarget=O;try{s(r)}catch(U){or(U)}r.currentTarget=null,s=h}else for(o=0;o<i.length;o++){if(m=i[o],h=m.instance,O=m.currentTarget,m=m.listener,h!==s&&r.isPropagationStopped())break e;s=m,r.currentTarget=O;try{s(r)}catch(U){or(U)}r.currentTarget=null,s=h}}}}function ge(e,t){var n=t[Ms];n===void 0&&(n=t[Ms]=new Set);var i=e+"__bubble";n.has(i)||(Mm(t,e,2,!1),n.add(i))}function bo(e,t,n){var i=0;t&&(i|=4),Mm(n,e,i,t)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function ho(e){if(!e[Qr]){e[Qr]=!0,jc.forEach(function(n){n!=="selectionchange"&&(ug.has(n)||bo(n,!1,e),bo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qr]||(t[Qr]=!0,bo("selectionchange",!1,t))}}function Mm(e,t,n,i){switch(np(t)){case 2:var r=kg;break;case 8:r=qg;break;default:r=Lo}n=r.bind(null,t,n,e),r=void 0,!Bs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function yo(e,t,n,i,r){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var m=i.stateNode.containerInfo;if(m===r)break;if(o===4)for(o=i.return;o!==null;){var h=o.tag;if((h===3||h===4)&&o.stateNode.containerInfo===r)return;o=o.return}for(;m!==null;){if(o=ln(m),o===null)return;if(h=o.tag,h===5||h===6||h===26||h===27){i=s=o;continue e}m=m.parentNode}}i=i.return}Lc(function(){var O=s,U=_s(n),P=[];e:{var D=lu.get(e);if(D!==void 0){var w=rr,Z=e;switch(e){case"keypress":if(nr(n)===0)break e;case"keydown":case"keyup":w=nx;break;case"focusin":Z="focus",w=Hs;break;case"focusout":Z="blur",w=Hs;break;case"beforeblur":case"afterblur":w=Hs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Uc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Ff;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=sx;break;case nu:case iu:case ru:w=Qf;break;case su:w=ox;break;case"scroll":case"scrollend":w=Jf;break;case"wheel":w=ux;break;case"copy":case"cut":case"paste":w=Zf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=kc;break;case"toggle":case"beforetoggle":w=mx}var re=(t&4)!==0,Le=!re&&(e==="scroll"||e==="scrollend"),C=re?D!==null?D+"Capture":null:D;re=[];for(var v=O,R;v!==null;){var k=v;if(R=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||R===null||C===null||(k=$n(v,C),k!=null&&re.push(Di(v,k,R))),Le)break;v=v.return}0<re.length&&(D=new w(D,Z,null,n,U),P.push({event:D,listeners:re}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",D&&n!==zs&&(Z=n.relatedTarget||n.fromElement)&&(ln(Z)||Z[sn]))break e;if((w||D)&&(D=U.window===U?U:(D=U.ownerDocument)?D.defaultView||D.parentWindow:window,w?(Z=n.relatedTarget||n.toElement,w=O,Z=Z?ln(Z):null,Z!==null&&(Le=x(Z),re=Z.tag,Z!==Le||re!==5&&re!==27&&re!==6)&&(Z=null)):(w=null,Z=O),w!==Z)){if(re=Uc,k="onMouseLeave",C="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(re=kc,k="onPointerLeave",C="onPointerEnter",v="pointer"),Le=w==null?D:Kn(w),R=Z==null?D:Kn(Z),D=new re(k,v+"leave",w,n,U),D.target=Le,D.relatedTarget=R,k=null,ln(U)===O&&(re=new re(C,v+"enter",Z,n,U),re.target=R,re.relatedTarget=Le,k=re),Le=k,w&&Z)t:{for(re=dg,C=w,v=Z,R=0,k=C;k;k=re(k))R++;k=0;for(var ae=v;ae;ae=re(ae))k++;for(;0<R-k;)C=re(C),R--;for(;0<k-R;)v=re(v),k--;for(;R--;){if(C===v||v!==null&&C===v.alternate){re=C;break t}C=re(C),v=re(v)}re=null}else re=null;w!==null&&Rm(P,D,w,re,!1),Z!==null&&Le!==null&&Rm(P,Le,Z,re,!0)}}e:{if(D=O?Kn(O):window,w=D.nodeName&&D.nodeName.toLowerCase(),w==="select"||w==="input"&&D.type==="file")var Se=Gc;else if(Vc(D))if(Yc)Se=Sx;else{Se=vx;var W=yx}else w=D.nodeName,!w||w.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?O&&Ls(O.elementType)&&(Se=Gc):Se=jx;if(Se&&(Se=Se(e,O))){Fc(P,Se,n,U);break e}W&&W(e,D,O),e==="focusout"&&O&&D.type==="number"&&O.memoizedProps.value!=null&&ws(D,"number",D.value)}switch(W=O?Kn(O):window,e){case"focusin":(Vc(W)||W.contentEditable==="true")&&(gn=W,Ys=O,si=null);break;case"focusout":si=Ys=gn=null;break;case"mousedown":Qs=!0;break;case"contextmenu":case"mouseup":case"dragend":Qs=!1,tu(P,n,U);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":tu(P,n,U)}var me;if(Js)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else xn?Ic(e,n)&&(ye="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ye="onCompositionStart");ye&&(qc&&n.locale!=="ko"&&(xn||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&xn&&(me=zc()):(ba=U,ks="value"in ba?ba.value:ba.textContent,xn=!0)),W=Xr(O,ye),0<W.length&&(ye=new Bc(ye,e,null,n,U),P.push({event:ye,listeners:W}),me?ye.data=me:(me=Jc(n),me!==null&&(ye.data=me)))),(me=fx?xx(e,n):gx(e,n))&&(ye=Xr(O,"onBeforeInput"),0<ye.length&&(W=new Bc("onBeforeInput","beforeinput",null,n,U),P.push({event:W,listeners:ye}),W.data=me)),lg(P,e,O,n,U)}Tm(P,t)})}function Di(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=$n(e,n),r!=null&&i.unshift(Di(e,r,s)),r=$n(e,t),r!=null&&i.push(Di(e,r,s))),e.tag===3)return i;e=e.return}return[]}function dg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rm(e,t,n,i,r){for(var s=t._reactName,o=[];n!==null&&n!==i;){var m=n,h=m.alternate,O=m.stateNode;if(m=m.tag,h!==null&&h===i)break;m!==5&&m!==26&&m!==27||O===null||(h=O,r?(O=$n(n,s),O!=null&&o.unshift(Di(n,O,h))):r||(O=$n(n,s),O!=null&&o.push(Di(n,O,h)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var mg=/\r\n?/g,pg=/\u0000|\uFFFD/g;function Om(e){return(typeof e=="string"?e:""+e).replace(mg,`
`).replace(pg,"")}function Dm(e,t){return t=Om(t),Om(e)===t}function we(e,t,n,i,r,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||mn(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&mn(e,""+i);break;case"className":Wi(e,"class",i);break;case"tabIndex":Wi(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Wi(e,n,i);break;case"style":Dc(e,i,s);break;case"data":if(t!=="object"){Wi(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=tr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&we(e,t,"name",r.name,r,null),we(e,t,"formEncType",r.formEncType,r,null),we(e,t,"formMethod",r.formMethod,r,null),we(e,t,"formTarget",r.formTarget,r,null)):(we(e,t,"encType",r.encType,r,null),we(e,t,"method",r.method,r,null),we(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=tr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Zt);break;case"onScroll":i!=null&&ge("scroll",e);break;case"onScrollEnd":i!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=tr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ge("beforetoggle",e),ge("toggle",e),$i(e,"popover",i);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":$i(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Hf.get(n)||n,$i(e,n,i))}}function vo(e,t,n,i,r,s){switch(n){case"style":Dc(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof i=="string"?mn(e,i):(typeof i=="number"||typeof i=="bigint")&&mn(e,""+i);break;case"onScroll":i!=null&&ge("scroll",e);break;case"onScrollEnd":i!=null&&ge("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[ot]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):$i(e,n,i)}}}function rt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var i=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var o=n[s];if(o!=null)switch(s){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:we(e,t,s,o,n,null)}}r&&we(e,t,"srcSet",n.srcSet,n,null),i&&we(e,t,"src",n.src,n,null);return;case"input":ge("invalid",e);var m=s=o=r=null,h=null,O=null;for(i in n)if(n.hasOwnProperty(i)){var U=n[i];if(U!=null)switch(i){case"name":r=U;break;case"type":o=U;break;case"checked":h=U;break;case"defaultChecked":O=U;break;case"value":s=U;break;case"defaultValue":m=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(u(137,t));break;default:we(e,t,i,U,n,null)}}Tc(e,s,m,h,O,o,r,!1);return;case"select":ge("invalid",e),i=o=s=null;for(r in n)if(n.hasOwnProperty(r)&&(m=n[r],m!=null))switch(r){case"value":s=m;break;case"defaultValue":o=m;break;case"multiple":i=m;default:we(e,t,r,m,n,null)}t=s,n=o,e.multiple=!!i,t!=null?dn(e,!!i,t,!1):n!=null&&dn(e,!!i,n,!0);return;case"textarea":ge("invalid",e),s=r=i=null;for(o in n)if(n.hasOwnProperty(o)&&(m=n[o],m!=null))switch(o){case"value":i=m;break;case"defaultValue":r=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(u(91));break;default:we(e,t,o,m,n,null)}Rc(e,i,r,s);return;case"option":for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!=null)&&(h==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":we(e,t,h,i,n,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(i=0;i<Oi.length;i++)ge(Oi[i],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(i=n[O],i!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:we(e,t,O,i,n,null)}return;default:if(Ls(t)){for(U in n)n.hasOwnProperty(U)&&(i=n[U],i!==void 0&&vo(e,t,U,i,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(i=n[m],i!=null&&we(e,t,m,i,n,null))}function fg(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,o=null,m=null,h=null,O=null,U=null;for(w in n){var P=n[w];if(n.hasOwnProperty(w)&&P!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":h=P;default:i.hasOwnProperty(w)||we(e,t,w,null,i,P)}}for(var D in i){var w=i[D];if(P=n[D],i.hasOwnProperty(D)&&(w!=null||P!=null))switch(D){case"type":s=w;break;case"name":r=w;break;case"checked":O=w;break;case"defaultChecked":U=w;break;case"value":o=w;break;case"defaultValue":m=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(137,t));break;default:w!==P&&we(e,t,D,w,i,P)}}Ds(e,o,m,h,O,U,s,r);return;case"select":w=o=m=D=null;for(s in n)if(h=n[s],n.hasOwnProperty(s)&&h!=null)switch(s){case"value":break;case"multiple":w=h;default:i.hasOwnProperty(s)||we(e,t,s,null,i,h)}for(r in i)if(s=i[r],h=n[r],i.hasOwnProperty(r)&&(s!=null||h!=null))switch(r){case"value":D=s;break;case"defaultValue":m=s;break;case"multiple":o=s;default:s!==h&&we(e,t,r,s,i,h)}t=m,n=o,i=w,D!=null?dn(e,!!n,D,!1):!!i!=!!n&&(t!=null?dn(e,!!n,t,!0):dn(e,!!n,n?[]:"",!1));return;case"textarea":w=D=null;for(m in n)if(r=n[m],n.hasOwnProperty(m)&&r!=null&&!i.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:we(e,t,m,null,i,r)}for(o in i)if(r=i[o],s=n[o],i.hasOwnProperty(o)&&(r!=null||s!=null))switch(o){case"value":D=r;break;case"defaultValue":w=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:r!==s&&we(e,t,o,r,i,s)}Mc(e,D,w);return;case"option":for(var Z in n)D=n[Z],n.hasOwnProperty(Z)&&D!=null&&!i.hasOwnProperty(Z)&&(Z==="selected"?e.selected=!1:we(e,t,Z,null,i,D));for(h in i)D=i[h],w=n[h],i.hasOwnProperty(h)&&D!==w&&(D!=null||w!=null)&&(h==="selected"?e.selected=D&&typeof D!="function"&&typeof D!="symbol":we(e,t,h,D,i,w));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in n)D=n[re],n.hasOwnProperty(re)&&D!=null&&!i.hasOwnProperty(re)&&we(e,t,re,null,i,D);for(O in i)if(D=i[O],w=n[O],i.hasOwnProperty(O)&&D!==w&&(D!=null||w!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,t));break;default:we(e,t,O,D,i,w)}return;default:if(Ls(t)){for(var Le in n)D=n[Le],n.hasOwnProperty(Le)&&D!==void 0&&!i.hasOwnProperty(Le)&&vo(e,t,Le,void 0,i,D);for(U in i)D=i[U],w=n[U],!i.hasOwnProperty(U)||D===w||D===void 0&&w===void 0||vo(e,t,U,D,i,w);return}}for(var C in n)D=n[C],n.hasOwnProperty(C)&&D!=null&&!i.hasOwnProperty(C)&&we(e,t,C,null,i,D);for(P in i)D=i[P],w=n[P],!i.hasOwnProperty(P)||D===w||D==null&&w==null||we(e,t,P,D,i,w)}function wm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],s=r.transferSize,o=r.initiatorType,m=r.duration;if(s&&m&&wm(o)){for(o=0,m=r.responseEnd,i+=1;i<n.length;i++){var h=n[i],O=h.startTime;if(O>m)break;var U=h.transferSize,P=h.initiatorType;U&&wm(P)&&(h=h.responseEnd,o+=U*(h<m?1:(m-O)/(h-O)))}if(--i,t+=8*(s+o)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jo=null,So=null;function Zr(e){return e.nodeType===9?e:e.ownerDocument}function Lm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function No(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Eo=null;function gg(){var e=window.event;return e&&e.type==="popstate"?e===Eo?!1:(Eo=e,!0):(Eo=null,!1)}var _m=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,Um=typeof Promise=="function"?Promise:void 0,hg=typeof queueMicrotask=="function"?queueMicrotask:typeof Um<"u"?function(e){return Um.resolve(null).then(e).catch(yg)}:_m;function yg(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function Bm(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),Jn(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")wi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,wi(n);for(var s=n.firstChild;s;){var o=s.nextSibling,m=s.nodeName;s[Zn]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=o}}else n==="body"&&wi(e.ownerDocument.body);n=r}while(n);Jn(t)}function km(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Co(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Co(n),Rs(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function vg(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Zn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function jg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_t(e.nextSibling),e===null))return null;return e}function qm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_t(e.nextSibling),e===null))return null;return e}function Ao(e){return e.data==="$?"||e.data==="$~"}function To(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Sg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Mo=null;function Pm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return _t(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Hm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Im(e,t,n){switch(t=Zr(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function wi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Rs(e)}var Ut=new Map,Jm=new Set;function Kr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ma=F.d;F.d={f:Ng,r:Eg,D:Cg,C:Ag,L:Tg,m:Mg,X:Og,S:Rg,M:Dg};function Ng(){var e=ma.f(),t=Ir();return e||t}function Eg(e){var t=on(e);t!==null&&t.tag===5&&t.type==="form"?sd(t):ma.r(e)}var Pn=typeof document>"u"?null:document;function Vm(e,t,n){var i=Pn;if(i&&typeof t=="string"&&t){var r=Mt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Jm.has(r)||(Jm.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),rt(t,"link",e),$e(t),i.head.appendChild(t)))}}function Cg(e){ma.D(e),Vm("dns-prefetch",e,null)}function Ag(e,t){ma.C(e,t),Vm("preconnect",e,t)}function Tg(e,t,n){ma.L(e,t,n);var i=Pn;if(i&&e&&t){var r='link[rel="preload"][as="'+Mt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Mt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Mt(n.imageSizes)+'"]')):r+='[href="'+Mt(e)+'"]';var s=r;switch(t){case"style":s=Hn(e);break;case"script":s=In(e)}Ut.has(s)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ut.set(s,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(Li(s))||t==="script"&&i.querySelector(zi(s))||(t=i.createElement("link"),rt(t,"link",e),$e(t),i.head.appendChild(t)))}}function Mg(e,t){ma.m(e,t);var n=Pn;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Mt(i)+'"][href="'+Mt(e)+'"]',s=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=In(e)}if(!Ut.has(s)&&(e=y({rel:"modulepreload",href:e},t),Ut.set(s,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(zi(s)))return}i=n.createElement("link"),rt(i,"link",e),$e(i),n.head.appendChild(i)}}}function Rg(e,t,n){ma.S(e,t,n);var i=Pn;if(i&&e){var r=cn(i).hoistableStyles,s=Hn(e);t=t||"default";var o=r.get(s);if(!o){var m={loading:0,preload:null};if(o=i.querySelector(Li(s)))m.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ut.get(s))&&Ro(e,n);var h=o=i.createElement("link");$e(h),rt(h,"link",e),h._p=new Promise(function(O,U){h.onload=O,h.onerror=U}),h.addEventListener("load",function(){m.loading|=1}),h.addEventListener("error",function(){m.loading|=2}),m.loading|=4,$r(o,t,i)}o={type:"stylesheet",instance:o,count:1,state:m},r.set(s,o)}}}function Og(e,t){ma.X(e,t);var n=Pn;if(n&&e){var i=cn(n).hoistableScripts,r=In(e),s=i.get(r);s||(s=n.querySelector(zi(r)),s||(e=y({src:e,async:!0},t),(t=Ut.get(r))&&Oo(e,t),s=n.createElement("script"),$e(s),rt(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function Dg(e,t){ma.M(e,t);var n=Pn;if(n&&e){var i=cn(n).hoistableScripts,r=In(e),s=i.get(r);s||(s=n.querySelector(zi(r)),s||(e=y({src:e,async:!0,type:"module"},t),(t=Ut.get(r))&&Oo(e,t),s=n.createElement("script"),$e(s),rt(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function Fm(e,t,n,i){var r=(r=de.current)?Kr(r):null;if(!r)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Hn(n.href),n=cn(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Hn(n.href);var s=cn(r).hoistableStyles,o=s.get(e);if(o||(r=r.ownerDocument||r,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,o),(s=r.querySelector(Li(e)))&&!s._p&&(o.instance=s,o.state.loading=5),Ut.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ut.set(e,n),s||wg(r,e,n,o.state))),t&&i===null)throw Error(u(528,""));return o}if(t&&i!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=In(n),n=cn(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Hn(e){return'href="'+Mt(e)+'"'}function Li(e){return'link[rel="stylesheet"]['+e+"]"}function Gm(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function wg(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),rt(t,"link",n),$e(t),e.head.appendChild(t))}function In(e){return'[src="'+Mt(e)+'"]'}function zi(e){return"script[async]"+e}function Ym(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Mt(n.href)+'"]');if(i)return t.instance=i,$e(i),i;var r=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),$e(i),rt(i,"style",r),$r(i,n.precedence,e),t.instance=i;case"stylesheet":r=Hn(n.href);var s=e.querySelector(Li(r));if(s)return t.state.loading|=4,t.instance=s,$e(s),s;i=Gm(n),(r=Ut.get(r))&&Ro(i,r),s=(e.ownerDocument||e).createElement("link"),$e(s);var o=s;return o._p=new Promise(function(m,h){o.onload=m,o.onerror=h}),rt(s,"link",i),t.state.loading|=4,$r(s,n.precedence,e),t.instance=s;case"script":return s=In(n.src),(r=e.querySelector(zi(s)))?(t.instance=r,$e(r),r):(i=n,(r=Ut.get(s))&&(i=y({},n),Oo(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),$e(r),rt(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,$r(i,n.precedence,e));return t.instance}function $r(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,s=r,o=0;o<i.length;o++){var m=i[o];if(m.dataset.precedence===t)s=m;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ro(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Oo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wr=null;function Qm(e,t,n){if(Wr===null){var i=new Map,r=Wr=new Map;r.set(n,i)}else r=Wr,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[Zn]||s[tt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var o=s.getAttribute(t)||"";o=e+o;var m=i.get(o);m?m.push(s):i.set(o,[s])}}return i}function Xm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Lg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Zm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function zg(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Hn(i.href),s=t.querySelector(Li(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=es.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,$e(s);return}s=t.ownerDocument||t,i=Gm(i),(r=Ut.get(r))&&Ro(i,r),s=s.createElement("link"),$e(s);var o=s;o._p=new Promise(function(m,h){o.onload=m,o.onerror=h}),rt(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=es.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Do=0;function _g(e,t){return e.stylesheets&&e.count===0&&as(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&as(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Do===0&&(Do=62500*xg());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&as(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Do?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function es(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)as(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ts=null;function as(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ts=new Map,t.forEach(Ug,e),ts=null,es.call(e))}function Ug(e,t){if(!(t.state.loading&4)){var n=ts.get(e);if(n)var i=n.get(null);else{n=new Map,ts.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var o=r[s];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),i=o)}i&&n.set(null,i)}r=t.instance,o=r.getAttribute("data-precedence"),s=n.get(o)||i,s===i&&n.set(null,r),n.set(o,r),this.count++,i=es.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var _i={$$typeof:I,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function Bg(e,t,n,i,r,s,o,m,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Cs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cs(0),this.hiddenUpdates=Cs(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Km(e,t,n,i,r,s,o,m,h,O,U,P){return e=new Bg(e,t,n,o,h,O,U,P,m),t=1,s===!0&&(t|=24),s=vt(3,null,null,t),e.current=s,s.stateNode=e,t=cl(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},pl(s),e}function $m(e){return e?(e=yn,e):yn}function Wm(e,t,n,i,r,s){r=$m(r),i.context===null?i.context=r:i.pendingContext=r,i=Na(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Ea(e,i,t),n!==null&&(ft(n,e,t),pi(n,e,t))}function ep(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wo(e,t){ep(e,t),(e=e.alternate)&&ep(e,t)}function tp(e){if(e.tag===13||e.tag===31){var t=Ga(e,67108864);t!==null&&ft(t,e,67108864),wo(e,67108864)}}function ap(e){if(e.tag===13||e.tag===31){var t=Ct();t=As(t);var n=Ga(e,t);n!==null&&ft(n,e,t),wo(e,t)}}var ns=!0;function kg(e,t,n,i){var r=z.T;z.T=null;var s=F.p;try{F.p=2,Lo(e,t,n,i)}finally{F.p=s,z.T=r}}function qg(e,t,n,i){var r=z.T;z.T=null;var s=F.p;try{F.p=8,Lo(e,t,n,i)}finally{F.p=s,z.T=r}}function Lo(e,t,n,i){if(ns){var r=zo(i);if(r===null)yo(e,t,i,is,n),ip(e,i);else if(Hg(r,e,t,n,i))i.stopPropagation();else if(ip(e,i),t&4&&-1<Pg.indexOf(e)){for(;r!==null;){var s=on(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var o=Ha(s.pendingLanes);if(o!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;o;){var h=1<<31-ht(o);m.entanglements[1]|=h,o&=~h}Vt(s),(Ae&6)===0&&(Pr=gt()+500,Ri(0))}}break;case 31:case 13:m=Ga(s,2),m!==null&&ft(m,s,2),Ir(),wo(s,2)}if(s=zo(i),s===null&&yo(e,t,i,is,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else yo(e,t,i,null,n)}}function zo(e){return e=_s(e),_o(e)}var is=null;function _o(e){if(is=null,e=ln(e),e!==null){var t=x(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===31){if(e=A(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return is=e,null}function np(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cf()){case dc:return 2;case mc:return 8;case Yi:case Af:return 32;case pc:return 268435456;default:return 32}default:return 32}}var Uo=!1,_a=null,Ua=null,Ba=null,Ui=new Map,Bi=new Map,ka=[],Pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ip(e,t){switch(e){case"focusin":case"focusout":_a=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bi.delete(t.pointerId)}}function ki(e,t,n,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},t!==null&&(t=on(t),t!==null&&tp(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Hg(e,t,n,i,r){switch(t){case"focusin":return _a=ki(_a,e,t,n,i,r),!0;case"dragenter":return Ua=ki(Ua,e,t,n,i,r),!0;case"mouseover":return Ba=ki(Ba,e,t,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ui.set(s,ki(Ui.get(s)||null,e,t,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Bi.set(s,ki(Bi.get(s)||null,e,t,n,i,r)),!0}return!1}function rp(e){var t=ln(e.target);if(t!==null){var n=x(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,yc(e.priority,function(){ap(n)});return}}else if(t===31){if(t=A(n),t!==null){e.blockedOn=t,yc(e.priority,function(){ap(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zo(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);zs=i,n.target.dispatchEvent(i),zs=null}else return t=on(n),t!==null&&tp(t),e.blockedOn=n,!1;t.shift()}return!0}function sp(e,t,n){rs(e)&&n.delete(t)}function Ig(){Uo=!1,_a!==null&&rs(_a)&&(_a=null),Ua!==null&&rs(Ua)&&(Ua=null),Ba!==null&&rs(Ba)&&(Ba=null),Ui.forEach(sp),Bi.forEach(sp)}function ss(e,t){e.blockedOn===t&&(e.blockedOn=null,Uo||(Uo=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Ig)))}var ls=null;function lp(e){ls!==e&&(ls=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){ls===e&&(ls=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(_o(i||n)===null)continue;break}var s=on(n);s!==null&&(e.splice(t,3),t-=3,Ll(s,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function Jn(e){function t(h){return ss(h,e)}_a!==null&&ss(_a,e),Ua!==null&&ss(Ua,e),Ba!==null&&ss(Ba,e),Ui.forEach(t),Bi.forEach(t);for(var n=0;n<ka.length;n++){var i=ka[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ka.length&&(n=ka[0],n.blockedOn===null);)rp(n),n.blockedOn===null&&ka.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],s=n[i+1],o=r[ot]||null;if(typeof s=="function")o||lp(n);else if(o){var m=null;if(s&&s.hasAttribute("formAction")){if(r=s,o=s[ot]||null)m=o.formAction;else if(_o(r)!==null)continue}else m=o.action;typeof m=="function"?n[i+1]=m:(n.splice(i,3),i-=3),lp(n)}}}function op(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(o){return r=o})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Bo(e){this._internalRoot=e}os.prototype.render=Bo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,i=Ct();Wm(n,i,e,t,null,null)},os.prototype.unmount=Bo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wm(e.current,2,null,e,null,null),Ir(),t[sn]=null}};function os(e){this._internalRoot=e}os.prototype.unstable_scheduleHydration=function(e){if(e){var t=hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ka.length&&t!==0&&t<ka[n].priority;n++);ka.splice(n,0,e),n===0&&rp(e)}};var cp=c.version;if(cp!=="19.2.4")throw Error(u(527,cp,"19.2.4"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=f(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var Jg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{Yn=cs.inject(Jg),bt=cs}catch{}}return Pi.createRoot=function(e,t){if(!p(e))throw Error(u(299));var n=!1,i="",r=gd,s=bd,o=hd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Km(e,1,!1,null,null,n,i,null,r,s,o,op),e[sn]=t.current,ho(e),new Bo(t)},Pi.hydrateRoot=function(e,t,n){if(!p(e))throw Error(u(299));var i=!1,r="",s=gd,o=bd,m=hd,h=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.formState!==void 0&&(h=n.formState)),t=Km(e,1,!0,t,n??null,i,r,h,s,o,m,op),t.context=$m(null),n=t.current,i=Ct(),i=As(i),r=Na(i),r.callback=null,Ea(n,r,i),n=i,t.current.lanes=n,Xn(t,n),Vt(t),e[sn]=t.current,ho(e),new os(t)},Pi.version="19.2.4",Pi}var yp;function Wg(){if(yp)return Po.exports;yp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),Po.exports=$g(),Po.exports}var eb=Wg();var vp="popstate";function jp(l){return typeof l=="object"&&l!=null&&"pathname"in l&&"search"in l&&"hash"in l&&"state"in l&&"key"in l}function tb(l={}){function c(u,p){let x=p.state?.masked,{pathname:g,search:A,hash:b}=x||u.location;return Qo("",{pathname:g,search:A,hash:b},p.state&&p.state.usr||null,p.state&&p.state.key||"default",x?{pathname:u.location.pathname,search:u.location.search,hash:u.location.hash}:void 0)}function d(u,p){return typeof p=="string"?p:Ii(p)}return nb(c,d,null,l)}function Pe(l,c){if(l===!1||l===null||typeof l>"u")throw new Error(c)}function Yt(l,c){if(!l){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function ab(){return Math.random().toString(36).substring(2,10)}function Sp(l,c){return{usr:l.state,key:l.key,idx:c,masked:l.unstable_mask?{pathname:l.pathname,search:l.search,hash:l.hash}:void 0}}function Qo(l,c,d=null,u,p){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof c=="string"?Vn(c):c,state:d,key:c&&c.key||u||ab(),unstable_mask:p}}function Ii({pathname:l="/",search:c="",hash:d=""}){return c&&c!=="?"&&(l+=c.charAt(0)==="?"?c:"?"+c),d&&d!=="#"&&(l+=d.charAt(0)==="#"?d:"#"+d),l}function Vn(l){let c={};if(l){let d=l.indexOf("#");d>=0&&(c.hash=l.substring(d),l=l.substring(0,d));let u=l.indexOf("?");u>=0&&(c.search=l.substring(u),l=l.substring(0,u)),l&&(c.pathname=l)}return c}function nb(l,c,d,u={}){let{window:p=document.defaultView,v5Compat:x=!1}=u,g=p.history,A="POP",b=null,f=T();f==null&&(f=0,g.replaceState({...g.state,idx:f},""));function T(){return(g.state||{idx:null}).idx}function y(){A="POP";let E=T(),B=E==null?null:E-f;f=E,b&&b({action:A,location:S.location,delta:B})}function J(E,B){A="PUSH";let _=jp(E)?E:Qo(S.location,E,B);f=T()+1;let I=Sp(_,f),$=S.createHref(_.unstable_mask||_);try{g.pushState(I,"",$)}catch(te){if(te instanceof DOMException&&te.name==="DataCloneError")throw te;p.location.assign($)}x&&b&&b({action:A,location:S.location,delta:1})}function V(E,B){A="REPLACE";let _=jp(E)?E:Qo(S.location,E,B);f=T();let I=Sp(_,f),$=S.createHref(_.unstable_mask||_);g.replaceState(I,"",$),x&&b&&b({action:A,location:S.location,delta:0})}function M(E){return ib(E)}let S={get action(){return A},get location(){return l(p,g)},listen(E){if(b)throw new Error("A history only accepts one active listener");return p.addEventListener(vp,y),b=E,()=>{p.removeEventListener(vp,y),b=null}},createHref(E){return c(p,E)},createURL:M,encodeLocation(E){let B=M(E);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:J,replace:V,go(E){return g.go(E)}};return S}function ib(l,c=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Pe(d,"No window.location.(origin|href) available to create URL");let u=typeof l=="string"?l:Ii(l);return u=u.replace(/ $/,"%20"),!c&&u.startsWith("//")&&(u=d+u),new URL(u,d)}function Hp(l,c,d="/"){return rb(l,c,d,!1)}function rb(l,c,d,u){let p=typeof c=="string"?Vn(c):c,x=pa(p.pathname||"/",d);if(x==null)return null;let g=Ip(l);sb(g);let A=null;for(let b=0;A==null&&b<g.length;++b){let f=bb(x);A=xb(g[b],f,u)}return A}function Ip(l,c=[],d=[],u="",p=!1){let x=(g,A,b=p,f)=>{let T={relativePath:f===void 0?g.path||"":f,caseSensitive:g.caseSensitive===!0,childrenIndex:A,route:g};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(u)&&b)return;Pe(T.relativePath.startsWith(u),`Absolute route path "${T.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(u.length)}let y=Ft([u,T.relativePath]),J=d.concat(T);g.children&&g.children.length>0&&(Pe(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Ip(g.children,c,J,y,b)),!(g.path==null&&!g.index)&&c.push({path:y,score:pb(y,g.index),routesMeta:J})};return l.forEach((g,A)=>{if(g.path===""||!g.path?.includes("?"))x(g,A);else for(let b of Jp(g.path))x(g,A,!0,b)}),c}function Jp(l){let c=l.split("/");if(c.length===0)return[];let[d,...u]=c,p=d.endsWith("?"),x=d.replace(/\?$/,"");if(u.length===0)return p?[x,""]:[x];let g=Jp(u.join("/")),A=[];return A.push(...g.map(b=>b===""?x:[x,b].join("/"))),p&&A.push(...g),A.map(b=>l.startsWith("/")&&b===""?"/":b)}function sb(l){l.sort((c,d)=>c.score!==d.score?d.score-c.score:fb(c.routesMeta.map(u=>u.childrenIndex),d.routesMeta.map(u=>u.childrenIndex)))}var lb=/^:[\w-]+$/,ob=3,cb=2,ub=1,db=10,mb=-2,Np=l=>l==="*";function pb(l,c){let d=l.split("/"),u=d.length;return d.some(Np)&&(u+=mb),c&&(u+=cb),d.filter(p=>!Np(p)).reduce((p,x)=>p+(lb.test(x)?ob:x===""?ub:db),u)}function fb(l,c){return l.length===c.length&&l.slice(0,-1).every((u,p)=>u===c[p])?l[l.length-1]-c[c.length-1]:0}function xb(l,c,d=!1){let{routesMeta:u}=l,p={},x="/",g=[];for(let A=0;A<u.length;++A){let b=u[A],f=A===u.length-1,T=x==="/"?c:c.slice(x.length)||"/",y=ps({path:b.relativePath,caseSensitive:b.caseSensitive,end:f},T),J=b.route;if(!y&&f&&d&&!u[u.length-1].route.index&&(y=ps({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},T)),!y)return null;Object.assign(p,y.params),g.push({params:p,pathname:Ft([x,y.pathname]),pathnameBase:jb(Ft([x,y.pathnameBase])),route:J}),y.pathnameBase!=="/"&&(x=Ft([x,y.pathnameBase]))}return g}function ps(l,c){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[d,u]=gb(l.path,l.caseSensitive,l.end),p=c.match(d);if(!p)return null;let x=p[0],g=x.replace(/(.)\/+$/,"$1"),A=p.slice(1);return{params:u.reduce((f,{paramName:T,isOptional:y},J)=>{if(T==="*"){let M=A[J]||"";g=x.slice(0,x.length-M.length).replace(/(.)\/+$/,"$1")}const V=A[J];return y&&!V?f[T]=void 0:f[T]=(V||"").replace(/%2F/g,"/"),f},{}),pathname:x,pathnameBase:g,pattern:l}}function gb(l,c=!1,d=!0){Yt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let u=[],p="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,A,b,f,T)=>{if(u.push({paramName:A,isOptional:b!=null}),b){let y=T.charAt(f+g.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(u.push({paramName:"*"}),p+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?p+="\\/*$":l!==""&&l!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,c?void 0:"i"),u]}function bb(l){try{return l.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Yt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),l}}function pa(l,c){if(c==="/")return l;if(!l.toLowerCase().startsWith(c.toLowerCase()))return null;let d=c.endsWith("/")?c.length-1:c.length,u=l.charAt(d);return u&&u!=="/"?null:l.slice(d)||"/"}var hb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function yb(l,c="/"){let{pathname:d,search:u="",hash:p=""}=typeof l=="string"?Vn(l):l,x;return d?(d=d.replace(/\/\/+/g,"/"),d.startsWith("/")?x=Ep(d.substring(1),"/"):x=Ep(d,c)):x=c,{pathname:x,search:Sb(u),hash:Nb(p)}}function Ep(l,c){let d=c.replace(/\/+$/,"").split("/");return l.split("/").forEach(p=>{p===".."?d.length>1&&d.pop():p!=="."&&d.push(p)}),d.length>1?d.join("/"):"/"}function Vo(l,c,d,u){return`Cannot include a '${l}' character in a manually specified \`to.${c}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function vb(l){return l.filter((c,d)=>d===0||c.route.path&&c.route.path.length>0)}function Vp(l){let c=vb(l);return c.map((d,u)=>u===c.length-1?d.pathname:d.pathnameBase)}function Wo(l,c,d,u=!1){let p;typeof l=="string"?p=Vn(l):(p={...l},Pe(!p.pathname||!p.pathname.includes("?"),Vo("?","pathname","search",p)),Pe(!p.pathname||!p.pathname.includes("#"),Vo("#","pathname","hash",p)),Pe(!p.search||!p.search.includes("#"),Vo("#","search","hash",p)));let x=l===""||p.pathname==="",g=x?"/":p.pathname,A;if(g==null)A=d;else{let y=c.length-1;if(!u&&g.startsWith("..")){let J=g.split("/");for(;J[0]==="..";)J.shift(),y-=1;p.pathname=J.join("/")}A=y>=0?c[y]:"/"}let b=yb(p,A),f=g&&g!=="/"&&g.endsWith("/"),T=(x||g===".")&&d.endsWith("/");return!b.pathname.endsWith("/")&&(f||T)&&(b.pathname+="/"),b}var Ft=l=>l.join("/").replace(/\/\/+/g,"/"),jb=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Sb=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Nb=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,Eb=class{constructor(l,c,d,u=!1){this.status=l,this.statusText=c||"",this.internal=u,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function Cb(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function Ab(l){return l.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Fp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Gp(l,c){let d=l;if(typeof d!="string"||!hb.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let u=d,p=!1;if(Fp)try{let x=new URL(window.location.href),g=d.startsWith("//")?new URL(x.protocol+d):new URL(d),A=pa(g.pathname,c);g.origin===x.origin&&A!=null?d=A+g.search+g.hash:p=!0}catch{Yt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:p,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Yp=["POST","PUT","PATCH","DELETE"];new Set(Yp);var Tb=["GET",...Yp];new Set(Tb);var Fn=L.createContext(null);Fn.displayName="DataRouter";var xs=L.createContext(null);xs.displayName="DataRouterState";var Mb=L.createContext(!1),Qp=L.createContext({isTransitioning:!1});Qp.displayName="ViewTransition";var Rb=L.createContext(new Map);Rb.displayName="Fetchers";var Ob=L.createContext(null);Ob.displayName="Await";var Bt=L.createContext(null);Bt.displayName="Navigation";var Ji=L.createContext(null);Ji.displayName="Location";var Qt=L.createContext({outlet:null,matches:[],isDataRoute:!1});Qt.displayName="Route";var ec=L.createContext(null);ec.displayName="RouteError";var Xp="REACT_ROUTER_ERROR",Db="REDIRECT",wb="ROUTE_ERROR_RESPONSE";function Lb(l){if(l.startsWith(`${Xp}:${Db}:{`))try{let c=JSON.parse(l.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function zb(l){if(l.startsWith(`${Xp}:${wb}:{`))try{let c=JSON.parse(l.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new Eb(c.status,c.statusText,c.data)}catch{}}function _b(l,{relative:c}={}){Pe(Vi(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:u}=L.useContext(Bt),{hash:p,pathname:x,search:g}=Fi(l,{relative:c}),A=x;return d!=="/"&&(A=x==="/"?d:Ft([d,x])),u.createHref({pathname:A,search:g,hash:p})}function Vi(){return L.useContext(Ji)!=null}function fa(){return Pe(Vi(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(Ji).location}var Zp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Kp(l){L.useContext(Bt).static||L.useLayoutEffect(l)}function Ub(){let{isDataRoute:l}=L.useContext(Qt);return l?Kb():Bb()}function Bb(){Pe(Vi(),"useNavigate() may be used only in the context of a <Router> component.");let l=L.useContext(Fn),{basename:c,navigator:d}=L.useContext(Bt),{matches:u}=L.useContext(Qt),{pathname:p}=fa(),x=JSON.stringify(Vp(u)),g=L.useRef(!1);return Kp(()=>{g.current=!0}),L.useCallback((b,f={})=>{if(Yt(g.current,Zp),!g.current)return;if(typeof b=="number"){d.go(b);return}let T=Wo(b,JSON.parse(x),p,f.relative==="path");l==null&&c!=="/"&&(T.pathname=T.pathname==="/"?c:Ft([c,T.pathname])),(f.replace?d.replace:d.push)(T,f.state,f)},[c,d,x,p,l])}var kb=L.createContext(null);function qb(l){let c=L.useContext(Qt).outlet;return L.useMemo(()=>c&&L.createElement(kb.Provider,{value:l},c),[c,l])}function Fi(l,{relative:c}={}){let{matches:d}=L.useContext(Qt),{pathname:u}=fa(),p=JSON.stringify(Vp(d));return L.useMemo(()=>Wo(l,JSON.parse(p),u,c==="path"),[l,p,u,c])}function Pb(l,c){return $p(l,c)}function $p(l,c,d){Pe(Vi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=L.useContext(Bt),{matches:p}=L.useContext(Qt),x=p[p.length-1],g=x?x.params:{},A=x?x.pathname:"/",b=x?x.pathnameBase:"/",f=x&&x.route;{let E=f&&f.path||"";ef(A,!f||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${A}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let T=fa(),y;if(c){let E=typeof c=="string"?Vn(c):c;Pe(b==="/"||E.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${E.pathname}" was given in the \`location\` prop.`),y=E}else y=T;let J=y.pathname||"/",V=J;if(b!=="/"){let E=b.replace(/^\//,"").split("/");V="/"+J.replace(/^\//,"").split("/").slice(E.length).join("/")}let M=Hp(l,{pathname:V});Yt(f||M!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Yt(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=Fb(M&&M.map(E=>Object.assign({},E,{params:Object.assign({},g,E.params),pathname:Ft([b,u.encodeLocation?u.encodeLocation(E.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?b:Ft([b,u.encodeLocation?u.encodeLocation(E.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathnameBase])})),p,d);return c&&S?L.createElement(Ji.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...y},navigationType:"POP"}},S):S}function Hb(){let l=Zb(),c=Cb(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),d=l instanceof Error?l.stack:null,u="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:u},x={padding:"2px 4px",backgroundColor:u},g=null;return console.error("Error handled by React Router default ErrorBoundary:",l),g=L.createElement(L.Fragment,null,L.createElement("p",null,"💿 Hey developer 👋"),L.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",L.createElement("code",{style:x},"ErrorBoundary")," or"," ",L.createElement("code",{style:x},"errorElement")," prop on your route.")),L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},c),d?L.createElement("pre",{style:p},d):null,g)}var Ib=L.createElement(Hb,null),Wp=class extends L.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,c){return c.location!==l.location||c.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:c.error,location:c.location,revalidation:l.revalidation||c.revalidation}}componentDidCatch(l,c){this.props.onError?this.props.onError(l,c):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const d=zb(l.digest);d&&(l=d)}let c=l!==void 0?L.createElement(Qt.Provider,{value:this.props.routeContext},L.createElement(ec.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?L.createElement(Jb,{error:l},c):c}};Wp.contextType=Mb;var Fo=new WeakMap;function Jb({children:l,error:c}){let{basename:d}=L.useContext(Bt);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let u=Lb(c.digest);if(u){let p=Fo.get(c);if(p)throw p;let x=Gp(u.location,d);if(Fp&&!Fo.get(c))if(x.isExternal||u.reloadDocument)window.location.href=x.absoluteURL||x.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(x.to,{replace:u.replace}));throw Fo.set(c,g),g}return L.createElement("meta",{httpEquiv:"refresh",content:`0;url=${x.absoluteURL||x.to}`})}}return l}function Vb({routeContext:l,match:c,children:d}){let u=L.useContext(Fn);return u&&u.static&&u.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=c.route.id),L.createElement(Qt.Provider,{value:l},d)}function Fb(l,c=[],d){let u=d?.state;if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(c.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let p=l,x=u?.errors;if(x!=null){let T=p.findIndex(y=>y.route.id&&x?.[y.route.id]!==void 0);Pe(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(x).join(",")}`),p=p.slice(0,Math.min(p.length,T+1))}let g=!1,A=-1;if(d&&u){g=u.renderFallback;for(let T=0;T<p.length;T++){let y=p[T];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(A=T),y.route.id){let{loaderData:J,errors:V}=u,M=y.route.loader&&!J.hasOwnProperty(y.route.id)&&(!V||V[y.route.id]===void 0);if(y.route.lazy||M){d.isStatic&&(g=!0),A>=0?p=p.slice(0,A+1):p=[p[0]];break}}}}let b=d?.onError,f=u&&b?(T,y)=>{b(T,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:Ab(u.matches),errorInfo:y})}:void 0;return p.reduceRight((T,y,J)=>{let V,M=!1,S=null,E=null;u&&(V=x&&y.route.id?x[y.route.id]:void 0,S=y.route.errorElement||Ib,g&&(A<0&&J===0?(ef("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,E=null):A===J&&(M=!0,E=y.route.hydrateFallbackElement||null)));let B=c.concat(p.slice(0,J+1)),_=()=>{let I;return V?I=S:M?I=E:y.route.Component?I=L.createElement(y.route.Component,null):y.route.element?I=y.route.element:I=T,L.createElement(Vb,{match:y,routeContext:{outlet:T,matches:B,isDataRoute:u!=null},children:I})};return u&&(y.route.ErrorBoundary||y.route.errorElement||J===0)?L.createElement(Wp,{location:u.location,revalidation:u.revalidation,component:S,error:V,children:_(),routeContext:{outlet:null,matches:B,isDataRoute:!0},onError:f}):_()},null)}function tc(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gb(l){let c=L.useContext(Fn);return Pe(c,tc(l)),c}function Yb(l){let c=L.useContext(xs);return Pe(c,tc(l)),c}function Qb(l){let c=L.useContext(Qt);return Pe(c,tc(l)),c}function ac(l){let c=Qb(l),d=c.matches[c.matches.length-1];return Pe(d.route.id,`${l} can only be used on routes that contain a unique "id"`),d.route.id}function Xb(){return ac("useRouteId")}function Zb(){let l=L.useContext(ec),c=Yb("useRouteError"),d=ac("useRouteError");return l!==void 0?l:c.errors?.[d]}function Kb(){let{router:l}=Gb("useNavigate"),c=ac("useNavigate"),d=L.useRef(!1);return Kp(()=>{d.current=!0}),L.useCallback(async(p,x={})=>{Yt(d.current,Zp),d.current&&(typeof p=="number"?await l.navigate(p):await l.navigate(p,{fromRouteId:c,...x}))},[l,c])}var Cp={};function ef(l,c,d){!c&&!Cp[l]&&(Cp[l]=!0,Yt(!1,d))}L.memo($b);function $b({routes:l,future:c,state:d,isStatic:u,onError:p}){return $p(l,void 0,{state:d,isStatic:u,onError:p})}function Wb(l){return qb(l.context)}function se(l){Pe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function eh({basename:l="/",children:c=null,location:d,navigationType:u="POP",navigator:p,static:x=!1,unstable_useTransitions:g}){Pe(!Vi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let A=l.replace(/^\/*/,"/"),b=L.useMemo(()=>({basename:A,navigator:p,static:x,unstable_useTransitions:g,future:{}}),[A,p,x,g]);typeof d=="string"&&(d=Vn(d));let{pathname:f="/",search:T="",hash:y="",state:J=null,key:V="default",unstable_mask:M}=d,S=L.useMemo(()=>{let E=pa(f,A);return E==null?null:{location:{pathname:E,search:T,hash:y,state:J,key:V,unstable_mask:M},navigationType:u}},[A,f,T,y,J,V,u,M]);return Yt(S!=null,`<Router basename="${A}"> is not able to match the URL "${f}${T}${y}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:L.createElement(Bt.Provider,{value:b},L.createElement(Ji.Provider,{children:c,value:S}))}function th({children:l,location:c}){return Pb(Xo(l),c)}function Xo(l,c=[]){let d=[];return L.Children.forEach(l,(u,p)=>{if(!L.isValidElement(u))return;let x=[...c,p];if(u.type===L.Fragment){d.push.apply(d,Xo(u.props.children,x));return}Pe(u.type===se,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Pe(!u.props.index||!u.props.children,"An index route cannot have child routes.");let g={id:u.props.id||x.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(g.children=Xo(u.props.children,x)),d.push(g)}),d}var ds="get",ms="application/x-www-form-urlencoded";function gs(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function ah(l){return gs(l)&&l.tagName.toLowerCase()==="button"}function nh(l){return gs(l)&&l.tagName.toLowerCase()==="form"}function ih(l){return gs(l)&&l.tagName.toLowerCase()==="input"}function rh(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function sh(l,c){return l.button===0&&(!c||c==="_self")&&!rh(l)}var us=null;function lh(){if(us===null)try{new FormData(document.createElement("form"),0),us=!1}catch{us=!0}return us}var oh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Go(l){return l!=null&&!oh.has(l)?(Yt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ms}"`),null):l}function ch(l,c){let d,u,p,x,g;if(nh(l)){let A=l.getAttribute("action");u=A?pa(A,c):null,d=l.getAttribute("method")||ds,p=Go(l.getAttribute("enctype"))||ms,x=new FormData(l)}else if(ah(l)||ih(l)&&(l.type==="submit"||l.type==="image")){let A=l.form;if(A==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=l.getAttribute("formaction")||A.getAttribute("action");if(u=b?pa(b,c):null,d=l.getAttribute("formmethod")||A.getAttribute("method")||ds,p=Go(l.getAttribute("formenctype"))||Go(A.getAttribute("enctype"))||ms,x=new FormData(A,l),!lh()){let{name:f,type:T,value:y}=l;if(T==="image"){let J=f?`${f}.`:"";x.append(`${J}x`,"0"),x.append(`${J}y`,"0")}else f&&x.append(f,y)}}else{if(gs(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=ds,u=null,p=ms,g=l}return x&&p==="text/plain"&&(g=x,x=void 0),{action:u,method:d.toLowerCase(),encType:p,formData:x,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function nc(l,c){if(l===!1||l===null||typeof l>"u")throw new Error(c)}function uh(l,c,d,u){let p=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return d?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${u}`:p.pathname=`${p.pathname}.${u}`:p.pathname==="/"?p.pathname=`_root.${u}`:c&&pa(p.pathname,c)==="/"?p.pathname=`${c.replace(/\/$/,"")}/_root.${u}`:p.pathname=`${p.pathname.replace(/\/$/,"")}.${u}`,p}async function dh(l,c){if(l.id in c)return c[l.id];try{let d=await import(l.module);return c[l.id]=d,d}catch(d){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mh(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function ph(l,c,d){let u=await Promise.all(l.map(async p=>{let x=c.routes[p.route.id];if(x){let g=await dh(x,d);return g.links?g.links():[]}return[]}));return bh(u.flat(1).filter(mh).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function Ap(l,c,d,u,p,x){let g=(b,f)=>d[f]?b.route.id!==d[f].route.id:!0,A=(b,f)=>d[f].pathname!==b.pathname||d[f].route.path?.endsWith("*")&&d[f].params["*"]!==b.params["*"];return x==="assets"?c.filter((b,f)=>g(b,f)||A(b,f)):x==="data"?c.filter((b,f)=>{let T=u.routes[b.route.id];if(!T||!T.hasLoader)return!1;if(g(b,f)||A(b,f))return!0;if(b.route.shouldRevalidate){let y=b.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function fh(l,c,{includeHydrateFallback:d}={}){return xh(l.map(u=>{let p=c.routes[u.route.id];if(!p)return[];let x=[p.module];return p.clientActionModule&&(x=x.concat(p.clientActionModule)),p.clientLoaderModule&&(x=x.concat(p.clientLoaderModule)),d&&p.hydrateFallbackModule&&(x=x.concat(p.hydrateFallbackModule)),p.imports&&(x=x.concat(p.imports)),x}).flat(1))}function xh(l){return[...new Set(l)]}function gh(l){let c={},d=Object.keys(l).sort();for(let u of d)c[u]=l[u];return c}function bh(l,c){let d=new Set;return new Set(c),l.reduce((u,p)=>{let x=JSON.stringify(gh(p));return d.has(x)||(d.add(x),u.push({key:x,link:p})),u},[])}function tf(){let l=L.useContext(Fn);return nc(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function hh(){let l=L.useContext(xs);return nc(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var ic=L.createContext(void 0);ic.displayName="FrameworkContext";function af(){let l=L.useContext(ic);return nc(l,"You must render this element inside a <HydratedRouter> element"),l}function yh(l,c){let d=L.useContext(ic),[u,p]=L.useState(!1),[x,g]=L.useState(!1),{onFocus:A,onBlur:b,onMouseEnter:f,onMouseLeave:T,onTouchStart:y}=c,J=L.useRef(null);L.useEffect(()=>{if(l==="render"&&g(!0),l==="viewport"){let S=B=>{B.forEach(_=>{g(_.isIntersecting)})},E=new IntersectionObserver(S,{threshold:.5});return J.current&&E.observe(J.current),()=>{E.disconnect()}}},[l]),L.useEffect(()=>{if(u){let S=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(S)}}},[u]);let V=()=>{p(!0)},M=()=>{p(!1),g(!1)};return d?l!=="intent"?[x,J,{}]:[x,J,{onFocus:Hi(A,V),onBlur:Hi(b,M),onMouseEnter:Hi(f,V),onMouseLeave:Hi(T,M),onTouchStart:Hi(y,V)}]:[!1,J,{}]}function Hi(l,c){return d=>{l&&l(d),d.defaultPrevented||c(d)}}function vh({page:l,...c}){let{router:d}=tf(),u=L.useMemo(()=>Hp(d.routes,l,d.basename),[d.routes,l,d.basename]);return u?L.createElement(Sh,{page:l,matches:u,...c}):null}function jh(l){let{manifest:c,routeModules:d}=af(),[u,p]=L.useState([]);return L.useEffect(()=>{let x=!1;return ph(l,c,d).then(g=>{x||p(g)}),()=>{x=!0}},[l,c,d]),u}function Sh({page:l,matches:c,...d}){let u=fa(),{future:p,manifest:x,routeModules:g}=af(),{basename:A}=tf(),{loaderData:b,matches:f}=hh(),T=L.useMemo(()=>Ap(l,c,f,x,u,"data"),[l,c,f,x,u]),y=L.useMemo(()=>Ap(l,c,f,x,u,"assets"),[l,c,f,x,u]),J=L.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let S=new Set,E=!1;if(c.forEach(_=>{let I=x.routes[_.route.id];!I||!I.hasLoader||(!T.some($=>$.route.id===_.route.id)&&_.route.id in b&&g[_.route.id]?.shouldRevalidate||I.hasClientLoader?E=!0:S.add(_.route.id))}),S.size===0)return[];let B=uh(l,A,p.unstable_trailingSlashAwareDataRequests,"data");return E&&S.size>0&&B.searchParams.set("_routes",c.filter(_=>S.has(_.route.id)).map(_=>_.route.id).join(",")),[B.pathname+B.search]},[A,p.unstable_trailingSlashAwareDataRequests,b,u,x,T,c,l,g]),V=L.useMemo(()=>fh(y,x),[y,x]),M=jh(y);return L.createElement(L.Fragment,null,J.map(S=>L.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...d})),V.map(S=>L.createElement("link",{key:S,rel:"modulepreload",href:S,...d})),M.map(({key:S,link:E})=>L.createElement("link",{key:S,nonce:d.nonce,...E,crossOrigin:E.crossOrigin??d.crossOrigin})))}function Nh(...l){return c=>{l.forEach(d=>{typeof d=="function"?d(c):d!=null&&(d.current=c)})}}var Eh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Eh&&(window.__reactRouterVersion="7.13.1")}catch{}function Ch({basename:l,children:c,unstable_useTransitions:d,window:u}){let p=L.useRef();p.current==null&&(p.current=tb({window:u,v5Compat:!0}));let x=p.current,[g,A]=L.useState({action:x.action,location:x.location}),b=L.useCallback(f=>{d===!1?A(f):L.startTransition(()=>A(f))},[d]);return L.useLayoutEffect(()=>x.listen(b),[x,b]),L.createElement(eh,{basename:l,children:c,location:g.location,navigationType:g.action,navigator:x,unstable_useTransitions:d})}var nf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rc=L.forwardRef(function({onClick:c,discover:d="render",prefetch:u="none",relative:p,reloadDocument:x,replace:g,unstable_mask:A,state:b,target:f,to:T,preventScrollReset:y,viewTransition:J,unstable_defaultShouldRevalidate:V,...M},S){let{basename:E,navigator:B,unstable_useTransitions:_}=L.useContext(Bt),I=typeof T=="string"&&nf.test(T),$=Gp(T,E);T=$.to;let te=_b(T,{relative:p}),pe=fa(),X=null;if(A){let Ce=Wo(A,[],pe.unstable_mask?pe.unstable_mask.pathname:"/",!0);E!=="/"&&(Ce.pathname=Ce.pathname==="/"?E:Ft([E,Ce.pathname])),X=B.createHref(Ce)}let[fe,Ee,Ze]=yh(u,M),He=Mh(T,{replace:g,unstable_mask:A,state:b,target:f,preventScrollReset:y,relative:p,viewTransition:J,unstable_defaultShouldRevalidate:V,unstable_useTransitions:_});function ze(Ce){c&&c(Ce),Ce.defaultPrevented||He(Ce)}let xt=!($.isExternal||x),Me=L.createElement("a",{...M,...Ze,href:(xt?X:void 0)||$.absoluteURL||te,onClick:xt?ze:c,ref:Nh(S,Ee),target:f,"data-discover":!I&&d==="render"?"true":void 0});return fe&&!I?L.createElement(L.Fragment,null,Me,L.createElement(vh,{page:te})):Me});rc.displayName="Link";var rf=L.forwardRef(function({"aria-current":c="page",caseSensitive:d=!1,className:u="",end:p=!1,style:x,to:g,viewTransition:A,children:b,...f},T){let y=Fi(g,{relative:f.relative}),J=fa(),V=L.useContext(xs),{navigator:M,basename:S}=L.useContext(Bt),E=V!=null&&Lh(y)&&A===!0,B=M.encodeLocation?M.encodeLocation(y).pathname:y.pathname,_=J.pathname,I=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;d||(_=_.toLowerCase(),I=I?I.toLowerCase():null,B=B.toLowerCase()),I&&S&&(I=pa(I,S)||I);const $=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let te=_===B||!p&&_.startsWith(B)&&_.charAt($)==="/",pe=I!=null&&(I===B||!p&&I.startsWith(B)&&I.charAt(B.length)==="/"),X={isActive:te,isPending:pe,isTransitioning:E},fe=te?c:void 0,Ee;typeof u=="function"?Ee=u(X):Ee=[u,te?"active":null,pe?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let Ze=typeof x=="function"?x(X):x;return L.createElement(rc,{...f,"aria-current":fe,className:Ee,ref:T,style:Ze,to:g,viewTransition:A},typeof b=="function"?b(X):b)});rf.displayName="NavLink";var Ah=L.forwardRef(({discover:l="render",fetcherKey:c,navigate:d,reloadDocument:u,replace:p,state:x,method:g=ds,action:A,onSubmit:b,relative:f,preventScrollReset:T,viewTransition:y,unstable_defaultShouldRevalidate:J,...V},M)=>{let{unstable_useTransitions:S}=L.useContext(Bt),E=Dh(),B=wh(A,{relative:f}),_=g.toLowerCase()==="get"?"get":"post",I=typeof A=="string"&&nf.test(A),$=te=>{if(b&&b(te),te.defaultPrevented)return;te.preventDefault();let pe=te.nativeEvent.submitter,X=pe?.getAttribute("formmethod")||g,fe=()=>E(pe||te.currentTarget,{fetcherKey:c,method:X,navigate:d,replace:p,state:x,relative:f,preventScrollReset:T,viewTransition:y,unstable_defaultShouldRevalidate:J});S&&d!==!1?L.startTransition(()=>fe()):fe()};return L.createElement("form",{ref:M,method:_,action:B,onSubmit:u?b:$,...V,"data-discover":!I&&l==="render"?"true":void 0})});Ah.displayName="Form";function Th(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sf(l){let c=L.useContext(Fn);return Pe(c,Th(l)),c}function Mh(l,{target:c,replace:d,unstable_mask:u,state:p,preventScrollReset:x,relative:g,viewTransition:A,unstable_defaultShouldRevalidate:b,unstable_useTransitions:f}={}){let T=Ub(),y=fa(),J=Fi(l,{relative:g});return L.useCallback(V=>{if(sh(V,c)){V.preventDefault();let M=d!==void 0?d:Ii(y)===Ii(J),S=()=>T(l,{replace:M,unstable_mask:u,state:p,preventScrollReset:x,relative:g,viewTransition:A,unstable_defaultShouldRevalidate:b});f?L.startTransition(()=>S()):S()}},[y,T,J,d,u,p,c,l,x,g,A,b,f])}var Rh=0,Oh=()=>`__${String(++Rh)}__`;function Dh(){let{router:l}=sf("useSubmit"),{basename:c}=L.useContext(Bt),d=Xb(),u=l.fetch,p=l.navigate;return L.useCallback(async(x,g={})=>{let{action:A,method:b,encType:f,formData:T,body:y}=ch(x,c);if(g.navigate===!1){let J=g.fetcherKey||Oh();await u(J,d,g.action||A,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:T,body:y,formMethod:g.method||b,formEncType:g.encType||f,flushSync:g.flushSync})}else await p(g.action||A,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:T,body:y,formMethod:g.method||b,formEncType:g.encType||f,replace:g.replace,state:g.state,fromRouteId:d,flushSync:g.flushSync,viewTransition:g.viewTransition})},[u,p,c,d])}function wh(l,{relative:c}={}){let{basename:d}=L.useContext(Bt),u=L.useContext(Qt);Pe(u,"useFormAction must be used inside a RouteContext");let[p]=u.matches.slice(-1),x={...Fi(l||".",{relative:c})},g=fa();if(l==null){x.search=g.search;let A=new URLSearchParams(x.search),b=A.getAll("index");if(b.some(T=>T==="")){A.delete("index"),b.filter(y=>y).forEach(y=>A.append("index",y));let T=A.toString();x.search=T?`?${T}`:""}}return(!l||l===".")&&p.route.index&&(x.search=x.search?x.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(x.pathname=x.pathname==="/"?d:Ft([d,x.pathname])),Ii(x)}function Lh(l,{relative:c}={}){let d=L.useContext(Qp);Pe(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=sf("useViewTransitionState"),p=Fi(l,{relative:c});if(!d.isTransitioning)return!1;let x=pa(d.currentLocation.pathname,u)||d.currentLocation.pathname,g=pa(d.nextLocation.pathname,u)||d.nextLocation.pathname;return ps(p.pathname,g)!=null||ps(p.pathname,x)!=null}function lf(){const{pathname:l}=fa();return L.useEffect(()=>{window.scrollTo(0,0)},[l]),null}const of=(...l)=>l.filter((c,d,u)=>!!c&&c.trim()!==""&&u.indexOf(c)===d).join(" ").trim();const zh=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const _h=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,d,u)=>u?u.toUpperCase():d.toLowerCase());const Tp=l=>{const c=_h(l);return c.charAt(0).toUpperCase()+c.slice(1)};var Uh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Bh=l=>{for(const c in l)if(c.startsWith("aria-")||c==="role"||c==="title")return!0;return!1};const kh=L.forwardRef(({color:l="currentColor",size:c=24,strokeWidth:d=2,absoluteStrokeWidth:u,className:p="",children:x,iconNode:g,...A},b)=>L.createElement("svg",{ref:b,...Uh,width:c,height:c,stroke:l,strokeWidth:u?Number(d)*24/Number(c):d,className:of("lucide",p),...!x&&!Bh(A)&&{"aria-hidden":"true"},...A},[...g.map(([f,T])=>L.createElement(f,T)),...Array.isArray(x)?x:[x]]));const ie=(l,c)=>{const d=L.forwardRef(({className:u,...p},x)=>L.createElement(kh,{ref:x,iconNode:c,className:of(`lucide-${zh(Tp(l))}`,`lucide-${l}`,u),...p}));return d.displayName=Tp(l),d};const qh=[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]],Zo=ie("arrow-right-left",qh);const Ph=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Hh=ie("arrow-right",Ph);const Ih=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],Mp=ie("binary",Ih);const Jh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Vh=ie("book-open",Jh);const Fh=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Gh=ie("box",Fh);const Yh=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],Qh=ie("boxes",Yh);const Xh=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],sc=ie("brain",Xh);const Zh=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Kh=ie("calendar",Zh);const $h=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Wh=ie("check",$h);const ey=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Rp=ie("chevron-down",ey);const ty=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Op=ie("chevron-up",ty);const ay=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Dp=ie("circle-alert",ay);const ny=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],iy=ie("circle-check",ny);const ry=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],cf=ie("clock",ry);const sy=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],lc=ie("code-xml",sy);const ly=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],uf=ie("coffee",ly);const oy=[["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}]],cy=ie("cog",oy);const uy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],dy=ie("copy",uy);const my=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],wp=ie("cpu",my);const py=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],fy=ie("database",py);const xy=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],df=ie("file-code",xy);const gy=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Lp=ie("file-text",gy);const by=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],hy=ie("folder-open",by);const yy=[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]],vy=ie("git-branch",yy);const jy=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],Ko=ie("git-commit-horizontal",jy);const Sy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Ny=ie("globe",Sy);const Ey=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Cy=ie("hash",Ey);const Ay=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Ty=ie("house",Ay);const My=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Ry=ie("info",My);const Oy=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Dy=ie("layers",Oy);const wy=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],mf=ie("leaf",wy);const Ly=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],pf=ie("lightbulb",Ly);const zy=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],_y=ie("list",zy);const Uy=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],By=ie("lock",Uy);const ky=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],qy=ie("menu",ky);const Py=[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],Hy=ie("monitor-check",Py);const Iy=[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m16 17 2 2 4-4",key:"uh5qu3"}],["path",{d:"M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",key:"kpkbpo"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]],Jy=ie("package-check",Iy);const Vy=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],Fy=ie("puzzle",Vy);const Gy=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],Yy=ie("repeat",Gy);const Qy=[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]],Xy=ie("rocket",Qy);const Zy=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Ky=ie("server",Zy);const $y=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],zp=ie("settings",$y);const Wy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Yo=ie("shield",Wy);const ev=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],tv=ie("target",ev);const av=[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",key:"125lnx"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]],nv=ie("test-tube",av);const iv=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],rv=ie("toggle-left",iv);const sv=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],lv=ie("triangle-alert",sv);const ov=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],cv=ie("trophy",ov);const uv=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],dv=ie("type",uv);const mv=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],pv=ie("workflow",mv);const fv=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],xv=ie("wrench",fv);const gv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],bv=ie("x",gv);const hv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ff=ie("zap",hv),yv=[{title:"Inicio",items:[{path:"/",label:"Bienvenida",icon:Ty}]},{title:"Fundamentos de Java",items:[{path:"/introduccion",label:"Introducción a Java",icon:uf},{path:"/sintaxis",label:"Sintaxis Básica",icon:lc},{path:"/tipos-datos",label:"Tipos de Datos",icon:Mp},{path:"/variables",label:"Variables y Constantes",icon:Gh},{path:"/operadores",label:"Operadores",icon:Cy},{path:"/strings",label:"Strings",icon:dv}]},{title:"Control de Flujo",items:[{path:"/condicionales",label:"Condicionales",icon:rv},{path:"/bucles",label:"Bucles",icon:Yy},{path:"/arrays",label:"Arrays",icon:_y}]},{title:"POO - Programación Orientada a Objetos",items:[{path:"/metodos",label:"Métodos",icon:ff},{path:"/clases-objetos",label:"Clases y Objetos",icon:Qh},{path:"/encapsulamiento",label:"Encapsulamiento",icon:Yo},{path:"/herencia",label:"Herencia",icon:vy},{path:"/polimorfismo",label:"Polimorfismo",icon:Zo},{path:"/interfaces",label:"Interfaces",icon:Dy},{path:"/clases-abstractas",label:"Clases Abstractas",icon:Lp}]},{title:"Java Intermedio",items:[{path:"/colecciones",label:"Colecciones",icon:fy},{path:"/excepciones",label:"Excepciones",icon:Dp},{path:"/generics",label:"Generics",icon:Fy},{path:"/enums",label:"Enums",icon:zp},{path:"/comparador",label:"Comparable y Comparator",icon:Zo}]},{title:"Java Avanzado",items:[{path:"/lambdas",label:"Lambdas",icon:pv},{path:"/streams",label:"Streams API",icon:wp},{path:"/optional",label:"Optional",icon:sc},{path:"/concurrencia",label:"Concurrencia y Threads",icon:Xy},{path:"/virtual-threads",label:"Virtual Threads (Java 21)",icon:wp},{path:"/io-archivos",label:"I/O y Archivos",icon:hy},{path:"/fechas-api",label:"API de Fechas",icon:cf}]},{title:"Java Moderno (17+)",items:[{path:"/records",label:"Records",icon:df},{path:"/sealed-classes",label:"Sealed Classes",icon:By},{path:"/pattern-matching",label:"Pattern Matching",icon:Hy},{path:"/patrones-diseno",label:"Patrones de Diseño",icon:xv},{path:"/text-blocks",label:"Text Blocks y var",icon:Lp}]},{title:"Spring Boot",items:[{path:"/spring-intro",label:"Introducción a Spring",icon:mf},{path:"/spring-setup",label:"Setup y Estructura",icon:Jy},{path:"/spring-anotaciones",label:"Anotaciones",icon:Vh},{path:"/spring-controllers",label:"Controllers REST",icon:Ny},{path:"/spring-services",label:"Servicios",icon:cy},{path:"/spring-repositories",label:"Repositories y JPA",icon:Ky},{path:"/spring-security",label:"Spring Security",icon:Yo},{path:"/spring-excepciones",label:"Manejo de Excepciones",icon:Dp},{path:"/spring-validacion",label:"Validación (@Valid)",icon:Yo},{path:"/spring-dtos",label:"DTOs y MapStruct",icon:Mp},{path:"/spring-perfiles",label:"Perfiles y Config",icon:zp},{path:"/spring-testing",label:"Testing",icon:nv}]}];function vv(){const[l,c]=L.useState(!1);return a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>c(!l),className:"fixed top-4 left-4 z-50 lg:hidden bg-surface-light border border-border rounded-lg p-2 text-text hover:bg-surface-lighter transition-colors cursor-pointer",children:l?a.jsx(bv,{size:20}):a.jsx(qy,{size:20})}),l&&a.jsx("div",{className:"fixed inset-0 bg-black/50 z-30 lg:hidden",onClick:()=>c(!1)}),a.jsxs("aside",{className:`fixed top-0 left-0 h-full w-72 bg-surface-light border-r border-border z-40 overflow-y-auto transition-transform duration-300 ${l?"translate-x-0":"-translate-x-full"} lg:translate-x-0 lg:static lg:z-0`,children:[a.jsxs("div",{className:"p-6 border-b border-border",children:[a.jsxs("h1",{className:"text-lg font-bold text-java flex items-center gap-2",children:[a.jsx("span",{className:"text-2xl",children:"☕"})," Java Mastery"]}),a.jsx("p",{className:"text-xs text-text-muted mt-1",children:"Guía Completa 2026"})]}),a.jsx("nav",{className:"p-4",children:yv.map(d=>a.jsxs("div",{className:"mb-4",children:[a.jsx("h3",{className:"text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 px-3",children:d.title}),d.items.map(u=>{const p=u.icon;return a.jsxs(rf,{to:u.path,onClick:()=>c(!1),className:({isActive:x})=>`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 mb-0.5 ${x?"bg-primary/15 text-primary font-medium":"text-text-muted hover:bg-surface-lighter/50 hover:text-text"}`,end:u.path==="/",children:[a.jsx(p,{size:16}),u.label]},u.path)})]},d.title))})]})]})}function jv(){return a.jsxs("div",{className:"flex min-h-screen",children:[a.jsx(lf,{}),a.jsx(vv,{}),a.jsx("main",{className:"flex-1 lg:ml-0 min-h-screen",children:a.jsx("div",{className:"max-w-4xl mx-auto px-6 py-12 lg:px-12",children:a.jsx(Wb,{})})})]})}const _p=[{phase:"Fase 1 — Fundamentos",color:"text-primary",bg:"bg-primary/10",border:"border-primary/25",days:[{day:1,title:"Introducción a Java",link:"/introduccion",desc:"Qué es Java, JDK, JVM, tu primer programa"},{day:2,title:"Sintaxis Básica",link:"/sintaxis",desc:"Estructura de un programa, main, paquetes, convenciones"},{day:3,title:"Tipos de Datos",link:"/tipos-datos",desc:"Primitivos vs objetos, casting, wrappers"},{day:4,title:"Variables y Constantes",link:"/variables",desc:"Declaración, scope, final, valores por defecto"},{day:5,title:"Operadores",link:"/operadores",desc:"Aritméticos, lógicos, comparación, ternario"},{day:6,title:"Strings",link:"/strings",desc:"Inmutabilidad, métodos, StringBuilder, formato"}]},{phase:"Fase 2 — Control de Flujo",color:"text-success",bg:"bg-success/10",border:"border-success/25",days:[{day:7,title:"Condicionales",link:"/condicionales",desc:"if/else, switch, pattern matching"},{day:8,title:"Bucles",link:"/bucles",desc:"for, while, do-while, for-each, break/continue"},{day:9,title:"Arrays",link:"/arrays",desc:"Declaración, iteración, arrays multidimensionales"}]},{phase:"Fase 3 — POO",color:"text-accent",bg:"bg-accent/10",border:"border-accent/25",days:[{day:10,title:"Métodos",link:"/metodos",desc:"Definir, sobrecargar, varargs, paso por valor"},{day:11,title:"Clases y Objetos",link:"/clases-objetos",desc:"Constructores, this, static, equals"},{day:12,title:"Encapsulamiento",link:"/encapsulamiento",desc:"Getters/setters, modificadores de acceso"},{day:13,title:"Herencia",link:"/herencia",desc:"extends, super, sobreescritura de métodos"},{day:14,title:"Polimorfismo",link:"/polimorfismo",desc:"Upcasting, downcasting, instanceof"},{day:15,title:"Interfaces",link:"/interfaces",desc:"Contratos, default methods, implementación múltiple"},{day:16,title:"Clases Abstractas",link:"/clases-abstractas",desc:"Abstract vs interface, cuándo usar cada uno"}]},{phase:"Fase 4 — Intermedio",color:"text-warning",bg:"bg-warning/10",border:"border-warning/25",days:[{day:17,title:"Colecciones",link:"/colecciones",desc:"List, Set, Map, Queue, iteradores"},{day:18,title:"Excepciones",link:"/excepciones",desc:"try/catch, checked vs unchecked, custom exceptions"},{day:19,title:"Generics",link:"/generics",desc:"Tipos parametrizados, wildcards, bounded types"},{day:20,title:"Enums",link:"/enums",desc:"Constantes tipadas, métodos en enums"},{day:21,title:"Comparable y Comparator",link:"/comparador",desc:"Ordenamiento personalizado, cadenas de comparación"}]},{phase:"Fase 5 — Avanzado",color:"text-[#c084fc]",bg:"bg-[#c084fc]/10",border:"border-[#c084fc]/25",days:[{day:22,title:"Lambdas",link:"/lambdas",desc:"Funciones anónimas, interfaces funcionales"},{day:23,title:"Streams API",link:"/streams",desc:"map, filter, reduce, collect, operaciones en cadena"},{day:24,title:"Optional",link:"/optional",desc:"Manejo seguro de null, encadenamiento"},{day:25,title:"Concurrencia",link:"/concurrencia",desc:"Threads, ExecutorService, CompletableFuture"},{day:26,title:"Virtual Threads",link:"/virtual-threads",desc:"Java 21: hilos ligeros de alto rendimiento"},{day:27,title:"I/O y Archivos",link:"/io-archivos",desc:"Files, Path, streams de archivos, serialización"},{day:28,title:"API de Fechas",link:"/fechas-api",desc:"LocalDate, LocalDateTime, Duration, formateo"}]},{phase:"Fase 6 — Java Moderno",color:"text-[#f472b6]",bg:"bg-[#f472b6]/10",border:"border-[#f472b6]/25",days:[{day:29,title:"Records",link:"/records",desc:"DTOs inmutables en una línea"},{day:30,title:"Sealed Classes",link:"/sealed-classes",desc:"Jerarquías controladas de herencia"},{day:31,title:"Pattern Matching",link:"/pattern-matching",desc:"instanceof mejorado, switch expressions"},{day:32,title:"Patrones de Diseño",link:"/patrones-diseno",desc:"Builder, Factory, Strategy, Observer"},{day:33,title:"Text Blocks y var",link:"/text-blocks",desc:"Strings multilínea, inferencia de tipos"}]},{phase:"Fase 7 — Spring Boot",color:"text-spring",bg:"bg-spring/10",border:"border-spring/25",days:[{day:34,title:"Intro a Spring",link:"/spring-intro",desc:"IoC, DI, por qué Spring"},{day:35,title:"Setup y Estructura",link:"/spring-setup",desc:"Spring Initializr, pom.xml, estructura de proyecto"},{day:36,title:"Anotaciones",link:"/spring-anotaciones",desc:"@Component, @Service, @Repository, @Autowired"},{day:37,title:"Controllers REST",link:"/spring-controllers",desc:"@RestController, endpoints, ResponseEntity"},{day:38,title:"Servicios",link:"/spring-services",desc:"Capa de negocio, @Transactional"},{day:39,title:"Repositories y JPA",link:"/spring-repositories",desc:"Spring Data JPA, queries, relaciones"},{day:40,title:"Spring Security",link:"/spring-security",desc:"Autenticación, JWT, autorización"},{day:41,title:"Manejo de Excepciones",link:"/spring-excepciones",desc:"@ControllerAdvice, errores globales"},{day:42,title:"Validación",link:"/spring-validacion",desc:"@Valid, Jakarta Validation, custom validators"},{day:43,title:"DTOs y MapStruct",link:"/spring-dtos",desc:"Mapeo de entidades, separación de capas"},{day:44,title:"Perfiles y Config",link:"/spring-perfiles",desc:"application.yml, @Profile, @Value"},{day:45,title:"Testing",link:"/spring-testing",desc:"JUnit 5, Mockito, @WebMvcTest, MockMvc"}]}];function Sv(){const l=_p.reduce((c,d)=>c+d.days.length,0);return a.jsxs("div",{children:[a.jsxs("div",{className:"mb-10",children:[a.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[a.jsx("span",{className:"text-5xl",children:"☕"}),a.jsxs("div",{children:[a.jsx("h1",{className:"text-4xl font-bold text-java",children:"Java Mastery"}),a.jsxs("p",{className:"text-text-muted text-lg mt-1",children:[l," días de Java — De cero a Spring Boot"]})]})]}),a.jsxs("p",{className:"text-text-muted leading-relaxed mt-4",children:["Este no es un curso que solo te dice ",a.jsx("strong",{className:"text-text",children:"qué"})," aprender. Aquí vas a ",a.jsx("strong",{className:"text-text",children:"pensar como desarrollador Java"}),": cada día tiene ejercicios que escribes tú mismo, explicaciones de ",a.jsx("em",{children:"por qué"})," las cosas funcionan así, y un commit que puedes subir a tu GitHub para documentar tu progreso."]})]}),a.jsxs("div",{className:"grid gap-4 md:grid-cols-4 mb-10",children:[a.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-5 text-center",children:[a.jsx(lc,{size:24,className:"text-primary mx-auto mb-2"}),a.jsx("h3",{className:"font-semibold text-text text-sm",children:"Ejercicios reales"}),a.jsx("p",{className:"text-text-muted text-xs mt-1",children:"Código que escribes, no que lees"})]}),a.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-5 text-center",children:[a.jsx(sc,{size:24,className:"text-accent mx-auto mb-2"}),a.jsx("h3",{className:"font-semibold text-text text-sm",children:"Cómo pensarlo"}),a.jsx("p",{className:"text-text-muted text-xs mt-1",children:"El razonamiento detrás de cada decisión"})]}),a.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-5 text-center",children:[a.jsx(Ko,{size:24,className:"text-success mx-auto mb-2"}),a.jsx("h3",{className:"font-semibold text-text text-sm",children:"Un commit por día"}),a.jsx("p",{className:"text-text-muted text-xs mt-1",children:"Progreso real en tu GitHub"})]}),a.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-5 text-center",children:[a.jsx(cv,{size:24,className:"text-warning mx-auto mb-2"}),a.jsx("h3",{className:"font-semibold text-text text-sm",children:"De cero a Spring"}),a.jsxs("p",{className:"text-text-muted text-xs mt-1",children:[l," días, 7 fases, dominio completo"]})]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsxs("h2",{className:"text-xl font-bold text-text mb-2 flex items-center gap-2",children:[a.jsx(tv,{size:20,className:"text-primary"}),"Tu ruta día a día"]}),a.jsx("p",{className:"text-text-muted text-sm mb-6",children:"Cada día tiene explicación, ejercicios y un commit para tu repo."}),a.jsx("div",{className:"space-y-6",children:_p.map(c=>a.jsxs("div",{className:`rounded-xl border ${c.border} overflow-hidden`,children:[a.jsxs("div",{className:`${c.bg} px-5 py-3 flex items-center gap-2`,children:[a.jsx(uf,{size:16,className:c.color}),a.jsx("span",{className:`font-bold text-sm ${c.color}`,children:c.phase}),a.jsxs("span",{className:"text-text-muted text-xs ml-auto",children:[c.days.length," días"]})]}),a.jsx("div",{className:"divide-y divide-border/30",children:c.days.map(d=>a.jsxs(rc,{to:d.link,className:"flex items-center gap-3 px-5 py-3 hover:bg-surface-lighter/20 transition-colors group",children:[a.jsx("span",{className:"flex-shrink-0 w-8 h-8 rounded-lg bg-surface-lighter/50 text-text-muted font-bold text-xs flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors",children:d.day}),a.jsxs("div",{className:"min-w-0",children:[a.jsx("h4",{className:"font-medium text-sm text-text group-hover:text-primary transition-colors truncate",children:d.title}),a.jsx("p",{className:"text-text-muted text-xs truncate",children:d.desc})]}),a.jsx(ff,{size:14,className:"text-text-muted/30 ml-auto flex-shrink-0 group-hover:text-primary transition-colors"})]},d.day))})]},c.phase))})]}),a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-8",children:[a.jsxs("h3",{className:"text-success font-semibold mb-3 flex items-center gap-2",children:[a.jsx(Ko,{size:18})," Cómo usar esta guía"]}),a.jsxs("div",{className:"space-y-2 text-sm text-text-muted",children:[a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"1."})," Crea un repo en GitHub: ",a.jsx("code",{className:"text-success font-mono text-xs",children:"java-mastery-45-dias"})]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"2."})," Cada día, lee la lección, resuelve los ejercicios y escribe el código tú mismo"]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"3."})," Haz commit con el mensaje sugerido al final de cada lección"]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"4."})," Al terminar tendrás ",l," commits que demuestran tu dominio de Java"]})]})]}),a.jsxs("div",{className:"bg-primary/10 border border-primary/30 rounded-xl p-6",children:[a.jsx("h3",{className:"text-primary font-semibold mb-2",children:"💡 Para desarrolladores Angular/TypeScript"}),a.jsxs("p",{className:"text-text-muted text-sm leading-relaxed",children:["Cada lección incluye comparaciones con ",a.jsx("strong",{className:"text-angular",children:"Angular/TypeScript"})," para que conectes lo que ya sabes con Java. TypeScript y Java comparten tipado estático, clases, interfaces y generics — tu transición será más natural de lo que piensas."]})]})]})}function xf(l){var c,d,u="";if(typeof l=="string"||typeof l=="number")u+=l;else if(typeof l=="object")if(Array.isArray(l)){var p=l.length;for(c=0;c<p;c++)l[c]&&(d=xf(l[c]))&&(u&&(u+=" "),u+=d)}else for(d in l)l[d]&&(u&&(u+=" "),u+=d);return u}function gf(){for(var l,c,d=0,u="",p=arguments.length;d<p;d++)(l=arguments[d])&&(c=xf(l))&&(u&&(u+=" "),u+=c);return u}var Nv=Object.create,bs=Object.defineProperty,Ev=Object.defineProperties,Cv=Object.getOwnPropertyDescriptor,Av=Object.getOwnPropertyDescriptors,bf=Object.getOwnPropertyNames,fs=Object.getOwnPropertySymbols,Tv=Object.getPrototypeOf,oc=Object.prototype.hasOwnProperty,hf=Object.prototype.propertyIsEnumerable,Up=(l,c,d)=>c in l?bs(l,c,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[c]=d,Gt=(l,c)=>{for(var d in c||(c={}))oc.call(c,d)&&Up(l,d,c[d]);if(fs)for(var d of fs(c))hf.call(c,d)&&Up(l,d,c[d]);return l},hs=(l,c)=>Ev(l,Av(c)),yf=(l,c)=>{var d={};for(var u in l)oc.call(l,u)&&c.indexOf(u)<0&&(d[u]=l[u]);if(l!=null&&fs)for(var u of fs(l))c.indexOf(u)<0&&hf.call(l,u)&&(d[u]=l[u]);return d},Mv=(l,c)=>function(){return c||(0,l[bf(l)[0]])((c={exports:{}}).exports,c),c.exports},Rv=(l,c)=>{for(var d in c)bs(l,d,{get:c[d],enumerable:!0})},Ov=(l,c,d,u)=>{if(c&&typeof c=="object"||typeof c=="function")for(let p of bf(c))!oc.call(l,p)&&p!==d&&bs(l,p,{get:()=>c[p],enumerable:!(u=Cv(c,p))||u.enumerable});return l},Dv=(l,c,d)=>(d=l!=null?Nv(Tv(l)):{},Ov(!l||!l.__esModule?bs(d,"default",{value:l,enumerable:!0}):d,l)),wv=Mv({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(l,c){var d=(function(){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,p=0,x={},g={util:{encode:function M(S){return S instanceof A?new A(S.type,M(S.content),S.alias):Array.isArray(S)?S.map(M):S.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(M){return Object.prototype.toString.call(M).slice(8,-1)},objId:function(M){return M.__id||Object.defineProperty(M,"__id",{value:++p}),M.__id},clone:function M(S,E){E=E||{};var B,_;switch(g.util.type(S)){case"Object":if(_=g.util.objId(S),E[_])return E[_];B={},E[_]=B;for(var I in S)S.hasOwnProperty(I)&&(B[I]=M(S[I],E));return B;case"Array":return _=g.util.objId(S),E[_]?E[_]:(B=[],E[_]=B,S.forEach(function($,te){B[te]=M($,E)}),B);default:return S}},getLanguage:function(M){for(;M;){var S=u.exec(M.className);if(S)return S[1].toLowerCase();M=M.parentElement}return"none"},setLanguage:function(M,S){M.className=M.className.replace(RegExp(u,"gi"),""),M.classList.add("language-"+S)},isActive:function(M,S,E){for(var B="no-"+S;M;){var _=M.classList;if(_.contains(S))return!0;if(_.contains(B))return!1;M=M.parentElement}return!!E}},languages:{plain:x,plaintext:x,text:x,txt:x,extend:function(M,S){var E=g.util.clone(g.languages[M]);for(var B in S)E[B]=S[B];return E},insertBefore:function(M,S,E,B){B=B||g.languages;var _=B[M],I={};for(var $ in _)if(_.hasOwnProperty($)){if($==S)for(var te in E)E.hasOwnProperty(te)&&(I[te]=E[te]);E.hasOwnProperty($)||(I[$]=_[$])}var pe=B[M];return B[M]=I,g.languages.DFS(g.languages,function(X,fe){fe===pe&&X!=M&&(this[X]=I)}),I},DFS:function M(S,E,B,_){_=_||{};var I=g.util.objId;for(var $ in S)if(S.hasOwnProperty($)){E.call(S,$,S[$],B||$);var te=S[$],pe=g.util.type(te);pe==="Object"&&!_[I(te)]?(_[I(te)]=!0,M(te,E,null,_)):pe==="Array"&&!_[I(te)]&&(_[I(te)]=!0,M(te,E,$,_))}}},plugins:{},highlight:function(M,S,E){var B={code:M,grammar:S,language:E};if(g.hooks.run("before-tokenize",B),!B.grammar)throw new Error('The language "'+B.language+'" has no grammar.');return B.tokens=g.tokenize(B.code,B.grammar),g.hooks.run("after-tokenize",B),A.stringify(g.util.encode(B.tokens),B.language)},tokenize:function(M,S){var E=S.rest;if(E){for(var B in E)S[B]=E[B];delete S.rest}var _=new T;return y(_,_.head,M),f(M,_,S,_.head,0),V(_)},hooks:{all:{},add:function(M,S){var E=g.hooks.all;E[M]=E[M]||[],E[M].push(S)},run:function(M,S){var E=g.hooks.all[M];if(!(!E||!E.length))for(var B=0,_;_=E[B++];)_(S)}},Token:A};function A(M,S,E,B){this.type=M,this.content=S,this.alias=E,this.length=(B||"").length|0}A.stringify=function M(S,E){if(typeof S=="string")return S;if(Array.isArray(S)){var B="";return S.forEach(function(pe){B+=M(pe,E)}),B}var _={type:S.type,content:M(S.content,E),tag:"span",classes:["token",S.type],attributes:{},language:E},I=S.alias;I&&(Array.isArray(I)?Array.prototype.push.apply(_.classes,I):_.classes.push(I)),g.hooks.run("wrap",_);var $="";for(var te in _.attributes)$+=" "+te+'="'+(_.attributes[te]||"").replace(/"/g,"&quot;")+'"';return"<"+_.tag+' class="'+_.classes.join(" ")+'"'+$+">"+_.content+"</"+_.tag+">"};function b(M,S,E,B){M.lastIndex=S;var _=M.exec(E);if(_&&B&&_[1]){var I=_[1].length;_.index+=I,_[0]=_[0].slice(I)}return _}function f(M,S,E,B,_,I){for(var $ in E)if(!(!E.hasOwnProperty($)||!E[$])){var te=E[$];te=Array.isArray(te)?te:[te];for(var pe=0;pe<te.length;++pe){if(I&&I.cause==$+","+pe)return;var X=te[pe],fe=X.inside,Ee=!!X.lookbehind,Ze=!!X.greedy,He=X.alias;if(Ze&&!X.pattern.global){var ze=X.pattern.toString().match(/[imsuy]*$/)[0];X.pattern=RegExp(X.pattern.source,ze+"g")}for(var xt=X.pattern||X,Me=B.next,Ce=_;Me!==S.tail&&!(I&&Ce>=I.reach);Ce+=Me.value.length,Me=Me.next){var z=Me.value;if(S.length>M.length)return;if(!(z instanceof A)){var F=1,ee;if(Ze){if(ee=b(xt,Ce,M,Ee),!ee||ee.index>=M.length)break;var q=ee.index,Te=ee.index+ee[0].length,be=Ce;for(be+=Me.value.length;q>=be;)Me=Me.next,be+=Me.value.length;if(be-=Me.value.length,Ce=be,Me.value instanceof A)continue;for(var j=Me;j!==S.tail&&(be<Te||typeof j.value=="string");j=j.next)F++,be+=j.value.length;F--,z=M.slice(Ce,be),ee.index-=Ce}else if(ee=b(xt,0,z,Ee),!ee)continue;var q=ee.index,G=ee[0],Q=z.slice(0,q),le=z.slice(q+G.length),de=Ce+z.length;I&&de>I.reach&&(I.reach=de);var ve=Me.prev;Q&&(ve=y(S,ve,Q),Ce+=Q.length),J(S,ve,F);var et=new A($,fe?g.tokenize(G,fe):G,He,G);if(Me=y(S,ve,et),le&&y(S,Me,le),F>1){var Ue={cause:$+","+pe,reach:de};f(M,S,E,Me.prev,Ce,Ue),I&&Ue.reach>I.reach&&(I.reach=Ue.reach)}}}}}}function T(){var M={value:null,prev:null,next:null},S={value:null,prev:M,next:null};M.next=S,this.head=M,this.tail=S,this.length=0}function y(M,S,E){var B=S.next,_={value:E,prev:S,next:B};return S.next=_,B.prev=_,M.length++,_}function J(M,S,E){for(var B=S.next,_=0;_<E&&B!==M.tail;_++)B=B.next;S.next=B,B.prev=S,M.length-=_}function V(M){for(var S=[],E=M.head.next;E!==M.tail;)S.push(E.value),E=E.next;return S}return g})();c.exports=d,d.default=d}}),H=Dv(wv());H.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},H.languages.markup.tag.inside["attr-value"].inside.entity=H.languages.markup.entity,H.languages.markup.doctype.inside["internal-subset"].inside=H.languages.markup,H.hooks.add("wrap",function(l){l.type==="entity"&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),Object.defineProperty(H.languages.markup.tag,"addInlined",{value:function(l,u){var d={},d=(d["language-"+u]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:H.languages[u]},d.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:d}}),u=(d["language-"+u]={pattern:/[\s\S]+/,inside:H.languages[u]},{});u[l]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:d},H.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(H.languages.markup.tag,"addAttribute",{value:function(l,c){H.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+l+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:H.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),H.languages.html=H.languages.markup,H.languages.mathml=H.languages.markup,H.languages.svg=H.languages.markup,H.languages.xml=H.languages.extend("markup",{}),H.languages.ssml=H.languages.xml,H.languages.atom=H.languages.xml,H.languages.rss=H.languages.xml,(function(l){var c={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},d=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,u="(?:[^\\\\-]|"+d.source+")",u=RegExp(u+"-"+u),p={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};l.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:u,inside:{escape:d,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":c,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:d}},"special-escape":c,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":p}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:d,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":p}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}})(H),H.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},H.languages.javascript=H.languages.extend("clike",{"class-name":[H.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),H.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,H.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:H.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:H.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:H.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:H.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:H.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),H.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:H.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),H.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),H.languages.markup&&(H.languages.markup.tag.addInlined("script","javascript"),H.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),H.languages.js=H.languages.javascript,H.languages.actionscript=H.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),H.languages.actionscript["class-name"].alias="function",delete H.languages.actionscript.parameter,delete H.languages.actionscript["literal-property"],H.languages.markup&&H.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:H.languages.markup}}),(function(l){var c=/#(?!\{).+/,d={pattern:/#\{[^}]+\}/,alias:"variable"};l.languages.coffeescript=l.languages.extend("javascript",{comment:c,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:d}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),l.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:c,interpolation:d}}}),l.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:l.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:d}}]}),l.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete l.languages.coffeescript["template-string"],l.languages.coffee=l.languages.coffeescript})(H),(function(l){var c=l.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(c,"addSupport",{value:function(d,u){(d=typeof d=="string"?[d]:d).forEach(function(p){var x=function(y){y.inside||(y.inside={}),y.inside.rest=u},g="doc-comment";if(A=l.languages[p]){var A,b=A[g];if((b=b||(A=l.languages.insertBefore(p,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[g])instanceof RegExp&&(b=A[g]={pattern:b}),Array.isArray(b))for(var f=0,T=b.length;f<T;f++)b[f]instanceof RegExp&&(b[f]={pattern:b[f]}),x(b[f]);else x(b)}})}}),c.addSupport(["java","javascript","php"],c)})(H),(function(l){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,c=(l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+c.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},l.languages.css.atrule.inside.rest=l.languages.css,l.languages.markup);c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))})(H),(function(l){var c=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,c=(l.languages.css.selector={pattern:l.languages.css.selector.pattern,lookbehind:!0,inside:c={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+c.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[c,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},l.languages.css.atrule.inside["selector-function-argument"].inside=c,l.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),d={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};l.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:c,number:d,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:c,number:d})})(H),(function(l){var c=/[*&][^\s[\]{},]+/,d=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,u="(?:"+d.source+"(?:[ 	]+"+c.source+")?|"+c.source+"(?:[ 	]+"+d.source+")?)",p=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),x=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function g(A,b){b=(b||"").replace(/m/g,"")+"m";var f=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return u}).replace(/<<value>>/g,function(){return A});return RegExp(f,b)}l.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return u})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return u}).replace(/<<key>>/g,function(){return"(?:"+p+"|"+x+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:g(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:g(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:g(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:g(x),lookbehind:!0,greedy:!0},number:{pattern:g(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:d,important:c,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},l.languages.yml=l.languages.yaml})(H),(function(l){var c=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function d(f){return f=f.replace(/<inner>/g,function(){return c}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+f+")")}var u=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,p=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return u}),x=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,g=(l.languages.markdown=l.languages.extend("markup",{}),l.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:l.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+p+x+"(?:"+p+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+p+x+")(?:"+p+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(u),inside:l.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+p+")"+x+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+p+"$"),inside:{"table-header":{pattern:RegExp(u),alias:"important",inside:l.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:d(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:d(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:d(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:d(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(f){["url","bold","italic","strike","code-snippet"].forEach(function(T){f!==T&&(l.languages.markdown[f].inside.content.inside[T]=l.languages.markdown[T])})}),l.hooks.add("after-tokenize",function(f){f.language!=="markdown"&&f.language!=="md"||(function T(y){if(y&&typeof y!="string")for(var J=0,V=y.length;J<V;J++){var M,S=y[J];S.type!=="code"?T(S.content):(M=S.content[1],S=S.content[3],M&&S&&M.type==="code-language"&&S.type==="code-block"&&typeof M.content=="string"&&(M=M.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),M="language-"+(M=(/[a-z][\w-]*/i.exec(M)||[""])[0].toLowerCase()),S.alias?typeof S.alias=="string"?S.alias=[S.alias,M]:S.alias.push(M):S.alias=[M]))}})(f.tokens)}),l.hooks.add("wrap",function(f){if(f.type==="code-block"){for(var T="",y=0,J=f.classes.length;y<J;y++){var V=f.classes[y],V=/language-(.+)/.exec(V);if(V){T=V[1];break}}var M,S=l.languages[T];S?f.content=l.highlight((function(E){return E=E.replace(g,""),E=E.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(B,_){var I;return(_=_.toLowerCase())[0]==="#"?(I=_[1]==="x"?parseInt(_.slice(2),16):Number(_.slice(1)),b(I)):A[_]||B})})(f.content),S,T):T&&T!=="none"&&l.plugins.autoloader&&(M="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random()),f.attributes.id=M,l.plugins.autoloader.loadLanguages(T,function(){var E=document.getElementById(M);E&&(E.innerHTML=l.highlight(E.textContent,l.languages[T],T))}))}}),RegExp(l.languages.markup.tag.pattern.source,"gi")),A={amp:"&",lt:"<",gt:">",quot:'"'},b=String.fromCodePoint||String.fromCharCode;l.languages.md=l.languages.markdown})(H),H.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:H.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},H.hooks.add("after-tokenize",function(l){if(l.language==="graphql")for(var c=l.tokens.filter(function(M){return typeof M!="string"&&M.type!=="comment"&&M.type!=="scalar"}),d=0;d<c.length;){var u=c[d++];if(u.type==="keyword"&&u.content==="mutation"){var p=[];if(y(["definition-mutation","punctuation"])&&T(1).content==="("){d+=2;var x=J(/^\($/,/^\)$/);if(x===-1)continue;for(;d<x;d++){var g=T(0);g.type==="variable"&&(V(g,"variable-input"),p.push(g.content))}d=x+1}if(y(["punctuation","property-query"])&&T(0).content==="{"&&(d++,V(T(0),"property-mutation"),0<p.length)){var A=J(/^\{$/,/^\}$/);if(A!==-1)for(var b=d;b<A;b++){var f=c[b];f.type==="variable"&&0<=p.indexOf(f.content)&&V(f,"variable-input")}}}}function T(M){return c[d+M]}function y(M,S){S=S||0;for(var E=0;E<M.length;E++){var B=T(E+S);if(!B||B.type!==M[E])return}return 1}function J(M,S){for(var E=1,B=d;B<c.length;B++){var _=c[B],I=_.content;if(_.type==="punctuation"&&typeof I=="string"){if(M.test(I))E++;else if(S.test(I)&&--E===0)return B}}return-1}function V(M,S){var E=M.alias;E?Array.isArray(E)||(M.alias=E=[E]):M.alias=E=[],E.push(S)}}),H.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},(function(l){var c=l.languages.javascript["template-string"],d=c.pattern.source,u=c.inside.interpolation,p=u.inside["interpolation-punctuation"],x=u.pattern.source;function g(y,J){if(l.languages[y])return{pattern:RegExp("((?:"+J+")\\s*)"+d),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:y}}}}function A(y,J,V){return y={code:y,grammar:J,language:V},l.hooks.run("before-tokenize",y),y.tokens=l.tokenize(y.code,y.grammar),l.hooks.run("after-tokenize",y),y.tokens}function b(y,J,V){var E=l.tokenize(y,{interpolation:{pattern:RegExp(x),lookbehind:!0}}),M=0,S={},E=A(E.map(function(_){if(typeof _=="string")return _;for(var I,$,_=_.content;y.indexOf(($=M++,I="___"+V.toUpperCase()+"_"+$+"___"))!==-1;);return S[I]=_,I}).join(""),J,V),B=Object.keys(S);return M=0,(function _(I){for(var $=0;$<I.length;$++){if(M>=B.length)return;var te,pe,X,fe,Ee,Ze,He,ze=I[$];typeof ze=="string"||typeof ze.content=="string"?(te=B[M],(He=(Ze=typeof ze=="string"?ze:ze.content).indexOf(te))!==-1&&(++M,pe=Ze.substring(0,He),Ee=S[te],X=void 0,(fe={})["interpolation-punctuation"]=p,(fe=l.tokenize(Ee,fe)).length===3&&((X=[1,1]).push.apply(X,A(fe[1],l.languages.javascript,"javascript")),fe.splice.apply(fe,X)),X=new l.Token("interpolation",fe,u.alias,Ee),fe=Ze.substring(He+te.length),Ee=[],pe&&Ee.push(pe),Ee.push(X),fe&&(_(Ze=[fe]),Ee.push.apply(Ee,Ze)),typeof ze=="string"?(I.splice.apply(I,[$,1].concat(Ee)),$+=Ee.length-1):ze.content=Ee)):(He=ze.content,Array.isArray(He)?_(He):_([He]))}})(E),new l.Token(V,E,"language-"+V,y)}l.languages.javascript["template-string"]=[g("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),g("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),g("svg",/\bsvg/.source),g("markdown",/\b(?:markdown|md)/.source),g("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),g("sql",/\bsql/.source),c].filter(Boolean);var f={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function T(y){return typeof y=="string"?y:Array.isArray(y)?y.map(T).join(""):T(y.content)}l.hooks.add("after-tokenize",function(y){y.language in f&&(function J(V){for(var M=0,S=V.length;M<S;M++){var E,B,_,I=V[M];typeof I!="string"&&(E=I.content,Array.isArray(E)?I.type==="template-string"?(I=E[1],E.length===3&&typeof I!="string"&&I.type==="embedded-code"&&(B=T(I),I=I.alias,I=Array.isArray(I)?I[0]:I,_=l.languages[I])&&(E[1]=b(B,_,I))):J(E):typeof E!="string"&&J([E]))}})(y.tokens)})})(H),(function(l){l.languages.typescript=l.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),l.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete l.languages.typescript.parameter,delete l.languages.typescript["literal-property"];var c=l.languages.extend("typescript",{});delete c["class-name"],l.languages.typescript["class-name"].inside=c,l.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:c}}}}),l.languages.ts=l.languages.typescript})(H),(function(l){var c=l.languages.javascript,d=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,u="(@(?:arg|argument|param|property)\\s+(?:"+d+"\\s+)?)";l.languages.jsdoc=l.languages.extend("javadoclike",{parameter:{pattern:RegExp(u+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),l.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(u+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:c,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return d})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+d),lookbehind:!0,inside:{string:c.string,number:c.number,boolean:c.boolean,keyword:l.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:c,alias:"language-javascript"}}}}),l.languages.javadoclike.addSupport("javascript",l.languages.jsdoc)})(H),(function(l){l.languages.flow=l.languages.extend("javascript",{}),l.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),l.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete l.languages.flow.parameter,l.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(l.languages.flow.keyword)||(l.languages.flow.keyword=[l.languages.flow.keyword]),l.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})})(H),H.languages.n4js=H.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),H.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),H.languages.n4jsd=H.languages.n4js,(function(l){function c(g,A){return RegExp(g.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),A)}l.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+l.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),l.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+l.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),l.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),l.languages.insertBefore("javascript","keyword",{imports:{pattern:c(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:l.languages.javascript},exports:{pattern:c(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:l.languages.javascript}}),l.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),l.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),l.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:c(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var d=["function","function-variable","method","method-variable","property-access"],u=0;u<d.length;u++){var x=d[u],p=l.languages.javascript[x],x=(p=l.util.type(p)==="RegExp"?l.languages.javascript[x]={pattern:p}:p).inside||{};(p.inside=x)["maybe-class-name"]=/^[A-Z][\s\S]*/}})(H),(function(l){var c=l.util.clone(l.languages.javascript),d=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,u=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,p=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function x(b,f){return b=b.replace(/<S>/g,function(){return d}).replace(/<BRACES>/g,function(){return u}).replace(/<SPREAD>/g,function(){return p}),RegExp(b,f)}p=x(p).source,l.languages.jsx=l.languages.extend("markup",c),l.languages.jsx.tag.pattern=x(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),l.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,l.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,l.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,l.languages.jsx.tag.inside.comment=c.comment,l.languages.insertBefore("inside","attr-name",{spread:{pattern:x(/<SPREAD>/.source),inside:l.languages.jsx}},l.languages.jsx.tag),l.languages.insertBefore("inside","special-attr",{script:{pattern:x(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:l.languages.jsx}}},l.languages.jsx.tag);function g(b){for(var f=[],T=0;T<b.length;T++){var y=b[T],J=!1;typeof y!="string"&&(y.type==="tag"&&y.content[0]&&y.content[0].type==="tag"?y.content[0].content[0].content==="</"?0<f.length&&f[f.length-1].tagName===A(y.content[0].content[1])&&f.pop():y.content[y.content.length-1].content!=="/>"&&f.push({tagName:A(y.content[0].content[1]),openedBraces:0}):0<f.length&&y.type==="punctuation"&&y.content==="{"?f[f.length-1].openedBraces++:0<f.length&&0<f[f.length-1].openedBraces&&y.type==="punctuation"&&y.content==="}"?f[f.length-1].openedBraces--:J=!0),(J||typeof y=="string")&&0<f.length&&f[f.length-1].openedBraces===0&&(J=A(y),T<b.length-1&&(typeof b[T+1]=="string"||b[T+1].type==="plain-text")&&(J+=A(b[T+1]),b.splice(T+1,1)),0<T&&(typeof b[T-1]=="string"||b[T-1].type==="plain-text")&&(J=A(b[T-1])+J,b.splice(T-1,1),T--),b[T]=new l.Token("plain-text",J,null,J)),y.content&&typeof y.content!="string"&&g(y.content)}}var A=function(b){return b?typeof b=="string"?b:typeof b.content=="string"?b.content:b.content.map(A).join(""):""};l.hooks.add("after-tokenize",function(b){b.language!=="jsx"&&b.language!=="tsx"||g(b.tokens)})})(H),(function(l){var c=l.util.clone(l.languages.typescript),c=(l.languages.tsx=l.languages.extend("jsx",c),delete l.languages.tsx.parameter,delete l.languages.tsx["literal-property"],l.languages.tsx.tag);c.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+c.pattern.source+")",c.pattern.flags),c.lookbehind=!0})(H),H.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},H.languages.swift["string-literal"].forEach(function(l){l.inside.interpolation.inside=H.languages.swift}),(function(l){l.languages.kotlin=l.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete l.languages.kotlin["class-name"];var c={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:l.languages.kotlin}};l.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:c},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:c},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete l.languages.kotlin.string,l.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),l.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),l.languages.kt=l.languages.kotlin,l.languages.kts=l.languages.kotlin})(H),H.languages.c=H.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),H.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),H.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},H.languages.c.string],char:H.languages.c.char,comment:H.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:H.languages.c}}}}),H.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete H.languages.c.boolean,H.languages.objectivec=H.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete H.languages.objectivec["class-name"],H.languages.objc=H.languages.objectivec,H.languages.reason=H.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),H.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete H.languages.reason.function,(function(l){for(var c=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,d=0;d<2;d++)c=c.replace(/<self>/g,function(){return c});c=c.replace(/<self>/g,function(){return/[^\s\S]/.source}),l.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+c),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},l.languages.rust["closure-params"].inside.rest=l.languages.rust,l.languages.rust.attribute.inside.string=l.languages.rust.string})(H),H.languages.go=H.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),H.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete H.languages.go["class-name"],(function(l){var c=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,d=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return c.source});l.languages.cpp=l.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return c.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:c,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),l.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return d})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),l.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:l.languages.cpp}}}}),l.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),l.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:l.languages.extend("cpp",{})}}),l.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},l.languages.cpp["base-clause"])})(H),H.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},H.languages.python["string-interpolation"].inside.interpolation.inside.rest=H.languages.python,H.languages.py=H.languages.python,H.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},H.languages.webmanifest=H.languages.json;var vf={};Rv(vf,{dracula:()=>zv,duotoneDark:()=>Uv,duotoneLight:()=>kv,github:()=>Pv,gruvboxMaterialDark:()=>xj,gruvboxMaterialLight:()=>bj,jettwaveDark:()=>lj,jettwaveLight:()=>cj,nightOwl:()=>Iv,nightOwlLight:()=>Vv,oceanicNext:()=>Gv,okaidia:()=>Qv,oneDark:()=>dj,oneLight:()=>pj,palenight:()=>Zv,shadesOfPurple:()=>$v,synthwave84:()=>ej,ultramin:()=>aj,vsDark:()=>jf,vsLight:()=>rj});var Lv={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},zv=Lv,_v={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},Uv=_v,Bv={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},kv=Bv,qv={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},Pv=qv,Hv={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},Iv=Hv,Jv={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},Vv=Jv,At={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",tag:"#fc929e",function:"#79b6f2",className:"#FAC863"},Fv={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:At.keyword}},{types:["attr-value"],style:{color:At.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:At.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:At.primitive}},{types:["boolean"],style:{color:At.boolean}},{types:["tag"],style:{color:At.tag}},{types:["string"],style:{color:At.string}},{types:["punctuation"],style:{color:At.string}},{types:["selector","char","builtin","inserted"],style:{color:At.char}},{types:["function"],style:{color:At.function}},{types:["operator","entity","url","variable"],style:{color:At.variable}},{types:["keyword"],style:{color:At.keyword}},{types:["atrule","class-name"],style:{color:At.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},Gv=Fv,Yv={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},Qv=Yv,Xv={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},Zv=Xv,Kv={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},$v=Kv,Wv={plain:{backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},ej=Wv,tj={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},aj=tj,nj={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},jf=nj,ij={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},rj=ij,sj={plain:{color:"#f8fafc",backgroundColor:"#011627"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#569CD6"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#f8fafc"}},{types:["attr-name","variable"],style:{color:"#9CDCFE"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#cbd5e1"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#D4D4D4"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#7dd3fc"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},lj=sj,oj={plain:{color:"#0f172a",backgroundColor:"#f1f5f9"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#0c4a6e"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#0f172a"}},{types:["attr-name","variable"],style:{color:"#0c4a6e"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#64748b"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#475569"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#0e7490"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},cj=oj,uj={plain:{backgroundColor:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(220, 10%, 40%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(220, 14%, 71%)"}},{types:["attr-name","class-name","maybe-class-name","boolean","constant","number","atrule"],style:{color:"hsl(29, 54%, 61%)"}},{types:["keyword"],style:{color:"hsl(286, 60%, 67%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(355, 65%, 65%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value"],style:{color:"hsl(95, 38%, 62%)"}},{types:["variable","operator","function"],style:{color:"hsl(207, 82%, 66%)"}},{types:["url"],style:{color:"hsl(187, 47%, 55%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(220, 14%, 71%)"}}]},dj=uj,mj={plain:{backgroundColor:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(230, 4%, 64%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(230, 8%, 24%)"}},{types:["attr-name","class-name","boolean","constant","number","atrule"],style:{color:"hsl(35, 99%, 36%)"}},{types:["keyword"],style:{color:"hsl(301, 63%, 40%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(5, 74%, 59%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value","punctuation"],style:{color:"hsl(119, 34%, 47%)"}},{types:["variable","operator","function"],style:{color:"hsl(221, 87%, 60%)"}},{types:["url"],style:{color:"hsl(198, 99%, 37%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(230, 8%, 24%)"}}]},pj=mj,fj={plain:{color:"#ebdbb2",backgroundColor:"#292828"},styles:[{types:["imports","class-name","maybe-class-name","constant","doctype","builtin","function"],style:{color:"#d8a657"}},{types:["property-access"],style:{color:"#7daea3"}},{types:["tag"],style:{color:"#e78a4e"}},{types:["attr-name","char","url","regex"],style:{color:"#a9b665"}},{types:["attr-value","string"],style:{color:"#89b482"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#ea6962"}},{types:["entity","number","symbol"],style:{color:"#d3869b"}}]},xj=fj,gj={plain:{color:"#654735",backgroundColor:"#f9f5d7"},styles:[{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#af2528"}},{types:["imports","class-name","maybe-class-name","constant","doctype","builtin"],style:{color:"#b4730e"}},{types:["string","attr-value"],style:{color:"#477a5b"}},{types:["property-access"],style:{color:"#266b79"}},{types:["function","attr-name","char","url"],style:{color:"#72761e"}},{types:["tag"],style:{color:"#b94c07"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["entity","number","symbol"],style:{color:"#924f79"}}]},bj=gj,hj=l=>L.useCallback(c=>{var d=c,{className:u,style:p,line:x}=d,g=yf(d,["className","style","line"]);const A=hs(Gt({},g),{className:gf("token-line",u)});return typeof l=="object"&&"plain"in l&&(A.style=l.plain),typeof p=="object"&&(A.style=Gt(Gt({},A.style||{}),p)),A},[l]),yj=l=>{const c=L.useCallback(({types:d,empty:u})=>{if(l!=null){{if(d.length===1&&d[0]==="plain")return u!=null?{display:"inline-block"}:void 0;if(d.length===1&&u!=null)return l[d[0]]}return Object.assign(u!=null?{display:"inline-block"}:{},...d.map(p=>l[p]))}},[l]);return L.useCallback(d=>{var u=d,{token:p,className:x,style:g}=u,A=yf(u,["token","className","style"]);const b=hs(Gt({},A),{className:gf("token",...p.types,x),children:p.content,style:c(p)});return g!=null&&(b.style=Gt(Gt({},b.style||{}),g)),b},[c])},vj=/\r\n|\r|\n/,Bp=l=>{l.length===0?l.push({types:["plain"],content:`
`,empty:!0}):l.length===1&&l[0].content===""&&(l[0].content=`
`,l[0].empty=!0)},kp=(l,c)=>{const d=l.length;return d>0&&l[d-1]===c?l:l.concat(c)},jj=l=>{const c=[[]],d=[l],u=[0],p=[l.length];let x=0,g=0,A=[];const b=[A];for(;g>-1;){for(;(x=u[g]++)<p[g];){let f,T=c[g];const J=d[g][x];if(typeof J=="string"?(T=g>0?T:["plain"],f=J):(T=kp(T,J.type),J.alias&&(T=kp(T,J.alias)),f=J.content),typeof f!="string"){g++,c.push(T),d.push(f),u.push(0),p.push(f.length);continue}const V=f.split(vj),M=V.length;A.push({types:T,content:V[0]});for(let S=1;S<M;S++)Bp(A),b.push(A=[]),A.push({types:T,content:V[S]})}g--,c.pop(),d.pop(),u.pop(),p.pop()}return Bp(A),b},qp=jj,Sj=({prism:l,code:c,grammar:d,language:u})=>L.useMemo(()=>{if(d==null)return qp([c]);const p={code:c,grammar:d,language:u,tokens:[]};return l.hooks.run("before-tokenize",p),p.tokens=l.tokenize(c,d),l.hooks.run("after-tokenize",p),qp(p.tokens)},[c,d,u,l]),Nj=(l,c)=>{const{plain:d}=l,u=l.styles.reduce((p,x)=>{const{languages:g,style:A}=x;return g&&!g.includes(c)||x.types.forEach(b=>{const f=Gt(Gt({},p[b]),A);p[b]=f}),p},{});return u.root=d,u.plain=hs(Gt({},d),{backgroundColor:void 0}),u},Ej=Nj,Cj=({children:l,language:c,code:d,theme:u,prism:p})=>{const x=c.toLowerCase(),g=Ej(u,x),A=hj(g),b=yj(g),f=p.languages[x],T=Sj({prism:p,language:x,code:d,grammar:f});return l({tokens:T,className:`prism-code language-${x}`,style:g!=null?g.root:{},getLineProps:A,getTokenProps:b})},Aj=l=>L.createElement(Cj,hs(Gt({},l),{prism:l.prism||H,theme:l.theme||jf,code:l.code,language:l.language}));const Tj=vf.oneDark;function N({code:l,language:c="java",filename:d}){const[u,p]=L.useState(!1),x=()=>{navigator.clipboard.writeText(l.trim()),p(!0),setTimeout(()=>p(!1),2e3)},g=c==="java"?"Java":c==="bash"?"Terminal":c==="xml"?"XML":c==="json"?"JSON":c==="sql"?"SQL":c==="yaml"?"YAML":c;return a.jsxs("div",{className:"rounded-xl overflow-hidden border border-[#2d333b] my-5 shadow-lg shadow-black/20",children:[a.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5",style:{background:"#1e1e2e"},children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("div",{className:"flex gap-1.5",children:[a.jsx("span",{className:"w-3 h-3 rounded-full bg-[#ff5f57]"}),a.jsx("span",{className:"w-3 h-3 rounded-full bg-[#febc2e]"}),a.jsx("span",{className:"w-3 h-3 rounded-full bg-[#28c840]"})]}),d&&a.jsxs("span",{className:"text-[#8b949e] text-sm font-mono ml-2 flex items-center gap-1.5",children:[a.jsx(df,{size:14}),d]}),!d&&a.jsx("span",{className:"text-[#6e7681] text-xs font-mono ml-2",children:g})]}),a.jsxs("button",{onClick:x,className:"flex items-center gap-1.5 text-xs text-[#8b949e] hover:text-[#e6edf3] transition-colors cursor-pointer px-2 py-1 rounded hover:bg-white/5",children:[u?a.jsx(Wh,{size:13,className:"text-[#3fb950]"}):a.jsx(dy,{size:13}),u?"Copiado!":"Copiar"]})]}),a.jsx(Aj,{theme:Tj,code:l.trim(),language:c,children:({tokens:A,getLineProps:b,getTokenProps:f})=>a.jsx("pre",{style:{margin:0,padding:"1rem 0",background:"#282c34",overflowX:"auto",fontSize:"0.875rem",lineHeight:"1.7"},children:A.map((T,y)=>{const J=b({line:T});return a.jsxs("div",{style:{...J.style,display:"table-row"},children:[a.jsx("span",{style:{display:"table-cell",paddingRight:"1rem",paddingLeft:"1rem",textAlign:"right",userSelect:"none",opacity:.3,fontSize:"0.75rem",width:"2rem",color:"#8b949e"},children:y+1}),a.jsx("span",{style:{display:"table-cell",paddingRight:"1rem"},children:T.map((V,M)=>{const S=f({token:V});return a.jsx("span",{...S},M)})})]},y)})})})]})}const Mj={info:{icon:Ry,bg:"bg-accent/10",border:"border-accent/30",iconColor:"text-accent",defaultTitle:"Nota"},warning:{icon:lv,bg:"bg-warning/10",border:"border-warning/30",iconColor:"text-warning",defaultTitle:"Importante"},tip:{icon:pf,bg:"bg-success/10",border:"border-success/30",iconColor:"text-success",defaultTitle:"Tip"},angular:{icon:Zo,bg:"bg-angular/10",border:"border-angular/30",iconColor:"text-angular",defaultTitle:"Comparación con Angular/TypeScript"},spring:{icon:mf,bg:"bg-spring/10",border:"border-spring/30",iconColor:"text-spring",defaultTitle:"Spring Boot"}};function Y({type:l="info",title:c,children:d}){const u=Mj[l],p=u.icon;return a.jsxs("div",{className:`${u.bg} ${u.border} border rounded-xl p-4 my-4`,children:[a.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[a.jsx(p,{size:18,className:u.iconColor}),a.jsx("span",{className:`font-semibold text-sm ${u.iconColor}`,children:c||u.defaultTitle})]}),a.jsx("div",{className:"text-text-muted text-sm leading-relaxed",children:d})]})}function oe({day:l,title:c,duration:d,commitMsg:u}){return a.jsxs("div",{className:"mb-8",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[a.jsx("div",{className:"flex-shrink-0 w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center",children:a.jsx("span",{className:"text-primary font-bold text-lg",children:l})}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2 text-xs text-text-muted mb-0.5",children:[a.jsx(Kh,{size:12}),a.jsxs("span",{children:["Día ",l]}),a.jsx("span",{className:"text-border",children:"•"}),a.jsx(cf,{size:12}),a.jsx("span",{children:d})]}),a.jsx("h1",{className:"text-3xl font-bold text-java",children:c})]})]}),u&&a.jsxs("div",{className:"flex items-center gap-2 mt-3 px-3 py-2 rounded-lg bg-[#161b22] border border-[#30363d] text-sm font-mono",children:[a.jsx(Ko,{size:14,className:"text-success flex-shrink-0"}),a.jsx("span",{className:"text-success",children:"git commit -m"}),a.jsxs("span",{className:"text-[#e6edf3]",children:['"',u,'"']})]})]})}function ne({title:l="¿Cómo pensarlo?",children:c}){return a.jsxs("div",{className:"my-6 rounded-xl border border-accent/30 overflow-hidden",children:[a.jsxs("div",{className:"bg-accent/10 px-5 py-3 flex items-center gap-2.5",children:[a.jsx(sc,{size:18,className:"text-accent"}),a.jsx("span",{className:"font-semibold text-sm text-accent",children:l})]}),a.jsx("div",{className:"px-5 py-4 bg-accent/5 text-text-muted text-sm leading-relaxed space-y-3",children:c})]})}function Pp({title:l="Paso a paso",steps:c}){return a.jsxs("div",{className:"my-6 rounded-xl border border-border overflow-hidden",children:[a.jsxs("div",{className:"bg-surface-lighter/40 px-5 py-3 flex items-center gap-2.5",children:[a.jsx(Hh,{size:16,className:"text-primary"}),a.jsx("span",{className:"font-semibold text-sm text-text",children:l})]}),a.jsx("div",{className:"px-5 py-4 space-y-0",children:c.map((d,u)=>a.jsxs("div",{className:"flex gap-3 py-3 border-b border-border/30 last:border-0",children:[a.jsx("div",{className:"flex-shrink-0 w-7 h-7 rounded-full bg-primary/15 text-primary font-bold text-xs flex items-center justify-center mt-0.5",children:u+1}),a.jsxs("div",{children:[a.jsx("p",{className:"text-text text-sm font-medium",children:d.instruction}),d.detail&&a.jsx("p",{className:"text-text-muted text-xs mt-1 leading-relaxed",children:d.detail})]})]},u))})]})}function K({number:l,title:c,description:d,hint:u,solution:p,solutionLanguage:x="java",solutionFilename:g}){const[A,b]=L.useState(!1),[f,T]=L.useState(!1);return a.jsxs("div",{className:"my-6 rounded-xl border-2 border-primary/30 overflow-hidden",children:[a.jsxs("div",{className:"bg-primary/10 px-5 py-4 flex items-center gap-3",children:[a.jsx("div",{className:"flex-shrink-0 w-9 h-9 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center",children:a.jsx(lc,{size:18,className:"text-primary"})}),a.jsxs("div",{children:[a.jsxs("span",{className:"text-xs font-bold text-primary uppercase tracking-wider",children:["Ejercicio ",l]}),a.jsx("h4",{className:"text-text font-semibold text-sm mt-0.5",children:c})]})]}),a.jsxs("div",{className:"px-5 py-4 bg-surface-light/50",children:[a.jsx("p",{className:"text-text-muted text-sm leading-relaxed whitespace-pre-line",children:d}),u&&a.jsxs("button",{onClick:()=>b(!A),className:"mt-3 flex items-center gap-2 text-xs text-warning hover:text-warning/80 transition-colors cursor-pointer",children:[a.jsx(pf,{size:14}),A?"Ocultar pista":"Necesito una pista",A?a.jsx(Op,{size:14}):a.jsx(Rp,{size:14})]}),A&&u&&a.jsxs("div",{className:"mt-2 p-3 rounded-lg bg-warning/10 border border-warning/20 text-sm text-warning/90",children:["💡 ",u]})]}),a.jsxs("div",{className:"px-5 py-3 border-t border-border/50",children:[a.jsxs("button",{onClick:()=>T(!f),className:"flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors cursor-pointer",children:[a.jsx(iy,{size:16}),f?"Ocultar solución":"Ver solución",f?a.jsx(Op,{size:14}):a.jsx(Rp,{size:14})]}),f&&a.jsx("div",{className:"mt-3",children:a.jsx(N,{code:p,language:x,filename:g})})]})]})}function Rj(){return a.jsxs("div",{children:[a.jsx(oe,{day:1,title:"Introducción a Java",duration:"45 min",commitMsg:"dia-1: primer programa Java - HolaMundo"}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy vas a entender qué es Java, cómo funciona por dentro, y vas a escribir y ejecutar tu primer programa. No solo leer — vas a ",a.jsx("strong",{className:"text-text",children:"hacer"}),"."]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es Java y por qué te importa?"}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Java es un lenguaje ",a.jsx("strong",{className:"text-text",children:"orientado a objetos"}),",",a.jsx("strong",{className:"text-text",children:" fuertemente tipado"})," y ",a.jsx("strong",{className:"text-text",children:"compilado"}),". Fue creado en 1995 por James Gosling y hoy lo mantiene Oracle."]}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Su filosofía es ",a.jsx("strong",{className:"text-text",children:'"Write Once, Run Anywhere" (WORA)'}),": escribes el código una vez y se ejecuta en cualquier plataforma con una JVM."]}),a.jsxs(ne,{title:"¿Por qué debería aprender Java si ya sé TypeScript?",children:[a.jsxs("p",{children:["Piénsalo así: TypeScript te da tipado estático ",a.jsx("em",{children:"opcional"})," sobre JavaScript. Java te da tipado estático ",a.jsx("em",{children:"obligatorio"})," desde el primer día. Eso significa que el compilador atrapa más errores antes de que tu código se ejecute."]}),a.jsx("p",{children:"El 90% de los sistemas bancarios, aerolíneas y gobiernos corren sobre Java. Si quieres trabajar en backend enterprise, Java es el lenguaje que abre esas puertas. Spring Boot (que aprenderemos en la Fase 7) es el equivalente de NestJS pero con un ecosistema mucho más maduro."})]}),a.jsxs(Y,{type:"angular",children:["En Angular trabajas con TypeScript, que se ",a.jsx("strong",{children:"transpila"})," a JavaScript y se ejecuta en el navegador. En Java, el código se ",a.jsx("strong",{children:"compila"})," a ",a.jsx("code",{className:"text-primary",children:"bytecode"})," y se ejecuta en la JVM. El concepto es similar: un paso intermedio antes de la ejecución."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"JDK, JRE y JVM — Las tres piezas clave"}),a.jsxs(ne,{title:"¿Cómo pensar en estas tres piezas?",children:[a.jsxs("p",{children:["Imagina una ",a.jsx("strong",{className:"text-text",children:"muñeca rusa (matrioska)"}),". La más grande es el JDK, que contiene al JRE, que contiene a la JVM. Cada capa agrega herramientas:"]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"JVM"})," = el motor que ejecuta tu programa.",a.jsx("strong",{className:"text-text",children:" JRE"})," = el motor + las bibliotecas (java.util, java.lang...).",a.jsx("strong",{className:"text-text",children:" JDK"})," = todo lo anterior + herramientas para desarrollar (compilador, debugger)."]}),a.jsxs("p",{children:["Como desarrollador, siempre instalas el ",a.jsx("strong",{className:"text-text",children:"JDK"}),". Es todo lo que necesitas."]})]}),a.jsxs("div",{className:"space-y-4 mb-6",children:[a.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-4",children:[a.jsx("h3",{className:"font-semibold text-java mb-2",children:"JVM (Java Virtual Machine)"}),a.jsx("p",{className:"text-text-muted text-sm",children:"Ejecuta el bytecode de Java. Cada sistema operativo tiene su propia JVM, pero todos ejecutan el mismo bytecode. Es lo que hace a Java multiplataforma."})]}),a.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-4",children:[a.jsx("h3",{className:"font-semibold text-java mb-2",children:"JRE (Java Runtime Environment)"}),a.jsxs("p",{className:"text-text-muted text-sm",children:["JVM + bibliotecas estándar. Lo que necesitas para ",a.jsx("strong",{className:"text-text",children:"ejecutar"})," programas Java."]})]}),a.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-4",children:[a.jsx("h3",{className:"font-semibold text-java mb-2",children:"JDK (Java Development Kit)"}),a.jsxs("p",{className:"text-text-muted text-sm",children:["JRE + compilador (",a.jsx("code",{className:"text-primary",children:"javac"}),") + debugger + herramientas. Lo que necesitas para ",a.jsx("strong",{className:"text-text",children:"escribir y compilar"})," programas."]})]})]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Instalación paso a paso"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Antes de escribir código, necesitas tener el JDK instalado. Vamos a hacerlo juntos:"}),a.jsx(Pp,{title:"Instalar JDK 21 en tu máquina",steps:[{instruction:"Descarga el JDK 21 (LTS)",detail:"Ve a adoptium.net o oracle.com/java y descarga JDK 21 para tu sistema operativo."},{instruction:"Ejecuta el instalador",detail:"En Windows: siguiente, siguiente, instalar. En macOS: abre el .dmg y arrastra. En Linux: usa tu gestor de paquetes (apt, dnf, etc.)."},{instruction:"Verifica la instalación en tu terminal",detail:"Abre una terminal y ejecuta los comandos de abajo."},{instruction:"Instala IntelliJ IDEA Community",detail:"Descarga de jetbrains.com/idea. La versión Community es gratuita y perfecta para aprender."}]}),a.jsx(N,{language:"bash",filename:"Terminal — Verificar instalación",code:`
# Verificar que Java está instalado
java --version
# Debería mostrar algo como: openjdk 21.0.x ...

# Verificar el compilador
javac --version
# Debería mostrar algo como: javac 21.0.x
`}),a.jsxs(Y,{type:"warning",title:"¿No te reconoce el comando java?",children:['Si la terminal dice "java no se reconoce como un comando", necesitas agregar el JDK al PATH de tu sistema. En Windows: Panel de control → Variables de entorno → PATH → agrega la ruta del bin del JDK (ejemplo: ',a.jsx("code",{className:"text-primary",children:"C:\\Program Files\\Java\\jdk-21\\bin"}),")."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Tu primer programa: HolaMundo"}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Ahora sí, manos al código. Vas a crear tu primer archivo Java y ejecutarlo. Presta atención a ",a.jsx("strong",{className:"text-text",children:"cada parte"})," del código:"]}),a.jsx(Pp,{title:"Crear tu primer proyecto en IntelliJ",steps:[{instruction:"Abre IntelliJ IDEA",detail:'Si es la primera vez, selecciona "New Project".'},{instruction:"Configura el proyecto",detail:'Name: java-mastery-45-dias, Language: Java, Build system: IntelliJ, JDK: 21. Click "Create".'},{instruction:"Crea el archivo HolaMundo.java",detail:'Click derecho en la carpeta "src" → New → Java Class → escribe "HolaMundo".'},{instruction:"Escribe el código de abajo",detail:"No copies y pegues. Escríbelo tú mismo — así tu cerebro empieza a memorizar la estructura."},{instruction:"Ejecuta el programa",detail:"Click derecho en el archivo → Run, o usa el atajo Shift+F10 (Windows) / Ctrl+R (Mac)."}]}),a.jsx(N,{language:"java",filename:"HolaMundo.java",code:`
public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("¡Hola, Mundo!");
    }
}
`}),a.jsxs(ne,{title:"¿Qué significa cada palabra de este código?",children:[a.jsx("p",{children:"Vamos parte por parte, porque entender esto es la base de TODO lo que viene después:"}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"public"})," — Modificador de acceso. Significa que esta clase es visible para todos. Por ahora, siempre pondrás ",a.jsx("code",{className:"text-primary",children:"public"})," en tu clase principal."]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"class HolaMundo"})," — Defines una clase llamada HolaMundo. En Java ",a.jsx("em",{children:"todo"})," el código vive dentro de una clase. El nombre ",a.jsx("em",{children:"debe"})," coincidir exactamente con el nombre del archivo (HolaMundo.java)."]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"public static void main(String[] args)"})," — Este es el punto de entrada. La JVM busca exactamente este método para arrancar tu programa. No puedes cambiarle el nombre ni la firma. ",a.jsx("code",{className:"text-primary",children:"static"})," = no necesita una instancia. ",a.jsx("code",{className:"text-primary",children:"void"})," = no retorna nada.",a.jsx("code",{className:"text-primary",children:" String[] args"})," = argumentos desde la línea de comandos."]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"System.out.println()"})," — Imprime texto en la consola y agrega un salto de línea al final. ",a.jsx("code",{className:"text-primary",children:"System"})," es una clase del sistema, ",a.jsx("code",{className:"text-primary",children:"out"})," es el flujo de salida estándar."]})]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Cómo funciona por dentro?"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:'Cuando hiciste click en "Run" en IntelliJ, esto es lo que pasó detrás de escenas:'}),a.jsx(N,{language:"bash",filename:"Lo que IntelliJ hizo por ti",code:`
# Paso 1: El compilador convierte .java → .class (bytecode)
javac HolaMundo.java
# Genera: HolaMundo.class

# Paso 2: La JVM ejecuta el bytecode
java HolaMundo
# Salida: ¡Hola, Mundo!

# NOTA: No pones .class al ejecutar
# NOTA: El archivo .class no es legible por humanos — es bytecode
`}),a.jsxs(Y,{type:"info",children:["IntelliJ hace estos dos pasos automáticamente con un solo click. Pero es fundamental que entiendas el proceso: ",a.jsx("strong",{children:"tu código → compilador → bytecode → JVM → ejecución"}),". Cuando algo falle, saber en qué paso ocurrió el error te ahorra horas de debugging."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Java vs TypeScript — Mapa mental"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Si vienes de TypeScript, esta tabla te ayuda a conectar lo que ya sabes:"}),a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-sm text-text-muted",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-border",children:[a.jsx("th",{className:"text-left py-3 px-4 text-text",children:"Concepto"}),a.jsx("th",{className:"text-left py-3 px-4 text-angular",children:"TypeScript"}),a.jsx("th",{className:"text-left py-3 px-4 text-java",children:"Java"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-3 px-4",children:"Tipado"}),a.jsx("td",{className:"py-3 px-4",children:"Estático (opcional)"}),a.jsx("td",{className:"py-3 px-4",children:"Estático (obligatorio)"})]}),a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-3 px-4",children:"Compilación"}),a.jsx("td",{className:"py-3 px-4",children:"Transpila a JS"}),a.jsx("td",{className:"py-3 px-4",children:"Compila a bytecode"})]}),a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-3 px-4",children:"Ejecución"}),a.jsx("td",{className:"py-3 px-4",children:"Navegador / Node.js"}),a.jsx("td",{className:"py-3 px-4",children:"JVM"})]}),a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-3 px-4",children:"Punto de entrada"}),a.jsx("td",{className:"py-3 px-4",children:"main.ts / index.ts"}),a.jsx("td",{className:"py-3 px-4",children:"public static void main()"})]}),a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-3 px-4",children:"Dependencias"}),a.jsx("td",{className:"py-3 px-4",children:"npm / yarn / pnpm"}),a.jsx("td",{className:"py-3 px-4",children:"Maven / Gradle"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"py-3 px-4",children:"Imprimir"}),a.jsx("td",{className:"py-3 px-4",children:"console.log()"}),a.jsx("td",{className:"py-3 px-4",children:"System.out.println()"})]})]})]})})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 1"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"No avances al Día 2 sin completar estos ejercicios. Escríbelos tú mismo en IntelliJ, ejecútalos y verifica que funcionen."}),a.jsx(K,{number:1,title:"Saluda con tu nombre",description:`Crea una clase llamada MiSaludo.java que imprima:
"Hola, me llamo [TU NOMBRE] y estoy aprendiendo Java"

Recuerda: el nombre de la clase debe coincidir con el nombre del archivo.`,hint:"Usa System.out.println() con tu nombre dentro de las comillas.",solution:`public class MiSaludo {
    public static void main(String[] args) {
        System.out.println("Hola, me llamo Carlos y estoy aprendiendo Java");
    }
}`,solutionFilename:"MiSaludo.java"}),a.jsx(K,{number:2,title:"Múltiples líneas",description:`Crea una clase llamada MiPerfil.java que imprima tu perfil en 4 líneas separadas:
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
}`,solutionFilename:"MiPerfil.java"}),a.jsx(K,{number:3,title:"print vs println",description:`Crea una clase Impresion.java que demuestre la diferencia entre print y println:
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
}`,solutionFilename:"Impresion.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx("p",{className:"text-text-muted text-sm mb-3",children:"Si completaste los 3 ejercicios, haz tu primer commit:"}),a.jsx(N,{language:"bash",code:`
git add .
git commit -m "dia-1: primer programa Java - HolaMundo, MiSaludo, MiPerfil, Impresion"
git push origin main
`}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",a.jsx("strong",{className:"text-text",children:"Día 2"})," vas a aprender la estructura completa de un programa Java: paquetes, imports, convenciones y más."]})]})})]})}function Oj(){return a.jsxs("div",{children:[a.jsx(oe,{day:2,title:"Sintaxis Básica",duration:"50 min",commitMsg:"dia-2: sintaxis basica, comentarios, convenciones, paquetes"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a dominar la estructura de un programa Java: cómo imprimir texto de varias formas, cómo documentar tu código, y las convenciones que todo desarrollador Java sigue."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"La anatomía de un programa Java"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Ayer escribiste tu primer HolaMundo. Hoy vamos a profundizar en cada pieza y aprender nuevas formas de trabajar con la consola."}),a.jsx(N,{filename:"Anatomia.java",code:`
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
`}),a.jsxs(ne,{title:"¿Por qué Java obliga a poner todo dentro de una clase?",children:[a.jsxs("p",{children:["En TypeScript puedes escribir una función suelta en un archivo. En Java, ",a.jsx("strong",{className:"text-text",children:"no existe código suelto"}),". Todo debe estar dentro de una clase. ¿Por qué? Porque Java fue diseñado como un lenguaje 100% orientado a objetos. Incluso tu programa más simple es una clase."]}),a.jsx("p",{children:"Piénsalo como una regla de organización: así como Angular te obliga a poner lógica en componentes, Java te obliga a poner lógica en clases. Es más verboso al inicio, pero a gran escala mantiene el código organizado."})]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Imprimir en consola — Las 3 formas"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Imprimir en consola es tu herramienta #1 de debugging. Aprende las tres formas y cuándo usar cada una:"}),a.jsx(N,{filename:"FormasDeImprimir.java",code:`
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
`}),a.jsxs(ne,{title:"¿Cuándo uso printf vs println con concatenación?",children:[a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"println + concatenación"}),": Para mensajes simples y debugging rápido. Es lo que usarás el 90% del tiempo al principio."]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"printf"}),": Cuando necesitas control de formato — como mostrar decimales con exactamente 2 posiciones (",a.jsx("code",{className:"text-primary",children:"%.2f"}),"), alinear columnas, o construir salidas tabulares. Es como el template literal de TypeScript pero más potente para números."]})]}),a.jsxs(Y,{type:"tip",title:"Formatos comunes de printf",children:[a.jsx("code",{className:"text-primary",children:"%s"})," = String, ",a.jsx("code",{className:"text-primary",children:"%d"})," = entero,"," ",a.jsx("code",{className:"text-primary",children:"%f"})," = decimal, ",a.jsx("code",{className:"text-primary",children:"%.2f"})," = 2 decimales,"," ",a.jsx("code",{className:"text-primary",children:"%n"})," = nueva línea, ",a.jsx("code",{className:"text-primary",children:"%b"})," = booleano,"," ",a.jsx("code",{className:"text-primary",children:"%10s"})," = alinear a 10 caracteres."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Comentarios — Documenta tu pensamiento"}),a.jsx(N,{filename:"Comentarios.java",code:`
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
`}),a.jsxs(Y,{type:"info",children:["En IntelliJ, escribe ",a.jsx("code",{className:"text-primary",children:"/**"})," justo arriba de un método y presiona Enter. IntelliJ genera automáticamente la estructura del Javadoc con los @param y @return."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Convenciones de nombres"}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Java tiene convenciones estrictas. No son obligatorias, pero ",a.jsx("strong",{className:"text-text",children:"todo el ecosistema Java las sigue"}),". Romperlas es como escribir JavaScript sin camelCase — funciona, pero nadie lo hace."]}),a.jsx(N,{filename:"Convenciones.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:['TypeScript usa las mismas convenciones: PascalCase para clases, camelCase para variables. Diferencia clave: en Angular a veces pones prefijo "I" en interfaces (',a.jsx("code",{className:"text-primary",children:"IUser"}),"). En Java ",a.jsx("strong",{children:"nunca"})," se hace eso."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Paquetes — Organizar tu código"}),a.jsxs(ne,{title:"¿Cómo pensar en los paquetes?",children:[a.jsxs("p",{children:["Un paquete es la ",a.jsx("strong",{className:"text-text",children:"dirección postal"})," de tu clase. Así como una dirección tiene país → ciudad → calle → número, un paquete tiene dominio → empresa → proyecto → módulo."]}),a.jsxs("p",{children:["La convención es usar tu dominio invertido: si tu sitio es ",a.jsx("code",{className:"text-primary",children:"miempresa.com"}),", tu paquete base es ",a.jsx("code",{className:"text-primary",children:"com.miempresa"}),". Y la carpeta física",a.jsx("strong",{className:"text-text",children:" debe coincidir"})," con el paquete."]})]}),a.jsx(N,{filename:"com/miempresa/modelo/Usuario.java",code:`
package com.miempresa.modelo;

import java.util.List;

public class Usuario {
    private String nombre;
    private int edad;
}
`}),a.jsx(N,{filename:"com/miempresa/servicio/UsuarioServicio.java",code:`
package com.miempresa.servicio;

import com.miempresa.modelo.Usuario;

public class UsuarioServicio {
    public Usuario buscarPorId(int id) {
        return new Usuario();
    }
}
`}),a.jsxs(Y,{type:"warning",children:["El paquete ",a.jsx("strong",{children:"debe coincidir con la estructura de carpetas"}),". Si tu paquete es"," ",a.jsx("code",{className:"text-primary",children:"com.miempresa.modelo"}),", el archivo debe estar en"," ",a.jsx("code",{className:"text-primary",children:"com/miempresa/modelo/"}),". IntelliJ crea las carpetas automáticamente."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Punto y coma, llaves y case-sensitive"}),a.jsx(N,{filename:"ReglasBasicas.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Palabras reservadas"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Java tiene 50+ palabras que NO puedes usar como nombres. No necesitas memorizarlas — IntelliJ te marcará error si intentas usar una. Pero conócelas de vista:"}),a.jsx("div",{className:"bg-surface-light border border-border rounded-xl p-4",children:a.jsx("div",{className:"flex flex-wrap gap-2",children:["abstract","assert","boolean","break","byte","case","catch","char","class","const","continue","default","do","double","else","enum","extends","final","finally","float","for","goto","if","implements","import","instanceof","int","interface","long","native","new","package","private","protected","public","return","short","static","strictfp","super","switch","synchronized","this","throw","throws","transient","try","void","volatile","while","var","record","sealed","permits","yield"].map(l=>a.jsx("span",{className:"bg-[#282c34] text-primary text-xs font-mono px-2 py-1 rounded",children:l},l))})})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 2"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Escríbelos tú mismo. No copies y pegues — tu memoria muscular importa."}),a.jsx(K,{number:1,title:"Tarjeta de presentación con printf",description:`Crea TarjetaPresentacion.java que use printf para imprimir:
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
}`,solutionFilename:"TarjetaPresentacion.java"}),a.jsx(K,{number:2,title:"Comentarios y Javadoc",description:`Crea Calculadora.java con:
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
}`,solutionFilename:"Calculadora.java"}),a.jsx(K,{number:3,title:"Tabla formateada con printf",description:`Crea TablaProductos.java que imprima una tabla con 3 productos:
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
}`,solutionFilename:"TablaProductos.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:`
git add .
git commit -m "dia-2: sintaxis basica, printf, comentarios, convenciones"
git push origin main
`}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",a.jsx("strong",{className:"text-text",children:"Día 3"}),": tipos de datos primitivos, casting, y la diferencia entre primitivos y objetos."]})]})})]})}function Dj(){return a.jsxs("div",{children:[a.jsx(oe,{day:3,title:"Tipos de Datos",duration:"50 min",commitMsg:"dia-3: tipos primitivos, wrappers, casting"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a entender la diferencia más fundamental de Java: primitivos vs objetos. También vas a aprender a convertir entre tipos sin perder datos."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Los 8 tipos primitivos"}),a.jsxs(ne,{title:"¿Por qué Java tiene tantos tipos de números?",children:[a.jsxs("p",{children:["En TypeScript solo existe ",a.jsx("code",{className:"text-primary",children:"number"})," para todo. En Java debes elegir el tipo exacto. ¿Por qué? ",a.jsx("strong",{className:"text-text",children:"Eficiencia y control"}),". Un ",a.jsx("code",{className:"text-primary",children:"byte"})," usa 1 byte de RAM; un ",a.jsx("code",{className:"text-primary",children:"long"})," usa 8. Cuando manejas millones de registros, esa diferencia importa."]}),a.jsxs("p",{children:["En la práctica, usarás ",a.jsx("code",{className:"text-primary",children:"int"})," para enteros y ",a.jsx("code",{className:"text-primary",children:"double"})," para decimales el 95% del tiempo. Los demás son para casos especiales (archivos binarios, rendimiento extremo, dinero)."]})]}),a.jsx("div",{className:"overflow-x-auto mb-6",children:a.jsxs("table",{className:"w-full text-sm text-text-muted",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-border",children:[a.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Tipo"}),a.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Tamaño"}),a.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Rango"}),a.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Valor por defecto"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"byte"}),a.jsx("td",{className:"py-2 px-3",children:"8 bits"}),a.jsx("td",{className:"py-2 px-3",children:"-128 a 127"}),a.jsx("td",{className:"py-2 px-3",children:"0"})]}),a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"short"}),a.jsx("td",{className:"py-2 px-3",children:"16 bits"}),a.jsx("td",{className:"py-2 px-3",children:"-32,768 a 32,767"}),a.jsx("td",{className:"py-2 px-3",children:"0"})]}),a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"int"}),a.jsx("td",{className:"py-2 px-3",children:"32 bits"}),a.jsx("td",{className:"py-2 px-3",children:"-2³¹ a 2³¹-1"}),a.jsx("td",{className:"py-2 px-3",children:"0"})]}),a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"long"}),a.jsx("td",{className:"py-2 px-3",children:"64 bits"}),a.jsx("td",{className:"py-2 px-3",children:"-2⁶³ a 2⁶³-1"}),a.jsx("td",{className:"py-2 px-3",children:"0L"})]}),a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"float"}),a.jsx("td",{className:"py-2 px-3",children:"32 bits"}),a.jsx("td",{className:"py-2 px-3",children:"±3.4 × 10³⁸"}),a.jsx("td",{className:"py-2 px-3",children:"0.0f"})]}),a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"double"}),a.jsx("td",{className:"py-2 px-3",children:"64 bits"}),a.jsx("td",{className:"py-2 px-3",children:"±1.7 × 10³⁰⁸"}),a.jsx("td",{className:"py-2 px-3",children:"0.0"})]}),a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"char"}),a.jsx("td",{className:"py-2 px-3",children:"16 bits"}),a.jsx("td",{className:"py-2 px-3",children:"0 a 65,535 (Unicode)"}),a.jsx("td",{className:"py-2 px-3",children:"'\\u0000'"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"boolean"}),a.jsx("td",{className:"py-2 px-3",children:"1 bit*"}),a.jsx("td",{className:"py-2 px-3",children:"true / false"}),a.jsx("td",{className:"py-2 px-3",children:"false"})]})]})]})}),a.jsx(N,{filename:"TiposPrimitivos.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["En TypeScript solo existe ",a.jsx("code",{className:"text-primary",children:"number"})," para TODOS los números (enteros y decimales). En Java debes elegir el tipo específico. Lo más común: ",a.jsx("code",{className:"text-primary",children:"int"})," para enteros y ",a.jsx("code",{className:"text-primary",children:"double"})," para decimales."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Tipos de Referencia"}),a.jsxs(ne,{title:"Primitivo vs Referencia — ¿Cuál es la diferencia real?",children:[a.jsxs("p",{children:["Imagina que un ",a.jsx("strong",{className:"text-text",children:"primitivo"})," es un post-it con un número escrito directamente. Si le sacas copia, tienes otro post-it independiente con el mismo número."]}),a.jsxs("p",{children:["Una ",a.jsx("strong",{className:"text-text",children:"referencia"})," es un post-it con una ",a.jsx("em",{children:"dirección"})," que apunta a una caja en un almacén. Si copias el post-it, ahora tienes dos post-its que apuntan a la ",a.jsx("em",{children:"misma"})," caja. Si alguien modifica el contenido de la caja desde un post-it, el otro también lo ve."]})]}),a.jsx(N,{filename:"TiposReferencia.java",code:`
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
`}),a.jsxs(Y,{type:"warning",title:"Primitivo vs Referencia — Diferencia clave",children:[a.jsx("strong",{children:"Primitivos"})," almacenan el valor directamente. Si copias una variable primitiva, copias el valor. ",a.jsx("strong",{children:"Referencias"})," almacenan una dirección de memoria. Si copias una variable de referencia, ambas apuntan al mismo objeto."]}),a.jsx(N,{filename:"PrimitivoVsReferencia.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Wrapper Classes (Clases Envolventes)"}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Cada tipo primitivo tiene una ",a.jsx("strong",{className:"text-text",children:"clase envolvente"})," (wrapper) que lo convierte en objeto. Son necesarios cuando necesitas usar primitivos con colecciones (List, Map, etc.)."]}),a.jsx(N,{filename:"WrapperClasses.java",code:`
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
`}),a.jsxs(Y,{type:"warning",children:[a.jsx("strong",{children:"Nunca uses == para comparar Wrapper objects"}),". Usa ",a.jsx("code",{className:"text-primary",children:".equals()"}),". El operador == compara las referencias (direcciones de memoria), no los valores. Excepción: Integer caches valores de -128 a 127, por lo que == funciona en ese rango, pero NO confíes en eso."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Casting (Conversión de tipos)"}),a.jsx(N,{filename:"Casting.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"var — Inferencia de tipos (Java 10+)"}),a.jsx(N,{filename:"InferenciaTipos.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:[a.jsx("code",{className:"text-primary",children:"var"})," en Java es similar a ",a.jsx("code",{className:"text-primary",children:"let"})," en TypeScript cuando no especificas el tipo. TypeScript también infiere tipos automáticamente. La diferencia es que Java solo permite ",a.jsx("code",{className:"text-primary",children:"var"})," en variables locales."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 3"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Crea cada archivo en IntelliJ, escríbelo tú mismo y ejecútalo."}),a.jsx(K,{number:1,title:"Explorador de tipos",description:`Crea ExploradorTipos.java que declare una variable de cada tipo primitivo y las imprima todas.
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
}`,solutionFilename:"ExploradorTipos.java"}),a.jsx(K,{number:2,title:"Casting peligroso",description:`Crea CastingDemo.java que demuestre:
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
}`,solutionFilename:"CastingDemo.java"}),a.jsx(K,{number:3,title:"Trampa de los Wrappers",description:`Crea WrapperTrampa.java que demuestre la trampa clásica de == vs .equals():
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
}`,solutionFilename:"WrapperTrampa.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:`
git add .
git commit -m "dia-3: tipos primitivos, wrappers, casting, var"
git push origin main
`}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",a.jsx("strong",{className:"text-text",children:"Día 4"}),": variables, constantes, scope y valores por defecto."]})]})})]})}function wj(){return a.jsxs("div",{children:[a.jsx(oe,{day:4,title:"Variables y Constantes",duration:"45 min",commitMsg:"dia-4: variables, final, scope, valores por defecto"}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy vas a dominar cómo Java maneja las variables: declaración, scope, constantes con",a.jsx("code",{className:"text-primary ml-1",children:"final"}),", y una trampa importante sobre valores por defecto."]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Declaración de Variables"}),a.jsxs(ne,{title:"¿Cómo pensar en las variables de Java vs TypeScript?",children:[a.jsxs("p",{children:["En TypeScript escribes ",a.jsx("code",{className:"text-primary",children:'let nombre: string = "Carlos"'})," — el tipo va",a.jsx("em",{children:" después"})," del nombre, separado por dos puntos."]}),a.jsxs("p",{children:["En Java escribes ",a.jsx("code",{className:"text-primary",children:'String nombre = "Carlos"'})," — el tipo va",a.jsx("em",{children:" antes"})," del nombre, sin dos puntos. Y no existe ",a.jsx("code",{className:"text-primary",children:"let"}),"ni ",a.jsx("code",{className:"text-primary",children:"const"}),". Java usa ",a.jsx("code",{className:"text-primary",children:"final"})," para constantes."]}),a.jsxs("p",{children:["La regla mental: ",a.jsx("strong",{className:"text-text",children:"tipo nombre = valor;"})," — siempre en ese orden."]})]}),a.jsx(N,{filename:"Variables.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["En TypeScript: ",a.jsx("code",{className:"text-primary",children:'let nombre: string = "Carlos"'}),". En Java: ",a.jsx("code",{className:"text-primary",children:'String nombre = "Carlos"'}),". En Java NO hay ",a.jsx("code",{className:"text-primary",children:"let"}),"/",a.jsx("code",{className:"text-primary",children:"const"}),"/",a.jsx("code",{className:"text-primary",children:"var"})," (bueno, ",a.jsx("code",{className:"text-primary",children:"var"})," desde Java 10, pero limitado a variables locales)."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Constantes con final"}),a.jsxs(ne,{title:"final = const de TypeScript... ¿pero con una trampa?",children:[a.jsxs("p",{children:[a.jsx("code",{className:"text-primary",children:"final"})," previene la ",a.jsx("strong",{className:"text-text",children:"reasignación"}),", no la ",a.jsx("strong",{className:"text-text",children:"mutación"}),". Es exactamente igual que ",a.jsx("code",{className:"text-primary",children:"const"}),"en JavaScript: puedes hacer ",a.jsx("code",{className:"text-primary",children:"const arr = [1,2,3]; arr[0] = 99;"})," sin error."]}),a.jsxs("p",{children:["Para constantes de clase, la convención es ",a.jsx("code",{className:"text-primary",children:"static final"})," +",a.jsx("strong",{className:"text-text",children:" MAYÚSCULAS_CON_GUIONES"}),"."]})]}),a.jsx(N,{filename:"Constantes.java",code:`
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
`}),a.jsxs(Y,{type:"warning",title:"final no hace inmutable",children:[a.jsx("code",{className:"text-primary",children:"final"})," solo previene ",a.jsx("strong",{children:"reasignación"}),". Si apunta a un array, lista u objeto, puedes modificar su contenido. Para inmutabilidad real, necesitarás ",a.jsx("code",{className:"text-primary",children:"Collections.unmodifiableList()"})," o",a.jsx("code",{className:"text-primary",children:" List.of()"})," (lo verás en colecciones)."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Scope — ¿Dónde vive cada variable?"}),a.jsxs(ne,{title:"Las 3 zonas de vida de una variable",children:[a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"Variable de clase (static)"})," — Vive mientras la clase exista. Compartida por todas las instancias."]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"Variable de instancia"})," — Vive mientras el objeto exista. Cada objeto tiene su propia copia."]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"Variable local"})," — Vive solo dentro del método o bloque donde fue declarada. Es la que más usarás al principio."]})]}),a.jsx(N,{filename:"Scope.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Valores por Defecto"}),a.jsx(N,{filename:"ValoresPorDefecto.java",code:`
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
`}),a.jsxs(Y,{type:"tip",children:[a.jsx("strong",{children:"Buena práctica:"})," Siempre inicializa tus variables al declararlas. No dependas de los valores por defecto — hace tu código más legible y menos propenso a bugs."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 4"}),a.jsx(K,{number:1,title:"Configuración de app",description:`Crea ConfigApp.java con constantes de configuración para una app imaginaria:
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
}`,solutionFilename:"ConfigApp.java"}),a.jsx(K,{number:2,title:"Scope detective",description:`Crea ScopeDetective.java que demuestre 3 niveles de scope:
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
}`,solutionFilename:"ScopeDetective.java"}),a.jsx(K,{number:3,title:"Calculadora de área con constantes",description:`Crea CalculadoraArea.java que:
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
}`,solutionFilename:"CalculadoraArea.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:`
git add .
git commit -m "dia-4: variables, constantes final, scope, valores por defecto"
git push origin main
`}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",a.jsx("strong",{className:"text-text",children:"Día 5"}),": operadores aritméticos, lógicos, de comparación y el operador ternario."]})]})})]})}function Lj(){return a.jsxs("div",{children:[a.jsx(oe,{day:5,title:"Operadores",duration:"45 min",commitMsg:"dia-5: operadores aritmeticos, logicos, comparacion, ternario"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a dominar todos los operadores de Java. La mayoría son idénticos a TypeScript, pero hay trampas importantes que debes conocer (especialmente con la división entera y la comparación de objetos)."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operadores Aritméticos"}),a.jsxs(ne,{title:"La trampa #1 de Java: la división entera",children:[a.jsxs("p",{children:["En TypeScript, ",a.jsx("code",{className:"text-primary",children:"10 / 3"})," da ",a.jsx("code",{className:"text-primary",children:"3.333..."}),". En Java, ",a.jsx("code",{className:"text-primary",children:"10 / 3"})," da ",a.jsx("code",{className:"text-primary",children:"3"}),". Punto. Sin decimales."]}),a.jsxs("p",{children:["¿Por qué? Porque ambos operandos son ",a.jsx("code",{className:"text-primary",children:"int"}),", así que Java hace ",a.jsx("strong",{className:"text-text",children:"división entera"}),". Para obtener decimales, al menos uno debe ser ",a.jsx("code",{className:"text-primary",children:"double"}),":",a.jsx("code",{className:"text-primary",children:" 10.0 / 3"})," o ",a.jsx("code",{className:"text-primary",children:"(double) 10 / 3"}),"."]})]}),a.jsx(N,{filename:"Aritmeticos.java",code:`
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
`}),a.jsxs(Y,{type:"warning",children:[a.jsx("strong",{children:"División entera:"})," ",a.jsx("code",{className:"text-primary",children:"10 / 3 = 3"})," (no 3.33). Java trunca los decimales cuando ambos operandos son enteros. Si necesitas decimales, usa ",a.jsx("code",{className:"text-primary",children:"double"})," o haz un cast."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operadores de Asignación"}),a.jsx(N,{filename:"Asignacion.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operadores de Comparación"}),a.jsx(N,{filename:"Comparacion.java",code:`
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
`}),a.jsxs(ne,{title:"== vs .equals() — La trampa #2 más común",children:[a.jsxs("p",{children:["En TypeScript tienes ",a.jsx("code",{className:"text-primary",children:"==="})," (estricto) y ",a.jsx("code",{className:"text-primary",children:"=="})," (flexible). En Java solo existe ",a.jsx("code",{className:"text-primary",children:"=="}),"."]}),a.jsxs("p",{children:["Para ",a.jsx("strong",{className:"text-text",children:"primitivos"})," (int, double, boolean): ",a.jsx("code",{className:"text-primary",children:"=="})," compara ",a.jsx("em",{children:"valores"}),". Funciona perfecto."]}),a.jsxs("p",{children:["Para ",a.jsx("strong",{className:"text-text",children:"objetos"})," (String, Integer, etc.): ",a.jsx("code",{className:"text-primary",children:"=="})," compara ",a.jsx("em",{children:"referencias"})," (direcciones de memoria). Usa ",a.jsx("code",{className:"text-primary",children:".equals()"})," para comparar contenido. Esta es una fuente constante de bugs en código Java de principiantes."]})]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operadores Lógicos"}),a.jsx(N,{filename:"Logicos.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"instanceof — Verificar tipo"}),a.jsx(N,{filename:"InstanceOf.java",code:`
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
`}),a.jsxs(Y,{type:"tip",children:["El pattern matching con ",a.jsx("code",{className:"text-primary",children:"instanceof"})," (Java 16+) es una mejora muy útil que elimina la necesidad de hacer cast manual después de verificar el tipo."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Precedencia de Operadores"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"De mayor a menor prioridad:"}),a.jsx("div",{className:"bg-surface-light border border-border rounded-xl p-4 text-sm text-text-muted",children:a.jsxs("ol",{className:"space-y-1 list-decimal list-inside",children:[a.jsxs("li",{children:[a.jsx("code",{className:"text-primary",children:"() [] ."})," — Paréntesis, acceso"]}),a.jsxs("li",{children:[a.jsx("code",{className:"text-primary",children:"++ -- ! ~"})," — Unarios"]}),a.jsxs("li",{children:[a.jsx("code",{className:"text-primary",children:"* / %"})," — Multiplicación, división, módulo"]}),a.jsxs("li",{children:[a.jsx("code",{className:"text-primary",children:"+ -"})," — Suma, resta"]}),a.jsxs("li",{children:[a.jsx("code",{className:"text-primary",children:"< > <= >= instanceof"})," — Comparación"]}),a.jsxs("li",{children:[a.jsx("code",{className:"text-primary",children:"== !="})," — Igualdad"]}),a.jsxs("li",{children:[a.jsx("code",{className:"text-primary",children:"&&"})," — AND lógico"]}),a.jsxs("li",{children:[a.jsx("code",{className:"text-primary",children:"||"})," — OR lógico"]}),a.jsxs("li",{children:[a.jsx("code",{className:"text-primary",children:"?:"})," — Ternario"]}),a.jsxs("li",{children:[a.jsx("code",{className:"text-primary",children:"= += -= *= /="})," — Asignación"]})]})}),a.jsxs(Y,{type:"tip",children:["Cuando tengas dudas sobre precedencia, ",a.jsx("strong",{children:"usa paréntesis"}),". Hacen tu código más legible y evitan errores sutiles."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 5"}),a.jsx(K,{number:1,title:"Calculadora completa",description:`Crea MiniCalculadora.java con métodos static para las 4 operaciones básicas:
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
}`,solutionFilename:"MiniCalculadora.java"}),a.jsx(K,{number:2,title:"Clasificador con ternarios anidados",description:`Crea Clasificador.java con un método static clasificarNota(int nota) que use
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
}`,solutionFilename:"Clasificador.java"}),a.jsx(K,{number:3,title:"Validador con short-circuit",description:`Crea Validador.java con un método static validarUsuario(String nombre, int edad) que:
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
}`,solutionFilename:"Validador.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:`
git add .
git commit -m "dia-5: operadores aritmeticos, logicos, comparacion, ternario, instanceof"
git push origin main
`}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",a.jsx("strong",{className:"text-text",children:"Día 6"}),": Strings — inmutabilidad, métodos esenciales, StringBuilder y formateo."]})]})})]})}function zj(){return a.jsxs("div",{children:[a.jsx(oe,{day:6,title:"Strings",duration:"50 min",commitMsg:"dia-6: strings, inmutabilidad, metodos, StringBuilder"}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy vas a dominar Strings — el tipo de dato que más usarás en Java. La clave es entender que son ",a.jsx("strong",{className:"text-text",children:"inmutables"})," y cuándo usar ",a.jsx("code",{className:"text-primary",children:"StringBuilder"}),"."]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Crear Strings"}),a.jsxs(ne,{title:"¿Por qué los Strings son inmutables?",children:[a.jsxs("p",{children:["En TypeScript/JavaScript, los strings también son inmutables, pero casi nadie lo piensa. En Java es ",a.jsx("strong",{className:"text-text",children:"crucial"}),' porque afecta rendimiento: cada vez que "modificas" un String con ',a.jsx("code",{className:"text-primary",children:"+"}),", se crea un objeto nuevo en memoria."]}),a.jsxs("p",{children:["Si concatenas en un bucle de 10,000 iteraciones, creas 10,000 objetos String. Por eso existe",a.jsx("code",{className:"text-primary",children:" StringBuilder"}),": modifica el mismo objeto internamente."]})]}),a.jsx(N,{filename:"CrearStrings.java",code:`
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
`}),a.jsxs(Y,{type:"warning",title:"String es inmutable",children:['Cada vez que "modificas" un String, se crea uno nuevo en memoria. Para muchas concatenaciones en un bucle, usa ',a.jsx("code",{className:"text-primary",children:"StringBuilder"})," (más eficiente)."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Métodos esenciales de String"}),a.jsx(N,{filename:"MetodosString.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Formatear Strings"}),a.jsx(N,{filename:"FormatearStrings.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"StringBuilder — Para concatenaciones eficientes"}),a.jsx(N,{filename:"StringBuilderEjemplo.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["En TypeScript/JavaScript, los template literals (",a.jsx("code",{className:"text-primary",children:"`${variable}`"}),") son la forma estándar de formatear strings. En Java usas ",a.jsx("code",{className:"text-primary",children:"String.format()"}),", el operador ",a.jsx("code",{className:"text-primary",children:"+"}),", o ",a.jsx("code",{className:"text-primary",children:"StringBuilder"})," para casos de rendimiento."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 6"}),a.jsx(K,{number:1,title:"Procesador de nombres",description:`Crea ProcesadorNombres.java con un método static procesarNombre(String nombreCompleto) que:
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
}`,solutionFilename:"ProcesadorNombres.java"}),a.jsx(K,{number:2,title:"Analizador de texto",description:`Crea AnalizadorTexto.java con un método static analizarTexto(String texto) que imprima:
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
}`,solutionFilename:"AnalizadorTexto.java"}),a.jsx(K,{number:3,title:"Generador de email",description:`Crea GeneradorEmail.java con un método static generarEmail(String nombre, String apellido, String empresa) que:
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
}`,solutionFilename:"GeneradorEmail.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:`
git add .
git commit -m "dia-6: strings, inmutabilidad, metodos, StringBuilder, formateo"
git push origin main
`}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",a.jsx("strong",{className:"text-text",children:"Día 7"}),": condicionales — if/else, switch, y pattern matching."]})]})})]})}function _j(){return a.jsxs("div",{children:[a.jsx(oe,{day:7,title:"Condicionales",duration:"45 min",commitMsg:"dia-7: if-else, switch clasico y moderno, ternario"}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy vas a aprender a tomar decisiones en tu código. Los condicionales son idénticos a TypeScript en su forma básica, pero Java tiene un ",a.jsx("strong",{className:"text-text",children:"switch moderno"})," muy poderoso."]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"if / else if / else"}),a.jsx(N,{filename:"Condicionales.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operador Ternario"}),a.jsx(N,{filename:"Ternario.java",code:`
// Sintaxis: condición ? valorSiTrue : valorSiFalse
int edad = 20;
String resultado = (edad >= 18) ? "Mayor" : "Menor";

int a = 10, b = 20;
int mayor = (a > b) ? a : b; // 20
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"switch (clásico y moderno)"}),a.jsx(N,{filename:"SwitchEjemplo.java",code:`
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
`}),a.jsxs(ne,{title:"¿Cuándo usar switch clásico vs moderno?",children:[a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"Switch clásico"})," (con break): solo si estás en Java 13 o menos, o si necesitas fall-through intencional (raro)."]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"Switch moderno"})," (con arrow →): siempre que puedas (Java 14+). Es más seguro (no hay bugs de break olvidado), más limpio, y puede retornar un valor directamente."]})]}),a.jsxs(Y,{type:"angular",children:["TypeScript no tiene switch con arrow syntax. El switch moderno de Java 14+ con ",a.jsx("code",{className:"text-primary",children:"->"})," es más limpio y seguro que el switch clásico porque no necesita ",a.jsx("code",{className:"text-primary",children:"break"}),"."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 7"}),a.jsx(K,{number:1,title:"Clasificador de IMC",description:`Crea ClasificadorIMC.java con un método static clasificar(double peso, double altura):
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
}`,solutionFilename:"ClasificadorIMC.java"}),a.jsx(K,{number:2,title:"Traductor de día con switch moderno",description:`Crea TraductorDia.java que use switch moderno (arrow syntax) para:
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
}`,solutionFilename:"TraductorDia.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:`
git add .
git commit -m "dia-7: condicionales if-else, switch clasico y moderno, ternario"
git push origin main
`}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",a.jsx("strong",{className:"text-text",children:"Día 8"}),": bucles — for, while, do-while, for-each, break y continue."]})]})})]})}function Uj(){return a.jsxs("div",{children:[a.jsx(oe,{day:8,title:"Bucles",duration:"50 min",commitMsg:"dia-8: for, while, do-while, for-each, break, continue"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a dominar las 4 formas de repetir código en Java. Además aprenderás cuándo usar cada una — algo que muchos cursos no explican."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Bucle for"}),a.jsxs(ne,{title:"¿Cuándo usar cada tipo de bucle?",children:[a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"for clásico"})," — Cuando sabes cuántas iteraciones necesitas, o cuando necesitas el índice."]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"for-each"})," — Cuando recorres una colección completa y NO necesitas el índice. Es más limpio."]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"while"})," — Cuando no sabes cuántas iteraciones habrá (ej: leer un archivo hasta el final)."]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"do-while"})," — Cuando necesitas ejecutar al menos una vez (ej: menú interactivo)."]})]}),a.jsx(N,{filename:"BucleFor.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"for-each (Enhanced for)"}),a.jsx(N,{filename:"ForEach.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["El for-each de Java (",a.jsx("code",{className:"text-primary",children:"for (Type item : collection)"}),") es como el ",a.jsx("code",{className:"text-primary",children:"for...of"})," de TypeScript/JavaScript."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"while y do-while"}),a.jsx(N,{filename:"While.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"break y continue"}),a.jsx(N,{filename:"BreakContinue.java",code:`
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
`}),a.jsxs(Y,{type:"tip",children:["El ",a.jsx("code",{className:"text-primary",children:"break"})," con etiqueta es útil pero poco común. Si lo necesitas frecuentemente, considera refactorizar tu código en métodos separados."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 8"}),a.jsx(K,{number:1,title:"FizzBuzz",description:`El clásico FizzBuzz. Crea FizzBuzz.java que imprima los números del 1 al 30:
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
}`,solutionFilename:"FizzBuzz.java"}),a.jsx(K,{number:2,title:"Tabla de multiplicar",description:`Crea TablaMultiplicar.java que:
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
}`,solutionFilename:"TablaMultiplicar.java"}),a.jsx(K,{number:3,title:"Números primos",description:`Crea BuscadorPrimos.java con:
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
}`,solutionFilename:"BuscadorPrimos.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:`
git add .
git commit -m "dia-8: bucles for, while, do-while, for-each, FizzBuzz, primos"
git push origin main
`}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",a.jsx("strong",{className:"text-text",children:"Día 9"}),": arrays — declaración, iteración, multidimensionales y java.util.Arrays."]})]})})]})}function Bj(){return a.jsxs("div",{children:[a.jsx(oe,{day:9,title:"Arrays",duration:"50 min",commitMsg:"dia-9: arrays, multidimensionales, java.util.Arrays"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a dominar arrays — la estructura de datos más básica de Java. Son de tamaño fijo, pero son la base para entender colecciones dinámicas después."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Declarar y crear Arrays"}),a.jsxs(ne,{title:"Arrays en Java vs TypeScript — diferencia clave",children:[a.jsxs("p",{children:["En TypeScript, los arrays son ",a.jsx("strong",{className:"text-text",children:"dinámicos"}),": puedes hacer",a.jsx("code",{className:"text-primary",children:" arr.push()"}),", ",a.jsx("code",{className:"text-primary",children:".pop()"}),", y el tamaño cambia."]}),a.jsxs("p",{children:["En Java, los arrays tienen ",a.jsx("strong",{className:"text-text",children:"tamaño fijo"}),". Una vez creados con",a.jsx("code",{className:"text-primary",children:" new int[5]"}),", siempre tendrán 5 elementos. Si necesitas algo dinámico, usarás ",a.jsx("code",{className:"text-primary",children:"ArrayList"})," (Día 17). Pero primero domina los arrays — son la base."]})]}),a.jsx(N,{filename:"Arrays.java",code:`
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
`}),a.jsxs(Y,{type:"warning",children:["Los arrays en Java tienen ",a.jsx("strong",{children:"tamaño fijo"}),". Una vez creados, no puedes agregar ni quitar elementos. Si necesitas una colección dinámica, usa ",a.jsx("code",{className:"text-primary",children:"ArrayList"}),"."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Arrays multidimensionales"}),a.jsx(N,{filename:"ArraysMulti.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Clase java.util.Arrays"}),a.jsx(N,{filename:"ArraysUtil.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["En TypeScript los arrays son dinámicos y tienen métodos como ",a.jsx("code",{className:"text-primary",children:".push()"}),",",a.jsx("code",{className:"text-primary",children:".map()"}),", ",a.jsx("code",{className:"text-primary",children:".filter()"}),". En Java los arrays primitivos son fijos. Para funcionalidad similar usa ",a.jsx("code",{className:"text-primary",children:"ArrayList"})," y ",a.jsx("code",{className:"text-primary",children:"Streams"}),"."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 9"}),a.jsx(K,{number:1,title:"Estadísticas de array",description:`Crea EstadisticasArray.java con métodos static que reciban un int[] y retornen:
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
}`,solutionFilename:"EstadisticasArray.java"}),a.jsx(K,{number:2,title:"Invertir array",description:`Crea InvertirArray.java con un método static invertir(int[] arr) que:
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
}`,solutionFilename:"InvertirArray.java"}),a.jsx(K,{number:3,title:"Matriz transpuesta",description:`Crea MatrizTranspuesta.java que:
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
}`,solutionFilename:"MatrizTranspuesta.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:`
git add .
git commit -m "dia-9: arrays, multidimensionales, java.util.Arrays, invertir, transponer"
git push origin main
`}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",a.jsx("strong",{className:"text-text",children:"Día 10"}),": métodos — parámetros, retorno, overloading, varargs y paso por valor."]})]})})]})}function kj(){return a.jsxs("div",{children:[a.jsx(oe,{day:10,title:"Métodos",duration:"50 min",commitMsg:"dia-10: metodos, overloading, varargs, paso por valor"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a aprender a crear métodos — las funciones de Java. Dominar métodos es clave porque en OOP, todo el comportamiento se define con métodos."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Definir y llamar métodos"}),a.jsxs(ne,{title:"Métodos en Java vs funciones en TypeScript",children:[a.jsxs("p",{children:["En TypeScript puedes tener funciones sueltas: ",a.jsxs("code",{className:"text-primary",children:["function sumar(a: number, b: number) ","{}"]}),". En Java, ",a.jsx("strong",{className:"text-text",children:"todo método debe vivir dentro de una clase"}),"."]}),a.jsxs("p",{children:[a.jsx("code",{className:"text-primary",children:"static"})," permite llamar al método sin crear un objeto. Sin ",a.jsx("code",{className:"text-primary",children:"static"}),", necesitas hacer ",a.jsx("code",{className:"text-primary",children:"new MiClase().miMetodo()"}),". Por ahora usarás ",a.jsx("code",{className:"text-primary",children:"static"}),"; cuando lleguemos a OOP, entenderás cuándo no usarlo."]})]}),a.jsx(N,{filename:"Metodos.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["En TypeScript defines funciones con ",a.jsx("code",{className:"text-primary",children:"function"})," o arrow functions. En Java todo método debe estar dentro de una clase. ",a.jsx("code",{className:"text-primary",children:"static"})," permite llamar al método sin crear una instancia de la clase."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Sobrecarga de métodos (Overloading)"}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Puedes tener varios métodos con el ",a.jsx("strong",{className:"text-text",children:"mismo nombre"})," pero",a.jsx("strong",{className:"text-text",children:" diferentes parámetros"}),"."]}),a.jsx(N,{filename:"Sobrecarga.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Varargs (argumentos variables)"}),a.jsx(N,{filename:"Varargs.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Paso por valor vs referencia"}),a.jsx(N,{filename:"PasoPorValor.java",code:`
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
`}),a.jsxs(Y,{type:"info",children:["Java es siempre ",a.jsx("strong",{children:"paso por valor"}),". Para primitivos copia el valor. Para objetos copia la referencia — por eso puedes modificar el contenido del objeto pero no reasignar la variable original."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 10"}),a.jsx(K,{number:1,title:"Utilidades matemáticas",description:`Crea MathUtils.java con métodos static sobrecargados:
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
}`,solutionFilename:"MathUtils.java"}),a.jsx(K,{number:2,title:"Constructor de mensajes con varargs",description:`Crea MensajeBuilder.java con:
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
}`,solutionFilename:"MensajeBuilder.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:`
git add .
git commit -m "dia-10: metodos, overloading, varargs, paso por valor"
git push origin main
`}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",a.jsx("strong",{className:"text-text",children:"Día 11"}),": clases y objetos — constructores, this, static, toString."]})]})})]})}function qj(){return a.jsxs("div",{children:[a.jsx(oe,{day:11,title:"Clases y Objetos",duration:"60 min",commitMsg:"dia-11: clases, objetos, constructores, this, static, equals"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy entras al corazón de Java: la Programación Orientada a Objetos. Una clase es un plano, un objeto es una instancia concreta. Dominar esto cambia tu forma de pensar en código."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es una Clase?"}),a.jsxs(ne,{title:"Clase = TypeScript class, pero con superpoderes",children:[a.jsxs("p",{children:["En TypeScript/Angular ya usas clases. En Java la idea es la misma: ",a.jsx("strong",{className:"text-text",children:"campos"})," (propiedades) + ",a.jsx("strong",{className:"text-text",children:"métodos"})," (comportamiento). La diferencia clave: en Java el constructor se llama con el ",a.jsx("em",{children:"nombre de la clase"}),", no con ",a.jsx("code",{className:"text-primary",children:"constructor()"}),"."]}),a.jsxs("p",{children:["Además, Java requiere ",a.jsx("strong",{className:"text-text",children:"un archivo por clase pública"}),". Si la clase se llama ",a.jsx("code",{className:"text-primary",children:"Persona"}),", el archivo debe llamarse ",a.jsx("code",{className:"text-primary",children:"Persona.java"}),"."]})]}),a.jsx(N,{filename:"Persona.java",code:`
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
`}),a.jsx(N,{filename:"Main.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["En TypeScript/Angular defines clases igual con ",a.jsx("code",{className:"text-primary",children:"class"}),". La diferencia principal es que Java requiere un archivo por clase pública y el constructor se llama con el nombre de la clase (no ",a.jsx("code",{className:"text-primary",children:"constructor()"}),")."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"this, static y final"}),a.jsx(N,{filename:"Conceptos.java",code:`
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
`}),a.jsxs(Y,{type:"info",children:[a.jsx("strong",{children:"static"})," = pertenece a la clase, no a la instancia. No necesitas crear un objeto.",a.jsx("strong",{children:" this"})," = referencia a la instancia actual. ",a.jsx("strong",{children:"final"})," = constante, no se puede reasignar."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Getters, Setters y equals"}),a.jsx(N,{filename:"Producto.java",code:`
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
`}),a.jsxs(Y,{type:"warning",children:["Si sobreescribes ",a.jsx("code",{className:"text-primary",children:"equals()"}),", ",a.jsx("strong",{children:"siempre"})," sobreescribe también ",a.jsx("code",{className:"text-primary",children:"hashCode()"}),". Es un contrato de Java — objetos iguales deben tener el mismo hashCode. Si no lo haces, las colecciones como HashMap fallarán."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 11"}),a.jsx(K,{number:1,title:"Clase CuentaBancaria",description:`Crea CuentaBancaria.java con:
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
}`,solutionFilename:"CuentaBancaria.java"}),a.jsx(K,{number:2,title:"Contador con static",description:`Crea Estudiante.java con:
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
}`,solutionFilename:"Estudiante.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:`
git add .
git commit -m "dia-11: clases, objetos, constructores, this, static, getters, equals"
git push origin main
`}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",a.jsx("strong",{className:"text-text",children:"Día 12"}),": encapsulamiento — modificadores de acceso, validación en setters."]})]})})]})}function Pj(){return a.jsxs("div",{children:[a.jsx(oe,{day:12,title:"Encapsulamiento",duration:"45 min",commitMsg:"dia-12: encapsulamiento, modificadores de acceso, getters/setters"}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy vas a aprender a proteger los datos internos de tus clases. La regla de oro: campos ",a.jsx("code",{className:"text-primary",children:"private"}),", acceso controlado con getters/setters."]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Modificadores de Acceso"}),a.jsxs(ne,{title:"¿Por qué no hacer todo public?",children:[a.jsxs("p",{children:["En TypeScript puedes acceder a cualquier propiedad de un objeto. En Java, la filosofía es diferente:",a.jsx("strong",{className:"text-text",children:" esconde todo lo que puedas"}),". Si alguien puede modificar tu",a.jsx("code",{className:"text-primary",children:" saldo"})," directamente con ",a.jsx("code",{className:"text-primary",children:"cuenta.saldo = -1000"}),", tu lógica de negocio no sirve de nada."]}),a.jsxs("p",{children:["La regla: ",a.jsx("strong",{className:"text-text",children:"campos siempre private"}),", métodos public solo los necesarios."]})]}),a.jsx("div",{className:"overflow-x-auto mb-6",children:a.jsxs("table",{className:"w-full text-sm text-text-muted",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-border",children:[a.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Modificador"}),a.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Misma clase"}),a.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Mismo paquete"}),a.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Subclase"}),a.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Cualquiera"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"public"}),a.jsx("td",{className:"py-2 px-3",children:"✅"}),a.jsx("td",{className:"py-2 px-3",children:"✅"}),a.jsx("td",{className:"py-2 px-3",children:"✅"}),a.jsx("td",{className:"py-2 px-3",children:"✅"})]}),a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"protected"}),a.jsx("td",{className:"py-2 px-3",children:"✅"}),a.jsx("td",{className:"py-2 px-3",children:"✅"}),a.jsx("td",{className:"py-2 px-3",children:"✅"}),a.jsx("td",{className:"py-2 px-3",children:"❌"})]}),a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"(default)"}),a.jsx("td",{className:"py-2 px-3",children:"✅"}),a.jsx("td",{className:"py-2 px-3",children:"✅"}),a.jsx("td",{className:"py-2 px-3",children:"❌"}),a.jsx("td",{className:"py-2 px-3",children:"❌"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"private"}),a.jsx("td",{className:"py-2 px-3",children:"✅"}),a.jsx("td",{className:"py-2 px-3",children:"❌"}),a.jsx("td",{className:"py-2 px-3",children:"❌"}),a.jsx("td",{className:"py-2 px-3",children:"❌"})]})]})]})})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Encapsulamiento en práctica"}),a.jsx(N,{filename:"CuentaBancaria.java",code:`
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
`}),a.jsx(N,{filename:"UsoCuenta.java",code:`
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
`}),a.jsxs(Y,{type:"tip",title:"¿Por qué encapsular?",children:[a.jsx("strong",{children:"1."})," Proteges los datos de modificaciones no controladas."," ",a.jsx("strong",{children:"2."})," Puedes agregar validación en setters."," ",a.jsx("strong",{children:"3."})," Puedes cambiar la implementación interna sin afectar el código que usa tu clase."," ",a.jsx("strong",{children:"4."})," Es el principio fundamental de OOP."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 12"}),a.jsx(K,{number:1,title:"Clase Producto encapsulada",description:`Crea Producto.java con:
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
}`,solutionFilename:"Producto.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:`
git add .
git commit -m "dia-12: encapsulamiento, modificadores de acceso, validacion en setters"
git push origin main
`}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",a.jsx("strong",{className:"text-text",children:"Día 13"}),": herencia — extends, super, @Override, clases abstractas."]})]})})]})}function Hj(){return a.jsxs("div",{children:[a.jsx(oe,{day:13,title:"Herencia",duration:"60 min",commitMsg:"dia-13: herencia, extends, super, override, clases abstractas"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a aprender a reutilizar código con herencia. Una clase hija hereda todo de la padre y puede agregar o sobrescribir comportamiento."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"extends — Heredar de una clase"}),a.jsxs(ne,{title:"Herencia = 'es un'. ¿Cuándo usarla?",children:[a.jsxs("p",{children:["Un ",a.jsx("code",{className:"text-primary",children:"Perro"})," ",a.jsx("strong",{className:"text-text",children:"es un"}),a.jsx("code",{className:"text-primary",children:" Animal"}),". Un ",a.jsx("code",{className:"text-primary",children:"Círculo"}),a.jsx("strong",{className:"text-text",children:" es una"})," ",a.jsx("code",{className:"text-primary",children:"Figura"}),'. Si la relación "es un" tiene sentido, herencia es apropiada.']}),a.jsxs("p",{children:["Java solo permite ",a.jsx("strong",{className:"text-text",children:"herencia simple"}),': una clase extiende UNA sola clase padre. Para "herencia múltiple", usarás interfaces (Día 15).']})]}),a.jsx(N,{filename:"Herencia.java",code:`
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
`}),a.jsx(N,{filename:"Main.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"super y @Override"}),a.jsx(N,{filename:"SuperYOverride.java",code:`
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
`}),a.jsxs(Y,{type:"warning",children:["Java solo permite ",a.jsx("strong",{children:"herencia simple"}),": una clase solo puede extender UNA clase padre. No existe herencia múltiple de clases (pero sí puedes implementar múltiples interfaces)."]}),a.jsxs(Y,{type:"angular",children:["TypeScript también usa ",a.jsx("code",{className:"text-primary",children:"extends"})," para herencia y tiene la misma limitación de herencia simple. La diferencia es que Java tiene ",a.jsx("code",{className:"text-primary",children:"@Override"})," como anotación explícita y ",a.jsx("code",{className:"text-primary",children:"super"})," funciona igual."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Clases Abstractas"}),a.jsx(N,{filename:"ClaseAbstracta.java",code:`
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
`}),a.jsxs(Y,{type:"tip",children:["Usa clases abstractas cuando quieras definir un ",a.jsx("strong",{children:"comportamiento común"})," + obligar a las subclases a implementar ciertos métodos. Es un punto medio entre una clase normal y una interfaz."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 13"}),a.jsx(K,{number:1,title:"Jerarquía de empleados",description:`Crea una jerarquía:
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
}`,solutionFilename:"Empleado.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:`
git add .
git commit -m "dia-13: herencia, extends, super, override, clases abstractas"
git push origin main
`}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",a.jsx("strong",{className:"text-text",children:"Día 14"}),": polimorfismo — upcasting, downcasting, instanceof, pattern matching."]})]})})]})}function Ij(){return a.jsxs("div",{children:[a.jsx(oe,{day:14,title:"Polimorfismo",duration:"50 min",commitMsg:"dia-14: polimorfismo, upcasting, downcasting, instanceof"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy entenderás el concepto más poderoso de OOP: un mismo método se comporta diferente según el objeto real. Esto es lo que hace que OOP sea tan flexible."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es el Polimorfismo?"}),a.jsxs(ne,{title:"Polimorfismo = 'muchas formas'",children:[a.jsxs("p",{children:["Imagina un método ",a.jsx("code",{className:"text-primary",children:"alimentar(Animal animal)"}),". Puedes pasarle un Perro, un Gato, o cualquier subtipo de Animal. Java ejecutará el método ",a.jsx("code",{className:"text-primary",children:"comer()"}),"correcto ",a.jsx("strong",{className:"text-text",children:"según el tipo real del objeto"}),", no el tipo de la variable."]}),a.jsx("p",{children:"Esto te permite escribir código genérico que funciona con cualquier subtipo. Es la base de los frameworks como Spring."})]}),a.jsx(N,{filename:"Polimorfismo.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Casting de objetos"}),a.jsx(N,{filename:"CastingObjetos.java",code:`
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
`}),a.jsxs(Y,{type:"tip",children:["Siempre verifica con ",a.jsx("code",{className:"text-primary",children:"instanceof"})," antes de hacer downcasting. El pattern matching de Java 16+ combina la verificación y el cast en una sola línea."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 14"}),a.jsx(K,{number:1,title:"Sistema de pagos polimórfico",description:`Crea una jerarquía de pagos:
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
}`,solutionFilename:"MetodoPago.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:`
git add .
git commit -m "dia-14: polimorfismo, upcasting, downcasting, instanceof"
git push origin main
`}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",a.jsx("strong",{className:"text-text",children:"Día 15"}),": interfaces — contratos, default methods, implementación múltiple."]})]})})]})}function Jj(){return a.jsxs("div",{children:[a.jsx(oe,{day:15,title:"Interfaces",duration:"50 min",commitMsg:"dia-15: interfaces, default methods, funcionales, lambdas intro"}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy aprenderás interfaces — los contratos de Java. A diferencia de las clases abstractas, puedes implementar ",a.jsx("strong",{className:"text-text",children:"múltiples"})," interfaces. Son fundamentales para Spring."]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Definir e implementar"}),a.jsxs(ne,{title:"Interface = contrato. ¿Cuándo usarla?",children:[a.jsxs("p",{children:["En TypeScript, las interfaces son solo contratos de tipos (sin código). En Java, las interfaces pueden tener ",a.jsx("code",{className:"text-primary",children:"default"})," methods con implementación real (desde Java 8)."]}),a.jsxs("p",{children:["Usa interfaces cuando una clase necesita ",a.jsx("strong",{className:"text-text",children:"capacidades"})," múltiples: un Pato puede ser ",a.jsx("code",{className:"text-primary",children:"Volable"})," y ",a.jsx("code",{className:"text-primary",children:"Nadable"}),". Con herencia solo podrías elegir una."]})]}),a.jsx(N,{filename:"Volable.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["Las interfaces de Java son como las de TypeScript pero con una diferencia clave: en Java pueden tener métodos ",a.jsx("code",{className:"text-primary",children:"default"})," con implementación y métodos ",a.jsx("code",{className:"text-primary",children:"static"}),". En TS las interfaces son solo contratos de tipos."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Interfaces funcionales"}),a.jsx(N,{filename:"InterfazFuncional.java",code:`
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
`}),a.jsxs(Y,{type:"tip",children:[a.jsx("code",{className:"text-primary",children:"@FunctionalInterface"})," es opcional pero recomendada. Le dice al compilador que la interfaz debe tener exactamente un método abstracto. Son la base de las lambdas y Streams en Java."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Interface vs Clase abstracta"}),a.jsx("div",{className:"overflow-x-auto mb-6",children:a.jsxs("table",{className:"w-full text-sm text-text-muted",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-border",children:[a.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Característica"}),a.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Interface"}),a.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Clase Abstracta"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-2 px-3",children:"Múltiple herencia"}),a.jsx("td",{className:"py-2 px-3",children:"Sí (implements A, B)"}),a.jsx("td",{className:"py-2 px-3",children:"No (solo un extends)"})]}),a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-2 px-3",children:"Campos de instancia"}),a.jsx("td",{className:"py-2 px-3",children:"No (solo constantes)"}),a.jsx("td",{className:"py-2 px-3",children:"Sí"})]}),a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-2 px-3",children:"Constructores"}),a.jsx("td",{className:"py-2 px-3",children:"No"}),a.jsx("td",{className:"py-2 px-3",children:"Sí"})]}),a.jsxs("tr",{className:"border-b border-border/50",children:[a.jsx("td",{className:"py-2 px-3",children:"Métodos con cuerpo"}),a.jsx("td",{className:"py-2 px-3",children:"Solo default/static"}),a.jsx("td",{className:"py-2 px-3",children:"Sí"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"py-2 px-3",children:"Uso típico"}),a.jsx("td",{className:"py-2 px-3",children:"Definir capacidades"}),a.jsx("td",{className:"py-2 px-3",children:"Compartir código base"})]})]})]})})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 15"}),a.jsx(K,{number:1,title:"Sistema de notificaciones",description:`Crea interfaces Notificable con método enviar(String mensaje):
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
}`,solutionFilename:"Notificable.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-15: interfaces, default methods, funcionales"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 16"})," — clases abstractas en profundidad."]})]})})]})}function Vj(){return a.jsxs("div",{children:[a.jsx(oe,{day:16,title:"Clases Abstractas",duration:"45 min",commitMsg:"dia-16: clases abstractas, template method pattern"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy profundizamos en clases abstractas: el punto medio entre una clase normal y una interfaz. Pueden tener estado, constructores y métodos con implementación."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es una clase abstracta?"}),a.jsxs(ne,{title:"Abstracta vs Interface — ¿cuál usar?",children:[a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"Clase abstracta"}),": cuando las subclases comparten",a.jsx("em",{children:" estado"})," (campos) y ",a.jsx("em",{children:"código común"}),". Ejemplo: todas las figuras tienen color."]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"Interface"}),": cuando defines una ",a.jsx("em",{children:"capacidad"})," que clases no relacionadas pueden tener. Ejemplo: Volable lo puede implementar un Pato y un Avión."]})]}),a.jsx(N,{filename:"Figura.java",code:`
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
`}),a.jsx(N,{filename:"Main.java",code:`
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
`}),a.jsxs(Y,{type:"tip",children:["Usa clases abstractas cuando necesites ",a.jsx("strong",{children:"compartir código"})," entre clases relacionadas y al mismo tiempo obligar a implementar ciertos métodos. Si solo necesitas definir un contrato sin compartir código, usa una ",a.jsx("strong",{children:"interfaz"}),"."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 16"}),a.jsx(K,{number:1,title:"Template Method con Bebida",description:`Crea una clase abstracta Bebida con un template method preparer():
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
}`,solutionFilename:"Bebida.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-16: clases abstractas, template method pattern"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 17"})," — colecciones: List, Set, Map y la revolución dinámica."]})]})})]})}function Fj(){return a.jsxs("div",{children:[a.jsx(oe,{day:17,title:"Colecciones",duration:"60 min",commitMsg:"dia-17: ArrayList, HashMap, HashSet, List.of, Map.of"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy pasas de arrays fijos a colecciones dinámicas. List, Set y Map son las estructuras que usarás el 90% del tiempo en Java profesional."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"ArrayList — Lista dinámica"}),a.jsxs(ne,{title:"¿Por qué no usar arrays siempre?",children:[a.jsxs("p",{children:["Los arrays tienen tamaño fijo. ",a.jsx("code",{className:"text-primary",children:"ArrayList"})," crece y encoge dinámicamente, como los arrays de TypeScript. Además, las colecciones tienen métodos como",a.jsx("code",{className:"text-primary",children:" .contains()"}),", ",a.jsx("code",{className:"text-primary",children:".remove()"}),",",a.jsx("code",{className:"text-primary",children:".sort()"})," que simplifican mucho el código."]}),a.jsxs("p",{children:["Regla práctica: usa ",a.jsx("code",{className:"text-primary",children:"List<T>"})," como tipo de variable (interfaz) y ",a.jsx("code",{className:"text-primary",children:"new ArrayList<>()"})," como implementación."]})]}),a.jsx(N,{filename:"ListaEjemplo.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"HashMap — Diccionario clave-valor"}),a.jsx(N,{filename:"MapaEjemplo.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"HashSet — Conjunto sin duplicados"}),a.jsx(N,{filename:"SetEjemplo.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["En TypeScript usas arrays y objetos/Map. En Java hay una jerarquía completa de colecciones:",a.jsx("strong",{children:" List"})," (ordenada, con duplicados), ",a.jsx("strong",{children:"Set"})," (sin duplicados),",a.jsx("strong",{children:" Map"})," (clave-valor), ",a.jsx("strong",{children:"Queue"})," (FIFO). Todas son tipadas con generics."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 17"}),a.jsx(K,{number:1,title:"Contador de palabras con Map",description:`Crea ContadorPalabras.java que:
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
}`,solutionFilename:"ContadorPalabras.java"}),a.jsx(K,{number:2,title:"Agenda de contactos",description:`Crea Agenda.java con:
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
}`,solutionFilename:"Agenda.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-17: colecciones ArrayList, HashMap, HashSet"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 18"})," — excepciones: try-catch, throw, custom exceptions."]})]})})]})}function Gj(){return a.jsxs("div",{children:[a.jsx(oe,{day:18,title:"Excepciones",duration:"50 min",commitMsg:"dia-18: try-catch, throw, custom exceptions, try-with-resources"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy dominarás el manejo de errores en Java. A diferencia de TypeScript donde los errores son opcionales, Java te obliga a pensar en qué puede fallar."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"try-catch-finally"}),a.jsxs(ne,{title:"Checked vs Unchecked — la gran diferencia con TypeScript",children:[a.jsx("p",{children:"En TypeScript, todos los errores son opcionales de manejar. En Java hay dos tipos:"}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"Checked"})," (heredan de Exception): el compilador te ",a.jsx("em",{children:"obliga"})," a manejarlas. Ejemplo: ",a.jsx("code",{className:"text-primary",children:"IOException"}),". Si no haces try-catch, no compila."]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"Unchecked"})," (heredan de RuntimeException): opcionales. Ejemplo: ",a.jsx("code",{className:"text-primary",children:"NullPointerException"}),", ",a.jsx("code",{className:"text-primary",children:"ArrayIndexOutOfBoundsException"}),"."]})]}),a.jsx(N,{filename:"Excepciones.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"throw y throws"}),a.jsx(N,{filename:"ThrowEjemplo.java",code:`
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
`}),a.jsxs(Y,{type:"info",children:[a.jsx("strong",{children:"Checked exceptions"})," (heredan de Exception): el compilador te obliga a manejarlas con try-catch o declararlas con throws.",a.jsx("strong",{children:" Unchecked exceptions"})," (heredan de RuntimeException): no requieren manejo explícito (NullPointer, ArrayIndex, etc.)."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"try-with-resources (Java 7+)"}),a.jsx(N,{filename:"TryWithResources.java",code:`
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
`}),a.jsx(Y,{type:"angular",children:"TypeScript no tiene checked exceptions. En Java, el compilador te fuerza a manejar ciertas excepciones. Es más estricto pero previene errores no manejados en producción."})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 18"}),a.jsx(K,{number:1,title:"Validador con excepciones personalizadas",description:`Crea un sistema de validación:
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
}`,solutionFilename:"Validador.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-18: excepciones, try-catch, custom exceptions"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 19"})," — Generics: tipos paramétricos, bounded types, wildcards."]})]})})]})}function Yj(){return a.jsxs("div",{children:[a.jsx(oe,{day:19,title:"Generics",duration:"55 min",commitMsg:"dia-19: generics, clases genericas, bounded types, wildcards"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás Generics — el sistema de tipos paramétricos de Java. Es como los generics de TypeScript pero con type erasure y bounded types más potentes."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Clases genéricas"}),a.jsxs(ne,{title:"Generics = TypeScript generics, pero con 'borrado'",children:[a.jsxs("p",{children:["En TypeScript: ",a.jsx("code",{className:"text-primary",children:"function f<T>(x: T): T"})," — los tipos solo existen en compilación. En Java es igual... pero hay una trampa: ",a.jsx("strong",{className:"text-text",children:"type erasure"}),". El compilador borra los tipos genéricos al compilar, así que en runtime ",a.jsx("code",{className:"text-primary",children:"List<String>"})," y",a.jsx("code",{className:"text-primary",children:"List<Integer>"})," son la misma clase."]}),a.jsxs("p",{children:["Esto significa que no puedes hacer ",a.jsx("code",{className:"text-primary",children:"new T()"})," ni",a.jsx("code",{className:"text-primary",children:"T.class"})," en runtime. Pero la seguridad de tipos en compilación vale la pena."]})]}),a.jsx(N,{filename:"Caja.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Métodos genéricos"}),a.jsx(N,{filename:"MetodosGenericos.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Bounded types (límites)"}),a.jsx(N,{filename:"Bounded.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["TypeScript tiene generics similares: ",a.jsx("code",{className:"text-primary",children:"function f<T>(x: T): T"}),". La diferencia es que Java borra los tipos genéricos en compilación (type erasure), mientras que TypeScript los mantiene solo en tiempo de compilación de todas formas."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 19"}),a.jsx(K,{number:1,title:"Par genérico",description:`Crea una clase Par<A, B> con:
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
}`,solutionFilename:"Par.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-19: generics, bounded types, wildcards"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 20"})," — Enums: constantes con superpoderes."]})]})})]})}function Qj(){return a.jsxs("div",{children:[a.jsx(oe,{day:20,title:"Enums",duration:"45 min",commitMsg:"dia-20: enums basicos, con campos y metodos, en switch"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy descubrirás que los enums de Java son clases completas con superpoderes. Pueden tener campos, constructores, métodos e implementar interfaces."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Enum básico"}),a.jsxs(ne,{title:"Enums Java vs TypeScript — son clases completas",children:[a.jsxs("p",{children:["En TypeScript, los enums son básicamente constantes numéricas o strings. En Java, cada valor de un enum es una ",a.jsx("strong",{className:"text-text",children:"instancia de una clase"}),". Esto significa que pueden tener campos, métodos y constructores."]}),a.jsxs("p",{children:["Compara con ",a.jsx("code",{className:"text-primary",children:"=="})," (no ",a.jsx("code",{className:"text-primary",children:".equals()"}),") porque cada valor es una instancia singleton."]})]}),a.jsx(N,{filename:"DiaSemana.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Enum con campos y métodos"}),a.jsx(N,{filename:"Planeta.java",code:`
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
`}),a.jsx(Y,{type:"tip",children:"Los enums en Java son mucho más poderosos que en TypeScript. Son clases completas que pueden tener campos, constructores, métodos e implementar interfaces. Úsalos siempre que tengas un conjunto fijo de valores conocidos."})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 20"}),a.jsx(K,{number:1,title:"Enum Moneda con conversión",description:`Crea un enum Moneda con valores: USD, EUR, MXN, GBP.
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
}`,solutionFilename:"Moneda.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-20: enums con campos, metodos, switch"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 21"})," — Comparable y Comparator: ordenar objetos."]})]})})]})}function Xj(){return a.jsxs("div",{children:[a.jsx(oe,{day:22,title:"Expresiones Lambda",duration:"55 min",commitMsg:"dia-22: lambdas, interfaces funcionales, method references"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy entras a la programación funcional de Java. Las lambdas son como las arrow functions de TypeScript, pero solo funcionan donde se espera una interfaz funcional."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Sintaxis Lambda"}),a.jsxs(ne,{title:"Lambda = arrow function con restricciones",children:[a.jsxs("p",{children:["En TypeScript: ",a.jsx("code",{className:"text-primary",children:"const f = (a, b) => a + b"})," — puedes asignar a cualquier variable. En Java, una lambda solo puede asignarse a una ",a.jsx("strong",{className:"text-text",children:"interfaz funcional"})," (interfaz con un solo método abstracto)."]}),a.jsx("p",{children:"No existen funciones sueltas en Java. Las lambdas son azúcar sintáctico para clases anónimas que implementan interfaces funcionales."})]}),a.jsx(N,{filename:"Lambdas.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Interfaces funcionales del JDK"}),a.jsx(N,{filename:"InterfacesFuncionales.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["Las lambdas de Java son como las arrow functions de TypeScript: ",a.jsx("code",{className:"text-primary",children:"(a, b) => a + b"}),". La diferencia es que en Java las lambdas solo funcionan donde se espera una interfaz funcional."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Method References (::)"}),a.jsx(N,{filename:"MethodRef.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 22"}),a.jsx(K,{number:1,title:"Pipeline de transformación",description:`Crea PipelineLambda.java con:
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
}`,solutionFilename:"PipelineLambda.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-22: lambdas, interfaces funcionales, method references"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 23"})," — Streams API: filter, map, reduce, collect."]})]})})]})}function Zj(){return a.jsxs("div",{children:[a.jsx(oe,{day:23,title:"Streams API",duration:"60 min",commitMsg:"dia-23: streams, filter, map, reduce, collect, groupingBy"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy dominarás la Streams API — la herramienta más poderosa para procesar colecciones. Es como RxJS pipe() pero para datos en memoria."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operaciones básicas"}),a.jsxs(ne,{title:"Stream = pipeline de datos (como RxJS pipe)",children:[a.jsxs("p",{children:["En Angular usas ",a.jsx("code",{className:"text-primary",children:"pipe(filter(), map())"})," con observables. En Java, ",a.jsx("code",{className:"text-primary",children:".stream().filter().map().collect()"})," es lo mismo pero para datos en memoria."]}),a.jsxs("p",{children:["Diferencia clave: los Streams se consumen ",a.jsx("strong",{className:"text-text",children:"una sola vez"})," y son lazy (no procesan hasta la operación terminal). Son síncronos, no reactivos."]})]}),a.jsx(N,{filename:"StreamsBasico.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operaciones terminales"}),a.jsx(N,{filename:"StreamsTerminal.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["Los Streams de Java son como los operadores RxJS en Angular: ",a.jsx("code",{className:"text-primary",children:"pipe(filter(), map())"}),". La diferencia es que los Streams son para datos en memoria y se ejecutan una sola vez, mientras que RxJS maneja flujos asíncronos y observables."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 23"}),a.jsx(K,{number:1,title:"Reporte de ventas con Streams",description:`Crea ReporteVentas.java con record Venta(String producto, double monto, String categoria).
Usa Streams para: total ventas, venta más cara, agrupar por categoría, top 3, productos únicos.`,hint:"Usa mapToDouble().sum(), max(), Collectors.groupingBy(), sorted().limit(), map().distinct().count()",solution:`import java.util.*;
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
}`,solutionFilename:"ReporteVentas.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-23: streams filter, map, reduce, collect, groupingBy"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 24"})," — Optional: adiós NullPointerException."]})]})})]})}function Kj(){return a.jsxs("div",{children:[a.jsx(oe,{day:24,title:"Optional",duration:"40 min",commitMsg:"dia-24: Optional, orElse, map, flatMap, ifPresent"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás Optional — la forma elegante de eliminar NullPointerException. En Spring Boot lo verás constantemente en repositorios y servicios."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Crear y usar Optional"}),a.jsxs(ne,{title:"Optional = un contenedor que puede estar vacío",children:[a.jsxs("p",{children:["En TypeScript puedes usar ",a.jsx("code",{className:"text-primary",children:"?."})," y ",a.jsx("code",{className:"text-primary",children:"??"})," para manejar nulls. En Java, ",a.jsx("code",{className:"text-primary",children:"Optional"})," es un wrapper explícito: te obliga a pensar qué pasa cuando no hay valor."]}),a.jsxs("p",{children:["Regla de oro: ",a.jsx("strong",{className:"text-text",children:"nunca"})," retornes null de un método. Retorna ",a.jsx("code",{className:"text-primary",children:"Optional.empty()"}),". Pero ",a.jsx("strong",{className:"text-text",children:"nunca"})," uses Optional como parámetro ni como campo de clase."]})]}),a.jsx(N,{filename:"OptionalEjemplo.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Encadenar operaciones"}),a.jsx(N,{filename:"OptionalChain.java",code:`
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
`}),a.jsxs(Y,{type:"tip",children:["Usa Optional como tipo de retorno de métodos que pueden no tener resultado.",a.jsx("strong",{children:" Nunca"})," uses Optional como parámetro de método ni como campo de clase. Su propósito es comunicar al llamador que el resultado puede estar ausente."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 24"}),a.jsx(K,{number:1,title:"Repositorio con Optional",description:`Crea un mini repositorio en memoria:
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
}`,solutionFilename:"UsuarioRepo.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-24: Optional, orElse, map, flatMap, ifPresent"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 25"})," — Concurrencia: threads, synchronized, ExecutorService."]})]})})]})}function $j(){return a.jsxs("div",{children:[a.jsx(oe,{day:25,title:"Concurrencia",duration:"60 min",commitMsg:"dia-25: threads, ExecutorService, CompletableFuture"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy entras al mundo de la concurrencia. Entender threads es clave para Spring Boot, donde cada petición HTTP corre en su propio hilo."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Crear Threads"}),a.jsxs(ne,{title:"Thread = hilo de ejecución independiente",children:[a.jsxs("p",{children:["En JavaScript/TypeScript todo es single-threaded con event loop. En Java, puedes tener",a.jsx("strong",{className:"text-text",children:" múltiples hilos reales"})," ejecutándose en paralelo."]}),a.jsxs("p",{children:["Regla moderna: ",a.jsx("strong",{className:"text-text",children:"nunca"})," crees Threads directamente. Usa",a.jsx("code",{className:"text-primary",children:" ExecutorService"})," o ",a.jsx("code",{className:"text-primary",children:"CompletableFuture"}),". Los threads crudos son como hacer HTTP con sockets — funciona pero no es práctico."]})]}),a.jsx(N,{filename:"Threads.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"ExecutorService (recomendado)"}),a.jsx(N,{filename:"Executor.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"CompletableFuture (async moderno)"}),a.jsx(N,{filename:"CompletableFutureEjemplo.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["CompletableFuture es similar a las ",a.jsx("code",{className:"text-primary",children:"Promise"})," de TypeScript.",a.jsx("code",{className:"text-primary",children:" thenApply"})," = ",a.jsx("code",{className:"text-primary",children:".then()"}),",",a.jsx("code",{className:"text-primary",children:" exceptionally"})," = ",a.jsx("code",{className:"text-primary",children:".catch()"}),",",a.jsx("code",{className:"text-primary",children:" allOf"})," = ",a.jsx("code",{className:"text-primary",children:"Promise.all()"}),"."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 25"}),a.jsx(K,{number:1,title:"Descarga paralela simulada",description:`Simula descargar 5 archivos en paralelo con CompletableFuture:
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
}`,solutionFilename:"DescargaParalela.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-25: threads, ExecutorService, CompletableFuture"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 26"})," — Virtual Threads: millones de hilos con Java 21."]})]})})]})}function Wj(){return a.jsxs("div",{children:[a.jsx(oe,{day:27,title:"I/O y Archivos",duration:"45 min",commitMsg:"dia-27: Path, Files, BufferedReader, try-with-resources"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás a leer y escribir archivos con la API moderna java.nio.file."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"java.nio.file (moderno)"}),a.jsx(ne,{title:"java.nio vs java.io — siempre usa nio",children:a.jsxs("p",{children:["Java tiene dos APIs de archivos: la vieja ",a.jsx("code",{className:"text-primary",children:"java.io.File"})," y la moderna",a.jsx("code",{className:"text-primary",children:" java.nio.file"})," (NIO = New I/O). Siempre usa NIO:",a.jsx("code",{className:"text-primary",children:" Path"})," + ",a.jsx("code",{className:"text-primary",children:"Files"})," son más seguras y expresivas."]})}),a.jsx(N,{filename:"NIOArchivos.java",code:`
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
`}),a.jsxs(Y,{type:"tip",children:["Siempre prefiere ",a.jsx("code",{className:"text-primary",children:"java.nio.file"})," sobre ",a.jsx("code",{className:"text-primary",children:"java.io.File"}),". Es más moderno, más seguro y tiene mejor manejo de errores. ",a.jsx("code",{className:"text-primary",children:"Files"})," y",a.jsx("code",{className:"text-primary",children:" Path"})," son las clases principales."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"BufferedReader/Writer (streams grandes)"}),a.jsx(N,{filename:"BufferedIO.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 27"}),a.jsx(K,{number:1,title:"Contador de palabras en archivo",description:`Crea ContadorArchivo.java que:
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
}`,solutionFilename:"ContadorArchivo.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-27: I/O archivos, Path, Files, BufferedReader"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 28"})," — API de Fechas: LocalDate, LocalDateTime, Duration."]})]})})]})}function eS(){return a.jsxs("div",{children:[a.jsx(oe,{day:28,title:"API de Fechas",duration:"45 min",commitMsg:"dia-28: LocalDate, LocalDateTime, Duration, DateTimeFormatter"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy dominarás java.time — la API moderna de fechas. Inmutable, clara y potente. Olvida java.util.Date para siempre."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Clases principales"}),a.jsxs(ne,{title:"java.time es inmutable — como los strings",children:[a.jsxs("p",{children:["Cada operación retorna un ",a.jsx("strong",{className:"text-text",children:"nuevo objeto"}),".",a.jsx("code",{className:"text-primary",children:"hoy.plusDays(1)"})," no modifica ",a.jsx("code",{className:"text-primary",children:"hoy"}),", retorna un nuevo LocalDate. Esto evita bugs sutiles de mutabilidad."]}),a.jsxs("p",{children:["En TypeScript usas ",a.jsx("code",{className:"text-primary",children:"new Date()"})," que es mutable y confusa. Java aprendió de ese error y creó java.time basado en Joda-Time."]})]}),a.jsx(N,{filename:"FechasModernas.java",code:`
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
`}),a.jsxs(Y,{type:"warning",children:["Nunca uses ",a.jsx("code",{className:"text-primary",children:"java.util.Date"})," ni ",a.jsx("code",{className:"text-primary",children:"java.util.Calendar"}),". Son APIs antiguas, mutables y confusas. Siempre usa ",a.jsx("code",{className:"text-primary",children:"java.time.*"})," (Java 8+)."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 28"}),a.jsx(K,{number:1,title:"Calculadora de edad y eventos",description:`Crea CalculadoraFechas.java que:
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
}`,solutionFilename:"CalculadoraFechas.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-28: LocalDate, LocalDateTime, Duration, formatter"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 29"})," — Records: clases de datos inmutables con una línea."]})]})})]})}function tS(){return a.jsxs("div",{children:[a.jsx(oe,{day:29,title:"Records",duration:"40 min",commitMsg:"dia-29: records, constructor compacto, DTOs inmutables"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás Records — clases de datos inmutables en una línea. Son perfectos para DTOs en Spring Boot y reemplazan toneladas de boilerplate."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Definir y usar Records"}),a.jsx(ne,{title:"Record = interfaz TypeScript + constructor + equals + toString",children:a.jsxs("p",{children:["En TypeScript defines ",a.jsx("code",{className:"text-primary",children:"interface Persona { nombre: string; edad: number; }"}),". En Java, un ",a.jsx("code",{className:"text-primary",children:"record"})," genera automáticamente: constructor, getters,",a.jsx("code",{className:"text-primary",children:" equals()"}),", ",a.jsx("code",{className:"text-primary",children:"hashCode()"})," y",a.jsx("code",{className:"text-primary",children:" toString()"}),". Todo inmutable."]})}),a.jsx(N,{filename:"Records.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Records avanzados"}),a.jsx(N,{filename:"RecordsAvanzados.java",code:`
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
`}),a.jsx(Y,{type:"angular",children:"Los records de Java son similares a las interfaces de TypeScript para definir formas de datos, pero son clases reales con constructor, igualdad por valor y toString. En Angular usarías una interfaz o clase — en Java moderno, usa records para DTOs y objetos de valor."})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 29"}),a.jsx(K,{number:1,title:"Sistema de pedidos con Records",description:`Crea un mini sistema de pedidos:
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
}`,solutionFilename:"SistemaPedidos.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-29: records, constructor compacto, DTOs inmutables"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 30"})," — Sealed Classes: controlar la herencia."]})]})})]})}function aS(){return a.jsxs("div",{children:[a.jsx(oe,{day:30,title:"Sealed Classes",duration:"40 min",commitMsg:"dia-30: sealed classes, permits, exhaustive switch"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás Sealed Classes — controlar exactamente qué clases pueden heredar. Combinadas con records y pattern matching, son la base del modelado moderno en Java."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué son las Sealed Classes?"}),a.jsx(ne,{title:"Sealed = union types de TypeScript",children:a.jsxs("p",{children:["En TypeScript: ",a.jsx("code",{className:"text-primary",children:"type Resultado = Exito | Error | Pendiente"}),". En Java 17+: ",a.jsx("code",{className:"text-primary",children:"sealed interface Resultado permits Exito, Error, Pendiente"}),". El compilador verifica que tu switch cubra todos los casos."]})}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Una ",a.jsx("strong",{className:"text-text",children:"sealed class"})," restringe qué clases pueden extenderla. Solo las clases listadas en ",a.jsx("code",{className:"text-primary",children:"permits"})," pueden heredar."]}),a.jsx(N,{filename:"SealedClasses.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Sealed interfaces y records"}),a.jsx(N,{filename:"SealedInterface.java",code:`
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
`}),a.jsx(Y,{type:"tip",children:"Sealed classes + records + pattern matching = una combinación poderosa para modelar dominios cerrados donde sabes exactamente qué tipos existen. El compilador verifica exhaustividad."})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 30"}),a.jsx(K,{number:1,title:"Resultado de operación con Sealed",description:`Modela un sistema de respuestas HTTP:
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
}`,solutionFilename:"SistemaHTTP.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-30: sealed classes, permits, exhaustive switch"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 31"})," — Pattern Matching: instanceof y switch modernos."]})]})})]})}function nS(){return a.jsxs("div",{children:[a.jsx(oe,{day:31,title:"Pattern Matching",duration:"45 min",commitMsg:"dia-31: pattern matching instanceof, switch, guards"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy dominarás Pattern Matching — verificar tipo y extraer datos en una sola expresión. Con sealed classes y records, el compilador verifica exhaustividad."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"instanceof con Pattern Matching (Java 16+)"}),a.jsx(ne,{title:"Pattern Matching = casting inteligente",children:a.jsxs("p",{children:["Antes necesitabas: verificar tipo con instanceof, luego hacer cast manual. Ahora Java lo combina en una línea: ",a.jsx("code",{className:"text-primary",children:"if (obj instanceof String s)"})," verifica Y crea la variable tipada al mismo tiempo."]})}),a.jsx(N,{filename:"PatternInstanceof.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Switch con Pattern Matching (Java 21+)"}),a.jsx(N,{filename:"PatternSwitch.java",code:`
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
`}),a.jsx(Y,{type:"tip",children:"Pattern matching + sealed classes + records es la combinación más poderosa de Java moderno. Permite modelar dominios de forma segura donde el compilador verifica que cubres todos los casos."})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 31"}),a.jsx(K,{number:1,title:"Evaluador de expresiones",description:`Modela expresiones matemáticas con sealed + records + pattern matching:
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
}`,solutionFilename:"Evaluador.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-31: pattern matching instanceof, switch, guards"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 32"})," — Patrones de diseño esenciales."]})]})})]})}function iS(){return a.jsxs("div",{children:[a.jsx(oe,{day:32,title:"Patrones de Diseño",duration:"55 min",commitMsg:"dia-32: singleton, builder, strategy, observer"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás los patrones de diseño más usados en Java y Spring Boot. No son teoría abstracta — los usarás diariamente en código profesional."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Singleton"}),a.jsx(ne,{title:"Spring ya usa estos patrones por ti",children:a.jsxs("p",{children:["En Spring Boot, ",a.jsx("strong",{className:"text-text",children:"Singleton"})," es el scope por defecto de @Service/@Component.",a.jsx("strong",{className:"text-text",children:" Strategy"})," se implementa con múltiples @Service que implementan la misma interfaz.",a.jsx("strong",{className:"text-text",children:" Observer"})," con ApplicationEventPublisher. Conocer los patrones te ayuda a entender Spring."]})}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Una sola instancia en toda la aplicación."}),a.jsx(N,{filename:"Singleton.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Builder"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Construir objetos complejos paso a paso."}),a.jsx(N,{filename:"Builder.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Strategy"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Cambiar algoritmo en tiempo de ejecución."}),a.jsx(N,{filename:"Strategy.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Observer"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Notificar cambios a múltiples objetos."}),a.jsx(N,{filename:"Observer.java",code:`
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
`}),a.jsxs(Y,{type:"spring",children:["Spring Boot usa estos patrones internamente: ",a.jsx("strong",{children:"Singleton"})," (beans),",a.jsx("strong",{children:" Strategy"})," (múltiples implementaciones de interfaz + @Qualifier),",a.jsx("strong",{children:" Observer"})," (ApplicationEventPublisher), ",a.jsx("strong",{children:"Dependency Injection"})," en todo."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 32"}),a.jsx(K,{number:1,title:"Sistema de descuentos con Strategy",description:`Crea un sistema de descuentos usando el patrón Strategy:
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
}`,solutionFilename:"SistemaDescuentos.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-32: patrones singleton, builder, strategy, observer"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 33"})," — Text Blocks, var y novedades del lenguaje."]})]})})]})}function rS(){return a.jsxs("div",{children:[a.jsx(oe,{day:34,title:"Introducción a Spring Boot",duration:"45 min",commitMsg:"dia-34: intro Spring Boot, IoC, DI, arquitectura"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy empiezas Spring Boot — el framework más usado en Java empresarial. Si vienes de Angular, te sentirás como en casa: DI, servicios, módulos."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es Spring Boot?"}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:[a.jsx("strong",{className:"text-text",children:"Spring Boot"}),' es un framework que simplifica la creación de aplicaciones Java basadas en Spring. Proporciona configuración automática, servidor embebido y un enfoque "opinionado" para que puedas enfocarte en la lógica de negocio.']}),a.jsxs(Y,{type:"spring",title:"Spring vs Spring Boot",children:[a.jsx("strong",{children:"Spring Framework"})," es el ecosistema completo (IoC, AOP, MVC, Data, Security...).",a.jsx("strong",{children:" Spring Boot"})," es una capa encima que autoconfigura todo para que arranques rápido. Piensa en Spring como Angular y Spring Boot como Angular CLI — te da estructura y convenciones."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Conceptos clave"}),a.jsx(ne,{title:"Spring Boot = Angular para el backend",children:a.jsx("p",{children:"Si ya conoces Angular, Spring Boot es su equivalente backend: tiene DI con constructores, servicios singleton, módulos de configuración, interceptores, guards (Security), y un CLI (Spring Initializr). La curva de aprendizaje es suave viniendo de Angular."})}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[a.jsx("h3",{className:"font-bold text-text mb-2",children:"Inversión de Control (IoC)"}),a.jsxs("p",{className:"text-text-muted text-sm",children:["Spring crea y gestiona los objetos (beans) por ti. Tú no usas ",a.jsx("code",{className:"text-primary",children:"new"})," — Spring los inyecta donde los necesitas."]})]}),a.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[a.jsx("h3",{className:"font-bold text-text mb-2",children:"Inyección de Dependencias (DI)"}),a.jsxs("p",{className:"text-text-muted text-sm",children:["Spring inyecta automáticamente las dependencias en tus clases. Es como el sistema de DI de Angular con ",a.jsx("code",{className:"text-primary",children:"@Injectable()"}),"."]})]}),a.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[a.jsx("h3",{className:"font-bold text-text mb-2",children:"Autoconfiguración"}),a.jsx("p",{className:"text-text-muted text-sm",children:"Spring Boot detecta las dependencias en tu proyecto y configura automáticamente beans, conexiones de BD, seguridad, etc."})]})]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Arquitectura típica"}),a.jsx(N,{language:"bash",filename:"Estructura del proyecto",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["La arquitectura de Spring Boot es muy similar a Angular: ",a.jsx("strong",{children:"Controller"})," = Component (recibe input),",a.jsx("strong",{children:" Service"})," = Service (lógica), ",a.jsx("strong",{children:"Repository"})," = HttpClient (datos),",a.jsx("strong",{children:" Model"})," = Interface/Class (tipos)."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 34"}),a.jsx(K,{number:1,title:"Mapear la arquitectura Angular → Spring",description:`Sin código, responde mentalmente:
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
        Spring Security = Route Guards`,solutionFilename:"respuestas.txt"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-34: intro Spring Boot, IoC, DI, arquitectura"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 35"})," — Setup: crear proyecto con Spring Initializr."]})]})})]})}function sS(){return a.jsxs("div",{children:[a.jsx(oe,{day:35,title:"Setup del Proyecto",duration:"50 min",commitMsg:"dia-35: spring initializr, pom.xml, application.properties"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy crearás tu primer proyecto Spring Boot desde cero con Spring Initializr."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Spring Initializr"}),a.jsx(ne,{title:"start.spring.io = ng new para Java",children:a.jsxs("p",{children:["Así como Angular CLI genera la estructura del proyecto con ",a.jsx("code",{className:"text-primary",children:"ng new"}),", Spring Initializr genera un proyecto Maven/Gradle con todas las dependencias configuradas. Solo elige las dependencias y descarga el ZIP."]})}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Ve a ",a.jsx("strong",{className:"text-text",children:"start.spring.io"})," y configura tu proyecto:"]}),a.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-2 mb-4",children:[a.jsxs("li",{children:[a.jsx("strong",{className:"text-text",children:"Project:"})," Maven o Gradle"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-text",children:"Language:"})," Java"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-text",children:"Spring Boot:"})," última versión estable (3.x)"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-text",children:"Java:"})," 21 (LTS recomendado)"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-text",children:"Dependencies:"})," Spring Web, Spring Data JPA, H2 Database, Lombok"]})]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Clase principal"}),a.jsx(N,{filename:"MiAppApplication.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"application.properties"}),a.jsx(N,{language:"bash",filename:"src/main/resources/application.properties",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"pom.xml (dependencias Maven)"}),a.jsx(N,{language:"markup",filename:"pom.xml (fragmento)",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["El ",a.jsx("code",{className:"text-primary",children:"pom.xml"})," de Maven es como el ",a.jsx("code",{className:"text-primary",children:"package.json"})," de npm. Las dependencias se descargan del repositorio central de Maven (como npmjs.com)."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 35"}),a.jsx(K,{number:1,title:"Tu primer Hello World en Spring Boot",description:`1. Ve a start.spring.io y genera un proyecto con Spring Web
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
}`,solutionFilename:"HolaController.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-35: setup Spring Boot, primer endpoint /hola"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 36"})," — Anotaciones de Spring: el lenguaje del framework."]})]})})]})}function lS(){return a.jsxs("div",{children:[a.jsx(oe,{day:36,title:"Anotaciones de Spring",duration:"50 min",commitMsg:"dia-36: @Component, @Service, @RestController, DI, JPA annotations"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás las anotaciones esenciales de Spring. Son el lenguaje del framework — cada @ le dice a Spring qué hacer con tu clase."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Anotaciones de componentes"}),a.jsx(ne,{title:"Anotaciones = decoradores de Angular",children:a.jsxs("p",{children:["En Angular usas ",a.jsx("code",{className:"text-primary",children:"@Component"}),", ",a.jsx("code",{className:"text-primary",children:"@Injectable"}),",",a.jsx("code",{className:"text-primary",children:" @Input"}),". En Spring es igual: ",a.jsx("code",{className:"text-primary",children:"@Service"}),",",a.jsx("code",{className:"text-primary",children:" @RestController"}),", ",a.jsx("code",{className:"text-primary",children:"@GetMapping"}),". Las anotaciones son metadatos que Spring lee para autoconfigurar tu aplicación."]})}),a.jsx(N,{filename:"Componentes.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Inyección de dependencias"}),a.jsx(N,{filename:"DI.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["La DI en Spring es casi idéntica a Angular: ",a.jsx("code",{className:"text-primary",children:"@Injectable()"})," = ",a.jsx("code",{className:"text-primary",children:"@Service"}),", inyección por constructor es la forma preferida en ambos. ",a.jsx("code",{className:"text-primary",children:"@Primary"})," es como",a.jsx("code",{className:"text-primary",children:" providedIn: 'root'"})," por defecto."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Anotaciones HTTP"}),a.jsx(N,{filename:"HTTP.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Anotaciones JPA"}),a.jsx(N,{filename:"JPA.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 36"}),a.jsx(K,{number:1,title:"CRUD completo con anotaciones",description:`Crea un ProductoController con:
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
}`,solutionFilename:"ProductoController.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-36: anotaciones Spring, DI, HTTP mappings, JPA"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 37"})," — Controllers en profundidad."]})]})})]})}function oS(){return a.jsxs("div",{children:[a.jsx(oe,{day:37,title:"Controllers",duration:"50 min",commitMsg:"dia-37: @RestController, CRUD, ResponseEntity, @PathVariable"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy construirás REST APIs completas con @RestController y ResponseEntity."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"CRUD completo"}),a.jsx(ne,{title:"Controller = la fachada HTTP de tu aplicación",children:a.jsxs("p",{children:["El Controller solo recibe HTTP y delega al Service. ",a.jsx("strong",{className:"text-text",children:"Nunca"})," pongas lógica de negocio en el Controller. Es como un Component de Angular que solo conecta la UI con el Service."]})}),a.jsx(N,{filename:"UsuarioController.java",code:`
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
`}),a.jsxs(Y,{type:"spring",children:[a.jsx("code",{className:"text-primary",children:"ResponseEntity"})," te da control total sobre el código HTTP, headers y body de la respuesta. Siempre úsalo para APIs profesionales en lugar de retornar objetos directamente."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 37"}),a.jsx(K,{number:1,title:"API de Tareas con ResponseEntity",description:`Crea TareaController con endpoints:
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
}`,solutionFilename:"TareaController.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-37: controllers CRUD, ResponseEntity, @PathVariable"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 38"})," — Services: lógica de negocio y @Transactional."]})]})})]})}function cS(){return a.jsxs("div",{children:[a.jsx(oe,{day:38,title:"Services",duration:"50 min",commitMsg:"dia-38: @Service, @Transactional, interface + impl pattern"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás la capa de servicios — donde vive la lógica de negocio real."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Service completo"}),a.jsx(ne,{title:"Service = donde vive la lógica de negocio",children:a.jsxs("p",{children:["El Controller recibe HTTP, el Repository accede a la BD. El Service es el intermediario que contiene las reglas de negocio: validaciones, cálculos, orquestación.",a.jsx("code",{className:"text-primary",children:" @Transactional"})," garantiza que si algo falla, se revierten todos los cambios en BD."]})}),a.jsx(N,{filename:"UsuarioService.java",code:`
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
`}),a.jsx(Y,{type:"angular",children:"Los Services en Spring son exactamente como los Services en Angular: contienen lógica de negocio reutilizable e inyectable. La diferencia es que Spring los gestiona como singletons automáticamente."})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Interface + Implementación"}),a.jsx(N,{filename:"Patron.java",code:`
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
`}),a.jsx(Y,{type:"tip",children:"El patrón Interface + Impl es muy común en Spring. Permite cambiar la implementación sin tocar el código que la usa (ej: UsuarioServiceMock para tests)."})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 38"}),a.jsx(K,{number:1,title:"Service con validaciones de negocio",description:`Crea ProductoService con reglas de negocio:
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
}`,solutionFilename:"ProductoService.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-38: services, @Transactional, interface+impl"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 39"})," — Repositories: Spring Data JPA y queries automáticas."]})]})})]})}function uS(){return a.jsxs("div",{children:[a.jsx(oe,{day:39,title:"Repositories",duration:"50 min",commitMsg:"dia-39: JPA entities, JpaRepository, query methods, @Query"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás Spring Data JPA — acceso a BD sin escribir SQL. Solo defines una interfaz y Spring genera las queries automáticamente por el nombre del método."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Entidad JPA"}),a.jsx(ne,{title:"Repository = HttpClient automático para BD",children:a.jsxs("p",{children:["En Angular usas HttpClient para llamar APIs. En Spring, JpaRepository te da",a.jsx("code",{className:"text-primary",children:" save()"}),", ",a.jsx("code",{className:"text-primary",children:"findById()"}),",",a.jsx("code",{className:"text-primary",children:" findAll()"}),", ",a.jsx("code",{className:"text-primary",children:"delete()"}),"automáticamente. Solo defines la interfaz, Spring implementa todo."]})}),a.jsx(N,{filename:"Usuario.java",code:`
@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    @Column(unique = true, nullable = false)
    private String email;

    private int edad;

    @CreationTimestamp
    private LocalDateTime creadoEn;

    // Constructores, getters, setters...
    // (o usa Lombok: @Data @NoArgsConstructor @AllArgsConstructor)
}
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Repository interface"}),a.jsx(N,{filename:"UsuarioRepository.java",code:`
// JpaRepository te da GRATIS: save, findById, findAll, delete, count, etc.
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    // Spring genera la query automáticamente por el nombre del método
    List<Usuario> findByNombre(String nombre);
    List<Usuario> findByEdadGreaterThan(int edad);
    Optional<Usuario> findByEmail(String email);
    boolean existsByEmail(String email);
    List<Usuario> findByNombreContaining(String texto);

    // Con paginación
    Page<Usuario> findByNombreContaining(String texto, Pageable pageable);

    // Query personalizada con JPQL
    @Query("SELECT u FROM Usuario u WHERE u.edad BETWEEN :min AND :max")
    List<Usuario> buscarPorRangoEdad(@Param("min") int min, @Param("max") int max);

    // Query nativa SQL
    @Query(value = "SELECT * FROM usuarios WHERE email LIKE %:dominio", nativeQuery = true)
    List<Usuario> buscarPorDominioEmail(@Param("dominio") String dominio);
}
`}),a.jsxs(Y,{type:"spring",children:["Spring Data JPA genera las queries SQL automáticamente basándose en el nombre del método.",a.jsx("strong",{children:" findByNombreContaining"})," genera: ",a.jsx("code",{className:"text-primary",children:"WHERE nombre LIKE '%texto%'"}),". No necesitas escribir SQL para la mayoría de operaciones."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 39"}),a.jsx(K,{number:1,title:"Repository con query methods",description:`Crea ProductoRepository extends JpaRepository con:
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
}`,solutionFilename:"ProductoRepository.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-39: JPA entities, repositories, query methods"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 40"})," — Spring Security: autenticación y autorización."]})]})})]})}function dS(){return a.jsxs("div",{children:[a.jsx(oe,{day:40,title:"Spring Security",duration:"55 min",commitMsg:"dia-40: SecurityFilterChain, BCrypt, JWT, roles"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás Spring Security — autenticación y autorización. Es como los guards de Angular pero para el backend."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Configuración básica"}),a.jsx(ne,{title:"Spring Security = Route Guards + Interceptors del backend",children:a.jsxs("p",{children:["En Angular proteges rutas con guards y adjuntas tokens con interceptors. En Spring Security, ",a.jsx("code",{className:"text-primary",children:"SecurityFilterChain"})," define qué rutas requieren autenticación y ",a.jsx("code",{className:"text-primary",children:"OncePerRequestFilter"})," valida tokens en cada petición."]})}),a.jsx(N,{filename:"SecurityConfig.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"JWT Authentication (producción)"}),a.jsx(N,{filename:"JwtUtil.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["En Angular usas interceptors HTTP para adjuntar el JWT token. En Spring usas filtros (",a.jsx("code",{className:"text-primary",children:"OncePerRequestFilter"}),") para validar el token en cada petición. El concepto de guards en Angular equivale a ",a.jsx("code",{className:"text-primary",children:"@PreAuthorize"})," en Spring."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 40"}),a.jsx(K,{number:1,title:"SecurityConfig con roles",description:`Configura SecurityFilterChain con:
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
}`,solutionFilename:"SecurityConfig.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-40: Spring Security, BCrypt, JWT, roles"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 41"})," — Testing: JUnit 5, Mockito, MockMvc."]})]})})]})}function mS(){return a.jsxs("div",{children:[a.jsx(oe,{day:41,title:"Testing en Spring Boot",duration:"55 min",commitMsg:"dia-41: JUnit 5, Mockito, MockMvc, integration tests"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás testing profesional: unit tests con Mockito y integration tests con MockMvc."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Unit Test con JUnit 5 + Mockito"}),a.jsx(ne,{title:"Arrange → Act → Assert (AAA pattern)",children:a.jsxs("p",{children:["Cada test sigue el patrón AAA: ",a.jsx("strong",{className:"text-text",children:"Arrange"})," (preparar datos y mocks),",a.jsx("strong",{className:"text-text",children:" Act"})," (ejecutar el método), ",a.jsx("strong",{className:"text-text",children:"Assert"})," (verificar resultado). Mockito reemplaza dependencias reales con mocks para aislar la clase bajo prueba."]})}),a.jsx(N,{filename:"UsuarioServiceTest.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Integration Test con MockMvc"}),a.jsx(N,{filename:"UsuarioControllerTest.java",code:`
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
`}),a.jsxs(Y,{type:"tip",children:[a.jsx("strong",{children:"Unit tests"}),": rápidos, aislados con mocks. Testean una clase.",a.jsx("strong",{children:" Integration tests"}),": levantan el contexto de Spring. Testean el flujo completo. Usa ",a.jsx("code",{className:"text-primary",children:"@SpringBootTest"})," para integration y ",a.jsx("code",{className:"text-primary",children:"@ExtendWith(MockitoExtension.class)"})," para unit."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 41"}),a.jsx(K,{number:1,title:"Tests para ProductoService",description:`Escribe 3 unit tests para ProductoService:
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
}`,solutionFilename:"ProductoServiceTest.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-41: JUnit 5, Mockito, MockMvc tests"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 42"})," — Manejo de excepciones global con @ControllerAdvice."]})]})})]})}function pS(){return a.jsxs("div",{children:[a.jsx(oe,{day:21,title:"Comparable y Comparator",duration:"45 min",commitMsg:"dia-21: Comparable, Comparator, ordenamiento de objetos"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás a ordenar objetos en Java. Es fundamental para trabajar con colecciones y streams — lo usarás constantemente en código profesional."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Comparable — orden natural"}),a.jsxs(ne,{title:"¿Comparable o Comparator?",children:[a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"Comparable"}),': la clase "sabe" cómo ordenarse. Implementas ',a.jsx("code",{className:"text-primary",children:"compareTo()"}),"dentro de la clase. Solo un orden natural."]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-text",children:"Comparator"}),": el orden se define fuera. Puedes tener múltiples Comparators para la misma clase. Más flexible, ideal con lambdas."]})]}),a.jsx(N,{filename:"Producto.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Comparator — orden personalizado"}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Usa ",a.jsx("code",{className:"text-primary",children:"Comparator"})," cuando necesitas ",a.jsx("strong",{className:"text-text",children:"múltiples criterios de orden"}),"o no puedes modificar la clase original."]}),a.jsx(N,{filename:"ComparatorEjemplo.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["En TypeScript, ",a.jsx("code",{className:"text-primary",children:"array.sort((a, b) => a.price - b.price)"})," es el equivalente. Java tiene el mismo patrón pero con ",a.jsx("code",{className:"text-primary",children:"Comparator.comparing()"})," que es más expresivo y seguro para tipos no numéricos."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Comparable vs Comparator"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[a.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[a.jsx("h3",{className:"font-bold text-text mb-2",children:"Comparable"}),a.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[a.jsxs("li",{children:["• Implementado ",a.jsx("strong",{className:"text-text",children:"dentro"})," de la clase"]}),a.jsxs("li",{children:["• Define el ",a.jsx("strong",{className:"text-text",children:"orden natural"})," único"]}),a.jsx("li",{children:'• La clase "sabe" cómo ordenarse'}),a.jsx("li",{children:"• Ejemplo: String, Integer, LocalDate"})]})]}),a.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[a.jsx("h3",{className:"font-bold text-text mb-2",children:"Comparator"}),a.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[a.jsxs("li",{children:["• Definido ",a.jsx("strong",{className:"text-text",children:"fuera"})," de la clase"]}),a.jsxs("li",{children:["• Permite ",a.jsx("strong",{className:"text-text",children:"múltiples criterios"})]}),a.jsx("li",{children:"• No necesitas modificar la clase"}),a.jsx("li",{children:"• Más flexible para casos ad-hoc"})]})]})]}),a.jsxs(Y,{type:"tip",children:["Regla práctica: implementa ",a.jsx("code",{className:"text-primary",children:"Comparable"}),' si hay un orden "lógico" obvio para tu clase (ej: productos por precio, personas por nombre). Usa ',a.jsx("code",{className:"text-primary",children:"Comparator"}),"para ordenamientos alternativos o cuando no controlas la clase."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 21"}),a.jsx(K,{number:1,title:"Ordenar estudiantes",description:`Crea Estudiante implements Comparable<Estudiante> con:
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
}`,solutionFilename:"Estudiante.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-21: Comparable, Comparator, ordenamiento de objetos"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 22"})," — Lambdas: funciones como ciudadanos de primera clase."]})]})})]})}function fS(){return a.jsxs("div",{children:[a.jsx(oe,{day:33,title:"Text Blocks y Novedades",duration:"40 min",commitMsg:"dia-33: text blocks, var, string enhancements"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy cierras la sección de Java Moderno con Text Blocks, var y mejoras de String. Estas features hacen tu código más limpio y expresivo."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Text Blocks (Java 13+)"}),a.jsx(ne,{title:"Text Blocks = template literals sin interpolación",children:a.jsxs("p",{children:["En TypeScript usas backticks: ",a.jsx("code",{className:"text-primary",children:"`Hola ${nombre}`"}),". En Java, Text Blocks usan ",a.jsx("code",{className:"text-primary",children:'"""...."""'})," para multilínea, pero ",a.jsx("strong",{className:"text-text",children:"no tienen interpolación"}),". Usa ",a.jsx("code",{className:"text-primary",children:".formatted()"})," para eso."]})}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Los ",a.jsx("strong",{className:"text-text",children:"Text Blocks"})," permiten escribir strings multilínea de forma legible con ",a.jsx("code",{className:"text-primary",children:'"""..."""'}),". El indentado se gestiona automáticamente."]}),a.jsx(N,{filename:"TextBlocks.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["Los Text Blocks son el equivalente de los template literals de JavaScript/TypeScript con backticks:",a.jsx("code",{className:"text-primary",children:" `...`"}),". La diferencia es que Java usa ",a.jsx("code",{className:"text-primary",children:'"""'})," en lugar de backticks."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"var — Inferencia de tipos local (Java 10+)"}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:[a.jsx("code",{className:"text-primary",children:"var"})," permite que el compilador infiera el tipo de una variable local. Java sigue siendo estáticamente tipado — ",a.jsx("code",{className:"text-primary",children:"var"})," es solo azúcar sintáctico."]}),a.jsx(N,{filename:"VarEjemplo.java",code:`
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
`}),a.jsxs(Y,{type:"tip",children:["Usa ",a.jsx("code",{className:"text-primary",children:"var"})," cuando el tipo es obvio por el lado derecho (ej: ",a.jsx("code",{className:"text-primary",children:"new ArrayList<>()"}),"). Evítalo cuando el tipo no es claro sin leerlo (reduce legibilidad). Es especialmente útil para tipos genéricos largos."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"String enhancements (Java 11+)"}),a.jsx(N,{filename:"StringMethods.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 33"}),a.jsx(K,{number:1,title:"Generador de HTML con Text Blocks",description:`Crea GeneradorHTML.java que:
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
}`,solutionFilename:"GeneradorHTML.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-33: text blocks, var, string enhancements"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 34"})," — Spring Boot: introducción al framework."]})]})})]})}function xS(){return a.jsxs("div",{children:[a.jsx(oe,{day:26,title:"Virtual Threads",duration:"45 min",commitMsg:"dia-26: virtual threads Java 21, Spring Boot integration"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy descubrirás Virtual Threads — la revolución de Java 21 (Project Loom). Millones de hilos ligeros que simplifican la concurrencia para apps I/O-bound."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Por qué Virtual Threads?"}),a.jsxs(ne,{title:"Virtual Threads = async/await sin cambiar tu código",children:[a.jsx("p",{children:"En Node.js usas async/await para no bloquear el event loop. En Java clásico, cada thread bloqueante consume ~1MB de RAM del SO. Con Virtual Threads, puedes escribir código bloqueante normal y la JVM lo hace eficiente internamente."}),a.jsx("p",{children:"Es como tener lo mejor de ambos mundos: código síncrono simple + eficiencia asíncrona."})]}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Los ",a.jsx("strong",{className:"text-text",children:"hilos de plataforma"})," (threads clásicos) son costosos: cada uno ocupa ~1MB de memoria del SO. Una JVM puede manejar unos pocos miles. Con ",a.jsx("strong",{className:"text-text",children:"Virtual Threads"}),", puedes crear millones porque son gestionados por la JVM, no por el sistema operativo."]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[a.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[a.jsx("h3",{className:"font-bold text-text mb-2",children:"Hilos de plataforma (antes)"}),a.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[a.jsx("li",{children:"• ~1MB por hilo (stack del SO)"}),a.jsx("li",{children:"• Máximo ~10,000 hilos prácticos"}),a.jsx("li",{children:"• Context switch costoso"}),a.jsx("li",{children:"• Limitante para apps I/O-bound"})]})]}),a.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[a.jsx("h3",{className:"font-bold text-text mb-2",children:"Virtual Threads (Java 21)"}),a.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[a.jsx("li",{children:"• Muy ligeros (~KB por hilo)"}),a.jsx("li",{children:"• Millones de hilos posibles"}),a.jsx("li",{children:"• Gestionados por la JVM"}),a.jsx("li",{children:"• Ideal para apps I/O-bound (REST, BD)"})]})]})]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Crear Virtual Threads"}),a.jsx(N,{filename:"VirtualThreads.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Virtual Threads en Spring Boot"}),a.jsx(N,{language:"bash",filename:"application.properties",code:`
# Habilitar virtual threads en Spring Boot 3.2+ (Java 21)
spring.threads.virtual.enabled=true

# Esto hace que Spring use virtual threads automáticamente para:
# - Peticiones HTTP (Tomcat/Jetty)
# - @Async tasks
# - @Scheduled tasks
# ¡Sin cambiar ningún código de tu aplicación!
`}),a.jsx(N,{filename:"Config.java",code:`
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
`}),a.jsxs(Y,{type:"spring",children:["Con Spring Boot 3.2+ y Java 21, solo necesitas ",a.jsx("code",{className:"text-primary",children:"spring.threads.virtual.enabled=true"})," en tu ",a.jsx("code",{className:"text-primary",children:"application.properties"}),". Spring maneja todo automáticamente. Tu API REST puede manejar miles de peticiones concurrentes bloqueantes sin cambiar ningún código."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Cuándo usar Virtual Threads?"}),a.jsxs(Y,{type:"tip",children:[a.jsx("strong",{children:"Ideal para"}),": aplicaciones I/O-bound (APIs REST, acceso a BD, llamadas HTTP externas).",a.jsx("br",{}),a.jsx("br",{}),a.jsx("strong",{children:"No reemplaza"}),": ",a.jsx("code",{className:"text-primary",children:"CompletableFuture"})," o reactive programming para lógica async compleja. Si ya tienes un sistema reactivo (WebFlux), no necesitas migrar.",a.jsx("br",{}),a.jsx("br",{}),a.jsx("strong",{children:"Regla simple"}),": si usas Spring Boot con operaciones bloqueantes (JPA, RestTemplate, etc.), habilita virtual threads y obtendrás mayor throughput sin código adicional."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 26"}),a.jsx(K,{number:1,title:"Benchmark: Platform vs Virtual Threads",description:`Crea un benchmark que:
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
}`,solutionFilename:"BenchmarkThreads.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-26: virtual threads, benchmark, Spring Boot config"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 27"})," — I/O y archivos: leer, escribir, Path, Files."]})]})})]})}function gS(){return a.jsxs("div",{children:[a.jsx(oe,{day:42,title:"Manejo de Excepciones",duration:"45 min",commitMsg:"dia-42: @ControllerAdvice, @ExceptionHandler, ErrorResponse"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy centralizarás el manejo de errores con @ControllerAdvice — respuestas JSON consistentes y profesionales para toda tu API."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Por qué es necesario?"}),a.jsx(ne,{title:"@ControllerAdvice = ErrorHandler global de Angular",children:a.jsxs("p",{children:["En Angular usas ErrorHandler o interceptors para capturar errores globalmente. En Spring, ",a.jsx("code",{className:"text-primary",children:"@ControllerAdvice"})," intercepta excepciones de cualquier Controller y las transforma en respuestas JSON limpias con el código HTTP correcto."]})}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Sin manejo de errores global, Spring retorna stacktraces en JSON o páginas HTML de error al cliente. Con ",a.jsx("code",{className:"text-primary",children:"@ControllerAdvice"})," defines respuestas de error ",a.jsx("strong",{className:"text-text",children:"consistentes y profesionales"}),"para toda tu API en un solo lugar."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Excepciones personalizadas"}),a.jsx(N,{filename:"Excepciones.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"ErrorResponse DTO"}),a.jsx(N,{filename:"ErrorResponse.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"@ControllerAdvice — Manejador global"}),a.jsx(N,{filename:"GlobalExceptionHandler.java",code:`
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
`}),a.jsxs(Y,{type:"spring",children:["Con este patrón, cuando tu Service lanza ",a.jsx("code",{className:"text-primary",children:"RecursoNoEncontradoException"}),", Spring automáticamente retorna un JSON 404 limpio al cliente. Nunca más stacktraces expuestos en producción."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejemplo de respuesta JSON"}),a.jsx(N,{language:"bash",filename:"GET /api/usuarios/99 (no existe)",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["En Angular, tu ",a.jsx("code",{className:"text-primary",children:"HttpClient"})," recibirá estos errores en el bloque",a.jsx("code",{className:"text-primary",children:" catchError"})," del observable. El ",a.jsx("code",{className:"text-primary",children:"error.error.mensaje"}),"o ",a.jsx("code",{className:"text-primary",children:"error.error.errores"})," tendrá el detalle para mostrar en la UI."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 42"}),a.jsx(K,{number:1,title:"GlobalExceptionHandler completo",description:`Implementa un @RestControllerAdvice con handlers para:
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
}`,solutionFilename:"GlobalExceptionHandler.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-42: @ControllerAdvice, ErrorResponse, exception handlers"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 43"})," — Validación con @Valid y Bean Validation."]})]})})]})}function bS(){return a.jsxs("div",{children:[a.jsx(oe,{day:43,title:"Validación con Bean Validation",duration:"45 min",commitMsg:"dia-43: @Valid, @NotBlank, @Email, @Size, grupos de validación"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás Bean Validation — proteger tu API con anotaciones de validación declarativas. Nunca confíes solo en la validación del frontend."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Anotaciones de validación"}),a.jsx(ne,{title:"Bean Validation = Validators de Angular Reactive Forms",children:a.jsxs("p",{children:["En Angular usas ",a.jsx("code",{className:"text-primary",children:"Validators.required"}),", ",a.jsx("code",{className:"text-primary",children:"Validators.email"}),". En Java usas ",a.jsx("code",{className:"text-primary",children:"@NotBlank"}),", ",a.jsx("code",{className:"text-primary",children:"@Email"})," directamente en los campos del DTO. Spring valida automáticamente con ",a.jsx("code",{className:"text-primary",children:"@Valid"}),"."]})}),a.jsx(N,{filename:"UsuarioDTO.java",code:`
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
`}),a.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3 mb-4",children:[{a:"@NotNull",d:"No nulo"},{a:"@NotBlank",d:"No nulo ni vacío (String)"},{a:"@NotEmpty",d:"No nulo ni vacío (colecciones)"},{a:"@Size",d:"Tamaño min/max"},{a:"@Min / @Max",d:"Valor mínimo/máximo"},{a:"@Email",d:"Formato email"},{a:"@Pattern",d:"Expresión regular"},{a:"@Positive",d:"Número positivo"},{a:"@Past / @Future",d:"Fecha en pasado/futuro"}].map(({a:l,d:c})=>a.jsxs("div",{className:"p-3 bg-bg-secondary rounded-lg border border-border",children:[a.jsx("code",{className:"text-primary text-sm",children:l}),a.jsx("p",{className:"text-text-muted text-xs mt-1",children:c})]},l))})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Activar validación en el Controller"}),a.jsx(N,{filename:"UsuarioController.java",code:`
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
`}),a.jsxs(Y,{type:"tip",children:[a.jsx("code",{className:"text-primary",children:"@Valid"})," vs ",a.jsx("code",{className:"text-primary",children:"@Validated"}),": Usa ",a.jsx("code",{className:"text-primary",children:"@Valid"}),"para validar el body completo de una petición. Usa ",a.jsx("code",{className:"text-primary",children:"@Validated"})," a nivel de clase para habilitar validación en parámetros sueltos (",a.jsx("code",{className:"text-primary",children:"@PathVariable"}),", ",a.jsx("code",{className:"text-primary",children:"@RequestParam"}),")."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Validación en grupos y anidada"}),a.jsx(N,{filename:"ValidacionAvanzada.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["Bean Validation es equivalente a los validadores de Angular Reactive Forms:",a.jsx("code",{className:"text-primary",children:" @NotBlank"})," = ",a.jsx("code",{className:"text-primary",children:"Validators.required"}),",",a.jsx("code",{className:"text-primary",children:" @Email"})," = ",a.jsx("code",{className:"text-primary",children:"Validators.email"}),",",a.jsx("code",{className:"text-primary",children:" @Size"})," = ",a.jsx("code",{className:"text-primary",children:"Validators.minLength/maxLength"}),". La diferencia: en Spring la validación ocurre en el servidor (nunca confíes solo en el cliente)."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 43"}),a.jsx(K,{number:1,title:"DTO con validaciones completas",description:`Crea ProductoCreateRequest con:
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
}`,solutionFilename:"ProductoCreateRequest.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-43: Bean Validation, @Valid, grupos de validación"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 44"})," — DTOs y MapStruct: separar API de BD."]})]})})]})}function hS(){return a.jsxs("div",{children:[a.jsx(oe,{day:44,title:"DTOs y MapStruct",duration:"50 min",commitMsg:"dia-44: DTOs, records, mapper manual, MapStruct"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás DTOs — la capa que protege tu API de tu modelo de BD. Nunca expongas entidades JPA directamente."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Por qué usar DTOs?"}),a.jsx(ne,{title:"DTOs = interfaces de Angular para tipar la API",children:a.jsxs("p",{children:["En Angular creas interfaces como ",a.jsx("code",{className:"text-primary",children:"UserResponse"})," y",a.jsx("code",{className:"text-primary",children:" CreateUserRequest"})," para tipar lo que envías/recibes del backend. En Spring, los DTOs (records) son esas mismas estructuras pero del lado servidor, garantizando que nunca expongas campos internos como passwords."]})}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Exponer directamente tus entidades JPA a la API es un error común. Los ",a.jsx("strong",{className:"text-text",children:"DTOs"}),"son objetos específicos para transferir datos entre capas, sin acoplar la API al modelo de BD."]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[a.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[a.jsx("h3",{className:"font-bold text-red-400 mb-2",children:"❌ Sin DTOs (problemas)"}),a.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[a.jsx("li",{children:"• Expones campos internos (contraseña, etc.)"}),a.jsx("li",{children:"• Lazy-loading de JPA causa errores JSON"}),a.jsx("li",{children:"• Ciclos infinitos en relaciones bidireccionales"}),a.jsx("li",{children:"• El cliente puede enviar campos que no debería"}),a.jsx("li",{children:"• Cambio en la BD = cambio en la API"})]})]}),a.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[a.jsx("h3",{className:"font-bold text-green-400 mb-2",children:"✅ Con DTOs (solución)"}),a.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[a.jsx("li",{children:"• Solo expones lo que el cliente necesita"}),a.jsx("li",{children:"• Sin problemas de serialización JPA"}),a.jsx("li",{children:"• Puedes tener DTOs distintos para crear/leer"}),a.jsx("li",{children:"• La BD y la API evolucionan independientemente"}),a.jsx("li",{children:"• Validaciones específicas por operación"})]})]})]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Definir DTOs con Records"}),a.jsx(N,{filename:"DTOs.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Mapeo manual y con MapStruct"}),a.jsx(N,{filename:"UsuarioMapper.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Usando DTOs en Controller y Service"}),a.jsx(N,{filename:"UsuarioController.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["Los DTOs en Spring son como los ",a.jsx("strong",{children:"interfaces/models"})," en Angular:",a.jsx("code",{className:"text-primary",children:" UsuarioResponse"})," = la interface que defines en Angular para tipar lo que llega del HTTP. ",a.jsx("code",{className:"text-primary",children:"UsuarioCreateRequest"})," = los datos del formulario que envías al backend."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 44"}),a.jsx(K,{number:1,title:"DTOs completos para Producto",description:`Crea el set completo de DTOs para Producto:
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
}`,solutionFilename:"ProductoMapper.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-44: DTOs, records, mapper, separar API de BD"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",a.jsx("strong",{className:"text-text",children:"Día 45"})," — Perfiles, configuración y CORS."]})]})})]})}function yS(){return a.jsxs("div",{children:[a.jsx(oe,{day:45,title:"Perfiles y Configuración",duration:"50 min",commitMsg:"dia-45: profiles, @Value, @ConfigurationProperties, CORS"}),a.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Último día del roadmap. Hoy aprenderás perfiles de entorno, configuración avanzada y CORS para conectar tu API con el frontend Angular."}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Perfiles de entorno"}),a.jsx(ne,{title:"Profiles = environment.ts de Angular",children:a.jsxs("p",{children:["En Angular tienes ",a.jsx("code",{className:"text-primary",children:"environment.ts"})," y ",a.jsx("code",{className:"text-primary",children:"environment.prod.ts"}),". En Spring Boot creas ",a.jsx("code",{className:"text-primary",children:"application-dev.properties"})," y",a.jsx("code",{className:"text-primary",children:" application-prod.properties"}),". Misma idea, diferente formato."]})}),a.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Los ",a.jsx("strong",{className:"text-text",children:"profiles"})," permiten tener configuraciones diferentes para desarrollo, pruebas y producción, activándolas con una simple propiedad."]}),a.jsx(N,{language:"bash",filename:"src/main/resources/application.properties",code:`
# Perfil activo (cambiar según entorno)
spring.profiles.active=dev
`}),a.jsx(N,{language:"bash",filename:"application-dev.properties",code:`
# Configuración de DESARROLLO
spring.datasource.url=jdbc:h2:mem:devdb
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=create-drop
server.port=8080
logging.level.com.miapp=DEBUG
spring.h2.console.enabled=true
`}),a.jsx(N,{language:"bash",filename:"application-prod.properties",code:`
# Configuración de PRODUCCIÓN
spring.datasource.url=jdbc:postgresql://prod-server:5432/miapp
spring.datasource.username=\${DB_USERNAME}
spring.datasource.password=\${DB_PASSWORD}
spring.jpa.show-sql=false
spring.jpa.hibernate.ddl-auto=validate
server.port=8080
logging.level.root=WARN
spring.h2.console.enabled=false
`}),a.jsx(N,{language:"bash",filename:"application-test.properties",code:`
# Configuración de TESTS
spring.datasource.url=jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1
spring.jpa.hibernate.ddl-auto=create-drop
logging.level.root=ERROR
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"@Value y @ConfigurationProperties"}),a.jsx(N,{filename:"Configuracion.java",code:`
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
`}),a.jsx(N,{language:"bash",filename:"application.properties (propiedades custom)",code:`
app.nombre=Mi API
app.version=1.0.0
app.email.from=noreply@miapp.com
app.email.smtp-host=smtp.gmail.com
app.email.smtp-port=587
app.security.jwt-secret=clave-super-secreta-de-produccion
app.security.jwt-expiracion=86400
`}),a.jsxs(Y,{type:"tip",children:["Usa ",a.jsx("code",{className:"text-primary",children:"@ConfigurationProperties"})," sobre ",a.jsx("code",{className:"text-primary",children:"@Value"})," para grupos de propiedades — es más limpio, testeable y soporta autocompletado en IDEs. Las propiedades sensibles (passwords, secrets) siempre deben venir de variables de entorno en producción."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"@Profile — Beans por entorno"}),a.jsx(N,{filename:"Beans.java",code:`
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
`})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"CORS — Permitir peticiones desde Angular"}),a.jsx(N,{filename:"CorsConfig.java",code:`
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
`}),a.jsxs(Y,{type:"angular",children:["Sin configurar CORS, tu app Angular recibirá ",a.jsx("strong",{children:"CORS error"})," al hacer peticiones HTTP. En Angular dev puedes usar un proxy (",a.jsx("code",{className:"text-primary",children:"proxy.conf.json"}),"), pero en producción necesitas configurar CORS en Spring obligatoriamente para que el navegador permita las peticiones."]})]}),a.jsxs("section",{className:"mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 45"}),a.jsx(K,{number:1,title:"Configuración completa por entorno",description:`Configura tu proyecto con:
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
}`,solutionFilename:"DataInitializer.java"})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[a.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),a.jsx(N,{language:"bash",code:'git commit -m "dia-45: profiles, CORS, ConfigurationProperties - ROADMAP COMPLETO!"'}),a.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["🎉 ",a.jsx("strong",{className:"text-text",children:"Felicidades!"})," Has completado los 45 días del roadmap Java + Spring Boot."]})]})})]})}function vS(){return a.jsxs(Ch,{children:[a.jsx(lf,{}),a.jsx(th,{children:a.jsxs(se,{element:a.jsx(jv,{}),children:[a.jsx(se,{path:"/",element:a.jsx(Sv,{})}),a.jsx(se,{path:"/introduccion",element:a.jsx(Rj,{})}),a.jsx(se,{path:"/sintaxis",element:a.jsx(Oj,{})}),a.jsx(se,{path:"/tipos-datos",element:a.jsx(Dj,{})}),a.jsx(se,{path:"/variables",element:a.jsx(wj,{})}),a.jsx(se,{path:"/operadores",element:a.jsx(Lj,{})}),a.jsx(se,{path:"/strings",element:a.jsx(zj,{})}),a.jsx(se,{path:"/condicionales",element:a.jsx(_j,{})}),a.jsx(se,{path:"/bucles",element:a.jsx(Uj,{})}),a.jsx(se,{path:"/arrays",element:a.jsx(Bj,{})}),a.jsx(se,{path:"/metodos",element:a.jsx(kj,{})}),a.jsx(se,{path:"/clases-objetos",element:a.jsx(qj,{})}),a.jsx(se,{path:"/encapsulamiento",element:a.jsx(Pj,{})}),a.jsx(se,{path:"/herencia",element:a.jsx(Hj,{})}),a.jsx(se,{path:"/polimorfismo",element:a.jsx(Ij,{})}),a.jsx(se,{path:"/interfaces",element:a.jsx(Jj,{})}),a.jsx(se,{path:"/clases-abstractas",element:a.jsx(Vj,{})}),a.jsx(se,{path:"/colecciones",element:a.jsx(Fj,{})}),a.jsx(se,{path:"/excepciones",element:a.jsx(Gj,{})}),a.jsx(se,{path:"/generics",element:a.jsx(Yj,{})}),a.jsx(se,{path:"/enums",element:a.jsx(Qj,{})}),a.jsx(se,{path:"/comparador",element:a.jsx(pS,{})}),a.jsx(se,{path:"/lambdas",element:a.jsx(Xj,{})}),a.jsx(se,{path:"/streams",element:a.jsx(Zj,{})}),a.jsx(se,{path:"/optional",element:a.jsx(Kj,{})}),a.jsx(se,{path:"/concurrencia",element:a.jsx($j,{})}),a.jsx(se,{path:"/virtual-threads",element:a.jsx(xS,{})}),a.jsx(se,{path:"/io-archivos",element:a.jsx(Wj,{})}),a.jsx(se,{path:"/fechas-api",element:a.jsx(eS,{})}),a.jsx(se,{path:"/records",element:a.jsx(tS,{})}),a.jsx(se,{path:"/sealed-classes",element:a.jsx(aS,{})}),a.jsx(se,{path:"/pattern-matching",element:a.jsx(nS,{})}),a.jsx(se,{path:"/patrones-diseno",element:a.jsx(iS,{})}),a.jsx(se,{path:"/text-blocks",element:a.jsx(fS,{})}),a.jsx(se,{path:"/spring-intro",element:a.jsx(rS,{})}),a.jsx(se,{path:"/spring-setup",element:a.jsx(sS,{})}),a.jsx(se,{path:"/spring-anotaciones",element:a.jsx(lS,{})}),a.jsx(se,{path:"/spring-controllers",element:a.jsx(oS,{})}),a.jsx(se,{path:"/spring-services",element:a.jsx(cS,{})}),a.jsx(se,{path:"/spring-repositories",element:a.jsx(uS,{})}),a.jsx(se,{path:"/spring-security",element:a.jsx(dS,{})}),a.jsx(se,{path:"/spring-testing",element:a.jsx(mS,{})}),a.jsx(se,{path:"/spring-excepciones",element:a.jsx(gS,{})}),a.jsx(se,{path:"/spring-validacion",element:a.jsx(bS,{})}),a.jsx(se,{path:"/spring-dtos",element:a.jsx(hS,{})}),a.jsx(se,{path:"/spring-perfiles",element:a.jsx(yS,{})})]})})]})}eb.createRoot(document.getElementById("root")).render(a.jsx(L.StrictMode,{children:a.jsx(vS,{})}));
