---
title: TS28B
sidebar_position: 2
---

## WorkFlow

1. Scan and connect TS28B.

2. TS28B support online measurement.

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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_TS28B);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for TS28B devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.TS28B);
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

### 3.Connect to TS28B devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_TS28B)
TS28BControl control = iHealthDevicesManager.getInstance().getTS28BControl(mDeviceMac);
```

## API reference

### Listen the measurement notification

```java
TS28BControl control = iHealthDevicesManager.getInstance().getTS28BControl(mDeviceMac);
control.getMeasurement();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (TS28BProfile.ACTION_MEASUREMENT_RESULT.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int result = obj.getInt(TS28BProfile.RESULT);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```
