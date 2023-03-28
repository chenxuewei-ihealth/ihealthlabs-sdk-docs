---
title: BP5
sidebar_position: 2
---

## WorkFlow

1. Scan and connect BP5 blood pressure monitor.

2. BP5 support online measurement and offline measurement.

If you use these devices, please contact us before submitting the Apple Store. We will generate a ppid based on the information you provided to help your app pass the review.

If you're using BP5, you need to add protocol:com.jiuan.BPV20、com.jiuan.BPV23


![integrate ios](/iOS_BP5_1.png)

## Connection to device

### 1.Listen to device notify

```java
[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:BP5ConnectNoti object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:BP5DisConnectNoti object:nil];

[BP5Controller shareBP5Controller];
```

### 2.Scan for BP5 devices

```java
BP5 is a classic bluetooth device, you need to manually pair and connect in the bluetooth of the iOS device, no need to call the scan command
```

### 3.Connect to BP5 devices

```java
BP5 is a classic bluetooth device, you need to manually pair and connect in the bluetooth of the iOS device, no need to call the connect command
```

## API reference

### Get the device battery

```java
/**
 * Query battery remaining energy
 * @param energyValue  A block to return the device battery remaining energy percentage, ‘80’ stands for 80%.
 * @param error  A block to return the error in ‘Establish measurement connection’
 */
-(void)commandEnergy:(BlockEnergyValue)energyValue errorBlock:(BlockError)error;
```

### Enable or Disable  BP5 to be measured offline

```java
/**
 * set up offline detection
 * @param open  True means on; False means off.
 * @param successBlock  A block to refer ‘set success’.
 * @param errorBlock  A block to refer ‘set failed’.
 */
-(void)commandSetOffline:(BOOL)open success:(BlockSuccess)successBlock error:(BlockError)errorBlock;
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
 * @param  uploadDataArray    offline data set, including measurement time, systolic pressure, diastolic pressure, pulse rate, irregular judgment,scheme ID,body movement flag. corresponding KEYs are time, sys, dia, heartRate, irregular,schemeID,bodyMovementFlg.
 * @param  error  A block to return the error.
 */
-(void)commandTransferMemoryDataWithTotalCount:(BlockBachCount)totalCount progress:(BlockBachProgress)progress dataArray:(BlockBachArray)uploadDataArray errorBlock:(BlockError)error;
```

### Start a measurement

```java
/**
 * Establish measurement connection and start BP measurement（Only for BP5）.
 * @param blockZeroState Zeroing state
 * @param pressure  Pressure value in the process of measurement, the unit is ‘mmHg’.
 * @param blockWaveletWithHeartbeat   Wavelet data set with heart beat.
 * @param blockWaveletWithoutHeartbeat   Wavelet data set without heart beat.
 * @param result   result of the measurement, including systolic pressure, diastolic pressure, pulse rate and irregular judgment. Relevant key: time, sys, dia, heartRate, irregular. irregular will be 0 or 1.
 * @param error   Return error codes.
 */

-(void)commandStartMeasureWithZeroingState:(BlockZero)blockZeroState pressure:(BlockPressure)pressure waveletWithHeartbeat:(BlockWavelet)blockWaveletWithHeartbeat waveletWithoutHeartbeat:(BlockWavelet)blockWaveletWithoutHeartbeat result:(BlockMeasureResult)result errorBlock:(BlockError)error;
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

