(self.webpackChunklite=self.webpackChunklite||[]).push([[8127],{42440:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=r.createElement("g",{fillRule:"evenodd"},r.createElement("path",{d:"M4.13 12.21a15.4 15.4 0 0 1-2.54-2.28 6.61 6.61 0 0 1-.16-.2l-.25-.3.25-.3a13.08 13.08 0 0 1 .63-.7 15.4 15.4 0 0 1 1.7-1.51C5.55 5.54 7.5 4.7 9.51 4.7c.62 0 1.28.13 1.98.37l-.8.78a4.54 4.54 0 0 0-1.18-.18c-1.76 0-3.52.76-5.18 2.02-.58.45-1.12.93-1.58 1.41-.28.3-.28.36 0 .65a14.43 14.43 0 0 0 2.08 1.77l-.71.7zm3.05 1.57a6.32 6.32 0 0 0 4.61-.11c1-.38 2.04-.98 3.1-1.72a25.27 25.27 0 0 0 2.68-2.17l.37-.35-.37-.36a23.05 23.05 0 0 0-.76-.68 25.26 25.26 0 0 0-2.28-1.73l-.72.7a24.05 24.05 0 0 1 2.37 1.77c.2.17.2.42 0 .59-.57.49-1.2.97-1.84 1.43-1.01.7-2 1.26-2.9 1.61a5.4 5.4 0 0 1-1.92.42A6.6 6.6 0 0 1 8 13l-.81.78z"}),r.createElement("path",{d:"M12.05 9.06a2.68 2.68 0 0 1-2.7 3A2.74 2.74 0 0 1 9 12l3.06-2.96zM9.72 6.79a2.83 2.83 0 0 0-.37-.02 2.68 2.68 0 0 0-2.7 3l3.07-2.98zM3.6 14.3l-.35.34.68.7.35-.34 10.4-10.08.36-.34-.68-.7-.35.34z"}));const i=function(e){return r.createElement("svg",a({width:19,height:19,viewBox:"0 0 19 19"},e),o)}},68127:(e,t,n)=>{"use strict";n.d(t,{X:()=>S,Z:()=>I});var r=n(63038),a=n.n(r),o=n(28655),i=n.n(o),l=n(71439),c=n(67294),s=n(70561),u=n(47875),m=n(65340),p=n(88065),d=n(29355),f=n(76188),g=n(65922),h=n(89894),x=n(80735),E=n(72955),v=n(27952);function P(){var e=i()(["\n  fragment PostListingItemRecirc_post on Post {\n    __typename\n    id\n    title\n    isLocked\n    previewImage {\n      id\n      focusPercentX\n      focusPercentY\n    }\n    ...PostByline_post\n    ...PostPresentationTracker_post\n    ...BookmarkButton_post\n    ...MultiVote_post\n    ...PostRecircItemV2_post\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return P=function(){return e},e}var S=(0,l.Ps)(P(),u.H,E.h_,p.z,d.x,m.D),_=function(e){var t=e.height,n=e.width;return{paddingBottom:"".concat(t/n*100,"%"),position:"relative"}},w={height:"100%",position:"absolute",width:"100%"},y=function(e){var t=e.title,n=e.url;return c.createElement(h.P3,{href:n},c.createElement(x.Dx,{scale:"S",tag:"h3"},t))};const I=(0,s.$j)((function(e){return{productName:e.config.productName}}))((function(e){var t,n,r=e.post,o=e.productName,i=e.target,l=c.useState(!1),s=a()(l,2),m=s[0],P=s[1],S=c.useCallback((function(e){!m&&e.isIntersecting&&P(!0)}),[m]);if((0,E.S1)({onIntersect:S,target:i,disconnect:function(){return m},rootMargin:"100px"},[m]),"SuggestedPost"===r.__typename?(t=function(e,t){var n,r,a,o;switch(e&&e[0]&&e[0].reason){case"TOP_SIMILAR_TO_POST":case"CF_POST_SIMILAR_TO_POST":return"Related reads";case"TOP_IN_TOPIC":return o=e[0].topics?e[0].topics[0].name:"topic","Popular in ".concat(o);case"POSTS_SHARING_AUTHOR":return n=e[0].users?e[0].users[0].name:"author","More from ".concat(n);case"POSTS_SHARING_TAGS":return(a=e[0].tags&&e[0].tags[0].name)?"Also tagged ".concat(a):"";case"TOP_IN_COLLECTION":return r=e[0].collections?e[0].collections[0].name:"publication","More from ".concat(r);case"TOP_FOR_THE_DAY_GLOBALLY":return"Top on ".concat(t);case"POSTS_SHARING_COLLECTION_AND_TAGS":return a=e[0].tags&&e[0].tags[0].name,r=e[0].collections?e[0].collections[0].name:"publication",a?"More on ".concat(a," from ").concat(r):"";case"RECOMMENDED_BY_AUTHOR":return(n=e[0].users&&e[0].users[0].name)?"Applause from ".concat(n):"";case"TOP_FOR_THE_DAY":return"Trending on ".concat(t);default:return"Picked for you"}}(r.postSuggestionReasons,o),n=r.post):n=r,!n)return null;var I,T,R,b,A,B,O,L=(I={id:(n.previewImage?n.previewImage.id:"")||"1*hn4v1tCaJy7cWMyb0bpNpQ.png",width:328,height:218,focusPercentX:n.previewImage?n.previewImage.focusPercentX:null,focusPercentY:n.previewImage?n.previewImage.focusPercentY:null},b=I.width,A=I.height,B=I.focusPercentX,O=I.focusPercentY,(R=I.id)?(T="number"==typeof B&&"number"==typeof O?[B,O]:[50,50],c.createElement(h.hS,null,(function(e){return c.createElement("div",{className:e(_({height:A,width:b}))},c.createElement("div",{className:e(w)},c.createElement(g.Z,{miroId:R,imgHeight:A,imgWidth:b,width:"100%",height:"100%",freezeGifs:!1,focusPercent:T})))}))):null);return c.createElement(E.ot,{post:n,presentationContext:"PLACEMENT"},c.createElement(h.xu,{md:{marginBottom:"48px"}},c.createElement(h.T5,{alignItems:{xs:"flex-start",sm:"center",md:"center",lg:"flex-start",xl:"flex-start"},direction:{xs:"row",sm:"row-reverse",md:"row-reverse",lg:"row",xl:"row"}},c.createElement(h.P4,{size:{xs:12,sm:6,md:6,lg:12,xl:12}},t&&c.createElement(h.xu,{marginBottom:"12px",md:{display:"none"},xs:{display:"block"}},c.createElement(x.F,{scale:"M"},t)),L&&c.createElement(h.xu,{marginBottom:"16px",md:{marginBottom:"0px"},xs:{marginBottom:"16px"}},c.createElement(h.rU,{display:"block",href:(0,v.jV)(n)},m?L:null))),c.createElement(h.P4,{size:{xs:12,sm:6,md:6,lg:12,xl:12}},c.createElement(h.xu,{marginBottom:"16px"},t&&c.createElement(h.xu,{display:"none",marginBottom:"4px",md:{display:"block"},xs:{display:"none"}},c.createElement(x.F,{scale:"M"},t)),c.createElement(y,{title:n.title?n.title:"",url:(0,v.jV)(n)})),c.createElement(h.xu,{display:"flex",alignItems:"center",justifyContent:"space-between"},c.createElement(h.xu,{flexShrink:"1",marginRight:"10px"},c.createElement(f.Z,{name:"remove_stars_ui"},(function(e){return c.createElement(u.Z,{post:n,showBio:!1,scale:"S",showStar:!e&&!!n.isLocked,hideAvatar:!m})}))),c.createElement(h.xu,{display:"flex",alignItems:"center"},c.createElement(d.S,{post:n,buttonStyle:"SUBTLE",susiEntry:"clap_preview"}),c.createElement(h.xu,{borderRight:"BASE_LIGHTER",marginLeft:"12px",marginRight:"10px",height:"20px",width:"1px"}),c.createElement(p.e,{post:n,susiEntry:"bookmark_preview"})))))))}))},47875:(e,t,n)=>{"use strict";n.d(t,{H:()=>D,Z:()=>X});var r=n(28655),a=n.n(r),o=n(34575),i=n.n(o),l=n(93913),c=n.n(l),s=n(2205),u=n.n(s),m=n(78585),p=n.n(m),d=n(29754),f=n.n(d),g=n(59713),h=n.n(g),x=n(71439),E=n(67294),v=n(70561),P=n(95482),S=n(9292),_=n(98281),w=n(31001),y=n(89894),I=n(42933),T=n(62240),R=n(80637),b=n(7650),A=n(42440),B=n(27390),O=n(27952);function L(){var e=a()(["\n  fragment PostByline_post on Post {\n    id\n    isPublished\n    mediumUrl\n    firstPublishedAt\n    readingTime\n    statusForCollection\n    isLocked\n    isShortform\n    visibility\n    collection {\n      name\n      id\n      slug\n      ...collectionUrl_collection\n    }\n    creator {\n      name\n      username\n      id\n      bio\n      isFollowing\n      ...UserAvatar_user\n    }\n  }\n  ","\n  ","\n"]);return L=function(){return e},e}var C={XS:{showFollowButton:!1,avatarScale:"XS"},S:{showFollowButton:!1,avatarScale:"S"},M:{showFollowButton:!0,avatarScale:"M"}},k=function(e,t){return h()({marginBottom:e?"2px":"0px",display:"flex",alignItems:"center"},R.xs(t),{marginBottom:"0px"})},M=function(e){u()(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=f()(t);if(n){var a=f()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return p()(this,e)});function a(){return i()(this,a),r.apply(this,arguments)}return c()(a,[{key:"render",value:function(){var e=this,t=this.props,n=t.currentLocation,r=t.post,a=t.showBio,o=t.scale,i=void 0===o?"M":o,l=t.detailScale,c=void 0===l?"M":l,s=t.showStar,u=void 0===s?r.isLocked:s,m=t.hideCollection,p=void 0!==m&&m,d=t.hideAvatar,f=void 0!==d&&d,g=t.hideDescription,h=void 0!==g&&g,x=t.noClamp,v=void 0!==x&&x,R=r.id,L=r.creator,M=r.collection,D=r.statusForCollection,X=r.visibility,N=r.isPublished,F=C[i];if(!r||!R||!L)return null;var Y=r.firstPublishedAt,Z=L.username,U=L.name;if(!U||!Z)return null;var H=E.createElement(_.ZP,{user:L,scale:F.avatarScale,link:!0}),j=a?E.createElement("div",null,L.bio):null,z="APPROVED"===D,G=F.showFollowButton?E.createElement(I.Z,{marginLeft:"8px",xs:{display:"none"},flexShrink:"0"},E.createElement(w.Bv,{user:L,buttonSize:"COMPACT",susiEntry:"follow_byline"})):null,V=E.createElement(y.hS,null,(function(t){return E.createElement(y.Yi,null,(function(r){return E.createElement("div",{className:t(k(F.showFollowButton,r))},E.createElement(T.F,{scale:c,tag:"span",color:"DARKER",clamp:v?void 0:1},E.createElement(y.rU,{href:(0,O.AW)(Z,e.props.authDomain,L.hasDomain),inline:!0},U),M&&z&&!p?E.createElement("span",null," ","in"," ",E.createElement(y.rU,{href:(0,O.WG)(M,n,e.props.authDomain),inline:!0},M.name)):null),G)}))})),W=E.createElement(T.F,{scale:c,tag:"span",clamp:1},j,E.createElement("div",null,N?E.createElement(y.rU,{href:(0,O.jV)(r),inline:!0},Y&&E.createElement(P.Z,{timestamp:Y})):E.createElement("span",null,"Draft")," ","·"," ","UNLISTED"===X?E.createElement(T.F,{scale:"S",tag:"span"},E.createElement(A.Z,null)," Unlisted"):E.createElement(E.Fragment,null,(0,B.Vd)(r.readingTime||0)," min read"),u&&E.createElement("span",{style:{paddingLeft:"4px"}},E.createElement(b.Z,{style:{marginTop:"-2px"}}))));return E.createElement(S.Y,{avatar:!f&&H,title:V,description:!h&&W})}}]),a}(E.Component),D=(0,x.Ps)(L(),_.WQ,O.nf);const X=(0,v.$j)((function(e){return{currentLocation:e.navigation.currentLocation,authDomain:e.config.authDomain}}))(M)},65340:(e,t,n)=>{"use strict";n.d(t,{D:()=>v,Z:()=>P});var r=n(67154),a=n.n(r),o=n(28655),i=n.n(o),l=n(71439),c=n(67294),s=n(70561),u=n(47875),m=n(76188),p=n(61889),d=n(89894),f=n(80735),g=n(72955),h=n(90038),x=n(27952);function E(){var e=i()(["\n  fragment PostRecircItemV2_post on Post {\n    __typename\n    id\n    title\n    mediumUrl\n    previewImage {\n      id\n      focusPercentX\n      focusPercentY\n    }\n    ...PostByline_post\n    ...PostPresentationTracker_post\n  }\n  ","\n  ","\n"]);return E=function(){return e},e}var v=(0,l.Ps)(E(),u.H,g.h_);const P=(0,s.$j)((function(e){return{defaultImages:e.config.defaultImages}}))((function(e){var t,n=e.post,r=e.defaultImages,o=(null==n?void 0:n.post)||n;if(!o)return null;var i,l,s,E,v=o.title,P=o.previewImage,S=null==r||null===(t=r.postPreviewImage)||void 0===t?void 0:t.imageId,_=(s=(i={id:(null==P?void 0:P.id)||S,focusPercentX:null==P?void 0:P.focusPercentX,focusPercentY:null==P?void 0:P.focusPercentY}).focusPercentX,E=i.focusPercentY,(l=i.id)?c.createElement(p.Z,{miroId:l,freezeGifs:!1,focusPercentX:s,focusPercentY:E,strategy:h._S.Crop,width:70,height:70,otherWidths:[48,70],expectedWidth:70,rules:[{minWidth:{xs:"48px",sm:"48px",md:"48px",lg:"70px",xl:"70px"},minHeight:{xs:"48px",sm:"48px",md:"48px",lg:"70px",xl:"70px"}}]}):null);return c.createElement(g.ot,{post:o,presentationContext:"PLACEMENT"},c.createElement(d.xu,{display:"flex",justifyContent:"space-between"},c.createElement(d.xu,{flexShrink:"1",xs:{marginRight:"16px"},sm:{marginRight:"16px"},md:{marginRight:"16px"}},c.createElement(d.xu,{paddingBottom:"8px"},c.createElement(f.X6,{scale:{xs:"XXS",sm:"XXS",md:"XXS",lg:"XS",xl:"XS"}},c.createElement(d.P3,{href:(0,x.jV)(o)},v))),c.createElement(m.Z,{name:"remove_stars_ui"},(function(e){return c.createElement(c.Fragment,null,c.createElement(u.Z,{post:o,showBio:!1,scale:"S",detailScale:"S",showStar:!e&&!!o.isLocked,hideAvatar:!0,hideDescription:!0,noClamp:!0}))}))),_&&c.createElement(d.xu,a()({marginLeft:"12px",marginRight:"8px"},{sm:{marginLeft:"16px",marginRight:"0px"}}),c.createElement(d.rU,{display:"block",href:(0,x.jV)(o)},_))))}))}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8127.1f4e56da.chunk.js.map