/*! 
 Build based on gin-vue-admin 
 Time : 1699436428000 */
!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function t(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./80index-legacy.c731f6a5.js","./80tab-pane-legacy.518b8698.js"],(function(n,a){"use strict";var r,u,l,i,o,s,c,v,f,m,y,p,g,d,b,h,O,S,j,w,I,q,k,P,N,C;return{setters:[function(e){r=e.a5,u=e.u,l=e.a,i=e.b,o=e.a7,s=e.P,c=e.a6,v=e.K,f=e.o,m=e.d,y=e.g,p=e.w,g=e.F,d=e.y,b=e.j,h=e.e,O=e.z,S=e.X,j=e.k,w=e.t,I=e.a8,q=e.ai,k=e.Q,P=e.R,N=e.aj,C=e.ak},null],execute:function(){var a={class:"router-history"},x=["tab"],J={name:"HistoryComponent"};n("default",Object.assign(J,{setup:function(n){var J=r(),E=u(),V=function(e){return e.name+JSON.stringify(e.query)+JSON.stringify(e.params)},A=l([]),T=l(""),D=l(!1),R=i(),L=function(e){return e.name+JSON.stringify(e.query)+JSON.stringify(e.params)},_=l(0),K=l(0),X=l(!1),z=l(!1),F=l(""),H=o((function(){return R.userInfo.authority.defaultRouter})),Q=function(){A.value=[{name:H.value,meta:{title:"首页"},query:{},params:{}}],E.push({name:H.value}),D.value=!1,sessionStorage.setItem("historys",JSON.stringify(A.value))},U=function(){var e,t=A.value.findIndex((function(t){return V(t)===F.value&&(e=t),V(t)===F.value})),n=A.value.findIndex((function(e){return V(e)===T.value}));A.value.splice(0,t),t>n&&E.push(e),sessionStorage.setItem("historys",JSON.stringify(A.value))},Y=function(){var e,t=A.value.findIndex((function(t){return V(t)===F.value&&(e=t),V(t)===F.value})),n=A.value.findIndex((function(e){return V(e)===T.value}));A.value.splice(t+1,A.value.length),t<n&&E.push(e),sessionStorage.setItem("historys",JSON.stringify(A.value))},$=function(){var e;A.value=A.value.filter((function(t){return V(t)===F.value&&(e=t),V(t)===F.value})),E.push(e),sessionStorage.setItem("historys",JSON.stringify(A.value))},B=function(n){if(!A.value.some((function(e){return function(e,t){if(e.name!==t.name)return!1;if(Object.keys(e.query).length!==Object.keys(t.query).length||Object.keys(e.params).length!==Object.keys(t.params).length)return!1;for(var n in e.query)if(e.query[n]!==t.query[n])return!1;for(var a in e.params)if(e.params[a]!==t.params[a])return!1;return!0}(e,n)}))){var a={};a.name=n.name,a.meta=function(n){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?e(Object(r),!0).forEach((function(e){t(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}({},n.meta),delete a.meta.matched,a.query=n.query,a.params=n.params,A.value.push(a)}window.sessionStorage.setItem("activeValue",V(n))},G=l({}),M=function(e){var t,n=null==e||null===(t=e.props)||void 0===t?void 0:t.name;if(n){var a=G.value[n];E.push({name:a.name,query:a.query,params:a.params})}},W=function(e){var t=A.value.findIndex((function(t){return V(t)===e}));V(J)===e&&(1===A.value.length?E.push({name:H.value}):t<A.value.length-1?E.push({name:A.value[t+1].name,query:A.value[t+1].query,params:A.value[t+1].params}):E.push({name:A.value[t-1].name,query:A.value[t-1].query,params:A.value[t-1].params})),A.value.splice(t,1)};s((function(){return D.value}),(function(){D.value?document.body.addEventListener("click",(function(){D.value=!1})):document.body.removeEventListener("click",(function(){D.value=!1}))})),s((function(){return J}),(function(e,t){"Login"!==e.name&&"Reload"!==e.name&&(A.value=A.value.filter((function(e){return!e.meta.closeTab})),B(e),sessionStorage.setItem("historys",JSON.stringify(A.value)),T.value=window.sessionStorage.getItem("activeValue"))}),{deep:!0}),s((function(){return A.value}),(function(){sessionStorage.setItem("historys",JSON.stringify(A.value)),G.value={},A.value.forEach((function(e){G.value[V(e)]=e})),c.emit("setKeepAlive",A.value)}),{deep:!0});return function(){c.on("closeThisPage",(function(){W(L(J))})),c.on("closeAllPage",(function(){Q()})),c.on("mobile",(function(e){z.value=e})),c.on("collapse",(function(e){X.value=e}));var e=[{name:H.value,meta:{title:"首页"},query:{},params:{}}];A.value=JSON.parse(sessionStorage.getItem("historys"))||e,window.sessionStorage.getItem("activeValue")?T.value=window.sessionStorage.getItem("activeValue"):T.value=V(J),B(J),"true"===window.sessionStorage.getItem("needCloseAll")&&(Q(),window.sessionStorage.removeItem("needCloseAll"))}(),v((function(){c.off("collapse"),c.off("mobile")})),function(e,t){var n=N,r=C;return f(),m("div",a,[y(r,{modelValue:T.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return T.value=e}),closable:!(1===A.value.length&&e.$route.name===S(H)),type:"card",onContextmenu:t[1]||(t[1]=q((function(e){return function(e){if(1===A.value.length&&J.name===H.value)return!1;var t,n="";(n="SPAN"===e.srcElement.nodeName?e.srcElement.offsetParent.id:e.srcElement.id)&&(D.value=!0,t=X.value?54:220,z.value&&(t=0),_.value=e.clientX-t,K.value=e.clientY+10,F.value=n.substring(4))}(e)}),["prevent"])),onTabClick:M,onTabRemove:W},{default:p((function(){return[(f(!0),m(g,null,d(A.value,(function(e){return f(),b(n,{key:L(e),label:e.meta.title,name:L(e),tab:e,class:"gva-tab"},{label:p((function(){return[h("span",{tab:e,style:O({color:T.value===L(e)?S(R).activeColor:"#333"})},[h("i",{class:"dot",style:O({backgroundColor:T.value===L(e)?S(R).activeColor:"#ddd"})},null,4),j(" "+w(S(I)(e.meta.title,e)),1)],12,x)]})),_:2},1032,["label","name","tab"])})),128))]})),_:1},8,["modelValue","closable"]),k(h("ul",{style:O({left:_.value+"px",top:K.value+"px"}),class:"contextmenu"},[h("li",{onClick:Q},"关闭所有"),h("li",{onClick:U},"关闭左侧"),h("li",{onClick:Y},"关闭右侧"),h("li",{onClick:$},"关闭其他")],4),[[P,D.value]])])}}}))}}}))}();
