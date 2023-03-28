---
title: ECG3USB
sidebar_position: 2
---
## WorkFlow

1. Scan and connect ECG3USB .

2. ECG3USB is a wired connection to the device via USB and synchronizes the data in the device

If you use these devices, please contact us before submitting the Apple Store. We will generate a ppid based on the information you provided to help your app pass the review.

If you're using ECG3USB, you need to add protocol:protocol:com.jiuan.ECGV10

## Connection to device

### 1.Listen to device notify

```java

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:ECGUSBConnectNoti object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:ECGUSBDisConnectNoti object:nil];
            
[ECG3USBController shareECG3USBController];

```

### 2.Scan for ECG3USB devices

```java
ECG3USB is a wired connection between USB and device without calling the scan connection method, only need to monitor the notification of connection success and failure
```

### 3.Connect to ECG3USB devices

```java
ECG3USB is a wired connection between USB and device without calling the scan connection method, only need to monitor the notification of connection success and failure
```

## API reference

### Sync Data

```java
/**
 Sync Data

 @param startBlock means start
 @param progressBlock 0-100
 @param resultBlock You can get filtered data from the NSDocumentDirectory path.
 
 Abnormal Point Marked by User: OBData_FileName.xml
 Filtered ECG Data: ECGAnalyseResult_FileName.dat
 Lead Off Begin Point: ECGLeadOffBegin_FileName.xml
 Lead Off End Point: ECGLeadOffEnd_FileName.xml
 ECG HR Information EveryHour: ECGHREveryHour_FileName.xml
 Abnormal Point Filtered by Algorithm: ECGOBbyFilter_FileName.xml
 ECG HR Information for Day: ECGDetail_FileName.xml
 @param errorBlock error
 
 */
- (void)syncDataWithStartBlock:(ECG3USBSyncStartBlock)startBlock
                 progressBlock:(ECG3USBSyncProgressBlock)progressBlock
                   resultBlock:(ECG3USBSyncResultBlock)resultBlock
                    errorBlock:(ECG3USBErrorBlock)errorBlock;
```

### Format SD Card

```java
/**
/**
 Format SD Card

 @param successBlock Success
 @param progressBlock 0-100
 @param failBlock Fail
 */
-(void)formatSDCard:(ECG3FormatSDCardSuccessBlock)successBlock
      progressBlock:(ECG3USBFormatProgressBlock)progressBlock
         errorBlock:(ECG3FormatSDCardFailBlock)failBlock;
```


### Splice data

```java
/**
 Splice data
 
 @param fileNames An Array with FileName value from ECG3USBSyncResultBlock
 @param successBlock a block contains a dictionary with keys: success(@{@"DataFileName":dataFileName,@"MarkFileName":markFileName,@"StartTime":yyyyMMddHHmmss,@"EndTime":yyyyMMddHHmmss,@"FilePath":directory});
 @param errorBlock a block contains error message
 */
+ (void)spliceWithFileNames:(NSArray<NSString *>*)fileNames
               successBlock:(void(^)(NSDictionary *dic))successBlock
                 errorBlock:(void(^)(ECG3USBError error,NSString *message))errorBlock;
```

### Get data cache

```java
/**
 Get data cache

 @param block An array contains Dictionary object
 {
 @"SampleRate":@(sampleRate),
 @"StartTime":startTimeString,
 @"EndTime":endTimeString,
 @"FileName":fileName,
 @"FilePath":path
 });
 */
- (void)getCacheDataWithBlock:(void(^)(NSArray *array))block;
```

### Filter

```java
/**
 

 @param dic the dictionary from the success block of method ’synthesisWithFileNames:success:error:‘
 */

/**
 Filter

 @param dic the dictionary from the success block of method ’synthesisWithFileNames:success:error:‘
 @param success see ECG3USBSyncResultBlock comments
 @param error a block contains error message (If the files don't exist, no error block retrun but print error message in the console)
 */
- (void)getFilterDataWithDic:(NSDictionary *)dic success:(ECG3USBSyncResultBlock)success error:(void(^)(NSString *message))error;
```


