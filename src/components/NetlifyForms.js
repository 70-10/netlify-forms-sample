import React from "react";
import useForm from "react-hook-form";
import { navigate } from "gatsby";
import qs from "querystring";

export const Basic = ({ name, successPath }) => {
  const { register, handleSubmit, errors } = useForm();
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
    <form
      name={name}
      method="POST"
      data-netlify="true"
      action={successPath}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>
        Your Name:
        <input type="text" name="name" ref={register({ required: true })} />
        {errors.name && "Name is required"}
      </label>
      <label>
        Messages:
        <textarea name="message" ref={register({ required: true })} />
        {errors.message && "Message is required"}
      </label>
      <button type="submit">submit</button>
    </form>
  );
};
