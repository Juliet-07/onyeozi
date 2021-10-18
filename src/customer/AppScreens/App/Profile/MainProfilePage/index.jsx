import React, { useState, useContext } from "react";
import { View, ScrollView, Image, Text, Modal, TouchableOpacity } from "react-native";
import { Obutton } from "../../../../../components/ButtonCustom";
import { styles } from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import { LOGOUT } from "../../../../../gql/auth/mutations";
import { AuthContext } from "../../../../../context/authContext";
import { useMutation } from "@apollo/client";
import Error from '../../../../../components/ErrorComponent';
const Profile = ({ navigation }) => {
  const {signOut} = useContext(AuthContext)
  const { navigate } = navigation;
  const [modal, setModal] = useState(false);
  const [logout, { loading, error }] = useMutation(LOGOUT);

  const handleLogOut = async () => {
    await logout().then(async (res) => { 
      console.log(res, 'res')
      signOut() 
      App.logout().then(() => client.resetStore());
    })
    .catch((e) => <Error  message={e.toString()} />);
  }

  const handleSignOut = async( ) => {
    await logout().then(async res => { 
      const message = res.data.logout;
      ShowMessage(type.DONE, "Login to Continue")
      App.logout().then(() => client.resetStore());
    }).catch(err => ShowMessage(type.ERROR, err))
  }
  return (
    <ScrollView style={{backgroundColor:"white",}}>
      <View>
        <Image
          style={styles.image}
          source={require("../../../../../assets/profileIcon.png")}
        />
        <View style={styles.profileIcon}>
          <AntDesign
            style={{
              fontSize: 50,
              color: "#1976D2"
            }}
            name="user"
          />
        </View>
        <Text style={styles.text}>
          James Chimdindu {"\n"} jameschimdindu@gmail.com{" "}
        </Text>

        <View>
          <Text style={styles.total}>
            TOTAL{"\n"} BOOKINGS {"\n"}10
          </Text>
        </View>

        <View>
          <Text style={styles.point}>
            POINTS {"\n"}EARNED {"\n"} 25{" "}
          </Text>
        </View>
      </View>
      <View style={styles.Bttn}>
        <Obutton
          title="Edit Profile"
          buttonStyle={styles.button}
          titleStyle={{ color: "black" }}
          onPress={() => navigate("EditProfile")}
        />
        <AntDesign
          style={{ right: 90, bottom: 40, fontSize: 25, color: "black" }}
          name="user"
        />
        <AntDesign
          style={{
            left: 90,
            bottom: 65,
            fontSize: 25,
            color: " rgba(75, 77, 76, 0.4)"
          }}
          name="right"
        />
      </View>

      <View style={styles.Bttn2}>
        <Obutton
          title="Settings"
          titleStyle={{ color: "black" }}
          buttonStyle={styles.button}
          onPress={()=> navigation.navigate('Settings')}
        />
        <AntDesign
          style={{ right: 90, bottom: 40, fontSize: 25, color: "black" }}
          name="setting"
        />
        <AntDesign
          style={{
            left: 90,
            fontSize: 25,
            bottom: 65,
            color: " rgba(75, 77, 76, 0.4)"
          }}
          name="right"
        />
      </View>

      <View style={styles.Bttn3}>
        <Obutton
          title="Logout"
          titleStyle={{ color: "black" }}
          buttonStyle={styles.button}
          onPress={() => setModal(true)}
        />
        <AntDesign
          style={{
            right: 90,
            bottom: 40,
            fontSize: 25,
            color: "#FD531E",
            fontWeight: "bold"
          }}
          name="logout"
        />
        <AntDesign
          style={{
            left: 90,
            fontSize: 25,
            bottom: 65,
            color: " rgba(75, 77, 76, 0.4)"
          }}
          name="right"
        />
      </View>
      {/* Modal */}
      <Modal visible={modal} transparent={true} animationType="slide">
     
        <View style={styles.ModalContainer}>
        <TouchableOpacity onPress={() => setModal(false)}>
          <View
            style={{
              height: 290,
              width: "100%",
              justifyContent: "center",
              flexDirection: "row"
            }}
          >
            <View style={styles.back}></View>
          </View>
        </TouchableOpacity>
          <View style={styles.transactionCard}>
            <View style={styles.containerModalText}>
              <Text style={styles.ModalText}>
                Are you sure you want to log out?{"\n"} You can’t make bookings
                when {"\n"} logged out.
              </Text>
            </View>
            <View style={styles.buttonContainer1}>
              <Obutton title="Cancel" onPress={() => setModal(false)} />
            </View>
            <View style={{...styles.buttonContainer2}}>
              <Obutton
                title="Logout"
                loading={loading}
                disabled={loading}
                onPress={() => handleLogOut()}
                titleStyle={styles.titleStyle}
                buttonStyle={styles.btnCustomer1}
              />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};
export default Profile;
