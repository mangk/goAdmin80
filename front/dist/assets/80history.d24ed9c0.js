/*! 
 Build based on gin-vue-admin 
 Time : 1689644659000 */
import{a4 as e,u as a,a as s,b as l,a6 as t,P as n,a5 as u,K as o,o as r,d as i,f as v,w as m,F as c,y as d,i as p,e as y,z as g,X as f,k as h,t as b,a7 as S,ai as I,Q as q,R as O,aj as k,ak as w}from"./80index.24a37b5d.js";import"./80tab-pane.4ed993c7.js";const N={class:"router-history"},C=["tab"],x={name:"HistoryComponent"},J=Object.assign(x,{setup(x){const J=e(),j=a(),V=e=>e.name+JSON.stringify(e.query)+JSON.stringify(e.params),E=s([]),A=s(""),P=s(!1),R=l(),T=e=>e.name+JSON.stringify(e.query)+JSON.stringify(e.params),L=s(0),K=s(0),X=s(!1),_=s(!1),z=s(""),F=t((()=>R.userInfo.authority.defaultRouter)),H=()=>{E.value=[{name:F.value,meta:{title:"首页"},query:{},params:{}}],j.push({name:F.value}),P.value=!1,sessionStorage.setItem("historys",JSON.stringify(E.value))},Q=()=>{let e;const a=E.value.findIndex((a=>(V(a)===z.value&&(e=a),V(a)===z.value))),s=E.value.findIndex((e=>V(e)===A.value));E.value.splice(0,a),a>s&&j.push(e),sessionStorage.setItem("historys",JSON.stringify(E.value))},U=()=>{let e;const a=E.value.findIndex((a=>(V(a)===z.value&&(e=a),V(a)===z.value))),s=E.value.findIndex((e=>V(e)===A.value));E.value.splice(a+1,E.value.length),a<s&&j.push(e),sessionStorage.setItem("historys",JSON.stringify(E.value))},Y=()=>{let e;E.value=E.value.filter((a=>(V(a)===z.value&&(e=a),V(a)===z.value))),j.push(e),sessionStorage.setItem("historys",JSON.stringify(E.value))},Z=e=>{if(!E.value.some((a=>((e,a)=>{if(e.name!==a.name)return!1;if(Object.keys(e.query).length!==Object.keys(a.query).length||Object.keys(e.params).length!==Object.keys(a.params).length)return!1;for(const s in e.query)if(e.query[s]!==a.query[s])return!1;for(const s in e.params)if(e.params[s]!==a.params[s])return!1;return!0})(a,e)))){const a={};a.name=e.name,a.meta={...e.meta},delete a.meta.matched,a.query=e.query,a.params=e.params,E.value.push(a)}window.sessionStorage.setItem("activeValue",V(e))},$=s({}),B=e=>{var a;const s=null==(a=null==e?void 0:e.props)?void 0:a.name;if(!s)return;const l=$.value[s];j.push({name:l.name,query:l.query,params:l.params})},D=e=>{const a=E.value.findIndex((a=>V(a)===e));V(J)===e&&(1===E.value.length?j.push({name:F.value}):a<E.value.length-1?j.push({name:E.value[a+1].name,query:E.value[a+1].query,params:E.value[a+1].params}):j.push({name:E.value[a-1].name,query:E.value[a-1].query,params:E.value[a-1].params})),E.value.splice(a,1)};n((()=>P.value),(()=>{P.value?document.body.addEventListener("click",(()=>{P.value=!1})):document.body.removeEventListener("click",(()=>{P.value=!1}))})),n((()=>J),((e,a)=>{"Login"!==e.name&&"Reload"!==e.name&&(E.value=E.value.filter((e=>!e.meta.closeTab)),Z(e),sessionStorage.setItem("historys",JSON.stringify(E.value)),A.value=window.sessionStorage.getItem("activeValue"))}),{deep:!0}),n((()=>E.value),(()=>{sessionStorage.setItem("historys",JSON.stringify(E.value)),$.value={},E.value.forEach((e=>{$.value[V(e)]=e})),u.emit("setKeepAlive",E.value)}),{deep:!0});return(()=>{u.on("closeThisPage",(()=>{D(T(J))})),u.on("closeAllPage",(()=>{H()})),u.on("mobile",(e=>{_.value=e})),u.on("collapse",(e=>{X.value=e}));const e=[{name:F.value,meta:{title:"首页"},query:{},params:{}}];E.value=JSON.parse(sessionStorage.getItem("historys"))||e,window.sessionStorage.getItem("activeValue")?A.value=window.sessionStorage.getItem("activeValue"):A.value=V(J),Z(J),"true"===window.sessionStorage.getItem("needCloseAll")&&(H(),window.sessionStorage.removeItem("needCloseAll"))})(),o((()=>{u.off("collapse"),u.off("mobile")})),(e,a)=>{const s=k,l=w;return r(),i("div",N,[v(l,{modelValue:A.value,"onUpdate:modelValue":a[0]||(a[0]=e=>A.value=e),closable:!(1===E.value.length&&e.$route.name===f(F)),type:"card",onContextmenu:a[1]||(a[1]=I((e=>(e=>{if(1===E.value.length&&J.name===F.value)return!1;let a="";if(a="SPAN"===e.srcElement.nodeName?e.srcElement.offsetParent.id:e.srcElement.id,a){let s;P.value=!0,s=X.value?54:220,_.value&&(s=0),L.value=e.clientX-s,K.value=e.clientY+10,z.value=a.substring(4)}})(e)),["prevent"])),onTabClick:B,onTabRemove:D},{default:m((()=>[(r(!0),i(c,null,d(E.value,(e=>(r(),p(s,{key:T(e),label:e.meta.title,name:T(e),tab:e,class:"gva-tab"},{label:m((()=>[y("span",{tab:e,style:g({color:A.value===T(e)?f(R).activeColor:"#333"})},[y("i",{class:"dot",style:g({backgroundColor:A.value===T(e)?f(R).activeColor:"#ddd"})},null,4),h(" "+b(f(S)(e.meta.title,e)),1)],12,C)])),_:2},1032,["label","name","tab"])))),128))])),_:1},8,["modelValue","closable"]),q(y("ul",{style:g({left:L.value+"px",top:K.value+"px"}),class:"contextmenu"},[y("li",{onClick:H},"关闭所有"),y("li",{onClick:Q},"关闭左侧"),y("li",{onClick:U},"关闭右侧"),y("li",{onClick:Y},"关闭其他")],4),[[O,P.value]])])}}});export{J as default};
