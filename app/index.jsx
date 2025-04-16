import React from 'react'
import { View , Text, ImageBackground , TouchableOpacity, StyleSheet} from 'react-native'
import { Link } from 'expo-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  <View style={styles.container}>
  <Icon.Button
                    name="shopping-basket"
                    backgroundColor="transparent"
                    color={"white"}
                    size={100}
                    // borderRadius={}
                    style={{
                    // left: "22.5%",
                    // alignItems:"center",
                    // width: 100,
                    // height: 100,
                    margin: 10
                    }}
                    // onPress={}
  ></Icon.Button>
  <Text style={styles.heading}>Cashierless Store</Text>
  <Text style={styles.subHeading}>HASSLE FREE SHOPPING</Text>
  </View>
    
    <View style={{bottom:100}}>
    <Text style={styles.p}>Discover the best products with queue less, convenient and fast checkout</Text>
    </View>

  {/* <br /><br /><br /> */}
    <Link href={"/signin"} style={styles.button} >
        <Text style={styles.buttonText}>Log In</Text>
    </Link>  

    <Link href={"/signup"} style={styles.btn2} >
        <Text style={styles.buttonText}>Create an Account</Text>
        
    </Link>  
    {/* <br /> <br /> */}

   </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "#535375"
  },  
  button: {    
    marginBottom: 30,
    width: 340,
    // marginHorizontal:"auto",
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 25,
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn2:{
    marginBottom: 30,
    width: 340,
    // marginHorizontal:"auto",
    backgroundColor: "#535375",
    padding: 15,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    heading:{
      // flex: 1,
    textAlign:'center',
    color: "white",
    fontSize: 40,
    fontWeight: 'bold',
  },
  subHeading:{
    color : "white",
    margin: 10,
    fontSize: 13,

  },
  p:{
    color: "white",
    marginTop: 0,
    textAlign: "center",
  }
  })


