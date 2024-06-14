import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  Dimensions,
  ActivityIndicator,
  Modal,
  Alert,
} from "react-native";

import { useContext, useLayoutEffect, useState } from "react";
import { MaxSpacer, MidSpacer, MinSpacer } from "../../components/Spacers";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";

export default function Login(props) {
  const { navigation } = props;

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isVerificateModalVisible, setIsVerificateModalVisible] =
    useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [count, setCount] = useState(0);
  const [processing, setProcessing] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  


  const onHandlePress = () => {
    navigation.navigate("Register");
  };

  



  return (
    <View style={[styles.container]}>
      <Image
        style={{
          width: Dimensions.get("window").width * 0.55,
          height: Dimensions.get("window").width * 0.55,
          resizeMode: "fill",
        }}
        source={require("../../../assets/logo.png")}
      />
      <View style={styles.loginarea}>
        <View style={[styles.inputStyle]}>
          <TextInput
            style={[
              styles.inputText,
              {
                fontSize: Dimensions.get("window").width / 28,
              },
            ]}
            keyboardType="email-address"
            placeholder="Email"
            onChangeText={setEmail}
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            value={email}
            returnKeyType="next"
            onSubmitEditing={() => {
              this.secondTextInput.focus();
            }}
          />
        </View>
        <MinSpacer />
        <View style={[styles.inputStyle]}>
          <TextInput
            ref={(input) => {
              this.secondTextInput = input;
            }}
            returnKeyType="done"
            style={[
              styles.inputText,
              {
                fontSize: Dimensions.get("window").width / 28,
              },
            ]}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            placeholder={'Password'}
          />
          <MaterialCommunityIcons
            name={!showPassword ? "eye-off" : "eye"}
            size={Dimensions.get("window").width / 20}
            color="#aaa"
            style={styles.icon}
            onPress={toggleShowPassword}
          />
        </View>
        
      </View>
      <MinSpacer></MinSpacer>
      <View style={[styles.button]}>
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate('Home')
          }}
          style={[styles.button]}
        >
          {loading ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
              }}
            >
              <ActivityIndicator size="small"  />
            </View>
          ) : (
            <Text
              style={{
                color:'white',
                fontSize: Dimensions.get("window").width / 24,
              }}
            >
              Login
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <Text></Text>
      <Text
        style={[
          styles.signUp,
          {  fontSize: Dimensions.get("window").width / 30 },
        ]}
      >
        Don't have an account?{' '}
        <Text
          onPress={onHandlePress}
          style={{
            color:'orange',
            fontSize: Dimensions.get("window").width / 30,
          }}
        >
          Sign Up
        </Text>
      </Text>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    textAlign: "center",
    marginLeft: 10,
  },
  forgotPassword: {
    paddingVertical: 15,
    alignSelf: "flex-end",
  },
  loginarea: {
    width: "80%",
  },
  inputText: {
    flex: 1,
    height: 55,
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 18,
  },
  inputStyle: {
    borderColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 8,
    paddingHorizontal: 14,
    height: Dimensions.get("window").height / 15,
  },
  header: {
    fontSize: 80,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    width: "80%",
    height: Dimensions.get("window").height / 15,
    borderRadius: 10,
  },
  signUp: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
