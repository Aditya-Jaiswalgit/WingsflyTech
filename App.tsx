import React from 'react';
import {StatusBar} from 'react-native';
import HomeScreen from './src/components/screens/HomeScreen';

const App = (): React.JSX.Element => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <HomeScreen />
    </>
  );
};

export default App;