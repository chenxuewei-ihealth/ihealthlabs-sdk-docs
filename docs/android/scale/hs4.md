---
title: HS4
sidebar_position: 3
---

## WorkFlow

1. Scan and connect HS4 scale.

2. HS4 support online measurement and offline measurement.

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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_HS4);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for HS4 devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.HS4);
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

### 3.Connect to HS4 devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_HS4)
Hs4Control control = iHealthDevicesManager.getInstance().getHs4Control(mDeviceMac);
```

## API reference

### Get offline data

```java
Hs4Control control = iHealthDevicesManager.getInstance().getHs4Control(mDeviceMac);
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

### Start a online measurement

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

### Disconnect the HS4

```java
Hs4Control control = iHealthDevicesManager.getInstance().getHs4Control(mDeviceMac);
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
