---
title: TS28B
sidebar_position: 2
---

## API Reference

### Import TS28B Module

```js
import {
  TS28BModule,
  TS28BProfileModule
} from '@ihealth/ihealthlibrary-react-native';
```

### Add and remove listener

```js
// add
notifyListener = DeviceEventEmitter.addListener(TS28BModule.Event_Notify,  (event) => {
    console.log(event);
});

// remove
notifyListener.remove();
```

### set measurement listener

```js
TS28BModule.measure(mac);

// response
notifyListener = DeviceEventEmitter.addListener(TS28BModule.Event_Notify,  (event) => {
    if (event.action === TS28BProfileModule.ACTION_MEASUREMENT_RESULT) {
        console.log(event[TS28BProfileModule.RESULT]);
        console.log(event[TS28BProfileModule.UNIT_FLAG]);
    } 
});
```
