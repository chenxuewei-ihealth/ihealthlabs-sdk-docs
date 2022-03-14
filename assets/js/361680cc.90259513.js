"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[5736],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return v}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),v=a,g=u["".concat(l,".").concat(v)]||u[v]||d[v]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3275:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={title:"BP3L",sidebar_position:1},l=void 0,s={unversionedId:"blood_pressure/bp3l",id:"version-2.9.9/blood_pressure/bp3l",isDocsHomePage:!1,title:"BP3L",description:"WorkFlow",source:"@site/android_versioned_docs/version-2.9.9/blood_pressure/bp3l.md",sourceDirName:"blood_pressure",slug:"/blood_pressure/bp3l",permalink:"/ihealthlabs-sdk-docs/android/blood_pressure/bp3l",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/android_versioned_docs/version-2.9.9/blood_pressure/bp3l.md",tags:[],version:"2.9.9",sidebarPosition:1,frontMatter:{title:"BP3L",sidebar_position:1},sidebar:"version-2.9.9/mainSidebar",previous:{title:"Get started",permalink:"/ihealthlabs-sdk-docs/android/quickstart"},next:{title:"BP5",permalink:"/ihealthlabs-sdk-docs/android/blood_pressure/bp5"}},p=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"2.Scan for BP3L devices",id:"2scan-for-bp3l-devices",children:[]},{value:"3.Connect to BP3L devices",id:"3connect-to-bp3l-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Get the device battery",id:"get-the-device-battery",children:[]},{value:"Start a measurement",id:"start-a-measurement",children:[]},{value:"Stop measurement",id:"stop-measurement",children:[]}]}],d={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"workflow"},"WorkFlow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scan and connect BP3L blood pressure monitor.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"BP3L only support online measurement."))),(0,i.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,i.kt)("h4",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType,\n                                String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BP3L);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,i.kt)("h3",{id:"2scan-for-bp3l-devices"},"2.Scan for BP3L devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BP3L);\n")),(0,i.kt)("h3",{id:"3connect-to-bp3l-devices"},"3.Connect to BP3L devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BP3L)\n\nBp3lControl control = iHealthDevicesManager.getInstance().getBp3lControl(mDeviceMac);\n')),(0,i.kt)("h2",{id:"api-reference"},"API reference"),(0,i.kt)("h3",{id:"get-the-device-battery"},"Get the device battery"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp3lControl control = iHealthDevicesManager.getInstance().getBp3lControl(mDeviceMac);\ncontrol.getBattery();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_BATTERY_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int battery = obj.getInt(BpProfile.BATTERY_BP);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"start-a-measurement"},"Start a measurement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp3lControl control = iHealthDevicesManager.getInstance().getBp3lControl(mDeviceMac);\ncontrol.startMeasure();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_ZOREING_BP.equals(action)) {\n           \n        } else if (BpProfile.ACTION_ZOREOVER_BP.equals(action)) {\n            \n        } else if (BpProfile.ACTION_ONLINE_PRESSURE_BP.equals(action)) {\n            try {\n                int pressure = obj.getInt(BpProfile.BLOOD_PRESSURE_BP);\n            } catch(JSONException e) {\n                e.printStackTrace();\n            }\n            \n        } else if (BpProfile.ACTION_ONLINE_PULSEWAVE_BP.equals(action)) {\n            try {\n               JSONObject obj = new JSONObject(message);\n               int pressure = obj.getInt(BpProfile.BLOOD_PRESSURE_BP);\n               Sting wave = obj.getString(BpProfile.PULSEWAVE_BP);\n               Boolean heartbeat = obj.getBoolean(BpProfile.FLAG_HEARTBEAT_BP);\n            } catch(JSONException e) {\n                e.printStackTrace();\n            }\n            \n        } else if (BpProfile.ACTION_ONLINE_RESULT_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int highBloodPressure = obj.getInt(BpProfile.HIGH_BLOOD_PRESSURE_BP);\n                int lowBloodPressure  = obj.getInt(BpProfile.LOW_BLOOD_PRESSURE_BP);\n                int pulse = obj.getInt(BpProfile.PULSE_BP);\n                int ahr   = obj.getBoolean(BpProfile.MEASUREMENT_AHR_BP);\n                int hsd   = obj.getBoolean(BpProfile.MEASUREMENT_HSD_BP);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } \n    } \n}\n")),(0,i.kt)("h3",{id:"stop-measurement"},"Stop measurement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp3lControl control = iHealthDevicesManager.getInstance().getBp3lControl(mDeviceMac);\ncontrol.getDeviceInfo();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_INTERRUPTED_BP.equals(action)) {\n            \n        }\n    } \n}\n")))}u.isMDXComponent=!0}}]);