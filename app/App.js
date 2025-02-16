import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingScreen from  "./screens/SettingScreen";
import AccountScreen from './screens/AccountScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App(){
    const dimensions = useWindowDimensions();

    return(
    <Drawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
      }}
    >
      <Drawer.Screen name="Dashboard" component={SettingScreen} />   
      <Drawer.Screen name="Account" component={AccountScreen} />   
      <Drawer.Screen name="About" component={AccountScreen} />   
      <Drawer.Screen name="Support" component={AccountScreen} />   
    </Drawer.Navigator>
 
    )
};


