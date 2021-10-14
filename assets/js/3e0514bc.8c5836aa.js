"use strict";(self.webpackChunkdoc_sdk=self.webpackChunkdoc_sdk||[]).push([[105],{5954:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return r},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var i=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],d={},r="BP7S",s={unversionedId:"device/bp7s",id:"device/bp7s",isDocsHomePage:!1,title:"BP7S",description:"Import BP7S Module",source:"@site/docs/device/bp7s.md",sourceDirName:"device",slug:"/device/bp7s",permalink:"/docs/device/bp7s",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/device/bp7s.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BP7",permalink:"/docs/device/bp7"},next:{title:"KN550",permalink:"/docs/device/kn550"}},c=[{value:"Import BP7S Module",id:"import-bp7s-module",children:[]},{value:"APIs",id:"apis",children:[{value:"add and remove listener",id:"add-and-remove-listener",children:[]},{value:"get battery",id:"get-battery",children:[]},{value:"set unit",id:"set-unit",children:[]},{value:"get quantity of data stored in the bp5 device",id:"get-quantity-of-data-stored-in-the-bp5-device",children:[]},{value:"get data stored in the bp5 device",id:"get-data-stored-in-the-bp5-device",children:[]},{value:"disconnect device",id:"disconnect-device",children:[]},{value:"set angle range",id:"set-angle-range",children:[]},{value:"get bp7s device information",id:"get-bp7s-device-information",children:[]},{value:"get all connected devices",id:"get-all-connected-devices",children:[]}]}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bp7s"},"BP7S"),(0,o.kt)("h2",{id:"import-bp7s-module"},"Import BP7S Module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  BP7SModule,\n  BPProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,o.kt)("h2",{id:"apis"},"APIs"),(0,o.kt)("h3",{id:"add-and-remove-listener"},"add and remove listener"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,o.kt)("h3",{id:"get-battery"},"get battery"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"BP7SModule.getBattery(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_BATTERY_BP) {\n        console.log(event[BPProfileModule.BATTERY_BP]);\n    }\n});\n")),(0,o.kt)("h3",{id:"set-unit"},"set unit"),(0,o.kt)("p",null,"The API can change the unit of the bg5 display."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// unit :0 mmHg;1 kPa\nBP7SModule.setUnit(mac, 1);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_SET_UNIT_SUCCESS_BP) {\n        console.log("set Unit");\n    }\n});\n')),(0,o.kt)("h3",{id:"get-quantity-of-data-stored-in-the-bp5-device"},"get quantity of data stored in the bp5 device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"BP7SModule.getOfflineNum(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_HISTORICAL_NUM_BP) {\n        console.log(event[BPProfileModule.HISTORICAL_NUM_BP]);\n    }\n});\n")),(0,o.kt)("h3",{id:"get-data-stored-in-the-bp5-device"},"get data stored in the bp5 device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'BP7SModule.getOfflineData(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_HISTORICAL_DATA_BP) {\n        let dataArray = event[BPProfileModule.HISTORICAL_DATA_BP];\n        if (dataArray == undefined) {\n            result = "There is not offline data in device"\n        }else {\n            for (let i = 0; i < dataArray.length; i++) {\n                let offlineData = dataArray[i];\n\n                console.log(offlineData[BPProfileModule.MEASUREMENT_DATE_BP]);\n                console.log(offlineData[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.PULSE_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_AHR_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_HSD_BP]);\n                console.log(offlineData[BPProfileModule.DATAID]);\n            }\n        }\n    }\n});\n')),(0,o.kt)("h3",{id:"disconnect-device"},"disconnect device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"BP7SModule.disConnect(mac);\n")),(0,o.kt)("h3",{id:"set-angle-range"},"set angle range"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * leftHigh  the maximum measure angle of left hand, the maximum value must less than 90\n * leftLow   the minimum measure angle of left hand, the minimum value must more than 0, and less than leftUpper\n * rightHigh the maximum measure angle of right hand, the maximum value must less than 90\n * leftLow   the minimum measure angle of right hand, the minimum value must more than 0, and less than rightUpper\n */\nBP7SModule.angleSet(mac, 80, 30, 80, 30);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_SET_ANGLE_SUCCESS_BP) {\n        console.log("set angle");\n    }\n});\n')),(0,o.kt)("h3",{id:"get-bp7s-device-information"},"get bp7s device information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"BP7SModule.getFunctionInfo(mac);\n")),(0,o.kt)("h3",{id:"get-all-connected-devices"},"get all connected devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"BP7SModule.getAllConnectedDevices();\n")))}m.isMDXComponent=!0}}]);