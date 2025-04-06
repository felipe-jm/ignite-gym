import { Input as GluestackInput, InputField } from "@components/ui/input";
import { ComponentProps } from "react";
import { cn } from "@utils/cn";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
} from "./ui/form-control";

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
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} className="w-full mb-4">
      <GluestackInput
        className={cn(
          "h-14 rounded-md",
          isReadOnly ? "opacity-50" : "opacity-100",
          invalid
            ? "border border-brand-red-500"
            : "border-0 focus:border-1 focus:border-brand-green-500",
          className
        )}
        variant="outline"
        size="xl"
        isInvalid={invalid}
        isReadOnly={isReadOnly}
        isDisabled={isDisabled}
      >
        <InputField
          className={cn(
            "px-4",
            isReadOnly ? "bg-brand-gray-600" : "bg-brand-gray-700",
            "text-white",
            className
          )}
          {...rest}
        />
      </GluestackInput>

      <FormControlError>
        <FormControlErrorText className="text-brand-red-500">
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
