import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { React, useState, useCallback } from 'react';
import Header from './components/header';
import { useFonts } from 'expo-font';
import TodoItem from './components/todoItem';
import NewItemModal from './components/modal';
export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito': require('./assets/fonts/Nunito-VariableFont_wght.ttf'),
    'Kanit': require('./assets/fonts/Kanit-Regular.ttf'),
    'Pacifico': require('./assets/fonts/Pacifico-Regular.ttf'),
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
  });
  const [todos, setTodos] = useState([]);

  if (Object.keys(todos).length === 0) {
    console.log('No items in todo.');
  }
  const submitHandler = (text) => {

    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    });
    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
      return null;
    }
    const pressHandler = (key) => {
      setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.key != key);
      });
    }

    return (
      <View style={styles.container}>
        {/* header */}
        <Header />

        <View style={styles.content}>
          {/* to do form */}
          <View style={styles.list}>
            <View style={styles.empty}>
              <Image source={Object.keys(todos).length == 0 ? require('./assets/item_empty.png') : null} style={styles.emptyImg} />
              <Text style={styles.emptyText}>No items in todo.</Text>
            </View>

            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
          <NewItemModal submitHandler={submitHandler} />
        </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9EB',

  },
  content: {
    padding: 40,
    backgroundColor: '#FFF9EB',
    flex: 1,

  },
  list: {
    marginTop: 20,
    backgroundColor: 'transparent',
    flex: 1,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyImg: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 100,
  },
  emptyText: {
    fontFamily: 'Poppins',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
});
