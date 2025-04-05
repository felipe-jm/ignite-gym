import { useState } from "react";
import { SectionList } from "react-native";

import { VStack } from "@/components/ui/vstack";
import { ScreenHeader } from "@/components/screen-header";
import { HistoryCard } from "@/components/history-card";
import { Heading } from "@/components/ui/heading";

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
    <VStack className="flex-1 bg-background-100">
      <ScreenHeader title="Histórico de exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={() => <HistoryCard />}
        renderSectionHeader={({ section: { title } }) => (
          <Heading>{title}</Heading>
        )}
        style={{ paddingHorizontal: 32, marginTop: 16 }}
        contentContainerStyle={
          exercises.length === 0
            ? { flex: 1, justifyContent: "center" }
            : { gap: 16 }
        }
        ListEmptyComponent={<Heading>Nenhum exercício realizado</Heading>}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
