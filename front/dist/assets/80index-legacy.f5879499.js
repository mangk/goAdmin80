/*! 
 Build based on gin-vue-admin 
 Time : 1691505529000 */
System.register(["./80index-legacy.715506e8.js","./80_plugin-vue_export-helper-legacy.c6aa7c23.js"],(function(e,n){"use strict";var r,l,t,c,u,i,s;return{setters:[function(e){r=e.N,l=e.I,t=e.K,c=e.a,u=e.o,i=e.d},function(e){s=e._}],execute:function(){var n={exports:{}};
/*!
			* screenfull
			* v5.2.0 - 2021-11-03
			* (c) Sindre Sorhus; MIT License
			*/!function(e){!function(){var n="undefined"!=typeof window&&void 0!==window.document?window.document:{},r=e.exports,l=function(){for(var e,r=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],l=0,t=r.length,c={};l<t;l++)if((e=r[l])&&e[1]in n){for(l=0;l<e.length;l++)c[r[0][l]]=e[l];return c}return!1}(),t={change:l.fullscreenchange,error:l.fullscreenerror},c={request:function(e,r){return new Promise(function(t,c){var u=function(){this.off("change",u),t()}.bind(this);this.on("change",u);var i=(e=e||n.documentElement)[l.requestFullscreen](r);i instanceof Promise&&i.then(u).catch(c)}.bind(this))},exit:function(){return new Promise(function(e,r){if(this.isFullscreen){var t=function(){this.off("change",t),e()}.bind(this);this.on("change",t);var c=n[l.exitFullscreen]();c instanceof Promise&&c.then(t).catch(r)}else e()}.bind(this))},toggle:function(e,n){return this.isFullscreen?this.exit():this.request(e,n)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,r){var l=t[e];l&&n.addEventListener(l,r,!1)},off:function(e,r){var l=t[e];l&&n.removeEventListener(l,r,!1)},raw:l};l?(Object.defineProperties(c,{isFullscreen:{get:function(){return Boolean(n[l.fullscreenElement])}},element:{enumerable:!0,get:function(){return n[l.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(n[l.fullscreenEnabled])}}}),r?e.exports=c:window.screenfull=c):r?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}}()}(n);var o=r(n.exports),a={key:0,class:"gvaIcon gvaIcon-fullscreen-expand"},f={key:1,class:"gvaIcon gvaIcon-fullscreen-shrink"},d={name:"Screenfull"};e("default",s(Object.assign(d,{props:{width:{type:Number,default:22},height:{type:Number,default:22},fill:{type:String,default:"#48576a"}},setup:function(e){l((function(){o.isEnabled&&o.on("change",s)})),t((function(){o.off("change")}));var n=function(){o.isEnabled&&o.toggle()},r=c(!0),s=function(){r.value=!o.isFullscreen};return function(e,l){return u(),i("div",{onClick:n},[r.value?(u(),i("div",a)):(u(),i("div",f))])}}}),[["__scopeId","data-v-ed93b9d9"]]))}}}));
