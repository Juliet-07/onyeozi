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

const Terms = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.skp}>Terms of Service </Text>
      <Image
        style={styles.body}
        source={require("../../../assets/Terms.png")}
      />
      <View style={styles.txt}>
        <Text style={styles.top}>We’ve updated our Terms of Service</Text>
        <Text style={styles.dr}>
          We have curated our Terms of Service and will constantly review it in
          order to serve you better. To find out more, please visit our website,
          www.onyeozi.com/terms of service Note that you have to accept these
          terms before signing to our service.
        </Text>
      </View>
    </View>
  );
};
export default Terms;

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
    color: "blue",
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
    width: "12%",
  },
  dr: {
    fontSize: 15,
    marginTop: "1%",
    color: "#4B4D4C",
    width: "19%",
    justifyContent: "center",
  },
  num: {
    color: "blue",
    alignSelf: "flex-end",
    marginRight: 50,
    fontFamily: "Panton",
    fontWeight: "bold",
    marginTop: 50,
  },
});
