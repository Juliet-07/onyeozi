import React, { Component } from "react";
import {
  View,
  KeyboardType,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const Privacy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.skp}>Privacy Policy </Text>
      <Image
        style={styles.body}
        source={require("../../../../../assets/privacy.png")}
      />
      <View style={styles.txt}>
        <Text style={styles.top}>We’ve updated our Privacy Policy </Text>
        <Text style={styles.dr}>
          Before using Onye Ozi, please know that your interaction with our app
          and its content will be analyzed. We do this to understand who uses
          this content and how, so we can improve their experience. To see a
          more detailed description of this analysis, visit our website,
          www.onyeozi.com/privacypolicy.
        </Text>
      </View>
    </View>
  );
};
export default Privacy;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  body: {
    width: 300,
    height: 210,
    alignSelf: "center",
    margin: "20%",
  },
  skp: {
    color: "#1976D2",
    alignSelf: "flex-start",
    marginLeft: 40,
    fontFamily: "Panton",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    color: "#1976D2",
  },
  txt: {
    position: "absolute",
    fontSize: 17,
    paddingTop: 360,
    fontFamily: "Panton",
    color: "#4B4D4C",
    alignSelf: "flex-start",
    marginLeft: 40,
  },
  top: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dr: {
    fontSize: 15,
    marginTop: "1%",
    color: "#4B4D4C",
    width: "15%",
    justifyContent: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
