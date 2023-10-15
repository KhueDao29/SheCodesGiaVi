import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState();

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        multiline = {false}  
        numberOfLines = {4}
        placeholder="Bạn muốn ăn gì trong 48 tiếng tới?"

      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 180,
    width: 320,
    margin: 60,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FEF3E7',
  },
});

export default TextInputExample;