import { LogOut } from "lucide-react-native";

import { Heading } from "./ui/heading";
import { HStack } from "./ui/hstack";
import { Text } from "./ui/text";
import { VStack } from "./ui/vstack";
import { UserPhoto } from "./user-photo";
import { Button, ButtonIcon } from "./ui/button";

import defaultUserPhotoImg from "@assets/userPhotoDefault.png";

import { useAuth } from "@routes/hooks/useAuth";

export function HomeHeader() {
  const { user, signOut } = useAuth();

  return (
    <HStack className="bg-brand-gray-600 pt-16 pb-5 px-8 items-center gap-4">
      <UserPhoto
        source={user.avatar ? { uri: user.avatar } : defaultUserPhotoImg}
        alt="Foto do usuário"
        size="sm"
      />
      <VStack className="flex-1">
        <Text className="text-brand-gray-100">Olá,</Text>
        <Heading className="text-brand-gray-100">{user.name}</Heading>
      </VStack>

      <Button
        variant="link"
        size="xl"
        className="justify-start items-center"
        onPress={() => signOut()}
      >
        <ButtonIcon size="xl" as={LogOut} color="#C4C4CC" />
      </Button>
    </HStack>
  );
}
