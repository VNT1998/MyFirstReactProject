/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter here"
        onChangeText={i => setName(i)}
        maxLength={10}
        secureTextEntry={true}
      />
      <Text style={styles.text}>Your name is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    margin: 50,
  },

  text: {
    color: '#000000',
    margin: 10,
    fontSize: 20,
    fontStyle: 'italic',
  },

  input: {
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    margin: 10,
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default App;
