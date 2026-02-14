import clsx from "clsx";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { twMerge } from "tailwind-merge";
interface Props
  extends Omit<
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    "name" | "title"
  > {
  name: string;
  title: string;
  label?: LabelHTMLAttributes<HTMLLabelElement>["children"];
  labelClass?: LabelHTMLAttributes<HTMLLabelElement>["className"];
  containerClass?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >["className"];
  error?: string | null;
}

export default function Textarea({
  label,
  labelClass,
  containerClass,
  error,
  ...props
}: Props) {
  return (
    <div className={twMerge("textarea-field", containerClass)}>
      <label
        hidden={!label}
        htmlFor={props.id ?? (props.name ? `${props.name}-input` : undefined)}
        className={twMerge("label", labelClass)}
      >
        {label !== true ? label : props.title}
        {props.required && label && <span className="required">&nbsp;*</span>}
      </label>
      <textarea
        id={props.name ? `${props.name}-input` : undefined}
        {...props}
        className={twMerge(error && "error", props.className)}
      />
      <div
        className={clsx(
          "grid transition-[grid-template-rows] duration-300",
          error ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <p className="input-error-message overflow-hidden text-sm">
          {error ?? <>&nbsp;</>}
        </p>
      </div>
    </div>
  );
}
