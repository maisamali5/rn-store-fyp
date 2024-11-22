import React from 'react'
import { View , Text, StyleSheet, ImageBackground , TextInput, Button} from 'react-native'
import { Link } from 'expo-router'
import { Pressable } from 'react-native'

const login = () => {
  return (
    <View style={styles.container}>
        <Text style={{fontSize:'30px',fontWeight:'bold'}}>Login Form</Text>
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
      
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        // onChangeText={setConfirmPassword}
        // value={confirmPassword}
        placeholder="Confirm your password"
        secureTextEntry={true}
      />
      
       <Button title="Sign Up" /> 
       <Link href='/signup'>
        <Text style={styles.ancor}>Sign Up, dont have an account</Text>
       </Link>
    </View>
  )
}
export default login

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
    padding: 20,
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
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color:'black'
  },
  ancor:{
      fontSize:15,
      textDecorationLine: 'underline',
      color:'black',
      margin: 'auto'
  }
});