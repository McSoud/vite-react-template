import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type TProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
  "id"
> & {
  id: Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>["id"],
    "undefined"
  >;
};

export default function Main({ id, ...props }: TProps) {
  return (
    <main
      id={`${id}-content`}
      role="main"
      {...props}
      className={twMerge("h-full flex-grow content-center", props.className)}
    />
  );
}
