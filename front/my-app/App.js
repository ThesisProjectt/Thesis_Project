import * as React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Catego from './screens/Catego';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Forget from './screens/Forget';
import NewPwd from './screens/NewPwd';

const Stack = createStackNavigator();

export default function App() {
  
  const [fontsLoaded] = useFonts({
    'Poppins': require("./assets/fonts/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) { return null}

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='Categories' component={Catego} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Forget' component={Forget} options={{headerShown:false}}/>
        <Stack.Screen name='NewPwd' component={NewPwd} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}