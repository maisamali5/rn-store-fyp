import { ScrollView } from "react-native-gesture-handler";
import { Text, View, StyleSheet ,TextInput,Button} from "react-native-web"
import Icon from 'react-native-vector-icons/FontAwesome';

const AccountScreen = () => {
    return (
        <ScrollView style={styles.container}>         
          <View style={styles.User}>
              <Icon.Button
                    name="user"
                    backgroundColor="white"
                    color={"#535375"}
                    size={55}
                    borderRadius={80}
                    style={{
                    left: "22.5%",
                    alignItems:"center",
                    width: 100,
                    height: 100,
                    }}
                    // onPress={}
                    ></Icon.Button>
                <Text style={styles.text}>Hi User Name</Text>
                <br />
                <br />

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
                        <br />
                      <View style={styles.btn}>
                        <Button style={{borderRadius: 15,borderWidth: 1,}} title="Save"/>
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
      backgroundColor: '#535375',
    },
      text: {
      // backgroundColor: 'transparent',
      fontSize: 25,
      color: '#fff',
      marginTop: 20,
    },
    User:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      top: "20%"
    },
    label: {
      // flex: 1,
      fontSize: 16,
      marginBottom: 5 ,
      color: 'white',
      fontWeight:'bold',
      // justifyContent:'left',
      // alignItems:'left',
      margin: 5,
      left: "0%",
    },
    btn:{
      margin: 12,
      width: 130,
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
      margin: 8,
    },
  });