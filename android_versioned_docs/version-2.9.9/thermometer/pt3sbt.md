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
