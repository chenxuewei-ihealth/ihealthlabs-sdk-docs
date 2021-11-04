---
id: get-started-reactnative
title: Get Started(React Native)
sidebar_position: 4
---

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
![integrate android](/img/guide_android_1.png)

#### Using license file

```js
import { iHealthDeviceManagerModule } from '@ihealth/ihealthlibrary-react-native';

// your license file
const filename = 'license.pem';
iHealthDeviceManagerModule.sdkAuthWithLicense(filename);
```
