import React from 'react'
import { View , Text, StyleSheet , TextInput, Button} from 'react-native'
import { Link } from 'expo-router'

const signin = () => {
  return (
    <View style={styles.container}>

      <View style={{flex:1, alignItems: "center", margin: 15}}>
      <Text style={styles.heading}>Sign In Form</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        // onChangeText={setEmail}
        // value={email}
        placeholder="   Enter your email"
      />
      
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        // onChangeText={setPassword}
        // value={password}
        placeholder="   Enter your password"
        secureTextEntry={true}
      />
      
      <View style={{margin: 15}}>
       <Button title="Sign In" /> 
       </View>

       <Link href='/signup' style={styles.ancor}>
        <Text style={styles.ancor }>Forgot your Password?</Text>
       </Link>

       <View style={styles.container}>
        <Text style={styles.label}>or Login With</Text>

        <Link href='/signup' style={styles.button}>
        <Text style={{color: "white",fontSize: 20}}>Login With Facebook</Text>
       </Link>

       <Link href='/signup'  style={styles.button} >
        <Text style={{color: "white",fontSize: 20}}>Login With Google</Text>
       </Link>
      </View>

       </View>
       <Link href='/signup' style={styles.ancor}>
        <Text style={styles.ancor}>Dont have an Account? Sign Up</Text>
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
    backgroundColor: '#535375',
  },
  heading:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 0,
    color: "white",
  },
  label: {
    fontSize: 16,
    margin: 5,
    color: 'white',
    fontWeight:'bold',
    justifyContent:'left',
    alignItems:'left',
  },  
  button: {  
    width: 350,  
    margin: 10,
    marginHorizontal:"auto",
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
  },
  input: {
    height: 40,
    width: 350,
    borderColor: 'white',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    color:'black',
    borderRadius: 20,
    backgroundColor: "white",
  },
  ancor:{
    margin:10,  
    fontSize:15,
      textDecorationLine: 'underline',
      color:'white',
  }
});