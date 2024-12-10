import React, { useState } from 'react'
import {View, Text, Link, StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import {Button} from 'react-bootstrap';
import { useEffect, FlatList } from 'react';


const Dashboard = () => {
  const Api_url = 'http://localhost:3000/posts';
  const [fetchData , setFetchData] = useState([]);
  const [fetchError,setFetchError] = ("");

  useEffect(() => {
    const fetchData =async () => {
        try{
            const resp = await fetch(Api_url);
            if(!resp.ok) throw err('Did not receive data');
            const data = await resp.json();
            setFetchData(data);
            console.log(data);
            setFetchError(null);
            console.log(data);
        }catch(err){
            setFetchError(err.message);
        }
    }
    (async()=> await fetchData());
  },[])

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
    
    <Button variant="primary" href='/explore'>Primary</Button>
      {fetchError ? 
      <Text>{fetchError}</Text>: <Text>Data received: </Text>}

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