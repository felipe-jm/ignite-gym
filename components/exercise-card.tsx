import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { ChevronRight } from "lucide-react-native";

import { HStack } from "./ui/hstack";
import { Image } from "./ui/image";
import { Card } from "./ui/card";
import { VStack } from "./ui/vstack";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import { Icon } from "./ui/icon";

type ExerciseCardProps = TouchableOpacityProps;

export function ExerciseCard({ ...rest }: ExerciseCardProps) {
  return (
    <Card className="w-full">
      <TouchableOpacity {...rest}>
        <HStack space="xl" className="items-center">
          <Image
            source={{
              uri: "https://github.com/felipe-jm.png",
            }}
            alt="Imagem do exercício"
            size="md"
            className="rounded-md "
            resizeMode="cover"
          />

          <VStack space="sm" className="flex-1">
            <Heading>Remada</Heading>
            <Text className="text-typography-500" numberOfLines={2}>
              3 séries x 12 repetições
            </Text>
          </VStack>

          <Icon as={ChevronRight} />
        </HStack>
      </TouchableOpacity>
    </Card>
  );
}
