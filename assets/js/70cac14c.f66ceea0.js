"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5118],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=s(t),u=r,g=v["".concat(c,".").concat(u)]||v[u]||d[u]||i;return t?a.createElement(g,l(l({ref:n},p),{},{components:t})):a.createElement(g,l({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=v;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},2055:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={title:"BP5",sidebar_position:2},l=void 0,o={unversionedId:"android/blood_pressure/bp5",id:"android/blood_pressure/bp5",title:"BP5",description:"WorkFlow",source:"@site/docs/android/blood_pressure/bp5.md",sourceDirName:"android/blood_pressure",slug:"/android/blood_pressure/bp5",permalink:"/ihealthlabs-sdk-docs/docs/android/blood_pressure/bp5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/android/blood_pressure/bp5.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"BP5",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"BP3L",permalink:"/ihealthlabs-sdk-docs/docs/android/blood_pressure/bp3l"},next:{title:"BP5S",permalink:"/ihealthlabs-sdk-docs/docs/android/blood_pressure/bp5s"}},c={},s=[{value:"WorkFlow",id:"workflow",level:2},{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for BP5 devices",id:"2scan-for-bp5-devices",level:3},{value:"3.Connect to BP5 devices",id:"3connect-to-bp5-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"Get the device battery",id:"get-the-device-battery",level:3},{value:"Enable BP5 to be measured offline",id:"enable-bp5-to-be-measured-offline",level:3},{value:"Disable BP5 to be measured offline",id:"disable-bp5-to-be-measured-offline",level:3},{value:"Get the number of history data",id:"get-the-number-of-history-data",level:3},{value:"Get history data",id:"get-history-data",level:3},{value:"Start a measurement",id:"start-a-measurement",level:3},{value:"Stop measurement",id:"stop-measurement",level:3},{value:"Disconnect Bp5 device",id:"disconnect-bp5-device",level:3}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"workflow"},"WorkFlow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scan and connect BP5 blood pressure monitor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"BP5 support online measurement and offline measurement."))),(0,r.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,r.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType,\n                                String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BP5);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,r.kt)("h3",{id:"2scan-for-bp5-devices"},"2.Scan for BP5 devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BP5);\n")),(0,r.kt)("h3",{id:"3connect-to-bp5-devices"},"3.Connect to BP5 devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BP5)\n\nBp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\n')),(0,r.kt)("h2",{id:"api-reference"},"API reference"),(0,r.kt)("h3",{id:"get-the-device-battery"},"Get the device battery"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\ncontrol.getBattery();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_BATTERY_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int battery = obj.getInt(BpProfile.BATTERY_BP);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"enable-bp5-to-be-measured-offline"},"Enable BP5 to be measured offline"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\ncontrol.enableOffline();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_ENABLE_OFFLINE_BP.equals(action)) {\n            \n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"disable-bp5-to-be-measured-offline"},"Disable BP5 to be measured offline"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\ncontrol.disableOfflineMeasure();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_DISENABLE_OFFLINE_BP.equals(action)) {\n           \n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"get-the-number-of-history-data"},"Get the number of history data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\ncontrol.getOfflineNum();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_HISTORICAL_NUM_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int count = obj.getInt(BpProfile.HISTORICAL_NUM_BP);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"get-history-data"},"Get history data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\ncontrol.getOfflineData();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_HISTORICAL_NUM_BP.equals(action)) {\n            try {\n                JSONArray historyArr = new JSONArray(message);\n                for (int i = 0; i < historyArr.length(); i++) {\n                    JSONObject obj = historyArr.getJSONObject(i);\n                    String dateStr = obj.getString(BpProfile.MEASUREMENT_DATE_BP);\n                    int sys = obj.getString(BpProfile.HIGH_BLOOD_PRESSURE_BP);\n                    int dia = obj.getString(BpProfile.LOW_BLOOD_PRESSURE_BP);\n                    int pulse = obj.getString(BpProfile.PULSE_BP);\n                    int ahr = obj.getString(BpProfile.MEASUREMENT_AHR_BP);\n                    int hsd = obj.getString(BpProfile.MEASUREMENT_HSD_BP);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"start-a-measurement"},"Start a measurement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\ncontrol.startMeasure();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_ZOREING_BP.equals(action)) {\n           \n        } else if (BpProfile.ACTION_ZOREOVER_BP.equals(action)) {\n            \n        } else if (BpProfile.ACTION_ONLINE_PRESSURE_BP.equals(action)) {\n            try {\n                int pressure = obj.getInt(BpProfile.BLOOD_PRESSURE_BP);\n            } catch(JSONException e) {\n                e.printStackTrace();\n            }\n            \n        } else if (BpProfile.ACTION_ONLINE_PULSEWAVE_BP.equals(action)) {\n            try {\n               JSONObject obj = new JSONObject(message);\n               int pressure = obj.getInt(BpProfile.BLOOD_PRESSURE_BP);\n               Sting wave = obj.getString(BpProfile.PULSEWAVE_BP);\n               Boolean heartbeat = obj.getBoolean(BpProfile.FLAG_HEARTBEAT_BP);\n            } catch(JSONException e) {\n                e.printStackTrace();\n            }\n            \n        } else if (BpProfile.ACTION_ONLINE_RESULT_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int highBloodPressure = obj.getInt(BpProfile.HIGH_BLOOD_PRESSURE_BP);\n                int lowBloodPressure  = obj.getInt(BpProfile.LOW_BLOOD_PRESSURE_BP);\n                int pulse = obj.getInt(BpProfile.PULSE_BP);\n                int ahr   = obj.getBoolean(BpProfile.MEASUREMENT_AHR_BP);\n                int hsd   = obj.getBoolean(BpProfile.MEASUREMENT_HSD_BP);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } \n    } \n}\n")),(0,r.kt)("h3",{id:"stop-measurement"},"Stop measurement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\ncontrol.getDeviceInfo();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_INTERRUPTED_BP.equals(action)) {\n            \n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"disconnect-bp5-device"},"Disconnect Bp5 device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\ncontrol.disconnect();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n     @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { \n        if (iHealthDevicesManager.DEVICE_STATE_DISCONNECTED == status) {\n            Log.i("The device is disconnected");\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);