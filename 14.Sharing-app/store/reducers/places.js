import { ADD_PLACE } from '../types';

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const place = { id: new Date().toString(), ...action.payload };
      return {
        ...state,
        places: state.places.concat(place),
      };
    default:
      return state;
  }
};
