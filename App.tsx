import "@/global.css";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { Loading } from "./components/loading";

import { SignIn } from "./screens/sign-in";

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

      <SignIn />
    </GluestackUIProvider>
  );
}
