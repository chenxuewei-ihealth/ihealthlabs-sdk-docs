---
id: get-started-android
title: Get Started(Android)
sidebar_position: 2
---

## Step 1: Add license in your application

As show below, Add your license file to your root asserts folder.
![integrate android](/img/integrate-android.png)

## Step 2: Check application permission

To use Bluetooth Low Energy, you must declare [several permissions](https://developer.android.com/guide/topics/connectivity/bluetooth/permissions).

## Step 3: Init SDK

```java
iHealthDevicesManager.getInstance().init(this,  Log.VERBOSE, Log.VERBOSE);
```

## Step 4: Authentication license

Please call the following method, if license is invalid, it will return false.
Somtimes license needs to be updated, the first call will return false, the SDK will synchronize with the server, and the next call will return true.

```java
public void auth() {
    try {
        InputStream is = mContext.getAssets().open("xxx.pem");
        int size = is.available();
        byte[] buffer = new byte[size];
        is.read(buffer);
        is.close();
        boolean isPass = iHealthDevicesManager.getInstance().sdkAuthWithLicense(buffer);
        
    } catch (IOException e) {
        e.printStackTrace();
    }

}
```
