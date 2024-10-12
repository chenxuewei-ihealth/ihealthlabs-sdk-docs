"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3008],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var o=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(t),v=l,P=f["".concat(d,".").concat(v)]||f[v]||u[v]||r;return t?o.createElement(P,a(a({ref:n},c),{},{components:t})):o.createElement(P,a({ref:n},c))}));function v(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,a=new Array(r);a[0]=f;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<r;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2228:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=t(7462),l=(t(7294),t(3905));const r={title:"BP5S",sidebar_position:3},a=void 0,i={unversionedId:"react-native/blood_pressure/bp5s",id:"react-native/blood_pressure/bp5s",title:"BP5S",description:"Device Version",source:"@site/docs/react-native/blood_pressure/bp5s.md",sourceDirName:"react-native/blood_pressure",slug:"/react-native/blood_pressure/bp5s",permalink:"/ihealthlabs-sdk-docs/docs/react-native/blood_pressure/bp5s",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react-native/blood_pressure/bp5s.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"BP5S",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"BP5",permalink:"/ihealthlabs-sdk-docs/docs/react-native/blood_pressure/bp5"},next:{title:"BP7",permalink:"/ihealthlabs-sdk-docs/docs/react-native/blood_pressure/bp7"}},d={},s=[{value:"Device Version",id:"device-version",level:2},{value:"1. HardVersion 1.0.0",id:"1-hardversion-100",level:3},{value:"2. HardVersion 2.0.0",id:"2-hardversion-200",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Import BP5S Module",id:"import-bp5s-module",level:3},{value:"Add and remove listener",id:"add-and-remove-listener",level:3},{value:"start a measurement",id:"start-a-measurement",level:3},{value:"cancel current measurement",id:"cancel-current-measurement",level:3},{value:"get battery",id:"get-battery",level:3},{value:"enable offline mode",id:"enable-offline-mode",level:3},{value:"disable offline mode",id:"disable-offline-mode",level:3},{value:"is enable offline mode",id:"is-enable-offline-mode",level:3},{value:"get quantity of data stored in the bp5 device",id:"get-quantity-of-data-stored-in-the-bp5-device",level:3},{value:"get data stored in the bp5 device",id:"get-data-stored-in-the-bp5-device",level:3},{value:"disconnect device",id:"disconnect-device",level:3},{value:"get all connected devices",id:"get-all-connected-devices",level:3}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"device-version"},"Device Version"),(0,l.kt)("h3",{id:"1-hardversion-100"},"1. HardVersion 1.0.0"),(0,l.kt)("h3",{id:"2-hardversion-200"},"2. HardVersion 2.0.0"),(0,l.kt)("p",null,'This version and above HardVersion support the offline data time correction function: when obtaining offline data, the "isRightTime" field is added. This field marks whether the historical data needs time correction (0: no need; 1: need correction). The device time and device system time can be obtained through the "getFunction" interface. Using the time difference between these two times and adding it to the time of the data that needs correction gives the correct time.'),(0,l.kt)("h2",{id:"api-reference"},"API Reference"),(0,l.kt)("h3",{id:"import-bp5s-module"},"Import BP5S Module"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  BP5SModule,\n  BPProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,l.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,l.kt)("h3",{id:"start-a-measurement"},"start a measurement"),(0,l.kt)("p",null,"The API is asyn function. It will return message until finish measurement."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'BP5SModule.startMeasure(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_ZOREING_BP) {\n        console.log("zero adjustment");\n\n    } else if (event.action === BPProfileModule.ACTION_ZOREOVER_BP) {\n        console.log("zero adjustment is done");\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_PRESSURE_BP) {\n        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_PULSEWAVE_BP) {\n        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.FLAG_HEARTBEAT_BP]);\n        console.log(event[BPProfileModule.PULSEWAVE_BP]);\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_RESULT_BP) {\n        console.log(event[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.PULSE_BP]);\n        console.log(event[BPProfileModule.MEASUREMENT_AHR_BP]);\n        console.log(event[BPProfileModule.DATAID]);\n\n    } else if (event.action === BPProfileModule.ACTION_ERROR_BP) {\n        console.log(event[BPProfileModule.ERROR_NUM_BP]);\n        console.log(event[BPProfileModule.ERROR_DESCRIPTION_BP]);\n    }\n});\n')),(0,l.kt)("h3",{id:"cancel-current-measurement"},"cancel current measurement"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.stopMeasure(mac);\n")),(0,l.kt)("h3",{id:"get-battery"},"get battery"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.getBattery(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_BATTERY_BP) {\n        console.log(event[BPProfileModule.BATTERY_BP]);\n    }\n});\n")),(0,l.kt)("h3",{id:"enable-offline-mode"},"enable offline mode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.enbleOffline(mac);\n")),(0,l.kt)("h3",{id:"disable-offline-mode"},"disable offline mode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.disableOffline(mac);\n")),(0,l.kt)("h3",{id:"is-enable-offline-mode"},"is enable offline mode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.isEnableOffline(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_SET_MODE) {\n        console.log(event[BPProfileModule.ACTION_SET_MODE]);\n    }\n});\n")),(0,l.kt)("h3",{id:"get-quantity-of-data-stored-in-the-bp5-device"},"get quantity of data stored in the bp5 device"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.getOfflineNum(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_HISTORICAL_NUM_BP) {\n        console.log(event[BPProfileModule.HISTORICAL_NUM_BP]);\n    }\n});\n")),(0,l.kt)("h3",{id:"get-data-stored-in-the-bp5-device"},"get data stored in the bp5 device"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'BP5SModule.getOfflineData(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_HISTORICAL_DATA_BP) {\n        let dataArray = event[BPProfileModule.HISTORICAL_DATA_BP];\n        if (dataArray == undefined) {\n            result = "There is not offline data in device"\n        }else {\n            for (let i = 0; i < dataArray.length; i++) {\n                let offlineData = dataArray[i];\n\n                console.log(offlineData[BPProfileModule.MEASUREMENT_DATE_BP]);\n                console.log(offlineData[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.PULSE_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_AHR_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_HSD_BP]);\n                console.log(offlineData[BPProfileModule.DATAID]);\n            }\n        }\n    }\n});\n')),(0,l.kt)("h3",{id:"disconnect-device"},"disconnect device"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.disConnect(mac);\n")),(0,l.kt)("h3",{id:"get-all-connected-devices"},"get all connected devices"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.getAllConnectedDevices();\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'BP5SModule.deleteData();\n\n// Return value\nconst notifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_DELETE_ALL_MEMORY_SUCCESS) {\n        console.log("Finish data transfer");\n    }\n});\n')))}u.isMDXComponent=!0}}]);