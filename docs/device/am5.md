# AM4 Workflow

## Import AM5 Module

```js
import {
  AM5Module,
  AM5ProfileModule
} from '@ihealth/ihealthlibrary-react-native';
```

## APIs

### Add and remove listener

```js
// add
notifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {
    console.log(event);
});

// remove
notifyListener.remove();
```

### get all connected am5 devices

```js
AM5Module.getAllConnectedDevices();

// {"action": "action_get_all_connected_devices", "devices": ["DD4173E7F41E"]}
```

### disconnect a am5 devices

```js
AM5Module.disconnect(mac);
```

### Binding apps and devices

```js
AM5Module.bindDevice(mac);

// response
// {"action": "action_user_bind", "description": "no error", "mac": "DD4173E7F41E", "status": 3, "type": "AM5"}
notifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {
    if (event.action === AM5ProfileModule.ACTION_USER_BIND) {
        if (3 === event[AM5ProfileModule.OPERATION_STATUS]) {
            console.log('bind success');
        } else if (4 === event[AM5ProfileModule.OPERATION_STATUS]) {
            console.log('bind fail');
        }
    }
});
```

### UnBind apps and devices

```js
AM5Module.unBindDevice(mac);

// response
// {"action": "action_user_unbind", "description": "no error", "mac": "DD4173E7F41E", "status": 3, "type": "AM5"}
notifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {
    if (event.action === AM5ProfileModule.ACTION_USER_UNBIND) {
        if (3 === event[AM5ProfileModule.OPERATION_STATUS]) {
            console.log('unbind success');
        } else if (4 === event[AM5ProfileModule.OPERATION_STATUS]) {
            console.log('unbind fail');
        }
    }
});
```

### Get information of the device

```js
AM5Module.getBasicInfo(mac);

// response
// {"action": "action_basic_info", "battStatus": 0, "bind_confirm_method": 0, "bind_confirm_timeout": 0, "deivceId": 7041, "energe": 63, "firmwareVersion": 40, "mac": "DD4173E7F41E", "mode": 1, "pairFlag": 0, "reboot": 0, "type": "AM5"}
notifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {
    if (event.action === AM5ProfileModule.ACTION_BASIC_INFO) {
        console.log(AM5ProfileModule.BASIC_ENERGE);
    }
});
```

### Set current time of the device

```js
AM5Module.setTime(mac);

// response
// {"action": "TIME", "mac": "DD4173E7F41E", "result": true, "type": "AM5"}
notifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {
    if (event.action === "TIME") {
        console.log('set success');
    }
});
```

### Set user info

```js
/**
 * @param year   Year of birth
 * @param month  Month of birth
 * @param day    Day of birth
 * @param weight weight
 * @param height height
 * @param gender gender male: 1, female: 2
 */
AM5Module.setUserInfo(mac, 1990, 1, 1, 75, 176, 1);

// response
// {"action": "USER_INFO", "mac": "DD4173E7F41E", "result": true, "type": "AM5"}
notifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {
    if (event.action === "USER_INFO") {
        console.log('set success');
    }
});
```

### Set unit

```js
/**
 * When you never set them, treat them as defaults
 * @param {string} mac Device's mac address
 * @param type 0: Distance unit                 unit: 0 default ; 1 KM ; 2 MI
 * @param type 1: Wight unit                    unit: 0 default ; 1 KG ; 2 LB ; 3 ST
 * @param type 2: Temperature unit              unit: 0 default ; 1 °C ; 2 °F
 * @param type 3: Distance at each step         unit: distance (cm)      (default 0cm)
 * @param type 4: Language                      unit: 0 default ; 1 zh ; 2 en ; 3 fr ; 4 de ; 5 it ; 6 es ; 7 ja ; 8 po ; 9 cz
 * @param type 5: Time Mode                     unit: 0 default ; 1 24 hour system ; 2 12 hour system
 * @param type 6: Distance at each step of run  unit: distance (cm)      (default 0cm)
 * @param type 7: GPS calibration switch        unit: 0 default ; 1 open ; 2 close
*/
AM5Module.setUnit(mac, [1, 3, 2]);

// response
// {"action": "UNIT", "mac": "DD4173E7F41E", "result": true, "type": "AM5"}
notifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {
    if (event.action === "UNIT") {
        console.log('set success');
    }
});
```

