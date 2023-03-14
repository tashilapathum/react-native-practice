import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('Tashila');
  const [person, setPerson] = useState({name: 'Jack', age: 30});

  const clickHandler = () => {
    setName('Tashila');
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name} and I'm {person.age} years old</Text>
      <TextInput 
        style={styles.inputStyle}
        placeholder='Your name'
        onChangeText={(val) => setName(val)}/>
      <View style={styles.buttonStyle}>
        <Button title='Change' onPress={clickHandler} />
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
  buttonStyle: {
    borderRadius: 16,
    marginTop: 16
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 8,
    width: 200
  }
});
