/*! 
 Build based on gin-vue-admin 
 Time : 1684380092000 */
System.register(["./80menuItem-legacy.6d5582b9.js","./80asyncSubmenu-legacy.f4435dfa.js","./80index-legacy.83c85e0f.js","./80tooltip-legacy.518b8698.js","./80popper-legacy.518b8698.js","./80icon-legacy.518b8698.js","./80_plugin-vue_export-helper-legacy.c6aa7c23.js"],(function(e,n){"use strict";var t,r,u,o,l,i,c,f,s,a,d,p,h;return{setters:[function(e){t=e.default},function(e){r=e.default},function(e){u=e.a6,o=e.x,l=e.o,i=e.i,c=e.w,f=e.d,s=e.F,a=e.y,d=e.j,p=e.A,h=e.X},null,null,null,null],execute:function(){var n={name:"AsideComponent"};e("default",Object.assign(n,{props:{routerInfo:{type:Object,default:function(){return null}},isCollapse:{default:function(){return!1},type:Boolean},theme:{default:function(){return{}},type:Object}},setup:function(e){var n=e,y=u((function(){return n.routerInfo.children&&n.routerInfo.children.filter((function(e){return!e.hidden})).length?r:t}));return function(n,t){var r=o("AsideComponent");return e.routerInfo.hidden?d("",!0):(l(),i(p(h(y)),{key:0,"is-collapse":e.isCollapse,theme:e.theme,"router-info":e.routerInfo},{default:c((function(){return[e.routerInfo.children&&e.routerInfo.children.length?(l(!0),f(s,{key:0},a(e.routerInfo.children,(function(n){return l(),i(r,{key:n.name,"is-collapse":!1,"router-info":n,theme:e.theme},null,8,["router-info","theme"])})),128)):d("",!0)]})),_:1},8,["is-collapse","theme","router-info"]))}}}))}}}));