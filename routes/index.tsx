import { NavigationContainer } from "@react-navigation/native";

import { Box } from "@components/ui/box";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "./hooks/useAuth";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <Box className="flex-1 bg-brand-gray-900">
      <NavigationContainer>
        {user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
