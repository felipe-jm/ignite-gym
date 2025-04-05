import { Card } from "./ui/card";
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
    <Card variant="filled">
      <HStack className="mt-10 pb-5 items-center gap-4">
        <UserPhoto
          source={defaultUserPhotoImg}
          alt="Foto do usuário"
          size="sm"
        />
        <VStack className="flex-1">
          <Text>Olá,</Text>
          <Heading>John Doe</Heading>
        </VStack>

        <Button
          variant="link"
          size="xl"
          className="justify-start items-center"
          onPress={() => {}}
        >
          <ButtonIcon size="xl" as={LogOut} />
        </Button>
      </HStack>
    </Card>
  );
}
