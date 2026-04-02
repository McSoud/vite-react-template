import clsx from "clsx";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  LabelHTMLAttributes,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
} from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends Omit<
    DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
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
  options?: Array<OptionHTMLAttributes<HTMLOptionElement>>;
  error?: string | null;
}

export default function Select({
  label,
  labelClass,
  containerClass,
  options,
  error,
  ...props
}: Props) {
  return (
    <div className={twMerge("select-field", containerClass)}>
      <label
        hidden={!label}
        htmlFor={props.id ?? (props.name ? `${props.name}-select` : undefined)}
        className={twMerge("label", labelClass)}
      >
        {label !== true ? label : props.title}
        {props.required && <span className="required">&nbsp;*</span>}
      </label>
      <select
        id={props.name ? `${props.name}-select` : undefined}
        {...props}
        className={twMerge(error && "error", props.className)}
      >
        {options
          ? options.map((option, i) => (
              <option key={i} {...option}>
                {option.children}
              </option>
            ))
          : props.children}
      </select>
      <div className={clsx("accordion", error && "open")}>
        <details>
          <summary>System Requirements</summary>
          <p>
            Requires a computer running an operating system. The computer must
            have some memory and ideally some kind of long-term storage. An
            input device as well as some form of output device is recommended.
          </p>
        </details>
        <p className="input-error-message overflow-hidden text-sm">
          {error ?? <>&nbsp;</>}
        </p>
      </div>
    </div>
  );
}
