
import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import LOGO from "../assets/LOGO Cleaning.png";

import { TextInput } from "react-native-paper";

const Signup = () => {

  const [visible, setVisible] = useState(true);

  return (
    <KeyboardAvoidingView
    behavior="padding" keyboardVerticalOffset={Platform.OS==="ios"? 100:0}  
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Image style={styles.logo} source={LOGO} />
          <Text className="font-bold text-2xl text-blue-800">Sign up</Text>
          <TextInput required placeholder="Full name" style={styles.input} />
          <TextInput type="number" required placeholder="CIN" style={styles.input} />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={visible}
            right={
              <TextInput.Icon
                onPress={() => setVisible(!visible)}
                icon={visible ? "eye-off" : "eye"}
              />
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={visible}
            right={
              <TextInput.Icon
                onPress={() => setVisible(!visible)}
                icon={visible ? "eye-off" : "eye"}
              />
            }
          />

          <View style={styles.button}>
            <TouchableOpacity>
              <Text className="font-bold text-cyan-50 text-xl">Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFFFFD",
height:100,
    width: "100%",
  },
  inner: {
    padding: 40,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom:1
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 80,
    height: 80,
  },
  input: {
    width: "90%",
    height: 48,
    borderRadius: 15,
    justifyContent: "center",
    paddingLeft: 22,
    marginTop: 25,
    backgroundColor: "#FFFFFF",
    shadowColor: "#C8C4C440",
  },
  button: {
    width: "90%",
    height: 48,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    backgroundColor: "#61D8D8",
    shadowColor: "#C8C4C440",
  },
});

export default Signup;