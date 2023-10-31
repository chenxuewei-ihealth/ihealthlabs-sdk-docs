"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3634:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={title:"PO3",sidebar_position:2},i=void 0,s={unversionedId:"ios/blood_oxygen/po3",id:"ios/blood_oxygen/po3",title:"PO3",description:"WorkFlow",source:"@site/docs/ios/blood_oxygen/po3.md",sourceDirName:"ios/blood_oxygen",slug:"/ios/blood_oxygen/po3",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_oxygen/po3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios/blood_oxygen/po3.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"PO3",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"PO1",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_oxygen/po1"},next:{title:"NT13B",permalink:"/ihealthlabs-sdk-docs/docs/ios/thermometer/nt13b"}},c={},l=[{value:"WorkFlow",id:"workflow",level:2},{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for PO3 devices",id:"2scan-for-po3-devices",level:3},{value:"3.Connect to PO3 devices",id:"3connect-to-po3-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"Sync time",id:"sync-time",level:3},{value:"Get the PO3 battery status",id:"get-the-po3-battery-status",level:3},{value:"Restore Historical data",id:"restore-historical-data",level:3},{value:"Start real-time measurement",id:"start-real-time-measurement",level:3},{value:"Disconnect the PO3",id:"disconnect-the-po3",level:3},{value:"GetChargeState",id:"getchargestate",level:3},{value:"Charge State  change Notification",id:"charge-state--change-notification",level:3}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"workflow"},"WorkFlow"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Scan and connect PO3 device.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"PO3 support online measurement and offline measurement."))),(0,n.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,n.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:PO3ConnectNoti object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:PO3DisConnectNoti object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:PO3Discover object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:PO3ConnectFailed object:nil];\n            \n[PO3Controller shareIHPO3Controller];\n")),(0,n.kt)("h3",{id:"2scan-for-po3-devices"},"2.Scan for PO3 devices"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_PO3];\n")),(0,n.kt)("h3",{id:"3connect-to-po3-devices"},"3.Connect to PO3 devices"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_PO3 andSerialNub:deviceMac];\n")),(0,n.kt)("h2",{id:"api-reference"},"API reference"),(0,n.kt)("h3",{id:"sync-time"},"Sync time"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n * Restore Sync time\n * @param syncTimeBlock Sync completed. Yes = Success, No = Fail.\n * @param errorBlock Communication error codes\n */\n-(void)commandPO3SyncTime:(DisposePO3SyncTimeBlock)syncTimeBlock withErrorBlock:(DisposePO3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"get-the-po3-battery-status"},"Get the PO3 battery status"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n * Query power status\n * @param batteryBlock Battery\uff0cfrom 0\uff5e100\n * @param errorBlock Communication error codes\n */\n-(void)commandPO3GetDeviceBattery:(DisposePO3BatteryBlock)batteryBlock withErrorBlock:(DisposePO3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"restore-historical-data"},"Restore Historical data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n * Restore Historical data\n * @param offlineDataCount Number of historical offline data measurements.\n * @param offlineData date, spo2, bpm, and wave.\n * @param offlineWaveData Pulse intensity, corresponding key: wave\n * @param finishUpload End transmission of data, yes for success, no for fail.\n * @param errorBlock Communication error codes\n */\n-(void)commandPO3OfflineDataCount:(DisposePO3OfflineDataCount)offlineDataCount withOfflineData:(DisposePO3OfflineData)offlineData withOfflineWaveData:(DisposePO3OfflineWaveData)offlineWaveData withFinishMeasure:(DisposePO3FinishUpload)finishUpload  withErrorBlock:(DisposePO3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"start-real-time-measurement"},"Start real-time measurement"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Restore Real-time measurements\n * @param startMeasure  Start measurement, Return no for fail, return yes for success.\n * @param measureData  SpO2 values, including SpO2, pulse rate, pulse intensity. Corresponding keys are spo2, bpm, wave, and pi.\n * @param finishMeasure  Finish measurement. No for fail, yes for success.\n * @param errorBlock Communication error codes\n */\n\n-(void)commandPO3StartMeasure:(DisposePO3StartMeasure)startMeasure withMeasureData:(DisposePO3MeasureData)measureData  withFinishMeasure:(DisposePO3FinishMeasure)finishMeasure  withErrorBlock:(DisposePO3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"disconnect-the-po3"},"Disconnect the PO3"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Disconnect connection\n * @param disconnectBlock  yes = success, no = fail.\n * @param errorBlock Communication error codes\n */\n-(void)commandPO3Disconnect:(DisposePO3DisconnectBlock)disconnectBlock withErrorBlock:(DisposePO3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"getchargestate"},"GetChargeState"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * GetChargeState    \uff08Firmware version must more than or equal to 3.1.1 support this API\uff09\n * @param state  PO3ChargeState\n * @param errorBlock Communication error codes\n */\n-(void)commandPO3GetChargeState:(DisposePO3ChargeState)state withErrorBlock:(DisposePO3ErrorBlock)errorBlock;\n")),(0,n.kt)("h3",{id:"charge-state--change-notification"},"Charge State  change Notification"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n \n Charge State  change Notification\uff08Firmware version must more than or equal to 3.1.1 support this API\uff09\n\n PO3NotificationChargeState\n\nYou need to listen to this message to get ChargeState\n \n {\n     state = 1;   0:PO3ChargeState_ExitCharge,   1: PO3ChargeState_Charging,\n }\n\n */\n")))}d.isMDXComponent=!0}}]);