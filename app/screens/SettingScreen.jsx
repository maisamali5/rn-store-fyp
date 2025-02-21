import { ScrollView } from "react-native-gesture-handler";
import { Text, View, StyleSheet } from "react-native-web"

const SettingScreen = () => {
    return (
        <ScrollView style={styles.container}>
          <Text style={styles.text}>Hi "User"</Text>
          <View style={{flex: 1}}>
          <br />
            <View>
                <Text>Purchase History</Text>
            </View>

          </View>
        </ScrollView>
    )
} 
export default SettingScreen;

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
    // color: '#fff',
    // marginLeft: 5,
  },
  tile:{
    flex: 1,
    backgroundColor: "yellow",
    width :300,
    height: 90,
  }
});
