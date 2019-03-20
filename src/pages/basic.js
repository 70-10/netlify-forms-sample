import React, { Component } from "react";
import { navigateTo } from "gatsby";
function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.changeName = this.changeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeName(e) {
    this.setState({ name: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    });
    navigateTo(form.getAttribute("action"));
  }
  render() {
    return (
      <div>
        <h1>Basic</h1>
        <form
          name="basic"
          method="POST"
          data-netlify="true"
          action="/success"
          onSubmit={this.handleSubmit}
        >
          <label>
            Your Name:{" "}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.changeName}
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
