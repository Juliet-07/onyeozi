import React, { useState } from "react";
import { FlatList} from "react-native";
 
import TransactionCard from '../TransactionCard';
import {pending} from '../dummyData';

const index = () => {
  return (
    <FlatList 
    data={pending}
    renderItem={({item}) => <TransactionCard data={item}/>}
    keyExtractor={item => item.parcelNo}
    />
  );
}
 
export default index;
