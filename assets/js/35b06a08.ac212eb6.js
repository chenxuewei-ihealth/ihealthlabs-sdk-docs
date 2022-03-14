"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[3443],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=s(n),p=i,u=g["".concat(l,".").concat(p)]||g[p]||v[p]||r;return n?a.createElement(u,c(c({ref:t},d),{},{components:n})):a.createElement(u,c({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3561:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),c=["components"],o={title:"AM5",sidebar_position:4},l=void 0,s={unversionedId:"tracker/am5",id:"version-2.9.9/tracker/am5",isDocsHomePage:!1,title:"AM5",description:"1.Listen to device notify",source:"@site/android_versioned_docs/version-2.9.9/tracker/am5.md",sourceDirName:"tracker",slug:"/tracker/am5",permalink:"/ihealthlabs-sdk-docs/android/tracker/am5",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/android_versioned_docs/version-2.9.9/tracker/am5.md",tags:[],version:"2.9.9",sidebarPosition:4,frontMatter:{title:"AM5",sidebar_position:4},sidebar:"version-2.9.9/mainSidebar",previous:{title:"AM4",permalink:"/ihealthlabs-sdk-docs/android/tracker/am4"},next:{title:"ECG3",permalink:"/ihealthlabs-sdk-docs/android/ecg/ecg"}},d=[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for AM5 devices",id:"2scan-for-am5-devices",children:[]},{value:"3.Connect to AM5 devices",id:"3connect-to-am5-devices",children:[]},{value:"API reference",id:"api-reference",children:[{value:"Binding apps and devices",id:"binding-apps-and-devices",children:[]},{value:"UnBind apps and devices",id:"unbind-apps-and-devices",children:[]},{value:"Get user id",id:"get-user-id",children:[]},{value:"Gets whether it has been bound",id:"gets-whether-it-has-been-bound",children:[]},{value:"Get information of the device",id:"get-information-of-the-device",children:[]},{value:"Get the time on the phone and set it to the device",id:"get-the-time-on-the-phone-and-set-it-to-the-device",children:[]},{value:"Get the live data of the device",id:"get-the-live-data-of-the-device",children:[]},{value:"Sync health data from device",id:"sync-health-data-from-device",children:[]}]}],v={toc:d};function g(e){var t=e.components,n=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int callbackId = iHealthDevicesManager.getInstance().registerClientCallback(new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n});\n\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(mClientCallbackId, iHealthDevicesManager.TYPE_AM5);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(int clientCallbackId, String... macs)\n")),(0,r.kt)("h3",{id:"2scan-for-am5-devices"},"2.Scan for AM5 devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.AM5);\n")),(0,r.kt)("h3",{id:"3connect-to-am5-devices"},"3.Connect to AM5 devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_AM5)\n\nAm5Control control = iHealthDevicesManager.getInstance().getAm5Control(mDeviceMac);\n')),(0,r.kt)("h2",{id:"api-reference"},"API reference"),(0,r.kt)("h3",{id:"binding-apps-and-devices"},"Binding apps and devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Am5Control control = iHealthDevicesManager.getInstance().getAm5Control(mDeviceMac);\ncontrol.bindDevice();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (OtherDeviceProfile.ACTION_USER_BIND.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                //status - 3: success 4: fail\n                int status = obj.getInt(PoProfile.STATUS_SUCCESS);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"unbind-apps-and-devices"},"UnBind apps and devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Am5Control control = iHealthDevicesManager.getInstance().getAm5Control(mDeviceMac);\ncontrol.unBindDevice();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (OtherDeviceProfile.ACTION_USER_UNBIND.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                //status - 3: success 4: fail\n                int status = obj.getInt(PoProfile.STATUS_SUCCESS);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"get-user-id"},"Get user id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\ncontrol.getBattery();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (PoProfile.ACTION_BATTERY_PO.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int battery = obj.getInt(PoProfile.BATTERY_PO);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"gets-whether-it-has-been-bound"},"Gets whether it has been bound"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Am5Control control = iHealthDevicesManager.getInstance().getAm5Control(mDeviceMac);\nboolean isBind = control.isBind();\n")),(0,r.kt)("h3",{id:"get-information-of-the-device"},"Get information of the device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Am5Control control = iHealthDevicesManager.getInstance().getAm5Control(mDeviceMac);\ncontrol.getBasicInfo();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (OtherDeviceProfile.ACTION_BASIC_INFO.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int battery = obj.getInt(OtherDeviceProfile.BASIC_BATTSTATUS);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"get-the-time-on-the-phone-and-set-it-to-the-device"},"Get the time on the phone and set it to the device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Am5Control control = iHealthDevicesManager.getInstance().getAm5Control(mDeviceMac);\ncontrol.getLiveData();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (OtherDeviceProfile.ACTION_SET_TIME.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                boolean result = obj.getBoolean("result");\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n')),(0,r.kt)("h3",{id:"get-the-live-data-of-the-device"},"Get the live data of the device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Am5Control control = iHealthDevicesManager.getInstance().getAm5Control(mDeviceMac);\ncontrol.getLiveData();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (OtherDeviceProfile.ACTION_LIVE_DATA.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int step = obj.getInt("totalStep");\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n')),(0,r.kt)("h3",{id:"sync-health-data-from-device"},"Sync health data from device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Am5Control control = iHealthDevicesManager.getInstance().getAm5Control(mDeviceMac);\ncontrol.syncHealthData();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (OtherDeviceProfile.ACTION_SYNC_HEALTH_DATA.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                // 0: start, 1: stop, 2: doing, 3: success, 4: fail\n                int status = obj.getInt(OtherDeviceProfile.OPERATION_STATUS);\n                if (2 == status || 3 == status || 4 == status) {\n                    int progress = obj.getInt(OtherDeviceProfile.PROGRESS);\n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } else if (OtherDeviceProfile.ACTION_SYNC_HEALTH_DATA_SPORT.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                JSONArray arr = obj.getJSONArray("items");\n                int year  = obj.getInt("year");\n                Int month = obj.getInt("month");\n                int day   = obj.getInt("day");\n                for (int i = 0; i < arr.length(); i++) {\n                    int step = arr.getJSONObject(i).getInt("stepCount");\n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } else if (OtherDeviceProfile.ACTION_SYNC_HEALTH_DATA_SLEEP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                JSONArray arr = obj.getJSONArray("items");\n                int year  = obj.getInt("year");\n                Int month = obj.getInt("month");\n                int day   = obj.getInt("day");\n                int sleepEndedTimeHour = obj.getInt("sleepEndedTimeH");\n                int sleepEndedTimeMinute = obj.getInt("sleepEndedTimeM");\n                int lightSleepMinutes = obj.getInt("lightSleepMinutes");\n                int totalSleepMinutes = obj.getInt("totalSleepMinutes");\n                for (int i = 0; i < arr.length(); i++) {\n                    int durationMinute = arr.getJSONObject(i).getInt("offsetMinute");\n                    int sleepStatus = arr.getJSONObject(i).getInt("sleepStatus");\n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } else if (OtherDeviceProfile.ACTION_SYNC_HEALTH_DATA_HEART_RATE.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                JSONArray arr = obj.getJSONArray("items");\n                int offsetMinute = obj.getInt("offsetMinute");\n                int year  = obj.getInt("year");\n                Int month = obj.getInt("month");\n                int day   = obj.getInt("day");\n                for (int i = 0; i < arr.length(); i++) {\n                    int offsetMinute = arr.getJSONObject(i).getInt("offsetMinute");\n                    int heartRaveValue = arr.getJSONObject(i).getInt("HeartRaveValue");\n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n')))}g.isMDXComponent=!0}}]);