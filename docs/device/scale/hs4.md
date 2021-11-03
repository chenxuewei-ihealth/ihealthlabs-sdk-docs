---
title: HS4
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="android" label="Android" default>

## WorkFlow

1. Scan and connect HS4 scale.

2. HS4 support online measurement and offline measurement.

## Connection to device

### 1.Listen to device notify

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

    @Override
    public void onDeviceNotify(String mac, String deviceType,
                                String action, String message) {
                                    
    }
});

iHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_HS4);
iHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)
```

### 2.Scan for HS4 devices

```java
iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.HS4);
```

### 3.Connect to HS4 devices

```java
iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_HS4)
Hs4Control control = iHealthDevicesManager.getInstance().getHs4Control(mDeviceMac);
```

## API reference

### Get offline data

```java
Hs4Control control = iHealthDevicesManager.getInstance().getHs4Control(mDeviceMac);
control.getOfflineData() 
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (HsProfile.ACTION_HISTORICAL_DATA_COMPLETE_HS.equals(action)) {
            try {
                JSONArray historyArr = new JSONArray(message);
                for (int i = 0; i < historyArr.length(); i++) {
                    JSONObject obj = historyArr.getJSONObject(i);
                    String measureTs = obj.getString(HsProfile.MEASUREMENT_DATE_HS);
                    String weight    = obj.getString(HsProfile.WEIGHT_HS);
                 
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    } 
}
```

### Start a online measurement

```java
Hs2Control control = iHealthDevicesManager.getInstance().getHs2Control(mDeviceMac);
/*
 * @param unit 1 kg; 2 lb; 3 st
 * @param userId user identify number
 */
control.measureOnline(int unit, int userId)
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

### Disconnect the HS4

```java
Hs4Control control = iHealthDevicesManager.getInstance().getHs4Control(mDeviceMac);
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
## import HS4S module

```js
import {
  HS4SModule,
  HSProfileModule
} from '@ihealth/ihealthlibrary-react-native';
```

## APIs

### add and remove listener

```js
// add
notifyListener = DeviceEventEmitter.addListener(HS4SModule.Event_Notify,  (event) => {
    console.log(event);
});

// remove
notifyListener.remove();
```

### start a measurement

The API is asyn function. It will return message until finish measurement.

```js
HS4SModule.startMeasure(mac);

notifyListener = DeviceEventEmitter.addListener(HS4SModule.Event_Notify,  (event) => {
    if (event.action === HSProfileModule.ACTION_ONLINE_RESULT_HS) {
        console.log(event[HSProfileModule.DATAID]);
        console.log(event[HSProfileModule.WEIGHT_HS]);
        console.log(event[HSProfileModule.FAT_HS]);
        console.log(event[HSProfileModule.WATER_HS]);
        console.log(event[HSProfileModule.MUSCLE_HS]);
        console.log(event[HSProfileModule.SKELETON_HS]);
        console.log(event[HSProfileModule.FATELEVEL_HS]);
        console.log(event[HSProfileModule.DCI_HS]);
    }
});
```

### get data stored in the HS4S device

```js
HS4SModule.getOfflineData(mac);

notifyListener = DeviceEventEmitter.addListener(HS4SModule.Event_Notify,  (event) => {
    if (event.action === HSProfileModule.ACTION_HISTORICAL_DATA_HS) {
        let dataArray = event[HSProfileModule.HISTORDATA_HS];
        if (dataArray == undefined) {
            result = "There is not offline data in device"
        }else {
            for (let i = 0; i < dataArray.length; i++) {
                let offlineData = dataArray[i];
                console.log(offlineData[HSProfileModule.MEASUREMENT_DATE_HS]);
                console.log(offlineData[HSProfileModule.WEIGHT_HS]);
                console.log(offlineData[HSProfileModule.FAT_HS]);
                console.log(offlineData[HSProfileModule.WATER_HS]);
                console.log(offlineData[HSProfileModule.MUSCLE_HS]);
                console.log(offlineData[HSProfileModule.SKELETON_HS]);
                console.log(offlineData[HSProfileModule.FATELEVEL_HS]);
                console.log(offlineData[HSProfileModule.DATAID]);
            }
        }
    }
});
```

### disconnect device

```js
BP3LModule.disConnect(mac);
```

### get all connected devices

```js
BP3LModule.getAllConnectedDevices();
```

  </TabItem>
</Tabs>