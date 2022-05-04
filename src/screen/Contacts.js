import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import React from "react";
import Social from "./Social";
import Separator from "./Separator";

const Contacts = () => {
  return (
    <View>
      <Text style={styles.heading}>Contacts</Text>
      <Separator />
      <Text>Want to get in touch? Contact me on any of the platform</Text>
      <View>
        <Social />
      </View>
      <View style={styles.btn1}>
        <TouchableOpacity
          style={styles.mainBody1}
          onPress={() =>
            Linking.openURL(
              `https://drive.google.com/file/d/1IBevdOWMsUZ6IHKaLfZy3D2qYWhj5WcG/view?usp=drivesdk`
            )
          }
        >
          <Image
            source={require("../../assets/icons/download-pdf.png")}
            style={styles.imgInfo}
          />
          <Text style={{ color: "#000", marginHorizontal: 10 }}>
            Download Resume
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  imgInfo: {
    width: 30,
    height: 30,
  },
  mainBody1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "aquamarine",
    width: "60%",
    borderRadius: 5,
    justifyContent: "center",
    padding: 8,
  },
  btn1: {
    flexDirection: "row",
    justifyContent: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
  },
});
