/*! 
 Build based on gin-vue-admin 
 Time : 1684136243000 */
import{a3 as e,u as a,b as o,U as t,r,O as l,J as s,a4 as n,o as c,c as u,e as i,w as d,T as p,F as v,x as m,W as f,h,i as x,y as b,aj as g,ak as k}from"./80index.758a8ed3.js";import"./80scrollbar.4ed993c7.js";import"./80tooltip.4ed993c7.js";import"./80popper.4ed993c7.js";import y from"./80index.80d28ce3.js";import"./80menuItem.97799a56.js";import"./80icon.4ed993c7.js";import"./80_plugin-vue_export-helper.1b428a4d.js";import"./80asyncSubmenu.6187fb92.js";const j={name:"Aside"},T=Object.assign(j,{setup(j){const T=e(),M=a(),O=o(),_=t(),w=r({}),B=()=>{switch(O.sideMode){case"#fff":w.value={background:"#fff",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#333",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#333"};break;case"#191a23":w.value={background:"#191a23",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#fff",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#fff"}}};B();const q=r("");l((()=>T),(()=>{q.value=T.meta.activeName||T.name}),{deep:!0}),l((()=>O.sideMode),(()=>{B()}));const S=r(!1);(()=>{q.value=T.meta.activeName||T.name;document.body.clientWidth<1e3&&(S.value=!S.value),n.on("collapse",(e=>{S.value=e}))})(),s((()=>{n.off("collapse")}));const I=(e,a,o,t)=>{var r,l;const s={},n={};(null==(r=_.routeMap[e])?void 0:r.parameters)&&(null==(l=_.routeMap[e])||l.parameters.forEach((e=>{"query"===e.type?s[e.key]=e.value:n[e.key]=e.value}))),e!==T.name&&(e.indexOf("http://")>-1||e.indexOf("https://")>-1?window.open(e):M.push({name:e,query:s,params:n}))};return(e,a)=>{const o=g,t=k;return c(),u("div",{style:b({background:f(O).sideMode})},[i(t,{style:{height:"calc(100vh - 60px)"}},{default:d((()=>[i(p,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:d((()=>[i(o,{collapse:S.value,"collapse-transition":!1,"default-active":q.value,"background-color":w.value.background,"active-text-color":w.value.active,class:"el-menu-vertical","unique-opened":"",onSelect:I},{default:d((()=>[(c(!0),u(v,null,m(f(_).asyncRouters[0].children,(e=>(c(),u(v,null,[e.hidden?x("",!0):(c(),h(y,{key:e.name,"is-collapse":S.value,"router-info":e,theme:w.value},null,8,["is-collapse","router-info","theme"]))],64)))),256))])),_:1},8,["collapse","default-active","background-color","active-text-color"])])),_:1})])),_:1})],4)}}});export{T as default};
