import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    poppins: require("./../assets/fonts/Poppins-Regular.ttf"),
    "poppins-medium": require("./../assets/fonts/Poppins-Medium.ttf"),
    "poppins-italic": require("./../assets/fonts/Poppins-Italic.ttf"),
    "poppins-bold": require("./../assets/fonts/Poppins-Bold.ttf"),
  });
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
