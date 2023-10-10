import React from "react";

import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () =>{
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={sytles.container}>
        <Text>
          Current weather
        </Text>
      </View>
    </SafeAreaView>
  );
}
const style=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"pink"
  },
  wrapper:{
    flex:1
  }
});

export default App;