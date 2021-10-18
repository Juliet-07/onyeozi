import React from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
} from "react-native";
import { styles } from "./styles";

const Unsuccessful = () => {
  return (
    <ScrollView>
    <View style={styles.container}>

      <Image
        style={styles.body}
        source={require("../../../../../assets/unsuccessful.png")}
        style={styles.image}
      />
        <Text style={styles.unsuccess}>Payment Unsuccessful!!!</Text>
        <Text style={styles.details}>
          An error occured while making payment.
        </Text>
    </View>
    </ScrollView>
  );
};
export default Unsuccessful;
