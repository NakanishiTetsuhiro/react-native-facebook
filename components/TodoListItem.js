import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

export default function TodoListItem({ text, onPressDelete }) {
  return (
    <View style={styles.item}>
      <View style={styles.userInfo}>
        <Image
          style={styles.userIcon}
          source={{
            uri: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p480x480/56590954_2248507135388996_2157225127748567040_o.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=QuDz_newlCYAX9T-jZe&_nc_ht=scontent-lax3-1.xx&_nc_tp=6&oh=3729833a6427fcd0108ab582c3c0dd47&oe=5F65D5DF',
          }}
        />
        <Text>あああ</Text>
      </View>
      <Text>{text}</Text>
      {/*<Button*/}
      {/*  title="削除"*/}
      {/*  onPress={onPressDelete}*/}
      {/*/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 8,
    width: "100%"
  },
  userInfo: {
    flexDirection: 'row',
    marginBottom: 8
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8
  },
});