/*! 
 Build based on gin-vue-admin 
 Time : 1685519436000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(A){l=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var i=r&&r.prototype instanceof y?r:y,a=Object.create(i.prototype),u=new _(n||[]);return o(a,"_invoke",{value:L(t,e,u)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(A){return{type:"throw",arg:A}}}r.wrap=f;var s={};function y(){}function d(){}function p(){}var v={};l(v,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==e&&n.call(m,a)&&(v=m);var w=p.prototype=y.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){function e(o,i,a,u){var c=h(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,a,u)}),(function(t){e("throw",t,a,u)})):r.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return e("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function L(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=j(a,e);if(u){if(u===s)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=h(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}function j(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,j(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),s;var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,s;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,s):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,s)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function I(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function r(){for(;++e<t.length;)if(n.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=p,o(w,"constructor",{value:p,configurable:!0}),o(p,"constructor",{value:d,configurable:!0}),d.displayName=l(p,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,u,(function(){return this})),r.AsyncIterator=x,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new x(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),s},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),I(e),s}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;I(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},r}function r(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void e(l)}u.done?r(c):Promise.resolve(c).then(n,o)}function e(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return n(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}System.register(["./80index-legacy.6cf2c604.js","./80checkbox-group-legacy.518b8698.js","./80checkbox-legacy.518b8698.js","./80button-legacy.518b8698.js","./80authority-legacy.e3328fde.js","./80warningBar-legacy.3d411928.js","./80icon-legacy.518b8698.js","./80_plugin-vue_export-helper-legacy.c6aa7c23.js"],(function(n,o){"use strict";var i,a,u,c,l,f,h,s,y,d,p,v,g,m,w,b,x;return{setters:[function(t){i=t.a,a=t.o,u=t.d,c=t.f,l=t.e,f=t.w,h=t.k,s=t.F,y=t.y,d=t.i,p=t.t,v=t.m,g=t.s,m=t.aA,w=t.aB},null,null,null,function(t){b=t.s},function(t){x=t.W},null,null],execute:function(){var o={class:"clearfix sticky-button",style:{margin:"18px"}},L={class:"tree-content"},j={name:"Datas"};n("default",Object.assign(j,{props:{row:{default:function(){return{}},type:Object},authority:{default:function(){return[]},type:Array}},emits:["changeRow"],setup:function(n,j){var E=j.expose,I=j.emit,_=n,O=i([]),k=i(!1),A=function t(r){r&&r.forEach((function(r){var e={};e.authorityId=r.authorityId,e.authorityName=r.authorityName,O.value.push(e),r.children&&r.children.length&&t(r.children)}))},S=i([]);A(_.authority),_.row.dataAuthorityId&&_.row.dataAuthorityId.forEach((function(t){var r=O.value&&O.value.filter((function(r){return r.authorityId===t.authorityId}))&&O.value.filter((function(r){return r.authorityId===t.authorityId}))[0];S.value.push(r)}));var N=function(){S.value=e(O.value),I("changeRow","dataAuthorityId",S.value),k.value=!0},P=function(){S.value=O.value.filter((function(t){return t.authorityId===_.row.authorityId})),I("changeRow","dataAuthorityId",S.value),k.value=!0},G=function(){var t=[];C(_.row,t),S.value=O.value.filter((function(r){return t.indexOf(r.authorityId)>-1})),I("changeRow","dataAuthorityId",S.value),k.value=!0},C=function t(r,e){e.push(r.authorityId),r.children&&r.children.forEach((function(r){t(r,e)}))},F=function(){var e,n=(e=t().mark((function r(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(_.row);case 2:0===t.sent.code&&v({type:"success",message:"资源设置成功"});case 4:case"end":return t.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))});return function(){return n.apply(this,arguments)}}(),R=function(){I("changeRow","dataAuthorityId",S.value),k.value=!0};return E({enterAndNext:function(){F()},needConfirm:k}),function(t,r){var e=g,n=m,i=w;return a(),u("div",null,[c(x,{title:"此功能仅用于创建角色和角色的many2many关系表，具体使用还须自己结合表实现业务，详情参考示例代码（客户示例）。此功能不建议使用，建议使用插件市场【组织管理功能（点击前往）】来管理资源权限。",href:"https://plugin.gin-vue-admin.com/#/layout/newPluginInfo?id=36"}),l("div",o,[c(e,{class:"fl-right",type:"primary",onClick:F},{default:f((function(){return[h("确 定")]})),_:1}),c(e,{class:"fl-left",type:"primary",onClick:N},{default:f((function(){return[h("全选")]})),_:1}),c(e,{class:"fl-left",type:"primary",onClick:P},{default:f((function(){return[h("本角色")]})),_:1}),c(e,{class:"fl-left",type:"primary",onClick:G},{default:f((function(){return[h("本角色及子角色")]})),_:1})]),l("div",L,[c(i,{modelValue:S.value,"onUpdate:modelValue":r[0]||(r[0]=function(t){return S.value=t}),onChange:R},{default:f((function(){return[(a(!0),u(s,null,y(O.value,(function(t,r){return a(),d(n,{key:r,label:t},{default:f((function(){return[h(p(t.authorityName),1)]})),_:2},1032,["label"])})),128))]})),_:1},8,["modelValue"])])])}}}))}}}))}();
