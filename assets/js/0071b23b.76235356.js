"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[7035],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=d(n),m=i,p=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return n?o.createElement(p,r(r({ref:t},c),{},{components:n})):o.createElement(p,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1057:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],l={title:"BG5S",sidebar_position:4},s=void 0,d={unversionedId:"blood_glucose/bg5s",id:"version-1.4.9/blood_glucose/bg5s",isDocsHomePage:!1,title:"BG5S",description:"API Reference",source:"@site/react-native_versioned_docs/version-1.4.9/blood_glucose/bg5s.md",sourceDirName:"blood_glucose",slug:"/blood_glucose/bg5s",permalink:"/ihealthlabs-sdk-docs/react-native/blood_glucose/bg5s",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/react-native_versioned_docs/version-1.4.9/blood_glucose/bg5s.md",tags:[],version:"1.4.9",sidebarPosition:4,frontMatter:{title:"BG5S",sidebar_position:4},sidebar:"version-0.23.x/mainSidebar",previous:{title:"BG5",permalink:"/ihealthlabs-sdk-docs/react-native/blood_glucose/bg5"},next:{title:"PO1",permalink:"/ihealthlabs-sdk-docs/react-native/blood_oxygen/po1"}},c=[{value:"API Reference",id:"api-reference",children:[{value:"Import BG5S Module",id:"import-bg5s-module",children:[]},{value:"Add and remove listener",id:"add-and-remove-listener",children:[]},{value:"Set time",id:"set-time",children:[]},{value:"Set Unit",id:"set-unit",children:[]},{value:"get bg5s status information",id:"get-bg5s-status-information",children:[]},{value:"delete userd strip",id:"delete-userd-strip",children:[]},{value:"delete offline data",id:"delete-offline-data",children:[]},{value:"get offline data",id:"get-offline-data",children:[]},{value:"adjust offline data",id:"adjust-offline-data",children:[]},{value:"start a measurement",id:"start-a-measurement",children:[]},{value:"get data stored in the bg5 device",id:"get-data-stored-in-the-bg5-device",children:[]}]}],u={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"import-bg5s-module"},"Import BG5S Module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  BG5SModule,\n  BG5SProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,a.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(BG5SModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,a.kt)("h3",{id:"set-time"},"Set time"),(0,a.kt)("p",null,"If you use new bg5 or it has not been used for a long time. You should sync current time with bg5."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'BG5SModule.setTime(mac);\n\n// response\n// {"type":"BG5S","mac":"5C0272267365","action":"action_set_time"}\nnotifyListener = DeviceEventEmitter.addListener(BG5SModule.Event_Notify,  (event) => {\n    if (event.action === BG5SProfileModule.ACTION_SET_TIME) {\n        console.log("set time");\n    }\n});\n')),(0,a.kt)("h3",{id:"set-unit"},"Set Unit"),(0,a.kt)("p",null,"The API can change the unit of the bg5 display."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// 1: mmol/L 2: mg/dL\nBG5SModule.setUnit(mac, 1);\n\n// response\n// {"type":"BG5S","mac":"5C0272267365","action":"action_set_unit"}\nnotifyListener = DeviceEventEmitter.addListener(BG5SModule.Event_Notify,  (event) => {\n    if (event.action === BG5SProfileModule.ACTION_SET_UNIT) {\n        console.log("set Unit");\n    }\n});\n')),(0,a.kt)("h3",{id:"get-bg5s-status-information"},"get bg5s status information"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'BG5SModule.getStatusInfo(mac);\n\n// response\n// {"info_unit":2,"info_code_version_ctl":3,"info_code_version_blood":3,"info_offline_data_num":0,"info_used_strip":0,////"info_timezone":8,"info_time":"2017-01-01 00:40:37","info_battery_level":71,"type":"BG5S","mac":"5C0272267365","action":"action_get_status_info"}\n\nnotifyListener = DeviceEventEmitter.addListener(BG5SModule.Event_Notify,  (event) => {\n    if (event.action === BG5SProfileModule.ACTION_GET_STATUS_INFO) {\n        console.log(event[BG5SProfileModule.INFO_BATTERY_LEVEL]);\n        console.log(event[BG5SProfileModule.INFO_TIME]);\n        console.log(event[BG5SProfileModule.INFO_TIMEZONE]);\n        console.log(event[BG5SProfileModule.INFO_USED_STRIP]);\n        console.log(event[BG5SProfileModule.INFO_OFFLINE_DATA_NUM]);\n        console.log(event[BG5SProfileModule.INFO_CODE_VERSION_BLOOD]);\n        console.log(event[BG5SProfileModule.INFO_CODE_VERSION_CTL]);\n        console.log(event[BG5SProfileModule.INFO_UNIT]);\n    }\n});\n')),(0,a.kt)("h3",{id:"delete-userd-strip"},"delete userd strip"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'BG5SModule.deleteUsedStrip(QRCode);\n\n// response\n// {"type":"BG5S","mac":"5C0272267365","action":"action_delete_used_strip"}\nnotifyListener = DeviceEventEmitter.addListener(BG5SModule.Event_Notify,  (event) => {\n    if (event.action === BG5SProfileModule.ACTION_DELETE_USED_STRIP) {\n        \n    }\n});\n')),(0,a.kt)("h3",{id:"delete-offline-data"},"delete offline data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'BG5SModule.deleteOfflineData(QRCode);\n\n// response\n// {"type":"BG5S","mac":"5C0272267365","action":"action_delete_offline_data"}\nnotifyListener = DeviceEventEmitter.addListener(BG5SModule.Event_Notify,  (event) => {\n    if (event.action === BG5SProfileModule.ACTION_DELETE_OFFLINE_DATA) {\n        \n    }\n});\n')),(0,a.kt)("h3",{id:"get-offline-data"},"get offline data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'BG5SModule.getOfflineData(mac);\n\n// response\n// {"offline_data":[{"dataID":"D8615BFEB73C3928D83131894D68E87B","data_measure_timezone":8,"data_measure_time":"2019-04-22 01:31:47","data_value":1023,"data_time_proof":false}],"type":"BG5S","mac":"5C0272267365","action":"action_get_offline_data"}\n\nnotifyListener = DeviceEventEmitter.addListener(BG5SModule.Event_Notify,  (event) => {\n    if (event.action === BG5SProfileModule.ACTION_GET_OFFLINE_DATA) {\n        console.log(event[BG5SProfileModule.OFFLINE_DATA]);\n    }\n});\n')),(0,a.kt)("h3",{id:"adjust-offline-data"},"adjust offline data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'BG5SModule.adjustOfflineData(mac);\n\n// response\n// {"offline_data":[{"dataID":"D8615BFEB73C3928D83131894D68E87B","data_measure_timezone":8,"data_measure_time":"2019-04-22 01:31:47","data_value":1023,"data_time_proof":false}],"type":"BG5S","mac":"5C0272267365","action":"action_get_offline_data"}\n\nnotifyListener = DeviceEventEmitter.addListener(BG5SModule.Event_Notify,  (event) => {\n    if (event.action === "action_adjust_offline_data") {\n        console.log(event[BG5SProfileModule.OFFLINE_DATA]);\n    }\n});\n')),(0,a.kt)("h3",{id:"start-a-measurement"},"start a measurement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// * measureType 1: measure with real blood, 2: measure with control solution\nBG5SModule.startMeasure(mac, 1);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BG5SModule.Event_Notify,  (event) => {\n    if (event.action === BG5SProfileModule.ACTION_STRIP_IN) {\n        console.log("strip in");\n\n    } else if (event.action === BG5SProfileModule.ACTION_STRIP_OUT) {\n        console.log("strip out");\n\n    } else if (event.action === BG5SProfileModule.ACTION_GET_BLOOD) {\n        console.log("analysis blood");\n\n    } else if (event.action === BG5SProfileModule.ACTION_RESULT) {\n        // {"dataID":"FCB4230B3F081306DCC0404090861A36","result_value":84,"type":"BG5S","mac":"5C0272267365","action":"action_result"}\n        console.log(event[BG5SProfileModule.RESULT_VALUE]);\n        console.log(event[BG5SProfileModule.DATA_ID]);\n    }\n});\n')),(0,a.kt)("h3",{id:"get-data-stored-in-the-bg5-device"},"get data stored in the bg5 device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'BG5SModule.setOfflineModel(mac, true);\n\n// response\n// // {"type":"BG5S","mac":"5C0272267365","action":"action_delete_offline_data"}\nnotifyListener = DeviceEventEmitter.addListener(BG5SModule.Event_Notify,  (event) => {\n    if (event.action === BG5SProfileModule.ACTION_SET_OFFLINE_MEASUREMENT_MODE) {\n\n    }\n});\n')))}f.isMDXComponent=!0}}]);