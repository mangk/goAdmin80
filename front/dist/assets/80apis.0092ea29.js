/*! 
 Build based on gin-vue-admin 
 Time : 1725855198000 */
import{H as e,a,I as t,o,d as s,e as r,g as l,w as n,k as c,m as i,n as d,s as p,ax as u}from"./80index.08a011ac.js";import"./80tree.4ed993c7.js";import"./80checkbox.4ed993c7.js";import"./80button.4ed993c7.js";import"./80input.4ed993c7.js";import{e as h}from"./80api.bdbe5cd2.js";import{_ as m}from"./80_plugin-vue_export-helper.1b428a4d.js";const f={class:"clearfix sticky-button"},v={class:"tree-content"},y={name:"Apis"},k=m(Object.assign(y,{props:{row:{default:function(){return{}},type:Object}},setup(m,{expose:y}){const k=m,b=a({children:"children",label:"description"}),j=a(""),x=a([]),I=a([]),g=a("");(async()=>{const a=(await h()).data;x.value=O(a);const t=await(o={authorityId:k.row.authorityId},e({url:"/casbin/getPolicyPathByAuthorityId",method:"post",data:o}));var o;g.value=k.row.authorityId,I.value=[],t.data&&t.data.forEach((e=>{I.value.push("p:"+e.path+"m:"+e.method)}))})();const w=a(!1),_=()=>{w.value=!0},O=e=>{const a={};e&&e.forEach((e=>{e.onlyId="p:"+e.path+"m:"+e.method,Object.prototype.hasOwnProperty.call(a,e.apiGroup)?a[e.apiGroup].push(e):Object.assign(a,{[e.apiGroup]:[e]})}));const t=[];for(const o in a){const e={ID:o,description:o+"组",children:a[o]};t.push(e)}return t},C=a(null),E=async()=>{const a=C.value.getCheckedNodes(!0);var t=[];a&&a.forEach((e=>{var a={path:e.path,method:e.method};t.push(a)}));var o;0===(await(o={authorityId:g.value,casbinInfos:t},e({url:"/casbin",method:"patch",data:o}))).code&&i({type:"success",message:"api设置成功"})};y({needConfirm:w,enterAndNext:()=>{E()}});const G=(e,a)=>!e||-1!==a.description.indexOf(e);return t(j,(e=>{C.value.filter(e)})),(e,a)=>{const t=d,i=p,h=u;return o(),s("div",null,[r("div",f,[l(t,{modelValue:j.value,"onUpdate:modelValue":a[0]||(a[0]=e=>j.value=e),class:"fitler",placeholder:"筛选"},null,8,["modelValue"]),l(i,{class:"fl-right",type:"primary",onClick:E},{default:n((()=>[c("确 定")])),_:1})]),r("div",v,[l(h,{ref_key:"apiTree",ref:C,data:x.value,"default-checked-keys":I.value,props:b.value,"default-expand-all":"","highlight-current":"","node-key":"onlyId","show-checkbox":"","filter-node-method":G,onCheck:_},null,8,["data","default-checked-keys","props"])])])}}}),[["__scopeId","data-v-74a816f8"]]);export{k as default};