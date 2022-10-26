/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

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
      <View style={styles.row1}>
        <View style={styles.text1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.text2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.text3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <View style={styles.text4}>
          <Text style={styles.text}>4</Text>
        </View>
      </View>
      <View style={styles.row3}>
        <View style={styles.text5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      <View style={styles.row4}>
        <View style={styles.text6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.text7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  row1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  row2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  row3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  row4: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  text1: {
    flex: 1,
    backgroundColor: '#0AF7F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    flex: 2,
    backgroundColor: '#F70AE9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text3: {
    flex: 3,
    backgroundColor: '#F7F70A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text4: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text5: {
    flex: 1,
    backgroundColor: '#428E36',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text6: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text7: {
    flex: 1,
    backgroundColor: '#364E8E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
  },
});

export default App;
