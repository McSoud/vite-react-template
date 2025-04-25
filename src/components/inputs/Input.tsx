import clsx from "clsx";
import {
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  forwardRef,
} from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "name" | "title" | "type"
  > {
  name: string;
  title: string;
  type: Omit<HTMLInputTypeAttribute, "checkbox" | "hidden" | "radio">;
  label?: LabelHTMLAttributes<HTMLLabelElement>["children"] | true;
  labelClass?: LabelHTMLAttributes<HTMLLabelElement>["className"];
  containerClass?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >["className"];
  error?: string | null;
  ref: ForwardedRef<HTMLInputElement>;
}

const CustomInput = forwardRef<HTMLInputElement, Props>(
  ({ label = false, labelClass, containerClass, error, ...props }, ref) => {
    return (
      <div className={twMerge("input-field", containerClass)}>
        <label
          hidden={!label}
          htmlFor={props.id ?? (props.name ? `${props.name}-input` : undefined)}
          className={labelClass}
        >
          {label === true ? props.title : label}
          {props.required && label && <span className="required">&nbsp;*</span>}
        </label>
        <input
          id={props.name ? `${props.name}-input` : undefined}
          {...props}
          type={props.type as HTMLInputTypeAttribute}
          ref={ref}
          className={twMerge(error && "error", props.className)}
        />
        <div
          className={clsx(
            "grid transition-[grid-template-rows] duration-300",
            error ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <p className="error-message overflow-hidden text-sm">{error}</p>
        </div>
      </div>
    );
  },
);

export default CustomInput;
