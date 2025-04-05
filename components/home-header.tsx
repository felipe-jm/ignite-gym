import { Heading } from "./ui/heading";
import { HStack } from "./ui/hstack";
import { VStack } from "./ui/vstack";
import { Text } from "./ui/text";

export function HomeHeader() {
  return (
    <HStack className="w-full items-center justify-between bg-brand-gray-600 pt-16 pb-5 px-8">
      <VStack>
        <Text className="text-gray-100 font-regular text-base">Olá,</Text>
        <Heading className="text-gray-200 font-bold text-base">João</Heading>
      </VStack>
    </HStack>
  );
}
