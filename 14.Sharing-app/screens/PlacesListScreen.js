import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, FlatList } from 'react-native';
import PlaceItem from '../components/PlaceItem';
import NAVIGATION from '../constants/navigation';
import { loadPlaces } from '../store/actions/places';

const PlacesListScreen = ({ navigation }) => {
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlaces());
  }, [dispatch]);

  return (
    <FlatList
      data={places}
      renderItem={(itemData) => (
        <PlaceItem
          place={itemData.item}
          onSelect={() => {
            navigation.navigate(NAVIGATION.PlaceDetails, {
              id: itemData.item.id,
              title: itemData.item.title,
            });
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
