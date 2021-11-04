---
title: HS2S
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="android" label="Android" default>

## WorkFlow

1. Scan and connect Hs2s scale.

2. Get device info, if don't have any user info, create a user info and take a measure directly.

3. Get user info, if have this user info, get data stored in hs2s. if don't have this user info, create a user info.

4. Get offline data and take measurement.

## Connection to device

### 1.Listen to device notify

```java
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    
    @Override
    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }

    @Override
    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }

    @Override
    public void onScanError(String reason, long latency) { }

    @Override
    public void onScanFinish() { }

    @Override
    public void onDeviceNotify(String mac, String deviceType,
                                String action, String message) { }
}
int callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_HS2S);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for HS2S devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.HS2S);
```

### 3.Connect to HS2S devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_HS2S)

Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);
```

## API reference

### Get the device info

```java
Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);
control.getDeviceInfo();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Hs2sProfile.ACTION_GET_DEVICE_INFO.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int userCount = obj.getInt(Hs2sProfile.HS_USER_COUNT)
                int unit = obj.getInt(Hs2sProfile.HS_UNIT_CURRENT)
                int bettery = obj.getInt(Hs2sProfile.BATTERY_HS)
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Get the battery info

```java
Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);
control.getBattery();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Hs2sProfile.ACTION_BATTERY_HS.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt(Hs2sProfile.BATTERY_HS)
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Set the unit of device

```java
Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);

//  Hs2sProfile#UNIT_LB}  <br>  {@link Hs2sProfile#UNIT_ST
control.setUnit(Hs2sProfile.UNIT_KG);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Hs2sProfile.ACTION_SET_UNIT_SUCCESS.equals(action)) {
            
        }
    } 
}
```

### Get the info of user in hs2s

```java
Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);
control.getUserInfo();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Hs2sProfile.ACTION_GET_USER_INFO.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int userCount = obj.getInt(Hs2sProfile.USER_INFO_COUNT);
                JSONArray userArr = obj.gegetJSONArray(Hs2sProfile.USER_INFO_ARRAY);
                for (int i = 0; i < userCount; i++) {
                    JSONObject user = userArr.getJSONObject(i);

                    String    userId = user.getString(Hs2sProfile.USER_INFO_USER_ID);
                    long        time = user.getLong(Hs2sProfile.USER_INFO_CREATE_TIME);
                    String    weigth = user.getString(Hs2sProfile.USER_INFO_WEIGHT);
                    int       gender = user.getInt(Hs2sProfile.USER_INFO_GENDER);
                    int          age = user.getInt(Hs2sProfile.USER_INFO_AGE);
                    int       height = user.getInt(Hs2sProfile.USER_INFO_HEIGHT);
                    int bodybuilding = user.getInt(Hs2sProfile.USER_INFO_BODYBUILDING);
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Create or update user info in device

```java
Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);
/*
 * @param id           User id  (The length of ID must be 16)
 * @param weight       weight   (unit kg     range: 20kg-180kg)
 * @param gender       0:women      1:man
 * @param age          age    18-99  (If it is not within this range, it is impossible to measure the constitution correctly.)
 * @param height       height  90-220 cm    (If it is not within this range, it is impossible to measure the constitution correctly.)
 * @param impedance    0:No body fat measurement    1:body fat measurement
 * @param bodybuilding 0:No   Bodybuilding          1:Bodybuilding
 */
control.createOrUpdateUserInfo(String id, float weight, int gender, int age, int height, int impedance, int bodybuilding);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Hs2sProfile.ACTION_CREATE_OR_UPDATE_USER_INFO.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);
                String description = obj.getString(Hs2sProfile.OPERATION_DESCRIBE);
                
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Delete user info in device

```java
Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);
control.deleteUserInfo(String id);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Hs2sProfile.ACTION_DELETE_USER_INFO.equals(action)) {
            try {
               JSONObject obj = new JSONObject(message);
               int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);
               String description = obj.getString(Hs2sProfile.OPERATION_DESCRIBE);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Specify tourist users

```java
Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);
control.specifyTouristUsers();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Hs2sProfile.ACTION_SPECIFY_USERS.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);
                String description = obj.getString(Hs2sProfile.OPERATION_DESCRIBE);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } else if (Hs2sProfile.ACTION_ONLINE_REAL_TIME_WEIGHT.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                Double weight = obj.getDouble(Hs2sProfile.DATA_WEIGHT);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } else if (Hs2sProfile.ACTION_ONLINE_RESULT.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                String dataId = obj.getInt(Hs2sProfile.DATA_ID);
                int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);
                Double weight = obj.getDouble(Hs2sProfile.DATA_WEIGHT);
                String description = obj.getString(Hs2sProfile.OPERATION_DESCRIBE);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Specify Online Users

```java
Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);
/*
 * @param id           User id  (The length of ID must be 16)
 * @param weight       weight   (unit kg     range: 20kg-180kg)
 * @param gender       0:women      1:man
 * @param age          age    18-99  (If it is not within this range, it is impossible to measure the constitution correctly.)
 * @param height       height  90-220 cm    (If it is not within this range, it is impossible to measure the constitution correctly.)
 * @param impedance    0:No body fat measurement    1:body fat measurement
 * @param bodybuilding 0:No   Bodybuilding          1:Bodybuilding
 */
