import {} from "react";
import {} from "react-router-dom";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";

import { InputText, ButtonForm } from "../../components/auth";

export default function Register() {
  //

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object().shape({
      username: Yup.string().required("Tidak boleh kosong"),
      password: Yup.string().required("Tidak boleh kosong"),
      confirmPassword: Yup.string().required("Tidak boleh kosong"),
    }),

    onSubmit: (values, actions) => {
      console.log(values);
      console.log(actions);
    },
  });

  // console.log(formik);

  return (
    <main className="flex min-h-screen">
      <section className="container bg-blue-100 hidden md:block"></section>

      <section className="w-full md:w-2/6">
        <div className="w-4/6 mx-auto mt-20 space-y-8">
          <header className="text-4xl text-center">Register</header>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="..."
                autoComplete="off"
                className="container border p-2 rounded-md focus:shadow focus:outline-none"
                {...formik.getFieldProps("username")}
              />
              {formik.errors.username && formik.touched && (
                <div className="text-red-500 text-sm">
                  {formik.errors.username}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="username" className="">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="..."
                autoComplete="off"
                className="container border p-2 rounded-md focus:shadow focus:outline-none"
                {...formik.getFieldProps("password")}
              />
              {formik.errors.password && (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="username" className="">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="..."
                autoComplete="off"
                className="container border p-2 rounded-md focus:shadow focus:outline-none"
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.errors.confirmPassword && (
                <div className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary disabled:bg-gray-700"
              disabled={!formik.isValid}
            >
              Register
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
