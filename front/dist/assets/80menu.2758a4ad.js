/*! 
 Build based on gin-vue-admin 
 Time : 1691505529000 */
import{r as e,a as l,x as a,o as t,d as o,e as i,g as d,w as u,k as n,t as s,j as p,A as m,f as r,aC as v,Y as c,aI as f,m as h,aJ as b,aK as w,aL as y,s as g,Z as _,B as V,$ as k,n as j,q as S,av as x,aw as C,ay as I,aq as U,E as N,a4 as T,p as A,l as P}from"./80index.dd9a9de9.js";import"./80dialog.4ed993c7.js";import"./80overlay.4ed993c7.js";import"./80form-item.4ed993c7.js";import"./80tooltip.4ed993c7.js";import"./80popper.4ed993c7.js";import"./80radio.4ed993c7.js";import"./80input.4ed993c7.js";import"./80tag.4ed993c7.js";import"./80checkbox.4ed993c7.js";import"./80scrollbar.4ed993c7.js";import"./80select.4ed993c7.js";import"./80table-column.4ed993c7.js";import"./80icon.4ed993c7.js";import"./80button.4ed993c7.js";import M from"./80icon.1860058f.js";import{_ as R}from"./80_plugin-vue_export-helper.1b428a4d.js";const q=e=>(A("data-v-159058ad"),e=e(),P(),e),B={class:"gva-table-box"},D={class:"gva-btn-list"},E={key:0,class:"icon-column"},F=q((()=>i("span",null," 高亮菜单 ",-1))),z=q((()=>i("span",null," 是否为基础页面 ",-1))),K=q((()=>i("span",{style:{"font-size":"12px","margin-right":"12px"}},"该地址返回的vue模版源代码会被渲染到页面",-1))),O={class:"dialog-footer"},Q={name:"Menus"},Y=R(Object.assign(Q,{setup(A){const P=e({path:[{required:!0,message:"请输入菜单name",trigger:"blur"}],"meta.title":[{required:!0,message:"请输入菜单展示名称",trigger:"blur"}]}),R=l(1),q=l(0),Q=l(999),Y=l([]);l({});const Z=async()=>{const e=await v(!0,!1);0===e.code&&(Y.value=e.data.list,q.value=e.data.total,R.value=e.data.page,Q.value=e.data.pageSize)};Z();const G=()=>{J.value.component=J.value.component.replace(/\\/g,"/")},J=l({id:0,path:"",name:"",hidden:!1,parentId:0,component:"view/systemTools/convert/index.vue",meta:{activeName:"",title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1,SSRPath:""}}),L=()=>{J.value.path=J.value.name},$=e=>{X(),e()},H=l(null),W=l(!1),X=()=>{W.value=!1,H.value.resetFields(),J.value={id:0,path:"",name:"",hidden:!1,parentId:0,component:"view/systemTools/convert/index.vue",meta:{title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1}}},ee=l(!1),le=()=>{X(),ee.value=!1},ae=async()=>{H.value.validate((async e=>{if(e){let e;e=de.value?await b(J.value):await w(J.value),0===e.code&&(h({type:"success",message:de.value?"编辑成功":"添加成功!"}),Z()),X(),ee.value=!1}}))},te=l([{id:0,title:"根菜单"}]),oe=()=>{te.value=[{id:0,title:"根目录"}],ie(Y.value,te.value,!1)},ie=(e,l,a)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const t={title:e.meta.title,id:String(e.id),disabled:a||e.id===J.value.id,children:[]};ie(e.children,t.children,a||e.id===J.value.id),l.push(t)}else{const t={title:e.meta.title,id:String(e.id),disabled:a||e.id===J.value.id};l.push(t)}}))},de=l(!1),ue=l("新增菜单"),ne=e=>{ue.value="新增菜单",J.value.parentId=e,de.value=!1,oe(),ee.value=!0};return(e,l)=>{const v=g,b=_,w=V,A=k,q=j,Q=S,W=x,X=C,ie=I,se=a("QuestionFilled"),pe=U,me=N,re=T;return t(),o("div",null,[i("div",B,[i("div",D,[d(v,{type:"primary",icon:"plus",onClick:l[0]||(l[0]=e=>ne(0))},{default:u((()=>[n("新增根菜单")])),_:1})]),d(A,{data:Y.value,"row-key":"id"},{default:u((()=>[d(b,{align:"left",label:"ID","min-width":"100",prop:"id"}),d(b,{align:"left",label:"展示名称","min-width":"120",prop:"authorityName"},{default:u((e=>[i("span",null,s(e.row.meta.title),1)])),_:1}),d(b,{align:"left",label:"图标","min-width":"140",prop:"authorityName"},{default:u((e=>[e.row.meta.icon?(t(),o("div",E,[d(w,null,{default:u((()=>[(t(),p(m(e.row.meta.icon)))])),_:2},1024),i("span",null,s(e.row.meta.icon),1)])):r("",!0)])),_:1}),d(b,{align:"left",label:"路由Name","show-overflow-tooltip":"","min-width":"160",prop:"name"}),d(b,{align:"left",label:"路由Path","show-overflow-tooltip":"","min-width":"160",prop:"path"}),d(b,{align:"left",label:"是否隐藏","min-width":"100",prop:"hidden"},{default:u((e=>[i("span",null,s(e.row.hidden?"隐藏":"显示"),1)])),_:1}),d(b,{align:"left",label:"父节点","min-width":"90",prop:"parentId"}),d(b,{align:"left",label:"排序","min-width":"70",prop:"sort"}),d(b,{align:"left",label:"模版路径","min-width":"360",prop:"SSRPath"},{default:u((e=>[i("span",null,s(e.row.meta.SSRPath),1)])),_:1}),d(b,{align:"left",fixed:"right",label:"操作",width:"300"},{default:u((e=>[d(v,{type:"primary",link:"",icon:"plus",onClick:l=>ne(e.row.id)},{default:u((()=>[n("添加子菜单 ")])),_:2},1032,["onClick"]),d(v,{type:"primary",link:"",icon:"edit",onClick:l=>(async e=>{ue.value="编辑菜单";const l=await y({id:e});J.value=l.data,de.value=!0,oe(),ee.value=!0})(e.row.id)},{default:u((()=>[n("编辑 ")])),_:2},1032,["onClick"]),d(v,{type:"primary",link:"",icon:"delete",onClick:l=>{return a=e.row.id,void c.confirm("此操作将永久删除所有角色下该菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await f({id:a})).code&&(h({type:"success",message:"删除成功!"}),1===Y.value.length&&R.value>1&&R.value--,Z())})).catch((()=>{h({type:"info",message:"已取消删除"})}));var a}},{default:u((()=>[n("删除 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),d(re,{modelValue:ee.value,"onUpdate:modelValue":l[11]||(l[11]=e=>ee.value=e),"before-close":$,title:ue.value},{footer:u((()=>[i("div",O,[d(v,{onClick:le},{default:u((()=>[n("取 消")])),_:1}),d(v,{type:"primary",onClick:ae},{default:u((()=>[n("确 定")])),_:1})])])),default:u((()=>[ee.value?(t(),p(me,{key:0,ref_key:"menuForm",ref:H,inline:!0,model:J.value,rules:P,"label-position":"top","label-width":"85px"},{default:u((()=>[d(Q,{label:"展示名称",prop:"meta.title",style:{width:"30%"}},{default:u((()=>[d(q,{modelValue:J.value.meta.title,"onUpdate:modelValue":l[1]||(l[1]=e=>J.value.meta.title=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),d(Q,{label:"路由Name",prop:"path",style:{width:"30%"}},{default:u((()=>[d(q,{modelValue:J.value.name,"onUpdate:modelValue":l[2]||(l[2]=e=>J.value.name=e),autocomplete:"off",placeholder:"唯一英文字符串",onChange:L},null,8,["modelValue"])])),_:1}),d(Q,{label:"是否隐藏",style:{width:"30%"}},{default:u((()=>[d(X,{modelValue:J.value.hidden,"onUpdate:modelValue":l[3]||(l[3]=e=>J.value.hidden=e),placeholder:"是否在列表隐藏"},{default:u((()=>[d(W,{value:!1,label:"否"}),d(W,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),d(Q,{label:"父节点ID",style:{width:"30%"}},{default:u((()=>[d(ie,{modelValue:J.value.parentId,"onUpdate:modelValue":l[4]||(l[4]=e=>J.value.parentId=e),style:{width:"100%"},disabled:!de.value,options:te.value,props:{checkStrictly:!0,label:"title",value:"id",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])])),_:1}),d(Q,{label:"图标",prop:"meta.icon",style:{width:"30%"}},{default:u((()=>[d(M,{meta:J.value.meta,style:{width:"100%"}},null,8,["meta"])])),_:1}),d(Q,{label:"排序标记",prop:"sort",style:{width:"30%"}},{default:u((()=>[d(q,{modelValue:J.value.sort,"onUpdate:modelValue":l[5]||(l[5]=e=>J.value.sort=e),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])])),_:1}),d(Q,{prop:"meta.activeName",style:{width:"30%"}},{label:u((()=>[i("div",null,[F,d(pe,{content:"注：当到达此路由时候，指定左侧菜单指定name会处于活跃状态（亮起），可为空，为空则为本路由Name。",placement:"top",effect:"light"},{default:u((()=>[d(w,null,{default:u((()=>[d(se)])),_:1})])),_:1})])])),default:u((()=>[d(q,{modelValue:J.value.meta.activeName,"onUpdate:modelValue":l[6]||(l[6]=e=>J.value.meta.activeName=e),placeholder:J.value.name,autocomplete:"off"},null,8,["modelValue","placeholder"])])),_:1}),d(Q,{label:"KeepAlive",prop:"meta.keepAlive",style:{width:"30%"}},{default:u((()=>[d(X,{modelValue:J.value.meta.keepAlive,"onUpdate:modelValue":l[7]||(l[7]=e=>J.value.meta.keepAlive=e),style:{width:"100%"},placeholder:"是否keepAlive缓存页面"},{default:u((()=>[d(W,{value:!1,label:"否"}),d(W,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),d(Q,{label:"CloseTab",prop:"meta.closeTab",style:{width:"30%"}},{default:u((()=>[d(X,{modelValue:J.value.meta.closeTab,"onUpdate:modelValue":l[8]||(l[8]=e=>J.value.meta.closeTab=e),style:{width:"100%"},placeholder:"是否自动关闭tab"},{default:u((()=>[d(W,{value:!1,label:"否"}),d(W,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),d(Q,{style:{width:"30%"}},{label:u((()=>[i("div",null,[z,d(pe,{content:"此项选择为是，则不会展示左侧菜单以及顶部信息。",placement:"top",effect:"light"},{default:u((()=>[d(w,null,{default:u((()=>[d(se)])),_:1})])),_:1})])])),default:u((()=>[d(X,{modelValue:J.value.meta.defaultMenu,"onUpdate:modelValue":l[9]||(l[9]=e=>J.value.meta.defaultMenu=e),style:{width:"100%"},placeholder:"是否为基础页面"},{default:u((()=>[d(W,{value:!1,label:"否"}),d(W,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),d(Q,{label:"模版地址",style:{width:"60%"}},{default:u((()=>[d(q,{modelValue:J.value.meta.SSRPath,"onUpdate:modelValue":l[10]||(l[10]=e=>J.value.meta.SSRPath=e),autocomplete:"off",placeholder:"可以访问的后端接口",onBlur:G},null,8,["modelValue"]),K])),_:1})])),_:1},8,["model","rules"])):r("",!0)])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-159058ad"]]);export{Y as default};
