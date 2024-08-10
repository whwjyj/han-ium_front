import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './login/login';
import SignUp from './login/login page';
import LoginMain from './login/login main';
import HomeScreen from './src/screen/Home';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="아파트"  >
        <Stack.Screen name="아파트" component={HomeScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;


