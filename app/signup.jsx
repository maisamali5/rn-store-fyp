import React from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'
import { useNavigation} from '@react-navigation/native';
import { Link } from 'expo-router';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const signUp = () => {
    const navigation = useNavigation();

    const handlePress = () => {
      navigation.navigate('App');   
    };
    
  return (
    <GestureHandlerRootView>
    <View style={styles.container}>

      <View style={{flex:1, marginTop: 0, marginBottom: 0, alignItems:"center"}}>

        <Text style={styles.heading}>Sign Up Form</Text> 
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
      
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        // onChangeText={setConfirmPassword}
        // value={confirmPassword}
        placeholder="   Confirm your password"
        secureTextEntry={true}
      />
     
      <View style={{margin:15}}>
       <Button style={styles.btn} title="Sign Up" onPress={handlePress}/>
       </View> 
       <Link href='~/Dashboard'>
        <Text style={styles.ancor}>Login, already have account</Text>
       </Link>
       </View>
    </View>
    </GestureHandlerRootView>
  )
}
export default signUp

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#535375',
    }, 
    heading:{
      fontSize: 25,
      fontWeight: 'bold',
      marginTop:0,
      marginBottom: 50,
      color: "white",
    },
    label: {
      fontSize: 16,
      marginBottom: 5 ,
      color: 'white',
      fontWeight:'bold',
      justifyContent:'left',
      alignItems:'left',
      margin: 5,
    },
    input: {
      height: 40,
      width: 350,
      borderColor: 'white',
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
      backgroundColor: "white",
      borderRadius: 20,
      margin: 8,
    },
    ancor:{      
      fontSize:15,
      textDecorationLine: 'underline',
      marginTop: 20,
      color:'white',
    },
    btn:{
      backgroundColor:'#79c8ef',
      color: "#79c8ef",
    }
  });