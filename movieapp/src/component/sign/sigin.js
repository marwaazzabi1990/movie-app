import React from "react";
import "./sigin.css";

class Sigin extends React.Component {
  state = {
    modal: false,
    firstname: "",
    lastname: "",
    mail: "",
    password: "",
    confirmpassword: "",
  };

  onChangename = (e) => {
    this.setState({ firstname: e.target.value });
  };
  onChangelastname = (e) => {
    this.setState({ lastname: e.target.value });
  };
  onChangemail = (e) => {
    this.setState({ mail: e.target.value });
  };

  onChangepassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onChangeconfirmpassword = (e) => {
    this.setState({ confirmpassword: e.target.value });
  };

  save = () => {
    if (this.state.password !== this.state.confirmpassword) {
      alert("password don`t match");
    } else {
      alert("votre donne bien enregetre");
      localStorage.setItem("firstname", this.state.firstname);
      localStorage.setItem("lastname", this.state.lastname);
      localStorage.setItem("mail", this.state.mail);
      localStorage.setItem("password", this.state.password);
    }
  };

  render() {
    return (
      <div>
        <div className="form">
          <h1 onClick={this.toggle}>SignUp</h1>
          <div>
            <span className="label-n">First Name</span>
            <input
              className="email "
              type="text"
              placeholder="First Name..."
              onChange={this.onChangename}
            />
          </div>
          <div>
            <span className="label-n">Last Name</span>

            <input
              className="email "
              type="text"
              placeholder="Last Name..."
              onChange={this.onChangelastname}
            ></input>
          </div>
          <div>
            <span className="label-n"> E-mail</span>
            <input
              className="email1"
              type="text"
              placeholder="Email..."
              onChange={this.onChangemail}
            />
          </div>
          <label className="label-n">Password</label>
          <input
            className="email "
            type="password"
            placeholder="Password..."
            onChange={this.onChangepassword}
          />
          <div>
            <label className="label-n">Confirm Password</label>
            <input
              className="recherchezone"
              type="text"
              placeholder="Confirm Password"
              onChange={this.onChangeconfirmpassword}
            />{" "}
          </div>
          <div>
            <button className="bb1" onClick={this.save}>
              Save
            </button>{" "}
            <button className="bb" onClick={this.toggle}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Sigin;
