import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { styles } from "./styles";

const PaymentSuccessful = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      
        <Image
          style={styles.image}
          source={require("../../../../../assets/success.png")}
        />
      <Text style={styles.success}>Payment Successful!!!</Text>
      <Text style={styles.details}>
        You have successfully made payment for{"\n"}the delivery of your goods.
      </Text>
    </View>
    </ScrollView>
  );
};
export default PaymentSuccessful;
