---
title: HS2S Pro
sidebar_position: 5
---

## API Reference

### Import HS2S Pro module

```js
import {
  HS2SProModule,
  HS2SProProfileModule
} from '@ihealth/ihealthlibrary-react-native';
```

### Add and remove listener

```js
// add
notifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {
    console.log(event);
});

// remove
notifyListener.remove();
```

### Get HS2S Pro information

```js
HS2SProModule.getDeviceInfo(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {
    if (event.action === "action_get_device_info") {
       console.log(event["battery"]);
       console.log(event["unit_current"]);
       console.log(event["user_count"]);
    }
});
```

### Get HS2S Pro battery level

```js
HS2SProModule.getBattery(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {
    if (event.action === "battery_hs") {
       console.log(event["battery"]);
    }
});
```

### Set HS2S Pro unit type

```js
/**
 * Unit type:
 * 1: kg
 * 2: lbs
 * 3: st
 **/
HS2SProModule.setUnit(mac, unit);

notifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {
    if (event.action === "action_set_unit") {
       console.log(event["status"]);
    }
});
```

### Get user profile in HS2S Pro

```js
HS2SProModule.getUserInfo(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {
    if (event.action === "action_get_user_info") {
       console.log(event["user_info_count"]);
       let array = event["user_info_array"];
       console.log(array["body_building"]);
       console.log(array["impedance"]);
       console.log(array["height"]);
       console.log(array["age"]);
       console.log(array["gender"]);
       console.log(array["weight"]);
       console.log(array["create_time"]);
       console.log(array["user_id"]);
    }
});
```

### Create or update user profile in HS2S Pro

```js
/**
 * userID: User id, the id must be 16 digits.
 * createTS: Create user or modify timestamp.
 * weight: user current weight, the unit is kg, range is 20kg~180kg.
 * age: user age, range is 18-99, if you are not in this range, you may not get the correect body fat result
 * height: user height, range is 90cm~220cm
 * gender: 0: female, 1: male
 * impedanceMark: 0: no need body fat measurement, 1: need fat measurement
 * fitnessMark: 0: no body building, 1: body building
 **/
HS2SProModule.updateUserInfo(mac, userID, createTS, weight, age, height, gender, impedanceMark, fitnessMark);

notifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {
    if (event.action === "action_create_or_update_user_info") {
       console.log(event["status"]);
    }
});
```

### Delete user profile in HS2S Pro

```js
/**
 * userID: User id.
 **/
HS2SProModule.deleteUser(mac, userId);

notifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {
    if (event.action === "action_delete_user_info") {
       console.log(event["status"]);
    }
});
```

### Get the number of offline measurement result in HS2S Pro 

```js
/**
 * userID: User id.
 **/
HS2SProModule.getMemoryDataCount(mac, userId);

notifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {
    if (event.action === "action_history_data_num") {
       console.log(event["history_data_count"]);
    }
});
```

### Get offline data in HS2S Pro

```js
/**
 * userID: User id.
 **/
HS2SProModule.getMemoryData(mac, userId);

notifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {
    if (event.action === "action_history_data") {
        let arr = event["history_data"];
        arr.forEach(function(result) {
            console.log(result["right_time"]);
            console.log(result["body_building"]);           
            console.log(result["gender"]);
            console.log(result["height"]);
            console.log(result["weight"]);
            console.log(result["instruction_type"]);
            console.log(result["impedanceEncrypt"]);
            console.log(result["age"]);
            console.log(result["impedance"]);
            console.log(result["dataID"]);
            console.log(result["measure_time"]);
            console.log(result["user_num"]);
            console.log(result["data_impedance_errors"]);
       })
    }
//If body fat is measured, this information will be returned :

if (event.action === "action_history_data") {
        let arr = event["history_data"];
        arr.forEach(function(result) {
            console.log(result["right_time"]);
            console.log(result["body_building"]);           
            console.log(result["gender"]);
            console.log(result["height"]);
            console.log(result["weight"]);
            console.log(result["instruction_type"]);
            console.log(result["impedanceEncrypt"]);
            console.log(result["age"]);
            console.log(result["impedance"]);
            console.log(result["dataID"]);
            console.log(result["measure_time"]);
            console.log(result["user_num"]);
            console.log(result["data_impedance_errors"]);
            console.log(result["body_fit_percentage"]);
            console.log(result["protein_rate"]);
            console.log(result["muscle_mass"]);
            console.log(result["body_water_rate"]);
            console.log(result["bone_salt_content"]);
       })
    }

       

});
```

