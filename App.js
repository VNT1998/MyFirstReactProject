/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

var count = 0;
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [Items, setItems] = useState([
    {key: 1, item: 'Item 1'},
    {key: 2, item: 'Item 2'},
    {key: 3, item: 'Item 3'},
    {key: 4, item: 'Item 4'},
    {key: 5, item: 'Item 5'},
    {key: 6, item: 'Item 6'},
    {key: 7, item: 'Item 7'},
    {key: 8, item: 'Item 8'},
    {key: 9, item: 'Item 9'},
    {key: 10, item: 'Item 10'},
    {key: 11, item: 'Item 11'},
    {key: 12, item: 'Item 12'},
    {key: 13, item: 'Item 13'},
    {key: 14, item: 'Item 14'},
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {key: 15, item: 'Item 15'}]);
    setRefreshing(false);
  };
  return (
    // <SafeAreasssView>
    <View style={styles.body}>
      <ScrollView
        horizontal
        refreshControl={
          <RefreshControl
            refreshing={Refreshing}
            onRefresh={onRefresh}
            colors={['#ff00ff']}
          />
        }>
        {Items.map(i => {
          return (
            <View style={styles.item} key={i.key}>
              <Text style={styles.text}>{i.item}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
    /* </SafeAreaView> */
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4ae1fa',
  },

  text: {
    color: '#000000',
    margin: 10,
    fontSize: 40,
    fontStyle: 'italic',
  },
});

export default App;
