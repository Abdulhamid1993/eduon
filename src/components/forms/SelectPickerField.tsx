import React, { useMemo } from "react";
import { useField } from "formik";
import { SelectPicker, SelectPickerProps } from "../ui/assets/SelectPicker";


// @ts-ignore
export interface SelectPickerFieldProps extends SelectPickerProps {
  readonly name: string;
  readonly onChanges?: (value: any) => void;
  readonly placeholder?: string;
  readonly options?: object;
}

export function SelectPickerField({ name, onChanges, ...inputProps }: SelectPickerFieldProps) {
  const [field, meta, helpers] = useField(name);

  const showError = useMemo(() => Boolean(meta.touched && meta.error), [meta]);

    return (
        // @ts-ignore
        <SelectPicker
      hasError={showError}
      hintText={showError ? meta.error : undefined}
      {...field}
      {...inputProps}
      onChange={(value: any) => {
        helpers.setValue(value);
        onChanges && onChanges(value);
      }}
    />
  );
}
