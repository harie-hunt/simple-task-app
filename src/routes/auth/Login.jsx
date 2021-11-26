import { useState } from "react";
import {} from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { InputText, ButtonForm } from "../../components/auth";
import { useAuthContext } from "../../contexts/AuthContext";

const initialValues = {
  username: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Tidak boleh kosong"),
  password: Yup.string().required("Tidak boleh kosong"),
});

export default function Login() {
  const { ApiAuth } = useAuthContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  //
  const onSubmit = (values, actions) => {
    setIsSubmitting(true);

    console.log(values);
    console.log(actions);

    ApiAuth.login(values).then((res) => {
      console.log(res);
      actions.setFieldError(res.param, res.msg);
      setIsSubmitting(false);
    });
  };

  return (
    <main className="flex min-h-screen">
      <section className="container bg-blue-100 hidden md:block"></section>

      <section className="w-full md:w-2/6">
        <div className="w-4/6 p-4 shadow-lg rounded-lg mx-auto mt-20 space-y-8 bg-white">
          <header className="text-4xl text-center">Login</header>

          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-8">
              <InputText label="Usename" name="username" type="text" />
              <InputText label="Password" name="password" type="password" />
              <ButtonForm
                label="Login"
                type="submit"
                isSubmitting={isSubmitting}
                disabled
              />
            </Form>
          </Formik>
        </div>
      </section>
    </main>
  );
}
