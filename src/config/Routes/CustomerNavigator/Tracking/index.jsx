import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();
import Tracking from "../../../../customer/AppScreens/App/Tracking";

const index = () => (
  <Navigator  headerMode="none">
    <Screen name="Tracking" component={Tracking} />
  </Navigator>
);
export default index;
