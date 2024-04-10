"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6167],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,v=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(v,c(c({ref:t},d),{},{components:r})):n.createElement(v,c({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6577:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"KD723",sidebar_position:7},c=void 0,i={unversionedId:"ios/blood_pressure/kd723",id:"ios/blood_pressure/kd723",title:"KD723",description:"WorkFlow",source:"@site/docs/ios/blood_pressure/kd723.md",sourceDirName:"ios/blood_pressure",slug:"/ios/blood_pressure/kd723",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_pressure/kd723",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios/blood_pressure/kd723.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"KD723",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"KN550",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_pressure/kn550"},next:{title:"KD723_V2",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_pressure/kd723_v2"}},l={},s=[{value:"WorkFlow",id:"workflow",level:2},{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for KD723 devices",id:"2scan-for-kd723-devices",level:3},{value:"3.Connect to KD723 devices",id:"3connect-to-kd723-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"Get the device battery",id:"get-the-device-battery",level:3},{value:"Set local time to KD723",id:"set-local-time-to-kd723",level:3},{value:"Set Current user",id:"set-current-user",level:3},{value:"Get history data",id:"get-history-data",level:3},{value:"Disconnect KD723 device",id:"disconnect-kd723-device",level:3}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"workflow"},"WorkFlow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scan and connect KD723 blood pressure monitor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"KD723 only support offline measurement."))),(0,o.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,o.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDiscovered:) name:ContinuaBPDiscover object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnectFailed:) name:ContinuaBPConnectFailed object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnected:) name:ContinuaBPConnectNoti object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisconnected:) name:ContinuaBPDisConnectNoti object:nil];\n\n[BPContinuaController sharedController];\n")),(0,o.kt)("h3",{id:"2scan-for-kd723-devices"},"2.Scan for KD723 devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_KD723];\n")),(0,o.kt)("h3",{id:"3connect-to-kd723-devices"},"3.Connect to KD723 devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_KD723 andSerialNub:deviceMac];\n")),(0,o.kt)("h2",{id:"api-reference"},"API reference"),(0,o.kt)("h3",{id:"get-the-device-battery"},"Get the device battery"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n *  Get  Battery\n * @param energyValue  0-100\n * @param error   Error codes.\n */\n-(void)commandGetBattery:(BlockEnergyValue)energyValue errorBlock:(BlockError)error;\n")),(0,o.kt)("h3",{id:"set-local-time-to-kd723"},"Set local time to KD723"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Synchronize time\n */\n-(void)commandSynchronizeTime;\n")),(0,o.kt)("h3",{id:"set-current-user"},"Set Current user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Set the userID of memery data that need to upload\n * @param userID  The userID of memery data that want to upload.The userID is @1 or @2.\n * @param setResult  The result of setting userID,'YES'means success.\n * @param error   Error codes.\n */\n-(void)commandSetUploadUserID:(NSNumber *)userID setUserIDBlock:(BlockSetUserID)setResult errorBlock:(BlockError)error;\n")),(0,o.kt)("h3",{id:"get-history-data"},"Get history data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Upload offline data.\n * @param  uploadDataArray    offline data set, including MAP, dataID, dia, heartRate, irregular, measureState, sys, time, unit, userId.\n * @param completeBlock transfer memory complete\n * @param error   error codes.\n * Specification:\n */\n-(void)commandTransferMemoryDataWithDataArray:(BlockBachArray)uploadDataArray complete:(BlockSuccess)completeBlock errorBlock:(BlockError)error;\n")),(0,o.kt)("h3",{id:"disconnect-kd723-device"},"Disconnect KD723 device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Disconnect current device\n */\n-(void)commandDisconnectDevice;\n")))}u.isMDXComponent=!0}}]);