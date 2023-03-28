---
title: PT3SBT
sidebar_position: 3
---
## WorkFlow

1. Scan and connect PT3SBT.

2. PT3SBT support online measurement and offine measurement.

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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_PT3SBT);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for PT3SBT devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.PT3SBT);
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

### 3.Connect to PT3SBT devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_PT3SBT)
PT3SBTControl control = iHealthDevicesManager.getInstance().getPt3sbtDevice(mDeviceMac);
```

## API reference

### Set time for PT3SBT device

```java
Pt3sbtControl control = iHealthDevicesManager.getInstance().getPt3sbtDevice(mDeviceMac);
control.setTime();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Pt3sbtProfile.ACTION_SET_TIME.equals(action)) {
            Log.i("set time success");
        }
    } 
}
```

### Get battery for PT3SBT device

```java
Pt3sbtControl control = iHealthDevicesManager.getInstance().getPt3sbtDevice(mDeviceMac);
control.getBattery();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Pt3sbtProfile.ACTION_GET_BATTERY.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt(Pt3sbtProfile.BATTERY);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Set unit for PT3SBT device

```java
/*
 * @param unit
 * PT3SBT_UNIT.Fahrenheit
 * PT3SBT_UNIT.Centigrade
 */
Pt3sbtControl control = iHealthDevicesManager.getInstance().getPt3sbtDevice(mDeviceMac);
control.setUnit(Pt3sbtProfile.PT3SBT_UNIT unit);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Pt3sbtProfile.ACTION_SET_UNIT.equals(action)) {
            Log.i("set unit success")
        }
    } 
}
```

### Get unit for PT3SBT device

```java
Pt3sbtControl control = iHealthDevicesManager.getInstance().getPt3sbtDevice(mDeviceMac);
control.getUnit();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Pt3sbtProfile.ACTION_GET_UNIT.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int unit = obj.getInt(Pt3sbtProfile.UNIT);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Get count of history data for PT3SBT device

```java
Pt3sbtControl control = iHealthDevicesManager.getInstance().getPt3sbtDevice(mDeviceMac);
control.getHistoryCount();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Pt3sbtProfile.ACTION_GET_HISTORY_COUNT.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int count = obj.getInt(Pt3sbtProfile.COUNT);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Get history data for PT3SBT device

```java
Pt3sbtControl control = iHealthDevicesManager.getInstance().getPt3sbtDevice(mDeviceMac);
control.getHistoryData();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Pt3sbtProfile.ACTION_GET_HISTORY_DATA.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                JSONArray mHistoryArr = obj.getJSONArray(Pt3sbtProfile.HISTORY);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Delete the history data from device

```java
Pt3sbtControl control = iHealthDevicesManager.getInstance().getPt3sbtDevice(mDeviceMac);
control.getBattery();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Pt3sbtProfile.ACTION_DELETE_HISTORY_DATA.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                String status = obj.getString(Pt3sbtProfile.STATUS);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Notify measurement result

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Pt3sbtProfile.ACTION_TEMPERATURE_MEASUREMENT.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int temperature = obj.getString(Pt3sbtProfile.TEMPERATURE);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```
