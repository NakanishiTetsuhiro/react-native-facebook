import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import AddPost from '../components/AddPost'
import TodoList from '../components/TodoList'

export const TimelineScreen = () => {
  const [todos, setPosts] = React.useState([]);
  const [id, setID] = React.useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <AddPost setPosts={(text) => {
        setPosts(oldTodos => [...oldTodos, { id: id, text: text }])
        setID(id + 1)
      }}
      />
      <TodoList todos={todos} setPosts={setPosts} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8e9ec',
    padding: 8
  },
});
