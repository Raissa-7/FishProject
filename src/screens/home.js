import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export const HomeScreen = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('FishesScreen');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/shark.png')} />
      <Text style={styles.welcome}>Welcome to Fish Facts</Text>
      <View>
        <TouchableOpacity style={styles.customButton} onPress={pressHandler}>
          <Text style={styles.getStarted}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#ffd8ad',
  },
  customButton: {
    borderRadius: 25,
    paddingHorizontal: 70,
    paddingVertical: 12,
    backgroundColor: '#8614b8',
  },
  getStarted: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    // fontFamily: 'CANegroni-Round',
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    color: '#8614b8',
    // fontFamily: 'CANegroni-Round',
  },
});
