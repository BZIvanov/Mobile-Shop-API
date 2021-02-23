import React, { useState, useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import FilterSwitch from '../components/FilterSwitch';
import theme from '../theme';

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  useEffect(() => {
    navigation.dispatch(
      CommonActions.setParams({
        filters: {
          glutenFree: isGlutenFree,
          lactoseFree: isLactoseFree,
          vegan: isVegan,
          vegetarian: isVegetarian,
        },
      })
    );
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label='Gluten Free'
        checked={isGlutenFree}
        setChecked={setIsGlutenFree}
      />
      <FilterSwitch
        label='Lactose Free'
        checked={isLactoseFree}
        setChecked={setIsLactoseFree}
      />
      <FilterSwitch label='Vegan' checked={isVegan} setChecked={setIsVegan} />
      <FilterSwitch
        label='Vegetarian'
        checked={isVegetarian}
        setChecked={setIsVegetarian}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.typography.fontBold,
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
});

export default FiltersScreen;
