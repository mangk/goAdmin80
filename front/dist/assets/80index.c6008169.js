/*! 
 Build based on gin-vue-admin 
 Time : 1684988314000 */
import{u as e,b as a,V as l,a as s,r as t,P as o,o as n,i,w as u,Q as d,e as r,a2 as c,f as m,k as p,d as v,F as f,y as h,t as g,j as y,s as k,a3 as b,a4 as x,c as w,I as j,a5 as _,a6 as C,J as I,x as M,M as O,z as L,X as q,T as N,a7 as S,R as V,W as P,A as R,m as T,D as z,a8 as A,C as D,a9 as E,aa as K,B as U,ab as W,ac as B,ad as F,ae as H,af as X,ag as $,a1 as G}from"./80index.e27f11c9.js";import"./80loading.4ed993c7.js";import"./80button.4ed993c7.js";import"./80popper.4ed993c7.js";import"./80scrollbar.4ed993c7.js";import"./80icon.4ed993c7.js";import"./80col.4ed993c7.js";import{_ as J,s as Q}from"./80system.db2f5677.js";import Y from"./80index.632b2709.js";import Z from"./80history.f38c955a.js";import ee from"./80search.6d99dff4.js";import ae from"./80bottomInfo.48378d51.js";import{C as le}from"./80index.53099ebb.js";import"./80dialog.4ed993c7.js";import"./80overlay.4ed993c7.js";import se from"./80index.2467e755.js";import"./80tooltip.4ed993c7.js";import"./80index.623a1106.js";import"./80menuItem.a4f99bec.js";import"./80_plugin-vue_export-helper.1b428a4d.js";import"./80asyncSubmenu.43975c1f.js";import"./80tab-pane.4ed993c7.js";import"./80index.0bebda58.js";import"./80drawer.4ed993c7.js";const te={key:0,class:"quick-title"},oe=["onClick"],ne={class:"dialog-footer"},ie={name:"CommandMenu"},ue=Object.assign(ie,{setup(x,{expose:w}){const j=e(),_=e(),C=a(),I=l(),M=s(!1),O=s(""),L=t([]),q=e=>{const a=[];return e.forEach((e=>{e.children&&e.children.length>0?a.push(...q(e.children)):e.meta.title&&e.meta.title.indexOf(O.value)>-1&&a.push({label:e.meta.title,func:()=>V(e)})})),a},N=()=>{const e={label:"跳转",children:[]},a=q(I.asyncRouters[0].children);e.children.push(...a),L.push(e)},S=()=>{const e={label:"操作",children:[]},a=[{label:"亮色主题",func:()=>P("light")},{label:"暗色主题",func:()=>P("dark")},{label:"退出登录",func:()=>C.LoginOut()}];e.children.push(...a.filter((e=>e.label.indexOf(O.value)>-1))),L.push(e)};N(),S();const V=e=>{var a,l;const s=e.name,t={},o={};(null==(a=I.routeMap[s])?void 0:a.parameters)&&(null==(l=I.routeMap[s])||l.parameters.forEach((e=>{"query"===e.type?t[e.key]=e.value:o[e.key]=e.value}))),s!==_.name&&(e.name.indexOf("http://")>-1||e.name.indexOf("https://")>-1?window.open(e.name):j.push({name:s,query:t,params:o}),M.value=!1)},P=e=>{null!==e?C.changeSideMode(e):C.changeSideMode("dark")},R=()=>{M.value=!1};return w({open:()=>{M.value=!0}}),o(O,(()=>{L.length=0,N(),S()})),(e,a)=>{const l=k,s=b;return n(),i(s,{modelValue:M.value,"onUpdate:modelValue":a[1]||(a[1]=e=>M.value=e),width:"30%",class:"overlay","show-close":!1},{header:u((()=>[d(r("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>O.value=e),class:"quick-input",placeholder:"请输入你需要快捷到达的功能"},null,512),[[c,O.value]])])),footer:u((()=>[r("span",ne,[m(l,{onClick:R},{default:u((()=>[p("关闭")])),_:1})])])),default:u((()=>[(n(!0),v(f,null,h(L,((e,a)=>(n(),v("div",{key:a},[e.children.length?(n(),v("div",te,g(e.label),1)):y("",!0),(n(!0),v(f,null,h(e.children,((e,l)=>(n(),v("div",{key:a+"-"+l,class:"quick-item",onClick:e.func},g(e.label),9,oe)))),128))])))),128))])),_:1},8,["modelValue"])}}}),de=r("img",{alt:"",class:"logoimg",src:J},null,-1),re={key:0,class:"gvaIcon gvaIcon-arrow-double-right"},ce={key:1,class:"gvaIcon gvaIcon-arrow-double-left"},me={class:"right-box"},pe={class:"dp-flex justify-content-center align-items height-full width-full"},ve={class:"header-avatar",style:{cursor:"pointer"}},fe=r("div",null,"指令菜单",-1),he={style:{"margin-left":"8px"}},ge={class:"button"},ye=r("span",{class:"button"},"K",-1),ke={name:"Layout"},be=Object.assign(ke,{setup(o){const c=e(),k=x(),b=l(),J=s(!1),te=s(!0),oe=s(!1),ne=s("");s(!1);const ie=()=>{"WIN"===window.localStorage.getItem("osType")?ne.value="Ctrl":ne.value="⌘";window.addEventListener("keydown",(e=>{e.ctrlKey&&"k"===e.key&&(e.preventDefault(),xe())}));const e=document.body.clientWidth;e<1e3?(oe.value=!0,te.value=!1,J.value=!0):e>=1e3&&e<1200?(oe.value=!1,te.value=!1,J.value=!0):(oe.value=!1,te.value=!0,J.value=!1)};ie();const ke=t({name:w.appName});Q().then((async e=>{""!==e.data.sysName&&(ke.name=e.data.sysName,e.data.hasOwnProperty("message")&&T({showClose:!0,message:e.data.message,type:"warning",duration:0}))}));const be=s(),xe=()=>{be.value.open()},we=s(!1);j((()=>{_.emit("collapse",J.value),_.emit("mobile",oe.value),_.on("reload",Le),_.on("showLoading",(()=>{we.value=!0})),_.on("closeLoading",(()=>{we.value=!1})),window.onresize=()=>(ie(),_.emit("collapse",J.value),void _.emit("mobile",oe.value)),je.loadingInstance&&je.loadingInstance.close()}));const je=a(),_e=C((()=>"dark"===je.sideMode?"#fff":"light"===je.sideMode?"#191a23":je.baseColor)),Ce=C((()=>"dark"===je.sideMode?"#191a23":"light"===je.sideMode?"#fff":je.sideMode)),Ie=C((()=>k.meta.matched)),Me=s(!0);let Oe=null;const Le=async()=>{Oe&&window.clearTimeout(Oe),Oe=window.setTimeout((async()=>{if(k.meta.keepAlive)Me.value=!1,await I(),Me.value=!0;else{const e=k.meta.title;c.push({name:"Reload",params:{title:e}})}}),400)},qe=s(!1),Ne=()=>{J.value=!J.value,te.value=!J.value,qe.value=!J.value,_.emit("collapse",J.value)},Se=()=>{c.push({name:"person"})};return(e,a)=>{const l=z,s=A,t=D,o=E,c=K,x=M("arrow-down"),w=U,j=W,_=B,C=F,I=H,T=M("router-view"),Q=X,ie=$,Oe=G;return n(),i(ie,{class:"layout-cont"},{default:u((()=>[m(ie,{class:O([te.value?"openside":"hideside",oe.value?"mobile":""])},{default:u((()=>[m(l,{class:O([qe.value?"shadowBg":""]),onClick:a[0]||(a[0]=e=>(qe.value=!qe.value,te.value=!!J.value,void Ne()))},null,8,["class"]),m(s,{class:"main-cont main-left gva-aside"},{default:u((()=>[r("div",{class:"tilte",style:L({background:q(Ce)})},[de,te.value?(n(),v("div",{key:0,class:"tit-text",style:L({color:q(_e)})},g(ke.name),5)):y("",!0)],4),m(Y,{class:"aside"})])),_:1}),m(Q,{class:"main-cont main-right"},{default:u((()=>[m(N,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:u((()=>[r("div",{style:L({width:`calc(100% - ${oe.value?"0px":J.value?"54px":"220px"})`}),class:"topfix"},[m(l,null,{default:u((()=>[m(t,null,{default:u((()=>[m(I,{class:"header-cont"},{default:u((()=>[m(l,{class:"pd-0"},{default:u((()=>[m(t,{xs:2,lg:1,md:1,sm:1,xl:1,style:{"z-index":"100"}},{default:u((()=>[r("div",{class:"menu-total",onClick:Ne},[J.value?(n(),v("div",re)):(n(),v("div",ce))])])),_:1}),m(t,{xs:10,lg:14,md:14,sm:9,xl:14,pull:1},{default:u((()=>[d(m(c,{class:"breadcrumb"},{default:u((()=>[(n(!0),v(f,null,h(q(Ie).slice(1,q(Ie).length),(e=>(n(),i(o,{key:e.path},{default:u((()=>[p(g(q(S)(e.meta.title,q(k))),1)])),_:2},1024)))),128))])),_:1},512),[[V,!oe.value]])])),_:1}),m(t,{xs:12,lg:9,md:9,sm:14,xl:9},{default:u((()=>[r("div",me,[m(ee),m(C,null,{dropdown:u((()=>[m(_,{class:"dropdown-group"},{default:u((()=>[m(j,{icon:"avatar"},{default:u((()=>[r("div",{class:"command-box",style:{display:"flex"},onClick:xe},[fe,r("div",he,[r("span",ge,g(ne.value),1),p(" + "),ye])])])),_:1}),m(j,{icon:"avatar",onClick:Se},{default:u((()=>[p("个人信息")])),_:1}),m(j,{icon:"reading-lamp",onClick:q(je).LoginOut},{default:u((()=>[p("登 出")])),_:1},8,["onClick"])])),_:1})])),default:u((()=>[r("div",pe,[r("span",ve,[m(le),d(r("span",{style:{"margin-left":"5px"}},g(q(je).userInfo.nickName),513),[[V,!oe.value]]),m(w,null,{default:u((()=>[m(x)])),_:1})])])])),_:1})])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),m(Z,{ref:"layoutHistoryComponent"},null,512)],4)])),_:1}),Me.value?d((n(),i(T,{"element-loading-text":"正在加载中",class:"admin-box",key:e.$route.fullPath},{default:u((({Component:e})=>[r("div",null,[m(N,{mode:"out-in",name:"el-fade-in-linear"},{default:u((()=>[(n(),i(P,{include:q(b).keepAliveRouters},[(n(),i(R(e)))],1032,["include"]))])),_:2},1024)])])),_:1})),[[Oe,we.value]]):y("",!0),m(ae),m(se),m(ue,{ref_key:"command",ref:be},null,512)])),_:1})])),_:1},8,["class"])])),_:1})}}});export{be as default};
