import React from "react";
import { navigate } from "gatsby";
import qs from "querystring";
import { Formik, Form, Field } from "formik";

export const Basic = ({ name, successPath }) => {
  const onSubmit = async data => {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: qs.stringify({
        "form-name": name,
        ...data
      })
    });
    navigate(successPath);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: ""
      }}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <label>Name: </label>
          <Field name="name" />
          {errors.name && touched.name && errors.name}
          <br />

          <label>Email: </label>
          <Field name="email" />
          {errors.email && touched.email && errors.email}

          <label>Message: </label>
          <Field name="message" />
          {errors.message && touched.message && errors.message}

          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
