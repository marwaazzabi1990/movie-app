import React,{Component} from 'react'
import '../movies/AddMovieModal.css'
import {Modal,Button,Row,Col,Form,ModalHeader, ModalBody, ModalFooter} from'react-bootstrap'
export class AddMoviesModal extends Component{
    constructor(props){
        super(props);
      
  }
   
 
    render(){
        return(
            <Modal
            {...this.props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            
            centered={true}
            className="Modal"
          >
            <Modal.Header  >
              <Modal.Title id="contained-modal-title-vcenter" >
              <h2 className="modal-hecader"> Add Movies</h2> 
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
              <div className="FormAddMovie">
      
        <form className="form-ajout">
          <input
            value={this.props.state.name}
            name="description"
            type="text"
            placeholder="Name Movie"
            onChange={(e) => {
              this.props.addfilmName(e.target.value);
            }}
           
          /><br/><br/>
          <input
           value={this.props.state.description}
            type="text"
            name="name"
            placeholder="Description of the movie"
            onChange={(e) => {
              this.props.addfilmDescription(e.target.value);
            }}
           
          /><br/><br/>
          <input
           value={this.props.state.rating}
            name="description"
            type="text"
            placeholder="Rate of the movie "
            onChange={(e) => {
              this.props.addfilmRate(e.target.value);
            }}
          
          /> <br/><br/>
          <input
           value={this.props.state.rating}
            name="img"
            type="text"
            placeholder="URL Image"
            onChange={(e) => {
              this.props.addfilmimg(e.target.value);
            }}
            
          /> <br/><br/>
        
        </form>
        <Button      
              
              onClick={this.props.addObjectMovie}
              className="btn-ajout"
                 >Add Movie</Button>
      </div>
              </div>
            
            </Modal.Body>
            <Modal.Footer >
        
              <Button  onClick={this.props.onHide} className="close-button">Close</Button>
            </Modal.Footer>
          </Modal>
        );
    }
}