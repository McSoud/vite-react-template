import clsx from "clsx";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  name: string;
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
    "name" | "id" | "type"
  > {
  id: string;
  value: string;
  label?: LabelHTMLAttributes<HTMLLabelElement>["children"];
  labelClass?: LabelHTMLAttributes<HTMLLabelElement>["className"];
  containerClass?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >["className"];
  children?: ReactNode;
}

export default function Radio({ name, className, choices, error }: Props) {
  return (
    <div className={className}>
      {choices.map(
        (
          { containerClass, className, label, labelClass, children, ...choice },
          i,
        ) => (
          <div key={i} className={containerClass}>
            <div className="radio-field">
              <input
                {...choice}
                type="radio"
                name={name}
                className={twMerge(error && "error", className)}
              />
              <label hidden={!label} htmlFor={choice.id} className={labelClass}>
                {label !== true ? label : choice.title}
              </label>
            </div>
            {children}
          </div>
        ),
      )}
      <div className={clsx("accordion", error && "open")}>
        <p className="input-error-message overflow-hidden text-sm">
          {error ?? <>&nbsp;</>}
        </p>
      </div>
    </div>
  );
}
