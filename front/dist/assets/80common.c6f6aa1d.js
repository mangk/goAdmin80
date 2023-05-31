/*! 
 Build based on gin-vue-admin 
 Time : 1685519436000 */
import{O as e,a as t,b as s,o as a,d as o,f as i,w as l,k as n,X as r,m as d,s as u,aM as p}from"./80index.18693129.js";import"./80progress.4ed993c7.js";import"./80button.4ed993c7.js";import{_ as h}from"./80_plugin-vue_export-helper.1b428a4d.js";const c=t=>e({url:"/fileUploadAndDownload/getFileList",method:"post",data:t}),m=t=>e({url:"/fileUploadAndDownload/deleteFile",method:"post",data:t}),f=t=>e({url:"/fileUploadAndDownload/editFileName",method:"post",data:t});class g{constructor(e,t,s=1920){this.file=e,this.fileSize=t,this.maxWH=s}compress(){const e=this.file.type,t=this.file.size/1024;return new Promise((s=>{const a=new FileReader;a.readAsDataURL(this.file),a.onload=()=>{const o=document.createElement("canvas"),i=document.createElement("img");i.src=a.result,i.onload=()=>{const a=o.getContext("2d"),l=this.dWH(i.width,i.height,this.maxWH);o.width=l.width,o.height=l.height,a.clearRect(0,0,o.width,o.height),a.drawImage(i,0,0,o.width,o.height);const n=o.toDataURL(e,.9),r=this.fileSizeKB(n);r>this.fileSize&&console.log("图片尺寸太大!"+t+" >> "+r);const d=this.dataURLtoBlob(n,e),u=new File([d],this.file.name);s(u)}}}))}dWH(e,t,s){const a={width:e,height:t};return Math.max(e,t)>s?e>t?(a.width=s,a.height=Math.round(t*(s/e)),a):(a.height=s,a.width=Math.round(e*(s/t)),a):a}fileSizeKB(e){let t=0;return t=Math.round(3*e.split(",")[1].length/4/1024),t}dataURLtoBlob(e,t){const s=atob(e.split(",")[1]);let a=e.split(",")[0].split(":")[1].split(";")[0];const o=new ArrayBuffer(s.length),i=new Uint8Array(o);for(let l=0;l<s.length;l++)i[l]=s.charCodeAt(l);return t&&(a=t),new Blob([o],{type:a,lastModifiedDate:new Date})}}const w={name:"UploadImage",methods:{}},y=h(Object.assign(w,{props:{imageUrl:{type:String,default:""},fileSize:{type:Number,default:2048},maxWH:{type:Number,default:1920}},emits:["on-success"],setup(e,{emit:h}){const c=e,m=t("/_sys"),f=s(),w=e=>{const t="image/jpeg"===e.type,s="image/png"===e.type;if(!t&&!s)return d.error("上传头像图片只能是 jpg或png 格式!"),!1;const a=e.size/1024<c.fileSize;if(!a){return new g(e,c.fileSize,c.maxWH).compress()}return a},y=e=>{const{data:t}=e;t.file&&h("on-success",t.file.url)};return(e,t)=>{const s=u,d=p;return a(),o("div",null,[i(d,{action:`${m.value}/fileUploadAndDownload/upload`,headers:{Authorization:"Bearer "+r(f).token},"show-file-list":!1,"on-success":y,"before-upload":w,multiple:!1},{default:l((()=>[i(s,{type:"primary"},{default:l((()=>[n("压缩上传")])),_:1})])),_:1},8,["action","headers"])])}}}),[["__scopeId","data-v-29627731"]]),U={name:"UploadCommon",methods:{}},b=Object.assign(U,{emits:["on-success"],setup(e,{emit:h}){const c=t("/_sys"),m=s(),f=t(!1),g=e=>{f.value=!0;const t="image/jpeg"===e.type,s="image/png"===e.type,a=e.size/1024/1024<.5;return t||s||(d.error("上传图片只能是 jpg或png 格式!"),f.value=!1),a||(d.error("未压缩的上传图片大小不能超过 500KB，请使用压缩上传"),f.value=!1),(s||t)&&a},w=e=>{const{data:t}=e;t.file&&h("on-success",t.file.url)},y=()=>{d({type:"error",message:"上传失败"}),f.value=!1};return(e,t)=>{const s=u,d=p;return a(),o("div",null,[i(d,{action:`${c.value}/fileUploadAndDownload/upload`,"before-upload":g,headers:{Authorization:"Bearer "+r(m).token},"on-error":y,"on-success":w,"show-file-list":!1,class:"upload-btn"},{default:l((()=>[i(s,{type:"primary"},{default:l((()=>[n("普通上传")])),_:1})])),_:1},8,["action","headers"])])}}});export{y as U,b as _,m as d,f as e,c as g};
