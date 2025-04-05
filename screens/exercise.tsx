import { ScrollView, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

import { Icon } from "@components/ui/icon";
import { Text } from "@components/ui/text";
import { VStack } from "@components/ui/vstack";
import { HStack } from "@components/ui/hstack";
import { Heading } from "@components/ui/heading";
import { Image } from "@components/ui/image";
import { Box } from "@components/ui/box";
import { Button } from "@components/button";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack className="flex-1 bg-brand-gray-900">
      <VStack className="px-8 bg-brand-gray-600 pt-16">
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color="#00B37E" size="xl" />
        </TouchableOpacity>

        <HStack className="justify-between items-center mt-4 mb-8">
          <Heading className="text-gray-100 text-lg shrink-1">
            Puxada frontal
          </Heading>

          <HStack className="items-center gap-2">
            <BodySvg />

            <Text className="text-brand-gray-200 capitalize">Costas</Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <VStack className="p-8">
          <Image
            source={{
              uri: "https://github.com/felipe-jm.png",
            }}
            alt="Nome do exercício"
            className="w-full h-80 rounded-lg mb-3"
            resizeMode="cover"
          />

          <Box className="bg-brand-gray-600 rounded-md pb-4 px-4">
            <HStack
              space="lg"
              className="items-center justify-around mb-6 mt-5"
            >
              <HStack space="sm">
                <SeriesSvg />
                <Text className="text-brand-gray-200 ml-2">4 séries</Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text className="text-brand-gray-200 ml-2">12 repetições</Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
