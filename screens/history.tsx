import { useState } from "react";
import { SectionList } from "react-native";

import { VStack } from "@components/ui/vstack";
import { ScreenHeader } from "@components/screen-header";
import { HistoryCard } from "@components/history-card";
import { Heading } from "@components/ui/heading";
import { Text } from "@components/ui/text";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "Costa",
      data: ["Puxada frontal", "Remada"],
    },
    {
      title: "Peito",
      data: ["Supino", "Supino inclinado"],
    },
  ]);

  return (
    <VStack className="flex-1 bg-brand-gray-900">
      <ScreenHeader title="Histórico de exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={() => <HistoryCard />}
        renderSectionHeader={({ section: { title } }) => (
          <Heading className="text-brand-gray-200 mt-10 mb-3" size="md">
            {title}
          </Heading>
        )}
        style={{ paddingHorizontal: 32 }}
        contentContainerStyle={
          exercises.length === 0
            ? { flex: 1, justifyContent: "center" }
            : { gap: 16 }
        }
        ListEmptyComponent={
          <Text className="text-brand-gray-200 text-center">
            Nenhum exercício realizado
          </Text>
        }
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
