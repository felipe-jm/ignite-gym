import { Heading } from "./ui/heading";
import { HStack } from "./ui/hstack";
import { VStack } from "./ui/vstack";
import { Text } from "./ui/text";

import { LogOut } from "lucide-react-native";

import { UserPhoto } from "./user-photo";
import { Icon } from "./ui/icon";
import { Card } from "./ui/card";

export function HomeHeader() {
  return (
    <Card variant="filled">
      <HStack className="mt-10 pb-5 items-center gap-4">
        <UserPhoto
          source={{ uri: "https://github.com/felipe-jm.png" }}
          className="w-16 h-16"
          alt="Imagem do usuário"
        />

        <VStack className="flex-1">
          <Text>Olá,</Text>
          <Heading>João</Heading>
        </VStack>

        <Icon as={LogOut} color="gray-200" size="xl" />
      </HStack>
    </Card>
  );
}
