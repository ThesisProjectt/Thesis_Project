import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Pressable,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import LOGO from "../../assets/LOGO Cleaning.png";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

const Signup = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Image style={styles.logo} source={LOGO} />
          <Text className="font-bold text-2xl text-blue-800">Sign up</Text>
          <TextInput required placeholder="Full name" style={styles.input} />
          <TextInput type="number" required placeholder="CIN" style={styles.input} />
          <TextInput required placeholder="Full name" style={styles.input} />
          <TextInput required placeholder="Full name" style={styles.input} />
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
  //     <SafeAreaView style={{backgroundColor:"#EFFFFD"}} className="flex-1 items-center pt-28">

  //       {/* <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS==="ios"? 100:0} style={{height:200}}> */}
  //       <View style={styles.container}>
  //         <Image style={styles.logo} source={LOGO} />
  //         <Text className="font-bold text-2xl text-blue-800">Sign up</Text>
  //       </View>
  //       <View style={styles.input}>
  //         <TextInput placeholder="Full name" />
  //       </View>
  //       <View style={styles.input}>
  //         <TextInput placeholder="Email" />
  //       </View>
  //       <View style={styles.input}>
  //         <TextInput placeholder="CIN" />
  //       </View>
  //       <View style={styles.input}>
  //         <TextInput placeholder="Password" secureTextEntry={visible} />
  //         <TouchableOpacity
  //           onPress={() => setVisible(!visible)}
  //         style={{ position: "absolute", right: 12 }}>
  //           {visible ? (
  //             <Ionicons name="eye-off" size={24} color={"black"} />
  //           ) : (
  //             <Ionicons name="eye" size={24} color={"black"} />
  //           )}
  //         </TouchableOpacity>
  //       </View>
  //       <View style={styles.input}>
  //         <TextInput placeholder="Confirm Password" secureTextEntry={visible} />
  //         <TouchableOpacity
  //           onPress={() => setVisible(!visible)}
  //         style={{ position: "absolute", right: 12 }}>
  //           {visible ? (
  //             <Ionicons name="eye-off" size={24} color={"black"} />
  //           ) : (
  //             <Ionicons name="eye" size={24} color={"black"} />
  //           )}
  //         </TouchableOpacity>
  //       </View>
  //       <View style={styles.button}>
  //         <TouchableOpacity>
  //           <Text className="font-bold text-cyan-50 text-xl">Sign up</Text>
  //         </TouchableOpacity>
  //       </View>
  //       {/* </KeyboardAvoidingView> */}

  //     </SafeAreaView>
  //   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFFFFD",

    width: "100%",
  },
  inner: {
    padding: 40,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
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
