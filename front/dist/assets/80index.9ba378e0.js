/*! 
 Build based on gin-vue-admin 
 Time : 1691505529000 */
import{a5 as e,u as a,b as o,V as t,a as r,P as l,K as s,a6 as n,o as c,d as u,g as i,w as d,T as p,F as v,y as m,X as f,j as h,f as g,z as b,al as x,am as k}from"./80index.dd9a9de9.js";import"./80scrollbar.4ed993c7.js";import"./80tooltip.4ed993c7.js";import"./80popper.4ed993c7.js";import y from"./80index.7fef5fb2.js";import"./80menuItem.dd04816d.js";import"./80icon.4ed993c7.js";import"./80_plugin-vue_export-helper.1b428a4d.js";import"./80asyncSubmenu.5cc0dccf.js";const j={name:"Aside"},T=Object.assign(j,{setup(j){const T=e(),M=a(),_=o(),w=t(),B=r({}),O=()=>{switch(_.sideMode){case"#fff":B.value={background:"#fff",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#333",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#333"};break;case"#191a23":B.value={background:"#191a23",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#fff",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#fff"}}};O();const q=r("");l((()=>T),(()=>{q.value=T.meta.activeName||T.name}),{deep:!0}),l((()=>_.sideMode),(()=>{O()}));const S=r(!1);(()=>{q.value=T.meta.activeName||T.name;document.body.clientWidth<1e3&&(S.value=!S.value),n.on("collapse",(e=>{S.value=e}))})(),s((()=>{n.off("collapse")}));const I=(e,a,o,t)=>{var r,l;const s={},n={};(null==(r=w.routeMap[e])?void 0:r.parameters)&&(null==(l=w.routeMap[e])||l.parameters.forEach((e=>{"query"===e.type?s[e.key]=e.value:n[e.key]=e.value}))),e!==T.name&&(e.indexOf("http://")>-1||e.indexOf("https://")>-1?window.open(e):M.push({name:e,query:s,params:n}))};return(e,a)=>{const o=x,t=k;return c(),u("div",{style:b({background:f(_).sideMode})},[i(t,{style:{height:"calc(100vh - 60px)"}},{default:d((()=>[i(p,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:d((()=>[i(o,{collapse:S.value,"collapse-transition":!1,"default-active":q.value,"background-color":B.value.background,"active-text-color":B.value.active,class:"el-menu-vertical","unique-opened":"",onSelect:I},{default:d((()=>[(c(!0),u(v,null,m(f(w).asyncRouters[0].children,(e=>(c(),u(v,null,[e.hidden?g("",!0):(c(),h(y,{key:e.name,"is-collapse":S.value,"router-info":e,theme:B.value},null,8,["is-collapse","router-info","theme"]))],64)))),256))])),_:1},8,["collapse","default-active","background-color","active-text-color"])])),_:1})])),_:1})],4)}}});export{T as default};
