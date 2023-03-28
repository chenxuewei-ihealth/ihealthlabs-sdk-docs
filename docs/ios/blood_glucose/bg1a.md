---
title: BG1A
sidebar_position: 5
---



## BG1A
### Device introduction
1. BG1A is a low-power Bluetooth blood glucose meter with indicator lights, but no screen and buttons.
2. The way to start up is to insert the blood glucose test strip and start up.
3. After the device is turned on, it starts to broadcast Bluetooth, which can be scanned and connected by the App.
4. After the blood glucose measurement is completed, or the test strip is pulled out, the device will shut down and the Bluetooth will be disconnected.

### Related classes and APIs
#### ScanDeviceController
A class that controls device scanning, used to start and stop device scanning
```objective-c

// Start to scan BG1A. After scanning a new device, it will send a BG1ADiscover notification. The caller needs to monitor this notification. A scan will not repeatedly send the discovery notification of the same device.
[[ScanDeviceController commandGetInstance]commandScanDeviceType:HealthDeviceType_BG1A];
// Stop scanning BG1A
[[ScanDeviceController commandGetInstance]commandStopScanDeviceType:HealthDeviceType_BG1A];
```
#### ConnectDeviceController
Classes that control device connections
```objective-c
// Start to connect to BG1A, the caller needs to listen to two notifications to get the connection result: successful connection BG1AConnectNoti and connection failure BG1AConnectFailed
[[ConnectDeviceController commandGetInstance]commandContectDeviceWithDeviceType:HealthDeviceType_BG1A andSerialNub:MAC];
```
#### BG1AController
BG1A Manager
```objective-c
// Singleton initialization, which needs to be called before scanning BG1A, otherwise you cannot receive related notifications
[BG1AController shareIHBG1AController];
```
```objective-c
// Get an array of BG1A devices in all connections
- (NSArray *)getAllCurrentBG1AInstace;
// Obtain the BG1A instance object according to the MAC address
- (nullable BG1A *)getInstanceWithMac:(NSString*)mac;
```
#### BG1A
used to call the API

```objective-c
/// Get device information (IDPS)
/// - Parameters:
///   - success: successful callback. After callback, you can read the IDPS proterties.
///   - fail: error callback, see BG1ADeviceError
- (void)commandGetIDPS:(BG1ASuccessBlock)success
                  fail:(BG1AErrorBlock)fail;

/// Get the battery level of device
/// - Parameters:
///   - success: successful callback, battery: [1,100].
///   - fail: error callback, see BG1ADeviceError
- (void)commandGetBattery:(BG1ABatteryBlock)success
                     fail:(BG1AErrorBlock)fail;

/// Change measure type. Default is BG1AMeasureType_BloodSugar.
/// - Parameters:
///   - type: Measure Type, see BG1AMeasureType
///   - success: successful callback
///   - fail: error callback. If the device collects enough blood and starts to measure, you cannot set measure type, and you will receive an error: BG1ADeviceError_RejectChangeMeasureType
- (void)commandSetMeasureType:(BG1AMeasureType)type
                      success:(BG1ASuccessBlock)success
                         fail:(BG1AErrorBlock)fail;

/**
 
 During the measurement process, please listen to the following notifications to obtain the measurement status and results of the BG1A device

1) kBG1ANotiNameStripStatus
  
 The device collects enough blood to measure, and the result will be post in a few seconds. The notification's userInfo:
  {
     MAC = "385B44DDC723";
     Status = 1; // 1: Strip in 2: Strip out
  
  }
  Tips:
  It will be posted immediately after the bluetooth is connected. Because only after strip in, the device is ready to connect bluetooth.

 2)  kBG1ANotiNameBloodIn
 The device collects enough blood to measure, and the result will be post in a few seconds. The notification's userInfo:
 {
    MAC = "385B44DDC723";
 }
 3)  kBG1ANotiNameResult
 The device sends the measurement result (the value is in the unit mg/dL). The notification's userInfo:
 {
    MAC = "385B44DDC723";
    Value = 80;
 }
**/


/// Active disconnect a device from app
- (void)commandDisconnectDevice;
@end

NS_ASSUME_NONNULL_END
```

