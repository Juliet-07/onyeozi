import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();

import Transaction from "../../../../customer/AppScreens/App/Transaction";

const index = () => ( 
    <Navigator  headerMode="none">
      <Screen name="Transaction" component={Transaction} />
    </Navigator> 
);
export default index;
