import React from 'react';
import {Image, View, Text, StyleSheet, Pressable } from 'react-native';
import profile from "../personal/profile.png";

export default function Box2(props) {
  
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={{ flex: 1 }}>
                <Image
                    style={styles.avatar}
                    source={profile}
                    width={10}                
                />
                <Text style={{
                    alignSelf:'flex-start',
                    marginLeft: -20
                }}>Chốt đơn cơm xào bò 25k ngày mai nhé</Text>
                
                <Text style={{
                    alignSelf:'flex-start',
                    marginTop:10,
                    marginLeft: -20,
                    fontSize:10,
                }}>20:30</Text>
            </View>
            
          </View>
          
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
    header: {
      backgroundSize: "contain",
      height: 300,
      width: 350,
      marginLeft: 10,
      backgroundColor: "white",
      alignContent: "flex-start",
      borderWidth:1,
      borderColor: 'black',
      borderRadius:16,
      marginTop:10
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
    avatar: {
      width: 300,
      height: 200,
    //   borderRadius: 63,
      marginLeft:-30,
      marginBottom: 10,
      float: "right"
    },
});