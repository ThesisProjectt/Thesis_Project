import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Text } from 'react-native';

import Catego from './screens/Catego';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Forget from './screens/Forget';
import NewPwd from './screens/NewPwd';
import CreateCustom from './screens/CreateCustom';
import Carouss from './screens/Packhas'

const Stack = createStackNavigator();
export default function App() {
   const ref = useRef();
  return (
    
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Categories' component={Catego} options={{headerShown:false}}/>
        <Stack.Screen name="CreateCustom" component={CreateCustom} options={{headerShown:false}}/>
        <Stack.Screen name="Carouss" component={Carouss} options={{headerShown:false}} />       
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Forget' component={Forget} options={{headerShown:false}}/>
        <Stack.Screen name='NewPwd' component={NewPwd} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    



         
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pager: {
    flex: 1,
    alignSelf: "stretch"
  }
});


