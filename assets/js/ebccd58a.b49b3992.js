"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[4433],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=o,T=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return t?r.createElement(T,a(a({ref:n},d),{},{components:t})):r.createElement(T,a({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},832:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={title:"PT3SBT",sidebar_position:3},c=void 0,l={unversionedId:"thermometer/pt3sbt",id:"version-2.7.7/thermometer/pt3sbt",isDocsHomePage:!1,title:"PT3SBT",description:"WorkFlow",source:"@site/ios_versioned_docs/version-2.7.7/thermometer/pt3sbt.md",sourceDirName:"thermometer",slug:"/thermometer/pt3sbt",permalink:"/ihealthlabs-sdk-docs/ios/thermometer/pt3sbt",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/ios_versioned_docs/version-2.7.7/thermometer/pt3sbt.md",tags:[],version:"2.7.7",sidebarPosition:3,frontMatter:{title:"PT3SBT",sidebar_position:3},sidebar:"version-1.33.x/mainSidebar",previous:{title:"TS28B",permalink:"/ihealthlabs-sdk-docs/ios/thermometer/ts28b"},next:{title:"AM3",permalink:"/ihealthlabs-sdk-docs/ios/tracker/am3"}},d=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for PT3SBT devices",id:"2scan-for-pt3sbt-devices",children:[]},{value:"3.Connect to PT3SBT devices",id:"3connect-to-pt3sbt-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Get device IDPS Info",id:"get-device-idps-info",children:[]},{value:"Get  Battery",id:"get--battery",children:[]},{value:"Set Unit",id:"set-unit",children:[]},{value:"Get Unit",id:"get-unit",children:[]},{value:"Get memory data count",id:"get-memory-data-count",children:[]},{value:"Tranfer offline history records",id:"tranfer-offline-history-records",children:[]},{value:"Delete offline history records",id:"delete-offline-history-records",children:[]},{value:"Measure",id:"measure",children:[]},{value:"Get Device Info",id:"get-device-info",children:[]},{value:"Disconnect",id:"disconnect",children:[]}]}],p={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"workflow"},"WorkFlow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scan and connect PT3SBT.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"PT3SBT support online measurement and offline measurement."))),(0,i.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,i.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:PT3SBTDiscover object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:PT3SBTConnectFailed object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:PT3SBTConnectNoti object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:PT3SBTDisConnectNoti object:nil];\n            \n[PT3SBTController shareIHPT3SBTController];\n")),(0,i.kt)("h3",{id:"2scan-for-pt3sbt-devices"},"2.Scan for PT3SBT devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_PT3SBT];\n")),(0,i.kt)("h3",{id:"3connect-to-pt3sbt-devices"},"3.Connect to PT3SBT devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_PT3SBT andSerialNub:deviceMac];\n")),(0,i.kt)("h2",{id:"api-reference"},"API reference"),(0,i.kt)("h3",{id:"get-device-idps-info"},"Get device IDPS Info"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * Get device IDPS (After the PT3SBT device is successfully connected, the interface must be called to synchronize the device time. Otherwise, the offline data measurement time error will be caused)\n * @param function  A block to return the function and states that the device supports.\n * {\n     MAC = D379D238F6B3;\n     accessoryName = PT;\n     firmwareVersion = "1.1.0";\n     hardwareVersion = "1.0.0";\n     manufaturer = iHealth;\n     modelNumber = PT3SBT;\n     protocol = "com.jiuan.PT3SBT";\n }\n * @param disposeErrorBlock  A block to refer \u2018error\u2019 in \u2018Establish measurement connection\u2019 in PT3SBT.\n */\n-(void)commandFunction:(DisposePT3SBTDeviceFunctionBlock)function DisposeErrorBlock:(DisposePT3SBTErrorBlock)disposeErrorBlock;\n')),(0,i.kt)("h3",{id:"get--battery"},"Get  Battery"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n *Get  Battery\n\n * @param battery  [Range:0\uff5e100]%\n * @param disposeErrorBlock error code\n */\n-(void)commandGetPT3SBTBattery:(DisposePT3SBTBatteryBlock)battery DiaposeErrorBlock:(DisposePT3SBTErrorBlock)disposeErrorBlock;\n")),(0,i.kt)("h3",{id:"set-unit"},"Set Unit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Set Unit\n * @param unitState\n * /// Degrees Celsius\n    PT3SBTTemperatureUnit_C=1,\n    /// Fahrenheit\n    PT3SBTTemperatureUnit_F,\n * @param disposeSetUnitResult YES:success NO:fail\n * @param disposeErrorBlock This block returns error codes,please refer to error codes list in PT3SBTMacroFile.\n */\n-(void)commandPT3SBTSetUnit:(PT3SBTTemperatureUnit)unitState\n   DisposeSetUnitResult:(DisposePT3SBTSetUnit)disposeSetUnitResult\n    DisposeErrorBlock:(DisposePT3SBTErrorBlock)disposeErrorBlock;\n")),(0,i.kt)("h3",{id:"get-unit"},"Get Unit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get Unit\n * @param disposeGetUnitResult  PT3SBTTemperatureUnit\n * @param disposeErrorBlock This block returns error codes,please refer to error codes list in PT3SBTMacroFile.\n */\n-(void)commandPT3SBTGetUnit:(DisposePT3SBTGetUnit)disposeGetUnitResult\n    DisposeErrorBlock:(DisposePT3SBTErrorBlock)disposeErrorBlock;\n")),(0,i.kt)("h3",{id:"get-memory-data-count"},"Get memory data count"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get memory data count\n * @param disposeMemoryCount  count\n * @param disposeErrorBlock This block returns error codes,please refer to error codes list in PT3SBTMacroFile.\n */\n-(void)commandPT3SBTGetMemoryCount:(DisposePT3SBTGetMemoryCount)disposeMemoryCount\n    DisposeErrorBlock:(DisposePT3SBTErrorBlock)disposeErrorBlock;\n")),(0,i.kt)("h3",{id:"tranfer-offline-history-records"},"Tranfer offline history records"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n Tranfer offline history records.\n For PT3SBT, after calling this method, you should call commandDeleteMemorryData: method. Otherwise, the measure date may be wrong.\n [\n {\n     Distance = 1783;\n     TS = 1600064558;\n     Tamb = 274;\n     Tbody = 3520;\n     Tex = 268;\n     Tobj = 273;\n     Vbat = 282;\n }\n]\n @param disposeMemoryData The offline history records detail, result means result, date means the measurement time.\n @param disposeErrorBlock This block returns error codes,please refer to error codes list in PT3SBTMacroFile.\n */\n-(void)commandGetMemorryData:(DisposePT3SBTMemoryData)disposeMemoryData\n              DisposeErrorBlock:(DisposePT3SBTErrorBlock)disposeErrorBlock;\n")),(0,i.kt)("h3",{id:"delete-offline-history-records"},"Delete offline history records"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n Delete offline history records\n\n @param disposeDeleteData  YES or NO\n @param disposeErrorBlock This block returns error codes,please refer to error codes list in PT3SBTMacroFile.\n */\n-(void)commandDeleteMemorryData:(DisposePT3SBTDeleteData)disposeDeleteData\n            DisposeErrorBlock:(DisposePT3SBTErrorBlock)disposeErrorBlock;\n")),(0,i.kt)("h3",{id:"measure"},"Measure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n Measure data  Notification\n\n  PT3SBTNotificationGetResult\n \n You need to listen to this message to get real-time measurements\n \n Content of measurement results\uff1a\n {\n     Distance = 1663;\n     Tamb = 275;\n     Tbody = 3521;\n     Tex = 269;\n     Tobj = 274;\n     Vbat = 281;\n }\n*/\n\n/**\n PT3SBT unit  change  Notification\n\n  PT3SBTNotificationDeviceUnitChange\n \n If the PT3SBT unit changes, you will receive this notification\n \n   /// Degrees Celsius\n    PT3SBTTemperatureUnit_C=1,\n    /// Fahrenheit\n    PT3SBTTemperatureUnit_F,\n \n Content of PT3SBTNotificationDeviceUnitChange  results\uff1a\n {\n     unit=1;\n }\n*/\n")),(0,i.kt)("h3",{id:"get-device-info"},"Get Device Info"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/**\n Get Device Info\n\n @param disposeDeviceInfo   device info\n {\n     "Amb16_OBJ37_Temp" = 4209;\n     "Amb25_ByCb2" = 2459;\n     "Amb25_NtcR25" = 10028;\n     "Check_AmbTemp" = 2438;\n     "Corr16_AmbTemp" = 1807;\n     "Corr25_AmbTemp" = 2484;\n     "Corr_k1_Value" = 10336;\n     "Corr_k2_Value" = 9896;\n     "Distance_CorrValue" = 284;\n     Version = 1112;\n     VersionDate = 200904;\n }\n @param disposeErrorBlock This block returns error codes,please refer to error codes list in PT3SBTMacroFile.\n */\n-(void)commandGetDeviceInfo:(DisposePT3SBTDeviceInfo)disposeDeviceInfo\n            DisposeErrorBlock:(DisposePT3SBTErrorBlock)disposeErrorBlock;\n')),(0,i.kt)("h3",{id:"disconnect"},"Disconnect"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Disconnect current device\n */\n-(void)commandDisconnectDevice;\n")))}m.isMDXComponent=!0}}]);