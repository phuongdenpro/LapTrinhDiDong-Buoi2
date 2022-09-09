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
  TouchableOpacity,
} from "react-native";

const App = () => {
  const [name, setName] = React.useState(null);
  const [show, setShow] = React.useState(null);
  const onPress = () => setShow("Hello:  " + name);
  return (
    <SafeAreaView>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Name"
      ></TextInput>
      <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Show</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
      <View styles={styles.view}>
        <Text style={styles.textShow}>{show}</Text>
      </View>
    </SafeAreaView>
  );
};

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
  button: {
    alignItems: "center",
    backgroundColor: "#4630eb",
    padding: 10,
  },
  view: {},
  textShow: {
    marginVertical: 50,
    marginHorizontal: 10,
    fontSize: 25,
  },
});
export default App;
