"use strict";(self.webpackChunkgit_home=self.webpackChunkgit_home||[]).push([[4837,783,3692],{33494:function(W,R,e){e.r(R),e.d(R,{preLoad:function(){return w},useCarouselStyle:function(){return D},useSiteData:function(){return A}});var T=e(27424),J=e.n(T),O=e(62435);function B(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}function w(y){if(typeof window!="undefined"){var E=document.createElement("div");E.style.display="none",document.body.appendChild(E),y.forEach(function(l){var s=new Image;s.src=l,E.appendChild(s)})}}function A(){var y=O.useState({}),E=J()(y,2),l=E[0],s=E[1],c=O.useState(!1),i=J()(c,2),_=i[0],o=i[1];return O.useEffect(function(){Object.keys(l!=null?l:{}).length===0&&typeof fetch!="undefined"&&(o(!0),fetch("https://render.alipay.com/p/h5data/antd4-config_website-h5data.json").then(function(n){return n.json()}).then(function(n){s(n),o(!1)}))},[]),[l,_]}var P={name:"pe4q6k",styles:".slick-dots.slick-dots-bottom{bottom:-22px;li{width:6px;height:6px;background:#e1eeff;border-radius:50%;button{height:6px;background:#e1eeff;border-radius:50%;}&.slick-active{background:#4b9cff;button{background:#4b9cff;}}}}"},D=function(){return{carousel:P}}},74399:function(W,R,e){var T=e(62435),J=function(){return ___EmotionJSX(React.Fragment,null,"API Table")},O=null},2068:function(W,R,e){var T=e(10434),J=e.n(T),O=e(42122),B=e.n(O),w=e(70215),A=e.n(w),P=e(62435),D=null,y=function(s){var c=s.style,i=_objectWithoutProperties(s,D);return ___EmotionJSX(Alert,_extends({},i,{style:_objectSpread({margin:"24px 0"},c)}))},E=null},63942:function(W,R,e){var T=e(62435),J=e(52180),O=function(){var P=useSiteToken(),D=P.token;return{codeSpan:css("padding:0.2em 0.4em;font-size:0.9em;background:",D.siteMarkdownCodeBg,";border-radius:",D.borderRadius,"px;font-family:monospace;",""),dot:css("display:inline-block;width:6px;height:6px;border-radius:",D.borderRadiusSM,"px;margin-inline-end:4px;border:1px solid ",D.colorSplit,";","")}},B=function(P){var D=O(),y=P.color,E=P.children,l=React.useMemo(function(){var s=new TinyColor(y).toHex8String();return s.endsWith("ff")?s.slice(0,-2):s},[y]);return ___EmotionJSX("span",{css:D.codeSpan},___EmotionJSX("span",{css:D.dot,style:{backgroundColor:l}}),E!=null?E:l)},w=null},24628:function(W,R,e){var T=e(27424),J=e(62435),O=e(6641),B=e(34081),w=e(37472),A=70,P=70,D=function(){var s=useState("#1890ff"),c=_slicedToArray(s,2),i=c[0],_=c[1],o=useState(null),n=_slicedToArray(o,2),a=n[0],t=n[1],r=function(v,d){var m=v.target?v.target.value:v;_(m),t(d)},k=useMemo(function(){var u="";return a&&(a.hsv.s*100<A&&(u+=" \u9971\u548C\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(A,"\uFF08\u73B0\u5728 ").concat((a.hsv.s*100).toFixed(2),"\uFF09")),a.hsv.v*100<P&&(u+=" \u4EAE\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(P,"\uFF08\u73B0\u5728 ").concat((a.hsv.v*100).toFixed(2),"\uFF09"))),___EmotionJSX("span",{className:"color-palette-picker-validation"},u.trim())},[a,A,P]);return ___EmotionJSX("div",{className:"color-palette-horizontal"},___EmotionJSX("div",{className:"color-palette-pick"},___EmotionJSX(FormattedMessage,{id:"app.docs.color.pick-primary"})),___EmotionJSX("div",{className:"main-color"},ColorPatterns({color:i})),___EmotionJSX("div",{className:"color-palette-picker"},___EmotionJSX("span",{style:{display:"inline-block",verticalAlign:"middle"}},___EmotionJSX(ColorPicker,{color:i,onChange:r})),___EmotionJSX("span",{className:"color-palette-picker-value"},i),k))},y=null,E=null},19260:function(W,R,e){var T=e(27424),J=e(62435),O=e(6641),B=e(34081),w=e(37472),A=70,P=70,D=function(){var s=useState("#1890ff"),c=_slicedToArray(s,2),i=c[0],_=c[1],o=useState("#141414"),n=_slicedToArray(o,2),a=n[0],t=n[1],r=useState(null),k=_slicedToArray(r,2),u=k[0],v=k[1],d=function(p,C){var M=p.target?p.target.value:p;_(M),v(C)},m=function(p){var C=p.target?p.target.value:p;t(C)},x=useMemo(function(){var f="";return u&&(u.hsv.s*100<A&&(f+=" \u9971\u548C\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(A,"\uFF08\u73B0\u5728 ").concat((u.hsv.s*100).toFixed(2),"\uFF09")),u.hsv.v*100<P&&(f+=" \u4EAE\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(P,"\uFF08\u73B0\u5728 ").concat((u.hsv.v*100).toFixed(2),"\uFF09"))),___EmotionJSX("span",{className:"color-palette-picker-validation color-palette-picker-validation-dark"},f.trim())},[u]);return ___EmotionJSX("div",{className:"color-palette-horizontal color-palette-horizontal-dark"},___EmotionJSX("div",{className:"main-color"},ColorPatterns({color:i,dark:!0,backgroundColor:a})),___EmotionJSX("div",{className:"color-palette-picker"},___EmotionJSX(Row,null,___EmotionJSX(Col,{span:12},___EmotionJSX("div",{className:"color-palette-pick"},___EmotionJSX(FormattedMessage,{id:"app.docs.color.pick-primary"})),___EmotionJSX("span",{style:{display:"inline-block",verticalAlign:"middle"}},___EmotionJSX(Row,null,___EmotionJSX(Col,{span:18},___EmotionJSX(ColorPicker,{color:i,onChange:d})),___EmotionJSX(Col,{span:6},___EmotionJSX("span",{className:"color-palette-pick-hex"},i))))),___EmotionJSX(Col,{span:12},___EmotionJSX("div",{className:"color-palette-pick"},___EmotionJSX(FormattedMessage,{id:"app.docs.color.pick-background"})),___EmotionJSX("span",{style:{display:"inline-block",verticalAlign:"middle"}},___EmotionJSX(Row,null,___EmotionJSX(Col,{span:18},___EmotionJSX(ColorPicker,{color:a,onChange:m})),___EmotionJSX(Col,{span:6},___EmotionJSX("span",{className:"color-palette-pick-hex"},a)))))),x))},y=null,E=null},16073:function(W,R,e){var T=e(94184),J=e(62435),O=e(63379),B=[{name:"red",english:"Dust Red",chinese:"\u8584\u66AE",description:"\u6597\u5FD7\u3001\u5954\u653E"},{name:"volcano",english:"Volcano",chinese:"\u706B\u5C71",description:"\u9192\u76EE\u3001\u6F8E\u6E43"},{name:"orange",english:"Sunset Orange",chinese:"\u65E5\u66AE",description:"\u6E29\u6696\u3001\u6B22\u5FEB"},{name:"gold",english:"Calendula Gold",chinese:"\u91D1\u76CF\u82B1",description:"\u6D3B\u529B\u3001\u79EF\u6781"},{name:"yellow",english:"Sunrise Yellow",chinese:"\u65E5\u51FA",description:"\u51FA\u751F\u3001\u9633\u5149"},{name:"lime",english:"Lime",chinese:"\u9752\u67E0",description:"\u81EA\u7136\u3001\u751F\u673A"},{name:"green",english:"Polar Green",chinese:"\u6781\u5149\u7EFF",description:"\u5065\u5EB7\u3001\u521B\u65B0"},{name:"cyan",english:"Cyan",chinese:"\u660E\u9752",description:"\u5E0C\u671B\u3001\u575A\u5F3A"},{name:"blue",english:"Daybreak Blue",chinese:"\u62C2\u6653\u84DD",description:"\u5305\u5BB9\u3001\u79D1\u6280\u3001\u666E\u60E0"},{name:"geekblue",english:"Geek Blue",chinese:"\u6781\u5BA2\u84DD",description:"\u63A2\u7D22\u3001\u94BB\u7814"},{name:"purple",english:"Golden Purple",chinese:"\u9171\u7D2B",description:"\u4F18\u96C5\u3001\u6D6A\u6F2B"},{name:"magenta",english:"Magenta",chinese:"\u6CD5\u5F0F\u6D0B\u7EA2",description:"\u660E\u5FEB\u3001\u611F\u6027"}],w=function(y){var E=y.dark;return ___EmotionJSX("div",{className:classnames("color-palettes",{"color-palettes-dark":E})},B.map(function(l){return ___EmotionJSX(Palette,{key:l.name,color:l,dark:E,showTitle:!0})}))},A=null,P=null},56140:function(W,R,e){var T=e(42122),J=e(27424),O=e(62435),B=e(6641),w=e(23279),A=e.n(w),P=e(48997),D=[{cover:"https://gw.alipayobjects.com/zos/antfincdn/4n5H%24UX%24j/bianzu%2525204.svg",link:"https://procomponents.ant.design/components/layout",subtitle:"\u9AD8\u7EA7\u5E03\u5C40",title:"ProLayout",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/mStei5BFC/bianzu%2525207.svg",link:"https://procomponents.ant.design/components/form",subtitle:"\u9AD8\u7EA7\u8868\u5355",title:"ProForm",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/AwU0Cv%26Ju/bianzu%2525208.svg",link:"https://procomponents.ant.design/components/table",subtitle:"\u9AD8\u7EA7\u8868\u683C",title:"ProTable",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/H0%26LSYYfh/bianzu%2525209.svg",link:"https://procomponents.ant.design/components/descriptions",subtitle:"\u9AD8\u7EA7\u5B9A\u4E49\u5217\u8868",title:"ProDescriptions",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/uZUmLtne5/bianzu%2525209.svg",link:"https://procomponents.ant.design/components/list",subtitle:"\u9AD8\u7EA7\u5217\u8868",title:"ProList",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/N3eU432oA/bianzu%2525209.svg",link:"https://procomponents.ant.design/components/editable-table",subtitle:"\u53EF\u7F16\u8F91\u8868\u683C",title:"EditableProTable",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"}],y=null,E=e(52180),l=e(38199);function s(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var c={name:"1lyd58t",styles:"display:flex;transition:all 0.3s;justify-content:space-between"},i={name:"l0aeht",styles:"cursor:pointer;transition:all 0.5s;&:hover{box-shadow:0 6px 16px -8px #00000014,0 9px 28px #0000000d,0 12px 48px 16px #00000008;}"},_={name:"eyizcg",styles:"display:flex;align-items:center;justify-content:center;height:152px"},o={name:"smln73",styles:"margin-bottom:24px!important"},n=function(){var d=useSiteToken(),m=d.token;return{componentsOverviewGroupTitle:o,componentsOverviewTitle:css("overflow:hidden;color:",m.colorTextHeading,";text-overflow:ellipsis;",""),componentsOverviewImg:_,componentsOverviewCard:i,componentsOverviewAffix:c,componentsOverviewSearch:css("padding:0;.anticon-search{color:",m.colorTextDisabled,";}",""),componentsOverviewContent:css("&:empty:after{display:block;padding:16px 0 40px;color:",m.colorTextDisabled,";text-align:center;border-bottom:1px solid ",m.colorSplit,";content:'Not Found';}","")}},a=function(d){window.gtag&&window.gtag("event","\u70B9\u51FB",{event_category:"\u7EC4\u4EF6\u603B\u89C8\u5361\u7247",event_label:d})},t=A()(function(v){window.gtag&&window.gtag("event","\u641C\u7D22",{event_category:"\u7EC4\u4EF6\u603B\u89C8\u5361\u7247",event_label:v})},2e3),r=P.Z.Title,k=function(){var d=n(),m=useContext(SiteContext),x=m.theme,f=useSidebarData(),p=useState(!1),C=_slicedToArray(p,2),M=C[0],X=C[1],U=useSiteToken(),F=U.token,$=F.borderRadius,N=F.colorBgContainer,ae=F.fontSizeXL,re={boxShadow:"rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px",padding:8,margin:-8,borderRadius:$,backgroundColor:N},te=useLocation(),S=te.search,h=useIntl(),I=h.locale,V=h.formatMessage,H=useState(function(){var g=new URLSearchParams(S);return g.has("s")?g.get("s"):""}),Y=_slicedToArray(H,2),K=Y[0],Q=Y[1],Z=useRef(null),ie=function(j){if(j.keyCode===13&&K.trim().length){var L,b;(L=Z.current)===null||L===void 0||(b=L.querySelector(".components-overview-card"))===null||b===void 0||b.click()}},q=useMemo(function(){return f.filter(function(g){return g==null?void 0:g.title}).map(function(g){return{title:g==null?void 0:g.title,children:g.children.map(function(j){var L;return{title:(L=j.frontmatter)===null||L===void 0?void 0:L.title,subtitle:j.frontmatter.subtitle,cover:j.frontmatter.cover,coverDark:j.frontmatter.coverDark,link:j.link}})}}).concat([{title:I==="zh-CN"?"\u91CD\u578B\u7EC4\u4EF6":"Others",children:I==="zh-CN"?proComponentsList:proComponentsList.map(function(g){return _objectSpread(_objectSpread({},g),{},{subtitle:""})})}])},[f,I]);return ___EmotionJSX("section",{className:"markdown",ref:Z},___EmotionJSX(Divider,null),___EmotionJSX(Affix,{offsetTop:24,onChange:X},___EmotionJSX("div",{css:d.componentsOverviewAffix,style:M?re:{}},___EmotionJSX(Input,{autoFocus:!0,value:K,placeholder:V({id:"app.components.overview.search"}),css:d.componentsOverviewSearch,onChange:function(j){Q(j.target.value),t(j.target.value)},onKeyDown:ie,bordered:!1,suffix:___EmotionJSX(SearchOutlined,null),style:{fontSize:M?ae-2:ae}}))),___EmotionJSX(Divider,null),___EmotionJSX("div",{css:d.componentsOverviewContent},q.filter(function(g){return g==null?void 0:g.title}).map(function(g){var j,L=g==null||(j=g.children)===null||j===void 0?void 0:j.filter(function(b){var ee,z;return!K.trim()||(b==null||(ee=b.title)===null||ee===void 0||(z=ee.toLowerCase())===null||z===void 0?void 0:z.includes(K.trim().toLowerCase()))||((b==null?void 0:b.subtitle)||"").toLowerCase().includes(K.trim().toLowerCase())});return L!=null&&L.length?___EmotionJSX("div",{key:g==null?void 0:g.title},___EmotionJSX(r,{level:2,css:d.componentsOverviewGroupTitle},___EmotionJSX(Space,{align:"center"},___EmotionJSX("span",{style:{fontSize:24}},g==null?void 0:g.title),___EmotionJSX(Tag,{style:{display:"block"}},L.length))),___EmotionJSX(Row,{gutter:[24,24]},L.map(function(b){var ee=b.link.startsWith("http"),z="".concat(b.link);ee||(z+=S);var se=ee?"a":Link;return ___EmotionJSX(Col,{xs:24,sm:12,lg:8,xl:6,key:b==null?void 0:b.title},___EmotionJSX(se,{to:z,href:z,onClick:function(){return a(z)}},___EmotionJSX(Card,{bodyStyle:{backgroundRepeat:"no-repeat",backgroundPosition:"bottom right",backgroundImage:"url(".concat((b==null?void 0:b.tag)||"",")")},size:"small",css:d.componentsOverviewCard,title:___EmotionJSX("div",{css:d.componentsOverviewTitle},b==null?void 0:b.title," ",b.subtitle)},___EmotionJSX("div",{css:d.componentsOverviewImg},___EmotionJSX("img",{src:x.includes("dark")&&b.coverDark?b.coverDark:b.cover,alt:b==null?void 0:b.title})))))}))):null})))},u=null},27179:function(W,R,e){var T=e(27424),J=e.n(T),O=e(97501),B=e(62435),w=e(2559),A=e(52180),P=e(73024),D=(0,O.Z)(),y={cn:{token:"Token \u540D\u79F0",description:"\u63CF\u8FF0",type:"\u7C7B\u578B",value:"\u9ED8\u8BA4\u503C"},en:{token:"Token Name",description:"Description",type:"Type",value:"Default Value"}};function E(c){var i=c.defaultOpen,_=c.tokens,o=c.title,n=useLocale(y),a=_slicedToArray(n,2),t=a[1],r=useSiteToken(),k=r.token,u=useColumns();if(!_.length)return null;var v=_.map(function(d){var m=tokenMeta[d];return{name:d,desc:t==="cn"?m.desc:m.descEn,type:m.type,value:D[d]}});return ___EmotionJSX("details",{className:"markdown",open:i},___EmotionJSX("summary",null,___EmotionJSX("h3",{style:{display:"inline"}},o)),___EmotionJSX(ConfigProvider,{theme:{token:{borderRadius:0}}},___EmotionJSX(Table,{size:"middle",columns:u,bordered:!0,dataSource:v,style:{marginBottom:k.margin},pagination:!1})))}function l(c){var i=c.component,_=tokenData[i]||{},o=_.global,n=o===void 0?[]:o,a=_.component,t=a===void 0?[]:a;return ___EmotionJSX(React.Fragment,null,___EmotionJSX(E,{title:"Component Token",tokens:t,defaultOpen:!0}),___EmotionJSX(E,{title:"Global Token",tokens:n}))}var s=null},5388:function(W,R,e){var T=e(42122),J=e.n(T),O=e(27424),B=e.n(O),w=e(62435),A=e(6641),P=e(94184),D=e.n(P),y=e(24229),E=function(c){var i=c.items,_=useContext(DemoContext),o=_.showDebug,n=_.setShowDebug,a=useState(!1),t=_slicedToArray(a,2),r=t[0],k=t[1],u=classNames("code-box-expand-trigger",{"code-box-expand-trigger-active":r}),v=function(){n==null||n(!o)},d=function(){k(!r)},m=React.useMemo(function(){return i.reduce(function(x,f){var p=f.previewerProps,C=p.debug;return C&&!o?x:x.concat(_objectSpread(_objectSpread({},f),{},{previewerProps:_objectSpread(_objectSpread({},p),{},{expand:r,debug:!1,originDebug:C})}))},[])},[r,o]);return ___EmotionJSX("div",{className:"demo-wrapper"},___EmotionJSX("span",{className:"all-code-box-controls"},___EmotionJSX(Tooltip,{title:___EmotionJSX(FormattedMessage,{id:"app.component.examples.".concat(r?"collapse":"expand")})},r?___EmotionJSX(CodeFilled,{className:u,onClick:d}):___EmotionJSX(CodeOutlined,{className:u,onClick:d})),___EmotionJSX(Tooltip,{title:___EmotionJSX(FormattedMessage,{id:"app.component.examples.".concat(o?"hide":"visible")})},o?___EmotionJSX(BugFilled,{className:u,onClick:v}):___EmotionJSX(BugOutlined,{className:u,onClick:v}))),___EmotionJSX(DumiDemoGrid,{items:m,key:"".concat(r).concat(o)}))},l=null},49545:function(W,R,e){var T=e(42122),J=e(27424),O=e(62435),B=e(90099),w=e(6641),A=e(23279),P=e(38416),D=e(74855),y=e(94184),E=B,l=function(h){var I=h.name,V=h.isNew,H=h.justCopied,Y=h.onCopied,K=h.theme,Q=classNames(_defineProperty({copied:H===I},K,!!K)),Z=function(q,g){g?Y(I,q):message.error("Copy icon name failed, please try again.")};return ___EmotionJSX(CopyToClipboard,{text:"<".concat(I," />"),onCopy:Z},___EmotionJSX("li",{className:Q},React.createElement(E[I]),___EmotionJSX("span",{className:"anticon-class"},___EmotionJSX(Badge,{dot:V},I))))},s=null,c=function(h){var I=h.icons,V=h.title,H=h.newIcons,Y=h.theme,K=useIntl(),Q=React.useState(null),Z=_slicedToArray(Q,2),ie=Z[0],q=Z[1],g=React.useRef(null),j=React.useCallback(function(L,b){message.success(___EmotionJSX("span",null,___EmotionJSX("code",{className:"copied-code"},b)," copied \u{1F389}")),q(L),g.current=setTimeout(function(){q(null)},2e3)},[]);return React.useEffect(function(){return function(){g.current&&clearTimeout(g.current)}},[]),___EmotionJSX("div",null,___EmotionJSX("h3",null,K.formatMessage({id:"app.docs.components.icon.category.".concat(V)})),___EmotionJSX("ul",{className:"anticons-list"},I.map(function(L){return ___EmotionJSX(CopyableIcon,{key:L,name:L,theme:Y,isNew:H.includes(L),justCopied:ie,onCopied:j})})))},i=null,_=e(10434),o=function(h){var I="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z";return ___EmotionJSX("svg",_extends({},h,{viewBox:"0 0 1024 1024"}),___EmotionJSX("path",{d:I}))},n=function(h){var I="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z m-12 800H172c-6.6 0-12-5.4-12-12V172c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v680c0 6.6-5.4 12-12 12z";return ___EmotionJSX("svg",_extends({},h,{viewBox:"0 0 1024 1024"}),___EmotionJSX("path",{d:I}))},a=function(h){var I="M16 512c0 273.932 222.066 496 496 496s496-222.068 496-496S785.932 16 512 16 16 238.066 16 512z m496 368V144c203.41 0 368 164.622 368 368 0 203.41-164.622 368-368 368z";return ___EmotionJSX("svg",_extends({},h,{viewBox:"0 0 1024 1024"}),___EmotionJSX("path",{d:I}))},t=e(62816),r=Object.keys(t).map(function(S){return S.replace(/(Outlined|Filled|TwoTone)$/,"")}).filter(function(S,h,I){return I.indexOf(S)===h}),k=["StepBackward","StepForward","FastBackward","FastForward","Shrink","ArrowsAlt","Down","Up","Left","Right","CaretUp","CaretDown","CaretLeft","CaretRight","UpCircle","DownCircle","LeftCircle","RightCircle","DoubleRight","DoubleLeft","VerticalLeft","VerticalRight","VerticalAlignTop","VerticalAlignMiddle","VerticalAlignBottom","Forward","Backward","Rollback","Enter","Retweet","Swap","SwapLeft","SwapRight","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PlayCircle","UpSquare","DownSquare","LeftSquare","RightSquare","Login","Logout","MenuFold","MenuUnfold","BorderBottom","BorderHorizontal","BorderInner","BorderOuter","BorderLeft","BorderRight","BorderTop","BorderVerticle","PicCenter","PicLeft","PicRight","RadiusBottomleft","RadiusBottomright","RadiusUpleft","RadiusUpright","Fullscreen","FullscreenExit"],u=["Question","QuestionCircle","Plus","PlusCircle","Pause","PauseCircle","Minus","MinusCircle","PlusSquare","MinusSquare","Info","InfoCircle","Exclamation","ExclamationCircle","Close","CloseCircle","CloseSquare","Check","CheckCircle","CheckSquare","ClockCircle","Warning","IssuesClose","Stop"],v=["Edit","Form","Copy","Scissor","Delete","Snippets","Diff","Highlight","AlignCenter","AlignLeft","AlignRight","BgColors","Bold","Italic","Underline","Strikethrough","Redo","Undo","ZoomIn","ZoomOut","FontColors","FontSize","LineHeight","Dash","SmallDash","SortAscending","SortDescending","Drag","OrderedList","UnorderedList","RadiusSetting","ColumnWidth","ColumnHeight"],d=["AreaChart","PieChart","BarChart","DotChart","LineChart","RadarChart","HeatMap","Fall","Rise","Stock","BoxPlot","Fund","Sliders"],m=["Android","Apple","Windows","Ie","Chrome","Github","Aliwangwang","Dingding","WeiboSquare","WeiboCircle","TaobaoCircle","Html5","Weibo","Twitter","Wechat","Youtube","AlipayCircle","Taobao","Skype","Qq","MediumWorkmark","Gitlab","Medium","Linkedin","GooglePlus","Dropbox","Facebook","Codepen","CodeSandbox","CodeSandboxCircle","Amazon","Google","CodepenCircle","Alipay","AntDesign","AntCloud","Aliyun","Zhihu","Slack","SlackSquare","Behance","BehanceSquare","Dribbble","DribbbleSquare","Instagram","Yuque","Alibaba","Yahoo","Reddit","Sketch"],x=[].concat(k,u,v,d,m),f=r.filter(function(S){return!x.includes(S)}),p={direction:k,suggestion:u,editor:v,data:d,logo:m,other:f},C=null,M=e(52180);function X(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var U;(function(S){S.Filled="Filled",S.Outlined="Outlined",S.TwoTone="TwoTone"})(U||(U={}));var F=B,$={name:"1lyd58t",styles:"display:flex;transition:all 0.3s;justify-content:space-between"},N=function(){return{iconSearchAffix:$}},ae=function(h){return[{value:U.Outlined,icon:___EmotionJSX(Icon,{component:OutlinedIcon}),label:h.formatMessage({id:"app.docs.components.icon.outlined"})},{value:U.Filled,icon:___EmotionJSX(Icon,{component:FilledIcon}),label:h.formatMessage({id:"app.docs.components.icon.filled"})},{value:U.TwoTone,icon:___EmotionJSX(Icon,{component:TwoToneIcon}),label:h.formatMessage({id:"app.docs.components.icon.two-tone"})}]},re=function(){var h=useIntl(),I=N(),V=I.iconSearchAffix,H=useState({searchKey:"",theme:U.Outlined}),Y=_slicedToArray(H,2),K=Y[0],Q=Y[1],Z=[],ie=debounce(function(_e){Q(function(le){return _objectSpread(_objectSpread({},le),{},{searchKey:_e.target.value})})},300),q=useCallback(function(_e){Q(function(le){return _objectSpread(_objectSpread({},le),{},{theme:_e})})},[]),g=useMemo(function(){var _e=K.searchKey,le=_e===void 0?"":_e,de=K.theme,me=Object.keys(categories).map(function(ne){var G=categories[ne];if(le){var ce=le.replace(new RegExp("^<([a-zA-Z]*)\\s/>$","gi"),function(oe,he){return he}).replace(/(Filled|Outlined|TwoTone)$/,"").toLowerCase();G=G.filter(function(oe){return oe.toLowerCase().includes(ce)})}return G=G.filter(function(oe){return oe!=="CopyrightCircle"}),{category:ne,icons:G.map(function(oe){return oe+de}).filter(function(oe){return F[oe]})}}).filter(function(ne){var G=ne.icons;return!!G.length}).map(function(ne){var G=ne.category,ce=ne.icons;return ___EmotionJSX(Category,{key:G,title:G,theme:de,icons:ce,newIcons:Z})});return me.length?me:___EmotionJSX(Empty,{style:{margin:"2em 0"}})},[K.searchKey,K.theme]),j=useState(!1),L=_slicedToArray(j,2),b=L[0],ee=L[1],z=useSiteToken(),se=z.token,ue=se.borderRadius,ve=se.colorBgContainer,pe={boxShadow:"rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px",padding:8,margin:-8,borderRadius:ue,backgroundColor:ve};return ___EmotionJSX("div",{className:"markdown"},___EmotionJSX(Affix,{offsetTop:24,onChange:ee},___EmotionJSX("div",{css:V,style:b?pe:{}},___EmotionJSX(Segmented,{size:"large",value:K.theme,options:ae(h),onChange:q}),___EmotionJSX(Input.Search,{placeholder:h.formatMessage({id:"app.docs.components.icon.search.placeholder"}),style:{flex:1,marginInlineStart:16},allowClear:!0,autoFocus:!0,size:"large",onChange:ie}))),g)},te=null},6965:function(W,R,e){var T=e(10434),J=e.n(T),O=e(42122),B=e.n(O),w=e(62435),A=e(94184),P=e.n(A),D=e(45598);function y(o){return/\bgood\b/i.test(o)}function E(o){return/\bbad\b/i.test(o)}function l(o){return/\binline\b/i.test(o)}function s(o){return o.isGood||o.isBad}function c(o){return s(o)||o.inline}var i=function(n){var a=n.children,t=toArray(a).filter(function(x){return x.type==="img"}),r=t.map(function(x){var f=x.props,p=f.alt,C=f.description,M=f.src,X=f.className;return{className:X,alt:p,description:C,src:M,isGood:y(X),isBad:E(X),inline:l(X)}}),k=r.map(function(x,f){var p=_objectSpread({},x);return delete p.description,delete p.isGood,delete p.isBad,___EmotionJSX("div",{key:f},___EmotionJSX("div",{className:"image-modal-container"},___EmotionJSX("img",_extends({},p,{src:x.src,alt:x.alt}))))}),u=t.length===2&&r.every(c)||t.length>=2&&r.every(s),v=u?{width:"".concat((100/t.length).toFixed(3),"%")}:{},d=t.length>1&&!u,m=classNames({"preview-image-boxes":!0,clearfix:!0,"preview-image-boxes-compare":u,"preview-image-boxes-with-carousel":d});return ___EmotionJSX("div",{className:m},k.map(function(x,f){if(!u&&f!==0)return null;var p=r[f],C=classNames("preview-image-wrapper",{good:p.isGood,bad:p.isBad});return ___EmotionJSX("div",{className:"preview-image-box",style:v,key:f},___EmotionJSX("div",{className:C},___EmotionJSX(Image,{className:p.className,src:p.src,alt:p.alt})),___EmotionJSX("div",{className:"preview-image-title"},p.alt),___EmotionJSX("div",{className:"preview-image-description",dangerouslySetInnerHTML:{__html:p.description}}))}))},_=null},49706:function(W,R,e){var T=e(63379),J=null},95127:function(W,R,e){var T=e(861),J=e.n(T),O=e(27424),B=e.n(O),w=e(62435),A=e(27484),P=e.n(A),D=e(6641),y=e(33494),E=e(52180),l=function(){var _=useSiteToken(),o=_.token,n=o.antCls;return{articles:css("h4{margin:40px 0 24px;font-weight:500;font-size:20px;}",n,"-skeleton{h3{margin:0;}ul li{display:block;margin-left:0;}}",n,"-tabs-nav::before{display:none;}table{width:100%;table-layout:fixed;td{width:50%;vertical-align:top;}}",""),articleList:css("li{margin:1em 0;padding:0;font-size:14px;list-style:none;}",n,"-avatar>img{max-width:unset;}","")}},s=function(_){var o=_.name,n=_.data,a=n===void 0?[]:n,t=_.authors,r=t===void 0?[]:t,k=l(),u=k.articleList;return ___EmotionJSX("td",null,___EmotionJSX("h4",null,o),___EmotionJSX("ul",{css:u},a.length===0?___EmotionJSX(Empty,{image:Empty.PRESENTED_IMAGE_SIMPLE}):a.map(function(v,d){var m=r.find(function(x){return x.name===v.author});return ___EmotionJSX("li",{key:d},___EmotionJSX("a",{href:m==null?void 0:m.href,target:"_blank",rel:"noreferrer"},___EmotionJSX(Avatar,{size:"small",src:m==null?void 0:m.avatar})),___EmotionJSX(Divider,{type:"vertical"}),___EmotionJSX("a",{href:v.href,target:"_blank",rel:"noreferrer"},v==null?void 0:v.title))})))},c=function(){var i=useIntl(),_=i.locale,o=_==="zh-CN",n=useSiteData(),a=_slicedToArray(n,2),t=a[0],r=t.articles,k=r===void 0?{cn:[],en:[]}:r,u=t.authors,v=u===void 0?[]:u,d=a[1],m=l(),x=React.useMemo(function(){var C,M={};return(C=k[o?"cn":"en"])===null||C===void 0||C.forEach(function(X){var U=dayjs(X.date).year();M[U]=M[U]||{},M[U][X.type]=[].concat(_toConsumableArray(M[U][X.type]||[]),[X])}),M},[k]),f;if(d)f=___EmotionJSX(Skeleton,{active:!0});else{var p=Object.keys(x).sort(function(C,M){return Number(M)-Number(C)});f=p.length?___EmotionJSX(Tabs,null,p.map(function(C){return ___EmotionJSX(Tabs.TabPane,{tab:"".concat(C).concat(o?" \u5E74":""),key:C},___EmotionJSX("table",null,___EmotionJSX("tbody",null,___EmotionJSX("tr",null,___EmotionJSX(s,{name:___EmotionJSX(FormattedMessage,{id:"app.docs.resource.design"}),data:x[C].design,authors:v}),___EmotionJSX(s,{name:___EmotionJSX(FormattedMessage,{id:"app.docs.resource.develop"}),data:x[C].develop,authors:v})))))})):null}return ___EmotionJSX("div",{id:"articles",css:m.articles},f)}},16846:function(W,R,e){var T=e(27424),J=e.n(T),O=e(62435),B=e(52180),w=e(2559);function A(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var P={name:"1rmwczg",styles:"margin:0 20px 20px;color:#697b8c;font-size:14px;line-height:22px"},D={name:"6nm2f1",styles:"margin:16px 20px 8px;color:#0d1a26;font-size:20px;line-height:28px"},y={name:"1i5lwbl",styles:"position:absolute;top:8px;right:8px;padding:4px 8px;color:#fff;font-size:12px;line-height:1;background:rgba(0, 0, 0, 0.65);border-radius:1px;box-shadow:0 0 2px rgba(255, 255, 255, 0.2);display:inline-flex;column-gap:4px"},E={name:"12391av",styles:"width:calc(100% + 2px);max-width:none;height:184px;margin:-1px -1px 0;object-fit:cover"},l=function(){var n=useSiteToken(),a=n.token,t=a.boxShadowSecondary;return{card:css("position:relative;display:flex;flex-direction:column;height:100%;color:inherit;list-style:none;border:1px solid #e6e6e6;border-radius:2px;cursor:pointer;transition:box-shadow 0.3s;&:hover{box-shadow:",t,";}",""),image:E,badge:y,title:D,description:P}},s={cn:{official:"\u5B98\u65B9",thirdPart:"\u975E\u5B98\u65B9",thirdPartDesc:"\u975E\u5B98\u65B9\u4EA7\u54C1\uFF0C\u8BF7\u81EA\u884C\u786E\u8BA4\u53EF\u7528\u6027"},en:{official:"Official",thirdPart:"Third Part",thirdPartDesc:"Unofficial product, please take care confirm availability"}},c=function(n){var a=n.resource,t=l(),r=useLocale(s),k=_slicedToArray(r,1),u=k[0],v=a.title,d=a.description,m=a.cover,x=a.src,f=a.official,p=null,C=v,M=v.match(/(.*)(#[\dA-Fa-f]{6})/);return M&&(C=M[1].trim(),p=M[2]),___EmotionJSX(Col,{xs:24,sm:12,md:8,lg:6,style:{padding:12}},___EmotionJSX("a",{css:t.card,target:"_blank",href:x,rel:"noreferrer"},___EmotionJSX("img",{css:t.image,src:m,alt:C,style:p?{backgroundColor:p}:{}}),f?___EmotionJSX("div",{css:t.badge},u.official):___EmotionJSX(Tooltip,{title:u.thirdPartDesc},___EmotionJSX("div",{css:t.badge},___EmotionJSX(ExclamationCircleOutlined,null),u.thirdPart)),___EmotionJSX("p",{css:t==null?void 0:t.title},C),___EmotionJSX("p",{css:t.description},d)))},i=function(n){var a=n.resources;return ___EmotionJSX(Row,{style:{margin:"-12px -12px 0 -12px"}},a.map(function(t){return ___EmotionJSX(c,{resource:t,key:t==null?void 0:t.title})}))},_=null},73024:function(W,R,e){var T=e(27424),J=e.n(T),O=e(62435),B=e(97501),w=e(2559),A=e(52180),P=e(63942),D=(0,B.Z)(),y={cn:{token:"Token \u540D\u79F0",description:"\u63CF\u8FF0",type:"\u7C7B\u578B",value:"\u9ED8\u8BA4\u503C"},en:{token:"Token Name",description:"Description",type:"Type",value:"Default Value"}},E=function(){var _=useSiteToken(),o=_.token;return{codeSpan:css("margin:0 1px;padding:0.2em 0.4em;font-size:0.9em;background:",o.siteMarkdownCodeBg,";border:1px solid ",o.colorSplit,";border-radius:3px;font-family:monospace;","")}};function l(){var i=useLocale(y),_=_slicedToArray(i,1),o=_[0],n=E();return[{title:o.token,key:"name",dataIndex:"name"},{title:o.description,key:"desc",dataIndex:"desc"},{title:o.type,key:"type",dataIndex:"type",render:function(t,r){return ___EmotionJSX("span",{css:n.codeSpan},r.type)}},{title:o.value,key:"value",render:function(t,r){var k=typeof r.value=="string"&&(r.value.startsWith("#")||r.value.startsWith("rgb"));return k?___EmotionJSX(ColorChunk,{color:r.value},r.value):typeof r.value!="string"?JSON.stringify(r.value):r.value}}]}var s=function(_){var o=_.type,n=useLocale(y),a=_slicedToArray(n,2),t=a[1],r=l(),k=React.useMemo(function(){return Object.entries(tokenMeta).filter(function(u){var v=_slicedToArray(u,2),d=v[1];return d.source===o}).map(function(u){var v=_slicedToArray(u,2),d=v[0],m=v[1];return{name:d,desc:t==="cn"?m.desc:m.descEn,type:m.type,value:D[d]}})},[o,t]);return ___EmotionJSX(Table,{dataSource:k,columns:r,pagination:!1,bordered:!0})},c=null},37472:function(W,R,e){var T=e(62435),J=e(16397),O=e(44908),B=e(27424),w=e(74855),A=function(l){var s=l.color,c=l.index,i=l.dark,_=useMemo(function(){var o={default:["#fff","unset"],dark:["#314659","#fff"]},n=i?o.dark:o.default,a=_slicedToArray(n,2),t=a[0],r=a[1];return{background:s,color:c>5?t:r,fontWeight:c===6?"bold":"normal"}},[s,i,c]);return ___EmotionJSX(CopyToClipboard,{text:s,onCopy:function(){return message.success("Copied: ".concat(s))}},___EmotionJSX("div",{className:"main-color-item",style:_},"color-",c,___EmotionJSX("span",{className:"main-color-value"},s.toLowerCase())))},P=null,D=function(l){var s=l.color,c=l.dark,i=l.backgroundColor,_=generate(s,c?{theme:"dark",backgroundColor:i}:{});return uniq(_).map(function(o,n){return ___EmotionJSX(ColorBlock,{color:o,index:n+1,dark:c,key:o})})},y=null},34081:function(W,R,e){var T=e(27424),J=e.n(T),O=e(62435),B=e(713),w=function(){},A=function(y){var E=y.small,l=y.position,s=l===void 0?"bottom":l,c=y.presetColors,i=y.onChange,_=i===void 0?w:i,o=y.onChangeComplete,n=o===void 0?w:o,a=useState(y.color),t=_slicedToArray(a,2),r=t[0],k=t[1],u=useState(!1),v=_slicedToArray(u,2),d=v[0],m=v[1],x=function(){m(function(N){return!N})},f=function(){m(!1)},p=function(N){k(N.hex),_(N.hex,N)},C=function(N){k(N.hex),n(N.hex)},M=E?80:120,X={color:{width:"".concat(M,"px"),height:E?"16px":"24px",borderRadius:"2px",background:r},swatch:{padding:"4px",background:"#fff",borderRadius:"2px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:10},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"},wrapper:{position:"inherit",zIndex:100}};s==="top"&&(X.wrapper.transform="translate(calc(-100% + ".concat(M+8,"px), -100%)"),X.wrapper.paddingBottom=8);var U=___EmotionJSX("div",{style:X.swatch,onClick:x},___EmotionJSX("div",{style:X.color})),F=d?___EmotionJSX("div",{style:X.popover},___EmotionJSX("div",{style:X.cover,onClick:f}),___EmotionJSX("div",{style:X.wrapper},___EmotionJSX(SketchPicker,{presetColors:c,color:r,onChange:p,onChangeComplete:C}))):null;return s==="top"?___EmotionJSX("div",null,F,U):___EmotionJSX("div",null,U,F)},P=null},63379:function(W,R,e){var T=e(27424),J=e.n(T),O=e(16397),B=e(62435),w=e(74855),A=e.n(w),P=function(l){var s=l.match(/\d+/g),c=parseInt(s[0],10).toString(16),i=parseInt(s[1],10).toString(16),_=parseInt(s[2],10).toString(16);return c=c.length===1?"0".concat(c):c,i=i.length===1?"0".concat(i):i,_=_.length===1?"0".concat(_):_,"#".concat(c).concat(i).concat(_)},D=function(l){var s=l.showTitle,c=l.direction,i=l.dark,_=l.color,o=_===void 0?{name:"gray",count:13}:_,n=o.name,a=o.count,t=a===void 0?10:a,r=o.description,k=o.english,u=o.chinese,v=React.useState({}),d=_slicedToArray(v,2),m=d[0],x=d[1],f=React.useRef({});useEffect(function(){var te={};Object.keys(f.current||{}).forEach(function(S){var h=getComputedStyle(f.current[S])["background-color"];h.includes("rgba")?te[S]=h:te[S]=P(h)}),x(te)},[]);for(var p=c==="horizontal"?"color-palette-horizontal":"color-palette",C=[],M="".concat(k," / ").concat(u),X={dark:["#fff","unset"],default:["rgba(0,0,0,0.85)","#fff"]},U=i?X.dark:X.default,F=_slicedToArray(U,2),$=F[0],N=F[1],ae=function(S){var h="".concat(n,"-").concat(S),I=i?presetDarkPalettes[n][S-1]:"";C.push(___EmotionJSX(CopyToClipboard,{text:m[h],onCopy:function(){return message.success("@".concat(h," copied: ").concat(m[h]))},key:h},___EmotionJSX("div",{key:S,ref:function(H){f.current["".concat(n,"-").concat(S)]=H},className:"main-color-item palette-".concat(n,"-").concat(S),style:{color:(n==="yellow"?S>6:S>5)?N:$,fontWeight:S===6?"bold":"normal",backgroundColor:I},title:"click to copy color"},___EmotionJSX("span",{className:"main-color-text"},h),___EmotionJSX("span",{className:"main-color-value"},m[h]))))},re=1;re<=t;re+=1)ae(re);return ___EmotionJSX("div",{className:p},s&&___EmotionJSX("div",{className:"color-title"},M,___EmotionJSX("span",{className:"color-description"},r)),___EmotionJSX("div",{className:"main-color"},C))},y=null},24229:function(W,R,e){var T=e(62435),J=(0,T.createContext)({});R.Z=J}}]);
