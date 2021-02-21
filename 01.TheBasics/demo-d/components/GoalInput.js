import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = ({ onAddGoal, onCancel, visible }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title='CANCEL' onPress={onCancel} color='red' />
          </View>
          <View style={styles.button}>
            <Button title='ADD' onPress={addGoalHandler} />
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

export default GoalInput;
