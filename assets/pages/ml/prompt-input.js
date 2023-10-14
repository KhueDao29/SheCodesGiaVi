import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Ditme');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
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