---
title: PO1
sidebar_position: 1
---

## WorkFlow

1. Scan and connect PO1 device.

2. PO1 only support online measurement.


![integrate ios](/iOS_PO1_1.png)

## Connection to device

### 1.Listen to device notify

```java

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:PO1Discover object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:PO1ConnectFailed object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:PO1ConnectNoti object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:PO1DisConnectNoti object:nil];
            
[PO1Controller shareIHPO1Controller];
```

### 2.Scan for PO1 devices

```java
[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_PO1];
```

### 3.Connect to PO1 devices

```java
[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_PO1 andSerialNub:deviceMac];
```

## API reference

### Open buzzer for PO1 device

```java
/**
 * Get device IDPS
 * @param function  A block to return the function and states that the device supports.
 * {
     MAC = 60A4232504ED;
     accessoryName = "Pulse Oximeter";
     firmwareVersion = "1.0.0";
     hardwareVersion = "1.0.0";
     manufaturer = iHealth;
     modelNumber = "PO1 11070";
     protocol = "com.jiuan.PO1";
 }
 * @param errorBlock  A block to refer ‘error’ in ‘Establish measurement connection’ in PO1.
 */
-(void)commandFunction:(DisposePO1DeviceFunctionBlock)function DisposeErrorBlock:(DisposePO1ErrorBlock)errorBlock;
```

### Get battery for PO1 device

```java
/**
 * Query power status
 * @param batteryBlock Battery，from 0～100
 * @param errorBlock Communication error codes
 */
-(void)commandPO1GetDeviceBattery:(DisposePO1BatteryBlock)batteryBlock withErrorBlock:(DisposePO1ErrorBlock)errorBlock;
```

### Data Notify

```java
/**
Measure data  Notification

 PO1NotificationMeasureData

You need to listen to this message to get real-time measurements
 
 The unit of PI is %.

Content of measurement results：
{
    PI = "5.8";
    bpm = 90;
    height = 4;
    spo2 = 98;
    wave =     (
        42,
        41,
        41,
        41,
        40
    );
}
 */

```

### Disconnect the PO1

```java

/*
 Disconnect current device
 */

-(void)commandDisconnectDevice;
```
