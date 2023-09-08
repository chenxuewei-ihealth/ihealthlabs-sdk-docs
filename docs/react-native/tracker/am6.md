---
title: AM6
sidebar_position: 5
---

## API Reference

### Import AM6 Module

```js
import {
  AM6Module,
  AM6ProfileModule
} from '@ihealth/ihealthlibrary-react-native';
```

### Add and remove listener

```js
// add
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    console.log(event);
});

// remove
notifyListener.remove();
```

### Get all connected am6 devices

```js
AM6Module.getAllConnectedDevices();

// {"action": "action_get_all_connected_devices", "devices": ["DD4173E7F41E"]}
```

### disconnect a am6 devices

```js
AM6Module.disconnect(mac);
```


### Get Device Info And SyncTime

```js
AM6Module.getDeviceInfoAndSyncTime(mac,is24Hour);
//Note:In the iOS system, the incoming parameter is24Hour does not work. The time set to AM6 will be adjusted according to the phone system settings.
// response
// {"action": "am6_action_getDeviceInfoAndSetTime", "am6_getDeviceInfo_battery": 49, "am6_getDeviceInfo_bind_status": 1, "am6_getDeviceInfo_charge": 0, "am6_getDeviceInfo_firmware_version": "0.0.13", "am6_getDeviceInfo_hardware_version": "0.1.4", "am6_getDeviceInfo_sdk_version": "0.3.2", "mac": "004D321BD2D9", "type": "AM6"}
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_GET_DEVICE_INFO) {
       
            console.log('device info');
    }
});
```
### Set user Info

```js
AM6Module.setUserInfo(mac, userIds, gender, age, height, weight);
// response
// {"action": "am6_action_setUser", "am6_setUser_result": 0, "mac": "004D321BD2DD", "type": "AM6"}
// "am6_setUser_result"  0:fail  1:sucess
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_SET_USER) {
       
            console.log(event["am6_setUser_result"]);
    }
});
```
### Set Phone Platform

```js
AM6Module.setPhonePlatform(mac);
// response
// {"action": "am6_action_setPhonePlatform", "mac": "004D321BD2D9", "type": "AM6"}
// For iOS: The platform is set so that AM6 can normally receive notifications on the phone.After calling this API, the system will pop up a pop-up window asking whether to pair uniformly. If you choose to agree, then AM6 will perform Bluetooth pairing with the mobile phone, and next time AM6 will automatically connect to the mobile phone via Bluetooth. If you choose not to agree, then the AM6 and mobile phone Bluetooth will not be automatically connected.
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_SET_PHONEPLATFORM) {
       
            console.log('SET PHONEPLATFORM');
    }
});
```
### NotifyMessage(Only for Android)

```js
AM6Module.notifyMessage(mac, date, status, type, title, content);
//iOS does not support this API
// response
// {"action": "am6_action_notifyMessage", "mac": "004D321BD2D9", "type": "AM6"}

notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_SET_PHONEPLATFORM) {
       
            console.log('notifyMessage');
    }
});
```
### Find Device

```js
AM6Module.findDevice(mac, start);
// response
// {"action": "am6_action_findDevice", "am6_findDevice_status": 1, "mac": "004D321BD2D9", "type": "AM6"}

notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_FIND_DEVICE) {
       
            console.log(event["am6_findDevice_status"]);
    }
});
```

### Reboot Device

```js
AM6Module.rebootDevice(mac);
// response
// {"action": "am6_action_rebootDevice","mac": "004D321BD2D9", "type": "AM6"}

notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_REBOOT_DEVICE) {
       
            console.log('am6_action_rebootDevice');
    }
});
```  
### Get Time

```js
AM6Module.getTime(mac);
// response
// {"action": "am6_action_getTime", "am6_getTime_time": "2023-08-29 10:03:02", "am6_getTime_time_format": 1, "mac": "004D321BD2D9", "type": "AM6"}

notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_GET_TIME) {
       
            console.log(event["am6_getTime_time"]);
    }
});
```  
### Set TargetRemind

