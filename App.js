/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const App = () => {
  const [name, setName] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 2) {
      setSubmitted(!isSubmitted);
    } else {
      Alert.alert(
        'Warning',
        'The name must be at least 2 characters',
        [
          {
            text: 'Cool',
            onPress: () => console.warn('Cool pressed'),
          },
        ],
        {cancelable: true},
      );
    }
  };
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
      <TouchableHighlight
        onPress={onPressHandler}
        underlayColor="#dddddd"
        style={styles.button}>
        <Text>{!isSubmitted ? 'Show name' : 'Hide name'}</Text>
      </TouchableHighlight>
      <TouchableOpacity onPress={onPressHandler} style={styles.button}>
        <Text>{!isSubmitted ? 'Show name' : 'Hide name'}</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={onPressHandler} style={styles.button}>
        <Text>{!isSubmitted ? 'Show name' : 'Hide name'}</Text>
      </TouchableWithoutFeedback>
      <Pressable
        hitslop={{top: 10, bottom: 10}}
        onPress={onPressHandler}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
          styles.button,
        ]}>
        <Text>{!isSubmitted ? 'Show name' : 'Hide name'}</Text>
      </Pressable>
      <Button
        title={!isSubmitted ? 'Show name' : 'Hide name'}
        onPress={onPressHandler}
        color="#00f"
      />
      {isSubmitted ? (
        <Text style={styles.text}>Your name is: {name}</Text>
      ) : null}
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
  button: {
    fontSize: 20,
    padding: 20,
    borderRadius: 20,
    // backgroundColor: '#00ff00',
  },
});

export default App;
