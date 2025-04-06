import "@/global.css";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { SafeAreaView } from "react-native-safe-area-context";

import { GluestackUIProvider } from "@components/ui/gluestack-ui-provider";
import { Loading } from "./components/loading";

import { Routes } from "./routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <GluestackUIProvider>
        <Loading />
      </GluestackUIProvider>
    );
  }

  return (
    <GluestackUIProvider>
      <SafeAreaView className="flex-1 bg-brand-gray-900">
        <StatusBar backgroundColor="transparent" style="light" translucent />

        <Routes />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
