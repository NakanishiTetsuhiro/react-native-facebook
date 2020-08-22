import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import TodoListItem from './TodoListItem'

export default function TotoList({todos, setPosts}) {
  return (
    <FlatList style={styles.list}
      data={todos}
      renderItem={({ item }) => <TodoListItem text={item.text} onPressDelete={() => setPosts(oldTodos => oldTodos.filter((oldTodo) => oldTodo.id !== item.id) ) } />}
      keyExtractor={item => item .id}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 8,
    width: "100%"
  },
});