import {
  ButtonSpinner,
  Button as GluestackButton,
} from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
type ButtonProps = React.ComponentProps<typeof GluestackButton> & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...props }: ButtonProps) {
  return (
    <GluestackButton
      className="w-full h-14 items-center justify-center bg-brand-green-500 border-0 border-brand-green-500 rounded-sm active:bg-brand-green-500"
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Box className="w-full h-full items-center justify-center">
          <ButtonSpinner className="text-white" />
        </Box>
      ) : (
        <Text className="w-full text-center text-white text-sm">{title}</Text>
      )}
    </GluestackButton>
  );
}
