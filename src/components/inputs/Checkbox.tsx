import clsx from "clsx";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";

interface Props {
  choices: Input[];
  className?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >["className"];
}

interface Input
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "name" | "type"
  > {
  name: string;
  value: string;
  label?: LabelHTMLAttributes<HTMLLabelElement>["children"];
  labelClass?: LabelHTMLAttributes<HTMLLabelElement>["className"];
  containerClass?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >["className"];
  children?: ReactNode;
  error?: string | null;
}

export default function Checkbox({ choices, className }: Props) {
  return (
    <div className={className}>
      {choices.map(function (
        {
          containerClass,
          className,
          label,
          labelClass,
          children,
          error,
          ...choice
        },
        i,
      ) {
        return (
          <div key={i} className={containerClass}>
            <div className="checkbox-field">
              <input
                id={`${choice.name}-checkbox`}
                {...choice}
                type="checkbox"
                className={className}
              />
              <label
                hidden={!label}
                htmlFor={choice.id ?? `${choice.name}-checkbox`}
                className={labelClass}
              >
                {label !== true ? label : choice.title}
              </label>
            </div>
            {children}
            <div className={clsx("accordion", error && "open")}>
              <p className="input-error-message overflow-hidden text-sm">
                {error ?? <>&nbsp;</>}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
