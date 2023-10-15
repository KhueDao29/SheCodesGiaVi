import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function DealButton(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Chốt đơn</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#e8ffea',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#3dd34c',
    height: 40,
    width: 130,
    marginLeft: 145
  },
  text: {
    fontSize: 20,
    fontWeight: 350,
    letterSpacing: 0.25,
    color: '#5cbe2e',
  },
});