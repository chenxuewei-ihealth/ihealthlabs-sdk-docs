"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[1322],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(t),p=i,m=u["".concat(l,".").concat(p)]||u[p]||v[p]||r;return t?a.createElement(m,c(c({ref:n},d),{},{components:t})):a.createElement(m,c({ref:n},d))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,c=new Array(r);c[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<r;s++)c[s]=t[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},23638:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),c=["components"],o={title:"HS5",sidebar_position:5},l=void 0,s={unversionedId:"scale/hs5",id:"version-2.9.9/scale/hs5",isDocsHomePage:!1,title:"HS5",description:"WorkFlow",source:"@site/android_versioned_docs/version-2.9.9/scale/hs5.md",sourceDirName:"scale",slug:"/scale/hs5",permalink:"/doc.sdk.ihealthlabs/android/scale/hs5",editUrl:"https://github.com/dyte-in/docs/tree/main/android_versioned_docs/version-2.9.9/scale/hs5.md",tags:[],version:"2.9.9",sidebarPosition:5,frontMatter:{title:"HS5",sidebar_position:5},sidebar:"version-2.9.9/mainSidebar",previous:{title:"HS4S",permalink:"/doc.sdk.ihealthlabs/android/scale/hs4s"},next:{title:"HS5S",permalink:"/doc.sdk.ihealthlabs/android/scale/hs5s"}},d=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for HS5(Bluetooth) devices",id:"2scan-for-hs5bluetooth-devices",children:[]},{value:"3.Connect to HS5(Bluetooth) devices",id:"3connect-to-hs5bluetooth-devices",children:[]},{value:"4.Scan for HS5(WIFI) devices",id:"4scan-for-hs5wifi-devices",children:[]},{value:"5.Connect to HS5(WIFI) devices",id:"5connect-to-hs5wifi-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Set the wifi information to the scale(Bluetooth)",id:"set-the-wifi-information-to-the-scalebluetooth",children:[]},{value:"Create user management(WIFI)",id:"create-user-managementwifi",children:[]},{value:"Disconnect the HS4S",id:"disconnect-the-hs4s",children:[]}]}],v={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"workflow"},"WorkFlow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The HS5 is Wifi body fat scale. If you've already set up wifi information, please jump to step 2. If you need to set wifi information, please scan and connect HS5(Bluetooth) scale.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Call funtion "setWifi" for setting wifi information to HS5(Bluetooth) scale.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"HS5 support online measurement and offline measurement."))),(0,r.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,r.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType,\n                                String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_HS5, iHealthDevicesManager.TYPE_HS5_BT);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,r.kt)("h3",{id:"2scan-for-hs5bluetooth-devices"},"2.Scan for HS5(Bluetooth) devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.TYPE_HS5_BT);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Return\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { \n        Log.i(TAG, "onScanDevice - mac:" + mac + " - deviceType:" + deviceType + " - rssi:" + rssi + " - manufactorData:" + manufactorData);\n    }\n}\n')),(0,r.kt)("h3",{id:"3connect-to-hs5bluetooth-devices"},"3.Connect to HS5(Bluetooth) devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_HS5_BT)\nHs4sControl control = iHealthDevicesManager.getInstance().getHs4sControl(mDeviceMac);\n')),(0,r.kt)("h3",{id:"4scan-for-hs5wifi-devices"},"4.Scan for HS5(WIFI) devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.TYPE_HS5_BT);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Return\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { \n        Log.i(TAG, "onScanDevice - mac:" + mac + " - deviceType:" + deviceType + " - rssi:" + rssi + " - manufactorData:" + manufactorData);\n    }\n}\n')),(0,r.kt)("h3",{id:"5connect-to-hs5wifi-devices"},"5.Connect to HS5(WIFI) devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_HS5)\nHs4sControl control = iHealthDevicesManager.getInstance().getHs4sControl(mDeviceMac);\n')),(0,r.kt)("h2",{id:"api-reference"},"API reference"),(0,r.kt)("h3",{id:"set-the-wifi-information-to-the-scalebluetooth"},"Set the wifi information to the scale(Bluetooth)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs5ControlForBt control = iHealthDevicesManager.getInstance().getHs5ControlForBt(mDeviceMac);\ncontrol.setWifi(String ssid, int type, String pw)() \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (HsProfile.ACTION_SETTINGWIFI.equals(action)) {\n            Log.i("", "setting wifi");\n        } else if (HsProfile.ACTION_SETWIFI_SUCCESS.equals(action) {\n            Log.i("", "set wifi success");\n        } else if (HsProfile.ACTION_SETWIFI_FAIL.equals(action) {\n            Log.i("", "set wifi fail");\n        } else if (HsProfile.ACTION_SETWIFI_UNKNOW.equals(action) {\n            Log.i("", "set wifi unknow");\n        }\n    } \n}\n')),(0,r.kt)("h3",{id:"create-user-managementwifi"},"Create user management(WIFI)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs5Control control = iHealthDevicesManager.getInstance().getHs5Control(mDeviceMac);\n/*\n * @param userId user identify number, The range: 1 ~ 2147483647(0x7FFFFFFF)\n */\ncontrol.createManagement(int userId)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (HsProfile.ACTION_LIVEDATA_HS.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                String weight = obj.getString(HsProfile.DATA_LIVEDATA_HSWEIGHT);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } else if (HsProfile.ACTION_ONLINE_RESULT_HS.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                String weight = obj.getString(HsProfile.WEIGHT_HS);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } \n    }\n}\n")),(0,r.kt)("h3",{id:"disconnect-the-hs4s"},"Disconnect the HS4S"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs4sControl control = iHealthDevicesManager.getInstance().getHs4Control(mDeviceMac);\ncontrol.disconnect();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n     @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { \n        \n    }\n}\n")))}u.isMDXComponent=!0}}]);