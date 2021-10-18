import React, { useState } from "react";
import { FlatList} from "react-native";
import TransactionCard from '../TransactionCard';
import {processing} from '../dummyData';

const index = () => {
  return (
    <FlatList 
    data={processing}
    renderItem={({item}) => <TransactionCard data={item}/>}
    keyExtractor={item => item.parcelNo}
    />
  );
}
 
export default index;
