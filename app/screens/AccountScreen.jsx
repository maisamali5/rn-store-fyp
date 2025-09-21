import { ScrollView } from "react-native";
import { Text, View, StyleSheet, TextInput, Button } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from "../../constants/Colors";

const AccountScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.User}>
        <Icon.Button
          name="user"
          backgroundColor="white"
          color={Colors.Theme.background}
          size={55}
          borderRadius={80}
          style={{
            left: "22.5%",
            alignItems: "center",
            width: 100,
            height: 100,
          }}
        // onPress={}
        ></Icon.Button>
        <Text style={styles.text}>Hi User Name</Text>

        {/* <Text style={styles.label}>Enter your First Name</Text> */}
        <TextInput
          style={styles.input}
          // onChangeText={setEmail}
          // value={email}
          placeholder="   First Name"
        />

        {/* <Text style={styles.label}>Enter your Last Name</Text> */}
        <TextInput
          style={styles.input}
          // onChangeText={setEmail}
          // value={email}
          placeholder="   Last Name"
        />

        {/* <Text style={styles.label}>Enter your Email</Text> */}
        <TextInput
          style={styles.input}
          // onChangeText={setEmail}
          // value={email}
          placeholder="   Email"
        />

        {/* <Text style={styles.label}>Enter your Password</Text> */}
        <TextInput
          style={styles.input}
          // onChangeText={setPassword}
          // value={password}
          placeholder="   Password"
          secureTextEntry={true}
        />

        {/* <Text style={styles.label}>Confirm your Password</Text> */}
        <TextInput
          style={styles.input}
          // onChangeText={setConfirmPassword}
          // value={confirmPassword}
          placeholder="   Confirm Password"
          secureTextEntry={true}
        />
        <View style={styles.btn}>
          <Button style={{ borderRadius: 15, borderWidth: 1, }} title="Save" />
        </View>

      </View>
    </ScrollView>
  );
}
export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Colors.Theme.background,
  },
  text: {
    // backgroundColor: 'transparent',
    fontSize: 25,
    color: Colors.Theme.white,
    marginTop: 20,
  },
  User: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: "15%"
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: Colors.Theme.white,
    fontWeight: 'bold',
    margin: 5,
    left: "0%",
  },
  btn: {
    margin: 12,
    width: 130,
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
});