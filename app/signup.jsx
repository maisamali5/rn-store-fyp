import React from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'
import { Link, useNavigation } from '@react-navigation/native'


const signUp = () => {
    const navigation = useNavigation();
    const handlePress = () => {
      navigation.navigate('Tabs');   
    };
    
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Sign Up Form</Text>
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
      
       <Button title="Sign Up" onPress={handlePress} />
       {/* <Link href='/'> */}
        <Text style={styles.ancor}>Login, already have account</Text>
       {/* </Link> */}
    
    </View>
  )
}
export default signUp

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    heading:{
      fontSize: 30,
      fontWeight: 'bold',
      marginTop:0,
      marginBottom: 50,
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
    },
    ancor:{
        fontSize:15,
        textDecorationLine: 'underline',
        marginTop: 20,
        color:'black',
    }
  });