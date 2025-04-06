import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import { Controller, useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

import { useAuth } from "@hooks/useAuth";
import { api } from "@services/api";

type FormDataProps = {
  name: string;
  email: string;
  password?: string;
  old_password?: string;
  confirm_password?: string;
};

const profileSchema = z
  .object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("Formato de email inválido"),
    password: z
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .optional()
      .or(z.literal("")),
    old_password: z
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .optional()
      .or(z.literal("")),
    confirm_password: z
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .optional()
      .or(z.literal("")),
  })
  .refine((data) => !data.password || data.password === data.confirm_password, {
    message: "As senhas não coincidem",
    path: ["confirm_password"],
  })
  .refine(
    (data) => {
      return !data.password || (!!data.password && !!data.old_password);
    },
    {
      message: "Informe a senha antiga para definir uma nova senha",
      path: ["old_password"],
    }
  );

export function Profile() {
  const toast = useToast();

  const { user } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    mode: "onChange",
    defaultValues: {
      name: user.name,
      email: user.email,
    },
    resolver: zodResolver(profileSchema),
  });

  const [userPhoto, setUserPhoto] = useState(
    user.avatar
      ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }
      : defaultUserPhotoImg
  );

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

  async function handleProfileUpdate(data: FormDataProps) {
    console.log(data);
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
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome"
                  onChangeText={onChange}
                  value={value}
                  className="bg-brand-gray-600"
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Email"
                  className="bg-brand-gray-600"
                  isReadOnly
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </Center>

          <Heading className="text-brand-gray-200 text-md mt-12 mb-2 self-start">
            Alterar senha
          </Heading>

          <Center className="w-full gap-4">
            <Controller
              control={control}
              name="old_password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha antiga"
                  className="bg-brand-gray-600"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.old_password?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  className="bg-brand-gray-600"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="confirm_password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Confirmar nova senha"
                  className="bg-brand-gray-600"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.confirm_password?.message}
                />
              )}
            />

            <Button
              title="Atualizar"
              onPress={handleSubmit(handleProfileUpdate)}
            />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
