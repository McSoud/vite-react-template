import clsx from "clsx";
import {
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  forwardRef,
} from "react";
import { twMerge } from "tailwind-merge";

type TProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: LabelHTMLAttributes<HTMLLabelElement>["children"] | true;
  labelClass?: LabelHTMLAttributes<HTMLLabelElement>["className"];
  containerClass?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >["className"];
  error?: string | null;
  ref: ForwardedRef<HTMLInputElement>;
};

const CustomInput = forwardRef<HTMLInputElement, TProps>(
  ({ label = false, labelClass, containerClass, error, ...props }, ref) => {
    return (
      <div className={twMerge("w-full", containerClass)}>
        <label
          hidden={!label}
          htmlFor={
            props.id ? props.id : props.name ? `${props.name}-input` : undefined
          }
          className={twMerge(
            "text-green-primary mb-0.5 block font-bold",
            labelClass,
          )}
        >
          {label === true ? props.title : label}
          {props.required && label && (
            <span className="text-red-600">&nbsp;*</span>
          )}
        </label>
        <input
          id={props.name ? `${props.name}-input` : undefined}
          {...props}
          ref={ref}
          className={twMerge(
            "px-input-px focus:border-example-primary hover:border-example-primary py-input-py w-full rounded-md border bg-transparent outline-none",
            error ? "border-red-600" : "border-gray-400",
            props.className,
          )}
        />
        <div
          className={clsx(
            "grid duration-300",
            error ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <p className="overflow-hidden text-sm text-red-500">{error}</p>
        </div>
      </div>
    );
  },
);

export default CustomInput;
