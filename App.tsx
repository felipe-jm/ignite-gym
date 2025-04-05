import "@/global.css";

import { View } from "react-native";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Text } from "@/components/ui/text";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <GluestackUIProvider mode="light">
        <View />
      </GluestackUIProvider>
    );
  }

  return (
    <GluestackUIProvider mode="light">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#202024",
        }}
      >
        <StatusBar style="light" />
        <Text>Home</Text>
      </View>
    </GluestackUIProvider>
  );
}
