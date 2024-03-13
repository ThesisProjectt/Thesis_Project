import { StatusBar,StyleSheet,Text,View,Dimensions,Image, Button } from "react-native";
import Carousel,{Pagination} from 'react-native-snap-carousel'
import { useState,useRef,useEffect} from "react";
export  const Slider_Width=Dimensions.get('window').width+40
export const Item_Width=Math.round(Slider_Width*0.8)



export default  Carouss = ({navigation,route}) =>{
  const {catid,catName} =route.params
console.log("packsssssss",catid)
console.log("name",catName)

const [packs,setPacks]=useState([])

   

      const fetchPacks = async (id) => {
        try {
      const response = await fetch(`http://192.168.104.31:3000/pack/get/${id}`)
        const data = await response.json()
        console.log(data)
        setPacks(data)
        }
        catch(error){console.error("error fetching error",error)
      
      }
      }
 
useEffect(()=>{
    fetchPacks(catid)
},[])


    const [index, setIndex] = useState();
     const isCarousel = useRef(null)
     return (
        <View style={styles.container}>
          <Text style={{fontSize:20,color:"gray"}}> {catName} </Text>
            <Carousel
            ref={isCarousel}
            data={packs}
            renderItem={ ({item})=>{
                return (
                  <View> 
                    <View className="  bg-slate-50 p-2  rounded-xl shadow-lg mb-2 " style={{width:320}}>
                    <Text className="text-blue-740  font-bold text-xl text-left h-12"> {item.name}</Text>
                    <Text className="text-blue-700 text-lg font-semibold"> Price : {item.varying_price}</Text>
                    </View>
<View style={styles.flatContainer}> 
                    <View className="flex m-2 content-around ">
                {item.Services.map((ele)=> {return (      
                                <View > 
                                <View>
                               
                                </View>
                                <View className="flex m-2 content-around ">
            
                                <Text className="text-white text-lg font-bold"> {`\u2022 ${ele.name}`} </Text>
                               
                                </View>
                                 </View>
                              )})}
                    </View>
                     </View>

                    </View>
                )
                }}
            sliderWidth={Slider_Width}
            itemWidth={Item_Width}
            onSnaptoItem={index=>setIndex(index)}
            keyExtractor={(item)=>item.id}
            
            />
       
<Text style={{width:320,backgroundColor:"#008BEA",textAlign:"center",color:"white",fontSize:20,borderRadius:20,}}> Purchase </Text>
       </View>
     )
}

const styles= StyleSheet.create({
    container:{
      flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#EFFFFD"
    },
    flatContainer:{
    width:320,
    height:400,
    borderRadius:20,
    backgroundColor:"#008BEA",
  
}
})