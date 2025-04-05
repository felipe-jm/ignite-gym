import "@/global.css";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { Text } from "@/components/ui/text";
import { Center } from "./components/ui/center";
import { Loading } from "./components/loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <GluestackUIProvider mode="light">
        <Loading />
      </GluestackUIProvider>
    );
  }

  return (
    <GluestackUIProvider mode="light">
      <StatusBar style="light" />

      <Center className="flex-1 bg-gray-900">
        <Text className="text-white">Home</Text>
      </Center>
    </GluestackUIProvider>
  );
}
