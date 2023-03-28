--- 
title: HS5
sidebar_position: 5
---

## WorkFlow

1. The HS5 is Wifi body fat scale. If you've already set up wifi information, please jump to step 2. If you need to set wifi information, please scan and connect HS5(Bluetooth) scale.

2. Call funtion "setWifi" for setting wifi information to HS5(Bluetooth) scale.

3. HS5 support online measurement and offline measurement.

## Connection to device

### 1.Listen to device notify

```java

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectForHS5:) name:HS5ConnectNoti object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnectForHS5:) name:HS5DisConnectNoti object:nil];

[HS5Controller shareIHHs5Controller];
```

### 2.Scan for HS5(WIFI) devices

```java

[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_HS5];

```

### 3.Connect to HS5(WIFI) devices

```java

HS5 is a wifi connection. After the automatic connection is successful, an automatic connection successful notification will be sent.
```

## API reference

### Set the wifi information to the scale(Bluetooth)

```java
Hs5ControlForBt control = iHealthDevicesManager.getInstance().getHs5ControlForBt(mDeviceMac);
control.setWifi(String ssid, int type, String pw)() 
```

```java
// Return value
private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {
    @Override
    public void onDeviceNotify(String mac, String deviceType, String action, String message) {
        if (HsProfile.ACTION_SETTINGWIFI.equals(action)) {
            Log.i("", "setting wifi");
        } else if (HsProfile.ACTION_SETWIFI_SUCCESS.equals(action) {
            Log.i("", "set wifi success");
        } else if (HsProfile.ACTION_SETWIFI_FAIL.equals(action) {
            Log.i("", "set wifi fail");
        } else if (HsProfile.ACTION_SETWIFI_UNKNOW.equals(action) {
            Log.i("", "set wifi unknow");
        }
    } 
}
```
### Establish memory and measurement connection
```java
/**
 Establish memory and measurement connection
 
Import Parameters:
 @param tempUser included properties: userAccount、clientID、clientSecret。
   userAccount: either email or mobile phone number (mobile phone number is not currently supported yet)
   height: the height of a user (cm);
   clientID & clientSecret: the only identification for users of the SDK, requires registration from iHealth administrator, please email: heguangming@ihealthlabs.com.cn for more information.
 
 Return Parameters:
 The measurement via SDK will be operated in the case of 1-3, and will be terminated if any of 4-8 occurs. The interface needs to be re-called after analyzing the return parameters.
 Notice: when a new user registers via SDK, an ‘iHealth disclaimer’ will pop up automatically, and will require the user to agree in order to continue. SDK applications require an Internet connection; UserAuthen_TrySuccess is invalidate for HS5.
 @param serialNub The only identification of a user，should be reserved in third party apps，provide to other Apps [Range:0~0xFFFFFFF]
 @param MemorryUserListHS5Data Existing user info in HS5，including serialNub、Position of users. Related key: serialNumber、position
 @param disposeErrorBlock error codes in transmission process: Errors in HS5
 */
-(void)commandCreateUserManageConnectWithUser:(HealthUser *)tempUser  currentUserSerialNub:(CurrentSerialNub)serialNub deviceUserList:(MemorryUserListHS5Data) MemorryUserListHS5Data Disposehs5ErrorBlock:(DisposeHS5ErrorBlock)disposeErrorBlock;
```

### Create new user
```java
/**
  * Create new user
  * Use the function if the SerialNub of current user is not included in user list of HS5 and the user number is less than 20
  * Import parameters:
    * @param tempUser  - included properties: serialNub、age、birthday、height、isAthlete、sex。
    *  serialNub: The only identification for user [Range:0~0x7FFFFFFF]
    *  age:user's age  Range:7~99
    *  birthday: User’s birthday, NSDate
    *  height: User’s height, (cm) Range:81~219
    *  isAthlete: If user is an athelete, UserIsAthelete_No: no, UserIsAthelete_Yes: Yes
    *  sex: User’s sex, UserSex_Female: female, UserSex_Male: male
    * @param tempPosition  - Position of user, range: 0～19, pick from empty position that has never been occupied
 * Return Parameters：
    * @param disposeHS5Result  - Success:Yes，Fail:No.
    * @param disposeErrorBlock  - error codes in transmission process: Errors in HS5
*/
-(void)commandCreateUser:(HealthUser *)tempUser position:(uint8_t )tempPosition DisposeHS5Result:(DisposeHS5Result)disposeHS5Result Disposehs5ErrorBlock:(DisposeHS5ErrorBlock)disposeErrorBlock;

```

