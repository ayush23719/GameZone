import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { React, useState } from 'react';

export default function App() {
  const [poeple, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);


  return (
    <View style={styles.container}>
      {/* FlatList is a component that is used to render a list of data in a more efficient way than using a scrollview and a bunch of views inside of it. */}
      {/* keyExtractor prop is used to specify unique key for each item i.e. id in this case. */}
      {/* numColumns prop is used to split the list into multiple columns.  */}
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={poeple}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />

      {/* <ScrollView>
        {poeple.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }
});
