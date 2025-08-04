import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";
import { SvgLoadingSpinner } from "@mcsoud/react-ui";
import clsx from "clsx";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
  secondary?: boolean;
}

export const ButtonPrimary = ({ isLoading, secondary, ...props }: Props) => {
  return (
    <button
      type="button"
      {...props}
      disabled={isLoading || props.disabled}
      className={twMerge("button primary single-grid", props.className)}
    >
      <SvgLoadingSpinner
        className={clsx(
          "single-grid__item m-auto w-6 animate-spin fill-white transition-opacity duration-300",
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
