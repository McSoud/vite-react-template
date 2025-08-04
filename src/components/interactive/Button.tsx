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
      className={twMerge("button primary", props.className)}
    >
      <div
        className={twMerge(
          clsx(
            "button primary absolute inset-0 grid place-items-center transition-opacity duration-300",
            isLoading ? "opacity-100" : "opacity-0",
          ),
          props.className,
        )}
      >
        <SvgLoadingSpinner className="w-6 animate-spin fill-white" />
      </div>
      {props.children ?? props.title}
    </button>
  );
};
export default ButtonPrimary;
