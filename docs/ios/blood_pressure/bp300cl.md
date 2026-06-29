---
title: BP300CL
sidebar_position: 12
---

The iOS SDK supports BP300CL in versions 2.15.0 and above.

## WorkFlow

1. Scan and connect BP300CL blood pressure monitor.

2. BP300CL supports online and offline measurement.

In the iOS SDK, use `HealthDeviceType_BP300CL` to scan for this device. Offline memory is organized by user group: use `BP300CLMemoryDataGroupNumber_Group1`, `BP300CLMemoryDataGroupNumber_Group2`, or `BP300CLMemoryDataGroupNumber_All` when reading or deleting history.

## Connection to device

### 1.Listen to device notify

```java
[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDiscovered:) name:BP300CLDiscover object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnectFailed:) name:BP300CLConnectFailed object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnected:) name:BP300CLConnectNoti object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisconnected:) name:BP300CLDisConnectNoti object:nil];

[BP300CLController shareIHBP300CLController];
```

### 2.Scan for devices

```java
[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_BP300CL];
```

### 3.Connect to devices

```java
[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_BP300CL andSerialNub:deviceMac];
```

### 4.Get the device instance

```java
BP300CL *device = [[BP300CLController shareIHBP300CLController] getInstanceWithMac:deviceMac];
```

## API reference

### Get IDPS info

```java
/**
 * Get IDPS info
 * @param idpsInfo  A block to refer ‘idpsInfo’.
 * @param error   A block to return the error.
 */
-(void)commandGetIDPSInfo:(BlockDeviceIDPS)idpsInfo errorBlock:(BlockError)error;
```

### Get battery energy

```java
/**
 * Query battery remaining energy.
 * @param energyValue  A block to return the device battery remaining energy percentage, ‘80’ stands for 80%.
 * @param energyState 0:Not charging 1:charging
 * @param error  A block to return the error.
 */
-(void)commandEnergy:(BlockEnergyValue)energyValue energyState:(BlockEnergyState)energyState errorBlock:(BlockError)error;
```

### Get Function

```java
/**
 *
 * What the function returns:

 voiceSetting = 0;
 currentUser = 2;
 upAirMeasureFlg = 0;
 deviceSysTime = 2025-06-27 06:18:04 +0000;
 haveOffline = 1;
 deviceTime = 2025-01-01 07:46:21 +0000;
 haveCuffLooseFlg = 0;
 haveBodyMovementFlg = 0;
 showUnit = 0;
 selfUpdate = 0;
 haveMarking = 1;
 haveAngleSet = 0;
 armMeasureFlg = 1;
 haveShowUnitSetting = 0;
 mutableUpload = 0;
 haveBackLightSetting = 0;
 haveClockShowSetting = 0;
 haveAngleSensor = 0;
 memoryGroup = 2;
 haveRepeatedlyMeasure = 0;
 haveHSD = 0;
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
 * @param groupID    Memory group: BP300CLMemoryDataGroupNumber_Group1, _Group2, or _All.
 * @param  totalCount item quantity of total data count
 * @param error  A block to return the error.
 */
-(void)commandGetMemoryCountWithGroupID:(BP300CLMemoryDataGroupNumber)groupID count:(BlockBachCount)totalCount errorBlock:(BlockError)error;
```

### Get history data

```java
/**
 * Upload offline data（Please call the API for obtaining the number of historical data before calling this API, otherwise the data cannot be obtained.）
 * @param groupID   Memory group: BP300CLMemoryDataGroupNumber_Group1, _Group2, or _All.
 * @param uploadDataArray item quantity of total data.
 * @param error  A block to return the error.
 */
-(void)commandTransferMemoryDataWithGroupID:(BP300CLMemoryDataGroupNumber)groupID data:(BlockBachArray)uploadDataArray errorBlock:(BlockError)error;
```

### Delete history data

```java
/**
 * Delete offline data.
 * @param groupID  Memory group: BP300CLMemoryDataGroupNumber_Group1, _Group2, or _All.
 * @param success   A block to refer ‘set success’.
 * @param error    A block to return the error.
 */
-(void)commandDeleteMemoryDataWithGroupID:(BP300CLMemoryDataGroupNumber)groupID success:(BlockSuccess)success errorBlock:(BlockError)error;
```

### Disconnect device

```java
/**
 * Disconnect current device
 */
-(void)commandDisconnectDevice;
```
