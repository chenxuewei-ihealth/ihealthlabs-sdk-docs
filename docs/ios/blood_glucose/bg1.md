---
title: BG1
sidebar_position: 1
---

## WorkFlow

1. Scan and connect BG1 blood glucose monitor.

2. BG1 only support online measurement.

## Connection to device

### 1.Listen to device notify

```java

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:kNotificationNameNeedAudioPermission object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:kNotificationNameBG1DidDisConnect object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:kNotificationNameAudioDeviceInsert object:nil];

[[BG1Controller shareBG1Controller] initBGAudioModule];
```

### 2.Scan for BG1 devices

```java
[[BG1Controller shareBG1Controller] initBGAudioModule];
```

### 3.Connect to BG1 devices

```java
/**
 * Start connect BG1 and get the connection status.
 * @param BG1Model the BG1 type.
 * @param discover This block returns means blood glucose meter plugged in.
 * @param IDPSInfo  This block returns the IDPS of the meter, this will be operated for the first time when the app talks to the meter.
 * @param connect This block returns the connection status, the connection of the BG meter is regular , the measurement could be processed.
 * @param error block returns error codes,please refer to error codes list in BGMacroFile.
 * @Notice  Notice: Using this method should be placed kNotificationNameNeedAudioPermission callback
 */
- (void)commandBG1DeviceModel:(NSNumber *)BG1Model withDiscoverBlock:(DisposeBG1DiscoverBlock)discover withDiscoverBlock:(DisposeBG1IDPSBlock)IDPSInfo withConnectBlock:(DisposeBG1ConnectBlock)connect withErrorBlock:(DisposeBG1ErrorBlock)error;
```

## API reference

### Parse bottle Info of the QRCode

```java
/**
 Analyze code include bottleID，DueDate and the number of strips. Only Available for GOD Code
 
 @param encodeString The code String gets by scanning the QR code.
 @return return a dictionary contains keys such as @"BottleID",@"StripNum",@"DueDate"; return nil if input parameter is GDH code or code is invalid.
 */
-(NSDictionary *)codeStripStrAnalysis:(NSString *)encodeString;
```

### Send code to BG1 device

```java
/**
 * Establish connection and start BG measurement.(New)
 * @param measureMode Set the measure test type,BGMeasureMode_Blood is Blood Test,BGMeasureMode_NoBlood is CTL Test.
 * @param codeMode Set the code type,BGCodeMode_GOD is GOD,BGCodeMode_GDH is GDH.
 * @param codeString The code String gets by scanning the QR code.
 * @param sendCodeResult   If the QR code is accepted, yes means accepted, no means deny.
 * @param stripIn The strips slide into the BG meter.
 * @param blood  The blood drop has beed sensed from the strip.
 * @param measureResult  Returns the measurement by the unit of mg/dL, range from 20-600.
 * @param stripOut  The strip has been pulled out.
 * @param error  This block returns error codes,please refer to error codes list in BGMacroFile.
 */
- (void)commandBG1MeasureMode:(BGMeasureMode)measureMode withCodeMode:(BGCodeMode)codeMode withCodeString:(NSString *)codeString withSendCodeResultBlock:(DisposeBG1SendCodeResultBlock)sendCodeResult withStripInBlock:(DisposeBGStripInBlock)stripIn withBloodBlock:(DisposeBGBloodBlock)blood withResultBlock:(DisposeBGResultBlock)measureResult withStripOutBlock:(DisposeBGStripOutBlock)stripOut withErrorBlock:(DisposeBG1ErrorBlock)error;
```
