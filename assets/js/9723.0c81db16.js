"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9723,4972],{1262:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),o=n(2389);function a(e){let{children:t,fallback:n}=e;return(0,o.Z)()?r.createElement(r.Fragment,null,null==t?void 0:t()):n??null}},5328:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var r=n(7294),o=n(6010),a=n(2802),i=n(3320),l=n(1944),s=n(5281),u=n(4477),c=n(1116),d=n(2775),f=n(5999),p=n(2466),m=n(5936);const v="backToTopButton_sjWU",b="backToTopButtonShow_xfvO";function h(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(!1),{startScroll:i,cancelScroll:l}=(0,p.Ct)();return(0,p.RF)(((e,n)=>{let{scrollY:r}=e;const i=null==n?void 0:n.scrollY;i&&(a.current?a.current=!1:r>=i?(l(),o(!1)):r<t?o(!1):r+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,m.S)((e=>{e.location.hash&&(a.current=!0,o(!1))})),{shown:n,scrollToTop:()=>i(0)}}({threshold:300});return r.createElement("button",{"aria-label":(0,f.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",s.k.common.backToTopButton,v,e&&b),type:"button",onClick:t})}var E=n(6775),g=n(9155),x=n(7462);function y(e){return r.createElement("svg",(0,x.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const w="expandButton_m80_",S="expandButtonIcon_BlDH";function C(e){let{toggleSidebar:t}=e;return r.createElement("div",{className:w,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},r.createElement(y,{className:S}))}const R="docSidebarContainer_b6E3",T="docSidebarContainerHidden_b3ry";function k(e){let{children:t}=e;const n=(0,c.V)();return r.createElement(r.Fragment,{key:(null==n?void 0:n.name)??"noSidebar"},t)}function O(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:a}=e;const{pathname:i}=(0,E.TH)(),[l,u]=(0,r.useState)(!1),c=(0,r.useCallback)((()=>{l&&u(!1),a((e=>!e))}),[a,l]);return r.createElement("aside",{className:(0,o.Z)(s.k.docs.docSidebarContainer,R,n&&T),onTransitionEnd:e=>{e.currentTarget.classList.contains(R)&&n&&u(!0)}},r.createElement(k,null,r.createElement(g.Z,{sidebar:t,path:i,onCollapse:c,isHidden:l})),l&&r.createElement(C,{toggleSidebar:c}))}const L={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function I(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.V)();return r.createElement("main",{className:(0,o.Z)(L.docMainContainer,(t||!a)&&L.docMainContainerEnhanced)},r.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",L.docItemWrapper,t&&L.docItemWrapperEnhanced)},n))}const N="docPage__5DB",P="docsWrapper_BCFX";function F(e){let{children:t}=e;const n=(0,c.V)(),[o,a]=(0,r.useState)(!1);return r.createElement(d.Z,{wrapperClassName:P},r.createElement(h,null),r.createElement("div",{className:N},n&&r.createElement(O,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:a}),r.createElement(I,{hiddenSidebarContainer:o},t)))}var A=n(4972),D=n(197);function M(e){const{versionMetadata:t}=e,n=(0,a.hI)(e);if(!n)return r.createElement(A.default,null);const{docElement:d,sidebarName:f,sidebarItems:p}=n;return r.createElement(r.Fragment,null,r.createElement(D.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),r.createElement(l.FG,{className:(0,o.Z)(s.k.wrapper.docsPages,s.k.page.docsDocPage,e.versionMetadata.className)},r.createElement(u.q,{version:t},r.createElement(c.b,{name:f,items:p},r.createElement(F,null,d)))))}},5469:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(7462),o=n(7294),a=n(902);const i=Symbol("EmptyContext"),l=o.createContext(i);function s(e){let{children:t}=e;const[n,r]=(0,o.useState)(null),a=(0,o.useMemo)((()=>({expandedItem:n,setExpandedItem:r})),[n]);return o.createElement(l.Provider,{value:a},t)}var u=n(6010),c=n(2802),d=n(6668),f=n(8596),p=n(6043),m=n(5281),v=n(9960),b=n(5999),h=n(2389);function E(e){let{categoryLabel:t,onClick:n}=e;return o.createElement("button",{"aria-label":(0,b.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function g(e){let{item:t,onItemClick:n,activePath:s,level:b,index:g,...x}=e;const{items:y,label:w,collapsible:S,className:C,href:R}=t,{docs:{sidebar:{autoCollapseCategories:T}}}=(0,d.L)(),k=function(e){const t=(0,h.Z)();return(0,o.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),L=(0,c._F)(t,s),I=(0,f.Mg)(R,s),{collapsed:N,setCollapsed:P}=(0,p.u)({initialState:()=>!!S&&(!L&&t.collapsed)}),{expandedItem:F,setExpandedItem:A}=function(){const e=(0,o.useContext)(l);if(e===i)throw new a.i6("DocSidebarItemsExpandedStateProvider");return e}(),D=function(e){void 0===e&&(e=!N),A(e?null:g),P(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:r}=e;const i=(0,a.D9)(t);(0,o.useEffect)((()=>{t&&!i&&n&&r(!1)}),[t,i,n,r])}({isActive:L,collapsed:N,updateCollapsed:D}),(0,o.useEffect)((()=>{S&&F&&F!==g&&T&&P(!0)}),[S,F,g,P,T]),o.createElement("li",{className:(0,u.Z)(m.k.docs.docSidebarItemCategory,m.k.docs.docSidebarItemCategoryLevel(b),"menu__list-item",{"menu__list-item--collapsed":N},C)},o.createElement("div",{className:(0,u.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":I})},o.createElement(v.Z,(0,r.Z)({className:(0,u.Z)("menu__link",{"menu__link--sublist":S,"menu__link--sublist-caret":!R&&S,"menu__link--active":L}),onClick:S?e=>{null==n||n(t),R?D(!1):(e.preventDefault(),D())}:()=>{null==n||n(t)},"aria-current":I?"page":void 0,"aria-expanded":S?!N:void 0,href:S?k??"#":k},x),w),R&&S&&o.createElement(E,{categoryLabel:w,onClick:e=>{e.preventDefault(),D()}})),o.createElement(p.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:N},o.createElement(O,{items:y,tabIndex:N?-1:0,onItemClick:n,activePath:s,level:b+1})))}var x=n(3919),y=n(8483);const w="menuExternalLink_NmtK";function S(e){let{item:t,onItemClick:n,activePath:a,level:i,index:l,...s}=e;const{href:d,label:f,className:p}=t,b=(0,c._F)(t,a),h=(0,x.Z)(d);return o.createElement("li",{className:(0,u.Z)(m.k.docs.docSidebarItemLink,m.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",p),key:f},o.createElement(v.Z,(0,r.Z)({className:(0,u.Z)("menu__link",!h&&w,{"menu__link--active":b}),"aria-current":b?"page":void 0,to:d},h&&{onClick:n?()=>n(t):void 0},s),f,!h&&o.createElement(y.Z,null)))}const C="menuHtmlItem_M9Kj";function R(e){let{item:t,level:n,index:r}=e;const{value:a,defaultStyle:i,className:l}=t;return o.createElement("li",{className:(0,u.Z)(m.k.docs.docSidebarItemLink,m.k.docs.docSidebarItemLinkLevel(n),i&&[C,"menu__list-item"],l),key:r,dangerouslySetInnerHTML:{__html:a}})}function T(e){let{item:t,...n}=e;switch(t.type){case"category":return o.createElement(g,(0,r.Z)({item:t},n));case"html":return o.createElement(R,(0,r.Z)({item:t},n));default:return o.createElement(S,(0,r.Z)({item:t},n))}}function k(e){let{items:t,...n}=e;return o.createElement(s,null,t.map(((e,t)=>o.createElement(T,(0,r.Z)({key:t,item:e,index:t},n)))))}const O=(0,o.memo)(k)},4972:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(7294),o=n(5999),a=n(1944),i=n(2775);function l(){return r.createElement(r.Fragment,null,r.createElement(a.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),r.createElement(i.Z,null,r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},4477:(e,t,n)=>{n.d(t,{E:()=>l,q:()=>i});var r=n(7294),o=n(902);const a=r.createContext(null);function i(e){let{children:t,version:n}=e;return r.createElement(a.Provider,{value:n},t)}function l(){const e=(0,r.useContext)(a);if(null===e)throw new o.i6("DocsVersionProvider");return e}},6700:()=>{},6558:(e,t,n)=>{n.d(t,{R:()=>oe});var r=n(7294),o=n(4192),a=n(9946),i=n(6723),l=n(3855);function s(e,t){let[n,o]=(0,r.useState)(e),a=(0,l.E)(e);return(0,i.e)((()=>o(a.current)),[a,o,...t]),n}var u,c=n(3784),d=n(2351),f=n(2984),p=n(9362),m=((u=m||{}).Space=" ",u.Enter="Enter",u.Escape="Escape",u.Backspace="Backspace",u.Delete="Delete",u.ArrowLeft="ArrowLeft",u.ArrowUp="ArrowUp",u.ArrowRight="ArrowRight",u.ArrowDown="ArrowDown",u.Home="Home",u.End="End",u.PageUp="PageUp",u.PageDown="PageDown",u.Tab="Tab",u);var v,b=((v=b||{})[v.First=0]="First",v[v.Previous=1]="Previous",v[v.Next=2]="Next",v[v.Last=3]="Last",v[v.Specific=4]="Specific",v[v.Nothing=5]="Nothing",v);function h(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),o=null!=r?r:-1,a=(()=>{switch(e.focus){case 0:return n.findIndex((e=>!t.resolveDisabled(e)));case 1:{let e=n.slice().reverse().findIndex(((e,n,r)=>!(-1!==o&&r.length-n-1>=o)&&!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 2:return n.findIndex(((e,n)=>!(n<=o)&&!t.resolveDisabled(e)));case 3:{let e=n.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 4:return n.findIndex((n=>t.resolveId(n)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===a?r:a}function E(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}function g(e){return"undefined"==typeof window?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let x=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var y,w,S,C=((S=C||{})[S.First=1]="First",S[S.Previous=2]="Previous",S[S.Next=4]="Next",S[S.Last=8]="Last",S[S.WrapAround=16]="WrapAround",S[S.NoScroll=32]="NoScroll",S),R=((w=R||{})[w.Error=0]="Error",w[w.Overflow=1]="Overflow",w[w.Success=2]="Success",w[w.Underflow=3]="Underflow",w),T=((y=T||{})[y.Previous=-1]="Previous",y[y.Next=1]="Next",y);var k=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(k||{});["textarea","input"].join(",");function O(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let a=r.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}var L=n(6567);function I(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function N(e,t){let[n,o]=(0,r.useState)((()=>I(e)));return(0,i.e)((()=>{o(I(e))}),[e.type,e.as]),(0,i.e)((()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")}),[n,t]),n}var P=n(1021),F=n(3781);function A(e,t,n){let o=(0,l.E)(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}var D=(e=>(e[e.None=1]="None",e[e.IgnoreScrollbars=2]="IgnoreScrollbars",e))(D||{});function M(e,t,n=1){let o=(0,r.useRef)(!1),a=(0,F.z)((r=>{if(o.current)return;o.current=!0,(0,P.Y)((()=>{o.current=!1}));let a=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),i=r.target;if(i.ownerDocument.documentElement.contains(i)){if(2==(2&n)){let e=20,t=i.ownerDocument.documentElement;if(r.clientX>t.clientWidth-e||r.clientX<e||r.clientY>t.clientHeight-e||r.clientY<e)return}for(let e of a){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(i))return}return t(r,i)}}));A("pointerdown",a),A("mousedown",a)}var _=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(_||{});let Z=(0,d.yV)((function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":2==(2&n)||void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&n)&&2!=(2&n)&&{display:"none"}}};return(0,d.sY)({ourProps:o,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})}));function H(e={},t=null,n=[]){for(let[r,o]of Object.entries(e))j(n,z(t,r),o);return n}function z(e,t){return e?e+"["+t+"]":t}function j(e,t,n){if(Array.isArray(n))for(let[r,o]of n.entries())j(e,z(t,r.toString()),o);else n instanceof Date?e.push([t,n.toISOString()]):"boolean"==typeof n?e.push([t,n?"1":"0"]):"string"==typeof n?e.push([t,n]):"number"==typeof n?e.push([t,`${n}`]):null==n?e.push([t,""]):H(n,t,e)}var B=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(B||{}),U=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(U||{}),V=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(V||{}),Y=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.SetDisabled=2]="SetDisabled",e[e.SetOrientation=3]="SetOrientation",e[e.GoToOption=4]="GoToOption",e[e.Search=5]="Search",e[e.ClearSearch=6]="ClearSearch",e[e.RegisterOption=7]="RegisterOption",e[e.UnregisterOption=8]="UnregisterOption",e))(Y||{});function W(e,t=(e=>e)){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,r=O(t(e.options.slice()),(e=>e.dataRef.current.domRef.current)),o=n?r.indexOf(n):null;return-1===o&&(o=null),{options:r,activeOptionIndex:o}}let $={1:e=>e.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.disabled||0===e.listboxState)return e;let t=e.activeOptionIndex,{value:n,mode:r,compare:o}=e.propsRef.current,a=e.options.findIndex((e=>{let t=e.dataRef.current.value;return(0,f.E)(r,{1:()=>n.some((e=>o(e,t))),0:()=>o(n,t)})}));return-1!==a&&(t=a),{...e,listboxState:0,activeOptionIndex:t}},2:(e,t)=>e.disabled===t.disabled?e:{...e,disabled:t.disabled},3:(e,t)=>e.orientation===t.orientation?e:{...e,orientation:t.orientation},4(e,t){var n;if(e.disabled||1===e.listboxState)return e;let r=W(e),o=h(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:o,activationTrigger:null!=(n=t.trigger)?n:1}},5:(e,t)=>{if(e.disabled||1===e.listboxState)return e;let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),o=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find((e=>{var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))})),a=o?e.options.indexOf(o):-1;return-1===a||a===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:a,activationTrigger:1}},6:e=>e.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},7:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},r=W(e,(e=>[...e,n]));if(null===e.activeOptionIndex){let{value:o,mode:a,compare:i}=e.propsRef.current,l=t.dataRef.current.value;(0,f.E)(a,{1:()=>o.some((e=>i(e,l))),0:()=>i(o,l)})&&(r.activeOptionIndex=r.options.indexOf(n))}return{...e,...r}},8:(e,t)=>{let n=W(e,(e=>{let n=e.findIndex((e=>e.id===t.id));return-1!==n&&e.splice(n,1),e}));return{...e,...n,activationTrigger:1}}},q=(0,r.createContext)(null);function G(e){let t=(0,r.useContext)(q);if(null===t){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,G),t}return t}function Q(e,t){return(0,f.E)(t.type,$,e,t)}q.displayName="ListboxContext";let K=r.Fragment,J=(0,d.yV)((function(e,t){let{value:n,name:o,onChange:a,disabled:l=!1,horizontal:s=!1,multiple:u=!1,...p}=e;const m=s?"horizontal":"vertical";let v=(0,c.T)(t),b=(0,r.useReducer)(Q,{listboxState:1,propsRef:{current:{value:n,onChange:a,mode:u?1:0,compare:(0,F.z)(((e,t)=>e===t))}},labelRef:(0,r.createRef)(),buttonRef:(0,r.createRef)(),optionsRef:(0,r.createRef)(),disabled:l,orientation:m,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1}),[{listboxState:h,propsRef:E,optionsRef:y,buttonRef:w},S]=b;E.current.value=n,E.current.mode=u?1:0,(0,i.e)((()=>{E.current.onChange=e=>(0,f.E)(E.current.mode,{0:()=>a(e),1(){let t=E.current.value.slice(),n=t.indexOf(e);return-1===n?t.push(e):t.splice(n,1),a(t)}})}),[a,E]),(0,i.e)((()=>S({type:2,disabled:l})),[l]),(0,i.e)((()=>S({type:3,orientation:m})),[m]),M([w,y],((e,t)=>{var n;0===h&&(S({type:1}),function(e,t=0){var n;return e!==(null==(n=g(e))?void 0:n.body)&&(0,f.E)(t,{0:()=>e.matches(x),1(){let t=e;for(;null!==t;){if(t.matches(x))return!0;t=t.parentElement}return!1}})}(t,k.Loose)||(e.preventDefault(),null==(n=w.current)||n.focus()))}));let C=(0,r.useMemo)((()=>({open:0===h,disabled:l})),[h,l]),R={ref:v};return r.createElement(q.Provider,{value:b},r.createElement(L.up,{value:(0,f.E)(h,{0:L.ZM.Open,1:L.ZM.Closed})},null!=o&&null!=n&&H({[o]:n}).map((([e,t])=>r.createElement(Z,{features:_.Hidden,...(0,d.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:e,value:t})}))),(0,d.sY)({ourProps:R,theirProps:p,slot:C,defaultTag:K,name:"Listbox"})))})),X=(0,d.yV)((function(e,t){var n;let[i,l]=G("Listbox.Button"),u=(0,c.T)(i.buttonRef,t),f=`headlessui-listbox-button-${(0,a.M)()}`,p=(0,o.G)(),v=(0,F.z)((e=>{switch(e.key){case m.Space:case m.Enter:case m.ArrowDown:e.preventDefault(),l({type:0}),p.nextFrame((()=>{i.propsRef.current.value||l({type:4,focus:b.First})}));break;case m.ArrowUp:e.preventDefault(),l({type:0}),p.nextFrame((()=>{i.propsRef.current.value||l({type:4,focus:b.Last})}))}})),h=(0,F.z)((e=>{if(e.key===m.Space)e.preventDefault()})),g=(0,F.z)((e=>{if(E(e.currentTarget))return e.preventDefault();0===i.listboxState?(l({type:1}),p.nextFrame((()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),l({type:0}))})),x=s((()=>{if(i.labelRef.current)return[i.labelRef.current.id,f].join(" ")}),[i.labelRef.current,f]),y=(0,r.useMemo)((()=>({open:0===i.listboxState,disabled:i.disabled})),[i]),w=e,S={ref:u,id:f,type:N(e,i.buttonRef),"aria-haspopup":!0,"aria-controls":null==(n=i.optionsRef.current)?void 0:n.id,"aria-expanded":i.disabled?void 0:0===i.listboxState,"aria-labelledby":x,disabled:i.disabled,onKeyDown:v,onKeyUp:h,onClick:g};return(0,d.sY)({ourProps:S,theirProps:w,slot:y,defaultTag:"button",name:"Listbox.Button"})})),ee=(0,d.yV)((function(e,t){let[n]=G("Listbox.Label"),o=`headlessui-listbox-label-${(0,a.M)()}`,i=(0,c.T)(n.labelRef,t),l=(0,F.z)((()=>{var e;return null==(e=n.buttonRef.current)?void 0:e.focus({preventScroll:!0})})),s=(0,r.useMemo)((()=>({open:0===n.listboxState,disabled:n.disabled})),[n]);return(0,d.sY)({ourProps:{ref:i,id:o,onClick:l},theirProps:e,slot:s,defaultTag:"label",name:"Listbox.Label"})})),te=d.AN.RenderStrategy|d.AN.Static,ne=(0,d.yV)((function(e,t){var n;let[i,l]=G("Listbox.Options"),u=(0,c.T)(i.optionsRef,t),v=`headlessui-listbox-options-${(0,a.M)()}`,h=(0,o.G)(),E=(0,o.G)(),x=(0,L.oJ)(),y=null!==x?x===L.ZM.Open:0===i.listboxState;(0,r.useEffect)((()=>{var e;let t=i.optionsRef.current;!t||0===i.listboxState&&t!==(null==(e=g(t))?void 0:e.activeElement)&&t.focus({preventScroll:!0})}),[i.listboxState,i.optionsRef]);let w=(0,F.z)((e=>{switch(E.dispose(),e.key){case m.Space:if(""!==i.searchQuery)return e.preventDefault(),e.stopPropagation(),l({type:5,value:e.key});case m.Enter:if(e.preventDefault(),e.stopPropagation(),null!==i.activeOptionIndex){let{dataRef:e}=i.options[i.activeOptionIndex];i.propsRef.current.onChange(e.current.value)}0===i.propsRef.current.mode&&(l({type:1}),(0,p.k)().nextFrame((()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})})));break;case(0,f.E)(i.orientation,{vertical:m.ArrowDown,horizontal:m.ArrowRight}):return e.preventDefault(),e.stopPropagation(),l({type:4,focus:b.Next});case(0,f.E)(i.orientation,{vertical:m.ArrowUp,horizontal:m.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),l({type:4,focus:b.Previous});case m.Home:case m.PageUp:return e.preventDefault(),e.stopPropagation(),l({type:4,focus:b.First});case m.End:case m.PageDown:return e.preventDefault(),e.stopPropagation(),l({type:4,focus:b.Last});case m.Escape:return e.preventDefault(),e.stopPropagation(),l({type:1}),h.nextFrame((()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));case m.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(l({type:5,value:e.key}),E.setTimeout((()=>l({type:6})),350))}})),S=s((()=>{var e,t,n;return null!=(n=null==(e=i.labelRef.current)?void 0:e.id)?n:null==(t=i.buttonRef.current)?void 0:t.id}),[i.labelRef.current,i.buttonRef.current]),C=(0,r.useMemo)((()=>({open:0===i.listboxState})),[i]),R=e,T={"aria-activedescendant":null===i.activeOptionIndex||null==(n=i.options[i.activeOptionIndex])?void 0:n.id,"aria-multiselectable":1===i.propsRef.current.mode||void 0,"aria-labelledby":S,"aria-orientation":i.orientation,id:v,onKeyDown:w,role:"listbox",tabIndex:0,ref:u};return(0,d.sY)({ourProps:T,theirProps:R,slot:C,defaultTag:"ul",features:te,visible:y,name:"Listbox.Options"})})),re=(0,d.yV)((function(e,t){let{disabled:n=!1,value:o,...l}=e,[s,u]=G("Listbox.Option"),m=`headlessui-listbox-option-${(0,a.M)()}`,v=null!==s.activeOptionIndex&&s.options[s.activeOptionIndex].id===m,{value:h,compare:E}=s.propsRef.current,g=(0,f.E)(s.propsRef.current.mode,{1:()=>h.some((e=>E(e,o))),0:()=>E(h,o)}),x=(0,r.useRef)(null),y=(0,c.T)(t,x);(0,i.e)((()=>{if(0!==s.listboxState||!v||0===s.activationTrigger)return;let e=(0,p.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=x.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[x,v,s.listboxState,s.activationTrigger,s.activeOptionIndex]);let w=(0,r.useRef)({disabled:n,value:o,domRef:x});(0,i.e)((()=>{w.current.disabled=n}),[w,n]),(0,i.e)((()=>{w.current.value=o}),[w,o]),(0,i.e)((()=>{var e,t;w.current.textValue=null==(t=null==(e=x.current)?void 0:e.textContent)?void 0:t.toLowerCase()}),[w,x]);let S=(0,F.z)((()=>s.propsRef.current.onChange(o)));(0,i.e)((()=>(u({type:7,id:m,dataRef:w}),()=>u({type:8,id:m}))),[w,m]);let C=(0,F.z)((e=>{if(n)return e.preventDefault();S(),0===s.propsRef.current.mode&&(u({type:1}),(0,p.k)().nextFrame((()=>{var e;return null==(e=s.buttonRef.current)?void 0:e.focus({preventScroll:!0})})))})),R=(0,F.z)((()=>{if(n)return u({type:4,focus:b.Nothing});u({type:4,focus:b.Specific,id:m})})),T=(0,F.z)((()=>{n||v||u({type:4,focus:b.Specific,id:m,trigger:0})})),k=(0,F.z)((()=>{n||!v||u({type:4,focus:b.Nothing})})),O=(0,r.useMemo)((()=>({active:v,selected:g,disabled:n})),[v,g,n]);return(0,d.sY)({ourProps:{id:m,ref:y,role:"option",tabIndex:!0===n?void 0:-1,"aria-disabled":!0===n||void 0,"aria-selected":!0===g||void 0,disabled:void 0,onClick:C,onFocus:R,onPointerMove:T,onMouseMove:T,onPointerLeave:k,onMouseLeave:k},theirProps:l,slot:O,defaultTag:"li",name:"Listbox.Option"})})),oe=Object.assign(J,{Button:X,Label:ee,Options:ne,Option:re})},1407:(e,t,n)=>{n.d(t,{u:()=>_});var r=n(7294),o=n(2351),a=n(6567),i=n(2984),l=n(1021),s=n(9946),u=n(6723);function c(){let e=(0,r.useRef)(!1);return(0,u.e)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var d=n(3855),f=n(2180),p=n(3784);var m=n(9362);function v(e,...t){e&&t.length>0&&e.classList.add(...t)}function b(e,...t){e&&t.length>0&&e.classList.remove(...t)}var h,E=((h=E||{}).Ended="ended",h.Cancelled="cancelled",h);function g(e,t,n,r){let o=n?"enter":"leave",a=(0,m.k)(),l=void 0!==r?function(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}(r):()=>{},s=(0,i.E)(o,{enter:()=>t.enter,leave:()=>t.leave}),u=(0,i.E)(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=(0,i.E)(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return b(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),v(e,...s,...c),a.nextFrame((()=>{b(e,...c),v(e,...u),function(e,t){let n=(0,m.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[a,i]=[r,o].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t}));if(a+i!==0){let r=[];r.push(n.addEventListener(e,"transitionrun",(()=>{r.splice(0).forEach((e=>e())),r.push(n.addEventListener(e,"transitionend",(()=>{t("ended"),r.splice(0).forEach((e=>e()))}),{once:!0}),n.addEventListener(e,"transitioncancel",(()=>{t("cancelled"),r.splice(0).forEach((e=>e()))}),{once:!0}))}),{once:!0}))}else t("ended");n.add((()=>t("cancelled"))),n.dispose}(e,(n=>("ended"===n&&(b(e,...s),v(e,...t.entered)),l(n))))})),a.dispose}var x=n(4192),y=n(3781);function w({container:e,direction:t,classes:n,events:r,onStart:o,onStop:a}){let l=c(),s=(0,x.G)(),f=(0,d.E)(t),p=(0,y.z)((()=>(0,i.E)(f.current,{enter:()=>r.current.beforeEnter(),leave:()=>r.current.beforeLeave(),idle:()=>{}}))),v=(0,y.z)((()=>(0,i.E)(f.current,{enter:()=>r.current.afterEnter(),leave:()=>r.current.afterLeave(),idle:()=>{}})));(0,u.e)((()=>{let t=(0,m.k)();s.add(t.dispose);let r=e.current;if(r&&"idle"!==f.current&&l.current)return t.dispose(),p(),o.current(f.current),t.add(g(r,n.current,"enter"===f.current,(e=>{t.dispose(),(0,i.E)(e,{[E.Ended](){v(),a.current(f.current)},[E.Cancelled]:()=>{}})}))),t.dispose}),[t])}function S(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let C=(0,r.createContext)(null);C.displayName="TransitionContext";var R,T=((R=T||{}).Visible="visible",R.Hidden="hidden",R);let k=(0,r.createContext)(null);function O(e){return"children"in e?O(e.children):e.current.filter((({state:e})=>"visible"===e)).length>0}function L(e){let t=(0,d.E)(e),n=(0,r.useRef)([]),a=c(),s=(0,y.z)(((e,r=o.l4.Hidden)=>{let s=n.current.findIndex((({id:t})=>t===e));-1!==s&&((0,i.E)(r,{[o.l4.Unmount](){n.current.splice(s,1)},[o.l4.Hidden](){n.current[s].state="hidden"}}),(0,l.Y)((()=>{var e;!O(n)&&a.current&&(null==(e=t.current)||e.call(t))})))})),u=(0,y.z)((e=>{let t=n.current.find((({id:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):n.current.push({id:e,state:"visible"}),()=>s(e,o.l4.Unmount)}));return(0,r.useMemo)((()=>({children:n,register:u,unregister:s})),[u,s,n])}function I(){}k.displayName="NestingContext";let N=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function P(e){var t;let n={};for(let r of N)n[r]=null!=(t=e[r])?t:I;return n}let F=o.AN.RenderStrategy,A=(0,o.yV)((function(e,t){let{beforeEnter:n,afterEnter:l,beforeLeave:u,afterLeave:c,enter:m,enterFrom:v,enterTo:b,entered:h,leave:E,leaveFrom:g,leaveTo:x,...y}=e,R=(0,r.useRef)(null),T=(0,p.T)(R,t),[I,N]=(0,r.useState)("visible"),A=y.unmount?o.l4.Unmount:o.l4.Hidden,{show:D,appear:M,initial:_}=function(){let e=(0,r.useContext)(C);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:Z,unregister:H}=function(){let e=(0,r.useContext)(k);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),z=(0,r.useRef)(null),j=(0,s.M)();(0,r.useEffect)((()=>{if(j)return Z(j)}),[Z,j]),(0,r.useEffect)((()=>{if(A===o.l4.Hidden&&j){if(D&&"visible"!==I)return void N("visible");(0,i.E)(I,{hidden:()=>H(j),visible:()=>Z(j)})}}),[I,j,Z,H,D,A]);let B=(0,d.E)({enter:S(m),enterFrom:S(v),enterTo:S(b),entered:S(h),leave:S(E),leaveFrom:S(g),leaveTo:S(x)}),U=function(e){let t=(0,r.useRef)(P(e));return(0,r.useEffect)((()=>{t.current=P(e)}),[e]),t}({beforeEnter:n,afterEnter:l,beforeLeave:u,afterLeave:c}),V=(0,f.H)();(0,r.useEffect)((()=>{if(V&&"visible"===I&&null===R.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[R,I,V]);let Y=_&&!M,W=!V||Y||z.current===D?"idle":D?"enter":"leave",$=(0,r.useRef)(!1),q=L((()=>{$.current||(N("hidden"),H(j))}));w({container:R,classes:B,events:U,direction:W,onStart:(0,d.E)((()=>{$.current=!0})),onStop:(0,d.E)((e=>{$.current=!1,"leave"===e&&!O(q)&&(N("hidden"),H(j))}))}),(0,r.useEffect)((()=>{!Y||(A===o.l4.Hidden?z.current=null:z.current=D)}),[D,Y,I]);let G=y,Q={ref:T};return r.createElement(k.Provider,{value:q},r.createElement(a.up,{value:(0,i.E)(I,{visible:a.ZM.Open,hidden:a.ZM.Closed})},(0,o.sY)({ourProps:Q,theirProps:G,defaultTag:"div",features:F,visible:"visible"===I,name:"Transition.Child"})))})),D=(0,o.yV)((function(e,t){let{show:n,appear:l=!1,unmount:s,...c}=e,d=(0,r.useRef)(null),m=(0,p.T)(d,t);(0,f.H)();let v=(0,a.oJ)();if(void 0===n&&null!==v&&(n=(0,i.E)(v,{[a.ZM.Open]:!0,[a.ZM.Closed]:!1})),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[b,h]=(0,r.useState)(n?"visible":"hidden"),E=L((()=>{h("hidden")})),[g,x]=(0,r.useState)(!0),y=(0,r.useRef)([n]);(0,u.e)((()=>{!1!==g&&y.current[y.current.length-1]!==n&&(y.current.push(n),x(!1))}),[y,n]);let w=(0,r.useMemo)((()=>({show:n,appear:l,initial:g})),[n,l,g]);(0,r.useEffect)((()=>{if(n)h("visible");else if(O(E)){let e=d.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")}),[n,E]);let S={unmount:s};return r.createElement(k.Provider,{value:E},r.createElement(C.Provider,{value:w},(0,o.sY)({ourProps:{...S,as:r.Fragment,children:r.createElement(A,{ref:m,...S,...c})},theirProps:{},defaultTag:r.Fragment,features:F,visible:"visible"===b,name:"Transition"})))})),M=(0,o.yV)((function(e,t){let n=null!==(0,r.useContext)(C),o=null!==(0,a.oJ)();return r.createElement(r.Fragment,null,!n&&o?r.createElement(D,{ref:t,...e}):r.createElement(A,{ref:t,...e}))})),_=Object.assign(D,{Child:M,Root:D})},4192:(e,t,n)=>{n.d(t,{G:()=>a});var r=n(7294),o=n(9362);function a(){let[e]=(0,r.useState)(o.k);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}},3781:(e,t,n)=>{n.d(t,{z:()=>a});var r=n(7294),o=n(3855);let a=function(e){let t=(0,o.E)(e);return r.useCallback(((...e)=>t.current(...e)),[t])}},9946:(e,t,n)=>{n.d(t,{M:()=>u});var r,o=n(7294),a=n(6723),i=n(2180);let l=0;function s(){return++l}let u=null!=(r=o.useId)?r:function(){let e=(0,i.H)(),[t,n]=o.useState(e?s:null);return(0,a.e)((()=>{null===t&&n(s())}),[t]),null!=t?""+t:void 0}},6723:(e,t,n)=>{n.d(t,{e:()=>o});var r=n(7294);let o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect},3855:(e,t,n)=>{n.d(t,{E:()=>a});var r=n(7294),o=n(6723);function a(e){let t=(0,r.useRef)(e);return(0,o.e)((()=>{t.current=e}),[e]),t}},2180:(e,t,n)=>{n.d(t,{H:()=>a});var r=n(7294);let o={serverHandoffComplete:!1};function a(){let[e,t]=(0,r.useState)(o.serverHandoffComplete);return(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>{!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)}),[]),e}},3784:(e,t,n)=>{n.d(t,{T:()=>i});var r=n(7294),o=n(3781);let a=Symbol();function i(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=(0,o.z)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[a])))?void 0:n}},6567:(e,t,n)=>{n.d(t,{ZM:()=>i,oJ:()=>l,up:()=>s});var r=n(7294);let o=(0,r.createContext)(null);o.displayName="OpenClosedContext";var a,i=((a=i||{})[a.Open=0]="Open",a[a.Closed=1]="Closed",a);function l(){return(0,r.useContext)(o)}function s({value:e,children:t}){return r.createElement(o.Provider,{value:e},t)}},9362:(e,t,n)=>{function r(){let e=[],t=[],n={enqueue(e){t.push(e)},addEventListener:(e,t,r,o)=>(e.addEventListener(t,r,o),n.add((()=>e.removeEventListener(t,r,o)))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add((()=>cancelAnimationFrame(t)))},nextFrame:(...e)=>n.requestAnimationFrame((()=>n.requestAnimationFrame(...e))),setTimeout(...e){let t=setTimeout(...e);return n.add((()=>clearTimeout(t)))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0){let[t]=e.splice(n,1);t()}}),dispose(){for(let t of e.splice(0))t()},async workQueue(){for(let e of t.splice(0))await e()}};return n}n.d(t,{k:()=>r})},2984:(e,t,n)=>{function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}n.d(t,{E:()=>r})},1021:(e,t,n)=>{function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}n.d(t,{Y:()=>r})},2351:(e,t,n)=>{n.d(t,{AN:()=>l,l4:()=>s,oA:()=>p,sY:()=>u,yV:()=>f});var r,o,a=n(7294),i=n(2984),l=((o=l||{})[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o),s=((r=s||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function u({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:a=!0,name:l}){let s=d(t,e);if(a)return c(s,n,r,l);let u=null!=o?o:0;if(2&u){let{static:e=!1,...t}=s;if(e)return c(t,n,r,l)}if(1&u){let{unmount:e=!0,...t}=s;return(0,i.E)(e?0:1,{0:()=>null,1:()=>c({...t,hidden:!0,style:{display:"none"}},n,r,l)})}return c(s,n,r,l)}function c(e,t={},n,r){let{as:o=n,children:i,refName:l="ref",...s}=m(e,["unmount","static"]),u=void 0!==e.ref?{[l]:e.ref}:{},c="function"==typeof i?i(t):i;s.className&&"function"==typeof s.className&&(s.className=s.className(t));let f={};if(o===a.Fragment&&Object.keys(p(s)).length>0){if(!(0,a.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,a.cloneElement)(c,Object.assign({},d(c.props,p(m(s,["ref"]))),f,u))}return(0,a.createElement)(o,Object.assign({},m(s,["ref"]),o!==a.Fragment&&u,o!==a.Fragment&&f),c)}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let o=n[r];for(let n of o){if(e.defaultPrevented)return;n(e,...t)}}});return t}function f(e){var t;return Object.assign((0,a.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function m(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}},8121:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"}))}))},8057:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}))},1013:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"}))}))}}]);