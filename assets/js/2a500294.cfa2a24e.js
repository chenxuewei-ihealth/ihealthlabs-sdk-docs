"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[7122],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return t?o.createElement(m,a(a({ref:n},d),{},{components:t})):o.createElement(m,a({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4065:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],c={title:"PO1",sidebar_position:1},l=void 0,s={unversionedId:"blood_oxygen/po1",id:"version-2.7.7/blood_oxygen/po1",isDocsHomePage:!1,title:"PO1",description:"WorkFlow",source:"@site/ios_versioned_docs/version-2.7.7/blood_oxygen/po1.md",sourceDirName:"blood_oxygen",slug:"/blood_oxygen/po1",permalink:"/ihealthlabs-sdk-docs/ios/blood_oxygen/po1",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/ios_versioned_docs/version-2.7.7/blood_oxygen/po1.md",tags:[],version:"2.7.7",sidebarPosition:1,frontMatter:{title:"PO1",sidebar_position:1},sidebar:"version-1.33.x/mainSidebar",previous:{title:"BG5S",permalink:"/ihealthlabs-sdk-docs/ios/blood_glucose/bg5s"},next:{title:"PO3",permalink:"/ihealthlabs-sdk-docs/ios/blood_oxygen/po3"}},d=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for PO1 devices",id:"2scan-for-po1-devices",children:[]},{value:"3.Connect to PO1 devices",id:"3connect-to-po1-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Open buzzer for PO1 device",id:"open-buzzer-for-po1-device",children:[]},{value:"Get battery for PO1 device",id:"get-battery-for-po1-device",children:[]},{value:"Data Notify",id:"data-notify",children:[]},{value:"Disconnect the PO1",id:"disconnect-the-po1",children:[]}]}],p={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"workflow"},"WorkFlow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scan and connect PO1 device.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"PO1 only support online measurement."))),(0,i.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,i.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:PO1Discover object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:PO1ConnectFailed object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:PO1ConnectNoti object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:PO1DisConnectNoti object:nil];\n            \n[PO1Controller shareIHPO1Controller];\n")),(0,i.kt)("h3",{id:"2scan-for-po1-devices"},"2.Scan for PO1 devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_PO1];\n")),(0,i.kt)("h3",{id:"3connect-to-po1-devices"},"3.Connect to PO1 devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_PO1 andSerialNub:deviceMac];\n")),(0,i.kt)("h2",{id:"api-reference"},"API reference"),(0,i.kt)("h3",{id:"open-buzzer-for-po1-device"},"Open buzzer for PO1 device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * Get device IDPS\n * @param function  A block to return the function and states that the device supports.\n * {\n     MAC = 60A4232504ED;\n     accessoryName = "Pulse Oximeter";\n     firmwareVersion = "1.0.0";\n     hardwareVersion = "1.0.0";\n     manufaturer = iHealth;\n     modelNumber = "PO1 11070";\n     protocol = "com.jiuan.PO1";\n }\n * @param errorBlock  A block to refer \u2018error\u2019 in \u2018Establish measurement connection\u2019 in PO1.\n */\n-(void)commandFunction:(DisposePO1DeviceFunctionBlock)function DisposeErrorBlock:(DisposePO1ErrorBlock)errorBlock;\n')),(0,i.kt)("h3",{id:"get-battery-for-po1-device"},"Get battery for PO1 device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Query power status\n * @param batteryBlock Battery\uff0cfrom 0\uff5e100\n * @param errorBlock Communication error codes\n */\n-(void)commandPO1GetDeviceBattery:(DisposePO1BatteryBlock)batteryBlock withErrorBlock:(DisposePO1ErrorBlock)errorBlock;\n")),(0,i.kt)("h3",{id:"data-notify"},"Data Notify"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/**\nMeasure data  Notification\n\n PO1NotificationMeasureData\n\nYou need to listen to this message to get real-time measurements\n \n The unit of PI is %.\n\nContent of measurement results\uff1a\n{\n    PI = "5.8";\n    bpm = 90;\n    height = 4;\n    spo2 = 98;\n    wave =     (\n        42,\n        41,\n        41,\n        41,\n        40\n    );\n}\n */\n\n')),(0,i.kt)("h3",{id:"disconnect-the-po1"},"Disconnect the PO1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\n/*\n Disconnect current device\n */\n\n-(void)commandDisconnectDevice;\n")))}u.isMDXComponent=!0}}]);