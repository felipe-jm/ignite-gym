import { Input as GluestackInput, InputField } from "@components/ui/input";
import { ComponentProps } from "react";
import { cn } from "@utils/cn";

interface Props extends ComponentProps<typeof InputField> {
  errorMessage?: string | null;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
}

export function Input({
  isReadOnly = false,
  isDisabled = false,
  errorMessage = null,
  isInvalid = false,
  className,
  ...rest
}: Props) {
  return (
    <GluestackInput
      className={cn(
        "h-14 border-0 rounded-md",
        isReadOnly ? "opacity-50" : "opacity-100",
        className
      )}
      variant="outline"
      size="xl"
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
    >
      <InputField
        className={cn(
          "px-4",
          isReadOnly ? "bg-brand-gray-600" : "bg-background-700",
          "text-white",
          className
        )}
        {...rest}
      />
    </GluestackInput>
  );
}
