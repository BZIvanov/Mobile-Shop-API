import React from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

// we have access to navigation prop for first level children of the Navigator
const CategoryMealsScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
