import React, { Component } from 'react';
import './Navbar.css'
import logo from './logo.jpg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


  const listes=[{name:"Movies",link:"/"},{name:"Favoris",link:"/favoris"},{name:"Register",link:"register"},{name:"Sigin",link:"login"}]


function Navbar(props) {

  return (
 <div className="nav-bar">
     <div >
         <img className="logo" src="https://thumbs.dreamstime.com/z/logo-heure-de-projection-du-film-sur-le-fond-blanc-135314604.jpg"></img>
     </div>
       
         <div className="inscription">
         <ul className="nav-listes">
{listes.map(el=><Link  to={el.link}>{el.name}</Link>)}

</ul>
         </div>
</div>


   
  
 


    
  );
}

export default Navbar;