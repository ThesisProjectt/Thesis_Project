import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import LOGO from "../assets/LOGO Cleaning.png";
import background from "../assets/sign up.png";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";

const Signup = ({ navigation }) => {
  const [visible, setVisible] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorName, setErrorName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPwd, setErrorPwd] = useState(null);

  function validate() {
    const pattern = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/;
    if(name === ""){
      setErrorEmail(null);
      setErrorName("Please enter your name.")
      return false;
    }else if (!pattern.test(email)) {
      setErrorName(null)
      setErrorEmail("Please enter a valid email address.");
      return false;
    } else if (password.length < 8) {
      setErrorName(null)
      setErrorEmail(null);
      setErrorPwd("Please enter a password of at least 8 characters");
      return false;
    } else if (!/\d/.test(password)) {
      setErrorName(null)
      setErrorEmail(null);
      setErrorPwd("Your password must contain a number");
      return false;
    } else if (!/[A-Z]/.test(password)) {
      setErrorName(null)
      setErrorEmail(null);
      setErrorPwd("Your password must contain at least one uppercase");
      return false;
    } else if (!/[a-z]/.test(password)) {
      setErrorName(null)
      setErrorEmail(null);
      setErrorPwd("Your password must contain lowercase letter");
      return false;
    } else if (password !== confirmPassword) {
      setErrorName(null)
      setErrorEmail(null);
      setErrorPwd("Passwords don't match");
    } else {
      setErrorPwd(null);
      setErrorName(null)
      setErrorEmail(null);
      return true;
    }
  }

  const createAccount = async () => {
    try {
      const isValidated = validate();
      const data = {
        fullName: name,
        email: email,
        password: password,
      };
      if (isValidated) {
        await axios.post("http://192.168.1.45:3000/client/signup", data)
        console.log('done')
        navigation.navigate("Login")
      }
    } catch (e) {
      setErrorEmail("This email has already been used.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <ImageBackground
          source={background}
          resizeMode="cover"
          className="flex-1 justify-center items-center"
        >
          <View style={styles.inner}>
            <Image style={styles.logo} source={LOGO} />
            <Text
              style={{ fontFamily: "Poppins" }}
              className="text-2xl text-blue-800 top-5"
            >
              Sign up
            </Text>
          </View>
          <View className="flex-1 items-center h-screen w-96 p-6 rounded-xl left-4 top-4 gap-8">
            <TextInput
              required
              placeholder="Full name"
              className="rounded-2xl shadow-lg bg-white"
              style={styles.input}
              onChangeText={(text) => setName(text)}
            />
            {errorName && <Text style={styles.inputError}>{errorName}</Text>}
            <TextInput
              required
              placeholder="Email"
              className="rounded-2xl shadow-lg bg-white"
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
            />
            {errorEmail && <Text style={styles.inputError}>{errorEmail}</Text>}
            <View
              className="rounded-2xl shadow-lg bg-white"
              style={styles.input}
            >
              <TextInput
                required
                placeholder="Password"
                secureTextEntry={visible}
                onChangeText={(text) => setPassword(text)}
              />
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
            {errorPwd && <Text style={styles.inputError}>{errorPwd}</Text>}
            <View
              className="rounded-2xl shadow-lg bg-white"
              style={styles.input}
            >
              <TextInput
                required
                placeholder="Confirm Password"
                secureTextEntry={visible}
                onChangeText={(text) => setConfirmPassword(text)}
              />
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
              onPress={() => {
                createAccount();
              }}
            >
              <Text
                style={{ fontFamily: "Poppins" }}
                className="text-cyan-50 text-xl"
              >
                Sign up
              </Text>
            </TouchableOpacity>
            <View className="flex-1 flex-row right-4">
            <Text style={{ fontFamily: 'Poppins' }} className="text-lg text-teal-500">Already have an account,{" "}</Text>
            <TouchableOpacity
              className="h-12"
              onPress={() => {
                setErrorEmail(null)
                setErrorName(null)
                setErrorPwd(null)
                navigation.navigate("Login")}}
            >
              <Text style={{ fontFamily: 'Poppins' }} className="text-lg underline text-teal-500">Sign in</Text>
            </TouchableOpacity>
          </View>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
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
    color: "black",
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
  inputError: {
    color: "red",
    textAlign: "center",
    fontFamily:"Poppins",
    fontSize: 13,
    position:'absolute'
  },
});

export default Signup;
