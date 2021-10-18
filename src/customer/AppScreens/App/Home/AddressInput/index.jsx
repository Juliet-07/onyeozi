import React, { useState } from "react";
import { InputPlain } from "../../../../../components/InputCustom/index";
import { View, Text, TouchableOpacity } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { styles } from "./styles";
// import { Formik } from "formik";
import theme from "../../../../../config/theme/index";
import { Obutton } from "../../../../../components/ButtomCustom/index";

const AddressInput = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.container}>
      <InputPlain
        name="Address"
        value={search}
        onChangeText={text => setSearch(text)}
        placeholder="Search your address"
        rightIcon={
          <EvilIcons name="search" color="#00000080" size={theme.iconSize} />
        }
      />

      <Text style={styles.headerText}>FAVORITES</Text>

      <View style={{ position: "relative" }}>
        <View style={styles.homeAddress}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="location-sharp"
              color="#00000080"
              size={theme.iconSize}
            />
            <Text style={styles.leftIcon}>Home Address</Text>
          </View>

          <TouchableOpacity>
            <Entypo name="plus" color="#00000080" size={theme.iconSize} />
          </TouchableOpacity>
        </View>

        <View style={styles.workAddress}>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="briefcase" color="#00000080" size={theme.iconSize} />
            <Text style={styles.leftIcon}>Work Address</Text>
          </View>

          <TouchableOpacity>
            <Entypo name="plus" color="#00000080" size={theme.iconSize} />
          </TouchableOpacity>
        </View>

        <View style={styles.otherAddress}>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="location" color="#00000080" size={theme.iconSize} />
            <Text style={styles.leftIcon}>Other Address</Text>
          </View>
          <TouchableOpacity>
            <Entypo name="plus" color="#00000080" size={theme.iconSize} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonView}>
        <Obutton
          title="Select from Map"
          titleStyle={{ fontSize: 20 }}
          type="outline"
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
};
export default AddressInput;
