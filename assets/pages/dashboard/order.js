import React from 'react';
import {Image, View, Text, StyleSheet, Pressable } from 'react-native';
import profile from "../personal/profile.png";

export default function Order(props) {
  
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
            </View>
            <View>
                <Text style={styles.name}>Bạn Nhẫn ở văn phòng S</Text>
            </View>
            
          </View>
          
          <View>
                <Text style={{
                    marginTop:-170,
                    marginLeft: 40,
                    marginBottom:-30,
                    paddingBottom:20,
                    fontSize:12
                }}>
                    Đơn hàng
                </Text>
                    
                <View style={styles.headerContent2}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.name2}>Bún đậu mắm nêm</Text>
                        <Text style={styles.name3}>Ít đậu nhiều mắm</Text>
                    </View>
                    <View>
                         <Text style={styles.name2}>x1</Text>
                    </View>
            
                </View>
                <View style={styles.headerContent2}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.name4}>Trà sữa</Text>
                    </View>
                    <View>
                         <Text style={styles.name5}>x3</Text>
                    </View>
            
                </View>
                
                <View style={styles.headerContent2}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.total}>Tổng cộng</Text>
                    </View>
                    <View>
                         <Text style={styles.totalprice}>400.000.000</Text>
                    </View>
                </View>                
          </View>
        </View>
        


    </View>
  );
}
const styles = StyleSheet.create({
    header: {
      backgroundSize: "contain",
      height: 250,
      backgroundColor: "#FEF3E7",
      alignContent: "flex-start",
      borderRadius:16,
    },
  
    headerContent: {
      paddingHorizontal: 60,
      paddingVertical: 20,
      alignItems: "center",
      alignSelf:'flex-start',
      display: "flex",
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap"
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 63,
      borderWidth: 2,
      borderColor: "white",
      marginBottom: 10,
      float: "right"
    },
    location: {
      borderColor: "white",
      width: 10,
      height: 10,
      float: "left"
    },
    hamburger: {
      borderColor: "white",
      width: 10,
      height: 10,
      float: "right"
    },
    name: {
      fontSize: 14,
      color: "medium",
      fontWeight: "400",
      fontFamily: "Helvetica",
      marginBottom: 30,
    },
    headtText: {
      fontFamily: "Helvetica",
      color: "grey",
      fontWeight: "600",
      float: "left",
      marginLeft: 20,
      marginTop: 10
    },
    SubjectText: {
      color: "black",
      fontWeight: "550",
      fontSize: 16,
      fontFamily: "Helvetica",
      float: "left",
      marginLeft: 20,
      marginTop: 10
    },
    userInfo: {
      fontSize: 28,
      color: "#ff9052",
      fontWeight: "700"
    },
    btn: {
      marginTop: 30,
      backgroundColor: "#ff9052",
      borderRadius: 16,
      width: 150,
      height: 50,
      alignItems: "center",
      padding: "6px",
      elevation: 3
    },
    body: {
      backgroundColor: "white",
      height: 700,
      alignItems: "center"
  
    },
    text: {
      color: "white",
      margin: 15,
      fontWeight: '600',
    },
    food: {
        backgroundSize: "contain",
        height: 30,
        backgroundColor: "#FEF3E7",
        alignContent: "flex-start",
        borderRadius:16,
      },
    name2: {
    fontSize: 14,
    color: "medium",
    fontWeight: "400",
    fontFamily: "Helvetica",
    marginTop: 0,
    marginBottom: -40,
    },
    name3: {
        fontSize: 9,
        color: "medium",
        fontWeight: "400",
        fontFamily: "Helvetica",
        marginTop: 45,
        marginBottom: -20,
    },
    name4: {
        fontSize: 14,
        color: "medium",
        fontWeight: "400",
        fontFamily: "Helvetica",
        marginTop: -20,
        marginBottom: -40,
        },
    name5: {
        fontSize: 14,
        color: "medium",
        fontWeight: "400",
        fontFamily: "Helvetica",
        marginTop: -20,
        marginBottom: -40,
        },
    total: {
        fontSize: 10,
        color: "medium",
        fontWeight: "400",
        fontFamily: "Helvetica",
        marginTop: -20,
        marginBottom: -40,
        },
    totalprice: {
        fontSize: 20,
        color: "medium",
        fontWeight: "400",
        fontFamily: "Helvetica",
        marginTop: -20,
        marginBottom: -40,
        },
    headerContent2: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        height: 20,
        alignItems: "center",
        alignSelf:'flex-start',
        display: "flex",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
      },
        
});