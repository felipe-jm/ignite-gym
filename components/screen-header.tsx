import { Card } from "./ui/card";
import { Heading } from "./ui/heading";

interface ScreenHeaderProps {
  title: string;
}

export function ScreenHeader({ title }: ScreenHeaderProps) {
  return (
    <Card size="lg" className="items-center rounded-none">
      <Heading size="lg">{title}</Heading>
    </Card>
  );
}
