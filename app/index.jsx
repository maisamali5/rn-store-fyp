import React from 'react'
import { View , Text, ImageBackground , TouchableOpacity, StyleSheet} from 'react-native'
import { Link } from 'expo-router'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { LinearGradient } from 'expo-linear-gradient';
// import './gesture-handler';
import { enableLegacyWebImplementation } from 'react-native-gesture-handler';

enableLegacyWebImplementation(true);

export default function HomeScreen() {
  return (
    <View style={styles.container} >

  {/* <LinearGradient
        colors={['#004d7a', '#008793', '#00bf72']}
        style={styles.background}
        resizeMode='cover'> */}

    <Text style={styles.text}>Cashier less Libaray App</Text>
    
  
    <Link href={"/signin"} style={styles.button} >
        <Text style={styles.buttonText}>Get Started</Text>
    </Link>  
  {/* </ImageBackground> */}
  {/* </LinearGradient> */}
  {/* </Container> */}
   </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
  },
  bgImage:{
    width: "100%" ,
    height: "100%" ,
    flex: 1,
    resizeMode: 'cover',
    justifyContent:'center',
    alignItems:'center',
    textAlign: 'center',
  },   
  button: {    
    margin: 20,
    marginHorizontal:"auto",
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    // fontWeight: 'bold',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    text:{
      // flex: 1,
    textAlign:'center',
    color: "white",
    fontSize: 40,
    fontWeight: 'bold',
  }
  })


