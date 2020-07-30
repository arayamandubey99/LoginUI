import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

class Login extends Component {
  render() {
    return (
      <View style={styles.Login}>
        <Text style={styles.header}>LogIn</Text>

        <TextInput
          style={styles.TextInput}
          placeholder="your Email"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          style={styles.TextInput}
          placeholder="your Password"
          underlineColorAndroid={"transparent"}
        />
        <Text style={styles.forgotPass}>Forgot Password </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  Login: {
    alignSelf: "stretch",
    alignContent: "center",
  },
  header: {
    fontSize: 24,
    color: "#ffff",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#199187",
    borderLeftWidth: 1,
    alignContent:'center',
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
    margibTop: 30,
    borderRadius: 30,
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold",
  },
  forgotPass:{
      color:'#fff',
      marginBottom:6,
  }
});

export default Login;
