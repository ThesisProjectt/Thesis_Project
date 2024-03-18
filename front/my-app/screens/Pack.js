import {View,Text,FlatList,StyleSheet,Image,useWindowDimensions,ScrollView} from 'react-native'
import { useState,useEffect } from 'react'
import CreateCustom from './CreateCustom'

export default function Pack () {
    const[services,setServices]=useState([])
    const[packs,setPacks]=useState([])
    const {width}=useWindowDimensions()

  const fetchServices = async (id) => {
  try {
const response = await fetch(`http://192.168.104.28:3000/packs/get/${id}`)
  const data = await response.json()
  setServices(data)
  }
  catch(error){console.error("error fetching error",error)

}
}


  
useEffect(()=>{
  fetchServices(1)
  
},[])


    return (
        <View className="flex-1 justify-center  items-center bg-cyan-100  ">

        {services.map((ele)=>{
          return (
            <CreateCustom ele={ele}/>
          )
        })}
        
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