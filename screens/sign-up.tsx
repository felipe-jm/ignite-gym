import { ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { VStack } from "@components/ui/vstack";
import { Image } from "@components/ui/image";
import { Center } from "@components/ui/center";
import { Text } from "@components/ui/text";
import { Heading } from "@components/ui/heading";
import { Input } from "@components/input";
import { Button } from "@components/button";

import BackgroundImage from "@assets/background.png";
import Logo from "@assets/logo.svg";

export function SignUp() {
  const navigator = useNavigation();

  function handleGoBack() {
    navigator.goBack();
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-grow bg-background-900 h-full"
    >
      <VStack space="4xl" className="px-10 pb-16 flex-1">
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

            <Input placeholder="Nome" />
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />

            <Button size="xl" title="Criar conta" />
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
