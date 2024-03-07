import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  keyboardVerticalOffset,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ImageBackground,
  TextInput,
} from "react-native";
import LOGO from "../assets/LOGO Cleaning.png";
import background from "../assets/new pass.png";
import { Ionicons } from "@expo/vector-icons";

const Forget = ({ navigation }) => {
  const [visible, setVisible] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        className="flex-1 justify-center items-center"
      >
        <View style={styles.inner}>
          <Image style={styles.logo} source={LOGO} />
          <Text style={{ fontFamily: 'Poppins' }} className="text-2xl text-blue-800 top-5">New password</Text>
        </View>
        <View className="flex-1 items-center h-screen w-96 p-6 rounded-xl left-4 top-4 gap-8">
          <TextInput
            required
            placeholder="Your e-mail address"
            className="rounded-2xl shadow-lg bg-white"
            style={styles.input}
          />
          <View className="rounded-2xl shadow-lg bg-white" style={styles.input}>
            <TextInput placeholder="New Password" secureTextEntry={visible} />
            <TouchableOpacity
              onPress={() => setVisible(!visible)}
              style={{ position: "absolute", right: 12 }}
            >
              {visible ? (
                <Ionicons name="eye-off" size={24} color={"black"} />
              ) : (
                <Ionicons name="eye" size={24} color={"black"} />
              )}
            </TouchableOpacity>
          </View>
          <View className="rounded-2xl shadow-lg bg-white" style={styles.input}>
            <TextInput placeholder="Confirm Password" secureTextEntry={visible} />
            <TouchableOpacity
              onPress={() => setVisible(!visible)}
              style={{ position: "absolute", right: 12 }}
            >
              {visible ? (
                <Ionicons name="eye-off" size={24} color={"black"} />
              ) : (
                <Ionicons name="eye" size={24} color={"black"} />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            className="rounded-2xl shadow-lg"
            style={styles.button}
            onPress={() => navigation.navigate("NewPwd")}
          >
            <Text style={{ fontFamily: 'Poppins' }} className="text-cyan-50 text-xl">Confirm</Text>
          </TouchableOpacity>
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
  input: {
    width: "100%",
    height: 48,
    justifyContent: "center",
    paddingLeft: 22,
    paddingRight: 40,
    color: "#020E5F66",
    right: 15,
    shadowColor: "black",
  },
  inputContainer: {
    backgroundColor: "#FFFFFFC0",
    shadowColor: "gray",
  },
  button: {
    width: "100%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#61D8D8",
    marginTop: "10%",
    right: 15,
    shadowColor: "black",
  },
});

export default Forget;
