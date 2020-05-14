import React, { Component } from 'react';

 
 const  detail=e=>{
        e.preventDefault();
    
      
    
      
         console.log('detail')
      
          
       
 }
  
function Movieii(props) {

    return (
      <div >
    
       <img src={props.el.img} alt="cover"  />
       <h2>{ props.el.name }</h2>
   <p> {props.el.description} </p>
   <p>{props.el.rating}</p>
   <a  href="/movieDetail.js" >Detail</a>
   
  
      </div>
    );
  }
  
  export default Movieii;
  