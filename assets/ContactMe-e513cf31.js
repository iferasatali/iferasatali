import{aH as Ke,t as b,aI as qe,p as O,aJ as Xe,aK as Je,$ as pe,P as Ye,e as fe,j as Qe,k as Ze,g as W,l as le,aL as et,aM as tt,n as at,f as Ie,a5 as lt,a8 as Pe,au as te,av as E,J as de,aN as nt,i as K,y as me,aO as st,x as Ve,a as t,ae as ot,ax as it,ah as ut,v as G,aE as X,m as Z,aP as we,aQ as Be,s as d,ac as ae,ai as Fe,aD as Me,a3 as rt,ag as ct,aR as Ae,U as Q,T as ee,aS as dt,aT as vt,u as $e,q as ge,aq as ft,S as mt,aU as Re,aV as gt,ay as Te,aW as yt,aX as bt,aY as ht,af as xt,aj as J,aZ as Vt,a_ as _t,as as re,aA as kt,am as Ct,B as St,a$ as De,b0 as _e,X as pt,a6 as It,b1 as Ne,b2 as Ee,ad as Le,b3 as Pt,b4 as Ue,b5 as wt,b6 as Bt,b7 as Ft,d as Mt,K as At,w as z,o as $t,C as j,F as Rt,an as ke,L as Tt,G as Dt,H as Nt,_ as Et}from"./index-a5d43e70.js";import{g as Ce}from"./index-0fa819ad.js";import{l as Lt}from"./googleSpreadSheetAPI-2c00ed21.js";import{V as Se,a as q}from"./VRow-a73152da.js";const Ut={}.VITE_APP_BASE_URL,zt=Ut,Ot=Ke("app",()=>{const e=b(0),u=b("Home");function s(o){u.value=o}function n(){return u.value}function a(o){e.value=o}async function l(o){try{return(await qe.post(`${zt}/public/chatbot/chat`,o)).data.data}catch(f){console.log(f,"error")}}return{exploreCurrentTab:e,setNavBar:s,getNavBar:n,setExploreCurrentTab:a,chatBotApi:l}});function Ht(e){const u=te(e);let s=-1;function n(){clearInterval(s)}function a(){n(),X(()=>u.value=e)}function l(o){const f=o?getComputedStyle(o):{transitionDuration:.2},I=parseFloat(f.transitionDuration)*1e3||200;if(n(),u.value<=0)return;const C=performance.now();s=window.setInterval(()=>{const P=performance.now()-C+I;u.value=Math.max(e-P,0),u.value<=0&&n()},I)}return st(n),{clear:n,time:u,start:l,reset:a}}const jt=O({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Xe({location:"bottom"}),...Je(),...pe(),...Ye(),...fe(),...Qe(Ze({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),Gt=W()({name:"VSnackbar",props:jt(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:s}=u;const n=le(e,"modelValue"),{locationStyles:a}=et(e),{positionClasses:l}=tt(e),{scopeId:o}=at(),{themeClasses:f}=Ie(e),{colorClasses:I,colorStyles:C,variantClasses:P}=lt(e),{roundedClasses:S}=Pe(e),k=Ht(Number(e.timeout)),w=b(),p=b(),r=te(!1);E(n,h),E(()=>e.timeout,h),de(()=>{n.value&&h()});let m=-1;function h(){k.reset(),window.clearTimeout(m);const x=Number(e.timeout);if(!n.value||x===-1)return;const i=nt(p.value);k.start(i),m=window.setTimeout(()=>{n.value=!1},x)}function D(){k.reset(),window.clearTimeout(m)}function B(){r.value=!0,D()}function v(){r.value=!1,h()}return K(()=>{const x=Ve.filterProps(e),i=!!(s.default||s.text||e.text);return t(Ve,G({ref:w,class:["v-snackbar",{"v-snackbar--active":n.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--timer":!!e.timer,"v-snackbar--vertical":e.vertical},l.value,e.class],style:e.style},x,{modelValue:n.value,"onUpdate:modelValue":_=>n.value=_,contentProps:G({class:["v-snackbar__wrapper",f.value,I.value,S.value,P.value],style:[a.value,C.value],onPointerenter:B,onPointerleave:v},x.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},o),{default:()=>{var _,g;return[ot(!1,"v-snackbar"),e.timer&&t("div",{key:"timer",class:"v-snackbar__timer"},[t(it,{ref:p,active:!r.value,color:typeof e.timer=="string"?e.timer:"info",max:e.timeout,"model-value":k.time.value},null)]),i&&t("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((_=s.text)==null?void 0:_.call(s))??e.text,(g=s.default)==null?void 0:g.call(s)]),s.actions&&t(ut,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[t("div",{class:"v-snackbar__actions"},[s.actions()])]})]},activator:s.activator})}),me({},w)}});const Wt=O({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Z(),...we({transition:{component:Be}})},"VCounter"),ze=W()({name:"VCounter",functional:!0,props:Wt(),setup(e,u){let{slots:s}=u;const n=d(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return K(()=>t(Me,{transition:e.transition},{default:()=>[ae(t("div",{class:["v-counter",e.class],style:e.style},[s.default?s.default({counter:n.value,max:e.max,value:e.value}):n.value]),[[Fe,e.active]])]})),{}}});const Kt=O({text:String,clickable:Boolean,...Z(),...fe()},"VLabel"),qt=W()({name:"VLabel",props:Kt(),setup(e,u){let{slots:s}=u;return K(()=>{var n;return t("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,(n=s.default)==null?void 0:n.call(s)])}),{}}}),Xt=O({floating:Boolean,...Z()},"VFieldLabel"),ie=W()({name:"VFieldLabel",props:Xt(),setup(e,u){let{slots:s}=u;return K(()=>t(qt,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},s)),{}}});function Oe(e){const{t:u}=rt();function s(n){let{name:a}=n;const l={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[a],o=e[`onClick:${a}`],f=o&&l?u(`$vuetify.input.${l}`,e.label??""):void 0;return t(ct,{icon:e[`${a}Icon`],"aria-label":f,onClick:o},null)}return{InputIcon:s}}const He=O({focused:Boolean,"onUpdate:focused":Q()},"focus");function ye(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ae();const s=le(e,"focused"),n=d(()=>({[`${u}--focused`]:s.value}));function a(){s.value=!0}function l(){s.value=!1}return{focusClasses:n,isFocused:s,focus:a,blur:l}}const Jt=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],be=O({appendInnerIcon:ee,bgColor:String,clearable:Boolean,clearIcon:{type:ee,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:ee,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Jt.includes(e)},"onClick:clear":Q(),"onClick:appendInner":Q(),"onClick:prependInner":Q(),...Z(),...dt(),...pe(),...fe()},"VField"),he=W()({name:"VField",inheritAttrs:!1,props:{id:String,...He(),...be()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,u){let{attrs:s,emit:n,slots:a}=u;const{themeClasses:l}=Ie(e),{loaderClasses:o}=vt(e),{focusClasses:f,isFocused:I,focus:C,blur:P}=ye(e),{InputIcon:S}=Oe(e),{roundedClasses:k}=Pe(e),{rtlClasses:w}=$e(),p=d(()=>e.dirty||e.active),r=d(()=>!e.singleLine&&!!(e.label||a.label)),m=ge(),h=d(()=>e.id||`input-${m}`),D=d(()=>`${h.value}-messages`),B=b(),v=b(),x=b(),i=d(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:_,backgroundColorStyles:g}=ft(mt(e,"bgColor")),{textColorClasses:F,textColorStyles:R}=Re(d(()=>e.error||e.disabled?void 0:p.value&&I.value?e.color:e.baseColor));E(p,y=>{if(r.value){const V=B.value.$el,A=v.value.$el;requestAnimationFrame(()=>{const N=gt(V),$=A.getBoundingClientRect(),T=$.x-N.x,L=$.y-N.y-(N.height/2-$.height/2),U=$.width/.75,H=Math.abs(U-N.width)>1?{maxWidth:Te(U)}:void 0,Y=getComputedStyle(V),ne=getComputedStyle(A),ve=parseFloat(Y.transitionDuration)*1e3||150,se=parseFloat(ne.getPropertyValue("--v-field-label-scale")),oe=ne.getPropertyValue("color");V.style.visibility="visible",A.style.visibility="hidden",yt(V,{transform:`translate(${T}px, ${L}px) scale(${se})`,color:oe,...H},{duration:ve,easing:bt,direction:y?"normal":"reverse"}).finished.then(()=>{V.style.removeProperty("visibility"),A.style.removeProperty("visibility")})})}},{flush:"post"});const c=d(()=>({isActive:p,isFocused:I,controlRef:x,blur:P,focus:C}));function M(y){y.target!==document.activeElement&&y.preventDefault()}return K(()=>{var T,L,U;const y=e.variant==="outlined",V=a["prepend-inner"]||e.prependInnerIcon,A=!!(e.clearable||a.clear),N=!!(a["append-inner"]||e.appendInnerIcon||A),$=()=>a.label?a.label({...c.value,label:e.label,props:{for:h.value}}):e.label;return t("div",G({class:["v-field",{"v-field--active":p.value,"v-field--appended":N,"v-field--center-affix":e.centerAffix??!i.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":V,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!$(),[`v-field--variant-${e.variant}`]:!0},l.value,_.value,f.value,o.value,k.value,w.value,e.class],style:[g.value,e.style],onClick:M},s),[t("div",{class:"v-field__overlay"},null),t(ht,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),V&&t("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&t(S,{key:"prepend-icon",name:"prependInner"},null),(T=a["prepend-inner"])==null?void 0:T.call(a,c.value)]),t("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&r.value&&t(ie,{key:"floating-label",ref:v,class:[F.value],floating:!0,for:h.value,style:R.value},{default:()=>[$()]}),t(ie,{ref:B,for:h.value},{default:()=>[$()]}),(L=a.default)==null?void 0:L.call(a,{...c.value,props:{id:h.value,class:"v-field__input","aria-describedby":D.value},focus:C,blur:P})]),A&&t(xt,{key:"clear"},{default:()=>[ae(t("div",{class:"v-field__clearable",onMousedown:H=>{H.preventDefault(),H.stopPropagation()}},[a.clear?a.clear():t(S,{name:"clear"},null)]),[[Fe,e.dirty]])]}),N&&t("div",{key:"append",class:"v-field__append-inner"},[(U=a["append-inner"])==null?void 0:U.call(a,c.value),e.appendInnerIcon&&t(S,{key:"append-icon",name:"appendInner"},null)]),t("div",{class:["v-field__outline",F.value],style:R.value},[y&&t(J,null,[t("div",{class:"v-field__outline__start"},null),r.value&&t("div",{class:"v-field__outline__notch"},[t(ie,{ref:v,floating:!0,for:h.value},{default:()=>[$()]})]),t("div",{class:"v-field__outline__end"},null)]),i.value&&r.value&&t(ie,{ref:v,floating:!0,for:h.value},{default:()=>[$()]})])])}),{controlRef:x}}});function je(e){const u=Object.keys(he.props).filter(s=>!Vt(s)&&s!=="class"&&s!=="style");return _t(e,u)}const Yt=O({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...Z(),...we({transition:{component:Be,leaveAbsolute:!0,group:!0}})},"VMessages"),Qt=W()({name:"VMessages",props:Yt(),setup(e,u){let{slots:s}=u;const n=d(()=>re(e.messages)),{textColorClasses:a,textColorStyles:l}=Re(d(()=>e.color));return K(()=>t(Me,{transition:e.transition,tag:"div",class:["v-messages",a.value,e.class],style:[l.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&n.value.map((o,f)=>t("div",{class:"v-messages__message",key:`${f}-${n.value}`},[s.message?s.message({message:o}):o]))]})),{}}}),Zt=Symbol.for("vuetify:form");function ea(){return kt(Zt,null)}const ta=O({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...He()},"validation");function aa(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ae(),s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ge();const n=le(e,"modelValue"),a=d(()=>e.validationValue===void 0?n.value:e.validationValue),l=ea(),o=b([]),f=te(!0),I=d(()=>!!(re(n.value===""?null:n.value).length||re(a.value===""?null:a.value).length)),C=d(()=>!!(e.disabled??(l==null?void 0:l.isDisabled.value))),P=d(()=>!!(e.readonly??(l==null?void 0:l.isReadonly.value))),S=d(()=>{var v;return(v=e.errorMessages)!=null&&v.length?re(e.errorMessages).concat(o.value).slice(0,Math.max(0,+e.maxErrors)):o.value}),k=d(()=>{let v=(e.validateOn??(l==null?void 0:l.validateOn.value))||"input";v==="lazy"&&(v="input lazy");const x=new Set((v==null?void 0:v.split(" "))??[]);return{blur:x.has("blur")||x.has("input"),input:x.has("input"),submit:x.has("submit"),lazy:x.has("lazy")}}),w=d(()=>{var v;return e.error||(v=e.errorMessages)!=null&&v.length?!1:e.rules.length?f.value?o.value.length||k.value.lazy?null:!0:!o.value.length:!0}),p=te(!1),r=d(()=>({[`${u}--error`]:w.value===!1,[`${u}--dirty`]:I.value,[`${u}--disabled`]:C.value,[`${u}--readonly`]:P.value})),m=d(()=>e.name??Ct(s));St(()=>{l==null||l.register({id:m.value,validate:B,reset:h,resetValidation:D})}),De(()=>{l==null||l.unregister(m.value)}),de(async()=>{k.value.lazy||await B(!0),l==null||l.update(m.value,w.value,S.value)}),_e(()=>k.value.input,()=>{E(a,()=>{if(a.value!=null)B();else if(e.focused){const v=E(()=>e.focused,x=>{x||B(),v()})}})}),_e(()=>k.value.blur,()=>{E(()=>e.focused,v=>{v||B()})}),E(w,()=>{l==null||l.update(m.value,w.value,S.value)});function h(){n.value=null,X(D)}function D(){f.value=!0,k.value.lazy?o.value=[]:B(!0)}async function B(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const x=[];p.value=!0;for(const i of e.rules){if(x.length>=+(e.maxErrors??1))break;const g=await(typeof i=="function"?i:()=>i)(a.value);if(g!==!0){if(g!==!1&&typeof g!="string"){console.warn(`${g} is not a valid value. Rule functions must return boolean true or a string.`);continue}x.push(g||"")}}return o.value=x,p.value=!1,f.value=v,o.value}return{errorMessages:S,isDirty:I,isDisabled:C,isReadonly:P,isPristine:f,isValid:w,isValidating:p,reset:h,resetValidation:D,validate:B,validationClasses:r}}const xe=O({id:String,appendIcon:ee,centerAffix:{type:Boolean,default:!0},prependIcon:ee,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":Q(),"onClick:append":Q(),...Z(),...pt(),...ta()},"VInput"),ce=W()({name:"VInput",props:{...xe()},emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:s,slots:n,emit:a}=u;const{densityClasses:l}=It(e),{rtlClasses:o}=$e(),{InputIcon:f}=Oe(e),I=ge(),C=d(()=>e.id||`input-${I}`),P=d(()=>`${C.value}-messages`),{errorMessages:S,isDirty:k,isDisabled:w,isReadonly:p,isPristine:r,isValid:m,isValidating:h,reset:D,resetValidation:B,validate:v,validationClasses:x}=aa(e,"v-input",C),i=d(()=>({id:C,messagesId:P,isDirty:k,isDisabled:w,isReadonly:p,isPristine:r,isValid:m,isValidating:h,reset:D,resetValidation:B,validate:v})),_=d(()=>{var g;return(g=e.errorMessages)!=null&&g.length||!r.value&&S.value.length?S.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return K(()=>{var M,y,V,A;const g=!!(n.prepend||e.prependIcon),F=!!(n.append||e.appendIcon),R=_.value.length>0,c=!e.hideDetails||e.hideDetails==="auto"&&(R||!!n.details);return t("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},l.value,o.value,x.value,e.class],style:e.style},[g&&t("div",{key:"prepend",class:"v-input__prepend"},[(M=n.prepend)==null?void 0:M.call(n,i.value),e.prependIcon&&t(f,{key:"prepend-icon",name:"prepend"},null)]),n.default&&t("div",{class:"v-input__control"},[(y=n.default)==null?void 0:y.call(n,i.value)]),F&&t("div",{key:"append",class:"v-input__append"},[e.appendIcon&&t(f,{key:"append-icon",name:"append"},null),(V=n.append)==null?void 0:V.call(n,i.value)]),c&&t("div",{class:"v-input__details"},[t(Qt,{id:P.value,active:R,messages:_.value},{message:n.message}),(A=n.details)==null?void 0:A.call(n,i.value)])])}),{reset:D,resetValidation:B,validate:v,isValid:m,errorMessages:S}}}),la=["color","file","time","date","datetime-local","week","month"],na=O({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...xe(),...be()},"VTextField"),ue=W()({name:"VTextField",directives:{Intersect:Ne},inheritAttrs:!1,props:na(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,u){let{attrs:s,emit:n,slots:a}=u;const l=le(e,"modelValue"),{isFocused:o,focus:f,blur:I}=ye(e),C=d(()=>typeof e.counterValue=="function"?e.counterValue(l.value):typeof e.counterValue=="number"?e.counterValue:(l.value??"").toString().length),P=d(()=>{if(s.maxlength)return s.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),S=d(()=>["plain","underlined"].includes(e.variant));function k(i,_){var g,F;!e.autofocus||!i||(F=(g=_[0].target)==null?void 0:g.focus)==null||F.call(g)}const w=b(),p=b(),r=b(),m=d(()=>la.includes(e.type)||e.persistentPlaceholder||o.value||e.active);function h(){var i;r.value!==document.activeElement&&((i=r.value)==null||i.focus()),o.value||f()}function D(i){n("mousedown:control",i),i.target!==r.value&&(h(),i.preventDefault())}function B(i){h(),n("click:control",i)}function v(i){i.stopPropagation(),h(),X(()=>{l.value=null,Ue(e["onClick:clear"],i)})}function x(i){var g;const _=i.target;if(l.value=_.value,(g=e.modelModifiers)!=null&&g.trim&&["text","search","password","tel","url"].includes(e.type)){const F=[_.selectionStart,_.selectionEnd];X(()=>{_.selectionStart=F[0],_.selectionEnd=F[1]})}}return K(()=>{const i=!!(a.counter||e.counter!==!1&&e.counter!=null),_=!!(i||a.details),[g,F]=Ee(s),{modelValue:R,...c}=ce.filterProps(e),M=je(e);return t(ce,G({ref:w,modelValue:l.value,"onUpdate:modelValue":y=>l.value=y,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":S.value},e.class],style:e.style},g,c,{centerAffix:!S.value,focused:o.value}),{...a,default:y=>{let{id:V,isDisabled:A,isDirty:N,isReadonly:$,isValid:T}=y;return t(he,G({ref:p,onMousedown:D,onClick:B,"onClick:clear":v,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},M,{id:V.value,active:m.value||N.value,dirty:N.value||e.dirty,disabled:A.value,focused:o.value,error:T.value===!1}),{...a,default:L=>{let{props:{class:U,...H}}=L;const Y=ae(t("input",G({ref:r,value:l.value,onInput:x,autofocus:e.autofocus,readonly:$.value,disabled:A.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:h,onBlur:I},H,F),null),[[Le("intersect"),{handler:k},null,{once:!0}]]);return t(J,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[t("span",{class:"v-text-field__prefix__text"},[e.prefix])]),a.default?t("div",{class:U,"data-no-activator":""},[a.default(),Y]):Pt(Y,{class:U}),e.suffix&&t("span",{class:"v-text-field__suffix"},[t("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:_?y=>{var V;return t(J,null,[(V=a.details)==null?void 0:V.call(a,y),i&&t(J,null,[t("span",null,null),t(ze,{active:e.persistentCounter||o.value,value:C.value,max:P.value},a.counter)])])}:void 0})}),me({},w,p,r)}});const sa=O({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...xe(),...be()},"VTextarea"),oa=W()({name:"VTextarea",directives:{Intersect:Ne},inheritAttrs:!1,props:sa(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,u){let{attrs:s,emit:n,slots:a}=u;const l=le(e,"modelValue"),{isFocused:o,focus:f,blur:I}=ye(e),C=d(()=>typeof e.counterValue=="function"?e.counterValue(l.value):(l.value||"").toString().length),P=d(()=>{if(s.maxlength)return s.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function S(c,M){var y,V;!e.autofocus||!c||(V=(y=M[0].target)==null?void 0:y.focus)==null||V.call(y)}const k=b(),w=b(),p=te(""),r=b(),m=d(()=>e.persistentPlaceholder||o.value||e.active);function h(){var c;r.value!==document.activeElement&&((c=r.value)==null||c.focus()),o.value||f()}function D(c){h(),n("click:control",c)}function B(c){n("mousedown:control",c)}function v(c){c.stopPropagation(),h(),X(()=>{l.value="",Ue(e["onClick:clear"],c)})}function x(c){var y;const M=c.target;if(l.value=M.value,(y=e.modelModifiers)!=null&&y.trim){const V=[M.selectionStart,M.selectionEnd];X(()=>{M.selectionStart=V[0],M.selectionEnd=V[1]})}}const i=b(),_=b(+e.rows),g=d(()=>["plain","underlined"].includes(e.variant));wt(()=>{e.autoGrow||(_.value=+e.rows)});function F(){e.autoGrow&&X(()=>{if(!i.value||!w.value)return;const c=getComputedStyle(i.value),M=getComputedStyle(w.value.$el),y=parseFloat(c.getPropertyValue("--v-field-padding-top"))+parseFloat(c.getPropertyValue("--v-input-padding-top"))+parseFloat(c.getPropertyValue("--v-field-padding-bottom")),V=i.value.scrollHeight,A=parseFloat(c.lineHeight),N=Math.max(parseFloat(e.rows)*A+y,parseFloat(M.getPropertyValue("--v-input-control-height"))),$=parseFloat(e.maxRows)*A+y||1/0,T=Ft(V??0,N,$);_.value=Math.floor((T-y)/A),p.value=Te(T)})}de(F),E(l,F),E(()=>e.rows,F),E(()=>e.maxRows,F),E(()=>e.density,F);let R;return E(i,c=>{c?(R=new ResizeObserver(F),R.observe(i.value)):R==null||R.disconnect()}),De(()=>{R==null||R.disconnect()}),K(()=>{const c=!!(a.counter||e.counter||e.counterValue),M=!!(c||a.details),[y,V]=Ee(s),{modelValue:A,...N}=ce.filterProps(e),$=je(e);return t(ce,G({ref:k,modelValue:l.value,"onUpdate:modelValue":T=>l.value=T,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":g.value},e.class],style:e.style},y,N,{centerAffix:_.value===1&&!g.value,focused:o.value}),{...a,default:T=>{let{id:L,isDisabled:U,isDirty:H,isReadonly:Y,isValid:ne}=T;return t(he,G({ref:w,style:{"--v-textarea-control-height":p.value},onClick:D,onMousedown:B,"onClick:clear":v,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},$,{id:L.value,active:m.value||H.value,centerAffix:_.value===1&&!g.value,dirty:H.value||e.dirty,disabled:U.value,focused:o.value,error:ne.value===!1}),{...a,default:ve=>{let{props:{class:se,...oe}}=ve;return t(J,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),ae(t("textarea",G({ref:r,class:se,value:l.value,onInput:x,autofocus:e.autofocus,readonly:Y.value,disabled:U.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:h,onBlur:I},oe,V),null),[[Le("intersect"),{handler:S},null,{once:!0}]]),e.autoGrow&&ae(t("textarea",{class:[se,"v-textarea__sizer"],id:`${oe.id}-sizer`,"onUpdate:modelValue":We=>l.value=We,ref:i,readonly:!0,"aria-hidden":"true"},null),[[Bt,l.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:M?T=>{var L;return t(J,null,[(L=a.details)==null?void 0:L.call(a,T),c&&t(J,null,[t("span",null,null),t(ze,{active:e.persistentCounter||o.value,value:C.value,max:P.value},a.counter)])])}:void 0})}),me({},k,w,r)}}),Ge=e=>(Dt("data-v-7405508c"),e=e(),Nt(),e),ia={id:"contact-me",class:"pa-md-14 pa-5"},ua=Ge(()=>j("p",{class:"main-heading"},"Contact Me",-1)),ra=[ua],ca=Ge(()=>j("p",{class:"sub-heading px-2"}," We would love to speak with you. Feel free to reach out using the below details. ",-1)),da=[ca],va={class:"form-field"},fa={class:"form-field"},ma={class:"form-field"},ga={class:"form-field"},ya={class:"form-field"},ba=Mt({__name:"ContactMe",setup(e){const u=Ot(),s=b(null),n=b(null),a=b(!1),l=b("Please Fill the form completely."),o=b(""),f=b(""),I=b(""),C=b(""),P=b(""),S=b("error"),k=b(!1);de(async()=>{u.setNavBar("ContactUs"),Ce.to(s.value,{opacity:1,display:"block",x:1,y:1,delay:.5}),Ce.to(n.value,{duration:1,opacity:1,display:"block",x:1})});const w=async()=>{if(k.value=!0,!o.value||!f.value||!I.value||!C.value||!P.value){a.value=!0,k.value=!1;return}try{const p={Name:`${o.value} ${f.value}`,Email:I.value,Message:C.value,Phone:P.value};try{await Lt(p),a.value=!0,S.value="success",o.value="",f.value="",I.value="",C.value="",P.value="",l.value="Detail Submitted Successfully."}catch{a.value=!0,S.value="error",l.value="Error Submitting Details."}}catch{a.value=!0,S.value="error",l.value="Error Submitting Details."}k.value=!1};return(p,r)=>($t(),At("section",ia,[t(Se,{align:"center",class:"mt-md-10 mt-6"},{default:z(()=>[t(q,{cols:"12",class:"px-2 px-md-5"},{default:z(()=>[j("div",{ref_key:"contact",ref:s,class:"contact"},ra,512),j("div",{ref_key:"contact1",ref:n,class:"contact1"},da,512)]),_:1})]),_:1}),t(Se,{align:"center",justify:"center",class:"mt-5"},{default:z(()=>[t(q,{cols:"12",sm:"6",class:"my-0 py-0"},{default:z(()=>[j("div",va,[t(ue,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=m=>o.value=m),class:"form-field-input",variant:"solo",placeholder:"First Name"},null,8,["modelValue"])])]),_:1}),t(q,{cols:"12",sm:"6",class:"my-0 py-0"},{default:z(()=>[j("div",fa,[t(ue,{modelValue:f.value,"onUpdate:modelValue":r[1]||(r[1]=m=>f.value=m),class:"form-field-input",variant:"solo",placeholder:"Last Name"},null,8,["modelValue"])])]),_:1}),t(q,{cols:"12",sm:"6",class:"my-0 py-0"},{default:z(()=>[j("div",ma,[t(ue,{modelValue:I.value,"onUpdate:modelValue":r[2]||(r[2]=m=>I.value=m),class:"form-field-input",variant:"solo",placeholder:"Email"},null,8,["modelValue"])])]),_:1}),t(q,{cols:"12",sm:"6",class:"my-0 py-0"},{default:z(()=>[j("div",ga,[t(ue,{modelValue:P.value,"onUpdate:modelValue":r[3]||(r[3]=m=>P.value=m),class:"form-field-input",variant:"solo",placeholder:"phoneNumber",type:"number"},null,8,["modelValue"])])]),_:1}),t(q,{cols:"12",class:"my-0 py-0"},{default:z(()=>[j("div",ya,[t(oa,{modelValue:C.value,"onUpdate:modelValue":r[4]||(r[4]=m=>C.value=m),rows:"6",class:"form-field-input",variant:"solo",placeholder:"Message"},null,8,["modelValue"])])]),_:1}),t(q,{cols:"12",class:"d-flex align-center justify-end"},{default:z(()=>[t(Rt,{variant:"text",class:"contact-btn",onClick:w,loading:k.value},{default:z(()=>[ke(" Submit ")]),_:1},8,["loading"])]),_:1})]),_:1}),t(Gt,{"model-value":a.value,"onUpdate:modelValue":r[5]||(r[5]=m=>a.value=m),timeout:4e3,color:S.value,variant:"tonal",location:"top right",class:"mt-16"},{default:z(()=>[ke(Tt(l.value),1)]),_:1},8,["model-value","color"])]))}});const ka=Et(ba,[["__scopeId","data-v-7405508c"]]);export{ka as default};
