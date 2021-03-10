/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {  StatusBar} from 'react-native';
import AppNavigator from './navigators/AppNavigator'


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true} />
      <AppNavigator />

    </>
    
  );
};


export default App;
