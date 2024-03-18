import { Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Avatar() {

  const [image, setImage] = useState("");

  const  getAvatar = async () => {
    const user = JSON.parse(await AsyncStorage.getItem("user"));
    try {
      await axios(`http://192.168.100.3:3000/client/getimg/${user.id}`)
      .then((res) => {
          console.log(res.data);
          setImage(res.data)
        })
        .catch((err)=>console.error(err))
    } catch (err) {
      console.log(err);
    }
    }

  useEffect(()=>{
    getAvatar()
  }, [])

  return (
    <TouchableOpacity onPress={() => handleProfile()}>
      <Image
        style={{ width: 45, height: 45, marginRight: 20, borderRadius: 30 }}
        source={image ? {uri: image} : require("../assets/human.png")} 
      />
    </TouchableOpacity>
  );
}

const handleProfile = async () => {
  await AsyncStorage.clear()
}
