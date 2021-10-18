import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";

import { styles } from "./styles";
import TransactionCard from '../TransactionCard';
import {completed} from '../dummyData';


const index = () => {
  return (
    <FlatList 
    data={completed}
    renderItem={({item}) => <TransactionCard data={item}/>}
    keyExtractor={item => item.parcelNo}
    />
    
  );
}


export default index;
