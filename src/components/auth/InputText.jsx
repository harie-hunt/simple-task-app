import { useEffect } from "react";
import {} from "react-router-dom";
import { useField } from "formik";

export default function InputText({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div
      className={`relative p-4 pb-0 border-b-2 ${
        meta.touched && meta.error ? "border-red-500" : "border-gray-300"
      } focus-within:border-blue-500`}
    >
      <input
        id={props.name}
        placeholder="..."
        autoComplete="off"
        {...field}
        {...props}
        className="peer container bg-transparent text-lg focus:outline-none placeholder-transparent"
      />
      <label
        htmlFor={props.name}
        className="absolute top-0 left-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:left-2 peer-focus:text-gray-500 peer-focus:text-sm"
      >
        {label}
      </label>
      {meta.touched && meta.error && (
        <div className="absolute -bottom-6 left-0 text-red-500 text-sm">
          {meta.error}
        </div>
      )}
    </div>
  );
}
