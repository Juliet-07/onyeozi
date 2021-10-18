import React, { useState } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import { Obutton } from "../../../../../components/ButtonCustom"
import { styles } from "./styles";

const Notification = () => {
  return (
      <View>

      <View >
      <Text style={styles.notify}>NOTIFICATION</Text>
        <Text style={styles.notices}> No notices right now!{"\n"}You’re up-to-date </Text>
      </View>

        <View style={styles.edit}>
        <Obutton title="Go back to Profile "  />
        </View>
      
      </View>
  );
};
export default Notification;
