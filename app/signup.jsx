import React from 'react'
import {ScrollView,View , Text, TextInput, Button, StyleSheet} from 'react-native'
import { useNavigation} from '@react-navigation/native';
import { Link } from 'expo-router';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
// import uploadIcon from "./assets/images/uploadIcon";

const signUp = () => {
    const navigation = useNavigation();

    const handlePress = () => {
      navigation.navigate('App');   
    };
    
  return (
    <GestureHandlerRootView>
<ScrollView style={{backgroundColor:'#535375'}}>
    <View style={styles.container}>

      <View style={{flex:1, marginTop: 0, marginBottom: 0, alignItems:"center"}}>

      <Text style={styles.heading}>Sign Up Form</Text> 
      
      
      <Text style={styles.label}>Enter your First Name</Text>
      <TextInput
        style={styles.input}
        // onChangeText={setEmail}
        // value={email}
        placeholder="   First Name"
      />

<Text style={styles.label}>Enter your Last Name</Text>
      <TextInput
        style={styles.input}
        // onChangeText={setEmail}
        // value={email}
        placeholder="   Last Name"
      />

      <Text style={styles.label}>Enter your Email</Text>
      <TextInput
        style={styles.input}
        // onChangeText={setEmail}
        // value={email}
        placeholder="   Email"
      />
      
      <Text style={styles.label}>Enter your Password</Text>
      <TextInput
        style={styles.input}
        // onChangeText={setPassword}
        // value={password}
        placeholder="   Password"
        secureTextEntry={true}
      />
      
      <Text style={styles.label}>Confirm your Password</Text>
      <TextInput
        style={styles.input}
        // onChangeText={setConfirmPassword}
        // value={confirmPassword}
        placeholder="   Confirm Password"
        secureTextEntry={true}
      />

      <Text style={styles.label}>Upload Your face Images</Text>
      <View style={styles.uploadBox}>
        <View style={styles.facial}>

            <Icon.Button
              name="upload"
              backgroundColor="white"
              color={"#3498db"}
              size={30}
              style={{
                marginLeft:10,
              alignItems:"center",
              width: 220,
              height: 80}}
              borderRadius={15}
              // onPress={}
            >
              Click to upload images
            </Icon.Button> 
 
        </View>
      </View>
     
      <View style={styles.btn}>
       <Button style={{borderRadius: 15,borderWidth: 1,}} title="Sign Up" onPress={handlePress}/>
       </View> 
       <Link href='~/Dashboard'>
        <Text style={styles.ancor}>Login, already have account</Text>
       </Link>
       </View>
    </View>
    </ScrollView>
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
      height: 50,
      width: 350,
      borderColor: 'white',
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
      backgroundColor: "white",
      borderRadius: 15,
      margin: 8,
    },
    ancor:{      
      fontSize:15,
      textDecorationLine: 'underline',
      marginTop: 20,
      color:'white',
    },
    btn:{
      margin: 12,
      width: 130,
    },
    facial:{
      margin: 10,
    },
    uploadBox:{
      backfaceVisibility: "hidden"    
    }
  });