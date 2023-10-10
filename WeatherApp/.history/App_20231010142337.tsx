import React from "react";

import { View, Text, SafeAreaView } from "react-native";

const App = () =>{
  return (
    <SafeAreaView>
      <View style={{backgroundColor:"pink"}}>
        <Text>
          Current weather
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default App;