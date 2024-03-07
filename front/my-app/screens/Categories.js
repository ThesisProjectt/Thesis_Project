import { View,Image,Text,StyleSheet } from "react-native";

import garden from '../assets/garden.png'
import residentials from '../assets/residentials.png'
import commercials from '../assets/commercials.png'
import cars from '..//assets/cars.png'

export default function Categories () {
    return (
        
        <View style={styles.container}>
            <Text className="text-2xl text-gray-500 mb-16">
                Categories
            </Text>

                <View style={styles.gridContainer}>               
                
                <View style={styles.gridItem}>  
                <View className="bg-white w-36 h-36  flex items-center justify-center rounded-lg " style={styles.shadow}>
                <Image source={garden}/>
                </View>
                <Text className="text-blue-900 text-center mt-2"> Garden </Text>
                </View>

                <View style={styles.gridItem}>  
                <View className="bg-white w-36 h-36  flex items-center justify-center rounded-lg">
                <Image source={residentials}/>
                </View>
                <Text className="text-blue-900 text-center mt-2"> residentials </Text>
                </View>
                
                <View style={styles.gridItem}>  
                <View className="bg-white w-36 h-36  flex items-center justify-center rounded-lg">
                <Image source={commercials}/>
                </View>
                <Text className="text-blue-900 text-center mt-2"> commercials </Text>
                </View>
                
                <View style={styles.gridItem}>  
                <View className="bg-white w-36 h-36  flex items-center justify-center rounded-lg">
                <Image source={cars}/>
                </View>
                <Text className="text-blue-900 text-center mt-2"> cars </Text>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"#effffd",
// marginTop:100

    },
    gridContainer: {
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      justifyContent: 'center', 
      alignItems:"center", 
      marginBottom:100
    },
    gridItem: {
    //   width: '48%',
    //   height:"auto", 
    //   marginBottom: 10,
      margin:8
    },
    
   
  });