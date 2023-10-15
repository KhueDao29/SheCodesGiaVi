import React, { Component } from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import profile from "../personal/profile.png";

export default class UserProfileView extends Component {
  render() {
    return (
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
          <Pressable style={styles.RectangleShapeView}>
            <Text style={styles.headtText}>Địa chỉ</Text>
            <Text style={styles.SubjectText}>Văn phòng Cresent Mall Quận 7</Text>
          </Pressable>
          <Pressable style={styles.RectangleShapeView}>
            <Text style={styles.headtText}>Giới tính</Text>
            <Text style={styles.SubjectText}>Nữ</Text>
          </Pressable>
          <Pressable style={styles.RectangleShapeView}>
            <Text style={styles.headtText}>Số điện thoại</Text>
            <Text style={styles.SubjectText}>0935 789 453</Text>
          </Pressable>
          <Pressable style={styles.RectangleShapeView}>
            <Text style={styles.headtText}>Ngày lập tài khoản</Text>
            <Text style={styles.SubjectText}>02/09/2023</Text>
          </Pressable>
          <View>
            <Pressable style={styles.btn}>
              <Text style={styles.text}>Đăng xuất</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundSize: "contain",
    height: 200,
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
  }
});
