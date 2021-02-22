import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() =>
        navigation.navigate('CategoryMeals', { categoryId: itemData.item.id })
      }
    >
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
