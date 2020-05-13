import React,{Component} from 'react'

import {Modal,Button,Row,Col,Form,ModalHeader, ModalBody, ModalFooter} from'react-bootstrap'

export  default  class AddMoviesModal extends Component{
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
              <h2 className="modal-header"> Detail de film </h2> 
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
            
        
            
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.props.onHide} className="close-button">Close</Button>
            </Modal.Footer>
            
          </Modal>
        );
    }}
