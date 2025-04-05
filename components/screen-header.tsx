import { Center } from "./ui/center";
import { Heading } from "./ui/heading";

type ScreenHeaderProps = {
  title: string;
};

export function ScreenHeader({ title }: ScreenHeaderProps) {
  return (
    <Center className="flex-row w-full justify-between items-center bg-brand-gray-700 pb-6 pt-16">
      <Heading className="text-white font-bold text-lg">{title}</Heading>
    </Center>
  );
}
