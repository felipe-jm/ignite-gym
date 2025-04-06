import { useEffect, useState } from "react";
import { SectionList } from "react-native";

import { VStack } from "@components/ui/vstack";
import { Heading } from "@components/ui/heading";
import { Text } from "@components/ui/text";
import { useToast } from "@components/ui/toast";

import { ScreenHeader } from "@components/screen-header";
import { HistoryCard } from "@components/history-card";
import { ToastMessage } from "@components/toast-message";

import { api } from "@services/api";
import { AppError } from "@utils/app-error";
import { HistoryByDayDTO } from "@dtos/history-by-day-dto";
import { Loading } from "@components/loading";

export function History() {
  const toast = useToast();

  const [exercises, setExercises] = useState<HistoryByDayDTO[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  async function fetchHistory() {
    try {
      setIsLoading(true);

      const response = await api.get("/history");

      setExercises(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : "Não foi possível carregar o histórico.";

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
    fetchHistory();
  }, []);

  return (
    <VStack className="flex-1 bg-brand-gray-900">
      <ScreenHeader title="Histórico de exercícios" />

      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          sections={exercises}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <HistoryCard data={item} />}
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
      )}
    </VStack>
  );
}
