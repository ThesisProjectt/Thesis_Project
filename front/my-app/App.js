import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Text } from 'react-native';
import Signup from './screens/Home';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}