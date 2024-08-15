import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../login/login'
import SignUp from '../../login/login page';
import LoginMain from '../../login/login main';
import HomeScreen from '../screen/Home';
import GptScreen from '../components/GptScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false }}/>
      <Stack.Screen name="LoginMain" component={LoginMain} options={{headerShown: false}}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="GptScreen" component={GptScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default AppNavigator;