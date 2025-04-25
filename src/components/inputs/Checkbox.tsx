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
  choices: Input[];
  error?: string | null;
}

interface Input
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "name" | "type"
  > {
  name: string;
  value: string;
  label?: LabelHTMLAttributes<HTMLLabelElement>["children"] | true;
  labelClass?: LabelHTMLAttributes<HTMLLabelElement>["className"];
  containerClass?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >["className"];
  register?: ReturnType<typeof useForm>["register"];
}

export default function CustomCheckbox({ choices, error }: Props) {
  return (
    <div className="checkbox-field">
      {choices.map(function (
        { containerClass, className, label, labelClass, ...choices },
        i,
      ) {
        return (
          <div key={i} className={containerClass}>
            <input
              id={choices.name ? `${choices.name}-input` : undefined}
              {...choices}
              type="checkbox"
              className={twMerge(error && "error", className)}
            />
            <label
              hidden={!label}
              htmlFor={
                choices.id ??
                (choices.name ? `${choices.name}-input` : undefined)
              }
              className={labelClass}
            >
              {label === true ? choices.title : label}
            </label>
          </div>
        );
      })}
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
