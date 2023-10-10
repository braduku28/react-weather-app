import React from "react";

import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () =>{
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
      <View style={styles.highLowWrapper}>
        <Text style={styles.highLow}>High: 8</Text>
        <Text style={styles.highLow}>Low:6</Text>
      </View>
     
      </View>
      <View style={styles.bodyWrapper}>
        <Text>It's sunny</Text>
        <Text>It's perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"pink",
    alignItems:"center"
  },
  wrapper:{
    flex:1
  },
  temp:{
    color:"black",
    fontSize:48
  },
  feels:{
    color:"black",
    fontSize:30
  },
  highLow:{
    color:"black",
    fontSize:20
  },
  highLowWrapper:{
    flexDirection:"row"
  },
  bodyWrapper:{
    justifyContent:"flex-end",
    alignItems:"flex-start"
  }
});

export default App;