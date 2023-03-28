"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1232],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||n;return r?a.createElement(b,l(l({ref:t},u),{},{components:r})):a.createElement(b,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));const n={title:"BP5",sidebar_position:2},l=void 0,s={unversionedId:"ios/blood_pressure/bp5",id:"ios/blood_pressure/bp5",title:"BP5",description:"WorkFlow",source:"@site/docs/ios/blood_pressure/bp5.md",sourceDirName:"ios/blood_pressure",slug:"/ios/blood_pressure/bp5",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_pressure/bp5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios/blood_pressure/bp5.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"BP5",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"BP3L",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_pressure/bp3l"},next:{title:"BP5S",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_pressure/bp5s"}},i={},c=[{value:"WorkFlow",id:"workflow",level:2},{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for BP5 devices",id:"2scan-for-bp5-devices",level:3},{value:"3.Connect to BP5 devices",id:"3connect-to-bp5-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"Get the device battery",id:"get-the-device-battery",level:3},{value:"Enable or Disable  BP5 to be measured offline",id:"enable-or-disable--bp5-to-be-measured-offline",level:3},{value:"Get the number of history data",id:"get-the-number-of-history-data",level:3},{value:"Get history data",id:"get-history-data",level:3},{value:"Start a measurement",id:"start-a-measurement",level:3},{value:"Stop measurement",id:"stop-measurement",level:3}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"workflow"},"WorkFlow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scan and connect BP5 blood pressure monitor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"BP5 support online measurement and offline measurement."))),(0,o.kt)("p",null,"If you use these devices, please contact us before submitting the Apple Store. We will generate a ppid based on the information you provided to help your app pass the review."),(0,o.kt)("p",null,"If you're using BP5, you need to add protocol:com.jiuan.BPV20\u3001com.jiuan.BPV23\u2028"),(0,o.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,o.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:BP5ConnectNoti object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:BP5DisConnectNoti object:nil];\n\n[BP5Controller shareBP5Controller];\n")),(0,o.kt)("h3",{id:"2scan-for-bp5-devices"},"2.Scan for BP5 devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"BP5 is a classic bluetooth device, you need to manually pair and connect in the bluetooth of the iOS device, no need to call the scan command\n")),(0,o.kt)("h3",{id:"3connect-to-bp5-devices"},"3.Connect to BP5 devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"BP5 is a classic bluetooth device, you need to manually pair and connect in the bluetooth of the iOS device, no need to call the connect command\n")),(0,o.kt)("h2",{id:"api-reference"},"API reference"),(0,o.kt)("h3",{id:"get-the-device-battery"},"Get the device battery"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Query battery remaining energy\n * @param energyValue  A block to return the device battery remaining energy percentage, \u201880\u2019 stands for 80%.\n * @param error  A block to return the error in \u2018Establish measurement connection\u2019\n */\n-(void)commandEnergy:(BlockEnergyValue)energyValue errorBlock:(BlockError)error;\n")),(0,o.kt)("h3",{id:"enable-or-disable--bp5-to-be-measured-offline"},"Enable or Disable  BP5 to be measured offline"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * set up offline detection\n * @param open  True means on; False means off.\n * @param successBlock  A block to refer \u2018set success\u2019.\n * @param errorBlock  A block to refer \u2018set failed\u2019.\n */\n-(void)commandSetOffline:(BOOL)open success:(BlockSuccess)successBlock error:(BlockError)errorBlock;\n")),(0,o.kt)("h3",{id:"get-the-number-of-history-data"},"Get the number of history data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Upload offline data total Count.\n * @param  totalCount item quantity of total data.\n * @param error  A block to return the error.\n */\n-(void)commandTransferMemoryTotalCount:(BlockBachCount)totalCount errorBlock:(BlockError)error;\n")),(0,o.kt)("h3",{id:"get-history-data"},"Get history data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Upload offline data.\n *  @Notice   By the first time of new user register via SDK, \u2018iHealth disclaimer\u2019 will pop up automatically, and require the user agrees to continue. SDK application requires Internet connection; there is 10-day tryout if SDK cannot connect Internet, SDK is fully functional during tryout period, but will be terminated without verification through Internet after 10 days.\n * @param  totalCount item quantity of total data\n * @param  progress upload completion ratio , from 0.0 to 1.0 or 0%~100\uff05, 100% means upload completed.\n * @param  uploadDataArray    offline data set, including measurement time, systolic pressure, diastolic pressure, pulse rate, irregular judgment,scheme ID,body movement flag. corresponding KEYs are time, sys, dia, heartRate, irregular,schemeID,bodyMovementFlg.\n * @param  error  A block to return the error.\n */\n-(void)commandTransferMemoryDataWithTotalCount:(BlockBachCount)totalCount progress:(BlockBachProgress)progress dataArray:(BlockBachArray)uploadDataArray errorBlock:(BlockError)error;\n")),(0,o.kt)("h3",{id:"start-a-measurement"},"Start a measurement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Establish measurement connection and start BP measurement\uff08Only for BP5\uff09.\n * @param blockZeroState Zeroing state\n * @param pressure  Pressure value in the process of measurement, the unit is \u2018mmHg\u2019.\n * @param blockWaveletWithHeartbeat   Wavelet data set with heart beat.\n * @param blockWaveletWithoutHeartbeat   Wavelet data set without heart beat.\n * @param result   result of the measurement, including systolic pressure, diastolic pressure, pulse rate and irregular judgment. Relevant key: time, sys, dia, heartRate, irregular. irregular will be 0 or 1.\n * @param error   Return error codes.\n */\n\n-(void)commandStartMeasureWithZeroingState:(BlockZero)blockZeroState pressure:(BlockPressure)pressure waveletWithHeartbeat:(BlockWavelet)blockWaveletWithHeartbeat waveletWithoutHeartbeat:(BlockWavelet)blockWaveletWithoutHeartbeat result:(BlockMeasureResult)result errorBlock:(BlockError)error;\n")),(0,o.kt)("h3",{id:"stop-measurement"},"Stop measurement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Measurement termination and stop BP measurement\n * @param success  The block return means measurement has been terminated.\n * @param error  A block to return the error in \u2018Establish measurement connection\u2019 in BP.\n */\n-(void)stopBPMeassureSuccessBlock:(BlockSuccess)success errorBlock:(BlockError)error;\n\n")))}d.isMDXComponent=!0}}]);