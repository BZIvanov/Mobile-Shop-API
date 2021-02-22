import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

// we have access to navigation prop for first level children of the Navigator
const CategoryMealsScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
      <Button
        title='Go to Details'
        onPress={() => {
          navigation.navigate('MealDetails');
        }}
      />
      <Button
        title='Go Back'
        onPress={() => {
          navigation.pop();
        }}
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
