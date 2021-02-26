import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MapPreview from './MapPreview';
import theme from '../theme';

const LocationPicker = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [pickedLocation, setPickedLocation] = useState();

  const verifyPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant location permissions to use this app',
        [{ text: 'OK' }]
      );
      return false;
    }

    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync();

      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (err) {
      Alert.alert(
        'Could not fetch location!',
        'Please try again or pick location on the map.',
        [{ text: 'OK' }]
      );
    }
    setIsFetching(false);
  };

  return (
    <View style={styles.locationPicker}>
      <MapPreview location={pickedLocation}>
        {isFetching ? (
          <ActivityIndicator size='large' color={theme.palette.primary} />
        ) : (
          <Text>No location chosen yet!</Text>
        )}
      </MapPreview>
      <Button
        title='Get User Location'
        color={theme.palette.primary}
        onPress={getLocationHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
});

export default LocationPicker;
