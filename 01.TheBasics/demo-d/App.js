import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import Input from './components/Input';
import Item from './components/Item';

export default function App() {
  const [items, setItems] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addItemHandler = (text) => {
    setItems((currentItems) => [
      ...currentItems,
      { id: Math.random().toString(), value: text },
    ]);
    setIsAddMode(false);
  };

  const removeItemHandler = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const cancelItemAddHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add Item' onPress={() => setIsAddMode(true)} />
      <Input
        visible={isAddMode}
        onAddItem={addItemHandler}
        onCancel={cancelItemAddHandler}
      />
      <FlatList
        data={items}
        renderItem={(itemData) => (
          <Item item={itemData.item} onDelete={removeItemHandler} />
        )}
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