#### BGMacroFile
Header files related to blood glucose devices, including notification names (device discovery, connection success, connection failure, connection disconnection), error code enumeration, measurement type enumeration
```objective-c
#pragma mark - BG1A
/*
 BG1A Notification Name
 */
 /* BG1ADiscover userInfo
 {
	RSSI = -60;
	DeviceName = "BG1A";
	SerialNumber = "385B44DDC723";
}
 */
#define BG1ADiscover        @"BG1ADiscover"
/* BG1AConnectFailed userInfo
{
     DeviceName = "BG1A";
     SerialNumber = "385B44DDC723";
     Error = 0; // 0: connect ble fail 1: auth fail 2: bluetooth is not available
     MAC = "385B44DDC723";
     ErrorMessage = ""; //
 }
*/
#define BG1AConnectFailed   @"BG1AConnectFailed"
/* BG1AConnectNoti userInfo
{
	ID = "EDA03FE5-0F75-4950-A036-111D43B6394B";
	SerialNumber = "385B44DDC723";
	ProtocolString = "com.jiuan.BGV44";
	DeviceName = "BG1A";
	FirmwareVersion = "1.0.0";
	HardwareVersion = "3.0.0";
}
*/
#define BG1AConnectNoti     @"BG1AConnectNoti"
/* BG1ADisConnectNoti userInfo
{
	ProtocolString = "com.jiuan.BGV44";
	ID = "EDA03FE5-0F75-4950-A036-111D43B6394B";
	SerialNumber = "385B44DDC723";
    DeviceName = BG1A;
}
*/
#define BG1ADisConnectNoti  @"BG1ADisConnectNoti"

/*
 BG1A Error Code
 */
typedef NS_ENUM(int,BG1ADeviceError) {
    BG1ADeviceError_ResultIsZero = 0x01,
    BG1ADeviceError_LowCurrent = 0x02,
    BG1ADeviceError_AlgorithmError = 0x03,
    BG1ADeviceError_BloodTimeout = 0x04,
    BG1ADeviceError_XM1Error = 0x05,
    BG1ADeviceError_SelfCheckError = 0x0A,
    BG1ADeviceError_StripTypeCannotRecognize = 0x0B,
    BG1ADeviceError_StripUsedError = 0x0C,
    BG1ADeviceError_LowBattery = 0x0E,
    BG1ADeviceError_HighBattery = 0x0F,
    BG1ADeviceError_LowTemperature = 0x10,
    BG1ADeviceError_HighTemperature = 0x11,
    BG1ADeviceError_FlashError = 0x12,
    BG1ADeviceError_NoCheckFlagError1 = 0x14,
    BG1ADeviceError_NoCheckFlagError2 = 0x15,
    BG1ADeviceError_NoStripCheckFlag = 0x16,
    BG1ADeviceError_BloodEarly = 0x17,
    BG1ADeviceError_RejectChangeMeasureType = 0xF0,
    BG1ADeviceError_ParameterError = 400,
    BG1ADeviceError_ResultIsTooLow = 401,
    BG1ADeviceError_ResultIsTooHigh = 402,
};

typedef NS_ENUM(uint8_t,BG1AMeasureType) {
    BG1AMeasureType_BloodSugar  = 0x00,
    BG1AMeasureType_CTL         = 0x01,
};
```
### Listen for notifications
```objective-c
[NSNotificationCenter.defaultCenter addObserver:self selector:@selector(onDiscoverNewDevice:) name:BG1ADiscover object:nil];
[NSNotificationCenter.defaultCenter addObserver:self selector:@selector(onConnectNewDevice:) name:BG1AConnectNoti object:nil];
[NSNotificationCenter.defaultCenter addObserver:self selector:@selector(onFailConnectNewDevice:) name:BG1AConnectFailed object:nil];
[NSNotificationCenter.defaultCenter addObserver:self selector:@selector(onDeviceDisconnect:) name:BG1ADisConnectNoti object:nil];

[NSNotificationCenter.defaultCenter addObserver:self selector:@selector(handleStripStatusNoti:) name:kBG1ANotiNameStripStatus object:nil];
[NSNotificationCenter.defaultCenter addObserver:self selector:@selector(handleBloodInNoti:) name:kBG1ANotiNameBloodIn object:nil];
[NSNotificationCenter.defaultCenter addObserver:self selector:@selector(handleResultNoti:) name:kBG1ANotiNameResult object:nil];
[NSNotificationCenter.defaultCenter addObserver:self selector:@selector(handleErrorNoti:) name:kBG1ANotiNameError object:nil];

```
