/*! 
 Build based on gin-vue-admin 
 Time : 1689644659000 */
!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(r=i.key,a=void 0,"symbol"==typeof(a=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"))?a:String(a)),i)}var r,a}System.register(["./80index-legacy.38c85b9c.js","./80progress-legacy.518b8698.js","./80button-legacy.518b8698.js","./80_plugin-vue_export-helper-legacy.c6aa7c23.js"],(function(t,n){"use strict";var i,r,a,o,l,u,d,s,f,c,p,h,g,m;return{setters:[function(e){i=e.O,r=e.a,a=e.b,o=e.o,l=e.d,u=e.f,d=e.w,s=e.k,f=e.t,c=e.X,p=e.m,h=e.s,g=e.aM},null,null,function(e){m=e._}],execute:function(){t("g",(function(e){return i({url:"/fileUploadAndDownload/getFileList",method:"post",data:e})})),t("d",(function(e){return i({url:"/fileUploadAndDownload/deleteFile",method:"post",data:e})})),t("e",(function(e){return i({url:"/fileUploadAndDownload/editFileName",method:"post",data:e})})),t("u",(function(){return i({url:"/fileUploadAndDownload/cfg",method:"get"})}));var n=function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1920;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.file=e,this.fileSize=n,this.maxWH=i}var n,i,r;return n=t,(i=[{key:"compress",value:function(){var e=this,t=this.file.type,n=this.file.size/1024;return new Promise((function(i){var r=new FileReader;r.readAsDataURL(e.file),r.onload=function(){var a=document.createElement("canvas"),o=document.createElement("img");o.src=r.result,o.onload=function(){var r=a.getContext("2d"),l=e.dWH(o.width,o.height,e.maxWH);a.width=l.width,a.height=l.height,r.clearRect(0,0,a.width,a.height),r.drawImage(o,0,0,a.width,a.height);var u=a.toDataURL(t,.9),d=e.fileSizeKB(u);d>e.fileSize&&console.log("图片尺寸太大!"+n+" >> "+d);var s=e.dataURLtoBlob(u,t),f=new File([s],e.file.name);i(f)}}}))}},{key:"dWH",value:function(e,t,n){var i={width:e,height:t};return Math.max(e,t)>n?e>t?(i.width=n,i.height=Math.round(t*(n/e)),i):(i.height=n,i.width=Math.round(e*(n/t)),i):i}},{key:"fileSizeKB",value:function(e){return Math.round(3*e.split(",")[1].length/4/1024)}},{key:"dataURLtoBlob",value:function(e,t){for(var n=atob(e.split(",")[1]),i=e.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(n.length),a=new Uint8Array(r),o=0;o<n.length;o++)a[o]=n.charCodeAt(o);return t&&(i=t),new Blob([r],{type:i,lastModifiedDate:new Date})}}])&&e(n.prototype,i),r&&e(n,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),v={name:"UploadImage",methods:{}};t("U",m(Object.assign(v,{props:{imageUrl:{type:String,default:""},fileSize:{type:Number,default:2048},maxWH:{type:Number,default:4096},btnName:{type:String,default:"上传"},oss:{type:String,default:""}},emits:["on-success"],setup:function(e,t){var i=t.emit,m=e,v=r("/_sys"),y=a(),w=function(e){var t="image/jpeg"===e.type,i="image/png"===e.type;return t||i?e.size/1024<m.fileSize?new n(e,m.fileSize,m.maxWH).compress():(p.error("上传头像图片大小应小于 ".concat(m.fileSize,"KB")),!1):(p.error("上传头像图片只能是 jpg或png 格式!"),!1)},b=function(e){i("on-success")};return function(e,t){var n=h,i=g;return o(),l("div",null,[u(i,{action:"".concat(v.value,"/fileUploadAndDownload/upload?driver=").concat(m.oss),headers:{Authorization:"Bearer "+c(y).token},"show-file-list":!1,"on-success":b,"before-upload":w,multiple:!1},{default:d((function(){return[u(n,{type:"primary"},{default:d((function(){return[s("上传至"+f(m.btnName),1)]})),_:1})]})),_:1},8,["action","headers"])])}}}),[["__scopeId","data-v-8b97fe3c"]]))}}}))}();
