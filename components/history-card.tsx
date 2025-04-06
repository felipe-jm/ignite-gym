import { Heading } from "./ui/heading";
import { HStack } from "./ui/hstack";
import { Text } from "./ui/text";
import { VStack } from "./ui/vstack";

import { HistoryDTO } from "@dtos/history-dto";

type HistoryCardProps = {
  data: HistoryDTO;
};

export function HistoryCard({ data }: HistoryCardProps) {
  return (
    <HStack
      className="
        w-full 
        px-5 
        py-4 
        mb-3 
        bg-brand-gray-600 
        rounded-md 
        items-center 
        justify-between
      "
    >
      <VStack className="flex-1 mr-5">
        <Heading numberOfLines={1} className="text-white text-md capitalize">
          {data.name}
        </Heading>

        <Text
          className="text-lg text-brand-gray-100 capitalize"
          numberOfLines={1}
        >
          {data.group}
        </Text>
      </VStack>

      <Text className="text-md text-brand-gray-300">{data.hour}</Text>
    </HStack>
  );
}
