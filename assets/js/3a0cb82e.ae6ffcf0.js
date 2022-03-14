"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[7893],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return v}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),v=o,g=p["".concat(l,".").concat(v)]||p[v]||u[v]||i;return t?r.createElement(g,a(a({ref:n},d),{},{components:t})):r.createElement(g,a({ref:n},d))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},81117:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={title:"BG1",sidebar_position:1},l=void 0,s={unversionedId:"blood_glucose/bg1",id:"version-2.7.7/blood_glucose/bg1",isDocsHomePage:!1,title:"BG1",description:"WorkFlow",source:"@site/ios_versioned_docs/version-2.7.7/blood_glucose/bg1.md",sourceDirName:"blood_glucose",slug:"/blood_glucose/bg1",permalink:"/doc.sdk.ihealthlabs/ios/blood_glucose/bg1",editUrl:"https://github.com/dyte-in/docs/tree/main/ios_versioned_docs/version-2.7.7/blood_glucose/bg1.md",tags:[],version:"2.7.7",sidebarPosition:1,frontMatter:{title:"BG1",sidebar_position:1},sidebar:"version-1.33.x/mainSidebar",previous:{title:"HS6",permalink:"/doc.sdk.ihealthlabs/ios/scale/hs6"},next:{title:"BG1S",permalink:"/doc.sdk.ihealthlabs/ios/blood_glucose/bg1s"}},d=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for BG1 devices",id:"2scan-for-bg1-devices",children:[]},{value:"3.Connect to BG1 devices",id:"3connect-to-bg1-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Parse bottle Info of the QRCode",id:"parse-bottle-info-of-the-qrcode",children:[]},{value:"Send code to BG1 device",id:"send-code-to-bg1-device",children:[]}]}],u={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"workflow"},"WorkFlow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scan and connect BG1 blood pressure monitor.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"BG1 only support online measurement."))),(0,i.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,i.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType,\n                                String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BG1);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,i.kt)("h3",{id:"2scan-for-bg1-devices"},"2.Scan for BG1 devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BG1);\n")),(0,i.kt)("h3",{id:"3connect-to-bg1-devices"},"3.Connect to BG1 devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BG1)\n\nBg1Control control = iHealthDevicesManager.getInstance().getBg1Control(mDeviceMac);\n')),(0,i.kt)("h2",{id:"api-reference"},"API reference"),(0,i.kt)("h3",{id:"parse-bottle-info-of-the-qrcode"},"Parse bottle Info of the QRCode"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value: {"bottleInfo":[{"bottleId":"18882266","overDate":"2015-06-26","stripNum":"25"}]}\nString info = Bg1Control.getBottleInfoFromQR(String QRCode);\n')),(0,i.kt)("h3",{id:"send-code-to-bg1-device"},"Send code to BG1 device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bg1Control control = iHealthDevicesManager.getInstance().getBg1Control(mDeviceMac);\ncontrol.sendCode(String QRCode, int stripType, int measureType)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_INTERRUPTED_BP.equals(action)) {\n            \n        }\n    } \n}\n")))}p.isMDXComponent=!0}}]);