import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import Catego from './screens/Catego';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Forget from './screens/Forget';
import NewPwd from './screens/NewPwd';
import CreateCustom from './screens/CreateCustom';
import Carouss from './screens/Packhas'
import FirstScreen from "./screens/firstScreen";
import BottomNav from './components/BottomNav';

const Stack = createStackNavigator();

export default function App() {
   const ref = useRef();
  

  const [fontsLoaded] = useFonts({
    'Poppins': require("./assets/fonts/Poppins-Bold.ttf"),
    'Poppins-Regular':require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light':require('./assets/fonts/Poppins-Light.ttf')
  });
  if (!fontsLoaded) { return null}

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='FirstScreen' component={FirstScreen} options={{headerShown:false}}/>
        <Stack.Screen name='BottomNav' component={BottomNav} options={{headerShown:false}}/>
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Forget' component={Forget} options={{headerShown:false}}/>
        <Stack.Screen name='NewPwd' component={NewPwd} options={{headerShown:false}}/>
        <Stack.Screen name="Carouss" component={Carouss}/>
        <Stack.Screen name="CreateCustom" component={CreateCustom}/>
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



  
