---
title: BP3L
sidebar_position: 1
---

## Connection workflow

![bp3l connection](/bp3l_connection_workflow_android.png)

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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BP3L);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for BP3L devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BP3L);
```

### 3.Connect to BP3L devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BP3L)

Bp3lControl control = iHealthDevicesManager.getInstance().getBp3lControl(mDeviceMac);
```

## API reference

### Get the device battery

```java
Bp3lControl control = iHealthDevicesManager.getInstance().getBp3lControl(mDeviceMac);
control.getBattery();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_BATTERY_BP.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt(BpProfile.BATTERY_BP);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Start a measurement

When you call function **startMeasure()**, you will receive a series of actions:

1. **BpProfile.ACTION_ZOREING_BP**

2. **BpProfile.ACTION_ZOREOVER_BP**

3. **BpProfile.ACTION_ONLINE_PRESSURE_BP**

4. **BpProfile.ACTION_ONLINE_PULSEWAVE_BP**

5. **BpProfile.ACTION_ONLINE_RESULT_BP**


```java
Bp3lControl control = iHealthDevicesManager.getInstance().getBp3lControl(mDeviceMac);
control.startMeasure();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_ZOREING_BP.equals(action)) {
           Log.i("The Bp monitor is proparing for measurement.");

        } else if (BpProfile.ACTION_ZOREOVER_BP.equals(action)) {
           Log.i("The Bp monitor is ready for measurement.");

        } else if (BpProfile.ACTION_ONLINE_PRESSURE_BP.equals(action)) {
            try {
                int pressure = obj.getInt(BpProfile.BLOOD_PRESSURE_BP);
            } catch(JSONException e) {
                e.printStackTrace();
            }
            
        } else if (BpProfile.ACTION_ONLINE_PULSEWAVE_BP.equals(action)) {
            try {
               JSONObject obj = new JSONObject(message);
               int pressure = obj.getInt(BpProfile.BLOOD_PRESSURE_BP);
               Sting wave = obj.getString(BpProfile.PULSEWAVE_BP);
               Boolean heartbeat = obj.getBoolean(BpProfile.FLAG_HEARTBEAT_BP);
            } catch(JSONException e) {
                e.printStackTrace();
            }
            
        } else if (BpProfile.ACTION_ONLINE_RESULT_BP.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int highBloodPressure = obj.getInt(BpProfile.HIGH_BLOOD_PRESSURE_BP);
                int lowBloodPressure  = obj.getInt(BpProfile.LOW_BLOOD_PRESSURE_BP);
                int pulse = obj.getInt(BpProfile.PULSE_BP);
                int ahr   = obj.getBoolean(BpProfile.MEASUREMENT_AHR_BP);
                int hsd   = obj.getBoolean(BpProfile.MEASUREMENT_HSD_BP);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } 
    } 
}
```

### Stop measurement

```java
Bp3lControl control = iHealthDevicesManager.getInstance().getBp3lControl(mDeviceMac);
control.getDeviceInfo();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_INTERRUPTED_BP.equals(action)) {
            Log.i("The measurement is stop")
        }
    } 
}
```
