---
title: NT13B
sidebar_position: 1
---

## WorkFlow

1. Scan and connect NT13B.

2. NT13B support online measurement.

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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_NT13B);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for NT13B devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.NT13B);
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

### 3.Connect to NT13B devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_NT13B)
NT13BControl control = iHealthDevicesManager.getInstance().getNT13BControl(mDeviceMac);
```

## API reference

### Listen the measurement notification

```java
NT13BControl control = iHealthDevicesManager.getInstance().getNT13BControl(mDeviceMac);
control.getMeasurement();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (NT13BProfile.ACTION_MEASUREMENT_RESULT.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int result = obj.getInt(NT13BProfile.RESULT);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```
