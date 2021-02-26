import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './store';
import { init } from './db';
init()
  .then(() => {
    console.log('Initialized db!');
  })
  .catch((err) => {
    console.log('Initializing db failed.');
    console.log(err);
  });

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation>
        <StatusBar style='auto' />
      </AppNavigation>
    </Provider>
  );
}
