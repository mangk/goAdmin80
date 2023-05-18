/*! 
 Build based on gin-vue-admin 
 Time : 1684380092000 */
import{O as e,a,P as t,o,d as s,e as l,f as r,w as u,k as d,t as n,z as i,aB as c,aC as p,m,aD as y,n as f,s as h,ay as v,Z as k,$ as w,a3 as b}from"./80index.d39802eb.js";import"./80dialog.4ed993c7.js";import"./80overlay.4ed993c7.js";import"./80table-column.4ed993c7.js";import"./80checkbox.4ed993c7.js";import"./80tag.4ed993c7.js";import"./80tooltip.4ed993c7.js";import"./80popper.4ed993c7.js";import"./80scrollbar.4ed993c7.js";import"./80tree.4ed993c7.js";import"./80button.4ed993c7.js";import"./80input.4ed993c7.js";import{u as g}from"./80authority.3186a58e.js";import{_ as j}from"./80_plugin-vue_export-helper.1b428a4d.js";const I={class:"clearfix sticky-button"},_={class:"tree-content"},C={class:"custom-tree-node"},x={class:"dialog-footer"},R={name:"Menus"},V=j(Object.assign(R,{props:{row:{default:function(){return{}},type:Object}},emits:["changeRow"],setup(j,{expose:R,emit:V}){const D=j,N=a(""),O=a([]),A=a([]),B=a(!1),E=a({children:"children",label:function(e){return e.meta.title}});(async()=>{const e=await c(!0,!0);O.value=e.data.list;const a=(await p({authorityId:D.row.authorityId})).data,t=[];a.forEach((e=>{a.some((a=>a.parentId===e.id))||t.push(Number(e.id))})),A.value=t,console.log(t)})();const M=()=>{B.value=!0},P=a(null),S=async()=>{const e=P.value.getCheckedNodes(!1,!0);0===(await y({menus:e,authorityId:D.row.authorityId})).code&&m({type:"success",message:"菜单设置成功!"})};R({enterAndNext:()=>{S()},needConfirm:B});const T=a(!1),U=a([]),z=a([]),G=a();const Q=e=>{z.value=e},X=()=>{T.value=!1},Y=async()=>{const a=z.value.map((e=>e.ID));var t;0===(await(t={menuID:"",selected:a,authorityId:D.row.authorityId},e({url:"/authorityBtn/setAuthorityBtn",method:"post",data:t}))).code&&(m({type:"success",message:"设置成功"}),T.value=!1)},Z=(e,a)=>!e||-1!==a.meta.title.indexOf(e);return t(N,(e=>{P.value.filter(e)})),(e,a)=>{const t=f,c=h,p=v,y=k,R=w,B=b;return o(),s("div",null,[l("div",I,[r(t,{modelValue:N.value,"onUpdate:modelValue":a[0]||(a[0]=e=>N.value=e),class:"fitler",placeholder:"筛选"},null,8,["modelValue"]),r(c,{class:"fl-right",type:"primary",onClick:S},{default:u((()=>[d("确 定")])),_:1})]),l("div",_,[r(p,{ref_key:"menuTree",ref:P,data:O.value,"default-checked-keys":A.value,props:E.value,"default-expand-all":"","highlight-current":"","node-key":"id","show-checkbox":"","filter-node-method":Z,onCheck:M},{default:u((({node:e,data:a})=>[l("span",C,[l("span",null,n(e.label),1),l("span",null,[r(c,{type:"primary",link:"",style:i({color:j.row.defaultRouter===a.name?"#E6A23C":"#85ce61"}),disabled:!e.checked,onClick:()=>(async e=>{const a=await g({authorityId:D.row.authorityId,AuthorityName:D.row.authorityName,parentId:D.row.parentId,defaultRouter:e.name});0===a.code&&(m({type:"success",message:"设置成功"}),V("changeRow","defaultRouter",a.data.authority.defaultRouter))})(a)},{default:u((()=>[d(n(j.row.defaultRouter===a.name?"首页":"设为首页"),1)])),_:2},1032,["style","disabled","onClick"])])])])),_:1},8,["data","default-checked-keys","props"])]),r(B,{modelValue:T.value,"onUpdate:modelValue":a[1]||(a[1]=e=>T.value=e),title:"分配按钮","destroy-on-close":""},{footer:u((()=>[l("div",x,[r(c,{onClick:X},{default:u((()=>[d("取 消")])),_:1}),r(c,{type:"primary",onClick:Y},{default:u((()=>[d("确 定")])),_:1})])])),default:u((()=>[r(R,{ref_key:"btnTableRef",ref:G,data:U.value,"row-key":"ID",onSelectionChange:Q},{default:u((()=>[r(y,{type:"selection",width:"55"}),r(y,{label:"按钮名称",prop:"name"}),r(y,{label:"按钮备注",prop:"desc"})])),_:1},8,["data"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-37c753b4"]]);export{V as default};