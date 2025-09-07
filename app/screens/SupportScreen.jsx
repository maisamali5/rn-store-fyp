import { Text, View, StyleSheet ,TextInput,Button, ScrollView} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

const SupportScreen = () => {
    return (
        <ScrollView style={styles.container}>         
          <View style={styles.User}>
              <View style={styles.addBtn}>
                <Text style={styles.heading}>Customer Support</Text>
              </View>
          </View>
          
          <View style= {styles.addBtnDiv}>
                    <Icon.Button
                            name="phone"
                            backgroundColor="transparent"
                            color={"#535375"}
                            size={35}
                            style={{
                            justifyContent: "center",
                            alignItems:"center",
                            marginLeft: 10
                            }}
                            // onPress={}
                    ></Icon.Button>    
                <Text style={{fontWeight: "bold", color: "#535375"}}> </Text>
              </View>
              
              <View style={styles.tileBox}>
                {/* <Text style={{color: "white", fontSize:20, fontWeight: "bold"}}>Existing</Text> */}
              
                {/* <View style={styles.tile}>
                    <Text style={styles.tileText}>Method 1</Text>
                    <Text></Text>
                </View>

                <View style={styles.tile}>
                    <Text style={styles.tileText}>Method 2</Text>
                </View> */}

                <Text style={styles.label}>Connect with support agent</Text>
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
      backgroundColor: '#535375',
    },
    addBtnDiv: {
      backgroundColor: 'white',
      width: 58,
      borderRadius: 11,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      color: 'white',
      marginLeft: 30,
      marginTop: 30,
    },
    tileBox:{
        justifyContent: "center",
        alignItems:"center",
        flexDirection: "column",
        padding: 20,
        
    },
    tileText:{
        fontWeight: "bold",
        color: "#535375",
        fontSize: 22,
        marginLeft: 10,
    },
    tile:{
        backgroundColor: "white",
        justifyContent: "center",
        width: 360,
        height: 80,
        margin: 10,
        borderRadius: 7,
    },
    User:{
      flex: 1,
      alignItems: 'center',
    },
    btn:{
      margin: 12,
      width: 130,
    },
    heading:{
        fontSize: 25,
        fontWeight: "bold",
        color: "white",  
        top: "50%"     
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
      },    label: {
        fontSize: 16,
        marginBottom: 5 ,
        color: 'white',
        fontWeight:'bold',
        margin: 5,
        left: "0%",
      },
  });