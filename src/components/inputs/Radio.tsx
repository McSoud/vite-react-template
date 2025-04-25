import clsx from "clsx";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface Props {
  name: string;
  choices: Input[];
  error?: string | null;
  register?: ReturnType<typeof useForm>["register"];
}
interface Input
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "name" | "id" | "type"
  > {
  id: string;
  value: string;
  label?: LabelHTMLAttributes<HTMLLabelElement>["children"] | true;
  labelClass?: LabelHTMLAttributes<HTMLLabelElement>["className"];
  containerClass?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >["className"];
}

export default function CustomRadio({ name, choices, error, register }: Props) {
  return (
    <div className="radio-field">
      {choices.map(
        ({ containerClass, className, label, labelClass, ...choice }, i) => (
          <div key={i} className={containerClass}>
            <input
              {...choice}
              {...(register ? register(name) : {})}
              type="radio"
              name={name}
              className={twMerge(error && "error", className)}
            />
            <label hidden={!label} htmlFor={choice.id} className={labelClass}>
              {label === true ? choice.title : label}
            </label>
          </div>
        ),
      )}
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
}
