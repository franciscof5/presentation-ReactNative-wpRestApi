!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="08c89d4c-0850-4803-99f9-147d45070d59",e._sentryDebugIdIdentifier="sentry-dbid-08c89d4c-0850-4803-99f9-147d45070d59")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16884],{25504:function(e,t,r){var n=r(20426);e.exports=function(e,t){var r;if("function"!=typeof t)throw TypeError("Expected a function");return e=n(e),function(){return--e>0&&(r=t.apply(this,arguments)),e<=1&&(t=void 0),r}}},59002:function(e,t,r){var n=r(25504);e.exports=function(e){return n(2,e)}},16884:function(e,t,r){"use strict";r.d(t,{A:function(){return TermsConsent}});var n=r(19278),s=r(10175),o=r(87720),c=r(50959),a=r(36122),i=r(80417),l=r(4814),u=r(54805),d=r(5171),p=r(76354),f=r(11527);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}let Check=e=>{let{id:t,className:r,children:s}=e,{submitCount:c}=(0,o.u6)(),[{value:a},{touched:d,error:b},{setValue:m}]=(0,o.U$)(t),y=(c>0||d)&&b,j=`${t}-error`;return(0,f.jsxs)("div",{className:(0,l.Z)("flex flex-col",r),children:[(0,f.jsx)(u.Z,{id:t,name:t,"data-testid":t,className:p.X2,"aria-describedby":y?j:void 0,checked:a,onChange:e=>m(e.currentTarget.checked),children:(0,f.jsx)("span",{className:"mr-2",children:s})}),y&&(0,f.jsx)("div",{id:j,className:"ds-font-tiny mt-1 text-alertRed",children:(0,f.jsx)(i.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},b))})]})};var b=r(17970),m=r(3598);let y=["terms"];function TermsConsent_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function TermsConsent_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?TermsConsent_ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):TermsConsent_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let TermsConsent=e=>{let{terms:t}=e,r=(0,s.Z)(e,y),n=(0,a.Z)(),{values:j,setValues:v,setFieldValue:O,getFieldMeta:g}=(0,o.u6)(),w=null==t?void 0:t.every(e=>{let{id:t}=e;return!!j[t]});return(0,c.useEffect)(()=>{null!=t&&t.length&&t.forEach(e=>{let{value:t}=g(e.id);void 0===t&&O(e.id,!1)},{})},[t]),(0,f.jsx)("div",TermsConsent_objectSpread(TermsConsent_objectSpread({},r),{},{className:(0,l.Z)(r.className),children:(0,f.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,f.jsxs)("div",{className:"flex space-x-1",children:[(0,f.jsx)("span",{className:"font-medium",children:(0,f.jsx)(i.Z,TermsConsent_objectSpread({},b.Z.dataUsageConsentTitle))}),(0,f.jsx)(d.Z,{className:"max-w-[320px]",ariaLabel:n.formatMessage(b.Z.dataUsageConsentHint),toolTipText:(0,f.jsx)(i.Z,TermsConsent_objectSpread({},b.Z.dataUsageConsentHint)),hasCloseButton:!0,tooltipClassName:"sm:max-w-xs ds-font-small"})]}),(0,f.jsxs)("div",{className:"flex flex-col space-y-3",children:[(0,f.jsx)(u.Z,{id:"accept-all",name:"accept-all","data-testid":"accept-all",className:p.X2,checked:w,onChange:()=>{v(TermsConsent_objectSpread(TermsConsent_objectSpread({},j??{}),t.reduce((e,t)=>TermsConsent_objectSpread(TermsConsent_objectSpread({},e),{},{[t.id]:!w}),{})))},children:(0,f.jsx)("span",{className:"mr-2",children:(0,f.jsx)(i.Z,TermsConsent_objectSpread({},b.Z.dataConsentAcceptAll))})}),(0,f.jsx)("hr",{className:"mt-4 border-0 border-b border-gray3"}),null==t?void 0:t.map(e=>{let t=m.WF[null==e?void 0:e.id];return t?(0,f.jsx)(Check,{id:e.id,children:(0,f.jsx)(i.Z,TermsConsent_objectSpread(TermsConsent_objectSpread({},t.text),{},{values:{LINK:null!=t&&t.linkUrl?(0,f.jsx)("a",{className:"text-viridian",target:"_blank",rel:"noreferrer",href:null==t?void 0:t.linkUrl,children:(0,f.jsx)(i.Z,TermsConsent_objectSpread({},null==t?void 0:t.linkText))}):void 0}}))},e.id):null})]})]})}))}},8789:function(e,t,r){"use strict";r.d(t,{En:function(){return c},LY:function(){return a},Y0:function(){return u},a$:function(){return acceptAction},py:function(){return i},yb:function(){return l}});var n=r(59002),s=r.n(n),o=r(47971);let c="Terms",a="TermsModal",i="TermsSubmit",acceptAction=(e,t)=>(0,o.ZP)({event:"gaEvent",eventCategory:c,eventAction:t?"AcceptTermsReg":"AcceptTermsModal",eventLabel:e}),l=s()(()=>{(0,o.ZP)({event:"gaEvent",eventCategory:c,eventLabel:a,eventAction:"shown"})}),u=s()(()=>{(0,o.ZP)({event:"gaEvent",eventCategory:c,eventLabel:"TermsReg",eventAction:"shown"})})},3598:function(e,t,r){"use strict";let n;r.d(t,{WF:function(){return w},YU:function(){return useRegTerms},e6:function(){return useTerms}});var s=r(19278),o=r(50959),c=r(36122),a=r(61439),i=r(74596);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let l={},u=i.Ps`
  mutation acceptTerms($input: AcceptTermsInput!) {
    acceptTerms(input: $input) {
      errors {
        code
        message
      }
    }
  }
`;var d=r(76185);function termsDueByLocation_generated_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function termsDueByLocation_generated_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?termsDueByLocation_generated_ownKeys(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):termsDueByLocation_generated_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let p={},f=i.Ps`
  query termsDueByLocation($input: TermsDueByLocationInput!) {
    termsDueByLocation(input: $input) {
      termsDue {
        id
        kind
        required
      }
    }
  }
`;var b=r(53933),m=r(49516),y=r(43114),j=r(50542),v=r(17970),O=r(8789),g=r(76354);function useTerms_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function useTerms_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?useTerms_ownKeys(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):useTerms_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}(n||(n={})).KISA="kisa";let w={[b.K5.KisaTerms]:{text:v.Z.kisaTerms,linkUrl:(0,j.ziY)(),linkText:v.Z.dataConsentLink},[b.K5.KisaPersonal]:{text:v.Z.kisaPersonal_v2,linkUrl:(0,j.VBv)(),linkText:v.Z.dataConsentLink},[b.K5.KisaDataTransfer]:{text:v.Z.kisaDataTransfer,linkUrl:(0,j.$m8)(),linkText:v.Z.dataConsentLink},[b.K5.KisaOptional]:{text:v.Z.kisaOptional_v2,linkUrl:(0,j.VBv)(),linkText:v.Z.dataConsentLink},[b.K5.KisaEmailMarketing]:{text:v.Z.kisaEmailMarketing_v2,linkUrl:(0,j.VBv)(),linkText:v.Z.dataConsentLink}},getHasKISATerms=e=>null==e?void 0:e.some(e=>e.kind===n.KISA),useRegTerms=()=>{var e;let{0:t,1:r}=(0,o.useState)(),{data:n}=function(e){let t=termsDueByLocation_generated_objectSpread(termsDueByLocation_generated_objectSpread({},p),e);return d.a(f,t)}({variables:{input:{countryCode:t}},skip:!t}),s=null==n?void 0:null===(e=n.termsDueByLocation)||void 0===e?void 0:e.termsDue,c=(0,g.Wp)(s),a=(0,o.useCallback)(e=>{e&&r(e)},[]),i=getHasKISATerms(s);return{terms:s,hasDuesTerms:c,hasKISA:i,onCountryChange:a}},useTerms=e=>{var t,r,n;let{user:s}=(0,y.Z)("cache-first",e),[i,{loading:d}]=function(e){let t=_objectSpread(_objectSpread({},l),void 0);return a.D(u,t)}(),{0:p,1:f}=(0,o.useState)([]),{sendNotification:b}=(0,m.ZP)(),j=(0,c.Z)(),w=(0,o.useCallback)(async e=>{try{var t,r,n;let s=await i({variables:{input:{terms:null==e?void 0:e.map(e=>({type:e}))}}});if((null==s?void 0:null===(t=s.data)||void 0===t?void 0:null===(r=t.acceptTerms)||void 0===r?void 0:null===(n=r.errors)||void 0===n?void 0:n.length)===0)f(t=>[...t,...e]),(0,O.a$)("success");else throw Error("error")}catch(e){b(j.formatMessage(v.Z.saveError),{id:"terms",type:m.Dy.ERROR}),(0,O.a$)("error")}},[i,j,b]),h=null==s?void 0:null===(t=s.terms)||void 0===t?void 0:null===(r=t.termsDue)||void 0===r?void 0:null===(n=r.map(e=>useTerms_objectSpread(useTerms_objectSpread({},e),{},{id:(0,g.Ux)(e.id)})))||void 0===n?void 0:n.filter(e=>!(null!=p&&p.includes(e.id))),T=(0,g.Wp)(h),x=getHasKISATerms(h);return{acceptTerms:w,loading:d,terms:h,hasDuesTerms:T,hasKISA:x}}}}]);