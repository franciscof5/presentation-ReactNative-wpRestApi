!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="b9994ba5-12a7-4f2b-b638-22b8767b5b10",t._sentryDebugIdIdentifier="sentry-dbid-b9994ba5-12a7-4f2b-b638-22b8767b5b10")}catch(t){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52602],{52602:function(t,a,e){"use strict";e.r(a),e.d(a,{default:function(){return EventSlider}});var n=e(19278),o=e(3520),i=e(68686),s=e(42842),r=e(27160),l=e(66616),u=e.n(l),p=e(4814),d=e(11527),EventSponsors_EventSponsor=t=>{let{id:a,name:e,description:n,url:o,logo:i,isOnlySponsor:s,isOneCardView:r}=t;return(0,d.jsx)("div",{id:a,className:(0,p.Z)("h-48 w-11/12 rounded-2xl bg-white p-4",{"mr-4 sm:ml-0 sm:mr-3 md:mr-16 lg:mr-3":s,"!w-full":r}),"data-testid":"sponsor-item",children:(0,d.jsx)("a",{href:o,target:"_blank",className:"h-full hover:no-underline",rel:"noreferrer",children:(0,d.jsxs)("div",{className:"flex h-full lg:items-center",children:[(0,d.jsx)("div",{className:"flex h-full w-1/2 items-center",children:i&&(0,d.jsx)(u(),{width:100,height:100,src:i,alt:"Sponsor logo"})}),(0,d.jsxs)("div",{className:"ml-2 flex h-full w-1/2 flex-col justify-center break-words text-xs",children:[(0,d.jsx)("h3",{className:"font-semibold line-clamp-3",children:e}),(0,d.jsx)("p",{className:"pt-2 text-secondary line-clamp-6",children:n})]})]})})})};function ownKeys(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,n)}return e}function _objectSpread(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?ownKeys(Object(e),!0).forEach(function(a){(0,n.Z)(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ownKeys(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}o.Z.use([i.Z]);var EventSlider=t=>{let{sponsors:a}=t;return(0,d.jsxs)(s.t,{className:"relative",slidesPerView:(null==a?void 0:a.length)>1?1.25:1,centerInsufficientSlides:!0,autoplay:{delay:5e3,pauseOnMouseEnter:!0,disableOnInteraction:!1},loop:a&&a.length>1,children:[a.map(t=>(0,d.jsx)(r.o,{children:(0,d.jsx)(EventSponsors_EventSponsor,_objectSpread(_objectSpread({},t.node),{},{isOnlySponsor:a.length>1,isOneCardView:1===a.length}),t.node.id)},t.node.id)),(0,d.jsx)("div",{className:(null==a?void 0:a.length)>1&&"dzixt2i"})]})};e(18210)},18210:function(t){t.exports={dzixt2i:"dzixt2i"}},68686:function(t,a,e){"use strict";var n=e(44672),o=e(15752);function _extends(){return(_extends=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}var i={run:function(){var t=this,a=t.slides.eq(t.activeIndex),e=t.params.autoplay.delay;a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||t.params.autoplay.delay),clearTimeout(t.autoplay.timeout),t.autoplay.timeout=(0,o.Y3)(function(){var a;t.params.autoplay.reverseDirection?t.params.loop?(t.loopFix(),a=t.slidePrev(t.params.speed,!0,!0),t.emit("autoplay")):t.isBeginning?t.params.autoplay.stopOnLastSlide?t.autoplay.stop():(a=t.slideTo(t.slides.length-1,t.params.speed,!0,!0),t.emit("autoplay")):(a=t.slidePrev(t.params.speed,!0,!0),t.emit("autoplay")):t.params.loop?(t.loopFix(),a=t.slideNext(t.params.speed,!0,!0),t.emit("autoplay")):t.isEnd?t.params.autoplay.stopOnLastSlide?t.autoplay.stop():(a=t.slideTo(0,t.params.speed,!0,!0),t.emit("autoplay")):(a=t.slideNext(t.params.speed,!0,!0),t.emit("autoplay")),t.params.cssMode&&t.autoplay.running?t.autoplay.run():!1===a&&t.autoplay.run()},e)},start:function(){return void 0===this.autoplay.timeout&&!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0)},stop:function(){return!!this.autoplay.running&&void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0)},pause:function(t){var a=this;a.autoplay.running&&(a.autoplay.paused||(a.autoplay.timeout&&clearTimeout(a.autoplay.timeout),a.autoplay.paused=!0,0!==t&&a.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach(function(t){a.$wrapperEl[0].addEventListener(t,a.autoplay.onTransitionEnd)}):(a.autoplay.paused=!1,a.autoplay.run())))},onVisibilityChange:function(){var t=(0,n.Me)();"hidden"===t.visibilityState&&this.autoplay.running&&this.autoplay.pause(),"visible"===t.visibilityState&&this.autoplay.paused&&(this.autoplay.run(),this.autoplay.paused=!1)},onTransitionEnd:function(t){var a=this;a&&!a.destroyed&&a.$wrapperEl&&t.target===a.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(function(t){a.$wrapperEl[0].removeEventListener(t,a.autoplay.onTransitionEnd)}),a.autoplay.paused=!1,a.autoplay.running?a.autoplay.run():a.autoplay.stop())},onMouseEnter:function(){var t=this;t.params.autoplay.disableOnInteraction?t.autoplay.stop():t.autoplay.pause(),["transitionend","webkitTransitionEnd"].forEach(function(a){t.$wrapperEl[0].removeEventListener(a,t.autoplay.onTransitionEnd)})},onMouseLeave:function(){this.params.autoplay.disableOnInteraction||(this.autoplay.paused=!1,this.autoplay.run())},attachMouseEvents:function(){this.params.autoplay.pauseOnMouseEnter&&(this.$el.on("mouseenter",this.autoplay.onMouseEnter),this.$el.on("mouseleave",this.autoplay.onMouseLeave))},detachMouseEvents:function(){this.$el.off("mouseenter",this.autoplay.onMouseEnter),this.$el.off("mouseleave",this.autoplay.onMouseLeave)}};a.Z={name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}},create:function(){(0,o.cR)(this,{autoplay:_extends({},i,{running:!1,paused:!1})})},on:{init:function(t){t.params.autoplay.enabled&&(t.autoplay.start(),(0,n.Me)().addEventListener("visibilitychange",t.autoplay.onVisibilityChange),t.autoplay.attachMouseEvents())},beforeTransitionStart:function(t,a,e){t.autoplay.running&&(e||!t.params.autoplay.disableOnInteraction?t.autoplay.pause(a):t.autoplay.stop())},sliderFirstMove:function(t){t.autoplay.running&&(t.params.autoplay.disableOnInteraction?t.autoplay.stop():t.autoplay.pause())},touchEnd:function(t){t.params.cssMode&&t.autoplay.paused&&!t.params.autoplay.disableOnInteraction&&t.autoplay.run()},destroy:function(t){t.autoplay.detachMouseEvents(),t.autoplay.running&&t.autoplay.stop(),(0,n.Me)().removeEventListener("visibilitychange",t.autoplay.onVisibilityChange)}}}}}]);