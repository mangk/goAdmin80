/*! 
 Build based on gin-vue-admin 
 Time : 1685519436000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),u=new B(n||[]);return o(i,"_invoke",{value:x(t,r,u)}),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};s(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(E([])));m&&m!==r&&n.call(m,i)&&(y=m);var w=v.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,i,u){var f=c(t[o],t,a);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,u)}))}u(f.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=A(i,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var f=c(t,e,r);if("normal"===f.type){if(n=r.done?"completed":"suspendedYield",f.arg===h)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(n="completed",r.method="throw",r.arg=f.arg)}}}function A(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,A(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=c(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=v,o(w,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,f,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(_.prototype),s(_.prototype,u,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new _(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(w),s(w,f,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=E,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function e(t,e,r,n,o,a,i){try{var u=t[a](i),f=u.value}catch(s){return void r(s)}u.done?e(f):Promise.resolve(f).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function u(t){e(i,o,a,u,f,"next",t)}function f(t){e(i,o,a,u,f,"throw",t)}u(void 0)}))}}System.register(["./80index-legacy.6cf2c604.js","./80progress-legacy.518b8698.js","./80icon-legacy.518b8698.js","./80button-legacy.518b8698.js","./80_plugin-vue_export-helper-legacy.c6aa7c23.js"],(function(e,n){"use strict";var o,a,i,u,f,s,l,c,h,p,d,v,y,g,m,w,b,_,x,A,k,L,B,E;return{setters:[function(t){o=t.N,a=t.O,i=t.a,u=t.P,f=t.x,s=t.o,l=t.d,c=t.e,h=t.f,p=t.w,d=t.k,v=t.Q,y=t.R,g=t.t,m=t.j,w=t.T,b=t.m,_=t.S,x=t.s,A=t.B,k=t.U,L=t.p,B=t.l},null,null,null,function(t){E=t._}],execute:function(){var n={exports:{}};!function(t,e){t.exports=function(t){var e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function r(t,e){var r=t[0],n=t[1],o=t[2],a=t[3];n=((n+=((o=((o+=((a=((a+=((r=((r+=(n&o|~n&a)+e[0]-680876936|0)<<7|r>>>25)+n|0)&n|~r&o)+e[1]-389564586|0)<<12|a>>>20)+r|0)&r|~a&n)+e[2]+606105819|0)<<17|o>>>15)+a|0)&a|~o&r)+e[3]-1044525330|0)<<22|n>>>10)+o|0,n=((n+=((o=((o+=((a=((a+=((r=((r+=(n&o|~n&a)+e[4]-176418897|0)<<7|r>>>25)+n|0)&n|~r&o)+e[5]+1200080426|0)<<12|a>>>20)+r|0)&r|~a&n)+e[6]-1473231341|0)<<17|o>>>15)+a|0)&a|~o&r)+e[7]-45705983|0)<<22|n>>>10)+o|0,n=((n+=((o=((o+=((a=((a+=((r=((r+=(n&o|~n&a)+e[8]+1770035416|0)<<7|r>>>25)+n|0)&n|~r&o)+e[9]-1958414417|0)<<12|a>>>20)+r|0)&r|~a&n)+e[10]-42063|0)<<17|o>>>15)+a|0)&a|~o&r)+e[11]-1990404162|0)<<22|n>>>10)+o|0,n=((n+=((o=((o+=((a=((a+=((r=((r+=(n&o|~n&a)+e[12]+1804603682|0)<<7|r>>>25)+n|0)&n|~r&o)+e[13]-40341101|0)<<12|a>>>20)+r|0)&r|~a&n)+e[14]-1502002290|0)<<17|o>>>15)+a|0)&a|~o&r)+e[15]+1236535329|0)<<22|n>>>10)+o|0,n=((n+=((o=((o+=((a=((a+=((r=((r+=(n&a|o&~a)+e[1]-165796510|0)<<5|r>>>27)+n|0)&o|n&~o)+e[6]-1069501632|0)<<9|a>>>23)+r|0)&n|r&~n)+e[11]+643717713|0)<<14|o>>>18)+a|0)&r|a&~r)+e[0]-373897302|0)<<20|n>>>12)+o|0,n=((n+=((o=((o+=((a=((a+=((r=((r+=(n&a|o&~a)+e[5]-701558691|0)<<5|r>>>27)+n|0)&o|n&~o)+e[10]+38016083|0)<<9|a>>>23)+r|0)&n|r&~n)+e[15]-660478335|0)<<14|o>>>18)+a|0)&r|a&~r)+e[4]-405537848|0)<<20|n>>>12)+o|0,n=((n+=((o=((o+=((a=((a+=((r=((r+=(n&a|o&~a)+e[9]+568446438|0)<<5|r>>>27)+n|0)&o|n&~o)+e[14]-1019803690|0)<<9|a>>>23)+r|0)&n|r&~n)+e[3]-187363961|0)<<14|o>>>18)+a|0)&r|a&~r)+e[8]+1163531501|0)<<20|n>>>12)+o|0,n=((n+=((o=((o+=((a=((a+=((r=((r+=(n&a|o&~a)+e[13]-1444681467|0)<<5|r>>>27)+n|0)&o|n&~o)+e[2]-51403784|0)<<9|a>>>23)+r|0)&n|r&~n)+e[7]+1735328473|0)<<14|o>>>18)+a|0)&r|a&~r)+e[12]-1926607734|0)<<20|n>>>12)+o|0,n=((n+=((o=((o+=((a=((a+=((r=((r+=(n^o^a)+e[5]-378558|0)<<4|r>>>28)+n|0)^n^o)+e[8]-2022574463|0)<<11|a>>>21)+r|0)^r^n)+e[11]+1839030562|0)<<16|o>>>16)+a|0)^a^r)+e[14]-35309556|0)<<23|n>>>9)+o|0,n=((n+=((o=((o+=((a=((a+=((r=((r+=(n^o^a)+e[1]-1530992060|0)<<4|r>>>28)+n|0)^n^o)+e[4]+1272893353|0)<<11|a>>>21)+r|0)^r^n)+e[7]-155497632|0)<<16|o>>>16)+a|0)^a^r)+e[10]-1094730640|0)<<23|n>>>9)+o|0,n=((n+=((o=((o+=((a=((a+=((r=((r+=(n^o^a)+e[13]+681279174|0)<<4|r>>>28)+n|0)^n^o)+e[0]-358537222|0)<<11|a>>>21)+r|0)^r^n)+e[3]-722521979|0)<<16|o>>>16)+a|0)^a^r)+e[6]+76029189|0)<<23|n>>>9)+o|0,n=((n+=((o=((o+=((a=((a+=((r=((r+=(n^o^a)+e[9]-640364487|0)<<4|r>>>28)+n|0)^n^o)+e[12]-421815835|0)<<11|a>>>21)+r|0)^r^n)+e[15]+530742520|0)<<16|o>>>16)+a|0)^a^r)+e[2]-995338651|0)<<23|n>>>9)+o|0,n=((n+=((a=((a+=(n^((r=((r+=(o^(n|~a))+e[0]-198630844|0)<<6|r>>>26)+n|0)|~o))+e[7]+1126891415|0)<<10|a>>>22)+r|0)^((o=((o+=(r^(a|~n))+e[14]-1416354905|0)<<15|o>>>17)+a|0)|~r))+e[5]-57434055|0)<<21|n>>>11)+o|0,n=((n+=((a=((a+=(n^((r=((r+=(o^(n|~a))+e[12]+1700485571|0)<<6|r>>>26)+n|0)|~o))+e[3]-1894986606|0)<<10|a>>>22)+r|0)^((o=((o+=(r^(a|~n))+e[10]-1051523|0)<<15|o>>>17)+a|0)|~r))+e[1]-2054922799|0)<<21|n>>>11)+o|0,n=((n+=((a=((a+=(n^((r=((r+=(o^(n|~a))+e[8]+1873313359|0)<<6|r>>>26)+n|0)|~o))+e[15]-30611744|0)<<10|a>>>22)+r|0)^((o=((o+=(r^(a|~n))+e[6]-1560198380|0)<<15|o>>>17)+a|0)|~r))+e[13]+1309151649|0)<<21|n>>>11)+o|0,n=((n+=((a=((a+=(n^((r=((r+=(o^(n|~a))+e[4]-145523070|0)<<6|r>>>26)+n|0)|~o))+e[11]-1120210379|0)<<10|a>>>22)+r|0)^((o=((o+=(r^(a|~n))+e[2]+718787259|0)<<15|o>>>17)+a|0)|~r))+e[9]-343485551|0)<<21|n>>>11)+o|0,t[0]=r+t[0]|0,t[1]=n+t[1]|0,t[2]=o+t[2]|0,t[3]=a+t[3]|0}function n(t){var e,r=[];for(e=0;e<64;e+=4)r[e>>2]=t.charCodeAt(e)+(t.charCodeAt(e+1)<<8)+(t.charCodeAt(e+2)<<16)+(t.charCodeAt(e+3)<<24);return r}function o(t){var e,r=[];for(e=0;e<64;e+=4)r[e>>2]=t[e]+(t[e+1]<<8)+(t[e+2]<<16)+(t[e+3]<<24);return r}function a(t){var e,o,a,i,u,f,s=t.length,l=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=s;e+=64)r(l,n(t.substring(e-64,e)));for(o=(t=t.substring(e-64)).length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<o;e+=1)a[e>>2]|=t.charCodeAt(e)<<(e%4<<3);if(a[e>>2]|=128<<(e%4<<3),e>55)for(r(l,a),e=0;e<16;e+=1)a[e]=0;return i=(i=8*s).toString(16).match(/(.*?)(.{0,8})$/),u=parseInt(i[2],16),f=parseInt(i[1],16)||0,a[14]=u,a[15]=f,r(l,a),l}function i(t){var e,n,a,i,u,f,s=t.length,l=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=s;e+=64)r(l,o(t.subarray(e-64,e)));for(n=(t=e-64<s?t.subarray(e-64):new Uint8Array(0)).length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<n;e+=1)a[e>>2]|=t[e]<<(e%4<<3);if(a[e>>2]|=128<<(e%4<<3),e>55)for(r(l,a),e=0;e<16;e+=1)a[e]=0;return i=(i=8*s).toString(16).match(/(.*?)(.{0,8})$/),u=parseInt(i[2],16),f=parseInt(i[1],16)||0,a[14]=u,a[15]=f,r(l,a),l}function u(t){var r,n="";for(r=0;r<4;r+=1)n+=e[t>>8*r+4&15]+e[t>>8*r&15];return n}function f(t){var e;for(e=0;e<t.length;e+=1)t[e]=u(t[e]);return t.join("")}function s(t){return/[\u0080-\uFFFF]/.test(t)&&(t=unescape(encodeURIComponent(t))),t}function l(t,e){var r,n=t.length,o=new ArrayBuffer(n),a=new Uint8Array(o);for(r=0;r<n;r+=1)a[r]=t.charCodeAt(r);return e?a:o}function c(t){return String.fromCharCode.apply(null,new Uint8Array(t))}function h(t,e,r){var n=new Uint8Array(t.byteLength+e.byteLength);return n.set(new Uint8Array(t)),n.set(new Uint8Array(e),t.byteLength),r?n:n.buffer}function p(t){var e,r=[],n=t.length;for(e=0;e<n-1;e+=2)r.push(parseInt(t.substr(e,2),16));return String.fromCharCode.apply(String,r)}function d(){this.reset()}return f(a("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function e(t,e){return(t=0|t||0)<0?Math.max(t+e,0):Math.min(t,e)}ArrayBuffer.prototype.slice=function(r,n){var o,a,i,u,f=this.byteLength,s=e(r,f),l=f;return n!==t&&(l=e(n,f)),s>l?new ArrayBuffer(0):(o=l-s,a=new ArrayBuffer(o),i=new Uint8Array(a),u=new Uint8Array(this,s,o),i.set(u),a)}}(),d.prototype.append=function(t){return this.appendBinary(s(t)),this},d.prototype.appendBinary=function(t){this._buff+=t,this._length+=t.length;var e,o=this._buff.length;for(e=64;e<=o;e+=64)r(this._hash,n(this._buff.substring(e-64,e)));return this._buff=this._buff.substring(e-64),this},d.prototype.end=function(t){var e,r,n=this._buff,o=n.length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<o;e+=1)a[e>>2]|=n.charCodeAt(e)<<(e%4<<3);return this._finish(a,o),r=f(this._hash),t&&(r=p(r)),this.reset(),r},d.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},d.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},d.prototype.setState=function(t){return this._buff=t.buff,this._length=t.length,this._hash=t.hash,this},d.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},d.prototype._finish=function(t,e){var n,o,a,i=e;if(t[i>>2]|=128<<(i%4<<3),i>55)for(r(this._hash,t),i=0;i<16;i+=1)t[i]=0;n=(n=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(n[2],16),a=parseInt(n[1],16)||0,t[14]=o,t[15]=a,r(this._hash,t)},d.hash=function(t,e){return d.hashBinary(s(t),e)},d.hashBinary=function(t,e){var r=f(a(t));return e?p(r):r},d.ArrayBuffer=function(){this.reset()},d.ArrayBuffer.prototype.append=function(t){var e,n=h(this._buff.buffer,t,!0),a=n.length;for(this._length+=t.byteLength,e=64;e<=a;e+=64)r(this._hash,o(n.subarray(e-64,e)));return this._buff=e-64<a?new Uint8Array(n.buffer.slice(e-64)):new Uint8Array(0),this},d.ArrayBuffer.prototype.end=function(t){var e,r,n=this._buff,o=n.length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<o;e+=1)a[e>>2]|=n[e]<<(e%4<<3);return this._finish(a,o),r=f(this._hash),t&&(r=p(r)),this.reset(),r},d.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},d.ArrayBuffer.prototype.getState=function(){var t=d.prototype.getState.call(this);return t.buff=c(t.buff),t},d.ArrayBuffer.prototype.setState=function(t){return t.buff=l(t.buff,!0),d.prototype.setState.call(this,t)},d.ArrayBuffer.prototype.destroy=d.prototype.destroy,d.ArrayBuffer.prototype._finish=d.prototype._finish,d.ArrayBuffer.hash=function(t,e){var r=f(i(new Uint8Array(t)));return e?p(r):r},d}()}(n);var C=o(n.exports),S=function(t){return a({url:"/fileUploadAndDownload/findFile",method:"get",params:t})},j=function(t){return a({url:"/fileUploadAndDownload/breakpointContinueFinish",method:"post",params:t})},U=function(t,e){return a({url:"/fileUploadAndDownload/removeChunk",method:"post",data:t,params:e})},F=function(t){return L("data-v-8d054362"),t=t(),B(),t},N={class:"break-point"},O={class:"gva-table-box"},I={id:"fromCont",method:"post"},P=F((function(){return c("div",{class:"el-upload__tip"},"请上传不超过5MB的文件",-1)})),D={class:"list"},M={key:0,class:"list-item"},G={class:"percentage"},T=F((function(){return c("div",{class:"tips"},"此版本为先行体验功能测试版，样式美化和性能优化正在进行中，上传切片文件和合成的完整文件分别再QMPlusserver目录的breakpointDir文件夹和fileDir文件夹",-1)})),R={name:"BreakPoint"},$=Object.assign(R,{setup:function(e){var n=i(null),o=i(""),L=i([]),B=i([]),E=i(NaN),F=i(!1),R=i(0),$=i(!0),z=function(){var e=r(t().mark((function e(a){var i,u;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=new FileReader,u=a.target.files[0],5242880,n.value=u,R.value=0,n.value.size<5242880?(i.readAsArrayBuffer(n.value),i.onload=function(){var e=r(t().mark((function e(r){var a,i,u,f,s,l,c,h,p,d,v;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=r.target.result,(i=new C.ArrayBuffer).append(a),o.value=i.end(),u=1048576,f=0,s=0,l=0,L.value=[];s<n.value.size;)f=l*u,s=(l+1)*u,c=n.value.slice(f,s),(h=new window.FormData).append("fileMd5",o.value),h.append("file",c),h.append("chunkNumber",l),h.append("fileName",n.value.name),L.value.push({key:l,formData:h}),l++;return p={fileName:n.value.name,fileMd5:o.value,chunkTotal:L.value.length},t.next=13,S(p);case 13:d=t.sent,v=d.data.file.ExaFileChunk,d.data.file.IsFinish?(B.value=[],b.success("文件已秒传")):B.value=L.value.filter((function(t){return!(v&&v.some((function(e){return e.FileChunkNumber===t.key})))})),E.value=B.value.length,console.log(E.value);case 19:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):(F.value=!0,b("请上传小于5M文件"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){null!==n.value?(100===R.value&&($.value=!1),Y()):b("请先上传文件")},Y=function(){B.value&&B.value.forEach((function(t){t.formData.append("chunkTotal",L.value.length);var e=new FileReader,r=t.formData.get("file");e.readAsArrayBuffer(r),e.onload=function(e){var r=new C.ArrayBuffer;r.append(e.target.result),t.formData.append("chunkMd5",r.end()),J(t)}}))};u((function(){return E.value}),(function(){R.value=Math.floor((L.value.length-E.value)/L.value.length*100)}));var J=function(){var e=r(t().mark((function e(r){var i,u,f;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e=r.formData,a({url:"/fileUploadAndDownload/breakpointContinue",method:"post",donNotShowLoading:!0,headers:{"Content-Type":"multipart/form-data"},data:e});case 2:if(0===t.sent.code){t.next=5;break}return t.abrupt("return");case 5:if(E.value--,0!==E.value){t.next=16;break}return i={fileName:n.value.name,fileMd5:o.value},t.next=10,j(i);case 10:if(0!==(u=t.sent).code){t.next=16;break}return f={fileName:n.value.name,fileMd5:o.value,filePath:u.data.filePath},b.success("上传成功"),t.next=16,U(f);case 16:case"end":return t.stop()}var e}),e)})));return function(t){return e.apply(this,arguments)}}(),q=i(null),H=function(){q.value.dispatchEvent(new MouseEvent("click"))};return function(t,e){var r=_,o=x,a=f("document"),i=A,u=k;return s(),l("div",N,[c("div",O,[h(r,{"content-position":"left"},{default:p((function(){return[d("大文件上传")]})),_:1}),c("form",I,[c("div",{class:"fileUpload",onClick:H},[d(" 选择文件 "),v(c("input",{id:"file",ref_key:"FileInput",ref:q,multiple:"multiple",type:"file",onChange:z},null,544),[[y,!1]])])]),h(o,{disabled:F.value,type:"primary",class:"uploadBtn",onClick:Q},{default:p((function(){return[d("上传文件")]})),_:1},8,["disabled"]),P,c("div",D,[h(w,{name:"list",tag:"p"},{default:p((function(){return[n.value?(s(),l("div",M,[h(i,null,{default:p((function(){return[h(a)]})),_:1}),c("span",null,g(n.value.name),1),c("span",G,g(R.value)+"%",1),h(u,{"show-text":!1,"text-inside":!1,"stroke-width":2,percentage:R.value},null,8,["percentage"])])):m("",!0)]})),_:1})]),T])])}}});e("default",E($,[["__scopeId","data-v-8d054362"]]))}}}))}();
