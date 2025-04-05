import { ScrollView, TouchableOpacity } from "react-native";

import { ScreenHeader } from "@components/screen-header";
import { VStack } from "@components/ui/vstack";
import { Center } from "@components/ui/center";
import { UserPhoto } from "@components/user-photo";
import { Text } from "@components/ui/text";
import { Input } from "@components/input";

import defaultUserPhotoImg from "@assets/userPhotoDefault.png";

export function Profile() {
  return (
    <VStack className="flex-1 bg-brand-gray-900">
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center className="mt-6 px-10">
          <UserPhoto
            source={defaultUserPhotoImg}
            alt="Foto do usuário"
            size="xl"
          />

          <TouchableOpacity>
            <Text className="mt-2 text-brand-green-500 font-bold">
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Center className="w-full mt-6 gap-4">
            <Input
              placeholder="Nome"
              onChangeText={() => {}}
              className="bg-brand-gray-600"
            />

            <Input
              placeholder="Email"
              className="bg-brand-gray-600"
              isReadOnly
              onChangeText={() => {}}
            />

            <Input
              placeholder="Senha"
              className="bg-brand-gray-600"
              onChangeText={() => {}}
            />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
