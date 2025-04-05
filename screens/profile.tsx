import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import { VStack } from "@components/ui/vstack";
import { Center } from "@components/ui/center";
import { Text } from "@components/ui/text";
import { Input } from "@components/input";
import { Heading } from "@components/ui/heading";
import { useToast } from "@components/ui/toast";

import { UserPhoto } from "@components/user-photo";
import { ScreenHeader } from "@components/screen-header";
import { Button } from "@components/button";
import { ToastMessage } from "@components/toast-message";

import defaultUserPhotoImg from "@assets/userPhotoDefault.png";

export function Profile() {
  const [userPhoto, setUserPhoto] = useState(defaultUserPhotoImg);

  const toast = useToast();

  async function handleUserPhotoSelect() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets[0].uri) {
        const photoUri = photoSelected.assets[0].uri;

        const photoInfo = (await FileSystem.getInfoAsync(photoUri)) as {
          size: number;
        };

        if (photoInfo.size && photoInfo.size > 5 * 1024 * 1024) {
          return toast.show({
            placement: "top",
            render: ({ id }) => (
              <ToastMessage
                id={id}
                action="error"
                title="Essa imagem é muito grande. Escolha uma de até 5MB."
                onClose={() => toast.close(id)}
              />
            ),
          });
        }

        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <VStack className="flex-1 bg-brand-gray-900">
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center className="mt-6 px-10">
          <UserPhoto
            source={{
              uri: userPhoto,
            }}
            alt="Foto do usuário"
            size="xl"
          />

          <TouchableOpacity onPress={handleUserPhotoSelect}>
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

          <Heading className="text-brand-gray-200 text-md mt-12 mb-2 self-start">
            Alterar senha
          </Heading>

          <Center className="w-full gap-4">
            <Input
              placeholder="Senha antiga"
              className="bg-brand-gray-600"
              onChangeText={() => {}}
            />

            <Input
              placeholder="Nova senha"
              className="bg-brand-gray-600"
              onChangeText={() => {}}
            />

            <Input
              placeholder="Confirmar nova senha"
              className="bg-brand-gray-600"
              onChangeText={() => {}}
            />

            <Button title="Atualizar" />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
