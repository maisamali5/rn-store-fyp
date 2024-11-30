import React from 'react'
import {View, Text, Link, StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import {Button} from 'react-bootstrap';


const Dashboard = () => {
  return (
    <View >
      <LinearGradient
        colors={['#004d7a', '#008793', '#00bf72']}
        style={styles.background}>
        <Text style={styles.text}>Dashboard user</Text>

        {/* <Link href={"/"} asChild>
          <Pressable >
          <Button variant="light">Light</Button>
          </Pressable>
        </Link>  */}
    
    <Button variant="primary">Primary</Button>
        

      </LinearGradient>
    </View>
    
  );
}
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'orange',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 25,
    color: '#fff',
    marginLeft: 5,
  },
});