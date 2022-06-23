---
title: HS4S
sidebar_position: 4
---

## WorkFlow

1. Scan and connect HS4S scale.

2. HS4S support online measurement and offline measurement.

3. For iOS system, HS4 and HS4S interface API is the same

## Connection to device

### 1.Listen to device notify

```java
[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:HS4Discover object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:HS4ConnectFailed object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:HS4ConnectNoti object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:HS4DisConnectNoti object:nil];

[HS4Controller shareIHHs4Controller];
```

### 2.Scan for HS4S devices

```java
[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_HS4];
```

### 3.Connect to HS4S devices

```java
[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_HS4 andSerialNub:deviceMac];
```

## API reference

### Get offline data

```java
/**
 Upload memory data
 
 Return parameters:
 @param startTransmission Start Memory transmission.
 @param progress Memory transmission progress，[Range:0.0～1.0].
 @param memorryData Record data including weight (kg), measurement time，coordinated key：weight，date.[Range of weight 0.0~180.0(kg)]
 @param finishTransmission Finish memory transmission.
 @param disposeErrorBlock Record the error code in uploading process.
 */
-(void)commandTransferMemorryData:(StartHS4Transmission)startTransmission DisposeProgress:(DisposeProgress)progress MemorryData:(MemorryData)memorryData FinishTransmission:(FinishHS4Transmission)finishTransmission DisposeErrorBlock:(DisposeHS4ErrorBlock)disposeErrorBlock;
```

### Start a online measurement

```java
/**
 Establish memory and measurement connection
Import parameter:
 @param tempUnit Unit displayed on HS4: HSUnit_Kg、HSUnit_LB、HSUnit_ST。
 Return parameters:
 The measurement via SDK will be operated in the case of 1-4, and will be terminated if any of 5-8 occurs. The interface needs to be re-called after analyzing the return parameters.
 @param unStableWeight Current weight, (Kg) [Value Range:0~180]
 @param stableWeight Stable weight, (Kg) [Value Range:0~180]
 @param disposeErrorBlock  error code
 */
-(void)commandMeasureWithUint:(HSUnit)tempUnit Weight:(UnStableWeight)unStableWeight StableWeight:(StableWeight)stableWeight DisposeErrorBlock:(DisposeHS4ErrorBlock)disposeErrorBlock;
```

### Disconnect the HS4

```java
/**
 Disconnect current device
 */

-(void)commandDisconnectDevice;
```