### Delete offline data in HS2S Pro by user id

```js
/**
 * userID: User id.
 **/
HS2SProModule.deleteMemoryData(mac, userId);

notifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {
    if (event.action === "action_delete_history_data") {
       console.log(event["status"]);
    }
});
```

### Get the number of guest offline data in HS2S Pro

```js
HS2SProModule.getAnonymousMemoryDataCount(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {
    if (event.action === "action_anonymous_data_num") {
       console.log(event["anonymous_data_count"]);
    }
});
```

### Get guest offline data in HS2S Pro

```js
HS2SProModule.getAnonymousMemoryData(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {
    if (event.action === "action_anonymous_data") {
        let arr = event["history_data"];
        arr.forEach(function(result) {
            console.log(result["right_time"]);
            console.log(result["dataID"]);
            console.log(result["measure_time"]);
            console.log(result["weight"]);
       })
    }
});
```

### Delete guest offline data

```js
HS2SProModule.deleteAnonymousMemoryData(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {
    if (event.action === "action_delete_anonymous_data") {
       console.log(event["status"]);
    }
});
```

### Start a online measurement

The API is async function. It will return message until finish measurement.

```js
/**
 * userType:0 guest,1 normal user
 * userID: User id, the id must be 16 digits.
 * createTS: Create user or modify Timestamp.
 * weight: user current weight, the unit is kg, range is 20kg~180kg.
 * age: user age, range is 18-99, if you are not in this range, you may not get the correect body fat result
 * height: user height, range is 90cm~220cm
 * gender: 0: female, 1: male
 * impedanceMark: 0: no need body fat measurement, 1: need fat measurement
 * fitnessMark: 0: no body building, 1: body building
 **/
HS2SProModule.measure(mac,userType,userID,createTS,weight,age,height,sex,impedanceMark,fitnessMark);

notifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {
   
   if (event.action === "action_online_real_time_weight") {
        console.log(event["weight"]);

    } else if (event.action === "action_online_result") {
        console.log(event["weight"]);

    } else if (event.action === "action_body_fat_result") {
        let dic = event["data_body_fat_result"];
        dic.forEach(function(result) {
            console.log(result["right_time"]);
            console.log(result["body_building"]);           
            console.log(result["gender"]);
            console.log(result["height"]);
            console.log(result["weight"]);
            console.log(result["instruction_type"]);
            console.log(result["impedanceEncrypt"]);
            console.log(result["age"]);
            console.log(result["impedance"]);
            console.log(result["dataID"]);
            console.log(result["measure_time"]);
            console.log(result["user_num"]);
            console.log(result["data_impedance_errors"]);
       })
       //If body fat is measured, this information will be returned :
        let dic = event["data_body_fat_result"];
        dic.forEach(function(result) {
            console.log(result["right_time"]);
            console.log(result["body_building"]);           
            console.log(result["gender"]);
            console.log(result["height"]);
            console.log(result["weight"]);
            console.log(result["instruction_type"]);
            console.log(result["impedanceEncrypt"]);
            console.log(result["age"]);
            console.log(result["impedance"]);
            console.log(result["dataID"]);
            console.log(result["measure_time"]);
            console.log(result["user_num"]);
            console.log(result["data_impedance_errors"]);
            console.log(result["body_fit_percentage"]);
            console.log(result["protein_rate"]);
            console.log(result["muscle_mass"]);
            console.log(result["body_water_rate"]);
            console.log(result["bone_salt_content"]);
       })
    } 
});
```

### Start heart rate measurement mode

```js
HS2SProModule.enterHS2SProHeartRateMeasurementMode(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {
    if (event.action === "action_start_heartrate_measure") {
       
    }
    if (event.action === "action_heartrate_measure_status") {
       console.log(event["status"]);
    }
    if (event.action === "action_stop_heartrate_result") {
       console.log(event["heartrate"]);
    }
});
```

### Stop heart rate measurement mode

```js
HS2SProModule.exitHS2SProHeartRateMeasurementMode(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {
    if (event.action === "action_stop_heartrate_measure") {
       
    }
});
```

### reset device

```js
HS2SProModule.resetDevice(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {
    if (event.action === "action_restore_fatory_settings") {
       console.log(event["status"]);
    }
});
```

### disconnect device

```js
HS2SProModule.disconnect(mac);
```

### get all connected devices

```js
HS2SProModule.getAllConnectedDevices();
```
