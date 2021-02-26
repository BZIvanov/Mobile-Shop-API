import { ADD_PLACE } from '../types';

export const addPlace = (title, imageUri) => {
  return { type: ADD_PLACE, payload: { title, imageUri } };
};
