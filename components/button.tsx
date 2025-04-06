import { ComponentProps } from "react";
import {
  Button as GluestackButton,
  ButtonText,
  ButtonSpinner,
} from "@components/ui/button";

type Props = ComponentProps<typeof GluestackButton> & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <GluestackButton
      {...rest}
      className="w-full rounded-md h-14 bg-brand-green-700 "
      disabled={isLoading}
    >
      {isLoading ? (
        <ButtonSpinner size={"small"} />
      ) : (
        <ButtonText className="text-white">{title}</ButtonText>
      )}
    </GluestackButton>
  );
}
