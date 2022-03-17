--- 
title: HS5
sidebar_position: 5
---

## WorkFlow

1. The HS5 is Wifi body fat scale. If you've already set up wifi information, please jump to step 2. If you need to set wifi information, please scan and connect HS5(Bluetooth) scale.

2. Call funtion "setWifi" for setting wifi information to HS5(Bluetooth) scale.

3. HS5 support online measurement and offline measurement.

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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_HS5, iHealthDevicesManager.TYPE_HS5_BT);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for HS5(Bluetooth) devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.TYPE_HS5_BT);
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

### 3.Connect to HS5(Bluetooth) devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_HS5_BT)
Hs4sControl control = iHealthDevicesManager.getInstance().getHs4sControl(mDeviceMac);
```

### 4.Scan for HS5(WIFI) devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.TYPE_HS5_BT);
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

### 5.Connect to HS5(WIFI) devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_HS5)
Hs4sControl control = iHealthDevicesManager.getInstance().getHs4sControl(mDeviceMac);
```

## API reference

### Set the wifi information to the scale(Bluetooth)

```java
Hs5ControlForBt control = iHealthDevicesManager.getInstance().getHs5ControlForBt(mDeviceMac);
control.setWifi(String ssid, int type, String pw)() 
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (HsProfile.ACTION_SETTINGWIFI.equals(action)) {
            Log.i("", "setting wifi");
        } else if (HsProfile.ACTION_SETWIFI_SUCCESS.equals(action) {
            Log.i("", "set wifi success");
        } else if (HsProfile.ACTION_SETWIFI_FAIL.equals(action) {
            Log.i("", "set wifi fail");
        } else if (HsProfile.ACTION_SETWIFI_UNKNOW.equals(action) {
            Log.i("", "set wifi unknow");
        }
    } 
}
```

### Create user management(WIFI)

```java
Hs5Control control = iHealthDevicesManager.getInstance().getHs5Control(mDeviceMac);
/*
 * @param userId user identify number, The range: 1 ~ 2147483647(0x7FFFFFFF)
 */
control.createManagement(int userId)
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (HsProfile.ACTION_LIVEDATA_HS.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                String weight = obj.getString(HsProfile.DATA_LIVEDATA_HSWEIGHT);

            } catch (JSONException e) {
                e.printStackTrace();
            }
        } else if (HsProfile.ACTION_ONLINE_RESULT_HS.equals(action)) {
            try {
                JSONObject obj = new JSONObject(message);
                String weight = obj.getString(HsProfile.WEIGHT_HS);

            } catch (JSONException e) {
                e.printStackTrace();
            }
        } 
    }
}
```
