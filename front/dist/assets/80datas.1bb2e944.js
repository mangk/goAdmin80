/*! 
 Build based on gin-vue-admin 
 Time : 1684300488000 */
import{r as a,o as t,c as e,e as r,d as o,w as l,j as u,F as i,x as s,h as n,t as d,l as c,q as h,ay as y,az as p}from"./80index.a465723e.js";import"./80checkbox-group.4ed993c7.js";import"./80checkbox.4ed993c7.js";import"./80button.4ed993c7.js";import{s as f}from"./80authority.77abe6b8.js";import{W as m}from"./80warningBar.14806a67.js";import"./80icon.4ed993c7.js";import"./80_plugin-vue_export-helper.1b428a4d.js";const v={class:"clearfix sticky-button",style:{margin:"18px"}},I={class:"tree-content"},g={name:"Datas"},w=Object.assign(g,{props:{row:{default:function(){return{}},type:Object},authority:{default:function(){return[]},type:Array}},emits:["changeRow"],setup(g,{expose:w,emit:j}){const x=g,b=a([]),k=a(!1),A=a=>{a&&a.forEach((a=>{const t={};t.authorityId=a.authorityId,t.authorityName=a.authorityName,b.value.push(t),a.children&&a.children.length&&A(a.children)}))},_=a([]);A(x.authority),x.row.dataAuthorityId&&x.row.dataAuthorityId.forEach((a=>{const t=b.value&&b.value.filter((t=>t.authorityId===a.authorityId))&&b.value.filter((t=>t.authorityId===a.authorityId))[0];_.value.push(t)}));const C=()=>{_.value=[...b.value],j("changeRow","dataAuthorityId",_.value),k.value=!0},R=()=>{_.value=b.value.filter((a=>a.authorityId===x.row.authorityId)),j("changeRow","dataAuthorityId",_.value),k.value=!0},N=()=>{const a=[];E(x.row,a),_.value=b.value.filter((t=>a.indexOf(t.authorityId)>-1)),j("changeRow","dataAuthorityId",_.value),k.value=!0},E=(a,t)=>{t.push(a.authorityId),a.children&&a.children.forEach((a=>{E(a,t)}))},O=async()=>{0===(await f(x.row)).code&&c({type:"success",message:"资源设置成功"})},V=()=>{j("changeRow","dataAuthorityId",_.value),k.value=!0};return w({enterAndNext:()=>{O()},needConfirm:k}),(a,c)=>{const f=h,g=y,w=p;return t(),e("div",null,[r(m,{title:"此功能仅用于创建角色和角色的many2many关系表，具体使用还须自己结合表实现业务，详情参考示例代码（客户示例）。此功能不建议使用，建议使用插件市场【组织管理功能（点击前往）】来管理资源权限。",href:"https://plugin.gin-vue-admin.com/#/layout/newPluginInfo?id=36"}),o("div",v,[r(f,{class:"fl-right",type:"primary",onClick:O},{default:l((()=>[u("确 定")])),_:1}),r(f,{class:"fl-left",type:"primary",onClick:C},{default:l((()=>[u("全选")])),_:1}),r(f,{class:"fl-left",type:"primary",onClick:R},{default:l((()=>[u("本角色")])),_:1}),r(f,{class:"fl-left",type:"primary",onClick:N},{default:l((()=>[u("本角色及子角色")])),_:1})]),o("div",I,[r(w,{modelValue:_.value,"onUpdate:modelValue":c[0]||(c[0]=a=>_.value=a),onChange:V},{default:l((()=>[(t(!0),e(i,null,s(b.value,((a,e)=>(t(),n(g,{key:e,label:a},{default:l((()=>[u(d(a.authorityName),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])])}}});export{w as default};