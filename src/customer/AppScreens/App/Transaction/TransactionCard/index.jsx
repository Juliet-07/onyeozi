import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const check = status => {
  let color;
  if(status === "pending"){
    return color = '#ffc107'
  } else if(status === "Assigned"){
    return color = "#1976d2"
  } else if (status === "On Delivery"){
    return color = "#fdd4cd"
  } else {
    return color = "green"
  }
}
const index = ({ data }) => {
  const { parcelNo, date, deliverTo, location, status } = data;
 
  return (
    <View style={styles.process}>
      <View style={{...styles.pro, 
      backgroundColor: check(status)}}>
        <Text style={styles.parcelNumber}>{parcelNo}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.details}>
        <View>
          <View>
            <Text style={{fontWeight: 'bold', marginTop: 5}}>Deliver To: </Text>  
            <Text>{deliverTo}</Text>
          </View>
            
          <View>
            <Text style={{fontWeight: 'bold', marginTop: 5}}>Location</Text>
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
        <Text style={styles.assigned}>{status}</Text>
      </View>
    </View>
  );
};

export default index;
