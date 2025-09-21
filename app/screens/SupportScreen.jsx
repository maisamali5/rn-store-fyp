import { Text, View, StyleSheet, TextInput, Button, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from "../../constants/Colors";

const SupportScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.User}>
          <Text style={styles.heading}>Customer Support</Text>
      </View>

      <View style={styles.addBtnDiv}>
        <Icon.Button
          name="phone"
          backgroundColor="transparent"
          color={Colors.Theme.background}
          size={35}
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10
          }}
        // onPress={}
        ></Icon.Button>
        <Text style={{ fontWeight: "bold", color: Colors.Theme.background }}> </Text>
      </View>

      <View style={styles.tileBox}>
        <View>
          <Text style={styles.label}>Connect with support agent</Text>
        </View>
        <TextInput
          style={styles.input}
          // onChangeText={setEmail}
          // value={email}
          placeholder="     Send us Your query"
        />


      </View>

    </ScrollView>
  );
}
export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Theme.background,
  },
  addBtnDiv: {
    backgroundColor: Colors.Theme.white,
    width: 58,
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
    top: "50%",
    margin: 10
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
    margin: 8,
  }, 
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: Colors.Theme.white,
    fontWeight: 'bold',
    margin: 5,
    left: "0%",
  },
});