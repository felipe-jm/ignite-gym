import { Heading } from "./ui/heading";
import { HStack } from "./ui/hstack";
import { Text } from "./ui/text";
import { VStack } from "./ui/vstack";

export function HistoryCard() {
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
          Costas
        </Heading>

        <Text className="text-lg text-brand-gray-100" numberOfLines={1}>
          Remada
        </Text>
      </VStack>

      <Text className="text-md text-brand-gray-300">08:56</Text>
    </HStack>
  );
}
