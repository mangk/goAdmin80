/*! 
 Build based on gin-vue-admin 
 Time : 1699436580000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var a=t&&t.prototype instanceof v?t:v,i=Object.create(a.prototype),u=new O(r||[]);return o(i,"_invoke",{value:k(e,n,u)}),i}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var d={};function v(){}function h(){}function p(){}var y={};c(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(E([])));m&&m!==n&&r.call(m,i)&&(y=m);var w=p.prototype=v.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(o,a,i,u){var l=f(e[o],e,a);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,i,u)}),(function(e){n("throw",e,i,u)})):t.resolve(s).then((function(e){c.value=e,i(c)}),(function(e){return n("throw",e,i,u)}))}u(l.arg)}var a;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return a=a?a.then(o,o):o()}})}function k(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return I()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var u=j(i,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=f(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function j(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=f(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function E(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:I}}function I(){return{value:void 0,done:!0}}return h.prototype=p,o(w,"constructor",{value:p,configurable:!0}),o(p,"constructor",{value:h,configurable:!0}),h.displayName=c(p,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,l,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},b(x.prototype),c(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new x(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(w),c(w,l,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=E,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:E(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function t(e,t,n,r,o,a,i){try{var u=e[a](i),l=u.value}catch(c){return void n(c)}u.done?t(l):Promise.resolve(l).then(r,o)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=e.apply(n,r);function u(e){t(i,o,a,u,l,"next",e)}function l(e){t(i,o,a,u,l,"throw",e)}u(void 0)}))}}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./80index-legacy.c731f6a5.js","./80loading-legacy.518b8698.js","./80button-legacy.518b8698.js","./80popper-legacy.518b8698.js","./80scrollbar-legacy.518b8698.js","./80icon-legacy.518b8698.js","./80col-legacy.518b8698.js","./80goAdmin80-legacy.3da963ed.js","./80index-legacy.320cbaf6.js","./80history-legacy.52c0a67c.js","./80search-legacy.447065e3.js","./80bottomInfo-legacy.84e84dc2.js","./80index-legacy.93e300a4.js","./80dialog-legacy.518b8698.js","./80overlay-legacy.518b8698.js","./80index-legacy.faf91a1c.js","./80tooltip-legacy.518b8698.js","./80index-legacy.75017d34.js","./80menuItem-legacy.f56b6cf9.js","./80_plugin-vue_export-helper-legacy.c6aa7c23.js","./80asyncSubmenu-legacy.037316cd.js","./80tab-pane-legacy.518b8698.js","./80index-legacy.8831c42b.js","./80drawer-legacy.518b8698.js"],(function(t,o){"use strict";var a,i,u,l,c,s,f,d,v,h,p,y,g,m,w,b,x,k,j,_,L,O,E,I,S,C,A,M,N,P,G,T,F,q,V,D,R,U,z,K,W,Y,$,B,H,J,Q,X,Z,ee,te,ne,re,oe,ae,ie,ue,le;return{setters:[function(e){a=e.a2,i=e.u,u=e.b,l=e.V,c=e.a,s=e.r,f=e.P,d=e.o,v=e.j,h=e.w,p=e.Q,y=e.e,g=e.a3,m=e.g,w=e.k,b=e.d,x=e.F,k=e.y,j=e.t,_=e.f,L=e.s,O=e.a4,E=e.a5,I=e.c,S=e.I,C=e.a6,A=e.a7,M=e.J,N=e.x,P=e.M,G=e.z,T=e.X,F=e.T,q=e.a8,V=e.R,D=e.W,R=e.A,U=e.m,z=e.D,K=e.a9,W=e.C,Y=e.aa,$=e.ab,B=e.B,H=e.ac,J=e.ad,Q=e.ae,X=e.af,Z=e.ag,ee=e.ah,te=e.a1},null,null,null,null,null,null,function(e){ne=e._},function(e){re=e.default},function(e){oe=e.default},function(e){ae=e.default},function(e){ie=e.default},function(e){ue=e.C},null,null,function(e){le=e.default},null,null,null,null,null,null,null,null],execute:function(){var o={key:0,class:"quick-title"},ce=["onClick"],se={class:"dialog-footer"},fe={name:"CommandMenu"},de=Object.assign(fe,{setup:function(e,t){var n=t.expose,a=i(),E=i(),I=u(),S=l(),C=c(!1),A=c(""),M=s([]),N=function e(t){var n=[];return t.forEach((function(t){t.children&&t.children.length>0?n.push.apply(n,r(e(t.children))):t.meta.title&&t.meta.title.indexOf(A.value)>-1&&n.push({label:t.meta.title,func:function(){return T(t)}})})),n},P=function(){var e,t={label:"跳转",children:[]},n=N(S.asyncRouters[0].children);(e=t.children).push.apply(e,r(n)),M.push(t)},G=function(){var e,t={label:"操作",children:[]},n=[{label:"亮色主题",func:function(){return F("light")}},{label:"暗色主题",func:function(){return F("dark")}},{label:"退出登录",func:function(){return I.LoginOut()}}];(e=t.children).push.apply(e,r(n.filter((function(e){return e.label.indexOf(A.value)>-1})))),M.push(t)};P(),G();var T=function(e){var t,n,r=e.name,o={},i={};(null===(t=S.routeMap[r])||void 0===t?void 0:t.parameters)&&(null===(n=S.routeMap[r])||void 0===n||n.parameters.forEach((function(e){"query"===e.type?o[e.key]=e.value:i[e.key]=e.value}))),r!==E.name&&(e.name.indexOf("http://")>-1||e.name.indexOf("https://")>-1?window.open(e.name):a.push({name:r,query:o,params:i}),C.value=!1)},F=function(e){null!==e?I.changeSideMode(e):I.changeSideMode("dark")},q=function(){C.value=!1};return n({open:function(){C.value=!0}}),f(A,(function(){M.length=0,P(),G()})),function(e,t){var n=L,r=O;return d(),v(r,{modelValue:C.value,"onUpdate:modelValue":t[1]||(t[1]=function(e){return C.value=e}),width:"30%",class:"overlay","show-close":!1},{header:h((function(){return[p(y("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return A.value=e}),class:"quick-input",placeholder:"请输入你需要快捷到达的功能"},null,512),[[g,A.value]])]})),footer:h((function(){return[y("span",se,[m(n,{onClick:q},{default:h((function(){return[w("关闭")]})),_:1})])]})),default:h((function(){return[(d(!0),b(x,null,k(M,(function(e,t){return d(),b("div",{key:t},[e.children.length?(d(),b("div",o,j(e.label),1)):_("",!0),(d(!0),b(x,null,k(e.children,(function(e,n){return d(),b("div",{key:t+"-"+n,class:"quick-item",onClick:e.func},j(e.label),9,ce)})),128))])})),128))]})),_:1},8,["modelValue"])}}}),ve={key:0,alt:"",class:"logoimg",src:ne},he=["src"],pe={key:0,class:"gvaIcon gvaIcon-arrow-double-right"},ye={key:1,class:"gvaIcon gvaIcon-arrow-double-left"},ge={class:"right-box"},me={class:"dp-flex justify-content-center align-items height-full width-full"},we={class:"header-avatar",style:{cursor:"pointer"}},be=y("div",null,"指令菜单",-1),xe={style:{"margin-left":"8px"}},ke={class:"button"},je=y("span",{class:"button"},"K",-1),_e={name:"Layout"};t("default",Object.assign(_e,{setup:function(t){var r=i(),o=E(),f=l(),g=c(!1),L=c(!0),O=c(!1),ne=c("");c(!1);var ce=function(){"WIN"===window.localStorage.getItem("osType")?ne.value="Ctrl":ne.value="⌘";window.addEventListener("keydown",(function(e){e.ctrlKey&&"k"===e.key&&(e.preventDefault(),_e())}));var e=document.body.clientWidth;e<1e3?(O.value=!0,L.value=!1,g.value=!0):e>=1e3&&e<1200?(O.value=!1,L.value=!1,g.value=!0):(O.value=!1,L.value=!0,g.value=!1)};ce();var se=s({name:window.g.NAME?window.g.NAME:I.appName,logo:!!window.g.LOGO&&window.g.LOGO});window.g.LOAD_INFO&&a({url:"/info",method:"get"}).then(function(){var t=n(e().mark((function t(n){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.data.hasOwnProperty("message")&&U(n.data.message);case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var fe=c(),_e=function(){fe.value.open()},Le=c(!1);S((function(){C.emit("collapse",g.value),C.emit("mobile",O.value),C.on("reload",Me),C.on("showLoading",(function(){Le.value=!0})),C.on("closeLoading",(function(){Le.value=!1})),window.onresize=function(){return ce(),C.emit("collapse",g.value),void C.emit("mobile",O.value)},Oe.loadingInstance&&Oe.loadingInstance.close()}));var Oe=u(),Ee=A((function(){return"dark"===Oe.sideMode?"#fff":"light"===Oe.sideMode?"#191a23":Oe.baseColor})),Ie=A((function(){return"dark"===Oe.sideMode?"#191a23":"light"===Oe.sideMode?"#fff":Oe.sideMode})),Se=A((function(){return o.meta.matched})),Ce=c(!0),Ae=null,Me=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Ae&&window.clearTimeout(Ae),Ae=window.setTimeout(n(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.meta.keepAlive){e.next=7;break}return Ce.value=!1,e.next=4,M();case 4:Ce.value=!0,e.next=9;break;case 7:n=o.meta.title,r.push({name:"Reload",params:{title:n}});case 9:case"end":return e.stop()}}),t)}))),400);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Ne=c(!1),Pe=function(){g.value=!g.value,L.value=!g.value,Ne.value=!g.value,C.emit("collapse",g.value)},Ge=function(){r.push({name:"person"})};return function(e,t){var n=z,r=K,a=W,i=Y,u=$,l=N("arrow-down"),c=B,s=H,E=J,I=Q,S=X,C=N("router-view"),A=Z,M=ee,U=te;return d(),v(M,{class:"layout-cont"},{default:h((function(){return[m(M,{class:P([L.value?"openside":"hideside",O.value?"mobile":""])},{default:h((function(){return[m(n,{class:P([Ne.value?"shadowBg":""]),onClick:t[0]||(t[0]=function(e){return Ne.value=!Ne.value,L.value=!!g.value,void Pe()})},null,8,["class"]),m(r,{class:"main-cont main-left gva-aside"},{default:h((function(){return[y("div",{class:"tilte",style:G({background:T(Ie)})},[se.logo?_("",!0):(d(),b("img",ve)),se.logo?(d(),b("img",{key:1,alt:"",class:"logoimg",src:se.logo},null,8,he)):_("",!0),L.value?(d(),b("div",{key:2,class:"tit-text",style:G({color:T(Ee)})},j(se.name),5)):_("",!0)],4),m(re,{class:"aside"})]})),_:1}),m(A,{class:"main-cont main-right"},{default:h((function(){return[m(F,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:h((function(){return[y("div",{style:G({width:"calc(100% - ".concat(O.value?"0px":g.value?"54px":"220px",")")}),class:"topfix"},[m(n,null,{default:h((function(){return[m(a,null,{default:h((function(){return[m(S,{class:"header-cont"},{default:h((function(){return[m(n,{class:"pd-0"},{default:h((function(){return[m(a,{xs:2,lg:1,md:1,sm:1,xl:1,style:{"z-index":"100"}},{default:h((function(){return[y("div",{class:"menu-total",onClick:Pe},[g.value?(d(),b("div",pe)):(d(),b("div",ye))])]})),_:1}),m(a,{xs:10,lg:14,md:14,sm:9,xl:14,pull:1},{default:h((function(){return[p(m(u,{class:"breadcrumb"},{default:h((function(){return[(d(!0),b(x,null,k(T(Se).slice(1,T(Se).length),(function(e){return d(),v(i,{key:e.path},{default:h((function(){return[w(j(T(q)(e.meta.title,T(o))),1)]})),_:2},1024)})),128))]})),_:1},512),[[V,!O.value]])]})),_:1}),m(a,{xs:12,lg:9,md:9,sm:14,xl:9},{default:h((function(){return[y("div",ge,[m(ae),m(I,null,{dropdown:h((function(){return[m(E,{class:"dropdown-group"},{default:h((function(){return[m(s,{icon:"avatar"},{default:h((function(){return[y("div",{class:"command-box",style:{display:"flex"},onClick:_e},[be,y("div",xe,[y("span",ke,j(ne.value),1),w(" + "),je])])]})),_:1}),m(s,{icon:"avatar",onClick:Ge},{default:h((function(){return[w("个人信息")]})),_:1}),m(s,{icon:"reading-lamp",onClick:T(Oe).LoginOut},{default:h((function(){return[w("登 出")]})),_:1},8,["onClick"])]})),_:1})]})),default:h((function(){return[y("div",me,[y("span",we,[m(ue),p(y("span",{style:{"margin-left":"5px"}},j(T(Oe).userInfo.nickName),513),[[V,!O.value]]),m(c,null,{default:h((function(){return[m(l)]})),_:1})])])]})),_:1})])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),m(oe,{ref:"layoutHistoryComponent"},null,512)],4)]})),_:1}),Ce.value?p((d(),v(C,{"element-loading-text":"正在加载中",class:"admin-box",key:e.$route.fullPath},{default:h((function(e){var t=e.Component;return[y("div",null,[m(F,{mode:"out-in",name:"el-fade-in-linear"},{default:h((function(){return[(d(),v(D,{include:T(f).keepAliveRouters},[(d(),v(R(t)))],1032,["include"]))]})),_:2},1024)])]})),_:1})),[[U,Le.value]]):_("",!0),m(ie),m(le),m(de,{ref_key:"command",ref:fe},null,512)]})),_:1})]})),_:1},8,["class"])]})),_:1})}}}))}}}))}();
