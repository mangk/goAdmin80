/*! 
 Build based on gin-vue-admin 
 Time : 1691505529000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},o=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",i=l.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(N){c=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var l=t&&t.prototype instanceof p?t:p,o=Object.create(l.prototype),u=new L(r||[]);return a(o,"_invoke",{value:x(e,n,u)}),o}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=f;var s={};function p(){}function h(){}function v(){}var m={};c(m,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(E([])));g&&g!==n&&r.call(g,o)&&(m=g);var w=v.prototype=p.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function n(a,l,o,u){var i=d(e[a],e,l);if("throw"!==i.type){var c=i.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,o,u)}),(function(e){n("throw",e,o,u)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,u)}))}u(i.arg)}var l;a(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,a){n(e,r,t,a)}))}return l=l?l.then(a,a):a()}})}function x(e,t,n){var r="suspendedStart";return function(a,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw l;return S()}for(n.method=a,n.arg=l;;){var o=n.delegate;if(o){var u=k(o,n);if(u){if(u===s)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var i=d(e,t,n);if("normal"===i.type){if(r=n.done?"completed":"suspendedYield",i.arg===s)continue;return{value:i.arg,done:n.done}}"throw"===i.type&&(r="completed",n.method="throw",n.arg=i.arg)}}}function k(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),s;var a=d(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,s;var l=a.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function V(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(V,this),this.reset(!0)}function E(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=v,a(w,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:h,configurable:!0}),h.displayName=c(v,i,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,i,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},b(_.prototype),c(_.prototype,u,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,a,l){void 0===l&&(l=Promise);var o=new _(f(e,n,r,a),l);return t.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},b(w),c(w,i,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=E,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a],o=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var u=r.call(l,"catchLoc"),i=r.call(l,"finallyLoc");if(u&&i){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(u){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var l=a;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,s):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:E(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}function t(e,t,n,r,a,l,o){try{var u=e[l](o),i=u.value}catch(c){return void n(c)}u.done?t(i):Promise.resolve(i).then(r,a)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(a,l){var o=e.apply(n,r);function u(e){t(o,a,l,u,i,"next",e)}function i(e){t(o,a,l,u,i,"throw",e)}u(void 0)}))}}System.register(["./80index-legacy.715506e8.js","./80dialog-legacy.518b8698.js","./80overlay-legacy.518b8698.js","./80form-item-legacy.518b8698.js","./80tooltip-legacy.518b8698.js","./80popper-legacy.518b8698.js","./80radio-legacy.518b8698.js","./80input-legacy.518b8698.js","./80tag-legacy.518b8698.js","./80checkbox-legacy.518b8698.js","./80scrollbar-legacy.518b8698.js","./80select-legacy.518b8698.js","./80table-column-legacy.518b8698.js","./80icon-legacy.518b8698.js","./80button-legacy.518b8698.js","./80icon-legacy.43715679.js","./80_plugin-vue_export-helper-legacy.c6aa7c23.js"],(function(t,r){"use strict";var a,l,o,u,i,c,f,d,s,p,h,v,m,y,g,w,b,_,x,k,V,j,L,E,S,N,P,O,T,I,C,U,A,G,F,M;return{setters:[function(e){a=e.r,l=e.a,o=e.x,u=e.o,i=e.d,c=e.e,f=e.g,d=e.w,s=e.k,p=e.t,h=e.j,v=e.A,m=e.f,y=e.aC,g=e.Y,w=e.aI,b=e.m,_=e.aJ,x=e.aK,k=e.aL,V=e.s,j=e.Z,L=e.B,E=e.$,S=e.n,N=e.q,P=e.av,O=e.aw,T=e.ay,I=e.aq,C=e.E,U=e.a4,A=e.p,G=e.l},null,null,null,null,null,null,null,null,null,null,null,null,null,null,function(e){F=e.default},function(e){M=e._}],execute:function(){var r=function(e){return A("data-v-159058ad"),e=e(),G(),e},R={class:"gva-table-box"},q={class:"gva-btn-list"},B={key:0,class:"icon-column"},Y=r((function(){return c("span",null," 高亮菜单 ",-1)})),D=r((function(){return c("span",null," 是否为基础页面 ",-1)})),z=r((function(){return c("span",{style:{"font-size":"12px","margin-right":"12px"}},"该地址返回的vue模版源代码会被渲染到页面",-1)})),K={class:"dialog-footer"},Q={name:"Menus"},Z=Object.assign(Q,{setup:function(t){var r=a({path:[{required:!0,message:"请输入菜单name",trigger:"blur"}],"meta.title":[{required:!0,message:"请输入菜单展示名称",trigger:"blur"}]}),A=l(1),G=l(0),M=l(999),Q=l([]);l({});var Z=function(){var t=n(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(!0,!1);case 2:0===(n=e.sent).code&&(Q.value=n.data.list,G.value=n.data.total,A.value=n.data.page,M.value=n.data.pageSize);case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Z();var J=function(){$.value.component=$.value.component.replace(/\\/g,"/")},$=l({id:0,path:"",name:"",hidden:!1,parentId:0,component:"view/systemTools/convert/index.vue",meta:{activeName:"",title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1,SSRPath:""}}),H=function(){$.value.path=$.value.name},W=function(e){te(),e()},X=l(null),ee=l(!1),te=function(){ee.value=!1,X.value.resetFields(),$.value={id:0,path:"",name:"",hidden:!1,parentId:0,component:"view/systemTools/convert/index.vue",meta:{title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1}}},ne=l(!1),re=function(){te(),ne.value=!1},ae=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:X.value.validate(function(){var t=n(e().mark((function t(n){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=13;break}if(!ie.value){e.next=7;break}return e.next=4,_($.value);case 4:r=e.sent,e.next=10;break;case 7:return e.next=9,x($.value);case 9:r=e.sent;case 10:0===r.code&&(b({type:"success",message:ie.value?"编辑成功":"添加成功!"}),Z()),te(),ne.value=!1;case 13:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),le=l([{id:0,title:"根菜单"}]),oe=function(){le.value=[{id:0,title:"根目录"}],ue(Q.value,le.value,!1)},ue=function e(t,n,r){t&&t.forEach((function(t){if(t.children&&t.children.length){var a={title:t.meta.title,id:String(t.id),disabled:r||t.id===$.value.id,children:[]};e(t.children,a.children,r||t.id===$.value.id),n.push(a)}else{var l={title:t.meta.title,id:String(t.id),disabled:r||t.id===$.value.id};n.push(l)}}))},ie=l(!1),ce=l("新增菜单"),fe=function(e){ce.value="新增菜单",$.value.parentId=e,ie.value=!1,oe(),ne.value=!0},de=function(){var t=n(e().mark((function t(n){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ce.value="编辑菜单",e.next=3,k({id:n});case 3:r=e.sent,$.value=r.data,ie.value=!0,oe(),ne.value=!0;case 8:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return function(t,a){var l=V,y=j,_=L,x=E,k=S,G=N,M=P,ee=O,te=T,oe=o("QuestionFilled"),ue=I,se=C,pe=U;return u(),i("div",null,[c("div",R,[c("div",q,[f(l,{type:"primary",icon:"plus",onClick:a[0]||(a[0]=function(e){return fe(0)})},{default:d((function(){return[s("新增根菜单")]})),_:1})]),f(x,{data:Q.value,"row-key":"id"},{default:d((function(){return[f(y,{align:"left",label:"ID","min-width":"100",prop:"id"}),f(y,{align:"left",label:"展示名称","min-width":"120",prop:"authorityName"},{default:d((function(e){return[c("span",null,p(e.row.meta.title),1)]})),_:1}),f(y,{align:"left",label:"图标","min-width":"140",prop:"authorityName"},{default:d((function(e){return[e.row.meta.icon?(u(),i("div",B,[f(_,null,{default:d((function(){return[(u(),h(v(e.row.meta.icon)))]})),_:2},1024),c("span",null,p(e.row.meta.icon),1)])):m("",!0)]})),_:1}),f(y,{align:"left",label:"路由Name","show-overflow-tooltip":"","min-width":"160",prop:"name"}),f(y,{align:"left",label:"路由Path","show-overflow-tooltip":"","min-width":"160",prop:"path"}),f(y,{align:"left",label:"是否隐藏","min-width":"100",prop:"hidden"},{default:d((function(e){return[c("span",null,p(e.row.hidden?"隐藏":"显示"),1)]})),_:1}),f(y,{align:"left",label:"父节点","min-width":"90",prop:"parentId"}),f(y,{align:"left",label:"排序","min-width":"70",prop:"sort"}),f(y,{align:"left",label:"模版路径","min-width":"360",prop:"SSRPath"},{default:d((function(e){return[c("span",null,p(e.row.meta.SSRPath),1)]})),_:1}),f(y,{align:"left",fixed:"right",label:"操作",width:"300"},{default:d((function(t){return[f(l,{type:"primary",link:"",icon:"plus",onClick:function(e){return fe(t.row.id)}},{default:d((function(){return[s("添加子菜单 ")]})),_:2},1032,["onClick"]),f(l,{type:"primary",link:"",icon:"edit",onClick:function(e){return de(t.row.id)}},{default:d((function(){return[s("编辑 ")]})),_:2},1032,["onClick"]),f(l,{type:"primary",link:"",icon:"delete",onClick:function(r){return a=t.row.id,void g.confirm("此操作将永久删除所有角色下该菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(n(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w({id:a});case 2:0===e.sent.code&&(b({type:"success",message:"删除成功!"}),1===Q.value.length&&A.value>1&&A.value--,Z());case 4:case"end":return e.stop()}}),t)})))).catch((function(){b({type:"info",message:"已取消删除"})}));var a}},{default:d((function(){return[s("删除 ")]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])]),f(pe,{modelValue:ne.value,"onUpdate:modelValue":a[11]||(a[11]=function(e){return ne.value=e}),"before-close":W,title:ce.value},{footer:d((function(){return[c("div",K,[f(l,{onClick:re},{default:d((function(){return[s("取 消")]})),_:1}),f(l,{type:"primary",onClick:ae},{default:d((function(){return[s("确 定")]})),_:1})])]})),default:d((function(){return[ne.value?(u(),h(se,{key:0,ref_key:"menuForm",ref:X,inline:!0,model:$.value,rules:r,"label-position":"top","label-width":"85px"},{default:d((function(){return[f(G,{label:"展示名称",prop:"meta.title",style:{width:"30%"}},{default:d((function(){return[f(k,{modelValue:$.value.meta.title,"onUpdate:modelValue":a[1]||(a[1]=function(e){return $.value.meta.title=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1}),f(G,{label:"路由Name",prop:"path",style:{width:"30%"}},{default:d((function(){return[f(k,{modelValue:$.value.name,"onUpdate:modelValue":a[2]||(a[2]=function(e){return $.value.name=e}),autocomplete:"off",placeholder:"唯一英文字符串",onChange:H},null,8,["modelValue"])]})),_:1}),f(G,{label:"是否隐藏",style:{width:"30%"}},{default:d((function(){return[f(ee,{modelValue:$.value.hidden,"onUpdate:modelValue":a[3]||(a[3]=function(e){return $.value.hidden=e}),placeholder:"是否在列表隐藏"},{default:d((function(){return[f(M,{value:!1,label:"否"}),f(M,{value:!0,label:"是"})]})),_:1},8,["modelValue"])]})),_:1}),f(G,{label:"父节点ID",style:{width:"30%"}},{default:d((function(){return[f(te,{modelValue:$.value.parentId,"onUpdate:modelValue":a[4]||(a[4]=function(e){return $.value.parentId=e}),style:{width:"100%"},disabled:!ie.value,options:le.value,props:{checkStrictly:!0,label:"title",value:"id",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])]})),_:1}),f(G,{label:"图标",prop:"meta.icon",style:{width:"30%"}},{default:d((function(){return[f(F,{meta:$.value.meta,style:{width:"100%"}},null,8,["meta"])]})),_:1}),f(G,{label:"排序标记",prop:"sort",style:{width:"30%"}},{default:d((function(){return[f(k,{modelValue:$.value.sort,"onUpdate:modelValue":a[5]||(a[5]=function(e){return $.value.sort=e}),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])]})),_:1}),f(G,{prop:"meta.activeName",style:{width:"30%"}},{label:d((function(){return[c("div",null,[Y,f(ue,{content:"注：当到达此路由时候，指定左侧菜单指定name会处于活跃状态（亮起），可为空，为空则为本路由Name。",placement:"top",effect:"light"},{default:d((function(){return[f(_,null,{default:d((function(){return[f(oe)]})),_:1})]})),_:1})])]})),default:d((function(){return[f(k,{modelValue:$.value.meta.activeName,"onUpdate:modelValue":a[6]||(a[6]=function(e){return $.value.meta.activeName=e}),placeholder:$.value.name,autocomplete:"off"},null,8,["modelValue","placeholder"])]})),_:1}),f(G,{label:"KeepAlive",prop:"meta.keepAlive",style:{width:"30%"}},{default:d((function(){return[f(ee,{modelValue:$.value.meta.keepAlive,"onUpdate:modelValue":a[7]||(a[7]=function(e){return $.value.meta.keepAlive=e}),style:{width:"100%"},placeholder:"是否keepAlive缓存页面"},{default:d((function(){return[f(M,{value:!1,label:"否"}),f(M,{value:!0,label:"是"})]})),_:1},8,["modelValue"])]})),_:1}),f(G,{label:"CloseTab",prop:"meta.closeTab",style:{width:"30%"}},{default:d((function(){return[f(ee,{modelValue:$.value.meta.closeTab,"onUpdate:modelValue":a[8]||(a[8]=function(e){return $.value.meta.closeTab=e}),style:{width:"100%"},placeholder:"是否自动关闭tab"},{default:d((function(){return[f(M,{value:!1,label:"否"}),f(M,{value:!0,label:"是"})]})),_:1},8,["modelValue"])]})),_:1}),f(G,{style:{width:"30%"}},{label:d((function(){return[c("div",null,[D,f(ue,{content:"此项选择为是，则不会展示左侧菜单以及顶部信息。",placement:"top",effect:"light"},{default:d((function(){return[f(_,null,{default:d((function(){return[f(oe)]})),_:1})]})),_:1})])]})),default:d((function(){return[f(ee,{modelValue:$.value.meta.defaultMenu,"onUpdate:modelValue":a[9]||(a[9]=function(e){return $.value.meta.defaultMenu=e}),style:{width:"100%"},placeholder:"是否为基础页面"},{default:d((function(){return[f(M,{value:!1,label:"否"}),f(M,{value:!0,label:"是"})]})),_:1},8,["modelValue"])]})),_:1}),f(G,{label:"模版地址",style:{width:"60%"}},{default:d((function(){return[f(k,{modelValue:$.value.meta.SSRPath,"onUpdate:modelValue":a[10]||(a[10]=function(e){return $.value.meta.SSRPath=e}),autocomplete:"off",placeholder:"可以访问的后端接口",onBlur:J},null,8,["modelValue"]),z]})),_:1})]})),_:1},8,["model","rules"])):m("",!0)]})),_:1},8,["modelValue","title"])])}}});t("default",M(Z,[["__scopeId","data-v-159058ad"]]))}}}))}();
