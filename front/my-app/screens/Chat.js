import io from "socket.io-client";
import { View,Text,StyleSheet, TextInput, Button,Image } from 'react-native'
import {useState} from 'react'
import Message from './Message'
const socket = io.connect("http://192.168.104.10:3001");
export default Chatt =()=>{
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
    const mr = require('../assets/Untitled.jpg')
    const joinRoom = () => {
        if (username !== "" && room !== "") {
          socket.emit("join_room", room);
          setShowChat(true);
        }
      };


    return (
        <View style={styles.container}>
            {!showChat ? (
            <View style={styles.chat}>
                <View className="flex flex-row items-center ">
                <Text style={{color:"white",fontSize:14,fontWeight:"bold",marginRight:"auto"}}> Talk To Mister Cleaner  </Text>
            <Image source={mr}
            className="w-12 h-12"/>
                     </View>
             
               <Text style={{color:"white",fontSize:14,fontWeight:"bold"}}  > Hello how can we help you ? </Text>     
               <TextInput 
               style={{backgroundColor:"white",height:40,marginBottom:8,marginTop:2}} 
               placeholder={"type your message"}
               onChangeText={(newText) => {setUsername(newText)}}
               />
               <TextInput 
               style={{backgroundColor:"white",height:40}} 
               placeholder={"ID"}
               onChangeText={(newText) => {setRoom(newText)}}
               />
               <Button title="send" onPress={joinRoom}/> 
            </View>
              ) : (
                <Chat socket={socket} username={username} room={room} />
              )}
        </View> 
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#00b9f1"    
    },
    chat : {
        width:"80%",
        height:200,
        borderWidth:4,
        borderColor:"white",
        shadowColor:"transparent",
        
    }
})