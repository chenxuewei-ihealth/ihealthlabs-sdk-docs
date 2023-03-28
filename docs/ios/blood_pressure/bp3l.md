---
title: BP3L
sidebar_position: 1
---

## WorkFlow

1. Scan and connect BP3L blood pressure monitor.

2. BP3L only support online measurement.

## Connection to device

#### 1.Listen to device notify

```java
[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:BP3LDiscover object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:BP3LConnectFailed object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:BP3LConnectNoti object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:BP3LDisConnectNoti object:nil];
            
            
[BP3LController shareBP3LController];
```

### 2.Scan for BP3L devices

```java
[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_BP3L];
```

### 3.Connect to BP3L devices

```java
[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_BP3L andSerialNub:deviceMac];
```

## API reference

### Get the device battery

```java
/**
 * Query battery remaining energy
 * @param energyValue  A block to return the device battery remaining energy percentage, ‘80’ stands for 80%.
 * @param error  A block to return the error in ‘Establish measurement connection’.
 */
-(void)commandEnergy:(BlockEnergyValue)energyValue errorBlock:(BlockError)error;
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
 * Measurement termination and stop BP3L measurement
 * @param success  The block return means measurement has been terminated.
 * @param error  A block to return the error in ‘Establish measurement connection’ in BP3L.
 */
-(void)stopBPMeassureSuccessBlock:(BlockSuccess)success errorBlock:(BlockError)error;
```
