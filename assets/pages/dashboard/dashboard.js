import React, { Component } from "react";
import {StatusBar,SafeAreaView, ScrollView, StyleSheet, Pressable, Text, View, Image } from "react-native";
import profile from "../../choemcaibong.png";
import Order from "./order";

export default class Dashboard extends Component {
  render() {
    return (
      
      <SafeAreaView style={styles.containerScroll}>
      <ScrollView style={styles.scrollView}>
      <View style={{
        height: 1230
      }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>Chào bạn yêu,</Text>
              <Text style={styles.userInfo}>La Sắc Mầm</Text>
            </View>
            <View>
              <Image
                style={styles.avatar}
                source={profile}
              />
            </View>
          </View>
        </View>

        <View style={styles.body}>
            {/* <Image source = {"../../choemcaibong.png"}/> */}
            <View style={[styles.container,{flexDirection: 'row'}]}>
                
                  
                <View style={{flex: 1}}>
                  <View style={styles.head}>
                    <Text style={{
                        alignSelf:'center',
                    }}>Bạn còn</Text>
                    <Text style={{
                        alignSelf: 'left',
                        alignContent: 'left',
                        alignItems:'left',
                        fontSize: 80,
                        color: 'red',
                        fontWeight: 1000,}}>
                        10
                    </Text>
                    <Text style={{
                        alignSelf:'center',
                    }}>đơn hàng</Text>  
                  </View>  
                </View>
                
                <View style={{flex: 2}}>

                  <View style={styles.head2}>
                    <Text>Đang vận chuyển</Text>
                    <Text style={{
                        alignSelf: 'left',
                        fontSize: 30,
                        color: 'green',
                        fontWeight: 500,}}>
                        12
                    </Text>
                    {/* <Text>đơn hàng</Text>   */}
                  </View>  

                  <View style={styles.head3}>
                    <Text>Được đặt trước</Text>
                    <Text style={{
                        alignSelf: 'left',
                        fontSize: 30,
                        color: 'red',
                        fontWeight: 500,}}>
                        03
                    </Text>
                    {/* <Text>đơn hàng</Text>   */}
                  </View> 

                </View>       
            </View>

            <View style= {styles.head3}>
                <Text style={{
                  marginTop: 20,
                  fontSize: 20,
                  fontWeight: 700,
                  marginLeft:30,
                }}>Đơn hàng của bạn</Text>
            </View>   
            <View style={{
              width: 350
            }}>
                <Order></Order>  
                <View style={{
                  marginVertical:10
                }}></View>
                <Order></Order>  
                <View style={{
                  marginVertical:10
                }}></View>
                <Order></Order>  
                
            </View>
        </View>
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,

  },
  scrollView: {
    backgroundColor: 'white',
    // marginHorizontal: 20,
    // automaticallyAdjustContentInsets: true,
    },
  header: {
    backgroundSize: "contain",
    height: 150,
    backgroundColor: "#FEF3E7",
  },

  headerContent: {
    padding: 30,
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  avatar: {
    width: 100,
    height: 100,
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
    fontSize: 18,
    color: "medium",
    fontWeight: "400",
    fontFamily: "Helvetica"
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
  RectangleShapeView: {
    marginTop: 20,
    width: "80%",
    height: 80,
    backgroundColor: "white",
    color: "black",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    elevation: 3
  },
  head: {
    backgroundSize: "contain",
    height: 110,
    // backgroundColor: "#FEF3E7",
    alignContent: 'flex-start',
    display: 'flex',
    alignSelf: 'flex-start',
    width: 80,
    marginTop: 20,
    // padding: 10,
    // paddingLeft: 10,
    marginLeft: 90,
  },
  head2: {
    backgroundSize: "contain",
    height: 110,
    // backgroundColor: "#FEF3E7",
    // alignContent: 'flex-end',
    // display: 'flex',
    alignSelf: 'flex-start',
    width: 400,
    marginTop: 20,
    padding: 10,
    paddingLeft: 100,
  },
  head3: {
    backgroundSize: "contain",
    height: 110,
    // backgroundColor: "#FEF3E7",
    // alignContent: 'flex-end',
    // display: 'flex',
    alignSelf: 'flex-start',
    width: 400,
    marginTop: -50,
    padding: 10,
    paddingLeft: 100,
  },
});