### Set Hand Wear Mode

```js
/**
 * @param {string} mac Device's mac address
 * @param mode 0  left-hand   1 right-hand
 */
AM5Module.setHandWearMode(mac, 1);

// response
// {"action": "HAND_MODE", "mac": "DD4173E7F41E", "result": true, "type": "AM5"}
notifyListener = DeviceEventEmitter.addListener(AM4Module.Event_Notify,  (event) => {
    if (event.action === "HAND_MODE") {
        console.log('set success');
    }
});
```

### Get the live data of the device

```js
/**
 * @param {string} mac Device's mac address
 */
AM5Module.getLiveData(mac);

// response
// {"action": "action_live_data", "dbp": 0, "heartRate": 0, "mac": "DD4173E7F41E", "sbp": 0, "totalActiveTime": 0, "totalCalories": 0, "totalDistances": 0, "totalStep": 0, "type": "AM5"}
notifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {
    if (event.action === AM5ProfileModule.ACTION_LIVE_DATA) {
        console.log('set success');
    }
});
```

### Sync health data from device

```js
/**
 * @param {string} mac Device's mac address
 */
AM5Module.syncHealthData(mac);

// response

// 1. {"action": "action_sync_health_data", "mac": "DD4173E7F41E", "status": 0, "type": "AM5"}
// 2. {"action": "action_sync_health_data", "mac": "DD4173E7F41E", "progress": 2, "status": 2, "type": "AM5"}

// 3. {"action": "action_sync_health_data_sport", "dId": 7041, "date": "Aug 16, 2021 12:00:00 AM", "day": 16, "items": [       {"activeTime": 0, "calory": 0, "dId": 7041, "date": "Aug 16, 2021 12:00:00 AM", "day": 16, "distance": 0, "month": 8, "sportDataId": 1, "stepCount": 0, "year": 2021}], "mac": "DD4173E7F41E", "month": 8, "sportDataId": 3, "startTime": 0, "timeSpace": 15, "totalActiveTime": 473, "totalCalory": 40, "totalDistance": 718, "totalStepCount": 998, "type": "AM5", "year": 2021} 

// 4. {"action": "action_sync_health_data_sleep", "awakeCount": 2, "dId": 7041, "date": "Aug 27, 2021 12:00:00 AM", "day": 27,"deepSleepCount": 7, "deepSleepMinutes": 157, "items": 
// [{"dId": 7041, "date": "Aug 27, 2021 12:00:00 AM", "day": 27, "month": 8, "offsetMinute": 19, "sleepDataId": 2, "sleepStatus": 2, "year": 2021}, 
//  {"dId": 7041, "date": "Aug 27, 2021 12:00:00 AM", "day": 27, "month": 8, "offsetMinute": 28, "sleepDataId": 3, "sleepStatus": 3, "year": 2021}, {"dId": 7041, "date": "Aug 27, 2021 12:00:00 AM", "day": 27, "month": 8, "offsetMinute": 56, "sleepDataId": 4, "sleepStatus": 2, "year": 2021}],  "lightSleepCount": 9, "lightSleepMinutes": 327, "mac": "DD4173E7F41E", "month": 8, "sleepDataId": 1, "sleepEndedTimeH": 9, "sleepEndedTimeM": 10, "totalSleepMinutes": 533, "type": "AM5", "year": 2021}

// 5. {"action": "action_sync_health_data_heart_rate", "dId": 7041, "date": "Aug 16, 2021 12:00:00 AM", "day": 16, "items": [ {"activeTime": 0, "calory": 0, "dId": 7041, "date": "Aug 16, 2021 12:00:00 AM", "day": 16, "distance": 0, "month": 8, "sportDataId": 1, "stepCount": 0, "year": 2021}]}

// 6. {"action": "action_sync_health_data", "mac": "DD4173E7F41E", "progress": 100, "status": 3, "type": "AM5"}

notifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {
    if (event.action === AM5ProfileModule.ACTION_SYNC_HEALTH_DATA) {
        console.log('get success');
    }
});
```
