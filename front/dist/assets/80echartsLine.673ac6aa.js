/*! 
 Build based on gin-vue-admin 
 Time : 1684136243000 */
import{G as a,r as s,H as e,I as t,J as i,o,c as l,d as r,K as d,p as n,k as u}from"./80index.758a8ed3.js";import{_ as p}from"./80_plugin-vue_export-helper.1b428a4d.js";const c={class:"dashboard-line-box"},h=(a=>(n("data-v-fae10162"),a=a(),u(),a))((()=>r("div",{class:"dashboard-line-title"}," 访问趋势 ",-1))),v=p({__name:"echartsLine",setup(n){for(var u=[],p=1;p<13;p++)u.push(`${p}月`);var v=[220,182,191,234,290,330,310,123,442,321,90,149];for(p=0;p<v.length;p++);const x=a(null),f=s(null),m=()=>{x.value.setOption({grid:{left:"40",right:"20",top:"40",bottom:"20"},xAxis:{data:u,axisTick:{show:!1},axisLine:{show:!1},z:10},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#999"}}},dataZoom:[{type:"inside"}],series:[{type:"bar",barWidth:"40%",itemStyle:{borderRadius:[5,5,0,0],color:"#188df0"},emphasis:{itemStyle:{color:"#188df0"}},data:v}]})};return e((async()=>{await t(),x.value=d(f.value),m()})),i((()=>{x.value&&(x.value.dispose(),x.value=null)})),(a,s)=>(o(),l("div",c,[h,r("div",{ref_key:"echart",ref:f,class:"dashboard-line"},null,512)]))}},[["__scopeId","data-v-fae10162"]]);export{v as default};
