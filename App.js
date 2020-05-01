/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Bridgefy from 'react-native-bridgefy-sdk';
const App = () => {
  Bridgefy.init('0d103176-2c40-45e2-b6b8-981d22bccd17', 
  (errorCode, message)=>{
              console.log(errorCode + "Rohan:" + message);
              },
  (client) => {
              console.log(client);
              }
  );
  return (
<View><Text>Ajinkya</Text></View>
  );
};

export default App;
