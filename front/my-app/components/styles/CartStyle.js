import Avatar from '../Avatar';
import { Ionicons } from "@expo/vector-icons"; 

export default Cart = {
    headerShown:true, 
    headerTitleAlign: "center", 
    headerLeft: false, 
    headerRight: (props) => <Avatar {...props} />,
    headerTransparent: true,
    headerStyle: {
      height: 130,
    },
    headerTitleStyle: {
      fontFamily:'Poppins',
    },
    headerTintColor: "gray",  
    tabBarLabel: '', 
    tabBarIcon: ({ color }) => (
      <Ionicons name="cart-outline" color={color} size={30} />
    ),
  }