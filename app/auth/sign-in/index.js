import { router, useNavigation, useRouter } from "expo-router";
import React, { useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function SignInScreen() {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.arrowBtn}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome User 👋</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry
      />

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      {/* Google Sign In Button */}
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={{
            uri: "https://static-00.iconduck.com/assets.00/google-icon-512x512-wk1c10qc.png",
          }} // Placeholder for Google logo
          style={styles.googleLogo}
        />
        <Text style={styles.googleText}>Sign in with Google</Text>
      </TouchableOpacity>

      {/* Divider Line */}
      <View style={styles.divider} />

      {/* Create Account Button */}
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => router.replace("auth/sign-up")}
      >
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  welcomeText: {
    fontSize: 24,
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
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    marginBottom: 15,
  },
  signInButton: {
    width: "100%",
    backgroundColor: "black",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  signInText: {
    color: "white",
    fontSize: 16,
  },
  googleButton: {
    width: "100%",
    backgroundColor: "#4285F4",
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  googleLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  googleText: {
    color: "white",
    fontSize: 16,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc", // Divider color
    marginVertical: 30, // Space between the buttons
  },
  createAccountButton: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    width: "100%",
    alignItems: "center",
  },
  createAccountText: {
    color: "black",
    fontSize: 16,
  },
});
