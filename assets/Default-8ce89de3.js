import{d as h,r as b,o as V,c as y,w as x,a as l,V as I,p as C,m as A,b as T,e as D,g as w,f as R,h as N,u as O,i as P,j as $,k as H,l as L,n as M,q as j,s,t as z,v as f,x as g,y as E,z as F,A as G,B as U,C as q,D as W,E as J,G as oe,H as se,_ as K}from"./index-a5d43e70.js";const Q=h({__name:"View",setup(e){return(o,t)=>{const a=b("router-view");return V(),y(I,null,{default:x(()=>[l(a)]),_:1})}}});const X=C({...A(),...T({fullHeight:!0}),...D()},"VApp"),Y=w()({name:"VApp",props:X(),setup(e,o){let{slots:t}=o;const a=R(e),{layoutClasses:n,getLayoutItem:c,items:i,layoutRef:r}=N(e),{rtlClasses:v}=O();return P(()=>{var u;return l("div",{ref:r,class:["v-application",a.themeClasses.value,n.value,v.value,e.class],style:[e.style]},[l("div",{class:"v-application__wrap"},[(u=t.default)==null?void 0:u.call(t)])])}),{getLayoutItem:c,items:i,theme:a}}});const Z=C({id:String,text:String,...$(H({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),ne=w()({name:"VTooltip",props:Z(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const a=L(e,"modelValue"),{scopeId:n}=M(),c=j(),i=s(()=>e.id||`v-tooltip-${c}`),r=z(),v=s(()=>e.location.split(" ").length>1?e.location:e.location+" center"),u=s(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),k=s(()=>e.transition?e.transition:a.value?"scale-transition":"fade-transition"),S=s(()=>f({"aria-describedby":i.value},e.activatorProps));return P(()=>{const B=g.filterProps(e);return l(g,f({ref:r,class:["v-tooltip",e.class],style:e.style,id:i.value},B,{modelValue:a.value,"onUpdate:modelValue":p=>a.value=p,transition:k.value,absolute:!0,location:v.value,origin:u.value,persistent:!0,role:"tooltip",activatorProps:S.value,_disableGlobalStack:!0},n),{activator:t.activator,default:function(){var _;for(var p=arguments.length,m=new Array(p),d=0;d<p;d++)m[d]=arguments[d];return((_=t.default)==null?void 0:_.call(t,...m))??e.text}})}),E({},r)}});const ee=h({__name:"Default",setup(e){const o=F(),t=G();U(()=>{sessionStorage.getItem("page")=="discover"&&o.push("/discover")});const a=()=>{sessionStorage.setItem("page","discover"),o.push("/discover")},n=s(()=>t);return(c,i)=>(V(),y(Y,null,{default:x(()=>[q("div",{class:W(["app-container",n.value.path=="/home"?"image":""])},[l(Q)],2),J("",!0)]),_:1}))}});const ie=K(ee,[["__scopeId","data-v-f07a4503"]]);export{ie as default};
