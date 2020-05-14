import React, { Component } from "react";
import logo from "./logo.svg";

import Moviei from "./component/movies/Moviei";
import Navbar from "./component/Navbar/Navbar";
import cover1 from "./component/movies/cover1.jpeg";
import cover2 from "./component/movies/cover2.jpeg";

import Sigin from "./component/sign/sigin";
import Register from "./component/sign/Register";
import { AiTwotoneStar } from "react-icons/ai";
import Detail from "./component/movies/movieDetai";
import Favorie from "./component/favorie/favorie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  state = {
    favorie: [],
  };
  movie = [
    {
      id: 1,
      name: "hhhhhhhh",
      description: "Lorem Ipsum est un texte d'espace réservé ",
      rating: "****",
      categorie: "Documentary",
      img: cover1,
    },
    {
      id: 2,
      name: "superman",
      description: "Lorem Ipsum est un texte d'espace réservé",
      rating: "*",
      categorie: "Action",
      img: cover2,
    },
    {
      id: 3,
      name: "batman",
      description: "Lorem Ipsum est un texte d'espace réservé ",
      rating: "**",
      categorie: "Documentary",
      img: cover1,
    },
    {
      id: 4,
      name: "superman",
      description: "Lorem Ipsum est un texte d'espace réservé",
      rating: "***",
      categorie: "Action",
      img: cover2,
    },
    {
      id: 5,
      name: "superman",
      description: "Lorem Ipsum est un texte d'espace réservé",
      rating: "*****",
      categorie: "Action",
      img: cover2,
    },
  ];

  addFavorie = (e) => {
    alert("Ce film bien ajouter au favorie");
    this.state.favorie.push(e);
  };
  remove = (e) => {
    alert("supprime");
    let a = "";
    let c = [];
    for (let i = 0; i < this.state.favorie.length; i++) {
      if (e == this.state.favorie[i]) {
        a += i;
        c = [...this.state.favorie.splice(1, 1)];
      }
    }
    this.setState({
      favorie: c,
    });
  };
  /*rating*/

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <div>
                <Navbar />
              </div>

              <div>
                <Moviei movie={this.movie} addFavorie={this.addFavorie} />
              </div>
            </Route>

            <Route path="/login">
              <div>
                <Navbar />
              </div>
              <div>
                {" "}
                <Sigin />
              </div>
            </Route>
            <Route path="/register">
              <div>
                <Navbar />
              </div>
              <div>
                {" "}
                <Register />
              </div>
            </Route>
            {this.movie.map((el) => (
              <Route exact path={"/detail/" + el.id}>
                <Detail el={el} />
              </Route>
            ))}

            <Route>
              <Favorie favorie={this.state.favorie} remove={this.remove} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
