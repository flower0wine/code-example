"use strict";(self.webpackChunkvuepress_hope=self.webpackChunkvuepress_hope||[]).push([[3968],{3968:(e,l,s)=>{s.r(l),s.d(l,{default:()=>m});var t=s(7476),r=s(2072),a=s(3708),u=s(8568),i=s(6760),n=s(7528),o=s(5208),c=s(9164);const v=[];s(4464);const h=(0,r.W_y)("SEARCH_PRO_QUERY_HISTORY",[]),p=e=>v[e.id]+("anchor"in e?`#${e.anchor}`:""),{resultHistoryCount:y}=c.s,d=(0,r.W_y)("SEARCH_PRO_RESULT_HISTORY",[]);var m=(0,i._M)({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:l}){const s=(0,n.KX)(),v=(0,n.mq)(),m=(0,t.MB)(c.a),{enabled:H,addQueryHistory:g,queryHistory:f,removeQueryHistory:k}=(()=>{const{queryHistoryCount:e}=c.s,l=e>0;return{enabled:l,queryHistory:h,addQueryHistory:s=>{l&&(h.value.length<e?h.value=Array.from(new Set([s,...h.value])):h.value=Array.from(new Set([s,...h.value.slice(0,e-1)])))},removeQueryHistory:e=>{h.value=[...h.value.slice(0,e),...h.value.slice(e+1)]}}})(),{enabled:Q,resultHistory:R,addResultHistory:w,removeResultHistory:x}=(()=>{const e=y>0;return{enabled:e,resultHistory:d,addResultHistory:l=>{if(e){const e={link:p(l),display:l.display};"header"in l&&(e.header=l.header),d.value.length<y?d.value=[e,...d.value]:d.value=[e,...d.value.slice(0,y-1)]}},removeResultHistory:e=>{d.value=[...d.value.slice(0,e),...d.value.slice(e+1)]}}})(),C=H||Q,S=(0,u.C7)(e,"query"),{results:q,searching:_}=(e=>{const l=(0,c.u)(),s=(0,n.mq)(),{search:t,terminate:r}=(0,c.c)(),o=(0,u.IL)(!1),v=(0,u.kl)([]);return(0,i.u2)((()=>{const u=()=>{v.value=[],o.value=!1},n=(0,a.ui)((e=>{o.value=!0,e?t({type:"search",query:e,locale:s.value,options:l}).then((e=>{v.value=e,o.value=!1})).catch((e=>{console.error(e),u()})):u()}),c.s.searchDelay);(0,i.Kg)([e,s],(()=>n(e.value)),{immediate:!0}),(0,i.wx)((()=>{r()}))})),{searching:o,results:v}})(S),b=(0,u.cB)({isQuery:!0,index:0}),A=(0,u.IL)(0),I=(0,u.IL)(0),T=(0,i.S6)((()=>C&&(f.value.length>0||R.value.length>0))),D=(0,i.S6)((()=>q.value.length>0)),E=(0,i.S6)((()=>q.value[A.value]||null)),L=e=>e.map((e=>(0,t.ct)(e)?e:(0,i.h)(e[0],e[1]))),F=e=>{if("customField"===e.type){const l=c.b[e.index]||"$content",[s,r=""]=(0,t.oF)(l)?l[v.value].split("$content"):l.split("$content");return e.display.map((e=>(0,i.h)("div",L([s,...e,r]))))}return e.display.map((e=>(0,i.h)("div",L(e))))},K=()=>{A.value=0,I.value=0,l("updateQuery",""),l("close")};return(0,r.KIJ)("keydown",(t=>{if(e.isFocusing)if(D.value){if("ArrowUp"===t.key)I.value>0?I.value-=1:(A.value=A.value>0?A.value-1:q.value.length-1,I.value=E.value.contents.length-1);else if("ArrowDown"===t.key)I.value<E.value.contents.length-1?I.value+=1:(A.value=A.value<q.value.length-1?A.value+1:0,I.value=0);else if("Enter"===t.key){const l=E.value.contents[I.value];g(e.query),w(l),s.push(p(l)),K()}}else if(Q)if("ArrowUp"===t.key)(()=>{const{isQuery:e,index:l}=b;0===l?(b.isQuery=!e,b.index=e?R.value.length-1:f.value.length-1):b.index=l-1})();else if("ArrowDown"===t.key)(()=>{const{isQuery:e,index:l}=b;l===(e?f.value.length-1:R.value.length-1)?(b.isQuery=!e,b.index=0):b.index=l+1})();else if("Enter"===t.key){const{index:e}=b;b.isQuery?(l("updateQuery",f.value[e]),t.preventDefault()):(s.push(R.value[e].link),K())}})),(0,i.Kg)([A,I],(()=>{document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")?.scrollIntoView(!1)}),{flush:"post"}),()=>(0,i.h)("div",{class:["search-pro-result-wrapper",{empty:S.value?!D.value:!T.value}],id:"search-pro-results"},""===S.value?C?T.value?[H?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},m.value.queryHistory),f.value.map(((e,s)=>(0,i.h)("div",{class:["search-pro-result-item",{active:b.isQuery&&b.index===s}],onClick:()=>{l("updateQuery",e)}},[(0,i.h)(o.H,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},e),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:o.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),k(s)}})])))])):null,Q?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},m.value.resultHistory),R.value.map(((e,l)=>(0,i.h)(n.Qr,{to:e.link,class:["search-pro-result-item",{active:!b.isQuery&&b.index===l}],onClick:()=>{K()}},(()=>[(0,i.h)(o.H,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},[e.header?(0,i.h)("div",{class:"content-header"},e.header):null,(0,i.h)("div",e.display.map((e=>L(e))).flat())]),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:o.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),x(l)}})]))))])):null]:m.value.emptyHistory:m.value.emptyResult:_.value?(0,i.h)(o.S,{hint:m.value.searching}):D.value?(0,i.h)("ul",{class:"search-pro-result-list"},q.value.map((({title:l,contents:s},t)=>{const r=A.value===t;return(0,i.h)("li",{class:["search-pro-result-list-item",{active:r}]},[(0,i.h)("div",{class:"search-pro-result-title"},l||m.value.defaultTitle),s.map(((l,s)=>{const t=r&&I.value===s;return(0,i.h)(n.Qr,{to:p(l),class:["search-pro-result-item",{active:t,"aria-selected":t}],onClick:()=>{g(e.query),w(l),K()}},(()=>["text"===l.type?null:(0,i.h)("title"===l.type?o.T:"heading"===l.type?o.a:o.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},["text"===l.type&&l.header?(0,i.h)("div",{class:"content-header"},l.header):null,(0,i.h)("div",F(l))])]))}))])}))):m.value.emptyResult)}})}}]);