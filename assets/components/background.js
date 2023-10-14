import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7CA1B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Background = () => {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 250, height: 250 }}
          resizeMode="contain"
          source={require('./objects.png')}
        />
      </View>
    );
  }

export default Background;