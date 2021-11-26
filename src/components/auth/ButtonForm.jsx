import {} from "react";
import { useField } from "formik";
import { Spinner } from "../../components/auth";

export default function ButtonForm({ isSubmitting, label, ...props }) {
  return (
    <>
      <button
        {...props}
        className={`container ${
          isSubmitting ? "bg-gray-500" : "bg-blue-500"
        } p-2 text-gray-100 font-bold tracking-wide rounded-lg hover:brightness-75 focus:ring-1 focus:ring-offset-2 focus:ring-blue-500`}
      >
        {isSubmitting ? (
          <div className="flex space-x-2 justify-center">
            <Spinner />
            <div>Loading...</div>
          </div>
        ) : (
          label
        )}
      </button>
    </>
  );
}
