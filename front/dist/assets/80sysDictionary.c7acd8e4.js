/*! 
 Build based on gin-vue-admin 
 Time : 1684988314000 */
import{u as e,a,o as l,d as t,f as u,e as o,w as s,k as i,t as r,X as d,m as n,n as p,q as c,av as m,aw as v,s as f,E as y,Z as g,ax as b,$ as w,a0 as V,aF as h,a3 as _}from"./80index.e27f11c9.js";import"./80dialog.4ed993c7.js";import"./80overlay.4ed993c7.js";import"./80switch.4ed993c7.js";import"./80pagination.4ed993c7.js";import"./80input.4ed993c7.js";import"./80tag.4ed993c7.js";import"./80select.4ed993c7.js";import"./80scrollbar.4ed993c7.js";import"./80popper.4ed993c7.js";import"./80table-column.4ed993c7.js";import"./80checkbox.4ed993c7.js";import"./80tooltip.4ed993c7.js";import"./80popover.4ed993c7.js";import"./80form-item.4ed993c7.js";import"./80button.4ed993c7.js";import{f as k,a as j,g as C,b as x,d as U,c as D,u as z}from"./80format.0cfe4ec1.js";import{W as I}from"./80warningBar.91a037dc.js";import"./80icon.4ed993c7.js";import"./80_plugin-vue_export-helper.1b428a4d.js";const q={class:"gva-search-box"},S={class:"gva-table-box"},E={class:"gva-btn-list"},F=o("p",null,"确定要删除吗？",-1),O={style:{"text-align":"right","margin-top":"8px"}},W={class:"gva-pagination"},X={class:"dialog-footer"},A={name:"SysDictionary"},B=Object.assign(A,{setup(A){const B=e(),G=a({name:null,type:null,status:!0,desc:null}),L=a({name:[{required:!0,message:"请输入字典名（中）",trigger:"blur"}],type:[{required:!0,message:"请输入字典名（英）",trigger:"blur"}],desc:[{required:!0,message:"请输入描述",trigger:"blur"}]}),M=a(1),N=a(0),P=a(10),Q=a([]),R=a({}),T=()=>{R.value={}},Y=()=>{M.value=1,P.value=10,""===R.value.status&&(R.value.status=null),H()},Z=e=>{P.value=e,H()},$=e=>{M.value=e,H()},H=async()=>{const e=await C({page:M.value,pageSize:P.value,...R.value});0===e.code&&(Q.value=e.data.list,N.value=e.data.total,M.value=e.data.page,P.value=e.data.pageSize)};H();const J=a(!1),K=a(""),ee=()=>{J.value=!1,G.value={name:null,type:null,status:!0,desc:null}},ae=a(null),le=async()=>{ae.value.validate((async e=>{if(!e)return;let a;switch(K.value){case"create":default:a=await D(G.value);break;case"update":a=await z(G.value)}0===a.code&&(n.success("操作成功"),ee(),H())}))},te=()=>{K.value="create",J.value=!0};return(e,a)=>{const C=p,D=c,z=m,A=v,ue=f,oe=y,se=g,ie=b,re=w,de=V,ne=h,pe=_;return l(),t("div",null,[u(I,{title:"获取字典且缓存方法已在前端utils/dictionary 已经封装完成 不必自己书写 使用方法查看文件内注释"}),o("div",q,[u(oe,{inline:!0,model:R.value},{default:s((()=>[u(D,{label:"字典名（中）"},{default:s((()=>[u(C,{modelValue:R.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>R.value.name=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),u(D,{label:"字典名（英）"},{default:s((()=>[u(C,{modelValue:R.value.type,"onUpdate:modelValue":a[1]||(a[1]=e=>R.value.type=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),u(D,{label:"状态",prop:"status"},{default:s((()=>[u(A,{modelValue:R.value.status,"onUpdate:modelValue":a[2]||(a[2]=e=>R.value.status=e),clear:"",placeholder:"请选择"},{default:s((()=>[u(z,{key:"true",label:"是",value:"true"}),u(z,{key:"false",label:"否",value:"false"})])),_:1},8,["modelValue"])])),_:1}),u(D,{label:"描述"},{default:s((()=>[u(C,{modelValue:R.value.desc,"onUpdate:modelValue":a[3]||(a[3]=e=>R.value.desc=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),u(D,null,{default:s((()=>[u(ue,{type:"primary",icon:"search",onClick:Y},{default:s((()=>[i("查询")])),_:1}),u(ue,{icon:"refresh",onClick:T},{default:s((()=>[i("重置")])),_:1})])),_:1})])),_:1},8,["model"])]),o("div",S,[o("div",E,[u(ue,{type:"primary",icon:"plus",onClick:te},{default:s((()=>[i("新增")])),_:1})]),u(re,{ref:"multipleTable",data:Q.value,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID"},{default:s((()=>[u(se,{type:"selection",width:"55"}),u(se,{align:"left",label:"日期",width:"180"},{default:s((e=>[i(r(d(k)(e.row.CreatedAt)),1)])),_:1}),u(se,{align:"left",label:"字典名（中）",prop:"name",width:"160"}),u(se,{align:"left",label:"字典名（英）",prop:"type",width:"120"}),u(se,{align:"left",label:"状态",prop:"status",width:"120"},{default:s((e=>[i(r(d(j)(e.row.status)),1)])),_:1}),u(se,{align:"left",label:"描述",prop:"desc",width:"280"}),u(se,{align:"left",label:"按钮组"},{default:s((e=>[u(ue,{icon:"document",type:"primary",link:"",onClick:a=>{return l=e.row,void B.push({name:"dictionaryDetail",params:{id:l.ID}});var l}},{default:s((()=>[i("详情")])),_:2},1032,["onClick"]),u(ue,{icon:"edit",type:"primary",link:"",onClick:a=>(async e=>{const a=await x({ID:e.ID,status:e.status});K.value="update",0===a.code&&(G.value=a.data.resysDictionary,J.value=!0)})(e.row)},{default:s((()=>[i("变更")])),_:2},1032,["onClick"]),u(ie,{modelValue:e.row.visible,"onUpdate:modelValue":a=>e.row.visible=a,placement:"top",width:"160"},{reference:s((()=>[u(ue,{type:"primary",link:"",icon:"delete",style:{"margin-left":"10px"},onClick:a=>e.row.visible=!0},{default:s((()=>[i("删除")])),_:2},1032,["onClick"])])),default:s((()=>[F,o("div",O,[u(ue,{type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:s((()=>[i("取消")])),_:2},1032,["onClick"]),u(ue,{type:"primary",onClick:a=>(async e=>{e.visible=!1,0===(await U({ID:e.ID})).code&&(n({type:"success",message:"删除成功"}),1===Q.value.length&&M.value>1&&M.value--,H())})(e.row)},{default:s((()=>[i("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"]),o("div",W,[u(de,{"current-page":M.value,"page-size":P.value,"page-sizes":[10,30,50,100],total:N.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:$,onSizeChange:Z},null,8,["current-page","page-size","total"])])]),u(pe,{modelValue:J.value,"onUpdate:modelValue":a[8]||(a[8]=e=>J.value=e),"before-close":ee,title:"弹窗操作"},{footer:s((()=>[o("div",X,[u(ue,{onClick:ee},{default:s((()=>[i("取 消")])),_:1}),u(ue,{type:"primary",onClick:le},{default:s((()=>[i("确 定")])),_:1})])])),default:s((()=>[u(oe,{ref_key:"dialogForm",ref:ae,model:G.value,rules:L.value,"label-width":"110px"},{default:s((()=>[u(D,{label:"字典名（中）",prop:"name"},{default:s((()=>[u(C,{modelValue:G.value.name,"onUpdate:modelValue":a[4]||(a[4]=e=>G.value.name=e),placeholder:"请输入字典名（中）",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),u(D,{label:"字典名（英）",prop:"type"},{default:s((()=>[u(C,{modelValue:G.value.type,"onUpdate:modelValue":a[5]||(a[5]=e=>G.value.type=e),placeholder:"请输入字典名（英）",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),u(D,{label:"状态",prop:"status",required:""},{default:s((()=>[u(ne,{modelValue:G.value.status,"onUpdate:modelValue":a[6]||(a[6]=e=>G.value.status=e),"active-text":"开启","inactive-text":"停用"},null,8,["modelValue"])])),_:1}),u(D,{label:"描述",prop:"desc"},{default:s((()=>[u(C,{modelValue:G.value.desc,"onUpdate:modelValue":a[7]||(a[7]=e=>G.value.desc=e),placeholder:"请输入描述",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}});export{B as default};
