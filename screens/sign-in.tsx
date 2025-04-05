import { ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { VStack } from "@components/ui/vstack";
import { Image } from "@components/ui/image";
import { Center } from "@components/ui/center";
import { Text } from "@components/ui/text";
import { Heading } from "@components/ui/heading";
import { Input } from "@components/input";
import { Button } from "@components/button";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import BackgroundImage from "@assets/background.png";
import Logo from "@assets/logo.svg";

export function SignIn() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigator.navigate("signUp");
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack className="flex-1 bg-brand-gray-900">
        <Image
          className="w-full h-[624px]"
          defaultSource={BackgroundImage}
          source={BackgroundImage}
          alt="Pessoas treinando"
        />

        <VStack
          className="flex-1 items-center justify-center"
          style={{ marginTop: -700, marginInline: 42 }}
        >
          <Center>
            <Logo />

            <Text className="text-brand-gray-100 text-sm">
              Faça login para continuar
            </Text>
          </Center>

          <Center className="gap-2" style={{ marginTop: 100 }}>
            <Heading className="text-brand-gray-100 text-2xl font-bold">
              Acesse sua conta
            </Heading>

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />

            <Button title="Acessar" />
          </Center>

          <Center style={{ paddingTop: 256 }}>
            <Text
              className="text-brand-gray-100 text-sm"
              style={{ marginBottom: 12 }}
            >
              Ainda não tem acesso?
            </Text>

            <Button
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
