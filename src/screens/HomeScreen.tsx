/**
 * HomeScreen.tsx - Simple Home UI
 * v1.0.0
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AppLogo from '../components/AppLogo';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <AppLogo />

      {/* Welcome Message */}
      <Text style={styles.title}>Welcome to Hayo-RestaurantApp! 🎉</Text>
      <Text style={styles.subtitle}>
        This is your home screen. 
        In future versions, we'll add menu, orders, and more!
      </Text>

      {/* Simple Footer Button (for testing) */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Browse Menu (Coming Soon)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
