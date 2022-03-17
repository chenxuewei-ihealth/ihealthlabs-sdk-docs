---
title: BP5S
sidebar_position: 3
---

## WorkFlow

1. Scan and connect BP5S blood pressure monitor.

2. BP5S support online measurement and offline measurement.

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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BP5S);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for BP5S devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BP5S);
```

### 3.Connect to BP5S devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BP5S)

Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);
```

## API reference

### Get the device battery

```java
Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);
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
                int status = obj.getInt(BpProfile.BATTERY_STATUS);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Get function of BP5S device

```java
Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);
control.getFunctionInfo();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_FUNCTION_INFORMATION_BP.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int lastOperationStatus     = obj.getInt(BpProfile.FUNCTION_OPERATING_STATE);
                boolean upAirMeasureFlg     = obj.getBoolean(BpProfile.FUNCTION_IS_UPAIR_MEASURE);
                boolean armMeasureFlg       = obj.getBoolean(BpProfile.FUNCTION_IS_ARM_MEASURE);
                boolean haveAngleSensorFlg  = obj.getBoolean(BpProfile.FUNCTION_HAVE_ANGLE_SENSOR);
                boolean havePowerOffFlg     = obj.getBoolean(BpProfile.FUNCTION_HAVE_POWER_OFF);
                boolean haveOfflineFlg      = obj.getBoolean(BpProfile.FUNCTION_HAVE_OFFLINE);
                boolean userCanDeleteMemoryFlg = obj.getBoolean(BpProfile.FUNCTION_USER_CAN_DELETE_MEMORY);
                boolean haveHSDFlg             = obj.getBoolean(BpProfile.FUNCTION_HAVE_HSD);
                boolean haveBodyMovementFlg    = obj.getBoolean(BpProfile.FUNCTION_HAVE_BODY_MOVEMENT);
                boolean memoryGroup            = obj.getBoolean(BpProfile.FUNCTION_MEMORY_GROUP);
                
                boolean haveReconnectFlg = obj.getBoolean(BpProfile.FUNCTION_HAVE_RECONNECT);
                boolean ReonnectOpenFlg  = obj.getBoolean(BpProfile.FUNCTION_RECONNECT_OPEN);

                boolean haveOfflineMeasureSettingFlg = obj.getBoolean(BpProfile.FUNCTION_HAVE_MEASURE_OFFLINE);
                boolean OfflineMeasureOpenFlg        = obj.getBoolean(BpProfile.FUNCTION_MEASURE_OFFLINE_OPEN);
                boolean haveUnitSettingFlg           = obj.getBoolean(BpProfile.FUNCTION_HAVE_SHOW_UNIT_SETTING);
                boolean unitSettingFlg               = obj.getBoolean(BpProfile.FUNCTION_SHOW_UNIT);
                boolean blueToothOpenFlg             = obj.getBoolean(BpProfile.FUNCTION_BLUETOOTH_OPEN_MODE);
                boolean ifABIFlg                     = obj.getBoolean(BpProfile.FUNCTION_IF_ABI_MACHINE);
                boolean upperOrLowerMachineFlg       = obj.getBoolean(BpProfile.FUNCTION_LOWER_OR_UPPER_MACHINE);
                boolean limbsSimultaneousMeasureFlg  = obj.getBoolean(BpProfile.FUNCTION_LIMBS_SIMULTANEOUS_MEASURE);
                boolean leftOrRightMachineFlg        = obj.getBoolean(BpProfile.FUNCTION_LEFT_OR_RIGHT_LIMB_MACHINE);

                int maxMemoryCapacity = obj.getInt(BpProfile.FUNCTION_MAX_MEMORY_CAPACITY);

            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Set the BP5S mode

```java
Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);
/**
 * BpProfile.STATUS_MODE_TO_B: On-line measurement only, connecting bluetooth manually.
 * BpProfile.STATUS_MODE_TO_C: On-line and off-line measurement,connecting bluetooth often.
 */
control.setMode(int mode);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_SET_MODE.equals(action)) {
            
        }
    } 
}
```

### Set the BP5S display unit

```java
Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);
/**
 * BpProfile.STATUS_UNIT_DISPLAY_MMHG
 * BpProfile.STATUS_UNIT_DISPLAY_KPA
 */
control.setUnitDisplay(int type);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_SHOW_UNIT_DISPLAY.equals(action)) {
            
        }
    } 
}
```

### Get the number of history data

```java
Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);
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
Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);
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
```

### Start a measurement

```java
Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);
control.startMeasure();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (BpProfile.ACTION_ZOREING_BP.equals(action)) {
           
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
Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);
control.getDeviceInfo();
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

### Disconnect BP5S device

```java
Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);
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
