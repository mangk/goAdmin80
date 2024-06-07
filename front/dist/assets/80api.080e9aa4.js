/*! 
 Build based on gin-vue-admin 
 Time : 1717748743000 */
import{a as e,o as a,d as l,e as t,g as o,w as u,F as i,x as s,j as d,k as p,t as r,m as n,X as m,n as c,q as v,au as g,av as f,s as b,E as h,aw as _,Y as y,_ as w,$ as V,a3 as j,p as k,l as C}from"./80index.89ba3368.js";import"./80dialog.4ed993c7.js";import"./80overlay.4ed993c7.js";import"./80pagination.4ed993c7.js";import"./80input.4ed993c7.js";import"./80tag.4ed993c7.js";import"./80select.4ed993c7.js";import"./80scrollbar.4ed993c7.js";import"./80popper.4ed993c7.js";import"./80table-column.4ed993c7.js";import"./80checkbox.4ed993c7.js";import"./80tooltip.4ed993c7.js";import"./80popover.4ed993c7.js";import"./80form-item.4ed993c7.js";import"./80button.4ed993c7.js";import{g as x,d as A,a as G,u as I,c as U,b as P}from"./80api.635d69e1.js";import{W as z}from"./80warningBar.e2ffad56.js";import{_ as S}from"./80_plugin-vue_export-helper.1b428a4d.js";import"./80icon.4ed993c7.js";import"./80warningBar.vue_vue_type_style_index_0_scoped_a7c6b110_lang.4ed993c7.js";const $={class:"gva-search-box"},E={class:"gva-table-box"},T={class:"gva-btn-list"},q=(e=>(k("data-v-b646b31f"),e=e(),C(),e))((()=>t("p",null,"确定要删除吗？",-1))),D={style:{"text-align":"right","margin-top":"8px"}},B={class:"gva-pagination"},F={class:"dialog-footer"},L={name:"Api"},O=S(Object.assign(L,{setup(k){const C=e=>{const a=O.value.filter((a=>a.value===e))[0];return a&&`${a.label}`},S=e([]),L=e({path:"",apiGroup:"",method:"",description:""}),O=e([{value:"POST",label:"创建",type:"success"},{value:"GET",label:"查看",type:""},{value:"PATCH",label:"更新",type:"warning"},{value:"DELETE",label:"删除",type:"danger"}]),W=e(""),X=e({path:[{required:!0,message:"请输入api路径",trigger:"blur"}],apiGroup:[{required:!0,message:"请输入组名称",trigger:"blur"}],method:[{required:!0,message:"请选择请求方式",trigger:"blur"}],description:[{required:!0,message:"请输入api介绍",trigger:"blur"}]}),Y=e(1),Z=e(0),H=e(10),K=e([]),M=e({}),N=()=>{M.value={}},Q=()=>{Y.value=1,H.value=10,ae()},R=e=>{H.value=e,ae()},J=e=>{Y.value=e,ae()},ee=({prop:e,order:a})=>{var l;e&&("ID"===e&&(e="id"),M.value.orderKey="ID"===(l=e)?"ID":l.replace(/([A-Z])/g,"_$1").toLowerCase(),M.value.desc="descending"===a),ae()},ae=async()=>{const e=await x({page:Y.value,pageSize:H.value,...M.value});0===e.code&&(K.value=e.data.list,Z.value=e.data.total,Y.value=e.data.page,H.value=e.data.pageSize)};ae();const le=e=>{S.value=e},te=e(!1),oe=async()=>{const e=S.value.map((e=>e.id)),a=await A({ids:e});0===a.code&&(n({type:"success",message:a.msg}),K.value.length===e.length&&Y.value>1&&Y.value--,te.value=!1,ae())},ue=e(null),ie=e("新增Api"),se=e(!1),de=e=>{switch(e){case"addApi":ie.value="新增Api";break;case"edit":ie.value="编辑Api"}W.value=e,se.value=!0},pe=()=>{ue.value.resetFields(),L.value={path:"",apiGroup:"",method:"",description:""},se.value=!1},re=async()=>{ue.value.validate((async e=>{if(e)switch(W.value){case"addApi":0===(await U(L.value)).code&&n({type:"success",message:"添加成功",showClose:!0}),ae(),pe();break;case"edit":0===(await I(L.value)).code&&n({type:"success",message:"编辑成功",showClose:!0}),ae(),pe();break;default:n({type:"error",message:"未知操作",showClose:!0})}}))};return(e,k)=>{const x=c,A=v,I=g,U=f,W=b,ne=h,me=_,ce=y,ve=w,ge=V,fe=j;return a(),l("div",null,[t("div",$,[o(ne,{ref:"searchForm",inline:!0,model:M.value},{default:u((()=>[o(A,{label:"路径"},{default:u((()=>[o(x,{modelValue:M.value.path,"onUpdate:modelValue":k[0]||(k[0]=e=>M.value.path=e),placeholder:"路径"},null,8,["modelValue"])])),_:1}),o(A,{label:"描述"},{default:u((()=>[o(x,{modelValue:M.value.description,"onUpdate:modelValue":k[1]||(k[1]=e=>M.value.description=e),placeholder:"描述"},null,8,["modelValue"])])),_:1}),o(A,{label:"API组"},{default:u((()=>[o(x,{modelValue:M.value.apiGroup,"onUpdate:modelValue":k[2]||(k[2]=e=>M.value.apiGroup=e),placeholder:"api组"},null,8,["modelValue"])])),_:1}),o(A,{label:"请求"},{default:u((()=>[o(U,{modelValue:M.value.method,"onUpdate:modelValue":k[3]||(k[3]=e=>M.value.method=e),clearable:"",placeholder:"请选择"},{default:u((()=>[(a(!0),l(i,null,s(O.value,(e=>(a(),d(I,{key:e.value,label:`${e.label}(${e.value})`,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),o(A,null,{default:u((()=>[o(W,{type:"primary",icon:"search",onClick:Q},{default:u((()=>[p("查询")])),_:1}),o(W,{icon:"refresh",onClick:N},{default:u((()=>[p("重置")])),_:1})])),_:1})])),_:1},8,["model"])]),t("div",E,[t("div",T,[o(W,{type:"primary",icon:"plus",onClick:k[4]||(k[4]=e=>de("addApi"))},{default:u((()=>[p("新增")])),_:1}),o(me,{modelValue:te.value,"onUpdate:modelValue":k[7]||(k[7]=e=>te.value=e),placement:"top",width:"160"},{reference:u((()=>[o(W,{icon:"delete",disabled:!S.value.length,style:{"margin-left":"10px"},onClick:k[6]||(k[6]=e=>te.value=!0)},{default:u((()=>[p("删除")])),_:1},8,["disabled"])])),default:u((()=>[q,t("div",D,[o(W,{type:"primary",link:"",onClick:k[5]||(k[5]=e=>te.value=!1)},{default:u((()=>[p("取消")])),_:1}),o(W,{type:"primary",onClick:oe},{default:u((()=>[p("确定")])),_:1})])])),_:1},8,["modelValue"])]),o(ve,{data:K.value,onSortChange:ee,onSelectionChange:le},{default:u((()=>[o(ce,{type:"selection",width:"55"}),o(ce,{align:"left",label:"id","min-width":"60",prop:"id",sortable:"custom"}),o(ce,{align:"left",label:"API路径","min-width":"150",prop:"path",sortable:"custom"}),o(ce,{align:"left",label:"API分组","min-width":"150",prop:"apiGroup",sortable:"custom"}),o(ce,{align:"left",label:"API简介","min-width":"150",prop:"description",sortable:"custom"}),o(ce,{align:"left",label:"请求","min-width":"150",prop:"method",sortable:"custom"},{default:u((e=>[t("div",null,r(e.row.method)+" / "+r(C(e.row.method)),1)])),_:1}),o(ce,{align:"left",fixed:"right",label:"操作",width:"200"},{default:u((e=>[o(W,{icon:"edit",type:"primary",link:"",onClick:a=>(async e=>{const a=await G({id:e.id});L.value=a.data,de("edit")})(e.row)},{default:u((()=>[p("编辑")])),_:2},1032,["onClick"]),o(W,{icon:"delete",type:"primary",link:"",onClick:a=>(async e=>{m.confirm("此操作将永久删除所有角色下该api, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await P(e)).code&&(n({type:"success",message:"删除成功!"}),1===K.value.length&&Y.value>1&&Y.value--,ae())}))})(e.row)},{default:u((()=>[p("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),t("div",B,[o(ge,{"current-page":Y.value,"page-size":H.value,"page-sizes":[10,30,50,100],total:Z.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:J,onSizeChange:R},null,8,["current-page","page-size","total"])])]),o(fe,{modelValue:se.value,"onUpdate:modelValue":k[12]||(k[12]=e=>se.value=e),"before-close":pe,title:ie.value},{footer:u((()=>[t("div",F,[o(W,{onClick:pe},{default:u((()=>[p("取 消")])),_:1}),o(W,{type:"primary",onClick:re},{default:u((()=>[p("确 定")])),_:1})])])),default:u((()=>[o(z,{title:"新增API，需要在角色管理内配置权限才可使用"}),o(ne,{ref_key:"apiForm",ref:ue,model:L.value,rules:X.value,"label-width":"80px"},{default:u((()=>[o(A,{label:"路径",prop:"path"},{default:u((()=>[o(x,{modelValue:L.value.path,"onUpdate:modelValue":k[8]||(k[8]=e=>L.value.path=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),o(A,{label:"请求",prop:"method"},{default:u((()=>[o(U,{modelValue:L.value.method,"onUpdate:modelValue":k[9]||(k[9]=e=>L.value.method=e),placeholder:"请选择",style:{width:"100%"}},{default:u((()=>[(a(!0),l(i,null,s(O.value,(e=>(a(),d(I,{key:e.value,label:`${e.label}(${e.value})`,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),o(A,{label:"api分组",prop:"apiGroup"},{default:u((()=>[o(x,{modelValue:L.value.apiGroup,"onUpdate:modelValue":k[10]||(k[10]=e=>L.value.apiGroup=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),o(A,{label:"api简介",prop:"description"},{default:u((()=>[o(x,{modelValue:L.value.description,"onUpdate:modelValue":k[11]||(k[11]=e=>L.value.description=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-b646b31f"]]);export{O as default};
