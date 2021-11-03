---
title: BP3L
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="android" label="Android" default>

## WorkFlow

1. Scan and connect BP3L blood pressure monitor.

2. BP3L only support online measurement.

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
    public void onDeviceNotify(String mac, String deviceType,
                                String action, String message) { }
});

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
Bp3lControl control = iHealthDevicesManager.getInstance().getBp3lControl(mDeviceMac);
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

  </TabItem>
  
  <TabItem value="ios" label="iOS">

#### iOS Doc

  </TabItem>
  
  <TabItem value="reactnative" label="React Native">
## import BP3L module

```js
import {
  BP3LModule,
  BPProfileModule
} from '@ihealth/ihealthlibrary-react-native';
```

## APIs

### add and remove listener

```js
// add
notifyListener = DeviceEventEmitter.addListener(BP3LModule.Event_Notify,  (event) => {
    console.log(event);
});

// remove
notifyListener.remove();
```

### start a measurement

The API is asyn function. It will return message until finish measurement.

```js
BP3LModule.startMeasure(mac);

notifyListener = DeviceEventEmitter.addListener(BP3LModule.Event_Notify,  (event) => {
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
BP3LModule.stopMeasure(mac);
```

### get battery

```js
BP3LModule.getBattery(mac);

notifyListener = DeviceEventEmitter.addListener(BP3LModule.Event_Notify,  (event) => {
    if (event.action === BPProfileModule.ACTION_BATTERY_BP) {
        console.log(event[BPProfileModule.BATTERY_BP]);
    }
});
```

### enable offline mode

```js
BP3LModule.enbleOffline(mac);
```

### disable offline mode

```js
BP3LModule.disableOffline(mac);
```

### is enable offline mode

```js
BP3LModule.isEnableOffline(mac);

notifyListener = DeviceEventEmitter.addListener(BP3LModule.Event_Notify,  (event) => {
    if (e.action === BPProfileModule.ACTION_IS_ENABLE_OFFLINE) {
        console.log(event[BPProfileModule.IS_ENABLE_OFFLINE]);
    }
});
```

### get quantity of data stored in the bp5 device

```js
BP3LModule.getOfflineNum(mac);

notifyListener = DeviceEventEmitter.addListener(BP3LModule.Event_Notify,  (event) => {
    if (e.action === BPProfileModule.ACTION_HISTORICAL_NUM_BP) {
        console.log(event[BPProfileModule.HISTORICAL_NUM_BP]);
    }
});
```

### get data stored in the bp5 device

```js
BP3LModule.getOfflineData(mac);

notifyListener = DeviceEventEmitter.addListener(BP3LModule.Event_Notify,  (event) => {
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
BP3LModule.disConnect(mac);
```

### get device information

```js
iHealthDeviceManagerModule.getDevicesIDPS(mac, (event) => {
    console.info(event);
})
```

### get all connected devices

```js
BP3LModule.getAllConnectedDevices();
```

  </TabItem>
</Tabs>