```js
AM6Module.setTargetRemind(mac, isEnable, calorie, step);
//isEnable   YES：open，NO：close
//calorie   Calorie Goal (0-65535 Cal)
//step      step goal(0-65534)
// response
// {"action": "am6_action_setTargetReminder", "am6_setTargetReminder_result": 1, "mac": "004D321BD2D9", "type": "AM6"}
// "am6_setTargetReminder_result"  0:fail  1:sucess
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_SET_REMINDER) {
       
            console.log(event["am6_setTargetReminder_result"]);
    }
});
```  
### Get TargetRemind

```js
AM6Module.getTargetRemind(mac);
// response
// {"action": "am6_action_getTargetReminder", "am6_getTargetReminder_calorie": 500, "am6_getTargetReminder_enable": true, "am6_getTargetReminder_result": 1, "am6_getTargetReminder_step": 1500, "mac": "004D321BD2D9", "type": "AM6"}
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_GET_REMINDER) {
       
            console.log(event["am6_getTargetReminder_calorie"]);
            console.log(event["am6_getTargetReminder_step"]);
            console.log(event["am6_getTargetReminder_enable"]);
            console.log(event["am6_getTargetReminder_result"]);
    }
});
```  
### Set SedentaryRemind

```js
AM6Module.setSedentaryRemind(mac, enable, start, end);
// enable YES：open，NO：close
// start  Minute to start (24-hour format, minimum 0 minutes)
// end  Ending minute (24-hour format, max 1439 minutes)

// response
// {"action": "am6_action_setSedentaryReminder", "am6_setSedentaryReminder_result": 1, "mac": "004D321BD2D9", "type": "AM6"}
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_SET_SENDENTARY) {
       
            console.log(event["am6_setSedentaryReminder_result"]);
           
    }
});
```  
### Get SedentaryRemind

```js
AM6Module.getSedentaryRemind(mac);
// response
// {"action": "am6_action_getSedentaryReminder", "am6_getSedentaryReminder_enable": 1, "am6_getSedentaryReminder_endTime": 1200, "am6_getSedentaryReminder_result": 1, "am6_getSedentaryReminder_startTime": 1000, "mac": "004D321BD2D9", "type": "AM6"}
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_GET_REMINDER) {
       
            console.log(event["am6_getSedentaryReminder_enable"]);
            console.log(event["am6_getSedentaryReminder_endTime"]);
            console.log(event["am6_getSedentaryReminder_result"]);
            console.log(event["am6_getSedentaryReminder_startTime"]);
    }
});
```  
### Set Raise To LightRemind

```js
AM6Module.setRaiseToLightRemind(mac, enable, start, end);
// enable YES：open，NO：close
// start  Minute to start (24-hour format, minimum 0 minutes)
// end  Ending minute (24-hour format, max 1439 minutes)

// response
// {"action": "am6_action_setRaiseToLight", "am6_setRaiseToLight_result": 1, "mac": "004D321BD2D9", "type": "AM6"}
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_SET_RAISE) {
       
            console.log(event["am6_setRaiseToLight_result"]);
           
    }
});
``` 
### Get Raise To LightRemind

```js
AM6Module.getRaiseToLightRemind(mac);
// response
//  {"action": "am6_action_getRaiseToLight", "am6_getRaiseToLight_enable": 1, "am6_getRaiseToLight_endTime": 1200, "am6_getRaiseToLight_result": 1, "am6_getRaiseToLight_startTime": 1000, "mac": "004D321BD2D9", "type": "AM6"}
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_GET_RAISE) {
       
            console.log(event["am6_getRaiseToLight_enable"]);
            console.log(event["am6_getRaiseToLight_endTime"]);
            console.log(event["am6_getRaiseToLight_result"]);
            console.log(event["am6_getRaiseToLight_startTime"]);
    }
});
```  
### Set DoNotDisturb Mode

