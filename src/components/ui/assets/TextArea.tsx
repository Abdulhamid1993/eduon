import cx from "classnames";
import React, {useMemo} from "react";


export interface TextAreaProps {
    readonly style?: any;
    readonly value?: string;
    readonly width?: number;
    readonly height?: number;
    readonly minWidth?: number;
    readonly className?: string;
    readonly hasError?: boolean;
    readonly inputClassName?: string;
    readonly placeholder?: string;
}

export function TextArea({
 value,
 width,
 height = 90,
 hasError,
 minWidth,
 className,
 placeholder,
 inputClassName,
 ...props
}: TextAreaProps) {


    return (
        <div
            className={cx("d-flex flex-column", className)}
            style={{width: `${width}px`, minWidth: `${minWidth}px`}}
        >

      <textarea
          {...props}
          placeholder={placeholder}
          style={{
              resize: "none",
              height: `${height}px`,
              ...props.style,
          }}
          className={cx(
              "d-flex  py-0 pl-1 pr-2 br-1",
              {
                  "is-invalid": hasError,
                  "border border-gray-light text-gray": !hasError,
              },
              inputClassName,
          )}
      >
        {value}
      </textarea>
        </div>
    );
}