control.specifyOnlineUsers(String id, 
                           float weight, 
                           int gender,
                           int age, 
                           int height, 
                           int impedance,
                           int bodybuilding)
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Hs2sProfile.ACTION_SPECIFY_USERS.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);
                String description = obj.getString(Hs2sProfile.OPERATION_DESCRIBE);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } else if (Hs2sProfile.ACTION_ONLINE_REAL_TIME_WEIGHT.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                Double weight = obj.getDouble(Hs2sProfile.DATA_WEIGHT);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } else if (Hs2sProfile.ACTION_ONLINE_RESULT.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                String dataId = obj.getInt(Hs2sProfile.DATA_ID);
                int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);
                Double weight = obj.getDouble(Hs2sProfile.DATA_WEIGHT);
                String description = obj.getString(Hs2sProfile.OPERATION_DESCRIBE);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } else if (Hs2sProfile.ACTION_ONLINE_RESULT.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                String dataId = obj.getInt(Hs2sProfile.DATA_ID);
                int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);
                Double weight = obj.getDouble(Hs2sProfile.DATA_WEIGHT);
                String description = obj.getString(Hs2sProfile.OPERATION_DESCRIBE);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } else if (Hs2sProfile.DATA_BODY_FAT_RESULT.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);
                Double weight = obj.getDouble(Hs2sProfile.OPERATION_DESCRIBE);
                String dataId = obj.getString(Hs2sProfile.DATA_ID);
                Double description = obj.getDouble(Hs2sProfile.DATA_WEIGHT);
                int userCount = obj.getString(Hs2sProfile.DATA_USER_NUM);
                int gender = obj.getString(Hs2sProfile.DATA_GENDER);
                int age = obj.getString(Hs2sProfile.DATA_AGE);
                int height = obj.getString(Hs2sProfile.DATA_HEIGHT);
                long measureTs = obj.getLong(Hs2sProfile.DATA_MEASURE_TIME);
                int bodyBuilding = obj.getInt(Hs2sProfile.DATA_BODYBUILDING);
                int type = obj.getInt(Hs2sProfile.DATA_INSTRUCTION_TYPE);

                JSONObject objResult = obj.getJSONObject(Hs2sProfile.DATA_BODY_FAT_RESULT);
                String bodyFit = obj.getString(Hs2sProfile.DATA_BODY_FIT_PERCENTAGE);
                String muscleMass = obj.getString(Hs2sProfile.DATA_MUSCLE_MASS);
                String boneSaltContent = obj.getString(Hs2sProfile.DATA_BONE_SALT_CONTENT);
                String bodyWater = obj.getString(Hs2sProfile.DATA_BODY_WATER_RATE);
                String protein = obj.getString(Hs2sProfile.DATA_PROTEIN_RATE);
                String skeletalMuscleMass = obj.getString(Hs2sProfile.DATA_SKELETAL_MUSCLE_MASS);
                String visceralFat = obj.getString(Hs2sProfile.DATA_VISCERAL_FAT_GRADE);
                String physicalAge = obj.getString(Hs2sProfile.DATA_PHYSICAL_AGE);
                String standardWeight = obj.getString(Hs2sProfile.DATA_STANDARD_WEIGHT);
                String weightControl = obj.getString(Hs2sProfile.DATA_WEIGHT_CONTROL);
                String muscleControl = obj.getString(Hs2sProfile.DATA_MUSCLE_CONTROL);
                String fatControl = obj.getString(Hs2sProfile.DATA_FAT_CONTROL);
                String fatWeight = obj.getString(Hs2sProfile.DATA_FAT_WEIGHT);

            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### Get off line data count

