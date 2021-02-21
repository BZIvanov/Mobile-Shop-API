import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const GameOverScreen = ({ rounds, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>Rounds: {rounds}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title='NEW GAME' onPress={onRestart} />
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

export default GameOverScreen;
