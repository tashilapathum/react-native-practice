import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, FlatList} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Ron', key: '0'},
    {name: 'Tom', key: '1'},
    {name: 'Ann', key: '2'},
    {name: 'Ben', key: '3'}
  ]);

  return (
    <View style={styles.container}>
      <FlatList
      data={people}
      renderItem={({ item }) => (
        <Text style={styles.item}>{item.name}</Text>
      )}
      />
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
  item: {
    padding: 16,
    backgroundColor: 'blue',
    margin: 8
  }
});
