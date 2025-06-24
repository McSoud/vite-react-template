import { ButtonHTMLAttributes, DetailedHTMLProps, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { SvgLoadingSpinner } from "@mcsoud/react-ui";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
  secondary?: boolean;
}

export const ButtonPrimary = ({ isLoading, secondary, ...props }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const width = ref !== null ? ref.current?.offsetWidth : 0;
  return (
    <button
      type="button"
      style={{ width: isLoading ? `${width}px` : undefined }}
      {...props}
      disabled={isLoading || props.disabled}
      ref={ref}
      className={twMerge("button button__primary", props.className)}
    >
      {isLoading ? (
        <SvgLoadingSpinner className="mx-auto w-6" />
      ) : (
        (props.children ?? props.title)
      )}
    </button>
  );
};
export default ButtonPrimary;
