/*! 
 Build based on gin-vue-admin 
 Time : 1727164229000 */
import{a0 as e,u as a,b as o,P as t,a as r,I as l,z as s,a1 as n,o as u,d as c,g as i,w as d,T as p,F as v,B as m,D as f,j as h,f as g,a3 as b,aj as k,ak as x}from"./80index.40ff549f.js";import"./80scrollbar.4ed993c7.js";import"./80tooltip.4ed993c7.js";import"./80popper.4ed993c7.js";import y from"./80index.085ccc33.js";import"./80menuItem.fea5b5ec.js";import"./80_plugin-vue_export-helper.1b428a4d.js";import"./80asyncSubmenu.b33906d5.js";const j={name:"Aside"},T=Object.assign(j,{setup(j){const T=e(),B=a(),M=o(),_=t(),w=r({}),O=()=>{switch(M.sideMode){case"#fff":w.value={background:"#fff",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#333",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#333"};break;case"#191a23":w.value={background:"#191a23",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#fff",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#fff"}}};O();const q=r("");l((()=>T),(()=>{q.value=T.meta.activeName||T.name}),{deep:!0}),l((()=>M.sideMode),(()=>{O()}));const N=r(!1);(()=>{q.value=T.meta.activeName||T.name;document.body.clientWidth<1e3&&(N.value=!N.value),n.on("collapse",(e=>{N.value=e}))})(),s((()=>{n.off("collapse")}));const I=(e,a,o,t)=>{var r,l;const s={},n={};(null==(r=_.routeMap[e])?void 0:r.parameters)&&(null==(l=_.routeMap[e])||l.parameters.forEach((e=>{"query"===e.type?s[e.key]=e.value:n[e.key]=e.value}))),e!==T.name&&(e.indexOf("http://")>-1||e.indexOf("https://")>-1?window.open(e):B.push({name:e,query:s,params:n}))};return(e,a)=>{const o=k,t=x;return u(),c("div",{style:b({background:f(M).sideMode})},[i(t,{style:{height:"calc(100vh - 60px)"}},{default:d((()=>[i(p,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:d((()=>[i(o,{collapse:N.value,"collapse-transition":!1,"default-active":q.value,"background-color":w.value.background,"active-text-color":w.value.active,class:"el-menu-vertical","unique-opened":"",onSelect:I},{default:d((()=>[(u(!0),c(v,null,m(f(_).asyncRouters[0].children,(e=>(u(),c(v,null,[e.hidden?g("",!0):(u(),h(y,{key:e.name,"is-collapse":N.value,"router-info":e,theme:w.value},null,8,["is-collapse","router-info","theme"]))],64)))),256))])),_:1},8,["collapse","default-active","background-color","active-text-color"])])),_:1})])),_:1})],4)}}});export{T as default};