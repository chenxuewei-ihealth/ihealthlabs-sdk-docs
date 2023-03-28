---
title: HS2S
sidebar_position: 2
---

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

```java
// Return
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {

    @Override
    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) {
        Log.i(TAG, "onScanDevice - mac:" + mac + " - deviceType:" + deviceType + " - rssi:" + rssi + " - manufactorData:" + manufactorData);
    }
}
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

### Start heart rate measurement mode

:::info
Only Hs2s Pro and Black Hs2s support heart rate measurement
:::

If you call this function, Hs2s will switch to heart rate measurement mode and the weight measurement is not availabe.
If you want to start the weight measurement, need to call the stopHeartRateMode function or disconnect the Hs2s BLE's connection with Phone.

```java
Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);
control.startHeartRateMode();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Hs2sProfile.ACTION_START_HEARTRATE_MEASURE.equals(action)) {
            Log.i("", "Heart rate measurement is started");

        } else if (Hs2sProfile.ACTION_HEARTRATE_REALTIME_MEASURE.equals(action)) {
            Log.i("", "Heart rate measurement is in progress");

        } else if (Hs2sProfile.ACTION_HEARTRATE_RESULT.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int heartrate = obj.getInt(Hs2sProfile.DATA_HEARTRATE);
                Log.i("", "The heartrate is " + heartrate);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### Stop heart rate measurement mode

:::info
Only Hs2s Pro and Black Hs2s support heart rate measurement
:::

If you call this function, Hs2s will stop heart rate measurement mode and back to the weight measurement mode.

```java
Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);
control.stopHeartRateMode();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Hs2sProfile.ACTION_STOP_HEARTRATE_MEASURE.equals(action)) {
            Log.i("", "Heart rate measurement is stop");
        }
    }
}
```