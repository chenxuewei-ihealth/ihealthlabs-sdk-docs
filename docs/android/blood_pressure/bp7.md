---
title: BP7
sidebar_position: 4
---

## WorkFlow

1. Scan and connect BP7 blood pressure monitor.

2. BP7 support online measurement and offline measurement.

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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BP7);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for BP7 devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BP7);
```

### 3.Connect to BP7 devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BP7)

Bp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);
```

## API reference

### Get the device battery

```java
Bp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);
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

### Enable BP7 to be measured offline

```java
Bp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);
control.enableOffline();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_ENABLE_OFFLINE_BP.equals(action)) {
            
        }
    } 
}
```

### Disable BP7 to be measured offline

```java
Bp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);
control.disableOfflineMeasure();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_DISENABLE_OFFLINE_BP.equals(action)) {
           
        }
    } 
}
```

### Get the number of history data

```java
Bp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);
control.getOfflineNum();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_HISTORICAL_NUM_BP.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int count = obj.getInt(BpProfile.HISTORICAL_NUM_BP);

            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Get history data

```java
Bp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);
control.getOfflineData();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_HISTORICAL_NUM_BP.equals(action)) {
            try {
                JSONArray historyArr = new JSONArray(message);
                for (int i = 0; i < historyArr.length(); i++) {
                    JSONObject obj = historyArr.getJSONObject(i);
                    String dateStr = obj.getString(BpProfile.MEASUREMENT_DATE_BP);
                    int sys = obj.getString(BpProfile.HIGH_BLOOD_PRESSURE_BP);
                    int dia = obj.getString(BpProfile.LOW_BLOOD_PRESSURE_BP);
                    int pulse = obj.getString(BpProfile.PULSE_BP);
                    int ahr = obj.getString(BpProfile.MEASUREMENT_AHR_BP);
                    int hsd = obj.getString(BpProfile.MEASUREMENT_HSD_BP);
              
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
        }
    } 
}
```

### Start a measurement

```java
Bp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);
control.startMeasure();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_ANGLE_BP.equals(action)) {
            try {
                int arm = obj.getInt(BpProfile.WHICH_ARM);
                int angle = obj.getInt(BpProfile.ANGLE_BP);
                if (angle < 30) {
                    control.conformAngle();
                }
            } catch(JSONException e) {
                e.printStackTrace();
            }
        } else if (BpProfile.ACTION_ZOREING_BP.equals(action)) {
           
        } else if (BpProfile.ACTION_ZOREOVER_BP.equals(action)) {
            
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
Bp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);
control.interruptMeasure();
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

### Disconnect Bp7 device

```java
Bp7Control control = iHealthDevicesManager.getInstance().getBp7Control(mDeviceMac);
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
