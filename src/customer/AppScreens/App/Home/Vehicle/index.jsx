import React from "react";
import { View, ScrollView } from "react-native";
import { styles } from "./styles";
import Header from "../../../../../components/customHeader";
import SubInfoCards from "../../../../../components/subInfoCards";
import Card from "./card";
import { items } from "./data";
const Vehicle = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View style={{ flex: 1,backgroundColor:"white", }}>
      <View style={styles.headerContainer}>
        <Header Title="Step 1 of 5" />
      </View>
      <ScrollView
        style={{ width: "90%", alignSelf: "center" }}
        showsVerticalScrollIndicator={false}
      >
        <SubInfoCards
          title="Choose Transport Type"
          body="Which transport type is suitable to carry your item(s)."
        />
        <View style={styles.CardContainer}>
          {items.map((card, index) => (
            <Card card={card} navigate={navigate} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default Vehicle;
