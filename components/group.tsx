import { ComponentProps } from "react";

import { Button } from "./ui/button";
import { Text } from "./ui/text";

type GroupProps = ComponentProps<typeof Button> & {
  name: string;
  isActive: boolean;
};

export function Group({ name, isActive, ...props }: GroupProps) {
  return (
    <Button
      {...props}
      className={`h-12 w-full items-center justify-center rounded-md border-2 border-transparent bg-brand-gray-700 ${
        isActive ? "border-brand-green-500" : "border-transparent"
      }`}
    >
      <Text
        className={`text-gray-200 bold text-base uppercase ${
          isActive ? "text-brand-green-500" : "text-brand-gray-200"
        }`}
      >
        {name}
      </Text>
    </Button>
  );
}
