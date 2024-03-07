import {View,Text,FlatList} from 'react-native'




let services = []
export default function Pack () {
    return (
        <View>
            <View className="bg-slate-300 rounded-lg">

            </View>
            <FlatList data={services}
             renderItem={({item})=>{
                return (
                    <View >
                  <Text>{item.name} </Text>
                   </View>
               )
               
             }}
            /> 
        </View>
    )
}