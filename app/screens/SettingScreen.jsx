import { Text, View, StyleSheet } from "react-native-web"

const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard</Text>
        </View>
    )
} 
export default SettingScreen;

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
