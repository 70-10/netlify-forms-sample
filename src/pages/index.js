import React from "react";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Container = () => {
  const handleSubmit = async e => {
    e.preventDefault();
    const result = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encode({
        "form-name": "basic",
        name: "test-name",
        email: "test-email",
        message: "test-message"
      })
    });

    alert(JSON.stringify(result));
  };
  return (
    <div>
      <p>Netlify Forms Sample</p>
      <form data-netlify="true" onSubmit={handleSubmit}>
        {/* <label>
          Your Name: <input type="text" name="name" />
        </label> */}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Container;
