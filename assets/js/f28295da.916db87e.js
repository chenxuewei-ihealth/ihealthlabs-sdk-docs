"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[2283],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=a,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4678:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={title:"HS4",sidebar_position:3},c=void 0,l={unversionedId:"scale/hs4",id:"version-2.7.7/scale/hs4",isDocsHomePage:!1,title:"HS4",description:"WorkFlow",source:"@site/ios_versioned_docs/version-2.7.7/scale/hs4.md",sourceDirName:"scale",slug:"/scale/hs4",permalink:"/ihealthlabs-sdk-docs/ios/scale/hs4",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/ios_versioned_docs/version-2.7.7/scale/hs4.md",tags:[],version:"2.7.7",sidebarPosition:3,frontMatter:{title:"HS4",sidebar_position:3},sidebar:"version-1.33.x/mainSidebar",previous:{title:"HS2S",permalink:"/ihealthlabs-sdk-docs/ios/scale/hs2s"},next:{title:"HS4S",permalink:"/ihealthlabs-sdk-docs/ios/scale/hs4s"}},d=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for HS4 devices",id:"2scan-for-hs4-devices",children:[]},{value:"3.Connect to HS4 devices",id:"3connect-to-hs4-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Get offline data",id:"get-offline-data",children:[]},{value:"Start a online measurement",id:"start-a-online-measurement",children:[]},{value:"Disconnect the HS4",id:"disconnect-the-hs4",children:[]}]}],m={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"workflow"},"WorkFlow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scan and connect HS4 scale.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"HS4 support online measurement and offline measurement."))),(0,o.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,o.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:HS4Discover object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:HS4ConnectFailed object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:HS4ConnectNoti object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:HS4DisConnectNoti object:nil];\n\n[HS4Controller shareIHHs4Controller];\n")),(0,o.kt)("h3",{id:"2scan-for-hs4-devices"},"2.Scan for HS4 devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_HS4];\n")),(0,o.kt)("h3",{id:"3connect-to-hs4-devices"},"3.Connect to HS4 devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_HS4 andSerialNub:deviceMac];\n")),(0,o.kt)("h2",{id:"api-reference"},"API reference"),(0,o.kt)("h3",{id:"get-offline-data"},"Get offline data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n Upload memory data\n \n Return parameters:\n @param startTransmission Start Memory transmission.\n @param progress Memory transmission progress\uff0c[Range:0.0\uff5e1.0].\n @param memorryData Record data including weight (kg), measurement time\uff0ccoordinated key\uff1aweight\uff0cdate.[Range of weight 0.0~180.0(kg)]\n @param finishTransmission Finish memory transmission.\n @param disposeErrorBlock Record the error code in uploading process.\n */\n-(void)commandTransferMemorryData:(StartHS4Transmission)startTransmission DisposeProgress:(DisposeProgress)progress MemorryData:(MemorryData)memorryData FinishTransmission:(FinishHS4Transmission)finishTransmission DisposeErrorBlock:(DisposeHS4ErrorBlock)disposeErrorBlock;\n")),(0,o.kt)("h3",{id:"start-a-online-measurement"},"Start a online measurement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n Establish memory and measurement connection\nImport parameter:\n @param tempUnit Unit displayed on HS4: HSUnit_Kg\u3001HSUnit_LB\u3001HSUnit_ST\u3002\n Return parameters:\n The measurement via SDK will be operated in the case of 1-4, and will be terminated if any of 5-8 occurs. The interface needs to be re-called after analyzing the return parameters.\n @param unStableWeight Current weight, (Kg) [Value Range:0~180]\n @param stableWeight Stable weight, (Kg) [Value Range:0~180]\n @param disposeErrorBlock  error code\n */\n-(void)commandMeasureWithUint:(HSUnit)tempUnit Weight:(UnStableWeight)unStableWeight StableWeight:(StableWeight)stableWeight DisposeErrorBlock:(DisposeHS4ErrorBlock)disposeErrorBlock;\n")),(0,o.kt)("h3",{id:"disconnect-the-hs4"},"Disconnect the HS4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n Disconnect current device\n */\n\n-(void)commandDisconnectDevice;\n")))}p.isMDXComponent=!0}}]);