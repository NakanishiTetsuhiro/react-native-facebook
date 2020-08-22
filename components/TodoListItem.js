import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function TodoListItem({ text, onPressDelete }) {
  return (
    <View style={styles.item}>
      <Text>{text}</Text>
      <Button
        title="削除"
        onPress={onPressDelete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});