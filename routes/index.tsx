import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { Box } from "@components/ui/box";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <Box className="flex-1 bg-gray-700">
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
