import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import MealList from '../components/MealList';

// we have access to navigation prop for first level children of the Navigator
const CategoryMealsScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (displayedMeals.length < 1) {
    return (
      <View style={styles.text}>
        <Text>No meals found. There are not any or filtered by you.</Text>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
