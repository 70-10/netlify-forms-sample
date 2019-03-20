import React, { useState } from "react";
import { navigate } from "gatsby";

export default function Basic() {
  const formName = "basic";
  const actionPath = "/success";
  const [form, setValues] = useState({ name: "", message: "" });

  const encode = data =>
    Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&");

  const submit = async e => {
    e.preventDefault();
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": formName,
        ...form
      })
    });

    navigate(actionPath);
  };

  const updateField = e =>
    setValues({ ...form, [e.target.name]: e.target.value });

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      action={actionPath}
      onSubmit={submit}
    >
      <label>
        Your Name:
        <input
          type="text"
          value={form.name}
          name="name"
          onChange={updateField}
        />
      </label>
      <label>
        Messages:
        <textarea value={form.message} name="message" onChange={updateField} />
      </label>
      <button type="submit">submit</button>
    </form>
  );
}
