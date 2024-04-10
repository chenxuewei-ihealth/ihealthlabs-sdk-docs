"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1769],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),v=o,m=p["".concat(l,".").concat(v)]||p[v]||u[v]||a;return r?n.createElement(m,c(c({ref:t},d),{},{components:r})):n.createElement(m,c({ref:t},d))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8456:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"KD723_V2",sidebar_position:8},c=void 0,i={unversionedId:"ios/blood_pressure/kd723_v2",id:"ios/blood_pressure/kd723_v2",title:"KD723_V2",description:"WorkFlow",source:"@site/docs/ios/blood_pressure/kd723_v2.md",sourceDirName:"ios/blood_pressure",slug:"/ios/blood_pressure/kd723_v2",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_pressure/kd723_v2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios/blood_pressure/kd723_v2.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"KD723_V2",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"KD723",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_pressure/kd723"},next:{title:"KN926",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_pressure/kd926"}},l={},s=[{value:"WorkFlow",id:"workflow",level:2},{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for devices",id:"2scan-for-devices",level:3},{value:"3.Connect to devices",id:"3connect-to-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"Set local time to device",id:"set-local-time-to-device",level:3},{value:"Get Function",id:"get-function",level:3},{value:"Get history data count",id:"get-history-data-count",level:3},{value:"Get history data",id:"get-history-data",level:3},{value:"Delete history data",id:"delete-history-data",level:3},{value:"Disconnect device",id:"disconnect-device",level:3}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"workflow"},"WorkFlow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scan and connect KD723 blood pressure monitor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"KD723 only support offline measurement."))),(0,o.kt)("p",null,"In the iOS SDK, if you want to scan for KD723 with firmware version greater than 1.1.0, please use the KD723_V2 type to scan for connected devices."),(0,o.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,o.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDiscovered:) name:KD723_V2Discover object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnectFailed:) name:KD723_V2ConnectFailed object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnected:) name:KD723_V2ConnectNoti object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisconnected:) name:KD723_V2DisConnectNoti object:nil];\n\n[KD723_V2Controller shareIHKD723Controller];\n")),(0,o.kt)("h3",{id:"2scan-for-devices"},"2.Scan for devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_KD723_V2];\n")),(0,o.kt)("h3",{id:"3connect-to-devices"},"3.Connect to devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_KD723_V2 andSerialNub:deviceMac];\n")),(0,o.kt)("h2",{id:"api-reference"},"API reference"),(0,o.kt)("h3",{id:"set-local-time-to-device"},"Set local time to device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * synchronize time\n * @param success  A block to refer \u2018set success\u2019.\n * @param error   A block to return the error.\n */\n-(void)commandSynchronizeTime:(BlockSuccess)success errorBlock:(BlockError)error;\n")),(0,o.kt)("h3",{id:"get-function"},"Get Function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'/**\n *\n * What the function returns:\n \n upAirMeasureFlg = 1;\n haveOffline = 1;\n deviceTime = "2024-2-29 17:7:2";\n showUnit = 0;\n is24Hour = 1;\n selfUpdate = 0;\n firmwareVersion = "1.1.0";\n haveAngleSet = 0;\n modelNumber = "KD-723 11070";\n armMeasureFlg = 0;\n haveShowUnitSetting = 0;\n protocol = "com.jiuan.BPV30";\n mutableUpload = 1;\n manufacture = "iHealth";\n haveBackLightSetting = 0;\n haveClockShowSetting = 0;\n hardwareVersion = "1.1.0";\n haveAngleSensor = 0;\n memoryGroup = 1;\n lastOperatingState = 85;\n maxMemoryCapacity = 99;\n accessoryName = "Push";\n serialNumber = "5414A7E083EF";\n haveRepeatedlyMeasure = 0;\n haveHSD = 1;\n * @param function  A block to return the function and states that the device supports.\n * @param error   A block to return the error.\n */\n-(void)commandFunction:(BlockDeviceFunction)function errorBlock:(BlockError)error;\n')),(0,o.kt)("h3",{id:"get-history-data-count"},"Get history data count"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Upload offline data total Count.\n * @param  totalCount item quantity of total data count\n * @param error  A block to return the error.\n */\n-(void)commandTransferMemoryCount:(BlockBachCount)totalCount errorBlock:(BlockError)error;\n")),(0,o.kt)("h3",{id:"get-history-data"},"Get history data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Upload offline data\uff08Please call the API for obtaining the number of historical data before calling this API, otherwise the data cannot be obtained.\uff09\n * @param uploadDataArray item quantity of total data.\n * @param error  A block to return the error.\n */\n-(void)commandTransferMemoryData:(BlockBachArray)uploadDataArray errorBlock:(BlockError)error;\n")),(0,o.kt)("h3",{id:"delete-history-data"},"Delete history data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Delete offline data.\n * @param success   A block to refer \u2018set success\u2019.\n * @param error    A block to return the error.\n */\n-(void)commandDeleteMemoryDataResult:(BlockSuccess)success errorBlock:(BlockError)error;\n")),(0,o.kt)("h3",{id:"disconnect-device"},"Disconnect device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Disconnect current device\n */\n-(void)commandDisconnectDevice;\n\n")))}u.isMDXComponent=!0}}]);