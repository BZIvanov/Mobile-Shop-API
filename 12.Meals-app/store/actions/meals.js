import { TOGGLE_FAVORITE, SET_FILTERS } from '../types';

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, payload: id };
};

export const setFilters = (filters) => {
  return { type: SET_FILTERS, payload: filters };
};
