"use strict";(self.webpackChunkdoc_sdk=self.webpackChunkdoc_sdk||[]).push([[917],{5291:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return r},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var o=t(7462),l=t(3366),i=(t(7294),t(3905)),a=["components"],d={},r="BP5",c={unversionedId:"device/bp5",id:"device/bp5",isDocsHomePage:!1,title:"BP5",description:"import BP5 module",source:"@site/docs/device/bp5.md",sourceDirName:"device",slug:"/device/bp5",permalink:"/docs/device/bp5",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/device/bp5.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BP3L",permalink:"/docs/device/bp3l"},next:{title:"BP5S",permalink:"/docs/device/bp5s"}},s=[{value:"import BP5 module",id:"import-bp5-module",children:[]},{value:"APIs",id:"apis",children:[{value:"add and remove listener",id:"add-and-remove-listener",children:[]},{value:"start a measurement",id:"start-a-measurement",children:[]},{value:"cancel current measurement",id:"cancel-current-measurement",children:[]},{value:"get battery",id:"get-battery",children:[]},{value:"enable offline mode",id:"enable-offline-mode",children:[]},{value:"disable offline mode",id:"disable-offline-mode",children:[]},{value:"is enable offline mode",id:"is-enable-offline-mode",children:[]},{value:"get quantity of data stored in the bp5 device",id:"get-quantity-of-data-stored-in-the-bp5-device",children:[]},{value:"get data stored in the bp5 device",id:"get-data-stored-in-the-bp5-device",children:[]},{value:"disconnect device",id:"disconnect-device",children:[]},{value:"get device information",id:"get-device-information",children:[]},{value:"get all connected devices",id:"get-all-connected-devices",children:[]}]}],u={toc:s};function f(e){var n=e.components,t=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bp5"},"BP5"),(0,i.kt)("h2",{id:"import-bp5-module"},"import BP5 module"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  BP5Module,\n  BPProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,i.kt)("h2",{id:"apis"},"APIs"),(0,i.kt)("h3",{id:"add-and-remove-listener"},"add and remove listener"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,i.kt)("h3",{id:"start-a-measurement"},"start a measurement"),(0,i.kt)("p",null,"The API is asyn function. It will return message until finish measurement."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'BP5Module.startMeasure(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_ZOREING_BP) {\n        console.log("zero adjustment");\n\n    } else if (event.action === BPProfileModule.ACTION_ZOREOVER_BP) {\n        console.log("zero adjustment is done");\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_PRESSURE_BP) {\n        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_PULSEWAVE_BP) {\n        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.FLAG_HEARTBEAT_BP]);\n        console.log(event[BPProfileModule.PULSEWAVE_BP]);\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_RESULT_BP) {\n        console.log(event[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.PULSE_BP]);\n        console.log(event[BPProfileModule.MEASUREMENT_AHR_BP]);\n        console.log(event[BPProfileModule.DATAID]);\n\n    } else if (event.action === BPProfileModule.ACTION_ERROR_BP) {\n        console.log(event[BPProfileModule.ERROR_NUM_BP]);\n        console.log(event[BPProfileModule.ERROR_DESCRIPTION_BP]);\n    }\n});\n')),(0,i.kt)("h3",{id:"cancel-current-measurement"},"cancel current measurement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.stopMeasure(mac);\n")),(0,i.kt)("h3",{id:"get-battery"},"get battery"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.getBattery(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_BATTERY_BP) {\n        console.log(event[BPProfileModule.BATTERY_BP]);\n    }\n});\n")),(0,i.kt)("h3",{id:"enable-offline-mode"},"enable offline mode"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.enbleOffline(mac);\n")),(0,i.kt)("h3",{id:"disable-offline-mode"},"disable offline mode"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.disableOffline(mac);\n")),(0,i.kt)("h3",{id:"is-enable-offline-mode"},"is enable offline mode"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.isEnableOffline(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_IS_ENABLE_OFFLINE) {\n        console.log(event[BPProfileModule.IS_ENABLE_OFFLINE]);\n    }\n});\n")),(0,i.kt)("h3",{id:"get-quantity-of-data-stored-in-the-bp5-device"},"get quantity of data stored in the bp5 device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.getOfflineNum(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_HISTORICAL_NUM_BP) {\n        console.log(event[BPProfileModule.HISTORICAL_NUM_BP]);\n    }\n});\n")),(0,i.kt)("h3",{id:"get-data-stored-in-the-bp5-device"},"get data stored in the bp5 device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'BP5Module.getOfflineData(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_HISTORICAL_DATA_BP) {\n        let dataArray = event[BPProfileModule.HISTORICAL_DATA_BP];\n        if (dataArray == undefined) {\n            result = "There is not offline data in device"\n        }else {\n            for (let i = 0; i < dataArray.length; i++) {\n                let offlineData = dataArray[i];\n\n                console.log(offlineData[BPProfileModule.MEASUREMENT_DATE_BP]);\n                console.log(offlineData[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.PULSE_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_AHR_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_HSD_BP]);\n                console.log(offlineData[BPProfileModule.DATAID]);\n            }\n        }\n    }\n});\n')),(0,i.kt)("h3",{id:"disconnect-device"},"disconnect device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.disConnect(mac);\n")),(0,i.kt)("h3",{id:"get-device-information"},"get device information"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"iHealthDeviceManagerModule.getDevicesIDPS(mac, (event) => {\n    console.info(event);\n})\n")),(0,i.kt)("h3",{id:"get-all-connected-devices"},"get all connected devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.getAllConnectedDevices();\n")))}f.isMDXComponent=!0}}]);