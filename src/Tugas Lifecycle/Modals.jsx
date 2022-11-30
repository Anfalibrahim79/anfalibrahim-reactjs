import React from 'react'
import { Modal } from 'react-bootstrap'

export default class Modals extends React.Component {
    constructor(props){
        super(props);
        this.state={
            lgShow : false,
        }
        this.setState()
    }
    render() {

    
    return (
        <Modal
        size="lg"
        show={this.state.lgShow}
        onClose={() => this.setState(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    )
  }
}
