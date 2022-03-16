---
title: ECG3USB
sidebar_position: 2
---

## WorkFlow

1. Scan and connect ECG3 scale.

2. ECG3 support online measurement.

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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_ECG3);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for ECG3 devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.ECG3);
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

### 3.Connect to ECG3 devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_ECG3)

ECG3Control control = iHealthDevicesManager.getInstance().getECG3Control(mDeviceMac);
```

## API reference

### Get the battery info

```java
ECG3Control control = iHealthDevicesManager.getInstance().getECG3Control(mDeviceMac);
control.getBattery();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (ECG3Profile.ACTION_GET_BATTERY.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt(HsProfile.BATTERY_HS);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Set time to ECG3

```java
ECG3Control control = iHealthDevicesManager.getInstance().getECG3Control(mDeviceMac);
control.getBattery();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (ECG3Profile.ACTION_SET_TIME.equals(action)) {
            Log.i("set time success")
        }
    } 
}
```

### Start online measurement

```java
ECG3Control control = iHealthDevicesManager.getInstance().getECG3Control(mDeviceMac);
control.startMeasure() 
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (ECG3Profile.ACTION_START_ONLINE_MEASUREMENT.equals(action)) {
            Log.i("start a measurement");

        } else if (ECG3Profile.ACTION_SYNC_ONLINE_DATA.equals(action)) {
            try {
                int heartRate = obj.getInt(ECG3Profile.ONLINE_HR);
                JSONArray arr = new JSONArray(obj.getJSONArray(ECG3Profile.ONLINE_DATA));
                for (int i = 0; i < arr.length(); i++) {
                    Float value = arr.getInt(i);
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }       
        } else if (ECG3Profile.ACTION_STOP_ONLINE_MEASUREMENT.equals(action)) {
            Log.i("stop a measurement");
            
        }
    } 
}
```

### Disconnect the ECG3

```java
ECG3Control control = iHealthDevicesManager.getInstance().getECG3Control(mDeviceMac);
control.disconnect();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
     @Override
    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { 
        if (iHealthDevicesManager.DEVICE_STATE_DISCONNECTED == status) {
            Log.i("The device is disconnected");
        }
    }
}
```
