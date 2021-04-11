/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, Text} from 'react-native';
import Home from './src/screens/Home';
import Search from './src/screens/Search';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      {/* <Search/> */}
      <Home/>
    </>
  );
};

export default App;
