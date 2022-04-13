---
title: AM3
sidebar_position: 1
---

## Connection workflow

![am3 connection](/am3_connection_workflow_android.png)

### 1.Add device notify listener

```java
int callbackId = iHealthDevicesManager.getInstance().registerClientCallback(new iHealthDevicesCallback() {
    
    @Override
    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) {

    }

    @Override
    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) {

    }

    @Override
    public void onScanError(String reason, long latency) {
        
    }

    @Override
    public void onScanFinish() {
       
    }
});

iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(mClientCallbackId, iHealthDevicesManager.TYPE_AM3);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(int clientCallbackId, String... macs)
```

### 2.Scan for AM3 device

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.AM3);
```

### 3.Connect to AM3 device

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_AM3)

Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);
```

## Measurement workflow



## API reference

### Get AM device's IDPS information

```java
Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);
/**
 * Return Value: {"protocolstring":"com.jiuan.AMV12","accessoryname":"AM4","firmwareversion":"1.3.8",*"hardwareversion":"1.0.0","manufacture":"iHealth","serialnumber":"004D32079148","modenumber":"AM4 11070"}
 */
String IDPSMessage = control.getIdps();
```

### Reset the device

```java
Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);
/**
 * @param id User's ID
 */
control.reset(long id);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (AmProfile.ACTION_RESET_AM.equals(action)) {
            int confirm = obj.getInt(AmProfile.ACTION_RESET_AM);
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
        if (AmProfile.ACTION_USERID_AM.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int userId = obj.getInt(AmProfile.USERID_AM);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Get alarms' count

```java
Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);
control.getAlarmClockNum();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (AmProfile.ACTION_GET_ALARMNUM_AM.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int alarmNum = obj.getInt(AmProfile.GET_ALARMNUM_AM);
                JSONArray arrId = obj.getJSONArray(AmProfile.GET_ALARMNUM_ID_AM);

            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Get alarm information by id

```java
Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);
control.getAlarmClockDetail(int... ids);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (AmProfile.ACTION_GET_ALARMINFO_AM.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                JSONArray alarmInfos = obj.getJSONArray(AmProfile.GET_ALARM_CLOCK_DETAIL);
                for (int i = 0; i < alarmInfos.length(); i++) {
                    JSONObject item = alarmInfos.get(i);
                    boolean sunday    = item.getBoolean(AmProfile.GET_ALARM_WEEK_SUNDAY_AM);
                    boolean monday    = item.getBoolean(AmProfile.GET_ALARM_WEEK_MONDAY_AM);
                    boolean tuesday   = item.getBoolean(AmProfile.GET_ALARM_WEEK_TUESDAY_AM);
                    boolean wednesday = item.getBoolean(AmProfile.GET_ALARM_WEEK_WEDNESDAY_AM);
                    boolean thursday  = item.getBoolean(AmProfile.GET_ALARM_WEEK_THURSDAY_AM);
                    boolean friday    = item.getBoolean(AmProfile.GET_ALARM_WEEK_FRIDAY_AM);
                    boolean saturday  = item.getBoolean(AmProfile.GET_ALARM_WEEK_SATURDAY_AM);
                    int alarmID       = item.getInt(AmProfile.GET_ALARM_ID_AM);
                    String time       = item.getBoolean(AmProfile.GET_ALARM_TIME_AM);
                    boolean isrepeat  = item.getBoolean(AmProfile.GET_ALARM_ISREPEAT_AM);
                    boolean isOpen    = item.getBoolean(AmProfile.GET_ALARM_ISON_AM);
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Set/Unset alarm

```java
Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);
/**
 * @param id       Alarm id: 1, 2 or 3
 * @param hour     Alarm hour part: [0, 23]
 * @param min      Alarm minute part: [0, 59]
 * @param isRepeat Indicates whether it will repeat
 * @param weeks    The days in a week to repeat the alarm, week[0~6] indicates Sun~Sat.
 *                 And 1 indicates open, 0 indicates close.
 *                 {0, 1, 1, 1, 1, 1, 0} means the alarm will repeat on Mon, Tue, Wed, Thu, Fri.
 * @param isOn     true if want to set the alarm, false to unset it.
 */
control.setAlarmClock(int id, int hour, int min, boolean isRepeat, int[] weeks, boolean isOn);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (AmProfile.ACTION_SET_ALARMINFO_SUCCESS_AM.equals(action)) {
            Log.i("", "set alarm info success");
        }
    } 
}
```

### Delete alarm by id

```java
Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);
/**
 * @param id Alarm id
 */
control.deleteAlarmClock(int id);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (AmProfile.ACTION_DELETE_ALARM_SUCCESS_AM.equals(action)) {
            Log.i("", "delete alarm success");
        }
    } 
}
```

### Get activity remind setting

```java
Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);
control.getActivityRemind();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (AmProfile.ACTION_GET_ACTIVITY_REMIND_AM.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int time = obj.getString(AmProfile.GET_ACTIVITY_REMIND_TIME_AM);
                int isOpen = obj.getBoolean(AmProfile.GET_ACTIVITY_REMIND_ISON_AM);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### Set/Unset activity remind

```java
Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);
/**

* @param hour Activity remind hour part: [0, 23]
* @param min  Activity remind minute part: [0, 59]
* @param isOn true if want to set activity remind, false to unset it.
*/
control.setActivityRemind(int hour, int min, boolean isOn);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (AmProfile.ACTION_SET_ACTIVITYREMIND_SUCCESS_AM.equals(action)) {
          Log.i("", "set remind success");
        }
    } 
}
```

### Get device state and battery information

```java
Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);
control.queryAMState();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (AmProfile.ACTION_QUERY_STATE_AM.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int state   = obj.getInt(AmProfile.QUERY_STATE_AM);
                int battery = obj.getInt(AmProfile.QUERY_BATTERY_PERCENT_AM);

            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Set user ID

```java
Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);
/**
 * @param id new user id
 */
control.setUserId(int id);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (AmProfile.ACTION_SET_USERID_SUCCESS_AM.equals(action)) {
            Log.i("", "set userid success");
        }
    } 
}
```

### Get user information

```java
Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);
control.getUserInfo();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (AmProfile.ACTION_GET_USERINFO_AM.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                int age = obj.getInt(AmProfile.GET_USER_AGE_AM);
                int step = obj.getInt(AmProfile.GET_USER_STEP_AM);
                int height = obj.getInt(AmProfile.GET_USER_HEIGHT_AM);
                int gender = obj.getInt(AmProfile.GET_USER_SEX_AM);
                int weight = obj.getInt(AmProfile.GET_USER_WEIGHT_AM);
                int unit = obj.getInt(AmProfile.GET_USER_UNIT_AM);
                int target1 = obj.getInt(AmProfile.GET_USER_TARGET1_AM);
                int target2 = obj.getInt(AmProfile.GET_USER_TARGET2_AM);
                int target3 = obj.getInt(AmProfile.GET_USER_TARGET3_AM);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Set user's BMR

```java
Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);
control.setUserBmr(int bmr);
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (AmProfile.ACTION_SET_BMR_SUCCESS_AM.equals(action)) {
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

### Get the activity data

```java
Am3Control control = iHealthDevicesManager.getInstance().getAm3Control(mDeviceMac);
control.syncActivityData();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (PoProfile.ACTION_SYNC_ACTIVITY_DATA_AM.equals(action)) {
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

### Get current time activity data

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

### Get sleep data

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

### Set the system time to AM device

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

### Set hour mode

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

### Get hour mode

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
