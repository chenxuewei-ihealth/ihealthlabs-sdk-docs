"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[6836],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return v}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),v=i,p=u["".concat(l,".").concat(v)]||u[v]||g[v]||o;return t?a.createElement(p,r(r({ref:n},d),{},{components:t})):a.createElement(p,r({ref:n},d))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26178:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=["components"],c={title:"BG1S",sidebar_position:2},l=void 0,s={unversionedId:"blood_glucose/bg1s",id:"version-2.7.7/blood_glucose/bg1s",isDocsHomePage:!1,title:"BG1S",description:"WorkFlow",source:"@site/ios_versioned_docs/version-2.7.7/blood_glucose/bg1s.md",sourceDirName:"blood_glucose",slug:"/blood_glucose/bg1s",permalink:"/doc.sdk.ihealthlabs/ios/blood_glucose/bg1s",editUrl:"https://github.com/dyte-in/docs/tree/main/ios_versioned_docs/version-2.7.7/blood_glucose/bg1s.md",tags:[],version:"2.7.7",sidebarPosition:2,frontMatter:{title:"BG1S",sidebar_position:2},sidebar:"version-1.33.x/mainSidebar",previous:{title:"BG1",permalink:"/doc.sdk.ihealthlabs/ios/blood_glucose/bg1"},next:{title:"BG5",permalink:"/doc.sdk.ihealthlabs/ios/blood_glucose/bg5"}},d=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for BG1S devices",id:"2scan-for-bg1s-devices",children:[]},{value:"3.Connect to BP3L devices",id:"3connect-to-bp3l-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Get the measure mode of BG1S",id:"get-the-measure-mode-of-bg1s",children:[]},{value:"Set the measure mode of BG1S",id:"set-the-measure-mode-of-bg1s",children:[]},{value:"Get the device code of BG1S",id:"get-the-device-code-of-bg1s",children:[]},{value:"Set the device code of BG1S",id:"set-the-device-code-of-bg1s",children:[]}]}],g={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"workflow"},"WorkFlow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scan and connect BG1S blood glucose monitor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"BG1S only support online measurement."))),(0,o.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,o.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType,\n                                String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BG1S);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,o.kt)("h3",{id:"2scan-for-bg1s-devices"},"2.Scan for BG1S devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BG1S);\n")),(0,o.kt)("h3",{id:"3connect-to-bp3l-devices"},"3.Connect to BP3L devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BG1S)\n\nBp3lControl control = iHealthDevicesManager.getInstance().getBp3lControl(mDeviceMac);\n')),(0,o.kt)("h2",{id:"api-reference"},"API reference"),(0,o.kt)("h3",{id:"get-the-measure-mode-of-bg1s"},"Get the measure mode of BG1S"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Bg1sControl control = iHealthDevicesManager.getInstance().getBg1sControl(mDeviceMac);\ncontrol.getDeviceStatus();\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg1sProfile.ACTION_GET_DEVICE_INFO.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int battery = obj.getInt(Bg1sProfile.INFO_BATTERY_BG1S);\n                int bloodCode = obj.getInt(Bg1sProfile.INFO_VERSION_CODE_BLOOD_BG1S);\n                int ctlCode = obj.getInt(Bg1sProfile.INFO_VERSION_CODE_CTL_BG1S);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,o.kt)("h3",{id:"set-the-measure-mode-of-bg1s"},"Set the measure mode of BG1S"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * set the measure mode of Bg1s :\n * <ul><li>0:Blood mode</li></ul>\n * <ul><li>1:CTL mode.</li></ul> \n **/\nBg1sControl control = iHealthDevicesManager.getInstance().getBg1sControl(mDeviceMac);\ncontrol.setMeasureMode(int mode);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg1sProfile.ACTION_SET_MEASURE_MODE.equals(action)) {\n           try {\n                JSONObject obj = new JSONObject(message);\n                int status = obj.getInt(Bg1sProfile.OPERATION_STATUS);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,o.kt)("h3",{id:"get-the-device-code-of-bg1s"},"Get the device code of BG1S"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Bg1sControl control = iHealthDevicesManager.getInstance().getBg1sControl(mDeviceMac);\ncontrol.queryDeviceCode();\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg1sProfile.ACTION_CHECK_CODE.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int bloodCodeCheckResult = obj.getInt(Bg1sProfile.BLOOD_CHECK_CODE_RESULT);\n                int bloodCode = obj.getInt(Bg1sProfile.BLOOD_CODE);\n                int bloodCodeCRC = obj.getInt(Bg1sProfile.BLOOD_CODE_CRC);\n                int ctlCheckResult = obj.getInt(Bg1sProfile.CTL_CHECK_CODE_RESULT);\n                int ctlCode = obj.getInt(Bg1sProfile.CTL_CODE);\n                int ctlCodeCRC = obj.getInt(Bg1sProfile.CTL_CODE_CRC);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,o.kt)("h3",{id:"set-the-device-code-of-bg1s"},"Set the device code of BG1S"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Bg1sControl control = iHealthDevicesManager.getInstance().getBg1sControl(mDeviceMac);\ncontrol.setDeviceCode(byte[] code);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg1sProfile.ACTION_CHECK_CODE.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int status = obj.getInt(Bg1sProfile.STRIP_INSERTION_STATUS);\n                String describe = obj.getString(Bg1sProfile.OPERATION_DESCRIBE);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")))}u.isMDXComponent=!0}}]);