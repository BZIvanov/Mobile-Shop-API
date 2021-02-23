import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../types';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const index = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.payload
      );
      if (index >= 0) {
        const updatedFavMeals = state.favoriteMeals.filter(
          (favMeal) => favMeal.id !== action.payload
        );
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.payload);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const filteredMeals = state.meals.filter((meal) => {
        if (action.payload.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (action.payload.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (action.payload.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (action.payload.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
