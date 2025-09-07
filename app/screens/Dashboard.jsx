import { ScrollView } from "react-native-gesture-handler";
import { Text, View, StyleSheet, Button } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from "react";
// import AsyncStorage from '@react-native-async-storage/async-storage';

import { navigate } from "expo-router/build/global-state/routing";
import { Link } from "expo-router";


const Dashboard = () => {

  const [user, setUser] = useState({});

  useEffect(() => {
    // const userData = localStorage.getItem('userData');
    // setUser(userData ? JSON.parse(userData) : {});
    // console.log('users name is:', user);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={{ backgroundColor: "#535375", height: 100, justifyContent: "space-between", flexDirection: "row", width: "100%" }}>
        <Text style={styles.textUser}>Hi "{user.name}"</Text>
        <Icon
          name="user-circle"
          backgroundColor="none"
          color={"white"}
          size={60}
          style={{
            width: 100,
            position: 'absolute',
            top: 22,
            right: '0%',
          }}
        // onPress={}
        ></Icon>
      </View>

      <View style={{ flex: 1, padding: 20 }}>

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
                  margin: 18,
                  // alignItems:"center",
                  width: '100%',
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
                  margin: 12,
                  // alignItems:"center",
                  width: '100%',
                }}
              // onPress={}
              ></Icon.Button>
            </LinearGradient>
            <Text style={styles.tileText}>Account Details</Text>

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
                  margin: 12,
                  // alignItems:"center",
                  width: '100%',
                }}
              // onPress={}
              ></Icon.Button>
            </LinearGradient>
            <Text style={styles.tileText}>Cart Information</Text>

          </View>
        </View>
        <View style={styles.tileBox}>
          <View style={styles.tile}>
            <LinearGradient
              colors={['#fe6a81', '#CE9210']}
              style={styles.b1}
            >
              <Icon.Button
                name="pencil-square"
                backgroundColor="none"
                color={"#535375"}
                size={55}
                style={{
                  margin: 17,
                  // alignItems:"center",
                  width: 220,
                }}
              // onPress={}
              ></Icon.Button>
            </LinearGradient>
            <Text style={styles.tileText}>Our Policies</Text>
          </View>
        </View>

      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Link href={'/signin'} style={styles.btnLogout}>
          <Text>Logout 📌</Text>
        </Link>
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
    padding: 8,
    borderRadius: 8,
    borderWidth: 0,
    borderColor: 'white',
    backgroundColor: 'red',
    width: 100,
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 25,
    left: "5%",
    color: 'white',
  },
  textUser: {
    fontSize: 23,
    fontWeight: "bold",
    margin: 25,
    left: "5%",
    color: 'white',
    top: "5%",
    paddinglef: 0,
    textAlign: "center",
  },
  tileBox: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 25,
    // width: "100%",
  },
  tile: {
    flexDirection: "row",
    height: 100,
    // width: "100%",
  },
  b1: {
    width: 100,
  },

  tileText: {
    margin: 8,
    fontSize: 24,
    // fontFamily:  "sigmar-sans",
    fontWeight: "bold",
    color: "#535375",
    marginTop: 30,
  },
});

