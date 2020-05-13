import React, { Component } from 'react';
import './sigin.css'
 
/*verif = (e) => {
  movie.push({
    name: this.state.name,
    description: this.state.description,
    rating: this.state.rating,
  });
}*/ 

function Sigin() {

  return (
    <div>
   

 <h1> login </h1> 
 <form>
 <input type="text" placeholder="login"/><br/><br/>
 <input type="pasword" placeholder="Your Passwords"/><br/><br/>
 <button type="submit" value="log in" >log in</button>
 </form>
   
  
 
</div>

    
  );
}

export default Sigin;
