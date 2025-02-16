import { View , Text , StyleSheet} from "react-native-web";

const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Account Settings</Text>
        </View>
    )
}
export default AccountScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#535375',
    },
      text: {
      // backgroundColor: 'transparent',
      fontSize: 25,
      // color: '#fff',
      // marginLeft: 5,
    },
  });