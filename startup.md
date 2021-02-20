# React Native Types

We can build react native apps in 2 main ways:

- **Expo CLI** - easier to use, but that comes with some limitations
- **React Native CLI** - more advanced options available but configurations are harder than expo cli option

## Expo CLI

Visit this [link](https://docs.expo.io/) to install the CLI globally. And then init your new project. Note that installation process might take some time.

## Mobile Device

Search for Expo app in the App store and install it on your device.

Open the app and scan the code from VSCode/terminal to open the development app on your mobile device.

## Project folder structure

- **.expo** - this folder contains configurations used by expo and we should not modify it.
- **assets** - this folder contains assets such as images and other stuff. Here we can add our own if necessary.

## Emulator

Often is easier to test on emulator instead of physical device.

Click [here](https://docs.expo.io/workflow/android-studio-emulator/) for a guide on how to install android emulator.

1. Once installed click **Configure** (bottom-right), then select **SDK Manager** and make sure the latest version is installed.
2. While in the same window (Android SDK), click the next tab **SDK Tools** and make sure you have _Android SDK Buil-Tool_, _Android Emulator_, _Android SDK Platform-Tools_, _Google Play services_, _Intel x86 Emulator Accelerator_. You will know it is installed if the icon is checkmark box.
3. After everything is installed click **Apply** and then **Ok**
4. Again from the **Configure** button now select **AVD Manager**
5. There you can configure emulator device to use.
6. Now select one of your configured devices and click the green play button.
7. Go back to your project and run npm start.
8. While the process is running in the same terminal press **a** to install the local project on the emulator device if needed and to run it.

Every next time, when you start the app, first start android studio and the emulator device, then npm start and a for android.

_Hint_ Focus/Click the emulator device and press ctrl + m to open the expo menu. This is useful for example if you want to reload the app.
