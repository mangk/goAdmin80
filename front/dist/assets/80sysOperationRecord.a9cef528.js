/*! 
 Build based on gin-vue-admin 
 Time : 1684910658000 */
import{O as e,a,x as l,o as t,d as o,e as s,f as i,w as r,k as u,t as d,X as n,i as p,m as c,n as m,q as v,s as f,E as g,aw as h,Z as y,_ as w,B as b,$ as _,a0 as k}from"./80index.be7ff10b.js";import"./80pagination.4ed993c7.js";import"./80input.4ed993c7.js";import"./80tag.4ed993c7.js";import"./80select.4ed993c7.js";import"./80scrollbar.4ed993c7.js";import"./80popper.4ed993c7.js";import"./80table-column.4ed993c7.js";import"./80checkbox.4ed993c7.js";import"./80tooltip.4ed993c7.js";import"./80icon.4ed993c7.js";import"./80popover.4ed993c7.js";import"./80form-item.4ed993c7.js";import"./80button.4ed993c7.js";import{f as j}from"./80format.5008688d.js";const V=a=>e({url:"/sysOperationRecord",method:"delete",data:a}),C={class:"gva-search-box"},x={class:"gva-table-box"},O={class:"gva-btn-list"},S=s("p",null,"确定要删除吗？",-1),z={style:{"text-align":"right","margin-top":"8px"}},E={class:"popover-box"},U={key:1},R={class:"popover-box"},N={key:1},T=s("p",null,"确定要删除吗？",-1),L={style:{"text-align":"right","margin-top":"8px"}},P={class:"gva-pagination"},D={name:"SysOperationRecord"},I=Object.assign(D,{setup(D){const I=a(1),q=a(0),B=a(10),G=a([]),J=a({}),M=()=>{J.value={}},Q=()=>{I.value=1,B.value=10,""===J.value.status&&(J.value.status=null),$()},X=e=>{B.value=e,$()},Z=e=>{I.value=e,$()},$=async()=>{const a=await(l={page:I.value,pageSize:B.value,...J.value},e({url:"/sysOperationRecord/getSysOperationRecordList",method:"get",params:l}));var l;0===a.code&&(G.value=a.data.list,q.value=a.data.total,I.value=a.data.page,B.value=a.data.pageSize)};$();const A=a(!1),F=a([]),H=e=>{F.value=e},K=async()=>{const e=[];F.value&&F.value.forEach((a=>{e.push(a.id)}));0===(await V({ids:e})).code&&(c({type:"success",message:"删除成功"}),G.value.length===e.length&&I.value>1&&I.value--,A.value=!1,$())},W=e=>{try{return JSON.parse(e)}catch(a){return e}};return(e,a)=>{const D=m,Y=v,ee=f,ae=g,le=h,te=y,oe=w,se=l("warning"),ie=b,re=_,ue=k;return t(),o("div",null,[s("div",C,[i(ae,{inline:!0,model:J.value},{default:r((()=>[i(Y,{label:"请求方法"},{default:r((()=>[i(D,{modelValue:J.value.method,"onUpdate:modelValue":a[0]||(a[0]=e=>J.value.method=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),i(Y,{label:"请求路径"},{default:r((()=>[i(D,{modelValue:J.value.path,"onUpdate:modelValue":a[1]||(a[1]=e=>J.value.path=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),i(Y,{label:"结果状态码"},{default:r((()=>[i(D,{modelValue:J.value.status,"onUpdate:modelValue":a[2]||(a[2]=e=>J.value.status=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),i(Y,null,{default:r((()=>[i(ee,{type:"primary",icon:"search",onClick:Q},{default:r((()=>[u("查询")])),_:1}),i(ee,{icon:"refresh",onClick:M},{default:r((()=>[u("重置")])),_:1})])),_:1})])),_:1},8,["model"])]),s("div",x,[s("div",O,[i(le,{modelValue:A.value,"onUpdate:modelValue":a[5]||(a[5]=e=>A.value=e),placement:"top",width:"160"},{reference:r((()=>[i(ee,{icon:"delete",style:{"margin-left":"10px"},disabled:!F.value.length,onClick:a[4]||(a[4]=e=>A.value=!0)},{default:r((()=>[u("删除 ")])),_:1},8,["disabled"])])),default:r((()=>[S,s("div",z,[i(ee,{type:"primary",link:"",onClick:a[3]||(a[3]=e=>A.value=!1)},{default:r((()=>[u("取消")])),_:1}),i(ee,{type:"primary",onClick:K},{default:r((()=>[u("确定")])),_:1})])])),_:1},8,["modelValue"])]),i(re,{ref:"multipleTable",data:G.value,style:{width:"100%"},"tooltip-effect":"dark","row-key":"id",onSelectionChange:H},{default:r((()=>[i(te,{align:"left",type:"selection",width:"55"}),i(te,{align:"left",label:"操作人",width:"140"},{default:r((e=>[s("div",null,d(e.row.user.userName)+"("+d(e.row.user.nickName)+")",1)])),_:1}),i(te,{align:"left",label:"日期",width:"180"},{default:r((e=>[u(d(n(j)(e.row.ct)),1)])),_:1}),i(te,{align:"left",label:"状态码",prop:"status",width:"120"},{default:r((e=>[s("div",null,[i(oe,{type:"success"},{default:r((()=>[u(d(e.row.status),1)])),_:2},1024)])])),_:1}),i(te,{align:"left",label:"请求IP",prop:"ip",width:"120"}),i(te,{align:"left",label:"请求方法",prop:"method",width:"120"},{default:r((e=>[i(oe,{type:"POST"==e.row.method?"success":"GET"==e.row.method?"default":"DELETE"==e.row.method?"error":"warning"},{default:r((()=>[u(d(e.row.method),1)])),_:2},1032,["type"])])),_:1}),i(te,{align:"left",label:"请求路径",prop:"path",width:"240"}),i(te,{align:"left",label:"请求",prop:"path",width:"80"},{default:r((e=>[s("div",null,[e.row.body?(t(),p(le,{key:0,placement:"left-start",trigger:"click"},{reference:r((()=>[i(ie,{style:{cursor:"pointer"}},{default:r((()=>[i(se)])),_:1})])),default:r((()=>[s("div",E,[s("pre",null,d(W(e.row.body)),1)])])),_:2},1024)):(t(),o("span",U,"无"))])])),_:1}),i(te,{align:"left",label:"响应",prop:"path",width:"80"},{default:r((e=>[s("div",null,[e.row.resp?(t(),p(le,{key:0,placement:"left-start",trigger:"click"},{reference:r((()=>[i(ie,{style:{cursor:"pointer"}},{default:r((()=>[i(se)])),_:1})])),default:r((()=>[s("div",R,[s("pre",null,d(W(e.row.resp)),1)])])),_:2},1024)):(t(),o("span",N,"无"))])])),_:1}),i(te,{align:"left",label:"按钮组"},{default:r((e=>[i(le,{modelValue:e.row.visible,"onUpdate:modelValue":a=>e.row.visible=a,placement:"top",width:"160"},{reference:r((()=>[i(ee,{icon:"delete",type:"primary",link:"",onClick:a=>e.row.visible=!0},{default:r((()=>[u("删除")])),_:2},1032,["onClick"])])),default:r((()=>[T,s("div",L,[i(ee,{type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:r((()=>[u("取消")])),_:2},1032,["onClick"]),i(ee,{type:"primary",onClick:a=>(async e=>{e.visible=!1,0===(await V({ids:[e.id]})).code&&(c({type:"success",message:"删除成功"}),1===G.value.length&&I.value>1&&I.value--,$())})(e.row)},{default:r((()=>[u("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"]),s("div",P,[i(ue,{"current-page":I.value,"page-size":B.value,"page-sizes":[10,30,50,100],total:q.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:Z,onSizeChange:X},null,8,["current-page","page-size","total"])])])])}}});export{I as default};
