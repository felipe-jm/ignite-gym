import { Heading } from "./ui/heading";
import { HStack } from "./ui/hstack";
import { VStack } from "./ui/vstack";
import { Text } from "./ui/text";

import { LogOut } from "lucide-react-native";

import { UserPhoto } from "./user-photo";
import { Icon } from "./ui/icon";

export function HomeHeader() {
  return (
    <HStack className="w-full items-center justify-between bg-brand-gray-600 pt-16 pb-5 px-8 gap-4">
      <UserPhoto
        source={{ uri: "https://github.com/felipe-jm.png" }}
        className="w-16 h-16"
        alt="Imagem do usuário"
      />

      <VStack className="flex-1">
        <Text className="text-gray-100 font-regular text-base">Olá,</Text>
        <Heading className="text-gray-200 font-bold text-base">João</Heading>
      </VStack>

      <Icon as={LogOut} color="gray-200" size="xl" />
    </HStack>
  );
}
