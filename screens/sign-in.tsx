import { useState } from "react";
import { ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { VStack } from "@components/ui/vstack";
import { Image } from "@components/ui/image";
import { Center } from "@components/ui/center";
import { Text } from "@components/ui/text";
import { Heading } from "@components/ui/heading";
import { useToast } from "@components/ui/toast";

import { Input } from "@components/input";
import { Button } from "@components/button";
import { ToastMessage } from "@components/toast-message";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import BackgroundImage from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { AppError } from "@utils/app-error";

import { useAuth } from "@routes/hooks/useAuth";

type FormData = {
  email: string;
  password: string;
};

const signInSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export function SignIn() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  const toast = useToast();

  const { signIn } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function handleNewAccount() {
    navigator.navigate("signUp");
  }

  async function handleSignIn({ email, password }: FormData) {
    try {
      setIsLoading(true);
      await signIn(email, password);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : "Não foi possível acessar. Tente novamente mais tarde.";

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            id={id}
            action="error"
            title={title}
            onClose={() => toast.close(id)}
          />
        ),
      });
    } finally {
      setIsLoading(false);
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

            <Text className="text-sm">Faça login para continuar</Text>
          </Center>

          <Center className="gap-2" style={{ marginTop: 100 }}>
            <Heading className="text-white text-2xl">Acesse sua conta</Heading>

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
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
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Button
              title="Acessar"
              onPress={handleSubmit(handleSignIn)}
              isLoading={isLoading}
            />
          </Center>

          <Center className="flex-end mt-16">
            <Text className="text-sm mb-4 font-body">
              Ainda não tem acesso?
            </Text>

            <Button
              size="xl"
              title="Criar conta"
              variant="outline"
              onPress={handleNewAccount}
            />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
