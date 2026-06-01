(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&d(f)}).observe(document,{childList:!0,subtree:!0});function u(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(p){if(p.ep)return;p.ep=!0;const h=u(p);fetch(p.href,h)}})();var Po={exports:{}},kn={};var dp;function Vf(){if(dp)return kn;dp=1;var l=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function u(d,p,h){var f=null;if(h!==void 0&&(f=""+h),p.key!==void 0&&(f=""+p.key),"key"in p){h={};for(var T in p)T!=="key"&&(h[T]=p[T])}else h=p;return p=h.ref,{$$typeof:l,type:d,key:f,ref:p!==void 0?p:null,props:h}}return kn.Fragment=c,kn.jsx=u,kn.jsxs=u,kn}var up;function Gf(){return up||(up=1,Po.exports=Vf()),Po.exports}var e=Gf(),ko={exports:{}},ce={};var mp;function Yf(){if(mp)return ce;mp=1;var l=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),f=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),J=Symbol.iterator;function V(v){return v===null||typeof v!="object"?null:(v=J&&v[J]||v["@@iterator"],typeof v=="function"?v:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,E={};function B(v,_,Y){this.props=v,this.context=_,this.refs=E,this.updater=Y||R}B.prototype.isReactComponent={},B.prototype.setState=function(v,_){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,_,"setState")},B.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function z(){}z.prototype=B.prototype;function I(v,_,Y){this.props=v,this.context=_,this.refs=E,this.updater=Y||R}var $=I.prototype=new z;$.constructor=I,N($,B.prototype),$.isPureReactComponent=!0;var ae=Array.isArray;function pe(){}var X={H:null,A:null,T:null,S:null},xe=Object.prototype.hasOwnProperty;function Ee(v,_,Y){var Q=Y.ref;return{$$typeof:l,type:v,key:_,ref:Q!==void 0?Q:null,props:Y}}function Ze(v,_){return Ee(v.type,_,v.props)}function He(v){return typeof v=="object"&&v!==null&&v.$$typeof===l}function qe(v){var _={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(Y){return _[Y]})}var ha=/\/+/g;function Re(v,_){return typeof v=="object"&&v!==null&&v.key!=null?qe(""+v.key):_.toString(36)}function Ce(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(pe,pe):(v.status="pending",v.then(function(_){v.status==="pending"&&(v.status="fulfilled",v.value=_)},function(_){v.status==="pending"&&(v.status="rejected",v.reason=_)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function q(v,_,Y,Q,le){var ue=typeof v;(ue==="undefined"||ue==="boolean")&&(v=null);var je=!1;if(v===null)je=!0;else switch(ue){case"bigint":case"string":case"number":je=!0;break;case"object":switch(v.$$typeof){case l:case c:je=!0;break;case A:return je=v._init,q(je(v._payload),_,Y,Q,le)}}if(je)return le=le(v),je=Q===""?"."+Re(v,0):Q,ae(le)?(Y="",je!=null&&(Y=je.replace(ha,"$&/")+"/"),q(le,_,Y,"",function(Vs){return Vs})):le!=null&&(He(le)&&(le=Ze(le,Y+(le.key==null||v&&v.key===le.key?"":(""+le.key).replace(ha,"$&/")+"/")+je)),_.push(le)),1;je=0;var ea=Q===""?".":Q+":";if(ae(v))for(var Ue=0;Ue<v.length;Ue++)Q=v[Ue],ue=ea+Re(Q,Ue),je+=q(Q,_,Y,ue,le);else if(Ue=V(v),typeof Ue=="function")for(v=Ue.call(v),Ue=0;!(Q=v.next()).done;)Q=Q.value,ue=ea+Re(Q,Ue++),je+=q(Q,_,Y,ue,le);else if(ue==="object"){if(typeof v.then=="function")return q(Ce(v),_,Y,Q,le);throw _=String(v),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return je}function G(v,_,Y){if(v==null)return v;var Q=[],le=0;return q(v,Q,"","",function(ue){return _.call(Y,ue,le++)}),Q}function ee(v){if(v._status===-1){var _=v._result;_=_(),_.then(function(Y){(v._status===0||v._status===-1)&&(v._status=1,v._result=Y)},function(Y){(v._status===0||v._status===-1)&&(v._status=2,v._result=Y)}),v._status===-1&&(v._status=0,v._result=_)}if(v._status===1)return v._result.default;throw v._result}var Ae=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},ge={map:G,forEach:function(v,_,Y){G(v,function(){_.apply(this,arguments)},Y)},count:function(v){var _=0;return G(v,function(){_++}),_},toArray:function(v){return G(v,function(_){return _})||[]},only:function(v){if(!He(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return ce.Activity=y,ce.Children=ge,ce.Component=B,ce.Fragment=u,ce.Profiler=p,ce.PureComponent=I,ce.StrictMode=d,ce.Suspense=g,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ce.__COMPILER_RUNTIME={__proto__:null,c:function(v){return X.H.useMemoCache(v)}},ce.cache=function(v){return function(){return v.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(v,_,Y){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var Q=N({},v.props),le=v.key;if(_!=null)for(ue in _.key!==void 0&&(le=""+_.key),_)!xe.call(_,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&_.ref===void 0||(Q[ue]=_[ue]);var ue=arguments.length-2;if(ue===1)Q.children=Y;else if(1<ue){for(var je=Array(ue),ea=0;ea<ue;ea++)je[ea]=arguments[ea+2];Q.children=je}return Ee(v.type,le,Q)},ce.createContext=function(v){return v={$$typeof:f,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:h,_context:v},v},ce.createElement=function(v,_,Y){var Q,le={},ue=null;if(_!=null)for(Q in _.key!==void 0&&(ue=""+_.key),_)xe.call(_,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(le[Q]=_[Q]);var je=arguments.length-2;if(je===1)le.children=Y;else if(1<je){for(var ea=Array(je),Ue=0;Ue<je;Ue++)ea[Ue]=arguments[Ue+2];le.children=ea}if(v&&v.defaultProps)for(Q in je=v.defaultProps,je)le[Q]===void 0&&(le[Q]=je[Q]);return Ee(v,ue,le)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(v){return{$$typeof:T,render:v}},ce.isValidElement=He,ce.lazy=function(v){return{$$typeof:A,_payload:{_status:-1,_result:v},_init:ee}},ce.memo=function(v,_){return{$$typeof:x,type:v,compare:_===void 0?null:_}},ce.startTransition=function(v){var _=X.T,Y={};X.T=Y;try{var Q=v(),le=X.S;le!==null&&le(Y,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(pe,Ae)}catch(ue){Ae(ue)}finally{_!==null&&Y.types!==null&&(_.types=Y.types),X.T=_}},ce.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ce.use=function(v){return X.H.use(v)},ce.useActionState=function(v,_,Y){return X.H.useActionState(v,_,Y)},ce.useCallback=function(v,_){return X.H.useCallback(v,_)},ce.useContext=function(v){return X.H.useContext(v)},ce.useDebugValue=function(){},ce.useDeferredValue=function(v,_){return X.H.useDeferredValue(v,_)},ce.useEffect=function(v,_){return X.H.useEffect(v,_)},ce.useEffectEvent=function(v){return X.H.useEffectEvent(v)},ce.useId=function(){return X.H.useId()},ce.useImperativeHandle=function(v,_,Y){return X.H.useImperativeHandle(v,_,Y)},ce.useInsertionEffect=function(v,_){return X.H.useInsertionEffect(v,_)},ce.useLayoutEffect=function(v,_){return X.H.useLayoutEffect(v,_)},ce.useMemo=function(v,_){return X.H.useMemo(v,_)},ce.useOptimistic=function(v,_){return X.H.useOptimistic(v,_)},ce.useReducer=function(v,_,Y){return X.H.useReducer(v,_,Y)},ce.useRef=function(v){return X.H.useRef(v)},ce.useState=function(v){return X.H.useState(v)},ce.useSyncExternalStore=function(v,_,Y){return X.H.useSyncExternalStore(v,_,Y)},ce.useTransition=function(){return X.H.useTransition()},ce.version="19.2.4",ce}var pp;function $o(){return pp||(pp=1,ko.exports=Yf()),ko.exports}var L=$o(),_o={exports:{}},_n={},Ho={exports:{}},Io={};var xp;function Qf(){return xp||(xp=1,(function(l){function c(q,G){var ee=q.length;q.push(G);e:for(;0<ee;){var Ae=ee-1>>>1,ge=q[Ae];if(0<p(ge,G))q[Ae]=G,q[ee]=ge,ee=Ae;else break e}}function u(q){return q.length===0?null:q[0]}function d(q){if(q.length===0)return null;var G=q[0],ee=q.pop();if(ee!==G){q[0]=ee;e:for(var Ae=0,ge=q.length,v=ge>>>1;Ae<v;){var _=2*(Ae+1)-1,Y=q[_],Q=_+1,le=q[Q];if(0>p(Y,ee))Q<ge&&0>p(le,Y)?(q[Ae]=le,q[Q]=ee,Ae=Q):(q[Ae]=Y,q[_]=ee,Ae=_);else if(Q<ge&&0>p(le,ee))q[Ae]=le,q[Q]=ee,Ae=Q;else break e}}return G}function p(q,G){var ee=q.sortIndex-G.sortIndex;return ee!==0?ee:q.id-G.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;l.unstable_now=function(){return h.now()}}else{var f=Date,T=f.now();l.unstable_now=function(){return f.now()-T}}var g=[],x=[],A=1,y=null,J=3,V=!1,R=!1,N=!1,E=!1,B=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function $(q){for(var G=u(x);G!==null;){if(G.callback===null)d(x);else if(G.startTime<=q)d(x),G.sortIndex=G.expirationTime,c(g,G);else break;G=u(x)}}function ae(q){if(N=!1,$(q),!R)if(u(g)!==null)R=!0,pe||(pe=!0,qe());else{var G=u(x);G!==null&&Ce(ae,G.startTime-q)}}var pe=!1,X=-1,xe=5,Ee=-1;function Ze(){return E?!0:!(l.unstable_now()-Ee<xe)}function He(){if(E=!1,pe){var q=l.unstable_now();Ee=q;var G=!0;try{e:{R=!1,N&&(N=!1,z(X),X=-1),V=!0;var ee=J;try{a:{for($(q),y=u(g);y!==null&&!(y.expirationTime>q&&Ze());){var Ae=y.callback;if(typeof Ae=="function"){y.callback=null,J=y.priorityLevel;var ge=Ae(y.expirationTime<=q);if(q=l.unstable_now(),typeof ge=="function"){y.callback=ge,$(q),G=!0;break a}y===u(g)&&d(g),$(q)}else d(g);y=u(g)}if(y!==null)G=!0;else{var v=u(x);v!==null&&Ce(ae,v.startTime-q),G=!1}}break e}finally{y=null,J=ee,V=!1}G=void 0}}finally{G?qe():pe=!1}}}var qe;if(typeof I=="function")qe=function(){I(He)};else if(typeof MessageChannel<"u"){var ha=new MessageChannel,Re=ha.port2;ha.port1.onmessage=He,qe=function(){Re.postMessage(null)}}else qe=function(){B(He,0)};function Ce(q,G){X=B(function(){q(l.unstable_now())},G)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(q){q.callback=null},l.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<q?Math.floor(1e3/q):5},l.unstable_getCurrentPriorityLevel=function(){return J},l.unstable_next=function(q){switch(J){case 1:case 2:case 3:var G=3;break;default:G=J}var ee=J;J=G;try{return q()}finally{J=ee}},l.unstable_requestPaint=function(){E=!0},l.unstable_runWithPriority=function(q,G){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ee=J;J=q;try{return G()}finally{J=ee}},l.unstable_scheduleCallback=function(q,G,ee){var Ae=l.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Ae+ee:Ae):ee=Ae,q){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=ee+ge,q={id:A++,callback:G,priorityLevel:q,startTime:ee,expirationTime:ge,sortIndex:-1},ee>Ae?(q.sortIndex=ee,c(x,q),u(g)===null&&q===u(x)&&(N?(z(X),X=-1):N=!0,Ce(ae,ee-Ae))):(q.sortIndex=ge,c(g,q),R||V||(R=!0,pe||(pe=!0,qe()))),q},l.unstable_shouldYield=Ze,l.unstable_wrapCallback=function(q){var G=J;return function(){var ee=J;J=G;try{return q.apply(this,arguments)}finally{J=ee}}}})(Io)),Io}var hp;function Xf(){return hp||(hp=1,Ho.exports=Qf()),Ho.exports}var Jo={exports:{}},ia={};var fp;function Zf(){if(fp)return ia;fp=1;var l=$o();function c(g){var x="https://react.dev/errors/"+g;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)x+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+g+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var d={d:{f:u,r:function(){throw Error(c(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},p=Symbol.for("react.portal");function h(g,x,A){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:y==null?null:""+y,children:g,containerInfo:x,implementation:A}}var f=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(g,x){if(g==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return ia.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,ia.createPortal=function(g,x){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(c(299));return h(g,x,null,A)},ia.flushSync=function(g){var x=f.T,A=d.p;try{if(f.T=null,d.p=2,g)return g()}finally{f.T=x,d.p=A,d.d.f()}},ia.preconnect=function(g,x){typeof g=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,d.d.C(g,x))},ia.prefetchDNS=function(g){typeof g=="string"&&d.d.D(g)},ia.preinit=function(g,x){if(typeof g=="string"&&x&&typeof x.as=="string"){var A=x.as,y=T(A,x.crossOrigin),J=typeof x.integrity=="string"?x.integrity:void 0,V=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;A==="style"?d.d.S(g,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:y,integrity:J,fetchPriority:V}):A==="script"&&d.d.X(g,{crossOrigin:y,integrity:J,fetchPriority:V,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},ia.preinitModule=function(g,x){if(typeof g=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var A=T(x.as,x.crossOrigin);d.d.M(g,{crossOrigin:A,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&d.d.M(g)},ia.preload=function(g,x){if(typeof g=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var A=x.as,y=T(A,x.crossOrigin);d.d.L(g,A,{crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},ia.preloadModule=function(g,x){if(typeof g=="string")if(x){var A=T(x.as,x.crossOrigin);d.d.m(g,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:A,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else d.d.m(g)},ia.requestFormReset=function(g){d.d.r(g)},ia.unstable_batchedUpdates=function(g,x){return g(x)},ia.useFormState=function(g,x,A){return f.H.useFormState(g,x,A)},ia.useFormStatus=function(){return f.H.useHostTransitionStatus()},ia.version="19.2.4",ia}var gp;function Kf(){if(gp)return Jo.exports;gp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),Jo.exports=Zf(),Jo.exports}var bp;function $f(){if(bp)return _n;bp=1;var l=Xf(),c=$o(),u=Kf();function d(a){var t="https://react.dev/errors/"+a;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+a+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function h(a){var t=a,s=a;if(a.alternate)for(;t.return;)t=t.return;else{a=t;do t=a,(t.flags&4098)!==0&&(s=t.return),a=t.return;while(a)}return t.tag===3?s:null}function f(a){if(a.tag===13){var t=a.memoizedState;if(t===null&&(a=a.alternate,a!==null&&(t=a.memoizedState)),t!==null)return t.dehydrated}return null}function T(a){if(a.tag===31){var t=a.memoizedState;if(t===null&&(a=a.alternate,a!==null&&(t=a.memoizedState)),t!==null)return t.dehydrated}return null}function g(a){if(h(a)!==a)throw Error(d(188))}function x(a){var t=a.alternate;if(!t){if(t=h(a),t===null)throw Error(d(188));return t!==a?null:a}for(var s=a,n=t;;){var r=s.return;if(r===null)break;var i=r.alternate;if(i===null){if(n=r.return,n!==null){s=n;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===s)return g(r),a;if(i===n)return g(r),t;i=i.sibling}throw Error(d(188))}if(s.return!==n.return)s=r,n=i;else{for(var o=!1,m=r.child;m;){if(m===s){o=!0,s=r,n=i;break}if(m===n){o=!0,n=r,s=i;break}m=m.sibling}if(!o){for(m=i.child;m;){if(m===s){o=!0,s=i,n=r;break}if(m===n){o=!0,n=i,s=r;break}m=m.sibling}if(!o)throw Error(d(189))}}if(s.alternate!==n)throw Error(d(190))}if(s.tag!==3)throw Error(d(188));return s.stateNode.current===s?a:t}function A(a){var t=a.tag;if(t===5||t===26||t===27||t===6)return a;for(a=a.child;a!==null;){if(t=A(a),t!==null)return t;a=a.sibling}return null}var y=Object.assign,J=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),I=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),Ze=Symbol.for("react.memo_cache_sentinel"),He=Symbol.iterator;function qe(a){return a===null||typeof a!="object"?null:(a=He&&a[He]||a["@@iterator"],typeof a=="function"?a:null)}var ha=Symbol.for("react.client.reference");function Re(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===ha?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case N:return"Fragment";case B:return"Profiler";case E:return"StrictMode";case ae:return"Suspense";case pe:return"SuspenseList";case Ee:return"Activity"}if(typeof a=="object")switch(a.$$typeof){case R:return"Portal";case I:return a.displayName||"Context";case z:return(a._context.displayName||"Context")+".Consumer";case $:var t=a.render;return a=a.displayName,a||(a=t.displayName||t.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case X:return t=a.displayName||null,t!==null?t:Re(a.type)||"Memo";case xe:t=a._payload,a=a._init;try{return Re(a(t))}catch{}}return null}var Ce=Array.isArray,q=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},Ae=[],ge=-1;function v(a){return{current:a}}function _(a){0>ge||(a.current=Ae[ge],Ae[ge]=null,ge--)}function Y(a,t){ge++,Ae[ge]=a.current,a.current=t}var Q=v(null),le=v(null),ue=v(null),je=v(null);function ea(a,t){switch(Y(ue,t),Y(le,a),Y(Q,null),t.nodeType){case 9:case 11:a=(a=t.documentElement)&&(a=a.namespaceURI)?Lm(a):0;break;default:if(a=t.tagName,t=t.namespaceURI)t=Lm(t),a=qm(t,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}_(Q),Y(Q,a)}function Ue(){_(Q),_(le),_(ue)}function Vs(a){a.memoizedState!==null&&Y(je,a);var t=Q.current,s=qm(t,a.type);t!==s&&(Y(le,a),Y(Q,s))}function Gn(a){le.current===a&&(_(Q),_(le)),je.current===a&&(_(je),zn._currentValue=ee)}var yi,cc;function _t(a){if(yi===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);yi=t&&t[1]||"",cc=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yi+a+cc}var ji=!1;function vi(a,t){if(!a||ji)return"";ji=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(w){var D=w}Reflect.construct(a,[],H)}else{try{H.call()}catch(w){D=w}a.call(H.prototype)}}else{try{throw Error()}catch(w){D=w}(H=a())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(w){if(w&&D&&typeof w.stack=="string")return[w.stack,D.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),o=i[0],m=i[1];if(o&&m){var b=o.split(`
`),O=m.split(`
`);for(r=n=0;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;for(;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;if(n===b.length||r===O.length)for(n=b.length-1,r=O.length-1;1<=n&&0<=r&&b[n]!==O[r];)r--;for(;1<=n&&0<=r;n--,r--)if(b[n]!==O[r]){if(n!==1||r!==1)do if(n--,r--,0>r||b[n]!==O[r]){var U=`
`+b[n].replace(" at new "," at ");return a.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",a.displayName)),U}while(1<=n&&0<=r);break}}}finally{ji=!1,Error.prepareStackTrace=s}return(s=a?a.displayName||a.name:"")?_t(s):""}function vx(a,t){switch(a.tag){case 26:case 27:case 5:return _t(a.type);case 16:return _t("Lazy");case 13:return a.child!==t&&t!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return vi(a.type,!1);case 11:return vi(a.type.render,!1);case 1:return vi(a.type,!0);case 31:return _t("Activity");default:return""}}function dc(a){try{var t="",s=null;do t+=vx(a,s),s=a,a=a.return;while(a);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Si=Object.prototype.hasOwnProperty,Ni=l.unstable_scheduleCallback,Ei=l.unstable_cancelCallback,Sx=l.unstable_shouldYield,Nx=l.unstable_requestPaint,fa=l.unstable_now,Ex=l.unstable_getCurrentPriorityLevel,uc=l.unstable_ImmediatePriority,mc=l.unstable_UserBlockingPriority,Yn=l.unstable_NormalPriority,Cx=l.unstable_LowPriority,pc=l.unstable_IdlePriority,Tx=l.log,Ax=l.unstable_setDisableYieldValue,Gs=null,ga=null;function ht(a){if(typeof Tx=="function"&&Ax(a),ga&&typeof ga.setStrictMode=="function")try{ga.setStrictMode(Gs,a)}catch{}}var ba=Math.clz32?Math.clz32:Ox,Rx=Math.log,Mx=Math.LN2;function Ox(a){return a>>>=0,a===0?32:31-(Rx(a)/Mx|0)|0}var Qn=256,Xn=262144,Zn=4194304;function Ht(a){var t=a&42;if(t!==0)return t;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return a&261888;case 262144:case 524288:case 1048576:case 2097152:return a&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function Kn(a,t,s){var n=a.pendingLanes;if(n===0)return 0;var r=0,i=a.suspendedLanes,o=a.pingedLanes;a=a.warmLanes;var m=n&134217727;return m!==0?(n=m&~i,n!==0?r=Ht(n):(o&=m,o!==0?r=Ht(o):s||(s=m&~a,s!==0&&(r=Ht(s))))):(m=n&~i,m!==0?r=Ht(m):o!==0?r=Ht(o):s||(s=n&~a,s!==0&&(r=Ht(s)))),r===0?0:t!==0&&t!==r&&(t&i)===0&&(i=r&-r,s=t&-t,i>=s||i===32&&(s&4194048)!==0)?t:r}function Ys(a,t){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&t)===0}function Dx(a,t){switch(a){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xc(){var a=Zn;return Zn<<=1,(Zn&62914560)===0&&(Zn=4194304),a}function Ci(a){for(var t=[],s=0;31>s;s++)t.push(a);return t}function Qs(a,t){a.pendingLanes|=t,t!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function wx(a,t,s,n,r,i){var o=a.pendingLanes;a.pendingLanes=s,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=s,a.entangledLanes&=s,a.errorRecoveryDisabledLanes&=s,a.shellSuspendCounter=0;var m=a.entanglements,b=a.expirationTimes,O=a.hiddenUpdates;for(s=o&~s;0<s;){var U=31-ba(s),H=1<<U;m[U]=0,b[U]=-1;var D=O[U];if(D!==null)for(O[U]=null,U=0;U<D.length;U++){var w=D[U];w!==null&&(w.lane&=-536870913)}s&=~H}n!==0&&hc(a,n,0),i!==0&&r===0&&a.tag!==0&&(a.suspendedLanes|=i&~(o&~t))}function hc(a,t,s){a.pendingLanes|=t,a.suspendedLanes&=~t;var n=31-ba(t);a.entangledLanes|=t,a.entanglements[n]=a.entanglements[n]|1073741824|s&261930}function fc(a,t){var s=a.entangledLanes|=t;for(a=a.entanglements;s;){var n=31-ba(s),r=1<<n;r&t|a[n]&t&&(a[n]|=t),s&=~r}}function gc(a,t){var s=t&-t;return s=(s&42)!==0?1:Ti(s),(s&(a.suspendedLanes|t))!==0?0:s}function Ti(a){switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=128;break;case 268435456:a=134217728;break;default:a=0}return a}function Ai(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function bc(){var a=G.p;return a!==0?a:(a=window.event,a===void 0?32:sp(a.type))}function yc(a,t){var s=G.p;try{return G.p=a,t()}finally{G.p=s}}var ft=Math.random().toString(36).slice(2),aa="__reactFiber$"+ft,oa="__reactProps$"+ft,rs="__reactContainer$"+ft,Ri="__reactEvents$"+ft,Lx="__reactListeners$"+ft,qx="__reactHandles$"+ft,jc="__reactResources$"+ft,Xs="__reactMarker$"+ft;function Mi(a){delete a[aa],delete a[oa],delete a[Ri],delete a[Lx],delete a[qx]}function is(a){var t=a[aa];if(t)return t;for(var s=a.parentNode;s;){if(t=s[rs]||s[aa]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(a=Hm(a);a!==null;){if(s=a[aa])return s;a=Hm(a)}return t}a=s,s=a.parentNode}return null}function ls(a){if(a=a[aa]||a[rs]){var t=a.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return a}return null}function Zs(a){var t=a.tag;if(t===5||t===26||t===27||t===6)return a.stateNode;throw Error(d(33))}function os(a){var t=a[jc];return t||(t=a[jc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(a){a[Xs]=!0}var vc=new Set,Sc={};function It(a,t){cs(a,t),cs(a+"Capture",t)}function cs(a,t){for(Sc[a]=t,a=0;a<t.length;a++)vc.add(t[a])}var zx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nc={},Ec={};function Ux(a){return Si.call(Ec,a)?!0:Si.call(Nc,a)?!1:zx.test(a)?Ec[a]=!0:(Nc[a]=!0,!1)}function $n(a,t,s){if(Ux(t))if(s===null)a.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":a.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){a.removeAttribute(t);return}}a.setAttribute(t,""+s)}}function Wn(a,t,s){if(s===null)a.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(t);return}a.setAttribute(t,""+s)}}function Xa(a,t,s,n){if(n===null)a.removeAttribute(s);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(s);return}a.setAttributeNS(t,s,""+n)}}function Aa(a){switch(typeof a){case"bigint":case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function Cc(a){var t=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bx(a,t,s){var n=Object.getOwnPropertyDescriptor(a.constructor.prototype,t);if(!a.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(a,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){s=""+o,i.call(this,o)}}),Object.defineProperty(a,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){a._valueTracker=null,delete a[t]}}}}function Oi(a){if(!a._valueTracker){var t=Cc(a)?"checked":"value";a._valueTracker=Bx(a,t,""+a[t])}}function Tc(a){if(!a)return!1;var t=a._valueTracker;if(!t)return!0;var s=t.getValue(),n="";return a&&(n=Cc(a)?a.checked?"true":"false":a.value),a=n,a!==s?(t.setValue(a),!0):!1}function er(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}var Px=/[\n"\\]/g;function Ra(a){return a.replace(Px,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Di(a,t,s,n,r,i,o,m){a.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?a.type=o:a.removeAttribute("type"),t!=null?o==="number"?(t===0&&a.value===""||a.value!=t)&&(a.value=""+Aa(t)):a.value!==""+Aa(t)&&(a.value=""+Aa(t)):o!=="submit"&&o!=="reset"||a.removeAttribute("value"),t!=null?wi(a,o,Aa(t)):s!=null?wi(a,o,Aa(s)):n!=null&&a.removeAttribute("value"),r==null&&i!=null&&(a.defaultChecked=!!i),r!=null&&(a.checked=r&&typeof r!="function"&&typeof r!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?a.name=""+Aa(m):a.removeAttribute("name")}function Ac(a,t,s,n,r,i,o,m){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(a.type=i),t!=null||s!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Oi(a);return}s=s!=null?""+Aa(s):"",t=t!=null?""+Aa(t):s,m||t===a.value||(a.value=t),a.defaultValue=t}n=n??r,n=typeof n!="function"&&typeof n!="symbol"&&!!n,a.checked=m?a.checked:!!n,a.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(a.name=o),Oi(a)}function wi(a,t,s){t==="number"&&er(a.ownerDocument)===a||a.defaultValue===""+s||(a.defaultValue=""+s)}function ds(a,t,s,n){if(a=a.options,t){t={};for(var r=0;r<s.length;r++)t["$"+s[r]]=!0;for(s=0;s<a.length;s++)r=t.hasOwnProperty("$"+a[s].value),a[s].selected!==r&&(a[s].selected=r),r&&n&&(a[s].defaultSelected=!0)}else{for(s=""+Aa(s),t=null,r=0;r<a.length;r++){if(a[r].value===s){a[r].selected=!0,n&&(a[r].defaultSelected=!0);return}t!==null||a[r].disabled||(t=a[r])}t!==null&&(t.selected=!0)}}function Rc(a,t,s){if(t!=null&&(t=""+Aa(t),t!==a.value&&(a.value=t),s==null)){a.defaultValue!==t&&(a.defaultValue=t);return}a.defaultValue=s!=null?""+Aa(s):""}function Mc(a,t,s,n){if(t==null){if(n!=null){if(s!=null)throw Error(d(92));if(Ce(n)){if(1<n.length)throw Error(d(93));n=n[0]}s=n}s==null&&(s=""),t=s}s=Aa(t),a.defaultValue=s,n=a.textContent,n===s&&n!==""&&n!==null&&(a.value=n),Oi(a)}function us(a,t){if(t){var s=a.firstChild;if(s&&s===a.lastChild&&s.nodeType===3){s.nodeValue=t;return}}a.textContent=t}var kx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Oc(a,t,s){var n=t.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?n?a.setProperty(t,""):t==="float"?a.cssFloat="":a[t]="":n?a.setProperty(t,s):typeof s!="number"||s===0||kx.has(t)?t==="float"?a.cssFloat=s:a[t]=(""+s).trim():a[t]=s+"px"}function Dc(a,t,s){if(t!=null&&typeof t!="object")throw Error(d(62));if(a=a.style,s!=null){for(var n in s)!s.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?a.setProperty(n,""):n==="float"?a.cssFloat="":a[n]="");for(var r in t)n=t[r],t.hasOwnProperty(r)&&s[r]!==n&&Oc(a,r,n)}else for(var i in t)t.hasOwnProperty(i)&&Oc(a,i,t[i])}function Li(a){if(a.indexOf("-")===-1)return!1;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _x=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ar(a){return Hx.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}function Za(){}var qi=null;function zi(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var ms=null,ps=null;function wc(a){var t=ls(a);if(t&&(a=t.stateNode)){var s=a[oa]||null;e:switch(a=t.stateNode,t.type){case"input":if(Di(a,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),t=s.name,s.type==="radio"&&t!=null){for(s=a;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ra(""+t)+'"][type="radio"]'),t=0;t<s.length;t++){var n=s[t];if(n!==a&&n.form===a.form){var r=n[oa]||null;if(!r)throw Error(d(90));Di(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<s.length;t++)n=s[t],n.form===a.form&&Tc(n)}break e;case"textarea":Rc(a,s.value,s.defaultValue);break e;case"select":t=s.value,t!=null&&ds(a,!!s.multiple,t,!1)}}}var Ui=!1;function Lc(a,t,s){if(Ui)return a(t,s);Ui=!0;try{var n=a(t);return n}finally{if(Ui=!1,(ms!==null||ps!==null)&&(Ir(),ms&&(t=ms,a=ps,ps=ms=null,wc(t),a)))for(t=0;t<a.length;t++)wc(a[t])}}function Ks(a,t){var s=a.stateNode;if(s===null)return null;var n=s[oa]||null;if(n===null)return null;s=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(a=a.type,n=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!n;break e;default:a=!1}if(a)return null;if(s&&typeof s!="function")throw Error(d(231,t,typeof s));return s}var Ka=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bi=!1;if(Ka)try{var $s={};Object.defineProperty($s,"passive",{get:function(){Bi=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{Bi=!1}var gt=null,Pi=null,tr=null;function qc(){if(tr)return tr;var a,t=Pi,s=t.length,n,r="value"in gt?gt.value:gt.textContent,i=r.length;for(a=0;a<s&&t[a]===r[a];a++);var o=s-a;for(n=1;n<=o&&t[s-n]===r[i-n];n++);return tr=r.slice(a,1<n?1-n:void 0)}function sr(a){var t=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&t===13&&(a=13)):a=t,a===10&&(a=13),32<=a||a===13?a:0}function nr(){return!0}function zc(){return!1}function ca(a){function t(s,n,r,i,o){this._reactName=s,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var m in a)a.hasOwnProperty(m)&&(s=a[m],this[m]=s?s(i):i[m]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?nr:zc,this.isPropagationStopped=zc,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=nr)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=nr)},persist:function(){},isPersistent:nr}),t}var Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rr=ca(Jt),Ws=y({},Jt,{view:0,detail:0}),Ix=ca(Ws),ki,_i,en,ir=y({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ii,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==en&&(en&&a.type==="mousemove"?(ki=a.screenX-en.screenX,_i=a.screenY-en.screenY):_i=ki=0,en=a),ki)},movementY:function(a){return"movementY"in a?a.movementY:_i}}),Uc=ca(ir),Jx=y({},ir,{dataTransfer:0}),Fx=ca(Jx),Vx=y({},Ws,{relatedTarget:0}),Hi=ca(Vx),Gx=y({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0}),Yx=ca(Gx),Qx=y({},Jt,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Xx=ca(Qx),Zx=y({},Jt,{data:0}),Bc=ca(Zx),Kx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eh(a){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(a):(a=Wx[a])?!!t[a]:!1}function Ii(){return eh}var ah=y({},Ws,{key:function(a){if(a.key){var t=Kx[a.key]||a.key;if(t!=="Unidentified")return t}return a.type==="keypress"?(a=sr(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?$x[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ii,charCode:function(a){return a.type==="keypress"?sr(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?sr(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),th=ca(ah),sh=y({},ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pc=ca(sh),nh=y({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ii}),rh=ca(nh),ih=y({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),lh=ca(ih),oh=y({},ir,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),ch=ca(oh),dh=y({},Jt,{newState:0,oldState:0}),uh=ca(dh),mh=[9,13,27,32],Ji=Ka&&"CompositionEvent"in window,an=null;Ka&&"documentMode"in document&&(an=document.documentMode);var ph=Ka&&"TextEvent"in window&&!an,kc=Ka&&(!Ji||an&&8<an&&11>=an),_c=" ",Hc=!1;function Ic(a,t){switch(a){case"keyup":return mh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jc(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var xs=!1;function xh(a,t){switch(a){case"compositionend":return Jc(t);case"keypress":return t.which!==32?null:(Hc=!0,_c);case"textInput":return a=t.data,a===_c&&Hc?null:a;default:return null}}function hh(a,t){if(xs)return a==="compositionend"||!Ji&&Ic(a,t)?(a=qc(),tr=Pi=gt=null,xs=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kc&&t.locale!=="ko"?null:t.data;default:return null}}var fh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fc(a){var t=a&&a.nodeName&&a.nodeName.toLowerCase();return t==="input"?!!fh[a.type]:t==="textarea"}function Vc(a,t,s,n){ms?ps?ps.push(n):ps=[n]:ms=n,t=Xr(t,"onChange"),0<t.length&&(s=new rr("onChange","change",null,s,n),a.push({event:s,listeners:t}))}var tn=null,sn=null;function gh(a){Am(a,0)}function lr(a){var t=Zs(a);if(Tc(t))return a}function Gc(a,t){if(a==="change")return t}var Yc=!1;if(Ka){var Fi;if(Ka){var Vi="oninput"in document;if(!Vi){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),Vi=typeof Qc.oninput=="function"}Fi=Vi}else Fi=!1;Yc=Fi&&(!document.documentMode||9<document.documentMode)}function Xc(){tn&&(tn.detachEvent("onpropertychange",Zc),sn=tn=null)}function Zc(a){if(a.propertyName==="value"&&lr(sn)){var t=[];Vc(t,sn,a,zi(a)),Lc(gh,t)}}function bh(a,t,s){a==="focusin"?(Xc(),tn=t,sn=s,tn.attachEvent("onpropertychange",Zc)):a==="focusout"&&Xc()}function yh(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return lr(sn)}function jh(a,t){if(a==="click")return lr(t)}function vh(a,t){if(a==="input"||a==="change")return lr(t)}function Sh(a,t){return a===t&&(a!==0||1/a===1/t)||a!==a&&t!==t}var ya=typeof Object.is=="function"?Object.is:Sh;function nn(a,t){if(ya(a,t))return!0;if(typeof a!="object"||a===null||typeof t!="object"||t===null)return!1;var s=Object.keys(a),n=Object.keys(t);if(s.length!==n.length)return!1;for(n=0;n<s.length;n++){var r=s[n];if(!Si.call(t,r)||!ya(a[r],t[r]))return!1}return!0}function Kc(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function $c(a,t){var s=Kc(a);a=0;for(var n;s;){if(s.nodeType===3){if(n=a+s.textContent.length,a<=t&&n>=t)return{node:s,offset:t-a};a=n}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Kc(s)}}function Wc(a,t){return a&&t?a===t?!0:a&&a.nodeType===3?!1:t&&t.nodeType===3?Wc(a,t.parentNode):"contains"in a?a.contains(t):a.compareDocumentPosition?!!(a.compareDocumentPosition(t)&16):!1:!1}function ed(a){a=a!=null&&a.ownerDocument!=null&&a.ownerDocument.defaultView!=null?a.ownerDocument.defaultView:window;for(var t=er(a.document);t instanceof a.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)a=t.contentWindow;else break;t=er(a.document)}return t}function Gi(a){var t=a&&a.nodeName&&a.nodeName.toLowerCase();return t&&(t==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||t==="textarea"||a.contentEditable==="true")}var Nh=Ka&&"documentMode"in document&&11>=document.documentMode,hs=null,Yi=null,rn=null,Qi=!1;function ad(a,t,s){var n=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Qi||hs==null||hs!==er(n)||(n=hs,"selectionStart"in n&&Gi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),rn&&nn(rn,n)||(rn=n,n=Xr(Yi,"onSelect"),0<n.length&&(t=new rr("onSelect","select",null,t,s),a.push({event:t,listeners:n}),t.target=hs)))}function Ft(a,t){var s={};return s[a.toLowerCase()]=t.toLowerCase(),s["Webkit"+a]="webkit"+t,s["Moz"+a]="moz"+t,s}var fs={animationend:Ft("Animation","AnimationEnd"),animationiteration:Ft("Animation","AnimationIteration"),animationstart:Ft("Animation","AnimationStart"),transitionrun:Ft("Transition","TransitionRun"),transitionstart:Ft("Transition","TransitionStart"),transitioncancel:Ft("Transition","TransitionCancel"),transitionend:Ft("Transition","TransitionEnd")},Xi={},td={};Ka&&(td=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Vt(a){if(Xi[a])return Xi[a];if(!fs[a])return a;var t=fs[a],s;for(s in t)if(t.hasOwnProperty(s)&&s in td)return Xi[a]=t[s];return a}var sd=Vt("animationend"),nd=Vt("animationiteration"),rd=Vt("animationstart"),Eh=Vt("transitionrun"),Ch=Vt("transitionstart"),Th=Vt("transitioncancel"),id=Vt("transitionend"),ld=new Map,Zi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zi.push("scrollEnd");function Pa(a,t){ld.set(a,t),It(t,[a])}var or=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)},Ma=[],gs=0,Ki=0;function cr(){for(var a=gs,t=Ki=gs=0;t<a;){var s=Ma[t];Ma[t++]=null;var n=Ma[t];Ma[t++]=null;var r=Ma[t];Ma[t++]=null;var i=Ma[t];if(Ma[t++]=null,n!==null&&r!==null){var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}i!==0&&od(s,r,i)}}function dr(a,t,s,n){Ma[gs++]=a,Ma[gs++]=t,Ma[gs++]=s,Ma[gs++]=n,Ki|=n,a.lanes|=n,a=a.alternate,a!==null&&(a.lanes|=n)}function $i(a,t,s,n){return dr(a,t,s,n),ur(a)}function Gt(a,t){return dr(a,null,null,t),ur(a)}function od(a,t,s){a.lanes|=s;var n=a.alternate;n!==null&&(n.lanes|=s);for(var r=!1,i=a.return;i!==null;)i.childLanes|=s,n=i.alternate,n!==null&&(n.childLanes|=s),i.tag===22&&(a=i.stateNode,a===null||a._visibility&1||(r=!0)),a=i,i=i.return;return a.tag===3?(i=a.stateNode,r&&t!==null&&(r=31-ba(s),a=i.hiddenUpdates,n=a[r],n===null?a[r]=[t]:n.push(t),t.lane=s|536870912),i):null}function ur(a){if(50<Rn)throw Rn=0,lo=null,Error(d(185));for(var t=a.return;t!==null;)a=t,t=a.return;return a.tag===3?a.stateNode:null}var bs={};function Ah(a,t,s,n){this.tag=a,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ja(a,t,s,n){return new Ah(a,t,s,n)}function Wi(a){return a=a.prototype,!(!a||!a.isReactComponent)}function $a(a,t){var s=a.alternate;return s===null?(s=ja(a.tag,t,a.key,a.mode),s.elementType=a.elementType,s.type=a.type,s.stateNode=a.stateNode,s.alternate=a,a.alternate=s):(s.pendingProps=t,s.type=a.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=a.flags&65011712,s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=a.sibling,s.index=a.index,s.ref=a.ref,s.refCleanup=a.refCleanup,s}function cd(a,t){a.flags&=65011714;var s=a.alternate;return s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a}function mr(a,t,s,n,r,i){var o=0;if(n=a,typeof a=="function")Wi(a)&&(o=1);else if(typeof a=="string")o=Lf(a,s,Q.current)?26:a==="html"||a==="head"||a==="body"?27:5;else e:switch(a){case Ee:return a=ja(31,s,t,r),a.elementType=Ee,a.lanes=i,a;case N:return Yt(s.children,r,i,t);case E:o=8,r|=24;break;case B:return a=ja(12,s,t,r|2),a.elementType=B,a.lanes=i,a;case ae:return a=ja(13,s,t,r),a.elementType=ae,a.lanes=i,a;case pe:return a=ja(19,s,t,r),a.elementType=pe,a.lanes=i,a;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case I:o=10;break e;case z:o=9;break e;case $:o=11;break e;case X:o=14;break e;case xe:o=16,n=null;break e}o=29,s=Error(d(130,a===null?"null":typeof a,"")),n=null}return t=ja(o,s,t,r),t.elementType=a,t.type=n,t.lanes=i,t}function Yt(a,t,s,n){return a=ja(7,a,n,t),a.lanes=s,a}function el(a,t,s){return a=ja(6,a,null,t),a.lanes=s,a}function dd(a){var t=ja(18,null,null,0);return t.stateNode=a,t}function al(a,t,s){return t=ja(4,a.children!==null?a.children:[],a.key,t),t.lanes=s,t.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},t}var ud=new WeakMap;function Oa(a,t){if(typeof a=="object"&&a!==null){var s=ud.get(a);return s!==void 0?s:(t={value:a,source:t,stack:dc(t)},ud.set(a,t),t)}return{value:a,source:t,stack:dc(t)}}var ys=[],js=0,pr=null,ln=0,Da=[],wa=0,bt=null,Ha=1,Ia="";function Wa(a,t){ys[js++]=ln,ys[js++]=pr,pr=a,ln=t}function md(a,t,s){Da[wa++]=Ha,Da[wa++]=Ia,Da[wa++]=bt,bt=a;var n=Ha;a=Ia;var r=32-ba(n)-1;n&=~(1<<r),s+=1;var i=32-ba(t)+r;if(30<i){var o=r-r%5;i=(n&(1<<o)-1).toString(32),n>>=o,r-=o,Ha=1<<32-ba(t)+r|s<<r|n,Ia=i+a}else Ha=1<<i|s<<r|n,Ia=a}function tl(a){a.return!==null&&(Wa(a,1),md(a,1,0))}function sl(a){for(;a===pr;)pr=ys[--js],ys[js]=null,ln=ys[--js],ys[js]=null;for(;a===bt;)bt=Da[--wa],Da[wa]=null,Ia=Da[--wa],Da[wa]=null,Ha=Da[--wa],Da[wa]=null}function pd(a,t){Da[wa++]=Ha,Da[wa++]=Ia,Da[wa++]=bt,Ha=t.id,Ia=t.overflow,bt=a}var ta=null,Be=null,ve=!1,yt=null,La=!1,nl=Error(d(519));function jt(a){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw on(Oa(t,a)),nl}function xd(a){var t=a.stateNode,s=a.type,n=a.memoizedProps;switch(t[aa]=a,t[oa]=n,s){case"dialog":fe("cancel",t),fe("close",t);break;case"iframe":case"object":case"embed":fe("load",t);break;case"video":case"audio":for(s=0;s<On.length;s++)fe(On[s],t);break;case"source":fe("error",t);break;case"img":case"image":case"link":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"input":fe("invalid",t),Ac(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":fe("invalid",t);break;case"textarea":fe("invalid",t),Mc(t,n.value,n.defaultValue,n.children)}s=n.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||t.textContent===""+s||n.suppressHydrationWarning===!0||Dm(t.textContent,s)?(n.popover!=null&&(fe("beforetoggle",t),fe("toggle",t)),n.onScroll!=null&&fe("scroll",t),n.onScrollEnd!=null&&fe("scrollend",t),n.onClick!=null&&(t.onclick=Za),t=!0):t=!1,t||jt(a,!0)}function hd(a){for(ta=a.return;ta;)switch(ta.tag){case 5:case 31:case 13:La=!1;return;case 27:case 3:La=!0;return;default:ta=ta.return}}function vs(a){if(a!==ta)return!1;if(!ve)return hd(a),ve=!0,!1;var t=a.tag,s;if((s=t!==3&&t!==27)&&((s=t===5)&&(s=a.type,s=!(s!=="form"&&s!=="button")||No(a.type,a.memoizedProps)),s=!s),s&&Be&&jt(a),hd(a),t===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(d(317));Be=_m(a)}else if(t===31){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(d(317));Be=_m(a)}else t===27?(t=Be,qt(a.type)?(a=Ro,Ro=null,Be=a):Be=t):Be=ta?za(a.stateNode.nextSibling):null;return!0}function Qt(){Be=ta=null,ve=!1}function rl(){var a=yt;return a!==null&&(pa===null?pa=a:pa.push.apply(pa,a),yt=null),a}function on(a){yt===null?yt=[a]:yt.push(a)}var il=v(null),Xt=null,et=null;function vt(a,t,s){Y(il,t._currentValue),t._currentValue=s}function at(a){a._currentValue=il.current,_(il)}function ll(a,t,s){for(;a!==null;){var n=a.alternate;if((a.childLanes&t)!==t?(a.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),a===s)break;a=a.return}}function ol(a,t,s,n){var r=a.child;for(r!==null&&(r.return=a);r!==null;){var i=r.dependencies;if(i!==null){var o=r.child;i=i.firstContext;e:for(;i!==null;){var m=i;i=r;for(var b=0;b<t.length;b++)if(m.context===t[b]){i.lanes|=s,m=i.alternate,m!==null&&(m.lanes|=s),ll(i.return,s,a),n||(o=null);break e}i=m.next}}else if(r.tag===18){if(o=r.return,o===null)throw Error(d(341));o.lanes|=s,i=o.alternate,i!==null&&(i.lanes|=s),ll(o,s,a),o=null}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===a){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}}function Ss(a,t,s,n){a=null;for(var r=t,i=!1;r!==null;){if(!i){if((r.flags&524288)!==0)i=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var o=r.alternate;if(o===null)throw Error(d(387));if(o=o.memoizedProps,o!==null){var m=r.type;ya(r.pendingProps.value,o.value)||(a!==null?a.push(m):a=[m])}}else if(r===je.current){if(o=r.alternate,o===null)throw Error(d(387));o.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(a!==null?a.push(zn):a=[zn])}r=r.return}a!==null&&ol(t,a,s,n),t.flags|=262144}function xr(a){for(a=a.firstContext;a!==null;){if(!ya(a.context._currentValue,a.memoizedValue))return!0;a=a.next}return!1}function Zt(a){Xt=a,et=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function sa(a){return fd(Xt,a)}function hr(a,t){return Xt===null&&Zt(a),fd(a,t)}function fd(a,t){var s=t._currentValue;if(t={context:t,memoizedValue:s,next:null},et===null){if(a===null)throw Error(d(308));et=t,a.dependencies={lanes:0,firstContext:t},a.flags|=524288}else et=et.next=t;return s}var Rh=typeof AbortController<"u"?AbortController:function(){var a=[],t=this.signal={aborted:!1,addEventListener:function(s,n){a.push(n)}};this.abort=function(){t.aborted=!0,a.forEach(function(s){return s()})}},Mh=l.unstable_scheduleCallback,Oh=l.unstable_NormalPriority,Ge={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cl(){return{controller:new Rh,data:new Map,refCount:0}}function cn(a){a.refCount--,a.refCount===0&&Mh(Oh,function(){a.controller.abort()})}var dn=null,dl=0,Ns=0,Es=null;function Dh(a,t){if(dn===null){var s=dn=[];dl=0,Ns=xo(),Es={status:"pending",value:void 0,then:function(n){s.push(n)}}}return dl++,t.then(gd,gd),t}function gd(){if(--dl===0&&dn!==null){Es!==null&&(Es.status="fulfilled");var a=dn;dn=null,Ns=0,Es=null;for(var t=0;t<a.length;t++)(0,a[t])()}}function wh(a,t){var s=[],n={status:"pending",value:null,reason:null,then:function(r){s.push(r)}};return a.then(function(){n.status="fulfilled",n.value=t;for(var r=0;r<s.length;r++)(0,s[r])(t)},function(r){for(n.status="rejected",n.reason=r,r=0;r<s.length;r++)(0,s[r])(void 0)}),n}var bd=q.S;q.S=function(a,t){am=fa(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Dh(a,t),bd!==null&&bd(a,t)};var Kt=v(null);function ul(){var a=Kt.current;return a!==null?a:ze.pooledCache}function fr(a,t){t===null?Y(Kt,Kt.current):Y(Kt,t.pool)}function yd(){var a=ul();return a===null?null:{parent:Ge._currentValue,pool:a}}var Cs=Error(d(460)),ml=Error(d(474)),gr=Error(d(542)),br={then:function(){}};function jd(a){return a=a.status,a==="fulfilled"||a==="rejected"}function vd(a,t,s){switch(s=a[s],s===void 0?a.push(t):s!==t&&(t.then(Za,Za),t=s),t.status){case"fulfilled":return t.value;case"rejected":throw a=t.reason,Nd(a),a;default:if(typeof t.status=="string")t.then(Za,Za);else{if(a=ze,a!==null&&100<a.shellSuspendCounter)throw Error(d(482));a=t,a.status="pending",a.then(function(n){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=n}},function(n){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw a=t.reason,Nd(a),a}throw Wt=t,Cs}}function $t(a){try{var t=a._init;return t(a._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Wt=s,Cs):s}}var Wt=null;function Sd(){if(Wt===null)throw Error(d(459));var a=Wt;return Wt=null,a}function Nd(a){if(a===Cs||a===gr)throw Error(d(483))}var Ts=null,un=0;function yr(a){var t=un;return un+=1,Ts===null&&(Ts=[]),vd(Ts,a,t)}function mn(a,t){t=t.props.ref,a.ref=t!==void 0?t:null}function jr(a,t){throw t.$$typeof===J?Error(d(525)):(a=Object.prototype.toString.call(t),Error(d(31,a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)))}function Ed(a){function t(C,j){if(a){var M=C.deletions;M===null?(C.deletions=[j],C.flags|=16):M.push(j)}}function s(C,j){if(!a)return null;for(;j!==null;)t(C,j),j=j.sibling;return null}function n(C){for(var j=new Map;C!==null;)C.key!==null?j.set(C.key,C):j.set(C.index,C),C=C.sibling;return j}function r(C,j){return C=$a(C,j),C.index=0,C.sibling=null,C}function i(C,j,M){return C.index=M,a?(M=C.alternate,M!==null?(M=M.index,M<j?(C.flags|=67108866,j):M):(C.flags|=67108866,j)):(C.flags|=1048576,j)}function o(C){return a&&C.alternate===null&&(C.flags|=67108866),C}function m(C,j,M,P){return j===null||j.tag!==6?(j=el(M,C.mode,P),j.return=C,j):(j=r(j,M),j.return=C,j)}function b(C,j,M,P){var te=M.type;return te===N?U(C,j,M.props.children,P,M.key):j!==null&&(j.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===xe&&$t(te)===j.type)?(j=r(j,M.props),mn(j,M),j.return=C,j):(j=mr(M.type,M.key,M.props,null,C.mode,P),mn(j,M),j.return=C,j)}function O(C,j,M,P){return j===null||j.tag!==4||j.stateNode.containerInfo!==M.containerInfo||j.stateNode.implementation!==M.implementation?(j=al(M,C.mode,P),j.return=C,j):(j=r(j,M.children||[]),j.return=C,j)}function U(C,j,M,P,te){return j===null||j.tag!==7?(j=Yt(M,C.mode,P,te),j.return=C,j):(j=r(j,M),j.return=C,j)}function H(C,j,M){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=el(""+j,C.mode,M),j.return=C,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case V:return M=mr(j.type,j.key,j.props,null,C.mode,M),mn(M,j),M.return=C,M;case R:return j=al(j,C.mode,M),j.return=C,j;case xe:return j=$t(j),H(C,j,M)}if(Ce(j)||qe(j))return j=Yt(j,C.mode,M,null),j.return=C,j;if(typeof j.then=="function")return H(C,yr(j),M);if(j.$$typeof===I)return H(C,hr(C,j),M);jr(C,j)}return null}function D(C,j,M,P){var te=j!==null?j.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return te!==null?null:m(C,j,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case V:return M.key===te?b(C,j,M,P):null;case R:return M.key===te?O(C,j,M,P):null;case xe:return M=$t(M),D(C,j,M,P)}if(Ce(M)||qe(M))return te!==null?null:U(C,j,M,P,null);if(typeof M.then=="function")return D(C,j,yr(M),P);if(M.$$typeof===I)return D(C,j,hr(C,M),P);jr(C,M)}return null}function w(C,j,M,P,te){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return C=C.get(M)||null,m(j,C,""+P,te);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case V:return C=C.get(P.key===null?M:P.key)||null,b(j,C,P,te);case R:return C=C.get(P.key===null?M:P.key)||null,O(j,C,P,te);case xe:return P=$t(P),w(C,j,M,P,te)}if(Ce(P)||qe(P))return C=C.get(M)||null,U(j,C,P,te,null);if(typeof P.then=="function")return w(C,j,M,yr(P),te);if(P.$$typeof===I)return w(C,j,M,hr(j,P),te);jr(j,P)}return null}function Z(C,j,M,P){for(var te=null,Se=null,W=j,me=j=0,ye=null;W!==null&&me<M.length;me++){W.index>me?(ye=W,W=null):ye=W.sibling;var Ne=D(C,W,M[me],P);if(Ne===null){W===null&&(W=ye);break}a&&W&&Ne.alternate===null&&t(C,W),j=i(Ne,j,me),Se===null?te=Ne:Se.sibling=Ne,Se=Ne,W=ye}if(me===M.length)return s(C,W),ve&&Wa(C,me),te;if(W===null){for(;me<M.length;me++)W=H(C,M[me],P),W!==null&&(j=i(W,j,me),Se===null?te=W:Se.sibling=W,Se=W);return ve&&Wa(C,me),te}for(W=n(W);me<M.length;me++)ye=w(W,C,me,M[me],P),ye!==null&&(a&&ye.alternate!==null&&W.delete(ye.key===null?me:ye.key),j=i(ye,j,me),Se===null?te=ye:Se.sibling=ye,Se=ye);return a&&W.forEach(function(kt){return t(C,kt)}),ve&&Wa(C,me),te}function re(C,j,M,P){if(M==null)throw Error(d(151));for(var te=null,Se=null,W=j,me=j=0,ye=null,Ne=M.next();W!==null&&!Ne.done;me++,Ne=M.next()){W.index>me?(ye=W,W=null):ye=W.sibling;var kt=D(C,W,Ne.value,P);if(kt===null){W===null&&(W=ye);break}a&&W&&kt.alternate===null&&t(C,W),j=i(kt,j,me),Se===null?te=kt:Se.sibling=kt,Se=kt,W=ye}if(Ne.done)return s(C,W),ve&&Wa(C,me),te;if(W===null){for(;!Ne.done;me++,Ne=M.next())Ne=H(C,Ne.value,P),Ne!==null&&(j=i(Ne,j,me),Se===null?te=Ne:Se.sibling=Ne,Se=Ne);return ve&&Wa(C,me),te}for(W=n(W);!Ne.done;me++,Ne=M.next())Ne=w(W,C,me,Ne.value,P),Ne!==null&&(a&&Ne.alternate!==null&&W.delete(Ne.key===null?me:Ne.key),j=i(Ne,j,me),Se===null?te=Ne:Se.sibling=Ne,Se=Ne);return a&&W.forEach(function(Ff){return t(C,Ff)}),ve&&Wa(C,me),te}function Le(C,j,M,P){if(typeof M=="object"&&M!==null&&M.type===N&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case V:e:{for(var te=M.key;j!==null;){if(j.key===te){if(te=M.type,te===N){if(j.tag===7){s(C,j.sibling),P=r(j,M.props.children),P.return=C,C=P;break e}}else if(j.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===xe&&$t(te)===j.type){s(C,j.sibling),P=r(j,M.props),mn(P,M),P.return=C,C=P;break e}s(C,j);break}else t(C,j);j=j.sibling}M.type===N?(P=Yt(M.props.children,C.mode,P,M.key),P.return=C,C=P):(P=mr(M.type,M.key,M.props,null,C.mode,P),mn(P,M),P.return=C,C=P)}return o(C);case R:e:{for(te=M.key;j!==null;){if(j.key===te)if(j.tag===4&&j.stateNode.containerInfo===M.containerInfo&&j.stateNode.implementation===M.implementation){s(C,j.sibling),P=r(j,M.children||[]),P.return=C,C=P;break e}else{s(C,j);break}else t(C,j);j=j.sibling}P=al(M,C.mode,P),P.return=C,C=P}return o(C);case xe:return M=$t(M),Le(C,j,M,P)}if(Ce(M))return Z(C,j,M,P);if(qe(M)){if(te=qe(M),typeof te!="function")throw Error(d(150));return M=te.call(M),re(C,j,M,P)}if(typeof M.then=="function")return Le(C,j,yr(M),P);if(M.$$typeof===I)return Le(C,j,hr(C,M),P);jr(C,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,j!==null&&j.tag===6?(s(C,j.sibling),P=r(j,M),P.return=C,C=P):(s(C,j),P=el(M,C.mode,P),P.return=C,C=P),o(C)):s(C,j)}return function(C,j,M,P){try{un=0;var te=Le(C,j,M,P);return Ts=null,te}catch(W){if(W===Cs||W===gr)throw W;var Se=ja(29,W,null,C.mode);return Se.lanes=P,Se.return=C,Se}}}var es=Ed(!0),Cd=Ed(!1),St=!1;function pl(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xl(a,t){a=a.updateQueue,t.updateQueue===a&&(t.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function Nt(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function Et(a,t,s){var n=a.updateQueue;if(n===null)return null;if(n=n.shared,(Te&2)!==0){var r=n.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),n.pending=t,t=ur(a),od(a,null,s),t}return dr(a,n,t,s),ur(a)}function pn(a,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194048)!==0)){var n=t.lanes;n&=a.pendingLanes,s|=n,t.lanes=s,fc(a,s)}}function hl(a,t){var s=a.updateQueue,n=a.alternate;if(n!==null&&(n=n.updateQueue,s===n)){var r=null,i=null;if(s=s.firstBaseUpdate,s!==null){do{var o={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};i===null?r=i=o:i=i.next=o,s=s.next}while(s!==null);i===null?r=i=t:i=i.next=t}else r=i=t;s={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},a.updateQueue=s;return}a=s.lastBaseUpdate,a===null?s.firstBaseUpdate=t:a.next=t,s.lastBaseUpdate=t}var fl=!1;function xn(){if(fl){var a=Es;if(a!==null)throw a}}function hn(a,t,s,n){fl=!1;var r=a.updateQueue;St=!1;var i=r.firstBaseUpdate,o=r.lastBaseUpdate,m=r.shared.pending;if(m!==null){r.shared.pending=null;var b=m,O=b.next;b.next=null,o===null?i=O:o.next=O,o=b;var U=a.alternate;U!==null&&(U=U.updateQueue,m=U.lastBaseUpdate,m!==o&&(m===null?U.firstBaseUpdate=O:m.next=O,U.lastBaseUpdate=b))}if(i!==null){var H=r.baseState;o=0,U=O=b=null,m=i;do{var D=m.lane&-536870913,w=D!==m.lane;if(w?(be&D)===D:(n&D)===D){D!==0&&D===Ns&&(fl=!0),U!==null&&(U=U.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var Z=a,re=m;D=t;var Le=s;switch(re.tag){case 1:if(Z=re.payload,typeof Z=="function"){H=Z.call(Le,H,D);break e}H=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=re.payload,D=typeof Z=="function"?Z.call(Le,H,D):Z,D==null)break e;H=y({},H,D);break e;case 2:St=!0}}D=m.callback,D!==null&&(a.flags|=64,w&&(a.flags|=8192),w=r.callbacks,w===null?r.callbacks=[D]:w.push(D))}else w={lane:D,tag:m.tag,payload:m.payload,callback:m.callback,next:null},U===null?(O=U=w,b=H):U=U.next=w,o|=D;if(m=m.next,m===null){if(m=r.shared.pending,m===null)break;w=m,m=w.next,w.next=null,r.lastBaseUpdate=w,r.shared.pending=null}}while(!0);U===null&&(b=H),r.baseState=b,r.firstBaseUpdate=O,r.lastBaseUpdate=U,i===null&&(r.shared.lanes=0),Mt|=o,a.lanes=o,a.memoizedState=H}}function Td(a,t){if(typeof a!="function")throw Error(d(191,a));a.call(t)}function Ad(a,t){var s=a.callbacks;if(s!==null)for(a.callbacks=null,a=0;a<s.length;a++)Td(s[a],t)}var As=v(null),vr=v(0);function Rd(a,t){a=dt,Y(vr,a),Y(As,t),dt=a|t.baseLanes}function gl(){Y(vr,dt),Y(As,As.current)}function bl(){dt=vr.current,_(As),_(vr)}var va=v(null),qa=null;function Ct(a){var t=a.alternate;Y(Fe,Fe.current&1),Y(va,a),qa===null&&(t===null||As.current!==null||t.memoizedState!==null)&&(qa=a)}function yl(a){Y(Fe,Fe.current),Y(va,a),qa===null&&(qa=a)}function Md(a){a.tag===22?(Y(Fe,Fe.current),Y(va,a),qa===null&&(qa=a)):Tt()}function Tt(){Y(Fe,Fe.current),Y(va,va.current)}function Sa(a){_(va),qa===a&&(qa=null),_(Fe)}var Fe=v(0);function Sr(a){for(var t=a;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||To(s)||Ao(s)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break;for(;t.sibling===null;){if(t.return===null||t.return===a)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var tt=0,de=null,De=null,Ye=null,Nr=!1,Rs=!1,as=!1,Er=0,fn=0,Ms=null,Lh=0;function Ie(){throw Error(d(321))}function jl(a,t){if(t===null)return!1;for(var s=0;s<t.length&&s<a.length;s++)if(!ya(a[s],t[s]))return!1;return!0}function vl(a,t,s,n,r,i){return tt=i,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,q.H=a===null||a.memoizedState===null?mu:Ul,as=!1,i=s(n,r),as=!1,Rs&&(i=Dd(t,s,n,r)),Od(a),i}function Od(a){q.H=yn;var t=De!==null&&De.next!==null;if(tt=0,Ye=De=de=null,Nr=!1,fn=0,Ms=null,t)throw Error(d(300));a===null||Qe||(a=a.dependencies,a!==null&&xr(a)&&(Qe=!0))}function Dd(a,t,s,n){de=a;var r=0;do{if(Rs&&(Ms=null),fn=0,Rs=!1,25<=r)throw Error(d(301));if(r+=1,Ye=De=null,a.updateQueue!=null){var i=a.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}q.H=pu,i=t(s,n)}while(Rs);return i}function qh(){var a=q.H,t=a.useState()[0];return t=typeof t.then=="function"?gn(t):t,a=a.useState()[0],(De!==null?De.memoizedState:null)!==a&&(de.flags|=1024),t}function Sl(){var a=Er!==0;return Er=0,a}function Nl(a,t,s){t.updateQueue=a.updateQueue,t.flags&=-2053,a.lanes&=~s}function El(a){if(Nr){for(a=a.memoizedState;a!==null;){var t=a.queue;t!==null&&(t.pending=null),a=a.next}Nr=!1}tt=0,Ye=De=de=null,Rs=!1,fn=Er=0,Ms=null}function la(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?de.memoizedState=Ye=a:Ye=Ye.next=a,Ye}function Ve(){if(De===null){var a=de.alternate;a=a!==null?a.memoizedState:null}else a=De.next;var t=Ye===null?de.memoizedState:Ye.next;if(t!==null)Ye=t,De=a;else{if(a===null)throw de.alternate===null?Error(d(467)):Error(d(310));De=a,a={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ye===null?de.memoizedState=Ye=a:Ye=Ye.next=a}return Ye}function Cr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gn(a){var t=fn;return fn+=1,Ms===null&&(Ms=[]),a=vd(Ms,a,t),t=de,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,q.H=t===null||t.memoizedState===null?mu:Ul),a}function Tr(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return gn(a);if(a.$$typeof===I)return sa(a)}throw Error(d(438,String(a)))}function Cl(a){var t=null,s=de.updateQueue;if(s!==null&&(t=s.memoCache),t==null){var n=de.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),s===null&&(s=Cr(),de.updateQueue=s),s.memoCache=t,s=t.data[t.index],s===void 0)for(s=t.data[t.index]=Array(a),n=0;n<a;n++)s[n]=Ze;return t.index++,s}function st(a,t){return typeof t=="function"?t(a):t}function Ar(a){var t=Ve();return Tl(t,De,a)}function Tl(a,t,s){var n=a.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=s;var r=a.baseQueue,i=n.pending;if(i!==null){if(r!==null){var o=r.next;r.next=i.next,i.next=o}t.baseQueue=r=i,n.pending=null}if(i=a.baseState,r===null)a.memoizedState=i;else{t=r.next;var m=o=null,b=null,O=t,U=!1;do{var H=O.lane&-536870913;if(H!==O.lane?(be&H)===H:(tt&H)===H){var D=O.revertLane;if(D===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),H===Ns&&(U=!0);else if((tt&D)===D){O=O.next,D===Ns&&(U=!0);continue}else H={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},b===null?(m=b=H,o=i):b=b.next=H,de.lanes|=D,Mt|=D;H=O.action,as&&s(i,H),i=O.hasEagerState?O.eagerState:s(i,H)}else D={lane:H,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},b===null?(m=b=D,o=i):b=b.next=D,de.lanes|=H,Mt|=H;O=O.next}while(O!==null&&O!==t);if(b===null?o=i:b.next=m,!ya(i,a.memoizedState)&&(Qe=!0,U&&(s=Es,s!==null)))throw s;a.memoizedState=i,a.baseState=o,a.baseQueue=b,n.lastRenderedState=i}return r===null&&(n.lanes=0),[a.memoizedState,n.dispatch]}function Al(a){var t=Ve(),s=t.queue;if(s===null)throw Error(d(311));s.lastRenderedReducer=a;var n=s.dispatch,r=s.pending,i=t.memoizedState;if(r!==null){s.pending=null;var o=r=r.next;do i=a(i,o.action),o=o.next;while(o!==r);ya(i,t.memoizedState)||(Qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),s.lastRenderedState=i}return[i,n]}function wd(a,t,s){var n=de,r=Ve(),i=ve;if(i){if(s===void 0)throw Error(d(407));s=s()}else s=t();var o=!ya((De||r).memoizedState,s);if(o&&(r.memoizedState=s,Qe=!0),r=r.queue,Ol(zd.bind(null,n,r,a),[a]),r.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Os(9,{destroy:void 0},qd.bind(null,n,r,s,t),null),ze===null)throw Error(d(349));i||(tt&127)!==0||Ld(n,t,s)}return s}function Ld(a,t,s){a.flags|=16384,a={getSnapshot:t,value:s},t=de.updateQueue,t===null?(t=Cr(),de.updateQueue=t,t.stores=[a]):(s=t.stores,s===null?t.stores=[a]:s.push(a))}function qd(a,t,s,n){t.value=s,t.getSnapshot=n,Ud(t)&&Bd(a)}function zd(a,t,s){return s(function(){Ud(t)&&Bd(a)})}function Ud(a){var t=a.getSnapshot;a=a.value;try{var s=t();return!ya(a,s)}catch{return!0}}function Bd(a){var t=Gt(a,2);t!==null&&xa(t,a,2)}function Rl(a){var t=la();if(typeof a=="function"){var s=a;if(a=s(),as){ht(!0);try{s()}finally{ht(!1)}}}return t.memoizedState=t.baseState=a,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:a},t}function Pd(a,t,s,n){return a.baseState=s,Tl(a,De,typeof n=="function"?n:st)}function zh(a,t,s,n,r){if(Or(a))throw Error(d(485));if(a=t.action,a!==null){var i={payload:r,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};q.T!==null?s(!0):i.isTransition=!1,n(i),s=t.pending,s===null?(i.next=t.pending=i,kd(t,i)):(i.next=s.next,t.pending=s.next=i)}}function kd(a,t){var s=t.action,n=t.payload,r=a.state;if(t.isTransition){var i=q.T,o={};q.T=o;try{var m=s(r,n),b=q.S;b!==null&&b(o,m),_d(a,t,m)}catch(O){Ml(a,t,O)}finally{i!==null&&o.types!==null&&(i.types=o.types),q.T=i}}else try{i=s(r,n),_d(a,t,i)}catch(O){Ml(a,t,O)}}function _d(a,t,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(n){Hd(a,t,n)},function(n){return Ml(a,t,n)}):Hd(a,t,s)}function Hd(a,t,s){t.status="fulfilled",t.value=s,Id(t),a.state=s,t=a.pending,t!==null&&(s=t.next,s===t?a.pending=null:(s=s.next,t.next=s,kd(a,s)))}function Ml(a,t,s){var n=a.pending;if(a.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=s,Id(t),t=t.next;while(t!==n)}a.action=null}function Id(a){a=a.listeners;for(var t=0;t<a.length;t++)(0,a[t])()}function Jd(a,t){return t}function Fd(a,t){if(ve){var s=ze.formState;if(s!==null){e:{var n=de;if(ve){if(Be){a:{for(var r=Be,i=La;r.nodeType!==8;){if(!i){r=null;break a}if(r=za(r.nextSibling),r===null){r=null;break a}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){Be=za(r.nextSibling),n=r.data==="F!";break e}}jt(n)}n=!1}n&&(t=s[0])}}return s=la(),s.memoizedState=s.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jd,lastRenderedState:t},s.queue=n,s=cu.bind(null,de,n),n.dispatch=s,n=Rl(!1),i=zl.bind(null,de,!1,n.queue),n=la(),r={state:t,dispatch:null,action:a,pending:null},n.queue=r,s=zh.bind(null,de,r,i,s),r.dispatch=s,n.memoizedState=a,[t,s,!1]}function Vd(a){var t=Ve();return Gd(t,De,a)}function Gd(a,t,s){if(t=Tl(a,t,Jd)[0],a=Ar(st)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=gn(t)}catch(o){throw o===Cs?gr:o}else n=t;t=Ve();var r=t.queue,i=r.dispatch;return s!==t.memoizedState&&(de.flags|=2048,Os(9,{destroy:void 0},Uh.bind(null,r,s),null)),[n,i,a]}function Uh(a,t){a.action=t}function Yd(a){var t=Ve(),s=De;if(s!==null)return Gd(t,s,a);Ve(),t=t.memoizedState,s=Ve();var n=s.queue.dispatch;return s.memoizedState=a,[t,n,!1]}function Os(a,t,s,n){return a={tag:a,create:s,deps:n,inst:t,next:null},t=de.updateQueue,t===null&&(t=Cr(),de.updateQueue=t),s=t.lastEffect,s===null?t.lastEffect=a.next=a:(n=s.next,s.next=a,a.next=n,t.lastEffect=a),a}function Qd(){return Ve().memoizedState}function Rr(a,t,s,n){var r=la();de.flags|=a,r.memoizedState=Os(1|t,{destroy:void 0},s,n===void 0?null:n)}function Mr(a,t,s,n){var r=Ve();n=n===void 0?null:n;var i=r.memoizedState.inst;De!==null&&n!==null&&jl(n,De.memoizedState.deps)?r.memoizedState=Os(t,i,s,n):(de.flags|=a,r.memoizedState=Os(1|t,i,s,n))}function Xd(a,t){Rr(8390656,8,a,t)}function Ol(a,t){Mr(2048,8,a,t)}function Bh(a){de.flags|=4;var t=de.updateQueue;if(t===null)t=Cr(),de.updateQueue=t,t.events=[a];else{var s=t.events;s===null?t.events=[a]:s.push(a)}}function Zd(a){var t=Ve().memoizedState;return Bh({ref:t,nextImpl:a}),function(){if((Te&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function Kd(a,t){return Mr(4,2,a,t)}function $d(a,t){return Mr(4,4,a,t)}function Wd(a,t){if(typeof t=="function"){a=a();var s=t(a);return function(){typeof s=="function"?s():t(null)}}if(t!=null)return a=a(),t.current=a,function(){t.current=null}}function eu(a,t,s){s=s!=null?s.concat([a]):null,Mr(4,4,Wd.bind(null,t,a),s)}function Dl(){}function au(a,t){var s=Ve();t=t===void 0?null:t;var n=s.memoizedState;return t!==null&&jl(t,n[1])?n[0]:(s.memoizedState=[a,t],a)}function tu(a,t){var s=Ve();t=t===void 0?null:t;var n=s.memoizedState;if(t!==null&&jl(t,n[1]))return n[0];if(n=a(),as){ht(!0);try{a()}finally{ht(!1)}}return s.memoizedState=[n,t],n}function wl(a,t,s){return s===void 0||(tt&1073741824)!==0&&(be&261930)===0?a.memoizedState=t:(a.memoizedState=s,a=sm(),de.lanes|=a,Mt|=a,s)}function su(a,t,s,n){return ya(s,t)?s:As.current!==null?(a=wl(a,s,n),ya(a,t)||(Qe=!0),a):(tt&42)===0||(tt&1073741824)!==0&&(be&261930)===0?(Qe=!0,a.memoizedState=s):(a=sm(),de.lanes|=a,Mt|=a,t)}function nu(a,t,s,n,r){var i=G.p;G.p=i!==0&&8>i?i:8;var o=q.T,m={};q.T=m,zl(a,!1,t,s);try{var b=r(),O=q.S;if(O!==null&&O(m,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var U=wh(b,n);bn(a,t,U,Ca(a))}else bn(a,t,n,Ca(a))}catch(H){bn(a,t,{then:function(){},status:"rejected",reason:H},Ca())}finally{G.p=i,o!==null&&m.types!==null&&(o.types=m.types),q.T=o}}function Ph(){}function Ll(a,t,s,n){if(a.tag!==5)throw Error(d(476));var r=ru(a).queue;nu(a,r,t,ee,s===null?Ph:function(){return iu(a),s(n)})}function ru(a){var t=a.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:ee},next:null};var s={};return t.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:s},next:null},a.memoizedState=t,a=a.alternate,a!==null&&(a.memoizedState=t),t}function iu(a){var t=ru(a);t.next===null&&(t=a.alternate.memoizedState),bn(a,t.next.queue,{},Ca())}function ql(){return sa(zn)}function lu(){return Ve().memoizedState}function ou(){return Ve().memoizedState}function kh(a){for(var t=a.return;t!==null;){switch(t.tag){case 24:case 3:var s=Ca();a=Nt(s);var n=Et(t,a,s);n!==null&&(xa(n,t,s),pn(n,t,s)),t={cache:cl()},a.payload=t;return}t=t.return}}function _h(a,t,s){var n=Ca();s={lane:n,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Or(a)?du(t,s):(s=$i(a,t,s,n),s!==null&&(xa(s,a,n),uu(s,t,n)))}function cu(a,t,s){var n=Ca();bn(a,t,s,n)}function bn(a,t,s,n){var r={lane:n,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Or(a))du(t,r);else{var i=a.alternate;if(a.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,m=i(o,s);if(r.hasEagerState=!0,r.eagerState=m,ya(m,o))return dr(a,t,r,0),ze===null&&cr(),!1}catch{}if(s=$i(a,t,r,n),s!==null)return xa(s,a,n),uu(s,t,n),!0}return!1}function zl(a,t,s,n){if(n={lane:2,revertLane:xo(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Or(a)){if(t)throw Error(d(479))}else t=$i(a,s,n,2),t!==null&&xa(t,a,2)}function Or(a){var t=a.alternate;return a===de||t!==null&&t===de}function du(a,t){Rs=Nr=!0;var s=a.pending;s===null?t.next=t:(t.next=s.next,s.next=t),a.pending=t}function uu(a,t,s){if((s&4194048)!==0){var n=t.lanes;n&=a.pendingLanes,s|=n,t.lanes=s,fc(a,s)}}var yn={readContext:sa,use:Tr,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie,useHostTransitionStatus:Ie,useFormState:Ie,useActionState:Ie,useOptimistic:Ie,useMemoCache:Ie,useCacheRefresh:Ie};yn.useEffectEvent=Ie;var mu={readContext:sa,use:Tr,useCallback:function(a,t){return la().memoizedState=[a,t===void 0?null:t],a},useContext:sa,useEffect:Xd,useImperativeHandle:function(a,t,s){s=s!=null?s.concat([a]):null,Rr(4194308,4,Wd.bind(null,t,a),s)},useLayoutEffect:function(a,t){return Rr(4194308,4,a,t)},useInsertionEffect:function(a,t){Rr(4,2,a,t)},useMemo:function(a,t){var s=la();t=t===void 0?null:t;var n=a();if(as){ht(!0);try{a()}finally{ht(!1)}}return s.memoizedState=[n,t],n},useReducer:function(a,t,s){var n=la();if(s!==void 0){var r=s(t);if(as){ht(!0);try{s(t)}finally{ht(!1)}}}else r=t;return n.memoizedState=n.baseState=r,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:r},n.queue=a,a=a.dispatch=_h.bind(null,de,a),[n.memoizedState,a]},useRef:function(a){var t=la();return a={current:a},t.memoizedState=a},useState:function(a){a=Rl(a);var t=a.queue,s=cu.bind(null,de,t);return t.dispatch=s,[a.memoizedState,s]},useDebugValue:Dl,useDeferredValue:function(a,t){var s=la();return wl(s,a,t)},useTransition:function(){var a=Rl(!1);return a=nu.bind(null,de,a.queue,!0,!1),la().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,t,s){var n=de,r=la();if(ve){if(s===void 0)throw Error(d(407));s=s()}else{if(s=t(),ze===null)throw Error(d(349));(be&127)!==0||Ld(n,t,s)}r.memoizedState=s;var i={value:s,getSnapshot:t};return r.queue=i,Xd(zd.bind(null,n,i,a),[a]),n.flags|=2048,Os(9,{destroy:void 0},qd.bind(null,n,i,s,t),null),s},useId:function(){var a=la(),t=ze.identifierPrefix;if(ve){var s=Ia,n=Ha;s=(n&~(1<<32-ba(n)-1)).toString(32)+s,t="_"+t+"R_"+s,s=Er++,0<s&&(t+="H"+s.toString(32)),t+="_"}else s=Lh++,t="_"+t+"r_"+s.toString(32)+"_";return a.memoizedState=t},useHostTransitionStatus:ql,useFormState:Fd,useActionState:Fd,useOptimistic:function(a){var t=la();t.memoizedState=t.baseState=a;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=s,t=zl.bind(null,de,!0,s),s.dispatch=t,[a,t]},useMemoCache:Cl,useCacheRefresh:function(){return la().memoizedState=kh.bind(null,de)},useEffectEvent:function(a){var t=la(),s={impl:a};return t.memoizedState=s,function(){if((Te&2)!==0)throw Error(d(440));return s.impl.apply(void 0,arguments)}}},Ul={readContext:sa,use:Tr,useCallback:au,useContext:sa,useEffect:Ol,useImperativeHandle:eu,useInsertionEffect:Kd,useLayoutEffect:$d,useMemo:tu,useReducer:Ar,useRef:Qd,useState:function(){return Ar(st)},useDebugValue:Dl,useDeferredValue:function(a,t){var s=Ve();return su(s,De.memoizedState,a,t)},useTransition:function(){var a=Ar(st)[0],t=Ve().memoizedState;return[typeof a=="boolean"?a:gn(a),t]},useSyncExternalStore:wd,useId:lu,useHostTransitionStatus:ql,useFormState:Vd,useActionState:Vd,useOptimistic:function(a,t){var s=Ve();return Pd(s,De,a,t)},useMemoCache:Cl,useCacheRefresh:ou};Ul.useEffectEvent=Zd;var pu={readContext:sa,use:Tr,useCallback:au,useContext:sa,useEffect:Ol,useImperativeHandle:eu,useInsertionEffect:Kd,useLayoutEffect:$d,useMemo:tu,useReducer:Al,useRef:Qd,useState:function(){return Al(st)},useDebugValue:Dl,useDeferredValue:function(a,t){var s=Ve();return De===null?wl(s,a,t):su(s,De.memoizedState,a,t)},useTransition:function(){var a=Al(st)[0],t=Ve().memoizedState;return[typeof a=="boolean"?a:gn(a),t]},useSyncExternalStore:wd,useId:lu,useHostTransitionStatus:ql,useFormState:Yd,useActionState:Yd,useOptimistic:function(a,t){var s=Ve();return De!==null?Pd(s,De,a,t):(s.baseState=a,[a,s.queue.dispatch])},useMemoCache:Cl,useCacheRefresh:ou};pu.useEffectEvent=Zd;function Bl(a,t,s,n){t=a.memoizedState,s=s(n,t),s=s==null?t:y({},t,s),a.memoizedState=s,a.lanes===0&&(a.updateQueue.baseState=s)}var Pl={enqueueSetState:function(a,t,s){a=a._reactInternals;var n=Ca(),r=Nt(n);r.payload=t,s!=null&&(r.callback=s),t=Et(a,r,n),t!==null&&(xa(t,a,n),pn(t,a,n))},enqueueReplaceState:function(a,t,s){a=a._reactInternals;var n=Ca(),r=Nt(n);r.tag=1,r.payload=t,s!=null&&(r.callback=s),t=Et(a,r,n),t!==null&&(xa(t,a,n),pn(t,a,n))},enqueueForceUpdate:function(a,t){a=a._reactInternals;var s=Ca(),n=Nt(s);n.tag=2,t!=null&&(n.callback=t),t=Et(a,n,s),t!==null&&(xa(t,a,s),pn(t,a,s))}};function xu(a,t,s,n,r,i,o){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(n,i,o):t.prototype&&t.prototype.isPureReactComponent?!nn(s,n)||!nn(r,i):!0}function hu(a,t,s,n){a=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,n),t.state!==a&&Pl.enqueueReplaceState(t,t.state,null)}function ts(a,t){var s=t;if("ref"in t){s={};for(var n in t)n!=="ref"&&(s[n]=t[n])}if(a=a.defaultProps){s===t&&(s=y({},s));for(var r in a)s[r]===void 0&&(s[r]=a[r])}return s}function fu(a){or(a)}function gu(a){console.error(a)}function bu(a){or(a)}function Dr(a,t){try{var s=a.onUncaughtError;s(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function yu(a,t,s){try{var n=a.onCaughtError;n(s.value,{componentStack:s.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function kl(a,t,s){return s=Nt(s),s.tag=3,s.payload={element:null},s.callback=function(){Dr(a,t)},s}function ju(a){return a=Nt(a),a.tag=3,a}function vu(a,t,s,n){var r=s.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;a.payload=function(){return r(i)},a.callback=function(){yu(t,s,n)}}var o=s.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(a.callback=function(){yu(t,s,n),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function Hh(a,t,s,n,r){if(s.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=s.alternate,t!==null&&Ss(t,s,r,!0),s=va.current,s!==null){switch(s.tag){case 31:case 13:return qa===null?Jr():s.alternate===null&&Je===0&&(Je=3),s.flags&=-257,s.flags|=65536,s.lanes=r,n===br?s.flags|=16384:(t=s.updateQueue,t===null?s.updateQueue=new Set([n]):t.add(n),uo(a,n,r)),!1;case 22:return s.flags|=65536,n===br?s.flags|=16384:(t=s.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},s.updateQueue=t):(s=t.retryQueue,s===null?t.retryQueue=new Set([n]):s.add(n)),uo(a,n,r)),!1}throw Error(d(435,s.tag))}return uo(a,n,r),Jr(),!1}if(ve)return t=va.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,n!==nl&&(a=Error(d(422),{cause:n}),on(Oa(a,s)))):(n!==nl&&(t=Error(d(423),{cause:n}),on(Oa(t,s))),a=a.current.alternate,a.flags|=65536,r&=-r,a.lanes|=r,n=Oa(n,s),r=kl(a.stateNode,n,r),hl(a,r),Je!==4&&(Je=2)),!1;var i=Error(d(520),{cause:n});if(i=Oa(i,s),An===null?An=[i]:An.push(i),Je!==4&&(Je=2),t===null)return!0;n=Oa(n,s),s=t;do{switch(s.tag){case 3:return s.flags|=65536,a=r&-r,s.lanes|=a,a=kl(s.stateNode,n,a),hl(s,a),!1;case 1:if(t=s.type,i=s.stateNode,(s.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ot===null||!Ot.has(i))))return s.flags|=65536,r&=-r,s.lanes|=r,r=ju(r),vu(r,a,s,n),hl(s,r),!1}s=s.return}while(s!==null);return!1}var _l=Error(d(461)),Qe=!1;function na(a,t,s,n){t.child=a===null?Cd(t,null,s,n):es(t,a.child,s,n)}function Su(a,t,s,n,r){s=s.render;var i=t.ref;if("ref"in n){var o={};for(var m in n)m!=="ref"&&(o[m]=n[m])}else o=n;return Zt(t),n=vl(a,t,s,o,i,r),m=Sl(),a!==null&&!Qe?(Nl(a,t,r),nt(a,t,r)):(ve&&m&&tl(t),t.flags|=1,na(a,t,n,r),t.child)}function Nu(a,t,s,n,r){if(a===null){var i=s.type;return typeof i=="function"&&!Wi(i)&&i.defaultProps===void 0&&s.compare===null?(t.tag=15,t.type=i,Eu(a,t,i,n,r)):(a=mr(s.type,null,n,t,t.mode,r),a.ref=t.ref,a.return=t,t.child=a)}if(i=a.child,!Ql(a,r)){var o=i.memoizedProps;if(s=s.compare,s=s!==null?s:nn,s(o,n)&&a.ref===t.ref)return nt(a,t,r)}return t.flags|=1,a=$a(i,n),a.ref=t.ref,a.return=t,t.child=a}function Eu(a,t,s,n,r){if(a!==null){var i=a.memoizedProps;if(nn(i,n)&&a.ref===t.ref)if(Qe=!1,t.pendingProps=n=i,Ql(a,r))(a.flags&131072)!==0&&(Qe=!0);else return t.lanes=a.lanes,nt(a,t,r)}return Hl(a,t,s,n,r)}function Cu(a,t,s,n){var r=n.children,i=a!==null?a.memoizedState:null;if(a===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|s:s,a!==null){for(n=t.child=a.child,r=0;n!==null;)r=r|n.lanes|n.childLanes,n=n.sibling;n=r&~i}else n=0,t.child=null;return Tu(a,t,i,s,n)}if((s&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},a!==null&&fr(t,i!==null?i.cachePool:null),i!==null?Rd(t,i):gl(),Md(t);else return n=t.lanes=536870912,Tu(a,t,i!==null?i.baseLanes|s:s,s,n)}else i!==null?(fr(t,i.cachePool),Rd(t,i),Tt(),t.memoizedState=null):(a!==null&&fr(t,null),gl(),Tt());return na(a,t,r,s),t.child}function jn(a,t){return a!==null&&a.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Tu(a,t,s,n,r){var i=ul();return i=i===null?null:{parent:Ge._currentValue,pool:i},t.memoizedState={baseLanes:s,cachePool:i},a!==null&&fr(t,null),gl(),Md(t),a!==null&&Ss(a,t,n,!0),t.childLanes=r,null}function wr(a,t){return t=qr({mode:t.mode,children:t.children},a.mode),t.ref=a.ref,a.child=t,t.return=a,t}function Au(a,t,s){return es(t,a.child,null,s),a=wr(t,t.pendingProps),a.flags|=2,Sa(t),t.memoizedState=null,a}function Ih(a,t,s){var n=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,a===null){if(ve){if(n.mode==="hidden")return a=wr(t,n),t.lanes=536870912,jn(null,a);if(yl(t),(a=Be)?(a=km(a,La),a=a!==null&&a.data==="&"?a:null,a!==null&&(t.memoizedState={dehydrated:a,treeContext:bt!==null?{id:Ha,overflow:Ia}:null,retryLane:536870912,hydrationErrors:null},s=dd(a),s.return=t,t.child=s,ta=t,Be=null)):a=null,a===null)throw jt(t);return t.lanes=536870912,null}return wr(t,n)}var i=a.memoizedState;if(i!==null){var o=i.dehydrated;if(yl(t),r)if(t.flags&256)t.flags&=-257,t=Au(a,t,s);else if(t.memoizedState!==null)t.child=a.child,t.flags|=128,t=null;else throw Error(d(558));else if(Qe||Ss(a,t,s,!1),r=(s&a.childLanes)!==0,Qe||r){if(n=ze,n!==null&&(o=gc(n,s),o!==0&&o!==i.retryLane))throw i.retryLane=o,Gt(a,o),xa(n,a,o),_l;Jr(),t=Au(a,t,s)}else a=i.treeContext,Be=za(o.nextSibling),ta=t,ve=!0,yt=null,La=!1,a!==null&&pd(t,a),t=wr(t,n),t.flags|=4096;return t}return a=$a(a.child,{mode:n.mode,children:n.children}),a.ref=t.ref,t.child=a,a.return=t,a}function Lr(a,t){var s=t.ref;if(s===null)a!==null&&a.ref!==null&&(t.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(d(284));(a===null||a.ref!==s)&&(t.flags|=4194816)}}function Hl(a,t,s,n,r){return Zt(t),s=vl(a,t,s,n,void 0,r),n=Sl(),a!==null&&!Qe?(Nl(a,t,r),nt(a,t,r)):(ve&&n&&tl(t),t.flags|=1,na(a,t,s,r),t.child)}function Ru(a,t,s,n,r,i){return Zt(t),t.updateQueue=null,s=Dd(t,n,s,r),Od(a),n=Sl(),a!==null&&!Qe?(Nl(a,t,i),nt(a,t,i)):(ve&&n&&tl(t),t.flags|=1,na(a,t,s,i),t.child)}function Mu(a,t,s,n,r){if(Zt(t),t.stateNode===null){var i=bs,o=s.contextType;typeof o=="object"&&o!==null&&(i=sa(o)),i=new s(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Pl,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},pl(t),o=s.contextType,i.context=typeof o=="object"&&o!==null?sa(o):bs,i.state=t.memoizedState,o=s.getDerivedStateFromProps,typeof o=="function"&&(Bl(t,s,o,n),i.state=t.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Pl.enqueueReplaceState(i,i.state,null),hn(t,n,i,r),xn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(a===null){i=t.stateNode;var m=t.memoizedProps,b=ts(s,m);i.props=b;var O=i.context,U=s.contextType;o=bs,typeof U=="object"&&U!==null&&(o=sa(U));var H=s.getDerivedStateFromProps;U=typeof H=="function"||typeof i.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,U||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(m||O!==o)&&hu(t,i,n,o),St=!1;var D=t.memoizedState;i.state=D,hn(t,n,i,r),xn(),O=t.memoizedState,m||D!==O||St?(typeof H=="function"&&(Bl(t,s,H,n),O=t.memoizedState),(b=St||xu(t,s,b,n,D,O,o))?(U||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=O),i.props=n,i.state=O,i.context=o,n=b):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,xl(a,t),o=t.memoizedProps,U=ts(s,o),i.props=U,H=t.pendingProps,D=i.context,O=s.contextType,b=bs,typeof O=="object"&&O!==null&&(b=sa(O)),m=s.getDerivedStateFromProps,(O=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==H||D!==b)&&hu(t,i,n,b),St=!1,D=t.memoizedState,i.state=D,hn(t,n,i,r),xn();var w=t.memoizedState;o!==H||D!==w||St||a!==null&&a.dependencies!==null&&xr(a.dependencies)?(typeof m=="function"&&(Bl(t,s,m,n),w=t.memoizedState),(U=St||xu(t,s,U,n,D,w,b)||a!==null&&a.dependencies!==null&&xr(a.dependencies))?(O||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,w,b),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,w,b)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===a.memoizedProps&&D===a.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===a.memoizedProps&&D===a.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),i.props=n,i.state=w,i.context=b,n=U):(typeof i.componentDidUpdate!="function"||o===a.memoizedProps&&D===a.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===a.memoizedProps&&D===a.memoizedState||(t.flags|=1024),n=!1)}return i=n,Lr(a,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,s=n&&typeof s.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,a!==null&&n?(t.child=es(t,a.child,null,r),t.child=es(t,null,s,r)):na(a,t,s,r),t.memoizedState=i.state,a=t.child):a=nt(a,t,r),a}function Ou(a,t,s,n){return Qt(),t.flags|=256,na(a,t,s,n),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jl(a){return{baseLanes:a,cachePool:yd()}}function Fl(a,t,s){return a=a!==null?a.childLanes&~s:0,t&&(a|=Ea),a}function Du(a,t,s){var n=t.pendingProps,r=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=a!==null&&a.memoizedState===null?!1:(Fe.current&2)!==0),o&&(r=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,a===null){if(ve){if(r?Ct(t):Tt(),(a=Be)?(a=km(a,La),a=a!==null&&a.data!=="&"?a:null,a!==null&&(t.memoizedState={dehydrated:a,treeContext:bt!==null?{id:Ha,overflow:Ia}:null,retryLane:536870912,hydrationErrors:null},s=dd(a),s.return=t,t.child=s,ta=t,Be=null)):a=null,a===null)throw jt(t);return Ao(a)?t.lanes=32:t.lanes=536870912,null}var m=n.children;return n=n.fallback,r?(Tt(),r=t.mode,m=qr({mode:"hidden",children:m},r),n=Yt(n,r,s,null),m.return=t,n.return=t,m.sibling=n,t.child=m,n=t.child,n.memoizedState=Jl(s),n.childLanes=Fl(a,o,s),t.memoizedState=Il,jn(null,n)):(Ct(t),Vl(t,m))}var b=a.memoizedState;if(b!==null&&(m=b.dehydrated,m!==null)){if(i)t.flags&256?(Ct(t),t.flags&=-257,t=Gl(a,t,s)):t.memoizedState!==null?(Tt(),t.child=a.child,t.flags|=128,t=null):(Tt(),m=n.fallback,r=t.mode,n=qr({mode:"visible",children:n.children},r),m=Yt(m,r,s,null),m.flags|=2,n.return=t,m.return=t,n.sibling=m,t.child=n,es(t,a.child,null,s),n=t.child,n.memoizedState=Jl(s),n.childLanes=Fl(a,o,s),t.memoizedState=Il,t=jn(null,n));else if(Ct(t),Ao(m)){if(o=m.nextSibling&&m.nextSibling.dataset,o)var O=o.dgst;o=O,n=Error(d(419)),n.stack="",n.digest=o,on({value:n,source:null,stack:null}),t=Gl(a,t,s)}else if(Qe||Ss(a,t,s,!1),o=(s&a.childLanes)!==0,Qe||o){if(o=ze,o!==null&&(n=gc(o,s),n!==0&&n!==b.retryLane))throw b.retryLane=n,Gt(a,n),xa(o,a,n),_l;To(m)||Jr(),t=Gl(a,t,s)}else To(m)?(t.flags|=192,t.child=a.child,t=null):(a=b.treeContext,Be=za(m.nextSibling),ta=t,ve=!0,yt=null,La=!1,a!==null&&pd(t,a),t=Vl(t,n.children),t.flags|=4096);return t}return r?(Tt(),m=n.fallback,r=t.mode,b=a.child,O=b.sibling,n=$a(b,{mode:"hidden",children:n.children}),n.subtreeFlags=b.subtreeFlags&65011712,O!==null?m=$a(O,m):(m=Yt(m,r,s,null),m.flags|=2),m.return=t,n.return=t,n.sibling=m,t.child=n,jn(null,n),n=t.child,m=a.child.memoizedState,m===null?m=Jl(s):(r=m.cachePool,r!==null?(b=Ge._currentValue,r=r.parent!==b?{parent:b,pool:b}:r):r=yd(),m={baseLanes:m.baseLanes|s,cachePool:r}),n.memoizedState=m,n.childLanes=Fl(a,o,s),t.memoizedState=Il,jn(a.child,n)):(Ct(t),s=a.child,a=s.sibling,s=$a(s,{mode:"visible",children:n.children}),s.return=t,s.sibling=null,a!==null&&(o=t.deletions,o===null?(t.deletions=[a],t.flags|=16):o.push(a)),t.child=s,t.memoizedState=null,s)}function Vl(a,t){return t=qr({mode:"visible",children:t},a.mode),t.return=a,a.child=t}function qr(a,t){return a=ja(22,a,null,t),a.lanes=0,a}function Gl(a,t,s){return es(t,a.child,null,s),a=Vl(t,t.pendingProps.children),a.flags|=2,t.memoizedState=null,a}function wu(a,t,s){a.lanes|=t;var n=a.alternate;n!==null&&(n.lanes|=t),ll(a.return,t,s)}function Yl(a,t,s,n,r,i){var o=a.memoizedState;o===null?a.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:s,tailMode:r,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=s,o.tailMode=r,o.treeForkCount=i)}function Lu(a,t,s){var n=t.pendingProps,r=n.revealOrder,i=n.tail;n=n.children;var o=Fe.current,m=(o&2)!==0;if(m?(o=o&1|2,t.flags|=128):o&=1,Y(Fe,o),na(a,t,n,s),n=ve?ln:0,!m&&a!==null&&(a.flags&128)!==0)e:for(a=t.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&wu(a,s,t);else if(a.tag===19)wu(a,s,t);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}switch(r){case"forwards":for(s=t.child,r=null;s!==null;)a=s.alternate,a!==null&&Sr(a)===null&&(r=s),s=s.sibling;s=r,s===null?(r=t.child,t.child=null):(r=s.sibling,s.sibling=null),Yl(t,!1,r,s,i,n);break;case"backwards":case"unstable_legacy-backwards":for(s=null,r=t.child,t.child=null;r!==null;){if(a=r.alternate,a!==null&&Sr(a)===null){t.child=r;break}a=r.sibling,r.sibling=s,s=r,r=a}Yl(t,!0,s,null,i,n);break;case"together":Yl(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function nt(a,t,s){if(a!==null&&(t.dependencies=a.dependencies),Mt|=t.lanes,(s&t.childLanes)===0)if(a!==null){if(Ss(a,t,s,!1),(s&t.childLanes)===0)return null}else return null;if(a!==null&&t.child!==a.child)throw Error(d(153));if(t.child!==null){for(a=t.child,s=$a(a,a.pendingProps),t.child=s,s.return=t;a.sibling!==null;)a=a.sibling,s=s.sibling=$a(a,a.pendingProps),s.return=t;s.sibling=null}return t.child}function Ql(a,t){return(a.lanes&t)!==0?!0:(a=a.dependencies,!!(a!==null&&xr(a)))}function Jh(a,t,s){switch(t.tag){case 3:ea(t,t.stateNode.containerInfo),vt(t,Ge,a.memoizedState.cache),Qt();break;case 27:case 5:Vs(t);break;case 4:ea(t,t.stateNode.containerInfo);break;case 10:vt(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,yl(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ct(t),t.flags|=128,null):(s&t.child.childLanes)!==0?Du(a,t,s):(Ct(t),a=nt(a,t,s),a!==null?a.sibling:null);Ct(t);break;case 19:var r=(a.flags&128)!==0;if(n=(s&t.childLanes)!==0,n||(Ss(a,t,s,!1),n=(s&t.childLanes)!==0),r){if(n)return Lu(a,t,s);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Y(Fe,Fe.current),n)break;return null;case 22:return t.lanes=0,Cu(a,t,s,t.pendingProps);case 24:vt(t,Ge,a.memoizedState.cache)}return nt(a,t,s)}function qu(a,t,s){if(a!==null)if(a.memoizedProps!==t.pendingProps)Qe=!0;else{if(!Ql(a,s)&&(t.flags&128)===0)return Qe=!1,Jh(a,t,s);Qe=(a.flags&131072)!==0}else Qe=!1,ve&&(t.flags&1048576)!==0&&md(t,ln,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(a=$t(t.elementType),t.type=a,typeof a=="function")Wi(a)?(n=ts(a,n),t.tag=1,t=Mu(null,t,a,n,s)):(t.tag=0,t=Hl(null,t,a,n,s));else{if(a!=null){var r=a.$$typeof;if(r===$){t.tag=11,t=Su(null,t,a,n,s);break e}else if(r===X){t.tag=14,t=Nu(null,t,a,n,s);break e}}throw t=Re(a)||a,Error(d(306,t,""))}}return t;case 0:return Hl(a,t,t.type,t.pendingProps,s);case 1:return n=t.type,r=ts(n,t.pendingProps),Mu(a,t,n,r,s);case 3:e:{if(ea(t,t.stateNode.containerInfo),a===null)throw Error(d(387));n=t.pendingProps;var i=t.memoizedState;r=i.element,xl(a,t),hn(t,n,null,s);var o=t.memoizedState;if(n=o.cache,vt(t,Ge,n),n!==i.cache&&ol(t,[Ge],s,!0),xn(),n=o.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Ou(a,t,n,s);break e}else if(n!==r){r=Oa(Error(d(424)),t),on(r),t=Ou(a,t,n,s);break e}else for(a=t.stateNode.containerInfo,a.nodeType===9?a=a.body:a=a.nodeName==="HTML"?a.ownerDocument.body:a,Be=za(a.firstChild),ta=t,ve=!0,yt=null,La=!0,s=Cd(t,null,n,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Qt(),n===r){t=nt(a,t,s);break e}na(a,t,n,s)}t=t.child}return t;case 26:return Lr(a,t),a===null?(s=Vm(t.type,null,t.pendingProps,null))?t.memoizedState=s:ve||(s=t.type,a=t.pendingProps,n=Zr(ue.current).createElement(s),n[aa]=t,n[oa]=a,ra(n,s,a),$e(n),t.stateNode=n):t.memoizedState=Vm(t.type,a.memoizedProps,t.pendingProps,a.memoizedState),null;case 27:return Vs(t),a===null&&ve&&(n=t.stateNode=Im(t.type,t.pendingProps,ue.current),ta=t,La=!0,r=Be,qt(t.type)?(Ro=r,Be=za(n.firstChild)):Be=r),na(a,t,t.pendingProps.children,s),Lr(a,t),a===null&&(t.flags|=4194304),t.child;case 5:return a===null&&ve&&((r=n=Be)&&(n=jf(n,t.type,t.pendingProps,La),n!==null?(t.stateNode=n,ta=t,Be=za(n.firstChild),La=!1,r=!0):r=!1),r||jt(t)),Vs(t),r=t.type,i=t.pendingProps,o=a!==null?a.memoizedProps:null,n=i.children,No(r,i)?n=null:o!==null&&No(r,o)&&(t.flags|=32),t.memoizedState!==null&&(r=vl(a,t,qh,null,null,s),zn._currentValue=r),Lr(a,t),na(a,t,n,s),t.child;case 6:return a===null&&ve&&((a=s=Be)&&(s=vf(s,t.pendingProps,La),s!==null?(t.stateNode=s,ta=t,Be=null,a=!0):a=!1),a||jt(t)),null;case 13:return Du(a,t,s);case 4:return ea(t,t.stateNode.containerInfo),n=t.pendingProps,a===null?t.child=es(t,null,n,s):na(a,t,n,s),t.child;case 11:return Su(a,t,t.type,t.pendingProps,s);case 7:return na(a,t,t.pendingProps,s),t.child;case 8:return na(a,t,t.pendingProps.children,s),t.child;case 12:return na(a,t,t.pendingProps.children,s),t.child;case 10:return n=t.pendingProps,vt(t,t.type,n.value),na(a,t,n.children,s),t.child;case 9:return r=t.type._context,n=t.pendingProps.children,Zt(t),r=sa(r),n=n(r),t.flags|=1,na(a,t,n,s),t.child;case 14:return Nu(a,t,t.type,t.pendingProps,s);case 15:return Eu(a,t,t.type,t.pendingProps,s);case 19:return Lu(a,t,s);case 31:return Ih(a,t,s);case 22:return Cu(a,t,s,t.pendingProps);case 24:return Zt(t),n=sa(Ge),a===null?(r=ul(),r===null&&(r=ze,i=cl(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=s),r=i),t.memoizedState={parent:n,cache:r},pl(t),vt(t,Ge,r)):((a.lanes&s)!==0&&(xl(a,t),hn(t,null,null,s),xn()),r=a.memoizedState,i=t.memoizedState,r.parent!==n?(r={parent:n,cache:n},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),vt(t,Ge,n)):(n=i.cache,vt(t,Ge,n),n!==r.cache&&ol(t,[Ge],s,!0))),na(a,t,t.pendingProps.children,s),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function rt(a){a.flags|=4}function Xl(a,t,s,n,r){if((t=(a.mode&32)!==0)&&(t=!1),t){if(a.flags|=16777216,(r&335544128)===r)if(a.stateNode.complete)a.flags|=8192;else if(lm())a.flags|=8192;else throw Wt=br,ml}else a.flags&=-16777217}function zu(a,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)a.flags&=-16777217;else if(a.flags|=16777216,!Zm(t))if(lm())a.flags|=8192;else throw Wt=br,ml}function zr(a,t){t!==null&&(a.flags|=4),a.flags&16384&&(t=a.tag!==22?xc():536870912,a.lanes|=t,qs|=t)}function vn(a,t){if(!ve)switch(a.tailMode){case"hidden":t=a.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?a.tail=null:s.sibling=null;break;case"collapsed":s=a.tail;for(var n=null;s!==null;)s.alternate!==null&&(n=s),s=s.sibling;n===null?t||a.tail===null?a.tail=null:a.tail.sibling=null:n.sibling=null}}function Pe(a){var t=a.alternate!==null&&a.alternate.child===a.child,s=0,n=0;if(t)for(var r=a.child;r!==null;)s|=r.lanes|r.childLanes,n|=r.subtreeFlags&65011712,n|=r.flags&65011712,r.return=a,r=r.sibling;else for(r=a.child;r!==null;)s|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=a,r=r.sibling;return a.subtreeFlags|=n,a.childLanes=s,t}function Fh(a,t,s){var n=t.pendingProps;switch(sl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Pe(t),null;case 3:return s=t.stateNode,n=null,a!==null&&(n=a.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),at(Ge),Ue(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(a===null||a.child===null)&&(vs(t)?rt(t):a===null||a.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rl())),Pe(t),null;case 26:var r=t.type,i=t.memoizedState;return a===null?(rt(t),i!==null?(Pe(t),zu(t,i)):(Pe(t),Xl(t,r,null,n,s))):i?i!==a.memoizedState?(rt(t),Pe(t),zu(t,i)):(Pe(t),t.flags&=-16777217):(a=a.memoizedProps,a!==n&&rt(t),Pe(t),Xl(t,r,a,n,s)),null;case 27:if(Gn(t),s=ue.current,r=t.type,a!==null&&t.stateNode!=null)a.memoizedProps!==n&&rt(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return Pe(t),null}a=Q.current,vs(t)?xd(t):(a=Im(r,n,s),t.stateNode=a,rt(t))}return Pe(t),null;case 5:if(Gn(t),r=t.type,a!==null&&t.stateNode!=null)a.memoizedProps!==n&&rt(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return Pe(t),null}if(i=Q.current,vs(t))xd(t);else{var o=Zr(ue.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?o.createElement(r,{is:n.is}):o.createElement(r)}}i[aa]=t,i[oa]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(ra(i,r,n),r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&rt(t)}}return Pe(t),Xl(t,t.type,a===null?null:a.memoizedProps,t.pendingProps,s),null;case 6:if(a&&t.stateNode!=null)a.memoizedProps!==n&&rt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(d(166));if(a=ue.current,vs(t)){if(a=t.stateNode,s=t.memoizedProps,n=null,r=ta,r!==null)switch(r.tag){case 27:case 5:n=r.memoizedProps}a[aa]=t,a=!!(a.nodeValue===s||n!==null&&n.suppressHydrationWarning===!0||Dm(a.nodeValue,s)),a||jt(t,!0)}else a=Zr(a).createTextNode(n),a[aa]=t,t.stateNode=a}return Pe(t),null;case 31:if(s=t.memoizedState,a===null||a.memoizedState!==null){if(n=vs(t),s!==null){if(a===null){if(!n)throw Error(d(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(d(557));a[aa]=t}else Qt(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),a=!1}else s=rl(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=s),a=!0;if(!a)return t.flags&256?(Sa(t),t):(Sa(t),null);if((t.flags&128)!==0)throw Error(d(558))}return Pe(t),null;case 13:if(n=t.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(r=vs(t),n!==null&&n.dehydrated!==null){if(a===null){if(!r)throw Error(d(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[aa]=t}else Qt(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),r=!1}else r=rl(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Sa(t),t):(Sa(t),null)}return Sa(t),(t.flags&128)!==0?(t.lanes=s,t):(s=n!==null,a=a!==null&&a.memoizedState!==null,s&&(n=t.child,r=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(r=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==r&&(n.flags|=2048)),s!==a&&s&&(t.child.flags|=8192),zr(t,t.updateQueue),Pe(t),null);case 4:return Ue(),a===null&&bo(t.stateNode.containerInfo),Pe(t),null;case 10:return at(t.type),Pe(t),null;case 19:if(_(Fe),n=t.memoizedState,n===null)return Pe(t),null;if(r=(t.flags&128)!==0,i=n.rendering,i===null)if(r)vn(n,!1);else{if(Je!==0||a!==null&&(a.flags&128)!==0)for(a=t.child;a!==null;){if(i=Sr(a),i!==null){for(t.flags|=128,vn(n,!1),a=i.updateQueue,t.updateQueue=a,zr(t,a),t.subtreeFlags=0,a=s,s=t.child;s!==null;)cd(s,a),s=s.sibling;return Y(Fe,Fe.current&1|2),ve&&Wa(t,n.treeForkCount),t.child}a=a.sibling}n.tail!==null&&fa()>_r&&(t.flags|=128,r=!0,vn(n,!1),t.lanes=4194304)}else{if(!r)if(a=Sr(i),a!==null){if(t.flags|=128,r=!0,a=a.updateQueue,t.updateQueue=a,zr(t,a),vn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!ve)return Pe(t),null}else 2*fa()-n.renderingStartTime>_r&&s!==536870912&&(t.flags|=128,r=!0,vn(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(a=n.last,a!==null?a.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(a=n.tail,n.rendering=a,n.tail=a.sibling,n.renderingStartTime=fa(),a.sibling=null,s=Fe.current,Y(Fe,r?s&1|2:s&1),ve&&Wa(t,n.treeForkCount),a):(Pe(t),null);case 22:case 23:return Sa(t),bl(),n=t.memoizedState!==null,a!==null?a.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(s&536870912)!==0&&(t.flags&128)===0&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),s=t.updateQueue,s!==null&&zr(t,s.retryQueue),s=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==s&&(t.flags|=2048),a!==null&&_(Kt),null;case 24:return s=null,a!==null&&(s=a.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),at(Ge),Pe(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function Vh(a,t){switch(sl(t),t.tag){case 1:return a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 3:return at(Ge),Ue(),a=t.flags,(a&65536)!==0&&(a&128)===0?(t.flags=a&-65537|128,t):null;case 26:case 27:case 5:return Gn(t),null;case 31:if(t.memoizedState!==null){if(Sa(t),t.alternate===null)throw Error(d(340));Qt()}return a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 13:if(Sa(t),a=t.memoizedState,a!==null&&a.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Qt()}return a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 19:return _(Fe),null;case 4:return Ue(),null;case 10:return at(t.type),null;case 22:case 23:return Sa(t),bl(),a!==null&&_(Kt),a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 24:return at(Ge),null;case 25:return null;default:return null}}function Uu(a,t){switch(sl(t),t.tag){case 3:at(Ge),Ue();break;case 26:case 27:case 5:Gn(t);break;case 4:Ue();break;case 31:t.memoizedState!==null&&Sa(t);break;case 13:Sa(t);break;case 19:_(Fe);break;case 10:at(t.type);break;case 22:case 23:Sa(t),bl(),a!==null&&_(Kt);break;case 24:at(Ge)}}function Sn(a,t){try{var s=t.updateQueue,n=s!==null?s.lastEffect:null;if(n!==null){var r=n.next;s=r;do{if((s.tag&a)===a){n=void 0;var i=s.create,o=s.inst;n=i(),o.destroy=n}s=s.next}while(s!==r)}}catch(m){Oe(t,t.return,m)}}function At(a,t,s){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var i=r.next;n=i;do{if((n.tag&a)===a){var o=n.inst,m=o.destroy;if(m!==void 0){o.destroy=void 0,r=t;var b=s,O=m;try{O()}catch(U){Oe(r,b,U)}}}n=n.next}while(n!==i)}}catch(U){Oe(t,t.return,U)}}function Bu(a){var t=a.updateQueue;if(t!==null){var s=a.stateNode;try{Ad(t,s)}catch(n){Oe(a,a.return,n)}}}function Pu(a,t,s){s.props=ts(a.type,a.memoizedProps),s.state=a.memoizedState;try{s.componentWillUnmount()}catch(n){Oe(a,t,n)}}function Nn(a,t){try{var s=a.ref;if(s!==null){switch(a.tag){case 26:case 27:case 5:var n=a.stateNode;break;case 30:n=a.stateNode;break;default:n=a.stateNode}typeof s=="function"?a.refCleanup=s(n):s.current=n}}catch(r){Oe(a,t,r)}}function Ja(a,t){var s=a.ref,n=a.refCleanup;if(s!==null)if(typeof n=="function")try{n()}catch(r){Oe(a,t,r)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(r){Oe(a,t,r)}else s.current=null}function ku(a){var t=a.type,s=a.memoizedProps,n=a.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break e;case"img":s.src?n.src=s.src:s.srcSet&&(n.srcset=s.srcSet)}}catch(r){Oe(a,a.return,r)}}function Zl(a,t,s){try{var n=a.stateNode;xf(n,a.type,s,t),n[oa]=t}catch(r){Oe(a,a.return,r)}}function _u(a){return a.tag===5||a.tag===3||a.tag===26||a.tag===27&&qt(a.type)||a.tag===4}function Kl(a){e:for(;;){for(;a.sibling===null;){if(a.return===null||_u(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.tag===27&&qt(a.type)||a.flags&2||a.child===null||a.tag===4)continue e;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function $l(a,t,s){var n=a.tag;if(n===5||n===6)a=a.stateNode,t?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(a,t):(t=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,t.appendChild(a),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=Za));else if(n!==4&&(n===27&&qt(a.type)&&(s=a.stateNode,t=null),a=a.child,a!==null))for($l(a,t,s),a=a.sibling;a!==null;)$l(a,t,s),a=a.sibling}function Ur(a,t,s){var n=a.tag;if(n===5||n===6)a=a.stateNode,t?s.insertBefore(a,t):s.appendChild(a);else if(n!==4&&(n===27&&qt(a.type)&&(s=a.stateNode),a=a.child,a!==null))for(Ur(a,t,s),a=a.sibling;a!==null;)Ur(a,t,s),a=a.sibling}function Hu(a){var t=a.stateNode,s=a.memoizedProps;try{for(var n=a.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ra(t,n,s),t[aa]=a,t[oa]=s}catch(i){Oe(a,a.return,i)}}var it=!1,Xe=!1,Wl=!1,Iu=typeof WeakSet=="function"?WeakSet:Set,We=null;function Gh(a,t){if(a=a.containerInfo,vo=si,a=ed(a),Gi(a)){if("selectionStart"in a)var s={start:a.selectionStart,end:a.selectionEnd};else e:{s=(s=a.ownerDocument)&&s.defaultView||window;var n=s.getSelection&&s.getSelection();if(n&&n.rangeCount!==0){s=n.anchorNode;var r=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{s.nodeType,i.nodeType}catch{s=null;break e}var o=0,m=-1,b=-1,O=0,U=0,H=a,D=null;a:for(;;){for(var w;H!==s||r!==0&&H.nodeType!==3||(m=o+r),H!==i||n!==0&&H.nodeType!==3||(b=o+n),H.nodeType===3&&(o+=H.nodeValue.length),(w=H.firstChild)!==null;)D=H,H=w;for(;;){if(H===a)break a;if(D===s&&++O===r&&(m=o),D===i&&++U===n&&(b=o),(w=H.nextSibling)!==null)break;H=D,D=H.parentNode}H=w}s=m===-1||b===-1?null:{start:m,end:b}}else s=null}s=s||{start:0,end:0}}else s=null;for(So={focusedElem:a,selectionRange:s},si=!1,We=t;We!==null;)if(t=We,a=t.child,(t.subtreeFlags&1028)!==0&&a!==null)a.return=t,We=a;else for(;We!==null;){switch(t=We,i=t.alternate,a=t.flags,t.tag){case 0:if((a&4)!==0&&(a=t.updateQueue,a=a!==null?a.events:null,a!==null))for(s=0;s<a.length;s++)r=a[s],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((a&1024)!==0&&i!==null){a=void 0,s=t,r=i.memoizedProps,i=i.memoizedState,n=s.stateNode;try{var Z=ts(s.type,r);a=n.getSnapshotBeforeUpdate(Z,i),n.__reactInternalSnapshotBeforeUpdate=a}catch(re){Oe(s,s.return,re)}}break;case 3:if((a&1024)!==0){if(a=t.stateNode.containerInfo,s=a.nodeType,s===9)Co(a);else if(s===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":Co(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((a&1024)!==0)throw Error(d(163))}if(a=t.sibling,a!==null){a.return=t.return,We=a;break}We=t.return}}function Ju(a,t,s){var n=s.flags;switch(s.tag){case 0:case 11:case 15:ot(a,s),n&4&&Sn(5,s);break;case 1:if(ot(a,s),n&4)if(a=s.stateNode,t===null)try{a.componentDidMount()}catch(o){Oe(s,s.return,o)}else{var r=ts(s.type,t.memoizedProps);t=t.memoizedState;try{a.componentDidUpdate(r,t,a.__reactInternalSnapshotBeforeUpdate)}catch(o){Oe(s,s.return,o)}}n&64&&Bu(s),n&512&&Nn(s,s.return);break;case 3:if(ot(a,s),n&64&&(a=s.updateQueue,a!==null)){if(t=null,s.child!==null)switch(s.child.tag){case 27:case 5:t=s.child.stateNode;break;case 1:t=s.child.stateNode}try{Ad(a,t)}catch(o){Oe(s,s.return,o)}}break;case 27:t===null&&n&4&&Hu(s);case 26:case 5:ot(a,s),t===null&&n&4&&ku(s),n&512&&Nn(s,s.return);break;case 12:ot(a,s);break;case 31:ot(a,s),n&4&&Gu(a,s);break;case 13:ot(a,s),n&4&&Yu(a,s),n&64&&(a=s.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&(s=af.bind(null,s),Sf(a,s))));break;case 22:if(n=s.memoizedState!==null||it,!n){t=t!==null&&t.memoizedState!==null||Xe,r=it;var i=Xe;it=n,(Xe=t)&&!i?ct(a,s,(s.subtreeFlags&8772)!==0):ot(a,s),it=r,Xe=i}break;case 30:break;default:ot(a,s)}}function Fu(a){var t=a.alternate;t!==null&&(a.alternate=null,Fu(t)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(t=a.stateNode,t!==null&&Mi(t)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}var ke=null,da=!1;function lt(a,t,s){for(s=s.child;s!==null;)Vu(a,t,s),s=s.sibling}function Vu(a,t,s){if(ga&&typeof ga.onCommitFiberUnmount=="function")try{ga.onCommitFiberUnmount(Gs,s)}catch{}switch(s.tag){case 26:Xe||Ja(s,t),lt(a,t,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Xe||Ja(s,t);var n=ke,r=da;qt(s.type)&&(ke=s.stateNode,da=!1),lt(a,t,s),wn(s.stateNode),ke=n,da=r;break;case 5:Xe||Ja(s,t);case 6:if(n=ke,r=da,ke=null,lt(a,t,s),ke=n,da=r,ke!==null)if(da)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(s.stateNode)}catch(i){Oe(s,t,i)}else try{ke.removeChild(s.stateNode)}catch(i){Oe(s,t,i)}break;case 18:ke!==null&&(da?(a=ke,Bm(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,s.stateNode),Is(a)):Bm(ke,s.stateNode));break;case 4:n=ke,r=da,ke=s.stateNode.containerInfo,da=!0,lt(a,t,s),ke=n,da=r;break;case 0:case 11:case 14:case 15:At(2,s,t),Xe||At(4,s,t),lt(a,t,s);break;case 1:Xe||(Ja(s,t),n=s.stateNode,typeof n.componentWillUnmount=="function"&&Pu(s,t,n)),lt(a,t,s);break;case 21:lt(a,t,s);break;case 22:Xe=(n=Xe)||s.memoizedState!==null,lt(a,t,s),Xe=n;break;default:lt(a,t,s)}}function Gu(a,t){if(t.memoizedState===null&&(a=t.alternate,a!==null&&(a=a.memoizedState,a!==null))){a=a.dehydrated;try{Is(a)}catch(s){Oe(t,t.return,s)}}}function Yu(a,t){if(t.memoizedState===null&&(a=t.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{Is(a)}catch(s){Oe(t,t.return,s)}}function Yh(a){switch(a.tag){case 31:case 13:case 19:var t=a.stateNode;return t===null&&(t=a.stateNode=new Iu),t;case 22:return a=a.stateNode,t=a._retryCache,t===null&&(t=a._retryCache=new Iu),t;default:throw Error(d(435,a.tag))}}function Br(a,t){var s=Yh(a);t.forEach(function(n){if(!s.has(n)){s.add(n);var r=tf.bind(null,a,n);n.then(r,r)}})}function ua(a,t){var s=t.deletions;if(s!==null)for(var n=0;n<s.length;n++){var r=s[n],i=a,o=t,m=o;e:for(;m!==null;){switch(m.tag){case 27:if(qt(m.type)){ke=m.stateNode,da=!1;break e}break;case 5:ke=m.stateNode,da=!1;break e;case 3:case 4:ke=m.stateNode.containerInfo,da=!0;break e}m=m.return}if(ke===null)throw Error(d(160));Vu(i,o,r),ke=null,da=!1,i=r.alternate,i!==null&&(i.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Qu(t,a),t=t.sibling}var ka=null;function Qu(a,t){var s=a.alternate,n=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ua(t,a),ma(a),n&4&&(At(3,a,a.return),Sn(3,a),At(5,a,a.return));break;case 1:ua(t,a),ma(a),n&512&&(Xe||s===null||Ja(s,s.return)),n&64&&it&&(a=a.updateQueue,a!==null&&(n=a.callbacks,n!==null&&(s=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=s===null?n:s.concat(n))));break;case 26:var r=ka;if(ua(t,a),ma(a),n&512&&(Xe||s===null||Ja(s,s.return)),n&4){var i=s!==null?s.memoizedState:null;if(n=a.memoizedState,s===null)if(n===null)if(a.stateNode===null){e:{n=a.type,s=a.memoizedProps,r=r.ownerDocument||r;a:switch(n){case"title":i=r.getElementsByTagName("title")[0],(!i||i[Xs]||i[aa]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=r.createElement(n),r.head.insertBefore(i,r.querySelector("head > title"))),ra(i,n,s),i[aa]=a,$e(i),n=i;break e;case"link":var o=Qm("link","href",r).get(n+(s.href||""));if(o){for(var m=0;m<o.length;m++)if(i=o[m],i.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&i.getAttribute("rel")===(s.rel==null?null:s.rel)&&i.getAttribute("title")===(s.title==null?null:s.title)&&i.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){o.splice(m,1);break a}}i=r.createElement(n),ra(i,n,s),r.head.appendChild(i);break;case"meta":if(o=Qm("meta","content",r).get(n+(s.content||""))){for(m=0;m<o.length;m++)if(i=o[m],i.getAttribute("content")===(s.content==null?null:""+s.content)&&i.getAttribute("name")===(s.name==null?null:s.name)&&i.getAttribute("property")===(s.property==null?null:s.property)&&i.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&i.getAttribute("charset")===(s.charSet==null?null:s.charSet)){o.splice(m,1);break a}}i=r.createElement(n),ra(i,n,s),r.head.appendChild(i);break;default:throw Error(d(468,n))}i[aa]=a,$e(i),n=i}a.stateNode=n}else Xm(r,a.type,a.stateNode);else a.stateNode=Ym(r,n,a.memoizedProps);else i!==n?(i===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):i.count--,n===null?Xm(r,a.type,a.stateNode):Ym(r,n,a.memoizedProps)):n===null&&a.stateNode!==null&&Zl(a,a.memoizedProps,s.memoizedProps)}break;case 27:ua(t,a),ma(a),n&512&&(Xe||s===null||Ja(s,s.return)),s!==null&&n&4&&Zl(a,a.memoizedProps,s.memoizedProps);break;case 5:if(ua(t,a),ma(a),n&512&&(Xe||s===null||Ja(s,s.return)),a.flags&32){r=a.stateNode;try{us(r,"")}catch(Z){Oe(a,a.return,Z)}}n&4&&a.stateNode!=null&&(r=a.memoizedProps,Zl(a,r,s!==null?s.memoizedProps:r)),n&1024&&(Wl=!0);break;case 6:if(ua(t,a),ma(a),n&4){if(a.stateNode===null)throw Error(d(162));n=a.memoizedProps,s=a.stateNode;try{s.nodeValue=n}catch(Z){Oe(a,a.return,Z)}}break;case 3:if(Wr=null,r=ka,ka=Kr(t.containerInfo),ua(t,a),ka=r,ma(a),n&4&&s!==null&&s.memoizedState.isDehydrated)try{Is(t.containerInfo)}catch(Z){Oe(a,a.return,Z)}Wl&&(Wl=!1,Xu(a));break;case 4:n=ka,ka=Kr(a.stateNode.containerInfo),ua(t,a),ma(a),ka=n;break;case 12:ua(t,a),ma(a);break;case 31:ua(t,a),ma(a),n&4&&(n=a.updateQueue,n!==null&&(a.updateQueue=null,Br(a,n)));break;case 13:ua(t,a),ma(a),a.child.flags&8192&&a.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(kr=fa()),n&4&&(n=a.updateQueue,n!==null&&(a.updateQueue=null,Br(a,n)));break;case 22:r=a.memoizedState!==null;var b=s!==null&&s.memoizedState!==null,O=it,U=Xe;if(it=O||r,Xe=U||b,ua(t,a),Xe=U,it=O,ma(a),n&8192)e:for(t=a.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(s===null||b||it||Xe||ss(a)),s=null,t=a;;){if(t.tag===5||t.tag===26){if(s===null){b=s=t;try{if(i=b.stateNode,r)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{m=b.stateNode;var H=b.memoizedProps.style,D=H!=null&&H.hasOwnProperty("display")?H.display:null;m.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(Z){Oe(b,b.return,Z)}}}else if(t.tag===6){if(s===null){b=t;try{b.stateNode.nodeValue=r?"":b.memoizedProps}catch(Z){Oe(b,b.return,Z)}}}else if(t.tag===18){if(s===null){b=t;try{var w=b.stateNode;r?Pm(w,!0):Pm(b.stateNode,!1)}catch(Z){Oe(b,b.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===a)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break e;for(;t.sibling===null;){if(t.return===null||t.return===a)break e;s===t&&(s=null),t=t.return}s===t&&(s=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=a.updateQueue,n!==null&&(s=n.retryQueue,s!==null&&(n.retryQueue=null,Br(a,s))));break;case 19:ua(t,a),ma(a),n&4&&(n=a.updateQueue,n!==null&&(a.updateQueue=null,Br(a,n)));break;case 30:break;case 21:break;default:ua(t,a),ma(a)}}function ma(a){var t=a.flags;if(t&2){try{for(var s,n=a.return;n!==null;){if(_u(n)){s=n;break}n=n.return}if(s==null)throw Error(d(160));switch(s.tag){case 27:var r=s.stateNode,i=Kl(a);Ur(a,i,r);break;case 5:var o=s.stateNode;s.flags&32&&(us(o,""),s.flags&=-33);var m=Kl(a);Ur(a,m,o);break;case 3:case 4:var b=s.stateNode.containerInfo,O=Kl(a);$l(a,O,b);break;default:throw Error(d(161))}}catch(U){Oe(a,a.return,U)}a.flags&=-3}t&4096&&(a.flags&=-4097)}function Xu(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var t=a;Xu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),a=a.sibling}}function ot(a,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ju(a,t.alternate,t),t=t.sibling}function ss(a){for(a=a.child;a!==null;){var t=a;switch(t.tag){case 0:case 11:case 14:case 15:At(4,t,t.return),ss(t);break;case 1:Ja(t,t.return);var s=t.stateNode;typeof s.componentWillUnmount=="function"&&Pu(t,t.return,s),ss(t);break;case 27:wn(t.stateNode);case 26:case 5:Ja(t,t.return),ss(t);break;case 22:t.memoizedState===null&&ss(t);break;case 30:ss(t);break;default:ss(t)}a=a.sibling}}function ct(a,t,s){for(s=s&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,r=a,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:ct(r,i,s),Sn(4,i);break;case 1:if(ct(r,i,s),n=i,r=n.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(O){Oe(n,n.return,O)}if(n=i,r=n.updateQueue,r!==null){var m=n.stateNode;try{var b=r.shared.hiddenCallbacks;if(b!==null)for(r.shared.hiddenCallbacks=null,r=0;r<b.length;r++)Td(b[r],m)}catch(O){Oe(n,n.return,O)}}s&&o&64&&Bu(i),Nn(i,i.return);break;case 27:Hu(i);case 26:case 5:ct(r,i,s),s&&n===null&&o&4&&ku(i),Nn(i,i.return);break;case 12:ct(r,i,s);break;case 31:ct(r,i,s),s&&o&4&&Gu(r,i);break;case 13:ct(r,i,s),s&&o&4&&Yu(r,i);break;case 22:i.memoizedState===null&&ct(r,i,s),Nn(i,i.return);break;case 30:break;default:ct(r,i,s)}t=t.sibling}}function eo(a,t){var s=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==s&&(a!=null&&a.refCount++,s!=null&&cn(s))}function ao(a,t){a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&cn(a))}function _a(a,t,s,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zu(a,t,s,n),t=t.sibling}function Zu(a,t,s,n){var r=t.flags;switch(t.tag){case 0:case 11:case 15:_a(a,t,s,n),r&2048&&Sn(9,t);break;case 1:_a(a,t,s,n);break;case 3:_a(a,t,s,n),r&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&cn(a)));break;case 12:if(r&2048){_a(a,t,s,n),a=t.stateNode;try{var i=t.memoizedProps,o=i.id,m=i.onPostCommit;typeof m=="function"&&m(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(b){Oe(t,t.return,b)}}else _a(a,t,s,n);break;case 31:_a(a,t,s,n);break;case 13:_a(a,t,s,n);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?_a(a,t,s,n):En(a,t):i._visibility&2?_a(a,t,s,n):(i._visibility|=2,Ds(a,t,s,n,(t.subtreeFlags&10256)!==0||!1)),r&2048&&eo(o,t);break;case 24:_a(a,t,s,n),r&2048&&ao(t.alternate,t);break;default:_a(a,t,s,n)}}function Ds(a,t,s,n,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=a,o=t,m=s,b=n,O=o.flags;switch(o.tag){case 0:case 11:case 15:Ds(i,o,m,b,r),Sn(8,o);break;case 23:break;case 22:var U=o.stateNode;o.memoizedState!==null?U._visibility&2?Ds(i,o,m,b,r):En(i,o):(U._visibility|=2,Ds(i,o,m,b,r)),r&&O&2048&&eo(o.alternate,o);break;case 24:Ds(i,o,m,b,r),r&&O&2048&&ao(o.alternate,o);break;default:Ds(i,o,m,b,r)}t=t.sibling}}function En(a,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var s=a,n=t,r=n.flags;switch(n.tag){case 22:En(s,n),r&2048&&eo(n.alternate,n);break;case 24:En(s,n),r&2048&&ao(n.alternate,n);break;default:En(s,n)}t=t.sibling}}var Cn=8192;function ws(a,t,s){if(a.subtreeFlags&Cn)for(a=a.child;a!==null;)Ku(a,t,s),a=a.sibling}function Ku(a,t,s){switch(a.tag){case 26:ws(a,t,s),a.flags&Cn&&a.memoizedState!==null&&qf(s,ka,a.memoizedState,a.memoizedProps);break;case 5:ws(a,t,s);break;case 3:case 4:var n=ka;ka=Kr(a.stateNode.containerInfo),ws(a,t,s),ka=n;break;case 22:a.memoizedState===null&&(n=a.alternate,n!==null&&n.memoizedState!==null?(n=Cn,Cn=16777216,ws(a,t,s),Cn=n):ws(a,t,s));break;default:ws(a,t,s)}}function $u(a){var t=a.alternate;if(t!==null&&(a=t.child,a!==null)){t.child=null;do t=a.sibling,a.sibling=null,a=t;while(a!==null)}}function Tn(a){var t=a.deletions;if((a.flags&16)!==0){if(t!==null)for(var s=0;s<t.length;s++){var n=t[s];We=n,em(n,a)}$u(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Wu(a),a=a.sibling}function Wu(a){switch(a.tag){case 0:case 11:case 15:Tn(a),a.flags&2048&&At(9,a,a.return);break;case 3:Tn(a);break;case 12:Tn(a);break;case 22:var t=a.stateNode;a.memoizedState!==null&&t._visibility&2&&(a.return===null||a.return.tag!==13)?(t._visibility&=-3,Pr(a)):Tn(a);break;default:Tn(a)}}function Pr(a){var t=a.deletions;if((a.flags&16)!==0){if(t!==null)for(var s=0;s<t.length;s++){var n=t[s];We=n,em(n,a)}$u(a)}for(a=a.child;a!==null;){switch(t=a,t.tag){case 0:case 11:case 15:At(8,t,t.return),Pr(t);break;case 22:s=t.stateNode,s._visibility&2&&(s._visibility&=-3,Pr(t));break;default:Pr(t)}a=a.sibling}}function em(a,t){for(;We!==null;){var s=We;switch(s.tag){case 0:case 11:case 15:At(8,s,t);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var n=s.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:cn(s.memoizedState.cache)}if(n=s.child,n!==null)n.return=s,We=n;else e:for(s=a;We!==null;){n=We;var r=n.sibling,i=n.return;if(Fu(n),n===s){We=null;break e}if(r!==null){r.return=i,We=r;break e}We=i}}}var Qh={getCacheForType:function(a){var t=sa(Ge),s=t.data.get(a);return s===void 0&&(s=a(),t.data.set(a,s)),s},cacheSignal:function(){return sa(Ge).controller.signal}},Xh=typeof WeakMap=="function"?WeakMap:Map,Te=0,ze=null,he=null,be=0,Me=0,Na=null,Rt=!1,Ls=!1,to=!1,dt=0,Je=0,Mt=0,ns=0,so=0,Ea=0,qs=0,An=null,pa=null,no=!1,kr=0,am=0,_r=1/0,Hr=null,Ot=null,Ke=0,Dt=null,zs=null,ut=0,ro=0,io=null,tm=null,Rn=0,lo=null;function Ca(){return(Te&2)!==0&&be!==0?be&-be:q.T!==null?xo():bc()}function sm(){if(Ea===0)if((be&536870912)===0||ve){var a=Xn;Xn<<=1,(Xn&3932160)===0&&(Xn=262144),Ea=a}else Ea=536870912;return a=va.current,a!==null&&(a.flags|=32),Ea}function xa(a,t,s){(a===ze&&(Me===2||Me===9)||a.cancelPendingCommit!==null)&&(Us(a,0),wt(a,be,Ea,!1)),Qs(a,s),((Te&2)===0||a!==ze)&&(a===ze&&((Te&2)===0&&(ns|=s),Je===4&&wt(a,be,Ea,!1)),Fa(a))}function nm(a,t,s){if((Te&6)!==0)throw Error(d(327));var n=!s&&(t&127)===0&&(t&a.expiredLanes)===0||Ys(a,t),r=n?$h(a,t):co(a,t,!0),i=n;do{if(r===0){Ls&&!n&&wt(a,t,0,!1);break}else{if(s=a.current.alternate,i&&!Zh(s)){r=co(a,t,!1),i=!1;continue}if(r===2){if(i=t,a.errorRecoveryDisabledLanes&i)var o=0;else o=a.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var m=a;r=An;var b=m.current.memoizedState.isDehydrated;if(b&&(Us(m,o).flags|=256),o=co(m,o,!1),o!==2){if(to&&!b){m.errorRecoveryDisabledLanes|=i,ns|=i,r=4;break e}i=pa,pa=r,i!==null&&(pa===null?pa=i:pa.push.apply(pa,i))}r=o}if(i=!1,r!==2)continue}}if(r===1){Us(a,0),wt(a,t,0,!0);break}e:{switch(n=a,i=r,i){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:wt(n,t,Ea,!Rt);break e;case 2:pa=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(r=kr+300-fa(),10<r)){if(wt(n,t,Ea,!Rt),Kn(n,0,!0)!==0)break e;ut=t,n.timeoutHandle=zm(rm.bind(null,n,s,pa,Hr,no,t,Ea,ns,qs,Rt,i,"Throttled",-0,0),r);break e}rm(n,s,pa,Hr,no,t,Ea,ns,qs,Rt,i,null,-0,0)}}break}while(!0);Fa(a)}function rm(a,t,s,n,r,i,o,m,b,O,U,H,D,w){if(a.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Za},Ku(t,i,H);var Z=(i&62914560)===i?kr-fa():(i&4194048)===i?am-fa():0;if(Z=zf(H,Z),Z!==null){ut=i,a.cancelPendingCommit=Z(pm.bind(null,a,t,i,s,n,r,o,m,b,U,H,null,D,w)),wt(a,i,o,!O);return}}pm(a,t,i,s,n,r,o,m,b)}function Zh(a){for(var t=a;;){var s=t.tag;if((s===0||s===11||s===15)&&t.flags&16384&&(s=t.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var n=0;n<s.length;n++){var r=s[n],i=r.getSnapshot;r=r.value;try{if(!ya(i(),r))return!1}catch{return!1}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===a)break;for(;t.sibling===null;){if(t.return===null||t.return===a)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(a,t,s,n){t&=~so,t&=~ns,a.suspendedLanes|=t,a.pingedLanes&=~t,n&&(a.warmLanes|=t),n=a.expirationTimes;for(var r=t;0<r;){var i=31-ba(r),o=1<<i;n[i]=-1,r&=~o}s!==0&&hc(a,s,t)}function Ir(){return(Te&6)===0?(Mn(0),!1):!0}function oo(){if(he!==null){if(Me===0)var a=he.return;else a=he,et=Xt=null,El(a),Ts=null,un=0,a=he;for(;a!==null;)Uu(a.alternate,a),a=a.return;he=null}}function Us(a,t){var s=a.timeoutHandle;s!==-1&&(a.timeoutHandle=-1,gf(s)),s=a.cancelPendingCommit,s!==null&&(a.cancelPendingCommit=null,s()),ut=0,oo(),ze=a,he=s=$a(a.current,null),be=t,Me=0,Na=null,Rt=!1,Ls=Ys(a,t),to=!1,qs=Ea=so=ns=Mt=Je=0,pa=An=null,no=!1,(t&8)!==0&&(t|=t&32);var n=a.entangledLanes;if(n!==0)for(a=a.entanglements,n&=t;0<n;){var r=31-ba(n),i=1<<r;t|=a[r],n&=~i}return dt=t,cr(),s}function im(a,t){de=null,q.H=yn,t===Cs||t===gr?(t=Sd(),Me=3):t===ml?(t=Sd(),Me=4):Me=t===_l?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Na=t,he===null&&(Je=1,Dr(a,Oa(t,a.current)))}function lm(){var a=va.current;return a===null?!0:(be&4194048)===be?qa===null:(be&62914560)===be||(be&536870912)!==0?a===qa:!1}function om(){var a=q.H;return q.H=yn,a===null?yn:a}function cm(){var a=q.A;return q.A=Qh,a}function Jr(){Je=4,Rt||(be&4194048)!==be&&va.current!==null||(Ls=!0),(Mt&134217727)===0&&(ns&134217727)===0||ze===null||wt(ze,be,Ea,!1)}function co(a,t,s){var n=Te;Te|=2;var r=om(),i=cm();(ze!==a||be!==t)&&(Hr=null,Us(a,t)),t=!1;var o=Je;e:do try{if(Me!==0&&he!==null){var m=he,b=Na;switch(Me){case 8:oo(),o=6;break e;case 3:case 2:case 9:case 6:va.current===null&&(t=!0);var O=Me;if(Me=0,Na=null,Bs(a,m,b,O),s&&Ls){o=0;break e}break;default:O=Me,Me=0,Na=null,Bs(a,m,b,O)}}Kh(),o=Je;break}catch(U){im(a,U)}while(!0);return t&&a.shellSuspendCounter++,et=Xt=null,Te=n,q.H=r,q.A=i,he===null&&(ze=null,be=0,cr()),o}function Kh(){for(;he!==null;)dm(he)}function $h(a,t){var s=Te;Te|=2;var n=om(),r=cm();ze!==a||be!==t?(Hr=null,_r=fa()+500,Us(a,t)):Ls=Ys(a,t);e:do try{if(Me!==0&&he!==null){t=he;var i=Na;a:switch(Me){case 1:Me=0,Na=null,Bs(a,t,i,1);break;case 2:case 9:if(jd(i)){Me=0,Na=null,um(t);break}t=function(){Me!==2&&Me!==9||ze!==a||(Me=7),Fa(a)},i.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:jd(i)?(Me=0,Na=null,um(t)):(Me=0,Na=null,Bs(a,t,i,7));break;case 5:var o=null;switch(he.tag){case 26:o=he.memoizedState;case 5:case 27:var m=he;if(o?Zm(o):m.stateNode.complete){Me=0,Na=null;var b=m.sibling;if(b!==null)he=b;else{var O=m.return;O!==null?(he=O,Fr(O)):he=null}break a}}Me=0,Na=null,Bs(a,t,i,5);break;case 6:Me=0,Na=null,Bs(a,t,i,6);break;case 8:oo(),Je=6;break e;default:throw Error(d(462))}}Wh();break}catch(U){im(a,U)}while(!0);return et=Xt=null,q.H=n,q.A=r,Te=s,he!==null?0:(ze=null,be=0,cr(),Je)}function Wh(){for(;he!==null&&!Sx();)dm(he)}function dm(a){var t=qu(a.alternate,a,dt);a.memoizedProps=a.pendingProps,t===null?Fr(a):he=t}function um(a){var t=a,s=t.alternate;switch(t.tag){case 15:case 0:t=Ru(s,t,t.pendingProps,t.type,void 0,be);break;case 11:t=Ru(s,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:El(t);default:Uu(s,t),t=he=cd(t,dt),t=qu(s,t,dt)}a.memoizedProps=a.pendingProps,t===null?Fr(a):he=t}function Bs(a,t,s,n){et=Xt=null,El(t),Ts=null,un=0;var r=t.return;try{if(Hh(a,r,t,s,be)){Je=1,Dr(a,Oa(s,a.current)),he=null;return}}catch(i){if(r!==null)throw he=r,i;Je=1,Dr(a,Oa(s,a.current)),he=null;return}t.flags&32768?(ve||n===1?a=!0:Ls||(be&536870912)!==0?a=!1:(Rt=a=!0,(n===2||n===9||n===3||n===6)&&(n=va.current,n!==null&&n.tag===13&&(n.flags|=16384))),mm(t,a)):Fr(t)}function Fr(a){var t=a;do{if((t.flags&32768)!==0){mm(t,Rt);return}a=t.return;var s=Fh(t.alternate,t,dt);if(s!==null){he=s;return}if(t=t.sibling,t!==null){he=t;return}he=t=a}while(t!==null);Je===0&&(Je=5)}function mm(a,t){do{var s=Vh(a.alternate,a);if(s!==null){s.flags&=32767,he=s;return}if(s=a.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!t&&(a=a.sibling,a!==null)){he=a;return}he=a=s}while(a!==null);Je=6,he=null}function pm(a,t,s,n,r,i,o,m,b){a.cancelPendingCommit=null;do Vr();while(Ke!==0);if((Te&6)!==0)throw Error(d(327));if(t!==null){if(t===a.current)throw Error(d(177));if(i=t.lanes|t.childLanes,i|=Ki,wx(a,s,i,o,m,b),a===ze&&(he=ze=null,be=0),zs=t,Dt=a,ut=s,ro=i,io=r,tm=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(a.callbackNode=null,a.callbackPriority=0,sf(Yn,function(){return bm(),null})):(a.callbackNode=null,a.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=q.T,q.T=null,r=G.p,G.p=2,o=Te,Te|=4;try{Gh(a,t,s)}finally{Te=o,G.p=r,q.T=n}}Ke=1,xm(),hm(),fm()}}function xm(){if(Ke===1){Ke=0;var a=Dt,t=zs,s=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||s){s=q.T,q.T=null;var n=G.p;G.p=2;var r=Te;Te|=4;try{Qu(t,a);var i=So,o=ed(a.containerInfo),m=i.focusedElem,b=i.selectionRange;if(o!==m&&m&&m.ownerDocument&&Wc(m.ownerDocument.documentElement,m)){if(b!==null&&Gi(m)){var O=b.start,U=b.end;if(U===void 0&&(U=O),"selectionStart"in m)m.selectionStart=O,m.selectionEnd=Math.min(U,m.value.length);else{var H=m.ownerDocument||document,D=H&&H.defaultView||window;if(D.getSelection){var w=D.getSelection(),Z=m.textContent.length,re=Math.min(b.start,Z),Le=b.end===void 0?re:Math.min(b.end,Z);!w.extend&&re>Le&&(o=Le,Le=re,re=o);var C=$c(m,re),j=$c(m,Le);if(C&&j&&(w.rangeCount!==1||w.anchorNode!==C.node||w.anchorOffset!==C.offset||w.focusNode!==j.node||w.focusOffset!==j.offset)){var M=H.createRange();M.setStart(C.node,C.offset),w.removeAllRanges(),re>Le?(w.addRange(M),w.extend(j.node,j.offset)):(M.setEnd(j.node,j.offset),w.addRange(M))}}}}for(H=[],w=m;w=w.parentNode;)w.nodeType===1&&H.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<H.length;m++){var P=H[m];P.element.scrollLeft=P.left,P.element.scrollTop=P.top}}si=!!vo,So=vo=null}finally{Te=r,G.p=n,q.T=s}}a.current=t,Ke=2}}function hm(){if(Ke===2){Ke=0;var a=Dt,t=zs,s=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||s){s=q.T,q.T=null;var n=G.p;G.p=2;var r=Te;Te|=4;try{Ju(a,t.alternate,t)}finally{Te=r,G.p=n,q.T=s}}Ke=3}}function fm(){if(Ke===4||Ke===3){Ke=0,Nx();var a=Dt,t=zs,s=ut,n=tm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,zs=Dt=null,gm(a,a.pendingLanes));var r=a.pendingLanes;if(r===0&&(Ot=null),Ai(s),t=t.stateNode,ga&&typeof ga.onCommitFiberRoot=="function")try{ga.onCommitFiberRoot(Gs,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=q.T,r=G.p,G.p=2,q.T=null;try{for(var i=a.onRecoverableError,o=0;o<n.length;o++){var m=n[o];i(m.value,{componentStack:m.stack})}}finally{q.T=t,G.p=r}}(ut&3)!==0&&Vr(),Fa(a),r=a.pendingLanes,(s&261930)!==0&&(r&42)!==0?a===lo?Rn++:(Rn=0,lo=a):Rn=0,Mn(0)}}function gm(a,t){(a.pooledCacheLanes&=t)===0&&(t=a.pooledCache,t!=null&&(a.pooledCache=null,cn(t)))}function Vr(){return xm(),hm(),fm(),bm()}function bm(){if(Ke!==5)return!1;var a=Dt,t=ro;ro=0;var s=Ai(ut),n=q.T,r=G.p;try{G.p=32>s?32:s,q.T=null,s=io,io=null;var i=Dt,o=ut;if(Ke=0,zs=Dt=null,ut=0,(Te&6)!==0)throw Error(d(331));var m=Te;if(Te|=4,Wu(i.current),Zu(i,i.current,o,s),Te=m,Mn(0,!1),ga&&typeof ga.onPostCommitFiberRoot=="function")try{ga.onPostCommitFiberRoot(Gs,i)}catch{}return!0}finally{G.p=r,q.T=n,gm(a,t)}}function ym(a,t,s){t=Oa(s,t),t=kl(a.stateNode,t,2),a=Et(a,t,2),a!==null&&(Qs(a,2),Fa(a))}function Oe(a,t,s){if(a.tag===3)ym(a,a,s);else for(;t!==null;){if(t.tag===3){ym(t,a,s);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ot===null||!Ot.has(n))){a=Oa(s,a),s=ju(2),n=Et(t,s,2),n!==null&&(vu(s,n,t,a),Qs(n,2),Fa(n));break}}t=t.return}}function uo(a,t,s){var n=a.pingCache;if(n===null){n=a.pingCache=new Xh;var r=new Set;n.set(t,r)}else r=n.get(t),r===void 0&&(r=new Set,n.set(t,r));r.has(s)||(to=!0,r.add(s),a=ef.bind(null,a,t,s),t.then(a,a))}function ef(a,t,s){var n=a.pingCache;n!==null&&n.delete(t),a.pingedLanes|=a.suspendedLanes&s,a.warmLanes&=~s,ze===a&&(be&s)===s&&(Je===4||Je===3&&(be&62914560)===be&&300>fa()-kr?(Te&2)===0&&Us(a,0):so|=s,qs===be&&(qs=0)),Fa(a)}function jm(a,t){t===0&&(t=xc()),a=Gt(a,t),a!==null&&(Qs(a,t),Fa(a))}function af(a){var t=a.memoizedState,s=0;t!==null&&(s=t.retryLane),jm(a,s)}function tf(a,t){var s=0;switch(a.tag){case 31:case 13:var n=a.stateNode,r=a.memoizedState;r!==null&&(s=r.retryLane);break;case 19:n=a.stateNode;break;case 22:n=a.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(t),jm(a,s)}function sf(a,t){return Ni(a,t)}var Gr=null,Ps=null,mo=!1,Yr=!1,po=!1,Lt=0;function Fa(a){a!==Ps&&a.next===null&&(Ps===null?Gr=Ps=a:Ps=Ps.next=a),Yr=!0,mo||(mo=!0,rf())}function Mn(a,t){if(!po&&Yr){po=!0;do for(var s=!1,n=Gr;n!==null;){if(a!==0){var r=n.pendingLanes;if(r===0)var i=0;else{var o=n.suspendedLanes,m=n.pingedLanes;i=(1<<31-ba(42|a)+1)-1,i&=r&~(o&~m),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(s=!0,Em(n,i))}else i=be,i=Kn(n,n===ze?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Ys(n,i)||(s=!0,Em(n,i));n=n.next}while(s);po=!1}}function nf(){vm()}function vm(){Yr=mo=!1;var a=0;Lt!==0&&ff()&&(a=Lt);for(var t=fa(),s=null,n=Gr;n!==null;){var r=n.next,i=Sm(n,t);i===0?(n.next=null,s===null?Gr=r:s.next=r,r===null&&(Ps=s)):(s=n,(a!==0||(i&3)!==0)&&(Yr=!0)),n=r}Ke!==0&&Ke!==5||Mn(a),Lt!==0&&(Lt=0)}function Sm(a,t){for(var s=a.suspendedLanes,n=a.pingedLanes,r=a.expirationTimes,i=a.pendingLanes&-62914561;0<i;){var o=31-ba(i),m=1<<o,b=r[o];b===-1?((m&s)===0||(m&n)!==0)&&(r[o]=Dx(m,t)):b<=t&&(a.expiredLanes|=m),i&=~m}if(t=ze,s=be,s=Kn(a,a===t?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),n=a.callbackNode,s===0||a===t&&(Me===2||Me===9)||a.cancelPendingCommit!==null)return n!==null&&n!==null&&Ei(n),a.callbackNode=null,a.callbackPriority=0;if((s&3)===0||Ys(a,s)){if(t=s&-s,t===a.callbackPriority)return t;switch(n!==null&&Ei(n),Ai(s)){case 2:case 8:s=mc;break;case 32:s=Yn;break;case 268435456:s=pc;break;default:s=Yn}return n=Nm.bind(null,a),s=Ni(s,n),a.callbackPriority=t,a.callbackNode=s,t}return n!==null&&n!==null&&Ei(n),a.callbackPriority=2,a.callbackNode=null,2}function Nm(a,t){if(Ke!==0&&Ke!==5)return a.callbackNode=null,a.callbackPriority=0,null;var s=a.callbackNode;if(Vr()&&a.callbackNode!==s)return null;var n=be;return n=Kn(a,a===ze?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),n===0?null:(nm(a,n,t),Sm(a,fa()),a.callbackNode!=null&&a.callbackNode===s?Nm.bind(null,a):null)}function Em(a,t){if(Vr())return null;nm(a,t,!0)}function rf(){bf(function(){(Te&6)!==0?Ni(uc,nf):vm()})}function xo(){if(Lt===0){var a=Ns;a===0&&(a=Qn,Qn<<=1,(Qn&261888)===0&&(Qn=256)),Lt=a}return Lt}function Cm(a){return a==null||typeof a=="symbol"||typeof a=="boolean"?null:typeof a=="function"?a:ar(""+a)}function Tm(a,t){var s=t.ownerDocument.createElement("input");return s.name=t.name,s.value=t.value,a.id&&s.setAttribute("form",a.id),t.parentNode.insertBefore(s,t),a=new FormData(a),s.parentNode.removeChild(s),a}function lf(a,t,s,n,r){if(t==="submit"&&s&&s.stateNode===r){var i=Cm((r[oa]||null).action),o=n.submitter;o&&(t=(t=o[oa]||null)?Cm(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var m=new rr("action","action",null,n,r);a.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Lt!==0){var b=o?Tm(r,o):new FormData(r);Ll(s,{pending:!0,data:b,method:r.method,action:i},null,b)}}else typeof i=="function"&&(m.preventDefault(),b=o?Tm(r,o):new FormData(r),Ll(s,{pending:!0,data:b,method:r.method,action:i},i,b))},currentTarget:r}]})}}for(var ho=0;ho<Zi.length;ho++){var fo=Zi[ho],of=fo.toLowerCase(),cf=fo[0].toUpperCase()+fo.slice(1);Pa(of,"on"+cf)}Pa(sd,"onAnimationEnd"),Pa(nd,"onAnimationIteration"),Pa(rd,"onAnimationStart"),Pa("dblclick","onDoubleClick"),Pa("focusin","onFocus"),Pa("focusout","onBlur"),Pa(Eh,"onTransitionRun"),Pa(Ch,"onTransitionStart"),Pa(Th,"onTransitionCancel"),Pa(id,"onTransitionEnd"),cs("onMouseEnter",["mouseout","mouseover"]),cs("onMouseLeave",["mouseout","mouseover"]),cs("onPointerEnter",["pointerout","pointerover"]),cs("onPointerLeave",["pointerout","pointerover"]),It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),It("onBeforeInput",["compositionend","keypress","textInput","paste"]),It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),df=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(On));function Am(a,t){t=(t&4)!==0;for(var s=0;s<a.length;s++){var n=a[s],r=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var o=n.length-1;0<=o;o--){var m=n[o],b=m.instance,O=m.currentTarget;if(m=m.listener,b!==i&&r.isPropagationStopped())break e;i=m,r.currentTarget=O;try{i(r)}catch(U){or(U)}r.currentTarget=null,i=b}else for(o=0;o<n.length;o++){if(m=n[o],b=m.instance,O=m.currentTarget,m=m.listener,b!==i&&r.isPropagationStopped())break e;i=m,r.currentTarget=O;try{i(r)}catch(U){or(U)}r.currentTarget=null,i=b}}}}function fe(a,t){var s=t[Ri];s===void 0&&(s=t[Ri]=new Set);var n=a+"__bubble";s.has(n)||(Rm(t,a,2,!1),s.add(n))}function go(a,t,s){var n=0;t&&(n|=4),Rm(s,a,n,t)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function bo(a){if(!a[Qr]){a[Qr]=!0,vc.forEach(function(s){s!=="selectionchange"&&(df.has(s)||go(s,!1,a),go(s,!0,a))});var t=a.nodeType===9?a:a.ownerDocument;t===null||t[Qr]||(t[Qr]=!0,go("selectionchange",!1,t))}}function Rm(a,t,s,n){switch(sp(t)){case 2:var r=Pf;break;case 8:r=kf;break;default:r=Lo}s=r.bind(null,t,s,a),r=void 0,!Bi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),n?r!==void 0?a.addEventListener(t,s,{capture:!0,passive:r}):a.addEventListener(t,s,!0):r!==void 0?a.addEventListener(t,s,{passive:r}):a.addEventListener(t,s,!1)}function yo(a,t,s,n,r){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var m=n.stateNode.containerInfo;if(m===r)break;if(o===4)for(o=n.return;o!==null;){var b=o.tag;if((b===3||b===4)&&o.stateNode.containerInfo===r)return;o=o.return}for(;m!==null;){if(o=is(m),o===null)return;if(b=o.tag,b===5||b===6||b===26||b===27){n=i=o;continue e}m=m.parentNode}}n=n.return}Lc(function(){var O=i,U=zi(s),H=[];e:{var D=ld.get(a);if(D!==void 0){var w=rr,Z=a;switch(a){case"keypress":if(sr(s)===0)break e;case"keydown":case"keyup":w=th;break;case"focusin":Z="focus",w=Hi;break;case"focusout":Z="blur",w=Hi;break;case"beforeblur":case"afterblur":w=Hi;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Uc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=rh;break;case sd:case nd:case rd:w=Yx;break;case id:w=lh;break;case"scroll":case"scrollend":w=Ix;break;case"wheel":w=ch;break;case"copy":case"cut":case"paste":w=Xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Pc;break;case"toggle":case"beforetoggle":w=uh}var re=(t&4)!==0,Le=!re&&(a==="scroll"||a==="scrollend"),C=re?D!==null?D+"Capture":null:D;re=[];for(var j=O,M;j!==null;){var P=j;if(M=P.stateNode,P=P.tag,P!==5&&P!==26&&P!==27||M===null||C===null||(P=Ks(j,C),P!=null&&re.push(Dn(j,P,M))),Le)break;j=j.return}0<re.length&&(D=new w(D,Z,null,s,U),H.push({event:D,listeners:re}))}}if((t&7)===0){e:{if(D=a==="mouseover"||a==="pointerover",w=a==="mouseout"||a==="pointerout",D&&s!==qi&&(Z=s.relatedTarget||s.fromElement)&&(is(Z)||Z[rs]))break e;if((w||D)&&(D=U.window===U?U:(D=U.ownerDocument)?D.defaultView||D.parentWindow:window,w?(Z=s.relatedTarget||s.toElement,w=O,Z=Z?is(Z):null,Z!==null&&(Le=h(Z),re=Z.tag,Z!==Le||re!==5&&re!==27&&re!==6)&&(Z=null)):(w=null,Z=O),w!==Z)){if(re=Uc,P="onMouseLeave",C="onMouseEnter",j="mouse",(a==="pointerout"||a==="pointerover")&&(re=Pc,P="onPointerLeave",C="onPointerEnter",j="pointer"),Le=w==null?D:Zs(w),M=Z==null?D:Zs(Z),D=new re(P,j+"leave",w,s,U),D.target=Le,D.relatedTarget=M,P=null,is(U)===O&&(re=new re(C,j+"enter",Z,s,U),re.target=M,re.relatedTarget=Le,P=re),Le=P,w&&Z)a:{for(re=uf,C=w,j=Z,M=0,P=C;P;P=re(P))M++;P=0;for(var te=j;te;te=re(te))P++;for(;0<M-P;)C=re(C),M--;for(;0<P-M;)j=re(j),P--;for(;M--;){if(C===j||j!==null&&C===j.alternate){re=C;break a}C=re(C),j=re(j)}re=null}else re=null;w!==null&&Mm(H,D,w,re,!1),Z!==null&&Le!==null&&Mm(H,Le,Z,re,!0)}}e:{if(D=O?Zs(O):window,w=D.nodeName&&D.nodeName.toLowerCase(),w==="select"||w==="input"&&D.type==="file")var Se=Gc;else if(Fc(D))if(Yc)Se=vh;else{Se=yh;var W=bh}else w=D.nodeName,!w||w.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?O&&Li(O.elementType)&&(Se=Gc):Se=jh;if(Se&&(Se=Se(a,O))){Vc(H,Se,s,U);break e}W&&W(a,D,O),a==="focusout"&&O&&D.type==="number"&&O.memoizedProps.value!=null&&wi(D,"number",D.value)}switch(W=O?Zs(O):window,a){case"focusin":(Fc(W)||W.contentEditable==="true")&&(hs=W,Yi=O,rn=null);break;case"focusout":rn=Yi=hs=null;break;case"mousedown":Qi=!0;break;case"contextmenu":case"mouseup":case"dragend":Qi=!1,ad(H,s,U);break;case"selectionchange":if(Nh)break;case"keydown":case"keyup":ad(H,s,U)}var me;if(Ji)e:{switch(a){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else xs?Ic(a,s)&&(ye="onCompositionEnd"):a==="keydown"&&s.keyCode===229&&(ye="onCompositionStart");ye&&(kc&&s.locale!=="ko"&&(xs||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&xs&&(me=qc()):(gt=U,Pi="value"in gt?gt.value:gt.textContent,xs=!0)),W=Xr(O,ye),0<W.length&&(ye=new Bc(ye,a,null,s,U),H.push({event:ye,listeners:W}),me?ye.data=me:(me=Jc(s),me!==null&&(ye.data=me)))),(me=ph?xh(a,s):hh(a,s))&&(ye=Xr(O,"onBeforeInput"),0<ye.length&&(W=new Bc("onBeforeInput","beforeinput",null,s,U),H.push({event:W,listeners:ye}),W.data=me)),lf(H,a,O,s,U)}Am(H,t)})}function Dn(a,t,s){return{instance:a,listener:t,currentTarget:s}}function Xr(a,t){for(var s=t+"Capture",n=[];a!==null;){var r=a,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=Ks(a,s),r!=null&&n.unshift(Dn(a,r,i)),r=Ks(a,t),r!=null&&n.push(Dn(a,r,i))),a.tag===3)return n;a=a.return}return[]}function uf(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5&&a.tag!==27);return a||null}function Mm(a,t,s,n,r){for(var i=t._reactName,o=[];s!==null&&s!==n;){var m=s,b=m.alternate,O=m.stateNode;if(m=m.tag,b!==null&&b===n)break;m!==5&&m!==26&&m!==27||O===null||(b=O,r?(O=Ks(s,i),O!=null&&o.unshift(Dn(s,O,b))):r||(O=Ks(s,i),O!=null&&o.push(Dn(s,O,b)))),s=s.return}o.length!==0&&a.push({event:t,listeners:o})}var mf=/\r\n?/g,pf=/\u0000|\uFFFD/g;function Om(a){return(typeof a=="string"?a:""+a).replace(mf,`
`).replace(pf,"")}function Dm(a,t){return t=Om(t),Om(a)===t}function we(a,t,s,n,r,i){switch(s){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||us(a,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&us(a,""+n);break;case"className":Wn(a,"class",n);break;case"tabIndex":Wn(a,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Wn(a,s,n);break;case"style":Dc(a,n,i);break;case"data":if(t!=="object"){Wn(a,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||s!=="href")){a.removeAttribute(s);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){a.removeAttribute(s);break}n=ar(""+n),a.setAttribute(s,n);break;case"action":case"formAction":if(typeof n=="function"){a.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(s==="formAction"?(t!=="input"&&we(a,t,"name",r.name,r,null),we(a,t,"formEncType",r.formEncType,r,null),we(a,t,"formMethod",r.formMethod,r,null),we(a,t,"formTarget",r.formTarget,r,null)):(we(a,t,"encType",r.encType,r,null),we(a,t,"method",r.method,r,null),we(a,t,"target",r.target,r,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){a.removeAttribute(s);break}n=ar(""+n),a.setAttribute(s,n);break;case"onClick":n!=null&&(a.onclick=Za);break;case"onScroll":n!=null&&fe("scroll",a);break;case"onScrollEnd":n!=null&&fe("scrollend",a);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(s=n.__html,s!=null){if(r.children!=null)throw Error(d(60));a.innerHTML=s}}break;case"multiple":a.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":a.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){a.removeAttribute("xlink:href");break}s=ar(""+n),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?a.setAttribute(s,""+n):a.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?a.setAttribute(s,""):a.removeAttribute(s);break;case"capture":case"download":n===!0?a.setAttribute(s,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?a.setAttribute(s,n):a.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?a.setAttribute(s,n):a.removeAttribute(s);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?a.removeAttribute(s):a.setAttribute(s,n);break;case"popover":fe("beforetoggle",a),fe("toggle",a),$n(a,"popover",n);break;case"xlinkActuate":Xa(a,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Xa(a,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Xa(a,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Xa(a,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Xa(a,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Xa(a,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Xa(a,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Xa(a,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Xa(a,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":$n(a,"is",n);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=_x.get(s)||s,$n(a,s,n))}}function jo(a,t,s,n,r,i){switch(s){case"style":Dc(a,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(s=n.__html,s!=null){if(r.children!=null)throw Error(d(60));a.innerHTML=s}}break;case"children":typeof n=="string"?us(a,n):(typeof n=="number"||typeof n=="bigint")&&us(a,""+n);break;case"onScroll":n!=null&&fe("scroll",a);break;case"onScrollEnd":n!=null&&fe("scrollend",a);break;case"onClick":n!=null&&(a.onclick=Za);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sc.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(r=s.endsWith("Capture"),t=s.slice(2,r?s.length-7:void 0),i=a[oa]||null,i=i!=null?i[s]:null,typeof i=="function"&&a.removeEventListener(t,i,r),typeof n=="function")){typeof i!="function"&&i!==null&&(s in a?a[s]=null:a.hasAttribute(s)&&a.removeAttribute(s)),a.addEventListener(t,n,r);break e}s in a?a[s]=n:n===!0?a.setAttribute(s,""):$n(a,s,n)}}}function ra(a,t,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",a),fe("load",a);var n=!1,r=!1,i;for(i in s)if(s.hasOwnProperty(i)){var o=s[i];if(o!=null)switch(i){case"src":n=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:we(a,t,i,o,s,null)}}r&&we(a,t,"srcSet",s.srcSet,s,null),n&&we(a,t,"src",s.src,s,null);return;case"input":fe("invalid",a);var m=i=o=r=null,b=null,O=null;for(n in s)if(s.hasOwnProperty(n)){var U=s[n];if(U!=null)switch(n){case"name":r=U;break;case"type":o=U;break;case"checked":b=U;break;case"defaultChecked":O=U;break;case"value":i=U;break;case"defaultValue":m=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(d(137,t));break;default:we(a,t,n,U,s,null)}}Ac(a,i,m,b,O,o,r,!1);return;case"select":fe("invalid",a),n=o=i=null;for(r in s)if(s.hasOwnProperty(r)&&(m=s[r],m!=null))switch(r){case"value":i=m;break;case"defaultValue":o=m;break;case"multiple":n=m;default:we(a,t,r,m,s,null)}t=i,s=o,a.multiple=!!n,t!=null?ds(a,!!n,t,!1):s!=null&&ds(a,!!n,s,!0);return;case"textarea":fe("invalid",a),i=r=n=null;for(o in s)if(s.hasOwnProperty(o)&&(m=s[o],m!=null))switch(o){case"value":n=m;break;case"defaultValue":r=m;break;case"children":i=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(d(91));break;default:we(a,t,o,m,s,null)}Mc(a,n,r,i);return;case"option":for(b in s)s.hasOwnProperty(b)&&(n=s[b],n!=null)&&(b==="selected"?a.selected=n&&typeof n!="function"&&typeof n!="symbol":we(a,t,b,n,s,null));return;case"dialog":fe("beforetoggle",a),fe("toggle",a),fe("cancel",a),fe("close",a);break;case"iframe":case"object":fe("load",a);break;case"video":case"audio":for(n=0;n<On.length;n++)fe(On[n],a);break;case"image":fe("error",a),fe("load",a);break;case"details":fe("toggle",a);break;case"embed":case"source":case"link":fe("error",a),fe("load",a);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in s)if(s.hasOwnProperty(O)&&(n=s[O],n!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:we(a,t,O,n,s,null)}return;default:if(Li(t)){for(U in s)s.hasOwnProperty(U)&&(n=s[U],n!==void 0&&jo(a,t,U,n,s,void 0));return}}for(m in s)s.hasOwnProperty(m)&&(n=s[m],n!=null&&we(a,t,m,n,s,null))}function xf(a,t,s,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,o=null,m=null,b=null,O=null,U=null;for(w in s){var H=s[w];if(s.hasOwnProperty(w)&&H!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":b=H;default:n.hasOwnProperty(w)||we(a,t,w,null,n,H)}}for(var D in n){var w=n[D];if(H=s[D],n.hasOwnProperty(D)&&(w!=null||H!=null))switch(D){case"type":i=w;break;case"name":r=w;break;case"checked":O=w;break;case"defaultChecked":U=w;break;case"value":o=w;break;case"defaultValue":m=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(d(137,t));break;default:w!==H&&we(a,t,D,w,n,H)}}Di(a,o,m,b,O,U,i,r);return;case"select":w=o=m=D=null;for(i in s)if(b=s[i],s.hasOwnProperty(i)&&b!=null)switch(i){case"value":break;case"multiple":w=b;default:n.hasOwnProperty(i)||we(a,t,i,null,n,b)}for(r in n)if(i=n[r],b=s[r],n.hasOwnProperty(r)&&(i!=null||b!=null))switch(r){case"value":D=i;break;case"defaultValue":m=i;break;case"multiple":o=i;default:i!==b&&we(a,t,r,i,n,b)}t=m,s=o,n=w,D!=null?ds(a,!!s,D,!1):!!n!=!!s&&(t!=null?ds(a,!!s,t,!0):ds(a,!!s,s?[]:"",!1));return;case"textarea":w=D=null;for(m in s)if(r=s[m],s.hasOwnProperty(m)&&r!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:we(a,t,m,null,n,r)}for(o in n)if(r=n[o],i=s[o],n.hasOwnProperty(o)&&(r!=null||i!=null))switch(o){case"value":D=r;break;case"defaultValue":w=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==i&&we(a,t,o,r,n,i)}Rc(a,D,w);return;case"option":for(var Z in s)D=s[Z],s.hasOwnProperty(Z)&&D!=null&&!n.hasOwnProperty(Z)&&(Z==="selected"?a.selected=!1:we(a,t,Z,null,n,D));for(b in n)D=n[b],w=s[b],n.hasOwnProperty(b)&&D!==w&&(D!=null||w!=null)&&(b==="selected"?a.selected=D&&typeof D!="function"&&typeof D!="symbol":we(a,t,b,D,n,w));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in s)D=s[re],s.hasOwnProperty(re)&&D!=null&&!n.hasOwnProperty(re)&&we(a,t,re,null,n,D);for(O in n)if(D=n[O],w=s[O],n.hasOwnProperty(O)&&D!==w&&(D!=null||w!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(d(137,t));break;default:we(a,t,O,D,n,w)}return;default:if(Li(t)){for(var Le in s)D=s[Le],s.hasOwnProperty(Le)&&D!==void 0&&!n.hasOwnProperty(Le)&&jo(a,t,Le,void 0,n,D);for(U in n)D=n[U],w=s[U],!n.hasOwnProperty(U)||D===w||D===void 0&&w===void 0||jo(a,t,U,D,n,w);return}}for(var C in s)D=s[C],s.hasOwnProperty(C)&&D!=null&&!n.hasOwnProperty(C)&&we(a,t,C,null,n,D);for(H in n)D=n[H],w=s[H],!n.hasOwnProperty(H)||D===w||D==null&&w==null||we(a,t,H,D,n,w)}function wm(a){switch(a){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hf(){if(typeof performance.getEntriesByType=="function"){for(var a=0,t=0,s=performance.getEntriesByType("resource"),n=0;n<s.length;n++){var r=s[n],i=r.transferSize,o=r.initiatorType,m=r.duration;if(i&&m&&wm(o)){for(o=0,m=r.responseEnd,n+=1;n<s.length;n++){var b=s[n],O=b.startTime;if(O>m)break;var U=b.transferSize,H=b.initiatorType;U&&wm(H)&&(b=b.responseEnd,o+=U*(b<m?1:(m-O)/(b-O)))}if(--n,t+=8*(i+o)/(r.duration/1e3),a++,10<a)break}}if(0<a)return t/a/1e6}return navigator.connection&&(a=navigator.connection.downlink,typeof a=="number")?a:5}var vo=null,So=null;function Zr(a){return a.nodeType===9?a:a.ownerDocument}function Lm(a){switch(a){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qm(a,t){if(a===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return a===1&&t==="foreignObject"?0:a}function No(a,t){return a==="textarea"||a==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Eo=null;function ff(){var a=window.event;return a&&a.type==="popstate"?a===Eo?!1:(Eo=a,!0):(Eo=null,!1)}var zm=typeof setTimeout=="function"?setTimeout:void 0,gf=typeof clearTimeout=="function"?clearTimeout:void 0,Um=typeof Promise=="function"?Promise:void 0,bf=typeof queueMicrotask=="function"?queueMicrotask:typeof Um<"u"?function(a){return Um.resolve(null).then(a).catch(yf)}:zm;function yf(a){setTimeout(function(){throw a})}function qt(a){return a==="head"}function Bm(a,t){var s=t,n=0;do{var r=s.nextSibling;if(a.removeChild(s),r&&r.nodeType===8)if(s=r.data,s==="/$"||s==="/&"){if(n===0){a.removeChild(r),Is(t);return}n--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")n++;else if(s==="html")wn(a.ownerDocument.documentElement);else if(s==="head"){s=a.ownerDocument.head,wn(s);for(var i=s.firstChild;i;){var o=i.nextSibling,m=i.nodeName;i[Xs]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&i.rel.toLowerCase()==="stylesheet"||s.removeChild(i),i=o}}else s==="body"&&wn(a.ownerDocument.body);s=r}while(s);Is(t)}function Pm(a,t){var s=a;a=0;do{var n=s.nextSibling;if(s.nodeType===1?t?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(t?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),n&&n.nodeType===8)if(s=n.data,s==="/$"){if(a===0)break;a--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||a++;s=n}while(s)}function Co(a){var t=a.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var s=t;switch(t=t.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Co(s),Mi(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}a.removeChild(s)}}function jf(a,t,s,n){for(;a.nodeType===1;){var r=s;if(a.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(a.nodeName!=="INPUT"||a.type!=="hidden"))break}else if(n){if(!a[Xs])switch(t){case"meta":if(!a.hasAttribute("itemprop"))break;return a;case"link":if(i=a.getAttribute("rel"),i==="stylesheet"&&a.hasAttribute("data-precedence"))break;if(i!==r.rel||a.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||a.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||a.getAttribute("title")!==(r.title==null?null:r.title))break;return a;case"style":if(a.hasAttribute("data-precedence"))break;return a;case"script":if(i=a.getAttribute("src"),(i!==(r.src==null?null:r.src)||a.getAttribute("type")!==(r.type==null?null:r.type)||a.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;return a;default:return a}}else if(t==="input"&&a.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&a.getAttribute("name")===i)return a}else return a;if(a=za(a.nextSibling),a===null)break}return null}function vf(a,t,s){if(t==="")return null;for(;a.nodeType!==3;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!s||(a=za(a.nextSibling),a===null))return null;return a}function km(a,t){for(;a.nodeType!==8;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!t||(a=za(a.nextSibling),a===null))return null;return a}function To(a){return a.data==="$?"||a.data==="$~"}function Ao(a){return a.data==="$!"||a.data==="$?"&&a.ownerDocument.readyState!=="loading"}function Sf(a,t){var s=a.ownerDocument;if(a.data==="$~")a._reactRetry=t;else if(a.data!=="$?"||s.readyState!=="loading")t();else{var n=function(){t(),s.removeEventListener("DOMContentLoaded",n)};s.addEventListener("DOMContentLoaded",n),a._reactRetry=n}}function za(a){for(;a!=null;a=a.nextSibling){var t=a.nodeType;if(t===1||t===3)break;if(t===8){if(t=a.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return a}var Ro=null;function _m(a){a=a.nextSibling;for(var t=0;a;){if(a.nodeType===8){var s=a.data;if(s==="/$"||s==="/&"){if(t===0)return za(a.nextSibling);t--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||t++}a=a.nextSibling}return null}function Hm(a){a=a.previousSibling;for(var t=0;a;){if(a.nodeType===8){var s=a.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(t===0)return a;t--}else s!=="/$"&&s!=="/&"||t++}a=a.previousSibling}return null}function Im(a,t,s){switch(t=Zr(s),a){case"html":if(a=t.documentElement,!a)throw Error(d(452));return a;case"head":if(a=t.head,!a)throw Error(d(453));return a;case"body":if(a=t.body,!a)throw Error(d(454));return a;default:throw Error(d(451))}}function wn(a){for(var t=a.attributes;t.length;)a.removeAttributeNode(t[0]);Mi(a)}var Ua=new Map,Jm=new Set;function Kr(a){return typeof a.getRootNode=="function"?a.getRootNode():a.nodeType===9?a:a.ownerDocument}var mt=G.d;G.d={f:Nf,r:Ef,D:Cf,C:Tf,L:Af,m:Rf,X:Of,S:Mf,M:Df};function Nf(){var a=mt.f(),t=Ir();return a||t}function Ef(a){var t=ls(a);t!==null&&t.tag===5&&t.type==="form"?iu(t):mt.r(a)}var ks=typeof document>"u"?null:document;function Fm(a,t,s){var n=ks;if(n&&typeof t=="string"&&t){var r=Ra(t);r='link[rel="'+a+'"][href="'+r+'"]',typeof s=="string"&&(r+='[crossorigin="'+s+'"]'),Jm.has(r)||(Jm.add(r),a={rel:a,crossOrigin:s,href:t},n.querySelector(r)===null&&(t=n.createElement("link"),ra(t,"link",a),$e(t),n.head.appendChild(t)))}}function Cf(a){mt.D(a),Fm("dns-prefetch",a,null)}function Tf(a,t){mt.C(a,t),Fm("preconnect",a,t)}function Af(a,t,s){mt.L(a,t,s);var n=ks;if(n&&a&&t){var r='link[rel="preload"][as="'+Ra(t)+'"]';t==="image"&&s&&s.imageSrcSet?(r+='[imagesrcset="'+Ra(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(r+='[imagesizes="'+Ra(s.imageSizes)+'"]')):r+='[href="'+Ra(a)+'"]';var i=r;switch(t){case"style":i=_s(a);break;case"script":i=Hs(a)}Ua.has(i)||(a=y({rel:"preload",href:t==="image"&&s&&s.imageSrcSet?void 0:a,as:t},s),Ua.set(i,a),n.querySelector(r)!==null||t==="style"&&n.querySelector(Ln(i))||t==="script"&&n.querySelector(qn(i))||(t=n.createElement("link"),ra(t,"link",a),$e(t),n.head.appendChild(t)))}}function Rf(a,t){mt.m(a,t);var s=ks;if(s&&a){var n=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ra(n)+'"][href="'+Ra(a)+'"]',i=r;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Hs(a)}if(!Ua.has(i)&&(a=y({rel:"modulepreload",href:a},t),Ua.set(i,a),s.querySelector(r)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(qn(i)))return}n=s.createElement("link"),ra(n,"link",a),$e(n),s.head.appendChild(n)}}}function Mf(a,t,s){mt.S(a,t,s);var n=ks;if(n&&a){var r=os(n).hoistableStyles,i=_s(a);t=t||"default";var o=r.get(i);if(!o){var m={loading:0,preload:null};if(o=n.querySelector(Ln(i)))m.loading=5;else{a=y({rel:"stylesheet",href:a,"data-precedence":t},s),(s=Ua.get(i))&&Mo(a,s);var b=o=n.createElement("link");$e(b),ra(b,"link",a),b._p=new Promise(function(O,U){b.onload=O,b.onerror=U}),b.addEventListener("load",function(){m.loading|=1}),b.addEventListener("error",function(){m.loading|=2}),m.loading|=4,$r(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:m},r.set(i,o)}}}function Of(a,t){mt.X(a,t);var s=ks;if(s&&a){var n=os(s).hoistableScripts,r=Hs(a),i=n.get(r);i||(i=s.querySelector(qn(r)),i||(a=y({src:a,async:!0},t),(t=Ua.get(r))&&Oo(a,t),i=s.createElement("script"),$e(i),ra(i,"link",a),s.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(r,i))}}function Df(a,t){mt.M(a,t);var s=ks;if(s&&a){var n=os(s).hoistableScripts,r=Hs(a),i=n.get(r);i||(i=s.querySelector(qn(r)),i||(a=y({src:a,async:!0,type:"module"},t),(t=Ua.get(r))&&Oo(a,t),i=s.createElement("script"),$e(i),ra(i,"link",a),s.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(r,i))}}function Vm(a,t,s,n){var r=(r=ue.current)?Kr(r):null;if(!r)throw Error(d(446));switch(a){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(t=_s(s.href),s=os(r).hoistableStyles,n=s.get(t),n||(n={type:"style",instance:null,count:0,state:null},s.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){a=_s(s.href);var i=os(r).hoistableStyles,o=i.get(a);if(o||(r=r.ownerDocument||r,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(a,o),(i=r.querySelector(Ln(a)))&&!i._p&&(o.instance=i,o.state.loading=5),Ua.has(a)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ua.set(a,s),i||wf(r,a,s,o.state))),t&&n===null)throw Error(d(528,""));return o}if(t&&n!==null)throw Error(d(529,""));return null;case"script":return t=s.async,s=s.src,typeof s=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Hs(s),s=os(r).hoistableScripts,n=s.get(t),n||(n={type:"script",instance:null,count:0,state:null},s.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,a))}}function _s(a){return'href="'+Ra(a)+'"'}function Ln(a){return'link[rel="stylesheet"]['+a+"]"}function Gm(a){return y({},a,{"data-precedence":a.precedence,precedence:null})}function wf(a,t,s,n){a.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=a.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),ra(t,"link",s),$e(t),a.head.appendChild(t))}function Hs(a){return'[src="'+Ra(a)+'"]'}function qn(a){return"script[async]"+a}function Ym(a,t,s){if(t.count++,t.instance===null)switch(t.type){case"style":var n=a.querySelector('style[data-href~="'+Ra(s.href)+'"]');if(n)return t.instance=n,$e(n),n;var r=y({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return n=(a.ownerDocument||a).createElement("style"),$e(n),ra(n,"style",r),$r(n,s.precedence,a),t.instance=n;case"stylesheet":r=_s(s.href);var i=a.querySelector(Ln(r));if(i)return t.state.loading|=4,t.instance=i,$e(i),i;n=Gm(s),(r=Ua.get(r))&&Mo(n,r),i=(a.ownerDocument||a).createElement("link"),$e(i);var o=i;return o._p=new Promise(function(m,b){o.onload=m,o.onerror=b}),ra(i,"link",n),t.state.loading|=4,$r(i,s.precedence,a),t.instance=i;case"script":return i=Hs(s.src),(r=a.querySelector(qn(i)))?(t.instance=r,$e(r),r):(n=s,(r=Ua.get(i))&&(n=y({},s),Oo(n,r)),a=a.ownerDocument||a,r=a.createElement("script"),$e(r),ra(r,"link",n),a.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,$r(n,s.precedence,a));return t.instance}function $r(a,t,s){for(var n=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=n.length?n[n.length-1]:null,i=r,o=0;o<n.length;o++){var m=n[o];if(m.dataset.precedence===t)i=m;else if(i!==r)break}i?i.parentNode.insertBefore(a,i.nextSibling):(t=s.nodeType===9?s.head:s,t.insertBefore(a,t.firstChild))}function Mo(a,t){a.crossOrigin==null&&(a.crossOrigin=t.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=t.referrerPolicy),a.title==null&&(a.title=t.title)}function Oo(a,t){a.crossOrigin==null&&(a.crossOrigin=t.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=t.referrerPolicy),a.integrity==null&&(a.integrity=t.integrity)}var Wr=null;function Qm(a,t,s){if(Wr===null){var n=new Map,r=Wr=new Map;r.set(s,n)}else r=Wr,n=r.get(s),n||(n=new Map,r.set(s,n));if(n.has(a))return n;for(n.set(a,null),s=s.getElementsByTagName(a),r=0;r<s.length;r++){var i=s[r];if(!(i[Xs]||i[aa]||a==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=a+o;var m=n.get(o);m?m.push(i):n.set(o,[i])}}return n}function Xm(a,t,s){a=a.ownerDocument||a,a.head.insertBefore(s,t==="title"?a.querySelector("head > title"):null)}function Lf(a,t,s){if(s===1||t.itemProp!=null)return!1;switch(a){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(a=t.disabled,typeof t.precedence=="string"&&a==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Zm(a){return!(a.type==="stylesheet"&&(a.state.loading&3)===0)}function qf(a,t,s,n){if(s.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var r=_s(n.href),i=t.querySelector(Ln(r));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=ei.bind(a),t.then(a,a)),s.state.loading|=4,s.instance=i,$e(i);return}i=t.ownerDocument||t,n=Gm(n),(r=Ua.get(r))&&Mo(n,r),i=i.createElement("link"),$e(i);var o=i;o._p=new Promise(function(m,b){o.onload=m,o.onerror=b}),ra(i,"link",n),s.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(s,t),(t=s.state.preload)&&(s.state.loading&3)===0&&(a.count++,s=ei.bind(a),t.addEventListener("load",s),t.addEventListener("error",s))}}var Do=0;function zf(a,t){return a.stylesheets&&a.count===0&&ti(a,a.stylesheets),0<a.count||0<a.imgCount?function(s){var n=setTimeout(function(){if(a.stylesheets&&ti(a,a.stylesheets),a.unsuspend){var i=a.unsuspend;a.unsuspend=null,i()}},6e4+t);0<a.imgBytes&&Do===0&&(Do=62500*hf());var r=setTimeout(function(){if(a.waitingForImages=!1,a.count===0&&(a.stylesheets&&ti(a,a.stylesheets),a.unsuspend)){var i=a.unsuspend;a.unsuspend=null,i()}},(a.imgBytes>Do?50:800)+t);return a.unsuspend=s,function(){a.unsuspend=null,clearTimeout(n),clearTimeout(r)}}:null}function ei(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ti(this,this.stylesheets);else if(this.unsuspend){var a=this.unsuspend;this.unsuspend=null,a()}}}var ai=null;function ti(a,t){a.stylesheets=null,a.unsuspend!==null&&(a.count++,ai=new Map,t.forEach(Uf,a),ai=null,ei.call(a))}function Uf(a,t){if(!(t.state.loading&4)){var s=ai.get(a);if(s)var n=s.get(null);else{s=new Map,ai.set(a,s);for(var r=a.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var o=r[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(s.set(o.dataset.precedence,o),n=o)}n&&s.set(null,n)}r=t.instance,o=r.getAttribute("data-precedence"),i=s.get(o)||n,i===n&&s.set(null,r),s.set(o,r),this.count++,n=ei.bind(this),r.addEventListener("load",n),r.addEventListener("error",n),i?i.parentNode.insertBefore(r,i.nextSibling):(a=a.nodeType===9?a.head:a,a.insertBefore(r,a.firstChild)),t.state.loading|=4}}var zn={$$typeof:I,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function Bf(a,t,s,n,r,i,o,m,b){this.tag=1,this.containerInfo=a,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ci(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.hiddenUpdates=Ci(null),this.identifierPrefix=n,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Km(a,t,s,n,r,i,o,m,b,O,U,H){return a=new Bf(a,t,s,o,b,O,U,H,m),t=1,i===!0&&(t|=24),i=ja(3,null,null,t),a.current=i,i.stateNode=a,t=cl(),t.refCount++,a.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:s,cache:t},pl(i),a}function $m(a){return a?(a=bs,a):bs}function Wm(a,t,s,n,r,i){r=$m(r),n.context===null?n.context=r:n.pendingContext=r,n=Nt(t),n.payload={element:s},i=i===void 0?null:i,i!==null&&(n.callback=i),s=Et(a,n,t),s!==null&&(xa(s,a,t),pn(s,a,t))}function ep(a,t){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var s=a.retryLane;a.retryLane=s!==0&&s<t?s:t}}function wo(a,t){ep(a,t),(a=a.alternate)&&ep(a,t)}function ap(a){if(a.tag===13||a.tag===31){var t=Gt(a,67108864);t!==null&&xa(t,a,67108864),wo(a,67108864)}}function tp(a){if(a.tag===13||a.tag===31){var t=Ca();t=Ti(t);var s=Gt(a,t);s!==null&&xa(s,a,t),wo(a,t)}}var si=!0;function Pf(a,t,s,n){var r=q.T;q.T=null;var i=G.p;try{G.p=2,Lo(a,t,s,n)}finally{G.p=i,q.T=r}}function kf(a,t,s,n){var r=q.T;q.T=null;var i=G.p;try{G.p=8,Lo(a,t,s,n)}finally{G.p=i,q.T=r}}function Lo(a,t,s,n){if(si){var r=qo(n);if(r===null)yo(a,t,n,ni,s),np(a,n);else if(Hf(r,a,t,s,n))n.stopPropagation();else if(np(a,n),t&4&&-1<_f.indexOf(a)){for(;r!==null;){var i=ls(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Ht(i.pendingLanes);if(o!==0){var m=i;for(m.pendingLanes|=2,m.entangledLanes|=2;o;){var b=1<<31-ba(o);m.entanglements[1]|=b,o&=~b}Fa(i),(Te&6)===0&&(_r=fa()+500,Mn(0))}}break;case 31:case 13:m=Gt(i,2),m!==null&&xa(m,i,2),Ir(),wo(i,2)}if(i=qo(n),i===null&&yo(a,t,n,ni,s),i===r)break;r=i}r!==null&&n.stopPropagation()}else yo(a,t,n,null,s)}}function qo(a){return a=zi(a),zo(a)}var ni=null;function zo(a){if(ni=null,a=is(a),a!==null){var t=h(a);if(t===null)a=null;else{var s=t.tag;if(s===13){if(a=f(t),a!==null)return a;a=null}else if(s===31){if(a=T(t),a!==null)return a;a=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;a=null}else t!==a&&(a=null)}}return ni=a,null}function sp(a){switch(a){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ex()){case uc:return 2;case mc:return 8;case Yn:case Cx:return 32;case pc:return 268435456;default:return 32}default:return 32}}var Uo=!1,zt=null,Ut=null,Bt=null,Un=new Map,Bn=new Map,Pt=[],_f="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function np(a,t){switch(a){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(t.pointerId)}}function Pn(a,t,s,n,r,i){return a===null||a.nativeEvent!==i?(a={blockedOn:t,domEventName:s,eventSystemFlags:n,nativeEvent:i,targetContainers:[r]},t!==null&&(t=ls(t),t!==null&&ap(t)),a):(a.eventSystemFlags|=n,t=a.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),a)}function Hf(a,t,s,n,r){switch(t){case"focusin":return zt=Pn(zt,a,t,s,n,r),!0;case"dragenter":return Ut=Pn(Ut,a,t,s,n,r),!0;case"mouseover":return Bt=Pn(Bt,a,t,s,n,r),!0;case"pointerover":var i=r.pointerId;return Un.set(i,Pn(Un.get(i)||null,a,t,s,n,r)),!0;case"gotpointercapture":return i=r.pointerId,Bn.set(i,Pn(Bn.get(i)||null,a,t,s,n,r)),!0}return!1}function rp(a){var t=is(a.target);if(t!==null){var s=h(t);if(s!==null){if(t=s.tag,t===13){if(t=f(s),t!==null){a.blockedOn=t,yc(a.priority,function(){tp(s)});return}}else if(t===31){if(t=T(s),t!==null){a.blockedOn=t,yc(a.priority,function(){tp(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){a.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}a.blockedOn=null}function ri(a){if(a.blockedOn!==null)return!1;for(var t=a.targetContainers;0<t.length;){var s=qo(a.nativeEvent);if(s===null){s=a.nativeEvent;var n=new s.constructor(s.type,s);qi=n,s.target.dispatchEvent(n),qi=null}else return t=ls(s),t!==null&&ap(t),a.blockedOn=s,!1;t.shift()}return!0}function ip(a,t,s){ri(a)&&s.delete(t)}function If(){Uo=!1,zt!==null&&ri(zt)&&(zt=null),Ut!==null&&ri(Ut)&&(Ut=null),Bt!==null&&ri(Bt)&&(Bt=null),Un.forEach(ip),Bn.forEach(ip)}function ii(a,t){a.blockedOn===t&&(a.blockedOn=null,Uo||(Uo=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,If)))}var li=null;function lp(a){li!==a&&(li=a,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){li===a&&(li=null);for(var t=0;t<a.length;t+=3){var s=a[t],n=a[t+1],r=a[t+2];if(typeof n!="function"){if(zo(n||s)===null)continue;break}var i=ls(s);i!==null&&(a.splice(t,3),t-=3,Ll(i,{pending:!0,data:r,method:s.method,action:n},n,r))}}))}function Is(a){function t(b){return ii(b,a)}zt!==null&&ii(zt,a),Ut!==null&&ii(Ut,a),Bt!==null&&ii(Bt,a),Un.forEach(t),Bn.forEach(t);for(var s=0;s<Pt.length;s++){var n=Pt[s];n.blockedOn===a&&(n.blockedOn=null)}for(;0<Pt.length&&(s=Pt[0],s.blockedOn===null);)rp(s),s.blockedOn===null&&Pt.shift();if(s=(a.ownerDocument||a).$$reactFormReplay,s!=null)for(n=0;n<s.length;n+=3){var r=s[n],i=s[n+1],o=r[oa]||null;if(typeof i=="function")o||lp(s);else if(o){var m=null;if(i&&i.hasAttribute("formAction")){if(r=i,o=i[oa]||null)m=o.formAction;else if(zo(r)!==null)continue}else m=o.action;typeof m=="function"?s[n+1]=m:(s.splice(n,3),n-=3),lp(s)}}}function op(){function a(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return r=o})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),n||setTimeout(s,20)}function s(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,r=null;return navigation.addEventListener("navigate",a),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(s,100),function(){n=!0,navigation.removeEventListener("navigate",a),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Bo(a){this._internalRoot=a}oi.prototype.render=Bo.prototype.render=function(a){var t=this._internalRoot;if(t===null)throw Error(d(409));var s=t.current,n=Ca();Wm(s,n,a,t,null,null)},oi.prototype.unmount=Bo.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var t=a.containerInfo;Wm(a.current,2,null,a,null,null),Ir(),t[rs]=null}};function oi(a){this._internalRoot=a}oi.prototype.unstable_scheduleHydration=function(a){if(a){var t=bc();a={blockedOn:null,target:a,priority:t};for(var s=0;s<Pt.length&&t!==0&&t<Pt[s].priority;s++);Pt.splice(s,0,a),s===0&&rp(a)}};var cp=c.version;if(cp!=="19.2.4")throw Error(d(527,cp,"19.2.4"));G.findDOMNode=function(a){var t=a._reactInternals;if(t===void 0)throw typeof a.render=="function"?Error(d(188)):(a=Object.keys(a).join(","),Error(d(268,a)));return a=x(t),a=a!==null?A(a):null,a=a===null?null:a.stateNode,a};var Jf={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ci.isDisabled&&ci.supportsFiber)try{Gs=ci.inject(Jf),ga=ci}catch{}}return _n.createRoot=function(a,t){if(!p(a))throw Error(d(299));var s=!1,n="",r=fu,i=gu,o=bu;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Km(a,1,!1,null,null,s,n,null,r,i,o,op),a[rs]=t.current,bo(a),new Bo(t)},_n.hydrateRoot=function(a,t,s){if(!p(a))throw Error(d(299));var n=!1,r="",i=fu,o=gu,m=bu,b=null;return s!=null&&(s.unstable_strictMode===!0&&(n=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(i=s.onUncaughtError),s.onCaughtError!==void 0&&(o=s.onCaughtError),s.onRecoverableError!==void 0&&(m=s.onRecoverableError),s.formState!==void 0&&(b=s.formState)),t=Km(a,1,!0,t,s??null,n,r,b,i,o,m,op),t.context=$m(null),s=t.current,n=Ca(),n=Ti(n),r=Nt(n),r.callback=null,Et(s,r,n),s=n,t.current.lanes=s,Qs(t,s),Fa(t),a[rs]=t.current,bo(a),new oi(t)},_n.version="19.2.4",_n}var yp;function Wf(){if(yp)return _o.exports;yp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),_o.exports=$f(),_o.exports}var eg=Wf();var jp="popstate";function vp(l){return typeof l=="object"&&l!=null&&"pathname"in l&&"search"in l&&"hash"in l&&"state"in l&&"key"in l}function ag(l={}){function c(d,p){let h=p.state?.masked,{pathname:f,search:T,hash:g}=h||d.location;return Qo("",{pathname:f,search:T,hash:g},p.state&&p.state.usr||null,p.state&&p.state.key||"default",h?{pathname:d.location.pathname,search:d.location.search,hash:d.location.hash}:void 0)}function u(d,p){return typeof p=="string"?p:In(p)}return sg(c,u,null,l)}function _e(l,c){if(l===!1||l===null||typeof l>"u")throw new Error(c)}function Ya(l,c){if(!l){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function tg(){return Math.random().toString(36).substring(2,10)}function Sp(l,c){return{usr:l.state,key:l.key,idx:c,masked:l.unstable_mask?{pathname:l.pathname,search:l.search,hash:l.hash}:void 0}}function Qo(l,c,u=null,d,p){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof c=="string"?Js(c):c,state:u,key:c&&c.key||d||tg(),unstable_mask:p}}function In({pathname:l="/",search:c="",hash:u=""}){return c&&c!=="?"&&(l+=c.charAt(0)==="?"?c:"?"+c),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function Js(l){let c={};if(l){let u=l.indexOf("#");u>=0&&(c.hash=l.substring(u),l=l.substring(0,u));let d=l.indexOf("?");d>=0&&(c.search=l.substring(d),l=l.substring(0,d)),l&&(c.pathname=l)}return c}function sg(l,c,u,d={}){let{window:p=document.defaultView,v5Compat:h=!1}=d,f=p.history,T="POP",g=null,x=A();x==null&&(x=0,f.replaceState({...f.state,idx:x},""));function A(){return(f.state||{idx:null}).idx}function y(){T="POP";let E=A(),B=E==null?null:E-x;x=E,g&&g({action:T,location:N.location,delta:B})}function J(E,B){T="PUSH";let z=vp(E)?E:Qo(N.location,E,B);x=A()+1;let I=Sp(z,x),$=N.createHref(z.unstable_mask||z);try{f.pushState(I,"",$)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;p.location.assign($)}h&&g&&g({action:T,location:N.location,delta:1})}function V(E,B){T="REPLACE";let z=vp(E)?E:Qo(N.location,E,B);x=A();let I=Sp(z,x),$=N.createHref(z.unstable_mask||z);f.replaceState(I,"",$),h&&g&&g({action:T,location:N.location,delta:0})}function R(E){return ng(E)}let N={get action(){return T},get location(){return l(p,f)},listen(E){if(g)throw new Error("A history only accepts one active listener");return p.addEventListener(jp,y),g=E,()=>{p.removeEventListener(jp,y),g=null}},createHref(E){return c(p,E)},createURL:R,encodeLocation(E){let B=R(E);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:J,replace:V,go(E){return f.go(E)}};return N}function ng(l,c=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),_e(u,"No window.location.(origin|href) available to create URL");let d=typeof l=="string"?l:In(l);return d=d.replace(/ $/,"%20"),!c&&d.startsWith("//")&&(d=u+d),new URL(d,u)}function Hp(l,c,u="/"){return rg(l,c,u,!1)}function rg(l,c,u,d){let p=typeof c=="string"?Js(c):c,h=pt(p.pathname||"/",u);if(h==null)return null;let f=Ip(l);ig(f);let T=null;for(let g=0;T==null&&g<f.length;++g){let x=gg(h);T=hg(f[g],x,d)}return T}function Ip(l,c=[],u=[],d="",p=!1){let h=(f,T,g=p,x)=>{let A={relativePath:x===void 0?f.path||"":x,caseSensitive:f.caseSensitive===!0,childrenIndex:T,route:f};if(A.relativePath.startsWith("/")){if(!A.relativePath.startsWith(d)&&g)return;_e(A.relativePath.startsWith(d),`Absolute route path "${A.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),A.relativePath=A.relativePath.slice(d.length)}let y=Va([d,A.relativePath]),J=u.concat(A);f.children&&f.children.length>0&&(_e(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Ip(f.children,c,J,y,g)),!(f.path==null&&!f.index)&&c.push({path:y,score:pg(y,f.index),routesMeta:J})};return l.forEach((f,T)=>{if(f.path===""||!f.path?.includes("?"))h(f,T);else for(let g of Jp(f.path))h(f,T,!0,g)}),c}function Jp(l){let c=l.split("/");if(c.length===0)return[];let[u,...d]=c,p=u.endsWith("?"),h=u.replace(/\?$/,"");if(d.length===0)return p?[h,""]:[h];let f=Jp(d.join("/")),T=[];return T.push(...f.map(g=>g===""?h:[h,g].join("/"))),p&&T.push(...f),T.map(g=>l.startsWith("/")&&g===""?"/":g)}function ig(l){l.sort((c,u)=>c.score!==u.score?u.score-c.score:xg(c.routesMeta.map(d=>d.childrenIndex),u.routesMeta.map(d=>d.childrenIndex)))}var lg=/^:[\w-]+$/,og=3,cg=2,dg=1,ug=10,mg=-2,Np=l=>l==="*";function pg(l,c){let u=l.split("/"),d=u.length;return u.some(Np)&&(d+=mg),c&&(d+=cg),u.filter(p=>!Np(p)).reduce((p,h)=>p+(lg.test(h)?og:h===""?dg:ug),d)}function xg(l,c){return l.length===c.length&&l.slice(0,-1).every((d,p)=>d===c[p])?l[l.length-1]-c[c.length-1]:0}function hg(l,c,u=!1){let{routesMeta:d}=l,p={},h="/",f=[];for(let T=0;T<d.length;++T){let g=d[T],x=T===d.length-1,A=h==="/"?c:c.slice(h.length)||"/",y=pi({path:g.relativePath,caseSensitive:g.caseSensitive,end:x},A),J=g.route;if(!y&&x&&u&&!d[d.length-1].route.index&&(y=pi({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},A)),!y)return null;Object.assign(p,y.params),f.push({params:p,pathname:Va([h,y.pathname]),pathnameBase:vg(Va([h,y.pathnameBase])),route:J}),y.pathnameBase!=="/"&&(h=Va([h,y.pathnameBase]))}return f}function pi(l,c){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,d]=fg(l.path,l.caseSensitive,l.end),p=c.match(u);if(!p)return null;let h=p[0],f=h.replace(/(.)\/+$/,"$1"),T=p.slice(1);return{params:d.reduce((x,{paramName:A,isOptional:y},J)=>{if(A==="*"){let R=T[J]||"";f=h.slice(0,h.length-R.length).replace(/(.)\/+$/,"$1")}const V=T[J];return y&&!V?x[A]=void 0:x[A]=(V||"").replace(/%2F/g,"/"),x},{}),pathname:h,pathnameBase:f,pattern:l}}function fg(l,c=!1,u=!0){Ya(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let d=[],p="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,T,g,x,A)=>{if(d.push({paramName:T,isOptional:g!=null}),g){let y=A.charAt(x+f.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(d.push({paramName:"*"}),p+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?p+="\\/*$":l!==""&&l!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,c?void 0:"i"),d]}function gg(l){try{return l.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Ya(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),l}}function pt(l,c){if(c==="/")return l;if(!l.toLowerCase().startsWith(c.toLowerCase()))return null;let u=c.endsWith("/")?c.length-1:c.length,d=l.charAt(u);return d&&d!=="/"?null:l.slice(u)||"/"}var bg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function yg(l,c="/"){let{pathname:u,search:d="",hash:p=""}=typeof l=="string"?Js(l):l,h;return u?(u=u.replace(/\/\/+/g,"/"),u.startsWith("/")?h=Ep(u.substring(1),"/"):h=Ep(u,c)):h=c,{pathname:h,search:Sg(d),hash:Ng(p)}}function Ep(l,c){let u=c.replace(/\/+$/,"").split("/");return l.split("/").forEach(p=>{p===".."?u.length>1&&u.pop():p!=="."&&u.push(p)}),u.length>1?u.join("/"):"/"}function Fo(l,c,u,d){return`Cannot include a '${l}' character in a manually specified \`to.${c}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jg(l){return l.filter((c,u)=>u===0||c.route.path&&c.route.path.length>0)}function Fp(l){let c=jg(l);return c.map((u,d)=>d===c.length-1?u.pathname:u.pathnameBase)}function Wo(l,c,u,d=!1){let p;typeof l=="string"?p=Js(l):(p={...l},_e(!p.pathname||!p.pathname.includes("?"),Fo("?","pathname","search",p)),_e(!p.pathname||!p.pathname.includes("#"),Fo("#","pathname","hash",p)),_e(!p.search||!p.search.includes("#"),Fo("#","search","hash",p)));let h=l===""||p.pathname==="",f=h?"/":p.pathname,T;if(f==null)T=u;else{let y=c.length-1;if(!d&&f.startsWith("..")){let J=f.split("/");for(;J[0]==="..";)J.shift(),y-=1;p.pathname=J.join("/")}T=y>=0?c[y]:"/"}let g=yg(p,T),x=f&&f!=="/"&&f.endsWith("/"),A=(h||f===".")&&u.endsWith("/");return!g.pathname.endsWith("/")&&(x||A)&&(g.pathname+="/"),g}var Va=l=>l.join("/").replace(/\/\/+/g,"/"),vg=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Sg=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Ng=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,Eg=class{constructor(l,c,u,d=!1){this.status=l,this.statusText=c||"",this.internal=d,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function Cg(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function Tg(l){return l.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Vp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Gp(l,c){let u=l;if(typeof u!="string"||!bg.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let d=u,p=!1;if(Vp)try{let h=new URL(window.location.href),f=u.startsWith("//")?new URL(h.protocol+u):new URL(u),T=pt(f.pathname,c);f.origin===h.origin&&T!=null?u=T+f.search+f.hash:p=!0}catch{Ya(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:p,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Yp=["POST","PUT","PATCH","DELETE"];new Set(Yp);var Ag=["GET",...Yp];new Set(Ag);var Fs=L.createContext(null);Fs.displayName="DataRouter";var hi=L.createContext(null);hi.displayName="DataRouterState";var Rg=L.createContext(!1),Qp=L.createContext({isTransitioning:!1});Qp.displayName="ViewTransition";var Mg=L.createContext(new Map);Mg.displayName="Fetchers";var Og=L.createContext(null);Og.displayName="Await";var Ba=L.createContext(null);Ba.displayName="Navigation";var Jn=L.createContext(null);Jn.displayName="Location";var Qa=L.createContext({outlet:null,matches:[],isDataRoute:!1});Qa.displayName="Route";var ec=L.createContext(null);ec.displayName="RouteError";var Xp="REACT_ROUTER_ERROR",Dg="REDIRECT",wg="ROUTE_ERROR_RESPONSE";function Lg(l){if(l.startsWith(`${Xp}:${Dg}:{`))try{let c=JSON.parse(l.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function qg(l){if(l.startsWith(`${Xp}:${wg}:{`))try{let c=JSON.parse(l.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new Eg(c.status,c.statusText,c.data)}catch{}}function zg(l,{relative:c}={}){_e(Fn(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:d}=L.useContext(Ba),{hash:p,pathname:h,search:f}=Vn(l,{relative:c}),T=h;return u!=="/"&&(T=h==="/"?u:Va([u,h])),d.createHref({pathname:T,search:f,hash:p})}function Fn(){return L.useContext(Jn)!=null}function xt(){return _e(Fn(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(Jn).location}var Zp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Kp(l){L.useContext(Ba).static||L.useLayoutEffect(l)}function Ug(){let{isDataRoute:l}=L.useContext(Qa);return l?Kg():Bg()}function Bg(){_e(Fn(),"useNavigate() may be used only in the context of a <Router> component.");let l=L.useContext(Fs),{basename:c,navigator:u}=L.useContext(Ba),{matches:d}=L.useContext(Qa),{pathname:p}=xt(),h=JSON.stringify(Fp(d)),f=L.useRef(!1);return Kp(()=>{f.current=!0}),L.useCallback((g,x={})=>{if(Ya(f.current,Zp),!f.current)return;if(typeof g=="number"){u.go(g);return}let A=Wo(g,JSON.parse(h),p,x.relative==="path");l==null&&c!=="/"&&(A.pathname=A.pathname==="/"?c:Va([c,A.pathname])),(x.replace?u.replace:u.push)(A,x.state,x)},[c,u,h,p,l])}var Pg=L.createContext(null);function kg(l){let c=L.useContext(Qa).outlet;return L.useMemo(()=>c&&L.createElement(Pg.Provider,{value:l},c),[c,l])}function Vn(l,{relative:c}={}){let{matches:u}=L.useContext(Qa),{pathname:d}=xt(),p=JSON.stringify(Fp(u));return L.useMemo(()=>Wo(l,JSON.parse(p),d,c==="path"),[l,p,d,c])}function _g(l,c){return $p(l,c)}function $p(l,c,u){_e(Fn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=L.useContext(Ba),{matches:p}=L.useContext(Qa),h=p[p.length-1],f=h?h.params:{},T=h?h.pathname:"/",g=h?h.pathnameBase:"/",x=h&&h.route;{let E=x&&x.path||"";ex(T,!x||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${T}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let A=xt(),y;if(c){let E=typeof c=="string"?Js(c):c;_e(g==="/"||E.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${E.pathname}" was given in the \`location\` prop.`),y=E}else y=A;let J=y.pathname||"/",V=J;if(g!=="/"){let E=g.replace(/^\//,"").split("/");V="/"+J.replace(/^\//,"").split("/").slice(E.length).join("/")}let R=Hp(l,{pathname:V});Ya(x||R!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Ya(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=Vg(R&&R.map(E=>Object.assign({},E,{params:Object.assign({},f,E.params),pathname:Va([g,d.encodeLocation?d.encodeLocation(E.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?g:Va([g,d.encodeLocation?d.encodeLocation(E.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathnameBase])})),p,u);return c&&N?L.createElement(Jn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...y},navigationType:"POP"}},N):N}function Hg(){let l=Zg(),c=Cg(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,d="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:d},h={padding:"2px 4px",backgroundColor:d},f=null;return console.error("Error handled by React Router default ErrorBoundary:",l),f=L.createElement(L.Fragment,null,L.createElement("p",null,"💿 Hey developer 👋"),L.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",L.createElement("code",{style:h},"ErrorBoundary")," or"," ",L.createElement("code",{style:h},"errorElement")," prop on your route.")),L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},c),u?L.createElement("pre",{style:p},u):null,f)}var Ig=L.createElement(Hg,null),Wp=class extends L.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,c){return c.location!==l.location||c.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:c.error,location:c.location,revalidation:l.revalidation||c.revalidation}}componentDidCatch(l,c){this.props.onError?this.props.onError(l,c):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const u=qg(l.digest);u&&(l=u)}let c=l!==void 0?L.createElement(Qa.Provider,{value:this.props.routeContext},L.createElement(ec.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?L.createElement(Jg,{error:l},c):c}};Wp.contextType=Rg;var Vo=new WeakMap;function Jg({children:l,error:c}){let{basename:u}=L.useContext(Ba);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let d=Lg(c.digest);if(d){let p=Vo.get(c);if(p)throw p;let h=Gp(d.location,u);if(Vp&&!Vo.get(c))if(h.isExternal||d.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:d.replace}));throw Vo.set(c,f),f}return L.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return l}function Fg({routeContext:l,match:c,children:u}){let d=L.useContext(Fs);return d&&d.static&&d.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=c.route.id),L.createElement(Qa.Provider,{value:l},u)}function Vg(l,c=[],u){let d=u?.state;if(l==null){if(!d)return null;if(d.errors)l=d.matches;else if(c.length===0&&!d.initialized&&d.matches.length>0)l=d.matches;else return null}let p=l,h=d?.errors;if(h!=null){let A=p.findIndex(y=>y.route.id&&h?.[y.route.id]!==void 0);_e(A>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),p=p.slice(0,Math.min(p.length,A+1))}let f=!1,T=-1;if(u&&d){f=d.renderFallback;for(let A=0;A<p.length;A++){let y=p[A];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(T=A),y.route.id){let{loaderData:J,errors:V}=d,R=y.route.loader&&!J.hasOwnProperty(y.route.id)&&(!V||V[y.route.id]===void 0);if(y.route.lazy||R){u.isStatic&&(f=!0),T>=0?p=p.slice(0,T+1):p=[p[0]];break}}}}let g=u?.onError,x=d&&g?(A,y)=>{g(A,{location:d.location,params:d.matches?.[0]?.params??{},unstable_pattern:Tg(d.matches),errorInfo:y})}:void 0;return p.reduceRight((A,y,J)=>{let V,R=!1,N=null,E=null;d&&(V=h&&y.route.id?h[y.route.id]:void 0,N=y.route.errorElement||Ig,f&&(T<0&&J===0?(ex("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,E=null):T===J&&(R=!0,E=y.route.hydrateFallbackElement||null)));let B=c.concat(p.slice(0,J+1)),z=()=>{let I;return V?I=N:R?I=E:y.route.Component?I=L.createElement(y.route.Component,null):y.route.element?I=y.route.element:I=A,L.createElement(Fg,{match:y,routeContext:{outlet:A,matches:B,isDataRoute:d!=null},children:I})};return d&&(y.route.ErrorBoundary||y.route.errorElement||J===0)?L.createElement(Wp,{location:d.location,revalidation:d.revalidation,component:N,error:V,children:z(),routeContext:{outlet:null,matches:B,isDataRoute:!0},onError:x}):z()},null)}function ac(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gg(l){let c=L.useContext(Fs);return _e(c,ac(l)),c}function Yg(l){let c=L.useContext(hi);return _e(c,ac(l)),c}function Qg(l){let c=L.useContext(Qa);return _e(c,ac(l)),c}function tc(l){let c=Qg(l),u=c.matches[c.matches.length-1];return _e(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function Xg(){return tc("useRouteId")}function Zg(){let l=L.useContext(ec),c=Yg("useRouteError"),u=tc("useRouteError");return l!==void 0?l:c.errors?.[u]}function Kg(){let{router:l}=Gg("useNavigate"),c=tc("useNavigate"),u=L.useRef(!1);return Kp(()=>{u.current=!0}),L.useCallback(async(p,h={})=>{Ya(u.current,Zp),u.current&&(typeof p=="number"?await l.navigate(p):await l.navigate(p,{fromRouteId:c,...h}))},[l,c])}var Cp={};function ex(l,c,u){!c&&!Cp[l]&&(Cp[l]=!0,Ya(!1,u))}L.memo($g);function $g({routes:l,future:c,state:u,isStatic:d,onError:p}){return $p(l,void 0,{state:u,isStatic:d,onError:p})}function Wg(l){return kg(l.context)}function ie(l){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function eb({basename:l="/",children:c=null,location:u,navigationType:d="POP",navigator:p,static:h=!1,unstable_useTransitions:f}){_e(!Fn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let T=l.replace(/^\/*/,"/"),g=L.useMemo(()=>({basename:T,navigator:p,static:h,unstable_useTransitions:f,future:{}}),[T,p,h,f]);typeof u=="string"&&(u=Js(u));let{pathname:x="/",search:A="",hash:y="",state:J=null,key:V="default",unstable_mask:R}=u,N=L.useMemo(()=>{let E=pt(x,T);return E==null?null:{location:{pathname:E,search:A,hash:y,state:J,key:V,unstable_mask:R},navigationType:d}},[T,x,A,y,J,V,d,R]);return Ya(N!=null,`<Router basename="${T}"> is not able to match the URL "${x}${A}${y}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:L.createElement(Ba.Provider,{value:g},L.createElement(Jn.Provider,{children:c,value:N}))}function ab({children:l,location:c}){return _g(Xo(l),c)}function Xo(l,c=[]){let u=[];return L.Children.forEach(l,(d,p)=>{if(!L.isValidElement(d))return;let h=[...c,p];if(d.type===L.Fragment){u.push.apply(u,Xo(d.props.children,h));return}_e(d.type===ie,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!d.props.index||!d.props.children,"An index route cannot have child routes.");let f={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(f.children=Xo(d.props.children,h)),u.push(f)}),u}var ui="get",mi="application/x-www-form-urlencoded";function fi(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function tb(l){return fi(l)&&l.tagName.toLowerCase()==="button"}function sb(l){return fi(l)&&l.tagName.toLowerCase()==="form"}function nb(l){return fi(l)&&l.tagName.toLowerCase()==="input"}function rb(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function ib(l,c){return l.button===0&&(!c||c==="_self")&&!rb(l)}var di=null;function lb(){if(di===null)try{new FormData(document.createElement("form"),0),di=!1}catch{di=!0}return di}var ob=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Go(l){return l!=null&&!ob.has(l)?(Ya(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mi}"`),null):l}function cb(l,c){let u,d,p,h,f;if(sb(l)){let T=l.getAttribute("action");d=T?pt(T,c):null,u=l.getAttribute("method")||ui,p=Go(l.getAttribute("enctype"))||mi,h=new FormData(l)}else if(tb(l)||nb(l)&&(l.type==="submit"||l.type==="image")){let T=l.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=l.getAttribute("formaction")||T.getAttribute("action");if(d=g?pt(g,c):null,u=l.getAttribute("formmethod")||T.getAttribute("method")||ui,p=Go(l.getAttribute("formenctype"))||Go(T.getAttribute("enctype"))||mi,h=new FormData(T,l),!lb()){let{name:x,type:A,value:y}=l;if(A==="image"){let J=x?`${x}.`:"";h.append(`${J}x`,"0"),h.append(`${J}y`,"0")}else x&&h.append(x,y)}}else{if(fi(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=ui,d=null,p=mi,f=l}return h&&p==="text/plain"&&(f=h,h=void 0),{action:d,method:u.toLowerCase(),encType:p,formData:h,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function sc(l,c){if(l===!1||l===null||typeof l>"u")throw new Error(c)}function db(l,c,u,d){let p=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${d}`:p.pathname=`${p.pathname}.${d}`:p.pathname==="/"?p.pathname=`_root.${d}`:c&&pt(p.pathname,c)==="/"?p.pathname=`${c.replace(/\/$/,"")}/_root.${d}`:p.pathname=`${p.pathname.replace(/\/$/,"")}.${d}`,p}async function ub(l,c){if(l.id in c)return c[l.id];try{let u=await import(l.module);return c[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mb(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function pb(l,c,u){let d=await Promise.all(l.map(async p=>{let h=c.routes[p.route.id];if(h){let f=await ub(h,u);return f.links?f.links():[]}return[]}));return gb(d.flat(1).filter(mb).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function Tp(l,c,u,d,p,h){let f=(g,x)=>u[x]?g.route.id!==u[x].route.id:!0,T=(g,x)=>u[x].pathname!==g.pathname||u[x].route.path?.endsWith("*")&&u[x].params["*"]!==g.params["*"];return h==="assets"?c.filter((g,x)=>f(g,x)||T(g,x)):h==="data"?c.filter((g,x)=>{let A=d.routes[g.route.id];if(!A||!A.hasLoader)return!1;if(f(g,x)||T(g,x))return!0;if(g.route.shouldRevalidate){let y=g.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function xb(l,c,{includeHydrateFallback:u}={}){return hb(l.map(d=>{let p=c.routes[d.route.id];if(!p)return[];let h=[p.module];return p.clientActionModule&&(h=h.concat(p.clientActionModule)),p.clientLoaderModule&&(h=h.concat(p.clientLoaderModule)),u&&p.hydrateFallbackModule&&(h=h.concat(p.hydrateFallbackModule)),p.imports&&(h=h.concat(p.imports)),h}).flat(1))}function hb(l){return[...new Set(l)]}function fb(l){let c={},u=Object.keys(l).sort();for(let d of u)c[d]=l[d];return c}function gb(l,c){let u=new Set;return new Set(c),l.reduce((d,p)=>{let h=JSON.stringify(fb(p));return u.has(h)||(u.add(h),d.push({key:h,link:p})),d},[])}function ax(){let l=L.useContext(Fs);return sc(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function bb(){let l=L.useContext(hi);return sc(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var nc=L.createContext(void 0);nc.displayName="FrameworkContext";function tx(){let l=L.useContext(nc);return sc(l,"You must render this element inside a <HydratedRouter> element"),l}function yb(l,c){let u=L.useContext(nc),[d,p]=L.useState(!1),[h,f]=L.useState(!1),{onFocus:T,onBlur:g,onMouseEnter:x,onMouseLeave:A,onTouchStart:y}=c,J=L.useRef(null);L.useEffect(()=>{if(l==="render"&&f(!0),l==="viewport"){let N=B=>{B.forEach(z=>{f(z.isIntersecting)})},E=new IntersectionObserver(N,{threshold:.5});return J.current&&E.observe(J.current),()=>{E.disconnect()}}},[l]),L.useEffect(()=>{if(d){let N=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(N)}}},[d]);let V=()=>{p(!0)},R=()=>{p(!1),f(!1)};return u?l!=="intent"?[h,J,{}]:[h,J,{onFocus:Hn(T,V),onBlur:Hn(g,R),onMouseEnter:Hn(x,V),onMouseLeave:Hn(A,R),onTouchStart:Hn(y,V)}]:[!1,J,{}]}function Hn(l,c){return u=>{l&&l(u),u.defaultPrevented||c(u)}}function jb({page:l,...c}){let{router:u}=ax(),d=L.useMemo(()=>Hp(u.routes,l,u.basename),[u.routes,l,u.basename]);return d?L.createElement(Sb,{page:l,matches:d,...c}):null}function vb(l){let{manifest:c,routeModules:u}=tx(),[d,p]=L.useState([]);return L.useEffect(()=>{let h=!1;return pb(l,c,u).then(f=>{h||p(f)}),()=>{h=!0}},[l,c,u]),d}function Sb({page:l,matches:c,...u}){let d=xt(),{future:p,manifest:h,routeModules:f}=tx(),{basename:T}=ax(),{loaderData:g,matches:x}=bb(),A=L.useMemo(()=>Tp(l,c,x,h,d,"data"),[l,c,x,h,d]),y=L.useMemo(()=>Tp(l,c,x,h,d,"assets"),[l,c,x,h,d]),J=L.useMemo(()=>{if(l===d.pathname+d.search+d.hash)return[];let N=new Set,E=!1;if(c.forEach(z=>{let I=h.routes[z.route.id];!I||!I.hasLoader||(!A.some($=>$.route.id===z.route.id)&&z.route.id in g&&f[z.route.id]?.shouldRevalidate||I.hasClientLoader?E=!0:N.add(z.route.id))}),N.size===0)return[];let B=db(l,T,p.unstable_trailingSlashAwareDataRequests,"data");return E&&N.size>0&&B.searchParams.set("_routes",c.filter(z=>N.has(z.route.id)).map(z=>z.route.id).join(",")),[B.pathname+B.search]},[T,p.unstable_trailingSlashAwareDataRequests,g,d,h,A,c,l,f]),V=L.useMemo(()=>xb(y,h),[y,h]),R=vb(y);return L.createElement(L.Fragment,null,J.map(N=>L.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...u})),V.map(N=>L.createElement("link",{key:N,rel:"modulepreload",href:N,...u})),R.map(({key:N,link:E})=>L.createElement("link",{key:N,nonce:u.nonce,...E,crossOrigin:E.crossOrigin??u.crossOrigin})))}function Nb(...l){return c=>{l.forEach(u=>{typeof u=="function"?u(c):u!=null&&(u.current=c)})}}var Eb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Eb&&(window.__reactRouterVersion="7.13.1")}catch{}function Cb({basename:l,children:c,unstable_useTransitions:u,window:d}){let p=L.useRef();p.current==null&&(p.current=ag({window:d,v5Compat:!0}));let h=p.current,[f,T]=L.useState({action:h.action,location:h.location}),g=L.useCallback(x=>{u===!1?T(x):L.startTransition(()=>T(x))},[u]);return L.useLayoutEffect(()=>h.listen(g),[h,g]),L.createElement(eb,{basename:l,children:c,location:f.location,navigationType:f.action,navigator:h,unstable_useTransitions:u})}var sx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rc=L.forwardRef(function({onClick:c,discover:u="render",prefetch:d="none",relative:p,reloadDocument:h,replace:f,unstable_mask:T,state:g,target:x,to:A,preventScrollReset:y,viewTransition:J,unstable_defaultShouldRevalidate:V,...R},N){let{basename:E,navigator:B,unstable_useTransitions:z}=L.useContext(Ba),I=typeof A=="string"&&sx.test(A),$=Gp(A,E);A=$.to;let ae=zg(A,{relative:p}),pe=xt(),X=null;if(T){let Ce=Wo(T,[],pe.unstable_mask?pe.unstable_mask.pathname:"/",!0);E!=="/"&&(Ce.pathname=Ce.pathname==="/"?E:Va([E,Ce.pathname])),X=B.createHref(Ce)}let[xe,Ee,Ze]=yb(d,R),He=Rb(A,{replace:f,unstable_mask:T,state:g,target:x,preventScrollReset:y,relative:p,viewTransition:J,unstable_defaultShouldRevalidate:V,unstable_useTransitions:z});function qe(Ce){c&&c(Ce),Ce.defaultPrevented||He(Ce)}let ha=!($.isExternal||h),Re=L.createElement("a",{...R,...Ze,href:(ha?X:void 0)||$.absoluteURL||ae,onClick:ha?qe:c,ref:Nb(N,Ee),target:x,"data-discover":!I&&u==="render"?"true":void 0});return xe&&!I?L.createElement(L.Fragment,null,Re,L.createElement(jb,{page:ae})):Re});rc.displayName="Link";var nx=L.forwardRef(function({"aria-current":c="page",caseSensitive:u=!1,className:d="",end:p=!1,style:h,to:f,viewTransition:T,children:g,...x},A){let y=Vn(f,{relative:x.relative}),J=xt(),V=L.useContext(hi),{navigator:R,basename:N}=L.useContext(Ba),E=V!=null&&Lb(y)&&T===!0,B=R.encodeLocation?R.encodeLocation(y).pathname:y.pathname,z=J.pathname,I=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;u||(z=z.toLowerCase(),I=I?I.toLowerCase():null,B=B.toLowerCase()),I&&N&&(I=pt(I,N)||I);const $=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let ae=z===B||!p&&z.startsWith(B)&&z.charAt($)==="/",pe=I!=null&&(I===B||!p&&I.startsWith(B)&&I.charAt(B.length)==="/"),X={isActive:ae,isPending:pe,isTransitioning:E},xe=ae?c:void 0,Ee;typeof d=="function"?Ee=d(X):Ee=[d,ae?"active":null,pe?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let Ze=typeof h=="function"?h(X):h;return L.createElement(rc,{...x,"aria-current":xe,className:Ee,ref:A,style:Ze,to:f,viewTransition:T},typeof g=="function"?g(X):g)});nx.displayName="NavLink";var Tb=L.forwardRef(({discover:l="render",fetcherKey:c,navigate:u,reloadDocument:d,replace:p,state:h,method:f=ui,action:T,onSubmit:g,relative:x,preventScrollReset:A,viewTransition:y,unstable_defaultShouldRevalidate:J,...V},R)=>{let{unstable_useTransitions:N}=L.useContext(Ba),E=Db(),B=wb(T,{relative:x}),z=f.toLowerCase()==="get"?"get":"post",I=typeof T=="string"&&sx.test(T),$=ae=>{if(g&&g(ae),ae.defaultPrevented)return;ae.preventDefault();let pe=ae.nativeEvent.submitter,X=pe?.getAttribute("formmethod")||f,xe=()=>E(pe||ae.currentTarget,{fetcherKey:c,method:X,navigate:u,replace:p,state:h,relative:x,preventScrollReset:A,viewTransition:y,unstable_defaultShouldRevalidate:J});N&&u!==!1?L.startTransition(()=>xe()):xe()};return L.createElement("form",{ref:R,method:z,action:B,onSubmit:d?g:$,...V,"data-discover":!I&&l==="render"?"true":void 0})});Tb.displayName="Form";function Ab(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rx(l){let c=L.useContext(Fs);return _e(c,Ab(l)),c}function Rb(l,{target:c,replace:u,unstable_mask:d,state:p,preventScrollReset:h,relative:f,viewTransition:T,unstable_defaultShouldRevalidate:g,unstable_useTransitions:x}={}){let A=Ug(),y=xt(),J=Vn(l,{relative:f});return L.useCallback(V=>{if(ib(V,c)){V.preventDefault();let R=u!==void 0?u:In(y)===In(J),N=()=>A(l,{replace:R,unstable_mask:d,state:p,preventScrollReset:h,relative:f,viewTransition:T,unstable_defaultShouldRevalidate:g});x?L.startTransition(()=>N()):N()}},[y,A,J,u,d,p,c,l,h,f,T,g,x])}var Mb=0,Ob=()=>`__${String(++Mb)}__`;function Db(){let{router:l}=rx("useSubmit"),{basename:c}=L.useContext(Ba),u=Xg(),d=l.fetch,p=l.navigate;return L.useCallback(async(h,f={})=>{let{action:T,method:g,encType:x,formData:A,body:y}=cb(h,c);if(f.navigate===!1){let J=f.fetcherKey||Ob();await d(J,u,f.action||T,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:A,body:y,formMethod:f.method||g,formEncType:f.encType||x,flushSync:f.flushSync})}else await p(f.action||T,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:A,body:y,formMethod:f.method||g,formEncType:f.encType||x,replace:f.replace,state:f.state,fromRouteId:u,flushSync:f.flushSync,viewTransition:f.viewTransition})},[d,p,c,u])}function wb(l,{relative:c}={}){let{basename:u}=L.useContext(Ba),d=L.useContext(Qa);_e(d,"useFormAction must be used inside a RouteContext");let[p]=d.matches.slice(-1),h={...Vn(l||".",{relative:c})},f=xt();if(l==null){h.search=f.search;let T=new URLSearchParams(h.search),g=T.getAll("index");if(g.some(A=>A==="")){T.delete("index"),g.filter(y=>y).forEach(y=>T.append("index",y));let A=T.toString();h.search=A?`?${A}`:""}}return(!l||l===".")&&p.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(h.pathname=h.pathname==="/"?u:Va([u,h.pathname])),In(h)}function Lb(l,{relative:c}={}){let u=L.useContext(Qp);_e(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=rx("useViewTransitionState"),p=Vn(l,{relative:c});if(!u.isTransitioning)return!1;let h=pt(u.currentLocation.pathname,d)||u.currentLocation.pathname,f=pt(u.nextLocation.pathname,d)||u.nextLocation.pathname;return pi(p.pathname,f)!=null||pi(p.pathname,h)!=null}function ix(){const{pathname:l}=xt();return L.useEffect(()=>{window.scrollTo(0,0)},[l]),null}const lx=(...l)=>l.filter((c,u,d)=>!!c&&c.trim()!==""&&d.indexOf(c)===u).join(" ").trim();const qb=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const zb=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,u,d)=>d?d.toUpperCase():u.toLowerCase());const Ap=l=>{const c=zb(l);return c.charAt(0).toUpperCase()+c.slice(1)};var Ub={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Bb=l=>{for(const c in l)if(c.startsWith("aria-")||c==="role"||c==="title")return!0;return!1};const Pb=L.forwardRef(({color:l="currentColor",size:c=24,strokeWidth:u=2,absoluteStrokeWidth:d,className:p="",children:h,iconNode:f,...T},g)=>L.createElement("svg",{ref:g,...Ub,width:c,height:c,stroke:l,strokeWidth:d?Number(u)*24/Number(c):u,className:lx("lucide",p),...!h&&!Bb(T)&&{"aria-hidden":"true"},...T},[...f.map(([x,A])=>L.createElement(x,A)),...Array.isArray(h)?h:[h]]));const ne=(l,c)=>{const u=L.forwardRef(({className:d,...p},h)=>L.createElement(Pb,{ref:h,iconNode:c,className:lx(`lucide-${qb(Ap(l))}`,`lucide-${l}`,d),...p}));return u.displayName=Ap(l),u};const kb=[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]],Zo=ne("arrow-right-left",kb);const _b=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Hb=ne("arrow-right",_b);const Ib=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],Rp=ne("binary",Ib);const Jb=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Fb=ne("book-open",Jb);const Vb=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Gb=ne("box",Vb);const Yb=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],Qb=ne("boxes",Yb);const Xb=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],ic=ne("brain",Xb);const Zb=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Kb=ne("calendar",Zb);const $b=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Wb=ne("check",$b);const ey=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Mp=ne("chevron-down",ey);const ay=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Op=ne("chevron-up",ay);const ty=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Dp=ne("circle-alert",ty);const sy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ny=ne("circle-check",sy);const ry=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],ox=ne("clock",ry);const iy=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],lc=ne("code-xml",iy);const ly=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],cx=ne("coffee",ly);const oy=[["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}]],cy=ne("cog",oy);const dy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],uy=ne("copy",dy);const my=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],wp=ne("cpu",my);const py=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],xy=ne("database",py);const hy=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],dx=ne("file-code",hy);const fy=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Lp=ne("file-text",fy);const gy=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],by=ne("folder-open",gy);const yy=[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]],jy=ne("git-branch",yy);const vy=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],Ko=ne("git-commit-horizontal",vy);const Sy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Ny=ne("globe",Sy);const Ey=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Cy=ne("hash",Ey);const Ty=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Ay=ne("house",Ty);const Ry=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],My=ne("info",Ry);const Oy=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Dy=ne("layers",Oy);const wy=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],ux=ne("leaf",wy);const Ly=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],mx=ne("lightbulb",Ly);const qy=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],zy=ne("list",qy);const Uy=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],By=ne("lock",Uy);const Py=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],ky=ne("menu",Py);const _y=[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],Hy=ne("monitor-check",_y);const Iy=[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m16 17 2 2 4-4",key:"uh5qu3"}],["path",{d:"M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",key:"kpkbpo"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]],Jy=ne("package-check",Iy);const Fy=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],Vy=ne("puzzle",Fy);const Gy=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],Yy=ne("repeat",Gy);const Qy=[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]],Xy=ne("rocket",Qy);const Zy=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Ky=ne("server",Zy);const $y=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],qp=ne("settings",$y);const Wy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Yo=ne("shield",Wy);const ej=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],aj=ne("target",ej);const tj=[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",key:"125lnx"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]],sj=ne("test-tube",tj);const nj=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],rj=ne("toggle-left",nj);const ij=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],lj=ne("triangle-alert",ij);const oj=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],cj=ne("trophy",oj);const dj=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],uj=ne("type",dj);const mj=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],pj=ne("workflow",mj);const xj=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],hj=ne("wrench",xj);const fj=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],gj=ne("x",fj);const bj=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],px=ne("zap",bj),yj=[{title:"Inicio",items:[{path:"/",label:"Bienvenida",icon:Ay}]},{title:"Fundamentos de Java",items:[{path:"/introduccion",label:"Introducción a Java",icon:cx},{path:"/sintaxis",label:"Sintaxis Básica",icon:lc},{path:"/tipos-datos",label:"Tipos de Datos",icon:Rp},{path:"/variables",label:"Variables y Constantes",icon:Gb},{path:"/operadores",label:"Operadores",icon:Cy},{path:"/strings",label:"Strings",icon:uj}]},{title:"Control de Flujo",items:[{path:"/condicionales",label:"Condicionales",icon:rj},{path:"/bucles",label:"Bucles",icon:Yy},{path:"/arrays",label:"Arrays",icon:zy}]},{title:"POO - Programación Orientada a Objetos",items:[{path:"/metodos",label:"Métodos",icon:px},{path:"/clases-objetos",label:"Clases y Objetos",icon:Qb},{path:"/encapsulamiento",label:"Encapsulamiento",icon:Yo},{path:"/herencia",label:"Herencia",icon:jy},{path:"/polimorfismo",label:"Polimorfismo",icon:Zo},{path:"/interfaces",label:"Interfaces",icon:Dy},{path:"/clases-abstractas",label:"Clases Abstractas",icon:Lp}]},{title:"Java Intermedio",items:[{path:"/colecciones",label:"Colecciones",icon:xy},{path:"/excepciones",label:"Excepciones",icon:Dp},{path:"/generics",label:"Generics",icon:Vy},{path:"/enums",label:"Enums",icon:qp},{path:"/comparador",label:"Comparable y Comparator",icon:Zo}]},{title:"Java Avanzado",items:[{path:"/lambdas",label:"Lambdas",icon:pj},{path:"/streams",label:"Streams API",icon:wp},{path:"/optional",label:"Optional",icon:ic},{path:"/concurrencia",label:"Concurrencia y Threads",icon:Xy},{path:"/virtual-threads",label:"Virtual Threads (Java 21)",icon:wp},{path:"/io-archivos",label:"I/O y Archivos",icon:by},{path:"/fechas-api",label:"API de Fechas",icon:ox}]},{title:"Java Moderno (17+)",items:[{path:"/records",label:"Records",icon:dx},{path:"/sealed-classes",label:"Sealed Classes",icon:By},{path:"/pattern-matching",label:"Pattern Matching",icon:Hy},{path:"/patrones-diseno",label:"Patrones de Diseño",icon:hj},{path:"/text-blocks",label:"Text Blocks y var",icon:Lp}]},{title:"Spring Boot",items:[{path:"/spring-intro",label:"Introducción a Spring",icon:ux},{path:"/spring-setup",label:"Setup y Estructura",icon:Jy},{path:"/spring-anotaciones",label:"Anotaciones",icon:Fb},{path:"/spring-controllers",label:"Controllers REST",icon:Ny},{path:"/spring-services",label:"Servicios",icon:cy},{path:"/spring-repositories",label:"Repositories y JPA",icon:Ky},{path:"/spring-security",label:"Spring Security",icon:Yo},{path:"/spring-testing",label:"Testing",icon:sj},{path:"/spring-excepciones",label:"Manejo de Excepciones",icon:Dp},{path:"/spring-validacion",label:"Validación (@Valid)",icon:Yo},{path:"/spring-dtos",label:"DTOs y MapStruct",icon:Rp},{path:"/spring-perfiles",label:"Perfiles y Config",icon:qp}]}];function jj(){const[l,c]=L.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>c(!l),className:"fixed top-4 left-4 z-50 lg:hidden bg-surface-light border border-border rounded-lg p-2 text-text hover:bg-surface-lighter transition-colors cursor-pointer",children:l?e.jsx(gj,{size:20}):e.jsx(ky,{size:20})}),l&&e.jsx("div",{className:"fixed inset-0 bg-black/50 z-30 lg:hidden",onClick:()=>c(!1)}),e.jsxs("aside",{className:`fixed top-0 left-0 h-full w-72 bg-surface-light border-r border-border z-40 overflow-y-auto transition-transform duration-300 ${l?"translate-x-0":"-translate-x-full"} lg:translate-x-0 lg:static lg:z-0`,children:[e.jsxs("div",{className:"p-6 border-b border-border",children:[e.jsxs("h1",{className:"text-lg font-bold text-java flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"☕"})," Java Mastery"]}),e.jsx("p",{className:"text-xs text-text-muted mt-1",children:"Guía Completa 2026"})]}),e.jsx("nav",{className:"p-4",children:yj.map(u=>e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 px-3",children:u.title}),u.items.map(d=>{const p=d.icon;return e.jsxs(nx,{to:d.path,onClick:()=>c(!1),className:({isActive:h})=>`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 mb-0.5 ${h?"bg-primary/15 text-primary font-medium":"text-text-muted hover:bg-surface-lighter/50 hover:text-text"}`,end:d.path==="/",children:[e.jsx(p,{size:16}),d.label]},d.path)})]},u.title))})]})]})}function vj(){return e.jsxs("div",{className:"flex min-h-screen",children:[e.jsx(ix,{}),e.jsx(jj,{}),e.jsx("main",{className:"flex-1 lg:ml-0 min-h-screen",children:e.jsx("div",{className:"max-w-4xl mx-auto px-6 py-12 lg:px-12",children:e.jsx(Wg,{})})})]})}const zp=[{phase:"Fase 1 — Fundamentos",color:"text-primary",bg:"bg-primary/10",border:"border-primary/25",days:[{day:1,title:"Introducción a Java",link:"/introduccion",desc:"Qué es Java, JDK, JVM, tu primer programa"},{day:2,title:"Sintaxis Básica",link:"/sintaxis",desc:"Estructura de un programa, main, paquetes, convenciones"},{day:3,title:"Tipos de Datos",link:"/tipos-datos",desc:"Primitivos vs objetos, casting, wrappers"},{day:4,title:"Variables y Constantes",link:"/variables",desc:"Declaración, scope, final, valores por defecto"},{day:5,title:"Operadores",link:"/operadores",desc:"Aritméticos, lógicos, comparación, ternario"},{day:6,title:"Strings",link:"/strings",desc:"Inmutabilidad, métodos, StringBuilder, formato"}]},{phase:"Fase 2 — Control de Flujo",color:"text-success",bg:"bg-success/10",border:"border-success/25",days:[{day:7,title:"Condicionales",link:"/condicionales",desc:"if/else, switch, pattern matching"},{day:8,title:"Bucles",link:"/bucles",desc:"for, while, do-while, for-each, break/continue"},{day:9,title:"Arrays",link:"/arrays",desc:"Declaración, iteración, arrays multidimensionales"}]},{phase:"Fase 3 — POO",color:"text-accent",bg:"bg-accent/10",border:"border-accent/25",days:[{day:10,title:"Métodos",link:"/metodos",desc:"Definir, sobrecargar, varargs, paso por valor"},{day:11,title:"Clases y Objetos",link:"/clases-objetos",desc:"Constructores, this, static, equals"},{day:12,title:"Encapsulamiento",link:"/encapsulamiento",desc:"Getters/setters, modificadores de acceso"},{day:13,title:"Herencia",link:"/herencia",desc:"extends, super, sobreescritura de métodos"},{day:14,title:"Polimorfismo",link:"/polimorfismo",desc:"Upcasting, downcasting, instanceof"},{day:15,title:"Interfaces",link:"/interfaces",desc:"Contratos, default methods, implementación múltiple"},{day:16,title:"Clases Abstractas",link:"/clases-abstractas",desc:"Abstract vs interface, cuándo usar cada uno"}]},{phase:"Fase 4 — Intermedio",color:"text-warning",bg:"bg-warning/10",border:"border-warning/25",days:[{day:17,title:"Colecciones",link:"/colecciones",desc:"List, Set, Map, Queue, iteradores"},{day:18,title:"Excepciones",link:"/excepciones",desc:"try/catch, checked vs unchecked, custom exceptions"},{day:19,title:"Generics",link:"/generics",desc:"Tipos parametrizados, wildcards, bounded types"},{day:20,title:"Enums",link:"/enums",desc:"Constantes tipadas, métodos en enums"},{day:21,title:"Comparable y Comparator",link:"/comparador",desc:"Ordenamiento personalizado, cadenas de comparación"}]},{phase:"Fase 5 — Avanzado",color:"text-[#c084fc]",bg:"bg-[#c084fc]/10",border:"border-[#c084fc]/25",days:[{day:22,title:"Lambdas",link:"/lambdas",desc:"Funciones anónimas, interfaces funcionales"},{day:23,title:"Streams API",link:"/streams",desc:"map, filter, reduce, collect, operaciones en cadena"},{day:24,title:"Optional",link:"/optional",desc:"Manejo seguro de null, encadenamiento"},{day:25,title:"Concurrencia",link:"/concurrencia",desc:"Threads, ExecutorService, CompletableFuture"},{day:26,title:"Virtual Threads",link:"/virtual-threads",desc:"Java 21: hilos ligeros de alto rendimiento"},{day:27,title:"I/O y Archivos",link:"/io-archivos",desc:"Files, Path, streams de archivos, serialización"},{day:28,title:"API de Fechas",link:"/fechas-api",desc:"LocalDate, LocalDateTime, Duration, formateo"}]},{phase:"Fase 6 — Java Moderno",color:"text-[#f472b6]",bg:"bg-[#f472b6]/10",border:"border-[#f472b6]/25",days:[{day:29,title:"Records",link:"/records",desc:"DTOs inmutables en una línea"},{day:30,title:"Sealed Classes",link:"/sealed-classes",desc:"Jerarquías controladas de herencia"},{day:31,title:"Pattern Matching",link:"/pattern-matching",desc:"instanceof mejorado, switch expressions"},{day:32,title:"Patrones de Diseño",link:"/patrones-diseno",desc:"Builder, Factory, Strategy, Observer"},{day:33,title:"Text Blocks y var",link:"/text-blocks",desc:"Strings multilínea, inferencia de tipos"}]},{phase:"Fase 7 — Spring Boot",color:"text-spring",bg:"bg-spring/10",border:"border-spring/25",days:[{day:34,title:"Intro a Spring",link:"/spring-intro",desc:"IoC, DI, por qué Spring"},{day:35,title:"Setup y Estructura",link:"/spring-setup",desc:"Spring Initializr, pom.xml, estructura de proyecto"},{day:36,title:"Anotaciones",link:"/spring-anotaciones",desc:"@Component, @Service, @Repository, @Autowired"},{day:37,title:"Controllers REST",link:"/spring-controllers",desc:"@RestController, endpoints, ResponseEntity"},{day:38,title:"Servicios",link:"/spring-services",desc:"Capa de negocio, @Transactional"},{day:39,title:"Repositories y JPA",link:"/spring-repositories",desc:"Spring Data JPA, queries, relaciones"},{day:40,title:"Spring Security",link:"/spring-security",desc:"Autenticación, JWT, autorización"},{day:41,title:"Manejo de Excepciones",link:"/spring-excepciones",desc:"@ControllerAdvice, errores globales"},{day:42,title:"Validación",link:"/spring-validacion",desc:"@Valid, Jakarta Validation, custom validators"},{day:43,title:"DTOs y MapStruct",link:"/spring-dtos",desc:"Mapeo de entidades, separación de capas"},{day:44,title:"Perfiles y Config",link:"/spring-perfiles",desc:"application.yml, @Profile, @Value"},{day:45,title:"Testing",link:"/spring-testing",desc:"JUnit 5, Mockito, @WebMvcTest, MockMvc"}]}];function Sj(){const l=zp.reduce((c,u)=>c+u.days.length,0);return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-10",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx("span",{className:"text-5xl",children:"☕"}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold text-java",children:"Java Mastery"}),e.jsxs("p",{className:"text-text-muted text-lg mt-1",children:[l," días de Java — De cero a Spring Boot"]})]})]}),e.jsxs("p",{className:"text-text-muted leading-relaxed mt-4",children:["Este no es un curso que solo te dice ",e.jsx("strong",{className:"text-text",children:"qué"})," aprender. Aquí vas a ",e.jsx("strong",{className:"text-text",children:"pensar como desarrollador Java"}),": cada día tiene ejercicios que escribes tú mismo, explicaciones de ",e.jsx("em",{children:"por qué"})," las cosas funcionan así, y un commit que puedes subir a tu GitHub para documentar tu progreso."]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-4 mb-10",children:[e.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-5 text-center",children:[e.jsx(lc,{size:24,className:"text-primary mx-auto mb-2"}),e.jsx("h3",{className:"font-semibold text-text text-sm",children:"Ejercicios reales"}),e.jsx("p",{className:"text-text-muted text-xs mt-1",children:"Código que escribes, no que lees"})]}),e.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-5 text-center",children:[e.jsx(ic,{size:24,className:"text-accent mx-auto mb-2"}),e.jsx("h3",{className:"font-semibold text-text text-sm",children:"Cómo pensarlo"}),e.jsx("p",{className:"text-text-muted text-xs mt-1",children:"El razonamiento detrás de cada decisión"})]}),e.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-5 text-center",children:[e.jsx(Ko,{size:24,className:"text-success mx-auto mb-2"}),e.jsx("h3",{className:"font-semibold text-text text-sm",children:"Un commit por día"}),e.jsx("p",{className:"text-text-muted text-xs mt-1",children:"Progreso real en tu GitHub"})]}),e.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-5 text-center",children:[e.jsx(cj,{size:24,className:"text-warning mx-auto mb-2"}),e.jsx("h3",{className:"font-semibold text-text text-sm",children:"De cero a Spring"}),e.jsxs("p",{className:"text-text-muted text-xs mt-1",children:[l," días, 7 fases, dominio completo"]})]})]}),e.jsxs("div",{className:"mb-10",children:[e.jsxs("h2",{className:"text-xl font-bold text-text mb-2 flex items-center gap-2",children:[e.jsx(aj,{size:20,className:"text-primary"}),"Tu ruta día a día"]}),e.jsx("p",{className:"text-text-muted text-sm mb-6",children:"Cada día tiene explicación, ejercicios y un commit para tu repo."}),e.jsx("div",{className:"space-y-6",children:zp.map(c=>e.jsxs("div",{className:`rounded-xl border ${c.border} overflow-hidden`,children:[e.jsxs("div",{className:`${c.bg} px-5 py-3 flex items-center gap-2`,children:[e.jsx(cx,{size:16,className:c.color}),e.jsx("span",{className:`font-bold text-sm ${c.color}`,children:c.phase}),e.jsxs("span",{className:"text-text-muted text-xs ml-auto",children:[c.days.length," días"]})]}),e.jsx("div",{className:"divide-y divide-border/30",children:c.days.map(u=>e.jsxs(rc,{to:u.link,className:"flex items-center gap-3 px-5 py-3 hover:bg-surface-lighter/20 transition-colors group",children:[e.jsx("span",{className:"flex-shrink-0 w-8 h-8 rounded-lg bg-surface-lighter/50 text-text-muted font-bold text-xs flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors",children:u.day}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("h4",{className:"font-medium text-sm text-text group-hover:text-primary transition-colors truncate",children:u.title}),e.jsx("p",{className:"text-text-muted text-xs truncate",children:u.desc})]}),e.jsx(px,{size:14,className:"text-text-muted/30 ml-auto flex-shrink-0 group-hover:text-primary transition-colors"})]},u.day))})]},c.phase))})]}),e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-8",children:[e.jsxs("h3",{className:"text-success font-semibold mb-3 flex items-center gap-2",children:[e.jsx(Ko,{size:18})," Cómo usar esta guía"]}),e.jsxs("div",{className:"space-y-2 text-sm text-text-muted",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"1."})," Crea un repo en GitHub: ",e.jsx("code",{className:"text-success font-mono text-xs",children:"java-mastery-45-dias"})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"2."})," Cada día, lee la lección, resuelve los ejercicios y escribe el código tú mismo"]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"3."})," Haz commit con el mensaje sugerido al final de cada lección"]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"4."})," Al terminar tendrás ",l," commits que demuestran tu dominio de Java"]})]})]}),e.jsxs("div",{className:"bg-primary/10 border border-primary/30 rounded-xl p-6",children:[e.jsx("h3",{className:"text-primary font-semibold mb-2",children:"💡 Para desarrolladores Angular/TypeScript"}),e.jsxs("p",{className:"text-text-muted text-sm leading-relaxed",children:["Cada lección incluye comparaciones con ",e.jsx("strong",{className:"text-angular",children:"Angular/TypeScript"})," para que conectes lo que ya sabes con Java. TypeScript y Java comparten tipado estático, clases, interfaces y generics — tu transición será más natural de lo que piensas."]})]})]})}function xx(l){var c,u,d="";if(typeof l=="string"||typeof l=="number")d+=l;else if(typeof l=="object")if(Array.isArray(l)){var p=l.length;for(c=0;c<p;c++)l[c]&&(u=xx(l[c]))&&(d&&(d+=" "),d+=u)}else for(u in l)l[u]&&(d&&(d+=" "),d+=u);return d}function hx(){for(var l,c,u=0,d="",p=arguments.length;u<p;u++)(l=arguments[u])&&(c=xx(l))&&(d&&(d+=" "),d+=c);return d}var Nj=Object.create,gi=Object.defineProperty,Ej=Object.defineProperties,Cj=Object.getOwnPropertyDescriptor,Tj=Object.getOwnPropertyDescriptors,fx=Object.getOwnPropertyNames,xi=Object.getOwnPropertySymbols,Aj=Object.getPrototypeOf,oc=Object.prototype.hasOwnProperty,gx=Object.prototype.propertyIsEnumerable,Up=(l,c,u)=>c in l?gi(l,c,{enumerable:!0,configurable:!0,writable:!0,value:u}):l[c]=u,Ga=(l,c)=>{for(var u in c||(c={}))oc.call(c,u)&&Up(l,u,c[u]);if(xi)for(var u of xi(c))gx.call(c,u)&&Up(l,u,c[u]);return l},bi=(l,c)=>Ej(l,Tj(c)),bx=(l,c)=>{var u={};for(var d in l)oc.call(l,d)&&c.indexOf(d)<0&&(u[d]=l[d]);if(l!=null&&xi)for(var d of xi(l))c.indexOf(d)<0&&gx.call(l,d)&&(u[d]=l[d]);return u},Rj=(l,c)=>function(){return c||(0,l[fx(l)[0]])((c={exports:{}}).exports,c),c.exports},Mj=(l,c)=>{for(var u in c)gi(l,u,{get:c[u],enumerable:!0})},Oj=(l,c,u,d)=>{if(c&&typeof c=="object"||typeof c=="function")for(let p of fx(c))!oc.call(l,p)&&p!==u&&gi(l,p,{get:()=>c[p],enumerable:!(d=Cj(c,p))||d.enumerable});return l},Dj=(l,c,u)=>(u=l!=null?Nj(Aj(l)):{},Oj(!l||!l.__esModule?gi(u,"default",{value:l,enumerable:!0}):u,l)),wj=Rj({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(l,c){var u=(function(){var d=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,p=0,h={},f={util:{encode:function R(N){return N instanceof T?new T(N.type,R(N.content),N.alias):Array.isArray(N)?N.map(R):N.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(R){return Object.prototype.toString.call(R).slice(8,-1)},objId:function(R){return R.__id||Object.defineProperty(R,"__id",{value:++p}),R.__id},clone:function R(N,E){E=E||{};var B,z;switch(f.util.type(N)){case"Object":if(z=f.util.objId(N),E[z])return E[z];B={},E[z]=B;for(var I in N)N.hasOwnProperty(I)&&(B[I]=R(N[I],E));return B;case"Array":return z=f.util.objId(N),E[z]?E[z]:(B=[],E[z]=B,N.forEach(function($,ae){B[ae]=R($,E)}),B);default:return N}},getLanguage:function(R){for(;R;){var N=d.exec(R.className);if(N)return N[1].toLowerCase();R=R.parentElement}return"none"},setLanguage:function(R,N){R.className=R.className.replace(RegExp(d,"gi"),""),R.classList.add("language-"+N)},isActive:function(R,N,E){for(var B="no-"+N;R;){var z=R.classList;if(z.contains(N))return!0;if(z.contains(B))return!1;R=R.parentElement}return!!E}},languages:{plain:h,plaintext:h,text:h,txt:h,extend:function(R,N){var E=f.util.clone(f.languages[R]);for(var B in N)E[B]=N[B];return E},insertBefore:function(R,N,E,B){B=B||f.languages;var z=B[R],I={};for(var $ in z)if(z.hasOwnProperty($)){if($==N)for(var ae in E)E.hasOwnProperty(ae)&&(I[ae]=E[ae]);E.hasOwnProperty($)||(I[$]=z[$])}var pe=B[R];return B[R]=I,f.languages.DFS(f.languages,function(X,xe){xe===pe&&X!=R&&(this[X]=I)}),I},DFS:function R(N,E,B,z){z=z||{};var I=f.util.objId;for(var $ in N)if(N.hasOwnProperty($)){E.call(N,$,N[$],B||$);var ae=N[$],pe=f.util.type(ae);pe==="Object"&&!z[I(ae)]?(z[I(ae)]=!0,R(ae,E,null,z)):pe==="Array"&&!z[I(ae)]&&(z[I(ae)]=!0,R(ae,E,$,z))}}},plugins:{},highlight:function(R,N,E){var B={code:R,grammar:N,language:E};if(f.hooks.run("before-tokenize",B),!B.grammar)throw new Error('The language "'+B.language+'" has no grammar.');return B.tokens=f.tokenize(B.code,B.grammar),f.hooks.run("after-tokenize",B),T.stringify(f.util.encode(B.tokens),B.language)},tokenize:function(R,N){var E=N.rest;if(E){for(var B in E)N[B]=E[B];delete N.rest}var z=new A;return y(z,z.head,R),x(R,z,N,z.head,0),V(z)},hooks:{all:{},add:function(R,N){var E=f.hooks.all;E[R]=E[R]||[],E[R].push(N)},run:function(R,N){var E=f.hooks.all[R];if(!(!E||!E.length))for(var B=0,z;z=E[B++];)z(N)}},Token:T};function T(R,N,E,B){this.type=R,this.content=N,this.alias=E,this.length=(B||"").length|0}T.stringify=function R(N,E){if(typeof N=="string")return N;if(Array.isArray(N)){var B="";return N.forEach(function(pe){B+=R(pe,E)}),B}var z={type:N.type,content:R(N.content,E),tag:"span",classes:["token",N.type],attributes:{},language:E},I=N.alias;I&&(Array.isArray(I)?Array.prototype.push.apply(z.classes,I):z.classes.push(I)),f.hooks.run("wrap",z);var $="";for(var ae in z.attributes)$+=" "+ae+'="'+(z.attributes[ae]||"").replace(/"/g,"&quot;")+'"';return"<"+z.tag+' class="'+z.classes.join(" ")+'"'+$+">"+z.content+"</"+z.tag+">"};function g(R,N,E,B){R.lastIndex=N;var z=R.exec(E);if(z&&B&&z[1]){var I=z[1].length;z.index+=I,z[0]=z[0].slice(I)}return z}function x(R,N,E,B,z,I){for(var $ in E)if(!(!E.hasOwnProperty($)||!E[$])){var ae=E[$];ae=Array.isArray(ae)?ae:[ae];for(var pe=0;pe<ae.length;++pe){if(I&&I.cause==$+","+pe)return;var X=ae[pe],xe=X.inside,Ee=!!X.lookbehind,Ze=!!X.greedy,He=X.alias;if(Ze&&!X.pattern.global){var qe=X.pattern.toString().match(/[imsuy]*$/)[0];X.pattern=RegExp(X.pattern.source,qe+"g")}for(var ha=X.pattern||X,Re=B.next,Ce=z;Re!==N.tail&&!(I&&Ce>=I.reach);Ce+=Re.value.length,Re=Re.next){var q=Re.value;if(N.length>R.length)return;if(!(q instanceof T)){var G=1,ee;if(Ze){if(ee=g(ha,Ce,R,Ee),!ee||ee.index>=R.length)break;var _=ee.index,Ae=ee.index+ee[0].length,ge=Ce;for(ge+=Re.value.length;_>=ge;)Re=Re.next,ge+=Re.value.length;if(ge-=Re.value.length,Ce=ge,Re.value instanceof T)continue;for(var v=Re;v!==N.tail&&(ge<Ae||typeof v.value=="string");v=v.next)G++,ge+=v.value.length;G--,q=R.slice(Ce,ge),ee.index-=Ce}else if(ee=g(ha,0,q,Ee),!ee)continue;var _=ee.index,Y=ee[0],Q=q.slice(0,_),le=q.slice(_+Y.length),ue=Ce+q.length;I&&ue>I.reach&&(I.reach=ue);var je=Re.prev;Q&&(je=y(N,je,Q),Ce+=Q.length),J(N,je,G);var ea=new T($,xe?f.tokenize(Y,xe):Y,He,Y);if(Re=y(N,je,ea),le&&y(N,Re,le),G>1){var Ue={cause:$+","+pe,reach:ue};x(R,N,E,Re.prev,Ce,Ue),I&&Ue.reach>I.reach&&(I.reach=Ue.reach)}}}}}}function A(){var R={value:null,prev:null,next:null},N={value:null,prev:R,next:null};R.next=N,this.head=R,this.tail=N,this.length=0}function y(R,N,E){var B=N.next,z={value:E,prev:N,next:B};return N.next=z,B.prev=z,R.length++,z}function J(R,N,E){for(var B=N.next,z=0;z<E&&B!==R.tail;z++)B=B.next;N.next=B,B.prev=N,R.length-=z}function V(R){for(var N=[],E=R.head.next;E!==R.tail;)N.push(E.value),E=E.next;return N}return f})();c.exports=u,u.default=u}}),k=Dj(wj());k.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},k.languages.markup.tag.inside["attr-value"].inside.entity=k.languages.markup.entity,k.languages.markup.doctype.inside["internal-subset"].inside=k.languages.markup,k.hooks.add("wrap",function(l){l.type==="entity"&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),Object.defineProperty(k.languages.markup.tag,"addInlined",{value:function(l,d){var u={},u=(u["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:k.languages[d]},u.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:u}}),d=(u["language-"+d]={pattern:/[\s\S]+/,inside:k.languages[d]},{});d[l]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:u},k.languages.insertBefore("markup","cdata",d)}}),Object.defineProperty(k.languages.markup.tag,"addAttribute",{value:function(l,c){k.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+l+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:k.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),k.languages.html=k.languages.markup,k.languages.mathml=k.languages.markup,k.languages.svg=k.languages.markup,k.languages.xml=k.languages.extend("markup",{}),k.languages.ssml=k.languages.xml,k.languages.atom=k.languages.xml,k.languages.rss=k.languages.xml,(function(l){var c={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},u=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,d="(?:[^\\\\-]|"+u.source+")",d=RegExp(d+"-"+d),p={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};l.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:d,inside:{escape:u,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":c,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:u}},"special-escape":c,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":p}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:u,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":p}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}})(k),k.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},k.languages.javascript=k.languages.extend("clike",{"class-name":[k.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),k.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,k.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:k.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:k.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:k.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:k.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:k.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),k.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:k.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),k.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),k.languages.markup&&(k.languages.markup.tag.addInlined("script","javascript"),k.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),k.languages.js=k.languages.javascript,k.languages.actionscript=k.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),k.languages.actionscript["class-name"].alias="function",delete k.languages.actionscript.parameter,delete k.languages.actionscript["literal-property"],k.languages.markup&&k.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:k.languages.markup}}),(function(l){var c=/#(?!\{).+/,u={pattern:/#\{[^}]+\}/,alias:"variable"};l.languages.coffeescript=l.languages.extend("javascript",{comment:c,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:u}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),l.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:c,interpolation:u}}}),l.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:l.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:u}}]}),l.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete l.languages.coffeescript["template-string"],l.languages.coffee=l.languages.coffeescript})(k),(function(l){var c=l.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(c,"addSupport",{value:function(u,d){(u=typeof u=="string"?[u]:u).forEach(function(p){var h=function(y){y.inside||(y.inside={}),y.inside.rest=d},f="doc-comment";if(T=l.languages[p]){var T,g=T[f];if((g=g||(T=l.languages.insertBefore(p,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[f])instanceof RegExp&&(g=T[f]={pattern:g}),Array.isArray(g))for(var x=0,A=g.length;x<A;x++)g[x]instanceof RegExp&&(g[x]={pattern:g[x]}),h(g[x]);else h(g)}})}}),c.addSupport(["java","javascript","php"],c)})(k),(function(l){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,c=(l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+c.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},l.languages.css.atrule.inside.rest=l.languages.css,l.languages.markup);c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))})(k),(function(l){var c=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,c=(l.languages.css.selector={pattern:l.languages.css.selector.pattern,lookbehind:!0,inside:c={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+c.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[c,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},l.languages.css.atrule.inside["selector-function-argument"].inside=c,l.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),u={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};l.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:c,number:u,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:c,number:u})})(k),(function(l){var c=/[*&][^\s[\]{},]+/,u=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,d="(?:"+u.source+"(?:[ 	]+"+c.source+")?|"+c.source+"(?:[ 	]+"+u.source+")?)",p=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),h=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function f(T,g){g=(g||"").replace(/m/g,"")+"m";var x=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return d}).replace(/<<value>>/g,function(){return T});return RegExp(x,g)}l.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return d})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return d}).replace(/<<key>>/g,function(){return"(?:"+p+"|"+h+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:f(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:f(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:f(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:f(h),lookbehind:!0,greedy:!0},number:{pattern:f(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:u,important:c,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},l.languages.yml=l.languages.yaml})(k),(function(l){var c=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function u(x){return x=x.replace(/<inner>/g,function(){return c}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+x+")")}var d=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,p=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return d}),h=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,f=(l.languages.markdown=l.languages.extend("markup",{}),l.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:l.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+p+h+"(?:"+p+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+p+h+")(?:"+p+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(d),inside:l.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+p+")"+h+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+p+"$"),inside:{"table-header":{pattern:RegExp(d),alias:"important",inside:l.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:u(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:u(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:u(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:u(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(x){["url","bold","italic","strike","code-snippet"].forEach(function(A){x!==A&&(l.languages.markdown[x].inside.content.inside[A]=l.languages.markdown[A])})}),l.hooks.add("after-tokenize",function(x){x.language!=="markdown"&&x.language!=="md"||(function A(y){if(y&&typeof y!="string")for(var J=0,V=y.length;J<V;J++){var R,N=y[J];N.type!=="code"?A(N.content):(R=N.content[1],N=N.content[3],R&&N&&R.type==="code-language"&&N.type==="code-block"&&typeof R.content=="string"&&(R=R.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),R="language-"+(R=(/[a-z][\w-]*/i.exec(R)||[""])[0].toLowerCase()),N.alias?typeof N.alias=="string"?N.alias=[N.alias,R]:N.alias.push(R):N.alias=[R]))}})(x.tokens)}),l.hooks.add("wrap",function(x){if(x.type==="code-block"){for(var A="",y=0,J=x.classes.length;y<J;y++){var V=x.classes[y],V=/language-(.+)/.exec(V);if(V){A=V[1];break}}var R,N=l.languages[A];N?x.content=l.highlight((function(E){return E=E.replace(f,""),E=E.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(B,z){var I;return(z=z.toLowerCase())[0]==="#"?(I=z[1]==="x"?parseInt(z.slice(2),16):Number(z.slice(1)),g(I)):T[z]||B})})(x.content),N,A):A&&A!=="none"&&l.plugins.autoloader&&(R="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random()),x.attributes.id=R,l.plugins.autoloader.loadLanguages(A,function(){var E=document.getElementById(R);E&&(E.innerHTML=l.highlight(E.textContent,l.languages[A],A))}))}}),RegExp(l.languages.markup.tag.pattern.source,"gi")),T={amp:"&",lt:"<",gt:">",quot:'"'},g=String.fromCodePoint||String.fromCharCode;l.languages.md=l.languages.markdown})(k),k.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:k.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},k.hooks.add("after-tokenize",function(l){if(l.language==="graphql")for(var c=l.tokens.filter(function(R){return typeof R!="string"&&R.type!=="comment"&&R.type!=="scalar"}),u=0;u<c.length;){var d=c[u++];if(d.type==="keyword"&&d.content==="mutation"){var p=[];if(y(["definition-mutation","punctuation"])&&A(1).content==="("){u+=2;var h=J(/^\($/,/^\)$/);if(h===-1)continue;for(;u<h;u++){var f=A(0);f.type==="variable"&&(V(f,"variable-input"),p.push(f.content))}u=h+1}if(y(["punctuation","property-query"])&&A(0).content==="{"&&(u++,V(A(0),"property-mutation"),0<p.length)){var T=J(/^\{$/,/^\}$/);if(T!==-1)for(var g=u;g<T;g++){var x=c[g];x.type==="variable"&&0<=p.indexOf(x.content)&&V(x,"variable-input")}}}}function A(R){return c[u+R]}function y(R,N){N=N||0;for(var E=0;E<R.length;E++){var B=A(E+N);if(!B||B.type!==R[E])return}return 1}function J(R,N){for(var E=1,B=u;B<c.length;B++){var z=c[B],I=z.content;if(z.type==="punctuation"&&typeof I=="string"){if(R.test(I))E++;else if(N.test(I)&&--E===0)return B}}return-1}function V(R,N){var E=R.alias;E?Array.isArray(E)||(R.alias=E=[E]):R.alias=E=[],E.push(N)}}),k.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},(function(l){var c=l.languages.javascript["template-string"],u=c.pattern.source,d=c.inside.interpolation,p=d.inside["interpolation-punctuation"],h=d.pattern.source;function f(y,J){if(l.languages[y])return{pattern:RegExp("((?:"+J+")\\s*)"+u),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:y}}}}function T(y,J,V){return y={code:y,grammar:J,language:V},l.hooks.run("before-tokenize",y),y.tokens=l.tokenize(y.code,y.grammar),l.hooks.run("after-tokenize",y),y.tokens}function g(y,J,V){var E=l.tokenize(y,{interpolation:{pattern:RegExp(h),lookbehind:!0}}),R=0,N={},E=T(E.map(function(z){if(typeof z=="string")return z;for(var I,$,z=z.content;y.indexOf(($=R++,I="___"+V.toUpperCase()+"_"+$+"___"))!==-1;);return N[I]=z,I}).join(""),J,V),B=Object.keys(N);return R=0,(function z(I){for(var $=0;$<I.length;$++){if(R>=B.length)return;var ae,pe,X,xe,Ee,Ze,He,qe=I[$];typeof qe=="string"||typeof qe.content=="string"?(ae=B[R],(He=(Ze=typeof qe=="string"?qe:qe.content).indexOf(ae))!==-1&&(++R,pe=Ze.substring(0,He),Ee=N[ae],X=void 0,(xe={})["interpolation-punctuation"]=p,(xe=l.tokenize(Ee,xe)).length===3&&((X=[1,1]).push.apply(X,T(xe[1],l.languages.javascript,"javascript")),xe.splice.apply(xe,X)),X=new l.Token("interpolation",xe,d.alias,Ee),xe=Ze.substring(He+ae.length),Ee=[],pe&&Ee.push(pe),Ee.push(X),xe&&(z(Ze=[xe]),Ee.push.apply(Ee,Ze)),typeof qe=="string"?(I.splice.apply(I,[$,1].concat(Ee)),$+=Ee.length-1):qe.content=Ee)):(He=qe.content,Array.isArray(He)?z(He):z([He]))}})(E),new l.Token(V,E,"language-"+V,y)}l.languages.javascript["template-string"]=[f("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),f("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),f("svg",/\bsvg/.source),f("markdown",/\b(?:markdown|md)/.source),f("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),f("sql",/\bsql/.source),c].filter(Boolean);var x={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function A(y){return typeof y=="string"?y:Array.isArray(y)?y.map(A).join(""):A(y.content)}l.hooks.add("after-tokenize",function(y){y.language in x&&(function J(V){for(var R=0,N=V.length;R<N;R++){var E,B,z,I=V[R];typeof I!="string"&&(E=I.content,Array.isArray(E)?I.type==="template-string"?(I=E[1],E.length===3&&typeof I!="string"&&I.type==="embedded-code"&&(B=A(I),I=I.alias,I=Array.isArray(I)?I[0]:I,z=l.languages[I])&&(E[1]=g(B,z,I))):J(E):typeof E!="string"&&J([E]))}})(y.tokens)})})(k),(function(l){l.languages.typescript=l.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),l.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete l.languages.typescript.parameter,delete l.languages.typescript["literal-property"];var c=l.languages.extend("typescript",{});delete c["class-name"],l.languages.typescript["class-name"].inside=c,l.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:c}}}}),l.languages.ts=l.languages.typescript})(k),(function(l){var c=l.languages.javascript,u=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,d="(@(?:arg|argument|param|property)\\s+(?:"+u+"\\s+)?)";l.languages.jsdoc=l.languages.extend("javadoclike",{parameter:{pattern:RegExp(d+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),l.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(d+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:c,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return u})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+u),lookbehind:!0,inside:{string:c.string,number:c.number,boolean:c.boolean,keyword:l.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:c,alias:"language-javascript"}}}}),l.languages.javadoclike.addSupport("javascript",l.languages.jsdoc)})(k),(function(l){l.languages.flow=l.languages.extend("javascript",{}),l.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),l.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete l.languages.flow.parameter,l.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(l.languages.flow.keyword)||(l.languages.flow.keyword=[l.languages.flow.keyword]),l.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})})(k),k.languages.n4js=k.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),k.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),k.languages.n4jsd=k.languages.n4js,(function(l){function c(f,T){return RegExp(f.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),T)}l.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+l.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),l.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+l.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),l.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),l.languages.insertBefore("javascript","keyword",{imports:{pattern:c(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:l.languages.javascript},exports:{pattern:c(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:l.languages.javascript}}),l.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),l.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),l.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:c(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var u=["function","function-variable","method","method-variable","property-access"],d=0;d<u.length;d++){var h=u[d],p=l.languages.javascript[h],h=(p=l.util.type(p)==="RegExp"?l.languages.javascript[h]={pattern:p}:p).inside||{};(p.inside=h)["maybe-class-name"]=/^[A-Z][\s\S]*/}})(k),(function(l){var c=l.util.clone(l.languages.javascript),u=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,d=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,p=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function h(g,x){return g=g.replace(/<S>/g,function(){return u}).replace(/<BRACES>/g,function(){return d}).replace(/<SPREAD>/g,function(){return p}),RegExp(g,x)}p=h(p).source,l.languages.jsx=l.languages.extend("markup",c),l.languages.jsx.tag.pattern=h(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),l.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,l.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,l.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,l.languages.jsx.tag.inside.comment=c.comment,l.languages.insertBefore("inside","attr-name",{spread:{pattern:h(/<SPREAD>/.source),inside:l.languages.jsx}},l.languages.jsx.tag),l.languages.insertBefore("inside","special-attr",{script:{pattern:h(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:l.languages.jsx}}},l.languages.jsx.tag);function f(g){for(var x=[],A=0;A<g.length;A++){var y=g[A],J=!1;typeof y!="string"&&(y.type==="tag"&&y.content[0]&&y.content[0].type==="tag"?y.content[0].content[0].content==="</"?0<x.length&&x[x.length-1].tagName===T(y.content[0].content[1])&&x.pop():y.content[y.content.length-1].content!=="/>"&&x.push({tagName:T(y.content[0].content[1]),openedBraces:0}):0<x.length&&y.type==="punctuation"&&y.content==="{"?x[x.length-1].openedBraces++:0<x.length&&0<x[x.length-1].openedBraces&&y.type==="punctuation"&&y.content==="}"?x[x.length-1].openedBraces--:J=!0),(J||typeof y=="string")&&0<x.length&&x[x.length-1].openedBraces===0&&(J=T(y),A<g.length-1&&(typeof g[A+1]=="string"||g[A+1].type==="plain-text")&&(J+=T(g[A+1]),g.splice(A+1,1)),0<A&&(typeof g[A-1]=="string"||g[A-1].type==="plain-text")&&(J=T(g[A-1])+J,g.splice(A-1,1),A--),g[A]=new l.Token("plain-text",J,null,J)),y.content&&typeof y.content!="string"&&f(y.content)}}var T=function(g){return g?typeof g=="string"?g:typeof g.content=="string"?g.content:g.content.map(T).join(""):""};l.hooks.add("after-tokenize",function(g){g.language!=="jsx"&&g.language!=="tsx"||f(g.tokens)})})(k),(function(l){var c=l.util.clone(l.languages.typescript),c=(l.languages.tsx=l.languages.extend("jsx",c),delete l.languages.tsx.parameter,delete l.languages.tsx["literal-property"],l.languages.tsx.tag);c.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+c.pattern.source+")",c.pattern.flags),c.lookbehind=!0})(k),k.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},k.languages.swift["string-literal"].forEach(function(l){l.inside.interpolation.inside=k.languages.swift}),(function(l){l.languages.kotlin=l.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete l.languages.kotlin["class-name"];var c={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:l.languages.kotlin}};l.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:c},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:c},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete l.languages.kotlin.string,l.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),l.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),l.languages.kt=l.languages.kotlin,l.languages.kts=l.languages.kotlin})(k),k.languages.c=k.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),k.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),k.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},k.languages.c.string],char:k.languages.c.char,comment:k.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:k.languages.c}}}}),k.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete k.languages.c.boolean,k.languages.objectivec=k.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete k.languages.objectivec["class-name"],k.languages.objc=k.languages.objectivec,k.languages.reason=k.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),k.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete k.languages.reason.function,(function(l){for(var c=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,u=0;u<2;u++)c=c.replace(/<self>/g,function(){return c});c=c.replace(/<self>/g,function(){return/[^\s\S]/.source}),l.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+c),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},l.languages.rust["closure-params"].inside.rest=l.languages.rust,l.languages.rust.attribute.inside.string=l.languages.rust.string})(k),k.languages.go=k.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),k.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete k.languages.go["class-name"],(function(l){var c=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,u=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return c.source});l.languages.cpp=l.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return c.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:c,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),l.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return u})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),l.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:l.languages.cpp}}}}),l.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),l.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:l.languages.extend("cpp",{})}}),l.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},l.languages.cpp["base-clause"])})(k),k.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},k.languages.python["string-interpolation"].inside.interpolation.inside.rest=k.languages.python,k.languages.py=k.languages.python,k.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},k.languages.webmanifest=k.languages.json;var yx={};Mj(yx,{dracula:()=>qj,duotoneDark:()=>Uj,duotoneLight:()=>Pj,github:()=>_j,gruvboxMaterialDark:()=>hv,gruvboxMaterialLight:()=>gv,jettwaveDark:()=>lv,jettwaveLight:()=>cv,nightOwl:()=>Ij,nightOwlLight:()=>Fj,oceanicNext:()=>Gj,okaidia:()=>Qj,oneDark:()=>uv,oneLight:()=>pv,palenight:()=>Zj,shadesOfPurple:()=>$j,synthwave84:()=>ev,ultramin:()=>tv,vsDark:()=>jx,vsLight:()=>rv});var Lj={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},qj=Lj,zj={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},Uj=zj,Bj={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},Pj=Bj,kj={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},_j=kj,Hj={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},Ij=Hj,Jj={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},Fj=Jj,Ta={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",tag:"#fc929e",function:"#79b6f2",className:"#FAC863"},Vj={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:Ta.keyword}},{types:["attr-value"],style:{color:Ta.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:Ta.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:Ta.primitive}},{types:["boolean"],style:{color:Ta.boolean}},{types:["tag"],style:{color:Ta.tag}},{types:["string"],style:{color:Ta.string}},{types:["punctuation"],style:{color:Ta.string}},{types:["selector","char","builtin","inserted"],style:{color:Ta.char}},{types:["function"],style:{color:Ta.function}},{types:["operator","entity","url","variable"],style:{color:Ta.variable}},{types:["keyword"],style:{color:Ta.keyword}},{types:["atrule","class-name"],style:{color:Ta.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},Gj=Vj,Yj={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},Qj=Yj,Xj={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},Zj=Xj,Kj={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},$j=Kj,Wj={plain:{backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},ev=Wj,av={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},tv=av,sv={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},jx=sv,nv={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},rv=nv,iv={plain:{color:"#f8fafc",backgroundColor:"#011627"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#569CD6"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#f8fafc"}},{types:["attr-name","variable"],style:{color:"#9CDCFE"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#cbd5e1"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#D4D4D4"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#7dd3fc"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},lv=iv,ov={plain:{color:"#0f172a",backgroundColor:"#f1f5f9"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#0c4a6e"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#0f172a"}},{types:["attr-name","variable"],style:{color:"#0c4a6e"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#64748b"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#475569"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#0e7490"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},cv=ov,dv={plain:{backgroundColor:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(220, 10%, 40%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(220, 14%, 71%)"}},{types:["attr-name","class-name","maybe-class-name","boolean","constant","number","atrule"],style:{color:"hsl(29, 54%, 61%)"}},{types:["keyword"],style:{color:"hsl(286, 60%, 67%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(355, 65%, 65%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value"],style:{color:"hsl(95, 38%, 62%)"}},{types:["variable","operator","function"],style:{color:"hsl(207, 82%, 66%)"}},{types:["url"],style:{color:"hsl(187, 47%, 55%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(220, 14%, 71%)"}}]},uv=dv,mv={plain:{backgroundColor:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(230, 4%, 64%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(230, 8%, 24%)"}},{types:["attr-name","class-name","boolean","constant","number","atrule"],style:{color:"hsl(35, 99%, 36%)"}},{types:["keyword"],style:{color:"hsl(301, 63%, 40%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(5, 74%, 59%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value","punctuation"],style:{color:"hsl(119, 34%, 47%)"}},{types:["variable","operator","function"],style:{color:"hsl(221, 87%, 60%)"}},{types:["url"],style:{color:"hsl(198, 99%, 37%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(230, 8%, 24%)"}}]},pv=mv,xv={plain:{color:"#ebdbb2",backgroundColor:"#292828"},styles:[{types:["imports","class-name","maybe-class-name","constant","doctype","builtin","function"],style:{color:"#d8a657"}},{types:["property-access"],style:{color:"#7daea3"}},{types:["tag"],style:{color:"#e78a4e"}},{types:["attr-name","char","url","regex"],style:{color:"#a9b665"}},{types:["attr-value","string"],style:{color:"#89b482"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#ea6962"}},{types:["entity","number","symbol"],style:{color:"#d3869b"}}]},hv=xv,fv={plain:{color:"#654735",backgroundColor:"#f9f5d7"},styles:[{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#af2528"}},{types:["imports","class-name","maybe-class-name","constant","doctype","builtin"],style:{color:"#b4730e"}},{types:["string","attr-value"],style:{color:"#477a5b"}},{types:["property-access"],style:{color:"#266b79"}},{types:["function","attr-name","char","url"],style:{color:"#72761e"}},{types:["tag"],style:{color:"#b94c07"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["entity","number","symbol"],style:{color:"#924f79"}}]},gv=fv,bv=l=>L.useCallback(c=>{var u=c,{className:d,style:p,line:h}=u,f=bx(u,["className","style","line"]);const T=bi(Ga({},f),{className:hx("token-line",d)});return typeof l=="object"&&"plain"in l&&(T.style=l.plain),typeof p=="object"&&(T.style=Ga(Ga({},T.style||{}),p)),T},[l]),yv=l=>{const c=L.useCallback(({types:u,empty:d})=>{if(l!=null){{if(u.length===1&&u[0]==="plain")return d!=null?{display:"inline-block"}:void 0;if(u.length===1&&d!=null)return l[u[0]]}return Object.assign(d!=null?{display:"inline-block"}:{},...u.map(p=>l[p]))}},[l]);return L.useCallback(u=>{var d=u,{token:p,className:h,style:f}=d,T=bx(d,["token","className","style"]);const g=bi(Ga({},T),{className:hx("token",...p.types,h),children:p.content,style:c(p)});return f!=null&&(g.style=Ga(Ga({},g.style||{}),f)),g},[c])},jv=/\r\n|\r|\n/,Bp=l=>{l.length===0?l.push({types:["plain"],content:`
`,empty:!0}):l.length===1&&l[0].content===""&&(l[0].content=`
`,l[0].empty=!0)},Pp=(l,c)=>{const u=l.length;return u>0&&l[u-1]===c?l:l.concat(c)},vv=l=>{const c=[[]],u=[l],d=[0],p=[l.length];let h=0,f=0,T=[];const g=[T];for(;f>-1;){for(;(h=d[f]++)<p[f];){let x,A=c[f];const J=u[f][h];if(typeof J=="string"?(A=f>0?A:["plain"],x=J):(A=Pp(A,J.type),J.alias&&(A=Pp(A,J.alias)),x=J.content),typeof x!="string"){f++,c.push(A),u.push(x),d.push(0),p.push(x.length);continue}const V=x.split(jv),R=V.length;T.push({types:A,content:V[0]});for(let N=1;N<R;N++)Bp(T),g.push(T=[]),T.push({types:A,content:V[N]})}f--,c.pop(),u.pop(),d.pop(),p.pop()}return Bp(T),g},kp=vv,Sv=({prism:l,code:c,grammar:u,language:d})=>L.useMemo(()=>{if(u==null)return kp([c]);const p={code:c,grammar:u,language:d,tokens:[]};return l.hooks.run("before-tokenize",p),p.tokens=l.tokenize(c,u),l.hooks.run("after-tokenize",p),kp(p.tokens)},[c,u,d,l]),Nv=(l,c)=>{const{plain:u}=l,d=l.styles.reduce((p,h)=>{const{languages:f,style:T}=h;return f&&!f.includes(c)||h.types.forEach(g=>{const x=Ga(Ga({},p[g]),T);p[g]=x}),p},{});return d.root=u,d.plain=bi(Ga({},u),{backgroundColor:void 0}),d},Ev=Nv,Cv=({children:l,language:c,code:u,theme:d,prism:p})=>{const h=c.toLowerCase(),f=Ev(d,h),T=bv(f),g=yv(f),x=p.languages[h],A=Sv({prism:p,language:h,code:u,grammar:x});return l({tokens:A,className:`prism-code language-${h}`,style:f!=null?f.root:{},getLineProps:T,getTokenProps:g})},Tv=l=>L.createElement(Cv,bi(Ga({},l),{prism:l.prism||k,theme:l.theme||jx,code:l.code,language:l.language}));k.languages.java={comment:[{pattern:/\/\*\*[\s\S]*?\*\//,greedy:!0},{pattern:/\/\*[\s\S]*?\*\//,greedy:!0},{pattern:/\/\/.*/,greedy:!0}],string:[{pattern:/"""[\s\S]*?"""/,greedy:!0},{pattern:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0}],annotation:{pattern:/@\w+(?:\.\w+)*/,alias:"builtin"},keyword:/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,boolean:/\b(?:true|false)\b/,number:/\b0(?:x[\da-f_]+|b[01_]+|[0-7_]+)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:[eE][+-]?\d[\d_]*)?[dDfFlL]?\b/i,function:/\b\w+(?=\s*\()/,operator:/->|[<>]=?|[!=]=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]|<<=?|>>>?=?/,punctuation:/[{}[\];(),.:]/};k.languages.sql={comment:[{pattern:/\/\*[\s\S]*?\*\//,greedy:!0},{pattern:/--.*/}],string:{pattern:/(')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:/\b(?:SELECT|FROM|WHERE|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER|TABLE|INDEX|INTO|VALUES|SET|JOIN|LEFT|RIGHT|INNER|OUTER|ON|AND|OR|NOT|NULL|IS|IN|BETWEEN|LIKE|ORDER|BY|GROUP|HAVING|LIMIT|OFFSET|AS|DISTINCT|COUNT|SUM|AVG|MAX|MIN|EXISTS|UNION|ALL|PRIMARY|KEY|FOREIGN|REFERENCES|CONSTRAINT|DEFAULT|AUTO_INCREMENT|CASCADE|UNIQUE|CHECK|VIEW|TRIGGER|PROCEDURE|FUNCTION|BEGIN|END|IF|ELSE|THEN|CASE|WHEN|COMMIT|ROLLBACK|GRANT|REVOKE|VARCHAR|INT|INTEGER|BIGINT|BOOLEAN|DATE|TIMESTAMP|TEXT|FLOAT|DOUBLE|DECIMAL)\b/i,number:/\b\d+(?:\.\d+)?\b/,boolean:/\b(?:TRUE|FALSE)\b/i,operator:/[=<>!]+/,punctuation:/[;(),.*]/};k.languages.properties={comment:{pattern:/^[#!].*$/m},key:{pattern:/^[\w.-]+(?=\s*[=:])/m,alias:"attr-name"},value:{pattern:new RegExp("(?<=[=:])\\s*.+","m"),alias:"attr-value"},punctuation:/[=:]/};const Av=yx.nightOwl;function S({code:l,language:c="java",filename:u}){const[d,p]=L.useState(!1),h=()=>{navigator.clipboard.writeText(l.trim()),p(!0),setTimeout(()=>p(!1),2e3)},f=c==="java"?"Java":c==="bash"?"Terminal":c==="xml"?"XML":c==="json"?"JSON":c==="sql"?"SQL":c==="yaml"?"YAML":c;return e.jsxs("div",{className:"rounded-xl overflow-hidden border border-[#2d333b] my-5 shadow-lg shadow-black/20",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5",style:{background:"#01111d"},children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("span",{className:"w-3 h-3 rounded-full bg-[#ff5f57]"}),e.jsx("span",{className:"w-3 h-3 rounded-full bg-[#febc2e]"}),e.jsx("span",{className:"w-3 h-3 rounded-full bg-[#28c840]"})]}),u&&e.jsxs("span",{className:"text-[#8b949e] text-sm font-mono ml-2 flex items-center gap-1.5",children:[e.jsx(dx,{size:14}),u]}),!u&&e.jsx("span",{className:"text-[#6e7681] text-xs font-mono ml-2",children:f})]}),e.jsxs("button",{onClick:h,className:"flex items-center gap-1.5 text-xs text-[#8b949e] hover:text-[#e6edf3] transition-colors cursor-pointer px-2 py-1 rounded hover:bg-white/5",children:[d?e.jsx(Wb,{size:13,className:"text-[#3fb950]"}):e.jsx(uy,{size:13}),d?"Copiado!":"Copiar"]})]}),e.jsx(Tv,{theme:Av,code:l.trim(),language:c,children:({tokens:T,getLineProps:g,getTokenProps:x})=>e.jsx("pre",{style:{margin:0,padding:"1rem 0",background:"#011627",overflowX:"auto",fontSize:"0.875rem",lineHeight:"1.7"},children:T.map((A,y)=>{const J=g({line:A});return e.jsxs("div",{style:{...J.style,display:"table-row"},children:[e.jsx("span",{style:{display:"table-cell",paddingRight:"1rem",paddingLeft:"1rem",textAlign:"right",userSelect:"none",opacity:.3,fontSize:"0.75rem",width:"2rem",color:"#8b949e"},children:y+1}),e.jsx("span",{style:{display:"table-cell",paddingRight:"1rem"},children:A.map((V,R)=>{const N=x({token:V});return e.jsx("span",{...N},R)})})]},y)})})})]})}const Rv={info:{icon:My,bg:"bg-accent/10",border:"border-accent/30",iconColor:"text-accent",defaultTitle:"Nota"},warning:{icon:lj,bg:"bg-warning/10",border:"border-warning/30",iconColor:"text-warning",defaultTitle:"Importante"},tip:{icon:mx,bg:"bg-success/10",border:"border-success/30",iconColor:"text-success",defaultTitle:"Tip"},angular:{icon:Zo,bg:"bg-angular/10",border:"border-angular/30",iconColor:"text-angular",defaultTitle:"Comparación con Angular/TypeScript"},spring:{icon:ux,bg:"bg-spring/10",border:"border-spring/30",iconColor:"text-spring",defaultTitle:"Spring Boot"}};function F({type:l="info",title:c,children:u}){const d=Rv[l],p=d.icon;return e.jsxs("div",{className:`${d.bg} ${d.border} border rounded-xl p-4 my-4`,children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(p,{size:18,className:d.iconColor}),e.jsx("span",{className:`font-semibold text-sm ${d.iconColor}`,children:c||d.defaultTitle})]}),e.jsx("div",{className:"text-text-muted text-sm leading-relaxed",children:u})]})}function oe({day:l,title:c,duration:u,commitMsg:d}){return e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"flex-shrink-0 w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center",children:e.jsx("span",{className:"text-primary font-bold text-lg",children:l})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs text-text-muted mb-0.5",children:[e.jsx(Kb,{size:12}),e.jsxs("span",{children:["Día ",l]}),e.jsx("span",{className:"text-border",children:"•"}),e.jsx(ox,{size:12}),e.jsx("span",{children:u})]}),e.jsx("h1",{className:"text-3xl font-bold text-java",children:c})]})]}),d&&e.jsxs("div",{className:"flex items-center gap-2 mt-3 px-3 py-2 rounded-lg bg-[#161b22] border border-[#30363d] text-sm font-mono",children:[e.jsx(Ko,{size:14,className:"text-success flex-shrink-0"}),e.jsx("span",{className:"text-success",children:"git commit -m"}),e.jsxs("span",{className:"text-[#e6edf3]",children:['"',d,'"']})]})]})}function se({title:l="¿Cómo pensarlo?",children:c}){return e.jsxs("div",{className:"my-6 rounded-xl border border-accent/30 overflow-hidden",children:[e.jsxs("div",{className:"bg-accent/10 px-5 py-3 flex items-center gap-2.5",children:[e.jsx(ic,{size:18,className:"text-accent"}),e.jsx("span",{className:"font-semibold text-sm text-accent",children:l})]}),e.jsx("div",{className:"px-5 py-4 bg-accent/5 text-text-muted text-sm leading-relaxed space-y-3",children:c})]})}function _p({title:l="Paso a paso",steps:c}){return e.jsxs("div",{className:"my-6 rounded-xl border border-border overflow-hidden",children:[e.jsxs("div",{className:"bg-surface-lighter/40 px-5 py-3 flex items-center gap-2.5",children:[e.jsx(Hb,{size:16,className:"text-primary"}),e.jsx("span",{className:"font-semibold text-sm text-text",children:l})]}),e.jsx("div",{className:"px-5 py-4 space-y-0",children:c.map((u,d)=>e.jsxs("div",{className:"flex gap-3 py-3 border-b border-border/30 last:border-0",children:[e.jsx("div",{className:"flex-shrink-0 w-7 h-7 rounded-full bg-primary/15 text-primary font-bold text-xs flex items-center justify-center mt-0.5",children:d+1}),e.jsxs("div",{children:[e.jsx("p",{className:"text-text text-sm font-medium",children:u.instruction}),u.detail&&e.jsx("p",{className:"text-text-muted text-xs mt-1 leading-relaxed",children:u.detail})]})]},d))})]})}function K({number:l,title:c,description:u,hint:d,solution:p,solutionLanguage:h="java",solutionFilename:f}){const[T,g]=L.useState(!1),[x,A]=L.useState(!1);return e.jsxs("div",{className:"my-6 rounded-xl border-2 border-primary/30 overflow-hidden",children:[e.jsxs("div",{className:"bg-primary/10 px-5 py-4 flex items-center gap-3",children:[e.jsx("div",{className:"flex-shrink-0 w-9 h-9 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center",children:e.jsx(lc,{size:18,className:"text-primary"})}),e.jsxs("div",{children:[e.jsxs("span",{className:"text-xs font-bold text-primary uppercase tracking-wider",children:["Ejercicio ",l]}),e.jsx("h4",{className:"text-text font-semibold text-sm mt-0.5",children:c})]})]}),e.jsxs("div",{className:"px-5 py-4 bg-surface-light/50",children:[e.jsx("p",{className:"text-text-muted text-sm leading-relaxed whitespace-pre-line",children:u}),d&&e.jsxs("button",{onClick:()=>g(!T),className:"mt-3 flex items-center gap-2 text-xs text-warning hover:text-warning/80 transition-colors cursor-pointer",children:[e.jsx(mx,{size:14}),T?"Ocultar pista":"Necesito una pista",T?e.jsx(Op,{size:14}):e.jsx(Mp,{size:14})]}),T&&d&&e.jsxs("div",{className:"mt-2 p-3 rounded-lg bg-warning/10 border border-warning/20 text-sm text-warning/90",children:["💡 ",d]})]}),e.jsxs("div",{className:"px-5 py-3 border-t border-border/50",children:[e.jsxs("button",{onClick:()=>A(!x),className:"flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors cursor-pointer",children:[e.jsx(ny,{size:16}),x?"Ocultar solución":"Ver solución",x?e.jsx(Op,{size:14}):e.jsx(Mp,{size:14})]}),x&&e.jsx("div",{className:"mt-3",children:e.jsx(S,{code:p,language:h,filename:f})})]})]})}function Mv(){return e.jsxs("div",{children:[e.jsx(oe,{day:1,title:"Introducción a Java",duration:"45 min",commitMsg:"dia-1: primer programa Java - HolaMundo"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy vas a entender qué es Java, cómo funciona por dentro, y vas a escribir y ejecutar tu primer programa. No solo leer — vas a ",e.jsx("strong",{className:"text-text",children:"hacer"}),"."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es Java y por qué te importa?"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Java es un lenguaje ",e.jsx("strong",{className:"text-text",children:"orientado a objetos"}),",",e.jsx("strong",{className:"text-text",children:" fuertemente tipado"})," y ",e.jsx("strong",{className:"text-text",children:"compilado"}),". Fue creado en 1995 por James Gosling en Sun Microsystems y hoy lo mantiene Oracle con versiones LTS cada dos años."]}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Su filosofía es ",e.jsx("strong",{className:"text-text",children:'"Write Once, Run Anywhere" (WORA)'}),": escribes el código una vez y se ejecuta en cualquier plataforma que tenga una JVM instalada — Windows, Linux, macOS, servidores, dispositivos embebidos."]}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Algunos términos clave que oirás constantemente:"}),e.jsxs("div",{className:"space-y-3 mb-4",children:[e.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-4",children:[e.jsx("h3",{className:"font-semibold text-text mb-1",children:"Fuertemente tipado"}),e.jsxs("p",{className:"text-text-muted text-sm",children:["Cada variable tiene un tipo fijo declarado en tiempo de compilación. No puedes asignar un",e.jsx("code",{className:"text-primary",children:" String"})," a una variable ",e.jsx("code",{className:"text-primary",children:"int"}),". El compilador detecta ese error",e.jsx("strong",{className:"text-text",children:" antes de que el programa corra"}),", no en producción."]})]}),e.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-4",children:[e.jsx("h3",{className:"font-semibold text-text mb-1",children:"Compilado"}),e.jsxs("p",{className:"text-text-muted text-sm",children:["Tu código fuente (",e.jsx("code",{className:"text-primary",children:".java"}),") pasa por el compilador ",e.jsx("code",{className:"text-primary",children:"javac"}),"y se convierte en ",e.jsx("strong",{className:"text-text",children:"bytecode"})," (",e.jsx("code",{className:"text-primary",children:".class"}),"). Ese bytecode es un lenguaje intermedio — no es código máquina directo ni código fuente. La JVM lo ejecuta."]})]}),e.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-4",children:[e.jsx("h3",{className:"font-semibold text-text mb-1",children:"Orientado a objetos"}),e.jsxs("p",{className:"text-text-muted text-sm",children:["El código se organiza en ",e.jsx("strong",{className:"text-text",children:"clases y objetos"}),". Una clase es el molde, un objeto es la instancia concreta. Todo en Java vive dentro de una clase — no existen funciones sueltas como en JavaScript."]})]}),e.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-4",children:[e.jsx("h3",{className:"font-semibold text-text mb-1",children:"Garbage Collector (GC)"}),e.jsxs("p",{className:"text-text-muted text-sm",children:["Java gestiona la memoria automáticamente. A diferencia de C/C++, no tienes que liberar memoria manualmente con ",e.jsx("code",{className:"text-primary",children:"free()"}),". El GC de la JVM detecta objetos que ya no se usan y los elimina. Esto elimina una clase entera de bugs muy difíciles de depurar."]})]})]}),e.jsxs(se,{title:"¿Por qué debería aprender Java si ya sé TypeScript?",children:[e.jsxs("p",{children:["Piénsalo así: TypeScript te da tipado estático ",e.jsx("em",{children:"opcional"})," sobre JavaScript. Java te da tipado estático ",e.jsx("em",{children:"obligatorio"})," desde el primer día. Eso significa que el compilador atrapa más errores antes de que tu código se ejecute — errores que en TypeScript/JavaScript solo los descubrirías en producción."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Ecosistema y mercado laboral:"})," El 90% de los sistemas bancarios, aerolíneas, seguros y gobiernos del mundo corren sobre Java. No porque sea el más moderno, sino porque es ",e.jsx("strong",{className:"text-text",children:"extremadamente estable, predecible y tiene el ecosistema más maduro del sector enterprise"}),". Una aplicación Java bien escrita en 2005 probablemente sigue corriendo hoy sin cambios."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Spring Boot:"})," Es el framework dominante para backends enterprise. Es el equivalente de NestJS pero con 20 años más de madurez, una comunidad 10x más grande y soporte oficial en la mayoría de plataformas cloud (AWS, GCP, Azure). Dominar Java + Spring Boot abre las puertas a los proyectos mejor pagados del sector."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Android:"})," Las apps Android se escriben en Java o Kotlin (Kotlin compila a bytecode Java). Si alguna vez quieres desarrollar apps móviles nativas, el conocimiento de Java te lleva directamente ahí."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Lo que ya sabes:"})," Como desarrollador Angular/TypeScript ya dominas OOP, interfaces, clases, tipado estático y arquitectura en capas. Esos conceptos se trasladan directamente. La curva de aprendizaje es la ",e.jsx("em",{children:"sintaxis"}),", no el paradigma."]})]}),e.jsxs(F,{type:"angular",children:["En Angular trabajas con TypeScript, que se ",e.jsx("strong",{children:"transpila"})," a JavaScript y se ejecuta en el navegador. En Java, el código se ",e.jsx("strong",{children:"compila"})," a ",e.jsx("code",{className:"text-primary",children:"bytecode"})," y se ejecuta en la JVM. El concepto es similar: un paso intermedio antes de la ejecución."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"JDK, JRE y JVM — Las tres piezas clave"}),e.jsxs(se,{title:"¿Cómo pensar en estas tres piezas?",children:[e.jsxs("p",{children:["Imagina una ",e.jsx("strong",{className:"text-text",children:"muñeca rusa (matrioska)"}),". La más grande es el JDK, que contiene al JRE, que contiene a la JVM. Cada capa agrega herramientas:"]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"JVM"})," = el motor que ejecuta tu programa.",e.jsx("strong",{className:"text-text",children:" JRE"})," = el motor + las bibliotecas (java.util, java.lang...).",e.jsx("strong",{className:"text-text",children:" JDK"})," = todo lo anterior + herramientas para desarrollar (compilador, debugger)."]}),e.jsxs("p",{children:["Como desarrollador, siempre instalas el ",e.jsx("strong",{className:"text-text",children:"JDK"}),". Es todo lo que necesitas."]})]}),e.jsxs("div",{className:"space-y-4 mb-6",children:[e.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-4",children:[e.jsx("h3",{className:"font-semibold text-java mb-2",children:"JVM (Java Virtual Machine)"}),e.jsxs("p",{className:"text-text-muted text-sm",children:["Ejecuta el bytecode de Java. Cada sistema operativo tiene su propia JVM, pero todos ejecutan el mismo bytecode — eso es WORA. La JVM también es responsable del",e.jsx("strong",{className:"text-text",children:" Garbage Collector"})," (gestión automática de memoria) y del",e.jsx("strong",{className:"text-text",children:" JIT compiler"})," (Just-In-Time): la JVM observa qué partes del código se ejecutan más y las compila a código máquina nativo en tiempo real, haciendo Java sorprendentemente rápido."]})]}),e.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-4",children:[e.jsx("h3",{className:"font-semibold text-java mb-2",children:"JRE (Java Runtime Environment)"}),e.jsxs("p",{className:"text-text-muted text-sm",children:["JVM + las bibliotecas estándar de Java (",e.jsx("code",{className:"text-primary",children:"java.lang"}),",",e.jsx("code",{className:"text-primary",children:" java.util"}),", ",e.jsx("code",{className:"text-primary",children:"java.io"}),",",e.jsx("code",{className:"text-primary",children:" java.net"}),", etc.). Lo que necesitas para",e.jsx("strong",{className:"text-text",children:" ejecutar"})," programas Java ya compilados. Antes Java separaba JRE del JDK como descargas distintas; desde Java 9 se fusionaron en la práctica."]})]}),e.jsxs("div",{className:"bg-surface-light border border-border rounded-xl p-4",children:[e.jsx("h3",{className:"font-semibold text-java mb-2",children:"JDK (Java Development Kit)"}),e.jsxs("p",{className:"text-text-muted text-sm",children:["JRE + herramientas de desarrollo: ",e.jsx("code",{className:"text-primary",children:"javac"})," (compilador),",e.jsx("code",{className:"text-primary",children:" javadoc"})," (genera documentación HTML desde tus comentarios),",e.jsx("code",{className:"text-primary",children:" jdb"})," (debugger de línea de comandos),",e.jsx("code",{className:"text-primary",children:" jar"})," (empaquetador), y más.",e.jsx("strong",{className:"text-text",children:" Como desarrollador, siempre instalas el JDK."}),"Usa JDK 21 — es la versión LTS (Long-Term Support) más reciente, con soporte hasta 2031."]})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Instalación paso a paso"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Antes de escribir código, necesitas tener el JDK instalado. Vamos a hacerlo juntos:"}),e.jsx(_p,{title:"Instalar JDK 21 en tu máquina",steps:[{instruction:"Descarga el JDK 21 (LTS)",detail:"Ve a adoptium.net o oracle.com/java y descarga JDK 21 para tu sistema operativo."},{instruction:"Ejecuta el instalador",detail:"En Windows: siguiente, siguiente, instalar. En macOS: abre el .dmg y arrastra. En Linux: usa tu gestor de paquetes (apt, dnf, etc.)."},{instruction:"Verifica la instalación en tu terminal",detail:"Abre una terminal y ejecuta los comandos de abajo."},{instruction:"Instala IntelliJ IDEA Community",detail:"Descarga de jetbrains.com/idea. La versión Community es gratuita y perfecta para aprender."}]}),e.jsx(S,{language:"bash",filename:"Terminal — Verificar instalación",code:`
# Verificar que Java está instalado
java --version
# Debería mostrar algo como: openjdk 21.0.x ...

# Verificar el compilador
javac --version
# Debería mostrar algo como: javac 21.0.x
`}),e.jsxs(F,{type:"warning",title:"¿No te reconoce el comando java?",children:['Si la terminal dice "java no se reconoce como un comando", necesitas agregar el JDK al PATH de tu sistema. En Windows: Panel de control → Variables de entorno → PATH → agrega la ruta del bin del JDK (ejemplo: ',e.jsx("code",{className:"text-primary",children:"C:\\Program Files\\Java\\jdk-21\\bin"}),")."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Tu primer programa: HolaMundo"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Ahora sí, manos al código. Vas a crear tu primer archivo Java y ejecutarlo. Presta atención a ",e.jsx("strong",{className:"text-text",children:"cada parte"})," del código:"]}),e.jsx(_p,{title:"Crear tu primer proyecto en IntelliJ",steps:[{instruction:"Abre IntelliJ IDEA",detail:'Si es la primera vez, selecciona "New Project".'},{instruction:"Configura el proyecto",detail:'Name: java-mastery-45-dias, Language: Java, Build system: IntelliJ, JDK: 21. Click "Create".'},{instruction:"Crea el archivo HolaMundo.java",detail:'Click derecho en la carpeta "src" → New → Java Class → escribe "HolaMundo".'},{instruction:"Escribe el código de abajo",detail:"No copies y pegues. Escríbelo tú mismo — así tu cerebro empieza a memorizar la estructura."},{instruction:"Ejecuta el programa",detail:"Click derecho en el archivo → Run, o usa el atajo Shift+F10 (Windows) / Ctrl+R (Mac)."}]}),e.jsx(S,{language:"java",filename:"HolaMundo.java",code:`
public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("¡Hola, Mundo!");
    }
}
`}),e.jsxs(se,{title:"¿Qué significa cada palabra de este código?",children:[e.jsx("p",{children:"Vamos parte por parte, porque entender esto es la base de TODO lo que viene después:"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"public"})," — Es un ",e.jsx("em",{children:"modificador de acceso"}),". Controla quién puede ver o usar esta clase. ",e.jsx("code",{className:"text-primary",children:"public"})," significa accesible desde cualquier parte. Existen cuatro niveles: ",e.jsx("code",{className:"text-primary",children:"public"}),",",e.jsx("code",{className:"text-primary",children:" protected"}),", ",e.jsx("code",{className:"text-primary",children:"package-private"})," (sin palabra clave) y ",e.jsx("code",{className:"text-primary",children:"private"}),". Los verás en detalle en el Día 12 (Encapsulamiento)."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"class HolaMundo"})," — Defines una clase llamada HolaMundo. En Java ",e.jsx("em",{children:"todo"})," el código vive dentro de una clase — no existen funciones ni variables sueltas fuera de una clase. El nombre de la clase ",e.jsx("em",{children:"debe coincidir exactamente"})," con el nombre del archivo (",e.jsx("code",{className:"text-primary",children:"HolaMundo.java"}),") cuando la clase es pública. Java es case-sensitive: ",e.jsx("code",{className:"text-primary",children:"HolaMundo"})," y ",e.jsx("code",{className:"text-primary",children:"holamundo"}),"son dos clases completamente diferentes."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"public static void main(String[] args)"})," — Este es el",e.jsx("em",{children:" punto de entrada del programa"}),". La JVM busca exactamente este método con esta firma exacta para arrancar. No puedes cambiarle el nombre ni los parámetros."]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"static"})," — El método pertenece a la clase, no a una instancia. La JVM puede llamarlo sin crear un objeto."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"void"})," — Este método no retorna ningún valor al finalizar."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"String[] args"})," — Es un array de Strings con los argumentos que el usuario pasa al ejecutar el programa desde la terminal: ",e.jsx("code",{className:"text-primary",children:"java HolaMundo arg1 arg2"}),". Al inicio siempre estará vacío."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"System.out.println()"})," — Imprime texto en la consola y agrega un salto de línea al final. Desglosándolo:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"System"})," — Clase del paquete ",e.jsx("code",{className:"text-primary",children:"java.lang"})," (importado automáticamente). Representa el sistema donde corre tu programa."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"out"})," — Campo estático de tipo ",e.jsx("code",{className:"text-primary",children:"PrintStream"}),". Representa la salida estándar (la terminal)."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"println()"})," — Método que imprime el texto y agrega ",e.jsx("code",{className:"text-primary",children:"\\n"})," al final. ",e.jsx("code",{className:"text-primary",children:"print()"})," hace lo mismo pero sin el salto de línea."]})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Cómo funciona por dentro?"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:'Cuando hiciste click en "Run" en IntelliJ, esto es lo que pasó detrás de escenas:'}),e.jsx(S,{language:"bash",filename:"Lo que IntelliJ hizo por ti",code:`
# Paso 1: El compilador convierte .java → .class (bytecode)
javac HolaMundo.java
# Genera: HolaMundo.class

# Paso 2: La JVM ejecuta el bytecode
java HolaMundo
# Salida: ¡Hola, Mundo!

# NOTA: No pones .class al ejecutar
# NOTA: El archivo .class no es legible por humanos — es bytecode
`}),e.jsxs(F,{type:"info",children:["IntelliJ hace estos dos pasos automáticamente con un solo click. Pero es fundamental que entiendas el proceso: ",e.jsx("strong",{children:"tu código → compilador → bytecode → JVM → ejecución"}),". Los errores ocurren en dos momentos distintos:",e.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Errores de compilación"})," (en el paso ",e.jsx("code",{className:"text-primary",children:"javac"}),"): tipo incorrecto, variable no declarada, método inexistente. El programa ni siquiera arranca. Son los errores ",e.jsx("em",{children:"buenos"})," — se detectan temprano."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Errores de ejecución / runtime"})," (en el paso ",e.jsx("code",{className:"text-primary",children:"java"}),"): división por cero, NullPointerException, índice fuera de rango. El programa arranca pero explota en algún momento. Son los errores difíciles."]})]}),"El compilador de Java es tu primer line of defense."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Java vs TypeScript — Mapa mental"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Si vienes de TypeScript, esta tabla te ayuda a conectar lo que ya sabes:"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm text-text-muted",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border",children:[e.jsx("th",{className:"text-left py-3 px-4 text-text",children:"Concepto"}),e.jsx("th",{className:"text-left py-3 px-4 text-angular",children:"TypeScript"}),e.jsx("th",{className:"text-left py-3 px-4 text-java",children:"Java"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-3 px-4",children:"Tipado"}),e.jsx("td",{className:"py-3 px-4",children:"Estático (opcional)"}),e.jsx("td",{className:"py-3 px-4",children:"Estático (obligatorio)"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-3 px-4",children:"Compilación"}),e.jsx("td",{className:"py-3 px-4",children:"Transpila a JS"}),e.jsx("td",{className:"py-3 px-4",children:"Compila a bytecode"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-3 px-4",children:"Ejecución"}),e.jsx("td",{className:"py-3 px-4",children:"Navegador / Node.js"}),e.jsx("td",{className:"py-3 px-4",children:"JVM"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-3 px-4",children:"Punto de entrada"}),e.jsx("td",{className:"py-3 px-4",children:"main.ts / index.ts"}),e.jsx("td",{className:"py-3 px-4",children:"public static void main()"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-3 px-4",children:"Dependencias"}),e.jsx("td",{className:"py-3 px-4",children:"npm / yarn / pnpm"}),e.jsx("td",{className:"py-3 px-4",children:"Maven / Gradle"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 px-4",children:"Imprimir"}),e.jsx("td",{className:"py-3 px-4",children:"console.log()"}),e.jsx("td",{className:"py-3 px-4",children:"System.out.println()"})]})]})]})})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 1"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"No avances al Día 2 sin completar estos ejercicios. Escríbelos tú mismo en IntelliJ, ejecútalos y verifica que funcionen."}),e.jsx(K,{number:1,title:"Saluda con tu nombre",description:`Crea una clase llamada MiSaludo.java que imprima:
"Hola, me llamo [TU NOMBRE] y estoy aprendiendo Java"

Recuerda: el nombre de la clase debe coincidir con el nombre del archivo.`,hint:"Usa System.out.println() con tu nombre dentro de las comillas.",solution:`public class MiSaludo {
    public static void main(String[] args) {
        System.out.println("Hola, me llamo Carlos y estoy aprendiendo Java");
    }
}`,solutionFilename:"MiSaludo.java"}),e.jsx(K,{number:2,title:"Múltiples líneas",description:`Crea una clase llamada MiPerfil.java que imprima tu perfil en 4 líneas separadas:
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
}`,solutionFilename:"MiPerfil.java"}),e.jsx(K,{number:3,title:"print vs println",description:`Crea una clase Impresion.java que demuestre la diferencia entre print y println:
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
}`,solutionFilename:"Impresion.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx("p",{className:"text-text-muted text-sm mb-3",children:"Si completaste los 3 ejercicios, haz tu primer commit:"}),e.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-1: primer programa Java - HolaMundo, MiSaludo, MiPerfil, Impresion"
git push origin main
`}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",e.jsx("strong",{className:"text-text",children:"Día 2"})," vas a aprender la estructura completa de un programa Java: paquetes, imports, convenciones y más."]})]})})]})}function Ov(){return e.jsxs("div",{children:[e.jsx(oe,{day:2,title:"Sintaxis Básica",duration:"50 min",commitMsg:"dia-2: sintaxis basica, comentarios, convenciones, paquetes"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a dominar la estructura de un programa Java: cómo imprimir texto de varias formas, cómo documentar tu código, y las convenciones que todo desarrollador Java sigue."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"La anatomía de un programa Java"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Ayer escribiste tu primer HolaMundo. Hoy vamos a profundizar en cada pieza y aprender nuevas formas de trabajar con la consola."}),e.jsx(S,{filename:"Anatomia.java",code:`
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
`}),e.jsxs(se,{title:"¿Por qué Java obliga a poner todo dentro de una clase?",children:[e.jsxs("p",{children:["En TypeScript puedes escribir una función suelta en un archivo. En Java, ",e.jsx("strong",{className:"text-text",children:"no existe código suelto"}),". Todo — absolutamente todo — debe estar dentro de una clase. ¿Por qué? Porque Java fue diseñado como un lenguaje ",e.jsx("strong",{className:"text-text",children:"puro de orientación a objetos"})," desde su concepción. La idea central es que el mundo real se modela con objetos, y cada objeto pertenece a una clase."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"La consecuencia práctica:"})," incluso un programa que solo suma dos números necesita una clase. Parece verboso al inicio, pero esto tiene ventajas reales:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsx("li",{children:"El compilador sabe exactamente dónde buscar cada elemento del programa."}),e.jsxs("li",{children:["La organización en clases obliga a pensar en ",e.jsx("em",{children:"responsabilidades"}),": ¿qué hace esta clase? ¿a qué pertenece este método?"]}),e.jsx("li",{children:"En proyectos con cientos de archivos, esa estructura hace la diferencia entre código mantenible y código caos."})]}),e.jsxs("p",{children:["Nota: Java 21 introduce ",e.jsx("code",{className:"text-primary",children:"void main()"})," sin la firma completa (en preview), pero en la práctica profesional siempre escribirás la firma completa.",e.jsx("code",{className:"text-primary",children:" public static void main(String[] args)"})," será tu firma por los próximos años."]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Imprimir en consola — Las 3 formas"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Imprimir en consola es tu herramienta #1 de debugging. Aprende las tres formas y cuándo usar cada una:"}),e.jsx(S,{filename:"FormasDeImprimir.java",code:`
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
`}),e.jsxs(se,{title:"¿Cuándo uso printf vs println con concatenación?",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"println + concatenación"}),": Para mensajes simples y debugging rápido. Es lo que usarás el 90% del tiempo al principio. La concatenación con ",e.jsx("code",{className:"text-primary",children:"+"}),"funciona con cualquier tipo: Java convierte automáticamente números y booleanos a String cuando están junto a un String en una concatenación."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"printf"}),": Cuando necesitas control de formato preciso — decimales con exactamente 2 posiciones (",e.jsx("code",{className:"text-primary",children:"%.2f"}),"), alinear columnas en una tabla, rellenar con espacios o ceros. Es como el template literal de TypeScript pero más potente para números. La ",e.jsx("code",{className:"text-primary",children:"f"})," en ",e.jsx("code",{className:"text-primary",children:"printf"})," viene de ",e.jsx("em",{children:"formatted"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"String.format()"}),": Igual que printf pero retorna el String formateado en lugar de imprimirlo. Útil cuando quieres construir un String para guardarlo en una variable:",e.jsx("code",{className:"text-primary",children:' String msg = String.format("Hola %s", nombre);'})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Nota:"})," ",e.jsx("code",{className:"text-primary",children:"%n"})," es el salto de línea dependiente del sistema operativo (usa ",e.jsx("code",{className:"text-primary",children:"\\r\\n"})," en Windows y",e.jsx("code",{className:"text-primary",children:" \\n"})," en Unix/Mac). Siempre preferírelo sobre ",e.jsx("code",{className:"text-primary",children:"\\n"}),"en printf para máxima portabilidad."]})]}),e.jsx(F,{type:"tip",title:"Formatos completos de printf",children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold text-text mb-1",children:"Tipos básicos"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"%s"})," — String"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"%d"})," — entero (int, long)"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"%f"})," — decimal (float, double)"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"%.2f"})," — decimal con 2 posiciones"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"%b"})," — booleano"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"%c"})," — caracter"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"%n"})," — nueva línea (OS-independiente)"]})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold text-text mb-1",children:"Formato avanzado"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"%10s"})," — alineado a la derecha en 10 chars"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"%-10s"})," — alineado a la izquierda en 10 chars"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"%05d"})," — entero con ceros: 00042"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"%e"})," — notación científica: 1.23e+05"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"%X"})," — hexadecimal: FF"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"%%"})," — el carácter %"]})]})]})]})})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Comentarios — Documenta tu pensamiento"}),e.jsx(S,{filename:"Comentarios.java",code:`
public class Comentarios {
    // Comentario de una línea — para explicaciones cortas
    // Atajo IntelliJ: Ctrl+/ (selecciona líneas y presiona Ctrl+/)

    /*
     * Comentario de múltiples líneas.
     * Útil para desactivar un bloque de código
     * o para explicaciones que requieren varios párrafos.
     */

    /**
     * Comentario Javadoc — documentación oficial del método.
     * IntelliJ muestra esto como tooltip cuando el código se importa.
     * La herramienta javadoc lo convierte en HTML navegable.
     *
     * @param nombre el nombre del usuario a saludar
     * @return cadena con el saludo personalizado
     * @throws IllegalArgumentException si nombre es null
     */
    public static String saludar(String nombre) {
        if (nombre == null) throw new IllegalArgumentException("nombre no puede ser null");
        return "Hola, " + nombre;
    }

    public static void main(String[] args) {
        System.out.println(saludar("Carlos"));
    }
}
`}),e.jsxs(se,{title:"¿Cuándo escribir comentarios y cuándo no?",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"El error más común:"})," comentar ",e.jsx("em",{children:"qué"})," hace el código en lugar de ",e.jsx("em",{children:"por qué"})," lo hace. Si el código es claro, el comentario sobra."]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Sí comenta:"})," decisiones no obvias, workarounds de bugs externos, reglas de negocio complejas, fórmulas matemáticas."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"No comentes:"})," ",e.jsx("code",{className:"text-primary",children:"i++; // incrementa i"})," — eso es ruido, no ayuda."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Javadoc SIEMPRE"})," en APIs públicas: métodos y clases que otros van a usar necesitan documentación formal."]})]}),e.jsxs("p",{children:["El código bien escrito se lee como prosa. Los nombres de variables y métodos descriptivos valen más que cien comentarios. ",e.jsx("code",{className:"text-primary",children:"calcularImpuesto(precio)"})," no necesita comentario. ",e.jsx("code",{className:"text-primary",children:"calc(p)"})," sí."]})]}),e.jsxs(F,{type:"info",children:["En IntelliJ, escribe ",e.jsx("code",{className:"text-primary",children:"/**"})," justo arriba de un método y presiona Enter. IntelliJ genera automáticamente la estructura del Javadoc con los ",e.jsx("code",{className:"text-primary",children:"@param"})," y",e.jsx("code",{className:"text-primary",children:" @return"})," según la firma del método. También puedes generar el HTML de la documentación completa con ",e.jsx("code",{className:"text-primary",children:"Tools → Generate JavaDoc"}),"."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Convenciones de nombres"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Java tiene convenciones estrictas. No son obligatorias por el compilador, pero",e.jsx("strong",{className:"text-text",children:" todo el ecosistema Java las sigue"})," — desde la biblioteca estándar hasta Spring Boot. Romperlas no da error, pero hace que tu código se vea amateur para cualquier desarrollador Java que lo lea. Adoptar estas convenciones desde el primer día te entrena para trabajar en cualquier equipo."]}),e.jsx(S,{filename:"Convenciones.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:['TypeScript usa las mismas convenciones: PascalCase para clases, camelCase para variables. Diferencia clave: en Angular a veces pones prefijo "I" en interfaces (',e.jsx("code",{className:"text-primary",children:"IUser"}),"). En Java ",e.jsx("strong",{children:"nunca"})," se hace eso."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Paquetes — Organizar tu código"}),e.jsxs(se,{title:"¿Por qué los paquetes usan el dominio invertido?",children:[e.jsxs("p",{children:["Un paquete es la ",e.jsx("strong",{className:"text-text",children:"dirección postal"})," de tu clase. Así como una dirección tiene país → ciudad → calle → número, un paquete tiene dominio → empresa → proyecto → módulo."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"¿Por qué dominio invertido?"})," Para garantizar unicidad global. Si dos empresas distintas crean una clase llamada ",e.jsx("code",{className:"text-primary",children:"Usuario"}),", habría conflicto de nombres. Con dominios invertidos:",e.jsx("code",{className:"text-primary",children:" com.google.Usuario"})," vs ",e.jsx("code",{className:"text-primary",children:"com.miempresa.Usuario"}),"son inequívocamente diferentes. Los dominios de internet son únicos por definición, así que invertirlos garantiza que tus paquetes nunca colisionarán con los de nadie más."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Estructura típica de paquetes en Spring Boot:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"com.empresa.proyecto.controller"})," — controladores REST"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"com.empresa.proyecto.service"})," — lógica de negocio"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"com.empresa.proyecto.repository"})," — acceso a datos"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"com.empresa.proyecto.model"})," — entidades y DTOs"]})]}),e.jsxs("p",{children:["La carpeta física ",e.jsx("strong",{className:"text-text",children:"debe coincidir exactamente"})," con el paquete. IntelliJ crea esa estructura de carpetas automáticamente cuando declaras el paquete."]})]}),e.jsx(S,{filename:"com/miempresa/modelo/Usuario.java",code:`
package com.miempresa.modelo;

import java.util.List;

public class Usuario {
    private String nombre;
    private int edad;
}
`}),e.jsx(S,{filename:"com/miempresa/servicio/UsuarioServicio.java",code:`
package com.miempresa.servicio;

import com.miempresa.modelo.Usuario;

public class UsuarioServicio {
    public Usuario buscarPorId(int id) {
        return new Usuario();
    }
}
`}),e.jsxs(F,{type:"warning",children:["El paquete ",e.jsx("strong",{children:"debe coincidir con la estructura de carpetas"}),". Si tu paquete es"," ",e.jsx("code",{className:"text-primary",children:"com.miempresa.modelo"}),", el archivo debe estar en"," ",e.jsx("code",{className:"text-primary",children:"com/miempresa/modelo/"}),". IntelliJ crea las carpetas automáticamente."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Punto y coma, llaves y case-sensitive"}),e.jsx(S,{filename:"ReglasBasicas.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Palabras reservadas"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Java tiene 50+ palabras que NO puedes usar como nombres. No necesitas memorizarlas — IntelliJ te marcará error si intentas usar una. Pero conócelas de vista:"}),e.jsx("div",{className:"bg-surface-light border border-border rounded-xl p-4",children:e.jsx("div",{className:"flex flex-wrap gap-2",children:["abstract","assert","boolean","break","byte","case","catch","char","class","const","continue","default","do","double","else","enum","extends","final","finally","float","for","goto","if","implements","import","instanceof","int","interface","long","native","new","package","private","protected","public","return","short","static","strictfp","super","switch","synchronized","this","throw","throws","transient","try","void","volatile","while","var","record","sealed","permits","yield"].map(l=>e.jsx("span",{className:"bg-[#282c34] text-primary text-xs font-mono px-2 py-1 rounded",children:l},l))})})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 2"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Escríbelos tú mismo. No copies y pegues — tu memoria muscular importa."}),e.jsx(K,{number:1,title:"Tarjeta de presentación con printf",description:`Crea TarjetaPresentacion.java que use printf para imprimir:
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
}`,solutionFilename:"TarjetaPresentacion.java"}),e.jsx(K,{number:2,title:"Comentarios y Javadoc",description:`Crea Calculadora.java con:
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
}`,solutionFilename:"Calculadora.java"}),e.jsx(K,{number:3,title:"Tabla formateada con printf",description:`Crea TablaProductos.java que imprima una tabla con 3 productos:
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
}`,solutionFilename:"TablaProductos.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-2: sintaxis basica, printf, comentarios, convenciones"
git push origin main
`}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",e.jsx("strong",{className:"text-text",children:"Día 3"}),": tipos de datos primitivos, casting, y la diferencia entre primitivos y objetos."]})]})})]})}function Dv(){return e.jsxs("div",{children:[e.jsx(oe,{day:3,title:"Tipos de Datos",duration:"50 min",commitMsg:"dia-3: tipos primitivos, wrappers, casting"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a entender la diferencia más fundamental de Java: primitivos vs objetos. También vas a aprender a convertir entre tipos sin perder datos."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Los 8 tipos primitivos"}),e.jsxs(se,{title:"¿Por qué Java tiene tantos tipos de números?",children:[e.jsxs("p",{children:["En TypeScript solo existe ",e.jsx("code",{className:"text-primary",children:"number"})," para todo: números enteros, decimales, grandes y pequeños, todos usan el mismo tipo (IEEE 754 double de 64 bits bajo el capó). Java te obliga a elegir el tipo exacto. ¿Por qué? ",e.jsx("strong",{className:"text-text",children:"Eficiencia y control de memoria"}),"."]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:["Un ",e.jsx("code",{className:"text-primary",children:"byte"})," ocupa ",e.jsx("strong",{className:"text-text",children:"1 byte"})," de RAM. Si tienes un array de 10 millones de valores entre 0 y 100, usar ",e.jsx("code",{className:"text-primary",children:"byte[]"})," ocupa 10MB. Usar ",e.jsx("code",{className:"text-primary",children:"int[]"})," ocupa 40MB."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"int"})," (32 bits) es el tipo entero óptimo para la mayoría de CPUs modernas. Las operaciones con ",e.jsx("code",{className:"text-primary",children:"int"})," son más rápidas que con ",e.jsx("code",{className:"text-primary",children:"byte"})," o ",e.jsx("code",{className:"text-primary",children:"short"})," porque la CPU trabaja nativamente con 32 bits."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"long"})," (64 bits) es necesario para IDs de base de datos, timestamps en milisegundos, distancias astronómicas — valores que superan los ~2 mil millones de ",e.jsx("code",{className:"text-primary",children:"int"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"float"})," (32 bits) fue popular en gráficos donde la velocidad importaba más que la precisión. Hoy en día casi siempre se usa ",e.jsx("code",{className:"text-primary",children:"double"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"double"})," (64 bits) es el tipo decimal estándar. Mayor precisión, mayor rango. Para dinero ",e.jsx("strong",{className:"text-text",children:"NO uses ni float ni double"})," — usa ",e.jsx("code",{className:"text-primary",children:"BigDecimal"})," para evitar errores de punto flotante."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"En la práctica:"})," usarás ",e.jsx("code",{className:"text-primary",children:"int"})," para enteros y",e.jsx("code",{className:"text-primary",children:" double"})," para decimales el 95% del tiempo. Cuando veas ",e.jsx("code",{className:"text-primary",children:"long"}),"será para IDs o timestamps. ",e.jsx("code",{className:"text-primary",children:"byte"}),"/",e.jsx("code",{className:"text-primary",children:"short"})," casi nunca a menos que optimices memoria explícitamente."]})]}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"w-full text-sm text-text-muted",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border",children:[e.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Tipo"}),e.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Tamaño"}),e.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Rango"}),e.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Valor por defecto"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"byte"}),e.jsx("td",{className:"py-2 px-3",children:"8 bits"}),e.jsx("td",{className:"py-2 px-3",children:"-128 a 127"}),e.jsx("td",{className:"py-2 px-3",children:"0"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"short"}),e.jsx("td",{className:"py-2 px-3",children:"16 bits"}),e.jsx("td",{className:"py-2 px-3",children:"-32,768 a 32,767"}),e.jsx("td",{className:"py-2 px-3",children:"0"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"int"}),e.jsx("td",{className:"py-2 px-3",children:"32 bits"}),e.jsx("td",{className:"py-2 px-3",children:"-2³¹ a 2³¹-1"}),e.jsx("td",{className:"py-2 px-3",children:"0"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"long"}),e.jsx("td",{className:"py-2 px-3",children:"64 bits"}),e.jsx("td",{className:"py-2 px-3",children:"-2⁶³ a 2⁶³-1"}),e.jsx("td",{className:"py-2 px-3",children:"0L"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"float"}),e.jsx("td",{className:"py-2 px-3",children:"32 bits"}),e.jsx("td",{className:"py-2 px-3",children:"±3.4 × 10³⁸"}),e.jsx("td",{className:"py-2 px-3",children:"0.0f"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"double"}),e.jsx("td",{className:"py-2 px-3",children:"64 bits"}),e.jsx("td",{className:"py-2 px-3",children:"±1.7 × 10³⁰⁸"}),e.jsx("td",{className:"py-2 px-3",children:"0.0"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"char"}),e.jsx("td",{className:"py-2 px-3",children:"16 bits"}),e.jsx("td",{className:"py-2 px-3",children:"0 a 65,535 (Unicode)"}),e.jsx("td",{className:"py-2 px-3",children:"'\\u0000'"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"boolean"}),e.jsx("td",{className:"py-2 px-3",children:"1 bit*"}),e.jsx("td",{className:"py-2 px-3",children:"true / false"}),e.jsx("td",{className:"py-2 px-3",children:"false"})]})]})]})}),e.jsx(S,{filename:"TiposPrimitivos.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["En TypeScript solo existe ",e.jsx("code",{className:"text-primary",children:"number"})," para TODOS los números (enteros y decimales). En Java debes elegir el tipo específico. Lo más común: ",e.jsx("code",{className:"text-primary",children:"int"})," para enteros y ",e.jsx("code",{className:"text-primary",children:"double"})," para decimales."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Tipos de Referencia"}),e.jsxs(se,{title:"Primitivo vs Referencia — La diferencia fundamental de Java",children:[e.jsxs("p",{children:["Esta es la distincion mas importante que debes interiorizar en Java. Todo tipo de dato es o un ",e.jsx("strong",{className:"text-text",children:"primitivo"})," o una ",e.jsx("strong",{className:"text-text",children:"referencia"}),". No existe un tercer tipo."]}),e.jsxs("p",{children:["Imagina que un ",e.jsx("strong",{className:"text-text",children:"primitivo"})," es un post-it con el valor escrito directamente.",e.jsx("code",{className:"text-primary",children:" int a = 10"}),' — el post-it dice "10". Si haces ',e.jsx("code",{className:"text-primary",children:"int b = a"}),', obtienes un nuevo post-it independiente que también dice "10". Cambiar ',e.jsx("code",{className:"text-primary",children:"b"})," no afecta a",e.jsx("code",{className:"text-primary",children:" a"}),". Son completamente independientes."]}),e.jsxs("p",{children:["Una ",e.jsx("strong",{className:"text-text",children:"referencia"})," es un post-it con una ",e.jsx("em",{children:"dirección de memoria"})," que apunta a un objeto en el ",e.jsx("em",{children:"heap"})," (zona de memoria dinámica). Si haces",e.jsx("code",{className:"text-primary",children:" int[] b = a"}),", obtienes otro post-it con la ",e.jsx("em",{children:"misma"})," dirección. Ambos post-its apuntan al mismo objeto. Modificar el objeto desde cualquiera de los dos afecta a los demás."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"¿Dónde vive cada uno?"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Stack"}),": variables locales y primitivos. Rápido, automático, tamaño fijo."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Heap"}),": objetos creados con ",e.jsx("code",{className:"text-primary",children:"new"}),". Gestionado por el Garbage Collector."]}),e.jsxs("li",{children:["Cuando declaras ",e.jsx("code",{className:"text-primary",children:'String nombre = "Carlos"'}),", la variable ",e.jsx("code",{className:"text-primary",children:"nombre"})," está en el stack, pero el objeto String ",e.jsx("code",{className:"text-primary",children:'"Carlos"'})," está en el heap."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"null"}),' es el valor por defecto de toda referencia: significa "este post-it no apunta a ningún objeto". Intentar usar un objeto null causa el infame',e.jsx("code",{className:"text-primary",children:" NullPointerException"})," — el error #1 más común en Java."]})]}),e.jsx(S,{filename:"TiposReferencia.java",code:`
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
`}),e.jsxs(F,{type:"warning",title:"Primitivo vs Referencia — Diferencia clave",children:[e.jsx("strong",{children:"Primitivos"})," almacenan el valor directamente. Si copias una variable primitiva, copias el valor. ",e.jsx("strong",{children:"Referencias"})," almacenan una dirección de memoria. Si copias una variable de referencia, ambas apuntan al mismo objeto."]}),e.jsx(S,{filename:"PrimitivoVsReferencia.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Wrapper Classes (Clases Envolventes)"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Cada tipo primitivo tiene una ",e.jsx("strong",{className:"text-text",children:"clase envolvente"}),' (wrapper) que lo "empaqueta" en un objeto. Son necesarios porque las colecciones de Java (',e.jsx("code",{className:"text-primary",children:"List"}),", ",e.jsx("code",{className:"text-primary",children:"Map"}),", ",e.jsx("code",{className:"text-primary",children:"Set"}),") solo trabajan con objetos, no con primitivos. Por eso no puedes escribir",e.jsx("code",{className:"text-primary",children:" List<int>"})," — debes escribir ",e.jsx("code",{className:"text-primary",children:"List<Integer>"}),"."]}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:[e.jsx("strong",{className:"text-text",children:"Autoboxing y Unboxing"}),": desde Java 5, la conversión entre primitivo y wrapper es automática. El compilador inserta la conversión por ti. Pero esto tiene un costo oculto: cada autoboxing crea un nuevo objeto en el heap. En bucles de millones de iteraciones, eso puede generar presión en el Garbage Collector."]}),e.jsx(S,{filename:"WrapperClasses.java",code:`
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
`}),e.jsxs(F,{type:"warning",children:[e.jsx("strong",{children:"Nunca uses == para comparar Wrapper objects"}),". Usa ",e.jsx("code",{className:"text-primary",children:".equals()"}),". El operador == compara las referencias (direcciones de memoria), no los valores. Excepción: Integer caches valores de -128 a 127, por lo que == funciona en ese rango, pero NO confíes en eso."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Casting (Conversión de tipos)"}),e.jsx(S,{filename:"Casting.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"var — Inferencia de tipos (Java 10+)"}),e.jsx(S,{filename:"InferenciaTipos.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:[e.jsx("code",{className:"text-primary",children:"var"})," en Java es similar a la inferencia de tipo en TypeScript cuando escribes ",e.jsx("code",{className:"text-primary",children:'const nombre = "Carlos"'})," sin anotar el tipo. Diferencias clave: Java solo permite ",e.jsx("code",{className:"text-primary",children:"var"})," en variables locales (dentro de métodos), no en campos de clase ni parámetros. Además, ",e.jsx("code",{className:"text-primary",children:"var"})," en Java sigue siendo ",e.jsx("strong",{children:"estáticamente tipado"})," — el tipo se fija en compilación y no puede cambiar. Es solo azúcar sintáctica para evitar repetir tipos largos como",e.jsx("code",{className:"text-primary",children:" HashMap<String, List<Integer>>"}),"."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 3"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Crea cada archivo en IntelliJ, escríbelo tú mismo y ejecútalo."}),e.jsx(K,{number:1,title:"Explorador de tipos",description:`Crea ExploradorTipos.java que declare una variable de cada tipo primitivo y las imprima todas.
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
}`,solutionFilename:"ExploradorTipos.java"}),e.jsx(K,{number:2,title:"Casting peligroso",description:`Crea CastingDemo.java que demuestre:
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
}`,solutionFilename:"CastingDemo.java"}),e.jsx(K,{number:3,title:"Trampa de los Wrappers",description:`Crea WrapperTrampa.java que demuestre la trampa clásica de == vs .equals():
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
}`,solutionFilename:"WrapperTrampa.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-3: tipos primitivos, wrappers, casting, var"
git push origin main
`}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",e.jsx("strong",{className:"text-text",children:"Día 4"}),": variables, constantes, scope y valores por defecto."]})]})})]})}function wv(){return e.jsxs("div",{children:[e.jsx(oe,{day:4,title:"Variables y Constantes",duration:"45 min",commitMsg:"dia-4: variables, final, scope, valores por defecto"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy vas a dominar cómo Java maneja las variables: declaración, scope, constantes con",e.jsx("code",{className:"text-primary ml-1",children:"final"}),", y una trampa importante sobre valores por defecto."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Declaración de Variables"}),e.jsxs(se,{title:"¿Cómo pensar en las variables de Java vs TypeScript?",children:[e.jsxs("p",{children:["En TypeScript escribes ",e.jsx("code",{className:"text-primary",children:'let nombre: string = "Carlos"'})," — el tipo va",e.jsx("em",{children:" después"})," del nombre, separado por dos puntos. El tipo es opcional (TypeScript lo infiere)."]}),e.jsxs("p",{children:["En Java escribes ",e.jsx("code",{className:"text-primary",children:'String nombre = "Carlos"'})," — el tipo va",e.jsx("em",{children:" antes"})," del nombre, sin dos puntos. El tipo es ",e.jsx("strong",{className:"text-text",children:"obligatorio"}),"(excepto cuando usas ",e.jsx("code",{className:"text-primary",children:"var"}),", que se infiere automáticamente). No existen ",e.jsx("code",{className:"text-primary",children:"let"})," ni ",e.jsx("code",{className:"text-primary",children:"const"})," en Java."]}),e.jsxs("p",{children:["La regla mental: ",e.jsx("strong",{className:"text-text",children:"tipo nombre = valor;"})," — siempre en ese orden. Cada sentencia termina con ",e.jsx("code",{className:"text-primary",children:";"})," obligatorio."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Equivalencias directas:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:["TypeScript ",e.jsx("code",{className:"text-primary",children:"let x: number = 5"})," → Java ",e.jsx("code",{className:"text-primary",children:"int x = 5;"})]}),e.jsxs("li",{children:["TypeScript ",e.jsx("code",{className:"text-primary",children:"const x = 5"})," → Java ",e.jsx("code",{className:"text-primary",children:"final int x = 5;"})]}),e.jsxs("li",{children:["TypeScript ",e.jsx("code",{className:"text-primary",children:'let x = "hola"'})," (inferido) → Java ",e.jsx("code",{className:"text-primary",children:'var x = "hola";'})," (Java 10+)"]}),e.jsxs("li",{children:["TypeScript ",e.jsx("code",{className:"text-primary",children:"let x: string"})," (sin valor) → Java ",e.jsx("code",{className:"text-primary",children:"String x;"})," (pero NO puedes usarla hasta asignarle un valor)"]})]})]}),e.jsx(S,{filename:"Variables.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["En TypeScript: ",e.jsx("code",{className:"text-primary",children:'let nombre: string = "Carlos"'}),". En Java: ",e.jsx("code",{className:"text-primary",children:'String nombre = "Carlos"'}),". En Java NO hay ",e.jsx("code",{className:"text-primary",children:"let"}),"/",e.jsx("code",{className:"text-primary",children:"const"}),"/",e.jsx("code",{className:"text-primary",children:"var"})," (bueno, ",e.jsx("code",{className:"text-primary",children:"var"})," desde Java 10, pero limitado a variables locales)."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Constantes con final"}),e.jsxs(se,{title:"final = const de TypeScript... pero hay una trampa importante",children:[e.jsxs("p",{children:[e.jsx("code",{className:"text-primary",children:"final"})," previene la ",e.jsx("strong",{className:"text-text",children:"reasignación"}),"de la variable, pero ",e.jsx("strong",{className:"text-text",children:"NO impide mutar el objeto al que apunta"}),". Es exactamente igual que ",e.jsx("code",{className:"text-primary",children:"const"})," en JavaScript:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"const arr = [1,2,3]; arr[0] = 99;"})," — funciona en JS"]}),e.jsxs("li",{children:[e.jsxs("code",{className:"text-primary",children:["final int[] arr = ","{","1,2,3","}","; arr[0] = 99;"]})," — también funciona en Java"]}),e.jsxs("li",{children:[e.jsxs("code",{className:"text-primary",children:["arr = new int[]","{","4,5,6","}",";"]})," — esto SÍ da error (reasignación)"]})]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"¿Cuándo usar final?"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Constantes de clase"}),": ",e.jsx("code",{className:"text-primary",children:"static final"})," + nombre en ",e.jsx("code",{className:"text-primary",children:"MAYUSCULAS_GUION"}),". Son los equivalentes a las constantes globales de TypeScript."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Parámetros inmutables"}),": marcar parámetros de método como ",e.jsx("code",{className:"text-primary",children:"final"})," deja claro que no se modificarán dentro del método."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Variables en lambdas"}),": una variable usada dentro de una lambda debe ser efectivamente final (no reasignada después de su declaración). Java lo exige por diseño."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Buena práctica moderna"}),": muchos equipos Java marcan todas las variables locales como ",e.jsx("code",{className:"text-primary",children:"final"})," por defecto para reforzar inmutabilidad y hacer el código más predecible."]})]}),e.jsxs("p",{children:["Para inmutabilidad ",e.jsx("em",{children:"real"})," de colecciones, usa ",e.jsx("code",{className:"text-primary",children:"List.of()"})," o",e.jsx("code",{className:"text-primary",children:" Collections.unmodifiableList()"}),". ",e.jsx("code",{className:"text-primary",children:"final"}),"solo protege la referencia, no el contenido."]})]}),e.jsx(S,{filename:"Constantes.java",code:`
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
`}),e.jsxs(F,{type:"warning",title:"final no hace inmutable",children:[e.jsx("code",{className:"text-primary",children:"final"})," solo previene ",e.jsx("strong",{children:"reasignación"}),". Si apunta a un array, lista u objeto, puedes modificar su contenido. Para inmutabilidad real, necesitarás ",e.jsx("code",{className:"text-primary",children:"Collections.unmodifiableList()"})," o",e.jsx("code",{className:"text-primary",children:" List.of()"})," (lo verás en colecciones)."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Scope — ¿Dónde vive cada variable?"}),e.jsxs(se,{title:"Las 3 zonas de vida de una variable en Java",children:[e.jsxs("p",{children:["Entender el scope (alcance) es fundamental para evitar errores. Una variable solo existe dentro del bloque de llaves ",e.jsx("code",{className:"text-primary",children:"{}"})," donde fue declarada."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"1. Variable de clase (static)"})," — Declarada con ",e.jsx("code",{className:"text-primary",children:"static"}),"fuera de métodos. Vive durante toda la ejecución del programa (mientras la clase esté cargada). Es compartida por ",e.jsx("em",{children:"todas"})," las instancias de la clase. Cambiarla desde una instancia la cambia para todas. Útil para contadores, constantes, registros únicos."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"2. Variable de instancia"})," — Declarada sin ",e.jsx("code",{className:"text-primary",children:"static"}),"dentro de la clase pero fuera de métodos. Cada objeto creado con ",e.jsx("code",{className:"text-primary",children:"new"}),"tiene su propia copia. Cuando el Garbage Collector elimina el objeto, la variable desaparece."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"3. Variable local"})," — Declarada dentro de un método, bloque",e.jsx("code",{className:"text-primary",children:" if"}),", bucle ",e.jsx("code",{className:"text-primary",children:"for"}),", etc. Existe",e.jsx("em",{children:"solo mientras ese bloque se ejecuta"}),". No tiene valor por defecto — debes inicializarla antes de usarla o el compilador dá error."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Regla importante:"})," no puedes acceder a una variable fuera de su scope. Esto es una ",e.jsx("em",{children:"garantía del compilador"})," — es imposible usar accidentalmente una variable de otro contexto."]})]}),e.jsx(S,{filename:"Scope.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Valores por Defecto"}),e.jsx(S,{filename:"ValoresPorDefecto.java",code:`
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
`}),e.jsxs(F,{type:"tip",children:[e.jsx("strong",{children:"Buena práctica:"})," Siempre inicializa tus variables al declararlas. No dependas de los valores por defecto — hace tu código más legible y menos propenso a bugs."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 4"}),e.jsx(K,{number:1,title:"Configuración de app",description:`Crea ConfigApp.java con constantes de configuración para una app imaginaria:
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
}`,solutionFilename:"ConfigApp.java"}),e.jsx(K,{number:2,title:"Scope detective",description:`Crea ScopeDetective.java que demuestre 3 niveles de scope:
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
}`,solutionFilename:"ScopeDetective.java"}),e.jsx(K,{number:3,title:"Calculadora de área con constantes",description:`Crea CalculadoraArea.java que:
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
}`,solutionFilename:"CalculadoraArea.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-4: variables, constantes final, scope, valores por defecto"
git push origin main
`}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",e.jsx("strong",{className:"text-text",children:"Día 5"}),": operadores aritméticos, lógicos, de comparación y el operador ternario."]})]})})]})}function Lv(){return e.jsxs("div",{children:[e.jsx(oe,{day:5,title:"Operadores",duration:"45 min",commitMsg:"dia-5: operadores aritmeticos, logicos, comparacion, ternario"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a dominar todos los operadores de Java. La mayoría son idénticos a TypeScript, pero hay trampas importantes que debes conocer (especialmente con la división entera y la comparación de objetos)."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operadores Aritméticos"}),e.jsxs(se,{title:"La trampa #1 de Java: la división entera",children:[e.jsxs("p",{children:["En TypeScript/JavaScript, ",e.jsx("code",{className:"text-primary",children:"10 / 3"})," da ",e.jsx("code",{className:"text-primary",children:"3.333..."}),". En Java, ",e.jsx("code",{className:"text-primary",children:"10 / 3"})," da ",e.jsx("code",{className:"text-primary",children:"3"}),". Punto. Sin decimales."]}),e.jsxs("p",{children:["¿Por qué? Porque cuando ",e.jsx("strong",{className:"text-text",children:"ambos operandos son enteros"}),", Java realiza",e.jsx("strong",{className:"text-text",children:" división entera"}),": el resultado se trunca (no redondea) hacia cero.",e.jsx("code",{className:"text-primary",children:" 7 / 2 = 3"})," (no 3.5), ",e.jsx("code",{className:"text-primary",children:"-7 / 2 = -3"})," (no -3.5)."]}),e.jsxs("p",{children:["Para obtener decimales, al menos un operando debe ser ",e.jsx("code",{className:"text-primary",children:"double"}),":"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"10.0 / 3"})," — el literal ",e.jsx("code",{className:"text-primary",children:"10.0"})," es double"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"(double) 10 / 3"})," — cast explícito antes de la operación"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"10 / 3.0"})," — el divisor es double"]})]}),e.jsxs("p",{children:["Este bug silencioso ocurre constantemente en código de principiantes. Ejemplo clásico: calcular un porcentaje con ",e.jsx("code",{className:"text-primary",children:"int parcial = 7; int total = 10; double pct = parcial / total;"})," — result: ",e.jsx("code",{className:"text-primary",children:"0.0"}),", no",e.jsx("code",{className:"text-primary",children:" 0.7"}),". Necesitas el cast: ",e.jsx("code",{className:"text-primary",children:"(double) parcial / total"}),"."]})]}),e.jsx(S,{filename:"Aritmeticos.java",code:`
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
`}),e.jsxs(F,{type:"warning",children:[e.jsx("strong",{children:"División entera:"})," ",e.jsx("code",{className:"text-primary",children:"10 / 3 = 3"})," (no 3.33). Java trunca los decimales cuando ambos operandos son enteros. Si necesitas decimales, usa ",e.jsx("code",{className:"text-primary",children:"double"})," o haz un cast."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operadores de Asignación"}),e.jsx(S,{filename:"Asignacion.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operadores de Comparación"}),e.jsx(S,{filename:"Comparacion.java",code:`
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
`}),e.jsxs(se,{title:"== vs .equals() — La trampa #2 que causa bugs en producción",children:[e.jsxs("p",{children:["En TypeScript tienes ",e.jsx("code",{className:"text-primary",children:"==="})," (valor + tipo) y ",e.jsx("code",{className:"text-primary",children:"=="}),"(con coerción). En Java solo existe ",e.jsx("code",{className:"text-primary",children:"=="}),", pero se comporta",e.jsx("em",{children:"diferente según el tipo"}),":"]}),e.jsxs("p",{children:["Para ",e.jsx("strong",{className:"text-text",children:"primitivos"})," (",e.jsx("code",{className:"text-primary",children:"int"}),",",e.jsx("code",{className:"text-primary",children:" double"}),", ",e.jsx("code",{className:"text-primary",children:"boolean"}),"): ",e.jsx("code",{className:"text-primary",children:"=="}),"compara ",e.jsx("em",{children:"valores"}),". Funciona exactamente como esperas. ",e.jsx("code",{className:"text-primary",children:"5 == 5"})," es ",e.jsx("code",{className:"text-primary",children:"true"}),"."]}),e.jsxs("p",{children:["Para ",e.jsx("strong",{className:"text-text",children:"objetos"})," (",e.jsx("code",{className:"text-primary",children:"String"}),",",e.jsx("code",{className:"text-primary",children:" Integer"}),", cualquier clase): ",e.jsx("code",{className:"text-primary",children:"=="})," compara",e.jsx("em",{children:"referencias de memoria"})," — ¿apuntan al mismo objeto en el heap? Casi siempre NO, aunque tengan el mismo valor. Usa ",e.jsx("code",{className:"text-primary",children:".equals()"})," para comparar contenido."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Excepción importante con String literals:"})," Java optimiza los literales String reutilizándolos en el ",e.jsx("em",{children:"String Pool"}),". Por eso",e.jsx("code",{className:"text-primary",children:' "hola" == "hola"'})," puede dar ",e.jsx("code",{className:"text-primary",children:"true"}),"(mismo objeto en el pool), pero ",e.jsx("code",{className:"text-primary",children:'new String("hola") == new String("hola")'}),"da ",e.jsx("code",{className:"text-primary",children:"false"})," (dos objetos distintos). Nunca confundas en esta ambigüedad:",e.jsxs("strong",{className:"text-text",children:[" siempre usa ",e.jsx("code",{className:"text-primary",children:".equals()"})," para Strings"]}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Buena práctica:"})," cuando compares con un literal, ponlo primero para evitar NullPointerException: ",e.jsx("code",{className:"text-primary",children:'"admin".equals(rol)'})," en lugar de",e.jsx("code",{className:"text-primary",children:' rol.equals("admin")'})," (si rol es null, el primero retorna false, el segundo explota)."]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operadores Lógicos"}),e.jsx(S,{filename:"Logicos.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"instanceof — Verificar tipo"}),e.jsx(S,{filename:"InstanceOf.java",code:`
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
`}),e.jsxs(F,{type:"tip",children:["El pattern matching con ",e.jsx("code",{className:"text-primary",children:"instanceof"})," (Java 16+) es una mejora muy útil que elimina la necesidad de hacer cast manual después de verificar el tipo."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Precedencia de Operadores"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"De mayor a menor prioridad:"}),e.jsx("div",{className:"bg-surface-light border border-border rounded-xl p-4 text-sm text-text-muted",children:e.jsxs("ol",{className:"space-y-1 list-decimal list-inside",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"() [] ."})," — Paréntesis, acceso"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"++ -- ! ~"})," — Unarios"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"* / %"})," — Multiplicación, división, módulo"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"+ -"})," — Suma, resta"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"< > <= >= instanceof"})," — Comparación"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"== !="})," — Igualdad"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"&&"})," — AND lógico"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"||"})," — OR lógico"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"?:"})," — Ternario"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"= += -= *= /="})," — Asignación"]})]})}),e.jsxs(F,{type:"tip",children:["Cuando tengas dudas sobre precedencia, ",e.jsx("strong",{children:"usa paréntesis"}),". Hacen tu código más legible y evitan errores sutiles."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 5"}),e.jsx(K,{number:1,title:"Calculadora completa",description:`Crea MiniCalculadora.java con métodos static para las 4 operaciones básicas:
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
}`,solutionFilename:"MiniCalculadora.java"}),e.jsx(K,{number:2,title:"Clasificador con ternarios anidados",description:`Crea Clasificador.java con un método static clasificarNota(int nota) que use
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
}`,solutionFilename:"Clasificador.java"}),e.jsx(K,{number:3,title:"Validador con short-circuit",description:`Crea Validador.java con un método static validarUsuario(String nombre, int edad) que:
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
}`,solutionFilename:"Validador.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-5: operadores aritmeticos, logicos, comparacion, ternario, instanceof"
git push origin main
`}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",e.jsx("strong",{className:"text-text",children:"Día 6"}),": Strings — inmutabilidad, métodos esenciales, StringBuilder y formateo."]})]})})]})}function qv(){return e.jsxs("div",{children:[e.jsx(oe,{day:6,title:"Strings",duration:"50 min",commitMsg:"dia-6: strings, inmutabilidad, metodos, StringBuilder"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy vas a dominar Strings — el tipo de dato que más usarás en Java. La clave es entender que son ",e.jsx("strong",{className:"text-text",children:"inmutables"})," y cuándo usar ",e.jsx("code",{className:"text-primary",children:"StringBuilder"}),"."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Crear Strings"}),e.jsxs(se,{title:"¿Por qué los Strings son inmutables en Java?",children:[e.jsxs("p",{children:["En TypeScript/JavaScript, los strings también son inmutables, pero casi nadie lo piensa porque JavaScript oculta ese detalle. En Java es ",e.jsx("strong",{className:"text-text",children:"algo que hay que tener presente activamente"}),", porque afecta directamente al rendimiento y al diseño."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"¿Qué significa inmutable?"})," Que una vez creado un objeto String, su contenido nunca cambia. Cuando escribes ",e.jsx("code",{className:"text-primary",children:'texto = texto + " mundo"'}),", Java NO modifica el objeto original. Crea un ",e.jsx("em",{children:"nuevo"})," objeto String que contiene la concatenación, y tu variable ahora apunta a ese nuevo objeto. El objeto anterior queda huerfano esperando al Garbage Collector."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"¿Por qué se diseñó así?"})," La inmutabilidad da varias ventajas:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Thread safety"}),": múltiples hilos pueden leer el mismo String sin sincronización."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"String Pool"}),": Java puede reutilizar objetos String idénticos en memoria. Si dos variables tienen el valor ",e.jsx("code",{className:"text-primary",children:'"hola"'}),", apuntan al mismo objeto en el pool. Esto ahorra memoria."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Seguridad"}),": los Strings se usan para rutas de archivos, credenciales, URLs. Si fueran mutables, podría modificarse su contenido después de una validación de seguridad."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Hashcodes estables"}),": los Strings se usan como claves en HashMaps. Su hash debe ser constante."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"La consecuencia práctica del rendimiento:"})," Si concatenas en un bucle de 10,000 iteraciones con ",e.jsx("code",{className:"text-primary",children:"+"}),", creas 10,000 objetos String temporales en el heap. Por eso existe ",e.jsx("code",{className:"text-primary",children:"StringBuilder"}),": modifica un buffer interno sin crear objetos nuevos. La diferencia de rendimiento puede ser de 10x a 100x en bucles grandes."]})]}),e.jsx(S,{filename:"CrearStrings.java",code:`
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
`}),e.jsxs(F,{type:"warning",title:"String es inmutable",children:['Cada vez que "modificas" un String, se crea uno nuevo en memoria. Para muchas concatenaciones en un bucle, usa ',e.jsx("code",{className:"text-primary",children:"StringBuilder"})," (más eficiente)."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Métodos esenciales de String"}),e.jsx(S,{filename:"MetodosString.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Formatear Strings"}),e.jsx(S,{filename:"FormatearStrings.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"StringBuilder — Para concatenaciones eficientes"}),e.jsx(S,{filename:"StringBuilderEjemplo.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["En TypeScript/JavaScript, los template literals con backticks son la forma estándar de formatear strings con interpolación de variables. En Java tienes tres opciones:",e.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:'String.format("Hola %s", nombre)'})," — retorna un String formateado (similar a template literals)"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:'"Hola %s".formatted(nombre)'})," — Java 15+, mismo resultado, más fluido"]}),e.jsxs("li",{children:["Text Blocks con ",e.jsx("code",{className:"text-primary",children:'"""..."""'})," (Java 15+) — para Strings multilínea como JSON, HTML, SQL"]})]}),"Java ",e.jsx("strong",{children:"NO tiene interpolación directa"})," de variables en Strings como los backticks. Siempre necesitas ",e.jsx("code",{className:"text-primary",children:"format()"}),", concatenación con ",e.jsx("code",{className:"text-primary",children:"+"}),", o ",e.jsx("code",{className:"text-primary",children:"StringBuilder"}),"."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 6"}),e.jsx(K,{number:1,title:"Procesador de nombres",description:`Crea ProcesadorNombres.java con un método static procesarNombre(String nombreCompleto) que:
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
}`,solutionFilename:"ProcesadorNombres.java"}),e.jsx(K,{number:2,title:"Analizador de texto",description:`Crea AnalizadorTexto.java con un método static analizarTexto(String texto) que imprima:
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
}`,solutionFilename:"AnalizadorTexto.java"}),e.jsx(K,{number:3,title:"Generador de email",description:`Crea GeneradorEmail.java con un método static generarEmail(String nombre, String apellido, String empresa) que:
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
}`,solutionFilename:"GeneradorEmail.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-6: strings, inmutabilidad, metodos, StringBuilder, formateo"
git push origin main
`}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",e.jsx("strong",{className:"text-text",children:"Día 7"}),": condicionales — if/else, switch, y pattern matching."]})]})})]})}function zv(){return e.jsxs("div",{children:[e.jsx(oe,{day:7,title:"Condicionales",duration:"45 min",commitMsg:"dia-7: if-else, switch clasico y moderno, ternario"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy vas a aprender a tomar decisiones en tu código. Los condicionales son idénticos a TypeScript en su forma básica, pero Java tiene un ",e.jsx("strong",{className:"text-text",children:"switch moderno"})," muy poderoso."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"if / else if / else"}),e.jsx(S,{filename:"Condicionales.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operador Ternario"}),e.jsx(S,{filename:"Ternario.java",code:`
// Sintaxis: condición ? valorSiTrue : valorSiFalse
int edad = 20;
String resultado = (edad >= 18) ? "Mayor" : "Menor";

int a = 10, b = 20;
int mayor = (a > b) ? a : b; // 20
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"switch (clásico y moderno)"}),e.jsx(S,{filename:"SwitchEjemplo.java",code:`
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
`}),e.jsxs(se,{title:"Switch clásico vs moderno — por qué el moderno es mejor",children:[e.jsxs("p",{children:["El switch clásico tiene un problema histórico famoso: el ",e.jsx("strong",{className:"text-text",children:"fall-through"}),". Si olvidas un ",e.jsx("code",{className:"text-primary",children:"break"}),', el programa "cae" al siguiente case y lo ejecuta también, aunque su condición no coincida. Esto ha causado incontables bugs en Java, C, C++ y JavaScript.']}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Switch clásico"}),": úsalo solo si mantienes código legado en Java 13 o anterior, o si necesitas fall-through ",e.jsx("em",{children:"intencional"})," (compartir código entre cases). Siempre documenta el fall-through intencional con un comentario ",e.jsx("code",{className:"text-primary",children:"// fall-through"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Switch moderno con arrow"})," (Java 14+, estable desde Java 16):"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsx("li",{children:"No tiene fall-through — cada case es independiente automáticamente."}),e.jsxs("li",{children:["Puede usarse como ",e.jsx("em",{children:"expresión"})," (retorna un valor directamente: ",e.jsxs("code",{className:"text-primary",children:["String x = switch(...)","{","...","}"]}),")."]}),e.jsx("li",{children:"El compilador verifica exhaustividad cuando se usa con sealed classes o enums."}),e.jsxs("li",{children:["Puede tener bloques con ",e.jsx("code",{className:"text-primary",children:"yield"})," para retornar valores desde bloques complejos."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Regla simple:"})," si estás en Java 14+, siempre usa switch con arrow. Es más seguro, más expresivo, y el código es más limpio. El switch clásico es prácticamente código legado hoy en día."]})]}),e.jsxs(F,{type:"angular",children:["TypeScript no tiene switch con arrow syntax. El switch moderno de Java 14+ con ",e.jsx("code",{className:"text-primary",children:"->"})," es más limpio y seguro que el switch clásico porque no necesita ",e.jsx("code",{className:"text-primary",children:"break"}),"."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 7"}),e.jsx(K,{number:1,title:"Clasificador de IMC",description:`Crea ClasificadorIMC.java con un método static clasificar(double peso, double altura):
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
}`,solutionFilename:"ClasificadorIMC.java"}),e.jsx(K,{number:2,title:"Traductor de día con switch moderno",description:`Crea TraductorDia.java que use switch moderno (arrow syntax) para:
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
}`,solutionFilename:"TraductorDia.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-7: condicionales if-else, switch clasico y moderno, ternario"
git push origin main
`}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",e.jsx("strong",{className:"text-text",children:"Día 8"}),": bucles — for, while, do-while, for-each, break y continue."]})]})})]})}function Uv(){return e.jsxs("div",{children:[e.jsx(oe,{day:8,title:"Bucles",duration:"50 min",commitMsg:"dia-8: for, while, do-while, for-each, break, continue"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a dominar las 4 formas de repetir código en Java. Además aprenderás cuándo usar cada una — algo que muchos cursos no explican."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Bucle for"}),e.jsxs(se,{title:"¿Cuándo usar cada tipo de bucle? La guía definitiva",children:[e.jsxs("p",{children:["Elegir el bucle correcto hace que tu código sea más expresivo e intención clara. La regla es: el bucle debe comunicar ",e.jsx("em",{children:"cuándo"})," y ",e.jsx("em",{children:"por qué"})," itera."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"for clásico"}),": cuando necesitas el índice o cuando el número de iteraciones es conocido de antemano. ",e.jsx("code",{className:"text-primary",children:"for (int i = 0; i < n; i++)"}),'comunica claramente: "itero exactamente N veces". También cuando necesitas iterar de atras hacia adelante o con incrementos distintos de 1.']}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"for-each (enhanced for)"}),": cuando iteras ",e.jsx("em",{children:"todos"})," los elementos de una colección o array y no necesitas el índice ni modificar la estructura. Es la forma preferida en Java moderno. Internamente usa un ",e.jsx("code",{className:"text-primary",children:"Iterator"}),", por lo que funciona con cualquier clase que implemente ",e.jsx("code",{className:"text-primary",children:"Iterable"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"while"}),": cuando el número de iteraciones es ",e.jsx("em",{children:"desconocido"}),"hasta runtime. Ejemplos clásicos: leer líneas de un archivo hasta EOF, esperar una condición externa (conexión de red), procesar elementos de una cola hasta que esté vacía. La condición se evalúa ",e.jsx("em",{children:"antes"})," de la primera iteración — puede que el cuerpo nunca se ejecute."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"do-while"}),": igual que while pero garantiza que el cuerpo se ejecute ",e.jsx("em",{children:"al menos una vez"}),". El caso de uso más común es menús interactivos y validaciones de entrada donde debes preguntar al usuario al menos una vez. En la práctica profesional es el bucle menos usado — muchos equipos evitan do-while por claridad."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Streams (Java 8+)"}),": para muchos casos donde antes usarías un bucle para filtrar/transformar/reducir, hoy se usa la API de Streams. Lo verás en el Día 23."]})]}),e.jsx(S,{filename:"BucleFor.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"for-each (Enhanced for)"}),e.jsx(S,{filename:"ForEach.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["El for-each de Java (",e.jsx("code",{className:"text-primary",children:"for (Type item : collection)"}),") es como el ",e.jsx("code",{className:"text-primary",children:"for...of"})," de TypeScript/JavaScript."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"while y do-while"}),e.jsx(S,{filename:"While.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"break y continue"}),e.jsx(S,{filename:"BreakContinue.java",code:`
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
`}),e.jsxs(F,{type:"tip",children:["El ",e.jsx("code",{className:"text-primary",children:"break"})," con etiqueta es útil pero poco común. Si lo necesitas frecuentemente, considera refactorizar tu código en métodos separados."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 8"}),e.jsx(K,{number:1,title:"FizzBuzz",description:`El clásico FizzBuzz. Crea FizzBuzz.java que imprima los números del 1 al 30:
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
}`,solutionFilename:"FizzBuzz.java"}),e.jsx(K,{number:2,title:"Tabla de multiplicar",description:`Crea TablaMultiplicar.java que:
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
}`,solutionFilename:"TablaMultiplicar.java"}),e.jsx(K,{number:3,title:"Números primos",description:`Crea BuscadorPrimos.java con:
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
}`,solutionFilename:"BuscadorPrimos.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-8: bucles for, while, do-while, for-each, FizzBuzz, primos"
git push origin main
`}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",e.jsx("strong",{className:"text-text",children:"Día 9"}),": arrays — declaración, iteración, multidimensionales y java.util.Arrays."]})]})})]})}function Bv(){return e.jsxs("div",{children:[e.jsx(oe,{day:9,title:"Arrays",duration:"50 min",commitMsg:"dia-9: arrays, multidimensionales, java.util.Arrays"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a dominar arrays — la estructura de datos más básica de Java. Son de tamaño fijo, pero son la base para entender colecciones dinámicas después."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Declarar y crear Arrays"}),e.jsxs(se,{title:"Arrays en Java vs TypeScript — la diferencia fundamental",children:[e.jsxs("p",{children:["En TypeScript, los arrays son ",e.jsx("strong",{className:"text-text",children:"dinámicos por defecto"}),":",e.jsx("code",{className:"text-primary",children:" push()"}),", ",e.jsx("code",{className:"text-primary",children:"pop()"}),",",e.jsx("code",{className:"text-primary",children:" splice()"})," cambian el tamaño automáticamente. Bajo el capó, JavaScript reasigna memoria cuando el array crece."]}),e.jsxs("p",{children:["En Java, los arrays primitivos tienen ",e.jsx("strong",{className:"text-text",children:"tamaño fijo en tiempo de creación"}),".",e.jsx("code",{className:"text-primary",children:"new int[5]"})," reserva exactamente 5 espacios contiguos en memoria. No puedes agregar ni quitar elementos. ¿Por qué esta limitación?"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Rendimiento óptimo"}),": los arrays de tamaño fijo son la estructura de datos más rápida posible. Acceso en O(1) garantizado. Sin overhead de redimensionamiento."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Memoria predecible"}),": sabes exactamente cuánta RAM vas a usar. Importante en sistemas embebidos o cuando optimizas rendimiento."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Base de otras estructuras"}),": ",e.jsx("code",{className:"text-primary",children:"ArrayList"})," internamente usa un array que redimensiona cuando necesita. Entender arrays es entender cómo funciona ArrayList."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Error clásico — ArrayIndexOutOfBoundsException:"})," intentar acceder a un índice fuera del rango (negativo o mayor que ",e.jsx("code",{className:"text-primary",children:"length - 1"}),"). Este es un error de runtime, no de compilación — el compilador no lo detecta. Es uno de los errores más comunes en Java. Regla: el último índice válido es siempre",e.jsx("code",{className:"text-primary",children:" array.length - 1"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Cuándo usar qué:"})," Array si el tamaño es fijo y conocido (buffer de bytes, tabla de multiplicar, días de la semana). ",e.jsx("code",{className:"text-primary",children:"ArrayList"}),"cuando el número de elementos puede variar. En la práctica enterprise, usarás ",e.jsx("code",{className:"text-primary",children:"ArrayList"}),"la mayoría del tiempo."]})]}),e.jsx(S,{filename:"Arrays.java",code:`
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
`}),e.jsxs(F,{type:"warning",children:["Los arrays en Java tienen ",e.jsx("strong",{children:"tamaño fijo"}),". Una vez creados, no puedes agregar ni quitar elementos. Si necesitas una colección dinámica, usa ",e.jsx("code",{className:"text-primary",children:"ArrayList"}),"."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Arrays multidimensionales"}),e.jsx(S,{filename:"ArraysMulti.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Clase java.util.Arrays"}),e.jsx(S,{filename:"ArraysUtil.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["En TypeScript los arrays son dinámicos y tienen métodos como ",e.jsx("code",{className:"text-primary",children:".push()"}),",",e.jsx("code",{className:"text-primary",children:".map()"}),", ",e.jsx("code",{className:"text-primary",children:".filter()"}),". En Java los arrays primitivos son fijos. Para funcionalidad similar usa ",e.jsx("code",{className:"text-primary",children:"ArrayList"})," y ",e.jsx("code",{className:"text-primary",children:"Streams"}),"."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 9"}),e.jsx(K,{number:1,title:"Estadísticas de array",description:`Crea EstadisticasArray.java con métodos static que reciban un int[] y retornen:
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
}`,solutionFilename:"EstadisticasArray.java"}),e.jsx(K,{number:2,title:"Invertir array",description:`Crea InvertirArray.java con un método static invertir(int[] arr) que:
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
}`,solutionFilename:"InvertirArray.java"}),e.jsx(K,{number:3,title:"Matriz transpuesta",description:`Crea MatrizTranspuesta.java que:
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
}`,solutionFilename:"MatrizTranspuesta.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-9: arrays, multidimensionales, java.util.Arrays, invertir, transponer"
git push origin main
`}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",e.jsx("strong",{className:"text-text",children:"Día 10"}),": métodos — parámetros, retorno, overloading, varargs y paso por valor."]})]})})]})}function Pv(){return e.jsxs("div",{children:[e.jsx(oe,{day:10,title:"Métodos",duration:"50 min",commitMsg:"dia-10: metodos, overloading, varargs, paso por valor"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy vas a aprender a crear métodos — las funciones de Java. Dominar métodos es clave porque en OOP, todo el comportamiento se define con métodos."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Definir y llamar métodos"}),e.jsxs(se,{title:"Métodos en Java vs funciones en TypeScript — todo vive en una clase",children:[e.jsxs("p",{children:["En TypeScript puedes declarar funciones independientes en un archivo:",e.jsxs("code",{className:"text-primary",children:[" export function sumar(a: number, b: number): number ","{...}"]}),". En Java, ",e.jsx("strong",{className:"text-text",children:"todo método debe declararse dentro de una clase"}),". No existe el concepto de función suelta."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Anatomía de un método en Java:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"modificador"})," — ",e.jsx("code",{className:"text-primary",children:"public"}),", ",e.jsx("code",{className:"text-primary",children:"private"}),", ",e.jsx("code",{className:"text-primary",children:"protected"}),", o package-private (sin keyword). Controla quién puede llamar al método."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"static"})," (opcional) — Si está, el método pertenece a la clase y se llama como ",e.jsx("code",{className:"text-primary",children:"Clase.metodo()"}),". Sin él, pertenece a una instancia y requiere ",e.jsx("code",{className:"text-primary",children:"new"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"tipo de retorno"})," — qué tipo devuelve: ",e.jsx("code",{className:"text-primary",children:"int"}),", ",e.jsx("code",{className:"text-primary",children:"String"}),", ",e.jsx("code",{className:"text-primary",children:"void"})," (nada), etc. Es obligatorio y el compilador lo verifica."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"nombre"})," — camelCase por convención. Debe ser descriptivo: ",e.jsx("code",{className:"text-primary",children:"calcularImpuesto"}),", no ",e.jsx("code",{className:"text-primary",children:"calc"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"(parámetros)"})," — cada parámetro tiene tipo y nombre. A diferencia de TypeScript, el tipo es obligatorio."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"¿Cuándo es static y cuándo no?"})," Si el método depende del estado de un objeto específico (sus campos), no es static. Si solo trabaja con sus parámetros o es una utilidad sin estado, sí es static. En la práctica: los métodos de utilidad (",e.jsx("code",{className:"text-primary",children:"Math.sqrt()"}),", ",e.jsx("code",{className:"text-primary",children:"Arrays.sort()"}),") son static. Los métodos de negocio de un objeto (",e.jsx("code",{className:"text-primary",children:"cuenta.depositar()"}),") no lo son."]})]}),e.jsx(S,{filename:"Metodos.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["En TypeScript defines funciones con ",e.jsx("code",{className:"text-primary",children:"function"})," o arrow functions. En Java todo método debe estar dentro de una clase. ",e.jsx("code",{className:"text-primary",children:"static"})," permite llamar al método sin crear una instancia de la clase."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Sobrecarga de métodos (Overloading)"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Puedes tener varios métodos con el ",e.jsx("strong",{className:"text-text",children:"mismo nombre"})," pero",e.jsx("strong",{className:"text-text",children:" diferentes parámetros"}),"."]}),e.jsx(S,{filename:"Sobrecarga.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Varargs (argumentos variables)"}),e.jsx(S,{filename:"Varargs.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Paso por valor vs referencia"}),e.jsx(S,{filename:"PasoPorValor.java",code:`
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
`}),e.jsxs(F,{type:"info",children:["Java es siempre ",e.jsx("strong",{children:"paso por valor"}),". Este es uno de los conceptos más confusos para principiantes:",e.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Primitivos"}),": se copia el valor. El método trabaja con una copia independiente. Cambiar el parámetro no afecta al original."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objetos/Arrays"}),": se copia la ",e.jsx("em",{children:"referencia"})," (dirección de memoria). El método puede modificar el contenido del objeto porque tiene su dirección. Pero NO puede reasignar la variable original — si haces ",e.jsxs("code",{className:"text-primary",children:["arr = new int[]",99]})," dentro del método, solo cambia la copia local de la referencia."]}),e.jsx("li",{children:'Esto es idéntico al comportamiento de JavaScript/TypeScript. La confusión viene de llamarlo "por referencia" cuando en realidad es "valor de la referencia".'})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 10"}),e.jsx(K,{number:1,title:"Utilidades matemáticas",description:`Crea MathUtils.java con métodos static sobrecargados:
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
}`,solutionFilename:"MathUtils.java"}),e.jsx(K,{number:2,title:"Constructor de mensajes con varargs",description:`Crea MensajeBuilder.java con:
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
}`,solutionFilename:"MensajeBuilder.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-10: metodos, overloading, varargs, paso por valor"
git push origin main
`}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",e.jsx("strong",{className:"text-text",children:"Día 11"}),": clases y objetos — constructores, this, static, toString."]})]})})]})}function kv(){return e.jsxs("div",{children:[e.jsx(oe,{day:11,title:"Clases y Objetos",duration:"60 min",commitMsg:"dia-11: clases, objetos, constructores, this, static, equals"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy entras al corazón de Java: la Programación Orientada a Objetos. Una clase es un plano, un objeto es una instancia concreta. Dominar esto cambia tu forma de pensar en código."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es una Clase?"}),e.jsxs(se,{title:"Clase = plano. Objeto = instancia concreta. ¿Cómo pensar en esto?",children:[e.jsxs("p",{children:["Una ",e.jsx("strong",{className:"text-text",children:"clase"})," es como el molde de una galleta o el plano de una casa: define la estructura y el comportamiento, pero no es ninguna casa concreta. Un",e.jsx("strong",{className:"text-text",children:" objeto"})," es una instancia creada a partir de ese molde —",e.jsx("em",{children:"una"})," casa específica con ",e.jsx("em",{children:"su"})," dirección y ",e.jsx("em",{children:"sus"})," inquilinos."]}),e.jsxs("p",{children:["En TypeScript/Angular ya usas clases. En Java la idea es la misma: ",e.jsx("strong",{className:"text-text",children:"campos"}),"(el estado del objeto: propiedades, atributos) + ",e.jsx("strong",{className:"text-text",children:"métodos"}),"(el comportamiento: lo que puede hacer). Diferencias clave con TypeScript:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:["El constructor en Java se llama igual que la clase (",e.jsx("code",{className:"text-primary",children:"Persona(...)"}),"), no con la keyword ",e.jsx("code",{className:"text-primary",children:"constructor"}),"."]}),e.jsxs("li",{children:["Una clase pública Java ",e.jsx("strong",{className:"text-text",children:"debe"})," estar en un archivo con el mismo nombre. ",e.jsx("code",{className:"text-primary",children:"Persona"})," → ",e.jsx("code",{className:"text-primary",children:"Persona.java"}),". El compilador exige esto."]}),e.jsx("li",{children:"Puedes tener múltiples constructores con diferentes parámetros (overloading de constructores)."}),e.jsxs("li",{children:["Todos los objetos Java heredan implícitamente de ",e.jsx("code",{className:"text-primary",children:"Object"}),", igual que en TypeScript todo hereda de ",e.jsx("code",{className:"text-primary",children:"Object"}),"."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Acceso a memoria:"})," cuando haces ",e.jsx("code",{className:"text-primary",children:"Persona p = new Persona()"}),", la variable ",e.jsx("code",{className:"text-primary",children:"p"})," está en el stack y contiene la ",e.jsx("em",{children:"dirección"})," del objeto. El objeto en sí (sus campos) está en el heap. Cuando el método termina, la variable en el stack desaparece pero el objeto en el heap persiste hasta que el GC lo recolecta."]})]}),e.jsx(S,{filename:"Persona.java",code:`
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
`}),e.jsx(S,{filename:"Main.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["En TypeScript/Angular defines clases igual con ",e.jsx("code",{className:"text-primary",children:"class"}),". La diferencia principal es que Java requiere un archivo por clase pública y el constructor se llama con el nombre de la clase (no ",e.jsx("code",{className:"text-primary",children:"constructor()"}),")."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"this, static y final"}),e.jsx(S,{filename:"Conceptos.java",code:`
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
`}),e.jsxs(F,{type:"info",children:[e.jsx("strong",{children:"static"}),": pertenece a la clase, no a una instancia. Existe desde que la clase se carga, sin necesitar un ",e.jsx("code",{className:"text-primary",children:"new"}),". Se accede como",e.jsx("code",{className:"text-primary",children:" Clase.campo"})," o ",e.jsx("code",{className:"text-primary",children:"Clase.metodo()"}),".",e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"this"}),": referencia a la instancia actual del objeto. Lo usas cuando hay ambigüedad entre un campo y un parámetro con el mismo nombre (",e.jsx("code",{className:"text-primary",children:"this.nombre = nombre"}),"), o cuando quieres llamar a otro constructor de la misma clase (",e.jsx("code",{className:"text-primary",children:"this()"}),").",e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"final en campo de instancia"}),": un campo ",e.jsx("code",{className:"text-primary",children:"final"})," debe inicializarse en el constructor. Una vez asignado, no puede cambiar. Esto crea objetos inmutables (como los Records de Java 16+)."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Getters, Setters y equals"}),e.jsx(S,{filename:"Producto.java",code:`
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
`}),e.jsxs(F,{type:"warning",children:["El contrato ",e.jsx("code",{className:"text-primary",children:"equals()"})," / ",e.jsx("code",{className:"text-primary",children:"hashCode()"}),"es fundamental en Java:",e.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[e.jsxs("li",{children:["Si ",e.jsx("code",{className:"text-primary",children:"a.equals(b)"})," es ",e.jsx("code",{className:"text-primary",children:"true"}),", entonces ",e.jsx("code",{className:"text-primary",children:"a.hashCode() == b.hashCode()"})," debe ser ",e.jsx("code",{className:"text-primary",children:"true"})," también."]}),e.jsxs("li",{children:["Si rompes este contrato (overrides equals pero no hashCode), las colecciones como ",e.jsx("code",{className:"text-primary",children:"HashMap"})," y ",e.jsx("code",{className:"text-primary",children:"HashSet"})," funcionarán incorrectamente: objetos iguales pueden aparecer duplicados o no encontrarse."]}),e.jsxs("li",{children:["IntelliJ puede generar ambos automáticamente: ",e.jsx("code",{className:"text-primary",children:"Alt+Insert → equals() and hashCode()"}),"."]}),e.jsx("li",{children:"Alternativa moderna: usa Records (Java 16+) que generan equals/hashCode/toString automáticamente."})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 11"}),e.jsx(K,{number:1,title:"Clase CuentaBancaria",description:`Crea CuentaBancaria.java con:
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
}`,solutionFilename:"CuentaBancaria.java"}),e.jsx(K,{number:2,title:"Contador con static",description:`Crea Estudiante.java con:
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
}`,solutionFilename:"Estudiante.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-11: clases, objetos, constructores, this, static, getters, equals"
git push origin main
`}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",e.jsx("strong",{className:"text-text",children:"Día 12"}),": encapsulamiento — modificadores de acceso, validación en setters."]})]})})]})}function _v(){return e.jsxs("div",{children:[e.jsx(oe,{day:12,title:"Encapsulamiento",duration:"45 min",commitMsg:"dia-12: encapsulamiento, modificadores de acceso, getters/setters"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy vas a aprender ",e.jsx("strong",{className:"text-text",children:"encapsulamiento"}),' — el principio de OOP que dice: "esconde los detalles internos y expone solo lo necesario". Es la diferencia entre código frágil que se rompe cuando alguien modifica un campo directamente, y código robusto que protege su estado.']}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Modificadores de Acceso"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Los modificadores de acceso controlan ",e.jsx("strong",{className:"text-text",children:"quién puede ver y usar"})," tus campos y métodos. Java tiene 4 niveles, de más restrictivo a más permisivo: ",e.jsx("code",{className:"text-primary",children:"private"}),", (default/package), ",e.jsx("code",{className:"text-primary",children:"protected"}),", ",e.jsx("code",{className:"text-primary",children:"public"}),"."]}),e.jsxs(se,{title:"¿Por qué no hacer todo public? El principio de mínima exposición",children:[e.jsxs("p",{children:["En TypeScript/JavaScript, las propiedades de un objeto son públicas por defecto. En Java, la filosofía es opuesta: ",e.jsx("strong",{className:"text-text",children:"esconde todo lo que no necesites exponer"}),". Esto se llama ",e.jsx("em",{children:"Principio de Mínima Exposición"})," y es uno de los pilares del buen diseño."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"El problema de los campos públicos:"})," imagina",e.jsx("code",{className:"text-primary",children:" CuentaBancaria"})," con ",e.jsx("code",{className:"text-primary",children:"public double saldo"}),". Cualquier código puede hacer ",e.jsx("code",{className:"text-primary",children:"cuenta.saldo = -99999"}),' y tu regla de negocio de "no permitir saldo negativo" no sirve de nada. Pero con',e.jsx("code",{className:"text-primary",children:"private double saldo"})," y un método",e.jsx("code",{className:"text-primary",children:"retirar(monto)"}),", ",e.jsx("em",{children:"tú controlas"})," que el saldo solo cambia por caminos controlados con validaciones."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Cada nivel tiene su propósito:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"private"}),": implementación interna que nadie más necesita ver. Campos, métodos auxiliares."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"package-private"})," (sin keyword): para clases del mismo módulo que colaboran entre sí pero no deben ser visibles afuera."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"protected"}),": para subclases. Úsalo cuando una clase hija necesita acceder al campo o método del padre, pero no quieres que cualquiera lo haga."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"public"}),": la API que expones al mundo. Piensa bien qué pones aquí — una vez que es público, cambiar esa API rompe el código de todos los que la usen."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Regla de oro en Spring:"})," en una aplicación Spring Boot profesional, las entidades tienen campos ",e.jsx("code",{className:"text-primary",children:"private"})," con getters/setters. Los servicios tienen métodos ",e.jsx("code",{className:"text-primary",children:"public"})," para su API y",e.jsx("code",{className:"text-primary",children:"private"})," para lógica interna. Los repositorios extienden interfaces públicas. Nunca verás campos públicos en código enterprise profesional."]})]}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"w-full text-sm text-text-muted",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border",children:[e.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Modificador"}),e.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Misma clase"}),e.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Mismo paquete"}),e.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Subclase"}),e.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Cualquiera"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"public"}),e.jsx("td",{className:"py-2 px-3",children:"✅"}),e.jsx("td",{className:"py-2 px-3",children:"✅"}),e.jsx("td",{className:"py-2 px-3",children:"✅"}),e.jsx("td",{className:"py-2 px-3",children:"✅"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"protected"}),e.jsx("td",{className:"py-2 px-3",children:"✅"}),e.jsx("td",{className:"py-2 px-3",children:"✅"}),e.jsx("td",{className:"py-2 px-3",children:"✅"}),e.jsx("td",{className:"py-2 px-3",children:"❌"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"(default)"}),e.jsx("td",{className:"py-2 px-3",children:"✅"}),e.jsx("td",{className:"py-2 px-3",children:"✅"}),e.jsx("td",{className:"py-2 px-3",children:"❌"}),e.jsx("td",{className:"py-2 px-3",children:"❌"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"private"}),e.jsx("td",{className:"py-2 px-3",children:"✅"}),e.jsx("td",{className:"py-2 px-3",children:"❌"}),e.jsx("td",{className:"py-2 px-3",children:"❌"}),e.jsx("td",{className:"py-2 px-3",children:"❌"})]})]})]})})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Encapsulamiento en práctica"}),e.jsx(S,{filename:"CuentaBancaria.java",code:`
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
`}),e.jsx(S,{filename:"UsoCuenta.java",code:`
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
`}),e.jsxs(F,{type:"tip",title:"¿Por qué encapsular?",children:[e.jsx("strong",{children:"1."})," Proteges los datos de modificaciones no controladas."," ",e.jsx("strong",{children:"2."})," Puedes agregar validación en setters."," ",e.jsx("strong",{children:"3."})," Puedes cambiar la implementación interna sin afectar el código que usa tu clase."," ",e.jsx("strong",{children:"4."})," Es el principio fundamental de OOP."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 12"}),e.jsx(K,{number:1,title:"Clase Producto encapsulada",description:`Crea Producto.java con:
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
}`,solutionFilename:"Producto.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-12: encapsulamiento, modificadores de acceso, validacion en setters"
git push origin main
`}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",e.jsx("strong",{className:"text-text",children:"Día 13"}),": herencia — extends, super, @Override, clases abstractas."]})]})})]})}function Hv(){return e.jsxs("div",{children:[e.jsx(oe,{day:13,title:"Herencia",duration:"60 min",commitMsg:"dia-13: herencia, extends, super, override, clases abstractas"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy aprenderás ",e.jsx("strong",{className:"text-text",children:"herencia"})," — el mecanismo de OOP que permite crear nuevas clases basadas en clases existentes. La clase hija hereda campos y métodos del padre, y puede agregar nuevos o sobrescribir los heredados para cambiar su comportamiento."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"extends — Heredar de una clase"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Cuando una clase ",e.jsx("code",{className:"text-primary",children:"extends"})," otra, hereda automáticamente todos sus campos y métodos (excepto los privados, que existen pero no son accesibles directamente). La clase hija puede usar ",e.jsx("code",{className:"text-primary",children:"super"})," para llamar al constructor y métodos del padre, y ",e.jsx("code",{className:"text-primary",children:"@Override"})," para reemplazar el comportamiento de un método heredado."]}),e.jsxs(se,{title:"Herencia = 'es un'. Cuándo usarla y cuándo no",children:[e.jsxs("p",{children:["La prueba para saber si herencia es correcta se llama ",e.jsx("strong",{className:"text-text",children:'prueba "es un"'}),": ¿tiene sentido decir que la clase hija ES UN tipo del padre en toda circunstancia?"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"Perro"})," es un ",e.jsx("code",{className:"text-primary",children:"Animal"})," → ✅ siempre es verdad"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"Empleado"})," es una ",e.jsx("code",{className:"text-primary",children:"Persona"})," → ✅ correcto"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"Motor"})," es un ",e.jsx("code",{className:"text-primary",children:"Auto"})," → ❌ un Motor es PARTE de un Auto (composición)"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"Pila"})," extiende ",e.jsx("code",{className:"text-primary",children:"Vector"})," → ❌ (error histórico en Java estándar)"]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Java solo permite herencia simple"}),': una clase puede extender exactamente una clase padre. Esto evita el "diamond problem" de C++ donde una clase hereda de dos padres que comparten un abuelo común y hay ambigüedad sobre qué método usar. Para múltiples capacidades, Java usa interfaces.']}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Composición sobre herencia"})," (principio moderno): en lugar de extender una clase para reusar funcionalidad, incluye un objeto de esa clase como campo. Por ejemplo, en vez de",e.jsx("code",{className:"text-primary",children:" Empleado extends Persona"}),", puedes tener",e.jsxs("code",{className:"text-primary",children:[" class Empleado ","{"," private Persona persona; ","}"]}),". La ventaja: puedes cambiar la implementación interna sin afectar la jerarquía, y no estás atado a la API del padre. En Spring Boot, la composición es mucho más común que la herencia."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Cuándo SÍ usar herencia:"})," cuando hay una jerarquía natural y estable (formas geométricas, tipos de cuenta bancaria, animales), cuando quieres compartir comportamiento concreto entre subclases, o cuando usas el patrón Template Method."]})]}),e.jsx(S,{filename:"Herencia.java",code:`
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
`}),e.jsx(S,{filename:"Main.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"super y @Override"}),e.jsx(S,{filename:"SuperYOverride.java",code:`
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
`}),e.jsxs(F,{type:"warning",children:["Java solo permite ",e.jsx("strong",{children:"herencia simple"}),": una clase solo puede extender UNA clase padre. No existe herencia múltiple de clases (pero sí puedes implementar múltiples interfaces)."]}),e.jsxs(F,{type:"angular",children:["TypeScript también usa ",e.jsx("code",{className:"text-primary",children:"extends"})," para herencia y tiene la misma limitación de herencia simple. La diferencia es que Java tiene ",e.jsx("code",{className:"text-primary",children:"@Override"})," como anotación explícita y ",e.jsx("code",{className:"text-primary",children:"super"})," funciona igual."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Clases Abstractas"}),e.jsx(S,{filename:"ClaseAbstracta.java",code:`
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
`}),e.jsxs(F,{type:"tip",children:["Usa clases abstractas cuando quieras definir un ",e.jsx("strong",{children:"comportamiento común"})," + obligar a las subclases a implementar ciertos métodos. Es un punto medio entre una clase normal y una interfaz."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 13"}),e.jsx(K,{number:1,title:"Jerarquía de empleados",description:`Crea una jerarquía:
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
}`,solutionFilename:"Empleado.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-13: herencia, extends, super, override, clases abstractas"
git push origin main
`}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",e.jsx("strong",{className:"text-text",children:"Día 14"}),": polimorfismo — upcasting, downcasting, instanceof, pattern matching."]})]})})]})}function Iv(){return e.jsxs("div",{children:[e.jsx(oe,{day:14,title:"Polimorfismo",duration:"50 min",commitMsg:"dia-14: polimorfismo, upcasting, downcasting, instanceof"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy entenderás el concepto más poderoso de la Programación Orientada a Objetos: el ",e.jsx("strong",{className:"text-text",children:"polimorfismo"}),". Significa que un mismo método se comporta de forma diferente según el tipo real del objeto que lo ejecuta. Es lo que permite que frameworks como Spring Boot funcionen con código extensible y desacoplado."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es el Polimorfismo?"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["La palabra viene del griego: ",e.jsx("strong",{className:"text-text",children:'"poli"'})," (muchos) + ",e.jsx("strong",{className:"text-text",children:'"morfo"'})," (formas). En programación significa que una variable de tipo padre puede contener un objeto de cualquier tipo hijo, y al llamar un método, Java ejecuta la versión del ",e.jsx("strong",{className:"text-text",children:"tipo real del objeto"})," (no de la variable). Esto se decide en runtime — se llama ",e.jsx("strong",{className:"text-text",children:"dynamic dispatch"})," o ",e.jsx("strong",{className:"text-text",children:"late binding"}),"."]}),e.jsxs(se,{title:"¿Por qué el polimorfismo es el pilar de la extensibilidad?",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Dynamic dispatch"})," (despacho dinámico): cuando llamas",e.jsx("code",{className:"text-primary",children:" animal.comer()"}),", Java no decide en compilación qué método ejecutar. Lo decide en ",e.jsx("em",{children:"runtime"})," basándose en el tipo real del objeto en memoria. Aunque la variable sea de tipo ",e.jsx("code",{className:"text-primary",children:"Animal"}),", si el objeto real es un ",e.jsx("code",{className:"text-primary",children:"Perro"}),", se ejecuta ",e.jsx("code",{className:"text-primary",children:"Perro.comer()"}),". Esto se llama ",e.jsx("strong",{className:"text-text",children:"late binding"}),"."]}),e.jsxs("p",{children:["Imagina un método ",e.jsx("code",{className:"text-primary",children:"alimentar(Animal animal)"}),". Puedes pasarle un Perro, un Gato, un Pájaro — cualquier subtipo de Animal. El método funciona correctamente para todos sin importar el tipo concreto. Ahora agregas ",e.jsx("code",{className:"text-primary",children:"Tortuga"}),": el método",e.jsx("code",{className:"text-primary",children:" alimentar()"})," funciona automáticamente sin ningún cambio. Esto es el principio ",e.jsx("strong",{className:"text-text",children:"Open/Closed"})," del SOLID en acción."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Upcasting y downcasting:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Upcasting"})," (implícito, siempre seguro): ",e.jsx("code",{className:"text-primary",children:"Animal a = new Perro()"})," — tratas al Perro como Animal. Pierdes acceso a los métodos específicos de Perro."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Downcasting"})," (explícito, puede fallar): ",e.jsx("code",{className:"text-primary",children:"Perro p = (Perro) a"})," — recuperas acceso a los métodos de Perro. Si el objeto real NO es un Perro, lanza ",e.jsx("code",{className:"text-primary",children:"ClassCastException"})," en runtime."]}),e.jsxs("li",{children:["Usa siempre ",e.jsx("code",{className:"text-primary",children:"instanceof"})," antes de hacer downcast. En Java 16+, usa pattern matching: ",e.jsxs("code",{className:"text-primary",children:["if (a instanceof Perro p) ","{"," p.ladrar(); ","}"]})]})]}),e.jsxs("p",{children:["En Spring Boot: Spring inyecta una implementación concreta (",e.jsx("code",{className:"text-primary",children:"ProductoServiceImpl"}),") en una variable del tipo interfaz (",e.jsx("code",{className:"text-primary",children:"ProductoService"}),"). Esto es upcasting en acción. El controller no sabe ni le importa qué implementación concreta recibe."]})]}),e.jsx(S,{filename:"Polimorfismo.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Casting de objetos"}),e.jsx(S,{filename:"CastingObjetos.java",code:`
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
`}),e.jsxs(F,{type:"tip",children:["Siempre verifica con ",e.jsx("code",{className:"text-primary",children:"instanceof"})," antes de hacer downcasting. El pattern matching de Java 16+ combina la verificación y el cast en una sola línea."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 14"}),e.jsx(K,{number:1,title:"Sistema de pagos polimórfico",description:`Crea una jerarquía de pagos:
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
}`,solutionFilename:"MetodoPago.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:`
git add .
git commit -m "dia-14: polimorfismo, upcasting, downcasting, instanceof"
git push origin main
`}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana en el ",e.jsx("strong",{className:"text-text",children:"Día 15"}),": interfaces — contratos, default methods, implementación múltiple."]})]})})]})}function Jv(){return e.jsxs("div",{children:[e.jsx(oe,{day:15,title:"Interfaces",duration:"50 min",commitMsg:"dia-15: interfaces, default methods, funcionales, lambdas intro"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy aprenderás interfaces — el mecanismo de Java para definir contratos que las clases deben cumplir. A diferencia de la herencia (solo UNA clase padre), puedes implementar ",e.jsx("strong",{className:"text-text",children:"múltiples"})," interfaces. Son la base de la inyección de dependencias en Spring Boot."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es una Interface?"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Una interface define ",e.jsx("strong",{className:"text-text",children:"qué"})," debe hacer una clase, pero no ",e.jsx("strong",{className:"text-text",children:"cómo"}),'. Es un contrato: "si implementas esta interface, DEBES tener estos métodos". Cualquier clase que implemente la interface garantiza que puede hacer esas operaciones, sin importar cómo las implemente internamente.']}),e.jsxs(se,{title:"Interface = contrato de capacidades, no de identidad",children:[e.jsxs("p",{children:["En TypeScript, las interfaces son contratos estructurales — definen la ",e.jsx("em",{children:"forma"})," de un objeto. En Java, las interfaces son contratos de ",e.jsx("em",{children:"comportamiento"}),": declaran qué un objeto",e.jsx("strong",{className:"text-text",children:" puede hacer"}),", no qué ",e.jsx("em",{children:"es"}),"."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Evolución de las interfaces en Java:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Java 7 y anterior"}),": solo constantes (",e.jsx("code",{className:"text-primary",children:"public static final"}),") y métodos abstractos. Una interface era puramente un contrato sin ninguna implementación."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Java 8"}),": se añadieron ",e.jsx("code",{className:"text-primary",children:"default"})," methods (con implementación) y ",e.jsx("code",{className:"text-primary",children:"static"})," methods. Esto permitió añadir métodos a interfaces existentes sin romper todas sus implementaciones — algo que antes era imposible."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Java 9+"}),": se añadieron métodos ",e.jsx("code",{className:"text-primary",children:"private"})," en interfaces para compartir código entre default methods sin exponerlo."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"¿Por qué interfaces son fundamentales en Spring Boot?"}),"La Inyección de Dependencias de Spring trabaja principalmente con interfaces. Tu ",e.jsx("code",{className:"text-primary",children:"ProductoController"})," depende de",e.jsx("code",{className:"text-primary",children:" ProductoService"})," (interface). Spring inyecta ",e.jsx("code",{className:"text-primary",children:"ProductoServiceImpl"})," en runtime. Si mañana necesitas una implementación diferente (mock para tests, caché distinto), cambias solo la implementación sin tocar el controller. Esto es el principio",e.jsx("strong",{className:"text-text",children:" Abierto/Cerrado"})," del SOLID."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Interfaces funcionales"})," (Java 8+): una interface con exactamente un método abstracto. Se pueden implementar con una lambda. ",e.jsx("code",{className:"text-primary",children:"@FunctionalInterface"}),"marca esta intención y hace que el compilador verifique que solo hay un método abstracto."]})]}),e.jsx(S,{filename:"Volable.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["Las interfaces de Java son como las de TypeScript pero con una diferencia clave: en Java pueden tener métodos ",e.jsx("code",{className:"text-primary",children:"default"})," con implementación y métodos ",e.jsx("code",{className:"text-primary",children:"static"}),". En TS las interfaces son solo contratos de tipos."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Interfaces funcionales"}),e.jsx(S,{filename:"InterfazFuncional.java",code:`
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
`}),e.jsxs(F,{type:"tip",children:[e.jsx("code",{className:"text-primary",children:"@FunctionalInterface"})," es opcional pero recomendada. Le dice al compilador que la interfaz debe tener exactamente un método abstracto. Son la base de las lambdas y Streams en Java."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Interface vs Clase abstracta"}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"w-full text-sm text-text-muted",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border",children:[e.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Característica"}),e.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Interface"}),e.jsx("th",{className:"text-left py-3 px-3 text-text",children:"Clase Abstracta"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3",children:"Múltiple herencia"}),e.jsx("td",{className:"py-2 px-3",children:"Sí (implements A, B)"}),e.jsx("td",{className:"py-2 px-3",children:"No (solo un extends)"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3",children:"Campos de instancia"}),e.jsx("td",{className:"py-2 px-3",children:"No (solo constantes)"}),e.jsx("td",{className:"py-2 px-3",children:"Sí"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3",children:"Constructores"}),e.jsx("td",{className:"py-2 px-3",children:"No"}),e.jsx("td",{className:"py-2 px-3",children:"Sí"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3",children:"Métodos con cuerpo"}),e.jsx("td",{className:"py-2 px-3",children:"Solo default/static"}),e.jsx("td",{className:"py-2 px-3",children:"Sí"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 px-3",children:"Uso típico"}),e.jsx("td",{className:"py-2 px-3",children:"Definir capacidades"}),e.jsx("td",{className:"py-2 px-3",children:"Compartir código base"})]})]})]})})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 15"}),e.jsx(K,{number:1,title:"Sistema de notificaciones",description:`Crea interfaces Notificable con método enviar(String mensaje):
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
}`,solutionFilename:"Notificable.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-15: interfaces, default methods, funcionales"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 16"})," — clases abstractas en profundidad."]})]})})]})}function Fv(){return e.jsxs("div",{children:[e.jsx(oe,{day:16,title:"Clases Abstractas",duration:"45 min",commitMsg:"dia-16: clases abstractas, template method pattern"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy profundizamos en clases abstractas — el punto medio entre una clase concreta y una interfaz. Una clase abstracta puede tener campos con estado, constructores, métodos con implementación completa, Y métodos abstractos que las subclases deben implementar obligatoriamente."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es una clase abstracta?"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Una clase abstracta es una clase que ",e.jsx("strong",{className:"text-text",children:"no se puede instanciar directamente"}),"(no puedes hacer ",e.jsx("code",{className:"text-primary",children:"new Figura()"}),'). Existe solo para ser heredada. Define un "contrato parcial": parte del código ya está implementado (métodos concretos), y parte queda pendiente para que las subclases lo completen (métodos abstractos marcados con ',e.jsx("code",{className:"text-primary",children:"abstract"}),")."]}),e.jsxs(se,{title:"Abstracta vs Interface — la guía definitiva para elegir",children:[e.jsx("p",{children:"Esta es una de las decisiones de diseño más comunes en Java. La regla mental:"}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Clase abstracta"}),": cuando las subclases comparten ",e.jsx("em",{children:"estado"})," (campos) y ",e.jsx("em",{children:"código concreto"})," además del comportamiento abstracto. Ejemplo: todas las figuras tienen un color y un método ",e.jsx("code",{className:"text-primary",children:"mostrarInfo()"})," idéntico. Solo cambia cómo se calcula el área."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Interface"}),": cuando defines una ",e.jsx("em",{children:"capacidad"})," que clases no relacionadas pueden tener. ",e.jsx("code",{className:"text-primary",children:"Serializable"})," lo puede implementar un Pato, un Documento, y un Número — sin relación entre sí."]})]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Diferencias técnicas clave:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:["Una clase solo puede extender ",e.jsx("strong",{className:"text-text",children:"una"})," clase abstracta, pero implementar ",e.jsx("strong",{className:"text-text",children:"múltiples"})," interfaces."]}),e.jsx("li",{children:"Las clases abstractas pueden tener campos de instancia, constructores, y métodos concretos. Las interfaces (hasta Java 7) solo podían tener constantes y métodos abstractos."}),e.jsxs("li",{children:["Desde Java 8, las interfaces tienen ",e.jsx("code",{className:"text-primary",children:"default"})," methods con implementación. Esto acerca las interfaces a las clases abstractas, pero la diferencia principal persiste: las interfaces no tienen estado (no pueden tener campos de instancia)."]}),e.jsxs("li",{children:["Las interfaces son ideales para el ",e.jsx("strong",{className:"text-text",children:"Patrón Estrategia"})," y la inyección de dependencias en Spring Boot."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Cuándo es difícil elegir:"}),' si tu "clase abstracta" no tiene ningún campo ni código concreto, probablemente debería ser una interface. Si tu interface necesita guardar estado entre llamadas, probablemente debería ser una clase abstracta.']}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Patrón Template Method"})," (el patrón natural de las clases abstractas): define el ",e.jsx("em",{children:"esqueleto"})," de un algoritmo en la clase padre con pasos abstractos que cada hijo completa. El padre controla el flujo, los hijos aportan los detalles. Muy común en frameworks."]})]}),e.jsx(S,{filename:"Figura.java",code:`
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
`}),e.jsx(S,{filename:"Main.java",code:`
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
`}),e.jsxs(F,{type:"tip",children:["Usa clases abstractas cuando necesites ",e.jsx("strong",{children:"compartir código"})," entre clases relacionadas y al mismo tiempo obligar a implementar ciertos métodos. Si solo necesitas definir un contrato sin compartir código, usa una ",e.jsx("strong",{children:"interfaz"}),"."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 16"}),e.jsx(K,{number:1,title:"Template Method con Bebida",description:`Crea una clase abstracta Bebida con un template method preparer():
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
}`,solutionFilename:"Bebida.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-16: clases abstractas, template method pattern"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 17"})," — colecciones: List, Set, Map y la revolución dinámica."]})]})})]})}function Vv(){return e.jsxs("div",{children:[e.jsx(oe,{day:17,title:"Colecciones",duration:"60 min",commitMsg:"dia-17: ArrayList, HashMap, HashSet, List.of, Map.of"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy pasas de arrays (tamaño fijo) a colecciones dinámicas. ",e.jsx("code",{className:"text-primary",children:"List"}),",",e.jsx("code",{className:"text-primary",children:" Set"})," y ",e.jsx("code",{className:"text-primary",children:"Map"})," son las estructuras de datos que usarás el 90% del tiempo en Java profesional. Son como los arrays y objetos de TypeScript, pero con tipos específicos para cada necesidad."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"ArrayList — Lista dinámica ordenada"}),e.jsxs(se,{title:"El framework de colecciones: elegir la estructura correcta importa",children:[e.jsxs("p",{children:["Java organiza sus colecciones en ",e.jsx("strong",{className:"text-text",children:"interfaces y sus implementaciones"}),". La regla de oro: ",e.jsx("em",{children:"declara el tipo como interfaz, crea con la implementación"}),":",e.jsx("code",{className:"text-primary",children:" List<String> lista = new ArrayList<>()"}),". Así puedes cambiar la implementación sin tocar el código que la usa."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"¿Cuál estructura usar?"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"ArrayList"}),": acceso por índice O(1), inserción al final O(1) amortizado. Internamente es un array que se duplica cuando se llena. Úsalo cuando necesites orden y acceso rápido por posición."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"LinkedList"}),": inserción/eliminación al inicio/final O(1), pero acceso por índice O(n). Úsalo cuando insertes/elimines frecuentemente en los extremos."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"HashSet"}),": contiene/agrega/elimina en O(1) promedio. Sin orden. Internamente usa un HashMap. Úsalo para verificar existencia y eliminar duplicados."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"HashMap"}),": búsqueda por clave O(1) promedio. Calcula el hash de la clave para encontrar el bucket. Requiere que las claves implementen correctamente ",e.jsx("code",{className:"text-primary",children:"equals()"})," y ",e.jsx("code",{className:"text-primary",children:"hashCode()"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"TreeMap / TreeSet"}),": ordenados por clave natural o Comparator. O(log n) para todas las operaciones. Úsalos cuando necesites el orden de las claves."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"En Spring Boot"})," usarás ",e.jsx("code",{className:"text-primary",children:"List"})," para retornar listas de entidades, ",e.jsx("code",{className:"text-primary",children:"Map"})," para respuestas dinámicas, y ",e.jsx("code",{className:"text-primary",children:"Set"})," para relaciones ManyToMany en JPA."]})]}),e.jsx(S,{filename:"ListaEjemplo.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"HashMap — Diccionario clave-valor"}),e.jsx(S,{filename:"MapaEjemplo.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"HashSet — Conjunto sin duplicados"}),e.jsx(S,{filename:"SetEjemplo.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["En TypeScript usas arrays y objetos/Map. En Java hay una jerarquía completa de colecciones:",e.jsx("strong",{children:" List"})," (ordenada, con duplicados), ",e.jsx("strong",{children:"Set"})," (sin duplicados),",e.jsx("strong",{children:" Map"})," (clave-valor), ",e.jsx("strong",{children:"Queue"})," (FIFO). Todas son tipadas con generics."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 17"}),e.jsx(K,{number:1,title:"Contador de palabras con Map",description:`Crea ContadorPalabras.java que:
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
}`,solutionFilename:"ContadorPalabras.java"}),e.jsx(K,{number:2,title:"Agenda de contactos",description:`Crea Agenda.java con:
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
}`,solutionFilename:"Agenda.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-17: colecciones ArrayList, HashMap, HashSet"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 18"})," — excepciones: try-catch, throw, custom exceptions."]})]})})]})}function Gv(){return e.jsxs("div",{children:[e.jsx(oe,{day:18,title:"Excepciones",duration:"50 min",commitMsg:"dia-18: try-catch, throw, custom exceptions, try-with-resources"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy dominarás el manejo de errores en Java. A diferencia de TypeScript donde capturar errores es totalmente opcional, Java tiene un sistema de excepciones donde el compilador te ",e.jsx("strong",{className:"text-text",children:"obliga"}),"a pensar en qué puede fallar y cómo manejar cada caso."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"El sistema de excepciones de Java"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["En Java, cuando algo sale mal, se lanza (throw) una ",e.jsx("strong",{className:"text-text",children:"excepción"})," — un objeto que describe el error. El flujo del programa se interrumpe y busca un bloque ",e.jsx("code",{className:"text-primary",children:"catch"}),"que pueda manejar ese tipo de error. Si no lo encuentra, el programa se detiene con un stack trace."]}),e.jsxs(se,{title:"Checked vs Unchecked — la diferencia que nadie explica bien",children:[e.jsxs("p",{children:["En TypeScript/JavaScript, todos los errores son ",e.jsx("em",{children:"opcionales"})," de manejar. El compilador no te dice nada si ignoras un posible fallo. Java tiene una filosofía diferente con dos categorías de excepciones con comportamientos muy distintos:"]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Checked exceptions"})," (heredan de ",e.jsx("code",{className:"text-primary",children:"Exception"}),"pero NO de ",e.jsx("code",{className:"text-primary",children:"RuntimeException"}),"): el compilador te ",e.jsx("em",{children:"obliga"}),"a manejarlas. O las capturas con ",e.jsx("code",{className:"text-primary",children:"try-catch"}),", o declaras que tu método las propaga con ",e.jsx("code",{className:"text-primary",children:"throws"}),". Si no haces ninguna, el código no compila. Representan condiciones externas imprevisibles pero recuperables:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"IOException"})," — archivo no encontrado, disco lleno, permisos"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"SQLException"})," — error de base de datos"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"ParseException"})," — formato de fecha inválido"]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Unchecked exceptions"})," (heredan de ",e.jsx("code",{className:"text-primary",children:"RuntimeException"}),"): opcionales de capturar. Representan ",e.jsx("em",{children:"bugs de programación"})," que no deberían existir si el código está bien escrito. Capturarlas con try-catch generalmente oculta el problema real:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"NullPointerException"})," — usaste un objeto sin verificar que no es null"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"ArrayIndexOutOfBoundsException"})," — accediste fuera del rango"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"ClassCastException"})," — cast inválido"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"IllegalArgumentException"})," — argumento inválido pasado a un método"]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Debate moderno:"})," muchos desarrolladores Java (incluyendo la comunidad Spring Boot) prefieren usar solo excepciones unchecked en sus propias APIs. Checked exceptions tienen una desventaja: al propagarse fuerzan a todos los intermediarios a declararlas en su firma, contaminando las interfaces. Spring Boot siempre usa unchecked (como ",e.jsx("code",{className:"text-primary",children:"DataAccessException"})," que envuelve SQLException)."]})]}),e.jsx(S,{filename:"Excepciones.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"throw y throws"}),e.jsx(S,{filename:"ThrowEjemplo.java",code:`
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
`}),e.jsxs(F,{type:"info",children:[e.jsx("strong",{children:"Checked exceptions"})," (heredan de Exception): el compilador te obliga a manejarlas con try-catch o declararlas con throws.",e.jsx("strong",{children:" Unchecked exceptions"})," (heredan de RuntimeException): no requieren manejo explícito (NullPointer, ArrayIndex, etc.)."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"try-with-resources (Java 7+)"}),e.jsx(S,{filename:"TryWithResources.java",code:`
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
`}),e.jsx(F,{type:"angular",children:"TypeScript no tiene checked exceptions. En Java, el compilador te fuerza a manejar ciertas excepciones. Es más estricto pero previene errores no manejados en producción."})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 18"}),e.jsx(K,{number:1,title:"Validador con excepciones personalizadas",description:`Crea un sistema de validación:
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
}`,solutionFilename:"Validador.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-18: excepciones, try-catch, custom exceptions"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 19"})," — Generics: tipos paramétricos, bounded types, wildcards."]})]})})]})}function Yv(){return e.jsxs("div",{children:[e.jsx(oe,{day:19,title:"Generics",duration:"55 min",commitMsg:"dia-19: generics, clases genericas, bounded types, wildcards"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás Generics — el sistema de tipos paramétricos de Java que te permite escribir código reutilizable y type-safe. Son fundamentales para colecciones, Spring Data, y cualquier código que trabaje con tipos variados sin perder seguridad de tipos."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué son los Generics y por qué importan?"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Sin generics, una lista solo podría almacenar ",e.jsx("code",{className:"text-primary",children:"Object"})," y necesitarías hacer casting manual cada vez que sacas un elemento — propenso a errores en runtime. Con generics, declaras ",e.jsx("code",{className:"text-primary",children:"List<String>"})," y el compilador garantiza que solo entran Strings. Si intentas meter un Integer, el error aparece al compilar, no al ejecutar."]}),e.jsxs(se,{title:"Generics = TypeScript generics, pero con type erasure en runtime",children:[e.jsxs("p",{children:["En TypeScript los generics desaparecen en el JavaScript resultante. En Java ocurre exactamente lo mismo: se llama ",e.jsx("strong",{className:"text-text",children:"type erasure"})," (borrado de tipos). El compilador verifica los tipos genéricos en compilación, pero al generar bytecode los reemplaza por",e.jsx("code",{className:"text-primary",children:" Object"})," (o el bound si hay uno). En runtime,",e.jsx("code",{className:"text-primary",children:"List<String>"})," y ",e.jsx("code",{className:"text-primary",children:"List<Integer>"}),"son la misma clase ",e.jsx("code",{className:"text-primary",children:"List"}),"."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Consecuencias prácticas del type erasure:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:["No puedes hacer ",e.jsx("code",{className:"text-primary",children:"new T()"})," — en runtime Java no sabe qué tipo es T"]}),e.jsxs("li",{children:["No puedes hacer ",e.jsx("code",{className:"text-primary",children:"instanceof List<String>"})," — el tipo genérico no existe en runtime"]}),e.jsxs("li",{children:["No puedes crear arrays genéricos: ",e.jsx("code",{className:"text-primary",children:"new T[10]"})," — los arrays guardan el tipo en runtime"]}),e.jsxs("li",{children:["La reflexión ve ",e.jsx("code",{className:"text-primary",children:"List"})," raw, no ",e.jsx("code",{className:"text-primary",children:"List<String>"})]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"¿Por qué existe type erasure?"})," Por compatibilidad hacia atrás. Los generics se añadieron en Java 5. Para que el bytecode antiguo (sin generics) siguiera funcionando con código nuevo (con generics), se diseñó que el bytecode fuera idéntico. Una decisión pragmática con consecuencias que persisten hasta hoy."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Wildcards"})," (",e.jsx("code",{className:"text-primary",children:"?"}),"): cuando necesitas aceptar múltiples tipos genéricos. ",e.jsx("code",{className:"text-primary",children:"? extends Number"})," acepta cualquier subtipo de Number (para leer). ",e.jsx("code",{className:"text-primary",children:"? super Integer"})," acepta cualquier supertipo de Integer (para escribir). Regla mnemónica PECS:",e.jsx("em",{children:" Producer Extends, Consumer Super"}),"."]})]}),e.jsx(S,{filename:"Caja.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Métodos genéricos"}),e.jsx(S,{filename:"MetodosGenericos.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Bounded types (límites)"}),e.jsx(S,{filename:"Bounded.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["TypeScript tiene generics similares: ",e.jsx("code",{className:"text-primary",children:"function f<T>(x: T): T"}),". La diferencia es que Java borra los tipos genéricos en compilación (type erasure), mientras que TypeScript los mantiene solo en tiempo de compilación de todas formas."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 19"}),e.jsx(K,{number:1,title:"Par genérico",description:`Crea una clase Par<A, B> con:
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
}`,solutionFilename:"Par.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-19: generics, bounded types, wildcards"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 20"})," — Enums: constantes con superpoderes."]})]})})]})}function Qv(){return e.jsxs("div",{children:[e.jsx(oe,{day:20,title:"Enums",duration:"45 min",commitMsg:"dia-20: enums basicos, con campos y metodos, en switch"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy descubrirás que los enums de Java son mucho más que simples constantes. A diferencia de TypeScript donde un enum es solo un mapeo nombre→valor, en Java cada valor de un enum es una",e.jsx("strong",{className:"text-text",children:" instancia completa de una clase"})," con campos, métodos y comportamiento propio."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es un Enum y cuándo usarlo?"}),e.jsxs(se,{title:"Enums Java: clases completas con objetos singleton predefinidos",children:[e.jsxs("p",{children:["En TypeScript, ",e.jsxs("code",{className:"text-primary",children:["enum Color ","{"," Red, Green, Blue ","}"]})," es solo azúcar para constantes numéricas (0, 1, 2) o strings. No puedes agregar métodos ni lógica."]}),e.jsxs("p",{children:["En Java, ",e.jsx("strong",{className:"text-text",children:"un enum es una clase real"})," donde cada constante es un ",e.jsx("em",{children:"objeto singleton"})," creado al cargar la clase. Esto significa que puedes:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:["Tener ",e.jsx("strong",{className:"text-text",children:"campos"})," en cada constante: ",e.jsx("code",{className:"text-primary",children:'EURO("€", 1.0)'})]}),e.jsxs("li",{children:["Agregar ",e.jsx("strong",{className:"text-text",children:"métodos"})," con lógica de negocio"]}),e.jsxs("li",{children:["Implementar ",e.jsx("strong",{className:"text-text",children:"interfaces"})," para comportamiento polimórfico"]}),e.jsx("li",{children:"Sobrescribir métodos por constante individual (abstract methods en el enum)"})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Ventaja crítica con switch:"})," el compilador Java puede verificar que tu switch cubre todos los valores del enum. Si añades un nuevo estado pero olvidas el case, el compilador te avisa. Con el switch moderno (Java 14+), esta verificación es obligatoria."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Métodos útiles heredados por todos los enums:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"name()"}),": retorna el nombre como String (",e.jsx("code",{className:"text-primary",children:'"PENDIENTE"'}),")"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"ordinal()"}),": retorna la posición (0, 1, 2...) — evita depender de esto"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"valueOf(String)"}),": convierte un String al enum correspondiente"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"values()"}),": retorna un array con todos los valores"]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"En Spring Boot"}),": los enums se usan en entidades JPA para estados y tipos. Con ",e.jsx("code",{className:"text-primary",children:"@Enumerated(EnumType.STRING)"}),", JPA guarda el nombre del enum como texto en la BD (más seguro que ",e.jsx("code",{className:"text-primary",children:"ORDINAL"}),", que usa números y se rompe si reordenas las constantes)."]})]}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Un enum reemplaza las constantes mágicas (",e.jsx("code",{className:"text-primary",children:"int ESTADO_ACTIVO = 1"}),") con tipos seguros. Si un método recibe un ",e.jsx("code",{className:"text-primary",children:"EstadoPedido"}),", el compilador garantiza que solo puedes pasar valores válidos — no un número aleatorio por error."]}),e.jsx(S,{filename:"DiaSemana.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Enum con campos y métodos"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Aquí es donde los enums de Java brillan. Puedes darle a cada valor del enum sus propios datos y comportamiento. El constructor es ",e.jsx("strong",{className:"text-text",children:"siempre privado"})," — solo se usa internamente cuando Java crea las instancias predefinidas al cargar la clase."]}),e.jsx(S,{filename:"Planeta.java",code:`
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
`}),e.jsxs(F,{type:"tip",title:"Métodos útiles que TODO enum tiene gratis",children:[e.jsx("code",{className:"text-primary",children:".name()"}),' — nombre como String ("TIERRA").',e.jsx("code",{className:"text-primary",children:" .ordinal()"})," — posición (0-based).",e.jsx("code",{className:"text-primary",children:" values()"})," — array con todos los valores.",e.jsx("code",{className:"text-primary",children:' valueOf("NOMBRE")'})," — convierte String a enum (lanza excepción si no existe). Puedes comparar con ",e.jsx("code",{className:"text-primary",children:"=="})," porque cada valor es singleton (una sola instancia en memoria)."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Caso real: Enum como estrategia (Strategy Pattern)"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Los enums pueden implementar interfaces. Esto te permite tener comportamiento diferente por cada valor sin necesidad de crear múltiples clases. Es el patrón Strategy en su forma más compacta."}),e.jsx(S,{filename:"EstadoPedido.java",code:`
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
`}),e.jsx(F,{type:"angular",children:"En Angular/TypeScript lograrías esto con un Map o switch. En Java, el enum encapsula la lógica de transición de estados directamente, haciendo imposible crear un estado inválido. Esto se usa mucho en e-commerce (estados de pedido), workflows (estados de aprobación) y máquinas de estado."})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 20"}),e.jsx(K,{number:1,title:"Enum Moneda con conversión",description:`Crea un enum Moneda con valores: USD, EUR, MXN, GBP.
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
}`,solutionFilename:"Moneda.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-20: enums con campos, metodos, switch"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 21"})," — Comparable y Comparator: ordenar objetos."]})]})})]})}function Xv(){return e.jsxs("div",{children:[e.jsx(oe,{day:22,title:"Expresiones Lambda",duration:"55 min",commitMsg:"dia-22: lambdas, interfaces funcionales, method references"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy entras a la programación funcional de Java. Las lambdas (Java 8+) son expresiones que representan funciones anónimas — como las arrow functions de TypeScript, pero con una diferencia fundamental: en Java solo puedes usar una lambda donde se espera una ",e.jsx("strong",{className:"text-text",children:"interfaz funcional"}),"."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es una Lambda?"}),e.jsxs(se,{title:"Lambda = arrow function, pero construida sobre interfaces funcionales",children:[e.jsxs("p",{children:["En TypeScript: ",e.jsx("code",{className:"text-primary",children:"const suma = (a: number, b: number) => a + b"})," — puedes asignar funciones a variables directamente. Las funciones son ciudadanos de primera clase."]}),e.jsxs("p",{children:["En Java, las funciones NO son ciudadanos de primera clase — todo necesita vivir en una clase. Las lambdas son ",e.jsx("strong",{className:"text-text",children:"azúcar sintáctico"})," para una clase anónima que implementa una interfaz con un solo método abstracto (interfaz funcional). El compilador sabe qué interfaz implementar por el contexto donde usas la lambda."]}),e.jsxs("p",{children:["Cuando escribes ",e.jsx("code",{className:"text-primary",children:"Comparator<String> c = (a, b) -> a.compareTo(b)"}),", Java crea internamente un objeto que implementa ",e.jsx("code",{className:"text-primary",children:"Comparator"})," con ese código. Antes de Java 8 tenías que escribir esto explícitamente con clases anónimas — mucho más verboso."]}),e.jsx("p",{children:e.jsxs("strong",{className:"text-text",children:["Las 5 interfaces funcionales estándar del paquete ",e.jsx("code",{className:"text-primary",children:"java.util.function"}),":"]})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"Predicate<T>"}),": recibe T, retorna boolean. Úsala para filtros. Equivale a ",e.jsx("code",{className:"text-primary",children:"(item: T) => boolean"})," en TS."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"Function<T, R>"}),": recibe T, retorna R. Para transformaciones. Equivale a ",e.jsx("code",{className:"text-primary",children:"(item: T) => R"})," en TS."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"Consumer<T>"}),": recibe T, no retorna nada (void). Para efectos secundarios. Equivale a ",e.jsx("code",{className:"text-primary",children:"(item: T) => void"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"Supplier<T>"}),": no recibe nada, retorna T. Para factories y valores lazy. Equivale a ",e.jsx("code",{className:"text-primary",children:"() => T"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"BiFunction<T, U, R>"}),": recibe dos argumentos, retorna R. Para operaciones binarias."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Method references"})," (",e.jsx("code",{className:"text-primary",children:"::"}),"): si la lambda solo llama un método existente, puedes usar ",e.jsx("code",{className:"text-primary",children:"::"}),"como atajo. ",e.jsx("code",{className:"text-primary",children:"str -> str.toUpperCase()"})," se puede escribir como ",e.jsx("code",{className:"text-primary",children:"String::toUpperCase"}),". Más limpio y legible."]})]}),e.jsx(S,{filename:"Lambdas.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Interfaces funcionales del JDK"}),e.jsx(S,{filename:"InterfacesFuncionales.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["Las lambdas de Java son como las arrow functions de TypeScript: ",e.jsx("code",{className:"text-primary",children:"(a, b) => a + b"}),". La diferencia es que en Java las lambdas solo funcionan donde se espera una interfaz funcional."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Method References (::)"}),e.jsx(S,{filename:"MethodRef.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 22"}),e.jsx(K,{number:1,title:"Pipeline de transformación",description:`Crea PipelineLambda.java con:
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
}`,solutionFilename:"PipelineLambda.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-22: lambdas, interfaces funcionales, method references"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 23"})," — Streams API: filter, map, reduce, collect."]})]})})]})}function Zv(){return e.jsxs("div",{children:[e.jsx(oe,{day:23,title:"Streams API",duration:"60 min",commitMsg:"dia-23: streams, filter, map, reduce, collect, groupingBy"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy dominarás la Streams API — la herramienta más poderosa de Java para procesar colecciones de forma declarativa. Si conoces RxJS en Angular, los Streams te resultarán familiares: encadenas operaciones como ",e.jsx("code",{className:"text-primary",children:"filter → map → collect"})," en un pipeline fluido."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es un Stream?"}),e.jsxs(se,{title:"Stream = pipeline de transformación declarativa sobre colecciones",children:[e.jsxs("p",{children:["En Angular usas ",e.jsx("code",{className:"text-primary",children:"pipe(filter(), map(), tap())"})," con Observables. En Java, ",e.jsx("code",{className:"text-primary",children:".stream().filter().map().collect()"})," hace lo mismo pero sobre colecciones en memoria, no sobre flujos de eventos asíncronos."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"La clave conceptual — lazy evaluation:"})," las operaciones intermedias de un Stream (",e.jsx("code",{className:"text-primary",children:"filter"}),", ",e.jsx("code",{className:"text-primary",children:"map"}),",",e.jsx("code",{className:"text-primary",children:"sorted"}),") son ",e.jsx("em",{children:"perezosas"}),". No ejecutan nada cuando las encadenas. Solo cuando llamas una operación terminal (",e.jsx("code",{className:"text-primary",children:"collect"}),",",e.jsx("code",{className:"text-primary",children:"forEach"}),", ",e.jsx("code",{className:"text-primary",children:"count"}),",",e.jsx("code",{className:"text-primary",children:"findFirst"}),") el pipeline se activa y procesa los elementos. Esto permite optimizaciones: si usas ",e.jsx("code",{className:"text-primary",children:"findFirst()"}),", Java puede detener el procesamiento en el primer elemento que cumple la condición sin procesar el resto."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Diferencias clave con RxJS:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:["Los Streams se consumen ",e.jsx("strong",{className:"text-text",children:"una sola vez"})," — no puedes reusar un Stream (si lo intentas: ",e.jsx("code",{className:"text-primary",children:"IllegalStateException"}),")."]}),e.jsxs("li",{children:["Son ",e.jsx("strong",{className:"text-text",children:"síncronos"})," por defecto — no manejan tiempo ni eventos asíncronos."]}),e.jsxs("li",{children:["Pueden ser ",e.jsx("strong",{className:"text-text",children:"paralelos"})," con ",e.jsx("code",{className:"text-primary",children:".parallelStream()"})," — divide el trabajo entre múltiples threads automáticamente. Útil para procesamiento de grandes datasets, pero no siempre más rápido (overhead de coordinación)."]}),e.jsx("li",{children:"No mutan la colección original — siempre producen un nuevo resultado."})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Cuándo usar Streams vs bucles tradicionales:"})," Streams son más expresivos para transformaciones funcionales (filter + map + collect). Los bucles clásicos son más claros cuando el cuerpo es complejo, tiene múltiples efectos secundarios, o necesitas control fino sobre excepciones. No todo necesita ser un Stream."]})]}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Un Stream tiene tres partes: (1) una ",e.jsx("strong",{className:"text-text",children:"fuente"})," (lista, array, archivo), (2) cero o más ",e.jsx("strong",{className:"text-text",children:"operaciones intermedias"})," (filter, map, sorted — retornan otro Stream), y (3) una ",e.jsx("strong",{className:"text-text",children:"operación terminal"})," (collect, forEach, count — produce el resultado final). Sin operación terminal, nada se ejecuta."]}),e.jsx(F,{type:"warning",title:"Los Streams NO modifican la colección original",children:"Un Stream nunca muta la lista de origen. Siempre crea una nueva colección o resultado. La lista original queda intacta. Esto es programación funcional: datos inmutables + transformaciones."}),e.jsx(S,{filename:"StreamsBasico.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Operaciones terminales — Donde ocurre la magia"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Las operaciones terminales ",e.jsx("strong",{className:"text-text",children:"disparan la ejecución"}),' de todo el pipeline y producen un resultado final (una lista, un número, un boolean, etc.). Sin ellas, las operaciones intermedias simplemente se quedan "esperando". Piénsalo como ',e.jsx("code",{className:"text-primary",children:".subscribe()"})," en RxJS — sin subscribe, el observable no hace nada."]}),e.jsx(S,{filename:"StreamsTerminal.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["Los Streams de Java son como los operadores RxJS en Angular: ",e.jsx("code",{className:"text-primary",children:"pipe(filter(), map())"}),". La diferencia es que los Streams son para datos en memoria y se ejecutan una sola vez, mientras que RxJS maneja flujos asíncronos y observables."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 23"}),e.jsx(K,{number:1,title:"Reporte de ventas con Streams",description:`Crea ReporteVentas.java con:
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
}`,solutionFilename:"ReporteVentas.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-23: streams filter, map, reduce, collect, groupingBy"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 24"})," — Optional: adiós NullPointerException."]})]})})]})}function Kv(){return e.jsxs("div",{children:[e.jsx(oe,{day:24,title:"Optional",duration:"40 min",commitMsg:"dia-24: Optional, orElse, map, flatMap, ifPresent"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy aprenderás ",e.jsx("code",{className:"text-primary",children:"Optional<T>"})," — el arma definitiva contra",e.jsx("code",{className:"text-primary",children:" NullPointerException"}),", el error más común en la historia de Java. En Spring Boot lo verás en cada ",e.jsx("code",{className:"text-primary",children:"findById()"})," de tus repositorios."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Por qué existe Optional?"}),e.jsxs(se,{title:"Optional: eliminar NullPointerException del vocabulario de tu API",children:[e.jsxs("p",{children:["Tony Hoare, quien inventó el concepto de null en 1965, lo llamó su ",e.jsx("em",{children:'"billion dollar mistake"'})," — estimó que los errores de null han costado miles de millones en bugs y downtime. Java vivió con este problema durante décadas hasta Java 8, cuando llegó ",e.jsx("code",{className:"text-primary",children:"Optional"}),"."]}),e.jsxs("p",{children:["En TypeScript tienes ",e.jsx("code",{className:"text-primary",children:"?."})," (optional chaining) y ",e.jsx("code",{className:"text-primary",children:"??"}),"(nullish coalescing) a nivel de lenguaje. En Java, ",e.jsx("code",{className:"text-primary",children:"Optional"})," es una solución de biblioteca: una clase genérica que actúa como contenedor. Puede contener un valor, o estar vacío. El punto es que la ",e.jsx("em",{children:"posibilidad de ausencia está expresada en el tipo"}),":",e.jsx("code",{className:"text-primary",children:" Optional<Usuario>"}),' le dice al que llama tu método "este valor puede no existir — trátalo como tal".']}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Reglas de uso correcto (las más ignoradas en Java):"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"SÍ"}),": como tipo de retorno de métodos que pueden no encontrar un resultado (",e.jsx("code",{className:"text-primary",children:"Optional<Usuario> findByEmail(String email)"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"NO"}),": como parámetro de método. Usa sobrecarga o valores por defecto en su lugar."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"NO"}),": como campo de clase. Los fields deben ser el tipo directo. Optional no es ",e.jsx("code",{className:"text-primary",children:"Serializable"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"NO"}),": hagas ",e.jsx("code",{className:"text-primary",children:"optional.get()"})," sin verificar primero con ",e.jsx("code",{className:"text-primary",children:"isPresent()"})," — lanza ",e.jsx("code",{className:"text-primary",children:"NoSuchElementException"}),". Usa ",e.jsx("code",{className:"text-primary",children:"orElse()"}),", ",e.jsx("code",{className:"text-primary",children:"orElseThrow()"}),", o ",e.jsx("code",{className:"text-primary",children:"ifPresent()"}),"."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"En Spring Data"}),", los repositorios retornan",e.jsx("code",{className:"text-primary",children:" Optional<T>"})," por defecto: ",e.jsx("code",{className:"text-primary",children:"findById()"}),"retorna ",e.jsx("code",{className:"text-primary",children:"Optional<Producto>"}),". Si el ID no existe, en vez de null, recibes ",e.jsx("code",{className:"text-primary",children:"Optional.empty()"}),'. Esto fuerza al servicio a manejar explícitamente el caso "no encontrado" antes de responder al cliente.']})]}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Piensa en Optional como una caja que puede contener un valor o estar vacía. En vez de verificar ",e.jsx("code",{className:"text-primary",children:"if (resultado != null)"}),", usas métodos expresivos como ",e.jsx("code",{className:"text-primary",children:"orElse()"}),", ",e.jsx("code",{className:"text-primary",children:"map()"}),",",e.jsx("code",{className:"text-primary",children:" ifPresent()"})," que hacen tu código más legible y seguro."]}),e.jsx(S,{filename:"OptionalEjemplo.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Encadenar operaciones"}),e.jsx(S,{filename:"OptionalChain.java",code:`
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
`}),e.jsxs(F,{type:"tip",children:["Usa Optional como tipo de retorno de métodos que pueden no tener resultado.",e.jsx("strong",{children:" Nunca"})," uses Optional como parámetro de método ni como campo de clase. Su propósito es comunicar al llamador que el resultado puede estar ausente."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 24"}),e.jsx(K,{number:1,title:"Repositorio con Optional",description:`Crea un mini repositorio en memoria:
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
}`,solutionFilename:"UsuarioRepo.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-24: Optional, orElse, map, flatMap, ifPresent"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 25"})," — Concurrencia: threads, synchronized, ExecutorService."]})]})})]})}function $v(){return e.jsxs("div",{children:[e.jsx(oe,{day:25,title:"Concurrencia",duration:"60 min",commitMsg:"dia-25: threads, ExecutorService, CompletableFuture"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy entras al mundo de la concurrencia — uno de los temas más importantes y complejos de Java. Entender threads es clave porque en Spring Boot, ",e.jsx("strong",{className:"text-text",children:"cada petición HTTP corre en su propio hilo"}),". Si tu código no es thread-safe, tendrás bugs que solo aparecen en producción bajo carga."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es un Thread y por qué importa?"}),e.jsxs(se,{title:"Java = multi-threaded real vs el event loop de JavaScript",children:[e.jsxs("p",{children:["En JavaScript/TypeScript todo es ",e.jsx("strong",{className:"text-text",children:"single-threaded con event loop"}),': un solo hilo ejecuta tu código. Las operaciones "asíncronas" (fetch, setTimeout) son manejadas por APIs del navegador/Node.js fuera del hilo principal. Nunca hay dos funciones de tu código ejecutándose literalmente en paralelo — el async/await es concurrente, no paralelo.']}),e.jsxs("p",{children:["En Java, puedes crear ",e.jsx("strong",{className:"text-text",children:"hilos reales del sistema operativo"})," que el SO asigna a diferentes cores de CPU. Dos threads pueden ejecutar código Java simultáneamente en el mismo proceso. Esto permite:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Paralelismo real"}),": procesar datos en múltiples cores simultáneamente"]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"I/O no bloqueante"}),": mientras un hilo espera una respuesta de BD, otro sigue procesando requests"]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Tareas en background"}),": enviar emails, generar reportes, sin bloquear el response al cliente"]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"El costo: race conditions"}),". Si dos hilos leen y modifican la misma variable al mismo tiempo, el resultado es impredecible. Esto no ocurre en JavaScript por diseño, pero en Java debes gestionarlo con ",e.jsx("code",{className:"text-primary",children:"synchronized"}),", locks, o usando clases thread-safe como ",e.jsx("code",{className:"text-primary",children:"AtomicInteger"}),",",e.jsx("code",{className:"text-primary",children:" ConcurrentHashMap"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Regla de oro moderna:"})," nunca uses ",e.jsx("code",{className:"text-primary",children:"new Thread()"}),"directamente en producción. Usa:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"ExecutorService"}),": pool de hilos reutilizables, evita crear/destruir hilos continuamente"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"CompletableFuture"}),": programación asíncrona declarativa, similar a Promises de JS"]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Virtual Threads"})," (Java 21+): para el máximo rendimiento en I/O (Día 30)"]})]})]}),e.jsx(S,{filename:"Threads.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"ExecutorService (recomendado)"}),e.jsx(S,{filename:"Executor.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"CompletableFuture (async moderno)"}),e.jsx(S,{filename:"CompletableFutureEjemplo.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["CompletableFuture es similar a las ",e.jsx("code",{className:"text-primary",children:"Promise"})," de TypeScript.",e.jsx("code",{className:"text-primary",children:" thenApply"})," = ",e.jsx("code",{className:"text-primary",children:".then()"}),",",e.jsx("code",{className:"text-primary",children:" exceptionally"})," = ",e.jsx("code",{className:"text-primary",children:".catch()"}),",",e.jsx("code",{className:"text-primary",children:" allOf"})," = ",e.jsx("code",{className:"text-primary",children:"Promise.all()"}),"."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 25"}),e.jsx(K,{number:1,title:"Descarga paralela simulada",description:`Simula descargar 5 archivos en paralelo con CompletableFuture:
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
}`,solutionFilename:"DescargaParalela.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-25: threads, ExecutorService, CompletableFuture"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 26"})," — Virtual Threads: millones de hilos con Java 21."]})]})})]})}function Wv(){return e.jsxs("div",{children:[e.jsx(oe,{day:27,title:"I/O y Archivos",duration:"45 min",commitMsg:"dia-27: Path, Files, BufferedReader, try-with-resources"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy aprenderás a leer y escribir archivos con ",e.jsx("code",{className:"text-primary",children:"java.nio.file"})," — la API moderna de I/O. Entenderás Path, Files, try-with-resources, y cuándo usar cada método según el tamaño del archivo."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"java.nio.file — La API moderna"}),e.jsxs(se,{title:"java.nio.file vs java.io — por qué la API moderna importa",children:[e.jsxs("p",{children:["Java tiene dos APIs para archivos. La vieja ",e.jsx("code",{className:"text-primary",children:"java.io.File"}),"(Java 1.0, 1996) tiene problemas históricos: el método ",e.jsx("code",{className:"text-primary",children:"delete()"}),"retorna ",e.jsx("code",{className:"text-primary",children:"false"})," silenciosamente en vez de lanzar excepción, no soporta links simbólicos bien, y su API es inconsistente. La moderna ",e.jsx("code",{className:"text-primary",children:"java.nio.file"})," (NIO.2, Java 7+) lanza excepciones descriptivas, soporta todas las operaciones del sistema de archivos, y tiene una API fluida.",e.jsx("strong",{className:"text-text",children:" Siempre usa NIO.2"}),"."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Los dos actores principales:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"Path"}),": representa una ruta (puede no existir). Es inmutable. Úsalo como el equivalente Java de una cadena de ruta. ",e.jsx("code",{className:"text-primary",children:'Path.of("/home/user/file.txt")'})," o ",e.jsx("code",{className:"text-primary",children:'Paths.get("config.json")'}),"."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"Files"}),": clase utilitaria con todos los métodos estáticos. Leer, escribir, copiar, mover, eliminar, verificar existencia, crear directorios."]})]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Elegir el método según el tamaño del archivo:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Pequeño (<50MB)"}),": ",e.jsx("code",{className:"text-primary",children:"Files.readString(path)"})," carga todo el archivo en un String. Simple y directo."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Mediano"}),": ",e.jsx("code",{className:"text-primary",children:"Files.readAllLines(path)"})," carga todas las líneas en una ",e.jsx("code",{className:"text-primary",children:"List<String>"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Grande (>100MB)"}),": ",e.jsx("code",{className:"text-primary",children:"Files.lines(path)"})," retorna un Stream lazy — lee línea por línea sin cargar todo en RAM. O usa ",e.jsx("code",{className:"text-primary",children:"BufferedReader"})," para control total."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"try-with-resources"}),": cualquier recurso que implemente",e.jsx("code",{className:"text-primary",children:" Closeable"})," (archivos, conexiones, streams) debe cerrarse después de usarse. ",e.jsxs("code",{className:"text-primary",children:["try (var reader = new BufferedReader(...)) ","{"," ... ","}"]}),"garantiza el cierre automático incluso si ocurre una excepción. Es el equivalente Java del",e.jsx("code",{className:"text-primary",children:" using"})," de C# o los context managers de Python."]})]}),e.jsx(S,{filename:"NIOArchivos.java",code:`
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
`}),e.jsxs(F,{type:"tip",children:["Siempre prefiere ",e.jsx("code",{className:"text-primary",children:"java.nio.file"})," sobre ",e.jsx("code",{className:"text-primary",children:"java.io.File"}),". Es más moderno, más seguro y tiene mejor manejo de errores. ",e.jsx("code",{className:"text-primary",children:"Files"})," y",e.jsx("code",{className:"text-primary",children:" Path"})," son las clases principales."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"BufferedReader/Writer (streams grandes)"}),e.jsx(S,{filename:"BufferedIO.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 27"}),e.jsx(K,{number:1,title:"Contador de palabras en archivo",description:`Crea ContadorArchivo.java que:
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
}`,solutionFilename:"ContadorArchivo.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-27: I/O archivos, Path, Files, BufferedReader"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 28"})," — API de Fechas: LocalDate, LocalDateTime, Duration."]})]})})]})}function eS(){return e.jsxs("div",{children:[e.jsx(oe,{day:28,title:"API de Fechas",duration:"45 min",commitMsg:"dia-28: LocalDate, LocalDateTime, Duration, DateTimeFormatter"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy dominarás ",e.jsx("code",{className:"text-primary",children:"java.time"})," — la API moderna de fechas introducida en Java 8. Es inmutable, thread-safe y clara. Si alguna vez usaste ",e.jsx("code",{className:"text-primary",children:"new Date()"})," en JavaScript y sufriste con zonas horarias, aquí encontrarás la solución profesional."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Por qué java.time y no Date?"}),e.jsxs(se,{title:"java.time: la API de fechas que corrige todos los errores de Date",children:[e.jsxs("p",{children:[e.jsx("code",{className:"text-primary",children:"java.util.Date"})," (Java original) tenía los mismos problemas que",e.jsx("code",{className:"text-primary",children:" new Date()"})," de JavaScript: mutable, meses 0-indexed, mezcla fecha y hora, y problemas de timezone. Java 8 introdujo",e.jsx("strong",{className:"text-text",children:" java.time"})," — una API completamente nueva, inmutable y con separación clara de conceptos, inspirada en Joda-Time."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Inmutabilidad:"})," cada operación retorna un nuevo objeto.",e.jsx("code",{className:"text-primary",children:" hoy.plusDays(1)"})," NO modifica ",e.jsx("code",{className:"text-primary",children:"hoy"})," — retorna un nuevo ",e.jsx("code",{className:"text-primary",children:"LocalDate"}),". Esto elimina una clase entera de bugs donde un método recibe una fecha y la modifica sin que quien la pasó lo sepa."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Separación de conceptos — elige la clase correcta:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"LocalDate"}),": solo fecha (2024-01-15). Para cumpleaños, fechas de vencimiento."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"LocalTime"}),": solo hora (14:30:00). Para horarios de apertura."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"LocalDateTime"}),": fecha + hora, sin timezone. Para eventos locales."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"ZonedDateTime"}),": fecha + hora + timezone. Para eventos globales."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"Instant"}),": un momento exacto en UTC (nanosegundos desde epoch). Para logs, timestamps en BD."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"Duration"}),": cantidad de tiempo entre dos Instants."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"Period"}),": diferencia en términos de días/meses/años entre dos LocalDates."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"En base de datos:"})," guarda siempre en UTC usando",e.jsx("code",{className:"text-primary",children:" Instant"})," o ",e.jsx("code",{className:"text-primary",children:"OffsetDateTime"}),". Convierte a la zona horaria local solo en la capa de presentación. JPA mapea automáticamente ",e.jsx("code",{className:"text-primary",children:"LocalDate"})," a columnas SQL ",e.jsx("code",{className:"text-primary",children:"DATE"}),"y ",e.jsx("code",{className:"text-primary",children:"LocalDateTime"})," a ",e.jsx("code",{className:"text-primary",children:"TIMESTAMP"}),"."]})]}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["La API java.time separa claramente los conceptos: ",e.jsx("strong",{className:"text-text",children:"LocalDate"})," (solo fecha),",e.jsx("strong",{className:"text-text",children:" LocalTime"})," (solo hora), ",e.jsx("strong",{className:"text-text",children:"LocalDateTime"})," (fecha+hora sin zona),",e.jsx("strong",{className:"text-text",children:" ZonedDateTime"})," (fecha+hora+zona), e ",e.jsx("strong",{className:"text-text",children:"Instant"})," (momento exacto en UTC). Cada clase existe para un propósito específico."]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-6",children:[{a:"LocalDate",d:"Solo fecha (cumpleaños, fecha de factura). Sin hora ni zona."},{a:"LocalTime",d:"Solo hora (hora de alarma, horario). Sin fecha ni zona."},{a:"LocalDateTime",d:"Fecha + hora (evento local, cita). Sin zona horaria."},{a:"ZonedDateTime",d:"Fecha + hora + zona (vuelos, reuniones internacionales)."},{a:"Instant",d:"Momento en UTC (timestamps, logs, auditoría)."},{a:"Duration / Period",d:"Diferencia entre tiempos (Duration) o fechas (Period)."}].map(({a:l,d:c})=>e.jsxs("div",{className:"p-3 bg-bg-secondary rounded-lg border border-border",children:[e.jsx("code",{className:"text-primary text-sm",children:l}),e.jsx("p",{className:"text-text-muted text-xs mt-1",children:c})]},l))}),e.jsx(S,{filename:"FechasModernas.java",code:`
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
`}),e.jsxs(F,{type:"warning",children:["Nunca uses ",e.jsx("code",{className:"text-primary",children:"java.util.Date"})," ni ",e.jsx("code",{className:"text-primary",children:"java.util.Calendar"}),". Son APIs antiguas, mutables y confusas. Siempre usa ",e.jsx("code",{className:"text-primary",children:"java.time.*"})," (Java 8+)."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 28"}),e.jsx(K,{number:1,title:"Calculadora de edad y eventos",description:`Crea CalculadoraFechas.java que:
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
}`,solutionFilename:"CalculadoraFechas.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-28: LocalDate, LocalDateTime, Duration, formatter"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 29"})," — Records: clases de datos inmutables con una línea."]})]})})]})}function aS(){return e.jsxs("div",{children:[e.jsx(oe,{day:29,title:"Records",duration:"40 min",commitMsg:"dia-29: records, constructor compacto, DTOs inmutables"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás Records (Java 16+) — la forma moderna de crear clases de datos inmutables con una sola línea de código. Eliminan el 90% del boilerplate que plagaba las clases Java tradicionales y son perfectos como DTOs en Spring Boot."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué problema resuelven los Records?"}),e.jsxs(se,{title:"Records: eliminar el boilerplate de las clases de datos",children:[e.jsxs("p",{children:["El problema histórico de Java era el ",e.jsx("strong",{className:"text-text",children:"boilerplate verboso"}),": para una clase de datos simple con 3 campos necesitabas 50+ líneas: declarar campos privados, escribir un constructor, getters para cada campo, ",e.jsx("code",{className:"text-primary",children:"equals()"}),",",e.jsx("code",{className:"text-primary",children:"hashCode()"})," y ",e.jsx("code",{className:"text-primary",children:"toString()"}),". Todo esto para almacenar 3 valores. Lombok existía como solución externa, pero Java 16 trajo la solución oficial: ",e.jsx("strong",{className:"text-text",children:"records"}),"."]}),e.jsxs("p",{children:[e.jsxs("code",{className:"text-primary",children:["record Persona(String nombre, int edad) ","{}"]})," genera automáticamente:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:["Campos ",e.jsx("code",{className:"text-primary",children:"private final"})," para cada componente"]}),e.jsx("li",{children:"Constructor canónico que acepta todos los componentes"}),e.jsxs("li",{children:["Getters con el mismo nombre del campo (no ",e.jsx("code",{className:"text-primary",children:"getNombre()"}),", sino ",e.jsx("code",{className:"text-primary",children:"nombre()"}),")"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"equals()"})," que compara por contenido, no por referencia"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"hashCode()"})," consistente con equals"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"toString()"})," legible: ",e.jsx("code",{className:"text-primary",children:"Persona[nombre=Carlos, edad=25]"})]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Inmutabilidad total"}),": los campos son ",e.jsx("code",{className:"text-primary",children:"final"}),". No hay setters. Una vez creado, el estado no cambia. Esto los hace thread-safe por diseño y perfectos para DTOs, clases de valor, respuestas de API, y llaves de mapas."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Limitaciones importantes:"})," los records no pueden extender clases (solo implementar interfaces), no pueden tener campos de instancia adicionales (solo los del header), y ",e.jsx("strong",{className:"text-text",children:"no funcionan con JPA/Hibernate"})," como entidades (JPA requiere clase mutable con constructor sin argumentos). Para entidades JPA, sigue usando clases normales. Para DTOs que viajan entre capas, records son perfectos."]})]}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:[e.jsx("strong",{className:"text-text",children:"¿Cuándo usar record vs clase normal?"}),' Usa record cuando tu objeto es solo un "contenedor de datos" que no cambia (inmutable). Usa clase normal cuando necesitas mutabilidad, herencia, o lógica de estado compleja.']}),e.jsx(S,{filename:"Records.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Records avanzados"}),e.jsx(S,{filename:"RecordsAvanzados.java",code:`
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
`}),e.jsx(F,{type:"angular",children:"Los records de Java son similares a las interfaces de TypeScript para definir formas de datos, pero son clases reales con constructor, igualdad por valor y toString. En Angular usarías una interfaz o clase — en Java moderno, usa records para DTOs y objetos de valor."})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 29"}),e.jsx(K,{number:1,title:"Sistema de pedidos con Records",description:`Crea un mini sistema de pedidos:
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
}`,solutionFilename:"SistemaPedidos.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-29: records, constructor compacto, DTOs inmutables"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 30"})," — Sealed Classes: controlar la herencia."]})]})})]})}function tS(){return e.jsxs("div",{children:[e.jsx(oe,{day:30,title:"Sealed Classes",duration:"40 min",commitMsg:"dia-30: sealed classes, permits, exhaustive switch"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás Sealed Classes (Java 17) — una forma de declarar exactamente qué clases pueden heredar de otra. Combinadas con records y pattern matching, permiten modelar dominios complejos con seguridad de tipos que el compilador puede verificar exhaustivamente."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué son y por qué existen?"}),e.jsxs(se,{title:"Sealed Classes: jerarquías cerradas con exhaustividad garantizada",children:[e.jsxs("p",{children:["En TypeScript los union types son fundamentales:",e.jsx("code",{className:"text-primary",children:" type Forma = Circulo | Rectangulo | Triangulo"}),". El compilador sabe exactamente qué tipos son posibles y puede verificar exhaustividad en un switch. Java no tenía esto hasta Java 17."]}),e.jsxs("p",{children:[e.jsx("code",{className:"text-primary",children:"sealed interface Forma permits Circulo, Rectangulo, Triangulo"}),"logra el mismo efecto. La clave es la keyword ",e.jsx("code",{className:"text-primary",children:"permits"}),": declara explícitamente qué clases pueden implementar o extender esta interfaz/clase. Cualquier otra clase que intente hacerlo dará error de compilación."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"El beneficio real es con pattern matching en switch (Java 21):"}),"el compilador puede verificar que el switch es exhaustivo. Si añades un nuevo tipo permitido (",e.jsx("code",{className:"text-primary",children:"Hexagono"}),"), todos los switch que usen ",e.jsx("code",{className:"text-primary",children:"Forma"}),'sin default dejarán de compilar, obligándote a manejar el nuevo caso. Esto elimina la clase entera de bugs de "nuevo tipo no manejado en producción".']}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Los subtipos pueden ser:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"final"}),": no puede extenderse más. Terminal en la jerarquía."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"sealed"})," + ",e.jsx("code",{className:"text-primary",children:"permits"}),": puede extenderse pero solo por los tipos declarados."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"non-sealed"}),": cualquiera puede extenderlo. Abre la jerarquía en ese punto."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Cuándo NO usar sealed:"})," si la jerarquía puede crecer (nuevos tipos de clientes, nuevos estados añadidos por módulos externos). Sealed es para conjuntos",e.jsx("em",{children:" cerrados y estables"})," por diseño."]})]}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Una ",e.jsx("strong",{className:"text-text",children:"sealed class/interface"})," restringe qué clases pueden extenderla o implementarla. Solo las clases explícitamente listadas en ",e.jsx("code",{className:"text-primary",children:"permits"}),"tienen permiso de heredar. Cada subclase debe ser ",e.jsx("code",{className:"text-primary",children:"final"})," (no se puede extender más), ",e.jsx("code",{className:"text-primary",children:"sealed"})," (restringida también), o",e.jsx("code",{className:"text-primary",children:" non-sealed"})," (abierta a extensión)."]}),e.jsx(S,{filename:"SealedClasses.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Sealed interfaces y records"}),e.jsx(S,{filename:"SealedInterface.java",code:`
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
`}),e.jsx(F,{type:"tip",children:"Sealed classes + records + pattern matching = una combinación poderosa para modelar dominios cerrados donde sabes exactamente qué tipos existen. El compilador verifica exhaustividad."})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 30"}),e.jsx(K,{number:1,title:"Resultado de operación con Sealed",description:`Modela un sistema de respuestas HTTP:
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
}`,solutionFilename:"SistemaHTTP.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-30: sealed classes, permits, exhaustive switch"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 31"})," — Pattern Matching: instanceof y switch modernos."]})]})})]})}function sS(){return e.jsxs("div",{children:[e.jsx(oe,{day:31,title:"Pattern Matching",duration:"45 min",commitMsg:"dia-31: pattern matching instanceof, switch, guards"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy dominarás Pattern Matching — una característica que permite verificar el tipo de un objeto, extraer sus datos, y usar esa información en una sola expresión compacta. Combinado con sealed classes y records, el compilador puede verificar que cubras todos los casos posibles."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"instanceof con Pattern Matching (Java 16+)"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Pattern Matching elimina el código repetitivo de verificar tipo + hacer cast. En Java clásico, necesitabas 3 líneas para verificar si un Object es String y usarlo. Con pattern matching, lo haces en una sola expresión segura y legible."}),e.jsxs(se,{title:"Pattern Matching: type narrowing de Java con garantías del compilador",children:[e.jsxs("p",{children:["En TypeScript el type narrowing elimina casts manuales: dentro de",e.jsx("code",{className:"text-primary",children:' if (typeof x === "string")'}),", TypeScript ya sabe que",e.jsx("code",{className:"text-primary",children:" x"})," es ",e.jsx("code",{className:"text-primary",children:"string"}),". Java 16+ hace lo mismo con pattern matching para ",e.jsx("code",{className:"text-primary",children:"instanceof"}),":",e.jsx("code",{className:"text-primary",children:" if (obj instanceof String s)"})," hace el check Y el cast en una sola expresión, eliminando el cast manual ",e.jsx("code",{className:"text-primary",children:"(String) obj"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"El problema que resuelve:"})," antes de Java 16, el patrón claro era verbose: ",e.jsxs("code",{className:"text-primary",children:["if (obj instanceof String) ","{"," String s = (String) obj; ... ","}"]}),". El cast era redundante — ya acabas de verificar el tipo. Pattern matching lo colapsa en una línea y elimina la posibilidad de bug donde el cast y el check no coinciden."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Switch con pattern matching (Java 21):"})," combina verificación de tipo, casting, y desestructuración en un switch exhaustivo:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:["Funciona especialmente bien con ",e.jsx("strong",{className:"text-text",children:"sealed classes"}),": el compilador verifica que cubres todos los subtipos permitidos."]}),e.jsxs("li",{children:["Con ",e.jsx("strong",{className:"text-text",children:"records"}),", puedes usar deconstruction patterns: ",e.jsx("code",{className:"text-primary",children:"case Point(int x, int y) ->"})," extrae directamente los campos del record."]}),e.jsxs("li",{children:["Si añades un nuevo subtipo a una sealed class y no lo manejas en el switch, el compilador da error. ",e.jsx("em",{children:"Exhaustividad garantizada en tiempo de compilación."})]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Guarded patterns:"})," puedes agregar condiciones adicionales:",e.jsx("code",{className:"text-primary",children:" case Integer i when i > 0 ->"})," solo hace match si el Integer es positivo. Equivalente al tipo narrowing con condición adicional de TypeScript."]})]}),e.jsx(S,{filename:"PatternInstanceof.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Switch con Pattern Matching (Java 21+)"}),e.jsx(S,{filename:"PatternSwitch.java",code:`
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
`}),e.jsx(F,{type:"tip",children:"Pattern matching + sealed classes + records es la combinación más poderosa de Java moderno. Permite modelar dominios de forma segura donde el compilador verifica que cubres todos los casos."})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 31"}),e.jsx(K,{number:1,title:"Evaluador de expresiones",description:`Modela expresiones matemáticas con sealed + records + pattern matching:
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
}`,solutionFilename:"Evaluador.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-31: pattern matching instanceof, switch, guards"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 32"})," — Patrones de diseño esenciales."]})]})})]})}function nS(){return e.jsxs("div",{children:[e.jsx(oe,{day:32,title:"Patrones de Diseño",duration:"55 min",commitMsg:"dia-32: singleton, builder, strategy, observer"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy aprenderás los patrones de diseño más usados en Java empresarial. Los patrones de diseño son soluciones probadas a problemas recurrentes en el diseño de software. No son código que copias, sino ",e.jsx("strong",{className:"text-text",children:"recetas mentales"})," para resolver problemas de forma elegante y mantenible."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Singleton — Una sola instancia global"}),e.jsxs(se,{title:"Patrones de diseño: el vocabulario común del desarrollo profesional",children:[e.jsxs("p",{children:["Los patrones de diseño son ",e.jsx("strong",{className:"text-text",children:"soluciones probadas a problemas recurrentes"}),'en el diseño de software orientado a objetos. No son librerías ni código — son conceptos y estructuras que se repiten en todo el ecosistema Java. El libro original de los "Gang of Four" (1994) definió 23 patrones que siguen siendo relevantes hoy.']}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"¿Por qué aprenderlos si Spring ya los implementa?"}),"Porque sin entender los patrones, Spring parece magia. Con ellos, todo tiene sentido:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Singleton"}),": ",e.jsx("code",{className:"text-primary",children:"@Service"}),", ",e.jsx("code",{className:"text-primary",children:"@Component"}),", ",e.jsx("code",{className:"text-primary",children:"@Repository"})," — todos son singletons por defecto. Una instancia para toda la aplicación."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Factory / Factory Method"}),": ",e.jsx("code",{className:"text-primary",children:"@Bean"})," en ",e.jsx("code",{className:"text-primary",children:"@Configuration"})," — un método que crea y configura objetos."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Builder"}),": ",e.jsx("code",{className:"text-primary",children:"ResponseEntity.ok().headers(...).body(data)"}),", ",e.jsx("code",{className:"text-primary",children:'MockMvc.perform(get("/api"))'})," — construcción fluida paso a paso."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Strategy"}),": múltiples implementaciones de un ",e.jsx("code",{className:"text-primary",children:"@Service"})," seleccionadas con ",e.jsx("code",{className:"text-primary",children:"@Qualifier"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Chain of Responsibility"}),": los filtros de Spring Security se encadenan — cada filtro decide si procesa o pasa al siguiente."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Observer/Event"}),": ",e.jsx("code",{className:"text-primary",children:"@EventListener"})," y ",e.jsx("code",{className:"text-primary",children:"ApplicationEventPublisher"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Proxy"}),": ",e.jsx("code",{className:"text-primary",children:"@Transactional"})," y ",e.jsx("code",{className:"text-primary",children:"@Cacheable"})," — Spring envuelve tu bean con un proxy que añade comportamiento antes/después."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"El lenguaje común"}),': cuando en una code review alguien dice "esto debería ser un Strategy" o "usa un Builder aquí", entienden exactamente qué proponer. Los patrones son vocabulario compartido que hace la comunicación técnica más precisa.']})]}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["El patrón ",e.jsx("strong",{className:"text-text",children:"Singleton"})," garantiza que solo exista UNA instancia de una clase en toda la aplicación y provee un punto de acceso global. Útil para conexiones de BD, caches, y configuración."]}),e.jsx(S,{filename:"Singleton.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Builder — Construir objetos complejos paso a paso"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["El patrón ",e.jsx("strong",{className:"text-text",children:"Builder"})," resuelve el problema de constructores con muchos parámetros. Imagina un objeto con 8 campos donde solo 2 son obligatorios — ¿creas un constructor con 8 parámetros? ¿Usas setters y pierdes inmutabilidad? Builder te permite construir el objeto paso a paso con una API fluida (encadenando métodos), manteniendo el objeto final inmutable."]}),e.jsx(S,{filename:"Builder.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Strategy — Cambiar algoritmo en tiempo de ejecución"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["El patrón ",e.jsx("strong",{className:"text-text",children:"Strategy"})," encapsula diferentes algoritmos detrás de una misma interfaz, permitiendo intercambiarlos sin modificar el código que los usa. En vez de un gigante ",e.jsx("code",{className:"text-primary",children:"if/else"})," o ",e.jsx("code",{className:"text-primary",children:"switch"})," para decidir qué hacer, delegas la decisión a un objeto Strategy que puedes cambiar dinámicamente. Con lambdas de Java 8+, las strategies se vuelven aún más concisas."]}),e.jsx(S,{filename:"Strategy.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Observer — Notificar cambios a múltiples interesados"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["El patrón ",e.jsx("strong",{className:"text-text",children:"Observer"}),' define una relación de uno-a-muchos: cuando un objeto cambia de estado, notifica automáticamente a todos sus "suscriptores". Es el mismo concepto que los ',e.jsx("code",{className:"text-primary",children:"EventEmitter"})," de Angular o los ",e.jsx("code",{className:"text-primary",children:"Subject"}),"de RxJS — un emisor con múltiples listeners que reaccionan a eventos."]}),e.jsx(S,{filename:"Observer.java",code:`
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
`}),e.jsxs(F,{type:"spring",children:["Spring Boot usa estos patrones internamente: ",e.jsx("strong",{children:"Singleton"})," (beans),",e.jsx("strong",{children:" Strategy"})," (múltiples implementaciones de interfaz + @Qualifier),",e.jsx("strong",{children:" Observer"})," (ApplicationEventPublisher), ",e.jsx("strong",{children:"Dependency Injection"})," en todo."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 32"}),e.jsx(K,{number:1,title:"Sistema de descuentos con Strategy",description:`Crea un sistema de descuentos usando el patrón Strategy:
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
}`,solutionFilename:"SistemaDescuentos.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-32: patrones singleton, builder, strategy, observer"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 33"})," — Text Blocks, var y novedades del lenguaje."]})]})})]})}function rS(){return e.jsxs("div",{children:[e.jsx(oe,{day:34,title:"Introducción a Spring Boot",duration:"45 min",commitMsg:"dia-34: intro Spring Boot, IoC, DI, arquitectura"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy empiezas Spring Boot — el framework más usado en Java empresarial. Si vienes de Angular, te sentirás como en casa: DI, servicios, módulos."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es Spring Boot?"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:[e.jsx("strong",{className:"text-text",children:"Spring Boot"})," es un framework de Java que te permite crear aplicaciones backend (APIs REST, microservicios, aplicaciones web) con mínima configuración. Está construido sobre el ecosistema Spring Framework y automatiza todo lo tedioso: configurar servidores, conectar bases de datos, manejar seguridad, serializar JSON, etc."]}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Sin Spring Boot, necesitarías configurar manualmente un servidor Tomcat, definir archivos XML de configuración, y escribir cientos de líneas de boilerplate. Con Spring Boot, una sola anotación y un archivo de propiedades son suficientes para tener una API REST funcionando con conexión a base de datos."}),e.jsxs(F,{type:"spring",title:"Spring Framework vs Spring Boot — ¿Cuál es la diferencia?",children:[e.jsx("strong",{children:"Spring Framework"})," es el ecosistema completo de bibliotecas: IoC container, AOP, Spring MVC, Spring Data, Spring Security, Spring Cloud, etc. Es enorme y flexible, pero requiere mucha configuración manual.",e.jsx("strong",{children:" Spring Boot"}),' es una capa de conveniencia que autoconfigura Spring Framework con "opiniones sensatas" (defaults inteligentes). Piensa en Spring como Angular y Spring Boot como Angular CLI + Schematics — te da estructura, convenciones y código generado para que arranques en minutos.']})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Los 3 pilares: IoC, DI y Autoconfiguración"}),e.jsxs(se,{title:"Spring Boot = Angular para el backend — las analogías exactas",children:[e.jsx("p",{children:"Si ya conoces Angular, Spring Boot es conceptualmente muy familiar. Las analogías son directas:"}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsxs("strong",{className:"text-text",children:["Angular ",e.jsx("code",{className:"text-primary",children:"@Injectable()"})]})," → Spring ",e.jsx("code",{className:"text-primary",children:"@Service"})," / ",e.jsx("code",{className:"text-primary",children:"@Component"}),": marca una clase para que el framework la gestione como singleton."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Angular Module providers"})," → Spring ",e.jsx("code",{className:"text-primary",children:"@Configuration"})," + ",e.jsx("code",{className:"text-primary",children:"@Bean"}),": configura objetos en el contenedor."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Angular HTTP Interceptors"})," → Spring Filters / HandlerInterceptor: intercepta peticiones antes/después del procesamiento."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Angular CanActivate Guards"})," → Spring Security ",e.jsx("code",{className:"text-primary",children:"SecurityFilterChain"}),": decide si la petición puede continuar."]}),e.jsxs("li",{children:[e.jsxs("strong",{className:"text-text",children:["Angular CLI (",e.jsx("code",{className:"text-primary",children:"ng new"}),")"]})," → Spring Initializr (start.spring.io): genera el proyecto con la estructura base."]}),e.jsxs("li",{children:[e.jsxs("strong",{className:"text-text",children:["Angular ",e.jsx("code",{className:"text-primary",children:"environment.ts"})]})," → Spring ",e.jsx("code",{className:"text-primary",children:"application.properties"})," / perfiles: configuración por entorno."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"La diferencia filosófica clave:"})," Angular es un framework",e.jsx("em",{children:" frontend"})," — gestiona componentes de UI, routing en el browser, y estado visual. Spring Boot es un framework ",e.jsx("em",{children:"backend"})," — gestiona peticiones HTTP, lógica de negocio, persistencia de datos y seguridad. Son las dos caras del mismo paradigma de desarrollo moderno."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Los 3 pilares fundamentales de Spring"})," que todo lo demás construye:",e.jsx("strong",{className:"text-text",children:" IoC"})," (el framework crea y gestiona objetos),",e.jsx("strong",{className:"text-text",children:" DI"})," (el framework inyecta dependencias automáticamente), y",e.jsx("strong",{className:"text-text",children:" Autoconfiguración"})," (detecta qué tienes en classpath y configura lo necesario sin que escribas código de setup)."]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[e.jsx("h3",{className:"font-bold text-text mb-2",children:'1. Inversión de Control (IoC) — "No llames, yo te llamo"'}),e.jsxs("p",{className:"text-text-muted text-sm mb-2",children:["En programación tradicional, TÚ creas objetos con ",e.jsx("code",{className:"text-primary",children:"new MiServicio()"}),". Con IoC, el ",e.jsx("strong",{className:"text-text",children:"contenedor de Spring"}),' crea los objetos por ti y los gestiona. Tú solo dices "necesito un UsuarioService" y Spring te lo da ya creado y configurado.']}),e.jsxs("p",{className:"text-text-muted text-sm",children:["Los objetos gestionados por Spring se llaman ",e.jsx("strong",{className:"text-text",children:"beans"}),". Spring los crea al arrancar la aplicación, los guarda en su contenedor (ApplicationContext), y los destruye cuando la app se detiene. Por defecto, cada bean es ",e.jsx("strong",{className:"text-text",children:"singleton"})," — solo existe una instancia compartida."]})]}),e.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[e.jsx("h3",{className:"font-bold text-text mb-2",children:'2. Inyección de Dependencias (DI) — "Te paso lo que necesitas"'}),e.jsxs("p",{className:"text-text-muted text-sm mb-2",children:["Cuando tu clase necesita otra clase para funcionar (ej: un Controller necesita un Service), Spring detecta esa dependencia y la ",e.jsx("strong",{className:"text-text",children:"inyecta automáticamente"})," por el constructor. No necesitas buscarla ni crearla — Spring la pone ahí."]}),e.jsxs("p",{className:"text-text-muted text-sm",children:["Esto es idéntico a Angular: cuando pones ",e.jsx("code",{className:"text-primary",children:"constructor(private userService: UserService)"}),"en un componente, Angular inyecta el servicio. En Spring:",e.jsx("code",{className:"text-primary",children:" public MiController(MiService service)"})," hace lo mismo."]})]}),e.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[e.jsx("h3",{className:"font-bold text-text mb-2",children:'3. Autoconfiguración — "Adivino qué necesitas"'}),e.jsxs("p",{className:"text-text-muted text-sm mb-2",children:["Spring Boot escanea las dependencias de tu ",e.jsx("code",{className:"text-primary",children:"pom.xml"})," y configura beans automáticamente. Si detecta ",e.jsx("code",{className:"text-primary",children:"spring-boot-starter-data-jpa"})," + un driver H2, crea automáticamente un DataSource, un EntityManager, y habilita repositorios JPA."]}),e.jsxs("p",{className:"text-text-muted text-sm",children:["Si detecta ",e.jsx("code",{className:"text-primary",children:"spring-boot-starter-web"}),", arranca un servidor Tomcat embebido en el puerto 8080. Si detecta ",e.jsx("code",{className:"text-primary",children:"spring-boot-starter-security"}),", protege todos los endpoints con autenticación básica. Todo sin que escribas una línea de configuración."]})]})]}),e.jsx(S,{filename:"Ejemplo: DI en acción",code:`
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
`}),e.jsxs(F,{type:"tip",title:"¿Cómo sabe Spring qué inyectar?",children:["Spring busca en su contenedor un bean cuyo tipo coincida con el parámetro del constructor. Si tu constructor pide un ",e.jsx("code",{className:"text-primary",children:"UsuarioService"}),", Spring busca un bean de tipo UsuarioService. Si encuentra exactamente uno, lo inyecta. Si hay varios del mismo tipo, necesitas ",e.jsx("code",{className:"text-primary",children:"@Primary"})," o ",e.jsx("code",{className:"text-primary",children:"@Qualifier"})," para desambiguar."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Arquitectura típica"}),e.jsx(S,{language:"bash",filename:"Estructura del proyecto",code:`
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
`}),e.jsxs(F,{type:"angular",children:["La arquitectura de Spring Boot es muy similar a Angular: ",e.jsx("strong",{children:"Controller"})," = Component (recibe input),",e.jsx("strong",{children:" Service"})," = Service (lógica), ",e.jsx("strong",{children:"Repository"})," = HttpClient (datos),",e.jsx("strong",{children:" Model"})," = Interface/Class (tipos)."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 34"}),e.jsx(K,{number:1,title:"Mapear la arquitectura Angular → Spring",description:`Sin código, responde mentalmente:
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
        Spring Security = Route Guards`,solutionFilename:"respuestas.txt"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-34: intro Spring Boot, IoC, DI, arquitectura"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 35"})," — Setup: crear proyecto con Spring Initializr."]})]})})]})}function iS(){return e.jsxs("div",{children:[e.jsx(oe,{day:35,title:"Setup del Proyecto",duration:"50 min",commitMsg:"dia-35: spring initializr, pom.xml, application.properties"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy crearás tu primer proyecto Spring Boot desde cero. Usarás Spring Initializr para generar la estructura, entenderás qué es ",e.jsx("code",{className:"text-primary",children:"pom.xml"})," (tu package.json de Java), y configurarás ",e.jsx("code",{className:"text-primary",children:"application.properties"})," (tu environment.ts)."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Spring Initializr — El generador de proyectos"}),e.jsxs(se,{title:"start.spring.io y Maven: el punto de partida de todo proyecto Spring",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Spring Initializr"})," (start.spring.io) es tu",e.jsx("code",{className:"text-primary",children:" ng new"})," para Java: genera un proyecto completo con la estructura de carpetas correcta, el ",e.jsx("code",{className:"text-primary",children:"pom.xml"})," configurado, y las dependencias que eliges. Descarga un ZIP, lo importas en IntelliJ, y estás listo para escribir código de negocio."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Maven = npm para Java:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"pom.xml"})," es tu ",e.jsx("code",{className:"text-primary",children:"package.json"}),": declara dependencias, versiones, y cómo construir el proyecto."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"mvn install"})," descarga dependencias y construye el JAR (como ",e.jsx("code",{className:"text-primary",children:"npm install && npm run build"}),")."]}),e.jsx("li",{children:"El repositorio central de Maven (Maven Central) es el equivalente del npm registry — millones de librerías disponibles."})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Los Starters son la clave de la autoconfiguración:"})," cuando añades",e.jsx("code",{className:"text-primary",children:" spring-boot-starter-web"})," a tu ",e.jsx("code",{className:"text-primary",children:"pom.xml"}),", Spring Boot detecta que tienes Tomcat en el classpath y ",e.jsx("em",{children:"automáticamente"})," configura un servidor web embebido, el DispatcherServlet, Jackson para JSON, etc. Sin una línea de configuración tuya. Esto es ",e.jsx("strong",{className:"text-text",children:"autoconfiguración"})," — el corazón de Spring Boot."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Starters esenciales que usarás siempre:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"spring-boot-starter-web"}),": REST API (Tomcat + Spring MVC + Jackson)"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"spring-boot-starter-data-jpa"}),": base de datos (Hibernate + Spring Data)"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"spring-boot-starter-security"}),": autenticación y autorización"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"spring-boot-starter-validation"}),": Bean Validation (Jakarta)"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"spring-boot-starter-test"}),": JUnit 5 + Mockito + AssertJ"]})]})]}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Ve a ",e.jsx("strong",{className:"text-text",children:"start.spring.io"})," y configura tu proyecto:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-2 mb-4",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Project:"})," Maven o Gradle"]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Language:"})," Java"]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Spring Boot:"})," última versión estable (3.x)"]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Java:"})," 21 (LTS recomendado)"]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Dependencies:"})," Spring Web, Spring Data JPA, H2 Database, Lombok"]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Clase principal"}),e.jsx(S,{filename:"MiAppApplication.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"application.properties"}),e.jsx(S,{language:"bash",filename:"src/main/resources/application.properties",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"pom.xml (dependencias Maven)"}),e.jsx(S,{language:"markup",filename:"pom.xml (fragmento)",code:`
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
`}),e.jsxs(F,{type:"angular",children:["El ",e.jsx("code",{className:"text-primary",children:"pom.xml"})," de Maven es como el ",e.jsx("code",{className:"text-primary",children:"package.json"})," de npm. Las dependencias se descargan del repositorio central de Maven (como npmjs.com)."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 35"}),e.jsx(K,{number:1,title:"Tu primer Hello World en Spring Boot",description:`1. Ve a start.spring.io y genera un proyecto con Spring Web
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
}`,solutionFilename:"HolaController.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-35: setup Spring Boot, primer endpoint /hola"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 36"})," — Anotaciones de Spring: el lenguaje del framework."]})]})})]})}function lS(){return e.jsxs("div",{children:[e.jsx(oe,{day:36,title:"Anotaciones de Spring",duration:"50 min",commitMsg:"dia-36: @Component, @Service, @RestController, DI, JPA annotations"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:'Hoy aprenderás las anotaciones esenciales de Spring — los "decoradores" que le dicen al framework cómo tratar cada clase, método y campo. Sin anotaciones, Spring no sabe que tu clase existe. Con ellas, Spring la detecta, la instancia, la inyecta y la configura automáticamente.'}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué son las anotaciones en Spring?"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Una ",e.jsx("strong",{className:"text-text",children:"anotación"})," es metadatos que agregas con ",e.jsx("code",{className:"text-primary",children:"@"}),'encima de una clase, método o campo. Spring escanea tu código al arrancar, encuentra estas anotaciones, y actúa según lo que indican: crear un bean, mapear una URL, inyectar una dependencia, definir una transacción, etc. Son el "lenguaje" con el que te comunicas con el framework.']}),e.jsxs(se,{title:"Anotaciones Spring: decoradores que el framework lee en runtime",children:[e.jsxs("p",{children:["En Angular los decoradores como ",e.jsx("code",{className:"text-primary",children:"@Component()"}),",",e.jsx("code",{className:"text-primary",children:" @Injectable()"})," son procesados por TypeScript en compilación y emiten metadatos. En Spring las anotaciones son leidas mediante",e.jsx("strong",{className:"text-text",children:" Java Reflection API en runtime"}),": al arrancar la aplicación, Spring escanea el classpath buscando clases con sus anotaciones y las registra como beans."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Las anotaciones de estereotipo"})," (todas equivalentes funcionalmente, pero con significado semántico diferente):"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"@Component"}),": bean genérico. Usa las demás cuando apliquen."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"@Service"}),": bean de lógica de negocio. Semánticamente indica que contiene reglas de negocio."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"@Repository"}),": bean de acceso a datos. Además, Spring traduce automáticamente excepciones de BD a ",e.jsx("code",{className:"text-primary",children:"DataAccessException"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"@Controller"})," / ",e.jsx("code",{className:"text-primary",children:"@RestController"}),": bean que maneja peticiones HTTP."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"@Configuration"}),": bean que define otros beans con métodos ",e.jsx("code",{className:"text-primary",children:"@Bean"}),"."]})]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Inyección de dependencias — 3 formas:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Constructor"})," (recomendada): ",e.jsxs("code",{className:"text-primary",children:["public MiService(MiRepository repo) ","{"," this.repo = repo; ","}"]}),". Inmutable, testeable, y el IDE puede marcar errores de ciclo."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Campo con @Autowired"}),": conveniente pero dificulta los tests unitarios (no puedes inyectar mocks fácilmente sin reflexión)."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Setter"}),": para dependencias opcionales. Raro en código moderno."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Lombok"}),": muchos proyectos usan",e.jsx("code",{className:"text-primary",children:" @RequiredArgsConstructor"})," (Lombok) que genera automáticamente el constructor con todos los campos ",e.jsx("code",{className:"text-primary",children:"final"}),", eliminando el boilerplate del constructor de inyección."]})]}),e.jsx(S,{filename:"Componentes.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Inyección de dependencias"}),e.jsx(S,{filename:"DI.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["La DI en Spring es casi idéntica a Angular: ",e.jsx("code",{className:"text-primary",children:"@Injectable()"})," = ",e.jsx("code",{className:"text-primary",children:"@Service"}),", inyección por constructor es la forma preferida en ambos. ",e.jsx("code",{className:"text-primary",children:"@Primary"})," es como",e.jsx("code",{className:"text-primary",children:" providedIn: 'root'"})," por defecto."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Anotaciones HTTP"}),e.jsx(S,{filename:"HTTP.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Anotaciones JPA"}),e.jsx(S,{filename:"JPA.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 36"}),e.jsx(K,{number:1,title:"CRUD completo con anotaciones",description:`Crea un ProductoController con:
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
}`,solutionFilename:"ProductoController.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-36: anotaciones Spring, DI, HTTP mappings, JPA"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 37"})," — Controllers en profundidad."]})]})})]})}function oS(){return e.jsxs("div",{children:[e.jsx(oe,{day:37,title:"Controllers",duration:"50 min",commitMsg:"dia-37: @RestController, CRUD, ResponseEntity, @PathVariable"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy construirás REST APIs completas. Un Controller es la puerta de entrada HTTP a tu aplicación — recibe peticiones, las valida, delega al Service, y construye la respuesta con el código HTTP apropiado (200, 201, 404, etc.)."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es un @RestController?"}),e.jsxs(se,{title:"Controller = la única capa que toca HTTP en tu aplicación",children:[e.jsxs("p",{children:["En Angular, un Component maneja la UI y delega al Service para lógica. En Spring, un",e.jsx("code",{className:"text-primary",children:" @RestController"})," maneja HTTP y delega al Service para lógica. La responsabilidad única del Controller es: ",e.jsx("strong",{className:"text-text",children:"traducir entre el mundo HTTP y el mundo Java"}),". Nada más."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Lo que SÍ hace un Controller:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsx("li",{children:"Extraer datos del request (path params, query params, request body, headers)"}),e.jsxs("li",{children:["Validar el formato básico (",e.jsx("code",{className:"text-primary",children:"@Valid"})," en el body)"]}),e.jsx("li",{children:"Llamar al Service y pasar los datos"}),e.jsxs("li",{children:["Envolver el resultado en un ",e.jsx("code",{className:"text-primary",children:"ResponseEntity"})," con el status HTTP correcto"]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Lo que NUNCA debe hacer un Controller:"})," lógica de negocio, consultas a base de datos, cálculos, validaciones de reglas de negocio. Todo eso va en el Service."]}),e.jsxs("p",{children:[e.jsx("code",{className:"text-primary",children:"@RestController"})," = ",e.jsx("code",{className:"text-primary",children:"@Controller"})," +",e.jsx("code",{className:"text-primary",children:" @ResponseBody"}),". El ",e.jsx("code",{className:"text-primary",children:"@ResponseBody"}),"le dice a Spring que serialice el objeto Java retornado a JSON usando Jackson. El proceso inverso también es automático: el body JSON del request se deserializa a tu objeto Java cuando usas ",e.jsx("code",{className:"text-primary",children:"@RequestBody"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"ResponseEntity<T>"}),": te da control total sobre la respuesta HTTP.",e.jsx("code",{className:"text-primary",children:" ResponseEntity.ok(data)"})," → 200 OK con datos.",e.jsx("code",{className:"text-primary",children:" ResponseEntity.created(uri).body(data)"})," → 201 Created.",e.jsx("code",{className:"text-primary",children:" ResponseEntity.noContent().build()"})," → 204 No Content (para DELETE). Siempre retorna el status semánticamente correcto."]})]}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["El flujo completo de una petición es: ",e.jsx("strong",{className:"text-text",children:"Cliente HTTP → DispatcherServlet → Controller → Service → Repository → BD"}),", y la respuesta viaja de vuelta en sentido inverso. El Controller solo maneja la capa HTTP: extrae parámetros, llama al service, y envuelve el resultado en un ResponseEntity."]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-4",children:[{a:"@GetMapping",d:"Maneja GET — obtener datos (listar, buscar por ID)."},{a:"@PostMapping",d:"Maneja POST — crear nuevos recursos."},{a:"@PutMapping",d:"Maneja PUT — reemplazar un recurso completo."},{a:"@DeleteMapping",d:"Maneja DELETE — eliminar un recurso."},{a:"@PathVariable",d:"Extrae valor de la URL: /api/users/{id}"},{a:"@RequestParam",d:"Extrae query params: /api/users?name=Carlos"},{a:"@RequestBody",d:"Deserializa el body JSON a un objeto Java."},{a:"ResponseEntity<T>",d:"Control total: código HTTP + headers + body."}].map(({a:l,d:c})=>e.jsxs("div",{className:"p-3 bg-bg-secondary rounded-lg border border-border",children:[e.jsx("code",{className:"text-primary text-sm",children:l}),e.jsx("p",{className:"text-text-muted text-xs mt-1",children:c})]},l))}),e.jsx(S,{filename:"UsuarioController.java",code:`
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
`}),e.jsxs(F,{type:"spring",children:[e.jsx("code",{className:"text-primary",children:"ResponseEntity"})," te da control total sobre el código HTTP, headers y body de la respuesta. Siempre úsalo para APIs profesionales en lugar de retornar objetos directamente."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 37"}),e.jsx(K,{number:1,title:"API de Tareas con ResponseEntity",description:`Crea TareaController con endpoints:
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
}`,solutionFilename:"TareaController.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-37: controllers CRUD, ResponseEntity, @PathVariable"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 38"})," — Services: lógica de negocio y @Transactional."]})]})})]})}function cS(){return e.jsxs("div",{children:[e.jsx(oe,{day:38,title:"Services",duration:"50 min",commitMsg:"dia-38: @Service, @Transactional, interface + impl pattern"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás la capa de servicios — el corazón de tu aplicación donde vive toda la lógica de negocio. El Controller solo traduce HTTP, el Repository solo accede a datos, pero el Service es donde ocurren las decisiones, validaciones y orquestación."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es un Service y por qué separarlo?"}),e.jsxs(se,{title:"Service = el núcleo de la lógica de negocio, sin saber nada de HTTP ni BD",children:[e.jsxs("p",{children:["El arquitectura en capas de Spring sigue un principio claro de responsabilidades:",e.jsx("strong",{className:"text-text",children:" Controller → Service → Repository"}),"."]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Controller"}),": solo sabe de HTTP. Extrae datos, llama al service, retorna ResponseEntity."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Service"}),": solo sabe de lógica de negocio. No sabe que existe HTTP, ni JSON, ni SQL. Valida reglas, orquesta operaciones, toma decisiones."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Repository"}),": solo sabe de persistencia. Lee y escribe datos en BD."]})]}),e.jsx("p",{children:"Esta separación tiene una ventaja enorme: puedes testear el Service de forma aislada sin levantar un servidor HTTP ni conectarte a una BD real. En Angular, el patrón es idéntico: Component → Service → HttpClient. El Service de Angular tampoco sabe nada de la UI."}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"@Transactional — el mecanismo que garantiza atomicidad:"}),"cuando un método tiene ",e.jsx("code",{className:"text-primary",children:"@Transactional"}),", Spring crea un proxy que abre una transacción de BD antes de ejecutar el método y la confirma (",e.jsx("em",{children:"commit"}),") al terminar exitosamente, o hace ",e.jsx("em",{children:"rollback"})," si ocurre una excepción no manejada."]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Por defecto"}),": solo hace rollback en excepciones unchecked (",e.jsx("code",{className:"text-primary",children:"RuntimeException"}),"). Para checked exceptions necesitas ",e.jsx("code",{className:"text-primary",children:"@Transactional(rollbackFor = Exception.class)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Propagación"}),": ",e.jsx("code",{className:"text-primary",children:"REQUIRED"})," (default) — usa la transacción existente o crea una nueva. ",e.jsx("code",{className:"text-primary",children:"REQUIRES_NEW"})," — siempre crea una nueva."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Sin @Transactional"})," en operaciones múltiples: si falla en el paso 3 de 5, los pasos 1 y 2 ya se guardaron. Datos inconsistentes."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Buena práctica"}),": pon ",e.jsx("code",{className:"text-primary",children:"@Transactional"}),"a nivel de clase en el Service (cubre todos los métodos) y sobrescribe con",e.jsx("code",{className:"text-primary",children:" @Transactional(readOnly = true)"})," en métodos de solo lectura para optimización."]})]}),e.jsx(S,{filename:"UsuarioService.java",code:`
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
`}),e.jsx(F,{type:"angular",children:"Los Services en Spring son exactamente como los Services en Angular: contienen lógica de negocio reutilizable e inyectable. La diferencia es que Spring los gestiona como singletons automáticamente."})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Interface + Implementación"}),e.jsx(S,{filename:"Patron.java",code:`
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
`}),e.jsx(F,{type:"tip",children:"El patrón Interface + Impl es muy común en Spring. Permite cambiar la implementación sin tocar el código que la usa (ej: UsuarioServiceMock para tests)."})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 38"}),e.jsx(K,{number:1,title:"Service con validaciones de negocio",description:`Crea ProductoService con reglas de negocio:
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
}`,solutionFilename:"ProductoService.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-38: services, @Transactional, interface+impl"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 39"})," — Repositories: Spring Data JPA y queries automáticas."]})]})})]})}function dS(){return e.jsxs("div",{children:[e.jsx(oe,{day:39,title:"Repositories",duration:"50 min",commitMsg:"dia-39: JPA entities, JpaRepository, query methods, @Query"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás Spring Data JPA — la capa que te permite acceder a bases de datos relacionales sin escribir SQL manualmente. Defines una interfaz y Spring genera toda la implementación por ti, incluyendo las queries SQL."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Qué es JPA y por qué lo necesitas?"}),e.jsxs(se,{title:"El stack de persistencia: JPA → Hibernate → Spring Data → tu código",children:[e.jsx("p",{children:"Entender la cadena completa es clave para no confundir los niveles:"}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"JDBC"}),": la API Java más básica para hablar con BD. Escribes SQL manual, manejas ResultSet, cierras conexiones. Muy verboso."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"JPA (Java Persistence API)"}),": especificación estándar (no implementación) para mapear objetos Java ↔ tablas relacionales (ORM). Define las anotaciones (",e.jsx("code",{className:"text-primary",children:"@Entity"}),", ",e.jsx("code",{className:"text-primary",children:"@Id"}),", ",e.jsx("code",{className:"text-primary",children:"@Column"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Hibernate"}),": la implementación más popular de JPA. Genera el SQL automáticamente a partir del mapeo de entidades."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Spring Data JPA"}),": capa encima de Hibernate. Solo defines una interfaz que extiende ",e.jsx("code",{className:"text-primary",children:"JpaRepository"})," y Spring genera la implementación en runtime."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Query derivation"}),": Spring Data puede generar SQL a partir del nombre del método. ",e.jsx("code",{className:"text-primary",children:"findByEmailAndActivo(String email, boolean activo)"}),"genera automáticamente ",e.jsx("code",{className:"text-primary",children:"WHERE email = ? AND activo = ?"}),". Sin una línea de SQL."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"El problema N+1"})," (el bug más común con JPA): si tienes una lista de 100 pedidos y cada pedido tiene un usuario, Hibernate puede hacer 1 query para los pedidos + 100 queries para los usuarios = 101 queries. La solución es",e.jsx("code",{className:"text-primary",children:" @EntityGraph"})," o ",e.jsx("code",{className:"text-primary",children:"JOIN FETCH"}),"en JPQL para cargar todo en una sola query."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Lazy vs Eager loading"}),": por defecto las colecciones son",e.jsx("code",{className:"text-primary",children:" LAZY"})," — se cargan cuando las accedes. Los campos simples son",e.jsx("code",{className:"text-primary",children:" EAGER"})," — se cargan siempre. Nunca uses",e.jsx("code",{className:"text-primary",children:"FetchType.EAGER"})," en colecciones — genera el problema N+1 silencioso."]})]}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["La cadena completa es: ",e.jsx("strong",{className:"text-text",children:"Tu código → Spring Data JPA → Hibernate (JPA) → JDBC → Base de Datos"}),". Tú solo trabajas con la capa más alta (Spring Data JPA), y todo lo demás se maneja automáticamente."]}),e.jsxs(F,{type:"info",title:"¿Qué necesitas en tu pom.xml?",children:["La dependencia ",e.jsx("code",{className:"text-primary",children:"spring-boot-starter-data-jpa"})," incluye Hibernate, JDBC y Spring Data JPA. También necesitas un driver de base de datos como ",e.jsx("code",{className:"text-primary",children:"h2"})," (para desarrollo) o",e.jsx("code",{className:"text-primary",children:" postgresql"})," (para producción)."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Entidad JPA — Tu clase es una tabla"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Una ",e.jsx("strong",{className:"text-text",children:"entidad JPA"})," es una clase Java que representa una tabla en la base de datos. Cada instancia de la clase es una fila, y cada campo es una columna. Las anotaciones le dicen a Hibernate cómo mapear entre tu objeto y la tabla SQL."]}),e.jsx(S,{filename:"Usuario.java",code:`
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
`}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-4",children:[{a:"@Entity",d:"Marca la clase como tabla de BD. Obligatoria."},{a:'@Table(name="x")',d:"Nombre de la tabla. Opcional si coincide con la clase."},{a:"@Id",d:"Clave primaria. Cada entidad DEBE tener una."},{a:"@GeneratedValue",d:"La BD genera el valor (auto-increment)."},{a:"@Column",d:"Configura la columna: nullable, unique, length, name."},{a:"@CreationTimestamp",d:"Se llena con la fecha/hora actual al insertar."}].map(({a:l,d:c})=>e.jsxs("div",{className:"p-3 bg-bg-secondary rounded-lg border border-border",children:[e.jsx("code",{className:"text-primary text-sm",children:l}),e.jsx("p",{className:"text-text-muted text-xs mt-1",children:c})]},l))}),e.jsxs(F,{type:"warning",title:"Regla de oro: constructor vacío obligatorio",children:["JPA/Hibernate necesita un constructor sin argumentos para crear instancias al leer de la BD. Si defines otro constructor, ",e.jsx("strong",{children:"debes"})," también definir el vacío explícitamente. Sin él, obtendrás un error críptico: ",e.jsx("code",{className:"text-primary",children:"No default constructor for entity"}),"."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Repository — La magia de Spring Data"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Un ",e.jsx("strong",{className:"text-text",children:"Repository"})," es una interfaz que defines tú, y Spring crea la implementación automáticamente en tiempo de ejecución. Al extender ",e.jsx("code",{className:"text-primary",children:"JpaRepository<Entidad, TipoId>"}),", heredas decenas de métodos CRUD sin escribir una sola línea de implementación."]}),e.jsx(S,{filename:"UsuarioRepository.java",code:`
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
`}),e.jsx("h3",{className:"text-lg font-bold text-text mt-6 mb-3",children:"Convención de nombres para Query Methods"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Spring analiza el nombre de tu método y genera la SQL correspondiente. La estructura es:",e.jsx("code",{className:"text-primary ml-1",children:"findBy"})," + ",e.jsx("code",{className:"text-primary",children:"Campo"})," +",e.jsx("code",{className:"text-primary",children:" Comparador"})," (opcional) + ",e.jsx("code",{className:"text-primary",children:"OrderBy"})," (opcional)."]}),e.jsx("div",{className:"overflow-x-auto mb-4",children:e.jsxs("table",{className:"w-full text-sm text-text-muted",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border",children:[e.jsx("th",{className:"text-left py-2 px-3 text-text",children:"Keyword en el nombre"}),e.jsx("th",{className:"text-left py-2 px-3 text-text",children:"SQL generado"}),e.jsx("th",{className:"text-left py-2 px-3 text-text",children:"Ejemplo"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"findBy"}),e.jsx("td",{className:"py-2 px-3",children:"WHERE campo = ?"}),e.jsx("td",{className:"py-2 px-3 text-xs",children:"findByEmail(email)"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"GreaterThan"}),e.jsx("td",{className:"py-2 px-3",children:"WHERE campo > ?"}),e.jsx("td",{className:"py-2 px-3 text-xs",children:"findByEdadGreaterThan(18)"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"LessThan"}),e.jsx("td",{className:"py-2 px-3",children:"WHERE campo < ?"}),e.jsx("td",{className:"py-2 px-3 text-xs",children:"findByPrecioLessThan(100)"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"Between"}),e.jsx("td",{className:"py-2 px-3",children:"WHERE campo BETWEEN ? AND ?"}),e.jsx("td",{className:"py-2 px-3 text-xs",children:"findByEdadBetween(18, 65)"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"Containing"}),e.jsx("td",{className:"py-2 px-3",children:"WHERE campo LIKE %?%"}),e.jsx("td",{className:"py-2 px-3 text-xs",children:'findByNombreContaining("ar")'})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"StartingWith"}),e.jsx("td",{className:"py-2 px-3",children:"WHERE campo LIKE ?%"}),e.jsx("td",{className:"py-2 px-3 text-xs",children:'findByNombreStartingWith("Ca")'})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"IsNull"}),e.jsx("td",{className:"py-2 px-3",children:"WHERE campo IS NULL"}),e.jsx("td",{className:"py-2 px-3 text-xs",children:"findByEmailIsNull()"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"In"}),e.jsx("td",{className:"py-2 px-3",children:"WHERE campo IN (?)"}),e.jsx("td",{className:"py-2 px-3 text-xs",children:"findByEdadIn(List.of(18,25))"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 px-3 font-mono text-primary",children:"OrderBy...Asc/Desc"}),e.jsx("td",{className:"py-2 px-3",children:"ORDER BY campo ASC/DESC"}),e.jsx("td",{className:"py-2 px-3 text-xs",children:"findByEdadGreaterThanOrderByNombreAsc(18)"})]})]})]})}),e.jsxs(F,{type:"tip",title:"¿Cuándo usar @Query vs Query Methods?",children:[e.jsx("strong",{children:"Query Methods"})," (por nombre): para consultas simples con 1-2 condiciones. Son legibles y autocompletables.",e.jsx("strong",{children:" @Query (JPQL)"}),": para consultas complejas con JOINs, subqueries, o múltiples condiciones. Usa nombres de clases Java.",e.jsx("strong",{children:" @Query (nativeQuery)"}),": cuando necesitas SQL específico de tu BD (funciones de PostgreSQL, etc.). Usa nombres de tablas reales."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Usando el Repository en el Service"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"El Repository se inyecta en tu Service. Nunca lo uses directamente desde el Controller — siempre pasa por la capa de servicio para mantener la lógica de negocio separada."}),e.jsx(S,{filename:"UsuarioService.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["En Angular, tu Service llama a ",e.jsx("code",{className:"text-primary",children:'this.http.get<User[]>("/api/users")'}),". En Spring, tu Service llama a ",e.jsx("code",{className:"text-primary",children:"this.repository.findAll()"}),". El patrón es idéntico: el Service encapsula la lógica de acceso a datos y el Controller solo delega."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 39"}),e.jsx(K,{number:1,title:"Repository con query methods",description:`Crea ProductoRepository extends JpaRepository con:
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
}`,solutionFilename:"ProductoRepository.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-39: JPA entities, repositories, query methods"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 40"})," — Spring Security: autenticación y autorización."]})]})})]})}function uS(){return e.jsxs("div",{children:[e.jsx(oe,{day:40,title:"Spring Security",duration:"55 min",commitMsg:"dia-40: SecurityFilterChain, BCrypt, JWT, roles"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás Spring Security — el módulo que protege tu API controlando quién puede acceder (autenticación) y qué puede hacer (autorización). Es el equivalente de los Route Guards e HTTP Interceptors de Angular, pero aplicado a nivel de servidor."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Autenticación vs Autorización"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:[e.jsx("strong",{className:"text-text",children:"Autenticación"})," = verificar QUIÉN eres (login con email/contraseña, token JWT).",e.jsx("strong",{className:"text-text",children:" Autorización"})," = verificar QUÉ puedes hacer (¿tienes rol ADMIN para borrar usuarios?). Spring Security maneja ambas cosas a través de una cadena de filtros que interceptan cada petición HTTP antes de que llegue a tu Controller."]}),e.jsxs(se,{title:"Spring Security: autenticación + autorización en el servidor",children:[e.jsxs("p",{children:["En Angular proteges rutas con ",e.jsx("code",{className:"text-primary",children:"CanActivate"})," guards y adjuntas tokens JWT con HTTP interceptors. Spring Security hace lo análogo en el servidor:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"SecurityFilterChain"}),": define qué rutas son públicas y cuáles requieren autenticación/roles específicos. Equivalente al array de rutas con ",e.jsx("code",{className:"text-primary",children:"CanActivate"})," en Angular."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"OncePerRequestFilter"}),": intercepta cada petición HTTP para validar el token JWT antes de que llegue al Controller. Equivalente al HTTP interceptor de Angular."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Diferencia fundamental:"})," la seguridad de Angular es",e.jsx("em",{children:" cosmética"})," — protege la UI pero un usuario puede saltarse los guards inspeccionando el bundle JS. Spring Security es ",e.jsx("strong",{className:"text-text",children:"real"}),": si el token no es válido, el servidor retorna 401 y el Controller nunca se ejecuta. La seguridad del frontend y backend son complementarias, no sustitutivas."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Autenticación vs Autorización:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Autenticación"}),": verificar quién eres. Login con usuario/contraseña, validar JWT."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Autorización"}),": verificar qué puedes hacer. ",e.jsx("code",{className:"text-primary",children:"hasRole('ADMIN')"}),", ",e.jsx("code",{className:"text-primary",children:"hasAuthority('WRITE')"}),"."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"BCryptPasswordEncoder"}),": nunca guardes contraseñas en texto plano. BCrypt aplica un hash con salt aleatorio. Cada hash de la misma contraseña es diferente, por lo que ni un dump de la BD revela las contraseñas. Spring Security lo incluye y se usa con ",e.jsx("code",{className:"text-primary",children:"passwordEncoder.matches(raw, encoded)"}),"."]})]}),e.jsx(S,{filename:"SecurityConfig.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"JWT Authentication (producción)"}),e.jsx(S,{filename:"JwtUtil.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["En Angular usas interceptors HTTP para adjuntar el JWT token. En Spring usas filtros (",e.jsx("code",{className:"text-primary",children:"OncePerRequestFilter"}),") para validar el token en cada petición. El concepto de guards en Angular equivale a ",e.jsx("code",{className:"text-primary",children:"@PreAuthorize"})," en Spring."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 40"}),e.jsx(K,{number:1,title:"SecurityConfig con roles",description:`Configura SecurityFilterChain con:
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
}`,solutionFilename:"SecurityConfig.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-40: Spring Security, BCrypt, JWT, roles"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 41"})," — Testing: JUnit 5, Mockito, MockMvc."]})]})})]})}function mS(){return e.jsxs("div",{children:[e.jsx(oe,{day:41,title:"Testing en Spring Boot",duration:"55 min",commitMsg:"dia-41: JUnit 5, Mockito, MockMvc, integration tests"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás testing profesional en Spring Boot: unit tests aislados con Mockito para probar tu lógica de negocio, e integration tests con MockMvc para verificar tus endpoints HTTP completos sin levantar un servidor real."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Unit Tests con JUnit 5 + Mockito"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Un ",e.jsx("strong",{className:"text-text",children:"unit test"})," prueba UNA clase aislada. Si tu Service depende de un Repository, no quieres que el test dependa de una BD real — sería lento y frágil. En su lugar, usas ",e.jsx("strong",{className:"text-text",children:"Mockito"}),' para crear un "doble" (mock) del Repository que simula su comportamiento sin conectarse a ninguna BD.']}),e.jsxs(se,{title:"Tests profesionales: unit tests rápidos + integration tests de confianza",children:[e.jsx("p",{children:"El objetivo de los tests no es solo verificar que el código funciona hoy — es garantizar que sigue funcionando cuando alguien lo modifique mañana. Un buen suite de tests es la red de seguridad que te permite refactorizar con confianza."}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Unit tests"})," (JUnit 5 + Mockito): prueban una clase en aislamiento. Todas las dependencias son mocks. Son rápidos (milisegundos), no necesitan base de datos, y deben ser la mayoría de tus tests. Prueban la lógica de negocio del Service."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Integration tests"})," (@SpringBootTest + MockMvc): levantan el contexto completo de Spring y permiten hacer peticiones HTTP reales a tus endpoints. Más lentos pero verifican que todas las capas funcionan juntas correctamente."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"El patrón AAA (Arrange-Act-Assert)"}),": estructura universal de tests:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Arrange"}),": prepara los datos de entrada y configura los mocks (",e.jsx("code",{className:"text-primary",children:"when(repo.findById(1L)).thenReturn(Optional.of(usuario))"}),")"]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Act"}),": ejecuta el método que estás probando (",e.jsx("code",{className:"text-primary",children:"var result = service.findById(1L)"}),")"]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Assert"}),": verifica el resultado (",e.jsx("code",{className:"text-primary",children:'assertThat(result.nombre()).isEqualTo("Carlos")'}),")"]})]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Mockito — las 3 operaciones clave:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"when(mock.metodo()).thenReturn(valor)"}),": programa qué retorna el mock cuando se llama"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"when(mock.metodo()).thenThrow(new Exception())"}),": programa que el mock lance una excepción"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"verify(mock).metodo(args)"}),": verifica que el mock fue llamado con esos argumentos"]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Regla práctica"}),": si tu Service tiene lógica de negocio compleja (validaciones, cálculos, decisiones), es lo más importante de testear con unit tests. Los Controllers y Repositories se testean mejor con integration tests."]})]}),e.jsx(S,{filename:"UsuarioServiceTest.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Integration Test con MockMvc"}),e.jsx(S,{filename:"UsuarioControllerTest.java",code:`
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
`}),e.jsxs(F,{type:"tip",children:[e.jsx("strong",{children:"Unit tests"}),": rápidos, aislados con mocks. Testean una clase.",e.jsx("strong",{children:" Integration tests"}),": levantan el contexto de Spring. Testean el flujo completo. Usa ",e.jsx("code",{className:"text-primary",children:"@SpringBootTest"})," para integration y ",e.jsx("code",{className:"text-primary",children:"@ExtendWith(MockitoExtension.class)"})," para unit."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 41"}),e.jsx(K,{number:1,title:"Tests para ProductoService",description:`Escribe 3 unit tests para ProductoService:
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
}`,solutionFilename:"ProductoServiceTest.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-41: JUnit 5, Mockito, MockMvc tests"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 42"})," — Manejo de excepciones global con @ControllerAdvice."]})]})})]})}function pS(){return e.jsxs("div",{children:[e.jsx(oe,{day:21,title:"Comparable y Comparator",duration:"45 min",commitMsg:"dia-21: Comparable, Comparator, ordenamiento de objetos"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy aprenderás a ordenar objetos personalizados en Java. En TypeScript, ordenas con",e.jsx("code",{className:"text-primary",children:" .sort((a, b) => a.precio - b.precio)"}),". En Java hay dos mecanismos formales:",e.jsx("code",{className:"text-primary",children:" Comparable"})," (orden natural interno) y ",e.jsx("code",{className:"text-primary",children:"Comparator"}),"(orden externo flexible). Los usarás constantemente con colecciones, streams y Spring Data."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Comparable — El objeto sabe ordenarse"}),e.jsxs(se,{title:"Comparable vs Comparator — cuándo usar cada uno",children:[e.jsx("p",{children:"Java tiene dos mecanismos para ordenar objetos. Elegir el correcto depende de si el orden es intrínseco al objeto o externo a él."}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Comparable<T>"}),": la clase implementa ",e.jsx("code",{className:"text-primary",children:"compareTo(T o)"}),"internamente. Define el ",e.jsx("em",{children:"orden natural"}),' del objeto — la forma "obvia" de ordenarlo. Por ejemplo, ',e.jsx("code",{className:"text-primary",children:"String"})," implementa Comparable para ordenar alfabéticamente.",e.jsx("code",{className:"text-primary",children:" Integer"})," para ordenar numéricamente. Las colecciones usan este orden automáticamente con ",e.jsx("code",{className:"text-primary",children:"Collections.sort()"})," y ",e.jsx("code",{className:"text-primary",children:".sorted()"}),"sin necesitar ningún parámetro extra."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Comparator<T>"}),": el orden se define ",e.jsx("em",{children:"fuera"})," de la clase, como un objeto separado. Puedes tener múltiples Comparators para la misma clase: por nombre, por precio, por fecha, por longitud de nombre, etc. Es más flexible y se combina limpiamente con lambdas. ",e.jsx("strong",{className:"text-text",children:"Usa Comparator el 90% del tiempo"}),"— Comparable solo cuando hay UN orden natural indiscutible."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"El contrato de compareTo:"})," retorna un entero negativo si",e.jsx("code",{className:"text-primary",children:" this"})," va antes que el argumento, cero si son iguales, positivo si",e.jsx("code",{className:"text-primary",children:" this"})," va después. Es el equivalente Java de",e.jsx("code",{className:"text-primary",children:" (a, b) => a - b"})," en JavaScript. ",e.jsx("strong",{className:"text-text",children:"Nunca"}),"uses la resta directa (",e.jsx("code",{className:"text-primary",children:"a - b"}),") para comparar enteros — puede causar overflow. Usa ",e.jsx("code",{className:"text-primary",children:"Integer.compare(a, b)"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Encadenamiento de Comparators"})," (Java 8+): puedes combinar múltiples criterios con ",e.jsx("code",{className:"text-primary",children:".thenComparing()"}),":",e.jsx("code",{className:"text-primary",children:" Comparator.comparing(Producto::getCategoria).thenComparing(Producto::getPrecio)"}),"— ordena por categoría, y si hay empate, por precio. Esto reemplaza el código verboso anterior."]})]}),e.jsx(S,{filename:"Producto.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Comparator — orden personalizado"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Usa ",e.jsx("code",{className:"text-primary",children:"Comparator"})," cuando necesitas ",e.jsx("strong",{className:"text-text",children:"múltiples criterios de orden"}),"o no puedes modificar la clase original."]}),e.jsx(S,{filename:"ComparatorEjemplo.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["En TypeScript, ",e.jsx("code",{className:"text-primary",children:"array.sort((a, b) => a.price - b.price)"})," es el equivalente. Java tiene el mismo patrón pero con ",e.jsx("code",{className:"text-primary",children:"Comparator.comparing()"})," que es más expresivo y seguro para tipos no numéricos."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Comparable vs Comparator"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[e.jsx("h3",{className:"font-bold text-text mb-2",children:"Comparable"}),e.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[e.jsxs("li",{children:["• Implementado ",e.jsx("strong",{className:"text-text",children:"dentro"})," de la clase"]}),e.jsxs("li",{children:["• Define el ",e.jsx("strong",{className:"text-text",children:"orden natural"})," único"]}),e.jsx("li",{children:'• La clase "sabe" cómo ordenarse'}),e.jsx("li",{children:"• Ejemplo: String, Integer, LocalDate"})]})]}),e.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[e.jsx("h3",{className:"font-bold text-text mb-2",children:"Comparator"}),e.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[e.jsxs("li",{children:["• Definido ",e.jsx("strong",{className:"text-text",children:"fuera"})," de la clase"]}),e.jsxs("li",{children:["• Permite ",e.jsx("strong",{className:"text-text",children:"múltiples criterios"})]}),e.jsx("li",{children:"• No necesitas modificar la clase"}),e.jsx("li",{children:"• Más flexible para casos ad-hoc"})]})]})]}),e.jsxs(F,{type:"tip",children:["Regla práctica: implementa ",e.jsx("code",{className:"text-primary",children:"Comparable"}),' si hay un orden "lógico" obvio para tu clase (ej: productos por precio, personas por nombre). Usa ',e.jsx("code",{className:"text-primary",children:"Comparator"}),"para ordenamientos alternativos o cuando no controlas la clase."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 21"}),e.jsx(K,{number:1,title:"Ordenar estudiantes",description:`Crea Estudiante implements Comparable<Estudiante> con:
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
}`,solutionFilename:"Estudiante.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-21: Comparable, Comparator, ordenamiento de objetos"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 22"})," — Lambdas: funciones como ciudadanos de primera clase."]})]})})]})}function xS(){return e.jsxs("div",{children:[e.jsx(oe,{day:33,title:"Text Blocks y Novedades",duration:"40 min",commitMsg:"dia-33: text blocks, var, string enhancements"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy cierras la sección de Java Moderno con varias features que hacen tu código más limpio: Text Blocks para strings multilínea, ",e.jsx("code",{className:"text-primary",children:"var"})," para inferencia de tipos, y mejoras de String como ",e.jsx("code",{className:"text-primary",children:".formatted()"})," y ",e.jsx("code",{className:"text-primary",children:".isBlank()"}),"."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Text Blocks (Java 13+)"}),e.jsxs(se,{title:"Text Blocks: strings multilínea legibles sin escapes ni concatenación",children:[e.jsxs("p",{children:["En TypeScript los backticks permiten strings multilínea con interpolación directa de variables. Java añadió Text Blocks en Java 13 (preview) y estables en Java 15. Son similares pero con una diferencia importante: ",e.jsx("strong",{className:"text-text",children:"no tienen interpolación de variables"}),". Para insertar valores usas ",e.jsx("code",{className:"text-primary",children:".formatted()"})," con marcadores",e.jsx("code",{className:"text-primary",children:" %s"}),", ",e.jsx("code",{className:"text-primary",children:"%d"}),", etc."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"El problema que resuelven:"})," antes de Text Blocks, un JSON multilínea en Java requería concatenar strings con ",e.jsx("code",{className:"text-primary",children:"\\n"})," y escapar cada comilla — completamente ilegible. Con Text Blocks escribes el texto tal cual entre triple comillas ",e.jsx("code",{className:"text-primary",children:'"""..."""'}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"El manejo del indentado es inteligente:"})," Java detecta el nivel de indentado común en todas las líneas y lo elimina automáticamente. La posición del cierre ",e.jsxs("code",{className:"text-primary",children:['"""',")"]})," en la siguiente línea determina cuántos espacios se eliminan. Así el texto queda limpio sin el indentado del código fuente."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"¿Cuándo usar Text Blocks?"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsx("li",{children:"JSON para tests o mocks: cuerpo de request/response de API"}),e.jsx("li",{children:"SQL queries largas que necesitan legibilidad"}),e.jsx("li",{children:"Plantillas HTML para emails o notificaciones"}),e.jsx("li",{children:"Scripts en migraciones de BD o configuraciones"})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"No usar"})," cuando el string es simple de una línea, o cuando necesitas interpolación compleja — ahí ",e.jsx("code",{className:"text-primary",children:"String.format()"})," o",e.jsx("code",{className:"text-primary",children:" StringBuilder"})," son más adecuados."]})]}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-4",children:"Antes de Java 13, escribir un JSON o SQL multilínea era un desastre de escapes y concatenaciones. Los Text Blocks eliminan ese problema por completo — escribes el texto tal cual y Java maneja los saltos de línea."}),e.jsx(S,{filename:"TextBlocks.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["Los Text Blocks son el equivalente de los template literals de JavaScript/TypeScript con backticks:",e.jsx("code",{className:"text-primary",children:" `...`"}),". La diferencia es que Java usa ",e.jsx("code",{className:"text-primary",children:'"""'})," en lugar de backticks."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"var — Inferencia de tipos local (Java 10+)"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:[e.jsx("code",{className:"text-primary",children:"var"})," permite que el compilador infiera el tipo de una variable local. Java sigue siendo estáticamente tipado — ",e.jsx("code",{className:"text-primary",children:"var"})," es solo azúcar sintáctico."]}),e.jsx(S,{filename:"VarEjemplo.java",code:`
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
`}),e.jsxs(F,{type:"tip",children:["Usa ",e.jsx("code",{className:"text-primary",children:"var"})," cuando el tipo es obvio por el lado derecho (ej: ",e.jsx("code",{className:"text-primary",children:"new ArrayList<>()"}),"). Evítalo cuando el tipo no es claro sin leerlo (reduce legibilidad). Es especialmente útil para tipos genéricos largos."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"String enhancements (Java 11+)"}),e.jsx(S,{filename:"StringMethods.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 33"}),e.jsx(K,{number:1,title:"Generador de HTML con Text Blocks",description:`Crea GeneradorHTML.java que:
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
}`,solutionFilename:"GeneradorHTML.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-33: text blocks, var, string enhancements"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 34"})," — Spring Boot: introducción al framework."]})]})})]})}function hS(){return e.jsxs("div",{children:[e.jsx(oe,{day:26,title:"Virtual Threads",duration:"45 min",commitMsg:"dia-26: virtual threads Java 21, Spring Boot integration"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy descubrirás Virtual Threads (Java 21, Project Loom) — una revolución que permite crear millones de hilos ligeros sin cambiar tu código. Escribes código síncrono normal y la JVM lo hace eficiente por debajo, eliminando la necesidad de reactive programming en la mayoría de casos."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Por qué son revolucionarios?"}),e.jsxs(se,{title:"Virtual Threads: concurrencia masiva sin async/await",children:[e.jsxs("p",{children:["En Node.js, ",e.jsx("code",{className:"text-primary",children:"async/await"})," es ",e.jsx("em",{children:"obligatorio"}),' para no bloquear el event loop. Cada vez que haces I/O, debes marcar la función como async. Esto "contamina" toda la jerarquía de llamadas hacia arriba (el problema del "async all the way down").']}),e.jsx("p",{children:"En Java clásico, el problema era diferente: cada plataforma thread del SO consume ~1-2MB de RAM. Con 10,000 conexiones HTTP simultáneas → 10,000 threads → ~10-20GB de RAM solo en stacks. Por eso existió WebFlux/Reactor — programación reactiva que permite manejar muchas conexiones con pocos threads, pero a costa de una complejidad enorme."}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Java 21 Virtual Threads (Project Loom)"})," resuelve esto de raz:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:["Son hilos gestionados por la ",e.jsx("strong",{className:"text-text",children:"JVM"}),", no por el SO. Cuestan ~1-2KB de RAM cada uno."]}),e.jsxs("li",{children:["Cuando un virtual thread se bloquea en I/O, la JVM lo ",e.jsx("em",{children:"desmonta"})," del carrier thread (thread de plataforma) y lo pone en espera. El carrier thread queda libre para ejecutar otro virtual thread."]}),e.jsxs("li",{children:["Tu código sigue siendo ",e.jsx("strong",{className:"text-text",children:"secuencial y síncrono"}),". Sin async/await, sin callbacks. Escribes ",e.jsx("code",{className:"text-primary",children:"result = db.query(sql)"})," y la JVM gestiona el bloqueo internamente."]}),e.jsxs("li",{children:["Puedes crear ",e.jsx("strong",{className:"text-text",children:"millones"})," de virtual threads sin agotar la RAM."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Cuándo NO usar Virtual Threads:"})," si tu código es CPU-intensivo (algoritmos, cálculos), los virtual threads no ayudan — para eso usa paralelismo con",e.jsx("code",{className:"text-primary",children:" ForkJoinPool"})," o ",e.jsx("code",{className:"text-primary",children:"parallelStream()"}),". Los virtual threads brillan únicamente en cargas ",e.jsx("em",{children:"I/O-bound"})," (BD, HTTP, archivos)."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"En Spring Boot 3.2+"}),": una sola propiedad activa virtual threads para todos los requests HTTP, sin cambiar nada más. Es la forma moderna de escalar sin reactive programming."]})]}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Los ",e.jsx("strong",{className:"text-text",children:"hilos de plataforma"})," (threads clásicos) son costosos: cada uno ocupa ~1MB de memoria del SO. Una JVM puede manejar unos pocos miles. Con ",e.jsx("strong",{className:"text-text",children:"Virtual Threads"}),", puedes crear millones porque son gestionados por la JVM, no por el sistema operativo."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[e.jsx("h3",{className:"font-bold text-text mb-2",children:"Hilos de plataforma (antes)"}),e.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[e.jsx("li",{children:"• ~1MB por hilo (stack del SO)"}),e.jsx("li",{children:"• Máximo ~10,000 hilos prácticos"}),e.jsx("li",{children:"• Context switch costoso"}),e.jsx("li",{children:"• Limitante para apps I/O-bound"})]})]}),e.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[e.jsx("h3",{className:"font-bold text-text mb-2",children:"Virtual Threads (Java 21)"}),e.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[e.jsx("li",{children:"• Muy ligeros (~KB por hilo)"}),e.jsx("li",{children:"• Millones de hilos posibles"}),e.jsx("li",{children:"• Gestionados por la JVM"}),e.jsx("li",{children:"• Ideal para apps I/O-bound (REST, BD)"})]})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Crear Virtual Threads"}),e.jsx(S,{filename:"VirtualThreads.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Virtual Threads en Spring Boot"}),e.jsx(S,{language:"bash",filename:"application.properties",code:`
# Habilitar virtual threads en Spring Boot 3.2+ (Java 21)
spring.threads.virtual.enabled=true

# Esto hace que Spring use virtual threads automáticamente para:
# - Peticiones HTTP (Tomcat/Jetty)
# - @Async tasks
# - @Scheduled tasks
# ¡Sin cambiar ningún código de tu aplicación!
`}),e.jsx(S,{filename:"Config.java",code:`
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
`}),e.jsxs(F,{type:"spring",children:["Con Spring Boot 3.2+ y Java 21, solo necesitas ",e.jsx("code",{className:"text-primary",children:"spring.threads.virtual.enabled=true"})," en tu ",e.jsx("code",{className:"text-primary",children:"application.properties"}),". Spring maneja todo automáticamente. Tu API REST puede manejar miles de peticiones concurrentes bloqueantes sin cambiar ningún código."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Cuándo usar Virtual Threads?"}),e.jsxs(F,{type:"tip",children:[e.jsx("strong",{children:"Ideal para"}),": aplicaciones I/O-bound (APIs REST, acceso a BD, llamadas HTTP externas).",e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"No reemplaza"}),": ",e.jsx("code",{className:"text-primary",children:"CompletableFuture"})," o reactive programming para lógica async compleja. Si ya tienes un sistema reactivo (WebFlux), no necesitas migrar.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"Regla simple"}),": si usas Spring Boot con operaciones bloqueantes (JPA, RestTemplate, etc.), habilita virtual threads y obtendrás mayor throughput sin código adicional."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 26"}),e.jsx(K,{number:1,title:"Benchmark: Platform vs Virtual Threads",description:`Crea un benchmark que:
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
}`,solutionFilename:"BenchmarkThreads.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-26: virtual threads, benchmark, Spring Boot config"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 27"})," — I/O y archivos: leer, escribir, Path, Files."]})]})})]})}function fS(){return e.jsxs("div",{children:[e.jsx(oe,{day:42,title:"Manejo de Excepciones",duration:"45 min",commitMsg:"dia-42: @ControllerAdvice, @ExceptionHandler, ErrorResponse"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy centralizarás el manejo de errores de tu API en un solo lugar usando ",e.jsx("code",{className:"text-primary",children:"@ControllerAdvice"}),". En vez de poner try-catch en cada Controller, defines UN handler global que intercepta excepciones de cualquier endpoint y las transforma en respuestas JSON limpias y profesionales."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Por qué necesitas manejo global de errores?"}),e.jsxs(se,{title:"@ControllerAdvice: manejo global de errores para una API profesional",children:[e.jsxs("p",{children:["En Angular capturas errores HTTP en interceptors y los presentas al usuario de forma coherente. En Spring, ",e.jsx("code",{className:"text-primary",children:"@ControllerAdvice"})," hace lo análogo en el servidor: un componente central que captura excepciones de ",e.jsx("em",{children:"todos"})," los Controllers y las transforma en respuestas JSON estructuradas con el código HTTP correcto."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Sin @ControllerAdvice"}),', Spring Boot retorna por defecto su "Whitelabel Error Page" en HTML o un JSON de Spring con campos como ',e.jsx("code",{className:"text-primary",children:"timestamp"}),",",e.jsx("code",{className:"text-primary",children:" status"}),", ",e.jsx("code",{className:"text-primary",children:"error"}),", ",e.jsx("code",{className:"text-primary",children:"path"}),"— útil para desarrollo pero inaceptable en producción porque expone detalles internos."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"El flujo correcto en una API profesional:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:["Service lanza ",e.jsx("code",{className:"text-primary",children:'ResourceNotFoundException("Producto con id 5 no encontrado")'})]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"@ControllerAdvice"})," la captura con ",e.jsx("code",{className:"text-primary",children:"@ExceptionHandler(ResourceNotFoundException.class)"})]}),e.jsxs("li",{children:["Retorna ",e.jsx("code",{className:"text-primary",children:"ResponseEntity"})," con status 404 y un JSON consistente: ",e.jsx("code",{className:"text-primary",children:`{'{'} "error": "NOT_FOUND", "mensaje": "...", "timestamp": "..." {'}'}`})]}),e.jsx("li",{children:"El Service nunca sabe nada de HTTP. El Controller nunca maneja errores. Todo centralizado."})]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Mapeo de excepciones a códigos HTTP:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"ResourceNotFoundException"})," → 404 Not Found"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"ValidationException"})," / ",e.jsx("code",{className:"text-primary",children:"MethodArgumentNotValidException"})," → 400 Bad Request"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"AccessDeniedException"})," → 403 Forbidden"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"Exception"})," (genérica) → 500 Internal Server Error"]})]})]}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["El patrón es: (1) creas excepciones personalizadas para cada caso de error (recurso no encontrado, validación fallida, acceso denegado), (2) las lanzas desde tus Services cuando algo falla, y (3) ",e.jsx("code",{className:"text-primary",children:"@ControllerAdvice"})," las captura y las convierte en ResponseEntity con el código HTTP y body JSON apropiados. Tu código de negocio solo lanza excepciones — nunca se preocupa por construir respuestas HTTP de error."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Excepciones personalizadas"}),e.jsx(S,{filename:"Excepciones.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"ErrorResponse DTO"}),e.jsx(S,{filename:"ErrorResponse.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"@ControllerAdvice — Manejador global"}),e.jsx(S,{filename:"GlobalExceptionHandler.java",code:`
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
`}),e.jsxs(F,{type:"spring",children:["Con este patrón, cuando tu Service lanza ",e.jsx("code",{className:"text-primary",children:"RecursoNoEncontradoException"}),", Spring automáticamente retorna un JSON 404 limpio al cliente. Nunca más stacktraces expuestos en producción."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejemplo de respuesta JSON"}),e.jsx(S,{language:"bash",filename:"GET /api/usuarios/99 (no existe)",code:`
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
`}),e.jsxs(F,{type:"angular",children:["En Angular, tu ",e.jsx("code",{className:"text-primary",children:"HttpClient"})," recibirá estos errores en el bloque",e.jsx("code",{className:"text-primary",children:" catchError"})," del observable. El ",e.jsx("code",{className:"text-primary",children:"error.error.mensaje"}),"o ",e.jsx("code",{className:"text-primary",children:"error.error.errores"})," tendrá el detalle para mostrar en la UI."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 42"}),e.jsx(K,{number:1,title:"GlobalExceptionHandler completo",description:`Implementa un @RestControllerAdvice con handlers para:
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
}`,solutionFilename:"GlobalExceptionHandler.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-42: @ControllerAdvice, ErrorResponse, exception handlers"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 43"})," — Validación con @Valid y Bean Validation."]})]})})]})}function gS(){return e.jsxs("div",{children:[e.jsx(oe,{day:43,title:"Validación con Bean Validation",duration:"45 min",commitMsg:"dia-43: @Valid, @NotBlank, @Email, @Size, grupos de validación"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-8",children:["Hoy aprenderás Bean Validation — el estándar de Java para validar datos con anotaciones declarativas. La validación del frontend es para UX (feedback rápido); la del backend es para ",e.jsx("strong",{className:"text-text",children:"seguridad"}),". Nunca confíes en que el cliente envía datos correctos — cualquiera puede usar Postman o curl."]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Cómo funciona Bean Validation?"}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:[e.jsx("strong",{className:"text-text",children:"Bean Validation"})," (JSR 380) te permite declarar restricciones con anotaciones (",e.jsx("code",{className:"text-primary",children:"@NotBlank"}),", ",e.jsx("code",{className:"text-primary",children:"@Email"}),", ",e.jsx("code",{className:"text-primary",children:"@Size"}),") directamente en los campos de tu DTO. Cuando un Controller recibe un request con ",e.jsx("code",{className:"text-primary",children:"@Valid"}),", Spring valida automáticamente el objeto ANTES de ejecutar tu método. Si falla, lanza una excepción que puedes manejar para retornar un error 400 con los mensajes apropiados."]}),e.jsxs(se,{title:"Bean Validation: anotaciones declarativas que sustituyen el código de validación manual",children:[e.jsxs("p",{children:["En Angular usas ",e.jsx("code",{className:"text-primary",children:"Validators.required"}),",",e.jsx("code",{className:"text-primary",children:" Validators.email"}),", ",e.jsx("code",{className:"text-primary",children:"Validators.minLength()"}),"en Reactive Forms. Bean Validation (Jakarta Validation) es el equivalente para el servidor Java: anotaciones directamente en los campos del DTO que el framework valida automáticamente."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Sin Bean Validation"})," tendrías que escribir en cada servicio:",e.jsx("code",{className:"text-primary",children:" if (email == null || email.isBlank()) throw new ValidationException(...)"}),"para cada campo — código repetitivo y propenso a olvidar casos. Con",e.jsx("code",{className:"text-primary",children:" @NotBlank"}),", ",e.jsx("code",{className:"text-primary",children:"@Email"}),",",e.jsx("code",{className:"text-primary",children:" @Size(min=2)"})," en el DTO + ",e.jsx("code",{className:"text-primary",children:"@Valid"})," en el Controller, Spring lo hace automáticamente."]}),e.jsxs("p",{children:[e.jsxs("strong",{className:"text-text",children:["El trigger: ",e.jsx("code",{className:"text-primary",children:"@Valid"})]})," en el parámetro del Controller activa la validación. Si falla, Spring lanza",e.jsx("code",{className:"text-primary",children:" MethodArgumentNotValidException"})," antes de que tu método se ejecute. Tu ",e.jsx("code",{className:"text-primary",children:"@ControllerAdvice"})," la captura y retorna 400 con los mensajes de error."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"Las anotaciones más importantes:"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"@NotNull"}),": no puede ser null"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"@NotBlank"}),": no puede ser null ni vacío ni solo espacios (para Strings)"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"@Size(min, max)"}),": longitud de String o tamaño de colección"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"@Min / @Max"}),": rango numérico"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"@Email"}),": formato de email válido"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"@Pattern(regexp)"}),": validación con regex personalizada"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"@Valid"}),": valida objetos anidados en el DTO"]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Validación frontend vs backend:"})," la validación de Angular mejora la UX mostrando errores antes de enviar. La validación de Spring protege tu API de datos malformados independientemente del cliente. ",e.jsx("em",{children:"Siempre valida en ambos lados"}),"."]})]}),e.jsx(S,{filename:"UsuarioDTO.java",code:`
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
`}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3 mb-4",children:[{a:"@NotNull",d:"No nulo"},{a:"@NotBlank",d:"No nulo ni vacío (String)"},{a:"@NotEmpty",d:"No nulo ni vacío (colecciones)"},{a:"@Size",d:"Tamaño min/max"},{a:"@Min / @Max",d:"Valor mínimo/máximo"},{a:"@Email",d:"Formato email"},{a:"@Pattern",d:"Expresión regular"},{a:"@Positive",d:"Número positivo"},{a:"@Past / @Future",d:"Fecha en pasado/futuro"}].map(({a:l,d:c})=>e.jsxs("div",{className:"p-3 bg-bg-secondary rounded-lg border border-border",children:[e.jsx("code",{className:"text-primary text-sm",children:l}),e.jsx("p",{className:"text-text-muted text-xs mt-1",children:c})]},l))})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Activar validación en el Controller"}),e.jsx(S,{filename:"UsuarioController.java",code:`
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
`}),e.jsxs(F,{type:"tip",children:[e.jsx("code",{className:"text-primary",children:"@Valid"})," vs ",e.jsx("code",{className:"text-primary",children:"@Validated"}),": Usa ",e.jsx("code",{className:"text-primary",children:"@Valid"}),"para validar el body completo de una petición. Usa ",e.jsx("code",{className:"text-primary",children:"@Validated"})," a nivel de clase para habilitar validación en parámetros sueltos (",e.jsx("code",{className:"text-primary",children:"@PathVariable"}),", ",e.jsx("code",{className:"text-primary",children:"@RequestParam"}),")."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Validación en grupos y anidada"}),e.jsx(S,{filename:"ValidacionAvanzada.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["Bean Validation es equivalente a los validadores de Angular Reactive Forms:",e.jsx("code",{className:"text-primary",children:" @NotBlank"})," = ",e.jsx("code",{className:"text-primary",children:"Validators.required"}),",",e.jsx("code",{className:"text-primary",children:" @Email"})," = ",e.jsx("code",{className:"text-primary",children:"Validators.email"}),",",e.jsx("code",{className:"text-primary",children:" @Size"})," = ",e.jsx("code",{className:"text-primary",children:"Validators.minLength/maxLength"}),". La diferencia: en Spring la validación ocurre en el servidor (nunca confíes solo en el cliente)."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 43"}),e.jsx(K,{number:1,title:"DTO con validaciones completas",description:`Crea ProductoCreateRequest con:
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
}`,solutionFilename:"ProductoCreateRequest.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-43: Bean Validation, @Valid, grupos de validación"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 44"})," — DTOs y MapStruct: separar API de BD."]})]})})]})}function bS(){return e.jsxs("div",{children:[e.jsx(oe,{day:44,title:"DTOs y MapStruct",duration:"50 min",commitMsg:"dia-44: DTOs, records, mapper manual, MapStruct"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Hoy aprenderás DTOs (Data Transfer Objects) — la capa intermedia que separa tu modelo de base de datos de lo que tu API expone al mundo. Es una práctica esencial en APIs profesionales que protege datos sensibles y desacopla tu API de tu esquema de BD."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"¿Por qué NUNCA exponer entidades JPA directamente?"}),e.jsxs(se,{title:"DTOs: separar el contrato HTTP del modelo interno de base de datos",children:[e.jsxs("p",{children:["En Angular tienes interfaces distintas para tipar lo que envías y recibes:",e.jsx("code",{className:"text-primary",children:" CreateUserRequest"}),", ",e.jsx("code",{className:"text-primary",children:"UserResponse"}),",",e.jsx("code",{className:"text-primary",children:" UpdateUserRequest"}),". No usas la misma interfaz para todo. El patrón en Spring Boot es idéntico, pero en el servidor."]}),e.jsx("p",{children:e.jsx("strong",{className:"text-text",children:"¿Por qué NUNCA exponer entidades JPA directamente en la API?"})}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Seguridad"}),": tu entidad ",e.jsx("code",{className:"text-primary",children:"Usuario"})," tiene el campo ",e.jsx("code",{className:"text-primary",children:"password"}),". Sin DTO, se expone en el JSON de respuesta. Un error catastrófico."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Acoplamiento"}),": si cambias el modelo de BD (renombras una columna, añades una relación), cambias el contrato de tu API. Los clientes se rompen."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Ciclos de serialización"}),": si ",e.jsx("code",{className:"text-primary",children:"Usuario"})," tiene ",e.jsx("code",{className:"text-primary",children:"List<Pedido>"})," y ",e.jsx("code",{className:"text-primary",children:"Pedido"})," tiene ",e.jsx("code",{className:"text-primary",children:"Usuario"}),", Jackson entra en un ciclo infinito intentando serializar."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-text",children:"Lazy loading"}),": Jackson intenta serializar relaciones lazy fuera de una sesión JPA → ",e.jsx("code",{className:"text-primary",children:"LazyInitializationException"}),"."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"El patrón correcto"}),": entidades JPA para persistencia, DTOs para la API HTTP. Conviertes entre ellos en el Service:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"XxxRequest"})," (o ",e.jsx("code",{className:"text-primary",children:"XxxDto"}),"): datos que recibe el endpoint. Tiene anotaciones de validación."]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-primary",children:"XxxResponse"}),": datos que retorna el endpoint. Solo los campos públicos necesarios."]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Records son ideales para DTOs"})," (Java 16+): inmutables, generan equals/hashCode/toString, y su sintaxis compacta es perfecta para objetos de datos puros. Para conversiones en escala, usa ",e.jsx("strong",{className:"text-text",children:"MapStruct"})," — genera automáticamente el código de mapeo entre entidades y DTOs en tiempo de compilación."]})]}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Exponer directamente tus entidades JPA a la API es uno de los errores más comunes en Spring Boot. Los ",e.jsx("strong",{className:"text-text",children:"DTOs"})," son objetos simples (records) diseñados específicamente para cada caso de uso de tu API, sin acoplar el contrato HTTP al modelo interno de BD."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[e.jsx("h3",{className:"font-bold text-red-400 mb-2",children:"❌ Sin DTOs (problemas)"}),e.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[e.jsx("li",{children:"• Expones campos internos (contraseña, etc.)"}),e.jsx("li",{children:"• Lazy-loading de JPA causa errores JSON"}),e.jsx("li",{children:"• Ciclos infinitos en relaciones bidireccionales"}),e.jsx("li",{children:"• El cliente puede enviar campos que no debería"}),e.jsx("li",{children:"• Cambio en la BD = cambio en la API"})]})]}),e.jsxs("div",{className:"p-4 bg-bg-secondary rounded-xl border border-border",children:[e.jsx("h3",{className:"font-bold text-green-400 mb-2",children:"✅ Con DTOs (solución)"}),e.jsxs("ul",{className:"text-text-muted text-sm space-y-1",children:[e.jsx("li",{children:"• Solo expones lo que el cliente necesita"}),e.jsx("li",{children:"• Sin problemas de serialización JPA"}),e.jsx("li",{children:"• Puedes tener DTOs distintos para crear/leer"}),e.jsx("li",{children:"• La BD y la API evolucionan independientemente"}),e.jsx("li",{children:"• Validaciones específicas por operación"})]})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Definir DTOs con Records"}),e.jsx(S,{filename:"DTOs.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Mapeo manual y con MapStruct"}),e.jsx(S,{filename:"UsuarioMapper.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Usando DTOs en Controller y Service"}),e.jsx(S,{filename:"UsuarioController.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["Los DTOs en Spring son como los ",e.jsx("strong",{children:"interfaces/models"})," en Angular:",e.jsx("code",{className:"text-primary",children:" UsuarioResponse"})," = la interface que defines en Angular para tipar lo que llega del HTTP. ",e.jsx("code",{className:"text-primary",children:"UsuarioCreateRequest"})," = los datos del formulario que envías al backend."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 44"}),e.jsx(K,{number:1,title:"DTOs completos para Producto",description:`Crea el set completo de DTOs para Producto:
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
}`,solutionFilename:"ProductoMapper.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-44: DTOs, records, mapper, separar API de BD"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["Mañana: ",e.jsx("strong",{className:"text-text",children:"Día 45"})," — Perfiles, configuración y CORS."]})]})})]})}function yS(){return e.jsxs("div",{children:[e.jsx(oe,{day:45,title:"Perfiles y Configuración",duration:"50 min",commitMsg:"dia-45: profiles, @Value, @ConfigurationProperties, CORS"}),e.jsx("p",{className:"text-text-muted leading-relaxed mb-8",children:"Último día del roadmap. Hoy aprenderás a configurar tu aplicación para diferentes entornos (desarrollo, testing, producción) usando perfiles, a externalizar configuración de forma segura, y a configurar CORS para que tu frontend Angular pueda comunicarse con tu API Spring Boot."}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Perfiles de entorno (Profiles)"}),e.jsxs(se,{title:"Profiles: el mismo JAR, múltiples entornos sin recompilar",children:[e.jsxs("p",{children:["En Angular los environments se compilan en el bundle — necesitas ",e.jsx("code",{className:"text-primary",children:"ng build --configuration=production"}),"para cada entorno. En Spring Boot el enfoque es diferente y más flexible: compilas ",e.jsx("strong",{className:"text-text",children:"una vez"}),"y el mismo JAR funciona en desarrollo, staging, y producción activando el perfil correcto."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Cómo funciona:"})," creas archivos",e.jsx("code",{className:"text-primary",children:" application.properties"})," (base),",e.jsx("code",{className:"text-primary",children:" application-dev.properties"})," (sobreescribe para dev),",e.jsx("code",{className:"text-primary",children:" application-prod.properties"})," (sobreescribe para prod). Spring carga el base más el del perfil activo. El perfil activo se define con:"]}),e.jsxs("ul",{className:"list-disc list-inside text-text-muted space-y-1 ml-2",children:[e.jsxs("li",{children:["Variable de entorno: ",e.jsx("code",{className:"text-primary",children:"SPRING_PROFILES_ACTIVE=prod"})]}),e.jsxs("li",{children:["Argumento JVM: ",e.jsx("code",{className:"text-primary",children:"java -jar app.jar --spring.profiles.active=prod"})]}),e.jsxs("li",{children:["En tests: ",e.jsx("code",{className:"text-primary",children:'@ActiveProfiles("test")'})]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Secretos y variables sensibles:"})," nunca pongas contraseñas, API keys, o connection strings en el código fuente o en archivos commiteados. Usa variables de entorno del sistema operativo (",e.jsx("code",{className:"text-primary",children:"${DB_PASSWORD}"})," en",e.jsx("code",{className:"text-primary",children:" application-prod.properties"}),") o servicios como AWS Secrets Manager, Vault, o las variables de entorno de tu plataforma de deploy (Railway, Heroku, etc.)."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-text",children:"Caso de uso típico:"})," en dev usas H2 (BD en memoria, sin instalar nada), en prod usas PostgreSQL. Con profiles, solo cambias las propiedades de conexión — el código Java no cambia nada."]})]}),e.jsxs("p",{className:"text-text-muted leading-relaxed mb-4",children:["Los ",e.jsx("strong",{className:"text-text",children:"profiles"})," permiten tener configuraciones completamente diferentes para cada entorno: BD en memoria para desarrollo (H2), BD real para producción (PostgreSQL), diferentes puertos, niveles de log, etc. Se activan con una sola propiedad o variable de entorno."]}),e.jsx(S,{language:"bash",filename:"src/main/resources/application.properties",code:`
# Perfil activo (cambiar según entorno)
spring.profiles.active=dev
`}),e.jsx(S,{language:"bash",filename:"application-dev.properties",code:`
# Configuración de DESARROLLO
spring.datasource.url=jdbc:h2:mem:devdb
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=create-drop
server.port=8080
logging.level.com.miapp=DEBUG
spring.h2.console.enabled=true
`}),e.jsx(S,{language:"bash",filename:"application-prod.properties",code:`
# Configuración de PRODUCCIÓN
spring.datasource.url=jdbc:postgresql://prod-server:5432/miapp
spring.datasource.username=\${DB_USERNAME}
spring.datasource.password=\${DB_PASSWORD}
spring.jpa.show-sql=false
spring.jpa.hibernate.ddl-auto=validate
server.port=8080
logging.level.root=WARN
spring.h2.console.enabled=false
`}),e.jsx(S,{language:"bash",filename:"application-test.properties",code:`
# Configuración de TESTS
spring.datasource.url=jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1
spring.jpa.hibernate.ddl-auto=create-drop
logging.level.root=ERROR
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"@Value y @ConfigurationProperties"}),e.jsx(S,{filename:"Configuracion.java",code:`
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
`}),e.jsx(S,{language:"bash",filename:"application.properties (propiedades custom)",code:`
app.nombre=Mi API
app.version=1.0.0
app.email.from=noreply@miapp.com
app.email.smtp-host=smtp.gmail.com
app.email.smtp-port=587
app.security.jwt-secret=clave-super-secreta-de-produccion
app.security.jwt-expiracion=86400
`}),e.jsxs(F,{type:"tip",children:["Usa ",e.jsx("code",{className:"text-primary",children:"@ConfigurationProperties"})," sobre ",e.jsx("code",{className:"text-primary",children:"@Value"})," para grupos de propiedades — es más limpio, testeable y soporta autocompletado en IDEs. Las propiedades sensibles (passwords, secrets) siempre deben venir de variables de entorno en producción."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"@Profile — Beans por entorno"}),e.jsx(S,{filename:"Beans.java",code:`
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
`})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"CORS — Permitir peticiones desde Angular"}),e.jsx(S,{filename:"CorsConfig.java",code:`
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
`}),e.jsxs(F,{type:"angular",children:["Sin configurar CORS, tu app Angular recibirá ",e.jsx("strong",{children:"CORS error"})," al hacer peticiones HTTP. En Angular dev puedes usar un proxy (",e.jsx("code",{className:"text-primary",children:"proxy.conf.json"}),"), pero en producción necesitas configurar CORS en Spring obligatoriamente para que el navegador permita las peticiones."]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-text mb-4",children:"Ejercicios del Día 45"}),e.jsx(K,{number:1,title:"Configuración completa por entorno",description:`Configura tu proyecto con:
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
}`,solutionFilename:"DataInitializer.java"})]}),e.jsx("section",{className:"mb-8",children:e.jsxs("div",{className:"bg-[#161b22] border border-[#30363d] rounded-xl p-5",children:[e.jsx("h3",{className:"text-success font-semibold mb-2 text-sm",children:"Commit del día"}),e.jsx(S,{language:"bash",code:'git commit -m "dia-45: profiles, CORS, ConfigurationProperties - ROADMAP COMPLETO!"'}),e.jsxs("p",{className:"text-text-muted text-xs mt-2",children:["🎉 ",e.jsx("strong",{className:"text-text",children:"Felicidades!"})," Has completado los 45 días del roadmap Java + Spring Boot."]})]})})]})}function jS(){return e.jsxs(Cb,{children:[e.jsx(ix,{}),e.jsx(ab,{children:e.jsxs(ie,{element:e.jsx(vj,{}),children:[e.jsx(ie,{path:"/",element:e.jsx(Sj,{})}),e.jsx(ie,{path:"/introduccion",element:e.jsx(Mv,{})}),e.jsx(ie,{path:"/sintaxis",element:e.jsx(Ov,{})}),e.jsx(ie,{path:"/tipos-datos",element:e.jsx(Dv,{})}),e.jsx(ie,{path:"/variables",element:e.jsx(wv,{})}),e.jsx(ie,{path:"/operadores",element:e.jsx(Lv,{})}),e.jsx(ie,{path:"/strings",element:e.jsx(qv,{})}),e.jsx(ie,{path:"/condicionales",element:e.jsx(zv,{})}),e.jsx(ie,{path:"/bucles",element:e.jsx(Uv,{})}),e.jsx(ie,{path:"/arrays",element:e.jsx(Bv,{})}),e.jsx(ie,{path:"/metodos",element:e.jsx(Pv,{})}),e.jsx(ie,{path:"/clases-objetos",element:e.jsx(kv,{})}),e.jsx(ie,{path:"/encapsulamiento",element:e.jsx(_v,{})}),e.jsx(ie,{path:"/herencia",element:e.jsx(Hv,{})}),e.jsx(ie,{path:"/polimorfismo",element:e.jsx(Iv,{})}),e.jsx(ie,{path:"/interfaces",element:e.jsx(Jv,{})}),e.jsx(ie,{path:"/clases-abstractas",element:e.jsx(Fv,{})}),e.jsx(ie,{path:"/colecciones",element:e.jsx(Vv,{})}),e.jsx(ie,{path:"/excepciones",element:e.jsx(Gv,{})}),e.jsx(ie,{path:"/generics",element:e.jsx(Yv,{})}),e.jsx(ie,{path:"/enums",element:e.jsx(Qv,{})}),e.jsx(ie,{path:"/comparador",element:e.jsx(pS,{})}),e.jsx(ie,{path:"/lambdas",element:e.jsx(Xv,{})}),e.jsx(ie,{path:"/streams",element:e.jsx(Zv,{})}),e.jsx(ie,{path:"/optional",element:e.jsx(Kv,{})}),e.jsx(ie,{path:"/concurrencia",element:e.jsx($v,{})}),e.jsx(ie,{path:"/virtual-threads",element:e.jsx(hS,{})}),e.jsx(ie,{path:"/io-archivos",element:e.jsx(Wv,{})}),e.jsx(ie,{path:"/fechas-api",element:e.jsx(eS,{})}),e.jsx(ie,{path:"/records",element:e.jsx(aS,{})}),e.jsx(ie,{path:"/sealed-classes",element:e.jsx(tS,{})}),e.jsx(ie,{path:"/pattern-matching",element:e.jsx(sS,{})}),e.jsx(ie,{path:"/patrones-diseno",element:e.jsx(nS,{})}),e.jsx(ie,{path:"/text-blocks",element:e.jsx(xS,{})}),e.jsx(ie,{path:"/spring-intro",element:e.jsx(rS,{})}),e.jsx(ie,{path:"/spring-setup",element:e.jsx(iS,{})}),e.jsx(ie,{path:"/spring-anotaciones",element:e.jsx(lS,{})}),e.jsx(ie,{path:"/spring-controllers",element:e.jsx(oS,{})}),e.jsx(ie,{path:"/spring-services",element:e.jsx(cS,{})}),e.jsx(ie,{path:"/spring-repositories",element:e.jsx(dS,{})}),e.jsx(ie,{path:"/spring-security",element:e.jsx(uS,{})}),e.jsx(ie,{path:"/spring-testing",element:e.jsx(mS,{})}),e.jsx(ie,{path:"/spring-excepciones",element:e.jsx(fS,{})}),e.jsx(ie,{path:"/spring-validacion",element:e.jsx(gS,{})}),e.jsx(ie,{path:"/spring-dtos",element:e.jsx(bS,{})}),e.jsx(ie,{path:"/spring-perfiles",element:e.jsx(yS,{})})]})})]})}eg.createRoot(document.getElementById("root")).render(e.jsx(L.StrictMode,{children:e.jsx(jS,{})}));
