import React from 'react';
import {StatusBar} from 'react-native';

import AppStack from './src/AppStack';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <AppStack />
    </>
  );
};

export default App;
