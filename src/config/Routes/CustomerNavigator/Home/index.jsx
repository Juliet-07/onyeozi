import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();

import HomeBooking from "../../../../customer/AppScreens/App/Home/HomeBooking";
import Vehicle from "../../../../customer/AppScreens/App/Home/Vehicle";
import Categories from "../../../../customer/AppScreens/App/Home/Categories";
import CategoryDetail from "../../../../customer/AppScreens/App/Home/CategoryDetail";
import OtherDetail from "../../../../customer/AppScreens/App/Home/OtherDetail";
import PickUpDetails from "../../../../customer/AppScreens/App/Home/PickupDetail";
import DropOffDetails from "../../../../customer/AppScreens/App/Home/DropOffDetail";

const index = () => (
  
    <Navigator  headerMode="none" initialRouteName="Home">
      <Screen name="Home" component={HomeBooking} />
      <Screen name="Vehicle" component={Vehicle} />
      <Screen name="Categories" component={Categories} />
      <Screen name="CategoryDetail" component={CategoryDetail} />
      <Screen name="OtherDetail" component={OtherDetail} />
      <Screen name="Pickup" component={PickUpDetails} />
      <Screen name="Dropoff" component={DropOffDetails} />
    </Navigator>
  
);
export default index;
