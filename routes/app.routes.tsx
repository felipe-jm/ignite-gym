import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import HomeSvg from "@assets/home.svg";
import HistorySvg from "@assets/history.svg";
import ProfileSvg from "@assets/profile.svg";

import { Home } from "@screens/home";
import { Exercise } from "@screens/exercise";
import { Profile } from "@screens/profile";
import { History } from "@screens/history";
import { Platform } from "react-native";

// Define theme constants
const theme = {
  colors: {
    brand: {
      green: {
        500: "#00B37E",
        600: "#16a34a",
        700: "#00875F",
      },
      gray: {
        100: "#E1E1E6",
        200: "#C4C4CC",
        300: "#7C7C8A",
        400: "#323238",
        500: "#29292E",
        600: "#202024",
        700: "#121214",
        900: "#121214",
      },
      red: {
        500: "#F75A68",
      },
    },
  },
  spacing: {
    0.5: 2,
    1: 4,
    1.5: 6,
    2: 8,
    2.5: 10,
    3: 12,
    3.5: 14,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    12: 48,
  },
};

type AppRoutesParams = {
  home: undefined;
  exercise: undefined;
  profile: undefined;
  history: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesParams>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesParams>();

export function AppRoutes() {
  // TODO: add color scheme and tab bar colors according to the theme

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.brand.green[500],
        tabBarInactiveTintColor: theme.colors.brand.gray[200],
        tabBarStyle: {
          backgroundColor: theme.colors.brand.gray[600],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: theme.spacing[10],
          paddingTop: theme.spacing[6],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <HomeSvg fill={color} width={24} height={24} />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <ProfileSvg fill={color} width={24} height={24} />
          ),
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <HistorySvg fill={color} width={24} height={24} />
          ),
        }}
      />
      <Screen
        name="exercise"
        component={Exercise}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}
