import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

class Registration extends Component {
  render() {
    return (
      <View style={styles.Registration}>
        <Text style={styles.header}>Registration</Text>

        <TextInput
          style={styles.TextInput}
          placeholder="your name"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          style={styles.TextInput}
          placeholder="Email(example.com)"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          style={styles.TextInput}
          placeholder="your Password"
          underlineColorAndroid={"transparent"}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Registration: {
    alignSelf: "stretch",
    alignContent: "center",
    backgroundColor: "#3f51b5",
  },
  header: {
    fontSize: 24,
    color: "#fff",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#199187",
    borderLeftWidth: 1,
  },
  TextInput: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "#fff",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#59cbbd",
    marginTop: 10,
    borderRadius: 30,
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Registration;
