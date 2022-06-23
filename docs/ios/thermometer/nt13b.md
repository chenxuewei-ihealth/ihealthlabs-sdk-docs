---
title: NT13B
sidebar_position: 1
---

## WorkFlow

1. Scan and connect NT13B.

2. NT13B support online measurement.

## Connection to device

### 1.Listen to device notify

```java

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:NT13BDiscover object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:NT13BConnectFailed object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:NT13BConnectNoti object:nil];

[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:NT13BDisConnectNoti object:nil];
            
[NT13BController shareIHNT13BController];
```

### 2.Scan for NT13B devices

```java
[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_NT13B];
```

### 3.Connect to NT13B devices

```java
[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_NT13B andSerialNub:deviceMac];
```

## API reference

### Measure

```java
/**
 * Get Measure Data
 * @param resultBlock  result NSDictionary  key：  bodyFlag （1：Humanity 0：object）unit(1:NT13BTemperatureUnit_C  2:NT13BTemperatureUnit_F)
 */
-(void)commandStartMeasure:(DisposeMeasureBlock)resultBlock;
```

### Disconnect

```java
/**
 * Disconnect connection
 * @param disconnectBlock  yes = success, no = fail.
 */
-(void)commandDisconnect:(DisposeDisconnectBlock)disconnectBlock;
```

