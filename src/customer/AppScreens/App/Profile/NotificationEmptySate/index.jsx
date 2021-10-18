import React, { useState } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import { Obutton } from "../../../../../components/ButtonCustom/index";
import { styles } from "./styles";
import Entypo from "react-native-vector-icons/Entypo";

const NotificationEmptyState = () => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <View>
          <Entypo name="arrow-long-left" color="#1976D2" size={25} />
        </View>
        <Text style={styles.notify}>NOTIFICATION</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("../../../../../assets/emptystate.png")}
        />
      </View>
      <View>
        <Text style={styles.notices}> No notices right now! </Text>
        <Text style={styles.details}>
          You can choose to enable push notifications so that you will be
          alerted whenever you have a notification.
        </Text>
      </View>

      <View style={styles.edit}>
        <Obutton title="Go back to Profile " />
      </View>
    </ScrollView>
  );
};
export default NotificationEmptyState;
