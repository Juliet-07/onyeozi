import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Obutton } from "../../../../../components/ButtonCustom";
import Header from "../../../../../components/customHeader";


import Add from "react-native-vector-icons/AntDesign";

import SubInfoCards from "../../../../../components/subInfoCards";
import {cardItems} from './cardItems';
const Categories = ({ navigation }) => {
  const { navigate } = navigation;
  const [cardState, setCardState] = useState(0);
  const handleChangeTxtColor = (index) => {
    setCardState(index);
    console.log(index, cardState);
  };
  
  const [isPress, setIsPress] = React.useState(true);

  const touchProps = {
    // <-- "onPress" is apparently required
  };

  return (
    <View style={{ flex: 1,backgroundColor:"white" }}>
      <Header Title="Step 2 of 5" />
      <ScrollView style={{ alignSelf: "center", width: "100%" , }}>
        <SubInfoCards
          title="Category"
          body="Select the category your item falls in."
        />
        <View style={styles.CardContainer}>
          {/* -------------mapped card--------------- */}
          {cardItems.map((card, index) => (
            <View key={card.id}>
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 130,
                  borderRadius: 12,
                  elevation: 5,
                  margin: 15,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: `${
                    cardState === index + 1 ? "yellow" : "white"
                  }`,
                }}
                // onPress={() => handleChangeTxtColor(index + 1)}
                onPress={() => navigate("CategoryDetail")}
              >
                {/* <Image source={card.image} style={styles.image} /> */}
                <Text>{card.image}</Text>
                <Text
                  style={{
                    height: 35,
                    color: "#000",

                    fontSize: 12,
                    textAlign: "center",
                    width: 95,
                  }}
                >
                  {card.text}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity
            style={{...styles.card, marginBottom: 25}}
            onPress={() => navigate("OtherDetail")}
          >
            <View>
              <Add name="pluscircleo" size={25} color="#000" />
            </View>

            <View >
              <Text style={{marginTop: 5}}>Other</Text>
            </View>
          </TouchableOpacity>
        </View>

        
      </ScrollView>
    </View>
  );
};
export default Categories;
