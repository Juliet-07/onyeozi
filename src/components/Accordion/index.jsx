import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import Up from "react-native-vector-icons/AntDesign";
import Profile from "react-native-vector-icons/Ionicons"
const Accordion = ({ Title }) => {
  const [show, setShow] = useState(false);

  return (
    <ScrollView>
      {/* Pickup Details */}
      <View style={styles.AccordionContainer1}>
        <View style={styles.TitleContainer}>
          <TouchableOpacity style={styles.TextContainer}>
            <Text style={styles.TitleContainerText}>{Title}</Text>
            <TouchableOpacity
              onPress={() => setShow(!show)}
              style={styles.iconContainer}
            >
              <Up name={!show ? "down" : "up"} style={styles.icon} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <View style={styles.ContentContainer}></View>
        {show && (
          <>
            <View style={styles.content}>
              <View style={styles.FullNameContainer}>
                <Text style={styles.FullName}>njxdkmkc</Text>
                <View style={styles.FullNameIcon}> 
                 <Profile name="person" size={20} color={"rgba(75, 77, 76, 0.4)"}/>
                </View>
              </View>
              <View style={styles.AddressContainer}>
                <Text style={styles.Address}>njxdkmkck,ck</Text>
                <View style={styles.FullNameIcon}> 
                 <Profile name="location-sharp" size={20} color={"rgba(75, 77, 76, 0.4)"}/>
                </View>
              </View>
              <View style={styles.NumberContainer}>
                <Text style={styles.Number}>njxdkmkck,ck</Text>
                <View style={styles.FullNameIcon}> 
                 <Profile name="ios-call" size={20} color={"rgba(75, 77, 76, 0.4)"}/>
                </View>
              </View>
            </View>
          </>
        )}
      </View>

      {/* the end */}
    </ScrollView>
  );
};
export default Accordion;
