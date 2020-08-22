import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

export const TodoScreen = () => {
  const [todos, setTodos] = React.useState([]);
  const [id, setID] = React.useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <AddTodo setTodos={(text) => {
        setTodos(oldTodos => [...oldTodos, { id: id, text: text }])
        setID(id + 1)
      }}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#2D88FF',
    borderTopWidth: 80,
  },
});
