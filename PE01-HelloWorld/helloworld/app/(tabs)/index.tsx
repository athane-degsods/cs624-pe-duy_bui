import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>Sam Chung</Text>
      <Text style={styles.textItem}>MSCS</Text>
      <Text style={styles.textItem}>STC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF00', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  textItem: {
    fontSize: 20,
    marginVertical: 5
  },
});