```js
AM6Module.setDoNotDisturbMode(mac, enable, start, end);
// enable YES：open，NO：close
// start  Minute to start (24-hour format, minimum 0 minutes)
// end  Ending minute (24-hour format, max 1439 minutes)

// response
//  {"action": "am6_action_setDoNotDisturb", "am6_setDoNotDisturb_result": 1, "mac": "004D321BD2D9", "type": "AM6"}
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_SET_DONOTDISTURB) {
       
            console.log(event["am6_setDoNotDisturb_result"]);
           
    }
});
``` 
### Get DoNotDisturb Mode

```js
AM6Module.getDoNotDisturbMode(mac);
// response
//  {"action": "am6_action_getDoNotDisturb", "am6_getDoNotDisturb_enable": 1, "am6_getDoNotDisturb_endTime": 1200, "am6_getDoNotDisturb_result": 1, "am6_getDoNotDisturb_startTime": 1000, "mac": "004D321BD2D9", "type": "AM6"}
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_GET_DONOTDISTURB) {
       
            console.log(event["am6_getDoNotDisturb_enable"]);
            console.log(event["am6_getDoNotDisturb_endTime"]);
            console.log(event["am6_getDoNotDisturb_result"]);
            console.log(event["am6_getDoNotDisturb_startTime"]);
    }
});
``` 

### Set WearHand

```js
AM6Module.setWearHand(mac, type);
// type  0 left 1 right

// response
//  {"action": "am6_action_setWearHand", "am6_setWearHand_result": 1, "mac": "004D321BD2D9", "type": "AM6"}
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_SET_WEARHAND) {
       
            console.log(event["am6_action_setWearHand"]);
           
    }
});
``` 
### Get WearHand

```js
AM6Module.getWearHand(mac);
// response
//  {"action": "am6_action_getWearHand", "am6_getWearHand_hand": 1, "am6_getWearHand_result": 1, "mac": "004D321BD2D9", "type": "AM6"}
//am6_getWearHand_hand  0 left 1 right
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_GET_WEARHAND) {
       
            console.log(event["am6_getWearHand_hand"]);
           
    }
});
``` 
### Set AlarmClock List

```js
AM6Module.setAlarmClockList(mac, clockList);
//clockList must pass values according to the example format, otherwise the setting will fail. If you need to delete all alarm clocks, just pass an empty string.
// clockList : (mac, "1:1-1-1-1-1-1-1:1200;1:1-1-1-1-1-1-1:1400")
//1(Parameters are separated by : characters, and the first parameter represents: （1: repeat 0: not repeat.))
//1-1-1-1-1-1-1(Parameters are separated by : characters, and the second parameter represents: （Alarm Repeat Mode, randge: refer to Sunday to Staturday 1：open 0：close))
//1200 (time，Parameters are separated by : characters, and the third parameter represents: 1200 min)
// response
//  {"action": "am6_action_setAlarmClockList", "am6_setAlarmClockList_Status": 1, "mac": "004D321BD2D9", "type": "AM6"}
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_SET_ALARMLIST) {
       
            console.log(event["am6_setAlarmClockList_Status"]);
           
    }
});
``` 
 ### Get AlarmClock List

```js
AM6Module.getAlarmClockList(mac);
// response
//  {"action": "am6_action_getAlarmClockList", "am6_getAlarmClockList_list": [{"am6_getAlarmClockList_enable": 1, "am6_getAlarmClockList_time": 827, "am6_getAlarmClockList_week": [Array]}], "am6_getAlarmClockList_status": 1, "mac": "004D321BD2D9", "type": "AM6"}
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_GET_ALARMLIST) {
       
            console.log(event["am6_getAlarmClockList_list"]);
           
    }
});
```    
 ### Start Bind

```js
AM6Module.startBind(mac);
//After calling this API, AM6 will display the pairing interface
// response
//  {"action": "am6_action_startBind", "mac": "004D321BD2D9", "type": "AM6"}
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_SET_STARTBIND) {
       
            console.log(event["am6_action_startBind"]);
           
    }
});
```  
 ### BindUser Success

