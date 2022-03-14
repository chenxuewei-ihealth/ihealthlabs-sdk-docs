"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[4625],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var d=2;d<i;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87812:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return c}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],a={title:"BG5",sidebar_position:3},s=void 0,d={unversionedId:"blood_glucose/bg5",id:"version-1.4.9/blood_glucose/bg5",isDocsHomePage:!1,title:"BG5",description:"API Reference",source:"@site/react-native_versioned_docs/version-1.4.9/blood_glucose/bg5.md",sourceDirName:"blood_glucose",slug:"/blood_glucose/bg5",permalink:"/doc.sdk.ihealthlabs/react-native/blood_glucose/bg5",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native_versioned_docs/version-1.4.9/blood_glucose/bg5.md",tags:[],version:"1.4.9",sidebarPosition:3,frontMatter:{title:"BG5",sidebar_position:3},sidebar:"version-0.23.x/mainSidebar",previous:{title:"BG1S",permalink:"/doc.sdk.ihealthlabs/react-native/blood_glucose/bg1s"},next:{title:"BG5S",permalink:"/doc.sdk.ihealthlabs/react-native/blood_glucose/bg5s"}},c=[{value:"API Reference",id:"api-reference",children:[{value:"Import BG5 Module",id:"import-bg5-module",children:[]},{value:"Add and remove listener",id:"add-and-remove-listener",children:[]},{value:"set time",id:"set-time",children:[]},{value:"set unit",id:"set-unit",children:[]},{value:"get bottle information from barcode",id:"get-bottle-information-from-barcode",children:[]},{value:"set bottle id",id:"set-bottle-id",children:[]},{value:"get bottle id",id:"get-bottle-id",children:[]},{value:"Set bottle message",id:"set-bottle-message",children:[]},{value:"get bottle message",id:"get-bottle-message",children:[]},{value:"start a measurement",id:"start-a-measurement",children:[]},{value:"get data stored in the bg5 device",id:"get-data-stored-in-the-bg5-device",children:[]},{value:"delete the data stored in the bg5 device",id:"delete-the-data-stored-in-the-bg5-device",children:[]},{value:"keep link with phone",id:"keep-link-with-phone",children:[]}]}],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"import-bg5-module"},"Import BG5 Module"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  BG5Module,\n  BGProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,i.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(BG5Module.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,i.kt)("h3",{id:"set-time"},"set time"),(0,i.kt)("p",null,"If you use new bg5 or it has not been used for a long time. You should sync current time with bg5."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'BG5Module.setTime(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BG5Module.Event_Notify,  (event) => {\n    if (event.action === BGProfileModule.ACTION_SET_TIME) {\n        console.log("set time");\n    }\n});\n')),(0,i.kt)("h3",{id:"set-unit"},"set unit"),(0,i.kt)("p",null,"The API can change the unit of the bg5 display."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// 1: mmol/L 2: mg/dL\nBG5Module.setUnit(mac, 1);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BG5Module.Event_Notify,  (event) => {\n    if (event.action === BGProfileModule.ACTION_SET_UNIT) {\n        console.log("set unit");\n    }\n});\n')),(0,i.kt)("h3",{id:"get-bottle-information-from-barcode"},"get bottle information from barcode"),(0,i.kt)("p",null,"When you scan the barcode at the top of bottle, you can get a string. Pass the string to this API, you can get bottle id, Number of the strips and expire day."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BG5Module.getBottleInfoFromQR(QRCode);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BG5Module.Event_Notify,  (event) => {\n    if (event.action === BGProfileModule.ACTION_CODE_ANALYSIS) {\n        console.log(event[BGProfileModule.STRIP_NUM_BG]);\n        console.log(event[BGProfileModule.STRIP_EXPIRETIME_BG]);\n        console.log(event[BGProfileModule.BOTTLEID_BG]);\n    }\n});\n")),(0,i.kt)("h3",{id:"set-bottle-id"},"set bottle id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'BG5Module.getBottleInfoFromQR(QRCode);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BG5Module.Event_Notify,  (event) => {\n    if (event.action === BGProfileModule.ACTION_SET_BOTTLEID) {\n        console.log("Set bottleID");\n    }\n});\n')),(0,i.kt)("h3",{id:"get-bottle-id"},"get bottle id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BG5Module.getBottleInfoFromQR(QRCode);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BG5Module.Event_Notify,  (event) => {\n    if (event.action === BGProfileModule.ACTION_GET_BOTTLEID) {\n        console.log(event[BGProfileModule.GET_BOTTLEID]);\n    }\n});\n")),(0,i.kt)("h3",{id:"set-bottle-message"},"Set bottle message"),(0,i.kt)("p",null,"When you use a new bg5 device or you open a new strip bottle, must set bottle message to bg5 device."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * mac         device mac address\n * stripType   1: GOD, 2: GDH\n * measureType 1: measure with real blood, 2: measure with control solution\n * barcode     for GOD strip, you can scan barcode at top of the bottle. for GDH strip, set null.\n * unusedStrip unused strip.\n * expireDay   check the expire day on the bottle, and stirp is expired after opening for 90 days.\n */\nBG5Module.setBottleMessage(mac, 1, 1, QRCode, 25, "2027-07-15");\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BG5Module.Event_Notify,  (event) => {\n    if (event.action === BGProfileModule.ACTION_SET_BOTTLEMESSAGE) {\n        console.log("set bottle message success");\n    }\n});\n')),(0,i.kt)("h3",{id:"get-bottle-message"},"get bottle message"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BG5Module.getBottleMessage(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BG5Module.Event_Notify,  (event) => {\n    if (event.action === BGProfileModule.ACTION_GET_BOTTLEMESSAGE) {\n        console.log(event[BGProfileModule.GET_EXPIRECTIME]);\n        console.log(event[BGProfileModule.GET_USENUM]);\n    }\n});\n")),(0,i.kt)("h3",{id:"start-a-measurement"},"start a measurement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// * measureType 1: measure with real blood, 2: measure with control solution\nBG5Module.startMeasure(mac, 1);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BG5Module.Event_Notify,  (event) => {\n    if (event.action === BGProfileModule.ACTION_STRIP_IN) {\n        console.log("strip in");\n\n    } else if (event.action === BGProfileModule.ACTION_STRIP_OUT) {\n        console.log("strip out");\n\n    } else if (event.action === BGProfileModule.ACTION_GET_BLOOD) {\n        console.log("analysis blood");\n\n    } else if (event.action === BGProfileModule.ACTION_ONLINE_RESULT_BG) {\n        console.log(event[BGProfileModule.ONLINE_RESULT_BG]);\n        console.log(event[BGProfileModule.DATA_ID]);\n    }\n});\n')),(0,i.kt)("h3",{id:"get-data-stored-in-the-bg5-device"},"get data stored in the bg5 device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BG5Module.getOfflineData(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BG5Module.Event_Notify,  (event) => {\n    if (event.action === BGProfileModule.ACTION_GET_OFFLINEDATA_COUNT) {\n        console.log(event[BGProfileModule.GET_OFFLINEDATA_COUNT]);\n        console.log(event[BGProfileModule.GET_OFFLINEDATA]);\n    }\n});\n")),(0,i.kt)("h3",{id:"delete-the-data-stored-in-the-bg5-device"},"delete the data stored in the bg5 device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'BG5Module.deleteOfflineData(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BG5Module.Event_Notify,  (event) => {\n    if (event.action === BGProfileModule.ACTION_DELETE_OFFLINEDATA) {\n        console.log("delete data");\n    }\n});\n')),(0,i.kt)("h3",{id:"keep-link-with-phone"},"keep link with phone"),(0,i.kt)("p",null,"The BG5 use regular bluetooth communicate with phone. For save the power, if there is no communication, bg5 will turn off.\nThe api is used to keep link with phone."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BG5Module.holdLink(mac);\n")))}p.isMDXComponent=!0}}]);