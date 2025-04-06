import "@/global.css";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { GluestackUIProvider } from "@components/ui/gluestack-ui-provider";

import { Loading } from "./components/loading";

import { AuthProvider } from "@contexts/auth";
import { Routes } from "./routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <GluestackUIProvider>
      <StatusBar backgroundColor="transparent" style="light" translucent />

      <AuthProvider>{fontsLoaded ? <Routes /> : <Loading />}</AuthProvider>
    </GluestackUIProvider>
  );
}
