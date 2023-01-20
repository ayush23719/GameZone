import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { React, useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.content}>
        {/* to do form */}
        <View style={styles.list}>
          <FlatList
            data={[
              { text: 'buy coffee', key: '1' },
              { text: 'create an app', key: '2' },
              { text: 'play on the switch', key: '3' },
            ]}

            renderItem={({ item }) => (
              <TouchableOpacity>
                <Text>{item.text}</Text>
              </TouchableOpacity>
            )}
          />
        </View>


      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    padding: 40,
    backgroundColor: 'pink',
    flex: 1,

  },
  list: {
    marginTop: 20,
    backgroundColor: 'yellow',
    flex: 1,
  }
});
