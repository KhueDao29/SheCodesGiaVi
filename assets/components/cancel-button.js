import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';



function CancelButton(props) {
  const { onPress, title = 'Cancel' } = props;
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
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 16,
    elevation: 3,
    backgroundColor: '#white',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});

export default CancelButton;