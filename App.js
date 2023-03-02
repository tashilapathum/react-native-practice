import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('Tashila');
  const [person, setPerson] = useState({name: 'Jack', age: 30});

  const clickHandler = () => {
    // if (name == 'Tashila') {
    //   setName('Pathum');
    // } else {
    //   setName('Tashila');
    // }

    setPerson({name: 'Sparrow', age: 40});
  }

  return (
    <View style={styles.container}>
      <Text>My name is {person.name} and I'm {person.age} years old</Text>
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
  }
});
