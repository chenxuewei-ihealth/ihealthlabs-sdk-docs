---
title: BP5S
sidebar_position: 3
---

## Device Version

### 1. HardVersion 1.0.0

### 2. HardVersion 2.0.0
This version and above HardVersion support the offline data time correction function: when obtaining offline data, the "isRightTime" field is added. This field marks whether the historical data needs time correction (0: no need; 1: need correction). The device time and device system time can be obtained through the "getFunction" interface. Using the time difference between these two times and adding it to the time of the data that needs correction gives the correct time.

## WorkFlow

1. Scan and connect BP5S blood pressure monitor.

2. BP5S support online measurement and offline measurement.

## Connection to device

### 1.Listen to device notify

```java

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:BP5SDiscover object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:BP5SConnectFailed object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:BP5SConnectNoti object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:BP5SDisConnectNoti object:nil];
        
[BP5SController sharedController];
```

### 2.Scan for BP5S devices

```java
[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_BP5S];
```

### 3.Connect to BP5S devices

```java
[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_BP5S andSerialNub:deviceMac];
```

## API reference

### Get the device battery

```java
/**
 * Query battery remaining energy
 * @param energyValue  A block to return the device battery remaining energy percentage, ‘80’ stands for 80%.
 * @param energyState 1:Not charging 2:charging 3:charging finish
 * @param error  A block to return the error in ‘Establish measurement connection’.
 */
-(void)commandEnergy:(BlockEnergyValue)energyValue energyState:(BlockEnergyState)energyState errorBlock:(BlockError)error;
```

### Get function of BP5S device

```java

/**
 * * Synchronize time and return the function and states that the device supports
 * @param function  A block to return the function and states that the device supports,judge if the device supports the function of up Air Measurement, arm Measurement,the last operation status,the max memory capacity, HSD, Offline Memory, mutable Groups Upload, Self Upgrade. ‘True’ means yes or on, ‘False’ means no or off.
 * @param error  A block to refer ‘error’ in ‘Establish measurement connection’ in BP5S.
 */
-(void)commandFunction:(BlockDeviceFunction)function errorBlock:(BlockError)error;
```

### Set the BP5S mode

```java
/**
 * set up offline detection
 * @param open  True means on; False means off.
 * @param successBlock  A block to refer ‘set success’.
 * @param errorBlock  A block to refer ‘set failed’.
 */
-(void)commandSetOffline:(BOOL)open success:(BlockSuccess)successBlock error:(BlockError)errorBlock;
```

### Set the BP5S display unit

```java
/**
 * set unit display
 * @param UnitName mmHg, kPa
 * @param setResult  A block to refer ‘set success’.
 * @param error  A block to refer ‘set failed’.
 */
-(void)commandSetUnit:(NSString *)UnitName disposeSetReslut:(BlockSuccess)setResult errorBlock:(BlockError)error;
```

### Get the number of history data

```java
/**
 * Upload offline data total Count.
 * @param  totalCount item quantity of total data.
 * @param error  A block to return the error.
 */
-(void)commandTransferMemoryTotalCount:(BlockBachCount)totalCount errorBlock:(BlockError)error;
```

### Get history data

```java
/**
 * Upload offline data.
 *  @Notice   By the first time of new user register via SDK, ‘iHealth disclaimer’ will pop up automatically, and require the user agrees to continue. SDK application requires Internet connection; there is 10-day tryout if SDK cannot connect Internet, SDK is fully functional during tryout period, but will be terminated without verification through Internet after 10 days.
 * @param  totalCount item quantity of total data
 * @param  progress upload completion ratio , from 0.0 to 1.0 or 0%~100％, 100% means upload completed.
 * @param  uploadDataArray    offline data set, including measurement time, systolic pressure, diastolic pressure, pulse rate, irregular judgment,scheme ID,body movement flag. corresponding KEY as time, sys, dia, heartRate, irregular,schemeID,bodyMovementFlg.
 * @param error   error codes.
 */
-(void)commandTransferMemoryDataWithTotalCount:(BlockBachCount)totalCount progress:(BlockBachProgress)progress dataArray:(BlockBachArray)uploadDataArray errorBlock:(BlockError)error;
```

### Start a measurement

```java
/**
 * Establish measurement connection and start BP measurement.
 * @param blockZeroState Zeroing state
 * @param pressure  Pressure value in the process of measurement, the unit is ‘mmHg’.
 * @param blockWaveletWithHeartbeat   Wavelet data set with heart beat.
 * @param blockWaveletWithoutHeartbeat   Wavelet data set without heart beat.
 * @param result   result of the measurement, including systolic pressure, diastolic pressure, pulse rate and irregular judgment. Relevant key: time, sys, dia, heartRate, irregular. irregular will be 0 or 1.
 * @param error   Return error codes.
 */
-(void)commandStartMeasureWithZeroingState:(BlockZero)blockZeroState pressure:(BlockPressure)pressure waveletWithHeartbeat:(BlockWavelet)blockWaveletWithHeartbeat waveletWithoutHeartbeat:(BlockWavelet)blockWaveletWithoutHeartbeat  result:(BlockMeasureResult)result errorBlock:(BlockError)error;
```

### Stop measurement

```java
/**
 * Measurement termination and stop BP measurement
 * @param success  The block return means measurement has been terminated.
 * @param error  A block to return the error in ‘Establish measurement connection’ in BP.
 */
-(void)stopBPMeassureSuccessBlock:(BlockSuccess)success errorBlock:(BlockError)error;
```

### Disconnect BP5S device

```java
/**
 * Disconnect current device
 */
-(void)commandDisconnectDevice;
```
