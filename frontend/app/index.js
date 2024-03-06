import { useNavigation, useRouter } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup } from "./screens/index";

const Stack = createNativeStackNavigator();
const Home = () => {
  const router = useRouter();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator intialRouteName="Signup">
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
            title:"Signup"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;
