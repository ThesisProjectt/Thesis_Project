import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
  Touchable,
  Button,
} from "react-native";
import homepage from "../assets/homepage 1.png";
import imageData from "../functions/Categories";
import test from "../assets/residentials.png";
import { TouchableOpacityBase } from "react-native";

const HomePage = () => {
  const Item = ({ image, title }) => (
    <TouchableOpacity activeOpacity={0.8} style={styles.item}>
      <View style={styles.card}>
        <Image source={image} style={styles.flatImage} />
      </View>
      {console.log(image)}
      <Text style={{ fontFamily: "Poppins" }} className="text-lg text-blue-700">
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container} className=" pl-1 pr-1 pt-32">
      <Image source={homepage} style={styles.image} />
      <View className="flex-1 flex-row justify-between p-7">
        <Text
          style={{ fontFamily: "Poppins" }}
          className="text-2xl text-blue-800"
        >
          Categories
        </Text>
        <TouchableOpacity className="h-10">
          <Text
            style={{ fontFamily: "Poppins-Regular" }}
            className="text-lg font-normal text-blue-800"
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView className="flex-1 ml-4 mr-4 -mt-96">
        <FlatList
          horizontal
          data={imageData}
          renderItem={({ item }) => (
            <Item image={item.image} title={item.title} />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#EFFFFD",
  },
  item: {
    width: 150,
    height: 150,
    alignItems: "center",
    gap: 10,
    // justifyContent: "space-evenly",
  },
  image: {
    width: 380,
    height: 220,
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

export default HomePage;
