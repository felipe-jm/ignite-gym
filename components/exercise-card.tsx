import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { ChevronRight } from "lucide-react-native";

import { HStack } from "./ui/hstack";
import { Image } from "./ui/image";
import { VStack } from "./ui/vstack";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import { Icon } from "./ui/icon";

type ExerciseCardProps = TouchableOpacityProps;

export function ExerciseCard({ ...rest }: ExerciseCardProps) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        space="xl"
        className="items-center bg-brand-gray-500 p-2 pr-4 rounded-md mb-3"
      >
        <Image
          source={{
            uri: "https://github.com/felipe-jm.png",
          }}
          alt="Imagem do exercício"
          size="md"
          className="rounded-md "
          resizeMode="cover"
        />

        <VStack className="flex-1">
          <Heading className="text-white" size="lg">
            Remada
          </Heading>
          <Text className="text-brand-gray-200" numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={ChevronRight} color="#C4C4CC" />
      </HStack>
    </TouchableOpacity>
  );
}
