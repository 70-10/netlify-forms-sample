import React from "react";

export default () => (
  <div>
    <h1>Netlify Forms Sample</h1>
    <h2>Basic</h2>
    <form name="basic" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="basic" />
      <label>
        Your Name: <input type="text" name="name" />
      </label>
      <button type="submit">Send</button>
    </form>

    <h2>Custom Success Page</h2>
    <form
      name="custom-success-page"
      method="POST"
      data-netlify="true"
      action="/success"
    >
      <input type="hidden" name="form-name" value="custom-success-page" />
      <label>
        Your Name: <input type="text" name="name" />
      </label>
      <button type="submit">Send</button>
    </form>

    <h2>reCAPTCHA</h2>
    <form name="explicit-recaptcha" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="explicit-recaptcha" />
      <label>
        Your Name: <input type="text" name="name" />
      </label>
      <div data-netlify-recaptcha="true" />
      <button type="submit">Send</button>
    </form>

    <h2>Honeypot</h2>
    <form
      name="honeypot"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="honeypot" />
      <p>
        <label>
          Bot Field: <input name="bot-field" />
        </label>
      </p>
      <label>
        Your Name: <input type="text" name="name" />
      </label>
      <button type="submit">Send</button>
    </form>
  </div>
);
