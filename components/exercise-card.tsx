import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { ChevronRight } from "lucide-react-native";

import { HStack } from "./ui/hstack";
import { Image } from "./ui/image";
import { VStack } from "./ui/vstack";
import { Text } from "./ui/text";
import { Heading } from "./ui/heading";
import { Icon } from "./ui/icon";

type ExerciseCardProps = TouchableOpacityProps;

export function ExerciseCard({ ...props }: ExerciseCardProps) {
  return (
    <TouchableOpacity {...props}>
      <HStack className="w-full h-36 rounded-lg bg-brand-gray-700 items-center justify-center overflow-hidden">
        <Image
          source={{ uri: "https://github.com/felipe-jm.png" }}
          className="w-16 h-16"
          alt="Imagem do exercício"
          resizeMode="cover"
        />

        <VStack>
          <Heading className="text-white font-bold text-lg">
            Puxada frontal
          </Heading>

          <Text className="text-white font-regular text-sm line-clamp-2">
            3 séries x 10 repetições
          </Text>
        </VStack>

        <Icon as={ChevronRight} className="text-white" />
      </HStack>
    </TouchableOpacity>
  );
}
