import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
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
import NAVIGATE from '../constants/navigation';
import theme from '../theme';

const LocationPicker = ({ onSelectLocation }) => {
  const navigation = useNavigation();
  const { params } = useRoute();
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

  // OPTION 1 - get with location
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

      onSelectLocation({
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

  // OPTION 2 - get with map marker
  const pickOnMapHandler = () => {
    navigation.navigate(NAVIGATE.Map);
  };

  useEffect(() => {
    if (params) {
      setPickedLocation(params);
      onSelectLocation(params);
    }
  }, [params]);

  return (
    <View style={styles.locationPicker}>
      <MapPreview location={pickedLocation}>
        {isFetching ? (
          <ActivityIndicator size='large' color={theme.palette.primary} />
        ) : (
          <Text>No location chosen yet!</Text>
        )}
      </MapPreview>
      <View style={styles.actions}>
        <Button
          title='Get User Location'
          color={theme.palette.primary}
          onPress={getLocationHandler}
        />
        <Button
          title='Pick on map'
          color={theme.palette.primary}
          onPress={pickOnMapHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default LocationPicker;
