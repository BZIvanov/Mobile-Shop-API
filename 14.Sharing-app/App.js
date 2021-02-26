import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation>
        <StatusBar style='auto' />
      </AppNavigation>
    </Provider>
  );
}
