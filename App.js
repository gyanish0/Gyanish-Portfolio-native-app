import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Home from "./src/screen/Home";

export default function App() {
  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={styles.container}>
        <Home />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#000",
  },
});
