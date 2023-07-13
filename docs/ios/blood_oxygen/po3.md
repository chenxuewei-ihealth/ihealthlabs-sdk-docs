---
title: PO3
sidebar_position: 2
---

## WorkFlow

1. Scan and connect PO3 device.

2. PO3 support online measurement and offline measurement.

## Connection to device

### 1.Listen to device notify

```java

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:PO3ConnectNoti object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:PO3DisConnectNoti object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:PO3Discover object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:PO3ConnectFailed object:nil];
            
[PO3Controller shareIHPO3Controller];
```

### 2.Scan for PO3 devices

```java
[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_PO3];
```

### 3.Connect to PO3 devices

```java
[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_PO3 andSerialNub:deviceMac];
```

## API reference

### Sync time

```java

/**
 * Restore Sync time
 * @param syncTimeBlock Sync completed. Yes = Success, No = Fail.
 * @param errorBlock Communication error codes
 */
-(void)commandPO3SyncTime:(DisposePO3SyncTimeBlock)syncTimeBlock withErrorBlock:(DisposePO3ErrorBlock)errorBlock;
```

### Get the PO3 battery status

```java

/**
 * Query power status
 * @param batteryBlock Battery，from 0～100
 * @param errorBlock Communication error codes
 */
-(void)commandPO3GetDeviceBattery:(DisposePO3BatteryBlock)batteryBlock withErrorBlock:(DisposePO3ErrorBlock)errorBlock;
```
### Restore Historical data

```java

/**
 * Restore Historical data
 * @param offlineDataCount Number of historical offline data measurements.
 * @param offlineData date, spo2, bpm, and wave.
 * @param offlineWaveData Pulse intensity, corresponding key: wave
 * @param finishUpload End transmission of data, yes for success, no for fail.
 * @param errorBlock Communication error codes
 */
-(void)commandPO3OfflineDataCount:(DisposePO3OfflineDataCount)offlineDataCount withOfflineData:(DisposePO3OfflineData)offlineData withOfflineWaveData:(DisposePO3OfflineWaveData)offlineWaveData withFinishMeasure:(DisposePO3FinishUpload)finishUpload  withErrorBlock:(DisposePO3ErrorBlock)errorBlock;
```

### Start real-time measurement

```java
/**
 * Restore Real-time measurements
 * @param startMeasure  Start measurement, Return no for fail, return yes for success.
 * @param measureData  SpO2 values, including SpO2, pulse rate, pulse intensity. Corresponding keys are spo2, bpm, wave, and pi.
 * @param finishMeasure  Finish measurement. No for fail, yes for success.
 * @param errorBlock Communication error codes
 */

-(void)commandPO3StartMeasure:(DisposePO3StartMeasure)startMeasure withMeasureData:(DisposePO3MeasureData)measureData  withFinishMeasure:(DisposePO3FinishMeasure)finishMeasure  withErrorBlock:(DisposePO3ErrorBlock)errorBlock;
```

### Disconnect the PO3

```java
/**
 * Disconnect connection
 * @param disconnectBlock  yes = success, no = fail.
 * @param errorBlock Communication error codes
 */
-(void)commandPO3Disconnect:(DisposePO3DisconnectBlock)disconnectBlock withErrorBlock:(DisposePO3ErrorBlock)errorBlock;
```
