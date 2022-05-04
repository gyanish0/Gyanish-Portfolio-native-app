import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import Separator from "./Separator";
const ProjectData = [
  {
    id: 1,
    title: "Crypto Tracker",
    about:
      "Basically, this is a project of the crypto coin to get all the info of the particular coin history, coin price graph, rank of the coin, current price, and total coin market capitalization. ",
    tags: ["ReactJs", "Chart JS", "Material UI", "Rest Api"],
    demo: "https://crypto-tracker-gyanish.netlify.app/",
    github: "https://github.com/gyanish0/react-crypto-coin-tracker-gyanish",
    image: require("../../assets/Crypto-Tracker.png"),
  },

  {
    id: 1,
    title: "Mega Quiz Hub",
    about:
      "This is a quiz app website where anyone plays a quiz easily. Only enter your details and start the quiz. On this website many categories like science, art, computer, music, sports, history, sports, animals, etc, and also users select question difficulty levels easy, medium, and hard to play the quiz. ",
    tags: ["ReactJs", "Material UI", "Rest Api"],
    demo: "https://mega-quiz-hub.netlify.app/",
    github: "https://github.com/gyanish0/Mega-Quiz-App-Reactjs",
    image: require("../../assets/Mega-Quiz-Hub.png"),
  },
];
const Projects = () => {
  return (
    <View>
      <Text style={styles.heading}>Projects</Text>
      <Separator />
      {ProjectData.map((data, i, j) => (
        <View key={i} style={{ paddingBottom: 20 }}>
          <Image source={data.image} style={styles.banImg} />
          <Text style={styles.text1}>{data.title}</Text>
          <View style={styles.btnBox}>
            <View>
              {data.demo && (
                <TouchableOpacity
                  key={i}
                  style={styles.mainBody1}
                  onPress={() => Linking.openURL(`${data.demo}`)}
                >
                  <Text>Demo</Text>
                </TouchableOpacity>
              )}
            </View>
            <View>
              {data.github && (
                <TouchableOpacity
                  key={j}
                  style={styles.mainBody1}
                  onPress={() => Linking.openURL(`${data.demo}`)}
                >
                  <Text>Github</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={{ paddingBottom: 10, textAlign: "justify" }}>
            <Text>{data.about}</Text>
          </View>
          <Text>
            {data.tags.map((data, k) => (
              <TouchableOpacity key={k} style={styles.mainBody2}>
                <Text>{data}</Text>
              </TouchableOpacity>
            ))}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Projects;

const styles = StyleSheet.create({
  banImg: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    resizeMode: "stretch",
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
  },
  text1: {
    fontSize: 20,
    fontWeight: "600",
    paddingTop: 8,
  },
  mainBody1: {
    backgroundColor: "#7fffd4",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    fontSize: 16,
    justifyContent: "center",
    minWidth: 100,
    textAlign: "center",
  },
  mainBody2: {
    backgroundColor: "#7fffd4",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 5,
    fontSize: 16,
    justifyContent: "space-between",
  },
  btnBox: {
    flexDirection: "row",
    marginVertical: 10,
    textAlign: "center",
  },
});
