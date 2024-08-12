import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './login/login';
import SignUp from './login/login page';
import LoginMain from './login/login main';
import HomeScreen from './src/screen/Home';
import GptScreen from './src/components/GptScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false }}/>
        <Stack.Screen name="LoginMain" component={LoginMain} options={{headerShown: false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GptScreen" component={GptScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;


