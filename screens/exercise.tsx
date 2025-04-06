import { useEffect, useState } from "react";

import { ScrollView, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Icon } from "@components/ui/icon";
import { Text } from "@components/ui/text";
import { VStack } from "@components/ui/vstack";
import { HStack } from "@components/ui/hstack";
import { Heading } from "@components/ui/heading";
import { Image } from "@components/ui/image";
import { Box } from "@components/ui/box";
import { Button } from "@components/button";
import { useToast } from "@components/ui/toast";
import { ToastMessage } from "@components/toast-message";
import { Loading } from "@components/loading";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";

import { api } from "@services/api";
import { AppError } from "@utils/app-error";
import { ExerciseDTO } from "@dtos/exercise-dto";

type ExerciseRouteParams = {
  exerciseId: string;
};

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const toast = useToast();

  const route = useRoute();

  const { exerciseId } = route.params as ExerciseRouteParams;

  const [exercise, setExercise] = useState<ExerciseDTO>();

  const [isLoading, setIsLoading] = useState(true);

  function handleGoBack() {
    navigation.goBack();
  }

  async function fetchExerciseDetails() {
    try {
      setIsLoading(true);

      const response = await api.get(`/exercises/${exerciseId}`);

      setExercise(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : "Não foi possível carregar os detalhes do exercício";

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

  useEffect(() => {
    fetchExerciseDetails();
  }, []);

  return (
    <VStack className="flex-1 bg-brand-gray-900">
      <VStack className="px-8 bg-brand-gray-600 pt-16">
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color="#00B37E" size="xl" />
        </TouchableOpacity>

        <HStack className="justify-between items-center mt-4 mb-8">
          <Heading className="text-gray-100 text-lg shrink-1">
            {exercise?.name}
          </Heading>

          <HStack className="items-center gap-2">
            <BodySvg />

            <Text className="text-brand-gray-200 capitalize">
              {exercise?.group}
            </Text>
          </HStack>
        </HStack>
      </VStack>

      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 32 }}
        >
          <VStack className="p-8">
            <Box className="rounded-lg mb-3 overflow-hidden">
              <Image
                source={{
                  uri: `${api.defaults.baseURL}/exercise/demo/${exercise?.demo}`,
                }}
                alt="Nome do exercício"
                className="w-full h-96"
                resizeMode="cover"
              />
            </Box>

            <Box className="bg-brand-gray-600 rounded-md pb-4 px-4">
              <HStack
                space="lg"
                className="items-center justify-around mb-6 mt-5"
              >
                <HStack space="sm">
                  <SeriesSvg />
                  <Text className="text-brand-gray-200 ml-2">
                    {exercise?.series} séries
                  </Text>
                </HStack>

                <HStack>
                  <RepetitionsSvg />
                  <Text className="text-brand-gray-200 ml-2">
                    {exercise?.repetitions} repetições
                  </Text>
                </HStack>
              </HStack>

              <Button title="Marcar como realizado" />
            </Box>
          </VStack>
        </ScrollView>
      )}
    </VStack>
  );
}
