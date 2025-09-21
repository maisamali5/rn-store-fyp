import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';

const CartList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Virtual Cart Items List</Text>
    </View>
  )
}

export default CartList

const styles = StyleSheet.create({
  mainHeading:{
    fontSize:24,
    textAlign:"center",
    color:Colors.Theme.white,
    letterSpacing:1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Theme.background,
  }
});