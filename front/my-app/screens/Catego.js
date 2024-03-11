import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import garden from "../assets/garden.png";
import residentials from "../assets/residentials.png";
import commercials from "../assets/commercials.png";
import cars from "..//assets/cars.png";

let list = [
  { image: garden, title: "Garden" },
  { image: residentials, title: "Residentials" },
  { image: commercials, title: "Commercials" },
  { image: cars, title: "Cars" },
  { image: cars, title: "Cars" },
];

export default function Catego({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [packs, setPacks] = useState([]);
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.15:3000/category/getCategories`
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("error fetching error", error);
    }
  };

  const fetchPacks = async (id) => {
    try {
      const response = await fetch(`http://192.168.1.15:3000/pack/get/${id}`);
      const data = await response.json();
      setPacks(data);
    } catch (error) {
      console.error("error fetching error", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity activeOpacity={0.8} style={styles.item}>
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.flatImage} />
              </View>
              <Text
                style={{ fontFamily: "Poppins" }}
                className="text-md text-blue-800"
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#effffd",
    paddingTop: StatusBar.currentHeight + 100,
  },
  item: {
    width: 150,
    height: 180,
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 126,
    height: 126,
    borderRadius: 20,
    elevation: 4,
  },
  flatImage: {
    width: 100,
    height: 100,
  },
});
