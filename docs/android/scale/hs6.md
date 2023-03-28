---
title: HS6
sidebar_position: 7
---

## WorkFlow

1. The HS6 is Wifi body fat scale. If you've already set up wifi information, please jump to step 2. If you need to set wifi information, please call the setWifi.

2. Call funtion "setWifi" for setting wifi information to HS6 scale.

3. HS6 scale is based on Cloud, so it only support offline measurement.

## API reference

### Set the wifi information to the scale(Bluetooth)

```java
Hs6Control control = iHealthDevicesManager.getInstance().getHs5ControlForBt(mDeviceMac);
control.setWifi(String ssid, String password);
```

```java
// Return value
private iHealthDeviceHs6Callback mIHealthDeviceHs6Callback = new iHealthDeviceHs6Callback() {
    @Override
    public void setWifiNotify(String Type, String action, String message) {
        if (action.equals(HS6Control.ACTION_HS6_SETWIFI)) {
           JSONTokener jsonTokener = new JSONTokener(message);
            JSONObject jsonObject;
            try {
                    jsonObject = (JSONObject) jsonTokener.nextValue();
                    boolean result = jsonObject.getBoolean(HS6Control.SETWIFI_RESULT);
                    Log.d(TAG, "Set Wifi Result:" + result);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
        }
    } 
}
```

### Bind the user with HS6 scale

```java
Hs6Control control = iHealthDevicesManager.getInstance().getHs6Control(mDeviceMac);
/**
 * @param birthday     format like yyyy-MM-dd HH:mm:ss
 * @param height       the unit is cm
 * @param weight       the unit is kg
 * @param isSporter    is sporter; 2 is not ;3 unknown
 * @param gender       0 is male ;1 is female
 * @param serialNumber the mac address of the scale
 */
control.bindDeviceHS6(String birthday, float weight, int height, int isSporter, int gender, String serialNumber)
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onNotify(String mac, String deviceType, String action, String message) {
        if (HS6Control.ACTION_HS6_BIND.equals(action)) {
            try {
                JSONObject jsonObject = (JSONObject) jsonTokener.nextValue();
                JSONArray jsonArray = jsonObject.getJSONArray(HS6Control.HS6_BIND_EXTRA);
                for (int i = 0; i < jsonArray.length(); i++) {
                    JSONObject jsonObject2 = (JSONObject) jsonArray.get(i);
                    int result = jsonObject2.getInt(HS6Control.BIND_HS6_RESULT);
                    String model = jsonObject2.getString(HS6Control.HS6_MODEL);
                    int position = jsonObject2.getInt(HS6Control.HS6_POSITION);
                    int settedWifi = jsonObject2.getInt(HS6Control.HS6_SETTED_WIFI);
                    if (result == 1) {
                        Log.i("bind success");
                    } else if (result == 2) {
                        Log.i("the scale has no empty positions");
                    } else {
                        Log.i("bind fail");
                    }
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } 
    }
}
```

### UnBind the user with HS6 scale

```java
Hs6Control control = iHealthDevicesManager.getInstance().getHs6Control(mDeviceMac);
/**
 * @param serialNumber the mac address of scale
 */
control.unBindDeviceHS6(String serialNumber)
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onNotify(String mac, String deviceType, String action, String message) {
        if (HS6Control.ACTION_HS6_UNBIND.equals(action)) {
            try {
                JSONObject jsonObject = (JSONObject) jsonTokener.nextValue();
                 boolean result = jsonObject.getBoolean(HS6Control.HS6_UNBIND_RESULT);
                Log.d(TAG, "UnBind result:" + result);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } 
    }
}
```

### Get AccessToken of HS6 user

```java
Hs6Control control = iHealthDevicesManager.getInstance().getHs6Control(mDeviceMac);
/**
 * @param clientId     the identification of the SDK        If you don't assign a value to this parameter, let's use the default clientId.
 * @param clientSecret the identification of the SDK        If you don't assign a value to this parameter, let's use the default clientSecret.
 * @param username     the identification of the user
 * @param clientPara   a random string,return back without change
*/
control.getToken(String clientId, String clientSecret, String username, String clientPara)
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onNotify(String mac, String deviceType, String action, String message) {
        if (HS6Control.ACTION_HS6_GET_TOKEN.equals(action)) {
            try {
                JSONObject jsonObject = (JSONObject) jsonTokener.nextValue();
                String result = jsonObject.getString(HS6Control.GET_TOKEN_RESULT);
                Log.d(TAG, "Get Token result:" + result);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } 
    }
}
```

### Set unit of HS6 Scale

```java
Hs6Control control = iHealthDevicesManager.getInstance().getHs6Control(mDeviceMac);
/**
 * @param username the identification of the user
 * @param unitType the unit type
 *                 <p>0 Kg
 *                 <p>1 lbs
 *                 <p>2 st
 */
control.setUnit(String username, int unitType);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onNotify(String mac, String deviceType, String action, String message) {
        if (HS6Control.ACTION_HS6_SET_UNIT.equals(action)) {
            try {
                JSONObject jsonObject = (JSONObject) jsonTokener.nextValue();
                int result = jsonObject.getInt(HS6Control.SET_UNIT_RESULT);
                Log.d(TAG, "Scale unit: " + result);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } 
    }
}
```

### Get data of HS6 user

```java
Hs6Control control = iHealthDevicesManager.getInstance().getHs6Control(mDeviceMac);
/**
 * @param clientId     the identification of the SDK
 * @param clientSecret the identification of the SDK
 * @param username     the identification of the user
 * @param downloadTS   the time offset of this operation
 */
control.getDataFromCloud(String clientId, String clientSecret, String username, long downloadTS);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onNotify(String mac, String deviceType, String action, String message) {
        if (HS6Control.ACTION_HS6_GET_DATA.equals(action)) {
            try {
                JSONObject jsonObject = (JSONObject) jsonTokener.nextValue();
                long left_number = jsonObject.getLong(HS6Control.DATA_LEFTNUMBER);
                long download_ts = jsonObject.getLong(HS6Control.DATA_DOWNLOAD_TS);
                JSONArray arr = jsonObject.getInt(HS6Control.DATA_RESULT);
                for (int i = 0; i < arr.length(); i++) { 
                    JSONObject resultObj = arr.get(i);
                }

            } catch (JSONException e) {
                e.printStackTrace();
            }
        } 
    }
}
```
