"use strict";(self.webpackChunkgit_home=self.webpackChunkgit_home||[]).push([[3531],{93531:function(ct,ye,i){i.d(ye,{Z:function(){return qe}});var M=i(1413),k=i(87462),te=i(71002),z=i(97685),be=i(91),t=i(62435),Pe=i(64003),ne=i(2788),Ee=i(94184),$=i.n(Ee),oe=i(21770),V=i(8410);function Ne(n){var e=window.innerWidth||document.documentElement.clientWidth,a=window.innerHeight||document.documentElement.clientHeight,o=n.getBoundingClientRect(),r=o.top,u=o.right,s=o.bottom,l=o.left;return r>=0&&l>=0&&u<=e&&s<=a}var $e=i(66680);function we(n,e,a,o){var r=(0,t.useState)(void 0),u=(0,z.Z)(r,2),s=u[0],l=u[1];(0,V.Z)(function(){var d=typeof n=="function"?n():n;l(d||null)});var f=(0,t.useState)(null),m=(0,z.Z)(f,2),c=m[0],v=m[1],g=(0,$e.Z)(function(){if(s){!Ne(s)&&e&&s.scrollIntoView(o);var d=s.getBoundingClientRect(),y=d.left,p=d.top,h=d.width,C=d.height,w={left:y,top:p,width:h,height:C,radius:0};v(function(S){return JSON.stringify(S)!==JSON.stringify(w)?w:S})}else v(null)});(0,V.Z)(function(){return g(),window.addEventListener("resize",g),function(){window.removeEventListener("resize",g)}},[s,e,g]);var x=(0,t.useMemo)(function(){if(!c)return c;var d=(a==null?void 0:a.offset)||6,y=(a==null?void 0:a.radius)||2;return{left:c.left-d,top:c.top-d,width:c.width+d*2,height:c.height+d*2,radius:y}},[c,a]);return[x,s]}var re=i(74902);function Se(n){var e=n.prefixCls,a=n.current,o=n.total,r=n.title,u=n.description,s=n.onClose,l=n.onPrev,f=n.onNext,m=n.onFinish,c=n.className;return t.createElement("div",{className:$()("".concat(e,"-content"),c)},t.createElement("div",{className:"".concat(e,"-inner")},t.createElement("button",{type:"button",onClick:s,"aria-label":"Close",className:"".concat(e,"-close")},t.createElement("span",{className:"".concat(e,"-close-x")},"\xD7")),t.createElement("div",{className:"".concat(e,"-header")},t.createElement("div",{className:"".concat(e,"-title")},r)),t.createElement("div",{className:"".concat(e,"-description")},u),t.createElement("div",{className:"".concat(e,"-footer")},t.createElement("div",{className:"".concat(e,"-sliders")},o>1?(0,re.Z)(Array.from({length:o}).keys()).map(function(v,g){return t.createElement("span",{key:v,className:g===a?"active":""})}):null),t.createElement("div",{className:"".concat(e,"-buttons")},a!==0?t.createElement("button",{className:"".concat(e,"-prev-btn"),onClick:l},"Prev"):null,a===o-1?t.createElement("button",{className:"".concat(e,"-finish-btn"),onClick:m},"Finish"):t.createElement("button",{className:"".concat(e,"-next-btn"),onClick:f},"Next")))))}var Oe=function(e){var a=e.current,o=e.renderPanel;return t.createElement(t.Fragment,null,typeof o=="function"?o(e,a):t.createElement(Se,e))},Ze=Oe,Ie=i(7028),W={fill:"transparent",pointerEvents:"auto"},Re=function(e){var a=e.prefixCls,o=e.rootClassName,r=e.pos,u=e.showMask,s=e.style,l=s===void 0?{}:s,f=e.fill,m=f===void 0?"rgba(0,0,0,0.5)":f,c=e.open,v=e.animated,g=e.zIndex,x=(0,Ie.Z)(),d="".concat(a,"-mask-").concat(x),y=(0,te.Z)(v)==="object"?v==null?void 0:v.placeholder:v;return t.createElement(ne.Z,{open:c,autoLock:!0},t.createElement("div",{className:$()("".concat(a,"-mask"),o),style:(0,M.Z)({position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:g,pointerEvents:"none"},l)},u?t.createElement("svg",{style:{width:"100%",height:"100%"}},t.createElement("defs",null,t.createElement("mask",{id:d},t.createElement("rect",{x:"0",y:"0",width:"100vw",height:"100vh",fill:"white"}),r&&t.createElement("rect",{x:r.left,y:r.top,rx:r.radius,width:r.width,height:r.height,fill:"black",className:y?"".concat(a,"-placeholder-animated"):""}))),t.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:m,mask:"url(#".concat(d,")")}),r&&t.createElement(t.Fragment,null,t.createElement("rect",(0,k.Z)({},W,{x:"0",y:"0",width:"100%",height:r.top})),t.createElement("rect",(0,k.Z)({},W,{x:"0",y:"0",width:r.left,height:"100%"})),t.createElement("rect",(0,k.Z)({},W,{x:"0",y:r.top+r.height,width:"100%",height:"calc(100vh - ".concat(r.top+r.height,"px)")})),t.createElement("rect",(0,k.Z)({},W,{x:r.left+r.width,y:"0",width:"calc(100vw - ".concat(r.left+r.width,"px)"),height:"100%"})))):null))},Te=Re,dt={adjustX:1,adjustY:1},ke=[0,0],ae={left:{points:["cr","cl"],offset:[-8,0]},right:{points:["cl","cr"],offset:[8,0]},top:{points:["bc","tc"],offset:[0,-8]},bottom:{points:["tc","bc"],offset:[0,8]},topLeft:{points:["bl","tl"],offset:[0,-8]},leftTop:{points:["tr","tl"],offset:[-8,0]},topRight:{points:["br","tr"],offset:[0,-8]},rightTop:{points:["tl","tr"],offset:[8,0]},bottomRight:{points:["tr","br"],offset:[0,8]},rightBottom:{points:["bl","br"],offset:[8,0]},bottomLeft:{points:["tl","bl"],offset:[0,8]},leftBottom:{points:["br","bl"],offset:[-8,0]}};function le(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e={};return Object.keys(ae).forEach(function(a){e[a]=(0,M.Z)((0,M.Z)({},ae[a]),{},{autoArrow:n,targetOffset:ke})}),e}var ut=le(),je=["prefixCls","steps","defaultCurrent","current","onChange","onClose","onFinish","open","mask","arrow","rootClassName","placement","renderPanel","gap","animated","scrollIntoViewOptions","zIndex"],Ae={left:"50%",top:"50%",width:1,height:1},Me=function(e){var a=e.prefixCls,o=a===void 0?"rc-tour":a,r=e.steps,u=r===void 0?[]:r,s=e.defaultCurrent,l=e.current,f=e.onChange,m=e.onClose,c=e.onFinish,v=e.open,g=e.mask,x=g===void 0?!0:g,d=e.arrow,y=d===void 0?!0:d,p=e.rootClassName,h=e.placement,C=h===void 0?"bottom":h,w=e.renderPanel,S=e.gap,R=e.animated,O=e.scrollIntoViewOptions,B=O===void 0?!0:O,j=e.zIndex,H=j===void 0?1001:j,K=(0,be.Z)(e,je),X=t.useRef(),F=(0,oe.Z)(0,{value:l,defaultValue:s}),J=(0,z.Z)(F,2),P=J[0],b=J[1],E=(0,oe.Z)(void 0,{value:v,postState:function(N){return P<0||P>=u.length?!1:N!=null?N:!0}}),U=(0,z.Z)(E,2),Z=U[0],_e=U[1],ve=t.useRef(Z);(0,V.Z)(function(){Z&&!ve.current&&b(0),ve.current=Z},[Z]);var T=u[P]||{},et=T.target,Q=T.placement,tt=T.style,fe=T.arrow,nt=T.className,q=T.mask,_=T.scrollIntoViewOptions,ot=Q!=null?Q:C,L=Z&&(q!=null?q:x),rt=_!=null?_:B,at=we(et,v,S,rt),pe=(0,z.Z)(at,2),ge=pe[0],ee=pe[1],Y=ee?typeof fe=="undefined"?y:fe:!1,he=(0,te.Z)(Y)==="object"?Y.pointAtCenter:!1;(0,V.Z)(function(){var I;(I=X.current)===null||I===void 0||I.forceAlign()},[he,P]);var Ce=function(N){b(N),f==null||f(N)};if(ee===void 0)return null;var xe=function(){_e(!1),m==null||m(P)},lt=function(){return t.createElement(Ze,(0,k.Z)({arrow:Y,key:"content",prefixCls:o,total:u.length,renderPanel:w,onPrev:function(){Ce(P-1)},onNext:function(){Ce(P+1)},onClose:xe,current:P,onFinish:function(){xe(),c==null||c()}},u[P]))},it=typeof L=="boolean"?L:!!L,A=typeof L=="boolean"?void 0:L,st=function(N){return N||ee||document.body};return t.createElement(t.Fragment,null,t.createElement(Te,{zIndex:H,prefixCls:o,pos:ge,showMask:it,style:A==null?void 0:A.style,fill:A==null?void 0:A.color,open:Z,animated:R,rootClassName:p}),t.createElement(Pe.Z,(0,k.Z)({builtinPlacements:le(he)},K,{ref:X,popupStyle:tt,popupPlacement:ot,popupVisible:Z,popupClassName:$()(p,nt),prefixCls:o,popup:lt,forceRender:!1,destroyPopupOnHide:!0,zIndex:H,getTriggerDOMNode:st,arrow:!!Y}),t.createElement(ne.Z,{open:Z,autoLock:!0},t.createElement("div",{className:$()(p,"".concat(o,"-target-placeholder")),style:(0,M.Z)((0,M.Z)({},ge||Ae),{},{position:"fixed",pointerEvents:"none"})}))))},ze=Me,Be=ze,ie=i(53124),Fe=i(92195),Le=i(80636),Ve=i(12057),se=i(71577),We=i(40378),De=i(10110);function G(n){return n!=null}var ce=n=>{let{stepProps:e,current:a,type:o,indicatorsRender:r}=n;var u,s;const{prefixCls:l,total:f=1,title:m,onClose:c,onPrev:v,onNext:g,onFinish:x,cover:d,description:y,nextButtonProps:p,prevButtonProps:h,type:C,arrow:w,className:S}=e,R=typeof C!="undefined"?C:o,O=a===f-1,B=()=>{var E;v==null||v(),(E=h==null?void 0:h.onClick)===null||E===void 0||E.call(h)},j=()=>{var E;O?x==null||x():g==null||g(),(E=p==null?void 0:p.onClick)===null||E===void 0||E.call(p)},H=G(m)?t.createElement("div",{className:`${l}-header`},t.createElement("div",{className:`${l}-title`},m)):null,K=G(y)?t.createElement("div",{className:`${l}-description`},y):null,X=G(d)?t.createElement("div",{className:`${l}-cover`},d):null;let F;r?F=r(a,f):F=(0,re.Z)(Array.from({length:f}).keys()).map((E,U)=>t.createElement("span",{key:E,className:$()(U===a&&`${l}-indicator-active`,`${l}-indicator`)}));const J=R==="primary"?"default":"primary",P={type:"default",ghost:R==="primary"},[b]=(0,De.Z)("Tour",We.Z.Tour);return t.createElement("div",{className:$()(R==="primary"?`${l}-primary`:"",S,`${l}-content`)},w&&t.createElement("div",{className:`${l}-arrow`,key:"arrow"}),t.createElement("div",{className:`${l}-inner`},t.createElement(Ve.Z,{className:`${l}-close`,onClick:c}),X,H,K,t.createElement("div",{className:`${l}-footer`},f>1&&t.createElement("div",{className:`${l}-indicators`},F),t.createElement("div",{className:`${l}-buttons`},a!==0?t.createElement(se.ZP,Object.assign({},P,h,{onClick:B,size:"small",className:$()(`${l}-prev-btn`,h==null?void 0:h.className)}),(u=h==null?void 0:h.children)!==null&&u!==void 0?u:b==null?void 0:b.Previous):null,t.createElement(se.ZP,Object.assign({type:J},p,{onClick:j,size:"small",className:$()(`${l}-next-btn`,p==null?void 0:p.className)}),(s=p==null?void 0:p.children)!==null&&s!==void 0?s:O?b==null?void 0:b.Finish:b==null?void 0:b.Next)))))},He=i(60590),D=i(10274),Xe=i(14747),de=i(97414),Je=i(67968),Ue=i(45503);const Ye=n=>{const{componentCls:e,lineHeight:a,padding:o,paddingXS:r,borderRadius:u,borderRadiusXS:s,colorPrimary:l,colorText:f,colorFill:m,indicatorHeight:c,indicatorWidth:v,boxShadowTertiary:g,tourZIndexPopup:x,fontSize:d,colorBgContainer:y,fontWeightStrong:p,marginXS:h,colorTextLightSolid:C,tourBorderRadius:w,colorWhite:S,colorBgTextHover:R,tourCloseSize:O,motionDurationSlow:B,antCls:j}=n;return[{[e]:Object.assign(Object.assign({},(0,Xe.Wf)(n)),{color:f,position:"absolute",zIndex:x,display:"block",visibility:"visible",fontSize:d,lineHeight:a,width:520,"--antd-arrow-background-color":y,"&-pure":{maxWidth:"100%",position:"relative"},[`&${e}-hidden`]:{display:"none"},[`${e}-content`]:{position:"relative"},[`${e}-inner`]:{textAlign:"start",textDecoration:"none",borderRadius:w,boxShadow:g,position:"relative",backgroundColor:y,border:"none",backgroundClip:"padding-box",[`${e}-close`]:{position:"absolute",top:o,insetInlineEnd:o,color:n.colorIcon,outline:"none",width:O,height:O,borderRadius:n.borderRadiusSM,transition:`background-color ${n.motionDurationMid}, color ${n.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:n.colorIconHover,backgroundColor:n.wireframe?"transparent":n.colorFillContent}},[`${e}-cover`]:{textAlign:"center",padding:`${o+O+r}px ${o}px 0`,img:{width:"100%"}},[`${e}-header`]:{padding:`${o}px ${o}px ${r}px`,[`${e}-title`]:{lineHeight:a,fontSize:d,fontWeight:p}},[`${e}-description`]:{padding:`0 ${o}px`,lineHeight:a,wordWrap:"break-word"},[`${e}-footer`]:{padding:`${r}px ${o}px ${o}px`,textAlign:"end",borderRadius:`0 0 ${s}px ${s}px`,display:"flex",[`${e}-indicators`]:{display:"inline-block",[`${e}-indicator`]:{width:v,height:c,display:"inline-block",borderRadius:"50%",background:m,"&:not(:last-child)":{marginInlineEnd:c},"&-active":{background:l}}},[`${e}-buttons`]:{marginInlineStart:"auto",[`${j}-btn`]:{marginInlineStart:h}}}},[`${e}-primary, &${e}-primary`]:{"--antd-arrow-background-color":l},[`${e}-primary`]:{[`${e}-inner`]:{color:C,textAlign:"start",textDecoration:"none",backgroundColor:l,borderRadius:u,boxShadow:g,[`${e}-close`]:{color:C},[`${e}-indicators`]:{[`${e}-indicator`]:{background:new D.C(C).setAlpha(.15).toRgbString(),"&-active":{background:C}}},[`${e}-prev-btn`]:{color:C,borderColor:new D.C(C).setAlpha(.15).toRgbString(),backgroundColor:l,"&:hover":{backgroundColor:new D.C(C).setAlpha(.15).toRgbString(),borderColor:"transparent"}},[`${e}-next-btn`]:{color:l,borderColor:"transparent",background:S,"&:hover":{background:new D.C(R).onBackground(S).toRgbString()}}}}}),[`${e}-mask`]:{[`${e}-placeholder-animated`]:{transition:`all ${B}`}},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${e}-inner`]:{borderRadius:Math.min(w,de.qN)}}},(0,de.ZP)(n,{colorBg:"var(--antd-arrow-background-color)",contentRadius:w,limitVerticalRadius:!0})]};var ue=(0,Je.Z)("Tour",n=>{const{borderRadiusLG:e,fontSize:a,lineHeight:o}=n,r=(0,Ue.TS)(n,{tourZIndexPopup:n.zIndexPopupBase+70,indicatorWidth:6,indicatorHeight:6,tourBorderRadius:e,tourCloseSize:a*o});return[Ye(r)]}),Ge=function(n,e){var a={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(a[o[r]]=n[o[r]]);return a},Ke=n=>{const{prefixCls:e,current:a=0,total:o=6,className:r,style:u,type:s}=n,l=Ge(n,["prefixCls","current","total","className","style","type"]),{getPrefixCls:f}=t.useContext(ie.E_),m=f("tour",e),[c,v]=ue(m);return c(t.createElement(He.t5,{prefixCls:m,hashId:v,className:$()(r,`${m}-pure`,s&&`${m}-${s}`),style:u},t.createElement(ce,{stepProps:Object.assign(Object.assign({},l),{prefixCls:m,total:o}),current:a,type:s})))},Qe=function(n,e){var a={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(a[o[r]]=n[o[r]]);return a};const me=n=>{const{prefixCls:e,steps:a,current:o,type:r,rootClassName:u,indicatorsRender:s}=n,l=Qe(n,["prefixCls","steps","current","type","rootClassName","indicatorsRender"]),{getPrefixCls:f,direction:m}=(0,t.useContext)(ie.E_),c=f("tour",e),[v,g]=ue(c),{token:x}=Fe.Z.useToken(),d=(0,Le.Z)({arrowPointAtCenter:!0,autoAdjustOverflow:!0,offset:x.marginXXS,arrowWidth:x.sizePopupArrow,borderRadius:x.borderRadius}),y=$()({[`${c}-rtl`]:m==="rtl"},g,u),p=(h,C)=>t.createElement(ce,{type:r,stepProps:h,current:C,indicatorsRender:s});return v(t.createElement(Be,Object.assign({},l,{rootClassName:y,prefixCls:c,steps:a,current:o,animated:!0,renderPanel:p,builtinPlacements:d})))};me._InternalPanelDoNotUseOrYouWillBeFired=Ke;var qe=me}}]);
