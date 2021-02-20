import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState('Hello world!');

  return (
    // view is acting as div in normal react app
    <View style={styles.container}>
      {/* any text must be placed in Text tag */}
      <Text>{text}</Text>
      <Button title='Click Me' onPress={() => setText('Hello Bisercho')} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccffcc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
