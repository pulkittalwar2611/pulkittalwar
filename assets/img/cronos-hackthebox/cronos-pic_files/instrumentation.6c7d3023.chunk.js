(self.webpackChunklite=self.webpackChunklite||[]).push([[118],{8538:(n,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>E});var t=r(94725),o=r(67294),i=r(70561),s=r(66893),u=r(10117),a=r(52837),c=r(61250),l=r(25002),f=r(32956),d=r(67616),v=r(63038),p=r.n(v),g=r(59713),m=r.n(g),h=r(44059),_=r(14034);function b(){for(var n=new _.y,e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(0===r.length)return n;var o=r.map((function(){return[]}));return r.forEach((function(e,r){e.observe((function(e){o[r].push(e),o.every((function(n){return n.length>0}))&&n.set(o.map((function(n){return n.shift()})))}))})),n}var w=function(n){return function(e){return m()({},n,e)}};const E=function(){var n,e;return e={glyph_embed_commands:null!==(n=(0,s.Vb)().glyph_embed_commands)&&void 0!==n?n:"control"},o.useEffect((function(){var n=b(d.sY,d.wZ,d.vY).map((function(n){var e=p()(n,3),r=e[0],t=e[1],o=e[2];return{responseEndToLCP:new d.jb(r.response.end,t.end),responseEndToFCP:new d.jb(r.response.end,o.end)}})),r=b(d.sY,d.qH.map(w("fid")),d.vY.map(w("fcp")),d.wZ.map(w("lcp")),n);d.cA.observe((function(n){n||r.observe((function(n){var r=n.reduce((function(n,e){return Object.assign(n,e)}),{}),t=Object.keys(r).reduce((function(n,e){var t=r[e].duration;return n[e]=t%1==0?t:Number(t.toFixed(1)),n}),{}),o=document.children[0],i={html:null==o?void 0:o.innerHTML.length,redux:JSON.stringify(window.__PRELOADED_STATE__).length,apollo:JSON.stringify(window.__APOLLO_STATE__).length};h.t.log("client hydrated",{perf:t,sizes:i,experimentFlags:e})}))})),d.Df.observe((function(n){return h.t.log("client resource sizes",{resources:n})}))}),[]),function(){var n,e=(0,i.v9)((function(n){return n.tracing.tracer})),r=(0,i.v9)((function(n){return n.tracing.originalSpan})),v=(0,i.v9)((function(n){return n.client.isBot})),p=(0,i.v9)((function(n){return n.client.routingEntity})),g=(0,i.v9)((function(n){return n.auroraPage.isAuroraPageEnabled})),m=(0,i.v9)((function(n){return n.session.user.id})),h=(0,i.v9)((function(n){return n.config.performanceTags})),_=(0,i.I0)(),b=(0,c.dh)(),w=null!==(n=(0,s.Vb)().glyph_embed_commands)&&void 0!==n?n:"control",E=(0,u.Av)();o.useEffect((function(){var n;if(e&&E&&!v){var o=b(window.location.pathname),i=null!==(n=null==o?void 0:o.route.metricName)&&void 0!==n?n:"unidentified",s={"user.logged_in":(0,f.j)(m),"req.route_name":i,"req.route":i,"req.glyph_embed":w,"req.router":(null==p?void 0:p.type)||a.Cr.DEFAULT};h.forEach((function(n){return s["req.".concat(n)]=1}));var u={loggedIn:(0,f.j)(m),route:i,auroraPage:g,withinWriterProfileRedesignExperiment:h.includes("enable_writer_profile_redesign")},c=function(n){return Math.round(1e3*n)},P=function(n,r,t,o){var i=t.start,u=t.end,a=e.startSpan("timing.".concat(r),{childOf:n,tags:s}).setBeginMicros(c(i)).setEndMicros(c(u));return null!=o&&o(a),a.finish(),a};d.sY.observe((function(n){var o,i,a,f;E.reportRender(u,n);var d=e.startSpan("timing.navigation",{references:r?[(0,t.followsFrom)(r)]:void 0,tags:s}).setBeginMicros(c(n.load.start)).setEndMicros(c(n.load.end)).log({redirect_count:null!==(o=null===(i=window)||void 0===i||null===(a=i.performance)||void 0===a||null===(f=a.navigation)||void 0===f?void 0:f.redirectCount)&&void 0!==o?o:0});P(d,"beforeDomainLookup",n.beforeDomainLookup),P(d,"domainLookup",n.domainLookup),P(d,"connect",n.connect),P(d,"request",n.request),P(d,"response",n.response),P(d,"processing",n.processing);var v=n.overallFCP,p=n.client,g=n.render;null!=v&&P(d,"firstContentfulPaint",v),null!=p&&P(d,"client",p,(function(n){null!=g&&P(n,"render",g)})),d.finish(),_((0,l.YU)(d.generateTraceURL()))})),d.vY.observe((function(n){E.reportFirstContentfulPaint(u,n),e.startSpan("timing.firstContentfulPaint.v2",{references:r?[(0,t.followsFrom)(r)]:void 0,tags:s}).setBeginMicros(c(n.start)).setEndMicros(c(n.end)).finish()})),d.wZ.observe((function(n){E.reportLargestContentfulPaint(u,n),e.startSpan("timing.largestContentfulPaint",{references:r?[(0,t.followsFrom)(r)]:void 0,tags:s}).setBeginMicros(c(n.start)).setEndMicros(c(n.end)).finish()})),d.cA.observe((function(n){n&&E.reportUnsupportedPerfObserver(u)})),d.qH.observe((function(n){E.reportInput(u,n),e.startSpan("timing.input.first.delay",{references:r?[(0,t.followsFrom)(r)]:void 0,tags:s}).setBeginMicros(c(n.start)).setEndMicros(c(n.end)).finish()}))}}),[e])}(),null}},72864:(n,e,r)=>{"use strict";r.r(e),r.d(e,{init:()=>i,extractSpan:()=>s});var t=r(45573),o=r(94725),i=function(n){var e=n.name,r=n.host,i=n.token,s=n.appVersion,u=new t.Tracer({component_name:e,xhr_instrumentation:!1,access_token:i,collector_host:r,default_span_tags:{"component.version":s}});return(0,o.initGlobalTracer)(u),u},s=function(n,e){if(e)return n.extract(o.FORMAT_HTTP_HEADERS,e)}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/instrumentation.6c7d3023.chunk.js.map