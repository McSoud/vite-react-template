import { SvgEye, SvgEyeOff } from "@mcsoud/react-ui";
import clsx from "clsx";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
interface Props
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "name" | "title" | "type"
  > {
  type: Omit<HTMLInputTypeAttribute, "checkbox" | "hidden" | "radio">;
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

export default function Input({
  label,
  labelClass,
  containerClass,
  error,
  ...props
}: Props) {
  return (
    <div className={twMerge("input-field", containerClass)}>
      <label
        hidden={!label}
        htmlFor={props.id ?? (props.name ? `${props.name}-input` : undefined)}
        className={twMerge("label", labelClass)}
      >
        {label !== true ? label : props.title}
        {props.required && <span className="required">&nbsp;*</span>}
      </label>
      {props.type === "password" ? (
        <Password {...props} />
      ) : (
        <input
          id={props.name ? `${props.name}-input` : undefined}
          {...props}
          type={props.type as HTMLInputTypeAttribute}
          className={twMerge(error && "error", props.className)}
        />
      )}
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

interface PasswordProps
  extends Omit<Props, "type" | "label" | "labelClass" | "containerClass"> {}

function Password(props: PasswordProps) {
  const [show, setShow] = useState(false);
  function toggle() {
    setShow((prev) => !prev);
  }
  return (
    <div className="password-field">
      <input
        id={props.name ? `${props.name}-input` : undefined}
        {...props}
        type={show ? "text" : "password"}
        ref={props.ref}
        className={twMerge(props.error && "error", props.className)}
      />
      <button type="button" title={show ? "Hide" : "Show"} onClick={toggle}>
        {show ? <SvgEyeOff /> : <SvgEye />}
      </button>
    </div>
  );
}
