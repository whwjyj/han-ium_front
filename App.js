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
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LoginMain" component={LoginMain} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GptScreen" component={GptScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;


