import React from 'react';
import { FlatList } from 'react-native';
import TodoListItem from './TodoListItem'

export default function TotoList({todos, setTodos}) {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoListItem text={item.text} onPressDelete={() => setTodos(oldTodos => oldTodos.filter((oldTodo) => oldTodo.id !== item.id) ) } />}
      keyExtractor={item => item .id}
    />
  );
}