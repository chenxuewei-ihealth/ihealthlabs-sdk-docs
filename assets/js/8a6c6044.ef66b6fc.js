"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"BG1",sidebar_position:1},i=void 0,l={unversionedId:"react-native/blood_glucose/bg1",id:"react-native/blood_glucose/bg1",title:"BG1",description:"API Reference",source:"@site/docs/react-native/blood_glucose/bg1.md",sourceDirName:"react-native/blood_glucose",slug:"/react-native/blood_glucose/bg1",permalink:"/ihealthlabs-sdk-docs/docs/react-native/blood_glucose/bg1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react-native/blood_glucose/bg1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"BG1",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"HS6",permalink:"/ihealthlabs-sdk-docs/docs/react-native/scale/hs6"},next:{title:"BG1S",permalink:"/ihealthlabs-sdk-docs/docs/react-native/blood_glucose/bg1s"}},s={},c=[{value:"API Reference",id:"api-reference",level:2},{value:"Import BG1S Module",id:"import-bg1s-module",level:3},{value:"Add and remove listener",id:"add-and-remove-listener",level:3},{value:"get function",id:"get-function",level:3},{value:"start a measurement",id:"start-a-measurement",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"import-bg1s-module"},"Import BG1S Module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  BG1SModule,\n  BG1SProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,o.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(BG1SModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,o.kt)("h3",{id:"get-function"},"get function"),(0,o.kt)("p",null,"Set current time to BG1S and return battery level, bg1s code version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'BG1SModule.getFunction(mac);\n\n// response\n// {"action": "action_get_device_info", "battery": 100, "info_version_code_blood_bg1s": 1, "info_version_code_ctl_bg1s": 2, "mac": "F65FF0CBA330", "type": "BG1S"}\nnotifyListener = DeviceEventEmitter.addListener(BG1SModule.Event_Notify,  (event) => {\n    if (event.action === BG1SProfileModule.ACTION_CODE_ANALYSIS) {\n        console.log(event[BG1SProfileModule.INFO_BATTERY_BG1S]);\n        console.log(event[BG1SProfileModule.INFO_VERSION_CODE_BLOOD_BG1S]);\n        console.log(event[BG1SProfileModule.INFO_VERSION_CODE_CTL_BG1S]);\n    }\n});\n')),(0,o.kt)("h3",{id:"start-a-measurement"},"start a measurement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// measureMode 0: measure with real blood, 1: measure with control solution\nBG1SModule.measure(mac, 1);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BG1SModule.Event_Notify,  (event) => {\n    if (event.action === BG1SProfileModule.ACTION_STRIP_INSERTION_STATUS) {\n        // {"action": "action_strip_insertion_status", "describe": "strip in", "insertion_status": 1, "mac": "F65FF0CBA330", "type": "BG1S"}\n        console.log("strip in");\n\n    } else if (event.action === BG1SProfileModule.ACTION_GET_BLOOD) {\n        //  {"action": "action_get_blood", "describe": "get blood", "mac": "F65FF0CBA330", "type": "BG1S"}\n        console.log("blood");\n\n    } else if (event.action === BG1SProfileModule.ACTION_MEASURE_RESULT) {\n        // {"action": "action_measure_result", "mac": "F65FF0CBA330", "measure_mode": 0, "measure_result": 0, "type": "BG1S"}\n        console.log(event[BG1SProfileModule.MEASURE_MODE]);\n        console.log(event[BG1SProfileModule.MEASURE_RESULT]);\n    }\n});\n')))}d.isMDXComponent=!0}}]);