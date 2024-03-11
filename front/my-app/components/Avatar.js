import { Image } from 'react-native';

export default function Avatar() {
    return (
      <Image
      style={{width: 40, height: 40, marginRight:20}}  // required Dimensions and styling of Image
      source={require('../assets/human.png')} // enter your avatar image path 
     />
    );
  }