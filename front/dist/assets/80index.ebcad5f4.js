/*! 
 Build based on gin-vue-admin 
 Time : 1685586964000 */
import{N as e,I as n,K as l,a as r,o as t,d as s}from"./80index.18693129.js";import{_ as c}from"./80_plugin-vue_export-helper.1b428a4d.js";var u,i,o,a,f,d,h={exports:{}};
/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/u=h,i="undefined"!=typeof window&&void 0!==window.document?window.document:{},o=u.exports,a=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],l=0,r=n.length,t={};l<r;l++)if((e=n[l])&&e[1]in i){for(l=0;l<e.length;l++)t[n[0][l]]=e[l];return t}return!1}(),f={change:a.fullscreenchange,error:a.fullscreenerror},d={request:function(e,n){return new Promise(function(l,r){var t=function(){this.off("change",t),l()}.bind(this);this.on("change",t);var s=(e=e||i.documentElement)[a.requestFullscreen](n);s instanceof Promise&&s.then(t).catch(r)}.bind(this))},exit:function(){return new Promise(function(e,n){if(this.isFullscreen){var l=function(){this.off("change",l),e()}.bind(this);this.on("change",l);var r=i[a.exitFullscreen]();r instanceof Promise&&r.then(l).catch(n)}else e()}.bind(this))},toggle:function(e,n){return this.isFullscreen?this.exit():this.request(e,n)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var l=f[e];l&&i.addEventListener(l,n,!1)},off:function(e,n){var l=f[e];l&&i.removeEventListener(l,n,!1)},raw:a},a?(Object.defineProperties(d,{isFullscreen:{get:function(){return Boolean(i[a.fullscreenElement])}},element:{enumerable:!0,get:function(){return i[a.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(i[a.fullscreenEnabled])}}}),o?u.exports=d:window.screenfull=d):o?u.exports={isEnabled:!1}:window.screenfull={isEnabled:!1};const m=e(h.exports),b={key:0,class:"gvaIcon gvaIcon-fullscreen-expand"},g={key:1,class:"gvaIcon gvaIcon-fullscreen-shrink"},w={name:"Screenfull"},F=c(Object.assign(w,{props:{width:{type:Number,default:22},height:{type:Number,default:22},fill:{type:String,default:"#48576a"}},setup(e){n((()=>{m.isEnabled&&m.on("change",i)})),l((()=>{m.off("change")}));const c=()=>{m.isEnabled&&m.toggle()},u=r(!0),i=()=>{u.value=!m.isFullscreen};return(e,n)=>(t(),s("div",{onClick:c},[u.value?(t(),s("div",b)):(t(),s("div",g))]))}}),[["__scopeId","data-v-ed93b9d9"]]);export{F as default};
