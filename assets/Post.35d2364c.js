import{I as E,$ as P,_ as N,f as R,g as q,j as v,n as D,p as z,q as A,R as V,o as l,h as c,w as m,d as H,a as W,m as j,v as O,i as o,x as L,y as S,s as I,T as M,k as U,S as Y}from"./app.cb88e505.js";import{A as G,P as J}from"./Page.f2260a34.js";import{u as K,C as Q}from"./Common.6724e48e.js";import{P as X}from"./Pager.a6474e34.js";import"./resolveTime.3babf624.js";const x=({headers:k,activeLink:n})=>{const r=E();return P("ul",{class:{catalog:!0}},k.map(a=>P("li",{class:{active:n===a.slug,[`level-${a.level}`]:!0,[`toc-link-${a.slug}`]:!0},key:a.title,onClick:()=>{r.currentRoute.value.hash!==`#${a.slug}`&&r.push(`#${a.slug}`)}},a.title)))};x.displayName="Catalog";x.props={headers:{type:Object,required:!0},activeLink:{type:String,default:""}};const Z=R({name:"Post",setup(k){const n=U(),r=q(),a=E(),w=Y(),$=w.resolve,b=w.pending,i=K(),F=v(()=>i.value?n.value.headers:[]),y=t=>t.children.length>0?[t].concat(...t.children.map(y)):t,u=v(()=>[].concat(...F.value.map(y))),e=D({headerHeight:0,screenWidth:0,catalogTop:0,activeLink:"",isFixed:!1}),p=40,T=80,d=()=>{for(let s=u.value.length-1;s>=0;s--){const C=u.value[s].slug,B=document.querySelector(`#${C}`);if((B?B.getBoundingClientRect().top:0)<=100){e.activeLink=C;break}}window.pageYOffset>e.headerHeight+p-T?(e.isFixed=!0,e.catalogTop=T):(e.isFixed=!1,e.catalogTop=e.headerHeight+p)},g=()=>{const t=document.querySelector(".post-header");e.headerHeight=t?t.offsetHeight:0,e.screenWidth=document.body.clientWidth,e.catalogTop=e.headerHeight+p};let _;z(()=>{window.addEventListener("scroll",d),g(),window.onresize=()=>(()=>{g(),d()})(),_=a.afterEach(()=>{g()})}),A(()=>{window.removeEventListener("scroll",d),_()});const{post:f}=V(),h=v(()=>{if(!f.value)return{};const t=f.value.info.next;t&&(t.text=r.value.postNext);const s=f.value.info.prev;return s&&(s.text=r.value.postPrev),{next:t,prev:s}});return(t,s)=>(l(),c(Q,null,{page:m(()=>[H(M,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:o($),onBeforeLeave:o(b)},{default:m(()=>[W("div",{class:S(["post-wrapper",{"show-catalog":o(i)}])},[j(H(G,{class:"post-header"},null,512),[[O,o(n).title]]),(l(),c(J,{key:o(n).path,class:"post-content"},{bottom:m(()=>[o(h).next||o(h).prev?(l(),c(X,{key:0,data:o(h)},null,8,["data"])):L("",!0)]),_:1})),o(i)?(l(),c(o(x),{key:0,headers:o(u),"active-link":e.activeLink,class:S({fixed:e.isFixed}),style:I({top:`${e.catalogTop}px`})},null,8,["headers","active-link","class","style"])):L("",!0)],2)]),_:1},8,["onBeforeEnter","onBeforeLeave"])]),_:1}))}});var re=N(Z,[["__file","Post.vue"]]);export{re as default};