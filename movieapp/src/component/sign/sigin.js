import React, { Component } from "react";
import "./sigin.css";

export default class Sigin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      Password: "",
    };
  }
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ Password: e.target.value });
  };
  authentication = () => {
    for (var i = 0; i < this.state.email.length; i++) {
      if (this.state.email[i] == localStorage.getItem("email")[i]) {
        if (this.state.Password[i] == localStorage.getItem("password")[i]) {
          alert("Bienvenue ");
        } else {
          alert("Oups! vous n'étes pas encore membre ");
        }
      }
    }
    alert("Veuillez créer un compte");
  };

  render() {
    return (
      <div>
        <form class="form">
          <h1> login Movie Films</h1>
          <label for="email" className="label-n">
            E-mail
          </label>
          <input type="email" id="email" onChange={this.handleEmailChange} />
          <br />
          <label for="password" className="label-n">
            Password
          </label>
          <input
            class=".email1"
            type="password"
            id="password"
            onChange={this.handlePasswordChange}
          />
          <br />
          <button class="bb1" onClick={this.authentication}>
            Log In
          </button>
        </form>
      </div>
    );
  }
}
