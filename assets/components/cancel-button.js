import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function CancelButton(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Hủy đơn</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 0,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    marginTop: -10,
    borderWidth: 1,
    borderColor: 'red',
    width: 70,
    marginLeft: 25
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});