```java
Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);
control.getOfflineDataCount(String... IDArray);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Hs2sProfile.ACTION_HISTORY_DATA_NUM.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int userCount = obj.getInt(Hs2sProfile.HISTORY_DATA_USER_COUNT);
                JSONArray countArr = obj.gegetJSONArray(Hs2sProfile.HISTORY_DATA_COUNT_ARRAY);
                for (int i = 0; i < userCount; i++) {
                    JSONObject countObj = userArr.getJSONObject(i);
                    int count = countObj.getInt(Hs2sProfile.HISTORY_DATA_COUNT);
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Get offline data

```java
Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);
control.getOfflineData(String id) 
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Hs2sProfile.ACTION_HISTORY_DATA.equals(action)) {
            try {
                JSONArray historyArr = new JSONArray(message);
                for (int i = 0; i < historyArr.length(); i++) {
                    JSONObject obj = historyArr.getJSONObject(i);
                    int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);
                    Double weight = obj.getDouble(Hs2sProfile.OPERATION_DESCRIBE);
                    String dataId = obj.getString(Hs2sProfile.DATA_ID);
                    Double description = obj.getDouble(Hs2sProfile.DATA_WEIGHT);
                    int userCount = obj.getString(Hs2sProfile.DATA_USER_NUM);
                    int gender = obj.getString(Hs2sProfile.DATA_GENDER);
                    int age = obj.getString(Hs2sProfile.DATA_AGE);
                    int height = obj.getString(Hs2sProfile.DATA_HEIGHT);
                    long measureTs = obj.getLong(Hs2sProfile.DATA_MEASURE_TIME);
                    int bodyBuilding = obj.getInt(Hs2sProfile.DATA_BODYBUILDING);
                    int type = obj.getInt(Hs2sProfile.DATA_INSTRUCTION_TYPE);

                    JSONObject objResult = obj.getJSONObject(Hs2sProfile.DATA_BODY_FAT_RESULT);
                    String bodyFit = obj.getString(Hs2sProfile.DATA_BODY_FIT_PERCENTAGE);
                    String muscleMass = obj.getString(Hs2sProfile.DATA_MUSCLE_MASS);
                    String boneSaltContent = obj.getString(Hs2sProfile.DATA_BONE_SALT_CONTENT);
                    String bodyWater = obj.getString(Hs2sProfile.DATA_BODY_WATER_RATE);
                    String protein = obj.getString(Hs2sProfile.DATA_PROTEIN_RATE);
                    String skeletalMuscleMass = obj.getString(Hs2sProfile.DATA_SKELETAL_MUSCLE_MASS);
                    String visceralFat = obj.getString(Hs2sProfile.DATA_VISCERAL_FAT_GRADE);
                    String physicalAge = obj.getString(Hs2sProfile.DATA_PHYSICAL_AGE);
                    String standardWeight = obj.getString(Hs2sProfile.DATA_STANDARD_WEIGHT);
                    String weightControl = obj.getString(Hs2sProfile.DATA_WEIGHT_CONTROL);
                    String muscleControl = obj.getString(Hs2sProfile.DATA_MUSCLE_CONTROL);
                    String fatControl = obj.getString(Hs2sProfile.DATA_FAT_CONTROL);
                    String fatWeight = obj.getString(Hs2sProfile.DATA_FAT_WEIGHT);
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Delete offline data

```java
Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);
control.deleteOfflineData(String id);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Hs2sProfile.ACTION_DELETE_HISTORY_DATA.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int status = obj.getInt(Hs2sProfile.OPERATION_STATUS)
                String description = obj.getString(Hs2sProfile.OPERATION_DESCRIBE)
               
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

  </TabItem>
  
  <TabItem value="ios" label="iOS">

#### iOS Doc

  </TabItem>
  
  <TabItem value="reactnative" label="React Native">

## import HS2S module

```js
import {
  HS2SModule,
  HS2SProfileModule
} from '@ihealth/ihealthlibrary-react-native';
```

## APIs

### add and remove listener

```js
// add
notifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {
    console.log(event);
});

// remove
notifyListener.remove();
```

### get device information

```js
HS2SModule.getDeviceInfo(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {
    if (event.action === "action_get_device_info") {
       console.log(event["battery"]);
       console.log(event["unit_current"]);
       console.log(event["user_count"]);
    }
}
```

### get device battery

```js
HS2SModule.getBattery(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {
    if (event.action === "action_get_battery_hs") {
       console.log(event["battery_hs"]);
    }
}
```

### set Unit

```js
HS2SModule.setUnit(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {
    if (event.action === "action_set_unit") {
       console.log(event["result"]);
    }
}
```

### get user information

```js
HS2SModule.getUserInfo(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {
    if (event.action === "action_get_user_info") {
       console.log(event["user_info-count"]);
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
}
```

### create user

```js
HS2SModule.updateUserInfo(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {
    if (event.action === "action_create_or_update_user_info") {
       console.log(event["result"]);
    }
}
```

### delete user

```js
HS2SModule.deleteUser(mac, userId);

notifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {
    if (event.action === "action_delete_user_info") {
       console.log(event["result"]);
    }
}
```

### get the number of offline data

```js
HS2SModule.getMemoryDataCount(mac, userId);

notifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {
    if (event.action === "action_history_data_num") {
       console.log(event["history_data_count"]);
    }
}
```

### get offline data

```js
HS2SModule.getMemoryData(mac, userId);

notifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {
    if (event.action === "action_history_data") {
        let arr = event["history_data"];
        arr.forEach(function(result) {
            console.log(result["fat_weight"]);
            console.log(result["fat_control"];
            console.log(result["weight_control"];
            console.log(result["standard_weight"];
            console.log(result["skeletal_muscle_mass"];
            console.log(result["body_water_rate"];
            console.log(result["muscle_mas"];
            console.log(result["instruction_type"];
            console.log(result["body_building"];
            console.log(result["height"];
            console.log(result["gender"];
            console.log(result["muscle_control"];
            console.log(result["physical_age"];
            console.log(result["visceral_fat_grade"];
            console.log(result["protein_rate"];
            console.log(result["bone_salt_content"];
            console.log(result["visceral_fat_grade"];
            console.log(result["measure_time"];
            console.log(result["age"];
            console.log(result["impedance"];
            console.log(result["weight"];
       })
    }
}
```

### delete offline data by user id

```js
HS2SModule.deleteMemoryData(mac, userId);

notifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {
    if (event.action === "action_delete_history_data") {
       console.log(event["result"]);
    }
}
```

### get the number of anonymous offline data

```js
HS2SModule.getAnonymousMemoryDataCount(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {
    if (event.action === "action_anonymous_data_num") {
       console.log(event["anonymous_data_count"]);
    }
}
```

### get anonymous offline data

```js
HS2SModule.getAnonymousMemoryData(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {
    if (event.action === "action_anonymous_data") {
        let arr = event["history_data"];
        arr.forEach(function(result) {
            console.log(result["instruction_type"];
            console.log(result["body_building"];
            console.log(result["height"];
            console.log(result["gender"];
            console.log(result["measure_time"];
            console.log(result["age"];
            console.log(result["impedance"];
            console.log(result["weight"];
       })
    }
}
```

### delete anonymous offline data

```js
HS2SModule.deleteAnonymousMemoryData(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {
    if (event.action === "action_delete_anonymous_data") {
       console.log(event["result"]);
    }
}
```

### start a online measurement

The API is asyn function. It will return message until finish measurement.

```js
HS2SModule.measure(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {
    if (event.action === "action_specify_users") {
        console.log(event["result"]);
        // 1: success, 0: failure

    } else if (event.action === "action_online_real_time_weight") {
        console.log(event["weight"]);

    } else if (event.action === "action_online_result") {
        console.log(event["weight"]);

    } else if (event.action === "action_body_fat_result") {
        let bodyFat = event["data_body_fat_result"];
        let fat_weight = bodyFat["fat_weight"];
        let fat_control = bodyFat["fat_control"];
        let weight_control = bodyFat["weight_control"];
        let standard_weight = bodyFat["standard_weight"];
        let skeletal_muscle_mass = bodyFat["skeletal_muscle_mass"];
        let body_water_rate = bodyFat["body_water_rate"];
        let muscle_mas = bodyFat["muscle_mas"];
        let instruction_type = bodyFat["instruction_type"];
        let body_building = bodyFat["body_building"];
        let height = bodyFat["height"];
        let gender = bodyFat["gender"];
        let muscle_control = bodyFat["muscle_control"];
        let physical_age = bodyFat["physical_age"];
        let visceral_fat_grade = bodyFat["visceral_fat_grade"];
        let protein_rate = bodyFat["protein_rate"];
        let bone_salt_content = bodyFat["bone_salt_content"];
        let visceral_fat_grade = bodyFat["visceral_fat_grade"];
        let measure_time = bodyFat["measure_time"];
        let age = bodyFat["age"];
        let impedance = bodyFat["impedance"];
        let weight = bodyFat["weight"];

    } else if (event.action === "action_measure_finish_at_critical") { }
});
```

### start heart rate measurement mode

```js
HS2SModule.resetDevice(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {
    if (event.action === HS2SProfileModule.ACTION_HS2S_MEASURE_HEARTRATE) {
       
    }
}
```

### stop heart rate measurement mode

```js
HS2SModule.resetDevice(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {
    if (event.action === HS2SProfileModule.ACTION_HS2S_EXIT_MEASURE_HEARTRATE_STATUS) {
        // {"status":0,"heartrate":78}
       console.log(event.message);
    }
}
```

### reset device

```js
HS2SModule.resetDevice(mac);

notifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {
    if (event.action === "action_restore_factory_settings") {
       console.log(event["result"]);
    }
}
```

### disconnect device

```js
HS2SModule.disConnect(mac);
```

### get all connected devices

```js
HS2SModule.getAllConnectedDevices();
```

  </TabItem>
</Tabs>