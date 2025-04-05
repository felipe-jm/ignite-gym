import { ComponentProps } from "react";

import { Image } from "./ui/image";

type UserPhotoProps = ComponentProps<typeof Image>;

export function UserPhoto({ ...rest }: UserPhotoProps) {
  return (
    <Image
      className="rounded-full border-2 border-primary-300 bg-primary-500"
      {...rest}
    />
  );
}
