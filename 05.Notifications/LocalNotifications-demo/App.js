import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

Notifications.setNotificationHandler({
  // async here is to make sure we will return this object as promise
  handleNotification: async () => ({
    shouldShowAlert: true,
  }),
});

export default function App() {
  useEffect(() => {
    // checking for Permissions is required especially for iOS devices
    const checkForPermissions = async () => {
      const { status: getStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      if (getStatus !== 'granted') {
        const { status: askStatus } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        if (askStatus !== 'granted') {
          return;
        }
      }
    };

    checkForPermissions();
  }, []);

  useEffect(() => {
    const backgroundSubscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        // this console log will happen when notification is received in background and opened
        console.log(response);
      }
    );

    const foregroundSubscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification);
      }
    );

    return () => {
      backgroundSubscription.remove();
      foregroundSubscription.remove();
    };
  }, []);

  const triggerNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Time's up!",
        body: 'Change sides!',
      },
      trigger: {
        seconds: 5,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title='Trigger Notification'
        onPress={triggerNotificationHandler}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
