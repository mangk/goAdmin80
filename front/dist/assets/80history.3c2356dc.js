/*! 
 Build based on gin-vue-admin 
 Time : 1718184910000 */
import{a0 as e,u as a,a as s,b as l,a2 as t,I as n,a1 as u,z as o,o as r,d as i,g as v,w as m,F as c,B as d,j as p,e as y,a3 as g,D as f,k as h,t as b,a4 as S,ag as I,K as q,L as O,ah as k,ai as w}from"./80index.42704865.js";import"./80tab-pane.4ed993c7.js";const N={class:"router-history"},C=["tab"],x={name:"HistoryComponent"},J=Object.assign(x,{setup(x){const J=e(),j=a(),V=e=>e.name+JSON.stringify(e.query)+JSON.stringify(e.params),E=s([]),A=s(""),L=s(!1),P=l(),T=e=>e.name+JSON.stringify(e.query)+JSON.stringify(e.params),R=s(0),K=s(0),$=s(!1),_=s(!1),z=s(""),B=t((()=>P.userInfo.authority.defaultRouter)),D=()=>{E.value=[{name:B.value,meta:{title:"首页"},query:{},params:{}}],j.push({name:B.value}),L.value=!1,sessionStorage.setItem("historys",JSON.stringify(E.value))},F=()=>{let e;const a=E.value.findIndex((a=>(V(a)===z.value&&(e=a),V(a)===z.value))),s=E.value.findIndex((e=>V(e)===A.value));E.value.splice(0,a),a>s&&j.push(e),sessionStorage.setItem("historys",JSON.stringify(E.value))},H=()=>{let e;const a=E.value.findIndex((a=>(V(a)===z.value&&(e=a),V(a)===z.value))),s=E.value.findIndex((e=>V(e)===A.value));E.value.splice(a+1,E.value.length),a<s&&j.push(e),sessionStorage.setItem("historys",JSON.stringify(E.value))},U=()=>{let e;E.value=E.value.filter((a=>(V(a)===z.value&&(e=a),V(a)===z.value))),j.push(e),sessionStorage.setItem("historys",JSON.stringify(E.value))},X=e=>{if(!E.value.some((a=>((e,a)=>{if(e.name!==a.name)return!1;if(Object.keys(e.query).length!==Object.keys(a.query).length||Object.keys(e.params).length!==Object.keys(a.params).length)return!1;for(const s in e.query)if(e.query[s]!==a.query[s])return!1;for(const s in e.params)if(e.params[s]!==a.params[s])return!1;return!0})(a,e)))){const a={};a.name=e.name,a.meta={...e.meta},delete a.meta.matched,a.query=e.query,a.params=e.params,E.value.push(a)}window.sessionStorage.setItem("activeValue",V(e))},Y=s({}),G=e=>{var a;const s=null==(a=null==e?void 0:e.props)?void 0:a.name;if(!s)return;const l=Y.value[s];j.push({name:l.name,query:l.query,params:l.params})},M=e=>{const a=E.value.findIndex((a=>V(a)===e));V(J)===e&&(1===E.value.length?j.push({name:B.value}):a<E.value.length-1?j.push({name:E.value[a+1].name,query:E.value[a+1].query,params:E.value[a+1].params}):j.push({name:E.value[a-1].name,query:E.value[a-1].query,params:E.value[a-1].params})),E.value.splice(a,1)};n((()=>L.value),(()=>{L.value?document.body.addEventListener("click",(()=>{L.value=!1})):document.body.removeEventListener("click",(()=>{L.value=!1}))})),n((()=>J),((e,a)=>{"Login"!==e.name&&"Reload"!==e.name&&(E.value=E.value.filter((e=>!e.meta.closeTab)),X(e),sessionStorage.setItem("historys",JSON.stringify(E.value)),A.value=window.sessionStorage.getItem("activeValue"))}),{deep:!0}),n((()=>E.value),(()=>{sessionStorage.setItem("historys",JSON.stringify(E.value)),Y.value={},E.value.forEach((e=>{Y.value[V(e)]=e})),u.emit("setKeepAlive",E.value)}),{deep:!0});return(()=>{u.on("closeThisPage",(()=>{M(T(J))})),u.on("closeAllPage",(()=>{D()})),u.on("mobile",(e=>{_.value=e})),u.on("collapse",(e=>{$.value=e}));const e=[{name:B.value,meta:{title:"首页"},query:{},params:{}}];E.value=JSON.parse(sessionStorage.getItem("historys"))||e,window.sessionStorage.getItem("activeValue")?A.value=window.sessionStorage.getItem("activeValue"):A.value=V(J),X(J),"true"===window.sessionStorage.getItem("needCloseAll")&&(D(),window.sessionStorage.removeItem("needCloseAll"))})(),o((()=>{u.off("collapse"),u.off("mobile")})),(e,a)=>{const s=k,l=w;return r(),i("div",N,[v(l,{modelValue:A.value,"onUpdate:modelValue":a[0]||(a[0]=e=>A.value=e),closable:!(1===E.value.length&&e.$route.name===f(B)),type:"card",onContextmenu:a[1]||(a[1]=I((e=>(e=>{if(1===E.value.length&&J.name===B.value)return!1;let a="";if(a="SPAN"===e.srcElement.nodeName?e.srcElement.offsetParent.id:e.srcElement.id,a){let s;L.value=!0,s=$.value?54:220,_.value&&(s=0),R.value=e.clientX-s,K.value=e.clientY+10,z.value=a.substring(4)}})(e)),["prevent"])),onTabClick:G,onTabRemove:M},{default:m((()=>[(r(!0),i(c,null,d(E.value,(e=>(r(),p(s,{key:T(e),label:e.meta.title,name:T(e),tab:e,class:"gva-tab"},{label:m((()=>[y("span",{tab:e,style:g({color:A.value===T(e)?f(P).activeColor:"#333"})},[y("i",{class:"dot",style:g({backgroundColor:A.value===T(e)?f(P).activeColor:"#ddd"})},null,4),h(" "+b(f(S)(e.meta.title,e)),1)],12,C)])),_:2},1032,["label","name","tab"])))),128))])),_:1},8,["modelValue","closable"]),q(y("ul",{style:g({left:R.value+"px",top:K.value+"px"}),class:"contextmenu"},[y("li",{onClick:D},"关闭所有"),y("li",{onClick:F},"关闭左侧"),y("li",{onClick:H},"关闭右侧"),y("li",{onClick:U},"关闭其他")],4),[[O,L.value]])])}}});export{J as default};
