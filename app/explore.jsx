import React, { useState, useEffect ,Link} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Button, Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { TextInput } from 'react-native-gesture-handler';

const explore = () => {
  const API_URL =  'http://localhost:3000/posts';
  const [postData, setPostData] = useState([]);
  const [formData, setFormData] = useState("");
  const [maxId ,setMaxId] = useState(null);

  useEffect(() => {

     fetch(API_URL)
      .then(response => response.json())
      .then(data => setPostData(data))
      .catch(error => console.error('Error fetching data:', error));
      console.log(postData);
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text style={{color: 'black', fontSize:20}}>{item.id} {item.title}</Text>
      {setMaxId(item.id)}
    </View>
  );

  const handleFormInsert = () => {
      const setData ={
        title: formData,
        id : maxId 
      };
      fetch(API_URL,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(setData),
      })
      .then(response => response.json())
      .then(data => {console.log('post request successful',data);})
      .catch(error => {
        console.error('Error making post request'); 
      })
  }

  return (
   
    <View style={styles.container}>
      <View>
      <Text style={{textAlign: 'center', fontSize:25, fontWeight:'bold'}}
      >Data Received by Api</Text>
      <FlatList
        data={postData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      </View>
      <View style = {{justifyContent: 'center', alignItems: 'center',marginTop: 50}}>
        <Text style={{fontSize: 18}}>Enter Car Name:</Text>
        <TextInput 
        style={styles.input}
        type="text" 
        placeholder="Honda" 
        onChangeText={text => setFormData(text)}
        value={formData}
        />
      <Button 
      variant="success" 
      type="submit"
      onClick={handleFormInsert}>
        Submit
      </Button>
      </View>
    </View>
  );
};

export default explore;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // flexDirection:'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,
  },
  input:{
    width: 300,
    borderColor: 'black',
    borderWidth: 1,
    height: 30,
    marginBottom: 10
  }
});