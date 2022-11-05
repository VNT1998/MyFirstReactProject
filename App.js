/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

var count = 0;
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [Items, setItems] = useState([
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'},
    {name: 'Item 5'},
    {name: 'Item 6'},
    {name: 'Item 7'},
    {name: 'Item 8'},
    {name: 'Item 9'},
    {name: 'Item 10'},
    {name: 'Item 11'},
    {name: 'Item 12'},
    {name: 'Item 13'},
    {name: 'Item 14'},
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {name: 'Item 15'}]);
    setRefreshing(false);
  };
  return (
    <View style={styles.body}>
      <FlatList
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        data={Items}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={Refreshing}
            onRefresh={onRefresh}
            colors={['#ff00ff']}
          />
        }
      />
    </View>

    // <SafeAreasssView>
    // <View style={styles.body}>
    //   <ScrollView
    //     horizontal
    //     refreshControl={
    //       <RefreshControl
    //         refreshing={Refreshing}
    //         onRefresh={onRefresh}
    //         colors={['#ff00ff']}
    //       />
    //     }>
    //     {Items.map(i => {
    //       return (
    //         <View style={styles.item} key={i.key}>
    //           <Text style={styles.text}>{i.item}</Text>
    //         </View>
    //       );
    //     })}
    //   </ScrollView>
    // </View>
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
