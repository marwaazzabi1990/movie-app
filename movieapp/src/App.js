import React, { Component } from 'react';
import logo from './logo.svg';

import Moviei from './component/movies/Moviei'
import Navbar from './component/Navbar/Navbar'
import cover1 from './component/movies/cover1.jpeg'

import Sigin from './component/sign/sigin'
import Register from './component/sign/Register'
import { AiTwotoneStar } from "react-icons/ai";
import Detail from './component/movies/movieDetai'
import Favorie from './component/favorie/favorie'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';




export default class App extends Component {
  movie = [
   
    {id:1,name:"batman",description:"Lorem Ipsum est un texte d'espace réservé couramment utilisé dans les industries graphique",rating:"*",categorie:"Documentary" ,img:cover1},
    {id:2,name:"superman",description:"Lorem Ipsum est un texte d'espace réservé couramment utilisé dans les industries graphique",rating:"*",categorie:"Action",img:cover1 }
    
      ]
      favorie=[
        {id:1,name:"batman",description:"Lorem Ipsum est un texte d'espace réservé couramment utilisé dans les industries graphique",rating:"*",categorie:"Documentary" ,img:cover1},
   
      ]

  componentDidUpdate(nextProps,nextState){
    localStorage.setItem('user','JSON.stringify(nextState,user)')
  
  }
  render(){
  return (
    <div className="App" >
      
      
      <Router>
      <Switch>
      <Route  exact  path='/'>
           <div>< Navbar/></div>
           
          <div  ><Moviei  movie={this.movie} /></div> 
          </Route>
         
     <Route  path='/login'>
        <div>< Navbar/></div>
          <div>  <Sigin /></div> 
          </Route>
          <Route path='/register'>
          <div>< Navbar/></div>
          <div> <Register /></div> 
          </Route>
         {this.movie.map((el) => (<Route  exact path={"/detail/"+el.id} >
          
         <Detail el={el} />
         </Route>))}
         
         {this.movie.map((el) => (<Route  exact path={"/favoris/"+el.id} >
          
         <Favorie el={el} />
         </Route>))}
       
      

      
      
        </Switch>
        </Router>

    
    </div>
  );
}}

