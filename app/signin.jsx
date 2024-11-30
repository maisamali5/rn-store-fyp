import React from 'react'
import { View , Text, StyleSheet , TextInput, Button} from 'react-native'
import { Link } from 'expo-router'

const signin = () => {
  return (
    <View style={styles.container}>
        {/* <View style={styles.container}>
        <Image
        source={img}
        style={styles.img}
        resizeMode='contain'
        ></Image>
        </View> */}

      <Text style={styles.heading}>Sign In Form</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        // onChangeText={setEmail}
        // value={email}
        placeholder="Enter your email"
      />
      
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        // onChangeText={setPassword}
        // value={password}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      
       <Button title="Sign In" /> 

       <Link href='/signUp' style={styles.ancor}>
        <Text style={styles.ancor}>Sign Up, dont have an account</Text>
       </Link>

    </View>
  )
}
export default signin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
  },
  heading:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 0,
  },
  label: {
    fontSize: 16,
    marginBottom: 5 ,
    color: '#3498db',
    fontWeight:'bold',
    justifyContent:'left',
    alignItems:'left',
  },
  input: {
    height: 40,
    width: 350,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color:'black'
  },
  iconBox:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    maxWidthwidth: 100,
    maxHeight: 'auto'
  }, 
   img:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    maxWidthidth: 130,
    maxHeight:130,
    position:'absolute',
    top:0,
    right: 0,
    left:-220,
    bottom:0,
  },
  ancor:{
    marginTop:30,  
    fontSize:15,
      textDecorationLine: 'underline',
      color:'black',
  }
});