```js
AM6Module.bindUserSuccess(mac,userIds);
// userIds   we recommend use user id's md5-16 value, 16 bytes length
//After calling this API, AM6 will display the binding successful interface
// response
//   {"action": "am6_action_bindUserSuccess", "mac": "004D321BD2D9", "type": "AM6"}
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_SET_BINDSUCCESS) {
       
            console.log(event["am6_action_bindUserSuccess"]);
           
    }
});
```  
 ### bindUser Fail

```js
AM6Module.bindUserFail(mac);
// After calling this API, AM6 will display the binding fail interface
// response
//  {"action": "am6_action_bindUserFail", "mac": "004D321BD2D9", "type": "AM6"}
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_SET_BINDFAIL) {
       
            console.log(event["am6_action_bindUserFail"]);
           
    }
});
```  
 ### unBindUser

```js
AM6Module.unBindUser(mac,userIds);
// userIds   we recommend use user id's md5-16 value, 16 bytes length

// response
//  {"action": "am6_action_unbindUser", "am6_unbindUser_status": 1, "mac": "004D321BD2D9", "type": "AM6"}
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_SET_UNBIND) {
       
            console.log(event["am6_action_unbindUser"]);
           
    }
});
```  
 ### Ready SyncData

```js
AM6Module.readySyncData(mac);
// Prepare the synchronization command. Before synchronizing data, you need to call this command once!!!!

// response
// {type: 'AM6', mac: '004D321BD2D9', am6_readySyncData_status: 1, action: 'am6_action_readySyncData'}
notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_SYNC_READY) {
       
            console.log(event["am6_readySyncData_status"]);
           
    }
});
```  
 ### Get DailyData

```js
AM6Module.getDailyData(mac);

// response
//{type: 'AM6', mac: '004D321BD2D9', am6_getDailyData: [{
//am6_getDailyData_bloodOxygen: 0
//am6_getDailyData_calorie: 84
//am6_getDailyData_date: "2023-08-28 00:00:00"
//am6_getDailyData_effectiveStand: 393216
//am6_getDailyData_heartRate: 0
//am6_getDailyData_maxHeartRate: 0
//am6_getDailyData_maxHeartRateTime: "2000-00-00 00:00:00"
//am6_getDailyData_meanHeartRate: 0
//am6_getDailyData_minHeartRate: 0
//am6_getDailyData_minHeartRateTime: "2000-00-00 00:00:00"
//am6_getDailyData_restHeartRate: 0
//am6_getDailyData_step: 812
//}], action: 'am6_action_getDailyData'}

notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_GET_DAILYDATA) {
       
            console.log(event["am6_getDailyData"]);
           
    }
});
```  
 ### Get StepData

```js
AM6Module.getStepData(mac);
// response
//{am6_getStepData: [
//{am6_getStepData_list:[
//{am6_getStepData_distance: 2850, am6_getStepData_calorie: 2850, am6_getStepData_step: 2850}
//], am6_getStepData_date: '2020-02-29 00:00:00'}], type: 'AM6', mac: '004D321BD2D9', action: 'am6_action_getStepData'}

notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_GET_STEPDATA) {
       
            console.log(event["am6_getStepData"]);
           
    }
});
```  
  ### Get SleepData

```js
AM6Module.getSleepData(mac);
// response
//{am6_getSleepData: [{am6_getSleepData_list: [{am6_getSleepData_mode_date: '22:01', am6_getSleepData_mode: 1}], am6_getSleepData_date: '2015-07-04 00:00:00'}], type: 'AM6', mac: '004D321BD2D9', action: 'am6_action_getSleepData' }

notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_GET_SLEEPDATA) {
       
            console.log(event["am6_getSleepData_list"]);
           
    }
});
```   
  ### Get HeartRate Data

