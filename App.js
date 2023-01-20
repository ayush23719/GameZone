import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { React, useState, useCallback } from 'react';
import Header from './components/header';
import { useFonts } from 'expo-font';
import TodoItem from './components/todoItem';
export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito': require('./assets/fonts/Nunito-VariableFont_wght.ttf'),
    'Kanit': require('./assets/fonts/Kanit-Regular.ttf'),
    'Pacifico': require('./assets/fonts/Pacifico-Regular.ttf'),
  });
  const [todos, setTodos] = useState([
    { text: 'Buy Cookies', key: '1' },
    { text: 'Code the Web', key: '2' },
    { text: 'Watch Anime', key: '3' },
  ]);

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
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
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
  }
});
