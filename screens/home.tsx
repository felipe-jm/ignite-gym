import { useState } from "react";
import { FlatList } from "react-native";

import { HomeHeader } from "@components/home-header";
import { VStack } from "@components/ui/vstack";
import { Group } from "@components/group";
import { HStack } from "@components/ui/hstack";
import { Heading } from "@components/ui/heading";
import { Text } from "@components/ui/text";
import { ExerciseCard } from "@components/exercise-card";

export function Home() {
  const [exercises, setExercises] = useState([
    "Puxada frontal",
    "Remada",
    "Levantamento terra",
  ]);

  const [groups, setGroups] = useState<string[]>([
    "Costas",
    "Biceps",
    "Triceps",
    "Pernas",
  ]);

  const [selectedGroup, setSelectedGroup] = useState<string>("Costas");

  return (
    <VStack className="flex-1 bg-brand-gray-900">
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

      <VStack className="flex-1 px-8">
        <HStack className="flex-1 gap-2 items-center justify-between">
          <Heading className="text-gray-200 font-bold text-base">
            Exercícios
          </Heading>

          <Text className="text-gray-200 font-regular text-sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={() => <ExerciseCard />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
        />
      </VStack>
    </VStack>
  );
}
