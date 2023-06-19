/*! 
 Build based on gin-vue-admin 
 Time : 1687172966000 */
import{a,o as e,d as t,f as l,e as r,w as o,k as u,i,j as d,Y as s,m as n,s as p,Z as h,$ as m,ay as y,q as v,n as c,E as f,a3 as I,aj as g,ak as b,as as w}from"./80index.4951ddc8.js";import"./80drawer.4ed993c7.js";import"./80overlay.4ed993c7.js";import"./80tab-pane.4ed993c7.js";import"./80dialog.4ed993c7.js";import"./80form-item.4ed993c7.js";import"./80input.4ed993c7.js";import"./80radio.4ed993c7.js";import"./80popper.4ed993c7.js";import"./80tag.4ed993c7.js";import"./80checkbox.4ed993c7.js";import"./80scrollbar.4ed993c7.js";import"./80table-column.4ed993c7.js";import"./80tooltip.4ed993c7.js";import"./80button.4ed993c7.js";import{g as j,d as k,c as _,u as N,a as C}from"./80authority.67c2f991.js";import V from"./80menus.ed1a925b.js";import x from"./80apis.9bb33110.js";import"./80checkbox-group.4ed993c7.js";import{W as A}from"./80warningBar.326a4983.js";import"./80tree.4ed993c7.js";import"./80_plugin-vue_export-helper.1b428a4d.js";import"./80api.eb8ab000.js";import"./80icon.4ed993c7.js";const S={class:"authority"},U={class:"gva-table-box"},q={class:"gva-btn-list"},D={class:"dialog-footer"},E={name:"Authority"},z=Object.assign(E,{setup(E){const z=a([{authorityId:0,authorityName:"根角色"}]),B=a(!1),R=a("add"),F=a({}),O=a("新增角色"),P=a(!1),T=a(!1),W=a({}),Y=a({authorityId:0,authorityName:"",parentId:0}),Z=a({authorityId:[{required:!0,message:"请输入角色ID",trigger:"blur"},{validator:(a,e,t)=>/^[0-9]*[1-9][0-9]*$/.test(e)?t():t(new Error("请输入正整数")),trigger:"blur",message:"必须为正整数"}],authorityName:[{required:!0,message:"请输入角色名",trigger:"blur"}],parentId:[{required:!0,message:"请选择父角色",trigger:"blur"}]}),$=a(1),G=a(0),M=a(999),Q=a([]),X=a({}),H=async()=>{const a=await j({page:$.value,pageSize:M.value,...X.value});0===a.code&&(Q.value=a.data.list,G.value=a.data.total,$.value=a.data.page,M.value=a.data.pageSize)};H();const J=(a,e)=>{F.value[a]=e},K=a(null),L=a(null),aa=a(null),ea=(a,e)=>{const t=[K,L,aa];e&&t[e].value.needConfirm&&(t[e].value.enterAndNext(),t[e].value.needConfirm=!1)},ta=a(null),la=()=>{ta.value&&ta.value.resetFields(),Y.value={authorityId:0,authorityName:"",parentId:0}},ra=()=>{la(),P.value=!1,T.value=!1},oa=()=>{if(Y.value.authorityId=Number(Y.value.authorityId),0===Y.value.authorityId)return n({type:"error",message:"角色id不能为0"}),!1;ta.value.validate((async a=>{if(a){switch(R.value){case"add":0===(await C(Y.value)).code&&(n({type:"success",message:"添加成功!"}),H(),ra());break;case"edit":0===(await N(Y.value)).code&&(n({type:"success",message:"添加成功!"}),H(),ra());break;case"copy":{const a={authority:{authorityId:0,authorityName:"",datauthorityId:[],parentId:0},oldAuthorityId:0};a.authority.authorityId=Y.value.authorityId,a.authority.authorityName=Y.value.authorityName,a.authority.parentId=Y.value.parentId,a.authority.dataAuthorityId=W.value.dataAuthorityId,a.oldAuthorityId=W.value.authorityId;0===(await _(a)).code&&(n({type:"success",message:"复制成功！"}),H())}}la(),P.value=!1}}))},ua=()=>{z.value=[{authorityId:0,authorityName:"根角色"}],ia(Q.value,z.value,!1)},ia=(a,e,t)=>{Y.value.authorityId=String(Y.value.authorityId),a&&a.forEach((a=>{if(a.children&&a.children.length){const l={authorityId:a.authorityId,authorityName:a.authorityName,disabled:t||a.authorityId===Y.value.authorityId,children:[]};ia(a.children,l.children,t||a.authorityId===Y.value.authorityId),e.push(l)}else{const l={authorityId:a.authorityId,authorityName:a.authorityName,disabled:t||a.authorityId===Y.value.authorityId};e.push(l)}}))};return(a,j)=>{const _=p,N=h,C=m,E=y,T=v,W=c,G=f,M=I,X=g,aa=b,ia=w;return e(),t("div",S,[l(A,{title:"注：右上角头像下拉可切换角色"}),r("div",U,[r("div",q,[l(_,{type:"primary",icon:"plus",onClick:j[0]||(j[0]=a=>{return e=0,la(),O.value="新增角色",R.value="add",Y.value.parentId=e,ua(),void(P.value=!0);var e})},{default:o((()=>[u("新增角色")])),_:1})]),l(C,{data:Q.value,"tree-props":{children:"children",hasChildren:"hasChildren"},"row-key":"authorityId",style:{width:"100%"}},{default:o((()=>[l(N,{label:"角色ID","min-width":"180",prop:"authorityId"}),l(N,{align:"left",label:"角色名称","min-width":"180",prop:"authorityName"}),l(N,{align:"left",label:"操作",width:"460"},{default:o((a=>[l(_,{icon:"setting",type:"primary",link:"",onClick:e=>{return t=a.row,B.value=!0,void(F.value=t);var t}},{default:o((()=>[u("设置权限")])),_:2},1032,["onClick"]),l(_,{icon:"edit",type:"primary",link:"",onClick:e=>(a=>{ua(),O.value="编辑角色",R.value="edit";for(const e in Y.value)Y.value[e]=a[e];ua(),P.value=!0})(a.row)},{default:o((()=>[u("编辑")])),_:2},1032,["onClick"]),l(_,{icon:"delete",type:"primary",link:"",onClick:e=>{return t=a.row,void s.confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await k({authorityId:t.authorityId})).code&&(n({type:"success",message:"删除成功!"}),1===Q.value.length&&$.value>1&&$.value--,H())})).catch((()=>{n({type:"info",message:"已取消删除"})}));var t}},{default:o((()=>[u("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),l(M,{modelValue:P.value,"onUpdate:modelValue":j[4]||(j[4]=a=>P.value=a),title:O.value},{footer:o((()=>[r("div",D,[l(_,{onClick:ra},{default:o((()=>[u("取 消")])),_:1}),l(_,{type:"primary",onClick:oa},{default:o((()=>[u("确 定")])),_:1})])])),default:o((()=>[l(G,{ref_key:"authorityForm",ref:ta,model:Y.value,rules:Z.value,"label-width":"80px"},{default:o((()=>[l(T,{label:"父级角色",prop:"parentId"},{default:o((()=>[l(E,{modelValue:Y.value.parentId,"onUpdate:modelValue":j[1]||(j[1]=a=>Y.value.parentId=a),style:{width:"100%"},disabled:"add"===R.value,options:z.value,props:{checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])])),_:1}),l(T,{label:"角色ID",prop:"authorityId"},{default:o((()=>[l(W,{modelValue:Y.value.authorityId,"onUpdate:modelValue":j[2]||(j[2]=a=>Y.value.authorityId=a),disabled:"edit"===R.value,autocomplete:"off"},null,8,["modelValue","disabled"])])),_:1}),l(T,{label:"角色姓名",prop:"authorityName"},{default:o((()=>[l(W,{modelValue:Y.value.authorityName,"onUpdate:modelValue":j[3]||(j[3]=a=>Y.value.authorityName=a),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"]),B.value?(e(),i(ia,{key:0,modelValue:B.value,"onUpdate:modelValue":j[5]||(j[5]=a=>B.value=a),"custom-class":"auth-drawer","with-header":!1,size:"40%",title:"角色配置"},{default:o((()=>[l(aa,{"before-leave":ea,type:"border-card"},{default:o((()=>[l(X,{label:"角色菜单"},{default:o((()=>[l(V,{ref_key:"menus",ref:K,row:F.value,onChangeRow:J},null,8,["row"])])),_:1}),l(X,{label:"角色api"},{default:o((()=>[l(x,{ref_key:"apis",ref:L,row:F.value,onChangeRow:J},null,8,["row"])])),_:1})])),_:1})])),_:1},8,["modelValue"])):d("",!0)])}}});export{z as default};
