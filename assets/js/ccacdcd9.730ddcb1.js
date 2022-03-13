"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[3044],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return v}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),v=r,g=u["".concat(l,".").concat(v)]||u[v]||d[v]||i;return t?a.createElement(g,c(c({ref:n},p),{},{components:t})):a.createElement(g,c({ref:n},p))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},29509:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),c=["components"],o={title:"KN926",sidebar_position:8},l=void 0,s={unversionedId:"blood_pressure/kd926",id:"version-2.9.9/blood_pressure/kd926",isDocsHomePage:!1,title:"KN926",description:"WorkFlow",source:"@site/android_versioned_docs/version-2.9.9/blood_pressure/kd926.md",sourceDirName:"blood_pressure",slug:"/blood_pressure/kd926",permalink:"/android/blood_pressure/kd926",editUrl:"https://github.com/dyte-in/docs/tree/main/android_versioned_docs/version-2.9.9/blood_pressure/kd926.md",tags:[],version:"2.9.9",sidebarPosition:8,frontMatter:{title:"KN926",sidebar_position:8},sidebar:"version-2.9.9/mainSidebar",previous:{title:"KD723",permalink:"/android/blood_pressure/kd723"},next:{title:"HS2",permalink:"/android/scale/hs2"}},p=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for KD926 devices",id:"2scan-for-kd926-devices",children:[]},{value:"3.Connect to KD926 devices",id:"3connect-to-kd926-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Get the device battery",id:"get-the-device-battery",children:[]},{value:"Set local time to KD926",id:"set-local-time-to-kd926",children:[]},{value:"Get the feature of Continua KD926",id:"get-the-feature-of-continua-kd926",children:[]},{value:"Set Current user",id:"set-current-user",children:[]},{value:"Get history data",id:"get-history-data",children:[]},{value:"Disconnect KD926 device",id:"disconnect-kd926-device",children:[]}]}],d={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"workflow"},"WorkFlow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scan and connect KD926 scale.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"KD926 only support offline measurement."))),(0,i.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,i.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType,\n                                String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_KD926);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,i.kt)("h3",{id:"2scan-for-kd926-devices"},"2.Scan for KD926 devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.KD926);\n")),(0,i.kt)("h3",{id:"3connect-to-kd926-devices"},"3.Connect to KD926 devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_KD926)\n\nBp926Control control = iHealthDevicesManager.getInstance().getBp926Control(mDeviceMac);\n')),(0,i.kt)("h2",{id:"api-reference"},"API reference"),(0,i.kt)("h3",{id:"get-the-device-battery"},"Get the device battery"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp926Control control = iHealthDevicesManager.getInstance().getBp926Control(mDeviceMac);\ncontrol.getBattery();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_BATTERY_CBP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int battery = obj.getInt(BpProfile.BATTERY_CBP);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"set-local-time-to-kd926"},"Set local time to KD926"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp926Control control = iHealthDevicesManager.getInstance().getBp926Control(mDeviceMac);\ncontrol.setTime();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_SET_TIME_CBP.equals(action)) {\n            \n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"get-the-feature-of-continua-kd926"},"Get the feature of Continua KD926"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp926Control control = iHealthDevicesManager.getInstance().getBp926Control(mDeviceMac);\ncontrol.getFeature();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_FEATURE_CBP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int bodyMovement   = obj.getInt(BpProfile.FEATURE_BODY_MOVEMENT_CBP);\n                int fitDetection   = obj.getInt(BpProfile.FEATURE_FIT_DETECTION_CBP);\n                int irregularPulse = obj.getInt(BpProfile.FEATURE_IRREGULAR_PULSE_DETECTION_CBP);\n                int pulseRate      = obj.getInt(BpProfile.FEATURE_PULSE_RATE_RANGE_DETECTION_CBP);\n                int measurementPosition = obj.getInt(BpProfile.FEATURE_MEASUREMENT_POSITION_DETECTION_CBP);\n                int multipleBond   = obj.getInt(BpProfile.FEATURE_MULTIPLE_BOND_CBP);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"set-current-user"},"Set Current user"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp926Control control = iHealthDevicesManager.getInstance().getBp926Control(mDeviceMac);\ncontrol.commandSetUser(int UserID);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_CONFORM_CHOOSE_USER_CBP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int currentUserId = obj.getInt(BpProfile.CHOOSE_USER_CBP);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"get-history-data"},"Get history data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp926Control control = iHealthDevicesManager.getInstance().getBp926Control(mDeviceMac);\ncontrol.getData();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_HISTORY_DATA_CBP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int measureFlag = obj.getInt(BpProfile.CBPINFO_UNIT);\n                int timestampFlag = obj.getInt(BpProfile.CBPINFO_TIMESTAMP_FLAG);            \n                int pulseRateFlag = obj.getInt(BpProfile.CBPINFO_PULSE_RATE_FLAG);\n                int userIDFlag = obj.getInt(BpProfile.CBPINFO_USER_ID_FLAG);\n                int measureStatusFlag = obj.getInt(BpProfile.CBPINFO_MEASURE_STATUS_FLAG);\n                int hsdFlag = obj.getInt(BpProfile.CBPINFO_HSD_FLAG);\n                int sys = obj.getInt(BpProfile.CBPINFO_SYS);\n                int dia = obj.getInt(BpProfile.CBPINFO_DIA);\n                int map = obj.getInt(BpProfile.CBPINFO_MAP);\n                int measureTime = obj.getInt(BpProfile.CBPINFO_TIMESTAMP);\n                int pulseRate = obj.getInt(BpProfile.CBPINFO_PULSE_RATE);\n              \n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"disconnect-kd926-device"},"Disconnect KD926 device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp926Control control = iHealthDevicesManager.getInstance().getBp926Control(mDeviceMac);\ncontrol.disconnect();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { \n        \n    }\n}\n")))}u.isMDXComponent=!0}}]);