### Edit User Info
```java
/**
 * Edit User Info
 * If the SerialNub of current user already exists in the user list of HS5, this will be used when user info is changed.
 *Import Parameters：
    * @param tempUser  - included properties： serialNub、birthday、height、isAthlete、sex，instructions refer to “new user Api”.
 *Return Parameters：
    * @param disposeHS5Result  - Success:Yes，Fail:No.
    * @param disposeErrorBlock  - error codes in transmission process: Errors in HS5
 */
-(void)commandModifyUser:(HealthUser *)tempUser DisposeHS5Result:(DisposeHS5Result)disposeHS5Result Disposehs5ErrorBlock:(DisposeHS5ErrorBlock)disposeErrorBlock;
```

### Delete Specified User
```java
/**
 * Delete Specified User
 * This will be used deleting account in HS5.
 *Import Parameters:
    * @param tempUser  - included properties: serialNub，instructions refer to “new user Api”.
 *Return Parameters:
    * @param disposeHS5Result   - Success:Yes，Fail:No.
    * @param disposeErrorBlock  - error codes in transmission proces: Errors in HS5
 */
-(void)commandDelteUser:(HealthUser *)tempUser DisposeHS5Result:(DisposeHS5Result)disposeHS5Result Disposehs5ErrorBlock:(DisposeHS5ErrorBlock)disposeErrorBlock;

```

### Create memory upload connection
```java


/**
 Create memory upload connection
 Import Parameters:
 @param tempUser included properties： serialNub [Range:0~0x7FFFFFFF]，instructions refer to “new user Api”.
 Return Parameters:
 @param disposeHS5Result Success:Yes，Fail:No.
 @param startTransmission Finish memory transmission.
 @param progress Memory transmission progress，0.0～1.0.
 @param memorryData Record data，More details and key refer Measure API. Additionally add time-measure property, related key: date.dataID
 @param finishTransmission Finish Memory Transmission
 @param disposeErrorBlock error codes in transmission process: Errors in HS5
 */
-(void)commandCreateMemoryWithUser:(HealthUser *)tempUser uploadConnect: (DisposeHS5Result)disposeHS5Result TransferMemorryData:(StartHS5Transmission)startTransmission DisposeProgress:(DisposeHS5Progress)progress MemorryData:(MemorryHS5Data)memorryData FinishTransmission:(FinishHS5Transmission)finishTransmission Disposehs5ErrorBlock:(DisposeHS5ErrorBlock)disposeErrorBlock;
```

### Establish Measurement Connection
```java

/**
 * Establish Measurement Connection
 * Import Parameters:
    * @param tempUser   - included properties: serialNub [Range:0~0x7FFFFFFF]、height，instructions refer to “new user Api”.
 * Return Parameters:
    * @param unStableHS5Weight  - Current weight, (kg) [Value Range:0.0~150.0]
    * @param stableHS5Weight    - Stable weight, (kg) [Value Range:0.0~150.0]
    * @param impedanceWeight    - Weight by impedence, (kg)[Value Range:0.0~150.0]
    * @param bodyCompositionMeasurements  - body info, includes weight(kg) Range:0.0~150.0,  fat content(%) Rnage:0.0~100.0, water content(%) Range:0.0~100.0, muscle content(%) Rnage:0.0~100.0, bone mass Range:0.0~25.5, visceral fat level Range:0~255, DCI(Kcal) Range:0~65535. keys: weight, weightFatValue, waterValue, muscleValue, skeletonValue, VFatLevelValue, DCIValue, dataID
    * @param disposeErrorBlock  - error codes in transmission process: Errors in HS5
 */

-(void)commandCreateMeasureWithUser:(HealthUser *)tempUser unStableWeight:(UnStableHS5Weight)unStableHS5Weight MeasureWeight:(StableHS5Weight)stableHS5Weight ImpedanceType:(ImpedanceWeight)impedanceWeight BodyCompositionMeasurements:(BodyCompositionMeasurements)bodyCompositionMeasurements Disposehs5ErrorBlock:(DisposeHS5ErrorBlock)disposeErrorBlock;


```

### Stop Current Action and disconnect
```java

/**
 Stop Current Action and disconnect
 Return Parameters:
 @param disposeHS5Result Success:Yes，Fail:No.
 @param disposeErrorBlock error codes in endCurrentConnect: Errors in HS5
 */
-(void)commandEndCurrentConnect:(DisposeHS5Result)disposeHS5Result Disposehs5ErrorBlock:(DisposeHS5ErrorBlock)disposeErrorBlock;

```

### Delete current Auten Device and then rebuild connection.
```java
/**
 * Clean HS5
 * Explanation:Delete current Auten Device and then rebuild connection.
 * Return Parameters:
 * @param disposeHS5Result  - Success:Yes，Fail:No.
 * @param disposeErrorBlock  - error codes in transmission process: Errors in HS5
 */
-(void)commandcleanDeviceDisposeHS5Result:(DisposeHS5Result)disposeHS5Result Disposehs5ErrorBlock:(DisposeHS5ErrorBlock)disposeErrorBlock;

```

### Rebuild UDP connection
```java
/**
 * Rebuild UDP connection
 */
-(void)commandRebuildUdpLinker;

```
