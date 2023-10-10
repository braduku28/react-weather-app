import React from "react";

import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () =>{
  return (
    <SafeAreaView>
      <View style={sytles.container}>
        <Text>
          Current weather
        </Text>
      </View>
    </SafeAreaView>
  );
}
const sytles=StyleSheet.create({
  container:{
    backgroundColor:"pink"
  }
});

export default App;