```js
AM6Module.getHeartRateData(mac);
// response
//{am6_getHeartRateData: [{am6_getHeartRateData_list:[{am6_getHeartRateData_heartRate:0}], am6_getHeartRateData_date: '2020-02-29 00:00:00'}], type: 'AM6', mac: '004D321BD2D9', action: 'am6_action_getHeartRateData'}

notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_GET_HEARTRATE) {
       
            console.log(event["am6_getHeartRateData_list"]);
           
    }
});
```  
  ### Get BloodOxygen Data

```js
AM6Module.getBloodOxygenData(mac);
// response
//{type: 'AM6', mac: '004D321BD2D9', am6_getBloodOxygenData: [{{am6_getBloodOxygenData_bloodOxygen: 0, am6_getBloodOxygenData_date: '2020-02-29 00:01:00'}}], action: 'am6_action_getBloodOxygenData'}


notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_GET_BLOODOXYGEN) {
       
            console.log(event["am6_getBloodOxygenData"]);
           
    }
});
```  
  ### Get Activity Data

```js
AM6Module.getActivityData(mac);
// response
//{am6_getActivityData: [
//{am6_getActivityData_report: { 
//am6_getActivityData_anaerobicTime: 20
//am6_getActivityData_aveHeartRate: 178
//am6_getActivityData_bodyEnergyCost: 0
//am6_getActivityData_cardioTime:20
//am6_getActivityData_endDate: "2023-03-04 21:01:00"
//am6_getActivityData_estimatedRecoveryTime: 0
//am6_getActivityData_fatReductionTime: 20
//am6_getActivityData_maxHeartRate: 255
//am6_getActivityData_maxOxygenUptake: 0
//am6_getActivityData_maxPace: 320
//am6_getActivityData_maxStepFrequency: 336
//am6_getActivityData_minHeartRate: 0
//am6_getActivityData_minPace: 400
//am6_getActivityData_peakTime: 20
//am6_getActivityData_startDate: "2023-03-04 18:01:00"
//am6_getActivityData_totalCalorie: 65535
//am6_getActivityData_totalDistance: 30000
//am6_getActivityData_totalStep: 60000
//am6_getActivityData_totalTime: 10800
//am6_getActivityData_trainingEffect: 0
//am6_getActivityData_warmUpTime: 20
//}, am6_getActivityData_point: {
//	getActivityDataPoint_Date: "2023-03-04 18:01:00"
//  am6_getActivityDataPoint_calorie: "[61, 61, 61, 61, 61, 61,.......]"
//  am6_getActivityDataPoint_distance: "[28, 28, 28, 28, 28, 28,.......]"
//  am6_getActivityDataPoint_heartRate: "[0, 67, 80, 140, 170, 180, ......]"
//  am6_getActivityDataPoint_step: "[56, 56, 56, 56,..........]"
//}, am6_getActivityData_date: '2022-07-04 18:01:00'}
//], type: 'AM6', mac: '004D321BD2D9', action: 'am6_action_getActivityData'}


notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_GET_ACTIVITY) {
       
            console.log(event["am6_getActivityData"]);
           
    }
});
```  
  ### Delete Data

```js
AM6Module.deleteData(mac,type);
//Delete specified historical data
//type in order bit0: steps and calories bit1: sleep bit2: heart rate bit3: blood oxygen bit4: daily bit5: multi-sports, the highest bit is 1 all delete all the corresponding data on the above bits If you need to delete, it is 1 If you don’t need to delete is 0
//type example
// 0x0010     deleteDailyActivityReport
//0x0001     deleteDailyStepsCalorieDistance
//0x0002     deleteSleepData
//0x0004     deleteDailyHeartRate
//0x0008     deleteOfflineBloodOxygen
//0x0020     deleteSport
// 0x8000    deleteAllData

// response
//{"action": "am6_action_deleteData", "am6_deleteData_result": 1, "mac": "004D321BD2DD", "type": "AM6"}


notifyListener = DeviceEventEmitter.addListener(AM6Module.Event_Notify,  (event) => {
    if (event.action === AM6ProfileModule.ACTION_DELETEDATA) {
       
            console.log(event["am6_deleteData_result"]);
           
    }
});
```  

