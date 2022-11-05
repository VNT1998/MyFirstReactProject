/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SectionList from 'react-native/Libraries/Lists/SectionList';

const App = () => {
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

  const sectionData = [
    {title: 'Title 1', data: ['Item 1-1', 'Item 1-2', 'Item 1-3']},
    {title: 'Title 2', data: ['Item 2-1', 'Item 2-2', 'Item 2-3']},
    {title: 'Title 3', data: ['Item 3-1']},
    {title: 'Title 4', data: ['Item 4-1', 'Item 4-2', 'Item 4-3']},
    {title: 'Title 5', data: ['Item 5-1']},
    {title: 'Title 6', data: ['Item 6-1', 'Item 6-2']},
    {title: 'Title 7', data: ['Item 7-1', 'Item 7-2', 'Item 7-3']},
    {title: 'Title 8', data: ['Item 8-1', 'Item 8-2']},
  ];

  return (
    <SectionList
      sections={sectionData}
      style={styles.body}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section}) => (
        <View style={styles.itemh}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    />
    // <View style={styles.body}>
    //   <FlatList
    //     numColumns={2}
    //     keyExtractor={(item, index) => index.toString()}
    //     data={Items}
    //     renderItem={({item}) => (
    //       <View style={styles.item}>
    //         <Text style={styles.text}>{item.name}</Text>
    //       </View>
    //     )}
    //     refreshControl={
    //       <RefreshControl
    //         refreshing={Refreshing}
    //         onRefresh={onRefresh}
    //         colors={['#ff00ff']}
    //       />
    //     }
    //   />
    // </View>

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
  itemh: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff00ff',
  },

  text: {
    color: '#000000',
    margin: 10,
    fontSize: 40,
    fontStyle: 'italic',
  },
});

export default App;
