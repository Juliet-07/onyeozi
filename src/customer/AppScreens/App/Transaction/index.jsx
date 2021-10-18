import React from "react";
import { View, Text } from "react-native";
import TabRoute from "./TabRoute";
import Header from "../../../../components/CustomTransactionHeader";

const index = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header NumberOfTransaction="2" Parcel="687gadgjhadu" Time="27/08/2020" />
      <TabRoute />
    </View>
  );
};

export default index;
