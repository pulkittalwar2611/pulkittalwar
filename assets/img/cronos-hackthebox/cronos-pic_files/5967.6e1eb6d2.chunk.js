(self.webpackChunklite=self.webpackChunklite||[]).push([[5967],{24631:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=r.createElement("path",{d:"M16.94 1.1A3.7 3.7 0 0 0 14.3 0c-1 0-1.94.39-2.64 1.1L7.43 5.3c-.91.92-2.09 3.2 0 5.27a.75.75 0 0 0 .82.16c.09-.03.17-.09.24-.15a.74.74 0 0 0 0-1.06c-1.16-1.15-.77-2.39-.02-3.16l4.24-4.22a2.2 2.2 0 0 1 1.58-.65c.6 0 1.16.23 1.58.65.86.87.86 2.29 0 3.16L12.7 8.47a.74.74 0 0 0 1.04 1.05l3.17-3.16a3.73 3.73 0 0 0 0-5.27h.03zM9.54 7.4a.74.74 0 0 0 0 1.06c1.16 1.15.76 2.39 0 3.16l-4.22 4.22c-.42.42-.99.65-1.59.65a2.23 2.23 0 0 1-1.58-3.82l3.17-3.16A.73.73 0 0 0 5.54 9a.78.78 0 0 0-.22-.52.77.77 0 0 0-1.05 0L1.1 11.64A3.72 3.72 0 0 0 3.74 18c1 0 1.94-.39 2.65-1.1l4.23-4.2c.21-.22.94-1.02 1.13-2.2.18-1.12-.2-2.15-1.12-3.07-.27-.27-.78-.27-1.06 0l-.02-.02z",clipRule:"evenodd"});const l=function(e){return r.createElement("svg",a({fill:"none",viewBox:"0 0 18 18","aria-labelledby":"link-slim-svg"},e),o)}},16139:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=r.createElement("path",{d:"M0 .35v15.3h20V.35H0zm6.95 9.38l3.05 2.5 3.05-2.5 4.88 4.73H2.07l4.88-4.73zM1.2 13.64V5.02l4.82 3.94-4.82 4.68zm12.78-4.68l4.82-3.94v8.62l-4.82-4.68zm4.82-7.42v1.94l-8.8 7.2-8.8-7.2V1.54h17.6z"});const l=function(e){return r.createElement("svg",a({width:20,height:16,viewBox:"0 0 20 16"},e),o)}},68455:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=r.createElement("path",{d:"M18.5 4.43a6.9 6.9 0 0 1-2.18.88 3.45 3.45 0 0 0-2.55-1.12 3.49 3.49 0 0 0-3.49 3.48c0 .28.03.55.07.81a9.91 9.91 0 0 1-7.17-3.67 3.9 3.9 0 0 0-.5 1.74 3.6 3.6 0 0 0 1.56 2.92 3.36 3.36 0 0 1-1.55-.44.15.15 0 0 0 0 .06c0 1.67 1.2 3.08 2.8 3.42-.3.06-.6.1-.94.12l-.62-.06A3.5 3.5 0 0 0 7.17 15a7.33 7.33 0 0 1-4.36 1.49L2 16.44A9.96 9.96 0 0 0 7.36 18c6.4 0 9.91-5.32 9.9-9.9v-.5A6.55 6.55 0 0 0 19 5.79a6.18 6.18 0 0 1-2 .56 3.33 3.33 0 0 0 1.5-1.93"});const l=function(e){return r.createElement("svg",a({width:21,height:21,viewBox:"0 0 21 21"},e),o)}},32523:(e,t,n)=>{"use strict";n.d(t,{g:()=>o});var r=n(67294),a=n(89894),o=function(e){var t=e.children,n=e.className,o=void 0===n?"":n,l=e.href,i=e.onClick;return l?r.createElement(a.P3,{className:o,href:l,onClick:i},t):t}},33241:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(28655),a=n.n(r),o=n(71439),l=n(80439),i=n(67294),c=n(70561),s=n(88914);function u(){var e=a()(["\n  mutation UserReportStoryMutation(\n    $targetPostId: ID!\n    $targetAuthorId: ID!\n    $alsoBlockAuthor: Boolean!\n    $reason: String!\n  ) {\n    reportStoryAndMaybeBlockAuthor(\n      targetPostId: $targetPostId\n      targetAuthorId: $targetAuthorId\n      alsoBlockAuthor: $alsoBlockAuthor\n      reason: $reason\n    ) {\n      id\n      isBlocking\n    }\n  }\n"]);return u=function(){return e},e}var m=(0,o.Ps)(u());const p=(0,c.$j)()((function(e){var t=e.targetAuthorId,n=e.targetPostId,r=e.dispatch,a=e.children,o=e.onOptimisticComplete,c=e.isBlocking;return i.createElement(l.mm,{mutation:m,onCompleted:function(){r((0,s.Dx)({message:"Successfully reported post."}))}},(function(e){return a({mutate:function(r,a){var l=e({variables:{targetAuthorId:t,targetPostId:n,alsoBlockAuthor:r,reason:a},optimisticResponse:{__typename:"Mutation",reportStoryAndMaybeBlockAuthor:{__typename:"User",id:t,isBlocking:c||r}}});return o&&o(),l}})}))}))},4743:(e,t,n)=>{"use strict";n.d(t,{LI:()=>s,k:()=>u,Qg:()=>m,ke:()=>p});var r=n(28655),a=n.n(r),o=n(71439),l=n(50993);function i(){var e=a()(["\n  fragment GetFeaturedImageIndex_bodyModel on RichText {\n    paragraphs {\n      type\n      text\n      metadata {\n        isFeatured\n      }\n    }\n  }\n"]);return i=function(){return e},e}function c(){var e=a()(["\n  fragment GetTitleIndexMap_bodyModel on RichText {\n    paragraphs {\n      type\n      text\n    }\n  }\n"]);return c=function(){return e},e}var s=function(e){for(var t=null,n=null,r=null,a=null,o=0;o<=e.length;o++){var i=e[o];if(!i)break;if(null!=t){"H4"===i.type&&(n=o),null===r&&"IMG"===i.type&&(r=o);break}if("H3"===i.type||"H2"===i.type)t=o;else{if(null!=a)break;if("H4"!==i.type){if("IMG"===i.type){null===r&&(r=o);continue}if("IFRAME"===i.type||"P"===i.type&&"string"==typeof i.text&&(0,l.vV)(i.text))continue;break}a=o}}return{titleIndex:t,subtitleIndex:n,bannerImageIndex:r}},u=(0,o.Ps)(c()),m=function(e){for(var t=null,n=0;n<e.length;n++)if("IMG"===e[n].type){if(e[n].metadata&&e[n].metadata.isFeatured)return n;null===t&&(t=n)}return t},p=(0,o.Ps)(i())},85828:(e,t,n)=>{"use strict";n.d(t,{$:()=>V,u:()=>z});var r=n(28655),a=n.n(r),o=n(63038),l=n.n(o),i=n(71439),c=n(67294),s=n(59713),u=n.n(s),m=n(46829),p=n(24087),d=n(32262),f=n(89894),h=n(80735),v=n(28309),g=n(88914),E=n(16139),b=n(51064);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(){var e=a()(["\n  mutation sendPostAsEmails($postId: ID!) {\n    sendPostAsEmails(postId: $postId)\n  }\n"]);return O=function(){return e},e}function S(){var e=a()(["\n  fragment NewsletterV3EmailToSubscribersMenuItem_post on Post {\n    id\n    creator {\n      id\n      newsletterV3 {\n        id\n        subscribersCount\n      }\n    }\n    isPublishToEmail\n    isNewsletter\n  }\n"]);return S=function(){return e},e}function x(e){return{fill:e.baseColor.fill.lighter}}var w={height:"16px",width:"16px",marginLeft:"4px"},P=(0,i.Ps)(S()),C=(0,i.Ps)(O());function N(e){var t=e.post,n=e.onClick,r=(0,v.Iq)(),a=(0,b.O)(!1),o=l()(a,3),i=o[0],s=o[1],u=o[2],y=(0,g.w)(),O=function(){u(),n()},S=(0,m.useMutation)(C,{variables:{postId:(null==t?void 0:t.id)||""},onCompleted:function(e){var t=e.sendPostAsEmails;y(t?{message:"Your story has been emailed to subscribers.",toastStyle:"MESSAGE",duration:2e3}:{message:"We couldn't process your request. Try again, or contact our support team.",toastStyle:"ERROR",duration:2e3})},update:function(e,n){var r,a={id:"Post:".concat(null==t?void 0:t.id),fragment:P,fragmentName:"NewsletterV3EmailToSubscribersMenuItem_post"},o=e.readFragment(a);e.writeFragment(I(I({},a),{},{data:I(I({},o),{},{isPublishToEmail:null===(r=n.data)||void 0===r?void 0:r.sendPostAsEmails})}))}}),N=l()(S,1)[0];return c.createElement(p.Z,null,(function(e){var n,a,o;return e&&e.id===(null==t||null===(n=t.creator)||void 0===n?void 0:n.id)&&(null==t||!t.isNewsletter)&&((null==t||null===(a=t.creator)||void 0===a||null===(o=a.newsletterV3)||void 0===o?void 0:o.subscribersCount)||0)>0?c.createElement(c.Fragment,null,c.createElement(d.Sl,{paddingTopBottom:"8px"},c.createElement(f.rU,{onClick:s},c.createElement(f.xu,{display:"inline-block"},c.createElement(E.Z,{className:r([x,w])}),c.createElement(f.xu,{display:"inline-block",marginLeft:"20px"},c.createElement(h.F,{scale:"S"},"Email to subscribers"))))),c.createElement(f.QH,{onConfirm:function(){null!=t&&t.isPublishToEmail?y({message:"You’ve already sent this story to subscribers.",toastStyle:"ERROR",duration:2e3}):N(),O()},isVisible:i,hide:O,titleText:"Email to subscribers",confirmText:"Send",buttonStyle:"STRONG",buttonSize:"LARGE",showCancelButton:!0,withCloseButton:!0,titleTag:"h1",contentTag:"p",isDestructiveAction:!1},"A link to this story will be emailed to all your subscribers.")):c.createElement(c.Fragment,null)}))}var T=n(1036),A=n(46572),L=n(27572),_=n(24631);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var R=c.createElement("g",{fillRule:"evenodd"},c.createElement("path",{d:"M15.6 5a.42.42 0 0 0 .17-.3.42.42 0 0 0-.12-.33l-2.8-2.79a.5.5 0 0 0-.7 0l-2.8 2.8a.4.4 0 0 0-.1.32c0 .12.07.23.16.3h.02a.45.45 0 0 0 .57-.04l2-2V10c0 .28.23.5.5.5s.5-.22.5-.5V2.93l2.02 2.02c.08.07.18.12.3.13.11.01.21-.02.3-.08v.01"}),c.createElement("path",{d:"M18 7h-1.5a.5.5 0 0 0 0 1h1.6c.5 0 .9.4.9.9v10.2c0 .5-.4.9-.9.9H6.9a.9.9 0 0 1-.9-.9V8.9c0-.5.4-.9.9-.9h1.6a.5.5 0 0 0 .35-.15A.5.5 0 0 0 9 7.5a.5.5 0 0 0-.15-.35A.5.5 0 0 0 8.5 7H7a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h11a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"}));const B=function(e){return c.createElement("svg",k({width:25,height:25},e),R)};function D(){var e=a()(["\n  fragment PostFooterSocialPopover_post on Post {\n    id\n    mediumUrl\n    title\n    ...ShareButton_post\n    ...NewsletterV3EmailToSubscribersMenuItem_post\n  }\n  ","\n  ","\n"]);return D=function(){return e},e}function M(e){return{fill:e.baseColor.fill.normal}}function j(e){return{fill:e.baseColor.fill.lighter}}var F={height:"16px",width:"16px",marginLeft:"4px"},V=function(e){var t,n=e.post,r=e.source,a=n.mediumUrl,o=n.title,i=(0,g.w)(),s=(0,v.Fg)(),u=(0,v.Iq)(),m=(0,b.O)(!1),p=l()(m,3),E=p[0],y=p[1],I=p[2],O=(null==s||null===(t=s.breakpoints)||void 0===t?void 0:t.md)||728;return c.createElement(L.cW,{source:r},c.createElement(f.J2,{isVisible:E,hide:I,popoverRenderFn:function(){return c.createElement(d.mX,null,c.createElement(T.Z,{name:"enable_email_to_subscribers_after_publish"},c.createElement(N,{post:n,onClick:function(){I()}})),c.createElement(d.Sl,{paddingTopBottom:"8px"},c.createElement(A.T,{socialPlatform:"TWITTER",buttonStyle:"LINK_INLINE_SHORT_LABEL",post:n})),c.createElement(d.Sl,{paddingTopBottom:"8px"},c.createElement(A.T,{socialPlatform:"FACEBOOK",buttonStyle:"LINK_INLINE_SHORT_LABEL",post:n})),c.createElement(d.Sl,{paddingTopBottom:"8px"},c.createElement(A.T,{socialPlatform:"LINKEDIN",buttonStyle:"LINK_INLINE_SHORT_LABEL",post:n})),a&&c.createElement(d.Sl,{paddingTopBottom:"8px"},c.createElement(f.rU,{onClick:function(){navigator.clipboard.writeText(a),i({message:"Link copied",toastStyle:"MESSAGE",duration:2e3}),I()}},c.createElement(f.xu,{display:"inline-block"},c.createElement(_.Z,{className:u([j,F])}),c.createElement(f.xu,{display:"inline-block",marginLeft:"20px"},c.createElement(h.F,{scale:"S"},"Copy link"))))))}},c.createElement(f.rU,{onClick:function(){var e,t=null===(e=window)||void 0===e?void 0:e.innerWidth;navigator&&navigator.share&&a&&t&&t<O?navigator.share({url:a,text:o||"",title:o||""}):y()},ariaLabel:"Share Post"},c.createElement(B,{className:u(M)}))))},z=(0,i.Ps)(D(),A.M,P)},71245:(e,t,n)=>{"use strict";n.d(t,{Lf:()=>h,h3:()=>v,yb:()=>g});var r=n(63038),a=n.n(r),o=n(28655),l=n.n(o),i=n(71439),c=n(46829),s=n(67294),u=n(14391);function m(){var e=l()(["\n  mutation RejectPostFromPubMutation(\n    $postId: ID!\n    $collectionSlug: String!\n    $status: CollectionPostStatus!\n  ) {\n    manageCollectionPostStatus(postId: $postId, collectionSlug: $collectionSlug, status: $status) {\n      __typename\n      id\n      statusForCollection\n      collection {\n        id\n      }\n      pendingCollection {\n        id\n        slug\n      }\n    }\n  }\n"]);return m=function(){return e},e}function p(){var e=l()(["\n  mutation ManageCollectionPostStatusMutation(\n    $postId: ID!\n    $collectionSlug: String!\n    $status: CollectionPostStatus!\n  ) {\n    manageCollectionPostStatus(postId: $postId, collectionSlug: $collectionSlug, status: $status) {\n      __typename\n      id\n      statusForCollection\n      pendingCollection {\n        id\n        slug\n      }\n    }\n  }\n"]);return p=function(){return e},e}var d=(0,i.Ps)(p()),f=(0,i.Ps)(m()),h=function(e){var t=(0,c.useMutation)(d),n=a()(t,1)[0];return(0,s.useCallback)((function(t){return n({variables:{collectionSlug:(null==t?void 0:t.slug)||"",postId:e.id,status:u.Zj.PENDING},optimisticResponse:{manageCollectionPostStatus:{__typename:"Post",id:e.id,statusForCollection:u.Zj.PENDING,pendingCollection:t}}})}),[e])},v=function(e){var t=(0,c.useMutation)(d),n=a()(t,1)[0];return(0,s.useCallback)((function(t){return n({variables:{collectionSlug:(null==t?void 0:t.slug)||"",postId:e.id,status:u.Zj.APPROVED}})}),[e])},g=function(e){var t=(0,c.useMutation)(f),n=a()(t,1)[0];return(0,s.useCallback)((function(t){return n({variables:{collectionSlug:(null==t?void 0:t.slug)||"",postId:e.id,status:u.Zj.REMOVED},optimisticResponse:{manageCollectionPostStatus:{__typename:"Post",id:e.id,statusForCollection:null,collection:null,pendingCollection:null}}}).then((function(e){if(e.errors&&e.errors[0])throw e.errors[0];return e}))}),[e])}},9638:(e,t,n)=>{"use strict";n.d(t,{u_:()=>L,We:()=>R,yu:()=>_,Gk:()=>B,br:()=>k});var r=n(28655),a=n.n(r),o=n(71439),l=n(67294),i=n(70561),c=n(10734),s=n(32523),u=n(95482),m=n(76972),p=n(27003);function d(e){var t=e.hasPrefix,n=void 0!==t&&t,r=e.timestamp,a=Date.now(),o=(0,m.Z)(a,r);if(0===o)return n?"just now":"Just now";if(o>=1&&o<24)return"".concat(o," hour").concat(o>1?"s":""," ago");var l=(0,p.Z)(a,r);return l>=1&&l<7?"".concat(l," day").concat(l>1?"s":""," ago"):(0,u.Z)({timestamp:r})}var f=n(31635),h=n(9292),v=n(80735),g=n(98701),E=n(28309),b=n(7650),y=n(27952);function I(){var e=a()(["\n  fragment CardByline_publisher on Publisher {\n    __typename\n    ... on User {\n      id\n      ...CardByline_user\n    }\n    ... on Collection {\n      id\n      ...CardByline_collection\n    }\n  }\n  ","\n  ","\n"]);return I=function(){return e},e}function O(){var e=a()(["\n  fragment CardByline_collection on Collection {\n    __typename\n    id\n    name\n    ...collectionUrl_collection\n  }\n  ","\n"]);return O=function(){return e},e}function S(){var e=a()(["\n  fragment CardByline_user on User {\n    __typename\n    id\n    name\n    username\n    hasDomain\n  }\n"]);return S=function(){return e},e}function x(){var e=a()(["\n  fragment CardByline_post on Post {\n    ...DraftStatus_post\n  }\n  ","\n"]);return x=function(){return e},e}var w=function(e){return{fill:e.baseColor.fill.light,marginTop:"-2px",paddingLeft:"4px"}};function P(e,t){return t&&(0,g.nE)(e)?e[t]:e}var C=function(e){var t=e.author,n=e.forceSize,r=e.scale,a=void 0===r?"M":r,o=(0,i.v9)((function(e){return e.config.authDomain}));return null!=t&&t.username?l.createElement(s.g,{href:(0,y.AW)(t.username,o,t.hasDomain)},l.createElement(v.F,{color:"ACCENT",scale:P(a,n)},t.name)):null},N=function(e){var t=e.collection,n=e.forceSize,r=e.scale,a=void 0===r?"M":r,o=(0,i.v9)((function(e){return{authDomain:e.config.authDomain,currentLocation:e.navigation.currentLocation}})),u=o.authDomain,m=o.currentLocation;if(!t)return null;var p=(0,y.WG)(t,m,u);return l.createElement(s.g,{href:p},l.createElement(v.F,{scale:P(a,n),color:"DARKER"},"Published in ",l.createElement(c.t,{collection:t})))},T=function(e){var t=e.small,n=void 0!==t&&t,r=e.hideDot,a=void 0!==r&&r,o=(0,E.Iq)();return l.createElement("span",{className:o({margin:"0 ".concat(n?4:7,"px")})},a?null:"·")},A=function(e){var t=e.datePrefix,n=void 0===t?"":t,r=e.forceSize,a=e.isOneLine,o=e.withMidDot,i=void 0===o||o,c=e.href,m=e.onClick,p=e.publishedAt,h=e.scale,g=void 0===h?"M":h,y=e.showStar,I=void 0!==y&&y,O=e.timeColor,S=void 0===O?"LIGHTER":O,x=e.timeToRead,C=e.post,N=(0,E.Iq)();if(!p&&!x)return null;var A=a?d:u.Z;return l.createElement(s.g,{href:c,onClick:m},l.createElement(v.F,{color:S,scale:P(g,r)},a&&i&&l.createElement(T,{small:!0,hideDot:!!x&&!!p}),p?l.createElement(l.Fragment,null,n,l.createElement(A,{hasPrefix:!(!a||!n)||void 0,timestamp:p})):null,p&&x?l.createElement(T,null):null,x||null,!p&&l.createElement(l.Fragment,null,l.createElement(T,{small:a}),l.createElement(v.F,{color:"DARKER",scale:P(g,r),tag:"span"},l.createElement(f.FV,{post:C}))),I&&l.createElement(b.Z,{className:N(w)})))},L=function(e){var t=e.avatar,n=void 0===t?null:t,r=e.datePrefix,a=e.forceSize,o=e.hideAuthor,i=void 0!==o&&o,c=e.href,s=e.onClick,u=e.isOneLine,m=void 0!==u&&u,p=e.publisher,d=e.publishedAt,f=e.scale,v=e.showStar,g=void 0!==v&&v,E=e.timeColor,b=e.timeToRead,y=e.post,I="Collection"===p.__typename?l.createElement(N,{collection:p,forceSize:a,scale:f}):i?null:l.createElement(C,{author:p,forceSize:a,scale:f}),O="Collection"===p.__typename||!i;return l.createElement(h.Y,{avatar:i?null:n,isOneLine:m,title:I,description:l.createElement(A,{datePrefix:r,publishedAt:d,timeToRead:b,withMidDot:O,href:c,onClick:s,showStar:g,forceSize:a,scale:f,timeColor:E,isOneLine:m,post:y})})},_=(0,o.Ps)(x(),f.tV),k=(0,o.Ps)(S()),R=(0,o.Ps)(O(),y.nf),B=(0,o.Ps)(I(),k,R)},46572:(e,t,n)=>{"use strict";n.d(t,{T:()=>ne,M:()=>ee});var r=n(67154),a=n.n(r),o=n(28655),l=n.n(o),i=n(59713),c=n.n(i),s=n(71439),u=n(67294),m=n(70561),p=n(89894),d=n(80735),f=n(62630),h=n(27572),v=n(28309);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var E=u.createElement("path",{d:"M18.26 10.55c0-4.3-3.47-7.79-7.75-7.79a7.77 7.77 0 0 0-7.75 7.79 7.77 7.77 0 0 0 6.54 7.68v-5.49H7.4v-2.2h1.9V8.92c0-1.88 1.14-2.9 2.8-2.9.8 0 1.49.06 1.69.08v1.97h-1.15c-.91 0-1.1.43-1.1 1.07v1.4h2.17l-.28 2.2h-1.88v5.52a7.77 7.77 0 0 0 6.7-7.71"});const b=function(e){return u.createElement("svg",g({width:21,height:21,viewBox:"0 0 21 21"},e),E)};var y=n(68857);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var O=u.createElement("path",{d:"M23.2 5H5.8a.8.8 0 0 0-.8.8V23.2c0 .44.35.8.8.8h9.3v-7.13h-2.38V13.9h2.38v-2.38c0-2.45 1.55-3.66 3.74-3.66 1.05 0 1.95.08 2.2.11v2.57h-1.5c-1.2 0-1.48.57-1.48 1.4v1.96h2.97l-.6 2.97h-2.37l.05 7.12h5.1a.8.8 0 0 0 .79-.8V5.8a.8.8 0 0 0-.8-.79"});const S=function(e){return u.createElement("svg",I({width:29,height:29},e),O)};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var w=u.createElement("path",{d:"M3 4.07C3 3.48 3.5 3 4.1 3h12.8c.6 0 1.1.48 1.1 1.07v12.86c0 .59-.5 1.07-1.1 1.07H4.1A1.1 1.1 0 0 1 3 16.93V4.07z"}),P=u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.55 15.56V8.78H5.28v6.78h2.27zM6.4 7.86c.8 0 1.29-.52 1.29-1.17-.02-.67-.5-1.17-1.27-1.17-.78 0-1.28.5-1.28 1.17 0 .65.49 1.17 1.25 1.17h.01zM8.8 15.56h2.27v-3.79a1.24 1.24 0 0 1 1.24-1.37c.81 0 1.14.62 1.14 1.53v3.63h2.27v-3.89c0-2.08-1.12-3.05-2.61-3.05-1.22 0-1.76.68-2.06 1.15h.02v-.99H8.8c.03.64 0 6.78 0 6.78z",fill:"#fff"});const C=function(e){return u.createElement("svg",x({width:21,height:21,viewBox:"0 0 21 21",fill:"none"},e),w,P)};function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var T=u.createElement("path",{d:"M4 5.22C4 4.55 4.56 4 5.26 4h14.48c.7 0 1.26.55 1.26 1.22v14.56c0 .67-.56 1.22-1.26 1.22H5.26C4.56 21 4 20.45 4 19.78V5.22z"}),A=u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.15 18.23v-7.68H6.6v7.68h2.56zM7.87 9.51c.9 0 1.45-.6 1.45-1.33-.01-.75-.56-1.33-1.43-1.33-.88 0-1.46.58-1.46 1.33 0 .74.56 1.33 1.42 1.33h.02zM10.57 18.23h2.57v-4.29c0-.23.02-.45.09-.62.18-.46.6-.93 1.31-.93.93 0 1.3.7 1.3 1.73v4.11h2.57v-4.4c0-2.36-1.26-3.46-2.95-3.46-1.39 0-2 .77-2.34 1.3h.02v-1.12h-2.57c.04.72 0 7.68 0 7.68z",fill:"#fff"});const L=function(e){return u.createElement("svg",N({width:25,height:25,viewBox:"0 0 25 25",fill:"none"},e),T,A)};function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var k=u.createElement("path",{d:"M5 6.36C5 5.61 5.63 5 6.4 5h16.2c.77 0 1.4.61 1.4 1.36v16.28c0 .75-.63 1.36-1.4 1.36H6.4c-.77 0-1.4-.6-1.4-1.36V6.36z"}),R=u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.76 20.9v-8.57H7.89v8.58h2.87zm-1.44-9.75c1 0 1.63-.65 1.63-1.48-.02-.84-.62-1.48-1.6-1.48-.99 0-1.63.64-1.63 1.48 0 .83.62 1.48 1.59 1.48h.01zM12.35 20.9h2.87v-4.79c0-.25.02-.5.1-.7.2-.5.67-1.04 1.46-1.04 1.04 0 1.46.8 1.46 1.95v4.59h2.87v-4.92c0-2.64-1.42-3.87-3.3-3.87-1.55 0-2.23.86-2.61 1.45h.02v-1.24h-2.87c.04.8 0 8.58 0 8.58z",fill:"#fff"});const B=function(e){return u.createElement("svg",_({width:29,height:29,viewBox:"0 0 29 29",fill:"none"},e),k,R)};var D=n(68455),M=n(27778);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var F=u.createElement("path",{d:"M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"});const V=function(e){return u.createElement("svg",j({width:29,height:29},e),F)};var z=n(61244),K=n(27952);function $(){var e=l()(["\n  fragment ShareButton_post on Post {\n    id\n  }\n"]);return $=function(){return e},e}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U={fill:"#3b5998"},W={fill:"#38a1f3"},G={fill:"#292929"},q=function(e){return{fill:e.baseColor.fill.lighter}},Y=function(e){return{fill:e.baseColor.fill.normal}},Q=function(e){return Z(Z({},q(e)),{},{opacity:.25,cursor:"not-allowed"})},X={marginRight:"8px"},J={FACEBOOK:"Facebook",TWITTER:"Twitter",LINKEDIN:"LinkedIn"},ee=(0,s.Ps)($());function te(e){var t=e.buttonStyle,n=e.socialPlatform,r=(0,v.Iq)(),a=(0,z.k)();switch(t){case"LINK_DISABLED":switch(n){case"FACEBOOK":return u.createElement(S,{className:r(Q)});case"TWITTER":return u.createElement(V,{className:r(Q)});case"LINKEDIN":return u.createElement(B,{className:r(Q)});default:return null}case"LINK":if(a)switch(n){case"FACEBOOK":return u.createElement(S,{className:r(q)});case"TWITTER":return u.createElement(V,{className:r(q)});case"LINKEDIN":return u.createElement(B,{className:r(q)});default:return null}switch(n){case"FACEBOOK":return u.createElement(S,{className:r(Y)});case"TWITTER":return u.createElement(V,{className:r(Y)});case"LINKEDIN":return u.createElement(B,{className:r(Y)});default:return null}case"LINK_INLINE":switch(n){case"FACEBOOK":return u.createElement(b,{className:r(q)});case"TWITTER":return u.createElement(D.Z,{className:r(q)});case"LINKEDIN":return u.createElement(C,{className:r(q)});default:return null}case"LINK_INLINE_SHORT_LABEL":switch(n){case"FACEBOOK":return u.createElement(y.Z,{className:r(q)});case"TWITTER":return u.createElement(M.Z,{className:r(q)});case"LINKEDIN":return u.createElement(L,{className:r(q)});default:return null}case"BUTTON_BRANDED":switch(n){case"FACEBOOK":return u.createElement(b,{className:r([U,X])});case"TWITTER":return u.createElement(D.Z,{className:r([W,X])});case"LINKEDIN":return u.createElement(C,{className:r([G,X])});default:return null}default:return null}}var ne=(0,m.$j)((function(e){var t=e.config;return{authDomain:t.authDomain,isAmp:t.isAmp}}))((function(e){var t,n=e.authDomain,r=e.isAmp,o=e.post,l=e.buttonStyle,i=e.socialPlatform,c=(0,f.Av)(),s=(0,h.Qi)();if("FACEBOOK"===i)t=(0,K.VC)(n,o.id);else if("TWITTER"===i)t=(0,K.A2)(n,o.id);else{if("LINKEDIN"!==i)return null;t=(0,K.mZ)(n,o.id)}var m=J[i];if(!m)return null;var v={href:t,onClick:function(){s&&c.event("post.shareOpen",{postId:o.id,source:s,dest:i.toLowerCase(),dialogType:"native"})},target:"_blank",noFollow:!0,ariaLabel:"Share on "+i.toLowerCase()};if(!r){delete v.href,delete v.target;var g=v.onClick;v.onClick=function(){g();var e=Math.max((window.outerHeight||200)/2-560,100),n=(window.outerWidth||200)/2-250;"LINKEDIN"===i?window.open(t,"LIP","resizable,scrollbars,status,top=".concat(e,",left=").concat(n,",height=").concat(560,",width=").concat(500)):window.open(t)}}switch(l){case"LINK_DISABLED":return u.createElement(p.$W,{darkTheme:!0,popoverRenderFn:function(){return u.createElement(p.xu,{padding:"8px",whiteSpace:"nowrap"},"This feature is temporarily disabled.")},placement:"top",targetDistance:15},u.createElement(te,{buttonStyle:l,socialPlatform:i}));case"LINK":return u.createElement(p.rU,v,u.createElement(te,{buttonStyle:l,socialPlatform:i}));case"LINK_INLINE":return u.createElement(p.rU,v,u.createElement(te,{buttonStyle:l,socialPlatform:i}),u.createElement(p.xu,{display:"inline",marginLeft:"8px",marginTop:"2px"},u.createElement(d.F,{scale:"S",tag:"span"},"Share on ",m)));case"LINK_INLINE_SHORT_LABEL":return u.createElement(p.rU,v,u.createElement(te,{buttonStyle:l,socialPlatform:i}),u.createElement(p.xu,{display:"inline",marginLeft:"16px",marginTop:"2px"},u.createElement(d.F,{scale:"S",tag:"span"},m)));case"BUTTON_BRANDED":return u.createElement(p.zx,a()({},v,{buttonStyle:"SOCIAL",size:"REGULAR",width:"212px"}),u.createElement(p.xu,{display:"flex",alignItems:"center",justifyContent:"center"},u.createElement(te,{buttonStyle:l,socialPlatform:i}),"Share with ".concat(m)));default:return null}}))},90639:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(63038),a=n.n(r),o=n(67294),l=n(89894),i=n(80735);const c=function(e){var t=e.isVisible,n=e.hide,r=e.onSubmit,c=e.isResponse,s=o.useState(!1),u=a()(s,2),m=u[0],p=u[1],d=o.useState("Spam"),f=a()(d,2),h=f[0],v=f[1],g=o.useCallback((function(e,t){return v(t)}),[]);return o.createElement(l.Vq,{isVisible:t,hide:n,noPortal:c,withCloseButton:!1,customBackgroundColor:c?"rgba(255, 255, 255, 0.97)":"rgba(255, 255, 255, 0.94)"},o.createElement(l.xu,{height:"550px",width:c?"100%":"900px",background:c?"none":"white",borderRadius:"4px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:c?"none":"rgba(0, 0, 0, 0.15) 0px 2px 10px",padding:"18px",sm:{boxShadow:"none",background:"none"},xs:{boxShadow:"none",background:"none"}},!c&&o.createElement(l.xu,{alignSelf:"flex-end"},o.createElement(l.PZ,{onClick:n,size:"LARGE",isPositionAbsolute:!1})),o.createElement(l.xu,{display:"flex",margin:"auto",flexDirection:"column",alignItems:c?"flex-start":"center"},o.createElement(i.X6,{scale:"M"},"Report ",c?"Response":"Story"),o.createElement(l.xu,{display:"flex",flexDirection:"column",width:"100%",paddingRight:"5px",marginBottom:"30px"},o.createElement(l.xu,{marginTop:"25px",marginBottom:"30px",padding:"5px 0"},o.createElement(l.Ee,{onChange:g,value:h,radioStyle:"SUBTLE",options:[{name:"Spam",value:"Spam"},{name:"Harassment",value:"Harassment"},{name:"Rules Violation",value:"Other"}]})),o.createElement(l.XZ,{checked:m,onChange:function(){p(!m)}},o.createElement(l.xu,{paddingTop:c?"16px":"0"},"Also block the author of this ",c?"response":"story"))),o.createElement(l.xu,{display:"flex",justifyContent:"center",marginBottom:"10px"},o.createElement(l.xu,{marginRight:"8px"},o.createElement(l.zx,{onClick:n},"Cancel")),o.createElement(l.zx,{buttonStyle:"ERROR",onClick:function(){r(m,h),n()}},"Report")),o.createElement(l.xu,{marginTop:"50px",textAlign:c?"left":"center"},o.createElement(i.F,{scale:"M",tag:"div"},"Report"," ",o.createElement(l.rU,{href:"https://medium.com/policy/mediums-copyright-and-dmca-policy-d126f73695",linkStyle:"OBVIOUS",target:"_blank",inline:!0},"copyright infringement")," ","or"," ",o.createElement(l.rU,{href:"https://medium.com/policy/mediums-trademark-policy-e3bb53df59a7",linkStyle:"OBVIOUS",target:"_blank",inline:!0},"trademark infringement"),". ",!c&&o.createElement("br",null),"Read"," ",o.createElement(l.rU,{href:"https://medium.com/policy/medium-rules-30e5502c4eb4",linkStyle:"OBVIOUS",target:"_blank",inline:!0},"our rules"),".")))))}},61244:(e,t,n)=>{"use strict";n.d(t,{k:()=>o});var r=n(66893),a=n(9785),o=function(){var e=Boolean((0,r.P5)("enable_responses_all")),t=Boolean((0,r.P5)("is_super_user")),n=(0,a.YC)().value;return t||Boolean(null==n?void 0:n.isEligibleToViewNewResponses)||e}},50993:(e,t,n)=>{"use strict";n.d(t,{vV:()=>r,N8:()=>a});var r=function(e){return/^[\s\xa0]*$/.test(e)},a=function(e,t){if(e.length<t)return e;var n=e.substr(0,t),r=n.charCodeAt(n.length-1),a=n.charCodeAt(n.length-2);return r>=55296&&r<=57343&&!(a>=55296&&a<=57343)&&(n=n.substr(0,n.length-1)),(n=(n=n.replace(/(\s+\S+|\s+)$/,"")).replace(/[.,:;?!-]+$/,""))+"…"}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/5967.6e1eb6d2.chunk.js.map