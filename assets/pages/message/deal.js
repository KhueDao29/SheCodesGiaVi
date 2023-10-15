import React from 'react';
import {Image, View, Text, StyleSheet, Pressable } from 'react-native';
import profile from "../personal/profile.png";
import DealButton from './deal-button';

export default function Deal(props) {
  
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={{ flex: 1 }}>
                <Text style={{
                    alignSelf:'flex-start',
                    marginLeft: -20,
                    fontWeight: 700,
                    fontSize:23
                }}>Cơm xào bò</Text>
                
                <Text style={{
                    alignSelf:'flex-start',
                    marginLeft: -20,
                    fontWeight: 700,
                    fontSize:30
                }}>75.000 VNĐ</Text>

                <DealButton></DealButton>
                
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
      height: 170,
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
    avatar: {
      width: 300,
      height: 200,
    //   borderRadius: 63,
      marginLeft:-30,
      marginBottom: 10,
      float: "right"
    },
});