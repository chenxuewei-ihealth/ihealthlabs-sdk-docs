"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[545],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return h}});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=s(i),h=o,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return i?n.createElement(f,l(l({ref:t},d),{},{components:i})):n.createElement(f,l({ref:t},d))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,l=new Array(a);l[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<a;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},446:function(e,t,i){i.r(t),i.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u}});var n=i(7462),o=i(3366),a=(i(7294),i(3905)),l=["components"],r={sidebar_position:1},c="Get started",s={unversionedId:"ios/quickstart",id:"ios/quickstart",title:"Get started",description:"Step 1: register your account",source:"@site/docs/ios/quickstart.mdx",sourceDirName:"ios",slug:"/ios/quickstart",permalink:"/ihealthlabs-sdk-docs/docs/ios/quickstart",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios/quickstart.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ECG3USB",permalink:"/ihealthlabs-sdk-docs/docs/android/ecg/ecgusb"},next:{title:"BP3L",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_pressure/bp3l"}},d={},u=[{value:"Step 1: register your account",id:"step-1-register-your-account",level:2},{value:"Step 2: Create your application",id:"step-2-create-your-application",level:2},{value:"Step 3: Download the SDK and license file",id:"step-3-download-the-sdk-and-license-file",level:2},{value:"Step 4: Add license in your application",id:"step-4-add-license-in-your-application",level:2},{value:"Step 5: Add SDK library and .h file",id:"step-5-add-sdk-library-and-h-file",level:2},{value:"Step 6: Add Frameworks and Configuration",id:"step-6-add-frameworks-and-configuration",level:2},{value:"Add Frameworks:",id:"add-frameworks",level:3},{value:"Configuration:",id:"configuration",level:3},{value:"App communicates with an accessory\u3001 App communicates using CoreBluetooth",id:"app-communicates-with-an-accessory-app-communicates-using-corebluetooth",level:3},{value:"Step 7: Other Settings",id:"step-7-other-settings",level:2},{value:"Step 8: Authentication license",id:"step-8-authentication-license",level:2},{value:"Authentication API:",id:"authentication-api",level:4},{value:"Step 9: Scan and Connect",id:"step-9-scan-and-connect",level:2},{value:"Example:",id:"example",level:3},{value:"Classic bluetooth device BP5:",id:"classic-bluetooth-device-bp5",level:3},{value:"Low power bluetooth device BP3L\uff1a",id:"low-power-bluetooth-device-bp3l",level:3},{value:"Scan device API\uff1a",id:"scan-device-api",level:3},{value:"Connect device API\uff1a",id:"connect-device-api",level:3},{value:"Example\uff1a",id:"example-1",level:3},{value:"Step 10: Native SDK supported devices list",id:"step-10-native-sdk-supported-devices-list",level:2},{value:"BP:",id:"bp",level:3},{value:"HS:",id:"hs",level:3},{value:"AM:",id:"am",level:3},{value:"BG:",id:"bg",level:3},{value:"PO:",id:"po",level:3},{value:"Thermometer:",id:"thermometer",level:3},{value:"Support Update iHealth Device for iOS",id:"support-update-ihealth-device-for-ios",level:3}],p={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-started"},"Get started"),(0,a.kt)("h2",{id:"step-1-register-your-account"},"Step 1: register your account"),(0,a.kt)("p",null,"Please access ",(0,a.kt)("a",{parentName:"p",href:"https://dev.ihealthlabs.com"},"iHealth developer website"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ready1",src:i(6102).Z,width:"3046",height:"1536"})),(0,a.kt)("p",null,'Press button "Create an account" and Jump into Register page, fill in the form and register your iHealth developer account.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ready2",src:i(6955).Z,width:"2664",height:"1374"})),(0,a.kt)("h2",{id:"step-2-create-your-application"},"Step 2: Create your application"),(0,a.kt)("p",null,"If you already have registered your application, Please jump to Step 3."),(0,a.kt)("p",null,'If you don\'t registered your application, Please press the "Enterprise Development" on left side of the page and go to "App Management". Please press button "Add New app" and fill in your information of your app, as shown below.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Download",src:i(1661).Z,width:"2130",height:"752"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Download",src:i(3437).Z,width:"2058",height:"1664"})),(0,a.kt)("p",null,"We will active the license for your application within 1-3 business days after receiving your email. If your app not been approved for long time, Please contact your iHealth account manager."),(0,a.kt)("h2",{id:"step-3-download-the-sdk-and-license-file"},"Step 3: Download the SDK and license file"),(0,a.kt)("p",null,"After your app been approved, you can download the SDK solution."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Download",src:i(1792).Z,width:"2406",height:"1220"})),(0,a.kt)("p",null,"Download .pem file at App Management if your solution need."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Download",src:i(4425).Z,width:"3134",height:"940"})),(0,a.kt)("h2",{id:"step-4-add-license-in-your-application"},"Step 4: Add license in your application"),(0,a.kt)("p",null,"As shown below, add your license file to your root assets folder."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"guide android",src:i(9544).Z,width:"648",height:"200"})),(0,a.kt)("h2",{id:"step-5-add-sdk-library-and-h-file"},"Step 5: Add SDK library and .h file"),(0,a.kt)("p",null,"As shown below, add your SDK .a file and .h file to your project."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"guide android",src:i(9719).Z,width:"662",height:"496"})),(0,a.kt)("h2",{id:"step-6-add-frameworks-and-configuration"},"Step 6: Add Frameworks and Configuration"),(0,a.kt)("h3",{id:"add-frameworks"},"Add Frameworks:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"guide android",src:i(7714).Z,width:"860",height:"204"})),(0,a.kt)("h3",{id:"configuration"},"Configuration:"),(0,a.kt)("p",null,"If you are not using the device mentioned below, please do not configure the protocol, otherwise it may affect the review of the program in the applestore ! ! !"),(0,a.kt)("p",null,"Add 2 new Item in \u2018Supported external accessory protocols\u2019 ,Different products need to add different protocols. "),(0,a.kt)("p",null,"If you use these devices, please contact us before submitting the Apple Store. We will generate a ppid based on the information you provided to help your app pass the review. If you do not have ppid, you may be rejected during the review. "),(0,a.kt)("p",null,"If you're using BG5, you need to add protocol:com.jiuan.BGV31"),(0,a.kt)("p",null,"If you're using BP3, you need to add protocol:com.jiuan.P930 "),(0,a.kt)("p",null,"If you're using BP5 or BP7, you need to add protocol:com.jiuan.BPV20\u3001com.jiuan.BPV23 "),(0,a.kt)("p",null,"If you're using ABI, you need to add protocol:com.jiuan.BPV21 "),(0,a.kt)("p",null,"If you're using HS3, you need to add protocol:com.ihealth.sc221 "),(0,a.kt)("p",null,"If you're using BG1\uff0cyou need to add Item NSMicrophoneUsageDescription Add 1 new Item in \u2018Required background modes\u2019: "),(0,a.kt)("h3",{id:"app-communicates-with-an-accessory-app-communicates-using-corebluetooth"},"App communicates with an accessory\u3001 App communicates using CoreBluetooth"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"guide android",src:i(552).Z,width:"896",height:"440"})),(0,a.kt)("h2",{id:"step-7-other-settings"},"Step 7: Other Settings"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"guide android",src:i(8497).Z,width:"880",height:"854"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"guide android",src:i(1177).Z,width:"934",height:"960"})),(0,a.kt)("h2",{id:"step-8-authentication-license"},"Step 8: Authentication license"),(0,a.kt)("p",null,"Please call the following method, if the license is invalid, it will return false.\nWhen the license needs to be updated, the first call will return false, the SDK will sync with the server, and the next call will return true."),(0,a.kt)("p",null,"If you want to use the iHealth Device, you must first call authentication method, can call after certification by iHealth relevant methods of the device.\nGet your app approved and download license file at:"),(0,a.kt)("p",null," ",(0,a.kt)("a",{parentName:"p",href:"https://dev.ihealthlabs.com"},"https://dev.ihealthlabs.com")," "),(0,a.kt)("h4",{id:"authentication-api"},"Authentication API:"),(0,a.kt)("p",null,"-(void)commandSDKUserValidationWithLicense:(NSData *)licenseData UserDeviceAccess:(DisposeSDKUserDeviceAccess)userDeviceAcce ssUserValidationSuccess:(DisposeSDKUserValidationSuccess)user ValidationSuccess\nDisposeErrorBlock:(DisposeSDKUserValidationErrorBlock)dispo seValidationErrorBlock"),(0,a.kt)("h2",{id:"step-9-scan-and-connect"},"Step 9: Scan and Connect"),(0,a.kt)("p",null,"Before scanning and connecting the device, you need to call the authentication interface to get permission. After\nthe authentication is passed, you can scan the connection. Otherwise, you will not be able to scan the connection to any device."),(0,a.kt)("p",null,"For classic bluetooth and audio devices, you don't need to call the scan connection method, just listen for the corresponding notification message to connect to the device. "),(0,a.kt)("p",null,"For classic bluetooth devices, you need the bluetooth option in the mobile Settings to manually connect the device. These devices include: iHealth BP3 \u3001iHealth ABI\u3001 iHealth BP5 \u3001iHealth BP7 \u3001iHealth HS3\u3001BG5. "),(0,a.kt)("p",null,"For the BG1, all you need to do is plug the device into the phone's headphone jack. "),(0,a.kt)("p",null,"Before scanning the device connection, you need to initialize the code of the corresponding device and add listening notification messages."),(0,a.kt)("h3",{id:"example"},"Example:"),(0,a.kt)("h3",{id:"classic-bluetooth-device-bp5"},"Classic bluetooth device BP5:"),(0,a.kt)("p",null,"[BP5Controller shareBP5Controller]",";"),(0,a.kt)("p",null,"[","[NSNotificationCenter defaultCenter]","addObserver:self selector:@selector(DeviceConnect:) name:BP5ConnectNoti object:nil]; "),(0,a.kt)("p",null,"[","[NSNotificationCenter defaultCenter]","addObserver:self selector:@selector(DeviceDisConnect:) name:BP5DisConnectNoti object:nil]; "),(0,a.kt)("h3",{id:"low-power-bluetooth-device-bp3l"},"Low power bluetooth device BP3L\uff1a"),(0,a.kt)("p",null,"[BP3LController shareBP3LController]","; "),(0,a.kt)("p",null,"[","[NSNotificationCenter defaultCenter]","addObserver:self selector:@selector(DeviceDiscover:) name:BP3LDiscover object:nil]; "),(0,a.kt)("p",null,"[","[NSNotificationCenter defaultCenter]","addObserver:self selector:@selector(DeviceConnectFail:) name:BP3LConnectFailed object:nil]; "),(0,a.kt)("p",null,"[","[NSNotificationCenter defaultCenter]","addObserver:self selector:@selector(DeviceConnect:) name:BP3LConnectNoti object:nil]; "),(0,a.kt)("p",null,"[","[NSNotificationCenter defaultCenter]","addObserver:self selector:@selector(DeviceDisConnect:) name:BP3LDisConnectNoti object:nil]; "),(0,a.kt)("h3",{id:"scan-device-api"},"Scan device API\uff1a"),(0,a.kt)("p",null," -(int)commandScanDeviceType:(HealthDeviceType)tempDeviceType"),(0,a.kt)("h3",{id:"connect-device-api"},"Connect device API\uff1a"),(0,a.kt)("p",null,"  -(int)commandContectDeviceWithDeviceType:(HealthDeviceType) tempDeviceType andSerialNub:(NSString *)tempSerialNub"),(0,a.kt)("p",null,"When the device is scanned, you can call the connection method to connect the device, and when the connection is notified, you can get the device object to call the API of the device. "),(0,a.kt)("h3",{id:"example-1"},"Example\uff1a"),(0,a.kt)("p",null,"-(void)DeviceConnectForBP5:(NSNotification *)tempNoti{ "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"BP5Controller *controller = [BP5Controller shareBP5Controller];\n\nNSArray *bpDeviceArray = [controller getAllCurrentBP5Instace]; \n\nif (bpDeviceArray.count) { \n    BP5* bp5Instance = [bpDeviceArray objectAtIndex:0]; \n    } \n}\n")),(0,a.kt)("h2",{id:"step-10-native-sdk-supported-devices-list"},"Step 10: Native SDK supported devices list"),(0,a.kt)("h3",{id:"bp"},"BP:"),(0,a.kt)("p",null,"iHealth BP3 \u3001iHealth BP3L\u3001 iHealth BP5 \u3001iHealth BP7 \u3001 iHealth BP7S\u3001 iHealth Continua BP\u3001 iHealth KN550BT\u3001 iHealth ABI \u3001iHealth ABP100\u3001 iHealth BPM1\u3001 iHealth BP5S "),(0,a.kt)("h3",{id:"hs"},"HS:"),(0,a.kt)("p",null,"iHealth HS2\u3001iHealth HS2S\u3001 iHealth HS3\u3001 iHealth HS4\u3001 iHealth HS4S(Same with HS4)\u3001 iHealth HS5\u3001 iHealth HS5S\u3001 iHealth HS6 "),(0,a.kt)("h3",{id:"am"},"AM:"),(0,a.kt)("p",null,"iHealth AM3 \u3001iHealth AM3S \u3001iHealth AM4 \u3001iHealth AM5 "),(0,a.kt)("h3",{id:"bg"},"BG:"),(0,a.kt)("p",null,"iHealth BG1\u3001iHealthBG1S\u3001 iHealth BG3 \u3001iHealth BG5\u3001 iHealth BG5S\u3001"),(0,a.kt)("h3",{id:"po"},"PO:"),(0,a.kt)("p",null,"iHealth PO3\u3001iHealth PO3M\u3001iHealth PO1"),(0,a.kt)("h3",{id:"thermometer"},"Thermometer:"),(0,a.kt)("p",null,"THV3 \u3001TS28B \u3001NT13B\u3001PT3SBT "),(0,a.kt)("h3",{id:"support-update-ihealth-device-for-ios"},"Support Update iHealth Device for iOS"),(0,a.kt)("p",null,"AM3\u3001AM3S\u3001AM4 \u3001HS4 \u3001HS4S \u3001HS2 \u3001BG5S\u3001PO3M ABP100 \u3001BP5S \u3001HS2S\u3001PT3SBT"))}h.isMDXComponent=!0},6102:function(e,t,i){t.Z=i.p+"assets/images/doc_ready_1-47f9e7a4067b237c72447aebe28e5af4.png"},6955:function(e,t,i){t.Z=i.p+"assets/images/doc_ready_2-86ae502750f47d6e2fa505e3bd89c961.png"},1661:function(e,t,i){t.Z=i.p+"assets/images/doc_ready_3-7e84e940d12a5e011a9086594804b9b6.png"},3437:function(e,t,i){t.Z=i.p+"assets/images/doc_ready_4-eaee68ed9142b9a4070471536ab734f3.png"},1792:function(e,t,i){t.Z=i.p+"assets/images/doc_ready_5-1f7317c2eb801186e115c0908b31c5da.png"},4425:function(e,t,i){t.Z=i.p+"assets/images/doc_ready_6-fcfcb4c73e12a61915d3e65a6222832d.png"},9544:function(e,t,i){t.Z=i.p+"assets/images/guide_ios_2-a1740b1e11474276d942e4f9145a89bf.png"},9719:function(e,t,i){t.Z=i.p+"assets/images/guide_ios_3-8616b730a6902303d597fce9a0253b42.png"},7714:function(e,t,i){t.Z=i.p+"assets/images/guide_ios_4-16debb7bc2d6b271a227e6467b0c3430.png"},552:function(e,t,i){t.Z=i.p+"assets/images/guide_ios_5-fee2b8db46fea67ce49855bc0ae532c3.png"},8497:function(e,t,i){t.Z=i.p+"assets/images/guide_ios_6-2d33c5eab6facaf2dada07d968b76723.png"},1177:function(e,t,i){t.Z=i.p+"assets/images/guide_ios_7-92442c0ae92d4c9a44667da04b98b6d0.png"}}]);