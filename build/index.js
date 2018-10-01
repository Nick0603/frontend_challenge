!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,n){if(!O[e]||!w[e])return;for(var r in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(h[r]=n[r]);0==--v&&0===m&&D()}(e,r),n&&n(e,r)};var r,t=!0,o="34a1cce391ea39e25e64",i=1e4,c={},d=[],a=[];function l(e){var n=P[e];if(!n)return x;var t=function(t){return n.hot.active?(P[t]?-1===P[t].parents.indexOf(e)&&P[t].parents.push(e):(d=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),d=[]),x(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return x[e]},set:function(n){x[e]=n}}};for(var i in x)Object.prototype.hasOwnProperty.call(x,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(t,i,o(i));return t.e=function(e){return"ready"===p&&u("prepare"),m++,x.e(e).then(n,function(e){throw n(),e});function n(){m--,"prepare"===p&&(b[e]||j(e),0===m&&0===v&&D())}},t.t=function(e,n){return 1&n&&(e=t(e)),x.t(e,-2&n)},t}var s=[],p="idle";function u(e){p=e;for(var n=0;n<s.length;n++)s[n].call(null,e)}var f,h,y,v=0,m=0,b={},w={},O={};function g(e){return+e+""===e?+e:e}function _(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return t=e,u("check"),function(e){return e=e||1e4,new Promise(function(n,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,i=x.p+""+o+".hot-update.json";t.open("GET",i,!0),t.timeout=e,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+i+" timed out."));else if(404===t.status)n();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(t.responseText)}catch(e){return void r(e)}n(e)}}})}(i).then(function(e){if(!e)return u("idle"),null;w={},b={},O=e.c,y=e.h,u("prepare");var n=new Promise(function(e,n){f={resolve:e,reject:n}});h={};return j(0),"prepare"===p&&0===m&&0===v&&D(),n})}function j(e){O[e]?(w[e]=!0,v++,function(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.charset="utf-8",r.src=x.p+""+e+"."+o+".hot-update.js",n.appendChild(r)}(e)):b[e]=!0}function D(){u("ready");var e=f;if(f=null,e)if(t)Promise.resolve().then(function(){return E(t)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&n.push(g(r));e.resolve(n)}}function E(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var r,t,i,a,l;function s(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),i=o.id,c=o.chain;if((a=P[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<a.parents.length;d++){var l=a.parents[d],s=P[l];if(s){if(s.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===n.indexOf(l)&&(s.hot._acceptedDependencies[i]?(r[l]||(r[l]=[]),f(r[l],[i])):(delete r[l],n.push(l),t.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function f(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var v={},m=[],b={},w=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var _ in h)if(Object.prototype.hasOwnProperty.call(h,_)){var j;l=g(_);var D=!1,E=!1,H=!1,I="";switch((j=h[_]?s(l):{type:"disposed",moduleId:_}).chain&&(I="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(D=new Error("Aborted because of self decline: "+j.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(j),n.ignoreUnaccepted||(D=new Error("Aborted because "+l+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(j),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(j),H=!0;break;default:throw new Error("Unexception type "+j.type)}if(D)return u("abort"),Promise.reject(D);if(E)for(l in b[l]=h[l],f(m,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,l)&&(v[l]||(v[l]=[]),f(v[l],j.outdatedDependencies[l]));H&&(f(m,[j.moduleId]),b[l]=w)}var k,M=[];for(t=0;t<m.length;t++)l=m[t],P[l]&&P[l].hot._selfAccepted&&M.push({module:l,errorHandler:P[l].hot._selfAccepted});u("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete installedChunks[e]}(e)});for(var A,S,U=m.slice();U.length>0;)if(l=U.pop(),a=P[l]){var q={},T=a.hot._disposeHandlers;for(i=0;i<T.length;i++)(r=T[i])(q);for(c[l]=q,a.hot.active=!1,delete P[l],delete v[l],i=0;i<a.children.length;i++){var C=P[a.children[i]];C&&((k=C.parents.indexOf(l))>=0&&C.parents.splice(k,1))}}for(l in v)if(Object.prototype.hasOwnProperty.call(v,l)&&(a=P[l]))for(S=v[l],i=0;i<S.length;i++)A=S[i],(k=a.children.indexOf(A))>=0&&a.children.splice(k,1);for(l in u("apply"),o=y,b)Object.prototype.hasOwnProperty.call(b,l)&&(e[l]=b[l]);var R=null;for(l in v)if(Object.prototype.hasOwnProperty.call(v,l)&&(a=P[l])){S=v[l];var N=[];for(t=0;t<S.length;t++)if(A=S[t],r=a.hot._acceptedDependencies[A]){if(-1!==N.indexOf(r))continue;N.push(r)}for(t=0;t<N.length;t++){r=N[t];try{r(S)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:S[t],error:e}),n.ignoreErrored||R||(R=e)}}}for(t=0;t<M.length;t++){var L=M[t];l=L.module,d=[l];try{x(l)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:r,originalError:e}),n.ignoreErrored||R||(R=r),R||(R=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||R||(R=e)}}return R?(u("fail"),Promise.reject(R)):(u("idle"),new Promise(function(e){e(m)}))}var P={};function x(n){if(P[n])return P[n].exports;var t=P[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:_,apply:E,status:function(e){if(!e)return p;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var n=s.indexOf(e);n>=0&&s.splice(n,1)},data:c[e]};return r=void 0,n}(n),parents:(a=d,d=[],a),children:[]};return e[n].call(t.exports,t,t.exports,l(n)),t.l=!0,t.exports}x.m=e,x.c=P,x.d=function(e,n,r){x.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},x.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},x.t=function(e,n){if(1&n&&(e=x(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(x.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)x.d(r,t,function(n){return e[n]}.bind(null,t));return r},x.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(n,"a",n),n},x.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},x.p="",x.h=function(){return o},l(0)(x.s=0)}([function(e,n){e.exports='<!DOCTYPE js>\n<html>\n  <head>\n    <title>FrontEnd Challenge - </title>\n    <link href="app.css" rel="stylesheet"/>\n    <link href="layout.css" rel="stylesheet"/>\n  </head>\n  <body>\n    <header id="header">\n      <nav></nav>\n    </header>\n    <main>\n      <h1>home</h1>\n      <input type="text"/>\n    </main>\n    <footer id="footer">\n      <section>\n        <p>some footer content</p>\n      </section>\n    </footer>\n  </body>\n</html>'}]);