/*! 
 Build based on gin-vue-admin 
 Time : 1691505529000 */
!function(){function t(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(I){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),u=new O(n||[]);return o(a,"_invoke",{value:L(t,r,u)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=s;var h={};function p(){}function d(){}function v(){}var y={};l(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(_([])));m&&m!==r&&n.call(m,a)&&(y=m);var w=v.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=j(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=v,o(w,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:d,configurable:!0}),d.displayName=l(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}System.register(["./80index-legacy.715506e8.js","./80tree-legacy.518b8698.js","./80checkbox-legacy.518b8698.js","./80button-legacy.518b8698.js","./80input-legacy.518b8698.js","./80api-legacy.4df0d48d.js","./80_plugin-vue_export-helper-legacy.c6aa7c23.js"],(function(r,o){"use strict";var i,a,u,c,l,s,f,h,p,d,v,y,g,m,w;return{setters:[function(t){i=t.O,a=t.a,u=t.P,c=t.o,l=t.d,s=t.e,f=t.g,h=t.w,p=t.k,d=t.m,v=t.n,y=t.s,g=t.az},null,null,null,null,function(t){m=t.e},function(t){w=t._}],execute:function(){var o={class:"clearfix sticky-button"},b={class:"tree-content"},x={name:"Apis"},L=Object.assign(x,{props:{row:{default:function(){return{}},type:Object}},setup:function(r,w){var x=w.expose,L=r,j=a({children:"children",label:"description"}),E=a(""),k=a([]),O=a([]),_=a(""),P=function(){var t=n(e().mark((function t(){var r,n,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return r=t.sent,n=r.data,k.value=N(n),t.next=7,e={authorityId:L.row.authorityId},i({url:"/casbin/getPolicyPathByAuthorityId",method:"post",data:e});case 7:o=t.sent,_.value=L.row.authorityId,O.value=[],o.data&&o.data.forEach((function(t){O.value.push("p:"+t.path+"m:"+t.method)}));case 11:case"end":return t.stop()}var e}),t)})));return function(){return t.apply(this,arguments)}}();P();var I=a(!1),G=function(){I.value=!0},N=function(e){var r={};e&&e.forEach((function(e){e.onlyId="p:"+e.path+"m:"+e.method,Object.prototype.hasOwnProperty.call(r,e.apiGroup)?r[e.apiGroup].push(e):Object.assign(r,t({},e.apiGroup,[e]))}));var n=[];for(var o in r){var i={ID:o,description:o+"组",children:r[o]};n.push(i)}return n},S=a(null),T=function(){var t=n(e().mark((function t(){var r,n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=S.value.getCheckedNodes(!0),n=[],r&&r.forEach((function(t){var e={path:t.path,method:t.method};n.push(e)})),t.next=5,e={authorityId:_.value,casbinInfos:n},i({url:"/casbin",method:"patch",data:e});case 5:0===t.sent.code&&d({type:"success",message:"api设置成功"});case 7:case"end":return t.stop()}var e}),t)})));return function(){return t.apply(this,arguments)}}();x({needConfirm:I,enterAndNext:function(){T()}});var A=function(t,e){return!t||-1!==e.description.indexOf(t)};return u(E,(function(t){S.value.filter(t)})),function(t,e){var r=v,n=y,i=g;return c(),l("div",null,[s("div",o,[f(r,{modelValue:E.value,"onUpdate:modelValue":e[0]||(e[0]=function(t){return E.value=t}),class:"fitler",placeholder:"筛选"},null,8,["modelValue"]),f(n,{class:"fl-right",type:"primary",onClick:T},{default:h((function(){return[p("确 定")]})),_:1})]),s("div",b,[f(i,{ref_key:"apiTree",ref:S,data:k.value,"default-checked-keys":O.value,props:j.value,"default-expand-all":"","highlight-current":"","node-key":"onlyId","show-checkbox":"","filter-node-method":A,onCheck:G},null,8,["data","default-checked-keys","props"])])])}}});r("default",w(L,[["__scopeId","data-v-74a816f8"]]))}}}))}();
