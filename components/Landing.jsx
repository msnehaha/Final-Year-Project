import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useRouter } from "expo-router";

export default function Landing() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Waste Bin Image */}
      <Image
        source={require("./../assets/images/landing.jpg")}
        style={styles.image}
      />

      {/* Buttons for Login */}
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("auth/sign-in")}
        >
          <Text style={styles.buttonText}>Begin as User</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("auth/sign-in")}
        >
          <Text style={styles.buttonText}>Begin as Admin</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("auth/sign-in")}
        >
          <Text style={styles.buttonText}>Begin as Driver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  image: {
    width: 300,
    height: 400,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: Colors.background,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 60,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#FFC0CB",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
});
