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
BroadcastReceiver mBroadcastReceiver = new BroadcastReceiver() {
    @Override
    public void onReceive(Context context, Intent intent) { 
        String action = intent.getAction();
        if (action.equals(Bg1Profile.ACTION_BG1_SENDCODE_RESULT)) {
            int flag = intent.getIntExtra(Bg1Profile.BG1_SENDCODE_RESULT, -1);
            Log.i( "sendCode flag = " + flag);
            if (flag == 0) {
                Log.i( "sendCode success,ready to measure");
            } else {
                Log.i( "sendCode failed");
                mBg1Control.disconnect();
            }
        }
    }
}
```

### Start a measurement

```java
// Return value
BroadcastReceiver mBroadcastReceiver = new BroadcastReceiver() {
    @Override
    public void onReceive(Context context, Intent intent) { 
        String action = intent.getAction();
        if (action.equals(Bg1Profile.ACTION_BG1_MEASURE_STRIP_IN)) {
            Log.i( "test strip in");

        } else if (action.equals(Bg1Profile.ACTION_BG1_MEASURE_GET_BLOOD)) {
            Log.i( "drop blood");

        } else if (action.equals(Bg1Profile.ACTION_BG1_MEASURE_RESULT)) {
           try {
                JSONObject obj = new JSONObject(message);
                int value = obj.getInt(Bg1Profile.BG1_MEASURE_RESULT);
            } catch (JSONException e) {
                e.printStackTrace();
            }

        } else if (action.equals(Bg1Profile.ACTION_BG1_MEASURE_ERROR)) {
            try {
                JSONObject obj = new JSONObject(message);
                int error_id = obj.getInt(Bg1Profile.BG1_MEASURE_ERROR);
                String error_message = obj.getInt(Bg1Profile.BG1_MEASURE_ERROR_DESCRIPTION);
            } catch (JSONException e) {
                e.printStackTrace();
            }

        } else if (action.equals(Bg1Profile.ACTION_BG1_MEASURE_STRIP_OUT)) {
            Log.i( "test strip out");
        }
    }
}
```
