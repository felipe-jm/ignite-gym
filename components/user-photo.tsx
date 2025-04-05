import { Image } from "./ui/image";

type UserPhotoProps = React.ComponentProps<typeof Image>;

export function UserPhoto({ ...props }: UserPhotoProps) {
  return (
    <Image
      className="h-12 w-12 rounded-full border-2 border-brand-gray-400 bg-brand-gray-700"
      {...props}
    />
  );
}
