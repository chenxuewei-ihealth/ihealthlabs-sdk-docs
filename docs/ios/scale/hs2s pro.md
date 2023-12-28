---
title: HS2S Pro
sidebar_position: 8
---

## WorkFlow

1. Scan and connect HS2S Pro scale.

2. Get device info, if don't have any user info, create a user info and take a measure directly.

3. Get user info, if have this user info, get data stored in HS2S Pro. if don't have this user info, create a user info.

4. Get offline data and take measurement.

## Connection to device

### 1.Listen to device notify

```java

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:HS2SPRODiscover object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:HS2SPROConnectFailed object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:HS2SPROConnectNoti object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:HS2SPRODisConnectNoti object:nil];
            
[HS2SPROController shareIHHS2SPROController];
```

### 2.Scan for HS2S Pro devices

```java
[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_HS2SPro];
```

### 3.Connect to HS2S Pro devices

```java
[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_HS2SPro andSerialNub:deviceMac];
```

## API reference

### Get the device info

```java
/**
 *Get DeviceInfo (After the HS2S Pro device is successfully connected, the interface must be called to synchronize the device time. Otherwise, the offline data measurement time error will be caused)
 
 * @param successBlock Contains  device IDPS info(FirmwareVersion,HardwareVersion,Manufacture,ModelNumber,ProtocolString,SerialNumber),user count ,HS2S Pro current unit(1:Kg,2:LB,3:ST),battery
 * Example:
 * {
           Battary = 70;
           DeviceName = HS2SPro;
           FirmwareVersion = "0.5.4";
           HardwareVersion = "1.0.0";
           Manufacture = iHealth;
           ModelNumber = "HS2SPro 11070";
           ProtocolString = "com.jiuan.BFSV22";
           SerialNumber = 004D320CA04D;
           Unit = 1;
           UserCount = 1;
 * }
 * @param disposeErrorBlock  - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */
-(void)commandGetHS2SPRODeviceInfo:(DisposeHS2SPRODeviceInfo)successBlock
                 disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;
```

### Get the battery info

```java
/**
 *Get Battery
 
 * @param successBlock battary [Range:0～100]%
 * @param disposeErrorBlock  - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */
-(void)commandGetHS2SPROBattery:(DisposeHS2SPROBatteryBlock)successBlock
              disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;
```

### Set the unit of device

```java
/**
 
 * Set Unit
 
 * Import parameter:
 * @param unit  -Unit displayed on HS2S Pro: HSUnit_Kg、HSUnit_LB、HSUnit_ST。
 * Return parameters:
 * @param successBlock   
 * @param disposeErrorBlock  - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */

-(void)commandSetHS2SPROUnit:(HSUnit)unit
                successBlock:(DisposeHS2SPROResult)successBlock
           disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;
```

### Get the info of user in Device

```java
/**
 * Get UserInfo
 * Return parameters:
 * @param successBlock   success callback, see HS2SProUser
 * @param disposeErrorBlock  - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */
-(void)commandGetHS2SPROUserInfo:(DisposeHS2SPROUserInfo)successBlock
               disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;
```

### Create or update user info in device

```java
/**
 * Create or Update UserInfo (The device only supports the creation of a maximum of 8 users)
 * Import parameter:
 * @param user (user information must be entered in accordance with the reference range, otherwise it may be impossible to measure the accurate body fat information)
 
 * contains:
 * userId:NSData type,The user ID must be 16 bytes or the user creation fails,
 * createTS:NSInteger type,The unit of time is seconds ,
 * weight:NSNumber type,range:20-150kg,
 * age:NSNumber type,range:18-99 years,
 * height:NSNumber type,range:90-220cm
 * sex:0 female 1 male,
 * impedanceMark: 0 Don't measure 1 Measure
 * fitnessMark:0 Don't fitness 1:fitness
 * Return parameters:
 * @param successBlock   
 * @param disposeErrorBlock  - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */
-(void)commandUpdateHS2SPROUserInfoWithUser:(HS2SProUser*)user
                               successBlock:(DisposeHS2SPROResult)successBlock
                          disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;
```

### Delete user info in device

```java
/**
 *  Delete User
 * Import parameter:
 * @param userId :NSData type,The user ID must be 16 bytes or the user creation fails,
 * Return parameters:
 * @param successBlock  
 * @param disposeErrorBlock  - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */
-(void)commandDeleteHS2SPROUserWithUserId:(NSData*)userId
                             successBlock:(DisposeHS2SPROResult)successBlock
                        disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;
```

### Get off line data count

```java
/**
 *  Get Memory data count
 * Import parameter:
 * @param userId :NSData type,The user ID must be 16 bytes or the user creation fails,
 * Return parameters:
 * @param successBlock  NSNumber Type,memory count  range: 0~500
 * @param disposeErrorBlock  - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */
-(void)commandGetHS2SPROMemoryDataCountWithUserId:(NSData*)userId
                                     successBlock:(DisposeHS2SPROMemoryCountBlock)successBlock
                                disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;
```

### Get offline data

```java
/**
 *  Get Memory data
 * Import parameter:
 * @param userId :NSData type,The user ID must be 16 bytes or the user creation fails,
 * Return parameters:
 * @param successBlock  success callback, see HS2SProMeasurementModel
 * @param disposeErrorBlock  - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */
-(void)commandGetHS2SPROMemoryDataWithUserId:(NSData*)userId
                                successBlock:(DisposeHS2SPROMemoryDataBlock)successBlock
                           disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;
```

