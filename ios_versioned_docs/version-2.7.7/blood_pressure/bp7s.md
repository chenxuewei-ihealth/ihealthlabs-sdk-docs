---
title: BP7S
sidebar_position: 5
---

## WorkFlow

1. Scan and connect BP7S blood pressure monitor.

2. BP7S only support offline measurement.

## Connection to device

### 1.Listen to device notify

```java
[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:BP7SDiscover object:nil];
            
[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:BP7SConnectFailed object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:BP7SConnectNoti object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:BP7SDisConnectNoti object:nil];

[BP7SController shareBP7SController];
```

### 2.Scan for BP7S devices

```java
[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_BP7S];
```

### 3.Connect to BP7S devices

```java
[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_BP7S andSerialNub:deviceMac];
```

## API reference

### Get the device battery

```java
/**
 * Query battery remaining energy.
 * @param energyValue  A block to return the device battery remaining energy percentage, ‘80’ stands for 80%.
 * @param error  A block to return the error in ‘Establish measurement connection’
 */
-(void)commandEnergy:(BlockEnergyValue)energyValue errorBlock:(BlockError)error;
```

### Set the BP7S display unit

```java
/**
 * Set units for the Device
 * @param UnitName   The unit name string that BP7S show result should use, must be @"mmHg" or @"kPa".
 * @param setResult  This block return means set success.
 * @param error  A block to return the error in set Unit communication.
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
 * @param  totalCount item quantity of total data
 * @param  progress upload completion ratio , from 0.0 to 1.0 or 0%~100％, 100% means upload completed.
 * @param  uploadDataArray    offline data set, including measurement time, systolic pressure, diastolic pressure, pulse rate, irregular judgment. corresponding KEYs are time, sys, dia, heartRate, irregular.
 * @param error   error codes.
 * Specification:
 *   1.  BPError0 = 0: Unable to take measurements due to arm/wrist movements.
 *   2.  BPError1:  Failed to detect systolic pressure.
 *   3.  BPError2:  Failed to detect diastolic pressure.
 *   4.  BPError3:  Pneumatic system blocked or cuff is too tight during inflation.
 *   5.  BPError4:  Pneumatic system leakage or cuff is too loose during inflation.
 *   6.  BPError5:  Cuff pressure reached over 300mmHg.
 *   7.  BPError6:  Cuff pressure reached over 15 mmHg for more than 160 seconds.
 *   8.  BPError7:  Data retrieving error.
 *   9.  BPError8:  Data retrieving error.
 *   10.  BPError9:  Data retrieving error.
 *   11.  BPError10:  Data retrieving error.
 *   12.  BPError11:  Communication Error.
 *   13.  BPError12:  Communication Error.
 *   14.  BPError13:  Low battery.
 *   15.  BPError14:  Device bluetooth set failed.
 *   16.  BPError15:  Systolic exceeds 260mmHg or diastolic exceeds 199mmHg.
 *   17.  BPError16:  Systolic below 60mmHg or diastolic below 40mmHg.
 *   18.  BPError17:  Arm/wrist movement beyond range.
 *   19.  BPNormalError=30:  device error, error message displayed automatically.
 *   20.  BPOverTimeError:  Abnormal communication.
 *   21.  BPNoRespondError:  Abnormal communication.
 *   22.  BPBeyondRangeError:  device is out of communication range.
 *   23.  BPDidDisconnect:  device is disconnected.
 *   24.  BPAskToStopMeasure:  measurement has been stopped.
 *   25.  BPInputParameterError=400:  Parameter input error.
 */
-(void)commandTransferMemoryDataWithTotalCount:(BlockBachCount)totalCount progress:(BlockBachProgress)progress dataArray:(BlockBachArray)uploadDataArray errorBlock:(BlockError)error;
```

### Set BP7S device angle

```java
/**
 Set the effective angle range for left hand measurement and right hand measurement to the Device

 @param angleInfo A dictionary set the max and mini effective angles for left hand measurement and right hand       measurement,the angle values type is NSNumber, ranging from 0~90
 with the four keys are:
 @"highAngleForLeft", @"lowAngleForLeft", @"highAngleForRight", @"lowAngleForRight".
 @param setResult This block return means set success.
 @param error A block to return the error in set angles communication.
 */
-(void)commandSetAngle:(NSDictionary *)angleInfo disposeSetReslut:(BlockSuccess)setResult errorBlock:(BlockError)error;
```

### Disconnect BP7S device

```java
/**
 * Disconnect current device
 */
-(void)commandDisconnectDevice;
```
