import {View,Text,FlatList,StyleSheet,Image,useWindowDimensions,ScrollView} from 'react-native'
import { useState,useEffect } from 'react'

export default function Pack () {
    const[services,setServices]=useState([])
    const[packs,setPacks]=useState([])
    const {width}=useWindowDimensions()

  const fetchServices = async () => {
  try {
const response = await fetch(`http://192.168.11.42:3000/services/getServices`)
  const data = await response.json()
  setServices(data)
  }
  catch(error){console.error("error fetching error",error)

}
}
const fetchPacks = async (id) => {
  try {
const response = await fetch(`http://192.168.11.42:3000/pack/get/${id}`)
  const data = await response.json()
  setPacks(data)
  }
  catch(error){console.error("error fetching error",error)

}
}

  
useEffect(()=>{
  fetchServices()
  fetchPacks()
},[])


    return (
        <View className="flex-1 justify-center  items-center bg-cyan-100  ">

         <View >
         <FlatList data={services} className="  ml-auto mr-auto rounded-xl justify-self-center" style={styles.flat}
           renderItem={({item})=>{
            return (
                <View className="mb-2 shadow-lg shadow-transparent  items-center bg-blue-700" style={[styles.container,{width}]} >
                    <View className="w-4/5 bg-slate-100  h-20 m-1 rounded-lg content-center "> 
                    <Text className="text-center text-2xl text-blue-950">Pack Name</Text>
                    <Text className="text-center text-xl text-blue-950"> Price : {item.price}</Text>
                    </View>
             <Text className="text-white text-xl"> {item.name}</Text>
             <Text className="text-white text-xl">{item.description}</Text>
             {console.log(item)}
             <Text className="text-white text-xl">{item.description}</Text>
             <Text className="text-white text-xl">{item.description}</Text>
             <Text className="text-white text-xl">{item.description}</Text>
             <Text className="text-white text-xl">{item.description}</Text>
             <Text className="text-white text-xl">{item.description}</Text>
             <Text className="text-white text-xl">{item.description}</Text>
             <Text className="text-white text-xl">{item.description}</Text>
             <Image source={{ uri: item.image }} className="w-32 h-32"/>
             
            

               </View>
           )
           
         }}
         horizontal
         showsHorizontalScrollIndicator={false}
         pagingEnabled 
         bounces={false} 
         keyExtractor={(item)=>item.id}
           />
         </View>
         <Text className="w-11/12 text-center h-16 text-white text-xl bg-blue-700 mt-4" style={styles.purcharse}> Purchase </Text> 
        
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:0.8,
        justifyContent:"center",
        alignItems:"center",
       
            },
            
            

})