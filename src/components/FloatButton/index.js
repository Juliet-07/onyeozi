import React from "react";
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const onPressFunc = () => console.log("hiiiiiii");
export const FloatButton = ({ icon, name, color, symbolName, onPressFunc }) => (
  <View>
    <TouchableOpacity
      onPress={() => onPressFunc()}
      style={styles.add_btn}
    >
      {icon ? (
        icon
      ) : (
        <Ionicons
          name={name || "ios-add"}
          color={color ? color : "#fff"}
          size={30}
        />
      )}
    </TouchableOpacity>
    {symbolName ? <Text style={styles.text}>{symbolName}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: { position: "absolute", bottom: 20, right: 10 },
  add_btn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f8bd17",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
  },
  float: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 12, top: 12, textAlign: "center" },
});
