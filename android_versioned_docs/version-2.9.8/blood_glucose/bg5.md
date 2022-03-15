---
title: BG5
sidebar_position: 3
---

## WorkFlow

1. Scan and connect BG5 blood pressure monitor.

2. BG5 only support online measurement.

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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BG5);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for BG5 devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BG5);
```

### 3.Connect to BG5 devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BG5)

Bg5Control control = iHealthDevicesManager.getInstance().getBg5Control(mDeviceMac);
```

## API reference

### Keep in connection

```java
Bg5Control control = iHealthDevicesManager.getInstance().getBg5Control(mDeviceMac);
control.holdLink();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg5Profile.ACTION_KEEP_LINK.equals(action)) {
            
        }
    } 
}
```

### Set time to BG5 device

```java
Bg5Control control = iHealthDevicesManager.getInstance().getBg5Control(mDeviceMac);
control.startMeasure();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg5Profile.ACTION_SET_TIME.equals(action)) {
           
        } 
    } 
}
```

### Set unit to Bg5 device

```java
Bg5Control control = iHealthDevicesManager.getInstance().getBg5Control(mDeviceMac);
control.setUnit(int type);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg5Profile.ACTION_SET_UNIT.equals(action)) {
            
        } 
    } 
}
```

### Get the Bg5 battery status

```java
Bg5Control control = iHealthDevicesManager.getInstance().getBg5Control(mDeviceMac);
control.getBattery();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg5Profile.ACTION_BATTERY_BG.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt((Bg5Profile.BATTERY_BG);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } 
    } 
}
```

### Start On-line measurement

```java
Bg5Control control = iHealthDevicesManager.getInstance().getBg5Control(mDeviceMac);
/**
 * @param type 1: test with blood; 
 *             2: test with control liquid <br/>
 *             <b>Range:</b> 1, 2
 */
control.startMeasure(int type);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (Bg5Profile.ACTION_BATTERY_BG.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt((Bg5Profile.BATTERY_BG);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } 
    } 
}
```

### Get historical data

```java
Bg5Control control = iHealthDevicesManager.getInstance().getBg5Control(mDeviceMac);
control.getDeviceInfo();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_INTERRUPTED_BP.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt((Bg5Profile.BATTERY_BG);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Delete historical data

```java
Bg5Control control = iHealthDevicesManager.getInstance().getBg5Control(mDeviceMac);
control.getDeviceInfo();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_INTERRUPTED_BP.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt((Bg5Profile.BATTERY_BG);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Set bottle info to Bg5 device

```java
Bg5Control control = iHealthDevicesManager.getInstance().getBg5Control(mDeviceMac);
control.setBottleMessageWithInfo(int stripType, int measureType, String QRCode, int stripNum, String overDate);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_INTERRUPTED_BP.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt((Bg5Profile.BATTERY_BG);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Set bottle info to Bg5 device

```java
Bg5Control control = iHealthDevicesManager.getInstance().getBg5Control(mDeviceMac);
control.getBottleMessage();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if Bg5Profile.ACTION_GET_CODEINFO.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt((Bg5Profile.BATTERY_BG);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Send bottleId to current BG5 device

```java
Bg5Control control = iHealthDevicesManager.getInstance().getBg5Control(mDeviceMac);
control.setBottleMessageWithInfo(int stripType, int measureType, String QRCode, int stripNum, String overDate);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_INTERRUPTED_BP.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt((Bg5Profile.BATTERY_BG);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Get bottleId from current BG5 device

```java
Bg5Control control = iHealthDevicesManager.getInstance().getBg5Control(mDeviceMac);
control.setBottleMessageWithInfo(int stripType, int measureType, String QRCode, int stripNum, String overDate);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_INTERRUPTED_BP.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt((Bg5Profile.BATTERY_BG);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Parse bottle Info of the QRCode

```java
Bg5Control.getBottleInfoFromQR(String QRCode);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_INTERRUPTED_BP.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt((Bg5Profile.BATTERY_BG);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```
