import { useState } from "react";
import { FlatList } from "react-native";

import { HomeHeader } from "@/components/home-header";
import { VStack } from "@/components/ui/vstack";
import { Group } from "@/components/group";

export function Home() {
  const [groups, setGroups] = useState<string[]>([
    "Costas",
    "Biceps",
    "Triceps",
    "Pernas",
  ]);

  const [selectedGroup, setSelectedGroup] = useState<string>("");

  return (
    <VStack className="flex-1 bg-brand-gray-900">
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={selectedGroup === item}
            onPress={() => setSelectedGroup(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />
    </VStack>
  );
}
