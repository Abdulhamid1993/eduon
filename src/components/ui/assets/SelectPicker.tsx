import React from "react";
import Select, { Props } from "react-select";

export interface SelectPickerProps extends Props {
  readonly fluid?: boolean;

  readonly width?: number;
  readonly minWidth?: number;

  readonly disabled?: boolean;

  readonly hintText?: string;
  readonly hasError?: boolean;
  readonly className?: string;
  readonly searchable?: boolean;
  readonly clearable?: boolean;
  readonly inputClassName?: string;
  readonly onChange?: (value: any) => void;
}

const disableStyles = {
  option: () => ({}),
  control: () => ({}),
  singleValue: () => {}
};

export function SelectPicker({
  fluid,
  width,
  hintText,
  minWidth = 100,
  hasError,
  disabled,
  className,
  searchable = true,
  clearable = true,
  inputClassName,
  onChange,
  ...props
}: SelectPickerProps) {
  return (
        <Select
          onChange={(value: any) => onChange && onChange(value)}
          {...props}
          isDisabled={disabled}
          isClearable={clearable}
          isSearchable={searchable}
          className="select--default"
          classNamePrefix="select--default"
            // @ts-ignore
          styles={disableStyles}
        />
  );
}
