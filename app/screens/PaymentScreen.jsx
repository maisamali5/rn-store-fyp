import { Text, View, StyleSheet, TextInput, Button, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from "../../constants/Colors";

const PaymentScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.User}>
        <View style={styles.addBtn}>
          <Text style={styles.heading}>Payment Methods</Text>
        </View>
      </View>

      <View style={styles.addBtnDiv}>
        <Icon.Button
          name="plus"
          backgroundColor="transparent"
          color={Colors.Theme.background}
          size={22}
          style={{
            alignItems: "center",
          }}
        // onPress={}
        ></Icon.Button>
        <Text style={{ fontWeight: "bold", color: Colors.Theme.background }}>Add Payment Method </Text>
      </View>

      <View style={styles.tileBox}>
        <Text style={{ color: Colors.Theme.white, fontSize: 20, fontWeight: "bold" }}>Existing Payment methods</Text>

        <View style={styles.tile}>
          <Text style={styles.tileText}>Method 1</Text>
          <Text></Text>
        </View>

        <View style={styles.tile}>
          <Text style={styles.tileText}>Method 2</Text>
        </View>


      </View>

    </ScrollView>
  );
}
export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Theme.background,
  },
  addBtnDiv: {
    backgroundColor: Colors.Theme.white,
    width: 200,
    gap: 0,
    borderRadius: 11,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    color: Colors.Theme.white,
    marginLeft: 30,
    marginTop: 30,
  },
  tileBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,

  },
  tileText: {
    fontWeight: "bold",
    color: Colors.Theme.background,
    fontSize: 22,
    marginLeft: 10,
  },
  tile: {
    backgroundColor: Colors.Theme.white,
    justifyContent: "center",
    width: 360,
    height: 80,
    margin: 10,
    borderRadius: 7,
  },
  User: {
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    margin: 12,
    width: 130,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.Theme.white,
    top: "50%"
  }
});