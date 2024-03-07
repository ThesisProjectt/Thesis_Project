import React from "react";
import { View,Image,Text,StyleSheet,FlatList  } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import garden from '../assets/garden.png'
import residentials from '../assets/residentials.png'
import commercials from '../assets/commercials.png'
import cars from '..//assets/cars.png'


let list = [
    {image:garden,title:"garden"},
    {image:residentials,title:"residentials"},
    {image:commercials,title:"commercials"},
    {image:cars,title:"cars"}
]

export default function Catego() {
  return (
      <View  style={styles.container}>
        <View className="flex flex-row  items-center">
        <AntDesign name="leftcircleo" size={24} color="black"/>
        <Text className="text-2xl text-gray-500 mb-12 mt-12" >Categories</Text>
        </View>
        <FlatList
         data={list}
         numColumns={2} 
         renderItem={({item})=>{
             return (
                 <View style={styles.gridContainer}>
                <View style={styles.gridItem}>  
                <View className="bg-white w-40 h-40  flex items-center justify-center rounded-lg " style={styles.shadow}>
                <Image source={item.image} className="h-32 w-32"/>
                </View>
                <Text className="text-blue-900 text-center mt-2 text-lg"> {item.title} </Text>
                </View>
                    {/* <IoArrowBackCircleOutline/> */}
                </View>
            )
            
          }}
        />
      </View>  

  )
   }
   
   const styles = StyleSheet.create({
    container:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"#effffd",


    },
    
    gridItem: {
      margin:8
    },
    
   
  });
