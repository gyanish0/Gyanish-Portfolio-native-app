import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useEffect, useState } from "react/cjs/react.development";
import { imgBan } from "../../assets/coding.png";
import Contacts from "./Contacts";
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";
import Work from "./Work";
export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.aboutInfo}>
        Hello There 👋, I am {"\n"}
        <Text style={styles.infoName}>Gyanish Shrivastava</Text>
        {"\n"}I love experimenting with the web.
      </Text>
      <Image
        source={require("../../assets/coding.png")}
        style={styles.banImg}
      />
      <View style={{ paddingBottom: 20 }}>
        <Social />
      </View>
      <View style={{ paddingBottom: 20 }}>
        <Projects />
      </View>
      <View style={{ paddingBottom: 20 }}>
        <Skills />
      </View>
      <View style={{ paddingBottom: 20 }}>
        <Work />
      </View>
      <View style={{ paddingBottom: 20 }}>
        <Contacts />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    color: "#000",
    marginTop: 100,
    marginHorizontal: 15,
  },
  infoName: {
    fontSize: 32,
    color: "blue",
  },
  aboutInfo: {
    color: "#000",
    fontSize: 24,
  },
  banImg: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    resizeMode: "stretch",
  },
});
