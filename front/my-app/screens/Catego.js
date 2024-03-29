import React, { useState,useEffect } from "react";
import { View,Image,Text,StyleSheet,FlatList,Pressable  } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import garden from '../assets/garden.png'
import residentials from '../assets/residentials.png'
import commercials from '../assets/commercials.png'
import cars from '..//assets/cars.png'





let list = [
    {image:garden,title:"Garden"},
    {image:residentials,title:"Residentials"},
    {image:commercials,title:"Commercials"},
    {image:cars,title:"Cars"},
    {image:cars,title:"Cars"}
]

export default function Catego({navigation}) {
  const [categories,setCategories]=useState([])
  const  [packs,setPacks]=useState([])
  const [one,setOne]=useState([])
  
  const fetchCategories = async () => {
    try {
  const response = await fetch(`http://192.168.1.45:3000/category/getCategories`)
    const data = await response.json()
    setCategories(data)
    }
    catch(error){console.error("error fetching error",error)
  
  }
  }


  useEffect(()=>{
    fetchCategories()
 

   

  },[])

  return (
      <View  style={styles.container}>
        
        <View className="flex flex-row  items-center">
        <AntDesign name="leftcircleo" size={24} color="black" onPress={()=>{navigation.navigate("FirstScreen")}}/>
        <Text className="text-2xl text-gray-500 mb-12 mt-12" >Categories</Text>
        </View>
        <FlatList
         data={categories}
         numColumns={2} 
         showsVerticalScrollIndicator={false}
         renderItem={({item})=>{
             return (
                 <View style={styles.gridContainer}>
                <View style={styles.gridItem}>  
                <View className="bg-white w-36 h-36  flex items-center justify-center rounded-lg " style={styles.shadow}>
                {console.log(one,"some")}
                <Pressable >
                <Image source={{uri:item.image}} className=" h-28 w-28"/>
                </Pressable>
                
                </View>
                <Text className="text-blue-900 text-center mt-2 text-lg" onPress={()=>{navigation.navigate("Carouss",{catid:item.id,catName:item.name});}}
               > {item.name} {item.id} </Text>
                </View>
                   
                </View>
            )
            
          }}
          keyExtractor={(item)=>item.id}
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
