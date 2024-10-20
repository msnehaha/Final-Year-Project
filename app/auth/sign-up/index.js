import React, { useEffect } from "react";
import { router, useNavigation, useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../configs/FirebaseConfig";

export default function CreateAccountScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <View style={styles.container}>
      {/* Title */}
      <TouchableOpacity onPress={() => router.back()} style={styles.arrowBtn}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Create New Account</Text>

      {/* Full Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        placeholderTextColor="#A9A9A9"
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        placeholderTextColor="#A9A9A9"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#A9A9A9"
        secureTextEntry={true}
      />

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* OR Line */}
      <Text style={styles.orText}>OR</Text>

      {/* Google Sign-In Button */}
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png",
          }}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  arrowBtn: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#F9F9F9",
  },
  signInButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginTop: 20,
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    marginVertical: 20,
    color: "#A9A9A9",
    fontSize: 16,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#4285F4",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  googleIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  googleButtonText: {
    color: "#4285F4",
    fontSize: 16,
    fontWeight: "bold",
  },
});
