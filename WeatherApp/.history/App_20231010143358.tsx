import React from "react";

import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () =>{
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Current weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text>Feels like 5</Text>
        <Text>High: 8 Low:6</Text>
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
  }
});

export default App;