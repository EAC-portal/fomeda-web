"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5913],{35913:function(t,n,o){o.d(n,{Z:function(){return j}});var a=o(2265),c=o(46622),e=o(47964),i=o(56115),r=o(56800),l=o.n(r),d=o(90550),s=o(38750),u=o(68059),p=o(91531),b=o(61865);let v={motionAppear:!1,motionEnter:!0,motionLeave:!0};var g=o(68753),h=function(t,n){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&0>n.indexOf(a)&&(o[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,a=Object.getOwnPropertySymbols(t);c<a.length;c++)0>n.indexOf(a[c])&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(o[a[c]]=t[a[c]]);return o},m=o(32920),f=o(98170),_=o(75600),k=o(73204),S=o(51380),x=t=>{let{componentCls:n,motionDurationSlow:o}=t;return[{[n]:{["".concat(n,"-switch")]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:"opacity ".concat(o)}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:"opacity ".concat(o)}}}}},[(0,S.oN)(t,"slide-up"),(0,S.oN)(t,"slide-down")]]};let w=t=>{let{componentCls:n,tabsCardPadding:o,cardBg:a,cardGutter:c,colorBorderSecondary:e,itemSelectedColor:i}=t;return{["".concat(n,"-card")]:{["> ".concat(n,"-nav, > div > ").concat(n,"-nav")]:{["".concat(n,"-tab")]:{margin:0,padding:o,background:a,border:"".concat((0,m.unit)(t.lineWidth)," ").concat(t.lineType," ").concat(e),transition:"all ".concat(t.motionDurationSlow," ").concat(t.motionEaseInOut)},["".concat(n,"-tab-active")]:{color:i,background:t.colorBgContainer},["".concat(n,"-ink-bar")]:{visibility:"hidden"}},["&".concat(n,"-top, &").concat(n,"-bottom")]:{["> ".concat(n,"-nav, > div > ").concat(n,"-nav")]:{["".concat(n,"-tab + ").concat(n,"-tab")]:{marginLeft:{_skip_check_:!0,value:(0,m.unit)(c)}}}},["&".concat(n,"-top")]:{["> ".concat(n,"-nav, > div > ").concat(n,"-nav")]:{["".concat(n,"-tab")]:{borderRadius:"".concat((0,m.unit)(t.borderRadiusLG)," ").concat((0,m.unit)(t.borderRadiusLG)," 0 0")},["".concat(n,"-tab-active")]:{borderBottomColor:t.colorBgContainer}}},["&".concat(n,"-bottom")]:{["> ".concat(n,"-nav, > div > ").concat(n,"-nav")]:{["".concat(n,"-tab")]:{borderRadius:"0 0 ".concat((0,m.unit)(t.borderRadiusLG)," ").concat((0,m.unit)(t.borderRadiusLG))},["".concat(n,"-tab-active")]:{borderTopColor:t.colorBgContainer}}},["&".concat(n,"-left, &").concat(n,"-right")]:{["> ".concat(n,"-nav, > div > ").concat(n,"-nav")]:{["".concat(n,"-tab + ").concat(n,"-tab")]:{marginTop:(0,m.unit)(c)}}},["&".concat(n,"-left")]:{["> ".concat(n,"-nav, > div > ").concat(n,"-nav")]:{["".concat(n,"-tab")]:{borderRadius:{_skip_check_:!0,value:"".concat((0,m.unit)(t.borderRadiusLG)," 0 0 ").concat((0,m.unit)(t.borderRadiusLG))}},["".concat(n,"-tab-active")]:{borderRightColor:{_skip_check_:!0,value:t.colorBgContainer}}}},["&".concat(n,"-right")]:{["> ".concat(n,"-nav, > div > ").concat(n,"-nav")]:{["".concat(n,"-tab")]:{borderRadius:{_skip_check_:!0,value:"0 ".concat((0,m.unit)(t.borderRadiusLG)," ").concat((0,m.unit)(t.borderRadiusLG)," 0")}},["".concat(n,"-tab-active")]:{borderLeftColor:{_skip_check_:!0,value:t.colorBgContainer}}}}}}},y=t=>{let{componentCls:n,itemHoverColor:o,dropdownEdgeChildVerticalPadding:a}=t;return{["".concat(n,"-dropdown")]:Object.assign(Object.assign({},(0,f.Wf)(t)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:t.zIndexPopup,display:"block","&-hidden":{display:"none"},["".concat(n,"-dropdown-menu")]:{maxHeight:t.tabsDropdownHeight,margin:0,padding:"".concat((0,m.unit)(a)," 0"),overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:t.colorBgContainer,backgroundClip:"padding-box",borderRadius:t.borderRadiusLG,outline:"none",boxShadow:t.boxShadowSecondary,"&-item":Object.assign(Object.assign({},f.vS),{display:"flex",alignItems:"center",minWidth:t.tabsDropdownWidth,margin:0,padding:"".concat((0,m.unit)(t.paddingXXS)," ").concat((0,m.unit)(t.paddingSM)),color:t.colorText,fontWeight:"normal",fontSize:t.fontSize,lineHeight:t.lineHeight,cursor:"pointer",transition:"all ".concat(t.motionDurationSlow),"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:t.marginSM},color:t.colorTextDescription,fontSize:t.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:o}},"&:hover":{background:t.controlItemBgHover},"&-disabled":{"&, &:hover":{color:t.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},O=t=>{let{componentCls:n,margin:o,colorBorderSecondary:a,horizontalMargin:c,verticalItemPadding:e,verticalItemMargin:i,calc:r}=t;return{["".concat(n,"-top, ").concat(n,"-bottom")]:{flexDirection:"column",["> ".concat(n,"-nav, > div > ").concat(n,"-nav")]:{margin:c,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:"".concat((0,m.unit)(t.lineWidth)," ").concat(t.lineType," ").concat(a),content:"''"},["".concat(n,"-ink-bar")]:{height:t.lineWidthBold,"&-animated":{transition:"width ".concat(t.motionDurationSlow,", left ").concat(t.motionDurationSlow,",\n            right ").concat(t.motionDurationSlow)}},["".concat(n,"-nav-wrap")]:{"&::before, &::after":{top:0,bottom:0,width:t.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:t.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:t.boxShadowTabsOverflowRight},["&".concat(n,"-nav-wrap-ping-left::before")]:{opacity:1},["&".concat(n,"-nav-wrap-ping-right::after")]:{opacity:1}}}},["".concat(n,"-top")]:{["> ".concat(n,"-nav,\n        > div > ").concat(n,"-nav")]:{"&::before":{bottom:0},["".concat(n,"-ink-bar")]:{bottom:0}}},["".concat(n,"-bottom")]:{["> ".concat(n,"-nav, > div > ").concat(n,"-nav")]:{order:1,marginTop:o,marginBottom:0,"&::before":{top:0},["".concat(n,"-ink-bar")]:{top:0}},["> ".concat(n,"-content-holder, > div > ").concat(n,"-content-holder")]:{order:0}},["".concat(n,"-left, ").concat(n,"-right")]:{["> ".concat(n,"-nav, > div > ").concat(n,"-nav")]:{flexDirection:"column",minWidth:r(t.controlHeight).mul(1.25).equal(),["".concat(n,"-tab")]:{padding:e,textAlign:"center"},["".concat(n,"-tab + ").concat(n,"-tab")]:{margin:i},["".concat(n,"-nav-wrap")]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:t.controlHeight},"&::before":{top:0,boxShadow:t.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:t.boxShadowTabsOverflowBottom},["&".concat(n,"-nav-wrap-ping-top::before")]:{opacity:1},["&".concat(n,"-nav-wrap-ping-bottom::after")]:{opacity:1}},["".concat(n,"-ink-bar")]:{width:t.lineWidthBold,"&-animated":{transition:"height ".concat(t.motionDurationSlow,", top ").concat(t.motionDurationSlow)}},["".concat(n,"-nav-list, ").concat(n,"-nav-operations")]:{flex:"1 0 auto",flexDirection:"column"}}},["".concat(n,"-left")]:{["> ".concat(n,"-nav, > div > ").concat(n,"-nav")]:{["".concat(n,"-ink-bar")]:{right:{_skip_check_:!0,value:0}}},["> ".concat(n,"-content-holder, > div > ").concat(n,"-content-holder")]:{marginLeft:{_skip_check_:!0,value:(0,m.unit)(r(t.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:"".concat((0,m.unit)(t.lineWidth)," ").concat(t.lineType," ").concat(t.colorBorder)},["> ".concat(n,"-content > ").concat(n,"-tabpane")]:{paddingLeft:{_skip_check_:!0,value:t.paddingLG}}}},["".concat(n,"-right")]:{["> ".concat(n,"-nav, > div > ").concat(n,"-nav")]:{order:1,["".concat(n,"-ink-bar")]:{left:{_skip_check_:!0,value:0}}},["> ".concat(n,"-content-holder, > div > ").concat(n,"-content-holder")]:{order:0,marginRight:{_skip_check_:!0,value:r(t.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:"".concat((0,m.unit)(t.lineWidth)," ").concat(t.lineType," ").concat(t.colorBorder)},["> ".concat(n,"-content > ").concat(n,"-tabpane")]:{paddingRight:{_skip_check_:!0,value:t.paddingLG}}}}}},z=t=>{let{componentCls:n,cardPaddingSM:o,cardPaddingLG:a,horizontalItemPaddingSM:c,horizontalItemPaddingLG:e}=t;return{[n]:{"&-small":{["> ".concat(n,"-nav")]:{["".concat(n,"-tab")]:{padding:c,fontSize:t.titleFontSizeSM}}},"&-large":{["> ".concat(n,"-nav")]:{["".concat(n,"-tab")]:{padding:e,fontSize:t.titleFontSizeLG}}}},["".concat(n,"-card")]:{["&".concat(n,"-small")]:{["> ".concat(n,"-nav")]:{["".concat(n,"-tab")]:{padding:o}},["&".concat(n,"-bottom")]:{["> ".concat(n,"-nav ").concat(n,"-tab")]:{borderRadius:"0 0 ".concat((0,m.unit)(t.borderRadius)," ").concat((0,m.unit)(t.borderRadius))}},["&".concat(n,"-top")]:{["> ".concat(n,"-nav ").concat(n,"-tab")]:{borderRadius:"".concat((0,m.unit)(t.borderRadius)," ").concat((0,m.unit)(t.borderRadius)," 0 0")}},["&".concat(n,"-right")]:{["> ".concat(n,"-nav ").concat(n,"-tab")]:{borderRadius:{_skip_check_:!0,value:"0 ".concat((0,m.unit)(t.borderRadius)," ").concat((0,m.unit)(t.borderRadius)," 0")}}},["&".concat(n,"-left")]:{["> ".concat(n,"-nav ").concat(n,"-tab")]:{borderRadius:{_skip_check_:!0,value:"".concat((0,m.unit)(t.borderRadius)," 0 0 ").concat((0,m.unit)(t.borderRadius))}}}},["&".concat(n,"-large")]:{["> ".concat(n,"-nav")]:{["".concat(n,"-tab")]:{padding:a}}}}}},R=t=>{let{componentCls:n,itemActiveColor:o,itemHoverColor:a,iconCls:c,tabsHorizontalItemMargin:e,horizontalItemPadding:i,itemSelectedColor:r,itemColor:l}=t,d="".concat(n,"-tab");return{[d]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:i,fontSize:t.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:l,"&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:o}},(0,f.Qy)(t)),"&-btn":{outline:"none",transition:"all ".concat(t.motionDurationSlow),["".concat(d,"-icon:not(:last-child)")]:{marginInlineEnd:t.marginSM}},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:t.calc(t.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:t.marginXS},color:t.colorTextDescription,fontSize:t.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:"all ".concat(t.motionDurationSlow),"&:hover":{color:t.colorTextHeading}},"&:hover":{color:a},["&".concat(d,"-active ").concat(d,"-btn")]:{color:r,textShadow:t.tabsActiveTextShadow},["&".concat(d,"-disabled")]:{color:t.colorTextDisabled,cursor:"not-allowed"},["&".concat(d,"-disabled ").concat(d,"-btn, &").concat(d,"-disabled ").concat(n,"-remove")]:{"&:focus, &:active":{color:t.colorTextDisabled}},["& ".concat(d,"-remove ").concat(c)]:{margin:0},["".concat(c,":not(:last-child)")]:{marginRight:{_skip_check_:!0,value:t.marginSM}}},["".concat(d," + ").concat(d)]:{margin:{_skip_check_:!0,value:e}}}},L=t=>{let{componentCls:n,tabsHorizontalItemMarginRTL:o,iconCls:a,cardGutter:c,calc:e}=t;return{["".concat(n,"-rtl")]:{direction:"rtl",["".concat(n,"-nav")]:{["".concat(n,"-tab")]:{margin:{_skip_check_:!0,value:o},["".concat(n,"-tab:last-of-type")]:{marginLeft:{_skip_check_:!0,value:0}},[a]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:(0,m.unit)(t.marginSM)}},["".concat(n,"-tab-remove")]:{marginRight:{_skip_check_:!0,value:(0,m.unit)(t.marginXS)},marginLeft:{_skip_check_:!0,value:(0,m.unit)(e(t.marginXXS).mul(-1).equal())},[a]:{margin:0}}}},["&".concat(n,"-left")]:{["> ".concat(n,"-nav")]:{order:1},["> ".concat(n,"-content-holder")]:{order:0}},["&".concat(n,"-right")]:{["> ".concat(n,"-nav")]:{order:0},["> ".concat(n,"-content-holder")]:{order:1}},["&".concat(n,"-card").concat(n,"-top, &").concat(n,"-card").concat(n,"-bottom")]:{["> ".concat(n,"-nav, > div > ").concat(n,"-nav")]:{["".concat(n,"-tab + ").concat(n,"-tab")]:{marginRight:{_skip_check_:!0,value:c},marginLeft:{_skip_check_:!0,value:0}}}}},["".concat(n,"-dropdown-rtl")]:{direction:"rtl"},["".concat(n,"-menu-item")]:{["".concat(n,"-dropdown-rtl")]:{textAlign:{_skip_check_:!0,value:"right"}}}}},I=t=>{let{componentCls:n,tabsCardPadding:o,cardHeight:a,cardGutter:c,itemHoverColor:e,itemActiveColor:i,colorBorderSecondary:r}=t;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,f.Wf)(t)),{display:"flex",["> ".concat(n,"-nav, > div > ").concat(n,"-nav")]:{position:"relative",display:"flex",flex:"none",alignItems:"center",["".concat(n,"-nav-wrap")]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:"opacity ".concat(t.motionDurationSlow),content:"''",pointerEvents:"none"}},["".concat(n,"-nav-list")]:{position:"relative",display:"flex",transition:"opacity ".concat(t.motionDurationSlow)},["".concat(n,"-nav-operations")]:{display:"flex",alignSelf:"stretch"},["".concat(n,"-nav-operations-hidden")]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},["".concat(n,"-nav-more")]:{position:"relative",padding:o,background:"transparent",border:0,color:t.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:t.calc(t.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},["".concat(n,"-nav-add")]:Object.assign({minWidth:a,minHeight:a,marginLeft:{_skip_check_:!0,value:c},padding:"0 ".concat((0,m.unit)(t.paddingXS)),background:"transparent",border:"".concat((0,m.unit)(t.lineWidth)," ").concat(t.lineType," ").concat(r),borderRadius:"".concat((0,m.unit)(t.borderRadiusLG)," ").concat((0,m.unit)(t.borderRadiusLG)," 0 0"),outline:"none",cursor:"pointer",color:t.colorText,transition:"all ".concat(t.motionDurationSlow," ").concat(t.motionEaseInOut),"&:hover":{color:e},"&:active, &:focus:not(:focus-visible)":{color:i}},(0,f.Qy)(t))},["".concat(n,"-extra-content")]:{flex:"none"},["".concat(n,"-ink-bar")]:{position:"absolute",background:t.inkBarColor,pointerEvents:"none"}}),R(t)),{["".concat(n,"-content")]:{position:"relative",width:"100%"},["".concat(n,"-content-holder")]:{flex:"auto",minWidth:0,minHeight:0},["".concat(n,"-tabpane")]:{outline:"none","&-hidden":{display:"none"}}}),["".concat(n,"-centered")]:{["> ".concat(n,"-nav, > div > ").concat(n,"-nav")]:{["".concat(n,"-nav-wrap")]:{["&:not([class*='".concat(n,"-nav-wrap-ping'])")]:{justifyContent:"center"}}}}}};var T=(0,_.I$)("Tabs",t=>{let n=(0,k.TS)(t,{tabsCardPadding:t.cardPadding,dropdownEdgeChildVerticalPadding:t.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:"0 0 0 ".concat((0,m.unit)(t.horizontalItemGutter)),tabsHorizontalItemMarginRTL:"0 0 0 ".concat((0,m.unit)(t.horizontalItemGutter))});return[z(n),L(n),O(n),y(n),w(n),I(n),x(n)]},t=>{let n=t.controlHeightLG;return{zIndexPopup:t.zIndexPopupBase+50,cardBg:t.colorFillAlter,cardHeight:n,cardPadding:"".concat((n-Math.round(t.fontSize*t.lineHeight))/2-t.lineWidth,"px ").concat(t.padding,"px"),cardPaddingSM:"".concat(1.5*t.paddingXXS,"px ").concat(t.padding,"px"),cardPaddingLG:"".concat(t.paddingXS,"px ").concat(t.padding,"px ").concat(1.5*t.paddingXXS,"px"),titleFontSize:t.fontSize,titleFontSizeLG:t.fontSizeLG,titleFontSizeSM:t.fontSize,inkBarColor:t.colorPrimary,horizontalMargin:"0 0 ".concat(t.margin,"px 0"),horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:"".concat(t.paddingSM,"px 0"),horizontalItemPaddingSM:"".concat(t.paddingXS,"px 0"),horizontalItemPaddingLG:"".concat(t.padding,"px 0"),verticalItemPadding:"".concat(t.paddingXS,"px ").concat(t.paddingLG,"px"),verticalItemMargin:"".concat(t.margin,"px 0 0 0"),itemColor:t.colorText,itemSelectedColor:t.colorPrimary,itemHoverColor:t.colorPrimaryHover,itemActiveColor:t.colorPrimaryActive,cardGutter:t.marginXXS/2}}),C=function(t,n){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&0>n.indexOf(a)&&(o[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,a=Object.getOwnPropertySymbols(t);c<a.length;c++)0>n.indexOf(a[c])&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(o[a[c]]=t[a[c]]);return o};let P=t=>{var n,o,r,m,f,_,k,S,x,w,y;let O;let{type:z,className:R,rootClassName:L,size:I,onEdit:P,hideAdd:j,centered:D,addIcon:G,removeIcon:B,moreIcon:W,more:X,popupClassName:E,children:H,items:M,animated:N,style:A,indicatorSize:F,indicator:Z}=t,q=C(t,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","removeIcon","moreIcon","more","popupClassName","children","items","animated","style","indicatorSize","indicator"]),{prefixCls:Q}=q,{direction:V,tabs:Y,getPrefixCls:$,getPopupContainer:J}=a.useContext(s.E_),K=$("tabs",Q),U=(0,u.Z)(K),[tt,tn,to]=T(K,U);"editable-card"===z&&(O={onEdit:(t,n)=>{let{key:o,event:a}=n;null==P||P("add"===t?a:o,t)},removeIcon:null!==(n=null!=B?B:null==Y?void 0:Y.removeIcon)&&void 0!==n?n:a.createElement(c.Z,null),addIcon:(null!=G?G:null==Y?void 0:Y.addIcon)||a.createElement(i.Z,null),showAdd:!0!==j});let ta=$(),tc=(0,p.Z)(I),te=M||(0,g.Z)(H).map(t=>{if(a.isValidElement(t)){let{key:n,props:o}=t,a=o||{},{tab:c}=a,e=h(a,["tab"]);return Object.assign(Object.assign({key:String(n)},e),{label:c})}return null}).filter(t=>t),ti=function(t){let n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(n=!1===o?{inkBar:!1,tabPane:!1}:!0===o?{inkBar:!0,tabPane:!0}:Object.assign({inkBar:!0},"object"==typeof o?o:{})).tabPane&&(n.tabPaneMotion=Object.assign(Object.assign({},v),{motionName:(0,b.m)(t,"switch")})),n}(K,N),tr=Object.assign(Object.assign({},null==Y?void 0:Y.style),A),tl={align:null!==(o=null==Z?void 0:Z.align)&&void 0!==o?o:null===(r=null==Y?void 0:Y.indicator)||void 0===r?void 0:r.align,size:null!==(k=null!==(f=null!==(m=null==Z?void 0:Z.size)&&void 0!==m?m:F)&&void 0!==f?f:null===(_=null==Y?void 0:Y.indicator)||void 0===_?void 0:_.size)&&void 0!==k?k:null==Y?void 0:Y.indicatorSize};return tt(a.createElement(d.default,Object.assign({direction:V,getPopupContainer:J},q,{items:te,className:l()({["".concat(K,"-").concat(tc)]:tc,["".concat(K,"-card")]:["card","editable-card"].includes(z),["".concat(K,"-editable-card")]:"editable-card"===z,["".concat(K,"-centered")]:D},null==Y?void 0:Y.className,R,L,tn,to,U),popupClassName:l()(E,tn,to,U),style:tr,editable:O,more:Object.assign({icon:null!==(y=null!==(w=null!==(x=null===(S=null==Y?void 0:Y.more)||void 0===S?void 0:S.icon)&&void 0!==x?x:null==Y?void 0:Y.moreIcon)&&void 0!==w?w:W)&&void 0!==y?y:a.createElement(e.Z,null),transitionName:"".concat(ta,"-slide-up")},X),prefixCls:K,animated:ti,indicator:tl})))};P.TabPane=()=>null;var j=P}}]);