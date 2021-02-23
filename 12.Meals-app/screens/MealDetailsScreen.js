import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import DefaultText from '../components/DefaultText';
import ListItem from '../components/ListItem';
import theme from '../theme';

const MealDetailsScreen = ({ route }) => {
  const { mealId } = route.params;
  const meals = useSelector((state) => state.meals.meals);

  const selectedMeal = meals.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: theme.typography.fontBold,
    fontSize: 22,
    textAlign: 'center',
  },
});

export default MealDetailsScreen;
