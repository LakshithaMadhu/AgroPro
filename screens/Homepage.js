import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Homepage from './pages/Homepage';

const Homepage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native Simple Page!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Homepage;