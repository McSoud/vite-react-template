import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { SvgLoading } from "@mcsoud/react-ui";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
}

export const ButtonPrimary = ({ isLoading, ...props }: Props) => {
  return (
    <button
      type="button"
      {...props}
      disabled={isLoading || props.disabled}
      className={twMerge("button primary single-grid", props.className)}
    >
      <SvgLoading
        className={clsx(
          "single-grid__item m-auto w-6 fill-white transition-opacity duration-300",
          isLoading ? "opacity-100" : "opacity-0",
        )}
      />
      <span
        className={clsx(
          "single-grid__item",
          isLoading ? "opacity-0" : "opacity-100",
        )}
      >
        {props.children ?? props.title}
      </span>
    </button>
  );
};
export default ButtonPrimary;
