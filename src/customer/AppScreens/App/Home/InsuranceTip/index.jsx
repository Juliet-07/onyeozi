import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import PopUpOvaryCard from "../../../../../components/PopUpOvaryCard";
const InsuranceTip = ({ navigation }) => {
  // const {navigate} = navigation
  return (
    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
      <PopUpOvaryCard
        Notification1="Insurance Tips"
        Notification2="Ticking  this option lets the"
        Notification3="company take charge of any"
        Notification4=" damages that might come to your"
        Notification5="  deliveries overtime but this attracts extra charge for every delivery you make. Untick this option if you
        do not want insurance.."
        Notification6="OK,GOT IT"

        // onPress={()=>  navigation.navigate("Signup")}
      />
    </View>
  );
};
export default InsuranceTip;
