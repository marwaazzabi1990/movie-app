import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";

import { Label } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Favorie extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <h1>My favorie!</h1>
          <div className="pos1">
            {this.props.favorie.map((el) => (
              <div className="pos">
                <div>
                  <img className="img-detail" src={el.img} />
                </div>

                <div className="detail">
                  <h3>
                    {" "}
                    <Label className="label-decription">Name</Label>
                  </h3>
                  <h2>{el.name}</h2>
                  <h3>
                    {" "}
                    <Label className="label-decription">Category</Label>
                  </h3>
                  <h5>{el.categorie}</h5>
                  <h3>
                    {" "}
                    <Label className="label-decription">Description</Label>
                  </h3>
                  <p>{el.description}</p> <br />
                  <button
                    className="btn-regarde"
                    onClick={() => this.props.remove(el)}
                  >
                    Remove<i class="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
