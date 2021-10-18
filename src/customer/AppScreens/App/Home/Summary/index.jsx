import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  Modal
} from "react-native";
import { styles } from "./styles";
import Up from "react-native-vector-icons/AntDesign";
import Accordion from "../../../../../components/Accordion/index";
import Header from "../../../../../components/customHeader/index";
import { Obutton } from "../../../../../components/ButtonCustom";

const Summary = ({ PickUpDetails }) => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  
  const [cardState, setCardState] = useState();
  const handleChangeTxtColor = index => {
    setCardState(index);
    console.log(index, cardState);
  };

  return (
    <View>
      <Header Title="Step 5 of 5" />
      <ScrollView>
        <Text style={styles.TitleText}>Confirm Details</Text>
        <View>
          <Accordion Title={"PickUp Details"} />
          <Accordion Title={"Dropoff Details"} />
          <Accordion Title={"Seleted Categories"} />
        </View>
        <View style={styles.containerPaymentDetail}>
          <Text style={styles.Payment}>Payment details</Text>
          <View style={styles.deliveryandPayable}>
            <View style={styles.deliverycharge}>
              <Text>Delivery charge </Text>
              <Text>mxcmjx</Text>
            </View>
            <View style={styles.deliverycharge}>
              <Text>Amount Payable </Text>
              <Text>mxcmjx</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerButton}>
          <Obutton
            title="Proceed to Payment"
            buttonStyle={styles.button}
            onPress={() => setModal(true)}
          />
        </View>
        <Modal visible={modal} transparent style={styles.Modal}>
          <View style={styles.modalContainer} >
          <TouchableOpacity onPress={()=>setModal(false)}>
          <View style={{
            height: 290,
            width: "100%",
            justifyContent: "center",
            flexDirection: "row",
          }}>
              <View style={styles.back}>
          </View>
              </View>
          </TouchableOpacity>
            <View style={styles.modalcardContainer}>
              
              <View style={styles.transactionCards}>
               <TouchableOpacity>
               <View style={ {
                  backgroundColor: `${cardState=== +1 ? "blue" : "white"}`,
                    height: 90,
                    width: "100%",
                    justifyContent: "center",
                    elevation: 6,
                    marginTop: 14,
                    flexDirection: "row",
                    borderRadius: 10,
                    
                  }}>
                  <Image
                    source={require("../../../../assets/card.png")}
                    style={(styles.transactioncard1)}
                  />
                  <View style={styles.ModalText}>
                    <Text style={styles.ModalText}>Credit Card</Text>
                    <Text style={styles.Text}>Pay using credit card</Text>
                  </View>
                </View>
               </TouchableOpacity>
            <TouchableOpacity>
            <View style={{
                   backgroundColor: `${cardState === +1 ? "yellow" : "white"}`,
                   height: 90,
                   width: "100%",
                   justifyContent: "center",
                   elevation: 6,
                   marginTop: 14,
                   flexDirection: "row",
                   borderRadius: 10,
                 
                }}>
                  <Image
                    source={require("../../../../assets/transfer.png")}
                    style={styles.transactioncard}
                  />
                  <View style={styles.ModalText}>
                    <Text style={styles.ModalText}>Credit Card</Text>
                    <Text style={styles.Text}>Pay cash on pickup</Text>
                  </View>
                </View>
            </TouchableOpacity>
                <TouchableOpacity>
                <View style={{
                   backgroundColor: `${cardState === +1 ? "yellow" : "white"}`,
                   height: 90,
                   width: "100%",
                   justifyContent: "center",
                   elevation: 6,
                   marginTop: 14,
                   flexDirection: "row",
                   borderRadius: 10,
                  
                 
                }}>
                  <Image
                    source={require("../../../../assets/transfer.png")}
                    style={styles.transactioncard}
                  />
                  <View style={styles.ModalText}>
                    <Text style={styles.ModalText}>Credit Card</Text>
                    <Text style={styles.Text}>Pay cash on delivery</Text>
                  </View>
                </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};
export default Summary;
