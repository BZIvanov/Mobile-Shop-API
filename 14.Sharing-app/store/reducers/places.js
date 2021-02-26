import { ADD_PLACE, SET_PLACES } from '../types';

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat(action.payload),
      };
    case SET_PLACES:
      return {
        ...state,
        places: action.payload.map((place) => {
          return {
            ...place,
            id: place.id.toString(),
          };
        }),
      };
    default:
      return state;
  }
};
