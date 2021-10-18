import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal
} from "react-native";
import Header from "../../../../../components/customHeader/index";
import { InputField } from "../../../../../components/InputCustom/index";
import { Formik } from "formik";
import { styles } from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import theme from "../../../../../config/theme/index";
import CheckBox from "@react-native-community/checkbox";
import { Obutton } from "../../../../../components/ButtonCustom/index";
import { colors } from "../../../../../config/colors/index";
import Icon from "react-native-vector-icons/AntDesign";

const OtherDetail = ({ navigation }) => {
  const {navigate} = navigation
  const [select, setSelect] = useState(false);
  const [modal, setModal] = useState(false);

  const initialValues = {
    Item: "",
    Weight: "",
    Value: "",
    Description: ""
  };
  return (
    <View style={styles.container}>
      <Header Title="Step 2 of 5" />
      <ScrollView>
        <View style={styles.container2}>
          <Text style={styles.headerText}>Input Details</Text>
          <Text style={styles.message}>
            Fill in the required fields. Upload relevant{"\n"}images as you can
            only upload a max of 2
          </Text>
          <Formik
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
          >
            {({ values, handleSubmit, handleChange }) => (
              <>
                <InputField
                  name="Item"
                  value={values.Item}
                  onChangeText={handleChange("Item")}
                  placeholder="Item Name"
                  inputContainerStyles={styles.input1}
                />
                <InputField
                  name="Weight"
                  value={values.Weight}
                  onChangeText={handleChange("Weight")}
                  placeholder="Weight"
                  rightIcon={
                    <MaterialIcons
                      name="arrow-drop-down"
                      color="#00000080"
                      size={theme.iconSize}
                    />
                  }
                  inputContainerStyles={styles.input2}
                />
                <InputField
                  name="Value"
                  value={values.Value}
                  onChangeText={handleChange("Value")}
                  placeholder="Value [$]"
                  inputContainerStyles={styles.input2}
                />
                <InputField
                  name="Description"
                  value={values.Description}
                  onChangeText={handleChange("Description")}
                  placeholder="Description"
                  inputContainerStyles={styles.input2}
                />
              </>
            )}
          </Formik>
          <Modal style={styles.Modal} visible={modal} transparent>
            <View style={styles.modalContainer}>
              <View style={styles.cardContaioner}>
                <Text style={styles.ModalTitle}>Please Read!</Text>
                <Text style={styles.Text}>
                  Ticking this option lets the company take charge of any
                  damages that might come to your deliveries overtime but this
                  attracts extra charge for every delivery you make. Untick this
                  option if you do not want insurance.
                </Text>
                <TouchableOpacity
                onPress={()=>setModal(false)}
                >
                  <Text style={styles.Moadlbutton}>OK, GOT IT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View style={styles.insure}>
            <CheckBox
              value={select}
              onValueChange={setSelect}
              style={{ alignSelf: "center" }}
            />
            <TouchableOpacity onPress={() => setModal(true)}>
              <Text style={styles.insureText}>
                I want to insure this product
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="exclamation-circle" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.uploadImage}>
            <View style={styles.subView}>
              <EvilIcons name="plus" color={colors.primary} size={70} />
              <Text style={{ fontSize: 16, color: colors.primary }}>
                Upload Image
              </Text>
            </View>
          </View>

          <View style={styles.button}>
            <Obutton
              title="Next"
              titleStyle={{ fontSize: 20 }}
              onPress={() => navigate("Pickup")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default OtherDetail;
