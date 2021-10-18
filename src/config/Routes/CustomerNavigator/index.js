import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from "./Home";
import Transactions from "./Transactions";
import Tracking from "./Tracking";
import Profile from "./Profile";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { green } from "color-name";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";

const Tab = createBottomTabNavigator();

const index = () => ( 
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen 
       name="Home" 
       component={Home} 
       options={{
        tabBarLabel: 'Home',
        header:"null",
        headerShown:false,
        tabBarIcon: ({color, size}) => (
          <FontAwesome name="home" color={color} size={size + 7} />
        ),
      }}
       />
      <Tab.Screen 
      name="Transactions" 
      component={Transactions}
      options={{
        tabBarLabel: 'Transactions',
        tabBarIcon: ({color, size}) => (
          <FontAwesome name="dashboard" color={color} size={size + 7} />
        ),
      }}
      />
      <Tab.Screen 
      name="Tracking" 
      component={Tracking}
      options={{
        tabBarLabel: 'Tracking',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="ios-card" color={color} size={size + 7} />
        ),
      }}
      />
      <Tab.Screen 
      name="Profile"
       component={Profile} 
       options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="ios-person" color={color} size={size + 7} />
        ),
      }}
       />
    </Tab.Navigator> 
);
export default index;
