import { Heading } from "./ui/heading";
import { HStack } from "./ui/hstack";
import { Text } from "./ui/text";
import { VStack } from "./ui/vstack";
import { UserPhoto } from "./user-photo";
import { Button, ButtonIcon } from "./ui/button";

import { LogOut } from "lucide-react-native";

import defaultUserPhotoImg from "@assets/userPhotoDefault.png";

export function HomeHeader() {
  return (
    <HStack className="bg-brand-gray-600 pt-16 pb-5 px-8 items-center gap-4">
      <UserPhoto source={defaultUserPhotoImg} alt="Foto do usuário" size="sm" />
      <VStack className="flex-1">
        <Text className="text-brand-gray-100">Olá,</Text>
        <Heading className="text-brand-gray-100">John Doe</Heading>
      </VStack>

      <Button
        variant="link"
        size="xl"
        className="justify-start items-center"
        onPress={() => {}}
      >
        <ButtonIcon size="xl" as={LogOut} color="#C4C4CC" />
      </Button>
    </HStack>
  );
}
