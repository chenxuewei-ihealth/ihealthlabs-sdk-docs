---
title: NT13B
sidebar_position: 1
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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_NT13B);
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
NT13BControl control = iHealthDevicesManager.getInstance().getNT13BControl(mDeviceMac);
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
