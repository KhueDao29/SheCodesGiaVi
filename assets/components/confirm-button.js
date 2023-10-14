import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';



function ConfirmButton(props) {
  const { onPress, title = 'Confirm' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Xác nhận</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 16,
    elevation: 3,
    backgroundColor: '#5cbe2e',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

export default ConfirmButton;