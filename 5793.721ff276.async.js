"use strict";(self.webpackChunkgit_home=self.webpackChunkgit_home||[]).push([[5793],{35793:function(Q,D,e){e.r(D),e.d(D,{default:function(){return J}});var f=e(27424),I=e.n(f),O=e(62435),A=e(48165),L=e(22174),s=e(26713),c=e(69814),W=e(93531),y=e(11894),B=e(99138),U=e(48997),R=e(51904),S=e(91978),x=e(27484),r=e.n(x),M=e(63783),p=e(9559),C=e(23632),t=e(70917),m=e(52180),K=e(2559),N=e(38199),F=e(33494);function V(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var Y="Ant Design 5.0 use CSS-in-JS technology to provide dynamic & mix theme ability. And which use component level CSS-in-JS solution get your application a better performance.",b="Ant Design 5.0 \u4F7F\u7528 CSS-in-JS \u6280\u672F\u4EE5\u63D0\u4F9B\u52A8\u6001\u4E0E\u6DF7\u5408\u4E3B\u9898\u7684\u80FD\u529B\u3002\u4E0E\u6B64\u540C\u65F6\uFF0C\u6211\u4EEC\u4F7F\u7528\u7EC4\u4EF6\u7EA7\u522B\u7684 CSS-in-JS \u89E3\u51B3\u65B9\u6848\uFF0C\u8BA9\u4F60\u7684\u5E94\u7528\u83B7\u5F97\u66F4\u597D\u7684\u6027\u80FD\u3002",j={cn:{yesterday:"\u6628\u5929",lastWeek:"\u4E0A\u5468",lastMonth:"\u4E0A\u6708",lastYear:"\u53BB\u5E74",new:"\u65B0\u589E",update:"\u66F4\u65B0",sampleContent:b,inProgress:"\u8FDB\u884C\u4E2D",success:"\u6210\u529F",taskFailed:"\u4EFB\u52A1\u5931\u8D25",tour:"\u6F2B\u6E38\u5BFC\u89C8\u5E2E\u52A9\u7528\u6237\u5BF9\u65B0\u52A0\u7684\u529F\u80FD\u8FDB\u884C\u5FEB\u901F\u4E86\u89E3"},en:{yesterday:"Yesterday",lastWeek:"Last Week",lastMonth:"Last Month",lastYear:"Last Year",new:"New",update:"Update",sampleContent:Y,inProgress:"In Progress",success:"Success",taskFailed:"Task Failed",tour:"A quick guide for new come user about how to use app."}},k={name:"vo4t8w",styles:"height:395px"},z={name:"zo0vrf",styles:"position:absolute;width:120px;height:120px;background:#1677ff;border-radius:50%;filter:blur(40px);opacity:0.1"},G=function(){var E=(0,m.Z)(),l=E.token,v=(0,F.useCarouselStyle)(),Z=v.carousel;return{card:(0,t.iv)("border-radius:",l.borderRadius,"px;background:#f5f8ff;padding:",l.paddingXL,"px;flex:none;overflow:hidden;position:relative;display:flex;flex-direction:column;align-items:stretch;>*{flex:none;}",""),cardCircle:z,mobileCard:k,carousel:Z}};function J(){var h=(0,m.Z)(),E=h.token,l=G(),v=(0,K.Z)(j),Z=I()(v,1),n=Z[0],w=(0,O.useContext)(N.Z),d=w.isMobile,g=O.useMemo(function(){return[{title:"Modal",type:"update",node:(0,t.tZ)(A.Z._InternalPanelDoNotUseOrYouWillBeFired,{title:"Ant Design 5.0",width:300},n.sampleContent)},{title:"DatePicker",type:"update",node:(0,t.tZ)(L.Z._InternalPanelDoNotUseOrYouWillBeFired,{showToday:!1,presets:d?[]:[{label:n.yesterday,value:r()().add(-1,"d")},{label:n.lastWeek,value:r()().add(-7,"d")},{label:n.lastMonth,value:r()().add(-1,"month")},{label:n.lastYear,value:r()().add(-1,"year")}],value:r()("2022-11-18 14:00:00")})},{title:"Progress",type:"update",node:(0,t.tZ)(s.Z,{direction:"vertical"},(0,t.tZ)(s.Z,null,(0,t.tZ)(c.Z,{type:"circle",trailColor:"#e6f4ff",percent:60,size:14}),n.inProgress),(0,t.tZ)(s.Z,null,(0,t.tZ)(c.Z,{type:"circle",percent:100,size:14}),n.success),(0,t.tZ)(s.Z,null,(0,t.tZ)(c.Z,{type:"circle",status:"exception",percent:88,size:14}),n.taskFailed))},{title:"Tour",type:"new",node:(0,t.tZ)(W.Z._InternalPanelDoNotUseOrYouWillBeFired,{title:"Ant Design 5.0",description:n.tour,style:{width:d?"auto":350},current:3,total:9})},{title:"FloatButton",type:"new",node:(0,t.tZ)(s.Z,{size:"large"},(0,t.tZ)(y.Z._InternalPanelDoNotUseOrYouWillBeFired,{shape:"square",items:[{icon:(0,t.tZ)(M.Z,null)},{icon:(0,t.tZ)(p.Z,null)},{icon:(0,t.tZ)(C.Z,null)}]}),(0,t.tZ)(y.Z._InternalPanelDoNotUseOrYouWillBeFired,{backTop:!0}),(0,t.tZ)(y.Z._InternalPanelDoNotUseOrYouWillBeFired,{items:[{icon:(0,t.tZ)(M.Z,null)},{icon:(0,t.tZ)(p.Z,null)},{icon:(0,t.tZ)(C.Z,null)}]}))},{title:"Alert",type:"update",node:(0,t.tZ)(B.Z,{style:{width:400},message:"Ant Design 5.0",description:n.sampleContent,closable:!0})}]},[d]),T=function(o){var _=o.title,u=o.node,i=o.type,P=o.index,X=i==="new"?"processing":"warning",H=i==="new"?n.new:n.update;return(0,t.tZ)("div",{key:P,css:[l.card,d&&l.mobileCard,"",""]},(0,t.tZ)("div",{css:l.cardCircle,style:{right:P%2*-20-20,bottom:P%3*-40-20}}),(0,t.tZ)(s.Z,null,(0,t.tZ)(U.Z.Title,{level:4,style:{fontWeight:"normal",margin:0}},_),(0,t.tZ)(R.Z,{color:X},H)),(0,t.tZ)("div",{style:{marginTop:E.paddingLG,flex:"auto",display:"flex",alignItems:"center",justifyContent:"center"}},u))};return d?(0,t.tZ)("div",{style:{margin:"0 16px"}},(0,t.tZ)(S.Z,{css:l.carousel},g.map(function(a,o){var _=a.title,u=a.node,i=a.type;return(0,t.tZ)(T,{title:_,node:u,type:i,index:o,key:o})}))):(0,t.tZ)("div",{style:{width:"100%",overflow:"hidden",display:"flex",justifyContent:"center"}},(0,t.tZ)("div",{style:{display:"flex",alignItems:"stretch",columnGap:E.paddingLG}},g.map(function(a,o){var _=a.title,u=a.node,i=a.type;return(0,t.tZ)(T,{title:_,node:u,type:i,index:o,key:o})})))}}}]);
