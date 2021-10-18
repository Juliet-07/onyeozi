import React, { useEffect } from "react";
import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import {useQuery} from '@apollo/client';
import { FloatButton } from "../../../../../components/FloatButton";
import AsyncStorage from "@react-native-community/async-storage";
import {GET_CURRENT_USER} from '../../../../../customer/gql/queries';
import Loader from '../../../../../components/Loader';
import Error from '../../../../../components/ErrorComponent';
const HomeBooking = ({ navigation }) => {
  useEffect(() => {
    const removeVerify = async () => {
      await AsyncStorage.removeItem("verify");
      // await AsyncStorage.removeItem("token");
    };
    removeVerify();
  }, []);
  const {loading, error, data} = useQuery(GET_CURRENT_USER);
if(loading) return <Loader />
if(error) return <Error />
console.log(data.getCurrentUser.fullName, 'data')
  const { navigate } = navigation;
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", flex: 2 }}>
        <Image
          style={styles.picture}
          source={require("../../../../../assets/booking.png")}
        />
        <View style={{...styles.message,width: '90%', alignSelf: 'center'}}>
          <Text style={styles.text1}><Text style={{fontWeight: 'normal'}}>Welcome</Text> {data.getCurrentUser.fullName} {'\n'} You have not made a booking</Text>
          <Text style={styles.text}>
            Press the + icon at the right side{"\n"}of the screen to make a
            booking
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "flex-end",
          justifyContent: "flex-end",
          flex: 0.9,
          alignSelf: "flex-end",
        }}
      >
        <FloatButton onPressFunc={() => navigate("Vehicle")} />
      </View>
    </View>
  );
};
export default HomeBooking;
