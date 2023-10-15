import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function ConfirmButton(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Đã hoàn thành</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#5cbe2e',
    marginTop: -10,
    width: 150,
    marginRight: 10
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 200,
    letterSpacing: 0.25,
    color: 'white',
  },
});