import * as FileSystem from 'expo-file-system';
import { ADD_PLACE, SET_PLACES } from '../types';
import { insertPlace, fetchPlaces } from '../../db';

export const addPlace = (title, imageUri, location) => {
  return async (dispatch) => {
    const fileName = imageUri.split('/').pop();
    const imagePath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: imageUri,
        to: imagePath,
      });

      const dbResult = await insertPlace(
        title,
        imagePath,
        'Dummy address',
        location.lat,
        location.lng
      );

      dispatch({
        type: ADD_PLACE,
        payload: { id: dbResult.insertId + '', title, imageUri: imagePath },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPlaces();

      dispatch({ type: SET_PLACES, payload: dbResult.rows._array });
    } catch (err) {
      throw err;
    }
  };
};
