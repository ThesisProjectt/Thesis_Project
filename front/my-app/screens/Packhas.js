import { StatusBar,StyleSheet,Text,View,Dimensions,Image, Button } from "react-native";
import Carousel,{Pagination} from 'react-native-snap-carousel'
import { useState,useRef,useEffect} from "react";
export  const Slider_Width=Dimensions.get('window').width+30
export const Item_Width=Math.round(Slider_Width*0.8)

const renderItem = ({item})=>{
return (
    <View style={styles.flatContainer}> 
    <View className=" bg-white p-4 ml-2 mr-2 mt-1 rounded-xl" style={{width:300}}>
    <Text className="text-black text-xl text-center"> {item.name}</Text>
    <Text className="text-black"> Price : {item.varying_price}</Text>
    </View>
    <View className="flex m-4 content-around ">
{console.log(item)}
{services.map((ele)=> {return (
                
                <View > 
                <View>
                {/* <Text className="text-white text-xl"> {ele.name}</Text> */}
                {/* <Text className="text-white "> Price : {ele.price}</Text> */}
                </View>
                <View className="flex m-4 content-around ">
{console.log(ele)}
                <Text className="text-white font-bold"> {ele.name} </Text>
               
                </View>
                 </View>
              )})}
    </View>
     </View>
)
}

export default  Carouss = ({navigation}) =>{

const [services,setServices]=useState([])
const [packs,setPacks]=useState([])
    const fetchServices = async () => {
        try {
      const response = await fetch(`http://192.168.11.42:3000/services/getServices`)
        const data = await response.json()
        setServices(data)
        }
        catch(error){console.error("error fetching error",error)
      
      }
      }

      const fetchPacks = async () => {
        try {
      const response = await fetch(`http://192.168.11.42:3000/pack/getPacks`)
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


    const [index, setIndex] = useState();
     const isCarousel = useRef(null)
     return (
        <View style={styles.container}>
            <Carousel
            ref={isCarousel}
            data={packs}
            renderItem={ ({item})=>{
                return (
                    <View style={styles.flatContainer}> 
                    <View className=" bg-white p-4 ml-2 mr-2 mt-1 rounded-xl" style={{width:300}}>
                    <Text className="text-black text-xl text-center"> {item.name}</Text>
                    <Text className="text-black"> Price : {item.varying_price}</Text>
                    </View>
                    <View className="flex m-4 content-around ">
                {console.log(item)}
                {services.map((ele)=> {return (
                                
                                <View > 
                                <View>
                                {/* <Text className="text-white text-xl"> {ele.name}</Text> */}
                                {/* <Text className="text-white "> Price : {ele.price}</Text> */}
                                </View>
                                <View className="flex m-4 content-around ">
                {console.log(ele)}
                                <Text className="text-white font-bold"> {ele.name} </Text>
                               
                                </View>
                                 </View>
                              )})}
                    </View>
                     </View>
                )
                }}
            sliderWidth={Slider_Width}
            itemWidth={Item_Width}
            onSnaptoItem={index=>setIndex(index)}
            keyExtractor={(item)=>item.id}
            
            />
            {/* <Pagination
            dotsLength={packs.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{width:10,height:10,borderRadius:10,marginHorizontal:8,backGroundColor:"green"}}
            /> */}
<Text style={{width:320,height:40,backgroundColor:"#008BEA",textAlign:"center",color:"white",fontSize:20,borderRadius:20,marginTop:10,height:50}}> Purchase </Text>
<Text style={{width:320,height:40,backgroundColor:"#bbbbbb",textAlign:"center",color:"white",fontSize:20,borderRadius:20,marginTop:10,height:50}} onPress={()=>{navigation.navigate("CreateCustom")}}> You Can Create Your Custom Package </Text>
        </View>
     )
}

const styles= StyleSheet.create({
    container:{
        paddingTop:50,
        alignItems:"center"
    },
    flatContainer:{
    borderWidth:2,
    borderColor:"black",
    marginRight:4,
    backgroundColor:"midnightblue",
    width:320,
    height:500,
    backgroundColor:"#008BEA"}
})