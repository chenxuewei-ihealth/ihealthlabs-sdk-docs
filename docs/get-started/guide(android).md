---
id: get-started-android
title: Get Started(Android)
sidebar_position: 2
---

## Step 1: Add license in your application

As shown below, add your license file to your root assets folder.
![guide android](/img/guide_android_1.png)

## Step 2: Add SDK library and SO file

As shown below, add your SDK jar file and SO file to your project.
![guide android](/img/guide_android_2.png)

For the library project, add the following:

```groovy
android {
    sourceSets {
        main {
            jniLibs.srcDirs = ['libs']
        }
    }
}
```

## Step 3: Check application permission

To use Bluetooth Low Energy, you must declare [several permissions](https://developer.android.com/guide/topics/connectivity/bluetooth/permissions).

## Step 4: Init SDK

```java
public class BaseApplication extends Application {
    
    @Override
    public void onCreate() {
        super.onCreate();
        iHealthDevicesManager.getInstance().init(this,  Log.VERBOSE, Log.VERBOSE);
    }
}
```

## Step 5: Authentication license

Please call the following method, if the license is invalid, it will return false.
When the license needs to be updated, the first call will return false, the SDK will sync with the server, and the next call will return true.

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
