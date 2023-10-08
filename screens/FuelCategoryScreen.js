import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FuelCategoryScreen = ({ navigation }) => {
  const navigateToFuelDetails = fuelType => {
 
    console.log(`Navigating to fuel details: ${fuelType}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fuel Categories</Text>
      <TouchableOpacity onPress={() => navigateToFuelDetails('Petrol')}>
        <Text style={styles.category}>Petrol</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToFuelDetails('Diesel')}>
        <Text style={styles.category}>Diesel</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToFuelDetails('Kerosine')}>
        <Text style={styles.category}>Kerosine</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToFuelDetails('LP Gas')}>
        <Text style={styles.category}>LP Gas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  category: {
    fontSize: 18,
    marginBottom: 10,
    color: 'blue', // Change this color as needed
    textDecorationLine: 'underline',
  },
});

export default FuelCategoryScreen;
