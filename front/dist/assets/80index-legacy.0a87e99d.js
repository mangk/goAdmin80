/*! 
 Build based on gin-vue-admin 
 Time : 1684300488000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var a=t&&t.prototype instanceof v?t:v,i=Object.create(a.prototype),u=new O(r||[]);return o(i,"_invoke",{value:k(e,n,u)}),i}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var d={};function v(){}function h(){}function p(){}var y={};c(y,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(E([])));g&&g!==n&&r.call(g,i)&&(y=g);var w=p.prototype=v.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(o,a,i,u){var l=f(e[o],e,a);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,i,u)}),(function(e){n("throw",e,i,u)})):t.resolve(s).then((function(e){c.value=e,i(c)}),(function(e){return n("throw",e,i,u)}))}u(l.arg)}var a;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return a=a?a.then(o,o):o()}})}function k(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return I()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var u=_(i,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=f(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function _(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=f(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function E(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:I}}function I(){return{value:void 0,done:!0}}return h.prototype=p,o(w,"constructor",{value:p,configurable:!0}),o(p,"constructor",{value:h,configurable:!0}),h.displayName=c(p,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,l,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},b(x.prototype),c(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new x(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(w),c(w,l,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=E,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:E(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function t(e,t,n,r,o,a,i){try{var u=e[a](i),l=u.value}catch(c){return void n(c)}u.done?t(l):Promise.resolve(l).then(r,o)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=e.apply(n,r);function u(e){t(i,o,a,u,l,"next",e)}function l(e){t(i,o,a,u,l,"throw",e)}u(void 0)}))}}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./80index-legacy.80020a9a.js","./80loading-legacy.518b8698.js","./80button-legacy.518b8698.js","./80popper-legacy.518b8698.js","./80scrollbar-legacy.518b8698.js","./80icon-legacy.518b8698.js","./80col-legacy.518b8698.js","./80goAdmin80-legacy.3da963ed.js","./80index-legacy.271793e1.js","./80history-legacy.7d00a7a4.js","./80search-legacy.ace195fc.js","./80bottomInfo-legacy.727e5f16.js","./80index-legacy.61535ef6.js","./80dialog-legacy.518b8698.js","./80overlay-legacy.518b8698.js","./80index-legacy.b8ae8e62.js","./80tooltip-legacy.518b8698.js","./80index-legacy.b3cba437.js","./80menuItem-legacy.4228e2a9.js","./80_plugin-vue_export-helper-legacy.c6aa7c23.js","./80asyncSubmenu-legacy.fa3d7b3b.js","./80tab-pane-legacy.518b8698.js","./80index-legacy.f83cfb66.js","./80drawer-legacy.518b8698.js"],(function(t,o){"use strict";var a,i,u,l,c,s,f,d,v,h,p,y,m,g,w,b,x,k,_,j,L,O,E,I,S,C,A,M,N,P,G,T,F,q,U,V,z,D,H,K,R,W,Y,$,B,Q,X,Z,J,ee,te,ne,re,oe,ae;return{setters:[function(e){a=e.u,i=e.b,u=e.U,l=e.r,c=e.a,s=e.O,f=e.o,d=e.h,v=e.w,h=e.P,p=e.d,y=e.a1,m=e.e,g=e.j,w=e.c,b=e.F,x=e.x,k=e.t,_=e.i,j=e.q,L=e.a2,O=e.a3,E=e.H,I=e.a4,S=e.a5,C=e.I,A=e.v,M=e.L,N=e.y,P=e.W,G=e.T,T=e.a6,F=e.Q,q=e.V,U=e.z,V=e.C,z=e.a7,D=e.B,H=e.a8,K=e.a9,R=e.A,W=e.aa,Y=e.ab,$=e.ac,B=e.ad,Q=e.ae,X=e.af,Z=e.a0},null,null,null,null,null,null,function(e){J=e._},function(e){ee=e.default},function(e){te=e.default},function(e){ne=e.default},function(e){re=e.default},function(e){oe=e.C},null,null,function(e){ae=e.default},null,null,null,null,null,null,null,null],execute:function(){var o={key:0,class:"quick-title"},ie=["onClick"],ue={class:"dialog-footer"},le={name:"CommandMenu"},ce=Object.assign(le,{setup:function(e,t){var n=t.expose,O=a(),E=a(),I=i(),S=u(),C=l(!1),A=l(""),M=c([]),N=function e(t){var n=[];return t.forEach((function(t){t.children&&t.children.length>0?n.push.apply(n,r(e(t.children))):t.meta.title&&t.meta.title.indexOf(A.value)>-1&&n.push({label:t.meta.title,func:function(){return T(t)}})})),n},P=function(){var e,t={label:"跳转",children:[]},n=N(S.asyncRouters[0].children);(e=t.children).push.apply(e,r(n)),M.push(t)},G=function(){var e,t={label:"操作",children:[]},n=[{label:"亮色主题",func:function(){return F("light")}},{label:"暗色主题",func:function(){return F("dark")}},{label:"退出登录",func:function(){return I.LoginOut()}}];(e=t.children).push.apply(e,r(n.filter((function(e){return e.label.indexOf(A.value)>-1})))),M.push(t)};P(),G();var T=function(e){var t,n,r=e.name,o={},a={};(null===(t=S.routeMap[r])||void 0===t?void 0:t.parameters)&&(null===(n=S.routeMap[r])||void 0===n||n.parameters.forEach((function(e){"query"===e.type?o[e.key]=e.value:a[e.key]=e.value}))),r!==E.name&&(e.name.indexOf("http://")>-1||e.name.indexOf("https://")>-1?window.open(e.name):O.push({name:r,query:o,params:a}),C.value=!1)},F=function(e){null!==e?I.changeSideMode(e):I.changeSideMode("dark")},q=function(){C.value=!1};return n({open:function(){C.value=!0}}),s(A,(function(){M.length=0,P(),G()})),function(e,t){var n=j,r=L;return f(),d(r,{modelValue:C.value,"onUpdate:modelValue":t[1]||(t[1]=function(e){return C.value=e}),width:"30%",class:"overlay","show-close":!1},{header:v((function(){return[h(p("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return A.value=e}),class:"quick-input",placeholder:"请输入你需要快捷到达的功能"},null,512),[[y,A.value]])]})),footer:v((function(){return[p("span",ue,[m(n,{onClick:q},{default:v((function(){return[g("关闭")]})),_:1})])]})),default:v((function(){return[(f(!0),w(b,null,x(M,(function(e,t){return f(),w("div",{key:t},[e.children.length?(f(),w("div",o,k(e.label),1)):_("",!0),(f(!0),w(b,null,x(e.children,(function(e,n){return f(),w("div",{key:t+"-"+n,class:"quick-item",onClick:e.func},k(e.label),9,ie)})),128))])})),128))]})),_:1},8,["modelValue"])}}}),se=p("img",{alt:"",class:"logoimg",src:J},null,-1),fe={key:0,class:"gvaIcon gvaIcon-arrow-double-right"},de={key:1,class:"gvaIcon gvaIcon-arrow-double-left"},ve={class:"right-box"},he={class:"dp-flex justify-content-center align-items height-full width-full"},pe={class:"header-avatar",style:{cursor:"pointer"}},ye=p("div",null,"指令菜单",-1),me={style:{"margin-left":"8px"}},ge={class:"button"},we=p("span",{class:"button"},"K",-1),be={name:"Layout"};t("default",Object.assign(be,{setup:function(t){var r=a(),o=O(),c=u(),s=l(!1),y=l(!0),j=l(!1),L=l("");l(!1);var J=function(){"WIN"===window.localStorage.getItem("osType")?L.value="Ctrl":L.value="⌘";window.addEventListener("keydown",(function(e){e.ctrlKey&&"k"===e.key&&(e.preventDefault(),ue())}));var e=document.body.clientWidth;e<1e3?(j.value=!0,y.value=!1,s.value=!0):e>=1e3&&e<1200?(j.value=!1,y.value=!1,s.value=!0):(j.value=!1,y.value=!0,s.value=!1)};J();var ie=l(),ue=function(){ie.value.open()},le=l(!1);E((function(){I.emit("collapse",s.value),I.emit("mobile",j.value),I.on("reload",Oe),I.on("showLoading",(function(){le.value=!0})),I.on("closeLoading",(function(){le.value=!1})),window.onresize=function(){return J(),I.emit("collapse",s.value),void I.emit("mobile",j.value)},be.loadingInstance&&be.loadingInstance.close()}));var be=i(),xe=S((function(){return"dark"===be.sideMode?"#fff":"light"===be.sideMode?"#191a23":be.baseColor})),ke=S((function(){return"dark"===be.sideMode?"#191a23":"light"===be.sideMode?"#fff":be.sideMode})),_e=S((function(){return o.meta.matched})),je=l(!0),Le=null,Oe=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Le&&window.clearTimeout(Le),Le=window.setTimeout(n(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.meta.keepAlive){e.next=7;break}return je.value=!1,e.next=4,C();case 4:je.value=!0,e.next=9;break;case 7:n=o.meta.title,r.push({name:"Reload",params:{title:n}});case 9:case"end":return e.stop()}}),t)}))),400);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Ee=l(!1),Ie=function(){s.value=!s.value,y.value=!s.value,Ee.value=!s.value,I.emit("collapse",s.value)},Se=function(){r.push({name:"person"})};return function(e,t){var n=V,r=z,a=D,i=H,u=K,l=A("arrow-down"),O=R,E=W,I=Y,S=$,C=B,J=A("router-view"),Le=Q,Oe=X,Ce=Z;return f(),d(Oe,{class:"layout-cont"},{default:v((function(){return[m(Oe,{class:M([y.value?"openside":"hideside",j.value?"mobile":""])},{default:v((function(){return[m(n,{class:M([Ee.value?"shadowBg":""]),onClick:t[0]||(t[0]=function(e){return Ee.value=!Ee.value,y.value=!!s.value,void Ie()})},null,8,["class"]),m(r,{class:"main-cont main-left gva-aside"},{default:v((function(){return[p("div",{class:"tilte",style:N({background:P(ke)})},[se,y.value?(f(),w("div",{key:0,class:"tit-text",style:N({color:P(xe)})},k(e.$GO_ADMIN_80.appName),5)):_("",!0)],4),m(ee,{class:"aside"})]})),_:1}),m(Le,{class:"main-cont main-right"},{default:v((function(){return[m(G,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:v((function(){return[p("div",{style:N({width:"calc(100% - ".concat(j.value?"0px":s.value?"54px":"220px",")")}),class:"topfix"},[m(n,null,{default:v((function(){return[m(a,null,{default:v((function(){return[m(C,{class:"header-cont"},{default:v((function(){return[m(n,{class:"pd-0"},{default:v((function(){return[m(a,{xs:2,lg:1,md:1,sm:1,xl:1,style:{"z-index":"100"}},{default:v((function(){return[p("div",{class:"menu-total",onClick:Ie},[s.value?(f(),w("div",fe)):(f(),w("div",de))])]})),_:1}),m(a,{xs:10,lg:14,md:14,sm:9,xl:14,pull:1},{default:v((function(){return[h(m(u,{class:"breadcrumb"},{default:v((function(){return[(f(!0),w(b,null,x(P(_e).slice(1,P(_e).length),(function(e){return f(),d(i,{key:e.path},{default:v((function(){return[g(k(P(T)(e.meta.title,P(o))),1)]})),_:2},1024)})),128))]})),_:1},512),[[F,!j.value]])]})),_:1}),m(a,{xs:12,lg:9,md:9,sm:14,xl:9},{default:v((function(){return[p("div",ve,[m(ne),m(S,null,{dropdown:v((function(){return[m(I,{class:"dropdown-group"},{default:v((function(){return[m(E,{icon:"avatar"},{default:v((function(){return[p("div",{class:"command-box",style:{display:"flex"},onClick:ue},[ye,p("div",me,[p("span",ge,k(L.value),1),g(" + "),we])])]})),_:1}),m(E,{icon:"avatar",onClick:Se},{default:v((function(){return[g("个人信息")]})),_:1}),m(E,{icon:"reading-lamp",onClick:P(be).LoginOut},{default:v((function(){return[g("登 出")]})),_:1},8,["onClick"])]})),_:1})]})),default:v((function(){return[p("div",he,[p("span",pe,[m(oe),h(p("span",{style:{"margin-left":"5px"}},k(P(be).userInfo.nickName),513),[[F,!j.value]]),m(O,null,{default:v((function(){return[m(l)]})),_:1})])])]})),_:1})])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),m(te,{ref:"layoutHistoryComponent"},null,512)],4)]})),_:1}),je.value?h((f(),d(J,{"element-loading-text":"正在加载中",class:"admin-box",key:e.$route.fullPath},{default:v((function(e){var t=e.Component;return[p("div",null,[m(G,{mode:"out-in",name:"el-fade-in-linear"},{default:v((function(){return[(f(),d(q,{include:P(c).keepAliveRouters},[(f(),d(U(t)))],1032,["include"]))]})),_:2},1024)])]})),_:1})),[[Ce,le.value]]):_("",!0),m(re),m(ae),m(ce,{ref_key:"command",ref:ie},null,512)]})),_:1})]})),_:1},8,["class"])]})),_:1})}}}))}}}))}();