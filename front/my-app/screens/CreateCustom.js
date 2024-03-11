import { View,Text,TextInput,Button,Image, Pressable,ScrollView } from "react-native";
import { useState,useEffect,useRef  } from "react";
import { Checkbox } from 'react-native-paper'


export default CreateCustom = ({navigation})=>{
 

    const[services,setServices]=useState([])
    const[quantity,setQuantity]=useState(1)
    const [checked, setChecked] = useState(false);
    const fetchServices = async () => {
        try {
      const response = await fetch(`http://192.168.104.17:3000/services/getServices`)
        const data = await response.json()
        setServices(data)
        }
        catch(error){console.error("error fetching error",error)
      
      }
      }
useEffect(()=>{
    fetchServices()
},[])


    return (
      <ScrollView showsVerticalScrollIndicator={false}>

      
        <View className="flex-1 items-center content-center mt-10">
        <Text className="w-36 text-center text-gray-400 font-bold text-opacity-50 text-xl "> Custom Pack</Text>
    <Text className="text-sky-700 text-xl font-bold text-left mr-auto mb-4" style={{color:"#02337B"}}>Select your cleaning needs</Text>
        {services.map((element)=>{
          return (
    
        <View className=" flex-row items-center mb-4 ">

<View  className="w-10 h-10 bg-white rounded-lg shadow mr-2 flex items-center justify-center"> 
<Image className="w-8 h-8 rounded" source={{uri:element.image}}  />
</View>
    
    
    <View className="w-60  h-10 bg-white rounded-lg shadow flex  flex-row justify-center"> 
             {/* <View className="w-10 h-10 bg-white rounded-lg shadow"> <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSduAtAwHbovUilN6M47TesEg2o4jCafpFnKwV7vzafnU-gYq3VxEiUITpua9g2sOFsyDk&usqp=CAU"}}/> </View> */}
    <Text className="text-blue-800  bg-white font-bold ml-2 mt-2.5">{element.name}</Text>
        
        <View className="ml-auto flex flex-row items-center mr-2"> 
        <Pressable className="w-4 h-4 bg-gray-100 rounded shadow" onPress={()=>{setQuantity(quantity-1)}}><Text className="text-sky-900 text-xs text-center font-medium">+</Text></Pressable>
        <TextInput 
        keyboardType="numeric"  
        value="1" onChangeText={setQuantity}
        className="w-3 ml-2 mr-2"
        />
       <Pressable className="w-4 h-4 bg-gray-100 rounded shadow" onPress={()=>{setQuantity(quantity-1)}}><Text className="text-sky-900 text-xs font-medium  text-center">-</Text></Pressable>
        </View>
    
    </View>

        <View className="w-10 h-10 bg-white rounded-lg shadow ml-2" > 
    
        <Checkbox   status={checked ? 'checked' : 'unchecked'}  onPress={() => {setChecked(!checked);}}/>
        </View>
        
          
        </View>
          )
        })}
    
        <View className="bg-white flex-row items-center w-4/5 h-10 mb-4">
        <Text className=" text-xl font-bold h-8" style={{color:"#02337B"}}> Total : </Text>
        <Text className=" text-xl font-bold h-8 ml-auto" style={{color:"#02337B"}}> Price: 100$ </Text>
        </View>
        <View>
          {/* <Button title="Create Your Pack" color="#02337B" />  */}
          {/* <Button title="Cancel" color="#B21212" onPress={()=>navigation.navigate('Cutom')} /> */}
        <Pressable style={{backgroundColor:"#02337B",width:300,height:48,borderRadius:20,marginBottom:8,display:"flex",alignItems:"center",justifyContent:"center"}} >
          <Text className="text-white text-center text-xl">Create Your Pack</Text>
        </Pressable>
        <Pressable  onPress={()=>navigation.navigate("Login")} style={{backgroundColor:"#B21212",width:300,height:48,borderRadius:20,display:"flex",alignItems:"center",justifyContent:"center"}} >
          <Text className="text-white text-center text-xl " onPress={()=>{navigation.navigate("Carouss")}}>Cancel</Text>
        </Pressable>
         
        </View>
       
        </View>
        </ScrollView>
    )
  }


