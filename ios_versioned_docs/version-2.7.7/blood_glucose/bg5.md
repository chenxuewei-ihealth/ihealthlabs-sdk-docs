---
title: BG5
sidebar_position: 3
---

## WorkFlow

1. Scan and connect BG5 blood glucose monitor.

2. BG5 support online and offline measurement.

If you use these devices, please contact us before submitting the Apple Store. We will generate a ppid based on the information you provided to help your app pass the review.

If you're using BG5, you need to add protocol:com.jiuan.BGV31

## Connection to device

### 1.Listen to device notify

```java
            
[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(DeviceConnect:) name:BG5ConnectNoti object:nil];

[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(DeviceDisConnect:) name:BG5DisConnectNoti object:nil];
            
[BG5Controller shareIHBg5Controller];
```

### 2.Scan for BG5 devices

```java
BG5 is a classic bluetooth device, you need to manually pair and connect in the bluetooth of the iOS device, no need to call the scan command
```

### 3.Connect to BG5 devices

```java
BG5 is a classic bluetooth device, you need to manually pair and connect in the bluetooth of the iOS device, no need to call the connect command
```

## API reference


### Set time to BG5 device

```java
/**
 Set Time
 @param disposeBGSetTime The block return YES means set success, NO means set fail.
 @param disposeBGErrorBlock This block returns error codes,please refer to error codes list in BGMacroFile.
 @note  Time is local time
 */
-(void)commandBGSetTime:(DisposeBGSetTime)disposeBGSetTime
    DisposeBGErrorBlock:(DisposeBGErrorBlock)disposeBGErrorBlock;
```

### Set unit to BG5 device

```java
/**
 * Set Unit displayed in BG5's screen
 * @param unitState The block return YES means set success, NO means set fail.
 * @param disposeBGSetUnitResult YES:success NO:fail
 * @param disposeBGErrorBlock This block returns error codes,please refer to error codes list in BGMacroFile.
 */
-(void)commandBGSetUnit:(BGUnit )unitState
   DisposeSetUnitResult:(DisposeBGSetUnit)disposeBGSetUnitResult
    DisposeBGErrorBlock:(DisposeBGErrorBlock)disposeBGErrorBlock;
```

### Get the BG5 battery status

```java
/**
 * Query battery remaining energy
 * @param disposeBatteryBlock  A block to return the device battery remaining energy percentage, ‘80’ stands for 80%. 255 means device in charging.
 * @param disposeErrorBlock   This block returns error codes,please refer to error codes list in BGMacroFile.
 */
-(void)commandQueryBattery:(DisposeBGBatteryBlock)disposeBatteryBlock
         DisposeErrorBlock:(DisposeBGErrorBlock)disposeErrorBlock;
```

### Send code with type

```java
/**
 * Send code with type (Note: After you got the CTL test results, you need to send the blood Code again.)
 * @param testType Set the measure test type,@1 is Blood Test,@2 is CTL Test.
 * @param codeType Set the code type,@1 is GOD,@2 is GDH.
 * @param encodeString  The code String gets by scanning the QR code. Only used when codetype is GOD
 * @param date  The strip expired date. support Jan 1,2000 to Dec 31, 2099. If other value, return BG5Error_InputParametersError.
 * @param num  the number of remaining strips,ranging from 1-255.
 * @param disposeBGSendCodeBlock  YES means success, NO means fail.
 * @param disposeBGStartModel  The boot mode of the BG meter, BGOpenMode_Strip means booting the meter by sliding the strip, BGOpenMode_Hand means booting the meter by pressing the on/off button. commandCreateBGtestStripInBlock should be called after recieving BGOpenMode_Strip, commandCreateBGtestModel should be called after recieving BGOpenMode_Hand.
 * @param disposeBGErrorBlock This block returns error codes,please refer to error codes list in BGMacroFile.
 */
-(void)commandSendBGCodeWithMeasureType:(BGMeasureMode)testType
                               CodeType:(BGCodeMode)codeType
                             CodeString:(NSString*)encodeString
                              validDate:(NSDate*)date
                              remainNum:(NSNumber*)num
                 DisposeBGSendCodeBlock:(DisposeBGSendCodeBlock)disposeBGSendCodeBlock
                    DisposeBGStartModel:(DisposeBGStartModel)disposeBGStartModel
                    DisposeBGErrorBlock:(DisposeBGErrorBlock)disposeBGErrorBlock;
```

### Get historical data

```java
/**
 Tranfer offline history records. 
 For BG5 V3.0, after calling this method, you should call commandDeleteMemorryData: method. Otherwise, the measure date may be wrong.

 @param disposeBGDataCount The number of the records in the meter memory.
 @param disposeBGHistoryData The offline history records detail, result means result, date means the measurement time.
 @param disposeBGErrorBlock This block returns error codes,please refer to error codes list in BGMacroFile.
 */
-(void)commandTransferMemorryData:(DisposeBGDataCount)disposeBGDataCount
             DisposeBGHistoryData:(DisposeBGHistoryData)disposeBGHistoryData
              DisposeBGErrorBlock:(DisposeBGErrorBlock)disposeBGErrorBlock;
```

