import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import MealList from '../components/MealList';

const FavoritesScreen = () => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favoriteMeals.length < 1) {
    return (
      <View style={styles.text}>
        <Text>
          No favorite meals found. Add some by clicking the star button.
        </Text>
      </View>
    );
  }

  return <MealList listData={favoriteMeals} />;
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
