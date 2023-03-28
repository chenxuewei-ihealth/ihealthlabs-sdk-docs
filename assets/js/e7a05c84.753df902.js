"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7523],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>S});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),S=o,p=m["".concat(l,".").concat(S)]||m[S]||d[S]||a;return t?n.createElement(p,s(s({ref:r},u),{},{components:t})):n.createElement(p,s({ref:r},u))}));function S(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},363:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={title:"HS2S",sidebar_position:2},s=void 0,i={unversionedId:"ios/scale/hs2s",id:"ios/scale/hs2s",title:"HS2S",description:"WorkFlow",source:"@site/docs/ios/scale/hs2s.md",sourceDirName:"ios/scale",slug:"/ios/scale/hs2s",permalink:"/ihealthlabs-sdk-docs/docs/ios/scale/hs2s",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios/scale/hs2s.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"HS2S",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"HS2",permalink:"/ihealthlabs-sdk-docs/docs/ios/scale/hs2"},next:{title:"HS4",permalink:"/ihealthlabs-sdk-docs/docs/ios/scale/hs4"}},l={},c=[{value:"WorkFlow",id:"workflow",level:2},{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for HS2S devices",id:"2scan-for-hs2s-devices",level:3},{value:"3.Connect to HS2S devices",id:"3connect-to-hs2s-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"Get the device info",id:"get-the-device-info",level:3},{value:"Get the battery info",id:"get-the-battery-info",level:3},{value:"Set the unit of device",id:"set-the-unit-of-device",level:3},{value:"Get the info of user in HS2S",id:"get-the-info-of-user-in-hs2s",level:3},{value:"Create or update user info in device",id:"create-or-update-user-info-in-device",level:3},{value:"Delete user info in device",id:"delete-user-info-in-device",level:3},{value:"Get off line data count",id:"get-off-line-data-count",level:3},{value:"Get offline data",id:"get-offline-data",level:3},{value:"Delete offline data",id:"delete-offline-data",level:3},{value:"Get Anonymous Memory data count",id:"get-anonymous-memory-data-count",level:3},{value:"Get Anonymous Memory data",id:"get-anonymous-memory-data",level:3},{value:"Delete Anonymous Memory data",id:"delete-anonymous-memory-data",level:3},{value:"Measure",id:"measure",level:3},{value:"Reset device",id:"reset-device",level:3},{value:"HS2S Light up bluetooth",id:"hs2s-light-up-bluetooth",level:3},{value:"Enter heart rate measurement mode",id:"enter-heart-rate-measurement-mode",level:3},{value:"Exit heart rate measurement mode",id:"exit-heart-rate-measurement-mode",level:3},{value:"Disconnect  device",id:"disconnect--device",level:3}],u={toc:c};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"workflow"},"WorkFlow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scan and connect HS2s scale.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get device info, if don't have any user info, create a user info and take a measure directly.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get user info, if have this user info, get data stored in HS2S. if don't have this user info, create a user info.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get offline data and take measurement."))),(0,o.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,o.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:HS2SDiscover object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:HS2SConnectFailed object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:HS2SConnectNoti object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:HS2SDisConnectNoti object:nil];\n            \n[HS2SController shareIHHS2SController];\n")),(0,o.kt)("h3",{id:"2scan-for-hs2s-devices"},"2.Scan for HS2S devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_HS2S];\n")),(0,o.kt)("h3",{id:"3connect-to-hs2s-devices"},"3.Connect to HS2S devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_HS2S andSerialNub:deviceMac];\n")),(0,o.kt)("h2",{id:"api-reference"},"API reference"),(0,o.kt)("h3",{id:"get-the-device-info"},"Get the device info"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'/**\n *Get HS2S DeviceInfo (After the HS2S device is successfully connected, the interface must be called to synchronize the device time. Otherwise, the offline data measurement time error will be caused)\n \n * @param deviceInfo Contains  device IDPS info(FirmwareVersion,HardwareVersion,Manufacture,ModelNumber,ProtocolString,SerialNumber),user count ,HS2S current unit(1:Kg,2:LB,3:ST),battery\n * Example:\n * {\n           Battary = 70;\n           DeviceName = HS2S;\n           FirmwareVersion = "0.5.4";\n           HardwareVersion = "1.0.0";\n           Manufacture = iHealth;\n           ModelNumber = "HS2S 11070";\n           ProtocolString = "com.jiuan.BFSV22";\n           SerialNumber = 004D320CA04D;\n           Unit = 1;\n           UserCount = 1;\n * }\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2S error instruction.\n */\n-(void)commandGetHS2SDeviceInfo:(DisposeHS2SDeviceInfo)deviceInfo DiaposeErrorBlock:(DisposeHS2SErrorBlock)disposeErrorBlock;\n')),(0,o.kt)("h3",{id:"get-the-battery-info"},"Get the battery info"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n *Get HS2S battery\n \n * @param battary HS2Sbattery [Range:0\uff5e100]%\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2S error instruction.\n */\n-(void)commandGetHS2SBattery:(DisposeHS2SBatteryBlock)battary DiaposeErrorBlock:(DisposeHS2SErrorBlock)disposeErrorBlock;\n")),(0,o.kt)("h3",{id:"set-the-unit-of-device"},"Set the unit of device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n \n * SetUnit\n \n * Import parameter:\n * @param tempUnit  -Unit displayed on HS2S: HSUnit_Kg\u3001HSUnit_LB\u3001HSUnit_ST\u3002\n * Return parameters:\n * @param result   YES:Success  NO:Failed\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2S error instruction.\n */\n\n-(void)commandSetHS2SUnit:(HSUnit)tempUnit result:(DisposeHS2SResult)result  DisposeErrorBlock:(DisposeHS2SErrorBlock)disposeErrorBlock;\n")),(0,o.kt)("h3",{id:"get-the-info-of-user-in-hs2s"},"Get the info of user in HS2S"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * Get HS2S UserInfo\n * Return parameters:\n * @param userInfo  NSDictionary type,contains: UserCount and UserInfo\n * Example:\n * {\n        UserCount = 1;\n        UserInfo =(\n            {\n              "UserInfo_Age" = 20;\n              "UserInfo_Height" = 100;\n              "UserInfo_CreatTS" = 1558406503;                      //User creat time\n              "UserInfo_ID" = <69486561 6c746831 32333435 36373839>;\n              "UserInfo_ImpedanceMark" = 1;                         //0 Don\'t measure 1 Measure\n              "UserInfo_SEX" = 1;                                   //0 female 1 male,\n              "UserInfo_Weight" = "79.5";\n              "UserInfo_Fitness" = 1;                               //0:Don\'t fitness 1:fitness\n            }\n         );\n * }\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2S error instruction.\n */\n-(void)commandGetHS2SUserInfo:(DisposeHS2SUserInfo)userInfo DiaposeErrorBlock:(DisposeHS2SErrorBlock)disposeErrorBlock;\n')),(0,o.kt)("h3",{id:"create-or-update-user-info-in-device"},"Create or update user info in device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Create or Update HS2S UserInfo (The HS2S device only supports the creation of a maximum of 8 users)\n * Import parameter:\n * @param user (user information must be entered in accordance with the reference range, otherwise it may be impossible to measure the accurate body fat information)\n \n * contains:\n * hs2SUserID:NSData type,The user ID must be 16 bytes or the user creation fails,\n * createTS:NSInteger type,The unit of time is seconds ,\n * weight:NSNumber type,range:20-150kg,\n * age:NSNumber type,range:18-99 years,\n * height:NSNumber type,range:90-220cm\n * sex:0 female 1 male,\n * impedanceMark: 0 Don't measure 1 Measure\n * fitnessMark:0 Don't fitness 1:fitness\n * Return parameters:\n * @param result   YES:Success  NO:Failed\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2S error instruction.\n */\n-(void)commandUpdateHS2SUserInfoWithUser:(HealthUser*)user result:(DisposeHS2SResult)result DiaposeErrorBlock:(DisposeHS2SErrorBlock)disposeErrorBlock;\n")),(0,o.kt)("h3",{id:"delete-user-info-in-device"},"Delete user info in device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n *  Delete HS2S User\n * Import parameter:\n * @param userID :NSData type,The user ID must be 16 bytes or the user creation fails,\n * Return parameters:\n * @param result   YES:Success  NO:Failed\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2S error instruction.\n */\n-(void)commandDeleteHS2SUserWithUserID:(NSData*)userID result:(DisposeHS2SResult)result DiaposeErrorBlock:(DisposeHS2SErrorBlock)disposeErrorBlock;\n")),(0,o.kt)("h3",{id:"get-off-line-data-count"},"Get off line data count"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n *  Get HS2S Memory data count\n * Import parameter:\n * @param userID :NSData type,The user ID must be 16 bytes or the user creation fails,\n * Return parameters:\n * @param count  NSNumber Type,memory count\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2S error instruction.\n */\n-(void)commandGetHS2SMemoryDataCountWithUserID:(NSData*)userID memoryCount:(DisposeHS2SMemoryCountBlock)count DiaposeErrorBlock:(DisposeHS2SErrorBlock)disposeErrorBlock;\n")),(0,o.kt)("h3",{id:"get-offline-data"},"Get offline data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'/**\n *  Get HS2S Memory data\n \n Lean mass calculation formula: result = weight * (1 - body fat percentage)\n BMI calculation formula: result = weight / (height * height)\n BMR calculation formula:\n If no fat is measured\n {\n For men:\n P = 13.397* weight + 4.799* height \u2013 5.677* age + 88.362\n For women:\n P = 9.247* weight + 3.098* height \u2013 4.330* age + 447.593\n If the user enters the sport level in the app, correct the P:\n Sport level=1, P = P*1.0\n Sport level = 2, P = P*1.05\n Sport level = 3, P = P*1.10\n }\n When fat is measured:\n {\n P=370 + 21.6*Lean mass(kg )\n }\n * Import parameter:\n * @param userID :NSData type,The user ID must be 16 bytes or the user creation fails,\n * Return parameters:\n * @param memoryData NSArray Type,memory data\n * Example:\n * (\n \n          {\n               DeviceMac = 004D320CA04D;                      //device mac\n               HS2SBodyAge = 10;                              //body age\n               HS2SBodyWaterPercentAge = "39.3";              //body moisture rate\n               HS2SBoneMineral = "1.9";                       //Bone salt\n               HS2SFatControl = 0;                            //Fat Control\n               HS2SFatWeight = 0;                             //Fat weight\n               HS2SFitness = 1;                               //0:Don\'t fitness 1:fitness\n               HS2SImpedance = ();                            //NSArray type ,Impedance\n               HS2SIsRightTS = 1;                             //0:Incorrect, unsynchronized time on measured data 1:Correct, synchronize the measured data after the time\n               HS2SMeasureTS = "2019-05-18 08:56:38 +0000";\n               HS2SMuscle = "13.1";                           //Muscle mass\n               HS2SMuscleControl = 0;                         //Muscle Control\n               HS2SProteinPercentAge = "9.8";                 //Protein rate\n               HS2SResultBodyFatPercentAge = "44.2";          //Body fat rate\n               HS2SBodyWeightFlag = 0;                        //0:Body fat was not measured 1:Measure body fat\n               HS2SSkeletalMuscle = 0;                        //Skeletal Muscle\n               HS2SStandardWeight = 0;                        //Standard Weight\n               HS2SVFR = 29;                                  //Visceral fat grade\n               HS2SWeightControl = 0;                         //Weight Control\n               HS2SWeigthResult = "79.5";\n               "UserInfo_Age" = 18;\n               "UserInfo_Height" = 100;\n               "UserInfo_SEX" = 1;\n          }\n * )\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2S error instruction.\n */\n-(void)commandGetHS2SMemoryDataWithUserID:(NSData*)userID memoryData:(DisposeHS2SMemoryDataBlock)memoryData DiaposeErrorBlock:(DisposeHS2SErrorBlock)disposeErrorBlock;\n')),(0,o.kt)("h3",{id:"delete-offline-data"},"Delete offline data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n *  Delete HS2S Memory data\n * Import parameter:\n * @param userID :NSData type,The user ID must be 16 bytes or the user creation fails,\n * Return parameters:\n * @param result   YES:Success  NO:Failed\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2S error instruction.\n */\n-(void)commandDeleteHS2SMemoryDataWithUserID:(NSData*)userID result:(DisposeHS2SResult)result DiaposeErrorBlock:(DisposeHS2SErrorBlock)disposeErrorBlock;\n\n")),(0,o.kt)("h3",{id:"get-anonymous-memory-data-count"},"Get Anonymous Memory data count"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n *  Get HS2S Anonymous Memory data count\n * Return parameters:\n * @param count memory count\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2S error instruction.\n */\n-(void)commandGetHS2SAnonymousMemoryDataCount:(DisposeHS2SAnonymousMemoryCountBlock)count DiaposeErrorBlock:(DisposeHS2SErrorBlock)disposeErrorBlock;\n\n")),(0,o.kt)("h3",{id:"get-anonymous-memory-data"},"Get Anonymous Memory data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'/**\n *  Get HS2S Anonymous Memory data\n * Return parameters:\n * @param memoryData  NSArray type,Each result dictionary contains: HS2SIsRightTS(Time correctness identification,0:Incorrect, unsynchronized time on measured data 1:Correct, synchronize the measured data after the time),HS2SMeasureTS(Measure Time,NSdate type),HS2SWeigthResult(Weigth Result)\n * Example:\n * (\n        {\n           HS2SIsRightTS = 0;    //Time correctness identification\n           HS2SMeasureTS = "2019-05-18 07:18:36 +0000";\n           HS2SWeigthResult = "43.7";\n        }\n * )\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2S error instruction.\n */\n-(void)commandGetHS2SAnonymousMemoryData:(DisposeHS2SAnonymousMemoryDataBlock)memoryData DiaposeErrorBlock:(DisposeHS2SErrorBlock)disposeErrorBlock;\n\n')),(0,o.kt)("h3",{id:"delete-anonymous-memory-data"},"Delete Anonymous Memory data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n *  Delete HS2S Anonymous Memory data\n * Return parameters:\n * @param result   YES:Success  NO:Failed\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2S error instruction.\n */\n-(void)commandDeleteHS2SAnonymousMemoryData:(DisposeHS2SResult)result DiaposeErrorBlock:(DisposeHS2SErrorBlock)disposeErrorBlock;\n\n")),(0,o.kt)("h3",{id:"measure"},"Measure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'/**\n *  Measure HS2S Data\n * Import parameter:\n * @param user (user information must be entered in accordance with the reference range, otherwise it may be impossible to measure the accurate body fat information)\n \n       Lean mass calculation formula: result = weight * (1 - body fat percentage)\n       BMI calculation formula: result = weight / (height * height)\n       BMR calculation formula:\n       If no fat is measured\n      {\n          For men:\n          P = 13.397* weight + 4.799* height \u2013 5.677* age + 88.362\n          For women:\n          P = 9.247* weight + 3.098* height \u2013 4.330* age + 447.593\n          If the user enters the sport level in the app, correct the P:\n          Sport level=1, P = P*1.0\n          Sport level = 2, P = P*1.05\n          Sport level = 3, P = P*1.10\n      }\n       When fat is measured:\n      {\n           P=370 + 21.6*Lean mass(kg )\n      }\n * contains:\n * userType :  0 guest  1 normal\n * hs2SUserID:NSData type,The user ID must be 16 bytes or the user creation fails,\n * createTS:NSInteger type,The unit of time is seconds ,\n * weight:NSNumber type,range:20-150kg,\n * age:NSNumber type,range:18-99 years,\n * height:NSNumber type,range:90-220cm\n * sex:0 female 1 male,\n * impedanceMark: 0 Don\'t measure 1 Measure\n * fitnessMark:0 Don\'t fitness 1:fitness\n * Return parameters:\n * @param unStableWeight     - Current weight, (Kg) [Value Range:0~180]\n * @param stableWeight       - Stable weight, (Kg) [Value Range:0~180]\n * @param weightAndBodyInfo  Weight and body fat information   guest user not return weightAndBodyInfo\n * Example:\n * {\n       DeviceMac = 004D320CA04D;                      //device mac\n       HS2SBodyAge = 10;                              //body age\n       HS2SBodyWaterPercentAge = "39.3";              //body moisture rate\n       HS2SBoneMineral = "1.9";                       //Bone salt\n       HS2SFatControl = 0;                            //Fat Control\n       HS2SFatWeight = 0;                             //Fat weight\n       HS2SFitness = 1;                               //0:Don\'t fitness 1:fitness\n       HS2SImpedance = ();                            //NSArray type ,Impedance\n       HS2SMeasureTS = "2019-05-18 08:56:38 +0000";\n       HS2SMuscle = "13.1";                           //Muscle mass\n       HS2SMuscleControl = 0;                         //Muscle Control\n       HS2SProteinPercentAge = "9.8";                 //Protein rate\n       HS2SResultBodyFatPercentAge = "44.2";          //Body fat rate\n       HS2SBodyWeightFlag = 0;                        //0:Body fat was not measured 1:Measure body fat\n       HS2SSkeletalMuscle = 0;                        //Skeletal Muscle\n       HS2SStandardWeight = 0;                        //Standard Weight\n       HS2SVFR = 29;                                  //Visceral fat grade\n       HS2SWeightControl = 0;                         //Weight Control\n       HS2SWeigthResult = "79.5";\n       "UserInfo_Age" = 18;\n       "UserInfo_Height" = 100;\n       "UserInfo_SEX" = 1;\n * }\n * @param measureFinish  If HS2S is measuring weight, the call to the online measurement interface will fail at the beginning, and the call to the interface will succeed when the return measurement is completed.\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2S error instruction.\n */\n-(void)commandStartHS2SMeasureWithUser:(HealthUser*)user weight:(DisposeHS2SUnStableWeight)unStableWeight stableWeight:(DisposeHS2SStableWeight)stableWeight weightAndBodyInfo:(DisposeHS2SWeightAndBodyInfo)weightAndBodyInfo  disposeHS2SMeasureFinish:(DisposeHS2SMeasureFinish)measureFinish DiaposeErrorBlock:(DisposeHS2SErrorBlock)disposeErrorBlock;\n\n')),(0,o.kt)("h3",{id:"reset-device"},"Reset device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n *  Reset HS2S device\n * Return parameters:\n * @param result   YES:Success  NO:Failed\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2S error instruction.\n */\n-(void)commandResetHS2SDevice:(DisposeHS2SResult)result DiaposeErrorBlock:(DisposeHS2SErrorBlock)disposeErrorBlock;\n\n")),(0,o.kt)("h3",{id:"hs2s-light-up-bluetooth"},"HS2S Light up bluetooth"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n *   HS2S Light up bluetooth\n * Return parameters:\n * @param result   YES:Success  NO:Failed\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2S error instruction.\n */\n-(void)commandSetHS2SDeviceLightUp:(DisposeHS2SResult)result DiaposeErrorBlock:(DisposeHS2SErrorBlock)disposeErrorBlock;\n\n")),(0,o.kt)("h3",{id:"enter-heart-rate-measurement-mode"},"Enter heart rate measurement mode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n(hardwareVersion must be greater than or equal to 6.0.0)\n\n/**\n *   HS2S  Enter heart rate measurement mode\n * Return parameters:\n * @param result\n *  heartResultDic:{\n    HeartValue = 0;\n    ResultStatus = 1;(0: success,\n                 1: failed 1, no real-time data received in 6s\n                 2: Failure 2, the algorithm judges that the user is weighing down\n                 3: Failure 3, calculation failed\n                 4: Failure 4: 30s timeout)\n  }\n\n * @param status  ( 1: User on the scale\n                  2: User referred below\n                  3: The user's heartbeat signal is detected)\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2S error instruction.\n */\n-(void)commandEnterHS2SHeartRateMeasurementMode:(DisposeHS2SHeartResult)result measurementStatus:(DisposeHS2SMeasurementStatus)status  DiaposeErrorBlock:(DisposeHS2SErrorBlock)disposeErrorBlock;\n")),(0,o.kt)("h3",{id:"exit-heart-rate-measurement-mode"},"Exit heart rate measurement mode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n(hardwareVersion must be greater than or equal to 6.0.0)\n\n/**\n *   HS2S  Exit heart rate measurement mode\n * Return parameters:\n * @param result   YES:Success  NO:Failed\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2S error instruction.\n */\n-(void)commandExitHS2SHeartRateMeasurementMode:(DisposeHS2SResult)result DiaposeErrorBlock:(DisposeHS2SErrorBlock)disposeErrorBlock;\n\n")),(0,o.kt)("h3",{id:"disconnect--device"},"Disconnect  device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n Disconnect current device\n */\n\n-(void)commandDisconnectDevice;\n\n")))}d.isMDXComponent=!0}}]);