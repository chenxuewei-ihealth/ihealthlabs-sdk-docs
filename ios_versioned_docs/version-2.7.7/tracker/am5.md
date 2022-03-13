---
title: AM5
sidebar_position: 4
---

### 1.Listen to device notify

```java
int callbackId = iHealthDevicesManager.getInstance().registerClientCallback(new iHealthDevicesCallback() {
    
    @Override
    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }

    @Override
    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { }

    @Override
    public void onScanError(String reason, long latency) { }

    @Override
    public void onScanFinish() { }
});

iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(mClientCallbackId, iHealthDevicesManager.TYPE_AM5);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(int clientCallbackId, String... macs)
```

### 2.Scan for AM5 devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.AM5);
```

### 3.Connect to AM5 devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_AM5)

Am5Control control = iHealthDevicesManager.getInstance().getAm5Control(mDeviceMac);
```

## API reference

### Binding apps and devices

```java
Am5Control control = iHealthDevicesManager.getInstance().getAm5Control(mDeviceMac);
control.bindDevice();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (OtherDeviceProfile.ACTION_USER_BIND.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                //status - 3: success 4: fail
                int status = obj.getInt(PoProfile.STATUS_SUCCESS);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### UnBind apps and devices

```java
Am5Control control = iHealthDevicesManager.getInstance().getAm5Control(mDeviceMac);
control.unBindDevice();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (OtherDeviceProfile.ACTION_USER_UNBIND.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                //status - 3: success 4: fail
                int status = obj.getInt(PoProfile.STATUS_SUCCESS);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Get user id

```java
Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);
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

### Gets whether it has been bound

```java
Am5Control control = iHealthDevicesManager.getInstance().getAm5Control(mDeviceMac);
boolean isBind = control.isBind();
```

### Get information of the device

```java
Am5Control control = iHealthDevicesManager.getInstance().getAm5Control(mDeviceMac);
control.getBasicInfo();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (OtherDeviceProfile.ACTION_BASIC_INFO.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int battery = obj.getInt(OtherDeviceProfile.BASIC_BATTSTATUS);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Get the time on the phone and set it to the device

```java
Am5Control control = iHealthDevicesManager.getInstance().getAm5Control(mDeviceMac);
control.getLiveData();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (OtherDeviceProfile.ACTION_SET_TIME.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                boolean result = obj.getBoolean("result");
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Get the live data of the device

```java
Am5Control control = iHealthDevicesManager.getInstance().getAm5Control(mDeviceMac);
control.getLiveData();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (OtherDeviceProfile.ACTION_LIVE_DATA.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int step = obj.getInt("totalStep");
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Sync health data from device

```java
Am5Control control = iHealthDevicesManager.getInstance().getAm5Control(mDeviceMac);
control.syncHealthData();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (OtherDeviceProfile.ACTION_SYNC_HEALTH_DATA.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                // 0: start, 1: stop, 2: doing, 3: success, 4: fail
                int status = obj.getInt(OtherDeviceProfile.OPERATION_STATUS);
                if (2 == status || 3 == status || 4 == status) {
                    int progress = obj.getInt(OtherDeviceProfile.PROGRESS);
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } else if (OtherDeviceProfile.ACTION_SYNC_HEALTH_DATA_SPORT.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                JSONArray arr = obj.getJSONArray("items");
                int year  = obj.getInt("year");
                Int month = obj.getInt("month");
                int day   = obj.getInt("day");
                for (int i = 0; i < arr.length(); i++) {
                    int step = arr.getJSONObject(i).getInt("stepCount");
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } else if (OtherDeviceProfile.ACTION_SYNC_HEALTH_DATA_SLEEP.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                JSONArray arr = obj.getJSONArray("items");
                int year  = obj.getInt("year");
                Int month = obj.getInt("month");
                int day   = obj.getInt("day");
                int sleepEndedTimeHour = obj.getInt("sleepEndedTimeH");
                int sleepEndedTimeMinute = obj.getInt("sleepEndedTimeM");
                int lightSleepMinutes = obj.getInt("lightSleepMinutes");
                int totalSleepMinutes = obj.getInt("totalSleepMinutes");
                for (int i = 0; i < arr.length(); i++) {
                    int durationMinute = arr.getJSONObject(i).getInt("offsetMinute");
                    int sleepStatus = arr.getJSONObject(i).getInt("sleepStatus");
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } else if (OtherDeviceProfile.ACTION_SYNC_HEALTH_DATA_HEART_RATE.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                JSONArray arr = obj.getJSONArray("items");
                int offsetMinute = obj.getInt("offsetMinute");
                int year  = obj.getInt("year");
                Int month = obj.getInt("month");
                int day   = obj.getInt("day");
                for (int i = 0; i < arr.length(); i++) {
                    int offsetMinute = arr.getJSONObject(i).getInt("offsetMinute");
                    int heartRaveValue = arr.getJSONObject(i).getInt("HeartRaveValue");
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```
