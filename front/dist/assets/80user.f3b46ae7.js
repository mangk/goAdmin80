/*! 
 Build based on gin-vue-admin 
 Time : 1725855198000 */
import{a as e,I as a,o as l,d as t,e as i,g as o,w as r,k as s,j as u,f as d,aP as n,S as p,aQ as m,m as c,aR as v,aS as g,aT as h,y,aU as b,s as f,U as w,aw as I,aD as _,av as V,W as k,X as j,n as N,q as C,E as x,$ as U}from"./80index.08a011ac.js";import"./80dialog.4ed993c7.js";import"./80overlay.4ed993c7.js";import"./80form-item.4ed993c7.js";import"./80input.4ed993c7.js";import"./80pagination.4ed993c7.js";import"./80tag.4ed993c7.js";import"./80select.4ed993c7.js";import"./80scrollbar.4ed993c7.js";import"./80popper.4ed993c7.js";import"./80table-column.4ed993c7.js";import"./80checkbox.4ed993c7.js";import"./80tooltip.4ed993c7.js";import"./80popover.4ed993c7.js";import"./80switch.4ed993c7.js";import"./80radio.4ed993c7.js";import"./80button.4ed993c7.js";import{g as S}from"./80authority.511a466e.js";import{C as z}from"./80index.0f82f249.js";import{_ as D}from"./80index.1e0785a5.js";import"./80icon.4ed993c7.js";import"./80warningBar.vue_vue_type_style_index_0_scoped_a7c6b110_lang.4ed993c7.js";import"./80_plugin-vue_export-helper.1b428a4d.js";import"./80drawer.4ed993c7.js";import"./80image.e67111c2.js";import"./80progress.4ed993c7.js";import"./80warningBar.79e30181.js";const O={class:"gva-table-box"},T={class:"gva-btn-list"},q=i("p",null,"确定要删除此用户吗",-1),J={style:{"text-align":"right","margin-top":"8px"}},B={class:"gva-pagination"},E={style:{height:"60vh",overflow:"auto",padding:"0 12px"}},P=["src"],R={key:1,class:"header-img-box"},$={class:"dialog-footer"},F={name:"User"},Q=Object.assign(F,{setup(F){const Q=e("/_sys/"),W=(e,a)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const l={authorityId:e.authorityId,authorityName:e.authorityName,children:[]};W(e.children,l.children),a.push(l)}else{const l={authorityId:e.authorityId,authorityName:e.authorityName};a.push(l)}}))},X=e(1),Z=e(0),A=e(10),G=e([]),L=e=>{A.value=e,H()},M=e=>{X.value=e,H()},H=async()=>{const e=await n({page:X.value,pageSize:A.value});0===e.code&&(G.value=e.data.list,Z.value=e.data.total,X.value=e.data.page,A.value=e.data.pageSize)};a((()=>G.value),(()=>{K()}));(async()=>{H();const e=await S({page:1,pageSize:999});le(e.data.list)})();const K=()=>{G.value&&G.value.forEach((e=>{e.authorityIds=e.authorities&&e.authorities.map((e=>e.authorityId))}))},Y=e(null),ee=()=>{Y.value.open()},ae=e([]),le=e=>{ae.value=[],W(e,ae.value)},te=e({username:"",password:"",nickName:"",headerImg:"",authorityId:"",authorityIds:[],enable:1}),ie=e({userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:4,message:"最低5位字符",trigger:"blur"}],password:[{required:!0,message:"请输入用户密码",trigger:"blur"},{min:4,message:"最低6位字符",trigger:"blur"}],nickName:[{required:!0,message:"请输入用户昵称",trigger:"blur"}],phone:[{pattern:/^1([38][0-9]|4[014-9]|[59][0-35-9]|6[2567]|7[0-8])\d{8}$/,message:"请输入合法手机号",trigger:"blur"}],email:[{pattern:/^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g,message:"请输入正确的邮箱",trigger:"blur"}],authorityId:[{required:!0,message:"请选择用户角色",trigger:"blur"}]}),oe=e(null),re=async()=>{te.value.authorityId=te.value.authorityIds[0],oe.value.validate((async e=>{if(e){const e={...te.value};if("add"===de.value){0===(await g(e)).code&&(c({type:"success",message:"创建成功"}),await H(),ue())}if("edit"===de.value){0===(await h(e)).code&&(c({type:"success",message:"编辑成功"}),await H(),ue())}}}))},se=e(!1),ue=()=>{oe.value.resetFields(),te.value.headerImg="",te.value.authorityIds=[],se.value=!1},de=e("add"),ne=()=>{de.value="add",se.value=!0},pe={},me=async(e,a,l)=>{if(a)return void(l||(pe[e.ID]=[...e.authorityIds]));await y();0===(await b({ID:e.id,authorityIds:e.authorityIds})).code?c({type:"success",message:"角色设置成功"}):l?e.authorityIds=[l,...e.authorityIds]:(e.authorityIds=[...pe[e.ID]],delete pe[e.ID])};return(e,a)=>{const n=f,g=w,b=I,S=_,F=V,W=k,K=j,le=N,pe=C,ce=x,ve=U;return l(),t("div",null,[i("div",O,[i("div",T,[o(n,{type:"primary",icon:"plus",onClick:ne},{default:r((()=>[s("新增用户")])),_:1})]),o(W,{data:G.value,"row-key":"ID"},{default:r((()=>[o(g,{align:"left",label:"头像","min-width":"75"},{default:r((e=>[o(z,{style:{"margin-top":"8px"},"pic-src":e.row.headerImg},null,8,["pic-src"])])),_:1}),o(g,{align:"left",label:"ID","min-width":"50",prop:"id"}),o(g,{align:"left",label:"用户名","min-width":"150",prop:"userName"}),o(g,{align:"left",label:"昵称","min-width":"150",prop:"nickName"}),o(g,{align:"left",label:"手机号","min-width":"180",prop:"phone"}),o(g,{align:"left",label:"邮箱","min-width":"180",prop:"email"}),o(g,{align:"left",label:"用户角色","min-width":"200"},{default:r((e=>[o(b,{modelValue:e.row.authorityIds,"onUpdate:modelValue":a=>e.row.authorityIds=a,options:ae.value,"show-all-levels":!1,"collapse-tags":"",props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1,onVisibleChange:a=>{me(e.row,a,0)},onRemoveTag:a=>{me(e.row,!1,a)}},null,8,["modelValue","onUpdate:modelValue","options","onVisibleChange","onRemoveTag"])])),_:1}),o(g,{align:"left",label:"启用","min-width":"150"},{default:r((e=>[o(S,{modelValue:e.row.enable,"onUpdate:modelValue":a=>e.row.enable=a,"inline-prompt":"","active-value":1,"inactive-value":2,onChange:()=>{(async e=>{te.value=JSON.parse(JSON.stringify(e)),await y();const a={...te.value};0===(await h(a)).code&&(c({type:"success",message:(2===a.enable?"禁用":"启用")+"成功"}),await H(),te.value.headerImg="",te.value.authorityIds=[])})(e.row)}},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),o(g,{label:"操作","min-width":"250",fixed:"right"},{default:r((e=>[o(F,{modelValue:e.row.visible,"onUpdate:modelValue":a=>e.row.visible=a,placement:"top",width:"160"},{reference:r((()=>[o(n,{type:"primary",link:"",icon:"delete"},{default:r((()=>[s("删除")])),_:1})])),default:r((()=>[q,i("div",J,[o(n,{type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:r((()=>[s("取消")])),_:2},1032,["onClick"]),o(n,{type:"primary",onClick:a=>(async e=>{0===(await v({id:e.id})).code&&(c.success("删除成功"),e.visible=!1,await H())})(e.row)},{default:r((()=>[s("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"]),o(n,{type:"primary",link:"",icon:"edit",onClick:a=>{return l=e.row,de.value="edit",te.value=JSON.parse(JSON.stringify(l)),void(se.value=!0);var l}},{default:r((()=>[s("编辑")])),_:2},1032,["onClick"]),o(n,{type:"primary",link:"",icon:"magic-stick",onClick:a=>{return l=e.row,void p.confirm("是否将此用户密码重置为123456?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{const e=await m({ID:l.ID});0===e.code?c({type:"success",message:e.msg}):c({type:"error",message:e.msg})}));var l}},{default:r((()=>[s("重置密码")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),i("div",B,[o(K,{"current-page":X.value,"page-size":A.value,"page-sizes":[10,30,50,100],total:Z.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:M,onSizeChange:L},null,8,["current-page","page-size","total"])])]),o(ve,{modelValue:se.value,"onUpdate:modelValue":a[7]||(a[7]=e=>se.value=e),"custom-class":"user-dialog",title:"用户","show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:r((()=>[i("div",$,[o(n,{onClick:ue},{default:r((()=>[s("取 消")])),_:1}),o(n,{type:"primary",onClick:re},{default:r((()=>[s("确 定")])),_:1})])])),default:r((()=>[i("div",E,[o(ce,{ref_key:"userForm",ref:oe,rules:ie.value,model:te.value,"label-width":"80px"},{default:r((()=>["add"===de.value?(l(),u(pe,{key:0,label:"用户名",prop:"userName"},{default:r((()=>[o(le,{modelValue:te.value.userName,"onUpdate:modelValue":a[0]||(a[0]=e=>te.value.userName=e)},null,8,["modelValue"])])),_:1})):d("",!0),"add"===de.value?(l(),u(pe,{key:1,label:"密码",prop:"password"},{default:r((()=>[o(le,{modelValue:te.value.password,"onUpdate:modelValue":a[1]||(a[1]=e=>te.value.password=e)},null,8,["modelValue"])])),_:1})):d("",!0),o(pe,{label:"昵称",prop:"nickName"},{default:r((()=>[o(le,{modelValue:te.value.nickName,"onUpdate:modelValue":a[2]||(a[2]=e=>te.value.nickName=e)},null,8,["modelValue"])])),_:1}),o(pe,{label:"手机号",prop:"phone"},{default:r((()=>[o(le,{modelValue:te.value.phone,"onUpdate:modelValue":a[3]||(a[3]=e=>te.value.phone=e)},null,8,["modelValue"])])),_:1}),o(pe,{label:"邮箱",prop:"email"},{default:r((()=>[o(le,{modelValue:te.value.email,"onUpdate:modelValue":a[4]||(a[4]=e=>te.value.email=e)},null,8,["modelValue"])])),_:1}),o(pe,{label:"用户角色",prop:"authorityId"},{default:r((()=>[o(b,{modelValue:te.value.authorityIds,"onUpdate:modelValue":a[5]||(a[5]=e=>te.value.authorityIds=e),style:{width:"100%"},options:ae.value,"show-all-levels":!1,props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1},null,8,["modelValue","options"])])),_:1}),o(pe,{label:"启用",prop:"disabled"},{default:r((()=>[o(S,{modelValue:te.value.enable,"onUpdate:modelValue":a[6]||(a[6]=e=>te.value.enable=e),"inline-prompt":"","active-value":1,"inactive-value":2},null,8,["modelValue"])])),_:1}),o(pe,{label:"头像","label-width":"80px"},{default:r((()=>[i("div",{style:{display:"inline-block"},onClick:ee},[te.value.headerImg?(l(),t("img",{key:0,alt:"头像",class:"header-img-box",src:te.value.headerImg&&"http"!==te.value.headerImg.slice(0,4)?Q.value+te.value.headerImg:te.value.headerImg},null,8,P)):(l(),t("div",R,"从媒体库选择"))])])),_:1})])),_:1},8,["rules","model"])])])),_:1},8,["modelValue"]),o(D,{ref_key:"chooseImg",ref:Y,target:te.value,"target-key":"headerImg"},null,8,["target"])])}}});export{Q as default};