import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Button,
  TextInput,
  Text,
} from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const itemInputHandler = (text) => {
    setItem(text);
  };

  const addItemHandler = () => {
    setItems((currentItems) => [...currentItems, item]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Add Item'
          style={styles.input}
          onChangeText={itemInputHandler}
          value={item}
        />
        <Button title='ADD' onPress={addItemHandler} />
      </View>
      {/*
        By default views in react native are not scrollable, we can change that with ScrollView component
        but this is disadvantage in some cases if we have a lot of data, because all of it will be rendered even if most of it is not visible
        solution for that is using FlatList component
      */}
      <ScrollView>
        {items.map((i) => (
          <View key={i} style={styles.listItem}>
            <Text>{i}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
