import { Input as GluestackInput, InputField } from "@/components/ui/input";
import { cn } from "@/utils/cn";

type InputProps = React.ComponentProps<typeof InputField>;

export function Input({ className, ...props }: InputProps) {
  return (
    <GluestackInput
      className={cn(
        className,
        "bg-brand-gray-700",
        "h-14",
        "px-4",
        "rounded-md",
        "border",
        "border-brand-gray-700",
        "data-[focus=true]:border-brand-green-500"
      )}
    >
      <InputField className="text-white" {...props} />
    </GluestackInput>
  );
}
