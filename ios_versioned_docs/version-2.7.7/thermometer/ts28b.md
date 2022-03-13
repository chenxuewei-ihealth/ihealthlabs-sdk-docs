---
title: TS28B
sidebar_position: 2
---

## WorkFlow

1. Scan and connect PO3 scale.

2. PO3 support online measurement and offline measurement.

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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_PO3);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for PO3 devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.PO3);
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

### 3.Connect to PO3 devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_PO3)
Po3Control control = iHealthDevicesManager.getInstance().getPo3Control(mDeviceMac);
```

## API reference

### Get the PO3 battery status

```java
Po3Control control = iHealthDevicesManager.getInstance().getPo3Control(mDeviceMac);
control.getBattery();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (PoProfile.ACTION_BATTERY_PO.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt(PoProfile.BATTERY_PO);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Start real-time measurement

```java
Po3Control control = iHealthDevicesManager.getInstance().getPo3Control(mDeviceMac);
control.startMeasure() 
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
