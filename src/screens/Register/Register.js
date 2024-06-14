import React, { useContext, useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import { MaxSpacer, MidSpacer, MinSpacer } from "../../components/Spacers";

export default function Register(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const passwordFieldRef = useRef<TextInput>(null); // Ref for the password field

  
  // Function to toggle password visibility
  const toggleShowPassword = () => setShowPassword(!showPassword);

  // Function to toggle confirm password visibility
  const toggleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    // At least 6 characters, one uppercase letter, one lowercase letter, one number, and one special character
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/;
    return re.test(String(password));
  };
  // Function to handle sign up

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor:'white',

        height: Dimensions.get("window").height * 1.5,
      }}
    >
      <View style={[styles.container]}>
        <View style={{ height: Dimensions.get("window").height / 20 }}></View>
        <View
          style={{
            width: Dimensions.get("window").width,
            paddingHorizontal: 30,
            paddingTop: 10,
          }}
        >
          <Text style={[styles.header]}>
            Sign Up
          </Text>
        </View>
        <View style={{ height: Dimensions.get("window").height / 10 }}></View>
        <View style={styles.loginArea}>
          <View style={[styles.inputStyle]}>
            <TextInput
              style={[
                styles.inputText,
                {
                  fontSize: Dimensions.get("window").width / 28,
                },
              ]}
              placeholder='Full Name'
              onChangeText={setFullName}
              value={fullName}
              autoComplete="name"
              autoCapitalize="words"
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={() => {
                this.secondTextInput.focus();
              }}
            />
          </View>
          <MidSpacer></MidSpacer>
          <View style={[styles.inputStyle]}>
            <TextInput
              ref={(input) => {
                this.secondTextInput = input;
              }}
              returnKeyType="next"
              onSubmitEditing={() => {
                this.thirdTextInput.focus();
              }}
              style={[
                styles.inputText,
                {
                  fontSize: Dimensions.get("window").width / 28,
                },
              ]}
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
              autoComplete="email"
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
          <MidSpacer></MidSpacer>
          <View style={[styles.inputStyle]}>
            <TextInput
              ref={(input) => {
                this.thirdTextInput = input;
              }}
              returnKeyType="next"
              onSubmitEditing={() => {
                this.fourthTextInput.focus();
              }}
              style={[
                styles.inputText,
                {
                  fontSize: Dimensions.get("window").width / 28,
                },
              ]}
              placeholder='Password'
              onChangeText={setPassword}
              value={password}
              autoComplete="password"
              secureTextEntry={!showPassword}
            />
            <MaterialCommunityIcons
              name={!showPassword ? "eye-off" : "eye"}
              size={Dimensions.get("window").width / 20}
              color="#aaa"
              style={styles.icon}
              onPress={toggleShowPassword}
            />
          </View>
          <MinSpacer />
          <View style={[styles.inputStyle]}>
            <TextInput
              ref={(input) => {
                this.fourthTextInput = input;
              }}
              returnKeyType="done"
              style={[
                styles.inputText,
                {
                  fontSize: Dimensions.get("window").width / 28,
                },
              ]}
              placeholder='Confirm Password'
              onChangeText={setConfirmPassword}
              value={confirmPassword}
              autoComplete="password"
              secureTextEntry={!showConfirmPassword}
            />
            <MaterialCommunityIcons
              name={!showConfirmPassword ? "eye-off" : "eye"}
              size={Dimensions.get("window").width / 20}
              color="#aaa"
              style={styles.icon}
              onPress={toggleShowConfirmPassword}
            />
          </View>
        </View>
        <View style={{ height: Dimensions.get("window").height / 10 }}></View>
        <View
          style={[styles.buttonContainer]}
        >
          <TouchableOpacity onPress={()=>{
            
           navigation.navigate('Login')
            }} style={styles.button}>
            {loading ? (
              <View>
                <ActivityIndicator
                  size={"small"}
                ></ActivityIndicator>
              </View>
            ) : (
              <Text
                style={{
                    color:'white',
                  fontSize: Dimensions.get("window").width / 24,
                }}
              >
                Sign up
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={{ height: Dimensions.get("window").height / 20 }}></View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: Dimensions.get("window").width / 30,
              paddingRight: 5,
            }}
          >
            Already have an account?{''}
          </Text>
          <Text
            onPress={() => navigation.goBack()}
            style={{
                color:'orange',
              margin: 5,
              fontSize: Dimensions.get("window").width / 30,
            }}
          >
            Login
          </Text>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(!isModalVisible);
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(10,10,10,0.6)",
              flex: 1,
              height: Dimensions.get("window").height,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: "80%",
                paddingTop: 50,
                borderRadius: 20,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  paddingBottom: 40,
                  paddingHorizontal: 10,
                }}
              >
                {errorMessage}
              </Text>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => {
                    setIsModalVisible(false);
                  }}
                  style={{
                    width: "100%",
                    height: 50,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 18 }}>
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(10,10,10,0.6)",
              flex: 1,
              height: Dimensions.get("window").height,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: "80%",
                paddingTop: 40,
                borderRadius: 20,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  paddingBottom: 40,
                  paddingHorizontal: 10,
                }}
              >
                Email Sent
              </Text>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                    setModalVisible(false);
                  }}
                  style={{
                    width: "100%",
                    height: 50,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{  fontSize: 18 }}>
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontSize: Dimensions.get("window").width / 8,
    paddingHorizontal: 10,
    fontWeight: "300",
  },
  loginArea: {
    width: "80%",
  },
  inputStyle: {
    borderColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(243,243,243)",
    borderRadius: 8,
    paddingHorizontal: 14,
    height: Dimensions.get("window").height / 17,
  },
  inputText: {
    flex: 1,
    color: "#333",
    height: 55,
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 18,
  },
  icon: {
    textAlign: "center",
    marginLeft: 10,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: Dimensions.get("window").height / 17,
    borderRadius: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'orange',
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },

  modalContent: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    alignContent: "stretch",
  },
  modalText: {
    fontSize: 20,
  },
});
