---
title: BP5
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="android" label="Android" default>

## WorkFlow

1. Scan and connect BP5 blood pressure monitor.

2. BP5 support online measurement and offline measurement.

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
iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BP5);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for BP5 devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BP5);
```

### 3.Connect to BP5 devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BP5)

Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);
```

## API reference

### Get the device battery

```java
Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);
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

### Enable BP5 to be measured offline

```java
Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);
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

### Disable BP5 to be measured offline

```java
Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);
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
Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);
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
Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);
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
Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);
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
Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);
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

### Disconnect Bp5 device

```java
Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);
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

## import BP5 module

```js
import {
  BP5Module,
  BPProfileModule
} from '@ihealth/ihealthlibrary-react-native';
```

## APIs

### add and remove listener

```js
// add
notifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {
    console.log(event);
});

// remove
notifyListener.remove();
```

### start a measurement

The API is asyn function. It will return message until finish measurement.

```js
BP5Module.startMeasure(mac);

notifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {
    if (event.action === BPProfileModule.ACTION_ZOREING_BP) {
        console.log("zero adjustment");

    } else if (event.action === BPProfileModule.ACTION_ZOREOVER_BP) {
        console.log("zero adjustment is done");

    } else if (event.action === BPProfileModule.ACTION_ONLINE_PRESSURE_BP) {
        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);

    } else if (event.action === BPProfileModule.ACTION_ONLINE_PULSEWAVE_BP) {
        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);
        console.log(event[BPProfileModule.FLAG_HEARTBEAT_BP]);
        console.log(event[BPProfileModule.PULSEWAVE_BP]);

    } else if (event.action === BPProfileModule.ACTION_ONLINE_RESULT_BP) {
        console.log(event[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);
        console.log(event[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);
        console.log(event[BPProfileModule.PULSE_BP]);
        console.log(event[BPProfileModule.MEASUREMENT_AHR_BP]);
        console.log(event[BPProfileModule.DATAID]);

    } else if (event.action === BPProfileModule.ACTION_ERROR_BP) {
        console.log(event[BPProfileModule.ERROR_NUM_BP]);
        console.log(event[BPProfileModule.ERROR_DESCRIPTION_BP]);
    }
});
```

### cancel current measurement

```js
BP5Module.stopMeasure(mac);
```

### get battery

```js
BP5Module.getBattery(mac);

notifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {
    if (event.action === BPProfileModule.ACTION_BATTERY_BP) {
        console.log(event[BPProfileModule.BATTERY_BP]);
    }
});
```

### enable offline mode

```js
BP5Module.enbleOffline(mac);
```

### disable offline mode

```js
BP5Module.disableOffline(mac);
```

### is enable offline mode

```js
BP5Module.isEnableOffline(mac);

notifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {
    if (e.action === BPProfileModule.ACTION_IS_ENABLE_OFFLINE) {
        console.log(event[BPProfileModule.IS_ENABLE_OFFLINE]);
    }
});
```

### get quantity of data stored in the bp5 device

```js
BP5Module.getOfflineNum(mac);

notifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {
    if (e.action === BPProfileModule.ACTION_HISTORICAL_NUM_BP) {
        console.log(event[BPProfileModule.HISTORICAL_NUM_BP]);
    }
});
```

### get data stored in the bp5 device

```js
BP5Module.getOfflineData(mac);

notifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {
    if (event.action === BPProfileModule.ACTION_HISTORICAL_DATA_BP) {
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
BP5Module.disConnect(mac);
```

### get device information

```js
iHealthDeviceManagerModule.getDevicesIDPS(mac, (event) => {
    console.info(event);
})
```

### get all connected devices

```js
BP5Module.getAllConnectedDevices();
```

  </TabItem>
</Tabs>
