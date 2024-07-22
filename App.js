import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '/Users/joyongju/han_ium_front/login/login.js';
import SignUp from '/Users/joyongju/han_ium_front/login/login page.js'
import LoginMain from '/Users/joyongju/han_ium_front/login/login main.js'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LoginMain" component={LoginMain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
