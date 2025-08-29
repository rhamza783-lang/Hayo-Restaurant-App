/**
 * AppLogo.tsx - Simple Logo Component
 * v1.0.0
 * Note: Using text logo for now. Later, replace with image.
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppLogo = () => {
  return (
    <View style={styles.container}>
      {/* Text Logo (Safe without image) */}
      <Text style={styles.logoText}>🍽️</Text>
      <Text style={styles.logoText}>Hayo</Text>
      <Text style={styles.tagline}>Simple. Tasty. Yours.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 30,
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FF6F61',
    textAlign: 'center',
  },
  tagline: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    fontStyle: 'italic',
  },
});

export default AppLogo;
