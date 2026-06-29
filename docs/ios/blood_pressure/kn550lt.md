---
title: KN550LT
sidebar_position: 11
---

The iOS SDK supports KN550LT in versions 2.14.0 and above.

## WorkFlow

1. Scan and connect KN550LT blood pressure monitor.

2. KN550LT supports online and offline measurement.

In the iOS SDK, use `HealthDeviceType_KN550LT` to scan for this device.

## Connection to device

### 1.Listen to device notify

```java
[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDiscovered:) name:KN550LTDiscover object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnectFailed:) name:KN550LTConnectFailed object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnected:) name:KN550LTConnectNoti object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisconnected:) name:KN550LTDisConnectNoti object:nil];

[KN550LTController shareIHKN550LTController];
```

### 2.Scan for devices

```java
[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_KN550LT];
```

### 3.Connect to devices

```java
[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_KN550LT andSerialNub:deviceMac];
```

### 4.Get the device instance

```java
KN550LT *device = [[KN550LTController shareIHKN550LTController] getInstanceWithMac:deviceMac];
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
 * @param error  A block to return the error.
 */
-(void)commandEnergy:(BlockEnergyValue)energyValue errorBlock:(BlockError)error;
```

### Get Function

```java
/**
 *
 * What the function returns:

 currentUser = 1;
 upAirMeasureFlg = 0;
 deviceSysTime = 2024-08-19 08:10:58 +0000;
 haveOffline = 1;
 deviceTime = 2024-06-30 16:59:13 +0000;
 haveCuffLooseFlg = 1;
 haveBodyMovementFlg = 1;
 showUnit = 0;
 is24Hour = 1;
 selfUpdate = 0;
 firmwareVersion = "1.0.4";
 haveAngleSet = 0;
 armMeasureFlg = 1;
 haveShowUnitSetting = 0;
 mutableUpload = 0;
 haveBackLightSetting = 0;
 haveClockShowSetting = 0;
 hardwareVersion = "1.0.0";
 haveAngleSensor = 0;
 memoryGroup = 2;
 maxMemoryCapacity = 120;
 haveRepeatedlyMeasure = 0;
 haveHSD = 0;
 * @param function  A block to return the function and states that the device supports.
 * @param error   A block to return the error.
 */
-(void)commandFunction:(BlockDeviceFunction)function errorBlock:(BlockError)error;
```

### Get device date

```java
/**
 * Get Device Date.
 * @param  date The block return Date, e.g. "2020-01-01 08:56:38"
 * @param error   error codes.
 */
-(void)commandGetDeviceDate:(BlockDeviceDate)date errorBlock:(BlockError)error;
```

### Get history data count

```java
/**
 * Upload offline data total Count.
 * @param  totalCount item quantity of total data count
 * @param error  A block to return the error.
 */
-(void)commandTransferMemoryCount:(BlockBachCount)totalCount errorBlock:(BlockError)error;
```

### Get history data

```java
/**
 * Upload offline data（Please call the API for obtaining the number of historical data before calling this API, otherwise the data cannot be obtained.）
 * @param uploadDataArray item quantity of total data.
 * @param error  A block to return the error.
 */
-(void)commandTransferMemoryData:(BlockBachArray)uploadDataArray errorBlock:(BlockError)error;
```

### Delete history data

```java
/**
 * Delete offline data.
 * @param success   A block to refer ‘set success’.
 * @param error    A block to return the error.
 */
-(void)commandDeleteMemoryDataResult:(BlockSuccess)success errorBlock:(BlockError)error;
```

### Disconnect device

```java
/**
 * Disconnect current device
 */
-(void)commandDisconnectDevice;
```
