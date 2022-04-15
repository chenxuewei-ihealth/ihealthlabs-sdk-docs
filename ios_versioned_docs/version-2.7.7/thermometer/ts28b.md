---
title: TS28B
sidebar_position: 2
---

## WorkFlow

1. Scan and connect TS28B.

2. TS28B support online measurement.


![integrate ios](/iOS_TS28B_1.png)

## Connection to device

### 1.Listen to device notify

```java

<TS28BControllerDelegate>

    
```

### 2.Scan for TS28B devices

```java
TS28BController *controller= [TS28BController sharedController];

    self.controller.delegate=self;
    
    [self.controller startScan];
```

### 2.Stop Scan for TS28B devices

```java
TS28BController *controller= [TS28BController sharedController];

    
    [self.controller stopScan];
```

### 3.Connect to TS28B devices

```java
- (void)controller:(TS28BController *)controller didDiscoverDevice:(TS28B *)device{
   
    self.connectedDevice=device;
    
     [self.controller connectDevice:self.connectedDevice];
    
   
}
- (void)controller:(TS28BController *)controller didConnectSuccessDevice:(TS28B *)device{
  

}
- (void)controller:(TS28BController *)controller didConnectFailDevice:(TS28B *)device{
   
}
- (void)controller:(TS28BController *)controller didDisconnectDevice:(TS28B *)device{
   
}
```

## API reference

### Measure

```java

- (void)controller:(TS28BController *)controller device:(TS28B *)device didUpdateTemperature:(float)value temperatureUnit:(TemperatureUnit)unit measureDate:(NSDate *)date measureLocation:(TemperatureType)type{
    
    
    
}
```


### Disconnect

```java
/**
 DisConnect with spectific device

 @param device TS28B object. You can get it from - (void)controller:(TS28BController *)controller didConnectSuccessDevice:(TS28B *)device;
 */
- (void)disconnectDevice:(TS28B *)device;
```
