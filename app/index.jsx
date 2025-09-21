import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../constants/Colors';
// import { UserContext } from '../context/userContext';


export default function HomeScreen() {
  return (
    // <UserContext>
      <View style={styles.container} >
        <View style={styles.container }>
          <Icon.Button
          name="shopping-basket"
          backgroundColor="transparent"
          color={Colors.white}
          size={110}
          style={{
            marginTop: 120
          }}
        ></Icon.Button>

          <Text style={styles.heading}>Cashierless Store</Text>
          <Text style={styles.subHeading}>HASSLE FREE SHOPPING</Text>
        </View>

        <View>
          <Text style={styles.text}>Discover the best products with queue less, convenient and fast checkout</Text>
        </View>

        <Link href={"/signin"} style={styles.button} >
          <Text style={styles.buttonText}>Log In</Text>
        </Link>

        <Link href={"/signup"} style={styles.btn2} >
          <Text style={styles.buttonText}>Create an Account</Text>
        </Link>
      </View>
    // </UserContext>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: "#535375"
//   },
//   button: {
//     marginBottom: 30,
//     width: 340,
//     backgroundColor: '#3498db',
//     padding: 15,
//     borderRadius: 25,
//     textAlign: "center",
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   btn2: {
//     marginBottom: 30,
//     width: 340,
//     backgroundColor: "#535375",
//     padding: 15,
//     borderWidth: 1,
//     borderColor: "white",
//     borderRadius: 25,
//     textAlign: "center",
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: Colors.Theme.white,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   background: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   heading: {
//     textAlign: 'center',
//     color: Colors.Theme.white,
//     fontSize: 40,
//     fontWeight: 'bold',
//   },
//   subHeading: {
//     color: Colors.Theme.white,
//     margin: 10,
//     fontSize: 13,
//   },
//   text: {
//     color: Colors.Theme.white,
//     marginTop: 0,
//     textAlign: "center",
//   }
// })
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#4a4e91", // better contrast tone
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  heading: {
    textAlign: 'center',
    color: "#fff",
    fontSize: 38,
    fontWeight: '800',
    marginTop: 0,
    letterSpacing: 1,
  },
  subHeading: {
    color: "#dcdcdc",
    marginTop: 5,
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  text: {
    color: "#f1f1f1",
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 22,
    opacity: 0.9,
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 40,
    width: "100%",
    backgroundColor: '#3498db',
    paddingVertical: 16,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    textAlign: "center",
  },
  btn2: {
    marginTop: 15,
    width: "100%",
    backgroundColor: "transparent",
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 30,
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  iconWrapper: {
    alignItems: "center",
    marginBottom: 15,
  },
});

