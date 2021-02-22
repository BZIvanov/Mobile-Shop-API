import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

// we have access to navigation prop for first level children of the Navigator
const CategoryMealsScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        meal={itemData.item}
        onSelectMeal={() => {
          navigation.navigate('MealDetails', { mealId: itemData.item.id });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
