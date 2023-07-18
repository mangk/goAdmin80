/*! 
 Build based on gin-vue-admin 
 Time : 1689644659000 */
import{a as e,b as a,o as t,d as l,f as s,w as o,k as r,X as n,m as i,s as u,aM as m,i as p,e as c,F as d,y as g,t as v,Y as y,n as f,q as j,E as b,B as h,aQ as _,a0 as C,as as k}from"./80index.24a37b5d.js";import"./80drawer.4ed993c7.js";import"./80overlay.4ed993c7.js";import"./80pagination.4ed993c7.js";import"./80input.4ed993c7.js";import"./80tag.4ed993c7.js";import"./80select.4ed993c7.js";import"./80scrollbar.4ed993c7.js";import"./80popper.4ed993c7.js";import"./80icon.4ed993c7.js";import"./80form-item.4ed993c7.js";import"./80button.4ed993c7.js";import{U as x,g as w,e as U}from"./80image.10ad3f8c.js";import"./80progress.4ed993c7.js";import{W as z}from"./80warningBar.6c132a3d.js";const S={name:"UploadCommon",methods:{}},V=Object.assign(S,{emits:["on-success"],setup(p,{emit:c}){const d=e("/_sys"),g=a(),v=e(!1),y=e=>{v.value=!0;const a="image/jpeg"===e.type,t="image/png"===e.type,l=e.size/1024/1024<.5;return a||t||(i.error("上传图片只能是 jpg或png 格式!"),v.value=!1),l||(i.error("未压缩的上传图片大小不能超过 500KB，请使用压缩上传"),v.value=!1),(t||a)&&l},f=e=>{const{data:a}=e;a.file&&c("on-success",a.file.url)},j=()=>{i({type:"error",message:"上传失败"}),v.value=!1};return(e,a)=>{const i=u,p=m;return t(),l("div",null,[s(p,{action:`${d.value}/fileUploadAndDownload/upload`,"before-upload":y,headers:{Authorization:"Bearer "+n(g).token},"on-error":j,"on-success":f,"show-file-list":!1,class:"upload-btn"},{default:o((()=>[s(i,{type:"primary"},{default:o((()=>[r("普通上传")])),_:1})])),_:1},8,["action","headers"])])}}}),B={class:"gva-btn-list"},O={class:"media"},E={class:"header-img-box-list"},I={class:"header-img-box-list"},K=c("picture",null,null,-1),M=["onClick"],T={__name:"index",props:{target:{type:Object,default:null},targetKey:{type:String,default:""}},emits:["enterImg"],setup(a,{expose:n,emit:m}){const S=e(""),T=e(""),A=e({}),D=e(1),F=e(0),P=e(20),W=e=>{P.value=e,L()},Y=e=>{D.value=e,L()},q=e(!1),J=e([]),L=async()=>{const e=await w({page:D.value,pageSize:P.value,...A.value});0===e.code&&(J.value=e.data.list,F.value=e.data.total,D.value=e.data.page,P.value=e.data.pageSize,q.value=!0)};return n({open:L}),(e,n)=>{const w=f,N=j,Q=u,X=b,$=h,G=_,H=C,R=k;return t(),p(R,{modelValue:q.value,"onUpdate:modelValue":n[3]||(n[3]=e=>q.value=e),title:"媒体库",size:"650px"},{default:o((()=>[s(z,{title:"点击“文件名/备注”可以编辑文件名或者备注内容。"}),c("div",B,[s(V,{imageCommon:T.value,"onUpdate:imageCommon":n[0]||(n[0]=e=>T.value=e),class:"upload-btn-media-library",onOnSuccess:L},null,8,["imageCommon"]),s(x,{imageUrl:S.value,"onUpdate:imageUrl":n[1]||(n[1]=e=>S.value=e),"file-size":512,"max-w-h":1080,class:"upload-btn-media-library",onOnSuccess:L},null,8,["imageUrl"]),s(X,{ref:"searchForm",inline:!0,model:A.value},{default:o((()=>[s(N,{label:""},{default:o((()=>[s(w,{modelValue:A.value.keyword,"onUpdate:modelValue":n[2]||(n[2]=e=>A.value.keyword=e),class:"keyword",placeholder:"请输入文件名或备注"},null,8,["modelValue"])])),_:1}),s(N,null,{default:o((()=>[s(Q,{type:"primary",icon:"search",onClick:L},{default:o((()=>[r("查询")])),_:1})])),_:1})])),_:1},8,["model"])]),c("div",O,[(t(!0),l(d,null,g(J.value,((e,r)=>(t(),l("div",{key:r,class:"media-box"},[c("div",E,[(t(),p(G,{key:r,src:(e.url&&e.url.slice(0,4),e.url),onClick:t=>{return l=e.url,s=a.target,o=a.targetKey,s&&o&&(s[o]=l),m("enterImg",l),void(q.value=!1);var l,s,o}},{error:o((()=>[c("div",I,[s($,null,{default:o((()=>[K])),_:1})])])),_:2},1032,["src","onClick"]))]),c("div",{class:"img-title",onClick:a=>(async e=>{y.prompt("请输入文件名或者备注","编辑",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"不能为空",inputValue:e.name}).then((async({value:a})=>{e.name=a,0===(await U(e)).code&&(i({type:"success",message:"编辑成功!"}),L())})).catch((()=>{i({type:"info",message:"取消修改"})}))})(e)},v(e.name),9,M)])))),128))]),s(H,{"current-page":D.value,"page-size":P.value,total:F.value,style:{"justify-content":"center"},layout:"total, prev, pager, next, jumper",onCurrentChange:Y,onSizeChange:W},null,8,["current-page","page-size","total"])])),_:1},8,["modelValue"])}}};export{T as _};
