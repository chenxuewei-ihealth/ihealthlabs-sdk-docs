"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[666],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),p=r,g=d["".concat(l,".").concat(p)]||d[p]||v[p]||i;return t?a.createElement(g,c(c({ref:n},u),{},{components:t})):a.createElement(g,c({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},592:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return v}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),c=["components"],o={title:"ECG3USB",sidebar_position:2},l=void 0,s={unversionedId:"android/ecg/ecgusb",id:"android/ecg/ecgusb",title:"ECG3USB",description:"WorkFlow",source:"@site/docs/android/ecg/ecgusb.md",sourceDirName:"android/ecg",slug:"/android/ecg/ecgusb",permalink:"/ihealthlabs-sdk-docs/docs/android/ecg/ecgusb",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/android/ecg/ecgusb.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"ECG3USB",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"ECG3",permalink:"/ihealthlabs-sdk-docs/docs/android/ecg/"},next:{title:"Get started",permalink:"/ihealthlabs-sdk-docs/docs/ios/quickstart"}},u={},v=[{value:"WorkFlow",id:"workflow",level:2},{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for ECG3 devices",id:"2scan-for-ecg3-devices",level:3},{value:"3.Connect to ECG3 devices",id:"3connect-to-ecg3-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"Get the battery info",id:"get-the-battery-info",level:3},{value:"Set time to ECG3",id:"set-time-to-ecg3",level:3},{value:"Start online measurement",id:"start-online-measurement",level:3},{value:"Disconnect the ECG3",id:"disconnect-the-ecg3",level:3}],d={toc:v};function p(e){var n=e.components,t=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"workflow"},"WorkFlow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scan and connect ECG3 scale.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"ECG3 support online measurement."))),(0,i.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,i.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType,\n                                String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_ECG3);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,i.kt)("h3",{id:"2scan-for-ecg3-devices"},"2.Scan for ECG3 devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.ECG3);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { \n        Log.i(TAG, "onScanDevice - mac:" + mac + " - deviceType:" + deviceType + " - rssi:" + rssi + " - manufactorData:" + manufactorData);\n    }\n}\n')),(0,i.kt)("h3",{id:"3connect-to-ecg3-devices"},"3.Connect to ECG3 devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_ECG3)\n\nECG3Control control = iHealthDevicesManager.getInstance().getECG3Control(mDeviceMac);\n')),(0,i.kt)("h2",{id:"api-reference"},"API reference"),(0,i.kt)("h3",{id:"get-the-battery-info"},"Get the battery info"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ECG3Control control = iHealthDevicesManager.getInstance().getECG3Control(mDeviceMac);\ncontrol.getBattery();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (ECG3Profile.ACTION_GET_BATTERY.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int battery = obj.getInt(HsProfile.BATTERY_HS);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"set-time-to-ecg3"},"Set time to ECG3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ECG3Control control = iHealthDevicesManager.getInstance().getECG3Control(mDeviceMac);\ncontrol.getBattery();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (ECG3Profile.ACTION_SET_TIME.equals(action)) {\n            Log.i("set time success")\n        }\n    } \n}\n')),(0,i.kt)("h3",{id:"start-online-measurement"},"Start online measurement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ECG3Control control = iHealthDevicesManager.getInstance().getECG3Control(mDeviceMac);\ncontrol.startMeasure() \n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (ECG3Profile.ACTION_START_ONLINE_MEASUREMENT.equals(action)) {\n            Log.i("start a measurement");\n\n        } else if (ECG3Profile.ACTION_SYNC_ONLINE_DATA.equals(action)) {\n            try {\n                int heartRate = obj.getInt(ECG3Profile.ONLINE_HR);\n                JSONArray arr = new JSONArray(obj.getJSONArray(ECG3Profile.ONLINE_DATA));\n                for (int i = 0; i < arr.length(); i++) {\n                    Float value = arr.getInt(i);\n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }       \n        } else if (ECG3Profile.ACTION_STOP_ONLINE_MEASUREMENT.equals(action)) {\n            Log.i("stop a measurement");\n            \n        }\n    } \n}\n')),(0,i.kt)("h3",{id:"disconnect-the-ecg3"},"Disconnect the ECG3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ECG3Control control = iHealthDevicesManager.getInstance().getECG3Control(mDeviceMac);\ncontrol.disconnect();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n     @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { \n        if (iHealthDevicesManager.DEVICE_STATE_DISCONNECTED == status) {\n            Log.i("The device is disconnected");\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);