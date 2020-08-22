import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default function AddTodo({setTodos}) {
  const [text, onChangeText] = React.useState("");

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={t => onChangeText(t)}
        value={text}
      />
      <Button
        title="Press me"
        onPress={() => { setTodos(text); onChangeText("") }}
      />
    </View>
  );
}