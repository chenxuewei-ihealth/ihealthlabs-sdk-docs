"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[745],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>u});var t=n(7294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=t.createContext({}),l=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},d=function(e){var a=l(e.components);return t.createElement(c.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(n),u=s,v=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return n?t.createElement(v,r(r({ref:a},d),{},{components:n})):t.createElement(v,r({ref:a},d))}));function u(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=p;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var l=2;l<i;l++)r[l]=n[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2417:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=n(7462),s=(n(7294),n(3905));const i={title:"AM6",sidebar_position:5},r=void 0,o={unversionedId:"ios/tracker/am6",id:"ios/tracker/am6",title:"AM6",description:"1. AM6 is a low-power activity tracker. It can track acticity, sleep, heart rate and Blood oxygen.",source:"@site/docs/ios/tracker/am6.mdx",sourceDirName:"ios/tracker",slug:"/ios/tracker/am6",permalink:"/ihealthlabs-sdk-docs/docs/ios/tracker/am6",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios/tracker/am6.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"AM6",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"AM5",permalink:"/ihealthlabs-sdk-docs/docs/ios/tracker/am5"},next:{title:"ECG3",permalink:"/ihealthlabs-sdk-docs/docs/ios/ecg/"}},c={},l=[{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify  and init",id:"1listen-to-device-notify--and-init",level:3},{value:"2.Scan for AM6 devices",id:"2scan-for-am6-devices",level:3},{value:"3.Connect to AM6 devices",id:"3connect-to-am6-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"How to bind user with AM6",id:"how-to-bind-user-with-am6",level:2},{value:"Bind user",id:"bind-user",level:3},{value:"Bind user success",id:"bind-user-success",level:3},{value:"Bind user fail",id:"bind-user-fail",level:3},{value:"Unbind user",id:"unbind-user",level:3},{value:"How to get started with AM6",id:"how-to-get-started-with-am6",level:2},{value:"Get AM6 information and sync time",id:"get-am6-information-and-sync-time",level:3},{value:"Set user information of the device",id:"set-user-information-of-the-device",level:3},{value:"Set Notification",id:"set-notification",level:2},{value:"Set phone platform",id:"set-phone-platform",level:3},{value:"Device settings",id:"device-settings",level:2},{value:"Find device",id:"find-device",level:3},{value:"Find phone",id:"find-phone",level:3},{value:"Reboot device",id:"reboot-device",level:3},{value:"Get current time of AM6",id:"get-current-time-of-am6",level:3},{value:"Set wearing hand",id:"set-wearing-hand",level:3},{value:"Get wearing hand",id:"get-wearing-hand",level:3},{value:"Set target reminder",id:"set-target-reminder",level:3},{value:"Get target reminder",id:"get-target-reminder",level:3},{value:"Set sedentary reminder",id:"set-sedentary-reminder",level:3},{value:"Get sedentary reminder",id:"get-sedentary-reminder",level:3},{value:"Set raise to light",id:"set-raise-to-light",level:3},{value:"Get raise to light",id:"get-raise-to-light",level:3},{value:"Set do not disturb mode",id:"set-do-not-disturb-mode",level:3},{value:"Get do not disturb mode",id:"get-do-not-disturb-mode",level:3},{value:"How to sync data with AM6",id:"how-to-sync-data-with-am6",level:2},{value:"Prepare sync data   \uff08This API must be called before synchronizing all data\uff09",id:"prepare-sync-data---this-api-must-be-called-before-synchronizing-all-data",level:3},{value:"Daily data",id:"daily-data",level:3},{value:"Delete Daily data",id:"delete-daily-data",level:3},{value:"DailyStepsCalorieDistance",id:"dailystepscaloriedistance",level:3},{value:"Delete DailyStepsCalorieDistance",id:"delete-dailystepscaloriedistance",level:3},{value:"Sleep data",id:"sleep-data",level:3},{value:"Sleep data",id:"sleep-data-1",level:3},{value:"Blood oxygen data",id:"blood-oxygen-data",level:3},{value:"Delete Blood oxygen data",id:"delete-blood-oxygen-data",level:3},{value:"Daily Heart Rate",id:"daily-heart-rate",level:3},{value:"Delete Daily Heart Rate",id:"delete-daily-heart-rate",level:3},{value:"Sport Data",id:"sport-data",level:3},{value:"Delete Sport Data",id:"delete-sport-data",level:3},{value:"Delete All Data",id:"delete-all-data",level:3},{value:"Disconnect AM6 connection",id:"disconnect-am6-connection",level:3}],d={toc:l};function m(e){let{components:a,...i}=e;return(0,s.kt)("wrapper",(0,t.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol"},"AM6 is a low-power activity tracker. It can track acticity, sleep, heart rate and Blood oxygen."),(0,s.kt)("li",{parentName:"ol"},"First use requires charging until the dial of watch displays a QR code."),(0,s.kt)("li",{parentName:"ol"},"After the user successfully bound, AM6 will enter the dial activity UI, if the user unbound will return to the QR code UI.")))),(0,s.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,s.kt)("h3",{id:"1listen-to-device-notify--and-init"},"1.Listen to device notify  and init"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:AM6Discover object:nil];\n            \n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:AM6ConnectFailed object:nil];\n            \n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:AM6ConnectNoti object:nil];\n            \n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:AM6DisConnectNoti object:nil];\n\n [AM6Controller shareAM6Controller];\n            \n [[AM6Controller shareAM6Controller] configAM6DeviceBleParameters];\n")),(0,s.kt)("h3",{id:"2scan-for-am6-devices"},"2.Scan for AM6 devices"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_AM6];\n")),(0,s.kt)("h3",{id:"3connect-to-am6-devices"},"3.Connect to AM6 devices"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_AM5 andSerialNub:deviceMac];\n")),(0,s.kt)("h2",{id:"api-reference"},"API reference"),(0,s.kt)("h2",{id:"how-to-bind-user-with-am6"},"How to bind user with AM6"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol"},"AM6 is used for the first time or is in an unbound state, and AM6 displays a QR code."),(0,s.kt)("li",{parentName:"ol"},"Call the API bindUser, AM6 enters the binding state."),(0,s.kt)("li",{parentName:"ol"},"Call the API bindUserSuccess and pass user id to AM6, AM6 will save user id, and then wiil display UI of successful binding."),(0,s.kt)("li",{parentName:"ol"},"Call the API bindUserFail, AM6 will display UI of failure binding, and then fall back to UI of OR code.")))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"am6 binding",src:n(6421).Z,width:"960",height:"720"})),(0,s.kt)("h3",{id:"bind-user"},"Bind user"),(0,s.kt)("p",null,"Am6 enters the binding state."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * App sends StartBind to device\n *@param success  success\n *@param fail  fail\n */\n- (void)sendStartBindWithSuccess:(DisposeAM6SuccessBlock)success\n                 fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"bind-user-success"},"Bind user success"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * The app sends the binding success to the device\n *@param userId   we recommend use user id's md5-16 value, 16 bytes length\n *@param success  success\n *@param fail  fail\n */\n- (void)sendSuccessBindWithUserId:(NSData*)userId\n                          success:(DisposeAM6SuccessBlock)success\n                              fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"bind-user-fail"},"Bind user fail"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * The app sends the binding fail to the device\n *@param success  success\n *@param fail  fail\n */\n- (void)sendFailBindWithSuccess:(DisposeAM6SuccessBlock)success\n                              fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"unbind-user"},"Unbind user"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * App sends unbind to device\n *@param userId   we recommend use user id's md5-16 value, 16 bytes length\n *@param success  success\n *@param fail  fail\n */\n- (void)sendUnbindWithUserId:(NSData*)userId\n                     success:(DisposeAM6SuccessBlock)success\n                        fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h2",{id:"how-to-get-started-with-am6"},"How to get started with AM6"),(0,s.kt)("h3",{id:"get-am6-information-and-sync-time"},"Get AM6 information and sync time"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * Query device information and synchronize time to the device\n *@param success  You can get data by reading:  battery, isCharging,firmwareVersion,hardwareVersion,bindStatus\n *{\n * Battery = 100;   Power 0-100\n * ChargeState = 0;  0:NO Charging  1:Charging\n * FirmwareVersion = "0.1.1";  FirmwareVersion\n * HardwareVersion = "1.0.0";  HardwareVersion\n * bindState = 1;    0: The watch is not bound (QR code state) 1: The watch is bound (normal state)\n}\n *@param fail  fail\n */\n- (void)queryDeviceInfoAndSyncTimeWithSuccess:(DisposeAM6SuccessBlock)success\n                                         fail:(DisposeAM6ErrorBlock)fail;\n')),(0,s.kt)("h3",{id:"set-user-information-of-the-device"},"Set user information of the device"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Set user info\n *@param userId we recommend use user id's md5-16 value, 16 bytes length\n *@param gender 0: male 1: female\n *@param age  age\n *@param height height, in cm\n *@param weight Weight, in kg\n *@param success  success\n *@param fail  fail\n */\n- (void)setUserInfoWithUserIdMD5:(NSData*)userId\n                          gender:(uint8_t)gender\n                             age:(uint8_t)age\n                          height:(uint8_t)height\n                          weight:(double)weight\n                         success:(DisposeAM6SuccessBlock)success\n                            fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h2",{id:"set-notification"},"Set Notification"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Before setting nofication information, please set the mobile platform type."))),(0,s.kt)("h3",{id:"set-phone-platform"},"Set phone platform"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Set platform to iOS\n * @param success  success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)setPlatformWithSuccess:(DisposeAM6SuccessBlock)success\n                          fail:(DisposeAM6ErrorBlock)fail;\n/**\n * Query notification switch\n * @param success   notificationEnable    0:close 1:open\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)queryNotificationStateWithSuccess:(DisposeAM6SuccessBlock)success\n                                     fail:(DisposeAM6ErrorBlock)fail;\n/**\n * Set notification switch\n * @param enable YES\uff1aopen  NO\uff1aclose\n * @param success  success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)setNotificationStatus:(BOOL)enable\n                      success:(DisposeAM6SuccessBlock)success\n                         fail:(DisposeAM6ErrorBlock)fail;\n\n/**\n * Query whether ANCS has been authorized\n */\n- (BOOL)queryAncsAuthorizedStatus NS_AVAILABLE_IOS(13);\n")),(0,s.kt)("h2",{id:"device-settings"},"Device settings"),(0,s.kt)("h3",{id:"find-device"},"Find device"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * findDevice\n * @param flag 0: start 1: end\n * @param success  success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)findDevice:(uint8_t)flag\n           success:(DisposeAM6SuccessBlock)success\n              fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"find-phone"},"Find phone"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"When the mobile phone is connected, click AM6 to find the function of the mobile phone, and the SDK will receive the message."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n *Start FindPhone\n *\n *If you want to use this feature, please listen to this notification:\n *\n *AM6StartFindPhoneNoti\n *\n */\n\n/**\n * Stop FindPhone\n *\n *If you want to use this feature, please listen to this notification:\n *\n *AM6StopFindPhoneNoti\n *\n */\n")),(0,s.kt)("h3",{id:"reboot-device"},"Reboot device"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"After calling this API, AM6 will be disconnected."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * rebootDevice\n * @param success  success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)rebootDeviceWithSuccess:(DisposeAM6SuccessBlock)success\n                           fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"get-current-time-of-am6"},"Get current time of AM6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Get the current time of the AM6\n *@param success  You can get data by reading:  deviceTime, is12HoursFormat\n *@param fail  fail\n */\n- (void)queryDeviceTimeWithSuccess:(DisposeAM6SuccessBlock)success\n                              fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"set-wearing-hand"},"Set wearing hand"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * setWearHand\n * @param hand 0x00: left 0x01: right\n * @param success  success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)setWearHand:(uint8_t)hand\n            success:(DisposeAM6SuccessBlock)success\n               fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"get-wearing-hand"},"Get wearing hand"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * queryWearHand\n * @param success wristHand:   0 left 1 right\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)queryWearHandWithSuccess:(DisposeAM6SuccessBlock)success\n                            fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"set-target-reminder"},"Set target reminder"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * setGoalReminder\n * @param enable YES\uff1aopen\uff0cNO\uff1aclose\n * @param calorie  Calorie Goal (0-65535 Cal)\n * @param steps  step goal\n * @param success  success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)setGoalReminderEnable:(BOOL)enable\n                      calorie:(uint32_t)calorie\n                        steps:(uint32_t)steps\n                      success:(DisposeAM6SuccessBlock)success\n                         fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"get-target-reminder"},"Get target reminder"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * queryGoalReminder\n * @param success  :  isActivityGoalOn(YES or NO),caloGoal,stepsGoal\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)queryGoalReminderWithSuccess:(DisposeAM6SuccessBlock)success\n                                fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"set-sedentary-reminder"},"Set sedentary reminder"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * setStretchReminder\n * @param enable YES\uff1aopen\uff0cNO\uff1aclose\n * @param start  Minute to start (24-hour format, minimum 0 minutes)\n * @param end  Ending minute (24-hour format, max 1439 minutes)\n * @param success  success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)setStretchReminderEnable:(BOOL)enable\n                           start:(NSInteger)start\n                             end:(NSInteger)end\n                         success:(DisposeAM6SuccessBlock)success\n                            fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"get-sedentary-reminder"},"Get sedentary reminder"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"- (void)setGoalReminderEnable:(BOOL)enable\n                      calorie:(uint32_t)calorie\n                        steps:(uint32_t)steps\n                      success:(DisposeAM6SuccessBlock)success\n                         fail:(DisposeAM6ErrorBlock)fail;\n/**\n * queryStretchReminder\n * @param success  : isStretchReminderOn(YES or NO) ,stretchReminderStartTime(24-hour format, minimum 0 minutes),stretchReminderEndTime((24-hour format, max 1439 minutes)\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)queryStretchReminderWithSuccess:(DisposeAM6SuccessBlock)success\n                                   fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"set-raise-to-light"},"Set raise to light"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * setRaiseWake\n * @param enable YES\uff1aopen\uff0cNO\uff1aclose\n * @param start  Minute to start (24-hour format, minimum 0 minutes)\n * @param end  Ending minute (24-hour format, max 1439 minutes)\n * @param success  success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)setRaiseWakeEnable:(BOOL)enable\n                     start:(NSInteger)start\n                       end:(NSInteger)end\n                   success:(DisposeAM6SuccessBlock)success\n                      fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"get-raise-to-light"},"Get raise to light"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * queryRaiseWake\n * @param success : isRaiseToWakeOn(YES or NO) ,raiseToWakeStartTime (24-hour format, minimum 0 minutes),raiseToWakeEndTime(24-hour format, max 1439 minutes)\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)queryRaiseWakeWithSuccess:(DisposeAM6SuccessBlock)success\n                             fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"set-do-not-disturb-mode"},"Set do not disturb mode"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * setNotDisturb\n * @param enable YES\uff1aopen\uff0cNO\uff1aclose\n * @param start  Minute to start (24-hour format, minimum 0 minutes)\n * @param end  Ending minute (24-hour format, max 1439 minutes)\n * @param success  success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)setNotDisturbEnable:(BOOL)enable\n                      start:(NSInteger)start\n                        end:(NSInteger)end\n                    success:(DisposeAM6SuccessBlock)success\n                       fail:(DisposeAM6ErrorBlock)fail;\n\n")),(0,s.kt)("h3",{id:"get-do-not-disturb-mode"},"Get do not disturb mode"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * queryNotDisturb\n * @param success  : isDoNotDisturbOn(YES or NO) ,doNotDisturbStartTime (24-hour format, minimum 0 minutes), doNotDisturbEndTime(24-hour format, max 1439 minutes)\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)queryNotDisturbWithSuccess:(DisposeAM6SuccessBlock)success\n                              fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h2",{id:"how-to-sync-data-with-am6"},"How to sync data with AM6"),(0,s.kt)("h3",{id:"prepare-sync-data---this-api-must-be-called-before-synchronizing-all-data"},"Prepare sync data   \uff08This API must be called before synchronizing all data\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Prepare the synchronization command. Before synchronizing data, you need to call this command once!!!!\n * @param success  success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)prepareSyncWithSuccess:(DisposeAM6SuccessBlock)success\n                          fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"daily-data"},"Daily data"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The daily report is a summary of the data for the day."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Sync daily, up to 15 days\n * @param success  :NSArray<AM6DeviceDailyActivityReportModel*> *reportArray\n {\n calorie = 0;\n dateString = 20340101000000;\n effectiveStand = 0;\n functionEnable = 2047;\n heartRate = 0;\n heartRateAve = 0;\n heartRateMax = 0;\n heartRateMaxTime = 20000000000000;\n heartRateMin = 0;\n heartRateMinTime = 20000000000000;\n heartRateResting = 0;\n spo2 = 0;\n steps = 0;\n}\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)syncDailyActivityReportWithSuccess:(DisposeAM6SuccessBlock)success\n                                      fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"delete-daily-data"},"Delete Daily data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * deleteDailyActivityReport\n * @param success success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)deleteDailyActivityReportWithSucess:(DisposeAM6SuccessBlock)success\nfail:(DisposeAM6ErrorBlock)fail;\n\n")),(0,s.kt)("h3",{id:"dailystepscaloriedistance"},"DailyStepsCalorieDistance"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Synchronize daily records of steps, calories, distance details, up to 15 days, 1 set of values per hour\n * @param success  :NSArray<AM6DeviceDailyStepModel*> *dailyStepsArray;\n (   {\n calorieArray =         (\n     2850............\n );\n dateString = 20210704000000;\n distanceArray =         (\n     2850.............\n );\n stepsArray =         (\n     2850.................\n );\n},\n)\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)syncDailyStepsCalorieDistanceWithSuccess:(DisposeAM6SuccessBlock)success\n                                            fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"delete-dailystepscaloriedistance"},"Delete DailyStepsCalorieDistance"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n * deleteDailyStepsCalorieDistance\n * @param success success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)deleteDailyStepsCalorieDistanceWithSucess:(DisposeAM6SuccessBlock)success\nfail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"sleep-data"},"Sleep data"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This API returns sleep detail data in the form of sleep segments. Each sleep segment contains start date and sleep details. The start date starts at 0:00 of the current day. The sleep details include the sleep mode and the start time of this mode.\nFor example, a person goes to bed at 2023-06-27 23:11 in the evening and wakes up at 2023-06-28 02:19 o'clock the next morning."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Synchronized sleep, up to 15 days\n * @param success  :NSArray<AM6DeviceSleepModel*> *sleepArray;\n (  {\n         dataArray =         (\n                         {\n                 status = 1;//0x01 enter sleep 0x02 light sleep 0x03 deep sleep 0x04 wake up 0x05 exit sleep 0x06 rapid eye movement (REM)\n                 timeString = 2201;\n             },\n         );\n         dateString = 20230204000000;\n     },\n)\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n\n- (void)syncSleepWithSuccess:(DisposeAM6SuccessBlock)success\n                        fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"sleep-data-1"},"Sleep data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * deleteSleepData\n * @param success success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)deleteSleepWithSucess:(DisposeAM6SuccessBlock)success\nfail:(DisposeAM6ErrorBlock)fail;\n\n")),(0,s.kt)("h3",{id:"blood-oxygen-data"},"Blood oxygen data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Synchronous offline blood oxygen, 8\n * @param success  :NSArray<AM6DeviceOffineBloodOxygenModel*> *bloodOxygenArray;\n (\n {\n dateString = 20210704030100;\n value = 15;\n},\n)\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)syncOfflineBloodOxygenWithSuccess:(DisposeAM6SuccessBlock)success\n                                     fail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"delete-blood-oxygen-data"},"Delete Blood oxygen data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * deleteOfflineBloodOxygen\n * @param success success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)deleteOfflineBloodOxygenWithSucess:(DisposeAM6SuccessBlock)success\nfail:(DisposeAM6ErrorBlock)fail;\n")),(0,s.kt)("h3",{id:"daily-heart-rate"},"Daily Heart Rate"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n * Synchronize daily heart rate, up to 15 days\n * @param success  :NSArray<AM6DeviceHeartRateModel*> *dailyHeartRateArray;\n (\n  {\n         dataArray =         (\n             0..........\n         );\n         dateString = 20210704000000;\n  },\n)\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n\n- (void)syncDailyHeartRateWithSuccess:(DisposeAM6SuccessBlock)success\n                                 fail:(DisposeAM6ErrorBlock)fail;\n\n")),(0,s.kt)("h3",{id:"delete-daily-heart-rate"},"Delete Daily Heart Rate"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n * deleteDailyHeartRate\n * @param success success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)deleteDailyHeartRateWithSucess:(DisposeAM6SuccessBlock)success\nfail:(DisposeAM6ErrorBlock)fail;\n\n")),(0,s.kt)("h3",{id:"sport-data"},"Sport Data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n * Synchronize sports data (dotted data and report data)\n * @param success  :\n NSArray<AM6DeviceIndoorRun*> *indoorRunArray\n (\n         {\n         dataArray =         (\n                         {\n                 calorieArray =   (\n                     61,\n                     61,..............\n                      )\n                 dateString = 20200229180100;\n                 distanceArray =  (\n                     28,\n                     28,.................\n                   )\n                        }\n                    )\n         }\n )\n NSArray<AM6DeviceIndoorRunReport*> *indoorRunReportArray;\n (\n         {\n         anaerobicTime = 20;\n         aveHeartRate = 178;\n         bodyEnergyCost = 0;\n         cardioTime = 20;\n         dataType = 0;\n         endDateString = 20200229210100;\n         estimatedRecoveryTime = 0;\n         fatReductionTime = 20;\n         maxHeartRate = 255;\n         maxOxygenUptake = 0;\n         maxPace = 320;\n         maxStepFrequency = 336;\n         minHeartRate = 0;\n         minPace = 400;\n         peakTime = 20;\n         startDateString = 20200229180100;\n         timeZone = 0;\n         totalCalorie = 65535;\n         totalDistance = 30000;\n         totalStep = 60000;\n         totalTime = 10800;\n         trainingEffect = 0;\n         type = 0;\n         typeDescription = 0;\n         version = 0;\n         warnUpTime = 20;\n     },\n)\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)syncSportWithSuccess:(DisposeAM6SuccessBlock)success\n                        fail:(DisposeAM6ErrorBlock)fail;\n\n")),(0,s.kt)("h3",{id:"delete-sport-data"},"Delete Sport Data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * deleteSport\n * @param success success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)deleteSportWithSucess:(DisposeAM6SuccessBlock)success\nfail:(DisposeAM6ErrorBlock)fail;\n\n")),(0,s.kt)("h3",{id:"delete-all-data"},"Delete All Data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * deleteAllData\n * @param success success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n- (void)deleteAllDataWithSuccess:(DisposeAM6SuccessBlock)success\n                            fail:(DisposeAM6ErrorBlock)fail;\n\n")),(0,s.kt)("h3",{id:"disconnect-am6-connection"},"Disconnect AM6 connection"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Disconnect AM6 connection.\n * @param success  success\n * @param fail Communication error codes, see AM6 error descriptions.\n */\n-(void)commandAM6Disconnect:(DisposeAM6SuccessBlock)success\n                       fail:(DisposeAM6ErrorBlock)fail;\n\n")))}m.isMDXComponent=!0},6421:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/am6_binding-5ad84216f0028cd54b4501fcf34e8a03.png"}}]);