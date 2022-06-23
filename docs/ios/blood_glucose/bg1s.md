---
title: BG1S
sidebar_position: 2
---

## WorkFlow

1. Scan and connect BG1S blood glucose monitor.

2. BG1S only support online measurement.

## Connection to device

### 1.Listen to device notify

```java

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:BG1SDiscover object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:BG1SConnectFailed object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:BG1SConnectNoti object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:BG1SDisConnectNoti object:nil];
            
[BG1SController shareIHBG1SController];
```

### 2.Scan for BG1S devices

```java
[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_BG1S];
```

### 3.Connect to BG1S devices

```java
[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_BG1S andSerialNub:deviceMac];
```

## API reference

### Get the measure mode of BG1S

```java
/**
 * Get device battary
 * @param function  A block to return the function and states that the device supports.
 * @param disposeBGErrorBlock  A block to refer ‘error’ in ‘Establish measurement connection’ in BG1S.
 */
-(void)commandFunction:(BlockBG1SDeviceFunction)function DisposeBGErrorBlock:(BlockBG1SError)disposeBGErrorBlock;
```

### Set the measure mode of BG1S

```java
/**
 * Button-pressing booting mode
 * @param testMode  Set the measurement mode,must be the same as the testType in send code method, BGMeasureMode_Blood means blood measurement mode, BGMeasureMode_NoBlood means control solution measurement mode.
 * @param disposeBGStripInBlock  This block returns yes means strip slides in.
 * @param disposeBGBloodBlock This block returns yes means the blood drop has beed sensed from the strip.
 * @param disposeBGResultBlock  This block returns the measurement by the unit of mg/dL, range from 20-600.
 * @param disposeBGErrorBlock   This block returns error codes,please refer to error codes list in BGMacroFile.
 */
-(void)commandCreateBG1STestModel:(BGMeasureMode)testMode
          DisposeBGStripInBlock:(DisposeBG1SStripInBlock)disposeBGStripInBlock
            DisposeBGBloodBlock:(DisposeBGBloodBlock)disposeBGBloodBlock
           DisposeBGResultBlock:(DisposeBGResultBlock)disposeBGResultBlock
            DisposeBGErrorBlock:(BlockBG1SError)disposeBGErrorBlock;
```

### Get the device code of BG1S

```java
/**
* Read the information of the strip from the BG meter
* @param  disposeBGCodeDic  This block returns the information of the strip, Strips means the number of strips which has been used, Date means expired date.
* @param  disposeBGErrorBlock  This block returns error codes,please refer to error codes list in BGMacroFile.
*/
-(void)commandReadBGCodeDic:(DisposeBGCodeDic)disposeBGCodeDic
        DisposeBGErrorBlock:(BlockBG1SError)disposeBGErrorBlock;
```

### Set the device code of BG1S

```java
/**
 * Send code

 * @param encodeString  The code String gets by scanning the QR code. Only used when codetype is GOD
 
 * @param disposeBGSendCodeBlock  YES means success, NO means fail.

 * @param disposeBGErrorBlock This block returns error codes,please refer to error codes list in BGMacroFile.
 */
-(void)commandSendBGCodeWithCodeString:(NSString*)encodeString DisposeBGSendCodeBlock:(DisposeBGSendCodeBlock)disposeBGSendCodeBlock DisposeBGErrorBlock:(BlockBG1SError)disposeBGErrorBlock;
```

### Disconnect

```java
/**
 * Disconnect current device
 */
-(void)commandDisconnectDevice;
```
