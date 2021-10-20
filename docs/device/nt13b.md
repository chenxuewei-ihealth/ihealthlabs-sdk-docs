# NT13B

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="android" label="Android" default>

#### Android Doc

  </TabItem>
  
  <TabItem value="ios" label="iOS">

#### iOS Doc

  </TabItem>
  
  <TabItem value="reactnative" label="React Native">
## Import NT13B Module

```js
import {
  NT13BModule,
  NT13BProfileModule
} from '@ihealth/ihealthlibrary-react-native';
```

## APIs

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

  </TabItem>
</Tabs>