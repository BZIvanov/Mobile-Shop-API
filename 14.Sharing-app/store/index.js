import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
  places: placesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
