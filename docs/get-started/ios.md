# iOS

## Installation

### Using npm

```shell
npm install --save @ihealth/ihealthlibrary-react-native
```

### Using yarn

```shell
yarn add @ihealth/ihealthlibrary-react-native
```

## Usage

### Authentication

#### Download license file

1. Sign up iHealth developer webside. [Please sign up here](https://dev.ihealthlabs.com)
2. Press "Add New App" button, fill in your information of your app. We will get email and active the license for your app.
3. Download license file, as shown below.
![Download](/img/download.png)

#### Integrate license file

For iOS
As shown below, Add your license file to your iOS project.
![integrate ios](/img/integrate-ios.png)

For Android
As show below, Add your license file to your asserts folder.
![integrate android](/img/integrate-android.png)

#### Using license file

```js
import { iHealthDeviceManagerModule } from '@ihealth/ihealthlibrary-react-native';

// your license file
const filename = 'license.pem';
iHealthDeviceManagerModule.sdkAuthWithLicense(filename);
```

### Troubleshooting

#### For Android

1. Check settings.gradle file in your android project and node_modules, make sure input the correct module path.

```gradle
include ':ihealthlibrary-react-native'
project(':ihealthlibrary-react-native').projectDir = new File(rootProject.projectDir,'../node_modules/@ihealth/ihealthlibrary-react-native/android')
```

2. Check build.gradle file in your android project, make sure the ihealth module is integrated

```gradle
compile project(':@ihealth_ihealthlibrary-react-native')
```

3. Import iHealth module in your MainActivity.java

```java
protected List<ReactPackage> getPackages() {  
	return Arrays.<ReactPackage>asList(
		new MainReactPackage(),
		new iHealthDeviceManagerPackage()
	);  
}
```

4. Location permission(in AndroidManifest.xml)

```xml
<!-- Need ACCESS_COARSE_LOCATION or ACCESS_FINE_LOCATION permission in Android API 23+ -->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```

#### For iOS

1. Open your iOS project, add node_modules/@ihealth/ihealthlibrary-react-native/ios/ReactNativeIOSLibrary.xcodeproj to libraries
2. Under 'Build Phases' --  'Link Binary With Libraries', add libReactNativeIOSLibrary.a

### Example

iHealth SDK module is based on DeviceEventEmitter, So call add listener while the component is loaded, and call remove listener while the component is unloaded, As show as below. If you want more detail information, Please the example code.

```js
componentDidMount() {
    iHealthAPI.addListener();
}

componentWillUnmount() {
    iHealthAPI.removeListener();
}
```

#### For bluetooth LE or regular bluetooth device

##### search device

```js
import { iHealthDeviceManagerModule } from '@ihealth/ihealthlibrary-react-native';
const type = 'BP5'; // AM3S, AM4, BG5, BG5S, BP3L, BP5, BP5S, BP7S, HS2, HS4S, PO3,HS2S,BG1S
iHealthDeviceManagerModule.startDiscovery(type);
```

##### connect device

```js
import { iHealthDeviceManagerModule } from '@ihealth/ihealthlibrary-react-native';
const mac = 'xxxxxxxxxxxxxx';
const type = 'BP5'; // AM3S, AM4, BG5, BG5S, BP3L, BP5, BP5S, BP7S, HS2, HS4S, PO3,HS2S,BG1S
iHealthDeviceManagerModule.connectDevice(mac, type);
```
