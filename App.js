import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/Home';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="앗!파트"  >
        <Stack.Screen name="앗!파트" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
