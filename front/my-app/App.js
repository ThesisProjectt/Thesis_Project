import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Forget from './screens/Forget';
import NewPwd from './screens/NewPwd';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Forget' component={Forget} options={{headerShown:false}}/>
        <Stack.Screen name='NewPwd' component={NewPwd} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}