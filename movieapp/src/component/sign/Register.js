import React, { Component } from "react";
import "./register.css";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      newEmail: "",
      newPassword: "",
    };
  }

  handleEmailChange = (e) => {
    localStorage.setItem("email", e.target.value);
    this.setState({ newEmail: e.target.value });
  };
  handlePasswordChange = (e) => {
    localStorage.setItem("password", e.target.value);
    this.setState({ newPassword: e.target.value });
  };
  render() {
    return (
      <div>
        <form class="form">
          <h1> Sing In Movie Films</h1>
          <label for="email" className="label-n">
            E-mail
          </label>
          <input
            type="email"
            className="inp"
            id="email"
            onChange={this.handleEmailChange}
          />
          <br />{" "}
          <label for="password" className="label-n">
            Password
          </label>
          <input
            className="inp1"
            type="password"
            id="password"
            onChange={this.handlePasswordChange}
          />
          <br />
          <button class="bb12">S'inscrire</button>
        </form>
      </div>
    );
  }
}
