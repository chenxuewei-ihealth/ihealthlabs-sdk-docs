"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[7094],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},T=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),T=c(n),m=o,p=T["".concat(s,".").concat(m)]||T[m]||u[m]||i;return n?r.createElement(p,a(a({ref:t},d),{},{components:n})):r.createElement(p,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=T;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}T.displayName="MDXCreateElement"},9772:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return T},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"PT3SBT",sidebar_position:3},s=void 0,c={unversionedId:"thermometer/pt3sbt",id:"version-1.4.9/thermometer/pt3sbt",isDocsHomePage:!1,title:"PT3SBT",description:"API Reference",source:"@site/react-native_versioned_docs/version-1.4.9/thermometer/pt3sbt.md",sourceDirName:"thermometer",slug:"/thermometer/pt3sbt",permalink:"/ihealthlabs-sdk-docs/react-native/thermometer/pt3sbt",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/react-native_versioned_docs/version-1.4.9/thermometer/pt3sbt.md",tags:[],version:"1.4.9",sidebarPosition:3,frontMatter:{title:"PT3SBT",sidebar_position:3},sidebar:"version-0.23.x/mainSidebar",previous:{title:"TS28B",permalink:"/ihealthlabs-sdk-docs/react-native/thermometer/ts28b"},next:{title:"AM3",permalink:"/ihealthlabs-sdk-docs/react-native/tracker/am3"}},d=[{value:"API Reference",id:"api-reference",children:[{value:"Import PT3SBT Module",id:"import-pt3sbt-module",children:[]},{value:"Add and remove listener",id:"add-and-remove-listener",children:[]},{value:"set time",id:"set-time",children:[]},{value:"get battery",id:"get-battery",children:[]},{value:"set unit",id:"set-unit",children:[]},{value:"get unit",id:"get-unit",children:[]},{value:"get history data count",id:"get-history-data-count",children:[]},{value:"get history data",id:"get-history-data",children:[]},{value:"delete history data",id:"delete-history-data",children:[]},{value:"online measurement",id:"online-measurement",children:[]}]}],u={toc:d};function T(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"import-pt3sbt-module"},"Import PT3SBT Module"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  PT3SBTModule,\n  PT3SBTProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,i.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,i.kt)("h3",{id:"set-time"},"set time"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'PT3SBTModule.setTime(mac);\n\n// response\n// {status: "success", type: "PT3SBT", mac: "004D320C41BE", action: "action_set_time"}\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    if (event.action === PT3SBTProfileModule.ACTION_SET_TIME) {\n        console.log(event[NT13BProfileModule.STATUS]);\n    } \n});\n')),(0,i.kt)("h3",{id:"get-battery"},"get battery"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'PT3SBTModule.getBattery(mac);\n\n// response\n// { battery: 70, type: "PT3SBT", mac: "004D320C41BE", action: "action_get_battery"}\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    if (event.action === PT3SBTProfileModule.ACTION_GET_BATTERY) {\n        console.log(event[PT3SBTProfileModule.BATTERY]);\n    } \n});\n')),(0,i.kt)("h3",{id:"set-unit"},"set unit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// 1: centigrade, 2: fahrenheit\nPT3SBTModule.setUnit(mac, unit);\n\n// response\n// {status: "success", type: "PT3SBT", mac: "004D320C41BE", action: "action_set_unit"}\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    if (event.action === PT3SBTProfileModule.ACTION_SET_UNIT) {\n        console.log(event[PT3SBTProfileModule.STATUS]);\n    } \n});\n')),(0,i.kt)("h3",{id:"get-unit"},"get unit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'PT3SBTModule.getUnit(mac);\n\n// response\n// {unit: 2, type: "PT3SBT", mac: "004D320C41BE", action: "action_get_unit"}\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    if (event.action === PT3SBTProfileModule.ACTION_GET_UNIT) {\n        console.log(event[PT3SBTProfileModule.UNIT]);\n    } \n});\n')),(0,i.kt)("h3",{id:"get-history-data-count"},"get history data count"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'PT3SBTModule.getHistoryCount(mac);\n\n// response\n// {count: 37, type: "PT3SBT", mac: "004D320C41BE", action: "action_get_history_count"}\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    if (event.action === PT3SBTProfileModule.ACTION_GET_HISTORY_COUNT) {\n        console.log(event[PT3SBTProfileModule.COUNT]);\n    } \n});\n')),(0,i.kt)("h3",{id:"get-history-data"},"get history data"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: After call get history data, must to delele history data. If don't, the PT3SBT will keep on offline mode.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'PT3SBTModule.getHistoryData(mac);\n\n// response\n// {history: Array, type: "PT3SBT", mac: "004D320C41BE", action: "action_get_history_data"}\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    if (event.action === PT3SBTProfileModule.ACTION_GET_HISTORY_DATA) {\n        const arr = event[PT3SBTProfileModule.HISTORY];\n        arr.foreach(item => {\n            console.log(item[PT3SBTProfileModule.TEMPERATURE]);\n            console.log(item[PT3SBTProfileModule.TS]);\n        })\n    } \n});\n')),(0,i.kt)("h3",{id:"delete-history-data"},"delete history data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'PT3SBTModule.deleteHistoryData(mac);\n\n// response\n// {status: "success", type: "PT3SBT", mac: "004D320C41BE", action: "action_delete_history_data"}\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    if (event.action === PT3SBTProfileModule.ACTION_DELETE_HISTORY_DATA) {\n        console.log(event[PT3SBTProfileModule.STATUS]);\n    } \n});\n')),(0,i.kt)("h3",{id:"online-measurement"},"online measurement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// response\n// {Tbody: 3845", type: "PT3SBT", mac: "004D320C41BE", action: "action_temperature_measurement"}\n// the real temperature is Tbody / 100, this is centigrade\nnotifyListener = DeviceEventEmitter.addListener(PT3SBTModule.Event_Notify,  (event) => {\n    if (event.action === PT3SBTProfileModule.ACTION_TEMPERATURE_MEASUREMENT) {\n        console.log(event[PT3SBTProfileModule.TEMPERATURE]);\n    } \n});\n')))}T.isMDXComponent=!0}}]);