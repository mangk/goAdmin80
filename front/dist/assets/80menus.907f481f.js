/*! 
 Build based on gin-vue-admin 
 Time : 1699436580000 */
import{O as e,a,P as t,o,d as s,e as l,g as r,w as u,k as d,t as n,z as i,aC as c,aD as p,m,aE as y,n as h,s as f,az as v,Z as k,$ as w,a4 as b}from"./80index.8861bda6.js";import"./80dialog.4ed993c7.js";import"./80overlay.4ed993c7.js";import"./80table-column.4ed993c7.js";import"./80checkbox.4ed993c7.js";import"./80tag.4ed993c7.js";import"./80tooltip.4ed993c7.js";import"./80popper.4ed993c7.js";import"./80scrollbar.4ed993c7.js";import"./80tree.4ed993c7.js";import"./80button.4ed993c7.js";import"./80input.4ed993c7.js";import{u as g}from"./80authority.fbdac72b.js";import{_ as j}from"./80_plugin-vue_export-helper.1b428a4d.js";const I={class:"clearfix sticky-button"},_={class:"tree-content"},C={class:"custom-tree-node"},x={class:"dialog-footer"},R={name:"Menus"},V=j(Object.assign(R,{props:{row:{default:function(){return{}},type:Object}},emits:["changeRow"],setup(j,{expose:R,emit:V}){const D=j,N=a(""),O=a([]),A=a([]),E=a(!1),z=a({children:"children",label:function(e){return e.meta.title}});(async()=>{const e=await c(!0,!0);O.value=e.data.list;const a=(await p({authorityId:D.row.authorityId})).data,t=[];a.forEach((e=>{a.some((a=>a.parentId===e.id))||t.push(Number(e.id))})),A.value=t,console.log(t)})();const B=()=>{E.value=!0},M=a(null),P=async()=>{const e=M.value.getCheckedNodes(!1,!0);0===(await y({menus:e,authorityId:D.row.authorityId})).code&&m({type:"success",message:"菜单设置成功!"})};R({enterAndNext:()=>{P()},needConfirm:E});const S=a(!1),T=a([]),U=a([]),Z=a();const G=e=>{U.value=e},Q=()=>{S.value=!1},Y=async()=>{const a=U.value.map((e=>e.ID));var t;0===(await(t={menuID:"",selected:a,authorityId:D.row.authorityId},e({url:"/authorityBtn/setAuthorityBtn",method:"post",data:t}))).code&&(m({type:"success",message:"设置成功"}),S.value=!1)},$=(e,a)=>!e||-1!==a.meta.title.indexOf(e);return t(N,(e=>{M.value.filter(e)})),(e,a)=>{const t=h,c=f,p=v,y=k,R=w,E=b;return o(),s("div",null,[l("div",I,[r(t,{modelValue:N.value,"onUpdate:modelValue":a[0]||(a[0]=e=>N.value=e),class:"fitler",placeholder:"筛选"},null,8,["modelValue"]),r(c,{class:"fl-right",type:"primary",onClick:P},{default:u((()=>[d("确 定")])),_:1})]),l("div",_,[r(p,{ref_key:"menuTree",ref:M,data:O.value,"default-checked-keys":A.value,props:z.value,"default-expand-all":"","highlight-current":"","node-key":"id","show-checkbox":"","filter-node-method":$,onCheck:B},{default:u((({node:e,data:a})=>[l("span",C,[l("span",null,n(e.label),1),l("span",null,[r(c,{type:"primary",link:"",style:i({color:j.row.defaultRouter===a.name?"#E6A23C":"#85ce61"}),disabled:!e.checked,onClick:()=>(async e=>{const a=await g({authorityId:D.row.authorityId,AuthorityName:D.row.authorityName,parentId:D.row.parentId,defaultRouter:e.name});0===a.code&&(m({type:"success",message:"设置成功"}),V("changeRow","defaultRouter",a.data.authority.defaultRouter))})(a)},{default:u((()=>[d(n(j.row.defaultRouter===a.name?"首页":"设为首页"),1)])),_:2},1032,["style","disabled","onClick"])])])])),_:1},8,["data","default-checked-keys","props"])]),r(E,{modelValue:S.value,"onUpdate:modelValue":a[1]||(a[1]=e=>S.value=e),title:"分配按钮","destroy-on-close":""},{footer:u((()=>[l("div",x,[r(c,{onClick:Q},{default:u((()=>[d("取 消")])),_:1}),r(c,{type:"primary",onClick:Y},{default:u((()=>[d("确 定")])),_:1})])])),default:u((()=>[r(R,{ref_key:"btnTableRef",ref:Z,data:T.value,"row-key":"ID",onSelectionChange:G},{default:u((()=>[r(y,{type:"selection",width:"55"}),r(y,{label:"按钮名称",prop:"name"}),r(y,{label:"按钮备注",prop:"desc"})])),_:1},8,["data"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-37c753b4"]]);export{V as default};
