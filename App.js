import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './login/login';
import SignUp from './login/login page';
import LoginMain from './login/login main';
import HomeScreen from './src/screen/Home';
import GptScreen from '/Users/joyongju/han_ium_front/src/components/GptScreen.js';

const Stack = createStackNavigator();

function App() {
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
}
export default App;


