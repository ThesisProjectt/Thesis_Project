import * as React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView} from 'react-native-gesture-handler'

import Catego from './screens/Catego';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Forget from './screens/Forget';
import NewPwd from './screens/NewPwd';
import FirstScreen from "./screens/firstScreen";
import HomePage from './screens/HomePage';
import Avatar from './functions/Avatar';

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins': require("./assets/fonts/Poppins-Bold.ttf"),
    'Poppins-Regular':require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light':require('./assets/fonts/Poppins-Light.ttf')
  });
  if (!fontsLoaded) { return null}

  const option = {
    headerShown:true, 
    headerTitleAlign: "center", 
    headerLeft: false, 
    headerRight: (props) => <Avatar {...props} />,
    headerTransparent: true,
    headerStyle: {
      height: 130,
    },
    headerTitleStyle: {
      fontFamily:'Poppins',
    },
    headerTintColor: "gray"
  }

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='FirstScreen' component={FirstScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={HomePage} options={option}/>
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}} />
        <Stack.Screen name='Categories' component={Catego} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Forget' component={Forget} options={{headerShown:false}}/>
        <Stack.Screen name='NewPwd' component={NewPwd} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}