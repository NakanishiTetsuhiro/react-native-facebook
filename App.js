import React from 'react';
import { TodoScreen } from "./screens/TodoScreen";
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.view}>
      <StatusBar style="light" />
      <TodoScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#2D88FF',
    borderTopWidth: 80,
  },
});
