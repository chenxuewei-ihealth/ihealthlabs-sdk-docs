"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[7384],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return t?n.createElement(v,c(c({ref:r},d),{},{components:t})):n.createElement(v,c({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4980:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={title:"ECG3",sidebar_position:1},s=void 0,l={unversionedId:"ecg/ecg",id:"version-2.7.7/ecg/ecg",isDocsHomePage:!1,title:"ECG3",description:"WorkFlow",source:"@site/ios_versioned_docs/version-2.7.7/ecg/ecg.md",sourceDirName:"ecg",slug:"/ecg/ecg",permalink:"/ihealthlabs-sdk-docs/ios/ecg/ecg",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/ios_versioned_docs/version-2.7.7/ecg/ecg.md",tags:[],version:"2.7.7",sidebarPosition:1,frontMatter:{title:"ECG3",sidebar_position:1},sidebar:"version-1.33.x/mainSidebar",previous:{title:"AM5",permalink:"/ihealthlabs-sdk-docs/ios/tracker/am5"},next:{title:"ECG3USB",permalink:"/ihealthlabs-sdk-docs/ios/ecg/ecgusb"}},d=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for ECG3 devices",id:"2scan-for-ecg3-devices",children:[]},{value:"3.Connect to ECG3 devices",id:"3connect-to-ecg3-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Sync time",id:"sync-time",children:[]},{value:"Get Battery",id:"get-battery",children:[]},{value:"Start Measure",id:"start-measure",children:[]},{value:"Finish Measure",id:"finish-measure",children:[]},{value:"Disconnect",id:"disconnect",children:[]}]}],u={toc:d};function p(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"workflow"},"WorkFlow"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Scan and connect ECG3.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"ECG3 support online  measurement."))),(0,a.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,a.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:ECG3Discover object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:ECG3ConnectFailed object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:ECG3ConnectNoti object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:ECG3DisConnectNoti object:nil];\n            \n[ECG3Controller shareECG3Controller];\n\n")),(0,a.kt)("h3",{id:"2scan-for-ecg3-devices"},"2.Scan for ECG3 devices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_ECG3];\n")),(0,a.kt)("h3",{id:"3connect-to-ecg3-devices"},"3.Connect to ECG3 devices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_ECG3 andSerialNub:deviceMac];\n")),(0,a.kt)("h2",{id:"api-reference"},"API reference"),(0,a.kt)("h3",{id:"sync-time"},"Sync time"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Sync time\n * @param syncTimeBlock Sync time successfully\n * @param errorBlock Communication error codes, see ECG3 error descriptions.\n */\n-(void)commandECG3SyncTime:(DisposeECG3SyncTimeSuccessBlock)syncTimeBlock withErrorBlock:(DisposeECG3ErrorBlock)errorBlock;\n")),(0,a.kt)("h3",{id:"get-battery"},"Get Battery"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get Battery\n * @param batteryBlock from 0\uff5e100.\n * @param errorBlock Communication error codes, see ECG3 error descriptions.\n */\n-(void)commandECG3GetBatteryInfo:(DisposeECG3GetBatteryBlock)batteryBlock withErrorBlock:(DisposeECG3ErrorBlock)errorBlock;\n")),(0,a.kt)("h3",{id:"start-measure"},"Start Measure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Start Measure\n * @param startMeasureBlock True: Success\uff0c False: Failed.\n * @param waveDataBlock waveData\uff1aECGWaveData use for draw wave\n * @param pluseResultBlock hasHR: whether have heart; HR: heart rate (unit: bpm) only valid when isHaveHeart is true\n * @param errorBlock Communication error codes, see ECG3 error descriptions.\n */\n-(void)commandECG3StartMeasure:(DisposeECG3StartMeasureBlock)startMeasureBlock withWaveData:(DisposeECG3WaveDataBlock)waveDataBlock withPulseResult:(DisposeECG3PluseResultBlock)pluseResultBlock withErrorBlock:(DisposeECG3ErrorBlock)errorBlock;\n")),(0,a.kt)("h3",{id:"finish-measure"},"Finish Measure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Finish Measure\n * @param finishMeasureBlock finish successfully\n * @param errorBlock Communication error codes, see ECG3 error descriptions.\n */\n-(void)commandECG3FinishMeasure:(DisposeECG3FinishMeasureSuccessBlock)finishMeasureBlock withErrorBlock:(DisposeECG3ErrorBlock)errorBlock;\n")),(0,a.kt)("h3",{id:"disconnect"},"Disconnect"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n Disconnect device\n */\n- (void)disconnectDevice;\n")))}p.isMDXComponent=!0}}]);