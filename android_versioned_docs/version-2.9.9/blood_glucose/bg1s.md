---
title: BG1S
sidebar_position: 2
---

## WorkFlow

1. Scan and connect BG1S blood glucose monitor.

2. BG1S only support online measurement.

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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BG1S);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for BG1S devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BG1S);
```

### 3.Connect to BP3L devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BG1S)

Bp3lControl control = iHealthDevicesManager.getInstance().getBp3lControl(mDeviceMac);
```

## API reference

### Get the measure mode of BG1S

```java
Bg1sControl control = iHealthDevicesManager.getInstance().getBg1sControl(mDeviceMac);
control.getDeviceStatus();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg1sProfile.ACTION_GET_DEVICE_INFO.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt(Bg1sProfile.INFO_BATTERY_BG1S);
                int bloodCode = obj.getInt(Bg1sProfile.INFO_VERSION_CODE_BLOOD_BG1S);
                int ctlCode = obj.getInt(Bg1sProfile.INFO_VERSION_CODE_CTL_BG1S);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Set the measure mode of BG1S

```java
/**
 * set the measure mode of Bg1s :
 * <ul><li>0:Blood mode</li></ul>
 * <ul><li>1:CTL mode.</li></ul> 
 **/
Bg1sControl control = iHealthDevicesManager.getInstance().getBg1sControl(mDeviceMac);
control.setMeasureMode(int mode);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg1sProfile.ACTION_SET_MEASURE_MODE.equals(action)) {
           try {
                JSONObject obj = new JSONObject(message);
                int status = obj.getInt(Bg1sProfile.OPERATION_STATUS);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Get the device code of BG1S

```java
Bg1sControl control = iHealthDevicesManager.getInstance().getBg1sControl(mDeviceMac);
control.queryDeviceCode();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg1sProfile.ACTION_CHECK_CODE.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int bloodCodeCheckResult = obj.getInt(Bg1sProfile.BLOOD_CHECK_CODE_RESULT);
                int bloodCode = obj.getInt(Bg1sProfile.BLOOD_CODE);
                int bloodCodeCRC = obj.getInt(Bg1sProfile.BLOOD_CODE_CRC);
                int ctlCheckResult = obj.getInt(Bg1sProfile.CTL_CHECK_CODE_RESULT);
                int ctlCode = obj.getInt(Bg1sProfile.CTL_CODE);
                int ctlCodeCRC = obj.getInt(Bg1sProfile.CTL_CODE_CRC);

            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Set the device code of BG1S

```java
Bg1sControl control = iHealthDevicesManager.getInstance().getBg1sControl(mDeviceMac);
control.setDeviceCode(byte[] code);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg1sProfile.ACTION_CHECK_CODE.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int status = obj.getInt(Bg1sProfile.STRIP_INSERTION_STATUS);
                String describe = obj.getString(Bg1sProfile.OPERATION_DESCRIBE);

            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```
