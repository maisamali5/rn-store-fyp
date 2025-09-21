import { React, useState, useRef } from 'react'
import { ScrollView, View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Colors } from '../constants/Colors';
import { Col } from 'react-bootstrap';



const signUp = () => {
  const [name, setName] = useState(null);
  const [LName, setLName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);
  const navigation = useNavigation();
  const [permission, requestPermission] = useCameraPermissions("granted");
  const [cameraVisible, setCameraVisible] = useState(false);
  const [FaceImage, setImage] = useState(null);
  const cameraRef = useRef(null);
  const [confirmPassword, setConfirmPassword] = useState(null);


  // Take picture handler
  const takePicture = async () => {
    const photo = await cameraRef.current.takePictureAsync({});
    // Convert to base64
    setImage(photo.uri);
    setCameraVisible(false);
    console.log('Photo taken:', FaceImage);
  };
  // Open camera handler
  const openCamera = async () => {
    // await requestCameraPermission();
    // requestPermission();
    if (permission.status !== 'granted') {
      alert('Camera permission is required to take pictures');
      return;
    }
    setCameraVisible(true);
  };
  // Upload from gallery handler
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    console.log(result);
    console.log('Image selected:', FaceImage);
  };


  const handleRegister = async () => {
    try {
      // if (password != confirmPassword && password != null && confirmPassword != null) {
      //   Alert.alert("Password and Confirm Password do not match");
      //   return;
      // }
      // else {
      const response = await fetch('https://localhost:7062/api/Users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: name + " " + LName,
          Mail: email,
          password: password,
          PhoneNumber: phone,
          FaceEmbedding: FaceImage,
        }),
      });
      if (!response.ok) {
        throw new Error('Invalid email or password.');
      }
      const data = await response.json();
      console.log('Registration successful:', data);
      navigation.navigate('signin'); // Navigate to the login screen after successful registration
      alert('Registration Successful', 'You can now log in with your credentials.');
      // }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration Failed', error.message);
    }
  };

  return (
    <GestureHandlerRootView>
      {!cameraVisible && (<ScrollView style={{ backgroundColor: Colors.Theme.background }}>
        <View style={styles.container}>

          <View style={{ flex: 1, marginTop: 0, marginBottom: 0, alignItems: "center" }}>

            <Text style={styles.heading}>Sign Up Form</Text>

            <Text style={styles.label}>Enter your First Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
              placeholder="   First Name"
              required
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
            <TouchableOpacity style={styles.uploadBox} >
              <View style={styles.facial}>
                {/* Click to upload images */}
                <View style={styles.uploadOptions}>
                  <TouchableOpacity style={styles.button} onPress={openCamera}>
                    <Text style={styles.buttonText}>Take Photo</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={pickImage}>
                    <Text style={styles.buttonText}>Choose from Gallery</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            {FaceImage && (
              <Image type="hidden" source={{ uri: FaceImage }} style={styles.previewImage} />
            )}

            <View style={styles.btn}>
              {/* <Link href={"/App"}> */}
              <Button style={{ borderRadius: 15, borderWidth: 1 }} title='Sign Up' onPress={handleRegister} />
              {/* </Link> */}
            </View>
            <Link href='App'>
              <Text style={styles.ancor}>Login, already have account</Text>
            </Link>
          </View>
        </View>
      </ScrollView>)}
      {/* Camera view */}
      {cameraVisible && (

        <View style={styles.cameraContainer}>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setCameraVisible(!cameraVisible)}
          >
            <Icon name="close" size={20} color="white" />
          </TouchableOpacity>

          <CameraView
            style={styles.camera}
            facing={"front"}
            ref={cameraRef}
          >
            <View style={styles.cameraButtons}>
              <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
                <Text style={styles.captureButtonText}>Capture</Text>
              </TouchableOpacity>
            </View>
          </CameraView>
        </View>
      )}
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
    backgroundColor: Colors.Theme.background,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 25,
    color: Colors.Theme.white,
  },
  label: {
    fontSize: 12,
    marginBottom: 2,
    color: Colors.Theme.white,
    // fontWeight: 'bold',
    justifyContent: 'left',
    alignItems: 'left',
    margin: 3,
    letterSpacing: 1,
  },
  input: {
    height: 50,
    width: 350,
    borderColor: Colors.Theme.white,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: Colors.Theme.white,
    borderRadius: 15,
    margin: 5,
  },
  ancor: {
    fontSize: 15,
    textDecorationLine: 'underline',
    marginTop: 20,
    color: Colors.Theme.white,
  },
  btn: {
    margin: 10,
    width: 130,
  },
  facial: {
    margin: 8,
    backgroundColor: Colors.Theme.white,
    borderRadius: 15,
    padding: 10,
  },
  uploadBox: {
    backfaceVisibility: "hidden"
  },
  uploadOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  button: {
    backgroundColor: Colors.Theme.btnBg,
    padding: 5,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.Theme.white,
    textAlign: 'center',
  },
  cameraContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    backgroundColor: Colors.Theme.shadow,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cameraButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50,
  },
  captureButton: {
    backgroundColor: Colors.Theme.white,
    padding: 15,
    borderRadius: 50,
    marginHorizontal: 20,
  },
  captureButtonText: {
    color: Colors.Theme.text,
  },
  closeButton: {
    backgroundColor: Colors.Theme.expense,
    padding: 15,
    borderRadius: 100,
    marginHorizontal: 20,
    position: 'absolute',
    top: 10,
    right: -10,
    zIndex: 200,
  },
  closeButtonText: {
    color: Colors.Theme.white,
  },
  previewImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginVertical: 10,
    // type: 'hidden',
  },
});