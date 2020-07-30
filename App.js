import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Registration from './Components/Registration'
import Login from './Components/Login'



export default function App() {
  return (
    <View style={styles.container}>
      <Registration/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f51b5',
    justifyContent: 'center',
    paddingLeft:500,
    paddingRight:500,
  },
});
