---
title: PO1
sidebar_position: 1
---

## WorkFlow

1. Scan and connect PO1 device.

2. PO1 only support online measurement.

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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_PO1);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for PO1 devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.PO1);
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

### 3.Connect to PO1 devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_PO1)
Po1Control control = iHealthDevicesManager.getInstance().getPo1Control(mDeviceMac);
```

## API reference

### Open buzzer for PO1 device

```java
Po1Control control = iHealthDevicesManager.getInstance().getPo1Control(mDeviceMac);
control.openBuzzer(boolean isopened);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Po1Profile.ACTION_SET_BUZZER.equals(action)) {
        
        }
    } 
}
```

### Get battery for PO1 device

```java
Po1Control control = iHealthDevicesManager.getInstance().getPo1Control(mDeviceMac);
control.getBattery() 
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Po1Profile.ACTION_GET_BATTERY.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt(Po1Profile.BATTERY);

            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Data Notify

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Po1Profile.ACTION_BO_MEASUREMENT.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int blood_oxygen = obj.getInt(Po1Profile.BLOOD_OXYGEN);
                int pulse = obj.getInt(Po1Profile.PULSE);
                float pulse_porce = obj.getFloat(Po1Profile.PULSE_FORCE);
                int pi = obj.getInt(Po1Profile.PI);

            } catch (JSONException e) {
                e.printStackTrace();
            }
        } 
    }
}
```

### Disconnect the PO1

```java
Po1Control control = iHealthDevicesManager.getInstance().getPo1Control(mDeviceMac);
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
