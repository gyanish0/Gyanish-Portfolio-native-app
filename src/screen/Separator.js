import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Separator = () => {
  return <View style={styles.separator}></View>;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    // backgroundImage:
    //   "linear-gradient(to right top,#3654e7,#5c52e9,#784feb,#914aeb,#a745ea,#7d68fb,#4d7fff,#0091ff,#00acfd,#00bdd9,#00c8a3,#6bcc70)",
    backgroundColor: "aquamarine",
    height: 6,
    width: "40%",
    borderRadius: 3,
    margin: 16,
  },
});
