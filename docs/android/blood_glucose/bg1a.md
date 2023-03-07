---
title: BG1A
sidebar_position: 5
---

## Connection workflow

1. Scan and connect BG1A blood glucose monitor.

2. BG1A only support online measurement.

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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BG1A);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for BG1A devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BG1A);
```

### 3.Connect to BG1A devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BG1A)

Bg1aControl control = iHealthDevicesManager.getInstance().getBg1aControl(mDeviceMac);
```

## Connection to device

## API reference

### Get the BG1A IDPS information.

```java
Bg1sControl control = iHealthDevicesManager.getInstance().getBg1aControl(mDeviceMac);
control.getIDPS();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg1aProfile.ACTION_INFO_IDPS.equals(action)) {
            try {
                JSONObject obj       = new JSONObject(message);
                String protocol      = obj.getString(iHealthDevicesIDPS.PROTOCOLSTRING);
                String accessory     = obj.getString(iHealthDevicesIDPS.ACCESSORYNAME);
                String firmware      = obj.getString(iHealthDevicesIDPS.FIRMWAREVERSION);
                String hardware      = obj.getString(iHealthDevicesIDPS.HARDWAREVERSION);
                String manufacturer  = obj.getString(iHealthDevicesIDPS.MANUFACTURER);
                String mode_number   = obj.getString(iHealthDevicesIDPS.MODENUMBER);
                String serial_number = obj.getString(iHealthDevicesIDPS.SERIALNUMBER);

            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Get the BG1A battery level.

```java
Bg1aControl control = iHealthDevicesManager.getInstance().getBg1aControl(mDeviceMac);
control.getBattery();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg1aProfile.ACTION_BATTERY_BG1A.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery_level = obj.getInt(Bg1aProfile.INFO_BATTERY_BG1A);

            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Set the BG1A measurement mode.

```java
/**
 * 0: Blood mode
 * 1: CTL mode, CTL: control solution
 **/

Bg1aControl control = iHealthDevicesManager.getInstance().getBg1aControl(mDeviceMac);
control.setMeasureMode(int mode);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg1aProfile.ACTION_SET_MEASURE_MODE.equals(action)) {
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

### Notify the measurement workflow and result.

No need to call any API, just listen to this event.

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg1aProfile.ACTION_STRIP_INSERTION_STATUS.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int status = obj.getInt((Bg1aProfile.STRIP_INSERTION_STATUS);
                if (1 == status) {
                    Log.i("test strip in");
                } else if (2 == status) {
                    Log.i("test strip out");
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }

        } else if (Bg1aProfile.ACTION_GET_BLOOD.equals(action)) {
            Log.i("test drop blood");

        } else if (Bg1aProfile.ACTION_MEASURE_RESULT.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                /**
                  * 0: Blood mode
                  * 1: CTL mode
                 **/
                int mode  = obj.getInt(Bg1aProfile.MEASURE_MODE);
                int value = obj.getInt(Bg1aProfile.MEASURE_RESULT);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } 
    } 
}
```