### Delete offline data

```java
/**
 *  Delete Memory data
 * Import parameter:
 * @param userId :NSData type,The user ID must be 16 bytes or the user creation fails,
 * Return parameters:
 * @param successBlock  
 * @param disposeErrorBlock  - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */
-(void)commandDeleteHS2SPROMemoryDataWithUserId:(NSData*)userId
                                   successBlock:(DisposeHS2SPROResult)successBlock
                              disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;

```

### Get Anonymous Memory data count

```java
/**
 *  Get Anonymous Memory data count
 * Return parameters:
 * @param successBlock memory count
 * @param disposeErrorBlock  - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */
-(void)commandGetHS2SPROAnonymousMemoryDataCount:(DisposeHS2SPROAnonymousMemoryCountBlock)successBlock
                               disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;

```

### Get Anonymous Memory data

```java
/**
 *  Get Anonymous Memory data
 * Return parameters:
 * @param successBlock   success callback, see HS2SProAnonymousModel
 * @param disposeErrorBlock  - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */
-(void)commandGetHS2SPROAnonymousMemoryData:(DisposeHS2SPROAnonymousMemoryDataBlock)successBlock
                          disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;

```

### Delete Anonymous Memory data

```java
/**
 *  Delete Anonymous Memory data
 * Return parameters:
 * @param successBlock  
 * @param disposeErrorBlock  - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */
-(void)commandDeleteHS2SPROAnonymousMemoryData:(DisposeHS2SPROResult)successBlock
                             disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;
```

### Measure

```java
/**
 *  Measure Data
 * Import parameter:
 * @param user (user information must be entered in accordance with the reference range, otherwise it may be impossible to measure the accurate body fat information)
 * @param realtimeWeightBlock the value means  changing weight value before the device gets a stable value. unit: kg
 * @param stableWeightBlock a stable weight value
 * @param weightAndBodyInfoBlock complete body info result, including body fat percentage and so on. Example:
 *{
 * MAC = 3CAA408E0002;
 * Result = "<HS2SProMeasurementModel: 0x283069700>";
 * SuccessFlag = 0; // 0: success 1: fail, not get impedance 2: fail, not compute body fat and other results successfully
 * }
 * @param disposeErrorBlock - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */
-(void)commandStartHS2SPROMeasureWithUser:(HS2SProUser*)user
                      realtimeWeightBlock:(DisposeHS2SPROUnStableWeight)realtimeWeightBlock
                        stableWeightBlock:(DisposeHS2SPROStableWeight)stableWeightBlock
                   weightAndBodyInfoBlock:(DisposeHS2SPROWeightAndBodyInfo)weightAndBodyInfoBlock
                        disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;

```

### Guest Measure

```java
/**
 * Guest Measure Data
 * Import parameter:
 * @param realtimeWeightBlock the value means  changing weight value before the device gets a stable value. unit: kg
 * @param stableWeightBlock a stable weight value
 * @param disposeErrorBlock - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */
-(void)commandStartHS2SPROGuestMeasureWithRealtimeWeightBlock:(DisposeHS2SPROUnStableWeight)realtimeWeightBlock
                                             stableWeightBlock:(DisposeHS2SPROStableWeight)stableWeightBlock
                                             disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;

```

### Reset device

```java
/**
 *  Reset device
 * Return parameters:
 * @param successBlock   
 * @param disposeErrorBlock  - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */
-(void)commandResetHS2SPRODevice:(DisposeHS2SPROResult)successBlock
               disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;

```

### Light up bluetooth

```java
/**
 *  Show bluetooth symbol in device's screen.
 * Return parameters:
 * @param successBlock  
 * @param disposeErrorBlock  - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */
-(void)commandShowBluetoothLightWithSuccessBlock:(DisposeHS2SPROResult)successBlock
                        disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;

```
### Enter heart rate measurement mode


```java

/**
 *  Enter heart rate measurement mode
 * Return parameters:
 * @param result example:
  * heartResultDic:
  * {
  *     HS2SProNotiKeyHeartRate = 89;
  *     HS2SProNotiKey_MeasureSuccessFlag = 0; // no error
  *     MAC = 3CAA408E0005;
  * }
  * {
  *     HS2SProNotiKey_MeasureSuccessFlag" = 1; // error 1: no real-time data received in 6s, 2:  the algorithm judges that the user is weighing down,3:  calculation failed,4: 30s timeout
  *     MAC = 3CAA408E0005;
  * }
 * @param status ( 1: User on the scale,2: User referred below,3: The user's heartbeat signal is detected)
 * @param disposeErrorBlock  - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */
-(void)commandEnterHS2SPROHeartRateMeasurementMode:(DisposeHS2SPROHeartResult)result
                                 measurementStatus:(DisposeHS2SPROMeasurementStatus)status
                                 disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;
```
### Exit heart rate measurement mode

```java

/**
 *  Exit heart rate measurement mode
 * Return parameters:
 * @param result   success callback
 * @param disposeErrorBlock  - error code
 * Error code definition：
 *  refer to “error” : HS2S Pro error instruction.
 */
-(void)commandExitHS2SPROHeartRateMeasurementMode:(DisposeHS2SPROResult)result disposeErrorBlock:(DisposeHS2SPROErrorBlock)disposeErrorBlock;

```

### Disconnect  device

```java
/**
 Disconnect current device
 */

- (void)commandDisconnectDevice;

```
