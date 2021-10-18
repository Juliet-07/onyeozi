import React from "react";
import { styles } from "./styles";
import { View, ScrollView, Text, Image } from "react-native";

const TransactionHeader = ({NumberOfTransaction, Parcel, Time}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.NumberOfTransactionContainer}>
            <Text style={styles.NumberOfTransaction}>
            {NumberOfTransaction}
            </Text>
          </View>
          <View style={styles.writeUpContainer}>
            <Text style={styles.writeUp}>Products in delivery today</Text>
          </View>
          <View>
            <Image
              source={require("../../assets/approve.png")}
              style={styles.picture}
            />
          </View>
        </View>
        {/* <View style={styles.line}></View> */}
        {/* <View style={styles.secondPartOfHeader}>
          <Text style={styles.parcelNumber}>Your parcel with number </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.parcelNumber1}>{Parcel}</Text>
            <Text style={styles.parcelNumber}>is estimated at</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.parcelNumber1}>{Time}</Text>
            <Text style={styles.parcelNumber}>Today</Text>
          </View>
          
        </View> */}
      </View>
    </View>
  );
};
export default TransactionHeader;
