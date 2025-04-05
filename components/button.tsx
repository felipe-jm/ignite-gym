import {
  ButtonSpinner,
  Button as GluestackButton,
} from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";

type ButtonProps = React.ComponentProps<typeof GluestackButton> & {
  title: string;
  variant?: "solid" | "outline";
  isLoading?: boolean;
};

export function Button({
  title,
  isLoading = false,
  variant = "solid",
  ...props
}: ButtonProps) {
  return (
    <GluestackButton
      className={`w-full h-14 items-center justify-center rounded-sm ${
        variant === "solid"
          ? "bg-brand-green-500 border-0 active:bg-brand-green-500"
          : "bg-transparent border border-brand-green-500 active:bg-transparent"
      }`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Box className="w-full h-full items-center justify-center">
          <ButtonSpinner
            className={
              variant === "solid" ? "text-white" : "text-brand-green-500"
            }
          />
        </Box>
      ) : (
        <Text
          className={`w-full text-center text-sm ${
            variant === "solid" ? "text-white" : "text-brand-green-500"
          }`}
        >
          {title}
        </Text>
      )}
    </GluestackButton>
  );
}
