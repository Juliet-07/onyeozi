import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import Bike from "react-native-vector-icons/Fontisto";
import Truck from "react-native-vector-icons/Fontisto";
import Minivan from "react-native-vector-icons/FontAwesome5"; 

export const items = [
  {
    Image: <Bike name="motorcycle" size={45} />,
    text: "Ideal for light weight items and documents.",
    id: 1,
    title: "Motor Bike"
  },
  {
    Image: <Icon name="car" size={45} />,
    text: "Ideal for items that will fit in a car’s boot.",
    id: 2,
    title: "Car"
  },
  {
    Image: <Minivan name="truck" size={45} />,
    id: 3,
    text: "Ideal for big and bulky items  such as Refrigerator.",
    title: "Mini Van"
  },
  {
    Image: <Truck name="truck" size={45} />,
    id: 4,
    text: "Perfect for moving large items such as furniture.",
    title: "Truck"
  }
];