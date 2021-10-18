import React from "react"; 
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Completed from '../Completed';
import Pending from '../Pending';
import Processing from '../Processing'
const Tab = createMaterialTopTabNavigator();
 
const index = () => {
  return ( 
      <Tab.Navigator
      initialRouteName="Pending"
        tabBarOptions={{
          activeTintColor: "#1976D2",
          labelStyle: { fontSize: 14 },
          inactiveTintColor: "#000000",
        }}
      >
        <Tab.Screen name="Pending" component={Pending} />
        <Tab.Screen name="Processing" component={Processing} />
        <Tab.Screen name="Completed" component={Completed} />
      </Tab.Navigator> 
  );
};
  
export default index;
