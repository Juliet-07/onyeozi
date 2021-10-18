import React from "react";
import { View, Modal, Text, TouchableOpacity } from "react-native";
import Check from "react-native-vector-icons/AntDesign";
import { color } from "react-native-reanimated";
import { styles } from "./styles";

const PopUpOvaryCard = ({
  Notification1,
  Notification2,
  Notification3,
  Notification4,
  Notification5,
  Notification6
}) => {
  return (
    <View style={styles.screen}>
      <View
        style={{
          height: 230,
          width: 290,
          borderRadius: 10,
          elevation: 120,
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Check name="checkcircleo" size={20} color="green" />
          <Text
            style={{
              fontSize: 20,
              marginBottom: 24,
              fontWeight: "bold",
              color: "black",
              marginLeft: 4
            }}
            t
          >
            {Notification1}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,

            // textAlign:"center",
            width: 210
          }}
        >
          {Notification2}
        </Text>
        
        <TouchableOpacity
          style={{
            fontSize: 19,

            marginTop: 20
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#1976D2",
              fontWeight: "bold"
            }}
          >
            {Notification6}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PopUpOvaryCard;
