import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@/screens/home";
import { Exercise } from "@/screens/exercise";
import { Profile } from "@/screens/profile";
import { History } from "@/screens/history";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="exercise" component={Exercise} />
      <Screen name="profile" component={Profile} />
      <Screen name="history" component={History} />
    </Navigator>
  );
}
