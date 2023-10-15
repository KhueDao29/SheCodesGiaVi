import React from 'react';
import {Image, View, Text, StyleSheet, Pressable } from 'react-native';

export default function Box1(props) {
  
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={{ flex: 1 }}>
                
                <Text style={{
                    alignSelf:'flex-start',
                    marginLeft: -20
                }}>Mình có thể nấu theo yêu cầu ít mặn của bạn</Text>
                
                <Text style={{
                    alignSelf:'flex-start',
                    marginTop:10,
                    marginLeft: -20,
                    fontSize:10,
                }}>20:29</Text>
            </View>
            
          </View>
          
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
    header: {
      backgroundSize: "contain",
      height: 90,
      width: 350,
      marginLeft: 10,
      backgroundColor: "white",
      alignContent: "flex-start",
      borderRadius:16,
      marginTop:10,
      borderWidth:1,
      borderColor: 'black',
    },
  
    headerContent: {
      paddingHorizontal: 60,
      paddingVertical: 20,
      alignSelf:'flex-start',
      display: "flex",
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap"
    },
});