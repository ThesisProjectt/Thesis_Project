import { Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Avatar() {
  return (
    <TouchableOpacity onPress={() => handleProfile()}>
      <Image
        style={{ width: 40, height: 40, marginRight: 20 }}
        source={require("../assets/human.png")}
      />
    </TouchableOpacity>
  );
}

const handleProfile = async () => {
  await AsyncStorage.clear()

}
