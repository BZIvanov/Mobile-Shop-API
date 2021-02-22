import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const MealDetailsScreen = ({ navigation }) => {
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
