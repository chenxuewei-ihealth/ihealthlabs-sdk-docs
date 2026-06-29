---
title: KD723SE
sidebar_position: 13
---

The iOS SDK supports KD723SE in versions 2.15.0 and above.

## WorkFlow

1. Scan and connect KD723SE blood pressure monitor.

2. KD723SE supports online and offline measurement.

In the iOS SDK, use `HealthDeviceType_KD723SE` to scan for this device. Offline memory is organized by user group: use `KD723SEMemoryDataGroupNumber_Group1`, `KD723SEMemoryDataGroupNumber_Group2`, or `KD723SEMemoryDataGroupNumber_All` when reading or deleting history.

## Connection to device

### 1.Listen to device notify

```java
[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDiscovered:) name:KD723SEDiscover object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnectFailed:) name:KD723SEConnectFailed object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnected:) name:KD723SEConnectNoti object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisconnected:) name:KD723SEDisConnectNoti object:nil];

[KD723SEController shareIHKD723SEController];
```

### 2.Scan for devices

```java
[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_KD723SE];
```

### 3.Connect to devices

```java
[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_KD723SE andSerialNub:deviceMac];
```

### 4.Get the device instance

```java
KD723SE *device = [[KD723SEController shareIHKD723SEController] getInstanceWithMac:deviceMac];
```

## API reference

### Set local time to device

```java
/**
 * synchronize time
 * @param success  A block to refer ‘set success’.
 * @param error   A block to return the error.
 */
-(void)commandSynchronizeTime:(BlockSuccess)success errorBlock:(BlockError)error;
```

### Get Function

```java
/**
 *
 * What the function returns:

 upAirMeasureFlg = 1;
 haveOffline = 1;
 deviceTime = "2026-2-9 22:12:38";
 showUnit = 0;
 is24Hour = 1;
 selfUpdate = 0;
 firmwareVersion = "1.0.0";
 haveAngleSet = 0;
 modelNumber = "KD-723SE 11070";
 armMeasureFlg = 0;
 haveShowUnitSetting = 0;
 protocol = "com.jiuan.BPV31";
 mutableUpload = 1;
 manufacture = "iHealth";
 haveBackLightSetting = 0;
 haveClockShowSetting = 0;
 hardwareVersion = "1.0.0";
 haveAngleSensor = 0;
 memoryGroup = 2;
 maxMemoryCapacity = 199;
 accessoryName = "KD723SE";
 haveRepeatedlyMeasure = 0;
 haveHSD = 1;
 * @param function  A block to return the function and states that the device supports.
 * @param error   A block to return the error.
 */
-(void)commandFunction:(BlockDeviceFunction)function errorBlock:(BlockError)error;
```

### Get latest data

```java
/**
 * Get the latest memory data of User 1 and User 2.
 * @param result1Dic  Latest data of User 1.
 * @param result2Dic  Latest data of User 2.
 * @param error  A block to return the error.
 */
-(void)commandGetLatestMemoryDataGroup1:(BlockMeasureResult)result1Dic group2:(BlockMeasureResult)result2Dic errorBlock:(BlockError)error;
```

### Get history data count

```java
/**
 * Upload offline data total Count.
 * @param groupID    User 1 or User 2 only (do not pass KD723SEMemoryDataGroupNumber_All).
 * @param  totalCount item quantity of total data count
 * @param error  A block to return the error.
 */
-(void)commandGetMemoryCountWithGroupID:(KD723SEMemoryDataGroupNumber)groupID count:(BlockBachCount)totalCount errorBlock:(BlockError)error;
```

### Get history data

```java
/**
 * Upload offline data（Please call the API for obtaining the number of historical data before calling this API, otherwise the data cannot be obtained.）
 * @param groupID   User 1 or User 2 only (do not pass KD723SEMemoryDataGroupNumber_All).
 * @param uploadDataArray item quantity of total data.
 * @param error  A block to return the error.
 */
-(void)commandTransferMemoryDataWithGroupID:(KD723SEMemoryDataGroupNumber)groupID data:(BlockBachArray)uploadDataArray errorBlock:(BlockError)error;
```

### Delete history data

```java
/**
 * Delete offline data.
 * @param groupID  User 1, User 2, or KD723SEMemoryDataGroupNumber_All to delete all offline data.
 * @param success   A block to refer ‘set success’.
 * @param error    A block to return the error.
 */
-(void)commandDeleteMemoryDataWithGroupID:(KD723SEMemoryDataGroupNumber)groupID success:(BlockSuccess)success errorBlock:(BlockError)error;
```

### Disconnect device

```java
/**
 * Disconnect current device
 */
-(void)commandDisconnectDevice;
```
