import React, {useState} from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  Button
} from "react-native";
import { styles } from "./styles";
import Add from "react-native-vector-icons/AntDesign";



const Tracking = () => {
  const [parcel, setParcel]=useState("")
  return (
    <ScrollView >
      <View style={styles.container}>
        <ImageBackground
          style={styles.ImageBackground}
          source={require("../../../../assets/background.png")}
        >
          <View style={styles.tracking}>
            <Image
              source={require("../../../../assets/amico.png")}
              style={styles.map}
            ></Image>
          </View>
        </ImageBackground>
        <View style={styles.card}>
          <View
            style={{
              marginLeft: 20,
              marginTop: 12,
              marginRight: 20,
              fontSize: 16,
              color: "#4B4D4C"
            }}
          >
            <Text>
              Enter parcel number to track your {"\n"} parcel delivery status.
            </Text>
            <View
              style={{
                height: 60,
                borderColor: "gray",
                justifyContent: "center"
              }}
            >
              <TextInput
                style={{
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 0.6,
                  borderRadius: 5
                }}
                value={parcel}
                onChangeText={text=>setParcel(text)}
                // value="Enter parcel number"
              />
            </View>
            <Text style={styles.Applies}>
              Applies only to orders in processing
            </Text>

          <View style={styles.buttonandAdd}>
          <View style={styles.button}>
              <Button title="Submit" />

            </View>
            
          </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Tracking;
