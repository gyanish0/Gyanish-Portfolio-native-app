import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const SocialData = [
  {
    platform: "Github",
    icon: require("../../assets/icons/github.png"),
    link: "https://www.github.com/gyanish0",
  },
  {
    platform: "Twitter",
    icon: require("../../assets/icons/twitter.png"),
    link: "https://www.twitter.com/srivastavgyani1",
  },
  {
    platform: "Instagram",
    icon: require("../../assets/icons/instagram.png"),
    link: "https://www.instagram.com/gyanishd",
  },
  {
    platform: "Linkedin",
    icon: require("../../assets/icons/linkedin.png"),
    link: "https://www.linkedin.com/in/gyanish-shrivastava-153582137",
  },
  {
    platform: "Email",
    icon: require("../../assets/icons/gmailsmall.png"),
    link: "mailto:srivastavagyanish@gmail.com",
  },
  {
    platform: "Mobile No.",
    icon: require("../../assets/icons/phonesmall.png"),
    link: "tel:7784855635",
  },

  {
    platform: "WhatsApp",
    icon: require("../../assets/icons/whatsappsmall.png"),
    link: "https://wa.me/7784855635",
  },
];

const Social = () => {
  return (
    <>
      <View style={styles.mainBody}>
        {SocialData.map((data, i) => (
          <TouchableOpacity
            key={i}
            style={styles.mainBody1}
            onPress={() => Linking.openURL(`${data.link}`)}
          >
            <Image source={data.icon} style={styles.iconImg} />
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default Social;

const styles = StyleSheet.create({
  iconImg: {
    width: 60,
    height: 60,
  },
  mainBody: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  mainBody1: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexWrap: "wrap",
  },
});
