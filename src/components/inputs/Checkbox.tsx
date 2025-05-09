import clsx from "clsx";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";
import { useForm } from "react-hook-form";

interface Props {
  choices: Input[];
  className?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >["className"];
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
  children: ReactNode;
  register?: ReturnType<typeof useForm>["register"];
}

export default function CustomCheckbox({ choices, error, className }: Props) {
  return (
    <div className={className}>
      {choices.map(function (
        { containerClass, className, label, labelClass, children, ...choice },
        i,
      ) {
        return (
          <div key={i} className={containerClass}>
            <div className="checkbox-field">
              <input
                id={choice.name ? `${choice.name}-input` : undefined}
                {...choice}
                type="checkbox"
                className={className}
              />
              <label
                hidden={!label}
                htmlFor={
                  choice.id ??
                  (choice.name ? `${choice.name}-input` : undefined)
                }
                className={labelClass}
              >
                {label === true ? choice.title : label}
              </label>
            </div>
            {children}
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
