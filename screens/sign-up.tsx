import { ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { VStack } from "@components/ui/vstack";
import { Image } from "@components/ui/image";
import { Center } from "@components/ui/center";
import { Text } from "@components/ui/text";
import { Heading } from "@components/ui/heading";
import { Input } from "@components/input";
import { Button } from "@components/button";
import { useToast } from "@components/ui/toast";

import BackgroundImage from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { api } from "@services/api";
import { AppError } from "@utils/app-error";
import { ToastMessage } from "@components/toast-message";

type FormData = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const signUpSchema = z
  .object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
    password_confirm: z
      .string()
      .min(6, "Senha deve ter pelo menos 6 caracteres"),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: "As senhas não coincidem",
    path: ["password_confirm"],
  });

export function SignUp() {
  const navigator = useNavigation();

  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
    },
  });

  function handleGoBack() {
    navigator.goBack();
  }

  async function handleSignUp({ name, email, password }: FormData) {
    try {
      const response = await api.post("/users", {
        name,
        email,
        password,
      });

      console.log("handleSignUp", response);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message : "Erro ao criar usuário";
      const description = isAppError
        ? error.message
        : "Ocorreu um erro ao criar o usuário";

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            id={id}
            action="error"
            title={title}
            description={description}
            onClose={() => toast.close(id)}
          />
        ),
      });
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-grow bg-brand-gray-900 h-full"
    >
      <VStack className="w-full flex-1" space="md">
        <Image
          className="absolute w-full h-[624]"
          defaultSource={BackgroundImage}
          source={BackgroundImage}
          alt="Pessoas treinando"
        />

        <VStack space="4xl" className="px-10 pb-16 flex-1">
          <Center className="my-24">
            <Logo />

            <Text className="text-sm">Crie sua conta para continuar</Text>
          </Center>

          <Center className="gap-4 flex-1">
            <Heading className="text-white text-2xl">Crie sua conta</Heading>

            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password_confirm"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Confirmar senha"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.password_confirm?.message}
                  onSubmitEditing={handleSubmit(handleSignUp)}
                />
              )}
            />

            <Button
              size="xl"
              title="Criar conta"
              onPress={handleSubmit(handleSignUp)}
            />
          </Center>

          <Center className="flex-end mt-16">
            <Text
              className="text-gray-100 text-sm"
              style={{ marginBottom: 12 }}
            >
              Já tem uma conta?
            </Text>

            <Button
              size="xl"
              title="Voltar para o login"
              variant="outline"
              onPress={handleGoBack}
            />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
