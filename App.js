import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image , Pressable, Alert, ActivityIndicator} from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.text}>
        <Text style={styles.text1}>open </Text>
        <Text style={styles.text2}>hello</Text>
        <Text style={styles.text3}>World</Text>
      </View>
      <Image
        source={require("../test/assets/logo.png")}
        style={{ width: 200, height: 65 }}>
      </Image>
      <Pressable style={styles.press} onPress={() => Alert.alert("Vous avez appuyer")}><Text>Press me</Text></Pressable>
  
      <ActivityIndicator size="large" color="white"></ActivityIndicator>
    </ScrollView>

  );
}

const styles = StyleSheet.create({

  container:{
   
    backgroundColor: "red"
  },

  text: {
    backgroundColor: "white",
    marginTop: "80px",
    marginBottom: "80px",
  },
  text1: {
    fontSize: 30,
  },
  text2: {
    textAlign: "center",
  },
  text3: {
    fontWeight: "bold",
  },
  press:{
    fontWeight: "bold",
    textAlign:"center"
  }
});
