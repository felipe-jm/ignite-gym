import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { Box } from "@/components/ui/box";

export function Routes() {
  return (
    <Box className="flex-1 bg-gray-700">
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
