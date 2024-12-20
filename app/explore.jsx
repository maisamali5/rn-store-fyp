import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet,TextInput, Modal, Button} from 'react-native';
import {  Container } from 'react-bootstrap';
import { ScrollView } from 'react-native-gesture-handler';

const explore = ({ navigation }) => {
  const API_URL =  'http://localhost:3000/posts/';
  const [postData, setPostData] = useState([]);
  const [formData, setFormData] = useState("");
  const [maxId ,setMaxId] = useState("0");
  const [editUser, setEditUser] = useState("");
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
     fetch(API_URL)
      .then(response => response.json())
      .then(data => setPostData(data))
      .catch(error => console.error('Error fetching data:', error))
  }, []);

  const renderItem = ({ item }) =>(
    <View style={styles.container}>
      <View style={{ padding: 10 ,flexDirection:'row'}}>
      <Text style={{color: 'black', fontSize:20}}>{item.id}</Text>
      <Text style={{color: 'black', fontSize:20}}> {item.title}</Text>
      <View style={{flex:1, flexDirection:"row-reverse"}}>          
          <Button title='Delete' onPress={()=> handleFormDelete(item.id)} ></Button> 
          <Text>  </Text>
          <Button class='btn btn-primary' title='Edit' onPress={()=> UpdateData(item)}></Button>
      </View>  
      {setMaxId(item.id)} 
      </View>
    </View>
  );

  const handleFormInsert = () => {
      const setData ={
        title: formData,
        id : (parseInt(maxId) + 1 ).toString()
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
      });
      location.reload();
  }

  const handleFormDelete = (id) => {
    fetch(API_URL + id ,{
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      if(!response.ok){
        alert("Data Not Deleted\n Try Again");
      }  else{
        location.reload();
      }
    });
  };

  const UpdateData = (data) => {
    setShowModal(true);
    setEditUser(data);
    console.log(editUser);
}

  return (
   
    <ScrollView style={styles.container}>
      <View style = {{justifyContent: 'center', alignItems: 'center',marginTop: 50}}>
        <Text style={{fontSize: 18}}>Enter Car Name:</Text>
        <TextInput 
        style={styles.input}
        type="text" 
        placeholder="Example: Honda" 
        onChangeText={text => setFormData(text)}
        value={formData}
        />

      <View style={styles.btnCon}>
      <Button 
      title='Save'
      onPress={handleFormInsert}></Button>
      </View>
      </View>

      <View>
      <Text style={{textAlign: 'center', fontSize:25, fontWeight:'bold', marginTop:15}}
      >Data Received by Api</Text>
      <FlatList
        data={postData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      </View>
      <Modal visible={showModal} transparent={true}>
          <UserModal setShowModal={setShowModal} items={editUser} />
      </Modal>
    </ScrollView>
  );
};

const UserModal = (props) =>{
  const [propsData,setPropsData] = useState(undefined);

  useEffect(()=> {
    if(props.items){
      setPropsData(props.items.title);
    }
  },[props.items])

  const handleUpdate= async()=>{
    const url = 'http://localhost:3000/posts/';
    const id= props.items.id;
    fetch(url+id,{
      method:"Put",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({"title": propsData})
    })
    .then(response=> {
      if(!response.ok){
        alert("Data Not updated\n Try Again");
      }  else{
        props.setShowModal(false);
        location.reload();
      }
  }
  )
  }

return(
  <View style={styles.modalContainer}>
    <View style={styles.modalView}>
        <Text style={styles.headings}>Updating List item</Text>  
          <Text>Item Name:</Text>
          <TextInput 
          style={styles.input}
          type='text'
          value={propsData}
          onChangeText={(text) => setPropsData(text)}
          />
          <Button title='Update' onPress={handleUpdate}  ></Button> <Text> </Text>
          <Button title='Close' onPress={()=>props.setShowModal(false)} ></Button>
    </View>
</View>
);
}

export default explore;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // flexDirection:'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,
  },
  modalContainer:
  {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    // width:'80%',
    // marginLeft: 'auto'
  },
  modalView:{
    backgroundColor:'pink',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.7,
    elevation: 4,
    padding: 10
  },
  input:{
    width: 300,
    borderColor: 'black',
    borderWidth: 1,
    height: 30,
    marginBottom: 10
  },
  btnCon:{
    flex:1,
    flexDirection:'row',
    gap:10
  },
  headings:{
    fontSize: 20,
    textAlign:"center",
    fontWeight: 'bold'
  }
});