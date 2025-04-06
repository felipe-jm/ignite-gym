import { ComponentProps } from "react";
import {
  Button as GluestackButton,
  ButtonText,
  ButtonSpinner,
} from "@components/ui/button";

type Props = ComponentProps<typeof GluestackButton> & {
  title: string;
  variant?: "solid" | "outline";
  isLoading?: boolean;
};

export function Button({
  title,
  isLoading = false,
  variant = "solid",
  ...rest
}: Props) {
  return (
    <GluestackButton
      {...rest}
      className={`w-full rounded-md h-14 ${
        variant === "outline"
          ? "bg-transparent border border-brand-green-500"
          : "bg-brand-green-700"
      }`}
      disabled={isLoading}
    >
      {isLoading ? (
        <ButtonSpinner
          size="small"
          className={`text-white ${variant === "outline" && "text-brand-green-500"}`}
        />
      ) : (
        <ButtonText
          className={`text-white ${variant === "outline" && "text-brand-green-500"}`}
        >
          {title}
        </ButtonText>
      )}
    </GluestackButton>
  );
}
