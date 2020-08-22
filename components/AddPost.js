import React from 'react';
import {View, TextInput, Button, StyleSheet, Image} from 'react-native';

export default function AddPost({setPosts}) {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={ styles.container }>
      <View style={styles.textInputArea}>
        <Image
          style={styles.userIcon}
          source={{
            uri: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p480x480/56590954_2248507135388996_2157225127748567040_o.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=QuDz_newlCYAX9T-jZe&_nc_ht=scontent-lax3-1.xx&_nc_tp=6&oh=3729833a6427fcd0108ab582c3c0dd47&oe=5F65D5DF',
          }}
        />
        <TextInput
          multiline={true}
          style={ styles.textInput }
          onChangeText={t => onChangeText(t)}
          value={text}
          placeholder={ "What's on your mind?" }
        />
      </View>
      <Button
        style={ styles.submitButton }
        title="投稿する"
        onPress={() => { setPosts(text); onChangeText("") }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 8,
    width: "100%",
  },
  textInputArea: {
    flexDirection: 'row',
    marginBottom: 8
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8
  },
  textInput: {
    width: 300
  },
  submitButton: {
    color: '#fff',
  },
});