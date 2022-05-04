import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Separator from "./Separator";
const WorkData = [
  {
    company: "Mobiloitte Technology",
    designation: "Software Engineer",
    dateJoining: "28-09-2021",
    dateEnd: "20-03-2022",
    companyLogo:
      "https://media-exp1.licdn.com/dms/image/C510BAQFCvA114S55Mw/company-logo_200_200/0/1572937998398?e=2147483647&v=beta&t=Zc1VeR2Y60K0WELYOZpG-ZzIG-8AJviOlhMjmvSMfxI",
    work: "Work as a software trainee for three month after three month i get OnBoard as react developer to develop the responsive website with api intigration.",
  },
  {
    company: "LuminoGuru Pvt. Ltd.",
    designation: "Associate Software Engineer",
    dateJoining: "30-03-2022",
    dateEnd: "Present",
    companyLogo:
      "data:image/jpeg;base64,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",
    work: "Work as a front-end developer. my day-to-day task is to develop the UI and also integrate the functionality to make a interactive website with the help of ReactJs.",
  },
];
const Work = () => {
  return (
    <View>
      <Text style={styles.heading}>Work</Text>
      <Separator />
      <View>
        {WorkData.map((data, i) => (
          <View key={i} style={{ paddingBottom: 25 }}>
            <View style={{ paddingBottom: 15 }}>
              <Text>{data.company}</Text>
              <Text>{data.designation}</Text>
              <Text style={{ color: "grey" }}>
                {data.dateJoining}-{data.dateEnd}
              </Text>
            </View>
            <View style={styles.data2}>
              <Text style={styles.texdt}>{data.work}</Text>
              <Image
                source={{ uri: data.companyLogo }}
                style={styles.iconImg}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Work;

const styles = StyleSheet.create({
  iconImg: {
    width: 60,
    height: 60,
  },
  data2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  texdt: {
    width: "70%",
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
  },
});