### Delete historical data

```java
/**
 Delete offline history records

 @param DisposeBGDeleteData deleteOk YES or NO
 @param disposeBGErrorBlock This block returns error codes,please refer to error codes list in BGMacroFile.
 */
-(void)commandDeleteMemorryData:(DisposeBGDeleteData)DisposeBGDeleteData
            DisposeBGErrorBlock:(DisposeBGErrorBlock)disposeBGErrorBlock;
```


### Send bottleId to current BG5 device

```java
/**
 *Send BottleID to the BG meter
 *@param bottleID  bottleID, 4 bytes,0x00000000-0xFFFFFFFF
 *@param disposeBGSendBottleIDBlock The block return YES means set success, NO means set fail.
 *@param disposeBGErrorBlock  This block returns error codes,please refer to error codes list in BGMacroFile.
 */
-(void)commandSendBottleID:(long long)bottleID
DisposeBGSendBottleIDBlock:(DisposeBGSendBottleIDBlock)disposeBGSendBottleIDBlock
       DisposeBGErrorBlock:(DisposeBGErrorBlock)disposeBGErrorBlock;
```

### Get bottleId from current BG5 device

```java
/**
 * Get the bottleID stored in the BG meter
 * @param disposeBGBottleID  This block returns the ID which is stored in the BG meter, to verify if the strip that has been used is from the same bottle of the registered one. if not match, the app will notify the user need scan the new bottle; If match, the app can get the number of used strips and expire date.
 * @param disposeBGErrorBlock This block returns error codes,please refer to error codes list in BGMacroFile.
 */

-(void)commandBGGetBottleID:(DisposeBGBottleID)disposeBGBottleID
        DisposeBGErrorBlock:(DisposeBGErrorBlock)disposeBGErrorBlock;
```

### Strip-Sliding booting mode Measure

```java
/**
 Strip-Sliding booting mode

 @param disposeBGStripInBlock This block returns yes means strip slides in.
 @param disposeBGBloodBlock This block returns yes means the blood drop has beed sensed from the strip.
 @param disposeBGResultBlock This block returns the measurement by the unit of mg/dL, range from 20-600.
 @param disposeBGErrorBlock This block returns error codes,please refer to error codes list in BGMacroFile.

 */
-(void)commandCreateBGtestStripInBlock:(DisposeBGStripInBlock)disposeBGStripInBlock
                   DisposeBGBloodBlock:(DisposeBGBloodBlock)disposeBGBloodBlock
                  DisposeBGResultBlock:(DisposeBGResultBlock)disposeBGResultBlock
                   DisposeBGErrorBlock:(DisposeBGErrorBlock)disposeBGErrorBlock;
```

### Button-pressing booting mode Measure

```java
/**
 * Button-pressing booting mode
 * @param testMode  Set the measurement mode,must be the same as the testType in send code method, BGMeasureMode_Blood means blood measurement mode, BGMeasureMode_NoBlood means control solution measurement mode.
 * @param disposeBGStripInBlock  This block returns yes means strip slides in.
 * @param disposeBGBloodBlock This block returns yes means the blood drop has beed sensed from the strip.
 * @param disposeBGResultBlock  This block returns the measurement by the unit of mg/dL, range from 20-600.
 * @param disposeBGErrorBlock   This block returns error codes,please refer to error codes list in BGMacroFile.
 */
-(void)commandCreateBGtestModel:(BGMeasureMode)testMode
          DisposeBGStripInBlock:(DisposeBGStripInBlock)disposeBGStripInBlock
            DisposeBGBloodBlock:(DisposeBGBloodBlock)disposeBGBloodBlock
           DisposeBGResultBlock:(DisposeBGResultBlock)disposeBGResultBlock
            DisposeBGErrorBlock:(DisposeBGErrorBlock)disposeBGErrorBlock;
```


### Keep in connection

```java
/**
 * Keep the connection to enable enough time for operation such as scan code, insert strip and drop blood.
 * @param disposeBG5KeepConnectBlock A block returns the result of the keeping connection order,'YES' means setting success,'NO' means fail.
 * @param disposeErrorBlock   This block returns error codes,please refer to error codes list in BGMacroFile.
 */
-(void)commandKeepConnect:(DisposeBG5KeepConnectBlock)disposeBG5KeepConnectBlock
        DisposeErrorBlock:(DisposeBGErrorBlock)disposeErrorBlock;
```




### Parse bottle Info of the QRCode

```java
/**
 Analyze code include bottleID，DueDate and the number of strips. Only Available for GOD Code
 
 @param encodeString The code String gets by scanning the QR code.
 @return return a dictionary contains keys such as @"BottleID",@"StripNum",@"DueDate"; return nil if input parameter is GDH code or code is invalid.
 */
-(NSDictionary *)codeStripStrAnalysis:(NSString *)encodeString;
```
