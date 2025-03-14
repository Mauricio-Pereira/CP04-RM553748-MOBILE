import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>CP 04 MOBILE</Text>
      <Text style={styles.name}>Maurício Pereira</Text>
      <Text style={styles.rm}>RM: 553748</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#0B1E51',
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: 100, // Define uma altura mínima
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between', // U


  },
  title: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    paddingRight: 30
  },
  name: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    paddingRight: 15
  },
  rm: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold', 
  },
});
