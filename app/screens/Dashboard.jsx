import { ScrollView } from "react-native-gesture-handler";
import { Text, View, StyleSheet, Button } from "react-native-web"
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from "react";
import { navigate } from "expo-router/build/global-state/routing";

const Dashboard = () => {

  const [user, setUser] = useState(null);

useEffect(() => {
  // const loadUser = async () => {
  //   const userData = await AsyncStorage.getItem('userData');
  //   console.log('userData is', userData);
  //   if (userData) setUser(JSON.parse(userData));
  // };
  // loadUser();
  // console.log(user);
}, []);

  return (
        <ScrollView style={styles.container}>
          <View style={{backgroundColor: "#535375", height: 100, flexDirection: "row"}}>
            <Text style={styles.textUser}>Hi 'Ali Khan'</Text>
            <Icon.Button
                                  name="user-circle"
                                  backgroundColor="none"
                                  color={"white"}
                                  size={52}
                                  style={{
                                    width: 150,
                                    top:"10%",
                                    left:"25%",
                                    marginLeft:65,
                                    position: 'relative',
                                  // alignItems:"center",
                                  // width: 220,
                                  }}
                                  // onPress={}
                                ></Icon.Button>
          </View>
          
          <View style={{flex: 1, padding: 20}}>
          {/* <br />
          <br /> */}
            <View style={styles.tileBox}>
              <View style={styles.tile}>
              <LinearGradient
        colors={['#eeaeca', '#94bbe9']}
        style={styles.b1}
        >
                                <Icon.Button
                                  name="history"
                                  backgroundColor="none"
                                  color={"#535375"}
                                  size={52}
                                  style={{
                                    margin:18,
                                  // alignItems:"center",
                                  // width: 220,
                                  }}
                                  // onPress={}
                                ></Icon.Button>
                  </LinearGradient>
                  <Text style={styles.tileText}>Purchase History</Text>
                  
              </View>
            </View>
            <View style={styles.tileBox}>
              <View style={styles.tile}>
                  <LinearGradient
        colors={['#22c1c3', '#fdbb2d']}
        style={styles.b1}>
                  <Icon.Button
                                  name="user-circle"
                                  backgroundColor="none"
                                  color={"#535375"}
                                  size={54}
                                  style={{
                                    margin:12,
                                  // alignItems:"center",
                                  // width: 220,
                                  }}
                                  // onPress={}
                                ></Icon.Button>
                  </LinearGradient>
                  <Text style={styles.tileText}>Account<br />Details</Text>
               
              </View>
            </View>
            <View style={styles.tileBox}>
              <View style={styles.tile}>
              <LinearGradient colors={['#D16BA5', '#86A8E7']} style={styles.b1}>
                  <Icon.Button
                                  name="shopping-cart"
                                  backgroundColor="none"
                                  color={"#535375"}
                                  size={54}
                                  style={{
                                    margin:12,
                                  // alignItems:"center",
                                  // width: 220,
                                  }}
                                  // onPress={}
                  ></Icon.Button>
                  </LinearGradient>
                  <Text style={styles.tileText}>Cart<br />Information</Text>
                  
              </View>
            </View>
            <View style={styles.tileBox}>
              <View style={styles.tile}>
                  <LinearGradient
        colors={['#fe6a81','#CE9210']}
        style={styles.b1}
        >
                  <Icon.Button
                                  name="pencil-square"
                                  backgroundColor="none"
                                  color={"#535375"}
                                  size={55}
                                  style={{
                                    margin:17,
                                  // alignItems:"center",
                                  // width: 220,
                                  }}
                                  // onPress={}
                                ></Icon.Button>
                  </LinearGradient>
                  <Text style={styles.tileText}>Our<br />Policies</Text>
              </View>
            </View>

          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}> 
          <Button  
            onPress={() => {
            navigation.navigate('/signin');
            }}
            title="Logout 📌"
            color="red"
          />
          </View>
        </ScrollView>
    )
} 
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#535375',
    // width: '100%',

  },
  btnLogout: {
     padding: 0,
      borderRadius: 10,
       borderWidth: 1, 
       borderColor: 'white',
        backgroundColor: '#535375' ,
         width: 50,
          margin: 20,
  justifyContent: 'center',
  alignItems: 'center',
  },
    text: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 25,
    left: "5%",
    color: 'white',
  },
  textUser: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 25,
    left: "5%",
    color: 'white',
    top: "5%",
  },
  tileBox:{
    flex: 1,
    backgroundColor: "white",
    marginBottom: 25,
  },
  tile:{
    flexDirection: "row",
    height: 100, 
  },
  b1:{
    width: 100,
  },
  tileText: {
    margin: 8,
    fontSize: 24,
    // fontFamily:  "sigmar-sans",
    fontWeight: "bold",
    color: "#535375"
  },
});

