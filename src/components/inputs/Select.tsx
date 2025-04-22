import {
  ComponentProps,
  DetailedHTMLProps,
  HTMLAttributes,
  LabelHTMLAttributes,
} from "react";
import { twMerge } from "tailwind-merge";
import Select from "react-select";

type TProps = ComponentProps<typeof Select> & {
  hidden?: boolean;
} & {
  name: string;
  label?: LabelHTMLAttributes<HTMLLabelElement>["children"];
  labelClass?: DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >["className"];
  containerClass?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >["className"];
  error?: string;
};

const style: ComponentProps<typeof Select>["styles"] = {
  container: (base, state) => ({
    ...base,
    opacity: state.isDisabled ? 1 : 1,
    border: 0,
  }),
  control: (base) => ({
    ...base,
    borderRadius: "var(--radius-md)",
    boxShadow: "none",
    minHeight: "auto",
    backgroundColor: "transparent",
  }),
  input: (base) => ({
    ...base,
    padding: "0",
    margin: "0",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "var(--spacing-input-py) var(--spacing-input-px)",
  }),
  option: (base, state) => ({
    ...base,
    color: state.isSelected || state.isFocused ? "white" : "black",
    backgroundColor:
      state.isSelected || state.isFocused
        ? "var(--color-example-primary)"
        : "transparent",
    transition: "background-color 0.5s, color 0.5s",
  }),
  multiValueLabel: (base) => ({
    ...base,
    padding: "0 0",
  }),
};

function CustomSelect({
  label,
  labelClass,
  error,
  containerClass,
  ...props
}: TProps) {
  return (
    <div className={twMerge("select-field", containerClass)}>
      <label
        htmlFor={
          props.inputId ??
          (props.name ? `select-${props.name}-input` : undefined)
        }
        className={labelClass}
      >
        {label}
        {props.required && label && <span className="required">&nbsp;*</span>}
      </label>
      <Select
        inputId={props.name ? `select-${props.name}-input` : undefined}
        instanceId={`${props?.name}`}
        isClearable
        {...props}
        styles={{
          ...style,
          control: (base) => ({
            ...base,
            borderColor: error
              ? "var(--color-red-600)"
              : "var(--color-gray-400)",
            ":hover": {
              borderColor: error
                ? "var(--color-red-600)"
                : "var(--color-gray-400)",
            },
          }),
          ...props.styles,
        }}
      />
      {error && <span className="error-message text-sm">{error}</span>}
    </div>
  );
}

export default CustomSelect;
