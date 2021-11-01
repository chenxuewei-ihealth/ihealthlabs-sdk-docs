---
title: BP7S
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="android" label="Android" default>

## WorkFlow

1. Scan and connect BP7S blood pressure monitor.

2. BP7S support offline measurement.

## Connection to device

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

    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) { }
});

iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BP7S);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for BP7S devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BP7S);
```

### 3.Connect to BP7S devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BP7S)

Bp7sControl control = iHealthDevicesManager.getInstance().getBp7sControl(mDeviceMac);
```

## API reference

### Get the device battery

```java
Bp7sControl control = iHealthDevicesManager.getInstance().getBp7sControl(mDeviceMac);
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

### Set the BP5S display unit

```java
Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);
/**
 * BpProfile.STATUS_UNIT_DISPLAY_MMHG
 * BpProfile.STATUS_UNIT_DISPLAY_KPA
 */
control.setUnit(int type);
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
Bp7sControl control = iHealthDevicesManager.getInstance().getBp7sControl(mDeviceMac);
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
Bp7sControl control = iHealthDevicesManager.getInstance().getBp7sControl(mDeviceMac);
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

### Disconnect BP7S device

```java
Bp7sControl control = iHealthDevicesManager.getInstance().getBp7sControl(mDeviceMac);
control.disconnect();
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
     @Override
    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { 
        
    }
}
```

  </TabItem>
  
  <TabItem value="ios" label="iOS">

#### iOS Doc

  </TabItem>
  
  <TabItem value="reactnative" label="React Native">
## Import BP7S Module

```js
import {
  BP7SModule,
  BPProfileModule
} from '@ihealth/ihealthlibrary-react-native';
```

## APIs

### add and remove listener

```js
// add
notifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {
    console.log(event);
});

// remove
notifyListener.remove();
```

### get battery

```js
BP7SModule.getBattery(mac);

notifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {
    if (event.action === BPProfileModule.ACTION_BATTERY_BP) {
        console.log(event[BPProfileModule.BATTERY_BP]);
    }
});
```

### set unit

The API can change the unit of the bg5 display.

```js
// unit :0 mmHg;1 kPa
BP7SModule.setUnit(mac, 1);

// response
notifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {
    if (event.action === BPProfileModule.ACTION_SET_UNIT_SUCCESS_BP) {
        console.log("set Unit");
    }
});
```

### get quantity of data stored in the bp5 device

```js
BP7SModule.getOfflineNum(mac);

// response
notifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {
    if (e.action === BPProfileModule.ACTION_HISTORICAL_NUM_BP) {
        console.log(event[BPProfileModule.HISTORICAL_NUM_BP]);
    }
});
```

### get data stored in the bp5 device

```js
BP7SModule.getOfflineData(mac);

notifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {
    if (e.action === BPProfileModule.ACTION_HISTORICAL_DATA_BP) {
        let dataArray = event[BPProfileModule.HISTORICAL_DATA_BP];
        if (dataArray == undefined) {
            result = "There is not offline data in device"
        }else {
            for (let i = 0; i < dataArray.length; i++) {
                let offlineData = dataArray[i];

                console.log(offlineData[BPProfileModule.MEASUREMENT_DATE_BP]);
                console.log(offlineData[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);
                console.log(offlineData[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);
                console.log(offlineData[BPProfileModule.PULSE_BP]);
                console.log(offlineData[BPProfileModule.MEASUREMENT_AHR_BP]);
                console.log(offlineData[BPProfileModule.MEASUREMENT_HSD_BP]);
                console.log(offlineData[BPProfileModule.DATAID]);
            }
        }
    }
});
```

### disconnect device

```js
BP7SModule.disConnect(mac);
```

### set angle range

```js
/**
 * leftHigh  the maximum measure angle of left hand, the maximum value must less than 90
 * leftLow   the minimum measure angle of left hand, the minimum value must more than 0, and less than leftUpper
 * rightHigh the maximum measure angle of right hand, the maximum value must less than 90
 * leftLow   the minimum measure angle of right hand, the minimum value must more than 0, and less than rightUpper
 */
BP7SModule.angleSet(mac, 80, 30, 80, 30);

// response
notifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify,  (event) => {
    if (e.action === BPProfileModule.ACTION_SET_ANGLE_SUCCESS_BP) {
        console.log("set angle");
    }
});
```

### get bp7s device information

```js
BP7SModule.getFunctionInfo(mac);
```

### get all connected devices

```js
BP7SModule.getAllConnectedDevices();
```

  </TabItem>
</Tabs>