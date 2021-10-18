import React, { useState } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import { Obutton } from "../../../../../components/ButtomCustom/index";
import { styles } from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";

const Profile = () => {
  return (
    <ScrollView>
      <View>
        <Image
          style={styles.image}
          source={require("../../../../../assets/profileIcon.png")}
        />
        <AntDesign
          style={{
            bottom: 300,
            alignSelf: "center",
            fontSize: 70,
            color: "blue",
            backgroundColor: "white",
            borderRadius: 50,
          }}
          name="user"
        />
        <Text style={styles.text}>
          James Chimdindu {"\n"} jameschimdindu@gmail.com{" "}
        </Text>

        <View >
          <Text style={styles.total}>
            TOTAL{"\n"} BOOKINGS {"\n"}10
          </Text>
        </View>

        <View >
          <Text style={styles.point}>
            POINTS {"\n"}EARNED {"\n"} 25{" "}
          </Text>
        </View>
      </View>
      <View style={styles.Bttn}>
        <Obutton title="Edit Profile" style={styles.edit} />
        <AntDesign
          style={{ right: 90, bottom: 40, fontSize: 25, color: "#ffffff" }}
          name="user"
        />
        <AntDesign
          style={{ left: 90, bottom: 65, fontSize: 25, color: "#ffffff" }}
          name="right"
        />
      </View>

      <View style={styles.Bttn2}>
        <Obutton title="Settings" style={styles.edit} />
        <AntDesign
          style={{ right: 90, bottom: 40, fontSize: 25, color: "#ffffff" }}
          name="setting"
        />
        <AntDesign
          style={{ left: 90, fontSize: 25, bottom: 65, color: "#ffffff" }}
          name="right"
        />
      </View>

      <View style={styles.Bttn3}>
        <Obutton title="Logout" style={styles.edit} />
        <AntDesign
          style={{ right: 90, bottom: 40, fontSize: 25, color: "red" , fontWeight:"bold"}}
          name="logout"
        />
        <AntDesign
          style={{ left: 90, fontSize: 25, bottom: 65, color: "#ffffff" }}
          name="right"
        />
      </View>
    </ScrollView>
  );
};
export default Profile;
