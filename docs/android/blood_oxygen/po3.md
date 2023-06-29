---
title: PO3
sidebar_position: 2
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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_PO3);
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
Po3Control control = iHealthDevicesManager.getInstance().getPo3Control(mDeviceMac);
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

### Start a measurement

```java
Po3Control control = iHealthDevicesManager.getInstance().getPo3Control(mDeviceMac);
control.startMeasure();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (PoProfile.ACTION_LIVEDA_PO.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);

                int bloodOxygen = obj.getInt(PoProfile.BLOOD_OXYGEN_PO);
                int pulseRate = obj.getInt(PoProfile.PULSE_RATE_PO);
                int pulseStrength = obj.getInt(PoProfile.PULSE_STRENGTH_PO);
                int pi = obj.getInt(PoProfile.PI_PO);
                JSONArray pulseWave = obj.getJSONArray(PoProfile.PULSE_WAVE_PO);
            
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } else if (PoProfile.ACTION_RESULTDATA_PO.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);

                int bloodOxygen = obj.getInt(PoProfile.BLOOD_OXYGEN_PO);
                int pulseRate = obj.getInt(PoProfile.PULSE_RATE_PO);
                int pulseStrength = obj.getInt(PoProfile.PULSE_STRENGTH_PO);
                int pi = obj.getInt(PoProfile.PI_PO);
                JSONArray pulseWave = obj.getJSONArray(PoProfile.PULSE_WAVE_PO);
            
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```


### Get offline data

```java
Po3Control control = iHealthDevicesManager.getInstance().getPo3Control(mDeviceMac);
control.getHistoryData();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (PoProfile.ACTION_NO_OFFLINEDATA_PO.equals(action)) {
            Log.i("", "No offline data");

        } else if (PoProfile.ACTION_OFFLINEDATA_PO.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                JSONArray arr = obj.getJSONArray();
                for (JSONObject obj : arr) {
                    int measureDate = obj.getInt(PoProfile.MEASURE_DATE_PO);
                    int bloodOxygen = obj.getInt(PoProfile.BLOOD_OXYGEN_PO);
                    int pulseRate = obj.getInt(PoProfile.PULSE_RATE_PO);
                    JSONArray pulseWave = obj.getJSONArray(PoProfile.PULSE_WAVE_PO);
                }
            
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Disconnect the PO3

```java
Po3Control control = iHealthDevicesManager.getInstance().getPo3Control(mDeviceMac);
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
