import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function CheckToken () {
    const isToken = await AsyncStorage.getItem("token")
    console.log(isToken);
    return (isToken)
}