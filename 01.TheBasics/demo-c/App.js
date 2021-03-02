import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Input from './components/Input';
import Item from './components/Item';

export default function App() {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    setItems((currentItems) => [
      ...currentItems,
      { _id: Math.random().toString(), value: item },
    ]);
  };

  return (
    <View style={styles.screen}>
      <Input onAddItem={addItemHandler} />
      <FlatList
        keyExtractor={(item) => item._id} // like this we can extract for key something different than key/id
        data={items}
        renderItem={(itemData) => <Item item={itemData.item.value} />}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
