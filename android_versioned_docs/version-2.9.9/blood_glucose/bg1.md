---
title: BG1
sidebar_position: 1
---

## Connection workflow

![bg1 connection](/bg1_connection_workflow_android.png)

### 1. Register Broadcast

```java
private void registerBroadcast() {
    IntentFilter filter = new IntentFilter();
    filter.addAction(Intent.ACTION_HEADSET_PLUG);

    filter.addAction(Bg1Profile.ACTION_BG1_DEVICE_READY);
    filter.addAction(Bg1Profile.ACTION_BG1_IDPS);
    filter.addAction(Bg1Profile.ACTION_BG1_CONNECT_RESULT);
    filter.addAction(Bg1Profile.ACTION_BG1_SENDCODE_RESULT);

    filter.addAction(Bg1Profile.ACTION_BG1_MEASURE_ERROR);
    filter.addAction(Bg1Profile.ACTION_BG1_MEASURE_STRIP_IN);
    filter.addAction(Bg1Profile.ACTION_BG1_MEASURE_STRIP_OUT);
    filter.addAction(Bg1Profile.ACTION_BG1_MEASURE_GET_BLOOD);
    filter.addAction(Bg1Profile.ACTION_BG1_MEASURE_RESULT);
    filter.addAction(Bg1Profile.ACTION_BG1_MEASURE_STANDBY);
    this.registerReceiver(mBroadcastReceiver, filter);
}
```

### 2. The BG1 device plug your 3.5mm headphone jack and connect bg1 connect

```java

BroadcastReceiver mBroadcastReceiver = new BroadcastReceiver() {
    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent.getAction();
        if (action.equals(Intent.ACTION_HEADSET_PLUG)) {
            if (intent.hasExtra("state")) {
                if (intent.getIntExtra("state", 0) == 0) {
                    mBg1Control.disconnect();
                    Log.i("", "move out from 3.5mm headphone jack");           
                }
                if (intent.getIntExtra("state", 0) == 1) {
                    Log.i("", "plug in 3.5mm headphone jack");  
                    mBg1Control.connect();
                }
            }
        }
        else if (action.equals(Bg1Profile.ACTION_BG1_DEVICE_READY)) {
            Log.i("", "device handshake");  

        } else if (action.equals(Bg1Profile.ACTION_BG1_IDPS)) {
            String idps = intent.getStringExtra(Bg1Profile.BG1_IDPS);
            Log.i("", "idps: "+idps);

        } else if (action.equals(Bg1Profile.ACTION_BG1_CONNECT_RESULT)) {
            int flag = intent.getIntExtra(Bg1Profile.BG1_CONNECT_RESULT, -1);
            Log.i("", "conect flag: " + flag);
            if (flag == 0) {
                Log.i("", "connect success, please send code");
                // If you use control solution.
                // mBg1Control.sendCode(QRCode, Bg1Profile.CODE_GOD, Bg1Profile.MEASURE_CTL);
                
                // If you work on the real measurement.
                // mBg1Control.sendCode(QRCode, Bg1Profile.CODE_GOD, Bg1Profile.MEASURE_BLOOD);

            } else {
                Log.i("", "connect failed");
                mBg1Control.disconnect();
            }
        }
    }
}
```

## API reference

### Parse bottle Info of the QRCode

```java
// Return value: {"bottleInfo":[{"bottleId":"18882266","overDate":"2015-06-26","stripNum":"25"}]}
String info = Bg1Control.getBottleInfoFromQR(String QRCode);
```

### Send code to BG1 device

```java
Bg1Control control = iHealthDevicesManager.getInstance().getBg1Control(mDeviceMac);
control.sendCode(String QRCode, int stripType, int measureType)
```

```java
// Return value
BroadcastReceiver mBroadcastReceiver = new BroadcastReceiver() {
    @Override
    public void onReceive(Context context, Intent intent) { 
        String action = intent.getAction();
        if (action.equals(Bg1Profile.ACTION_BG1_SENDCODE_RESULT)) {
            int flag = intent.getIntExtra(Bg1Profile.BG1_SENDCODE_RESULT, -1);
            Log.i( "sendCode flag = " + flag);
            if (flag == 0) {
                Log.i("sendCode success,ready to measure");
            } else {
                Log.i("sendCode failed");
                mBg1Control.disconnect();
            }
        }
    }
}
```

### Notify a measurement

```java
// Return value
BroadcastReceiver mBroadcastReceiver = new BroadcastReceiver() {
    @Override
    public void onReceive(Context context, Intent intent) { 
        String action = intent.getAction();
        if (action.equals(Bg1Profile.ACTION_BG1_MEASURE_STRIP_IN)) {
            Log.i( "test strip in");

        } else if (action.equals(Bg1Profile.ACTION_BG1_MEASURE_GET_BLOOD)) {
            Log.i( "drop blood");

        } else if (action.equals(Bg1Profile.ACTION_BG1_MEASURE_RESULT)) {
           try {
                JSONObject obj = new JSONObject(message);
                int value = obj.getInt(Bg1Profile.BG1_MEASURE_RESULT);
            } catch (JSONException e) {
                e.printStackTrace();
            }

        } else if (action.equals(Bg1Profile.ACTION_BG1_MEASURE_ERROR)) {
            try {
                JSONObject obj = new JSONObject(message);
                int error_id = obj.getInt(Bg1Profile.BG1_MEASURE_ERROR);
                String error_message = obj.getInt(Bg1Profile.BG1_MEASURE_ERROR_DESCRIPTION);
            } catch (JSONException e) {
                e.printStackTrace();
            }

        } else if (action.equals(Bg1Profile.ACTION_BG1_MEASURE_STRIP_OUT)) {
            Log.i( "test strip out");
        }
    }
}
```
