import React from "react";
import {
  FieldError,
  UseFormRegister,
  FieldValues,
  Path,
} from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  label?: string;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  textarea?: boolean;
  placeholder?: string;
  min?: string;
  max?: string;
  step?: number;
  autoComplete?: string;
}

const InputField = <T extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  error,
  textarea = false,
  placeholder,
  min,
  max,
  step,
  autoComplete = "off",
}: InputFieldProps<T>) => {
  return (
    <div className="relative w-full">
      {textarea ? (
        <textarea
          id={name}
          {...register(name)}
          placeholder={placeholder || label}
          autoComplete={autoComplete}
          rows={5}
          className="
            w-full bg-transparent
            border-b border-gray-300
            py-3 text-sm
            focus:outline-none focus:border-black
            transition-colors
            placeholder:text-gray-400
            resize-none
          "
        />
      ) : (
        <input
          id={name}
          type={type}
          {...register(name)}
          placeholder={placeholder || label}
          autoComplete={autoComplete}
          disabled={type === "time" && (!min || !max)}
          min={min}
          max={max}
          step={step}
          className="
            w-full bg-transparent
            border-b border-gray-300
            py-3 text-sm
            focus:outline-none focus:border-black
            transition-colors
            placeholder:text-gray-400
          "
        />
      )}

      {error && (
        <p className="text-red-500 text-xs mt-2">
          {error.message}
        </p>
      )}
    </div>
  );
};
export default InputField;