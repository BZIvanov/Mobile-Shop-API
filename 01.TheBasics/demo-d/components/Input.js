import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const Input = ({ onAddItem, onCancel, visible }) => {
  const [item, setItem] = useState('');

  const itemInputHandler = (text) => {
    setItem(text);
  };

  const addItemHandler = () => {
    onAddItem(item);
    setItem('');
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Add Item'
          style={styles.input}
          onChangeText={itemInputHandler}
          value={item}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title='CANCEL' onPress={onCancel} color='red' />
          </View>
          <View style={styles.button}>
            <Button title='ADD' onPress={addItemHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%', // here we set width, otherwise the whole width will be as much as the buttons and we will not have space between them
  },
  button: {
    width: '40%', // make buttons same in size
  },
});

export default Input;
