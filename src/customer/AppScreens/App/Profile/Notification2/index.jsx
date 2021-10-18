import React, { useState } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import { Obutton } from "../../../../../components/ButtomCustom/index";
import { styles } from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";

const Notification2 = () => {
  return (
      <View>
      <Text style={styles.notification}>NOTIFICATION</Text>
      <View>
          <Text style={styles.notify}>Notification 1</Text>
          <Text style={styles.date}>Aug 4, 1:00 PM</Text>
          <Text style={styles.notify}>Notification 1</Text>
          <Text style={styles.date}>Aug 4, 1:00 PM</Text>
          <Text style={styles.notify}>Notification 1</Text>
          <Text style={styles.date}>Aug 4, 1:00 PM</Text>
          <Text style={styles.notify}>Notification 1</Text>
          <Text style={styles.date}>Aug 4, 1:00 PM</Text>
          <Text style={styles.notify}>Notification 1</Text>
          <Text style={styles.date}>Aug 4, 1:00 PM</Text>
          <Text style={styles.notify}>Notification 1</Text>
          <Text style={styles.date}>Aug 4, 1:00 PM</Text>

      </View>

    
      </View>
  );
};
export default Notification2;
