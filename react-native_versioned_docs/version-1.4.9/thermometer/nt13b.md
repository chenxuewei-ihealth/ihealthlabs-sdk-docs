---
title: NT13B
sidebar_position: 1
---

## API Reference

### Import NT13B Module

```js
import {
  NT13BModule,
  NT13BProfileModule
} from '@ihealth/ihealthlibrary-react-native';
```

### Add and remove listener

```js
// add
notifyListener = DeviceEventEmitter.addListener(NT13BModule.Event_Notify,  (event) => {
    console.log(event);
});

// remove
notifyListener.remove();
```

### set measurement listener

```js
NT13BModule.measure(mac);

// response
notifyListener = DeviceEventEmitter.addListener(NT13BModule.Event_Notify,  (event) => {
    if (event.action === NT13BProfileModule.ACTION_MEASUREMENT_RESULT) {
        console.log(event[NT13BProfileModule.RESULT]);
        console.log(event[NT13BProfileModule.UNIT_FLAG]);
    } 
});
```
