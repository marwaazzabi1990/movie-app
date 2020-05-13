import React, { Component } from 'react';
import './movie.css'
import Member from  './movei'
import cover1 from './cover1.jpeg'
import { Button,ButtonToolbar} from 'react-bootstrap';
import ButtonToolBar  from 'react-bootstrap/'
import {AddMoviesModal} from './AddMovieModal'
import DetaiModalMovie  from './DetailModalMovie'
import Detail from './movieDetai'
import AddMovie from './addmovie'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

    const users=[
      {login:'marwa',pasword:'123'},
      {login:'nour',pasword:'1234'}
       
    ]




export default class Moviei extends Component {
  state={
    Caractere: '',
    movies :this.props.movie,
    name: "",
    addModelShow : false,
    
    user:[]
  }
  
/*ADD MOVIE*/
  handleChangeName = (value) => {
    this.setState({
      name: value,
    });

  };
  handleChangeDescription = (value) => {
    this.setState({
      description: value,
    });

  };
  handleChangeimg = (value) => {
    this.setState({
      img: value,
    });

  };
  handleChangeRate = (value) => {
    this.setState({
      rate: value,
    });

  };
  addObjectMovie = (e) => {
   this.props.movie.push({
      name: this.state.name,
      description: this.state.description,
      rating: this.state.rating,
      img:this.state.img
    });
    console.log(this.props.movie);
    this.setState({ description: "",name: "" ,rating: ""  });
  };




  /*SEARCH FUNCTION*/
  SearchBar =(e)=>{
    let movies = this.state.movies
   
  if(e.target.value.length===0){
    

    this.setState({movies:this.props.movie})
     
  }
  else
  {
    this.setState({Caractere: e.target.value})
     
      let k = this.state.Caractere
     

   movies = movies.filter(el => el.name.includes(k))
  
  
  this.setState({movies:movies})
  

  }
     
  }

  

render(){
  let  addModelClose=()=>this.setState({addModelShow:false})
  let  addModelClose1=()=>this.setState({addModelShow1:false})
  return (
    <div>
     
      <div className="zone-recherche">
           <div  >
           <input className="recherchezone" type="text" placeholder="Search..."  onChange={this.SearchBar}/>
         
         </div>
         <div className="rating">
          <a className="etoile1" > <i   className="fas fa-star"></i></a>
          <a className="etoile">  <i className="fas fa-star"></i></a>
         <a className="etoile"><i className="fas fa-star"></i></a> 
         <a className="etoile">    <i className="fas fa-star"></i></a>
       <a className="etoile"> <i className="fas fa-star"></i></a> </div>
         </div>
  
    <h1 className="title">Movie library</h1>
    <div className="cards " >
  
           {this.state.movies.map(el => 
           <div className="card " key={el.id}>
            
                <img  className="card img " src={el.img}/><br/>
                   <div className="card_title">
                      <h3>{el.name}</h3><p>{el.description}</p></div>
         
                        <div className="btn-card">
                      <Link to={"/detail/"+el.id} >  <button className="btn-card-detail" >More Detail</button></Link> 
                        <Link to={"/favoris/"+el.id} >  <button  className="btn-card-detail" >Add Favori</button></Link> 
              </div>
              </div> )} 
        
           
    </div><br/>
   
 


     <ButtonToolbar>
       <button  className="buttonplus" onClick={()=>this.setState({addModelShow:true})}>Add Film</button></ButtonToolbar>
        <AddMoviesModal 
                  addfilmName={this.handleChangeName}
                  addfilmDescription={this.handleChangeDescription}
                  addfilmRate={this.handleChangeRate}
                  addfilmimg={this.handleChangeimg}
                  addObjectMovie={this.addObjectMovie}
                  state={this.state}
                  show={this.state.addModelShow}
                  onHide={addModelClose} 
                />
       
           
    
  
     
</div>


    
  );
}

}
