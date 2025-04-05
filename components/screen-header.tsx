import { Center } from "./ui/center";
import { Heading } from "./ui/heading";

interface ScreenHeaderProps {
  title: string;
}

export function ScreenHeader({ title }: ScreenHeaderProps) {
  return (
    <Center className="bg-brand-gray-600 pb-6 pt-16">
      <Heading size="lg" className="text-brand-gray-100">
        {title}
      </Heading>
    </Center>
  );
}
