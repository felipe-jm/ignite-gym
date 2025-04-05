import { ComponentProps } from "react";
import { Button } from "./ui/button";
import { Text } from "./ui/text";

interface Props extends ComponentProps<typeof Button> {
  name: string;
  isActive: boolean;
}

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Button
      {...rest}
      className={`
        mr-3
        min-w-24
        h-10
        bg-brand-gray-600
        rounded-md
        justify-center
        items-center
        border-brand-green-500                
        active:border
        active:border-brand-green-500  
        ${isActive ? "border" : "border-none"}
    `}
    >
      <Text
        className={`
            ${isActive ? "text-brand-green-500" : "text-brand-gray-200"} 
            uppercase
            text-sm
            font-heading
        `}
      >
        {name}
      </Text>
    </Button>
  );
}
