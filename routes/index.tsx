import { NavigationContainer } from "@react-navigation/native";

import { Box } from "@components/ui/box";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <Box className="flex-1 bg-brand-gray-900">
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
