import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextBox = () => {
  const [text, onChangeText] = React.useState();

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={'Tin nhắn'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    alignSelf:'center',
    height: 60,
    width: 390,
    marginBottom: 10,
    marginTop: 60,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#eeeeee',
  },
});

export default TextBox;