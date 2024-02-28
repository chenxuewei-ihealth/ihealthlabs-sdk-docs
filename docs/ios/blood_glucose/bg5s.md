---
title: BG5S
sidebar_position: 4
---

## WorkFlow

1. Scan and connect BG5S blood glucose monitor.

2. BG5S support online and offline measurement.

## Connection to device

### 1.Listen to device notify

```java
[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(DeviceDiscover:) name:kNotificationNameBG5SDidDiscover object:nil];

[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(DeviceConnectFail:) name:kNotificationNameBG5SConnectFail object:nil];

[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(DeviceConnect:) name:kNotificationNameBG5SConnectSuccess object:nil];

[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(DeviceDisConnect:) name:kNotificationNameBG5SDidDisConnect object:nil];

[BG5SController sharedController];
```

### 2.Scan for BG5S devices

```java
[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_BG5S];
```

### 3.Connect to BG5S devices

```java
[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_BG5S andSerialNub:deviceMac];
```

## API reference

### Get status information from BG5S

```java
/**
 Query BG5S state information including battery value,device date, device timezone, strip used, quantity of offline data, blood code version, CTL code version, unit.

 @param stateInfoBlock BG5SStateInfo object
 @param errorBlock the block means fail. You can get error from this block
 @note  If analysis occurs error, BG5SStateInfo object maybe nil or some of its property are nil.
 */
- (void)queryStateInfoWithSuccess:(BG5SStateInfoBlock)stateInfoBlock
                       errorBlock:(BG5SSDKErrorBlock)errorBlock;

```

### Set time to BG5S device

```java
/**
 Set time

 @param date the date you want to set should be an UTC time. valid range:Jan. 1,2000 - Dec. 31,2099. If date is nil, use [NSdate date] and system time zone
 @param timezone the timezone you want to set should be from -12.00 to 14.00; step length = 0.25
 @param successBlock the block means success
 @param errorBlock the block means fail. You can get error from this block
 @note  If date is out of range, BG5SError_InputParametersError will be returned by block. 
        If date and timezone are valid , use input parameters; otherwise use [NSdate date] and system time zone;
 */
- (void)setTimeWithDate:(NSDate *)date
               timezone:(float)timezone
           successBlock:(BG5SSuccessBlock)successBlock
             errorBlock:(BG5SSDKErrorBlock)errorBlock;
```

### Set unit to BG5S device

```java
/**
 Set unit

 @param unit the unit you want to set (BGUnit_mmolPL stands for mmol/L,BGUnit_mgPmL stands for mg/dL)
 @param successBlock the block means success
 @param errorBlock the block means fail. You can get error from this block
 */
- (void)setUnit:(BGUnit)unit
   successBlock:(BG5SSuccessBlock)successBlock
      errorBlock:(BG5SSDKErrorBlock)errorBlock;
```

### Delete used strip of BG5S

```java
/**
 Delete strip used info (the quantity of strip used is set to 0)

 @param successBlock the block means success
 @param errorBlock the block means fail. You can get error from this block
 */
- (void)deleteStripUsedInfoWithSuccessBlock:(BG5SSuccessBlock)successBlock
                                  errorBlock:(BG5SSDKErrorBlock)errorBlock;
```

### Get offline data from BG5S

```java
/**
 Query record data stored in BG5S

 @param successBlock the block means success; if has record, return non-empty array (BG5SRecordModel object); if no record, return empty array
 @param errorBlock the block means fail. You can get error from this block
 */
- (void)queryRecordWithSuccessBlock:(BG5SRecordBlock)successBlock
                          errorBlock:(BG5SSDKErrorBlock)errorBlock;
```

### Delete offline data of BG5S

```java
/**
 Delete record data stored in BG5S
 
 @param successBlock the block means success
 @param errorBlock the block means fail. You can get error from this block
 */
- (void)deleteRecordWithSuccessBlock:(BG5SSuccessBlock)successBlock
                          errorBlock:(BG5SSDKErrorBlock)errorBlock;
```

### Start measure

```java
/**
 Start online measurement with specific measure mode. 
 
 @note  If you don't call this method, BG5S use blood mode by default. 
 
 If CTL mode is sent, BG5S use CTL mode and BG5S can't be set to use blood mode until next connection.
 @param measureMode Blood or CTL
 @param successBlock the block means success
 @param errorBlock the block means fail. You can get error from this block
 */
- (void)startMeasure:(BGMeasureMode)measureMode
    withSuccessBlock:(BG5SSuccessBlock)successBlock
           errorBlock:(BG5SSDKErrorBlock)errorBlock;
```

###  Disconnect device

```java
/**
 Disconnect device
 */
- (void)disconnectDevice;
```

### Correct the measurement time of the offline data according to the flag and return in format JSON String

```java
/**
 Correct Measure Date if canCorrect is YES in BG5SRecordModel

 @param array BG5SRecordModel objects
 @param deviceDate This date should be read before set time method called.
 @return BG5SRecordModifiedModel objects; return empty array means input parameters is wrong.
 */
- (NSArray *)processData:(NSArray<BG5SRecordModel*> *)array deviceDate:(NSDate *)deviceDate;
```
