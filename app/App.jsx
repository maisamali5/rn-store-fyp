// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from  "./screens/Dashboard";
import AccountScreen from './screens/AccountScreen';
import { useWindowDimensions } from 'react-native';
import PaymentScreen from './screens/PaymentScreen';
import SupportScreen from './screens/SupportScreen';

const Drawer = createDrawerNavigator();

export default function App(){
    const dimensions = useWindowDimensions();

    return(
<Drawer.Navigator
  screenOptions={{
    drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
    headerStyle: {
      backgroundColor: '#535375',
      border: 0,
      borderColor: "none", 
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold', 
    },
  }}
>
  <Drawer.Screen name="Dashboard" component={Dashboard} />   
  <Drawer.Screen name="Account Setting" component={AccountScreen} />   
  <Drawer.Screen name="Payment methods" component={PaymentScreen} />   
  <Drawer.Screen name="Support" component={SupportScreen} />   
</Drawer.Navigator>
 
    )
};


