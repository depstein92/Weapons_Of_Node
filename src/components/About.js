import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class AboutModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="small"
        aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">How To Use</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Instructions</h4>
          <p>1. Search Package</p>
          <p>2. Click Add Import after Search</p>
          <p>3. Go to JSPlayGround</p>
          <p>4. Explore Packages!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AboutModal;
