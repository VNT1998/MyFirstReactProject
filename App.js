/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import MarshButton from './CustomButton';

const App = () => {
  const [name, setName] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);
  const [isModalVisible, setModalVisibility] = useState(false);
  const onPressHandler = () => {
    if (name.length > 2) {
      setSubmitted(!isSubmitted);
    } else {
      setModalVisibility(true);
    }
  };
  return (
    <ImageBackground
      style={styles.body}
      source={{
        uri: 'https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=1600',
      }}>
      <View>
        <Modal
          visible={isModalVisible}
          transparent
          onRequestClose={() => {
            setModalVisibility(false);
          }}
          animationType="fade">
          <View style={styles.modal}>
            <View style={styles.warning_modal}>
              <View style={styles.warning_title}>
                <Text style={styles.warning_title_text}>WARNING</Text>
              </View>
              <Text>The name must be longer than 2 char</Text>
              <Button
                title="OK"
                onPress={() => {
                  setModalVisibility(false);
                }}
              />
            </View>
          </View>
        </Modal>
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
          {!isSubmitted ? (
            <Text>Show name</Text>
          ) : (
            <View>
              <Image
                style={styles.image}
                source={require('./assets/1.jpg')}
                resizeMode="stretch"
              />
              <Image
                style={styles.image}
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                }}
                resizeMode="stretch"
              />
            </View>
          )}
        </TouchableHighlight>
        <TouchableOpacity onPress={onPressHandler} style={styles.button}>
          <Text>{!isSubmitted ? 'Show name' : 'Hide name'}</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback
          onPress={onPressHandler}
          style={styles.button}>
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
        <MarshButton
          title={!isSubmitted ? 'Show name' : 'Hide name'}
          onPressHandler={onPressHandler}
          color={'#FFFFFF'}
        />
        <MarshButton
          title={!isSubmitted ? 'Show name' : 'Hide name'}
          onPressHandler={onPressHandler}
          color={'#000000'}
        />
        {isSubmitted ? (
          <Text style={styles.text}>Your name is: {name}</Text>
        ) : null}
      </View>
    </ImageBackground>
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
  image: {
    height: 200,
    width: 400,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    height: 150,
    width: 300,
    margin: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#dddddd',
    borderRadius: 10,
  },
  warning_title: {
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D84B4B',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  warning_title_text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
