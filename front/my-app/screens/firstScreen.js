import {
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
} from "react-native";
import { useEffect } from "react";
import LOGO from "../assets/LOGO Cleaning.png";
import background from "../assets/landing page.png";
import { useFonts } from 'expo-font';

const FirstScreen = ({ navigation }) => {

    useEffect(() => {
      setTimeout(() => {
        navigation.navigate("Home");
      }, 3000);
    }, []);
  
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={background}
          resizeMode="cover"
          className="flex-1 items-center"
        >
        <View style={styles.inner}>
            <ImageBackground style={styles.logo} source={LOGO} />
            <Text
              style={{ fontFamily: "Poppins" }}
              className="text-3xl text-black tex top-5"
            >
             S P O T L E S S
            </Text>
            <Text
              className="text-xl text-black font-medium top-5"
            >
             CLEANING SERVICES
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#EFFFFD",
      width: "100%",
    },
    inner: {
      alignItems: "center",
      marginTop: 110,
      padding: 10,
    },
    logo: {
      width: 80,
      height: 80,
    },
  });
  
  export default FirstScreen;
  