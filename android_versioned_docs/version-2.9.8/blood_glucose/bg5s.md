---
title: BG5S
sidebar_position: 4
---

## WorkFlow

1. Scan and connect BG5S blood pressure monitor.

2. BG5S only support online measurement.

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
    public void onDeviceNotify(String mac, String deviceType, String action, String message) { }
}
int callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BG5S);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for BG5S devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BG5S);
```

### 3.Connect to BG5S devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BG5S)
Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);
```

## API reference

### Get status information from BG5S

```java
Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);
control.getStatusInfo();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg5sProfile.ACTION_GET_STATUS_INFO.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int batteryLevel = obj.getInt(Bg5sProfile.INFO_BATTERY_LEVEL);
                String timeStr = obj.getString(Bg5sProfile.INFO_TIME);
                int timeZone = obj.getInt(Bg5sProfile.INFO_TIMEZONE);
                int usedStrip = obj.getInt(Bg5sProfile.INFO_USED_STRIP);
                int offlineDataNum = obj.getInt(Bg5sProfile.INFO_OFFLINE_DATA_NUM);
                int mCodeVersionBlood = obj.getInt(Bg5sProfile.INFO_CODE_VERSION_BLOOD);
                int mCodeVersionCTL = obj.getInt(Bg5sProfile.INFO_CODE_VERSION_CTL);
                int unit = obj.getInt(Bg5sProfile.INFO_UNIT);

            } catch (JSONException e) {
                e.printStackTrace();
            }    
        }
    } 
}
```

### Set offline measurement mode

```java
Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);
control.getStatusInfo();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg5sProfile.ACTION_SET_OFFLINE_MEASUREMENT_MODE.equals(action)) { }
    } 
}
```

### Set time to BG5 device

```java
Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);
control.setTime(Date date, float timeZone);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg5sProfile.ACTION_SET_TIME.equals(action)) {
           
        } 
    } 
}
```

### Set unit to BG5S device

```java
Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);
/**
 * @param unitType the unit type set to BG5S. Can be one of
 *                 {@link Bg5sProfile#UNIT_MMOL}  or
 *                 {@link Bg5sProfile#UNIT_MG}
 */
control.setUnit(int type);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg5sProfile.ACTION_SET_UNIT.equals(action)) {
            
        } 
    } 
}
```

### Set BG5S display mode

```java
Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);
/**
 * @param unitType the unit type set to BG5S. Can be one of
 *                 {@link Bg5sProfile#UNIT_MMOL}  or
 *                 {@link Bg5sProfile#UNIT_MG}
 */
control.setDisplayMode(boolean mode);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg5sProfile.ACTION_SET_DISPLAY_MODE.equals(action)) {
           
        } 
    } 
}
```

### Delete used strip of BG5S

```java
Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);
control.deleteUsedStrip();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg5sProfile.ACTION_DELETE_USED_STRIP.equals(action)) {
           
        } 
    } 
}
```

### Delete offline data of BG5S

```java
Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);
control.deleteOfflineData();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg5sProfile.ACTION_DELETE_USED_STRIP.equals(action)) {
           
        } 
    } 
}
```

### Get offline data from BG5S

```java
Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);
control.getOfflineData();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg5sProfile.ACTION_GET_OFFLINE_DATA.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                JSONArray historyArr = obj.getgetJSONArray(Bg5sProfile.OFFLINE_DATA);
                for (int i = 0; i < historyArr.length(); i++) {
                    JSONObject obj = historyArr.getJSONObject(i);
                    boolean dateStr = obj.getBoolean(Bg5sProfile.DATA_TIME_PROOF);
                    int value = obj.getString(Bg5sProfile.DATA_VALUE);
                    String time = obj.getString(Bg5sProfile.DATA_MEASURE_TIME);
                    String timezone = obj.getString(Bg5sProfile.DATA_MEASURE_TIMEZONE);
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Start measure

```java
Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);
/**
 * @param measureType the measure type set to BG5S.Can be one of
 *                    {@link Bg5sProfile#MEASURE_BLOOD}  or
 *                    {@link Bg5sProfile#MEASURE_CTL}
 */
control.startMeasure(int measureType);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg5sProfile.ACTION_START_MEASURE.equals(action)) {
            
        } else if (Bg5sProfile.ACTION_STRIP_IN.equals(action)) {

        } else if (Bg5sProfile.ACTION_GET_BLOOD.equals(action)) {

        } else if (Bg5sProfile.ACTION_RESULT.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int value = obj.getInt((Bg5sProfile.RESULT_VALUE);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } else if (Bg5sProfile.ACTION_STRIP_OUT.equals(action)) {

        }
    } 
}
```

### Close Bluetooth

```java
Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);
control.closeBluetooth();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg5sProfile.ACTION_CLOSE_BLUETOOTH.equals(action)) {
            
        }
    } 
}
```

### Correct the measurement time of the offline data according to the flag and return in format JSON String

```java
Bg5Control control = iHealthDevicesManager.getInstance().getBg5Control(mDeviceMac);

// Return value
String message = control.adjustOfflineData(String timeString, String originData);
```
