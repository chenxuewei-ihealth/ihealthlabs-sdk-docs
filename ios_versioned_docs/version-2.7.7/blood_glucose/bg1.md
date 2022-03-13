---
title: BG1
sidebar_position: 1
---

## WorkFlow

1. Scan and connect BG1 blood pressure monitor.

2. BG1 only support online measurement.

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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BG1);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for BG1 devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BG1);
```

### 3.Connect to BG1 devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BG1)

Bg1Control control = iHealthDevicesManager.getInstance().getBg1Control(mDeviceMac);
```

## API reference

### Parse bottle Info of the QRCode

```java
// Return value: {"bottleInfo":[{"bottleId":"18882266","overDate":"2015-06-26","stripNum":"25"}]}
String info = Bg1Control.getBottleInfoFromQR(String QRCode);
```

### Send code to BG1 device

```java
Bg1Control control = iHealthDevicesManager.getInstance().getBg1Control(mDeviceMac);
control.sendCode(String QRCode, int stripType, int measureType)
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_INTERRUPTED_BP.equals(action)) {
            
        }
    } 
}
```
