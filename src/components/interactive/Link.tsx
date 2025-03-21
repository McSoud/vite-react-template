import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type TProps = ComponentProps<typeof Link> & { secondary?: boolean };

export default function LinkPrimary({ secondary, ...props }: TProps) {
  return (
    <Link
      {...props}
      className={twMerge("button button__primary", props.className)}
    />
  );
}
