// import React, { useState } from 'react'
// import {View, Text, Link, StyleSheet} from 'react-native'
// import { LinearGradient } from 'expo-linear-gradient';
// import {Button} from 'react-bootstrap';
// import { useEffect, FlatList } from 'react';


// const Dashboard = () => {
//   return (
//     <View >
//       <LinearGradient
//         colors={['#004d7a', '#008793', '#00bf72']}
//         style={styles.background}>
//         <Text style={styles.text}>Dashboard user</Text>
    
//     <Button variant="primary" href='/explore'>Primary</Button>
//       {fetchError ? 
//       <Text>{fetchError}</Text>: <Text>Data received: </Text>}

//       </LinearGradient>
//     </View>
    
//   );
// }
// export default Dashboard;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     backgroundColor: 'orange',
//   },
//   background: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     height: 900,
//   },
//   button: {
//     padding: 15,
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   text: {
//     backgroundColor: 'transparent',
//     fontSize: 25,
//     color: '#fff',
//     marginLeft: 5,
//   },
// });
// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';

// const WorkoutsScreen = () => {
//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Weekly Frequency</Text>
//       {/* Placeholder for progress bars */}
//       <Text>Progress Bars for Workouts</Text>
//       {/* List your workouts */}
//       <Text>Single Exercises</Text>
//       <Text>Sprints & Runs</Text>
//       <Text>Training Spots</Text>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold' },
// });

// export default WorkoutsScreen;



// App.js
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

// Screen Components
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen!</Text>
    </View>
  );
}

// Create Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={
          
          ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarBadge: 3}} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}

