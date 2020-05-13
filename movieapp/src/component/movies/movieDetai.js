import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'

import './movieDetail.css'
import { Label } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class Detail extends Component{
state={
  moviesingulier:{}
}
componentDidMount(){

  


  



  
    
  
}
render(){
  return (
 <div>
   <div>< Navbar/></div>


 <h1 className="titre">Movie Detail Of<span className="tt"> {this.props.el.name}</span></h1> 
 <div className="pos">
   <div>
 <img className="img-detail" src ={this.props.el.img}/>
 </div>
 
 <div className="detail">
 <h3> <Label className="label-decription">Name</Label></h3> 
   <h2>{this.props.el.name}</h2>
   <h3> <Label className="label-decription">Category</Label></h3> 
   <h5>{this.props.el.categorie}</h5>
 <h3> <Label className="label-decription">Description</Label></h3> 
   <p>{this.props.el.description}</p> <br/>
   <Link to={"/login"} >  <button className="btn-regarde" >Watch</button></Link>
   </div>
  
 </div>
</div>

    
  );
}
}

