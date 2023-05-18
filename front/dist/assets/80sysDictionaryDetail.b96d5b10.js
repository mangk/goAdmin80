/*! 
 Build based on gin-vue-admin 
 Time : 1684380092000 */
import{O as e,a4 as a,aF as l,a as t,o as s,d as u,e as i,f as o,w as r,k as d,t as n,X as p,m as c,n as m,q as v,au as y,av as f,s as b,E as g,Z as D,aw as h,$ as w,a0 as V,aG as _,aE as k,a3 as j}from"./80index.d39802eb.js";import"./80dialog.4ed993c7.js";import"./80overlay.4ed993c7.js";import"./80switch.4ed993c7.js";import"./80input.4ed993c7.js";import"./80pagination.4ed993c7.js";import"./80tag.4ed993c7.js";import"./80select.4ed993c7.js";import"./80scrollbar.4ed993c7.js";import"./80popper.4ed993c7.js";import"./80table-column.4ed993c7.js";import"./80checkbox.4ed993c7.js";import"./80tooltip.4ed993c7.js";import"./80popover.4ed993c7.js";import"./80form-item.4ed993c7.js";import"./80button.4ed993c7.js";import{f as C,a as x}from"./80format.75754248.js";const S=a=>e({url:"/sysDictionaryDetail/createSysDictionaryDetail",method:"post",data:a}),I={class:"gva-search-box"},U={class:"gva-table-box"},z={class:"gva-btn-list"},q=i("p",null,"确定要删除吗？",-1),N={style:{"text-align":"right","margin-top":"8px"}},E={class:"gva-pagination"},M={class:"dialog-footer"},O={name:"SysDictionaryDetail"},F=Object.assign(O,{setup(O){const F=a();l((e=>{"dictionaryDetail"===e.name&&(R.value.sysDictionaryID=e.params.id,B())}));const L=t({label:null,value:null,status:!0,sort:null}),X=t({label:[{required:!0,message:"请输入展示值",trigger:"blur"}],value:[{required:!0,message:"请输入字典值",trigger:"blur"}],sort:[{required:!0,message:"排序标记",trigger:"blur"}]}),A=t(1),G=t(0),P=t(10),Q=t([]),R=t({sysDictionaryID:Number(F.params.id)}),T=()=>{R.value={sysDictionaryID:Number(F.params.id)}},Y=()=>{A.value=1,P.value=10,""===R.value.status&&(R.value.status=null),B()},Z=e=>{P.value=e,B()},$=e=>{A.value=e,B()},B=async()=>{const a=await(l={page:A.value,pageSize:P.value,...R.value},e({url:"/sysDictionaryDetail/getSysDictionaryDetailList",method:"get",params:l}));var l;0===a.code&&(Q.value=a.data.list,G.value=a.data.total,A.value=a.data.page,P.value=a.data.pageSize)};B();const H=t(""),J=t(!1),K=async a=>{const l=await(t={ID:a.ID},e({url:"/sysDictionaryDetail/findSysDictionaryDetail",method:"get",params:t}));var t;H.value="update",0===l.code&&(L.value=l.data.reSysDictionaryDetail,J.value=!0)},W=()=>{J.value=!1,L.value={label:null,value:null,status:!0,sort:null,sysDictionaryID:""}},ee=async a=>{a.visible=!1;var l;0===(await(l={ID:a.ID},e({url:"/sysDictionaryDetail/deleteSysDictionaryDetail",method:"delete",data:l}))).code&&(c({type:"success",message:"删除成功"}),1===Q.value.length&&A.value>1&&A.value--,B())},ae=t(null),le=async()=>{L.value.sysDictionaryID=Number(F.params.id),ae.value.validate((async a=>{if(!a)return;let l;switch(H.value){case"create":default:l=await S(L.value);break;case"update":l=await(t=L.value,e({url:"/sysDictionaryDetail/updateSysDictionaryDetail",method:"put",data:t}))}var t;0===l.code&&(c({type:"success",message:"创建/更改成功"}),W(),B())}))},te=()=>{H.value="create",J.value=!0};return(e,a)=>{const l=m,t=v,c=y,S=f,O=b,F=g,B=D,H=h,se=w,ue=V,ie=_,oe=k,re=j;return s(),u("div",null,[i("div",I,[o(F,{inline:!0,model:R.value},{default:r((()=>[o(t,{label:"展示值"},{default:r((()=>[o(l,{modelValue:R.value.label,"onUpdate:modelValue":a[0]||(a[0]=e=>R.value.label=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),o(t,{label:"字典值"},{default:r((()=>[o(l,{modelValue:R.value.value,"onUpdate:modelValue":a[1]||(a[1]=e=>R.value.value=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),o(t,{label:"启用状态",prop:"status"},{default:r((()=>[o(S,{modelValue:R.value.status,"onUpdate:modelValue":a[2]||(a[2]=e=>R.value.status=e),placeholder:"请选择"},{default:r((()=>[o(c,{key:"true",label:"是",value:"true"}),o(c,{key:"false",label:"否",value:"false"})])),_:1},8,["modelValue"])])),_:1}),o(t,null,{default:r((()=>[o(O,{type:"primary",icon:"search",onClick:Y},{default:r((()=>[d("查询")])),_:1}),o(O,{icon:"refresh",onClick:T},{default:r((()=>[d("重置")])),_:1})])),_:1})])),_:1},8,["model"])]),i("div",U,[i("div",z,[o(O,{type:"primary",icon:"plus",onClick:te},{default:r((()=>[d("新增字典项")])),_:1})]),o(se,{ref:"multipleTable",data:Q.value,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID"},{default:r((()=>[o(B,{type:"selection",width:"55"}),o(B,{align:"left",label:"日期",width:"180"},{default:r((e=>[d(n(p(C)(e.row.CreatedAt)),1)])),_:1}),o(B,{align:"left",label:"展示值",prop:"label",width:"120"}),o(B,{align:"left",label:"字典值",prop:"value",width:"120"}),o(B,{align:"left",label:"启用状态",prop:"status",width:"120"},{default:r((e=>[d(n(p(x)(e.row.status)),1)])),_:1}),o(B,{align:"left",label:"排序标记",prop:"sort",width:"120"}),o(B,{align:"left",label:"按钮组"},{default:r((e=>[o(O,{type:"primary",link:"",icon:"edit",onClick:a=>K(e.row)},{default:r((()=>[d("变更")])),_:2},1032,["onClick"]),o(H,{modelValue:e.row.visible,"onUpdate:modelValue":a=>e.row.visible=a,placement:"top",width:"160"},{reference:r((()=>[o(O,{type:"primary",link:"",icon:"delete",onClick:a=>e.row.visible=!0},{default:r((()=>[d("删除")])),_:2},1032,["onClick"])])),default:r((()=>[q,i("div",N,[o(O,{type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:r((()=>[d("取消")])),_:2},1032,["onClick"]),o(O,{type:"primary",onClick:a=>ee(e.row)},{default:r((()=>[d("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"]),i("div",E,[o(ue,{"current-page":A.value,"page-size":P.value,"page-sizes":[10,30,50,100],total:G.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:$,onSizeChange:Z},null,8,["current-page","page-size","total"])])]),o(re,{modelValue:J.value,"onUpdate:modelValue":a[7]||(a[7]=e=>J.value=e),"before-close":W,title:"弹窗操作"},{footer:r((()=>[i("div",M,[o(O,{onClick:W},{default:r((()=>[d("取 消")])),_:1}),o(O,{type:"primary",onClick:le},{default:r((()=>[d("确 定")])),_:1})])])),default:r((()=>[o(F,{ref_key:"dialogForm",ref:ae,model:L.value,rules:X.value,"label-width":"110px"},{default:r((()=>[o(t,{label:"展示值",prop:"label"},{default:r((()=>[o(l,{modelValue:L.value.label,"onUpdate:modelValue":a[3]||(a[3]=e=>L.value.label=e),placeholder:"请输入展示值",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),o(t,{label:"字典值",prop:"value"},{default:r((()=>[o(ie,{modelValue:L.value.value,"onUpdate:modelValue":a[4]||(a[4]=e=>L.value.value=e),modelModifiers:{number:!0},"step-strictly":"",step:1,placeholder:"请输入字典值",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),o(t,{label:"启用状态",prop:"status",required:""},{default:r((()=>[o(oe,{modelValue:L.value.status,"onUpdate:modelValue":a[5]||(a[5]=e=>L.value.status=e),"active-text":"开启","inactive-text":"停用"},null,8,["modelValue"])])),_:1}),o(t,{label:"排序标记",prop:"sort"},{default:r((()=>[o(ie,{modelValue:L.value.sort,"onUpdate:modelValue":a[6]||(a[6]=e=>L.value.sort=e),modelModifiers:{number:!0},placeholder:"排序标记"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}});export{F as default};
