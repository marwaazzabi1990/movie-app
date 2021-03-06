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
import Loding from "./component/loding";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  state = {
    loding: true,
    favorie: [],
  };
  movie = [
    {
      id: 1,
      name: "terminator ",
      description: "Lorem Ipsum est un texte d'espace réservé ",
      rating: "****",
      categorie: "Action",
      img: cover1,
    },
    {
      id: 2,
      name: "Hangover trilogy",
      description: "Lorem Ipsum est un texte d'espace réservé",
      rating: "*",
      categorie: "Action",
      img: cover2,
    },
    {
      id: 3,
      name: "Gladiator",
      description: "Lorem Ipsum est un texte d'espace réservé ",
      rating: "**",
      categorie: "Action",
      img:
        "data:image/jpeg;base64,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",
    },
    {
      id: 4,
      name: "Love Wedding ",
      description: "Lorem Ipsum est un texte d'espace réservé",
      rating: "***",
      categorie: "Action",
      img:
        "data:image/jpeg;base64,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",
    },
    {
      id: 5,
      name: "La Famille Willoughby",
      description: "Lorem Ipsum est un texte d'espace réservé",
      rating: "*****",
      categorie: "Action",
      img:
        "https://media.senscritique.com/media/000019267002/source_big/La_Famille_Willoughby.jpg",
    },
  ];

  addFavorie = (e) => {
    alert("Film in favorie");
    this.state.favorie.push(e);
  };
  remove = (e) => {
    alert("your delete this film");
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
  /*spinner*/
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loding: false,
      });
    }, 5000);
  }

  render() {
    if (this.state.loding) {
      return <Loding />;
    }
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
