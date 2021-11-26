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
    },

    validationSchema: Yup.object().shape({
      username: Yup.string().required("Tidak boleh kosong"),
    }),

    onSubmit: (values, actions) => {
      console.log(values);
      console.log(actions);
    },
  });

  console.log(formik);

  return (
    <main className="flex min-h-screen">
      <section className="container bg-blue-100 hidden md:block"></section>

      <section className="w-full md:w-2/6">
        <div className="w-4/6 mx-auto mt-20 space-y-8">
          <header className="text-4xl text-center">Register</header>

          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="..."
              autoComplete="off"
              className="container border p-2"
              onChange={formik.handleChange}
              value={formik.values.username}
            />

            <button type="submit" className="container border p-2">
              Register
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
