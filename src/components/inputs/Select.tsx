import {
  ComponentProps,
  DetailedHTMLProps,
  HTMLAttributes,
  LabelHTMLAttributes,
  useEffect,
  useRef,
} from "react";
import { twMerge } from "tailwind-merge";
import Select from "react-select";

type TProps = ComponentProps<typeof Select> & {
  title?: string;
  hidden?: boolean;
} & {
  label?: LabelHTMLAttributes<HTMLLabelElement>["children"] | true;
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
  control: (base, state) => ({
    ...base,
    borderRadius: "var(--radius-md)",
    borderColor: state.menuIsOpen
      ? "var(--color-example-primary)"
      : "var(--color-gray-400)",
    boxShadow: "none",
    minHeight: "auto",
    backgroundColor: "transparent",
    ":hover": {
      borderColor: "var(--color-example-primary)",
    },
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

const CustomSelect = ({
  label,
  labelClass,
  error,
  containerClass,
  ...props
}: TProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const input = ref.current?.querySelector("input");
    const valueInput = ref.current?.querySelector(`input[name=${props.name}]`);
    if (input && props.title) input.setAttribute("title", props?.title);
    if (valueInput) {
      valueInput.setAttribute("autoComplete", "off");
      if (props.defaultValue)
        valueInput.setAttribute("value", props.defaultValue as string);
    }
    // eslint-disable-next-line
  }, [props?.placeholder]);
  return (
    <div ref={ref} className={containerClass}>
      <label
        htmlFor={
          props.inputId
            ? props.inputId
            : props.name
              ? `react-select-${props.name}-input`
              : undefined
        }
        className={twMerge(
          "text-example-primary mb-0.5 block font-bold",
          labelClass,
        )}
      >
        {label === true ? props.title : label}
        {props.required && label && (
          <span className="text-red-600">&nbsp;*</span>
        )}
      </label>
      <Select
        inputId={props.name ? `react-select-${props.name}-input` : undefined}
        instanceId={`${props?.name}`}
        isClearable
        {...props}
        styles={{ ...style, ...props.styles }}
      />
      {error && (
        <span className="mt-1.5 ml-5 text-sm text-red-600 first-letter:uppercase">
          {error}
        </span>
      )}
    </div>
  );
};

export default CustomSelect;
