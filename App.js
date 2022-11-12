import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { React, useState } from 'react';

export default function App() {
  const [name, setName] = useState('ayush');
  const pressHandler = () => {
    setName('Random');
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}.</Text>
      <Text></Text>
      <View style={styles.buttonContainer}>
        <Button title="Update State" onPress={pressHandler} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
