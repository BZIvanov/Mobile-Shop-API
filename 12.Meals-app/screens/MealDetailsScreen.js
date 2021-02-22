import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = ({ route, navigation }) => {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>The Meal details Screen</Text>
      <Button
        title='Go Back to Categories'
        onPress={() => {
          navigation.popToTop();
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

export default MealDetailsScreen;
