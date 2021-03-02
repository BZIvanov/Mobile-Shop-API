import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const Input = ({ onAddItem }) => {
  const [item, setItem] = useState('dawd');

  const itemInputHandler = (enteredText) => {
    setItem(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Add Item'
        style={styles.input}
        onChangeText={itemInputHandler}
        value={item}
      />
      <Button title='ADD' onPress={() => onAddItem(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Input;
