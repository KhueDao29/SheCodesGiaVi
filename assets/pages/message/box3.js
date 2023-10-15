import React from 'react';
import {Image, View, Text, StyleSheet, Pressable } from 'react-native';
import profile from "../personal/profile.png";

export default function Box3(props) {
  
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={{ flex: 1 }}>

                <Text style={{
                    alignSelf:'flex-end',
                    marginLeft: -20,
                    color: 'white',
                }}>Ok chị ơi</Text>
                
                <Text style={{
                    alignSelf:'flex-end',
                    marginTop:10,
                    marginRight: 0,
                    fontSize:10,
                    
                    color: 'white',
                }}>20:34</Text>
            </View>
            
          </View>
          
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
    header: {
      backgroundSize: "contain",
      resizeMode: "contain",
      width: 170,
      marginLeft: 220,
      backgroundColor: "#ff9052",
      borderWidth: 1,
      borderColor: 'white',
      alignContent: "flex-end",
      borderRadius:16,
      marginTop:10
    },
  
    headerContent: {
      paddingHorizontal: 60,
      paddingVertical: 20,
      alignSelf:'flex-end',
      alignItems: 'flex-end',
      display: "flex",
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap"
    },
});