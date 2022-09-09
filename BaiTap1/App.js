import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  View,
  Alert,
} from "react-native";

export default function App() {
  const [name, setName] = React.useState(null);
  
  
  
  return (
    <SafeAreaView>
      <TextInput
        style={styles.textInput}
        onSubmitEditing={(text)=>setName(text)}
        value={name}
        placeholder="Name" 
      ></TextInput>
      <Button
        style={styles.button}
        title="Show"
        color="#f194ff"
       // onPress={handle}
      ></Button>

      <StatusBar style="auto" />
      <View styles={styles.view}>
        <Text style={styles.textShow}>Hello: {name}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 100,
    marginHorizontal: 50,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    height: 50,
  },
  button: {},
  view: {},
  textShow: {
    marginVertical: 50,
    marginHorizontal: 100,
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

