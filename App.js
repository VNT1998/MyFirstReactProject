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
  Linking,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
var count = 0;
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [name, setName] = useState('Vinit');
  const [session, setSession] = useState({number: 0, title: 'state'});
  const [current, setCurrent] = useState(true);

  const onClickHandler = () => {
    setSession({number: ++count});
    if (name === 'Vinit') {
      setName('Vinit Karkera');
      setCurrent(false);
    } else {
      setName('Vinit');
      setCurrent(true);
    }
  };
  return (
    // <SafeAreaView>
    <View style={styles.body}>
      <Text style={styles.text}>Hello this is {name}</Text>
      <Text style={styles.text}>Button has been clicked {session.number}</Text>
      <Text style={styles.text}>
        {current ? 'Current session' : 'Next session'}
      </Text>
      <Button title="Update Name" onPress={onClickHandler} />
      <Button
        title="Demo Button"
        onPress={() => {
          Linking.openURL('https://icons8.com/');
        }}
      />
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    height: '50%',
    width: '50%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderColor: '#ff0000',
    borderWidth: 20,
    margin: 49,
  },
  text: {
    color: '#ff0000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 20,
  },
});

export default App;
