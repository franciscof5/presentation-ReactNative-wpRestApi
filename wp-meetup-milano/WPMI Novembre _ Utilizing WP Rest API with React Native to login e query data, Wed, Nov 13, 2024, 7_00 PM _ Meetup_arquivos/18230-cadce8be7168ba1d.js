!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="970dab24-1a52-4ec9-b510-fd48595268d3",e._sentryDebugIdIdentifier="sentry-dbid-970dab24-1a52-4ec9-b510-fd48595268d3")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18230],{61970:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,i){try{return function equal(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){var a,s,f,c;if(e.constructor!==i.constructor)return!1;if(Array.isArray(e)){if((a=e.length)!=i.length)return!1;for(s=a;0!=s--;)if(!equal(e[s],i[s]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(c=e.entries();!(s=c.next()).done;)if(!i.has(s.value[0]))return!1;for(c=e.entries();!(s=c.next()).done;)if(!equal(s.value[1],i.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(c=e.entries();!(s=c.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((a=e.length)!=i.length)return!1;for(s=a;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((a=(f=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=a;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,f[s]))return!1;if(t&&e instanceof Element)return!1;for(s=a;0!=s--;)if(("_owner"!==f[s]&&"__v"!==f[s]&&"__o"!==f[s]||!e.$$typeof)&&!equal(e[f[s]],i[f[s]]))return!1;return!0}return e!=e&&i!=i}(e,i)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},18230:function(e,t,n){"use strict";n.d(t,{D:function(){return usePopper}});var r,o,i,a,s,f=n(50959);function getWindow(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function isElement(e){var t=getWindow(e).Element;return e instanceof t||e instanceof Element}function isHTMLElement(e){var t=getWindow(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function isShadowRoot(e){if("undefined"==typeof ShadowRoot)return!1;var t=getWindow(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var c=Math.max,l=Math.min,u=Math.round;function getBoundingClientRect(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(isHTMLElement(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=u(n.width)/a||1),i>0&&(o=u(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function getWindowScroll(e){var t=getWindow(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function getNodeName(e){return e?(e.nodeName||"").toLowerCase():null}function getDocumentElement(e){return((isElement(e)?e.ownerDocument:e.document)||window.document).documentElement}function getWindowScrollBarX(e){return getBoundingClientRect(getDocumentElement(e)).left+getWindowScroll(e).scrollLeft}function getComputedStyle(e){return getWindow(e).getComputedStyle(e)}function isScrollParent(e){var t=getComputedStyle(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function getLayoutRect(e){var t=getBoundingClientRect(e),n=e.offsetWidth,r=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-r)&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function getParentNode(e){return"html"===getNodeName(e)?e:e.assignedSlot||e.parentNode||(isShadowRoot(e)?e.host:null)||getDocumentElement(e)}function listScrollParents(e,t){void 0===t&&(t=[]);var n,r=function getScrollParent(e){return["html","body","#document"].indexOf(getNodeName(e))>=0?e.ownerDocument.body:isHTMLElement(e)&&isScrollParent(e)?e:getScrollParent(getParentNode(e))}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=getWindow(r),a=o?[i].concat(i.visualViewport||[],isScrollParent(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(listScrollParents(getParentNode(a)))}function getTrueOffsetParent(e){return isHTMLElement(e)&&"fixed"!==getComputedStyle(e).position?e.offsetParent:null}function getOffsetParent(e){for(var t=getWindow(e),n=getTrueOffsetParent(e);n&&["table","td","th"].indexOf(getNodeName(n))>=0&&"static"===getComputedStyle(n).position;)n=getTrueOffsetParent(n);return n&&("html"===getNodeName(n)||"body"===getNodeName(n)&&"static"===getComputedStyle(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&isHTMLElement(e)&&"fixed"===getComputedStyle(e).position)return null;for(var n=getParentNode(e);isHTMLElement(n)&&0>["html","body"].indexOf(getNodeName(n));){var r=getComputedStyle(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var p="bottom",d="right",m="left",g="auto",h=["top",p,d,m],y="start",v="viewport",b="popper",w=h.reduce(function(e,t){return e.concat([t+"-"+y,t+"-end"])},[]),O=[].concat(h,[g]).reduce(function(e,t){return e.concat([t,t+"-"+y,t+"-end"])},[]),x=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],E={placement:"bottom",modifiers:[],strategy:"absolute"};function areValidElements(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var P={passive:!0};function getBasePlacement(e){return e.split("-")[0]}function getVariation(e){return e.split("-")[1]}function getMainAxisFromPlacement(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function computeOffsets(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?getBasePlacement(o):null,a=o?getVariation(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case"top":t={x:s,y:n.y-r.height};break;case p:t={x:s,y:n.y+n.height};break;case d:t={x:n.x+n.width,y:f};break;case m:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?getMainAxisFromPlacement(i):null;if(null!=c){var l="y"===c?"height":"width";switch(a){case y:t[c]=t[c]-(n[l]/2-r[l]/2);break;case"end":t[c]=t[c]+(n[l]/2-r[l]/2)}}return t}var S={top:"auto",right:"auto",bottom:"auto",left:"auto"};function mapToStyles(e){var t,n,r,o,i,a,s=e.popper,f=e.popperRect,c=e.placement,l=e.variation,g=e.offsets,h=e.position,y=e.gpuAcceleration,v=e.adaptive,b=e.roundOffsets,w=e.isFixed,O=g.x,x=void 0===O?0:O,E=g.y,P=void 0===E?0:E,M="function"==typeof b?b({x:x,y:P}):{x:x,y:P};x=M.x,P=M.y;var j=g.hasOwnProperty("x"),B=g.hasOwnProperty("y"),D=m,T="top",A=window;if(v){var C=getOffsetParent(s),L="clientHeight",R="clientWidth";C===getWindow(s)&&"static"!==getComputedStyle(C=getDocumentElement(s)).position&&"absolute"===h&&(L="scrollHeight",R="scrollWidth"),("top"===c||(c===m||c===d)&&"end"===l)&&(T=p,P-=(w&&A.visualViewport?A.visualViewport.height:C[L])-f.height,P*=y?1:-1),(c===m||("top"===c||c===p)&&"end"===l)&&(D=d,x-=(w&&A.visualViewport?A.visualViewport.width:C[R])-f.width,x*=y?1:-1)}var W=Object.assign({position:h},v&&S),N=!0===b?(n=(t={x:x,y:P}).x,r=t.y,{x:u(n*(o=window.devicePixelRatio||1))/o||0,y:u(r*o)/o||0}):{x:x,y:P};return(x=N.x,P=N.y,y)?Object.assign({},W,((a={})[T]=B?"0":"",a[D]=j?"0":"",a.transform=1>=(A.devicePixelRatio||1)?"translate("+x+"px, "+P+"px)":"translate3d("+x+"px, "+P+"px, 0)",a)):Object.assign({},W,((i={})[T]=B?P+"px":"",i[D]=j?x+"px":"",i.transform="",i))}var M={left:"right",right:"left",bottom:"top",top:"bottom"};function getOppositePlacement(e){return e.replace(/left|right|bottom|top/g,function(e){return M[e]})}var j={start:"end",end:"start"};function getOppositeVariationPlacement(e){return e.replace(/start|end/g,function(e){return j[e]})}function contains(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&isShadowRoot(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function rectToClientRect(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function getClientRectFromMixedType(e,t){var n,r,o,i,a,s,f,l,u,p,d,m,g,h,y,b,w;return t===v?rectToClientRect((n=getWindow(e),r=getDocumentElement(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0,o&&(i=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,f=o.offsetTop)),{width:i,height:a,x:s+getWindowScrollBarX(e),y:f})):isElement(t)?((l=getBoundingClientRect(t)).top=l.top+t.clientTop,l.left=l.left+t.clientLeft,l.bottom=l.top+t.clientHeight,l.right=l.left+t.clientWidth,l.width=t.clientWidth,l.height=t.clientHeight,l.x=l.left,l.y=l.top,l):rectToClientRect((u=getDocumentElement(e),d=getDocumentElement(u),m=getWindowScroll(u),g=null==(p=u.ownerDocument)?void 0:p.body,h=c(d.scrollWidth,d.clientWidth,g?g.scrollWidth:0,g?g.clientWidth:0),y=c(d.scrollHeight,d.clientHeight,g?g.scrollHeight:0,g?g.clientHeight:0),b=-m.scrollLeft+getWindowScrollBarX(u),w=-m.scrollTop,"rtl"===getComputedStyle(g||d).direction&&(b+=c(d.clientWidth,g?g.clientWidth:0)-h),{width:h,height:y,x:b,y:w}))}function getFreshSideObject(){return{top:0,right:0,bottom:0,left:0}}function mergePaddingObject(e){return Object.assign({},getFreshSideObject(),e)}function expandToHashMap(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}function detectOverflow(e,t){void 0===t&&(t={});var n,r,o,i,a,s,f,u=t,m=u.placement,g=void 0===m?e.placement:m,y=u.boundary,w=u.rootBoundary,O=u.elementContext,x=void 0===O?b:O,E=u.altBoundary,P=u.padding,S=void 0===P?0:P,M=mergePaddingObject("number"!=typeof S?S:expandToHashMap(S,h)),j=e.rects.popper,B=e.elements[void 0!==E&&E?x===b?"reference":b:x],D=(n=isElement(B)?B:B.contextElement||getDocumentElement(e.elements.popper),s=(a=[].concat("clippingParents"===(r=void 0===y?"clippingParents":y)?(o=listScrollParents(getParentNode(n)),isElement(i=["absolute","fixed"].indexOf(getComputedStyle(n).position)>=0&&isHTMLElement(n)?getOffsetParent(n):n)?o.filter(function(e){return isElement(e)&&contains(e,i)&&"body"!==getNodeName(e)}):[]):[].concat(r),[void 0===w?v:w]))[0],(f=a.reduce(function(e,t){var r=getClientRectFromMixedType(n,t);return e.top=c(r.top,e.top),e.right=l(r.right,e.right),e.bottom=l(r.bottom,e.bottom),e.left=c(r.left,e.left),e},getClientRectFromMixedType(n,s))).width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f),T=getBoundingClientRect(e.elements.reference),A=computeOffsets({reference:T,element:j,strategy:"absolute",placement:g}),C=rectToClientRect(Object.assign({},j,A)),L=x===b?C:T,R={top:D.top-L.top+M.top,bottom:L.bottom-D.bottom+M.bottom,left:D.left-L.left+M.left,right:L.right-D.right+M.right},W=e.modifiersData.offset;if(x===b&&W){var N=W[g];Object.keys(R).forEach(function(e){var t=[d,p].indexOf(e)>=0?1:-1,n=["top",p].indexOf(e)>=0?"y":"x";R[e]+=N[n]*t})}return R}function within(e,t,n){return c(e,l(t,n))}function getSideOffsets(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function isAnySideFullyClipped(e){return["top",d,p,m].some(function(t){return e[t]>=0})}var B=(i=void 0===(o=(r={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=getWindow(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(e){e.addEventListener("scroll",n.update,P)}),s&&f.addEventListener("resize",n.update,P),function(){i&&c.forEach(function(e){e.removeEventListener("scroll",n.update,P)}),s&&f.removeEventListener("resize",n.update,P)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=computeOffsets({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=n.adaptive,i=n.roundOffsets,a=void 0===i||i,s={placement:getBasePlacement(t.placement),variation:getVariation(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,mapToStyles(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,mapToStyles(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];isHTMLElement(o)&&getNodeName(o)&&(Object.assign(o.style,n),Object.keys(r).forEach(function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{});isHTMLElement(r)&&getNodeName(r)&&(Object.assign(r.style,i),Object.keys(o).forEach(function(e){r.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=O.reduce(function(e,n){var r,o,a,s,f,c;return e[n]=(r=t.rects,a=[m,"top"].indexOf(o=getBasePlacement(n))>=0?-1:1,f=(s="function"==typeof i?i(Object.assign({},r,{placement:n})):i)[0],c=s[1],f=f||0,c=(c||0)*a,[m,d].indexOf(o)>=0?{x:c,y:f}:{x:f,y:c}),e},{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,l=n.boundary,u=n.rootBoundary,v=n.altBoundary,b=n.flipVariations,x=void 0===b||b,E=n.allowedAutoPlacements,P=t.options.placement,S=getBasePlacement(P)===P,M=f||(S||!x?[getOppositePlacement(P)]:function(e){if(getBasePlacement(e)===g)return[];var t=getOppositePlacement(e);return[getOppositeVariationPlacement(e),t,getOppositeVariationPlacement(t)]}(P)),j=[P].concat(M).reduce(function(e,n){var r,o,i,a,s,f,p,d,m,y,v,b;return e.concat(getBasePlacement(n)===g?(o=(r={placement:n,boundary:l,rootBoundary:u,padding:c,flipVariations:x,allowedAutoPlacements:E}).placement,i=r.boundary,a=r.rootBoundary,s=r.padding,f=r.flipVariations,d=void 0===(p=r.allowedAutoPlacements)?O:p,0===(v=(y=(m=getVariation(o))?f?w:w.filter(function(e){return getVariation(e)===m}):h).filter(function(e){return d.indexOf(e)>=0})).length&&(v=y),Object.keys(b=v.reduce(function(e,n){return e[n]=detectOverflow(t,{placement:n,boundary:i,rootBoundary:a,padding:s})[getBasePlacement(n)],e},{})).sort(function(e,t){return b[e]-b[t]})):n)},[]),B=t.rects.reference,D=t.rects.popper,T=new Map,A=!0,C=j[0],L=0;L<j.length;L++){var R=j[L],W=getBasePlacement(R),N=getVariation(R)===y,H=["top",p].indexOf(W)>=0,k=H?"width":"height",V=detectOverflow(t,{placement:R,boundary:l,rootBoundary:u,altBoundary:v,padding:c}),F=H?N?d:m:N?p:"top";B[k]>D[k]&&(F=getOppositePlacement(F));var _=getOppositePlacement(F),q=[];if(i&&q.push(V[W]<=0),s&&q.push(V[F]<=0,V[_]<=0),q.every(function(e){return e})){C=R,A=!1;break}T.set(R,q)}if(A)for(var U=x?3:1,_loop=function(e){var t=j.find(function(t){var n=T.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return C=t,"break"},I=U;I>0&&"break"!==_loop(I);I--);t.placement!==C&&(t.modifiersData[r]._skip=!0,t.placement=C,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=n.altAxis,a=n.boundary,s=n.rootBoundary,f=n.altBoundary,u=n.padding,g=n.tether,h=void 0===g||g,v=n.tetherOffset,b=void 0===v?0:v,w=detectOverflow(t,{boundary:a,rootBoundary:s,padding:u,altBoundary:f}),O=getBasePlacement(t.placement),x=getVariation(t.placement),E=!x,P=getMainAxisFromPlacement(O),S="x"===P?"y":"x",M=t.modifiersData.popperOffsets,j=t.rects.reference,B=t.rects.popper,D="function"==typeof b?b(Object.assign({},t.rects,{placement:t.placement})):b,T="number"==typeof D?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),A=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,C={x:0,y:0};if(M){if(void 0===o||o){var L,R="y"===P?"top":m,W="y"===P?p:d,N="y"===P?"height":"width",H=M[P],k=H+w[R],V=H-w[W],F=h?-B[N]/2:0,_=x===y?j[N]:B[N],q=x===y?-B[N]:-j[N],U=t.elements.arrow,I=h&&U?getLayoutRect(U):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:getFreshSideObject(),X=z[R],Y=z[W],$=within(0,j[N],I[N]),G=E?j[N]/2-F-$-X-T.mainAxis:_-$-X-T.mainAxis,J=E?-j[N]/2+F+$+Y+T.mainAxis:q+$+Y+T.mainAxis,K=t.elements.arrow&&getOffsetParent(t.elements.arrow),Q=K?"y"===P?K.clientTop||0:K.clientLeft||0:0,Z=null!=(L=null==A?void 0:A[P])?L:0,ee=H+G-Z-Q,et=H+J-Z,en=within(h?l(k,ee):k,H,h?c(V,et):V);M[P]=en,C[P]=en-H}if(void 0!==i&&i){var er,eo,ei="x"===P?"top":m,ea="x"===P?p:d,es=M[S],ef="y"===S?"height":"width",ec=es+w[ei],el=es-w[ea],eu=-1!==["top",m].indexOf(O),ep=null!=(eo=null==A?void 0:A[S])?eo:0,ed=eu?ec:es-j[ef]-B[ef]-ep+T.altAxis,em=eu?es+j[ef]+B[ef]-ep-T.altAxis:el,eg=h&&eu?(er=within(ed,es,em))>em?em:er:within(h?ed:ec,es,h?em:el);M[S]=eg,C[S]=eg-es}t.modifiersData[r]=C}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,r=e.state,o=e.name,i=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,f=getBasePlacement(r.placement),c=getMainAxisFromPlacement(f),l=[m,d].indexOf(f)>=0?"height":"width";if(a&&s){var u=mergePaddingObject("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:expandToHashMap(t,h)),g=getLayoutRect(a),y="y"===c?"top":m,v="y"===c?p:d,b=r.rects.reference[l]+r.rects.reference[c]-s[c]-r.rects.popper[l],w=s[c]-r.rects.reference[c],O=getOffsetParent(a),x=O?"y"===c?O.clientHeight||0:O.clientWidth||0:0,E=u[y],P=x-g[l]-u[v],S=x/2-g[l]/2+(b/2-w/2),M=within(E,S,P);r.modifiersData[o]=((n={})[c]=M,n.centerOffset=M-S,n)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&contains(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=detectOverflow(t,{elementContext:"reference"}),s=detectOverflow(t,{altBoundary:!0}),f=getSideOffsets(a,r),c=getSideOffsets(s,o,i),l=isAnySideFullyClipped(f),u=isAnySideFullyClipped(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":u})}}]}).defaultModifiers)?[]:o,s=void 0===(a=r.defaultOptions)?E:a,function(e,t,n){void 0===n&&(n=s);var r,o={placement:"bottom",orderedModifiers:[],options:Object.assign({},E,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],f=!1,c={state:o,setOptions:function(n){var r,f,l,u,p,d="function"==typeof n?n(o.options):n;cleanupModifierEffects(),o.options=Object.assign({},s,o.options,d),o.scrollParents={reference:isElement(e)?listScrollParents(e):e.contextElement?listScrollParents(e.contextElement):[],popper:listScrollParents(t)};var m=(f=Object.keys(r=[].concat(i,o.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return r[e]}),l=new Map,u=new Set,p=[],f.forEach(function(e){l.set(e.name,e)}),f.forEach(function(e){u.has(e.name)||function sort(e){u.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!u.has(e)){var t=l.get(e);t&&sort(t)}}),p.push(e)}(e)}),x.reduce(function(e,t){return e.concat(p.filter(function(e){return e.phase===t}))},[]));return o.orderedModifiers=m.filter(function(e){return e.enabled}),o.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=e.effect;if("function"==typeof r){var i=r({state:o,name:t,instance:c,options:void 0===n?{}:n});a.push(i||function(){})}}),c.update()},forceUpdate:function(){if(!f){var e,t,n,r,i,a,s,l,p,d,m,g,h=o.elements,y=h.reference,v=h.popper;if(areValidElements(y,v)){o.rects={reference:(t=getOffsetParent(v),n="fixed"===o.options.strategy,r=isHTMLElement(t),l=isHTMLElement(t)&&(a=u((i=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=u(i.height)/t.offsetHeight||1,1!==a||1!==s),p=getDocumentElement(t),d=getBoundingClientRect(y,l),m={scrollLeft:0,scrollTop:0},g={x:0,y:0},(r||!r&&!n)&&(("body"!==getNodeName(t)||isScrollParent(p))&&(m=(e=t)!==getWindow(e)&&isHTMLElement(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:getWindowScroll(e)),isHTMLElement(t)?(g=getBoundingClientRect(t,!0),g.x+=t.clientLeft,g.y+=t.clientTop):p&&(g.x=getWindowScrollBarX(p))),{x:d.left+m.scrollLeft-g.x,y:d.top+m.scrollTop-g.y,width:d.width,height:d.height}),popper:getLayoutRect(v)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach(function(e){return o.modifiersData[e.name]=Object.assign({},e.data)});for(var b=0;b<o.orderedModifiers.length;b++){if(!0===o.reset){o.reset=!1,b=-1;continue}var w=o.orderedModifiers[b],O=w.fn,x=w.options,E=void 0===x?{}:x,P=w.name;"function"==typeof O&&(o=O({state:o,options:E,name:P,instance:c})||o)}}}},update:function(){return r||(r=new Promise(function(e){Promise.resolve().then(function(){r=void 0,e(new Promise(function(e){c.forceUpdate(),e(o)}))})})),r},destroy:function(){cleanupModifierEffects(),f=!0}};if(!areValidElements(e,t))return c;function cleanupModifierEffects(){a.forEach(function(e){return e()}),a=[]}return c.setOptions(n).then(function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)}),c}),D=n(61970),T=n.n(D),fromEntries=function(e){return e.reduce(function(e,t){var n=t[0],r=t[1];return e[n]=r,e},{})},A="undefined"!=typeof window&&window.document&&window.document.createElement?f.useLayoutEffect:f.useEffect,C=[],usePopper=function(e,t,n){void 0===n&&(n={});var r=f.useRef(null),o={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||C},i=f.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=i[0],s=i[1],c=f.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);s({styles:fromEntries(n.map(function(e){return[e,t.styles[e]||{}]})),attributes:fromEntries(n.map(function(e){return[e,t.attributes[e]]}))})},requires:["computeStyles"]}},[]),l=f.useMemo(function(){var e={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[c,{name:"applyStyles",enabled:!1}])};return T()(r.current,e)?r.current||e:(r.current=e,e)},[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,c]),u=f.useRef();return A(function(){u.current&&u.current.setOptions(l)},[l]),A(function(){if(null!=e&&null!=t){var r=(n.createPopper||B)(e,t,l);return u.current=r,function(){r.destroy(),u.current=null}}},[e,t,n.createPopper]),{state:u.current?u.current.state:null,styles:a.styles,attributes:a.attributes,update:u.current?u.current.update:null,forceUpdate:u.current?u.current.forceUpdate:null}}}}]);