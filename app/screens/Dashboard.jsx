import { ScrollView } from "react-native-gesture-handler";
import { Text, View, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from "../../constants/Colors";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { TouchableOpacity } from "react-native";

const Dashboard = () => {
  const [username, setUsername] = useState("user");
  // const router = useRouter();

  const getUserData = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        console.log(value);
        setUsername(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getUserData();
  }, [])


  return (
    <ScrollView style={styles.container}>
      <View style={{ backgroundColor: Colors.Theme.background, height: 100, justifyContent: "space-between", flexDirection: "row", width: "100%" }}>
        <Text style={styles.textUser}>Hi {username}</Text>
        <Icon
          name="user-circle"
          backgroundColor="none"
          color={Colors.Theme.white}
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

          {/* Virtual cart */}
        <TouchableOpacity style={styles.tileBox} onPress={() => router.push('/CartList')}>
          <View style={styles.tile}>
            <LinearGradient
              colors={['#eeaeca', '#94bbe9']}
              style={styles.b1}
            >
              <Icon.Button
                name="shopping-cart"
                backgroundColor="none"
                color={Colors.Theme.background}
                size={52}
                style={{
                  margin: 18,
                  width: '100%',
                }}
              // onPress={}
              ></Icon.Button>
            </LinearGradient>
            <Text style={styles.tileText}>Cart Information</Text>

          </View>
        </TouchableOpacity>

        <View style={styles.tileBox}>
          <View style={styles.tile}>
            <LinearGradient
              colors={['#22c1c3', '#fdbb2d']}
              style={styles.b1}>
              <Icon.Button
                name="user-circle"
                backgroundColor="none"
                color={Colors.Theme.background}
                size={54}
                style={{
                  margin: 12,
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
                name="history"
                backgroundColor="none"
                color={Colors.Theme.background}
                size={54}
                style={{
                  margin: 12,
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
              colors={['#fe6a81', '#CE9210']}
              style={styles.b1}
            >
              <Icon.Button
                name="pencil-square"
                backgroundColor="none"
                color={Colors.Theme.background}
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
          {/* <Text>Logout 📌</Text> */}
          <Text>Logout </Text>
        </Link>
      </View>
    </ScrollView>
  )
}
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Theme.background,
  },
  btnLogout: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 0,
    borderColor: Colors.Theme.white,
    backgroundColor: Colors.Theme.expense,
    width: 100,
    color: Colors.Theme.white,
    textAlign: 'center',
    fontSize: 18,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 25,
    left: "5%",
    color: Colors.Theme.white,
  },
  textUser: {
    fontSize: 23,
    fontWeight: "bold",
    margin: 25,
    left: "5%",
    color: Colors.Theme.white,
    top: "5%",
    paddinglef: 0,
    textAlign: "center",
  },
  tileBox: {
    flex: 1,
    backgroundColor: Colors.Theme.white,
    marginBottom: 25,
  },
  tile: {
    flexDirection: "row",
    height: 100,
  },
  b1: {
    width: 100,
  },

  tileText: {
    margin: 8,
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.Theme.background,
    marginTop: 30,
  },
});

