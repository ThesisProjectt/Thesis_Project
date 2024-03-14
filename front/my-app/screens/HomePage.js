import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import homepage from "../assets/homepage 1.png";
import homepage2 from "../assets/50%off.png";
import imageData from "../functions/Categories";

const HomePage = ({navigation}) => {

  const Item = ({ image, title }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate("Request")} style={styles.item}>
      <View style={styles.card}>
        <Image source={image} style={styles.flatImage} />
      </View>
      <Text style={{ fontFamily: "Poppins" }} className="text-md text-blue-800">
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View className="items-center">
        <Image source={homepage} className="w-full" style={styles.image} />
      </View>
      <View className="flex-1 flex-row justify-between pl-4 pr-4 pt-5">
        <Text
          style={{ fontFamily: "Poppins" }}
          className="text-2xl text-blue-800"
        >
          Categories
        </Text>
        <TouchableOpacity className="h-10" onPress={() => navigation.navigate("Categories")}>
          <Text
            style={{ fontFamily: "Poppins-Regular" }}
            className="text-lg font-normal text-blue-800"
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView className="flex-1 ">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal
          data={imageData}
          renderItem={({ item }) => (
            <Item image={item.image} title={item.title} />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <Text
        style={{ fontFamily: "Poppins" }}
        className="text-2xl text-blue-800 pl-4 pt-5"
      >
        Special Offer
      </Text>
      <View className=" -mt-9 items-center">
        <Image source={homepage2} className="w-full" style={styles.image2} />
      </View>
      <View style={{ height: 100, backgroundColor: "#EFFFFD" }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFFFFD",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    zIndex:1
  },
  item: {
    width: 150,
    height: 180,
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
  },
  image: {
    height: 230,
  },
  image2: {
    marginTop: 50,
    height: 175,
    borderRadius: 16,
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
