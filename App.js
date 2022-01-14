/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './src/screens/home';
import {FishesScreen} from './src/screens/fishes';
import {FishDetail} from './src/screens/fishDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FishesScreen" component={FishesScreen} />
        <Stack.Screen name="FishDetail" component={FishDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
