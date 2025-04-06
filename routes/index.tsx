import { NavigationContainer } from "@react-navigation/native";

import { Box } from "@components/ui/box";
import { Loading } from "@components/loading";
import { Center } from "@components/ui/center";

import { AuthRoutes } from "./auth.routes";
import { useAuth } from "@hooks/useAuth";

import { AppRoutes } from "./app.routes";

export function Routes() {
  const { user, isLoadingUserStorageData } = useAuth();

  if (isLoadingUserStorageData) {
    return (
      <Center className="flex-1 bg-brand-gray-900 items-center justify-center">
        <Loading />
      </Center>
    );
  }

  return (
    <Box className="flex-1 bg-brand-gray-900">
      <NavigationContainer>
        {user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
