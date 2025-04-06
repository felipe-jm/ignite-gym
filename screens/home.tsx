import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";

import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { VStack } from "@components/ui/vstack";
import { Group } from "@components/group";
import { HStack } from "@components/ui/hstack";
import { Heading } from "@components/ui/heading";
import { Text } from "@components/ui/text";
import { useToast } from "@components/ui/toast";

import { HomeHeader } from "@components/home-header";
import { ExerciseCard } from "@components/exercise-card";
import { ToastMessage } from "@components/toast-message";
import { Loading } from "@components/loading";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { api } from "@services/api";
import { AppError } from "@utils/app-error";

import { ExerciseDTO } from "@dtos/exercise-dto";

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const toast = useToast();

  const [groups, setGroups] = useState<string[]>([]);

  const [exercises, setExercises] = useState<ExerciseDTO[]>([]);

  const [selectedGroup, setSelectedGroup] = useState<string>("antebraço");

  const [isLoading, setIsLoading] = useState(true);

  function handleOpenExerciseDetails(exerciseId: string) {
    navigation.navigate("exercise", { exerciseId });
  }

  async function fetchGroups() {
    try {
      const response = await api.get("/groups");

      setGroups(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : "Não foi possível carregar os grupos";

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
    }
  }

  async function fetchExercisesByGroup() {
    try {
      setIsLoading(true);

      const response = await api.get(`/exercises/bygroup/${selectedGroup}`);

      setExercises(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : "Não foi possível carregar os exercícios";

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
    fetchGroups();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchExercisesByGroup();
    }, [selectedGroup])
  );

  return (
    <VStack className="flex-1 bg-brand-gray-900 h-full">
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={selectedGroup.toLowerCase() === item.toLowerCase()}
            onPress={() => setSelectedGroup(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <VStack className="px-8 flex-1">
          <HStack className="justify-between mb-5 items-center">
            <Heading className="text-brand-gray-200">Exercícios</Heading>

            <Text className="text-brand-gray-200">{exercises.length}</Text>
          </HStack>

          <FlatList
            data={exercises}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ExerciseCard
                onPress={() => handleOpenExerciseDetails(item.id)}
                data={item}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 24 }}
          />
        </VStack>
      )}
    </VStack>
  );
}
