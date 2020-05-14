import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'


import { Label } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class Favorie extends Component{

componentDidMount(){

   
}
render(){
  return (
 <div>
   <div>< Navbar/></div>

{this.props.favorie.map((el)=>(
  <div>
 {el.name}
  <img src={el.img} />
 <button onClick={()=>this.props.remove(el)}>Remove</button>
  </div>

)
 
 )}
   
</div>)
 
  
}}


