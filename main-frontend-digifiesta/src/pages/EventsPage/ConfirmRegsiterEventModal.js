import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const ConfirmRegsiterEventModal = ({modal,toggle}) => {
  
    return (
     <div  >
      {/* <Button color="danger" onClick={refreshPage }>something</Button> */}
      <Modal style={{zIndex:100000}} isOpen={modal} toggle={toggle} >
        <ModalHeader  toggle={toggle}>Modal title</ModalHeader>
        <ModalBody  style={{color:'green'}} >
         You have been successfully Registered for this Event
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Okay</Button>{' '}
          {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
        </ModalFooter>
      </Modal>
    </div>
    )
}

export default ConfirmRegsiterEventModal
