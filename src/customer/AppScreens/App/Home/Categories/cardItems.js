import React, { useState } from "react";
import Food from "react-native-vector-icons/Ionicons";
import Microchip from "react-native-vector-icons/Ionicons"

import Shirtoutline from "react-native-vector-icons/Ionicons";
import Drugpack from "react-native-vector-icons/AntDesign";
import Document from "react-native-vector-icons/MaterialCommunityIcons";
import Testtube from "react-native-vector-icons/Fontisto"
import Art from "react-native-vector-icons/Feather"
import Equipment from "react-native-vector-icons/AntDesign"
import card2 from "../../../../../assets/card2.png";
import card5 from "../../../../../assets/card5.png";
import card7 from "../../../../../assets/card7.png";
import card8 from "../../../../../assets/card.7.png";
export const cardItems = [
  {
    image: <Food name="ios-fast-food-outline" size={50} color="gray" />,
    text: "Food and Groceries ",
    id: 1,
  },
  {
    image: <Microchip name="hardware-chip-outline" size={50} color="gray"/>,
    text: "Electronics and Accessories",
    id: 2,
  },
  {
    image: <Shirtoutline name="shirt-outline" color="gray" size={50} />,
    id: 3,
    text: "Fashion and Accessories",
  },
  {
    image: <Drugpack name="medicinebox" size={50} color="gray"/>,
    id: 4,
    text: "Health Products",
  },
  {
    image: <Testtube name="laboratory" size={50} color="gray"/>,
    id: 5,
    text: "Industrial/Scientific",
  },
  {
    image: (
      <Document name="book-multiple-outline" size={50} color="gray" />
    ),
    id: 6,
    text: "Books/ Documents ",
  },
  {
    image: <Equipment name="tool" size={50} color="gray" />,
    id: 8,
    text: "Equipment",
  },
  {
    image:<Art name="pen-tool"  color="gray" size={50}/>,
    id: 7,
    text: "Art and Designs",
  },
];