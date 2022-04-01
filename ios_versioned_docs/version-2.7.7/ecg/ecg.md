---
title: ECG3
sidebar_position: 1
---
## WorkFlow

## Connection to device

### 1.Listen to device notify

```java

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:ECG3Discover object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:ECG3ConnectFailed object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:ECG3ConnectNoti object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:ECG3DisConnectNoti object:nil];
            
[ECG3Controller shareECG3Controller];

```

### 2.Scan for ECG3 devices

```java
[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_ECG3];
```

### 3.Connect to ECG3 devices

```java
[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_ECG3 andSerialNub:deviceMac];
```

## API reference

### Sync time

```java
/**
 * Sync time
 * @param syncTimeBlock Sync time successfully
 * @param errorBlock Communication error codes, see ECG3 error descriptions.
 */
-(void)commandECG3SyncTime:(DisposeECG3SyncTimeSuccessBlock)syncTimeBlock withErrorBlock:(DisposeECG3ErrorBlock)errorBlock;
```

### Get Battery

```java
/**
 * Get Battery
 * @param batteryBlock from 0～100.
 * @param errorBlock Communication error codes, see ECG3 error descriptions.
 */
-(void)commandECG3GetBatteryInfo:(DisposeECG3GetBatteryBlock)batteryBlock withErrorBlock:(DisposeECG3ErrorBlock)errorBlock;
```

### Start Measure

```java
/**
 * Start Measure
 * @param startMeasureBlock True: Success， False: Failed.
 * @param waveDataBlock waveData：ECGWaveData use for draw wave
 * @param pluseResultBlock hasHR: whether have heart; HR: heart rate (unit: bpm) only valid when isHaveHeart is true
 * @param errorBlock Communication error codes, see ECG3 error descriptions.
 */
-(void)commandECG3StartMeasure:(DisposeECG3StartMeasureBlock)startMeasureBlock withWaveData:(DisposeECG3WaveDataBlock)waveDataBlock withPulseResult:(DisposeECG3PluseResultBlock)pluseResultBlock withErrorBlock:(DisposeECG3ErrorBlock)errorBlock;
```

### Finish Measure

```java
/**
 * Finish Measure
 * @param finishMeasureBlock finish successfully
 * @param errorBlock Communication error codes, see ECG3 error descriptions.
 */
-(void)commandECG3FinishMeasure:(DisposeECG3FinishMeasureSuccessBlock)finishMeasureBlock withErrorBlock:(DisposeECG3ErrorBlock)errorBlock;
```

### Disconnect

```java
/**
 Disconnect device
 */
- (void)disconnectDevice;
```

