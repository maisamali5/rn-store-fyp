import { useState } from 'react'
import {ScrollView, View , Text, StyleSheet , TextInput, Button} from 'react-native'
import { Link } from 'expo-router'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { useNavigation} from '@react-navigation/native';


const signin = () => {
    const [email, setEmail]= useState(null);
    const [password, setPassword ]= useState(null);
    // const [user, setUser] = useState(null);

  const navigation = useNavigation();




 const handleLogIn = async () =>{
    try {
      const response = await fetch('https://localhost:7062/api/Auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
           'Accept': 'application/json'
        },
        body: JSON.stringify({
          username: email, // Adjust based on your API's expected field
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error('Invalid email or password.');
      }
      const data = await response.json();
      const { token, refreshToken, user } = data;
      // setUser(user); 
      localStorage.setItem('userName', JSON.stringify(user.name));

  navigation.navigate('App');
// };
      
    } catch (error) {
      console.error('Login error:', error);
      alert('login Failed', error.message);
    }
  };


  return (
    <ScrollView style={{backgroundColor:'#535375'}}>
    <View style={styles.container}>

      <View style={{flex:1, alignItems: "center", margin: 15}}>
      <Text style={styles.heading}>Sign In Form</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="   Enter your email"
      />
      
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="   Enter your password"
        secureTextEntry={true}
      />
      
      <View style={{margin: 15, width: 120}}>
       <Button title="Sign In" onPress={handleLogIn} /> 
       </View>

       <Link href='' style={styles.ancor}>
        <Text style={styles.ancor }> Forgot your Password? </Text>
       </Link>

       <View style={styles.container}>
        <Text style={styles.label}>or Login With</Text>

        <Link href={""} style={styles.facebook}>
        <Icon.Button
                    name="facebook"
                    backgroundColor="transparent"
                    color={"white"}
                    size={20}
        ></Icon.Button>
        <Text style={{color: "white",fontSize: 15}}>Login With Facebook</Text>
       </Link>

       <Link href={""} style={styles.google} >
        <Icon.Button
                    name="google"
                    backgroundColor="transparent"
                    color={"white"}
                    size={20}
        ></Icon.Button>
     <Text style={{color: "white",fontSize: 15}}>Login With Google</Text>
       </Link>
      </View>

       </View>
       <Link href={"/signup"} style={styles.ancor}>
        <Text style={styles.ancor}>Dont have an Account? Sign Up</Text>
       </Link>

    </View>
  </ScrollView>  
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
    marginBottom: 30,
    marginTop: 0,
    color: "white",
  },
  label: {
    fontSize: 18,
    margin: 5,
    color: 'white',
    fontWeight:'bold',
    justifyContent:'left',
    alignItems:'left',
  },  
  facebook: {  
    width: 350,  
    margin: 15,
    marginHorizontal:"auto",
    backgroundColor: '#2196f3',
    padding: 9,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    fontWeight: "bold"
  },  
  google: {  
    width: 350,  
    margin: 15,
    marginHorizontal:"auto",
    backgroundColor: '#d73131',
    padding: 9,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    fontWeight: "bold"
  },
  input: {
    height: 50,
    width: 360,
    borderColor: 'white',
    borderWidth: 1,
    margin: 13,
    padding: 10,
    color:'black',
    borderRadius: 15,
    backgroundColor: "white",
  },
  ancor:{
    marginBottom:50,  
    fontSize:15,
      textDecorationLine: 'underline',
      color:'white',
  }
});