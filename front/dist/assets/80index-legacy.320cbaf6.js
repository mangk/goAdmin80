/*! 
 Build based on gin-vue-admin 
 Time : 1699436580000 */
System.register(["./80index-legacy.c731f6a5.js","./80scrollbar-legacy.518b8698.js","./80tooltip-legacy.518b8698.js","./80popper-legacy.518b8698.js","./80index-legacy.75017d34.js","./80menuItem-legacy.f56b6cf9.js","./80icon-legacy.518b8698.js","./80_plugin-vue_export-helper-legacy.c6aa7c23.js","./80asyncSubmenu-legacy.037316cd.js"],(function(e,a){"use strict";var n,t,l,u,o,r,c,i,f,s,v,d,p,m,g,y,h,b,x,k,j,T;return{setters:[function(e){n=e.a5,t=e.u,l=e.b,u=e.V,o=e.a,r=e.P,c=e.K,i=e.a6,f=e.o,s=e.d,v=e.g,d=e.w,p=e.T,m=e.F,g=e.y,y=e.X,h=e.j,b=e.f,x=e.z,k=e.al,j=e.am},null,null,null,function(e){T=e.default},null,null,null,null],execute:function(){var a={name:"Aside"};e("default",Object.assign(a,{setup:function(e){var a=n(),M=t(),_=l(),w=u(),B=o({}),O=function(){switch(_.sideMode){case"#fff":B.value={background:"#fff",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#333",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#333"};break;case"#191a23":B.value={background:"#191a23",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#fff",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#fff"}}};O();var S=o("");r((function(){return a}),(function(){S.value=a.meta.activeName||a.name}),{deep:!0}),r((function(){return _.sideMode}),(function(){O()}));var q=o(!1);S.value=a.meta.activeName||a.name,document.body.clientWidth<1e3&&(q.value=!q.value),i.on("collapse",(function(e){q.value=e})),c((function(){i.off("collapse")}));var I=function(e,n,t,l){var u,o,r={},c={};(null===(u=w.routeMap[e])||void 0===u?void 0:u.parameters)&&(null===(o=w.routeMap[e])||void 0===o||o.parameters.forEach((function(e){"query"===e.type?r[e.key]=e.value:c[e.key]=e.value}))),e!==a.name&&(e.indexOf("http://")>-1||e.indexOf("https://")>-1?window.open(e):M.push({name:e,query:r,params:c}))};return function(e,a){var n=k,t=j;return f(),s("div",{style:x({background:y(_).sideMode})},[v(t,{style:{height:"calc(100vh - 60px)"}},{default:d((function(){return[v(p,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:d((function(){return[v(n,{collapse:q.value,"collapse-transition":!1,"default-active":S.value,"background-color":B.value.background,"active-text-color":B.value.active,class:"el-menu-vertical","unique-opened":"",onSelect:I},{default:d((function(){return[(f(!0),s(m,null,g(y(w).asyncRouters[0].children,(function(e){return f(),s(m,null,[e.hidden?b("",!0):(f(),h(T,{key:e.name,"is-collapse":q.value,"router-info":e,theme:B.value},null,8,["is-collapse","router-info","theme"]))],64)})),256))]})),_:1},8,["collapse","default-active","background-color","active-text-color"])]})),_:1})]})),_:1})],4)}}}))}}}));
