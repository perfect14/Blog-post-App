import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Blog({
  text1,
  text2,
  text3,
  src,
  profileImage,
  name,
  time,
  navigation,
  item,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.outerContainer}>
        <View style={styles.particularContainer}>
          <View>
            <View style={styles.imageBorderHorizontal}></View>
            <View style={styles.imageBorderVertical}></View>
          </View>
          <View>
            <View style={styles.imageContainer}>
              <Image source={src} style={{ width: 100, height: 100 }} />
              <View style={styles.topicContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Beauty", item)}
                >
                  <Text style={styles.headerText}> {text1}</Text>
                  <Text style={styles.headerText}> {text2}</Text>
                  <Text style={styles.headerText}> {text3}</Text>
                </TouchableOpacity>

                <Image source={profileImage} style={styles.profileImage} />
                <View style={styles.profileTextContainer}>
                  <Text style={styles.profileText}> {name}</Text>
                  <Entypo name="dot-single" size={24} color="grey" />
                  <Text style={styles.profileText}> {time}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBorderHorizontal: {
    width: 90,
    height: 10,
    backgroundColor: "pink",
    borderColor: "black",
  },
  imageBorderVertical: {
    width: 10,
    height: 80,
    backgroundColor: "pink",
    borderColor: "black",
  },
  imageContainer: {
    position: "absolute",
    left: 15,
    right: 15,
    bottom: -55,
    flexDirection: "row",
  },
  profileTextContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 30,
  },
  profileImage: {
    width: 20,
    height: 25,
    borderRadius: 30,
    position: "absolute",
    top: 100,
    left: 5,
  },
  profileText: {
    color: "gray",
  },
  topicContainer: {
    paddingLeft: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  outerContainer: {
    marginTop: 20,
    paddingLeft: 10,
    paddingTop: 5,
    width: 450,
    height: 170,
    borderColor: "black",
    backgroundColor: "white",
  },
  particularContainer: {
    marginTop: 15,
  },
  container: {
    backgroundColor: "#fff2fd",
  },
});