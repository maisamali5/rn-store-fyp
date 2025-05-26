import React from 'react'
import {ScrollView,View , Text, TextInput, Button, StyleSheet } from 'react-native'
import { useNavigation} from '@react-navigation/native';
import { Link } from 'expo-router';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Camera } from 'expo-camera';


const signUp = () => {
    const [name, setName] = useState(null);
    const [LName, setLName] = useState(null);
    const [email, setEmail]= useState(null);
    const [password, setPassword ]=useState(null);
    const [confirmPassword, setConfirmPassword ]=useState(null);
    const [image1, setImage1] = useState(null); 
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [phone, setPhone ]= useState(null);

    const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      console.log('Camera permission status:', hasPermission);
    })();
  }, []);

  //   const handleTakePicture = async () => {
  //   if (cameraRef) {
  //     const photo = await cameraRef.takePictureAsync();
  //     setCapturedImage(photo.uri);
  //     // Upload to backend for verification
  //   }
  // };

  // if (hasPermission === false) {
  //   return (
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#535375' }}>  
  //   <Text style={{color: 'white', fontSize: 20}}>OOPS, No camera access!</Text> 
  //   </View> 
  // );}

  const handleRegister = async () => {
    try {
      if(password !== confirmPassword && password !== null && confirmPassword !== null){
        Alert.alert("Password and Confirm Password do not match");
        return;
      }
      else{
      const response = await fetch('https://localhost:7062/api/Users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: name+" "+LName,
          // lastName: LName,
          Mail: email,
          password: password,        
          PhoneNumber: phone,
          // confirmPassword: confirmPassword,
        }),
      });
      if (!response.ok) {
        throw new Error('Invalid email or password.');
      }
      const data = await response.json();
      console.log('Registration successful:', data);
      navigation.navigate('App');
      Alert.alert('Registration Successful', 'You can now log in with your credentials.');
    }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration Failed', error.message);
    }
  };

    const handleNavigate = () => {
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
        onChangeText={setName}
        value={name}
        placeholder="   First Name"
      />

      <Text style={styles.label}>Enter your Last Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setLName}
        value={LName}
        placeholder="   Last Name"
      />

      <Text style={styles.label}>Enter your Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="   Email"
      />
      
      <Text style={styles.label}>Enter your Phone#</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPhone}
        value={phone}
        placeholder="   Enter Phone Number"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Enter your Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="   Password"
        secureTextEntry={true}
      />
      
      <Text style={styles.label}>Confirm your Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
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
              // onPress={handleTakePicture}
            >
              Click to upload images
            </Icon.Button> 
 
        </View>
      </View>
     
      <View style={styles.btn}>
        {/* <Link href={"/App"}> */}
       <Button style={{borderRadius: 15,borderWidth: 1}} title='Sign Up' onPress={handleRegister} />
       {/* </Link> */}
       </View> 
       <Link href='App'>
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
      marginBottom: 25,
      color: "white",
    },
    label: {
      fontSize: 16,
      marginBottom: 3 ,
      color: 'white',
      fontWeight:'bold',
      justifyContent:'left',
      alignItems:'left',
      margin: 3,
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
      margin: 5,
    },
    ancor:{      
      fontSize:15,
      textDecorationLine: 'underline',
      marginTop: 20,
      color:'white',
    },
    btn:{
      margin: 10,
      width: 130,
    },
    facial:{
      margin: 8,
    },
    uploadBox:{
      backfaceVisibility: "hidden"    
    }
  });