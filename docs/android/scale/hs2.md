---
title: HS2
sidebar_position: 1
---

## WorkFlow

1. Scan and connect HS2 scale.

2. HS2 support online measurement and offline measurement.

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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_HS2);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for HS2 devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.HS2);
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

### 3.Connect to HS2 devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_HS2)

Hs2Control control = iHealthDevicesManager.getInstance().getHs2Control(mDeviceMac);
```

## API reference

### Get the battery info

```java
Hs2Control control = iHealthDevicesManager.getInstance().getHs2Control(mDeviceMac);
control.getBattery();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (HsProfile.ACTION_BATTERY_HS.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt(HsProfile.BATTERY_HS);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Get offline data

```java
Hs2Control control = iHealthDevicesManager.getInstance().getHs2Control(mDeviceMac);
control.getOfflineData() 
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (HsProfile.ACTION_HISTORICAL_DATA_COMPLETE_HS.equals(action)) {
            try {
                JSONArray historyArr = new JSONArray(message);
                for (int i = 0; i < historyArr.length(); i++) {
                    JSONObject obj = historyArr.getJSONObject(i);
                    String measureTs = obj.getString(HsProfile.MEASUREMENT_DATE_HS);
                    String weight    = obj.getString(HsProfile.WEIGHT_HS);
                 
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Specify Online Users

```java
Hs2Control control = iHealthDevicesManager.getInstance().getHs2Control(mDeviceMac);
/*
 * @param unit 1 kg; 2 lb; 3 st
 * @param userId user identify number
 */
control.measureOnline(int unit, int userId)
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (HsProfile.ACTION_LIVEDATA_HS.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                String weight = obj.getString(HsProfile.DATA_LIVEDATA_HSWEIGHT);

            } catch (JSONException e) {
                e.printStackTrace();
            }
        } else if (HsProfile.ACTION_ONLINE_RESULT_HS.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                String weight = obj.getString(HsProfile.WEIGHT_HS);

            } catch (JSONException e) {
                e.printStackTrace();
            }
        } 
    }
}
```

### Disconnect the HS2

```java
Hs2Control control = iHealthDevicesManager.getInstance().getHs2Control(mDeviceMac);
control.disconnect();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
     @Override
    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { 
        
    }
}
```
