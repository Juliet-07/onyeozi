import React, { useState } from "react";
import { View, ScrollView, Switch, Text, TouchableOpacity } from "react-native";
import { Obutton } from "../../../../../components/ButtonCustom/index";
import { InputField } from "../../../../../components/InputCustom";
import { Formik } from "formik";
import * as yup from "yup";
import Email from "react-native-vector-icons/Fontisto";
import Person from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import generateValidationSchema from "../../../../../utils/validators";
import Entypo from "react-native-vector-icons/Entypo";

const validationSchema = generateValidationSchema(
  yup,
  ["fullName", "email", "phoneNumber", "password"],
  ["REQUIRED", "EMAIL", "PHONE", "PASSWORD"]
);
const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  password: "",
};

const OtherSettings = () => {
  const onSubmit = (values) => {
    console.log(values, "myvalues");
    onEditProfile({ variables: values });
    const [isSelected, setSelection] = useState(false);
    const [show, setShow] = useState(false);
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.topHeader}>Settings </Text>

        <View style={styles.InputField}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values }) => (
              <>
                <View>
                  <InputField
                    label="Setup default pickup location, if any"
                    name=" 53 Umuodu Road, Aba"
                    value={values.fullName}
                    style={styles.name}
                    placeholder="31 Aba-Owerri Road"
                    placeholderTextColor="#00000080"
                    rightIcon={
                      <TouchableOpacity onPress={() => setShow(!show)}>
                        <Entypo name="location-pin" color="#00000080" />
                      </TouchableOpacity>
                    }
                  />

                  <InputField
                    name="53 Umuodu Road, Aba"
                    label="Setup default delivery location, if any"
                    placeholder="53 Umuodu Road, Aba"
                    value={values.password}
                    rightIcon={
                      <TouchableOpacity onPress={() => setShow(!show)}>
                        <Entypo name="location-pin" color="#00000080" />
                      </TouchableOpacity>
                    }
                  />

                  <Text style={styles.NotificationSettings}>
                    {" "}
                    NOTIFICATION SETTINGS{" "}
                  </Text>

                  <View style={styles.NotificationEmail}>
                    {/* <View style={styles.switchBttn}>
                      <Text>Email Notification</Text>
                      <Text>
                        Notify me by email when my parce is close to pickup
                        location
                      </Text>
                      <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                      />      
                    </View> */}
                    <View style={styles.switchBttn}>
                      <Text>Email Notification</Text>
                      <Text>
                        Notify me by email when my parce is close to pickup
                        location
                      </Text>
                      <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                      />
                    </View>
                    <View style={styles.switchBttn}>
                      <Text>Email Notification</Text>
                      <Text>
                        Notify me by email when my parce is close to pickup
                        location
                      </Text>
                      <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                      />
                    </View>
                  </View>
                </View>
              </>
            )}
          </Formik>
        </View>

        <View style={styles.updateDetails}></View>
      </View>
    </ScrollView>
  );
};
export default OtherSettings;
