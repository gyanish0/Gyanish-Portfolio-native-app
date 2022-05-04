import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import Separator from "./Separator";

const SkillsData = [
  {
    type: "Frontend",
    list: [
      {
        name: "ReactJS",
        icon: require("../../assets/icons/react-js.png"),
      },
      {
        name: "Material Ui",
        icon: require("../../assets/icons/google-material-design.png"),
      },
      {
        name: "HTML5",
        icon: require("../../assets/icons/html.png"),
      },
    ],
    list2: [
      {
        name: "CSS3",
        icon: require("../../assets/icons/css.png"),
      },
      {
        name: "JavaScript",
        icon: require("../../assets/icons/javascript-programming-language.png"),
      },
    ],
    list3: [
      {
        name: "React Native",
        icon: require("../../assets/icons/react-js.png"),
      },
      {
        name: "Figma",
        icon: require("../../assets/icons/figma.png"),
      },
    ],
  },
];
const Skills = () => {
  return (
    <View>
      <Text style={styles.heading}>Skills</Text>
      <Separator />
      {SkillsData?.map((data, i) => (
        <View key={i}>
          <Text style={styles.subheading}>{data.type}</Text>
          <View style={styles.data1}>
            {data?.list?.map((skill, j) => (
              <View key={j}>
                <Text
                  style={{
                    fontSize: 18,
                    paddingBottom: 8,
                    textAlign: "center",
                  }}
                >
                  {skill.name}
                </Text>
                <Image source={skill.icon} style={styles.iconImg} />
              </View>
            ))}
          </View>
          <View style={styles.data2}>
            {data?.list2?.map((skill, k) => (
              <View key={k}>
                <Text
                  style={{
                    fontSize: 18,
                    paddingBottom: 8,
                    textAlign: "center",
                  }}
                >
                  {skill.name}
                </Text>
                <Image source={skill.icon} style={styles.iconImg} />
              </View>
            ))}
          </View>
          <View style={styles.data3}>
            {data?.list3?.map((skill, l) => (
              <View key={l}>
                <Text
                  style={{
                    fontSize: 18,
                    paddingBottom: 8,
                    textAlign: "center",
                  }}
                >
                  {skill.name}
                </Text>
                <Image source={skill.icon} style={styles.iconImg} />
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default Skills;

const styles = StyleSheet.create({
  iconImg: {
    width: 90,
    height: 90,
  },
  data1: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingBottom: 20,
  },
  data2: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingBottom: 20,
  },
  data3: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
  },
  subheading: {
    paddingBottom: 20,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
});
