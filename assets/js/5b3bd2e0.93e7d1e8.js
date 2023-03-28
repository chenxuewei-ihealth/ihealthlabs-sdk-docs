"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),v=s(n),d=i,A=v["".concat(c,".").concat(d)]||v[d]||g[d]||r;return n?a.createElement(A,l(l({ref:t},m),{},{components:n})):a.createElement(A,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=v;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},2671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={title:"AM3",sidebar_position:1},l=void 0,o={unversionedId:"android/tracker/am3",id:"android/tracker/am3",title:"AM3",description:"Connection workflow",source:"@site/docs/android/tracker/am3.md",sourceDirName:"android/tracker",slug:"/android/tracker/am3",permalink:"/ihealthlabs-sdk-docs/docs/android/tracker/am3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/android/tracker/am3.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"AM3",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"PT3SBT",permalink:"/ihealthlabs-sdk-docs/docs/android/thermometer/pt3sbt"},next:{title:"AM3S",permalink:"/ihealthlabs-sdk-docs/docs/android/tracker/am3s"}},c={},s=[{value:"Connection workflow",id:"connection-workflow",level:2},{value:"1.Add device notify listener",id:"1add-device-notify-listener",level:3},{value:"2.Scan for AM3 device",id:"2scan-for-am3-device",level:3},{value:"3.Connect to AM3 device",id:"3connect-to-am3-device",level:3},{value:"Measurement workflow",id:"measurement-workflow",level:2},{value:"API reference",id:"api-reference",level:2},{value:"Get AM device&#39;s IDPS information",id:"get-am-devices-idps-information",level:3},{value:"Reset the device",id:"reset-the-device",level:3},{value:"Get user id",id:"get-user-id",level:3},{value:"Get alarms&#39; count",id:"get-alarms-count",level:3},{value:"Get alarm information by id",id:"get-alarm-information-by-id",level:3},{value:"Set/Unset alarm",id:"setunset-alarm",level:3},{value:"Delete alarm by id",id:"delete-alarm-by-id",level:3},{value:"Get activity remind setting",id:"get-activity-remind-setting",level:3},{value:"Set/Unset activity remind",id:"setunset-activity-remind",level:3},{value:"Get device state and battery information",id:"get-device-state-and-battery-information",level:3},{value:"Set user ID",id:"set-user-id",level:3},{value:"Get user information",id:"get-user-information",level:3},{value:"Set user&#39;s BMR",id:"set-users-bmr",level:3},{value:"Get the activity data",id:"get-the-activity-data",level:3},{value:"Get current time activity data",id:"get-current-time-activity-data",level:3},{value:"Get sleep data",id:"get-sleep-data",level:3},{value:"Set the system time to AM device",id:"set-the-system-time-to-am-device",level:3},{value:"Set hour mode",id:"set-hour-mode",level:3},{value:"Get hour mode",id:"get-hour-mode",level:3}],m={toc:s};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"connection-workflow"},"Connection workflow"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"am3 connection",src:n(9632).Z,width:"322",height:"304"})),(0,i.kt)("h3",{id:"1add-device-notify-listener"},"1.Add device notify listener"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int callbackId = iHealthDevicesManager.getInstance().registerClientCallback(new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) {\n\n    }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) {\n\n    }\n\n    @Override\n    public void onScanError(String reason, long latency) {\n        \n    }\n\n    @Override\n    public void onScanFinish() {\n       \n    }\n});\n\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(mClientCallbackId, iHealthDevicesManager.TYPE_AM3);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(int clientCallbackId, String... macs)\n")),(0,i.kt)("h3",{id:"2scan-for-am3-device"},"2.Scan for AM3 device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.AM3);\n")),(0,i.kt)("h3",{id:"3connect-to-am3-device"},"3.Connect to AM3 device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_AM3)\n\nAm3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\n')),(0,i.kt)("h2",{id:"measurement-workflow"},"Measurement workflow"),(0,i.kt)("h2",{id:"api-reference"},"API reference"),(0,i.kt)("h3",{id:"get-am-devices-idps-information"},"Get AM device's IDPS information"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\n/**\n * Return Value: {"protocolstring":"com.jiuan.AMV12","accessoryname":"AM4","firmwareversion":"1.3.8",*"hardwareversion":"1.0.0","manufacture":"iHealth","serialnumber":"004D32079148","modenumber":"AM4 11070"}\n */\nString IDPSMessage = control.getIdps();\n')),(0,i.kt)("h3",{id:"reset-the-device"},"Reset the device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\n/**\n * @param id User's ID\n */\ncontrol.reset(long id);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_RESET_AM.equals(action)) {\n            int confirm = obj.getInt(AmProfile.ACTION_RESET_AM);\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"get-user-id"},"Get user id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\ncontrol.getBattery();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_USERID_AM.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int userId = obj.getInt(AmProfile.USERID_AM);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"get-alarms-count"},"Get alarms' count"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\ncontrol.getAlarmClockNum();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_GET_ALARMNUM_AM.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int alarmNum = obj.getInt(AmProfile.GET_ALARMNUM_AM);\n                JSONArray arrId = obj.getJSONArray(AmProfile.GET_ALARMNUM_ID_AM);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"get-alarm-information-by-id"},"Get alarm information by id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\ncontrol.getAlarmClockDetail(int... ids);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_GET_ALARMINFO_AM.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                JSONArray alarmInfos = obj.getJSONArray(AmProfile.GET_ALARM_CLOCK_DETAIL);\n                for (int i = 0; i < alarmInfos.length(); i++) {\n                    JSONObject item = alarmInfos.get(i);\n                    boolean sunday    = item.getBoolean(AmProfile.GET_ALARM_WEEK_SUNDAY_AM);\n                    boolean monday    = item.getBoolean(AmProfile.GET_ALARM_WEEK_MONDAY_AM);\n                    boolean tuesday   = item.getBoolean(AmProfile.GET_ALARM_WEEK_TUESDAY_AM);\n                    boolean wednesday = item.getBoolean(AmProfile.GET_ALARM_WEEK_WEDNESDAY_AM);\n                    boolean thursday  = item.getBoolean(AmProfile.GET_ALARM_WEEK_THURSDAY_AM);\n                    boolean friday    = item.getBoolean(AmProfile.GET_ALARM_WEEK_FRIDAY_AM);\n                    boolean saturday  = item.getBoolean(AmProfile.GET_ALARM_WEEK_SATURDAY_AM);\n                    int alarmID       = item.getInt(AmProfile.GET_ALARM_ID_AM);\n                    String time       = item.getBoolean(AmProfile.GET_ALARM_TIME_AM);\n                    boolean isrepeat  = item.getBoolean(AmProfile.GET_ALARM_ISREPEAT_AM);\n                    boolean isOpen    = item.getBoolean(AmProfile.GET_ALARM_ISON_AM);\n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"setunset-alarm"},"Set/Unset alarm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\n/**\n * @param id       Alarm id: 1, 2 or 3\n * @param hour     Alarm hour part: [0, 23]\n * @param min      Alarm minute part: [0, 59]\n * @param isRepeat Indicates whether it will repeat\n * @param weeks    The days in a week to repeat the alarm, week[0~6] indicates Sun~Sat.\n *                 And 1 indicates open, 0 indicates close.\n *                 {0, 1, 1, 1, 1, 1, 0} means the alarm will repeat on Mon, Tue, Wed, Thu, Fri.\n * @param isOn     true if want to set the alarm, false to unset it.\n */\ncontrol.setAlarmClock(int id, int hour, int min, boolean isRepeat, int[] weeks, boolean isOn);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_SET_ALARMINFO_SUCCESS_AM.equals(action)) {\n            Log.i("", "set alarm info success");\n        }\n    } \n}\n')),(0,i.kt)("h3",{id:"delete-alarm-by-id"},"Delete alarm by id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\n/**\n * @param id Alarm id\n */\ncontrol.deleteAlarmClock(int id);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_DELETE_ALARM_SUCCESS_AM.equals(action)) {\n            Log.i("", "delete alarm success");\n        }\n    } \n}\n')),(0,i.kt)("h3",{id:"get-activity-remind-setting"},"Get activity remind setting"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\ncontrol.getActivityRemind();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_GET_ACTIVITY_REMIND_AM.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int time = obj.getString(AmProfile.GET_ACTIVITY_REMIND_TIME_AM);\n                int isOpen = obj.getBoolean(AmProfile.GET_ACTIVITY_REMIND_ISON_AM);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n}\n")),(0,i.kt)("h3",{id:"setunset-activity-remind"},"Set/Unset activity remind"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\n/**\n\n* @param hour Activity remind hour part: [0, 23]\n* @param min  Activity remind minute part: [0, 59]\n* @param isOn true if want to set activity remind, false to unset it.\n*/\ncontrol.setActivityRemind(int hour, int min, boolean isOn);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_SET_ACTIVITYREMIND_SUCCESS_AM.equals(action)) {\n          Log.i("", "set remind success");\n        }\n    } \n}\n')),(0,i.kt)("h3",{id:"get-device-state-and-battery-information"},"Get device state and battery information"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\ncontrol.queryAMState();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_QUERY_STATE_AM.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int state   = obj.getInt(AmProfile.QUERY_STATE_AM);\n                int battery = obj.getInt(AmProfile.QUERY_BATTERY_PERCENT_AM);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"set-user-id"},"Set user ID"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\n/**\n * @param id new user id\n */\ncontrol.setUserId(int id);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_SET_USERID_SUCCESS_AM.equals(action)) {\n            Log.i("", "set userid success");\n        }\n    } \n}\n')),(0,i.kt)("h3",{id:"get-user-information"},"Get user information"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\ncontrol.getUserInfo();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_GET_USERINFO_AM.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int age = obj.getInt(AmProfile.GET_USER_AGE_AM);\n                int step = obj.getInt(AmProfile.GET_USER_STEP_AM);\n                int height = obj.getInt(AmProfile.GET_USER_HEIGHT_AM);\n                int gender = obj.getInt(AmProfile.GET_USER_SEX_AM);\n                int weight = obj.getInt(AmProfile.GET_USER_WEIGHT_AM);\n                int unit = obj.getInt(AmProfile.GET_USER_UNIT_AM);\n                int target1 = obj.getInt(AmProfile.GET_USER_TARGET1_AM);\n                int target2 = obj.getInt(AmProfile.GET_USER_TARGET2_AM);\n                int target3 = obj.getInt(AmProfile.GET_USER_TARGET3_AM);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"set-users-bmr"},"Set user's BMR"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\ncontrol.setUserBmr(int bmr);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_SET_BMR_SUCCESS_AM.equals(action)) {\n            Log.i("", "Set user\'s BMR success");\n        }\n    } \n}\n')),(0,i.kt)("h3",{id:"get-the-activity-data"},"Get the activity data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\ncontrol.syncActivityData();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_SYNC_ACTIVITY_DATA_AM.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                JSONArray arr = obj.getJSONArray(AmProfile.SYNC_ACTIVITY_DATA_AM);\n                for (int i = 0; i < arr.size(); i++) {\n                    JSONObject item = arr.get(i);\n                    JSONArray list = item.getJSONArray(AmProfile.SYNC_ACTIVITY_EACH_DATA_AM);\n                    for (int i = 0; i < list.size(); i++) {\n                        String time = arr.get(i).getString(AmProfile.SYNC_ACTIVITY_DATA_TIME_AM);\n                        int stepLength = arr.get(i).getInt(AmProfile.SYNC_ACTIVITY_DATA_STEP_LENGTH_AM);\n                        int step = arr.get(i).getInt(AmProfile.SYNC_ACTIVITY_DATA_STEP_AM);\n                        int calorie = arr.get(i).getInt(AmProfile.SYNC_ACTIVITY_DATA_CALORIE_AM);\n                    }\n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"get-current-time-activity-data"},"Get current time activity data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\ncontrol.syncRealData();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_SYNC_REAL_DATA_AM.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int step = obj.getInt(AmProfile.SYNC_REAL_STEP_AM);\n                int calorie = obj.getInt(AmProfile.SYNC_REAL_CALORIE_AM);\n                int totalCalorie = obj.getInt(AmProfile.SYNC_REAL_TOTALCALORIE_AM);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"get-sleep-data"},"Get sleep data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\ncontrol.getBattery();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_SYNC_SLEEP_DATA_AM.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                JSONArray arr = obj.getJSONArray(AmProfile.SYNC_SLEEP_DATA_AM);\n                for (int i = 0; i < arr.size(); i++) {\n                    JSONObject item = arr.get(i);\n                    JSONArray list = item.getJSONArray(AmProfile.SYNC_SLEEP_EACH_DATA_AM);\n                    for (int i = 0; i < list.size(); i++) {\n                        String time = arr.get(i).getString(AmProfile.SYNC_SLEEP_DATA_TIME_AM);\n                        int level = arr.get(i).getInt(AmProfile.SYNC_SLEEP_DATA_LEVEL_AM);\n                    }\n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"set-the-system-time-to-am-device"},"Set the system time to AM device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\ncontrol.syncRealTime();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_SYNC_TIME_SUCCESS_AM.equals(action)) {\n            Log.i("", "Set the system time to AM device success");\n        }\n    } \n}\n')),(0,i.kt)("h3",{id:"set-hour-mode"},"Set hour mode"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\n/**\n * @param hourMode The value should be one of following:\n * AmProfile.AM_SET_12_HOUR_MODE\n * AmProfile.AM_SET_24_HOUR_MODE\n * AmProfile.AM_SET_EXCEPT_EUROPE_12_HOUR_MODE\n * AmProfile.AM_SET_EUROPE_12_HOUR_MODE\n * AmProfile.AM_SET_EXCEPT_EUROPE_24_HOUR_MODE\n * AmProfile.AM_SET_EUROPE_24_HOUR_MODE\n */\ncontrol.setHourMode();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_SET_HOUR_MODE_SUCCESS_AM.equals(action)) {\n            Log.i("", "Set hour mode success");\n        }\n    } \n}\n')),(0,i.kt)("h3",{id:"get-hour-mode"},"Get hour mode"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);\ncontrol.getHourMode();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (AmProfile.ACTION_GET_HOUR_MODE_AM.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int mode = obj.getInt(AmProfile.GET_HOUR_MODE_AM);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")))}g.isMDXComponent=!0},9632:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/am3_connection_workflow_android-210f6f5bd9ecf5322230d4a5c97b7062.png"}}]);