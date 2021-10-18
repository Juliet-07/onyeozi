import React from "react";
import { Text, View, ScrollView } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import generateValidationSchema from "../../../../../utils/validators";
import { Obutton } from "../../../../../components/ButtonCustom";
import { InputField } from "../../../../../components/InputCustom";
import themes from "../../../../../config/theme";
import { styles } from "./styles";
import Avarta from "react-native-vector-icons/Ionicons";
import Location from "react-native-vector-icons/Entypo";
import Phone from "react-native-vector-icons/Entypo";
import Header from "../../../../../components/customHeader/index";

const validationSchema = generateValidationSchema(
  yup,
  ["fullName", "Address", "Number"],
  ["REQUIRED", "REQUIRED", "REQUIRED"]
);
const initialValues = {
  fullName: "",
  Address: "",
  Number: ""
};
const PickUpDetails = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View style={styles.container}>
      <Header Title="Step 4 of 5" />
      <ScrollView>
        <View style={styles.InputContainer}>
          <View style={styles.inputs}>
           <View style={{width:"94%"}}>
           <Text style={styles.Title}>Input PickUp Details</Text>
           </View>

            <View style={styles.InputFormContainer}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => {
                  console.log(values);
                  navigate("Dropoff");
                }}
              >
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                  <>
                    <View>
                      <InputField
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChangeText={handleChange("fullName")}
                        rightIcon={
                          <Avarta name="person" color="#00000080" size={20} />
                        }
                      />

                      <InputField
                        name="Address"
                        label="Address"
                        value={values.Address}
                        inputContainerStyles={styles.input}
                        onChangeText={handleChange("Address")}
                        rightIcon={
                          <Location
                            name="location-pin"
                            color="#00000080"
                            size={20}
                          />
                        }
                      />
                      <InputField
                        name="Number"
                        label="Number"
                        value={values.Number}
                        keyboardType="number-pad"
                        inputContainerStyles={styles.inputField}
                        onChangeText={handleChange("Number")}
                        rightIcon={
                          <Phone name="phone" color="#00000080" size={20} />
                        }
                      />
                      <View style={styles.button}>
                        <Obutton title="Next" onPress={handleSubmit} />
                      </View>
                    </View>
                  </>
                )}
              </Formik>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default PickUpDetails;
