import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { styles } from "./styles";

 const card = ({card, navigate}) => {
  return ( 
    <TouchableOpacity
    key={card.id}
      style={{
        width: "100%", 
        borderRadius: 12,
        elevation: 4,
        borderWidth:0.5,
        borderColor:"gray",
        backgroundColor: '#fff',
        margin: 8,
        height: 92,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        paddingHorizontal: 10
      }} 
      onPress={() => navigate("Categories")}
    > 
    <View style={{ width: '25%',  alignItems: 'center'}}>
        <Text>{card.Image}</Text>
    </View>
      <View style={{ width: '75%',paddingLeft: 10, justifyContent: "center" }}>
        <Text
          style={{ 
            color: "#4B4D4C",
            fontSize: 14, 
            fontWeight: "bold"
          }}
        >
          {card.title}
        </Text>
        <Text
          style={{ 
            color: "#4B4D4C",
            fontSize: 12, 
          }}
        >
          {card.text}
        </Text>
      </View>
    </TouchableOpacity> 
  )
}

export default card
 
