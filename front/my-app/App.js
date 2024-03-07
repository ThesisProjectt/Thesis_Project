import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Text } from 'react-native';
import Signup from './screens/Home';
import Categories from './screens/Categories'
import Catego from './screens/Catego';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {/* <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/> */}
        <Stack.Screen name='Categories' component={Catego} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}