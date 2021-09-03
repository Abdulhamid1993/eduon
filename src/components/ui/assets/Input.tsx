import cx from "classnames";
import React, {useState} from "react";
import "../../css/SignUpPage3.css";
import Hide from "../../icons/Hide.svg";
import {InputProps as NativeInputProps} from "../../../api/AppDTO"
import View from "../../icons/View.svg"

export interface InputProps extends Omit<NativeInputProps, "size" | "placeholder" | "className"> {
  readonly width?: number;
  readonly height?: number;
  readonly maxWidth?: number;
  readonly hintText?: string;
  readonly minWidth?: number;
  readonly hasError?: boolean;
  readonly className?: string;
  readonly editable?: boolean;
  readonly inputClassName?: string;
  readonly disabled?: boolean;
  readonly placeholder? :string;
  readonly type?: string;
}

export function Input({
  width,
  height,
  hintText,
  maxWidth,
  minWidth,
  hasError,
  disabled,
  editable = true,
  className,
  placeholder,
  inputClassName,
  ...props
}: InputProps) {

  const [passwordVisible, setPasswordVisible] = useState(false);


  return (
    <div
      className={cx("d-flex flex-column input-control", className)}
      style={{ width: `${width}px`, maxWidth: `${maxWidth}px`, minWidth: `${minWidth}px` }}
    >
      <div className="input-box">
        <input
          autoComplete="off"
          {...props}
          type={passwordVisible ? "text" : props.type}
          contentEditable={editable}
          placeholder={placeholder}
          className={inputClassName}
          disabled={disabled || !editable}
          style={{ height: `${height}px` }}

        />
        {props.type === "password" ? (
            <div className="eye-icon" onClick={() => setPasswordVisible((prev) => !prev)}>
              {passwordVisible ? <img src={Hide} alt=""/> :  <img src={View} alt=""/>}
            </div>
        ) : (
            <span />
        )}
      </div>

      {Boolean(hintText) && <span className={cx({ "text-danger": hasError })}>{hintText}</span>}
    </div>
  );
}
